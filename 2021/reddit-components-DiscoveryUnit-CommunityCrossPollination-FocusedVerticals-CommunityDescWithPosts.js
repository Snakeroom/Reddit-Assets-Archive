// https://www.redditstatic.com/desktop2x/reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.71c2b084c126ed69643b.js
// Retrieved at 3/9/2021, 3:40:12 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/selectors/telemetry.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, s) => (n = (() => {})) => r => {
				const i = b(r.target, r.currentTarget),
					c = p(r.target, r.currentTarget);
				i && s && t && (l(r.target, r.currentTarget, u.anchors) ? s(t(e, i, c)) : s(s => {
					const n = t(e, i, c)(s);
					let r;
					if (n && n.actionInfo) {
						const {
							pageType: e,
							...t
						} = n.actionInfo;
						r = t
					}
					return {
						...n,
						actionInfo: Object(o.previousPageActionInfo)(s, r)
					}
				})), l(r.target, r.currentTarget, u.anchorsAndButtons) && n(r)
			};

			function a(e) {
				return Object(i.c)(t => {
					const {
						sendEvent: s,
						eventFactory: i,
						clickTrackingId: o,
						...a
					} = t, u = Object(n.useCallback)(d(o, i, s), [o, i, s]);
					return r.a.createElement(e, c({}, a, {
						afterClickTracking: u
					}))
				})
			}
			const u = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				l = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && l(e.parentElement, t, s)),
				b = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && b(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
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
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/helpers/postEvent.ts"),
				a = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less"),
				u = s.n(a);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = o.a.wrapped(e => r.a.createElement("span", {
				className: e.className
			}, e.children), "Metadata", u.a), p = ({
				post: e
			}) => Object(d.a)(e) ? r.a.createElement(c.a, {
				className: u.a.postEventMeta,
				post: e
			}) : r.a.createElement(r.a.Fragment, null, !e.isScoreHidden && r.a.createElement(r.a.Fragment, null, r.a.createElement(b, {
				"data-click-id": "score"
			}, l._({
				"*": "{Post score} points",
				_1: "1 point"
			}, [l._plural(e.score, "Post score", Object(i.b)(e.score))], {
				hk: "1gwCFh"
			})), r.a.createElement(b, null, "·")), r.a.createElement(b, {
				"data-click-id": "comments"
			}, l._({
				"*": "{number} comments",
				_1: "1 comment"
			}, [l._plural(e.numComments, "number", Object(i.b)(e.numComments))], {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/focusedVerticals/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				p = s("./src/reddit/icons/svgs/Close/index.tsx"),
				m = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				h = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/Wrapper/index.m.less"),
				E = s.n(h);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = Object(o.c)({
				didUserDisable: m.a,
				prefixedSubredditName: (e, {
					numInstance: t
				}) => Object(m.i)(e, t),
				interactedSubredditId: (e, {
					numInstance: t
				}) => Object(m.h)(e, t),
				cityLocation: m.c
			});
			class C extends r.a.Component {
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
					}, this.getLocalStorageDisabled = Object(l.H)(), this.setLocalStorageDisabled = Object(l.fb)()
				}
				componentDidMount() {
					const {
						showComponent: e
					} = this.props;
					this.props.pubsub && this.props.pubsub.addListeners(a.b, this.trackViewEvent), this.getLocalStorageDisabled() || e()
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(a.b, this.trackViewEvent)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(a.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(a.b, this.trackViewEvent)
				}
				render() {
					const {
						children: e,
						className: t,
						didUserDisable: s,
						prefixedSubredditName: n,
						shouldHideBottomPadding: i,
						cityLocation: o
					} = this.props;
					return s ? null : r.a.createElement("div", {
						className: Object(c.a)(E.a.container, t)
					}, r.a.createElement("div", {
						className: E.a.titleWrapper
					}, r.a.createElement("div", {
						className: E.a.titleTextWrapper
					}, r.a.createElement("div", {
						className: E.a.titleText
					}, v._("Discover communities", null, {
						hk: "2OpaUL"
					})), n && r.a.createElement("div", {
						className: E.a.subTitleWrapper
					}, v._("Because you're in {place}", [v._param("place", o)], {
						hk: "3qt67F"
					}))), r.a.createElement("div", {
						className: E.a.closeWrapper,
						onClick: this.onHideComponent
					}, r.a.createElement(p.a, {
						className: E.a.close
					}))), r.a.createElement("div", {
						className: Object(c.a)(E.a.contentWrapper, {
							[E.a.noBottomPadding]: i
						})
					}, e))
				}
			}
			var _ = Object(i.b)(x, e => ({
					hideComponent: () => e(Object(d.c)()),
					showComponent: () => e(Object(d.d)())
				}))(Object(u.c)(C)),
				I = s("./src/reddit/actions/post.ts"),
				S = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				O = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.tsx"),
				f = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				g = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				j = s("./src/reddit/constants/posts.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/PostItem/index.m.less"),
				N = s.n(P);
			const D = e => `${e}--FocusedVerticalRecommendationItem`,
				T = Object(o.c)({
					post: k.I,
					subreddit: k.U
				});
			class B extends r.a.Component {
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
							position: i
						} = this.props;
						t(s), r(Object(b.k)(e, n, i))
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
					this.props.pubsub && this.props.pubsub.addListeners(a.b, this.trackViewEvent)
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(a.b, this.trackViewEvent)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(a.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(a.b, this.trackViewEvent)
				}
				render() {
					const {
						post: e,
						shouldHideBottomBorder: t,
						shouldHideSubredditLink: s,
						shouldShowBiggerJoin: n,
						subreddit: i
					} = this.props;
					return e ? r.a.createElement(y.a, {
						className: Object(c.a)(N.a.postContainer, {
							[N.a.hideBottomBorder]: t
						}),
						makePostContainerId: D,
						post: e,
						onClick: this.onPostClick
					}, r.a.createElement("div", {
						className: N.a.postContent
					}, r.a.createElement(S.a, {
						classNameInnerThumbnail: N.a.thumbnailOverride,
						post: e
					}), r.a.createElement("div", {
						className: N.a.postBodyWrapper
					}, !s && i && r.a.createElement("div", {
						className: Object(c.a)(N.a.subredditContainer)
					}, r.a.createElement(f.a, {
						className: N.a.subredditLink,
						to: i.url,
						onClick: this.onSubredditNameClick
					}, i.displayText), n ? r.a.createElement("div", {
						className: N.a.subredditSubscribeLargeButton
					}, r.a.createElement(g.a, {
						identifier: {
							name: i.name,
							type: j.a.SUBREDDIT
						},
						postId: e.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					})) : r.a.createElement(g.a, {
						className: N.a.subredditSubscribeButton,
						getEventFactory: this.getSubscribeEventFactory,
						doNotHideOtherSubscribeButtons: !0,
						identifier: {
							name: i.name,
							type: j.a.SUBREDDIT
						},
						postId: e.id,
						small: !0
					})), r.a.createElement("div", {
						className: Object(c.a)(N.a.postBody, {
							[N.a.isFirst]: s || !i
						}),
						"data-click-id": "body"
					}, r.a.createElement("div", {
						className: N.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, e.title)), r.a.createElement("div", {
						className: N.a.bottomline
					}, r.a.createElement(O.b, {
						post: e
					}))))) : null
				}
			}
			var L = Object(i.b)(T, e => ({
					onPostClick: t => {
						e(Object(d.a)({
							lastLoadedEnv: "server"
						})), e(Object(I.E)({
							postOrComment: t
						}))
					}
				}))(Object(u.c)(B)),
				U = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx"),
				F = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.m.less"),
				w = s.n(F);
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = Object(o.c)({
				isFeatureFlag: m.d,
				isPending: m.e,
				subredditData: (e, {
					numInstance: t
				}) => Object(m.j)(e, t),
				topPostIds: (e, {
					numInstance: t
				}) => Object(m.k)(e, t)
			}), R = Object(i.b)(V);
			class M extends r.a.PureComponent {
				render() {
					const {
						className: e,
						isFeatureFlag: t,
						isPending: s,
						listingKey: n,
						listingPosition: i,
						numInstance: o,
						pubsub: c,
						subredditData: d,
						topPostIds: a
					} = this.props;
					if (0 === a.length || !d || !t || s) return null;
					const {
						id: u,
						name: l
					} = d;
					return r.a.createElement(_, {
						className: e,
						shouldHideBottomPadding: !0,
						listingKey: n,
						listingPosition: i,
						numInstance: o,
						pubsub: c
					}, r.a.createElement(U.a, {
						subredditId: u,
						subredditName: l,
						shouldHideBottomBorder: !0,
						listingKey: n,
						position: i,
						pubsub: c
					}), r.a.createElement("div", {
						className: w.a.topPostsTitle
					}, A._("Top post", null, {
						hk: "3BdOuj"
					})), a.slice(0, 1).map(e => r.a.createElement(L, {
						key: e,
						postId: e,
						shouldHideBottomBorder: !0,
						shouldHideSubredditLink: !0,
						position: i,
						listingKey: n,
						pubsub: c
					})))
				}
			}
			t.default = R(M)
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
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				E = s("./src/reddit/controls/MetaData/index.tsx"),
				v = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				x = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				I = s.n(_);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(c.c)({
				subreddit: C.T,
				subredditAboutInfo: C.x
			}), y = Object(i.b)(O);
			class f extends r.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						const {
							subreddit: e,
							subredditAboutInfo: t,
							listingKey: s,
							subredditId: n,
							position: r,
							sendEvent: i
						} = this.props;
						e && t && !this.hasFiredViewEvent && (i(Object(v.r)(s, n, r)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: n,
							position: r
						} = this.props;
						s(t ? Object(x.c)(n) : Object(v.n)(e, n, r))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: r
						} = this.props;
						return e ? s ? Object(x.e)(n) : Object(v.q)(t, n, r) : s ? Object(x.d)(n) : Object(v.p)(t, n, r)
					}
				}
				componentDidMount() {
					this.props.pubsub && this.props.pubsub.addListeners(u.b, this.trackViewEvent)
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(u.b, this.trackViewEvent)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(u.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(u.b, this.trackViewEvent)
				}
				render() {
					const {
						shouldHideBottomBorder: e,
						shouldShowDescription: t,
						shouldShowActiveUsers: s,
						subreddit: n,
						subredditAboutInfo: i
					} = this.props;
					if (!n || !i) return null;
					const c = i.publicDescription || "",
						u = n.subscribers,
						m = Object(a.b)(u),
						v = Object(a.b)(i.accountsActive);
					return r.a.createElement("div", {
						className: Object(d.a)(I.a.subredditContainer, {
							[I.a.hideBottomBorder]: e
						})
					}, r.a.createElement("div", {
						className: I.a.subredditContent
					}, r.a.createElement("div", null, r.a.createElement(o.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, r.a.createElement(l.b, {
						subredditOrProfile: n,
						className: I.a.iconContainer
					}))), r.a.createElement("div", {
						className: I.a.subredditBodyWrapper
					}, r.a.createElement("div", {
						className: I.a.subredditBody,
						"data-click-id": "body"
					}, r.a.createElement(b.a, {
						className: I.a.subredditTitle,
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
						className: I.a.subredditMeta
					}, S._({
						"*": "{number} members",
						_1: "1 member"
					}, [S._plural(u, "number", m)], {
						hk: "4yqFU9"
					})), s && r.a.createElement("div", {
						className: I.a.subredditMeta
					}, r.a.createElement(E.c, null), S._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [S._plural(i.accountsActive, "number", v)], {
						hk: "1oCA5j"
					})), t && c && r.a.createElement(o.a, {
						className: I.a.subredditDescriptionContainer,
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
				r = s.n(n),
				i = s("./src/lib/eventTools/index.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				c = s("./src/lib/constants/index.ts");

			function d(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				u = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				l = s("./src/reddit/icons/fonts/Live/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				p = s.n(b),
				m = s("./src/lib/lessComponent.tsx");
			const h = m.a.span("PostEventFutureText", p.a),
				E = m.a.span("PostEventPastText", p.a),
				v = m.a.span("PostEventNowText", p.a),
				x = m.a.span("Container", p.a),
				C = m.a.wrapped(u.a, "CalendarIcon", p.a),
				_ = m.a.wrapped(l.a, "LiveIcon", p.a),
				I = m.a.div("LoadingState", p.a);
			class S extends n.Component {
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
						eventIsLive: u,
						eventStart: l
					} = s, b = Object(i.e)(l, n);
					let p, m;
					if (this.state.mounted || b === i.a.Live) p = function(e, t, s) {
						const n = Object(i.e)(e, t),
							r = new Date(e * c.Hb);
						let a;
						return n === i.a.Live || s ? o.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (n === i.a.Future ? a = Object(i.d)(e) ? o.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(i.b)(e) >= 5 ? d(r) : r.toLocaleDateString(void 0, {
							weekday: "long"
						}) : n === i.a.Past && (a = Object(i.d)(e) ? o.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : d(r)), `${a} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(r)}`)
					}(l, n, u);
					else {
						const e = Object(a.a)({
							isLoading: !0
						});
						p = r.a.createElement(I, {
							className: e
						})
					}
					if (u) m = r.a.createElement(v, null, r.a.createElement(_, null), p);
					else if (b === i.a.Future) m = r.a.createElement(h, null, r.a.createElement(C, null), p);
					else {
						if (b !== i.a.Past) return null;
						m = r.a.createElement(E, null, r.a.createElement(C, null), p)
					}
					return r.a.createElement(x, {
						className: e
					}, m)
				}
			}
			t.a = S
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/ads/index.ts"),
				c = s("./src/reddit/components/AdViewability/index.tsx"),
				d = s("./src/reddit/helpers/trackers/gallery.ts"),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				u = s("./src/reddit/hooks/useTracking.ts");
			var l = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(u.a)(),
						i = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(d.d(e.postId))
							})
						}, [s, e.postId]),
						o = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(a.a)(t, i, o), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/media.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/video.ts"),
				x = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/objectSelector/index.ts"),
				_ = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				I = s("./src/reddit/components/PostContainer/index.m.less"),
				S = s.n(I);
			const O = Object(p.a)(() => Object(i.c)({
					basePixelMetadata: Object(C.a)((e, {
						post: t
					}) => Object(E.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					currentIndex: (e, {
						post: t
					}) => Object(h.b)(e, t.id),
					buffering: (e, {
						post: t
					}) => Object(v.a)(e, {
						postId: t.id
					}),
					playing: (e, {
						post: t
					}) => Object(v.g)(e, {
						postId: t.id
					}),
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(v.c)(e, {
						postId: t.id
					}),
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(E.i)(e, {
						postId: t.id
					})
				})),
				y = e => {
					const t = Object(_.d)(e.target, e.currentTarget),
						s = Object(_.b)(e.target, e.currentTarget, _.a.buttons);
					return "subreddit" !== t && s
				};
			class f extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						currentIndex: i,
						imageGalleryCurrentItem: a,
						makePostContainerId: u,
						post: b,
						onClick: p,
						onPostContentClick: h,
						sendEvent: E,
						style: v,
						ref: C
					} = this.props, _ = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: v,
						ref: C,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => p && p(s, b, t, a))(s), h && y(s) && h(s, b)), b.id && a) {
								const {
									source: e
								} = Object(o.t)(b, a);
								if (e && e.outboundUrl) {
									const t = i + 1;
									E(Object(d.c)(b.id, e.outboundUrl, t))
								}
							}
						},
						className: Object(x.a)(S.a.WrappedPost, n, `Post ${b.id}`, {
							promotedlink: b.isSponsored
						}),
						id: u ? u(b.id) : b.id,
						tabIndex: -1,
						"data-testid": b.id
					}, s), I = !!b.media && b.media.type === m.o.VIDEO;
					return b.isSponsored || I ? r.a.createElement(c.a, {
						post: b,
						trackDisplay: !0
					}, _) : b.media && Object(m.E)(b.media) ? r.a.createElement(l, {
						postId: b.id
					}, _) : _
				}
			}
			t.a = O(Object(_.c)(Object(b.c)(f)))
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				c = s("./src/reddit/contexts/CoreStyleExperiments.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				p = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				m = s.n(p),
				h = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = h.a.wrapped(u.a, "Checkmark", m.a),
				x = h.a.wrapped(l.a, "Plus", m.a),
				C = h.a.div("ButtonSpacer", m.a);
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
					}, this.renderUnsubscribeButton = ({
						[c.a.Icons]: e
					}) => {
						const {
							className: t,
							identifier: s,
							onSubscribe: n,
							onUnsubscribe: i,
							postId: o,
							sendEvent: u,
							small: l = !1,
							size: p,
							userIsSubscriber: m,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: x,
							onSubscriptionsRequested: C,
							..._
						} = this.props, I = this.state.isHovered, S = Object(b.a)({
							type: s.type,
							key: I ? "unsubscribe" : "subscribed"
						});
						return r.a.createElement(d.q, E({
							className: t,
							priority: _.shouldReverseColor ? d.b.Primary : d.b.Secondary,
							Icon: l || !l && !I ? e ? e => r.a.createElement(a.a, E({
								name: "checkmark"
							}, e)) : v : void 0,
							text: !l && S,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: p || (l ? d.c.XS : d.c.S)
						}, _))
					}, this.renderSubscribeButton = ({
						[c.a.Icons]: e
					}) => {
						const {
							className: t,
							identifier: s,
							onSubscribe: n,
							onUnsubscribe: i,
							postId: o,
							sendEvent: u,
							small: l = !1,
							size: p,
							userIsSubscriber: m,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: v,
							onSubscriptionsRequested: C,
							..._
						} = this.props, I = Object(b.a)({
							type: s.type,
							key: "subscribe"
						});
						return r.a.createElement(d.q, E({
							className: t,
							priority: _.shouldReverseColor ? d.b.Secondary : d.b.Primary,
							Icon: e ? e => r.a.createElement(a.a, E({
								name: "add"
							}, e)) : x,
							size: p || (l ? d.c.XS : d.c.S),
							text: !l && I,
							onClick: this.onClick
						}, _, {
							id: `subscribe-button-${o}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
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
					return t ? this.state.hasJustSubscribed || s ? r.a.createElement(c.b.Consumer, null, this.renderUnsubscribeButton) : e ? null : r.a.createElement(C, null) : r.a.createElement(c.b.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(o.a)(Object(i.c)(_))
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
				return l
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return p
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				d = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				a = s.n(d);
			const u = o.a.span("metaText", a.a),
				l = e => i.a.createElement(u, e, " · "),
				b = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: s,
					...r
				}) => {
					const o = Object(c.b)(t),
						d = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", o)], {
							hk: "2L3T21"
						}),
						a = e ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? d : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", o)], {
							hk: "gf67v"
						});
					return i.a.createElement(u, r, a)
				},
				p = e => i.a.createElement(u, null, n.fbt._({
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
				return d
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/helpers/parseUrl.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, s) => ({
					gallery: i.gallery(e, t, s),
					post: i.post(e, t),
					...i.defaults(e)
				}),
				c = (e, t) => s => ({
					...o(s, e, t),
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.media(s, e)
				}),
				d = (e, t, s) => c => {
					const d = Object(r.a)(t);
					return {
						...o(c, e, s),
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.media(c, e),
							outboundUrl: t,
							outboundDomain: d ? d.hostname : void 0
						}
					}
				},
				a = (e, t) => l(e, !0, t),
				u = (e, t) => l(e, !1, t),
				l = (e, t, s) => r => ({
					...o(r, e, s),
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "e", (function() {
				return y
			}));
			var n, r, i = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/helpers/isComment.ts"),
				d = s("./src/reddit/helpers/isPost.ts"),
				a = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				l = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const p = e => ({
					...l.defaults(e),
					source: r.LINK,
					action: i.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				m = e => ({
					...l.defaults(e),
					source: r,
					screen: l.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: a.f.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				h = (e, {
					renderingObjectInfo: t,
					pageLayer: s
				}) => {
					if (t && (Object(c.b)(t) || Object(d.b)(t))) return Object(c.b)(t) ? b.SourceElement.Comment : Object(o.w)(s) ? b.SourceElement.PostDetail : Object(o.E)(s) ? b.SourceElement.ListingPostDetail : void 0
				},
				E = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(d.b)(s) && !Object(c.b)(s)) return {
						outbound: void 0
					};
					const r = Object(d.b)(s) ? "postId" : "commentId",
						i = {
							url: `/r/${n}/`,
							sourceElement: h(0, t),
							subredditName: n,
							[r]: s.id
						},
						o = Object(u.A)(e, {
							subredditName: n
						});
					return o ? {
						outbound: {
							...i,
							url: o.url,
							subredditId: o.id
						}
					} : {
						outbound: {
							...i
						}
					}
				},
				v = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(d.b)(s) && !Object(c.b)(s)) return {};
					const n = Object(d.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: l.post(e, s.id),
						subreddit: l.subredditById(e, n),
						...E(e, t)
					}
				},
				x = e => t => ({
					...p(t),
					...v(t, e)
				}),
				C = e => t => ({
					...m(t),
					source: "global",
					action: i.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: l.subredditByName(t, e),
					screen: l.screen(t)
				}),
				_ = (e, t) => s => ({
					...m(s),
					source: r.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: n.ITEM_POST,
					post: l.post(s, t),
					subreddit: l.subredditByName(s, e),
					screen: l.screen(s)
				}),
				I = (e, t) => s => ({
					...m(s),
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.ITEM_POST,
					post: l.post(s, t),
					subreddit: l.subredditByName(s, e),
					screen: l.screen(s)
				}),
				S = e => t => ({
					...m(t),
					subreddit: l.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				O = e => t => ({
					...m(t),
					subreddit: l.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				y = e => t => ({
					...m(t),
					subreddit: l.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = s.n(d);
			t.a = e => {
				const t = Object(o.a)();
				return r.a.createElement("i", {
					className: Object(i.a)(Object(c.b)(t ? "scheduled" : "calendar", e.isFilled), a.a.calendarIcon, e.className)
				})
			}
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(c);
			t.a = e => r.a.createElement("i", {
				className: Object(i.a)(Object(o.b)("live", e.isFilled), d.a.liveIcon, e.className)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.71c2b084c126ed69643b.js.map