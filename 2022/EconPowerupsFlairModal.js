// https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.682f5c73831354fee75a.js
// Retrieved at 2/16/2022, 7:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsFlairModal"], {
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return y
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return j
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return I
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return E
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return P
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return O
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return x
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return _
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return k
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return g
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return S
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return N
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return C
			})), r.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return U
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const c = async (e, t, r, s) => {
				const i = await Object(a.a)(e, {
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
				v = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/actions/economics/powerups/constants.ts"),
				w = r("./src/lib/initializeClient/installReducer.ts"),
				F = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(w.a)({
				features: {
					powerups: F.a
				}
			});
			const y = Object(i.a)(h.d),
				j = Object(i.a)(h.i),
				I = Object(i.a)(h.f),
				E = Object(i.a)(h.g),
				P = Object(i.a)(h.e),
				O = Object(i.a)(h.h),
				x = (e, t) => async (r, s, {
					gqlContext: i
				}) => {
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
							})(i(), e, d),
							{
								subredditInfoById: s,
								redditorsInfoByIds: n
							} = t;
						await r(y(s)), n && await r(j(n))
					} catch (c) {
						n.c.captureException(c)
					}
				}, _ = (e, t) => async (r, s) => {
					if (!e) return;
					const i = s(),
						n = Object(v.k)(i);
					if (!n || !Object(b.h)(i, {
							subredditId: e
						})) return;
					const a = !!Object(f.f)(i, {
						subredditId: e,
						userId: n.id
					});
					!t && a || await r(x(e, [n.id]))
				}, k = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(l.m)(e, {
						fullData: !0
					}));
					const s = r();
					return Object(b.h)(s, {
						subredditId: e
					})
				}, g = e => async (t, r) => {
					var s;
					const i = r(),
						n = e.map(({
							id: e
						}) => e),
						a = Object(m.c)(i, {
							commentIds: n
						}),
						o = null === (s = a.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await t(k(o)))) return;
					const d = new Set(a.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await t(x(o, Array.from(d)))
				}, S = (e, t) => async (r, s) => {
					if (!t) return;
					if (!(await r(k(e)))) return;
					const i = new Set;
					Object.values(t).forEach(e => {
						i.add(e.authorId)
					}), await r(x(e, Array.from(i)))
				}, N = (e, t) => async (r, s) => {
					const i = s(),
						n = Object(v.k)(i);
					if (!n) return;
					const a = n.id,
						o = Object(f.i)(i, {
							subredditId: e,
							userId: a
						});
					r(T({
						subredditId: e,
						userId: a,
						achievementFlairType: t,
						supporterFlairType: o
					}))
				}, C = (e, t) => async (r, s) => {
					const i = s(),
						n = Object(v.k)(i);
					if (!n) return;
					const a = n.id,
						o = Object(f.h)(i, {
							subredditId: e,
							userId: a
						});
					r(T({
						subredditId: e,
						userId: a,
						achievementFlairType: o,
						supporterFlairType: t
					}))
				}, T = e => async (t, r, {
					gqlContext: i
				}) => {
					const a = r(),
						o = Object(v.k)(a);
					if (!o) return;
					const d = o.id;
					t(I(e));
					const {
						subredditId: l,
						achievementFlairType: m,
						supporterFlairType: b
					} = e, h = [m, b].filter(Boolean), w = Object(f.e)(a, {
						subredditId: l,
						userId: d
					});
					try {
						await c(i(), l, h, w), t(E(e))
					} catch (F) {
						t(P(e)), n.c.captureException(F), t(Object(u.f)({
							duration: u.a,
							kind: p.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, U = (e, t) => async (r, i, {
					gqlContext: a
				}) => {
					const o = i(),
						d = Object(v.k)(o);
					if (!d) return;
					const l = d.id,
						m = {
							subredditId: e,
							userId: l
						},
						b = [Object(f.h)(o, m), Object(f.i)(o, m)].filter(Boolean);
					r(O({
						...m,
						isHidden: t
					}));
					try {
						await c(a(), e, b, t)
					} catch (h) {
						r(O({
							...m,
							isHidden: !t
						})), n.c.captureException(h), r(Object(u.f)({
							duration: u.a,
							kind: p.b.Error,
							text: s.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
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
				d = r.n(o);
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
			}, n.a.createElement(a.b, {
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
				a = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/actions/gold/powerups.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				u = r("./src/reddit/components/ScrollGradient/index.tsx"),
				p = r("./src/reddit/constants/modals.ts"),
				m = r("./src/reddit/helpers/trackers/powerups.ts"),
				b = r("./src/reddit/hooks/useScrollGradient.ts"),
				f = r("./src/reddit/hooks/useTracking.ts"),
				v = r("./src/reddit/models/User/index.ts"),
				h = r("./src/reddit/selectors/experiments/econ/index.ts"),
				w = r("./src/reddit/selectors/platform.ts"),
				F = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/selectors/userFlair.ts"),
				j = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				I = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				E = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/Header.m.less"),
				P = r.n(E);
			const O = ({
				className: e,
				subredditId: t,
				userId: r,
				flairData: s,
				onModalClose: n,
				username: o
			}) => a.a.createElement("div", {
				className: Object(i.a)(P.a.container, e),
				"data-testid": "achievement-flair-modal-header"
			}, a.a.createElement(I.a, {
				className: P.a.userFlairPreview,
				subredditId: t,
				userId: r,
				username: o,
				flairData: s
			}), a.a.createElement(j.a, {
				onClick: n
			}));
			var x = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.m.less"),
				_ = r.n(x),
				k = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				g = r("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				S = r("./src/reddit/controls/Button/index.tsx"),
				N = r("./src/reddit/hooks/usePreloadModal.ts"),
				C = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				T = r("./src/reddit/selectors/gold/powerups/index.ts"),
				U = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				L = r("./src/reddit/actions/tooltip.ts"),
				A = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				M = r("./src/reddit/helpers/trackers/userFlair.ts"),
				B = r("./src/reddit/icons/fonts/index.tsx"),
				D = r("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts"),
				G = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlair.m.less"),
				H = r.n(G);
			const {
				fbt: Q
			} = r("./node_modules/fbt/lib/FbtPublic.js"), R = ({
				flair: e,
				onSelect: t
			}) => {
				const r = Object(o.d)(),
					s = Object(f.a)(),
					n = `achievement-locked-${e.type}`,
					d = e.isLocked ? Q._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}) : "",
					c = e.description || d,
					l = () => {
						if (c) return r(Object(L.h)({
							tooltipId: n
						}))
					},
					u = !e.isLocked && !e.isPreferred;
				return a.a.createElement("div", {
					onMouseEnter: l,
					onMouseLeave: l,
					onClick: () => {
						if (u && t(e.type), !e.isPreferred) {
							const t = Object(D.b)(e) ? {
								supporterFlair: e
							} : {
								achievementFlair: e
							};
							s(Object(M.b)(t))
						}
					},
					className: Object(i.a)(H.a.achievementItem, {
						[H.a.achievementItemLocked]: e.isLocked,
						[H.a.achievementItemActive]: e.isPreferred,
						[H.a.achievementItemSelectable]: u
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, a.a.createElement("div", {
					className: H.a.achievementImgWrapper
				}, a.a.createElement("img", {
					id: n,
					className: H.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), a.a.createElement("div", {
					className: H.a.achievementImgLocked
				}, a.a.createElement(B.a, {
					name: "lock",
					isFilled: !0,
					className: H.a.achievementLock
				}))), a.a.createElement("div", {
					className: H.a.achievementName
				}, a.a.createElement("span", null, e.name)), !!c && a.a.createElement(A.c, {
					tooltipId: n,
					text: c,
					className: H.a.achievementTooltip
				}))
			};
			var z = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/OldAchievementFlairs.m.less"),
				K = r.n(z);
			const {
				fbt: V
			} = r("./node_modules/fbt/lib/FbtPublic.js"), q = ({
				className: e,
				subredditId: t,
				userId: r
			}) => {
				const s = Object(f.a)(),
					n = Object(o.e)(e => Object(U.b)(e, {
						subredditId: t,
						userId: r
					})),
					c = Object(o.e)(e => Object(T.o)(e, {
						subredditId: t
					})),
					u = Object(o.e)(e => Object(U.j)(e, {
						subredditId: t,
						userId: r
					})),
					p = Object(o.d)(),
					b = e => {
						p(Object(k.setSubredditUserAchievementFlair)(t, e))
					},
					v = () => {
						p(Object(d.g)("user_flair_picker"))
					};
				return Object(N.a)(g.a), a.a.createElement("div", {
					className: Object(i.a)(K.a.container, e)
				}, a.a.createElement("h4", {
					className: K.a.achievementsHeading
				}, a.a.createElement(C.a, {
					className: K.a.headingPowerupsBolt
				}), V._("Achievements", null, {
					hk: "1DnL4g"
				})), a.a.createElement("p", {
					className: K.a.achievementsDescription
				}, (() => c && !u ? V._("Unlock the Powerup Supporter achievement when you Powerup this community", null, {
					hk: "2ZIvgm"
				}) : c ? V._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				}) : V._("Powerup to unlock community achievements", null, {
					hk: "1oPooH"
				}))()), a.a.createElement("div", {
					className: K.a.achievementsList
				}, n.map(e => a.a.createElement(R, {
					flair: e,
					key: e.type,
					onSelect: b
				}))), (() => c && !u ? a.a.createElement(l.a, {
					onClick: () => {
						s(Object(m.H)()), v()
					}
				}) : c ? null : a.a.createElement(S.t, {
					priority: S.c.Primary,
					className: K.a.powerupButton,
					isFullWidth: !0,
					onClick: () => {
						s(Object(m.D)()), v()
					}
				}, V._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))())
			};
			var W = r("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Y = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/FlairsSection.m.less"),
				J = r.n(Y);
			const Z = ({
				className: e,
				title: t,
				subtitle: r,
				flairs: s,
				onClickFlair: i
			}) => a.a.createElement("div", {
				className: e
			}, a.a.createElement("h4", {
				className: J.a.title
			}, a.a.createElement(C.a, {
				className: J.a.headingPowerupsBolt
			}), t), a.a.createElement("p", {
				className: J.a.subtitle
			}, r), a.a.createElement("div", {
				className: J.a.flairsList
			}, s.map(e => a.a.createElement(R, {
				flair: e,
				key: e.type,
				onSelect: i
			}))));
			var X = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlairsBody.m.less"),
				$ = r.n(X);
			const {
				fbt: ee
			} = r("./node_modules/fbt/lib/FbtPublic.js"), te = ({
				subredditId: e,
				userId: t,
				className: r
			}) => {
				const s = Object(f.a)(),
					i = Object(o.d)(),
					n = Object(o.e)(r => Object(U.c)(r, {
						subredditId: e,
						userId: t
					})),
					d = Object(o.e)(r => Object(U.e)(r, {
						subredditId: e,
						userId: t
					})),
					c = Object(o.e)(t => Object(T.o)(t, {
						subredditId: e
					}));
				if (Object(N.a)(g.a), !n) return null;
				return a.a.createElement("div", {
					className: r
				}, a.a.createElement(Z, {
					className: $.a.flairsSection,
					title: ee._("Supporter Flair", null, {
						hk: "1U21cd"
					}),
					subtitle: ee._("Power up your community to get more flair!", null, {
						hk: "12WxtM"
					}),
					flairs: n.supporterFlairs,
					onClickFlair: t => {
						i(Object(k.setSubredditUserSupporterFlair)(e, t))
					}
				}), a.a.createElement(Z, {
					className: $.a.flairsSection,
					title: ee._("Achievement Flair", null, {
						hk: "10y9WL"
					}),
					subtitle: ee._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
						hk: "3egU1f"
					}),
					flairs: n.achievementFlairs,
					onClickFlair: t => {
						i(Object(k.setSubredditUserAchievementFlair)(e, t))
					}
				}), a.a.createElement("div", {
					className: $.a.flairsVisibility
				}, a.a.createElement("label", {
					className: $.a.flairsVisibilityLabel
				}, ee._("Show Supporter and Achievement Flair", null, {
					hk: "3755UL"
				})), a.a.createElement(W.a, {
					className: $.a.flairsVisibilitySwitch,
					disabled: !c,
					on: c && !d,
					onToggle: () => {
						const t = !d;
						i(Object(k.setSubredditUserPowerupsFlairsVisibility)(e, t)), s(Object(M.d)(t))
					}
				})))
			};
			var re = r("./src/reddit/actions/authorFlair.ts"),
				se = r("./src/reddit/components/Flair/index.tsx"),
				ie = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/UserFlair.m.less"),
				ne = r.n(ie);
			const {
				fbt: ae
			} = r("./node_modules/fbt/lib/FbtPublic.js"), oe = ({
				className: e,
				subredditId: t,
				flairData: r
			}) => {
				const s = Object(o.d)(),
					n = Object(f.a)(),
					d = Object(o.e)(F.k);
				return d ? a.a.createElement("div", {
					className: Object(i.a)(ne.a.container, e)
				}, a.a.createElement("div", {
					className: ne.a.header
				}, a.a.createElement("h4", {
					className: ne.a.flairText
				}, ae._("User Flair", null, {
					hk: "3DaU0r"
				})), a.a.createElement(S.t, {
					className: ne.a.editButton,
					priority: S.c.Plain,
					onClick: () => {
						const e = d ? Object(v.e)(d) : null;
						n(Object(M.a)()), s(Object(re.b)({
							username: e,
							subredditId: t,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, a.a.createElement(B.a, {
					name: "edit"
				}))), (null == r ? void 0 : r.applied) && r.displaySettings.isUserEnabled && a.a.createElement(se.b, {
					className: ne.a.flair,
					flair: r.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(s.a)(() => {
				const e = Object(o.d)(),
					t = Object(f.a)(),
					{
						container: r,
						isScrollGradientVisible: s,
						calculateGradientVisibility: n
					} = Object(b.b)(!0),
					j = Object(o.e)(F.k),
					I = Object(o.e)(w.e),
					E = Object(o.e)(e => I ? Object(y.b)(e, {
						subredditId: I.id
					}) : null),
					P = Object(o.e)(e => I ? Object(y.d)(e, {
						subredditId: I.id
					}) : null),
					x = Object(o.e)(h.k),
					k = !!E && !!P;
				return j && I ? a.a.createElement("div", {
					className: _.a.container
				}, a.a.createElement("div", {
					className: _.a.stickyContent
				}, a.a.createElement(O, {
					subredditId: I.id,
					userId: j.id,
					username: Object(v.e)(j),
					flairData: P,
					onModalClose: () => {
						e(Object(c.g)(p.a.ACHIEVEMENT_FLAIR))
					}
				})), a.a.createElement("div", {
					className: _.a.scrollContainer,
					ref: r,
					onScroll: n
				}, k && a.a.createElement(oe, {
					subredditId: I.id,
					flairData: P
				}), x ? a.a.createElement(te, {
					subredditId: I.id,
					userId: j.id
				}) : a.a.createElement(q, {
					subredditId: I.id,
					userId: j.id
				})), a.a.createElement("div", {
					className: Object(i.a)(_.a.stickyContent, _.a.scrollGradientContainer)
				}, a.a.createElement(u.a, {
					isVisible: s
				})), x && a.a.createElement("div", {
					className: _.a.stickyContent
				}, a.a.createElement("div", {
					className: _.a.divider
				}), a.a.createElement(l.a, {
					className: _.a.ctaButton,
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
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
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
				usernameClassName: v
			}) => {
				const h = Object(a.e)(e => Object(p.k)(e));
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
				}, f && n.a.createElement(o.a, {
					className: b.a.badge,
					subredditId: t,
					uniqueIdentifier: t,
					badgeSize: 20
				}), n.a.createElement("span", {
					className: Object(s.a)(b.a.username, v)
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
				a = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), c = ({
				className: e,
				onClick: t,
				disabled: r
			}) => {
				const s = Object(n.e)(o.w);
				return i.a.createElement(a.t, {
					priority: a.c.Primary,
					className: e,
					onClick: t,
					isFullWidth: !0,
					disabled: r
				}, (() => s ? d._("Use Your Premium Powerup", null, {
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
				a = r("./src/reddit/components/ScrollGradient/index.m.less"),
				o = r.n(a);
			const d = ({
				className: e,
				isVisible: t
			}) => n.a.createElement("div", {
				className: Object(s.a)(o.a.gradient, e, {
					[o.a.visible]: t
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
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			var s, i = r("./node_modules/react/index.js");

			function n(e, t = s.Bottom) {
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
							d = Math.ceil(o + r) >= i,
							c = Math.ceil(r - o) >= i,
							l = t === s.Bottom ? d : c;
						n(!l)
					}
				}
			}! function(e) {
				e.Top = "top", e.Bottom = "bottom"
			}(s || (s = {}))
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
			const a = {};
			var o = r("./node_modules/icepick/icepick.js"),
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
								o = s.filter(n.a).map(e => e.type),
								d = s.filter(n.b).map(e => e.type);
							return {
								...e, [r]: {
									flairsByType: a,
									achievementTypes: o,
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
									userAchievementFlairs: a
								} of s) {
								const r = a.filter(n.a),
									s = r.map(({
										type: e
									}) => e),
									o = a.filter(n.b),
									d = o.map(({
										type: e
									}) => e),
									c = l(r),
									u = l(o);
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
							return Object(o.updateIn)(e, [r, s], e => ({
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
							return Object(o.updateIn)(e, [r, s], e => ({
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
							return Object(o.updateIn)(e, [r, s], e => ({
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
							return Object(o.updateIn)(e, [r, s], e => ({
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
				return v
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "a", (function() {
				return F
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/selectors/commentSelector.ts"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(n.a)({
				features: {
					powerups: a.a
				}
			});
			const o = (e, {
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
				f = Object(s.a)([o, c], (e, t) => {
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
						supporterFlairs: w(r, n, i, c || o),
						achievementFlairs: w(s, a, i, l || d)
					}
				}),
				v = Object(s.a)([c], e => !!e && e.isHidden),
				h = Object(s.a)([o, c, m], (e, t, r) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return r ? [r, ...s] : s
				}),
				w = (e, t, r, s) => e.map(e => ({
					...r[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				F = (e, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.682f5c73831354fee75a.js.map