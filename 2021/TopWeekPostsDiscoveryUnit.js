// https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.94d4b2e35412dc2c253e.js
// Retrieved at 3/8/2021, 4:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["TopWeekPostsDiscoveryUnit"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "d", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/selectors/telemetry.ts");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, s) => (n = (() => {})) => r => {
				const a = u(r.target, r.currentTarget),
					o = p(r.target, r.currentTarget);
				a && s && t && (m(r.target, r.currentTarget, d.anchors) ? s(t(e, a, o)) : s(s => {
					const n = t(e, a, o)(s);
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
						actionInfo: Object(i.previousPageActionInfo)(s, r)
					}
				})), m(r.target, r.currentTarget, d.anchorsAndButtons) && n(r)
			};

			function l(e) {
				return Object(a.c)(t => {
					const {
						sendEvent: s,
						eventFactory: a,
						clickTrackingId: i,
						...l
					} = t, d = Object(n.useCallback)(c(i, a, s), [i, a, s]);
					return r.a.createElement(e, o({}, l, {
						afterClickTracking: d
					}))
				})
			}
			const d = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				m = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && m(e.parentElement, t, s)),
				u = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && u(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_22LJahVHZg-w-Ok4e54Ekf",
				arrowIcon: "_2vWDDpepKDRWqekB9vJEi"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			}));
			var n = s("./node_modules/lodash/values.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/fastdom/index.ts"),
				l = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx"),
				d = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx"),
				m = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				u = s.n(m);
			const p = e => i.a.createElement("button", {
					className: Object(o.a)(u.a.arrow, e.className),
					onClick: e.onClick
				}, i.a.createElement(l.a, {
					className: u.a.arrowIcon,
					seed: e.seed
				})),
				b = e => i.a.createElement("button", {
					className: Object(o.a)(u.a.arrow, e.className),
					onClick: e.onClick
				}, i.a.createElement(d.a, {
					className: u.a.arrowIcon,
					seed: e.seed
				}));
			class h extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						itemsFitInContainer: !1,
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null
					}, this.makeVisibilityChangeHandler = e => t => {
						this.setState({
							viewableItems: {
								...this.state.viewableItems,
								[e]: t.isIntersecting && t.intersectionRatio >= .99
							}
						})
					}, this.getVisibleItemsCount = () => {
						return r()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
					}, this.getMaxScrollIndex = e => null != e && this.props.items ? this.props.items.length - e : null, this.getSpacerCount = e => e + 1, this.getMarginLeft = ({
						adjustment: e,
						itemWidth: t,
						scrollIndex: s,
						spacerWidth: n = 0
					}) => {
						return e - s * (t + n) + n
					}, this.getAdjustment = ({
						itemWidth: e,
						maxScrollIndex: t,
						scrollIndex: s,
						spacerWidth: n = 0,
						visibleItemsCount: r
					}) => {
						let a = 0;
						if (s === t && r) {
							const t = r * e + this.getSpacerCount(r) * n;
							a = (this.container ? this.container.offsetWidth : t) - t
						} else s > 0 && (a = 0);
						return a
					}, this.setContainerRef = e => {
						this.container = e
					}, this.id = "", this.spacerWidth = 0, this.itemWidth = 0, this.onClickNext = this.onClickNext.bind(this), this.onClickPrev = this.onClickPrev.bind(this)
				}
				componentDidMount() {
					const e = this.getVisibleItemsCount();
					this.setState({
						visibleItemsCount: e
					}), this.calcItemsFitInContainer()
				}
				componentDidUpdate(e, t) {
					this.calcItemsFitInContainer()
				}
				calcItemsFitInContainer() {
					c.a.read(() => {
						this.setState(e => {
							const t = this.doItemsFitInContainer({
								container: this.container,
								items: this.props.items,
								itemWidth: this.itemWidth,
								spacerWidth: this.spacerWidth
							});
							return e.itemsFitInContainer !== t ? {
								itemsFitInContainer: t
							} : null
						})
					})
				}
				doItemsFitInContainer({
					container: e,
					items: t,
					itemWidth: s,
					spacerWidth: n = 0
				}) {
					if (!e) return !0;
					const r = t.length * s,
						a = this.getSpacerCount(t.length) * n;
					return e.offsetWidth >= r + a
				}
				onClickNext() {
					const e = this.getVisibleItemsCount(),
						t = this.getMaxScrollIndex(e),
						s = Math.max(1, e),
						n = Math.min(this.state.scrollIndex + s, t);
					this.setState({
						scrollIndex: n,
						visibleItemsCount: e
					})
				}
				onClickPrev() {
					const e = this.getVisibleItemsCount(),
						t = Math.max(1, e),
						s = Math.max(0, this.state.scrollIndex - t);
					this.setState({
						scrollIndex: s,
						visibleItemsCount: e
					})
				}
			}
			t.c = h
		},
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
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = 236
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				d = s("./src/reddit/components/PostContainer/index.tsx"),
				m = s("./src/reddit/connectors/miniCardPost.ts"),
				u = s("./src/reddit/contexts/Post/index.tsx"),
				p = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = s("./src/reddit/models/Subreddit/index.ts"),
				h = s("./src/config.ts"),
				x = s("./src/lib/isUrl/index.ts"),
				C = s("./src/reddit/components/Media/index.tsx"),
				g = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				f = s("./src/reddit/components/PostTitle/index.tsx"),
				v = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				y = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				E = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				P = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/components/MiniCardPost/index.m.less"),
				k = s.n(O),
				N = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				j = s.n(N);
			const _ = `${h.a.assetPath}/img/link-placeholder.png`;
			var I = e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: a,
						flairStyleTemplate: o,
						forceLoadMedia: c,
						post: l,
						scrollerItemRef: d,
						shouldPause: m
					} = e, {
						media: u
					} = a || l, p = u && r.a.createElement(C.a, {
						autoplayPref: t,
						availableWidth: s,
						className: k.a.media,
						"data-redditstyle": !0,
						forceAspectRatio: P.c,
						imageBoxClassName: k.a.mediaImageBox,
						imageBoxContentImageClassName: k.a.mediaImageBoxContentImage,
						isListing: !0,
						isMiniCard: !0,
						isMiniCardHQPreviews: !0,
						isNotCardView: !0,
						post: a || l,
						scrollerItemRef: d,
						shouldLoad: c,
						shouldPause: m,
						showCentered: !1,
						showFull: !1
					});
					let b, h = !0;
					const O = !!l.source && Object(x.a)(l.source.url) || !!l.thumbnail && Object(x.a)(l.thumbnail.url);
					return !u && O ? (h = !1, b = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: j.a.flexSpacer
					}), r.a.createElement("div", {
						className: j.a.mediaWrapper
					}, r.a.createElement(g.a, {
						className: j.a.thumbnailWrapper,
						thumbnailClassName: j.a.thumbnail,
						thumbnailContainerClassName: j.a.thumbnailContainer,
						thumbnailLinkIconClassName: j.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: l,
						showPlaceholderContentType: !o || !o.postPlaceholderImage,
						templatePlaceholderImage: o ? o.postPlaceholderImage : _,
						usePreview: !0
					})))) : u && p ? u.type !== P.o.RTJSON && u.type !== P.o.TEXT ? (h = !1, b = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: j.a.flexSpacer
					}), r.a.createElement("div", {
						className: j.a.mediaWrapper
					}, p))) : b = Object(E.a)(l) || Object(y.c)(l) && Object(v.a)(l) ? r.a.createElement("div", {
						className: j.a.textWrapper
					}, p) : r.a.createElement("div", {
						className: j.a.flexSpacer
					}) : b = r.a.createElement("div", {
						className: j.a.flexSpacer
					}), r.a.createElement("div", {
						className: Object(i.a)(j.a.body, n)
					}, r.a.createElement(f.c, {
						className: h ? j.a.postTitle : j.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: l,
						size: f.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: o && o.postTitleColor
					}), b)
				},
				S = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/lib/prettyPrintNumber/index.ts"),
				L = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				T = s.n(L);
			var M = e => {
					const {
						className: t,
						post: s
					} = e;
					return r.a.createElement("div", {
						className: Object(i.a)(T.a.footer, t)
					}, r.a.createElement("span", {
						className: T.a.metaText
					}, S.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [S.fbt._plural(s.score, "number", Object(w.b)(s.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: T.a.metaText
					}, S.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [S.fbt._plural(s.numComments, "number", Object(w.b)(s.numComments))], {
						hk: "1QQoSA"
					})))
				},
				U = s("./src/reddit/components/SubredditIcon/index.tsx"),
				D = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				W = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				A = s("./src/reddit/constants/posts.ts"),
				F = s("./src/reddit/controls/Button/index.tsx"),
				B = s("./src/reddit/controls/InternalLink/index.tsx"),
				R = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				H = s.n(R);
			var V = e => {
					const {
						className: t,
						getSubscribeEventFactory: s,
						onSubredditOrProfileClick: n,
						shouldShowSubscribeButton: a,
						subredditOrProfile: o
					} = e, c = Object(b.g)(o) ? A.a.PROFILE : A.a.SUBREDDIT;
					return r.a.createElement("div", {
						className: Object(i.a)(H.a.header, t)
					}, r.a.createElement(B.a, {
						className: H.a.iconLink,
						"data-redditstyle": !0,
						to: o.url,
						onMouseDown: n
					}, r.a.createElement(U.b, {
						className: H.a.icon,
						subredditOrProfile: o
					})), r.a.createElement("div", {
						className: H.a.name
					}, r.a.createElement(B.a, {
						className: H.a.link,
						"data-redditstyle": !0,
						to: o.url,
						onMouseDown: n
					}, Object(W.b)(o.displayText || o.name, c))), a && r.a.createElement(D.a, {
						className: H.a.subscribe,
						"data-redditstyle": !0,
						getEventFactory: s,
						identifier: {
							name: o.name,
							type: c
						},
						size: F.c.XXS,
						small: !0
					}))
				},
				Q = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				z = s.n(Q),
				K = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less"),
				G = s.n(K);
			const J = Object(a.a)(e => e.subredditOrProfile, e => e.subscribedProfiles, e => e.subscribedSubreddits, (e, t, s) => {
				if (!e) return !1;
				return (Object(b.g)(e) ? t : s).some(t => t.id === e.id)
			});
			class q extends r.a.Component {
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
						flairStyleTemplate: n,
						onClickPost: a,
						post: o,
						subredditOrProfile: m,
						subscribedProfiles: u,
						subscribedSubreddits: b
					} = t, h = !J({
						subredditOrProfile: m,
						subscribedProfiles: u,
						subscribedSubreddits: b
					});
					return r.a.createElement(d.a, {
						className: Object(i.a)(G.a.container, z.a.largeAndMediumActiveStyles, z.a.largeAndMediumPostStyles, z.a.mUseRedditTheme, k.a.postContainer, Object(p.a)(this.props), e),
						eventFactory: s,
						onClick: a,
						post: o,
						style: {
							...Object(p.b)(this.props.flairStyleTemplate),
							...Object(p.d)(this.props)
						}
					}, r.a.createElement(l.a, {
						className: G.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: n
					}, m && r.a.createElement(V, {
						getSubscribeEventFactory: this.getSubscribeEventFactory,
						onSubredditOrProfileClick: this.trackSubredditOrProfileClicked,
						subredditOrProfile: m,
						shouldShowSubscribeButton: h
					}), r.a.createElement(I, t), r.a.createElement(M, {
						"data-redditstyle": !0,
						post: o
					})), r.a.createElement(c.d, null))
				}
			}
			const Z = Object(u.b)(Object(m.a)(Object(o.a)(q)));
			class Y extends r.a.Component {
				render() {
					return r.a.createElement(Z, this.props)
				}
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "DZ4N46-GxcZN4myRo1Jov",
				metaLine: "_3RsomDBMRm4zJwQoMA4H1I",
				bodyWrapper: "_8QyJR-f-gRDrBnB_U9d9M",
				mediaWrapper: "aAoswTeXSP59D_O0jbLMm",
				textWrapper: "_2QMHsv2ah510M8yVPnDIDo",
				meta: "_3OnBTLhwkjT_qb7jDZaN9k",
				metaWrapper: "_2kgjZeq5YSkBzbG2wBt-_",
				thumbnailWrapper: "_1QpRu40opbkSjXtHCoSpBr",
				thumbnail: "_1DSgZoQLneHjWE3l_dVvDG",
				thumbnailContainer: "_1cYdO4iDTKirKmKc6pjuYh",
				flatlist: "_15Tcsv4uOZy408GvAhSm6S",
				postTitle: "_20l1A0LHN5sLYdsFa4q_mv",
				postTitleCompact: "-si4FJBkXt7YGgVfE6_gR",
				flexSpacer: "oE0WBXnmx0c_cycbOzIeZ",
				innerContainer: "_2-GgqVSOuBRpxRqecJixsh"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_380AW2tV1AjseFZoaW2xp3",
				topPosts: "_3RDCFf4elKrhJHKKZkPPD",
				topPostsLargePostsContainer: "_1iE8_7IcegvYg_Wg3A0jTR",
				largePosts: "_2jBymLZmAms1MelhCFZsUI",
				"m-large": "_2lujqkV5X6gCVwiA3jxvA1",
				mLarge: "_2lujqkV5X6gCVwiA3jxvA1",
				"m-subreddit": "_3UFkxiq8tu1X9rAES7YEk7",
				mSubreddit: "_3UFkxiq8tu1X9rAES7YEk7",
				topPostLargePosts: "_1B27sUe973sxluKyC6_HnP",
				topPost: "_3_Nr3saSmaO8BeqrN2u7Pb",
				largePost: "_21q6EU8IrGnKgnRi9Fcrko",
				topPostLargePost: "_3rjlIRqkC_nm_BoSlEQ8u-",
				smallPosts: "_1XdjckgSGhgpGEGUohL62w",
				smallPost: "_69IUkr5xucpVcbGP5l070"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsLargePostsContainer: "blJHXrhp2aDTr_eU2819a",
				postsWrapper: "_31N1g4ul5_oWaf7McMDm4z",
				arrow: "_3PrQgt3ZKPk7QhsYwrdYga",
				arrowLeft: "_1GoqoM-Z9VRJCHgekfYoZE",
				arrowRight: "SGDu37agzx7_Dwp8seKWa",
				posts: "Fa7qwmMMPp0OdoJcQuaNG",
				largePost: "_2rsZ95X0CQMIjB--1M9rHS",
				slideIn: "_11Gk71fxo8Xiw2sUIcEJd7"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-motion/lib/react-motion.js"),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/overlay/index.ts"),
				p = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/lib/isUrl/index.ts"),
				x = s("./src/lib/prettyPrintNumber/index.ts"),
				C = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				g = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				f = s("./src/lib/timeAgo/index.ts"),
				v = s("./src/reddit/constants/posts.ts"),
				y = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = s("./src/reddit/layout/row/Inline/index.tsx"),
				P = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				O = s.n(P);
			var k = e => {
					const t = v.a.PROFILE,
						s = Object(y.a)(e.author, t);
					return a.a.createElement("div", {
						className: Object(c.a)(O.a.container, e.className)
					}, a.a.createElement(E.a, {
						className: O.a.layout
					}, a.a.createElement("div", {
						className: O.a.textContainer
					}, a.a.createElement("span", {
						className: O.a.description
					}, b.fbt._("posted by", null, {
						hk: "wl0iP"
					})), a.a.createElement(g.a, {
						className: O.a.authorName,
						to: s
					}, Object(y.b)(e.author, t)), a.a.createElement("span", {
						className: O.a.timestamp
					}, Object(f.d)(e.created / 1e3)))))
				},
				N = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				j = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				_ = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				I = s.n(_);
			var S = e => {
					const t = Object(y.a)(e.name, e.type);
					return a.a.createElement("div", {
						className: Object(c.a)(I.a.container, e.className)
					}, a.a.createElement(j.a, {
						className: I.a.layout
					}, a.a.createElement("div", {
						className: I.a.iconContainer
					}, e.iconUrl ? a.a.createElement("img", {
						className: I.a.icon,
						src: e.iconUrl
					}) : a.a.createElement(N.a, {
						className: I.a.planetIcon,
						"data-redditstyle": !0
					})), a.a.createElement("div", {
						className: I.a.textContainer
					}, a.a.createElement(g.a, {
						"data-click-id": "subreddit",
						className: I.a.name,
						to: t
					}, Object(y.b)(e.displayText || e.name, e.type)), a.a.createElement("span", {
						className: I.a.separator
					}, "•"), a.a.createElement("span", {
						className: I.a.timestamp
					}, Object(f.d)(e.created / 1e3)))))
				},
				w = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = s("./src/reddit/components/Media/index.tsx"),
				T = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				M = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				U = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				D = s("./src/reddit/components/PostContainer/index.tsx"),
				W = s("./src/reddit/components/PostTitle/index.tsx"),
				A = s("./src/reddit/connectors/miniCardPost.ts"),
				F = s("./src/reddit/contexts/Post/index.tsx"),
				B = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				R = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				H = s("./src/reddit/models/Media/index.ts"),
				V = s("./src/reddit/models/Subreddit/index.ts"),
				Q = s("./src/reddit/models/Widgets/index.ts"),
				z = s("./src/reddit/components/MiniCardPost/index.m.less"),
				K = s.n(z),
				G = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				J = s.n(G),
				q = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				Z = s.n(q);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class X extends a.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: n,
						crosspostSubredditOrProfile: r,
						eventFactory: i,
						flairStyleTemplate: o,
						forceLoadMedia: l,
						hideNSFWPref: d,
						isMiniCard: m = !0,
						onClickPost: u,
						post: p,
						scrollerItemRef: C,
						shouldPause: g,
						showAuthorBlock: f = !1,
						showMetaLine: v = !0,
						showSubscribeBlock: y = !1,
						subredditOrProfile: E
					} = this.props, {
						media: P
					} = n || p, O = !P && !!p.source && Object(h.a)(p.source.url);
					let N = P && a.a.createElement(L.a, {
							autoplayPref: e,
							availableWidth: t,
							className: K.a.media,
							forceAspectRatio: H.c,
							imageBoxClassName: K.a.mediaImageBox,
							imageBoxContentImageClassName: K.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: n || p,
							scrollerItemRef: C,
							shouldPause: g,
							shouldLoad: l,
							showCentered: !1,
							showFull: !1
						}),
						j = !1;
					P && N && (P.type !== H.o.RTJSON && P.type !== H.o.TEXT ? (N = a.a.createElement("div", {
						className: Z.a.mediaWrapper
					}, N), j = !0) : P && P.content && Object(B.a)(p) && (N = a.a.createElement("div", {
						className: Z.a.textWrapper
					}, N)));
					const _ = !j && !O;
					let I;
					return E && (I = Object(V.g)(E) ? Object(Q.h)(E) : Object(Q.i)(E)), a.a.createElement(D.a, {
						className: Object(c.a)(Z.a.container, J.a.largeAndMediumActiveStyles, J.a.largeAndMediumPostStyles, K.a.postContainer, Object(R.a)(this.props), s),
						post: p,
						onClick: u,
						eventFactory: i,
						style: {
							...Object(R.b)(this.props.flairStyleTemplate),
							...Object(R.d)(this.props),
							...this.props.style
						},
						"data-click-id": this.props["data-click-id"]
					}, a.a.createElement(U.a, {
						className: K.a.backgroundWrapper,
						flairStyleTemplate: o
					}, a.a.createElement("div", {
						className: Object(c.a)(Z.a.innerContainer, K.a.innerContainer)
					}, y && E && a.a.createElement(S, Y({
						created: p.created
					}, I)), f && E && a.a.createElement(k, Y({
						created: p.created,
						author: p.author
					}, I)), a.a.createElement(W.c, {
						className: _ ? Z.a.postTitle : Z.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: W.b.Large,
						titleColor: o && o.postTitleColor
					}), v && E && a.a.createElement(T.a, {
						className: Z.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: d,
						post: p,
						subredditOrProfile: E
					}), (j || O) && a.a.createElement("div", {
						className: Z.a.flexSpacer
					}), O && a.a.createElement("div", {
						className: Z.a.mediaWrapper
					}, a.a.createElement(M.a, {
						className: Z.a.thumbnailWrapper,
						thumbnailClassName: Z.a.thumbnail,
						thumbnailContainerClassName: Z.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: o && o.postPlaceholderImage
					})), N, a.a.createElement("div", {
						className: Z.a.metaWrapper
					}, a.a.createElement("span", {
						className: Z.a.meta
					}, b.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [b.fbt._plural(p.score, "number", Object(x.b)(p.score))], {
						hk: "2ncFte"
					})), a.a.createElement("span", {
						className: Z.a.meta
					}, b.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [b.fbt._plural(p.numComments, "number", Object(x.b)(p.numComments))], {
						hk: "1QQoSA"
					}))))), a.a.createElement(w.d, null))
				}
			}
			const $ = Object(F.b)(Object(A.a)(Object(C.a)(X)));
			class ee extends a.a.Component {
				render() {
					return a.a.createElement($, this.props)
				}
			}
			var te = s("./node_modules/reselect/es/index.js"),
				se = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ne = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				re = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				ae = s("./src/reddit/models/Vote/index.ts"),
				ie = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				oe = s.n(ie);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const le = Object(m.t)(),
				de = Object(te.c)({
					isFakeSubreddit: m.x
				}),
				me = Object(o.b)(de),
				ue = e => {
					const t = {
						interactive: !1,
						voteState: ae.a.notVoted
					};
					return a.a.createElement("div", {
						className: Object(c.a)(oe.a.emptyVotes, e.className)
					}, a.a.createElement(ne.d, t), a.a.createElement("div", {
						className: Object(c.a)(oe.a.emptyScore, Object(re.b)({
							isLoading: e.isLoading
						}))
					}), a.a.createElement(ne.c, t))
				};
			var pe = le(me(Object(C.a)(({
					className: e,
					isLoading: t,
					showSubreddit: s,
					...n
				}) => a.a.createElement("div", {
					className: Object(c.a)(oe.a.container, J.a.largeAndMediumPostStyles, e)
				}, a.a.createElement("div", {
					className: Object(c.a)(oe.a.thumbnail, Object(re.b)({
						isLoading: t
					}))
				}), a.a.createElement("div", {
					className: oe.a.content
				}, a.a.createElement("div", {
					className: oe.a.titleContainer
				}, a.a.createElement("div", {
					className: Object(c.a)(oe.a.title, Object(re.b)({
						isLoading: t
					}))
				}), a.a.createElement("div", {
					className: Object(c.a)(oe.a.title, Object(re.b)({
						isLoading: t
					}))
				})), s && a.a.createElement(E.a, {
					className: oe.a.subreddit
				}, a.a.createElement(se.a, ce({
					className: Object(c.a)(Object(re.b)({
						isLoading: !1
					}))
				}, n)), a.a.createElement("div", {
					className: Object(c.a)(oe.a.subredditName, Object(re.b)({
						isLoading: t
					}))
				})), a.a.createElement(E.a, null, a.a.createElement(ue, ce({
					isLoading: t
				}, n)), a.a.createElement("div", {
					className: Object(c.a)(oe.a.comments, Object(re.b)({
						isLoading: t
					}))
				}), a.a.createElement("div", {
					className: Object(c.a)(oe.a.share, Object(re.b)({
						isLoading: t
					}))
				}), a.a.createElement("div", {
					className: Object(c.a)(oe.a.ellipsis, Object(re.b)({
						isLoading: t
					}))
				}))))))),
				be = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				he = s.n(be);
			var xe = e => a.a.createElement("div", {
					className: Object(c.a)(he.a.container, e.className)
				}, a.a.createElement("div", {
					className: he.a.largePosts
				}, a.a.createElement(pe, {
					className: he.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), a.a.createElement(pe, {
					className: he.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), a.a.createElement(pe, {
					className: he.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				Ce = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				ge = s.n(Ce);
			const fe = 326,
				ve = 12,
				ye = {
					stiffness: 210,
					damping: 30
				},
				Ee = 100,
				Pe = "post_carousel_item",
				Oe = ({
					root: e,
					handleVisibilityChange: t,
					renderPost: s,
					...r
				}) => {
					const i = s ? s(r) : a.a.createElement(ee, r);
					return a.a.createElement(n.a, {
						root: e,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: t
					}, i)
				},
				ke = Object(o.b)(null, (e, {
					discoveryUnit: t,
					searchDiscoveryUnit: s
				}) => ({
					openOverlay: t => e(Object(u.a)(t.permalink)),
					trackPostClick: (t, n) => e((e, r) => s ? p.w(r(), s, t, n) : null),
					trackPostSubredditClick: n => e((e, r) => t ? p.y(r(), t, n) : s ? p.y(r(), s, n) : null)
				})),
				Ne = Object(m.t)();
			class je extends l.c {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null,
						itemsFitInContainer: !1
					}, this.onClickPost = (e, t) => {
						this.props.openOverlay(t), this.props.trackPostClick(t.id, this.props.searchOptions)
					}, this.itemPostClickEventFactory = (e, t) => {
						const {
							discoveryUnit: s,
							discoveryUnitSubreddit: n,
							listingKey: r,
							pageLayer: a,
							searchDiscoveryUnit: i,
							searchOptions: o
						} = this.props;
						let c;
						return (c = "subreddit" === t && o ? p.K(o, a, r, i) : i && o ? p.L(o, a, r, i) : p.v(s, n))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: n,
							singleSubredditMode: r
						} = this.props;
						return a.a.createElement(Oe, {
							"data-click-id": Pe,
							className: ge.a.largePost,
							eventFactory: this.itemPostClickEventFactory,
							forceLoadMedia: !0,
							isMiniCard: s,
							postId: e,
							onClickPost: this.onClickPost,
							showAuthorBlock: !!r,
							showMetaLine: !1,
							showSubscribeBlock: !r,
							handleVisibilityChange: this.makeVisibilityChangeHandler(t),
							renderPost: n,
							root: this.id,
							key: e
						})
					}, this.renderPosts = e => a.a.createElement("div", {
						className: ge.a.posts,
						style: e
					}, this.props.items.map(this.renderPost)), this.id = "PostsCarousel", this.itemWidth = e.itemWidth
				}
				componentDidMount() {
					super.componentDidMount()
				}
				componentDidUpdate(e, t) {
					if (super.componentDidUpdate(e, t), this.state !== t) {
						const e = Object.keys(this.state.viewableItems).filter(e => !1 === t.viewableItems[e] && !0 === this.state.viewableItems[e]);
						this.trackPostsViewed(this.props, e)
					}
				}
				trackPostsViewed(e, t) {
					e.isLoading || 0 === e.items.length || t.forEach(t => {
						this.props.searchDiscoveryUnit ? e.onPostView(this.props.searchDiscoveryUnit, e.items[t], e.searchOptions, e.listingKey, e.pageLayer) : this.props.discoveryUnit && e.onPostView(this.props.discoveryUnit, e.items[t])
					})
				}
				trackArrowClick() {
					const {
						discoveryUnit: e,
						onArrowClick: t,
						searchDiscoveryUnit: s,
						searchOptions: n
					} = this.props, r = s || e;
					r && t && t(r, n)
				}
				onClickNext() {
					super.onClickNext(), this.trackArrowClick()
				}
				onClickPrev() {
					super.onClickPrev(), this.trackArrowClick()
				}
				render() {
					const {
						isHidden: e,
						leftArrowClassName: t,
						rightArrowClassName: s,
						seed: n,
						shouldSlideIn: r,
						springConfig: o
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return a.a.createElement(xe, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: d = fe
					} = this.props, {
						scrollIndex: m,
						visibleItemsCount: u
					} = this.state, p = this.getMaxScrollIndex(u), b = this.getAdjustment({
						itemWidth: d,
						maxScrollIndex: p,
						scrollIndex: m,
						spacerWidth: ve,
						visibleItemsCount: u
					}), h = e ? Ee : this.getMarginLeft({
						adjustment: b,
						itemWidth: d,
						scrollIndex: m,
						spacerWidth: ve
					});
					return a.a.createElement("div", {
						className: Object(c.a)(ge.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, a.a.createElement(i.Motion, {
						defaultStyle: {
							marginLeft: e || r ? Ee : 0
						},
						style: {
							marginLeft: Object(i.spring)(h, o || ye)
						}
					}, this.renderPosts), 0 !== m && a.a.createElement(l.a, {
						className: Object(c.a)(ge.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: n
					}), !this.state.itemsFitInContainer && (null == p || m < p) && a.a.createElement(l.b, {
						className: Object(c.a)(ge.a.arrowRight, r && !e && ge.a.slideIn, s),
						onClick: this.onClickNext,
						seed: n
					}))
				}
			}
			t.a = Ne(ke(Object(d.c)(je)))
		},
		"./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_2REdLXF0mpSj8m3oeNFnQI",
				textContainer: "_25evCORf3YPgobOP7A0KBH",
				timestamp: "_12ZMpGOwwzQ5LQDmj2sycd",
				authorName: "_2cI137mSn1p19S7GzCn4aj",
				description: "_3WMX64jyXL-FNQ0kNYl267"
			}
		},
		"./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_3w4KSJJGE7TS9xZVlkChNX",
				iconContainer: "_8eVKEiEgNTHopUF8DqZhu",
				separator: "_2dPygXwKlm02lGuxfWM6hJ",
				subscribeIcon: "_3C-lBXRQY9_CCGVZfQJODL",
				subscribeButton: "_26ierA6Rodr6VMGHkKwTPE",
				textContainer: "ZseEDtQar85FcCdC4sPE7",
				timestamp: "_3AdY0o-9CnsxnxO_VDj8Zh",
				icon: "_3YX9w39yU25-vbz-5gk236",
				planetIcon: "f6zRrQi4zqlZ4aoPrzGIN",
				name: "lyBM6dpYVMHQASC9SYGiO",
				subscribers: "uPyUGlwdDzPsq3i6O_w_G",
				right: "_9gZLJghZHrkIQlPvwZYDE",
				visitCommunity: "_1BAg1jhNwLExU7vX1TAvxR",
				description: "_3PWARIYmlsbZulr9sGQAVC",
				descriptionLine: "_2-CpYCxMGuxCYjr8tTgDTR"
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				d = s("./src/reddit/icons/svgs/Close/index.tsx"),
				m = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = s("./src/reddit/selectors/discoveryUnit.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx"),
				h = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts"),
				x = s("./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.m.less"),
				C = s.n(x);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = [], y = () => {}, E = () => void 0, P = c.a.button("CloseButton", C.a), O = Object(i.a)(p.B, e => e.filter(e => 9 === e.length)), k = Object(i.c)({
				discoveryUnit: e => Object(u.c)(e, {
					unitName: m.k
				}),
				postIds: O
			}), N = Object(a.b)(k);
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !0
					}, this.handleCloseClick = () => this.setState({
						isVisible: !1
					}), this.renderPost = e => {
						const {
							discoveryUnit: t
						} = this.props;
						return t ? r.a.createElement(b.a, g({}, e, {
							getSubscribeEventFactory: E,
							onSubredditOrProfileClick: y,
							subscribedProfiles: v,
							subscribedSubreddits: v
						})) : null
					}
				}
				render() {
					const {
						className: e,
						discoveryUnit: t,
						postIds: s
					} = this.props;
					return this.state.isVisible && s.length ? r.a.createElement("div", {
						className: Object(o.a)(C.a.container, e)
					}, r.a.createElement("div", {
						className: C.a.header
					}, r.a.createElement("div", {
						className: C.a.title
					}, f._("Top posts of the week", null, {
						hk: "1qPdO2"
					})), r.a.createElement(P, {
						onClick: this.handleCloseClick
					}, r.a.createElement(d.a, {
						className: C.a.closeIcon
					}))), r.a.createElement("div", {
						className: C.a.body
					}, r.a.createElement(l.a, {
						className: C.a.carousel,
						discoveryUnit: t,
						isLoading: !1,
						items: s,
						itemWidth: h.a,
						leftArrowClassName: C.a.arrow,
						onPostView: y,
						renderPost: this.renderPost,
						rightArrowClassName: C.a.arrow
					}))) : null
				}
			}
			t.default = N(j)
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				d = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			const b = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", p.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
					post: m,
					subredditOrProfile: u
				} = e;
				return a.a.createElement("div", {
					className: Object(i.a)(p.a.container, t)
				}, a.a.createElement(l.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: u.url
				}, a.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: u
				}), a.a.createElement("span", null, u.displayText)), ((e, t) => {
					if (t) return a.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(d.d)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, a.a.createElement(b, null))
				})(m.author, s), u && u.isQuarantined && a.a.createElement(o.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "qxO-jkRl1-0EUFMSW12Wx",
				thumbnail: "_10app6y4qukOnb1vd3WjaL",
				content: "Dmp1nT-wBa1YnTs1m5Qh-",
				titleContainer: "_3zDhT2pkq9c_2I1Wc0TC7W",
				title: "_1baTc1hWul6JGRus85W_n9",
				subreddit: "_1QAmOEgKAW-xepM1iAQ1vt",
				subredditIcon: "_2kjKnQFVUV8rujMRQ0FJcM",
				subredditName: "_1gWkHloK0RuxI3PqEBqAlk",
				comments: "_3Se1TreUiuh_QYZKmggj-E",
				share: "_1auh4Ct-kA4za4GqRMTChm",
				ellipsis: "_3KZqW8v85dlRDNmHXcrU5X",
				emptyScore: "_1vYoQQMevPpZ7Szpl9imM",
				emptyVotes: "zNcTz0MkZAJvitPlo_eI7"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				o = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(o);

			function l(e) {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className)
				}, r.a.createElement(i.a, {
					className: Object(a.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(a.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(a.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				o = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				l = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/hooks/useTracking.ts");
			var m = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(d.a)(),
						a = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(l.a)(t, a, i), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/media.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/video.ts"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/objectSelector/index.ts"),
				v = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.m.less"),
				E = s.n(y);
			const P = Object(p.a)(() => Object(a.c)({
					basePixelMetadata: Object(f.a)((e, {
						post: t
					}) => Object(x.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					currentIndex: (e, {
						post: t
					}) => Object(h.b)(e, t.id),
					buffering: (e, {
						post: t
					}) => Object(C.a)(e, {
						postId: t.id
					}),
					playing: (e, {
						post: t
					}) => Object(C.g)(e, {
						postId: t.id
					}),
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(C.c)(e, {
						postId: t.id
					}),
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(x.i)(e, {
						postId: t.id
					})
				})),
				O = e => {
					const t = Object(v.d)(e.target, e.currentTarget),
						s = Object(v.b)(e.target, e.currentTarget, v.a.buttons);
					return "subreddit" !== t && s
				};
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
						currentIndex: a,
						imageGalleryCurrentItem: l,
						makePostContainerId: d,
						post: u,
						onClick: p,
						onPostContentClick: h,
						sendEvent: x,
						style: C,
						ref: f
					} = this.props, v = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: C,
						ref: f,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => p && p(s, u, t, l))(s), h && O(s) && h(s, u)), u.id && l) {
								const {
									source: e
								} = Object(i.t)(u, l);
								if (e && e.outboundUrl) {
									const t = a + 1;
									x(Object(c.c)(u.id, e.outboundUrl, t))
								}
							}
						},
						className: Object(g.a)(E.a.WrappedPost, n, `Post ${u.id}`, {
							promotedlink: u.isSponsored
						}),
						id: d ? d(u.id) : u.id,
						tabIndex: -1,
						"data-testid": u.id
					}, s), y = !!u.media && u.media.type === b.o.VIDEO;
					return u.isSponsored || y ? r.a.createElement(o.a, {
						post: u,
						trackDisplay: !0
					}, v) : u.media && Object(b.E)(u.media) ? r.a.createElement(m, {
						postId: u.id
					}, v) : v
				}
			}
			t.a = P(Object(v.c)(Object(u.c)(k)))
		},
		"./src/reddit/components/QuarantinedLabel/index.m.less": function(e, t, s) {
			e.exports = {
				quarantineIcon: "_3fdQM74ud_8KssWgeznOrR",
				Container: "_3Ph6ensT9WFRjOg8dQQKJK",
				container: "_3Ph6ensT9WFRjOg8dQQKJK"
			}
		},
		"./src/reddit/components/QuarantinedLabel/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				u = s.n(m);
			const p = ["center", "top"],
				b = ["center", "bottom"],
				h = o.a.div("Container", u.a),
				x = Object(i.a)(c.b),
				C = Object(l.t)({
					isProfileListingPage: l.F
				});
			class g extends a.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						isProfileListingPage: e
					} = this.props;
					if (!e) return null;
					const {
						showTooltip: t
					} = this.state;
					return a.a.createElement(h, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, a.a.createElement(d.a, {
						className: u.a.quarantineIcon
					}), n.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), a.a.createElement(x, {
						text: n.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: p,
						tooltipPosition: b
					}))
				}
			}
			t.a = C(g)
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				r = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				a = s.n(r);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", a.a);
			t.a = i
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
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = s("./src/reddit/contexts/CoreStyleExperiments.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				p = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				b = s.n(p),
				h = s("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = h.a.wrapped(d.a, "Checkmark", b.a),
				g = h.a.wrapped(m.a, "Plus", b.a),
				f = h.a.div("ButtonSpacer", b.a);
			class v extends r.a.Component {
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
						[o.a.Icons]: e
					}) => {
						const {
							className: t,
							identifier: s,
							onSubscribe: n,
							onUnsubscribe: a,
							postId: i,
							sendEvent: d,
							small: m = !1,
							size: p,
							userIsSubscriber: b,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: g,
							onSubscriptionsRequested: f,
							...v
						} = this.props, y = this.state.isHovered, E = Object(u.a)({
							type: s.type,
							key: y ? "unsubscribe" : "subscribed"
						});
						return r.a.createElement(c.q, x({
							className: t,
							priority: v.shouldReverseColor ? c.b.Primary : c.b.Secondary,
							Icon: m || !m && !y ? e ? e => r.a.createElement(l.a, x({
								name: "checkmark"
							}, e)) : C : void 0,
							text: !m && E,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: p || (m ? c.c.XS : c.c.S)
						}, v))
					}, this.renderSubscribeButton = ({
						[o.a.Icons]: e
					}) => {
						const {
							className: t,
							identifier: s,
							onSubscribe: n,
							onUnsubscribe: a,
							postId: i,
							sendEvent: d,
							small: m = !1,
							size: p,
							userIsSubscriber: b,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: C,
							onSubscriptionsRequested: f,
							...v
						} = this.props, y = Object(u.a)({
							type: s.type,
							key: "subscribe"
						});
						return r.a.createElement(c.q, x({
							className: t,
							priority: v.shouldReverseColor ? c.b.Secondary : c.b.Primary,
							Icon: e ? e => r.a.createElement(l.a, x({
								name: "add"
							}, e)) : g,
							size: p || (m ? c.c.XS : c.c.S),
							text: !m && y,
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
					return t ? this.state.hasJustSubscribed || s ? r.a.createElement(o.b.Consumer, null, this.renderUnsubscribeButton) : e ? null : r.a.createElement(f, null) : r.a.createElement(o.b.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(i.a)(Object(a.c)(v))
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/helpers/parseUrl.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => ({
					gallery: a.gallery(e, t, s),
					post: a.post(e, t),
					...a.defaults(e)
				}),
				o = (e, t) => s => ({
					...i(s, e, t),
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: a.media(s, e)
				}),
				c = (e, t, s) => o => {
					const c = Object(r.a)(t);
					return {
						...i(o, e, s),
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...a.media(o, e),
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						}
					}
				},
				l = (e, t) => m(e, !0, t),
				d = (e, t) => m(e, !1, t),
				m = (e, t, s) => r => ({
					...i(r, e, s),
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/icons/fonts/Crosspost/index.m.less": function(e, t, s) {
			e.exports = {
				CrosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn",
				crosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn"
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				o = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: `${Object(a.b)("crosspost",e.isFilled)} ${o.a.CrosspostIcon} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/constants/colors.ts");
			const i = (e, t = "") => `${t}-du-left-${e}`;
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), n = i("b", t), o = i("c", t), c = i("d", t);
				return r.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("defs", null, r.a.createElement("circle", {
					id: n,
					cx: "18",
					cy: "18",
					r: "18"
				}), r.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, r.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), r.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), r.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), r.a.createElement("path", {
					id: o,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), r.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, r.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, r.a.createElement("use", {
					fill: a.b.black,
					filter: `url(#${s})`,
					xlinkHref: `#${n}`
				}), r.a.createElement("use", {
					fill: a.b.white,
					xlinkHref: `#${n}`
				})), r.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, r.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), r.a.createElement("mask", {
					id: c,
					fill: a.b.white
				}, r.a.createElement("use", {
					xlinkHref: `#${o}`
				})), r.a.createElement("use", {
					fill: a.b.black,
					xlinkHref: `#${o}`
				}), r.a.createElement("g", {
					fill: a.b.alienblue,
					mask: `url(#${c})`
				}, r.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/constants/colors.ts");
			const i = (e, t = "") => `${t}-du-right-${e}`;
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), n = i("b", t), o = i("c", t), c = i("d", t);
				return r.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("defs", null, r.a.createElement("circle", {
					id: n,
					cx: "18",
					cy: "18",
					r: "18"
				}), r.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, r.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), r.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), r.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), r.a.createElement("path", {
					id: o,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), r.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, r.a.createElement("g", {
					fillRule: "nonzero",
					transform: "translate(7 4)"
				}, r.a.createElement("use", {
					fill: a.b.black,
					filter: `url(#${s})`,
					xlinkHref: `#${n}`
				}), r.a.createElement("use", {
					fill: a.b.white,
					xlinkHref: `#${n}`
				})), r.a.createElement("g", {
					transform: "rotate(90 9.326 23.5)"
				}, r.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), r.a.createElement("mask", {
					id: c,
					fill: a.b.white
				}, r.a.createElement("use", {
					xlinkHref: `#${o}`
				})), r.a.createElement("use", {
					fill: a.b.black,
					xlinkHref: `#${o}`
				}), r.a.createElement("g", {
					fill: a.b.alienblue,
					mask: `url(#${c})`
				}, r.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(o);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(a.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: a,
					gutter: o,
					...d
				} = e;
				return r.a.createElement("div", l({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, d), r.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: a,
						height: n,
						marginRight: o
					}
				}, Array.isArray(s) && s[0]), r.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.94d4b2e35412dc2c253e.js.map