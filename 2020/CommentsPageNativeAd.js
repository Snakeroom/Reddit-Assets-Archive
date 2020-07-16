// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.ed3eb68c3792986ced43.js
// Retrieved at 7/16/2020, 2:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPageNativeAd"], {
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = s.n(r);
			const n = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = n
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (s[r[o]] = e[r[o]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return o.a.createElement(a.a, d({
					className: Object(n.a)(t, c.a.CallToActionButton, {
						[c.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return D
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/config.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/CallToActionButton/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				x = s("./src/reddit/components/Flatlist/index.tsx"),
				b = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/index.tsx"),
				O = s("./src/reddit/components/ModModeReports/helpers.ts"),
				f = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.tsx"),
				g = s("./src/reddit/components/PostMedia/index.tsx"),
				P = s("./src/reddit/components/PostMeta/index.tsx"),
				j = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				C = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				E = s("./src/reddit/components/PostTopMeta/index.tsx"),
				k = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				S = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				T = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				A = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				I = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				w = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				L = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				M = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				B = s.n(W),
				F = s("./src/reddit/components/ClassicPost/index.m.less"),
				R = s.n(F);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const U = 16;
			class z extends o.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: r,
						isMeta: i,
						inSubredditOrProfile: g,
						eventFactory: T,
						first: A,
						flairStyleTemplate: W,
						formatTitle: F,
						hostPostId: z,
						isCheckboxSelected: K,
						isCurrentUserProfilePost: H,
						isFrontpage: G,
						isLoggedIn: Z,
						isOverlay: Q,
						moderatorPermissions: J,
						modModeEnabled: Y,
						onClickPost: X,
						onIgnoreReports: q,
						onOpenReportsDropdown: $,
						poll: ee,
						post: te,
						redditStyle: se,
						scrollerItemRef: re,
						showBulkActionCheckbox: oe,
						showEditFlair: ne,
						showMedia: ae,
						subredditOrProfile: ie,
						toggleCheckbox: ce,
						userIsOp: de
					} = this.props, le = se ? void 0 : W, pe = this.props.crosspost || void 0, me = Object(L.a)(J), ue = Object(I.a)(J), xe = Object(w.a)(J), be = Y && L.a, he = !!te.media && te.media.type === N.o.RTJSON, Oe = de && he, fe = g && !ae, ye = !!te.media && Object(N.G)(te.media), ge = {
						flairStyleTemplate: le,
						post: te,
						inSubredditOrProfile: g,
						isCurrentUserProfilePost: H,
						isOverlay: Q,
						shouldShowSubscribeButton: !(G && Z),
						subredditOrProfile: ie
					}, Pe = o.a.createElement(y.a, {
						className: Object(a.a)(B.a.classicPostStyles, R.a.postContainer, Object(M.a)(this.props), A ? R.a.mFirst : void 0, e),
						isOverlay: Q,
						style: Object.assign({}, Object(M.d)(this.props), Object(M.b)(this.props.flairStyleTemplate)),
						post: te,
						onClick: X,
						eventFactory: T
					}, o.a.createElement(C.a, {
						model: te,
						handleVote: s,
						showBulkActionCheckbox: oe,
						isCheckboxSelected: K,
						toggleCheckbox: ce,
						flairStyleTemplate: le,
						redditStyle: se,
						subreddit: ie
					}), o.a.createElement(f.a, {
						"data-click-id": "background",
						flairStyleTemplate: le
					}, o.a.createElement(m.a, {
						className: R.a.eventMeta,
						post: te
					}), o.a.createElement("div", {
						className: R.a.mainBody
					}, o.a.createElement("div", {
						className: fe ? R.a.expandoContainer : R.a.thumbnailContainer
					}, !fe && o.a.createElement(_.a, {
						className: R.a.classicThumbnail,
						crosspost: pe && te,
						isMeta: i,
						post: pe || te,
						redditStyle: se,
						templatePlaceholderImage: le && le.postPlaceholderImage,
						removeLink: ye
					}), o.a.createElement(u.a, {
						crosspost: pe,
						className: R.a.rightExpando,
						isExpanded: !!r,
						post: te,
						useMediaIcons: !1
					})), o.a.createElement("div", {
						className: R.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(U, "px")
						}
					}, o.a.createElement(v.c, {
						className: ee ? R.a.titleWithPoll : void 0,
						format: F,
						poll: ee,
						post: te,
						redditStyle: se,
						size: v.b.Medium,
						titleColor: le && le.postTitleColor,
						isOverlay: Q
					}, te.source && !pe && o.a.createElement(S.a, {
						href: te.source.url,
						isSponsored: te.isSponsored,
						postId: te.id,
						source: te.source
					}, Object(c.a)(te))), o.a.createElement(P.a, V({
						key: "PostMeta"
					}, ge)), Y && me && Object(O.c)(te) && o.a.createElement(h.a, {
						onIgnoreReports: q,
						reportable: te
					}), o.a.createElement("div", {
						className: R.a.spacer
					}), te.source && te.source.url && te.isSponsored && o.a.createElement(d.a, {
						className: R.a.adLinkWrapper
					}, o.a.createElement(S.a, {
						href: te.source.url.replace(n.a.redditUrl, ""),
						isSponsored: te.isSponsored,
						postId: te.id,
						source: te.source
					}, te.source.displayText), te.callToAction && o.a.createElement(l.a, {
						href: te.source.url.replace(n.a.redditUrl, ""),
						isSponsored: te.isSponsored,
						postId: te.id,
						source: te.source
					}, te.callToAction)), o.a.createElement("div", {
						className: R.a.flatlistContainer
					}, o.a.createElement(u.a, {
						className: R.a.leftExpando,
						crosspost: pe,
						isExpanded: !!r,
						post: te,
						useMediaIcons: !1
					}), o.a.createElement(p.a, {
						className: R.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: le,
						model: te,
						onVoteClick: s
					}), o.a.createElement(x.a, {
						className: R.a.flatlistSeparator
					}), o.a.createElement(x.c, {
						className: R.a.flatlist,
						currentUser: t,
						hasModFlairPerms: ue,
						hasModPostPerms: me,
						hasModFullPerms: xe,
						hostPostId: z,
						isOverlay: !!Q,
						modModeEnabled: Y,
						onIgnoreReports: q,
						onOpenReportsDropdown: $,
						post: te,
						showEditPost: Oe,
						showEditFlair: ne,
						tooltipType: Q ? E.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(j.h)({
							editPost: !be,
							save: !be,
							hide: !be,
							report: !be
						})
					})), o.a.createElement(b.d, {
						postId: te.id
					}))), D(te, re, r)));
					return o.a.createElement(k.b, null, Pe)
				}
			}
			const D = (e, t, s) => s ? e.crosspostRootId ? o.a.createElement("div", {
					className: R.a.crosspostMediaWrapper
				}, K(e, t)) : K(e, t) : null,
				K = (e, t) => o.a.createElement(g.a, {
					isExpando: !0,
					isListing: !0,
					isNotCardView: !0,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					showFull: !0,
					showCentered: !0,
					post: e
				}),
				H = Object(i.a)(z),
				G = Object(A.a)(H);
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
				return Z
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/config.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/getShortenedLink.ts"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = s("./src/reddit/actions/profile/index.ts"),
				x = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				b = s("./src/reddit/components/BlankPost/index.tsx"),
				h = s("./src/reddit/components/CallToActionButton/index.tsx"),
				O = s("./src/reddit/components/ClassicPost/index.tsx"),
				f = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				P = s("./src/reddit/components/PostTitle/index.tsx"),
				j = s("./src/reddit/constants/componentTestIds.ts"),
				C = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/components/AuthorLink/index.tsx"),
				k = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				S = s("./src/reddit/components/UserIcon/index.tsx"),
				N = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				T = s.n(_);
			var A = e => n.a.createElement(o.Fragment, null, n.a.createElement(S.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: T.a.userIcon
				}), n.a.createElement(E.a, {
					className: T.a.authorLink,
					"data-click-id": "user",
					author: e.author
				}, "u/".concat(e.author)), n.a.createElement(N.a, {
					isSmall: !0,
					className: T.a.metaSeparator
				}), n.a.createElement(k.a, null)),
				I = s("./src/lib/classNames/index.ts"),
				w = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				L = s("./src/reddit/components/PlayButton/index.tsx"),
				M = s("./src/reddit/components/Thumbnail/index.tsx"),
				W = s("./src/reddit/icons/svgs/Close/index.tsx");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const F = e => {
				let {
					classNameInnerThumbnail: t,
					closeVideo: s,
					crosspost: r,
					forceShowNSFW: o,
					isMeta: a,
					post: i,
					redditStyle: c,
					templatePlaceholderImage: d,
					thumbnailContainerClassName: l,
					url: p,
					usePreview: m,
					mediaExpanded: u
				} = e;
				return i && i.media ? u && Object(v.K)(i.media) ? n.a.createElement("div", null, n.a.createElement(W.a, {
					className: T.a.close,
					onClick: s
				}), n.a.createElement(w.b, {
					className: T.a.videoPlayer,
					autoPlay: !0,
					isExpando: !1,
					shouldLoad: !0,
					shouldPause: !1,
					shouldStop: !1,
					hlsSource: i.media.hlsUrl,
					mpegDashSource: i.media.dashUrl,
					isGif: i.media.isGif,
					scrubberThumbSource: i.media.scrubberThumbSource,
					postId: i.id,
					callToActionSource: i.source || void 0,
					callToActionText: i.callToAction,
					isListing: !1,
					playFromStart: !0
				})) : n.a.createElement(M.a, {
					className: Object(I.a)(T.a.thumbnail, t),
					containerClassName: l,
					crosspost: r,
					forceShowNSFW: o,
					isMeta: a,
					post: i,
					redditStyle: c,
					removeLink: Object(v.K)(i.media),
					url: Object(v.K)(i.media) ? void 0 : p,
					usePreview: m
				}) : n.a.createElement(M.a, {
					className: Object(I.a)(T.a.thumbnail, t),
					containerClassName: l,
					crosspost: r,
					forceShowNSFW: o,
					isMeta: a,
					post: i,
					redditStyle: c,
					usePreview: m
				})
			};
			var R = e => {
					const [t, s] = Object(o.useState)(!1), {
						isVideo: r,
						className: a
					} = e, i = r && !t;
					return n.a.createElement("div", {
						className: t ? Object(I.a)(T.a.videoContainer, a) : Object(I.a)(T.a.thumbnailContainer, a),
						onClick: i ? () => s(!0) : void 0
					}, n.a.createElement(F, B({}, e, {
						mediaExpanded: t,
						closeVideo: () => s(!1)
					})), i && n.a.createElement(L.a, {
						className: T.a.playContainer,
						playIconClassName: T.a.playIcon,
						onClick: () => s(!0)
					}))
				},
				V = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				U = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				z = s("./src/reddit/helpers/path/index.ts"),
				D = s("./src/reddit/selectors/profile.ts");
			const K = Object(a.b)(() => Object(c.c)({
				iconUrl: (e, t) => {
					const s = Object(D.j)(e, {
						profileName: t.post.author
					});
					if (s && s.icon) return s.icon.url
				}
			}), (e, t) => ({
				fetchProfile: () => {
					e(Object(u.d)(t.post.author))
				}
			}));
			class H extends n.a.Component {
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
					return e.source && e.isLocked ? n.a.createElement(C.b, {
						className: T.a.styledOutboundLink,
						href: e.source.url,
						isSponsored: e.isSponsored,
						source: e.source
					}, Object(p.a)(e)) : n.a.createElement(i.a, {
						className: T.a.styledOutboundLink,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": j.a,
						to: this.props.isOverlay ? Object(m.a)(e.permalink, !0) : Object(z.b)(e.permalink),
						onClick: this.props.onClick
					}, r.fbt._("Join the conversation", null, {
						hk: "45BFWV"
					}))
				}
				renderAppropriateThumbnail() {
					const {
						inSubredditOrProfile: e,
						isMeta: t,
						post: s,
						redditStyle: r,
						showMedia: o
					} = this.props, a = !!s.media && Object(v.G)(s.media), {
						media: i
					} = s;
					if (!(e && !o)) return n.a.createElement(R, {
						isMeta: t,
						post: s,
						redditStyle: r,
						removeLink: a,
						isVideo: i && Object(v.K)(i)
					})
				}
				render() {
					const {
						eventFactory: e,
						isExpanded: t,
						formatTitle: s,
						isOverlay: r,
						poll: o,
						post: a,
						redditStyle: i,
						scrollerItemRef: c
					} = this.props;
					return a.isBlank ? n.a.createElement(b.default, {
						postId: a.id
					}) : n.a.createElement("div", null, n.a.createElement("div", {
						className: T.a.commentsSpacer
					}), n.a.createElement(g.a, {
						className: T.a.postContainer,
						isOverlay: r,
						post: a,
						eventFactory: e
					}, n.a.createElement(y.a, {
						"data-click-id": "background"
					}, n.a.createElement("div", {
						className: T.a.mainBody
					}, n.a.createElement("div", {
						className: T.a.content,
						"data-click-id": "body"
					}, n.a.createElement(A, {
						author: a.author,
						iconUrl: this.props.iconUrl
					}), n.a.createElement("div", {
						className: T.a.contentRow
					}, this.renderAppropriateThumbnail(), n.a.createElement("div", {
						className: T.a.contentColumn
					}, n.a.createElement(P.c, {
						format: s,
						outboundLinkClassName: T.a.outboundLink,
						className: T.a.postTitle,
						poll: o,
						post: a,
						redditStyle: i,
						size: 3,
						isOverlay: r,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), a.permalink && n.a.createElement(x.a, {
						className: T.a.adLinkWrapper
					}, this.checkCommentsActive(), a.callToAction && a.source && a.source.url && n.a.createElement(h.a, {
						href: a.source.url.replace(d.a.redditUrl, ""),
						isSponsored: a.isSponsored,
						source: a.source
					}, a.callToAction)))), n.a.createElement("div", {
						className: T.a.spacer
					}), n.a.createElement(f.d, {
						postId: a.id
					}))), Object(O.renderMedia)(a, c, t))), n.a.createElement("div", {
						className: T.a.commentsSpacer
					}))
				}
			}
			const G = Object(l.a)(H),
				Z = Object(U.a)(G);
			t.default = Object(V.a)(K(G))
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
			var p = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (s[r[o]] = e[r[o]])
				}
				return s
			};
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: r,
					onClick: a,
					post: c,
					redditStyle: m,
					theme: u
				} = e, x = p(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return o.a.createElement("div", l({
					className: Object(n.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(r, e),
					onClick: a
				}, x), t)
			})
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return h
			})), s.d(t, "b", (function() {
				return O
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/experiments/chatPost.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = {
					autoplayPref: b.b,
					activeModalId: l.a,
					crosspost: x.d,
					currentUser: b.i,
					isActive: x.j,
					isChatPostExperiment: p.d,
					isCurrentUserProfilePost: x.k,
					isExpanded: x.m,
					isLoggedIn: b.H,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(x.r)(e, s)
					},
					moderatorPermissions: m.i,
					modModeEnabled: d.P,
					post: x.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: u.a,
					showMedia: d.r,
					subredditOrProfile: x.bb,
					userIsOp: b.hb,
					flairStyleTemplate: d.R
				},
				O = (e, t) => {
					let {
						listingKey: s,
						listingName: r,
						postId: o
					} = t;
					return {
						handleVote: t => {
							const s = t === i.a.upvoted ? Object(n.db)(o) : Object(n.z)(o);
							e(s)
						},
						onIgnoreReports: () => e(Object(n.bb)(o)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				},
				f = Object(r.b)(() => Object(o.c)(h), O, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			t.a = e => f(Object(c.b)(e))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/LRUCache/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(c.t)({
					searchQuery: c.V
				}),
				p = new i.a(250),
				m = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let r = p.get(s);
						if (void 0 === r) {
							const n = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								a = e.title.split(n);
							for (let e = 1; e < a.length; e += 2) a[e] = o.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, a[e]);
							r = o.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, o.a.Children.toArray(a)), p.set(s, r)
						}
						return r
					}
				},
				u = Object(n.b)(() => Object(a.c)(d.c), d.b, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: m(s.searchQuery || "")
				}));
			t.a = e => l(u(e))
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return O
			}));
			var r = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				n = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const p = {},
				m = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
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
						background: m(t)
					}
				},
				x = e => Object(r.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: x(e.postBackgroundColor)
				} : p,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				O = e => {
					const t = Object(n.a)(Object(o.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		}
	}
]);
//# sourceMappingURL=CommentsPageNativeAd.ed3eb68c3792986ced43.js.map