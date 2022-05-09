// https://www.redditstatic.com/desktop2x/SubredditTopContent.767cfcad479045d963fd.js
// Retrieved at 5/9/2022, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditTopContent"], {
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var a = s("./src/reddit/models/Media/index.ts"),
				n = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = s.n(n);
			t.a = function(e) {
				var t;
				const {
					source: s,
					isSponsored: n,
					domainOverride: i,
					callToAction: o
				} = e;
				let l = "";
				if (n) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == o ? void 0 : o.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					l = i || Object(a.D)(e)
				} else l = Object(a.D)(e);
				const c = r.a.parse(l),
					d = c.path || "",
					m = d.length > 7 ? d.substring(0, 7) + "..." : d;
				return (c.hostname ? c.hostname.replace("www.", "") : "") + m
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts");
			const r = [n.sc, n.pb, n.B, n.Q, n.kb, n.Sb],
				i = {
					[n.Sb]: e => a.fbt._({
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
					[n.sc]: e => a.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [a.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				o = {
					[n.Sb]: e => a.fbt._("{amount}s", [a.fbt._param("amount", String(e))], {
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
					[n.sc]: e => a.fbt._("{amount}y", [a.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[n.pb]: e => a.fbt._("{amount}m", [a.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.sc]: e => a.fbt._("{amount}y", [a.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function l(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const l = Date.now(),
					c = new Date(e).getTime(),
					d = {
						[n.sc]: "",
						[n.pb]: "",
						[n.B]: "",
						[n.Q]: "",
						[n.kb]: "",
						[n.Sb]: ""
					};
				let m = c - l;
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
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				m = s("./node_modules/lodash/values.js"),
				u = s.n(m),
				p = s("./src/lib/fastdom/index.ts"),
				b = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx"),
				h = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx"),
				x = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				f = s.n(x);
			const g = e => r.a.createElement("button", {
					className: Object(c.a)(f.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(b.a, {
					className: f.a.arrowIcon,
					seed: e.seed
				})),
				C = e => r.a.createElement("button", {
					className: Object(c.a)(f.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(h.a, {
					className: f.a.arrowIcon,
					seed: e.seed
				}));
			class y extends r.a.Component {
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
						return u()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
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
							visibleItemsCount: r
						} = e, i = 0;
						if (a === s && r) {
							const e = r * t + this.getSpacerCount(r) * n;
							i = (this.container ? this.container.offsetWidth : e) - e
						} else a > 0 && (i = 0);
						return i
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
						itemWidth: a,
						spacerWidth: n = 0
					} = e;
					if (!t) return !0;
					const r = s.length * a,
						i = this.getSpacerCount(s.length) * n;
					return t.offsetWidth >= r + i
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
			var _ = y,
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/clickSourceData/index.ts"),
				O = s("./src/reddit/helpers/overlay/index.ts"),
				P = s("./src/reddit/helpers/path/index.ts"),
				j = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				w = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				N = s("./node_modules/fbt/lib/FbtPublic.js"),
				S = s("./src/lib/isUrl/index.ts"),
				L = s("./src/lib/prettyPrintNumber/index.ts"),
				I = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				T = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				M = s("./src/reddit/constants/posts.ts"),
				D = s("./src/lib/constants/index.ts"),
				B = s("./src/reddit/components/HumanDate/index.tsx"),
				W = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				F = s("./src/reddit/hooks/useClickSourceData.ts"),
				U = s("./src/reddit/layout/row/Inline/index.tsx"),
				V = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				A = s.n(V);
			var R = e => {
					const t = M.a.PROFILE,
						s = Object(W.a)(e.author, t),
						a = Object(F.a)();
					return r.a.createElement("div", {
						className: Object(c.a)(A.a.container, e.className)
					}, r.a.createElement(U.a, {
						className: A.a.layout
					}, r.a.createElement("div", {
						className: A.a.textContainer
					}, r.a.createElement("span", {
						className: A.a.description
					}, N.fbt._("posted by", null, {
						hk: "wl0iP"
					})), e.author === D.E ? r.a.createElement("span", {
						className: A.a.authorName
					}, Object(W.b)(e.author, t)) : r.a.createElement(T.a, {
						className: A.a.authorName,
						to: {
							pathname: s,
							state: a
						}
					}, Object(W.b)(e.author, t)), r.a.createElement("span", {
						className: A.a.timestamp
					}, r.a.createElement(B.d, {
						seconds: e.created / D.Sb
					})))))
				},
				H = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				Q = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				q = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				z = s.n(q);
			var G = e => {
					const t = Object(W.a)(e.name, e.type);
					return r.a.createElement("div", {
						className: Object(c.a)(z.a.container, e.className)
					}, r.a.createElement(Q.a, {
						className: z.a.layout
					}, r.a.createElement("div", {
						className: z.a.iconContainer
					}, e.iconUrl ? r.a.createElement("img", {
						className: z.a.icon,
						src: e.iconUrl
					}) : r.a.createElement(H.a, {
						className: z.a.planetIcon,
						"data-redditstyle": !0
					})), r.a.createElement("div", {
						className: z.a.textContainer
					}, r.a.createElement(T.a, {
						"data-click-id": "subreddit",
						className: z.a.name,
						to: t
					}, Object(W.b)(e.displayText || e.name, e.type)), r.a.createElement("span", {
						className: z.a.separator
					}, "•"), r.a.createElement("span", {
						className: z.a.timestamp
					}, r.a.createElement(B.d, {
						seconds: e.created / D.Sb
					})))))
				},
				Z = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Y = s("./src/reddit/components/Media/index.tsx"),
				K = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				J = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				X = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				$ = s("./src/reddit/components/PostContainer/index.tsx"),
				ee = s("./src/reddit/components/PostTitle/index.tsx"),
				te = s("./src/reddit/connectors/miniCardPost.ts"),
				se = s("./src/reddit/contexts/Post/index.tsx"),
				ae = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				ne = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				re = s("./src/reddit/helpers/widgets/index.tsx"),
				ie = s("./src/reddit/models/Media/index.ts"),
				oe = s("./src/reddit/models/Subreddit/index.ts"),
				le = s("./src/reddit/components/MiniCardPost/index.m.less"),
				ce = s.n(le),
				de = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				me = s.n(de),
				ue = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				pe = s.n(ue);

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			class he extends r.a.Component {
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
						scrollerItemRef: b,
						shouldPause: h,
						showAuthorBlock: x = !1,
						showMetaLine: f = !0,
						showSubscribeBlock: g = !1,
						subredditOrProfile: C
					} = this.props, {
						media: y
					} = a || p, _ = !y && !!p.source && Object(S.a)(p.source.url);
					let k = y && r.a.createElement(Y.a, {
							autoplayPref: e,
							availableWidth: t,
							className: ce.a.media,
							forceAspectRatio: ie.c,
							imageBoxClassName: ce.a.mediaImageBox,
							imageBoxContentImageClassName: ce.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: a || p,
							scrollerItemRef: b,
							shouldPause: h,
							shouldLoad: l,
							showCentered: !1,
							showFull: !1
						}),
						v = !1;
					y && k && (y.type !== ie.o.RTJSON && y.type !== ie.o.TEXT ? (k = r.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, k), v = !0) : y && y.content && Object(ae.a)(p) && (k = r.a.createElement("div", {
						className: pe.a.textWrapper
					}, k)));
					const E = !v && !_;
					let O;
					return C && (O = Object(oe.i)(C) ? Object(re.b)(C) : Object(re.c)(C)), r.a.createElement($.a, {
						className: Object(c.a)(pe.a.container, me.a.largeAndMediumActiveStyles, me.a.largeAndMediumPostStyles, ce.a.postContainer, Object(ne.a)(this.props), s),
						post: p,
						onClick: u,
						eventFactory: i,
						style: {
							...Object(ne.b)(this.props.flairStyleTemplate),
							...Object(ne.d)(this.props),
							...this.props.style
						},
						"data-click-id": this.props["data-click-id"]
					}, r.a.createElement(X.a, {
						className: ce.a.backgroundWrapper,
						flairStyleTemplate: o
					}, r.a.createElement("div", {
						className: Object(c.a)(pe.a.innerContainer, ce.a.innerContainer)
					}, g && C && r.a.createElement(G, be({
						created: p.created
					}, O)), x && C && r.a.createElement(R, be({
						created: p.created,
						author: p.author
					}, O)), r.a.createElement(ee.c, {
						className: E ? pe.a.postTitle : pe.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: ee.b.Large,
						titleColor: o && o.postTitleColor
					}), f && C && r.a.createElement(K.a, {
						className: pe.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: d,
						post: p,
						subredditOrProfile: C
					}), (v || _) && r.a.createElement("div", {
						className: pe.a.flexSpacer
					}), _ && r.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, r.a.createElement(J.a, {
						className: pe.a.thumbnailWrapper,
						thumbnailClassName: pe.a.thumbnail,
						thumbnailContainerClassName: pe.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: o && o.postPlaceholderImage
					})), k, r.a.createElement("div", {
						className: pe.a.metaWrapper
					}, r.a.createElement("span", {
						className: pe.a.meta
					}, N.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [N.fbt._plural(p.score, "number", Object(L.b)(p.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: pe.a.meta
					}, N.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [N.fbt._plural(p.numComments, "number", Object(L.b)(p.numComments))], {
						hk: "1QQoSA"
					}))))), r.a.createElement(Z.d, null))
				}
			}
			const xe = Object(se.b)(Object(te.a)(Object(I.a)(he)));
			class fe extends r.a.Component {
				render() {
					return r.a.createElement(xe, this.props)
				}
			}
			var ge = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Ce = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				ye = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				_e = s("./src/reddit/models/Vote/index.ts"),
				ke = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				ve = s.n(ke);

			function Ee() {
				return (Ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = Object(v.u)(),
				Pe = Object(l.c)({
					isFakeSubreddit: v.z
				}),
				je = Object(o.b)(Pe),
				we = e => {
					const t = {
						interactive: !1,
						voteState: _e.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(c.a)(ve.a.emptyVotes, e.className)
					}, r.a.createElement(Ce.d, t), r.a.createElement("div", {
						className: Object(c.a)(ve.a.emptyScore, Object(ye.b)({
							isLoading: e.isLoading
						}))
					}), r.a.createElement(Ce.c, t))
				};
			var Ne = Oe(je(Object(I.a)(e => {
					let {
						className: t,
						isLoading: s,
						showSubreddit: a,
						...n
					} = e;
					return r.a.createElement("div", {
						className: Object(c.a)(ve.a.container, me.a.largeAndMediumPostStyles, t)
					}, r.a.createElement("div", {
						className: Object(c.a)(ve.a.thumbnail, Object(ye.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: ve.a.content
					}, r.a.createElement("div", {
						className: ve.a.titleContainer
					}, r.a.createElement("div", {
						className: Object(c.a)(ve.a.title, Object(ye.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(c.a)(ve.a.title, Object(ye.b)({
							isLoading: s
						}))
					})), a && r.a.createElement(U.a, {
						className: ve.a.subreddit
					}, r.a.createElement(ge.a, Ee({
						className: Object(c.a)(Object(ye.b)({
							isLoading: !1
						}))
					}, n)), r.a.createElement("div", {
						className: Object(c.a)(ve.a.subredditName, Object(ye.b)({
							isLoading: s
						}))
					})), r.a.createElement(U.a, null, r.a.createElement(we, Ee({
						isLoading: s
					}, n)), r.a.createElement("div", {
						className: Object(c.a)(ve.a.comments, Object(ye.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(c.a)(ve.a.share, Object(ye.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(c.a)(ve.a.ellipsis, Object(ye.b)({
							isLoading: s
						}))
					}))))
				}))),
				Se = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				Le = s.n(Se);
			var Ie = e => r.a.createElement("div", {
					className: Object(c.a)(Le.a.container, e.className)
				}, r.a.createElement("div", {
					className: Le.a.largePosts
				}, r.a.createElement(Ne, {
					className: Le.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(Ne, {
					className: Le.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(Ne, {
					className: Le.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				Te = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				Me = s.n(Te);
			const De = 326,
				Be = 12,
				We = {
					stiffness: 210,
					damping: 30
				},
				Fe = 100,
				Ue = "post_carousel_item",
				Ve = e => {
					let {
						root: t,
						handleVisibilityChange: s,
						renderPost: n,
						...i
					} = e;
					const o = n ? n(i) : r.a.createElement(fe, i);
					return r.a.createElement(a.a, {
						root: t,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: s
					}, o)
				},
				Ae = Object(l.c)({
					isBlockingInterstitialEnabled: w.b,
					isBlockingInterstitialV2Enabled: w.c
				}),
				Re = Object(o.b)(Ae, (e, t) => {
					let {
						discoveryUnit: s,
						searchDiscoveryUnit: a,
						pageLayer: n
					} = t;
					return {
						openOverlay: t => e(Object(O.a)({
							pathname: Object(P.b)(t.permalink),
							state: Object(E.b)(n)
						})),
						trackPostClick: (t, s) => e((e, n) => a ? j.p(n(), a, t, s) : null),
						trackPostSubredditClick: t => e((e, n) => s ? j.r(n(), s, t) : a ? j.r(n(), a, t) : null),
						showModalOnPostLinkClick: t => e(Object(d.bb)(Object(P.b)(t.permalink), t.id))
					}
				}),
				He = Object(v.u)();
			t.a = He(Re(Object(k.c)(class extends _ {
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
							discoveryUnitSubreddit: a,
							listingKey: n,
							pageLayer: r,
							searchDiscoveryUnit: i,
							searchOptions: o
						} = this.props;
						let l;
						return (l = "subreddit" === t && o ? j.y(o, r, n, i) : i && o ? j.z(o, r, null, n, i) : j.o(s, a))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: a,
							singleSubredditMode: n
						} = this.props;
						return r.a.createElement(Ve, {
							"data-click-id": Ue,
							className: Me.a.largePost,
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
					if (this.props.isLoading || 0 === this.props.items.length) return r.a.createElement(Ie, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: l = De
					} = this.props, {
						scrollIndex: d,
						visibleItemsCount: m
					} = this.state, u = this.getMaxScrollIndex(m), p = this.getAdjustment({
						itemWidth: l,
						maxScrollIndex: u,
						scrollIndex: d,
						spacerWidth: Be,
						visibleItemsCount: m
					}), b = e ? Fe : this.getMarginLeft({
						adjustment: p,
						itemWidth: l,
						scrollIndex: d,
						spacerWidth: Be
					});
					return r.a.createElement("div", {
						className: Object(c.a)(Me.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, r.a.createElement(i.Motion, {
						defaultStyle: {
							marginLeft: e || n ? Fe : 0
						},
						style: {
							marginLeft: Object(i.spring)(b, o || We)
						}
					}, this.renderPosts), 0 !== d && r.a.createElement(g, {
						className: Object(c.a)(Me.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: a
					}), !this.state.itemsFitInContainer && (null == u || d < u) && r.a.createElement(C, {
						className: Object(c.a)(Me.a.arrowRight, n && !e && Me.a.slideIn, s),
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
				l = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				p = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				b = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = s("./src/reddit/components/Widgets/Base/index.tsx"),
				x = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				f = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/helpers/chooseVariant/index.ts"),
				C = s("./src/reddit/selectors/user.ts");
			const y = e => Object(C.M)(e) || f.tf.ShowTopContent === Object(g.c)(e, {
				experimentEligibilitySelector: g.a,
				experimentName: f.nf
			});
			var _ = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less"),
				v = s.n(k);
			const E = Object(l.b)(() => Object(d.c)({
				inSubredditTopContentExperiment: y,
				subredditUrl: _.d
			}), e => ({
				trackDiscoveryUnitView: t => e((e, s) => x.a(s(), t)),
				trackDismissClick: t => e((e, s) => x.c(s(), t)),
				trackPostView: r()((t, s, a) => e((e, n) => x.s(n(), t, s, a)), (e, t) => {
					let {
						id: s
					} = e;
					return `${s}-${t}`
				})
			}));
			class O extends o.a.Component {
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
					} = s, i = `${t}${m.W.TOP}?t=${r}`, l = o.a.createElement(h.a, {
						className: v.a.widgetHeader
					}, o.a.createElement("button", {
						className: v.a.closeButton,
						onClick: this.onCloseClick
					}, o.a.createElement(b.b, {
						className: v.a.closeIcon,
						"data-redditstyle": !0
					})), o.a.createElement(c.a, {
						className: v.a.headerLink,
						to: i
					}, a.fbt._("Top posts from the past {range}", [a.fbt._param("range", r)], {
						hk: "xhJKf"
					})));
					return o.a.createElement("div", {
						className: this.props.className
					}, o.a.createElement(u.a, {
						className: v.a.layout,
						header: l,
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
			t.default = E(O)
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
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/components/SubredditNameLink/index.tsx"),
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
					subredditOrProfile: b
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(p.a.container, t)
				}, r.a.createElement(c.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, r.a.createElement(l.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: b
				}), r.a.createElement("span", null, b.displayText)), ((e, t) => {
					if (t) return r.a.createElement("div", {
						role: "img",
						"aria-label": a.fbt._("Crossposted by{author}from{community}", [a.fbt._param("author", Object(d.d)(e)), a.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, r.a.createElement(m.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(u.author, s), b && b.isQuarantined && r.a.createElement(o.a, null))
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
				return c
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				o = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				l = s.n(o);

			function c(e) {
				const {
					source: t
				} = e.post;
				return n.a.createElement("div", {
					className: Object(r.a)(l.a.container, e.className)
				}, n.a.createElement(i.a, {
					className: Object(r.a)(l.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(r.a)(l.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(r.a)(l.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: l.a.thumbnailLinkText,
					outboundLinkIconClassName: l.a.thumbnailOutboundLinkIcon,
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
				return b
			})), s.d(t, "n", (function() {
				return h
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
				return k
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "i", (function() {
				return E
			})), s.d(t, "q", (function() {
				return O
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "l", (function() {
				return j
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
				l = s("./src/reddit/controls/Input/ModalInput.tsx"),
				c = s("./src/reddit/icons/svgs/Close/index.tsx"),
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
			const p = n.a.wrapped(c.a, "CloseIcon", m.a),
				b = n.a.section("ModalBody", m.a),
				h = n.a.section("ModalPostPreview", m.a),
				x = n.a.p("ModalText", m.a),
				f = n.a.div("ModalSmallText", m.a),
				g = n.a.div("ModalDescriptionText", m.a),
				C = n.a.div("ModalMetaText", m.a),
				y = n.a.label("ModalFormItem", m.a),
				_ = n.a.wrapped(l.a, "ModalInput", m.a),
				k = n.a.label("ModalInputLabel", m.a),
				v = n.a.footer("ModalFooter", m.a),
				E = n.a.header("ModalHeader", m.a),
				O = n.a.div("ModalTitle", m.a),
				P = n.a.div("ModalAnnotation", m.a),
				j = n.a.div("ModalMain", m.a),
				w = n.a.textarea("TextArea", m.a),
				N = n.a.wrapped(o.l, "WarningButton", m.a),
				S = n.a.wrapped(o.l, "PrimaryButton", m.a),
				L = n.a.wrapped(o.o, "CancelButton", m.a),
				I = n.a.wrapped(o.r, "RemoveButton", m.a),
				T = e => {
					let {
						className: t,
						...s
					} = e;
					return i.a.createElement(o.t, u({
						kind: o.b.Button,
						priority: o.c.Primary,
						className: Object(a.a)(m.a.ConfirmButton, t)
					}, s))
				}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var a = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/components/HumanDate/index.tsx"),
				r = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return o.a.createElement("span", {
					className: e.className
				}, t ? l._("Voting closed {timeAgo}", [l._param("timeAgo", o.a.createElement(n.d, {
					seconds: e.poll.endsAt / a.Sb
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
				l = s("./src/reddit/helpers/trackers/gallery.ts"),
				c = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/hooks/useTracking.ts");
			var m = n.a.memo(e => {
					const t = Object(a.useRef)(null),
						s = Object(d.a)(),
						r = Object(a.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: a
								} = t;
								a >= .5 && s(l.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(a.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, r, i), n.a.createElement("div", {
						role: "presentation"
					}, n.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/objectSelector/index.ts"),
				C = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.m.less"),
				_ = s.n(y);
			const k = Object(p.a)(() => Object(r.c)({
					basePixelMetadata: Object(g.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(h.b)(e, s.id)
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
						return Object(h.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(x.d)(e).pageType
				})),
				v = "post-container";
			class E extends n.a.Component {
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
						makePostContainerId: c,
						post: d,
						onClick: u,
						pageType: p,
						sendEvent: h,
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
								e && e.outboundUrl && h(Object(l.c)(d.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(_.a.WrappedPost, a, `Post ${d.id}`, {
							promotedlink: d.isSponsored
						}),
						"data-testid": v,
						id: c ? c(d.id) : d.id,
						tabIndex: -1
					}, s), k = !!d.media && d.media.type === b.o.VIDEO;
					return d.isSponsored || k ? n.a.createElement(o.a, {
						post: d,
						trackDisplay: !0
					}, y) : d.media && Object(b.E)(d.media) && C ? n.a.createElement(m, {
						postId: d.id
					}, y) : y
				}
			}
			t.a = k(Object(C.a)(Object(u.c)(E)))
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
				return T
			})), s.d(t, "a", (function() {
				return G
			}));
			var a = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/ads/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/OutboundLink/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				g = s("./src/reddit/helpers/path/index.ts"),
				C = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/models/Flair/index.ts"),
				k = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				E = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = s("./src/lib/getShortenedLink.ts"),
				P = s("./src/reddit/components/FlairWrapper/index.tsx"),
				j = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/lib/prettyPrintNumber/index.ts"),
				N = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				S = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				L = s.n(S);
			const I = Object(l.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var T, M = Object(i.b)(I)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, a = s ? s.totalVotes : "0";
					return r.a.createElement("div", {
						className: Object(d.a)(e.className, L.a.proposalMetaData)
					}, r.a.createElement("span", null, j.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [j.fbt._param("count", Object(w.a)(a)), j.fbt._plural(parseInt(a))], {
						hk: "4rP1VK"
					})), t && r.a.createElement(N.a, {
						className: L.a.proposalExpiry,
						poll: t
					}))
				})),
				D = s("./src/reddit/components/SEOTitle/index.tsx"),
				B = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				W = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/PostTitle/index.m.less"),
				V = s.n(U),
				A = s("./src/config.ts"),
				R = s("./src/reddit/hooks/useClickSourceData.ts"),
				H = s("./src/reddit/hooks/usePostContext.ts"),
				Q = s("./src/reddit/hooks/useTheme.ts"),
				q = s("./src/telemetry/models/Outbound.ts");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(T || (T = {}));
			const G = e => {
					let {
						size: t,
						titleColor: s,
						titleType: a,
						nowrap: n,
						children: i,
						className: o,
						redditStyle: l,
						shouldBlurTitle: c
					} = e;
					const m = Object(Q.a)();
					let u = "";
					switch (t) {
						case T.ExtraLarge:
							u = V.a.ExtraLarge;
							break;
						case T.Large:
							u = V.a.Large;
							break;
						case T.Medium:
							u = V.a.Medium;
							break;
						case T.Small:
							u = V.a.Small;
							break;
						case T.ExtraSmall:
							u = V.a.ExtraSmall;
							break;
						case T.Metadata:
							u = V.a.Metadata
					}
					return r.a.createElement("div", {
						className: Object(d.a)(V.a.Title, o, u, {
							[V.a.isNoWrap]: n,
							[V.a.blur]: c
						}),
						style: {
							"--posttitletextcolor": s || Object(E.a)({
								redditStyle: l,
								theme: m
							}).titleText
						}
					}, a ? r.a.createElement(D.b, {
						type: a
					}, i) : i)
				},
				Z = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: a,
						children: n,
						...i
					} = e;
					return r.a.createElement(o.a, z({}, i, {
						className: Object(d.a)(t, V.a.styledLink, {
							[V.a.isVisitedEnabled]: !s
						})
					}), n)
				},
				Y = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: a,
						children: n
					} = e;
					return r.a.createElement("div", {
						className: Object(d.a)(V.a.titleContainer, a, {
							[V.a.isNoWrap]: s,
							[V.a.isVisitedEnabled]: !t
						})
					}, n)
				},
				K = Object(l.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(u.q)(e, {
							pageLayer: s
						})
					},
					isNsfwBlurSubreddit: W.e,
					shouldOpenPostInNewTab: F.ib
				}),
				J = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: a
					} = t, n = Object(i.d)(), o = Object(R.a)(), l = Object(i.e)(B.b), d = Object(i.e)(B.c), m = e => {
						!l && !d || t.media && Object(k.H)(t.media) || (e.preventDefault(), n(Object(x.bb)(Object(g.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return r.a.createElement(Y, {
						nowrap: e.nowrap
					}, r.a.createElement(X, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return r.a.createElement(p.b, {
						href: t.source.url,
						isSponsored: a,
						postId: t.id,
						source: t.source
					}, r.a.createElement(X, e)); {
						const n = t.media && Object(k.H)(t.media) ? Object(C.c)(t.id, s.name) : t.permalink,
							i = e.isCommentPermalink ? Object(g.b)(n) : Object(h.a)(n, void 0, o);
						return r.a.createElement(Y, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, a ? ((e, t) => {
							const {
								source: s
							} = Object(c.t)(e, t.imageGalleryCurrentItem);
							return s ? r.a.createElement(p.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, r.a.createElement(X, t)) : r.a.createElement(X, t)
						})(t, e) : r.a.createElement(Z, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i,
							onClick: m
						}, r.a.createElement(X, e)))
					}
				},
				X = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: a
					} = e;
					let n = e.format ? e.format(a) : a.title;
					s && "string" == typeof n && (n = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(n));
					const i = e.isCommentsPage ? D.a.PostComments : D.a.PostItem,
						o = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return r.a.createElement(G, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: o,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && r.a.createElement(P.a, {
						titleFlair: t,
						nowrap: !0,
						post: a,
						sendEvent: e.sendEvent
					}), n)
				},
				$ = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: a
					} = e, {
						isSponsored: n
					} = a, i = e.isCommentsPage ? q.SourceElement.PostLink : q.SourceElement.ListingPostLink;
					if (s && a.isNSFW) return null;
					const o = !t && !e.isCrosspost && e.size !== T.Large && !a.isSponsored && !(a.media && Object(k.H)(a.media)) && (a.source || a.media && (a.media.type === k.o.GIFVIDEO || a.media.type === k.o.IMAGE || a.media.type === k.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (o) return r.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(k.D)(a),
							isSponsored: n,
							postId: a.id,
							source: a.source,
							sourceElement: i
						}, Object(O.a)(a), !a.isSponsored && r.a.createElement(y.a, {
							name: "external_link",
							className: V.a.outboundLinkIcon
						}))
					} else if (a.source && !e.isCrosspost && e.size !== T.Large && e.size !== T.ExtraLarge) return r.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: a.source.url,
						isSponsored: n,
						postId: a.id,
						source: a.source,
						sourceElement: i
					}, Object(O.a)(a), !a.isSponsored && r.a.createElement(y.a, {
						name: "external_link",
						className: V.a.outboundLinkIcon
					}));
					return null
				};
			class ee extends r.a.Component {
				getDynamicStyleTags() {
					return r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${V.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(a.c)(.45,Object(E.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(a.c)(.45,this.props.titleColor||Object(E.a)(this.props).titleText,Object(E.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: a,
						isOverlay: n,
						poll: i,
						post: o,
						showNSFWSpoilerFlairsOnly: l,
						showNSFWFlairsOnly: c
					} = this.props, m = s === _.b.Left, u = Object(P.b)(o), p = l ? u.filter(e => e.type === _.f.Nsfw || e.type === _.f.Spoiler) : m ? u.filter(e => Object(f.q)(e.type)) : [];
					let b = u;
					l ? b = [] : c ? b = u.filter(e => e.type === _.f.Nsfw) : m && (b = u.filter(e => !Object(f.q)(e.type)));
					const h = !n && !a,
						x = !t && p && p.length > 0 && h,
						g = !t && b && b.length > 0 && h;
					return r.a.createElement("div", {
						className: Object(d.a)(V.a.Component, e, o.id),
						ref: this.props.innerRef
					}, !l && x && r.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: o,
						sendEvent: this.props.sendEvent
					}), !Object(v.b)(o) && r.a.createElement(J, z({}, this.props, {
						leftFlair: l ? p : void 0
					})), i && r.a.createElement(M, {
						className: V.a.pollMeta,
						pollId: i.id
					}), r.a.createElement($, this.props), g && r.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: o,
						sendEvent: this.props.sendEvent
					}), r.a.createElement("div", {
						className: V.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${A.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = r.a.memo((function(e) {
				const t = Object(u.fb)(),
					s = Object(u.w)(t),
					a = Object(H.a)(),
					n = Object(i.e)(n => K(n, {
						...a,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					o = Object(Q.a)(),
					l = Object(m.b)();
				return a ? r.a.createElement(ee, z({
					pageLayer: t,
					isCommentPermalink: s
				}, a, n, e, {
					theme: o,
					sendEvent: l
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
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				u = s.n(m);
			const p = ["center", "top"],
				b = ["center", "bottom"],
				h = o.a.div("Container", u.a),
				x = Object(i.a)(l.b),
				f = Object(c.u)({
					isProfileListingPage: c.I
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
					return r.a.createElement(h, {
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
						tooltipPosition: b
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
				l = s("./src/reddit/constants/keycodes.ts"),
				c = s("./src/reddit/controls/Input/index.m.less"),
				d = s.n(c);

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
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === l.a.Escape && this.props.closeModal()
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
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./node_modules/react/index.js"),
				n = s("./src/lib/CSSVariableProvider/index.tsx");

			function r() {
				return Object(a.useContext)(n.b)
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
			const i = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-left-${e}`
			};
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), a = i("b", t), o = i("c", t), l = i("d", t);
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
					id: l,
					fill: r.a.white
				}, n.a.createElement("use", {
					xlinkHref: `#${o}`
				})), n.a.createElement("use", {
					fill: r.a.black,
					xlinkHref: `#${o}`
				}), n.a.createElement("g", {
					fill: r.a.alienblue,
					mask: `url(#${l})`
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
			const i = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-right-${e}`
			};
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), a = i("b", t), o = i("c", t), l = i("d", t);
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
					id: l,
					fill: r.a.white
				}, n.a.createElement("use", {
					xlinkHref: `#${o}`
				})), n.a.createElement("use", {
					fill: r.a.black,
					xlinkHref: `#${o}`
				}), n.a.createElement("g", {
					fill: r.a.alienblue,
					mask: `url(#${l})`
				}, n.a.createElement("path", {
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
				l = s.n(o);

			function c() {
				return (c = Object.assign || function(e) {
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
				return n.a.createElement("div", c({
					className: Object(i.a)(l.a.expandRightContainer, t)
				}, d), n.a.createElement("div", {
					className: l.a.left,
					style: {
						flexBasis: r,
						height: a,
						marginRight: o
					}
				}, Array.isArray(s) && s[0]), n.a.createElement("div", {
					className: l.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditTopContent.767cfcad479045d963fd.js.map