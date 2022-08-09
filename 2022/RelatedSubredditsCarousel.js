// https://www.redditstatic.com/desktop2x/RelatedSubredditsCarousel.41bcd86da7f87117b588.js
// Retrieved at 8/9/2022, 12:10:04 PM by Reddit Dataminer v1.0.0
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
			const d = (e, t) => async (s, r, d) => {
				let {
					gqlContext: a
				} = d;
				var o;
				const c = await Object(n.a)(a(), {
					subredditIds: [e],
					count: t
				});
				if (!c.ok) return;
				const l = c.body;
				(null === (o = l.data.subredditRecommendations.recommendations) || void 0 === o ? void 0 : o.length) && s(i({
					subredditId: e,
					relatedSubreddits: l.data.subredditRecommendations.recommendations.reduce((e, t) => {
						let {
							id: s
						} = t;
						return s && e.push(s), e
					}, [])
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
			const a = (e, t, s, r, a) => async (i, o, l) => {
				let {
					gqlContext: u
				} = l;
				var m, p;
				if (o().subreddits.carousel.pending) return;
				const f = await ((e, t) => Object(n.a)(e, {
					...d,
					variables: t
				}))(u(), {
					subredditIds: e,
					hasNames: t || !1,
					subredditNames: s || [],
					hasPostIds: r || !1,
					postIds: a || []
				});
				if (!f.ok) return;
				const v = f.body;
				v.data && v.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"] && i(c(null === (m = v.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"]) || void 0 === m ? void 0 : m.reduce((e, s) => ((null == s ? void 0 : s.id) && (e[t ? s.name.toLowerCase() : s.id] = s), e), {}))), (null === (p = v.data) || void 0 === p ? void 0 : p.postsInfoByIds) && i(b(v.data.postsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[null == t ? void 0 : t.id] = t), e), {})))
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
			t.default = e => {
				let {
					subredditId: t
				} = e;
				const s = Object(d.d)(),
					c = Object(r.useRef)(null),
					u = Object(d.e)(e => ((e, t) => {
						const {
							name: s
						} = Object(o.V)(e, {
							subredditId: t
						}) || {};
						return Object(o.hb)(e, {
							identifier: {
								name: s,
								type: "subreddit"
							}
						})
					})(e, t)),
					[b, m] = Object(r.useState)(u ? 0 : void 0),
					p = Object(d.e)(e => Object(o.t)(e, {
						subredditId: t
					}));
				return Object(r.useEffect)(() => (t && s(Object(a.b)(t, 12)), () => {
					m(void 0)
				}), [t]), Object(r.useEffect)(() => {
					var e;
					if (!u || void 0 !== b) return;
					const t = null === (e = c.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
					m(null == t ? void 0 : t.height)
				}, [u, b]), n.a.createElement("div", {
					className: l.a.wrapper,
					style: {
						height: b
					}
				}, n.a.createElement("div", {
					ref: c,
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
				N = s.n(E);

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
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = Object(j.c)(e => {
				let {
					title: t,
					className: s,
					parentSubredditId: d,
					sendEvent: a,
					subredditIds: u,
					size: m = "large",
					minSubredditCount: p = 2
				} = e;
				const f = Object(l.d)(),
					[_, j] = Object(o.useState)(null),
					[E, C] = Object(o.useState)(null),
					[y, h] = Object(o.useState)(0),
					[g, k] = Object(o.useState)(void 0),
					D = Object(l.e)(e => Object(O.B)(e, u));
				Object(o.useEffect)(() => {
					(null == u ? void 0 : u.length) && f(Object(b.e)(u))
				}, [u]);
				const L = (null == D ? void 0 : D.filter(e => !e.isNsfw && !e.isSubscribed)) || [],
					A = e => () => {
						if (!E) return;
						const t = Math.sign(e) ? E.scrollLeft % 249 : 249 % E.scrollLeft,
							s = 249 * e - t;
						E.scrollBy({
							left: s,
							behavior: "smooth"
						})
					};
				return Object(o.useEffect)(() => {
					if (!_) return;
					const e = i()(() => {
						const e = Math.floor(_.clientWidth / 249);
						h(e), k((e > 1 ? 249 * e : 237) - 8)
					}, 30);
					return window.addEventListener("resize", e), e(), () => {
						window.removeEventListener("resize", e)
					}
				}, [_]), Object(o.useEffect)(() => {
					L.length < p || a((e => t => ({
						source: "similar_communities",
						action: "view",
						noun: "module",
						subreddit: e ? Object(O.V)(t, {
							subredditId: e
						}) : void 0
					}))(d))
				}, [L.length, p, d]), L.length < p ? null : c.a.createElement("div", {
					ref: j,
					className: Object(r.a)(N.a.carouselContainer, s, null === N.a || void 0 === N.a ? void 0 : N.a[m])
				}, c.a.createElement("div", {
					className: N.a.carouselHeader,
					style: {
						width: g
					}
				}, c.a.createElement("h3", {
					className: N.a.carouselTitle
				}, x._("{title}", [x._param("title", t)], {
					hk: "4n2CUI"
				})), L.length > y && c.a.createElement("div", {
					className: N.a.carouselControls
				}, c.a.createElement("button", {
					className: N.a.scrollButton,
					onClick: A(-y)
				}, c.a.createElement(v.a, {
					name: n.a.left_fill,
					className: N.a.scrollIcon
				})), c.a.createElement("button", {
					className: N.a.scrollButton,
					onClick: A(y)
				}, c.a.createElement(v.a, {
					name: n.a.right_fill,
					className: N.a.scrollIcon
				})))), c.a.createElement("div", {
					ref: C,
					className: N.a.carouselWrapper,
					style: {
						width: g
					}
				}, null == L ? void 0 : L.map((e, t) => {
					let {
						styles: s,
						...r
					} = e;
					var n;
					return c.a.createElement(I, S({
						index: t + 1,
						size: m,
						banner: null == s ? void 0 : s.bannerBackgroundImage,
						icon: (null == s ? void 0 : s.icon) || (null === (n = null == s ? void 0 : s.legacyIcon) || void 0 === n ? void 0 : n.url),
						key: `${r.name}:${t}`
					}, r))
				})))
			}), I = e => {
				let {
					id: t,
					index: s,
					name: n,
					subscribersCount: a,
					description: i,
					primaryColor: b,
					icon: v,
					isSubscribed: j,
					banner: E,
					path: S,
					size: C
				} = e;
				const I = Object(l.d)();
				Object(o.useEffect)(() => {
					I(Object(u.u)(n))
				}, [n]);
				const y = Object(o.useCallback)(e => ((e, t, s) => r => ({
					source: "similar_communities",
					action: "click",
					noun: e,
					actionInfo: {
						reason: `${s}`
					},
					subreddit: Object(O.V)(r, {
						subredditId: t
					})
				}))(e ? "unsubsribe" : "subscribe", t, s), [t]);
				return c.a.createElement("div", {
					className: Object(r.a)(N.a.carouselItem, null === N.a || void 0 === N.a ? void 0 : N.a[C])
				}, c.a.createElement("div", {
					className: N.a.bannerWrapper,
					style: {
						backgroundColor: b || void 0
					}
				}, c.a.createElement("img", {
					className: N.a.banner,
					src: E || void 0
				})), c.a.createElement("div", {
					className: N.a.carouselContent
				}, c.a.createElement(m.a, {
					to: S,
					className: N.a.lockup
				}, v ? c.a.createElement("img", {
					src: v,
					className: N.a.subredditIcon
				}) : c.a.createElement(_.a, {
					className: N.a.subredditIcon
				}), c.a.createElement("div", {
					className: N.a.lockupText
				}, c.a.createElement("span", {
					className: N.a.subredditName
				}, "r/", n), c.a.createElement("span", {
					className: N.a.subscribersCount
				}, x._({
					"*": "{number} members",
					_1: "1 member"
				}, [x._plural(a, "number", Object(d.b)(a))], {
					hk: "4yqFU9"
				})))), c.a.createElement("p", {
					className: N.a.description
				}, i), c.a.createElement(p.a, {
					className: N.a.subscribeButton,
					identifier: {
						name: n,
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
			e.exports = JSON.parse('{"id":"a818d17baafc"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RelatedSubredditsCarousel.41bcd86da7f87117b588.js.map