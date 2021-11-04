// https://www.redditstatic.com/desktop2x/SubredditTopContent.649fd079467bcd28553d.js
// Retrieved at 11/4/2021, 10:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditTopContent", "FrontpageSidebar"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/selectors/telemetry.ts");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, s) => (a = (() => {})) => n => {
				const r = u(n.target, n.currentTarget),
					o = p(n.target, n.currentTarget);
				r && s && t && (m(n.target, n.currentTarget, d.anchors) ? s(t(e, r, o)) : s(s => {
					const a = t(e, r, o)(s);
					let n;
					if (a && a.actionInfo) {
						const {
							pageType: e,
							...t
						} = a.actionInfo;
						n = t
					}
					return {
						...a,
						actionInfo: Object(i.previousPageActionInfo)(s, n)
					}
				})), m(n.target, n.currentTarget, d.anchorsAndButtons) && a(n)
			};

			function l(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: r,
						clickTrackingId: i,
						...l
					} = t, d = Object(a.useCallback)(c(i, r, s), [i, r, s]);
					return n.a.createElement(e, o({}, l, {
						afterClickTracking: d
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(r.c)(t)
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
			const r = [n.nc, n.ob, n.A, n.P, n.jb, n.Qb],
				i = {
					[n.Qb]: e => a.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [a.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[n.jb]: e => a.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [a.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[n.P]: e => a.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [a.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[n.A]: e => a.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [a.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[n.ob]: e => a.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [a.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[n.nc]: e => a.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [a.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				o = {
					[n.Qb]: e => a.fbt._("{amount}s", [a.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[n.jb]: e => a.fbt._("{amount}m", [a.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[n.P]: e => a.fbt._("{amount}h", [a.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[n.A]: e => a.fbt._("{amount}d", [a.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[n.ob]: e => a.fbt._("{amount}m", [a.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.nc]: e => a.fbt._("{amount}y", [a.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[n.ob]: e => a.fbt._("{amount}m", [a.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.nc]: e => a.fbt._("{amount}y", [a.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, s = !1) {
				const c = Date.now(),
					l = new Date(e).getTime(),
					d = {
						[n.nc]: "",
						[n.ob]: "",
						[n.A]: "",
						[n.P]: "",
						[n.jb]: "",
						[n.Qb]: ""
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
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			}));
			var a = s("./node_modules/lodash/values.js"),
				n = s.n(a),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
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
						return n()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
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
			t.c = h
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
				l = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/clickSourceData/index.ts"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				h = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				x = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./src/lib/isUrl/index.ts"),
				f = s("./src/lib/prettyPrintNumber/index.ts"),
				C = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				E = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				y = s("./src/reddit/constants/posts.ts"),
				k = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/components/HumanDate/index.tsx"),
				_ = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				P = s("./src/reddit/layout/row/Inline/index.tsx"),
				j = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				N = s.n(j);
			var w = e => {
					const t = y.a.PROFILE,
						s = Object(_.a)(e.author, t),
						a = Object(O.a)();
					return r.a.createElement("div", {
						className: Object(c.a)(N.a.container, e.className)
					}, r.a.createElement(P.a, {
						className: N.a.layout
					}, r.a.createElement("div", {
						className: N.a.textContainer
					}, r.a.createElement("span", {
						className: N.a.description
					}, x.fbt._("posted by", null, {
						hk: "wl0iP"
					})), r.a.createElement(E.a, {
						className: N.a.authorName,
						to: {
							pathname: s,
							state: a
						}
					}, Object(_.b)(e.author, t)), r.a.createElement("span", {
						className: N.a.timestamp
					}, r.a.createElement(v.d, {
						seconds: e.created / k.Qb
					})))))
				},
				S = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				L = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				I = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				T = s.n(I);
			var D = e => {
					const t = Object(_.a)(e.name, e.type);
					return r.a.createElement("div", {
						className: Object(c.a)(T.a.container, e.className)
					}, r.a.createElement(L.a, {
						className: T.a.layout
					}, r.a.createElement("div", {
						className: T.a.iconContainer
					}, e.iconUrl ? r.a.createElement("img", {
						className: T.a.icon,
						src: e.iconUrl
					}) : r.a.createElement(S.a, {
						className: T.a.planetIcon,
						"data-redditstyle": !0
					})), r.a.createElement("div", {
						className: T.a.textContainer
					}, r.a.createElement(E.a, {
						"data-click-id": "subreddit",
						className: T.a.name,
						to: t
					}, Object(_.b)(e.displayText || e.name, e.type)), r.a.createElement("span", {
						className: T.a.separator
					}, "•"), r.a.createElement("span", {
						className: T.a.timestamp
					}, r.a.createElement(v.d, {
						seconds: e.created / k.Qb
					})))))
				},
				M = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				A = s("./src/reddit/components/Media/index.tsx"),
				V = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				U = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				W = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				F = s("./src/reddit/components/PostContainer/index.tsx"),
				B = s("./src/reddit/components/PostTitle/index.tsx"),
				R = s("./src/reddit/connectors/miniCardPost.ts"),
				H = s("./src/reddit/contexts/Post/index.tsx"),
				Q = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				q = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				z = s("./src/reddit/models/Media/index.ts"),
				G = s("./src/reddit/models/Subreddit/index.ts"),
				Z = s("./src/reddit/models/Widgets/index.ts"),
				K = s("./src/reddit/components/MiniCardPost/index.m.less"),
				Y = s.n(K),
				J = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				X = s.n(J),
				$ = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				ee = s.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			class se extends r.a.Component {
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
						showAuthorBlock: C = !1,
						showMetaLine: E = !0,
						showSubscribeBlock: y = !1,
						subredditOrProfile: k
					} = this.props, {
						media: v
					} = a || p, _ = !v && !!p.source && Object(g.a)(p.source.url);
					let O = v && r.a.createElement(A.a, {
							autoplayPref: e,
							availableWidth: t,
							className: Y.a.media,
							forceAspectRatio: z.c,
							imageBoxClassName: Y.a.mediaImageBox,
							imageBoxContentImageClassName: Y.a.mediaImageBoxContentImage,
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
					v && O && (v.type !== z.o.RTJSON && v.type !== z.o.TEXT ? (O = r.a.createElement("div", {
						className: ee.a.mediaWrapper
					}, O), P = !0) : v && v.content && Object(Q.a)(p) && (O = r.a.createElement("div", {
						className: ee.a.textWrapper
					}, O)));
					const j = !P && !_;
					let N;
					return k && (N = Object(G.h)(k) ? Object(Z.m)(k) : Object(Z.n)(k)), r.a.createElement(F.a, {
						className: Object(c.a)(ee.a.container, X.a.largeAndMediumActiveStyles, X.a.largeAndMediumPostStyles, Y.a.postContainer, Object(q.a)(this.props), s),
						post: p,
						onClick: u,
						eventFactory: i,
						style: {
							...Object(q.b)(this.props.flairStyleTemplate),
							...Object(q.d)(this.props),
							...this.props.style
						},
						"data-click-id": this.props["data-click-id"]
					}, r.a.createElement(W.a, {
						className: Y.a.backgroundWrapper,
						flairStyleTemplate: o
					}, r.a.createElement("div", {
						className: Object(c.a)(ee.a.innerContainer, Y.a.innerContainer)
					}, y && k && r.a.createElement(D, te({
						created: p.created
					}, N)), C && k && r.a.createElement(w, te({
						created: p.created,
						author: p.author
					}, N)), r.a.createElement(B.c, {
						className: j ? ee.a.postTitle : ee.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: B.b.Large,
						titleColor: o && o.postTitleColor
					}), E && k && r.a.createElement(V.a, {
						className: ee.a.metaLine,
						crosspostSubredditOrProfile: n,
						hideNSFWPref: d,
						post: p,
						subredditOrProfile: k
					}), (P || _) && r.a.createElement("div", {
						className: ee.a.flexSpacer
					}), _ && r.a.createElement("div", {
						className: ee.a.mediaWrapper
					}, r.a.createElement(U.a, {
						className: ee.a.thumbnailWrapper,
						thumbnailClassName: ee.a.thumbnail,
						thumbnailContainerClassName: ee.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: o && o.postPlaceholderImage
					})), O, r.a.createElement("div", {
						className: ee.a.metaWrapper
					}, r.a.createElement("span", {
						className: ee.a.meta
					}, x.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [x.fbt._plural(p.score, "number", Object(f.b)(p.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: ee.a.meta
					}, x.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [x.fbt._plural(p.numComments, "number", Object(f.b)(p.numComments))], {
						hk: "1QQoSA"
					}))))), r.a.createElement(M.d, null))
				}
			}
			const ae = Object(H.b)(Object(R.a)(Object(C.a)(se)));
			class ne extends r.a.Component {
				render() {
					return r.a.createElement(ae, this.props)
				}
			}
			var re = s("./node_modules/reselect/es/index.js"),
				ie = s("./src/reddit/components/SubredditIcon/index.tsx"),
				oe = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				ce = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				le = s("./src/reddit/models/Vote/index.ts"),
				de = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				me = s.n(de);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const pe = Object(m.u)(),
				be = Object(re.c)({
					isFakeSubreddit: m.y
				}),
				he = Object(o.b)(be),
				xe = e => {
					const t = {
						interactive: !1,
						voteState: le.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(c.a)(me.a.emptyVotes, e.className)
					}, r.a.createElement(oe.d, t), r.a.createElement("div", {
						className: Object(c.a)(me.a.emptyScore, Object(ce.b)({
							isLoading: e.isLoading
						}))
					}), r.a.createElement(oe.c, t))
				};
			var ge = pe(he(Object(C.a)(({
					className: e,
					isLoading: t,
					showSubreddit: s,
					...a
				}) => r.a.createElement("div", {
					className: Object(c.a)(me.a.container, X.a.largeAndMediumPostStyles, e)
				}, r.a.createElement("div", {
					className: Object(c.a)(me.a.thumbnail, Object(ce.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: me.a.content
				}, r.a.createElement("div", {
					className: me.a.titleContainer
				}, r.a.createElement("div", {
					className: Object(c.a)(me.a.title, Object(ce.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: Object(c.a)(me.a.title, Object(ce.b)({
						isLoading: t
					}))
				})), s && r.a.createElement(P.a, {
					className: me.a.subreddit
				}, r.a.createElement(ie.a, ue({
					className: Object(c.a)(Object(ce.b)({
						isLoading: !1
					}))
				}, a)), r.a.createElement("div", {
					className: Object(c.a)(me.a.subredditName, Object(ce.b)({
						isLoading: t
					}))
				})), r.a.createElement(P.a, null, r.a.createElement(xe, ue({
					isLoading: t
				}, a)), r.a.createElement("div", {
					className: Object(c.a)(me.a.comments, Object(ce.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: Object(c.a)(me.a.share, Object(ce.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: Object(c.a)(me.a.ellipsis, Object(ce.b)({
						isLoading: t
					}))
				}))))))),
				fe = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				Ce = s.n(fe);
			var Ee = e => r.a.createElement("div", {
					className: Object(c.a)(Ce.a.container, e.className)
				}, r.a.createElement("div", {
					className: Ce.a.largePosts
				}, r.a.createElement(ge, {
					className: Ce.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(ge, {
					className: Ce.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(ge, {
					className: Ce.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				ye = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				ke = s.n(ye);
			const ve = 326,
				_e = 12,
				Oe = {
					stiffness: 210,
					damping: 30
				},
				Pe = 100,
				je = "post_carousel_item",
				Ne = ({
					root: e,
					handleVisibilityChange: t,
					renderPost: s,
					...n
				}) => {
					const i = s ? s(n) : r.a.createElement(ne, n);
					return r.a.createElement(a.a, {
						root: e,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: t
					}, i)
				},
				we = Object(o.b)(null, (e, {
					discoveryUnit: t,
					searchDiscoveryUnit: s,
					pageLayer: a
				}) => ({
					openOverlay: t => e(Object(p.a)({
						pathname: Object(b.b)(t.permalink),
						state: Object(u.a)(a)
					})),
					trackPostClick: (t, a) => e((e, n) => s ? h.r(n(), s, t, a) : null),
					trackPostSubredditClick: a => e((e, n) => t ? h.t(n(), t, a) : s ? h.t(n(), s, a) : null)
				})),
				Se = Object(m.u)();
			class Le extends l.c {
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
						return (c = "subreddit" === t && o ? h.C(o, r, n, i) : i && o ? h.D(o, r, n, i) : h.q(s, a))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: a,
							singleSubredditMode: n
						} = this.props;
						return r.a.createElement(Ne, {
							"data-click-id": je,
							className: ke.a.largePost,
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
						className: ke.a.posts,
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
					if (this.props.isLoading || 0 === this.props.items.length) return r.a.createElement(Ee, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: d = ve
					} = this.props, {
						scrollIndex: m,
						visibleItemsCount: u
					} = this.state, p = this.getMaxScrollIndex(u), b = this.getAdjustment({
						itemWidth: d,
						maxScrollIndex: p,
						scrollIndex: m,
						spacerWidth: _e,
						visibleItemsCount: u
					}), h = e ? Pe : this.getMarginLeft({
						adjustment: b,
						itemWidth: d,
						scrollIndex: m,
						spacerWidth: _e
					});
					return r.a.createElement("div", {
						className: Object(c.a)(ke.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, r.a.createElement(i.Motion, {
						defaultStyle: {
							marginLeft: e || n ? Pe : 0
						},
						style: {
							marginLeft: Object(i.spring)(h, o || Oe)
						}
					}, this.renderPosts), 0 !== m && r.a.createElement(l.a, {
						className: Object(c.a)(ke.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: a
					}), !this.state.itemsFitInContainer && (null == p || m < p) && r.a.createElement(l.b, {
						className: Object(c.a)(ke.a.arrowRight, n && !e && ke.a.slideIn, s),
						onClick: this.onClickNext,
						seed: a
					}))
				}
			}
			t.a = Se(we(Object(d.c)(Le)))
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
				b = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = s("./src/reddit/components/Widgets/Base/index.tsx"),
				x = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				g = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/helpers/chooseVariant/index.ts"),
				C = s("./src/reddit/selectors/user.ts");
			const E = e => Object(C.H)(e) || g.Fe.ShowTopContent === Object(f.c)(e, {
				experimentEligibilitySelector: f.a,
				experimentName: g.ze
			});
			var y = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less"),
				v = s.n(k);
			const _ = Object(c.b)(() => Object(d.c)({
				inSubredditTopContentExperiment: E,
				subredditUrl: y.d
			}), e => ({
				trackDiscoveryUnitView: t => e((e, s) => x.b(s(), t)),
				trackDismissClick: t => e((e, s) => x.d(s(), t)),
				trackPostView: r()((t, s, a) => e((e, n) => x.u(n(), t, s, a)), ({
					id: e
				}, t) => `${e}-${t}`)
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
					} = s, i = `${t}${m.V.TOP}?t=${r}`, c = o.a.createElement(h.a, {
						className: v.a.widgetHeader
					}, o.a.createElement("button", {
						className: v.a.closeButton,
						onClick: this.onCloseClick
					}, o.a.createElement(b.b, {
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
			t.default = _(O)
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
					seconds: e.poll.endsAt / a.Qb
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
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/objectSelector/index.ts"),
				C = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				E = s("./src/reddit/components/PostContainer/index.m.less"),
				y = s.n(E);
			const k = Object(p.a)(() => Object(r.c)({
				basePixelMetadata: Object(f.a)((e, {
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
						sendEvent: h,
						style: x,
						ref: f,
						shouldAddGalleryViewability: C = !0
					} = this.props, E = n.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: f,
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
						className: Object(g.a)(y.a.WrappedPost, a, `Post ${d.id}`, {
							promotedlink: d.isSponsored
						}),
						"data-testid": "post-container",
						id: l ? l(d.id) : d.id,
						tabIndex: -1
					}, s), k = !!d.media && d.media.type === b.o.VIDEO;
					return d.isSponsored || k ? n.a.createElement(o.a, {
						post: d,
						trackDisplay: !0
					}, E) : d.media && Object(b.E)(d.media) && C ? n.a.createElement(m, {
						postId: d.id
					}, E) : E
				}
			}
			t.a = k(Object(C.a)(Object(u.c)(v)))
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
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				x = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				g = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/path/index.ts"),
				C = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				E = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/models/Flair/index.ts"),
				k = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_ = s("./src/lib/getShortenedLink.ts"),
				O = s("./src/reddit/components/FlairWrapper/index.tsx"),
				P = s("./node_modules/fbt/lib/FbtPublic.js"),
				j = s("./src/lib/prettyPrintNumber/index.ts"),
				N = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				w = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				S = s.n(w);
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
					}, r.a.createElement("span", null, P.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [P.fbt._param("count", Object(j.a)(a)), P.fbt._plural(parseInt(a))], {
						hk: "4rP1VK"
					})), t && r.a.createElement(N.a, {
						className: S.a.proposalExpiry,
						poll: t
					}))
				})),
				D = s("./src/reddit/components/SEOTitle/index.tsx"),
				M = s("./src/reddit/selectors/experiments/econ/index.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				V = s("./src/reddit/components/PostTitle/index.m.less"),
				U = s.n(V),
				W = s("./src/config.ts"),
				F = s("./src/reddit/hooks/useClickSourceData.ts"),
				B = s("./src/reddit/hooks/useExperimentVariant.ts"),
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
					}, s ? r.a.createElement(D.b, {
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
					shouldOpenPostInNewTab: A.db,
					isTournamentPredictionPostV2: M.v
				}),
				Y = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: a
					} = t, n = Object(F.a)(), i = Object(B.a)(u.Tc) === u.Yc.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return r.a.createElement(Z, {
						nowrap: e.nowrap
					}, r.a.createElement(J, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return r.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: a,
						postId: t.id,
						source: t.source
					}, r.a.createElement(J, e)); {
						const o = t.media && Object(k.H)(t.media) ? Object(C.c)(t.id, s.name) : t.permalink,
							c = e.isCommentPermalink ? Object(f.b)(o) : i ? Object(x.a)(o, void 0, n) : Object(x.a)(o);
						return r.a.createElement(Z, {
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
					const i = e.isCommentsPage ? D.a.PostComments : D.a.PostItem;
					return r.a.createElement(z, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && r.a.createElement(O.a, {
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
					} = s, n = e.isCommentsPage ? Q.SourceElement.PostLink : Q.SourceElement.ListingPostLink, i = !t && !e.isCrosspost && e.size !== I.Large && !s.isSponsored && !(s.media && Object(k.H)(s.media)) && (s.source || s.media && (s.media.type === k.o.GIFVIDEO || s.media.type === k.o.IMAGE || s.media.type === k.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return r.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(k.D)(s),
							isSponsored: a,
							postId: s.id,
							source: s.source,
							sourceElement: n
						}, Object(_.a)(s), !s.isSponsored && r.a.createElement(E.a, {
							name: "external_link",
							className: U.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== I.Large && e.size !== I.ExtraLarge) return r.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: a,
						postId: s.id,
						source: s.source,
						sourceElement: n
					}, Object(_.a)(s), !s.isSponsored && r.a.createElement(E.a, {
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
					} = this.props, u = a === y.b.Left, p = Object(O.b)(c), b = l ? p.filter(e => e.type === y.f.Nsfw || e.type === y.f.Spoiler) : u ? p.filter(e => Object(g.q)(e.type)) : [], h = l ? [] : u ? p.filter(e => !Object(g.q)(e.type)) : p, x = !i && !n, f = !s && b && b.length > 0 && x, C = !s && h && h.length > 0 && x, E = !(m && (null === (e = c.pollData) || void 0 === e ? void 0 : e.isPrediction));
					return r.a.createElement("div", {
						className: Object(d.a)(U.a.Component, t, c.id)
					}, !l && f && r.a.createElement(O.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), E && r.a.createElement(Y, q({}, this.props, {
						leftFlair: l ? b : void 0
					})), o && r.a.createElement(T, {
						className: U.a.pollMeta,
						pollId: o.id
					}), r.a.createElement(X, this.props), C && r.a.createElement(O.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement("div", {
						className: U.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${W.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
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
				b = ["center", "bottom"],
				h = o.a.div("Container", u.a),
				x = Object(i.a)(c.b),
				g = Object(l.u)({
					isProfileListingPage: l.H
				});
			class f extends r.a.Component {
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
			t.a = g(f)
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
					fill: r.b.black,
					filter: `url(#${s})`,
					xlinkHref: `#${a}`
				}), n.a.createElement("use", {
					fill: r.b.white,
					xlinkHref: `#${a}`
				})), n.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, n.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), n.a.createElement("mask", {
					id: c,
					fill: r.b.white
				}, n.a.createElement("use", {
					xlinkHref: `#${o}`
				})), n.a.createElement("use", {
					fill: r.b.black,
					xlinkHref: `#${o}`
				}), n.a.createElement("g", {
					fill: r.b.alienblue,
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
					fill: r.b.black,
					filter: `url(#${s})`,
					xlinkHref: `#${a}`
				}), n.a.createElement("use", {
					fill: r.b.white,
					xlinkHref: `#${a}`
				})), n.a.createElement("g", {
					transform: "rotate(90 9.326 23.5)"
				}, n.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), n.a.createElement("mask", {
					id: c,
					fill: r.b.white
				}, n.a.createElement("use", {
					xlinkHref: `#${o}`
				})), n.a.createElement("use", {
					fill: r.b.black,
					xlinkHref: `#${o}`
				}), n.a.createElement("g", {
					fill: r.b.alienblue,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditTopContent.649fd079467bcd28553d.js.map