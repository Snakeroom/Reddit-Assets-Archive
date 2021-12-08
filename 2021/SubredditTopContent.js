// https://www.redditstatic.com/desktop2x/SubredditTopContent.0e603d2efa901cc60e38.js
// Retrieved at 12/8/2021, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditTopContent"], {
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var a = s("./src/reddit/models/Media/index.ts"),
				n = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = s.n(n);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: s,
					domainOverride: n
				} = e;
				let i = "";
				if (s) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = n || Object(a.D)(e)
				} else i = Object(a.D)(e);
				const o = r.a.parse(i),
					c = o.path || "",
					l = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (o.hostname ? o.hostname.replace("www.", "") : "") + l
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts");
			const r = [n.oc, n.pb, n.B, n.Q, n.kb, n.Rb],
				i = {
					[n.Rb]: e => a.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [a.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[n.kb]: e => a.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [a.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[n.Q]: e => a.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [a.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[n.B]: e => a.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [a.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[n.pb]: e => a.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [a.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[n.oc]: e => a.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [a.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				o = {
					[n.Rb]: e => a.fbt._("{amount}s", [a.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[n.kb]: e => a.fbt._("{amount}m", [a.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[n.Q]: e => a.fbt._("{amount}h", [a.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[n.B]: e => a.fbt._("{amount}d", [a.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[n.pb]: e => a.fbt._("{amount}m", [a.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.oc]: e => a.fbt._("{amount}y", [a.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[n.pb]: e => a.fbt._("{amount}m", [a.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.oc]: e => a.fbt._("{amount}y", [a.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, s = !1) {
				const c = Date.now(),
					l = new Date(e).getTime(),
					d = {
						[n.oc]: "",
						[n.pb]: "",
						[n.B]: "",
						[n.Q]: "",
						[n.kb]: "",
						[n.Rb]: ""
					};
				let m = l - c;
				if (m <= 0) return a.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const a of r) {
					const e = Math.floor(m / a);
					e && (d[a] = (t ? o : i)[a](e).toString()), m -= e * a
				}
				const u = r.map(e => d[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? u : a.fbt._("{amount of time left} left", [a.fbt._param("amount of time left", u)], {
					hk: "7VjAI"
				}).toString()
			}
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
			var a = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-motion/lib/react-motion.js"),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./node_modules/lodash/values.js"),
				d = s.n(l),
				m = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx"),
				p = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx"),
				h = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				b = s.n(h);
			const x = e => r.a.createElement("button", {
					className: Object(c.a)(b.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(u.a, {
					className: b.a.arrowIcon,
					seed: e.seed
				})),
				f = e => r.a.createElement("button", {
					className: Object(c.a)(b.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(p.a, {
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
							viewableItems: {
								...this.state.viewableItems,
								[e]: t.isIntersecting && t.intersectionRatio >= .99
							}
						})
					}, this.getVisibleItemsCount = () => {
						return d()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
					}, this.getMaxScrollIndex = e => null != e && this.props.items ? this.props.items.length - e : null, this.getSpacerCount = e => e + 1, this.getMarginLeft = ({
						adjustment: e,
						itemWidth: t,
						scrollIndex: s,
						spacerWidth: a = 0
					}) => {
						return e - s * (t + a) + a
					}, this.getAdjustment = ({
						itemWidth: e,
						maxScrollIndex: t,
						scrollIndex: s,
						spacerWidth: a = 0,
						visibleItemsCount: n
					}) => {
						let r = 0;
						if (s === t && n) {
							const t = n * e + this.getSpacerCount(n) * a;
							r = (this.container ? this.container.offsetWidth : t) - t
						} else s > 0 && (r = 0);
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
					m.a.read(() => {
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
					spacerWidth: a = 0
				}) {
					if (!e) return !0;
					const n = t.length * s,
						r = this.getSpacerCount(t.length) * a;
					return e.offsetWidth >= n + r
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
			var C = g,
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/clickSourceData/index.ts"),
				v = s("./src/reddit/helpers/overlay/index.ts"),
				k = s("./src/reddit/helpers/path/index.ts"),
				P = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				j = s("./node_modules/fbt/lib/FbtPublic.js"),
				O = s("./src/lib/isUrl/index.ts"),
				w = s("./src/lib/prettyPrintNumber/index.ts"),
				N = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				S = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				L = s("./src/reddit/constants/posts.ts"),
				I = s("./src/lib/constants/index.ts"),
				T = s("./src/reddit/components/HumanDate/index.tsx"),
				M = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				D = s("./src/reddit/hooks/useClickSourceData.ts"),
				V = s("./src/reddit/layout/row/Inline/index.tsx"),
				W = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				U = s.n(W);
			var F = e => {
					const t = L.a.PROFILE,
						s = Object(M.a)(e.author, t),
						a = Object(D.a)();
					return r.a.createElement("div", {
						className: Object(c.a)(U.a.container, e.className)
					}, r.a.createElement(V.a, {
						className: U.a.layout
					}, r.a.createElement("div", {
						className: U.a.textContainer
					}, r.a.createElement("span", {
						className: U.a.description
					}, j.fbt._("posted by", null, {
						hk: "wl0iP"
					})), r.a.createElement(S.a, {
						className: U.a.authorName,
						to: {
							pathname: s,
							state: a
						}
					}, Object(M.b)(e.author, t)), r.a.createElement("span", {
						className: U.a.timestamp
					}, r.a.createElement(T.d, {
						seconds: e.created / I.Rb
					})))))
				},
				B = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				A = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				R = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				H = s.n(R);
			var Q = e => {
					const t = Object(M.a)(e.name, e.type);
					return r.a.createElement("div", {
						className: Object(c.a)(H.a.container, e.className)
					}, r.a.createElement(A.a, {
						className: H.a.layout
					}, r.a.createElement("div", {
						className: H.a.iconContainer
					}, e.iconUrl ? r.a.createElement("img", {
						className: H.a.icon,
						src: e.iconUrl
					}) : r.a.createElement(B.a, {
						className: H.a.planetIcon,
						"data-redditstyle": !0
					})), r.a.createElement("div", {
						className: H.a.textContainer
					}, r.a.createElement(S.a, {
						"data-click-id": "subreddit",
						className: H.a.name,
						to: t
					}, Object(M.b)(e.displayText || e.name, e.type)), r.a.createElement("span", {
						className: H.a.separator
					}, "•"), r.a.createElement("span", {
						className: H.a.timestamp
					}, r.a.createElement(T.d, {
						seconds: e.created / I.Rb
					})))))
				},
				q = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				z = s("./src/reddit/components/Media/index.tsx"),
				G = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				Z = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				K = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Y = s("./src/reddit/components/PostContainer/index.tsx"),
				J = s("./src/reddit/components/PostTitle/index.tsx"),
				X = s("./src/reddit/connectors/miniCardPost.ts"),
				$ = s("./src/reddit/contexts/Post/index.tsx"),
				ee = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				te = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				se = s("./src/reddit/helpers/widgets/index.tsx"),
				ae = s("./src/reddit/models/Media/index.ts"),
				ne = s("./src/reddit/models/Subreddit/index.ts"),
				re = s("./src/reddit/components/MiniCardPost/index.m.less"),
				ie = s.n(re),
				oe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ce = s.n(oe),
				le = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				de = s.n(le);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			class ue extends r.a.Component {
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
						onClickPost: u,
						post: p,
						scrollerItemRef: h,
						shouldPause: b,
						showAuthorBlock: x = !1,
						showMetaLine: f = !0,
						showSubscribeBlock: g = !1,
						subredditOrProfile: C
					} = this.props, {
						media: y
					} = a || p, _ = !y && !!p.source && Object(O.a)(p.source.url);
					let E = y && r.a.createElement(z.a, {
							autoplayPref: e,
							availableWidth: t,
							className: ie.a.media,
							forceAspectRatio: ae.c,
							imageBoxClassName: ie.a.mediaImageBox,
							imageBoxContentImageClassName: ie.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: a || p,
							scrollerItemRef: h,
							shouldPause: b,
							shouldLoad: l,
							showCentered: !1,
							showFull: !1
						}),
						v = !1;
					y && E && (y.type !== ae.o.RTJSON && y.type !== ae.o.TEXT ? (E = r.a.createElement("div", {
						className: de.a.mediaWrapper
					}, E), v = !0) : y && y.content && Object(ee.a)(p) && (E = r.a.createElement("div", {
						className: de.a.textWrapper
					}, E)));
					const k = !v && !_;
					let P;
					return C && (P = Object(ne.h)(C) ? Object(se.b)(C) : Object(se.c)(C)), r.a.createElement(Y.a, {
						className: Object(c.a)(de.a.container, ce.a.largeAndMediumActiveStyles, ce.a.largeAndMediumPostStyles, ie.a.postContainer, Object(te.a)(this.props), s),
						post: p,
						onClick: u,
						eventFactory: i,
						style: {
							...Object(te.b)(this.props.flairStyleTemplate),
							...Object(te.d)(this.props),
							...this.props.style
						},
						"data-click-id": this.props["data-click-id"]
					}, r.a.createElement(K.a, {
						className: ie.a.backgroundWrapper,
						flairStyleTemplate: o
					}, r.a.createElement("div", {
						className: Object(c.a)(de.a.innerContainer, ie.a.innerContainer)
					}, g && C && r.a.createElement(Q, me({
						created: p.created
					}, P)), x && C && r.a.createElement(F, me({
						created: p.created,
						author: p.author
					}, P)), r.a.createElement(J.c, {
						className: k ? de.a.postTitle : de.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: J.b.Large,
						titleColor: o && o.postTitleColor
					}), f && C && r.a.createElement(G.a, {
						className: de.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: d,
						post: p,
						subredditOrProfile: C
					}), (v || _) && r.a.createElement("div", {
						className: de.a.flexSpacer
					}), _ && r.a.createElement("div", {
						className: de.a.mediaWrapper
					}, r.a.createElement(Z.a, {
						className: de.a.thumbnailWrapper,
						thumbnailClassName: de.a.thumbnail,
						thumbnailContainerClassName: de.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: o && o.postPlaceholderImage
					})), E, r.a.createElement("div", {
						className: de.a.metaWrapper
					}, r.a.createElement("span", {
						className: de.a.meta
					}, j.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [j.fbt._plural(p.score, "number", Object(w.b)(p.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: de.a.meta
					}, j.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [j.fbt._plural(p.numComments, "number", Object(w.b)(p.numComments))], {
						hk: "1QQoSA"
					}))))), r.a.createElement(q.d, null))
				}
			}
			const pe = Object($.b)(Object(X.a)(Object(N.a)(ue)));
			class he extends r.a.Component {
				render() {
					return r.a.createElement(pe, this.props)
				}
			}
			var be = s("./node_modules/reselect/es/index.js"),
				xe = s("./src/reddit/components/SubredditIcon/index.tsx"),
				fe = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				ge = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				Ce = s("./src/reddit/models/Vote/index.ts"),
				ye = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				_e = s.n(ye);

			function Ee() {
				return (Ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ve = Object(_.u)(),
				ke = Object(be.c)({
					isFakeSubreddit: _.y
				}),
				Pe = Object(o.b)(ke),
				je = e => {
					const t = {
						interactive: !1,
						voteState: Ce.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(c.a)(_e.a.emptyVotes, e.className)
					}, r.a.createElement(fe.d, t), r.a.createElement("div", {
						className: Object(c.a)(_e.a.emptyScore, Object(ge.b)({
							isLoading: e.isLoading
						}))
					}), r.a.createElement(fe.c, t))
				};
			var Oe = ve(Pe(Object(N.a)(({
					className: e,
					isLoading: t,
					showSubreddit: s,
					...a
				}) => r.a.createElement("div", {
					className: Object(c.a)(_e.a.container, ce.a.largeAndMediumPostStyles, e)
				}, r.a.createElement("div", {
					className: Object(c.a)(_e.a.thumbnail, Object(ge.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: _e.a.content
				}, r.a.createElement("div", {
					className: _e.a.titleContainer
				}, r.a.createElement("div", {
					className: Object(c.a)(_e.a.title, Object(ge.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: Object(c.a)(_e.a.title, Object(ge.b)({
						isLoading: t
					}))
				})), s && r.a.createElement(V.a, {
					className: _e.a.subreddit
				}, r.a.createElement(xe.a, Ee({
					className: Object(c.a)(Object(ge.b)({
						isLoading: !1
					}))
				}, a)), r.a.createElement("div", {
					className: Object(c.a)(_e.a.subredditName, Object(ge.b)({
						isLoading: t
					}))
				})), r.a.createElement(V.a, null, r.a.createElement(je, Ee({
					isLoading: t
				}, a)), r.a.createElement("div", {
					className: Object(c.a)(_e.a.comments, Object(ge.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: Object(c.a)(_e.a.share, Object(ge.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: Object(c.a)(_e.a.ellipsis, Object(ge.b)({
						isLoading: t
					}))
				}))))))),
				we = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				Ne = s.n(we);
			var Se = e => r.a.createElement("div", {
					className: Object(c.a)(Ne.a.container, e.className)
				}, r.a.createElement("div", {
					className: Ne.a.largePosts
				}, r.a.createElement(Oe, {
					className: Ne.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(Oe, {
					className: Ne.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(Oe, {
					className: Ne.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				Le = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				Ie = s.n(Le);
			const Te = 326,
				Me = 12,
				De = {
					stiffness: 210,
					damping: 30
				},
				Ve = 100,
				We = "post_carousel_item",
				Ue = ({
					root: e,
					handleVisibilityChange: t,
					renderPost: s,
					...n
				}) => {
					const i = s ? s(n) : r.a.createElement(he, n);
					return r.a.createElement(a.a, {
						root: e,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: t
					}, i)
				},
				Fe = Object(o.b)(null, (e, {
					discoveryUnit: t,
					searchDiscoveryUnit: s,
					pageLayer: a
				}) => ({
					openOverlay: t => e(Object(v.a)({
						pathname: Object(k.b)(t.permalink),
						state: Object(E.a)(a)
					})),
					trackPostClick: (t, a) => e((e, n) => s ? P.q(n(), s, t, a) : null),
					trackPostSubredditClick: a => e((e, n) => t ? P.s(n(), t, a) : s ? P.s(n(), s, a) : null)
				})),
				Be = Object(_.u)();
			t.a = Be(Fe(Object(y.c)(class extends C {
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
							discoveryUnitSubreddit: a,
							listingKey: n,
							pageLayer: r,
							searchDiscoveryUnit: i,
							searchOptions: o
						} = this.props;
						let c;
						return (c = "subreddit" === t && o ? P.z(o, r, n, i) : i && o ? P.A(o, r, n, i) : P.p(s, a))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: a,
							singleSubredditMode: n
						} = this.props;
						return r.a.createElement(Ue, {
							"data-click-id": We,
							className: Ie.a.largePost,
							eventFactory: this.itemPostClickEventFactory,
							forceLoadMedia: !0,
							isMiniCard: s,
							postId: e,
							onClickPost: this.onClickPost,
							showAuthorBlock: !!n,
							showMetaLine: !1,
							showSubscribeBlock: !n,
							handleVisibilityChange: this.makeVisibilityChangeHandler(t),
							renderPost: a,
							root: this.id,
							key: e
						})
					}, this.renderPosts = e => r.a.createElement("div", {
						className: Ie.a.posts,
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
						searchOptions: a
					} = this.props, n = s || e;
					n && t && t(n, a)
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
						seed: a,
						shouldSlideIn: n,
						springConfig: o
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return r.a.createElement(Se, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: l = Te
					} = this.props, {
						scrollIndex: d,
						visibleItemsCount: m
					} = this.state, u = this.getMaxScrollIndex(m), p = this.getAdjustment({
						itemWidth: l,
						maxScrollIndex: u,
						scrollIndex: d,
						spacerWidth: Me,
						visibleItemsCount: m
					}), h = e ? Ve : this.getMarginLeft({
						adjustment: p,
						itemWidth: l,
						scrollIndex: d,
						spacerWidth: Me
					});
					return r.a.createElement("div", {
						className: Object(c.a)(Ie.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, r.a.createElement(i.Motion, {
						defaultStyle: {
							marginLeft: e || n ? Ve : 0
						},
						style: {
							marginLeft: Object(i.spring)(h, o || De)
						}
					}, this.renderPosts), 0 !== d && r.a.createElement(x, {
						className: Object(c.a)(Ie.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: a
					}), !this.state.itemsFitInContainer && (null == u || d < u) && r.a.createElement(f, {
						className: Object(c.a)(Ie.a.arrowRight, n && !e && Ie.a.slideIn, s),
						onClick: this.onClickNext,
						seed: a
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
		"./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_1sf7GjDaEBhme5ClA39yBo",
				closeButton: "_3NeLiUZNL4IFv7G1HHx8Km",
				communityBackground: "_1pX_BOlTi53SAMVSDu_OrT",
				seeAllPosts: "_2zf-tJ6dr3umn1gcuEpDk8",
				communityDescriptionPlaceholder: "_1RYE13EcDNn1A1X1-h42f_",
				arrowPlaceholder: "_1q9k3G4VKHdAOsl64CbSge",
				headerLink: "_2HnhAFvq_dYxe2LgLqRXfK",
				layout: "_1p-hDqS1MBOTryteGnBenr",
				widgetHeader: "_3vKpqOprvaCysVAD8GUe6L"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/memoize.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				p = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				h = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				b = s("./src/reddit/components/Widgets/Base/index.tsx"),
				x = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				f = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/helpers/chooseVariant/index.ts"),
				C = s("./src/reddit/selectors/user.ts");
			const y = e => Object(C.H)(e) || f.if.ShowTopContent === Object(g.c)(e, {
				experimentEligibilitySelector: g.a,
				experimentName: f.cf
			});
			var _ = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less"),
				v = s.n(E);
			const k = Object(c.b)(() => Object(d.c)({
				inSubredditTopContentExperiment: y,
				subredditUrl: _.d
			}), e => ({
				trackDiscoveryUnitView: t => e((e, s) => x.b(s(), t)),
				trackDismissClick: t => e((e, s) => x.d(s(), t)),
				trackPostView: r()((t, s, a) => e((e, n) => x.t(n(), t, s, a)), ({
					id: e
				}, t) => `${e}-${t}`)
			}));
			class P extends o.a.Component {
				constructor() {
					super(...arguments), this.onCloseClick = () => {
						const {
							discoveryUnit: e,
							onCloseClick: t,
							trackDismissClick: s
						} = this.props;
						e && s(e), t()
					}
				}
				componentDidMount() {
					const {
						discoveryUnit: e,
						trackDiscoveryUnitView: t
					} = this.props;
					e && t(e)
				}
				render() {
					const {
						inSubredditTopContentExperiment: e,
						subredditUrl: t,
						topContent: s
					} = this.props;
					if (!e || !s) return null;
					const {
						postIds: n,
						range: r
					} = s, i = `${t}${m.W.TOP}?t=${r}`, c = o.a.createElement(b.a, {
						className: v.a.widgetHeader
					}, o.a.createElement("button", {
						className: v.a.closeButton,
						onClick: this.onCloseClick
					}, o.a.createElement(h.b, {
						className: v.a.closeIcon,
						"data-redditstyle": !0
					})), o.a.createElement(l.a, {
						className: v.a.headerLink,
						to: i
					}, a.fbt._("Top posts from the past {range}", [a.fbt._param("range", r)], {
						hk: "xhJKf"
					})));
					return o.a.createElement("div", {
						className: this.props.className
					}, o.a.createElement(u.a, {
						className: v.a.layout,
						header: c,
						hidePadding: !0
					}, o.a.createElement(p.a, {
						discoveryUnit: this.props.discoveryUnit,
						searchDiscoveryUnit: this.props.searchDiscoveryUnit,
						isLoading: !1,
						isMiniCard: !1,
						items: n,
						searchOptions: this.props.searchOptions,
						showSubreddit: !0,
						showTopPosts: !0,
						singleSubredditMode: !0,
						onPostView: this.props.trackPostView
					})))
				}
			}
			t.default = k(P)
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
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				d = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: n,
					post: u,
					subredditOrProfile: h
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(p.a.container, t)
				}, r.a.createElement(l.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: h.url
				}, r.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: h
				}), r.a.createElement("span", null, h.displayText)), ((e, t) => {
					if (t) return r.a.createElement("div", {
						role: "img",
						"aria-label": a.fbt._("Crossposted by{author}from{community}", [a.fbt._param("author", Object(d.d)(e)), a.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, r.a.createElement(m.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(u.author, s), h && h.isQuarantined && r.a.createElement(o.a, null))
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				o = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(o);

			function l(e) {
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
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, s) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "n", (function() {
				return b
			})), s.d(t, "p", (function() {
				return x
			})), s.d(t, "o", (function() {
				return f
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "j", (function() {
				return _
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "i", (function() {
				return k
			})), s.d(t, "q", (function() {
				return P
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "t", (function() {
				return w
			})), s.d(t, "u", (function() {
				return N
			})), s.d(t, "r", (function() {
				return S
			})), s.d(t, "a", (function() {
				return L
			})), s.d(t, "s", (function() {
				return I
			})), s.d(t, "c", (function() {
				return T
			}));
			var a = s("./src/lib/classNames/index.ts"),
				n = s("./src/lib/lessComponent.tsx"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/controls/Input/ModalInput.tsx"),
				l = s("./src/reddit/icons/svgs/Close/index.tsx"),
				d = s("./src/reddit/components/ModalStyledComponents/index.m.less"),
				m = s.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const p = n.a.wrapped(l.a, "CloseIcon", m.a),
				h = n.a.section("ModalBody", m.a),
				b = n.a.section("ModalPostPreview", m.a),
				x = n.a.p("ModalText", m.a),
				f = n.a.div("ModalSmallText", m.a),
				g = n.a.div("ModalDescriptionText", m.a),
				C = n.a.div("ModalMetaText", m.a),
				y = n.a.label("ModalFormItem", m.a),
				_ = n.a.wrapped(c.a, "ModalInput", m.a),
				E = n.a.label("ModalInputLabel", m.a),
				v = n.a.footer("ModalFooter", m.a),
				k = n.a.header("ModalHeader", m.a),
				P = n.a.div("ModalTitle", m.a),
				j = n.a.div("ModalAnnotation", m.a),
				O = n.a.div("ModalMain", m.a),
				w = n.a.textarea("TextArea", m.a),
				N = n.a.wrapped(o.l, "WarningButton", m.a),
				S = n.a.wrapped(o.l, "PrimaryButton", m.a),
				L = n.a.wrapped(o.o, "CancelButton", m.a),
				I = n.a.wrapped(o.r, "RemoveButton", m.a),
				T = ({
					className: e,
					...t
				}) => i.a.createElement(o.t, u({
					kind: o.b.Button,
					priority: o.c.Primary,
					className: Object(a.a)(m.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var a = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/components/HumanDate/index.tsx"),
				r = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function l(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return o.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", o.a.createElement(n.d, {
					seconds: e.poll.endsAt / a.Rb
				}))], {
					hk: "3OERID"
				}) : Object(r.a)(new Date(e.poll.endsAt)))
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				o = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				l = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/hooks/useTracking.ts");
			var m = n.a.memo(e => {
					const t = Object(a.useRef)(null),
						s = Object(d.a)(),
						r = Object(a.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: a
								} = t;
								a >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(a.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(l.a)(t, r, i), n.a.createElement("div", {
						role: "presentation"
					}, n.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/objectSelector/index.ts"),
				C = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.m.less"),
				_ = s.n(y);
			const E = Object(p.a)(() => Object(r.c)({
				basePixelMetadata: Object(g.a)((e, {
					post: t
				}) => Object(b.b)(e, t.id)),
				clickTrackingId: (e, {
					post: t
				}) => t.id,
				imageGalleryCurrentItem: (e, {
					post: t
				}) => Object(b.i)(e, {
					postId: t.id
				}),
				pageType: e => Object(x.actionInfo)(e).pageType
			}));
			class v extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: a,
						imageGalleryCurrentItem: r,
						makePostContainerId: l,
						post: d,
						onClick: u,
						pageType: p,
						sendEvent: b,
						style: x,
						ref: g,
						shouldAddGalleryViewability: C = !0
					} = this.props, y = n.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: g,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => u && u(s, d, t, r, p))(s), d.id && r) {
								const {
									source: e
								} = Object(i.t)(d, r);
								e && e.outboundUrl && b(Object(c.c)(d.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(_.a.WrappedPost, a, `Post ${d.id}`, {
							promotedlink: d.isSponsored
						}),
						"data-testid": "post-container",
						id: l ? l(d.id) : d.id,
						tabIndex: -1
					}, s), E = !!d.media && d.media.type === h.o.VIDEO;
					return d.isSponsored || E ? n.a.createElement(o.a, {
						post: d,
						trackDisplay: !0
					}, y) : d.media && Object(h.E)(d.media) && C ? n.a.createElement(m, {
						postId: d.id
					}, y) : y
				}
			}
			t.a = E(Object(C.a)(Object(u.c)(v)))
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
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return I
			})), s.d(t, "a", (function() {
				return z
			}));
			var a = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/experiments.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				x = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				g = s("./src/reddit/helpers/path/index.ts"),
				C = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = s("./src/lib/getShortenedLink.ts"),
				P = s("./src/reddit/components/FlairWrapper/index.tsx"),
				j = s("./node_modules/fbt/lib/FbtPublic.js"),
				O = s("./src/lib/prettyPrintNumber/index.ts"),
				w = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				N = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				S = s.n(N);
			const L = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var I, T = Object(i.b)(L)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, a = s ? s.totalVotes : "0";
					return r.a.createElement("div", {
						className: Object(d.a)(e.className, S.a.proposalMetaData)
					}, r.a.createElement("span", null, j.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [j.fbt._param("count", Object(O.a)(a)), j.fbt._plural(parseInt(a))], {
						hk: "4rP1VK"
					})), t && r.a.createElement(w.a, {
						className: S.a.proposalExpiry,
						poll: t
					}))
				})),
				M = s("./src/reddit/components/SEOTitle/index.tsx"),
				D = s("./src/reddit/selectors/experiments/econ/index.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/PostTitle/index.m.less"),
				U = s.n(W),
				F = s("./src/config.ts"),
				B = s("./src/reddit/hooks/useClickSourceData.ts"),
				A = s("./src/reddit/hooks/useExperimentVariant.ts"),
				R = s("./src/reddit/hooks/usePostContext.ts"),
				H = s("./src/reddit/hooks/useTheme.ts"),
				Q = s("./src/telemetry/models/Outbound.ts");

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(I || (I = {}));
			const z = ({
					size: e,
					titleColor: t,
					titleType: s,
					nowrap: a,
					children: n,
					className: i,
					redditStyle: o
				}) => {
					const c = Object(H.a)();
					let l = "";
					switch (e) {
						case I.ExtraLarge:
							l = U.a.ExtraLarge;
							break;
						case I.Large:
							l = U.a.Large;
							break;
						case I.Medium:
							l = U.a.Medium;
							break;
						case I.Small:
							l = U.a.Small;
							break;
						case I.ExtraSmall:
							l = U.a.ExtraSmall
					}
					return r.a.createElement("div", {
						className: Object(d.a)(U.a.Title, i, l, {
							[U.a.isNoWrap]: a
						}),
						style: {
							"--posttitletextcolor": t || Object(v.a)({
								redditStyle: o,
								theme: c
							}).titleText
						}
					}, s ? r.a.createElement(M.b, {
						type: s
					}, n) : n)
				},
				G = ({
					className: e,
					disableVisited: t,
					titleColor: s,
					children: a,
					...n
				}) => r.a.createElement(o.a, q({}, n, {
					className: Object(d.a)(e, U.a.styledLink, {
						[U.a.isVisitedEnabled]: !t
					})
				}), a),
				Z = ({
					disableVisited: e,
					nowrap: t,
					className: s,
					children: a
				}) => r.a.createElement("div", {
					className: Object(d.a)(U.a.titleContainer, s, {
						[U.a.isNoWrap]: t,
						[U.a.isVisitedEnabled]: !e
					})
				}, a),
				K = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(p.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: V.db,
					isTournamentPredictionPostV2: D.y
				}),
				Y = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: a
					} = t, n = Object(B.a)(), i = Object(A.a)(u.vd) === u.Cd.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return r.a.createElement(Z, {
						nowrap: e.nowrap
					}, r.a.createElement(J, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return r.a.createElement(h.b, {
						href: t.source.url,
						isSponsored: a,
						postId: t.id,
						source: t.source
					}, r.a.createElement(J, e)); {
						const o = t.media && Object(E.H)(t.media) ? Object(C.c)(t.id, s.name) : t.permalink,
							c = e.isCommentPermalink ? Object(g.b)(o) : i ? Object(x.a)(o, void 0, n) : Object(x.a)(o);
						return r.a.createElement(Z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, a ? ((e, t) => {
							const {
								source: s
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return s ? r.a.createElement(h.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, r.a.createElement(J, t)) : r.a.createElement(J, t)
						})(t, e) : r.a.createElement(G, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: c
						}, r.a.createElement(J, e)))
					}
				},
				J = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: a
					} = e;
					let n = e.format ? e.format(a) : a.title;
					s && "string" == typeof n && (n = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(n));
					const i = e.isCommentsPage ? M.a.PostComments : M.a.PostItem;
					return r.a.createElement(z, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && r.a.createElement(P.a, {
						titleFlair: t,
						nowrap: !0,
						post: a,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), n)
				},
				X = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: a
					} = s, n = e.isCommentsPage ? Q.SourceElement.PostLink : Q.SourceElement.ListingPostLink, i = !t && !e.isCrosspost && e.size !== I.Large && !s.isSponsored && !(s.media && Object(E.H)(s.media)) && (s.source || s.media && (s.media.type === E.o.GIFVIDEO || s.media.type === E.o.IMAGE || s.media.type === E.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return r.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(E.D)(s),
							isSponsored: a,
							postId: s.id,
							source: s.source,
							sourceElement: n
						}, Object(k.a)(s), !s.isSponsored && r.a.createElement(y.a, {
							name: "external_link",
							className: U.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== I.Large && e.size !== I.ExtraLarge) return r.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: a,
						postId: s.id,
						source: s.source,
						sourceElement: n
					}, Object(k.a)(s), !s.isSponsored && r.a.createElement(y.a, {
						name: "external_link",
						className: U.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends r.a.Component {
				getDynamicStyleTags() {
					return r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${U.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(a.c)(.45,Object(v.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(a.c)(.45,this.props.titleColor||Object(v.a)(this.props).titleText,Object(v.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					var e;
					const {
						className: t,
						disableFlair: s,
						flairPosition: a,
						isCommentsPage: n,
						isOverlay: i,
						poll: o,
						post: c,
						showNSFWSpoilerFlairsOnly: l,
						isTournamentPredictionPostV2: m
					} = this.props, u = a === _.b.Left, p = Object(P.b)(c), h = l ? p.filter(e => e.type === _.f.Nsfw || e.type === _.f.Spoiler) : u ? p.filter(e => Object(f.q)(e.type)) : [], b = l ? [] : u ? p.filter(e => !Object(f.q)(e.type)) : p, x = !i && !n, g = !s && h && h.length > 0 && x, C = !s && b && b.length > 0 && x, y = !(m && (null === (e = c.pollData) || void 0 === e ? void 0 : e.isPrediction));
					return r.a.createElement("div", {
						className: Object(d.a)(U.a.Component, t, c.id),
						ref: this.props.innerRef
					}, !l && g && r.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), y && r.a.createElement(Y, q({}, this.props, {
						leftFlair: l ? h : void 0
					})), o && r.a.createElement(T, {
						className: U.a.pollMeta,
						pollId: o.id
					}), r.a.createElement(X, this.props), C && r.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement("div", {
						className: U.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${F.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = r.a.memo((function(e) {
				const t = Object(p.eb)(),
					s = Object(p.w)(t),
					a = Object(R.a)(),
					n = Object(i.e)(n => K(n, {
						...a,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					o = Object(H.a)(),
					c = Object(m.b)();
				return a ? r.a.createElement($, q({
					pageLayer: t,
					isCommentPermalink: s
				}, a, n, e, {
					theme: o,
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
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				u = s.n(m);
			const p = ["center", "top"],
				h = ["center", "bottom"],
				b = o.a.div("Container", u.a),
				x = Object(i.a)(c.b),
				f = Object(l.u)({
					isProfileListingPage: l.H
				});
			class g extends r.a.Component {
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
					return r.a.createElement(b, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, r.a.createElement(d.a, {
						className: u.a.quarantineIcon
					}), a.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), r.a.createElement(x, {
						text: a.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: p,
						tooltipPosition: h
					}))
				}
			}
			t.a = f(g)
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				n = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = s.n(n);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(a.a, "SubredditName", r.a);
			t.a = i
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/constants/keycodes.ts"),
				l = s("./src/reddit/controls/Input/index.m.less"),
				d = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			class u extends n.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...s
					} = this.props;
					return n.a.createElement("input", m({
						className: Object(i.a)(d.a.input, e),
						onKeyDown: this.handleKeyDown
					}, s))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: o.f
			})(u)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");

			function r(e, t = n.a) {
				return Object(a.e)(s => Object(n.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/reddit/constants/colors.ts");
			const i = (e, t = "") => `${t}-du-left-${e}`;
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), a = i("b", t), o = i("c", t), c = i("d", t);
				return n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("defs", null, n.a.createElement("circle", {
					id: a,
					cx: "18",
					cy: "18",
					r: "18"
				}), n.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, n.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), n.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), n.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), n.a.createElement("path", {
					id: o,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), n.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, n.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, n.a.createElement("use", {
					fill: r.a.black,
					filter: `url(#${s})`,
					xlinkHref: `#${a}`
				}), n.a.createElement("use", {
					fill: r.a.white,
					xlinkHref: `#${a}`
				})), n.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, n.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), n.a.createElement("mask", {
					id: c,
					fill: r.a.white
				}, n.a.createElement("use", {
					xlinkHref: `#${o}`
				})), n.a.createElement("use", {
					fill: r.a.black,
					xlinkHref: `#${o}`
				}), n.a.createElement("g", {
					fill: r.a.alienblue,
					mask: `url(#${c})`
				}, n.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/reddit/constants/colors.ts");
			const i = (e, t = "") => `${t}-du-right-${e}`;
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), a = i("b", t), o = i("c", t), c = i("d", t);
				return n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("defs", null, n.a.createElement("circle", {
					id: a,
					cx: "18",
					cy: "18",
					r: "18"
				}), n.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, n.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), n.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), n.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), n.a.createElement("path", {
					id: o,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), n.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, n.a.createElement("g", {
					fillRule: "nonzero",
					transform: "translate(7 4)"
				}, n.a.createElement("use", {
					fill: r.a.black,
					filter: `url(#${s})`,
					xlinkHref: `#${a}`
				}), n.a.createElement("use", {
					fill: r.a.white,
					xlinkHref: `#${a}`
				})), n.a.createElement("g", {
					transform: "rotate(90 9.326 23.5)"
				}, n.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), n.a.createElement("mask", {
					id: c,
					fill: r.a.white
				}, n.a.createElement("use", {
					xlinkHref: `#${o}`
				})), n.a.createElement("use", {
					fill: r.a.black,
					xlinkHref: `#${o}`
				}), n.a.createElement("g", {
					fill: r.a.alienblue,
					mask: `url(#${c})`
				}, n.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), n.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Tile/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				stroke: "inherit",
				fill: "none",
				x: "1.5",
				y: "1.5",
				width: "17",
				height: "17",
				rx: "4"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "4",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "4",
				y: "10",
				width: "5.5",
				height: "5.5"
			}), n.a.createElement("rect", {
				fill: "inherit",
				stroke: "none",
				x: "10.5",
				y: "10",
				width: "5.5",
				height: "5.5"
			})))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, s) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/Inline/index.m.less"),
				r = s.n(n);
			t.a = a.a.div("inlineRow", r.a)
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(o);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: a,
					widthLeft: r,
					gutter: o,
					...d
				} = e;
				return n.a.createElement("div", l({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, d), n.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: a,
						marginRight: o
					}
				}, Array.isArray(s) && s[0]), n.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditTopContent.0e603d2efa901cc60e38.js.map