// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.665421c731a0a65b2743.js
// Retrieved at 6/28/2021, 7:10:04 PM by Reddit Dataminer v1.0.0
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
				v = s("./src/reddit/components/PostMedia/index.tsx"),
				y = s("./src/reddit/components/PostMeta/index.tsx"),
				E = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				f = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				g = s("./src/reddit/components/PostTitle/index.tsx"),
				k = s("./src/reddit/components/PostTopMeta/index.tsx"),
				j = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				S = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				_ = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				M = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				L = s("./src/reddit/contexts/Post/index.tsx"),
				T = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				I = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				A = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				W = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				R = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				V = s.n(R),
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
						eventFactory: v,
						first: _,
						flairStyleTemplate: M,
						formatTitle: L,
						hostPostData: R,
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
						redditStyle: oe,
						scrollerItemRef: re,
						showBulkActionCheckbox: ae,
						showEditFlair: ne,
						showMedia: ie,
						subredditOrProfile: de,
						toggleCheckbox: ce,
						userIsOp: le,
						shouldShowGalleryTileOption: me
					} = this.props, pe = oe ? void 0 : M, ue = this.props.crosspost || void 0, xe = Object(A.a)(Q), be = Object(T.a)(Q), he = Object(I.a)(Q), Ce = Y && A.a, Oe = !!te.media && te.media.type === N.o.RTJSON, Pe = le && Oe, ve = i && !ie, ye = !!te.media && Object(N.G)(te.media), Ee = {
						flairStyleTemplate: pe,
						post: te,
						inSubredditOrProfile: i,
						isCurrentUserProfilePost: D,
						isOverlay: Z,
						shouldShowSubscribeButton: !(H && G),
						subredditOrProfile: de
					}, fe = Object(a.t)(te, J), {
						source: ge
					} = fe, ke = r.a.createElement(P.a, {
						className: Object(n.a)(V.a.classicPostStyles, F.a.postContainer, Object(W.a)(this.props), _ ? F.a.mFirst : void 0, e),
						isOverlay: Z,
						style: {
							...Object(W.d)(this.props),
							...Object(W.b)(this.props.flairStyleTemplate)
						},
						post: te,
						onClick: q,
						eventFactory: v
					}, r.a.createElement(f.a, {
						model: te,
						handleVote: s,
						showBulkActionCheckbox: ae,
						isCheckboxSelected: B,
						toggleCheckbox: ce,
						flairStyleTemplate: pe,
						redditStyle: oe,
						subreddit: de,
						postId: se
					}), r.a.createElement(O.a, {
						"data-click-id": "background",
						flairStyleTemplate: pe
					}, r.a.createElement(p.a, {
						className: F.a.eventMeta,
						post: te
					}), r.a.createElement("div", {
						className: F.a.mainBody
					}, r.a.createElement("div", {
						className: ve ? F.a.expandoContainer : F.a.thumbnailContainer
					}, !ve && r.a.createElement(w.a, {
						className: F.a.classicThumbnail,
						crosspost: ue && te,
						isMeta: te.isMeta,
						post: ue || te,
						redditStyle: oe,
						templatePlaceholderImage: pe && pe.postPlaceholderImage,
						removeLink: ye
					}), r.a.createElement(u.a, {
						crosspost: ue,
						className: F.a.rightExpando,
						isExpanded: !!o,
						post: te,
						useMediaIcons: !1
					})), r.a.createElement("div", {
						className: Object(n.a)(F.a.content, {
							[F.a.showBulkActionCheckbox]: ae
						}),
						"data-click-id": "body"
					}, r.a.createElement(g.c, {
						className: ee ? F.a.titleWithPoll : void 0,
						format: L,
						poll: ee,
						post: te,
						redditStyle: oe,
						size: g.b.Medium,
						titleColor: pe && pe.postTitleColor,
						isOverlay: Z
					}, te.source && !ue && r.a.createElement(S.a, {
						href: te.source.url,
						isSponsored: te.isSponsored,
						postId: te.id,
						source: te.source
					}, Object(d.a)(te))), r.a.createElement(y.a, U({
						key: "PostMeta"
					}, Ee)), Y && xe && Object(C.c)(te) && r.a.createElement(h.a, {
						onIgnoreReports: X,
						reportable: te
					}), te.isSponsored && ge && ge.url && r.a.createElement(c.a, {
						className: F.a.adLinkWrapper
					}, r.a.createElement(l.a, {
						post: te,
						adLinkContent: fe
					})), r.a.createElement("div", {
						className: F.a.flatlistContainer
					}, r.a.createElement(u.a, {
						className: F.a.leftExpando,
						crosspost: ue,
						isExpanded: !!o,
						post: te,
						useMediaIcons: !1
					}), r.a.createElement(m.a, {
						className: F.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: pe,
						model: te,
						onVoteClick: s
					}), r.a.createElement(x.a, {
						className: F.a.flatlistSeparator
					}), r.a.createElement(x.c, {
						className: F.a.flatlist,
						currentUser: t,
						hasModFlairPerms: be,
						hasModPostPerms: xe,
						hasModFullPerms: he,
						hostPostData: R,
						isOverlay: !!Z,
						modModeEnabled: Y,
						onIgnoreReports: X,
						onOpenReportsDropdown: $,
						post: te,
						showEditPost: Pe,
						showEditFlair: ne,
						tooltipType: Z ? k.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(E.b)({
							editPost: !Ce,
							save: !Ce,
							hide: !Ce,
							report: !Ce
						})
					})), r.a.createElement(b.d, null))), z(te, re, o, me, K)));
					return r.a.createElement(j.b, null, ke)
				}
			}
			const z = (e, t, s, o, a) => s ? e.crosspostRootId ? r.a.createElement("div", {
					className: F.a.crosspostMediaWrapper
				}, H(e, t, o, a)) : H(e, t, o, a) : null,
				H = (e, t, s, o) => r.a.createElement(v.a, {
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
				G = Object(L.b)(Object(M.a)(K));
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
				v = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.tsx"),
				E = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/constants/componentTestIds.ts"),
				g = s("./src/reddit/controls/OutboundLink/index.tsx"),
				k = s("./src/reddit/components/PostTopMeta/index.tsx"),
				j = s("./src/reddit/components/AuthorLink/index.tsx"),
				S = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				N = s("./src/reddit/components/UserIcon/index.tsx"),
				w = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				M = s.n(_);
			var L = e => a.a.createElement(r.Fragment, null, a.a.createElement(N.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: M.a.userIcon,
					omitResponsivePresenceWrapper: !0
				}), a.a.createElement(j.a, {
					className: M.a.authorLink,
					"data-click-id": "user",
					author: e.author
				}, `u/${e.author}`), a.a.createElement(w.a, {
					isSmall: !0,
					className: M.a.metaSeparator
				}), a.a.createElement(S.a, {
					adHeaderVariant: e.adHeaderVariant,
					greyTextColor: e.greyTextColor
				})),
				T = s("./src/lib/classNames/index.ts"),
				I = s("./src/reddit/components/Media/index.tsx"),
				A = s("./src/reddit/components/PlayButton/index.tsx"),
				W = s("./src/reddit/components/Thumbnail/index.tsx"),
				R = s("./src/reddit/icons/svgs/Close/index.tsx");

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
				thumbnailContainerClassName: d,
				url: c,
				usePreview: l,
				mediaExpanded: m
			}) => n && n.media ? m && Object(u.K)(n.media) ? a.a.createElement("div", null, a.a.createElement(R.a, {
				className: M.a.close,
				onClick: t
			}), a.a.createElement(I.a, {
				className: M.a.videoPlayer,
				post: n,
				isNotCardView: !0,
				autoplayPref: !0,
				isExpando: !1,
				shouldLoad: !0,
				shouldPause: !1,
				shouldStop: !1,
				isListing: !1,
				showCentered: !1
			})) : a.a.createElement(W.a, {
				className: Object(T.a)(M.a.thumbnail, e),
				containerClassName: d,
				crosspost: s,
				forceShowNSFW: o,
				isMeta: r,
				post: n,
				redditStyle: i,
				removeLink: Object(u.K)(n.media),
				url: Object(u.K)(n.media) ? void 0 : c,
				usePreview: l
			}) : a.a.createElement(W.a, {
				className: Object(T.a)(M.a.thumbnail, e),
				containerClassName: d,
				crosspost: s,
				forceShowNSFW: o,
				isMeta: r,
				post: n,
				redditStyle: i,
				usePreview: l
			});
			var F = e => {
					const [t, s] = Object(r.useState)(!1), {
						isVideo: o,
						className: n
					} = e, i = o && !t;
					return a.a.createElement("div", {
						className: t ? Object(T.a)(M.a.videoContainer, n) : Object(T.a)(M.a.thumbnailContainer, n),
						onClick: i ? () => s(!0) : void 0
					}, a.a.createElement(B, V({}, e, {
						mediaExpanded: t,
						closeVideo: () => s(!1)
					})), i && a.a.createElement(A.a, {
						className: M.a.playContainer,
						playIconClassName: M.a.playIcon,
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
						className: M.a.styledOutboundLink,
						href: r.source.url,
						isSponsored: r.isSponsored,
						source: r.source
					}, n) : a.a.createElement(i.a, {
						className: M.a.styledOutboundLink,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": f.a,
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
						className: M.a.commentsSpacer
					}), a.a.createElement(y.a, {
						className: M.a.postContainer,
						isOverlay: i,
						post: l,
						eventFactory: t
					}, a.a.createElement(v.a, {
						"data-click-id": "background"
					}, a.a.createElement("div", {
						className: M.a.mainBody
					}, a.a.createElement("div", {
						className: M.a.content,
						"data-click-id": "body"
					}, a.a.createElement(L, {
						author: l.author,
						iconUrl: r,
						adHeaderVariant: e,
						greyTextColor: Object(k.e)(this.props)
					}), a.a.createElement("div", {
						className: M.a.contentRow
					}, !(n && !x) && a.a.createElement(F, {
						isMeta: l.isMeta,
						post: l,
						redditStyle: m,
						isVideo: l.media && Object(u.K)(l.media)
					}), a.a.createElement("div", {
						className: M.a.contentColumn
					}, a.a.createElement(E.c, {
						format: o,
						outboundLinkClassName: M.a.outboundLink,
						className: M.a.postTitle,
						poll: d,
						post: l,
						redditStyle: m,
						size: 3,
						isOverlay: i,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), l.permalink && a.a.createElement(b.a, {
						className: M.a.adLinkWrapper
					}, this.checkCommentsActive(), l.callToAction && l.source && l.source.url && a.a.createElement(C.a, {
						href: l.source.url.replace(c.a.redditUrl, ""),
						isSponsored: l.isSponsored,
						source: l.source
					}, l.callToAction)))), a.a.createElement("div", {
						className: M.a.spacer
					}), a.a.createElement(P.d, null))), Object(O.renderMedia)(l, p, s, !1, !1))), a.a.createElement("div", {
						className: M.a.commentsSpacer
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.665421c731a0a65b2743.js.map