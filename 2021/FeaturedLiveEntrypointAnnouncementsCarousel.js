// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncementsCarousel.f66fe4c188ea666e9f22.js
// Retrieved at 7/15/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
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
				c = t("./node_modules/react-redux/es/index.js"),
				i = t("./src/lib/classNames/index.ts"),
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
			const x = (e, {
					id: n,
					title: t,
					description: s
				}) => a => ({
					source: "announcement",
					action: e,
					noun: "announcement",
					liveThread: {
						id: n,
						isAnnouncement: !0
					},
					announcement: {
						id: n,
						title: "function" == typeof t ? t() : t,
						body: "function" == typeof s ? s() : s || ""
					},
					...Object(h.defaults)(a)
				}),
				O = e => n => ({
					source: "announcement",
					action: e,
					noun: "announcement",
					...Object(h.defaults)(n)
				});
			var j = t("./src/reddit/hooks/useTracking.ts"),
				C = t("./src/reddit/selectors/experiments/index.ts");
			const E = e => {
					const n = new Date;
					n.setMonth(n.getMonth() + 1), u.a.set(A.h, e, {
						...v.A,
						expires: n
					})
				},
				f = (e, n) => t => {
					if (t.experimentName) {
						const n = e[t.experimentName.toLowerCase()];
						if (n && Object(p.Xd)(n.variant)) return !1
					}
					return !((n[t.id] || 0) >= t.maxImpressionsCount)
				};
			var g = t("./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.m.less"),
				N = t.n(g);

			function w() {
				return (w = Object.assign || function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = o.a.memo(({
					announcement: e,
					className: n,
					isActive: t,
					onClick: s
				}) => o.a.createElement(D, {
					announcement: e,
					tabIndex: t ? 0 : -1,
					key: e.id,
					to: e.url,
					onClick: s,
					className: n
				}, o.a.createElement("div", {
					className: N.a.Content
				}, o.a.createElement("h3", {
					className: N.a.Title
				}, e.title), o.a.createElement("p", {
					className: N.a.Description
				}, e.description)), e.iconUrl && o.a.createElement("div", {
					className: N.a.IconDiv,
					style: {
						backgroundImage: `url("${e.iconUrl}")`
					}
				}))),
				D = o.a.memo(({
					announcement: e,
					children: n,
					to: t,
					...s
				}) => {
					const a = e.url.split("reddit.com");
					return a.length > 1 ? o.a.createElement(r.a, w({
						to: a[1]
					}, s), n) : o.a.createElement("a", w({
						href: e.url
					}, s), n)
				});
			n.default = ({
				announcements: e
			}) => {
				const n = Object(c.e)(e => e.live.shouldShowAnnouncements),
					[t, r] = Object(a.useState)([]),
					[d, u] = Object(a.useState)(!n),
					[m, v] = Object(a.useState)(!0),
					[p, h] = Object(a.useState)(0);
				(({
					announcements: e,
					setActiveIndex: n,
					isHidden: t,
					setIsLoading: s,
					setVisibleAnnouncements: o,
					visibleAnnouncements: i
				}) => {
					const r = Object(c.e)(C.a);
					Object(a.useEffect)(() => {
						const a = Object(_.f)(),
							c = e.filter(f(r, a)).slice(0, 5),
							l = [...c].sort((e => (n, t) => (e[n.id] || 0) - (e[t.id] || 0))(a))[0],
							d = c.length ? A.i.Yes : A.i.No;
						E(d), t || b()(c.map(e => e.id), i.map(e => e.id)) || (o(c), n(c.indexOf(l)), s(!1))
					}, [])
				})({
					announcements: e,
					setActiveIndex: h,
					isHidden: d,
					setVisibleAnnouncements: r,
					visibleAnnouncements: t,
					setIsLoading: v
				});
				const {
					onCarouselNavigate: g,
					isTransitionComplete: w
				} = (({
					activeIndex: e,
					visibleAnnouncements: n,
					setActiveIndex: t
				}) => {
					const s = Object(j.a)(),
						[o, c] = Object(a.useState)(!0),
						i = Object(a.useRef)(null);
					return {
						onCarouselNavigate: Object(a.useCallback)(a => () => {
							"next" === a && e + 1 >= n.length ? t(0) : t("prev" === a && e <= 0 ? n.length - 1 : e + ("next" === a ? 1 : -1)), s(O("next" === a ? "scroll_next" : "scroll_previous")), i.current && window.clearTimeout(i.current), c(!1), i.current = window.setTimeout(() => {
								c(!0)
							}, 200)
						}, [e, s, t, n]),
						isTransitionComplete: o
					}
				})({
					activeIndex: p,
					visibleAnnouncements: t,
					setActiveIndex: h
				}), D = (({
					setIsHidden: e,
					visibleAnnouncements: n
				}) => {
					const t = Object(j.a)();
					return Object(a.useCallback)(() => {
						e(!0), n.forEach(e => {
							const {
								id: n,
								maxImpressionsCount: t
							} = e;
							Object(_.fb)(n, t)
						}), t(O("dismiss_all")), E(A.i.No)
					}, [n, t, e])
				})({
					visibleAnnouncements: t,
					setIsHidden: u
				}), k = (({
					activeIndex: e,
					setActiveIndex: n,
					visibleAnnouncements: t
				}) => {
					const s = Object(j.a)();
					return Object(a.useCallback)(() => {
						e < 0 || e >= t.length ? n(0) : s(x("click", t[e]))
					}, [e, s, n, t])
				})({
					activeIndex: p,
					setActiveIndex: h,
					visibleAnnouncements: t
				});
				return (({
					activeIndex: e,
					setActiveIndex: n,
					visibleAnnouncements: t
				}) => {
					const s = Object(j.a)(),
						o = Object(c.e)(C.a, (e, n) => Object.keys(e).length === Object.keys(n).length);
					Object(a.useEffect)(() => {
						if (e < 0 || e >= t.length) return void n(0);
						const a = t[e],
							c = Object(_.e)(a.id);
						s(x("view", a)), Object(_.fb)(a.id, c + 1);
						const i = Object(_.f)();
						t.filter(f(o, i)).length || E(A.i.No)
					}, [e, o, s, n, t])
				})({
					activeIndex: p,
					setActiveIndex: h,
					visibleAnnouncements: t
				}), d ? null : o.a.createElement("div", {
					className: N.a.Container
				}, o.a.createElement("h2", {
					className: N.a.Headline
				}, s.fbt._("Updates from reddit", null, {
					hk: "1R94KF"
				})), o.a.createElement("button", {
					className: N.a.CloseBtn,
					onClick: D
				}, o.a.createElement(l.a, {
					name: "close"
				})), o.a.createElement("div", {
					className: N.a.Carousel
				}, t.length > 1 ? o.a.createElement("button", {
					className: N.a.LeftArrow,
					onClick: g("prev")
				}, o.a.createElement(l.a, {
					name: "caret_left"
				})) : o.a.createElement("div", {
					className: N.a.ArrowPlaceholder
				}), o.a.createElement("div", {
					className: N.a.AnnouncementsWrapper
				}, m ? o.a.createElement("div", {
					className: N.a.LoadingIndicator
				}) : t.map((e, n) => o.a.createElement(I, {
					announcement: e,
					className: Object(i.a)(N.a.Announcement, {
						[N.a.isActive]: n === p,
						[N.a.prev]: t.length > 1 && 0 === p && n + 1 === t.length || n === p - 1,
						[N.a.next]: t.length > 1 && p + 1 === t.length && 0 === n || n === p + 1,
						[N.a.isTransitionComplete]: w
					}),
					isActive: n === p,
					key: e.id,
					onClick: k
				}))), t.length > 1 ? o.a.createElement("button", {
					className: N.a.RightArrow,
					onClick: g("next")
				}, o.a.createElement(l.a, {
					name: "caret_right"
				})) : o.a.createElement("div", {
					className: N.a.ArrowPlaceholder
				})), t.length > 1 ? o.a.createElement("div", {
					className: N.a.Dots
				}, t.map((e, n) => o.a.createElement("button", {
					onClick: () => h(n),
					key: `announcement-carousel-dot-${n}`,
					className: Object(i.a)(N.a.Dot, {
						[N.a.isSelected]: n === p
					})
				}))) : o.a.createElement("div", {
					className: N.a.DotsPlaceholder
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncementsCarousel.f66fe4c188ea666e9f22.js.map