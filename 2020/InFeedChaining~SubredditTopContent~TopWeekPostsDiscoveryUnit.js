// https://www.redditstatic.com/desktop2x/InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit.33cea2eb4200e9e57dd5.js
// Retrieved at 3/14/2020, 5:50:05 PM by Reddit Dataminer v1.0.0
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
			var a = s("./node_modules/lodash/values.js"),
				n = s.n(a),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/colors.ts");
			const l = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return "".concat(t, "-du-left-").concat(e)
			};
			var d = e => {
				const {
					seed: t = ""
				} = e, s = l("a", t), a = l("b", t), n = l("c", t), r = l("d", t);
				return i.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("defs", null, i.a.createElement("circle", {
					id: a,
					cx: "18",
					cy: "18",
					r: "18"
				}), i.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, i.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), i.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), i.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), i.a.createElement("path", {
					id: n,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), i.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, i.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, i.a.createElement("use", {
					fill: c.a.black,
					filter: "url(#".concat(s, ")"),
					xlinkHref: "#".concat(a)
				}), i.a.createElement("use", {
					fill: c.a.white,
					xlinkHref: "#".concat(a)
				})), i.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, i.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), i.a.createElement("mask", {
					id: r,
					fill: c.a.white
				}, i.a.createElement("use", {
					xlinkHref: "#".concat(n)
				})), i.a.createElement("use", {
					fill: c.a.black,
					xlinkHref: "#".concat(n)
				}), i.a.createElement("g", {
					fill: c.a.alienblue,
					mask: "url(#".concat(r, ")")
				}, i.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			};
			const m = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return "".concat(t, "-du-right-").concat(e)
			};
			var p = e => {
					const {
						seed: t = ""
					} = e, s = m("a", t), a = m("b", t), n = m("c", t), r = m("d", t);
					return i.a.createElement("svg", {
						className: e.className,
						onClick: e.onClick,
						viewBox: "4 0 45 45",
						version: "1.1",
						xmlns: "http://www.w3.org/2000/svg"
					}, i.a.createElement("defs", null, i.a.createElement("circle", {
						id: a,
						cx: "18",
						cy: "18",
						r: "18"
					}), i.a.createElement("filter", {
						id: s,
						x: "-33.3%",
						y: "-25%",
						width: "166.7%",
						height: "166.7%"
					}, i.a.createElement("feOffset", {
						dy: "3",
						in: "SourceAlpha",
						result: "shadowOffsetOuter1"
					}), i.a.createElement("feGaussianBlur", {
						in: "shadowOffsetOuter1",
						result: "shadowBlurOuter1"
					}), i.a.createElement("feColorMatrix", {
						in: "shadowBlurOuter1",
						values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
					})), i.a.createElement("path", {
						id: n,
						d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
					})), i.a.createElement("g", {
						fill: "none",
						fillRule: "evenodd"
					}, i.a.createElement("g", {
						fillRule: "nonzero",
						transform: "translate(7 4)"
					}, i.a.createElement("use", {
						fill: c.a.black,
						filter: "url(#".concat(s, ")"),
						xlinkHref: "#".concat(a)
					}), i.a.createElement("use", {
						fill: c.a.white,
						xlinkHref: "#".concat(a)
					})), i.a.createElement("g", {
						transform: "rotate(90 9.326 23.5)"
					}, i.a.createElement("path", {
						d: "M0 16h16V0H0z"
					}), i.a.createElement("mask", {
						id: r,
						fill: c.a.white
					}, i.a.createElement("use", {
						xlinkHref: "#".concat(n)
					})), i.a.createElement("use", {
						fill: c.a.black,
						xlinkHref: "#".concat(n)
					}), i.a.createElement("g", {
						fill: c.a.alienblue,
						mask: "url(#".concat(r, ")")
					}, i.a.createElement("path", {
						d: "M0 0h16v16H0z"
					})))))
				},
				u = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				h = s.n(u);
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return x
			}));
			const b = e => i.a.createElement("button", {
					className: Object(o.a)(h.a.arrow, e.className),
					onClick: e.onClick
				}, i.a.createElement(d, {
					className: h.a.arrowIcon,
					seed: e.seed
				})),
				x = e => i.a.createElement("button", {
					className: Object(o.a)(h.a.arrow, e.className),
					onClick: e.onClick
				}, i.a.createElement(p, {
					className: h.a.arrowIcon,
					seed: e.seed
				}));
			class g extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
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
					}, this.itemsFitInContainer = e => {
						let {
							container: t,
							items: s,
							itemWidth: a,
							spacerWidth: n = 0
						} = e;
						if (!t) return !0;
						const r = s.length * a,
							i = this.getSpacerCount(s.length) * n;
						return t.offsetWidth >= r + i
					}, this.getAdjustment = e => {
						let {
							itemWidth: t,
							maxScrollIndex: s,
							scrollIndex: a,
							spacerWidth: n = 0,
							visibleItemsCount: r
						} = e, i = 0;
						if (a === s && r) {
							const e = r * t + this.getSpacerCount(r) * n;
							i = (this.container ? this.container.offsetWidth : e) - e
						} else a > 0 && (i = 0);
						return i
					}, this.setContainerRef = e => {
						this.container = e
					}, this.id = "", this.onClickNext = this.onClickNext.bind(this), this.onClickPrev = this.onClickPrev.bind(this)
				}
				componentDidMount() {
					const e = this.getVisibleItemsCount();
					this.setState({
						visibleItemsCount: e
					})
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
				r = s.n(n),
				i = s("./node_modules/react-motion/lib/react-motion.js"),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				d = s("./src/reddit/helpers/overlay/index.ts"),
				m = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				p = s("./src/lib/isUrl/index.ts"),
				u = s("./src/lib/prettyPrintNumber/index.ts"),
				h = s("./src/app/strings/index.ts"),
				b = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = s("./src/lib/timeAgo/index.ts"),
				C = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/components/Translated/index.tsx"),
				E = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				P = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				y = s.n(P);
			var O = e => {
					const t = C.a.PROFILE,
						s = Object(E.a)(e.author, t);
					return r.a.createElement("div", {
						className: Object(c.a)(y.a.container, e.className)
					}, r.a.createElement(f.a, {
						className: y.a.layout
					}, r.a.createElement("div", {
						className: y.a.textContainer
					}, r.a.createElement("span", {
						className: y.a.description
					}, r.a.createElement(v.a, {
						msgId: "posts.postedBy"
					})), r.a.createElement(x.a, {
						className: y.a.authorName,
						to: s
					}, Object(E.b)(e.author, t)), r.a.createElement("span", {
						className: y.a.timestamp
					}, Object(g.d)(e.language, e.created / 1e3)))))
				},
				N = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				k = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				j = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				w = s.n(j);
			var _ = e => {
					const t = Object(E.a)(e.name, e.type);
					return r.a.createElement("div", {
						className: Object(c.a)(w.a.container, e.className)
					}, r.a.createElement(k.a, {
						className: w.a.layout
					}, r.a.createElement("div", {
						className: w.a.iconContainer
					}, e.iconUrl ? r.a.createElement("img", {
						className: w.a.icon,
						src: e.iconUrl
					}) : r.a.createElement(N.a, {
						className: w.a.planetIcon,
						"data-redditstyle": !0
					})), r.a.createElement("div", {
						className: w.a.textContainer
					}, r.a.createElement(x.a, {
						className: w.a.name,
						to: t
					}, Object(E.b)(e.displayText || e.name, e.type)), r.a.createElement("span", {
						className: w.a.separator
					}, "•"), r.a.createElement("span", {
						className: w.a.timestamp
					}, Object(g.d)(e.language, e.created / 1e3)))))
				},
				I = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = s("./src/reddit/components/Media/index.tsx"),
				S = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				M = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				D = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				W = s("./src/reddit/components/PostContainer/index.tsx"),
				A = s("./src/reddit/components/PostTitle/index.tsx"),
				T = s("./src/reddit/connectors/miniCardPost.ts"),
				U = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				B = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				V = s("./src/reddit/models/Media/index.ts"),
				R = s("./src/reddit/models/Subreddit/index.ts"),
				H = s("./src/reddit/models/Widgets/index.ts"),
				Q = s("./src/reddit/components/MiniCardPost/index.m.less"),
				F = s.n(Q),
				z = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				G = s.n(z),
				Z = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				q = s.n(Z);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			class Y extends r.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: a,
						crosspostSubredditOrProfile: n,
						eventFactory: i,
						flairStyleTemplate: o,
						forceLoadMedia: l,
						hideNSFWPref: d,
						isMiniCard: m = !0,
						language: b,
						onClickPost: x,
						post: g,
						scrollerItemRef: C,
						shouldPause: v,
						showAuthorBlock: E = !1,
						showMetaLine: f = !0,
						showSubscribeBlock: P = !1,
						subredditOrProfile: y
					} = this.props, {
						media: N
					} = a || g, k = !N && !!g.source && Object(p.a)(g.source.url);
					let j = N && r.a.createElement(L.a, {
							autoplayPref: e,
							availableWidth: t,
							className: F.a.media,
							forceAspectRatio: V.c,
							imageBoxClassName: F.a.mediaImageBox,
							imageBoxContentImageClassName: F.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: a || g,
							scrollerItemRef: C,
							shouldPause: v,
							shouldLoad: l,
							showCentered: !1,
							showFull: !1
						}),
						w = !1;
					N && j && (N.type !== V.n.RTJSON && N.type !== V.n.TEXT ? (j = r.a.createElement("div", {
						className: q.a.mediaWrapper
					}, j), w = !0) : N && N.content && Object(U.a)(g) && (j = r.a.createElement("div", {
						className: q.a.textWrapper
					}, j)));
					const T = !w && !k;
					let Q;
					return y && (Q = Object(R.e)(y) ? Object(H.h)(y) : Object(H.i)(y)), r.a.createElement(W.a, {
						className: Object(c.a)(q.a.container, G.a.largeAndMediumActiveStyles, G.a.largeAndMediumPostStyles, F.a.postContainer, Object(B.a)(this.props), s),
						post: g,
						onClick: x,
						eventFactory: i,
						style: Object.assign({}, Object(B.b)(this.props.flairStyleTemplate), Object(B.d)(this.props), this.props.style)
					}, r.a.createElement(D.a, {
						className: F.a.backgroundWrapper,
						flairStyleTemplate: o
					}, r.a.createElement("div", {
						className: Object(c.a)(q.a.innerContainer, F.a.innerContainer)
					}, P && y && r.a.createElement(_, J({
						created: g.created,
						language: b
					}, Q)), E && y && r.a.createElement(O, J({
						created: g.created,
						language: b,
						author: g.author
					}, Q)), r.a.createElement(A.c, {
						className: T ? q.a.postTitle : q.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: g,
						size: A.b.Large,
						titleColor: o && o.postTitleColor
					}), f && y && r.a.createElement(S.a, {
						className: q.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: d,
						language: b,
						post: g,
						subredditOrProfile: y
					}), (w || k) && r.a.createElement("div", {
						className: q.a.flexSpacer
					}), k && r.a.createElement("div", {
						className: q.a.mediaWrapper
					}, r.a.createElement(M.a, {
						className: q.a.thumbnailWrapper,
						thumbnailClassName: q.a.thumbnail,
						thumbnailContainerClassName: q.a.thumbnailContainer,
						post: g,
						templatePlaceholderImage: o && o.postPlaceholderImage
					})), j, r.a.createElement("div", {
						className: q.a.metaWrapper
					}, r.a.createElement("span", {
						className: q.a.meta
					}, Object(h.b)(b, "posts.points.noun", g.score, {
						count: Object(u.b)(g.score)
					})), r.a.createElement("span", {
						className: q.a.meta
					}, Object(h.b)(b, "posts.comments.noun", g.numComments, {
						count: Object(u.b)(g.numComments)
					}))))), r.a.createElement(I.d, {
						postId: g.id
					}))
				}
			}
			const X = Object(T.a)(Object(b.a)(Y));
			var K = class extends r.a.Component {
					render() {
						return r.a.createElement(X, this.props)
					}
				},
				$ = s("./node_modules/reselect/es/index.js"),
				ee = s("./src/reddit/components/SubredditIcon/index.tsx"),
				te = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				se = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ae = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				ne = s("./src/reddit/models/Vote/index.ts"),
				re = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				ie = s.n(re);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ce = function(e, t) {
				var s = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (s[a[n]] = e[a[n]])
				}
				return s
			};
			const le = Object(se.t)(),
				de = Object($.c)({
					isFakeSubreddit: se.x
				}),
				me = Object(o.b)(de),
				pe = e => {
					const t = {
						interactive: !1,
						voteState: ne.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(c.a)(ie.a.emptyVotes, e.className)
					}, r.a.createElement(te.d, t), r.a.createElement("div", {
						className: Object(c.a)(ie.a.emptyScore, Object(ae.b)({
							isLoading: e.isLoading
						}))
					}), r.a.createElement(te.c, t))
				};
			var ue = le(me(Object(b.a)(e => {
					var {
						className: t,
						isLoading: s,
						showSubreddit: a
					} = e, n = ce(e, ["className", "isLoading", "showSubreddit"]);
					return r.a.createElement("div", {
						className: Object(c.a)(ie.a.container, G.a.largeAndMediumPostStyles, t)
					}, r.a.createElement("div", {
						className: Object(c.a)(ie.a.thumbnail, Object(ae.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: ie.a.content
					}, r.a.createElement("div", {
						className: ie.a.titleContainer
					}, r.a.createElement("div", {
						className: Object(c.a)(ie.a.title, Object(ae.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(c.a)(ie.a.title, Object(ae.b)({
							isLoading: s
						}))
					})), a && r.a.createElement(f.a, {
						className: ie.a.subreddit
					}, r.a.createElement(ee.a, oe({
						className: Object(c.a)(Object(ae.b)({
							isLoading: !1
						}))
					}, n)), r.a.createElement("div", {
						className: Object(c.a)(ie.a.subredditName, Object(ae.b)({
							isLoading: s
						}))
					})), r.a.createElement(f.a, null, r.a.createElement(pe, oe({
						isLoading: s
					}, n)), r.a.createElement("div", {
						className: Object(c.a)(ie.a.comments, Object(ae.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(c.a)(ie.a.share, Object(ae.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(c.a)(ie.a.ellipsis, Object(ae.b)({
							isLoading: s
						}))
					}))))
				}))),
				he = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				be = s.n(he);
			var xe = e => r.a.createElement("div", {
					className: Object(c.a)(be.a.container, e.className)
				}, r.a.createElement("div", {
					className: be.a.largePosts
				}, r.a.createElement(ue, {
					className: be.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(ue, {
					className: be.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(ue, {
					className: be.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				ge = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				Ce = s.n(ge),
				ve = function(e, t) {
					var s = {};
					for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (s[a[n]] = e[a[n]])
					}
					return s
				};
			const Ee = 326,
				fe = 12,
				Pe = {
					stiffness: 210,
					damping: 30
				},
				ye = 100,
				Oe = e => {
					var {
						root: t,
						handleVisibilityChange: s,
						renderPost: n
					} = e, i = ve(e, ["root", "handleVisibilityChange", "renderPost"]);
					const o = n ? n(i) : r.a.createElement(K, i);
					return r.a.createElement(a.a, {
						root: t,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: s
					}, o)
				},
				Ne = Object(o.b)(null, (e, t) => {
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
			class ke extends l.c {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null
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
						return r.a.createElement(Oe, {
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
					}, this.renderPosts = e => r.a.createElement("div", {
						className: Ce.a.posts,
						style: e
					}, this.props.items.map(this.renderPost)), this.id = "PostsCarousel"
				}
				componentDidMount() {
					super.componentDidMount()
				}
				componentDidUpdate(e, t) {
					this.state !== t && this.trackPostsViewed(this.props)
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
					if (this.props.isLoading || 0 === this.props.items.length) return r.a.createElement(xe, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: d = Ee
					} = this.props, {
						scrollIndex: m,
						visibleItemsCount: p
					} = this.state, u = this.getMaxScrollIndex(p), h = this.getAdjustment({
						itemWidth: d,
						maxScrollIndex: u,
						scrollIndex: m,
						spacerWidth: fe,
						visibleItemsCount: p
					}), b = e ? ye : this.getMarginLeft({
						adjustment: h,
						itemWidth: d,
						scrollIndex: m,
						spacerWidth: fe
					}), x = this.itemsFitInContainer({
						container: this.container,
						items: this.props.items,
						itemWidth: d,
						spacerWidth: fe
					});
					return r.a.createElement("div", {
						className: Object(c.a)(Ce.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, r.a.createElement(i.Motion, {
						defaultStyle: {
							marginLeft: e || n ? ye : 0
						},
						style: {
							marginLeft: Object(i.spring)(b, o || Pe)
						}
					}, this.renderPosts), 0 !== m && r.a.createElement(l.a, {
						className: Object(c.a)(Ce.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: a
					}), !x && (null == u || m < u) && r.a.createElement(l.b, {
						className: Object(c.a)(Ce.a.arrowRight, n && !e && Ce.a.slideIn, s),
						onClick: this.onClickNext,
						seed: a
					}))
				}
			}
			t.a = Ne(ke)
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/app/strings/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				d = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			const h = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", u.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: a,
					language: m,
					post: p,
					subredditOrProfile: b
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(u.a.container, t)
				}, n.a.createElement(l.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, n.a.createElement(c.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: a,
					subredditOrProfile: b
				}), n.a.createElement("span", null, b.displayText)), ((e, t, s) => {
					if (s) return n.a.createElement("div", {
						role: "img",
						"aria-label": Object(r.a)(e, "posts.crosspostedByFrom", {
							by: Object(d.c)(t),
							from: s.displayText
						})
					}, n.a.createElement(h, null))
				})(m, p.author, s), b && b.isQuarantined && n.a.createElement(o.a, null))
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
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				o = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(o);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return n.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className)
				}, n.a.createElement(i.a, {
					className: Object(r.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(r.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(r.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
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
//# sourceMappingURL=InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit.33cea2eb4200e9e57dd5.js.map