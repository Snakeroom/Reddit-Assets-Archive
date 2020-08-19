// https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.6de66072664af7c99bb2.js
// Retrieved at 8/19/2020, 7:40:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["TopWeekPostsDiscoveryUnit"], {
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
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
			const m = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return r => {
					const o = h(r.target, r.currentTarget);
					b(r.target, r.currentTarget, p.anchors) ? o && t && e(t(s, o)) : o && t && e(e => {
						const n = t(s, o)(e);
						let r;
						if (n && n.actionInfo) {
							const e = n.actionInfo,
								{
									pageType: t
								} = e;
							r = l(e, ["pageType"])
						}
						return Object.assign(Object.assign({}, n), {
							actionInfo: Object(c.previousPageActionInfo)(e, r)
						})
					}), b(r.target, r.currentTarget, p.anchorsAndButtons) && n(r)
				}
			});

			function u(e) {
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
							afterClickTracking: m(t, s, n)
						}))
					}
				}
				return Object(a.c)(t)
			}
			const p = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				b = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && b(e.parentElement, t, s)),
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
				m = s("./src/reddit/connectors/miniCardPost.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/config.ts"),
				h = s("./src/lib/isUrl/index.ts"),
				f = s("./src/reddit/components/Media/index.tsx"),
				x = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				g = s("./src/reddit/components/PostTitle/index.tsx"),
				y = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				O = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				v = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				C = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/components/MiniCardPost/index.m.less"),
				P = s.n(j),
				_ = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				E = s.n(_);
			const T = "".concat(b.a.assetPath, "/img/link-placeholder.png");
			var I = e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: o,
						flairStyleTemplate: a,
						forceLoadMedia: c,
						post: d,
						scrollerItemRef: l,
						shouldPause: m
					} = e, {
						media: u
					} = o || d, p = u && r.a.createElement(f.a, {
						autoplayPref: t,
						availableWidth: s,
						className: P.a.media,
						"data-redditstyle": !0,
						forceAspectRatio: C.c,
						imageBoxClassName: P.a.mediaImageBox,
						imageBoxContentImageClassName: P.a.mediaImageBoxContentImage,
						isListing: !0,
						isMiniCard: !0,
						isMiniCardHQPreviews: !0,
						isNotCardView: !0,
						post: o || d,
						scrollerItemRef: l,
						shouldLoad: c,
						shouldPause: m,
						showCentered: !1,
						showFull: !1
					});
					let b, j = !0;
					const _ = !!d.source && Object(h.a)(d.source.url) || !!d.thumbnail && Object(h.a)(d.thumbnail.url);
					return !u && _ ? (j = !1, b = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: E.a.flexSpacer
					}), r.a.createElement("div", {
						className: E.a.mediaWrapper
					}, r.a.createElement(x.a, {
						className: E.a.thumbnailWrapper,
						thumbnailClassName: E.a.thumbnail,
						thumbnailContainerClassName: E.a.thumbnailContainer,
						thumbnailLinkIconClassName: E.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: d,
						showPlaceholderContentType: !a || !a.postPlaceholderImage,
						templatePlaceholderImage: a ? a.postPlaceholderImage : T,
						usePreview: !0
					})))) : u && p ? u.type !== C.o.RTJSON && u.type !== C.o.TEXT ? (j = !1, b = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: E.a.flexSpacer
					}), r.a.createElement("div", {
						className: E.a.mediaWrapper
					}, p))) : b = Object(v.a)(d) || Object(O.c)(d) && Object(y.a)(d) ? r.a.createElement("div", {
						className: E.a.textWrapper
					}, p) : r.a.createElement("div", {
						className: E.a.flexSpacer
					}) : b = r.a.createElement("div", {
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
					}), b)
				},
				k = s("./node_modules/fbt/lib/FbtPublic.js"),
				N = s("./src/lib/prettyPrintNumber/index.ts"),
				w = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				S = s.n(w);
			var F = e => {
					const {
						className: t,
						post: s
					} = e;
					return r.a.createElement("div", {
						className: Object(i.a)(S.a.footer, t)
					}, r.a.createElement("span", {
						className: S.a.metaText
					}, k.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [k.fbt._plural(s.score, "number", Object(N.b)(s.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: S.a.metaText
					}, k.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [k.fbt._plural(s.numComments, "number", Object(N.b)(s.numComments))], {
						hk: "1QQoSA"
					})))
				},
				U = s("./src/reddit/components/SubredditIcon/index.tsx"),
				L = s("./src/reddit/components/SubscribeButton/index.tsx"),
				A = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				D = s("./src/reddit/constants/posts.ts"),
				R = s("./src/reddit/controls/InternalLink/index.tsx"),
				W = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				B = s.n(W);
			var H = e => {
					const {
						className: t,
						getSubscribeEventFactory: s,
						onSubredditOrProfileClick: n,
						shouldShowSubscribeButton: o,
						subredditOrProfile: a
					} = e, c = Object(p.f)(a) ? D.a.PROFILE : D.a.SUBREDDIT;
					return r.a.createElement("div", {
						className: Object(i.a)(B.a.header, t)
					}, r.a.createElement(R.a, {
						className: B.a.iconLink,
						"data-redditstyle": !0,
						to: a.url,
						onMouseDown: n
					}, r.a.createElement(U.b, {
						className: B.a.icon,
						subredditOrProfile: a
					})), r.a.createElement("div", {
						className: B.a.name
					}, r.a.createElement(R.a, {
						className: B.a.link,
						"data-redditstyle": !0,
						to: a.url,
						onMouseDown: n
					}, Object(A.b)(a.displayText || a.name, c))), o && r.a.createElement(L.a, {
						className: B.a.subscribe,
						"data-redditstyle": !0,
						getEventFactory: s,
						icon: !0,
						identifier: {
							name: a.name,
							type: c
						},
						small: !0
					}))
				},
				M = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				K = s.n(M),
				Q = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less"),
				V = s.n(Q),
				J = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const q = Object(o.a)(e => e.subredditOrProfile, e => e.subscribedProfiles, e => e.subscribedSubreddits, (e, t, s) => {
				if (!e) return !1;
				return (Object(p.f)(e) ? t : s).some(t => t.id === e.id)
			});
			class G extends r.a.Component {
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
						s = J(e, ["className"]),
						{
							eventFactory: n,
							flairStyleTemplate: o,
							onClickPost: a,
							post: m,
							subredditOrProfile: p,
							subscribedProfiles: b,
							subscribedSubreddits: h
						} = s,
						f = !q({
							subredditOrProfile: p,
							subscribedProfiles: b,
							subscribedSubreddits: h
						});
					return r.a.createElement(l.a, {
						className: Object(i.a)(V.a.container, K.a.largeAndMediumActiveStyles, K.a.largeAndMediumPostStyles, K.a.mUseRedditTheme, P.a.postContainer, Object(u.a)(this.props), t),
						eventFactory: n,
						onClick: a,
						post: m,
						style: Object.assign(Object.assign({}, Object(u.b)(this.props.flairStyleTemplate)), Object(u.d)(this.props))
					}, r.a.createElement(d.a, {
						className: V.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: o
					}, p && r.a.createElement(H, {
						getSubscribeEventFactory: this.getSubscribeEventFactory,
						onSubredditOrProfileClick: this.trackSubredditOrProfileClicked,
						subredditOrProfile: p,
						shouldShowSubscribeButton: f
					}), r.a.createElement(I, s), r.a.createElement(F, {
						"data-redditstyle": !0,
						post: m
					})), r.a.createElement(c.d, {
						postId: m.id
					}))
				}
			}
			const z = Object(m.a)(Object(a.a)(G));
			class Y extends r.a.Component {
				render() {
					return r.a.createElement(z, this.props)
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
				m = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = s("./src/reddit/selectors/discoveryUnit.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx"),
				h = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts"),
				f = s("./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.m.less"),
				x = s.n(f);

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
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = [], v = () => {}, C = () => void 0, j = c.a.button("CloseButton", x.a), P = Object(i.a)(p.I, e => e.filter(e => 9 === e.length)), _ = Object(i.c)({
				discoveryUnit: e => Object(u.c)(e, {
					unitName: m.k
				}),
				postIds: P
			}), E = Object(o.b)(_);
			class T extends r.a.Component {
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
						className: Object(a.a)(x.a.container, e)
					}, r.a.createElement("div", {
						className: x.a.header
					}, r.a.createElement("div", {
						className: x.a.title
					}, y._("Top posts of the week", null, {
						hk: "1qPdO2"
					})), r.a.createElement(j, {
						onClick: this.handleCloseClick
					}, r.a.createElement(l.a, {
						className: x.a.closeIcon
					}))), r.a.createElement("div", {
						className: x.a.body
					}, r.a.createElement(d.a, {
						className: x.a.carousel,
						discoveryUnit: t,
						isLoading: !1,
						items: s,
						itemWidth: h.a,
						leftArrowClassName: x.a.arrow,
						onPostView: v,
						renderPost: this.renderPost,
						rightArrowClassName: x.a.arrow
					}))) : null
				}
			}
			t.default = E(T)
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
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				a = s("./src/reddit/helpers/trackers/gallery.ts"),
				c = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/hooks/useTracking.ts");
			var l = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(d.a)(),
						o = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(a.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, o, i), r.a.createElement("div", {
						"aria-role": "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/connectors/PostViewable/index.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/video.ts"),
				h = s("./src/lib/classNames/index.ts"),
				f = s("./src/higherOrderComponents/withClickTracking.tsx"),
				x = s("./src/reddit/components/PostContainer/index.m.less"),
				g = s.n(x);
			const y = Object(o.c)({
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(p.b)(e, s.id)
					},
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(b.a)(e, {
							postId: s.id
						})
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(b.f)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(b.c)(e, {
							postId: s.id
						})
					},
					imageGalleryCurrentUrl: (e, t) => {
						let {
							post: s
						} = t;
						return Object(p.j)(e, {
							postId: s.id
						})
					}
				}),
				O = Object(m.a)(y),
				v = e => {
					const t = Object(f.d)(e.target, e.currentTarget),
						s = Object(f.b)(e.target, e.currentTarget, f.a.buttons);
					return "subreddit" !== t && s
				};
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
						imageGalleryCurrentUrl: o,
						makePostContainerId: a,
						post: c,
						onClick: d,
						onPostContentClick: m,
						style: p,
						ref: b
					} = this.props, f = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: p,
						ref: b,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							!this.cancelClick && s.button < 2 && (e(() => d && d(s, c, t, o))(s), m && v(s) && m(s, c))
						},
						className: Object(h.a)(g.a.WrappedPost, n, "Post ".concat(c.id), {
							promotedlink: c.isSponsored
						}),
						id: a ? a(c.id) : c.id,
						tabIndex: -1,
						"data-testid": c.id
					}, s), x = !!c.media && c.media.type === u.o.VIDEO;
					return c.isSponsored || x ? r.a.createElement(i.a, {
						post: c,
						trackDisplay: !0
					}, f) : c.media && Object(u.F)(c.media) ? r.a.createElement(l, {
						postId: c.id
					}, f) : f
				}
			}
			t.a = O(Object(f.c)(C))
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
				m = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				u = s.n(m);
			const p = ["center", "top"],
				b = ["center", "bottom"],
				h = a.a.div("Container", u.a),
				f = Object(i.a)(c.b),
				x = Object(d.t)({
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
						className: u.a.quarantineIcon
					}), n.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), o.a.createElement(f, {
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
			t.a = x(g)
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
				d = (e, t) => m(e, !0, t),
				l = (e, t) => m(e, !1, t),
				m = (e, t, s) => r => Object.assign(Object.assign({}, i(r, e, s)), {
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
				} = e, m = l(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return r.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, m), r.a.createElement("div", {
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
//# sourceMappingURL=TopWeekPostsDiscoveryUnit.6de66072664af7c99bb2.js.map