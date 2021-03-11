// https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.fc81ba4b70f40f7b2363.js
// Retrieved at 3/10/2021, 7:20:05 PM by Reddit Dataminer v1.0.0
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
				r = s.n(n),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
			const c = (e, t, s) => (n = (() => {})) => r => {
				const a = u(r.target, r.currentTarget),
					o = p(r.target, r.currentTarget);
				a && s && t && (m(r.target, r.currentTarget, d.anchors) ? s(t(e, a, o)) : s(s => {
					const n = t(e, a, o)(s);
					let r;
					if (n && n.actionInfo) {
						const {
							pageType: e,
							...t
						} = n.actionInfo;
						r = t
					}
					return {
						...n,
						actionInfo: Object(i.previousPageActionInfo)(s, r)
					}
				})), m(r.target, r.currentTarget, d.anchorsAndButtons) && n(r)
			};

			function l(e) {
				return Object(a.c)(t => {
					const {
						sendEvent: s,
						eventFactory: a,
						clickTrackingId: i,
						...l
					} = t, d = Object(n.useCallback)(c(i, a, s), [i, a, s]);
					return r.a.createElement(e, o({}, l, {
						afterClickTracking: d
					}))
				})
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
				r = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(r);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: s,
					domainOverride: r
				} = e;
				let i = "";
				if (s) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = r || Object(n.D)(e)
				} else i = Object(n.D)(e);
				const o = a.a.parse(i),
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
				r = s("./src/lib/constants/index.ts");
			const a = [r.dc, r.hb, r.x, r.J, r.db, r.Hb],
				i = {
					[r.Hb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.db]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.J]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.x]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.hb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.dc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				o = {
					[r.Hb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.db]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.J]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.x]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.hb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.dc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.hb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.dc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, s = !1) {
				const c = Date.now(),
					l = new Date(e).getTime(),
					d = {
						[r.dc]: "",
						[r.hb]: "",
						[r.x]: "",
						[r.J]: "",
						[r.db]: "",
						[r.Hb]: ""
					};
				let m = l - c;
				if (m <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of a) {
					const e = Math.floor(m / n);
					e && (d[n] = (t ? o : i)[n](e).toString()), m -= e * n
				}
				const u = a.map(e => d[e]).filter(Boolean).slice(0, 2).join(" ");
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
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
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
						return r()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
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
						visibleItemsCount: r
					}) => {
						let a = 0;
						if (s === t && r) {
							const t = r * e + this.getSpacerCount(r) * n;
							a = (this.container ? this.container.offsetWidth : t) - t
						} else s > 0 && (a = 0);
						return a
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
					const r = t.length * s,
						a = this.getSpacerCount(t.length) * n;
					return e.offsetWidth >= r + a
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
				r = s.n(n),
				a = s("./node_modules/reselect/es/index.js"),
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
				O = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/components/MiniCardPost/index.m.less"),
				_ = s.n(P),
				k = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				j = s.n(k);
			const N = `${h.a.assetPath}/img/link-placeholder.png`;
			var S = e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: a,
						flairStyleTemplate: o,
						forceLoadMedia: c,
						post: l,
						scrollerItemRef: d,
						shouldPause: m
					} = e, {
						media: u
					} = a || l, p = u && r.a.createElement(f.a, {
						autoplayPref: t,
						availableWidth: s,
						className: _.a.media,
						"data-redditstyle": !0,
						forceAspectRatio: O.c,
						imageBoxClassName: _.a.mediaImageBox,
						imageBoxContentImageClassName: _.a.mediaImageBoxContentImage,
						isListing: !0,
						isMiniCard: !0,
						isMiniCardHQPreviews: !0,
						isNotCardView: !0,
						post: a || l,
						scrollerItemRef: d,
						shouldLoad: c,
						shouldPause: m,
						showCentered: !1,
						showFull: !1
					});
					let b, h = !0;
					const P = !!l.source && Object(x.a)(l.source.url) || !!l.thumbnail && Object(x.a)(l.thumbnail.url);
					return !u && P ? (h = !1, b = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: j.a.flexSpacer
					}), r.a.createElement("div", {
						className: j.a.mediaWrapper
					}, r.a.createElement(g.a, {
						className: j.a.thumbnailWrapper,
						thumbnailClassName: j.a.thumbnail,
						thumbnailContainerClassName: j.a.thumbnailContainer,
						thumbnailLinkIconClassName: j.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: l,
						showPlaceholderContentType: !o || !o.postPlaceholderImage,
						templatePlaceholderImage: o ? o.postPlaceholderImage : N,
						usePreview: !0
					})))) : u && p ? u.type !== O.o.RTJSON && u.type !== O.o.TEXT ? (h = !1, b = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: j.a.flexSpacer
					}), r.a.createElement("div", {
						className: j.a.mediaWrapper
					}, p))) : b = Object(E.a)(l) || Object(v.c)(l) && Object(y.a)(l) ? r.a.createElement("div", {
						className: j.a.textWrapper
					}, p) : r.a.createElement("div", {
						className: j.a.flexSpacer
					}) : b = r.a.createElement("div", {
						className: j.a.flexSpacer
					}), r.a.createElement("div", {
						className: Object(i.a)(j.a.body, n)
					}, r.a.createElement(C.c, {
						className: h ? j.a.postTitle : j.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: l,
						size: C.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: o && o.postTitleColor
					}), b)
				},
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/lib/prettyPrintNumber/index.ts"),
				L = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				T = s.n(L);
			var M = e => {
					const {
						className: t,
						post: s
					} = e;
					return r.a.createElement("div", {
						className: Object(i.a)(T.a.footer, t)
					}, r.a.createElement("span", {
						className: T.a.metaText
					}, I.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [I.fbt._plural(s.score, "number", Object(w.b)(s.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: T.a.metaText
					}, I.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [I.fbt._plural(s.numComments, "number", Object(w.b)(s.numComments))], {
						hk: "1QQoSA"
					})))
				},
				D = s("./src/reddit/components/SubredditIcon/index.tsx"),
				F = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				U = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				W = s("./src/reddit/constants/posts.ts"),
				A = s("./src/reddit/controls/Button/index.tsx"),
				B = s("./src/reddit/controls/InternalLink/index.tsx"),
				R = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				H = s.n(R);
			var V = e => {
					const {
						className: t,
						getSubscribeEventFactory: s,
						onSubredditOrProfileClick: n,
						shouldShowSubscribeButton: a,
						subredditOrProfile: o
					} = e, c = Object(b.g)(o) ? W.a.PROFILE : W.a.SUBREDDIT;
					return r.a.createElement("div", {
						className: Object(i.a)(H.a.header, t)
					}, r.a.createElement(B.a, {
						className: H.a.iconLink,
						"data-redditstyle": !0,
						to: o.url,
						onMouseDown: n
					}, r.a.createElement(D.b, {
						className: H.a.icon,
						subredditOrProfile: o
					})), r.a.createElement("div", {
						className: H.a.name
					}, r.a.createElement(B.a, {
						className: H.a.link,
						"data-redditstyle": !0,
						to: o.url,
						onMouseDown: n
					}, Object(U.b)(o.displayText || o.name, c))), a && r.a.createElement(F.a, {
						className: H.a.subscribe,
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
			const K = Object(a.a)(e => e.subredditOrProfile, e => e.subscribedProfiles, e => e.subscribedSubreddits, (e, t, s) => {
				if (!e) return !1;
				return (Object(b.g)(e) ? t : s).some(t => t.id === e.id)
			});
			class J extends r.a.Component {
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
						onClickPost: a,
						post: o,
						subredditOrProfile: m,
						subscribedProfiles: u,
						subscribedSubreddits: b
					} = t, h = !K({
						subredditOrProfile: m,
						subscribedProfiles: u,
						subscribedSubreddits: b
					});
					return r.a.createElement(d.a, {
						className: Object(i.a)(q.a.container, Q.a.largeAndMediumActiveStyles, Q.a.largeAndMediumPostStyles, Q.a.mUseRedditTheme, _.a.postContainer, Object(p.a)(this.props), e),
						eventFactory: s,
						onClick: a,
						post: o,
						style: {
							...Object(p.b)(this.props.flairStyleTemplate),
							...Object(p.d)(this.props)
						}
					}, r.a.createElement(l.a, {
						className: q.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: n
					}, m && r.a.createElement(V, {
						getSubscribeEventFactory: this.getSubscribeEventFactory,
						onSubredditOrProfileClick: this.trackSubredditOrProfileClicked,
						subredditOrProfile: m,
						shouldShowSubscribeButton: h
					}), r.a.createElement(S, t), r.a.createElement(M, {
						"data-redditstyle": !0,
						post: o
					})), r.a.createElement(c.d, null))
				}
			}
			const Z = Object(u.b)(Object(m.a)(Object(o.a)(J)));
			class Y extends r.a.Component {
				render() {
					return r.a.createElement(Z, this.props)
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
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-motion/lib/react-motion.js"),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/overlay/index.ts"),
				p = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/lib/isUrl/index.ts"),
				x = s("./src/lib/prettyPrintNumber/index.ts"),
				f = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				g = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = s("./src/lib/timeAgo/index.ts"),
				y = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = s("./src/reddit/layout/row/Inline/index.tsx"),
				O = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				P = s.n(O);
			var _ = e => {
					const t = y.a.PROFILE,
						s = Object(v.a)(e.author, t);
					return a.a.createElement("div", {
						className: Object(c.a)(P.a.container, e.className)
					}, a.a.createElement(E.a, {
						className: P.a.layout
					}, a.a.createElement("div", {
						className: P.a.textContainer
					}, a.a.createElement("span", {
						className: P.a.description
					}, b.fbt._("posted by", null, {
						hk: "wl0iP"
					})), a.a.createElement(g.a, {
						className: P.a.authorName,
						to: s
					}, Object(v.b)(e.author, t)), a.a.createElement("span", {
						className: P.a.timestamp
					}, Object(C.d)(e.created / 1e3)))))
				},
				k = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				j = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				N = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				S = s.n(N);
			var I = e => {
					const t = Object(v.a)(e.name, e.type);
					return a.a.createElement("div", {
						className: Object(c.a)(S.a.container, e.className)
					}, a.a.createElement(j.a, {
						className: S.a.layout
					}, a.a.createElement("div", {
						className: S.a.iconContainer
					}, e.iconUrl ? a.a.createElement("img", {
						className: S.a.icon,
						src: e.iconUrl
					}) : a.a.createElement(k.a, {
						className: S.a.planetIcon,
						"data-redditstyle": !0
					})), a.a.createElement("div", {
						className: S.a.textContainer
					}, a.a.createElement(g.a, {
						"data-click-id": "subreddit",
						className: S.a.name,
						to: t
					}, Object(v.b)(e.displayText || e.name, e.type)), a.a.createElement("span", {
						className: S.a.separator
					}, "•"), a.a.createElement("span", {
						className: S.a.timestamp
					}, Object(C.d)(e.created / 1e3)))))
				},
				w = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = s("./src/reddit/components/Media/index.tsx"),
				T = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				M = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				D = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				F = s("./src/reddit/components/PostContainer/index.tsx"),
				U = s("./src/reddit/components/PostTitle/index.tsx"),
				W = s("./src/reddit/connectors/miniCardPost.ts"),
				A = s("./src/reddit/contexts/Post/index.tsx"),
				B = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				R = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				H = s("./src/reddit/models/Media/index.ts"),
				V = s("./src/reddit/models/Subreddit/index.ts"),
				z = s("./src/reddit/models/Widgets/index.ts"),
				Q = s("./src/reddit/components/MiniCardPost/index.m.less"),
				G = s.n(Q),
				q = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				K = s.n(q),
				J = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				Z = s.n(J);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class X extends a.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: n,
						crosspostSubredditOrProfile: r,
						eventFactory: i,
						flairStyleTemplate: o,
						forceLoadMedia: l,
						hideNSFWPref: d,
						isMiniCard: m = !0,
						onClickPost: u,
						post: p,
						scrollerItemRef: f,
						shouldPause: g,
						showAuthorBlock: C = !1,
						showMetaLine: y = !0,
						showSubscribeBlock: v = !1,
						subredditOrProfile: E
					} = this.props, {
						media: O
					} = n || p, P = !O && !!p.source && Object(h.a)(p.source.url);
					let k = O && a.a.createElement(L.a, {
							autoplayPref: e,
							availableWidth: t,
							className: G.a.media,
							forceAspectRatio: H.c,
							imageBoxClassName: G.a.mediaImageBox,
							imageBoxContentImageClassName: G.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: m,
							isNotCardView: !0,
							post: n || p,
							scrollerItemRef: f,
							shouldPause: g,
							shouldLoad: l,
							showCentered: !1,
							showFull: !1
						}),
						j = !1;
					O && k && (O.type !== H.o.RTJSON && O.type !== H.o.TEXT ? (k = a.a.createElement("div", {
						className: Z.a.mediaWrapper
					}, k), j = !0) : O && O.content && Object(B.a)(p) && (k = a.a.createElement("div", {
						className: Z.a.textWrapper
					}, k)));
					const N = !j && !P;
					let S;
					return E && (S = Object(V.g)(E) ? Object(z.h)(E) : Object(z.i)(E)), a.a.createElement(F.a, {
						className: Object(c.a)(Z.a.container, K.a.largeAndMediumActiveStyles, K.a.largeAndMediumPostStyles, G.a.postContainer, Object(R.a)(this.props), s),
						post: p,
						onClick: u,
						eventFactory: i,
						style: {
							...Object(R.b)(this.props.flairStyleTemplate),
							...Object(R.d)(this.props),
							...this.props.style
						},
						"data-click-id": this.props["data-click-id"]
					}, a.a.createElement(D.a, {
						className: G.a.backgroundWrapper,
						flairStyleTemplate: o
					}, a.a.createElement("div", {
						className: Object(c.a)(Z.a.innerContainer, G.a.innerContainer)
					}, v && E && a.a.createElement(I, Y({
						created: p.created
					}, S)), C && E && a.a.createElement(_, Y({
						created: p.created,
						author: p.author
					}, S)), a.a.createElement(U.c, {
						className: N ? Z.a.postTitle : Z.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: U.b.Large,
						titleColor: o && o.postTitleColor
					}), y && E && a.a.createElement(T.a, {
						className: Z.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: d,
						post: p,
						subredditOrProfile: E
					}), (j || P) && a.a.createElement("div", {
						className: Z.a.flexSpacer
					}), P && a.a.createElement("div", {
						className: Z.a.mediaWrapper
					}, a.a.createElement(M.a, {
						className: Z.a.thumbnailWrapper,
						thumbnailClassName: Z.a.thumbnail,
						thumbnailContainerClassName: Z.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: o && o.postPlaceholderImage
					})), k, a.a.createElement("div", {
						className: Z.a.metaWrapper
					}, a.a.createElement("span", {
						className: Z.a.meta
					}, b.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [b.fbt._plural(p.score, "number", Object(x.b)(p.score))], {
						hk: "2ncFte"
					})), a.a.createElement("span", {
						className: Z.a.meta
					}, b.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [b.fbt._plural(p.numComments, "number", Object(x.b)(p.numComments))], {
						hk: "1QQoSA"
					}))))), a.a.createElement(w.d, null))
				}
			}
			const $ = Object(A.b)(Object(W.a)(Object(f.a)(X)));
			class ee extends a.a.Component {
				render() {
					return a.a.createElement($, this.props)
				}
			}
			var te = s("./node_modules/reselect/es/index.js"),
				se = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ne = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				re = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				ae = s("./src/reddit/models/Vote/index.ts"),
				ie = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				oe = s.n(ie);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const le = Object(m.t)(),
				de = Object(te.c)({
					isFakeSubreddit: m.x
				}),
				me = Object(o.b)(de),
				ue = e => {
					const t = {
						interactive: !1,
						voteState: ae.a.notVoted
					};
					return a.a.createElement("div", {
						className: Object(c.a)(oe.a.emptyVotes, e.className)
					}, a.a.createElement(ne.d, t), a.a.createElement("div", {
						className: Object(c.a)(oe.a.emptyScore, Object(re.b)({
							isLoading: e.isLoading
						}))
					}), a.a.createElement(ne.c, t))
				};
			var pe = le(me(Object(f.a)(({
					className: e,
					isLoading: t,
					showSubreddit: s,
					...n
				}) => a.a.createElement("div", {
					className: Object(c.a)(oe.a.container, K.a.largeAndMediumPostStyles, e)
				}, a.a.createElement("div", {
					className: Object(c.a)(oe.a.thumbnail, Object(re.b)({
						isLoading: t
					}))
				}), a.a.createElement("div", {
					className: oe.a.content
				}, a.a.createElement("div", {
					className: oe.a.titleContainer
				}, a.a.createElement("div", {
					className: Object(c.a)(oe.a.title, Object(re.b)({
						isLoading: t
					}))
				}), a.a.createElement("div", {
					className: Object(c.a)(oe.a.title, Object(re.b)({
						isLoading: t
					}))
				})), s && a.a.createElement(E.a, {
					className: oe.a.subreddit
				}, a.a.createElement(se.a, ce({
					className: Object(c.a)(Object(re.b)({
						isLoading: !1
					}))
				}, n)), a.a.createElement("div", {
					className: Object(c.a)(oe.a.subredditName, Object(re.b)({
						isLoading: t
					}))
				})), a.a.createElement(E.a, null, a.a.createElement(ue, ce({
					isLoading: t
				}, n)), a.a.createElement("div", {
					className: Object(c.a)(oe.a.comments, Object(re.b)({
						isLoading: t
					}))
				}), a.a.createElement("div", {
					className: Object(c.a)(oe.a.share, Object(re.b)({
						isLoading: t
					}))
				}), a.a.createElement("div", {
					className: Object(c.a)(oe.a.ellipsis, Object(re.b)({
						isLoading: t
					}))
				}))))))),
				be = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				he = s.n(be);
			var xe = e => a.a.createElement("div", {
					className: Object(c.a)(he.a.container, e.className)
				}, a.a.createElement("div", {
					className: he.a.largePosts
				}, a.a.createElement(pe, {
					className: he.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), a.a.createElement(pe, {
					className: he.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), a.a.createElement(pe, {
					className: he.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				fe = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				ge = s.n(fe);
			const Ce = 326,
				ye = 12,
				ve = {
					stiffness: 210,
					damping: 30
				},
				Ee = 100,
				Oe = "post_carousel_item",
				Pe = ({
					root: e,
					handleVisibilityChange: t,
					renderPost: s,
					...r
				}) => {
					const i = s ? s(r) : a.a.createElement(ee, r);
					return a.a.createElement(n.a, {
						root: e,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: t
					}, i)
				},
				_e = Object(o.b)(null, (e, {
					discoveryUnit: t,
					searchDiscoveryUnit: s
				}) => ({
					openOverlay: t => e(Object(u.a)(t.permalink)),
					trackPostClick: (t, n) => e((e, r) => s ? p.w(r(), s, t, n) : null),
					trackPostSubredditClick: n => e((e, r) => t ? p.y(r(), t, n) : s ? p.y(r(), s, n) : null)
				})),
				ke = Object(m.t)();
			class je extends l.c {
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
							listingKey: r,
							pageLayer: a,
							searchDiscoveryUnit: i,
							searchOptions: o
						} = this.props;
						let c;
						return (c = "subreddit" === t && o ? p.K(o, a, r, i) : i && o ? p.L(o, a, r, i) : p.v(s, n))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: n,
							singleSubredditMode: r
						} = this.props;
						return a.a.createElement(Pe, {
							"data-click-id": Oe,
							className: ge.a.largePost,
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
						className: ge.a.posts,
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
						springConfig: o
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return a.a.createElement(xe, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: d = Ce
					} = this.props, {
						scrollIndex: m,
						visibleItemsCount: u
					} = this.state, p = this.getMaxScrollIndex(u), b = this.getAdjustment({
						itemWidth: d,
						maxScrollIndex: p,
						scrollIndex: m,
						spacerWidth: ye,
						visibleItemsCount: u
					}), h = e ? Ee : this.getMarginLeft({
						adjustment: b,
						itemWidth: d,
						scrollIndex: m,
						spacerWidth: ye
					});
					return a.a.createElement("div", {
						className: Object(c.a)(ge.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, a.a.createElement(i.Motion, {
						defaultStyle: {
							marginLeft: e || r ? Ee : 0
						},
						style: {
							marginLeft: Object(i.spring)(h, o || ve)
						}
					}, this.renderPosts), 0 !== m && a.a.createElement(l.a, {
						className: Object(c.a)(ge.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: n
					}), !this.state.itemsFitInContainer && (null == p || m < p) && a.a.createElement(l.b, {
						className: Object(c.a)(ge.a.arrowRight, r && !e && ge.a.slideIn, s),
						onClick: this.onClickNext,
						seed: n
					}))
				}
			}
			t.a = ke(_e(Object(d.c)(je)))
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
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = [], v = () => {}, E = () => void 0, O = c.a.button("CloseButton", f.a), P = Object(i.a)(p.B, e => e.filter(e => 9 === e.length)), _ = Object(i.c)({
				discoveryUnit: e => Object(u.c)(e, {
					unitName: m.k
				}),
				postIds: P
			}), k = Object(a.b)(_);
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !0
					}, this.handleCloseClick = () => this.setState({
						isVisible: !1
					}), this.renderPost = e => {
						const {
							discoveryUnit: t
						} = this.props;
						return t ? r.a.createElement(b.a, g({}, e, {
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
					return this.state.isVisible && s.length ? r.a.createElement("div", {
						className: Object(o.a)(f.a.container, e)
					}, r.a.createElement("div", {
						className: f.a.header
					}, r.a.createElement("div", {
						className: f.a.title
					}, C._("Top posts of the week", null, {
						hk: "1qPdO2"
					})), r.a.createElement(O, {
						onClick: this.handleCloseClick
					}, r.a.createElement(d.a, {
						className: f.a.closeIcon
					}))), r.a.createElement("div", {
						className: f.a.body
					}, r.a.createElement(l.a, {
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
			t.default = k(j)
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
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
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
					hideNSFWPref: r,
					post: m,
					subredditOrProfile: u
				} = e;
				return a.a.createElement("div", {
					className: Object(i.a)(p.a.container, t)
				}, a.a.createElement(l.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: u.url
				}, a.a.createElement(c.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: u
				}), a.a.createElement("span", null, u.displayText)), ((e, t) => {
					if (t) return a.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(d.d)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, a.a.createElement(b, null))
				})(m.author, s), u && u.isQuarantined && a.a.createElement(o.a, null))
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
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				o = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(o);

			function l(e) {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className)
				}, r.a.createElement(i.a, {
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
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/timeAgo/index.ts"),
				a = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i);

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return o.a.createElement("span", {
					className: e.className
				}, t ? n.fbt._("Voting closed {timeAgo}", [n.fbt._param("timeAgo", Object(r.d)(e.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(a.a)(new Date(e.poll.endsAt)))
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
				i = s("./src/lib/ads/index.ts"),
				o = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				l = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/hooks/useTracking.ts");
			var m = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(d.a)(),
						a = Object(n.useCallback)(t => {
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
					return Object(l.a)(t, a, i), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/media.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/video.ts"),
				g = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/objectSelector/index.ts"),
				y = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.m.less"),
				E = s.n(v);
			const O = Object(p.a)(() => Object(a.c)({
					basePixelMetadata: Object(C.a)((e, {
						post: t
					}) => Object(x.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					currentIndex: (e, {
						post: t
					}) => Object(h.b)(e, t.id),
					buffering: (e, {
						post: t
					}) => Object(f.a)(e, {
						postId: t.id
					}),
					playing: (e, {
						post: t
					}) => Object(f.g)(e, {
						postId: t.id
					}),
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(f.c)(e, {
						postId: t.id
					}),
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(x.i)(e, {
						postId: t.id
					})
				})),
				P = e => {
					const t = Object(y.d)(e.target, e.currentTarget),
						s = Object(y.b)(e.target, e.currentTarget, y.a.buttons);
					return "subreddit" !== t && s
				};
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						currentIndex: a,
						imageGalleryCurrentItem: l,
						makePostContainerId: d,
						post: u,
						onClick: p,
						onPostContentClick: h,
						sendEvent: x,
						style: f,
						ref: C
					} = this.props, y = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: f,
						ref: C,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => p && p(s, u, t, l))(s), h && P(s) && h(s, u)), u.id && l) {
								const {
									source: e
								} = Object(i.t)(u, l);
								if (e && e.outboundUrl) {
									const t = a + 1;
									x(Object(c.c)(u.id, e.outboundUrl, t))
								}
							}
						},
						className: Object(g.a)(E.a.WrappedPost, n, `Post ${u.id}`, {
							promotedlink: u.isSponsored
						}),
						id: d ? d(u.id) : u.id,
						tabIndex: -1,
						"data-testid": u.id
					}, s), v = !!u.media && u.media.type === b.o.VIDEO;
					return u.isSponsored || v ? r.a.createElement(o.a, {
						post: u,
						trackDisplay: !0
					}, y) : u.media && Object(b.E)(u.media) ? r.a.createElement(m, {
						postId: u.id
					}, y) : y
				}
			}
			t.a = O(Object(y.c)(Object(u.c)(_)))
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
				return T
			})), s.d(t, "a", (function() {
				return V
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				g = s("./src/reddit/helpers/flair.ts"),
				C = s("./src/reddit/helpers/path/index.ts"),
				y = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_ = s("./src/lib/getShortenedLink.ts"),
				k = s("./src/reddit/components/FlairWrapper/index.tsx"),
				j = s("./node_modules/fbt/lib/FbtPublic.js"),
				N = s("./src/lib/prettyPrintNumber/index.ts"),
				S = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				I = s("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				w = s.n(I);
			const L = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var T, M = Object(i.b)(L)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return a.a.createElement("div", {
						className: Object(d.a)(e.className, w.a.proposalMetaData)
					}, a.a.createElement("span", null, j.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [j.fbt._param("count", Object(N.a)(n)), j.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && a.a.createElement(S.a, {
						className: w.a.proposalMetaDataTime,
						poll: t
					}))
				})),
				D = s("./src/reddit/components/SEOTitle/index.tsx"),
				F = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				A = s("./src/reddit/components/PostTitle/index.m.less"),
				B = s.n(A),
				R = s("./src/config.ts");

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(T || (T = {}));
			const V = u.a.wrapped(Object(m.a)(({
					size: e,
					titleColor: t,
					titleType: s,
					nowrap: n,
					children: r,
					className: i,
					redditStyle: o,
					theme: c,
					...l
				}) => {
					let m = "";
					switch (e) {
						case T.ExtraLarge:
							m = B.a.ExtraLarge;
							break;
						case T.Large:
							m = B.a.Large;
							break;
						case T.Medium:
							m = B.a.Medium;
							break;
						case T.Small:
							m = B.a.Small;
							break;
						case T.ExtraSmall:
							m = B.a.ExtraSmall
					}
					return a.a.createElement("div", H({
						className: Object(d.a)(i, m, {
							[B.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": t || Object(P.a)({
								redditStyle: o,
								theme: c,
								...l
							}).titleText
						}
					}, l), s ? a.a.createElement(D.b, {
						type: s
					}, r) : r)
				}), "Title", B.a),
				z = ({
					className: e,
					disableVisited: t,
					titleColor: s,
					...n
				}) => a.a.createElement(o.a, H({}, n, {
					className: Object(d.a)(e, B.a.styledLink, {
						[B.a.isVisitedEnabled]: !t
					})
				}), n.children),
				Q = ({
					disableVisited: e,
					nowrap: t,
					...s
				}) => a.a.createElement("div", H({}, s, {
					className: Object(d.a)(B.a.titleContainer, s.className, {
						[B.a.isNoWrap]: t,
						[B.a.isVisitedEnabled]: !e
					})
				})),
				G = Object(b.t)({
					isCommentPermalink: b.v,
					pageLayer: e => e
				}),
				q = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(b.p)(e, {
						pageLayer: t
					}),
					isMeta: (e, {
						post: t
					}) => Object(F.q)(e, {
						postId: t.id
					}),
					subredditName: (e, {
						post: t
					}) => Object(U.T)(e, {
						subredditId: t.belongsTo.id
					}).name,
					shouldOpenPostInNewTab: W.ab,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(F.i)(e, {
						postId: t.id
					})
				}),
				K = Object(i.b)(q),
				J = e => {
					const {
						post: t,
						subredditName: s
					} = e, {
						isSponsored: n
					} = t;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return a.a.createElement(Q, {
						nowrap: e.nowrap
					}, a.a.createElement(Z, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return a.a.createElement(h.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, a.a.createElement(Z, e)); {
						const r = t.media && Object(O.G)(t.media) ? Object(y.c)(t.id, s) : t.permalink,
							i = e.isCommentPermalink ? Object(C.b)(r) : Object(f.a)(r);
						return a.a.createElement(Q, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return s ? a.a.createElement(h.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, a.a.createElement(Z, t)) : a.a.createElement(Z, t)
						})(t, e) : a.a.createElement(z, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i
						}, a.a.createElement(Z, e)))
					}
				},
				Z = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let r = e.format ? e.format(n) : n.title;
					s && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const i = e.isCommentsPage ? D.a.PostComments : D.a.PostItem;
					return a.a.createElement(V, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && a.a.createElement(k.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), r)
				},
				Y = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: n
					} = s, r = !t && !e.isCrosspost && e.size !== T.Large && !s.isSponsored && !(s.media && Object(O.G)(s.media)) && (s.source || s.media && (s.media.type === O.o.GIFVIDEO || s.media.type === O.o.IMAGE || s.media.type === O.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (r) return a.a.createElement(x.a, {
							className: e.outboundLinkClassName,
							href: Object(O.D)(s),
							isSponsored: n,
							postId: s.id,
							source: s.source
						}, Object(_.a)(s), !s.isSponsored && a.a.createElement(v.a, {
							className: B.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== T.Large && e.size !== T.ExtraLarge) return a.a.createElement(x.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: n,
						postId: s.id,
						source: s.source
					}, Object(_.a)(s), !s.isSponsored && a.a.createElement(v.a, {
						className: B.a.outboundLinkIcon
					}));
					return null
				};
			class X extends a.a.Component {
				getDynamicStyleTags() {
					return a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${B.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(P.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(P.a)(this.props).titleText,Object(P.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: n,
						isMeta: r,
						isOverlay: i,
						poll: o,
						post: c,
						showNSFWSpoilerFlairsOnly: l
					} = this.props, m = s === E.b.Left, u = Object(k.b)(r, c), p = l ? u.filter(e => e.type === E.f.Nsfw || e.type === E.f.Spoiler) : m ? u.filter(e => Object(g.p)(e.type)) : [], b = l ? [] : m ? u.filter(e => !Object(g.p)(e.type)) : u, h = !i && !n, x = !t && p && p.length > 0 && h, f = !t && b && b.length > 0 && h;
					return a.a.createElement("div", {
						className: Object(d.a)(e, c.id)
					}, !l && x && a.a.createElement(k.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), a.a.createElement(J, H({}, this.props, {
						leftFlair: l ? p : void 0
					})), o && a.a.createElement(M, {
						className: B.a.pollMeta,
						pollId: o.id
					}), a.a.createElement(Y, this.props), f && a.a.createElement(k.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), a.a.createElement("div", {
						className: B.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${R.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = u.a.wrapped(G(K(Object(m.a)(Object(p.c)(X)))), "Component", B.a)
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
					}), n.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), a.a.createElement(x, {
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
				r = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				a = s.n(r);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", a.a);
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
				r = s.n(n),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
				g = h.a.wrapped(m.a, "Plus", b.a),
				C = h.a.div("ButtonSpacer", b.a);
			class y extends r.a.Component {
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
							onUnsubscribe: a,
							postId: i,
							sendEvent: d,
							small: m = !1,
							size: p,
							userIsSubscriber: b,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: g,
							onSubscriptionsRequested: C,
							...y
						} = this.props, v = this.state.isHovered, E = Object(u.a)({
							type: s.type,
							key: v ? "unsubscribe" : "subscribed"
						});
						return r.a.createElement(c.q, x({
							className: t,
							priority: y.shouldReverseColor ? c.b.Primary : c.b.Secondary,
							Icon: m || !m && !v ? e ? e => r.a.createElement(l.a, x({
								name: "checkmark"
							}, e)) : f : void 0,
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
							onUnsubscribe: a,
							postId: i,
							sendEvent: d,
							small: m = !1,
							size: p,
							userIsSubscriber: b,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: f,
							onSubscriptionsRequested: C,
							...y
						} = this.props, v = Object(u.a)({
							type: s.type,
							key: "subscribe"
						});
						return r.a.createElement(c.q, x({
							className: t,
							priority: y.shouldReverseColor ? c.b.Secondary : c.b.Primary,
							Icon: e ? e => r.a.createElement(l.a, x({
								name: "add"
							}, e)) : g,
							size: p || (m ? c.c.XS : c.c.S),
							text: !m && v,
							onClick: this.onClick
						}, y, {
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
					return t ? this.state.hasJustSubscribed || s ? r.a.createElement(o.b.Consumer, null, this.renderUnsubscribeButton) : e ? null : r.a.createElement(C, null) : r.a.createElement(o.b.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(i.a)(Object(a.c)(y))
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/helpers/parseUrl.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => ({
					gallery: a.gallery(e, t, s),
					post: a.post(e, t),
					...a.defaults(e)
				}),
				o = (e, t) => s => ({
					...i(s, e, t),
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: a.media(s, e)
				}),
				c = (e, t, s) => o => {
					const c = Object(r.a)(t);
					return {
						...i(o, e, s),
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...a.media(o, e),
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						}
					}
				},
				l = (e, t) => m(e, !0, t),
				d = (e, t) => m(e, !1, t),
				m = (e, t, s) => r => ({
					...i(r, e, s),
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js");
			t.a = function(e, t, s) {
				Object(n.useEffect)(() => {
					const n = e && e.current;
					if (!n || "undefined" == typeof IntersectionObserver) return;
					const r = new IntersectionObserver(t, s);
					return r.observe(n), () => {
						r.unobserve(n)
					}
				}, [e, t, s])
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js");

			function r(e) {
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
				r = s.n(n),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				o = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: `${Object(a.b)("crosspost",e.isFilled)} ${o.a.CrosspostIcon} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/constants/colors.ts");
			const i = (e, t = "") => `${t}-du-left-${e}`;
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), n = i("b", t), o = i("c", t), c = i("d", t);
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
					id: o,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), r.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, r.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, r.a.createElement("use", {
					fill: a.b.black,
					filter: `url(#${s})`,
					xlinkHref: `#${n}`
				}), r.a.createElement("use", {
					fill: a.b.white,
					xlinkHref: `#${n}`
				})), r.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, r.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), r.a.createElement("mask", {
					id: c,
					fill: a.b.white
				}, r.a.createElement("use", {
					xlinkHref: `#${o}`
				})), r.a.createElement("use", {
					fill: a.b.black,
					xlinkHref: `#${o}`
				}), r.a.createElement("g", {
					fill: a.b.alienblue,
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
			const i = (e, t = "") => `${t}-du-right-${e}`;
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), n = i("b", t), o = i("c", t), c = i("d", t);
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
					id: o,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), r.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, r.a.createElement("g", {
					fillRule: "nonzero",
					transform: "translate(7 4)"
				}, r.a.createElement("use", {
					fill: a.b.black,
					filter: `url(#${s})`,
					xlinkHref: `#${n}`
				}), r.a.createElement("use", {
					fill: a.b.white,
					xlinkHref: `#${n}`
				})), r.a.createElement("g", {
					transform: "rotate(90 9.326 23.5)"
				}, r.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), r.a.createElement("mask", {
					id: c,
					fill: a.b.white
				}, r.a.createElement("use", {
					xlinkHref: `#${o}`
				})), r.a.createElement("use", {
					fill: a.b.black,
					xlinkHref: `#${o}`
				}), r.a.createElement("g", {
					fill: a.b.alienblue,
					mask: `url(#${c})`
				}, r.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), r.a.createElement("path", {
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
			t.a = Object(a.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: a,
					gutter: o,
					...d
				} = e;
				return r.a.createElement("div", l({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, d), r.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: a,
						height: n,
						marginRight: o
					}
				}, Array.isArray(s) && s[0]), r.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.fc81ba4b70f40f7b2363.js.map