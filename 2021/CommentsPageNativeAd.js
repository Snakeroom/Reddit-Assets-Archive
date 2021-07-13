// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.05bb450553d7e774b36c.js
// Retrieved at 7/13/2021, 11:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPageNativeAd"], {
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return z
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return G
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/ads/index.ts"),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				x = s("./src/reddit/components/Flatlist/index.tsx"),
				b = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/index.tsx"),
				C = s("./src/reddit/components/ModModeReports/helpers.ts"),
				O = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				P = s("./src/reddit/components/PostContainer/index.tsx"),
				E = s("./src/reddit/components/PostMedia/index.tsx"),
				f = s("./src/reddit/components/PostMeta/index.tsx"),
				v = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				y = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				g = s("./src/reddit/components/PostTitle/index.tsx"),
				k = s("./src/reddit/components/PostTopMeta/index.tsx"),
				j = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				S = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				_ = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				T = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				A = s("./src/reddit/contexts/Post/index.tsx"),
				I = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				M = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				L = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				R = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				V = s.n(W),
				B = s("./src/reddit/components/ClassicPost/index.m.less"),
				F = s.n(B);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
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
						inSubredditOrProfile: i,
						eventFactory: E,
						first: _,
						flairStyleTemplate: T,
						formatTitle: A,
						hostPostData: W,
						isCheckboxSelected: B,
						isCurrentUserProfilePost: D,
						isCommentCountAnimationEnabled: H,
						isVoteCountAnimationEnabled: K,
						isCountAnimShadowTestEnabled: G,
						isFrontpage: Z,
						isGalleryTileLayoutDefault: J,
						isLoggedIn: Q,
						isOverlay: Y,
						imageGalleryCurrentItem: q,
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
						showBulkActionCheckbox: de,
						showEditFlair: ce,
						showMedia: le,
						subredditOrProfile: me,
						toggleCheckbox: pe,
						userIsOp: ue,
						shouldShowGalleryTileOption: xe
					} = this.props, be = ne ? void 0 : T, he = this.props.crosspost || void 0, Ce = Object(L.a)(X), Oe = Object(I.a)(X), Pe = Object(M.a)(X), Ee = $ && L.a, fe = !!re.media && re.media.type === N.o.RTJSON, ve = ue && fe, ye = i && !le, ge = !!re.media && Object(N.G)(re.media), ke = {
						flairStyleTemplate: be,
						post: re,
						inSubredditOrProfile: i,
						isCurrentUserProfilePost: D,
						isOverlay: Y,
						shouldShowSubscribeButton: !(Z && Q),
						subredditOrProfile: me
					}, je = Object(a.t)(re, q), {
						source: Se
					} = je, Ne = r.a.createElement(P.a, {
						className: Object(n.a)(V.a.classicPostStyles, F.a.postContainer, Object(R.a)(this.props), _ ? F.a.mFirst : void 0, e),
						isOverlay: Y,
						style: {
							...Object(R.d)(this.props),
							...Object(R.b)(this.props.flairStyleTemplate)
						},
						post: re,
						onClick: ee,
						eventFactory: E
					}, r.a.createElement(y.a, {
						model: re,
						handleVote: s,
						showBulkActionCheckbox: de,
						isCheckboxSelected: B,
						isCountAnimShadowTestEnabled: G,
						isVoteCountAnimation: K,
						toggleCheckbox: pe,
						flairStyleTemplate: be,
						redditStyle: ne,
						subreddit: me,
						postId: ae
					}), r.a.createElement(O.a, {
						"data-click-id": "background",
						flairStyleTemplate: be
					}, r.a.createElement(p.a, {
						className: F.a.eventMeta,
						post: re
					}), r.a.createElement("div", {
						className: F.a.mainBody
					}, r.a.createElement("div", {
						className: ye ? F.a.expandoContainer : F.a.thumbnailContainer
					}, !ye && r.a.createElement(w.a, {
						className: F.a.classicThumbnail,
						crosspost: he && re,
						isMeta: re.isMeta,
						post: he || re,
						redditStyle: ne,
						templatePlaceholderImage: be && be.postPlaceholderImage,
						removeLink: ge
					}), r.a.createElement(u.a, {
						crosspost: he,
						className: F.a.rightExpando,
						isExpanded: !!o,
						post: re,
						useMediaIcons: !1
					})), r.a.createElement("div", {
						className: Object(n.a)(F.a.content, {
							[F.a.showBulkActionCheckbox]: de
						}),
						"data-click-id": "body"
					}, r.a.createElement(g.c, {
						className: oe ? F.a.titleWithPoll : void 0,
						format: A,
						poll: oe,
						post: re,
						redditStyle: ne,
						size: g.b.Medium,
						titleColor: be && be.postTitleColor,
						isOverlay: Y
					}, re.source && !he && r.a.createElement(S.a, {
						href: re.source.url,
						isSponsored: re.isSponsored,
						postId: re.id,
						source: re.source
					}, Object(d.a)(re))), r.a.createElement(f.a, U({
						key: "PostMeta"
					}, ke)), $ && Ce && Object(C.c)(re) && r.a.createElement(h.a, {
						onIgnoreReports: te,
						reportable: re
					}), re.isSponsored && Se && Se.url && r.a.createElement(c.a, {
						className: F.a.adLinkWrapper
					}, r.a.createElement(l.a, {
						post: re,
						adLinkContent: je
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
						flairStyleTemplate: be,
						model: re,
						onVoteClick: s
					}), r.a.createElement(x.a, {
						className: F.a.flatlistSeparator
					}), r.a.createElement(x.c, {
						className: F.a.flatlist,
						currentUser: t,
						hasModFlairPerms: Oe,
						hasModPostPerms: Ce,
						hasModFullPerms: Pe,
						hostPostData: W,
						isCommentCountAnimation: H,
						isCountAnimShadowTestEnabled: G,
						isOverlay: !!Y,
						modModeEnabled: $,
						onIgnoreReports: te,
						onOpenReportsDropdown: se,
						post: re,
						showEditPost: ve,
						showEditFlair: ce,
						tooltipType: Y ? k.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(v.b)({
							editPost: !Ee,
							save: !Ee,
							hide: !Ee,
							report: !Ee
						})
					})), r.a.createElement(b.d, null))), z(re, ie, o, xe, J)));
					return r.a.createElement(j.b, null, Ne)
				}
			}
			const z = (e, t, s, o, a) => s ? e.crosspostRootId ? r.a.createElement("div", {
					className: F.a.crosspostMediaWrapper
				}, H(e, t, o, a)) : H(e, t, o, a) : null,
				H = (e, t, s, o) => r.a.createElement(E.a, {
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
				K = Object(i.a)(D),
				G = Object(A.b)(Object(T.a)(K));
			t.default = Object(_.a)(K)
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
				return Q
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/config.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/getShortenedLink.ts"),
				p = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/actions/profile/index.ts"),
				b = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				h = s("./src/reddit/components/BlankPost/index.tsx"),
				C = s("./src/reddit/components/CallToActionButton/index.tsx"),
				O = s("./src/reddit/components/ClassicPost/index.tsx"),
				P = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				f = s("./src/reddit/components/PostContainer/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				y = s("./src/reddit/constants/componentTestIds.ts"),
				g = s("./src/reddit/controls/OutboundLink/index.tsx"),
				k = s("./src/reddit/components/PostTopMeta/index.tsx"),
				j = s("./src/reddit/components/AuthorLink/index.tsx"),
				S = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				N = s("./src/reddit/components/UserIcon/index.tsx"),
				w = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				T = s.n(_);
			var A = e => a.a.createElement(r.Fragment, null, a.a.createElement(N.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: T.a.userIcon,
					omitResponsivePresenceWrapper: !0
				}), a.a.createElement(j.a, {
					className: T.a.authorLink,
					"data-click-id": "user",
					author: e.author
				}, `u/${e.author}`), a.a.createElement(w.a, {
					isSmall: !0,
					className: T.a.metaSeparator
				}), a.a.createElement(S.a, {
					adHeaderVariant: e.adHeaderVariant,
					greyTextColor: e.greyTextColor
				})),
				I = s("./src/lib/classNames/index.ts"),
				M = s("./src/reddit/components/Media/index.tsx"),
				L = s("./src/reddit/components/PlayButton/index.tsx"),
				R = s("./src/reddit/components/Thumbnail/index.tsx"),
				W = s("./src/reddit/icons/svgs/Close/index.tsx");

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const B = ({
				classNameInnerThumbnail: e,
				closeVideo: t,
				crosspost: s,
				forceShowNSFW: o,
				isMeta: r,
				post: n,
				redditStyle: i,
				scrollerItemRef: d,
				thumbnailContainerClassName: c,
				url: l,
				usePreview: m,
				mediaExpanded: p
			}) => n && n.media ? p && Object(u.K)(n.media) ? a.a.createElement("div", null, a.a.createElement(W.a, {
				className: T.a.close,
				onClick: t
			}), a.a.createElement(M.a, {
				className: T.a.videoPlayer,
				post: n,
				isNotCardView: !0,
				autoplayPref: !0,
				isExpando: !1,
				shouldLoad: !0,
				shouldPause: !1,
				shouldStop: !1,
				isListing: !1,
				showCentered: !1,
				scrollerItemRef: d
			})) : a.a.createElement(R.a, {
				className: Object(I.a)(T.a.thumbnail, e),
				containerClassName: c,
				crosspost: s,
				forceShowNSFW: o,
				isMeta: r,
				post: n,
				redditStyle: i,
				removeLink: Object(u.K)(n.media),
				url: Object(u.K)(n.media) ? void 0 : l,
				usePreview: m
			}) : a.a.createElement(R.a, {
				className: Object(I.a)(T.a.thumbnail, e),
				containerClassName: c,
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
						className: t ? Object(I.a)(T.a.videoContainer, n) : Object(I.a)(T.a.thumbnailContainer, n),
						onClick: i ? () => s(!0) : void 0
					}, a.a.createElement(B, V({}, e, {
						mediaExpanded: t,
						closeVideo: () => s(!1)
					})), i && a.a.createElement(L.a, {
						className: T.a.playContainer,
						playIconClassName: T.a.playIcon,
						onClick: () => s(!0)
					}))
				},
				U = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				D = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				z = s("./src/reddit/helpers/path/index.ts"),
				H = s("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				K = s("./src/reddit/selectors/profile.ts");
			const G = Object(n.b)(() => Object(d.c)({
				iconUrl: (e, t) => {
					const s = Object(K.j)(e, {
						profileName: t.post.author
					});
					if (s && s.icon) return s.icon.url
				},
				adHeaderVariant: e => Object(H.a)(e)
			}), (e, t) => ({
				fetchProfile: () => {
					e(Object(x.d)(t.post.author))
				}
			}));
			class Z extends a.a.Component {
				componentDidMount() {
					this.props.iconUrl || this.props.fetchProfile()
				}
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				checkCommentsActive() {
					var e, t, s;
					const {
						post: r
					} = this.props;
					let n = Object(m.a)(r);
					return r.media && Object(u.E)(r.media) && (null === (s = null === (t = null === (e = null == r ? void 0 : r.media) || void 0 === e ? void 0 : e.gallery) || void 0 === t ? void 0 : t.items[0]) || void 0 === s ? void 0 : s.displayUrl) && (n = r.media.gallery.items[0].displayUrl), r.source && r.isLocked ? a.a.createElement(g.b, {
						className: T.a.styledOutboundLink,
						href: r.source.url,
						isSponsored: r.isSponsored,
						source: r.source
					}, n) : a.a.createElement(i.a, {
						className: T.a.styledOutboundLink,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": y.a,
						to: this.props.isOverlay ? Object(p.a)(r.permalink, !0) : Object(z.b)(r.permalink),
						onClick: this.props.onClick
					}, o.fbt._("Join the conversation", null, {
						hk: "45BFWV"
					}))
				}
				render() {
					const {
						adHeaderVariant: e,
						eventFactory: t,
						isExpanded: s,
						formatTitle: o,
						iconUrl: r,
						inSubredditOrProfile: n,
						isOverlay: i,
						poll: d,
						post: l,
						redditStyle: m,
						scrollerItemRef: p,
						showMedia: x
					} = this.props;
					return l.isBlank ? a.a.createElement(h.default, {
						postId: l.id
					}) : a.a.createElement("div", null, a.a.createElement("div", {
						className: T.a.commentsSpacer
					}), a.a.createElement(f.a, {
						className: T.a.postContainer,
						isOverlay: i,
						post: l,
						eventFactory: t
					}, a.a.createElement(E.a, {
						"data-click-id": "background"
					}, a.a.createElement("div", {
						className: T.a.mainBody
					}, a.a.createElement("div", {
						className: T.a.content,
						"data-click-id": "body"
					}, a.a.createElement(A, {
						author: l.author,
						iconUrl: r,
						adHeaderVariant: e,
						greyTextColor: Object(k.e)(this.props)
					}), a.a.createElement("div", {
						className: T.a.contentRow
					}, !(n && !x) && a.a.createElement(F, {
						isMeta: l.isMeta,
						post: l,
						redditStyle: m,
						isVideo: l.media && Object(u.K)(l.media),
						scrollerItemRef: p
					}), a.a.createElement("div", {
						className: T.a.contentColumn
					}, a.a.createElement(v.c, {
						format: o,
						outboundLinkClassName: T.a.outboundLink,
						className: T.a.postTitle,
						poll: d,
						post: l,
						redditStyle: m,
						size: 3,
						isOverlay: i,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), l.permalink && a.a.createElement(b.a, {
						className: T.a.adLinkWrapper
					}, this.checkCommentsActive(), l.callToAction && l.source && l.source.url && a.a.createElement(C.a, {
						href: l.source.url.replace(c.a.redditUrl, ""),
						isSponsored: l.isSponsored,
						source: l.source
					}, l.callToAction)))), a.a.createElement("div", {
						className: T.a.spacer
					}), a.a.createElement(P.d, null))), Object(O.renderMedia)(l, p, s, !1, !1))), a.a.createElement("div", {
						className: T.a.commentsSpacer
					}))
				}
			}
			const J = Object(l.a)(Z),
				Q = Object(D.a)(J);
			t.default = Object(U.a)(G(J))
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
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(d);

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
					post: d,
					redditStyle: m,
					theme: p,
					...u
				} = e;
				return r.a.createElement("div", l({
					className: Object(a.a)(c.a.backgroundWrapper, s),
					style: Object(i.c)(o, e),
					onClick: n
				}, u), t)
			})
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return C
			})), s.d(t, "b", (function() {
				return O
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/post.ts"),
				n = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const C = {
					autoplayPref: h.b,
					activeModalId: m.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: b.k,
					isExpanded: b.l,
					isLoggedIn: h.K,
					moderatorPermissions: u.k,
					modModeEnabled: c.Q,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: x.a,
					showMedia: c.r,
					flairStyleTemplate: c.S
				},
				O = (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const o = s === i.a.upvoted ? Object(a.fb)(t) : Object(a.w)(t);
						e(o)
					},
					onIgnoreReports: () => e(Object(a.bb)(t)),
					onOpenReportsDropdown: t => e(Object(n.h)({
						tooltipId: t
					}))
				}),
				P = Object(o.b)(() => Object(r.c)(C), O, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(P(Object(d.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/LRUCache/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(d.t)({
					searchQuery: d.W
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
				u = Object(a.b)(() => Object(n.c)(c.c), c.b, (e, t, s) => ({
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
				return b
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return C
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				a = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				n = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				p = e => Object(i.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
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
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: x(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				C = e => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.05bb450553d7e774b36c.js.map