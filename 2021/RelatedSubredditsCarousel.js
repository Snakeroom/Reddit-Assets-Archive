// https://www.redditstatic.com/desktop2x/RelatedSubredditsCarousel.1df94ee83fbdac410cbe.js
// Retrieved at 12/15/2021, 12:30:04 PM by Reddit Dataminer v1.0.0
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
				const c = await Object(n.a)(d(), {
					subredditIds: [e],
					count: t
				});
				if (!c.ok) return;
				const o = c.body;
				(null === (a = o.data.subredditRecommendations.recommendations) || void 0 === a ? void 0 : a.length) && s(i({
					subredditId: e,
					relatedSubreddits: o.data.subredditRecommendations.recommendations.reduce((e, {
						id: t
					}) => (t && e.push(t), e), [])
				}))
			}, a = "RELATED_SUBREDDITS__LOADED", i = Object(r.a)(a)
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
				n = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditsCarousel.json");
			const a = e => async (t, s, {
				gqlContext: r
			}) => {
				if (s().subreddits.carousel.pending) return;
				const a = await ((e, t) => Object(n.a)(e, {
					...d,
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
				n = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/actions/subreddit/relatedSubreddits.ts"),
				i = s("./src/reddit/components/SubredditCarousel/index.tsx"),
				c = s("./src/reddit/selectors/subreddit.ts"),
				o = s("./src/reddit/components/RelatedSubredditsCarousel/index.m.less"),
				l = s.n(o);
			t.default = ({
				subredditId: e
			}) => {
				const t = Object(d.d)(),
					s = Object(r.useRef)(null),
					o = Object(d.e)(t => ((e, t) => {
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
					m = Object(d.e)(t => Object(c.p)(t, {
						subredditId: e
					}));
				return Object(r.useEffect)(() => (e && t(Object(a.b)(e, 12)), () => {
					b(void 0)
				}), [e]), Object(r.useEffect)(() => {
					var e;
					if (!o || void 0 !== u) return;
					const t = null === (e = s.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
					b(null == t ? void 0 : t.height)
				}, [o, u]), n.a.createElement("div", {
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
				O = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/components/SubredditCarousel/index.m.less"),
				E = s.n(x);

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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = Object(O.c)(({
				title: e,
				className: t,
				parentSubredditId: s,
				sendEvent: d,
				subredditIds: a,
				size: u = "large",
				minSubredditCount: m = 2
			}) => {
				const p = Object(l.d)(),
					[f, v] = Object(c.useState)(null),
					[O, x] = Object(c.useState)(null),
					[C, I] = Object(c.useState)(0),
					[g, h] = Object(c.useState)(void 0),
					k = Object(l.e)(e => Object(j.x)(e, a));
				Object(c.useEffect)(() => {
					(null == a ? void 0 : a.length) && p(Object(b.c)(a))
				}, [a]);
				const R = (null == k ? void 0 : k.filter(e => !e.isNsfw && !e.isSubscribed)) || [],
					D = e => () => {
						if (!O) return;
						const t = Math.sign(e) ? O.scrollLeft % 249 : 249 % O.scrollLeft,
							s = 249 * e - t;
						O.scrollBy({
							left: s,
							behavior: "smooth"
						})
					};
				return Object(c.useEffect)(() => {
					if (!f) return;
					const e = i()(() => {
						const e = Math.floor(f.clientWidth / 249);
						I(e), h((e > 1 ? 249 * e : 237) - 8)
					}, 30);
					return window.addEventListener("resize", e), e(), () => {
						window.removeEventListener("resize", e)
					}
				}, [f]), Object(c.useEffect)(() => {
					R.length < m || d((e => t => ({
						source: "similar_communities",
						action: "view",
						noun: "module",
						subreddit: e ? Object(j.R)(t, {
							subredditId: e
						}) : void 0
					}))(s))
				}, [R.length, m, s]), R.length < m ? null : o.a.createElement("div", {
					ref: v,
					className: Object(r.a)(E.a.carouselContainer, t, null === E.a || void 0 === E.a ? void 0 : E.a[u])
				}, o.a.createElement("div", {
					className: E.a.carouselHeader,
					style: {
						width: g
					}
				}, o.a.createElement("h3", {
					className: E.a.carouselTitle
				}, N._("{title}", [N._param("title", e)], {
					hk: "4n2CUI"
				})), R.length > C && o.a.createElement("div", {
					className: E.a.carouselControls
				}, o.a.createElement("button", {
					className: E.a.scrollButton,
					onClick: D(-C)
				}, o.a.createElement(_.a, {
					name: n.a.left_fill,
					className: E.a.scrollIcon
				})), o.a.createElement("button", {
					className: E.a.scrollButton,
					onClick: D(C)
				}, o.a.createElement(_.a, {
					name: n.a.right_fill,
					className: E.a.scrollIcon
				})))), o.a.createElement("div", {
					ref: x,
					className: E.a.carouselWrapper,
					style: {
						width: g
					}
				}, null == R ? void 0 : R.map(({
					styles: {
						icon: e,
						legacyIcon: t,
						bannerBackgroundImage: s
					},
					...r
				}, n) => o.a.createElement(y, S({
					index: n + 1,
					size: u,
					banner: s,
					icon: e || (null == t ? void 0 : t.url),
					key: `${r.name}:${n}`
				}, r)))))
			}), y = ({
				id: e,
				index: t,
				name: s,
				subscribersCount: n,
				description: a,
				primaryColor: i,
				icon: b,
				isSubscribed: _,
				banner: O,
				path: x,
				size: S
			}) => {
				const C = Object(l.d)();
				Object(c.useEffect)(() => {
					C(Object(u.u)(s))
				}, [s]);
				const y = Object(c.useCallback)(s => ((e, t, s) => r => ({
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
					className: Object(r.a)(E.a.carouselItem, null === E.a || void 0 === E.a ? void 0 : E.a[S])
				}, o.a.createElement("div", {
					className: E.a.bannerWrapper,
					style: {
						backgroundColor: i || void 0
					}
				}, o.a.createElement("img", {
					className: E.a.banner,
					src: O || void 0
				})), o.a.createElement("div", {
					className: E.a.carouselContent
				}, o.a.createElement(m.a, {
					to: x,
					className: E.a.lockup
				}, b ? o.a.createElement("img", {
					src: b,
					className: E.a.subredditIcon
				}) : o.a.createElement(v.a, {
					className: E.a.subredditIcon
				}), o.a.createElement("div", {
					className: E.a.lockupText
				}, o.a.createElement("span", {
					className: E.a.subredditName
				}, "r/", s), o.a.createElement("span", {
					className: E.a.subscribersCount
				}, N._({
					"*": "{number} members",
					_1: "1 member"
				}, [N._plural(n, "number", Object(d.b)(n))], {
					hk: "4yqFU9"
				})))), o.a.createElement("p", {
					className: E.a.description
				}, a), o.a.createElement(p.a, {
					className: E.a.subscribeButton,
					identifier: {
						name: s,
						type: "subreddit"
					},
					getEventFactory: y,
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
			e.exports = JSON.parse('{"id":"736dca8070d9"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RelatedSubredditsCarousel.1df94ee83fbdac410cbe.js.map