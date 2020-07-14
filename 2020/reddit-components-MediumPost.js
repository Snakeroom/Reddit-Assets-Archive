// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.9f37e8e6db4fa6665c3e.js
// Retrieved at 7/14/2020, 2:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var r = s("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return r(e) + t
			}
		},
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
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/components/CallToActionButton/index.m.less"),
				a = s.n(d);

			function c() {
				return (c = Object.assign || function(e) {
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
				return o.a.createElement(i.a, c({
					className: Object(n.a)(t, a.a.CallToActionButton, {
						[a.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o);
			const i = Object(r.a)({
				resolved: {},
				chunkName: () => "InFeedChaining",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~InFeedChaining~PostCreation~Reddit~StandalonePostPage~SubredditPremiumBadgeHovercardTooltip"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"
				}
			}, {
				fallback: n.a.createElement("div", null),
				ssr: !1
			});
			t.a = i
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				d = s("./src/reddit/components/Thumbnail/index.tsx"),
				a = s("./src/reddit/constants/posts.ts"),
				c = s("./src/reddit/helpers/trackers/post.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/components/MediumPost/index.m.less"),
				p = s.n(m);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: r,
					redditStyle: m,
					shouldShowSubscribeButton: u,
					subredditOrProfile: b,
					templatePlaceholderImage: x
				} = e;
				return o.a.createElement("div", {
					className: Object(n.a)(p.a.thumbnailContainer, {
						[p.a.mShowingButtonOrOverflow]: u
					})
				}, o.a.createElement("div", {
					className: p.a.thumbnailContainerRow
				}, u && b && o.a.createElement(i.a, {
					className: p.a.subscribeButton,
					getEventFactory: e => Object(c.f)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: b.name,
						type: Object(l.f)(b) ? a.a.PROFILE : a.a.SUBREDDIT
					},
					postId: s.id
				})), o.a.createElement(d.a, {
					crosspost: t,
					post: s,
					redditStyle: m,
					forceShowNSFW: r,
					templatePlaceholderImage: x
				}))
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				modModeReports: "_3RpVs_MuohyWxfQ8DMI1hz",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				chain: "vLpzNkGe1yVXuRgtBVQWk",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR"
			}
		},
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/config.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/inFeedChaining.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/AwardBadges/index.tsx"),
				b = s("./src/reddit/components/CallToActionButton/index.tsx"),
				x = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				g = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				P = s("./src/reddit/components/FlairWrapper/index.tsx"),
				y = s("./src/reddit/components/Flatlist/index.tsx"),
				O = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				f = s("./src/reddit/components/ModModeReports/index.tsx"),
				C = s("./src/reddit/components/ModModeReports/helpers.ts"),
				v = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				S = s("./src/reddit/components/PostContainer/index.tsx"),
				k = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				E = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				j = s("./src/reddit/components/PostTitle/index.tsx"),
				I = s("./src/reddit/components/PostTopLine/index.tsx"),
				w = s("./src/reddit/components/PostTopMeta/index.tsx"),
				N = s("./src/reddit/components/SourceLink/index.tsx"),
				T = s("./src/reddit/constants/experiments.ts"),
				_ = s("./src/reddit/contexts/InsideOverlay.tsx"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				L = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				A = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				M = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				F = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				R = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				W = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				V = s("./src/reddit/models/Vote/index.ts"),
				D = s("./src/reddit/selectors/experiments/categories.ts"),
				U = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				z = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				G = s("./src/reddit/selectors/inFeedChaining.ts"),
				H = s("./src/reddit/selectors/moderatorPermissions.ts"),
				K = s("./src/reddit/selectors/postFlair.ts"),
				Z = s("./src/reddit/selectors/posts.ts"),
				q = s("./src/reddit/selectors/user.ts"),
				J = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				Q = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				X = s.n(Q),
				Y = s("./src/reddit/components/MediumPost/index.m.less"),
				$ = s.n(Y);
			const ee = Object(n.b)(() => Object(i.c)({
				crosspost: Z.d,
				currentUser: q.i,
				flairStyleTemplate: B.R,
				hideNSFWPref: q.z,
				isActive: Z.j,
				isCurrentUserProfilePost: Z.k,
				isLoggedIn: q.H,
				isPostChainDismissed: G.c,
				isPostChained: G.d,
				listingBelowVariant: z.b,
				moderatorPermissions: H.i,
				modModeEnabled: B.P,
				post: Z.O,
				showAwardsPlaque: U.a,
				showEditFlair: K.a,
				showMedia: B.r,
				isInCategoriesExperiment: D.a,
				subredditOrProfile: Z.bb
			}), (e, t) => {
				let {
					listingKey: s,
					listingName: r,
					postId: o
				} = t;
				return {
					chainPost: () => {
						r && s && e(Object(c.d)({
							listingKey: s,
							listingName: r,
							postId: o
						}))
					},
					handleVote: t => t === V.a.upvoted ? e(Object(l.db)(o)) : e(Object(l.z)(o)),
					onIgnoreReports: () => e(Object(l.bb)(o)),
					onOpenReportsDropdown: t => e(Object(m.h)({
						tooltipId: t
					}))
				}
			});
			t.default = ee(Object(_.b)(e => {
				const {
					chainPost: t,
					className: s,
					crosspost: r,
					currentUser: n,
					eventFactory: i,
					flairStyleTemplate: c,
					hideNSFWPref: l,
					hostPostId: m,
					inSubredditOrProfile: _ = !1,
					isCheckboxSelected: B,
					isCommentsPage: V,
					isCurrentUserProfilePost: D,
					isFrontpage: U,
					isLoggedIn: z,
					isOverlay: G,
					isPostChainDismissed: H,
					isPostChained: K,
					isTopicPage: Z,
					listingBelowVariant: q,
					listingKey: Q,
					listingName: Y,
					moderatorPermissions: ee,
					modModeEnabled: te,
					onClickPost: se,
					onIgnoreReports: re,
					onOpenReportsDropdown: oe,
					post: ne,
					redditStyle: ie,
					shouldHideFlair: de,
					showAwardsPlaque: ae,
					showBulkActionCheckbox: ce,
					showEditFlair: le,
					showMedia: me,
					sendEvent: pe,
					subredditOrProfile: ue,
					toggleCheckbox: be
				} = e, xe = ie ? void 0 : c, he = Object(R.a)(ee), ge = te && he, Pe = Object(M.a)(ee), ye = Object(F.a)(ee), Oe = Object(C.c)(ne), fe = !!q && !Object(T.tc)(q), Ce = Object(A.a)(ne), ve = _ && !me && !fe, Se = ve && !!ne.source && !r, ke = !(U && z || Z) && !D && (!_ || fe), Ee = (!_ || fe) && !ne.isSponsored, je = o.a.createElement(S.a, {
					className: Object(a.a)($.a.container, s, X.a.largeAndMediumPostStyles, X.a.largeAndMediumActiveStyles, Object(W.a)(e), {
						[X.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: G,
					style: Object(W.b)(e.flairStyleTemplate),
					post: ne,
					onClick: se,
					onPostContentClick: t,
					eventFactory: i
				}, o.a.createElement(E.a, {
					model: ne,
					handleVote: e.handleVote,
					showBulkActionCheckbox: ce,
					isCheckboxSelected: B,
					toggleCheckbox: be,
					flairStyleTemplate: xe,
					redditStyle: ie,
					subreddit: ue
				}), o.a.createElement(v.a, {
					className: $.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: xe,
					post: ne,
					redditStyle: ie
				}, o.a.createElement(g.a, {
					post: ne
				}), o.a.createElement("article", {
					className: $.a.mainBody
				}, o.a.createElement("div", {
					className: $.a.content,
					"data-click-id": "body"
				}, o.a.createElement(I.a, {
					className: $.a.postTopLine,
					hideAwards: ae,
					hideNSFWPref: l,
					hostPostId: m,
					iconClassName: $.a.postTopLineIcon,
					inSubredditOrProfile: _,
					isCommentsPage: V,
					isCurrentUserProfilePost: D,
					isOverlay: !!G,
					isTopicPage: !!Z,
					listingKey: Q,
					post: ne,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: Se,
					showSubreddit: Ee,
					showSubredditIcon: !0,
					subredditOrProfile: ue
				}), o.a.createElement(j.c, {
					className: $.a.postTitle,
					post: ne,
					redditStyle: ie,
					size: j.b.Large,
					titleColor: xe && xe.postTitleColor,
					isOverlay: G
				}), V && !de && (ne.flair && ne.flair.length > 0 || e.isInCategoriesExperiment) && o.a.createElement(P.a, {
					className: V ? $.a.leftPadding : null,
					disableFlair: !V,
					post: ne,
					sendEvent: pe,
					showCategoryTag: e.isInCategoriesExperiment && V
				}), ne.source && !ne.isSponsored && !r && o.a.createElement(N.a, {
					className: $.a.sourceLink,
					isCommentsPage: V,
					post: ne
				})), !ve && Ce && o.a.createElement(J.a, {
					crosspost: r ? ne : void 0,
					hasModPostPerms: he,
					isCommentsPage: V,
					isOverlay: G,
					modModeEnabled: te,
					post: r || ne,
					redditStyle: ie,
					shouldShowSubscribeButton: ke,
					subredditOrProfile: ue,
					templatePlaceholderImage: xe && xe.postPlaceholderImage
				})), ne.source && ne.source.url && ne.isSponsored && o.a.createElement(p.a, {
					className: $.a.adLinkWrapper
				}, o.a.createElement(L.a, {
					href: ne.source.url.replace(d.a.redditUrl, ""),
					isSponsored: ne.isSponsored,
					postId: ne.id,
					source: ne.source
				}, ne.source.displayText), ne.callToAction && o.a.createElement(b.a, {
					href: ne.source.url.replace(d.a.redditUrl, ""),
					isSponsored: ne.isSponsored,
					postId: ne.id,
					source: ne.source,
					isNotCardView: !0
				}, ne.callToAction)), te && he && Oe && o.a.createElement(f.a, {
					className: $.a.modModeReports,
					onIgnoreReports: re,
					reportable: ne
				}), o.a.createElement(O.d, {
					postId: ne.id
				}), ae && o.a.createElement(u.a, {
					awardsPlaqueStyle: !0,
					isOverlay: !!G,
					isPostDetail: V,
					thing: ne
				}), o.a.createElement("div", {
					className: $.a.flatlistContainer
				}, o.a.createElement(x.a, {
					className: $.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: xe,
					redditStyle: ie,
					model: ne,
					onVoteClick: e.handleVote
				}), o.a.createElement(y.c, {
					currentUser: n,
					hasModFlairPerms: Pe,
					hasModFullPerms: ye,
					hasModPostPerms: he,
					hostPostId: m,
					isOverlay: !!G,
					listingKey: Q,
					modModeEnabled: te,
					onIgnoreReports: re,
					onOpenReportsDropdown: oe,
					post: ne,
					showEditFlair: le,
					tooltipType: G ? w.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(k.h)({
						editPost: !ge,
						save: !ge,
						hide: !1,
						report: !1
					})
				}))));
				return o.a.createElement(o.a.Fragment, null, je, K && !H && o.a.createElement(h.a, {
					className: $.a.chain,
					listingKey: Q,
					listingName: Y,
					postId: ne.id
				}))
			}))
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
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				a = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (s[r[o]] = e[r[o]])
				}
				return s
			};
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: r,
					onClick: i,
					post: a,
					redditStyle: p,
					theme: u
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return o.a.createElement("div", l({
					className: Object(n.a)(c.a.backgroundWrapper, s),
					style: Object(d.c)(r, e),
					onClick: i
				}, b), t)
			})
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				d = s("./src/reddit/components/PopupPortal/index.tsx"),
				a = s("./src/reddit/components/PostLeftRail/index.tsx"),
				c = s("./src/reddit/components/VerticalVotes/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.tsx"),
				m = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: r = !1,
					isCheckboxSelected: u = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: x,
					redditStyle: h,
					subreddit: g,
					isOverlay: P
				} = e, y = "upvote-button-".concat(t.id).concat(P ? "-overlay" : ""), {
					moderationPrompt: O
				} = t;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: h
				}, r && o.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), o.a.createElement(c.a, {
					flairStyleTemplate: x,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: y
				}), O && o.a.createElement(d.b, {
					rightOf: y
				}, "survey" === O ? o.a.createElement(i.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!P
				}) : o.a.createElement(n.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!P
				})))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				a = s("./src/reddit/components/PostBadges/index.tsx"),
				c = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/components/PostTopLine/index.m.less"),
				O = s.n(y);
			const f = s("./src/lib/lessComponent.tsx").a.div("Container", O.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideAwards: r,
					hideNSFWPref: y,
					hostPostId: C,
					iconClassName: v,
					inSubredditOrProfile: S,
					isCommentsPage: k,
					isCompactPinnedPost: E,
					isCurrentUserProfilePost: j,
					isOverlay: I,
					isTopicPage: w,
					listingKey: N,
					post: T,
					shouldShowSubscribeButton: _,
					showCornerOutboundLink: B,
					showSubreddit: L,
					showSubredditIcon: A,
					subredditOrProfile: M
				} = e, F = r || w;
				return o.a.createElement(f, {
					className: t
				}, L && M && o.a.createElement("div", {
					className: O.a.subredditIconWrapper
				}, o.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: M.url
				}, A && o.a.createElement(l.b, {
					className: Object(n.a)(O.a.subredditIcon, v),
					shouldHideNsfwIcon: y,
					subredditOrProfile: M
				}))), o.a.createElement("div", {
					className: O.a.everythingElseWrapper
				}, L && o.a.createElement(d.h, {
					type: T.belongsTo.type,
					id: T.belongsTo.id
				}), o.a.createElement(c.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: I ? c.c.Lightbox : void 0,
					post: T,
					showSub: L,
					subredditOrProfile: M
				}), o.a.createElement(a.a, {
					className: O.a.postBadges,
					displayText: M ? M.displayText : null,
					inSubredditOrProfile: S,
					isCompactPinnedPost: E,
					post: T,
					tooltipType: I ? c.c.Lightbox : void 0
				}), !F && o.a.createElement(i.a, {
					isPostDetail: k,
					isOverlay: I,
					thing: T
				})), M && L && _ && !j && o.a.createElement(p.a, {
					getEventFactory: e => Object(x.f)(T.id, e ? "unsubscribe" : "subscribe", "post", N, C),
					identifier: {
						name: M.name,
						type: Object(P.f)(M) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: T.id
				}, "Subscribe"), B && o.a.createElement(b.a, {
					className: O.a.OutboundLink,
					isSponsored: T.isSponsored,
					postId: T.id,
					href: Object(g.C)(e.post),
					source: T.source
				}, o.a.createElement(h.a, {
					className: O.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/reddit/constants/thumbnails.ts");

			function o(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === r.a.SELF || e.thumbnail.url === r.a.NSFW)
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return g
			}));
			var r = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				n = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				d = s("./src/reddit/models/Theme/index.ts"),
				a = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				p = e => Object(d.g)(Object(a.a)(e).post, Object(a.a)(e).backgroundImage, Object(a.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(d.g)(e.postBackgroundColor || Object(a.a)(t).post, e.postBackgroundImage, Object(a.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(d.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				b = e => Object(r.l)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(n.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				n = s("./src/reddit/selectors/user.ts");
			const i = e => {
				return Object(n.E)(e) || r.u.Treatment1 === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: r.m
				})
			}
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const n = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: r.V
				});
				return !(!t || Object(r.tc)(t))
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-MediumPost.9f37e8e6db4fa6665c3e.js.map