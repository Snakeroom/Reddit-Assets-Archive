// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.ea75d2c4fdf8b6ae9389.js
// Retrieved at 10/27/2022, 3:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPageNativeAd"], {
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "BlankPost", (function() {
				return l
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/reddit/components/AdViewability/index.tsx"),
				n = s("./src/reddit/connectors/PostViewable/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/contexts/Post/index.tsx");
			const c = Object(n.a)(null),
				l = e => {
					let {
						className: t,
						post: s
					} = e;
					return s.isSponsored ? r.a.createElement(o.a, {
						post: s,
						trackDisplay: !0
					}, r.a.createElement("div", {
						className: Object(i.a)(t, `Blank ${s.id}`)
					})) : null
				};
			t.default = Object(d.b)(c(l))
		},
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
				N = s("./src/reddit/components/PostContainer/index.tsx"),
				f = s("./src/reddit/components/PostTitle/index.tsx"),
				j = s("./src/reddit/constants/componentTestIds.ts"),
				P = s("./src/reddit/controls/OutboundLink/index.tsx"),
				_ = s("./src/reddit/helpers/search/renderMedia.tsx"),
				y = s("./src/reddit/components/PostTopMeta/index.tsx"),
				S = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				k = s("./src/reddit/components/AuthorLink/index.tsx"),
				w = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				g = s("./src/reddit/components/UserIcon/index.tsx"),
				L = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				A = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				T = s.n(A);
			var I = e => o.a.createElement("div", {
					className: T.a.adTopMetaContainer,
					"data-adclicklocation": S.a.TOP_BAR
				}, o.a.createElement(g.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: T.a.userIcon,
					omitResponsivePresenceWrapper: !0
				}), o.a.createElement(k.a, {
					className: T.a.authorLink,
					"data-click-id": "user",
					author: e.author
				}, `u/${e.author}`), o.a.createElement(L.a, {
					isSmall: !0,
					className: T.a.metaSeparator
				}), o.a.createElement(w.a, {
					greyTextColor: e.greyTextColor
				})),
				M = s("./src/reddit/components/Media/index.tsx"),
				W = s("./src/reddit/components/PlayButton/index.tsx"),
				R = s("./src/reddit/components/Thumbnail/index.tsx"),
				U = s("./src/reddit/icons/svgs/Close/index.tsx");

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const D = e => {
				let {
					classNameInnerThumbnail: t,
					closeVideo: s,
					crosspost: a,
					forceShowNSFW: r,
					isMeta: n,
					post: i,
					redditStyle: d,
					scrollerItemRef: c,
					thumbnailContainerClassName: m,
					url: p,
					usePreview: u,
					mediaExpanded: h
				} = e;
				return i && i.media ? h && Object(x.N)(i.media) ? o.a.createElement("div", null, o.a.createElement(U.a, {
					className: T.a.close,
					onClick: s
				}), o.a.createElement(M.a, {
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
				})) : o.a.createElement(R.b, {
					className: Object(l.a)(T.a.thumbnail, t),
					containerClassName: m,
					crosspost: a,
					forceShowNSFW: r,
					isMeta: n,
					post: i,
					redditStyle: d,
					removeLink: Object(x.N)(i.media),
					url: Object(x.N)(i.media) ? void 0 : p,
					usePreview: u
				}) : o.a.createElement(R.b, {
					className: Object(l.a)(T.a.thumbnail, t),
					containerClassName: m,
					crosspost: a,
					forceShowNSFW: r,
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
						setExpandedState: r
					} = e, n = t && !a;
					return o.a.createElement("div", {
						className: a ? Object(l.a)(T.a.videoContainer, s) : Object(l.a)(T.a.thumbnailContainer, s, {
							"cursor-pointer": t
						}),
						onClick: n ? () => r(!0) : void 0,
						"data-adclicklocation": S.a.MEDIA,
						"data-testid": "comments-page-ad-thumbnail"
					}, o.a.createElement(D, V({}, e, {
						mediaExpanded: a,
						closeVideo: () => r(!1)
					})), n && o.a.createElement(W.a, {
						className: T.a.playContainer,
						playIconClassName: T.a.playIcon,
						onClick: () => r(!0)
					}))
				},
				B = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				z = s("./src/reddit/helpers/path/index.ts"),
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
			class H extends o.a.Component {
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
						showCTAExperiment: r
					} = this.props;
					if (!a.source) return null;
					let n = Object(p.a)(a);
					a.media && Object(x.E)(a.media) && (null === (s = null === (t = null === (e = null == a ? void 0 : a.media) || void 0 === e ? void 0 : e.gallery) || void 0 === t ? void 0 : t.items[0]) || void 0 === s ? void 0 : s.displayUrl) && (n = a.media.gallery.items[0].displayUrl);
					const i = Object(l.a)(T.a.styledOutboundLink, {
						[T.a.ctaExperiment]: r
					});
					return o.a.createElement(P.b, {
						className: i,
						href: a.source.url,
						postId: a.id,
						isSponsored: a.isSponsored,
						source: a.source,
						"data-adclicklocation": S.a.CTA_URL
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
						iconUrl: r,
						inSubredditOrProfile: n,
						isOverlay: d,
						poll: m,
						post: p,
						redditStyle: h,
						scrollerItemRef: b,
						showMedia: P,
						showCTAExperiment: S
					} = this.props;
					if (p.isBlank) return o.a.createElement(v.default, {
						postId: p.id
					});
					const k = Object(l.a)(T.a.styledOutboundLink, {
						[T.a.ctaExperiment]: S
					});
					return o.a.createElement("div", null, o.a.createElement("div", {
						className: T.a.commentsSpacer
					}), o.a.createElement(N.b, {
						isOverlay: d,
						post: p,
						eventFactory: e
					}, o.a.createElement("div", {
						className: T.a.mainBody
					}, o.a.createElement("div", {
						className: T.a.content,
						"data-click-id": "body"
					}, o.a.createElement(I, {
						author: p.author,
						iconUrl: r,
						greyTextColor: Object(y.h)(this.props)
					}), o.a.createElement("div", {
						className: Object(l.a)(T.a.contentRow, {
							[T.a.contentRowExpanded]: this.state.mediaExpanded
						})
					}, !(n && !P) && o.a.createElement(F, {
						isMeta: p.isMeta,
						post: p,
						redditStyle: h,
						isVideo: p.media && Object(x.N)(p.media),
						scrollerItemRef: b,
						mediaExpanded: this.state.mediaExpanded,
						setExpandedState: e => this.setState({
							mediaExpanded: e
						})
					}), o.a.createElement("div", {
						className: T.a.contentColumn
					}, o.a.createElement(f.c, {
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
					}), !p.isLocked && o.a.createElement(i.a, {
						className: k,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": j.a,
						to: this.props.isOverlay ? Object(u.a)(p.permalink, !0) : Object(z.b)(p.permalink),
						onClick: this.props.onClick
					}, a.fbt._("Join the conversation", null, {
						hk: "45BFWV"
					})), p.permalink && o.a.createElement(E.a, {
						className: T.a.adLinkWrapper,
						ctaExperimentDesign: S && "conversation"
					}, this.renderSourceLink(), p.callToAction && p.source && p.source.url && o.a.createElement(C.a, {
						href: p.source.url.replace(c.a.redditUrl, ""),
						isSponsored: p.isSponsored,
						source: p.source,
						postId: p.id,
						showCTAExperiment: S
					}, p.callToAction)))), o.a.createElement("div", {
						className: T.a.spacer
					}), o.a.createElement(O.d, null))), Object(_.a)(p, T.a, b, t, !1, !1)), o.a.createElement("div", {
						className: T.a.commentsSpacer
					}))
				}
			}
			const K = Object(m.a)(H);
			t.default = Object(B.a)(G(K))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
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
					modModeEnabled: c.U,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: c.s,
					flairStyleTemplate: c.W,
					showCTAExperimentDesign: u.a
				},
				O = Object(a.b)(() => Object(r.c)(C), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const a = t === i.a.upvoted ? Object(o.jb)(s) : Object(o.v)(s);
							e(a)
						},
						onIgnoreReports: () => e(Object(o.fb)(s)),
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
				r = s.n(a),
				o = s("./src/reddit/components/PostMedia/index.tsx");
			const n = (e, t, s, a, o, n) => a ? e.crosspostRootId ? r.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, o, n)) : i(e, s, o, n) : null,
				i = (e, t, s, a) => r.a.createElement(o.a, {
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
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const n = Object(a.a)(e => Object(o.c)(e, {
					experimentName: r.qg,
					experimentEligibilitySelector: o.a
				}), e => e),
				i = Object(a.a)(n, e => e === r.hg)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.ea75d2c4fdf8b6ae9389.js.map