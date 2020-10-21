// https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.27297d18a4beb56780a3.js
// Retrieved at 10/21/2020, 6:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["TopWeekPostsDiscoveryUnit"], {
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/omit.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const u = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return r => {
					const o = h(r.target, r.currentTarget);
					s && t && (p(r.target, r.currentTarget, b.anchors) ? o && s(t(e, o)) : o && s(s => {
						const n = t(e, o)(s);
						let r;
						if (n && n.actionInfo) {
							const e = n.actionInfo,
								{
									pageType: t
								} = e;
							r = l(e, ["pageType"])
						}
						return Object.assign(Object.assign({}, n), {
							actionInfo: Object(c.previousPageActionInfo)(s, r)
						})
					})), p(r.target, r.currentTarget, b.anchorsAndButtons) && n(r)
				}
			});

			function m(e) {
				class t extends i.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: s,
							clickTrackingId: n
						} = this.props;
						return i.a.createElement(e, d({}, r()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: u(n, s, t)
						}))
					}
				}
				return Object(a.c)(t)
			}
			const b = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				p = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && p(e.parentElement, t, s)),
				h = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && h(e.parentElement, t))
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
				link: "_3ZwhnERcT6sV1cfCBsQmAP",
				subscribe: "_1NVoS5Yuc3mBX9AM0jW19e"
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				l = s("./src/reddit/components/PostContainer/index.tsx"),
				u = s("./src/reddit/connectors/miniCardPost.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = s("./src/reddit/models/Subreddit/index.ts"),
				p = s("./src/config.ts"),
				h = s("./src/lib/isUrl/index.ts"),
				x = s("./src/reddit/components/Media/index.tsx"),
				y = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				g = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				O = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				v = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				C = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/components/MiniCardPost/index.m.less"),
				S = s.n(j),
				P = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				E = s.n(P);
			const I = "".concat(p.a.assetPath, "/img/link-placeholder.png");
			var k = e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: o,
						flairStyleTemplate: a,
						forceLoadMedia: c,
						post: d,
						scrollerItemRef: l,
						shouldPause: u
					} = e, {
						media: m
					} = o || d, b = m && r.a.createElement(x.a, {
						autoplayPref: t,
						availableWidth: s,
						className: S.a.media,
						"data-redditstyle": !0,
						forceAspectRatio: C.c,
						imageBoxClassName: S.a.mediaImageBox,
						imageBoxContentImageClassName: S.a.mediaImageBoxContentImage,
						isListing: !0,
						isMiniCard: !0,
						isMiniCardHQPreviews: !0,
						isNotCardView: !0,
						post: o || d,
						scrollerItemRef: l,
						shouldLoad: c,
						shouldPause: u,
						showCentered: !1,
						showFull: !1
					});
					let p, j = !0;
					const P = !!d.source && Object(h.a)(d.source.url) || !!d.thumbnail && Object(h.a)(d.thumbnail.url);
					return !m && P ? (j = !1, p = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: E.a.flexSpacer
					}), r.a.createElement("div", {
						className: E.a.mediaWrapper
					}, r.a.createElement(y.a, {
						className: E.a.thumbnailWrapper,
						thumbnailClassName: E.a.thumbnail,
						thumbnailContainerClassName: E.a.thumbnailContainer,
						thumbnailLinkIconClassName: E.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: d,
						showPlaceholderContentType: !a || !a.postPlaceholderImage,
						templatePlaceholderImage: a ? a.postPlaceholderImage : I,
						usePreview: !0
					})))) : m && b ? m.type !== C.o.RTJSON && m.type !== C.o.TEXT ? (j = !1, p = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: E.a.flexSpacer
					}), r.a.createElement("div", {
						className: E.a.mediaWrapper
					}, b))) : p = Object(v.a)(d) || Object(O.c)(d) && Object(f.a)(d) ? r.a.createElement("div", {
						className: E.a.textWrapper
					}, b) : r.a.createElement("div", {
						className: E.a.flexSpacer
					}) : p = r.a.createElement("div", {
						className: E.a.flexSpacer
					}), r.a.createElement("div", {
						className: Object(i.a)(E.a.body, n)
					}, r.a.createElement(g.c, {
						className: j ? E.a.postTitle : E.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: d,
						size: g.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: a && a.postTitleColor
					}), p)
				},
				_ = s("./node_modules/fbt/lib/FbtPublic.js"),
				N = s("./src/lib/prettyPrintNumber/index.ts"),
				T = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				w = s.n(T);
			var L = e => {
					const {
						className: t,
						post: s
					} = e;
					return r.a.createElement("div", {
						className: Object(i.a)(w.a.footer, t)
					}, r.a.createElement("span", {
						className: w.a.metaText
					}, _.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [_.fbt._plural(s.score, "number", Object(N.b)(s.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: w.a.metaText
					}, _.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [_.fbt._plural(s.numComments, "number", Object(N.b)(s.numComments))], {
						hk: "1QQoSA"
					})))
				},
				B = s("./src/reddit/components/SubredditIcon/index.tsx"),
				U = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				F = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				R = s("./src/reddit/constants/posts.ts"),
				H = s("./src/reddit/controls/Button/index.tsx"),
				M = s("./src/reddit/controls/InternalLink/index.tsx"),
				A = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				D = s.n(A);
			var W = e => {
					const {
						className: t,
						getSubscribeEventFactory: s,
						onSubredditOrProfileClick: n,
						shouldShowSubscribeButton: o,
						subredditOrProfile: a
					} = e, c = Object(b.g)(a) ? R.a.PROFILE : R.a.SUBREDDIT;
					return r.a.createElement("div", {
						className: Object(i.a)(D.a.header, t)
					}, r.a.createElement(M.a, {
						className: D.a.iconLink,
						"data-redditstyle": !0,
						to: a.url,
						onMouseDown: n
					}, r.a.createElement(B.b, {
						className: D.a.icon,
						subredditOrProfile: a
					})), r.a.createElement("div", {
						className: D.a.name
					}, r.a.createElement(M.a, {
						className: D.a.link,
						"data-redditstyle": !0,
						to: a.url,
						onMouseDown: n
					}, Object(F.b)(a.displayText || a.name, c))), o && r.a.createElement(U.a, {
						className: D.a.subscribe,
						"data-redditstyle": !0,
						getEventFactory: s,
						identifier: {
							name: a.name,
							type: c
						},
						size: H.c.XXS,
						small: !0
					}))
				},
				K = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				V = s.n(K),
				z = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less"),
				G = s.n(z),
				Q = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const J = Object(o.a)(e => e.subredditOrProfile, e => e.subscribedProfiles, e => e.subscribedSubreddits, (e, t, s) => {
				if (!e) return !1;
				return (Object(b.g)(e) ? t : s).some(t => t.id === e.id)
			});
			class q extends r.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditOrProfileClicked = e => {
						e.stopPropagation(), this.props.onSubredditOrProfileClick(this.props.postId)
					}, this.getSubscribeEventFactory = e => {
						const t = this.props.getSubscribeEventFactory(this.props.postId);
						if (t) return t(e)
					}
				}
				render() {
					const e = this.props,
						{
							className: t
						} = e,
						s = Q(e, ["className"]),
						{
							eventFactory: n,
							flairStyleTemplate: o,
							onClickPost: a,
							post: u,
							subredditOrProfile: b,
							subscribedProfiles: p,
							subscribedSubreddits: h
						} = s,
						x = !J({
							subredditOrProfile: b,
							subscribedProfiles: p,
							subscribedSubreddits: h
						});
					return r.a.createElement(l.a, {
						className: Object(i.a)(G.a.container, V.a.largeAndMediumActiveStyles, V.a.largeAndMediumPostStyles, V.a.mUseRedditTheme, S.a.postContainer, Object(m.a)(this.props), t),
						eventFactory: n,
						onClick: a,
						post: u,
						style: Object.assign(Object.assign({}, Object(m.b)(this.props.flairStyleTemplate)), Object(m.d)(this.props))
					}, r.a.createElement(d.a, {
						className: G.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: o
					}, b && r.a.createElement(W, {
						getSubscribeEventFactory: this.getSubscribeEventFactory,
						onSubredditOrProfileClick: this.trackSubredditOrProfileClicked,
						subredditOrProfile: b,
						shouldShowSubscribeButton: x
					}), r.a.createElement(k, s), r.a.createElement(L, {
						"data-redditstyle": !0,
						post: u
					})), r.a.createElement(c.d, {
						postId: u.id
					}))
				}
			}
			const X = Object(u.a)(Object(a.a)(q));
			class Y extends r.a.Component {
				render() {
					return r.a.createElement(X, this.props)
				}
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
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				l = s("./src/reddit/icons/svgs/Close/index.tsx"),
				u = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				m = s("./src/reddit/selectors/discoveryUnit.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx"),
				h = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts"),
				x = s("./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.m.less"),
				y = s.n(x);

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
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = [], v = () => {}, C = () => void 0, j = c.a.button("CloseButton", y.a), S = Object(i.a)(b.H, e => e.filter(e => 9 === e.length)), P = Object(i.c)({
				discoveryUnit: e => Object(m.c)(e, {
					unitName: u.k
				}),
				postIds: S
			}), E = Object(o.b)(P);
			class I extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !0
					}, this.handleCloseClick = () => this.setState({
						isVisible: !1
					}), this.renderPost = e => {
						const {
							discoveryUnit: t
						} = this.props;
						return t ? r.a.createElement(p.a, g({}, e, {
							getSubscribeEventFactory: C,
							onSubredditOrProfileClick: v,
							subscribedProfiles: O,
							subscribedSubreddits: O
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
						className: Object(a.a)(y.a.container, e)
					}, r.a.createElement("div", {
						className: y.a.header
					}, r.a.createElement("div", {
						className: y.a.title
					}, f._("Top posts of the week", null, {
						hk: "1qPdO2"
					})), r.a.createElement(j, {
						onClick: this.handleCloseClick
					}, r.a.createElement(l.a, {
						className: y.a.closeIcon
					}))), r.a.createElement("div", {
						className: y.a.body
					}, r.a.createElement(d.a, {
						className: y.a.carousel,
						discoveryUnit: t,
						isLoading: !1,
						items: s,
						itemWidth: h.a,
						leftArrowClassName: y.a.arrow,
						onPostView: v,
						renderPost: this.renderPost,
						rightArrowClassName: y.a.arrow
					}))) : null
				}
			}
			t.default = E(I)
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						o = Object(n.useCallback)(t => {
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
					return Object(d.a)(t, o, i), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/connectors/PostViewable/index.ts"),
				p = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/media.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/video.ts"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/higherOrderComponents/withClickTracking.tsx"),
				O = s("./src/reddit/components/PostContainer/index.m.less"),
				v = s.n(O);
			const C = Object(o.c)({
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(x.b)(e, s.id)
					},
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					currentIndex: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.a)(e, s.id)
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(y.a)(e, {
							postId: s.id
						})
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(y.f)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(y.c)(e, {
							postId: s.id
						})
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(x.i)(e, {
							postId: s.id
						})
					}
				}),
				j = Object(b.a)(C),
				S = e => {
					const t = Object(f.d)(e.target, e.currentTarget),
						s = Object(f.b)(e.target, e.currentTarget, f.a.buttons);
					return "subreddit" !== t && s
				};
			class P extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						currentIndex: o,
						imageGalleryCurrentItem: d,
						makePostContainerId: l,
						post: m,
						onClick: b,
						onPostContentClick: h,
						sendEvent: x,
						style: y,
						ref: f
					} = this.props, O = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: y,
						ref: f,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => b && b(s, m, t, d))(s), h && S(s) && h(s, m)), m.id && d) {
								const {
									source: e
								} = Object(i.s)(m, d);
								if (e && e.outboundUrl) {
									const t = o + 1;
									x(Object(c.c)(m.id, e.outboundUrl, t))
								}
							}
						},
						className: Object(g.a)(v.a.WrappedPost, n, "Post ".concat(m.id), {
							promotedlink: m.isSponsored
						}),
						id: l ? l(m.id) : m.id,
						tabIndex: -1,
						"data-testid": m.id
					}, s), C = !!m.media && m.media.type === p.o.VIDEO;
					return m.isSponsored || C ? r.a.createElement(a.a, {
						post: m,
						trackDisplay: !0
					}, O) : m.media && Object(p.F)(m.media) ? r.a.createElement(u, {
						postId: m.id
					}, O) : O
				}
			}
			t.a = j(Object(f.c)(Object(m.c)(P)))
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
				o = s.n(r),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				m = s.n(u);
			const b = ["center", "top"],
				p = ["center", "bottom"],
				h = a.a.div("Container", m.a),
				x = Object(i.a)(c.b),
				y = Object(d.t)({
					isProfileListingPage: d.F
				});
			class g extends o.a.Component {
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
					return o.a.createElement(h, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, o.a.createElement(l.a, {
						className: m.a.quarantineIcon
					}), n.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), o.a.createElement(x, {
						text: n.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: b,
						tooltipPosition: p
					}))
				}
			}
			t.a = y(g)
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
				o = s.n(r);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", o.a);
			t.a = i
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				c = s("./src/reddit/contexts/Buttons2020.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				b = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = s.n(b),
				h = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const f = x.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = g(e, ["small", "shouldReverseColor"]);
					const i = Object(o.b)(),
						a = s ? d.l : d.i;
					return r.a.createElement(a, y({}, n, {
						className: Object(h.a)(n.className, {
							[p.a.isLarge]: !t
						}),
						"data-ignore-click": !!i
					}))
				}, "SubscribeInternalButton", p.a),
				O = x.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, i = g(e, ["small", "belongsToType", "shouldReverseColor"]);
					const a = Object(o.b)(),
						c = n ? d.i : d.l;
					return r.a.createElement(c, y({}, i, {
						className: Object(h.a)(i.className, {
							[p.a.isLarge]: !t
						}),
						"data-ignore-click": !!a
					}))
				}, "UnsubscribeButton", p.a),
				v = x.a.wrapped(l.a, "Checkmark", p.a),
				C = x.a.wrapped(u.a, "Plus", p.a),
				j = x.a.div("ButtonSpacer", p.a);
			class S extends r.a.Component {
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
					}, this.renderUnsubscribeButton = e => {
						const t = this.props,
							{
								className: s,
								identifier: n,
								onSubscribe: o,
								onUnsubscribe: i,
								postId: a,
								sendEvent: c,
								small: l = !1,
								size: u,
								userIsSubscriber: b,
								doNotHideOtherSubscribeButtons: x,
								getEventFactory: f,
								onSubscriptionsRequested: C
							} = t,
							j = g(t, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "size", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
							S = this.state.isHovered,
							P = Object(m.a)({
								type: n.type,
								key: S ? "unsubscribe" : "subscribed"
							});
						return e ? r.a.createElement(d.q, y({
							className: Object(h.a)(s, p.a.Button2020),
							priority: j.shouldReverseColor ? d.b.Primary : d.b.Secondary,
							Icon: l || !l && !S ? v : void 0,
							text: !l && P,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: u || (l ? d.c.XS : d.c.S)
						}, j)) : r.a.createElement(O, y({
							className: Object(h.a)(s, {
								[p.a.isLarge]: !l,
								[p.a.unsubscribeButtonHoverStyles]: !l
							}),
							onClick: this.onClick,
							small: l,
							belongsToType: n.type,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}, j), l && r.a.createElement(v, null), !l && !S && r.a.createElement(v, null), !l && P)
					}, this.renderSubscribeButton = e => {
						const t = this.props,
							{
								className: s,
								identifier: n,
								onSubscribe: o,
								onUnsubscribe: i,
								postId: a,
								sendEvent: c,
								small: l = !1,
								size: u,
								userIsSubscriber: b,
								doNotHideOtherSubscribeButtons: x,
								getEventFactory: O,
								onSubscriptionsRequested: v
							} = t,
							j = g(t, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "size", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
							S = Object(m.a)({
								type: n.type,
								key: "subscribe"
							});
						return e ? r.a.createElement(d.q, y({
							className: s,
							priority: j.shouldReverseColor ? d.b.Secondary : d.b.Primary,
							Icon: C,
							size: u || (l ? d.c.XS : d.c.S),
							text: !l && S,
							onClick: this.onClick
						}, j, {
							id: "subscribe-button-".concat(a),
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						})) : r.a.createElement(f, y({
							className: Object(h.a)(s, {
								[p.a.isLarge]: !l
							}),
							onClick: this.onClick,
							small: l
						}, j, {
							id: "subscribe-button-".concat(a),
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}), r.a.createElement(C, null), !l && S)
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
					return t ? this.state.hasJustSubscribed || s ? r.a.createElement(c.a.Consumer, null, this.renderUnsubscribeButton) : e ? null : r.a.createElement(j, null) : r.a.createElement(c.a.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(a.a)(Object(i.c)(S))
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/helpers/parseUrl.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => Object.assign({
					gallery: o.gallery(e, t, s),
					post: o.post(e, t)
				}, o.defaults(e)),
				a = (e, t) => s => Object.assign(Object.assign({}, i(s, e, t)), {
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: o.media(s, e)
				}),
				c = (e, t, s) => a => {
					const c = Object(r.a)(t);
					return Object.assign(Object.assign({}, i(a, e, s)), {
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: Object.assign(Object.assign({}, o.media(a, e)), {
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						})
					})
				},
				d = (e, t) => u(e, !0, t),
				l = (e, t) => u(e, !1, t),
				u = (e, t, s) => r => Object.assign(Object.assign({}, i(r, e, s)), {
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
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
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(o.b)("crosspost"), " ").concat(e.className)
			}), "CrosspostIcon", a.a);
			t.a = c
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: o,
					gutter: a
				} = e, u = l(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return r.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, u), r.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: o,
						height: n,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), r.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.27297d18a4beb56780a3.js.map