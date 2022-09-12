// https://www.redditstatic.com/desktop2x/SubredditTopContent~TopWeekPostsDiscoveryUnit.e0bea50db5c8bc1acbd3.js
// Retrieved at 9/12/2022, 3:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditTopContent~TopWeekPostsDiscoveryUnit"], {
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Media/index.ts"),
				r = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(r);
			t.a = function(e) {
				var t;
				const {
					source: s,
					isSponsored: r,
					domainOverride: o,
					callToAction: i
				} = e;
				let c = "";
				if (r) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == i ? void 0 : i.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					c = o || Object(n.D)(e)
				} else c = Object(n.D)(e);
				const d = a.a.parse(c),
					l = d.path || "",
					u = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (d.hostname ? d.hostname.replace("www.", "") : "") + u
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const a = [r.wc, r.sb, r.C, r.S, r.nb, r.Vb],
				o = {
					[r.Vb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.nb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.S]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.C]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.sb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.wc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[r.Vb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.nb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.S]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.C]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.sb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.wc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.sb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.wc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.wc]: "",
						[r.sb]: "",
						[r.C]: "",
						[r.S]: "",
						[r.nb]: "",
						[r.Vb]: ""
					};
				let u = d - c;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of a) {
					const e = Math.floor(u / n);
					e && (l[n] = (t ? i : o)[n](e).toString()), u -= e * n
				}
				const m = a.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? m : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const r = "INCONTEXT__BANNED",
				a = "INCONTEXT__MUTED",
				o = Object(n.a)(r),
				i = Object(n.a)(a)
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = "SUBREDDIT__MODERATION_LOG_LOADED",
				r = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_22LJahVHZg-w-Ok4e54Ekf",
				arrowIcon: "_2vWDDpepKDRWqekB9vJEi"
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
				o = s("./node_modules/react-motion/lib/react-motion.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./node_modules/lodash/values.js"),
				m = s.n(u),
				p = s("./src/lib/fastdom/index.ts"),
				h = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx"),
				b = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx"),
				g = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				f = s.n(g);
			const v = e => a.a.createElement("button", {
					className: Object(d.a)(f.a.arrow, e.className),
					onClick: e.onClick
				}, a.a.createElement(h.a, {
					className: f.a.arrowIcon,
					seed: e.seed
				})),
				y = e => a.a.createElement("button", {
					className: Object(d.a)(f.a.arrow, e.className),
					onClick: e.onClick
				}, a.a.createElement(b.a, {
					className: f.a.arrowIcon,
					seed: e.seed
				}));
			class x extends a.a.Component {
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
						return m()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
					}, this.getMaxScrollIndex = e => null != e && this.props.items ? this.props.items.length - e : null, this.getSpacerCount = e => e + 1, this.getMarginLeft = e => {
						let {
							adjustment: t,
							itemWidth: s,
							scrollIndex: n,
							spacerWidth: r = 0
						} = e;
						return t - n * (s + r) + r
					}, this.getAdjustment = e => {
						let {
							itemWidth: t,
							maxScrollIndex: s,
							scrollIndex: n,
							spacerWidth: r = 0,
							visibleItemsCount: a
						} = e, o = 0;
						if (n === s && a) {
							const e = a * t + this.getSpacerCount(a) * r;
							o = (this.container ? this.container.offsetWidth : e) - e
						} else n > 0 && (o = 0);
						return o
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
					p.a.read(() => {
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
						itemWidth: n,
						spacerWidth: r = 0
					} = e;
					if (!t) return !0;
					const a = s.length * n,
						o = this.getSpacerCount(s.length) * r;
					return t.offsetWidth >= a + o
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
			var O = x,
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/clickSourceData/index.ts"),
				w = s("./src/reddit/helpers/overlay/index.ts"),
				E = s("./src/reddit/helpers/path/index.ts"),
				I = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				_ = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				P = s("./node_modules/fbt/lib/FbtPublic.js"),
				N = s("./src/lib/prettyPrintNumber/index.ts"),
				S = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				L = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				T = s("./src/reddit/constants/posts.ts"),
				M = s("./src/lib/constants/index.ts"),
				D = s("./src/reddit/components/HumanDate/index.tsx"),
				A = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				F = s("./src/reddit/hooks/useClickSourceData.ts"),
				W = s("./src/reddit/layout/row/Inline/index.tsx"),
				V = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				R = s.n(V);
			var B = e => {
					const t = T.a.PROFILE,
						s = Object(A.a)(e.author, t),
						n = Object(F.a)();
					return a.a.createElement("div", {
						className: Object(d.a)(R.a.container, e.className)
					}, a.a.createElement(W.a, {
						className: R.a.layout
					}, a.a.createElement("div", {
						className: R.a.textContainer
					}, a.a.createElement("span", {
						className: R.a.description
					}, P.fbt._("posted by", null, {
						hk: "wl0iP"
					})), e.author === M.F ? a.a.createElement("span", {
						className: R.a.authorName
					}, Object(A.b)(e.author, t)) : a.a.createElement(L.a, {
						className: R.a.authorName,
						to: {
							pathname: s,
							state: n
						}
					}, Object(A.b)(e.author, t)), a.a.createElement("span", {
						className: R.a.timestamp
					}, a.a.createElement(D.d, {
						seconds: e.created / M.Vb
					})))))
				},
				U = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				H = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				Q = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				q = s.n(Q);
			var z = e => {
					const t = Object(A.a)(e.name, e.type);
					return a.a.createElement("div", {
						className: Object(d.a)(q.a.container, e.className)
					}, a.a.createElement(H.a, {
						className: q.a.layout
					}, a.a.createElement("div", {
						className: q.a.iconContainer
					}, e.iconUrl ? a.a.createElement("img", {
						className: q.a.icon,
						src: e.iconUrl
					}) : a.a.createElement(U.a, {
						className: q.a.planetIcon,
						"data-redditstyle": !0
					})), a.a.createElement("div", {
						className: q.a.textContainer
					}, a.a.createElement(L.a, {
						"data-click-id": "subreddit",
						className: q.a.name,
						to: t
					}, Object(A.b)(e.displayText || e.name, e.type)), a.a.createElement("span", {
						className: q.a.separator
					}, "•"), a.a.createElement("span", {
						className: q.a.timestamp
					}, a.a.createElement(D.d, {
						seconds: e.created / M.Vb
					})))))
				},
				K = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				G = s("./src/reddit/components/Media/index.tsx"),
				Z = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				Y = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				J = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				X = s("./src/reddit/components/PostContainer/index.tsx"),
				$ = s("./src/reddit/components/PostTitle/index.tsx"),
				ee = s("./src/reddit/connectors/miniCardPost.ts"),
				te = s("./src/reddit/contexts/Post/index.tsx"),
				se = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				ne = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				re = s("./src/reddit/helpers/widgets/index.tsx"),
				ae = s("./src/reddit/models/Media/index.ts"),
				oe = s("./src/reddit/models/Post/index.ts"),
				ie = s("./src/reddit/models/Subreddit/index.ts"),
				ce = s("./src/reddit/components/MiniCardPost/index.m.less"),
				de = s.n(ce),
				le = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ue = s.n(le),
				me = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				pe = s.n(me);

			function he() {
				return (he = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class be extends a.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: n,
						crosspostSubredditOrProfile: r,
						eventFactory: o,
						flairStyleTemplate: i,
						forceLoadMedia: c,
						hideNSFWPref: l,
						isMiniCard: u = !0,
						onClickPost: m,
						post: p,
						scrollerItemRef: h,
						shouldPause: b,
						showAuthorBlock: g = !1,
						showMetaLine: f = !0,
						showSubscribeBlock: v = !1,
						subredditOrProfile: y
					} = this.props, {
						media: x
					} = n || p, O = Object(oe.p)(p);
					let j = x && a.a.createElement(G.a, {
							autoplayPref: e,
							availableWidth: t,
							className: de.a.media,
							forceAspectRatio: ae.c,
							imageBoxClassName: de.a.mediaImageBox,
							imageBoxContentImageClassName: de.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: u,
							isNotCardView: !0,
							post: n || p,
							scrollerItemRef: h,
							shouldPause: b,
							shouldLoad: c,
							showCentered: !1,
							showFull: !1
						}),
						C = !1;
					x && j && (x.type !== ae.o.RTJSON && x.type !== ae.o.TEXT ? (j = a.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, j), C = !0) : x && x.content && Object(se.a)(p) && (j = a.a.createElement("div", {
						className: pe.a.textWrapper
					}, j)));
					const k = !C && !O;
					let w;
					return y && (w = Object(ie.h)(y) ? Object(re.b)(y) : Object(re.c)(y)), a.a.createElement(X.a, {
						className: Object(d.a)(pe.a.container, ue.a.largeAndMediumActiveStyles, ue.a.largeAndMediumPostStyles, de.a.postContainer, Object(ne.a)(this.props), s),
						post: p,
						onClick: m,
						eventFactory: o,
						style: {
							...Object(ne.b)(this.props.flairStyleTemplate),
							...Object(ne.d)(this.props),
							...this.props.style
						},
						"data-click-id": this.props["data-click-id"]
					}, a.a.createElement(J.a, {
						className: de.a.backgroundWrapper,
						flairStyleTemplate: i
					}, a.a.createElement("div", {
						className: Object(d.a)(pe.a.innerContainer, de.a.innerContainer)
					}, v && y && a.a.createElement(z, he({
						created: p.created
					}, w)), g && y && a.a.createElement(B, he({
						created: p.created,
						author: p.author
					}, w)), a.a.createElement($.c, {
						className: k ? pe.a.postTitle : pe.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: $.b.Large,
						titleColor: i && i.postTitleColor
					}), f && y && a.a.createElement(Z.a, {
						className: pe.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: l,
						post: p,
						subredditOrProfile: y
					}), (C || O) && a.a.createElement("div", {
						className: pe.a.flexSpacer
					}), O && a.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, a.a.createElement(Y.a, {
						className: pe.a.thumbnailWrapper,
						thumbnailClassName: pe.a.thumbnail,
						thumbnailContainerClassName: pe.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: i && i.postPlaceholderImage
					})), j, a.a.createElement("div", {
						className: pe.a.metaWrapper
					}, a.a.createElement("span", {
						className: pe.a.meta
					}, P.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [P.fbt._plural(p.score, "number", Object(N.b)(p.score))], {
						hk: "2ncFte"
					})), a.a.createElement("span", {
						className: pe.a.meta
					}, P.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [P.fbt._plural(p.numComments, "number", Object(N.b)(p.numComments))], {
						hk: "1QQoSA"
					}))))), a.a.createElement(K.d, null))
				}
			}
			const ge = Object(te.b)(Object(ee.a)(Object(S.a)(be)));
			class fe extends a.a.Component {
				render() {
					return a.a.createElement(ge, this.props)
				}
			}
			var ve = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ye = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				xe = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				Oe = s("./src/reddit/models/Vote/index.ts"),
				je = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				Ce = s.n(je);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const we = Object(C.u)(),
				Ee = Object(c.c)({
					isFakeSubreddit: C.z
				}),
				Ie = Object(i.b)(Ee),
				_e = e => {
					const t = {
						interactive: !1,
						voteState: Oe.a.notVoted
					};
					return a.a.createElement("div", {
						className: Object(d.a)(Ce.a.emptyVotes, e.className)
					}, a.a.createElement(ye.d, t), a.a.createElement("div", {
						className: Object(d.a)(Ce.a.emptyScore, Object(xe.b)({
							isLoading: e.isLoading
						}))
					}), a.a.createElement(ye.c, t))
				};
			var Pe = we(Ie(Object(S.a)(e => {
					let {
						className: t,
						isLoading: s,
						showSubreddit: n,
						...r
					} = e;
					return a.a.createElement("div", {
						className: Object(d.a)(Ce.a.container, ue.a.largeAndMediumPostStyles, t)
					}, a.a.createElement("div", {
						className: Object(d.a)(Ce.a.thumbnail, Object(xe.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Ce.a.content
					}, a.a.createElement("div", {
						className: Ce.a.titleContainer
					}, a.a.createElement("div", {
						className: Object(d.a)(Ce.a.title, Object(xe.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Object(d.a)(Ce.a.title, Object(xe.b)({
							isLoading: s
						}))
					})), n && a.a.createElement(W.a, {
						className: Ce.a.subreddit
					}, a.a.createElement(ve.a, ke({
						className: Object(d.a)(Object(xe.b)({
							isLoading: !1
						}))
					}, r)), a.a.createElement("div", {
						className: Object(d.a)(Ce.a.subredditName, Object(xe.b)({
							isLoading: s
						}))
					})), a.a.createElement(W.a, null, a.a.createElement(_e, ke({
						isLoading: s
					}, r)), a.a.createElement("div", {
						className: Object(d.a)(Ce.a.comments, Object(xe.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Object(d.a)(Ce.a.share, Object(xe.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Object(d.a)(Ce.a.ellipsis, Object(xe.b)({
							isLoading: s
						}))
					}))))
				}))),
				Ne = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				Se = s.n(Ne);
			var Le = e => a.a.createElement("div", {
					className: Object(d.a)(Se.a.container, e.className)
				}, a.a.createElement("div", {
					className: Se.a.largePosts
				}, a.a.createElement(Pe, {
					className: Se.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), a.a.createElement(Pe, {
					className: Se.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), a.a.createElement(Pe, {
					className: Se.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				Te = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				Me = s.n(Te);
			const De = 326,
				Ae = 12,
				Fe = {
					stiffness: 210,
					damping: 30
				},
				We = 100,
				Ve = "post_carousel_item",
				Re = e => {
					let {
						root: t,
						handleVisibilityChange: s,
						renderPost: r,
						...o
					} = e;
					const i = r ? r(o) : a.a.createElement(fe, o);
					return a.a.createElement(n.a, {
						root: t,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: s
					}, i)
				},
				Be = Object(c.c)({
					isBlockingInterstitialEnabled: _.b,
					isBlockingInterstitialV2Enabled: _.c
				}),
				Ue = Object(i.b)(Be, (e, t) => {
					let {
						discoveryUnit: s,
						searchDiscoveryUnit: n,
						pageLayer: r
					} = t;
					return {
						openOverlay: t => e(Object(w.a)({
							pathname: Object(E.b)(t.permalink),
							state: Object(k.b)(r)
						})),
						trackPostClick: (t, s) => e((e, r) => n ? I.p(r(), n, t, s) : null),
						trackPostSubredditClick: t => e((e, r) => s ? I.r(r(), s, t) : n ? I.r(r(), n, t) : null),
						showModalOnPostLinkClick: t => e(Object(l.bb)(Object(E.b)(t.permalink), t.id))
					}
				}),
				He = Object(C.u)();
			t.a = He(Ue(Object(j.c)(class extends O {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null,
						itemsFitInContainer: !1
					}, this.onClickPost = (e, t) => {
						this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled ? (e.preventDefault(), this.props.showModalOnPostLinkClick(t)) : this.props.openOverlay(t), this.props.trackPostClick(t.id, this.props.searchOptions)
					}, this.itemPostClickEventFactory = (e, t) => {
						const {
							discoveryUnit: s,
							discoveryUnitSubreddit: n,
							listingKey: r,
							pageLayer: a,
							searchDiscoveryUnit: o,
							searchOptions: i
						} = this.props;
						let c;
						return (c = "subreddit" === t && i ? I.y(i, a, r, o) : o && i ? I.z(i, a, null, r, o) : I.o(s, n))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: n,
							singleSubredditMode: r
						} = this.props;
						return a.a.createElement(Re, {
							"data-click-id": Ve,
							className: Me.a.largePost,
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
						className: Me.a.posts,
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
						springConfig: i
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return a.a.createElement(Le, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: c = De
					} = this.props, {
						scrollIndex: l,
						visibleItemsCount: u
					} = this.state, m = this.getMaxScrollIndex(u), p = this.getAdjustment({
						itemWidth: c,
						maxScrollIndex: m,
						scrollIndex: l,
						spacerWidth: Ae,
						visibleItemsCount: u
					}), h = e ? We : this.getMarginLeft({
						adjustment: p,
						itemWidth: c,
						scrollIndex: l,
						spacerWidth: Ae
					});
					return a.a.createElement("div", {
						className: Object(d.a)(Me.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, a.a.createElement(o.Motion, {
						defaultStyle: {
							marginLeft: e || r ? We : 0
						},
						style: {
							marginLeft: Object(o.spring)(h, i || Fe)
						}
					}, this.renderPosts), 0 !== l && a.a.createElement(v, {
						className: Object(d.a)(Me.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: n
					}), !this.state.itemsFitInContainer && (null == m || l < m) && a.a.createElement(y, {
						className: Object(d.a)(Me.a.arrowRight, r && !e && Me.a.slideIn, s),
						onClick: this.onClickNext,
						seed: n
					}))
				}
			})))
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				u = s("./src/reddit/icons/fonts/index.tsx"),
				m = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
					post: m,
					subredditOrProfile: h
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(p.a.container, t)
				}, a.a.createElement(d.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: h.url
				}, a.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: h
				}), a.a.createElement("span", null, h.displayText)), ((e, t) => {
					if (t) return a.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(l.e)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, a.a.createElement(u.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(m.author, s), h && h.isQuarantined && a.a.createElement(i.a, null))
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
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);

			function d(e) {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className)
				}, r.a.createElement(o.a, {
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
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/components/HumanDate/index.tsx"),
				a = s("./src/lib/timeUntil/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", i.a.createElement(r.d, {
					seconds: e.poll.endsAt / n.Vb
				}))], {
					hk: "3OERID"
				}) : Object(a.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, s) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
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
				o = s("./src/lib/ads/index.ts"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						a = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						o = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, a, o), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/objectSelector/index.ts"),
				y = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				x = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				O = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				j = s("./src/reddit/components/PostContainer/index.m.less"),
				C = s.n(j);
			const k = Object(p.a)(() => Object(a.c)({
					basePixelMetadata: Object(v.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(b.b)(e, s.id)
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
						return Object(b.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(g.d)(e).pageType
				})),
				w = "post-container";
			class E extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: a,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: b,
						style: g,
						ref: v,
						shouldAddGalleryViewability: y = !0
					} = this.props, x = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: g,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => m && m(s, l, t, a, p))(s), l.id && a) {
								const {
									source: e
								} = Object(o.t)(l, a);
								e && e.outboundUrl && b(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(C.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": w,
						id: d ? d(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": O.a.BACKGROUND
					}, s), j = !!l.media && l.media.type === h.o.VIDEO;
					return (e => l.media && Object(h.E)(l.media) && y ? r.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || j ? r.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(x))
				}
			}
			t.a = k(Object(x.a)(Object(y.a)(Object(m.c)(E))))
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				blur: "_1Y3R-LNfq0EOkZUcePSt1j",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return F
			})), s.d(t, "a", (function() {
				return Z
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				g = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/helpers/path/index.ts"),
				y = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				x = s("./src/reddit/hooks/useClickSourceData.ts"),
				O = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				j = s("./src/reddit/hooks/usePostContext.ts"),
				C = s("./src/reddit/hooks/useTheme.ts"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				w = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				_ = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				P = s("./src/lib/getShortenedLink.ts"),
				N = s("./src/reddit/components/FlairWrapper/index.tsx"),
				S = s("./node_modules/fbt/lib/FbtPublic.js"),
				L = s("./src/lib/prettyPrintNumber/index.ts"),
				T = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				M = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				D = s.n(M);
			const A = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var F, W = Object(i.b)(A)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(O.a)() ? null : o.a.createElement("div", {
						className: Object(u.a)(e.className, D.a.proposalMetaData)
					}, o.a.createElement("span", null, S.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [S.fbt._param("count", Object(L.a)(n)), S.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(T.a, {
						className: D.a.proposalExpiry,
						poll: t
					}))
				})),
				V = s("./src/reddit/components/SEOTitle/index.tsx"),
				R = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				B = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				H = s("./src/telemetry/models/Outbound.ts"),
				Q = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				q = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				z = s("./src/reddit/components/PostTitle/index.m.less"),
				K = s.n(z);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(F || (F = {}));
			const Z = e => {
					let {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: r,
						children: a,
						className: i,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const l = Object(C.a)();
					let m = "";
					switch (t) {
						case F.ExtraLarge:
							m = K.a.ExtraLarge;
							break;
						case F.Large:
							m = K.a.Large;
							break;
						case F.Medium:
							m = K.a.Medium;
							break;
						case F.Small:
							m = K.a.Small;
							break;
						case F.ExtraSmall:
							m = K.a.ExtraSmall;
							break;
						case F.Metadata:
							m = K.a.Metadata
					}
					return o.a.createElement("div", {
						className: Object(u.a)(K.a.Title, i, m, {
							[K.a.isNoWrap]: r,
							[K.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": s || Object(_.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, n ? o.a.createElement(V.b, {
						type: n
					}, a) : a)
				},
				Y = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: n,
						children: r,
						...a
					} = e;
					return o.a.createElement(c.a, G({}, a, {
						className: Object(u.a)(t, K.a.styledLink, {
							[K.a.isVisitedEnabled]: !s
						})
					}), r)
				},
				J = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: n,
						children: r
					} = e;
					return o.a.createElement("div", {
						className: Object(u.a)(K.a.titleContainer, n, {
							[K.a.isNoWrap]: s,
							[K.a.isVisitedEnabled]: !t
						})
					}, r)
				},
				X = Object(d.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(p.q)(e, {
							pageLayer: s
						})
					},
					isNsfwBlurSubreddit: B.e,
					shouldOpenPostInNewTab: U.jb
				}),
				$ = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, r = Object(i.d)(), a = Object(x.a)(), c = Object(i.e)(R.b), d = Object(i.e)(R.c), u = e => {
						!c && !d || t.media && Object(E.H)(t.media) || (e.preventDefault(), r(Object(f.bb)(Object(v.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(J, {
						nowrap: e.nowrap
					}, o.a.createElement(ee, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(h.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, o.a.createElement(ee, e)); {
						const r = t.media && Object(E.H)(t.media) ? Object(y.c)(t.id, s.name) : t.permalink,
							i = e.isCommentPermalink ? Object(v.b)(r) : Object(g.a)(r, void 0, a);
						return o.a.createElement(J, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return s ? o.a.createElement(h.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, o.a.createElement(ee, t)) : o.a.createElement(ee, t)
						})(t, e) : o.a.createElement(Y, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i,
							onClick: u
						}, o.a.createElement(ee, e)))
					}
				},
				ee = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let r = e.format ? e.format(n) : n.title;
					s && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const a = e.isCommentsPage ? V.a.PostComments : V.a.PostItem,
						i = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return o.a.createElement(Z, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: i,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && o.a.createElement(N.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent
					}), r)
				},
				te = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: n
					} = e, {
						isSponsored: r
					} = n, a = e.isCommentsPage ? H.SourceElement.PostLink : H.SourceElement.ListingPostLink;
					if (Object(O.a)()) return null;
					if (s && n.isNSFW) return null;
					const i = !t && !e.isCrosspost && e.size !== F.Large && !n.isSponsored && !(n.media && Object(E.H)(n.media)) && (n.source || n.media && (n.media.type === E.o.GIFVIDEO || n.media.type === E.o.IMAGE || n.media.type === E.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return o.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(E.D)(n),
							isSponsored: r,
							postId: n.id,
							source: n.source,
							sourceElement: a
						}, Object(P.a)(n), !n.isSponsored && o.a.createElement(k.a, {
							name: "external_link",
							className: K.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== F.Large && e.size !== F.ExtraLarge) return o.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: r,
						postId: n.id,
						source: n.source,
						sourceElement: a
					}, Object(P.a)(n), !n.isSponsored && o.a.createElement(k.a, {
						name: "external_link",
						className: K.a.outboundLinkIcon
					}));
					return null
				};
			class se extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${K.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(r.c)(.45,Object(_.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(r.c)(.45,this.props.titleColor||Object(_.a)(this.props).titleText,Object(_.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(r.c)(.45,Object(_.a)(this.props).bodyText,Object(_.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: r,
						isOverlay: a,
						poll: i,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: m
					} = this.props, p = s === w.b.Left, h = Object(N.b)(c), {
						leftFlair: b,
						rightFlair: g
					} = Object(Q.a)({
						flair: h,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), f = !a && !r && !t, v = f && b && b.length > 0, y = f && g && g.length > 0;
					return o.a.createElement("div", {
						className: Object(u.a)(K.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": q.a.TITLE,
						onClick: m
					}, !d && v && o.a.createElement(N.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(I.b)(c) && o.a.createElement($, G({}, this.props, {
						leftFlair: d ? b : void 0
					})), i && o.a.createElement(W, {
						className: K.a.pollMeta,
						pollId: i.id
					}), o.a.createElement(te, this.props), y && o.a.createElement(N.a, {
						isFlairFilter: !0,
						titleFlair: g,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), o.a.createElement("div", {
						className: K.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${n.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(p.eb)(),
					s = Object(p.w)(t),
					n = Object(j.a)(),
					r = Object(i.e)(r => X(r, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					a = Object(C.a)(),
					c = Object(m.b)();
				return n ? o.a.createElement(se, G({
					pageLayer: t,
					isCommentPermalink: s
				}, n, r, e, {
					theme: a,
					sendEvent: c
				})) : null
			}))
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
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				m = s.n(u);
			const p = ["center", "top"],
				h = ["center", "bottom"],
				b = i.a.div("Container", m.a),
				g = Object(o.a)(c.b),
				f = Object(d.u)({
					isProfileListingPage: d.I
				});
			class v extends a.a.Component {
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
					return a.a.createElement(b, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, a.a.createElement(l.a, {
						className: m.a.quarantineIcon
					}), n.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), a.a.createElement(g, {
						text: n.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: p,
						tooltipPosition: h
					}))
				}
			}
			t.a = f(v)
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
			const o = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", a.a);
			t.a = o
		},
		"./src/reddit/hooks/useIsRemovedOrDeletedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/selectors/removedPosts.ts");
			const a = () => Object(n.e)(e => Object(r.d)(e))
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s("./src/lib/CSSVariableProvider/index.tsx");

			function a() {
				return Object(n.useContext)(r.b)
			}
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
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
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/constants/colors.ts");
			const o = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-left-${e}`
			};
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = o("a", t), n = o("b", t), i = o("c", t), c = o("d", t);
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
					id: i,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), r.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, r.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, r.a.createElement("use", {
					fill: a.a.black,
					filter: `url(#${s})`,
					xlinkHref: `#${n}`
				}), r.a.createElement("use", {
					fill: a.a.white,
					xlinkHref: `#${n}`
				})), r.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, r.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), r.a.createElement("mask", {
					id: c,
					fill: a.a.white
				}, r.a.createElement("use", {
					xlinkHref: `#${i}`
				})), r.a.createElement("use", {
					fill: a.a.black,
					xlinkHref: `#${i}`
				}), r.a.createElement("g", {
					fill: a.a.alienblue,
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
			const o = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-right-${e}`
			};
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = o("a", t), n = o("b", t), i = o("c", t), c = o("d", t);
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
					id: i,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), r.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, r.a.createElement("g", {
					fillRule: "nonzero",
					transform: "translate(7 4)"
				}, r.a.createElement("use", {
					fill: a.a.black,
					filter: `url(#${s})`,
					xlinkHref: `#${n}`
				}), r.a.createElement("use", {
					fill: a.a.white,
					xlinkHref: `#${n}`
				})), r.a.createElement("g", {
					transform: "rotate(90 9.326 23.5)"
				}, r.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), r.a.createElement("mask", {
					id: c,
					fill: a.a.white
				}, r.a.createElement("use", {
					xlinkHref: `#${i}`
				})), r.a.createElement("use", {
					fill: a.a.black,
					xlinkHref: `#${i}`
				}), r.a.createElement("g", {
					fill: a.a.alienblue,
					mask: `url(#${c})`
				}, r.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, s) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/Inline/index.m.less"),
				a = s.n(r);
			t.a = n.a.div("inlineRow", a.a)
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
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
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
					gutter: i,
					...l
				} = e;
				return r.a.createElement("div", d({
					className: Object(o.a)(c.a.expandRightContainer, t)
				}, l), r.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: a,
						height: n,
						marginRight: i
					}
				}, Array.isArray(s) && s[0]), r.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				r = s("./src/reddit/actions/subredditModeration/constants.ts");
			var a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.g:
						case r.f:
							return null;
						case r.e:
							return t.payload;
						default:
							return e
					}
				},
				o = s("./src/reddit/models/SubredditModeration/index.ts");
			const i = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.g: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, r = Object(o.e)(s, n);
							return {
								...e,
								[r]: !0
							}
						}
						case r.f:
						case r.e: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, r = Object(o.e)(s, n);
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				d = Object(n.c)({
					error: a,
					pending: c
				});
			const l = {};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.f: {
						const {
							fetchedToken: s,
							subredditId: n
						} = t.payload, r = Object(o.e)(n, s);
						return {
							...e,
							[r]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.f: {
							const {
								subredditId: e,
								after: s
							} = t.payload;
							return {
								[e]: s
							}
						}
						default:
							return e
					}
				},
				h = s("./node_modules/icepick/icepick.js");
			const b = {};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.d:
					case r.f: {
						const {
							subredditId: s,
							approvedSubmitters: n
						} = t.payload, r = {
							[s]: n
						};
						return Object(h.merge)(e, r)
					}
					case r.k: {
						const {
							subredditId: s,
							userId: n
						} = t.payload;
						return Object(h.unsetIn)(e, [s, n])
					}
					default:
						return e
				}
			};
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.j:
					case r.i:
						return null;
					case r.h:
						return t.payload;
					default:
						return e
				}
			};
			var v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.j:
							return !0;
						case r.i:
						case r.h:
							return !1;
						default:
							return e
					}
				},
				y = Object(n.c)({
					error: f,
					pending: v
				});
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.j:
							return null;
						case r.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				O = Object(n.c)({
					api: y,
					result: x
				});
			const j = {};
			var C = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.f: {
							const {
								subredditId: s,
								approvedSubmitterIds: n
							} = t.payload;
							return e[s] ? {
								...e,
								[s]: [...e[s], ...n]
							} : {
								...e,
								[s]: n
							}
						}
						case r.k: {
							const {
								subredditId: s,
								userId: n
							} = t.payload;
							return {
								[s]: e[s].filter(e => e !== n)
							}
						}
						case r.d: {
							const {
								subredditId: s,
								approvedSubmitterIds: n
							} = t.payload, r = n[0];
							return r && e[s] && -1 === e[s].indexOf(r) ? {
								[s]: [r, ...e[s]]
							} : e
						}
						default:
							return e
					}
				},
				k = Object(n.c)({
					api: d,
					fetchedTokens: u,
					loadMore: p,
					models: g,
					search: O,
					userOrder: C
				});
			var w = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.n:
					case r.m:
						return null;
					case r.l:
						return t.payload;
					default:
						return e
				}
			};
			const E = {};
			var I = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.n: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, r = Object(o.f)(s, n);
							return {
								...e,
								[r]: !0
							}
						}
						case r.m:
						case r.l: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, r = Object(o.f)(s, n);
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				_ = Object(n.c)({
					error: w,
					pending: I
				});
			const P = {};
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.m: {
						const {
							fetchedToken: s,
							subredditId: n
						} = t.payload, r = Object(o.f)(n, s);
						return {
							...e,
							[r]: !0
						}
					}
					default:
						return e
				}
			};
			const S = {};
			var L = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.m: {
						const {
							subredditId: e,
							loadMoreToken: s
						} = t.payload;
						return {
							[e]: s
						}
					}
					default:
						return e
				}
			};
			const T = {};
			var M = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.m: {
							const {
								subredditId: s,
								approvedTalkHosts: n,
								forceRefresh: r
							} = t.payload, a = {
								[s]: [...r ? [] : e[s] || [], ...n]
							};
							return Object(h.merge)(e, a)
						}
						case r.o: {
							const {
								subredditId: s,
								userId: n
							} = t.payload, r = {
								[s]: e[s].filter(e => e.redditor.id !== n)
							};
							return Object(h.merge)(e, r)
						}
						default:
							return e
					}
				},
				D = Object(n.c)({
					api: _,
					fetchedTokens: N,
					loadMore: L,
					models: M
				}),
				A = s("./src/reddit/actions/grantUserFlair/constants.ts");
			var F = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.g:
					case A.i:
						return null;
					case A.f:
						return t.payload;
					default:
						return e
				}
			};
			var W = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.i:
							return !0;
						case A.g:
						case A.f:
							return !1;
						default:
							return e
					}
				},
				V = Object(n.c)({
					error: F,
					pending: W
				}),
				R = s("./node_modules/lodash/merge.js"),
				B = s.n(R),
				U = s("./node_modules/lodash/omit.js"),
				H = s.n(U);
			const Q = {};
			var q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.g:
					case A.k: {
						const {
							subredditId: s,
							flairedUsers: n
						} = t.payload;
						return B()({
							...e
						}, {
							[s]: n
						})
					}
					case A.c: {
						const {
							subredditId: s,
							userName: n
						} = t.payload, r = H()(e[s], n);
						return {
							...e,
							[s]: r
						}
					}
					case A.a:
					case A.b:
					case A.h:
						const {
							subredditId: s, userName: n, applied: r
						} = t.payload;
						return r ? {
							...e,
							[s]: {
								...e[s],
								[n]: r
							}
						} : e;
					default:
						return e
				}
			};
			const z = {};
			var K = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.g: {
						const {
							key: s,
							pageInfo: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			var G = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.l:
					case A.k:
						return null;
					case A.j:
						return t.payload;
					default:
						return e
				}
			};
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.l:
							return !0;
						case A.k:
						case A.j:
							return !1;
						default:
							return e
					}
				},
				Y = Object(n.c)({
					error: G,
					pending: Z
				});
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case A.c: {
							const {
								userName: s
							} = t.payload;
							return e === s ? null : e
						}
						default:
							return e
					}
				},
				X = Object(n.c)({
					api: Y,
					result: J
				});
			const $ = {};
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.g: {
							const {
								key: s,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[s]: n
							}
						}
						case A.a: {
							const {
								key: s,
								userName: n
							} = t.payload;
							if (!s) return e;
							if (!e[s].includes(n)) {
								const t = [...e[s], n];
								return {
									...e,
									[s]: t
								}
							}
							return e
						}
						case A.c: {
							const {
								userName: s
							} = t.payload, n = {};
							for (const t in e) n[t] = e[t].filter(e => e !== s);
							return n
						}
						default:
							return e
					}
				},
				te = Object(n.c)({
					api: V,
					models: q,
					pageInfo: K,
					search: X,
					userOrder: ee
				}),
				se = s("./src/reddit/actions/moderationLog/constants.ts");
			const ne = {};
			var re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case se.b: {
						const {
							actionIds: s,
							key: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[n]: s
							}
						}
					}
					default:
						return e
				}
			};
			const ae = {};
			var oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case se.b: {
							const {
								normalizedModerationLog: s,
								subredditId: n
							} = t.payload, r = {};
							s.forEach(e => {
								r[e.id] = e
							});
							const a = {
								[n]: r
							};
							return B()({
								...e
							}, a)
						}
						default:
							return e
					}
				},
				ie = Object(n.c)({
					itemOrder: re,
					models: oe
				});
			var ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case se.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const de = {};
			var le = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case se.b: {
						const {
							hasNextPage: s,
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const ue = {};
			var me = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case se.b: {
						const {
							hasPreviousPage: s,
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const pe = [];
			var he = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case se.a: {
						const {
							normalizedModerators: s,
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			var be = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case se.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				ge = Object(n.c)({
					actions: ie,
					endCursor: ce,
					hasNextPage: le,
					hasPreviousPage: me,
					moderators: he,
					startCursor: be
				});
			const fe = {};
			var ve = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.O:
					case r.y: {
						const {
							subredditId: s,
							moderators: n
						} = t.payload.response || t.payload, r = {
							[s]: n
						};
						return Object(h.merge)(e, r)
					}
					case r.C: {
						const {
							subredditId: s,
							userId: n,
							permissions: r
						} = t.payload;
						return Object(h.setIn)(e, [s, n, "modPermissions"], r)
					}
					case r.jb: {
						const {
							subredditId: s,
							userId: n
						} = t.payload;
						return Object(h.unsetIn)(e, [s, n])
					}
					default:
						return e
				}
			};
			const ye = {};
			var xe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.z:
					case r.y: {
						const {
							key: s,
							subredditId: n
						} = t.payload;
						return n ? {
							...e,
							[s]: null
						} : e
					}
					case r.x: {
						const {
							error: s,
							key: n,
							subredditId: r
						} = t.payload;
						return r ? {
							...e,
							[n]: s
						} : e
					}
					default:
						return e
				}
			};
			const Oe = {};
			var je = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.x:
						case r.y: {
							const {
								subredditId: s,
								key: n
							} = t.payload;
							return s ? {
								...e,
								[n]: !1
							} : e
						}
						case r.z: {
							const {
								subredditId: s,
								key: n
							} = t.payload;
							return s ? {
								...e,
								[n]: !0
							} : e
						}
						default:
							return e
					}
				},
				Ce = Object(n.c)({
					error: xe,
					pending: je
				});
			const ke = {};
			var we = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.y: {
							const {
								subredditId: s,
								response: n,
								key: r
							} = t.payload;
							return Object(h.setIn)(e, [s, r], n.moderatorIds)
						}
						case r.jb: {
							const {
								subredditId: s,
								userId: n,
								key: r
							} = t.payload, a = e[s][r].filter(e => e !== n);
							return Object(h.setIn)(e, [s, r], a)
						}
						default:
							return e
					}
				},
				Ee = Object(n.c)({
					data: we,
					api: Ce
				});
			var Ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.F:
					case r.E:
						return null;
					case r.D:
						return t.payload;
					default:
						return e
				}
			};
			var _e = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.E:
						case r.D:
							return !1;
						case r.F:
							return !0;
						default:
							return e
					}
				},
				Pe = Object(n.c)({
					error: Ie,
					pending: _e
				});
			const Ne = {};
			var Se = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.E: {
						const {
							subredditId: s,
							moderators: n
						} = t.payload;
						return Object(h.set)(e, s, n)
					}
					case r.gb: {
						const {
							subredditId: s,
							userId: n
						} = t.payload;
						return Object(h.unsetIn)(e, [s, n])
					}
					case r.c: {
						const s = t.payload,
							{
								subredditId: n,
								moderators: r
							} = s,
							a = {
								[n]: r
							};
						return Object(h.merge)(e, a)
					}
					default:
						return e
				}
			};
			const Le = {};
			var Te = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Le,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.E: {
							const {
								subredditId: s,
								moderatorIds: n
							} = t.payload;
							return {
								...e,
								[s]: n
							}
						}
						case r.gb: {
							const {
								subredditId: s,
								userId: n
							} = t.payload, r = e[s].filter(e => e !== n);
							return {
								...e,
								[s]: r
							}
						}
						case r.c: {
							const s = t.payload,
								{
									subredditId: n,
									moderatorIds: r
								} = s,
								a = [...e[n] || [], ...r];
							return {
								...e,
								[n]: a
							}
						}
						default:
							return e
					}
				},
				Me = Object(n.c)({
					api: Pe,
					models: Se,
					userOrder: Te
				});
			const De = {};
			var Ae = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.L: {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							invitePending: r
						} = n, a = {
							[s]: r
						};
						return Object(h.merge)(e, a)
					}
					case r.I:
					case r.J: {
						const {
							subredditId: s
						} = t.payload;
						return Object(h.unset)(e, s)
					}
					default:
						return e
				}
			};
			const Fe = {};
			var We = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.y: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Ve = {};
			var Re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ve,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.L: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Be = {};
			var Ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.L: {
						const {
							response: s
						} = t.payload, n = {
							[s.subredditId]: s.moderators
						};
						return Object(h.merge)({
							...e
						}, n)
					}
					case r.C: {
						const s = t.payload,
							{
								subredditId: n,
								userId: r,
								permissions: a
							} = s;
						return e[n] && e[n][r] ? Object(h.setIn)(e, [n, r, "modPermissions"], a) : e
					}
					default:
						return e
				}
			};
			var He = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.P:
					case r.O:
						return null;
					case r.N:
						return t.payload;
					default:
						return e
				}
			};
			var Qe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.P:
							return !0;
						case r.O:
						case r.N:
							return !1;
						default:
							return e
					}
				},
				qe = Object(n.c)({
					error: He,
					pending: Qe
				}),
				ze = s("./node_modules/lodash/isEqual.js"),
				Ke = s.n(ze);
			var Ge = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.P:
						case r.N:
						case r.jb:
							return null;
						case r.O: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case r.C: {
							const {
								userId: s,
								permissions: n
							} = t.payload;
							return e && e.id === s && !Ke()(e.modPermissions, n) ? {
								...e,
								modPermissions: n
							} : e
						}
						default:
							return e
					}
				},
				Ze = Object(n.c)({
					api: qe,
					result: Ge
				});
			const Ye = {};
			var Je = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ye,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.M:
					case r.L: {
						const {
							subredditId: s,
							key: n
						} = t.payload;
						return s ? {
							...e,
							[n]: null
						} : e
					}
					case r.K: {
						const {
							error: s,
							subredditId: n,
							key: r
						} = t.payload;
						return n ? {
							...e,
							[r]: s
						} : e
					}
					default:
						return e
				}
			};
			const Xe = {};
			var $e = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.K:
						case r.L: {
							const {
								subredditId: s,
								key: n
							} = t.payload;
							return s ? {
								...e,
								[n]: !1
							} : e
						}
						case r.M: {
							const {
								subredditId: s,
								key: n
							} = t.payload;
							return s ? {
								...e,
								[n]: !0
							} : e
						}
						default:
							return e
					}
				},
				et = Object(n.c)({
					error: Je,
					pending: $e
				});
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const tt = {};
			var st = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.L: {
							const {
								response: s,
								subredditId: n,
								key: r
							} = t.payload, {
								moderatorIds: a
							} = s;
							return Object(h.merge)(e, {
								[n]: {
									[r]: a
								}
							})
						}
						case r.jb: {
							const {
								subredditId: s,
								userId: n
							} = t.payload, r = {
								...e[s]
							};
							return Object.keys(e[s]).forEach(t => {
								const a = e[s][t].filter(e => e !== n);
								r[t] = a
							}), Object(h.set)(e, s, r)
						}
						default:
							return e
					}
				},
				nt = Object(n.c)({
					data: st,
					api: et
				}),
				rt = Object(n.c)({
					editableModerators: ve,
					editableUserOrder: Ee,
					invitedModerators: Me,
					invitePending: Ae,
					loadMoreModerators: Re,
					loadMoreEditableModerators: We,
					models: Ue,
					search: Ze,
					userOrder: nt
				}),
				at = s("./src/reddit/actions/bulkActions/constants.ts");
			var ot = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.c:
						case at.b:
							return null;
						case at.a:
							return t.payload;
						default:
							return e
					}
				},
				it = s("./src/reddit/actions/modQueue/constants.ts");
			var ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.c:
							return !0;
						case at.b:
						case at.a:
						case it.s:
						case it.r:
							return !1;
						default:
							return e
					}
				},
				dt = Object(n.c)({
					error: ot,
					pending: ct
				});
			const lt = {};
			var ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.a: {
							const {
								ids: s
							} = t.payload, n = {};
							return s.forEach(e => n[e] = !0), {
								...e,
								...n
							}
						}
						case it.d: {
							const {
								ids: s
							} = t.payload;
							return H()(e, s)
						}
						case it.c: {
							const {
								ids: e
							} = t.payload, s = {};
							return e.forEach(e => s[e] = !0), s
						}
						default:
							return e
					}
				},
				mt = s("./src/reddit/models/ModQueue/index.ts");
			const pt = {};
			var ht = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.b: {
							const {
								operation: e,
								ids: s
							} = t.payload;
							return "approve" === e ? pt : {
								[mt.c[e]]: s
							}
						}
						default:
							return e
					}
				},
				bt = Object(n.c)({
					api: dt,
					selectedItems: ut,
					undoLastAction: ht
				});
			var gt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.g:
					case it.f:
						return null;
					case it.e:
						return t.payload;
					default:
						return e
				}
			};
			var ft = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.g:
							return !0;
						case it.f:
						case it.e:
							return !1;
						default:
							return e
					}
				},
				vt = Object(n.c)({
					error: gt,
					pending: ft
				});
			const yt = {};
			var xt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.f: {
						const {
							listingKey: s,
							page: n,
							response: r
						} = t.payload, {
							modqueue: a
						} = r;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[n]: a
							}
						}
					}
					default:
						return e
				}
			};
			const Ot = {};
			var jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.f: {
							const {
								listingKey: s,
								response: n
							} = t.payload, {
								modqueue: r
							} = n, a = r[r.length - 1] || null;
							return {
								...e,
								[s]: a
							}
						}
						default:
							return e
					}
				},
				Ct = Object(n.c)({
					api: vt,
					itemOrder: xt,
					loadMore: jt
				}),
				kt = s("./src/reddit/actions/pages/modListing/constants.ts");
			var wt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kt.e: {
						const s = t.payload,
							{
								moderatingSubreddits: n
							} = s;
						return n ? null : e
					}
					case it.i:
					case it.f:
					case it.m:
					case it.p:
					case it.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: s
						} = e;
						return s
					}
					case it.k: {
						const e = t.payload,
							{
								moderatedAfter: s
							} = e;
						return s
					}
					default:
						return e
				}
			};
			const Et = [];
			var It = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Et,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.i:
					case it.f:
					case it.m:
					case it.p:
					case it.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: s
						} = e;
						return s
					}
					case it.k: {
						const s = t.payload,
							{
								listingOrder: n
							} = s;
						return [...e, ...n]
					}
					case kt.e: {
						const s = t.payload,
							{
								listingOrder: n
							} = s;
						return n || e
					}
					default:
						return e
				}
			};
			var _t = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.b:
						return !0;
					default:
						return e
				}
			};
			var Pt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.k:
							return !0;
						case it.b:
							return !1;
						default:
							return e
					}
				},
				Nt = Object(n.c)({
					after: wt,
					data: It,
					loaded: _t,
					pending: Pt
				});
			var St = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.j:
					case it.i:
						return null;
					case it.h:
						return t.payload;
					default:
						return e
				}
			};
			var Lt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.j:
							return !0;
						case it.i:
						case it.h:
							return !1;
						default:
							return e
					}
				},
				Tt = Object(n.c)({
					error: St,
					pending: Lt
				});
			const Mt = {};
			var Dt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.i: {
						const {
							listingKey: s,
							page: n,
							response: r
						} = t.payload, {
							modqueue: a
						} = r;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[n]: a
							}
						}
					}
					default:
						return e
				}
			};
			const At = {};
			var Ft = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : At,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.i: {
							const {
								listingKey: s,
								response: n
							} = t.payload, {
								modqueue: r
							} = n, a = r[r.length - 1] || null;
							return {
								...e,
								[s]: a
							}
						}
						default:
							return e
					}
				},
				Wt = Object(n.c)({
					api: Tt,
					itemOrder: Dt,
					loadMore: Ft
				});
			var Vt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.n:
					case it.m:
						return null;
					case it.l:
						return t.payload;
					default:
						return e
				}
			};
			var Rt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.n:
							return !0;
						case it.m:
						case it.l:
							return !1;
						default:
							return e
					}
				},
				Bt = Object(n.c)({
					error: Vt,
					pending: Rt
				});
			const Ut = {};
			var Ht = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ut,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.m: {
						const {
							listingKey: s,
							page: n,
							response: r
						} = t.payload, {
							modqueue: a
						} = r;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[n]: a
							}
						}
					}
					default:
						return e
				}
			};
			const Qt = {};
			var qt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.m: {
							const {
								listingKey: s,
								response: n
							} = t.payload, {
								modqueue: r
							} = n, a = r[r.length - 1] || null;
							return {
								...e,
								[s]: a
							}
						}
						default:
							return e
					}
				},
				zt = Object(n.c)({
					api: Bt,
					itemOrder: Ht,
					loadMore: qt
				});
			var Kt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.q:
					case it.p:
						return null;
					case it.o:
						return t.payload;
					default:
						return e
				}
			};
			var Gt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.q:
							return !0;
						case it.p:
						case it.o:
							return !1;
						default:
							return e
					}
				},
				Zt = Object(n.c)({
					error: Kt,
					pending: Gt
				});
			const Yt = {};
			var Jt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.p: {
						const {
							listingKey: s,
							page: n,
							response: r
						} = t.payload, {
							modqueue: a
						} = r;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[n]: a
							}
						}
					}
					default:
						return e
				}
			};
			const Xt = {};
			var $t = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.p: {
							const {
								listingKey: s,
								response: n
							} = t.payload, {
								modqueue: r
							} = n, a = r[r.length - 1] || null;
							return {
								...e,
								[s]: a
							}
						}
						default:
							return e
					}
				},
				es = Object(n.c)({
					api: Zt,
					itemOrder: Jt,
					loadMore: $t
				});
			var ts = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.w:
					case it.v:
						return null;
					case it.u:
						return t.payload;
					default:
						return e
				}
			};
			var ss = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.w:
							return !0;
						case it.v:
						case it.u:
							return !1;
						default:
							return e
					}
				},
				ns = Object(n.c)({
					error: ts,
					pending: ss
				});
			const rs = {};
			var as = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rs,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.v: {
						const {
							listingKey: s,
							page: n,
							response: r
						} = t.payload, {
							modqueue: a
						} = r;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[n]: a
							}
						}
					}
					default:
						return e
				}
			};
			const os = {};
			var is = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : os,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.v: {
							const {
								listingKey: s,
								response: n
							} = t.payload, {
								modqueue: r
							} = n, a = r[r.length - 1] || null;
							return {
								...e,
								[s]: a
							}
						}
						default:
							return e
					}
				},
				cs = Object(n.c)({
					api: ns,
					itemOrder: as,
					loadMore: is
				}),
				ds = Object(n.c)({
					bulkAction: bt,
					edited: Ct,
					moderatedCommunitiesOrder: Nt,
					modqueue: Wt,
					reports: zt,
					spam: es,
					unmoderated: cs
				});
			var ls = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.Y:
					case r.W:
						return null;
					case r.V:
						return t.payload;
					default:
						return e
				}
			};
			const us = {};
			var ms = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : us,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.Y: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, r = Object(o.e)(s, n);
							return {
								...e,
								[r]: !0
							}
						}
						case r.W:
						case r.V: {
							const {
								subredditId: s,
								fetchedToken: n
							} = t.payload, r = Object(o.e)(s, n);
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				ps = Object(n.c)({
					error: ls,
					pending: ms
				});
			const hs = {};
			var bs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.W: {
							const {
								fetchedToken: s,
								subredditId: n
							} = t.payload, r = Object(o.e)(n, s);
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				gs = s("./src/reddit/actions/inContextModeration.ts");
			var fs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gs.b:
						return t.payload;
					default:
						return e
				}
			};
			const vs = {};
			var ys = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vs,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.W: {
						const {
							subredditId: e,
							after: s
						} = t.payload;
						return {
							[e]: s
						}
					}
					default:
						return e
				}
			};
			const xs = {};
			var Os = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xs,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.X:
					case r.W: {
						const {
							subredditId: s,
							mutedUsers: n
						} = t.payload, r = {
							[s]: n
						};
						return Object(h.merge)(e, r)
					}
					case r.cb: {
						const {
							subredditId: s,
							userId: n
						} = t.payload;
						return Object(h.unsetIn)(e, [s, n])
					}
					default:
						return e
				}
			};
			var js = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.bb:
					case r.ab:
						return null;
					case r.Z:
						return t.payload;
					default:
						return e
				}
			};
			var Cs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.bb:
							return !0;
						case r.ab:
						case r.Z:
							return !1;
						default:
							return e
					}
				},
				ks = Object(n.c)({
					error: js,
					pending: Cs
				});
			var ws = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.bb:
						case r.Z:
							return null;
						case r.ab: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				Es = Object(n.c)({
					api: ks,
					result: ws
				});
			const Is = {};
			var _s = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Is,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.W: {
							const {
								subredditId: s,
								mutedUserIds: n
							} = t.payload;
							return e[s] ? {
								...e,
								[s]: [...e[s], ...n]
							} : {
								...e,
								[s]: n
							}
						}
						case r.cb: {
							const {
								subredditId: s,
								userId: n
							} = t.payload;
							return {
								[s]: e[s].filter(e => e !== n)
							}
						}
						case r.X: {
							const {
								subredditId: s,
								mutedUserIds: n
							} = t.payload, r = n[0];
							return r && e[s] && -1 === e[s].indexOf(r) ? {
								[s]: [r, ...e[s]]
							} : e
						}
						default:
							return e
					}
				},
				Ps = Object(n.c)({
					api: ps,
					fetchedTokens: bs,
					inContext: fs,
					loadMore: ys,
					models: Os,
					search: Es,
					userOrder: _s
				});
			t.a = Object(n.c)({
				approvedSubmitters: k,
				approvedTalkHosts: D,
				flairedUsers: te,
				moderationLog: ge,
				moderators: rt,
				modQueue: ds,
				muted: Ps
			})
		},
		"./src/reddit/selectors/removedPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "d", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				o = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				i = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const l = new Set([c.g.AntiEvilOps, c.g.AutomodFiltered, c.g.CommunityOps, c.g.ContentTakedown, c.g.CopyrightTakedown, c.g.Moderator, c.g.Reddit]),
				u = new Set([c.g.Author, c.g.AuthorDeleted]),
				m = Object(r.a)(a.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return l.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = n.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let r = Object(o.b)(e);
					return r || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (r = e.media.markdownContent), r === s
				}),
				p = Object(r.a)(a.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = n.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let r = Object(o.b)(e);
					return r || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (r = e.media.markdownContent), r === s
				}),
				h = Object(r.a)(a.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				b = Object(r.a)(d.k, a.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				g = Object(r.a)(a.a, e => !(!e || !1 !== e.isRobotIndexable))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditTopContent~TopWeekPostsDiscoveryUnit.e0bea50db5c8bc1acbd3.js.map