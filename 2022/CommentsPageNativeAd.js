// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.99fe65c44c1c7da329c1.js
// Retrieved at 2/3/2022, 10:20:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPageNativeAd"], {
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
				commentsSpacer: "_29lagmmeH1Fb03mLJEq0Dt",
				adTopMetaContainer: "_25eZSyZijmT4ZHDguHkHy-"
			}
		},
		"./src/reddit/components/CommentsPageNativeAd/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/config.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/getShortenedLink.ts"),
				p = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/actions/profile/index.ts"),
				h = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				b = s("./src/reddit/components/BlankPost/index.tsx"),
				v = s("./src/reddit/components/CallToActionButton/index.tsx"),
				C = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				N = s("./src/reddit/components/PostContainer/index.tsx"),
				O = s("./src/reddit/components/PostTitle/index.tsx"),
				y = s("./src/reddit/constants/componentTestIds.ts"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				P = s("./src/reddit/helpers/search/renderMedia.tsx"),
				j = s("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = s("./src/reddit/components/AuthorLink/index.tsx"),
				S = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				k = s("./src/reddit/components/UserIcon/index.tsx"),
				g = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				w = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				L = s.n(w);
			var A = e => r.a.createElement("div", {
					className: L.a.adTopMetaContainer
				}, r.a.createElement(k.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: L.a.userIcon,
					omitResponsivePresenceWrapper: !0
				}), r.a.createElement(_.a, {
					className: L.a.authorLink,
					"data-click-id": "user",
					author: e.author
				}, `u/${e.author}`), r.a.createElement(g.a, {
					isSmall: !0,
					className: L.a.metaSeparator
				}), r.a.createElement(S.a, {
					adHeaderVariant: e.adHeaderVariant,
					greyTextColor: e.greyTextColor
				})),
				T = s("./src/lib/classNames/index.ts"),
				I = s("./src/reddit/components/Media/index.tsx"),
				M = s("./src/reddit/components/PlayButton/index.tsx"),
				V = s("./src/reddit/components/Thumbnail/index.tsx"),
				W = s("./src/reddit/icons/svgs/Close/index.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const U = ({
				classNameInnerThumbnail: e,
				closeVideo: t,
				crosspost: s,
				forceShowNSFW: a,
				isMeta: o,
				post: n,
				redditStyle: i,
				scrollerItemRef: d,
				thumbnailContainerClassName: c,
				url: l,
				usePreview: m,
				mediaExpanded: p
			}) => n && n.media ? p && Object(u.N)(n.media) ? r.a.createElement("div", null, r.a.createElement(W.a, {
				className: L.a.close,
				onClick: t
			}), r.a.createElement(I.a, {
				className: L.a.videoPlayer,
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
			})) : r.a.createElement(V.a, {
				className: Object(T.a)(L.a.thumbnail, e),
				containerClassName: c,
				crosspost: s,
				forceShowNSFW: a,
				isMeta: o,
				post: n,
				redditStyle: i,
				removeLink: Object(u.N)(n.media),
				url: Object(u.N)(n.media) ? void 0 : l,
				usePreview: m
			}) : r.a.createElement(V.a, {
				className: Object(T.a)(L.a.thumbnail, e),
				containerClassName: c,
				crosspost: s,
				forceShowNSFW: a,
				isMeta: o,
				post: n,
				redditStyle: i,
				usePreview: m
			});
			var F = e => {
					const [t, s] = Object(o.useState)(!1), {
						isVideo: a,
						className: n
					} = e, i = a && !t;
					return r.a.createElement("div", {
						className: t ? Object(T.a)(L.a.videoContainer, n) : Object(T.a)(L.a.thumbnailContainer, n),
						onClick: i ? () => s(!0) : void 0
					}, r.a.createElement(U, R({}, e, {
						mediaExpanded: t,
						closeVideo: () => s(!1)
					})), i && r.a.createElement(M.a, {
						className: L.a.playContainer,
						playIconClassName: L.a.playIcon,
						onClick: () => s(!0)
					}))
				},
				D = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				H = s("./src/reddit/helpers/path/index.ts"),
				B = s("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				Z = s("./src/reddit/selectors/profile.ts");
			const z = Object(n.b)(() => Object(d.c)({
				iconUrl: (e, t) => {
					const s = Object(Z.j)(e, {
						profileName: t.post.author
					});
					if (s && s.icon) return s.icon.url
				},
				adHeaderVariant: e => Object(B.a)(e)
			}), (e, t) => ({
				fetchProfile: () => {
					e(Object(x.d)(t.post.author))
				}
			}));
			class K extends r.a.Component {
				componentDidMount() {
					this.props.iconUrl || this.props.fetchProfile()
				}
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				checkCommentsActive() {
					var e, t, s;
					const {
						post: a
					} = this.props;
					let o = Object(m.a)(a);
					return a.media && Object(u.E)(a.media) && (null === (s = null === (t = null === (e = null == a ? void 0 : a.media) || void 0 === e ? void 0 : e.gallery) || void 0 === t ? void 0 : t.items[0]) || void 0 === s ? void 0 : s.displayUrl) && (o = a.media.gallery.items[0].displayUrl), a.source ? r.a.createElement(f.b, {
						className: L.a.styledOutboundLink,
						href: a.source.url,
						postId: a.id,
						isSponsored: a.isSponsored,
						source: a.source
					}, o) : null
				}
				render() {
					const {
						adHeaderVariant: e,
						eventFactory: t,
						isExpanded: s,
						formatTitle: o,
						iconUrl: n,
						inSubredditOrProfile: d,
						isOverlay: l,
						poll: m,
						post: x,
						redditStyle: f,
						scrollerItemRef: _,
						showMedia: S
					} = this.props;
					return x.isBlank ? r.a.createElement(b.default, {
						postId: x.id
					}) : r.a.createElement("div", null, r.a.createElement("div", {
						className: L.a.commentsSpacer
					}), r.a.createElement(N.a, {
						className: L.a.postContainer,
						isOverlay: l,
						post: x,
						eventFactory: t
					}, r.a.createElement(E.a, {
						"data-click-id": "background"
					}, r.a.createElement("div", {
						className: L.a.mainBody
					}, r.a.createElement("div", {
						className: L.a.content,
						"data-click-id": "body"
					}, r.a.createElement(A, {
						author: x.author,
						iconUrl: n,
						adHeaderVariant: e,
						greyTextColor: Object(j.e)(this.props)
					}), r.a.createElement("div", {
						className: L.a.contentRow
					}, !(d && !S) && r.a.createElement(F, {
						isMeta: x.isMeta,
						post: x,
						redditStyle: f,
						isVideo: x.media && Object(u.N)(x.media),
						scrollerItemRef: _
					}), r.a.createElement("div", {
						className: L.a.contentColumn
					}, r.a.createElement(O.c, {
						format: o,
						outboundLinkClassName: L.a.outboundLink,
						className: L.a.postTitle,
						poll: m,
						post: x,
						redditStyle: f,
						size: 3,
						isOverlay: l,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), !x.isLocked && r.a.createElement(i.a, {
						className: L.a.styledOutboundLink,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": y.a,
						to: this.props.isOverlay ? Object(p.a)(x.permalink, !0) : Object(H.b)(x.permalink),
						onClick: this.props.onClick
					}, a.fbt._("Join the conversation", null, {
						hk: "45BFWV"
					})), x.permalink && r.a.createElement(h.a, {
						className: L.a.adLinkWrapper
					}, this.checkCommentsActive(), x.callToAction && x.source && x.source.url && r.a.createElement(v.a, {
						href: x.source.url.replace(c.a.redditUrl, ""),
						isSponsored: x.isSponsored,
						source: x.source,
						postId: x.id
					}, x.callToAction)))), r.a.createElement("div", {
						className: L.a.spacer
					}), r.a.createElement(C.d, null))), Object(P.a)(x, L.a, _, s, !1, !1))), r.a.createElement("div", {
						className: L.a.commentsSpacer
					}))
				}
			}
			const G = Object(l.a)(K);
			t.default = Object(D.a)(z(G))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				n = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/postFlair.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/showPromotedCTA.ts"),
				v = s("./src/reddit/selectors/user.ts");
			const C = {
					autoplayPref: v.b,
					activeModalId: m.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: v.K,
					showPromotedCTA: b.a,
					moderatorPermissions: u.l,
					modModeEnabled: c.T,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: x.a,
					showMedia: c.s,
					flairStyleTemplate: c.V
				},
				E = Object(a.b)(() => Object(o.c)(C), (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const a = s === i.a.upvoted ? Object(r.jb)(t) : Object(r.w)(t);
						e(a)
					},
					onIgnoreReports: () => e(Object(r.fb)(t)),
					onOpenReportsDropdown: t => e(Object(n.h)({
						tooltipId: t
					}))
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(E(Object(d.b)(e)))
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const n = (e, t, s, a, r, n) => a ? e.crosspostRootId ? o.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, r, n)) : i(e, s, r, n) : null,
				i = (e, t, s, a) => o.a.createElement(r.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: a,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.99fe65c44c1c7da329c1.js.map