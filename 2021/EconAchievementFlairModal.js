// https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.22fdebebd0975c71edf6.js
// Retrieved at 6/9/2021, 2:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconAchievementFlairModal"], {
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/AchievementFlairs.m.less": function(e, t, a) {
			e.exports = {
				achievementsHeading: "_2MMWZ77acTlm_HNoeapQrs",
				achievementsDescription: "sLeTiZCYDJEbJ01INVqgQ",
				achievementsList: "_27p8VqslTxRwJe-f0NSi2m",
				achievementItem: "_2HKHknVd9LlHZ26npnx_hF",
				achievementItemLocked: "_2KVQTU9959HwoV_Y5t6a9o",
				achievementImg: "_3pGwtkZgq76y6km-4aV-AX",
				achievementName: "_3y-oQjndG4AJDXCuKlgqsi",
				achievementImgLocked: "lJJ5VJ31kVOe0f0sVxmRa",
				achievementItemActive: "_1YPI1ZuBHDqkzs4wGUy_ey",
				achievementItemSelectable: "_2Q_KiHR7hwjxseAF5VH-67",
				achievementImgWrapper: "_5Rc7ZoY5MWCNTPigbIz52",
				achievementLock: "_9RN8EyAC7RajeViTsGJPw",
				achievementTooltip: "_1M4-T4IABYlmO-XJKv2wnt",
				powerupButton: "_1IO-3cKRnocfG9casq6y9P",
				Icon: "_13PSx7anaGbYWlueCodaW5",
				icon: "_13PSx7anaGbYWlueCodaW5",
				isLeft: "_2ACtdSQaOfAKorAXvPb7GO",
				isRight: "_2Ox74dQag88nuR4JTUxIcp",
				active: "_39m29j07mjDa2eptwIwnt7"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/Header.m.less": function(e, t, a) {
			e.exports = {
				container: "_2ofZ3SIhJTW1k6dqzsj4Zp",
				closeIcon: "_2-17aOl6GJdrxv9YJsJjeV"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/UserFlair.m.less": function(e, t, a) {
			e.exports = {
				container: "_2WodkoDy6Hve0i7HUiy0jY",
				header: "_1BgkB2WIlORMgfqEIN15-I",
				flairText: "l81EtFSYaVr_9EN_34aHH",
				editButton: "_3hO5HFaStSXbTk2jrf8Kvy",
				flair: "_1cXJeRWc_6Id1Pc6euMfe_"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "X-MUWdOjSUyI9mAZKbqSI"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/react/index.js"),
				c = a.n(s),
				i = a("./node_modules/react-redux/es/index.js"),
				n = a("./src/higherOrderComponents/asModal/index.tsx"),
				r = a("./src/reddit/actions/modal.ts"),
				l = a("./src/reddit/constants/modals.ts"),
				d = a("./src/reddit/models/User/index.ts"),
				o = a("./src/reddit/selectors/platform.ts"),
				m = a("./src/reddit/selectors/user.ts"),
				u = a("./src/reddit/selectors/userFlair.ts"),
				v = a("./src/reddit/actions/economics/powerups/achievements.ts"),
				h = a("./src/reddit/actions/gold/powerups.ts"),
				p = a("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				b = a("./src/reddit/controls/Button/index.tsx"),
				E = a("./src/reddit/selectors/gold/powerups/index.ts"),
				_ = a("./src/reddit/selectors/gold/powerups/achievements.ts"),
				f = a("./src/lib/classNames/index.ts"),
				I = a("./src/reddit/actions/tooltip.ts"),
				j = a("./src/reddit/components/InfoTextTooltip/index.tsx"),
				F = a("./src/reddit/helpers/trackers/userFlair.ts"),
				x = a("./src/reddit/hooks/useTracking.ts"),
				N = a("./src/reddit/icons/fonts/index.tsx"),
				O = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/AchievementFlairs.m.less"),
				A = a.n(O);
			const {
				fbt: w
			} = a("./node_modules/fbt/lib/FbtPublic.js"), k = ({
				achievement: e,
				onSelect: t
			}) => {
				const a = Object(i.d)(),
					s = Object(x.a)(),
					n = `achievement-locked-${e.type}`,
					r = w._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}),
					l = () => {
						if (e.isLocked) return a(Object(I.h)({
							tooltipId: n
						}))
					},
					d = !e.isLocked && !e.isPreferred;
				return c.a.createElement("div", {
					onMouseEnter: l,
					onMouseLeave: l,
					onClick: () => {
						d && t(e.type), e.isPreferred || s(Object(F.b)({
							achievementFlair: e
						}))
					},
					className: Object(f.a)(A.a.achievementItem, {
						[A.a.achievementItemLocked]: e.isLocked,
						[A.a.achievementItemActive]: e.isPreferred,
						[A.a.achievementItemSelectable]: d
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, c.a.createElement("div", {
					className: A.a.achievementImgWrapper
				}, c.a.createElement("img", {
					id: n,
					className: A.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), c.a.createElement("div", {
					className: A.a.achievementImgLocked
				}, c.a.createElement(N.a, {
					name: "lock",
					isFilled: !0,
					className: A.a.achievementLock
				}))), c.a.createElement("div", {
					className: A.a.achievementName
				}, c.a.createElement("span", null, e.name)), e.isLocked && c.a.createElement(j.c, {
					tooltipId: n,
					text: r,
					className: A.a.achievementTooltip
				}))
			}, {
				fbt: P
			} = a("./node_modules/fbt/lib/FbtPublic.js"), L = ({
				className: e,
				subredditId: t,
				userId: a
			}) => {
				const n = Object(i.e)(e => Object(_.a)(e, {
						subredditId: t,
						userId: a
					})),
					r = Object(i.e)(e => Object(E.n)(e, {
						subredditId: t
					})),
					l = Object(i.d)(),
					d = e => {
						l(Object(v.c)(t, e))
					};
				return Object(s.useEffect)(() => {
					Object(p.a)()
				}, []), c.a.createElement("div", {
					className: e
				}, c.a.createElement("h4", {
					className: A.a.achievementsHeading
				}, P._("Achievements", null, {
					hk: "1DnL4g"
				})), c.a.createElement("p", {
					className: A.a.achievementsDescription
				}, P._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				})), c.a.createElement("div", {
					className: A.a.achievementsList
				}, n.map(e => c.a.createElement(k, {
					achievement: e,
					key: e.type,
					onSelect: d
				}))), !r && c.a.createElement(b.q, {
					priority: b.b.Primary,
					className: A.a.powerupButton,
					isFullWidth: !0,
					onClick: () => {
						l(Object(h.d)("user_flair_picker"))
					}
				}, P._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))
			};
			var U = a("./src/reddit/icons/svgs/Close/index.tsx"),
				g = a("./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.tsx"),
				M = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/Header.m.less"),
				y = a.n(M);
			const S = ({
				className: e,
				subredditId: t,
				userId: a,
				flairData: s,
				onModalClose: i,
				username: n
			}) => c.a.createElement("div", {
				className: Object(f.a)(y.a.container, e),
				"data-testid": "achievement-flair-modal-header"
			}, c.a.createElement(g.a, {
				className: y.a.userFlairPreview,
				subredditId: t,
				userId: a,
				username: n,
				flairData: s
			}), c.a.createElement(U.a, {
				className: y.a.closeIcon,
				onClick: i,
				"data-testid": "close-icon"
			}));
			var C = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.m.less"),
				D = a.n(C),
				T = a("./src/reddit/actions/authorFlair.ts"),
				H = a("./src/reddit/components/Flair/index.tsx"),
				J = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/UserFlair.m.less"),
				W = a.n(J);
			const {
				fbt: R
			} = a("./node_modules/fbt/lib/FbtPublic.js"), V = ({
				className: e,
				subredditId: t,
				flairData: a
			}) => {
				const s = Object(i.d)(),
					n = Object(x.a)(),
					r = Object(i.e)(m.j);
				return r ? c.a.createElement("div", {
					className: Object(f.a)(W.a.container, e)
				}, c.a.createElement("div", {
					className: W.a.header
				}, c.a.createElement("h4", {
					className: W.a.flairText
				}, R._("User flair", null, {
					hk: "3ToqP0"
				})), c.a.createElement(b.q, {
					className: W.a.editButton,
					priority: b.b.Plain,
					onClick: () => {
						const e = r ? Object(d.e)(r) : null;
						n(Object(F.a)()), s(Object(T.b)({
							username: e,
							subredditId: t
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, c.a.createElement(N.a, {
					name: "edit"
				}))), (null == a ? void 0 : a.applied) && a.displaySettings.isUserEnabled && c.a.createElement(H.b, {
					className: W.a.flair,
					flair: a.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(n.a)(() => {
				const e = Object(i.d)(),
					t = Object(i.e)(m.j),
					a = Object(i.e)(o.e),
					s = Object(i.e)(e => a ? Object(u.b)(e, {
						subredditId: a.id
					}) : null),
					n = Object(i.e)(e => a ? Object(u.c)(e, {
						subredditId: a.id
					}) : null),
					v = !!s && !!n;
				return t && a ? c.a.createElement("div", {
					className: D.a.container
				}, c.a.createElement(S, {
					subredditId: a.id,
					userId: t.id,
					username: Object(d.e)(t),
					flairData: n,
					onModalClose: () => {
						e(Object(r.g)(l.a.ACHIEVEMENT_FLAIR))
					}
				}), v && c.a.createElement(V, {
					subredditId: a.id,
					flairData: n
				}), c.a.createElement(L, {
					subredditId: a.id,
					userId: t.id
				})) : null
			})
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less": function(e, t, a) {
			e.exports = {
				container: "_2tytE20aBhQMtf6GkTvN3",
				icon: "_16Osj2XUXJVMQLOL8-1m8E"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return m
			}));
			var s = a("./node_modules/react/index.js"),
				c = a.n(s),
				i = a("./node_modules/react-redux/es/index.js"),
				n = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/selectors/experiments/econ/index.ts"),
				l = a("./src/reddit/selectors/gold/powerups/achievements.ts"),
				d = a("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less"),
				o = a.n(d);
			const m = ({
					className: e,
					subredditId: t,
					userId: a
				}) => {
					const s = Object(i.e)(e => Object(l.c)(e, {
							subredditId: t,
							userId: a
						})),
						d = Object(i.e)(e => Object(l.d)(e, {
							subredditId: t,
							userId: a
						})),
						m = !!s || !!d;
					if (!Object(i.e)(e => m && Object(r.h)(e))) return null;
					const v = (null == d ? void 0 : d.type) === (null == s ? void 0 : s.type) ? null : d;
					return c.a.createElement("span", {
						className: Object(n.a)(o.a.container, e),
						"data-testid": "achievement-flairs"
					}, c.a.createElement(u, {
						achievement: v
					}), c.a.createElement(u, {
						achievement: s
					}))
				},
				u = ({
					achievement: e
				}) => e ? c.a.createElement("img", {
					alt: e.name,
					className: o.a.icon,
					src: e.icon.url
				}) : null
		},
		"./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.m.less": function(e, t, a) {
			e.exports = {
				flairPreview: "_3kS07M5t3AnCSn-dzPT28L",
				flairPreviewLine: "_9U85xFylyRCZNL6qmFbx",
				userIcon: "_2d6f5m40Wp18i0fC6mloL3",
				allFlair: "MsNDLMKXGpyANwNmwjClc",
				flairPreviewFirstLine: "_2zJmxsJUBCpVk9xUBGzZpP",
				username: "_3MMCPmniAei9M8H_KF1370",
				flairPreviewSecondLine: "_3f8i-0tQOqxvijtZIdqRv2",
				userFlair: "_1nNvsQvf6jy4_nUR_Sv0dS",
				achievementFlair: "_1SkwA-RUKQvmuGiuvGXPPW"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return h
			}));
			var s = a("./src/lib/classNames/index.ts"),
				c = a("./node_modules/react/index.js"),
				i = a.n(c),
				n = a("./node_modules/react-redux/es/index.js"),
				r = a("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx"),
				l = a("./src/reddit/components/Flair/index.tsx"),
				d = a("./src/reddit/components/UserIcon/index.tsx"),
				o = a("./src/reddit/components/UserIcon/constants.ts"),
				m = a("./src/reddit/selectors/user.ts"),
				u = a("./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.m.less"),
				v = a.n(u);
			const h = ({
				className: e,
				subredditId: t,
				userId: a,
				flairData: c,
				username: u
			}) => {
				const h = Object(n.e)(e => Object(m.j)(e));
				return h ? i.a.createElement("div", {
					className: Object(s.a)(v.a.flairPreview, e),
					"data-testid": "user-flair-preview"
				}, i.a.createElement(d.a, {
					className: v.a.userIcon,
					iconUrl: h.accountIcon,
					isNSFW: h.isNSFW,
					nsfwIconUrl: o.a,
					userName: u || ""
				}), i.a.createElement("div", {
					className: v.a.allFlair
				}, i.a.createElement("div", {
					className: v.a.flairPreviewFirstLine
				}, i.a.createElement("span", {
					className: v.a.username
				}, `u/${u||"username"}`), i.a.createElement(r.a, {
					className: v.a.achievementFlair,
					subredditId: t,
					userId: a
				})), (null == c ? void 0 : c.applied) && c.displaySettings.isUserEnabled && i.a.createElement("div", {
					className: v.a.flairPreviewSecondLine
				}, i.a.createElement(l.b, {
					className: v.a.userFlair,
					flair: c.applied,
					forceSmallEmojis: !0
				})))) : null
			}
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			const s = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.22fdebebd0975c71edf6.js.map