// https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.613d90d4216d8999d0cc.js
// Retrieved at 7/20/2023, 4:40:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["TopWeekPostsDiscoveryUnit"], {
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
				a = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				l = s("./src/reddit/icons/svgs/Close/index.tsx"),
				m = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				p = s("./src/reddit/selectors/discoveryUnit.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				h = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				x = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.tsx"),
				C = s("./src/reddit/connectors/miniCardPost.ts"),
				P = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				_ = s("./src/config.ts"),
				E = s("./src/lib/isUrl/index.ts"),
				O = s("./src/reddit/components/Media/index.tsx"),
				N = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				g = s("./src/reddit/components/PostTitle/index.tsx"),
				S = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				T = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				I = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				j = s("./src/reddit/models/Media/index.ts"),
				F = s("./src/reddit/components/MiniCardPost/index.m.less"),
				U = s.n(F),
				w = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				k = s.n(w);
			const D = `${_.a.assetPath}/img/link-placeholder.png`;
			var A = e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: r,
						crosspostRoot: n,
						flairStyleTemplate: i,
						forceLoadMedia: c,
						post: d,
						shouldPause: l,
						scrollerItemRef: m,
						theme: p
					} = e, {
						media: b
					} = n || d, u = b && a.a.createElement(O.a, {
						autoplayPref: t,
						availableWidth: s,
						className: U.a.media,
						"data-redditstyle": !0,
						forceAspectRatio: j.b,
						imageBoxClassName: U.a.mediaImageBox,
						imageBoxContentImageClassName: U.a.mediaImageBoxContentImage,
						isListing: !0,
						isMiniCard: !0,
						isMiniCardHQPreviews: !0,
						isNotCardView: !0,
						post: n || d,
						scrollerItemRef: m,
						shouldLoad: c,
						shouldPause: l,
						showCentered: !1,
						showFull: !1
					});
					let h, x = !0;
					const y = !!d.source && Object(E.a)(d.source.url) || !!d.thumbnail && Object(E.a)(d.thumbnail.url);
					return !b && y ? (x = !1, h = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: k.a.flexSpacer
					}), a.a.createElement("div", {
						className: k.a.mediaWrapper
					}, a.a.createElement(N.a, {
						className: k.a.thumbnailWrapper,
						thumbnailClassName: k.a.thumbnail,
						thumbnailContainerClassName: k.a.thumbnailContainer,
						thumbnailLinkIconClassName: k.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: d,
						showPlaceholderContentType: !i || !i.postPlaceholderImage,
						templatePlaceholderImage: i ? i.postPlaceholderImage : D,
						usePreview: !0
					})))) : b && u ? b.type !== j.o.RTJSON && b.type !== j.o.TEXT ? (x = !1, h = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: k.a.flexSpacer
					}), a.a.createElement("div", {
						className: k.a.mediaWrapper
					}, u))) : h = Object(I.a)(d) || Object(T.c)(d) && Object(S.a)(d, null == p ? void 0 : p.subredditContext) ? a.a.createElement("div", {
						className: k.a.textWrapper
					}, u) : a.a.createElement("div", {
						className: k.a.flexSpacer
					}) : h = a.a.createElement("div", {
						className: k.a.flexSpacer
					}), a.a.createElement("div", {
						className: Object(o.a)(k.a.body, r)
					}, a.a.createElement(g.c, {
						className: x ? k.a.postTitle : k.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: d,
						size: g.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: i && i.postTitleColor
					}), h)
				},
				B = s("./node_modules/fbt/lib/FbtPublic.js"),
				W = s("./src/lib/prettyPrintNumber/index.ts"),
				L = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				H = s.n(L);
			var R = e => {
					const {
						className: t,
						post: s
					} = e;
					return a.a.createElement("div", {
						className: Object(o.a)(H.a.footer, t)
					}, a.a.createElement("span", {
						className: H.a.metaText
					}, B.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [B.fbt._plural(s.score, "number", Object(W.b)(s.score))], {
						hk: "2ncFte"
					})), a.a.createElement("span", {
						className: H.a.metaText
					}, B.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [B.fbt._plural(s.numComments, "number", Object(W.b)(s.numComments))], {
						hk: "1QQoSA"
					})))
				},
				M = s("./src/reddit/components/SubredditIcon/index.tsx"),
				K = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				J = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				z = s("./src/reddit/constants/posts.ts"),
				G = s("./src/reddit/controls/Button/index.tsx"),
				Q = s("./src/reddit/controls/InternalLink/index.tsx"),
				q = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				V = s.n(q);
			var X = e => {
					const {
						className: t,
						getSubscribeEventFactory: s,
						onSubredditOrProfileClick: r,
						shouldShowSubscribeButton: n,
						subredditOrProfile: i
					} = e, c = Object(f.i)(i) ? z.a.PROFILE : z.a.SUBREDDIT;
					return a.a.createElement("div", {
						className: Object(o.a)(V.a.header, t)
					}, a.a.createElement(Q.default, {
						className: V.a.iconLink,
						"data-redditstyle": !0,
						to: i.url,
						onMouseDown: r
					}, a.a.createElement(M.b, {
						className: V.a.icon,
						subredditOrProfile: i
					})), a.a.createElement("div", {
						className: V.a.name
					}, a.a.createElement(Q.default, {
						className: V.a.link,
						"data-redditstyle": !0,
						to: i.url,
						onMouseDown: r
					}, Object(J.b)(i.displayText || i.name, c))), n && a.a.createElement(K.a, {
						className: V.a.subscribe,
						"data-redditstyle": !0,
						getEventFactory: s,
						identifier: {
							name: i.name,
							type: c
						},
						size: G.d.XXS,
						small: !0
					}))
				},
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Z = s.n(Y),
				$ = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less"),
				ee = s.n($);
			const te = Object(i.a)(e => e.subredditOrProfile, e => e.subscribedProfiles, e => e.subscribedSubreddits, (e, t, s) => {
				if (!e) return !1;
				return (Object(f.i)(e) ? t : s).some(t => t.id === e.id)
			});
			class se extends a.a.Component {
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
						onClickPost: n,
						post: i,
						subredditOrProfile: c,
						subscribedProfiles: d,
						subscribedSubreddits: l
					} = t, m = !te({
						subredditOrProfile: c,
						subscribedProfiles: d,
						subscribedSubreddits: l
					});
					return a.a.createElement(y.b, {
						className: Object(o.a)(ee.a.container, Z.a.largeAndMediumActiveStyles, Z.a.largeAndMediumPostStyles, Z.a.mUseRedditTheme, U.a.postContainer, Object(v.a)(this.props), e),
						eventFactory: s,
						onClick: n,
						post: i,
						style: {
							...Object(v.b)(this.props.flairStyleTemplate),
							...Object(v.d)(this.props)
						}
					}, a.a.createElement(x.a, {
						className: ee.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: r
					}, c && a.a.createElement(X, {
						getSubscribeEventFactory: this.getSubscribeEventFactory,
						onSubredditOrProfileClick: this.trackSubredditOrProfileClicked,
						subredditOrProfile: c,
						shouldShowSubscribeButton: m
					}), a.a.createElement(A, t), a.a.createElement(R, {
						"data-redditstyle": !0,
						post: i
					})), a.a.createElement(h.d, null))
				}
			}
			const re = Object(P.b)(Object(C.a)(Object(u.a)(se)));
			class ae extends a.a.Component {
				render() {
					return a.a.createElement(re, this.props)
				}
			}
			const ne = 236;
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
				fbt: de
			} = s("./node_modules/fbt/lib/FbtPublic.js"), le = [], me = () => {}, pe = () => void 0, be = c.a.button("CloseButton", oe.a), ue = Object(i.a)(b.y, e => e.filter(e => 9 === e.length)), he = Object(i.c)({
				discoveryUnit: e => Object(p.b)(e, {
					unitName: m.j
				}),
				postIds: ue
			}), xe = Object(n.b)(he);
			class ye extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !0
					}, this.handleCloseClick = () => this.setState({
						isVisible: !1
					}), this.renderPost = e => {
						const {
							discoveryUnit: t
						} = this.props;
						return t ? a.a.createElement(ae, ce({}, e, {
							getSubscribeEventFactory: pe,
							onSubredditOrProfileClick: me,
							subscribedProfiles: le,
							subscribedSubreddits: le
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
						className: Object(o.a)(oe.a.container, e)
					}, a.a.createElement("div", {
						className: oe.a.header
					}, a.a.createElement("div", {
						className: oe.a.title
					}, de._("Top posts of the week", null, {
						hk: "1qPdO2"
					})), a.a.createElement(be, {
						onClick: this.handleCloseClick
					}, a.a.createElement(l.a, {
						className: oe.a.closeIcon
					}))), a.a.createElement("div", {
						className: oe.a.body
					}, a.a.createElement(d.a, {
						className: oe.a.carousel,
						discoveryUnit: t,
						isLoading: !1,
						items: s,
						itemWidth: ne,
						leftArrowClassName: oe.a.arrow,
						onPostView: me,
						renderPost: this.renderPost,
						rightArrowClassName: oe.a.arrow
					}))) : null
				}
			}
			t.default = xe(ye)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/TopWeekPostsDiscoveryUnit.613d90d4216d8999d0cc.js.map