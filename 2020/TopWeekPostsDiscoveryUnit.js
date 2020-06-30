// https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.fb0884e10606480ad749.js
// Retrieved at 6/30/2020, 2:40:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["TopWeekPostsDiscoveryUnit"], {
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return u
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
					b(r.target, r.currentTarget, u.anchors) ? o && t && e(t(s, o)) : o && t && e(e => {
						const n = t(s, o)(e);
						let r;
						if (n && n.actionInfo) {
							const e = n.actionInfo,
								{
									pageType: t
								} = e;
							r = l(e, ["pageType"])
						}
						return Object.assign({}, n, {
							actionInfo: Object(c.previousPageActionInfo)(e, r)
						})
					}), b(r.target, r.currentTarget, u.anchorsAndButtons) && n(r)
				}
			});

			function p(e) {
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
			const u = {
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
				p = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/config.ts"),
				h = s("./src/lib/isUrl/index.ts"),
				x = s("./src/reddit/components/Media/index.tsx"),
				f = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				g = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				O = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				C = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				v = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/components/MiniCardPost/index.m.less"),
				j = s.n(P),
				_ = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				T = s.n(_);
			const E = "".concat(b.a.assetPath, "/img/link-placeholder.png");
			var N = e => {
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
						media: p
					} = o || d, u = p && r.a.createElement(x.a, {
						autoplayPref: t,
						availableWidth: s,
						className: j.a.media,
						"data-redditstyle": !0,
						forceAspectRatio: v.c,
						imageBoxClassName: j.a.mediaImageBox,
						imageBoxContentImageClassName: j.a.mediaImageBoxContentImage,
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
					let b, P = !0;
					const _ = !!d.source && Object(h.a)(d.source.url) || !!d.thumbnail && Object(h.a)(d.thumbnail.url);
					return !p && _ ? (P = !1, b = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: T.a.flexSpacer
					}), r.a.createElement("div", {
						className: T.a.mediaWrapper
					}, r.a.createElement(f.a, {
						className: T.a.thumbnailWrapper,
						thumbnailClassName: T.a.thumbnail,
						thumbnailContainerClassName: T.a.thumbnailContainer,
						thumbnailLinkIconClassName: T.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: d,
						showPlaceholderContentType: !a || !a.postPlaceholderImage,
						templatePlaceholderImage: a ? a.postPlaceholderImage : E,
						usePreview: !0
					})))) : p && u ? p.type !== v.n.RTJSON && p.type !== v.n.TEXT ? (P = !1, b = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: T.a.flexSpacer
					}), r.a.createElement("div", {
						className: T.a.mediaWrapper
					}, u))) : b = Object(C.a)(d) || Object(O.c)(d) && Object(g.a)(d) ? r.a.createElement("div", {
						className: T.a.textWrapper
					}, u) : r.a.createElement("div", {
						className: T.a.flexSpacer
					}) : b = r.a.createElement("div", {
						className: T.a.flexSpacer
					}), r.a.createElement("div", {
						className: Object(i.a)(T.a.body, n)
					}, r.a.createElement(y.c, {
						className: P ? T.a.postTitle : T.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: d,
						size: y.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: a && a.postTitleColor
					}), b)
				},
				w = s("./node_modules/fbt/lib/FbtPublic.js"),
				I = s("./src/lib/prettyPrintNumber/index.ts"),
				k = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				S = s.n(k);
			var F = e => {
					const {
						className: t,
						post: s
					} = e;
					return r.a.createElement("div", {
						className: Object(i.a)(S.a.footer, t)
					}, r.a.createElement("span", {
						className: S.a.metaText
					}, w.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [w.fbt._plural(s.score, "number", Object(I.b)(s.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: S.a.metaText
					}, w.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [w.fbt._plural(s.numComments, "number", Object(I.b)(s.numComments))], {
						hk: "1QQoSA"
					})))
				},
				U = s("./src/reddit/components/SubredditIcon/index.tsx"),
				L = s("./src/reddit/components/SubscribeButton/index.tsx"),
				A = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				D = s("./src/reddit/constants/posts.ts"),
				W = s("./src/reddit/controls/InternalLink/index.tsx"),
				R = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				B = s.n(R);
			var H = e => {
					const {
						className: t,
						getSubscribeEventFactory: s,
						onSubredditOrProfileClick: n,
						shouldShowSubscribeButton: o,
						subredditOrProfile: a
					} = e, c = Object(u.f)(a) ? D.a.PROFILE : D.a.SUBREDDIT;
					return r.a.createElement("div", {
						className: Object(i.a)(B.a.header, t)
					}, r.a.createElement(W.a, {
						className: B.a.iconLink,
						"data-redditstyle": !0,
						to: a.url,
						onMouseDown: n
					}, r.a.createElement(U.b, {
						className: B.a.icon,
						subredditOrProfile: a
					})), r.a.createElement("div", {
						className: B.a.name
					}, r.a.createElement(W.a, {
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
				J = s.n(Q),
				V = function(e, t) {
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
				return (Object(u.f)(e) ? t : s).some(t => t.id === e.id)
			});
			class z extends r.a.Component {
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
						s = V(e, ["className"]),
						{
							eventFactory: n,
							flairStyleTemplate: o,
							onClickPost: a,
							post: m,
							subredditOrProfile: u,
							subscribedProfiles: b,
							subscribedSubreddits: h
						} = s,
						x = !q({
							subredditOrProfile: u,
							subscribedProfiles: b,
							subscribedSubreddits: h
						});
					return r.a.createElement(l.a, {
						className: Object(i.a)(J.a.container, K.a.largeAndMediumActiveStyles, K.a.largeAndMediumPostStyles, K.a.mUseRedditTheme, j.a.postContainer, Object(p.a)(this.props), t),
						eventFactory: n,
						onClick: a,
						post: m,
						style: Object.assign({}, Object(p.b)(this.props.flairStyleTemplate), Object(p.d)(this.props))
					}, r.a.createElement(d.a, {
						className: J.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: o
					}, u && r.a.createElement(H, {
						getSubscribeEventFactory: this.getSubscribeEventFactory,
						onSubredditOrProfileClick: this.trackSubredditOrProfileClicked,
						subredditOrProfile: u,
						shouldShowSubscribeButton: x
					}), r.a.createElement(N, s), r.a.createElement(F, {
						"data-redditstyle": !0,
						post: m
					})), r.a.createElement(c.d, {
						postId: m.id
					}))
				}
			}
			const G = Object(m.a)(Object(a.a)(z));
			class Y extends r.a.Component {
				render() {
					return r.a.createElement(G, this.props)
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
				p = s("./src/reddit/selectors/discoveryUnit.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx"),
				h = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts"),
				x = s("./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.m.less"),
				f = s.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = [], C = () => {}, v = () => void 0, P = c.a.button("CloseButton", f.a), j = Object(i.a)(u.H, e => e.filter(e => 9 === e.length)), _ = Object(i.c)({
				discoveryUnit: e => Object(p.c)(e, {
					unitName: m.k
				}),
				postIds: j
			}), T = Object(o.b)(_);
			class E extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !0
					}, this.handleCloseClick = () => this.setState({
						isVisible: !1
					}), this.renderPost = e => {
						const {
							discoveryUnit: t
						} = this.props;
						return t ? r.a.createElement(b.a, y({}, e, {
							getSubscribeEventFactory: v,
							onSubredditOrProfileClick: C,
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
						className: Object(a.a)(f.a.container, e)
					}, r.a.createElement("div", {
						className: f.a.header
					}, r.a.createElement("div", {
						className: f.a.title
					}, g._("Top posts of the week", null, {
						hk: "1qPdO2"
					})), r.a.createElement(P, {
						onClick: this.handleCloseClick
					}, r.a.createElement(l.a, {
						className: f.a.closeIcon
					}))), r.a.createElement("div", {
						className: f.a.body
					}, r.a.createElement(d.a, {
						className: f.a.carousel,
						discoveryUnit: t,
						isLoading: !1,
						items: s,
						itemWidth: h.a,
						leftArrowClassName: f.a.arrow,
						onPostView: C,
						renderPost: this.renderPost,
						rightArrowClassName: f.a.arrow
					}))) : null
				}
			}
			t.default = T(E)
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
				a = s("./src/reddit/connectors/PostViewable/index.ts"),
				c = s("./src/reddit/models/Media/index.ts"),
				d = s("./src/reddit/selectors/video.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/higherOrderComponents/withClickTracking.tsx"),
				p = s("./src/reddit/components/PostContainer/index.m.less"),
				u = s.n(p);
			const b = Object(o.c)({
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
						return Object(d.a)(e, {
							postId: s.id
						})
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(d.f)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(d.c)(e, {
							postId: s.id
						})
					}
				}),
				h = Object(a.a)(b),
				x = e => {
					const t = Object(m.d)(e.target, e.currentTarget),
						s = Object(m.b)(e.target, e.currentTarget, m.a.buttons);
					return "subreddit" !== t && s
				};
			class f extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						makePostContainerId: n,
						post: o,
						onClick: a,
						onPostContentClick: d,
						style: m,
						ref: p
					} = this.props, b = r.a.createElement("div", {
						style: m,
						ref: p,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && (e(() => a && a(t, o))(t), d && x(t) && d(t, o))
						},
						className: Object(l.a)(u.a.WrappedPost, s, "Post ".concat(o.id), {
							promotedlink: o.isSponsored
						}),
						id: n ? n(o.id) : o.id,
						tabIndex: -1
					}, t), h = !!o.media && o.media.type === c.n.VIDEO;
					return o.isSponsored || h ? r.a.createElement(i.a, {
						post: o,
						trackDisplay: !0
					}, b) : b
				}
			}
			t.a = h(Object(m.c)(f))
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
				p = s.n(m);
			const u = ["center", "top"],
				b = ["center", "bottom"],
				h = a.a.div("Container", p.a),
				x = Object(i.a)(c.b),
				f = Object(d.t)({
					isProfileListingPage: d.F
				});
			class y extends o.a.Component {
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
						className: p.a.quarantineIcon
					}), n.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), o.a.createElement(x, {
						text: n.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: u,
						tooltipPosition: b
					}))
				}
			}
			t.a = f(y)
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
//# sourceMappingURL=TopWeekPostsDiscoveryUnit.fb0884e10606480ad749.js.map