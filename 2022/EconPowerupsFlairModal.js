// https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.a7ad060ddaca2a6cdbca.js
// Retrieved at 7/11/2022, 7:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsFlairModal"], {
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return x
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return j
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return y
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return F
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return I
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return O
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return E
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return P
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return _
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return S
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return T
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return k
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return C
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
				w = r("./src/lib/initializeClient/installReducer.ts"),
				g = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(w.a)({
				features: {
					powerups: g.a
				}
			});
			const x = Object(i.a)(v.d),
				j = Object(i.a)(v.i),
				y = Object(i.a)(v.f),
				F = Object(i.a)(v.g),
				I = Object(i.a)(v.e),
				O = Object(i.a)(v.h),
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
						await r(x(s)), i && await r(j(i))
					} catch (l) {
						n.c.captureException(l)
					}
				}, P = (e, t) => async (r, s) => {
					if (!e) return;
					const i = s(),
						n = Object(h.k)(i);
					if (!n || !Object(b.f)(i, {
							subredditId: e
						})) return;
					const o = !!Object(f.e)(i, {
						subredditId: e,
						userId: n.id
					});
					!t && o || await r(E(e, [n.id]))
				}, _ = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(l.k)(e, {
						fullData: !0
					}));
					const s = r();
					return Object(b.f)(s, {
						subredditId: e
					})
				}, S = e => async (t, r) => {
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
				}, T = (e, t) => async (r, s) => {
					if (!t) return;
					if (!(await r(_(e)))) return;
					const i = new Set;
					Object.values(t).forEach(e => {
						i.add(e.authorId)
					}), await r(E(e, Array.from(i)))
				}, k = (e, t) => async (r, s) => {
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
						achievementFlairType: t,
						supporterFlairType: a
					}))
				}, C = (e, t) => async (r, s) => {
					const i = s(),
						n = Object(h.k)(i);
					if (!n) return;
					const o = n.id,
						a = Object(f.g)(i, {
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
						d = Object(h.k)(a);
					if (!d) return;
					const l = d.id;
					t(y(e));
					const {
						subredditId: m,
						achievementFlairType: b,
						supporterFlairType: v
					} = e, w = [b, v].filter(Boolean), g = Object(f.d)(a, {
						subredditId: m,
						userId: l
					});
					try {
						await c(o(), m, w, g), t(F(e))
					} catch (x) {
						t(I(e)), n.c.captureException(x), t(Object(u.f)({
							duration: u.a,
							kind: p.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, U = (e, t) => async (r, i, o) => {
					let {
						gqlContext: a
					} = o;
					const d = i(),
						l = Object(h.k)(d);
					if (!l) return;
					const m = l.id,
						b = {
							subredditId: e,
							userId: m
						},
						v = [Object(f.g)(d, b), Object(f.h)(d, b)].filter(Boolean);
					r(O({
						...b,
						isHidden: t
					}));
					try {
						await c(a(), e, v, t)
					} catch (w) {
						r(O({
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
				f = r("./src/reddit/helpers/economics/sortBadges.ts"),
				h = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = r("./src/reddit/models/Badge/index.ts");
			var w = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				g = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				x = r.n(g);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = "add-custom-badge-tooltip",
				F = 100,
				I = 2 * F,
				O = 24;
			class E extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, F)), this.mouseOverTooltip = e
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
						className: Object(d.a)(x.a.image, this.props.className),
						src: `${a.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${y}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || O;
					return i.a.createElement(s.Fragment, null, this.props.showAddCustom && i.a.createElement("div", {
						className: x.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, i.a.createElement("button", {
						className: x.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, i.a.createElement(h.a, {
						className: x.a.addCustom
					})), i.a.createElement(w, {
						className: x.a.badgeHovercard,
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
							className: Object(d.a)(x.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(n),
							onMouseLeave: () => this.handleMouseLeave()
						}, i.a.createElement("img", {
							className: x.a.image,
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
							className: x.a.badgeHovercard,
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
				S = Object(o.c)({
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
				T = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				});

			function k(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...s
				} = e, n = t.map(e => r[e]).filter(Boolean);
				return i.a.createElement(E, j({
					badges: n
				}, s))
			}
			const C = Object(n.b)(_, T)(k),
				N = Object(n.b)(S, T)(k)
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
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/components/ScrollGradient/index.tsx"),
				l = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/hooks/useScrollGradient.ts"),
				p = r("./src/reddit/models/User/index.ts"),
				m = r("./src/reddit/selectors/platform.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/selectors/userFlair.ts"),
				h = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				v = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				w = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/Header.m.less"),
				g = r.n(w);
			const x = e => {
				let {
					className: t,
					subredditId: r,
					userId: s,
					flairData: n,
					onModalClose: a,
					username: d
				} = e;
				return o.a.createElement("div", {
					className: Object(i.a)(g.a.container, t),
					"data-testid": "achievement-flair-modal-header"
				}, o.a.createElement(v.a, {
					className: g.a.userFlairPreview,
					subredditId: r,
					userId: s,
					username: d,
					flairData: n
				}), o.a.createElement(h.a, {
					onClick: a
				}))
			};
			var j = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.m.less"),
				y = r.n(j),
				F = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				I = r("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				O = r("./src/reddit/controls/ToggleSwitch/index.tsx"),
				E = r("./src/reddit/helpers/trackers/userFlair.ts"),
				P = r("./src/reddit/hooks/usePreloadModal.ts"),
				_ = r("./src/reddit/hooks/useTracking.ts"),
				S = r("./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts"),
				T = r("./src/reddit/selectors/gold/powerups/index.ts"),
				k = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				C = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				N = r("./src/reddit/actions/tooltip.ts"),
				U = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				L = r("./src/reddit/icons/fonts/index.tsx"),
				A = r("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts"),
				M = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlair.m.less"),
				B = r.n(M);
			const {
				fbt: D
			} = r("./node_modules/fbt/lib/FbtPublic.js"), H = e => {
				let {
					flair: t,
					onSelect: r
				} = e;
				const s = Object(a.d)(),
					n = Object(_.a)(),
					d = `achievement-locked-${t.type}`,
					c = t.isLocked ? D._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}) : "",
					l = t.description || c,
					u = () => {
						if (l) return s(Object(N.h)({
							tooltipId: d
						}))
					},
					p = !t.isLocked && !t.isPreferred;
				return o.a.createElement("div", {
					onMouseEnter: u,
					onMouseLeave: u,
					onClick: () => {
						if (p && r(t.type), !t.isPreferred) {
							const e = Object(A.b)(t) ? {
								supporterFlair: t
							} : {
								achievementFlair: t
							};
							n(Object(E.b)(e))
						}
					},
					className: Object(i.a)(B.a.achievementItem, {
						[B.a.achievementItemLocked]: t.isLocked,
						[B.a.achievementItemActive]: t.isPreferred,
						[B.a.achievementItemSelectable]: p
					}),
					"data-testid": `af-modal-achievement-flair-${t.type}`
				}, o.a.createElement("div", {
					className: B.a.achievementImgWrapper
				}, o.a.createElement("img", {
					id: d,
					className: B.a.achievementImg,
					src: t.icon.url,
					alt: t.name
				}), o.a.createElement("div", {
					className: B.a.achievementImgLocked
				}, o.a.createElement(L.a, {
					name: "lock",
					isFilled: !0,
					className: B.a.achievementLock
				}))), o.a.createElement("div", {
					className: B.a.achievementName
				}, o.a.createElement("span", null, t.name)), !!l && o.a.createElement(U.c, {
					tooltipId: d,
					text: l,
					className: B.a.achievementTooltip
				}))
			};
			var G = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/FlairsSection.m.less"),
				V = r.n(G);
			const q = e => {
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
					className: V.a.title
				}, o.a.createElement(C.a, {
					className: V.a.headingPowerupsBolt
				}), r), o.a.createElement("p", {
					className: V.a.subtitle
				}, s), o.a.createElement("div", {
					className: V.a.flairsList
				}, i.map(e => o.a.createElement(H, {
					flair: e,
					key: e.type,
					onSelect: n
				}))))
			};
			var z = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlairsBody.m.less"),
				Q = r.n(z);
			const {
				fbt: R
			} = r("./node_modules/fbt/lib/FbtPublic.js"), K = e => {
				let {
					subredditId: t,
					userId: r,
					className: s
				} = e;
				const i = Object(_.a)(),
					n = Object(a.d)(),
					d = Object(a.e)(e => Object(k.b)(e, {
						subredditId: t,
						userId: r
					})),
					c = Object(a.e)(e => Object(S.a)(e, t)),
					l = Object(a.e)(e => Object(k.d)(e, {
						subredditId: t,
						userId: r
					})),
					u = Object(a.e)(e => Object(T.m)(e, {
						subredditId: t
					}));
				if (Object(P.a)(I.a), !d) return null;
				return o.a.createElement("div", {
					className: s
				}, !c && o.a.createElement(q, {
					className: Q.a.flairsSection,
					title: R._("Supporter Flair", null, {
						hk: "1U21cd"
					}),
					subtitle: R._("Power up your community to get more flair!", null, {
						hk: "12WxtM"
					}),
					flairs: d.supporterFlairs,
					onClickFlair: e => {
						n(Object(F.setSubredditUserSupporterFlair)(t, e))
					}
				}), o.a.createElement(q, {
					className: Q.a.flairsSection,
					title: R._("Achievement Flair", null, {
						hk: "10y9WL"
					}),
					subtitle: R._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
						hk: "3egU1f"
					}),
					flairs: d.achievementFlairs,
					onClickFlair: e => {
						n(Object(F.setSubredditUserAchievementFlair)(t, e))
					}
				}), o.a.createElement("div", {
					className: Q.a.flairsVisibility
				}, o.a.createElement("label", {
					className: Q.a.flairsVisibilityLabel
				}, c ? R._("Show Achievement Flair", null, {
					hk: "38VDpw"
				}) : R._("Show Supporter and Achievement Flair", null, {
					hk: "3755UL"
				})), o.a.createElement(O.a, {
					className: Q.a.flairsVisibilitySwitch,
					disabled: !u,
					on: u && !l,
					onToggle: () => {
						const e = !l;
						n(Object(F.setSubredditUserPowerupsFlairsVisibility)(t, e)), i(Object(E.d)(e))
					}
				})))
			};
			var W = r("./src/reddit/actions/authorFlair.ts"),
				Y = r("./src/reddit/components/Flair/index.tsx"),
				J = r("./src/reddit/controls/Button/index.tsx"),
				$ = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/UserFlair.m.less"),
				Z = r.n($);
			const {
				fbt: X
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ee = e => {
				let {
					className: t,
					subredditId: r,
					flairData: s
				} = e;
				const n = Object(a.d)(),
					d = Object(_.a)(),
					c = Object(a.e)(b.k);
				return c ? o.a.createElement("div", {
					className: Object(i.a)(Z.a.container, t)
				}, o.a.createElement("div", {
					className: Z.a.header
				}, o.a.createElement("h4", {
					className: Z.a.flairText
				}, X._("User Flair", null, {
					hk: "3DaU0r"
				})), o.a.createElement(J.t, {
					className: Z.a.editButton,
					priority: J.c.Plain,
					onClick: () => {
						const e = c ? Object(p.e)(c) : null;
						d(Object(E.a)()), n(Object(W.b)({
							username: e,
							subredditId: r,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, o.a.createElement(L.a, {
					name: "edit"
				}))), (null == s ? void 0 : s.applied) && s.displaySettings.isUserEnabled && o.a.createElement(Y.b, {
					className: Z.a.flair,
					flair: s.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(s.a)(() => {
				const e = Object(a.d)(),
					{
						container: t,
						isScrollGradientVisible: r,
						calculateGradientVisibility: s
					} = Object(u.b)(!0),
					n = Object(a.e)(b.k),
					h = Object(a.e)(m.e),
					v = Object(a.e)(e => h ? Object(f.b)(e, {
						subredditId: h.id
					}) : null),
					w = Object(a.e)(e => h ? Object(f.d)(e, {
						subredditId: h.id
					}) : null),
					g = !!v && !!w;
				return n && h ? o.a.createElement("div", {
					className: y.a.container
				}, o.a.createElement("div", {
					className: y.a.stickyContent
				}, o.a.createElement(x, {
					subredditId: h.id,
					userId: n.id,
					username: Object(p.e)(n),
					flairData: w,
					onModalClose: () => {
						e(Object(d.g)(l.a.ACHIEVEMENT_FLAIR))
					}
				})), o.a.createElement("div", {
					className: y.a.scrollContainer,
					ref: t,
					onScroll: s
				}, g && o.a.createElement(ee, {
					subredditId: h.id,
					flairData: w
				}), o.a.createElement(K, {
					subredditId: h.id,
					userId: n.id
				})), o.a.createElement("div", {
					className: Object(i.a)(y.a.stickyContent, y.a.scrollGradientContainer)
				}, o.a.createElement(c.a, {
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
			const f = e => {
				let {
					className: t,
					subredditId: r,
					userId: i,
					flairData: m,
					username: f,
					userHasBadge: h,
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
					userName: f || ""
				}), n.a.createElement("div", {
					className: b.a.allFlair
				}, n.a.createElement("div", {
					className: b.a.flairPreviewFirstLine
				}, h && n.a.createElement(a.a, {
					className: b.a.badge,
					subredditId: r,
					uniqueIdentifier: r,
					badgeSize: 20
				}), n.a.createElement("span", {
					className: Object(s.a)(b.a.username, v)
				}, `${f||"username"}`), n.a.createElement(d.a, {
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
						case i.nb:
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
					experimentName: i.Vd
				}), e => e === i.zd)
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return c
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "i", (function() {
				return m
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "a", (function() {
				return w
			}));
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
				b = Object(s.a)([a, c], (e, t) => {
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
				h = Object(s.a)([a, c, m], (e, t, r) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return r ? [r, ...s] : s
				}),
				v = (e, t, r, s) => e.map(e => ({
					...r[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				w = (e, t) => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.a7ad060ddaca2a6cdbca.js.map