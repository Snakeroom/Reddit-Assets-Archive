// https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.94850134740bb37499c8.js
// Retrieved at 3/7/2022, 3:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsFlairModal"], {
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return E
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return j
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return P
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return x
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return O
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return I
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return _
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return k
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return N
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return g
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return y
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return S
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return C
			})), r.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return L
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				n = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				o = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const d = async (e, t, r, s) => {
				const a = await Object(n.a)(e, {
					...o,
					variables: {
						subredditId: t,
						flairTypes: r,
						isHidden: s
					}
				});
				if (!a.ok || !a.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var l = r("./src/reddit/actions/gold/powerups.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/actions/economics/powerups/constants.ts"),
				w = r("./src/lib/initializeClient/installReducer.ts"),
				F = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(w.a)({
				features: {
					powerups: F.a
				}
			});
			const E = Object(a.a)(v.d),
				j = Object(a.a)(v.i),
				P = Object(a.a)(v.f),
				x = Object(a.a)(v.g),
				O = Object(a.a)(v.e),
				I = Object(a.a)(v.h),
				_ = (e, t) => async (r, s, {
					gqlContext: a
				}) => {
					const o = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (o.length) try {
						const t = await (async (e, t, r) => {
								const s = await Object(n.a)(e, {
									...c,
									variables: {
										subredditId: t,
										redditorIds: r,
										includeSupporterInfo: !0
									}
								});
								if (!s.ok) throw new Error("Unable to fetch user achievements");
								return s.body.data
							})(a(), e, o),
							{
								subredditInfoById: s,
								redditorsInfoByIds: i
							} = t;
						await r(E(s)), i && await r(j(i))
					} catch (d) {
						i.c.captureException(d)
					}
				}, k = (e, t) => async (r, s) => {
					if (!e) return;
					const a = s(),
						i = Object(h.k)(a);
					if (!i || !Object(b.h)(a, {
							subredditId: e
						})) return;
					const n = !!Object(f.f)(a, {
						subredditId: e,
						userId: i.id
					});
					!t && n || await r(_(e, [i.id]))
				}, N = e => async (t, r) => {
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
					const a = r(),
						i = e.map(({
							id: e
						}) => e),
						n = Object(p.c)(a, {
							commentIds: i
						}),
						c = null === (s = n.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await t(N(c)))) return;
					const o = new Set(n.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await t(_(c, Array.from(o)))
				}, y = (e, t) => async (r, s) => {
					if (!t) return;
					if (!(await r(N(e)))) return;
					const a = new Set;
					Object.values(t).forEach(e => {
						a.add(e.authorId)
					}), await r(_(e, Array.from(a)))
				}, S = (e, t) => async (r, s) => {
					const a = s(),
						i = Object(h.k)(a);
					if (!i) return;
					const n = i.id,
						c = Object(f.i)(a, {
							subredditId: e,
							userId: n
						});
					r(U({
						subredditId: e,
						userId: n,
						achievementFlairType: t,
						supporterFlairType: c
					}))
				}, C = (e, t) => async (r, s) => {
					const a = s(),
						i = Object(h.k)(a);
					if (!i) return;
					const n = i.id,
						c = Object(f.h)(a, {
							subredditId: e,
							userId: n
						});
					r(U({
						subredditId: e,
						userId: n,
						achievementFlairType: c,
						supporterFlairType: t
					}))
				}, U = e => async (t, r, {
					gqlContext: a
				}) => {
					const n = r(),
						c = Object(h.k)(n);
					if (!c) return;
					const o = c.id;
					t(P(e));
					const {
						subredditId: l,
						achievementFlairType: p,
						supporterFlairType: b
					} = e, v = [p, b].filter(Boolean), w = Object(f.e)(n, {
						subredditId: l,
						userId: o
					});
					try {
						await d(a(), l, v, w), t(x(e))
					} catch (F) {
						t(O(e)), i.c.captureException(F), t(Object(u.f)({
							duration: u.a,
							kind: m.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, L = (e, t) => async (r, a, {
					gqlContext: n
				}) => {
					const c = a(),
						o = Object(h.k)(c);
					if (!o) return;
					const l = o.id,
						p = {
							subredditId: e,
							userId: l
						},
						b = [Object(f.h)(c, p), Object(f.i)(c, p)].filter(Boolean);
					r(I({
						...p,
						isHidden: t
					}));
					try {
						await d(n(), e, b, t)
					} catch (v) {
						r(I({
							...p,
							isHidden: !t
						})), i.c.captureException(v), r(Object(u.f)({
							duration: u.a,
							kind: m.b.Error,
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
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				n = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				o = r.n(c);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				highContrast: t,
				onClick: r
			}) => i.a.createElement("button", {
				onClick: r,
				className: Object(s.a)(o.a.closeButton, {
					[o.a.highContrast]: t
				}, e),
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, i.a.createElement(n.b, {
				className: o.a.closeIcon
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
				a = r("./src/lib/classNames/index.ts"),
				i = r("./node_modules/react/index.js"),
				n = r.n(i),
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/gold/powerups.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				u = r("./src/reddit/components/ScrollGradient/index.tsx"),
				m = r("./src/reddit/constants/modals.ts"),
				p = r("./src/reddit/helpers/trackers/powerups.ts"),
				b = r("./src/reddit/hooks/useScrollGradient.ts"),
				f = r("./src/reddit/hooks/useTracking.ts"),
				h = r("./src/reddit/models/User/index.ts"),
				v = r("./src/reddit/selectors/experiments/econ/index.ts"),
				w = r("./src/reddit/selectors/platform.ts"),
				F = r("./src/reddit/selectors/user.ts"),
				E = r("./src/reddit/selectors/userFlair.ts"),
				j = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				P = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.tsx"),
				x = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/Header.m.less"),
				O = r.n(x);
			const I = ({
				className: e,
				subredditId: t,
				userId: r,
				flairData: s,
				onModalClose: i,
				username: c
			}) => n.a.createElement("div", {
				className: Object(a.a)(O.a.container, e),
				"data-testid": "achievement-flair-modal-header"
			}, n.a.createElement(P.a, {
				className: O.a.userFlairPreview,
				subredditId: t,
				userId: r,
				username: c,
				flairData: s
			}), n.a.createElement(j.a, {
				onClick: i
			}));
			var _ = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.m.less"),
				k = r.n(_),
				N = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				g = r("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				y = r("./src/reddit/controls/Button/index.tsx"),
				S = r("./src/reddit/hooks/usePreloadModal.ts"),
				C = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				U = r("./src/reddit/selectors/gold/powerups/index.ts"),
				L = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				M = r("./src/reddit/actions/tooltip.ts"),
				B = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				T = r("./src/reddit/helpers/trackers/userFlair.ts"),
				A = r("./src/reddit/icons/fonts/index.tsx"),
				D = r("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts"),
				G = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/PowerupsFlair.m.less"),
				Q = r.n(G);
			const {
				fbt: H
			} = r("./node_modules/fbt/lib/FbtPublic.js"), K = ({
				flair: e,
				onSelect: t
			}) => {
				const r = Object(c.d)(),
					s = Object(f.a)(),
					i = `achievement-locked-${e.type}`,
					o = e.isLocked ? H._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}) : "",
					d = e.description || o,
					l = () => {
						if (d) return r(Object(M.h)({
							tooltipId: i
						}))
					},
					u = !e.isLocked && !e.isPreferred;
				return n.a.createElement("div", {
					onMouseEnter: l,
					onMouseLeave: l,
					onClick: () => {
						if (u && t(e.type), !e.isPreferred) {
							const t = Object(D.b)(e) ? {
								supporterFlair: e
							} : {
								achievementFlair: e
							};
							s(Object(T.b)(t))
						}
					},
					className: Object(a.a)(Q.a.achievementItem, {
						[Q.a.achievementItemLocked]: e.isLocked,
						[Q.a.achievementItemActive]: e.isPreferred,
						[Q.a.achievementItemSelectable]: u
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, n.a.createElement("div", {
					className: Q.a.achievementImgWrapper
				}, n.a.createElement("img", {
					id: i,
					className: Q.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), n.a.createElement("div", {
					className: Q.a.achievementImgLocked
				}, n.a.createElement(A.a, {
					name: "lock",
					isFilled: !0,
					className: Q.a.achievementLock
				}))), n.a.createElement("div", {
					className: Q.a.achievementName
				}, n.a.createElement("span", null, e.name)), !!d && n.a.createElement(B.c, {
					tooltipId: i,
					text: d,
					className: Q.a.achievementTooltip
				}))
			};
			var z = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/OldAchievementFlairs.m.less"),
				V = r.n(z);
			const {
				fbt: R
			} = r("./node_modules/fbt/lib/FbtPublic.js"), W = ({
				className: e,
				subredditId: t,
				userId: r
			}) => {
				const s = Object(f.a)(),
					i = Object(c.e)(e => Object(L.b)(e, {
						subredditId: t,
						userId: r
					})),
					d = Object(c.e)(e => Object(U.o)(e, {
						subredditId: t
					})),
					u = Object(c.e)(e => Object(L.j)(e, {
						subredditId: t,
						userId: r
					})),
					m = Object(c.d)(),
					b = e => {
						m(Object(N.setSubredditUserAchievementFlair)(t, e))
					},
					h = () => {
						m(Object(o.g)("user_flair_picker"))
					};
				return Object(S.a)(g.a), n.a.createElement("div", {
					className: Object(a.a)(V.a.container, e)
				}, n.a.createElement("h4", {
					className: V.a.achievementsHeading
				}, n.a.createElement(C.a, {
					className: V.a.headingPowerupsBolt
				}), R._("Achievements", null, {
					hk: "1DnL4g"
				})), n.a.createElement("p", {
					className: V.a.achievementsDescription
				}, (() => d && !u ? R._("Unlock the Powerup Supporter achievement when you Powerup this community", null, {
					hk: "2ZIvgm"
				}) : d ? R._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				}) : R._("Powerup to unlock community achievements", null, {
					hk: "1oPooH"
				}))()), n.a.createElement("div", {
					className: V.a.achievementsList
				}, i.map(e => n.a.createElement(K, {
					flair: e,
					key: e.type,
					onSelect: b
				}))), (() => d && !u ? n.a.createElement(l.a, {
					onClick: () => {
						s(Object(p.H)()), h()
					}
				}) : d ? null : n.a.createElement(y.t, {
					priority: y.c.Primary,
					className: V.a.powerupButton,
					isFullWidth: !0,
					onClick: () => {
						s(Object(p.D)()), h()
					}
				}, R._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))())
			};
			var q = r("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Y = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/FlairsSection.m.less"),
				J = r.n(Y);
			const Z = ({
				className: e,
				title: t,
				subtitle: r,
				flairs: s,
				onClickFlair: a
			}) => n.a.createElement("div", {
				className: e
			}, n.a.createElement("h4", {
				className: J.a.title
			}, n.a.createElement(C.a, {
				className: J.a.headingPowerupsBolt
			}), t), n.a.createElement("p", {
				className: J.a.subtitle
			}, r), n.a.createElement("div", {
				className: J.a.flairsList
			}, s.map(e => n.a.createElement(K, {
				flair: e,
				key: e.type,
				onSelect: a
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
					a = Object(c.d)(),
					i = Object(c.e)(r => Object(L.c)(r, {
						subredditId: e,
						userId: t
					})),
					o = Object(c.e)(r => Object(L.e)(r, {
						subredditId: e,
						userId: t
					})),
					d = Object(c.e)(t => Object(U.o)(t, {
						subredditId: e
					}));
				if (Object(S.a)(g.a), !i) return null;
				return n.a.createElement("div", {
					className: r
				}, n.a.createElement(Z, {
					className: $.a.flairsSection,
					title: ee._("Supporter Flair", null, {
						hk: "1U21cd"
					}),
					subtitle: ee._("Power up your community to get more flair!", null, {
						hk: "12WxtM"
					}),
					flairs: i.supporterFlairs,
					onClickFlair: t => {
						a(Object(N.setSubredditUserSupporterFlair)(e, t))
					}
				}), n.a.createElement(Z, {
					className: $.a.flairsSection,
					title: ee._("Achievement Flair", null, {
						hk: "10y9WL"
					}),
					subtitle: ee._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
						hk: "3egU1f"
					}),
					flairs: i.achievementFlairs,
					onClickFlair: t => {
						a(Object(N.setSubredditUserAchievementFlair)(e, t))
					}
				}), n.a.createElement("div", {
					className: $.a.flairsVisibility
				}, n.a.createElement("label", {
					className: $.a.flairsVisibilityLabel
				}, ee._("Show Supporter and Achievement Flair", null, {
					hk: "3755UL"
				})), n.a.createElement(q.a, {
					className: $.a.flairsVisibilitySwitch,
					disabled: !d,
					on: d && !o,
					onToggle: () => {
						const t = !o;
						a(Object(N.setSubredditUserPowerupsFlairsVisibility)(e, t)), s(Object(T.d)(t))
					}
				})))
			};
			var re = r("./src/reddit/actions/authorFlair.ts"),
				se = r("./src/reddit/components/Flair/index.tsx"),
				ae = r("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/UserFlair.m.less"),
				ie = r.n(ae);
			const {
				fbt: ne
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ce = ({
				className: e,
				subredditId: t,
				flairData: r
			}) => {
				const s = Object(c.d)(),
					i = Object(f.a)(),
					o = Object(c.e)(F.k);
				return o ? n.a.createElement("div", {
					className: Object(a.a)(ie.a.container, e)
				}, n.a.createElement("div", {
					className: ie.a.header
				}, n.a.createElement("h4", {
					className: ie.a.flairText
				}, ne._("User Flair", null, {
					hk: "3DaU0r"
				})), n.a.createElement(y.t, {
					className: ie.a.editButton,
					priority: y.c.Plain,
					onClick: () => {
						const e = o ? Object(h.e)(o) : null;
						i(Object(T.a)()), s(Object(re.b)({
							username: e,
							subredditId: t,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, n.a.createElement(A.a, {
					name: "edit"
				}))), (null == r ? void 0 : r.applied) && r.displaySettings.isUserEnabled && n.a.createElement(se.b, {
					className: ie.a.flair,
					flair: r.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(s.a)(() => {
				const e = Object(c.d)(),
					t = Object(f.a)(),
					{
						container: r,
						isScrollGradientVisible: s,
						calculateGradientVisibility: i
					} = Object(b.b)(!0),
					j = Object(c.e)(F.k),
					P = Object(c.e)(w.e),
					x = Object(c.e)(e => P ? Object(E.b)(e, {
						subredditId: P.id
					}) : null),
					O = Object(c.e)(e => P ? Object(E.d)(e, {
						subredditId: P.id
					}) : null),
					_ = Object(c.e)(v.j),
					N = !!x && !!O;
				return j && P ? n.a.createElement("div", {
					className: k.a.container
				}, n.a.createElement("div", {
					className: k.a.stickyContent
				}, n.a.createElement(I, {
					subredditId: P.id,
					userId: j.id,
					username: Object(h.e)(j),
					flairData: O,
					onModalClose: () => {
						e(Object(d.g)(m.a.ACHIEVEMENT_FLAIR))
					}
				})), n.a.createElement("div", {
					className: k.a.scrollContainer,
					ref: r,
					onScroll: i
				}, N && n.a.createElement(ce, {
					subredditId: P.id,
					flairData: O
				}), _ ? n.a.createElement(te, {
					subredditId: P.id,
					userId: j.id
				}) : n.a.createElement(W, {
					subredditId: P.id,
					userId: j.id
				})), n.a.createElement("div", {
					className: Object(a.a)(k.a.stickyContent, k.a.scrollGradientContainer)
				}, n.a.createElement(u.a, {
					isVisible: s
				})), _ && n.a.createElement("div", {
					className: k.a.stickyContent
				}, n.a.createElement("div", {
					className: k.a.divider
				}), n.a.createElement(l.a, {
					className: k.a.ctaButton,
					onClick: () => {
						t(Object(p.G)()), e(Object(o.g)("user_flair_picker"))
					}
				}))) : null
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
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				n = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				o = r("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				d = r("./src/reddit/components/Flair/index.tsx"),
				l = r("./src/reddit/components/UserIcon/index.tsx"),
				u = r("./src/reddit/components/UserIcon/constants.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				p = r("./src/reddit/components/Econ/PowerupsFlair/UserFlairPreview.m.less"),
				b = r.n(p);
			const f = ({
				className: e,
				subredditId: t,
				userId: r,
				flairData: a,
				username: p,
				userHasBadge: f,
				usernameClassName: h
			}) => {
				const v = Object(n.e)(e => Object(m.k)(e));
				return v ? i.a.createElement("div", {
					className: Object(s.a)(b.a.flairPreview, e),
					"data-testid": "user-flair-preview"
				}, i.a.createElement(l.a, {
					className: b.a.userIcon,
					iconUrl: v.accountIcon,
					isNSFW: v.isNSFW,
					nsfwIconUrl: u.a,
					userName: p || ""
				}), i.a.createElement("div", {
					className: b.a.allFlair
				}, i.a.createElement("div", {
					className: b.a.flairPreviewFirstLine
				}, f && i.a.createElement(c.a, {
					className: b.a.badge,
					subredditId: t,
					uniqueIdentifier: t,
					badgeSize: 20
				}), i.a.createElement("span", {
					className: Object(s.a)(b.a.username, h)
				}, `${p||"username"}`), i.a.createElement(o.a, {
					className: b.a.achievementFlair,
					subredditId: t,
					userId: r
				})), (null == a ? void 0 : a.applied) && a.displaySettings.isUserEnabled && i.a.createElement("div", {
					className: b.a.flairPreviewSecondLine
				}, i.a.createElement(d.b, {
					className: b.a.userFlair,
					flair: a.applied,
					forceSmallEmojis: !0
				})))) : null
			}
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				n = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: o
			} = r("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e,
				onClick: t,
				disabled: r
			}) => {
				const s = Object(i.e)(c.w);
				return a.a.createElement(n.t, {
					priority: n.c.Primary,
					className: e,
					onClick: t,
					isFullWidth: !0,
					disabled: r
				}, (() => s ? o._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : o._("Become a Hero", null, {
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
				return o
			}));
			var s = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				n = r("./src/reddit/components/ScrollGradient/index.m.less"),
				c = r.n(n);
			const o = ({
				className: e,
				isVisible: t
			}) => i.a.createElement("div", {
				className: Object(s.a)(c.a.gradient, e, {
					[c.a.visible]: t
				})
			})
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/react/index.js");

			function a(e) {
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
				return i
			}));
			var s, a = r("./node_modules/react/index.js");

			function i(e, t = s.Bottom) {
				const [r, i] = Object(a.useState)(e), n = Object(a.useRef)(null);
				return {
					container: n,
					isScrollGradientVisible: r,
					calculateGradientVisibility: () => {
						const e = n.current;
						if (!e) return;
						const r = e.getBoundingClientRect().height,
							{
								scrollHeight: a,
								scrollTop: c
							} = e,
							o = Math.ceil(c + r) >= a,
							d = Math.ceil(r - c) >= a,
							l = t === s.Bottom ? o : d;
						i(!l)
					}
				}
			}! function(e) {
				e.Top = "top", e.Bottom = "bottom"
			}(s || (s = {}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				a = r.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), a.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), a.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), a.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"92790c69eba6"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsFlairModal.94850134740bb37499c8.js.map