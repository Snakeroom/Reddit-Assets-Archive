// https://www.redditstatic.com/desktop2x/reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.7dd2b3e4f85705813511.js
// Retrieved at 10/13/2022, 9:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
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
			const d = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return r => {
					const i = b(r.target, r.currentTarget),
						c = p(r.target, r.currentTarget);
					i && s && t && (u(r.target, r.currentTarget, l.anchors) ? s(t(e, i, c)) : s(s => {
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
							actionInfo: Object(o.S)(s, r)
						}
					})), u(r.target, r.currentTarget, l.anchorsAndButtons) && n(r)
				}
			});

			function a(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: i,
						clickTrackingId: o,
						...a
					} = t, l = Object(n.useCallback)(d(o, i, s), [o, i, s]);
					return r.a.createElement(e, c({}, a, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(i.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, s)),
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
				l = s.n(a);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = o.a.wrapped(e => r.a.createElement("span", {
				className: e.className
			}, e.children), "Metadata", l.a), p = e => {
				let {
					post: t
				} = e;
				return Object(d.a)(t) ? r.a.createElement(c.a, {
					className: l.a.postEventMeta,
					post: t
				}) : r.a.createElement(r.a.Fragment, null, !t.isScoreHidden && r.a.createElement(r.a.Fragment, null, r.a.createElement(b, {
					"data-click-id": "score"
				}, u._({
					"*": "{Post score} points",
					_1: "1 point"
				}, [u._plural(t.score, "Post score", Object(i.b)(t.score))], {
					hk: "1gwCFh"
				})), r.a.createElement(b, null, "·")), r.a.createElement(b, {
					"data-click-id": "comments"
				}, u._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [u._plural(t.numComments, "number", Object(i.b)(t.numComments))], {
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
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/focusedVerticals/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				p = s("./src/reddit/icons/svgs/Close/index.tsx"),
				m = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				h = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/Wrapper/index.m.less"),
				E = s.n(h);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = Object(o.c)({
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
			class C extends r.a.Component {
				constructor(e) {
					super(e), this.hasFiredViewEvent = !1, this.getLocalStorageDisabled = () => !0, this.setLocalStorageDisabled = () => void 0, this.trackViewEvent = () => {
						this.hasFiredViewEvent || (this.props.sendEvent(Object(b.m)(this.props.listingKey, this.props.interactedSubredditId, this.props.listingPosition)), this.hasFiredViewEvent = !0)
					}, this.onHideComponent = () => {
						const {
							hideComponent: e,
							interactedSubredditId: t,
							listingKey: s,
							listingPosition: n
						} = this.props;
						this.setLocalStorageDisabled(), e(), this.props.sendEvent(Object(b.i)(s, t, n))
					}, this.onSubredditClick = () => {
						const {
							interactedSubredditId: e,
							listingKey: t,
							listingPosition: s
						} = this.props;
						this.props.sendEvent(Object(b.d)(t, e, s))
					}, this.getLocalStorageDisabled = Object(u.T)(), this.setLocalStorageDisabled = Object(u.tb)()
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
				}))(Object(l.c)(C)),
				O = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				y = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				f = s("./src/reddit/components/PostContainer/index.tsx"),
				I = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				k = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				j = s("./src/reddit/constants/posts.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/PostItem/index.m.less"),
				D = s.n(P);
			const T = e => `${e}--FocusedVerticalRecommendationItem`,
				N = Object(o.c)({
					post: S.G,
					subreddit: S.V
				});
			class U extends r.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						this.props.post && !this.hasFiredViewEvent && (this.props.sendEvent(Object(b.g)(this.props.listingKey, this.props.postId, this.props.position)), this.hasFiredViewEvent = !0)
					}, this.onPostClick = () => {
						const {
							listingKey: e,
							onPostClick: t,
							post: s,
							postId: n,
							sendEvent: r,
							position: i
						} = this.props;
						t(s), r(Object(b.e)(e, n, i))
					}, this.onSubredditNameClick = () => {
						const {
							listingKey: e,
							postId: t,
							sendEvent: s,
							subreddit: n,
							position: r
						} = this.props;
						n && s(Object(b.f)(e, t, n.id, r))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							subreddit: s,
							postId: n,
							position: r
						} = this.props;
						return e ? Object(b.k)(t, s && s.id || "", r, n) : Object(b.j)(t, s && s.id || "", r, n)
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
					return e ? r.a.createElement(f.b, {
						className: Object(c.a)(D.a.postContainer, {
							[D.a.hideBottomBorder]: t
						}),
						makePostContainerId: T,
						post: e,
						onClick: this.onPostClick
					}, r.a.createElement("div", {
						className: D.a.postContent
					}, r.a.createElement(g.a, {
						classNameInnerThumbnail: D.a.thumbnailOverride,
						post: e
					}), r.a.createElement("div", {
						className: D.a.postBodyWrapper
					}, !s && i && r.a.createElement("div", {
						className: Object(c.a)(D.a.subredditContainer)
					}, r.a.createElement(I.a, {
						className: D.a.subredditLink,
						to: i.url,
						onClick: this.onSubredditNameClick
					}, i.displayText), n ? r.a.createElement("div", {
						className: D.a.subredditSubscribeLargeButton
					}, r.a.createElement(k.a, {
						identifier: {
							name: i.name,
							type: j.a.SUBREDDIT
						},
						postId: e.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					})) : r.a.createElement(k.a, {
						className: D.a.subredditSubscribeButton,
						getEventFactory: this.getSubscribeEventFactory,
						doNotHideOtherSubscribeButtons: !0,
						identifier: {
							name: i.name,
							type: j.a.SUBREDDIT
						},
						postId: e.id,
						small: !0
					})), r.a.createElement("div", {
						className: Object(c.a)(D.a.postBody, {
							[D.a.isFirst]: s || !i
						}),
						"data-click-id": "body"
					}, r.a.createElement("div", {
						className: D.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, e.title)), r.a.createElement("div", {
						className: D.a.bottomline
					}, r.a.createElement(y.b, {
						post: e
					}))))) : null
				}
			}
			var L = Object(i.b)(N, e => ({
					onPostClick: t => {
						e(Object(d.a)({
							lastLoadedEnv: "server"
						})), e(Object(O.L)({
							postOrComment: t
						}))
					}
				}))(Object(l.c)(U)),
				B = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx"),
				w = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.m.less"),
				F = s.n(w);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), A = Object(o.c)({
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
			}), R = Object(i.b)(A);
			class H extends r.a.PureComponent {
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
						id: l,
						name: u
					} = d;
					return r.a.createElement(_, {
						className: e,
						shouldHideBottomPadding: !0,
						listingKey: n,
						listingPosition: i,
						numInstance: o,
						pubsub: c
					}, r.a.createElement(B.a, {
						subredditId: l,
						subredditName: u,
						shouldHideBottomBorder: !0,
						listingKey: n,
						position: i,
						pubsub: c
					}), r.a.createElement("div", {
						className: F.a.topPostsTitle
					}, V._("Top post", null, {
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
			t.default = R(H)
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
				l = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				E = s("./src/reddit/controls/MetaData/index.tsx"),
				v = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				x = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				O = s.n(_);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = Object(c.c)({
				subreddit: C.X,
				subredditAboutInfo: C.y
			}), f = Object(i.b)(y);
			class I extends r.a.Component {
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
						e && t && !this.hasFiredViewEvent && (i(Object(v.l)(s, n, r)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: n,
							position: r
						} = this.props;
						s(t ? Object(x.c)(n) : Object(v.h)(e, n, r))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: r
						} = this.props;
						return e ? s ? Object(x.e)(n) : Object(v.k)(t, n, r) : s ? Object(x.d)(n) : Object(v.j)(t, n, r)
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
						subredditAboutInfo: i
					} = this.props;
					if (!n || !i) return null;
					const c = i.publicDescription || "",
						l = n.subscribers,
						m = Object(a.b)(l),
						v = Object(a.b)(i.accountsActive);
					return r.a.createElement("div", {
						className: Object(d.a)(O.a.subredditContainer, {
							[O.a.hideBottomBorder]: e
						})
					}, r.a.createElement("div", {
						className: O.a.subredditContent
					}, r.a.createElement("div", null, r.a.createElement(o.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, r.a.createElement(u.b, {
						subredditOrProfile: n,
						className: O.a.iconContainer
					}))), r.a.createElement("div", {
						className: O.a.subredditBodyWrapper
					}, r.a.createElement("div", {
						className: O.a.subredditBody,
						"data-click-id": "body"
					}, r.a.createElement(b.a, {
						className: O.a.subredditTitle,
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
						className: O.a.subredditMeta
					}, g._({
						"*": "{number} members",
						_1: "1 member"
					}, [g._plural(l, "number", m)], {
						hk: "4yqFU9"
					})), s && r.a.createElement("div", {
						className: O.a.subredditMeta
					}, r.a.createElement(E.c, null), g._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [g._plural(i.accountsActive, "number", v)], {
						hk: "1oCA5j"
					})), t && c && r.a.createElement(o.a, {
						className: O.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, c))))
				}
			}
			t.a = f(Object(m.c)(I))
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
				o = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				d = s("./src/reddit/icons/fonts/Live/index.tsx"),
				a = s("./src/reddit/components/HumanDate/index.tsx"),
				l = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(l),
				b = s("./src/lib/lessComponent.tsx");
			const p = b.a.span("PostEventFutureText", u.a),
				m = b.a.span("PostEventPastText", u.a),
				h = b.a.span("PostEventNowText", u.a),
				E = b.a.span("Container", u.a),
				v = b.a.wrapped(c.a, "CalendarIcon", u.a),
				x = b.a.wrapped(d.a, "LiveIcon", u.a),
				C = b.a.div("LoadingState", u.a);
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
						eventIsLive: c,
						eventStart: d
					} = s, l = Object(i.e)(d, n);
					let u, b;
					if (this.state.mounted || l === i.a.Live) u = r.a.createElement(a.c, {
						startTime: d,
						endTime: n,
						isLive: c
					});
					else {
						const e = Object(o.a)({
							isLoading: !0
						});
						u = r.a.createElement(C, {
							className: e
						})
					}
					if (c) b = r.a.createElement(h, null, r.a.createElement(x, null), u);
					else if (l === i.a.Future) b = r.a.createElement(p, null, r.a.createElement(v, null), u);
					else {
						if (l !== i.a.Past) return null;
						b = r.a.createElement(m, null, r.a.createElement(v, null), u)
					}
					return r.a.createElement(E, {
						className: e
					}, b)
				}
			}
			t.a = _
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/ads/index.ts"),
				c = s("./src/reddit/components/AdViewability/index.tsx"),
				d = s("./src/reddit/helpers/trackers/gallery.ts"),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
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
				h = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/objectSelector/index.ts"),
				C = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				_ = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				O = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = s("./src/reddit/components/PostContainer/index.m.less"),
				y = s.n(g);
			const f = Object(p.a)(() => Object(i.c)({
					basePixelMetadata: Object(x.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(h.b)(e, s.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(E.d)(e).pageType
				})),
				I = "post-container";
			class k extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: i,
						makePostContainerId: a,
						post: l,
						onClick: b,
						pageType: p,
						sendEvent: h,
						style: E,
						ref: x,
						shouldAddGalleryViewability: C = !0
					} = this.props, _ = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: E,
						ref: x,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => b && b(s, l, t, i, p))(s), l.id && i) {
								const {
									source: e
								} = Object(o.t)(l, i);
								e && e.outboundUrl && h(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(v.a)(y.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": I,
						id: a ? a(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": O.a.BACKGROUND
					}, s), g = !!l.media && l.media.type === m.o.VIDEO;
					return (e => l.media && Object(m.E)(l.media) && C ? r.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || g ? r.a.createElement(c.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(_))
				}
			}
			t.b = f(Object(_.a)(Object(C.a)(Object(b.c)(k))))
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				d = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				a = s.n(d);
			const l = o.a.span("metaText", a.a),
				u = e => i.a.createElement(l, e, " · "),
				b = e => {
					let {
						isScoreHidden: t,
						score: s,
						useUpvotes: r,
						...o
					} = e;
					const d = Object(c.b)(s),
						a = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(s, "number", d)], {
							hk: "2L3T21"
						}),
						u = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : r ? a : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(s, "number", d)], {
							hk: "gf67v"
						});
					return i.a.createElement(l, o, u)
				},
				p = e => i.a.createElement(l, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(c.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/helpers/parseUrl.ts"),
				i = s("./src/reddit/selectors/media.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, s) => ({
					gallery: o.s(e, t, s),
					post: o.K(e, t),
					...o.o(e)
				}),
				d = (e, t) => s => ({
					...c(s, e, t),
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: o.C(s, e)
				}),
				a = (e, t) => s => {
					const d = Object(r.a)(t),
						a = Object(i.d)(s, e) + 1;
					return {
						...c(s, e, a),
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...o.C(s, e),
							outboundUrl: t,
							outboundDomain: d ? d.hostname : void 0
						}
					}
				},
				l = (e, t) => b(e, !0, t),
				u = (e, t) => b(e, !1, t),
				b = (e, t, s) => r => ({
					...c(r, e, s),
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				r = s("./src/reddit/helpers/isComment.ts"),
				i = s("./src/reddit/helpers/isPost.ts"),
				o = s("./src/telemetry/models/Outbound.ts");
			const c = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: s
				} = e;
				if (t && (Object(r.b)(t) || Object(i.b)(t))) return Object(r.b)(t) ? o.SourceElement.Comment : Object(n.x)(s) ? o.SourceElement.PostDetail : Object(n.H)(s) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "e", (function() {
				return g
			}));
			var n, r, i = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/isComment.ts"),
				c = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				a = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const b = e => ({
					...u.o(e),
					source: r.LINK,
					action: i.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...u.o(e),
					source: r,
					screen: u.bb(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: a.e.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				m = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(c.b)(s) && !Object(o.b)(s)) return {
						outbound: void 0
					};
					const r = Object(c.b)(s) ? "postId" : "commentId",
						i = {
							url: `/r/${n}/`,
							sourceElement: Object(d.a)(t),
							subredditName: n,
							[r]: s.id
						},
						a = Object(l.B)(e, {
							subredditName: n
						});
					return a ? {
						outbound: {
							...i,
							url: a.url,
							subredditId: a.id
						}
					} : {
						outbound: {
							...i
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(c.b)(s) && !Object(o.b)(s)) return {};
					const n = Object(c.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.K(e, s.id),
						subreddit: u.kb(e, n),
						...m(e, t)
					}
				},
				E = e => t => ({
					...b(t),
					...h(t, e)
				}),
				v = e => t => ({
					...p(t),
					source: "global",
					action: i.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.lb(t, e),
					screen: u.bb(t)
				}),
				x = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: n.ITEM_POST,
					post: u.K(s, t),
					subreddit: u.lb(s, e),
					screen: u.bb(s)
				}),
				C = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.ITEM_POST,
					post: u.K(s, t),
					subreddit: u.lb(s, e),
					screen: u.bb(s)
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				O = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				g = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
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
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(c);
			t.a = e => r.a.createElement("i", {
				className: Object(i.a)(Object(o.b)("scheduled", e.isFilled), d.a.calendarIcon, e.className)
			})
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
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.7dd2b3e4f85705813511.js.map