// https://www.redditstatic.com/desktop2x/reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.bcf83227f78733b32d40.js
// Retrieved at 10/5/2021, 1:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
			const d = (e, t, s) => (n = (() => {})) => i => {
				const r = b(i.target, i.currentTarget),
					c = p(i.target, i.currentTarget);
				r && s && t && (u(i.target, i.currentTarget, l.anchors) ? s(t(e, r, c)) : s(s => {
					const n = t(e, r, c)(s);
					let i;
					if (n && n.actionInfo) {
						const {
							pageType: e,
							...t
						} = n.actionInfo;
						i = t
					}
					return {
						...n,
						actionInfo: Object(o.previousPageActionInfo)(s, i)
					}
				})), u(i.target, i.currentTarget, l.anchorsAndButtons) && n(i)
			};

			function a(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: r,
						clickTrackingId: o,
						...a
					} = t, l = Object(n.useCallback)(d(o, r, s), [o, r, s]);
					return i.a.createElement(e, c({}, a, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(r.c)(t)
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
				i = s.n(n),
				r = s("./src/lib/prettyPrintNumber/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/helpers/postEvent.ts"),
				a = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less"),
				l = s.n(a);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = o.a.wrapped(e => i.a.createElement("span", {
				className: e.className
			}, e.children), "Metadata", l.a), p = ({
				post: e
			}) => Object(d.a)(e) ? i.a.createElement(c.a, {
				className: l.a.postEventMeta,
				post: e
			}) : i.a.createElement(i.a.Fragment, null, !e.isScoreHidden && i.a.createElement(i.a.Fragment, null, i.a.createElement(b, {
				"data-click-id": "score"
			}, u._({
				"*": "{Post score} points",
				_1: "1 point"
			}, [u._plural(e.score, "Post score", Object(r.b)(e.score))], {
				hk: "1gwCFh"
			})), i.a.createElement(b, null, "·")), i.a.createElement(b, {
				"data-click-id": "comments"
			}, u._({
				"*": "{number} comments",
				_1: "1 comment"
			}, [u._plural(e.numComments, "number", Object(r.b)(e.numComments))], {
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
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/focusedVerticals/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				p = s("./src/reddit/icons/svgs/Close/index.tsx"),
				m = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				E = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/Wrapper/index.m.less"),
				h = s.n(E);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = Object(o.c)({
				didUserDisable: m.a,
				prefixedSubredditName: (e, {
					numInstance: t
				}) => Object(m.i)(e, t),
				interactedSubredditId: (e, {
					numInstance: t
				}) => Object(m.h)(e, t),
				cityLocation: m.c
			});
			class x extends i.a.Component {
				constructor(e) {
					super(e), this.hasFiredViewEvent = !1, this.getLocalStorageDisabled = () => !0, this.setLocalStorageDisabled = () => void 0, this.trackViewEvent = () => {
						this.hasFiredViewEvent || (this.props.sendEvent(Object(b.n)(this.props.listingKey, this.props.interactedSubredditId, this.props.listingPosition)), this.hasFiredViewEvent = !0)
					}, this.onHideComponent = () => {
						const {
							hideComponent: e,
							interactedSubredditId: t,
							listingKey: s,
							listingPosition: n
						} = this.props;
						this.setLocalStorageDisabled(), e(), this.props.sendEvent(Object(b.j)(s, t, n))
					}, this.onSubredditClick = () => {
						const {
							interactedSubredditId: e,
							listingKey: t,
							listingPosition: s
						} = this.props;
						this.props.sendEvent(Object(b.e)(t, e, s))
					}, this.getLocalStorageDisabled = Object(u.R)(), this.setLocalStorageDisabled = Object(u.sb)()
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
						shouldHideBottomPadding: r,
						cityLocation: o
					} = this.props;
					return s ? null : i.a.createElement("div", {
						className: Object(c.a)(h.a.container, t)
					}, i.a.createElement("div", {
						className: h.a.titleWrapper
					}, i.a.createElement("div", {
						className: h.a.titleTextWrapper
					}, i.a.createElement("div", {
						className: h.a.titleText
					}, v._("Discover communities", null, {
						hk: "2OpaUL"
					})), n && i.a.createElement("div", {
						className: h.a.subTitleWrapper
					}, v._("Because you're in {place}", [v._param("place", o)], {
						hk: "3qt67F"
					}))), i.a.createElement("div", {
						className: h.a.closeWrapper,
						onClick: this.onHideComponent
					}, i.a.createElement(p.a, {
						className: h.a.close
					}))), i.a.createElement("div", {
						className: Object(c.a)(h.a.contentWrapper, {
							[h.a.noBottomPadding]: r
						})
					}, e))
				}
			}
			var _ = Object(r.b)(C, e => ({
					hideComponent: () => e(Object(d.c)()),
					showComponent: () => e(Object(d.d)())
				}))(Object(l.c)(x)),
				O = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				g = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				I = s("./src/reddit/components/PostContainer/index.tsx"),
				f = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				j = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				k = s("./src/reddit/constants/posts.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/PostItem/index.m.less"),
				D = s.n(P);
			const T = e => `${e}--FocusedVerticalRecommendationItem`,
				N = Object(o.c)({
					post: S.H,
					subreddit: S.U
				});
			class U extends i.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						this.props.post && !this.hasFiredViewEvent && (this.props.sendEvent(Object(b.h)(this.props.listingKey, this.props.postId, this.props.position)), this.hasFiredViewEvent = !0)
					}, this.onPostClick = () => {
						const {
							listingKey: e,
							onPostClick: t,
							post: s,
							postId: n,
							sendEvent: i,
							position: r
						} = this.props;
						t(s), i(Object(b.f)(e, n, r))
					}, this.onSubredditNameClick = () => {
						const {
							listingKey: e,
							postId: t,
							sendEvent: s,
							subreddit: n,
							position: i
						} = this.props;
						n && s(Object(b.g)(e, t, n.id, i))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							subreddit: s,
							postId: n,
							position: i
						} = this.props;
						return e ? Object(b.l)(t, s && s.id || "", i, n) : Object(b.k)(t, s && s.id || "", i, n)
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
						subreddit: r
					} = this.props;
					return e ? i.a.createElement(I.a, {
						className: Object(c.a)(D.a.postContainer, {
							[D.a.hideBottomBorder]: t
						}),
						makePostContainerId: T,
						post: e,
						onClick: this.onPostClick
					}, i.a.createElement("div", {
						className: D.a.postContent
					}, i.a.createElement(y.a, {
						classNameInnerThumbnail: D.a.thumbnailOverride,
						post: e
					}), i.a.createElement("div", {
						className: D.a.postBodyWrapper
					}, !s && r && i.a.createElement("div", {
						className: Object(c.a)(D.a.subredditContainer)
					}, i.a.createElement(f.a, {
						className: D.a.subredditLink,
						to: r.url,
						onClick: this.onSubredditNameClick
					}, r.displayText), n ? i.a.createElement("div", {
						className: D.a.subredditSubscribeLargeButton
					}, i.a.createElement(j.a, {
						identifier: {
							name: r.name,
							type: k.a.SUBREDDIT
						},
						postId: e.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					})) : i.a.createElement(j.a, {
						className: D.a.subredditSubscribeButton,
						getEventFactory: this.getSubscribeEventFactory,
						doNotHideOtherSubscribeButtons: !0,
						identifier: {
							name: r.name,
							type: k.a.SUBREDDIT
						},
						postId: e.id,
						small: !0
					})), i.a.createElement("div", {
						className: Object(c.a)(D.a.postBody, {
							[D.a.isFirst]: s || !r
						}),
						"data-click-id": "body"
					}, i.a.createElement("div", {
						className: D.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, e.title)), i.a.createElement("div", {
						className: D.a.bottomline
					}, i.a.createElement(g.b, {
						post: e
					}))))) : null
				}
			}
			var B = Object(r.b)(N, e => ({
					onPostClick: t => {
						e(Object(d.a)({
							lastLoadedEnv: "server"
						})), e(Object(O.K)({
							postOrComment: t
						}))
					}
				}))(Object(l.c)(U)),
				L = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx"),
				F = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.m.less"),
				w = s.n(F);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = Object(o.c)({
				isFeatureFlag: m.d,
				isPending: m.e,
				subredditData: (e, {
					numInstance: t
				}) => Object(m.j)(e, t),
				topPostIds: (e, {
					numInstance: t
				}) => Object(m.k)(e, t)
			}), A = Object(r.b)(R);
			class H extends i.a.PureComponent {
				render() {
					const {
						className: e,
						isFeatureFlag: t,
						isPending: s,
						listingKey: n,
						listingPosition: r,
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
					return i.a.createElement(_, {
						className: e,
						shouldHideBottomPadding: !0,
						listingKey: n,
						listingPosition: r,
						numInstance: o,
						pubsub: c
					}, i.a.createElement(L.a, {
						subredditId: l,
						subredditName: u,
						shouldHideBottomBorder: !0,
						listingKey: n,
						position: r,
						pubsub: c
					}), i.a.createElement("div", {
						className: w.a.topPostsTitle
					}, V._("Top post", null, {
						hk: "3BdOuj"
					})), a.slice(0, 1).map(e => i.a.createElement(B, {
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
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/MetaData/index.tsx"),
				v = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				C = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				O = s.n(_);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = Object(c.c)({
				subreddit: x.Q,
				subredditAboutInfo: x.t
			}), I = Object(r.b)(g);
			class f extends i.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						const {
							subreddit: e,
							subredditAboutInfo: t,
							listingKey: s,
							subredditId: n,
							position: i,
							sendEvent: r
						} = this.props;
						e && t && !this.hasFiredViewEvent && (r(Object(v.m)(s, n, i)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: n,
							position: i
						} = this.props;
						s(t ? Object(C.c)(n) : Object(v.i)(e, n, i))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: i
						} = this.props;
						return e ? s ? Object(C.e)(n) : Object(v.l)(t, n, i) : s ? Object(C.d)(n) : Object(v.k)(t, n, i)
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
						m = Object(a.b)(l),
						v = Object(a.b)(r.accountsActive);
					return i.a.createElement("div", {
						className: Object(d.a)(O.a.subredditContainer, {
							[O.a.hideBottomBorder]: e
						})
					}, i.a.createElement("div", {
						className: O.a.subredditContent
					}, i.a.createElement("div", null, i.a.createElement(o.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, i.a.createElement(u.b, {
						subredditOrProfile: n,
						className: O.a.iconContainer
					}))), i.a.createElement("div", {
						className: O.a.subredditBodyWrapper
					}, i.a.createElement("div", {
						className: O.a.subredditBody,
						"data-click-id": "body"
					}, i.a.createElement(b.a, {
						className: O.a.subredditTitle,
						to: n.url,
						onClick: this.onSubredditClick
					}, n.displayText), i.a.createElement("div", null, i.a.createElement(p.a, {
						identifier: {
							name: n.name,
							type: E.a.SUBREDDIT
						},
						postId: n.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					}))), i.a.createElement("div", {
						className: O.a.subredditMeta
					}, y._({
						"*": "{number} members",
						_1: "1 member"
					}, [y._plural(l, "number", m)], {
						hk: "4yqFU9"
					})), s && i.a.createElement("div", {
						className: O.a.subredditMeta
					}, i.a.createElement(h.c, null), y._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [y._plural(r.accountsActive, "number", v)], {
						hk: "1oCA5j"
					})), t && c && i.a.createElement(o.a, {
						className: O.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, c))))
				}
			}
			t.a = I(Object(m.c)(f))
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
				i = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				o = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(a);
			var u = e => i.a.createElement("i", {
				className: Object(c.a)(Object(d.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var b = e => i.a.createElement("i", {
					className: Object(c.a)(Object(d.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				m = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				E = s.n(m),
				h = s("./src/lib/lessComponent.tsx");
			const v = h.a.span("PostEventFutureText", E.a),
				C = h.a.span("PostEventPastText", E.a),
				x = h.a.span("PostEventNowText", E.a),
				_ = h.a.span("Container", E.a),
				O = h.a.wrapped(u, "CalendarIcon", E.a),
				y = h.a.wrapped(b, "LiveIcon", E.a),
				g = h.a.div("LoadingState", E.a);
			class I extends n.Component {
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
					} = s, a = Object(r.e)(d, n);
					let l, u;
					if (this.state.mounted || a === r.a.Live) l = i.a.createElement(p.c, {
						startTime: d,
						endTime: n,
						isLive: c
					});
					else {
						const e = Object(o.a)({
							isLoading: !0
						});
						l = i.a.createElement(g, {
							className: e
						})
					}
					if (c) u = i.a.createElement(x, null, i.a.createElement(y, null), l);
					else if (a === r.a.Future) u = i.a.createElement(v, null, i.a.createElement(O, null), l);
					else {
						if (a !== r.a.Past) return null;
						u = i.a.createElement(C, null, i.a.createElement(O, null), l)
					}
					return i.a.createElement(_, {
						className: e
					}, u)
				}
			}
			t.a = I
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
				i = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/ads/index.ts"),
				c = s("./src/reddit/components/AdViewability/index.tsx"),
				d = s("./src/reddit/helpers/trackers/gallery.ts"),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = i.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						r = Object(n.useCallback)(t => {
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
					return Object(a.a)(t, r, o), i.a.createElement("div", {
						role: "presentation"
					}, i.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/objectSelector/index.ts"),
				x = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				_ = s("./src/reddit/components/PostContainer/index.m.less"),
				O = s.n(_);
			const y = Object(p.a)(() => Object(r.c)({
				basePixelMetadata: Object(C.a)((e, {
					post: t
				}) => Object(E.b)(e, t.id)),
				clickTrackingId: (e, {
					post: t
				}) => t.id,
				imageGalleryCurrentItem: (e, {
					post: t
				}) => Object(E.i)(e, {
					postId: t.id
				}),
				pageType: e => Object(h.actionInfo)(e).pageType
			}));
			class g extends i.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: r,
						makePostContainerId: a,
						post: l,
						onClick: b,
						pageType: p,
						sendEvent: E,
						style: h,
						ref: C,
						shouldAddGalleryViewability: x = !0
					} = this.props, _ = i.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: C,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => b && b(s, l, t, r, p))(s), l.id && r) {
								const {
									source: e
								} = Object(o.t)(l, r);
								e && e.outboundUrl && E(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(v.a)(O.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: a ? a(l.id) : l.id,
						tabIndex: -1
					}, s), y = !!l.media && l.media.type === m.o.VIDEO;
					return l.isSponsored || y ? i.a.createElement(c.a, {
						post: l,
						trackDisplay: !0
					}, _) : l.media && Object(m.E)(l.media) && x ? i.a.createElement(u, {
						postId: l.id
					}, _) : _
				}
			}
			t.a = y(Object(x.a)(Object(b.c)(g)))
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
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				d = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				a = s.n(d);
			const l = o.a.span("metaText", a.a),
				u = e => r.a.createElement(l, e, " · "),
				b = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: s,
					...i
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
					return r.a.createElement(l, i, a)
				},
				p = e => r.a.createElement(l, null, n.fbt._({
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
				i = s("./src/reddit/helpers/parseUrl.ts"),
				r = s("./src/reddit/selectors/media.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, s) => ({
					gallery: o.gallery(e, t, s),
					post: o.post(e, t),
					...o.defaults(e)
				}),
				d = (e, t) => s => ({
					...c(s, e, t),
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: o.media(s, e)
				}),
				a = (e, t) => s => {
					const d = Object(i.a)(t),
						a = Object(r.b)(s, e) + 1;
					return {
						...c(s, e, a),
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...o.media(s, e),
							outboundUrl: t,
							outboundDomain: d ? d.hostname : void 0
						}
					}
				},
				l = (e, t) => b(e, !0, t),
				u = (e, t) => b(e, !1, t),
				b = (e, t, s) => i => ({
					...c(i, e, s),
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
				i = s("./src/reddit/helpers/isComment.ts"),
				r = s("./src/reddit/helpers/isPost.ts"),
				o = s("./src/telemetry/models/Outbound.ts");
			const c = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(i.b)(e) || Object(r.b)(e))) return Object(i.b)(e) ? o.SourceElement.Comment : Object(n.x)(t) ? o.SourceElement.PostDetail : Object(n.G)(t) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "e", (function() {
				return y
			}));
			var n, i, r = s("./src/reddit/constants/tracking.ts"),
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
			}(i || (i = {}));
			const b = e => ({
					...u.defaults(e),
					source: i.LINK,
					action: r.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...u.defaults(e),
					source: i,
					screen: u.screen(e),
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
					const i = Object(c.b)(s) ? "postId" : "commentId",
						r = {
							url: `/r/${n}/`,
							sourceElement: Object(d.a)(t),
							subredditName: n,
							[i]: s.id
						},
						a = Object(l.w)(e, {
							subredditName: n
						});
					return a ? {
						outbound: {
							...r,
							url: a.url,
							subredditId: a.id
						}
					} : {
						outbound: {
							...r
						}
					}
				},
				E = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(c.b)(s) && !Object(o.b)(s)) return {};
					const n = Object(c.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.post(e, s.id),
						subreddit: u.subredditById(e, n),
						...m(e, t)
					}
				},
				h = e => t => ({
					...b(t),
					...E(t, e)
				}),
				v = e => t => ({
					...p(t),
					source: "global",
					action: r.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				C = (e, t) => s => ({
					...p(s),
					source: i.DISCOVERY_UNIT,
					action: r.c.VIEW,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				x = (e, t) => s => ({
					...p(s),
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				O = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.bcf83227f78733b32d40.js.map