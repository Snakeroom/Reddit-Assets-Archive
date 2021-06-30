// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.cc284b4fc094cf035bfb.js
// Retrieved at 6/30/2021, 6:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPageNativeAd"], {
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return z
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return G
			}));
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
				f = s("./src/reddit/components/PostMedia/index.tsx"),
				v = s("./src/reddit/components/PostMeta/index.tsx"),
				y = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				E = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				g = s("./src/reddit/components/PostTitle/index.tsx"),
				k = s("./src/reddit/components/PostTopMeta/index.tsx"),
				j = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				S = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				_ = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				I = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				M = s("./src/reddit/contexts/Post/index.tsx"),
				L = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				T = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				A = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				R = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				V = s.n(W),
				B = s("./src/reddit/components/ClassicPost/index.m.less"),
				F = s.n(B);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
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
						inSubredditOrProfile: i,
						eventFactory: f,
						first: _,
						flairStyleTemplate: I,
						formatTitle: M,
						hostPostData: W,
						isCheckboxSelected: B,
						isCurrentUserProfilePost: D,
						isFrontpage: H,
						isGalleryTileLayoutDefault: K,
						isLoggedIn: G,
						isOverlay: Z,
						imageGalleryCurrentItem: J,
						moderatorPermissions: Q,
						modModeEnabled: Y,
						onClickPost: q,
						onIgnoreReports: X,
						onOpenReportsDropdown: $,
						poll: ee,
						post: te,
						postId: se,
						redditStyle: re,
						scrollerItemRef: oe,
						showBulkActionCheckbox: ae,
						showEditFlair: ne,
						showMedia: ie,
						subredditOrProfile: de,
						toggleCheckbox: ce,
						userIsOp: le,
						shouldShowGalleryTileOption: me
					} = this.props, pe = re ? void 0 : I, ue = this.props.crosspost || void 0, xe = Object(A.a)(Q), be = Object(L.a)(Q), he = Object(T.a)(Q), Ce = Y && A.a, Oe = !!te.media && te.media.type === N.o.RTJSON, Pe = le && Oe, fe = i && !ie, ve = !!te.media && Object(N.G)(te.media), ye = {
						flairStyleTemplate: pe,
						post: te,
						inSubredditOrProfile: i,
						isCurrentUserProfilePost: D,
						isOverlay: Z,
						shouldShowSubscribeButton: !(H && G),
						subredditOrProfile: de
					}, Ee = Object(a.t)(te, J), {
						source: ge
					} = Ee, ke = o.a.createElement(P.a, {
						className: Object(n.a)(V.a.classicPostStyles, F.a.postContainer, Object(R.a)(this.props), _ ? F.a.mFirst : void 0, e),
						isOverlay: Z,
						style: {
							...Object(R.d)(this.props),
							...Object(R.b)(this.props.flairStyleTemplate)
						},
						post: te,
						onClick: q,
						eventFactory: f
					}, o.a.createElement(E.a, {
						model: te,
						handleVote: s,
						showBulkActionCheckbox: ae,
						isCheckboxSelected: B,
						toggleCheckbox: ce,
						flairStyleTemplate: pe,
						redditStyle: re,
						subreddit: de,
						postId: se
					}), o.a.createElement(O.a, {
						"data-click-id": "background",
						flairStyleTemplate: pe
					}, o.a.createElement(p.a, {
						className: F.a.eventMeta,
						post: te
					}), o.a.createElement("div", {
						className: F.a.mainBody
					}, o.a.createElement("div", {
						className: fe ? F.a.expandoContainer : F.a.thumbnailContainer
					}, !fe && o.a.createElement(w.a, {
						className: F.a.classicThumbnail,
						crosspost: ue && te,
						isMeta: te.isMeta,
						post: ue || te,
						redditStyle: re,
						templatePlaceholderImage: pe && pe.postPlaceholderImage,
						removeLink: ve
					}), o.a.createElement(u.a, {
						crosspost: ue,
						className: F.a.rightExpando,
						isExpanded: !!r,
						post: te,
						useMediaIcons: !1
					})), o.a.createElement("div", {
						className: Object(n.a)(F.a.content, {
							[F.a.showBulkActionCheckbox]: ae
						}),
						"data-click-id": "body"
					}, o.a.createElement(g.c, {
						className: ee ? F.a.titleWithPoll : void 0,
						format: M,
						poll: ee,
						post: te,
						redditStyle: re,
						size: g.b.Medium,
						titleColor: pe && pe.postTitleColor,
						isOverlay: Z
					}, te.source && !ue && o.a.createElement(S.a, {
						href: te.source.url,
						isSponsored: te.isSponsored,
						postId: te.id,
						source: te.source
					}, Object(d.a)(te))), o.a.createElement(v.a, U({
						key: "PostMeta"
					}, ye)), Y && xe && Object(C.c)(te) && o.a.createElement(h.a, {
						onIgnoreReports: X,
						reportable: te
					}), te.isSponsored && ge && ge.url && o.a.createElement(c.a, {
						className: F.a.adLinkWrapper
					}, o.a.createElement(l.a, {
						post: te,
						adLinkContent: Ee
					})), o.a.createElement("div", {
						className: F.a.flatlistContainer
					}, o.a.createElement(u.a, {
						className: F.a.leftExpando,
						crosspost: ue,
						isExpanded: !!r,
						post: te,
						useMediaIcons: !1
					}), o.a.createElement(m.a, {
						className: F.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: pe,
						model: te,
						onVoteClick: s
					}), o.a.createElement(x.a, {
						className: F.a.flatlistSeparator
					}), o.a.createElement(x.c, {
						className: F.a.flatlist,
						currentUser: t,
						hasModFlairPerms: be,
						hasModPostPerms: xe,
						hasModFullPerms: he,
						hostPostData: W,
						isOverlay: !!Z,
						modModeEnabled: Y,
						onIgnoreReports: X,
						onOpenReportsDropdown: $,
						post: te,
						showEditPost: Pe,
						showEditFlair: ne,
						tooltipType: Z ? k.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(y.b)({
							editPost: !Ce,
							save: !Ce,
							hide: !Ce,
							report: !Ce
						})
					})), o.a.createElement(b.d, null))), z(te, oe, r, me, K)));
					return o.a.createElement(j.b, null, ke)
				}
			}
			const z = (e, t, s, r, a) => s ? e.crosspostRootId ? o.a.createElement("div", {
					className: F.a.crosspostMediaWrapper
				}, H(e, t, r, a)) : H(e, t, r, a) : null,
				H = (e, t, s, r) => o.a.createElement(f.a, {
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
				K = Object(i.a)(D),
				G = Object(M.b)(Object(I.a)(K));
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
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
				f = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				E = s("./src/reddit/constants/componentTestIds.ts"),
				g = s("./src/reddit/controls/OutboundLink/index.tsx"),
				k = s("./src/reddit/components/PostTopMeta/index.tsx"),
				j = s("./src/reddit/components/AuthorLink/index.tsx"),
				S = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				N = s("./src/reddit/components/UserIcon/index.tsx"),
				w = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				I = s.n(_);
			var M = e => a.a.createElement(o.Fragment, null, a.a.createElement(N.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: I.a.userIcon,
					omitResponsivePresenceWrapper: !0
				}), a.a.createElement(j.a, {
					className: I.a.authorLink,
					"data-click-id": "user",
					author: e.author
				}, `u/${e.author}`), a.a.createElement(w.a, {
					isSmall: !0,
					className: I.a.metaSeparator
				}), a.a.createElement(S.a, {
					adHeaderVariant: e.adHeaderVariant,
					greyTextColor: e.greyTextColor
				})),
				L = s("./src/lib/classNames/index.ts"),
				T = s("./src/reddit/components/Media/index.tsx"),
				A = s("./src/reddit/components/PlayButton/index.tsx"),
				R = s("./src/reddit/components/Thumbnail/index.tsx"),
				W = s("./src/reddit/icons/svgs/Close/index.tsx");

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const B = ({
				classNameInnerThumbnail: e,
				closeVideo: t,
				crosspost: s,
				forceShowNSFW: r,
				isMeta: o,
				post: n,
				redditStyle: i,
				scrollerItemRef: d,
				thumbnailContainerClassName: c,
				url: l,
				usePreview: m,
				mediaExpanded: p
			}) => n && n.media ? p && Object(u.K)(n.media) ? a.a.createElement("div", null, a.a.createElement(W.a, {
				className: I.a.close,
				onClick: t
			}), a.a.createElement(T.a, {
				className: I.a.videoPlayer,
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
				className: Object(L.a)(I.a.thumbnail, e),
				containerClassName: c,
				crosspost: s,
				forceShowNSFW: r,
				isMeta: o,
				post: n,
				redditStyle: i,
				removeLink: Object(u.K)(n.media),
				url: Object(u.K)(n.media) ? void 0 : l,
				usePreview: m
			}) : a.a.createElement(R.a, {
				className: Object(L.a)(I.a.thumbnail, e),
				containerClassName: c,
				crosspost: s,
				forceShowNSFW: r,
				isMeta: o,
				post: n,
				redditStyle: i,
				usePreview: m
			});
			var F = e => {
					const [t, s] = Object(o.useState)(!1), {
						isVideo: r,
						className: n
					} = e, i = r && !t;
					return a.a.createElement("div", {
						className: t ? Object(L.a)(I.a.videoContainer, n) : Object(L.a)(I.a.thumbnailContainer, n),
						onClick: i ? () => s(!0) : void 0
					}, a.a.createElement(B, V({}, e, {
						mediaExpanded: t,
						closeVideo: () => s(!1)
					})), i && a.a.createElement(A.a, {
						className: I.a.playContainer,
						playIconClassName: I.a.playIcon,
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
						post: o
					} = this.props;
					let n = Object(m.a)(o);
					return o.media && Object(u.E)(o.media) && (null === (s = null === (t = null === (e = null == o ? void 0 : o.media) || void 0 === e ? void 0 : e.gallery) || void 0 === t ? void 0 : t.items[0]) || void 0 === s ? void 0 : s.displayUrl) && (n = o.media.gallery.items[0].displayUrl), o.source && o.isLocked ? a.a.createElement(g.b, {
						className: I.a.styledOutboundLink,
						href: o.source.url,
						isSponsored: o.isSponsored,
						source: o.source
					}, n) : a.a.createElement(i.a, {
						className: I.a.styledOutboundLink,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": E.a,
						to: this.props.isOverlay ? Object(p.a)(o.permalink, !0) : Object(z.b)(o.permalink),
						onClick: this.props.onClick
					}, r.fbt._("Join the conversation", null, {
						hk: "45BFWV"
					}))
				}
				render() {
					const {
						adHeaderVariant: e,
						eventFactory: t,
						isExpanded: s,
						formatTitle: r,
						iconUrl: o,
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
						className: I.a.commentsSpacer
					}), a.a.createElement(v.a, {
						className: I.a.postContainer,
						isOverlay: i,
						post: l,
						eventFactory: t
					}, a.a.createElement(f.a, {
						"data-click-id": "background"
					}, a.a.createElement("div", {
						className: I.a.mainBody
					}, a.a.createElement("div", {
						className: I.a.content,
						"data-click-id": "body"
					}, a.a.createElement(M, {
						author: l.author,
						iconUrl: o,
						adHeaderVariant: e,
						greyTextColor: Object(k.e)(this.props)
					}), a.a.createElement("div", {
						className: I.a.contentRow
					}, !(n && !x) && a.a.createElement(F, {
						isMeta: l.isMeta,
						post: l,
						redditStyle: m,
						isVideo: l.media && Object(u.K)(l.media),
						scrollerItemRef: p
					}), a.a.createElement("div", {
						className: I.a.contentColumn
					}, a.a.createElement(y.c, {
						format: r,
						outboundLinkClassName: I.a.outboundLink,
						className: I.a.postTitle,
						poll: d,
						post: l,
						redditStyle: m,
						size: 3,
						isOverlay: i,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), l.permalink && a.a.createElement(b.a, {
						className: I.a.adLinkWrapper
					}, this.checkCommentsActive(), l.callToAction && l.source && l.source.url && a.a.createElement(C.a, {
						href: l.source.url.replace(c.a.redditUrl, ""),
						isSponsored: l.isSponsored,
						source: l.source
					}, l.callToAction)))), a.a.createElement("div", {
						className: I.a.spacer
					}), a.a.createElement(P.d, null))), Object(O.renderMedia)(l, p, s, !1, !1))), a.a.createElement("div", {
						className: I.a.commentsSpacer
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
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(n.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: r,
					onClick: n,
					post: d,
					redditStyle: m,
					theme: p,
					...u
				} = e;
				return o.a.createElement("div", l({
					className: Object(a.a)(c.a.backgroundWrapper, s),
					style: Object(i.c)(r, e),
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
			var r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
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
						const r = s === i.a.upvoted ? Object(a.fb)(t) : Object(a.w)(t);
						e(r)
					},
					onIgnoreReports: () => e(Object(a.bb)(t)),
					onOpenReportsDropdown: t => e(Object(n.h)({
						tooltipId: t
					}))
				}),
				P = Object(r.b)(() => Object(o.c)(C), O, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(P(Object(d.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
						let r = m.get(s);
						if (void 0 === r) {
							const a = new RegExp(`(\\b${t}\\b)`, "gi"),
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
			var r = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
				x = e => Object(r.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: x(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				C = e => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.cc284b4fc094cf035bfb.js.map