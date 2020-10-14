// https://www.redditstatic.com/desktop2x/InFeedChaining.8e8c88e1a7bbc05d5258.js
// Retrieved at 10/14/2020, 1:50:05 PM by Reddit Dataminer v1.0.0
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
				return r
			}));
			const r = 236
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
				return Y
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				l = s("./src/reddit/components/PostContainer/index.tsx"),
				m = s("./src/reddit/connectors/miniCardPost.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = s("./src/reddit/models/Subreddit/index.ts"),
				u = s("./src/config.ts"),
				h = s("./src/lib/isUrl/index.ts"),
				v = s("./src/reddit/components/Media/index.tsx"),
				x = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				C = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				O = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				S = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/components/MiniCardPost/index.m.less"),
				g = s.n(w),
				j = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				_ = s.n(j);
			const N = "".concat(u.a.assetPath, "/img/link-placeholder.png");
			var E = e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: r,
						crosspostRoot: n,
						flairStyleTemplate: o,
						forceLoadMedia: c,
						post: d,
						scrollerItemRef: l,
						shouldPause: m
					} = e, {
						media: b
					} = n || d, p = b && i.a.createElement(v.a, {
						autoplayPref: t,
						availableWidth: s,
						className: g.a.media,
						"data-redditstyle": !0,
						forceAspectRatio: S.c,
						imageBoxClassName: g.a.mediaImageBox,
						imageBoxContentImageClassName: g.a.mediaImageBoxContentImage,
						isListing: !0,
						isMiniCard: !0,
						isMiniCardHQPreviews: !0,
						isNotCardView: !0,
						post: n || d,
						scrollerItemRef: l,
						shouldLoad: c,
						shouldPause: m,
						showCentered: !1,
						showFull: !1
					});
					let u, w = !0;
					const j = !!d.source && Object(h.a)(d.source.url) || !!d.thumbnail && Object(h.a)(d.thumbnail.url);
					return !b && j ? (w = !1, u = i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: _.a.flexSpacer
					}), i.a.createElement("div", {
						className: _.a.mediaWrapper
					}, i.a.createElement(x.a, {
						className: _.a.thumbnailWrapper,
						thumbnailClassName: _.a.thumbnail,
						thumbnailContainerClassName: _.a.thumbnailContainer,
						thumbnailLinkIconClassName: _.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: d,
						showPlaceholderContentType: !o || !o.postPlaceholderImage,
						templatePlaceholderImage: o ? o.postPlaceholderImage : N,
						usePreview: !0
					})))) : b && p ? b.type !== S.o.RTJSON && b.type !== S.o.TEXT ? (w = !1, u = i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: _.a.flexSpacer
					}), i.a.createElement("div", {
						className: _.a.mediaWrapper
					}, p))) : u = Object(O.a)(d) || Object(C.c)(d) && Object(f.a)(d) ? i.a.createElement("div", {
						className: _.a.textWrapper
					}, p) : i.a.createElement("div", {
						className: _.a.flexSpacer
					}) : u = i.a.createElement("div", {
						className: _.a.flexSpacer
					}), i.a.createElement("div", {
						className: Object(a.a)(_.a.body, r)
					}, i.a.createElement(y.c, {
						className: w ? _.a.postTitle : _.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: d,
						size: y.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: o && o.postTitleColor
					}), u)
				},
				P = s("./node_modules/fbt/lib/FbtPublic.js"),
				T = s("./src/lib/prettyPrintNumber/index.ts"),
				I = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				k = s.n(I);
			var D = e => {
					const {
						className: t,
						post: s
					} = e;
					return i.a.createElement("div", {
						className: Object(a.a)(k.a.footer, t)
					}, i.a.createElement("span", {
						className: k.a.metaText
					}, P.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [P.fbt._plural(s.score, "number", Object(T.b)(s.score))], {
						hk: "2ncFte"
					})), i.a.createElement("span", {
						className: k.a.metaText
					}, P.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [P.fbt._plural(s.numComments, "number", Object(T.b)(s.numComments))], {
						hk: "1QQoSA"
					})))
				},
				U = s("./src/reddit/components/SubredditIcon/index.tsx"),
				B = s("./src/reddit/components/SubscribeButton/index.tsx"),
				L = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				F = s("./src/reddit/constants/posts.ts"),
				M = s("./src/reddit/controls/InternalLink/index.tsx"),
				A = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				R = s.n(A);
			var V = e => {
					const {
						className: t,
						getSubscribeEventFactory: s,
						onSubredditOrProfileClick: r,
						shouldShowSubscribeButton: n,
						subredditOrProfile: o
					} = e, c = Object(p.g)(o) ? F.a.PROFILE : F.a.SUBREDDIT;
					return i.a.createElement("div", {
						className: Object(a.a)(R.a.header, t)
					}, i.a.createElement(M.a, {
						className: R.a.iconLink,
						"data-redditstyle": !0,
						to: o.url,
						onMouseDown: r
					}, i.a.createElement(U.b, {
						className: R.a.icon,
						subredditOrProfile: o
					})), i.a.createElement("div", {
						className: R.a.name
					}, i.a.createElement(M.a, {
						className: R.a.link,
						"data-redditstyle": !0,
						to: o.url,
						onMouseDown: r
					}, Object(L.b)(o.displayText || o.name, c))), n && i.a.createElement(B.a, {
						className: R.a.subscribe,
						"data-redditstyle": !0,
						getEventFactory: s,
						icon: !0,
						identifier: {
							name: o.name,
							type: c
						},
						small: !0
					}))
				},
				H = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				W = s.n(H),
				J = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less"),
				z = s.n(J),
				Q = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (s[r[i]] = e[r[i]])
					}
					return s
				};
			const Z = Object(n.a)(e => e.subredditOrProfile, e => e.subscribedProfiles, e => e.subscribedSubreddits, (e, t, s) => {
				if (!e) return !1;
				return (Object(p.g)(e) ? t : s).some(t => t.id === e.id)
			});
			class q extends i.a.Component {
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
						s = Q(e, ["className"]),
						{
							eventFactory: r,
							flairStyleTemplate: n,
							onClickPost: o,
							post: m,
							subredditOrProfile: p,
							subscribedProfiles: u,
							subscribedSubreddits: h
						} = s,
						v = !Z({
							subredditOrProfile: p,
							subscribedProfiles: u,
							subscribedSubreddits: h
						});
					return i.a.createElement(l.a, {
						className: Object(a.a)(z.a.container, W.a.largeAndMediumActiveStyles, W.a.largeAndMediumPostStyles, W.a.mUseRedditTheme, g.a.postContainer, Object(b.a)(this.props), t),
						eventFactory: r,
						onClick: o,
						post: m,
						style: Object.assign(Object.assign({}, Object(b.b)(this.props.flairStyleTemplate)), Object(b.d)(this.props))
					}, i.a.createElement(d.a, {
						className: z.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: n
					}, p && i.a.createElement(V, {
						getSubscribeEventFactory: this.getSubscribeEventFactory,
						onSubredditOrProfileClick: this.trackSubredditOrProfileClicked,
						subredditOrProfile: p,
						shouldShowSubscribeButton: v
					}), i.a.createElement(E, s), i.a.createElement(D, {
						"data-redditstyle": !0,
						post: m
					})), i.a.createElement(c.d, {
						postId: m.id
					}))
				}
			}
			const X = Object(m.a)(Object(o.a)(q));
			class Y extends i.a.Component {
				render() {
					return i.a.createElement(X, this.props)
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				b = s("./src/reddit/actions/inFeedChaining.ts"),
				p = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				u = s("./src/reddit/components/OverflowMenu/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				y = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/helpers/overlay/index.ts"),
				C = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				O = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				S = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = s("./src/reddit/selectors/inFeedChaining.ts"),
				g = s("./src/reddit/selectors/platform.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/subscriptions.ts"),
				N = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx"),
				E = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts"),
				P = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/index.m.less"),
				T = s.n(P);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
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
				B = Object(c.c)({
					discoveryUnit: w.b,
					postChain: w.f,
					postSubreddit: j.ab,
					routeName: g.r,
					subscribedProfiles: _.c,
					subscribedSubreddits: _.d
				}),
				L = Object(o.b)(B, (e, t) => {
					let {
						listingKey: s,
						postId: r
					} = t;
					return {
						dismissPostChaining: () => {
							s && e(Object(b.e)())
						},
						openPost: t => e(Object(f.a)(t.permalink))
					}
				});
			class F extends a.a.Component {
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
						e && this.props.sendEvent(Object(C.e)(e, t))
					}, this.onShowMeLessClick = () => {
						const {
							discoveryUnit: e,
							dismissPostChaining: t,
							postSubreddit: s
						} = this.props;
						t(), e && this.props.sendEvent(Object(C.b)(e, s))
					}, this.getItemPostSubredditSubscribeEventFactory = e => {
						const {
							discoveryUnit: t,
							postSubreddit: s
						} = this.props;
						if (t) return Object(C.A)(t, e, s)
					}, this.trackDiscoveryUnitViewed = () => {
						const {
							discoveryUnit: e,
							postSubreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(C.h)(e, t))
					}, this.trackArrowClicked = e => {
						const {
							postSubreddit: t
						} = this.props;
						this.props.sendEvent(Object(C.f)(e, void 0, t))
					}, this.trackPostViewed = (e, t) => {
						const {
							postSubreddit: s
						} = this.props;
						this.props.sendEvent(Object(C.C)(e, t, void 0, s))
					}, this.trackSubredditClicked = () => {
						const {
							discoveryUnit: e,
							postSubreddit: t
						} = this.props;
						e && t && this.props.sendEvent(Object(C.H)(e, t))
					}, this.trackPostSubredditOrProfileClicked = e => {
						const {
							discoveryUnit: t,
							postSubreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(C.z)(t, e, void 0, s))
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
							subscribedSubreddits: r
						} = this.state;
						return t ? a.a.createElement(N.a, I({}, e, {
							getSubscribeEventFactory: this.getItemPostSubredditSubscribeEventFactory,
							onClickPost: this.openPost,
							onSubredditOrProfileClick: this.trackPostSubredditOrProfileClicked,
							subscribedProfiles: s,
							subscribedSubreddits: r
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
						isDUVisible: o,
						isCarouselVisible: c
					} = this.state;
					return e ? a.a.createElement("div", {
						className: Object(d.a)(T.a.container, o && T.a.containerVisible, this.props.className),
						"data-redditstyle": !0
					}, a.a.createElement("div", {
						className: T.a.layout,
						style: {
							backgroundColor: Object(i.d)(-.95, Object(S.a)(this.props).navIcon)
						}
					}, a.a.createElement("div", {
						className: T.a.header
					}, a.a.createElement("div", {
						className: T.a.title
					}, n ? r.fbt._("Similar communities to {subredditLink}", [r.fbt._param("subredditLink", a.a.createElement(x.a, {
						className: T.a.subredditLink,
						to: n.url,
						onMouseDown: this.trackSubredditClicked
					}, Object(y.b)(n.name)))], {
						hk: "2Qq224"
					}) : r.fbt._("Similar communities", null, {
						hk: "ntT00"
					})), a.a.createElement("div", {
						className: T.a.description
					}, r.fbt._("Top posts from the last 24 hours", null, {
						hk: "2iAfYj"
					})), a.a.createElement(u.b, {
						className: T.a.overflow,
						dropdownClassName: T.a.overflowDropdown,
						dropdownId: "chain-overflow-".concat(t),
						onClick: this.onOverflowClick
					}, a.a.createElement(v.b, {
						className: T.a.overflowItem,
						displayText: r.fbt._("Show me less of this", null, {
							hk: "1l1vKC"
						}),
						iconWrapperClassName: T.a.overflowItemIconWrapper,
						onClick: this.onShowMeLessClick
					}, a.a.createElement(O.a, {
						className: T.a.hideIcon
					})))), a.a.createElement("div", {
						className: T.a.body
					}, a.a.createElement(p.a, {
						className: Object(d.a)(T.a.carousel, c && T.a.carouselVisible),
						discoveryUnit: e,
						discoveryUnitSubreddit: n,
						isHidden: !c,
						isLoading: !1,
						items: s,
						itemWidth: E.a,
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
			t.default = Object(m.a)(L(Object(h.c)(F)))
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
			var r = s("./node_modules/polished/dist/polished.es.js"),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				b = s.n(m);
			const p = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(d.G)(t))
				})),
				u = c.a.wrapped(e => n.a.createElement("div", {
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
						"--RawHTMLDisplay-tr-even": Object(r.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(r.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", b.a);
			t.a = p(Object(o.a)(u))
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				is2020: "_2CLbCoThTVSANDpeJGlI6a"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				o = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/hooks/useButtons2020.ts"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				b = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				p = s.n(b),
				u = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (s[r[i]] = e[r[i]])
				}
				return s
			};
			const y = h.a.button("IconButton", p.a),
				f = h.a.wrapped(l.a, "SubscribeIcon", p.a),
				C = h.a.wrapped(d.a, "UnsubscribeIcon", p.a),
				O = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = x(e, ["border", "small"]);
					return n.a.createElement(y, r, n.a.createElement(f, {
						className: Object(u.a)(r.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", p.a),
				S = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = x(e, ["border", "small"]);
					return t ? n.a.createElement(o.i, v({}, r, {
						className: Object(u.a)(r.className, {
							[p.a.isSmall]: s
						})
					})) : n.a.createElement(o.o, v({}, r, {
						className: Object(u.a)(r.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", p.a),
				w = e => {
					var {
						icon: t,
						border: s,
						small: r
					} = e, i = x(e, ["icon", "border", "small"]);
					const a = Object(c.a)();
					return t ? n.a.createElement(O, v({}, i, {
						border: s,
						small: r,
						className: Object(u.a)(i.className, {
							[p.a.isSmall]: r
						})
					})) : a ? n.a.createElement(o.q, v({}, i, {
						priority: s ? o.b.Primary : o.b.Tertiary,
						className: Object(u.a)(i.className, p.a.is2020),
						size: r ? o.c.S : o.c.M
					})) : n.a.createElement(S, v({}, i, {
						border: s,
						small: r,
						className: Object(u.a)(i.className, {
							[p.a.isSmall]: r
						})
					}))
				},
				g = h.a.wrapped(e => {
					var {
						border: t,
						small: s,
						type: r
					} = e, i = x(e, ["border", "small", "type"]);
					return n.a.createElement(y, i, n.a.createElement(C, {
						className: Object(u.a)(a.n, i.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				j = e => n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
					className: p.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), n.a.createElement("span", {
					className: p.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				_ = h.a.wrapped(e => {
					var {
						border: t,
						small: s,
						buttonType: r
					} = e, i = x(e, ["border", "small", "buttonType"]);
					const a = j(r),
						c = Object(u.a)(i.className, {
							[p.a.isSmall]: s
						});
					return t ? n.a.createElement(o.l, v({}, i, {
						className: c
					}), a) : n.a.createElement(o.o, v({}, i, {
						className: c
					}), a)
				}, "UnsubscribeButton", p.a),
				N = e => {
					var {
						buttonType: t,
						border: s,
						small: r,
						icon: i
					} = e, a = x(e, ["buttonType", "border", "small", "icon"]);
					const d = Object(c.a)();
					return i ? n.a.createElement(g, v({}, a, {
						border: s,
						small: r,
						buttonType: t,
						className: Object(u.a)(a.className, {
							[p.a.isSmall]: r
						})
					})) : d ? n.a.createElement(o.q, v({}, a, {
						priority: s ? o.b.Secondary : o.b.Tertiary,
						className: Object(u.a)(a.className, p.a.is2020),
						size: r ? o.c.S : o.c.M,
						text: j(t)
					})) : n.a.createElement(_, v({}, a, {
						border: s,
						small: r,
						buttonType: t,
						className: Object(u.a)(a.className, {
							[p.a.isSmall]: r
						})
					}))
				};
			class E extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: s = !1,
						id: r,
						small: i = !1
					} = this.props, a = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: i
					};
					return this.props.userIsSubscriber ? n.a.createElement(N, v({}, a, {
						buttonType: this.props.identifier.type
					})) : n.a.createElement(w, v({}, a, {
						id: r
					}), this.props.children, Object(m.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				n = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(i.a)(Object(r.c)(n.a))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			var r = s("./src/reddit/constants/posts.ts"),
				i = s("./src/reddit/helpers/name/index.ts");

			function n(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === r.a.PROFILE ? Object(i.c)(e) : Object(i.b)(e)
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				o = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				b = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/user.ts");
			const h = Object(r.b)(() => Object(i.c)({
				activeModalId: l.a,
				autoplayPref: u.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				currentUser: u.i,
				flairStyleTemplate: d.R,
				hideNSFWPref: u.A,
				isActive: p.j,
				moderatorPermissions: m.i,
				modModeEnabled: d.P,
				post: p.N,
				showEditFlair: b.a,
				subredditOrProfile: p.ab,
				userIsOp: u.kb
			}), (e, t) => {
				let {
					postId: s
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: s,
							previewFlair: r,
							selectedTemplateId: i
						} = t;
						return e(Object(a.h)({
							post: s,
							previewFlair: r,
							selectedTemplateId: i
						}))
					},
					handleVote: t => {
						const r = t === c.a.upvoted ? Object(n.S)(s) : Object(n.q)(s);
						e(r)
					},
					onIgnoreReports: () => e(Object(n.Q)(s)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}
			}, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, s), e), t), {
				onFlairChanged: s => {
					let {
						previewFlair: r,
						selectedTemplateId: i
					} = s;
					return t.dispatchFlairChanged({
						post: e.post,
						previewFlair: r,
						selectedTemplateId: i
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, i.a.createElement("g", null, i.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), i.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InFeedChaining.8e8c88e1a7bbc05d5258.js.map