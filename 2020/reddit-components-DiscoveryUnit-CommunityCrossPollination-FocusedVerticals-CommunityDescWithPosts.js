// https://www.redditstatic.com/desktop2x/reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.94a38a54b8ad6a534fcf.js
// Retrieved at 3/2/2020, 7:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts"], {
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return m
			}));
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
			const l = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return r => {
					const o = m(r.target, r.currentTarget);
					p(r.target, r.currentTarget, b.anchors) ? o && t && e(t(s, o)) : o && t && e(e => Object.assign({}, t(s, o)(e), {
						actionInfo: Object(a.previousPageActionInfo)(e)
					})), p(r.target, r.currentTarget, b.anchorsAndButtons) && n(r)
				}
			});

			function u(e) {
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
							afterClickTracking: l(t, s, n)
						}))
					}
				}
				return Object(c.b)(t)
			}
			const b = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				p = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && p(e.parentElement, t, s)),
				m = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && m(e.parentElement, t))
				}
		},
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				postEventMeta: "UORiCb6Mik-agLw97Owil",
				Metadata: "YxCA1Mpgi_ThsEnFr_EFv",
				metadata: "YxCA1Mpgi_ThsEnFr_EFv"
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
					post: t,
					language: s
				} = e;
				return Object(a.a)(t) ? r.a.createElement(c.a, {
					className: l.a.postEventMeta,
					language: s,
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
				u = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				v = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				E = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/Wrapper/index.m.less"),
				x = s.n(E);
			const g = Object(i.c)({
				didUserDisable: v.a,
				prefixedSubredditName: (e, t) => {
					let {
						numInstance: s
					} = t;
					return Object(v.g)(e, s)
				},
				interactedSubredditId: (e, t) => {
					let {
						numInstance: s
					} = t;
					return Object(v.f)(e, s)
				}
			});
			class O extends r.a.Component {
				constructor(e) {
					super(e), this.hasFiredViewEvent = !1, this.getLocalStorageDisabled = () => !0, this.setLocalStorageDisabled = () => void 0, this.trackViewEvent = () => {
						this.hasFiredViewEvent || (this.props.sendEvent(Object(p.r)(this.props.listingKey, this.props.interactedSubredditId, this.props.listingPosition)), this.hasFiredViewEvent = !0)
					}, this.onHideComponent = () => {
						const {
							hideComponent: e,
							interactedSubredditId: t,
							listingKey: s,
							listingPosition: n
						} = this.props;
						this.setLocalStorageDisabled(), e(), this.props.sendEvent(Object(p.n)(s, t, n))
					}, this.onSubredditClick = () => {
						const {
							interactedSubredditId: e,
							listingKey: t,
							listingPosition: s
						} = this.props;
						this.props.sendEvent(Object(p.i)(t, e, s))
					}, this.getLocalStorageDisabled = Object(b.y)(), this.setLocalStorageDisabled = Object(b.M)()
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
				componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(d.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(d.b, this.trackViewEvent)
				}
				render() {
					const {
						children: e,
						className: t,
						didUserDisable: s,
						prefixedSubredditName: n,
						shouldHideBottomPadding: o
					} = this.props;
					return s ? null : r.a.createElement("div", {
						className: Object(c.a)(x.a.container, t)
					}, r.a.createElement("div", {
						className: x.a.titleWrapper
					}, r.a.createElement("div", {
						className: x.a.titleTextWrapper
					}, r.a.createElement("div", {
						className: x.a.titleText
					}, r.a.createElement(m.c, null, "Discover more communities")), n && r.a.createElement("div", {
						className: x.a.subTitleWrapper
					}, r.a.createElement(m.c, null, "Because you joined"), r.a.createElement(u.a, {
						className: x.a.subredditLink,
						to: "/".concat(n),
						onClick: this.onSubredditClick
					}, " ".concat(n)))), r.a.createElement("div", {
						className: x.a.closeWrapper,
						onClick: this.onHideComponent
					}, r.a.createElement(h.a, {
						className: x.a.close
					}))), r.a.createElement("div", {
						className: Object(c.a)(x.a.contentWrapper, {
							[x.a.noBottomPadding]: o
						})
					}, e))
				}
			}
			var C = Object(o.b)(g, e => ({
					hideComponent: () => e(Object(a.b)()),
					showComponent: () => e(Object(a.c)())
				}))(Object(l.b)(O)),
				j = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				S = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				I = s("./src/reddit/components/PostContainer/index.tsx"),
				_ = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				k = s("./src/reddit/constants/posts.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/PostItem/index.m.less"),
				T = s.n(D);
			const B = e => "".concat(e, "--FocusedVerticalRecommendationItem"),
				L = Object(i.c)({
					language: N.P,
					post: P.K,
					subreddit: P.W
				});
			class w extends r.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						this.props.post && !this.hasFiredViewEvent && (this.props.sendEvent(Object(p.l)(this.props.listingKey, this.props.postId, this.props.position)), this.hasFiredViewEvent = !0)
					}, this.onPostClick = () => {
						const {
							listingKey: e,
							onPostClick: t,
							post: s,
							postId: n,
							sendEvent: r,
							position: o
						} = this.props;
						t(s), r(Object(p.j)(e, n, o))
					}, this.onSubredditNameClick = () => {
						const {
							listingKey: e,
							postId: t,
							sendEvent: s,
							subreddit: n,
							position: r
						} = this.props;
						n && s(Object(p.k)(e, t, n.id, r))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							subreddit: s,
							postId: n,
							position: r
						} = this.props;
						return e ? Object(p.p)(t, s && s.id || "", r, n) : Object(p.o)(t, s && s.id || "", r, n)
					}
				}
				componentDidMount() {
					this.props.pubsub && this.props.pubsub.addListeners(d.b, this.trackViewEvent)
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(d.b, this.trackViewEvent)
				}
				componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(d.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(d.b, this.trackViewEvent)
				}
				render() {
					const {
						language: e,
						post: t,
						shouldHideBottomBorder: s,
						shouldHideSubredditLink: n,
						shouldShowBiggerJoin: o,
						subreddit: i
					} = this.props;
					return t ? r.a.createElement(I.a, {
						className: Object(c.a)(T.a.postContainer, {
							[T.a.hideBottomBorder]: s
						}),
						makePostContainerId: B,
						post: t,
						onClick: this.onPostClick
					}, r.a.createElement("div", {
						className: T.a.postContent
					}, r.a.createElement(y.a, {
						classNameInnerThumbnail: T.a.thumbnailOverride,
						post: t
					}), r.a.createElement("div", {
						className: T.a.postBodyWrapper
					}, !n && i && r.a.createElement("div", {
						className: Object(c.a)(T.a.subredditContainer)
					}, r.a.createElement(_.a, {
						className: T.a.subredditLink,
						to: i.url,
						onClick: this.onSubredditNameClick
					}, i.displayText), o ? r.a.createElement("div", {
						className: T.a.subredditSubscribeLargeButton
					}, r.a.createElement(f.a, {
						identifier: {
							name: i.name,
							type: k.a.SUBREDDIT
						},
						postId: t.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					})) : r.a.createElement(f.a, {
						className: T.a.subredditSubscribeButton,
						getEventFactory: this.getSubscribeEventFactory,
						doNotHideOtherSubscribeButtons: !0,
						identifier: {
							name: i.name,
							type: k.a.SUBREDDIT
						},
						postId: t.id,
						small: !0
					})), r.a.createElement("div", {
						className: Object(c.a)(T.a.postBody, {
							[T.a.isFirst]: n || !i
						}),
						"data-click-id": "body"
					}, r.a.createElement("div", {
						className: T.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, t.title)), r.a.createElement("div", {
						className: T.a.bottomline
					}, r.a.createElement(S.b, {
						post: t,
						language: e
					}))))) : null
				}
			}
			var U = Object(o.b)(L, e => ({
					onPostClick: t => {
						e(Object(j.C)({
							postOrComment: t
						}))
					}
				}))(Object(l.b)(w)),
				V = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx"),
				R = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.m.less"),
				F = s.n(R);
			const M = Object(i.c)({
					subredditData: (e, t) => {
						let {
							numInstance: s
						} = t;
						return Object(v.h)(e, s)
					},
					topPostIds: (e, t) => {
						let {
							numInstance: s
						} = t;
						return Object(v.i)(e, s)
					}
				}),
				A = Object(o.b)(M);
			class H extends r.a.PureComponent {
				render() {
					const {
						className: e,
						listingKey: t,
						listingPosition: s,
						numInstance: n,
						topPostIds: o,
						pubsub: i,
						subredditData: c
					} = this.props;
					if (0 === o.length || !c) return null;
					const {
						id: a,
						name: d
					} = c;
					return r.a.createElement(C, {
						className: e,
						shouldHideBottomPadding: !0,
						listingKey: t,
						listingPosition: s,
						numInstance: n,
						pubsub: i
					}, r.a.createElement(V.a, {
						subredditId: a,
						subredditName: d,
						shouldHideBottomBorder: !0,
						listingKey: t,
						position: s,
						pubsub: i
					}), r.a.createElement("div", {
						className: F.a.topPostsTitle
					}, r.a.createElement(m.c, null, "Top posts")), o.slice(0, 2).map(e => r.a.createElement(U, {
						key: e,
						postId: e,
						shouldHideBottomBorder: !0,
						shouldHideSubredditLink: !0,
						position: s,
						listingKey: t,
						pubsub: i
					})))
				}
			}
			t.default = A(H)
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
				postEventMeta: "ngCfG_MRVHprTjk5eoc5F",
				Metadata: "_2dE1LHEebPUbXWJUn5_hwk",
				metadata: "_2dE1LHEebPUbXWJUn5_hwk",
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
				x = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = s("./src/reddit/i18n/components.tsx"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				j = s.n(C);
			const y = Object(c.c)({
					subreddit: O.P,
					subredditAboutInfo: O.v
				}),
				S = Object(o.b)(y);
			class I extends r.a.Component {
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
						e && t && !this.hasFiredViewEvent && (o(Object(E.q)(s, n, r)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: n,
							position: r
						} = this.props;
						s(t ? Object(E.m)(e, n, r) : Object(x.c)(n))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: r
						} = this.props;
						return e ? s ? Object(x.e)(n) : Object(E.p)(t, n, r) : s ? Object(x.d)(n) : Object(E.o)(t, n, r)
					}
				}
				componentDidMount() {
					this.props.pubsub && this.props.pubsub.addListeners(l.b, this.trackViewEvent)
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(l.b, this.trackViewEvent)
				}
				componentWillReceiveProps(e) {
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
						className: Object(a.a)(j.a.subredditContainer, {
							[j.a.hideBottomBorder]: e
						})
					}, r.a.createElement("div", {
						className: j.a.subredditContent
					}, r.a.createElement("div", null, r.a.createElement(i.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, r.a.createElement(u.b, {
						subredditOrProfile: n,
						className: j.a.iconContainer
					}))), r.a.createElement("div", {
						className: j.a.subredditBodyWrapper
					}, r.a.createElement("div", {
						className: j.a.subredditBody,
						"data-click-id": "body"
					}, r.a.createElement(b.a, {
						className: j.a.subredditTitle,
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
						className: j.a.subredditMeta
					}, r.a.createElement(g.c, null, "".concat(m, " member").concat(l > 1 ? "s" : ""))), s && r.a.createElement("div", {
						className: j.a.subredditMeta
					}, r.a.createElement(v.c, null), r.a.createElement(g.c, null, "".concat(E, " online"))), t && c && r.a.createElement(i.a, {
						className: j.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, c))))
				}
			}
			t.a = S(Object(m.b)(I))
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
				i = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/app/strings/index.ts")),
				c = s("./src/lib/constants/index.ts");

			function a(e, t) {
				return e.toLocaleDateString(t, {
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
				g = m.a.wrapped(l.a, "CalendarIcon", p.a),
				O = m.a.wrapped(u.a, "LiveIcon", p.a),
				C = m.a.div("LoadingState", p.a);
			class j extends n.Component {
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
						language: t,
						post: s
					} = this.props, {
						eventInfo: n
					} = s;
					if (!n) return null;
					const {
						eventEnd: l,
						eventIsLive: u,
						eventStart: b
					} = n, p = Object(o.e)(b, l);
					let m, j;
					if (this.state.mounted || p === o.a.Live) m = function(e, t, s, n) {
						const r = Object(o.e)(e, t),
							d = new Date(e * c.Db);
						let l;
						if (r === o.a.Live || n) return Object(i.a)(s, "posts.event.inProgress");
						r === o.a.Future ? l = Object(o.d)(e) ? Object(i.a)(s, "posts.event.today") : Object(o.b)(e) >= 5 ? a(d, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(d, s) : r === o.a.Past && (l = Object(o.d)(e) ? Object(i.a)(s, "posts.event.today") : a(d, s));
						const u = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(d, s);
						return "".concat(l, " @ ").concat(u)
					}(b, l, t, u);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						m = r.a.createElement(C, {
							className: e
						})
					}
					if (u) j = r.a.createElement(E, null, r.a.createElement(O, null), m);
					else if (p === o.a.Future) j = r.a.createElement(h, null, r.a.createElement(g, null), m);
					else {
						if (p !== o.a.Past) return null;
						j = r.a.createElement(v, null, r.a.createElement(g, null), m)
					}
					return r.a.createElement(x, {
						className: e
					}, j)
				}
			}
			t.a = j
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const o = Object(n.a)({
				getComponent: () => Object(r.a)(() => Promise.all([s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = o
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
			const E = Object(o.c)({
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
						const r = Object(c.b)(n.postId, s);
						return Object(u.c)(e, r)
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(b.e)(e, {
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
				g = e => {
					const t = Object(m.d)(e.target, e.currentTarget),
						s = Object(m.b)(e.target, e.currentTarget, m.a.buttons);
					return "subreddit" !== t && s
				};
			class O extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						buffering: t,
						children: s,
						className: n,
						continuousViewingStartedAt: o,
						gildModalIsOpen: c,
						makePostContainerId: d,
						playing: u,
						post: b,
						onClick: m,
						onPostContentClick: h,
						onPostViewable: E,
						style: x,
						ref: O
					} = this.props, C = r.a.createElement("div", {
						style: x,
						ref: O,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && (e(() => m && m(t, b))(t), h && g(t) && h(t, b))
						},
						className: Object(p.a)(v.a.WrappedPost, n, "Post ".concat(b.id), {
							promotedlink: b.isSponsored
						}),
						id: d ? d(b.id) : b.id,
						tabIndex: -1
					}, s, c && r.a.createElement(a.a, null)), j = !!b.media && b.media.type === l.n.VIDEO;
					return b.isSponsored || j ? r.a.createElement(i.a, {
						onViewable: e => E(b, e),
						trackVideoMetrics: j && !t && u,
						continuousViewingStartedAt: o
					}, C) : C
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
				r = s.n(n),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const E = m.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = v(e, ["small", "shouldReverseColor"]);
					const o = s ? c.i : c.f;
					return r.a.createElement(o, h({}, n, {
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
					} = e, o = v(e, ["small", "belongsToType", "shouldReverseColor"]);
					const i = n ? c.f : c.i;
					return r.a.createElement(i, h({}, o, {
						className: Object(p.a)(o.className, {
							[b.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", b.a),
				g = m.a.wrapped(a.a, "Checkmark", b.a),
				O = m.a.wrapped(d.a, "Plus", b.a),
				C = m.a.div("ButtonSpacer", b.a);
			class j extends r.a.Component {
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
							language: n,
							onSubscribe: o,
							onUnsubscribe: i,
							postId: c,
							sendEvent: a,
							small: d = !1,
							userIsSubscriber: u,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: j,
							onSubscriptionsRequested: y
						} = e,
						S = v(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						I = this.state.isHovered;
					let _ = u ? "subscribed" : "subscribe";
					u && I && (_ = "unsubscribe");
					const f = Object(l.a)({
						type: s.type,
						key: _
					});
					return u ? this.state.hasJustSubscribed || m ? r.a.createElement(x, h({
						className: Object(p.a)(t, {
							[b.a.isLarge]: !d,
							[b.a.unsubscribeButtonHoverStyles]: !d
						}),
						onClick: this.onClick,
						small: d,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, S), d && r.a.createElement(g, null), !d && !I && r.a.createElement(g, null), !d && f) : d ? null : r.a.createElement(C, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(E, h({
						className: Object(p.a)(t, {
							[b.a.isLarge]: !d
						}),
						onClick: this.onClick,
						small: d
					}, S, {
						id: "subscribe-button-".concat(c),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), r.a.createElement(O, null), !d && f))
				}
			}
			t.a = Object(i.a)(Object(o.b)(j))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return v
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/app/strings/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				a = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				d = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(d),
				u = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const b = i.a.span("metaText", l.a),
				p = e => r.a.createElement(b, e, " · "),
				m = Object(o.c)("comment.point"),
				h = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: n,
						useUpvotes: o
					} = e, i = u(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(c.b)(n),
						l = Object(a.c)("\n    ".concat(Object(a.b)("score", d), " ").concat(Object(a.a)("upvotes", ["upvote", "upvotes"], n), "\n  ")),
						p = t ? Object(a.c)("Score hidden") : o ? l : m(s, n, {
							count: d
						});
					return r.a.createElement(b, i, p)
				},
				v = (e, t) => {
					const s = Object(o.b)(t, "posts.comments.noun", e, {
						count: Object(c.b)(e)
					});
					return r.a.createElement(b, null, s)
				}
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
				return g
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "e", (function() {
				return j
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
			const p = e => Object.assign({}, u.defaults(e), {
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
							i = Object(l.y)(e, {
								subredditName: n
							});
						return i ? {
							outbound: Object.assign({}, o, {
								url: i.url,
								subredditId: i.id
							})
						} : {
							outbound: Object.assign({}, o)
						}
					})(e, t))
				},
				v = e => t => Object.assign({}, (e => Object.assign({}, u.defaults(e), {
					source: r.LINK,
					action: o.c.CLICK,
					noun: n.INTERNAL_LINK
				}))(t), h(t, e)),
				E = e => t => Object.assign({}, p(t), {
					source: "global",
					action: o.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				x = (e, t) => s => Object.assign({}, p(s), {
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				g = (e, t) => s => Object.assign({}, p(s), {
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				O = e => t => Object.assign({}, p(t), {
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				C = e => t => Object.assign({}, p(t), {
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				j = e => t => Object.assign({}, p(t), {
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
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.94a38a54b8ad6a534fcf.js.map