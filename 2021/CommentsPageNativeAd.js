// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.e76c26f12308cd325835.js
// Retrieved at 3/18/2021, 2:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPageNativeAd"], {
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return G
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return J
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
				x = s("./src/reddit/components/Flatlist/index.tsx"),
				h = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/index.tsx"),
				P = s("./src/reddit/components/ModModeReports/helpers.ts"),
				O = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				C = s("./src/reddit/components/PostContainer/index.tsx"),
				E = s("./src/reddit/components/PostMedia/index.tsx"),
				f = s("./src/reddit/components/PostMeta/index.tsx"),
				y = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				g = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				k = s("./src/reddit/components/PostTopMeta/index.tsx"),
				S = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				j = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				A = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				T = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				w = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				_ = s("./src/reddit/contexts/Post/index.tsx"),
				I = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				L = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				M = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				W = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				B = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				R = s.n(B),
				F = s("./src/reddit/components/ClassicPost/index.m.less"),
				U = s.n(F);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const D = 16;
			class z extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: o,
						inSubredditOrProfile: i,
						eventFactory: E,
						first: T,
						flairStyleTemplate: w,
						formatTitle: _,
						hostPostId: B,
						isActionBarAnimationEnabled: F,
						isCheckboxSelected: z,
						isCurrentUserProfilePost: K,
						isFrontpage: H,
						isGalleryTileLayoutDefault: J,
						isLoggedIn: Z,
						isOverlay: Q,
						imageGalleryCurrentItem: Y,
						moderatorPermissions: q,
						modModeEnabled: X,
						onClickPost: $,
						onIgnoreReports: ee,
						onOpenReportsDropdown: te,
						poll: se,
						post: oe,
						postId: re,
						redditStyle: ae,
						scrollerItemRef: ne,
						showBulkActionCheckbox: ie,
						showEditFlair: ce,
						showMedia: de,
						subredditOrProfile: le,
						toggleCheckbox: me,
						userIsOp: pe,
						shouldShowGalleryTileOption: ue
					} = this.props, xe = ae ? void 0 : w, he = this.props.crosspost || void 0, be = Object(M.a)(q), Pe = Object(I.a)(q), Oe = Object(L.a)(q), Ce = X && M.a, Ee = !!oe.media && oe.media.type === N.o.RTJSON, fe = pe && Ee, ye = i && !de, ge = !!oe.media && Object(N.G)(oe.media), ve = {
						flairStyleTemplate: xe,
						post: oe,
						inSubredditOrProfile: i,
						isCurrentUserProfilePost: K,
						isOverlay: Q,
						shouldShowSubscribeButton: !(H && Z),
						subredditOrProfile: le
					}, ke = Object(a.t)(oe, Y), {
						source: Se
					} = ke, je = r.a.createElement(C.a, {
						className: Object(n.a)(R.a.classicPostStyles, U.a.postContainer, Object(W.a)(this.props), T ? U.a.mFirst : void 0, e),
						isOverlay: Q,
						style: {
							...Object(W.d)(this.props),
							...Object(W.b)(this.props.flairStyleTemplate)
						},
						post: oe,
						onClick: $,
						eventFactory: E
					}, r.a.createElement(g.a, {
						model: oe,
						handleVote: s,
						showBulkActionCheckbox: ie,
						isCheckboxSelected: z,
						toggleCheckbox: me,
						flairStyleTemplate: xe,
						redditStyle: ae,
						subreddit: le,
						isActionBarAnimationEnabled: F,
						postId: re
					}), r.a.createElement(O.a, {
						"data-click-id": "background",
						flairStyleTemplate: xe
					}, r.a.createElement(p.a, {
						className: U.a.eventMeta,
						post: oe
					}), r.a.createElement("div", {
						className: U.a.mainBody
					}, r.a.createElement("div", {
						className: ye ? U.a.expandoContainer : U.a.thumbnailContainer
					}, !ye && r.a.createElement(A.a, {
						className: U.a.classicThumbnail,
						crosspost: he && oe,
						isMeta: oe.isMeta,
						post: he || oe,
						redditStyle: ae,
						templatePlaceholderImage: xe && xe.postPlaceholderImage,
						removeLink: ge
					}), r.a.createElement(u.a, {
						crosspost: he,
						className: U.a.rightExpando,
						isExpanded: !!o,
						post: oe,
						useMediaIcons: !1
					})), r.a.createElement("div", {
						className: U.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: `${D}px`
						}
					}, r.a.createElement(v.c, {
						className: se ? U.a.titleWithPoll : void 0,
						format: _,
						poll: se,
						post: oe,
						redditStyle: ae,
						size: v.b.Medium,
						titleColor: xe && xe.postTitleColor,
						isOverlay: Q
					}, oe.source && !he && r.a.createElement(j.a, {
						href: oe.source.url,
						isSponsored: oe.isSponsored,
						postId: oe.id,
						source: oe.source
					}, Object(c.a)(oe))), r.a.createElement(f.a, V({
						key: "PostMeta"
					}, ve)), X && be && Object(P.c)(oe) && r.a.createElement(b.a, {
						onIgnoreReports: ee,
						reportable: oe
					}), r.a.createElement("div", {
						className: U.a.spacer
					}), oe.isSponsored && Se && Se.url && r.a.createElement(d.a, {
						className: U.a.adLinkWrapper
					}, r.a.createElement(l.a, {
						post: oe,
						adLinkContent: ke
					})), r.a.createElement("div", {
						className: U.a.flatlistContainer
					}, r.a.createElement(u.a, {
						className: U.a.leftExpando,
						crosspost: he,
						isExpanded: !!o,
						post: oe,
						useMediaIcons: !1
					}), r.a.createElement(m.a, {
						className: U.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: xe,
						model: oe,
						onVoteClick: s
					}), r.a.createElement(x.a, {
						className: U.a.flatlistSeparator
					}), r.a.createElement(x.c, {
						className: U.a.flatlist,
						currentUser: t,
						hasModFlairPerms: Pe,
						hasModPostPerms: be,
						hasModFullPerms: Oe,
						hostPostId: B,
						isActionBarAnimationEnabled: F,
						isOverlay: !!Q,
						modModeEnabled: X,
						onIgnoreReports: ee,
						onOpenReportsDropdown: te,
						post: oe,
						showEditPost: fe,
						showEditFlair: ce,
						tooltipType: Q ? k.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(y.h)({
							editPost: !Ce,
							save: !Ce,
							hide: !Ce,
							report: !Ce
						})
					})), r.a.createElement(h.d, null))), G(oe, ne, o, ue, J)));
					return r.a.createElement(S.b, null, je)
				}
			}
			const G = (e, t, s, o, a) => s ? e.crosspostRootId ? r.a.createElement("div", {
					className: U.a.crosspostMediaWrapper
				}, K(e, t, o, a)) : K(e, t, o, a) : null,
				K = (e, t, s, o) => r.a.createElement(E.a, {
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
				H = Object(i.a)(z),
				J = Object(_.b)(Object(w.a)(H));
			t.default = Object(T.a)(H)
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
				return J
			}));
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
				x = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				h = s("./src/reddit/components/BlankPost/index.tsx"),
				b = s("./src/reddit/components/CallToActionButton/index.tsx"),
				P = s("./src/reddit/components/ClassicPost/index.tsx"),
				O = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				E = s("./src/reddit/components/PostContainer/index.tsx"),
				f = s("./src/reddit/components/PostTitle/index.tsx"),
				y = s("./src/reddit/constants/componentTestIds.ts"),
				g = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/components/AuthorLink/index.tsx"),
				S = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				j = s("./src/reddit/components/UserIcon/index.tsx"),
				N = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				A = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				T = s.n(A);
			var w = e => a.a.createElement(r.Fragment, null, a.a.createElement(j.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: T.a.userIcon
				}), a.a.createElement(k.a, {
					className: T.a.authorLink,
					"data-click-id": "user",
					author: e.author
				}, `u/${e.author}`), a.a.createElement(N.a, {
					isSmall: !0,
					className: T.a.metaSeparator
				}), a.a.createElement(S.a, null)),
				_ = s("./src/lib/classNames/index.ts"),
				I = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				L = s("./src/reddit/components/PlayButton/index.tsx"),
				M = s("./src/reddit/components/Thumbnail/index.tsx"),
				W = s("./src/reddit/icons/svgs/Close/index.tsx");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const R = ({
				classNameInnerThumbnail: e,
				closeVideo: t,
				crosspost: s,
				forceShowNSFW: o,
				isMeta: r,
				post: n,
				redditStyle: i,
				templatePlaceholderImage: c,
				thumbnailContainerClassName: d,
				url: l,
				usePreview: m,
				mediaExpanded: p
			}) => n && n.media ? p && Object(v.K)(n.media) ? a.a.createElement("div", null, a.a.createElement(W.a, {
				className: T.a.close,
				onClick: t
			}), a.a.createElement(I.b, {
				className: T.a.videoPlayer,
				autoPlay: !0,
				isExpando: !1,
				shouldLoad: !0,
				shouldPause: !1,
				shouldStop: !1,
				hlsSource: n.media.hlsUrl,
				mpegDashSource: n.media.dashUrl,
				isGif: n.media.isGif,
				scrubberThumbSource: n.media.scrubberThumbSource,
				postId: n.id,
				callToActionSource: n.source || void 0,
				callToActionText: n.callToAction,
				isListing: !1,
				playFromStart: !0
			})) : a.a.createElement(M.a, {
				className: Object(_.a)(T.a.thumbnail, e),
				containerClassName: d,
				crosspost: s,
				forceShowNSFW: o,
				isMeta: r,
				post: n,
				redditStyle: i,
				removeLink: Object(v.K)(n.media),
				url: Object(v.K)(n.media) ? void 0 : l,
				usePreview: m
			}) : a.a.createElement(M.a, {
				className: Object(_.a)(T.a.thumbnail, e),
				containerClassName: d,
				crosspost: s,
				forceShowNSFW: o,
				isMeta: r,
				post: n,
				redditStyle: i,
				usePreview: m
			});
			var F = e => {
					const [t, s] = Object(r.useState)(!1), {
						isVideo: o,
						className: n
					} = e, i = o && !t;
					return a.a.createElement("div", {
						className: t ? Object(_.a)(T.a.videoContainer, n) : Object(_.a)(T.a.thumbnailContainer, n),
						onClick: i ? () => s(!0) : void 0
					}, a.a.createElement(R, B({}, e, {
						mediaExpanded: t,
						closeVideo: () => s(!1)
					})), i && a.a.createElement(L.a, {
						className: T.a.playContainer,
						playIconClassName: T.a.playIcon,
						onClick: () => s(!0)
					}))
				},
				U = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				V = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
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
			class K extends a.a.Component {
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
					return e.source && e.isLocked ? a.a.createElement(g.b, {
						className: T.a.styledOutboundLink,
						href: e.source.url,
						isSponsored: e.isSponsored,
						source: e.source
					}, Object(m.a)(e)) : a.a.createElement(i.a, {
						className: T.a.styledOutboundLink,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": y.a,
						to: this.props.isOverlay ? Object(p.a)(e.permalink, !0) : Object(D.b)(e.permalink),
						onClick: this.props.onClick
					}, o.fbt._("Join the conversation", null, {
						hk: "45BFWV"
					}))
				}
				renderAppropriateThumbnail() {
					const {
						inSubredditOrProfile: e,
						post: t,
						redditStyle: s,
						showMedia: o
					} = this.props, r = !!t.media && Object(v.G)(t.media), {
						media: n
					} = t;
					if (!(e && !o)) return a.a.createElement(F, {
						isMeta: t.isMeta,
						post: t,
						redditStyle: s,
						removeLink: r,
						isVideo: n && Object(v.K)(n)
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
					return n.isBlank ? a.a.createElement(h.default, {
						postId: n.id
					}) : a.a.createElement("div", null, a.a.createElement("div", {
						className: T.a.commentsSpacer
					}), a.a.createElement(E.a, {
						className: T.a.postContainer,
						isOverlay: o,
						post: n,
						eventFactory: e
					}, a.a.createElement(C.a, {
						"data-click-id": "background"
					}, a.a.createElement("div", {
						className: T.a.mainBody
					}, a.a.createElement("div", {
						className: T.a.content,
						"data-click-id": "body"
					}, a.a.createElement(w, {
						author: n.author,
						iconUrl: this.props.iconUrl
					}), a.a.createElement("div", {
						className: T.a.contentRow
					}, this.renderAppropriateThumbnail(), a.a.createElement("div", {
						className: T.a.contentColumn
					}, a.a.createElement(f.c, {
						format: s,
						outboundLinkClassName: T.a.outboundLink,
						className: T.a.postTitle,
						poll: r,
						post: n,
						redditStyle: i,
						size: 3,
						isOverlay: o,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), n.permalink && a.a.createElement(x.a, {
						className: T.a.adLinkWrapper
					}, this.checkCommentsActive(), n.callToAction && n.source && n.source.url && a.a.createElement(b.a, {
						href: n.source.url.replace(d.a.redditUrl, ""),
						isSponsored: n.isSponsored,
						source: n.source
					}, n.callToAction)))), a.a.createElement("div", {
						className: T.a.spacer
					}), a.a.createElement(O.d, null))), Object(P.renderMedia)(n, c, t, !1, !1))), a.a.createElement("div", {
						className: T.a.commentsSpacer
					}))
				}
			}
			const H = Object(l.a)(K),
				J = Object(V.a)(H);
			t.default = Object(U.a)(G(H))
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
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
			t.a = Object(n.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: n,
					post: c,
					redditStyle: m,
					theme: p,
					...u
				} = e;
				return r.a.createElement("div", l({
					className: Object(a.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(o, e),
					onClick: n
				}, u), t)
			})
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return P
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
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/postFlair.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const P = {
					autoplayPref: b.b,
					activeModalId: m.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: h.k,
					isExpanded: h.l,
					isLoggedIn: b.J,
					moderatorPermissions: u.j,
					modModeEnabled: d.Q,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: x.a,
					showMedia: d.r,
					flairStyleTemplate: d.S
				},
				O = (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const o = s === i.a.upvoted ? Object(a.U)(t) : Object(a.r)(t);
						e(o)
					},
					onIgnoreReports: () => e(Object(a.S)(t)),
					onOpenReportsDropdown: t => e(Object(n.h)({
						tooltipId: t
					}))
				}),
				C = Object(o.b)(() => Object(r.c)(P), O, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(C(Object(c.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/LRUCache/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(c.t)({
					searchQuery: c.W
				}),
				m = new i.a(250),
				p = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = `${e.id}-${t}`;
						let o = m.get(s);
						if (void 0 === o) {
							const a = new RegExp(`(\\b${t}\\b)`, "gi"),
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
				u = Object(a.b)(() => Object(n.c)(d.c), d.b, (e, t, s) => ({
					...e,
					...t,
					...s,
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
				return h
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "d", (function() {
				return P
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
				x = e => Object(o.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: x(e.postBackgroundColor)
				} : m,
				b = e => e.isActive ? l.a.mIsActive : void 0,
				P = e => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.e76c26f12308cd325835.js.map