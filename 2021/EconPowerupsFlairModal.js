// https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.bcb04b5f680feb60f15b.js
// Retrieved at 10/1/2021, 6:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsFlairModal"], {
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return O
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return F
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return y
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return g
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return x
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return E
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return P
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return _
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return k
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return T
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return S
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return C
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return N
			})), r.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return U
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/sentry/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const c = async (e, t, r, s) => {
				const i = await Object(o.a)(e, {
					...d,
					variables: {
						subredditId: t,
						flairTypes: r,
						isHidden: s
					}
				});
				if (!i.ok || !i.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var l = r("./src/reddit/selectors/experiments/econ/index.ts"),
				u = r("./src/reddit/actions/gold/powerups.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/selectors/commentSelector.ts"),
				h = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				w = r("./src/reddit/actions/economics/powerups/constants.ts"),
				j = r("./src/lib/initializeClient/installReducer.ts"),
				I = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(j.a)({
				features: {
					powerups: I.a
				}
			});
			const O = Object(i.a)(w.d),
				F = Object(i.a)(w.i),
				y = Object(i.a)(w.f),
				g = Object(i.a)(w.g),
				x = Object(i.a)(w.e),
				E = Object(i.a)(w.h),
				P = (e, t) => async (r, s, {
					gqlContext: i
				}) => {
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const t = s(),
							n = Object(l.i)(t),
							c = await (async (e, t, r, s) => {
								const i = await Object(o.a)(e, {
									...a,
									variables: {
										subredditId: t,
										redditorIds: r,
										includeSupporterInfo: s
									}
								});
								if (!i.ok) throw new Error("Unable to fetch user achievements");
								return i.body.data
							})(i(), e, d, n),
							{
								subredditInfoById: u,
								redditorsInfoByIds: p
							} = c;
						await r(O(u)), n && p && await r(F(p))
					} catch (c) {
						n.c.captureException(c)
					}
				}, _ = (e, t) => async (r, s) => {
					if (!e) return;
					const i = s(),
						n = Object(v.k)(i);
					if (!n || !Object(h.g)(i, {
							subredditId: e
						})) return;
					const o = !!Object(f.e)(i, {
						subredditId: e,
						userId: n.id
					});
					!t && o || await r(P(e, [n.id]))
				}, k = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(u.l)(e, {
						fullData: !0
					}));
					const s = r();
					return Object(h.g)(s, {
						subredditId: e
					})
				}, T = e => async (t, r) => {
					var s;
					const i = r(),
						n = e.map(({
							id: e
						}) => e),
						o = Object(b.c)(i, {
							commentIds: n
						}),
						a = null === (s = o.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await t(k(a)))) return;
					const d = new Set(o.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await t(P(a, Array.from(d)))
				}, S = (e, t) => async (r, s) => {
					if (!t) return;
					if (!(await r(k(e)))) return;
					const i = new Set;
					Object.values(t).forEach(e => {
						i.add(e.authorId)
					}), await r(P(e, Array.from(i)))
				}, C = (e, t) => async (r, s) => {
					const i = s(),
						n = Object(v.k)(i);
					if (!n) return;
					const o = n.id,
						a = Object(f.i)(i, {
							subredditId: e,
							userId: o
						});
					r(L({
						subredditId: e,
						userId: o,
						achievementFlairType: t,
						supporterFlairType: a
					}))
				}, N = (e, t) => async (r, s) => {
					const i = s(),
						n = Object(v.k)(i);
					if (!n) return;
					const o = n.id,
						a = Object(f.g)(i, {
							subredditId: e,
							userId: o
						});
					r(L({
						subredditId: e,
						userId: o,
						achievementFlairType: a,
						supporterFlairType: t
					}))
				}, L = e => async (t, r, {
					gqlContext: i
				}) => {
					const o = r(),
						a = Object(v.k)(o);
					if (!a) return;
					const d = a.id;
					t(y(e));
					const {
						subredditId: l,
						achievementFlairType: u,
						supporterFlairType: b
					} = e, h = [u, b].filter(Boolean), w = Object(f.d)(o, {
						subredditId: l,
						userId: d
					});
					try {
						await c(i(), l, h, w), t(g(e))
					} catch (j) {
						t(x(e)), n.c.captureException(j), t(Object(p.f)({
							duration: p.a,
							kind: m.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, U = (e, t) => async (r, i, {
					gqlContext: o
				}) => {
					const a = i(),
						d = Object(v.k)(a);
					if (!d) return;
					const l = d.id,
						u = {
							subredditId: e,
							userId: l
						},
						b = [Object(f.g)(a, u), Object(f.i)(a, u)].filter(Boolean);
					r(E({
						...u,
						isHidden: t
					}));
					try {
						await c(o(), e, b, t)
					} catch (h) {
						r(E({
							...u,
							isHidden: !t
						})), n.c.captureException(h), r(Object(p.f)({
							duration: p.a,
							kind: m.b.Error,
							text: s.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "j", (function() {
				return f
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				n = r("./src/reddit/constants/modals.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const a = Object(s.a)(o.a),
				d = Object(s.a)(o.b),
				c = Object(s.a)(o.c),
				l = Object(s.a)(o.d),
				u = Object(s.a)(o.e),
				p = Object(s.a)(o.f),
				m = Object(s.a)(o.g),
				b = Object(s.a)(o.h),
				h = Object(s.a)(o.i),
				f = e => Object(i.h)(n.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return E
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return N
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/config.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/higherOrderComponents/makeAsync.tsx");
			var p = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("SubredditPremiumBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				m = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = r("./src/reddit/featureFlags/index.ts"),
				h = r("./src/reddit/helpers/economics/sortBadges.ts"),
				f = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = r("./src/reddit/models/Badge/index.ts");
			var w = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				j = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				I = r.n(j);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const F = "add-custom-badge-tooltip",
				y = 100,
				g = 2 * y,
				x = 24;
			class E extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, y)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, g)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return i.a.createElement("img", {
						className: Object(d.a)(I.a.image, this.props.className),
						src: `${a.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${F}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || x;
					return i.a.createElement(s.Fragment, null, this.props.showAddCustom && i.a.createElement("div", {
						className: I.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, i.a.createElement("button", {
						className: I.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, i.a.createElement(f.a, {
						className: I.a.addCustom
					})), i.a.createElement(w, {
						className: I.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(e).map(e => {
						const t = Object(v.d)(r, r, e),
							n = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return i.a.createElement(s.Fragment, {
							key: `badges-fragement-${e.id}`
						}, i.a.createElement("div", {
							className: Object(d.a)(I.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(n),
							onMouseLeave: () => this.handleMouseLeave()
						}, i.a.createElement("img", {
							className: I.a.image,
							id: n,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? i.a.createElement(p, {
							badge: e,
							correlationId: this.props.correlationId,
							className: I.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: n,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : i.a.createElement(m.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: n,
							text: e.title
						})))
					}))
				}
			}
			const P = [],
				_ = Object(o.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: r
					}) => {
						var s;
						return (null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[t]) || P
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				k = Object(o.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var r;
						const s = e.user.account;
						return s && (null === (r = e.users.appliedBadges[s.id]) || void 0 === r ? void 0 : r[t]) || P
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				T = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				});

			function S(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...s
				} = e, n = t.map(e => r[e]).filter(Boolean);
				return i.a.createElement(E, O({
					badges: n
				}, s))
			}
			const C = Object(n.b)(_, T)(S),
				N = Object(n.b)(k, T)(S)
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, r) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var s = r("./src/lib/classNames/index.ts"),
				i = r("./node_modules/react/index.js"),
				n = r.n(i),
				o = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				d = r.n(a);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				onClick: t
			}) => n.a.createElement("button", {
				onClick: t,
				className: Object(s.a)(e, d.a.closeButton),
				"aria-label": c._("Close", null, {
					hk: "3Qarlp"
				})
			}, n.a.createElement(o.b, {
				className: d.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/FlairsSection.m.less": function(e, t, r) {
			e.exports = {
				title: "_1pC-Bxab8iEhFjBysEm9Fx",
				headingPowerupsBolt: "_19DfHgka0cR07B1b-1m9vX",
				subtitle: "XW4MFnkLUQcc-RCk2bG3c",
				flairsList: "_37-EuLnMsmhTyY_SWfPUSr"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/Header.m.less": function(e, t, r) {
			e.exports = {
				container: "_32dPE02K4p96dMl5z5Kzg2"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/OldAchievementFlairs.m.less": function(e, t, r) {
			e.exports = {
				container: "_2C76QssjMTbwuEAZXe756w",
				achievementsHeading: "_3tsFRWpZfCgKCIelAv4WA0",
				headingPowerupsBolt: "_3s45QZ1IBCoKzaofDOGRQb",
				achievementsDescription: "_21pnkf6pKaEglrNI0QnGru",
				achievementsList: "G6hMtF10SDykKMgOCb_hJ",
				powerupButton: "_1YP_bFnaSli7aeHsiDGNX3",
				Icon: "_1hNiC8ThsIuEOetMJC5y1i",
				icon: "_1hNiC8ThsIuEOetMJC5y1i",
				isLeft: "_1eAj-kBFhU0sHSfsoOuviW",
				isRight: "_1UrovHuR-PfSNa2MChHgSK",
				active: "_1vJOjDCoyXkLIrKoICk0iZ"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlair.m.less": function(e, t, r) {
			e.exports = {
				achievementItem: "_2HFNbe_JNAYV87nOwbzbez",
				achievementItemLocked: "_2vCCrb4sWF_G_62m4A0ZhB",
				achievementImg: "_3D1VTTYFnQv18Tz6QkLg6b",
				achievementName: "gqQ4HlEuTd5UsqMlo0cyY",
				achievementImgLocked: "_3CIjb8D3YfrEwMzbZOLAYI",
				achievementItemActive: "_6d4dlryXnnuz-3prsQUiK",
				achievementItemSelectable: "_3ft53UhMM5u1YQ7L7K54Ez",
				achievementImgWrapper: "_3zVWjEPU2bbxa3hY1oF9Rv",
				achievementLock: "_3BhTmIRQ74FDlVTSGj5YB7",
				achievementTooltip: "_3KKt3gPL1_rotLIDySop4I"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlairsBody.m.less": function(e, t, r) {
			e.exports = {
				flairsSection: "_3hzQSBTgS0giB21d1usIHR",
				flairsVisibility: "_16-7nK9951T2vZZ0wPO_Ra",
				flairsVisibilityLabel: "_3EPtrF5q2eNGvPx3AIrzpm",
				button: "_3L_gnDKmR8FAeSRhi33G5b"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/UserFlair.m.less": function(e, t, r) {
			e.exports = {
				container: "zxsMn2uKCugEKCXsP8J_i",
				header: "_2BPctTGaKvG7xpovxPZ80P",
				flairText: "_1GputOZ-w3oP_gCLbhgwLo",
				editButton: "_6miNe5RxOJ1kieKhPgXxm",
				flair: "_6jGQKuf2PkAqP5oy683Sx"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1R8JYXvrokxOrjWamBt94g"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/higherOrderComponents/asModal/index.tsx"),
				a = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/models/User/index.ts"),
				l = r("./src/reddit/selectors/experiments/econ/index.ts"),
				u = r("./src/reddit/selectors/platform.ts"),
				p = r("./src/reddit/selectors/user.ts"),
				m = r("./src/reddit/selectors/userFlair.ts"),
				b = r("./src/lib/classNames/index.ts"),
				h = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				f = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				v = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/Header.m.less"),
				w = r.n(v);
			const j = ({
				className: e,
				subredditId: t,
				userId: r,
				flairData: s,
				onModalClose: n,
				username: o
			}) => i.a.createElement("div", {
				className: Object(b.a)(w.a.container, e),
				"data-testid": "achievement-flair-modal-header"
			}, i.a.createElement(f.a, {
				className: w.a.userFlairPreview,
				subredditId: t,
				userId: r,
				username: o,
				flairData: s
			}), i.a.createElement(h.a, {
				onClick: n
			}));
			var I = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.m.less"),
				O = r.n(I),
				F = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				y = r("./src/reddit/actions/gold/powerups.ts"),
				g = r("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				x = r("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				E = r("./src/reddit/controls/Button/index.tsx"),
				P = r("./src/reddit/helpers/trackers/powerups.ts"),
				_ = r("./src/reddit/hooks/useTracking.ts"),
				k = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				T = r("./src/reddit/selectors/gold/powerups/index.ts"),
				S = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				C = r("./src/reddit/actions/tooltip.ts"),
				N = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				L = r("./src/reddit/helpers/trackers/userFlair.ts"),
				U = r("./src/reddit/icons/fonts/index.tsx"),
				A = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlair.m.less"),
				M = r.n(A);
			const {
				fbt: B
			} = r("./node_modules/fbt/lib/FbtPublic.js"), H = ({
				achievement: e,
				onSelect: t
			}) => {
				const r = Object(n.d)(),
					s = Object(_.a)(),
					o = `achievement-locked-${e.type}`,
					a = B._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}),
					d = () => {
						if (e.isLocked) return r(Object(C.h)({
							tooltipId: o
						}))
					},
					c = !e.isLocked && !e.isPreferred;
				return i.a.createElement("div", {
					onMouseEnter: d,
					onMouseLeave: d,
					onClick: () => {
						c && t(e.type), e.isPreferred || s(Object(L.b)({
							achievementFlair: e
						}))
					},
					className: Object(b.a)(M.a.achievementItem, {
						[M.a.achievementItemLocked]: e.isLocked,
						[M.a.achievementItemActive]: e.isPreferred,
						[M.a.achievementItemSelectable]: c
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, i.a.createElement("div", {
					className: M.a.achievementImgWrapper
				}, i.a.createElement("img", {
					id: o,
					className: M.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), i.a.createElement("div", {
					className: M.a.achievementImgLocked
				}, i.a.createElement(U.a, {
					name: "lock",
					isFilled: !0,
					className: M.a.achievementLock
				}))), i.a.createElement("div", {
					className: M.a.achievementName
				}, i.a.createElement("span", null, e.name)), e.isLocked && i.a.createElement(N.c, {
					tooltipId: o,
					text: a,
					className: M.a.achievementTooltip
				}))
			};
			var D = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/OldAchievementFlairs.m.less"),
				R = r.n(D);
			const {
				fbt: Q
			} = r("./node_modules/fbt/lib/FbtPublic.js"), K = ({
				className: e,
				subredditId: t,
				userId: r
			}) => {
				const o = Object(_.a)(),
					a = Object(n.e)(e => Object(S.b)(e, {
						subredditId: t,
						userId: r
					})),
					d = Object(n.e)(e => Object(T.n)(e, {
						subredditId: t
					})),
					c = Object(n.e)(e => Object(S.h)(e, {
						subredditId: t,
						userId: r
					})),
					l = Object(n.d)(),
					u = e => {
						l(Object(F.setSubredditUserAchievementFlair)(t, e))
					},
					p = () => {
						l(Object(y.f)("user_flair_picker"))
					};
				return Object(s.useEffect)(() => {
					Object(g.a)()
				}, []), i.a.createElement("div", {
					className: Object(b.a)(R.a.container, e)
				}, i.a.createElement("h4", {
					className: R.a.achievementsHeading
				}, i.a.createElement(k.a, {
					className: R.a.headingPowerupsBolt
				}), Q._("Achievements", null, {
					hk: "1DnL4g"
				})), i.a.createElement("p", {
					className: R.a.achievementsDescription
				}, (() => d && !c ? Q._("Unlock the Powerup Supporter achievement when you Powerup this community", null, {
					hk: "2ZIvgm"
				}) : d ? Q._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				}) : Q._("Powerup to unlock community achievements", null, {
					hk: "1oPooH"
				}))()), i.a.createElement("div", {
					className: R.a.achievementsList
				}, a.map(e => i.a.createElement(H, {
					achievement: e,
					key: e.type,
					onSelect: u
				}))), (() => d && !c ? i.a.createElement(x.a, {
					onClick: () => {
						o(Object(P.z)()), p()
					}
				}) : d ? null : i.a.createElement(E.s, {
					priority: E.b.Primary,
					className: R.a.powerupButton,
					isFullWidth: !0,
					onClick: () => {
						o(Object(P.v)()), p()
					}
				}, Q._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))())
			};
			var z = r("./src/reddit/controls/ToggleSwitch/index.tsx"),
				G = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/FlairsSection.m.less"),
				V = r.n(G);
			const W = ({
				className: e,
				title: t,
				subtitle: r,
				flairs: s,
				onClickFlair: n
			}) => i.a.createElement("div", {
				className: e
			}, i.a.createElement("h4", {
				className: V.a.title
			}, i.a.createElement(k.a, {
				className: V.a.headingPowerupsBolt
			}), t), i.a.createElement("p", {
				className: V.a.subtitle
			}, r), i.a.createElement("div", {
				className: V.a.flairsList
			}, s.map(e => i.a.createElement(H, {
				achievement: e,
				key: e.type,
				onSelect: n
			}))));
			var q = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlairsBody.m.less"),
				J = r.n(q);
			const {
				fbt: Y
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Z = ({
				subredditId: e,
				userId: t
			}) => {
				const r = Object(_.a)(),
					o = Object(n.d)(),
					a = Object(n.e)(r => Object(S.c)(r, {
						subredditId: e,
						userId: t
					})),
					d = Object(n.e)(r => Object(S.d)(r, {
						subredditId: e,
						userId: t
					})),
					c = Object(n.e)(t => Object(T.n)(t, {
						subredditId: e
					}));
				if (Object(s.useEffect)(() => {
						Object(g.a)()
					}, []), !a) return null;
				return i.a.createElement("div", null, i.a.createElement(W, {
					className: J.a.flairsSection,
					title: Y._("Supporter Flairs", null, {
						hk: "1HLPYb"
					}),
					subtitle: Y._("Power up your community to get more flair!", null, {
						hk: "waK24"
					}),
					flairs: a.supporterFlairs,
					onClickFlair: t => {
						o(Object(F.setSubredditUserSupporterFlair)(e, t))
					}
				}), i.a.createElement(W, {
					className: J.a.flairsSection,
					title: Y._("Achievement Flairs", null, {
						hk: "4vJF7x"
					}),
					subtitle: Y._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
						hk: "3egU1f"
					}),
					flairs: a.achievementFlairs,
					onClickFlair: t => {
						o(Object(F.setSubredditUserAchievementFlair)(e, t))
					}
				}), i.a.createElement("div", {
					className: J.a.flairsVisibility
				}, i.a.createElement("label", {
					className: J.a.flairsVisibilityLabel
				}, Y._("Show Supporter and Achievement Flairs", null, {
					hk: "1nRChi"
				})), i.a.createElement(z.a, {
					className: J.a.flairsVisibilitySwitch,
					disabled: !c,
					on: c && !d,
					onToggle: () => {
						o(Object(F.setSubredditUserPowerupsFlairsVisibility)(e, !d))
					}
				})), i.a.createElement(x.a, {
					className: J.a.button,
					onClick: () => {
						r(Object(P.y)()), o(Object(y.f)("user_flair_picker"))
					}
				}))
			};
			var $ = r("./src/reddit/actions/authorFlair.ts"),
				X = r("./src/reddit/components/Flair/index.tsx"),
				ee = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/UserFlair.m.less"),
				te = r.n(ee);
			const {
				fbt: re
			} = r("./node_modules/fbt/lib/FbtPublic.js"), se = ({
				className: e,
				subredditId: t,
				flairData: r
			}) => {
				const s = Object(n.d)(),
					o = Object(_.a)(),
					a = Object(n.e)(p.k);
				return a ? i.a.createElement("div", {
					className: Object(b.a)(te.a.container, e)
				}, i.a.createElement("div", {
					className: te.a.header
				}, i.a.createElement("h4", {
					className: te.a.flairText
				}, re._("User flair", null, {
					hk: "3ToqP0"
				})), i.a.createElement(E.s, {
					className: te.a.editButton,
					priority: E.b.Plain,
					onClick: () => {
						const e = a ? Object(c.e)(a) : null;
						o(Object(L.a)()), s(Object($.b)({
							username: e,
							subredditId: t,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, i.a.createElement(U.a, {
					name: "edit"
				}))), (null == r ? void 0 : r.applied) && r.displaySettings.isUserEnabled && i.a.createElement(X.b, {
					className: te.a.flair,
					flair: r.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(o.a)(() => {
				const e = Object(n.d)(),
					t = Object(n.e)(p.k),
					r = Object(n.e)(u.e),
					s = Object(n.e)(e => r ? Object(m.b)(e, {
						subredditId: r.id
					}) : null),
					o = Object(n.e)(e => r ? Object(m.d)(e, {
						subredditId: r.id
					}) : null),
					b = Object(n.e)(l.m),
					h = !!s && !!o;
				return t && r ? i.a.createElement("div", {
					className: O.a.container
				}, i.a.createElement(j, {
					subredditId: r.id,
					userId: t.id,
					username: Object(c.e)(t),
					flairData: o,
					onModalClose: () => {
						e(Object(a.g)(d.a.ACHIEVEMENT_FLAIR))
					}
				}), h && i.a.createElement(se, {
					subredditId: r.id,
					flairData: o
				}), b ? i.a.createElement(Z, {
					subredditId: r.id,
					userId: t.id
				}) : i.a.createElement(K, {
					subredditId: r.id,
					userId: t.id
				})) : null
			})
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "UserAchievementFlair",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("UserAchievementFlair").then(r.bind(null, "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.m.less": function(e, t, r) {
			e.exports = {
				flairPreviewLine: "_2ik4YxCeEmPotQkDrf9tT5",
				flairPreview: "_1DR1r7cWVoK2RVj_pKKyPF",
				badge: "_1CVe5UNoFFPNZQdcj1E7qb",
				userIcon: "_2UOVKq8AASb4UjcU1wrCil",
				allFlair: "FB0XngPKpgt3Ui354TbYQ",
				flairPreviewFirstLine: "_3tIyrJzJQoNhuwDSYG5PGy",
				username: "TIveY2GD5UQpMI7hBO69I",
				flairPreviewSecondLine: "e9ybGKB-qvCqbOOAHfFpF",
				userFlair: "y3jF8D--GYQUXbjpSOL5",
				achievementFlair: "_28u73JpPTG4y_Vu5Qute7n"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var s = r("./src/lib/classNames/index.ts"),
				i = r("./node_modules/react/index.js"),
				n = r.n(i),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				d = r("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				c = r("./src/reddit/components/Flair/index.tsx"),
				l = r("./src/reddit/components/UserIcon/index.tsx"),
				u = r("./src/reddit/components/UserIcon/constants.ts"),
				p = r("./src/reddit/selectors/user.ts"),
				m = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.m.less"),
				b = r.n(m);
			const h = ({
				className: e,
				subredditId: t,
				userId: r,
				flairData: i,
				username: m,
				userHasBadge: h
			}) => {
				const f = Object(o.e)(e => Object(p.k)(e));
				return f ? n.a.createElement("div", {
					className: Object(s.a)(b.a.flairPreview, e),
					"data-testid": "user-flair-preview"
				}, n.a.createElement(l.a, {
					className: b.a.userIcon,
					iconUrl: f.accountIcon,
					isNSFW: f.isNSFW,
					nsfwIconUrl: u.a,
					userName: m || ""
				}), n.a.createElement("div", {
					className: b.a.allFlair
				}, n.a.createElement("div", {
					className: b.a.flairPreviewFirstLine
				}, h && n.a.createElement(a.a, {
					className: b.a.badge,
					subredditId: t,
					uniqueIdentifier: t,
					badgeSize: 20
				}), n.a.createElement("span", {
					className: b.a.username
				}, `${m||"username"}`), n.a.createElement(d.a, {
					className: b.a.achievementFlair,
					subredditId: t,
					userId: r
				})), (null == i ? void 0 : i.applied) && i.displaySettings.isUserEnabled && n.a.createElement("div", {
					className: b.a.flairPreviewSecondLine
				}, n.a.createElement(c.b, {
					className: b.a.userFlair,
					flair: i.applied,
					forceSmallEmojis: !0
				})))) : null
			}
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				a = r("./src/reddit/selectors/experiments/econ/index.ts"),
				d = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				onClick: t
			}) => {
				const r = Object(n.e)(d.u),
					s = Object(n.e)(a.h);
				return i.a.createElement(o.s, {
					priority: o.b.Primary,
					className: e,
					onClick: t,
					isFullWidth: !0
				}, (() => r ? c._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : s ? c._("Help Your Community", null, {
					hk: "2v0E8W"
				}) : c._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
			}
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s);

			function n(e) {
				return i.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), i.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				i = r.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && i.a.createElement("title", null, e.title), i.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), i.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), i.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), i.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), i.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				i = r("./src/reddit/actions/gold/constants.ts");
			const n = e => (e => e.startsWith("POWERUPS_SUPPORTER"))(e.type),
				o = e => !n(e),
				a = {};
			var d = r("./node_modules/icepick/icepick.js"),
				c = r("./src/reddit/actions/economics/powerups/constants.ts");
			const l = {},
				u = e => {
					var t, r;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (r = e[0]) || void 0 === r ? void 0 : r.type)
				},
				p = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: (e = a, t) => {
					switch (t.type) {
						case i.pb:
							const {
								subredditId: r, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const a = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								d = s.filter(o).map(e => e.type),
								c = s.filter(n).map(e => e.type);
							return {
								...e, [r]: {
									flairsByType: a,
									achievementTypes: d,
									supporterTypes: c
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = l, t) => {
					switch (t.type) {
						case c.d: {
							const {
								id: r,
								userAchievementFlairsByRedditorIds: s
							} = t.payload;
							let i = e[r] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: a
								} of s) {
								const r = a.filter(o),
									s = r.map(({
										type: e
									}) => e),
									d = a.filter(n),
									c = d.map(({
										type: e
									}) => e),
									l = u(r),
									p = u(d);
								i = {
									...i,
									[e]: {
										achievementTypes: s,
										supporterTypes: c,
										preferredAchievementType: l,
										preferredSupporterType: p,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[r]: i
							}
						}
						case c.f: {
							const {
								subredditId: r,
								userId: s,
								achievementFlairType: i,
								supporterFlairType: n
							} = t.payload;
							return Object(d.updateIn)(e, [r, s], e => ({
								...e,
								pendingAchievementType: i,
								pendingSupporterType: n
							}))
						}
						case c.g: {
							const {
								subredditId: r,
								userId: s,
								achievementFlairType: i,
								supporterFlairType: n
							} = t.payload;
							return Object(d.updateIn)(e, [r, s], e => ({
								...e,
								preferredAchievementType: i,
								preferredSupporterType: n,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return Object(d.updateIn)(e, [r, s], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.h: {
							const {
								subredditId: r,
								userId: s,
								isHidden: i
							} = t.payload;
							return Object(d.updateIn)(e, [r, s], e => ({
								...e,
								isHidden: i
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = p, t) => {
					switch (t.type) {
						case c.i: {
							let r = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const i = s.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								r = {
									...r,
									[t]: i.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return c
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "a", (function() {
				return w
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/selectors/commentSelector.ts"),
				n = r("./src/reddit/selectors/experiments/econ/index.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(o.a)({
				features: {
					powerups: a.a
				}
			});
			const d = (e, {
					subredditId: t
				}) => {
					var r, s;
					return t ? null === (s = null === (r = e.features.powerups.subredditPowerupsFlairs) || void 0 === r ? void 0 : r[t]) || void 0 === s ? void 0 : s.flairsByType : null
				},
				c = (e, {
					subredditId: t,
					userId: r
				}) => {
					var s, i;
					return t && r ? null === (i = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[t]) || void 0 === i ? void 0 : i[r] : null
				},
				l = Object(s.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				u = Object(s.a)([d, l], (e, t) => e && t ? e[t] : null),
				p = Object(s.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				m = Object(s.a)([d, p], (e, t) => e && t ? e[t] : null),
				b = Object(s.a)([d, c], (e, t) => {
					if (!e) return [];
					const r = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						s = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						i = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !r.includes(e.type),
						isPreferred: e.type === s || e.type === i
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				h = Object(s.a)([(e, {
					subredditId: t
				}) => {
					var r;
					return t ? null === (r = e.features.powerups.subredditPowerupsFlairs) || void 0 === r ? void 0 : r[t] : null
				}, c], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: r,
						achievementTypes: s,
						flairsByType: i
					} = e, {
						supporterTypes: n,
						achievementTypes: o,
						preferredSupporterType: a,
						preferredAchievementType: d,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: v(r, n, i, c || a),
						achievementFlairs: v(s, o, i, l || d)
					}
				}),
				f = Object(s.a)([c], e => !!e && e.isHidden),
				v = (e, t, r, s) => e.map(e => ({
					...r[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				w = (e, {
					commentId: t
				}) => {
					const r = Object(i.b)(e, {
							commentId: t
						}),
						s = null == r ? void 0 : r.subredditId,
						o = null == r ? void 0 : r.authorId;
					return !(!s || !o) && !(!((e, {
						subredditId: t,
						userId: r
					}) => {
						var s, i, n;
						return t && r ? null === (n = null === (i = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === i ? void 0 : i[r]) || void 0 === n ? void 0 : n[t] : null
					})(e, {
						subredditId: s,
						userId: o
					}) || !Object(n.i)(e))
				}
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"de382962c5ac"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.bcb04b5f680feb60f15b.js.map