// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.5a5c4810c97380884d3d.js
// Retrieved at 8/26/2020, 3:30:07 PM by Reddit Dataminer v1.0.0
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
			var o = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				r = s.n(o);
			const n = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = n
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: r
				} = e, {
					source: c,
					callToAction: l,
					caption: p
				} = t;
				return c && c.url ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: d.a.leftSideContent
				}, p && !r && n.a.createElement("span", {
					className: d.a.caption,
					title: p
				}, p), n.a.createElement(i.a, {
					href: c.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c,
					className: d.a.displayUrl
				}, c.displayText)), l && n.a.createElement(a.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c
				}, l)) : null
			}
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
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return r.a.createElement(a.a, d({
					className: Object(n.a)(t, c.a.CallToActionButton, {
						[c.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return z
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return Q
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
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
				C = s("./src/reddit/components/PostMeta/index.tsx"),
				j = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				P = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				E = s("./src/reddit/components/PostTopMeta/index.tsx"),
				k = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				S = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				L = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				_ = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				T = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				A = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				I = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				w = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				M = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				B = s.n(W),
				F = s("./src/reddit/components/ClassicPost/index.m.less"),
				R = s.n(F);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const V = 16;
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
						isMeta: i,
						inSubredditOrProfile: g,
						eventFactory: _,
						first: T,
						flairStyleTemplate: W,
						formatTitle: F,
						hostPostId: D,
						isCheckboxSelected: G,
						isCurrentUserProfilePost: H,
						isFrontpage: Q,
						isGalleryTileLayoutDefault: Z,
						isLoggedIn: K,
						isOverlay: Y,
						imageGalleryCurrentItem: q,
						moderatorPermissions: J,
						modModeEnabled: X,
						onClickPost: $,
						onIgnoreReports: ee,
						onOpenReportsDropdown: te,
						poll: se,
						post: oe,
						redditStyle: re,
						scrollerItemRef: ne,
						showBulkActionCheckbox: ae,
						showEditFlair: ie,
						showMedia: ce,
						subredditOrProfile: de,
						toggleCheckbox: le,
						userIsOp: pe,
						shouldShowGalleryTileOption: me
					} = this.props, ue = re ? void 0 : W, xe = this.props.crosspost || void 0, be = Object(w.a)(J), he = Object(A.a)(J), Oe = Object(I.a)(J), fe = X && w.a, ye = !!oe.media && oe.media.type === N.o.RTJSON, ge = pe && ye, Ce = g && !ce, je = !!oe.media && Object(N.H)(oe.media), Pe = {
						flairStyleTemplate: ue,
						post: oe,
						inSubredditOrProfile: g,
						isCurrentUserProfilePost: H,
						isOverlay: Y,
						shouldShowSubscribeButton: !(Q && K),
						subredditOrProfile: de
					}, ve = Object(n.getAdLinkContent)(oe, q), {
						source: Ee
					} = ve, ke = r.a.createElement(y.a, {
						className: Object(a.a)(B.a.classicPostStyles, R.a.postContainer, Object(M.a)(this.props), T ? R.a.mFirst : void 0, e),
						isOverlay: Y,
						style: Object.assign(Object.assign({}, Object(M.d)(this.props)), Object(M.b)(this.props.flairStyleTemplate)),
						post: oe,
						onClick: $,
						eventFactory: _
					}, r.a.createElement(P.a, {
						model: oe,
						handleVote: s,
						showBulkActionCheckbox: ae,
						isCheckboxSelected: G,
						toggleCheckbox: le,
						flairStyleTemplate: ue,
						redditStyle: re,
						subreddit: de
					}), r.a.createElement(f.a, {
						"data-click-id": "background",
						flairStyleTemplate: ue
					}, r.a.createElement(m.a, {
						className: R.a.eventMeta,
						post: oe
					}), r.a.createElement("div", {
						className: R.a.mainBody
					}, r.a.createElement("div", {
						className: Ce ? R.a.expandoContainer : R.a.thumbnailContainer
					}, !Ce && r.a.createElement(L.a, {
						className: R.a.classicThumbnail,
						crosspost: xe && oe,
						isMeta: i,
						post: xe || oe,
						redditStyle: re,
						templatePlaceholderImage: ue && ue.postPlaceholderImage,
						removeLink: je
					}), r.a.createElement(u.a, {
						crosspost: xe,
						className: R.a.rightExpando,
						isExpanded: !!o,
						post: oe,
						useMediaIcons: !1
					})), r.a.createElement("div", {
						className: R.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(V, "px")
						}
					}, r.a.createElement(v.c, {
						className: se ? R.a.titleWithPoll : void 0,
						format: F,
						poll: se,
						post: oe,
						redditStyle: re,
						size: v.b.Medium,
						titleColor: ue && ue.postTitleColor,
						isOverlay: Y
					}, oe.source && !xe && r.a.createElement(S.a, {
						href: oe.source.url,
						isSponsored: oe.isSponsored,
						postId: oe.id,
						source: oe.source
					}, Object(c.a)(oe))), r.a.createElement(C.a, U({
						key: "PostMeta"
					}, Pe)), X && be && Object(O.c)(oe) && r.a.createElement(h.a, {
						onIgnoreReports: ee,
						reportable: oe
					}), r.a.createElement("div", {
						className: R.a.spacer
					}), oe.isSponsored && Ee && Ee.url && r.a.createElement(d.a, {
						className: R.a.adLinkWrapper
					}, r.a.createElement(l.a, {
						post: oe,
						adLinkContent: ve
					})), r.a.createElement("div", {
						className: R.a.flatlistContainer
					}, r.a.createElement(u.a, {
						className: R.a.leftExpando,
						crosspost: xe,
						isExpanded: !!o,
						post: oe,
						useMediaIcons: !1
					}), r.a.createElement(p.a, {
						className: R.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ue,
						model: oe,
						onVoteClick: s
					}), r.a.createElement(x.a, {
						className: R.a.flatlistSeparator
					}), r.a.createElement(x.c, {
						className: R.a.flatlist,
						currentUser: t,
						hasModFlairPerms: he,
						hasModPostPerms: be,
						hasModFullPerms: Oe,
						hostPostId: D,
						isOverlay: !!Y,
						modModeEnabled: X,
						onIgnoreReports: ee,
						onOpenReportsDropdown: te,
						post: oe,
						showEditPost: ge,
						showEditFlair: ie,
						tooltipType: Y ? E.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(j.h)({
							editPost: !fe,
							save: !fe,
							hide: !fe,
							report: !fe
						})
					})), r.a.createElement(b.d, {
						postId: oe.id
					}))), z(oe, ne, o, me, Z)));
					return r.a.createElement(k.b, null, ke)
				}
			}
			const z = (e, t, s, o, n) => s ? e.crosspostRootId ? r.a.createElement("div", {
					className: R.a.crosspostMediaWrapper
				}, G(e, t, o, n)) : G(e, t, o, n) : null,
				G = (e, t, s, o) => r.a.createElement(g.a, {
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
				H = Object(i.a)(D),
				Q = Object(T.a)(H);
			t.default = Object(_.a)(H)
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
				C = s("./src/reddit/components/PostTitle/index.tsx"),
				j = s("./src/reddit/constants/componentTestIds.ts"),
				P = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/components/AuthorLink/index.tsx"),
				k = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				S = s("./src/reddit/components/UserIcon/index.tsx"),
				N = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				L = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				_ = s.n(L);
			var T = e => n.a.createElement(r.Fragment, null, n.a.createElement(S.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: _.a.userIcon
				}), n.a.createElement(E.a, {
					className: _.a.authorLink,
					"data-click-id": "user",
					author: e.author
				}, "u/".concat(e.author)), n.a.createElement(N.a, {
					isSmall: !0,
					className: _.a.metaSeparator
				}), n.a.createElement(k.a, null)),
				A = s("./src/lib/classNames/index.ts"),
				I = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				w = s("./src/reddit/components/PlayButton/index.tsx"),
				M = s("./src/reddit/components/Thumbnail/index.tsx"),
				W = s("./src/reddit/icons/svgs/Close/index.tsx");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const F = e => {
				let {
					classNameInnerThumbnail: t,
					closeVideo: s,
					crosspost: o,
					forceShowNSFW: r,
					isMeta: a,
					post: i,
					redditStyle: c,
					templatePlaceholderImage: d,
					thumbnailContainerClassName: l,
					url: p,
					usePreview: m,
					mediaExpanded: u
				} = e;
				return i && i.media ? u && Object(v.L)(i.media) ? n.a.createElement("div", null, n.a.createElement(W.a, {
					className: _.a.close,
					onClick: s
				}), n.a.createElement(I.b, {
					className: _.a.videoPlayer,
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
					className: Object(A.a)(_.a.thumbnail, t),
					containerClassName: l,
					crosspost: o,
					forceShowNSFW: r,
					isMeta: a,
					post: i,
					redditStyle: c,
					removeLink: Object(v.L)(i.media),
					url: Object(v.L)(i.media) ? void 0 : p,
					usePreview: m
				}) : n.a.createElement(M.a, {
					className: Object(A.a)(_.a.thumbnail, t),
					containerClassName: l,
					crosspost: o,
					forceShowNSFW: r,
					isMeta: a,
					post: i,
					redditStyle: c,
					usePreview: m
				})
			};
			var R = e => {
					const [t, s] = Object(r.useState)(!1), {
						isVideo: o,
						className: a
					} = e, i = o && !t;
					return n.a.createElement("div", {
						className: t ? Object(A.a)(_.a.videoContainer, a) : Object(A.a)(_.a.thumbnailContainer, a),
						onClick: i ? () => s(!0) : void 0
					}, n.a.createElement(F, B({}, e, {
						mediaExpanded: t,
						closeVideo: () => s(!1)
					})), i && n.a.createElement(w.a, {
						className: _.a.playContainer,
						playIconClassName: _.a.playIcon,
						onClick: () => s(!0)
					}))
				},
				U = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				V = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				D = s("./src/reddit/helpers/path/index.ts"),
				z = s("./src/reddit/selectors/profile.ts");
			const G = Object(a.b)(() => Object(c.c)({
				iconUrl: (e, t) => {
					const s = Object(z.j)(e, {
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
					return e.source && e.isLocked ? n.a.createElement(P.b, {
						className: _.a.styledOutboundLink,
						href: e.source.url,
						isSponsored: e.isSponsored,
						source: e.source
					}, Object(p.a)(e)) : n.a.createElement(i.a, {
						className: _.a.styledOutboundLink,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": j.a,
						to: this.props.isOverlay ? Object(m.a)(e.permalink, !0) : Object(D.b)(e.permalink),
						onClick: this.props.onClick
					}, o.fbt._("Join the conversation", null, {
						hk: "45BFWV"
					}))
				}
				renderAppropriateThumbnail() {
					const {
						inSubredditOrProfile: e,
						isMeta: t,
						post: s,
						redditStyle: o,
						showMedia: r
					} = this.props, a = !!s.media && Object(v.H)(s.media), {
						media: i
					} = s;
					if (!(e && !r)) return n.a.createElement(R, {
						isMeta: t,
						post: s,
						redditStyle: o,
						removeLink: a,
						isVideo: i && Object(v.L)(i)
					})
				}
				render() {
					const {
						eventFactory: e,
						isExpanded: t,
						formatTitle: s,
						isOverlay: o,
						poll: r,
						post: a,
						redditStyle: i,
						scrollerItemRef: c
					} = this.props;
					return a.isBlank ? n.a.createElement(b.default, {
						postId: a.id
					}) : n.a.createElement("div", null, n.a.createElement("div", {
						className: _.a.commentsSpacer
					}), n.a.createElement(g.a, {
						className: _.a.postContainer,
						isOverlay: o,
						post: a,
						eventFactory: e
					}, n.a.createElement(y.a, {
						"data-click-id": "background"
					}, n.a.createElement("div", {
						className: _.a.mainBody
					}, n.a.createElement("div", {
						className: _.a.content,
						"data-click-id": "body"
					}, n.a.createElement(T, {
						author: a.author,
						iconUrl: this.props.iconUrl
					}), n.a.createElement("div", {
						className: _.a.contentRow
					}, this.renderAppropriateThumbnail(), n.a.createElement("div", {
						className: _.a.contentColumn
					}, n.a.createElement(C.c, {
						format: s,
						outboundLinkClassName: _.a.outboundLink,
						className: _.a.postTitle,
						poll: r,
						post: a,
						redditStyle: i,
						size: 3,
						isOverlay: o,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), a.permalink && n.a.createElement(x.a, {
						className: _.a.adLinkWrapper
					}, this.checkCommentsActive(), a.callToAction && a.source && a.source.url && n.a.createElement(h.a, {
						href: a.source.url.replace(d.a.redditUrl, ""),
						isSponsored: a.isSponsored,
						source: a.source
					}, a.callToAction)))), n.a.createElement("div", {
						className: _.a.spacer
					}), n.a.createElement(f.d, {
						postId: a.id
					}))), Object(O.renderMedia)(a, c, t, !1, !1))), n.a.createElement("div", {
						className: _.a.commentsSpacer
					}))
				}
			}
			const Q = Object(l.a)(H),
				Z = Object(V.a)(Q);
			t.default = Object(U.a)(G(Q))
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
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: a,
					post: c,
					redditStyle: m,
					theme: u
				} = e, x = p(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return r.a.createElement("div", l({
					className: Object(n.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(o, e),
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
			var o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
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
					imageGalleryCurrentItem: x.i,
					moderatorPermissions: m.i,
					modModeEnabled: d.P,
					post: x.N,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: u.a,
					showMedia: d.r,
					subredditOrProfile: x.ab,
					userIsOp: b.hb,
					flairStyleTemplate: d.R
				},
				O = (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: r
					} = t;
					return {
						handleVote: t => {
							const s = t === i.a.upvoted ? Object(n.S)(r) : Object(n.q)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(n.Q)(r)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				},
				f = Object(o.b)(() => Object(r.c)(h), O, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					formatTitle: e => e.title
				}));
			t.a = e => f(Object(c.b)(e))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
						let o = p.get(s);
						if (void 0 === o) {
							const n = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								a = e.title.split(n);
							for (let e = 1; e < a.length; e += 2) a[e] = r.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, a[e]);
							o = r.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, r.a.Children.toArray(a)), p.set(s, o)
						}
						return o
					}
				},
				u = Object(n.b)(() => Object(a.c)(d.c), d.b, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
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
			var o = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
				x = e => Object(o.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: x(e.postBackgroundColor)
				} : p,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				O = e => {
					const t = Object(n.a)(Object(r.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		}
	}
]);
//# sourceMappingURL=CommentsPageNativeAd.5a5c4810c97380884d3d.js.map