// https://www.redditstatic.com/desktop2x/reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.c5dd5636dd4e2e960ba7.js
// Retrieved at 6/23/2020, 2:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts"], {
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
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
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
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
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const u = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = h(o.target, o.currentTarget);
					m(o.target, o.currentTarget, p.anchors) ? r && t && e(t(s, r)) : r && t && e(e => {
						const n = t(s, r)(e);
						let o;
						if (n && n.actionInfo) {
							const e = n.actionInfo,
								{
									pageType: t
								} = e;
							o = l(e, ["pageType"])
						}
						return Object.assign({}, n, {
							actionInfo: Object(a.previousPageActionInfo)(e, o)
						})
					}), m(o.target, o.currentTarget, p.anchorsAndButtons) && n(o)
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
						return i.a.createElement(e, d({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: u(t, s, n)
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
				}
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
				o = s.n(n),
				r = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				a = s("./src/reddit/helpers/postEvent.ts"),
				d = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less"),
				l = s.n(d);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = i.a.wrapped(e => o.a.createElement("span", {
				className: e.className
			}, e.children), "Metadata", l.a), p = e => {
				let {
					post: t
				} = e;
				return Object(a.a)(t) ? o.a.createElement(c.a, {
					className: l.a.postEventMeta,
					post: t
				}) : o.a.createElement(o.a.Fragment, null, !t.isScoreHidden && o.a.createElement(o.a.Fragment, null, o.a.createElement(b, {
					"data-click-id": "score"
				}, u._({
					"*": "{Post score} points",
					_1: "1 point"
				}, [u._plural(t.score, "Post score", Object(r.b)(t.score))], {
					hk: "1gwCFh"
				})), o.a.createElement(b, null, "·")), o.a.createElement(b, {
					"data-click-id": "comments"
				}, u._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [u._plural(t.numComments, "number", Object(r.b)(t.numComments))], {
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = Object(i.c)({
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
			class C extends o.a.Component {
				constructor(e) {
					super(e), this.hasFiredViewEvent = !1, this.getLocalStorageDisabled = () => !0, this.setLocalStorageDisabled = () => void 0, this.trackViewEvent = () => {
						this.hasFiredViewEvent || (this.props.sendEvent(Object(b.r)(this.props.listingKey, this.props.interactedSubredditId, this.props.listingPosition)), this.hasFiredViewEvent = !0)
					}, this.onHideComponent = () => {
						const {
							hideComponent: e,
							interactedSubredditId: t,
							listingKey: s,
							listingPosition: n
						} = this.props;
						this.setLocalStorageDisabled(), e(), this.props.sendEvent(Object(b.n)(s, t, n))
					}, this.onSubredditClick = () => {
						const {
							interactedSubredditId: e,
							listingKey: t,
							listingPosition: s
						} = this.props;
						this.props.sendEvent(Object(b.i)(t, e, s))
					}, this.getLocalStorageDisabled = Object(u.A)(), this.setLocalStorageDisabled = Object(u.R)()
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
						shouldHideBottomPadding: r,
						cityLocation: i
					} = this.props;
					return s ? null : o.a.createElement("div", {
						className: Object(c.a)(v.a.container, t)
					}, o.a.createElement("div", {
						className: v.a.titleWrapper
					}, o.a.createElement("div", {
						className: v.a.titleTextWrapper
					}, o.a.createElement("div", {
						className: v.a.titleText
					}, E._("Discover communities", null, {
						hk: "2OpaUL"
					})), n && o.a.createElement("div", {
						className: v.a.subTitleWrapper
					}, E._("Because you're in {place}", [E._param("place", i)], {
						hk: "3qt67F"
					}))), o.a.createElement("div", {
						className: v.a.closeWrapper,
						onClick: this.onHideComponent
					}, o.a.createElement(p.a, {
						className: v.a.close
					}))), o.a.createElement("div", {
						className: Object(c.a)(v.a.contentWrapper, {
							[v.a.noBottomPadding]: r
						})
					}, e))
				}
			}
			var O = Object(r.b)(x, e => ({
					hideComponent: () => e(Object(a.c)()),
					showComponent: () => e(Object(a.d)())
				}))(Object(l.c)(C)),
				g = s("./src/reddit/actions/post.ts"),
				_ = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				j = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.tsx"),
				f = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				S = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				I = s("./src/reddit/constants/posts.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/PostItem/index.m.less"),
				N = s.n(k);
			const T = e => "".concat(e, "--FocusedVerticalRecommendationItem"),
				D = Object(i.c)({
					post: P.O,
					subreddit: P.bb
				});
			class B extends o.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						this.props.post && !this.hasFiredViewEvent && (this.props.sendEvent(Object(b.l)(this.props.listingKey, this.props.postId, this.props.position)), this.hasFiredViewEvent = !0)
					}, this.onPostClick = () => {
						const {
							listingKey: e,
							onPostClick: t,
							post: s,
							postId: n,
							sendEvent: o,
							position: r
						} = this.props;
						t(s), o(Object(b.j)(e, n, r))
					}, this.onSubredditNameClick = () => {
						const {
							listingKey: e,
							postId: t,
							sendEvent: s,
							subreddit: n,
							position: o
						} = this.props;
						n && s(Object(b.k)(e, t, n.id, o))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							subreddit: s,
							postId: n,
							position: o
						} = this.props;
						return e ? Object(b.p)(t, s && s.id || "", o, n) : Object(b.o)(t, s && s.id || "", o, n)
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
						subreddit: r
					} = this.props;
					return e ? o.a.createElement(y.a, {
						className: Object(c.a)(N.a.postContainer, {
							[N.a.hideBottomBorder]: t
						}),
						makePostContainerId: T,
						post: e,
						onClick: this.onPostClick
					}, o.a.createElement("div", {
						className: N.a.postContent
					}, o.a.createElement(_.a, {
						classNameInnerThumbnail: N.a.thumbnailOverride,
						post: e
					}), o.a.createElement("div", {
						className: N.a.postBodyWrapper
					}, !s && r && o.a.createElement("div", {
						className: Object(c.a)(N.a.subredditContainer)
					}, o.a.createElement(f.a, {
						className: N.a.subredditLink,
						to: r.url,
						onClick: this.onSubredditNameClick
					}, r.displayText), n ? o.a.createElement("div", {
						className: N.a.subredditSubscribeLargeButton
					}, o.a.createElement(S.a, {
						identifier: {
							name: r.name,
							type: I.a.SUBREDDIT
						},
						postId: e.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					})) : o.a.createElement(S.a, {
						className: N.a.subredditSubscribeButton,
						getEventFactory: this.getSubscribeEventFactory,
						doNotHideOtherSubscribeButtons: !0,
						identifier: {
							name: r.name,
							type: I.a.SUBREDDIT
						},
						postId: e.id,
						small: !0
					})), o.a.createElement("div", {
						className: Object(c.a)(N.a.postBody, {
							[N.a.isFirst]: s || !r
						}),
						"data-click-id": "body"
					}, o.a.createElement("div", {
						className: N.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, e.title)), o.a.createElement("div", {
						className: N.a.bottomline
					}, o.a.createElement(j.b, {
						post: e
					}))))) : null
				}
			}
			var L = Object(r.b)(D, e => ({
					onPostClick: t => {
						e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(Object(g.N)({
							postOrComment: t
						}))
					}
				}))(Object(l.c)(B)),
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
			}), A = Object(r.b)(R);
			class M extends o.a.PureComponent {
				render() {
					const {
						className: e,
						isFeatureFlag: t,
						isPending: s,
						listingKey: n,
						listingPosition: r,
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
					return o.a.createElement(O, {
						className: e,
						shouldHideBottomPadding: !0,
						listingKey: n,
						listingPosition: r,
						numInstance: i,
						pubsub: c
					}, o.a.createElement(U.a, {
						subredditId: l,
						subredditName: u,
						shouldHideBottomBorder: !0,
						listingKey: n,
						position: r,
						pubsub: c
					}), o.a.createElement("div", {
						className: F.a.topPostsTitle
					}, V._("Top post", null, {
						hk: "3BdOuj"
					})), d.slice(0, 1).map(e => o.a.createElement(L, {
						key: e,
						postId: e,
						shouldHideBottomBorder: !0,
						shouldHideSubredditLink: !0,
						position: r,
						listingKey: n,
						pubsub: c
					})))
				}
			}
			t.default = A(M)
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
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
				x = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				g = s.n(O);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(c.c)({
				subreddit: C.R,
				subredditAboutInfo: C.x
			}), y = Object(r.b)(j);
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						const {
							subreddit: e,
							subredditAboutInfo: t,
							listingKey: s,
							subredditId: n,
							position: o,
							sendEvent: r
						} = this.props;
						e && t && !this.hasFiredViewEvent && (r(Object(E.q)(s, n, o)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: n,
							position: o
						} = this.props;
						s(t ? Object(x.c)(n) : Object(E.m)(e, n, o))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: o
						} = this.props;
						return e ? s ? Object(x.e)(n) : Object(E.p)(t, n, o) : s ? Object(x.d)(n) : Object(E.o)(t, n, o)
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
						subredditAboutInfo: r
					} = this.props;
					if (!n || !r) return null;
					const c = r.publicDescription || "",
						l = n.subscribers,
						m = Object(d.b)(l),
						E = Object(d.b)(r.accountsActive);
					return o.a.createElement("div", {
						className: Object(a.a)(g.a.subredditContainer, {
							[g.a.hideBottomBorder]: e
						})
					}, o.a.createElement("div", {
						className: g.a.subredditContent
					}, o.a.createElement("div", null, o.a.createElement(i.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, o.a.createElement(u.b, {
						subredditOrProfile: n,
						className: g.a.iconContainer
					}))), o.a.createElement("div", {
						className: g.a.subredditBodyWrapper
					}, o.a.createElement("div", {
						className: g.a.subredditBody,
						"data-click-id": "body"
					}, o.a.createElement(b.a, {
						className: g.a.subredditTitle,
						to: n.url,
						onClick: this.onSubredditClick
					}, n.displayText), o.a.createElement("div", null, o.a.createElement(p.a, {
						identifier: {
							name: n.name,
							type: h.a.SUBREDDIT
						},
						postId: n.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					}))), o.a.createElement("div", {
						className: g.a.subredditMeta
					}, _._({
						"*": "{number} members",
						_1: "1 member"
					}, [_._plural(l, "number", m)], {
						hk: "4yqFU9"
					})), s && o.a.createElement("div", {
						className: g.a.subredditMeta
					}, o.a.createElement(v.c, null), _._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [_._plural(r.accountsActive, "number", E)], {
						hk: "1oCA5j"
					})), t && c && o.a.createElement(i.a, {
						className: g.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, c))))
				}
			}
			t.a = y(Object(m.c)(f))
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
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
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
				x = m.a.span("Container", p.a),
				C = m.a.wrapped(l.a, "CalendarIcon", p.a),
				O = m.a.wrapped(u.a, "LiveIcon", p.a),
				g = m.a.div("LoadingState", p.a);
			class _ extends n.Component {
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
					} = s, b = Object(r.e)(u, n);
					let p, m;
					if (this.state.mounted || b === r.a.Live) p = function(e, t, s) {
						const n = Object(r.e)(e, t),
							o = new Date(e * c.Eb);
						let d;
						if (n === r.a.Live || s) return i.fbt._("Now", null, {
							hk: "Prpcg"
						});
						n === r.a.Future ? d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(r.b)(e) >= 5 ? a(o) : o.toLocaleDateString(void 0, {
							weekday: "long"
						}) : n === r.a.Past && (d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : a(o));
						const l = function(e) {
							return e.toLocaleTimeString(void 0, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(o);
						return "".concat(d, " @ ").concat(l)
					}(u, n, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						p = o.a.createElement(g, {
							className: e
						})
					}
					if (l) m = o.a.createElement(E, null, o.a.createElement(O, null), p);
					else if (b === r.a.Future) m = o.a.createElement(h, null, o.a.createElement(C, null), p);
					else {
						if (b !== r.a.Past) return null;
						m = o.a.createElement(v, null, o.a.createElement(C, null), p)
					}
					return o.a.createElement(x, {
						className: e
					}, m)
				}
			}
			t.a = _
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = Object(n.a)({
				getComponent: () => Object(o.a)(() => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
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
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				a = s("./src/reddit/components/GildModal/Loader.tsx"),
				d = s("./src/reddit/connectors/PostViewable/index.ts"),
				l = s("./src/reddit/models/Media/index.ts"),
				u = s("./src/reddit/selectors/gild.ts"),
				b = s("./src/reddit/selectors/video.ts"),
				p = s("./src/lib/classNames/index.ts"),
				m = s("./src/higherOrderComponents/withClickTracking.tsx"),
				h = s("./src/reddit/components/PostContainer/index.m.less"),
				v = s.n(h);
			const E = Object(r.c)({
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(b.a)(e, {
							postId: s.id
						})
					},
					gildModalIsOpen: (e, t) => {
						let {
							isOverlay: s,
							post: n
						} = t;
						const o = Object(c.b)(n.postId, s);
						return Object(u.d)(e, o)
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(b.f)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(b.c)(e, {
							postId: s.id
						})
					}
				}),
				x = Object(d.a)(E),
				C = e => {
					const t = Object(m.d)(e.target, e.currentTarget),
						s = Object(m.b)(e.target, e.currentTarget, m.a.buttons);
					return "subreddit" !== t && s
				};
			class O extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						gildModalIsOpen: n,
						makePostContainerId: r,
						post: c,
						onClick: d,
						onPostContentClick: u,
						style: b,
						ref: m
					} = this.props, h = o.a.createElement("div", {
						style: b,
						ref: m,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && (e(() => d && d(t, c))(t), u && C(t) && u(t, c))
						},
						className: Object(p.a)(v.a.WrappedPost, s, "Post ".concat(c.id), {
							promotedlink: c.isSponsored
						}),
						id: r ? r(c.id) : c.id,
						tabIndex: -1
					}, t, n && o.a.createElement(a.a, null)), E = !!c.media && c.media.type === l.n.VIDEO;
					return c.isSponsored || E ? o.a.createElement(i.a, {
						post: c,
						trackDisplay: !0
					}, h) : h
				}
			}
			t.a = x(Object(m.c)(O))
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
				o = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				b = s.n(u),
				p = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const E = m.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = v(e, ["small", "shouldReverseColor"]);
					const r = s ? c.i : c.f;
					return o.a.createElement(r, h({}, n, {
						className: Object(p.a)(n.className, {
							[b.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", b.a),
				x = m.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, r = v(e, ["small", "belongsToType", "shouldReverseColor"]);
					const i = n ? c.f : c.i;
					return o.a.createElement(i, h({}, r, {
						className: Object(p.a)(r.className, {
							[b.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", b.a),
				C = m.a.wrapped(a.a, "Checkmark", b.a),
				O = m.a.wrapped(d.a, "Plus", b.a),
				g = m.a.div("ButtonSpacer", b.a);
			class _ extends o.a.Component {
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
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const e = this.props,
						{
							className: t,
							identifier: s,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: i,
							sendEvent: c,
							small: a = !1,
							userIsSubscriber: d,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: m,
							onSubscriptionsRequested: _
						} = e,
						j = v(e, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						y = this.state.isHovered;
					let f = d ? "subscribed" : "subscribe";
					d && y && (f = "unsubscribe");
					const S = Object(l.a)({
						type: s.type,
						key: f
					});
					return d ? this.state.hasJustSubscribed || u ? o.a.createElement(x, h({
						className: Object(p.a)(t, {
							[b.a.isLarge]: !a,
							[b.a.unsubscribeButtonHoverStyles]: !a
						}),
						onClick: this.onClick,
						small: a,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, j), a && o.a.createElement(C, null), !a && !y && o.a.createElement(C, null), !a && S) : a ? null : o.a.createElement(g, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(E, h({
						className: Object(p.a)(t, {
							[b.a.isLarge]: !a
						}),
						onClick: this.onClick,
						small: a
					}, j, {
						id: "subscribe-button-".concat(i),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(O, null), !a && S))
				}
			}
			t.a = Object(i.a)(Object(r.c)(_))
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				a = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(a),
				l = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const u = i.a.span("metaText", d.a),
				b = e => r.a.createElement(u, e, " · "),
				p = e => {
					var {
						isScoreHidden: t,
						score: s,
						useUpvotes: o
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
						}) : o ? d : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(s, "number", a)], {
							hk: "gf67v"
						});
					return r.a.createElement(u, i, b)
				},
				m = e => r.a.createElement(u, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(c.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return _
			}));
			var n, o, r = s("./src/reddit/constants/tracking.ts"),
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
			}(o || (o = {}));
			const p = e => Object.assign({}, u.defaults(e), {
					source: o,
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
						const o = Object(a.b)(s) ? "postId" : "commentId",
							r = {
								url: "/r/".concat(n, "/"),
								sourceElement: m(0, t),
								subredditName: n,
								[o]: s.id
							},
							i = Object(l.A)(e, {
								subredditName: n
							});
						return i ? {
							outbound: Object.assign({}, r, {
								url: i.url,
								subredditId: i.id
							})
						} : {
							outbound: Object.assign({}, r)
						}
					})(e, t))
				},
				v = e => t => Object.assign({}, (e => Object.assign({}, u.defaults(e), {
					source: o.LINK,
					action: r.c.CLICK,
					noun: n.INTERNAL_LINK
				}))(t), h(t, e)),
				E = e => t => Object.assign({}, p(t), {
					source: "global",
					action: r.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				x = (e, t) => s => Object.assign({}, p(s), {
					source: o.DISCOVERY_UNIT,
					action: r.c.VIEW,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				C = (e, t) => s => Object.assign({}, p(s), {
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				O = e => t => Object.assign({}, p(t), {
					subreddit: u.subredditById(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				g = e => t => Object.assign({}, p(t), {
					subreddit: u.subredditById(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				_ = e => t => Object.assign({}, p(t), {
					subreddit: u.subredditById(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("calendar"), a.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live"), a.a.liveIcon, e.className)
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
//# sourceMappingURL=reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.c5dd5636dd4e2e960ba7.js.map