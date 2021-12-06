// https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.4ebdcfdeca7f9cbc4f4f.js
// Retrieved at 12/6/2021, 3:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsFlairModal"], {
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return y
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return I
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return O
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return F
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return g
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return x
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return P
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return E
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return _
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return k
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return S
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return T
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
			var l = r("./src/reddit/actions/gold/powerups.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/actions/economics/powerups/constants.ts"),
				j = r("./src/lib/initializeClient/installReducer.ts"),
				w = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(j.a)({
				features: {
					powerups: w.a
				}
			});
			const y = Object(i.a)(v.d),
				I = Object(i.a)(v.i),
				O = Object(i.a)(v.f),
				F = Object(i.a)(v.g),
				g = Object(i.a)(v.e),
				x = Object(i.a)(v.h),
				P = (e, t) => async (r, s, {
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
						await r(y(s)), n && await r(I(n))
					} catch (c) {
						n.c.captureException(c)
					}
				}, E = (e, t) => async (r, s) => {
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
					!t && o || await r(P(e, [n.id]))
				}, _ = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(l.m)(e, {
						fullData: !0
					}));
					const s = r();
					return Object(b.h)(s, {
						subredditId: e
					})
				}, k = e => async (t, r) => {
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
					await t(P(a, Array.from(d)))
				}, S = (e, t) => async (r, s) => {
					if (!t) return;
					if (!(await r(_(e)))) return;
					const i = new Set;
					Object.values(t).forEach(e => {
						i.add(e.authorId)
					}), await r(P(e, Array.from(i)))
				}, T = (e, t) => async (r, s) => {
					const i = s(),
						n = Object(h.k)(i);
					if (!n) return;
					const o = n.id,
						a = Object(f.i)(i, {
							subredditId: e,
							userId: o
						});
					r(C({
						subredditId: e,
						userId: o,
						achievementFlairType: t,
						supporterFlairType: a
					}))
				}, N = (e, t) => async (r, s) => {
					const i = s(),
						n = Object(h.k)(i);
					if (!n) return;
					const o = n.id,
						a = Object(f.h)(i, {
							subredditId: e,
							userId: o
						});
					r(C({
						subredditId: e,
						userId: o,
						achievementFlairType: a,
						supporterFlairType: t
					}))
				}, C = e => async (t, r, {
					gqlContext: i
				}) => {
					const o = r(),
						a = Object(h.k)(o);
					if (!a) return;
					const d = a.id;
					t(O(e));
					const {
						subredditId: l,
						achievementFlairType: m,
						supporterFlairType: b
					} = e, v = [m, b].filter(Boolean), j = Object(f.e)(o, {
						subredditId: l,
						userId: d
					});
					try {
						await c(i(), l, v, j), t(F(e))
					} catch (w) {
						t(g(e)), n.c.captureException(w), t(Object(u.f)({
							duration: u.a,
							kind: p.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, U = (e, t) => async (r, i, {
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
				return P
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "a", (function() {
				return C
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
			var j = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				w = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				y = r.n(w);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = "add-custom-badge-tooltip",
				F = 100,
				g = 2 * F,
				x = 24;
			class P extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, F)), this.mouseOverTooltip = e
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
						className: Object(d.a)(y.a.image, this.props.className),
						src: `${a.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${O}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || x;
					return i.a.createElement(s.Fragment, null, this.props.showAddCustom && i.a.createElement("div", {
						className: y.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, i.a.createElement("button", {
						className: y.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, i.a.createElement(h.a, {
						className: y.a.addCustom
					})), i.a.createElement(j, {
						className: y.a.badgeHovercard,
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
							className: Object(d.a)(y.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(n),
							onMouseLeave: () => this.handleMouseLeave()
						}, i.a.createElement("img", {
							className: y.a.image,
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
							className: y.a.badgeHovercard,
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
			const E = [],
				_ = Object(o.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: r
					}) => {
						var s;
						return (null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[t]) || E
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
						return s && (null === (r = e.users.appliedBadges[s.id]) || void 0 === r ? void 0 : r[t]) || E
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
				return i.a.createElement(P, I({
					badges: n
				}, s))
			}
			const N = Object(n.b)(_, S)(T),
				C = Object(n.b)(k, S)(T)
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
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				highContrast: t,
				onClick: r
			}) => n.a.createElement("button", {
				onClick: r,
				className: Object(s.a)(d.a.closeButton, {
					[d.a.highContrast]: t
				}, e),
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
				f = r("./src/reddit/hooks/useTracking.ts"),
				h = r("./src/reddit/models/User/index.ts"),
				v = r("./src/reddit/selectors/experiments/econ/index.ts"),
				j = r("./src/reddit/selectors/platform.ts"),
				w = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/selectors/userFlair.ts"),
				I = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				O = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				F = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/Header.m.less"),
				g = r.n(F);
			const x = ({
				className: e,
				subredditId: t,
				userId: r,
				flairData: s,
				onModalClose: n,
				username: a
			}) => o.a.createElement("div", {
				className: Object(i.a)(g.a.container, e),
				"data-testid": "achievement-flair-modal-header"
			}, o.a.createElement(O.a, {
				className: g.a.userFlairPreview,
				subredditId: t,
				userId: r,
				username: a,
				flairData: s
			}), o.a.createElement(I.a, {
				onClick: n
			}));
			var P = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.m.less"),
				E = r.n(P),
				_ = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				k = r("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				S = r("./src/reddit/controls/Button/index.tsx"),
				T = r("./src/reddit/hooks/usePreloadModal.ts"),
				N = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				C = r("./src/reddit/selectors/gold/powerups/index.ts"),
				U = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				A = r("./src/reddit/actions/tooltip.ts"),
				L = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				B = r("./src/reddit/helpers/trackers/userFlair.ts"),
				M = r("./src/reddit/icons/fonts/index.tsx"),
				D = r("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts"),
				H = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlair.m.less"),
				G = r.n(H);
			const {
				fbt: Q
			} = r("./node_modules/fbt/lib/FbtPublic.js"), R = ({
				flair: e,
				onSelect: t
			}) => {
				const r = Object(a.d)(),
					s = Object(f.a)(),
					n = `achievement-locked-${e.type}`,
					d = e.isLocked ? Q._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}) : "",
					c = e.description || d,
					l = () => {
						if (c) return r(Object(A.h)({
							tooltipId: n
						}))
					},
					u = !e.isLocked && !e.isPreferred;
				return o.a.createElement("div", {
					onMouseEnter: l,
					onMouseLeave: l,
					onClick: () => {
						if (u && t(e.type), !e.isPreferred) {
							const t = Object(D.b)(e) ? {
								supporterFlair: e
							} : {
								achievementFlair: e
							};
							s(Object(B.b)(t))
						}
					},
					className: Object(i.a)(G.a.achievementItem, {
						[G.a.achievementItemLocked]: e.isLocked,
						[G.a.achievementItemActive]: e.isPreferred,
						[G.a.achievementItemSelectable]: u
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, o.a.createElement("div", {
					className: G.a.achievementImgWrapper
				}, o.a.createElement("img", {
					id: n,
					className: G.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), o.a.createElement("div", {
					className: G.a.achievementImgLocked
				}, o.a.createElement(M.a, {
					name: "lock",
					isFilled: !0,
					className: G.a.achievementLock
				}))), o.a.createElement("div", {
					className: G.a.achievementName
				}, o.a.createElement("span", null, e.name)), !!c && o.a.createElement(L.c, {
					tooltipId: n,
					text: c,
					className: G.a.achievementTooltip
				}))
			};
			var K = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/OldAchievementFlairs.m.less"),
				q = r.n(K);
			const {
				fbt: V
			} = r("./node_modules/fbt/lib/FbtPublic.js"), W = ({
				className: e,
				subredditId: t,
				userId: r
			}) => {
				const s = Object(f.a)(),
					n = Object(a.e)(e => Object(U.b)(e, {
						subredditId: t,
						userId: r
					})),
					c = Object(a.e)(e => Object(C.o)(e, {
						subredditId: t
					})),
					u = Object(a.e)(e => Object(U.j)(e, {
						subredditId: t,
						userId: r
					})),
					p = Object(a.d)(),
					b = e => {
						p(Object(_.setSubredditUserAchievementFlair)(t, e))
					},
					h = () => {
						p(Object(d.g)("user_flair_picker"))
					};
				return Object(T.a)(k.a), o.a.createElement("div", {
					className: Object(i.a)(q.a.container, e)
				}, o.a.createElement("h4", {
					className: q.a.achievementsHeading
				}, o.a.createElement(N.a, {
					className: q.a.headingPowerupsBolt
				}), V._("Achievements", null, {
					hk: "1DnL4g"
				})), o.a.createElement("p", {
					className: q.a.achievementsDescription
				}, (() => c && !u ? V._("Unlock the Powerup Supporter achievement when you Powerup this community", null, {
					hk: "2ZIvgm"
				}) : c ? V._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				}) : V._("Powerup to unlock community achievements", null, {
					hk: "1oPooH"
				}))()), o.a.createElement("div", {
					className: q.a.achievementsList
				}, n.map(e => o.a.createElement(R, {
					flair: e,
					key: e.type,
					onSelect: b
				}))), (() => c && !u ? o.a.createElement(l.a, {
					onClick: () => {
						s(Object(m.H)()), h()
					}
				}) : c ? null : o.a.createElement(S.t, {
					priority: S.c.Primary,
					className: q.a.powerupButton,
					isFullWidth: !0,
					onClick: () => {
						s(Object(m.D)()), h()
					}
				}, V._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))())
			};
			var z = r("./src/reddit/controls/ToggleSwitch/index.tsx"),
				J = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/FlairsSection.m.less"),
				Y = r.n(J);
			const Z = ({
				className: e,
				title: t,
				subtitle: r,
				flairs: s,
				onClickFlair: i
			}) => o.a.createElement("div", {
				className: e
			}, o.a.createElement("h4", {
				className: Y.a.title
			}, o.a.createElement(N.a, {
				className: Y.a.headingPowerupsBolt
			}), t), o.a.createElement("p", {
				className: Y.a.subtitle
			}, r), o.a.createElement("div", {
				className: Y.a.flairsList
			}, s.map(e => o.a.createElement(R, {
				flair: e,
				key: e.type,
				onSelect: i
			}))));
			var $ = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlairsBody.m.less"),
				X = r.n($);
			const {
				fbt: ee
			} = r("./node_modules/fbt/lib/FbtPublic.js"), te = ({
				subredditId: e,
				userId: t,
				className: r
			}) => {
				const s = Object(f.a)(),
					i = Object(a.d)(),
					n = Object(a.e)(r => Object(U.c)(r, {
						subredditId: e,
						userId: t
					})),
					d = Object(a.e)(r => Object(U.e)(r, {
						subredditId: e,
						userId: t
					})),
					c = Object(a.e)(t => Object(C.o)(t, {
						subredditId: e
					}));
				if (Object(T.a)(k.a), !n) return null;
				return o.a.createElement("div", {
					className: r
				}, o.a.createElement(Z, {
					className: X.a.flairsSection,
					title: ee._("Supporter Flair", null, {
						hk: "1U21cd"
					}),
					subtitle: ee._("Power up your community to get more flair!", null, {
						hk: "12WxtM"
					}),
					flairs: n.supporterFlairs,
					onClickFlair: t => {
						i(Object(_.setSubredditUserSupporterFlair)(e, t))
					}
				}), o.a.createElement(Z, {
					className: X.a.flairsSection,
					title: ee._("Achievement Flair", null, {
						hk: "10y9WL"
					}),
					subtitle: ee._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
						hk: "3egU1f"
					}),
					flairs: n.achievementFlairs,
					onClickFlair: t => {
						i(Object(_.setSubredditUserAchievementFlair)(e, t))
					}
				}), o.a.createElement("div", {
					className: X.a.flairsVisibility
				}, o.a.createElement("label", {
					className: X.a.flairsVisibilityLabel
				}, ee._("Show Supporter and Achievement Flair", null, {
					hk: "3755UL"
				})), o.a.createElement(z.a, {
					className: X.a.flairsVisibilitySwitch,
					disabled: !c,
					on: c && !d,
					onToggle: () => {
						const t = !d;
						i(Object(_.setSubredditUserPowerupsFlairsVisibility)(e, t)), s(Object(B.d)(t))
					}
				})))
			};
			var re = r("./src/reddit/actions/authorFlair.ts"),
				se = r("./src/reddit/components/Flair/index.tsx"),
				ie = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/UserFlair.m.less"),
				ne = r.n(ie);
			const {
				fbt: oe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ae = ({
				className: e,
				subredditId: t,
				flairData: r
			}) => {
				const s = Object(a.d)(),
					n = Object(f.a)(),
					d = Object(a.e)(w.k);
				return d ? o.a.createElement("div", {
					className: Object(i.a)(ne.a.container, e)
				}, o.a.createElement("div", {
					className: ne.a.header
				}, o.a.createElement("h4", {
					className: ne.a.flairText
				}, oe._("User Flair", null, {
					hk: "3DaU0r"
				})), o.a.createElement(S.t, {
					className: ne.a.editButton,
					priority: S.c.Plain,
					onClick: () => {
						const e = d ? Object(h.e)(d) : null;
						n(Object(B.a)()), s(Object(re.b)({
							username: e,
							subredditId: t,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, o.a.createElement(M.a, {
					name: "edit"
				}))), (null == r ? void 0 : r.applied) && r.displaySettings.isUserEnabled && o.a.createElement(se.b, {
					className: ne.a.flair,
					flair: r.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(s.a)(() => {
				const e = Object(a.d)(),
					t = Object(f.a)(),
					{
						container: r,
						isScrollGradientVisible: s,
						calculateGradientVisibility: n
					} = Object(b.a)(!0),
					I = Object(a.e)(w.k),
					O = Object(a.e)(j.e),
					F = Object(a.e)(e => O ? Object(y.b)(e, {
						subredditId: O.id
					}) : null),
					g = Object(a.e)(e => O ? Object(y.d)(e, {
						subredditId: O.id
					}) : null),
					P = Object(a.e)(v.k),
					_ = !!F && !!g;
				return I && O ? o.a.createElement("div", {
					className: E.a.container
				}, o.a.createElement("div", {
					className: E.a.stickyContent
				}, o.a.createElement(x, {
					subredditId: O.id,
					userId: I.id,
					username: Object(h.e)(I),
					flairData: g,
					onModalClose: () => {
						e(Object(c.g)(p.a.ACHIEVEMENT_FLAIR))
					}
				})), o.a.createElement("div", {
					className: E.a.scrollContainer,
					ref: r,
					onScroll: n
				}, _ && o.a.createElement(ae, {
					subredditId: O.id,
					flairData: g
				}), P ? o.a.createElement(te, {
					subredditId: O.id,
					userId: I.id
				}) : o.a.createElement(W, {
					subredditId: O.id,
					userId: I.id
				})), o.a.createElement("div", {
					className: Object(i.a)(E.a.stickyContent, E.a.scrollGradientContainer)
				}, o.a.createElement(u.a, {
					isVisible: s
				})), P && o.a.createElement("div", {
					className: E.a.stickyContent
				}, o.a.createElement("div", {
					className: E.a.divider
				}), o.a.createElement(l.a, {
					className: E.a.ctaButton,
					onClick: () => {
						t(Object(m.G)()), e(Object(d.g)("user_flair_picker"))
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
				userHasBadge: f,
				usernameClassName: h
			}) => {
				const v = Object(o.e)(e => Object(p.k)(e));
				return v ? n.a.createElement("div", {
					className: Object(s.a)(b.a.flairPreview, e),
					"data-testid": "user-flair-preview"
				}, n.a.createElement(l.a, {
					className: b.a.userIcon,
					iconUrl: v.accountIcon,
					isNSFW: v.isNSFW,
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
					className: Object(s.a)(b.a.username, h)
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
				return c
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				a = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), c = ({
				className: e,
				onClick: t
			}) => {
				const r = Object(n.e)(a.v);
				return i.a.createElement(o.t, {
					priority: o.c.Primary,
					className: e,
					onClick: t,
					isFullWidth: !0
				}, (() => r ? d._("Use Your Premium Powerup", null, {
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
			const d = ({
				className: e,
				isVisible: t
			}) => n.a.createElement("div", {
				className: Object(s.a)(a.a.gradient, e, {
					[a.a.visible]: t
				})
			})
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
				return i
			}));
			var s = r("./node_modules/react/index.js");

			function i(e) {
				const [t, r] = Object(s.useState)(e), i = Object(s.useRef)(null);
				return {
					container: i,
					isScrollGradientVisible: t,
					calculateGradientVisibility: () => {
						const e = i.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							s = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						r(!s)
					}
				}
			}
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
				return w
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
						supporterFlairs: j(r, n, i, c || a),
						achievementFlairs: j(s, o, i, l || d)
					}
				}),
				h = Object(s.a)([c], e => !!e && e.isHidden),
				v = Object(s.a)([a, c, m], (e, t, r) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return r ? [r, ...s] : s
				}),
				j = (e, t, r, s) => e.map(e => ({
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.4ebdcfdeca7f9cbc4f4f.js.map