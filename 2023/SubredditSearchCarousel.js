// https://www.redditstatic.com/desktop2x/SubredditSearchCarousel.e00d8562fc8ace0f44f6.js
// Retrieved at 6/7/2023, 1:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditSearchCarousel"], {
		"./src/reddit/actions/subreddit/subredditCarousel.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return i
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/SubredditsCarousel.json");
			const i = (e, t, s, r, i) => async (o, c, l) => {
				let {
					gqlContext: u
				} = l;
				var m, p;
				if (c().subreddits.carousel.pending) return;
				const f = await ((e, t) => Object(n.a)(e, {
					...a,
					variables: t
				}))(u(), {
					subredditIds: e,
					hasNames: t || !1,
					subredditNames: s || [],
					hasPostIds: r || !1,
					postIds: i || []
				});
				if (!f.ok) return;
				const _ = f.body;
				_.data && _.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"] && o(d(null === (m = _.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"]) || void 0 === m ? void 0 : m.reduce((e, s) => ((null == s ? void 0 : s.id) && (e[t ? s.name.toLowerCase() : s.id] = s), e), {}))), (null === (p = _.data) || void 0 === p ? void 0 : p.postsInfoByIds) && o(b(_.data.postsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[null == t ? void 0 : t.id] = t), e), {})))
			}, o = "SUBREDDITS_CAROUSEL__LOADED", c = "SUBREDDITS_CAROUSEL__PENDING", d = Object(r.a)(o), l = (Object(r.a)(c), "POST_CAROUSEL__LOADED"), u = "POST_CAROUSEL__PENDING", b = Object(r.a)(l);
			Object(r.a)(u)
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
				i = s("./node_modules/lodash/throttle.js"),
				o = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./src/reddit/actions/subreddit.ts"),
				b = s("./src/reddit/actions/subreddit/subredditCarousel.ts"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/components/SubredditCarousel/index.m.less"),
				y = s.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(S.c)(e => {
				let {
					title: t,
					className: s,
					parentSubredditId: a,
					sendEvent: i,
					subredditIds: u,
					size: m = "large",
					minSubredditCount: p = 2
				} = e;
				const f = Object(l.d)(),
					[v, S] = Object(c.useState)(null),
					[h, O] = Object(c.useState)(null),
					[C, I] = Object(c.useState)(0),
					[B, k] = Object(c.useState)(void 0),
					g = Object(l.e)(e => Object(E.D)(e, u));
				Object(c.useEffect)(() => {
					(null == u ? void 0 : u.length) && f(Object(b.e)(u))
				}, [u]);
				const w = (null == g ? void 0 : g.filter(e => !e.isNsfw && !e.isSubscribed)) || [],
					A = e => () => {
						if (!h) return;
						const t = Math.sign(e) ? h.scrollLeft % 249 : 249 % h.scrollLeft,
							s = 249 * e - t;
						h.scrollBy({
							left: s,
							behavior: "smooth"
						})
					};
				return Object(c.useEffect)(() => {
					if (!v) return;
					const e = o()(() => {
						const e = Math.floor(v.clientWidth / 249);
						I(e), k((e > 1 ? 249 * e : 237) - 8)
					}, 30);
					return window.addEventListener("resize", e), e(), () => {
						window.removeEventListener("resize", e)
					}
				}, [v]), Object(c.useEffect)(() => {
					w.length < p || i((e => t => ({
						source: "similar_communities",
						action: "view",
						noun: "module",
						subreddit: e ? Object(E.X)(t, {
							subredditId: e
						}) : void 0
					}))(a))
				}, [w.length, p, a]), w.length < p ? null : d.a.createElement("div", {
					ref: S,
					className: Object(r.a)(y.a.carouselContainer, s, null === y.a || void 0 === y.a ? void 0 : y.a[m])
				}, d.a.createElement("div", {
					className: y.a.carouselHeader,
					style: {
						width: B
					}
				}, d.a.createElement("h3", {
					className: y.a.carouselTitle
				}, N._("{title}", [N._param("title", t)], {
					hk: "4n2CUI"
				})), w.length > C && d.a.createElement("div", {
					className: y.a.carouselControls
				}, d.a.createElement("button", {
					className: y.a.scrollButton,
					onClick: A(-C)
				}, d.a.createElement(_.a, {
					name: n.a.left_fill,
					className: y.a.scrollIcon
				})), d.a.createElement("button", {
					className: y.a.scrollButton,
					onClick: A(C)
				}, d.a.createElement(_.a, {
					name: n.a.right_fill,
					className: y.a.scrollIcon
				})))), d.a.createElement("div", {
					ref: O,
					className: y.a.carouselWrapper,
					style: {
						width: B
					}
				}, null == w ? void 0 : w.map((e, t) => {
					let {
						styles: s,
						...r
					} = e;
					var n;
					return d.a.createElement(j, x({
						index: t + 1,
						size: m,
						banner: null == s ? void 0 : s.bannerBackgroundImage,
						icon: (null == s ? void 0 : s.icon) || (null === (n = null == s ? void 0 : s.legacyIcon) || void 0 === n ? void 0 : n.url),
						key: `${r.name}:${t}`
					}, r))
				})))
			}), j = e => {
				let {
					id: t,
					index: s,
					name: n,
					subscribersCount: i,
					description: o,
					primaryColor: b,
					icon: _,
					isSubscribed: S,
					banner: h,
					path: x,
					size: O
				} = e;
				const j = Object(l.d)();
				Object(c.useEffect)(() => {
					j(Object(u.u)(n))
				}, [n]);
				const C = Object(c.useCallback)(e => ((e, t, s) => r => ({
					source: "similar_communities",
					action: "click",
					noun: e,
					actionInfo: {
						reason: `${s}`
					},
					subreddit: Object(E.X)(r, {
						subredditId: t
					})
				}))(e ? "unsubsribe" : "subscribe", t, s), [t]);
				return d.a.createElement("div", {
					className: Object(r.a)(y.a.carouselItem, null === y.a || void 0 === y.a ? void 0 : y.a[O])
				}, d.a.createElement("div", {
					className: y.a.bannerWrapper,
					style: {
						backgroundColor: b || void 0
					}
				}, d.a.createElement("img", {
					className: y.a.banner,
					src: h || void 0
				})), d.a.createElement("div", {
					className: y.a.carouselContent
				}, d.a.createElement(m.a, {
					to: x,
					className: y.a.lockup
				}, _ ? d.a.createElement("img", {
					src: _,
					className: y.a.subredditIcon
				}) : d.a.createElement(v.a, {
					className: y.a.subredditIcon
				}), d.a.createElement("div", {
					className: y.a.lockupText
				}, d.a.createElement("span", {
					className: y.a.subredditName
				}, "r/", n), d.a.createElement("span", {
					className: y.a.subscribersCount
				}, N._({
					"*": "{number} members",
					_1: "1 member"
				}, [N._plural(i, "number", Object(a.b)(i))], {
					hk: "4yqFU9"
				})))), d.a.createElement("p", {
					className: y.a.description
				}, o), d.a.createElement(p.a, {
					className: y.a.subscribeButton,
					identifier: {
						name: n,
						type: "subreddit"
					},
					getEventFactory: C,
					priority: f.c.Tertiary,
					small: !0
				})))
			};
			t.a = O
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
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", a.a);
			t.a = i
		},
		"./src/reddit/components/SubredditSearchCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_3yx-o0NzvbUrMl3roM2q1Q"
			}
		},
		"./src/reddit/components/SubredditSearchCarousel/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/pages/search/index.ts"),
				d = s("./src/reddit/components/SubredditCarousel/index.tsx"),
				l = s("./src/reddit/selectors/searchResults.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/components/SubredditSearchCarousel/index.m.less"),
				m = s.n(b);
			t.default = e => {
				let {
					subredditName: t
				} = e;
				const s = Object(o.d)(),
					{
						subreddits: b,
						parentSubredditId: p
					} = Object(o.e)(e => ({
						subreddits: Object(l.p)(e, {
							listingKey: "SUBREDDIT_CAROUSEL_SEARCH_KEY"
						}),
						parentSubredditId: Object(u.I)(e, t)
					})),
					f = Object(a.useMemo)(() => null == b ? void 0 : b.map(e => e.id), [b]);
				return Object(a.useEffect)(() => {
					t && s(Object(c.d)({
						key: "SUBREDDIT_CAROUSEL_SEARCH_KEY",
						options: {
							q: t,
							sort: n.fc.Relevance,
							t: n.oc.ALL,
							type: [n.ic.Subreddits]
						}
					}))
				}, [t]), i.a.createElement(d.a, {
					className: m.a.wrapper,
					parentSubredditId: p,
					title: r.fbt._("Similar Public Communities", null, {
						hk: "1cALgm"
					}),
					subredditIds: f
				})
			}
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				i = s("./src/reddit/controls/Button/index.tsx"),
				o = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = (e, t, s) => null != s ? s : t ? e : i.c.Plain,
				m = e => {
					let {
						border: t,
						priority: s,
						small: r,
						...n
					} = e;
					return a.a.createElement(i.t, u({}, n, {
						priority: b(i.c.Primary, t, s),
						className: Object(l.a)(n.className, d.a.BaseButton),
						size: r ? i.d.S : i.d.M
					}))
				},
				p = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = e => {
					let {
						buttonType: t,
						border: s,
						priority: r,
						small: n,
						...o
					} = e;
					return a.a.createElement(i.t, u({}, o, {
						priority: b(i.c.Secondary, s, r),
						className: Object(l.a)(o.className, d.a.BaseButton),
						size: n ? i.d.S : i.d.M,
						text: p(t)
					}))
				};
			class _ extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: s,
						priority: r,
						small: n = !1,
						isFullWidth: i = !1,
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: n,
						isFullWidth: i,
						style: c
					};
					return this.props.userIsSubscriber ? a.a.createElement(f, u({}, d, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(m, u({}, d, {
						id: s
					}), this.props.children, Object(o.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				n = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(n.a)(Object(r.c)(a.a))
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), n.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
		},
		"./src/redditGQL/operations/SubredditsCarousel.json": function(e) {
			e.exports = JSON.parse('{"id":"a818d17baafc"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditSearchCarousel.e00d8562fc8ace0f44f6.js.map