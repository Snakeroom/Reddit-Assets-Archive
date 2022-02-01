// https://www.redditstatic.com/desktop2x/reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.dbd869ed99b279c4272c.js
// Retrieved at 2/1/2022, 1:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts"], {
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/lib/prettyPrintNumber/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				a = s("./src/reddit/helpers/postEvent.ts"),
				c = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less"),
				l = s.n(c);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = r.a.wrapped(e => n.a.createElement("span", {
				className: e.className
			}, e.children), "Metadata", l.a), p = ({
				post: e
			}) => Object(a.a)(e) ? n.a.createElement(d.a, {
				className: l.a.postEventMeta,
				post: e
			}) : n.a.createElement(n.a.Fragment, null, !e.isScoreHidden && n.a.createElement(n.a.Fragment, null, n.a.createElement(b, {
				"data-click-id": "score"
			}, u._({
				"*": "{Post score} points",
				_1: "1 point"
			}, [u._plural(e.score, "Post score", Object(o.b)(e.score))], {
				hk: "1gwCFh"
			})), n.a.createElement(b, null, "·")), n.a.createElement(b, {
				"data-click-id": "comments"
			}, u._({
				"*": "{number} comments",
				_1: "1 comment"
			}, [u._plural(e.numComments, "number", Object(o.b)(e.numComments))], {
				hk: "3eG58Q"
			})))
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
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				p = s("./src/reddit/icons/svgs/Close/index.tsx"),
				m = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				h = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/Wrapper/index.m.less"),
				v = s.n(h);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = Object(r.c)({
				didUserDisable: m.a,
				prefixedSubredditName: (e, {
					numInstance: t
				}) => Object(m.i)(e, t),
				interactedSubredditId: (e, {
					numInstance: t
				}) => Object(m.h)(e, t),
				cityLocation: m.c
			});
			class _ extends n.a.Component {
				constructor(e) {
					super(e), this.hasFiredViewEvent = !1, this.getLocalStorageDisabled = () => !0, this.setLocalStorageDisabled = () => void 0, this.trackViewEvent = () => {
						this.hasFiredViewEvent || (this.props.sendEvent(Object(b.n)(this.props.listingKey, this.props.interactedSubredditId, this.props.listingPosition)), this.hasFiredViewEvent = !0)
					}, this.onHideComponent = () => {
						const {
							hideComponent: e,
							interactedSubredditId: t,
							listingKey: s,
							listingPosition: i
						} = this.props;
						this.setLocalStorageDisabled(), e(), this.props.sendEvent(Object(b.j)(s, t, i))
					}, this.onSubredditClick = () => {
						const {
							interactedSubredditId: e,
							listingKey: t,
							listingPosition: s
						} = this.props;
						this.props.sendEvent(Object(b.e)(t, e, s))
					}, this.getLocalStorageDisabled = Object(u.R)(), this.setLocalStorageDisabled = Object(u.tb)()
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
				UNSAFE_componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(c.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(c.b, this.trackViewEvent)
				}
				render() {
					const {
						children: e,
						className: t,
						didUserDisable: s,
						prefixedSubredditName: i,
						shouldHideBottomPadding: o,
						cityLocation: r
					} = this.props;
					return s ? null : n.a.createElement("div", {
						className: Object(d.a)(v.a.container, t)
					}, n.a.createElement("div", {
						className: v.a.titleWrapper
					}, n.a.createElement("div", {
						className: v.a.titleTextWrapper
					}, n.a.createElement("div", {
						className: v.a.titleText
					}, E._("Discover communities", null, {
						hk: "2OpaUL"
					})), i && n.a.createElement("div", {
						className: v.a.subTitleWrapper
					}, E._("Because you're in {place}", [E._param("place", r)], {
						hk: "3qt67F"
					}))), n.a.createElement("div", {
						className: v.a.closeWrapper,
						onClick: this.onHideComponent
					}, n.a.createElement(p.a, {
						className: v.a.close
					}))), n.a.createElement("div", {
						className: Object(d.a)(v.a.contentWrapper, {
							[v.a.noBottomPadding]: o
						})
					}, e))
				}
			}
			var x = Object(o.b)(C, e => ({
					hideComponent: () => e(Object(a.c)()),
					showComponent: () => e(Object(a.d)())
				}))(Object(l.c)(_)),
				y = s("./src/reddit/actions/post.ts"),
				k = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				g = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.tsx"),
				j = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				P = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				S = s("./src/reddit/constants/posts.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/PostItem/index.m.less"),
				F = s.n(N);
			const f = e => `${e}--FocusedVerticalRecommendationItem`,
				B = Object(r.c)({
					post: D.H,
					subreddit: D.V
				});
			class U extends n.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						this.props.post && !this.hasFiredViewEvent && (this.props.sendEvent(Object(b.h)(this.props.listingKey, this.props.postId, this.props.position)), this.hasFiredViewEvent = !0)
					}, this.onPostClick = () => {
						const {
							listingKey: e,
							onPostClick: t,
							post: s,
							postId: i,
							sendEvent: n,
							position: o
						} = this.props;
						t(s), n(Object(b.f)(e, i, o))
					}, this.onSubredditNameClick = () => {
						const {
							listingKey: e,
							postId: t,
							sendEvent: s,
							subreddit: i,
							position: n
						} = this.props;
						i && s(Object(b.g)(e, t, i.id, n))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							subreddit: s,
							postId: i,
							position: n
						} = this.props;
						return e ? Object(b.l)(t, s && s.id || "", n, i) : Object(b.k)(t, s && s.id || "", n, i)
					}
				}
				componentDidMount() {
					this.props.pubsub && this.props.pubsub.addListeners(c.b, this.trackViewEvent)
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(c.b, this.trackViewEvent)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(c.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(c.b, this.trackViewEvent)
				}
				render() {
					const {
						post: e,
						shouldHideBottomBorder: t,
						shouldHideSubredditLink: s,
						shouldShowBiggerJoin: i,
						subreddit: o
					} = this.props;
					return e ? n.a.createElement(O.a, {
						className: Object(d.a)(F.a.postContainer, {
							[F.a.hideBottomBorder]: t
						}),
						makePostContainerId: f,
						post: e,
						onClick: this.onPostClick
					}, n.a.createElement("div", {
						className: F.a.postContent
					}, n.a.createElement(k.a, {
						classNameInnerThumbnail: F.a.thumbnailOverride,
						post: e
					}), n.a.createElement("div", {
						className: F.a.postBodyWrapper
					}, !s && o && n.a.createElement("div", {
						className: Object(d.a)(F.a.subredditContainer)
					}, n.a.createElement(j.a, {
						className: F.a.subredditLink,
						to: o.url,
						onClick: this.onSubredditNameClick
					}, o.displayText), i ? n.a.createElement("div", {
						className: F.a.subredditSubscribeLargeButton
					}, n.a.createElement(P.a, {
						identifier: {
							name: o.name,
							type: S.a.SUBREDDIT
						},
						postId: e.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					})) : n.a.createElement(P.a, {
						className: F.a.subredditSubscribeButton,
						getEventFactory: this.getSubscribeEventFactory,
						doNotHideOtherSubscribeButtons: !0,
						identifier: {
							name: o.name,
							type: S.a.SUBREDDIT
						},
						postId: e.id,
						small: !0
					})), n.a.createElement("div", {
						className: Object(d.a)(F.a.postBody, {
							[F.a.isFirst]: s || !o
						}),
						"data-click-id": "body"
					}, n.a.createElement("div", {
						className: F.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, e.title)), n.a.createElement("div", {
						className: F.a.bottomline
					}, n.a.createElement(g.b, {
						post: e
					}))))) : null
				}
			}
			var I = Object(o.b)(B, e => ({
					onPostClick: t => {
						e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(Object(y.L)({
							postOrComment: t
						}))
					}
				}))(Object(l.c)(U)),
				L = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx"),
				w = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.m.less"),
				V = s.n(w);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), A = Object(r.c)({
				isFeatureFlag: m.d,
				isPending: m.e,
				subredditData: (e, {
					numInstance: t
				}) => Object(m.j)(e, t),
				topPostIds: (e, {
					numInstance: t
				}) => Object(m.k)(e, t)
			}), W = Object(o.b)(A);
			class M extends n.a.PureComponent {
				render() {
					const {
						className: e,
						isFeatureFlag: t,
						isPending: s,
						listingKey: i,
						listingPosition: o,
						numInstance: r,
						pubsub: d,
						subredditData: a,
						topPostIds: c
					} = this.props;
					if (0 === c.length || !a || !t || s) return null;
					const {
						id: l,
						name: u
					} = a;
					return n.a.createElement(x, {
						className: e,
						shouldHideBottomPadding: !0,
						listingKey: i,
						listingPosition: o,
						numInstance: r,
						pubsub: d
					}, n.a.createElement(L.a, {
						subredditId: l,
						subredditName: u,
						shouldHideBottomBorder: !0,
						listingKey: i,
						position: o,
						pubsub: d
					}), n.a.createElement("div", {
						className: V.a.topPostsTitle
					}, T._("Top post", null, {
						hk: "3BdOuj"
					})), c.slice(0, 1).map(e => n.a.createElement(I, {
						key: e,
						postId: e,
						shouldHideBottomBorder: !0,
						shouldHideSubredditLink: !0,
						position: o,
						listingKey: i,
						pubsub: d
					})))
				}
			}
			t.default = W(M)
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/controls/MetaData/index.tsx"),
				E = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				C = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				y = s.n(x);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = Object(d.c)({
				subreddit: _.R,
				subredditAboutInfo: _.t
			}), O = Object(o.b)(g);
			class j extends n.a.Component {
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
						e && t && !this.hasFiredViewEvent && (o(Object(E.m)(s, i, n)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: i,
							position: n
						} = this.props;
						s(t ? Object(C.c)(i) : Object(E.i)(e, i, n))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: i,
							position: n
						} = this.props;
						return e ? s ? Object(C.e)(i) : Object(E.l)(t, i, n) : s ? Object(C.d)(i) : Object(E.k)(t, i, n)
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
						subreddit: i,
						subredditAboutInfo: o
					} = this.props;
					if (!i || !o) return null;
					const d = o.publicDescription || "",
						l = i.subscribers,
						m = Object(c.b)(l),
						E = Object(c.b)(o.accountsActive);
					return n.a.createElement("div", {
						className: Object(a.a)(y.a.subredditContainer, {
							[y.a.hideBottomBorder]: e
						})
					}, n.a.createElement("div", {
						className: y.a.subredditContent
					}, n.a.createElement("div", null, n.a.createElement(r.a, {
						to: i.url,
						onClick: this.onSubredditClick
					}, n.a.createElement(u.b, {
						subredditOrProfile: i,
						className: y.a.iconContainer
					}))), n.a.createElement("div", {
						className: y.a.subredditBodyWrapper
					}, n.a.createElement("div", {
						className: y.a.subredditBody,
						"data-click-id": "body"
					}, n.a.createElement(b.a, {
						className: y.a.subredditTitle,
						to: i.url,
						onClick: this.onSubredditClick
					}, i.displayText), n.a.createElement("div", null, n.a.createElement(p.a, {
						identifier: {
							name: i.name,
							type: h.a.SUBREDDIT
						},
						postId: i.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					}))), n.a.createElement("div", {
						className: y.a.subredditMeta
					}, k._({
						"*": "{number} members",
						_1: "1 member"
					}, [k._plural(l, "number", m)], {
						hk: "4yqFU9"
					})), s && n.a.createElement("div", {
						className: y.a.subredditMeta
					}, n.a.createElement(v.c, null), k._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [k._plural(o.accountsActive, "number", E)], {
						hk: "1oCA5j"
					})), t && d && n.a.createElement(r.a, {
						className: y.a.subredditDescriptionContainer,
						to: i.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, d))))
				}
			}
			t.a = O(Object(m.c)(j))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return p
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				a = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				c = s.n(a);
			const l = r.a.span("metaText", c.a),
				u = e => o.a.createElement(l, e, " · "),
				b = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: s,
					...n
				}) => {
					const r = Object(d.b)(t),
						a = i.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [i.fbt._plural(t, "number", r)], {
							hk: "2L3T21"
						}),
						c = e ? i.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? a : i.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [i.fbt._plural(t, "number", r)], {
							hk: "gf67v"
						});
					return o.a.createElement(l, n, c)
				},
				p = e => o.a.createElement(l, null, i.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [i.fbt._plural(e, "number", Object(d.b)(e))], {
					hk: "3bVMk9"
				}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.dbd869ed99b279c4272c.js.map