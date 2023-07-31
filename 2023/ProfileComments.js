// https://www.redditstatic.com/desktop2x/ProfileComments.91c5d9991aa61c90b05e.js
// Retrieved at 7/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments"], {
		"./src/lib/LiveChatActiveUsers/index.m.less": function(e, t, s) {
			e.exports = {
				liveChatActiveUsers: "_25wqhmS87KWZppCM1ZHphX"
			}
		},
		"./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				liveParticipation: "_3qjBuOjYOffFET145CIGgi"
			}
		},
		"./src/lib/LiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				LiveLabel: "_1-nQNZpTU7wWajQDxaSGx8",
				liveLabel: "_1-nQNZpTU7wWajQDxaSGx8"
			}
		},
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileCommentsPending", (function() {
				return S
			})), s.d(t, "profileCommentsLoaded", (function() {
				return R
			})), s.d(t, "profileCommentsFailed", (function() {
				return A
			})), s.d(t, "profileCommentsRequested", (function() {
				return F
			})), s.d(t, "moreItemsPending", (function() {
				return D
			})), s.d(t, "moreItemsLoaded", (function() {
				return B
			})), s.d(t, "moreItemsFailed", (function() {
				return W
			})), s.d(t, "moreItemsRequested", (function() {
				return U
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
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/config.ts"),
				O = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				E = s("./src/lib/makeApiRequest/index.ts"),
				P = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				j = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				y = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, s, o) => {
				let n = Object(P.a)(Object(O.a)(Object(y.a)(Object(w.a)(`${f.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return o && (n = Object(j.a)(n)), Object(E.a)(e, {
					data: s,
					endpoint: n,
					method: g.ob.GET
				})
			};
			var _ = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				k = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				L = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				N = s("./src/reddit/selectors/profile.ts"),
				M = s("./src/reddit/selectors/profileComments.ts"),
				T = s("./src/reddit/actions/pages/profileComments/constants.ts");
			const S = Object(a.a)(T.f),
				R = Object(a.a)(T.e),
				A = Object(a.a)(T.d),
				F = e => async (t, s, o) => {
					const {
						queryParams: n,
						params: r
					} = e, {
						sort: a,
						t: v
					} = Object(p.b)(n), {
						profileName: f
					} = r, O = Object(d.a)(`u_${f}`, a, e.queryParams), {
						profileCommentsPage: g
					} = s(), E = g.commentIds[O], P = g.api.error[O], j = g.api.pending[O];
					if (await t(h.d(f)), j || E && !P) {
						if (E) {
							const e = Object(N.s)(s(), {
								profileName: f
							});
							t(u.n({
								title: e
							}))
						}
						return
					}
					const y = {
						...i()(e.queryParams, [...C.p, C.l]),
						sort: a,
						t: Object(_.a)(a, v)
					};
					t(S({
						key: O
					}));
					const w = await Object(k.a)("profileComments", () => I(o.apiContext(), f, y, Object(L.a)(s())));
					if (!w.ok) return t(A({
						account: w.body.data ? w.body.data.account : null,
						error: w.body.reason ? {
							type: w.body.reason
						} : w.error,
						key: O
					})), w.body.reason === x.a.DeletedProfile && t(Object(c.v)({
						profileName: f
					})), void t(u.o(w.status));
					const M = w.body;
					t(R({
						key: O,
						meta: s().meta,
						...M
					})), await Promise.all([t(Object(p.c)(f)), t(Object(b.q)()), t(Object(m.b)()), t(l.o(f))])
				}, D = Object(a.a)(T.c), B = Object(a.a)(T.b), W = Object(a.a)(T.a), U = () => async (e, t, s) => {
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
					} = l, b = Object(d.a)(`u_${h}`, m, c), x = Object(M.d)(r, {
						listingKey: b
					});
					if (!x) return;
					const f = Object(M.b)(r, {
							listingKey: b
						}),
						O = Object(M.c)(r, {
							listingKey: b
						}),
						g = O && O[x.token];
					if (f || g) return;
					e(D({
						key: b,
						fetchedToken: x.token
					}));
					const E = await I(o(), h, {
						after: x.token,
						dist: x.dist,
						sort: m,
						t: u,
						...i()(c, C.p),
						layout: Object(v.U)(r, {}).toLowerCase()
					}, Object(L.a)(r));
					if (E.ok) {
						const t = Object(M.f)(r, {
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
				h = s("./src/reddit/components/CreatorStats/loader.tsx");
			var b = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					fill: "none",
					className: t
				}, n.a.createElement("g", {
					clipPath: "url(#clip0_826_294874)"
				}, n.a.createElement("path", {
					d: "M9.13086 15.2315V18.9725C9.1307 19.0439 9.1119 19.114 9.07631 19.1759C9.04072 19.2378 8.98958 19.2893 8.92795 19.3254C8.86633 19.3615 8.79635 19.3808 8.72495 19.3815C8.65354 19.3822 8.58319 19.3643 8.52086 19.3295L1.19986 15.2324C1.10316 15.178 1.02266 15.0989 0.966602 15.0031C0.910549 14.9074 0.880958 14.7984 0.88086 14.6874V6.53545C0.880748 6.46296 0.899904 6.39175 0.936365 6.3291C0.972825 6.26645 1.02528 6.21461 1.08836 6.1789C1.15144 6.14319 1.22288 6.12488 1.29536 6.12586C1.36784 6.12683 1.43876 6.14705 1.50086 6.18445L4.66786 8.08445C4.80909 8.16923 4.92596 8.28912 5.00709 8.43247C5.08823 8.57582 5.13087 8.73773 5.13086 8.90245V12.5145L8.63086 14.3934C8.78199 14.4751 8.90824 14.5961 8.99625 14.7436C9.08427 14.8911 9.13078 15.0597 9.13086 15.2315ZM9.88086 4.93145L13.3809 6.81345C13.5262 6.89146 13.6893 6.93044 13.8543 6.92658C14.0192 6.92273 14.1803 6.87617 14.3219 6.79145L17.5089 4.87945C17.5704 4.84257 17.6211 4.79016 17.656 4.72746C17.6909 4.66477 17.7087 4.59401 17.7076 4.52228C17.7064 4.45055 17.6865 4.38037 17.6497 4.31879C17.6129 4.25721 17.5605 4.2064 17.4979 4.17145L10.1869 0.0794502C10.0933 0.0273472 9.98796 0 9.88086 0C9.77376 0 9.66843 0.0273472 9.57486 0.0794502L2.25886 4.17945C2.19626 4.21449 2.14398 4.26538 2.10726 4.32701C2.07055 4.38863 2.05069 4.45884 2.04967 4.53057C2.04866 4.6023 2.06653 4.67303 2.10149 4.73567C2.13645 4.79831 2.18728 4.85066 2.24886 4.88745L5.43486 6.79945C5.57661 6.88416 5.73788 6.93071 5.90296 6.93457C6.06805 6.93842 6.23131 6.89945 6.37686 6.82145L9.88086 4.93145ZM14.6309 12.5104L11.1309 14.3895C10.9796 14.4712 10.8532 14.5923 10.7652 14.74C10.6772 14.8877 10.6308 15.0565 10.6309 15.2284V18.9694C10.6308 19.0408 10.6495 19.111 10.6849 19.1729C10.7204 19.2349 10.7714 19.2864 10.833 19.3225C10.8946 19.3586 10.9645 19.378 11.0359 19.3787C11.1073 19.3794 11.1776 19.3614 11.2399 19.3265L18.5609 15.2264C18.6579 15.1723 18.7387 15.0933 18.795 14.9975C18.8512 14.9016 18.8809 14.7926 18.8809 14.6814V6.53545C18.881 6.46296 18.8618 6.39175 18.8254 6.3291C18.7889 6.26645 18.7364 6.21461 18.6734 6.1789C18.6103 6.14319 18.5388 6.12488 18.4664 6.12586C18.3939 6.12683 18.323 6.14705 18.2609 6.18445L15.0939 8.08445C14.9526 8.16923 14.8358 8.28912 14.7546 8.43247C14.6735 8.57582 14.6308 8.73773 14.6309 8.90245V12.5104Z",
					fill: "#0F1A1C"
				})), n.a.createElement("defs", null, n.a.createElement("clipPath", {
					id: "clip0_826_294874"
				}, n.a.createElement("rect", {
					width: "20",
					height: "20",
					fill: "white"
				}))))
			};
			var x = () => n.a.createElement("div", {
					className: "flex items-center justify-center w-full rounded p-sm bg-[color:var(--newCommunityTheme-bodyTextAlpha03)]"
				}, n.a.createElement(b, {
					className: "h-[18px]"
				})),
				C = s("./src/reddit/components/Econ/Audio/index.m.less"),
				v = s.n(C),
				f = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx");
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var g = () => n.a.createElement("div", {
					className: v.a.endedClassicContainer
				}, n.a.createElement(f.a, {
					className: v.a.muteIcon
				})),
				E = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				P = s("./src/reddit/components/ExpandoButton/index.tsx"),
				j = s("./src/reddit/components/Flatlist/index.tsx"),
				y = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				w = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				I = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				_ = s("./src/reddit/components/ModModeReports/index.tsx"),
				k = s("./src/reddit/components/ModModeReports/helpers.ts"),
				L = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				N = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				M = s("./src/reddit/components/PostContainer/index.tsx"),
				T = s("./src/reddit/components/PostMeta/index.tsx"),
				S = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				R = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				A = s("./src/reddit/components/PostTitle/index.tsx"),
				F = s("./src/reddit/components/PostTopMeta/index.tsx"),
				D = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				B = s("./src/reddit/models/Audio/index.ts"),
				W = s("./src/reddit/models/Media/index.ts"),
				U = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				V = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				K = s("./src/reddit/constants/postLayout.ts"),
				H = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				G = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				J = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				q = s("./src/reddit/helpers/search/renderMedia.tsx"),
				z = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Z = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Q = s.n(Y),
				X = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/redditGQL/types.ts"),
				ee = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				te = s("./src/reddit/components/ClassicPost/index.m.less"),
				se = s.n(te);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ne = Object(a.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: a,
					handleVote: b,
					isExpanded: C,
					inSubredditOrProfile: v,
					eventFactory: f,
					flairStyleTemplate: O,
					formatTitle: V,
					hostPostData: Y,
					isCheckboxSelected: te,
					isCurrentUserProfilePost: ne,
					isFrontpage: re,
					isGalleryTileLayoutDefault: ie,
					isLoggedIn: ae,
					isOverlay: de,
					imageGalleryCurrentItem: ce,
					moderatorPermissions: le,
					modModeEnabled: me,
					onClickPost: pe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: he,
					onSizeChanged: be,
					poll: xe,
					post: Ce,
					postId: ve,
					redditStyle: fe,
					scrollerItemRef: Oe,
					showBulkActionCheckbox: ge,
					showEditFlair: Ee,
					showMedia: Pe,
					shouldShowInsightsButton: je,
					subredditOrProfile: ye,
					toggleCheckbox: we,
					userIsOp: Ie,
					shouldShowGalleryTileOption: _e,
					showCTAExperimentDesign: ke
				} = e, Le = Object(l.a)(), Ne = Object(c.a)(C);
				Object(o.useEffect)(() => {
					be && Ne !== C && be(Ce.id)
				}, [C, be, Ce.id, Ne]);
				const Me = fe ? void 0 : O,
					Te = s || void 0,
					Se = Object(J.a)(le),
					Re = Object(H.a)(le),
					Ae = Object(G.a)(le),
					Fe = me && J.a,
					De = Object(I.a)(Ce),
					Be = Object(k.c)(Ce),
					We = !!Ce.media && Ce.media.type === W.o.RTJSON,
					Ue = Ie && We,
					Ve = v && !Pe,
					Ke = !!Ce.recommendationContext,
					He = {
						flairStyleTemplate: Me,
						post: Ce,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: ne,
						isOverlay: de,
						shouldShowSubscribeButton: !(re && ae) || Ke && ae,
						subredditOrProfile: ye
					},
					Ge = Object(r.t)(Ce, ce),
					[Je, qe] = Object(o.useState)(!1),
					ze = Object(o.useCallback)(() => {
						qe(!Je), Le(Object(Z.d)(ve))
					}, [Je, ve, Le]);
				let Ze = n.a.createElement(U.a, {
					className: se.a.classicThumbnail,
					crosspost: Te && Ce,
					isMeta: Ce.isMeta,
					post: Te || Ce,
					redditStyle: fe,
					templatePlaceholderImage: Me && Me.postPlaceholderImage
				});
				Object(B.b)(Ce) ? Ze = n.a.createElement(g, null) : Object(W.G)(Ce) && (Ze = n.a.createElement(x, null));
				const Ye = Object(X.r)(Ce);
				return n.a.createElement(M.b, {
					className: Object(i.a)(Q.a.classicPostStyles, se.a.postContainer, Object(z.a)(e), {
						[se.a.shouldShowOverflow]: je
					}, t),
					isOverlay: de,
					style: {
						...Object(z.d)(e),
						...Object(z.b)(Me)
					},
					post: Ce,
					onClick: pe,
					eventFactory: f
				}, n.a.createElement(R.a, {
					model: Ce,
					handleVote: b,
					showBulkActionCheckbox: ge,
					isCheckboxSelected: te,
					toggleCheckbox: we,
					flairStyleTemplate: Me,
					redditStyle: fe,
					postId: ve
				}), n.a.createElement(N.a, {
					className: je ? se.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Me
				}, n.a.createElement(E.a, {
					className: se.a.eventMeta,
					post: Ce
				}), n.a.createElement("div", {
					className: se.a.mainBody
				}, n.a.createElement("div", {
					className: Ve ? se.a.expandoContainer : se.a.thumbnailContainer
				}, !Ve && Ze, n.a.createElement(P.a, {
					crosspost: Te,
					className: se.a.rightExpando,
					isExpanded: !!C,
					post: Ce,
					useMediaIcons: !1
				})), n.a.createElement("div", {
					className: Object(i.a)(se.a.content, {
						[se.a.showBulkActionCheckbox]: ge
					}),
					"data-click-id": "body"
				}, Ye && n.a.createElement(L.a, {
					content: Ce.recommendationContext.content,
					layout: K.g.Classic,
					post: Ce
				}), n.a.createElement(A.c, {
					className: xe ? se.a.titleWithPoll : void 0,
					format: V,
					poll: xe,
					post: Ce,
					redditStyle: fe,
					size: A.b.Medium,
					titleColor: Me && Me.postTitleColor,
					isOverlay: de
				}, Ce.source && !Te && !Ce.isSurveyAd && n.a.createElement(D.a, {
					href: Ce.source.url,
					isSponsored: Ce.isSponsored,
					postId: Ce.id,
					source: Ce.source
				}, Object(d.a)(Ce))), n.a.createElement(T.a, oe({
					key: "PostMeta"
				}, He)), me && Se && De && n.a.createElement(w.a, {
					thing: Ce
				}), me && Se && Be && n.a.createElement(_.a, {
					onIgnoreReports: ue,
					reportable: Ce
				}), Object(r.v)(Ce, ce) && n.a.createElement(m.a, {
					ctaExperimentDesign: ke && "classic",
					className: Object(i.a)(se.a.adLinkWrapper, {
						[se.a.ctaExperiment]: ke
					})
				}, n.a.createElement(p.a, {
					post: Ce,
					adLinkContent: Ge,
					ctaExperimentDesign: ke && "classic"
				})), Ce.discussionType === $.o.Chat && n.a.createElement(ee.a, {
					postId: Ce.id
				}), n.a.createElement("div", {
					className: se.a.flatlistContainer
				}, n.a.createElement(P.a, {
					className: se.a.leftExpando,
					crosspost: Te,
					isExpanded: !!C,
					post: Ce,
					useMediaIcons: !1
				}), n.a.createElement(u.a, {
					className: se.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Me,
					model: Ce,
					onVoteClick: b
				}), n.a.createElement(j.a, {
					className: se.a.flatlistSeparator
				}), !Ce.isSurveyAd && n.a.createElement(j.c, {
					className: se.a.flatlist,
					currentUser: a,
					hasModFlairPerms: Re,
					hasModPostPerms: Se,
					hasModFullPerms: Ae,
					hostPostData: Y,
					isOverlay: !!de,
					modModeEnabled: me,
					onClickInsightsButton: ze,
					onIgnoreReports: ue,
					onOpenReportsDropdown: he,
					post: Ce,
					shouldShowInsightsButton: je,
					showEditPost: Ue,
					showEditFlair: Ee,
					tooltipType: de ? F.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(S.b)({
						editPost: !Fe,
						hide: !Fe,
						report: !Fe,
						mute: !Fe,
						save: !Fe
					})
				})), n.a.createElement(y.d, null))), Object(q.a)(Ce, se.a, Oe, C, _e, ie), ye && Je && n.a.createElement(h.a, {
					className: se.a.creatorStatsContainer,
					post: Ce,
					subreddit: ye,
					isOwnProfileStats: !0
				})))
			});
			t.default = Object(V.a)(ne)
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, C = 10 * d.M;
			class v extends n.a.Component {
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
			var f = v,
				O = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./node_modules/lodash/noop.js"),
				E = s.n(g),
				P = s("./src/lib/makeCommentsPageKey/index.ts"),
				j = s("./src/lib/makeDraftKey/index.ts"),
				y = s("./src/reddit/actions/comment/index.ts"),
				w = s("./src/reddit/actions/comment/authoring.ts"),
				I = s("./src/reddit/actions/comment/moderation.ts"),
				_ = s("./src/reddit/actions/gold/modals.ts"),
				k = s("./src/reddit/actions/modal.ts"),
				L = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/actions/toaster.ts"),
				M = s("./src/reddit/actions/tooltip.ts"),
				T = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				S = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				R = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				A = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				F = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				D = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				W = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				U = s("./src/reddit/contexts/InsideOverlay.tsx"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				K = s("./src/reddit/helpers/correlationIdTracker.ts"),
				H = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				G = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				J = s("./src/reddit/helpers/overlay/index.ts"),
				q = s("./src/reddit/helpers/trackers/lightbox.ts"),
				z = s("./src/reddit/models/PostDraft/index.ts"),
				Z = s("./src/reddit/models/Comment/index.ts"),
				Y = s("./src/reddit/selectors/activeModalId.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				$ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ee = s("./src/reddit/selectors/posts.ts"),
				te = s("./src/reddit/selectors/tooltip.ts"),
				se = s("./src/reddit/selectors/user.ts"),
				oe = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/index.tsx"),
				re = s("./src/reddit/components/ReportFlow/new.tsx"),
				ie = s("./src/reddit/components/ShareMenu/index.tsx"),
				ae = s("./src/reddit/components/TrackingHelper/index.tsx"),
				de = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ce = s("./src/reddit/helpers/trackers/modTools.ts"),
				le = s("./src/reddit/layout/row/Inline/index.tsx"),
				me = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				pe = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ue = s("./src/reddit/icons/fonts/Report/index.tsx"),
				he = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				be = s.n(he),
				xe = s("./src/lib/collectible-expressions/index.ts"),
				Ce = s("./src/lib/constants/icons.ts"),
				ve = s("./src/lib/lessComponent.tsx"),
				fe = s("./src/reddit/icons/fonts/index.tsx"),
				Oe = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				ge = s("./src/reddit/models/Toast/index.ts");
			const Ee = ve.a.wrapped(oe.b, "OverflowMenu", be.a),
				Pe = ve.a.wrapped(S.a, "ModToolsFlatlist", be.a),
				je = ve.a.wrapped(D.a, "ModActionsMenu", be.a),
				ye = ve.a.wrapped(de.b, "DropdownRow", be.a),
				we = ve.a.wrapped(le.a, "Flatlist", be.a),
				Ie = ve.a.button("Button", be.a),
				_e = Object(V.v)(),
				ke = e => `Comment-${e}--Modal--DeleteComment`,
				Le = e => `Distinguish--Dropdown--${e}`,
				Ne = (e, t) => `${e}--${t}-overflow-menu`,
				Me = e => `View--Reports--${e}`,
				Te = Object(i.c)({
					activeTooltipId: te.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.a)(e) === ke(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.E)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: se.S,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object($.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: se.m,
					modModeEnabled: V.W,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(ee.A)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.m)(e, {
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
					subreddit: V.s,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(ee.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: X.a
				});
			class Se extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ce.c)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => {
						const e = Object(H.a)(this.props.comment);
						Object(xe.a)(e) ? this.props.showToast({
							text: O.fbt._("Sorry, currently you cannot edit Collectible Expression comments on Web.", null, {
								hk: "4dlNfM"
							}),
							duration: 8e3,
							kind: ge.b.SuccessLockComment
						}) : this.props.handleEdit(this.props.commentPermalink)
					}, this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(K.d)(K.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(ce.c)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(ce.c)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(ce.c)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(ce.c)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ce.d)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(q.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ce.c)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ce.g)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? n.a.createElement(re.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ne.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : n.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ne.b,
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
					} = this.props, i = Object(G.a)(s), a = !!t && t.displayText === e.author;
					if (r && i) return o ? n.a.createElement(Pe, {
						comment: e,
						isCommentAuthor: a
					}) : n.a.createElement(je, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(pe.a, null), n.a.createElement(T.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, o = Object(B.a)(e);
					if (s && Object(B.c)(e) && !t) return n.a.createElement(R.a, {
						text: `${o}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Me(e.id),
						id: Me(e.id)
					}, n.a.createElement(W.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Me(e.id)
					}), e.ignoreReports ? n.a.createElement(me.a, null) : n.a.createElement(ue.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						onDistinguishComment: r,
						showModTools: i
					} = this.props, a = Object(G.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (i && d && !e.bannedBy && (c || a && !o)) return n.a.createElement(R.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Le(e.id)
					}, n.a.createElement(Oe.a, null), n.a.createElement(F.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Le(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Le(e.id)
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
						toggleDeleteCommentModal: p
					} = this.props, u = Object(G.a)(c), h = !!r && r.displayText === e.author, b = (!l && !e.isLocked || u && a) && !Object(Z.g)(e), x = r && e.isGildable && !Object(Z.g)(e);
					return n.a.createElement("div", {
						className: s
					}, n.a.createElement(we, null, b && n.a.createElement(Ie, {
						onClick: this.handleReply,
						disabled: d
					}, O.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), x && n.a.createElement(Ie, {
						onClick: this.handleGild
					}, O.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), n.a.createElement(ie.a, {
						dropdownId: `${o}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, n.a.createElement(Ie, {
						onClick: this.sendCommentEventWithNameShare
					}, O.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), n.a.createElement(Ee, {
						dropdownId: Ne(o, e.id),
						onClick: this.handleOverflowMenuClick
					}, !h && !d && n.a.createElement(ye, {
						displayText: O.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, n.a.createElement(fe.a, {
						name: Ce.a.report
					})), n.a.createElement(ye, {
						displayText: e.isSaved ? O.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : O.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(fe.a, {
						name: Ce.a.saved
					}) : n.a.createElement(fe.a, {
						name: Ce.a.save
					})), h && n.a.createElement(ye, {
						displayText: O.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, n.a.createElement(fe.a, {
						name: Ce.a.edit
					})), h && n.a.createElement(ye, {
						displayText: O.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, n.a.createElement(fe.a, {
						name: Ce.a.delete
					}))), this.props.isConfirmModalOpen && n.a.createElement(A.a, {
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
			var Re = _e(Object(r.b)(Te, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						deleteComment: () => o && e(Object(w.i)(s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(I.b)(s.id, t, o)),
						onIgnoreReports: () => e(Object(I.g)(s.id)),
						onGildClick: t => e(Object(_.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(L.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(M.h)({
							tooltipId: Le(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(M.h)({
							tooltipId: Me(s.id)
						})),
						onToggleSave: () => e(Object(y.o)(s.id)),
						handleDelete: () => {
							e(Object(k.i)(ke(s.id))), e(Object(M.h)({
								tooltipId: Ne(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(P.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(j.a)(z.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(J.a)(t)), e(Object(w.g)(n))
						},
						handleReply: t => {
							const o = Object(P.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(J.a)(t)), e(Object(w.h)(n))
						},
						showToast: t => e(Object(N.f)(t)),
						toggleDeleteCommentModal: () => e(Object(k.i)(ke(s.id)))
					}
				})(Object(ae.c)(Object(U.b)(Se)))),
				Ae = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Fe = s("./src/reddit/components/RichTextJson/index.tsx"),
				De = s("./src/reddit/selectors/commentSelector.ts"),
				Be = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				We = s.n(Be);
			const Ue = ve.a.wrapped(Ae.a, "TopMeta", We.a),
				Ve = ve.a.div("ProfileCommentWrapper", We.a),
				Ke = ve.a.div("CommentBody", We.a),
				He = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(De.c)(e, t),
					flair: Q.e
				})),
				Ge = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = He(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: o,
					isExpanded: r,
					showFlatlist: i,
					showModTools: c
				} = e, l = s => {
					var o;
					return n.a.createElement(Fe.b, {
						className: s,
						content: Object(H.a)(t),
						mediaMetadata: t.media && t.media.mediaMetadata,
						expressionAssetData: null === (o = t.media) || void 0 === o ? void 0 : o.expressionAssetData,
						rtJsonElementProps: Ge(e),
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0
						}
					})
				};
				return n.a.createElement(Ve, {
					className: Object(a.a)({
						[We.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(Ue, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(Ke, null, r ? l() : n.a.createElement(f, {
					height: d.Zb,
					isExpanded: r
				}, l)), !t.isDeleted && i && n.a.createElement(Re, {
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
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
			})), s.d(t, "a", (function() {
				return y
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				h = s("./src/reddit/components/SourceLink/index.tsx"),
				b = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				C = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CrosspostBox/index.m.less"),
				g = s.n(O),
				E = s("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const j = 8,
				y = 1,
				w = E.a.div("Container", g.a),
				I = E.a.div("PostMetaWrapper", g.a),
				_ = E.a.wrapped(u.c, "PostTitle", g.a),
				k = E.a.div("FlatList", g.a),
				L = E.a.div("FlatItem", g.a),
				N = E.a.span("FlatListDotSpacer", g.a),
				M = E.a.wrapped(w, "LinkContainer", g.a),
				T = E.a.div("Content", g.a),
				S = E.a.div("ThumbnailContainer", g.a),
				R = Object(d.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Tb.TOPIC),
					shouldOpenPostInNewTab: f.lb
				}),
				A = Object(i.b)(R);
			t.c = Object(C.b)(A(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: n,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const d = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${n.isListing}`
					},
					c = t;
				return i && !i.media ? r.a.createElement(M, {
					className: c
				}, r.a.createElement(T, null, r.a.createElement(I, null, r.a.createElement(p.a, d)), F(i), i.source && r.a.createElement(h.a, {
					post: i
				}), B(e)), U(e)) : r.a.createElement(w, {
					className: c
				}, r.a.createElement(I, null, r.a.createElement(p.a, d)), F(i), D(e), B(e))
			}));
			const F = e => r.a.createElement(_, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				D = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, P({}, o, {
						className: g.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(k, null, r.a.createElement(L, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(N, null), r.a.createElement(L, null, W(e)))
				},
				W = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: n
					} = t;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(n, "comment count", Object(l.b)(n))], {
						hk: "xPYWL"
					}))
				},
				U = e => r.a.createElement(S, null, r.a.createElement(b.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/DevvitCustomPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/models/Media/index.ts"),
				a = s("./src/reddit/icons/fonts/OutboundLink/index.tsx");
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function c(e) {
				const {
					post: t
				} = e, s = t.permalink.replace("/comments/", "/post-viewer/");
				return Object(i.G)(t) ? n.a.createElement("div", {
					className: "flex items-center justify-center m-xs bg-neutral-background-weak border-sm border-neutral-border border-solid rounded-[0.5rem] w-[490px]"
				}, n.a.createElement("div", {
					className: "flex flex-col text-center py-[48px]"
				}, n.a.createElement("div", {
					className: "max-w-[294px] my-md leading-5 text-neutral-content"
				}, n.a.createElement("p", {
					className: "text-[14px]"
				}, d._("We're launching a new type of custom post. For now, it must be opened in a new window.", null, {
					hk: "v8S8Z"
				})), n.a.createElement("p", {
					className: "text-[14px]"
				}, d._("It's us, not you.", null, {
					hk: "4wyEYD"
				}))), n.a.createElement(r.a, {
					className: "m-auto mt-sm",
					kind: r.b.ExternalLink,
					href: s,
					target: "_blank",
					priority: r.c.Primary,
					rplStyle: !0
				}, n.a.createElement(n.a.Fragment, null, n.a.createElement(a.a, {
					className: "ml-0 m-xs"
				}), d._("Open", null, {
					hk: "1yvDSH"
				}))))) : null
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
				v = s("./src/telemetry/models/Outbound.ts"),
				f = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				O = s("./src/reddit/components/ExpandoButton/index.m.less"),
				g = s.n(O);
			const E = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(p.b)(t.permalink), t.id))
				})),
				P = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(d.a)(g.a.icon, g.a.hideOnHover);
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
			t.a = E(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: l,
					isExpanded: p,
					post: b,
					toggle: O,
					useMediaIcons: E
				} = e, j = s || b, y = Object(i.e)(C.b), w = Object(i.e)(C.c), I = t => {
					(y || w) && (t.preventDefault(), e.showModalOnPostLinkClick(j))
				}, _ = j.media, k = Object(x.q)(b), L = n && !!s;
				return _ && !k && !(("rtjson" === _.type || "text" === _.type || "liveaudio" === _.type) && !Object(u.a)(j)) || !!b.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, g.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					"data-adclicklocation": f.a.MEDIA,
					onClick: O
				}, p ? r.a.createElement(h.a, {
					name: "collapse",
					className: g.a.icon
				}) : E ? r.a.createElement(r.a.Fragment, null, P(j.media && j.media.type, L, b), r.a.createElement(h.a, {
					name: "expand",
					className: Object(d.a)(g.a.icon, g.a.showOnHover)
				})) : r.a.createElement(h.a, {
					name: "expand",
					className: g.a.icon
				})) : j.source && j.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, g.a.outer),
					"data-click-id": "expando_open",
					href: j.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(h.a, {
					name: "external_link",
					className: Object(d.a)(g.a.icon, g.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, g.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(j.permalink),
					rel: "nofollow",
					onClick: I
				}, r.a.createElement(h.a, {
					name: "text_post",
					className: g.a.icon
				}))
			})
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/LiveChatActiveUsers/index.m.less"),
				d = s.n(a);
			const c = e => {
				let {
					userCount: t
				} = e;
				return i.a.createElement("span", {
					className: d.a.liveChatActiveUsers
				}, t > 1 ? n.fbt._("{userCount} here now", [n.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : n.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				m = s.n(l);
			const p = () => i.a.createElement("span", {
				className: m.a.LiveLabel
			}, n.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var u = s("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				h = s.n(u);
			const b = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return i.a.createElement("div", {
					className: Object(o.a)(h.a.liveParticipation, s)
				}, i.a.createElement(p, null), i.a.createElement(c, {
					userCount: t
				}))
			};
			var x = s("./node_modules/react-redux/es/index.js"),
				C = s("./src/reddit/selectors/chat.ts"),
				v = s("./src/reddit/selectors/experiments/chat.ts");
			const f = e => {
				let {
					postId: t,
					className: s
				} = e;
				const o = Object(x.e)(e => Object(C.a)(e, t));
				return Object(x.e)(v.f) ? i.a.createElement(b, {
					userCount: o,
					className: s
				}) : null
			}
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
				return Object(c.a)().hideRecommendationContext ? null : n.a.createElement(a.b, {
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
				v = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				O = s.n(f);
			const g = Object(i.b)(() => Object(a.c)({
				comment: x.c,
				isAwarded: (e, t) => {
					const s = Object(x.c)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(C.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: v.fb
			}), e => ({
				openPost: t => e(Object(m.K)(t))
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
				P = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/helpers/isComment.ts"),
				w = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				I = s.n(w),
				_ = s("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const L = Object(j.v)({
					currentProfileName: j.j,
					isCommentsPage: j.y,
					isCommentPermalink: j.x,
					isProfilePostListing: j.N,
					pageLayer: e => e
				}),
				N = _.a.wrapped(P.a, "OverviewCommentPost", I.a),
				M = _.a.wrapped(r.default, "ClassicPost", I.a);
			t.a = L(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: o,
					allowModToolsUnderComments: r,
					height: i,
					width: a,
					...d
				} = e;
				return Object(y.a)(t) ? s ? n.a.createElement(n.a.Fragment, null, n.a.createElement(N, k({}, d, {
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
				}) : n.a.createElement(M, k({}, d, {
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
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				f = s.n(v),
				O = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				g = s("./src/reddit/selectors/commentSelector.ts"),
				E = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				P = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				j = s.n(P);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = c.a.wrapped(x.default, "InternalLink", j.a), I = c.a.div("Wrapper", j.a), _ = c.a.div("Row", j.a), k = c.a.wrapped(O.a, "CommentIcon", j.a), L = c.a.div("TitleContainer", j.a), N = c.a.div("PostTitleContainer", j.a), M = c.a.wrapped(p.c, "PostTitle", j.a), T = c.a.wrapped(u.g, "PostTopMeta", j.a), S = c.a.wrapped(u.a, "MetaSeparator", j.a), R = Object(r.b)(() => Object(i.c)({
				comment: g.c,
				isBlockingInterstitialEnabled: E.b,
				isBlockingInterstitialV2Enabled: E.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.bb)(t))
			})), A = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return n.a.createElement(o.Fragment, null, n.a.createElement(S, null), n.a.createElement(T, {
					metaSeparatorClassName: j.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, F = e => {
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
				return n.a.createElement(w, {
					"data-click-id": "user",
					to: d,
					onClick: e => {
						(o || r) && (e.preventDefault(), i(d))
					}
				}, a)
			};
			t.a = Object(d.a)(Object(b.b)(R(Object(h.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: o,
					post: r
				} = e;
				return n.a.createElement(m.b, {
					className: Object(a.a)(f.a.compactPostStyles, j.a.overviewCommentPost, {
						[j.a.banned]: !!e.post.bannedBy,
						[j.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(I, {
					style: {
						background: Object(C.e)(e)
					}
				}, n.a.createElement(_, null, n.a.createElement(k, null), n.a.createElement(L, null, y._("{postAuthor} commented on {postTitle} {postMeta}", [y._param("postAuthor", F({
					...e
				})), y._param("postTitle", n.a.createElement(N, null, n.a.createElement(M, {
					outboundLinkClassName: j.a.postTitleOutboundLink,
					post: r,
					size: p.b.Small,
					titleClassName: j.a.postTitleTitle
				}))), y._param("postMeta", A(e))], {
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
				v = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				O = s.n(f);
			const g = m.a.div("ProfileOwnerCommentWrapper", O.a),
				E = m.a.div("CommentContentWrapper", O.a),
				P = m.a.div("Wrapper", O.a),
				j = m.a.div("CommentSeparator", O.a),
				y = Object(a.b)(() => Object(d.c)({
					comment: (e, t) => Object(x.c)(e, t),
					isAwarded: (e, t) => {
						const s = Object(x.c)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(C.a)(e, t);
							return s && s.coinPrice >= c.g
						})
					},
					isNightmodeOn: v.fb
				}), e => ({
					openPost: t => e(Object(h.K)(t))
				}));
			class w extends i.a.Component {
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
					} = this.props, h = m === e.author ? I : _;
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
					}, i.a.createElement(P, {
						className: Object(l.a)({
							[O.a.isFirst]: a,
							[O.a.isLast]: d,
							[O.a.isAwarded]: r,
							[O.a.isNightmodeOn]: c
						})
					}, n()(s + 1, e => i.a.createElement(j, {
						key: e
					})), i.a.createElement(E, null, h(t, m, u))))
				}
			}
			const I = (e, t, s) => i.a.createElement(g, null, _(e, t, s, !0, !0)),
				_ = function(e, t, s) {
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
			t.a = y(w)
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return ne
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx"),
				a = s("./src/reddit/models/Media/index.ts"),
				d = s("./src/reddit/models/Post/index.ts"),
				c = s("./src/reddit/components/DevvitCustomPost/index.tsx"),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/constants/adEvents.ts"),
				u = s("./src/reddit/constants/experiments.ts"),
				h = s("./src/reddit/helpers/chooseVariant/index.ts"),
				b = s("./node_modules/reselect/es/index.js");
			const x = Object(b.a)(e => Object(h.c)(e, {
				experimentEligibilitySelector: h.a,
				experimentName: u.Fc
			}), e => e === u.Zd);
			var C = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./src/lib/classNames/index.ts"),
				f = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				O = s("./src/reddit/components/SubredditIcon/index.tsx"),
				g = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				j = s.n(P);
			const y = e => {
				let {
					postId: t,
					className: s
				} = e;
				const o = Object(l.e)(e => Object(g.F)(e, {
						postId: t
					})),
					r = Object(l.e)(e => "subreddit" === (null == o ? void 0 : o.belongsTo.type) ? Object(E.X)(e, {
						subredditId: o.belongsTo.id
					}) : null);
				return r ? n.a.createElement(f.a, {
					className: Object(v.a)(j.a.link, s),
					to: r.url
				}, C.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), n.a.createElement(O.b, {
					className: j.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), n.a.createElement("span", {
					className: j.a.subredditName
				}, r.displayText)) : null
			};
			var w = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				I = s("./src/reddit/connectors/PostViewable/index.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/contexts/Post/index.tsx"),
				L = s("./src/reddit/helpers/path/index.ts"),
				N = s("./src/reddit/hooks/useClickSourceData.ts"),
				M = s("./src/reddit/hooks/useIsOverlay.ts"),
				T = s("./src/reddit/hooks/usePageLayer.ts"),
				S = s("./src/lib/prettyPrintNumber/index.ts"),
				R = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				A = s.n(R);
			const F = e => {
				let {
					post: t
				} = e;
				const s = `${Object(S.b)(t.score)} ${C.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					o = `${Object(S.b)(t.numComments)} ${C.fbt._("comments",null,{hk:"30aUyh"})}`;
				return n.a.createElement("div", {
					className: A.a.postInformation
				}, n.a.createElement("h5", {
					className: A.a.title
				}, t.title), n.a.createElement("div", {
					className: A.a.interactions
				}, n.a.createElement("p", null, s), n.a.createElement("p", null, o)))
			};
			var D = s("./src/lib/isUrl/index.ts"),
				B = s("./src/reddit/actions/profile/index.ts"),
				W = s("./src/reddit/components/Thumbnail/index.tsx"),
				U = s("./src/reddit/components/UserIcon/index.tsx"),
				V = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				K = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				H = s("./src/reddit/selectors/profile.ts"),
				G = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				J = s.n(G);
			const q = e => {
				let {
					post: t
				} = e;
				var s, r, i, a;
				const d = Object(l.d)(),
					c = Object(l.e)(Object(H.l)(t.author)),
					m = Object(o.useMemo)(() => Object(W.c)({
						post: t
					}), [t]),
					p = Object(o.useMemo)(() => Object(D.a)(m), [m]);
				Object(o.useEffect)(() => {
					p || d(Object(B.d)(t.author))
				}, [d, t.author, p]);
				const u = !p && Object(K.a)(null === (s = null == c ? void 0 : c.icon) || void 0 === s ? void 0 : s.url),
					h = Object(V.c)(null === (r = null == c ? void 0 : c.icon) || void 0 === r ? void 0 : r.url);
				return n.a.createElement("div", {
					className: J.a.media
				}, p ? n.a.createElement(W.b, {
					post: t,
					url: m,
					className: J.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: J.a.mediaThumbnailContainer
				}) : null, !p && (null === (i = null == c ? void 0 : c.icon) || void 0 === i ? void 0 : i.url) && n.a.createElement("div", {
					className: J.a.userIconContainer
				}, n.a.createElement(U.a, {
					className: Object(v.a)({
						[J.a.snoovatarUserIcon]: u,
						[J.a.defaultUserIcon]: h
					}, J.a.userIcon),
					iconUrl: null === (a = null == c ? void 0 : c.icon) || void 0 === a ? void 0 : a.url,
					userName: c.name,
					wrapperClassName: J.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var z = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				Z = s.n(z);
			const Y = Object(I.a)(null);
			var Q = Object(k.b)(Y(e => {
					let {
						post: t
					} = e;
					const s = Object(T.a)(),
						o = Object(M.a)(),
						r = Object(N.a)(),
						i = Object(_.x)(s) && !o;
					return n.a.createElement(f.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: i ? Object(L.b)(t.permalink) : Object(w.a)(t.permalink, !1, r)
					}, n.a.createElement("div", {
						className: Z.a.container
					}, n.a.createElement(F, {
						post: t
					}), n.a.createElement(q, {
						post: t
					})))
				})),
				X = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				$ = s.n(X);
			const ee = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => n.a.createElement(Q, {
					postId: e,
					key: e
				}));
				return n.a.createElement("div", {
					className: $.a.container
				}, s)
			};
			var te = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				se = s.n(te);
			const oe = e => {
				let {
					post: t
				} = e;
				const s = Object(l.d)();
				if (!Object(l.e)(x) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [o] = t.adPromotedUserPostIds;
				return n.a.createElement("div", {
					className: se.a.container,
					onClick: () => s(Object(m.y)(t, p.a.Click))
				}, n.a.createElement(ee, {
					postIds: t.adPromotedUserPostIds
				}), n.a.createElement(y, {
					postId: o,
					className: se.a.communityLink
				}))
			};

			function ne(e) {
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
				}) : Object(d.B)(t) && Object(d.A)(t) ? n.a.createElement(oe, {
					post: t
				}) : Object(a.G)(t) ? n.a.createElement(c.a, {
					post: t
				}) : n.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				addModNote: "CUh9f8Zri7XfZRUI18jS5"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				h = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/components/PostMeta/index.m.less"),
				P = s.n(E);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: E,
					isOverlay: j,
					isTopicPage: y,
					post: w,
					shouldShowSubscribeButton: I,
					subredditOrProfile: _,
					tooltipType: k
				} = e, L = !!y, N = Object(O.a)(), M = Object(r.e)(e => !!_ && Object(i.i)(e, _.id)), T = !(!_ || !Object(g.i)(_));
				return n.a.createElement("div", {
					className: P.a.metaContainer
				}, !o && !w.isSponsored && _ && n.a.createElement(c.a, {
					postId: w.id,
					subredditName: _.name,
					isProfile: T
				}, n.a.createElement(h.a, {
					className: P.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: _.url,
						state: N
					}
				}, _.displayText)), _ && _.isQuarantined && n.a.createElement(u.a, null), !o && !w.isSponsored && _ && I && !E && n.a.createElement(b.a, {
					className: P.a.SubscribeButton,
					getEventFactory: e => Object(f.n)(w.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: _.name,
						type: Object(g.i)(_) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: w.id,
					size: C.d.XXS,
					small: !0
				}), !o && !w.isSponsored && n.a.createElement(v.b, null), !o && !w.isSponsored && n.a.createElement(l.h, {
					type: w.belongsTo.type,
					id: w.belongsTo.id
				}), n.a.createElement(p.g, {
					className: P.a.postTopMeta,
					flairStyleTemplate: t,
					post: w,
					tooltipType: k,
					isModWithUserNotesPermissions: M
				}), n.a.createElement(m.a, {
					displayText: _ ? _.displayText : null,
					inSubredditOrProfile: !!o,
					post: w,
					tooltipType: k
				}), !L && n.a.createElement(a.a, {
					hideCta: s,
					thing: w,
					tooltipType: j ? p.f.Lightbox : void 0
				}), M && n.a.createElement(d.a, {
					postOrComment: w,
					className: P.a.addModNote
				}))
			}
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
					isVoteCountAnimation: v,
					postId: f,
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
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: u,
					postId: f,
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
				v = s("./src/lib/LRUCache/index.ts"),
				f = s("./src/telemetry/index.ts"),
				O = s("./src/telemetry/models/Timer.ts"),
				g = s("./src/reddit/components/PostList/index.m.less"),
				E = s.n(g);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const j = 500,
				y = new v.a(j),
				w = new v.a(j),
				I = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				_ = (e, t, s, o, n, r) => {
					const i = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}`;
					let a = y.get(i);
					return void 0 === a && (a = () => {
						s && r.onBottomViewed(o, n), r.trackOnPostEnteredViewport(e, t)
					}, y.set(i, a)), a
				},
				k = (e, t) => {
					const s = `click-${e}`;
					let o = w.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, c.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.e)(s.source.outboundUrl, d.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(b.a)(e)
						})
					}, w.set(s, o)), o
				};
			class L extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new v.a(j), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && f.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = f.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = f.c.end(this.timerId);
						setTimeout(() => Object(f.b)(a.n.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && f.c.cancel(this.timerId), e.itemIds.length && (this.timerId = f.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && f.c.has(this.timerId)) {
						const e = f.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(f.b)(a.n.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && f.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return f.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = f.c.end(e);
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
						} = this.props, u = p[e], h = `overview-chrono-list-item-[layout: ${r}]-[itemId: ${e}]`, b = _(u, r, s, a, d, this.props), x = {
							key: h,
							eventFactory: c,
							inSubredditOrProfile: t,
							isFirstInCommentList: o,
							isLastInCommentList: n,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: r,
							onClickPost: k(e, this.props),
							postId: u
						}, v = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, r, o),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: b,
							render: e => i.a.createElement(C.a, {
								postId: x.postId
							}, i.a.createElement(v, P({}, x, e)))
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
						countOverride: I[s]
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
						viewportTopPadding: h.f + h.r
					}, r), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = L
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FLO1Nek2YpspMr4ozmJCU"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2sOYhKsA_6kr-jal5uxghX",
				subredditName: "Y6X1Z6XpPZ42HHxG6iPUg",
				subredditIcon: "_3KW4JGkWWYds_QkhJav3lV"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less": function(e, t, s) {
			e.exports = {
				postInformation: "_1ykNwWxnTMBSi_9FpI1aS9",
				interactions: "_17rAVV4Z_xjSbW2Dnzd6GG",
				title: "_1hY0DyJaLGV23_ZN7lGZLl"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less": function(e, t, s) {
			e.exports = {
				media: "N08zT4c39PJ7xCbcR2dhy",
				mediaThumbnail: "_9U9c34f1Ov1YZrnCNbH_e",
				mediaThumbnailContainer: "OBfGp3Y3pfXQbQtgTek4B",
				userIconContainer: "_1Xl-Y2ofyQhQDptuCNW3gg",
				userIconWrapper: "F_vBi78s0CDuAiX2g82hg",
				userIcon: "_3Ba5v_JdXj-iGcinxrYkz6",
				defaultUserIcon: "_2Jv4FE0k7dgPuiylbWWXJg",
				snoovatarUserIcon: "X3oFujh1WDeA5ZdMgFl_h"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2trYWJQru0_I7CsxK5kt7W"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/index.m.less": function(e, t, s) {
			e.exports = {
				container: "sMTOozCI4j186nHWW2jp4",
				communityLink: "_1iVqrl2JSOJGHlr6UhojWd"
			}
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
				u = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				h = s("./src/reddit/selectors/moderatorPermissions.ts"),
				b = s("./src/reddit/selectors/postFlair.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: C.d,
					activeModalId: m.a,
					crosspost: x.d,
					isActive: x.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: x.l,
					isExpanded: x.m,
					isLoggedIn: C.S,
					moderatorPermissions: h.m,
					modModeEnabled: c.W,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: b.a,
					showMedia: c.t,
					flairStyleTemplate: c.Y,
					showCTAExperimentDesign: u.a
				},
				f = Object(o.b)(() => Object(n.c)(v), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === a.a.upvoted ? Object(r.ib)(s) : Object(r.v)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(r.eb)(s)),
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
			t.a = e => Object(l.b)(f(Object(d.b)(e)))
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
					...Object(r.q)(s),
					action: n.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.nb)(s),
					post: Object(r.M)(s, e),
					userSubreddit: Object(r.wb)(s),
					actionInfo: Object(r.d)(s, {
						reason: i(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(r.q)(s),
					action: n.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.M)(s, t),
					subreddit: Object(r.nb)(s),
					userSubreddit: Object(r.wb)(s)
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
					...Object(r.q)(t),
					action: n.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.M)(t, e, void 0, 0),
					profile: Object(r.V)(t)
				}),
				m = (e, t, s) => o => ({
					...Object(r.q)(o),
					action: n.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						reason: c(t)
					}),
					post: Object(r.M)(o, e, void 0, s)
				}),
				p = (e, t, s, o, i, a) => d => ({
					...Object(r.q)(d),
					action: n.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.M)(d, e, void 0, a),
					subreddit: Object(r.nb)(d),
					outbound: {
						postId: s,
						url: t,
						subredditId: o,
						subredditName: i
					}
				}),
				u = (e, t, s) => o => ({
					...Object(r.q)(o),
					action: n.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.M)(o, e, void 0, s),
					subreddit: Object(r.nb)(o)
				})
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
				p = s("./src/higherOrderComponents/withLSWatcher.tsx"),
				u = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				h = s("./src/reddit/actions/pages/profileComments/index.ts"),
				b = s("./src/reddit/actions/pages/profileShared.ts"),
				x = s("./src/reddit/components/ContentGate/index.tsx"),
				C = s("./src/reddit/components/EmptyProfile/index.ts"),
				v = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				f = s("./src/reddit/components/JumpToContent/index.tsx"),
				O = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				E = s("./src/lib/lessComponent.tsx"),
				P = s("./src/reddit/components/ClassicPost/index.tsx"),
				j = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				y = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				w = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				I = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				_ = s("./src/reddit/constants/postLayout.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				L = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				N = s("./src/reddit/selectors/commentSelector.ts"),
				M = s("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				T = s.n(M);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const R = E.a.wrapped(P.default, "ClassicPost", T.a),
				A = E.a.wrapped(y.a, "OverviewCommentPost", T.a),
				F = Object(k.v)({
					currentProfileName: k.j,
					pageLayer: e => e
				}),
				D = Object(d.c)({
					comment: (e, t) => {
						let {
							itemId: s
						} = t;
						return Object(N.c)(e, {
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
			var B = F(Object(a.b)(D)(e => {
				const {
					comment: t,
					itemId: s,
					isFirstInCommentList: o,
					isLastInCommentList: n,
					layout: r,
					profileName: a,
					allowModToolsUnderComments: d
				} = e;
				if (r === _.g.Compact) return i.a.createElement(j.a, e);
				const {
					height: c,
					width: l,
					...m
				} = e;
				return i.a.createElement(W, m, o && i.a.createElement(w.a, {
					isFirst: !0
				}, r === _.g.Large ? i.a.createElement(R, S({}, e, {
					availableWidth: l,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : i.a.createElement(A, S({}, e, {
					commentId: s,
					profileName: a
				}))), i.a.createElement(w.a, {
					isLast: n
				}, i.a.createElement(I.a, {
					commentId: s,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: s,
					profileName: a,
					showModTools: d
				})))
			}));
			const W = Object(g.a)(e => i.a.createElement("div", {
				className: Object(O.a)(T.a.backgroundMargin, {
					[T.a.isFirstInCommentList]: e.isFirstInCommentList,
					[T.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(L.e)(e)
				}
			}, e.children));
			var U = s("./src/reddit/components/ProfileItemList/index.tsx"),
				V = s("./node_modules/lodash/noop.js"),
				K = s.n(V),
				H = s("./src/reddit/actions/ads/index.ts"),
				G = s("./src/reddit/actions/comment/list.ts"),
				J = s("./src/reddit/actions/post.ts"),
				q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				z = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Z = s("./src/reddit/helpers/trackers/post.ts"),
				Y = s("./src/reddit/featureFlags/index.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/posts.ts"),
				$ = s("./src/reddit/selectors/profileComments.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/tracking.ts"),
				se = s("./src/reddit/selectors/user.ts");
			const oe = Object(k.v)(),
				ne = {
					apiError: $.a,
					apiPending: $.b,
					currentUser: se.m,
					measureScrollFPS: Y.d.measureScrollFPS,
					layout: k.U,
					loadMore: $.d,
					subredditsById: ee.eb,
					viewportDataLoaded: te.b,
					commentsById: Q.q,
					itemIds: $.f,
					itemIdToPostId: $.e,
					postsById: X.I,
					estimateItemHeight: e => (e, t, s) => {
						if (s) switch (t) {
							case _.g.Medium:
								return 174;
							case _.g.Classic:
								return 129;
							case _.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case _.g.Medium:
							case _.g.Classic:
								return 90;
							case _.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				re = Object(d.c)(ne),
				ie = Object(a.b)(re, e => ({
					onBottomViewed: (t, s) => e(Object(G.c)(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(H.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(J.K)(t)),
					fireAdPixelsOfType: K.a,
					trackOnPostEnteredViewport: K.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(Z.n)(e, t),
					postComponentForLayout: z.b
				}));

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const de = e => i.a.createElement(B, ae({}, e, {
					allowModToolsUnderComments: !0
				})),
				ce = (e => Object(q.c)(oe(ie(e))))(U.a);
			var le = e => i.a.createElement(ce, ae({}, e, {
					itemComponent: de
				})),
				me = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				pe = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				ue = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				he = s("./src/reddit/helpers/name/index.ts"),
				be = s("./src/reddit/helpers/trackers/screenview.ts"),
				xe = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Ce = s("./src/reddit/layout/page/Listing/index.tsx"),
				ve = s("./src/reddit/models/ContentGate.ts"),
				fe = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				Oe = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ge = s("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				Ee = s("./src/reddit/selectors/profile.ts");

			function Pe() {
				return (Pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const je = Object(k.v)(),
				ye = Object(d.a)(k.G, se.mb, (e, t) => {
					let {
						location: s
					} = t;
					return n()([...Object(l.a)(s.search)])
				}, k.U, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Ee.k)(e, {
						profileName: s.params.profileName
					})
				}, se.S, (e, t) => {
					let {
						match: s
					} = t;
					return Object(se.h)(e, c.qc + s.params.profileName)
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(se.N)(e, {
						profileName: s.params.profileName
					})
				}, Oe.g, ge.a, (e, t, s, o, n, r, i, a, d, c, l) => {
					var p;
					const {
						sort: u,
						t: h
					} = Object(b.b)(s), x = Object(m.a)(`u_${n}`, u, s);
					return {
						contentGateInfo: a,
						over18Prefs: t,
						isLoggedIn: i,
						isOwnProfile: e,
						isProfileNSFW: !!r && r.isNSFW,
						layout: o,
						listingKey: x,
						profileName: n,
						sort: u,
						timeSort: h,
						avatar: null === (p = null == r ? void 0 : r.icon) || void 0 === p ? void 0 : p.url,
						isBlocked: d,
						nsfwBlockingExperiment: c,
						showNewDesignBlocking: l
					}
				}),
				we = Object(a.b)(ye, (e, t) => ({
					onLoadMore: () => e(Object(h.moreItemsRequested)()),
					onLayoutChange: () => e(Object(h.profileCommentsRequested)({
						...t.match,
						queryParams: n()([...Object(l.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(u.a)())
				}));
			t.default = je(we(Object(p.a)(Object(xe.d)(e => {
				const {
					avatar: t,
					contentGateInfo: s,
					isBlocked: o,
					isOwnProfile: n,
					isProfileNSFW: a,
					listingKey: d,
					nsfwBlockingExperiment: l,
					onLoadMore: m,
					onLayoutChange: p,
					openNsfwModal: u,
					over18Prefs: h,
					pageLayer: b,
					profileName: O,
					sort: g,
					timeSort: E,
					showNewDesignBlocking: P
				} = e;
				if (Object(r.useEffect)(() => {
						a && !n && l === Oe.a.Blurred && u()
					}, [l, n, a, u]), !O || !b) return null;
				if (s && s.profileDeleted) return i.a.createElement(x.default, {
					contentGateType: ve.a.ProfileDeleted,
					profileName: O
				});
				if (s && s.profileSuspended) return i.a.createElement(x.default, {
					contentGateType: ve.a.ProfileSuspended,
					profileName: O
				});
				if (451 === b.status || s && s.profileBlockedForLegalReason) return i.a.createElement(x.default, {
					contentGateType: ve.a.ProfileBlockedForLegalReason,
					profileName: O
				});
				const j = b.queryParams && "true" === b.queryParams.consent;
				if (403 === b.status || o && !j) return i.a.createElement(fe.a, {
					username: O,
					avatar: t
				});
				if (404 === b.status) return i.a.createElement(x.default, {
					contentGateType: ve.a.ProfileDoesNotExist,
					profileName: O
				});
				const y = O.toLowerCase(),
					w = `/user/${O}/comments/`,
					I = {
						listingKey: d,
						listingName: y
					};
				if (a && !n && l === Oe.a.NoPreview && P) return i.a.createElement(ue.a, {
					contentTitle: Object(he.e)(O)
				});
				if (!h && a && !n && l !== Oe.a.Blurred) return i.a.createElement(x.default, {
					contentGateType: ve.a.Nsfw,
					subredditName: O
				});
				const _ = {
					sort: g,
					baseUrl: w,
					sortOptions: c.Jb,
					timeSort: E
				};
				return i.a.createElement(Ce.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(me.a, {
						profileName: O,
						viewBlockedConsent: j
					})),
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(v.a, _), i.a.createElement(f.a, null), i.a.createElement(le, {
						listingKey: d,
						listingName: y,
						listingViewed: (e, t) => Object(be.n)(d, g, t, e, E),
						noPostsComponent: () => i.a.createElement(C.b, {
							profileName: O,
							timeSort: E
						}),
						onLoadMore: m,
						onTryAgain: p,
						inSubredditOrProfile: !1
					})),
					sidebar: i.a.createElement(pe.a, Pe({}, I, {
						profileName: O
					}))
				})
			}))))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.91c5d9991aa61c90b05e.js.map