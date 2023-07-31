// https://www.redditstatic.com/desktop2x/UserAchievementFlair.cc8e987f20c6635be9eb.js
// Retrieved at 7/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UserAchievementFlair"], {
		"./src/reddit/actions/gold/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/reddit/actions/login.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/constants/modals.ts"),
				n = r("./src/reddit/selectors/user.ts");
			const i = () => async (e, t) => {
				const r = t();
				return Object(n.m)(r) ? e(Object(a.h)(c.a.ACHIEVEMENT_FLAIR)) : e(Object(s.openLoginModal)())
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less": function(e, t, r) {
			e.exports = {
				container: "ciVctEeLKylCRejTc9u2e",
				header: "_2EZJLt05_wdk_osIo3latc",
				headerText: "_3yFC4AlORm5Ql4AnP3tO5C",
				headerDelimiter: "GMu2Q_kdqb93PfujN_OOl",
				flairs: "_2gSXbxrVWkQzb3nXCaQkFh",
				flairItem: "_3pA5vkTP_ON_VYoG5WY7C8",
				flairImgWrapper: "_3rkJmlv7uPJ7-MXHuj6JR1",
				flairImg: "_3YgkxQ3fxaRYFvsTInqamE",
				flairName: "JwJGr7w5_BCdexRK2Ge1v",
				footer: "kXcPoSA0ho3o1nH-mYqEV",
				scrollGradient: "_1XmrOUyJINsGbV1Emy_6I0",
				ctaButton: "_1q2lrbLX6F7HH2qBbvitLG"
			}
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
			r.r(t);
			var s = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				c = r.n(a),
				n = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/actions/gold/powerups.ts"),
				l = r("./src/reddit/components/ScrollGradient/index.tsx"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				u = r("./src/reddit/hooks/useScrollGradient.ts"),
				m = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less"),
				v = r.n(f);
			const {
				fbt: h
			} = r("./node_modules/fbt/lib/FbtPublic.js"), _ = e => {
				let {
					className: t,
					subredditId: r,
					userId: f
				} = e;
				const _ = Object(n.e)(e => Object(p.b)(e, {
						subredditId: r,
						userId: f
					})),
					O = Object(n.e)(e => Object(b.X)(e, {
						subredditId: r
					})),
					j = Object(n.d)(),
					I = Object(m.a)(),
					{
						container: N,
						isScrollGradientVisible: x,
						calculateGradientVisibility: g
					} = Object(u.a)(!1);
				Object(a.useEffect)(() => {
					g()
				}, [g]);
				return c.a.createElement("div", {
					className: Object(s.a)(v.a.container, t)
				}, c.a.createElement("div", {
					className: v.a.header
				}, h._("{r/community} {=achievements}", [h._param("r/community", O.displayText), h._param("=achievements", c.a.createElement("span", {
					className: v.a.headerText
				}, h._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), c.a.createElement("div", {
					className: v.a.headerDelimiter
				}), c.a.createElement("div", {
					className: v.a.flairs,
					onScroll: g,
					ref: N
				}, _.map(e => c.a.createElement(E, {
					flair: e,
					key: e.type
				}))), c.a.createElement("div", {
					className: v.a.footer
				}, c.a.createElement(l.a, {
					className: v.a.scrollGradient,
					isVisible: x
				}), c.a.createElement(o.t, {
					priority: o.c.Secondary,
					className: v.a.ctaButton,
					onClick: () => {
						I(Object(d.a)()), j(Object(i.a)())
					},
					isFullWidth: !0
				}, h._("View your achievements", null, {
					hk: "2ZyIE3"
				}))))
			}, E = e => {
				let {
					flair: t
				} = e;
				return c.a.createElement("div", {
					className: v.a.flairItem,
					"data-testid": "powerups-flair-preview"
				}, c.a.createElement("div", {
					className: v.a.flairImgWrapper
				}, c.a.createElement("img", {
					className: v.a.flairImg,
					src: t.icon.url,
					alt: t.name
				})), c.a.createElement("div", {
					className: v.a.flairName
				}, c.a.createElement("span", null, t.name)))
			};
			var O = r("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.m.less"),
				j = r.n(O);
			const I = e => {
				let {
					achievement: t
				} = e;
				return t ? c.a.createElement("img", {
					alt: t.name,
					className: j.a.icon,
					src: t.icon.url
				}) : null
			};
			t.default = e => {
				let {
					className: t,
					subredditId: r,
					userId: i,
					showPopupOnHover: l,
					onHover: o
				} = e;
				const d = Object(n.e)(e => Object(p.f)(e, {
						subredditId: r,
						userId: i
					})),
					u = Object(n.e)(e => Object(p.e)(e, {
						subredditId: r,
						userId: i
					})),
					[m, b] = Object(a.useState)(!1);
				if (Object(n.e)(e => Object(p.d)(e, {
						subredditId: r,
						userId: i
					}))) return null;
				const f = u ? u.achievementTypes.filter(Boolean) : null;
				if (!!!d || !f) return null;
				const v = d ? 1 : 0,
					h = (null == f ? void 0 : f.length) - v;
				return c.a.createElement("span", {
					className: Object(s.a)(j.a.container, t),
					"data-testid": "achievement-flairs",
					onMouseEnter: () => {
						l && (b(!0), null == o || o())
					},
					onMouseLeave: () => {
						b(!1)
					}
				}, c.a.createElement(I, {
					achievement: d
				}), !!h && c.a.createElement("span", {
					className: j.a.hiddenAchievementsCount
				}, "+", h), l && m && c.a.createElement(_, {
					className: j.a.hoverPopup,
					subredditId: r,
					userId: i
				}))
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
				return l
			}));
			var s = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				c = r.n(a),
				n = r("./src/reddit/components/ScrollGradient/index.m.less"),
				i = r.n(n);
			const l = e => {
				let {
					className: t,
					isVisible: r
				} = e;
				return c.a.createElement("div", {
					className: Object(s.a)(i.a.gradient, t, {
						[i.a.visible]: r
					})
				})
			}
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return l
			}));
			var s = r("./src/reddit/helpers/flair.ts"),
				a = r("./src/reddit/selectors/comments.ts"),
				c = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, r) => i => {
					const l = Object(a.e)(i, {
							commentId: e
						}),
						o = Object(c.f)(i, {
							subredditId: t,
							userId: r
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...n.q(i),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == l ? void 0 : l.templateId,
							title: l ? Object(s.g)(l) : void 0,
							achievementFlairId: null == o ? void 0 : o.type,
							achievementFlairTitle: null == o ? void 0 : o.name
						}
					}
				},
				l = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...n.q(e)
				})
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s, a = r("./node_modules/react/index.js");

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Bottom;
				const [r, c] = Object(a.useState)(e), n = Object(a.useRef)(null);
				return {
					container: n,
					isScrollGradientVisible: r,
					calculateGradientVisibility: () => {
						const e = n.current;
						if (!e) return;
						const r = e.getBoundingClientRect().height,
							{
								scrollHeight: a,
								scrollTop: i
							} = e,
							l = Math.ceil(i + r) >= a,
							o = Math.ceil(r - i) >= a,
							d = t === s.Bottom ? l : o;
						c(!d)
					}
				}
			}! function(e) {
				e.Top = "top", e.Bottom = "bottom"
			}(s || (s = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UserAchievementFlair.cc8e987f20c6635be9eb.js.map