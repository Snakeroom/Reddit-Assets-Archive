// https://www.redditstatic.com/desktop2x/InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit.b9c0a678d7909430e2a8.js
// Retrieved at 5/5/2020, 1:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"], {
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_22LJahVHZg-w-Ok4e54Ekf",
				arrowIcon: "_2vWDDpepKDRWqekB9vJEi"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return C
			}));
			var a = s("./node_modules/lodash/values.js"),
				n = s.n(a),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/fastdom/index.ts"),
				l = s("./src/reddit/constants/colors.ts");
			const d = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return "".concat(t, "-du-left-").concat(e)
			};
			var m = e => {
				const {
					seed: t = ""
				} = e, s = d("a", t), a = d("b", t), n = d("c", t), i = d("d", t);
				return r.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("defs", null, r.a.createElement("circle", {
					id: a,
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
					id: n,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), r.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, r.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, r.a.createElement("use", {
					fill: l.a.black,
					filter: "url(#".concat(s, ")"),
					xlinkHref: "#".concat(a)
				}), r.a.createElement("use", {
					fill: l.a.white,
					xlinkHref: "#".concat(a)
				})), r.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, r.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), r.a.createElement("mask", {
					id: i,
					fill: l.a.white
				}, r.a.createElement("use", {
					xlinkHref: "#".concat(n)
				})), r.a.createElement("use", {
					fill: l.a.black,
					xlinkHref: "#".concat(n)
				}), r.a.createElement("g", {
					fill: l.a.alienblue,
					mask: "url(#".concat(i, ")")
				}, r.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			};
			const u = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return "".concat(t, "-du-right-").concat(e)
			};
			var p = e => {
					const {
						seed: t = ""
					} = e, s = u("a", t), a = u("b", t), n = u("c", t), i = u("d", t);
					return r.a.createElement("svg", {
						className: e.className,
						onClick: e.onClick,
						viewBox: "4 0 45 45",
						version: "1.1",
						xmlns: "http://www.w3.org/2000/svg"
					}, r.a.createElement("defs", null, r.a.createElement("circle", {
						id: a,
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
						id: n,
						d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
					})), r.a.createElement("g", {
						fill: "none",
						fillRule: "evenodd"
					}, r.a.createElement("g", {
						fillRule: "nonzero",
						transform: "translate(7 4)"
					}, r.a.createElement("use", {
						fill: l.a.black,
						filter: "url(#".concat(s, ")"),
						xlinkHref: "#".concat(a)
					}), r.a.createElement("use", {
						fill: l.a.white,
						xlinkHref: "#".concat(a)
					})), r.a.createElement("g", {
						transform: "rotate(90 9.326 23.5)"
					}, r.a.createElement("path", {
						d: "M0 16h16V0H0z"
					}), r.a.createElement("mask", {
						id: i,
						fill: l.a.white
					}, r.a.createElement("use", {
						xlinkHref: "#".concat(n)
					})), r.a.createElement("use", {
						fill: l.a.black,
						xlinkHref: "#".concat(n)
					}), r.a.createElement("g", {
						fill: l.a.alienblue,
						mask: "url(#".concat(i, ")")
					}, r.a.createElement("path", {
						d: "M0 0h16v16H0z"
					})))))
				},
				h = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				b = s.n(h);
			const x = e => r.a.createElement("button", {
					className: Object(o.a)(b.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(m, {
					className: b.a.arrowIcon,
					seed: e.seed
				})),
				C = e => r.a.createElement("button", {
					className: Object(o.a)(b.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(p, {
					className: b.a.arrowIcon,
					seed: e.seed
				}));
			class g extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						itemsFitInContainer: !1,
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null
					}, this.makeVisibilityChangeHandler = e => t => {
						this.setState({
							viewableItems: Object.assign({}, this.state.viewableItems, {
								[e]: t.isIntersecting && t.intersectionRatio >= .99
							})
						})
					}, this.getVisibleItemsCount = () => {
						return n()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
					}, this.getMaxScrollIndex = e => null != e && this.props.items ? this.props.items.length - e : null, this.getSpacerCount = e => e + 1, this.getMarginLeft = e => {
						let {
							adjustment: t,
							itemWidth: s,
							scrollIndex: a,
							spacerWidth: n = 0
						} = e;
						return t - a * (s + n) + n
					}, this.getAdjustment = e => {
						let {
							itemWidth: t,
							maxScrollIndex: s,
							scrollIndex: a,
							spacerWidth: n = 0,
							visibleItemsCount: i
						} = e, r = 0;
						if (a === s && i) {
							const e = i * t + this.getSpacerCount(i) * n;
							r = (this.container ? this.container.offsetWidth : e) - e
						} else a > 0 && (r = 0);
						return r
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
				doItemsFitInContainer(e) {
					let {
						container: t,
						items: s,
						itemWidth: a,
						spacerWidth: n = 0
					} = e;
					if (!t) return !0;
					const i = s.length * a,
						r = this.getSpacerCount(s.length) * n;
					return t.offsetWidth >= i + r
				}
				onClickNext() {
					const e = this.getVisibleItemsCount(),
						t = this.getMaxScrollIndex(e),
						s = Math.max(1, e),
						a = Math.min(this.state.scrollIndex + s, t);
					this.setState({
						scrollIndex: a,
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
			t.c = g
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var a = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-motion/lib/react-motion.js"),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				d = s("./src/reddit/helpers/overlay/index.ts"),
				m = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./src/lib/isUrl/index.ts"),
				h = s("./src/lib/prettyPrintNumber/index.ts"),
				b = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = s("./src/lib/timeAgo/index.ts"),
				g = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				E = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				P = s.n(E);
			var y = e => {
					const t = g.a.PROFILE,
						s = Object(f.a)(e.author, t);
					return i.a.createElement("div", {
						className: Object(c.a)(P.a.container, e.className)
					}, i.a.createElement(v.a, {
						className: P.a.layout
					}, i.a.createElement("div", {
						className: P.a.textContainer
					}, i.a.createElement("span", {
						className: P.a.description
					}, u.fbt._("posted by", null, {
						hk: "wl0iP"
					})), i.a.createElement(x.a, {
						className: P.a.authorName,
						to: s
					}, Object(f.b)(e.author, t)), i.a.createElement("span", {
						className: P.a.timestamp
					}, Object(C.d)(e.language, e.created / 1e3)))))
				},
				O = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				N = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				k = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				_ = s.n(k);
			var w = e => {
					const t = Object(f.a)(e.name, e.type);
					return i.a.createElement("div", {
						className: Object(c.a)(_.a.container, e.className)
					}, i.a.createElement(N.a, {
						className: _.a.layout
					}, i.a.createElement("div", {
						className: _.a.iconContainer
					}, e.iconUrl ? i.a.createElement("img", {
						className: _.a.icon,
						src: e.iconUrl
					}) : i.a.createElement(O.a, {
						className: _.a.planetIcon,
						"data-redditstyle": !0
					})), i.a.createElement("div", {
						className: _.a.textContainer
					}, i.a.createElement(x.a, {
						className: _.a.name,
						to: t
					}, Object(f.b)(e.displayText || e.name, e.type)), i.a.createElement("span", {
						className: _.a.separator
					}, "•"), i.a.createElement("span", {
						className: _.a.timestamp
					}, Object(C.d)(e.language, e.created / 1e3)))))
				},
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				I = s("./src/reddit/components/Media/index.tsx"),
				L = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				S = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				M = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				W = s("./src/reddit/components/PostContainer/index.tsx"),
				D = s("./src/reddit/components/PostTitle/index.tsx"),
				A = s("./src/reddit/connectors/miniCardPost.ts"),
				U = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				T = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				V = s("./src/reddit/models/Media/index.ts"),
				R = s("./src/reddit/models/Subreddit/index.ts"),
				B = s("./src/reddit/models/Widgets/index.ts"),
				F = s("./src/reddit/components/MiniCardPost/index.m.less"),
				H = s.n(F),
				Q = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				z = s.n(Q),
				G = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				Z = s.n(G);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			class J extends i.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: a,
						crosspostSubredditOrProfile: n,
						eventFactory: r,
						flairStyleTemplate: o,
						forceLoadMedia: l,
						hideNSFWPref: d,
						isMiniCard: m = !0,
						language: b,
						onClickPost: x,
						post: C,
						scrollerItemRef: g,
						shouldPause: f,
						showAuthorBlock: v = !1,
						showMetaLine: E = !0,
						showSubscribeBlock: P = !1,
						subredditOrProfile: O
					} = this.props, {
						media: N
					} = a || C, k = !N && !!C.source && Object(p.a)(C.source.url);
					let _ = N && i.a.createElement(I.a, {
							autoplayPref: e,
							availableWidth: t,
							className: H.a.media,
							forceAspectRatio: V.c,
							imageBoxClassName: H.a.mediaImageBox,
							imageBoxContentImageClassName: H.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: a || C,
							scrollerItemRef: g,
							shouldPause: f,
							shouldLoad: l,
							showCentered: !1,
							showFull: !1
						}),
						A = !1;
					N && _ && (N.type !== V.n.RTJSON && N.type !== V.n.TEXT ? (_ = i.a.createElement("div", {
						className: Z.a.mediaWrapper
					}, _), A = !0) : N && N.content && Object(U.a)(C) && (_ = i.a.createElement("div", {
						className: Z.a.textWrapper
					}, _)));
					const F = !A && !k;
					let Q;
					return O && (Q = Object(R.e)(O) ? Object(B.h)(O) : Object(B.i)(O)), i.a.createElement(W.a, {
						className: Object(c.a)(Z.a.container, z.a.largeAndMediumActiveStyles, z.a.largeAndMediumPostStyles, H.a.postContainer, Object(T.a)(this.props), s),
						post: C,
						onClick: x,
						eventFactory: r,
						style: Object.assign({}, Object(T.b)(this.props.flairStyleTemplate), Object(T.d)(this.props), this.props.style)
					}, i.a.createElement(M.a, {
						className: H.a.backgroundWrapper,
						flairStyleTemplate: o
					}, i.a.createElement("div", {
						className: Object(c.a)(Z.a.innerContainer, H.a.innerContainer)
					}, P && O && i.a.createElement(w, q({
						created: C.created,
						language: b
					}, Q)), v && O && i.a.createElement(y, q({
						created: C.created,
						language: b,
						author: C.author
					}, Q)), i.a.createElement(D.c, {
						className: F ? Z.a.postTitle : Z.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: C,
						size: D.b.Large,
						titleColor: o && o.postTitleColor
					}), E && O && i.a.createElement(L.a, {
						className: Z.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: d,
						post: C,
						subredditOrProfile: O
					}), (A || k) && i.a.createElement("div", {
						className: Z.a.flexSpacer
					}), k && i.a.createElement("div", {
						className: Z.a.mediaWrapper
					}, i.a.createElement(S.a, {
						className: Z.a.thumbnailWrapper,
						thumbnailClassName: Z.a.thumbnail,
						thumbnailContainerClassName: Z.a.thumbnailContainer,
						post: C,
						templatePlaceholderImage: o && o.postPlaceholderImage
					})), _, i.a.createElement("div", {
						className: Z.a.metaWrapper
					}, i.a.createElement("span", {
						className: Z.a.meta
					}, u.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [u.fbt._plural(C.score, "number", Object(h.b)(C.score))], {
						hk: "2ncFte"
					})), i.a.createElement("span", {
						className: Z.a.meta
					}, u.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [u.fbt._plural(C.numComments, "number", Object(h.b)(C.numComments))], {
						hk: "1QQoSA"
					}))))), i.a.createElement(j.d, {
						postId: C.id
					}))
				}
			}
			const Y = Object(A.a)(Object(b.a)(J));
			var X = class extends i.a.Component {
					render() {
						return i.a.createElement(Y, this.props)
					}
				},
				K = s("./node_modules/reselect/es/index.js"),
				$ = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ee = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				te = s("./src/reddit/contexts/PageLayer/index.tsx"),
				se = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				ae = s("./src/reddit/models/Vote/index.ts"),
				ne = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				ie = s.n(ne);

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			var oe = function(e, t) {
				var s = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (s[a[n]] = e[a[n]])
				}
				return s
			};
			const ce = Object(te.t)(),
				le = Object(K.c)({
					isFakeSubreddit: te.x
				}),
				de = Object(o.b)(le),
				me = e => {
					const t = {
						interactive: !1,
						voteState: ae.a.notVoted
					};
					return i.a.createElement("div", {
						className: Object(c.a)(ie.a.emptyVotes, e.className)
					}, i.a.createElement(ee.d, t), i.a.createElement("div", {
						className: Object(c.a)(ie.a.emptyScore, Object(se.b)({
							isLoading: e.isLoading
						}))
					}), i.a.createElement(ee.c, t))
				};
			var ue = ce(de(Object(b.a)(e => {
					var {
						className: t,
						isLoading: s,
						showSubreddit: a
					} = e, n = oe(e, ["className", "isLoading", "showSubreddit"]);
					return i.a.createElement("div", {
						className: Object(c.a)(ie.a.container, z.a.largeAndMediumPostStyles, t)
					}, i.a.createElement("div", {
						className: Object(c.a)(ie.a.thumbnail, Object(se.b)({
							isLoading: s
						}))
					}), i.a.createElement("div", {
						className: ie.a.content
					}, i.a.createElement("div", {
						className: ie.a.titleContainer
					}, i.a.createElement("div", {
						className: Object(c.a)(ie.a.title, Object(se.b)({
							isLoading: s
						}))
					}), i.a.createElement("div", {
						className: Object(c.a)(ie.a.title, Object(se.b)({
							isLoading: s
						}))
					})), a && i.a.createElement(v.a, {
						className: ie.a.subreddit
					}, i.a.createElement($.a, re({
						className: Object(c.a)(Object(se.b)({
							isLoading: !1
						}))
					}, n)), i.a.createElement("div", {
						className: Object(c.a)(ie.a.subredditName, Object(se.b)({
							isLoading: s
						}))
					})), i.a.createElement(v.a, null, i.a.createElement(me, re({
						isLoading: s
					}, n)), i.a.createElement("div", {
						className: Object(c.a)(ie.a.comments, Object(se.b)({
							isLoading: s
						}))
					}), i.a.createElement("div", {
						className: Object(c.a)(ie.a.share, Object(se.b)({
							isLoading: s
						}))
					}), i.a.createElement("div", {
						className: Object(c.a)(ie.a.ellipsis, Object(se.b)({
							isLoading: s
						}))
					}))))
				}))),
				pe = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				he = s.n(pe);
			var be = e => i.a.createElement("div", {
					className: Object(c.a)(he.a.container, e.className)
				}, i.a.createElement("div", {
					className: he.a.largePosts
				}, i.a.createElement(ue, {
					className: he.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), i.a.createElement(ue, {
					className: he.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), i.a.createElement(ue, {
					className: he.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				xe = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				Ce = s.n(xe),
				ge = function(e, t) {
					var s = {};
					for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (s[a[n]] = e[a[n]])
					}
					return s
				};
			const fe = 326,
				ve = 12,
				Ee = {
					stiffness: 210,
					damping: 30
				},
				Pe = 100,
				ye = e => {
					var {
						root: t,
						handleVisibilityChange: s,
						renderPost: n
					} = e, r = ge(e, ["root", "handleVisibilityChange", "renderPost"]);
					const o = n ? n(r) : i.a.createElement(X, r);
					return i.a.createElement(a.a, {
						root: t,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: s
					}, o)
				},
				Oe = Object(o.b)(null, (e, t) => {
					let {
						discoveryUnit: s,
						searchDiscoveryUnit: a
					} = t;
					return {
						openOverlay: t => e(Object(d.a)(t.permalink)),
						trackPostClick: (t, s) => e((e, n) => a ? m.l(n(), a, t, s) : null),
						trackPostSubredditClick: t => e((e, n) => s ? m.n(n(), s, t) : a ? m.n(n(), a, t) : null)
					}
				});
			class Ne extends l.c {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null,
						itemsFitInContainer: !1
					}, this.onClickPost = (e, t) => {
						this.props.openOverlay(t), this.props.trackPostClick(t.id, this.props.searchOptions)
					}, this.itemPostClickEventFactory = e => {
						const {
							discoveryUnit: t,
							discoveryUnitSubreddit: s,
							searchDiscoveryUnit: a
						} = this.props;
						return (a ? m.v() : m.k(t, s))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: a,
							singleSubredditMode: n
						} = this.props;
						return i.a.createElement(ye, {
							className: Ce.a.largePost,
							eventFactory: this.itemPostClickEventFactory,
							forceLoadMedia: !0,
							isMiniCard: s,
							onClickPost: this.onClickPost,
							showAuthorBlock: !!n,
							showMetaLine: !1,
							showSubscribeBlock: !n,
							handleVisibilityChange: this.makeVisibilityChangeHandler(t),
							renderPost: a,
							root: this.id,
							key: e,
							postId: e
						})
					}, this.renderPosts = e => i.a.createElement("div", {
						className: Ce.a.posts,
						style: e
					}, this.props.items.map(this.renderPost)), this.id = "PostsCarousel", this.itemWidth = e.itemWidth
				}
				componentDidMount() {
					super.componentDidMount()
				}
				componentDidUpdate(e, t) {
					super.componentDidUpdate(e, t), this.state !== t && this.trackPostsViewed(this.props)
				}
				componentWillReceiveProps(e) {
					this.props.items !== e.items && this.trackPostsViewed(e)
				}
				trackPostsViewed(e) {
					if (e.isLoading || 0 === e.items.length) return;
					const t = Math.min(this.state.scrollIndex + this.getVisibleItemsCount(), this.props.items.length);
					e.items.slice(this.state.scrollIndex, t).forEach(t => this.props.searchDiscoveryUnit ? e.onPostView(this.props.searchDiscoveryUnit, t, e.searchOptions) : this.props.discoveryUnit ? e.onPostView(this.props.discoveryUnit, t) : null)
				}
				trackArrowClick() {
					const {
						discoveryUnit: e,
						onArrowClick: t,
						searchDiscoveryUnit: s,
						searchOptions: a
					} = this.props, n = s || e;
					n && t && t(n, a)
				}
				onClickNext() {
					super.onClickNext(), this.trackArrowClick(), this.trackPostsViewed(this.props)
				}
				onClickPrev() {
					super.onClickPrev(), this.trackArrowClick(), this.trackPostsViewed(this.props)
				}
				render() {
					const {
						isHidden: e,
						leftArrowClassName: t,
						rightArrowClassName: s,
						seed: a,
						shouldSlideIn: n,
						springConfig: o
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return i.a.createElement(be, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: d = fe
					} = this.props, {
						scrollIndex: m,
						visibleItemsCount: u
					} = this.state, p = this.getMaxScrollIndex(u), h = this.getAdjustment({
						itemWidth: d,
						maxScrollIndex: p,
						scrollIndex: m,
						spacerWidth: ve,
						visibleItemsCount: u
					}), b = e ? Pe : this.getMarginLeft({
						adjustment: h,
						itemWidth: d,
						scrollIndex: m,
						spacerWidth: ve
					});
					return i.a.createElement("div", {
						className: Object(c.a)(Ce.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, i.a.createElement(r.Motion, {
						defaultStyle: {
							marginLeft: e || n ? Pe : 0
						},
						style: {
							marginLeft: Object(r.spring)(b, o || Ee)
						}
					}, this.renderPosts), 0 !== m && i.a.createElement(l.a, {
						className: Object(c.a)(Ce.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: a
					}), !this.state.itemsFitInContainer && (null == p || m < p) && i.a.createElement(l.b, {
						className: Object(c.a)(Ce.a.arrowRight, n && !e && Ce.a.slideIn, s),
						onClick: this.onClickNext,
						seed: a
					}))
				}
			}
			t.a = Oe(Ne)
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
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				d = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			const h = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", p.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: n,
					post: m,
					subredditOrProfile: u
				} = e;
				return i.a.createElement("div", {
					className: Object(r.a)(p.a.container, t)
				}, i.a.createElement(l.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: u.url
				}, i.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: u
				}), i.a.createElement("span", null, u.displayText)), ((e, t) => {
					if (t) return i.a.createElement("div", {
						role: "img",
						"aria-label": a.fbt._("Crossposted by{author}from{community}", [a.fbt._param("author", Object(d.c)(e)), a.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, i.a.createElement(h, null))
				})(m.author, s), u && u.isQuarantined && i.a.createElement(o.a, null))
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/Thumbnail/index.tsx"),
				o = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(o);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return n.a.createElement("div", {
					className: Object(i.a)(c.a.container, e.className)
				}, n.a.createElement(r.a, {
					className: Object(i.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(i.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(i.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		}
	}
]);
//# sourceMappingURL=InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit.b9c0a678d7909430e2a8.js.map