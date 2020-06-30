// https://www.redditstatic.com/desktop2x/CommentsPageNativeAd.63e5f23e2db0f39994d3.js
// Retrieved at 6/30/2020, 3:50:05 PM by Reddit Dataminer v1.0.0
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
			const a = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
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
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/controls/OutboundLink/styled.tsx"),
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
				return o.a.createElement(n.a, d({
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
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
				C = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				P = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				E = s("./src/reddit/components/PostTopMeta/index.tsx"),
				S = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				_ = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				T = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				A = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				w = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				I = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				L = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				M = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				W = s.n(M),
				B = s("./src/reddit/components/ClassicPost/index.m.less"),
				F = s.n(B);

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const V = 16;
			class U extends o.a.Component {
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
						eventFactory: _,
						first: T,
						flairStyleTemplate: M,
						formatTitle: B,
						isCheckboxSelected: U,
						isCurrentUserProfilePost: D,
						isFrontpage: H,
						isLoggedIn: Z,
						isOverlay: G,
						moderatorPermissions: K,
						modModeEnabled: Q,
						onClickPost: J,
						onIgnoreReports: Y,
						onOpenReportsDropdown: X,
						poll: q,
						post: $,
						redditStyle: ee,
						scrollerItemRef: te,
						showBulkActionCheckbox: se,
						showEditFlair: re,
						showMedia: oe,
						subredditOrProfile: ae,
						toggleCheckbox: ne,
						userIsOp: ie
					} = this.props, ce = ee ? void 0 : M, de = this.props.crosspost || void 0, le = Object(I.a)(K), pe = Object(A.a)(K), me = Object(w.a)(K), ue = Q && I.a, xe = !!$.media && $.media.type === k.o.RTJSON, be = ie && xe, he = g && !oe, Oe = !!$.media && Object(k.E)($.media), fe = {
						flairStyleTemplate: ce,
						post: $,
						inSubredditOrProfile: g,
						isCurrentUserProfilePost: D,
						isOverlay: G,
						shouldShowSubscribeButton: !(H && Z),
						subredditOrProfile: ae
					}, ye = o.a.createElement(y.a, {
						className: Object(n.a)(W.a.classicPostStyles, F.a.postContainer, Object(L.a)(this.props), T ? F.a.mFirst : void 0, e),
						isOverlay: G,
						style: Object.assign({}, Object(L.d)(this.props), Object(L.b)(this.props.flairStyleTemplate)),
						post: $,
						onClick: J,
						eventFactory: _
					}, o.a.createElement(P.a, {
						model: $,
						handleVote: s,
						showBulkActionCheckbox: se,
						isCheckboxSelected: U,
						toggleCheckbox: ne,
						flairStyleTemplate: ce,
						redditStyle: ee,
						subreddit: ae
					}), o.a.createElement(f.a, {
						"data-click-id": "background",
						flairStyleTemplate: ce
					}, o.a.createElement(m.a, {
						className: F.a.eventMeta,
						post: $
					}), o.a.createElement("div", {
						className: F.a.mainBody
					}, o.a.createElement("div", {
						className: he ? F.a.expandoContainer : F.a.thumbnailContainer
					}, !he && o.a.createElement(N.a, {
						className: F.a.classicThumbnail,
						crosspost: de && $,
						isMeta: i,
						post: de || $,
						redditStyle: ee,
						templatePlaceholderImage: ce && ce.postPlaceholderImage,
						removeLink: Oe
					}), o.a.createElement(u.a, {
						crosspost: de,
						className: F.a.rightExpando,
						isExpanded: !!r,
						post: $,
						useMediaIcons: !1
					})), o.a.createElement("div", {
						className: F.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(V, "px")
						}
					}, o.a.createElement(v.c, {
						className: q ? F.a.titleWithPoll : void 0,
						format: B,
						poll: q,
						post: $,
						redditStyle: ee,
						size: v.b.Medium,
						titleColor: ce && ce.postTitleColor,
						isOverlay: G
					}, $.source && !de && o.a.createElement(S.a, {
						href: $.source.url,
						isSponsored: $.isSponsored,
						postId: $.id,
						source: $.source
					}, Object(c.a)($))), o.a.createElement(j.a, R({
						key: "PostMeta"
					}, fe)), Q && le && Object(O.c)($) && o.a.createElement(h.a, {
						onIgnoreReports: Y,
						reportable: $
					}), o.a.createElement("div", {
						className: F.a.spacer
					}), $.source && $.source.url && $.isSponsored && o.a.createElement(d.a, {
						className: F.a.adLinkWrapper
					}, o.a.createElement(S.a, {
						href: $.source.url.replace(a.a.redditUrl, ""),
						isSponsored: $.isSponsored,
						postId: $.id,
						source: $.source
					}, $.source.displayText), $.callToAction && o.a.createElement(l.a, {
						href: $.source.url.replace(a.a.redditUrl, ""),
						isSponsored: $.isSponsored,
						postId: $.id,
						source: $.source
					}, $.callToAction)), o.a.createElement("div", {
						className: F.a.flatlistContainer
					}, o.a.createElement(u.a, {
						className: F.a.leftExpando,
						crosspost: de,
						isExpanded: !!r,
						post: $,
						useMediaIcons: !1
					}), o.a.createElement(p.a, {
						className: F.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ce,
						model: $,
						onVoteClick: s
					}), o.a.createElement(x.a, {
						className: F.a.flatlistSeparator
					}), o.a.createElement(x.c, {
						className: F.a.flatlist,
						currentUser: t,
						hasModFlairPerms: pe,
						hasModPostPerms: le,
						hasModFullPerms: me,
						isOverlay: !!G,
						modModeEnabled: Q,
						onIgnoreReports: Y,
						onOpenReportsDropdown: X,
						post: $,
						showEditPost: be,
						showEditFlair: re,
						tooltipType: G ? E.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(C.h)({
							editPost: !ue,
							save: !ue,
							hide: !ue,
							report: !ue
						})
					})), o.a.createElement(b.d, {
						postId: $.id
					}))), z($, te, r)));
					return o.a.createElement(o.a.Fragment, null, ye)
				}
			}
			const z = (e, t, s) => s ? e.crosspostRootId ? o.a.createElement("div", {
					className: F.a.crosspostMediaWrapper
				}, D(e, t)) : D(e, t) : null,
				D = (e, t) => o.a.createElement(g.a, {
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
				H = Object(i.a)(U),
				Z = Object(T.a)(H);
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
				return K
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
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
				C = s("./src/reddit/constants/componentTestIds.ts"),
				P = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/components/AuthorLink/index.tsx"),
				S = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				k = s("./src/reddit/components/UserIcon/index.tsx"),
				N = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/components/CommentsPageNativeAd/index.m.less"),
				T = s.n(_);
			var A = e => a.a.createElement(o.Fragment, null, a.a.createElement(k.a, {
					iconUrl: e.iconUrl,
					isNSFW: !1,
					userName: e.author,
					className: T.a.userIcon
				}), a.a.createElement(E.a, {
					className: T.a.authorLink,
					"data-click-id": "user",
					author: e.author
				}, "u/".concat(e.author)), a.a.createElement(N.a, {
					isSmall: !0,
					className: T.a.metaSeparator
				}), a.a.createElement(S.a, null)),
				w = s("./src/lib/classNames/index.ts"),
				I = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
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
					isMeta: n,
					post: i,
					redditStyle: c,
					templatePlaceholderImage: d,
					thumbnailContainerClassName: l,
					url: p,
					usePreview: m,
					mediaExpanded: u
				} = e;
				return i && i.media ? u && Object(v.H)(i.media) ? a.a.createElement("div", null, a.a.createElement(W.a, {
					className: T.a.close,
					onClick: s
				}), a.a.createElement(I.b, {
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
				})) : a.a.createElement(M.a, {
					className: Object(w.a)(T.a.thumbnail, t),
					containerClassName: l,
					crosspost: r,
					forceShowNSFW: o,
					isMeta: n,
					post: i,
					redditStyle: c,
					removeLink: Object(v.H)(i.media),
					url: Object(v.H)(i.media) ? void 0 : p,
					usePreview: m
				}) : a.a.createElement(M.a, {
					className: Object(w.a)(T.a.thumbnail, t),
					containerClassName: l,
					crosspost: r,
					forceShowNSFW: o,
					isMeta: n,
					post: i,
					redditStyle: c,
					usePreview: m
				})
			};
			var R = e => {
					const [t, s] = Object(o.useState)(!1), {
						isVideo: r,
						className: n
					} = e, i = r && !t;
					return a.a.createElement("div", {
						className: t ? Object(w.a)(T.a.videoContainer, n) : Object(w.a)(T.a.thumbnailContainer, n),
						onClick: i ? () => s(!0) : void 0
					}, a.a.createElement(F, B({}, e, {
						mediaExpanded: t,
						closeVideo: () => s(!1)
					})), i && a.a.createElement(L.a, {
						className: T.a.playContainer,
						playIconClassName: T.a.playIcon,
						onClick: () => s(!0)
					}))
				},
				V = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				U = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				z = s("./src/reddit/helpers/path/index.ts"),
				D = s("./src/reddit/selectors/profile.ts");
			const H = Object(n.b)(() => Object(c.c)({
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
			class Z extends a.a.Component {
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
					return e.source && e.isLocked ? a.a.createElement(P.a, {
						className: T.a.styledOutboundLink,
						href: e.source.url,
						isSponsored: e.isSponsored,
						source: e.source
					}, Object(p.a)(e)) : a.a.createElement(i.a, {
						className: T.a.styledOutboundLink,
						rel: "nofollow",
						"data-click-id": "comments",
						"data-test-id": C.a,
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
					} = this.props, n = !!s.media && Object(v.E)(s.media), {
						media: i
					} = s;
					if (!(e && !o)) return a.a.createElement(R, {
						isMeta: t,
						post: s,
						redditStyle: r,
						removeLink: n,
						isVideo: i && Object(v.H)(i)
					})
				}
				render() {
					const {
						eventFactory: e,
						isExpanded: t,
						formatTitle: s,
						isOverlay: r,
						poll: o,
						post: n,
						redditStyle: i,
						scrollerItemRef: c
					} = this.props;
					return n.isBlank ? a.a.createElement(b.default, {
						postId: n.id
					}) : a.a.createElement("div", null, a.a.createElement("div", {
						className: T.a.commentsSpacer
					}), a.a.createElement(g.a, {
						className: T.a.postContainer,
						isOverlay: r,
						post: n,
						eventFactory: e
					}, a.a.createElement(y.a, {
						"data-click-id": "background"
					}, a.a.createElement("div", {
						className: T.a.mainBody
					}, a.a.createElement("div", {
						className: T.a.content,
						"data-click-id": "body"
					}, a.a.createElement(A, {
						author: n.author,
						iconUrl: this.props.iconUrl
					}), a.a.createElement("div", {
						className: T.a.contentRow
					}, this.renderAppropriateThumbnail(), a.a.createElement("div", {
						className: T.a.contentColumn
					}, a.a.createElement(j.c, {
						format: s,
						outboundLinkClassName: T.a.outboundLink,
						className: T.a.postTitle,
						poll: o,
						post: n,
						redditStyle: i,
						size: 3,
						isOverlay: r,
						isCommentsPage: !1,
						isCommentsPageAd: !0
					}), n.permalink && a.a.createElement(x.a, {
						className: T.a.adLinkWrapper
					}, this.checkCommentsActive(), n.callToAction && n.source && n.source.url && a.a.createElement(h.a, {
						href: n.source.url.replace(d.a.redditUrl, ""),
						isSponsored: n.isSponsored,
						source: n.source
					}, n.callToAction)))), a.a.createElement("div", {
						className: T.a.spacer
					}), a.a.createElement(f.d, {
						postId: n.id
					}))), Object(O.renderMedia)(n, c, t))), a.a.createElement("div", {
						className: T.a.commentsSpacer
					}))
				}
			}
			const G = Object(l.a)(Z),
				K = Object(U.a)(G);
			t.default = Object(V.a)(H(G))
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
			var p = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (s[r[o]] = e[r[o]])
				}
				return s
			};
			t.a = Object(n.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: r,
					onClick: n,
					post: c,
					redditStyle: m,
					theme: u
				} = e, x = p(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return o.a.createElement("div", l({
					className: Object(a.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(r, e),
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
			var r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
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
							const s = t === i.a.upvoted ? Object(a.db)(o) : Object(a.z)(o);
							e(s)
						},
						onIgnoreReports: () => e(Object(a.bb)(o)),
						onOpenReportsDropdown: t => e(Object(n.h)({
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
						let r = p.get(s);
						if (void 0 === r) {
							const a = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								n = e.title.split(a);
							for (let e = 1; e < n.length; e += 2) n[e] = o.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, n[e]);
							r = o.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, o.a.Children.toArray(n)), p.set(s, r)
						}
						return r
					}
				},
				u = Object(a.b)(() => Object(n.c)(d.c), d.b, (e, t, s) => Object.assign({}, e, t, s, {
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
				x = e => Object(r.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: x(e.postBackgroundColor)
				} : p,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				O = e => {
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
//# sourceMappingURL=CommentsPageNativeAd.63e5f23e2db0f39994d3.js.map