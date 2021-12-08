// https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.425003a4a0aae39b8014.js
// Retrieved at 12/7/2021, 9:40:05 PM by Reddit Dataminer v1.0.0
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
				c = s("./src/lib/classNames/index.ts"),
				l = s("./node_modules/lodash/values.js"),
				d = s.n(l),
				m = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx"),
				p = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx"),
				b = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				h = s.n(b);
			const x = e => r.a.createElement("button", {
					className: Object(c.a)(h.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(u.a, {
					className: h.a.arrowIcon,
					seed: e.seed
				})),
				f = e => r.a.createElement("button", {
					className: Object(c.a)(h.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(p.a, {
					className: h.a.arrowIcon,
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
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/clickSourceData/index.ts"),
				P = s("./src/reddit/helpers/overlay/index.ts"),
				k = s("./src/reddit/helpers/path/index.ts"),
				_ = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				O = s("./node_modules/fbt/lib/FbtPublic.js"),
				j = s("./src/lib/isUrl/index.ts"),
				N = s("./src/lib/prettyPrintNumber/index.ts"),
				S = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				w = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				I = s("./src/reddit/constants/posts.ts"),
				L = s("./src/lib/constants/index.ts"),
				T = s("./src/reddit/components/HumanDate/index.tsx"),
				M = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				D = s("./src/reddit/hooks/useClickSourceData.ts"),
				F = s("./src/reddit/layout/row/Inline/index.tsx"),
				W = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				A = s.n(W);
			var R = e => {
					const t = I.a.PROFILE,
						s = Object(M.a)(e.author, t),
						a = Object(D.a)();
					return r.a.createElement("div", {
						className: Object(c.a)(A.a.container, e.className)
					}, r.a.createElement(F.a, {
						className: A.a.layout
					}, r.a.createElement("div", {
						className: A.a.textContainer
					}, r.a.createElement("span", {
						className: A.a.description
					}, O.fbt._("posted by", null, {
						hk: "wl0iP"
					})), r.a.createElement(w.a, {
						className: A.a.authorName,
						to: {
							pathname: s,
							state: a
						}
					}, Object(M.b)(e.author, t)), r.a.createElement("span", {
						className: A.a.timestamp
					}, r.a.createElement(T.d, {
						seconds: e.created / L.Rb
					})))))
				},
				B = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				U = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				V = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				H = s.n(V);
			var Q = e => {
					const t = Object(M.a)(e.name, e.type);
					return r.a.createElement("div", {
						className: Object(c.a)(H.a.container, e.className)
					}, r.a.createElement(U.a, {
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
					}, r.a.createElement(w.a, {
						"data-click-id": "subreddit",
						className: H.a.name,
						to: t
					}, Object(M.b)(e.displayText || e.name, e.type)), r.a.createElement("span", {
						className: H.a.separator
					}, "•"), r.a.createElement("span", {
						className: H.a.timestamp
					}, r.a.createElement(T.d, {
						seconds: e.created / L.Rb
					})))))
				},
				z = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				q = s("./src/reddit/components/Media/index.tsx"),
				G = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				K = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				J = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Z = s("./src/reddit/components/PostContainer/index.tsx"),
				Y = s("./src/reddit/components/PostTitle/index.tsx"),
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
						scrollerItemRef: b,
						shouldPause: h,
						showAuthorBlock: x = !1,
						showMetaLine: f = !0,
						showSubscribeBlock: g = !1,
						subredditOrProfile: C
					} = this.props, {
						media: y
					} = a || p, E = !y && !!p.source && Object(j.a)(p.source.url);
					let v = y && r.a.createElement(q.a, {
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
							scrollerItemRef: b,
							shouldPause: h,
							shouldLoad: l,
							showCentered: !1,
							showFull: !1
						}),
						P = !1;
					y && v && (y.type !== ae.o.RTJSON && y.type !== ae.o.TEXT ? (v = r.a.createElement("div", {
						className: de.a.mediaWrapper
					}, v), P = !0) : y && y.content && Object(ee.a)(p) && (v = r.a.createElement("div", {
						className: de.a.textWrapper
					}, v)));
					const k = !P && !E;
					let _;
					return C && (_ = Object(ne.h)(C) ? Object(se.b)(C) : Object(se.c)(C)), r.a.createElement(Z.a, {
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
					}, r.a.createElement(J.a, {
						className: ie.a.backgroundWrapper,
						flairStyleTemplate: o
					}, r.a.createElement("div", {
						className: Object(c.a)(de.a.innerContainer, ie.a.innerContainer)
					}, g && C && r.a.createElement(Q, me({
						created: p.created
					}, _)), x && C && r.a.createElement(R, me({
						created: p.created,
						author: p.author
					}, _)), r.a.createElement(Y.c, {
						className: k ? de.a.postTitle : de.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: Y.b.Large,
						titleColor: o && o.postTitleColor
					}), f && C && r.a.createElement(G.a, {
						className: de.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: d,
						post: p,
						subredditOrProfile: C
					}), (P || E) && r.a.createElement("div", {
						className: de.a.flexSpacer
					}), E && r.a.createElement("div", {
						className: de.a.mediaWrapper
					}, r.a.createElement(K.a, {
						className: de.a.thumbnailWrapper,
						thumbnailClassName: de.a.thumbnail,
						thumbnailContainerClassName: de.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: o && o.postPlaceholderImage
					})), v, r.a.createElement("div", {
						className: de.a.metaWrapper
					}, r.a.createElement("span", {
						className: de.a.meta
					}, O.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [O.fbt._plural(p.score, "number", Object(N.b)(p.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: de.a.meta
					}, O.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [O.fbt._plural(p.numComments, "number", Object(N.b)(p.numComments))], {
						hk: "1QQoSA"
					}))))), r.a.createElement(z.d, null))
				}
			}
			const pe = Object($.b)(Object(X.a)(Object(S.a)(ue)));
			class be extends r.a.Component {
				render() {
					return r.a.createElement(pe, this.props)
				}
			}
			var he = s("./node_modules/reselect/es/index.js"),
				xe = s("./src/reddit/components/SubredditIcon/index.tsx"),
				fe = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				ge = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				Ce = s("./src/reddit/models/Vote/index.ts"),
				ye = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				Ee = s.n(ye);

			function ve() {
				return (ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Pe = Object(E.u)(),
				ke = Object(he.c)({
					isFakeSubreddit: E.y
				}),
				_e = Object(o.b)(ke),
				Oe = e => {
					const t = {
						interactive: !1,
						voteState: Ce.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(c.a)(Ee.a.emptyVotes, e.className)
					}, r.a.createElement(fe.d, t), r.a.createElement("div", {
						className: Object(c.a)(Ee.a.emptyScore, Object(ge.b)({
							isLoading: e.isLoading
						}))
					}), r.a.createElement(fe.c, t))
				};
			var je = Pe(_e(Object(S.a)(({
					className: e,
					isLoading: t,
					showSubreddit: s,
					...a
				}) => r.a.createElement("div", {
					className: Object(c.a)(Ee.a.container, ce.a.largeAndMediumPostStyles, e)
				}, r.a.createElement("div", {
					className: Object(c.a)(Ee.a.thumbnail, Object(ge.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: Ee.a.content
				}, r.a.createElement("div", {
					className: Ee.a.titleContainer
				}, r.a.createElement("div", {
					className: Object(c.a)(Ee.a.title, Object(ge.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: Object(c.a)(Ee.a.title, Object(ge.b)({
						isLoading: t
					}))
				})), s && r.a.createElement(F.a, {
					className: Ee.a.subreddit
				}, r.a.createElement(xe.a, ve({
					className: Object(c.a)(Object(ge.b)({
						isLoading: !1
					}))
				}, a)), r.a.createElement("div", {
					className: Object(c.a)(Ee.a.subredditName, Object(ge.b)({
						isLoading: t
					}))
				})), r.a.createElement(F.a, null, r.a.createElement(Oe, ve({
					isLoading: t
				}, a)), r.a.createElement("div", {
					className: Object(c.a)(Ee.a.comments, Object(ge.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: Object(c.a)(Ee.a.share, Object(ge.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: Object(c.a)(Ee.a.ellipsis, Object(ge.b)({
						isLoading: t
					}))
				}))))))),
				Ne = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				Se = s.n(Ne);
			var we = e => r.a.createElement("div", {
					className: Object(c.a)(Se.a.container, e.className)
				}, r.a.createElement("div", {
					className: Se.a.largePosts
				}, r.a.createElement(je, {
					className: Se.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(je, {
					className: Se.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(je, {
					className: Se.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				Ie = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				Le = s.n(Ie);
			const Te = 326,
				Me = 12,
				De = {
					stiffness: 210,
					damping: 30
				},
				Fe = 100,
				We = "post_carousel_item",
				Ae = ({
					root: e,
					handleVisibilityChange: t,
					renderPost: s,
					...n
				}) => {
					const i = s ? s(n) : r.a.createElement(be, n);
					return r.a.createElement(a.a, {
						root: e,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: t
					}, i)
				},
				Re = Object(o.b)(null, (e, {
					discoveryUnit: t,
					searchDiscoveryUnit: s,
					pageLayer: a
				}) => ({
					openOverlay: t => e(Object(P.a)({
						pathname: Object(k.b)(t.permalink),
						state: Object(v.a)(a)
					})),
					trackPostClick: (t, a) => e((e, n) => s ? _.q(n(), s, t, a) : null),
					trackPostSubredditClick: a => e((e, n) => t ? _.s(n(), t, a) : s ? _.s(n(), s, a) : null)
				})),
				Be = Object(E.u)();
			t.a = Be(Re(Object(y.c)(class extends C {
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
						return (c = "subreddit" === t && o ? _.z(o, r, n, i) : i && o ? _.A(o, r, n, i) : _.p(s, a))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: a,
							singleSubredditMode: n
						} = this.props;
						return r.a.createElement(Ae, {
							"data-click-id": We,
							className: Le.a.largePost,
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
						className: Le.a.posts,
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
					if (this.props.isLoading || 0 === this.props.items.length) return r.a.createElement(we, {
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
					}), b = e ? Fe : this.getMarginLeft({
						adjustment: p,
						itemWidth: l,
						scrollIndex: d,
						spacerWidth: Me
					});
					return r.a.createElement("div", {
						className: Object(c.a)(Le.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, r.a.createElement(i.Motion, {
						defaultStyle: {
							marginLeft: e || n ? Fe : 0
						},
						style: {
							marginLeft: Object(i.spring)(b, o || De)
						}
					}, this.renderPosts), 0 !== d && r.a.createElement(x, {
						className: Object(c.a)(Le.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: a
					}), !this.state.itemsFitInContainer && (null == u || d < u) && r.a.createElement(f, {
						className: Object(c.a)(Le.a.arrowRight, n && !e && Le.a.slideIn, s),
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
				_ = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				O = s("./src/reddit/components/PostTitle/index.tsx"),
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
					}, n.a.createElement(_.a, {
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
					}, n.a.createElement(O.c, {
						className: h ? M.a.postTitle : M.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: l,
						size: O.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: i && i.postTitleColor
					}), b)
				},
				W = s("./node_modules/fbt/lib/FbtPublic.js"),
				A = s("./src/lib/prettyPrintNumber/index.ts"),
				R = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				B = s.n(R);
			var U = e => {
					const {
						className: t,
						post: s
					} = e;
					return n.a.createElement("div", {
						className: Object(o.a)(B.a.footer, t)
					}, n.a.createElement("span", {
						className: B.a.metaText
					}, W.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [W.fbt._plural(s.score, "number", Object(A.b)(s.score))], {
						hk: "2ncFte"
					})), n.a.createElement("span", {
						className: B.a.metaText
					}, W.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [W.fbt._plural(s.numComments, "number", Object(A.b)(s.numComments))], {
						hk: "1QQoSA"
					})))
				},
				V = s("./src/reddit/components/SubredditIcon/index.tsx"),
				H = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
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
					}, n.a.createElement(V.b, {
						className: J.a.icon,
						subredditOrProfile: i
					})), n.a.createElement("div", {
						className: J.a.name
					}, n.a.createElement(G.a, {
						className: J.a.link,
						"data-redditstyle": !0,
						to: i.url,
						onMouseDown: a
					}, Object(Q.b)(i.displayText || i.name, c))), r && n.a.createElement(H.a, {
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
					}), n.a.createElement(F, t), n.a.createElement(U, {
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), de = [], me = () => {}, ue = () => void 0, pe = c.a.button("CloseButton", oe.a), be = Object(i.a)(p.A, e => e.filter(e => 9 === e.length)), he = Object(i.c)({
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
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/objectSelector/index.ts"),
				C = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.m.less"),
				E = s.n(y);
			const v = Object(p.a)(() => Object(r.c)({
				basePixelMetadata: Object(g.a)((e, {
					post: t
				}) => Object(h.b)(e, t.id)),
				clickTrackingId: (e, {
					post: t
				}) => t.id,
				imageGalleryCurrentItem: (e, {
					post: t
				}) => Object(h.i)(e, {
					postId: t.id
				}),
				pageType: e => Object(x.actionInfo)(e).pageType
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
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return L
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
				u = s("./src/reddit/constants/experiments.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				x = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				g = s("./src/reddit/helpers/path/index.ts"),
				C = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/models/Flair/index.ts"),
				v = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = s("./src/lib/getShortenedLink.ts"),
				_ = s("./src/reddit/components/FlairWrapper/index.tsx"),
				O = s("./node_modules/fbt/lib/FbtPublic.js"),
				j = s("./src/lib/prettyPrintNumber/index.ts"),
				N = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				S = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				w = s.n(S);
			const I = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var L, T = Object(i.b)(I)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, a = s ? s.totalVotes : "0";
					return r.a.createElement("div", {
						className: Object(d.a)(e.className, w.a.proposalMetaData)
					}, r.a.createElement("span", null, O.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [O.fbt._param("count", Object(j.a)(a)), O.fbt._plural(parseInt(a))], {
						hk: "4rP1VK"
					})), t && r.a.createElement(N.a, {
						className: w.a.proposalExpiry,
						poll: t
					}))
				})),
				M = s("./src/reddit/components/SEOTitle/index.tsx"),
				D = s("./src/reddit/selectors/experiments/econ/index.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/PostTitle/index.m.less"),
				A = s.n(W),
				R = s("./src/config.ts"),
				B = s("./src/reddit/hooks/useClickSourceData.ts"),
				U = s("./src/reddit/hooks/useExperimentVariant.ts"),
				V = s("./src/reddit/hooks/usePostContext.ts"),
				H = s("./src/reddit/hooks/useTheme.ts"),
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
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(L || (L = {}));
			const q = ({
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
						case L.ExtraLarge:
							l = A.a.ExtraLarge;
							break;
						case L.Large:
							l = A.a.Large;
							break;
						case L.Medium:
							l = A.a.Medium;
							break;
						case L.Small:
							l = A.a.Small;
							break;
						case L.ExtraSmall:
							l = A.a.ExtraSmall
					}
					return r.a.createElement("div", {
						className: Object(d.a)(A.a.Title, i, l, {
							[A.a.isNoWrap]: a
						}),
						style: {
							"--posttitletextcolor": t || Object(P.a)({
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
				}) => r.a.createElement(o.a, z({}, n, {
					className: Object(d.a)(e, A.a.styledLink, {
						[A.a.isVisitedEnabled]: !t
					})
				}), a),
				K = ({
					disableVisited: e,
					nowrap: t,
					className: s,
					children: a
				}) => r.a.createElement("div", {
					className: Object(d.a)(A.a.titleContainer, s, {
						[A.a.isNoWrap]: t,
						[A.a.isVisitedEnabled]: !e
					})
				}, a),
				J = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(p.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: F.db,
					isTournamentPredictionPostV2: D.y
				}),
				Z = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: a
					} = t, n = Object(B.a)(), i = Object(U.a)(u.sd) === u.zd.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return r.a.createElement(K, {
						nowrap: e.nowrap
					}, r.a.createElement(Y, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return r.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: a,
						postId: t.id,
						source: t.source
					}, r.a.createElement(Y, e)); {
						const o = t.media && Object(v.H)(t.media) ? Object(C.c)(t.id, s.name) : t.permalink,
							c = e.isCommentPermalink ? Object(g.b)(o) : i ? Object(x.a)(o, void 0, n) : Object(x.a)(o);
						return r.a.createElement(K, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, a ? ((e, t) => {
							const {
								source: s
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return s ? r.a.createElement(b.b, {
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
							to: c
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
					const i = e.isCommentsPage ? M.a.PostComments : M.a.PostItem;
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
					} = s, n = e.isCommentsPage ? Q.SourceElement.PostLink : Q.SourceElement.ListingPostLink, i = !t && !e.isCrosspost && e.size !== L.Large && !s.isSponsored && !(s.media && Object(v.H)(s.media)) && (s.source || s.media && (s.media.type === v.o.GIFVIDEO || s.media.type === v.o.IMAGE || s.media.type === v.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return r.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(v.D)(s),
							isSponsored: a,
							postId: s.id,
							source: s.source,
							sourceElement: n
						}, Object(k.a)(s), !s.isSponsored && r.a.createElement(y.a, {
							name: "external_link",
							className: A.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== L.Large && e.size !== L.ExtraLarge) return r.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: a,
						postId: s.id,
						source: s.source,
						sourceElement: n
					}, Object(k.a)(s), !s.isSponsored && r.a.createElement(y.a, {
						name: "external_link",
						className: A.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends r.a.Component {
				getDynamicStyleTags() {
					return r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${A.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(a.c)(.45,Object(P.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(a.c)(.45,this.props.titleColor||Object(P.a)(this.props).titleText,Object(P.a)(this.props).body)};\n        }\n      `
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
					} = this.props, u = a === E.b.Left, p = Object(_.b)(c), b = l ? p.filter(e => e.type === E.f.Nsfw || e.type === E.f.Spoiler) : u ? p.filter(e => Object(f.q)(e.type)) : [], h = l ? [] : u ? p.filter(e => !Object(f.q)(e.type)) : p, x = !i && !n, g = !s && b && b.length > 0 && x, C = !s && h && h.length > 0 && x, y = !(m && (null === (e = c.pollData) || void 0 === e ? void 0 : e.isPrediction));
					return r.a.createElement("div", {
						className: Object(d.a)(A.a.Component, t, c.id),
						ref: this.props.innerRef
					}, !l && g && r.a.createElement(_.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), y && r.a.createElement(Z, z({}, this.props, {
						leftFlair: l ? b : void 0
					})), o && r.a.createElement(T, {
						className: A.a.pollMeta,
						pollId: o.id
					}), r.a.createElement(X, this.props), C && r.a.createElement(_.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement("div", {
						className: A.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${R.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = r.a.memo((function(e) {
				const t = Object(p.eb)(),
					s = Object(p.w)(t),
					a = Object(V.a)(),
					n = Object(i.e)(n => J(n, {
						...a,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					o = Object(H.a)(),
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
				c = s("./src/reddit/icons/fonts/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
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
			const p = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", m.a);
			class b extends n.a.Component {
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
							isInJoinOptimizationsExperiment: s,
							onSubscribe: a,
							onUnsubscribe: r,
							postId: i,
							sendEvent: d,
							small: m = !1,
							size: p,
							userIsSubscriber: b,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: x,
							onSubscriptionsRequested: f,
							...g
						} = this.props, C = this.state.isHovered, y = Object(l.a)({
							type: t.type,
							key: C ? "unsubscribe" : "subscribed"
						}), E = s || !m && C ? void 0 : Object(c.b)("checkmark"), v = s ? o.d.XSP : p || (m ? o.d.XS : o.d.S);
						return n.a.createElement(o.t, u({
							className: e,
							priority: g.shouldReverseColor ? o.c.Primary : o.c.Secondary,
							Icon: E,
							text: s ? y : !m && y,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: v
						}, g))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							isInJoinOptimizationsExperiment: s,
							onSubscribe: a,
							onUnsubscribe: r,
							postId: i,
							sendEvent: d,
							small: m = !1,
							size: p,
							userIsSubscriber: b,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: x,
							onSubscriptionsRequested: f,
							...g
						} = this.props, C = Object(l.a)({
							type: t.type,
							key: "subscribe"
						}), y = s ? o.d.XSP : p || (m ? o.d.XS : o.d.S);
						return n.a.createElement(o.t, u({
							className: e,
							priority: g.shouldReverseColor ? o.c.Secondary : o.c.Primary,
							Icon: s ? void 0 : Object(c.b)("add"),
							size: y,
							text: s ? C : !m && C,
							onClick: this.onClick
						}, g, {
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
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : n.a.createElement(p, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(r.c)(b))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.425003a4a0aae39b8014.js.map