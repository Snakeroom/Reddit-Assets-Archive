// https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.a2916424ddee8b72fa93.js
// Retrieved at 6/1/2021, 11:20:05 AM by Reddit Dataminer v1.0.0
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
				achievementItemSelectable: "ZPfWWcrzSGTknVAh3PlaL",
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
				o = a("./src/reddit/selectors/platform.ts"),
				d = a("./src/reddit/selectors/user.ts"),
				m = a("./src/reddit/selectors/userFlair.ts"),
				v = a("./src/reddit/actions/economics/powerups/achievements.ts"),
				h = a("./src/reddit/controls/Button/index.tsx"),
				u = a("./src/reddit/selectors/gold/powerups/index.ts"),
				b = a("./src/reddit/selectors/gold/powerups/achievements.ts"),
				p = a("./src/lib/classNames/index.ts"),
				E = a("./src/reddit/actions/tooltip.ts"),
				_ = a("./src/reddit/components/InfoTextTooltip/index.tsx"),
				x = a("./src/reddit/icons/svgs/Lock/index.tsx"),
				f = a("./src/reddit/components/Econ/AchievementFlairModal/AchievementFlairs.m.less"),
				L = a.n(f);
			const {
				fbt: I
			} = a("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				achievement: e,
				onSelect: t
			}) => {
				const a = Object(i.d)(),
					s = `achievement-locked-${e.type}`,
					n = I._("To use this achievement, you gotta earn it!", null, {
						hk: "2RYhLB"
					}),
					r = () => {
						if (e.isLocked) return a(Object(E.h)({
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
					className: Object(p.a)(L.a.achievementItem, {
						[L.a.achievementItemLocked]: e.isLocked,
						[L.a.achievementItemActive]: e.isPreferred,
						[L.a.achievementItemSelectable]: l
					}),
					"data-testid": `af-modal-achievement-flair-${e.type}`
				}, c.a.createElement("div", {
					className: L.a.achievementImgWrapper
				}, c.a.createElement("img", {
					id: s,
					className: L.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				}), c.a.createElement("div", {
					className: L.a.achievementImgLocked
				}, c.a.createElement(x.a, {
					className: L.a.achievementLock
				}))), c.a.createElement("div", {
					className: L.a.achievementName
				}, c.a.createElement("span", null, e.name)), e.isLocked && c.a.createElement(_.c, {
					tooltipId: s,
					text: n,
					className: L.a.achievementTooltip
				}))
			}, {
				fbt: N
			} = a("./node_modules/fbt/lib/FbtPublic.js"), j = ({
				className: e,
				subredditId: t,
				userId: a
			}) => {
				const s = Object(i.e)(e => Object(b.a)(e, {
						subredditId: t,
						userId: a
					})),
					n = Object(i.e)(e => Object(u.o)(e, {
						subredditId: t
					})),
					r = Object(i.d)(),
					l = e => {
						r(Object(v.c)(t, e))
					};
				return c.a.createElement("div", {
					className: e
				}, c.a.createElement("h4", {
					className: L.a.achievementsHeading
				}, N._("Achievements", null, {
					hk: "1DnL4g"
				})), c.a.createElement("p", {
					className: L.a.achievementsDescription
				}, N._("Unlocked with Powerups! Choose the achievement you’d like to highlight.", null, {
					hk: "4iPJwf"
				})), c.a.createElement("div", {
					className: L.a.achievementsList
				}, s.map(e => c.a.createElement(g, {
					achievement: e,
					key: e.type,
					onSelect: l
				}))), !n && c.a.createElement(h.q, {
					priority: h.b.Primary,
					className: L.a.powerupButton,
					isFullWidth: !0
				}, N._("Powerup to Unlock", null, {
					hk: "M8l7D"
				})))
			};
			var O = a("./src/reddit/icons/svgs/Close/index.tsx"),
				k = a("./src/reddit/components/Econ/AchievementFlairModal/Header.m.less"),
				M = a.n(k);
			const F = () => c.a.createElement("div", {
					className: M.a.flairPreview
				}),
				A = e => c.a.createElement("div", {
					className: Object(p.a)(M.a.container, e.className)
				}, c.a.createElement(F, null), c.a.createElement(O.a, {
					className: M.a.closeIcon,
					onClick: e.onModalClose,
					"data-testid": "close-icon"
				}));
			var w = a("./src/reddit/actions/authorFlair.ts"),
				C = a("./src/reddit/components/Flair/index.tsx"),
				D = a("./src/reddit/icons/svgs/EditPencil/index.tsx"),
				P = a("./src/reddit/models/User/index.ts"),
				S = a("./src/reddit/components/Econ/AchievementFlairModal/UserFlair.m.less"),
				U = a.n(S);
			const {
				fbt: y
			} = a("./node_modules/fbt/lib/FbtPublic.js"), B = ({
				className: e,
				subredditId: t,
				flairData: a
			}) => {
				const s = Object(i.d)(),
					n = Object(i.e)(d.j);
				return n ? c.a.createElement("div", {
					className: Object(p.a)(U.a.container, e)
				}, c.a.createElement("div", {
					className: U.a.header
				}, c.a.createElement("h4", {
					className: U.a.flairText
				}, y._("User flair", null, {
					hk: "3ToqP0"
				})), c.a.createElement(h.q, {
					className: U.a.editButton,
					priority: h.b.Plain,
					onClick: () => {
						const e = n ? Object(P.e)(n) : null;
						s(Object(w.b)({
							username: e,
							subredditId: t
						}))
					},
					"data-testid": "edit-user-flair-button"
				}, c.a.createElement(D.a, {
					className: U.a.svg
				}))), (null == a ? void 0 : a.applied) && a.displaySettings.isUserEnabled && c.a.createElement(C.b, {
					className: U.a.flair,
					flair: a.applied,
					forceSmallEmojis: !0
				})) : null
			};
			var T = a("./src/reddit/components/Econ/AchievementFlairModal/index.m.less"),
				V = a.n(T);
			t.default = Object(n.a)(() => {
				const e = Object(i.d)(),
					t = Object(i.e)(e => Object(d.j)(e)),
					a = Object(i.e)(o.e),
					s = Object(i.e)(e => a ? Object(m.b)(e, {
						subredditId: a.id
					}) : null),
					n = Object(i.e)(e => a ? Object(m.c)(e, {
						subredditId: a.id
					}) : null),
					v = !!s && !!n;
				return t && a ? c.a.createElement("div", {
					className: V.a.container
				}, c.a.createElement(A, {
					onModalClose: () => {
						e(Object(r.g)(l.a.ACHIEVEMENT_FLAIR))
					}
				}), v && c.a.createElement(B, {
					subredditId: a.id,
					flairData: n
				}), c.a.createElement(j, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconAchievementFlairModal.a2916424ddee8b72fa93.js.map