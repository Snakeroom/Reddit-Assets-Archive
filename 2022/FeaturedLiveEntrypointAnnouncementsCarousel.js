// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncementsCarousel.567bdc8db276a94e9748.js
// Retrieved at 10/26/2022, 9:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FeaturedLiveEntrypointAnnouncementsCarousel"], {
		"./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.m.less": function(e, t, n) {
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
				LoadingIndicator: "_3ERp7BA69QHx5yO7JpiNpE",
				loadingIndicator: "_3ERp7BA69QHx5yO7JpiNpE",
				gradientAnimation: "_20JTwVNMZBAHbVJmjxLZMw",
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
		"./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				d = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/js-cookie/dist/js.cookie.js")),
				m = n.n(d),
				u = n("./node_modules/lodash/isEqual.js"),
				b = n.n(u),
				v = n("./src/lib/constants/index.ts"),
				A = n("./src/reddit/constants/cookie.ts"),
				p = n("./src/reddit/constants/experiments.ts"),
				_ = n("./src/reddit/helpers/localStorage/index.ts"),
				h = n("./src/reddit/selectors/telemetry.ts");
			const x = (e, t) => {
					let {
						id: n,
						title: s,
						description: a
					} = t;
					return t => ({
						source: "announcement",
						action: e,
						noun: "announcement",
						liveThread: {
							id: n,
							isAnnouncement: !0
						},
						announcement: {
							id: n,
							title: "function" == typeof s ? s() : s,
							body: "function" == typeof a ? a() : a || ""
						},
						...Object(h.o)(t)
					})
				},
				O = e => t => ({
					source: "announcement",
					action: e,
					noun: "announcement",
					...Object(h.o)(t)
				});
			var j = n("./src/reddit/hooks/useTracking.ts"),
				C = n("./src/reddit/selectors/experiments/index.ts");
			const E = e => {
					const t = new Date;
					t.setMonth(t.getMonth() + 1), m.a.set(A.h, e, {
						...v.F,
						expires: t
					})
				},
				g = (e, t) => n => {
					if (n.experimentName) {
						const t = e[n.experimentName.toLowerCase()];
						if (t && Object(p.zg)(t.variant)) return !1
					}
					return !((t[n.id] || 0) >= n.maxImpressionsCount)
				};
			var N = n("./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.m.less"),
				f = n.n(N);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = o.a.memo(e => {
					let {
						announcement: t,
						className: n,
						isActive: s,
						onClick: a
					} = e;
					return o.a.createElement(D, {
						announcement: t,
						tabIndex: s ? 0 : -1,
						key: t.id,
						to: t.url,
						onClick: a,
						className: n
					}, o.a.createElement("div", {
						className: f.a.Content
					}, o.a.createElement("h3", {
						className: f.a.Title
					}, t.title), o.a.createElement("p", {
						className: f.a.Description
					}, t.description)), t.iconUrl && o.a.createElement("div", {
						className: f.a.IconDiv,
						style: {
							backgroundImage: `url("${t.iconUrl}")`
						}
					}))
				}),
				D = o.a.memo(e => {
					let {
						announcement: t,
						children: n,
						to: s,
						...a
					} = e;
					const i = t.url.split("reddit.com");
					return i.length > 1 ? o.a.createElement(r.default, w({
						to: i[1]
					}, a), n) : o.a.createElement("a", w({
						href: t.url
					}, a), n)
				});
			t.default = e => {
				let {
					announcements: t
				} = e;
				const n = Object(i.e)(e => e.live.shouldShowAnnouncements),
					[r, d] = Object(a.useState)([]),
					[m, u] = Object(a.useState)(!n),
					[v, p] = Object(a.useState)(!0),
					[h, N] = Object(a.useState)(0);
				(e => {
					let {
						announcements: t,
						setActiveIndex: n,
						isHidden: s,
						setIsLoading: o,
						setVisibleAnnouncements: c,
						visibleAnnouncements: r
					} = e;
					const l = Object(i.e)(C.a);
					Object(a.useEffect)(() => {
						const e = Object(_.f)(),
							a = t.filter(g(l, e)).slice(0, 5),
							i = [...a].sort((e => (t, n) => (e[t.id] || 0) - (e[n.id] || 0))(e))[0],
							d = a.length ? A.i.Yes : A.i.No;
						E(d), s || b()(a.map(e => e.id), r.map(e => e.id)) || (c(a), n(a.indexOf(i)), o(!1))
					}, [])
				})({
					announcements: t,
					setActiveIndex: N,
					isHidden: m,
					setVisibleAnnouncements: d,
					visibleAnnouncements: r,
					setIsLoading: p
				});
				const {
					onCarouselNavigate: w,
					isTransitionComplete: D
				} = (e => {
					let {
						activeIndex: t,
						visibleAnnouncements: n,
						setActiveIndex: s
					} = e;
					const o = Object(j.a)(),
						[i, c] = Object(a.useState)(!0),
						r = Object(a.useRef)(null);
					return {
						onCarouselNavigate: Object(a.useCallback)(e => () => {
							"next" === e && t + 1 >= n.length ? s(0) : s("prev" === e && t <= 0 ? n.length - 1 : t + ("next" === e ? 1 : -1)), o(O("next" === e ? "scroll_next" : "scroll_previous")), r.current && window.clearTimeout(r.current), c(!1), r.current = window.setTimeout(() => {
								c(!0)
							}, 200)
						}, [t, o, s, n]),
						isTransitionComplete: i
					}
				})({
					activeIndex: h,
					visibleAnnouncements: r,
					setActiveIndex: N
				}), k = (e => {
					let {
						setIsHidden: t,
						visibleAnnouncements: n
					} = e;
					const s = Object(j.a)();
					return Object(a.useCallback)(() => {
						t(!0), n.forEach(e => {
							const {
								id: t,
								maxImpressionsCount: n
							} = e;
							Object(_.mb)(t, n)
						}), s(O("dismiss_all")), E(A.i.No)
					}, [n, s, t])
				})({
					visibleAnnouncements: r,
					setIsHidden: u
				}), L = (e => {
					let {
						activeIndex: t,
						setActiveIndex: n,
						visibleAnnouncements: s
					} = e;
					const o = Object(j.a)();
					return Object(a.useCallback)(() => {
						t < 0 || t >= s.length ? n(0) : o(x("click", s[t]))
					}, [t, o, n, s])
				})({
					activeIndex: h,
					setActiveIndex: N,
					visibleAnnouncements: r
				});
				return (e => {
					let {
						activeIndex: t,
						setActiveIndex: n,
						visibleAnnouncements: s
					} = e;
					const o = Object(j.a)(),
						c = Object(i.e)(C.a, (e, t) => Object.keys(e).length === Object.keys(t).length);
					Object(a.useEffect)(() => {
						if (t < 0 || t >= s.length) return void n(0);
						const e = s[t],
							a = Object(_.e)(e.id);
						o(x("view", e)), Object(_.mb)(e.id, a + 1);
						const i = Object(_.f)();
						s.filter(g(c, i)).length || E(A.i.No)
					}, [t, c, o, n, s])
				})({
					activeIndex: h,
					setActiveIndex: N,
					visibleAnnouncements: r
				}), m ? null : o.a.createElement("div", {
					className: f.a.Container
				}, o.a.createElement("h2", {
					className: f.a.Headline
				}, s.fbt._("Updates from reddit", null, {
					hk: "1R94KF"
				})), o.a.createElement("button", {
					className: f.a.CloseBtn,
					onClick: k
				}, o.a.createElement(l.a, {
					name: "close"
				})), o.a.createElement("div", {
					className: f.a.Carousel
				}, r.length > 1 ? o.a.createElement("button", {
					className: f.a.LeftArrow,
					onClick: w("prev")
				}, o.a.createElement(l.a, {
					name: "caret_left"
				})) : o.a.createElement("div", {
					className: f.a.ArrowPlaceholder
				}), o.a.createElement("div", {
					className: f.a.AnnouncementsWrapper
				}, v ? o.a.createElement("div", {
					className: f.a.LoadingIndicator
				}) : r.map((e, t) => o.a.createElement(I, {
					announcement: e,
					className: Object(c.a)(f.a.Announcement, {
						[f.a.isActive]: t === h,
						[f.a.prev]: r.length > 1 && 0 === h && t + 1 === r.length || t === h - 1,
						[f.a.next]: r.length > 1 && h + 1 === r.length && 0 === t || t === h + 1,
						[f.a.isTransitionComplete]: D
					}),
					isActive: t === h,
					key: e.id,
					onClick: L
				}))), r.length > 1 ? o.a.createElement("button", {
					className: f.a.RightArrow,
					onClick: w("next")
				}, o.a.createElement(l.a, {
					name: "caret_right"
				})) : o.a.createElement("div", {
					className: f.a.ArrowPlaceholder
				})), r.length > 1 ? o.a.createElement("div", {
					className: f.a.Dots
				}, r.map((e, t) => o.a.createElement("button", {
					onClick: () => N(t),
					key: `announcement-carousel-dot-${t}`,
					className: Object(c.a)(f.a.Dot, {
						[f.a.isSelected]: t === h
					})
				}))) : o.a.createElement("div", {
					className: f.a.DotsPlaceholder
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncementsCarousel.567bdc8db276a94e9748.js.map