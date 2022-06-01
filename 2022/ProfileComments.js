// https://www.redditstatic.com/desktop2x/ProfileComments.7e12a147e6274a90f52a.js
// Retrieved at 6/1/2022, 10:00:11 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments"], {
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileCommentsPending", (function() {
				return T
			})), s.d(t, "profileCommentsLoaded", (function() {
				return F
			})), s.d(t, "profileCommentsFailed", (function() {
				return R
			})), s.d(t, "profileCommentsRequested", (function() {
				return A
			})), s.d(t, "moreItemsPending", (function() {
				return D
			})), s.d(t, "moreItemsLoaded", (function() {
				return B
			})), s.d(t, "moreItemsFailed", (function() {
				return W
			})), s.d(t, "moreItemsRequested", (function() {
				return V
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/difference.js"),
				n = s.n(o),
				r = s("./node_modules/lodash/pick.js"),
				i = s.n(r),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makeListingKey/index.ts"),
				c = s("./src/reddit/actions/contentGate.ts"),
				l = s("./src/reddit/actions/externalAccount.ts"),
				m = s("./src/reddit/actions/moderatingSubreddits.ts"),
				p = s("./src/reddit/actions/pages/profileShared.ts"),
				u = s("./src/reddit/actions/platform.ts"),
				h = s("./src/reddit/actions/profile/index.ts"),
				b = s("./src/reddit/actions/subreddit.ts"),
				x = s("./src/reddit/constants/errors.ts"),
				C = s("./src/reddit/constants/parameters.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/config.ts"),
				O = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				E = s("./src/lib/makeApiRequest/index.ts"),
				j = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				w = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				y = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				k = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const P = (e, t, s, o) => {
				let n = Object(j.a)(Object(O.a)(Object(y.a)(Object(k.a)(`${v.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return o && (n = Object(w.a)(n)), Object(E.a)(e, {
					data: s,
					endpoint: n,
					method: g.jb.GET
				})
			};
			var I = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				_ = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				M = s("./src/reddit/selectors/profile.ts"),
				L = s("./src/reddit/selectors/profileComments.ts"),
				N = s("./src/reddit/actions/pages/profileComments/constants.ts");
			const T = Object(a.a)(N.f),
				F = Object(a.a)(N.e),
				R = Object(a.a)(N.d),
				A = e => async (t, s, o) => {
					const {
						queryParams: n,
						params: r
					} = e, {
						sort: a,
						t: f
					} = Object(p.b)(n), {
						profileName: v
					} = r, O = Object(d.a)(`u_${v}`, a, e.queryParams), {
						profileCommentsPage: g
					} = s(), E = g.commentIds[O], j = g.api.error[O], w = g.api.pending[O];
					if (await t(h.d(v)), w || E && !j) {
						if (E) {
							const e = Object(M.q)(s(), {
								profileName: v
							});
							t(u.m({
								title: e
							}))
						}
						return
					}
					const y = {
						...i()(e.queryParams, [...C.l, C.h]),
						sort: a,
						t: Object(I.a)(a, f)
					};
					t(T({
						key: O
					}));
					const k = await Object(_.a)("profileComments", () => P(o.apiContext(), v, y, Object(S.a)(s())));
					if (!k.ok) return t(R({
						account: k.body.data ? k.body.data.account : null,
						error: k.body.reason ? {
							type: k.body.reason
						} : k.error,
						key: O
					})), k.body.reason === x.a.DeletedProfile && t(Object(c.s)({
						profileName: v
					})), void t(u.n(k.status));
					const L = k.body;
					t(F({
						key: O,
						meta: s().meta,
						...L
					})), await Promise.all([t(Object(p.c)(v)), t(Object(b.q)()), t(Object(m.b)()), t(l.o(v))])
				}, D = Object(a.a)(N.c), B = Object(a.a)(N.b), W = Object(a.a)(N.a), V = () => async (e, t, s) => {
					let {
						apiContext: o
					} = s;
					const r = t(),
						{
							currentPage: a
						} = r.platform;
					if (!a || !a.routeMatch) return;
					const {
						queryParams: c,
						params: l
					} = a.routeMatch.match, {
						sort: m,
						t: u
					} = Object(p.b)(c), {
						profileName: h
					} = l, b = Object(d.a)(`u_${h}`, m, c), x = Object(L.d)(r, {
						listingKey: b
					});
					if (!x) return;
					const v = Object(L.b)(r, {
							listingKey: b
						}),
						O = Object(L.c)(r, {
							listingKey: b
						}),
						g = O && O[x.token];
					if (v || g) return;
					e(D({
						key: b,
						fetchedToken: x.token
					}));
					const E = await P(o(), h, {
						after: x.token,
						dist: x.dist,
						sort: m,
						t: u,
						...i()(c, C.l),
						layout: Object(f.S)(r, {}).toLowerCase()
					}, Object(S.a)(r));
					if (E.ok) {
						const t = Object(L.f)(r, {
								listingKey: b
							}),
							s = {
								...E.body,
								commentIds: n()(E.body.commentIds, t)
							};
						e(B({
							fetchedToken: x.token,
							key: b,
							meta: r.meta,
							...s
						}))
					} else e(W({
						account: E.body.data ? E.body.data.account : null,
						error: E.error,
						fetchedToken: x.token,
						key: b
					}))
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
			var o = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				n = s.n(o);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = r
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
			var o = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: d,
					callToAction: l,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let p = d.displayText;
				return d.displayText.length >= 40 && (p = d.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: c.a.leftSideContent
				}, m && !n && r.a.createElement("span", {
					className: c.a.caption,
					title: m
				}, m), r.a.createElement(a.a, {
					href: d.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d,
					className: c.a.displayUrl
				}, p)), l && r.a.createElement(i.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...s
				} = e;
				return n.a.createElement(i.b, c({
					className: Object(r.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = s("./src/reddit/components/CreatorStats/loader.tsx"),
				b = s("./src/config.ts"),
				x = s("./node_modules/react-redux/es/index.js"),
				C = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/Econ/Audio/index.m.less"),
				v = s.n(f),
				O = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				g = s("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var j = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s
					} = t, r = () => Math.floor(10 * Math.random() + 1), a = Object(x.e)(C.cb), [d, c] = Object(o.useState)(!1), [l, m] = Object(o.useState)(r());
					return Object(o.useEffect)(() => {
						const e = setInterval(() => {
							c(!0), setTimeout(() => c(!1), 3500), m(r())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == s ? void 0 : s.isLive) ? n.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: v.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, n.a.createElement("div", {
						className: v.a.classicSpeaker
					}, d && n.a.createElement(g.a, {
						className: Object(i.a)(v.a.speakerRings, {
							[v.a.nightMode]: a
						})
					}), n.a.createElement("img", {
						key: `audioPostAvatar--${l}`,
						className: v.a.snoovatar,
						src: `${b.a.assetPath}/img/talk/avatars/${l}.png`,
						alt: E._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !d && n.a.createElement("div", {
						className: v.a.muteContainer
					}, n.a.createElement(O.a, {
						className: v.a.muteIcon
					})))) : n.a.createElement("div", {
						className: v.a.endedClassicContainer
					}, n.a.createElement(O.a, {
						className: v.a.muteIcon
					}))
				},
				w = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				y = s("./src/reddit/components/ExpandoButton/index.tsx"),
				k = s("./src/reddit/components/Flatlist/index.tsx"),
				P = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				I = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				_ = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				S = s("./src/reddit/components/ModModeReports/index.tsx"),
				M = s("./src/reddit/components/ModModeReports/helpers.ts"),
				L = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				N = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				T = s("./src/reddit/components/PostContainer/index.tsx"),
				F = s("./src/reddit/components/PostMeta/index.tsx"),
				R = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				D = s("./src/reddit/components/PostTitle/index.tsx"),
				B = s("./src/reddit/components/PostTopMeta/index.tsx"),
				W = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				V = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				U = s("./src/reddit/models/Audio/index.ts"),
				H = s("./src/reddit/models/Media/index.ts"),
				G = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				K = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				q = s("./src/reddit/constants/postLayout.ts"),
				J = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				z = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Z = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Q = s("./src/reddit/helpers/localStorage/index.ts"),
				Y = s("./src/reddit/helpers/search/renderMedia.tsx"),
				X = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				$ = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				te = s.n(ee),
				se = s("./src/reddit/components/ClassicPost/index.m.less"),
				oe = s.n(se);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const re = Object(a.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: a,
					handleVote: b,
					isExpanded: x,
					inSubredditOrProfile: C,
					eventFactory: f,
					first: v,
					flairStyleTemplate: O,
					formatTitle: g,
					hostPostData: E,
					isCheckboxSelected: K,
					isCurrentUserProfilePost: ee,
					isFrontpage: se,
					isGalleryTileLayoutDefault: re,
					isLoggedIn: ie,
					isOverlay: ae,
					isProfileCreatorStatsEnabled: de,
					imageGalleryCurrentItem: ce,
					moderatorPermissions: le,
					modModeEnabled: me,
					onClickPost: pe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: he,
					onSizeChanged: be,
					poll: xe,
					post: Ce,
					postId: fe,
					redditStyle: ve,
					scrollerItemRef: Oe,
					showBulkActionCheckbox: ge,
					showEditFlair: Ee,
					showMedia: je,
					subredditOrProfile: we,
					toggleCheckbox: ye,
					userIsOp: ke,
					shouldShowGalleryTileOption: Pe,
					showPromotedCTA: Ie
				} = e, _e = Object(l.a)(), Se = ke && de, Me = Object(c.a)(x);
				Object(o.useEffect)(() => {
					be && Me !== x && be(Ce.id)
				}, [x, be, Ce.id, Me]);
				const Le = ve ? void 0 : O,
					Ne = s || void 0,
					Te = Object(Z.a)(le),
					Fe = Object(J.a)(le),
					Re = Object(z.a)(le),
					Ae = me && Z.a,
					De = Object(_.a)(Ce),
					Be = Object(M.c)(Ce),
					We = !!Ce.media && Ce.media.type === H.o.RTJSON,
					Ve = ke && We,
					Ue = C && !je,
					He = !!Ce.media && Object(H.H)(Ce.media),
					Ge = !!Ce.recommendationContext,
					Ke = {
						flairStyleTemplate: Le,
						post: Ce,
						inSubredditOrProfile: C,
						isCurrentUserProfilePost: ee,
						isOverlay: ae,
						shouldShowSubscribeButton: !(se && ie) || Ge && ie,
						subredditOrProfile: we
					},
					qe = Object(r.t)(Ce, ce),
					{
						source: Je
					} = qe,
					[ze, Ze] = Object(o.useState)(!1),
					Qe = Object(o.useCallback)(() => {
						Ze(!ze), Object(Q.Kb)(), _e(Object($.d)(fe))
					}, [ze, fe, _e]);
				let Ye = n.a.createElement(G.a, {
					className: oe.a.classicThumbnail,
					crosspost: Ne && Ce,
					isMeta: Ce.isMeta,
					post: Ne || Ce,
					redditStyle: ve,
					templatePlaceholderImage: Le && Le.postPlaceholderImage,
					removeLink: He
				});
				Object(U.b)(Ce) && (Ye = n.a.createElement(j, {
					post: Ce
				}));
				const Xe = n.a.createElement(T.a, {
					className: Object(i.a)(te.a.classicPostStyles, oe.a.postContainer, Object(X.a)(e), {
						[oe.a.mFirst]: v,
						[oe.a.shouldShowOverflow]: Se
					}, t),
					isOverlay: ae,
					style: {
						...Object(X.d)(e),
						...Object(X.b)(Le)
					},
					post: Ce,
					onClick: pe,
					eventFactory: f
				}, n.a.createElement(A.a, {
					model: Ce,
					handleVote: b,
					showBulkActionCheckbox: ge,
					isCheckboxSelected: K,
					toggleCheckbox: ye,
					flairStyleTemplate: Le,
					redditStyle: ve,
					postId: fe
				}), n.a.createElement(N.a, {
					className: Se ? oe.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Le
				}, n.a.createElement(w.a, {
					className: oe.a.eventMeta,
					post: Ce
				}), n.a.createElement("div", {
					className: oe.a.mainBody
				}, n.a.createElement("div", {
					className: Ue ? oe.a.expandoContainer : oe.a.thumbnailContainer
				}, !Ue && Ye, n.a.createElement(y.a, {
					crosspost: Ne,
					className: oe.a.rightExpando,
					isExpanded: !!x,
					post: Ce,
					useMediaIcons: !1
				})), n.a.createElement("div", {
					className: Object(i.a)(oe.a.content, {
						[oe.a.showBulkActionCheckbox]: ge
					}),
					"data-click-id": "body"
				}, !!Ce.recommendationContext && n.a.createElement(L.a, {
					content: Ce.recommendationContext.content,
					layout: q.g.Classic,
					post: Ce
				}), n.a.createElement(D.c, {
					className: xe ? oe.a.titleWithPoll : void 0,
					format: g,
					poll: xe,
					post: Ce,
					redditStyle: ve,
					size: D.b.Medium,
					titleColor: Le && Le.postTitleColor,
					isOverlay: ae
				}, Ce.source && !Ne && !Ce.isSurveyAd && n.a.createElement(V.a, {
					href: Ce.source.url,
					isSponsored: Ce.isSponsored,
					postId: Ce.id,
					source: Ce.source
				}, Object(d.a)(Ce))), n.a.createElement(F.a, ne({
					key: "PostMeta"
				}, Ke)), me && Te && De && n.a.createElement(I.a, {
					thing: Ce
				}), me && Te && Be && n.a.createElement(S.a, {
					onIgnoreReports: ue,
					reportable: Ce
				}), Ie && Je && Je.url && !Ce.isSurveyAd && n.a.createElement(m.a, {
					className: oe.a.adLinkWrapper
				}, n.a.createElement(p.a, {
					post: Ce,
					adLinkContent: qe
				})), n.a.createElement("div", {
					className: oe.a.flatlistContainer
				}, n.a.createElement(y.a, {
					className: oe.a.leftExpando,
					crosspost: Ne,
					isExpanded: !!x,
					post: Ce,
					useMediaIcons: !1
				}), n.a.createElement(u.a, {
					className: oe.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Le,
					model: Ce,
					onVoteClick: b
				}), n.a.createElement(k.a, {
					className: oe.a.flatlistSeparator
				}), !Ce.isSurveyAd && n.a.createElement(k.c, {
					className: oe.a.flatlist,
					currentUser: a,
					hasModFlairPerms: Fe,
					hasModPostPerms: Te,
					hasModFullPerms: Re,
					hostPostData: E,
					isOverlay: !!ae,
					modModeEnabled: me,
					onClickInsightsButton: Qe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: he,
					post: Ce,
					shouldShowInsightsButton: Se,
					showEditPost: Ve,
					showEditFlair: Ee,
					tooltipType: ae ? B.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(R.b)({
						editPost: !Ae,
						hide: !Ae,
						report: !Ae
					})
				})), n.a.createElement(P.d, null))), Object(Y.a)(Ce, oe.a, Oe, x, Pe, re), we && ze && n.a.createElement(h.a, {
					className: oe.a.creatorStatsContainer,
					post: Ce,
					subreddit: we,
					isOwnProfileStats: !0
				})));
				return n.a.createElement(W.b, null, Xe)
			});
			t.default = Object(K.a)(re)
		},
		"./src/reddit/components/CommentBodyExpander/index.m.less": function(e, t, s) {
			e.exports = {
				collapsedCommentWrapper: "_3eqiPvSIRa-NZBdZNmskLn",
				collapsedCommentLine: "_3w5mzp5LqE702onvC_Wok3",
				rtjCollapsed: "_1J7xT7G-fgDlzIqRgaBrrB",
				seeMore: "_3NPaMDmW2g_XhEdxfn6inI"
			}
		},
		"./src/reddit/components/CommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const c = Object(i.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(r.b)(c);
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: o,
						onClick: r,
						style: i
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(s, `Comment ${o.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, o))(t)
						},
						style: i
					}, t)
				}
			}
			t.a = l(Object(d.a)(m))
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/comment/moderation.ts"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = s("./src/reddit/icons/svgs/Show/index.tsx"),
				C = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				f = s.n(C);
			const v = h.a.wrapped(x.a, "Show", f.a);
			var O = e => n.a.createElement(b.g, null, !e.comment.isApproved && n.a.createElement(b.e, {
				displayText: e.comment.approvedBy ? u.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : u.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, n.a.createElement(b.a, null)), !e.comment.bannedBy && n.a.createElement(n.a.Fragment, null, n.a.createElement(b.e, {
				displayText: e.comment.isRemoved ? u.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : u.fbt._("Remove", null, {
					hk: "3tYl0U"
				}),
				onClick: e.onRemoveComment
			}, n.a.createElement(b.i, null)), n.a.createElement(b.e, {
				displayText: e.comment.isSpam ? u.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : u.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, n.a.createElement(b.j, null)), n.a.createElement(b.e, {
				displayText: e.comment.isLocked ? u.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : u.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, n.a.createElement(b.h, null))), e.comment.collapsedBecauseCrowdControl && n.a.createElement(b.e, {
				displayText: u.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, n.a.createElement(v, null)));
			const g = h.a.wrapped(l.a, "StyledDropdown", f.a),
				E = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				j = Object(r.b)(E, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(a.a)(s.id)),
						onLockComment: () => e(Object(a.c)(s.id)),
						onRemoveComment: () => e(Object(a.e)(s.id, !1)),
						onSpamComment: () => e(Object(a.e)(s.id, !0)),
						onShowComment: () => e(Object(a.d)(s.id))
					}
				}),
				w = Object(d.a)(g),
				y = j(Object(c.c)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						onApproveComment: o,
						onLockComment: r,
						onRemoveComment: i,
						onSpamComment: a,
						onShowComment: d,
						sendEvent: c,
						tooltipId: l
					} = e;
					return n.a.createElement(w, {
						isOpen: s,
						tooltipId: l
					}, n.a.createElement(O, {
						onApproveComment: () => {
							o(), c(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), c(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							a(), c(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							r(), c(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), c(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = y
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				dropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				DeleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				deleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				PencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				pencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				ReportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				reportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				SavedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				savedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				SaveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				saveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				OverflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				overflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				ModToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				modToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				ModActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				modActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				Flatlist: "_1PB2jayxHhG493U6RP5qLr",
				flatlist: "_1PB2jayxHhG493U6RP5qLr",
				Button: "VFryWeVNuBPgqyjc5h68S",
				button: "VFryWeVNuBPgqyjc5h68S"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.m.less": function(e, t, s) {
			e.exports = {
				TopMeta: "Ov9DvczDidxNqJMR_axF2",
				topMeta: "Ov9DvczDidxNqJMR_axF2",
				CommentBody: "_a5_x7qimk18YbGSwE8Fy",
				commentBody: "_a5_x7qimk18YbGSwE8Fy",
				ProfileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				profileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				isRemoved: "_7kIPhlgZcmDxoV_xaWnX9"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				h = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, C = 10 * d.K;
			class f extends n.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						p.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (x + 1) && p.a.write(() => {
								this.setState({
									expandToggled: !0
								})
							})
						})
					}, C), this.onShowMore = e => {
						e.preventDefault(), this.setState({
							expandToggled: !0
						})
					}, this.state = {
						expandToggled: e.isExpanded
					}
				}
				render() {
					const {
						children: e,
						height: t
					} = this.props, {
						expandToggled: s
					} = this.state;
					return s ? n.a.createElement("div", null, e()) : n.a.createElement("div", {
						className: h.a.collapsedCommentWrapper
					}, n.a.createElement("div", {
						className: h.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, n.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(h.a.rtjCollapsed))), n.a.createElement("a", {
						className: h.a.seeMore,
						onClick: this.onShowMore
					}, b._("see more", null, {
						hk: "1Cx4qU"
					})))
				}
				componentDidUpdate() {
					const {
						expandToggled: e
					} = this.state;
					e && window && window.removeEventListener("resize", this.handleResize)
				}
				componentDidMount() {
					var e, t;
					if (this.state.expandToggled) return null;
					!(null === (t = null === (e = this.commentElement) || void 0 === e ? void 0 : e.textContent) || void 0 === t ? void 0 : t.trim().includes("\n")) && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var v = f,
				O = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./node_modules/lodash/noop.js"),
				E = s.n(g),
				j = s("./src/lib/makeCommentsPageKey/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				y = s("./src/reddit/actions/comment/index.ts"),
				k = s("./src/reddit/actions/comment/authoring.ts"),
				P = s("./src/reddit/actions/comment/moderation.ts"),
				I = s("./src/reddit/actions/gold/modals.ts"),
				_ = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				M = s("./src/reddit/actions/tooltip.ts"),
				L = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				N = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				T = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				F = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				R = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				A = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				D = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				W = s("./src/reddit/contexts/InsideOverlay.tsx"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				H = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				G = s("./src/reddit/helpers/overlay/index.ts"),
				K = s("./src/reddit/helpers/trackers/lightbox.ts"),
				q = s("./src/reddit/models/PostDraft/index.ts"),
				J = s("./src/reddit/models/Comment/index.ts"),
				z = s("./src/reddit/selectors/activeModalId.ts"),
				Z = s("./src/reddit/selectors/comments.ts"),
				Q = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Y = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/selectors/tooltip.ts"),
				$ = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ee = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				te = s("./src/reddit/selectors/user.ts"),
				se = s("./src/reddit/components/OverflowMenu/index.tsx"),
				oe = s("./src/reddit/components/ReportFlow/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/new.tsx"),
				re = s("./src/reddit/components/ShareMenu/index.tsx"),
				ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ae = s("./src/reddit/controls/Dropdown/Row.tsx"),
				de = s("./src/reddit/helpers/trackers/modTools.ts"),
				ce = s("./src/reddit/layout/row/Inline/index.tsx"),
				le = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				me = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				he = s.n(ue),
				be = s("./src/lib/constants/icons.ts"),
				xe = s("./src/lib/lessComponent.tsx"),
				Ce = s("./src/reddit/icons/fonts/index.tsx"),
				fe = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const ve = xe.a.wrapped(se.b, "OverflowMenu", he.a),
				Oe = xe.a.wrapped(N.a, "ModToolsFlatlist", he.a),
				ge = xe.a.wrapped(A.a, "ModActionsMenu", he.a),
				Ee = xe.a.wrapped(ae.b, "DropdownRow", he.a),
				je = xe.a.wrapped(ce.a, "Flatlist", he.a),
				we = xe.a.button("Button", he.a),
				ye = Object(V.u)(),
				ke = e => `Comment-${e}--Modal--DeleteComment`,
				Pe = e => `Distinguish--Dropdown--${e}`,
				Ie = (e, t) => `${e}--${t}-overflow-menu`,
				_e = e => `View--Reports--${e}`,
				Se = Object(i.c)({
					activeTooltipId: X.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(z.a)(e) === ke(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.D)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: te.P,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: te.k,
					modModeEnabled: V.U,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var o, n;
						return (null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === s.id
					},
					subreddit: V.r,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: ee.a,
					isTrueblockPCBlockeeEnabled: $.d
				});
			class Me extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(de.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(U.d)(U.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(de.a)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(de.a)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(de.a)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(de.a)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(de.b)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(K.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(de.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(de.e)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? n.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: oe.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : n.a.createElement(oe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: oe.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						showModTools: r
					} = this.props, i = Object(H.a)(s), a = !!t && t.displayText === e.author;
					if (r && i) return o ? n.a.createElement(Oe, {
						comment: e,
						isCommentAuthor: a
					}) : n.a.createElement(ge, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(me.a, null), n.a.createElement(L.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, o = Object(D.a)(e);
					if (s && Object(D.c)(e) && !t) return n.a.createElement(T.a, {
						text: `${o}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === _e(e.id),
						id: _e(e.id)
					}, n.a.createElement(B.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: _e(e.id)
					}), e.ignoreReports ? n.a.createElement(le.a, null) : n.a.createElement(pe.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						onDistinguishComment: r,
						showModTools: i
					} = this.props, a = Object(H.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (i && d && !e.bannedBy && (c || a && !o)) return n.a.createElement(T.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Pe(e.id)
					}, n.a.createElement(fe.a, null), n.a.createElement(R.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Pe(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Pe(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: s,
						commentsPageKey: o,
						currentUser: r,
						deleteComment: i,
						isLoggedIn: a,
						isPendingDeletion: d,
						moderatorPermissions: c,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: p,
						isTrueblockPCBlockeeEnabled: u
					} = this.props, h = Object(H.a)(c), b = !!r && r.displayText === e.author, x = (!l && !e.isLocked || h && a) && !(Object(J.g)(e) && u), C = r && e.isGildable && !(Object(J.g)(e) && u);
					return n.a.createElement("div", {
						className: s
					}, n.a.createElement(je, null, x && n.a.createElement(we, {
						onClick: this.handleReply,
						disabled: d
					}, O.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), C && n.a.createElement(we, {
						onClick: this.handleGild
					}, O.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), n.a.createElement(re.a, {
						dropdownId: `${o}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, n.a.createElement(we, {
						onClick: this.sendCommentEventWithNameShare
					}, O.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), n.a.createElement(ve, {
						dropdownId: Ie(o, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !d && n.a.createElement(Ee, {
						displayText: O.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, n.a.createElement(Ce.a, {
						name: be.a.report
					})), n.a.createElement(Ee, {
						displayText: e.isSaved ? O.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : O.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(Ce.a, {
						name: be.a.saved
					}) : n.a.createElement(Ce.a, {
						name: be.a.save
					})), b && n.a.createElement(Ee, {
						displayText: O.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, n.a.createElement(Ce.a, {
						name: be.a.edit
					})), b && n.a.createElement(Ee, {
						displayText: O.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, n.a.createElement(Ce.a, {
						name: be.a.delete
					}))), this.props.isConfirmModalOpen && n.a.createElement(F.a, {
						actionText: O.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: O.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: O.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: O.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: i,
						toggleModal: p,
						trackClick: E.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Le = ye(Object(r.b)(Se, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						deleteComment: () => o && e(Object(k.i)(s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(P.b)(s.id, t, o)),
						onIgnoreReports: () => e(Object(P.g)(s.id)),
						onGildClick: t => e(Object(I.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(S.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(M.h)({
							tooltipId: Pe(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(M.h)({
							tooltipId: _e(s.id)
						})),
						onToggleSave: () => e(Object(y.m)(s.id)),
						handleDelete: () => {
							e(Object(_.i)(ke(s.id))), e(Object(M.h)({
								tooltipId: Ie(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(j.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(w.a)(q.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(G.a)(t)), e(Object(k.f)(n))
						},
						handleReply: t => {
							const o = Object(j.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(G.a)(t)), e(Object(k.g)(n))
						},
						toggleDeleteCommentModal: () => e(Object(_.i)(ke(s.id)))
					}
				})(Object(ie.c)(Object(W.b)(Me)))),
				Ne = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Te = s("./src/reddit/components/RichTextJson/index.tsx"),
				Fe = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Re = s("./src/reddit/selectors/commentSelector.ts"),
				Ae = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				De = s.n(Ae);
			const Be = xe.a.wrapped(Ne.a, "TopMeta", De.a),
				We = xe.a.div("ProfileCommentWrapper", De.a),
				Ve = xe.a.div("CommentBody", De.a),
				Ue = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(Re.b)(e, t),
					flair: Z.e
				})),
				He = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Ue(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: o,
					isExpanded: r,
					showFlatlist: i,
					showModTools: c
				} = e, l = s => n.a.createElement(Te.a, {
					className: s,
					content: Object(Fe.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: He(e)
				});
				return n.a.createElement(We, {
					className: Object(a.a)({
						[De.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(Be, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(Ve, null, r ? l() : n.a.createElement(v, {
					height: d.Ub,
					isExpanded: r
				}, l)), !t.isDeleted && i && n.a.createElement(Le, {
					comment: t,
					commentsPageKey: s,
					showModTools: c
				})))
			})
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
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, s) {
			e.exports = {
				DistinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				distinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				Inline: "_2fiLaXOPdMYold0b-FKdVN",
				inline: "_2fiLaXOPdMYold0b-FKdVN",
				RadioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				radioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				RadioOn: "_1EcSEYj-g98-QR-5idlQZr",
				radioOn: "_1EcSEYj-g98-QR-5idlQZr",
				DistinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO",
				distinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/constants/index.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(p);
			const h = a.a.div("DistinguishWrapper", u.a),
				b = a.a.wrapped(m.a, "Inline", u.a),
				x = a.a.wrapped(c.a, "RadioOff", u.a),
				C = a.a.wrapped(l.a, "RadioOn", u.a),
				f = e => n.a.createElement(b, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? n.a.createElement(C, null) : n.a.createElement(x, null), e.text),
				v = a.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: o,
						isUserEmployee: a,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: p
					} = e;
					return n.a.createElement(h, {
						className: t,
						style: s
					}, n.a.createElement(f, {
						onClick: () => p(r.G.NONE, null),
						selected: !c && !o,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && n.a.createElement(f, {
						onClick: () => p(r.G.MODERATOR, null),
						selected: c && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && n.a.createElement(f, {
						onClick: () => p(r.G.MODERATOR, !0),
						selected: c && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && n.a.createElement(f, {
						onClick: () => p(r.G.ADMIN, null),
						selected: o && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && m && n.a.createElement(f, {
						onClick: () => p(r.G.ADMIN, !0),
						selected: o && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var O = Object(d.a)(v);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: p
				} = e;
				return n.a.createElement("div", {
					className: t,
					id: p
				}, n.a.createElement(O, {
					isAdminDistinguished: s,
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: p,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.G.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.G.ADMIN ? m("admin_distinguish") : a && e !== r.G.MODERATOR ? m("undistinguish") : s && e !== r.G.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, n.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), n.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), n.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					width: "226",
					height: "226",
					viewBox: "0 0 226 226",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", {
					opacity: "0.8"
				}, n.a.createElement("rect", {
					opacity: "0.8",
					x: "36.7704",
					y: "36.7703",
					width: "152.462",
					height: "152.462",
					rx: "76.2308",
					stroke: "url(#paint0_linear)",
					strokeWidth: "4"
				}), n.a.createElement("rect", {
					opacity: "0.5",
					x: "18.8851",
					y: "18.8822",
					width: "188.231",
					height: "188.231",
					rx: "94.1153",
					stroke: "url(#paint1_linear)",
					strokeWidth: "3"
				}), n.a.createElement("rect", {
					opacity: "0.3",
					x: "1.25",
					y: "1.25",
					width: "223.5",
					height: "223.5",
					rx: "111.75",
					stroke: "url(#paint2_linear)",
					strokeWidth: "2.5"
				})), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: "paint0_linear",
					x1: "17.886",
					y1: "34.7703",
					x2: "213.283",
					y2: "40.3684",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), n.a.createElement("linearGradient", {
					id: "paint1_linear",
					x1: "-3.25127",
					y1: "17.3822",
					x2: "235.567",
					y2: "24.2243",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), n.a.createElement("linearGradient", {
					id: "paint2_linear",
					x1: "-24.3885",
					y1: "2.87774e-05",
					x2: "257.851",
					y2: "8.08615",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const h = a.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: o
				} = e;
				if (!Object(m.a)(o)) return null;
				const a = o && o.eventInfo,
					p = Object(l.a)(o),
					b = a && Object(i.c)(a.eventStart, a.eventEnd);
				return n.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, n.a.createElement(h, {
					className: u.a.eventMetaWrapper
				}, n.a.createElement(d.a, {
					post: o
				}), !p && b && n.a.createElement(c.a, {
					className: u.a.eventFollowButton,
					post: o,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(c);
			var m = e => n.a.createElement("i", {
				className: Object(a.a)(Object(d.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var p = e => n.a.createElement("i", {
					className: Object(a.a)(Object(d.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				u = s("./src/reddit/components/HumanDate/index.tsx"),
				h = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				b = s.n(h),
				x = s("./src/lib/lessComponent.tsx");
			const C = x.a.span("PostEventFutureText", b.a),
				f = x.a.span("PostEventPastText", b.a),
				v = x.a.span("PostEventNowText", b.a),
				O = x.a.span("Container", b.a),
				g = x.a.wrapped(m, "CalendarIcon", b.a),
				E = x.a.wrapped(p, "LiveIcon", b.a),
				j = x.a.div("LoadingState", b.a);
			class w extends o.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: o,
						eventIsLive: a,
						eventStart: d
					} = s, c = Object(r.e)(d, o);
					let l, m;
					if (this.state.mounted || c === r.a.Live) l = n.a.createElement(u.c, {
						startTime: d,
						endTime: o,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = n.a.createElement(j, {
							className: e
						})
					}
					if (a) m = n.a.createElement(v, null, n.a.createElement(E, null), l);
					else if (c === r.a.Future) m = n.a.createElement(C, null, n.a.createElement(g, null), l);
					else {
						if (c !== r.a.Past) return null;
						m = n.a.createElement(f, null, n.a.createElement(g, null), l)
					}
					return n.a.createElement(O, {
						className: e
					}, m)
				}
			}
			t.a = w
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/path/index.ts"),
				u = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				C = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				f = s("./src/telemetry/models/Outbound.ts"),
				v = s("./src/reddit/components/ExpandoButton/index.m.less"),
				O = s.n(v);
			const g = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(p.b)(t.permalink), t.id))
				})),
				E = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(d.a)(O.a.icon, O.a.hideOnHover);
					if (t) return r.a.createElement(h.a, {
						name: "crosspost",
						className: o
					});
					if (s.pollData) return r.a.createElement(h.a, {
						name: "poll_post",
						className: o
					});
					if (s.audioRoom) return r.a.createElement(h.a, {
						name: "audio",
						className: o
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return r.a.createElement(h.a, {
								name: "gif_post",
								className: o
							});
						case b.o.IMAGE:
							return r.a.createElement(h.a, {
								name: "image_post",
								className: o
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return r.a.createElement(h.a, {
								name: "text_post",
								className: o
							});
						case b.o.VIDEO:
							return r.a.createElement(h.a, {
								name: "video_post",
								className: o
							});
						case b.o.GALLERY:
							return r.a.createElement(h.a, {
								name: "media_gallery",
								className: o
							});
						case b.o.EMBED:
						default:
							return r.a.createElement(h.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = g(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: l,
					isExpanded: p,
					post: b,
					toggle: v,
					useMediaIcons: g
				} = e, j = s || b, w = Object(i.e)(C.b), y = Object(i.e)(C.c), k = t => {
					(w || y) && (t.preventDefault(), e.showModalOnPostLinkClick(j))
				}, P = j.media, I = Object(x.p)(b), _ = n && !!s;
				return P && !I && !(("rtjson" === P.type || "text" === P.type || "liveaudio" === P.type) && !Object(u.a)(j)) || !!b.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, O.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					onClick: v
				}, p ? r.a.createElement(h.a, {
					name: "collapse",
					className: O.a.icon
				}) : g ? r.a.createElement(r.a.Fragment, null, E(j.media && j.media.type, _, b), r.a.createElement(h.a, {
					name: "expand",
					className: Object(d.a)(O.a.icon, O.a.showOnHover)
				})) : r.a.createElement(h.a, {
					name: "expand",
					className: O.a.icon
				})) : j.source && j.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, O.a.outer),
					"data-click-id": "expando_open",
					href: j.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? f.SourceElement.PostImage : f.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(h.a, {
					name: "external_link",
					className: Object(d.a)(O.a.icon, O.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, O.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(j.permalink),
					rel: "nofollow",
					onClick: k
				}, r.a.createElement(h.a, {
					name: "text_post",
					className: O.a.icon
				}))
			})
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, s) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const p = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: o
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : n.a.createElement(a.a, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === d.g.Classic,
						[m.a.compactLayout]: s === d.g.Compact,
						[m.a.largeLayout]: s === d.g.Large
					}),
					content: t,
					rtJsonElementProps: p(o),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, s) {
			e.exports = {
				commentOuterWrapper: "_1g70Ndz7edo5LA6hie1Gkt",
				commentWrapper: "_324SLny5spJ682AiI73uBO",
				isLast: "_2nq8DZns5TUNKoe0aDsW4K",
				isAwarded: "_3L-s9jSlG2xSayzJ_b7J1t",
				isNightmodeOn: "Cd5iGkxl9fzuGE1cWMHC4",
				isFirst: "q4WgOJAmvFRFKX_yrlG-1",
				commentSeparator: "_3H85Xyyv141qju7KQFQ_d5",
				commentContentWrapper: "_27uDfyCMhkucg8xWyoTLYp"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/ClassicPost/index.tsx"),
				i = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				C = s("./src/reddit/selectors/communityAwards.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				O = s.n(v);
			const g = Object(i.b)(() => Object(a.c)({
				comment: x.b,
				isAwarded: (e, t) => {
					const s = Object(x.b)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(C.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: f.cb
			}), e => ({
				openPost: t => e(Object(m.L)(t))
			}));
			var E = Object(l.a)(g(e => {
					const {
						comment: t,
						commentId: s,
						first: o,
						isAwarded: r,
						isNightmodeOn: i,
						last: a,
						openPost: d,
						showModTools: l
					} = e;
					if (!t) return null;
					return n.a.createElement(p.a, {
						comment: t,
						onClick: (e, t) => {
							d({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(b.e)(e)
						}
					}, n.a.createElement("div", {
						className: Object(c.a)(O.a.commentOuterWrapper, {
							[O.a.isLast]: a,
							[O.a.isAwarded]: r,
							[O.a.isNightmodeOn]: i
						})
					}, n.a.createElement("div", {
						className: Object(c.a)(O.a.commentWrapper, {
							[O.a.isFirst]: o
						})
					}, n.a.createElement("div", {
						className: O.a.commentSeparator
					}), t.parentId && n.a.createElement("div", {
						className: O.a.commentSeparator
					}), n.a.createElement("div", {
						className: O.a.commentContentWrapper
					}, n.a.createElement(u.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				j = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/helpers/isComment.ts"),
				k = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				P = s.n(k),
				I = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const S = Object(w.u)({
					currentProfileName: w.i,
					isCommentsPage: w.x,
					isCommentPermalink: w.w,
					isProfilePostListing: w.L,
					pageLayer: e => e
				}),
				M = I.a.wrapped(j.a, "OverviewCommentPost", P.a),
				L = I.a.wrapped(r.default, "ClassicPost", P.a);
			t.a = S(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: o,
					allowModToolsUnderComments: r,
					height: i,
					width: a,
					...d
				} = e;
				return Object(y.a)(t) ? s ? n.a.createElement(n.a.Fragment, null, n.a.createElement(M, _({}, d, {
					availableWidth: a,
					commentId: t
				})), n.a.createElement(E, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				})) : n.a.createElement(E, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				}) : n.a.createElement(L, _({}, d, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/OverviewCommentPost/index.m.less": function(e, t, s) {
			e.exports = {
				overviewCommentPost: "_32w108aFIBi3H0DKCU4OI7",
				banned: "_3P8_MTWuehQOXRUhWBpwB0",
				reported: "_1Z7-lWgZwHw4sBG3rO44v7",
				InternalLink: "_31VWB3vSkv19o3I7RVE710",
				internalLink: "_31VWB3vSkv19o3I7RVE710",
				Wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				Row: "_1InmLYfaOm6m9MZ8wKxM-0",
				row: "_1InmLYfaOm6m9MZ8wKxM-0",
				CommentIcon: "y05plmPkDK7RiRh8b3b8-",
				commentIcon: "y05plmPkDK7RiRh8b3b8-",
				TitleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				titleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				PostTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				postTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				PostTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitleOutboundLink: "_3heiUGSIAJO43_Ertq1e2F",
				postTitleTitle: "_3gWN_jC4sfo4uQ61ZRgOO",
				PostTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				C = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				v = s.n(f),
				O = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				g = s("./src/reddit/selectors/commentSelector.ts"),
				E = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				j = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				w = s.n(j);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = c.a.wrapped(x.default, "InternalLink", w.a), P = c.a.div("Wrapper", w.a), I = c.a.div("Row", w.a), _ = c.a.wrapped(O.a, "CommentIcon", w.a), S = c.a.div("TitleContainer", w.a), M = c.a.div("PostTitleContainer", w.a), L = c.a.wrapped(p.c, "PostTitle", w.a), N = c.a.wrapped(u.d, "PostTopMeta", w.a), T = c.a.wrapped(u.a, "MetaSeparator", w.a), F = Object(r.b)(() => Object(i.c)({
				comment: g.b,
				isBlockingInterstitialEnabled: E.b,
				isBlockingInterstitialV2Enabled: E.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.db)(t))
			})), R = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return n.a.createElement(o.Fragment, null, n.a.createElement(T, null), n.a.createElement(N, {
					metaSeparatorClassName: w.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, A = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: o,
					isBlockingInterstitialV2Enabled: r,
					showModalOnAuthorLinkClick: i
				} = e;
				if (!t) return null;
				const a = s || t.author,
					d = `/user/${a}/`;
				return n.a.createElement(k, {
					"data-click-id": "user",
					to: d,
					onClick: e => {
						(o || r) && (e.preventDefault(), i(d))
					}
				}, a)
			};
			t.a = Object(d.a)(Object(b.b)(F(Object(h.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: o,
					post: r
				} = e;
				return n.a.createElement(m.a, {
					className: Object(a.a)(v.a.compactPostStyles, w.a.overviewCommentPost, {
						[w.a.banned]: !!e.post.bannedBy,
						[w.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(P, {
					style: {
						background: Object(C.e)(e)
					}
				}, n.a.createElement(I, null, n.a.createElement(_, null), n.a.createElement(S, null, y._("{postAuthor} commented on {postTitle} {postMeta}", [y._param("postAuthor", A({
					...e
				})), y._param("postTitle", n.a.createElement(M, null, n.a.createElement(L, {
					outboundLinkClassName: w.a.postTitleOutboundLink,
					post: r,
					size: p.b.Small,
					titleClassName: w.a.postTitleTitle
				}))), y._param("postMeta", R(e))], {
					hk: "d6l8e"
				})))))
			}))))
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, s) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				a = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					isFirst: s,
					isLast: o,
					...i
				} = e;
				return n.a.createElement("div", d({
					className: Object(r.a)(a.a.border, {
						[a.a.isFirst]: s,
						[a.a.isLast]: o
					}, t)
				}, i))
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, s) {
			e.exports = {
				ProfileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				profileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				CommentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				commentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				Wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				isFirst: "_3bYCCkSa6xxUYDEPgIa7w5",
				isLast: "_3TNQpNlZH2M4X50sedpaIG",
				isAwarded: "_2UgLKr67bDuCg6zs7UOCoN",
				isNightmodeOn: "_3ZqQTMfjWU3NV-dAfa8O9E",
				CommentSeparator: "_1mvcEtI04YyIVKsT-vUkiN",
				commentSeparator: "_1mvcEtI04YyIVKsT-vUkiN"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/times.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				C = s("./src/reddit/selectors/communityAwards.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				O = s.n(v);
			const g = m.a.div("ProfileOwnerCommentWrapper", O.a),
				E = m.a.div("CommentContentWrapper", O.a),
				j = m.a.div("Wrapper", O.a),
				w = m.a.div("CommentSeparator", O.a),
				y = Object(a.b)(() => Object(d.c)({
					comment: (e, t) => Object(x.b)(e, t),
					isAwarded: (e, t) => {
						const s = Object(x.b)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(C.a)(e, t);
							return s && s.coinPrice >= c.g
						})
					},
					isNightmodeOn: f.cb
				}), e => ({
					openPost: t => e(Object(h.L)(t))
				}));
			class k extends i.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: o,
						isAwarded: r,
						isFirst: a,
						isLast: d,
						isNightmodeOn: c,
						profileName: m,
						showModTools: u
					} = this.props, h = m === e.author ? P : I;
					return i.a.createElement(p.a, {
						comment: e,
						onClick: (e, t) => {
							o({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, i.a.createElement(j, {
						className: Object(l.a)({
							[O.a.isFirst]: a,
							[O.a.isLast]: d,
							[O.a.isAwarded]: r,
							[O.a.isNightmodeOn]: c
						})
					}, n()(s + 1, e => i.a.createElement(w, {
						key: e
					})), i.a.createElement(E, null, h(t, m, u))))
				}
			}
			const P = (e, t, s) => i.a.createElement(g, null, I(e, t, s, !0, !0)),
				I = function(e, t, s) {
					let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						n = arguments.length > 4 ? arguments[4] : void 0;
					return i.a.createElement(u.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: o,
						showModTools: s,
						isExpanded: !!n
					})
				};
			t.a = y(k)
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: i,
					post: d,
					redditStyle: m,
					theme: p,
					...u
				} = e;
				return n.a.createElement("div", l({
					className: Object(r.a)(c.a.backgroundWrapper, s),
					style: Object(a.c)(o, e),
					onClick: i
				}, u), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				d = s("./src/reddit/helpers/trackers/gallery.ts"),
				c = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = n.a.memo(e => {
					const t = Object(o.useRef)(null),
						s = Object(l.a)(),
						r = Object(o.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: o
								} = t;
								o >= .5 && s(d.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(o.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, r, i), n.a.createElement("div", {
						role: "presentation"
					}, n.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/connectors/PostViewable/index.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/objectSelector/index.ts"),
				v = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.m.less"),
				g = s.n(O);
			const E = Object(u.a)(() => Object(r.c)({
					basePixelMetadata: Object(f.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(b.b)(e, s.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(b.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(x.d)(e).pageType
				})),
				j = "post-container";
			class w extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: o,
						imageGalleryCurrentItem: r,
						makePostContainerId: c,
						post: l,
						onClick: p,
						pageType: u,
						sendEvent: b,
						style: x,
						ref: f,
						shouldAddGalleryViewability: v = !0
					} = this.props, O = n.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: f,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => p && p(s, l, t, r, u))(s), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && b(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(C.a)(g.a.WrappedPost, o, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": j,
						id: c ? c(l.id) : l.id,
						tabIndex: -1
					}, s), E = !!l.media && l.media.type === h.o.VIDEO;
					return (e => l.media && Object(h.E)(l.media) && v ? n.a.createElement(m, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || E ? n.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(O))
				}
			}
			t.a = E(Object(v.a)(Object(p.c)(w)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class h extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: o
							},
							sendEvent: n
						} = this.props, r = !!o;
						n(e ? Object(m.o)({
							postId: s,
							isFollowed: r
						}) : Object(m.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, n = this.state.isHovered, i = s.isFollowed;
					let a = i ? o.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : o.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && n && (a = o.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(d.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const b = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.A)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(h))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : n.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				text: "_1llB9GXV3OPp_55xrtgYNh",
				svgIcon: "_2mkCGM7pDFARBtuKmKCBf0"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "g", (function() {
				return P
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				c = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				l = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				m = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				u = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				h = s("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				b = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				x = s.n(b);
			const C = r.a.wrapped(d.a, "Icon", x.a),
				f = r.a.wrapped(c.a, "Icon", x.a),
				v = r.a.wrapped(l.a, "Icon", x.a),
				O = r.a.wrapped(m.a, "Icon", x.a),
				g = r.a.wrapped(p.a, "Icon", x.a),
				E = r.a.wrapped(u.a, "Icon", x.a),
				j = () => n.a.createElement(a.a, {
					name: "mod_mute",
					className: x.a.Icon
				}),
				w = () => n.a.createElement(a.a, {
					name: "calendar",
					className: x.a.Icon
				}),
				y = () => n.a.createElement(h.a, {
					className: x.a.svgIcon
				}),
				k = r.a.wrapped(i.b, "DropdownRow", x.a),
				P = r.a.div("ListContainer", x.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: u,
					toggleCheckbox: h = (() => {}),
					flairStyleTemplate: b,
					redditStyle: x,
					isOverlay: C,
					isVoteCountAnimation: f,
					postId: v,
					shouldShowUpvoteRatioOnHover: O
				} = e, g = `upvote-button-${t.id}${C?"-overlay":""}`;
				return n.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: x
				}, o && n.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: h
				}), n.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: g,
					isVoteCountAnimation: f,
					isCountAnimShadowTestEnabled: u,
					postId: v,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: O
					}),
					shouldShowUpvoteRatioOnHover: O
				}))
			}
		},
		"./src/reddit/components/ProfileCommentList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				ClassicPost: "_3HddQjb-wsXsww_pAIh20y",
				classicPost: "_3HddQjb-wsXsww_pAIh20y",
				OverviewCommentPost: "_1e72wv5XA_Ww9f_Jld1feN",
				overviewCommentPost: "_1e72wv5XA_Ww9f_Jld1feN",
				backgroundMargin: "_2QIF_lwHCJCj3Dltr80ZqZ",
				isFirstInCommentList: "_2qBXIj3HBiFJkTkjCTD627",
				isLastInCommentList: "pd606OJnAc8wAE-N-Zm84"
			}
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/last.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				c = s("./src/reddit/constants/adEvents.ts"),
				l = s("./src/reddit/components/PostList/LoadMore.tsx"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				p = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				u = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/helpers/isComment.ts"),
				C = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/lib/LRUCache/index.ts"),
				v = s("./src/telemetry/index.ts"),
				O = s("./src/telemetry/models/Timer.ts"),
				g = s("./src/reddit/components/PostList/index.m.less"),
				E = s.n(g);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const w = 500,
				y = new f.a(w),
				k = new f.a(w),
				P = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				I = (e, t, s, o, n, r) => {
					const i = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}`;
					let a = y.get(i);
					return void 0 === a && (a = () => {
						s && r.onBottomViewed(o, n), r.trackOnPostEnteredViewport(e, t)
					}, y.set(i, a)), a
				},
				_ = (e, t) => {
					const s = `click-${e}`;
					let o = k.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, c.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.e)(s.source.outboundUrl, d.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(b.a)(e)
						})
					}, k.set(s, o)), o
				};
			class S extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new f.a(w), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && v.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = v.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = v.c.end(this.timerId);
						setTimeout(() => Object(v.b)(a.m.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && v.c.cancel(this.timerId), e.itemIds.length && (this.timerId = v.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && v.c.has(this.timerId)) {
						const e = v.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(v.b)(a.m.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && v.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && n()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return v.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = v.c.end(e);
					setTimeout(() => s(t(o, O.TimerType.InApp)), 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 !== t
				}
				hasPosts() {
					return this.props.itemIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						itemIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						itemIds: t,
						...s
					} = this.props, {
						itemIds: o,
						...n
					} = e, r = Object.keys(s), i = Object.keys(n);
					return i.length !== r.length || !!i.some(e => s[e] !== n[e])
				}
				scrollChildForItem(e, t, s, o, n, r) {
					const {
						listingKey: a,
						listingName: d,
						postClickEventFactory: c
					} = this.props, l = `post-${r}-${e}-${t}-${s?"last-index":""}-${d}-${a}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(l))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: p
						} = this.props, u = p[e], h = `overview-chrono-list-item-[layout: ${r}]-[itemId: ${e}]`, b = I(u, r, s, a, d, this.props), x = {
							key: h,
							eventFactory: c,
							inSubredditOrProfile: t,
							isFirstInCommentList: o,
							isLastInCommentList: n,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: r,
							onClickPost: _(e, this.props),
							postId: u
						}, f = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, r, o),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: b,
							render: e => i.a.createElement(C.a, {
								postId: x.postId
							}, i.a.createElement(f, j({}, x, e)))
						}, this.scrollChildCache.set(l, m)
					}
					return m
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return i.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: o
					} = this.props;
					return i.a.createElement("div", {
						className: E.a.placeholder
					}, i.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && i.a.createElement(p.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: s,
						onLoadMore: o
					} = this.props;
					return i.a.createElement("div", {
						className: E.a.placeholder
					}, i.a.createElement(l.a, {
						isLoading: !!t,
						layout: s,
						countOverride: P[s]
					}), !!e && i.a.createElement(p.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: s,
						itemIds: o,
						onLoadMore: n
					} = this.props, r = o.map((s, n, r) => {
						const i = n === o.length - 1,
							a = n && o[n - 1],
							d = !i && o[n + 1],
							c = !!Object(x.a)(s) && (!a || !Object(x.a)(a) || e[a].postId !== e[s].postId),
							l = !!Object(x.a)(s) && (!d || !Object(x.a)(d) || e[d].postId !== e[s].postId);
						return this.scrollChildForItem(s, n, i, c, l, t)
					});
					return i.a.createElement("div", null, i.a.createElement(u.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: n,
						viewportTopPadding: h.f + h.s
					}, r), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = S
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/showPromotedCTA.ts"),
				C = s("./src/reddit/selectors/user.ts");
			const f = {
					autoplayPref: C.b,
					activeModalId: m.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: b.l,
					isExpanded: b.m,
					isLoggedIn: C.P,
					showPromotedCTA: x.a,
					moderatorPermissions: u.m,
					modModeEnabled: c.U,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: c.s,
					flairStyleTemplate: c.W
				},
				v = Object(o.b)(() => Object(n.c)(f), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === a.a.upvoted ? Object(r.kb)(s) : Object(r.w)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(r.gb)(s)),
						onOpenReportsDropdown: t => e(Object(i.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(v(Object(d.b)(e)))
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "i", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return m
			}));
			const o = "ModerationPage--Modal--AddAward",
				n = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				i = 4,
				a = 1e4,
				d = .2,
				c = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(a);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const n = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: n
					} of t) s.push(Object(o.f)(n));
				return s
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const i = (e, t, s, o, r, i) => o ? e.crosspostRootId ? n.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, a(e, s, r, i)) : a(e, s, r, i) : null,
				a = (e, t, s, o) => n.a.createElement(r.a, {
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return C
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				p = e => Object(a.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				h = e => Object(o.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				C = e => {
					const t = Object(r.a)(Object(n.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
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
				n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = e => {
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
				a = (e, t) => s => ({
					...Object(r.n)(s),
					action: n.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.gb)(s),
					post: Object(r.H)(s, e),
					userSubreddit: Object(r.qb)(s),
					actionInfo: Object(r.d)(s, {
						reason: i(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(r.n)(s),
					action: n.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.H)(s, t),
					subreddit: Object(r.gb)(s),
					userSubreddit: Object(r.qb)(s)
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
					...Object(r.n)(t),
					action: n.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.H)(t, e, void 0, 0),
					profile: Object(r.Q)(t)
				}),
				m = (e, t, s) => o => ({
					...Object(r.n)(o),
					action: n.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						reason: c(t)
					}),
					post: Object(r.H)(o, e, void 0, s)
				}),
				p = (e, t, s, o, i, a) => d => ({
					...Object(r.n)(d),
					action: n.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.H)(d, e, void 0, a),
					subreddit: Object(r.gb)(d),
					outbound: {
						postId: s,
						url: t,
						subredditId: o,
						subredditName: i
					}
				}),
				u = (e, t, s) => o => ({
					...Object(r.n)(o),
					action: n.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.H)(o, e, void 0, s),
					subreddit: Object(r.gb)(o)
				})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			const r = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M18.04 7.67457C18.5905 9.55741 18.4654 11.5734 17.6865 13.3738C16.9076 15.1742 15.5238 16.6457 13.7746 17.5336C12.0254 18.4215 10.0209 18.67 8.1078 18.2362C6.19473 17.8023 4.49351 16.7133 3.29851 15.1576C2.10351 13.602 1.48992 11.6775 1.5639 9.71728C1.63788 7.75702 2.39478 5.88429 3.70364 4.42313C5.01249 2.96197 6.79095 2.00431 8.73128 1.71586C10.6716 1.42742 12.6517 1.82633 14.329 2.84357L15.189 1.90557C13.2556 0.658893 10.9412 0.141738 8.661 0.446834C6.38077 0.75193 4.2838 1.85932 2.74608 3.57044C1.20837 5.28156 0.330485 7.4845 0.269845 9.78425C0.209205 12.084 0.969774 14.3301 2.41518 16.1199C3.86058 17.9097 5.89628 19.1261 8.15726 19.5509C10.4182 19.9757 12.7566 19.5813 14.7531 18.4382C16.7496 17.2952 18.2736 15.4783 19.0519 13.3134C19.8301 11.1485 19.8118 8.77715 19 6.62457L18.04 7.67457Z",
				fill: "inherit"
			}), n.a.createElement("path", {
				d: "M9.99503 12.6426C9.91293 12.6427 9.83162 12.6266 9.75577 12.5952C9.67991 12.5638 9.61101 12.5177 9.55303 12.4596L5.54703 8.45257L6.43203 7.56957L9.97603 11.1146L19.013 1.24657L19.935 2.08957L10.456 12.4396C10.3989 12.5013 10.3298 12.5509 10.253 12.5852C10.1762 12.6196 10.0932 12.6381 10.009 12.6396L9.99503 12.6426Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeListingKey/index.ts"),
				p = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				u = s("./src/reddit/actions/pages/profileComments/index.ts"),
				h = s("./src/reddit/actions/pages/profileShared.ts"),
				b = s("./src/reddit/components/ContentGate/index.tsx"),
				x = s("./src/reddit/components/EmptyProfile/index.ts"),
				C = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				f = s("./src/reddit/components/JumpToContent/index.tsx"),
				v = s("./src/lib/classNames/index.ts"),
				O = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				g = s("./src/lib/lessComponent.tsx"),
				E = s("./src/reddit/components/ClassicPost/index.tsx"),
				j = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				w = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				y = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				k = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				P = s("./src/reddit/constants/postLayout.ts"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				S = s("./src/reddit/selectors/commentSelector.ts"),
				M = s("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				L = s.n(M);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const T = g.a.wrapped(E.default, "ClassicPost", L.a),
				F = g.a.wrapped(w.a, "OverviewCommentPost", L.a),
				R = Object(I.u)({
					currentProfileName: I.i,
					pageLayer: e => e
				}),
				A = Object(d.c)({
					comment: (e, t) => {
						let {
							itemId: s
						} = t;
						return Object(S.b)(e, {
							commentId: s
						})
					},
					profileName: (e, t) => {
						let {
							currentProfileName: s
						} = t;
						if (s) return ((e, t) => {
							const {
								users: s
							} = e, o = t.toLowerCase(), n = s.models[o];
							return n ? n.username : void 0
						})(e, s)
					}
				});
			var D = R(Object(a.b)(A)(e => {
				const {
					comment: t,
					itemId: s,
					isFirstInCommentList: o,
					isLastInCommentList: n,
					layout: r,
					profileName: a,
					allowModToolsUnderComments: d
				} = e;
				if (r === P.g.Compact) return i.a.createElement(j.a, e);
				const {
					height: c,
					width: l,
					...m
				} = e;
				return i.a.createElement(B, m, o && i.a.createElement(y.a, {
					isFirst: !0
				}, r === P.g.Large ? i.a.createElement(T, N({}, e, {
					availableWidth: l,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : i.a.createElement(F, N({}, e, {
					commentId: s,
					profileName: a
				}))), i.a.createElement(y.a, {
					isLast: n
				}, i.a.createElement(k.a, {
					commentId: s,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: s,
					profileName: a,
					showModTools: d
				})))
			}));
			const B = Object(O.a)(e => i.a.createElement("div", {
				className: Object(v.a)(L.a.backgroundMargin, {
					[L.a.isFirstInCommentList]: e.isFirstInCommentList,
					[L.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(_.e)(e)
				}
			}, e.children));
			var W = s("./src/reddit/components/ProfileItemList/index.tsx"),
				V = s("./node_modules/lodash/noop.js"),
				U = s.n(V),
				H = s("./src/reddit/actions/ads/index.ts"),
				G = s("./src/reddit/actions/comment/list.ts"),
				K = s("./src/reddit/actions/post.ts"),
				q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				J = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				z = s("./src/reddit/helpers/trackers/post.ts"),
				Z = s("./src/reddit/featureFlags/index.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/selectors/profileComments.ts"),
				$ = s("./src/reddit/selectors/subreddit.ts"),
				ee = s("./src/reddit/selectors/tracking.ts"),
				te = s("./src/reddit/selectors/user.ts");
			const se = Object(I.u)(),
				oe = {
					apiError: X.a,
					apiPending: X.b,
					currentUser: te.k,
					measureScrollFPS: Z.d.measureScrollFPS,
					layout: I.S,
					loadMore: X.d,
					subredditsById: $.bb,
					viewportDataLoaded: ee.a,
					commentsById: Q.q,
					itemIds: X.f,
					itemIdToPostId: X.e,
					postsById: Y.J,
					estimateItemHeight: e => (e, t, s) => {
						if (s) switch (t) {
							case P.g.Medium:
								return 174;
							case P.g.Classic:
								return 129;
							case P.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case P.g.Medium:
							case P.g.Classic:
								return 90;
							case P.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				ne = Object(d.c)(oe),
				re = Object(a.b)(ne, e => ({
					onBottomViewed: (t, s) => e(Object(G.c)(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(H.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(K.L)(t)),
					fireAdPixelsOfType: U.a,
					trackOnPostEnteredViewport: U.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(z.h)(e, t),
					postComponentForLayout: J.b
				}));

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = e => i.a.createElement(D, ie({}, e, {
					allowModToolsUnderComments: !0
				})),
				de = (e => Object(q.c)(se(re(e))))(W.a);
			var ce = e => i.a.createElement(de, ie({}, e, {
					itemComponent: ae
				})),
				le = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				me = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				pe = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				ue = s("./src/reddit/helpers/name/index.ts"),
				he = s("./src/reddit/helpers/trackers/screenview.ts"),
				be = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				xe = s("./src/reddit/layout/page/Listing/index.tsx"),
				Ce = s("./src/reddit/models/ContentGate.ts"),
				fe = s("./src/reddit/pages/ErrorPages/index.tsx"),
				ve = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				Oe = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ge = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Ee = s("./src/reddit/selectors/profile.ts");

			function je() {
				return (je = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const we = Object(I.u)(),
				ye = Object(d.a)(I.E, te.jb, (e, t) => {
					let {
						location: s
					} = t;
					return n()([...Object(l.a)(s.search)])
				}, I.S, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Ee.j)(e, {
						profileName: s.params.profileName
					})
				}, te.P, (e, t) => {
					let {
						match: s
					} = t;
					return Object(te.f)(e, c.kc + s.params.profileName)
				}, Oe.c, (e, t) => {
					let {
						match: s
					} = t;
					return Object(te.K)(e, {
						profileName: s.params.profileName
					})
				}, ge.f, (e, t, s, o, n, r, i, a, d, c, l) => {
					var p, u;
					const {
						sort: b,
						t: x
					} = Object(h.b)(s), C = Object(m.a)(`u_${n}`, b, s);
					return {
						contentGateInfo: a,
						over18Prefs: t,
						isLoggedIn: i,
						isOwnProfile: e,
						isProfileNSFW: !!r && r.isNSFW,
						layout: o,
						listingKey: C,
						profileName: n,
						sort: b,
						timeSort: x,
						avatar: null === (p = null == r ? void 0 : r.icon) || void 0 === p ? void 0 : p.url,
						isProfileBlockInterstitialEnabled: d,
						isBlocked: c,
						profileId: null !== (u = null == r ? void 0 : r.id) && void 0 !== u ? u : "",
						nsfwBlockingExperiment: l
					}
				}),
				ke = Object(a.b)(ye, (e, t) => ({
					onLoadMore: () => e(Object(u.moreItemsRequested)()),
					onLayoutChange: () => e(Object(u.profileCommentsRequested)({
						...t.match,
						queryParams: n()([...Object(l.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(p.a)())
				}));
			t.default = we(ke(Object(be.d)(e => {
				const {
					avatar: t,
					contentGateInfo: s,
					isBlocked: o,
					isOwnProfile: n,
					isProfileBlockInterstitialEnabled: a,
					isProfileNSFW: d,
					listingKey: l,
					nsfwBlockingExperiment: m,
					onLoadMore: p,
					onLayoutChange: u,
					openNsfwModal: h,
					over18Prefs: v,
					pageLayer: O,
					profileId: g,
					profileName: E,
					sort: j,
					timeSort: w
				} = e;
				if (Object(r.useEffect)(() => {
						d && !n && m === ge.a.Blurred && h()
					}, [m, n, d, h]), !E || !O) return null;
				if (s && s.profileDeleted) return i.a.createElement(b.default, {
					contentGateType: Ce.a.ProfileDeleted,
					profileName: E
				});
				if (s && s.profileSuspended) return i.a.createElement(b.default, {
					contentGateType: Ce.a.ProfileSuspended,
					profileName: E
				});
				if (451 === O.status || s && s.profileBlockedForLegalReason) return i.a.createElement(b.default, {
					contentGateType: Ce.a.ProfileBlockedForLegalReason,
					profileName: E
				});
				const y = O.queryParams && "true" === O.queryParams.consent;
				if (403 === O.status || o && !y) return a ? i.a.createElement(ve.a, {
					username: E,
					avatar: t,
					uid: g
				}) : i.a.createElement(fe.a, null);
				if (404 === O.status) return i.a.createElement(b.default, {
					contentGateType: Ce.a.ProfileDoesNotExist,
					profileName: E
				});
				const k = E.toLowerCase(),
					P = `/user/${E}/comments/`,
					I = {
						listingKey: l,
						listingName: k
					};
				if (d && !n && m === ge.a.NoPreview) return i.a.createElement(pe.a, {
					contentTitle: Object(ue.d)(E)
				});
				if (!v && d && !n && m !== ge.a.Blurred) return i.a.createElement(b.default, {
					contentGateType: Ce.a.Nsfw,
					subredditName: E
				});
				const _ = {
					sort: j,
					baseUrl: P,
					sortOptions: c.Db,
					timeSort: w
				};
				return i.a.createElement(xe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(le.a, {
						profileName: E,
						viewBlockedConsent: y
					})),
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(C.a, _), i.a.createElement(f.a, null), i.a.createElement(ce, {
						listingKey: l,
						listingName: k,
						listingViewed: (e, t) => Object(he.o)(l, j, t, e, w),
						noPostsComponent: () => i.a.createElement(x.b, {
							profileName: E,
							timeSort: w
						}),
						onLoadMore: p,
						onTryAgain: u,
						inSubredditOrProfile: !1
					})),
					sidebar: i.a.createElement(me.a, je({}, I, {
						profileName: E
					}))
				})
			})))
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const a = e => Object(r.c)(e, {
					experimentName: n.Ke,
					experimentEligibilitySelector: r.a
				}),
				d = (e, t) => t === n.Se.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				c = Object(o.a)(i.G, a, (e, t) => d(e, t));
			Object(o.a)((e, t) => t, a, (e, t) => d(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.7e12a147e6274a90f52a.js.map