// https://www.redditstatic.com/desktop2x/reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.2efd435a19d6a9ff7255.js
// Retrieved at 10/27/2020, 1:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return b
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "d", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/omit.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const u = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return r => {
					const o = h(r.target, r.currentTarget),
						i = v(r.target, r.currentTarget);
					o && s && t && (m(r.target, r.currentTarget, p.anchors) ? s(t(e, o, i)) : s(s => {
						const n = t(e, o, i)(s);
						let r;
						if (n && n.actionInfo) {
							const e = n.actionInfo,
								{
									pageType: t
								} = e;
							r = l(e, ["pageType"])
						}
						return Object.assign(Object.assign({}, n), {
							actionInfo: Object(a.previousPageActionInfo)(s, r)
						})
					})), m(r.target, r.currentTarget, p.anchorsAndButtons) && n(r)
				}
			});

			function b(e) {
				class t extends i.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: s,
							clickTrackingId: n
						} = this.props;
						return i.a.createElement(e, d({}, r()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: u(n, s, t)
						}))
					}
				}
				return Object(c.c)(t)
			}
			const p = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				m = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && m(e.parentElement, t, s)),
				h = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && h(e.parentElement, t))
				},
				v = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && v(e.parentElement, t))
		},
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				Metadata: "YxCA1Mpgi_ThsEnFr_EFv",
				metadata: "YxCA1Mpgi_ThsEnFr_EFv",
				postEventMeta: "UORiCb6Mik-agLw97Owil"
			}
		},
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				a = s("./src/reddit/helpers/postEvent.ts"),
				d = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less"),
				l = s.n(d);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = i.a.wrapped(e => r.a.createElement("span", {
				className: e.className
			}, e.children), "Metadata", l.a), p = e => {
				let {
					post: t
				} = e;
				return Object(a.a)(t) ? r.a.createElement(c.a, {
					className: l.a.postEventMeta,
					post: t
				}) : r.a.createElement(r.a.Fragment, null, !t.isScoreHidden && r.a.createElement(r.a.Fragment, null, r.a.createElement(b, {
					"data-click-id": "score"
				}, u._({
					"*": "{Post score} points",
					_1: "1 point"
				}, [u._plural(t.score, "Post score", Object(o.b)(t.score))], {
					hk: "1gwCFh"
				})), r.a.createElement(b, null, "·")), r.a.createElement(b, {
					"data-click-id": "comments"
				}, u._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [u._plural(t.numComments, "number", Object(o.b)(t.numComments))], {
					hk: "3eG58Q"
				})))
			}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsTitle: "_1Y8_-0tCSlV_zRuJv1WV_p"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				p = s("./src/reddit/icons/svgs/Close/index.tsx"),
				m = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				h = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/Wrapper/index.m.less"),
				v = s.n(h);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(i.c)({
				didUserDisable: m.a,
				prefixedSubredditName: (e, t) => {
					let {
						numInstance: s
					} = t;
					return Object(m.i)(e, s)
				},
				interactedSubredditId: (e, t) => {
					let {
						numInstance: s
					} = t;
					return Object(m.h)(e, s)
				},
				cityLocation: m.c
			});
			class g extends r.a.Component {
				constructor(e) {
					super(e), this.hasFiredViewEvent = !1, this.getLocalStorageDisabled = () => !0, this.setLocalStorageDisabled = () => void 0, this.trackViewEvent = () => {
						this.hasFiredViewEvent || (this.props.sendEvent(Object(b.s)(this.props.listingKey, this.props.interactedSubredditId, this.props.listingPosition)), this.hasFiredViewEvent = !0)
					}, this.onHideComponent = () => {
						const {
							hideComponent: e,
							interactedSubredditId: t,
							listingKey: s,
							listingPosition: n
						} = this.props;
						this.setLocalStorageDisabled(), e(), this.props.sendEvent(Object(b.o)(s, t, n))
					}, this.onSubredditClick = () => {
						const {
							interactedSubredditId: e,
							listingKey: t,
							listingPosition: s
						} = this.props;
						this.props.sendEvent(Object(b.j)(t, e, s))
					}, this.getLocalStorageDisabled = Object(u.D)(), this.setLocalStorageDisabled = Object(u.X)()
				}
				componentDidMount() {
					const {
						showComponent: e
					} = this.props;
					this.props.pubsub && this.props.pubsub.addListeners(d.b, this.trackViewEvent), this.getLocalStorageDisabled() || e()
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(d.b, this.trackViewEvent)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(d.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(d.b, this.trackViewEvent)
				}
				render() {
					const {
						children: e,
						className: t,
						didUserDisable: s,
						prefixedSubredditName: n,
						shouldHideBottomPadding: o,
						cityLocation: i
					} = this.props;
					return s ? null : r.a.createElement("div", {
						className: Object(c.a)(v.a.container, t)
					}, r.a.createElement("div", {
						className: v.a.titleWrapper
					}, r.a.createElement("div", {
						className: v.a.titleTextWrapper
					}, r.a.createElement("div", {
						className: v.a.titleText
					}, E._("Discover communities", null, {
						hk: "2OpaUL"
					})), n && r.a.createElement("div", {
						className: v.a.subTitleWrapper
					}, E._("Because you're in {place}", [E._param("place", i)], {
						hk: "3qt67F"
					}))), r.a.createElement("div", {
						className: v.a.closeWrapper,
						onClick: this.onHideComponent
					}, r.a.createElement(p.a, {
						className: v.a.close
					}))), r.a.createElement("div", {
						className: Object(c.a)(v.a.contentWrapper, {
							[v.a.noBottomPadding]: o
						})
					}, e))
				}
			}
			var j = Object(o.b)(O, e => ({
					hideComponent: () => e(Object(a.c)()),
					showComponent: () => e(Object(a.d)())
				}))(Object(l.c)(g)),
				x = s("./src/reddit/actions/post.ts"),
				C = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				y = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				_ = s("./src/reddit/components/PostContainer/index.tsx"),
				S = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				I = s("./src/reddit/constants/posts.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/PostItem/index.m.less"),
				N = s.n(P);
			const T = e => "".concat(e, "--FocusedVerticalRecommendationItem"),
				B = Object(i.c)({
					post: k.O,
					subreddit: k.bb
				});
			class D extends r.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						this.props.post && !this.hasFiredViewEvent && (this.props.sendEvent(Object(b.m)(this.props.listingKey, this.props.postId, this.props.position)), this.hasFiredViewEvent = !0)
					}, this.onPostClick = () => {
						const {
							listingKey: e,
							onPostClick: t,
							post: s,
							postId: n,
							sendEvent: r,
							position: o
						} = this.props;
						t(s), r(Object(b.k)(e, n, o))
					}, this.onSubredditNameClick = () => {
						const {
							listingKey: e,
							postId: t,
							sendEvent: s,
							subreddit: n,
							position: r
						} = this.props;
						n && s(Object(b.l)(e, t, n.id, r))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							subreddit: s,
							postId: n,
							position: r
						} = this.props;
						return e ? Object(b.q)(t, s && s.id || "", r, n) : Object(b.p)(t, s && s.id || "", r, n)
					}
				}
				componentDidMount() {
					this.props.pubsub && this.props.pubsub.addListeners(d.b, this.trackViewEvent)
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(d.b, this.trackViewEvent)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(d.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(d.b, this.trackViewEvent)
				}
				render() {
					const {
						post: e,
						shouldHideBottomBorder: t,
						shouldHideSubredditLink: s,
						shouldShowBiggerJoin: n,
						subreddit: o
					} = this.props;
					return e ? r.a.createElement(_.a, {
						className: Object(c.a)(N.a.postContainer, {
							[N.a.hideBottomBorder]: t
						}),
						makePostContainerId: T,
						post: e,
						onClick: this.onPostClick
					}, r.a.createElement("div", {
						className: N.a.postContent
					}, r.a.createElement(C.a, {
						classNameInnerThumbnail: N.a.thumbnailOverride,
						post: e
					}), r.a.createElement("div", {
						className: N.a.postBodyWrapper
					}, !s && o && r.a.createElement("div", {
						className: Object(c.a)(N.a.subredditContainer)
					}, r.a.createElement(S.a, {
						className: N.a.subredditLink,
						to: o.url,
						onClick: this.onSubredditNameClick
					}, o.displayText), n ? r.a.createElement("div", {
						className: N.a.subredditSubscribeLargeButton
					}, r.a.createElement(f.a, {
						identifier: {
							name: o.name,
							type: I.a.SUBREDDIT
						},
						postId: e.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					})) : r.a.createElement(f.a, {
						className: N.a.subredditSubscribeButton,
						getEventFactory: this.getSubscribeEventFactory,
						doNotHideOtherSubscribeButtons: !0,
						identifier: {
							name: o.name,
							type: I.a.SUBREDDIT
						},
						postId: e.id,
						small: !0
					})), r.a.createElement("div", {
						className: Object(c.a)(N.a.postBody, {
							[N.a.isFirst]: s || !o
						}),
						"data-click-id": "body"
					}, r.a.createElement("div", {
						className: N.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, e.title)), r.a.createElement("div", {
						className: N.a.bottomline
					}, r.a.createElement(y.b, {
						post: e
					}))))) : null
				}
			}
			var L = Object(o.b)(B, e => ({
					onPostClick: t => {
						e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(Object(x.C)({
							postOrComment: t
						}))
					}
				}))(Object(l.c)(D)),
				U = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx"),
				w = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.m.less"),
				F = s.n(w);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = Object(i.c)({
				isFeatureFlag: m.d,
				isPending: m.e,
				subredditData: (e, t) => {
					let {
						numInstance: s
					} = t;
					return Object(m.j)(e, s)
				},
				topPostIds: (e, t) => {
					let {
						numInstance: s
					} = t;
					return Object(m.k)(e, s)
				}
			}), M = Object(o.b)(R);
			class A extends r.a.PureComponent {
				render() {
					const {
						className: e,
						isFeatureFlag: t,
						isPending: s,
						listingKey: n,
						listingPosition: o,
						numInstance: i,
						pubsub: c,
						subredditData: a,
						topPostIds: d
					} = this.props;
					if (0 === d.length || !a || !t || s) return null;
					const {
						id: l,
						name: u
					} = a;
					return r.a.createElement(j, {
						className: e,
						shouldHideBottomPadding: !0,
						listingKey: n,
						listingPosition: o,
						numInstance: i,
						pubsub: c
					}, r.a.createElement(U.a, {
						subredditId: l,
						subredditName: u,
						shouldHideBottomBorder: !0,
						listingKey: n,
						position: o,
						pubsub: c
					}), r.a.createElement("div", {
						className: F.a.topPostsTitle
					}, V._("Top post", null, {
						hk: "3BdOuj"
					})), d.slice(0, 1).map(e => r.a.createElement(L, {
						key: e,
						postId: e,
						shouldHideBottomBorder: !0,
						shouldHideSubredditLink: !0,
						position: o,
						listingKey: n,
						pubsub: c
					})))
				}
			}
			t.default = M(A)
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/Wrapper/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_38wRlUew5QmrO-MoOU-GJ9",
				titleWrapper: "_1DG9AhSZHK-IzUaxqT-F2s",
				titleTextWrapper: "_3Fo-ZR0DR-WynLXvASRgr3",
				titleText: "_24QDPxfjlPoQVpxQMLZwh8",
				subTitleWrapper: "_2moQJET1ILsnPFhV6NGhts",
				subredditLink: "X-a0YO4ICLzVT53ta0gb-",
				closeWrapper: "_2i5vuURQERz39XEGzFcSmd",
				close: "_1eoTN7mGsJS2YvBOQbRVUQ",
				contentWrapper: "_2i5tDrDFVTDwobrwCeDktb",
				noBottomPadding: "_3koaGouOjmycK9-H42G_Ht"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/PostItem/index.m.less": function(e, t, s) {
			e.exports = {
				postTitle: "_3L4stTRfJ_BS4amCaa76f4",
				Metadata: "_2dE1LHEebPUbXWJUn5_hwk",
				metadata: "_2dE1LHEebPUbXWJUn5_hwk",
				postEventMeta: "ngCfG_MRVHprTjk5eoc5F",
				postContent: "_1B38Mbd1InsDknEgDt-8-M",
				hideBottomBorder: "_1PsnARwAv-7CxN7xVTcu71",
				postBody: "_3XCa1x6WAlBIwOT9_88IN2",
				isFirst: "_1oSUSmar653A40uiAbIBus",
				bottomline: "_1t9mMlG1FelsCiuYJkFpYn",
				postContainer: "vt_Ai-mB125nHCOUXitOz",
				postBodyWrapper: "_1IQXxaPZpjo1Tr13hAMOdb",
				thumbnailOverride: "FY6-Uq4FvUxtyiwPD2bOy",
				subredditContainer: "_27dJCwt8e0kL9sjru1EGj5",
				subredditLink: "_33S8vIEbdBFHKeSvArox1g",
				subredditSubscribeButton: "_2w1D4lJqxbvUHhoRdy_EIx",
				subredditSubscribeLargeButton: "_1yqjm4NW18W15aR7qFRs51"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less": function(e, t, s) {
			e.exports = {
				subredditTitle: "_2761hyuG6eerLCkC4Hm6fp",
				subredditContent: "_1yRTv-8W3ocQQRhv7Ah1my",
				subredditBody: "_13sLg8Q6o27ohhPDs1AFHk",
				subredditMeta: "_1gX6BuEOgKVnefuNoaJz6g",
				subredditContainer: "_17Xq6uVgiU_LWy9TZF-Ce6",
				hideBottomBorder: "_2OYNSEwlUAl9-L9Jqc8JQ2",
				subredditBodyWrapper: "_3UfPUGAphIA0o2VTisU4sa",
				thumbnailOverride: "XWNN6HDjsQTetUd60uvL1",
				iconContainer: "_3GwBEEg8fYkZyZev8v3aQb",
				subredditDescriptionContainer: "_39jJr2GgsD9SJcks2BNgoa"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/controls/MetaData/index.tsx"),
				E = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				O = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				x = s.n(j);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = Object(c.c)({
				subreddit: g.T,
				subredditAboutInfo: g.y
			}), _ = Object(o.b)(y);
			class S extends r.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						const {
							subreddit: e,
							subredditAboutInfo: t,
							listingKey: s,
							subredditId: n,
							position: r,
							sendEvent: o
						} = this.props;
						e && t && !this.hasFiredViewEvent && (o(Object(E.r)(s, n, r)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: n,
							position: r
						} = this.props;
						s(t ? Object(O.c)(n) : Object(E.n)(e, n, r))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: r
						} = this.props;
						return e ? s ? Object(O.e)(n) : Object(E.q)(t, n, r) : s ? Object(O.d)(n) : Object(E.p)(t, n, r)
					}
				}
				componentDidMount() {
					this.props.pubsub && this.props.pubsub.addListeners(l.b, this.trackViewEvent)
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(l.b, this.trackViewEvent)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(l.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(l.b, this.trackViewEvent)
				}
				render() {
					const {
						shouldHideBottomBorder: e,
						shouldShowDescription: t,
						shouldShowActiveUsers: s,
						subreddit: n,
						subredditAboutInfo: o
					} = this.props;
					if (!n || !o) return null;
					const c = o.publicDescription || "",
						l = n.subscribers,
						m = Object(d.b)(l),
						E = Object(d.b)(o.accountsActive);
					return r.a.createElement("div", {
						className: Object(a.a)(x.a.subredditContainer, {
							[x.a.hideBottomBorder]: e
						})
					}, r.a.createElement("div", {
						className: x.a.subredditContent
					}, r.a.createElement("div", null, r.a.createElement(i.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, r.a.createElement(u.b, {
						subredditOrProfile: n,
						className: x.a.iconContainer
					}))), r.a.createElement("div", {
						className: x.a.subredditBodyWrapper
					}, r.a.createElement("div", {
						className: x.a.subredditBody,
						"data-click-id": "body"
					}, r.a.createElement(b.a, {
						className: x.a.subredditTitle,
						to: n.url,
						onClick: this.onSubredditClick
					}, n.displayText), r.a.createElement("div", null, r.a.createElement(p.a, {
						identifier: {
							name: n.name,
							type: h.a.SUBREDDIT
						},
						postId: n.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					}))), r.a.createElement("div", {
						className: x.a.subredditMeta
					}, C._({
						"*": "{number} members",
						_1: "1 member"
					}, [C._plural(l, "number", m)], {
						hk: "4yqFU9"
					})), s && r.a.createElement("div", {
						className: x.a.subredditMeta
					}, r.a.createElement(v.c, null), C._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [C._plural(o.accountsActive, "number", E)], {
						hk: "1oCA5j"
					})), t && c && r.a.createElement(i.a, {
						className: x.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, c))))
				}
			}
			t.a = _(Object(m.c)(S))
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/eventTools/index.ts"),
				i = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				c = s("./src/lib/constants/index.ts");

			function a(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				u = s("./src/reddit/icons/fonts/Live/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				p = s.n(b),
				m = s("./src/lib/lessComponent.tsx");
			const h = m.a.span("PostEventFutureText", p.a),
				v = m.a.span("PostEventPastText", p.a),
				E = m.a.span("PostEventNowText", p.a),
				O = m.a.span("Container", p.a),
				g = m.a.wrapped(l.a, "CalendarIcon", p.a),
				j = m.a.wrapped(u.a, "LiveIcon", p.a),
				x = m.a.div("LoadingState", p.a);
			class C extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: n,
						eventIsLive: l,
						eventStart: u
					} = s, b = Object(o.e)(u, n);
					let p, m;
					if (this.state.mounted || b === o.a.Live) p = function(e, t, s) {
						const n = Object(o.e)(e, t),
							r = new Date(e * c.Fb);
						let d;
						if (n === o.a.Live || s) return i.fbt._("Now", null, {
							hk: "Prpcg"
						});
						n === o.a.Future ? d = Object(o.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(o.b)(e) >= 5 ? a(r) : r.toLocaleDateString(void 0, {
							weekday: "long"
						}) : n === o.a.Past && (d = Object(o.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : a(r));
						const l = function(e) {
							return e.toLocaleTimeString(void 0, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(r);
						return "".concat(d, " @ ").concat(l)
					}(u, n, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						p = r.a.createElement(x, {
							className: e
						})
					}
					if (l) m = r.a.createElement(E, null, r.a.createElement(j, null), p);
					else if (b === o.a.Future) m = r.a.createElement(h, null, r.a.createElement(g, null), p);
					else {
						if (b !== o.a.Past) return null;
						m = r.a.createElement(v, null, r.a.createElement(g, null), p)
					}
					return r.a.createElement(O, {
						className: e
					}, m)
				}
			}
			t.a = C
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				c = s("./src/reddit/components/AdViewability/index.tsx"),
				a = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						o = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(a.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, i), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/media.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/video.ts"),
				O = s("./src/lib/classNames/index.ts"),
				g = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				j = s("./src/reddit/components/PostContainer/index.m.less"),
				x = s.n(j);
			const C = Object(o.c)({
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(v.b)(e, s.id)
					},
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					currentIndex: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.a)(e, s.id)
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(E.a)(e, {
							postId: s.id
						})
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(E.f)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(E.c)(e, {
							postId: s.id
						})
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(v.i)(e, {
							postId: s.id
						})
					}
				}),
				y = Object(p.a)(C),
				_ = e => {
					const t = Object(g.d)(e.target, e.currentTarget),
						s = Object(g.b)(e.target, e.currentTarget, g.a.buttons);
					return "subreddit" !== t && s
				};
			class S extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						currentIndex: o,
						imageGalleryCurrentItem: d,
						makePostContainerId: l,
						post: b,
						onClick: p,
						onPostContentClick: h,
						sendEvent: v,
						style: E,
						ref: g
					} = this.props, j = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: E,
						ref: g,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => p && p(s, b, t, d))(s), h && _(s) && h(s, b)), b.id && d) {
								const {
									source: e
								} = Object(i.s)(b, d);
								if (e && e.outboundUrl) {
									const t = o + 1;
									v(Object(a.c)(b.id, e.outboundUrl, t))
								}
							}
						},
						className: Object(O.a)(x.a.WrappedPost, n, "Post ".concat(b.id), {
							promotedlink: b.isSponsored
						}),
						id: l ? l(b.id) : b.id,
						tabIndex: -1,
						"data-testid": b.id
					}, s), C = !!b.media && b.media.type === m.o.VIDEO;
					return b.isSponsored || C ? r.a.createElement(c.a, {
						post: b,
						trackDisplay: !0
					}, j) : b.media && Object(m.F)(b.media) ? r.a.createElement(u, {
						postId: b.id
					}, j) : j
				}
			}
			t.a = y(Object(g.c)(Object(b.c)(S)))
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/contexts/Buttons2020.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				p = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				m = s.n(p),
				h = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const g = v.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = O(e, ["small", "shouldReverseColor"]);
					const i = Object(o.b)(),
						c = s ? d.l : d.i;
					return r.a.createElement(c, E({}, n, {
						className: Object(h.a)(n.className, {
							[m.a.isLarge]: !t
						}),
						"data-ignore-click": !!i
					}))
				}, "SubscribeInternalButton", m.a),
				j = v.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, i = O(e, ["small", "belongsToType", "shouldReverseColor"]);
					const c = Object(o.b)(),
						a = n ? d.i : d.l;
					return r.a.createElement(a, E({}, i, {
						className: Object(h.a)(i.className, {
							[m.a.isLarge]: !t
						}),
						"data-ignore-click": !!c
					}))
				}, "UnsubscribeButton", m.a),
				x = v.a.wrapped(l.a, "Checkmark", m.a),
				C = v.a.wrapped(u.a, "Plus", m.a),
				y = v.a.div("ButtonSpacer", m.a);
			class _ extends r.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = e => {
						const t = this.props,
							{
								className: s,
								identifier: n,
								onSubscribe: o,
								onUnsubscribe: i,
								postId: c,
								sendEvent: a,
								small: l = !1,
								size: u,
								userIsSubscriber: p,
								doNotHideOtherSubscribeButtons: v,
								getEventFactory: g,
								onSubscriptionsRequested: C
							} = t,
							y = O(t, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "size", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
							_ = this.state.isHovered,
							S = Object(b.a)({
								type: n.type,
								key: _ ? "unsubscribe" : "subscribed"
							});
						return e ? r.a.createElement(d.q, E({
							className: Object(h.a)(s, m.a.Button2020),
							priority: y.shouldReverseColor ? d.b.Primary : d.b.Secondary,
							Icon: l || !l && !_ ? x : void 0,
							text: !l && S,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: u || (l ? d.c.XS : d.c.S)
						}, y)) : r.a.createElement(j, E({
							className: Object(h.a)(s, {
								[m.a.isLarge]: !l,
								[m.a.unsubscribeButtonHoverStyles]: !l
							}),
							onClick: this.onClick,
							small: l,
							belongsToType: n.type,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}, y), l && r.a.createElement(x, null), !l && !_ && r.a.createElement(x, null), !l && S)
					}, this.renderSubscribeButton = e => {
						const t = this.props,
							{
								className: s,
								identifier: n,
								onSubscribe: o,
								onUnsubscribe: i,
								postId: c,
								sendEvent: a,
								small: l = !1,
								size: u,
								userIsSubscriber: p,
								doNotHideOtherSubscribeButtons: v,
								getEventFactory: j,
								onSubscriptionsRequested: x
							} = t,
							y = O(t, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "size", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
							_ = Object(b.a)({
								type: n.type,
								key: "subscribe"
							});
						return e ? r.a.createElement(d.q, E({
							className: s,
							priority: y.shouldReverseColor ? d.b.Secondary : d.b.Primary,
							Icon: C,
							size: u || (l ? d.c.XS : d.c.S),
							text: !l && _,
							onClick: this.onClick
						}, y, {
							id: "subscribe-button-".concat(c),
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						})) : r.a.createElement(g, E({
							className: Object(h.a)(s, {
								[m.a.isLarge]: !l
							}),
							onClick: this.onClick,
							small: l
						}, y, {
							id: "subscribe-button-".concat(c),
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}), r.a.createElement(C, null), !l && _)
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? r.a.createElement(a.a.Consumer, null, this.renderUnsubscribeButton) : e ? null : r.a.createElement(y, null) : r.a.createElement(a.a.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(c.a)(Object(i.c)(_))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				a = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(a),
				l = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const u = i.a.span("metaText", d.a),
				b = e => o.a.createElement(u, e, " · "),
				p = e => {
					var {
						isScoreHidden: t,
						score: s,
						useUpvotes: r
					} = e, i = l(e, ["isScoreHidden", "score", "useUpvotes"]);
					const a = Object(c.b)(s),
						d = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(s, "number", a)], {
							hk: "2L3T21"
						}),
						b = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : r ? d : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(s, "number", a)], {
							hk: "gf67v"
						});
					return o.a.createElement(u, i, b)
				},
				m = e => o.a.createElement(u, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(c.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/helpers/parseUrl.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => Object.assign({
					gallery: o.gallery(e, t, s),
					post: o.post(e, t)
				}, o.defaults(e)),
				c = (e, t) => s => Object.assign(Object.assign({}, i(s, e, t)), {
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: o.media(s, e)
				}),
				a = (e, t, s) => c => {
					const a = Object(r.a)(t);
					return Object.assign(Object.assign({}, i(c, e, s)), {
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: Object.assign(Object.assign({}, o.media(c, e)), {
							outboundUrl: t,
							outboundDomain: a ? a.hostname : void 0
						})
					})
				},
				d = (e, t) => u(e, !0, t),
				l = (e, t) => u(e, !1, t),
				u = (e, t, s) => r => Object.assign(Object.assign({}, i(r, e, s)), {
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "e", (function() {
				return C
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/helpers/isComment.ts"),
				a = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const p = e => Object.assign(Object.assign({}, u.defaults(e)), {
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: d.f.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				m = (e, t) => {
					let {
						renderingObjectInfo: s,
						pageLayer: n
					} = t;
					if (s && (Object(c.b)(s) || Object(a.b)(s))) return Object(c.b)(s) ? b.SourceElement.Comment : Object(i.w)(n) ? b.SourceElement.PostDetail : Object(i.E)(n) ? b.SourceElement.ListingPostDetail : void 0
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(a.b)(s) && !Object(c.b)(s)) return {};
					const n = Object(a.b)(s) ? s.belongsTo.id : s.subredditId;
					return Object.assign({
						post: u.post(e, s.id),
						subreddit: u.subredditById(e, n)
					}, ((e, t) => {
						const {
							renderingObjectInfo: s,
							subredditName: n
						} = t;
						if (!s || !Object(a.b)(s) && !Object(c.b)(s)) return {
							outbound: void 0
						};
						const r = Object(a.b)(s) ? "postId" : "commentId",
							o = {
								url: "/r/".concat(n, "/"),
								sourceElement: m(0, t),
								subredditName: n,
								[r]: s.id
							},
							i = Object(l.B)(e, {
								subredditName: n
							});
						return i ? {
							outbound: Object.assign(Object.assign({}, o), {
								url: i.url,
								subredditId: i.id
							})
						} : {
							outbound: Object.assign({}, o)
						}
					})(e, t))
				},
				v = e => t => Object.assign(Object.assign({}, (e => Object.assign(Object.assign({}, u.defaults(e)), {
					source: r.LINK,
					action: o.c.CLICK,
					noun: n.INTERNAL_LINK
				}))(t)), h(t, e)),
				E = e => t => Object.assign(Object.assign({}, p(t)), {
					source: "global",
					action: o.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				O = (e, t) => s => Object.assign(Object.assign({}, p(s)), {
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				g = (e, t) => s => Object.assign(Object.assign({}, p(s)), {
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				j = e => t => Object.assign(Object.assign({}, p(t)), {
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				x = e => t => Object.assign(Object.assign({}, p(t)), {
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				C = e => t => Object.assign(Object.assign({}, p(t)), {
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("calendar"), a.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("live"), a.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.2efd435a19d6a9ff7255.js.map