// https://www.redditstatic.com/desktop2x/SubredditSearchCarousel.90058a40ac63ec8dd6ea.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditSearchCarousel"], {
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
				l = s.n(o),
				d = s("./node_modules/react-redux/es/index.js"),
				u = s("./src/reddit/actions/subreddit.ts"),
				b = s("./src/reddit/actions/subreddit/subredditCarousel.ts"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/components/SubredditCarousel/index.m.less"),
				y = s.n(E);

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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(x.c)(e => {
				let {
					title: t,
					className: s,
					parentSubredditId: a,
					sendEvent: i,
					subredditIds: u,
					size: m = "large",
					minSubredditCount: p = 2
				} = e;
				const f = Object(d.d)(),
					[_, x] = Object(o.useState)(null),
					[E, j] = Object(o.useState)(null),
					[C, k] = Object(o.useState)(0),
					[B, g] = Object(o.useState)(void 0),
					w = Object(d.e)(e => Object(h.D)(e, u));
				Object(o.useEffect)(() => {
					(null == u ? void 0 : u.length) && f(Object(b.e)(u))
				}, [u]);
				const I = (null == w ? void 0 : w.filter(e => !e.isNsfw && !e.isSubscribed)) || [],
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
					const e = c()(() => {
						const e = Math.floor(_.clientWidth / 249);
						k(e), g((e > 1 ? 249 * e : 237) - 8)
					}, 30);
					return window.addEventListener("resize", e), e(), () => {
						window.removeEventListener("resize", e)
					}
				}, [_]), Object(o.useEffect)(() => {
					I.length < p || i((e => t => ({
						source: "similar_communities",
						action: "view",
						noun: "module",
						subreddit: e ? Object(h.X)(t, {
							subredditId: e
						}) : void 0
					}))(a))
				}, [I.length, p, a]), I.length < p ? null : l.a.createElement("div", {
					ref: x,
					className: Object(r.a)(y.a.carouselContainer, s, null === y.a || void 0 === y.a ? void 0 : y.a[m])
				}, l.a.createElement("div", {
					className: y.a.carouselHeader,
					style: {
						width: B
					}
				}, l.a.createElement("h3", {
					className: y.a.carouselTitle
				}, N._("{title}", [N._param("title", t)], {
					hk: "4n2CUI"
				})), I.length > C && l.a.createElement("div", {
					className: y.a.carouselControls
				}, l.a.createElement("button", {
					className: y.a.scrollButton,
					onClick: A(-C)
				}, l.a.createElement(v.a, {
					name: n.a.left_fill,
					className: y.a.scrollIcon
				})), l.a.createElement("button", {
					className: y.a.scrollButton,
					onClick: A(C)
				}, l.a.createElement(v.a, {
					name: n.a.right_fill,
					className: y.a.scrollIcon
				})))), l.a.createElement("div", {
					ref: j,
					className: y.a.carouselWrapper,
					style: {
						width: B
					}
				}, null == I ? void 0 : I.map((e, t) => {
					let {
						styles: s,
						...r
					} = e;
					var n;
					return l.a.createElement(O, S({
						index: t + 1,
						size: m,
						banner: null == s ? void 0 : s.bannerBackgroundImage,
						icon: (null == s ? void 0 : s.icon) || (null === (n = null == s ? void 0 : s.legacyIcon) || void 0 === n ? void 0 : n.url),
						key: `${r.name}:${t}`
					}, r))
				})))
			}), O = e => {
				let {
					id: t,
					index: s,
					name: n,
					subscribersCount: i,
					description: c,
					primaryColor: b,
					icon: v,
					isSubscribed: x,
					banner: E,
					path: S,
					size: j
				} = e;
				const O = Object(d.d)();
				Object(o.useEffect)(() => {
					O(Object(u.u)(n))
				}, [n]);
				const C = Object(o.useCallback)(e => ((e, t, s) => r => ({
					source: "similar_communities",
					action: "click",
					noun: e,
					actionInfo: {
						reason: `${s}`
					},
					subreddit: Object(h.X)(r, {
						subredditId: t
					})
				}))(e ? "unsubsribe" : "subscribe", t, s), [t]);
				return l.a.createElement("div", {
					className: Object(r.a)(y.a.carouselItem, null === y.a || void 0 === y.a ? void 0 : y.a[j])
				}, l.a.createElement("div", {
					className: y.a.bannerWrapper,
					style: {
						backgroundColor: b || void 0
					}
				}, l.a.createElement("img", {
					className: y.a.banner,
					src: E || void 0
				})), l.a.createElement("div", {
					className: y.a.carouselContent
				}, l.a.createElement(m.a, {
					to: S,
					className: y.a.lockup
				}, v ? l.a.createElement("img", {
					src: v,
					className: y.a.subredditIcon
				}) : l.a.createElement(_.a, {
					className: y.a.subredditIcon
				}), l.a.createElement("div", {
					className: y.a.lockupText
				}, l.a.createElement("span", {
					className: y.a.subredditName
				}, "r/", n), l.a.createElement("span", {
					className: y.a.subscribersCount
				}, N._({
					"*": "{number} members",
					_1: "1 member"
				}, [N._plural(i, "number", Object(a.b)(i))], {
					hk: "4yqFU9"
				})))), l.a.createElement("p", {
					className: y.a.description
				}, c), l.a.createElement(p.a, {
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
			t.a = j
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
				c = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/actions/pages/search/index.ts"),
				l = s("./src/reddit/components/SubredditCarousel/index.tsx"),
				d = s("./src/reddit/selectors/searchResults.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/components/SubredditSearchCarousel/index.m.less"),
				m = s.n(b);
			t.default = e => {
				let {
					subredditName: t
				} = e;
				const s = Object(c.d)(),
					{
						subreddits: b,
						parentSubredditId: p
					} = Object(c.e)(e => ({
						subreddits: Object(d.p)(e, {
							listingKey: "SUBREDDIT_CAROUSEL_SEARCH_KEY"
						}),
						parentSubredditId: Object(u.I)(e, t)
					})),
					f = Object(a.useMemo)(() => null == b ? void 0 : b.map(e => e.id), [b]);
				return Object(a.useEffect)(() => {
					t && s(Object(o.d)({
						key: "SUBREDDIT_CAROUSEL_SEARCH_KEY",
						options: {
							q: t,
							sort: n.ec.Relevance,
							t: n.nc.ALL,
							type: [n.hc.Subreddits]
						}
					}))
				}, [t]), i.a.createElement(l.a, {
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
				return v
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				o = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = s.n(o),
				d = s("./src/lib/classNames/index.ts");

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
						className: Object(d.a)(n.className, l.a.BaseButton),
						size: r ? i.d.S : i.d.M
					}))
				},
				p = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
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
						...c
					} = e;
					return a.a.createElement(i.t, u({}, c, {
						priority: b(i.c.Secondary, s, r),
						className: Object(d.a)(c.className, l.a.BaseButton),
						size: n ? i.d.S : i.d.M,
						text: p(t)
					}))
				};
			class v extends a.a.Component {
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
						style: o
					} = this.props, l = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: n,
						isFullWidth: i,
						style: o
					};
					return this.props.userIsSubscriber ? a.a.createElement(f, u({}, l, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(m, u({}, l, {
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditSearchCarousel.90058a40ac63ec8dd6ea.js.map