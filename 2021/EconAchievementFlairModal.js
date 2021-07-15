// https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.0c3b239d8faeb0b4c8dc.js
// Retrieved at 7/15/2021, 10:30:06 AM by Reddit Dataminer v1.0.0
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
				d = a("./src/reddit/constants/modals.ts"),
				l = a("./src/reddit/models/User/index.ts"),
				o = a("./src/reddit/selectors/platform.ts"),
				m = a("./src/reddit/selectors/user.ts"),
				u = a("./src/reddit/selectors/userFlair.ts"),
				v = a("./src/reddit/actions/economics/powerups/achievements.ts"),
				h = a("./src/reddit/actions/gold/powerups.ts"),
				p = a("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				b = a("./src/reddit/controls/Button/index.tsx"),
				E = a("./src/reddit/selectors/gold/powerups/index.ts"),
				_ = a("./src/reddit/selectors/gold/powerups/achievements.ts"),
				I = a("./src/lib/classNames/index.ts"),
				f = a("./src/reddit/actions/tooltip.ts"),
				F = a("./src/reddit/components/InfoTextTooltip/index.tsx"),
				N = a("./src/reddit/helpers/trackers/userFlair.ts"),
				j = a("./src/reddit/hooks/useTracking.ts"),
				O = a("./src/reddit/icons/fonts/index.tsx"),
				x = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/AchievementFlairs.m.less"),
				A = a.n(x);
			const {
				fbt: k
			} = a("./node_modules/fbt/lib/FbtPublic.js"), w = ({
				achievement: e,
				onSelect: t
			}) => {
				const a = Object(n.d)(),
					s = Object(j.a)(),
					i = `achievement-locked-${e.type}`,
					r = k._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}),
					d = () => {
						if (e.isLocked) return a(Object(f.h)({
							tooltipId: i
						}))
					},
					l = !e.isLocked && !e.isPreferred;
				return c.a.createElement("div", {
					onMouseEnter: d,
					onMouseLeave: d,
					onClick: () => {
						l && t(e.type), e.isPreferred || s(Object(N.b)({
							achievementFlair: e
						}))
					},
					className: Object(I.a)(A.a.achievementItem, {
						[A.a.achievementItemLocked]: e.isLocked,
						[A.a.achievementItemActive]: e.isPreferred,
						[A.a.achievementItemSelectable]: l
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, c.a.createElement("div", {
					className: A.a.achievementImgWrapper
				}, c.a.createElement("img", {
					id: i,
					className: A.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), c.a.createElement("div", {
					className: A.a.achievementImgLocked
				}, c.a.createElement(O.a, {
					name: "lock",
					isFilled: !0,
					className: A.a.achievementLock
				}))), c.a.createElement("div", {
					className: A.a.achievementName
				}, c.a.createElement("span", null, e.name)), e.isLocked && c.a.createElement(F.c, {
					tooltipId: i,
					text: r,
					className: A.a.achievementTooltip
				}))
			}, {
				fbt: P
			} = a("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				className: e,
				subredditId: t,
				userId: a
			}) => {
				const i = Object(n.e)(e => Object(_.a)(e, {
						subredditId: t,
						userId: a
					})),
					r = Object(n.e)(e => Object(E.m)(e, {
						subredditId: t
					})),
					d = Object(n.d)(),
					l = e => {
						d(Object(v.c)(t, e))
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
				}, r ? P._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				}) : P._("Powerup to unlock community achievements", null, {
					hk: "1oPooH"
				})), c.a.createElement("div", {
					className: A.a.achievementsList
				}, i.map(e => c.a.createElement(w, {
					achievement: e,
					key: e.type,
					onSelect: l
				}))), !r && c.a.createElement(b.q, {
					priority: b.b.Primary,
					className: A.a.powerupButton,
					isFullWidth: !0,
					onClick: () => {
						d(Object(h.f)("user_flair_picker"))
					}
				}, P._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))
			};
			var y = a("./src/reddit/icons/svgs/Close/index.tsx"),
				L = a("./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.tsx"),
				M = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/Header.m.less"),
				U = a.n(M);
			const S = ({
				className: e,
				subredditId: t,
				userId: a,
				flairData: s,
				onModalClose: n,
				username: i
			}) => c.a.createElement("div", {
				className: Object(I.a)(U.a.container, e),
				"data-testid": "achievement-flair-modal-header"
			}, c.a.createElement(L.a, {
				className: U.a.userFlairPreview,
				subredditId: t,
				userId: a,
				username: i,
				flairData: s
			}), c.a.createElement(y.a, {
				className: U.a.closeIcon,
				onClick: n,
				"data-testid": "close-icon"
			}));
			var C = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.m.less"),
				D = a.n(C),
				H = a("./src/reddit/actions/authorFlair.ts"),
				T = a("./src/reddit/components/Flair/index.tsx"),
				J = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/UserFlair.m.less"),
				R = a.n(J);
			const {
				fbt: q
			} = a("./node_modules/fbt/lib/FbtPublic.js"), W = ({
				className: e,
				subredditId: t,
				flairData: a
			}) => {
				const s = Object(n.d)(),
					i = Object(j.a)(),
					r = Object(n.e)(m.j);
				return r ? c.a.createElement("div", {
					className: Object(I.a)(R.a.container, e)
				}, c.a.createElement("div", {
					className: R.a.header
				}, c.a.createElement("h4", {
					className: R.a.flairText
				}, q._("User flair", null, {
					hk: "3ToqP0"
				})), c.a.createElement(b.q, {
					className: R.a.editButton,
					priority: b.b.Plain,
					onClick: () => {
						const e = r ? Object(l.e)(r) : null;
						i(Object(N.a)()), s(Object(H.b)({
							username: e,
							subredditId: t,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, c.a.createElement(O.a, {
					name: "edit"
				}))), (null == a ? void 0 : a.applied) && a.displaySettings.isUserEnabled && c.a.createElement(T.b, {
					className: R.a.flair,
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
				}, c.a.createElement(S, {
					subredditId: a.id,
					userId: t.id,
					username: Object(l.e)(t),
					flairData: i,
					onModalClose: () => {
						e(Object(r.g)(d.a.ACHIEVEMENT_FLAIR))
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
				d = a("./src/reddit/selectors/gold/powerups/achievements.ts"),
				l = a("./src/reddit/selectors/subreddit.ts"),
				o = a("./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less"),
				m = a.n(o);
			const {
				fbt: u
			} = a("./node_modules/fbt/lib/FbtPublic.js"), v = ({
				className: e,
				subredditId: t,
				userId: a
			}) => {
				const s = Object(n.e)(e => Object(d.a)(e, {
						subredditId: t,
						userId: a
					})),
					o = Object(n.e)(e => Object(l.S)(e, {
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
					var l;
					const o = Object(n.e)(e => Object(d.c)(e, {
							subredditId: t,
							userId: a
						})),
						m = Object(n.e)(e => Object(d.d)(e, {
							subredditId: t,
							userId: a
						})),
						u = null === (l = Object(n.e)(e => Object(d.b)(e, {
							subredditId: t,
							userId: a
						}))) || void 0 === l ? void 0 : l.achievementTypes;
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
				d = a("./src/reddit/components/Flair/index.tsx"),
				l = a("./src/reddit/components/UserIcon/index.tsx"),
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
				}, n.a.createElement(l.a, {
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
				}, n.a.createElement(d.b, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.0c3b239d8faeb0b4c8dc.js.map