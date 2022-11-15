// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.53bf6d70e7c58e87ada5.js
// Retrieved at 11/14/2022, 7:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPageNativeAd"], {
		"./src/reddit/components/CommentsPageNativeAd/index.m.less": function(e, t, s) {
			e.exports = {
				adLinkWrapper: "_3RRfgmIQPBtEH8V5AVgQh7",
				ctaExperiment: "_3vMqJnMkzVL1GoTLIUWrPY",
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
				h = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/actions/profile/index.ts"),
				E = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				v = s("./src/reddit/components/BlankPost/index.tsx"),
				C = s("./src/reddit/components/CallToActionButton/index.tsx"),
				O = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				f = s("./src/reddit/components/PostContainer/index.tsx"),
				_ = s("./src/reddit/components/PostTitle/index.tsx"),
				y = s("./src/reddit/constants/componentTestIds.ts"),
				P = s("./src/reddit/controls/OutboundLink/index.tsx"),
				S = s("./src/reddit/helpers/search/renderMedia.tsx"),
				N = s("./src/reddit/components/PostTopMeta/index.tsx"),
				j = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				k = s("./src/reddit/components/AuthorLink/index.tsx"),
				w = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				L = s("./src/reddit/components/UserIcon/index.tsx"),
				g = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				A = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				T = s.n(A);
			var I = e => r.a.createElement("div", {
					className: T.a.adTopMetaContainer,
					"data-adclicklocation": j.a.TOP_BAR
				}, r.a.createElement(L.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: T.a.userIcon,
					omitResponsivePresenceWrapper: !0
				}), r.a.createElement(k.a, {
					className: T.a.authorLink,
					"data-click-id": "user",
					author: e.author
				}, `u/${e.author}`), r.a.createElement(g.a, {
					isSmall: !0,
					className: T.a.metaSeparator
				}), r.a.createElement(w.a, {
					greyTextColor: e.greyTextColor
				})),
				M = s("./src/reddit/components/Media/index.tsx"),
				W = s("./src/reddit/components/PlayButton/index.tsx"),
				R = s("./src/reddit/components/Thumbnail/index.tsx"),
				U = s("./src/reddit/icons/svgs/Close/index.tsx");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const F = e => {
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
				return i && i.media ? h && Object(x.O)(i.media) ? r.a.createElement("div", null, r.a.createElement(U.a, {
					className: T.a.close,
					onClick: s
				}), r.a.createElement(M.a, {
					className: T.a.videoPlayer,
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
				})) : r.a.createElement(R.b, {
					className: Object(l.a)(T.a.thumbnail, t),
					containerClassName: m,
					crosspost: a,
					forceShowNSFW: o,
					isMeta: n,
					post: i,
					redditStyle: d,
					removeLink: Object(x.O)(i.media),
					url: Object(x.O)(i.media) ? void 0 : p,
					usePreview: u
				}) : r.a.createElement(R.b, {
					className: Object(l.a)(T.a.thumbnail, t),
					containerClassName: m,
					crosspost: a,
					forceShowNSFW: o,
					isMeta: n,
					post: i,
					redditStyle: d,
					usePreview: u
				})
			};
			var V = e => {
					const {
						isVideo: t,
						className: s,
						mediaExpanded: a,
						setExpandedState: o
					} = e, n = t && !a;
					return r.a.createElement("div", {
						className: a ? Object(l.a)(T.a.videoContainer, s) : Object(l.a)(T.a.thumbnailContainer, s, {
							"cursor-pointer": t
						}),
						onClick: n ? () => o(!0) : void 0,
						"data-adclicklocation": j.a.MEDIA,
						"data-testid": "comments-page-ad-thumbnail"
					}, r.a.createElement(F, D({}, e, {
						mediaExpanded: a,
						closeVideo: () => o(!1)
					})), n && r.a.createElement(W.a, {
						className: T.a.playContainer,
						playIconClassName: T.a.playIcon,
						onClick: () => o(!0)
					}))
				},
				z = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				B = s("./src/reddit/helpers/path/index.ts"),
				Z = s("./src/reddit/selectors/profile.ts");
			const G = Object(n.b)(() => Object(d.c)({
				iconUrl: (e, t) => {
					const s = Object(Z.k)(e, {
						profileName: t.post.author
					});
					if (s && s.icon) return s.icon.url
				},
				showCTAExperiment: h.a
			}), (e, t) => ({
				fetchProfile: () => {
					e(Object(b.d)(t.post.author))
				}
			}));
			class H extends r.a.Component {
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
				renderSourceLink() {
					var e, t, s;
					const {
						post: a,
						showCTAExperiment: o
					} = this.props;
					if (!a.source) return null;
					let n = Object(p.a)(a);
					a.media && Object(x.F)(a.media) && (null === (s = null === (t = null === (e = null == a ? void 0 : a.media) || void 0 === e ? void 0 : e.gallery) || void 0 === t ? void 0 : t.items[0]) || void 0 === s ? void 0 : s.displayUrl) && (n = a.media.gallery.items[0].displayUrl);
					const i = Object(l.a)(T.a.styledOutboundLink, {
						[T.a.ctaExperiment]: o
					});
					return r.a.createElement(P.b, {
						className: i,
						href: a.source.url,
						postId: a.id,
						isSponsored: a.isSponsored,
						source: a.source,
						"data-adclicklocation": j.a.CTA_URL
					}, n)
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
						scrollerItemRef: b,
						showMedia: P,
						showCTAExperiment: j
					} = this.props;
					if (p.isBlank) return r.a.createElement(v.default, {
						postId: p.id
					});
					const k = Object(l.a)(T.a.styledOutboundLink, {
						[T.a.ctaExperiment]: j
					});
					return r.a.createElement("div", null, r.a.createElement("div", {
						className: T.a.commentsSpacer
					}), r.a.createElement(f.b, {
						isOverlay: d,
						post: p,
						eventFactory: e
					}, r.a.createElement("div", {
						className: T.a.mainBody
					}, r.a.createElement("div", {
						className: T.a.content,
						"data-click-id": "body"
					}, r.a.createElement(I, {
						author: p.author,
						iconUrl: o,
						greyTextColor: Object(N.h)(this.props)
					}), r.a.createElement("div", {
						className: Object(l.a)(T.a.contentRow, {
							[T.a.contentRowExpanded]: this.state.mediaExpanded
						})
					}, !(n && !P) && r.a.createElement(V, {
						isMeta: p.isMeta,
						post: p,
						redditStyle: h,
						isVideo: p.media && Object(x.O)(p.media),
						scrollerItemRef: b,
						mediaExpanded: this.state.mediaExpanded,
						setExpandedState: e => this.setState({
							mediaExpanded: e
						})
					}), r.a.createElement("div", {
						className: T.a.contentColumn
					}, r.a.createElement(_.c, {
						format: s,
						outboundLinkClassName: T.a.outboundLink,
						className: T.a.postTitle,
						poll: m,
						post: p,
						redditStyle: h,
						size: 3,
						isOverlay: d,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), !p.isLocked && r.a.createElement(i.a, {
						className: k,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": y.a,
						to: this.props.isOverlay ? Object(u.a)(p.permalink, !0) : Object(B.b)(p.permalink),
						onClick: this.props.onClick
					}, a.fbt._("Join the conversation", null, {
						hk: "45BFWV"
					})), p.permalink && r.a.createElement(E.a, {
						className: T.a.adLinkWrapper,
						ctaExperimentDesign: j && "conversation"
					}, this.renderSourceLink(), p.callToAction && p.source && p.source.url && r.a.createElement(C.a, {
						href: p.source.url.replace(c.a.redditUrl, ""),
						isSponsored: p.isSponsored,
						source: p.source,
						postId: p.id,
						showCTAExperiment: j
					}, p.callToAction)))), r.a.createElement("div", {
						className: T.a.spacer
					}), r.a.createElement(O.d, null))), Object(S.a)(p, T.a, b, t, !1, !1)), r.a.createElement("div", {
						className: T.a.commentsSpacer
					}))
				}
			}
			const K = Object(m.a)(H);
			t.default = Object(z.a)(G(K))
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
				u = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				x = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/showPromotedCTA.ts"),
				v = s("./src/reddit/selectors/user.ts");
			const C = {
					autoplayPref: v.c,
					activeModalId: m.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: b.l,
					isExpanded: b.m,
					isLoggedIn: v.R,
					showPromotedCTA: E.a,
					moderatorPermissions: x.m,
					modModeEnabled: c.W,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: c.t,
					flairStyleTemplate: c.Y,
					showCTAExperimentDesign: u.a
				},
				O = Object(a.b)(() => Object(o.c)(C), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const a = t === i.a.upvoted ? Object(r.jb)(s) : Object(r.v)(s);
							e(a)
						},
						onIgnoreReports: () => e(Object(r.fb)(s)),
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
			t.a = e => Object(l.b)(O(Object(d.b)(e)))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.53bf6d70e7c58e87ada5.js.map