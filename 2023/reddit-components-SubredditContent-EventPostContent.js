// https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-EventPostContent.618c11419b354f02a2d7.js
// Retrieved at 7/5/2023, 1:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SubredditContent-EventPostContent"], {
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				x = s("./src/reddit/components/Econ/Audio/index.m.less"),
				h = s.n(x),
				v = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx");
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var C = () => r.a.createElement("div", {
					className: h.a.endedClassicContainer
				}, r.a.createElement(v.a, {
					className: h.a.muteIcon
				})),
				E = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				j = s("./src/reddit/components/ExpandoButton/index.tsx"),
				P = s("./src/reddit/components/Flatlist/index.tsx"),
				f = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				g = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				S = s("./src/reddit/components/ModModeReports/index.tsx"),
				_ = s("./src/reddit/components/ModModeReports/helpers.ts"),
				M = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				I = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				N = s("./src/reddit/components/PostContainer/index.tsx"),
				k = s("./src/reddit/components/PostMeta/index.tsx"),
				L = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				w = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				A = s("./src/reddit/components/PostTitle/index.tsx"),
				T = s("./src/reddit/components/PostTopMeta/index.tsx"),
				D = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				F = s("./src/reddit/models/Audio/index.ts"),
				B = s("./src/reddit/models/Media/index.ts"),
				R = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				V = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				z = s("./src/reddit/constants/postLayout.ts"),
				W = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				H = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				U = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Y = s("./src/reddit/helpers/search/renderMedia.tsx"),
				K = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				q = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				G = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Q = s.n(G),
				J = s("./src/reddit/models/Post/index.ts"),
				X = s("./src/redditGQL/types.ts"),
				Z = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				$ = s("./src/reddit/components/ClassicPost/index.m.less"),
				ee = s.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const se = Object(d.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: d,
					handleVote: x,
					isExpanded: h,
					inSubredditOrProfile: v,
					eventFactory: O,
					flairStyleTemplate: V,
					formatTitle: G,
					hostPostData: $,
					isCheckboxSelected: se,
					isCurrentUserProfilePost: oe,
					isFrontpage: re,
					isGalleryTileLayoutDefault: ne,
					isLoggedIn: ae,
					isOverlay: de,
					imageGalleryCurrentItem: ie,
					moderatorPermissions: ce,
					modModeEnabled: le,
					onClickPost: me,
					onIgnoreReports: pe,
					onOpenReportsDropdown: ue,
					onSizeChanged: be,
					poll: xe,
					post: he,
					postId: ve,
					redditStyle: Oe,
					scrollerItemRef: Ce,
					showBulkActionCheckbox: Ee,
					showEditFlair: je,
					showMedia: Pe,
					shouldShowInsightsButton: fe,
					subredditOrProfile: ye,
					toggleCheckbox: ge,
					userIsOp: Se,
					shouldShowGalleryTileOption: _e,
					showCTAExperimentDesign: Me
				} = e, Ie = Object(l.a)(), Ne = Object(c.a)(h);
				Object(o.useEffect)(() => {
					be && Ne !== h && be(he.id)
				}, [h, be, he.id, Ne]);
				const ke = Oe ? void 0 : V,
					Le = s || void 0,
					we = Object(U.a)(ce),
					Ae = Object(W.a)(ce),
					Te = Object(H.a)(ce),
					De = le && U.a,
					Fe = Object(g.a)(he),
					Be = Object(_.c)(he),
					Re = !!he.media && he.media.type === B.o.RTJSON,
					Ve = Se && Re,
					ze = v && !Pe,
					We = !!he.recommendationContext,
					He = {
						flairStyleTemplate: ke,
						post: he,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: oe,
						isOverlay: de,
						shouldShowSubscribeButton: !(re && ae) || We && ae,
						subredditOrProfile: ye
					},
					Ue = Object(n.t)(he, ie),
					[Ye, Ke] = Object(o.useState)(!1),
					qe = Object(o.useCallback)(() => {
						Ke(!Ye), Ie(Object(q.d)(ve))
					}, [Ye, ve, Ie]);
				let Ge = r.a.createElement(R.a, {
					className: ee.a.classicThumbnail,
					crosspost: Le && he,
					isMeta: he.isMeta,
					post: Le || he,
					redditStyle: Oe,
					templatePlaceholderImage: ke && ke.postPlaceholderImage
				});
				Object(F.b)(he) && (Ge = r.a.createElement(C, null));
				const Qe = Object(J.r)(he);
				return r.a.createElement(N.b, {
					className: Object(a.a)(Q.a.classicPostStyles, ee.a.postContainer, Object(K.a)(e), {
						[ee.a.shouldShowOverflow]: fe
					}, t),
					isOverlay: de,
					style: {
						...Object(K.d)(e),
						...Object(K.b)(ke)
					},
					post: he,
					onClick: me,
					eventFactory: O
				}, r.a.createElement(w.a, {
					model: he,
					handleVote: x,
					showBulkActionCheckbox: Ee,
					isCheckboxSelected: se,
					toggleCheckbox: ge,
					flairStyleTemplate: ke,
					redditStyle: Oe,
					postId: ve
				}), r.a.createElement(I.a, {
					className: fe ? ee.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: ke
				}, r.a.createElement(E.a, {
					className: ee.a.eventMeta,
					post: he
				}), r.a.createElement("div", {
					className: ee.a.mainBody
				}, r.a.createElement("div", {
					className: ze ? ee.a.expandoContainer : ee.a.thumbnailContainer
				}, !ze && Ge, r.a.createElement(j.a, {
					crosspost: Le,
					className: ee.a.rightExpando,
					isExpanded: !!h,
					post: he,
					useMediaIcons: !1
				})), r.a.createElement("div", {
					className: Object(a.a)(ee.a.content, {
						[ee.a.showBulkActionCheckbox]: Ee
					}),
					"data-click-id": "body"
				}, Qe && r.a.createElement(M.a, {
					content: he.recommendationContext.content,
					layout: z.g.Classic,
					post: he
				}), r.a.createElement(A.c, {
					className: xe ? ee.a.titleWithPoll : void 0,
					format: G,
					poll: xe,
					post: he,
					redditStyle: Oe,
					size: A.b.Medium,
					titleColor: ke && ke.postTitleColor,
					isOverlay: de
				}, he.source && !Le && !he.isSurveyAd && r.a.createElement(D.a, {
					href: he.source.url,
					isSponsored: he.isSponsored,
					postId: he.id,
					source: he.source
				}, Object(i.a)(he))), r.a.createElement(k.a, te({
					key: "PostMeta"
				}, He)), le && we && Fe && r.a.createElement(y.a, {
					thing: he
				}), le && we && Be && r.a.createElement(S.a, {
					onIgnoreReports: pe,
					reportable: he
				}), Object(n.v)(he, ie) && r.a.createElement(m.a, {
					ctaExperimentDesign: Me && "classic",
					className: Object(a.a)(ee.a.adLinkWrapper, {
						[ee.a.ctaExperiment]: Me
					})
				}, r.a.createElement(p.a, {
					post: he,
					adLinkContent: Ue,
					ctaExperimentDesign: Me && "classic"
				})), he.discussionType === X.o.Chat && r.a.createElement(Z.a, {
					postId: he.id
				}), r.a.createElement("div", {
					className: ee.a.flatlistContainer
				}, r.a.createElement(j.a, {
					className: ee.a.leftExpando,
					crosspost: Le,
					isExpanded: !!h,
					post: he,
					useMediaIcons: !1
				}), r.a.createElement(u.a, {
					className: ee.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: ke,
					model: he,
					onVoteClick: x
				}), r.a.createElement(P.a, {
					className: ee.a.flatlistSeparator
				}), !he.isSurveyAd && r.a.createElement(P.c, {
					className: ee.a.flatlist,
					currentUser: d,
					hasModFlairPerms: Ae,
					hasModPostPerms: we,
					hasModFullPerms: Te,
					hostPostData: $,
					isOverlay: !!de,
					modModeEnabled: le,
					onClickInsightsButton: qe,
					onIgnoreReports: pe,
					onOpenReportsDropdown: ue,
					post: he,
					shouldShowInsightsButton: fe,
					showEditPost: Ve,
					showEditFlair: je,
					tooltipType: de ? T.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(L.b)({
						editPost: !De,
						hide: !De,
						report: !De,
						mute: !De,
						save: !De
					})
				})), r.a.createElement(f.d, null))), Object(Y.a)(he, ee.a, Ce, h, _e, ne), ye && Ye && r.a.createElement(b.a, {
					className: ee.a.creatorStatsContainer,
					post: he,
					subreddit: ye,
					isOwnProfileStats: !0
				})))
			});
			t.default = Object(V.a)(se)
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CreatorStats").then(s.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, r.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), r.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), r.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/index.m.less": function(e, t, s) {
			e.exports = {
				liveContainer: "reBgd-KYxGiWr_ZyzPgr_",
				userRow: "poHPrsWD-JtPCRh7foOm-",
				isListener: "_3DcaFqbAKhkVLYT6i2vxLy",
				speakerRings: "_1XlH7yy1d0pGBQ0hDDAaDv",
				listener: "_3fwbxY1I7EhKfr8MK7xT0S",
				speaker: "_1zEocOo_0euorSuKdx4-t2",
				snoovatar: "_23HWId-tu5O6LulDxLoVD1",
				userIcon: "Xzl_H3G7Qyd756Y0rQz4w",
				classic: "_2XdJHCLvUWJ2gdGBnugD5t",
				buttonContainer: "_2yhW3k4B2CUUSvt-3mqV3S",
				muteContainer: "_3mxKqH41iEa2lxIov7Eup-",
				muteIcon: "_18bneLE5nnOdUrY8P-eepo",
				fullRow: "_2cJzNEK-EGk9V7LDTIEFb-",
				endedContainer: "_21e_ZHJXEi7zMZ6XWWBz",
				nightMode: "z6LY0qX0g0puWE-RPF8XB",
				liveClassicContainer: "_3JLTqaLlFv8aPfzi9eQazu",
				classicSpeaker: "QsNKjj4EDQH2hYFYQB6T4",
				snoovatarHeadshotContainer: "_28VC5AU-z3J-h80HdMusUT",
				endedClassicContainer: "_2YXJIDv8TLzRj5vNdYs-_t",
				metaStatus: "OvWqIzFfbWF0I-5FMZ18I",
				isLive: "_3Vqz8YzNczoVWpOtpwXAit",
				processingButton: "nxYqAuGeco2RA9q0e9ECw"
			}
		},
		"./src/reddit/components/SubredditContent/EventPostContent/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/eventPosts/index.ts"),
				m = s("./src/reddit/components/ClassicPost/index.tsx"),
				p = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				u = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				b = s("./src/reddit/components/Scroller/Simple.tsx"),
				x = s("./src/reddit/components/SubredditContent/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				v = s("./src/reddit/constants/postLayout.ts"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/helpers/overlay/index.ts"),
				E = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				j = s("./src/reddit/icons/fonts/index.tsx"),
				P = s("./src/reddit/routes/postCreation/index.ts"),
				f = s("./src/reddit/selectors/eventPosts.ts"),
				y = s("./src/reddit/selectors/experiments/shredditModNav.ts"),
				g = s("./src/reddit/components/SubredditContent/index.m.less"),
				S = s.n(g);
			const _ = Object(i.c)({
					eventPosts: f.f,
					isPending: f.d,
					hasData: f.b,
					endCursor: f.a,
					isInShredditModNavExperiment: e => Object(y.a)(e, !0)
				}),
				M = Object(a.b)(_, (e, t) => {
					let {
						subredditName: s
					} = t;
					return {
						onClickPost: t => {
							e(Object(C.a)(t.permalink))
						},
						fetchMorePosts: () => {
							e(Object(l.eventPostsRequested)(s))
						}
					}
				});
			class I extends n.a.PureComponent {
				renderEmptyState() {
					const {
						subredditName: e
					} = this.props;
					return n.a.createElement(p.c, {
						className: S.a.emptyStateContainer,
						text: o.fbt._("No upcoming or live events in r/{subredditName}", [o.fbt._param("subredditName", e)], {
							hk: "3wRma7"
						}),
						childrenPosition: "bottom"
					}, n.a.createElement(j.a, {
						name: "scheduled",
						className: S.a.icon
					}), n.a.createElement(d.a, {
						className: S.a.schedulePostLink,
						to: Object(P.c)(e)
					}, o.fbt._("Create Event Post", null, {
						hk: "PXBmQ"
					})))
				}
				renderBody() {
					const {
						endCursor: e,
						eventPosts: t,
						fetchMorePosts: s,
						hasData: o,
						onClickPost: r
					} = this.props;
					return n.a.createElement("div", {
						className: S.a.contentContainer
					}, n.a.createElement("div", {
						className: S.a.standaloneContainer
					}, o ? n.a.createElement(b.b, {
						className: S.a.scroller,
						onLoadMore: s,
						loadMoreToken: e || void 0
					}, t.map((e, t) => ({
						id: e.id,
						estHeight: Object(E.c)(e, v.g.Classic),
						render: s => n.a.createElement(m.default, {
							key: `event-post-id-${e.id}`,
							postId: e.id,
							className: S.a.eventPostContainer,
							first: 0 === t,
							isOverlay: !1,
							onClickPost: () => r(e)
						})
					}))) : this.renderEmptyState()))
				}
				render() {
					const {
						isPending: e,
						hasData: t,
						isInShredditModNavExperiment: s
					} = this.props;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(u.c, {
						className: Object(c.a)(S.a.topBar, s && "fixed bg-neutral-background mb-xs pr-0", {
							[S.a.default]: !s
						})
					}, n.a.createElement(d.a, {
						to: Object(P.c)(this.props.subredditName)
					}, n.a.createElement(O.l, null, o.fbt._("Schedule an event post", null, {
						hk: "nk1bA"
					})))), n.a.createElement(u.a, null, n.a.createElement(u.b, {
						className: S.a.pageTitle
					}, o.fbt._("Upcoming and live events", null, {
						hk: "MAeQO"
					})), !t && e ? Object(x.a)() : this.renderBody(), t && e && Object(x.a)(1)))
				}
			}
			t.default = M(Object(h.c)(I))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				i = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/postFlair.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts");
			const O = {
					autoplayPref: v.d,
					activeModalId: m.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: v.S,
					moderatorPermissions: b.m,
					modModeEnabled: c.W,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: x.a,
					showMedia: c.t,
					flairStyleTemplate: c.Y,
					showCTAExperimentDesign: u.a
				},
				C = Object(o.b)(() => Object(r.c)(O), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === d.a.upvoted ? Object(n.ib)(s) : Object(n.v)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(n.eb)(s)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(C(Object(i.b)(e)))
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, s, o, n, a) => o ? e.crosspostRootId ? r.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, d(e, s, n, a)) : d(e, s, n, a) : null,
				d = (e, t, s, o) => r.a.createElement(n.a, {
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
				})
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return d
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			}));
			var o = s("./src/reddit/components/CreatorStats/helpers.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case o.b.Available:
							return "insights_shown";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
							return "post_too_old";
						case o.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				d = (e, t) => s => ({
					...Object(n.p)(s),
					action: r.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(n.mb)(s),
					post: Object(n.L)(s, e),
					userSubreddit: Object(n.vb)(s),
					actionInfo: Object(n.d)(s, {
						reason: a(t)
					})
				}),
				i = (e, t) => s => ({
					...Object(n.p)(s),
					action: r.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(n.L)(s, t),
					subreddit: Object(n.mb)(s),
					userSubreddit: Object(n.vb)(s)
				}),
				c = e => {
					switch (e) {
						case o.b.Available:
							return "stats";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
						case o.b.Expired:
							return "no_data";
						case o.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(n.p)(t),
					action: r.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(n.d)(t, {
						pageType: "profile"
					}),
					post: Object(n.L)(t, e, void 0, 0),
					profile: Object(n.U)(t)
				}),
				m = (e, t, s) => o => ({
					...Object(n.p)(o),
					action: r.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(n.d)(o, {
						reason: c(t)
					}),
					post: Object(n.L)(o, e, void 0, s)
				}),
				p = (e, t, s, o, a, d) => i => ({
					...Object(n.p)(i),
					action: r.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(n.d)(i, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(n.L)(i, e, void 0, d),
					subreddit: Object(n.mb)(i),
					outbound: {
						postId: s,
						url: t,
						subredditId: o,
						subredditName: a
					}
				}),
				u = (e, t, s) => o => ({
					...Object(n.p)(o),
					action: r.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(n.d)(o, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(n.L)(o, e, void 0, s),
					subreddit: Object(n.mb)(o)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SubredditContent-EventPostContent.618c11419b354f02a2d7.js.map