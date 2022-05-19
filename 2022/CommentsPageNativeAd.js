// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.645810b45d55b8933cea.js
// Retrieved at 5/19/2022, 5:40:05 PM by Reddit Dataminer v1.0.0
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
				contentRowExpanded: "_25AY7y4SDTheyIwPVi59Cr",
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
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/getShortenedLink.ts"),
				u = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/actions/profile/index.ts"),
				b = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				E = s("./src/reddit/components/BlankPost/index.tsx"),
				v = s("./src/reddit/components/CallToActionButton/index.tsx"),
				C = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				N = s("./src/reddit/components/PostContainer/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				O = s("./src/reddit/constants/componentTestIds.ts"),
				P = s("./src/reddit/controls/OutboundLink/index.tsx"),
				S = s("./src/reddit/helpers/search/renderMedia.tsx"),
				f = s("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = s("./src/reddit/components/AuthorLink/index.tsx"),
				j = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				k = s("./src/reddit/components/UserIcon/index.tsx"),
				w = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				L = s.n(g);
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
				}, `u/${e.author}`), r.a.createElement(w.a, {
					isSmall: !0,
					className: L.a.metaSeparator
				}), r.a.createElement(j.a, {
					greyTextColor: e.greyTextColor
				})),
				T = s("./src/reddit/components/Media/index.tsx"),
				I = s("./src/reddit/components/PlayButton/index.tsx"),
				M = s("./src/reddit/components/Thumbnail/index.tsx"),
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
			const U = e => {
				let {
					classNameInnerThumbnail: t,
					closeVideo: s,
					crosspost: a,
					forceShowNSFW: o,
					isMeta: n,
					post: i,
					redditStyle: d,
					scrollerItemRef: c,
					thumbnailContainerClassName: m,
					url: p,
					usePreview: u,
					mediaExpanded: h
				} = e;
				return i && i.media ? h && Object(x.N)(i.media) ? r.a.createElement("div", null, r.a.createElement(W.a, {
					className: L.a.close,
					onClick: s
				}), r.a.createElement(T.a, {
					className: L.a.videoPlayer,
					post: i,
					isNotCardView: !0,
					autoplayPref: !0,
					isExpando: !1,
					shouldLoad: !0,
					shouldPause: !1,
					shouldStop: !1,
					isListing: !1,
					showCentered: !1,
					scrollerItemRef: c,
					isCommentsPage: !0
				})) : r.a.createElement(M.a, {
					className: Object(l.a)(L.a.thumbnail, t),
					containerClassName: m,
					crosspost: a,
					forceShowNSFW: o,
					isMeta: n,
					post: i,
					redditStyle: d,
					removeLink: Object(x.N)(i.media),
					url: Object(x.N)(i.media) ? void 0 : p,
					usePreview: u
				}) : r.a.createElement(M.a, {
					className: Object(l.a)(L.a.thumbnail, t),
					containerClassName: m,
					crosspost: a,
					forceShowNSFW: o,
					isMeta: n,
					post: i,
					redditStyle: d,
					usePreview: u
				})
			};
			var F = e => {
					const {
						isVideo: t,
						className: s,
						mediaExpanded: a,
						setExpandedState: o
					} = e, n = t && !a;
					return r.a.createElement("div", {
						className: a ? Object(l.a)(L.a.videoContainer, s) : Object(l.a)(L.a.thumbnailContainer, s),
						onClick: n ? () => o(!0) : void 0
					}, r.a.createElement(U, R({}, e, {
						mediaExpanded: a,
						closeVideo: () => o(!1)
					})), n && r.a.createElement(I.a, {
						className: L.a.playContainer,
						playIconClassName: L.a.playIcon,
						onClick: () => o(!0)
					}))
				},
				V = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				D = s("./src/reddit/helpers/path/index.ts"),
				Z = s("./src/reddit/selectors/profile.ts");
			const z = Object(n.b)(() => Object(d.c)({
				iconUrl: (e, t) => {
					const s = Object(Z.j)(e, {
						profileName: t.post.author
					});
					if (s && s.icon) return s.icon.url
				}
			}), (e, t) => ({
				fetchProfile: () => {
					e(Object(h.d)(t.post.author))
				}
			}));
			class B extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						mediaExpanded: !1
					}
				}
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
					let o = Object(p.a)(a);
					return a.media && Object(x.E)(a.media) && (null === (s = null === (t = null === (e = null == a ? void 0 : a.media) || void 0 === e ? void 0 : e.gallery) || void 0 === t ? void 0 : t.items[0]) || void 0 === s ? void 0 : s.displayUrl) && (o = a.media.gallery.items[0].displayUrl), a.source ? r.a.createElement(P.b, {
						className: L.a.styledOutboundLink,
						href: a.source.url,
						postId: a.id,
						isSponsored: a.isSponsored,
						source: a.source
					}, o) : null
				}
				setExpandedState(e) {
					this.setState({
						mediaExpanded: e
					})
				}
				render() {
					const {
						eventFactory: e,
						isExpanded: t,
						formatTitle: s,
						iconUrl: o,
						inSubredditOrProfile: n,
						isOverlay: d,
						poll: m,
						post: p,
						redditStyle: h,
						scrollerItemRef: P,
						showMedia: _
					} = this.props;
					return p.isBlank ? r.a.createElement(E.default, {
						postId: p.id
					}) : r.a.createElement("div", null, r.a.createElement("div", {
						className: L.a.commentsSpacer
					}), r.a.createElement(N.a, {
						className: L.a.postContainer,
						isOverlay: d,
						post: p,
						eventFactory: e
					}, r.a.createElement("div", {
						className: L.a.mainBody
					}, r.a.createElement("div", {
						className: L.a.content,
						"data-click-id": "body"
					}, r.a.createElement(A, {
						author: p.author,
						iconUrl: o,
						greyTextColor: Object(f.e)(this.props)
					}), r.a.createElement("div", {
						className: Object(l.a)(L.a.contentRow, {
							[L.a.contentRowExpanded]: this.state.mediaExpanded
						})
					}, !(n && !_) && r.a.createElement(F, {
						isMeta: p.isMeta,
						post: p,
						redditStyle: h,
						isVideo: p.media && Object(x.N)(p.media),
						scrollerItemRef: P,
						mediaExpanded: this.state.mediaExpanded,
						setExpandedState: e => this.setState({
							mediaExpanded: e
						})
					}), r.a.createElement("div", {
						className: L.a.contentColumn
					}, r.a.createElement(y.c, {
						format: s,
						outboundLinkClassName: L.a.outboundLink,
						className: L.a.postTitle,
						poll: m,
						post: p,
						redditStyle: h,
						size: 3,
						isOverlay: d,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), !p.isLocked && r.a.createElement(i.a, {
						className: L.a.styledOutboundLink,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": O.a,
						to: this.props.isOverlay ? Object(u.a)(p.permalink, !0) : Object(D.b)(p.permalink),
						onClick: this.props.onClick
					}, a.fbt._("Join the conversation", null, {
						hk: "45BFWV"
					})), p.permalink && r.a.createElement(b.a, {
						className: L.a.adLinkWrapper
					}, this.checkCommentsActive(), p.callToAction && p.source && p.source.url && r.a.createElement(v.a, {
						href: p.source.url.replace(c.a.redditUrl, ""),
						isSponsored: p.isSponsored,
						source: p.source,
						postId: p.id
					}, p.callToAction)))), r.a.createElement("div", {
						className: L.a.spacer
					}), r.a.createElement(C.d, null))), Object(S.a)(p, L.a, P, t, !1, !1)), r.a.createElement("div", {
						className: L.a.commentsSpacer
					}))
				}
			}
			const G = Object(m.a)(B);
			t.default = Object(V.a)(z(G))
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
				E = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: E.b,
					activeModalId: m.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: E.P,
					showPromotedCTA: b.a,
					moderatorPermissions: u.m,
					modModeEnabled: c.U,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: x.a,
					showMedia: c.s,
					flairStyleTemplate: c.W
				},
				C = Object(a.b)(() => Object(o.c)(v), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const a = t === i.a.upvoted ? Object(r.kb)(s) : Object(r.w)(s);
							e(a)
						},
						onIgnoreReports: () => e(Object(r.gb)(s)),
						onOpenReportsDropdown: t => e(Object(n.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(C(Object(d.b)(e)))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.645810b45d55b8933cea.js.map