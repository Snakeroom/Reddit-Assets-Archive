// https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.bc5b3433ff6c26b932c9.js
// Retrieved at 5/25/2021, 1:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["TopWeekPostsDiscoveryUnit"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "d", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/selectors/telemetry.ts");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, s) => (n = (() => {})) => a => {
				const r = u(a.target, a.currentTarget),
					o = p(a.target, a.currentTarget);
				r && s && t && (m(a.target, a.currentTarget, d.anchors) ? s(t(e, r, o)) : s(s => {
					const n = t(e, r, o)(s);
					let a;
					if (n && n.actionInfo) {
						const {
							pageType: e,
							...t
						} = n.actionInfo;
						a = t
					}
					return {
						...n,
						actionInfo: Object(i.previousPageActionInfo)(s, a)
					}
				})), m(a.target, a.currentTarget, d.anchorsAndButtons) && n(a)
			};

			function l(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: r,
						clickTrackingId: i,
						...l
					} = t, d = Object(n.useCallback)(c(i, r, s), [i, r, s]);
					return a.a.createElement(e, o({}, l, {
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
			var n = s("./src/reddit/models/Media/index.ts"),
				a = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = s.n(a);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: s,
					domainOverride: a
				} = e;
				let i = "";
				if (s) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = a || Object(n.D)(e)
				} else i = Object(n.D)(e);
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/constants/index.ts");
			const r = [a.hc, a.kb, a.x, a.L, a.fb, a.Kb],
				i = {
					[a.Kb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[a.fb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[a.L]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[a.x]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[a.kb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[a.hc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				o = {
					[a.Kb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[a.fb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[a.L]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[a.x]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[a.kb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[a.hc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[a.kb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[a.hc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, s = !1) {
				const c = Date.now(),
					l = new Date(e).getTime(),
					d = {
						[a.hc]: "",
						[a.kb]: "",
						[a.x]: "",
						[a.L]: "",
						[a.fb]: "",
						[a.Kb]: ""
					};
				let m = l - c;
				if (m <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of r) {
					const e = Math.floor(m / n);
					e && (d[n] = (t ? o : i)[n](e).toString()), m -= e * n
				}
				const u = r.map(e => d[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? u : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", u)], {
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
			var n = s("./node_modules/lodash/values.js"),
				a = s.n(n),
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
						return a()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
					}, this.getMaxScrollIndex = e => null != e && this.props.items ? this.props.items.length - e : null, this.getSpacerCount = e => e + 1, this.getMarginLeft = ({
						adjustment: e,
						itemWidth: t,
						scrollIndex: s,
						spacerWidth: n = 0
					}) => {
						return e - s * (t + n) + n
					}, this.getAdjustment = ({
						itemWidth: e,
						maxScrollIndex: t,
						scrollIndex: s,
						spacerWidth: n = 0,
						visibleItemsCount: a
					}) => {
						let r = 0;
						if (s === t && a) {
							const t = a * e + this.getSpacerCount(a) * n;
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
					spacerWidth: n = 0
				}) {
					if (!e) return !0;
					const a = t.length * s,
						r = this.getSpacerCount(t.length) * n;
					return e.offsetWidth >= a + r
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
			t.c = h
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
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = 236
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2-uI1CWUC-WOhm-MolZUT8",
				background: "_2KsrA9nTjIN0VD69GqImgf"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Y
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				d = s("./src/reddit/components/PostContainer/index.tsx"),
				m = s("./src/reddit/connectors/miniCardPost.ts"),
				u = s("./src/reddit/contexts/Post/index.tsx"),
				p = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = s("./src/reddit/models/Subreddit/index.ts"),
				h = s("./src/config.ts"),
				x = s("./src/lib/isUrl/index.ts"),
				f = s("./src/reddit/components/Media/index.tsx"),
				g = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				C = s("./src/reddit/components/PostTitle/index.tsx"),
				y = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				v = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				E = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				k = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/components/MiniCardPost/index.m.less"),
				O = s.n(P),
				_ = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				j = s.n(_);
			const N = `${h.a.assetPath}/img/link-placeholder.png`;
			var S = e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: r,
						flairStyleTemplate: o,
						forceLoadMedia: c,
						post: l,
						scrollerItemRef: d,
						shouldPause: m
					} = e, {
						media: u
					} = r || l, p = u && a.a.createElement(f.a, {
						autoplayPref: t,
						availableWidth: s,
						className: O.a.media,
						"data-redditstyle": !0,
						forceAspectRatio: k.c,
						imageBoxClassName: O.a.mediaImageBox,
						imageBoxContentImageClassName: O.a.mediaImageBoxContentImage,
						isListing: !0,
						isMiniCard: !0,
						isMiniCardHQPreviews: !0,
						isNotCardView: !0,
						post: r || l,
						scrollerItemRef: d,
						shouldLoad: c,
						shouldPause: m,
						showCentered: !1,
						showFull: !1
					});
					let b, h = !0;
					const P = !!l.source && Object(x.a)(l.source.url) || !!l.thumbnail && Object(x.a)(l.thumbnail.url);
					return !u && P ? (h = !1, b = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: j.a.flexSpacer
					}), a.a.createElement("div", {
						className: j.a.mediaWrapper
					}, a.a.createElement(g.a, {
						className: j.a.thumbnailWrapper,
						thumbnailClassName: j.a.thumbnail,
						thumbnailContainerClassName: j.a.thumbnailContainer,
						thumbnailLinkIconClassName: j.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: l,
						showPlaceholderContentType: !o || !o.postPlaceholderImage,
						templatePlaceholderImage: o ? o.postPlaceholderImage : N,
						usePreview: !0
					})))) : u && p ? u.type !== k.o.RTJSON && u.type !== k.o.TEXT ? (h = !1, b = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: j.a.flexSpacer
					}), a.a.createElement("div", {
						className: j.a.mediaWrapper
					}, p))) : b = Object(E.a)(l) || Object(v.c)(l) && Object(y.a)(l) ? a.a.createElement("div", {
						className: j.a.textWrapper
					}, p) : a.a.createElement("div", {
						className: j.a.flexSpacer
					}) : b = a.a.createElement("div", {
						className: j.a.flexSpacer
					}), a.a.createElement("div", {
						className: Object(i.a)(j.a.body, n)
					}, a.a.createElement(C.c, {
						className: h ? j.a.postTitle : j.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: l,
						size: C.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: o && o.postTitleColor
					}), b)
				},
				w = s("./node_modules/fbt/lib/FbtPublic.js"),
				I = s("./src/lib/prettyPrintNumber/index.ts"),
				L = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				T = s.n(L);
			var M = e => {
					const {
						className: t,
						post: s
					} = e;
					return a.a.createElement("div", {
						className: Object(i.a)(T.a.footer, t)
					}, a.a.createElement("span", {
						className: T.a.metaText
					}, w.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [w.fbt._plural(s.score, "number", Object(I.b)(s.score))], {
						hk: "2ncFte"
					})), a.a.createElement("span", {
						className: T.a.metaText
					}, w.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [w.fbt._plural(s.numComments, "number", Object(I.b)(s.numComments))], {
						hk: "1QQoSA"
					})))
				},
				D = s("./src/reddit/components/SubredditIcon/index.tsx"),
				F = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				W = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				U = s("./src/reddit/constants/posts.ts"),
				A = s("./src/reddit/controls/Button/index.tsx"),
				B = s("./src/reddit/controls/InternalLink/index.tsx"),
				R = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				V = s.n(R);
			var H = e => {
					const {
						className: t,
						getSubscribeEventFactory: s,
						onSubredditOrProfileClick: n,
						shouldShowSubscribeButton: r,
						subredditOrProfile: o
					} = e, c = Object(b.h)(o) ? U.a.PROFILE : U.a.SUBREDDIT;
					return a.a.createElement("div", {
						className: Object(i.a)(V.a.header, t)
					}, a.a.createElement(B.a, {
						className: V.a.iconLink,
						"data-redditstyle": !0,
						to: o.url,
						onMouseDown: n
					}, a.a.createElement(D.b, {
						className: V.a.icon,
						subredditOrProfile: o
					})), a.a.createElement("div", {
						className: V.a.name
					}, a.a.createElement(B.a, {
						className: V.a.link,
						"data-redditstyle": !0,
						to: o.url,
						onMouseDown: n
					}, Object(W.b)(o.displayText || o.name, c))), r && a.a.createElement(F.a, {
						className: V.a.subscribe,
						"data-redditstyle": !0,
						getEventFactory: s,
						identifier: {
							name: o.name,
							type: c
						},
						size: A.c.XXS,
						small: !0
					}))
				},
				z = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Q = s.n(z),
				G = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less"),
				q = s.n(G);
			const K = Object(r.a)(e => e.subredditOrProfile, e => e.subscribedProfiles, e => e.subscribedSubreddits, (e, t, s) => {
				if (!e) return !1;
				return (Object(b.h)(e) ? t : s).some(t => t.id === e.id)
			});
			class J extends a.a.Component {
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
						flairStyleTemplate: n,
						onClickPost: r,
						post: o,
						subredditOrProfile: m,
						subscribedProfiles: u,
						subscribedSubreddits: b
					} = t, h = !K({
						subredditOrProfile: m,
						subscribedProfiles: u,
						subscribedSubreddits: b
					});
					return a.a.createElement(d.a, {
						className: Object(i.a)(q.a.container, Q.a.largeAndMediumActiveStyles, Q.a.largeAndMediumPostStyles, Q.a.mUseRedditTheme, O.a.postContainer, Object(p.a)(this.props), e),
						eventFactory: s,
						onClick: r,
						post: o,
						style: {
							...Object(p.b)(this.props.flairStyleTemplate),
							...Object(p.d)(this.props)
						}
					}, a.a.createElement(l.a, {
						className: q.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: n
					}, m && a.a.createElement(H, {
						getSubscribeEventFactory: this.getSubscribeEventFactory,
						onSubredditOrProfileClick: this.trackSubredditOrProfileClicked,
						subredditOrProfile: m,
						shouldShowSubscribeButton: h
					}), a.a.createElement(S, t), a.a.createElement(M, {
						"data-redditstyle": !0,
						post: o
					})), a.a.createElement(c.d, null))
				}
			}
			const Z = Object(u.b)(Object(m.a)(Object(o.a)(J)));
			class Y extends a.a.Component {
				render() {
					return a.a.createElement(Z, this.props)
				}
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
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-motion/lib/react-motion.js"),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/history.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				h = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./node_modules/uuid/v4.js"),
				g = s.n(f),
				C = s("./node_modules/fbt/lib/FbtPublic.js"),
				y = s("./src/lib/isUrl/index.ts"),
				v = s("./src/lib/prettyPrintNumber/index.ts"),
				E = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				k = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				P = s("./src/lib/timeAgo/index.ts"),
				O = s("./src/reddit/constants/posts.ts"),
				_ = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				j = s("./src/reddit/hooks/useClickSourceData.ts"),
				N = s("./src/reddit/layout/row/Inline/index.tsx"),
				S = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				w = s.n(S);
			var I = e => {
					const t = O.a.PROFILE,
						s = Object(_.a)(e.author, t),
						n = Object(j.a)();
					return r.a.createElement("div", {
						className: Object(c.a)(w.a.container, e.className)
					}, r.a.createElement(N.a, {
						className: w.a.layout
					}, r.a.createElement("div", {
						className: w.a.textContainer
					}, r.a.createElement("span", {
						className: w.a.description
					}, C.fbt._("posted by", null, {
						hk: "wl0iP"
					})), r.a.createElement(k.a, {
						className: w.a.authorName,
						to: {
							pathname: s,
							state: n
						}
					}, Object(_.b)(e.author, t)), r.a.createElement("span", {
						className: w.a.timestamp
					}, Object(P.d)(e.created / 1e3)))))
				},
				L = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				T = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				M = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				D = s.n(M);
			var F = e => {
					const t = Object(_.a)(e.name, e.type);
					return r.a.createElement("div", {
						className: Object(c.a)(D.a.container, e.className)
					}, r.a.createElement(T.a, {
						className: D.a.layout
					}, r.a.createElement("div", {
						className: D.a.iconContainer
					}, e.iconUrl ? r.a.createElement("img", {
						className: D.a.icon,
						src: e.iconUrl
					}) : r.a.createElement(L.a, {
						className: D.a.planetIcon,
						"data-redditstyle": !0
					})), r.a.createElement("div", {
						className: D.a.textContainer
					}, r.a.createElement(k.a, {
						"data-click-id": "subreddit",
						className: D.a.name,
						to: t
					}, Object(_.b)(e.displayText || e.name, e.type)), r.a.createElement("span", {
						className: D.a.separator
					}, "•"), r.a.createElement("span", {
						className: D.a.timestamp
					}, Object(P.d)(e.created / 1e3)))))
				},
				W = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				U = s("./src/reddit/components/Media/index.tsx"),
				A = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				B = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				R = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				V = s("./src/reddit/components/PostContainer/index.tsx"),
				H = s("./src/reddit/components/PostTitle/index.tsx"),
				z = s("./src/reddit/connectors/miniCardPost.ts"),
				Q = s("./src/reddit/contexts/Post/index.tsx"),
				G = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				q = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				K = s("./src/reddit/models/Media/index.ts"),
				J = s("./src/reddit/models/Subreddit/index.ts"),
				Z = s("./src/reddit/models/Widgets/index.ts"),
				Y = s("./src/reddit/components/MiniCardPost/index.m.less"),
				X = s.n(Y),
				$ = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ee = s.n($),
				te = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				se = s.n(te);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class ae extends r.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: n,
						crosspostSubredditOrProfile: a,
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
						subredditOrProfile: E
					} = this.props, {
						media: k
					} = n || p, P = !k && !!p.source && Object(y.a)(p.source.url);
					let O = k && r.a.createElement(U.a, {
							autoplayPref: e,
							availableWidth: t,
							className: X.a.media,
							forceAspectRatio: K.c,
							imageBoxClassName: X.a.mediaImageBox,
							imageBoxContentImageClassName: X.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: n || p,
							scrollerItemRef: b,
							shouldPause: h,
							shouldLoad: l,
							showCentered: !1,
							showFull: !1
						}),
						_ = !1;
					k && O && (k.type !== K.o.RTJSON && k.type !== K.o.TEXT ? (O = r.a.createElement("div", {
						className: se.a.mediaWrapper
					}, O), _ = !0) : k && k.content && Object(G.a)(p) && (O = r.a.createElement("div", {
						className: se.a.textWrapper
					}, O)));
					const j = !_ && !P;
					let N;
					return E && (N = Object(J.h)(E) ? Object(Z.h)(E) : Object(Z.i)(E)), r.a.createElement(V.a, {
						className: Object(c.a)(se.a.container, ee.a.largeAndMediumActiveStyles, ee.a.largeAndMediumPostStyles, X.a.postContainer, Object(q.a)(this.props), s),
						post: p,
						onClick: u,
						eventFactory: i,
						style: {
							...Object(q.b)(this.props.flairStyleTemplate),
							...Object(q.d)(this.props),
							...this.props.style
						},
						"data-click-id": this.props["data-click-id"]
					}, r.a.createElement(R.a, {
						className: X.a.backgroundWrapper,
						flairStyleTemplate: o
					}, r.a.createElement("div", {
						className: Object(c.a)(se.a.innerContainer, X.a.innerContainer)
					}, g && E && r.a.createElement(F, ne({
						created: p.created
					}, N)), x && E && r.a.createElement(I, ne({
						created: p.created,
						author: p.author
					}, N)), r.a.createElement(H.c, {
						className: j ? se.a.postTitle : se.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: H.b.Large,
						titleColor: o && o.postTitleColor
					}), f && E && r.a.createElement(A.a, {
						className: se.a.metaLine,
						crosspostSubredditOrProfile: a,
						hideNSFWPref: d,
						post: p,
						subredditOrProfile: E
					}), (_ || P) && r.a.createElement("div", {
						className: se.a.flexSpacer
					}), P && r.a.createElement("div", {
						className: se.a.mediaWrapper
					}, r.a.createElement(B.a, {
						className: se.a.thumbnailWrapper,
						thumbnailClassName: se.a.thumbnail,
						thumbnailContainerClassName: se.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: o && o.postPlaceholderImage
					})), O, r.a.createElement("div", {
						className: se.a.metaWrapper
					}, r.a.createElement("span", {
						className: se.a.meta
					}, C.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [C.fbt._plural(p.score, "number", Object(v.b)(p.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: se.a.meta
					}, C.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [C.fbt._plural(p.numComments, "number", Object(v.b)(p.numComments))], {
						hk: "1QQoSA"
					}))))), r.a.createElement(W.d, null))
				}
			}
			const re = Object(Q.b)(Object(z.a)(Object(E.a)(ae)));
			class ie extends r.a.Component {
				render() {
					return r.a.createElement(re, this.props)
				}
			}
			var oe = s("./node_modules/reselect/es/index.js"),
				ce = s("./src/reddit/components/SubredditIcon/index.tsx"),
				le = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				de = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				me = s("./src/reddit/models/Vote/index.ts"),
				ue = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				pe = s.n(ue);

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const he = Object(u.t)(),
				xe = Object(oe.c)({
					isFakeSubreddit: u.x
				}),
				fe = Object(o.b)(xe),
				ge = e => {
					const t = {
						interactive: !1,
						voteState: me.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(c.a)(pe.a.emptyVotes, e.className)
					}, r.a.createElement(le.d, t), r.a.createElement("div", {
						className: Object(c.a)(pe.a.emptyScore, Object(de.b)({
							isLoading: e.isLoading
						}))
					}), r.a.createElement(le.c, t))
				};
			var Ce = he(fe(Object(E.a)(({
					className: e,
					isLoading: t,
					showSubreddit: s,
					...n
				}) => r.a.createElement("div", {
					className: Object(c.a)(pe.a.container, ee.a.largeAndMediumPostStyles, e)
				}, r.a.createElement("div", {
					className: Object(c.a)(pe.a.thumbnail, Object(de.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: pe.a.content
				}, r.a.createElement("div", {
					className: pe.a.titleContainer
				}, r.a.createElement("div", {
					className: Object(c.a)(pe.a.title, Object(de.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: Object(c.a)(pe.a.title, Object(de.b)({
						isLoading: t
					}))
				})), s && r.a.createElement(N.a, {
					className: pe.a.subreddit
				}, r.a.createElement(ce.a, be({
					className: Object(c.a)(Object(de.b)({
						isLoading: !1
					}))
				}, n)), r.a.createElement("div", {
					className: Object(c.a)(pe.a.subredditName, Object(de.b)({
						isLoading: t
					}))
				})), r.a.createElement(N.a, null, r.a.createElement(ge, be({
					isLoading: t
				}, n)), r.a.createElement("div", {
					className: Object(c.a)(pe.a.comments, Object(de.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: Object(c.a)(pe.a.share, Object(de.b)({
						isLoading: t
					}))
				}), r.a.createElement("div", {
					className: Object(c.a)(pe.a.ellipsis, Object(de.b)({
						isLoading: t
					}))
				}))))))),
				ye = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				ve = s.n(ye);
			var Ee = e => r.a.createElement("div", {
					className: Object(c.a)(ve.a.container, e.className)
				}, r.a.createElement("div", {
					className: ve.a.largePosts
				}, r.a.createElement(Ce, {
					className: ve.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(Ce, {
					className: ve.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(Ce, {
					className: ve.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				ke = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				Pe = s.n(ke);
			const Oe = 326,
				_e = 12,
				je = {
					stiffness: 210,
					damping: 30
				},
				Ne = 100,
				Se = "post_carousel_item",
				we = ({
					root: e,
					handleVisibilityChange: t,
					renderPost: s,
					...a
				}) => {
					const i = s ? s(a) : r.a.createElement(ie, a);
					return r.a.createElement(n.a, {
						root: e,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: t
					}, i)
				},
				Ie = Object(o.b)(null, (e, {
					discoveryUnit: t,
					searchDiscoveryUnit: s,
					pageLayer: n
				}) => ({
					openOverlay: t => e(Object(p.a)({
						pathname: Object(b.b)(t.permalink),
						state: {
							[m.a.ClickSource]: n ? Object(x.getPageTypeFromCurrentPage)(n) : void 0,
							[m.a.ClickId]: g()()
						}
					})),
					trackPostClick: (t, n) => e((e, a) => s ? h.w(a(), s, t, n) : null),
					trackPostSubredditClick: n => e((e, a) => t ? h.y(a(), t, n) : s ? h.y(a(), s, n) : null)
				})),
				Le = Object(u.t)();
			class Te extends l.c {
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
							discoveryUnitSubreddit: n,
							listingKey: a,
							pageLayer: r,
							searchDiscoveryUnit: i,
							searchOptions: o
						} = this.props;
						let c;
						return (c = "subreddit" === t && o ? h.K(o, r, a, i) : i && o ? h.L(o, r, a, i) : h.v(s, n))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: n,
							singleSubredditMode: a
						} = this.props;
						return r.a.createElement(we, {
							"data-click-id": Se,
							className: Pe.a.largePost,
							eventFactory: this.itemPostClickEventFactory,
							forceLoadMedia: !0,
							isMiniCard: s,
							postId: e,
							onClickPost: this.onClickPost,
							showAuthorBlock: !!a,
							showMetaLine: !1,
							showSubscribeBlock: !a,
							handleVisibilityChange: this.makeVisibilityChangeHandler(t),
							renderPost: n,
							root: this.id,
							key: e
						})
					}, this.renderPosts = e => r.a.createElement("div", {
						className: Pe.a.posts,
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
					} = this.props, a = s || e;
					a && t && t(a, n)
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
						shouldSlideIn: a,
						springConfig: o
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return r.a.createElement(Ee, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: d = Oe
					} = this.props, {
						scrollIndex: m,
						visibleItemsCount: u
					} = this.state, p = this.getMaxScrollIndex(u), b = this.getAdjustment({
						itemWidth: d,
						maxScrollIndex: p,
						scrollIndex: m,
						spacerWidth: _e,
						visibleItemsCount: u
					}), h = e ? Ne : this.getMarginLeft({
						adjustment: b,
						itemWidth: d,
						scrollIndex: m,
						spacerWidth: _e
					});
					return r.a.createElement("div", {
						className: Object(c.a)(Pe.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, r.a.createElement(i.Motion, {
						defaultStyle: {
							marginLeft: e || a ? Ne : 0
						},
						style: {
							marginLeft: Object(i.spring)(h, o || je)
						}
					}, this.renderPosts), 0 !== m && r.a.createElement(l.a, {
						className: Object(c.a)(Pe.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: n
					}), !this.state.itemsFitInContainer && (null == p || m < p) && r.a.createElement(l.b, {
						className: Object(c.a)(Pe.a.arrowRight, a && !e && Pe.a.slideIn, s),
						onClick: this.onClickNext,
						seed: n
					}))
				}
			}
			t.a = Le(Ie(Object(d.c)(Te)))
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
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				d = s("./src/reddit/icons/svgs/Close/index.tsx"),
				m = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = s("./src/reddit/selectors/discoveryUnit.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx"),
				h = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts"),
				x = s("./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.m.less"),
				f = s.n(x);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = [], v = () => {}, E = () => void 0, k = c.a.button("CloseButton", f.a), P = Object(i.a)(p.y, e => e.filter(e => 9 === e.length)), O = Object(i.c)({
				discoveryUnit: e => Object(u.c)(e, {
					unitName: m.k
				}),
				postIds: P
			}), _ = Object(r.b)(O);
			class j extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !0
					}, this.handleCloseClick = () => this.setState({
						isVisible: !1
					}), this.renderPost = e => {
						const {
							discoveryUnit: t
						} = this.props;
						return t ? a.a.createElement(b.a, g({}, e, {
							getSubscribeEventFactory: E,
							onSubredditOrProfileClick: v,
							subscribedProfiles: y,
							subscribedSubreddits: y
						})) : null
					}
				}
				render() {
					const {
						className: e,
						discoveryUnit: t,
						postIds: s
					} = this.props;
					return this.state.isVisible && s.length ? a.a.createElement("div", {
						className: Object(o.a)(f.a.container, e)
					}, a.a.createElement("div", {
						className: f.a.header
					}, a.a.createElement("div", {
						className: f.a.title
					}, C._("Top posts of the week", null, {
						hk: "1qPdO2"
					})), a.a.createElement(k, {
						onClick: this.handleCloseClick
					}, a.a.createElement(d.a, {
						className: f.a.closeIcon
					}))), a.a.createElement("div", {
						className: f.a.body
					}, a.a.createElement(l.a, {
						className: f.a.carousel,
						discoveryUnit: t,
						isLoading: !1,
						items: s,
						itemWidth: h.a,
						leftArrowClassName: f.a.arrow,
						onPostView: v,
						renderPost: this.renderPost,
						rightArrowClassName: f.a.arrow
					}))) : null
				}
			}
			t.default = _(j)
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y7BouacdnDeKNuREDVkim",
				title: "KaBtU0qanIOVW0UniJKIe",
				label: "VmuxKqetMFPty4Vt4EAOj",
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv"
			}
		},
		"./src/reddit/components/Governance/PostPollMetaData/index.m.less": function(e, t, s) {
			e.exports = {
				proposalMetaData: "_2uZcUQgumllsYgn5TxSizG",
				proposalMetaDataTime: "_1u5ghYiKbGasP3ORCsbasV"
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
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				d = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			const b = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", p.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: a,
					post: m,
					subredditOrProfile: u
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(p.a.container, t)
				}, r.a.createElement(l.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: u.url
				}, r.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: a,
					subredditOrProfile: u
				}), r.a.createElement("span", null, u.displayText)), ((e, t) => {
					if (t) return r.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(d.d)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, r.a.createElement(b, null))
				})(m.author, s), u && u.isQuarantined && r.a.createElement(o.a, null))
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
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				o = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(o);

			function l(e) {
				const {
					source: t
				} = e.post;
				return a.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className)
				}, a.a.createElement(i.a, {
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
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/timeAgo/index.ts"),
				r = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i);

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return o.a.createElement("span", {
					className: e.className
				}, t ? n.fbt._("Voting closed {timeAgo}", [n.fbt._param("timeAgo", Object(a.d)(e.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(r.a)(new Date(e.poll.endsAt)))
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
				a = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				o = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				l = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/hooks/useTracking.ts");
			var m = a.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(d.a)(),
						r = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(l.a)(t, r, i), a.a.createElement("div", {
						role: "presentation"
					}, a.a.createElement("div", {
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
				v = s.n(y);
			const E = Object(p.a)(() => Object(r.c)({
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
				})),
				k = e => {
					const t = Object(C.d)(e.target, e.currentTarget),
						s = Object(C.b)(e.target, e.currentTarget, C.a.buttons);
					return "subreddit" !== t && s
				};
			class P extends a.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: r,
						makePostContainerId: l,
						post: d,
						onClick: u,
						onPostContentClick: p,
						pageType: h,
						sendEvent: x,
						style: g,
						ref: C
					} = this.props, y = a.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: g,
						ref: C,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => u && u(s, d, t, r, h))(s), p && k(s) && p(s, d)), d.id && r) {
								const {
									source: e
								} = Object(i.t)(d, r);
								e && e.outboundUrl && x(Object(c.c)(d.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(v.a.WrappedPost, n, `Post ${d.id}`, {
							promotedlink: d.isSponsored
						}),
						id: l ? l(d.id) : d.id,
						tabIndex: -1
					}, s), E = !!d.media && d.media.type === b.o.VIDEO;
					return d.isSponsored || E ? a.a.createElement(o.a, {
						post: d,
						trackDisplay: !0
					}, y) : d.media && Object(b.E)(d.media) ? a.a.createElement(m, {
						postId: d.id
					}, y) : y
				}
			}
			t.a = E(Object(C.c)(Object(u.c)(P)))
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
				return U
			})), s.d(t, "a", (function() {
				return Z
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
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
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				P = s("./src/reddit/models/Poll/index.ts"),
				O = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				_ = s.n(O);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = ({
				tournament: e
			}) => {
				const t = e.status === P.d.Live,
					s = e.status === P.d.Closed;
				return r.a.createElement("div", {
					className: _.a.container
				}, r.a.createElement("h3", {
					className: _.a.title
				}, e.name), r.a.createElement("div", {
					className: _.a.label
				}, j._("Predictions Tournament", null, {
					hk: "sZ4UO"
				}), t && r.a.createElement("span", {
					className: Object(d.a)(_.a.badge, _.a.live)
				}, j._("Live", null, {
					hk: "1G2P1W"
				})), s && r.a.createElement("span", {
					className: Object(d.a)(_.a.badge, _.a.ended)
				}, j._("Ended", null, {
					hk: "4s3hco"
				}))))
			};
			var S = s("./src/reddit/selectors/experiments/econ/predictions.ts"),
				w = s("./src/lib/getShortenedLink.ts"),
				I = s("./src/reddit/components/FlairWrapper/index.tsx"),
				L = s("./node_modules/fbt/lib/FbtPublic.js"),
				T = s("./src/lib/prettyPrintNumber/index.ts"),
				M = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				D = s("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				F = s.n(D);
			const W = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var U, A = Object(i.b)(W)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return r.a.createElement("div", {
						className: Object(d.a)(e.className, F.a.proposalMetaData)
					}, r.a.createElement("span", null, L.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [L.fbt._param("count", Object(T.a)(n)), L.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && r.a.createElement(M.a, {
						className: F.a.proposalMetaDataTime,
						poll: t
					}))
				})),
				B = s("./src/reddit/components/SEOTitle/index.tsx"),
				R = s("./src/reddit/selectors/user.ts"),
				V = s("./src/reddit/components/PostTitle/index.m.less"),
				H = s.n(V),
				z = s("./src/config.ts"),
				Q = s("./src/reddit/hooks/useClickSourceData.ts"),
				G = s("./src/reddit/hooks/useExperimentVariant.ts"),
				q = s("./src/reddit/hooks/usePostContext.ts"),
				K = s("./src/reddit/hooks/useTheme.ts");

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(U || (U = {}));
			const Z = ({
					size: e,
					titleColor: t,
					titleType: s,
					nowrap: n,
					children: a,
					className: i,
					redditStyle: o
				}) => {
					const c = Object(K.a)();
					let l = "";
					switch (e) {
						case U.ExtraLarge:
							l = H.a.ExtraLarge;
							break;
						case U.Large:
							l = H.a.Large;
							break;
						case U.Medium:
							l = H.a.Medium;
							break;
						case U.Small:
							l = H.a.Small;
							break;
						case U.ExtraSmall:
							l = H.a.ExtraSmall
					}
					return r.a.createElement("div", {
						className: Object(d.a)(H.a.Title, i, l, {
							[H.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": t || Object(k.a)({
								redditStyle: o,
								theme: c
							}).titleText
						}
					}, s ? r.a.createElement(B.b, {
						type: s
					}, a) : a)
				},
				Y = ({
					className: e,
					disableVisited: t,
					titleColor: s,
					children: n,
					...a
				}) => r.a.createElement(o.a, J({}, a, {
					className: Object(d.a)(e, H.a.styledLink, {
						[H.a.isVisitedEnabled]: !t
					})
				}), n),
				X = ({
					disableVisited: e,
					nowrap: t,
					className: s,
					children: n
				}) => r.a.createElement("div", {
					className: Object(d.a)(H.a.titleContainer, s, {
						[H.a.isNoWrap]: t,
						[H.a.isVisitedEnabled]: !e
					})
				}, n),
				$ = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(p.p)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: R.bb
				}),
				ee = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, a = Object(Q.a)(), i = Object(G.a)(u.Rb) === u.Vb.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return r.a.createElement(X, {
						nowrap: e.nowrap
					}, r.a.createElement(te, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return r.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, r.a.createElement(te, e)); {
						const o = t.media && Object(E.G)(t.media) ? Object(C.c)(t.id, s.name) : t.permalink,
							c = e.isCommentPermalink ? Object(g.b)(o) : i ? Object(x.a)(o, void 0, a) : Object(x.a)(o);
						return r.a.createElement(X, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return s ? r.a.createElement(b.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, r.a.createElement(te, t)) : r.a.createElement(te, t)
						})(t, e) : r.a.createElement(Y, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: c
						}, r.a.createElement(te, e)))
					}
				},
				te = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let a = e.format ? e.format(n) : n.title;
					s && "string" == typeof a && (a = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(a));
					const i = e.isCommentsPage ? B.a.PostComments : B.a.PostItem;
					return r.a.createElement(Z, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && r.a.createElement(I.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), a)
				},
				se = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: n
					} = s, a = !t && !e.isCrosspost && e.size !== U.Large && !s.isSponsored && !(s.media && Object(E.G)(s.media)) && (s.source || s.media && (s.media.type === E.o.GIFVIDEO || s.media.type === E.o.IMAGE || s.media.type === E.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return r.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(E.D)(s),
							isSponsored: n,
							postId: s.id,
							source: s.source
						}, Object(w.a)(s), !s.isSponsored && r.a.createElement(y.a, {
							className: H.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== U.Large && e.size !== U.ExtraLarge) return r.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: n,
						postId: s.id,
						source: s.source
					}, Object(w.a)(s), !s.isSponsored && r.a.createElement(y.a, {
						className: H.a.outboundLinkIcon
					}));
					return null
				};
			class ne extends r.a.Component {
				getDynamicStyleTags() {
					return r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${H.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(k.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(k.a)(this.props).titleText,Object(k.a)(this.props).body)};\n        }\n      `
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
						poll: i,
						post: o,
						showNSFWSpoilerFlairsOnly: c
					} = this.props, l = s === v.b.Left, m = Object(I.b)(o), u = c ? m.filter(e => e.type === v.f.Nsfw || e.type === v.f.Spoiler) : l ? m.filter(e => Object(f.q)(e.type)) : [], p = c ? [] : l ? m.filter(e => !Object(f.q)(e.type)) : m, b = !a && !n, h = !t && u && u.length > 0 && b, x = !t && p && p.length > 0 && b;
					return r.a.createElement("div", {
						className: Object(d.a)(H.a.Component, e, o.id)
					}, !c && h && r.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: u,
						nowrap: !0,
						post: o,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement(ee, J({}, this.props, {
						leftFlair: c ? u : void 0
					})), i && r.a.createElement(A, {
						className: H.a.pollMeta,
						pollId: i.id
					}), r.a.createElement(se, this.props), x && r.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: o,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), r.a.createElement("div", {
						className: H.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${z.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = r.a.memo((function(e) {
				const t = Object(p.Z)(),
					s = Object(p.v)(t),
					n = Object(q.a)(),
					a = Object(i.e)(a => $(a, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					o = Object(K.a)(),
					c = Object(m.b)();
				return Object(i.e)(t => Boolean(e.post.predictionTournament) && Object(S.i)(t)) && e.post.predictionTournament ? r.a.createElement(N, {
					tournament: e.post.predictionTournament
				}) : r.a.createElement(ne, J({
					pageLayer: t,
					isCommentPermalink: s
				}, n, a, e, {
					theme: o,
					sendEvent: c
				}))
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
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
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
				f = Object(l.t)({
					isProfileListingPage: l.F
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
					}), n.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), r.a.createElement(x, {
						text: n.fbt._("This post was submitted in a quarantined community", null, {
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
			var n = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = s.n(a);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", r.a);
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
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = s("./src/reddit/contexts/CoreStyleExperiments.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				p = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				b = s.n(p),
				h = s("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = h.a.wrapped(d.a, "Checkmark", b.a),
				g = ({
					isFilled: e,
					...t
				}) => a.a.createElement(f, t),
				C = h.a.wrapped(m.a, "Plus", b.a),
				y = ({
					isFilled: e,
					...t
				}) => a.a.createElement(C, t),
				v = h.a.div("ButtonSpacer", b.a);
			class E extends a.a.Component {
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
					}, this.renderUnsubscribeButton = ({
						[o.a.Icons]: e
					}) => {
						const {
							className: t,
							identifier: s,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: i,
							sendEvent: d,
							small: m = !1,
							size: p,
							userIsSubscriber: b,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: f,
							onSubscriptionsRequested: C,
							...y
						} = this.props, v = this.state.isHovered, E = Object(u.a)({
							type: s.type,
							key: v ? "unsubscribe" : "subscribed"
						});
						return a.a.createElement(c.q, x({
							className: t,
							priority: y.shouldReverseColor ? c.b.Primary : c.b.Secondary,
							Icon: m || !m && !v ? e ? e => a.a.createElement(l.a, x({
								name: "checkmark"
							}, e)) : g : void 0,
							text: !m && E,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: p || (m ? c.c.XS : c.c.S)
						}, y))
					}, this.renderSubscribeButton = ({
						[o.a.Icons]: e
					}) => {
						const {
							className: t,
							identifier: s,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: i,
							sendEvent: d,
							small: m = !1,
							size: p,
							userIsSubscriber: b,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: f,
							onSubscriptionsRequested: g,
							...C
						} = this.props, v = Object(u.a)({
							type: s.type,
							key: "subscribe"
						});
						return a.a.createElement(c.q, x({
							className: t,
							priority: C.shouldReverseColor ? c.b.Secondary : c.b.Primary,
							Icon: e ? e => a.a.createElement(l.a, x({
								name: "add"
							}, e)) : y,
							size: p || (m ? c.c.XS : c.c.S),
							text: !m && v,
							onClick: this.onClick
						}, C, {
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
					return t ? this.state.hasJustSubscribed || s ? a.a.createElement(o.b.Consumer, null, this.renderUnsubscribeButton) : e ? null : a.a.createElement(v, null) : a.a.createElement(o.b.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(i.a)(Object(r.c)(E))
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/helpers/parseUrl.ts"),
				r = s("./src/reddit/selectors/media.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, s) => ({
					gallery: i.gallery(e, t, s),
					post: i.post(e, t),
					...i.defaults(e)
				}),
				c = (e, t) => s => ({
					...o(s, e, t),
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.media(s, e)
				}),
				l = (e, t) => s => {
					const c = Object(a.a)(t),
						l = Object(r.b)(s, e) + 1;
					return {
						...o(s, e, l),
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.media(s, e),
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						}
					}
				},
				d = (e, t) => u(e, !0, t),
				m = (e, t) => u(e, !1, t),
				u = (e, t, s) => a => ({
					...o(a, e, s),
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts");

			function r(e, t = a.a) {
				return Object(n.e)(s => Object(a.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js");

			function a(e) {
				const t = Object(n.useRef)();
				return Object(n.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.m.less": function(e, t, s) {
			e.exports = {
				CrosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn",
				crosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn"
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				o = s.n(i);
			t.a = e => a.a.createElement("i", {
				className: `${Object(r.b)("crosspost",e.isFilled)} ${o.a.CrosspostIcon} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/colors.ts");
			const i = (e, t = "") => `${t}-du-left-${e}`;
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), n = i("b", t), o = i("c", t), c = i("d", t);
				return a.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("defs", null, a.a.createElement("circle", {
					id: n,
					cx: "18",
					cy: "18",
					r: "18"
				}), a.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, a.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), a.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), a.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), a.a.createElement("path", {
					id: o,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), a.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, a.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, a.a.createElement("use", {
					fill: r.b.black,
					filter: `url(#${s})`,
					xlinkHref: `#${n}`
				}), a.a.createElement("use", {
					fill: r.b.white,
					xlinkHref: `#${n}`
				})), a.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, a.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), a.a.createElement("mask", {
					id: c,
					fill: r.b.white
				}, a.a.createElement("use", {
					xlinkHref: `#${o}`
				})), a.a.createElement("use", {
					fill: r.b.black,
					xlinkHref: `#${o}`
				}), a.a.createElement("g", {
					fill: r.b.alienblue,
					mask: `url(#${c})`
				}, a.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/colors.ts");
			const i = (e, t = "") => `${t}-du-right-${e}`;
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), n = i("b", t), o = i("c", t), c = i("d", t);
				return a.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("defs", null, a.a.createElement("circle", {
					id: n,
					cx: "18",
					cy: "18",
					r: "18"
				}), a.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, a.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), a.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), a.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), a.a.createElement("path", {
					id: o,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), a.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, a.a.createElement("g", {
					fillRule: "nonzero",
					transform: "translate(7 4)"
				}, a.a.createElement("use", {
					fill: r.b.black,
					filter: `url(#${s})`,
					xlinkHref: `#${n}`
				}), a.a.createElement("use", {
					fill: r.b.white,
					xlinkHref: `#${n}`
				})), a.a.createElement("g", {
					transform: "rotate(90 9.326 23.5)"
				}, a.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), a.a.createElement("mask", {
					id: c,
					fill: r.b.white
				}, a.a.createElement("use", {
					xlinkHref: `#${o}`
				})), a.a.createElement("use", {
					fill: r.b.black,
					xlinkHref: `#${o}`
				}), a.a.createElement("g", {
					fill: r.b.alienblue,
					mask: `url(#${c})`
				}, a.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), a.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, s) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/layout/row/Inline/index.m.less"),
				r = s.n(a);
			t.a = n.a.div("inlineRow", r.a)
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
				a = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(o);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: r,
					gutter: o,
					...d
				} = e;
				return a.a.createElement("div", l({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, d), a.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: o
					}
				}, Array.isArray(s) && s[0]), a.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.bc5b3433ff6c26b932c9.js.map