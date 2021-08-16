// https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.29a670ac1f33098c3371.js
// Retrieved at 8/16/2021, 12:20:11 PM by Reddit Dataminer v1.0.0
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
				r = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/reddit/actions/modal.ts"),
				l = a("./src/reddit/constants/modals.ts"),
				d = a("./src/reddit/models/User/index.ts"),
				o = a("./src/reddit/selectors/platform.ts"),
				m = a("./src/reddit/selectors/user.ts"),
				u = a("./src/reddit/selectors/userFlair.ts"),
				v = a("./src/reddit/actions/economics/powerups/achievements.ts"),
				h = a("./src/reddit/actions/gold/powerups.ts"),
				p = a("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				b = a("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				E = a("./src/reddit/controls/Button/index.tsx"),
				_ = a("./src/reddit/helpers/trackers/powerups.ts"),
				f = a("./src/reddit/hooks/useTracking.ts"),
				I = a("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				j = a("./src/reddit/selectors/gold/powerups/index.ts"),
				x = a("./src/reddit/selectors/gold/powerups/achievements.ts"),
				O = a("./src/lib/classNames/index.ts"),
				F = a("./src/reddit/actions/tooltip.ts"),
				N = a("./src/reddit/components/InfoTextTooltip/index.tsx"),
				w = a("./src/reddit/helpers/trackers/userFlair.ts"),
				A = a("./src/reddit/icons/fonts/index.tsx"),
				k = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/AchievementFlairs.m.less"),
				P = a.n(k);
			const {
				fbt: g
			} = a("./node_modules/fbt/lib/FbtPublic.js"), L = ({
				achievement: e,
				onSelect: t
			}) => {
				const a = Object(n.d)(),
					s = Object(f.a)(),
					r = `achievement-locked-${e.type}`,
					i = g._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}),
					l = () => {
						if (e.isLocked) return a(Object(F.h)({
							tooltipId: r
						}))
					},
					d = !e.isLocked && !e.isPreferred;
				return c.a.createElement("div", {
					onMouseEnter: l,
					onMouseLeave: l,
					onClick: () => {
						d && t(e.type), e.isPreferred || s(Object(w.b)({
							achievementFlair: e
						}))
					},
					className: Object(O.a)(P.a.achievementItem, {
						[P.a.achievementItemLocked]: e.isLocked,
						[P.a.achievementItemActive]: e.isPreferred,
						[P.a.achievementItemSelectable]: d
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, c.a.createElement("div", {
					className: P.a.achievementImgWrapper
				}, c.a.createElement("img", {
					id: r,
					className: P.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), c.a.createElement("div", {
					className: P.a.achievementImgLocked
				}, c.a.createElement(A.a, {
					name: "lock",
					isFilled: !0,
					className: P.a.achievementLock
				}))), c.a.createElement("div", {
					className: P.a.achievementName
				}, c.a.createElement("span", null, e.name)), e.isLocked && c.a.createElement(N.c, {
					tooltipId: r,
					text: i,
					className: P.a.achievementTooltip
				}))
			}, {
				fbt: M
			} = a("./node_modules/fbt/lib/FbtPublic.js"), y = ({
				className: e,
				subredditId: t,
				userId: a
			}) => {
				const r = Object(f.a)(),
					i = Object(n.e)(e => Object(x.b)(e, {
						subredditId: t,
						userId: a
					})),
					l = Object(n.e)(e => Object(j.n)(e, {
						subredditId: t
					})),
					d = Object(n.e)(e => Object(x.e)(e, {
						subredditId: t,
						userId: a
					})),
					o = Object(n.d)(),
					m = e => {
						o(Object(v.d)(t, e))
					},
					u = () => {
						o(Object(h.f)("user_flair_picker"))
					};
				return Object(s.useEffect)(() => {
					Object(p.a)()
				}, []), c.a.createElement("div", {
					className: e
				}, c.a.createElement("h4", {
					className: P.a.achievementsHeading
				}, c.a.createElement(I.a, {
					className: P.a.headingPowerupsBolt
				}), M._("Achievements", null, {
					hk: "1DnL4g"
				})), c.a.createElement("p", {
					className: P.a.achievementsDescription
				}, (() => l && !d ? M._("Unlock the Powerup Supporter achievement when you Powerup this community", null, {
					hk: "2ZIvgm"
				}) : l ? M._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				}) : M._("Powerup to unlock community achievements", null, {
					hk: "1oPooH"
				}))()), c.a.createElement("div", {
					className: P.a.achievementsList
				}, i.map(e => c.a.createElement(L, {
					achievement: e,
					key: e.type,
					onSelect: m
				}))), (() => l && !d ? c.a.createElement(b.a, {
					onClick: () => {
						r(Object(_.x)()), u()
					}
				}) : l ? null : c.a.createElement(E.q, {
					priority: E.b.Primary,
					className: P.a.powerupButton,
					isFullWidth: !0,
					onClick: () => {
						r(Object(_.v)()), u()
					}
				}, M._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))())
			};
			var C = a("./src/reddit/icons/svgs/Close/index.tsx"),
				H = a("./src/reddit/components/Econ/AchievementFlair/UserFlairPreview.tsx"),
				U = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/Header.m.less"),
				S = a.n(U);
			const T = ({
				className: e,
				subredditId: t,
				userId: a,
				flairData: s,
				onModalClose: n,
				username: r
			}) => c.a.createElement("div", {
				className: Object(O.a)(S.a.container, e),
				"data-testid": "achievement-flair-modal-header"
			}, c.a.createElement(H.a, {
				className: S.a.userFlairPreview,
				subredditId: t,
				userId: a,
				username: r,
				flairData: s
			}), c.a.createElement(C.a, {
				className: S.a.closeIcon,
				onClick: n,
				"data-testid": "close-icon"
			}));
			var B = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.m.less"),
				D = a.n(B),
				J = a("./src/reddit/actions/authorFlair.ts"),
				W = a("./src/reddit/components/Flair/index.tsx"),
				q = a("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/UserFlair.m.less"),
				R = a.n(q);
			const {
				fbt: z
			} = a("./node_modules/fbt/lib/FbtPublic.js"), G = ({
				className: e,
				subredditId: t,
				flairData: a
			}) => {
				const s = Object(n.d)(),
					r = Object(f.a)(),
					i = Object(n.e)(m.j);
				return i ? c.a.createElement("div", {
					className: Object(O.a)(R.a.container, e)
				}, c.a.createElement("div", {
					className: R.a.header
				}, c.a.createElement("h4", {
					className: R.a.flairText
				}, z._("User flair", null, {
					hk: "3ToqP0"
				})), c.a.createElement(E.q, {
					className: R.a.editButton,
					priority: E.b.Plain,
					onClick: () => {
						const e = i ? Object(d.e)(i) : null;
						r(Object(w.a)()), s(Object(J.b)({
							username: e,
							subredditId: t,
							isOpenedFromAchievementsModal: !0
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, c.a.createElement(A.a, {
					name: "edit"
				}))), (null == a ? void 0 : a.applied) && a.displaySettings.isUserEnabled && c.a.createElement(W.b, {
					className: R.a.flair,
					flair: a.applied,
					forceSmallEmojis: !0
				})) : null
			};
			t.default = Object(r.a)(() => {
				const e = Object(n.d)(),
					t = Object(n.e)(m.j),
					a = Object(n.e)(o.e),
					s = Object(n.e)(e => a ? Object(u.b)(e, {
						subredditId: a.id
					}) : null),
					r = Object(n.e)(e => a ? Object(u.c)(e, {
						subredditId: a.id
					}) : null),
					v = !!s && !!r;
				return t && a ? c.a.createElement("div", {
					className: D.a.container
				}, c.a.createElement(T, {
					subredditId: a.id,
					userId: t.id,
					username: Object(d.e)(t),
					flairData: r,
					onModalClose: () => {
						e(Object(i.g)(l.a.ACHIEVEMENT_FLAIR))
					}
				}), v && c.a.createElement(G, {
					subredditId: a.id,
					flairData: r
				}), c.a.createElement(y, {
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
				achievementName: "_2RAw7XCPPgNLzOBs-_7Cix",
				footer: "_18M7nTbpMAhYLhlWT-5tla",
				scrollGradient: "_2nRTIGjTOu0IHUU0XJ6h9n",
				gradientHidden: "_3w5lLzB0F6x5aTwB7KfhJv",
				ctaButton: "D7NSPqulzWmB1gE8x95iQ"
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
				return I
			}));
			var s = a("./node_modules/react/index.js"),
				c = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/actions/gold/powerups.ts"),
				l = a("./src/reddit/components/SubredditIcon/index.tsx"),
				d = a("./src/reddit/controls/Button/index.tsx"),
				o = a("./src/reddit/helpers/trackers/userFlair.ts"),
				m = a("./src/reddit/hooks/useTracking.ts"),
				u = a("./src/reddit/selectors/gold/powerups/achievements.ts"),
				v = a("./src/reddit/selectors/subreddit.ts"),
				h = a("./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less"),
				p = a.n(h);
			const {
				fbt: b
			} = a("./node_modules/fbt/lib/FbtPublic.js"), E = ({
				className: e,
				subredditId: t,
				userId: a
			}) => {
				const h = Object(n.e)(e => Object(u.b)(e, {
						subredditId: t,
						userId: a
					})),
					E = Object(n.e)(e => Object(v.T)(e, {
						subredditId: t
					})),
					_ = Object(n.d)(),
					f = Object(m.a)(),
					[I, j] = Object(s.useState)(!1),
					x = Object(s.useRef)(null),
					O = () => {
						const e = x.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							a = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						j(a)
					};
				Object(s.useEffect)(() => {
					O()
				}, []);
				return c.a.createElement("div", {
					className: Object(r.a)(p.a.container, e)
				}, c.a.createElement("div", {
					className: p.a.header
				}, c.a.createElement(l.b, {
					className: p.a.subredditLogo,
					subredditOrProfile: E
				}), b._("{r/community} {=achievements}", [b._param("r/community", E.displayText), b._param("=achievements", c.a.createElement("span", {
					className: p.a.headerText
				}, b._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), c.a.createElement("div", {
					className: p.a.headerDelimiter
				}), c.a.createElement("div", {
					className: p.a.achievements,
					onScroll: O,
					ref: x
				}, h.map(e => !e.isLocked && c.a.createElement("div", {
					className: p.a.achievementItem,
					key: e.type
				}, c.a.createElement("div", {
					className: p.a.achievementImgWrapper
				}, c.a.createElement("img", {
					className: p.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), c.a.createElement("div", {
					className: p.a.achievementName
				}, c.a.createElement("span", null, e.name))))), c.a.createElement("div", {
					className: p.a.footer
				}, c.a.createElement("div", {
					className: Object(r.a)(p.a.scrollGradient, {
						[p.a.gradientHidden]: I
					})
				}), c.a.createElement(d.q, {
					priority: d.b.Secondary,
					className: p.a.ctaButton,
					onClick: () => {
						f(Object(o.d)()), _(Object(i.e)())
					},
					isFullWidth: !0
				}, b._("View your achievements", null, {
					hk: "2ZyIE3"
				}))))
			};
			var _ = a("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less"),
				f = a.n(_);
			const I = ({
					className: e,
					subredditId: t,
					userId: a,
					showPopupOnHover: i,
					onHover: l
				}) => {
					var d;
					const o = Object(n.e)(e => Object(u.d)(e, {
							subredditId: t,
							userId: a
						})),
						m = Object(n.e)(e => Object(u.e)(e, {
							subredditId: t,
							userId: a
						})),
						v = null === (d = Object(n.e)(e => Object(u.c)(e, {
							subredditId: t,
							userId: a
						}))) || void 0 === d ? void 0 : d.achievementTypes,
						[h, p] = Object(s.useState)(!1);
					if (!(!!o || !!m) || !v) return null;
					const b = (null == m ? void 0 : m.type) === (null == o ? void 0 : o.type) ? null : m,
						_ = 1 + (b ? 1 : 0),
						I = (null == v ? void 0 : v.length) - _;
					return c.a.createElement("span", {
						className: Object(r.a)(f.a.container, e),
						"data-testid": "achievement-flairs",
						onMouseEnter: () => {
							i && (p(!0), null == l || l())
						},
						onMouseLeave: () => {
							p(!1)
						}
					}, c.a.createElement(j, {
						achievement: b
					}), c.a.createElement(j, {
						achievement: o
					}), !!I && c.a.createElement("span", {
						className: f.a.hiddenAchievementsCount
					}, "+", I), i && h && c.a.createElement(E, {
						className: f.a.hoverPopup,
						subredditId: t,
						userId: a
					}))
				},
				j = ({
					achievement: e
				}) => e ? c.a.createElement("img", {
					alt: e.name,
					className: f.a.icon,
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
				r = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx"),
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
				const h = Object(r.e)(e => Object(m.j)(e));
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
				}, `u/${u||"username"}`), n.a.createElement(i.a, {
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
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var s = a("./node_modules/react/index.js"),
				c = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				r = a("./src/reddit/controls/Button/index.tsx"),
				i = a("./src/reddit/selectors/experiments/econ/index.ts"),
				l = a("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: d
			} = a("./node_modules/fbt/lib/FbtPublic.js"), o = ({
				className: e,
				onClick: t
			}) => {
				const a = Object(n.e)(l.t),
					s = Object(n.e)(i.h);
				return c.a.createElement(r.q, {
					priority: r.b.Primary,
					className: e,
					onClick: t,
					isFullWidth: !0
				}, (() => a ? d._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : s ? d._("Help Your Community", null, {
					hk: "2v0E8W"
				}) : d._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.29a670ac1f33098c3371.js.map