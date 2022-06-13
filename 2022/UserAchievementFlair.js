// https://www.redditstatic.com/desktop2x/UserAchievementFlair.e314cc544c08da94fcad.js
// Retrieved at 6/13/2022, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UserAchievementFlair"], {
		"./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less": function(e, t, r) {
			e.exports = {
				container: "ciVctEeLKylCRejTc9u2e",
				header: "_2EZJLt05_wdk_osIo3latc",
				powerupsLogo: "_2vohvd3sMxCQYU4XZok__A",
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
				n = r.n(a),
				l = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/actions/gold/powerups.ts"),
				c = r("./src/reddit/components/ScrollGradient/index.tsx"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				u = r("./src/reddit/hooks/useScrollGradient.ts"),
				m = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				b = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less"),
				f = r.n(h);
			const {
				fbt: _
			} = r("./node_modules/fbt/lib/FbtPublic.js"), E = e => {
				let {
					className: t,
					subredditId: r,
					userId: h
				} = e;
				const E = Object(l.e)(e => Object(b.d)(e, {
						subredditId: r,
						userId: h
					})),
					j = Object(l.e)(e => Object(v.U)(e, {
						subredditId: r
					})),
					x = Object(l.d)(),
					I = Object(m.a)(),
					{
						container: g,
						isScrollGradientVisible: w,
						calculateGradientVisibility: N
					} = Object(u.b)(!1);
				Object(a.useEffect)(() => {
					N()
				}, [N]);
				return n.a.createElement("div", {
					className: Object(s.a)(f.a.container, t)
				}, n.a.createElement("div", {
					className: f.a.header
				}, n.a.createElement(p.a, {
					className: f.a.powerupsLogo
				}), _._("{r/community} {=achievements}", [_._param("r/community", j.displayText), _._param("=achievements", n.a.createElement("span", {
					className: f.a.headerText
				}, _._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), n.a.createElement("div", {
					className: f.a.headerDelimiter
				}), n.a.createElement("div", {
					className: f.a.flairs,
					onScroll: N,
					ref: g
				}, E.map(e => n.a.createElement(O, {
					flair: e,
					key: e.type
				}))), n.a.createElement("div", {
					className: f.a.footer
				}, n.a.createElement(c.a, {
					className: f.a.scrollGradient,
					isVisible: w
				}), n.a.createElement(o.t, {
					priority: o.c.Secondary,
					className: f.a.ctaButton,
					onClick: () => {
						I(Object(d.a)()), x(Object(i.f)())
					},
					isFullWidth: !0
				}, _._("View your achievements", null, {
					hk: "2ZyIE3"
				}))))
			}, O = e => {
				let {
					flair: t
				} = e;
				return n.a.createElement("div", {
					className: f.a.flairItem,
					"data-testid": "powerups-flair-preview"
				}, n.a.createElement("div", {
					className: f.a.flairImgWrapper
				}, n.a.createElement("img", {
					className: f.a.flairImg,
					src: t.icon.url,
					alt: t.name
				})), n.a.createElement("div", {
					className: f.a.flairName
				}, n.a.createElement("span", null, t.name)))
			};
			var j = r("./src/reddit/selectors/experiments/econ/index.ts"),
				x = r("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.m.less"),
				I = r.n(x);
			const g = e => {
				let {
					achievement: t
				} = e;
				return t ? n.a.createElement("img", {
					alt: t.name,
					className: I.a.icon,
					src: t.icon.url
				}) : null
			};
			t.default = e => {
				let {
					className: t,
					subredditId: r,
					userId: i,
					showPopupOnHover: c,
					onHover: o
				} = e;
				const d = Object(l.e)(e => Object(b.g)(e, {
						subredditId: r,
						userId: i
					})),
					u = Object(l.e)(e => Object(b.j)(e, {
						subredditId: r,
						userId: i
					})),
					m = Object(l.e)(e => Object(b.f)(e, {
						subredditId: r,
						userId: i
					})),
					[p, v] = Object(a.useState)(!1);
				if (Object(l.e)(e => Object(b.e)(e, {
						subredditId: r,
						userId: i
					}) && Object(j.h)(e))) return null;
				const h = m ? [u, ...m.achievementTypes].filter(Boolean) : null;
				if (!(!!d || !!u) || !h) return null;
				const f = (null == u ? void 0 : u.type) === (null == d ? void 0 : d.type) ? null : u,
					_ = (f ? 1 : 0) + (d ? 1 : 0),
					O = (null == h ? void 0 : h.length) - _;
				return n.a.createElement("span", {
					className: Object(s.a)(I.a.container, t),
					"data-testid": "achievement-flairs",
					onMouseEnter: () => {
						c && (v(!0), null == o || o())
					},
					onMouseLeave: () => {
						v(!1)
					}
				}, n.a.createElement(g, {
					achievement: f
				}), n.a.createElement(g, {
					achievement: d
				}), !!O && n.a.createElement("span", {
					className: I.a.hiddenAchievementsCount
				}, "+", O), c && p && n.a.createElement(E, {
					className: I.a.hoverPopup,
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
				return c
			}));
			var s = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				n = r.n(a),
				l = r("./src/reddit/components/ScrollGradient/index.m.less"),
				i = r.n(l);
			const c = e => {
				let {
					className: t,
					isVisible: r
				} = e;
				return n.a.createElement("div", {
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
				return c
			}));
			var s = r("./src/reddit/helpers/flair.ts"),
				a = r("./src/reddit/selectors/comments.ts"),
				n = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				l = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, r) => i => {
					const c = Object(a.e)(i, {
							commentId: e
						}),
						o = Object(n.g)(i, {
							subredditId: t,
							userId: r
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...l.n(i),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == c ? void 0 : c.templateId,
							title: c ? Object(s.g)(c) : void 0,
							achievementFlairId: null == o ? void 0 : o.type,
							achievementFlairTitle: null == o ? void 0 : o.name
						}
					}
				},
				c = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...l.n(e)
				})
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			var s, a = r("./node_modules/react/index.js");

			function n(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Bottom;
				const [r, n] = Object(a.useState)(e), l = Object(a.useRef)(null);
				return {
					container: l,
					isScrollGradientVisible: r,
					calculateGradientVisibility: () => {
						const e = l.current;
						if (!e) return;
						const r = e.getBoundingClientRect().height,
							{
								scrollHeight: a,
								scrollTop: i
							} = e,
							c = Math.ceil(i + r) >= a,
							o = Math.ceil(r - i) >= a,
							d = t === s.Bottom ? c : o;
						n(!d)
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UserAchievementFlair.e314cc544c08da94fcad.js.map