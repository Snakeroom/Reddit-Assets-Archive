// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.ed2f05eba664f511b20f.js
// Retrieved at 7/7/2020, 10:30:06 AM by Reddit Dataminer v1.0.0
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
				importAsync: () => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~PostCreation~Reddit~StandalonePost~ee6bfdf1"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
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
				S = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.tsx"),
				E = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				k = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				j = s("./src/reddit/components/PostTitle/index.tsx"),
				I = s("./src/reddit/components/PostTopLine/index.tsx"),
				N = s("./src/reddit/components/PostTopMeta/index.tsx"),
				w = s("./src/reddit/components/SourceLink/index.tsx"),
				T = s("./src/reddit/contexts/InsideOverlay.tsx"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				A = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				L = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				F = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				M = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				B = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				R = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = s("./src/reddit/models/Vote/index.ts"),
				V = s("./src/reddit/selectors/experiments/categories.ts"),
				D = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				z = s("./src/reddit/selectors/inFeedChaining.ts"),
				U = s("./src/reddit/selectors/moderatorPermissions.ts"),
				G = s("./src/reddit/selectors/postFlair.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				Z = s("./src/reddit/selectors/user.ts"),
				q = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				J = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				K = s.n(J),
				Q = s("./src/reddit/components/MediumPost/index.m.less"),
				X = s.n(Q);
			const Y = Object(n.b)(() => Object(i.c)({
				crosspost: H.d,
				currentUser: Z.i,
				flairStyleTemplate: _.R,
				hideNSFWPref: Z.z,
				isActive: H.j,
				isCurrentUserProfilePost: H.k,
				isLoggedIn: Z.H,
				isPostChainDismissed: z.c,
				isPostChained: z.d,
				moderatorPermissions: U.i,
				modModeEnabled: _.P,
				post: H.O,
				showAwardsPlaque: D.a,
				showEditFlair: G.a,
				showMedia: _.r,
				isInCategoriesExperiment: V.a,
				subredditOrProfile: H.bb
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
					handleVote: t => t === W.a.upvoted ? e(Object(l.db)(o)) : e(Object(l.z)(o)),
					onIgnoreReports: () => e(Object(l.bb)(o)),
					onOpenReportsDropdown: t => e(Object(m.h)({
						tooltipId: t
					}))
				}
			});
			t.default = Y(Object(T.b)(e => {
				const {
					chainPost: t,
					className: s,
					crosspost: r,
					currentUser: n,
					eventFactory: i,
					flairStyleTemplate: c,
					hideNSFWPref: l,
					inSubredditOrProfile: m = !1,
					isCheckboxSelected: T,
					isCommentsPage: _,
					isCurrentUserProfilePost: W,
					isFrontpage: V,
					isLoggedIn: D,
					isOverlay: z,
					isPostChainDismissed: U,
					isPostChained: G,
					isTopicPage: H,
					listingKey: Z,
					listingName: J,
					moderatorPermissions: Q,
					modModeEnabled: Y,
					onClickPost: $,
					onIgnoreReports: ee,
					onOpenReportsDropdown: te,
					post: se,
					redditStyle: re,
					shouldHideFlair: oe,
					showAwardsPlaque: ne,
					showBulkActionCheckbox: ie,
					showEditFlair: de,
					showMedia: ae,
					sendEvent: ce,
					subredditOrProfile: le,
					toggleCheckbox: me
				} = e, pe = re ? void 0 : c, ue = Object(B.a)(Q), be = Y && ue, xe = Object(F.a)(Q), he = Object(M.a)(Q), ge = Object(C.c)(se), Pe = Object(L.a)(se), ye = m && !ae, Oe = ye && !!se.source && !r, fe = !(V && D || H || W), Ce = o.a.createElement(v.a, {
					className: Object(a.a)(X.a.container, s, K.a.largeAndMediumPostStyles, K.a.largeAndMediumActiveStyles, Object(R.a)(e), {
						[K.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: z,
					style: Object(R.b)(e.flairStyleTemplate),
					post: se,
					onClick: $,
					onPostContentClick: t,
					eventFactory: i
				}, o.a.createElement(k.a, {
					model: se,
					handleVote: e.handleVote,
					showBulkActionCheckbox: ie,
					isCheckboxSelected: T,
					toggleCheckbox: me,
					flairStyleTemplate: pe,
					redditStyle: re,
					subreddit: le
				}), o.a.createElement(S.a, {
					className: X.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: pe,
					post: se,
					redditStyle: re
				}, o.a.createElement(g.a, {
					post: se
				}), o.a.createElement("article", {
					className: X.a.mainBody
				}, o.a.createElement("div", {
					className: X.a.content,
					"data-click-id": "body"
				}, o.a.createElement(I.a, {
					className: X.a.postTopLine,
					hideAwards: ne,
					hideNSFWPref: l,
					iconClassName: X.a.postTopLineIcon,
					inSubredditOrProfile: m,
					isCommentsPage: _,
					isCurrentUserProfilePost: W,
					isOverlay: !!z,
					isTopicPage: !!H,
					post: se,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: Oe,
					showSubreddit: !m && !se.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: le
				}), o.a.createElement(j.c, {
					className: X.a.postTitle,
					post: se,
					redditStyle: re,
					size: j.b.Large,
					titleColor: pe && pe.postTitleColor,
					isOverlay: z
				}), _ && !oe && (se.flair && se.flair.length > 0 || e.isInCategoriesExperiment) && o.a.createElement(P.a, {
					className: _ ? X.a.leftPadding : null,
					disableFlair: !_,
					post: se,
					sendEvent: ce,
					showCategoryTag: e.isInCategoriesExperiment && _
				}), se.source && !se.isSponsored && !r && o.a.createElement(w.a, {
					className: X.a.sourceLink,
					isCommentsPage: _,
					post: se
				})), !ye && Pe && o.a.createElement(q.a, {
					crosspost: r ? se : void 0,
					hasModPostPerms: ue,
					isCommentsPage: _,
					isOverlay: z,
					modModeEnabled: Y,
					post: r || se,
					redditStyle: re,
					shouldShowSubscribeButton: fe && !m,
					subredditOrProfile: le,
					templatePlaceholderImage: pe && pe.postPlaceholderImage
				})), se.source && se.source.url && se.isSponsored && o.a.createElement(p.a, {
					className: X.a.adLinkWrapper
				}, o.a.createElement(A.a, {
					href: se.source.url.replace(d.a.redditUrl, ""),
					isSponsored: se.isSponsored,
					postId: se.id,
					source: se.source
				}, se.source.displayText), se.callToAction && o.a.createElement(b.a, {
					href: se.source.url.replace(d.a.redditUrl, ""),
					isSponsored: se.isSponsored,
					postId: se.id,
					source: se.source,
					isNotCardView: !0
				}, se.callToAction)), Y && ue && ge && o.a.createElement(f.a, {
					className: X.a.modModeReports,
					onIgnoreReports: ee,
					reportable: se
				}), o.a.createElement(O.d, {
					postId: se.id
				}), ne && o.a.createElement(u.a, {
					awardsPlaqueStyle: !0,
					isOverlay: !!z,
					isPostDetail: _,
					thing: se
				}), o.a.createElement("div", {
					className: X.a.flatlistContainer
				}, o.a.createElement(x.a, {
					className: X.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: pe,
					redditStyle: re,
					model: se,
					onVoteClick: e.handleVote
				}), o.a.createElement(y.c, {
					currentUser: n,
					hasModFlairPerms: xe,
					hasModFullPerms: he,
					hasModPostPerms: ue,
					isOverlay: !!z,
					modModeEnabled: Y,
					onIgnoreReports: ee,
					onOpenReportsDropdown: te,
					post: se,
					showEditFlair: de,
					tooltipType: z ? N.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(E.h)({
						editPost: !be,
						save: !be,
						hide: !1,
						report: !1
					})
				}))));
				return o.a.createElement(o.a.Fragment, null, Ce, G && !U && o.a.createElement(h.a, {
					className: X.a.chain,
					listingKey: Z,
					listingName: J,
					postId: se.id
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
				donationAmount: "_1SRZN02bVXzHIIMqGwlZD7",
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
				d = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/components/PostTopLine/index.m.less"),
				f = s.n(O);
			const C = s("./src/lib/lessComponent.tsx").a.div("Container", f.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideAwards: r,
					hideNSFWPref: O,
					iconClassName: S,
					inSubredditOrProfile: v,
					isCommentsPage: E,
					isCompactPinnedPost: k,
					isCurrentUserProfilePost: j,
					isOverlay: I,
					isTopicPage: N,
					post: w,
					shouldShowSubscribeButton: T,
					showCornerOutboundLink: _,
					showSubreddit: A,
					showSubredditIcon: L,
					subredditOrProfile: F
				} = e, M = r || N;
				return o.a.createElement(C, {
					className: t
				}, A && F && o.a.createElement("div", {
					className: f.a.subredditIconWrapper
				}, o.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: F.url
				}, L && o.a.createElement(m.b, {
					className: Object(n.a)(f.a.subredditIcon, S),
					shouldHideNsfwIcon: O,
					subredditOrProfile: F
				}))), o.a.createElement("div", {
					className: f.a.everythingElseWrapper
				}, A && o.a.createElement(a.h, {
					type: w.belongsTo.type,
					id: w.belongsTo.id
				}), o.a.createElement(l.d, {
					className: f.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: I ? l.c.Lightbox : void 0,
					post: w,
					showSub: A,
					subredditOrProfile: F
				}), o.a.createElement(c.a, {
					className: f.a.postBadges,
					displayText: F ? F.displayText : null,
					inSubredditOrProfile: v,
					isCompactPinnedPost: k,
					post: w,
					tooltipType: I ? l.c.Lightbox : void 0
				}), F && o.a.createElement(d.a, {
					className: f.a.donationAmount,
					contentId: w.id,
					subredditId: F.id
				}), !M && o.a.createElement(i.a, {
					isPostDetail: E,
					isOverlay: I,
					thing: w
				})), F && A && T && !j && o.a.createElement(u.a, {
					getEventFactory: e => Object(h.f)(w.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: F.name,
						type: Object(y.f)(F) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: w.id
				}, "Subscribe"), _ && o.a.createElement(x.a, {
					className: f.a.OutboundLink,
					isSponsored: w.isSponsored,
					postId: w.id,
					href: Object(P.C)(e.post),
					source: w.source
				}, o.a.createElement(g.a, {
					className: f.a.outboundLinkIcon
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
					experimentName: r.X
				});
				return !(!t || Object(r.Fc)(t))
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-MediumPost.ed2f05eba664f511b20f.js.map