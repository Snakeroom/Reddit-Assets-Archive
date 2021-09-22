// https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.47575eeaa23899b37cee.js
// Retrieved at 9/22/2021, 11:50:08 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsFlairModal"], {
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return j
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return E
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return O
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return g
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return x
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return F
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return y
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return P
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return _
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return k
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return T
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return C
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var c = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/lib/initializeClient/installReducer.ts"),
				u = r("./src/reddit/reducers/features/powerups/index.ts"),
				m = r("./src/reddit/actions/gold/powerups.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/selectors/commentSelector.ts"),
				v = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				w = r("./src/reddit/actions/economics/powerups/constants.ts");
			Object(l.a)({
				features: {
					powerups: u.a
				}
			});
			const j = Object(i.a)(w.d),
				E = Object(i.a)(w.h),
				O = Object(i.a)(w.f),
				g = Object(i.a)(w.g),
				x = Object(i.a)(w.e),
				F = (e, t) => async (r, s, {
					gqlContext: i
				}) => {
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const t = s(),
							n = Object(c.i)(t),
							l = await (async (e, t, r, s) => {
								const i = await Object(a.a)(e, {
									...o,
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
								redditorsInfoByIds: m
							} = l;
						await r(j(u)), n && m && await r(E(m))
					} catch (l) {
						n.c.captureException(l)
					}
				}, y = (e, t) => async (r, s) => {
					if (!e) return;
					const i = s(),
						n = Object(I.k)(i);
					if (!n || !Object(v.g)(i, {
							subredditId: e
						})) return;
					const a = !!Object(f.d)(i, {
						subredditId: e,
						userId: n.id
					});
					!t && a || await r(F(e, [n.id]))
				}, P = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(m.l)(e, {
						fullData: !0
					}));
					const s = r();
					return Object(v.g)(s, {
						subredditId: e
					})
				}, _ = e => async (t, r) => {
					var s;
					const i = r(),
						n = e.map(({
							id: e
						}) => e),
						a = Object(h.c)(i, {
							commentIds: n
						}),
						o = null === (s = a.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await t(P(o)))) return;
					const d = new Set(a.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await t(F(o, Array.from(d)))
				}, k = (e, t) => async (r, s) => {
					if (!t) return;
					if (!(await r(P(e)))) return;
					const i = new Set;
					Object.values(t).forEach(e => {
						i.add(e.authorId)
					}), await r(F(e, Array.from(i)))
				}, T = (e, t) => async (r, s) => {
					const i = s(),
						n = Object(I.k)(i);
					if (!n) return;
					const a = n.id,
						o = Object(f.h)(i, {
							subredditId: e,
							userId: a
						});
					r(N({
						subredditId: e,
						userId: a,
						achievementFlairType: t,
						supporterFlairType: o
					}))
				}, C = (e, t) => async (r, s) => {
					const i = s(),
						n = Object(I.k)(i);
					if (!n) return;
					const a = n.id,
						o = Object(f.f)(i, {
							subredditId: e,
							userId: a
						});
					r(N({
						subredditId: e,
						userId: a,
						achievementFlairType: o,
						supporterFlairType: t
					}))
				}, N = e => async (t, r, {
					gqlContext: i
				}) => {
					t(O(e));
					const {
						subredditId: o,
						achievementFlairType: c,
						supporterFlairType: l
					} = e, u = [c, l].filter(Boolean);
					try {
						await (async (e, t, r) => {
							const s = await Object(a.a)(e, {
								...d,
								variables: {
									subredditId: t,
									flairTypes: r
								}
							});
							if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update the preferred achievement flair")
						})(i(), o, u), t(g(e))
					} catch (m) {
						t(x(e)), n.c.captureException(m), t(Object(p.f)({
							duration: p.a,
							kind: b.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
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
				return d
			})), r.d(t, "c", (function() {
				return c
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
				return v
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				n = r("./src/reddit/constants/modals.ts"),
				a = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(s.a)(a.a),
				d = Object(s.a)(a.b),
				c = Object(s.a)(a.c),
				l = Object(s.a)(a.d),
				u = Object(s.a)(a.e),
				m = Object(s.a)(a.f),
				p = Object(s.a)(a.g),
				b = Object(s.a)(a.h),
				h = Object(s.a)(a.i),
				v = e => Object(i.h)(n.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
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
				return y
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "a", (function() {
				return S
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/config.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
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
				v = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = r("./src/reddit/models/Badge/index.ts");
			var I = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				w = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				j = r.n(w);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = "add-custom-badge-tooltip",
				g = 100,
				x = 2 * g,
				F = 24;
			class y extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, g)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, x)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return i.a.createElement("img", {
						className: Object(d.a)(j.a.image, this.props.className),
						src: `${o.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${O}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || F;
					return i.a.createElement(s.Fragment, null, this.props.showAddCustom && i.a.createElement("div", {
						className: j.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, i.a.createElement("button", {
						className: j.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, i.a.createElement(v.a, {
						className: j.a.addCustom
					})), i.a.createElement(I, {
						className: j.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(e).map(e => {
						const t = Object(f.d)(r, r, e),
							n = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return i.a.createElement(s.Fragment, {
							key: `badges-fragement-${e.id}`
						}, i.a.createElement("div", {
							className: Object(d.a)(j.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(n),
							onMouseLeave: () => this.handleMouseLeave()
						}, i.a.createElement("img", {
							className: j.a.image,
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
							className: j.a.badgeHovercard,
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
			const P = [],
				_ = Object(a.c)({
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
				k = Object(a.c)({
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

			function C(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...s
				} = e, n = t.map(e => r[e]).filter(Boolean);
				return i.a.createElement(y, E({
					badges: n
				}, s))
			}
			const N = Object(n.b)(_, T)(C),
				S = Object(n.b)(k, T)(C)
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
				return c
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				o = r.n(a);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), c = ({
				className: e,
				onClick: t
			}) => i.a.createElement("button", {
				onClick: t,
				className: o.a.closeButton,
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, i.a.createElement(n.b, {
				className: o.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less": function(e, t, r) {
			e.exports = {
				container: "ciVctEeLKylCRejTc9u2e",
				header: "_2EZJLt05_wdk_osIo3latc",
				powerupsLogo: "_2vohvd3sMxCQYU4XZok__A",
				headerText: "_3yFC4AlORm5Ql4AnP3tO5C",
				headerDelimiter: "GMu2Q_kdqb93PfujN_OOl",
				achievements: "_3yyAEiwzXU-705K4-2CYcp",
				achievementItem: "_29gOi1XSw60-K2kDQZerSu",
				achievementImgWrapper: "_2Quz2MhfZx-Ctyd9zFO7ju",
				achievementImg: "_3_H_5cdEEjCzMRE60q9kbE",
				achievementName: "_1BTx4JIyc9txuPsRaFBelE",
				footer: "kXcPoSA0ho3o1nH-mYqEV",
				scrollGradient: "_1XmrOUyJINsGbV1Emy_6I0",
				gradientVisible: "_1gcqKximkvdrFYxxOUaH4g",
				ctaButton: "_1q2lrbLX6F7HH2qBbvitLG"
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
				a = r("./src/higherOrderComponents/asModal/index.tsx"),
				o = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/models/User/index.ts"),
				l = r("./src/reddit/selectors/experiments/econ/index.ts"),
				u = r("./src/reddit/selectors/platform.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				p = r("./src/reddit/selectors/userFlair.ts"),
				b = r("./src/lib/classNames/index.ts"),
				h = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				v = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				f = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/Header.m.less"),
				I = r.n(f);
			const w = ({
				className: e,
				subredditId: t,
				userId: r,
				flairData: s,
				onModalClose: n,
				username: a
			}) => i.a.createElement("div", {
				className: Object(b.a)(I.a.container, e),
				"data-testid": "achievement-flair-modal-header"
			}, i.a.createElement(v.a, {
				className: I.a.userFlairPreview,
				subredditId: t,
				userId: r,
				username: a,
				flairData: s
			}), i.a.createElement(h.a, {
				onClick: n
			}));
			var j = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.m.less"),
				E = r.n(j),
				O = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				g = r("./src/reddit/actions/gold/powerups.ts"),
				x = r("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				F = r("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				y = r("./src/reddit/controls/Button/index.tsx"),
				P = r("./src/reddit/helpers/trackers/powerups.ts"),
				_ = r("./src/reddit/hooks/useTracking.ts"),
				k = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				T = r("./src/reddit/selectors/gold/powerups/index.ts"),
				C = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				N = r("./src/reddit/actions/tooltip.ts"),
				S = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				L = r("./src/reddit/helpers/trackers/userFlair.ts"),
				U = r("./src/reddit/icons/fonts/index.tsx"),
				M = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlair.m.less"),
				A = r.n(M);
			const {
				fbt: B
			} = r("./node_modules/fbt/lib/FbtPublic.js"), H = ({
				achievement: e,
				onSelect: t
			}) => {
				const r = Object(n.d)(),
					s = Object(_.a)(),
					a = `achievement-locked-${e.type}`,
					o = B._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}),
					d = () => {
						if (e.isLocked) return r(Object(N.h)({
							tooltipId: a
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
					className: Object(b.a)(A.a.achievementItem, {
						[A.a.achievementItemLocked]: e.isLocked,
						[A.a.achievementItemActive]: e.isPreferred,
						[A.a.achievementItemSelectable]: c
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, i.a.createElement("div", {
					className: A.a.achievementImgWrapper
				}, i.a.createElement("img", {
					id: a,
					className: A.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), i.a.createElement("div", {
					className: A.a.achievementImgLocked
				}, i.a.createElement(U.a, {
					name: "lock",
					isFilled: !0,
					className: A.a.achievementLock
				}))), i.a.createElement("div", {
					className: A.a.achievementName
				}, i.a.createElement("span", null, e.name)), e.isLocked && i.a.createElement(S.c, {
					tooltipId: a,
					text: o,
					className: A.a.achievementTooltip
				}))
			};
			var D = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/OldAchievementFlairs.m.less"),
				G = r.n(D);
			const {
				fbt: Q
			} = r("./node_modules/fbt/lib/FbtPublic.js"), R = ({
				className: e,
				subredditId: t,
				userId: r
			}) => {
				const a = Object(_.a)(),
					o = Object(n.e)(e => Object(C.b)(e, {
						subredditId: t,
						userId: r
					})),
					d = Object(n.e)(e => Object(T.n)(e, {
						subredditId: t
					})),
					c = Object(n.e)(e => Object(C.g)(e, {
						subredditId: t,
						userId: r
					})),
					l = Object(n.d)(),
					u = e => {
						l(Object(O.setSubredditUserAchievementFlair)(t, e))
					},
					m = () => {
						l(Object(g.f)("user_flair_picker"))
					};
				return Object(s.useEffect)(() => {
					Object(x.a)()
				}, []), i.a.createElement("div", {
					className: Object(b.a)(G.a.container, e)
				}, i.a.createElement("h4", {
					className: G.a.achievementsHeading
				}, i.a.createElement(k.a, {
					className: G.a.headingPowerupsBolt
				}), Q._("Achievements", null, {
					hk: "1DnL4g"
				})), i.a.createElement("p", {
					className: G.a.achievementsDescription
				}, (() => d && !c ? Q._("Unlock the Powerup Supporter achievement when you Powerup this community", null, {
					hk: "2ZIvgm"
				}) : d ? Q._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				}) : Q._("Powerup to unlock community achievements", null, {
					hk: "1oPooH"
				}))()), i.a.createElement("div", {
					className: G.a.achievementsList
				}, o.map(e => i.a.createElement(H, {
					achievement: e,
					key: e.type,
					onSelect: u
				}))), (() => d && !c ? i.a.createElement(F.a, {
					onClick: () => {
						a(Object(P.z)()), m()
					}
				}) : d ? null : i.a.createElement(y.s, {
					priority: y.b.Primary,
					className: G.a.powerupButton,
					isFullWidth: !0,
					onClick: () => {
						a(Object(P.v)()), m()
					}
				}, Q._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))())
			};
			var K = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/FlairsSection.m.less"),
				z = r.n(K);
			const W = ({
				className: e,
				title: t,
				subtitle: r,
				flairs: s,
				onClickFlair: n
			}) => i.a.createElement("div", {
				className: e
			}, i.a.createElement("h4", {
				className: z.a.title
			}, i.a.createElement(k.a, {
				className: z.a.headingPowerupsBolt
			}), t), i.a.createElement("p", {
				className: z.a.subtitle
			}, r), i.a.createElement("div", {
				className: z.a.flairsList
			}, s.map(e => i.a.createElement(H, {
				achievement: e,
				key: e.type,
				onSelect: n
			}))));
			var V = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlairsBody.m.less"),
				q = r.n(V);
			const {
				fbt: J
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Y = ({
				subredditId: e,
				userId: t
			}) => {
				const r = Object(_.a)(),
					a = Object(n.d)(),
					o = Object(n.e)(r => Object(C.c)(r, {
						subredditId: e,
						userId: t
					}));
				Object(s.useEffect)(() => {
					Object(x.a)()
				}, []);
				return o ? i.a.createElement("div", null, i.a.createElement(W, {
					className: q.a.flairsSection,
					title: J._("Supporter Flairs", null, {
						hk: "1HLPYb"
					}),
					subtitle: J._("Power up your community to get more flair!", null, {
						hk: "waK24"
					}),
					flairs: o.supporterFlairs,
					onClickFlair: t => {
						a(Object(O.setSubredditUserSupporterFlair)(e, t))
					}
				}), i.a.createElement(W, {
					className: q.a.flairsSection,
					title: J._("Achievement Flairs", null, {
						hk: "4vJF7x"
					}),
					subtitle: J._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
						hk: "3egU1f"
					}),
					flairs: o.achievementFlairs,
					onClickFlair: t => {
						a(Object(O.setSubredditUserAchievementFlair)(e, t))
					}
				}), i.a.createElement(F.a, {
					className: q.a.button,
					onClick: () => {
						r(Object(P.y)()), a(Object(g.f)("user_flair_picker"))
					}
				})) : null
			};
			var X = r("./src/reddit/actions/authorFlair.ts"),
				Z = r("./src/reddit/components/Flair/index.tsx"),
				$ = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/UserFlair.m.less"),
				ee = r.n($);
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js"), re = ({
				className: e,
				subredditId: t,
				flairData: r
			}) => {
				const s = Object(n.d)(),
					a = Object(_.a)(),
					o = Object(n.e)(m.k);
				return o ? i.a.createElement("div", {
					className: Object(b.a)(ee.a.container, e)
				}, i.a.createElement("div", {
					className: ee.a.header
				}, i.a.createElement("h4", {
					className: ee.a.flairText
				}, te._("User flair", null, {
					hk: "3ToqP0"
				})), i.a.createElement(y.s, {
					className: ee.a.editButton,
					priority: y.b.Plain,
					onClick: () => {
						const e = o ? Object(c.e)(o) : null;
						a(Object(L.a)()), s(Object(X.b)({
							username: e,
							subredditId: t,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, i.a.createElement(U.a, {
					name: "edit"
				}))), (null == r ? void 0 : r.applied) && r.displaySettings.isUserEnabled && i.a.createElement(Z.b, {
					className: ee.a.flair,
					flair: r.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(a.a)(() => {
				const e = Object(n.d)(),
					t = Object(n.e)(m.k),
					r = Object(n.e)(u.e),
					s = Object(n.e)(e => r ? Object(p.b)(e, {
						subredditId: r.id
					}) : null),
					a = Object(n.e)(e => r ? Object(p.d)(e, {
						subredditId: r.id
					}) : null),
					b = Object(n.e)(l.m),
					h = !!s && !!a;
				return t && r ? i.a.createElement("div", {
					className: E.a.container
				}, i.a.createElement(w, {
					subredditId: r.id,
					userId: t.id,
					username: Object(c.e)(t),
					flairData: a,
					onModalClose: () => {
						e(Object(o.g)(d.a.ACHIEVEMENT_FLAIR))
					}
				}), h && i.a.createElement(re, {
					subredditId: r.id,
					flairData: a
				}), b ? i.a.createElement(Y, {
					subredditId: r.id,
					userId: t.id
				}) : i.a.createElement(R, {
					subredditId: r.id,
					userId: t.id
				})) : null
			})
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.m.less": function(e, t, r) {
			e.exports = {
				container: "_3NdKulBcLHFmpKDAy9Barm",
				hoverPopup: "_3TMcWG2R9E0iMw_Qcg9tfi",
				icon: "_2Xc055D-KCIUe6f2E3Ghgr",
				hiddenAchievementsCount: "_1zxdGxj6UKKqJMibObCbeA"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/actions/gold/powerups.ts"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				l = r("./src/reddit/hooks/useScrollGradient.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				p = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less"),
				v = r.n(h);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js"), I = ({
				className: e,
				subredditId: t,
				userId: r
			}) => {
				const h = Object(n.e)(e => Object(p.b)(e, {
						subredditId: t,
						userId: r
					})),
					I = Object(n.e)(e => Object(b.Q)(e, {
						subredditId: t
					})),
					w = Object(n.d)(),
					j = Object(u.a)(),
					{
						container: E,
						isScrollGradientVisible: O,
						calculateGradientVisibility: g
					} = Object(l.a)(!1);
				Object(s.useEffect)(() => {
					g()
				}, [g]);
				return i.a.createElement("div", {
					className: Object(a.a)(v.a.container, e)
				}, i.a.createElement("div", {
					className: v.a.header
				}, i.a.createElement(m.a, {
					className: v.a.powerupsLogo
				}), f._("{r/community} {=achievements}", [f._param("r/community", I.displayText), f._param("=achievements", i.a.createElement("span", {
					className: v.a.headerText
				}, f._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), i.a.createElement("div", {
					className: v.a.headerDelimiter
				}), i.a.createElement("div", {
					className: v.a.achievements,
					onScroll: g,
					ref: E
				}, h.map(e => !e.isLocked && i.a.createElement("div", {
					className: v.a.achievementItem,
					key: e.type
				}, i.a.createElement("div", {
					className: v.a.achievementImgWrapper
				}, i.a.createElement("img", {
					className: v.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), i.a.createElement("div", {
					className: v.a.achievementName
				}, i.a.createElement("span", null, e.name))))), i.a.createElement("div", {
					className: v.a.footer
				}, i.a.createElement("div", {
					className: Object(a.a)(v.a.scrollGradient, {
						[v.a.gradientVisible]: O
					})
				}), i.a.createElement(d.s, {
					priority: d.b.Secondary,
					className: v.a.ctaButton,
					onClick: () => {
						j(Object(c.a)()), w(Object(o.e)())
					},
					isFullWidth: !0
				}, f._("View your achievements", null, {
					hk: "2ZyIE3"
				}))))
			};
			var w = r("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.m.less"),
				j = r.n(w);
			const E = ({
					className: e,
					subredditId: t,
					userId: r,
					showPopupOnHover: o,
					onHover: d
				}) => {
					const c = Object(n.e)(e => Object(p.e)(e, {
							subredditId: t,
							userId: r
						})),
						l = Object(n.e)(e => Object(p.g)(e, {
							subredditId: t,
							userId: r
						})),
						u = Object(n.e)(e => Object(p.d)(e, {
							subredditId: t,
							userId: r
						})),
						m = u ? [...u.supporterTypes, ...u.achievementTypes] : null,
						[b, h] = Object(s.useState)(!1);
					if (!(!!c || !!l) || !m) return null;
					const v = (null == l ? void 0 : l.type) === (null == c ? void 0 : c.type) ? null : l,
						f = (v ? 1 : 0) + (c ? 1 : 0),
						w = (null == m ? void 0 : m.length) - f;
					return i.a.createElement("span", {
						className: Object(a.a)(j.a.container, e),
						"data-testid": "achievement-flairs",
						onMouseEnter: () => {
							o && (h(!0), null == d || d())
						},
						onMouseLeave: () => {
							h(!1)
						}
					}, i.a.createElement(O, {
						achievement: v
					}), i.a.createElement(O, {
						achievement: c
					}), !!w && i.a.createElement("span", {
						className: j.a.hiddenAchievementsCount
					}, "+", w), o && b && i.a.createElement(I, {
						className: j.a.hoverPopup,
						subredditId: t,
						userId: r
					}))
				},
				O = ({
					achievement: e
				}) => e ? i.a.createElement("img", {
					alt: e.name,
					className: j.a.icon,
					src: e.icon.url
				}) : null
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
				d = r("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"),
				c = r("./src/reddit/components/Flair/index.tsx"),
				l = r("./src/reddit/components/UserIcon/index.tsx"),
				u = r("./src/reddit/components/UserIcon/constants.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				p = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.m.less"),
				b = r.n(p);
			const h = ({
				className: e,
				subredditId: t,
				userId: r,
				flairData: i,
				username: p,
				userHasBadge: h
			}) => {
				const v = Object(a.e)(e => Object(m.k)(e));
				return v ? n.a.createElement("div", {
					className: Object(s.a)(b.a.flairPreview, e),
					"data-testid": "user-flair-preview"
				}, n.a.createElement(l.a, {
					className: b.a.userIcon,
					iconUrl: v.accountIcon,
					isNSFW: v.isNSFW,
					nsfwIconUrl: u.a,
					userName: p || ""
				}), n.a.createElement("div", {
					className: b.a.allFlair
				}, n.a.createElement("div", {
					className: b.a.flairPreviewFirstLine
				}, h && n.a.createElement(o.a, {
					className: b.a.badge,
					subredditId: t,
					uniqueIdentifier: t,
					badgeSize: 20
				}), n.a.createElement("span", {
					className: b.a.username
				}, `${p||"username"}`), n.a.createElement(d.a, {
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
				a = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/selectors/experiments/econ/index.ts"),
				d = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				onClick: t
			}) => {
				const r = Object(n.e)(d.u),
					s = Object(n.e)(o.h);
				return i.a.createElement(a.s, {
					priority: a.b.Primary,
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
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/reddit/helpers/flair.ts"),
				i = r("./src/reddit/selectors/comments.ts"),
				n = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, r) => o => {
					const d = Object(i.e)(o, {
							commentId: e
						}),
						c = Object(n.e)(o, {
							subredditId: t,
							userId: r
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...a.defaults(o),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == d ? void 0 : d.templateId,
							title: d ? Object(s.g)(d) : void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name
						}
					}
				},
				d = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...a.defaults(e)
				})
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
				a = e => !n(e),
				o = {};
			var d = r("./node_modules/icepick/icepick.js"),
				c = r("./src/reddit/actions/economics/powerups/constants.ts");
			const l = {},
				u = e => {
					var t, r;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (r = e[0]) || void 0 === r ? void 0 : r.type)
				},
				m = {};
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
								d = s.filter(a).map(e => e.type),
								c = s.filter(n).map(e => e.type);
							return {
								...e, [r]: {
									flairsByType: o,
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
									userAchievementFlairs: t
								} of s) {
								const r = t.filter(a),
									s = r.map(({
										type: e
									}) => e),
									o = t.filter(n),
									d = o.map(({
										type: e
									}) => e),
									c = u(r),
									l = u(o);
								i = {
									...i,
									[e]: {
										achievementTypes: s,
										supporterTypes: d,
										preferredAchievementType: c,
										preferredSupporterType: l
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
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = m, t) => {
					switch (t.type) {
						case c.h: {
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
			r.d(t, "d", (function() {
				return c
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "a", (function() {
				return f
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/selectors/commentSelector.ts"),
				n = r("./src/reddit/selectors/experiments/econ/index.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(a.a)({
				features: {
					powerups: o.a
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
				m = Object(s.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(s.a)([d, m], (e, t) => e && t ? e[t] : null),
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
						achievementTypes: a,
						preferredSupporterType: o,
						preferredAchievementType: d,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: v(r, n, i, c || o),
						achievementFlairs: v(s, a, i, l || d)
					}
				}),
				v = (e, t, r, s) => e.map(e => ({
					...r[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				f = (e, {
					commentId: t
				}) => {
					const r = Object(i.b)(e, {
							commentId: t
						}),
						s = null == r ? void 0 : r.subredditId,
						a = null == r ? void 0 : r.authorId;
					return !(!s || !a) && !(!((e, {
						subredditId: t,
						userId: r
					}) => {
						var s, i, n;
						return t && r ? null === (n = null === (i = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === i ? void 0 : i[r]) || void 0 === n ? void 0 : n[t] : null
					})(e, {
						subredditId: s,
						userId: a
					}) || !Object(n.i)(e))
				}
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"df1c1b9b6408"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"8c45e89afc9b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.47575eeaa23899b37cee.js.map