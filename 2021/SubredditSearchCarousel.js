// https://www.redditstatic.com/desktop2x/SubredditSearchCarousel.57a16b576d74ee9363ca.js
// Retrieved at 12/9/2021, 1:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditSearchCarousel"], {
		"./src/reddit/actions/subreddit/subredditCarousel.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/SubredditsCarousel.json");
			const i = e => async (t, s, {
				gqlContext: r
			}) => {
				if (s().subreddits.carousel.pending) return;
				const i = await ((e, t) => Object(n.a)(e, {
					...a,
					variables: t
				}))(r(), {
					subredditIds: e
				});
				if (!i.ok) return;
				const c = i.body;
				c.data && t(d(c.data.subredditsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[t.id] = t), e), {})))
			}, c = "SUBREDDITS_CAROUSEL__LOADED", o = "SUBREDDITS_CAROUSEL__PENDING", d = Object(r.a)(c);
			Object(r.a)(o)
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
				c = s.n(i),
				o = s("./node_modules/react/index.js"),
				d = s.n(o),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./src/reddit/actions/subreddit.ts"),
				b = s("./src/reddit/actions/subreddit/subredditCarousel.ts"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/components/TrackingHelper/index.tsx"),
				v = s("./src/reddit/components/SubredditCarousel/index.m.less"),
				h = s.n(v);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = Object(S.c)(({
				title: e,
				className: t,
				parentSubredditId: s,
				sendEvent: a,
				subredditIds: i,
				size: u = "large",
				minSubredditCount: m = 2
			}) => {
				const p = Object(l.d)(),
					[f, E] = Object(o.useState)(null),
					[S, v] = Object(o.useState)(null),
					[j, N] = Object(o.useState)(0),
					[C, B] = Object(o.useState)(void 0),
					k = Object(l.e)(e => Object(x.x)(e, i));
				Object(o.useEffect)(() => {
					(null == i ? void 0 : i.length) && p(Object(b.c)(i))
				}, [i]);
				const g = (null == k ? void 0 : k.filter(e => !e.isNsfw && !e.isSubscribed)) || [],
					I = e => () => {
						if (!S) return;
						const t = Math.sign(e) ? S.scrollLeft % 249 : 249 % S.scrollLeft,
							s = 249 * e - t;
						S.scrollBy({
							left: s,
							behavior: "smooth"
						})
					};
				return Object(o.useEffect)(() => {
					if (!f) return;
					const e = c()(() => {
						const e = Math.floor(f.clientWidth / 249);
						N(e), B((e > 1 ? 249 * e : 237) - 8)
					}, 30);
					return window.addEventListener("resize", e), e(), () => {
						window.removeEventListener("resize", e)
					}
				}, [f]), Object(o.useEffect)(() => {
					g.length < m || a((e => t => ({
						source: "similar_communities",
						action: "view",
						noun: "module",
						subreddit: e ? Object(x.R)(t, {
							subredditId: e
						}) : void 0
					}))(s))
				}, [g.length, m, s]), g.length < m ? null : d.a.createElement("div", {
					ref: E,
					className: Object(r.a)(h.a.carouselContainer, t, null === h.a || void 0 === h.a ? void 0 : h.a[u])
				}, d.a.createElement("div", {
					className: h.a.carouselHeader,
					style: {
						width: C
					}
				}, d.a.createElement("h3", {
					className: h.a.carouselTitle
				}, e), g.length > j && d.a.createElement("div", {
					className: h.a.carouselControls
				}, d.a.createElement("button", {
					className: h.a.scrollButton,
					onClick: I(-j)
				}, d.a.createElement(_.a, {
					name: n.a.left_fill,
					className: h.a.scrollIcon
				})), d.a.createElement("button", {
					className: h.a.scrollButton,
					onClick: I(j)
				}, d.a.createElement(_.a, {
					name: n.a.right_fill,
					className: h.a.scrollIcon
				})))), d.a.createElement("div", {
					ref: v,
					className: h.a.carouselWrapper,
					style: {
						width: C
					}
				}, null == g ? void 0 : g.map(({
					styles: {
						icon: e,
						legacyIcon: t,
						bannerBackgroundImage: s
					},
					...r
				}, n) => d.a.createElement(O, y({
					index: n + 1,
					size: u,
					banner: s,
					icon: e || (null == t ? void 0 : t.url),
					key: `${r.name}:${n}`
				}, r)))))
			}), O = ({
				id: e,
				index: t,
				name: s,
				subscribersCount: n,
				description: i,
				primaryColor: c,
				icon: b,
				isSubscribed: _,
				banner: S,
				path: v,
				size: y
			}) => {
				const N = Object(l.d)();
				Object(o.useEffect)(() => {
					N(Object(u.u)(s))
				}, [s]);
				const O = Object(o.useCallback)(s => ((e, t, s) => r => ({
					source: "similar_communities",
					action: "click",
					noun: e,
					actionInfo: {
						reason: `${s}`
					},
					subreddit: Object(x.R)(r, {
						subredditId: t
					})
				}))(s ? "unsubsribe" : "subscribe", e, t), [e, _]);
				return d.a.createElement("div", {
					className: Object(r.a)(h.a.carouselItem, null === h.a || void 0 === h.a ? void 0 : h.a[y])
				}, d.a.createElement("div", {
					className: h.a.bannerWrapper,
					style: {
						backgroundColor: c || void 0
					}
				}, d.a.createElement("img", {
					className: h.a.banner,
					src: S || void 0
				})), d.a.createElement("div", {
					className: h.a.carouselContent
				}, d.a.createElement(m.a, {
					to: v,
					className: h.a.lockup
				}, b ? d.a.createElement("img", {
					src: b,
					className: h.a.subredditIcon
				}) : d.a.createElement(E.a, {
					className: h.a.subredditIcon
				}), d.a.createElement("div", {
					className: h.a.lockupText
				}, d.a.createElement("span", {
					className: h.a.subredditName
				}, "r/", s), d.a.createElement("span", {
					className: h.a.subscribersCount
				}, j._({
					"*": "{number} members",
					_1: "1 member"
				}, [j._plural(n, "number", Object(a.b)(n))], {
					hk: "4yqFU9"
				})))), d.a.createElement("p", {
					className: h.a.description
				}, i), d.a.createElement(p.a, {
					className: h.a.subscribeButton,
					identifier: {
						name: s,
						type: "subreddit"
					},
					getEventFactory: O,
					priority: f.c.Tertiary,
					small: !0
				})))
			};
			t.a = N
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
			var r = s("./src/lib/constants/index.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/pages/search/index.ts"),
				o = s("./src/reddit/components/SubredditCarousel/index.tsx"),
				d = s("./src/reddit/selectors/searchResults.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/components/SubredditSearchCarousel/index.m.less"),
				b = s.n(u);
			t.default = ({
				subredditName: e
			}) => {
				const t = Object(i.d)(),
					{
						subreddits: s,
						parentSubredditId: u
					} = Object(i.e)(t => ({
						subreddits: Object(d.k)(t, {
							listingKey: "SUBREDDIT_CAROUSEL_SEARCH_KEY"
						}),
						parentSubredditId: Object(l.C)(t, e)
					})),
					m = Object(n.useMemo)(() => null == s ? void 0 : s.map(e => e.id), [s]);
				return Object(n.useEffect)(() => {
					e && t(Object(c.d)("SUBREDDIT_CAROUSEL_SEARCH_KEY", {
						q: e,
						sort: r.Xb.Relevance,
						t: r.fc.ALL,
						type: [r.Zb.Subreddits]
					}))
				}, [e]), a.a.createElement(o.a, {
					className: b.a.wrapper,
					parentSubredditId: u,
					title: "Similar Public Communities",
					subredditIds: m
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
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				o = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = s.n(o),
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
				m = ({
					border: e,
					priority: t,
					small: s,
					...r
				}) => a.a.createElement(i.t, u({}, r, {
					priority: b(i.c.Primary, e, t),
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: s ? i.d.S : i.d.M
				})),
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
				f = ({
					buttonType: e,
					border: t,
					priority: s,
					small: r,
					...n
				}) => a.a.createElement(i.t, u({}, n, {
					priority: b(i.c.Secondary, t, s),
					className: Object(l.a)(n.className, d.a.BaseButton),
					size: r ? i.d.S : i.d.M,
					text: p(e)
				}));
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
						isFullWidth: i = !1
					} = this.props, o = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: n,
						isFullWidth: i
					};
					return this.props.userIsSubscriber ? a.a.createElement(f, u({}, o, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(m, u({}, o, {
						id: s
					}), this.props.children, Object(c.a)({
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
			e.exports = JSON.parse('{"id":"736dca8070d9"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditSearchCarousel.57a16b576d74ee9363ca.js.map