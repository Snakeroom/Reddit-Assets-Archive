// https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.6f488ab2ea5800da5b3d.js
// Retrieved at 6/1/2022, 10:00:11 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["TopWeekPostsDiscoveryUnit"], {
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less": function(e, t, s) {
			e.exports = {
				body: "_1TdTKnpCL4r-8b_P6N_s2H",
				thumbnailWrapper: "_1GhzoJvAGDHDieNmaBbc1j",
				thumbnail: "_29LP0yOv3qdH7Hw0i42rY1",
				thumbnailContainer: "_3D4UF6ZAO5wiwsAaqGPFD_",
				thumbnailLinkIcon: "_3nmCxKiXx-UyUgMfxQMQYO",
				bodyWrapper: "_2DMHAzKjqjnl-PBICpGvvP",
				mediaWrapper: "_2nVhK4TJW8rFpCW0J71MeZ",
				textWrapper: "_3HyzG7Bun5vaTrdBWvTTmT",
				postTitle: "_1ft5B5IP2RM9FAOkd6O_30",
				postTitleCompact: "_2y0S2HAq5enRe-8puwGqvp",
				flexSpacer: "_2pXLfUYWqtorJfsnyUPLpy"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				footer: "_16DxRuw4PntaiR7Mb8IpKz",
				metaText: "_2OKlRpghzNcnid45bc1QFg"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_1eoxIROAsv7YNisHStsspM",
				icon: "_1r7shGI3FRi8x8jB0wJFIw",
				iconLink: "_2aYABiczSUxClJTIX1tUoW",
				name: "_3n6BCmTgHdb1J5H2L_XX4A",
				link: "_3ZwhnERcT6sV1cfCBsQmAP"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2-uI1CWUC-WOhm-MolZUT8",
				background: "_2KsrA9nTjIN0VD69GqImgf"
			}
		},
		"./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3CNr3KWyHutDn4avrLhQm4",
				carousel: "_1YUX10qTanZHdNGMK7Qxxw",
				header: "_14PIPff0hFgFWRHElDmceB",
				title: "_2sxfe3nF2A96A4ZWU5rEvn",
				body: "_2B1hYKEvll_ipGyHRuObmJ",
				arrow: "_1HYBn36eKjeT9y8jRpW2sq",
				CloseButton: "_30UnonAzQEzi-R8bJ3wFKT",
				closeButton: "_30UnonAzQEzi-R8bJ3wFKT",
				closeIcon: "_1KLdpw5i0UeptlH_oJyGEv"
			}
		},
		"./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				l = s("./src/reddit/icons/svgs/Close/index.tsx"),
				m = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = s("./src/reddit/selectors/discoveryUnit.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				h = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				x = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.tsx"),
				y = s("./src/reddit/connectors/miniCardPost.ts"),
				S = s("./src/reddit/contexts/Post/index.tsx"),
				C = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				P = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/config.ts"),
				E = s("./src/lib/isUrl/index.ts"),
				O = s("./src/reddit/components/Media/index.tsx"),
				_ = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				N = s("./src/reddit/components/PostTitle/index.tsx"),
				g = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				I = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				T = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				j = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/components/MiniCardPost/index.m.less"),
				F = s.n(k),
				B = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				U = s.n(B);
			const w = `${f.a.assetPath}/img/link-placeholder.png`;
			var L = e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: r,
						crosspostRoot: i,
						flairStyleTemplate: o,
						forceLoadMedia: c,
						post: d,
						shouldPause: l,
						scrollerItemRef: m
					} = e, {
						media: u
					} = i || d, b = u && n.a.createElement(O.a, {
						autoplayPref: t,
						availableWidth: s,
						className: F.a.media,
						"data-redditstyle": !0,
						forceAspectRatio: j.c,
						imageBoxClassName: F.a.mediaImageBox,
						imageBoxContentImageClassName: F.a.mediaImageBoxContentImage,
						isListing: !0,
						isMiniCard: !0,
						isMiniCardHQPreviews: !0,
						isNotCardView: !0,
						post: i || d,
						scrollerItemRef: m,
						shouldLoad: c,
						shouldPause: l,
						showCentered: !1,
						showFull: !1
					});
					let p, h = !0;
					const x = !!d.source && Object(E.a)(d.source.url) || !!d.thumbnail && Object(E.a)(d.thumbnail.url);
					return !u && x ? (h = !1, p = n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: U.a.flexSpacer
					}), n.a.createElement("div", {
						className: U.a.mediaWrapper
					}, n.a.createElement(_.a, {
						className: U.a.thumbnailWrapper,
						thumbnailClassName: U.a.thumbnail,
						thumbnailContainerClassName: U.a.thumbnailContainer,
						thumbnailLinkIconClassName: U.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: d,
						showPlaceholderContentType: !o || !o.postPlaceholderImage,
						templatePlaceholderImage: o ? o.postPlaceholderImage : w,
						usePreview: !0
					})))) : u && b ? u.type !== j.o.RTJSON && u.type !== j.o.TEXT ? (h = !1, p = n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: U.a.flexSpacer
					}), n.a.createElement("div", {
						className: U.a.mediaWrapper
					}, b))) : p = Object(T.a)(d) || Object(I.c)(d) && Object(g.a)(d) ? n.a.createElement("div", {
						className: U.a.textWrapper
					}, b) : n.a.createElement("div", {
						className: U.a.flexSpacer
					}) : p = n.a.createElement("div", {
						className: U.a.flexSpacer
					}), n.a.createElement("div", {
						className: Object(a.a)(U.a.body, r)
					}, n.a.createElement(N.c, {
						className: h ? U.a.postTitle : U.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: d,
						size: N.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: o && o.postTitleColor
					}), p)
				},
				D = s("./node_modules/fbt/lib/FbtPublic.js"),
				H = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				M = s.n(A);
			var W = e => {
					const {
						className: t,
						post: s
					} = e;
					return n.a.createElement("div", {
						className: Object(a.a)(M.a.footer, t)
					}, n.a.createElement("span", {
						className: M.a.metaText
					}, D.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [D.fbt._plural(s.score, "number", Object(H.b)(s.score))], {
						hk: "2ncFte"
					})), n.a.createElement("span", {
						className: M.a.metaText
					}, D.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [D.fbt._plural(s.numComments, "number", Object(H.b)(s.numComments))], {
						hk: "1QQoSA"
					})))
				},
				R = s("./src/reddit/components/SubredditIcon/index.tsx"),
				z = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				K = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				J = s("./src/reddit/constants/posts.ts"),
				G = s("./src/reddit/controls/Button/index.tsx"),
				q = s("./src/reddit/controls/InternalLink/index.tsx"),
				X = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				V = s.n(X);
			var Q = e => {
					const {
						className: t,
						getSubscribeEventFactory: s,
						onSubredditOrProfileClick: r,
						shouldShowSubscribeButton: i,
						subredditOrProfile: o
					} = e, c = Object(P.i)(o) ? J.a.PROFILE : J.a.SUBREDDIT;
					return n.a.createElement("div", {
						className: Object(a.a)(V.a.header, t)
					}, n.a.createElement(q.default, {
						className: V.a.iconLink,
						"data-redditstyle": !0,
						to: o.url,
						onMouseDown: r
					}, n.a.createElement(R.b, {
						className: V.a.icon,
						subredditOrProfile: o
					})), n.a.createElement("div", {
						className: V.a.name
					}, n.a.createElement(q.default, {
						className: V.a.link,
						"data-redditstyle": !0,
						to: o.url,
						onMouseDown: r
					}, Object(K.b)(o.displayText || o.name, c))), i && n.a.createElement(z.a, {
						className: V.a.subscribe,
						"data-redditstyle": !0,
						getEventFactory: s,
						identifier: {
							name: o.name,
							type: c
						},
						size: G.d.XXS,
						small: !0
					}))
				},
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Z = s.n(Y),
				$ = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less"),
				ee = s.n($);
			const te = Object(o.a)(e => e.subredditOrProfile, e => e.subscribedProfiles, e => e.subscribedSubreddits, (e, t, s) => {
				if (!e) return !1;
				return (Object(P.i)(e) ? t : s).some(t => t.id === e.id)
			});
			class se extends n.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditOrProfileClicked = e => {
						e.stopPropagation(), this.props.onSubredditOrProfileClick(this.props.postId)
					}, this.getSubscribeEventFactory = e => {
						const t = this.props.getSubscribeEventFactory(this.props.postId);
						if (t) return t(e)
					}
				}
				render() {
					const {
						className: e,
						...t
					} = this.props, {
						eventFactory: s,
						flairStyleTemplate: r,
						onClickPost: i,
						post: o,
						subredditOrProfile: c,
						subscribedProfiles: d,
						subscribedSubreddits: l
					} = t, m = !te({
						subredditOrProfile: c,
						subscribedProfiles: d,
						subscribedSubreddits: l
					});
					return n.a.createElement(v.a, {
						className: Object(a.a)(ee.a.container, Z.a.largeAndMediumActiveStyles, Z.a.largeAndMediumPostStyles, Z.a.mUseRedditTheme, F.a.postContainer, Object(C.a)(this.props), e),
						eventFactory: s,
						onClick: i,
						post: o,
						style: {
							...Object(C.b)(this.props.flairStyleTemplate),
							...Object(C.d)(this.props)
						}
					}, n.a.createElement(x.a, {
						className: ee.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: r
					}, c && n.a.createElement(Q, {
						getSubscribeEventFactory: this.getSubscribeEventFactory,
						onSubredditOrProfileClick: this.trackSubredditOrProfileClicked,
						subredditOrProfile: c,
						shouldShowSubscribeButton: m
					}), n.a.createElement(L, t), n.a.createElement(W, {
						"data-redditstyle": !0,
						post: o
					})), n.a.createElement(h.d, null))
				}
			}
			const re = Object(S.b)(Object(y.a)(Object(p.a)(se)));
			class ne extends n.a.Component {
				render() {
					return n.a.createElement(re, this.props)
				}
			}
			const ie = 236;
			var oe = s("./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.m.less"),
				ae = s.n(oe);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: de
			} = s("./node_modules/fbt/lib/FbtPublic.js"), le = [], me = () => {}, ue = () => void 0, be = c.a.button("CloseButton", ae.a), pe = Object(o.a)(b.z, e => e.filter(e => 9 === e.length)), he = Object(o.c)({
				discoveryUnit: e => Object(u.b)(e, {
					unitName: m.j
				}),
				postIds: pe
			}), xe = Object(i.b)(he);
			class ve extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !0
					}, this.handleCloseClick = () => this.setState({
						isVisible: !1
					}), this.renderPost = e => {
						const {
							discoveryUnit: t
						} = this.props;
						return t ? n.a.createElement(ne, ce({}, e, {
							getSubscribeEventFactory: ue,
							onSubredditOrProfileClick: me,
							subscribedProfiles: le,
							subscribedSubreddits: le
						})) : null
					}
				}
				render() {
					const {
						className: e,
						discoveryUnit: t,
						postIds: s
					} = this.props;
					return this.state.isVisible && s.length ? n.a.createElement("div", {
						className: Object(a.a)(ae.a.container, e)
					}, n.a.createElement("div", {
						className: ae.a.header
					}, n.a.createElement("div", {
						className: ae.a.title
					}, de._("Top posts of the week", null, {
						hk: "1qPdO2"
					})), n.a.createElement(be, {
						onClick: this.handleCloseClick
					}, n.a.createElement(l.a, {
						className: ae.a.closeIcon
					}))), n.a.createElement("div", {
						className: ae.a.body
					}, n.a.createElement(d.a, {
						className: ae.a.carousel,
						discoveryUnit: t,
						isLoading: !1,
						items: s,
						itemWidth: ie,
						leftArrowClassName: ae.a.arrow,
						onPostView: me,
						renderPost: this.renderPost,
						rightArrowClassName: ae.a.arrow
					}))) : null
				}
			}
			t.default = xe(ve)
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = s.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class b extends n.a.Component {
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
							onUnsubscribe: r,
							postId: i,
							sendEvent: o,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: b,
							onSubscriptionsRequested: p,
							...h
						} = this.props, x = this.state.isHovered, v = Object(c.a)({
							type: t.type,
							key: x ? "unsubscribe" : "subscribed"
						});
						return n.a.createElement(a.t, m({
							className: e,
							priority: h.shouldReverseColor ? a.c.Primary : a.c.Secondary,
							text: v,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: a.d.XSP
						}, h))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: r,
							postId: i,
							sendEvent: o,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: b,
							onSubscriptionsRequested: p,
							toggleEmailVerificationTooltip: h,
							emailEnablementJoinFollowVoteVariant: x,
							...v
						} = this.props, y = Object(c.a)({
							type: t.type,
							key: "subscribe"
						});
						return n.a.createElement(a.t, m({
							className: e,
							priority: v.shouldReverseColor ? a.c.Secondary : a.c.Primary,
							size: a.d.XSP,
							text: y,
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
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : n.a.createElement(u, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(o.a)(Object(i.c)(b))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.6f488ab2ea5800da5b3d.js.map