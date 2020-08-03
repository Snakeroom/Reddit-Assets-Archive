// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.ee319fdbf5b19fa59739.js
// Retrieved at 8/3/2020, 10:10:05 AM by Reddit Dataminer v1.0.0
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
			const a = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = a
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
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/controls/OutboundLink/styled.tsx"),
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
				return r.a.createElement(n.a, d({
					className: Object(a.a)(t, c.a.CallToActionButton, {
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
				return Z
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/config.ts"),
				n = s("./src/lib/classNames/index.ts"),
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
				j = s("./src/reddit/components/PostMeta/index.tsx"),
				P = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				C = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				E = s("./src/reddit/components/PostTopMeta/index.tsx"),
				S = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				k = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				_ = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				w = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				L = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				A = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				I = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				M = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				B = s.n(W),
				F = s("./src/reddit/components/ClassicPost/index.m.less"),
				R = s.n(F);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const U = 16;
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
						first: w,
						flairStyleTemplate: W,
						formatTitle: F,
						hostPostId: D,
						isCheckboxSelected: H,
						isCurrentUserProfilePost: G,
						isFrontpage: Z,
						isGalleryTileLayoutDefault: K,
						isLoggedIn: Q,
						isOverlay: Y,
						moderatorPermissions: J,
						modModeEnabled: q,
						onClickPost: X,
						onIgnoreReports: $,
						onOpenReportsDropdown: ee,
						poll: te,
						post: se,
						redditStyle: oe,
						scrollerItemRef: re,
						showBulkActionCheckbox: ae,
						showEditFlair: ne,
						showMedia: ie,
						subredditOrProfile: ce,
						toggleCheckbox: de,
						userIsOp: le,
						shouldShowGalleryTileOption: pe
					} = this.props, me = oe ? void 0 : W, ue = this.props.crosspost || void 0, xe = Object(I.a)(J), be = Object(L.a)(J), he = Object(A.a)(J), Oe = q && I.a, fe = !!se.media && se.media.type === N.o.RTJSON, ye = le && fe, ge = g && !ie, je = !!se.media && Object(N.H)(se.media), Pe = {
						flairStyleTemplate: me,
						post: se,
						inSubredditOrProfile: g,
						isCurrentUserProfilePost: G,
						isOverlay: Y,
						shouldShowSubscribeButton: !(Z && Q),
						subredditOrProfile: ce
					}, Ce = r.a.createElement(y.a, {
						className: Object(n.a)(B.a.classicPostStyles, R.a.postContainer, Object(M.a)(this.props), w ? R.a.mFirst : void 0, e),
						isOverlay: Y,
						style: Object.assign(Object.assign({}, Object(M.d)(this.props)), Object(M.b)(this.props.flairStyleTemplate)),
						post: se,
						onClick: X,
						eventFactory: _
					}, r.a.createElement(C.a, {
						model: se,
						handleVote: s,
						showBulkActionCheckbox: ae,
						isCheckboxSelected: H,
						toggleCheckbox: de,
						flairStyleTemplate: me,
						redditStyle: oe,
						subreddit: ce
					}), r.a.createElement(f.a, {
						"data-click-id": "background",
						flairStyleTemplate: me
					}, r.a.createElement(m.a, {
						className: R.a.eventMeta,
						post: se
					}), r.a.createElement("div", {
						className: R.a.mainBody
					}, r.a.createElement("div", {
						className: ge ? R.a.expandoContainer : R.a.thumbnailContainer
					}, !ge && r.a.createElement(T.a, {
						className: R.a.classicThumbnail,
						crosspost: ue && se,
						isMeta: i,
						post: ue || se,
						redditStyle: oe,
						templatePlaceholderImage: me && me.postPlaceholderImage,
						removeLink: je
					}), r.a.createElement(u.a, {
						crosspost: ue,
						className: R.a.rightExpando,
						isExpanded: !!o,
						post: se,
						useMediaIcons: !1
					})), r.a.createElement("div", {
						className: R.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(U, "px")
						}
					}, r.a.createElement(v.c, {
						className: te ? R.a.titleWithPoll : void 0,
						format: F,
						poll: te,
						post: se,
						redditStyle: oe,
						size: v.b.Medium,
						titleColor: me && me.postTitleColor,
						isOverlay: Y
					}, se.source && !ue && r.a.createElement(k.a, {
						href: se.source.url,
						isSponsored: se.isSponsored,
						postId: se.id,
						source: se.source
					}, Object(c.a)(se))), r.a.createElement(j.a, V({
						key: "PostMeta"
					}, Pe)), q && xe && Object(O.c)(se) && r.a.createElement(h.a, {
						onIgnoreReports: $,
						reportable: se
					}), r.a.createElement("div", {
						className: R.a.spacer
					}), se.source && se.source.url && se.isSponsored && r.a.createElement(d.a, {
						className: R.a.adLinkWrapper
					}, r.a.createElement(k.a, {
						href: se.source.url.replace(a.a.redditUrl, ""),
						isSponsored: se.isSponsored,
						postId: se.id,
						source: se.source
					}, se.source.displayText), se.callToAction && r.a.createElement(l.a, {
						href: se.source.url.replace(a.a.redditUrl, ""),
						isSponsored: se.isSponsored,
						postId: se.id,
						source: se.source
					}, se.callToAction)), r.a.createElement("div", {
						className: R.a.flatlistContainer
					}, r.a.createElement(u.a, {
						className: R.a.leftExpando,
						crosspost: ue,
						isExpanded: !!o,
						post: se,
						useMediaIcons: !1
					}), r.a.createElement(p.a, {
						className: R.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: me,
						model: se,
						onVoteClick: s
					}), r.a.createElement(x.a, {
						className: R.a.flatlistSeparator
					}), r.a.createElement(x.c, {
						className: R.a.flatlist,
						currentUser: t,
						hasModFlairPerms: be,
						hasModPostPerms: xe,
						hasModFullPerms: he,
						hostPostId: D,
						isOverlay: !!Y,
						modModeEnabled: q,
						onIgnoreReports: $,
						onOpenReportsDropdown: ee,
						post: se,
						showEditPost: ye,
						showEditFlair: ne,
						tooltipType: Y ? E.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(P.h)({
							editPost: !Oe,
							save: !Oe,
							hide: !Oe,
							report: !Oe
						})
					})), r.a.createElement(b.d, {
						postId: se.id
					}))), z(se, re, o, pe, K)));
					return r.a.createElement(S.b, null, Ce)
				}
			}
			const z = (e, t, s, o, a) => s ? e.crosspostRootId ? r.a.createElement("div", {
					className: R.a.crosspostMediaWrapper
				}, H(e, t, o, a)) : H(e, t, o, a) : null,
				H = (e, t, s, o) => r.a.createElement(g.a, {
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
				G = Object(i.a)(D),
				Z = Object(w.a)(G);
			t.default = Object(_.a)(G)
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
				return K
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
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
				j = s("./src/reddit/components/PostTitle/index.tsx"),
				P = s("./src/reddit/constants/componentTestIds.ts"),
				C = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/components/AuthorLink/index.tsx"),
				S = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				k = s("./src/reddit/components/UserIcon/index.tsx"),
				N = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				T = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				_ = s.n(T);
			var w = e => a.a.createElement(r.Fragment, null, a.a.createElement(k.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: _.a.userIcon
				}), a.a.createElement(E.a, {
					className: _.a.authorLink,
					"data-click-id": "user",
					author: e.author
				}, "u/".concat(e.author)), a.a.createElement(N.a, {
					isSmall: !0,
					className: _.a.metaSeparator
				}), a.a.createElement(S.a, null)),
				L = s("./src/lib/classNames/index.ts"),
				A = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				I = s("./src/reddit/components/PlayButton/index.tsx"),
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
					isMeta: n,
					post: i,
					redditStyle: c,
					templatePlaceholderImage: d,
					thumbnailContainerClassName: l,
					url: p,
					usePreview: m,
					mediaExpanded: u
				} = e;
				return i && i.media ? u && Object(v.L)(i.media) ? a.a.createElement("div", null, a.a.createElement(W.a, {
					className: _.a.close,
					onClick: s
				}), a.a.createElement(A.b, {
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
				})) : a.a.createElement(M.a, {
					className: Object(L.a)(_.a.thumbnail, t),
					containerClassName: l,
					crosspost: o,
					forceShowNSFW: r,
					isMeta: n,
					post: i,
					redditStyle: c,
					removeLink: Object(v.L)(i.media),
					url: Object(v.L)(i.media) ? void 0 : p,
					usePreview: m
				}) : a.a.createElement(M.a, {
					className: Object(L.a)(_.a.thumbnail, t),
					containerClassName: l,
					crosspost: o,
					forceShowNSFW: r,
					isMeta: n,
					post: i,
					redditStyle: c,
					usePreview: m
				})
			};
			var R = e => {
					const [t, s] = Object(r.useState)(!1), {
						isVideo: o,
						className: n
					} = e, i = o && !t;
					return a.a.createElement("div", {
						className: t ? Object(L.a)(_.a.videoContainer, n) : Object(L.a)(_.a.thumbnailContainer, n),
						onClick: i ? () => s(!0) : void 0
					}, a.a.createElement(F, B({}, e, {
						mediaExpanded: t,
						closeVideo: () => s(!1)
					})), i && a.a.createElement(I.a, {
						className: _.a.playContainer,
						playIconClassName: _.a.playIcon,
						onClick: () => s(!0)
					}))
				},
				V = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				U = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				D = s("./src/reddit/helpers/path/index.ts"),
				z = s("./src/reddit/selectors/profile.ts");
			const H = Object(n.b)(() => Object(c.c)({
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
			class G extends a.a.Component {
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
					return e.source && e.isLocked ? a.a.createElement(C.b, {
						className: _.a.styledOutboundLink,
						href: e.source.url,
						isSponsored: e.isSponsored,
						source: e.source
					}, Object(p.a)(e)) : a.a.createElement(i.a, {
						className: _.a.styledOutboundLink,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": P.a,
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
					} = this.props, n = !!s.media && Object(v.H)(s.media), {
						media: i
					} = s;
					if (!(e && !r)) return a.a.createElement(R, {
						isMeta: t,
						post: s,
						redditStyle: o,
						removeLink: n,
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
						post: n,
						redditStyle: i,
						scrollerItemRef: c
					} = this.props;
					return n.isBlank ? a.a.createElement(b.default, {
						postId: n.id
					}) : a.a.createElement("div", null, a.a.createElement("div", {
						className: _.a.commentsSpacer
					}), a.a.createElement(g.a, {
						className: _.a.postContainer,
						isOverlay: o,
						post: n,
						eventFactory: e
					}, a.a.createElement(y.a, {
						"data-click-id": "background"
					}, a.a.createElement("div", {
						className: _.a.mainBody
					}, a.a.createElement("div", {
						className: _.a.content,
						"data-click-id": "body"
					}, a.a.createElement(w, {
						author: n.author,
						iconUrl: this.props.iconUrl
					}), a.a.createElement("div", {
						className: _.a.contentRow
					}, this.renderAppropriateThumbnail(), a.a.createElement("div", {
						className: _.a.contentColumn
					}, a.a.createElement(j.c, {
						format: s,
						outboundLinkClassName: _.a.outboundLink,
						className: _.a.postTitle,
						poll: r,
						post: n,
						redditStyle: i,
						size: 3,
						isOverlay: o,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), n.permalink && a.a.createElement(x.a, {
						className: _.a.adLinkWrapper
					}, this.checkCommentsActive(), n.callToAction && n.source && n.source.url && a.a.createElement(h.a, {
						href: n.source.url.replace(d.a.redditUrl, ""),
						isSponsored: n.isSponsored,
						source: n.source
					}, n.callToAction)))), a.a.createElement("div", {
						className: _.a.spacer
					}), a.a.createElement(f.d, {
						postId: n.id
					}))), Object(O.renderMedia)(n, c, t, !1, !1))), a.a.createElement("div", {
						className: _.a.commentsSpacer
					}))
				}
			}
			const Z = Object(l.a)(G),
				K = Object(U.a)(Z);
			t.default = Object(V.a)(H(Z))
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
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
			t.a = Object(n.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: n,
					post: c,
					redditStyle: m,
					theme: u
				} = e, x = p(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return r.a.createElement("div", l({
					className: Object(a.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(o, e),
					onClick: n
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
				a = s("./src/reddit/actions/post.ts"),
				n = s("./src/reddit/actions/tooltip.ts"),
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
					isActive: x.i,
					isChatPostExperiment: p.d,
					isCurrentUserProfilePost: x.j,
					isExpanded: x.l,
					isLoggedIn: b.H,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(x.q)(e, s)
					},
					moderatorPermissions: m.i,
					modModeEnabled: d.P,
					post: x.M,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: u.a,
					showMedia: d.r,
					subredditOrProfile: x.Z,
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
							const s = t === i.a.upvoted ? Object(a.Y)(r) : Object(a.w)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(a.W)(r)),
						onOpenReportsDropdown: t => e(Object(n.h)({
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
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
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
							const a = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
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
							}, r.a.Children.toArray(n)), p.set(s, o)
						}
						return o
					}
				},
				u = Object(a.b)(() => Object(n.c)(d.c), d.b, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
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
				a = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				n = s("./src/reddit/models/NewStructuredStyles/index.ts"),
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
//# sourceMappingURL=CommentsPageNativeAd.ee319fdbf5b19fa59739.js.map