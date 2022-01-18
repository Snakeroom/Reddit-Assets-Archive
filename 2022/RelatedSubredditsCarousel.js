// https://www.redditstatic.com/desktop2x/RelatedSubredditsCarousel.67962012f99edd7aa089.js
// Retrieved at 1/18/2022, 2:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RelatedSubredditsCarousel"], {
		"./src/reddit/actions/subreddit/relatedSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/endpoints/subreddit/recommendations.ts");
			const d = (e, t) => async (s, r, {
				gqlContext: d
			}) => {
				var a;
				const o = await Object(n.a)(d(), {
					subredditIds: [e],
					count: t
				});
				if (!o.ok) return;
				const c = o.body;
				(null === (a = c.data.subredditRecommendations.recommendations) || void 0 === a ? void 0 : a.length) && s(i({
					subredditId: e,
					relatedSubreddits: c.data.subredditRecommendations.recommendations.reduce((e, {
						id: t
					}) => (t && e.push(t), e), [])
				}))
			}, a = "RELATED_SUBREDDITS__LOADED", i = Object(r.a)(a)
		},
		"./src/reddit/actions/subreddit/subredditCarousel.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditsCarousel.json");
			const a = (e, t, s, r, a) => async (i, o, {
				gqlContext: l
			}) => {
				var u, m;
				if (o().subreddits.carousel.pending) return;
				const p = await ((e, t) => Object(n.a)(e, {
					...d,
					variables: t
				}))(l(), {
					subredditIds: e,
					hasNames: t || !1,
					subredditNames: s || [],
					hasPostIds: r || !1,
					postIds: a || []
				});
				if (!p.ok) return;
				const f = p.body;
				f.data && f.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"] && i(c(null === (u = f.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"]) || void 0 === u ? void 0 : u.reduce((e, s) => ((null == s ? void 0 : s.id) && (e[t ? s.name.toLowerCase() : s.id] = s), e), {}))), (null === (m = f.data) || void 0 === m ? void 0 : m.postsInfoByIds) && i(b(f.data.postsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[null == t ? void 0 : t.id] = t), e), {})))
			}, i = "SUBREDDITS_CAROUSEL__LOADED", o = "SUBREDDITS_CAROUSEL__PENDING", c = Object(r.a)(i), l = (Object(r.a)(o), "POST_CAROUSEL__LOADED"), u = "POST_CAROUSEL__PENDING", b = Object(r.a)(l);
			Object(r.a)(u)
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
				n = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/actions/subreddit/relatedSubreddits.ts"),
				i = s("./src/reddit/components/SubredditCarousel/index.tsx"),
				o = s("./src/reddit/selectors/subreddit.ts"),
				c = s("./src/reddit/components/RelatedSubredditsCarousel/index.m.less"),
				l = s.n(c);
			t.default = ({
				subredditId: e
			}) => {
				const t = Object(d.d)(),
					s = Object(r.useRef)(null),
					c = Object(d.e)(t => ((e, t) => {
						const {
							name: s
						} = Object(o.R)(e, {
							subredditId: t
						}) || {};
						return Object(o.db)(e, {
							identifier: {
								name: s,
								type: "subreddit"
							}
						})
					})(t, e)),
					[u, b] = Object(r.useState)(c ? 0 : void 0),
					m = Object(d.e)(t => Object(o.p)(t, {
						subredditId: e
					}));
				return Object(r.useEffect)(() => (e && t(Object(a.b)(e, 12)), () => {
					b(void 0)
				}), [e]), Object(r.useEffect)(() => {
					var e;
					if (!c || void 0 !== u) return;
					const t = null === (e = s.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
					b(null == t ? void 0 : t.height)
				}, [c, u]), n.a.createElement("div", {
					className: l.a.wrapper,
					style: {
						height: u
					}
				}, n.a.createElement("div", {
					ref: s,
					className: l.a.container
				}, n.a.createElement(i.a, {
					parentSubredditId: e,
					title: "Similar Communities",
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
				n = s("./src/lib/constants/icons.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./node_modules/lodash/throttle.js"),
				i = s.n(a),
				o = s("./node_modules/react/index.js"),
				c = s.n(o),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./src/reddit/actions/subreddit.ts"),
				b = s("./src/reddit/actions/subreddit/subredditCarousel.ts"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/components/SubredditCarousel/index.m.less"),
				x = s.n(E);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = Object(j.c)(({
				title: e,
				className: t,
				parentSubredditId: s,
				sendEvent: d,
				subredditIds: a,
				size: u = "large",
				minSubredditCount: m = 2
			}) => {
				const p = Object(l.d)(),
					[f, _] = Object(o.useState)(null),
					[j, E] = Object(o.useState)(null),
					[C, y] = Object(o.useState)(0),
					[h, g] = Object(o.useState)(void 0),
					k = Object(l.e)(e => Object(O.x)(e, a));
				Object(o.useEffect)(() => {
					(null == a ? void 0 : a.length) && p(Object(b.e)(a))
				}, [a]);
				const R = (null == k ? void 0 : k.filter(e => !e.isNsfw && !e.isSubscribed)) || [],
					D = e => () => {
						if (!j) return;
						const t = Math.sign(e) ? j.scrollLeft % 249 : 249 % j.scrollLeft,
							s = 249 * e - t;
						j.scrollBy({
							left: s,
							behavior: "smooth"
						})
					};
				return Object(o.useEffect)(() => {
					if (!f) return;
					const e = i()(() => {
						const e = Math.floor(f.clientWidth / 249);
						y(e), g((e > 1 ? 249 * e : 237) - 8)
					}, 30);
					return window.addEventListener("resize", e), e(), () => {
						window.removeEventListener("resize", e)
					}
				}, [f]), Object(o.useEffect)(() => {
					R.length < m || d((e => t => ({
						source: "similar_communities",
						action: "view",
						noun: "module",
						subreddit: e ? Object(O.R)(t, {
							subredditId: e
						}) : void 0
					}))(s))
				}, [R.length, m, s]), R.length < m ? null : c.a.createElement("div", {
					ref: _,
					className: Object(r.a)(x.a.carouselContainer, t, null === x.a || void 0 === x.a ? void 0 : x.a[u])
				}, c.a.createElement("div", {
					className: x.a.carouselHeader,
					style: {
						width: h
					}
				}, c.a.createElement("h3", {
					className: x.a.carouselTitle
				}, S._("{title}", [S._param("title", e)], {
					hk: "4n2CUI"
				})), R.length > C && c.a.createElement("div", {
					className: x.a.carouselControls
				}, c.a.createElement("button", {
					className: x.a.scrollButton,
					onClick: D(-C)
				}, c.a.createElement(v.a, {
					name: n.a.left_fill,
					className: x.a.scrollIcon
				})), c.a.createElement("button", {
					className: x.a.scrollButton,
					onClick: D(C)
				}, c.a.createElement(v.a, {
					name: n.a.right_fill,
					className: x.a.scrollIcon
				})))), c.a.createElement("div", {
					ref: E,
					className: x.a.carouselWrapper,
					style: {
						width: h
					}
				}, null == R ? void 0 : R.map(({
					styles: e,
					...t
				}, s) => {
					var r;
					return c.a.createElement(I, N({
						index: s + 1,
						size: u,
						banner: null == e ? void 0 : e.bannerBackgroundImage,
						icon: (null == e ? void 0 : e.icon) || (null === (r = null == e ? void 0 : e.legacyIcon) || void 0 === r ? void 0 : r.url),
						key: `${t.name}:${s}`
					}, t))
				})))
			}), I = ({
				id: e,
				index: t,
				name: s,
				subscribersCount: n,
				description: a,
				primaryColor: i,
				icon: b,
				isSubscribed: v,
				banner: j,
				path: E,
				size: N
			}) => {
				const C = Object(l.d)();
				Object(o.useEffect)(() => {
					C(Object(u.u)(s))
				}, [s]);
				const I = Object(o.useCallback)(s => ((e, t, s) => r => ({
					source: "similar_communities",
					action: "click",
					noun: e,
					actionInfo: {
						reason: `${s}`
					},
					subreddit: Object(O.R)(r, {
						subredditId: t
					})
				}))(s ? "unsubsribe" : "subscribe", e, t), [e]);
				return c.a.createElement("div", {
					className: Object(r.a)(x.a.carouselItem, null === x.a || void 0 === x.a ? void 0 : x.a[N])
				}, c.a.createElement("div", {
					className: x.a.bannerWrapper,
					style: {
						backgroundColor: i || void 0
					}
				}, c.a.createElement("img", {
					className: x.a.banner,
					src: j || void 0
				})), c.a.createElement("div", {
					className: x.a.carouselContent
				}, c.a.createElement(m.a, {
					to: E,
					className: x.a.lockup
				}, b ? c.a.createElement("img", {
					src: b,
					className: x.a.subredditIcon
				}) : c.a.createElement(_.a, {
					className: x.a.subredditIcon
				}), c.a.createElement("div", {
					className: x.a.lockupText
				}, c.a.createElement("span", {
					className: x.a.subredditName
				}, "r/", s), c.a.createElement("span", {
					className: x.a.subscribersCount
				}, S._({
					"*": "{number} members",
					_1: "1 member"
				}, [S._plural(n, "number", Object(d.b)(n))], {
					hk: "4yqFU9"
				})))), c.a.createElement("p", {
					className: x.a.description
				}, a), c.a.createElement(p.a, {
					className: x.a.subscribeButton,
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
				n = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				d = s.n(n);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", d.a);
			t.a = a
		},
		"./src/reddit/endpoints/subreddit/recommendations.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/makeGqlRequest/index.ts"),
				n = s("./src/redditGQL/operations/SubredditRecommendations.json");
			t.a = (e, t) => Object(r.a)(e, {
				...n,
				variables: t
			})
		},
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"074eb98957ec"}')
		},
		"./src/redditGQL/operations/SubredditsCarousel.json": function(e) {
			e.exports = JSON.parse('{"id":"a818d17baafc"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RelatedSubredditsCarousel.67962012f99edd7aa089.js.map