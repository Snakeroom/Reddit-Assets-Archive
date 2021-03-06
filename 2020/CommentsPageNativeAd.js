// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.9b7be84e5c8af3c1d21b.js
// Retrieved at 10/26/2020, 11:00:17 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPageNativeAd"], {
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return z
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return K
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
				E = s("./src/reddit/components/PostTitle/index.tsx"),
				v = s("./src/reddit/components/PostTopMeta/index.tsx"),
				S = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				k = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				_ = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				w = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				L = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				T = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				A = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				M = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				R = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				B = s.n(R),
				W = s("./src/reddit/components/ClassicPost/index.m.less"),
				F = s.n(W);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const U = 16;
			class D extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: o,
						isMeta: i,
						inSubredditOrProfile: f,
						eventFactory: _,
						first: w,
						flairStyleTemplate: R,
						formatTitle: W,
						hostPostId: D,
						isActionBarAnimationEnabled: G,
						isCheckboxSelected: H,
						isCurrentUserProfilePost: K,
						isFrontpage: Z,
						isGalleryTileLayoutDefault: J,
						isLoggedIn: Q,
						isOverlay: q,
						imageGalleryCurrentItem: Y,
						moderatorPermissions: X,
						modModeEnabled: $,
						onClickPost: ee,
						onIgnoreReports: te,
						onOpenReportsDropdown: se,
						poll: oe,
						post: re,
						postId: ae,
						redditStyle: ne,
						scrollerItemRef: ie,
						showBulkActionCheckbox: ce,
						showEditFlair: de,
						showMedia: le,
						subredditOrProfile: me,
						toggleCheckbox: pe,
						userIsOp: ue,
						shouldShowGalleryTileOption: be
					} = this.props, xe = ne ? void 0 : R, he = this.props.crosspost || void 0, Oe = Object(A.a)(X), ge = Object(L.a)(X), ye = Object(T.a)(X), fe = $ && A.a, Pe = !!re.media && re.media.type === N.o.RTJSON, je = ue && Pe, Ce = f && !le, Ee = !!re.media && Object(N.H)(re.media), ve = {
						flairStyleTemplate: xe,
						post: re,
						inSubredditOrProfile: f,
						isCurrentUserProfilePost: K,
						isOverlay: q,
						shouldShowSubscribeButton: !(Z && Q),
						subredditOrProfile: me
					}, Se = Object(a.s)(re, Y), {
						source: ke
					} = Se, Ne = r.a.createElement(y.a, {
						className: Object(n.a)(B.a.classicPostStyles, F.a.postContainer, Object(M.a)(this.props), w ? F.a.mFirst : void 0, e),
						isOverlay: q,
						style: Object.assign(Object.assign({}, Object(M.d)(this.props)), Object(M.b)(this.props.flairStyleTemplate)),
						post: re,
						onClick: ee,
						eventFactory: _
					}, r.a.createElement(C.a, {
						model: re,
						handleVote: s,
						showBulkActionCheckbox: ce,
						isCheckboxSelected: H,
						toggleCheckbox: pe,
						flairStyleTemplate: xe,
						redditStyle: ne,
						subreddit: me,
						isActionBarAnimationEnabled: G,
						postId: ae
					}), r.a.createElement(g.a, {
						"data-click-id": "background",
						flairStyleTemplate: xe
					}, r.a.createElement(p.a, {
						className: F.a.eventMeta,
						post: re
					}), r.a.createElement("div", {
						className: F.a.mainBody
					}, r.a.createElement("div", {
						className: Ce ? F.a.expandoContainer : F.a.thumbnailContainer
					}, !Ce && r.a.createElement(I.a, {
						className: F.a.classicThumbnail,
						crosspost: he && re,
						isMeta: i,
						post: he || re,
						redditStyle: ne,
						templatePlaceholderImage: xe && xe.postPlaceholderImage,
						removeLink: Ee
					}), r.a.createElement(u.a, {
						crosspost: he,
						className: F.a.rightExpando,
						isExpanded: !!o,
						post: re,
						useMediaIcons: !1
					})), r.a.createElement("div", {
						className: F.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(U, "px")
						}
					}, r.a.createElement(E.c, {
						className: oe ? F.a.titleWithPoll : void 0,
						format: W,
						poll: oe,
						post: re,
						redditStyle: ne,
						size: E.b.Medium,
						titleColor: xe && xe.postTitleColor,
						isOverlay: q
					}, re.source && !he && r.a.createElement(k.a, {
						href: re.source.url,
						isSponsored: re.isSponsored,
						postId: re.id,
						source: re.source
					}, Object(c.a)(re))), r.a.createElement(P.a, V({
						key: "PostMeta"
					}, ve)), $ && Oe && Object(O.c)(re) && r.a.createElement(h.a, {
						onIgnoreReports: te,
						reportable: re
					}), r.a.createElement("div", {
						className: F.a.spacer
					}), re.isSponsored && ke && ke.url && r.a.createElement(d.a, {
						className: F.a.adLinkWrapper
					}, r.a.createElement(l.a, {
						post: re,
						adLinkContent: Se
					})), r.a.createElement("div", {
						className: F.a.flatlistContainer
					}, r.a.createElement(u.a, {
						className: F.a.leftExpando,
						crosspost: he,
						isExpanded: !!o,
						post: re,
						useMediaIcons: !1
					}), r.a.createElement(m.a, {
						className: F.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: xe,
						model: re,
						onVoteClick: s
					}), r.a.createElement(b.a, {
						className: F.a.flatlistSeparator
					}), r.a.createElement(b.c, {
						className: F.a.flatlist,
						currentUser: t,
						hasModFlairPerms: ge,
						hasModPostPerms: Oe,
						hasModFullPerms: ye,
						hostPostId: D,
						isActionBarAnimationEnabled: G,
						isOverlay: !!q,
						modModeEnabled: $,
						onIgnoreReports: te,
						onOpenReportsDropdown: se,
						post: re,
						showEditPost: je,
						showEditFlair: de,
						tooltipType: q ? v.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(j.h)({
							editPost: !fe,
							save: !fe,
							hide: !fe,
							report: !fe
						})
					})), r.a.createElement(x.d, {
						postId: re.id
					}))), z(re, ie, o, be, J)));
					return r.a.createElement(S.b, null, Ne)
				}
			}
			const z = (e, t, s, o, a) => s ? e.crosspostRootId ? r.a.createElement("div", {
					className: F.a.crosspostMediaWrapper
				}, G(e, t, o, a)) : G(e, t, o, a) : null,
				G = (e, t, s, o) => r.a.createElement(f.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: o,
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
				K = Object(w.a)(H);
			t.default = Object(_.a)(H)
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
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
				E = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/components/AuthorLink/index.tsx"),
				S = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				k = s("./src/reddit/components/UserIcon/index.tsx"),
				N = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				I = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				_ = s.n(I);
			var w = e => a.a.createElement(r.Fragment, null, a.a.createElement(k.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: _.a.userIcon
				}), a.a.createElement(v.a, {
					className: _.a.authorLink,
					"data-click-id": "user",
					author: e.author
				}, "u/".concat(e.author)), a.a.createElement(N.a, {
					isSmall: !0,
					className: _.a.metaSeparator
				}), a.a.createElement(S.a, null)),
				L = s("./src/lib/classNames/index.ts"),
				T = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				A = s("./src/reddit/components/PlayButton/index.tsx"),
				M = s("./src/reddit/components/Thumbnail/index.tsx"),
				R = s("./src/reddit/icons/svgs/Close/index.tsx");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const W = e => {
				let {
					classNameInnerThumbnail: t,
					closeVideo: s,
					crosspost: o,
					forceShowNSFW: r,
					isMeta: n,
					post: i,
					redditStyle: c,
					templatePlaceholderImage: d,
					thumbnailContainerClassName: l,
					url: m,
					usePreview: p,
					mediaExpanded: u
				} = e;
				return i && i.media ? u && Object(E.L)(i.media) ? a.a.createElement("div", null, a.a.createElement(R.a, {
					className: _.a.close,
					onClick: s
				}), a.a.createElement(T.b, {
					className: _.a.videoPlayer,
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
				})) : a.a.createElement(M.a, {
					className: Object(L.a)(_.a.thumbnail, t),
					containerClassName: l,
					crosspost: o,
					forceShowNSFW: r,
					isMeta: n,
					post: i,
					redditStyle: c,
					removeLink: Object(E.L)(i.media),
					url: Object(E.L)(i.media) ? void 0 : m,
					usePreview: p
				}) : a.a.createElement(M.a, {
					className: Object(L.a)(_.a.thumbnail, t),
					containerClassName: l,
					crosspost: o,
					forceShowNSFW: r,
					isMeta: n,
					post: i,
					redditStyle: c,
					usePreview: p
				})
			};
			var F = e => {
					const [t, s] = Object(r.useState)(!1), {
						isVideo: o,
						className: n
					} = e, i = o && !t;
					return a.a.createElement("div", {
						className: t ? Object(L.a)(_.a.videoContainer, n) : Object(L.a)(_.a.thumbnailContainer, n),
						onClick: i ? () => s(!0) : void 0
					}, a.a.createElement(W, B({}, e, {
						mediaExpanded: t,
						closeVideo: () => s(!1)
					})), i && a.a.createElement(A.a, {
						className: _.a.playContainer,
						playIconClassName: _.a.playIcon,
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
						className: _.a.styledOutboundLink,
						href: e.source.url,
						isSponsored: e.isSponsored,
						source: e.source
					}, Object(m.a)(e)) : a.a.createElement(i.a, {
						className: _.a.styledOutboundLink,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": j.a,
						to: this.props.isOverlay ? Object(p.a)(e.permalink, !0) : Object(D.b)(e.permalink),
						onClick: this.props.onClick
					}, o.fbt._("Join the conversation", null, {
						hk: "45BFWV"
					}))
				}
				renderAppropriateThumbnail() {
					const {
						inSubredditOrProfile: e,
						isMeta: t,
						post: s,
						redditStyle: o,
						showMedia: r
					} = this.props, n = !!s.media && Object(E.H)(s.media), {
						media: i
					} = s;
					if (!(e && !r)) return a.a.createElement(F, {
						isMeta: t,
						post: s,
						redditStyle: o,
						removeLink: n,
						isVideo: i && Object(E.L)(i)
					})
				}
				render() {
					const {
						eventFactory: e,
						isExpanded: t,
						formatTitle: s,
						isOverlay: o,
						poll: r,
						post: n,
						redditStyle: i,
						scrollerItemRef: c
					} = this.props;
					return n.isBlank ? a.a.createElement(x.default, {
						postId: n.id
					}) : a.a.createElement("div", null, a.a.createElement("div", {
						className: _.a.commentsSpacer
					}), a.a.createElement(f.a, {
						className: _.a.postContainer,
						isOverlay: o,
						post: n,
						eventFactory: e
					}, a.a.createElement(y.a, {
						"data-click-id": "background"
					}, a.a.createElement("div", {
						className: _.a.mainBody
					}, a.a.createElement("div", {
						className: _.a.content,
						"data-click-id": "body"
					}, a.a.createElement(w, {
						author: n.author,
						iconUrl: this.props.iconUrl
					}), a.a.createElement("div", {
						className: _.a.contentRow
					}, this.renderAppropriateThumbnail(), a.a.createElement("div", {
						className: _.a.contentColumn
					}, a.a.createElement(P.c, {
						format: s,
						outboundLinkClassName: _.a.outboundLink,
						className: _.a.postTitle,
						poll: r,
						post: n,
						redditStyle: i,
						size: 3,
						isOverlay: o,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), n.permalink && a.a.createElement(b.a, {
						className: _.a.adLinkWrapper
					}, this.checkCommentsActive(), n.callToAction && n.source && n.source.url && a.a.createElement(h.a, {
						href: n.source.url.replace(d.a.redditUrl, ""),
						isSponsored: n.isSponsored,
						source: n.source
					}, n.callToAction)))), a.a.createElement("div", {
						className: _.a.spacer
					}), a.a.createElement(g.d, {
						postId: n.id
					}))), Object(O.renderMedia)(n, c, t, !1, !1))), a.a.createElement("div", {
						className: _.a.commentsSpacer
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
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			t.a = Object(n.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: n,
					post: c,
					redditStyle: p,
					theme: u
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return r.a.createElement("div", l({
					className: Object(a.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(o, e),
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
			var o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
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
					post: b.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: u.a,
					showMedia: d.r,
					subredditOrProfile: b.bb,
					userIsOp: x.kb,
					flairStyleTemplate: d.R
				},
				O = (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: r
					} = t;
					return {
						handleVote: t => {
							const s = t === i.a.upvoted ? Object(a.S)(r) : Object(a.q)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(a.Q)(r)),
						onOpenReportsDropdown: t => e(Object(n.h)({
							tooltipId: t
						}))
					}
				},
				g = Object(o.b)(() => Object(r.c)(h), O, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					formatTitle: e => e.title
				}));
			t.a = e => g(Object(c.b)(e))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
						let o = m.get(s);
						if (void 0 === o) {
							const a = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								n = e.title.split(a);
							for (let e = 1; e < n.length; e += 2) n[e] = r.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, n[e]);
							o = r.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, r.a.Children.toArray(n)), m.set(s, o)
						}
						return o
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
			var o = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
				b = e => Object(o.l)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				O = e => {
					const t = Object(a.a)(Object(r.a)(e), n.a.actionIcon, n.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.9b7be84e5c8af3c1d21b.js.map