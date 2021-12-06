// https://www.redditstatic.com/desktop2x/RelatedSubredditsCarousel.400224cb194ff80e2aec.js
// Retrieved at 12/6/2021, 1:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RelatedSubredditsCarousel"], {
		"./src/reddit/actions/subreddit/relatedSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				n = s("./src/redditGQL/operations/RelatedSubreddits.json");
			const a = e => async (t, s, {
				gqlContext: r
			}) => {
				var a;
				const i = await ((e, t) => Object(d.a)(e, {
					...n,
					variables: t
				}))(r(), {
					subredditId: e
				});
				if (!i.ok) return;
				const o = i.body;
				(null === (a = o.data.subredditInfoById.relatedSubreddits) || void 0 === a ? void 0 : a.length) && t(c({
					subredditId: e,
					relatedSubreddits: o.data.subredditInfoById.relatedSubreddits.reduce((e, {
						subreddit: t
					}) => ((null == t ? void 0 : t.id) && e.push(t.id), e), [])
				}))
			}, i = "RELATED_SUBREDDITS__LOADED", c = Object(r.a)(i)
		},
		"./src/reddit/actions/subreddit/subredditCarousel.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				n = s("./src/redditGQL/operations/SubredditsCarousel.json");
			const a = e => async (t, s, {
				gqlContext: r
			}) => {
				if (s().subreddits.carousel.pending) return;
				const a = await ((e, t) => Object(d.a)(e, {
					...n,
					variables: t
				}))(r(), {
					subredditIds: e
				});
				if (!a.ok) return;
				const i = a.body;
				i.data && t(o(i.data.subredditsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[t.id] = t), e), {})))
			}, i = "SUBREDDITS_CAROUSEL__LOADED", c = "SUBREDDITS_CAROUSEL__PENDING", o = Object(r.a)(i);
			Object(r.a)(c)
		},
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
				d = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/actions/subreddit/relatedSubreddits.ts"),
				i = s("./src/reddit/components/SubredditCarousel/index.tsx"),
				c = s("./src/reddit/selectors/subreddit.ts"),
				o = s("./src/reddit/components/RelatedSubredditsCarousel/index.m.less"),
				l = s.n(o);
			t.default = ({
				subredditId: e
			}) => {
				const t = Object(n.d)(),
					s = Object(r.useRef)(null),
					o = Object(n.e)(t => ((e, t) => {
						const {
							name: s
						} = Object(c.R)(e, {
							subredditId: t
						}) || {};
						return Object(c.db)(e, {
							identifier: {
								name: s,
								type: "subreddit"
							}
						})
					})(t, e)),
					[u, b] = Object(r.useState)(o ? 0 : void 0),
					m = Object(n.e)(t => Object(c.p)(t, {
						subredditId: e
					}));
				return Object(r.useEffect)(() => (e && t(Object(a.b)(e)), () => {
					b(void 0)
				}), [e]), Object(r.useEffect)(() => {
					var e;
					if (!o || void 0 !== u) return;
					const t = null === (e = s.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
					b(null == t ? void 0 : t.height)
				}, [o, u]), d.a.createElement("div", {
					className: l.a.wrapper,
					style: {
						height: u
					}
				}, d.a.createElement("div", {
					ref: s,
					className: l.a.container
				}, d.a.createElement(i.a, {
					parentSubredditId: e,
					title: "Related Communities",
					subredditIds: m
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
				d = s("./src/lib/constants/icons.ts"),
				n = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./node_modules/lodash/throttle.js"),
				i = s.n(a),
				c = s("./node_modules/react/index.js"),
				o = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./src/reddit/actions/subreddit.ts"),
				b = s("./src/reddit/actions/subreddit/subredditCarousel.ts"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/components/SubredditCarousel/index.m.less"),
				O = s.n(E);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = Object(x.c)(({
				title: e,
				className: t,
				parentSubredditId: s,
				sendEvent: n,
				subredditIds: a,
				size: u = "large",
				minSubredditCount: m = 2
			}) => {
				const p = Object(l.d)(),
					[f, v] = Object(c.useState)(null),
					[x, E] = Object(c.useState)(null),
					[N, C] = Object(c.useState)(0),
					[y, g] = Object(c.useState)(void 0),
					h = Object(l.e)(e => Object(j.x)(e, a));
				Object(c.useEffect)(() => {
					(null == a ? void 0 : a.length) && p(Object(b.c)(a))
				}, [a]);
				const k = (null == h ? void 0 : h.filter(e => !e.isNsfw && !e.isSubscribed)) || [],
					R = e => () => {
						if (!x) return;
						const t = Math.sign(e) ? x.scrollLeft % 249 : 249 % x.scrollLeft,
							s = 249 * e - t;
						x.scrollBy({
							left: s,
							behavior: "smooth"
						})
					};
				return Object(c.useEffect)(() => {
					if (!f) return;
					const e = i()(() => {
						const e = Math.floor(f.clientWidth / 249);
						C(e), g((e > 1 ? 249 * e : 237) - 8)
					}, 30);
					return window.addEventListener("resize", e), e(), () => {
						window.removeEventListener("resize", e)
					}
				}, [f]), Object(c.useEffect)(() => {
					k.length < m || n((e => t => ({
						source: "similar_communities",
						action: "view",
						noun: "module",
						subreddit: e ? Object(j.R)(t, {
							subredditId: e
						}) : void 0
					}))(s))
				}, [k.length, m, s]), k.length < m ? null : o.a.createElement("div", {
					ref: v,
					className: Object(r.a)(O.a.carouselContainer, t, null === O.a || void 0 === O.a ? void 0 : O.a[u])
				}, o.a.createElement("div", {
					className: O.a.carouselHeader,
					style: {
						width: y
					}
				}, o.a.createElement("h3", {
					className: O.a.carouselTitle
				}, e), k.length > N && o.a.createElement("div", {
					className: O.a.carouselControls
				}, o.a.createElement("button", {
					className: O.a.scrollButton,
					onClick: R(-N)
				}, o.a.createElement(_.a, {
					name: d.a.left_fill,
					className: O.a.scrollIcon
				})), o.a.createElement("button", {
					className: O.a.scrollButton,
					onClick: R(N)
				}, o.a.createElement(_.a, {
					name: d.a.right_fill,
					className: O.a.scrollIcon
				})))), o.a.createElement("div", {
					ref: E,
					className: O.a.carouselWrapper,
					style: {
						width: y
					}
				}, null == k ? void 0 : k.map(({
					styles: {
						icon: e,
						legacyIcon: t,
						bannerBackgroundImage: s
					},
					...r
				}, d) => o.a.createElement(I, S({
					index: d + 1,
					size: u,
					banner: s,
					icon: e || (null == t ? void 0 : t.url),
					key: `${r.name}:${d}`
				}, r)))))
			}), I = ({
				id: e,
				index: t,
				name: s,
				subscribersCount: d,
				description: a,
				primaryColor: i,
				icon: b,
				isSubscribed: _,
				banner: x,
				path: E,
				size: S
			}) => {
				const C = Object(l.d)();
				Object(c.useEffect)(() => {
					C(Object(u.u)(s))
				}, [s]);
				const I = Object(c.useCallback)(s => ((e, t, s) => r => ({
					source: "similar_communities",
					action: "click",
					noun: e,
					actionInfo: {
						reason: `${s}`
					},
					subreddit: Object(j.R)(r, {
						subredditId: t
					})
				}))(s ? "unsubsribe" : "subscribe", e, t), [e, _]);
				return o.a.createElement("div", {
					className: Object(r.a)(O.a.carouselItem, null === O.a || void 0 === O.a ? void 0 : O.a[S])
				}, o.a.createElement("div", {
					className: O.a.bannerWrapper,
					style: {
						backgroundColor: i || void 0
					}
				}, o.a.createElement("img", {
					className: O.a.banner,
					src: x || void 0
				})), o.a.createElement("div", {
					className: O.a.carouselContent
				}, o.a.createElement(m.a, {
					to: E,
					className: O.a.lockup
				}, b ? o.a.createElement("img", {
					src: b,
					className: O.a.subredditIcon
				}) : o.a.createElement(v.a, {
					className: O.a.subredditIcon
				}), o.a.createElement("div", {
					className: O.a.lockupText
				}, o.a.createElement("span", {
					className: O.a.subredditName
				}, "r/", s), o.a.createElement("span", {
					className: O.a.subscribersCount
				}, N._({
					"*": "{number} members",
					_1: "1 member"
				}, [N._plural(d, "number", Object(n.b)(d))], {
					hk: "4yqFU9"
				})))), o.a.createElement("p", {
					className: O.a.description
				}, a), o.a.createElement(p.a, {
					className: O.a.subscribeButton,
					identifier: {
						name: s,
						type: "subreddit"
					},
					getEventFactory: I,
					priority: f.c.Tertiary,
					small: !0
				})))
			};
			t.a = C
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
				d = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				n = s.n(d);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", n.a);
			t.a = a
		},
		"./src/redditGQL/operations/RelatedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"02181c91f216"}')
		},
		"./src/redditGQL/operations/SubredditsCarousel.json": function(e) {
			e.exports = JSON.parse('{"id":"736dca8070d9"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RelatedSubredditsCarousel.400224cb194ff80e2aec.js.map