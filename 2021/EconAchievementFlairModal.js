// https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.f1b4652d183a01a0c9c3.js
// Retrieved at 5/25/2021, 12:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconAchievementFlairModal"], {
		"./src/reddit/components/Econ/AchievementFlairModal/AchievementFlairs.m.less": function(e, t, a) {
			e.exports = {
				achievementsHeading: "_1kwfH-pra7amrp0m_wZxDf",
				achievementsDescription: "_2Kb7K_7LX5bBaLK4rhQD6X",
				achievementsList: "_5ploYE_oya8MlYh4Ig-rL",
				achievementItem: "_3Rqr4ZBFlDpxoxiES5X9qw",
				achievementItemLocked: "_2fKT2oTfA1oyU-mZzCtB9L",
				achievementImg: "Jc3fo7xz3NlMoPhnnc6EF",
				achievementName: "tSl0fCys7gljaF8fW8G1o",
				achievementImgLocked: "_2RrQ0ilOA1WJxZVwblDWyA",
				achievementItemActive: "_1JQluUSDLXMgDFxxB49By",
				achievementImgWrapper: "_1DbmzA3zsFW0iVEjGM0SCn",
				achievementLock: "_1feIsib_BL5trGWFMXbdOt",
				achievementTooltip: "_1sJKK4MwKWgsXiS-2GvJcw",
				powerupButton: "Kvqh4xvIZckk9yF6VwTZl",
				Icon: "XHva5rgDNUn25e8xnYIz6",
				icon: "XHva5rgDNUn25e8xnYIz6",
				isLeft: "_3p7e0RvikU4VX6ohk003YM",
				isRight: "g2VGN45dEhVimslpXSxbI",
				active: "_3oV6Z7zYcM2l6JbJc0o95T"
			}
		},
		"./src/reddit/components/Econ/AchievementFlairModal/Header.m.less": function(e, t, a) {
			e.exports = {
				container: "_1E3LVViw7qVfg3d8lF_9mW",
				flairPreview: "_2c-Hq9uVjUZ7petNVTpC-5",
				closeIcon: "_1P5skaUcBWuHeEYCf2sAs2"
			}
		},
		"./src/reddit/components/Econ/AchievementFlairModal/UserFlair.m.less": function(e, t, a) {
			e.exports = {
				container: "_1o7YKp29tEhdV_ssSbyBHi",
				header: "_3JcVg51RLYedFAfq2GUg2I",
				flairText: "_11wC0M8vUhXMrxTMtcdttU",
				editButton: "_40lOYdZKD201SS9kmOhkr",
				svg: "_2MlWLb_0hbzpP4W3d20J9l",
				flair: "_1cD8GS2H_31Nhfgi-MosZn"
			}
		},
		"./src/reddit/components/Econ/AchievementFlairModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2IJP2Y03Qtz6PjPHBzsX7"
			}
		},
		"./src/reddit/components/Econ/AchievementFlairModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/react/index.js"),
				c = a.n(s),
				i = a("./node_modules/react-redux/es/index.js"),
				n = a("./src/higherOrderComponents/asModal/index.tsx"),
				r = a("./src/reddit/actions/modal.ts"),
				l = a("./src/reddit/constants/modals.ts"),
				d = a("./src/reddit/selectors/platform.ts"),
				o = a("./src/reddit/selectors/user.ts"),
				m = a("./src/reddit/selectors/userFlair.ts"),
				v = a("./src/reddit/controls/Button/index.tsx"),
				h = a("./src/reddit/selectors/gold/powerups/index.ts"),
				u = a("./src/reddit/selectors/gold/powerups/achievements.ts"),
				b = a("./src/lib/classNames/index.ts"),
				p = a("./src/reddit/actions/tooltip.ts"),
				E = a("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = a("./src/reddit/icons/svgs/Lock/index.tsx"),
				x = a("./src/reddit/components/Econ/AchievementFlairModal/AchievementFlairs.m.less"),
				f = a.n(x);
			const {
				fbt: L
			} = a("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				achievement: e
			}) => {
				const t = Object(i.d)(),
					a = `achievement-locked-${e.type}`,
					s = L._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}),
					n = () => {
						if (e.isLocked) return t(Object(p.h)({
							tooltipId: a
						}))
					};
				return c.a.createElement("div", {
					onMouseEnter: n,
					onMouseLeave: n,
					className: Object(b.a)(f.a.achievementItem, {
						[f.a.achievementItemLocked]: e.isLocked,
						[f.a.achievementItemActive]: e.isPreferred
					})
				}, c.a.createElement("div", {
					className: f.a.achievementImgWrapper
				}, c.a.createElement("img", {
					id: a,
					className: f.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), c.a.createElement("div", {
					className: f.a.achievementImgLocked
				}, c.a.createElement(_.a, {
					className: f.a.achievementLock
				}))), c.a.createElement("div", {
					className: f.a.achievementName
				}, c.a.createElement("span", null, e.name)), e.isLocked && c.a.createElement(E.c, {
					tooltipId: a,
					text: s,
					className: f.a.achievementTooltip
				}))
			}, {
				fbt: I
			} = a("./node_modules/fbt/lib/FbtPublic.js"), N = ({
				className: e,
				subredditId: t,
				userId: a
			}) => {
				const s = Object(i.e)(e => Object(u.a)(e, {
						subredditId: t,
						userId: a
					})),
					n = Object(i.e)(e => Object(h.o)(e, {
						subredditId: t
					}));
				return c.a.createElement("div", {
					className: e
				}, c.a.createElement("h4", {
					className: f.a.achievementsHeading
				}, I._("Achievements", null, {
					hk: "1DnL4g"
				})), c.a.createElement("p", {
					className: f.a.achievementsDescription
				}, I._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				})), c.a.createElement("div", {
					className: f.a.achievementsList
				}, s.map(e => c.a.createElement(g, {
					achievement: e,
					key: e.type
				}))), !n && c.a.createElement(v.q, {
					priority: v.b.Primary,
					className: f.a.powerupButton,
					isFullWidth: !0
				}, I._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))
			};
			var j = a("./src/reddit/icons/svgs/Close/index.tsx"),
				M = a("./src/reddit/components/Econ/AchievementFlairModal/Header.m.less"),
				O = a.n(M);
			const F = () => c.a.createElement("div", {
					className: O.a.flairPreview
				}),
				k = e => c.a.createElement("div", {
					className: Object(b.a)(O.a.container, e.className)
				}, c.a.createElement(F, null), c.a.createElement(j.a, {
					className: O.a.closeIcon,
					onClick: e.onModalClose,
					"data-testid": "close-icon"
				}));
			var A = a("./src/reddit/actions/authorFlair.ts"),
				w = a("./src/reddit/components/Flair/index.tsx"),
				C = a("./src/reddit/icons/svgs/EditPencil/index.tsx"),
				D = a("./src/reddit/models/User/index.ts"),
				P = a("./src/reddit/components/Econ/AchievementFlairModal/UserFlair.m.less"),
				U = a.n(P);
			const {
				fbt: B
			} = a("./node_modules/fbt/lib/FbtPublic.js"), y = ({
				className: e,
				subredditId: t,
				flairData: a
			}) => {
				const s = Object(i.d)(),
					n = Object(i.e)(o.i);
				return n ? c.a.createElement("div", {
					className: Object(b.a)(U.a.container, e)
				}, c.a.createElement("div", {
					className: U.a.header
				}, c.a.createElement("h4", {
					className: U.a.flairText
				}, B._("User flair", null, {
					hk: "3ToqP0"
				})), c.a.createElement(v.q, {
					className: U.a.editButton,
					priority: v.b.Plain,
					onClick: () => {
						const e = n ? Object(D.e)(n) : null;
						s(Object(A.b)({
							username: e,
							subredditId: t
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, c.a.createElement(C.a, {
					className: U.a.svg
				}))), (null == a ? void 0 : a.applied) && a.displaySettings.isUserEnabled && c.a.createElement(w.b, {
					className: U.a.flair,
					flair: a.applied,
					forceSmallEmojis: !0
				})) : null
			};
			var H = a("./src/reddit/components/Econ/AchievementFlairModal/index.m.less"),
				T = a.n(H);
			t.default = Object(n.a)(() => {
				const e = Object(i.d)(),
					t = Object(i.e)(e => Object(o.i)(e)),
					a = Object(i.e)(d.e),
					s = Object(i.e)(e => a ? Object(m.b)(e, {
						subredditId: a.id
					}) : null),
					n = Object(i.e)(e => a ? Object(m.c)(e, {
						subredditId: a.id
					}) : null),
					v = !!s && !!n;
				return t && a ? c.a.createElement("div", {
					className: T.a.container
				}, c.a.createElement(k, {
					onModalClose: () => {
						e(Object(r.g)(l.a.ACHIEVEMENT_FLAIR))
					}
				}), v && c.a.createElement(y, {
					subredditId: a.id,
					flairData: n
				}), c.a.createElement(N, {
					subredditId: a.id,
					userId: t.id
				})) : null
			})
		},
		"./src/reddit/icons/svgs/EditPencil/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				c = a.n(s);
			t.a = e => c.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 14 14",
				xmlns: "http://www.w3.org/2000/svg",
				version: "1.1"
			}, c.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), c.a.createElement("g", null, c.a.createElement("path", {
				fill: "inherit",
				d: "M8.1168,3.0832 L10.9168,5.8832 C11.0728,6.0392 11.0728,6.2928 10.9168,6.4488 L4.0824,13.2832 C4.0072,13.3584 3.9056,13.4 3.8,13.4 L1,13.4 C0.7784,13.4 0.6,13.2216 0.6,13 L0.6,10.2 C0.6,10.0944 0.6416,9.9928 0.7168,9.9176 L7.5512,3.0832 C7.7072,2.9272 7.9608,2.9272 8.1168,3.0832 Z M13.5168,2.152 C13.9848,2.62 13.9848,3.3808 13.5168,3.8488 L12.048,5.3176 C11.9696,5.396 11.8672,5.4352 11.7656,5.4352 C11.6632,5.4352 11.5608,5.396 11.4824,5.3176 L8.6824,2.5176 C8.5264,2.3616 8.5264,2.108 8.6824,1.952 L10.1512,0.4832 C10.6192,0.0152 11.38,0.0152 11.848,0.4832 L13.5168,2.152 Z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.f1b4652d183a01a0c9c3.js.map