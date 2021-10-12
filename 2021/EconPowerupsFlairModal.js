// https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.c609acaa2c595b705943.js
// Retrieved at 10/12/2021, 11:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsFlairModal"], {
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return I
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return F
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return y
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return O
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return E
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return x
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return g
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return P
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return _
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return T
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return k
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return S
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return C
			})), r.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return L
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
			var l = r("./src/reddit/actions/gold/powerups.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/actions/economics/powerups/constants.ts"),
				w = r("./src/lib/initializeClient/installReducer.ts"),
				j = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(w.a)({
				features: {
					powerups: j.a
				}
			});
			const I = Object(i.a)(v.d),
				F = Object(i.a)(v.i),
				y = Object(i.a)(v.f),
				O = Object(i.a)(v.g),
				E = Object(i.a)(v.e),
				x = Object(i.a)(v.h),
				g = (e, t) => async (r, s, {
					gqlContext: i
				}) => {
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const t = await (async (e, t, r) => {
								const s = await Object(o.a)(e, {
									...a,
									variables: {
										subredditId: t,
										redditorIds: r,
										includeSupporterInfo: !0
									}
								});
								if (!s.ok) throw new Error("Unable to fetch user achievements");
								return s.body.data
							})(i(), e, d),
							{
								subredditInfoById: s,
								redditorsInfoByIds: n
							} = t;
						await r(I(s)), n && await r(F(n))
					} catch (c) {
						n.c.captureException(c)
					}
				}, P = (e, t) => async (r, s) => {
					if (!e) return;
					const i = s(),
						n = Object(h.k)(i);
					if (!n || !Object(b.h)(i, {
							subredditId: e
						})) return;
					const o = !!Object(f.f)(i, {
						subredditId: e,
						userId: n.id
					});
					!t && o || await r(g(e, [n.id]))
				}, _ = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(l.l)(e, {
						fullData: !0
					}));
					const s = r();
					return Object(b.h)(s, {
						subredditId: e
					})
				}, T = e => async (t, r) => {
					var s;
					const i = r(),
						n = e.map(({
							id: e
						}) => e),
						o = Object(m.c)(i, {
							commentIds: n
						}),
						a = null === (s = o.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await t(_(a)))) return;
					const d = new Set(o.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await t(g(a, Array.from(d)))
				}, k = (e, t) => async (r, s) => {
					if (!t) return;
					if (!(await r(_(e)))) return;
					const i = new Set;
					Object.values(t).forEach(e => {
						i.add(e.authorId)
					}), await r(g(e, Array.from(i)))
				}, S = (e, t) => async (r, s) => {
					const i = s(),
						n = Object(h.k)(i);
					if (!n) return;
					const o = n.id,
						a = Object(f.i)(i, {
							subredditId: e,
							userId: o
						});
					r(N({
						subredditId: e,
						userId: o,
						achievementFlairType: t,
						supporterFlairType: a
					}))
				}, C = (e, t) => async (r, s) => {
					const i = s(),
						n = Object(h.k)(i);
					if (!n) return;
					const o = n.id,
						a = Object(f.h)(i, {
							subredditId: e,
							userId: o
						});
					r(N({
						subredditId: e,
						userId: o,
						achievementFlairType: a,
						supporterFlairType: t
					}))
				}, N = e => async (t, r, {
					gqlContext: i
				}) => {
					const o = r(),
						a = Object(h.k)(o);
					if (!a) return;
					const d = a.id;
					t(y(e));
					const {
						subredditId: l,
						achievementFlairType: m,
						supporterFlairType: b
					} = e, v = [m, b].filter(Boolean), w = Object(f.e)(o, {
						subredditId: l,
						userId: d
					});
					try {
						await c(i(), l, v, w), t(O(e))
					} catch (j) {
						t(E(e)), n.c.captureException(j), t(Object(u.f)({
							duration: u.a,
							kind: p.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, L = (e, t) => async (r, i, {
					gqlContext: o
				}) => {
					const a = i(),
						d = Object(h.k)(a);
					if (!d) return;
					const l = d.id,
						m = {
							subredditId: e,
							userId: l
						},
						b = [Object(f.h)(a, m), Object(f.i)(a, m)].filter(Boolean);
					r(x({
						...m,
						isHidden: t
					}));
					try {
						await c(o(), e, b, t)
					} catch (v) {
						r(x({
							...m,
							isHidden: !t
						})), n.c.captureException(v), r(Object(u.f)({
							duration: u.a,
							kind: p.b.Error,
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
				return f
			})), r.d(t, "j", (function() {
				return h
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
				f = Object(s.a)(o.i),
				h = e => Object(i.h)(n.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
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
				return g
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
				f = r("./src/reddit/helpers/economics/sortBadges.ts"),
				h = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = r("./src/reddit/models/Badge/index.ts");
			var w = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				j = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				I = r.n(j);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = "add-custom-badge-tooltip",
				O = 100,
				E = 2 * O,
				x = 24;
			class g extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, O)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, E)
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
					const t = `${y}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || x;
					return i.a.createElement(s.Fragment, null, this.props.showAddCustom && i.a.createElement("div", {
						className: I.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, i.a.createElement("button", {
						className: I.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, i.a.createElement(h.a, {
						className: I.a.addCustom
					})), i.a.createElement(w, {
						className: I.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(f.a)(e).map(e => {
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
				T = Object(o.c)({
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
				k = e => ({
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
				return i.a.createElement(g, F({
					badges: n
				}, s))
			}
			const C = Object(n.b)(_, k)(S),
				N = Object(n.b)(T, k)(S)
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
				f = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				h = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
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
			}, i.a.createElement(h.a, {
				className: w.a.userFlairPreview,
				subredditId: t,
				userId: r,
				username: o,
				flairData: s
			}), i.a.createElement(f.a, {
				onClick: n
			}));
			var I = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.m.less"),
				F = r.n(I),
				y = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				O = r("./src/reddit/actions/gold/powerups.ts"),
				E = r("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				x = r("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				g = r("./src/reddit/controls/Button/index.tsx"),
				P = r("./src/reddit/helpers/trackers/powerups.ts"),
				_ = r("./src/reddit/hooks/useTracking.ts"),
				T = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				k = r("./src/reddit/selectors/gold/powerups/index.ts"),
				S = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				C = r("./src/reddit/actions/tooltip.ts"),
				N = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				L = r("./src/reddit/helpers/trackers/userFlair.ts"),
				U = r("./src/reddit/icons/fonts/index.tsx"),
				A = r("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts"),
				M = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlair.m.less"),
				B = r.n(M);
			const {
				fbt: H
			} = r("./node_modules/fbt/lib/FbtPublic.js"), D = ({
				flair: e,
				onSelect: t
			}) => {
				const r = Object(n.d)(),
					s = Object(_.a)(),
					o = `achievement-locked-${e.type}`,
					a = e.isLocked ? H._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}) : "",
					d = e.description || a,
					c = () => {
						if (d) return r(Object(C.h)({
							tooltipId: o
						}))
					},
					l = !e.isLocked && !e.isPreferred;
				return i.a.createElement("div", {
					onMouseEnter: c,
					onMouseLeave: c,
					onClick: () => {
						if (l && t(e.type), !e.isPreferred) {
							const t = Object(A.b)(e) ? {
								supporterFlair: e
							} : {
								achievementFlair: e
							};
							s(Object(L.b)(t))
						}
					},
					className: Object(b.a)(B.a.achievementItem, {
						[B.a.achievementItemLocked]: e.isLocked,
						[B.a.achievementItemActive]: e.isPreferred,
						[B.a.achievementItemSelectable]: l
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, i.a.createElement("div", {
					className: B.a.achievementImgWrapper
				}, i.a.createElement("img", {
					id: o,
					className: B.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), i.a.createElement("div", {
					className: B.a.achievementImgLocked
				}, i.a.createElement(U.a, {
					name: "lock",
					isFilled: !0,
					className: B.a.achievementLock
				}))), i.a.createElement("div", {
					className: B.a.achievementName
				}, i.a.createElement("span", null, e.name)), !!d && i.a.createElement(N.c, {
					tooltipId: o,
					text: d,
					className: B.a.achievementTooltip
				}))
			};
			var R = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/OldAchievementFlairs.m.less"),
				Q = r.n(R);
			const {
				fbt: G
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
					d = Object(n.e)(e => Object(k.o)(e, {
						subredditId: t
					})),
					c = Object(n.e)(e => Object(S.j)(e, {
						subredditId: t,
						userId: r
					})),
					l = Object(n.d)(),
					u = e => {
						l(Object(y.setSubredditUserAchievementFlair)(t, e))
					},
					p = () => {
						l(Object(O.f)("user_flair_picker"))
					};
				return Object(s.useEffect)(() => {
					Object(E.a)()
				}, []), i.a.createElement("div", {
					className: Object(b.a)(Q.a.container, e)
				}, i.a.createElement("h4", {
					className: Q.a.achievementsHeading
				}, i.a.createElement(T.a, {
					className: Q.a.headingPowerupsBolt
				}), G._("Achievements", null, {
					hk: "1DnL4g"
				})), i.a.createElement("p", {
					className: Q.a.achievementsDescription
				}, (() => d && !c ? G._("Unlock the Powerup Supporter achievement when you Powerup this community", null, {
					hk: "2ZIvgm"
				}) : d ? G._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				}) : G._("Powerup to unlock community achievements", null, {
					hk: "1oPooH"
				}))()), i.a.createElement("div", {
					className: Q.a.achievementsList
				}, a.map(e => i.a.createElement(D, {
					flair: e,
					key: e.type,
					onSelect: u
				}))), (() => d && !c ? i.a.createElement(x.a, {
					onClick: () => {
						o(Object(P.F)()), p()
					}
				}) : d ? null : i.a.createElement(g.s, {
					priority: g.b.Primary,
					className: Q.a.powerupButton,
					isFullWidth: !0,
					onClick: () => {
						o(Object(P.B)()), p()
					}
				}, G._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))())
			};
			var z = r("./src/reddit/controls/ToggleSwitch/index.tsx"),
				V = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/FlairsSection.m.less"),
				W = r.n(V);
			const q = ({
				className: e,
				title: t,
				subtitle: r,
				flairs: s,
				onClickFlair: n
			}) => i.a.createElement("div", {
				className: e
			}, i.a.createElement("h4", {
				className: W.a.title
			}, i.a.createElement(T.a, {
				className: W.a.headingPowerupsBolt
			}), t), i.a.createElement("p", {
				className: W.a.subtitle
			}, r), i.a.createElement("div", {
				className: W.a.flairsList
			}, s.map(e => i.a.createElement(D, {
				flair: e,
				key: e.type,
				onSelect: n
			}))));
			var J = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlairsBody.m.less"),
				Y = r.n(J);
			const {
				fbt: Z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), $ = ({
				subredditId: e,
				userId: t
			}) => {
				const r = Object(_.a)(),
					o = Object(n.d)(),
					a = Object(n.e)(r => Object(S.c)(r, {
						subredditId: e,
						userId: t
					})),
					d = Object(n.e)(r => Object(S.e)(r, {
						subredditId: e,
						userId: t
					})),
					c = Object(n.e)(t => Object(k.o)(t, {
						subredditId: e
					}));
				if (Object(s.useEffect)(() => {
						Object(E.a)()
					}, []), !a) return null;
				return i.a.createElement("div", null, i.a.createElement(q, {
					className: Y.a.flairsSection,
					title: Z._("Supporter Flair", null, {
						hk: "1U21cd"
					}),
					subtitle: Z._("Power up your community to get more flair!", null, {
						hk: "12WxtM"
					}),
					flairs: a.supporterFlairs,
					onClickFlair: t => {
						o(Object(y.setSubredditUserSupporterFlair)(e, t))
					}
				}), i.a.createElement(q, {
					className: Y.a.flairsSection,
					title: Z._("Achievement Flair", null, {
						hk: "10y9WL"
					}),
					subtitle: Z._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
						hk: "3egU1f"
					}),
					flairs: a.achievementFlairs,
					onClickFlair: t => {
						o(Object(y.setSubredditUserAchievementFlair)(e, t))
					}
				}), i.a.createElement("div", {
					className: Y.a.flairsVisibility
				}, i.a.createElement("label", {
					className: Y.a.flairsVisibilityLabel
				}, Z._("Show Supporter and Achievement Flair", null, {
					hk: "3755UL"
				})), i.a.createElement(z.a, {
					className: Y.a.flairsVisibilitySwitch,
					disabled: !c,
					on: c && !d,
					onToggle: () => {
						const t = !d;
						o(Object(y.setSubredditUserPowerupsFlairsVisibility)(e, t)), r(Object(L.d)(t))
					}
				})), i.a.createElement(x.a, {
					className: Y.a.button,
					onClick: () => {
						r(Object(P.E)()), o(Object(O.f)("user_flair_picker"))
					}
				}))
			};
			var X = r("./src/reddit/actions/authorFlair.ts"),
				ee = r("./src/reddit/components/Flair/index.tsx"),
				te = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/UserFlair.m.less"),
				re = r.n(te);
			const {
				fbt: se
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ie = ({
				className: e,
				subredditId: t,
				flairData: r
			}) => {
				const s = Object(n.d)(),
					o = Object(_.a)(),
					a = Object(n.e)(p.k);
				return a ? i.a.createElement("div", {
					className: Object(b.a)(re.a.container, e)
				}, i.a.createElement("div", {
					className: re.a.header
				}, i.a.createElement("h4", {
					className: re.a.flairText
				}, se._("User Flair", null, {
					hk: "3DaU0r"
				})), i.a.createElement(g.s, {
					className: re.a.editButton,
					priority: g.b.Plain,
					onClick: () => {
						const e = a ? Object(c.e)(a) : null;
						o(Object(L.a)()), s(Object(X.b)({
							username: e,
							subredditId: t,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, i.a.createElement(U.a, {
					name: "edit"
				}))), (null == r ? void 0 : r.applied) && r.displaySettings.isUserEnabled && i.a.createElement(ee.b, {
					className: re.a.flair,
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
					b = Object(n.e)(l.k),
					f = !!s && !!o;
				return t && r ? i.a.createElement("div", {
					className: F.a.container
				}, i.a.createElement(j, {
					subredditId: r.id,
					userId: t.id,
					username: Object(c.e)(t),
					flairData: o,
					onModalClose: () => {
						e(Object(a.g)(d.a.ACHIEVEMENT_FLAIR))
					}
				}), f && i.a.createElement(ie, {
					subredditId: r.id,
					flairData: o
				}), b ? i.a.createElement($, {
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
				return f
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
			const f = ({
				className: e,
				subredditId: t,
				userId: r,
				flairData: i,
				username: m,
				userHasBadge: f
			}) => {
				const h = Object(o.e)(e => Object(p.k)(e));
				return h ? n.a.createElement("div", {
					className: Object(s.a)(b.a.flairPreview, e),
					"data-testid": "user-flair-preview"
				}, n.a.createElement(l.a, {
					className: b.a.userIcon,
					iconUrl: h.accountIcon,
					isNSFW: h.isNSFW,
					nsfwIconUrl: u.a,
					userName: m || ""
				}), n.a.createElement("div", {
					className: b.a.allFlair
				}, n.a.createElement("div", {
					className: b.a.flairPreviewFirstLine
				}, f && n.a.createElement(a.a, {
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
				const r = Object(n.e)(d.v),
					s = Object(n.e)(a.i);
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
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "b", (function() {
					return i
				})), r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(s || (s = {}));
			const i = e => e.category === s.Supporter,
				n = e => e.category === s.Achievement
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				i = r("./src/reddit/actions/gold/constants.ts"),
				n = r("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const o = {};
			var a = r("./node_modules/icepick/icepick.js"),
				d = r("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				l = e => {
					var t, r;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (r = e[0]) || void 0 === r ? void 0 : r.type)
				},
				u = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: (e = o, t) => {
					switch (t.type) {
						case i.pb:
							const {
								subredditId: r, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const o = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								a = s.filter(n.a).map(e => e.type),
								d = s.filter(n.b).map(e => e.type);
							return {
								...e, [r]: {
									flairsByType: o,
									achievementTypes: a,
									supporterTypes: d
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = c, t) => {
					switch (t.type) {
						case d.d: {
							const {
								id: r,
								userAchievementFlairsByRedditorIds: s
							} = t.payload;
							let i = e[r] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: o
								} of s) {
								const r = o.filter(n.a),
									s = r.map(({
										type: e
									}) => e),
									a = o.filter(n.b),
									d = a.map(({
										type: e
									}) => e),
									c = l(r),
									u = l(a);
								i = {
									...i,
									[e]: {
										achievementTypes: s,
										supporterTypes: d,
										preferredAchievementType: c,
										preferredSupporterType: u,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[r]: i
							}
						}
						case d.f: {
							const {
								subredditId: r,
								userId: s,
								achievementFlairType: i,
								supporterFlairType: n
							} = t.payload;
							return Object(a.updateIn)(e, [r, s], e => ({
								...e,
								pendingAchievementType: i,
								pendingSupporterType: n
							}))
						}
						case d.g: {
							const {
								subredditId: r,
								userId: s,
								achievementFlairType: i,
								supporterFlairType: n
							} = t.payload;
							return Object(a.updateIn)(e, [r, s], e => ({
								...e,
								preferredAchievementType: i,
								preferredSupporterType: n,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return Object(a.updateIn)(e, [r, s], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.h: {
							const {
								subredditId: r,
								userId: s,
								isHidden: i
							} = t.payload;
							return Object(a.updateIn)(e, [r, s], e => ({
								...e,
								isHidden: i
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = u, t) => {
					switch (t.type) {
						case d.i: {
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
			r.d(t, "f", (function() {
				return c
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "a", (function() {
				return j
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/selectors/commentSelector.ts"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(n.a)({
				features: {
					powerups: o.a
				}
			});
			const a = (e, {
					subredditId: t
				}) => {
					var r;
					return t ? null === (r = e.features.powerups.subredditPowerupsFlairs) || void 0 === r ? void 0 : r[t] : null
				},
				d = (e, {
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
				f = Object(s.a)([a, c], (e, t) => {
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
						supporterFlairs: w(r, n, i, c || a),
						achievementFlairs: w(s, o, i, l || d)
					}
				}),
				h = Object(s.a)([c], e => !!e && e.isHidden),
				v = Object(s.a)([a, c, m], (e, t, r) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return r ? [r, ...s] : s
				}),
				w = (e, t, r, s) => e.map(e => ({
					...r[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				j = (e, {
					commentId: t
				}) => {
					const r = Object(i.b)(e, {
							commentId: t
						}),
						s = null == r ? void 0 : r.subredditId,
						n = null == r ? void 0 : r.authorId;
					return !(!s || !n) && !!((e, {
						subredditId: t,
						userId: r
					}) => {
						var s, i, n;
						return t && r ? null === (n = null === (i = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === i ? void 0 : i[r]) || void 0 === n ? void 0 : n[t] : null
					})(e, {
						subredditId: s,
						userId: n
					})
				}
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"92790c69eba6"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.c609acaa2c595b705943.js.map