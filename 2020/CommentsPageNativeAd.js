// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.a049907be1119ef0d5b4.js
// Retrieved at 10/7/2020, 5:50:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPageNativeAd"], {
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return z
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return K
			}));
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/ads/index.ts"),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				b = s("./src/reddit/components/Flatlist/index.tsx"),
				x = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/index.tsx"),
				O = s("./src/reddit/components/ModModeReports/helpers.ts"),
				g = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.tsx"),
				f = s("./src/reddit/components/PostMedia/index.tsx"),
				P = s("./src/reddit/components/PostMeta/index.tsx"),
				j = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				C = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				E = s("./src/reddit/components/PostTopMeta/index.tsx"),
				S = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				k = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				w = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				I = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				L = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				T = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				M = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				A = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				R = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				W = s.n(R),
				F = s("./src/reddit/components/ClassicPost/index.m.less"),
				B = s.n(F);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const U = 16;
			class D extends o.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: r,
						isMeta: i,
						inSubredditOrProfile: f,
						eventFactory: w,
						first: I,
						flairStyleTemplate: R,
						formatTitle: F,
						hostPostId: D,
						isCheckboxSelected: G,
						isCurrentUserProfilePost: H,
						isFrontpage: K,
						isGalleryTileLayoutDefault: Z,
						isLoggedIn: J,
						isOverlay: Q,
						imageGalleryCurrentItem: q,
						moderatorPermissions: Y,
						modModeEnabled: X,
						onClickPost: $,
						onIgnoreReports: ee,
						onOpenReportsDropdown: te,
						poll: se,
						post: re,
						redditStyle: oe,
						scrollerItemRef: ae,
						showBulkActionCheckbox: ne,
						showEditFlair: ie,
						showMedia: ce,
						subredditOrProfile: de,
						toggleCheckbox: le,
						userIsOp: me,
						shouldShowGalleryTileOption: pe
					} = this.props, ue = oe ? void 0 : R, be = this.props.crosspost || void 0, xe = Object(M.a)(Y), he = Object(L.a)(Y), Oe = Object(T.a)(Y), ge = X && M.a, ye = !!re.media && re.media.type === N.o.RTJSON, fe = me && ye, Pe = f && !ce, je = !!re.media && Object(N.H)(re.media), Ce = {
						flairStyleTemplate: ue,
						post: re,
						inSubredditOrProfile: f,
						isCurrentUserProfilePost: H,
						isOverlay: Q,
						shouldShowSubscribeButton: !(K && J),
						subredditOrProfile: de
					}, ve = Object(a.s)(re, q), {
						source: Ee
					} = ve, Se = o.a.createElement(y.a, {
						className: Object(n.a)(W.a.classicPostStyles, B.a.postContainer, Object(A.a)(this.props), I ? B.a.mFirst : void 0, e),
						isOverlay: Q,
						style: Object.assign(Object.assign({}, Object(A.d)(this.props)), Object(A.b)(this.props.flairStyleTemplate)),
						post: re,
						onClick: $,
						eventFactory: w
					}, o.a.createElement(C.a, {
						model: re,
						handleVote: s,
						showBulkActionCheckbox: ne,
						isCheckboxSelected: G,
						toggleCheckbox: le,
						flairStyleTemplate: ue,
						redditStyle: oe,
						subreddit: de
					}), o.a.createElement(g.a, {
						"data-click-id": "background",
						flairStyleTemplate: ue
					}, o.a.createElement(p.a, {
						className: B.a.eventMeta,
						post: re
					}), o.a.createElement("div", {
						className: B.a.mainBody
					}, o.a.createElement("div", {
						className: Pe ? B.a.expandoContainer : B.a.thumbnailContainer
					}, !Pe && o.a.createElement(_.a, {
						className: B.a.classicThumbnail,
						crosspost: be && re,
						isMeta: i,
						post: be || re,
						redditStyle: oe,
						templatePlaceholderImage: ue && ue.postPlaceholderImage,
						removeLink: je
					}), o.a.createElement(u.a, {
						crosspost: be,
						className: B.a.rightExpando,
						isExpanded: !!r,
						post: re,
						useMediaIcons: !1
					})), o.a.createElement("div", {
						className: B.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(U, "px")
						}
					}, o.a.createElement(v.c, {
						className: se ? B.a.titleWithPoll : void 0,
						format: F,
						poll: se,
						post: re,
						redditStyle: oe,
						size: v.b.Medium,
						titleColor: ue && ue.postTitleColor,
						isOverlay: Q
					}, re.source && !be && o.a.createElement(k.a, {
						href: re.source.url,
						isSponsored: re.isSponsored,
						postId: re.id,
						source: re.source
					}, Object(c.a)(re))), o.a.createElement(P.a, V({
						key: "PostMeta"
					}, Ce)), X && xe && Object(O.c)(re) && o.a.createElement(h.a, {
						onIgnoreReports: ee,
						reportable: re
					}), o.a.createElement("div", {
						className: B.a.spacer
					}), re.isSponsored && Ee && Ee.url && o.a.createElement(d.a, {
						className: B.a.adLinkWrapper
					}, o.a.createElement(l.a, {
						post: re,
						adLinkContent: ve
					})), o.a.createElement("div", {
						className: B.a.flatlistContainer
					}, o.a.createElement(u.a, {
						className: B.a.leftExpando,
						crosspost: be,
						isExpanded: !!r,
						post: re,
						useMediaIcons: !1
					}), o.a.createElement(m.a, {
						className: B.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ue,
						model: re,
						onVoteClick: s
					}), o.a.createElement(b.a, {
						className: B.a.flatlistSeparator
					}), o.a.createElement(b.c, {
						className: B.a.flatlist,
						currentUser: t,
						hasModFlairPerms: he,
						hasModPostPerms: xe,
						hasModFullPerms: Oe,
						hostPostId: D,
						isOverlay: !!Q,
						modModeEnabled: X,
						onIgnoreReports: ee,
						onOpenReportsDropdown: te,
						post: re,
						showEditPost: fe,
						showEditFlair: ie,
						tooltipType: Q ? E.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(j.h)({
							editPost: !ge,
							save: !ge,
							hide: !ge,
							report: !ge
						})
					})), o.a.createElement(x.d, {
						postId: re.id
					}))), z(re, ae, r, pe, Z)));
					return o.a.createElement(S.b, null, Se)
				}
			}
			const z = (e, t, s, r, a) => s ? e.crosspostRootId ? o.a.createElement("div", {
					className: B.a.crosspostMediaWrapper
				}, G(e, t, r, a)) : G(e, t, r, a) : null,
				G = (e, t, s, r) => o.a.createElement(f.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: r,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				}),
				H = Object(i.a)(D),
				K = Object(I.a)(H);
			t.default = Object(w.a)(H)
		},
		"./src/reddit/components/CommentsPageNativeAd/index.m.less": function(e, t, s) {
			e.exports = {
				adLinkWrapper: "_3RRfgmIQPBtEH8V5AVgQh7",
				link: "_3EPwKuJetfuvC29fFpFKby",
				styledOutboundLink: "IuKJidJhqvzTNTb-iZ-uW",
				authorLink: "_3uanAEshks-qbTwm3q3dOw",
				outboundLink: "_3wroV_LEizMmQWOE614zRe",
				content: "_2fEtNtqlNiA6AiPDXiwSWg",
				postTitle: "G0FWKYmNg1Zr_NuehrREp",
				contentRow: "irTUaiUW9ePlgXD68uZDe",
				contentColumn: "_1rMolF_ZKpCWxLpArNysrm",
				videoContainer: "_2fwc5mLGMVaPEcLorfiSjv",
				close: "_2XPtk5CeYp6ucBGWMZg5_x",
				crosspostMediaWrapper: "_3ggjSQ-K48dD1h9WYG5-bY",
				mainBody: "Pbz3gpOA6rvqdYoX_pOjn",
				videoPlayer: "_1WCp-oA-he9YzqV2Fsu8rh",
				playIcon: "_1iZ39eWs5XCo-HsA1BUwpd",
				userIcon: "_6v7vZrxStMQdG5GThBmY_",
				playContainer: "d7RW-CiZ2-JtDT-6ZIKVR",
				spacer: "_1NRVwHWQpJSVwsEykS_HDi",
				thumbnail: "_2tXPUtYfVX6jESGGUHCuzE",
				thumbnailContainer: "_3XfA4oUeWhZeR-dxdbKRnz",
				postContainer: "g5K9AFdYdugpqNkNCEY-G",
				mFirst: "_1AIChkOh4-GkAdxrUTcwFx",
				metaSeparator: "_1yQZ1qz54yrz_KRlHestnz",
				commentsSpacer: "_29lagmmeH1Fb03mLJEq0Dt"
			}
		},
		"./src/reddit/components/CommentsPageNativeAd/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SearchResultsCommentsPageNativeAd", (function() {
				return Z
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/config.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/getShortenedLink.ts"),
				p = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = s("./src/reddit/actions/profile/index.ts"),
				b = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				x = s("./src/reddit/components/BlankPost/index.tsx"),
				h = s("./src/reddit/components/CallToActionButton/index.tsx"),
				O = s("./src/reddit/components/ClassicPost/index.tsx"),
				g = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				f = s("./src/reddit/components/PostContainer/index.tsx"),
				P = s("./src/reddit/components/PostTitle/index.tsx"),
				j = s("./src/reddit/constants/componentTestIds.ts"),
				C = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/components/AuthorLink/index.tsx"),
				S = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				k = s("./src/reddit/components/UserIcon/index.tsx"),
				N = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				w = s.n(_);
			var I = e => a.a.createElement(o.Fragment, null, a.a.createElement(k.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: w.a.userIcon
				}), a.a.createElement(E.a, {
					className: w.a.authorLink,
					"data-click-id": "user",
					author: e.author
				}, "u/".concat(e.author)), a.a.createElement(N.a, {
					isSmall: !0,
					className: w.a.metaSeparator
				}), a.a.createElement(S.a, null)),
				L = s("./src/lib/classNames/index.ts"),
				T = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				M = s("./src/reddit/components/PlayButton/index.tsx"),
				A = s("./src/reddit/components/Thumbnail/index.tsx"),
				R = s("./src/reddit/icons/svgs/Close/index.tsx");

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const F = e => {
				let {
					classNameInnerThumbnail: t,
					closeVideo: s,
					crosspost: r,
					forceShowNSFW: o,
					isMeta: n,
					post: i,
					redditStyle: c,
					templatePlaceholderImage: d,
					thumbnailContainerClassName: l,
					url: m,
					usePreview: p,
					mediaExpanded: u
				} = e;
				return i && i.media ? u && Object(v.L)(i.media) ? a.a.createElement("div", null, a.a.createElement(R.a, {
					className: w.a.close,
					onClick: s
				}), a.a.createElement(T.b, {
					className: w.a.videoPlayer,
					autoPlay: !0,
					isExpando: !1,
					shouldLoad: !0,
					shouldPause: !1,
					shouldStop: !1,
					hlsSource: i.media.hlsUrl,
					mpegDashSource: i.media.dashUrl,
					isGif: i.media.isGif,
					scrubberThumbSource: i.media.scrubberThumbSource,
					postId: i.id,
					callToActionSource: i.source || void 0,
					callToActionText: i.callToAction,
					isListing: !1,
					playFromStart: !0
				})) : a.a.createElement(A.a, {
					className: Object(L.a)(w.a.thumbnail, t),
					containerClassName: l,
					crosspost: r,
					forceShowNSFW: o,
					isMeta: n,
					post: i,
					redditStyle: c,
					removeLink: Object(v.L)(i.media),
					url: Object(v.L)(i.media) ? void 0 : m,
					usePreview: p
				}) : a.a.createElement(A.a, {
					className: Object(L.a)(w.a.thumbnail, t),
					containerClassName: l,
					crosspost: r,
					forceShowNSFW: o,
					isMeta: n,
					post: i,
					redditStyle: c,
					usePreview: p
				})
			};
			var B = e => {
					const [t, s] = Object(o.useState)(!1), {
						isVideo: r,
						className: n
					} = e, i = r && !t;
					return a.a.createElement("div", {
						className: t ? Object(L.a)(w.a.videoContainer, n) : Object(L.a)(w.a.thumbnailContainer, n),
						onClick: i ? () => s(!0) : void 0
					}, a.a.createElement(F, W({}, e, {
						mediaExpanded: t,
						closeVideo: () => s(!1)
					})), i && a.a.createElement(M.a, {
						className: w.a.playContainer,
						playIconClassName: w.a.playIcon,
						onClick: () => s(!0)
					}))
				},
				V = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				U = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				D = s("./src/reddit/helpers/path/index.ts"),
				z = s("./src/reddit/selectors/profile.ts");
			const G = Object(n.b)(() => Object(c.c)({
				iconUrl: (e, t) => {
					const s = Object(z.j)(e, {
						profileName: t.post.author
					});
					if (s && s.icon) return s.icon.url
				}
			}), (e, t) => ({
				fetchProfile: () => {
					e(Object(u.d)(t.post.author))
				}
			}));
			class H extends a.a.Component {
				componentDidMount() {
					this.props.iconUrl || this.props.fetchProfile()
				}
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				checkCommentsActive() {
					const {
						post: e
					} = this.props;
					return e.source && e.isLocked ? a.a.createElement(C.b, {
						className: w.a.styledOutboundLink,
						href: e.source.url,
						isSponsored: e.isSponsored,
						source: e.source
					}, Object(m.a)(e)) : a.a.createElement(i.a, {
						className: w.a.styledOutboundLink,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": j.a,
						to: this.props.isOverlay ? Object(p.a)(e.permalink, !0) : Object(D.b)(e.permalink),
						onClick: this.props.onClick
					}, r.fbt._("Join the conversation", null, {
						hk: "45BFWV"
					}))
				}
				renderAppropriateThumbnail() {
					const {
						inSubredditOrProfile: e,
						isMeta: t,
						post: s,
						redditStyle: r,
						showMedia: o
					} = this.props, n = !!s.media && Object(v.H)(s.media), {
						media: i
					} = s;
					if (!(e && !o)) return a.a.createElement(B, {
						isMeta: t,
						post: s,
						redditStyle: r,
						removeLink: n,
						isVideo: i && Object(v.L)(i)
					})
				}
				render() {
					const {
						eventFactory: e,
						isExpanded: t,
						formatTitle: s,
						isOverlay: r,
						poll: o,
						post: n,
						redditStyle: i,
						scrollerItemRef: c
					} = this.props;
					return n.isBlank ? a.a.createElement(x.default, {
						postId: n.id
					}) : a.a.createElement("div", null, a.a.createElement("div", {
						className: w.a.commentsSpacer
					}), a.a.createElement(f.a, {
						className: w.a.postContainer,
						isOverlay: r,
						post: n,
						eventFactory: e
					}, a.a.createElement(y.a, {
						"data-click-id": "background"
					}, a.a.createElement("div", {
						className: w.a.mainBody
					}, a.a.createElement("div", {
						className: w.a.content,
						"data-click-id": "body"
					}, a.a.createElement(I, {
						author: n.author,
						iconUrl: this.props.iconUrl
					}), a.a.createElement("div", {
						className: w.a.contentRow
					}, this.renderAppropriateThumbnail(), a.a.createElement("div", {
						className: w.a.contentColumn
					}, a.a.createElement(P.c, {
						format: s,
						outboundLinkClassName: w.a.outboundLink,
						className: w.a.postTitle,
						poll: o,
						post: n,
						redditStyle: i,
						size: 3,
						isOverlay: r,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), n.permalink && a.a.createElement(b.a, {
						className: w.a.adLinkWrapper
					}, this.checkCommentsActive(), n.callToAction && n.source && n.source.url && a.a.createElement(h.a, {
						href: n.source.url.replace(d.a.redditUrl, ""),
						isSponsored: n.isSponsored,
						source: n.source
					}, n.callToAction)))), a.a.createElement("div", {
						className: w.a.spacer
					}), a.a.createElement(g.d, {
						postId: n.id
					}))), Object(O.renderMedia)(n, c, t, !1, !1))), a.a.createElement("div", {
						className: w.a.commentsSpacer
					}))
				}
			}
			const K = Object(l.a)(H),
				Z = Object(U.a)(K);
			t.default = Object(V.a)(G(K))
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (s[r[o]] = e[r[o]])
				}
				return s
			};
			t.a = Object(n.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: r,
					onClick: n,
					post: c,
					redditStyle: p,
					theme: u
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return o.a.createElement("div", l({
					className: Object(a.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(r, e),
					onClick: n
				}, b), t)
			})
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return h
			})), s.d(t, "b", (function() {
				return O
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/post.ts"),
				n = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const h = {
					autoplayPref: x.b,
					activeModalId: l.a,
					crosspost: b.d,
					currentUser: x.i,
					isActive: b.j,
					isChatPost: m.d,
					isCurrentUserProfilePost: b.k,
					isExpanded: b.m,
					isLoggedIn: x.I,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(b.r)(e, s)
					},
					imageGalleryCurrentItem: b.i,
					moderatorPermissions: p.i,
					modModeEnabled: d.P,
					post: b.N,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: u.a,
					showMedia: d.r,
					subredditOrProfile: b.ab,
					userIsOp: x.kb,
					flairStyleTemplate: d.R
				},
				O = (e, t) => {
					let {
						listingKey: s,
						listingName: r,
						postId: o
					} = t;
					return {
						handleVote: t => {
							const s = t === i.a.upvoted ? Object(a.S)(o) : Object(a.q)(o);
							e(s)
						},
						onIgnoreReports: () => e(Object(a.Q)(o)),
						onOpenReportsDropdown: t => e(Object(n.h)({
							tooltipId: t
						}))
					}
				},
				g = Object(r.b)(() => Object(o.c)(h), O, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					formatTitle: e => e.title
				}));
			t.a = e => g(Object(c.b)(e))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/LRUCache/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(c.t)({
					searchQuery: c.V
				}),
				m = new i.a(250),
				p = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let r = m.get(s);
						if (void 0 === r) {
							const a = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								n = e.title.split(a);
							for (let e = 1; e < n.length; e += 2) n[e] = o.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, n[e]);
							r = o.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, o.a.Children.toArray(n)), m.set(s, r)
						}
						return r
					}
				},
				u = Object(a.b)(() => Object(n.c)(d.c), d.b, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					formatTitle: p(s.searchQuery || "")
				}));
			t.a = e => l(u(e))
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return O
			}));
			var r = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				a = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				n = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				p = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				b = e => Object(r.l)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				O = e => {
					const t = Object(a.a)(Object(o.a)(e), n.a.actionIcon, n.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.a049907be1119ef0d5b4.js.map