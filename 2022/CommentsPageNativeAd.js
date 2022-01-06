// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.4c1c51d76678c12746d3.js
// Retrieved at 1/6/2022, 12:50:04 PM by Reddit Dataminer v1.0.0
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
			s.r(t), s.d(t, "SearchResultsCommentsPageNativeAd", (function() {
				return J
			}));
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
				u = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/actions/profile/index.ts"),
				b = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				h = s("./src/reddit/components/BlankPost/index.tsx"),
				g = s("./src/reddit/components/CallToActionButton/index.tsx"),
				C = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				v = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				f = s("./src/reddit/components/PostContainer/index.tsx"),
				O = s("./src/reddit/components/PostTitle/index.tsx"),
				j = s("./src/reddit/constants/componentTestIds.ts"),
				y = s("./src/reddit/controls/OutboundLink/index.tsx"),
				k = s("./src/reddit/helpers/search/renderMedia.tsx"),
				E = s("./src/reddit/components/PostTopMeta/index.tsx"),
				N = s("./src/reddit/components/AuthorLink/index.tsx"),
				P = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				S = s("./src/reddit/components/UserIcon/index.tsx"),
				_ = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				w = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				A = s.n(w);
			var L = e => a.a.createElement("div", {
					className: A.a.adTopMetaContainer
				}, a.a.createElement(S.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: A.a.userIcon,
					omitResponsivePresenceWrapper: !0
				}), a.a.createElement(N.a, {
					className: A.a.authorLink,
					"data-click-id": "user",
					author: e.author
				}, `u/${e.author}`), a.a.createElement(_.a, {
					isSmall: !0,
					className: A.a.metaSeparator
				}), a.a.createElement(P.a, {
					adHeaderVariant: e.adHeaderVariant,
					greyTextColor: e.greyTextColor
				})),
				I = s("./src/lib/classNames/index.ts"),
				T = s("./src/reddit/components/Media/index.tsx"),
				W = s("./src/reddit/components/PlayButton/index.tsx"),
				M = s("./src/reddit/components/Thumbnail/index.tsx"),
				R = s("./src/reddit/icons/svgs/Close/index.tsx");

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
				scrollerItemRef: c,
				thumbnailContainerClassName: d,
				url: l,
				usePreview: m,
				mediaExpanded: p
			}) => n && n.media ? p && Object(u.N)(n.media) ? a.a.createElement("div", null, a.a.createElement(R.a, {
				className: A.a.close,
				onClick: t
			}), a.a.createElement(T.a, {
				className: A.a.videoPlayer,
				post: n,
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
				className: Object(I.a)(A.a.thumbnail, e),
				containerClassName: d,
				crosspost: s,
				forceShowNSFW: r,
				isMeta: o,
				post: n,
				redditStyle: i,
				removeLink: Object(u.N)(n.media),
				url: Object(u.N)(n.media) ? void 0 : l,
				usePreview: m
			}) : a.a.createElement(M.a, {
				className: Object(I.a)(A.a.thumbnail, e),
				containerClassName: d,
				crosspost: s,
				forceShowNSFW: r,
				isMeta: o,
				post: n,
				redditStyle: i,
				usePreview: m
			});
			var U = e => {
					const [t, s] = Object(o.useState)(!1), {
						isVideo: r,
						className: n
					} = e, i = r && !t;
					return a.a.createElement("div", {
						className: t ? Object(I.a)(A.a.videoContainer, n) : Object(I.a)(A.a.thumbnailContainer, n),
						onClick: i ? () => s(!0) : void 0
					}, a.a.createElement(B, V({}, e, {
						mediaExpanded: t,
						closeVideo: () => s(!1)
					})), i && a.a.createElement(W.a, {
						className: A.a.playContainer,
						playIconClassName: A.a.playIcon,
						onClick: () => s(!0)
					}))
				},
				F = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				H = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				D = s("./src/reddit/helpers/path/index.ts"),
				z = s("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				Z = s("./src/reddit/selectors/profile.ts");
			const K = Object(n.b)(() => Object(c.c)({
				iconUrl: (e, t) => {
					const s = Object(Z.j)(e, {
						profileName: t.post.author
					});
					if (s && s.icon) return s.icon.url
				},
				adHeaderVariant: e => Object(z.a)(e)
			}), (e, t) => ({
				fetchProfile: () => {
					e(Object(x.d)(t.post.author))
				}
			}));
			class G extends a.a.Component {
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
					let o = Object(m.a)(r);
					return r.media && Object(u.E)(r.media) && (null === (s = null === (t = null === (e = null == r ? void 0 : r.media) || void 0 === e ? void 0 : e.gallery) || void 0 === t ? void 0 : t.items[0]) || void 0 === s ? void 0 : s.displayUrl) && (o = r.media.gallery.items[0].displayUrl), r.source ? a.a.createElement(y.b, {
						className: A.a.styledOutboundLink,
						href: r.source.url,
						postId: r.id,
						isSponsored: r.isSponsored,
						source: r.source
					}, o) : null
				}
				render() {
					const {
						adHeaderVariant: e,
						eventFactory: t,
						isExpanded: s,
						formatTitle: o,
						iconUrl: n,
						inSubredditOrProfile: c,
						isOverlay: l,
						poll: m,
						post: x,
						redditStyle: y,
						scrollerItemRef: N,
						showMedia: P
					} = this.props;
					return x.isBlank ? a.a.createElement(h.default, {
						postId: x.id
					}) : a.a.createElement("div", null, a.a.createElement("div", {
						className: A.a.commentsSpacer
					}), a.a.createElement(f.a, {
						className: A.a.postContainer,
						isOverlay: l,
						post: x,
						eventFactory: t
					}, a.a.createElement(v.a, {
						"data-click-id": "background"
					}, a.a.createElement("div", {
						className: A.a.mainBody
					}, a.a.createElement("div", {
						className: A.a.content,
						"data-click-id": "body"
					}, a.a.createElement(L, {
						author: x.author,
						iconUrl: n,
						adHeaderVariant: e,
						greyTextColor: Object(E.e)(this.props)
					}), a.a.createElement("div", {
						className: A.a.contentRow
					}, !(c && !P) && a.a.createElement(U, {
						isMeta: x.isMeta,
						post: x,
						redditStyle: y,
						isVideo: x.media && Object(u.N)(x.media),
						scrollerItemRef: N
					}), a.a.createElement("div", {
						className: A.a.contentColumn
					}, a.a.createElement(O.c, {
						format: o,
						outboundLinkClassName: A.a.outboundLink,
						className: A.a.postTitle,
						poll: m,
						post: x,
						redditStyle: y,
						size: 3,
						isOverlay: l,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), !x.isLocked && a.a.createElement(i.a, {
						className: A.a.styledOutboundLink,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": j.a,
						to: this.props.isOverlay ? Object(p.a)(x.permalink, !0) : Object(D.b)(x.permalink),
						onClick: this.props.onClick
					}, r.fbt._("Join the conversation", null, {
						hk: "45BFWV"
					})), x.permalink && a.a.createElement(b.a, {
						className: A.a.adLinkWrapper
					}, this.checkCommentsActive(), x.callToAction && x.source && x.source.url && a.a.createElement(g.a, {
						href: x.source.url.replace(d.a.redditUrl, ""),
						isSponsored: x.isSponsored,
						source: x.source,
						postId: x.id
					}, x.callToAction)))), a.a.createElement("div", {
						className: A.a.spacer
					}), a.a.createElement(C.d, null))), Object(k.a)(x, A.a, N, s, !1, !1))), a.a.createElement("div", {
						className: A.a.commentsSpacer
					}))
				}
			}
			const Y = Object(l.a)(G),
				J = Object(H.a)(Y);
			t.default = Object(F.a)(K(Y))
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
			t.a = Object(n.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: r,
					onClick: n,
					post: c,
					redditStyle: m,
					theme: p,
					...u
				} = e;
				return o.a.createElement("div", l({
					className: Object(a.a)(d.a.backgroundWrapper, s),
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
				return v
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
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
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/showPromotedCTA.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const C = {
					autoplayPref: g.b,
					activeModalId: m.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: b.l,
					isExpanded: b.m,
					isLoggedIn: g.J,
					showPromotedCTA: h.a,
					moderatorPermissions: u.l,
					modModeEnabled: d.S,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: x.a,
					showMedia: d.s,
					flairStyleTemplate: d.U
				},
				v = (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const r = s === i.a.upvoted ? Object(a.jb)(t) : Object(a.w)(t);
						e(r)
					},
					onIgnoreReports: () => e(Object(a.fb)(t)),
					onOpenReportsDropdown: t => e(Object(n.h)({
						tooltipId: t
					}))
				}),
				f = Object(r.b)(() => Object(o.c)(C), v, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(f(Object(c.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				d = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(i.u)({
					searchQuery: i.Y
				}),
				m = Object(a.b)(() => Object(n.c)(d.c), d.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: Object(c.a)(s.searchQuery || "", e => o.a.createElement("em", {
						style: {
							fontWeight: 700
						}
					}, e), e => o.a.createElement("span", {
						style: {
							fontWeight: "normal"
						}
					}, e))
				}));
			t.a = e => l(m(e))
		},
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/lib/LRUCache/index.ts"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o);
			const n = new r.a(250),
				i = (e, t, s) => {
					const r = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const o = `${e.id}-${r}`;
						let i = n.get(o);
						if (void 0 === i) {
							const c = new RegExp(`(\\b${r}\\b)`, "gi"),
								d = e.title.split(c);
							i = s(a.a.createElement(a.a.Fragment, null, a.a.Children.toArray(d.map((e, s) => s % 2 != 0 ? t(e) : e)))), n.set(o, i)
						}
						return i
					}
				}
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
				}, i(e, s, a, n)) : i(e, s, a, n) : null,
				i = (e, t, s, r) => o.a.createElement(a.a, {
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
				return g
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
				x = e => Object(r.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: x(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.4c1c51d76678c12746d3.js.map