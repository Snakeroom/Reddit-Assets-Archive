// https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.7e588798a49b83a444bb.js
// Retrieved at 6/27/2022, 2:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsFlairModal"], {
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return g
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return y
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return O
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return x
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return I
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return F
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return E
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return P
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return _
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return k
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return S
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return T
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
				h = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/actions/economics/powerups/constants.ts"),
				w = r("./src/lib/initializeClient/installReducer.ts"),
				j = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(w.a)({
				features: {
					powerups: j.a
				}
			});
			const g = Object(i.a)(v.d),
				y = Object(i.a)(v.i),
				O = Object(i.a)(v.f),
				x = Object(i.a)(v.g),
				I = Object(i.a)(v.e),
				F = Object(i.a)(v.h),
				E = (e, t) => async (r, s, i) => {
					let {
						gqlContext: d
					} = i;
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
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
							})(d(), e, c),
							{
								subredditInfoById: s,
								redditorsInfoByIds: i
							} = t;
						await r(g(s)), i && await r(y(i))
					} catch (l) {
						n.c.captureException(l)
					}
				}, P = (e, t) => async (r, s) => {
					if (!e) return;
					const i = s(),
						n = Object(f.k)(i);
					if (!n || !Object(b.g)(i, {
							subredditId: e
						})) return;
					const o = !!Object(h.f)(i, {
						subredditId: e,
						userId: n.id
					});
					!t && o || await r(E(e, [n.id]))
				}, _ = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(l.m)(e, {
						fullData: !0
					}));
					const s = r();
					return Object(b.g)(s, {
						subredditId: e
					})
				}, k = e => async (t, r) => {
					var s;
					const i = r(),
						n = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						o = Object(m.c)(i, {
							commentIds: n
						}),
						a = null === (s = o.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await t(_(a)))) return;
					const d = new Set(o.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(E(a, Array.from(d)))
				}, S = (e, t) => async (r, s) => {
					if (!t) return;
					if (!(await r(_(e)))) return;
					const i = new Set;
					Object.values(t).forEach(e => {
						i.add(e.authorId)
					}), await r(E(e, Array.from(i)))
				}, T = (e, t) => async (r, s) => {
					const i = s(),
						n = Object(f.k)(i);
					if (!n) return;
					const o = n.id,
						a = Object(h.i)(i, {
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
						n = Object(f.k)(i);
					if (!n) return;
					const o = n.id,
						a = Object(h.h)(i, {
							subredditId: e,
							userId: o
						});
					r(N({
						subredditId: e,
						userId: o,
						achievementFlairType: a,
						supporterFlairType: t
					}))
				}, N = e => async (t, r, i) => {
					let {
						gqlContext: o
					} = i;
					const a = r(),
						d = Object(f.k)(a);
					if (!d) return;
					const l = d.id;
					t(O(e));
					const {
						subredditId: m,
						achievementFlairType: b,
						supporterFlairType: v
					} = e, w = [b, v].filter(Boolean), j = Object(h.e)(a, {
						subredditId: m,
						userId: l
					});
					try {
						await c(o(), m, w, j), t(x(e))
					} catch (g) {
						t(I(e)), n.c.captureException(g), t(Object(u.f)({
							duration: u.a,
							kind: p.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, L = (e, t) => async (r, i, o) => {
					let {
						gqlContext: a
					} = o;
					const d = i(),
						l = Object(f.k)(d);
					if (!l) return;
					const m = l.id,
						b = {
							subredditId: e,
							userId: m
						},
						v = [Object(h.h)(d, b), Object(h.i)(d, b)].filter(Boolean);
					r(F({
						...b,
						isHidden: t
					}));
					try {
						await c(a(), e, v, t)
					} catch (w) {
						r(F({
							...b,
							isHidden: !t
						})), n.c.captureException(w), r(Object(u.f)({
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
				g = r.n(j);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = "add-custom-badge-tooltip",
				x = 100,
				I = 2 * x,
				F = 24;
			class E extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, x)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, I)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return i.a.createElement("img", {
						className: Object(d.a)(g.a.image, this.props.className),
						src: `${a.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${O}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || F;
					return i.a.createElement(s.Fragment, null, this.props.showAddCustom && i.a.createElement("div", {
						className: g.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, i.a.createElement("button", {
						className: g.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, i.a.createElement(f.a, {
						className: g.a.addCustom
					})), i.a.createElement(w, {
						className: g.a.badgeHovercard,
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
							className: Object(d.a)(g.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(n),
							onMouseLeave: () => this.handleMouseLeave()
						}, i.a.createElement("img", {
							className: g.a.image,
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
							className: g.a.badgeHovercard,
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
					badgeIds: (e, t) => {
						let {
							subredditId: r,
							userId: s
						} = t;
						var i;
						return (null === (i = e.users.appliedBadges[s]) || void 0 === i ? void 0 : i[r]) || P
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				k = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: r
						} = t;
						var s;
						const i = e.user.account;
						return i && (null === (s = e.users.appliedBadges[i.id]) || void 0 === s ? void 0 : s[r]) || P
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				S = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				});

			function T(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...s
				} = e, n = t.map(e => r[e]).filter(Boolean);
				return i.a.createElement(E, y({
					badges: n
				}, s))
			}
			const C = Object(n.b)(_, S)(T),
				N = Object(n.b)(k, S)(T)
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, r) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
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
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					className: t,
					highContrast: r,
					onClick: i
				} = e;
				return n.a.createElement("button", {
					onClick: i,
					className: Object(s.a)(d.a.closeButton, {
						[d.a.highContrast]: r
					}, t),
					"aria-label": c._("Close", null, {
						hk: "3Qarlp"
					})
				}, n.a.createElement(o.b, {
					className: d.a.closeIcon
				}))
			}
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
				flairsVisibilityLabel: "_3EPtrF5q2eNGvPx3AIrzpm"
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
				container: "_1R8JYXvrokxOrjWamBt94g",
				stickyContent: "_2iShUxx-xqIjviabmNq5b_",
				scrollContainer: "T6yiD-7Rq2G0-DfQSgN2S",
				scrollGradientContainer: "_36hPQ_YSgtLw88EMUxdmd7",
				divider: "b1yOm-TuNTkTz0hgOExxm",
				ctaButton: "_3iNPwC6lNDr-_nZQt1y26b"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/actions/gold/powerups.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				u = r("./src/reddit/components/ScrollGradient/index.tsx"),
				p = r("./src/reddit/constants/modals.ts"),
				m = r("./src/reddit/helpers/trackers/powerups.ts"),
				b = r("./src/reddit/hooks/useScrollGradient.ts"),
				h = r("./src/reddit/hooks/useTracking.ts"),
				f = r("./src/reddit/models/User/index.ts"),
				v = r("./src/reddit/selectors/experiments/econ/index.ts"),
				w = r("./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts"),
				j = r("./src/reddit/selectors/platform.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/selectors/userFlair.ts"),
				O = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				x = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				I = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/Header.m.less"),
				F = r.n(I);
			const E = e => {
				let {
					className: t,
					subredditId: r,
					userId: s,
					flairData: n,
					onModalClose: a,
					username: d
				} = e;
				return o.a.createElement("div", {
					className: Object(i.a)(F.a.container, t),
					"data-testid": "achievement-flair-modal-header"
				}, o.a.createElement(x.a, {
					className: F.a.userFlairPreview,
					subredditId: r,
					userId: s,
					username: d,
					flairData: n
				}), o.a.createElement(O.a, {
					onClick: a
				}))
			};
			var P = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.m.less"),
				_ = r.n(P),
				k = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				S = r("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				T = r("./src/reddit/controls/Button/index.tsx"),
				C = r("./src/reddit/hooks/usePreloadModal.ts"),
				N = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				L = r("./src/reddit/selectors/gold/powerups/index.ts"),
				U = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				A = r("./src/reddit/actions/tooltip.ts"),
				M = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				B = r("./src/reddit/helpers/trackers/userFlair.ts"),
				D = r("./src/reddit/icons/fonts/index.tsx"),
				H = r("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts"),
				G = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlair.m.less"),
				q = r.n(G);
			const {
				fbt: z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Q = e => {
				let {
					flair: t,
					onSelect: r
				} = e;
				const s = Object(a.d)(),
					n = Object(h.a)(),
					d = `achievement-locked-${t.type}`,
					c = t.isLocked ? z._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}) : "",
					l = t.description || c,
					u = () => {
						if (l) return s(Object(A.h)({
							tooltipId: d
						}))
					},
					p = !t.isLocked && !t.isPreferred;
				return o.a.createElement("div", {
					onMouseEnter: u,
					onMouseLeave: u,
					onClick: () => {
						if (p && r(t.type), !t.isPreferred) {
							const e = Object(H.b)(t) ? {
								supporterFlair: t
							} : {
								achievementFlair: t
							};
							n(Object(B.b)(e))
						}
					},
					className: Object(i.a)(q.a.achievementItem, {
						[q.a.achievementItemLocked]: t.isLocked,
						[q.a.achievementItemActive]: t.isPreferred,
						[q.a.achievementItemSelectable]: p
					}),
					"data-testid": `af-modal-achievement-flair-${t.type}`
				}, o.a.createElement("div", {
					className: q.a.achievementImgWrapper
				}, o.a.createElement("img", {
					id: d,
					className: q.a.achievementImg,
					src: t.icon.url,
					alt: t.name
				}), o.a.createElement("div", {
					className: q.a.achievementImgLocked
				}, o.a.createElement(D.a, {
					name: "lock",
					isFilled: !0,
					className: q.a.achievementLock
				}))), o.a.createElement("div", {
					className: q.a.achievementName
				}, o.a.createElement("span", null, t.name)), !!l && o.a.createElement(M.c, {
					tooltipId: d,
					text: l,
					className: q.a.achievementTooltip
				}))
			};
			var V = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/OldAchievementFlairs.m.less"),
				R = r.n(V);
			const {
				fbt: K
			} = r("./node_modules/fbt/lib/FbtPublic.js"), W = e => {
				let {
					className: t,
					subredditId: r,
					userId: s
				} = e;
				const n = Object(h.a)(),
					c = Object(a.e)(e => Object(U.b)(e, {
						subredditId: r,
						userId: s
					})),
					u = Object(a.e)(e => Object(L.n)(e, {
						subredditId: r
					})),
					p = Object(a.e)(e => Object(U.j)(e, {
						subredditId: r,
						userId: s
					})),
					b = Object(a.d)(),
					f = e => {
						b(Object(k.setSubredditUserAchievementFlair)(r, e))
					},
					v = () => {
						b(Object(d.g)("user_flair_picker"))
					};
				return Object(C.a)(S.a), o.a.createElement("div", {
					className: Object(i.a)(R.a.container, t)
				}, o.a.createElement("h4", {
					className: R.a.achievementsHeading
				}, o.a.createElement(N.a, {
					className: R.a.headingPowerupsBolt
				}), K._("Achievements", null, {
					hk: "1DnL4g"
				})), o.a.createElement("p", {
					className: R.a.achievementsDescription
				}, (() => u && !p ? K._("Unlock the Powerup Supporter achievement when you Powerup this community", null, {
					hk: "2ZIvgm"
				}) : u ? K._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				}) : K._("Powerup to unlock community achievements", null, {
					hk: "1oPooH"
				}))()), o.a.createElement("div", {
					className: R.a.achievementsList
				}, c.map(e => o.a.createElement(Q, {
					flair: e,
					key: e.type,
					onSelect: f
				}))), (() => u && !p ? o.a.createElement(l.a, {
					onClick: () => {
						n(Object(m.B)()), v()
					}
				}) : u ? null : o.a.createElement(T.t, {
					priority: T.c.Primary,
					className: R.a.powerupButton,
					isFullWidth: !0,
					onClick: () => {
						n(Object(m.x)()), v()
					}
				}, K._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))())
			};
			var J = r("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Y = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/FlairsSection.m.less"),
				Z = r.n(Y);
			const $ = e => {
				let {
					className: t,
					title: r,
					subtitle: s,
					flairs: i,
					onClickFlair: n
				} = e;
				return o.a.createElement("div", {
					className: t
				}, o.a.createElement("h4", {
					className: Z.a.title
				}, o.a.createElement(N.a, {
					className: Z.a.headingPowerupsBolt
				}), r), o.a.createElement("p", {
					className: Z.a.subtitle
				}, s), o.a.createElement("div", {
					className: Z.a.flairsList
				}, i.map(e => o.a.createElement(Q, {
					flair: e,
					key: e.type,
					onSelect: n
				}))))
			};
			var X = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlairsBody.m.less"),
				ee = r.n(X);
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js"), re = e => {
				let {
					subredditId: t,
					userId: r,
					className: s
				} = e;
				const i = Object(h.a)(),
					n = Object(a.d)(),
					d = Object(a.e)(e => Object(U.c)(e, {
						subredditId: t,
						userId: r
					})),
					c = Object(a.e)(e => Object(w.a)(e, t)),
					l = Object(a.e)(e => Object(U.e)(e, {
						subredditId: t,
						userId: r
					})),
					u = Object(a.e)(e => Object(L.n)(e, {
						subredditId: t
					}));
				if (Object(C.a)(S.a), !d) return null;
				return o.a.createElement("div", {
					className: s
				}, !c && o.a.createElement($, {
					className: ee.a.flairsSection,
					title: te._("Supporter Flair", null, {
						hk: "1U21cd"
					}),
					subtitle: te._("Power up your community to get more flair!", null, {
						hk: "12WxtM"
					}),
					flairs: d.supporterFlairs,
					onClickFlair: e => {
						n(Object(k.setSubredditUserSupporterFlair)(t, e))
					}
				}), o.a.createElement($, {
					className: ee.a.flairsSection,
					title: te._("Achievement Flair", null, {
						hk: "10y9WL"
					}),
					subtitle: te._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
						hk: "3egU1f"
					}),
					flairs: d.achievementFlairs,
					onClickFlair: e => {
						n(Object(k.setSubredditUserAchievementFlair)(t, e))
					}
				}), o.a.createElement("div", {
					className: ee.a.flairsVisibility
				}, o.a.createElement("label", {
					className: ee.a.flairsVisibilityLabel
				}, c ? te._("Show Achievement Flair", null, {
					hk: "38VDpw"
				}) : te._("Show Supporter and Achievement Flair", null, {
					hk: "3755UL"
				})), o.a.createElement(J.a, {
					className: ee.a.flairsVisibilitySwitch,
					disabled: !u,
					on: u && !l,
					onToggle: () => {
						const e = !l;
						n(Object(k.setSubredditUserPowerupsFlairsVisibility)(t, e)), i(Object(B.d)(e))
					}
				})))
			};
			var se = r("./src/reddit/actions/authorFlair.ts"),
				ie = r("./src/reddit/components/Flair/index.tsx"),
				ne = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/UserFlair.m.less"),
				oe = r.n(ne);
			const {
				fbt: ae
			} = r("./node_modules/fbt/lib/FbtPublic.js"), de = e => {
				let {
					className: t,
					subredditId: r,
					flairData: s
				} = e;
				const n = Object(a.d)(),
					d = Object(h.a)(),
					c = Object(a.e)(g.k);
				return c ? o.a.createElement("div", {
					className: Object(i.a)(oe.a.container, t)
				}, o.a.createElement("div", {
					className: oe.a.header
				}, o.a.createElement("h4", {
					className: oe.a.flairText
				}, ae._("User Flair", null, {
					hk: "3DaU0r"
				})), o.a.createElement(T.t, {
					className: oe.a.editButton,
					priority: T.c.Plain,
					onClick: () => {
						const e = c ? Object(f.e)(c) : null;
						d(Object(B.a)()), n(Object(se.b)({
							username: e,
							subredditId: r,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, o.a.createElement(D.a, {
					name: "edit"
				}))), (null == s ? void 0 : s.applied) && s.displaySettings.isUserEnabled && o.a.createElement(ie.b, {
					className: oe.a.flair,
					flair: s.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(s.a)(() => {
				const e = Object(a.d)(),
					t = Object(h.a)(),
					{
						container: r,
						isScrollGradientVisible: s,
						calculateGradientVisibility: n
					} = Object(b.b)(!0),
					O = Object(a.e)(g.k),
					x = Object(a.e)(j.e),
					I = Object(a.e)(e => x ? Object(y.b)(e, {
						subredditId: x.id
					}) : null),
					F = Object(a.e)(e => x ? Object(y.d)(e, {
						subredditId: x.id
					}) : null),
					P = Object(a.e)(v.h),
					k = Object(a.e)(e => x ? Object(w.a)(e, x.id) : null),
					S = !!I && !!F;
				return O && x ? o.a.createElement("div", {
					className: _.a.container
				}, o.a.createElement("div", {
					className: _.a.stickyContent
				}, o.a.createElement(E, {
					subredditId: x.id,
					userId: O.id,
					username: Object(f.e)(O),
					flairData: F,
					onModalClose: () => {
						e(Object(c.g)(p.a.ACHIEVEMENT_FLAIR))
					}
				})), o.a.createElement("div", {
					className: _.a.scrollContainer,
					ref: r,
					onScroll: n
				}, S && o.a.createElement(de, {
					subredditId: x.id,
					flairData: F
				}), P ? o.a.createElement(re, {
					subredditId: x.id,
					userId: O.id
				}) : o.a.createElement(W, {
					subredditId: x.id,
					userId: O.id
				})), o.a.createElement("div", {
					className: Object(i.a)(_.a.stickyContent, _.a.scrollGradientContainer)
				}, o.a.createElement(u.a, {
					isVisible: s
				})), P && !k && o.a.createElement("div", {
					className: _.a.stickyContent
				}, o.a.createElement("div", {
					className: _.a.divider
				}), o.a.createElement(l.a, {
					className: _.a.ctaButton,
					onClick: () => {
						t(Object(m.A)()), e(Object(d.g)("user_flair_picker"))
					}
				}))) : null
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
			const h = e => {
				let {
					className: t,
					subredditId: r,
					userId: i,
					flairData: m,
					username: h,
					userHasBadge: f,
					usernameClassName: v
				} = e;
				const w = Object(o.e)(e => Object(p.k)(e));
				return w ? n.a.createElement("div", {
					className: Object(s.a)(b.a.flairPreview, t),
					"data-testid": "user-flair-preview"
				}, n.a.createElement(l.a, {
					className: b.a.userIcon,
					iconUrl: w.accountIcon,
					isNSFW: w.isNSFW,
					nsfwIconUrl: u.a,
					userName: h || ""
				}), n.a.createElement("div", {
					className: b.a.allFlair
				}, n.a.createElement("div", {
					className: b.a.flairPreviewFirstLine
				}, f && n.a.createElement(a.a, {
					className: b.a.badge,
					subredditId: r,
					uniqueIdentifier: r,
					badgeSize: 20
				}), n.a.createElement("span", {
					className: Object(s.a)(b.a.username, v)
				}, `${h||"username"}`), n.a.createElement(d.a, {
					className: b.a.achievementFlair,
					subredditId: r,
					userId: i
				})), (null == m ? void 0 : m.applied) && m.displaySettings.isUserEnabled && n.a.createElement("div", {
					className: b.a.flairPreviewSecondLine
				}, n.a.createElement(c.b, {
					className: b.a.userFlair,
					flair: m.applied,
					forceSmallEmojis: !0
				})))) : null
			}
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				a = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), c = e => {
				let {
					className: t,
					onClick: r,
					disabled: s
				} = e;
				const c = Object(n.e)(a.u);
				return i.a.createElement(o.t, {
					priority: o.c.Primary,
					className: t,
					onClick: r,
					isFullWidth: !0,
					disabled: s
				}, (() => c ? d._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : d._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
			}
		},
		"./src/reddit/components/ScrollGradient/index.m.less": function(e, t, r) {
			e.exports = {
				gradient: "_3-kakYRJykUyPafukcDzry",
				visible: "_24Ju7hkI6TbfWdJ0X4gSqu"
			}
		},
		"./src/reddit/components/ScrollGradient/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/lib/classNames/index.ts"),
				i = r("./node_modules/react/index.js"),
				n = r.n(i),
				o = r("./src/reddit/components/ScrollGradient/index.m.less"),
				a = r.n(o);
			const d = e => {
				let {
					className: t,
					isVisible: r
				} = e;
				return n.a.createElement("div", {
					className: Object(s.a)(a.a.gradient, t, {
						[a.a.visible]: r
					})
				})
			}
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js");

			function i(e) {
				Object(s.useEffect)(() => {
					e()
				}, [e])
			}
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			var s, i = r("./node_modules/react/index.js");

			function n(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Bottom;
				const [r, n] = Object(i.useState)(e), o = Object(i.useRef)(null);
				return {
					container: o,
					isScrollGradientVisible: r,
					calculateGradientVisibility: () => {
						const e = o.current;
						if (!e) return;
						const r = e.getBoundingClientRect().height,
							{
								scrollHeight: i,
								scrollTop: a
							} = e,
							d = Math.ceil(a + r) >= i,
							c = Math.ceil(r - a) >= i,
							l = t === s.Bottom ? d : c;
						n(!l)
					}
				}
			}! function(e) {
				e.Top = "top", e.Bottom = "bottom"
			}(s || (s = {}))
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
					return (null === (t = e.find(e => {
						let {
							isPreferred: t
						} = e;
						return t
					})) || void 0 === t ? void 0 : t.type) || (null === (r = e[0]) || void 0 === r ? void 0 : r.type)
				},
				u = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.ob:
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
				subredditUserPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
									s = r.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									a = o.filter(n.b),
									d = a.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
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
				usersSupportedSubreddits: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.i: {
							let r = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const i = s.supportedSubreddits.filter(e => {
									let {
										subredditInfo: t
									} = e;
									return null == t ? void 0 : t.id
								}).map(e => {
									let {
										subredditInfo: t
									} = e;
									return t.id
								});
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
		"./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = ["t5_395yw", "t5_2zkfk", "t5_3o3fz", "t5_2rzot", "t5_2w2lq", "t5_3ii04", "t5_3hn0l", "t5_2qh8h", "t5_3g6wm", "t5_3ntes", "t5_35aia", "t5_2r8ok", "t5_iygqf", "t5_2qutz", "t5_2qkhb", "t5_2r78m", "t5_2qkob", "t5_hwfuo", "t5_2tfgu", "t5_2u8vt", "t5_vnwft", "t5_3izzds", "t5_gofqg"],
				a = (e, t) => c(e) && d(t),
				d = e => o.includes(e),
				c = Object(s.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: i.Qd
				}), e => e === i.ud)
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
				return h
			})), r.d(t, "e", (function() {
				return f
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
			const a = (e, t) => {
					let {
						subredditId: r
					} = t;
					var s;
					return r ? null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[r] : null
				},
				d = (e, t) => {
					let {
						subredditId: r
					} = t;
					var s, i;
					return r ? null === (i = null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[r]) || void 0 === i ? void 0 : i.flairsByType : null
				},
				c = (e, t) => {
					let {
						subredditId: r,
						userId: s
					} = t;
					var i, n;
					return r && s ? null === (n = null === (i = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === i ? void 0 : i[r]) || void 0 === n ? void 0 : n[s] : null
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
				h = Object(s.a)([a, c], (e, t) => {
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
				f = Object(s.a)([c], e => !!e && e.isHidden),
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
				j = (e, t) => {
					let {
						commentId: r
					} = t;
					const s = Object(i.b)(e, {
							commentId: r
						}),
						n = null == s ? void 0 : s.subredditId,
						o = null == s ? void 0 : s.authorId;
					return !(!n || !o) && !!((e, t) => {
						let {
							subredditId: r,
							userId: s
						} = t;
						var i, n, o;
						return r && s ? null === (o = null === (n = null === (i = e.features.powerups) || void 0 === i ? void 0 : i.usersSupportedSubreddits) || void 0 === n ? void 0 : n[s]) || void 0 === o ? void 0 : o[r] : null
					})(e, {
						subredditId: n,
						userId: o
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.7e588798a49b83a444bb.js.map