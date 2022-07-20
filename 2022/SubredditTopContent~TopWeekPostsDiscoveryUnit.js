// https://www.redditstatic.com/desktop2x/SubredditTopContent~TopWeekPostsDiscoveryUnit.d8acf6d31934d3955159.js
// Retrieved at 7/20/2022, 5:10:05 PM by Reddit Dataminer v1.0.0
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
			const a = [r.sc, r.pb, r.B, r.Q, r.kb, r.Sb],
				o = {
					[r.Sb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.kb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.Q]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.B]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.pb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.sc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[r.Sb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.kb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.Q]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.B]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.sc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.sc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.sc]: "",
						[r.pb]: "",
						[r.B]: "",
						[r.Q]: "",
						[r.kb]: "",
						[r.Sb]: ""
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
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/helpers/clickSourceData/index.ts"),
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
				W = s("./src/reddit/hooks/useClickSourceData.ts"),
				F = s("./src/reddit/layout/row/Inline/index.tsx"),
				R = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				B = s.n(R);
			var V = e => {
					const t = T.a.PROFILE,
						s = Object(A.a)(e.author, t),
						n = Object(W.a)();
					return a.a.createElement("div", {
						className: Object(d.a)(B.a.container, e.className)
					}, a.a.createElement(F.a, {
						className: B.a.layout
					}, a.a.createElement("div", {
						className: B.a.textContainer
					}, a.a.createElement("span", {
						className: B.a.description
					}, P.fbt._("posted by", null, {
						hk: "wl0iP"
					})), e.author === M.E ? a.a.createElement("span", {
						className: B.a.authorName
					}, Object(A.b)(e.author, t)) : a.a.createElement(L.a, {
						className: B.a.authorName,
						to: {
							pathname: s,
							state: n
						}
					}, Object(A.b)(e.author, t)), a.a.createElement("span", {
						className: B.a.timestamp
					}, a.a.createElement(D.d, {
						seconds: e.created / M.Sb
					})))))
				},
				U = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				Q = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				H = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				q = s.n(H);
			var z = e => {
					const t = Object(A.a)(e.name, e.type);
					return a.a.createElement("div", {
						className: Object(d.a)(q.a.container, e.className)
					}, a.a.createElement(Q.a, {
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
						seconds: e.created / M.Sb
					})))))
				},
				K = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Z = s("./src/reddit/components/Media/index.tsx"),
				G = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
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
					let j = x && a.a.createElement(Z.a, {
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
						k = !1;
					x && j && (x.type !== ae.o.RTJSON && x.type !== ae.o.TEXT ? (j = a.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, j), k = !0) : x && x.content && Object(se.a)(p) && (j = a.a.createElement("div", {
						className: pe.a.textWrapper
					}, j)));
					const C = !k && !O;
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
					}, w)), g && y && a.a.createElement(V, he({
						created: p.created,
						author: p.author
					}, w)), a.a.createElement($.c, {
						className: C ? pe.a.postTitle : pe.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: $.b.Large,
						titleColor: i && i.postTitleColor
					}), f && y && a.a.createElement(G.a, {
						className: pe.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: l,
						post: p,
						subredditOrProfile: y
					}), (k || O) && a.a.createElement("div", {
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
				ke = s.n(je);

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const we = Object(k.u)(),
				Ee = Object(c.c)({
					isFakeSubreddit: k.z
				}),
				Ie = Object(i.b)(Ee),
				_e = e => {
					const t = {
						interactive: !1,
						voteState: Oe.a.notVoted
					};
					return a.a.createElement("div", {
						className: Object(d.a)(ke.a.emptyVotes, e.className)
					}, a.a.createElement(ye.d, t), a.a.createElement("div", {
						className: Object(d.a)(ke.a.emptyScore, Object(xe.b)({
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
						className: Object(d.a)(ke.a.container, ue.a.largeAndMediumPostStyles, t)
					}, a.a.createElement("div", {
						className: Object(d.a)(ke.a.thumbnail, Object(xe.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: ke.a.content
					}, a.a.createElement("div", {
						className: ke.a.titleContainer
					}, a.a.createElement("div", {
						className: Object(d.a)(ke.a.title, Object(xe.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Object(d.a)(ke.a.title, Object(xe.b)({
							isLoading: s
						}))
					})), n && a.a.createElement(F.a, {
						className: ke.a.subreddit
					}, a.a.createElement(ve.a, Ce({
						className: Object(d.a)(Object(xe.b)({
							isLoading: !1
						}))
					}, r)), a.a.createElement("div", {
						className: Object(d.a)(ke.a.subredditName, Object(xe.b)({
							isLoading: s
						}))
					})), a.a.createElement(F.a, null, a.a.createElement(_e, Ce({
						isLoading: s
					}, r)), a.a.createElement("div", {
						className: Object(d.a)(ke.a.comments, Object(xe.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Object(d.a)(ke.a.share, Object(xe.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Object(d.a)(ke.a.ellipsis, Object(xe.b)({
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
				We = {
					stiffness: 210,
					damping: 30
				},
				Fe = 100,
				Re = "post_carousel_item",
				Be = e => {
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
				Ve = Object(c.c)({
					isBlockingInterstitialEnabled: _.b,
					isBlockingInterstitialV2Enabled: _.c
				}),
				Ue = Object(i.b)(Ve, (e, t) => {
					let {
						discoveryUnit: s,
						searchDiscoveryUnit: n,
						pageLayer: r
					} = t;
					return {
						openOverlay: t => e(Object(w.a)({
							pathname: Object(E.b)(t.permalink),
							state: Object(C.b)(r)
						})),
						trackPostClick: (t, s) => e((e, r) => n ? I.p(r(), n, t, s) : null),
						trackPostSubredditClick: t => e((e, r) => s ? I.r(r(), s, t) : n ? I.r(r(), n, t) : null),
						showModalOnPostLinkClick: t => e(Object(l.bb)(Object(E.b)(t.permalink), t.id))
					}
				}),
				Qe = Object(k.u)();
			t.a = Qe(Ue(Object(j.c)(class extends O {
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
						return a.a.createElement(Be, {
							"data-click-id": Re,
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
					}), h = e ? Fe : this.getMarginLeft({
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
							marginLeft: e || r ? Fe : 0
						},
						style: {
							marginLeft: Object(o.spring)(h, i || We)
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
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(l.d)(e)), n.fbt._param("community", t.displayText)], {
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
					seconds: e.poll.endsAt / n.Sb
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
				x = s("./src/reddit/components/PostContainer/index.m.less"),
				O = s.n(x);
			const j = Object(p.a)(() => Object(a.c)({
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
				k = "post-container";
			class C extends r.a.Component {
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
						className: Object(f.a)(O.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": k,
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), j = !!l.media && l.media.type === h.o.VIDEO;
					return (e => l.media && Object(h.E)(l.media) && y ? r.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || j ? r.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(x))
				}
			}
			t.a = j(Object(y.a)(Object(m.c)(C)))
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
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
				return M
			})), s.d(t, "a", (function() {
				return Z
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/OutboundLink/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				b = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				g = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				v = s("./src/reddit/helpers/path/index.ts"),
				y = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/models/Flair/index.ts"),
				j = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				C = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = s("./src/lib/getShortenedLink.ts"),
				E = s("./src/reddit/components/FlairWrapper/index.tsx"),
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				_ = s("./src/lib/prettyPrintNumber/index.ts"),
				P = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				N = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				S = s.n(N),
				L = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const T = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var M, D = Object(o.b)(T)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(L.a)() ? null : a.a.createElement("div", {
						className: Object(l.a)(e.className, S.a.proposalMetaData)
					}, a.a.createElement("span", null, I.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [I.fbt._param("count", Object(_.a)(n)), I.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && a.a.createElement(P.a, {
						className: S.a.proposalExpiry,
						poll: t
					}))
				})),
				A = s("./src/reddit/components/SEOTitle/index.tsx"),
				W = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				F = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				B = s("./src/reddit/components/PostTitle/index.m.less"),
				V = s.n(B),
				U = s("./src/config.ts"),
				Q = s("./src/reddit/hooks/useClickSourceData.ts"),
				H = s("./src/reddit/hooks/usePostContext.ts"),
				q = s("./src/reddit/hooks/useTheme.ts"),
				z = s("./src/telemetry/models/Outbound.ts");

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(M || (M = {}));
			const Z = e => {
					let {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: r,
						children: o,
						className: i,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const u = Object(q.a)();
					let m = "";
					switch (t) {
						case M.ExtraLarge:
							m = V.a.ExtraLarge;
							break;
						case M.Large:
							m = V.a.Large;
							break;
						case M.Medium:
							m = V.a.Medium;
							break;
						case M.Small:
							m = V.a.Small;
							break;
						case M.ExtraSmall:
							m = V.a.ExtraSmall;
							break;
						case M.Metadata:
							m = V.a.Metadata
					}
					return a.a.createElement("div", {
						className: Object(l.a)(V.a.Title, i, m, {
							[V.a.isNoWrap]: r,
							[V.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": s || Object(C.a)({
								redditStyle: c,
								theme: u
							}).titleText
						}
					}, n ? a.a.createElement(A.b, {
						type: n
					}, o) : o)
				},
				G = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: n,
						children: r,
						...o
					} = e;
					return a.a.createElement(i.a, K({}, o, {
						className: Object(l.a)(t, V.a.styledLink, {
							[V.a.isVisitedEnabled]: !s
						})
					}), r)
				},
				Y = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: n,
						children: r
					} = e;
					return a.a.createElement("div", {
						className: Object(l.a)(V.a.titleContainer, n, {
							[V.a.isNoWrap]: s,
							[V.a.isVisitedEnabled]: !t
						})
					}, r)
				},
				J = Object(c.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(m.q)(e, {
							pageLayer: s
						})
					},
					isNsfwBlurSubreddit: F.e,
					shouldOpenPostInNewTab: R.jb
				}),
				X = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, r = Object(o.d)(), i = Object(Q.a)(), c = Object(o.e)(W.b), l = Object(o.e)(W.c), u = e => {
						!c && !l || t.media && Object(j.H)(t.media) || (e.preventDefault(), r(Object(g.bb)(Object(v.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return a.a.createElement(Y, {
						nowrap: e.nowrap
					}, a.a.createElement($, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return a.a.createElement(p.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, a.a.createElement($, e)); {
						const r = t.media && Object(j.H)(t.media) ? Object(y.c)(t.id, s.name) : t.permalink,
							o = e.isCommentPermalink ? Object(v.b)(r) : Object(b.a)(r, void 0, i);
						return a.a.createElement(Y, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return s ? a.a.createElement(p.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, a.a.createElement($, t)) : a.a.createElement($, t)
						})(t, e) : a.a.createElement(G, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: o,
							onClick: u
						}, a.a.createElement($, e)))
					}
				},
				$ = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let r = e.format ? e.format(n) : n.title;
					s && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const o = e.isCommentsPage ? A.a.PostComments : A.a.PostItem,
						i = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return a.a.createElement(Z, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: i,
						size: e.size,
						titleColor: e.titleColor,
						titleType: o
					}, t && a.a.createElement(E.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent
					}), r)
				},
				ee = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: n
					} = e, {
						isSponsored: r
					} = n, o = e.isCommentsPage ? z.SourceElement.PostLink : z.SourceElement.ListingPostLink;
					if (Object(L.a)()) return null;
					if (s && n.isNSFW) return null;
					const i = !t && !e.isCrosspost && e.size !== M.Large && !n.isSponsored && !(n.media && Object(j.H)(n.media)) && (n.source || n.media && (n.media.type === j.o.GIFVIDEO || n.media.type === j.o.IMAGE || n.media.type === j.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return a.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(j.D)(n),
							isSponsored: r,
							postId: n.id,
							source: n.source,
							sourceElement: o
						}, Object(w.a)(n), !n.isSponsored && a.a.createElement(x.a, {
							name: "external_link",
							className: V.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== M.Large && e.size !== M.ExtraLarge) return a.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: r,
						postId: n.id,
						source: n.source,
						sourceElement: o
					}, Object(w.a)(n), !n.isSponsored && a.a.createElement(x.a, {
						name: "external_link",
						className: V.a.outboundLinkIcon
					}));
					return null
				};
			class te extends a.a.Component {
				getDynamicStyleTags() {
					return a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${V.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(C.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(C.a)(this.props).titleText,Object(C.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: n,
						isOverlay: r,
						poll: o,
						post: i,
						showNSFWSpoilerFlairsOnly: c,
						hideNSFWSpoilerFlair: d
					} = this.props, u = s === O.b.Left, m = Object(E.b)(i), p = [], h = [], b = [], g = [];
					for (const a of m) a.type === O.f.Nsfw || a.type === O.f.Spoiler ? (p.push(a), g.push(a)) : Object(f.q)(a.type) ? (b.push(a), h.push(a)) : (g.push(a), h.push(a));
					const v = c ? p : u ? b : [];
					let y = m;
					c ? y = [] : d ? y = h : u && (y = g);
					const x = !r && !n && !t,
						j = x && v && v.length > 0,
						C = x && y && y.length > 0;
					return a.a.createElement("div", {
						className: Object(l.a)(V.a.Component, e, i.id),
						ref: this.props.innerRef
					}, !c && j && a.a.createElement(E.a, {
						isFlairFilter: !0,
						titleFlair: v,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), !Object(k.b)(i) && a.a.createElement(X, K({}, this.props, {
						leftFlair: c ? v : void 0
					})), o && a.a.createElement(D, {
						className: V.a.pollMeta,
						pollId: o.id
					}), a.a.createElement(ee, this.props), C && a.a.createElement(E.a, {
						isFlairFilter: !0,
						titleFlair: y,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), a.a.createElement("div", {
						className: V.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${U.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = a.a.memo((function(e) {
				const t = Object(m.fb)(),
					s = Object(m.w)(t),
					n = Object(H.a)(),
					r = Object(o.e)(r => J(r, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					i = Object(q.a)(),
					c = Object(u.b)();
				return n ? a.a.createElement(te, K({
					pageLayer: t,
					isCommentPermalink: s
				}, n, r, e, {
					theme: i,
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
			var k = function() {
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
				C = Object(n.c)({
					api: d,
					fetchedTokens: u,
					loadMore: p,
					models: g,
					search: O,
					userOrder: k
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
			var W = function() {
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
			var F = function() {
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
				R = Object(n.c)({
					error: W,
					pending: F
				}),
				B = s("./node_modules/lodash/merge.js"),
				V = s.n(B),
				U = s("./node_modules/lodash/omit.js"),
				Q = s.n(U);
			const H = {};
			var q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.g:
					case A.k: {
						const {
							subredditId: s,
							flairedUsers: n
						} = t.payload;
						return V()({
							...e
						}, {
							[s]: n
						})
					}
					case A.c: {
						const {
							subredditId: s,
							userName: n
						} = t.payload, r = Q()(e[s], n);
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
			var Z = function() {
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
			var G = function() {
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
					error: Z,
					pending: G
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
					api: R,
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
							return V()({
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
				ke = Object(n.c)({
					error: xe,
					pending: je
				});
			const Ce = {};
			var we = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
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
					api: ke
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
			const We = {};
			var Fe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : We,
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
			const Re = {};
			var Be = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
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
			const Ve = {};
			var Ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ve,
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
			var Qe = function() {
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
			var He = function() {
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
					error: Qe,
					pending: He
				}),
				ze = s("./node_modules/lodash/isEqual.js"),
				Ke = s.n(ze);
			var Ze = function() {
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
				Ge = Object(n.c)({
					api: qe,
					result: Ze
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
					loadMoreModerators: Be,
					loadMoreEditableModerators: Fe,
					models: Ue,
					search: Ge,
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
							return Q()(e, s)
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
				kt = Object(n.c)({
					api: vt,
					itemOrder: xt,
					loadMore: jt
				}),
				Ct = s("./src/reddit/actions/pages/modListing/constants.ts");
			var wt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ct.e: {
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
					case Ct.e: {
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
			var Wt = function() {
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
				Ft = Object(n.c)({
					api: Tt,
					itemOrder: Dt,
					loadMore: Wt
				});
			var Rt = function() {
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
			var Bt = function() {
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
				Vt = Object(n.c)({
					error: Rt,
					pending: Bt
				});
			const Ut = {};
			var Qt = function() {
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
			const Ht = {};
			var qt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ht,
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
					api: Vt,
					itemOrder: Qt,
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
			var Zt = function() {
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
				Gt = Object(n.c)({
					error: Kt,
					pending: Zt
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
					api: Gt,
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
					edited: kt,
					moderatedCommunitiesOrder: Nt,
					modqueue: Ft,
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
			var ks = function() {
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
				Cs = Object(n.c)({
					error: js,
					pending: ks
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
					api: Cs,
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
				approvedSubmitters: C,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditTopContent~TopWeekPostsDiscoveryUnit.d8acf6d31934d3955159.js.map