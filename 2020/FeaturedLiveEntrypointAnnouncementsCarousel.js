// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncementsCarousel.02da5b7207c1f29ad891.js
// Retrieved at 9/30/2020, 6:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FeaturedLiveEntrypointAnnouncementsCarousel"], {
		"./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.m.less": function(e, n, t) {
			e.exports = {
				Container: "_3VqiDbufgl9_EiV_tk9L6u",
				container: "_3VqiDbufgl9_EiV_tk9L6u",
				Headline: "Ri-SfOqCu4V0RDdOCGIP5",
				headline: "Ri-SfOqCu4V0RDdOCGIP5",
				CloseBtn: "BpfzGt7sLyJivKvEjhQ_2",
				closeBtn: "BpfzGt7sLyJivKvEjhQ_2",
				LeftArrow: "_1gaK2hxMw53ZSTs937wMrD",
				leftArrow: "_1gaK2hxMw53ZSTs937wMrD",
				RightArrow: "_3ZpuC9jO9qer45AcW7OPyl",
				rightArrow: "_3ZpuC9jO9qer45AcW7OPyl",
				ArrowPlaceholder: "nNNmQSZ8xMuywgx-d8rou",
				arrowPlaceholder: "nNNmQSZ8xMuywgx-d8rou",
				Carousel: "JQAdKlKJiSg11MwqYiIYh",
				carousel: "JQAdKlKJiSg11MwqYiIYh",
				AnnouncementsWrapper: "WxwLM7DpWUMxqzjI5Voo0",
				announcementsWrapper: "WxwLM7DpWUMxqzjI5Voo0",
				Announcement: "_28H8vSPbzoYJDoFfwFJnYN",
				announcement: "_28H8vSPbzoYJDoFfwFJnYN",
				Content: "uRAOo8WM1o-uLRB4A1ICG",
				content: "uRAOo8WM1o-uLRB4A1ICG",
				Title: "_2kQHCzdwbwXs8DKZ0KmhwB",
				title: "_2kQHCzdwbwXs8DKZ0KmhwB",
				Description: "_3dekbEWr8ArBpG1O1v1NGQ",
				description: "_3dekbEWr8ArBpG1O1v1NGQ",
				IconDiv: "_1gmLIgFD_banKdG2iB5aOc",
				iconDiv: "_1gmLIgFD_banKdG2iB5aOc",
				isActive: "_3i8KqqBirs9EBhAQeUrIDl",
				isTransitionComplete: "yCt3SeGGaSPLU9iCXZj2W",
				next: "_3ruGFBOaJA55DGZ9erNCnT",
				prev: "_Ici1ejHKQy-HPH0NpJH1",
				Dots: "_12W8BhV2aNoJHzrMrj6_RF",
				dots: "_12W8BhV2aNoJHzrMrj6_RF",
				Dot: "_2sCy3qeDb41KIRUTCTWlYa",
				dot: "_2sCy3qeDb41KIRUTCTWlYa",
				isSelected: "_2UhFeZMzNfxreo_iGCZ8XE",
				DotsPlaceholder: "_2qhjJW1EU49TAaCWKVI6RY",
				dotsPlaceholder: "_2qhjJW1EU49TAaCWKVI6RY"
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			t("./node_modules/core-js/modules/es6.regexp.split.js"), t("./node_modules/core-js/modules/es6.symbol.js");
			var s = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./node_modules/react/index.js"),
				o = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				r = t("./src/reddit/controls/InternalLink/index.tsx"),
				i = t("./src/reddit/icons/svgs/Chevron/index.tsx"),
				l = t("./src/reddit/icons/svgs/Close/index.tsx"),
				d = (t("./node_modules/core-js/modules/es6.array.sort.js"), t("./node_modules/lodash/isEqual.js")),
				u = t.n(d),
				m = t("./node_modules/react-redux/es/index.js"),
				v = t("./src/reddit/constants/experiments.ts"),
				b = t("./src/reddit/helpers/localStorage/index.ts"),
				p = t("./src/reddit/selectors/telemetry.ts");
			const x = (e, n) => {
					let {
						id: t,
						title: s,
						description: a
					} = n;
					return n => Object.assign({
						source: "announcement",
						action: e,
						noun: "announcement",
						liveThread: {
							id: t,
							isAnnouncement: !0
						},
						announcement: {
							id: t,
							title: "function" == typeof s ? s() : s,
							body: "function" == typeof a ? a() : a || ""
						}
					}, Object(p.defaults)(n))
				},
				h = e => n => Object.assign({
					source: "announcement",
					action: e,
					noun: "announcement"
				}, Object(p.defaults)(n));
			var A = t("./src/reddit/hooks/useTracking.ts"),
				_ = t("./src/reddit/selectors/experiments/index.ts");
			const O = e => {
				let {
					announcements: n,
					setActiveIndex: t,
					setIsHidden: s,
					setVisibleAnnouncements: o,
					visibleAnnouncements: c
				} = e;
				const r = Object(m.d)(_.a);
				Object(a.useEffect)(() => {
					const e = Object(b.e)(),
						a = n.filter(((e, n) => t => {
							if (t.experimentName) {
								const n = e[t.experimentName.toLowerCase()];
								if (n && Object(v.Bc)(n.variant)) return !1
							}
							return !((n[t.id] || 0) >= t.maxImpressionsCount)
						})(r, e)).slice(0, 5),
						i = [...a].sort((e => (n, t) => (e[n.id] || 0) - (e[t.id] || 0))(e))[0];
					u()(a.map(e => e.id), c.map(e => e.id)) || (o(a), t(a.indexOf(i)), s(!1))
				}, [])
			};
			var C = t("./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.m.less"),
				j = t.n(C);

			function f() {
				return (f = Object.assign || function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, n) {
				var t = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && n.indexOf(s) < 0 && (t[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) n.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (t[s[a]] = e[s[a]])
				}
				return t
			};
			const E = o.a.memo(e => {
					let {
						announcement: n,
						className: t,
						isActive: s,
						onClick: a
					} = e;
					return o.a.createElement(w, {
						announcement: n,
						tabIndex: s ? 0 : -1,
						key: n.id,
						to: n.url,
						onClick: a,
						className: t
					}, o.a.createElement("div", {
						className: j.a.Content
					}, o.a.createElement("h3", {
						className: j.a.Title
					}, n.title), o.a.createElement("p", {
						className: j.a.Description
					}, n.description)), n.iconUrl && o.a.createElement("div", {
						className: j.a.IconDiv,
						style: {
							backgroundImage: 'url("'.concat(n.iconUrl, '")')
						}
					}))
				}),
				w = o.a.memo(e => {
					var {
						announcement: n,
						children: t,
						to: s
					} = e, a = g(e, ["announcement", "children", "to"]);
					const c = n.url.split("reddit.com");
					return c.length > 1 ? o.a.createElement(r.a, f({
						to: c[1]
					}, a), t) : o.a.createElement("a", f({
						href: n.url
					}, a), t)
				});
			n.default = e => {
				let {
					announcements: n
				} = e;
				const [t, r] = Object(a.useState)([]), [d, u] = Object(a.useState)(!0), [m, v] = Object(a.useState)(0);
				O({
					announcements: n,
					setActiveIndex: v,
					setIsHidden: u,
					setVisibleAnnouncements: r,
					visibleAnnouncements: t
				});
				const {
					onCarouselNavigate: p,
					isTransitionComplete: _
				} = (e => {
					let {
						activeIndex: n,
						visibleAnnouncements: t,
						setActiveIndex: s
					} = e;
					const o = Object(A.a)(),
						[c, r] = Object(a.useState)(!0),
						i = Object(a.useRef)(null);
					return {
						onCarouselNavigate: Object(a.useCallback)(e => () => {
							"next" === e && n + 1 >= t.length ? s(0) : s("prev" === e && n <= 0 ? t.length - 1 : n + ("next" === e ? 1 : -1)), o(h("next" === e ? "scroll_next" : "scroll_previous")), i.current && window.clearTimeout(i.current), r(!1), i.current = window.setTimeout(() => {
								r(!0)
							}, 200)
						}, [n, o, s, t]),
						isTransitionComplete: c
					}
				})({
					activeIndex: m,
					visibleAnnouncements: t,
					setActiveIndex: v
				}), C = (e => {
					let {
						setIsHidden: n,
						visibleAnnouncements: t
					} = e;
					const s = Object(A.a)();
					return Object(a.useCallback)(() => {
						n(!0), t.forEach(e => {
							const {
								id: n,
								maxImpressionsCount: t
							} = e;
							Object(b.N)(n, t)
						}), s(h("dismiss_all"))
					}, [t, s, n])
				})({
					visibleAnnouncements: t,
					setIsHidden: u
				}), f = (e => {
					let {
						activeIndex: n,
						setActiveIndex: t,
						visibleAnnouncements: s
					} = e;
					const o = Object(A.a)();
					return Object(a.useCallback)(() => {
						n < 0 || n >= s.length ? t(0) : o(x("click", s[n]))
					}, [n, o, t, s])
				})({
					activeIndex: m,
					setActiveIndex: v,
					visibleAnnouncements: t
				});
				return (e => {
					let {
						activeIndex: n,
						setActiveIndex: t,
						visibleAnnouncements: s
					} = e;
					const o = Object(A.a)();
					Object(a.useEffect)(() => {
						if (n < 0 || n >= s.length) return void t(0);
						const e = s[n],
							a = Object(b.d)(e.id);
						o(x("view", e)), Object(b.N)(e.id, a + 1)
					}, [n, o, t, s])
				})({
					activeIndex: m,
					setActiveIndex: v,
					visibleAnnouncements: t
				}), d ? null : o.a.createElement("div", {
					className: j.a.Container
				}, o.a.createElement("h2", {
					className: j.a.Headline
				}, s.fbt._("Updates from reddit", null, {
					hk: "1R94KF"
				})), o.a.createElement("button", {
					className: j.a.CloseBtn,
					onClick: C
				}, o.a.createElement(l.a, null)), o.a.createElement("div", {
					className: j.a.Carousel
				}, t.length > 1 ? o.a.createElement("button", {
					className: j.a.LeftArrow,
					onClick: p("prev")
				}, o.a.createElement(i.a, null)) : o.a.createElement("div", {
					className: j.a.ArrowPlaceholder
				}), o.a.createElement("div", {
					className: j.a.AnnouncementsWrapper
				}, t.map((e, n) => o.a.createElement(E, {
					announcement: e,
					className: Object(c.a)(j.a.Announcement, {
						[j.a.isActive]: n === m,
						[j.a.prev]: t.length > 1 && 0 === m && n + 1 === t.length || n === m - 1,
						[j.a.next]: t.length > 1 && m + 1 === t.length && 0 === n || n === m + 1,
						[j.a.isTransitionComplete]: _
					}),
					isActive: n === m,
					key: e.id,
					onClick: f
				}))), t.length > 1 ? o.a.createElement("button", {
					className: j.a.RightArrow,
					onClick: p("next")
				}, o.a.createElement(i.a, null)) : o.a.createElement("div", {
					className: j.a.ArrowPlaceholder
				})), t.length > 1 ? o.a.createElement("div", {
					className: j.a.Dots
				}, t.map((e, n) => o.a.createElement("button", {
					onClick: () => v(n),
					key: "announcement-carousel-dot-".concat(n),
					className: Object(c.a)(j.a.Dot, {
						[j.a.isSelected]: n === m
					})
				}))) : o.a.createElement("div", {
					className: j.a.DotsPlaceholder
				}))
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, n, t) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, n, t) {
			"use strict";
			var s = t("./node_modules/react/index.js"),
				a = t.n(s),
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/icons/svgs/Chevron/index.m.less"),
				r = t.n(c);
			n.a = e => a.a.createElement("svg", {
				className: Object(o.a)(r.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, a.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), a.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncementsCarousel.02da5b7207c1f29ad891.js.map