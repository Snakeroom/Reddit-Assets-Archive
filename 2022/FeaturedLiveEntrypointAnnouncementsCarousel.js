// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncementsCarousel.51f023ca541b47af2cf1.js
// Retrieved at 7/19/2022, 10:40:16 AM by Reddit Dataminer v1.0.0
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
		"./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var s = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./node_modules/react/index.js"),
				o = t.n(a),
				i = t("./node_modules/react-redux/es/index.js"),
				c = t("./src/lib/classNames/index.ts"),
				r = t("./src/reddit/controls/InternalLink/index.tsx"),
				l = t("./src/reddit/icons/fonts/index.tsx"),
				d = (t("./node_modules/core-js/modules/web.dom.iterable.js"), t("./node_modules/js-cookie/src/js.cookie.js")),
				u = t.n(d),
				m = t("./node_modules/lodash/isEqual.js"),
				b = t.n(m),
				v = t("./src/lib/constants/index.ts"),
				A = t("./src/reddit/constants/cookie.ts"),
				p = t("./src/reddit/constants/experiments.ts"),
				_ = t("./src/reddit/helpers/localStorage/index.ts"),
				h = t("./src/reddit/selectors/telemetry.ts");
			const x = (e, n) => {
					let {
						id: t,
						title: s,
						description: a
					} = n;
					return n => ({
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
						},
						...Object(h.n)(n)
					})
				},
				O = e => n => ({
					source: "announcement",
					action: e,
					noun: "announcement",
					...Object(h.n)(n)
				});
			var j = t("./src/reddit/hooks/useTracking.ts"),
				C = t("./src/reddit/selectors/experiments/index.ts");
			const E = e => {
					const n = new Date;
					n.setMonth(n.getMonth() + 1), u.a.set(A.h, e, {
						...v.C,
						expires: n
					})
				},
				g = (e, n) => t => {
					if (t.experimentName) {
						const n = e[t.experimentName.toLowerCase()];
						if (n && Object(p.Xf)(n.variant)) return !1
					}
					return !((n[t.id] || 0) >= t.maxImpressionsCount)
				};
			var N = t("./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.m.less"),
				w = t.n(N);

			function I() {
				return (I = Object.assign || function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = o.a.memo(e => {
					let {
						announcement: n,
						className: t,
						isActive: s,
						onClick: a
					} = e;
					return o.a.createElement(D, {
						announcement: n,
						tabIndex: s ? 0 : -1,
						key: n.id,
						to: n.url,
						onClick: a,
						className: t
					}, o.a.createElement("div", {
						className: w.a.Content
					}, o.a.createElement("h3", {
						className: w.a.Title
					}, n.title), o.a.createElement("p", {
						className: w.a.Description
					}, n.description)), n.iconUrl && o.a.createElement("div", {
						className: w.a.IconDiv,
						style: {
							backgroundImage: `url("${n.iconUrl}")`
						}
					}))
				}),
				D = o.a.memo(e => {
					let {
						announcement: n,
						children: t,
						to: s,
						...a
					} = e;
					const i = n.url.split("reddit.com");
					return i.length > 1 ? o.a.createElement(r.default, I({
						to: i[1]
					}, a), t) : o.a.createElement("a", I({
						href: n.url
					}, a), t)
				});
			n.default = e => {
				let {
					announcements: n
				} = e;
				const t = Object(i.e)(e => e.live.shouldShowAnnouncements),
					[r, d] = Object(a.useState)([]),
					[u, m] = Object(a.useState)(!t),
					[v, p] = Object(a.useState)(!0),
					[h, N] = Object(a.useState)(0);
				(e => {
					let {
						announcements: n,
						setActiveIndex: t,
						isHidden: s,
						setIsLoading: o,
						setVisibleAnnouncements: c,
						visibleAnnouncements: r
					} = e;
					const l = Object(i.e)(C.a);
					Object(a.useEffect)(() => {
						const e = Object(_.e)(),
							a = n.filter(g(l, e)).slice(0, 5),
							i = [...a].sort((e => (n, t) => (e[n.id] || 0) - (e[t.id] || 0))(e))[0],
							d = a.length ? A.i.Yes : A.i.No;
						E(d), s || b()(a.map(e => e.id), r.map(e => e.id)) || (c(a), t(a.indexOf(i)), o(!1))
					}, [])
				})({
					announcements: n,
					setActiveIndex: N,
					isHidden: u,
					setVisibleAnnouncements: d,
					visibleAnnouncements: r,
					setIsLoading: p
				});
				const {
					onCarouselNavigate: I,
					isTransitionComplete: D
				} = (e => {
					let {
						activeIndex: n,
						visibleAnnouncements: t,
						setActiveIndex: s
					} = e;
					const o = Object(j.a)(),
						[i, c] = Object(a.useState)(!0),
						r = Object(a.useRef)(null);
					return {
						onCarouselNavigate: Object(a.useCallback)(e => () => {
							"next" === e && n + 1 >= t.length ? s(0) : s("prev" === e && n <= 0 ? t.length - 1 : n + ("next" === e ? 1 : -1)), o(O("next" === e ? "scroll_next" : "scroll_previous")), r.current && window.clearTimeout(r.current), c(!1), r.current = window.setTimeout(() => {
								c(!0)
							}, 200)
						}, [n, o, s, t]),
						isTransitionComplete: i
					}
				})({
					activeIndex: h,
					visibleAnnouncements: r,
					setActiveIndex: N
				}), k = (e => {
					let {
						setIsHidden: n,
						visibleAnnouncements: t
					} = e;
					const s = Object(j.a)();
					return Object(a.useCallback)(() => {
						n(!0), t.forEach(e => {
							const {
								id: n,
								maxImpressionsCount: t
							} = e;
							Object(_.ib)(n, t)
						}), s(O("dismiss_all")), E(A.i.No)
					}, [t, s, n])
				})({
					visibleAnnouncements: r,
					setIsHidden: m
				}), L = (e => {
					let {
						activeIndex: n,
						setActiveIndex: t,
						visibleAnnouncements: s
					} = e;
					const o = Object(j.a)();
					return Object(a.useCallback)(() => {
						n < 0 || n >= s.length ? t(0) : o(x("click", s[n]))
					}, [n, o, t, s])
				})({
					activeIndex: h,
					setActiveIndex: N,
					visibleAnnouncements: r
				});
				return (e => {
					let {
						activeIndex: n,
						setActiveIndex: t,
						visibleAnnouncements: s
					} = e;
					const o = Object(j.a)(),
						c = Object(i.e)(C.a, (e, n) => Object.keys(e).length === Object.keys(n).length);
					Object(a.useEffect)(() => {
						if (n < 0 || n >= s.length) return void t(0);
						const e = s[n],
							a = Object(_.d)(e.id);
						o(x("view", e)), Object(_.ib)(e.id, a + 1);
						const i = Object(_.e)();
						s.filter(g(c, i)).length || E(A.i.No)
					}, [n, c, o, t, s])
				})({
					activeIndex: h,
					setActiveIndex: N,
					visibleAnnouncements: r
				}), u ? null : o.a.createElement("div", {
					className: w.a.Container
				}, o.a.createElement("h2", {
					className: w.a.Headline
				}, s.fbt._("Updates from reddit", null, {
					hk: "1R94KF"
				})), o.a.createElement("button", {
					className: w.a.CloseBtn,
					onClick: k
				}, o.a.createElement(l.a, {
					name: "close"
				})), o.a.createElement("div", {
					className: w.a.Carousel
				}, r.length > 1 ? o.a.createElement("button", {
					className: w.a.LeftArrow,
					onClick: I("prev")
				}, o.a.createElement(l.a, {
					name: "caret_left"
				})) : o.a.createElement("div", {
					className: w.a.ArrowPlaceholder
				}), o.a.createElement("div", {
					className: w.a.AnnouncementsWrapper
				}, v ? o.a.createElement("div", {
					className: w.a.LoadingIndicator
				}) : r.map((e, n) => o.a.createElement(f, {
					announcement: e,
					className: Object(c.a)(w.a.Announcement, {
						[w.a.isActive]: n === h,
						[w.a.prev]: r.length > 1 && 0 === h && n + 1 === r.length || n === h - 1,
						[w.a.next]: r.length > 1 && h + 1 === r.length && 0 === n || n === h + 1,
						[w.a.isTransitionComplete]: D
					}),
					isActive: n === h,
					key: e.id,
					onClick: L
				}))), r.length > 1 ? o.a.createElement("button", {
					className: w.a.RightArrow,
					onClick: I("next")
				}, o.a.createElement(l.a, {
					name: "caret_right"
				})) : o.a.createElement("div", {
					className: w.a.ArrowPlaceholder
				})), r.length > 1 ? o.a.createElement("div", {
					className: w.a.Dots
				}, r.map((e, n) => o.a.createElement("button", {
					onClick: () => N(n),
					key: `announcement-carousel-dot-${n}`,
					className: Object(c.a)(w.a.Dot, {
						[w.a.isSelected]: n === h
					})
				}))) : o.a.createElement("div", {
					className: w.a.DotsPlaceholder
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncementsCarousel.51f023ca541b47af2cf1.js.map