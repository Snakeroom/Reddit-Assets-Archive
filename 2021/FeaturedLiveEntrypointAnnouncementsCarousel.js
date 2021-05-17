// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncementsCarousel.fac3ca5c35fe56b59d72.js
// Retrieved at 5/17/2021, 7:10:04 PM by Reddit Dataminer v1.0.0
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
				c = t.n(a),
				o = t("./node_modules/react-redux/es/index.js"),
				i = t("./src/lib/classNames/index.ts"),
				r = t("./src/reddit/controls/InternalLink/index.tsx"),
				l = t("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = t("./src/reddit/icons/fonts/index.tsx"),
				u = t("./src/reddit/icons/svgs/Chevron/index.tsx"),
				m = t("./src/reddit/icons/svgs/Close/index.tsx"),
				b = (t("./node_modules/core-js/modules/web.dom.iterable.js"), t("./node_modules/js-cookie/src/js.cookie.js")),
				v = t.n(b),
				p = t("./node_modules/lodash/isEqual.js"),
				A = t.n(p),
				x = t("./src/lib/constants/index.ts"),
				h = t("./src/reddit/constants/cookie.ts"),
				_ = t("./src/reddit/constants/experiments.ts"),
				C = t("./src/reddit/helpers/localStorage/index.ts"),
				O = t("./src/reddit/selectors/telemetry.ts");
			const j = (e, {
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
					...Object(O.defaults)(a)
				}),
				E = e => n => ({
					source: "announcement",
					action: e,
					noun: "announcement",
					...Object(O.defaults)(n)
				});
			var g = t("./src/reddit/hooks/useTracking.ts"),
				N = t("./src/reddit/selectors/experiments/index.ts");
			const f = e => {
					const n = new Date;
					n.setMonth(n.getMonth() + 1), v.a.set(h.h, e, {
						...x.y,
						expires: n
					})
				},
				w = (e, n) => t => {
					if (t.experimentName) {
						const n = e[t.experimentName.toLowerCase()];
						if (n && Object(_.Fd)(n.variant)) return !1
					}
					return !((n[t.id] || 0) >= t.maxImpressionsCount)
				};
			var I = t("./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.m.less"),
				D = t.n(I);

			function k() {
				return (k = Object.assign || function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = c.a.memo(({
					announcement: e,
					className: n,
					isActive: t,
					onClick: s
				}) => c.a.createElement(L, {
					announcement: e,
					tabIndex: t ? 0 : -1,
					key: e.id,
					to: e.url,
					onClick: s,
					className: n
				}, c.a.createElement("div", {
					className: D.a.Content
				}, c.a.createElement("h3", {
					className: D.a.Title
				}, e.title), c.a.createElement("p", {
					className: D.a.Description
				}, e.description)), e.iconUrl && c.a.createElement("div", {
					className: D.a.IconDiv,
					style: {
						backgroundImage: `url("${e.iconUrl}")`
					}
				}))),
				L = c.a.memo(({
					announcement: e,
					children: n,
					to: t,
					...s
				}) => {
					const a = e.url.split("reddit.com");
					return a.length > 1 ? c.a.createElement(r.a, k({
						to: a[1]
					}, s), n) : c.a.createElement("a", k({
						href: e.url
					}, s), n)
				});
			n.default = ({
				announcements: e
			}) => {
				const n = Object(l.a)(),
					t = Object(o.e)(e => e.live.shouldShowAnnouncements),
					[r, b] = Object(a.useState)([]),
					[v, p] = Object(a.useState)(!t),
					[x, _] = Object(a.useState)(!0),
					[O, I] = Object(a.useState)(0);
				(({
					announcements: e,
					setActiveIndex: n,
					isHidden: t,
					setIsLoading: s,
					setVisibleAnnouncements: c,
					visibleAnnouncements: i
				}) => {
					const r = Object(o.e)(N.a);
					Object(a.useEffect)(() => {
						const a = Object(C.f)(),
							o = e.filter(w(r, a)).slice(0, 5),
							l = [...o].sort((e => (n, t) => (e[n.id] || 0) - (e[t.id] || 0))(a))[0],
							d = o.length ? h.i.Yes : h.i.No;
						f(d), t || A()(o.map(e => e.id), i.map(e => e.id)) || (c(o), n(o.indexOf(l)), s(!1))
					}, [])
				})({
					announcements: e,
					setActiveIndex: I,
					isHidden: v,
					setVisibleAnnouncements: b,
					visibleAnnouncements: r,
					setIsLoading: _
				});
				const {
					onCarouselNavigate: k,
					isTransitionComplete: L
				} = (({
					activeIndex: e,
					visibleAnnouncements: n,
					setActiveIndex: t
				}) => {
					const s = Object(g.a)(),
						[c, o] = Object(a.useState)(!0),
						i = Object(a.useRef)(null);
					return {
						onCarouselNavigate: Object(a.useCallback)(a => () => {
							"next" === a && e + 1 >= n.length ? t(0) : t("prev" === a && e <= 0 ? n.length - 1 : e + ("next" === a ? 1 : -1)), s(E("next" === a ? "scroll_next" : "scroll_previous")), i.current && window.clearTimeout(i.current), o(!1), i.current = window.setTimeout(() => {
								o(!0)
							}, 200)
						}, [e, s, t, n]),
						isTransitionComplete: c
					}
				})({
					activeIndex: O,
					visibleAnnouncements: r,
					setActiveIndex: I
				}), S = (({
					setIsHidden: e,
					visibleAnnouncements: n
				}) => {
					const t = Object(g.a)();
					return Object(a.useCallback)(() => {
						e(!0), n.forEach(e => {
							const {
								id: n,
								maxImpressionsCount: t
							} = e;
							Object(C.cb)(n, t)
						}), t(E("dismiss_all")), f(h.i.No)
					}, [n, t, e])
				})({
					visibleAnnouncements: r,
					setIsHidden: p
				}), B = (({
					activeIndex: e,
					setActiveIndex: n,
					visibleAnnouncements: t
				}) => {
					const s = Object(g.a)();
					return Object(a.useCallback)(() => {
						e < 0 || e >= t.length ? n(0) : s(j("click", t[e]))
					}, [e, s, n, t])
				})({
					activeIndex: O,
					setActiveIndex: I,
					visibleAnnouncements: r
				});
				return (({
					activeIndex: e,
					setActiveIndex: n,
					visibleAnnouncements: t
				}) => {
					const s = Object(g.a)(),
						c = Object(o.e)(N.a, (e, n) => Object.keys(e).length === Object.keys(n).length);
					Object(a.useEffect)(() => {
						if (e < 0 || e >= t.length) return void n(0);
						const a = t[e],
							o = Object(C.e)(a.id);
						s(j("view", a)), Object(C.cb)(a.id, o + 1);
						const i = Object(C.f)();
						t.filter(w(c, i)).length || f(h.i.No)
					}, [e, c, s, n, t])
				})({
					activeIndex: O,
					setActiveIndex: I,
					visibleAnnouncements: r
				}), v ? null : c.a.createElement("div", {
					className: D.a.Container
				}, c.a.createElement("h2", {
					className: D.a.Headline
				}, s.fbt._("Updates from reddit", null, {
					hk: "1R94KF"
				})), c.a.createElement("button", {
					className: D.a.CloseBtn,
					onClick: S
				}, n ? c.a.createElement(d.a, {
					name: "close"
				}) : c.a.createElement(m.a, null)), c.a.createElement("div", {
					className: D.a.Carousel
				}, r.length > 1 ? c.a.createElement("button", {
					className: D.a.LeftArrow,
					onClick: k("prev")
				}, n ? c.a.createElement(d.a, {
					name: "caret_left"
				}) : c.a.createElement(u.a, null)) : c.a.createElement("div", {
					className: D.a.ArrowPlaceholder
				}), c.a.createElement("div", {
					className: D.a.AnnouncementsWrapper
				}, x ? c.a.createElement("div", {
					className: D.a.LoadingIndicator
				}) : r.map((e, n) => c.a.createElement(y, {
					announcement: e,
					className: Object(i.a)(D.a.Announcement, {
						[D.a.isActive]: n === O,
						[D.a.prev]: r.length > 1 && 0 === O && n + 1 === r.length || n === O - 1,
						[D.a.next]: r.length > 1 && O + 1 === r.length && 0 === n || n === O + 1,
						[D.a.isTransitionComplete]: L
					}),
					isActive: n === O,
					key: e.id,
					onClick: B
				}))), r.length > 1 ? c.a.createElement("button", {
					className: D.a.RightArrow,
					onClick: k("next")
				}, n ? c.a.createElement(d.a, {
					name: "caret_right"
				}) : c.a.createElement(u.a, null)) : c.a.createElement("div", {
					className: D.a.ArrowPlaceholder
				})), r.length > 1 ? c.a.createElement("div", {
					className: D.a.Dots
				}, r.map((e, n) => c.a.createElement("button", {
					onClick: () => I(n),
					key: `announcement-carousel-dot-${n}`,
					className: Object(i.a)(D.a.Dot, {
						[D.a.isSelected]: n === O
					})
				}))) : c.a.createElement("div", {
					className: D.a.DotsPlaceholder
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncementsCarousel.fac3ca5c35fe56b59d72.js.map