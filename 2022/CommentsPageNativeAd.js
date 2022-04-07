// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.3d2c86fb6c128ed4a626.js
// Retrieved at 4/7/2022, 12:10:04 PM by Reddit Dataminer v1.0.0
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/config.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/getShortenedLink.ts"),
				u = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/actions/profile/index.ts"),
				h = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				C = s("./src/reddit/components/BlankPost/index.tsx"),
				v = s("./src/reddit/components/CallToActionButton/index.tsx"),
				E = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.tsx"),
				k = s("./src/reddit/components/PostTitle/index.tsx"),
				y = s("./src/reddit/constants/componentTestIds.ts"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				j = s("./src/reddit/helpers/search/renderMedia.tsx"),
				N = s("./src/reddit/components/PostTopMeta/index.tsx"),
				P = s("./src/reddit/components/AuthorLink/index.tsx"),
				S = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				_ = s("./src/reddit/components/UserIcon/index.tsx"),
				w = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				I = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				T = s.n(I);
			var A = e => a.a.createElement("div", {
					className: T.a.adTopMetaContainer
				}, a.a.createElement(_.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: T.a.userIcon,
					omitResponsivePresenceWrapper: !0
				}), a.a.createElement(P.a, {
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
				L = s("./src/reddit/components/Media/index.tsx"),
				W = s("./src/reddit/components/PlayButton/index.tsx"),
				M = s("./src/reddit/components/Thumbnail/index.tsx"),
				V = s("./src/reddit/icons/svgs/Close/index.tsx");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const R = e => {
				let {
					classNameInnerThumbnail: t,
					closeVideo: s,
					crosspost: r,
					forceShowNSFW: o,
					isMeta: n,
					post: d,
					redditStyle: i,
					scrollerItemRef: c,
					thumbnailContainerClassName: m,
					url: p,
					usePreview: u,
					mediaExpanded: b
				} = e;
				return d && d.media ? b && Object(x.N)(d.media) ? a.a.createElement("div", null, a.a.createElement(V.a, {
					className: T.a.close,
					onClick: s
				}), a.a.createElement(L.a, {
					className: T.a.videoPlayer,
					post: d,
					isNotCardView: !0,
					autoplayPref: !0,
					isExpando: !1,
					shouldLoad: !0,
					shouldPause: !1,
					shouldStop: !1,
					isListing: !1,
					showCentered: !1,
					scrollerItemRef: c
				})) : a.a.createElement(M.a, {
					className: Object(l.a)(T.a.thumbnail, t),
					containerClassName: m,
					crosspost: r,
					forceShowNSFW: o,
					isMeta: n,
					post: d,
					redditStyle: i,
					removeLink: Object(x.N)(d.media),
					url: Object(x.N)(d.media) ? void 0 : p,
					usePreview: u
				}) : a.a.createElement(M.a, {
					className: Object(l.a)(T.a.thumbnail, t),
					containerClassName: m,
					crosspost: r,
					forceShowNSFW: o,
					isMeta: n,
					post: d,
					redditStyle: i,
					usePreview: u
				})
			};
			var U = e => {
					const {
						isVideo: t,
						className: s,
						mediaExpanded: r,
						setExpandedState: o
					} = e, n = t && !r;
					return a.a.createElement("div", {
						className: r ? Object(l.a)(T.a.videoContainer, s) : Object(l.a)(T.a.thumbnailContainer, s),
						onClick: n ? () => o(!0) : void 0
					}, a.a.createElement(R, B({}, e, {
						mediaExpanded: r,
						closeVideo: () => o(!1)
					})), n && a.a.createElement(W.a, {
						className: T.a.playContainer,
						playIconClassName: T.a.playIcon,
						onClick: () => o(!0)
					}))
				},
				D = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				F = s("./src/reddit/helpers/path/index.ts"),
				H = s("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				z = s("./src/reddit/selectors/profile.ts");
			const Z = Object(n.b)(() => Object(i.c)({
				iconUrl: (e, t) => {
					const s = Object(z.j)(e, {
						profileName: t.post.author
					});
					if (s && s.icon) return s.icon.url
				},
				adHeaderVariant: e => Object(H.a)(e)
			}), (e, t) => ({
				fetchProfile: () => {
					e(Object(b.d)(t.post.author))
				}
			}));
			class K extends a.a.Component {
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
						post: r
					} = this.props;
					let o = Object(p.a)(r);
					return r.media && Object(x.E)(r.media) && (null === (s = null === (t = null === (e = null == r ? void 0 : r.media) || void 0 === e ? void 0 : e.gallery) || void 0 === t ? void 0 : t.items[0]) || void 0 === s ? void 0 : s.displayUrl) && (o = r.media.gallery.items[0].displayUrl), r.source ? a.a.createElement(f.b, {
						className: T.a.styledOutboundLink,
						href: r.source.url,
						postId: r.id,
						isSponsored: r.isSponsored,
						source: r.source
					}, o) : null
				}
				setExpandedState(e) {
					this.setState({
						mediaExpanded: e
					})
				}
				render() {
					const {
						adHeaderVariant: e,
						eventFactory: t,
						isExpanded: s,
						formatTitle: o,
						iconUrl: n,
						inSubredditOrProfile: i,
						isOverlay: m,
						poll: p,
						post: b,
						redditStyle: f,
						scrollerItemRef: P,
						showMedia: S
					} = this.props;
					return b.isBlank ? a.a.createElement(C.default, {
						postId: b.id
					}) : a.a.createElement("div", null, a.a.createElement("div", {
						className: T.a.commentsSpacer
					}), a.a.createElement(O.a, {
						className: T.a.postContainer,
						isOverlay: m,
						post: b,
						eventFactory: t
					}, a.a.createElement(g.a, {
						"data-click-id": "background"
					}, a.a.createElement("div", {
						className: T.a.mainBody
					}, a.a.createElement("div", {
						className: T.a.content,
						"data-click-id": "body"
					}, a.a.createElement(A, {
						author: b.author,
						iconUrl: n,
						adHeaderVariant: e,
						greyTextColor: Object(N.e)(this.props)
					}), a.a.createElement("div", {
						className: Object(l.a)(T.a.contentRow, {
							[T.a.contentRowExpanded]: this.state.mediaExpanded
						})
					}, !(i && !S) && a.a.createElement(U, {
						isMeta: b.isMeta,
						post: b,
						redditStyle: f,
						isVideo: b.media && Object(x.N)(b.media),
						scrollerItemRef: P,
						mediaExpanded: this.state.mediaExpanded,
						setExpandedState: e => this.setState({
							mediaExpanded: e
						})
					}), a.a.createElement("div", {
						className: T.a.contentColumn
					}, a.a.createElement(k.c, {
						format: o,
						outboundLinkClassName: T.a.outboundLink,
						className: T.a.postTitle,
						poll: p,
						post: b,
						redditStyle: f,
						size: 3,
						isOverlay: m,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), !b.isLocked && a.a.createElement(d.a, {
						className: T.a.styledOutboundLink,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": y.a,
						to: this.props.isOverlay ? Object(u.a)(b.permalink, !0) : Object(F.b)(b.permalink),
						onClick: this.props.onClick
					}, r.fbt._("Join the conversation", null, {
						hk: "45BFWV"
					})), b.permalink && a.a.createElement(h.a, {
						className: T.a.adLinkWrapper
					}, this.checkCommentsActive(), b.callToAction && b.source && b.source.url && a.a.createElement(v.a, {
						href: b.source.url.replace(c.a.redditUrl, ""),
						isSponsored: b.isSponsored,
						source: b.source,
						postId: b.id
					}, b.callToAction)))), a.a.createElement("div", {
						className: T.a.spacer
					}), a.a.createElement(E.d, null))), Object(j.a)(b, T.a, P, s, !1, !1))), a.a.createElement("div", {
						className: T.a.commentsSpacer
					}))
				}
			}
			const G = Object(m.a)(K);
			t.default = Object(D.a)(Z(G))
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
				d = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				i = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(i);

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
					post: i,
					redditStyle: m,
					theme: p,
					...u
				} = e;
				return o.a.createElement("div", l({
					className: Object(a.a)(c.a.backgroundWrapper, s),
					style: Object(d.c)(r, e),
					onClick: n
				}, u), t)
			})
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/post.ts"),
				n = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				i = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/showPromotedCTA.ts"),
				C = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: C.b,
					activeModalId: m.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: b.l,
					isExpanded: b.m,
					isLoggedIn: C.P,
					showPromotedCTA: h.a,
					moderatorPermissions: u.m,
					modModeEnabled: c.T,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: x.a,
					showMedia: c.s,
					flairStyleTemplate: c.V
				},
				E = Object(r.b)(() => Object(o.c)(v), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const r = t === d.a.upvoted ? Object(a.kb)(s) : Object(a.w)(s);
							e(r)
						},
						onIgnoreReports: () => e(Object(a.gb)(s)),
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
			t.a = e => Object(l.b)(E(Object(i.b)(e)))
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/PostMedia/index.tsx");
			const n = (e, t, s, r, a, n) => r ? e.crosspostRootId ? o.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, d(e, s, a, n)) : d(e, s, a, n) : null,
				d = (e, t, s, r) => o.a.createElement(a.a, {
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
				})
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
				d = s("./src/reddit/models/Theme/index.ts"),
				i = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				p = e => Object(d.g)(Object(i.a)(e).post, Object(i.a)(e).backgroundImage, Object(i.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(d.g)(e.postBackgroundColor || Object(i.a)(t).post, e.postBackgroundImage, Object(i.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(d.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				x = e => Object(r.k)(.2, e),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.3d2c86fb6c128ed4a626.js.map