// https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.fde0b93477a09e9372c7.js
// Retrieved at 10/24/2022, 9:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["TopWeekPostsDiscoveryUnit"], {
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/models/Media/index.ts"),
				n = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(n);
			t.a = function(e) {
				var t;
				const {
					source: s,
					isSponsored: n,
					domainOverride: i,
					callToAction: o
				} = e;
				let c = "";
				if (n) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == o ? void 0 : o.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					c = i || Object(r.D)(e)
				} else c = Object(r.D)(e);
				const l = a.a.parse(c),
					d = l.path || "",
					m = d.length > 7 ? d.substring(0, 7) + "..." : d;
				return (l.hostname ? l.hostname.replace("www.", "") : "") + m
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts");
			const a = [n.yc, n.ub, n.E, n.U, n.pb, n.Xb],
				i = {
					[n.Xb]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[n.pb]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[n.U]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[n.E]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[n.ub]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[n.yc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				o = {
					[n.Xb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[n.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[n.U]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[n.E]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[n.ub]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.yc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[n.ub]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.yc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					l = new Date(e).getTime(),
					d = {
						[n.yc]: "",
						[n.ub]: "",
						[n.E]: "",
						[n.U]: "",
						[n.pb]: "",
						[n.Xb]: ""
					};
				let m = l - c;
				if (m <= 0) return r.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const r of a) {
					const e = Math.floor(m / r);
					e && (d[r] = (t ? o : i)[r](e).toString()), m -= e * r
				}
				const u = a.map(e => d[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? u : r.fbt._("{amount of time left} left", [r.fbt._param("amount of time left", u)], {
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
			var r = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
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
			const g = e => a.a.createElement("button", {
					className: Object(l.a)(f.a.arrow, e.className),
					onClick: e.onClick
				}, a.a.createElement(b.a, {
					className: f.a.arrowIcon,
					seed: e.seed
				})),
				C = e => a.a.createElement("button", {
					className: Object(l.a)(f.a.arrow, e.className),
					onClick: e.onClick
				}, a.a.createElement(h.a, {
					className: f.a.arrowIcon,
					seed: e.seed
				}));
			class y extends a.a.Component {
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
							scrollIndex: r,
							spacerWidth: n = 0
						} = e;
						return t - r * (s + n) + n
					}, this.getAdjustment = e => {
						let {
							itemWidth: t,
							maxScrollIndex: s,
							scrollIndex: r,
							spacerWidth: n = 0,
							visibleItemsCount: a
						} = e, i = 0;
						if (r === s && a) {
							const e = a * t + this.getSpacerCount(a) * n;
							i = (this.container ? this.container.offsetWidth : e) - e
						} else r > 0 && (i = 0);
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
						itemWidth: r,
						spacerWidth: n = 0
					} = e;
					if (!t) return !0;
					const a = s.length * r,
						i = this.getSpacerCount(s.length) * n;
					return t.offsetWidth >= a + i
				}
				onClickNext() {
					const e = this.getVisibleItemsCount(),
						t = this.getMaxScrollIndex(e),
						s = Math.max(1, e),
						r = Math.min(this.state.scrollIndex + s, t);
					this.setState({
						scrollIndex: r,
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
			var v = y,
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/clickSourceData/index.ts"),
				P = s("./src/reddit/helpers/overlay/index.ts"),
				_ = s("./src/reddit/helpers/path/index.ts"),
				j = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				N = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				S = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/lib/prettyPrintNumber/index.ts"),
				I = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				L = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				T = s("./src/reddit/constants/posts.ts"),
				M = s("./src/lib/constants/index.ts"),
				D = s("./src/reddit/components/HumanDate/index.tsx"),
				F = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				B = s("./src/reddit/hooks/useClickSourceData.ts"),
				W = s("./src/reddit/layout/row/Inline/index.tsx"),
				A = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				U = s.n(A);
			var R = e => {
					const t = T.a.PROFILE,
						s = Object(F.a)(e.author, t),
						r = Object(B.a)();
					return a.a.createElement("div", {
						className: Object(l.a)(U.a.container, e.className)
					}, a.a.createElement(W.a, {
						className: U.a.layout
					}, a.a.createElement("div", {
						className: U.a.textContainer
					}, a.a.createElement("span", {
						className: U.a.description
					}, S.fbt._("posted by", null, {
						hk: "wl0iP"
					})), e.author === M.H ? a.a.createElement("span", {
						className: U.a.authorName
					}, Object(F.b)(e.author, t)) : a.a.createElement(L.a, {
						className: U.a.authorName,
						to: {
							pathname: s,
							state: r
						}
					}, Object(F.b)(e.author, t)), a.a.createElement("span", {
						className: U.a.timestamp
					}, a.a.createElement(D.d, {
						seconds: e.created / M.Xb
					})))))
				},
				H = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				V = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				z = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				Q = s.n(z);
			var q = e => {
					const t = Object(F.a)(e.name, e.type);
					return a.a.createElement("div", {
						className: Object(l.a)(Q.a.container, e.className)
					}, a.a.createElement(V.a, {
						className: Q.a.layout
					}, a.a.createElement("div", {
						className: Q.a.iconContainer
					}, e.iconUrl ? a.a.createElement("img", {
						className: Q.a.icon,
						src: e.iconUrl
					}) : a.a.createElement(H.a, {
						className: Q.a.planetIcon,
						"data-redditstyle": !0
					})), a.a.createElement("div", {
						className: Q.a.textContainer
					}, a.a.createElement(L.a, {
						"data-click-id": "subreddit",
						className: Q.a.name,
						to: t
					}, Object(F.b)(e.displayText || e.name, e.type)), a.a.createElement("span", {
						className: Q.a.separator
					}, "•"), a.a.createElement("span", {
						className: Q.a.timestamp
					}, a.a.createElement(D.d, {
						seconds: e.created / M.Xb
					})))))
				},
				G = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				K = s("./src/reddit/components/Media/index.tsx"),
				J = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				X = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				Z = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Y = s("./src/reddit/components/PostContainer/index.tsx"),
				$ = s("./src/reddit/components/PostTitle/index.tsx"),
				ee = s("./src/reddit/connectors/miniCardPost.ts"),
				te = s("./src/reddit/contexts/Post/index.tsx"),
				se = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				re = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				ne = s("./src/reddit/helpers/widgets/index.tsx"),
				ae = s("./src/reddit/models/Media/index.ts"),
				ie = s("./src/reddit/models/Post/index.ts"),
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
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			class he extends a.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: r,
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
						subredditOrProfile: C,
						theme: y
					} = this.props, {
						media: v
					} = r || p, E = Object(ie.q)(p);
					let O = v && a.a.createElement(K.a, {
							autoplayPref: e,
							availableWidth: t,
							className: le.a.media,
							forceAspectRatio: ae.c,
							imageBoxClassName: le.a.mediaImageBox,
							imageBoxContentImageClassName: le.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: r || p,
							scrollerItemRef: b,
							shouldPause: h,
							shouldLoad: c,
							showCentered: !1,
							showFull: !1
						}),
						k = !1;
					v && O && (v.type !== ae.o.RTJSON && v.type !== ae.o.TEXT ? (O = a.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, O), k = !0) : v && v.content && Object(se.a)(p, null == y ? void 0 : y.subredditContext) && (O = a.a.createElement("div", {
						className: pe.a.textWrapper
					}, O)));
					const P = !k && !E;
					let _;
					return C && (_ = Object(oe.i)(C) ? Object(ne.b)(C) : Object(ne.c)(C)), a.a.createElement(Y.b, {
						className: Object(l.a)(pe.a.container, me.a.largeAndMediumActiveStyles, me.a.largeAndMediumPostStyles, le.a.postContainer, Object(re.a)(this.props), s),
						post: p,
						onClick: u,
						eventFactory: i,
						style: {
							...Object(re.b)(this.props.flairStyleTemplate),
							...Object(re.d)(this.props),
							...this.props.style
						},
						"data-click-id": this.props["data-click-id"]
					}, a.a.createElement(Z.a, {
						className: le.a.backgroundWrapper,
						flairStyleTemplate: o
					}, a.a.createElement("div", {
						className: Object(l.a)(pe.a.innerContainer, le.a.innerContainer)
					}, g && C && a.a.createElement(q, be({
						created: p.created
					}, _)), x && C && a.a.createElement(R, be({
						created: p.created,
						author: p.author
					}, _)), a.a.createElement($.c, {
						className: P ? pe.a.postTitle : pe.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: $.b.Large,
						titleColor: o && o.postTitleColor
					}), f && C && a.a.createElement(J.a, {
						className: pe.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: d,
						post: p,
						subredditOrProfile: C
					}), (k || E) && a.a.createElement("div", {
						className: pe.a.flexSpacer
					}), E && a.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, a.a.createElement(X.a, {
						className: pe.a.thumbnailWrapper,
						thumbnailClassName: pe.a.thumbnail,
						thumbnailContainerClassName: pe.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: o && o.postPlaceholderImage
					})), O, a.a.createElement("div", {
						className: pe.a.metaWrapper
					}, a.a.createElement("span", {
						className: pe.a.meta
					}, S.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [S.fbt._plural(p.score, "number", Object(w.b)(p.score))], {
						hk: "2ncFte"
					})), a.a.createElement("span", {
						className: pe.a.meta
					}, S.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [S.fbt._plural(p.numComments, "number", Object(w.b)(p.numComments))], {
						hk: "1QQoSA"
					}))))), a.a.createElement(G.d, null))
				}
			}
			const xe = Object(te.b)(Object(ee.a)(Object(I.a)(he)));
			class fe extends a.a.Component {
				render() {
					return a.a.createElement(xe, this.props)
				}
			}
			var ge = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Ce = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				ye = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				ve = s("./src/reddit/models/Vote/index.ts"),
				Ee = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				Oe = s.n(Ee);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Pe = Object(O.u)(),
				_e = Object(c.c)({
					isFakeSubreddit: O.z
				}),
				je = Object(o.b)(_e),
				Ne = e => {
					const t = {
						interactive: !1,
						voteState: ve.a.notVoted
					};
					return a.a.createElement("div", {
						className: Object(l.a)(Oe.a.emptyVotes, e.className)
					}, a.a.createElement(Ce.d, t), a.a.createElement("div", {
						className: Object(l.a)(Oe.a.emptyScore, Object(ye.b)({
							isLoading: e.isLoading
						}))
					}), a.a.createElement(Ce.c, t))
				};
			var Se = Pe(je(Object(I.a)(e => {
					let {
						className: t,
						isLoading: s,
						showSubreddit: r,
						...n
					} = e;
					return a.a.createElement("div", {
						className: Object(l.a)(Oe.a.container, me.a.largeAndMediumPostStyles, t)
					}, a.a.createElement("div", {
						className: Object(l.a)(Oe.a.thumbnail, Object(ye.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Oe.a.content
					}, a.a.createElement("div", {
						className: Oe.a.titleContainer
					}, a.a.createElement("div", {
						className: Object(l.a)(Oe.a.title, Object(ye.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Object(l.a)(Oe.a.title, Object(ye.b)({
							isLoading: s
						}))
					})), r && a.a.createElement(W.a, {
						className: Oe.a.subreddit
					}, a.a.createElement(ge.a, ke({
						className: Object(l.a)(Object(ye.b)({
							isLoading: !1
						}))
					}, n)), a.a.createElement("div", {
						className: Object(l.a)(Oe.a.subredditName, Object(ye.b)({
							isLoading: s
						}))
					})), a.a.createElement(W.a, null, a.a.createElement(Ne, ke({
						isLoading: s
					}, n)), a.a.createElement("div", {
						className: Object(l.a)(Oe.a.comments, Object(ye.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Object(l.a)(Oe.a.share, Object(ye.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Object(l.a)(Oe.a.ellipsis, Object(ye.b)({
							isLoading: s
						}))
					}))))
				}))),
				we = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				Ie = s.n(we);
			var Le = e => a.a.createElement("div", {
					className: Object(l.a)(Ie.a.container, e.className)
				}, a.a.createElement("div", {
					className: Ie.a.largePosts
				}, a.a.createElement(Se, {
					className: Ie.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), a.a.createElement(Se, {
					className: Ie.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), a.a.createElement(Se, {
					className: Ie.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				Te = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				Me = s.n(Te);
			const De = 326,
				Fe = 12,
				Be = {
					stiffness: 210,
					damping: 30
				},
				We = 100,
				Ae = "post_carousel_item",
				Ue = e => {
					let {
						root: t,
						handleVisibilityChange: s,
						renderPost: n,
						...i
					} = e;
					const o = n ? n(i) : a.a.createElement(fe, i);
					return a.a.createElement(r.a, {
						root: t,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: s
					}, o)
				},
				Re = Object(c.c)({
					isBlockingInterstitialEnabled: N.b,
					isBlockingInterstitialV2Enabled: N.c
				}),
				He = Object(o.b)(Re, (e, t) => {
					let {
						discoveryUnit: s,
						searchDiscoveryUnit: r,
						pageLayer: n
					} = t;
					return {
						openOverlay: t => e(Object(P.a)({
							pathname: Object(_.b)(t.permalink),
							state: Object(k.b)(n)
						})),
						trackPostClick: (t, s) => e((e, n) => r ? j.p(n(), r, t, s) : null),
						trackPostSubredditClick: t => e((e, n) => s ? j.r(n(), s, t) : r ? j.r(n(), r, t) : null),
						showModalOnPostLinkClick: t => e(Object(d.ab)(Object(_.b)(t.permalink), t.id))
					}
				}),
				Ve = Object(O.u)();
			t.a = Ve(He(Object(E.c)(class extends v {
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
							discoveryUnitSubreddit: r,
							listingKey: n,
							pageLayer: a,
							searchDiscoveryUnit: i,
							searchOptions: o
						} = this.props;
						let c;
						return (c = "subreddit" === t && o ? j.y(o, a, n, i) : i && o ? j.z(o, a, null, n, i) : j.o(s, r))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: r,
							singleSubredditMode: n
						} = this.props;
						return a.a.createElement(Ue, {
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
							renderPost: r,
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
						searchOptions: r
					} = this.props, n = s || e;
					n && t && t(n, r)
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
						seed: r,
						shouldSlideIn: n,
						springConfig: o
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return a.a.createElement(Le, {
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
					}), b = e ? We : this.getMarginLeft({
						adjustment: p,
						itemWidth: c,
						scrollIndex: d,
						spacerWidth: Fe
					});
					return a.a.createElement("div", {
						className: Object(l.a)(Me.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, a.a.createElement(i.Motion, {
						defaultStyle: {
							marginLeft: e || n ? We : 0
						},
						style: {
							marginLeft: Object(i.spring)(b, o || Be)
						}
					}, this.renderPosts), 0 !== d && a.a.createElement(g, {
						className: Object(l.a)(Me.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: r
					}), !this.state.itemsFitInContainer && (null == u || d < u) && a.a.createElement(C, {
						className: Object(l.a)(Me.a.arrowRight, n && !e && Me.a.slideIn, s),
						onClick: this.onClickNext,
						seed: r
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
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
				v = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/config.ts"),
				O = s("./src/lib/isUrl/index.ts"),
				k = s("./src/reddit/components/Media/index.tsx"),
				P = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				_ = s("./src/reddit/components/PostTitle/index.tsx"),
				j = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				N = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				S = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				w = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/components/MiniCardPost/index.m.less"),
				L = s.n(I),
				T = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				M = s.n(T);
			const D = `${E.a.assetPath}/img/link-placeholder.png`;
			var F = e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: r,
						crosspostRoot: a,
						flairStyleTemplate: i,
						forceLoadMedia: c,
						post: l,
						shouldPause: d,
						scrollerItemRef: m,
						theme: u
					} = e, {
						media: p
					} = a || l, b = p && n.a.createElement(k.a, {
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
						post: a || l,
						scrollerItemRef: m,
						shouldLoad: c,
						shouldPause: d,
						showCentered: !1,
						showFull: !1
					});
					let h, x = !0;
					const f = !!l.source && Object(O.a)(l.source.url) || !!l.thumbnail && Object(O.a)(l.thumbnail.url);
					return !p && f ? (x = !1, h = n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: M.a.flexSpacer
					}), n.a.createElement("div", {
						className: M.a.mediaWrapper
					}, n.a.createElement(P.a, {
						className: M.a.thumbnailWrapper,
						thumbnailClassName: M.a.thumbnail,
						thumbnailContainerClassName: M.a.thumbnailContainer,
						thumbnailLinkIconClassName: M.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: l,
						showPlaceholderContentType: !i || !i.postPlaceholderImage,
						templatePlaceholderImage: i ? i.postPlaceholderImage : D,
						usePreview: !0
					})))) : p && b ? p.type !== w.o.RTJSON && p.type !== w.o.TEXT ? (x = !1, h = n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: M.a.flexSpacer
					}), n.a.createElement("div", {
						className: M.a.mediaWrapper
					}, b))) : h = Object(S.a)(l) || Object(N.d)(l) && Object(j.a)(l, null == u ? void 0 : u.subredditContext) ? n.a.createElement("div", {
						className: M.a.textWrapper
					}, b) : n.a.createElement("div", {
						className: M.a.flexSpacer
					}) : h = n.a.createElement("div", {
						className: M.a.flexSpacer
					}), n.a.createElement("div", {
						className: Object(o.a)(M.a.body, r)
					}, n.a.createElement(_.c, {
						className: x ? M.a.postTitle : M.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: l,
						size: _.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: i && i.postTitleColor
					}), h)
				},
				B = s("./node_modules/fbt/lib/FbtPublic.js"),
				W = s("./src/lib/prettyPrintNumber/index.ts"),
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
					}, B.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [B.fbt._plural(s.score, "number", Object(W.b)(s.score))], {
						hk: "2ncFte"
					})), n.a.createElement("span", {
						className: U.a.metaText
					}, B.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [B.fbt._plural(s.numComments, "number", Object(W.b)(s.numComments))], {
						hk: "1QQoSA"
					})))
				},
				H = s("./src/reddit/components/SubredditIcon/index.tsx"),
				V = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				z = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				Q = s("./src/reddit/constants/posts.ts"),
				q = s("./src/reddit/controls/Button/index.tsx"),
				G = s("./src/reddit/controls/InternalLink/index.tsx"),
				K = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				J = s.n(K);
			var X = e => {
					const {
						className: t,
						getSubscribeEventFactory: s,
						onSubredditOrProfileClick: r,
						shouldShowSubscribeButton: a,
						subredditOrProfile: i
					} = e, c = Object(v.i)(i) ? Q.a.PROFILE : Q.a.SUBREDDIT;
					return n.a.createElement("div", {
						className: Object(o.a)(J.a.header, t)
					}, n.a.createElement(G.default, {
						className: J.a.iconLink,
						"data-redditstyle": !0,
						to: i.url,
						onMouseDown: r
					}, n.a.createElement(H.b, {
						className: J.a.icon,
						subredditOrProfile: i
					})), n.a.createElement("div", {
						className: J.a.name
					}, n.a.createElement(G.default, {
						className: J.a.link,
						"data-redditstyle": !0,
						to: i.url,
						onMouseDown: r
					}, Object(z.b)(i.displayText || i.name, c))), a && n.a.createElement(V.a, {
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
				Z = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Y = s.n(Z),
				$ = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less"),
				ee = s.n($);
			const te = Object(i.a)(e => e.subredditOrProfile, e => e.subscribedProfiles, e => e.subscribedSubreddits, (e, t, s) => {
				if (!e) return !1;
				return (Object(v.i)(e) ? t : s).some(t => t.id === e.id)
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
						flairStyleTemplate: r,
						onClickPost: a,
						post: i,
						subredditOrProfile: c,
						subscribedProfiles: l,
						subscribedSubreddits: d
					} = t, m = !te({
						subredditOrProfile: c,
						subscribedProfiles: l,
						subscribedSubreddits: d
					});
					return n.a.createElement(f.b, {
						className: Object(o.a)(ee.a.container, Y.a.largeAndMediumActiveStyles, Y.a.largeAndMediumPostStyles, Y.a.mUseRedditTheme, L.a.postContainer, Object(y.a)(this.props), e),
						eventFactory: s,
						onClick: a,
						post: i,
						style: {
							...Object(y.b)(this.props.flairStyleTemplate),
							...Object(y.d)(this.props)
						}
					}, n.a.createElement(x.a, {
						className: ee.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: r
					}, c && n.a.createElement(X, {
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
			const re = Object(C.b)(Object(g.a)(Object(b.a)(se)));
			class ne extends n.a.Component {
				render() {
					return n.a.createElement(re, this.props)
				}
			}
			const ae = 236;
			var ie = s("./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.m.less"),
				oe = s.n(ie);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
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
			}), xe = Object(a.b)(he);
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
						itemWidth: ae,
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
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
				return a.a.createElement("div", {
					className: Object(i.a)(p.a.container, t)
				}, a.a.createElement(l.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, a.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: b
				}), a.a.createElement("span", null, b.displayText)), ((e, t) => {
					if (t) return a.a.createElement("div", {
						role: "img",
						"aria-label": r.fbt._("Crossposted by{author}from{community}", [r.fbt._param("author", Object(d.e)(e)), r.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, a.a.createElement(m.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(u.author, s), b && b.isQuarantined && a.a.createElement(o.a, null))
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				o = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(o);

			function l(e) {
				const {
					source: t
				} = e.post;
				return n.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className)
				}, n.a.createElement(i.b, {
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
				return l
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/components/HumanDate/index.tsx"),
				a = s("./src/lib/timeUntil/index.ts"),
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
					seconds: e.poll.endsAt / r.Xb
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
			s.d(t, "a", (function() {
				return P
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				o = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				l = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/hooks/useTracking.ts");
			var m = n.a.memo(e => {
					const t = Object(r.useRef)(null),
						s = Object(d.a)(),
						a = Object(r.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: r
								} = t;
								r >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(r.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(l.a)(t, a, i), n.a.createElement("div", {
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
				y = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				v = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				E = s("./src/reddit/components/PostContainer/index.m.less"),
				O = s.n(E);
			const k = Object(p.a)(() => Object(a.c)({
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
				P = "post-container";
			class _ extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: r,
						imageGalleryCurrentItem: a,
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
							if (!this.cancelClick && s.button < 2 && e(() => u && u(s, d, t, a, p))(s), d.id && a) {
								const {
									source: e
								} = Object(i.t)(d, a);
								e && e.outboundUrl && h(Object(c.c)(d.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(O.a.WrappedPost, r, `Post ${d.id}`, {
							promotedlink: d.isSponsored
						}),
						"data-testid": P,
						id: l ? l(d.id) : d.id,
						tabIndex: -1,
						"data-adclicklocation": v.a.BACKGROUND
					}, s), E = !!d.media && d.media.type === b.o.VIDEO;
					return (e => d.media && Object(b.E)(d.media) && C ? n.a.createElement(m, {
						postId: d.id
					}, e) : e)((e => d.isSponsored || E ? n.a.createElement(o.a, {
						post: d,
						trackDisplay: !0
					}, e) : e)(y))
				}
			}
			t.b = k(Object(y.a)(Object(C.a)(Object(u.c)(_))))
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
				return B
			})), s.d(t, "a", (function() {
				return J
			}));
			var r = s("./src/config.ts"),
				n = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				x = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/helpers/path/index.ts"),
				C = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				y = s("./src/reddit/hooks/useClickSourceData.ts"),
				v = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				E = s("./src/reddit/hooks/usePostContext.ts"),
				O = s("./src/reddit/hooks/useTheme.ts"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				P = s("./src/reddit/models/Flair/index.ts"),
				_ = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				N = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = s("./src/lib/getShortenedLink.ts"),
				w = s("./src/reddit/components/FlairWrapper/index.tsx"),
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				L = s("./src/lib/prettyPrintNumber/index.ts"),
				T = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				M = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				D = s.n(M);
			const F = Object(l.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var B, W = Object(o.b)(F)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, r = s ? s.totalVotes : "0";
					return Object(v.a)() ? null : i.a.createElement("div", {
						className: Object(m.a)(e.className, D.a.proposalMetaData)
					}, i.a.createElement("span", null, I.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [I.fbt._param("count", Object(L.a)(r)), I.fbt._plural(parseInt(r))], {
						hk: "4rP1VK"
					})), t && i.a.createElement(T.a, {
						className: D.a.proposalExpiry,
						poll: t
					}))
				})),
				A = s("./src/reddit/components/SEOTitle/index.tsx"),
				U = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				R = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				V = s("./src/telemetry/models/Outbound.ts"),
				z = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				Q = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				q = s("./src/reddit/components/PostTitle/index.m.less"),
				G = s.n(q);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(B || (B = {}));
			const J = e => {
					let {
						size: t,
						titleColor: s,
						titleType: r,
						nowrap: n,
						children: a,
						className: o,
						redditStyle: c,
						shouldBlurTitle: l
					} = e;
					const d = Object(O.a)();
					let u = "";
					switch (t) {
						case B.ExtraLarge:
							u = G.a.ExtraLarge;
							break;
						case B.Large:
							u = G.a.Large;
							break;
						case B.Medium:
							u = G.a.Medium;
							break;
						case B.Small:
							u = G.a.Small;
							break;
						case B.ExtraSmall:
							u = G.a.ExtraSmall;
							break;
						case B.Metadata:
							u = G.a.Metadata
					}
					return i.a.createElement("div", {
						className: Object(m.a)(G.a.Title, o, u, {
							[G.a.isNoWrap]: n,
							[G.a.blur]: l
						}),
						style: {
							"--posttitletextcolor": s || Object(N.a)({
								redditStyle: c,
								theme: d
							}).titleText
						}
					}, r ? i.a.createElement(A.b, {
						type: r
					}, a) : a)
				},
				X = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: r,
						children: n,
						...a
					} = e;
					return i.a.createElement(c.a, K({}, a, {
						className: Object(m.a)(t, G.a.styledLink, {
							[G.a.isVisitedEnabled]: !s
						})
					}), n)
				},
				Z = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: r,
						children: n
					} = e;
					return i.a.createElement("div", {
						className: Object(m.a)(G.a.titleContainer, r, {
							[G.a.isNoWrap]: s,
							[G.a.isVisitedEnabled]: !t
						})
					}, n)
				},
				Y = Object(l.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(p.q)(e, {
							pageLayer: s
						})
					},
					isNsfwBlurSubreddit: R.e,
					shouldOpenPostInNewTab: H.kb
				}),
				$ = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: r
					} = t, n = Object(o.d)(), a = Object(y.a)(), c = Object(o.e)(U.b), l = Object(o.e)(U.c), m = e => {
						!c && !l || t.media && Object(_.H)(t.media) || (e.preventDefault(), n(Object(f.ab)(Object(g.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return i.a.createElement(Z, {
						nowrap: e.nowrap
					}, i.a.createElement(ee, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return i.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: r,
						postId: t.id,
						source: t.source
					}, i.a.createElement(ee, e)); {
						const n = t.media && Object(_.H)(t.media) ? Object(C.c)(t.id, s.name) : t.permalink,
							o = e.isCommentPermalink ? Object(g.b)(n) : Object(x.a)(n, void 0, a);
						return i.a.createElement(Z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, r ? ((e, t) => {
							const {
								source: s
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return s ? i.a.createElement(b.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, i.a.createElement(ee, t)) : i.a.createElement(ee, t)
						})(t, e) : i.a.createElement(X, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: o,
							onClick: m
						}, i.a.createElement(ee, e)))
					}
				},
				ee = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: r
					} = e;
					let n = e.format ? e.format(r) : r.title;
					s && "string" == typeof n && (n = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(n));
					const a = e.isCommentsPage ? A.a.PostComments : A.a.PostItem,
						o = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return i.a.createElement(J, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: o,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && i.a.createElement(w.a, {
						titleFlair: t,
						nowrap: !0,
						post: r,
						sendEvent: e.sendEvent
					}), n)
				},
				te = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: r
					} = e, {
						isSponsored: n
					} = r, a = e.isCommentsPage ? V.SourceElement.PostLink : V.SourceElement.ListingPostLink;
					if (Object(v.a)()) return null;
					if (s && r.isNSFW) return null;
					const o = !t && !e.isCrosspost && e.size !== B.Large && !r.isSponsored && !(r.media && Object(_.H)(r.media)) && (r.source || r.media && (r.media.type === _.o.GIFVIDEO || r.media.type === _.o.IMAGE || r.media.type === _.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (o) return i.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(_.D)(r),
							isSponsored: n,
							postId: r.id,
							source: r.source,
							sourceElement: a
						}, Object(S.a)(r), !r.isSponsored && i.a.createElement(k.a, {
							name: "external_link",
							className: G.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== B.Large && e.size !== B.ExtraLarge) return i.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: n,
						postId: r.id,
						source: r.source,
						sourceElement: a
					}, Object(S.a)(r), !r.isSponsored && i.a.createElement(k.a, {
						name: "external_link",
						className: G.a.outboundLinkIcon
					}));
					return null
				};
			class se extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${G.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(N.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(N.a)(this.props).titleText,Object(N.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(n.c)(.45,Object(N.a)(this.props).bodyText,Object(N.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: n,
						isOverlay: a,
						poll: o,
						post: c,
						showNSFWSpoilerFlairsOnly: l,
						hideNSFWSpoilerFlair: d,
						onClick: u
					} = this.props, p = s === P.b.Left, b = Object(w.b)(c), {
						leftFlair: h,
						rightFlair: x
					} = Object(z.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: l,
						hideNSFWSpoilerFlair: d
					}), f = !a && !n && !t, g = f && h && h.length > 0, C = f && x && x.length > 0;
					return i.a.createElement("div", {
						className: Object(m.a)(G.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": Q.a.TITLE,
						onClick: u
					}, !l && g && i.a.createElement(w.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(j.b)(c) && i.a.createElement($, K({}, this.props, {
						leftFlair: l ? h : void 0
					})), o && i.a.createElement(W, {
						className: G.a.pollMeta,
						pollId: o.id
					}), i.a.createElement(te, this.props), C && i.a.createElement(w.a, {
						isFlairFilter: !0,
						titleFlair: x,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), i.a.createElement("div", {
						className: G.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${r.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = i.a.memo((function(e) {
				const t = Object(p.eb)(),
					s = Object(p.w)(t),
					r = Object(E.a)(),
					n = Object(o.e)(n => Y(n, {
						...r,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					a = Object(O.a)(),
					c = Object(u.b)();
				return r ? i.a.createElement(se, K({
					pageLayer: t,
					isCommentPermalink: s
				}, r, n, e, {
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
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
					}), r.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), a.a.createElement(x, {
						text: r.fbt._("This post was submitted in a quarantined community", null, {
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
			var r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				n = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				a = s.n(n);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", a.a);
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				l = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				d = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
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
							onUnsubscribe: r,
							postId: a,
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
							onUnsubscribe: r,
							postId: a,
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
							id: `subscribe-button-${a}`,
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
			t.a = Object(i.a)(Object(a.c)(p))
		},
		"./src/reddit/hooks/useIsRemovedOrDeletedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/selectors/removedPosts.ts");
			const a = () => Object(r.e)(e => Object(n.d)(e))
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				n = s("./src/lib/CSSVariableProvider/index.tsx");

			function a() {
				return Object(r.useContext)(n.b)
			}
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/constants/colors.ts");
			const i = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-left-${e}`
			};
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), r = i("b", t), o = i("c", t), c = i("d", t);
				return n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("defs", null, n.a.createElement("circle", {
					id: r,
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
					fill: a.a.black,
					filter: `url(#${s})`,
					xlinkHref: `#${r}`
				}), n.a.createElement("use", {
					fill: a.a.white,
					xlinkHref: `#${r}`
				})), n.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, n.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), n.a.createElement("mask", {
					id: c,
					fill: a.a.white
				}, n.a.createElement("use", {
					xlinkHref: `#${o}`
				})), n.a.createElement("use", {
					fill: a.a.black,
					xlinkHref: `#${o}`
				}), n.a.createElement("g", {
					fill: a.a.alienblue,
					mask: `url(#${c})`
				}, n.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/constants/colors.ts");
			const i = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-right-${e}`
			};
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), r = i("b", t), o = i("c", t), c = i("d", t);
				return n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("defs", null, n.a.createElement("circle", {
					id: r,
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
					fill: a.a.black,
					filter: `url(#${s})`,
					xlinkHref: `#${r}`
				}), n.a.createElement("use", {
					fill: a.a.white,
					xlinkHref: `#${r}`
				})), n.a.createElement("g", {
					transform: "rotate(90 9.326 23.5)"
				}, n.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), n.a.createElement("mask", {
					id: c,
					fill: a.a.white
				}, n.a.createElement("use", {
					xlinkHref: `#${o}`
				})), n.a.createElement("use", {
					fill: a.a.black,
					xlinkHref: `#${o}`
				}), n.a.createElement("g", {
					fill: a.a.alienblue,
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
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/Inline/index.m.less"),
				a = s.n(n);
			t.a = r.a.div("inlineRow", a.a)
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(o);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(a.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: r,
					widthLeft: a,
					gutter: o,
					...d
				} = e;
				return n.a.createElement("div", l({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, d), n.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: a,
						height: r,
						marginRight: o
					}
				}, Array.isArray(s) && s[0]), n.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/selectors/removedPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "d", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				o = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/selectors/user.ts");
			const d = new Set([c.g.AntiEvilOps, c.g.AutomodFiltered, c.g.CommunityOps, c.g.ContentTakedown, c.g.CopyrightTakedown, c.g.Moderator, c.g.Reddit]),
				m = new Set([c.g.Author, c.g.AuthorDeleted]),
				u = Object(n.a)(a.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return d.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = r.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let n = Object(i.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== o.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				p = Object(n.a)(a.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return m.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = r.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let n = Object(i.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== o.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				b = Object(n.a)(a.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return m.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				h = Object(n.a)(l.l, a.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				x = Object(n.a)(a.a, e => !(!e || !1 !== e.isRobotIndexable))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.fde0b93477a09e9372c7.js.map