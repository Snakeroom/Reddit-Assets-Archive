// https://www.redditstatic.com/desktop2x/CommunityCrossPollinationFocusedVertical.85915ceec2e128cf9e15.js
// Retrieved at 1/17/2020, 10:45:21 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityCrossPollinationFocusedVertical"], {
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
				return p
			})), s.d(t, "b", (function() {
				return b
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/lib/prettyPrintNumber/index.ts"),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = s("./src/reddit/helpers/postEvent.ts"),
				l = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less"),
				u = s.n(l);
			const p = a.a.wrapped(e => n.a.createElement("span", {
					className: e.className
				}, e.children), "Metadata", u.a),
				b = e => {
					let {
						post: t,
						language: s
					} = e;
					return Object(c.a)(t) ? n.a.createElement(d.a, {
						className: u.a.postEventMeta,
						language: s,
						post: t
					}) : n.a.createElement(n.a.Fragment, null, !t.isScoreHidden && n.a.createElement(n.a.Fragment, null, n.a.createElement(p, {
						"data-click-id": "score"
					}, Object(r.c)(s, "posts.points.noun", t.score, {
						count: Object(o.b)(t.score)
					})), n.a.createElement(p, null, "·")), n.a.createElement(p, {
						"data-click-id": "comments"
					}, Object(r.c)(s, "posts.comments.noun", t.numComments, {
						count: Object(o.b)(t.numComments)
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				v = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				E = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/Wrapper/index.m.less"),
				C = s.n(E);
			const x = Object(r.c)({
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
			class y extends n.a.Component {
				constructor(e) {
					super(e), this.hasFiredViewEvent = !1, this.getLocalStorageDisabled = () => !0, this.setLocalStorageDisabled = () => void 0, this.trackViewEvent = () => {
						this.hasFiredViewEvent || (this.props.sendEvent(Object(b.r)(this.props.listingKey, this.props.interactedSubredditId, this.props.listingPosition)), this.hasFiredViewEvent = !0)
					}, this.onHideComponent = () => {
						const {
							hideComponent: e,
							interactedSubredditId: t,
							listingKey: s,
							listingPosition: i
						} = this.props;
						this.setLocalStorageDisabled(), e(), this.props.sendEvent(Object(b.n)(s, t, i))
					}, this.onSubredditClick = () => {
						const {
							interactedSubredditId: e,
							listingKey: t,
							listingPosition: s
						} = this.props;
						this.props.sendEvent(Object(b.i)(t, e, s))
					}, this.getLocalStorageDisabled = Object(p.y)(), this.setLocalStorageDisabled = Object(p.M)()
				}
				componentDidMount() {
					const {
						showComponent: e
					} = this.props;
					this.props.pubsub && this.props.pubsub.addListeners(c.b, this.trackViewEvent), this.getLocalStorageDisabled() || e()
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(c.b, this.trackViewEvent)
				}
				componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(c.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(c.b, this.trackViewEvent)
				}
				render() {
					const {
						children: e,
						className: t,
						didUserDisable: s,
						prefixedSubredditName: i,
						shouldHideBottomPadding: o
					} = this.props;
					return s ? null : n.a.createElement("div", {
						className: Object(a.a)(C.a.container, t)
					}, n.a.createElement("div", {
						className: C.a.titleWrapper
					}, n.a.createElement("div", {
						className: C.a.titleTextWrapper
					}, n.a.createElement("div", {
						className: C.a.titleText
					}, n.a.createElement(m.c, null, "Discover more communities")), i && n.a.createElement("div", {
						className: C.a.subTitleWrapper
					}, n.a.createElement(m.c, null, "Because you joined"), n.a.createElement(u.a, {
						className: C.a.subredditLink,
						to: "/".concat(i),
						onClick: this.onSubredditClick
					}, " ".concat(i)))), n.a.createElement("div", {
						className: C.a.closeWrapper,
						onClick: this.onHideComponent
					}, n.a.createElement(h.a, {
						className: C.a.close
					}))), n.a.createElement("div", {
						className: Object(a.a)(C.a.contentWrapper, {
							[C.a.noBottomPadding]: o
						})
					}, e))
				}
			}
			var g = Object(o.b)(x, e => ({
					hideComponent: () => e(Object(d.b)()),
					showComponent: () => e(Object(d.c)())
				}))(Object(l.b)(y)),
				O = s("./src/reddit/actions/post.ts"),
				k = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				S = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				_ = s("./src/reddit/components/PostContainer/index.tsx"),
				j = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				P = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				N = s("./src/reddit/constants/posts.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				B = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/PostItem/index.m.less"),
				w = s.n(I);
			const L = e => "".concat(e, "--FocusedVerticalRecommendationItem"),
				U = Object(r.c)({
					language: B.S,
					post: D.J,
					subreddit: D.U
				});
			class V extends n.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						this.props.post && !this.hasFiredViewEvent && (this.props.sendEvent(Object(b.l)(this.props.listingKey, this.props.postId, this.props.position)), this.hasFiredViewEvent = !0)
					}, this.onPostClick = () => {
						const {
							listingKey: e,
							onPostClick: t,
							post: s,
							postId: i,
							sendEvent: n,
							position: o
						} = this.props;
						t(s), n(Object(b.j)(e, i, o))
					}, this.onSubredditNameClick = () => {
						const {
							listingKey: e,
							postId: t,
							sendEvent: s,
							subreddit: i,
							position: n
						} = this.props;
						i && s(Object(b.k)(e, t, i.id, n))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							subreddit: s,
							postId: i,
							position: n
						} = this.props;
						return e ? Object(b.p)(t, s && s.id || "", n, i) : Object(b.o)(t, s && s.id || "", n, i)
					}
				}
				componentDidMount() {
					this.props.pubsub && this.props.pubsub.addListeners(c.b, this.trackViewEvent)
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(c.b, this.trackViewEvent)
				}
				componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(c.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(c.b, this.trackViewEvent)
				}
				render() {
					const {
						language: e,
						post: t,
						shouldHideBottomBorder: s,
						shouldHideSubredditLink: i,
						shouldShowBiggerJoin: o,
						subreddit: r
					} = this.props;
					return t ? n.a.createElement(_.a, {
						className: Object(a.a)(w.a.postContainer, {
							[w.a.hideBottomBorder]: s
						}),
						makePostContainerId: L,
						post: t,
						onClick: this.onPostClick
					}, n.a.createElement("div", {
						className: w.a.postContent
					}, n.a.createElement(k.a, {
						classNameInnerThumbnail: w.a.thumbnailOverride,
						post: t
					}), n.a.createElement("div", {
						className: w.a.postBodyWrapper
					}, !i && r && n.a.createElement("div", {
						className: Object(a.a)(w.a.subredditContainer)
					}, n.a.createElement(j.a, {
						className: w.a.subredditLink,
						to: r.url,
						onClick: this.onSubredditNameClick
					}, r.displayText), o ? n.a.createElement("div", {
						className: w.a.subredditSubscribeLargeButton
					}, n.a.createElement(P.a, {
						identifier: {
							name: r.name,
							type: N.a.SUBREDDIT
						},
						postId: t.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					})) : n.a.createElement(P.a, {
						className: w.a.subredditSubscribeButton,
						getEventFactory: this.getSubscribeEventFactory,
						doNotHideOtherSubscribeButtons: !0,
						identifier: {
							name: r.name,
							type: N.a.SUBREDDIT
						},
						postId: t.id,
						small: !0
					})), n.a.createElement("div", {
						className: Object(a.a)(w.a.postBody, {
							[w.a.isFirst]: i || !r
						}),
						"data-click-id": "body"
					}, n.a.createElement("div", {
						className: w.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, t.title)), n.a.createElement("div", {
						className: w.a.bottomline
					}, n.a.createElement(S.b, {
						post: t,
						language: e
					}))))) : null
				}
			}
			var F = Object(o.b)(U, e => ({
					onPostClick: t => {
						e(Object(O.x)({
							postOrComment: t
						}))
					}
				}))(Object(l.b)(V)),
				T = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx"),
				W = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.m.less"),
				f = s.n(W);
			const A = Object(r.c)({
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
				M = Object(o.b)(A);
			class H extends n.a.PureComponent {
				render() {
					const {
						className: e,
						listingKey: t,
						listingPosition: s,
						numInstance: i,
						topPostIds: o,
						pubsub: r,
						subredditData: a
					} = this.props;
					if (0 === o.length || !a) return null;
					const {
						id: d,
						name: c
					} = a;
					return n.a.createElement(g, {
						className: e,
						shouldHideBottomPadding: !0,
						listingKey: t,
						listingPosition: s,
						numInstance: i,
						pubsub: r
					}, n.a.createElement(T.a, {
						subredditId: d,
						subredditName: c,
						shouldHideBottomBorder: !0,
						listingKey: t,
						position: s,
						pubsub: r
					}), n.a.createElement("div", {
						className: f.a.topPostsTitle
					}, n.a.createElement(m.c, null, "Top posts")), o.slice(0, 2).map(e => n.a.createElement(F, {
						key: e,
						postId: e,
						shouldHideBottomBorder: !0,
						shouldHideSubredditLink: !0,
						position: s,
						listingKey: t,
						pubsub: r
					})))
				}
			}
			t.default = M(H)
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/controls/MetaData/index.tsx"),
				E = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				C = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = s("./src/reddit/i18n/components.tsx"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				O = s.n(g);
			const k = Object(a.c)({
					subreddit: y.S,
					subredditAboutInfo: y.y
				}),
				S = Object(o.b)(k);
			class _ extends n.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						const {
							subreddit: e,
							subredditAboutInfo: t,
							listingKey: s,
							subredditId: i,
							position: n,
							sendEvent: o
						} = this.props;
						e && t && !this.hasFiredViewEvent && (o(Object(E.q)(s, i, n)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: i,
							position: n
						} = this.props;
						s(t ? Object(E.m)(e, i, n) : Object(C.c)(i))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: i,
							position: n
						} = this.props;
						return e ? s ? Object(C.e)(i) : Object(E.p)(t, i, n) : s ? Object(C.d)(i) : Object(E.o)(t, i, n)
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
						subreddit: i,
						subredditAboutInfo: o
					} = this.props;
					if (!i || !o) return null;
					const a = o.publicDescription || "",
						l = i.subscribers,
						m = Object(c.b)(l),
						E = Object(c.b)(o.accountsActive);
					return n.a.createElement("div", {
						className: Object(d.a)(O.a.subredditContainer, {
							[O.a.hideBottomBorder]: e
						})
					}, n.a.createElement("div", {
						className: O.a.subredditContent
					}, n.a.createElement("div", null, n.a.createElement(r.a, {
						to: i.url,
						onClick: this.onSubredditClick
					}, n.a.createElement(u.b, {
						subredditOrProfile: i,
						className: O.a.iconContainer
					}))), n.a.createElement("div", {
						className: O.a.subredditBodyWrapper
					}, n.a.createElement("div", {
						className: O.a.subredditBody,
						"data-click-id": "body"
					}, n.a.createElement(p.a, {
						className: O.a.subredditTitle,
						to: i.url,
						onClick: this.onSubredditClick
					}, i.displayText), n.a.createElement("div", null, n.a.createElement(b.a, {
						identifier: {
							name: i.name,
							type: h.a.SUBREDDIT
						},
						postId: i.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					}))), n.a.createElement("div", {
						className: O.a.subredditMeta
					}, n.a.createElement(x.c, null, "".concat(m, " member").concat(l > 1 ? "s" : ""))), s && n.a.createElement("div", {
						className: O.a.subredditMeta
					}, n.a.createElement(v.c, null), n.a.createElement(x.c, null, "".concat(E, " online"))), t && a && n.a.createElement(r.a, {
						className: O.a.subredditDescriptionContainer,
						to: i.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, a))))
				}
			}
			t.a = S(Object(m.b)(_))
		}
	}
]);
//# sourceMappingURL=CommunityCrossPollinationFocusedVertical.85915ceec2e128cf9e15.js.map