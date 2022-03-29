// https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.a5fa85036c758c7470d5.js
// Retrieved at 3/29/2022, 10:20:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["TopWeekPostsDiscoveryUnit"], {
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
			const r = [n.rc, n.pb, n.B, n.Q, n.kb, n.Sb],
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
					[n.rc]: e => a.fbt._({
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
					[n.rc]: e => a.fbt._("{amount}y", [a.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[n.pb]: e => a.fbt._("{amount}m", [a.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.rc]: e => a.fbt._("{amount}y", [a.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					l = new Date(e).getTime(),
					d = {
						[n.rc]: "",
						[n.pb]: "",
						[n.B]: "",
						[n.Q]: "",
						[n.kb]: "",
						[n.Sb]: ""
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
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				m = s("./node_modules/lodash/values.js"),
				u = s.n(m),
				p = s("./src/lib/fastdom/index.ts"),
				b = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx"),
				h = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx"),
				x = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				f = s.n(x);
			const g = e => r.a.createElement("button", {
					className: Object(l.a)(f.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(b.a, {
					className: f.a.arrowIcon,
					seed: e.seed
				})),
				C = e => r.a.createElement("button", {
					className: Object(l.a)(f.a.arrow, e.className),
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
			var E = y,
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/clickSourceData/index.ts"),
				O = s("./src/reddit/helpers/overlay/index.ts"),
				_ = s("./src/reddit/helpers/path/index.ts"),
				j = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				N = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				S = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/lib/isUrl/index.ts"),
				I = s("./src/lib/prettyPrintNumber/index.ts"),
				L = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				T = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				M = s("./src/reddit/constants/posts.ts"),
				D = s("./src/lib/constants/index.ts"),
				F = s("./src/reddit/components/HumanDate/index.tsx"),
				W = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				B = s("./src/reddit/hooks/useClickSourceData.ts"),
				A = s("./src/reddit/layout/row/Inline/index.tsx"),
				U = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				R = s.n(U);
			var H = e => {
					const t = M.a.PROFILE,
						s = Object(W.a)(e.author, t),
						a = Object(B.a)();
					return r.a.createElement("div", {
						className: Object(l.a)(R.a.container, e.className)
					}, r.a.createElement(A.a, {
						className: R.a.layout
					}, r.a.createElement("div", {
						className: R.a.textContainer
					}, r.a.createElement("span", {
						className: R.a.description
					}, S.fbt._("posted by", null, {
						hk: "wl0iP"
					})), e.author === D.E ? r.a.createElement("span", {
						className: R.a.authorName
					}, Object(W.b)(e.author, t)) : r.a.createElement(T.a, {
						className: R.a.authorName,
						to: {
							pathname: s,
							state: a
						}
					}, Object(W.b)(e.author, t)), r.a.createElement("span", {
						className: R.a.timestamp
					}, r.a.createElement(F.d, {
						seconds: e.created / D.Sb
					})))))
				},
				V = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				Q = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				z = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				q = s.n(z);
			var G = e => {
					const t = Object(W.a)(e.name, e.type);
					return r.a.createElement("div", {
						className: Object(l.a)(q.a.container, e.className)
					}, r.a.createElement(Q.a, {
						className: q.a.layout
					}, r.a.createElement("div", {
						className: q.a.iconContainer
					}, e.iconUrl ? r.a.createElement("img", {
						className: q.a.icon,
						src: e.iconUrl
					}) : r.a.createElement(V.a, {
						className: q.a.planetIcon,
						"data-redditstyle": !0
					})), r.a.createElement("div", {
						className: q.a.textContainer
					}, r.a.createElement(T.a, {
						"data-click-id": "subreddit",
						className: q.a.name,
						to: t
					}, Object(W.b)(e.displayText || e.name, e.type)), r.a.createElement("span", {
						className: q.a.separator
					}, "•"), r.a.createElement("span", {
						className: q.a.timestamp
					}, r.a.createElement(F.d, {
						seconds: e.created / D.Sb
					})))))
				},
				K = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				J = s("./src/reddit/components/Media/index.tsx"),
				Z = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				Y = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
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
				ce = s("./src/reddit/components/MiniCardPost/index.m.less"),
				le = s.n(ce),
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
						forceLoadMedia: c,
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
					} = a || p, E = !y && !!p.source && Object(w.a)(p.source.url);
					let v = y && r.a.createElement(J.a, {
							autoplayPref: e,
							availableWidth: t,
							className: le.a.media,
							forceAspectRatio: ie.c,
							imageBoxClassName: le.a.mediaImageBox,
							imageBoxContentImageClassName: le.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: a || p,
							scrollerItemRef: b,
							shouldPause: h,
							shouldLoad: c,
							showCentered: !1,
							showFull: !1
						}),
						P = !1;
					y && v && (y.type !== ie.o.RTJSON && y.type !== ie.o.TEXT ? (v = r.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, v), P = !0) : y && y.content && Object(ae.a)(p) && (v = r.a.createElement("div", {
						className: pe.a.textWrapper
					}, v)));
					const k = !P && !E;
					let O;
					return C && (O = Object(oe.h)(C) ? Object(re.b)(C) : Object(re.c)(C)), r.a.createElement($.a, {
						className: Object(l.a)(pe.a.container, me.a.largeAndMediumActiveStyles, me.a.largeAndMediumPostStyles, le.a.postContainer, Object(ne.a)(this.props), s),
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
						className: le.a.backgroundWrapper,
						flairStyleTemplate: o
					}, r.a.createElement("div", {
						className: Object(l.a)(pe.a.innerContainer, le.a.innerContainer)
					}, g && C && r.a.createElement(G, be({
						created: p.created
					}, O)), x && C && r.a.createElement(H, be({
						created: p.created,
						author: p.author
					}, O)), r.a.createElement(ee.c, {
						className: k ? pe.a.postTitle : pe.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: ee.b.Large,
						titleColor: o && o.postTitleColor
					}), f && C && r.a.createElement(Z.a, {
						className: pe.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: d,
						post: p,
						subredditOrProfile: C
					}), (P || E) && r.a.createElement("div", {
						className: pe.a.flexSpacer
					}), E && r.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, r.a.createElement(Y.a, {
						className: pe.a.thumbnailWrapper,
						thumbnailClassName: pe.a.thumbnail,
						thumbnailContainerClassName: pe.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: o && o.postPlaceholderImage
					})), v, r.a.createElement("div", {
						className: pe.a.metaWrapper
					}, r.a.createElement("span", {
						className: pe.a.meta
					}, S.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [S.fbt._plural(p.score, "number", Object(I.b)(p.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: pe.a.meta
					}, S.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [S.fbt._plural(p.numComments, "number", Object(I.b)(p.numComments))], {
						hk: "1QQoSA"
					}))))), r.a.createElement(K.d, null))
				}
			}
			const xe = Object(se.b)(Object(te.a)(Object(L.a)(he)));
			class fe extends r.a.Component {
				render() {
					return r.a.createElement(xe, this.props)
				}
			}
			var ge = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Ce = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				ye = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				Ee = s("./src/reddit/models/Vote/index.ts"),
				ve = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				Pe = s.n(ve);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = Object(P.u)(),
				_e = Object(c.c)({
					isFakeSubreddit: P.z
				}),
				je = Object(o.b)(_e),
				Ne = e => {
					const t = {
						interactive: !1,
						voteState: Ee.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(l.a)(Pe.a.emptyVotes, e.className)
					}, r.a.createElement(Ce.d, t), r.a.createElement("div", {
						className: Object(l.a)(Pe.a.emptyScore, Object(ye.b)({
							isLoading: e.isLoading
						}))
					}), r.a.createElement(Ce.c, t))
				};
			var Se = Oe(je(Object(L.a)(e => {
					let {
						className: t,
						isLoading: s,
						showSubreddit: a,
						...n
					} = e;
					return r.a.createElement("div", {
						className: Object(l.a)(Pe.a.container, me.a.largeAndMediumPostStyles, t)
					}, r.a.createElement("div", {
						className: Object(l.a)(Pe.a.thumbnail, Object(ye.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Pe.a.content
					}, r.a.createElement("div", {
						className: Pe.a.titleContainer
					}, r.a.createElement("div", {
						className: Object(l.a)(Pe.a.title, Object(ye.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(l.a)(Pe.a.title, Object(ye.b)({
							isLoading: s
						}))
					})), a && r.a.createElement(A.a, {
						className: Pe.a.subreddit
					}, r.a.createElement(ge.a, ke({
						className: Object(l.a)(Object(ye.b)({
							isLoading: !1
						}))
					}, n)), r.a.createElement("div", {
						className: Object(l.a)(Pe.a.subredditName, Object(ye.b)({
							isLoading: s
						}))
					})), r.a.createElement(A.a, null, r.a.createElement(Ne, ke({
						isLoading: s
					}, n)), r.a.createElement("div", {
						className: Object(l.a)(Pe.a.comments, Object(ye.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(l.a)(Pe.a.share, Object(ye.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(l.a)(Pe.a.ellipsis, Object(ye.b)({
							isLoading: s
						}))
					}))))
				}))),
				we = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				Ie = s.n(we);
			var Le = e => r.a.createElement("div", {
					className: Object(l.a)(Ie.a.container, e.className)
				}, r.a.createElement("div", {
					className: Ie.a.largePosts
				}, r.a.createElement(Se, {
					className: Ie.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(Se, {
					className: Ie.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(Se, {
					className: Ie.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				Te = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				Me = s.n(Te);
			const De = 326,
				Fe = 12,
				We = {
					stiffness: 210,
					damping: 30
				},
				Be = 100,
				Ae = "post_carousel_item",
				Ue = e => {
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
				Re = Object(c.c)({
					isBlockingInterstitialEnabled: N.b
				}),
				He = Object(o.b)(Re, (e, t) => {
					let {
						discoveryUnit: s,
						searchDiscoveryUnit: a,
						pageLayer: n
					} = t;
					return {
						openOverlay: t => e(Object(O.a)({
							pathname: Object(_.b)(t.permalink),
							state: Object(k.b)(n)
						})),
						trackPostClick: (t, s) => e((e, n) => a ? j.q(n(), a, t, s) : null),
						trackPostSubredditClick: t => e((e, n) => s ? j.s(n(), s, t) : a ? j.s(n(), a, t) : null),
						showModalOnPostLinkClick: t => e(Object(d.bb)(Object(_.b)(t.permalink), t.id))
					}
				}),
				Ve = Object(P.u)();
			t.a = Ve(He(Object(v.c)(class extends E {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null,
						itemsFitInContainer: !1
					}, this.onClickPost = (e, t) => {
						this.props.isBlockingInterstitialEnabled ? (e.preventDefault(), this.props.showModalOnPostLinkClick(t)) : this.props.openOverlay(t), this.props.trackPostClick(t.id, this.props.searchOptions)
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
						return (c = "subreddit" === t && o ? j.z(o, r, n, i) : i && o ? j.A(o, r, n, i) : j.p(s, a))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: a,
							singleSubredditMode: n
						} = this.props;
						return r.a.createElement(Ue, {
							"data-click-id": Ae,
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
					if (this.props.isLoading || 0 === this.props.items.length) return r.a.createElement(Le, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: c = De
					} = this.props, {
						scrollIndex: d,
						visibleItemsCount: m
					} = this.state, u = this.getMaxScrollIndex(m), p = this.getAdjustment({
						itemWidth: c,
						maxScrollIndex: u,
						scrollIndex: d,
						spacerWidth: Fe,
						visibleItemsCount: m
					}), b = e ? Be : this.getMarginLeft({
						adjustment: p,
						itemWidth: c,
						scrollIndex: d,
						spacerWidth: Fe
					});
					return r.a.createElement("div", {
						className: Object(l.a)(Me.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, r.a.createElement(i.Motion, {
						defaultStyle: {
							marginLeft: e || n ? Be : 0
						},
						style: {
							marginLeft: Object(i.spring)(b, o || We)
						}
					}, this.renderPosts), 0 !== d && r.a.createElement(g, {
						className: Object(l.a)(Me.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: a
					}), !this.state.itemsFitInContainer && (null == u || d < u) && r.a.createElement(C, {
						className: Object(l.a)(Me.a.arrowRight, n && !e && Me.a.slideIn, s),
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				d = s("./src/reddit/icons/svgs/Close/index.tsx"),
				m = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = s("./src/reddit/selectors/discoveryUnit.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				h = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				x = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				f = s("./src/reddit/components/PostContainer/index.tsx"),
				g = s("./src/reddit/connectors/miniCardPost.ts"),
				C = s("./src/reddit/contexts/Post/index.tsx"),
				y = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/config.ts"),
				P = s("./src/lib/isUrl/index.ts"),
				k = s("./src/reddit/components/Media/index.tsx"),
				O = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				_ = s("./src/reddit/components/PostTitle/index.tsx"),
				j = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				N = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				S = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				w = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/components/MiniCardPost/index.m.less"),
				L = s.n(I),
				T = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				M = s.n(T);
			const D = `${v.a.assetPath}/img/link-placeholder.png`;
			var F = e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: a,
						crosspostRoot: r,
						flairStyleTemplate: i,
						forceLoadMedia: c,
						post: l,
						shouldPause: d,
						scrollerItemRef: m
					} = e, {
						media: u
					} = r || l, p = u && n.a.createElement(k.a, {
						autoplayPref: t,
						availableWidth: s,
						className: L.a.media,
						"data-redditstyle": !0,
						forceAspectRatio: w.c,
						imageBoxClassName: L.a.mediaImageBox,
						imageBoxContentImageClassName: L.a.mediaImageBoxContentImage,
						isListing: !0,
						isMiniCard: !0,
						isMiniCardHQPreviews: !0,
						isNotCardView: !0,
						post: r || l,
						scrollerItemRef: m,
						shouldLoad: c,
						shouldPause: d,
						showCentered: !1,
						showFull: !1
					});
					let b, h = !0;
					const x = !!l.source && Object(P.a)(l.source.url) || !!l.thumbnail && Object(P.a)(l.thumbnail.url);
					return !u && x ? (h = !1, b = n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: M.a.flexSpacer
					}), n.a.createElement("div", {
						className: M.a.mediaWrapper
					}, n.a.createElement(O.a, {
						className: M.a.thumbnailWrapper,
						thumbnailClassName: M.a.thumbnail,
						thumbnailContainerClassName: M.a.thumbnailContainer,
						thumbnailLinkIconClassName: M.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: l,
						showPlaceholderContentType: !i || !i.postPlaceholderImage,
						templatePlaceholderImage: i ? i.postPlaceholderImage : D,
						usePreview: !0
					})))) : u && p ? u.type !== w.o.RTJSON && u.type !== w.o.TEXT ? (h = !1, b = n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: M.a.flexSpacer
					}), n.a.createElement("div", {
						className: M.a.mediaWrapper
					}, p))) : b = Object(S.a)(l) || Object(N.c)(l) && Object(j.a)(l) ? n.a.createElement("div", {
						className: M.a.textWrapper
					}, p) : n.a.createElement("div", {
						className: M.a.flexSpacer
					}) : b = n.a.createElement("div", {
						className: M.a.flexSpacer
					}), n.a.createElement("div", {
						className: Object(o.a)(M.a.body, a)
					}, n.a.createElement(_.c, {
						className: h ? M.a.postTitle : M.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: l,
						size: _.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: i && i.postTitleColor
					}), b)
				},
				W = s("./node_modules/fbt/lib/FbtPublic.js"),
				B = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				U = s.n(A);
			var R = e => {
					const {
						className: t,
						post: s
					} = e;
					return n.a.createElement("div", {
						className: Object(o.a)(U.a.footer, t)
					}, n.a.createElement("span", {
						className: U.a.metaText
					}, W.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [W.fbt._plural(s.score, "number", Object(B.b)(s.score))], {
						hk: "2ncFte"
					})), n.a.createElement("span", {
						className: U.a.metaText
					}, W.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [W.fbt._plural(s.numComments, "number", Object(B.b)(s.numComments))], {
						hk: "1QQoSA"
					})))
				},
				H = s("./src/reddit/components/SubredditIcon/index.tsx"),
				V = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				Q = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				z = s("./src/reddit/constants/posts.ts"),
				q = s("./src/reddit/controls/Button/index.tsx"),
				G = s("./src/reddit/controls/InternalLink/index.tsx"),
				K = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				J = s.n(K);
			var Z = e => {
					const {
						className: t,
						getSubscribeEventFactory: s,
						onSubredditOrProfileClick: a,
						shouldShowSubscribeButton: r,
						subredditOrProfile: i
					} = e, c = Object(E.h)(i) ? z.a.PROFILE : z.a.SUBREDDIT;
					return n.a.createElement("div", {
						className: Object(o.a)(J.a.header, t)
					}, n.a.createElement(G.a, {
						className: J.a.iconLink,
						"data-redditstyle": !0,
						to: i.url,
						onMouseDown: a
					}, n.a.createElement(H.b, {
						className: J.a.icon,
						subredditOrProfile: i
					})), n.a.createElement("div", {
						className: J.a.name
					}, n.a.createElement(G.a, {
						className: J.a.link,
						"data-redditstyle": !0,
						to: i.url,
						onMouseDown: a
					}, Object(Q.b)(i.displayText || i.name, c))), r && n.a.createElement(V.a, {
						className: J.a.subscribe,
						"data-redditstyle": !0,
						getEventFactory: s,
						identifier: {
							name: i.name,
							type: c
						},
						size: q.d.XXS,
						small: !0
					}))
				},
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				X = s.n(Y),
				$ = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less"),
				ee = s.n($);
			const te = Object(i.a)(e => e.subredditOrProfile, e => e.subscribedProfiles, e => e.subscribedSubreddits, (e, t, s) => {
				if (!e) return !1;
				return (Object(E.h)(e) ? t : s).some(t => t.id === e.id)
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
						flairStyleTemplate: a,
						onClickPost: r,
						post: i,
						subredditOrProfile: c,
						subscribedProfiles: l,
						subscribedSubreddits: d
					} = t, m = !te({
						subredditOrProfile: c,
						subscribedProfiles: l,
						subscribedSubreddits: d
					});
					return n.a.createElement(f.a, {
						className: Object(o.a)(ee.a.container, X.a.largeAndMediumActiveStyles, X.a.largeAndMediumPostStyles, X.a.mUseRedditTheme, L.a.postContainer, Object(y.a)(this.props), e),
						eventFactory: s,
						onClick: r,
						post: i,
						style: {
							...Object(y.b)(this.props.flairStyleTemplate),
							...Object(y.d)(this.props)
						}
					}, n.a.createElement(x.a, {
						className: ee.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: a
					}, c && n.a.createElement(Z, {
						getSubscribeEventFactory: this.getSubscribeEventFactory,
						onSubredditOrProfileClick: this.trackSubredditOrProfileClicked,
						subredditOrProfile: c,
						shouldShowSubscribeButton: m
					}), n.a.createElement(F, t), n.a.createElement(R, {
						"data-redditstyle": !0,
						post: i
					})), n.a.createElement(h.d, null))
				}
			}
			const ae = Object(C.b)(Object(g.a)(Object(b.a)(se)));
			class ne extends n.a.Component {
				render() {
					return n.a.createElement(ae, this.props)
				}
			}
			const re = 236;
			var ie = s("./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.m.less"),
				oe = s.n(ie);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: le
			} = s("./node_modules/fbt/lib/FbtPublic.js"), de = [], me = () => {}, ue = () => void 0, pe = c.a.button("CloseButton", oe.a), be = Object(i.a)(p.z, e => e.filter(e => 9 === e.length)), he = Object(i.c)({
				discoveryUnit: e => Object(u.b)(e, {
					unitName: m.j
				}),
				postIds: be
			}), xe = Object(r.b)(he);
			class fe extends n.a.Component {
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
							subscribedProfiles: de,
							subscribedSubreddits: de
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
						className: Object(o.a)(oe.a.container, e)
					}, n.a.createElement("div", {
						className: oe.a.header
					}, n.a.createElement("div", {
						className: oe.a.title
					}, le._("Top posts of the week", null, {
						hk: "1qPdO2"
					})), n.a.createElement(pe, {
						onClick: this.handleCloseClick
					}, n.a.createElement(d.a, {
						className: oe.a.closeIcon
					}))), n.a.createElement("div", {
						className: oe.a.body
					}, n.a.createElement(l.a, {
						className: oe.a.carousel,
						discoveryUnit: t,
						isLoading: !1,
						items: s,
						itemWidth: re,
						leftArrowClassName: oe.a.arrow,
						onPostView: me,
						renderPost: this.renderPost,
						rightArrowClassName: oe.a.arrow
					}))) : null
				}
			}
			t.default = xe(fe)
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
					subredditOrProfile: b
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(p.a.container, t)
				}, r.a.createElement(l.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, r.a.createElement(c.b, {
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
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/objectSelector/index.ts"),
				C = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.m.less"),
				E = s.n(y);
			const v = Object(p.a)(() => Object(r.c)({
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
			}));
			class P extends n.a.Component {
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
								e && e.outboundUrl && h(Object(c.c)(d.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(E.a.WrappedPost, a, `Post ${d.id}`, {
							promotedlink: d.isSponsored
						}),
						"data-testid": "post-container",
						id: l ? l(d.id) : d.id,
						tabIndex: -1
					}, s), v = !!d.media && d.media.type === b.o.VIDEO;
					return d.isSponsored || v ? n.a.createElement(o.a, {
						post: d,
						trackDisplay: !0
					}, y) : d.media && Object(b.E)(d.media) && C ? n.a.createElement(m, {
						postId: d.id
					}, y) : y
				}
			}
			t.a = v(Object(C.a)(Object(u.c)(P)))
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
				return q
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
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/OutboundLink/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				g = s("./src/reddit/helpers/path/index.ts"),
				C = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/models/Flair/index.ts"),
				v = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = s("./src/lib/getShortenedLink.ts"),
				_ = s("./src/reddit/components/FlairWrapper/index.tsx"),
				j = s("./node_modules/fbt/lib/FbtPublic.js"),
				N = s("./src/lib/prettyPrintNumber/index.ts"),
				S = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				w = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				I = s.n(w);
			const L = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var T, M = Object(i.b)(L)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, a = s ? s.totalVotes : "0";
					return r.a.createElement("div", {
						className: Object(d.a)(e.className, I.a.proposalMetaData)
					}, r.a.createElement("span", null, j.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [j.fbt._param("count", Object(N.a)(a)), j.fbt._plural(parseInt(a))], {
						hk: "4rP1VK"
					})), t && r.a.createElement(S.a, {
						className: I.a.proposalExpiry,
						poll: t
					}))
				})),
				D = s("./src/reddit/components/SEOTitle/index.tsx"),
				F = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				B = s("./src/reddit/components/PostTitle/index.m.less"),
				A = s.n(B),
				U = s("./src/config.ts"),
				R = s("./src/reddit/hooks/useClickSourceData.ts"),
				H = s("./src/reddit/hooks/usePostContext.ts"),
				V = s("./src/reddit/hooks/useTheme.ts"),
				Q = s("./src/telemetry/models/Outbound.ts");

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
			const q = e => {
					let {
						size: t,
						titleColor: s,
						titleType: a,
						nowrap: n,
						children: i,
						className: o,
						redditStyle: c
					} = e;
					const l = Object(V.a)();
					let m = "";
					switch (t) {
						case T.ExtraLarge:
							m = A.a.ExtraLarge;
							break;
						case T.Large:
							m = A.a.Large;
							break;
						case T.Medium:
							m = A.a.Medium;
							break;
						case T.Small:
							m = A.a.Small;
							break;
						case T.ExtraSmall:
							m = A.a.ExtraSmall;
							break;
						case T.Metadata:
							m = A.a.Metadata
					}
					return r.a.createElement("div", {
						className: Object(d.a)(A.a.Title, o, m, {
							[A.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": s || Object(k.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, a ? r.a.createElement(D.b, {
						type: a
					}, i) : i)
				},
				G = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: a,
						children: n,
						...i
					} = e;
					return r.a.createElement(o.a, z({}, i, {
						className: Object(d.a)(t, A.a.styledLink, {
							[A.a.isVisitedEnabled]: !s
						})
					}), n)
				},
				K = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: a,
						children: n
					} = e;
					return r.a.createElement("div", {
						className: Object(d.a)(A.a.titleContainer, a, {
							[A.a.isNoWrap]: s,
							[A.a.isVisitedEnabled]: !t
						})
					}, n)
				},
				J = Object(c.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(u.q)(e, {
							pageLayer: s
						})
					},
					shouldOpenPostInNewTab: W.ib
				}),
				Z = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: a
					} = t, n = Object(i.d)(), o = Object(R.a)(), c = Object(i.e)(F.b), d = e => {
						!c || t.media && Object(v.H)(t.media) || (e.preventDefault(), n(Object(x.bb)(Object(g.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return r.a.createElement(K, {
						nowrap: e.nowrap
					}, r.a.createElement(Y, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return r.a.createElement(p.b, {
						href: t.source.url,
						isSponsored: a,
						postId: t.id,
						source: t.source
					}, r.a.createElement(Y, e)); {
						const n = t.media && Object(v.H)(t.media) ? Object(C.c)(t.id, s.name) : t.permalink,
							i = e.isCommentPermalink ? Object(g.b)(n) : Object(h.a)(n, void 0, o);
						return r.a.createElement(K, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, a ? ((e, t) => {
							const {
								source: s
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return s ? r.a.createElement(p.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, r.a.createElement(Y, t)) : r.a.createElement(Y, t)
						})(t, e) : r.a.createElement(G, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i,
							onClick: d
						}, r.a.createElement(Y, e)))
					}
				},
				Y = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: a
					} = e;
					let n = e.format ? e.format(a) : a.title;
					s && "string" == typeof n && (n = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(n));
					const i = e.isCommentsPage ? D.a.PostComments : D.a.PostItem;
					return r.a.createElement(q, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && r.a.createElement(_.a, {
						titleFlair: t,
						nowrap: !0,
						post: a,
						sendEvent: e.sendEvent
					}), n)
				},
				X = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: a
					} = s, n = e.isCommentsPage ? Q.SourceElement.PostLink : Q.SourceElement.ListingPostLink, i = !t && !e.isCrosspost && e.size !== T.Large && !s.isSponsored && !(s.media && Object(v.H)(s.media)) && (s.source || s.media && (s.media.type === v.o.GIFVIDEO || s.media.type === v.o.IMAGE || s.media.type === v.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return r.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(v.D)(s),
							isSponsored: a,
							postId: s.id,
							source: s.source,
							sourceElement: n
						}, Object(O.a)(s), !s.isSponsored && r.a.createElement(y.a, {
							name: "external_link",
							className: A.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== T.Large && e.size !== T.ExtraLarge) return r.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: a,
						postId: s.id,
						source: s.source,
						sourceElement: n
					}, Object(O.a)(s), !s.isSponsored && r.a.createElement(y.a, {
						name: "external_link",
						className: A.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends r.a.Component {
				getDynamicStyleTags() {
					return r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${A.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(a.c)(.45,Object(k.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(a.c)(.45,this.props.titleColor||Object(k.a)(this.props).titleText,Object(k.a)(this.props).body)};\n        }\n      `
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
						showNSFWSpoilerFlairsOnly: c,
						showNSFWFlairsOnly: l
					} = this.props, m = s === E.b.Left, u = Object(_.b)(o), p = c ? u.filter(e => e.type === E.f.Nsfw || e.type === E.f.Spoiler) : m ? u.filter(e => Object(f.q)(e.type)) : [];
					let b = u;
					c ? b = [] : l ? b = u.filter(e => e.type === E.f.Nsfw) : m && (b = u.filter(e => !Object(f.q)(e.type)));
					const h = !n && !a,
						x = !t && p && p.length > 0 && h,
						g = !t && b && b.length > 0 && h;
					return r.a.createElement("div", {
						className: Object(d.a)(A.a.Component, e, o.id),
						ref: this.props.innerRef
					}, !c && x && r.a.createElement(_.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: o,
						sendEvent: this.props.sendEvent
					}), !Object(P.b)(o) && r.a.createElement(Z, z({}, this.props, {
						leftFlair: c ? p : void 0
					})), i && r.a.createElement(M, {
						className: A.a.pollMeta,
						pollId: i.id
					}), r.a.createElement(X, this.props), g && r.a.createElement(_.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: o,
						sendEvent: this.props.sendEvent
					}), r.a.createElement("div", {
						className: A.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${U.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = r.a.memo((function(e) {
				const t = Object(u.fb)(),
					s = Object(u.w)(t),
					a = Object(H.a)(),
					n = Object(i.e)(n => J(n, {
						...a,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					o = Object(V.a)(),
					c = Object(m.b)();
				return a ? r.a.createElement($, z({
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
				b = ["center", "bottom"],
				h = o.a.div("Container", u.a),
				x = Object(i.a)(c.b),
				f = Object(l.u)({
					isProfileListingPage: l.I
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				l = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
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
			const u = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", d.a);
			class p extends n.a.Component {
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
							onUnsubscribe: a,
							postId: r,
							sendEvent: i,
							size: l,
							userIsSubscriber: d,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...h
						} = this.props, x = this.state.isHovered, f = Object(c.a)({
							type: t.type,
							key: x ? "unsubscribe" : "subscribed"
						});
						return n.a.createElement(o.t, m({
							className: e,
							priority: h.shouldReverseColor ? o.c.Primary : o.c.Secondary,
							text: f,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: o.d.XSP
						}, h))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: a,
							postId: r,
							sendEvent: i,
							size: l,
							userIsSubscriber: d,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...h
						} = this.props, x = Object(c.a)({
							type: t.type,
							key: "subscribe"
						});
						return n.a.createElement(o.t, m({
							className: e,
							priority: h.shouldReverseColor ? o.c.Secondary : o.c.Primary,
							size: o.d.XSP,
							text: x,
							onClick: this.onClick
						}, h, {
							id: `subscribe-button-${r}`,
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
			t.a = Object(i.a)(Object(r.c)(p))
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
			const i = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-right-${e}`
			};
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.a5fa85036c758c7470d5.js.map