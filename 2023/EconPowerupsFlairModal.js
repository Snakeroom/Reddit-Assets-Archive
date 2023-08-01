// https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.ed83d6139df817c12a63.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsFlairModal", "AchievementsActions"], {
		"./src/lib/isDefined.ts": function(e, t, s) {
			"use strict";

			function r(e) {
				return !!e
			}
			s.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return j
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return w
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return O
			})), s.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return F
			})), s.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return I
			})), s.d(t, "getSubredditUserPowerupsFlairs", (function() {
				return P
			})), s.d(t, "getSubredditCurrentUserPowerupsFlairs", (function() {
				return y
			})), s.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return _
			})), s.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return C
			})), s.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return S
			})), s.d(t, "setSubredditUserAchievementFlair", (function() {
				return N
			})), s.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return k
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/isDefined.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/sentry/index.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = s("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const l = async (e, t, s, r) => {
				const i = await Object(o.a)(e, {
					...d,
					variables: {
						subredditId: t,
						flairTypes: s,
						isHidden: r
					}
				});
				if (!i.ok || !i.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var u = s("./src/reddit/actions/gold/achievementFlairs.ts"),
				m = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/gold/powerups/index.ts"),
				f = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/actions/economics/powerups/constants.ts"),
				E = s("./src/lib/initializeClient/installReducer.ts"),
				g = s("./src/reddit/reducers/features/powerups/index.ts");
			Object(E.a)({
				features: {
					powerups: g.a
				}
			});
			const j = Object(a.a)(x.d),
				w = Object(a.a)(x.f),
				O = Object(a.a)(x.g),
				F = Object(a.a)(x.e),
				I = Object(a.a)(x.h),
				P = (e, t) => async (s, r, i) => {
					let {
						gqlContext: a
					} = i;
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const {
							subredditInfoById: t
						} = await (async (e, t, s) => {
							const r = await Object(o.a)(e, {
								...c,
								variables: {
									subredditId: t,
									redditorIds: s
								}
							});
							if (!r.ok) throw new Error("Unable to fetch user achievements");
							return r.body.data
						})(a(), e, d);
						await s(j(t))
					} catch (l) {
						n.c.captureException(l)
					}
				}, y = (e, t) => async (s, r) => {
					if (!e) return;
					const i = r(),
						a = Object(v.m)(i);
					if (!a || !Object(h.e)(i, {
							subredditId: e
						})) return;
					const n = !!Object(f.e)(i, {
						subredditId: e,
						userId: a.id
					});
					!t && n || await s(P(e, [a.id]))
				}, _ = e => async (t, s) => !!e && (await t(Object(u.c)(e)), !!Object(f.c)(s(), {
					subredditId: e
				})), C = e => async (t, s) => {
					var r;
					const i = s(),
						a = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						n = Object(b.e)(i, {
							commentIds: a
						}),
						o = null === (r = n.find(e => e && e.subredditId)) || void 0 === r ? void 0 : r.subredditId;
					if (!(await t(_(o)))) return;
					const c = new Set(n.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(P(o, Array.from(c)))
				}, S = (e, t) => async (s, r) => {
					if (!t) return;
					if (!(await s(_(e)))) return;
					const i = new Set;
					Object.values(t).forEach(e => {
						i.add(e.authorId)
					}), await s(P(e, Array.from(i)))
				}, N = (e, t) => async (s, r) => {
					const i = r(),
						a = Object(v.m)(i);
					if (!a) return;
					const n = a.id;
					s(T({
						subredditId: e,
						userId: n,
						achievementFlairType: t
					}))
				}, T = e => async (t, s, a) => {
					let {
						gqlContext: o
					} = a;
					const c = s(),
						d = Object(v.m)(c);
					if (!d) return;
					const u = d.id;
					t(w(e));
					const {
						subredditId: b,
						achievementFlairType: h
					} = e, x = [h].filter(i.a), E = Object(f.d)(c, {
						subredditId: b,
						userId: u
					});
					try {
						await l(o(), b, x, E), t(O(e))
					} catch (g) {
						t(F(e)), n.c.captureException(g), t(Object(m.f)({
							duration: m.a,
							kind: p.b.Error,
							text: r.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, k = (e, t) => async (s, a, o) => {
					let {
						gqlContext: c
					} = o;
					const d = a(),
						u = Object(v.m)(d);
					if (!u) return;
					const b = u.id,
						h = {
							subredditId: e,
							userId: b
						},
						x = [Object(f.g)(d, h)].filter(i.a);
					s(I({
						...h,
						isHidden: t
					}));
					try {
						await l(c(), e, x, t)
					} catch (E) {
						s(I({
							...h,
							isHidden: !t
						})), n.c.captureException(E), s(Object(m.f)({
							duration: m.a,
							kind: p.b.Error,
							text: r.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "i", (function() {
				return h
			})), s.d(t, "j", (function() {
				return f
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/constants/modals.ts"),
				n = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(r.a)(n.a),
				c = Object(r.a)(n.b),
				d = Object(r.a)(n.c),
				l = Object(r.a)(n.d),
				u = Object(r.a)(n.e),
				m = Object(r.a)(n.f),
				p = Object(r.a)(n.g),
				b = Object(r.a)(n.h),
				h = Object(r.a)(n.i),
				f = e => Object(i.h)(a.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return P
			})), s.d(t, "c", (function() {
				return T
			})), s.d(t, "a", (function() {
				return k
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("SubredditPremiumBadgeHovercardTooltip")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/helpers/economics/sortBadges.ts"),
				f = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = s("./src/reddit/models/Badge/index.ts");
			var x = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("CustomBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				E = s("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				g = s.n(E);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = "add-custom-badge-tooltip",
				O = 100,
				F = 2 * O,
				I = 24;
			class P extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, O)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, F)
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
					const t = `${w}-${this.props.uniqueIdentifier}`,
						s = this.props.badgeSize || I;
					return i.a.createElement(r.Fragment, null, this.props.showAddCustom && i.a.createElement("div", {
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
						const t = Object(v.d)(s, s, e),
							a = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return i.a.createElement(r.Fragment, {
							key: `badges-fragement-${e.id}`
						}, i.a.createElement("div", {
							className: Object(c.a)(g.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(a),
							onMouseLeave: () => this.handleMouseLeave()
						}, i.a.createElement("img", {
							className: g.a.image,
							id: a,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${s}px`
							}
						}), this.props.useHovercard ? i.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: g.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: a,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : i.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: a,
							text: e.title
						})))
					}))
				}
			}
			const y = [],
				_ = Object(n.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: s,
							userId: r
						} = t;
						var i;
						return (null === (i = e.users.appliedBadges[r]) || void 0 === i ? void 0 : i[s]) || y
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				C = Object(n.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: s
						} = t;
						var r;
						const i = e.user.account;
						return i && (null === (r = e.users.appliedBadges[i.id]) || void 0 === r ? void 0 : r[s]) || y
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				S = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(d.j)())
				});

			function N(e) {
				const {
					badgeIds: t,
					allBadges: s,
					...r
				} = e, a = t.map(e => s[e]).filter(Boolean);
				return i.a.createElement(P, j({
					badges: a
				}, r))
			}
			const T = Object(a.b)(_, S)(N),
				k = Object(a.b)(C, S)(N)
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, s) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var r = s("./src/lib/classNames/index.ts"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				n = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				o = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				c = s.n(o);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					className: t,
					highContrast: s,
					onClick: i
				} = e;
				return a.a.createElement("button", {
					onClick: i,
					className: Object(r.a)(c.a.closeButton, {
						[c.a.highContrast]: s
					}, t),
					"aria-label": d._("Close", null, {
						hk: "3Qarlp"
					})
				}, a.a.createElement(n.b, {
					className: c.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/FlairsSection.m.less": function(e, t, s) {
			e.exports = {
				title: "_1pC-Bxab8iEhFjBysEm9Fx",
				subtitle: "XW4MFnkLUQcc-RCk2bG3c",
				flairsList: "_37-EuLnMsmhTyY_SWfPUSr"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/Header.m.less": function(e, t, s) {
			e.exports = {
				container: "_32dPE02K4p96dMl5z5Kzg2"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlair.m.less": function(e, t, s) {
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
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlairsBody.m.less": function(e, t, s) {
			e.exports = {
				flairsSection: "_3hzQSBTgS0giB21d1usIHR",
				flairsVisibility: "_16-7nK9951T2vZZ0wPO_Ra",
				flairsVisibilityLabel: "_3EPtrF5q2eNGvPx3AIrzpm"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/UserFlair.m.less": function(e, t, s) {
			e.exports = {
				container: "zxsMn2uKCugEKCXsP8J_i",
				header: "_2BPctTGaKvG7xpovxPZ80P",
				flairText: "_1GputOZ-w3oP_gCLbhgwLo",
				editButton: "_6miNe5RxOJ1kieKhPgXxm",
				flair: "_6jGQKuf2PkAqP5oy683Sx"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1R8JYXvrokxOrjWamBt94g",
				stickyContent: "_2iShUxx-xqIjviabmNq5b_",
				scrollContainer: "T6yiD-7Rq2G0-DfQSgN2S",
				scrollGradientContainer: "_36hPQ_YSgtLw88EMUxdmd7",
				divider: "b1yOm-TuNTkTz0hgOExxm",
				ctaButton: "_3iNPwC6lNDr-_nZQt1y26b"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/components/ScrollGradient/index.tsx"),
				l = s("./src/reddit/constants/modals.ts"),
				u = s("./src/reddit/hooks/useScrollGradient.ts"),
				m = s("./src/reddit/models/User/index.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/selectors/userFlair.ts"),
				f = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				v = s("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				x = s("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/Header.m.less"),
				E = s.n(x);
			const g = e => {
				let {
					className: t,
					subredditId: s,
					userId: r,
					flairData: a,
					onModalClose: o,
					username: c
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(E.a.container, t),
					"data-testid": "achievement-flair-modal-header"
				}, n.a.createElement(v.a, {
					className: E.a.userFlairPreview,
					subredditId: s,
					userId: r,
					username: c,
					flairData: a
				}), n.a.createElement(f.a, {
					onClick: o
				}))
			};
			var j = s("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.m.less"),
				w = s.n(j),
				O = s("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				F = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				I = s("./src/reddit/helpers/trackers/userFlair.ts"),
				P = s("./src/reddit/hooks/useTracking.ts"),
				y = s("./src/reddit/selectors/gold/powerups/index.ts"),
				_ = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				C = s("./src/reddit/actions/tooltip.ts"),
				S = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				N = s("./src/reddit/icons/fonts/index.tsx"),
				T = s("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlair.m.less"),
				k = s.n(T);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), L = e => {
				let {
					flair: t,
					onSelect: s
				} = e;
				const r = Object(o.d)(),
					a = Object(P.a)(),
					c = `achievement-locked-${t.type}`,
					d = t.isLocked ? U._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}) : "",
					l = t.description || d,
					u = () => {
						if (l) return r(Object(C.h)({
							tooltipId: c
						}))
					},
					m = !t.isLocked && !t.isPreferred;
				return n.a.createElement("div", {
					onMouseEnter: u,
					onMouseLeave: u,
					onClick: () => {
						m && s(t.type), t.isPreferred || a(Object(I.b)({
							achievementFlair: t
						}))
					},
					className: Object(i.a)(k.a.achievementItem, {
						[k.a.achievementItemLocked]: t.isLocked,
						[k.a.achievementItemActive]: t.isPreferred,
						[k.a.achievementItemSelectable]: m
					}),
					"data-testid": `af-modal-achievement-flair-${t.type}`
				}, n.a.createElement("div", {
					className: k.a.achievementImgWrapper
				}, n.a.createElement("img", {
					id: c,
					className: k.a.achievementImg,
					src: t.icon.url,
					alt: t.name
				}), n.a.createElement("div", {
					className: k.a.achievementImgLocked
				}, n.a.createElement(N.a, {
					name: "lock",
					isFilled: !0,
					className: k.a.achievementLock
				}))), n.a.createElement("div", {
					className: k.a.achievementName
				}, n.a.createElement("span", null, t.name)), !!l && n.a.createElement(S.c, {
					tooltipId: c,
					text: l,
					className: k.a.achievementTooltip
				}))
			};
			var M = s("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/FlairsSection.m.less"),
				A = s.n(M);
			const B = e => {
				let {
					className: t,
					title: s,
					subtitle: r,
					flairs: i,
					onClickFlair: a
				} = e;
				return n.a.createElement("div", {
					className: t
				}, n.a.createElement("h4", {
					className: A.a.title
				}, s), n.a.createElement("p", {
					className: A.a.subtitle
				}, r), n.a.createElement("div", {
					className: A.a.flairsList
				}, i.map(e => n.a.createElement(L, {
					flair: e,
					key: e.type,
					onSelect: a
				}))))
			};
			var D = s("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlairsBody.m.less"),
				G = s.n(D);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = e => {
				let {
					subredditId: t,
					userId: s,
					className: r
				} = e;
				const i = Object(P.a)(),
					a = Object(o.d)(),
					c = Object(o.e)(e => Object(_.a)(e, {
						subredditId: t,
						userId: s
					})),
					d = Object(o.e)(e => Object(_.d)(e, {
						subredditId: t,
						userId: s
					})),
					l = Object(o.e)(e => Object(y.e)(e, {
						subredditId: t
					}));
				if (!c) return null;
				return n.a.createElement("div", {
					className: r
				}, n.a.createElement(B, {
					className: G.a.flairsSection,
					title: H._("Achievement Flair", null, {
						hk: "10y9WL"
					}),
					subtitle: H._("Choose the achievement you’d like to highlight.", null, {
						hk: "2GS39k"
					}),
					flairs: c,
					onClickFlair: e => {
						a(Object(O.setSubredditUserAchievementFlair)(t, e))
					}
				}), n.a.createElement("div", {
					className: G.a.flairsVisibility
				}, n.a.createElement("label", {
					className: G.a.flairsVisibilityLabel
				}, H._("Show Achievement Flair", null, {
					hk: "1STetn"
				})), n.a.createElement(F.a, {
					className: G.a.flairsVisibilitySwitch,
					disabled: !l,
					on: l && !d,
					onToggle: () => {
						const e = !d;
						a(Object(O.setSubredditUserPowerupsFlairsVisibility)(t, e)), i(Object(I.d)(e))
					}
				})))
			};
			var Q = s("./src/reddit/actions/authorFlair.ts"),
				q = s("./src/reddit/components/Flair/index.tsx"),
				R = s("./src/reddit/controls/Button/index.tsx"),
				K = s("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/UserFlair.m.less"),
				W = s.n(K);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Y = e => {
				let {
					className: t,
					subredditId: s,
					flairData: r
				} = e;
				const a = Object(o.d)(),
					c = Object(P.a)(),
					d = Object(o.e)(b.m);
				return d ? n.a.createElement("div", {
					className: Object(i.a)(W.a.container, t)
				}, n.a.createElement("div", {
					className: W.a.header
				}, n.a.createElement("h4", {
					className: W.a.flairText
				}, z._("User Flair", null, {
					hk: "3DaU0r"
				})), n.a.createElement(R.t, {
					className: W.a.editButton,
					priority: R.c.Plain,
					onClick: () => {
						const e = d ? Object(m.e)(d) : null;
						c(Object(I.a)()), a(Object(Q.b)({
							username: e,
							subredditId: s,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, n.a.createElement(N.a, {
					name: "edit"
				}))), (null == r ? void 0 : r.applied) && r.displaySettings.isUserEnabled && n.a.createElement(q.c, {
					className: W.a.flair,
					flair: r.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(r.a)(() => {
				const e = Object(o.d)(),
					{
						container: t,
						isScrollGradientVisible: s,
						calculateGradientVisibility: r
					} = Object(u.a)(!0);
				Object(a.useLayoutEffect)(() => {
					r()
				});
				const f = Object(o.e)(b.m),
					v = Object(o.e)(p.e),
					x = Object(o.e)(e => v ? Object(h.b)(e, {
						subredditId: v.id
					}) : null),
					E = Object(o.e)(e => v ? Object(h.d)(e, {
						subredditId: v.id
					}) : null),
					j = !!x && !!E;
				return f && v ? n.a.createElement("div", {
					className: w.a.container
				}, n.a.createElement("div", {
					className: w.a.stickyContent
				}, n.a.createElement(g, {
					subredditId: v.id,
					userId: f.id,
					username: Object(m.e)(f),
					flairData: E,
					onModalClose: () => {
						e(Object(c.g)(l.a.ACHIEVEMENT_FLAIR))
					}
				})), n.a.createElement("div", {
					className: w.a.scrollContainer,
					ref: t,
					onScroll: r
				}, j && n.a.createElement(Y, {
					subredditId: v.id,
					flairData: E
				}), n.a.createElement(V, {
					subredditId: v.id,
					userId: f.id
				})), n.a.createElement("div", {
					className: Object(i.a)(w.a.stickyContent, w.a.scrollGradientContainer)
				}, n.a.createElement(d.a, {
					isVisible: s
				}))) : null
			})
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "UserAchievementFlair",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("UserAchievementFlair").then(s.bind(null, "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.m.less": function(e, t, s) {
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
		"./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var r = s("./src/lib/classNames/index.ts"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				c = s("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				d = s("./src/reddit/components/Flair/index.tsx"),
				l = s("./src/reddit/components/UserIcon/index.tsx"),
				u = s("./src/reddit/components/UserIcon/constants.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.m.less"),
				b = s.n(p);
			const h = e => {
				let {
					className: t,
					subredditId: s,
					userId: i,
					flairData: p,
					username: h,
					userHasBadge: f,
					usernameClassName: v
				} = e;
				const x = Object(n.e)(e => Object(m.m)(e));
				return x ? a.a.createElement("div", {
					className: Object(r.a)(b.a.flairPreview, t),
					"data-testid": "user-flair-preview"
				}, a.a.createElement(l.a, {
					className: b.a.userIcon,
					iconUrl: x.accountIcon,
					isNSFW: x.isNSFW,
					nsfwIconUrl: u.a,
					userName: h || ""
				}), a.a.createElement("div", {
					className: b.a.allFlair
				}, a.a.createElement("div", {
					className: b.a.flairPreviewFirstLine
				}, f && a.a.createElement(o.a, {
					className: b.a.badge,
					subredditId: s,
					uniqueIdentifier: s,
					badgeSize: 20
				}), a.a.createElement("span", {
					className: Object(r.a)(b.a.username, v)
				}, `${h||"username"}`), a.a.createElement(c.a, {
					className: b.a.achievementFlair,
					subredditId: s,
					userId: i
				})), (null == p ? void 0 : p.applied) && p.displaySettings.isUserEnabled && a.a.createElement("div", {
					className: b.a.flairPreviewSecondLine
				}, a.a.createElement(d.c, {
					className: b.a.userFlair,
					flair: p.applied,
					forceSmallEmojis: !0
				})))) : null
			}
		},
		"./src/reddit/components/ScrollGradient/index.m.less": function(e, t, s) {
			e.exports = {
				gradient: "_3-kakYRJykUyPafukcDzry",
				visible: "_24Ju7hkI6TbfWdJ0X4gSqu"
			}
		},
		"./src/reddit/components/ScrollGradient/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./src/lib/classNames/index.ts"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				n = s("./src/reddit/components/ScrollGradient/index.m.less"),
				o = s.n(n);
			const c = e => {
				let {
					className: t,
					isVisible: s
				} = e;
				return a.a.createElement("div", {
					className: Object(r.a)(o.a.gradient, t, {
						[o.a.visible]: s
					})
				})
			}
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r, i = s("./node_modules/react/index.js");

			function a(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Bottom;
				const [s, a] = Object(i.useState)(e), n = Object(i.useRef)(null);
				return {
					container: n,
					isScrollGradientVisible: s,
					calculateGradientVisibility: () => {
						const e = n.current;
						if (!e) return;
						const s = e.getBoundingClientRect().height,
							{
								scrollHeight: i,
								scrollTop: o
							} = e,
							c = Math.ceil(o + s) >= i,
							d = Math.ceil(s - o) >= i,
							l = t === r.Bottom ? c : d;
						a(!l)
					}
				}
			}! function(e) {
				e.Top = "top", e.Bottom = "bottom"
			}(r || (r = {}))
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);

			function a(e) {
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
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"7288c5f50973"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.ed83d6139df817c12a63.js.map