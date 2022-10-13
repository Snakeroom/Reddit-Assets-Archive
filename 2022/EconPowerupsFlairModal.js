// https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.def07f697998fcd912dd.js
// Retrieved at 10/13/2022, 3:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsFlairModal", "AchievementsActions"], {
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return E
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return F
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return O
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return I
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return P
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return _
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return y
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return S
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return k
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return C
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return N
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return T
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return U
			})), r.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return M
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				c = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const d = async (e, t, r, s) => {
				const i = await Object(a.a)(e, {
					...c,
					variables: {
						subredditId: t,
						flairTypes: r,
						isHidden: s
					}
				});
				if (!i.ok || !i.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var l = r("./src/reddit/actions/gold/achievementFlairs.ts"),
				u = r("./src/reddit/actions/gold/powerups.ts"),
				m = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/selectors/commentSelector.ts"),
				h = r("./src/reddit/selectors/experiments/econ/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/index.ts"),
				v = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				w = r("./src/reddit/actions/economics/powerups/constants.ts"),
				g = r("./src/lib/initializeClient/installReducer.ts"),
				j = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(g.a)({
				features: {
					powerups: j.a
				}
			});
			const E = Object(i.a)(w.d),
				F = Object(i.a)(w.i),
				O = Object(i.a)(w.f),
				I = Object(i.a)(w.g),
				P = Object(i.a)(w.e),
				_ = Object(i.a)(w.h),
				y = (e, t) => async (r, s, i) => {
					let {
						gqlContext: c
					} = i;
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const t = await (async (e, t, r) => {
								const s = await Object(a.a)(e, {
									...o,
									variables: {
										subredditId: t,
										redditorIds: r,
										includeSupporterInfo: !0
									}
								});
								if (!s.ok) throw new Error("Unable to fetch user achievements");
								return s.body.data
							})(c(), e, d),
							{
								subredditInfoById: s,
								redditorsInfoByIds: i
							} = t;
						await r(E(s)), i && await r(F(i))
					} catch (l) {
						n.c.captureException(l)
					}
				}, S = (e, t) => async (r, s) => {
					if (!e) return;
					const i = s(),
						n = Object(x.k)(i);
					if (!n || !Object(f.n)(i, {
							subredditId: e
						})) return;
					const a = !!Object(v.f)(i, {
						subredditId: e,
						userId: n.id
					});
					!t && a || await r(y(e, [n.id]))
				}, k = e => async (t, r) => !!e && (Object(h.g)(r()) ? (await t(Object(l.c)(e)), !!Object(v.d)(r(), {
					subredditId: e
				})) : (await t(Object(u.j)(e, {
					fullData: !0
				})), Object(f.g)(r(), {
					subredditId: e
				}))), C = e => async (t, r) => {
					var s;
					const i = r(),
						n = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						a = Object(b.d)(i, {
							commentIds: n
						}),
						o = null === (s = a.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await t(k(o)))) return;
					const c = new Set(a.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(y(o, Array.from(c)))
				}, N = (e, t) => async (r, s) => {
					if (!t) return;
					if (!(await r(k(e)))) return;
					const i = new Set;
					Object.values(t).forEach(e => {
						i.add(e.authorId)
					}), await r(y(e, Array.from(i)))
				}, T = (e, t) => async (r, s) => {
					const i = s(),
						n = Object(x.k)(i);
					if (!n) return;
					const a = n.id,
						o = Object(v.i)(i, {
							subredditId: e,
							userId: a
						});
					r(L({
						subredditId: e,
						userId: a,
						achievementFlairType: t,
						supporterFlairType: o
					}))
				}, U = (e, t) => async (r, s) => {
					const i = s(),
						n = Object(x.k)(i);
					if (!n) return;
					const a = n.id,
						o = Object(v.h)(i, {
							subredditId: e,
							userId: a
						});
					r(L({
						subredditId: e,
						userId: a,
						achievementFlairType: o,
						supporterFlairType: t
					}))
				}, L = e => async (t, r, i) => {
					let {
						gqlContext: a
					} = i;
					const o = r(),
						c = Object(x.k)(o);
					if (!c) return;
					const l = c.id;
					t(O(e));
					const {
						subredditId: u,
						achievementFlairType: b,
						supporterFlairType: h
					} = e, f = [b, h].filter(Boolean), w = Object(v.e)(o, {
						subredditId: u,
						userId: l
					});
					try {
						await d(a(), u, f, w), t(I(e))
					} catch (g) {
						t(P(e)), n.c.captureException(g), t(Object(m.f)({
							duration: m.a,
							kind: p.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, M = (e, t) => async (r, i, a) => {
					let {
						gqlContext: o
					} = a;
					const c = i(),
						l = Object(x.k)(c);
					if (!l) return;
					const u = l.id,
						b = {
							subredditId: e,
							userId: u
						},
						h = [Object(v.h)(c, b), Object(v.i)(c, b)].filter(Boolean);
					r(_({
						...b,
						isHidden: t
					}));
					try {
						await d(o(), e, h, t)
					} catch (f) {
						r(_({
							...b,
							isHidden: !t
						})), n.c.captureException(f), r(Object(m.f)({
							duration: m.a,
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
				return o
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
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
				a = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(s.a)(a.a),
				c = Object(s.a)(a.b),
				d = Object(s.a)(a.c),
				l = Object(s.a)(a.d),
				u = Object(s.a)(a.e),
				m = Object(s.a)(a.f),
				p = Object(s.a)(a.g),
				b = Object(s.a)(a.h),
				h = Object(s.a)(a.i),
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
				return P
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "a", (function() {
				return T
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("SubredditPremiumBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = r("./src/reddit/featureFlags/index.ts"),
				h = r("./src/reddit/helpers/economics/sortBadges.ts"),
				f = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = r("./src/reddit/models/Badge/index.ts");
			var x = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				w = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				g = r.n(w);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = "add-custom-badge-tooltip",
				F = 100,
				O = 2 * F,
				I = 24;
			class P extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, F)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, O)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return i.a.createElement("img", {
						className: Object(c.a)(g.a.image, this.props.className),
						src: `${o.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${E}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || I;
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
					})), i.a.createElement(x, {
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
							className: Object(c.a)(g.a.wrapper, this.props.className),
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
						}), this.props.useHovercard ? i.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: g.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: n,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : i.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: n,
							text: e.title
						})))
					}))
				}
			}
			const _ = [],
				y = Object(a.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: r,
							userId: s
						} = t;
						var i;
						return (null === (i = e.users.appliedBadges[s]) || void 0 === i ? void 0 : i[r]) || _
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				S = Object(a.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: r
						} = t;
						var s;
						const i = e.user.account;
						return i && (null === (s = e.users.appliedBadges[i.id]) || void 0 === s ? void 0 : s[r]) || _
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				k = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(d.j)())
				});

			function C(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...s
				} = e, n = t.map(e => r[e]).filter(Boolean);
				return i.a.createElement(P, j({
					badges: n
				}, s))
			}
			const N = Object(n.b)(y, k)(C),
				T = Object(n.b)(S, k)(C)
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
				a = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				o = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				c = r.n(o);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					className: t,
					highContrast: r,
					onClick: i
				} = e;
				return n.a.createElement("button", {
					onClick: i,
					className: Object(s.a)(c.a.closeButton, {
						[c.a.highContrast]: r
					}, t),
					"aria-label": d._("Close", null, {
						hk: "3Qarlp"
					})
				}, n.a.createElement(a.b, {
					className: c.a.closeIcon
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
				a = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/components/ScrollGradient/index.tsx"),
				l = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/hooks/useScrollGradient.ts"),
				m = r("./src/reddit/models/User/index.ts"),
				p = r("./src/reddit/selectors/platform.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/selectors/userFlair.ts"),
				f = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				v = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				x = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/Header.m.less"),
				w = r.n(x);
			const g = e => {
				let {
					className: t,
					subredditId: r,
					userId: s,
					flairData: n,
					onModalClose: o,
					username: c
				} = e;
				return a.a.createElement("div", {
					className: Object(i.a)(w.a.container, t),
					"data-testid": "achievement-flair-modal-header"
				}, a.a.createElement(v.a, {
					className: w.a.userFlairPreview,
					subredditId: r,
					userId: s,
					username: c,
					flairData: n
				}), a.a.createElement(f.a, {
					onClick: o
				}))
			};
			var j = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.m.less"),
				E = r.n(j),
				F = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				O = r("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				I = r("./src/reddit/controls/ToggleSwitch/index.tsx"),
				P = r("./src/reddit/helpers/trackers/userFlair.ts"),
				_ = r("./src/reddit/hooks/usePreloadModal.ts"),
				y = r("./src/reddit/hooks/useTracking.ts"),
				S = r("./src/reddit/selectors/experiments/econ/index.ts"),
				k = r("./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts"),
				C = r("./src/reddit/selectors/gold/powerups/index.ts"),
				N = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				T = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				U = r("./src/reddit/actions/tooltip.ts"),
				L = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				M = r("./src/reddit/icons/fonts/index.tsx"),
				A = r("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts"),
				B = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlair.m.less"),
				D = r.n(B);
			const {
				fbt: H
			} = r("./node_modules/fbt/lib/FbtPublic.js"), G = e => {
				let {
					flair: t,
					onSelect: r
				} = e;
				const s = Object(o.d)(),
					n = Object(y.a)(),
					c = `achievement-locked-${t.type}`,
					d = t.isLocked ? H._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}) : "",
					l = t.description || d,
					u = () => {
						if (l) return s(Object(U.h)({
							tooltipId: c
						}))
					},
					m = !t.isLocked && !t.isPreferred;
				return a.a.createElement("div", {
					onMouseEnter: u,
					onMouseLeave: u,
					onClick: () => {
						if (m && r(t.type), !t.isPreferred) {
							const e = Object(A.b)(t) ? {
								supporterFlair: t
							} : {
								achievementFlair: t
							};
							n(Object(P.b)(e))
						}
					},
					className: Object(i.a)(D.a.achievementItem, {
						[D.a.achievementItemLocked]: t.isLocked,
						[D.a.achievementItemActive]: t.isPreferred,
						[D.a.achievementItemSelectable]: m
					}),
					"data-testid": `af-modal-achievement-flair-${t.type}`
				}, a.a.createElement("div", {
					className: D.a.achievementImgWrapper
				}, a.a.createElement("img", {
					id: c,
					className: D.a.achievementImg,
					src: t.icon.url,
					alt: t.name
				}), a.a.createElement("div", {
					className: D.a.achievementImgLocked
				}, a.a.createElement(M.a, {
					name: "lock",
					isFilled: !0,
					className: D.a.achievementLock
				}))), a.a.createElement("div", {
					className: D.a.achievementName
				}, a.a.createElement("span", null, t.name)), !!l && a.a.createElement(L.c, {
					tooltipId: c,
					text: l,
					className: D.a.achievementTooltip
				}))
			};
			var q = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/FlairsSection.m.less"),
				z = r.n(q);
			const V = e => {
				let {
					className: t,
					title: r,
					subtitle: s,
					flairs: i,
					onClickFlair: n
				} = e;
				const c = Object(o.e)(S.g);
				return a.a.createElement("div", {
					className: t
				}, a.a.createElement("h4", {
					className: z.a.title
				}, !c && a.a.createElement(T.a, {
					className: z.a.headingPowerupsBolt
				}), r), a.a.createElement("p", {
					className: z.a.subtitle
				}, s), a.a.createElement("div", {
					className: z.a.flairsList
				}, i.map(e => a.a.createElement(G, {
					flair: e,
					key: e.type,
					onSelect: n
				}))))
			};
			var Q = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlairsBody.m.less"),
				R = r.n(Q);
			const {
				fbt: K
			} = r("./node_modules/fbt/lib/FbtPublic.js"), W = e => {
				let {
					subredditId: t,
					userId: r,
					className: s
				} = e;
				const i = Object(y.a)(),
					n = Object(o.d)(),
					c = Object(o.e)(e => Object(N.b)(e, {
						subredditId: t,
						userId: r
					})),
					d = Object(o.e)(S.g),
					l = Object(o.e)(e => Object(k.a)(e, t)),
					u = Object(o.e)(e => Object(N.e)(e, {
						subredditId: t,
						userId: r
					})),
					m = Object(o.e)(e => Object(C.n)(e, {
						subredditId: t
					}));
				if (Object(_.a)(O.a), !c) return null;
				const p = !l && !d;
				return a.a.createElement("div", {
					className: s
				}, p && a.a.createElement(V, {
					className: R.a.flairsSection,
					title: K._("Supporter Flair", null, {
						hk: "1U21cd"
					}),
					subtitle: d ? K._("Support your community to get more flair!", null, {
						hk: "2NgB9p"
					}) : K._("Power up your community to get more flair!", null, {
						hk: "12WxtM"
					}),
					flairs: c.supporterFlairs,
					onClickFlair: e => {
						n(Object(F.setSubredditUserSupporterFlair)(t, e))
					}
				}), a.a.createElement(V, {
					className: R.a.flairsSection,
					title: K._("Achievement Flair", null, {
						hk: "10y9WL"
					}),
					subtitle: d ? K._("Choose the achievement you’d like to highlight.", null, {
						hk: "2GS39k"
					}) : K._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
						hk: "3egU1f"
					}),
					flairs: c.achievementFlairs,
					onClickFlair: e => {
						n(Object(F.setSubredditUserAchievementFlair)(t, e))
					}
				}), a.a.createElement("div", {
					className: R.a.flairsVisibility
				}, a.a.createElement("label", {
					className: R.a.flairsVisibilityLabel
				}, p ? K._("Show Supporter and Achievement Flair", null, {
					hk: "RxMER"
				}) : K._("Show Achievement Flair", null, {
					hk: "1STetn"
				})), a.a.createElement(I.a, {
					className: R.a.flairsVisibilitySwitch,
					disabled: !m,
					on: m && !u,
					onToggle: () => {
						const e = !u;
						n(Object(F.setSubredditUserPowerupsFlairsVisibility)(t, e)), i(Object(P.d)(e))
					}
				})))
			};
			var Y = r("./src/reddit/actions/authorFlair.ts"),
				J = r("./src/reddit/components/Flair/index.tsx"),
				$ = r("./src/reddit/controls/Button/index.tsx"),
				Z = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/UserFlair.m.less"),
				X = r.n(Z);
			const {
				fbt: ee
			} = r("./node_modules/fbt/lib/FbtPublic.js"), te = e => {
				let {
					className: t,
					subredditId: r,
					flairData: s
				} = e;
				const n = Object(o.d)(),
					c = Object(y.a)(),
					d = Object(o.e)(b.k);
				return d ? a.a.createElement("div", {
					className: Object(i.a)(X.a.container, t)
				}, a.a.createElement("div", {
					className: X.a.header
				}, a.a.createElement("h4", {
					className: X.a.flairText
				}, ee._("User Flair", null, {
					hk: "3DaU0r"
				})), a.a.createElement($.t, {
					className: X.a.editButton,
					priority: $.c.Plain,
					onClick: () => {
						const e = d ? Object(m.e)(d) : null;
						c(Object(P.a)()), n(Object(Y.b)({
							username: e,
							subredditId: r,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, a.a.createElement(M.a, {
					name: "edit"
				}))), (null == s ? void 0 : s.applied) && s.displaySettings.isUserEnabled && a.a.createElement(J.b, {
					className: X.a.flair,
					flair: s.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(s.a)(() => {
				const e = Object(o.d)(),
					{
						container: t,
						isScrollGradientVisible: r,
						calculateGradientVisibility: s
					} = Object(u.b)(!0);
				Object(n.useLayoutEffect)(() => {
					s()
				});
				const f = Object(o.e)(b.k),
					v = Object(o.e)(p.e),
					x = Object(o.e)(e => v ? Object(h.b)(e, {
						subredditId: v.id
					}) : null),
					w = Object(o.e)(e => v ? Object(h.d)(e, {
						subredditId: v.id
					}) : null),
					j = !!x && !!w;
				return f && v ? a.a.createElement("div", {
					className: E.a.container
				}, a.a.createElement("div", {
					className: E.a.stickyContent
				}, a.a.createElement(g, {
					subredditId: v.id,
					userId: f.id,
					username: Object(m.e)(f),
					flairData: w,
					onModalClose: () => {
						e(Object(c.g)(l.a.ACHIEVEMENT_FLAIR))
					}
				})), a.a.createElement("div", {
					className: E.a.scrollContainer,
					ref: t,
					onScroll: s
				}, j && a.a.createElement(te, {
					subredditId: v.id,
					flairData: w
				}), a.a.createElement(W, {
					subredditId: v.id,
					userId: f.id
				})), a.a.createElement("div", {
					className: Object(i.a)(E.a.stickyContent, E.a.scrollGradientContainer)
				}, a.a.createElement(d.a, {
					isVisible: r
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
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				c = r("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				d = r("./src/reddit/components/Flair/index.tsx"),
				l = r("./src/reddit/components/UserIcon/index.tsx"),
				u = r("./src/reddit/components/UserIcon/constants.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				p = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.m.less"),
				b = r.n(p);
			const h = e => {
				let {
					className: t,
					subredditId: r,
					userId: i,
					flairData: p,
					username: h,
					userHasBadge: f,
					usernameClassName: v
				} = e;
				const x = Object(a.e)(e => Object(m.k)(e));
				return x ? n.a.createElement("div", {
					className: Object(s.a)(b.a.flairPreview, t),
					"data-testid": "user-flair-preview"
				}, n.a.createElement(l.a, {
					className: b.a.userIcon,
					iconUrl: x.accountIcon,
					isNSFW: x.isNSFW,
					nsfwIconUrl: u.a,
					userName: h || ""
				}), n.a.createElement("div", {
					className: b.a.allFlair
				}, n.a.createElement("div", {
					className: b.a.flairPreviewFirstLine
				}, f && n.a.createElement(o.a, {
					className: b.a.badge,
					subredditId: r,
					uniqueIdentifier: r,
					badgeSize: 20
				}), n.a.createElement("span", {
					className: Object(s.a)(b.a.username, v)
				}, `${h||"username"}`), n.a.createElement(c.a, {
					className: b.a.achievementFlair,
					subredditId: r,
					userId: i
				})), (null == p ? void 0 : p.applied) && p.displaySettings.isUserEnabled && n.a.createElement("div", {
					className: b.a.flairPreviewSecondLine
				}, n.a.createElement(d.b, {
					className: b.a.userFlair,
					flair: p.applied,
					forceSmallEmojis: !0
				})))) : null
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
				return c
			}));
			var s = r("./src/lib/classNames/index.ts"),
				i = r("./node_modules/react/index.js"),
				n = r.n(i),
				a = r("./src/reddit/components/ScrollGradient/index.m.less"),
				o = r.n(a);
			const c = e => {
				let {
					className: t,
					isVisible: r
				} = e;
				return n.a.createElement("div", {
					className: Object(s.a)(o.a.gradient, t, {
						[o.a.visible]: r
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
				const [r, n] = Object(i.useState)(e), a = Object(i.useRef)(null);
				return {
					container: a,
					isScrollGradientVisible: r,
					calculateGradientVisibility: () => {
						const e = a.current;
						if (!e) return;
						const r = e.getBoundingClientRect().height,
							{
								scrollHeight: i,
								scrollTop: o
							} = e,
							c = Math.ceil(o + r) >= i,
							d = Math.ceil(r - o) >= i,
							l = t === s.Bottom ? c : d;
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
		"./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = ["t5_395yw", "t5_2zkfk", "t5_3o3fz", "t5_2rzot", "t5_2w2lq", "t5_3ii04", "t5_3hn0l", "t5_2qh8h", "t5_3g6wm", "t5_3ntes", "t5_35aia", "t5_2r8ok", "t5_iygqf", "t5_2qutz", "t5_2qkhb", "t5_2r78m", "t5_2qkob", "t5_hwfuo", "t5_2tfgu", "t5_2u8vt", "t5_vnwft", "t5_3izzds", "t5_gofqg"],
				o = (e, t) => d(e) && c(t),
				c = e => a.includes(e),
				d = Object(s.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: i.ne
				}), e => e === i.Qd)
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"92790c69eba6"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.def07f697998fcd912dd.js.map