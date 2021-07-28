// https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.f7136c286ca4f2a40798.js
// Retrieved at 7/28/2021, 5:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconAchievementFlairModal"], {
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/AchievementFlairs.m.less": function(e, t, a) {
			e.exports = {
				achievementsHeading: "_2MMWZ77acTlm_HNoeapQrs",
				headingPowerupsBolt: "_33HOGcxqKoE84O57mKGWIe",
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
				h = a("./src/reddit/actions/gold/powerups.ts"),
				p = a("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				b = a("./src/reddit/controls/Button/index.tsx"),
				E = a("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				_ = a("./src/reddit/selectors/gold/powerups/index.ts"),
				I = a("./src/reddit/selectors/gold/powerups/achievements.ts"),
				f = a("./src/lib/classNames/index.ts"),
				F = a("./src/reddit/actions/tooltip.ts"),
				N = a("./src/reddit/components/InfoTextTooltip/index.tsx"),
				x = a("./src/reddit/helpers/trackers/userFlair.ts"),
				j = a("./src/reddit/hooks/useTracking.ts"),
				O = a("./src/reddit/icons/fonts/index.tsx"),
				A = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/AchievementFlairs.m.less"),
				w = a.n(A);
			const {
				fbt: k
			} = a("./node_modules/fbt/lib/FbtPublic.js"), L = ({
				achievement: e,
				onSelect: t
			}) => {
				const a = Object(n.d)(),
					s = Object(j.a)(),
					i = `achievement-locked-${e.type}`,
					r = k._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}),
					l = () => {
						if (e.isLocked) return a(Object(F.h)({
							tooltipId: i
						}))
					},
					d = !e.isLocked && !e.isPreferred;
				return c.a.createElement("div", {
					onMouseEnter: l,
					onMouseLeave: l,
					onClick: () => {
						d && t(e.type), e.isPreferred || s(Object(x.b)({
							achievementFlair: e
						}))
					},
					className: Object(f.a)(w.a.achievementItem, {
						[w.a.achievementItemLocked]: e.isLocked,
						[w.a.achievementItemActive]: e.isPreferred,
						[w.a.achievementItemSelectable]: d
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, c.a.createElement("div", {
					className: w.a.achievementImgWrapper
				}, c.a.createElement("img", {
					id: i,
					className: w.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), c.a.createElement("div", {
					className: w.a.achievementImgLocked
				}, c.a.createElement(O.a, {
					name: "lock",
					isFilled: !0,
					className: w.a.achievementLock
				}))), c.a.createElement("div", {
					className: w.a.achievementName
				}, c.a.createElement("span", null, e.name)), e.isLocked && c.a.createElement(N.c, {
					tooltipId: i,
					text: r,
					className: w.a.achievementTooltip
				}))
			}, {
				fbt: P
			} = a("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				className: e,
				subredditId: t,
				userId: a
			}) => {
				const i = Object(n.e)(e => Object(I.a)(e, {
						subredditId: t,
						userId: a
					})),
					r = Object(n.e)(e => Object(_.m)(e, {
						subredditId: t
					})),
					l = Object(n.d)(),
					d = e => {
						l(Object(v.c)(t, e))
					};
				return Object(s.useEffect)(() => {
					Object(p.a)()
				}, []), c.a.createElement("div", {
					className: e
				}, c.a.createElement("h4", {
					className: w.a.achievementsHeading
				}, c.a.createElement(E.a, {
					className: w.a.headingPowerupsBolt
				}), P._("Achievements", null, {
					hk: "1DnL4g"
				})), c.a.createElement("p", {
					className: w.a.achievementsDescription
				}, r ? P._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				}) : P._("Powerup to unlock community achievements", null, {
					hk: "1oPooH"
				})), c.a.createElement("div", {
					className: w.a.achievementsList
				}, i.map(e => c.a.createElement(L, {
					achievement: e,
					key: e.type,
					onSelect: d
				}))), !r && c.a.createElement(b.q, {
					priority: b.b.Primary,
					className: w.a.powerupButton,
					isFullWidth: !0,
					onClick: () => {
						l(Object(h.f)("user_flair_picker"))
					}
				}, P._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))
			};
			var M = a("./src/reddit/icons/svgs/Close/index.tsx"),
				y = a("./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.tsx"),
				U = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/Header.m.less"),
				C = a.n(U);
			const H = ({
				className: e,
				subredditId: t,
				userId: a,
				flairData: s,
				onModalClose: n,
				username: i
			}) => c.a.createElement("div", {
				className: Object(f.a)(C.a.container, e),
				"data-testid": "achievement-flair-modal-header"
			}, c.a.createElement(y.a, {
				className: C.a.userFlairPreview,
				subredditId: t,
				userId: a,
				username: i,
				flairData: s
			}), c.a.createElement(M.a, {
				className: C.a.closeIcon,
				onClick: n,
				"data-testid": "close-icon"
			}));
			var S = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.m.less"),
				D = a.n(S),
				T = a("./src/reddit/actions/authorFlair.ts"),
				B = a("./src/reddit/components/Flair/index.tsx"),
				J = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/UserFlair.m.less"),
				q = a.n(J);
			const {
				fbt: R
			} = a("./node_modules/fbt/lib/FbtPublic.js"), W = ({
				className: e,
				subredditId: t,
				flairData: a
			}) => {
				const s = Object(n.d)(),
					i = Object(j.a)(),
					r = Object(n.e)(m.j);
				return r ? c.a.createElement("div", {
					className: Object(f.a)(q.a.container, e)
				}, c.a.createElement("div", {
					className: q.a.header
				}, c.a.createElement("h4", {
					className: q.a.flairText
				}, R._("User flair", null, {
					hk: "3ToqP0"
				})), c.a.createElement(b.q, {
					className: q.a.editButton,
					priority: b.b.Plain,
					onClick: () => {
						const e = r ? Object(d.e)(r) : null;
						i(Object(x.a)()), s(Object(T.b)({
							username: e,
							subredditId: t,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, c.a.createElement(O.a, {
					name: "edit"
				}))), (null == a ? void 0 : a.applied) && a.displaySettings.isUserEnabled && c.a.createElement(B.b, {
					className: q.a.flair,
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
					className: D.a.container
				}, c.a.createElement(H, {
					subredditId: a.id,
					userId: t.id,
					username: Object(d.e)(t),
					flairData: i,
					onModalClose: () => {
						e(Object(r.g)(l.a.ACHIEVEMENT_FLAIR))
					}
				}), v && c.a.createElement(W, {
					subredditId: a.id,
					flairData: i
				}), c.a.createElement(g, {
					subredditId: a.id,
					userId: t.id
				})) : null
			})
		},
		"./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less": function(e, t, a) {
			e.exports = {
				container: "_3kd-dlN-SayusCxdP2netc",
				header: "_2qYkItLcJFJyORCGH9k8xc",
				subredditLogo: "_1vh_JamIt2dZYY7uwMHHv8",
				headerText: "_1FyMArbFbR91zDup_aXAUI",
				headerDelimiter: "_1O5D69EOlVhvj5bzxwHE38",
				achievements: "_2184liSTNqbtEvYN_pvrvZ",
				achievementItem: "DpiFfz95qctN0--U4vopM",
				achievementImgWrapper: "EP4eFqOgkm9TaTOXYXyIA",
				achievementImg: "_32rRB3c7q17wOs_Fz7Bdk",
				achievementName: "_2RAw7XCPPgNLzOBs-_7Cix"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less": function(e, t, a) {
			e.exports = {
				container: "_2tytE20aBhQMtf6GkTvN3",
				hoverPopup: "_2-UmlwvzsKsjDIuXchymkf",
				icon: "_16Osj2XUXJVMQLOL8-1m8E",
				hiddenAchievementsCount: "BndgSmDj59XX1brHFAMZC"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return b
			}));
			var s = a("./node_modules/react/index.js"),
				c = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/components/SubredditIcon/index.tsx"),
				l = a("./src/reddit/selectors/gold/powerups/achievements.ts"),
				d = a("./src/reddit/selectors/subreddit.ts"),
				o = a("./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less"),
				m = a.n(o);
			const {
				fbt: u
			} = a("./node_modules/fbt/lib/FbtPublic.js"), v = ({
				className: e,
				subredditId: t,
				userId: a
			}) => {
				const s = Object(n.e)(e => Object(l.a)(e, {
						subredditId: t,
						userId: a
					})),
					o = Object(n.e)(e => Object(d.S)(e, {
						subredditId: t
					}));
				return c.a.createElement("div", {
					className: Object(i.a)(m.a.container, e)
				}, c.a.createElement("div", {
					className: m.a.header
				}, c.a.createElement(r.b, {
					className: m.a.subredditLogo,
					subredditOrProfile: o
				}), u._("{r/community} {=achievements}", [u._param("r/community", o.displayText), u._param("=achievements", c.a.createElement("span", {
					className: m.a.headerText
				}, u._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), c.a.createElement("div", {
					className: m.a.headerDelimiter
				}), c.a.createElement("div", {
					className: m.a.achievements
				}, s.map(e => !e.isLocked && c.a.createElement("div", {
					className: m.a.achievementItem,
					key: e.type
				}, c.a.createElement("div", {
					className: m.a.achievementImgWrapper
				}, c.a.createElement("img", {
					className: m.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), c.a.createElement("div", {
					className: m.a.achievementName
				}, c.a.createElement("span", null, e.name))))))
			};
			var h = a("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less"),
				p = a.n(h);
			const b = ({
					className: e,
					subredditId: t,
					userId: a,
					showPopupOnHover: s,
					onHover: r
				}) => {
					var d;
					const o = Object(n.e)(e => Object(l.c)(e, {
							subredditId: t,
							userId: a
						})),
						m = Object(n.e)(e => Object(l.d)(e, {
							subredditId: t,
							userId: a
						})),
						u = null === (d = Object(n.e)(e => Object(l.b)(e, {
							subredditId: t,
							userId: a
						}))) || void 0 === d ? void 0 : d.achievementTypes;
					if (!(!!o || !!m) || !u) return null;
					const h = (null == m ? void 0 : m.type) === (null == o ? void 0 : o.type) ? null : m,
						b = 1 + (h ? 1 : 0),
						_ = (null == u ? void 0 : u.length) - b;
					return c.a.createElement("span", {
						className: Object(i.a)(p.a.container, e),
						"data-testid": "achievement-flairs",
						onMouseEnter: r
					}, c.a.createElement(E, {
						achievement: h
					}), c.a.createElement(E, {
						achievement: o
					}), !!_ && c.a.createElement("span", {
						className: p.a.hiddenAchievementsCount
					}, "+", _), s && c.a.createElement(v, {
						className: p.a.hoverPopup,
						subredditId: t,
						userId: a
					}))
				},
				E = ({
					achievement: e
				}) => e ? c.a.createElement("img", {
					alt: e.name,
					className: p.a.icon,
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
				})), (null == c ? void 0 : c.applied) && c.displaySettings.isUserEnabled && n.a.createElement("div", {
					className: v.a.flairPreviewSecondLine
				}, n.a.createElement(l.b, {
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
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				c = a.n(s);
			t.a = e => c.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && c.a.createElement("title", null, e.title), c.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), c.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), c.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), c.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), c.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.f7136c286ca4f2a40798.js.map