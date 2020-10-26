// https://www.redditstatic.com/desktop2x/InFeedChaining.97618ca018e3771715c2.js
// Retrieved at 10/26/2020, 11:00:17 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InFeedChaining"], {
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
				link: "_3ZwhnERcT6sV1cfCBsQmAP",
				subscribe: "_1NVoS5Yuc3mBX9AM0jW19e"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			const i = 236
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2-uI1CWUC-WOhm-MolZUT8",
				background: "_2KsrA9nTjIN0VD69GqImgf"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Q
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				l = s("./src/reddit/components/PostContainer/index.tsx"),
				m = s("./src/reddit/connectors/miniCardPost.ts"),
				p = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/config.ts"),
				h = s("./src/lib/isUrl/index.ts"),
				v = s("./src/reddit/components/Media/index.tsx"),
				x = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				C = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				y = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				g = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				w = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/components/MiniCardPost/index.m.less"),
				P = s.n(O),
				S = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				j = s.n(S);
			const _ = "".concat(b.a.assetPath, "/img/link-placeholder.png");
			var N = e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: i,
						crosspostRoot: n,
						flairStyleTemplate: a,
						forceLoadMedia: d,
						post: c,
						scrollerItemRef: l,
						shouldPause: m
					} = e, {
						media: p
					} = n || c, u = p && r.a.createElement(v.a, {
						autoplayPref: t,
						availableWidth: s,
						className: P.a.media,
						"data-redditstyle": !0,
						forceAspectRatio: w.c,
						imageBoxClassName: P.a.mediaImageBox,
						imageBoxContentImageClassName: P.a.mediaImageBoxContentImage,
						isListing: !0,
						isMiniCard: !0,
						isMiniCardHQPreviews: !0,
						isNotCardView: !0,
						post: n || c,
						scrollerItemRef: l,
						shouldLoad: d,
						shouldPause: m,
						showCentered: !1,
						showFull: !1
					});
					let b, O = !0;
					const S = !!c.source && Object(h.a)(c.source.url) || !!c.thumbnail && Object(h.a)(c.thumbnail.url);
					return !p && S ? (O = !1, b = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: j.a.flexSpacer
					}), r.a.createElement("div", {
						className: j.a.mediaWrapper
					}, r.a.createElement(x.a, {
						className: j.a.thumbnailWrapper,
						thumbnailClassName: j.a.thumbnail,
						thumbnailContainerClassName: j.a.thumbnailContainer,
						thumbnailLinkIconClassName: j.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: c,
						showPlaceholderContentType: !a || !a.postPlaceholderImage,
						templatePlaceholderImage: a ? a.postPlaceholderImage : _,
						usePreview: !0
					})))) : p && u ? p.type !== w.o.RTJSON && p.type !== w.o.TEXT ? (O = !1, b = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: j.a.flexSpacer
					}), r.a.createElement("div", {
						className: j.a.mediaWrapper
					}, u))) : b = Object(g.a)(c) || Object(y.d)(c) && Object(f.a)(c) ? r.a.createElement("div", {
						className: j.a.textWrapper
					}, u) : r.a.createElement("div", {
						className: j.a.flexSpacer
					}) : b = r.a.createElement("div", {
						className: j.a.flexSpacer
					}), r.a.createElement("div", {
						className: Object(o.a)(j.a.body, i)
					}, r.a.createElement(C.c, {
						className: O ? j.a.postTitle : j.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: c,
						size: C.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: a && a.postTitleColor
					}), b)
				},
				E = s("./node_modules/fbt/lib/FbtPublic.js"),
				T = s("./src/lib/prettyPrintNumber/index.ts"),
				I = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				k = s.n(I);
			var D = e => {
					const {
						className: t,
						post: s
					} = e;
					return r.a.createElement("div", {
						className: Object(o.a)(k.a.footer, t)
					}, r.a.createElement("span", {
						className: k.a.metaText
					}, E.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [E.fbt._plural(s.score, "number", Object(T.b)(s.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: k.a.metaText
					}, E.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [E.fbt._plural(s.numComments, "number", Object(T.b)(s.numComments))], {
						hk: "1QQoSA"
					})))
				},
				U = s("./src/reddit/components/SubredditIcon/index.tsx"),
				F = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				L = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				M = s("./src/reddit/constants/posts.ts"),
				R = s("./src/reddit/controls/Button/index.tsx"),
				A = s("./src/reddit/controls/InternalLink/index.tsx"),
				B = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				W = s.n(B);
			var V = e => {
					const {
						className: t,
						getSubscribeEventFactory: s,
						onSubredditOrProfileClick: i,
						shouldShowSubscribeButton: n,
						subredditOrProfile: a
					} = e, d = Object(u.g)(a) ? M.a.PROFILE : M.a.SUBREDDIT;
					return r.a.createElement("div", {
						className: Object(o.a)(W.a.header, t)
					}, r.a.createElement(A.a, {
						className: W.a.iconLink,
						"data-redditstyle": !0,
						to: a.url,
						onMouseDown: i
					}, r.a.createElement(U.b, {
						className: W.a.icon,
						subredditOrProfile: a
					})), r.a.createElement("div", {
						className: W.a.name
					}, r.a.createElement(A.a, {
						className: W.a.link,
						"data-redditstyle": !0,
						to: a.url,
						onMouseDown: i
					}, Object(L.b)(a.displayText || a.name, d))), n && r.a.createElement(F.a, {
						className: W.a.subscribe,
						"data-redditstyle": !0,
						getEventFactory: s,
						identifier: {
							name: a.name,
							type: d
						},
						size: R.c.XXS,
						small: !0
					}))
				},
				H = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				K = s.n(H),
				z = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less"),
				X = s.n(z),
				q = function(e, t) {
					var s = {};
					for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (s[i[r]] = e[i[r]])
					}
					return s
				};
			const G = Object(n.a)(e => e.subredditOrProfile, e => e.subscribedProfiles, e => e.subscribedSubreddits, (e, t, s) => {
				if (!e) return !1;
				return (Object(u.g)(e) ? t : s).some(t => t.id === e.id)
			});
			class Z extends r.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditOrProfileClicked = e => {
						e.stopPropagation(), this.props.onSubredditOrProfileClick(this.props.postId)
					}, this.getSubscribeEventFactory = e => {
						const t = this.props.getSubscribeEventFactory(this.props.postId);
						if (t) return t(e)
					}
				}
				render() {
					const e = this.props,
						{
							className: t
						} = e,
						s = q(e, ["className"]),
						{
							eventFactory: i,
							flairStyleTemplate: n,
							onClickPost: a,
							post: m,
							subredditOrProfile: u,
							subscribedProfiles: b,
							subscribedSubreddits: h
						} = s,
						v = !G({
							subredditOrProfile: u,
							subscribedProfiles: b,
							subscribedSubreddits: h
						});
					return r.a.createElement(l.a, {
						className: Object(o.a)(X.a.container, K.a.largeAndMediumActiveStyles, K.a.largeAndMediumPostStyles, K.a.mUseRedditTheme, P.a.postContainer, Object(p.a)(this.props), t),
						eventFactory: i,
						onClick: a,
						post: m,
						style: Object.assign(Object.assign({}, Object(p.b)(this.props.flairStyleTemplate)), Object(p.d)(this.props))
					}, r.a.createElement(c.a, {
						className: X.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: n
					}, u && r.a.createElement(V, {
						getSubscribeEventFactory: this.getSubscribeEventFactory,
						onSubredditOrProfileClick: this.trackSubredditOrProfileClicked,
						subredditOrProfile: u,
						shouldShowSubscribeButton: v
					}), r.a.createElement(N, s), r.a.createElement(D, {
						"data-redditstyle": !0,
						post: m
					})), r.a.createElement(d.d, {
						postId: m.id
					}))
				}
			}
			const J = Object(m.a)(Object(a.a)(Z));
			class Q extends r.a.Component {
				render() {
					return r.a.createElement(J, this.props)
				}
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3ecQI6Cj7AUan8ODNedckX",
				carousel: "_3iT7bTTSmhcS5Y5g0HA_6O",
				containerVisible: "_3rsj8PUqTkCf6pe9416Gyy",
				expand: "_250lv3fevotwjop-AocHoR",
				fadeIn: "_3ZZS9kQ22NEA4xZZYY0spW",
				layout: "_3h7LpVpRI9GJtQIvq99wXT",
				header: "_1BBGDcB7hA6-TZL0ttf8GW",
				title: "_1fjygDYdKjBJL0LwqMGbmi",
				subredditLink: "_3U4JOEplD94U2FGR06uT9j",
				description: "_1963n3Yxcv9NC7ip9v_G55",
				overflow: "_3-Jj2CfWoB4geanC8TePf3",
				overflowDropdown: "cfnCFp3MEBqCBFKNqYCKh",
				overflowItemIconWrapper: "_1n_xSjRDa84SL-VXSHRa_b",
				hideIcon: "_1qgpARPT0gQIpbWQmCrZx9",
				body: "_2LVnfX2Exeku8qbknNjlSc",
				carouselVisible: "swB-w41jlb9yWuRozt8Wr",
				arrow: "_33n6Hxno5QDQIbv7MzWYA6"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/reddit/actions/inFeedChaining.ts"),
				u = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				b = s("./src/reddit/components/OverflowMenu/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				C = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/helpers/overlay/index.ts"),
				y = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				g = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				w = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = s("./src/reddit/selectors/inFeedChaining.ts"),
				P = s("./src/reddit/selectors/platform.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/subscriptions.ts"),
				_ = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx"),
				N = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts"),
				E = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/index.m.less"),
				T = s.n(E);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const k = 500,
				D = 600,
				U = {
					stiffness: 200,
					damping: 20
				},
				F = Object(d.c)({
					discoveryUnit: O.b,
					postChain: O.f,
					postSubreddit: S.bb,
					routeName: P.r,
					subscribedProfiles: j.c,
					subscribedSubreddits: j.d
				}),
				L = Object(a.b)(F, (e, t) => {
					let {
						listingKey: s,
						postId: i
					} = t;
					return {
						dismissPostChaining: () => {
							s && e(Object(p.e)())
						},
						openPost: t => e(Object(f.a)(t.permalink))
					}
				});
			class M extends o.a.Component {
				constructor(e) {
					super(e), this.showCarouselTimer = null, this.showDUTimer = null, this.showDU = () => {
						this.showDUTimer = window.setTimeout(() => {
							this.setState({
								isDUVisible: !0
							}, this.showCarousel)
						}, k)
					}, this.showCarousel = () => {
						this.showCarouselTimer = window.setTimeout(() => {
							this.setState({
								isCarouselVisible: !0
							})
						}, D)
					}, this.onOverflowClick = () => {
						const {
							discoveryUnit: e,
							postSubreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(y.e)(e, t))
					}, this.onShowMeLessClick = () => {
						const {
							discoveryUnit: e,
							dismissPostChaining: t,
							postSubreddit: s
						} = this.props;
						t(), e && this.props.sendEvent(Object(y.b)(e, s))
					}, this.getItemPostSubredditSubscribeEventFactory = e => {
						const {
							discoveryUnit: t,
							postSubreddit: s
						} = this.props;
						if (t) return Object(y.A)(t, e, s)
					}, this.trackDiscoveryUnitViewed = () => {
						const {
							discoveryUnit: e,
							postSubreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(y.h)(e, t))
					}, this.trackArrowClicked = e => {
						const {
							postSubreddit: t
						} = this.props;
						this.props.sendEvent(Object(y.f)(e, void 0, t))
					}, this.trackPostViewed = (e, t) => {
						const {
							postSubreddit: s
						} = this.props;
						this.props.sendEvent(Object(y.C)(e, t, void 0, s))
					}, this.trackSubredditClicked = () => {
						const {
							discoveryUnit: e,
							postSubreddit: t
						} = this.props;
						e && t && this.props.sendEvent(Object(y.H)(e, t))
					}, this.trackPostSubredditOrProfileClicked = e => {
						const {
							discoveryUnit: t,
							postSubreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(y.z)(t, e, void 0, s))
					}, this.openPost = (e, t) => {
						this.props.openPost(t);
						const {
							discoveryUnit: s
						} = this.props;
						s && this.trackPostViewed(s, t.id)
					}, this.renderPost = e => {
						const {
							discoveryUnit: t
						} = this.props, {
							subscribedProfiles: s,
							subscribedSubreddits: i
						} = this.state;
						return t ? o.a.createElement(_.a, I({}, e, {
							getSubscribeEventFactory: this.getItemPostSubredditSubscribeEventFactory,
							onClickPost: this.openPost,
							onSubredditOrProfileClick: this.trackPostSubredditOrProfileClicked,
							subscribedProfiles: s,
							subscribedSubreddits: i
						})) : null
					}, this.state = {
						isCarouselVisible: !1,
						isDUVisible: !1,
						subscribedProfiles: e.subscribedProfiles,
						subscribedSubreddits: e.subscribedSubreddits
					}
				}
				componentDidMount() {
					this.trackDiscoveryUnitViewed(), this.props.routeName !== l.Bb.COMMENTS && this.setState({
						isCarouselVisible: !0,
						isDUVisible: !0
					})
				}
				componentDidUpdate(e) {
					this.state.isCarouselVisible || e.routeName !== l.Bb.COMMENTS || this.props.routeName === l.Bb.COMMENTS || this.showDU()
				}
				componentWillUnmount() {
					this.showCarouselTimer && clearTimeout(this.showCarouselTimer), this.showDUTimer && clearTimeout(this.showDUTimer)
				}
				render() {
					const {
						discoveryUnit: e,
						postId: t,
						postChain: s,
						postSubreddit: n
					} = this.props, {
						isDUVisible: a,
						isCarouselVisible: d
					} = this.state;
					return e ? o.a.createElement("div", {
						className: Object(c.a)(T.a.container, a && T.a.containerVisible, this.props.className),
						"data-redditstyle": !0
					}, o.a.createElement("div", {
						className: T.a.layout,
						style: {
							backgroundColor: Object(r.d)(-.95, Object(w.a)(this.props).navIcon)
						}
					}, o.a.createElement("div", {
						className: T.a.header
					}, o.a.createElement("div", {
						className: T.a.title
					}, n ? i.fbt._("Similar communities to {subredditLink}", [i.fbt._param("subredditLink", o.a.createElement(x.a, {
						className: T.a.subredditLink,
						to: n.url,
						onMouseDown: this.trackSubredditClicked
					}, Object(C.c)(n.name)))], {
						hk: "2Qq224"
					}) : i.fbt._("Similar communities", null, {
						hk: "ntT00"
					})), o.a.createElement("div", {
						className: T.a.description
					}, i.fbt._("Top posts from the last 24 hours", null, {
						hk: "2iAfYj"
					})), o.a.createElement(b.b, {
						className: T.a.overflow,
						dropdownClassName: T.a.overflowDropdown,
						dropdownId: "chain-overflow-".concat(t),
						onClick: this.onOverflowClick
					}, o.a.createElement(v.b, {
						className: T.a.overflowItem,
						displayText: i.fbt._("Show me less of this", null, {
							hk: "1l1vKC"
						}),
						iconWrapperClassName: T.a.overflowItemIconWrapper,
						onClick: this.onShowMeLessClick
					}, o.a.createElement(g.a, {
						className: T.a.hideIcon
					})))), o.a.createElement("div", {
						className: T.a.body
					}, o.a.createElement(u.a, {
						className: Object(c.a)(T.a.carousel, d && T.a.carouselVisible),
						discoveryUnit: e,
						discoveryUnitSubreddit: n,
						isHidden: !d,
						isLoading: !1,
						items: s,
						itemWidth: N.a,
						leftArrowClassName: T.a.arrow,
						onArrowClick: this.trackArrowClicked,
						onPostView: this.trackPostViewed,
						renderPost: this.renderPost,
						rightArrowClassName: T.a.arrow,
						seed: t,
						shouldSlideIn: !0,
						springConfig: U
					})))) : null
				}
			}
			t.default = Object(m.a)(L(Object(h.c)(M)))
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const u = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				b = d.a.wrapped(e => n.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, s) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign(Object.assign({}, e.style), {
						"--RawHTMLDisplay-tr-even": Object(i.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(i.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", p.a);
			t.a = u(Object(a.a)(b))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			var i = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts");

			function n(e, t) {
				return (t === i.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === i.a.PROFILE ? Object(r.d)(e) : Object(r.c)(e)
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/post.ts"),
				o = s("./src/reddit/actions/postFlair.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/selectors/postFlair.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(i.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: u.d,
				crosspostSubredditOrProfile: u.e,
				currentUser: b.i,
				flairStyleTemplate: c.R,
				hideNSFWPref: b.A,
				isActive: u.j,
				moderatorPermissions: m.i,
				modModeEnabled: c.P,
				post: u.O,
				showEditFlair: p.a,
				subredditOrProfile: u.bb,
				userIsOp: b.kb
			}), (e, t) => {
				let {
					postId: s
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: s,
							previewFlair: i,
							selectedTemplateId: r
						} = t;
						return e(Object(o.h)({
							post: s,
							previewFlair: i,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const i = t === d.a.upvoted ? Object(n.S)(s) : Object(n.q)(s);
						e(i)
					},
					onIgnoreReports: () => e(Object(n.Q)(s)),
					onOpenReportsDropdown: t => e(Object(a.h)({
						tooltipId: t
					}))
				}
			}, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, s), e), t), {
				onFlairChanged: s => {
					let {
						previewFlair: i,
						selectedTemplateId: r
					} = s;
					return t.dispatchFlairChanged({
						post: e.post,
						previewFlair: i,
						selectedTemplateId: r
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), r.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InFeedChaining.97618ca018e3771715c2.js.map