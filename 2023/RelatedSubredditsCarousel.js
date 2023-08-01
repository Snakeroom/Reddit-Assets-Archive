// https://www.redditstatic.com/desktop2x/RelatedSubredditsCarousel.aa6288d6058fac7de0a6.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RelatedSubredditsCarousel"], {
		"./src/reddit/components/RelatedSubredditsCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_3B0JWgG1PY3jS7_zTYj-_s",
				container: "_39xR_tvITZKeJk8-O_3ixh"
			}
		},
		"./src/reddit/components/RelatedSubredditsCarousel/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/subreddit/relatedSubreddits.ts"),
				i = s("./src/reddit/components/SubredditCarousel/index.tsx"),
				d = s("./src/reddit/selectors/subreddit.ts"),
				o = s("./src/reddit/components/RelatedSubredditsCarousel/index.m.less"),
				l = s.n(o);
			t.default = e => {
				let {
					subredditId: t
				} = e;
				const s = Object(a.d)(),
					o = Object(r.useRef)(null),
					u = Object(a.e)(e => ((e, t) => {
						const {
							name: s
						} = Object(d.X)(e, {
							subredditId: t
						}) || {};
						return Object(d.jb)(e, {
							identifier: {
								name: s,
								type: "subreddit"
							}
						})
					})(e, t)),
					[m, b] = Object(r.useState)(u ? 0 : void 0),
					p = Object(a.e)(e => Object(d.v)(e, {
						subredditId: t
					}));
				return Object(r.useEffect)(() => (t && s(Object(c.b)(t, 12)), () => {
					b(void 0)
				}), [t]), Object(r.useEffect)(() => {
					var e;
					if (!u || void 0 !== m) return;
					const t = null === (e = o.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
					b(null == t ? void 0 : t.height)
				}, [u, m]), n.a.createElement("div", {
					className: l.a.wrapper,
					style: {
						height: m
					}
				}, n.a.createElement("div", {
					ref: o,
					className: l.a.container
				}, n.a.createElement(i.a, {
					parentSubredditId: t,
					title: "Similar Communities",
					subredditIds: p
				})))
			}
		},
		"./src/reddit/components/SubredditCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				carouselContainer: "_1kH8oZufotSVvA8-yOeKc6",
				carouselTitle: "lSvNu2ME04y_gOEcOZDH3",
				scrollButton: "_3oF8iRcUAGvIPqz_tA0RZC",
				scrollIcon: "_1O3mj_g7q2rHmRePumem91",
				carouselHeader: "_3D8Lk-HrNBJg68yKoM5Swo",
				carouselWrapper: "_35JTJlDPnNVSwEPbxYWjqA",
				subredditIcon: "_1qCEHUIXmMFjy9m4eZuOKZ",
				carouselItem: "_2iIAGEhq7emodKXDClvjdH",
				carouselContent: "_2UUwh_3lqKrPsIxbyiYN3C",
				bannerWrapper: "_2S1-nPy0PPxCnpOvTKNDpz",
				banner: "_2B1-31b9eJJV_SgWzHEkoe",
				description: "_1RVQ8C9JPkAkcn3IDxp5pV",
				lockup: "_3NGuW-7jEo-VFlJoVrtV_P",
				lockupText: "PUy-gM0qwjaMft8sMiMQt",
				subredditName: "_2dTqXvZet4wpAiSvBJKPiC",
				subscribersCount: "_2ERxKM30FkuAC2lh1UNsX4"
			}
		},
		"./src/reddit/components/SubredditCarousel/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./src/lib/constants/icons.ts"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./node_modules/lodash/throttle.js"),
				i = s.n(c),
				d = s("./node_modules/react/index.js"),
				o = s.n(d),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./src/reddit/actions/subreddit.ts"),
				m = s("./src/reddit/actions/subreddit/subredditCarousel.ts"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/index.tsx"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/components/SubredditCarousel/index.m.less"),
				N = s.n(E);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(x.c)(e => {
				let {
					title: t,
					className: s,
					parentSubredditId: a,
					sendEvent: c,
					subredditIds: u,
					size: b = "large",
					minSubredditCount: p = 2
				} = e;
				const v = Object(l.d)(),
					[f, x] = Object(d.useState)(null),
					[E, S] = Object(d.useState)(null),
					[h, g] = Object(d.useState)(0),
					[I, k] = Object(d.useState)(void 0),
					w = Object(l.e)(e => Object(j.D)(e, u));
				Object(d.useEffect)(() => {
					(null == u ? void 0 : u.length) && v(Object(m.e)(u))
				}, [u]);
				const A = (null == w ? void 0 : w.filter(e => !e.isNsfw && !e.isSubscribed)) || [],
					P = e => () => {
						if (!E) return;
						const t = Math.sign(e) ? E.scrollLeft % 249 : 249 % E.scrollLeft,
							s = 249 * e - t;
						E.scrollBy({
							left: s,
							behavior: "smooth"
						})
					};
				return Object(d.useEffect)(() => {
					if (!f) return;
					const e = i()(() => {
						const e = Math.floor(f.clientWidth / 249);
						g(e), k((e > 1 ? 249 * e : 237) - 8)
					}, 30);
					return window.addEventListener("resize", e), e(), () => {
						window.removeEventListener("resize", e)
					}
				}, [f]), Object(d.useEffect)(() => {
					A.length < p || c((e => t => ({
						source: "similar_communities",
						action: "view",
						noun: "module",
						subreddit: e ? Object(j.X)(t, {
							subredditId: e
						}) : void 0
					}))(a))
				}, [A.length, p, a]), A.length < p ? null : o.a.createElement("div", {
					ref: x,
					className: Object(r.a)(N.a.carouselContainer, s, null === N.a || void 0 === N.a ? void 0 : N.a[b])
				}, o.a.createElement("div", {
					className: N.a.carouselHeader,
					style: {
						width: I
					}
				}, o.a.createElement("h3", {
					className: N.a.carouselTitle
				}, C._("{title}", [C._param("title", t)], {
					hk: "4n2CUI"
				})), A.length > h && o.a.createElement("div", {
					className: N.a.carouselControls
				}, o.a.createElement("button", {
					className: N.a.scrollButton,
					onClick: P(-h)
				}, o.a.createElement(_.a, {
					name: n.a.left_fill,
					className: N.a.scrollIcon
				})), o.a.createElement("button", {
					className: N.a.scrollButton,
					onClick: P(h)
				}, o.a.createElement(_.a, {
					name: n.a.right_fill,
					className: N.a.scrollIcon
				})))), o.a.createElement("div", {
					ref: S,
					className: N.a.carouselWrapper,
					style: {
						width: I
					}
				}, null == A ? void 0 : A.map((e, t) => {
					let {
						styles: s,
						...r
					} = e;
					var n;
					return o.a.createElement(y, O({
						index: t + 1,
						size: b,
						banner: null == s ? void 0 : s.bannerBackgroundImage,
						icon: (null == s ? void 0 : s.icon) || (null === (n = null == s ? void 0 : s.legacyIcon) || void 0 === n ? void 0 : n.url),
						key: `${r.name}:${t}`
					}, r))
				})))
			}), y = e => {
				let {
					id: t,
					index: s,
					name: n,
					subscribersCount: c,
					description: i,
					primaryColor: m,
					icon: _,
					isSubscribed: x,
					banner: E,
					path: O,
					size: S
				} = e;
				const y = Object(l.d)();
				Object(d.useEffect)(() => {
					y(Object(u.u)(n))
				}, [n]);
				const h = Object(d.useCallback)(e => ((e, t, s) => r => ({
					source: "similar_communities",
					action: "click",
					noun: e,
					actionInfo: {
						reason: `${s}`
					},
					subreddit: Object(j.X)(r, {
						subredditId: t
					})
				}))(e ? "unsubsribe" : "subscribe", t, s), [t]);
				return o.a.createElement("div", {
					className: Object(r.a)(N.a.carouselItem, null === N.a || void 0 === N.a ? void 0 : N.a[S])
				}, o.a.createElement("div", {
					className: N.a.bannerWrapper,
					style: {
						backgroundColor: m || void 0
					}
				}, o.a.createElement("img", {
					className: N.a.banner,
					src: E || void 0
				})), o.a.createElement("div", {
					className: N.a.carouselContent
				}, o.a.createElement(b.a, {
					to: O,
					className: N.a.lockup
				}, _ ? o.a.createElement("img", {
					src: _,
					className: N.a.subredditIcon
				}) : o.a.createElement(f.a, {
					className: N.a.subredditIcon
				}), o.a.createElement("div", {
					className: N.a.lockupText
				}, o.a.createElement("span", {
					className: N.a.subredditName
				}, "r/", n), o.a.createElement("span", {
					className: N.a.subscribersCount
				}, C._({
					"*": "{number} members",
					_1: "1 member"
				}, [C._plural(c, "number", Object(a.b)(c))], {
					hk: "4yqFU9"
				})))), o.a.createElement("p", {
					className: N.a.description
				}, i), o.a.createElement(p.a, {
					className: N.a.subscribeButton,
					identifier: {
						name: n,
						type: "subreddit"
					},
					getEventFactory: h,
					priority: v.c.Tertiary,
					small: !0
				})))
			};
			t.a = S
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				n = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				a = s.n(n);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", a.a);
			t.a = c
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RelatedSubredditsCarousel.aa6288d6058fac7de0a6.js.map