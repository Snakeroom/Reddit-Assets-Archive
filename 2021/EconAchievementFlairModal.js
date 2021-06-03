// https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.c6199a199ad41253aa54.js
// Retrieved at 6/3/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
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
				n = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/higherOrderComponents/asModal/index.tsx"),
				r = a("./src/reddit/actions/modal.ts"),
				l = a("./src/reddit/constants/modals.ts"),
				d = a("./src/reddit/models/User/index.ts"),
				o = a("./src/reddit/selectors/platform.ts"),
				m = a("./src/reddit/selectors/user.ts"),
				u = a("./src/reddit/selectors/userFlair.ts"),
				v = a("./src/reddit/actions/economics/powerups/achievements.ts"),
				h = a("./src/reddit/controls/Button/index.tsx"),
				p = a("./src/reddit/selectors/gold/powerups/index.ts"),
				b = a("./src/reddit/selectors/gold/powerups/achievements.ts"),
				E = a("./src/lib/classNames/index.ts"),
				_ = a("./src/reddit/actions/tooltip.ts"),
				I = a("./src/reddit/components/InfoTextTooltip/index.tsx"),
				f = a("./src/reddit/icons/fonts/index.tsx"),
				F = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/AchievementFlairs.m.less"),
				j = a.n(F);
			const {
				fbt: x
			} = a("./node_modules/fbt/lib/FbtPublic.js"), A = ({
				achievement: e,
				onSelect: t
			}) => {
				const a = Object(n.d)(),
					s = `achievement-locked-${e.type}`,
					i = x._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}),
					r = () => {
						if (e.isLocked) return a(Object(_.h)({
							tooltipId: s
						}))
					},
					l = !e.isLocked && !e.isPreferred;
				return c.a.createElement("div", {
					onMouseEnter: r,
					onMouseLeave: r,
					onClick: () => {
						l && t(e.type)
					},
					className: Object(E.a)(j.a.achievementItem, {
						[j.a.achievementItemLocked]: e.isLocked,
						[j.a.achievementItemActive]: e.isPreferred,
						[j.a.achievementItemSelectable]: l
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, c.a.createElement("div", {
					className: j.a.achievementImgWrapper
				}, c.a.createElement("img", {
					id: s,
					className: j.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), c.a.createElement("div", {
					className: j.a.achievementImgLocked
				}, c.a.createElement(f.a, {
					name: "lock",
					isFilled: !0,
					className: j.a.achievementLock
				}))), c.a.createElement("div", {
					className: j.a.achievementName
				}, c.a.createElement("span", null, e.name)), e.isLocked && c.a.createElement(I.c, {
					tooltipId: s,
					text: i,
					className: j.a.achievementTooltip
				}))
			}, {
				fbt: N
			} = a("./node_modules/fbt/lib/FbtPublic.js"), O = ({
				className: e,
				subredditId: t,
				userId: a
			}) => {
				const s = Object(n.e)(e => Object(b.a)(e, {
						subredditId: t,
						userId: a
					})),
					i = Object(n.e)(e => Object(p.n)(e, {
						subredditId: t
					})),
					r = Object(n.d)(),
					l = e => {
						r(Object(v.c)(t, e))
					};
				return c.a.createElement("div", {
					className: e
				}, c.a.createElement("h4", {
					className: j.a.achievementsHeading
				}, N._("Achievements", null, {
					hk: "1DnL4g"
				})), c.a.createElement("p", {
					className: j.a.achievementsDescription
				}, N._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				})), c.a.createElement("div", {
					className: j.a.achievementsList
				}, s.map(e => c.a.createElement(A, {
					achievement: e,
					key: e.type,
					onSelect: l
				}))), !i && c.a.createElement(h.q, {
					priority: h.b.Primary,
					className: j.a.powerupButton,
					isFullWidth: !0
				}, N._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))
			};
			var w = a("./src/reddit/icons/svgs/Close/index.tsx"),
				k = a("./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.tsx"),
				U = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/Header.m.less"),
				P = a.n(U);
			const L = ({
				className: e,
				subredditId: t,
				userId: a,
				flairData: s,
				onModalClose: n,
				username: i
			}) => c.a.createElement("div", {
				className: Object(E.a)(P.a.container, e),
				"data-testid": "achievement-flair-modal-header"
			}, c.a.createElement(k.a, {
				className: P.a.userFlairPreview,
				subredditId: t,
				userId: a,
				username: i,
				flairData: s
			}), c.a.createElement(w.a, {
				className: P.a.closeIcon,
				onClick: n,
				"data-testid": "close-icon"
			}));
			var M = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.m.less"),
				g = a.n(M),
				y = a("./src/reddit/actions/authorFlair.ts"),
				S = a("./src/reddit/components/Flair/index.tsx"),
				C = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/UserFlair.m.less"),
				D = a.n(C);
			const {
				fbt: H
			} = a("./node_modules/fbt/lib/FbtPublic.js"), T = ({
				className: e,
				subredditId: t,
				flairData: a
			}) => {
				const s = Object(n.d)(),
					i = Object(n.e)(m.j);
				return i ? c.a.createElement("div", {
					className: Object(E.a)(D.a.container, e)
				}, c.a.createElement("div", {
					className: D.a.header
				}, c.a.createElement("h4", {
					className: D.a.flairText
				}, H._("User flair", null, {
					hk: "3ToqP0"
				})), c.a.createElement(h.q, {
					className: D.a.editButton,
					priority: h.b.Plain,
					onClick: () => {
						const e = i ? Object(d.e)(i) : null;
						s(Object(y.b)({
							username: e,
							subredditId: t
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, c.a.createElement(f.a, {
					name: "edit"
				}))), (null == a ? void 0 : a.applied) && a.displaySettings.isUserEnabled && c.a.createElement(S.b, {
					className: D.a.flair,
					flair: a.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(i.a)(() => {
				const e = Object(n.d)(),
					t = Object(n.e)(m.j),
					a = Object(n.e)(o.e),
					s = Object(n.e)(e => a ? Object(u.b)(e, {
						subredditId: a.id
					}) : null),
					i = Object(n.e)(e => a ? Object(u.c)(e, {
						subredditId: a.id
					}) : null),
					v = !!s && !!i;
				return t && a ? c.a.createElement("div", {
					className: g.a.container
				}, c.a.createElement(L, {
					subredditId: a.id,
					userId: t.id,
					username: Object(d.e)(t),
					flairData: i,
					onModalClose: () => {
						e(Object(r.g)(l.a.ACHIEVEMENT_FLAIR))
					}
				}), v && c.a.createElement(T, {
					subredditId: a.id,
					flairData: i
				}), c.a.createElement(O, {
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
				n = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/selectors/experiments/econ/powerupsAchievementFlair.ts"),
				l = a("./src/reddit/selectors/gold/powerups/achievements.ts"),
				d = a("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less"),
				o = a.n(d);
			const m = ({
					className: e,
					subredditId: t,
					userId: a
				}) => {
					const s = Object(n.e)(e => Object(l.b)(e, {
							subredditId: t,
							userId: a
						})),
						d = Object(n.e)(e => Object(l.c)(e, {
							subredditId: t,
							userId: a
						})),
						m = !!s || !!d;
					if (!Object(n.e)(e => m && Object(r.a)(e))) return null;
					const v = (null == d ? void 0 : d.type) === (null == s ? void 0 : s.type) ? null : d;
					return c.a.createElement("span", {
						className: Object(i.a)(o.a.container, e),
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
				userIcon: "_2d6f5m40Wp18i0fC6mloL3",
				allFlair: "MsNDLMKXGpyANwNmwjClc",
				flairPreviewFirstLine: "_2zJmxsJUBCpVk9xUBGzZpP",
				username: "_3MMCPmniAei9M8H_KF1370",
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
				n = a.n(c),
				i = a("./node_modules/react-redux/es/index.js"),
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
				const h = Object(i.e)(e => Object(m.j)(e));
				return h ? n.a.createElement("div", {
					className: Object(s.a)(v.a.flairPreview, e),
					"data-testid": "user-flair-preview"
				}, n.a.createElement(d.a, {
					className: v.a.userIcon,
					iconUrl: h.accountIcon,
					isNSFW: h.isNSFW,
					nsfwIconUrl: o.a,
					userName: u || ""
				}), n.a.createElement("div", {
					className: v.a.allFlair
				}, n.a.createElement("div", {
					className: v.a.flairPreviewFirstLine
				}, n.a.createElement("span", {
					className: v.a.username
				}, `u/${u||"username"}`), n.a.createElement(r.a, {
					className: v.a.achievementFlair,
					subredditId: t,
					userId: a
				})), (null == c ? void 0 : c.applied) && c.displaySettings.isUserEnabled && n.a.createElement(l.b, {
					className: v.a.userFlair,
					flair: c.applied,
					forceSmallEmojis: !0
				}))) : null
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.c6199a199ad41253aa54.js.map