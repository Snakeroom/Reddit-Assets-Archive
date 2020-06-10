// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncementsCarousel.de8e742596eb89df6d87.js
// Retrieved at 6/10/2020, 5:40:08 PM by Reddit Dataminer v1.0.0
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
				isSelected: "_2UhFeZMzNfxreo_iGCZ8XE"
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var s = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./node_modules/react/index.js"),
				i = t.n(a),
				c = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/icons/svgs/Chevron/index.tsx"),
				r = t("./src/reddit/icons/svgs/Close/index.tsx"),
				l = (t("./node_modules/core-js/modules/es6.array.sort.js"), t("./node_modules/lodash/isEqual.js")),
				d = t.n(l),
				m = t("./node_modules/react-redux/es/index.js"),
				u = t("./src/reddit/constants/experiments.ts"),
				v = t("./src/reddit/helpers/localStorage/index.ts"),
				b = t("./src/reddit/helpers/trackers/announcement.ts"),
				x = t("./src/reddit/hooks/useTracking.ts"),
				p = t("./src/reddit/selectors/experiments/index.ts");
			const _ = e => {
				let {
					announcements: n,
					setActiveIndex: t,
					setIsHidden: s,
					setVisibleAnnouncements: i,
					visibleAnnouncements: c
				} = e;
				const o = Object(m.d)(p.a);
				Object(a.useEffect)(() => {
					const e = Object(v.e)(),
						a = n.filter(((e, n) => t => {
							if (t.experimentName) {
								const n = e.find(e => {
									let {
										name: n
									} = e;
									return n === t.experimentName
								});
								if (n && Object(u.wc)(n.variant)) return !1
							}
							return !((n[t.id] || 0) >= t.maxImpressionsCount)
						})(o, e)).slice(0, 5),
						r = [...a].sort((e => (n, t) => (e[n.id] || 0) - (e[t.id] || 0))(e))[0];
					d()(a.map(e => e.id), c.map(e => e.id)) || (i(a), t(a.indexOf(r)), s(!1))
				}, [])
			};
			var A = t("./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.m.less"),
				C = t.n(A);
			const h = i.a.memo(e => {
				let {
					announcement: n,
					className: t,
					isActive: s,
					onClick: a
				} = e;
				return i.a.createElement("a", {
					tabIndex: s ? 0 : -1,
					key: n.id,
					href: n.url,
					onClick: a,
					className: t
				}, i.a.createElement("div", {
					className: C.a.Content
				}, i.a.createElement("h3", {
					className: C.a.Title
				}, n.title), i.a.createElement("p", {
					className: C.a.Description
				}, n.description)), n.iconUrl && i.a.createElement("div", {
					className: C.a.IconDiv,
					style: {
						backgroundImage: 'url("'.concat(n.iconUrl, '")')
					}
				}))
			});
			n.default = e => {
				let {
					announcements: n
				} = e;
				const [t, l] = Object(a.useState)([]), [d, m] = Object(a.useState)(!0), [u, p] = Object(a.useState)(0);
				_({
					announcements: n,
					setActiveIndex: p,
					setIsHidden: m,
					setVisibleAnnouncements: l,
					visibleAnnouncements: t
				});
				const {
					onCarouselNavigate: A,
					isTransitionComplete: O
				} = (e => {
					let {
						activeIndex: n,
						visibleAnnouncements: t,
						setActiveIndex: s
					} = e;
					const i = Object(x.a)(),
						[c, o] = Object(a.useState)(!0),
						r = Object(a.useRef)(null);
					return {
						onCarouselNavigate: Object(a.useCallback)(e => () => {
							"next" === e && n + 1 >= t.length ? s(0) : s("prev" === e && n <= 0 ? t.length - 1 : n + ("next" === e ? 1 : -1)), i(Object(b.b)("next" === e ? "scroll_next" : "scroll_previous")), r.current && window.clearTimeout(r.current), o(!1), r.current = window.setTimeout(() => {
								o(!0)
							}, 200)
						}, [n, i, s, t]),
						isTransitionComplete: c
					}
				})({
					activeIndex: u,
					visibleAnnouncements: t,
					setActiveIndex: p
				}), j = (e => {
					let {
						setIsHidden: n,
						visibleAnnouncements: t
					} = e;
					const s = Object(x.a)();
					return Object(a.useCallback)(() => {
						n(!0), t.forEach(e => {
							const {
								id: n,
								maxImpressionsCount: t
							} = e;
							Object(v.J)(n, t)
						}), s(Object(b.b)("dismiss_all"))
					}, [t, s, n])
				})({
					visibleAnnouncements: t,
					setIsHidden: m
				}), E = (e => {
					let {
						activeIndex: n,
						setActiveIndex: t,
						visibleAnnouncements: s
					} = e;
					const i = Object(x.a)();
					return Object(a.useCallback)(() => {
						n < 0 || n >= s.length ? t(0) : i(Object(b.a)("click", s[n]))
					}, [n, i, t, s])
				})({
					activeIndex: u,
					setActiveIndex: p,
					visibleAnnouncements: t
				});
				return (e => {
					let {
						activeIndex: n,
						setActiveIndex: t,
						visibleAnnouncements: s
					} = e;
					const i = Object(x.a)();
					Object(a.useEffect)(() => {
						if (n < 0 || n >= s.length) return void t(0);
						const e = s[n],
							a = Object(v.d)(e.id);
						i(Object(b.a)("view", e)), Object(v.J)(e.id, a + 1)
					}, [n, i, t, s])
				})({
					activeIndex: u,
					setActiveIndex: p,
					visibleAnnouncements: t
				}), d ? null : i.a.createElement("div", {
					className: C.a.Container
				}, i.a.createElement("h2", {
					className: C.a.Headline
				}, s.fbt._("Updates from reddit", null, {
					hk: "1R94KF"
				})), i.a.createElement("button", {
					className: C.a.CloseBtn,
					onClick: j
				}, i.a.createElement(r.a, null)), i.a.createElement("div", {
					className: C.a.Carousel
				}, t.length > 1 && i.a.createElement("button", {
					className: C.a.LeftArrow,
					onClick: A("prev")
				}, i.a.createElement(o.a, null)), i.a.createElement("div", {
					className: C.a.AnnouncementsWrapper
				}, t.map((e, n) => i.a.createElement(h, {
					announcement: e,
					className: Object(c.a)(C.a.Announcement, {
						[C.a.isActive]: n === u,
						[C.a.prev]: t.length > 1 && 0 === u && n + 1 === t.length || n === u - 1,
						[C.a.next]: t.length > 1 && u + 1 === t.length && 0 === n || n === u + 1,
						[C.a.isTransitionComplete]: O
					}),
					isActive: n === u,
					key: e.id,
					onClick: E
				}))), t.length > 1 && i.a.createElement("button", {
					className: C.a.RightArrow,
					onClick: A("next")
				}, i.a.createElement(o.a, null))), t.length > 1 && i.a.createElement("div", {
					className: C.a.Dots
				}, t.map((e, n) => i.a.createElement("button", {
					onClick: () => p(n),
					key: "announcement-carousel-dot-".concat(n),
					className: Object(c.a)(C.a.Dot, {
						[C.a.isSelected]: n === u
					})
				}))))
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
				i = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = t.n(c);
			n.a = e => a.a.createElement("svg", {
				className: Object(i.a)(o.a.chevron, e.className),
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
//# sourceMappingURL=FeaturedLiveEntrypointAnnouncementsCarousel.de8e742596eb89df6d87.js.map