// https://www.redditstatic.com/desktop2x/reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.a30c657b3f10e6f0f6a2.js
// Retrieved at 7/26/2021, 3:30:04 PM by Reddit Dataminer v1.0.0
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
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: i,
						clickTrackingId: o,
						...a
					} = t, u = Object(n.useCallback)(d(o, i, s), [o, i, s]);
					return r.a.createElement(e, c({}, a, {
						afterClickTracking: u
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(i.c)(t)
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
		"./src/lib/humanizeEventTime/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/eventTools/index.ts");

			function o(e, t = r.B) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function c(e, t, s, c = r.B) {
				const d = Object(i.e)(e, t),
					a = new Date(e * r.Nb);
				let u;
				if (d === i.a.Live || s) return n.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return d === i.a.Future ? u = Object(i.d)(e) ? n.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(i.b)(e) >= 5 ? o(a, c) : function(e, t = r.B) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(a, c) : d === i.a.Past && (u = Object(i.d)(e) ? n.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : o(a, c)), `${u} @ ${function(e,t=r.B){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(a,c)}`
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
					}, this.getLocalStorageDisabled = Object(l.P)(), this.setLocalStorageDisabled = Object(l.ob)()
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
				S = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				O = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				f = s("./src/reddit/components/PostContainer/index.tsx"),
				g = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				j = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				I = s("./src/reddit/constants/posts.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/PostItem/index.m.less"),
				T = s.n(P);
			const N = e => `${e}--FocusedVerticalRecommendationItem`,
				D = Object(o.c)({
					post: k.G,
					subreddit: k.S
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
					return e ? r.a.createElement(f.a, {
						className: Object(c.a)(T.a.postContainer, {
							[T.a.hideBottomBorder]: t
						}),
						makePostContainerId: N,
						post: e,
						onClick: this.onPostClick
					}, r.a.createElement("div", {
						className: T.a.postContent
					}, r.a.createElement(y.a, {
						classNameInnerThumbnail: T.a.thumbnailOverride,
						post: e
					}), r.a.createElement("div", {
						className: T.a.postBodyWrapper
					}, !s && i && r.a.createElement("div", {
						className: Object(c.a)(T.a.subredditContainer)
					}, r.a.createElement(g.a, {
						className: T.a.subredditLink,
						to: i.url,
						onClick: this.onSubredditNameClick
					}, i.displayText), n ? r.a.createElement("div", {
						className: T.a.subredditSubscribeLargeButton
					}, r.a.createElement(j.a, {
						identifier: {
							name: i.name,
							type: I.a.SUBREDDIT
						},
						postId: e.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					})) : r.a.createElement(j.a, {
						className: T.a.subredditSubscribeButton,
						getEventFactory: this.getSubscribeEventFactory,
						doNotHideOtherSubscribeButtons: !0,
						identifier: {
							name: i.name,
							type: I.a.SUBREDDIT
						},
						postId: e.id,
						small: !0
					})), r.a.createElement("div", {
						className: Object(c.a)(T.a.postBody, {
							[T.a.isFirst]: s || !i
						}),
						"data-click-id": "body"
					}, r.a.createElement("div", {
						className: T.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, e.title)), r.a.createElement("div", {
						className: T.a.bottomline
					}, r.a.createElement(O.b, {
						post: e
					}))))) : null
				}
			}
			var U = Object(i.b)(D, e => ({
					onPostClick: t => {
						e(Object(d.a)({
							lastLoadedEnv: "server"
						})), e(Object(S.I)({
							postOrComment: t
						}))
					}
				}))(Object(u.c)(B)),
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
			}), A = Object(i.b)(R);
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
					}, r.a.createElement(L.a, {
						subredditId: u,
						subredditName: l,
						shouldHideBottomBorder: !0,
						listingKey: n,
						position: i,
						pubsub: c
					}), r.a.createElement("div", {
						className: w.a.topPostsTitle
					}, V._("Top post", null, {
						hk: "3BdOuj"
					})), a.slice(0, 1).map(e => r.a.createElement(U, {
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
				S = s.n(_);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(c.c)({
				subreddit: C.S,
				subredditAboutInfo: C.v
			}), f = Object(i.b)(O);
			class g extends r.a.Component {
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
						className: Object(d.a)(S.a.subredditContainer, {
							[S.a.hideBottomBorder]: e
						})
					}, r.a.createElement("div", {
						className: S.a.subredditContent
					}, r.a.createElement("div", null, r.a.createElement(o.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, r.a.createElement(l.b, {
						subredditOrProfile: n,
						className: S.a.iconContainer
					}))), r.a.createElement("div", {
						className: S.a.subredditBodyWrapper
					}, r.a.createElement("div", {
						className: S.a.subredditBody,
						"data-click-id": "body"
					}, r.a.createElement(b.a, {
						className: S.a.subredditTitle,
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
						className: S.a.subredditMeta
					}, y._({
						"*": "{number} members",
						_1: "1 member"
					}, [y._plural(u, "number", m)], {
						hk: "4yqFU9"
					})), s && r.a.createElement("div", {
						className: S.a.subredditMeta
					}, r.a.createElement(E.c, null), y._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [y._plural(i.accountsActive, "number", v)], {
						hk: "1oCA5j"
					})), t && c && r.a.createElement(o.a, {
						className: S.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, c))))
				}
			}
			t.a = f(Object(m.c)(g))
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
				o = s("./src/lib/humanizeEventTime/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				u = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(u);
			var b = e => r.a.createElement("i", {
				className: Object(d.a)(Object(a.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var p = e => r.a.createElement("i", {
					className: Object(d.a)(Object(a.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				m = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				h = s.n(m),
				E = s("./src/lib/lessComponent.tsx");
			const v = E.a.span("PostEventFutureText", h.a),
				x = E.a.span("PostEventPastText", h.a),
				C = E.a.span("PostEventNowText", h.a),
				_ = E.a.span("Container", h.a),
				S = E.a.wrapped(b, "CalendarIcon", h.a),
				y = E.a.wrapped(p, "LiveIcon", h.a),
				O = E.a.div("LoadingState", h.a);
			class f extends n.Component {
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
						eventIsLive: d,
						eventStart: a
					} = s, u = Object(i.e)(a, n);
					let l, b;
					if (this.state.mounted || u === i.a.Live) l = Object(o.a)(a, n, d);
					else {
						const e = Object(c.a)({
							isLoading: !0
						});
						l = r.a.createElement(O, {
							className: e
						})
					}
					if (d) b = r.a.createElement(C, null, r.a.createElement(y, null), l);
					else if (u === i.a.Future) b = r.a.createElement(v, null, r.a.createElement(S, null), l);
					else {
						if (u !== i.a.Past) return null;
						b = r.a.createElement(x, null, r.a.createElement(S, null), l)
					}
					return r.a.createElement(_, {
						className: e
					}, b)
				}
			}
			t.a = f
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
				h = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/objectSelector/index.ts"),
				C = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				_ = s("./src/reddit/components/PostContainer/index.m.less"),
				S = s.n(_);
			const y = Object(p.a)(() => Object(i.c)({
					basePixelMetadata: Object(x.a)((e, {
						post: t
					}) => Object(h.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(h.j)(e, {
						postId: t.id
					}),
					pageType: e => Object(E.actionInfo)(e).pageType
				})),
				O = e => {
					const t = Object(C.d)(e.target, e.currentTarget),
						s = Object(C.b)(e.target, e.currentTarget, C.a.buttons);
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
						imageGalleryCurrentItem: i,
						makePostContainerId: a,
						post: u,
						onClick: b,
						onPostContentClick: p,
						pageType: h,
						sendEvent: E,
						style: x,
						ref: C,
						shouldAddGalleryViewability: _ = !0
					} = this.props, y = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: C,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => b && b(s, u, t, i, h))(s), p && O(s) && p(s, u)), u.id && i) {
								const {
									source: e
								} = Object(o.t)(u, i);
								e && e.outboundUrl && E(Object(d.c)(u.id, e.outboundUrl))
							}
						},
						className: Object(v.a)(S.a.WrappedPost, n, `Post ${u.id}`, {
							promotedlink: u.isSponsored
						}),
						"data-testid": "post-container",
						id: a ? a(u.id) : u.id,
						tabIndex: -1
					}, s), f = !!u.media && u.media.type === m.o.VIDEO;
					return u.isSponsored || f ? r.a.createElement(c.a, {
						post: u,
						trackDisplay: !0
					}, y) : u.media && Object(m.E)(u.media) && _ ? r.a.createElement(l, {
						postId: u.id
					}, y) : y
				}
			}
			t.a = y(Object(C.c)(Object(b.c)(f)))
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
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = s.n(u);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class m extends r.a.Component {
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
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: i,
							sendEvent: o,
							small: u = !1,
							size: l,
							userIsSubscriber: p,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: h,
							onSubscriptionsRequested: E,
							...v
						} = this.props, x = this.state.isHovered, C = Object(a.a)({
							type: t.type,
							key: x ? "unsubscribe" : "subscribed"
						});
						return r.a.createElement(c.q, b({
							className: e,
							priority: v.shouldReverseColor ? c.b.Primary : c.b.Secondary,
							Icon: u || !u && !x ? Object(d.b)("checkmark") : void 0,
							text: !u && C,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: l || (u ? c.c.XS : c.c.S)
						}, v))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: i,
							sendEvent: o,
							small: u = !1,
							size: l,
							userIsSubscriber: p,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: h,
							onSubscriptionsRequested: E,
							...v
						} = this.props, x = Object(a.a)({
							type: t.type,
							key: "subscribe"
						});
						return r.a.createElement(c.q, b({
							className: e,
							priority: v.shouldReverseColor ? c.b.Secondary : c.b.Primary,
							Icon: Object(d.b)("add"),
							size: l || (u ? c.c.XS : c.c.S),
							text: !u && x,
							onClick: this.onClick
						}, v, {
							id: `subscribe-button-${i}`,
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
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : r.a.createElement(p, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(o.a)(Object(i.c)(m))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				i = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = ({
					type: e,
					key: t
				}) => i[r({
					type: e
				})][t]()
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(r.c)({
				userIsSubscriber: o.eb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(i.d([t], !0)),
				onSubscriptionsRequested: () => e(i.e()),
				onUnsubscribe: () => e(i.d([t], !1))
			}))
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
				return d
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/helpers/parseUrl.ts"),
				i = s("./src/reddit/selectors/media.ts"),
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
					const d = Object(r.a)(t),
						a = Object(i.b)(s, e) + 1;
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
				u = (e, t) => b(e, !0, t),
				l = (e, t) => b(e, !1, t),
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
			const c = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(r.b)(e) || Object(i.b)(e))) return Object(r.b)(e) ? o.SourceElement.Comment : Object(n.w)(t) ? o.SourceElement.PostDetail : Object(n.E)(t) ? o.SourceElement.ListingPostDetail : void 0
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
				return S
			})), s.d(t, "e", (function() {
				return y
			}));
			var n, r, i = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/isComment.ts"),
				c = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				a = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				l = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const b = e => ({
					...l.defaults(e),
					source: r.LINK,
					action: i.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
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
						a = Object(u.y)(e, {
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
						post: l.post(e, s.id),
						subreddit: l.subredditById(e, n),
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
					subreddit: l.subredditByName(t, e),
					screen: l.screen(t)
				}),
				x = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: n.ITEM_POST,
					post: l.post(s, t),
					subreddit: l.subredditByName(s, e),
					screen: l.screen(s)
				}),
				C = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.ITEM_POST,
					post: l.post(s, t),
					subreddit: l.subredditByName(s, e),
					screen: l.screen(s)
				}),
				_ = e => t => ({
					...p(t),
					subreddit: l.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				S = e => t => ({
					...p(t),
					subreddit: l.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				y = e => t => ({
					...p(t),
					subreddit: l.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts.a30c657b3f10e6f0f6a2.js.map