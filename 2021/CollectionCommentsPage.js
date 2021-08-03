// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.41c2251c08a491a4728c.js
// Retrieved at 8/3/2021, 2:50:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage", "CommentsPage"], {
		"./src/lib/makeCollectionCommentsPageKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t, s, o = {}) => {
				let n = `collectionCommentsPage--[collection:'${e}']`;
				return t && (n += `--[post:'${t}']`), s && (n += `--[rootComment:'${s}']`), o && (o.sort && o.hasSortParam && (n += `--[sort:'${o.sort}']`), o.context && (n += `--[context:${o.context}]`), o.depth && (n += `--[depth:${o.depth}]`)), n
			}
		},
		"./src/reddit/actions/commentsListTruncated/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const r = Object(o.a)(n.a),
				i = Object(o.a)(n.b)
		},
		"./src/reddit/actions/dismissedTruncationList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const r = Object(o.a)(n.a)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return j
			}));
			var o, n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(o || (o = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				u = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(n.a)(i.g),
				g = Object(n.a)(i.e),
				C = Object(n.a)(i.h),
				x = Object(n.a)(i.c),
				f = Object(n.a)(i.f),
				v = Object(n.a)(i.j),
				O = Object(n.a)(i.i),
				y = () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t(),
						r = Object(p.e)(n),
						i = Object(p.d)(n),
						c = Object(h.I)(n);
					if (r || !i) return;
					e(C());
					let u = !1;
					try {
						const t = c ? o.LoggedInGeo : o.LoggedOutGeo,
							n = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (P(t)) {
								if (E(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), u = !0
								} else if (w(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: o,
											interactedSubreddit: n,
											category: r
										} = s.focusRecommendations[0],
										i = [o, n],
										a = Object(m.d)(i),
										d = Object(l.b)(i),
										c = Object(m.c)(o),
										p = {
											recommendedSubredditIds: [o.id],
											interactedSubredditIds: [n.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: r,
											lastLoadedEnv: "client"
										};
									e(b(p)), u = !0
								}
							} else u = !1
						}
					} catch (f) {
						u = !1
					}
					u || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, P = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						o = t && t.type;
					return !!(s && !E(e) && o === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, j = () => async (e, t, s) => {
					var o, n;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (n = null === (o = Object(u.b)(t())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(h.J)(i);
						return Object(r.i)(() => e(y()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(f({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/collectionCommentsPage.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "collectionCommentsPagePending", (function() {
				return K
			})), s.d(t, "collectionCommentsPageLoaded", (function() {
				return G
			})), s.d(t, "collectionCommentsPageFailed", (function() {
				return q
			})), s.d(t, "collectionCommentsPageRequested", (function() {
				return z
			})), s.d(t, "collectionCommentsPageLoadedFull", (function() {
				return Y
			})), s.d(t, "fullCollectionCommentsPageDataRequested", (function() {
				return Q
			})), s.d(t, "collectionCommentsPageDataRequested", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				i = s("./src/lib/pageTitle.ts"),
				a = s("./src/lib/truncateText/index.ts"),
				d = s("./src/reddit/actions/ads/index.ts"),
				c = s("./src/reddit/actions/economics/helpers/async.ts"),
				l = s("./src/reddit/actions/pages/subreddit.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/profile/index.ts"),
				h = s("./src/reddit/actions/shortcuts/active.ts"),
				b = s("./src/reddit/actions/subreddit.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				C = s("./src/reddit/constants/adEvents.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				f = s("./src/reddit/constants/postCollection.ts"),
				v = s("./src/reddit/constants/posts.ts"),
				O = s("./src/reddit/endpoints/governance/posts.ts"),
				y = s("./src/config.ts"),
				P = s("./src/lib/makeApiRequest/index.ts"),
				E = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function w(e, t, s) {
				const o = `${y.a.gatewayUrl}/desktopapi/v1/collection_postcomments`;
				return s ? Object(E.a)(`${o}/${e}/${t}/${s}`) : t ? Object(E.a)(`${o}/${e}/${t}`) : Object(E.a)(`${o}/${e}`)
			}
			var j = (e, t, s, n, r) => Object(P.a)(e, {
					data: r,
					endpoint: w(t, s, n),
					method: o.hb.GET
				}),
				k = s("./src/reddit/endpoints/page/subredditPage.ts"),
				I = s("./src/reddit/helpers/canonicalUrls.ts"),
				_ = s("./src/reddit/helpers/commentList/index.ts"),
				S = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				L = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/helpers/trackers/screenview.ts"),
				N = s("./src/reddit/models/Comment/index.ts"),
				M = s("./src/reddit/models/Post/index.ts"),
				R = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				A = s("./src/reddit/selectors/platform.ts"),
				F = s("./src/reddit/selectors/postCollection.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/subreddit.ts"),
				D = s("./src/reddit/actions/pages/comments.ts"),
				U = s("./src/reddit/actions/pages/constants.ts"),
				W = s("./src/lib/initializeClient/installReducer.ts"),
				H = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(W.a)({
				pages: {
					comments: H.a
				}
			});
			const K = Object(n.a)(U.d),
				G = Object(n.a)(U.b),
				q = Object(n.a)(U.a),
				z = e => async (t, s) => {
					const {
						collectionId: n,
						partialPostId: r,
						partialCommentId: d,
						subredditName: c = "",
						routePrefix: l
					} = e.params, g = r ? Object(M.s)(r) : "", C = d && Object(N.h)(d), {
						queryParams: O
					} = e, y = s(), {
						instanceId: P
					} = O, E = {
						id: n,
						type: v.b[l]
					}, w = v.b[l] === v.a.PROFILE, {
						hasSortParam: j,
						sortToUse: k
					} = Object(S.a)(y, g), _ = ["context", "depth", "limit", x.f].reduce((e, t) => {
						const s = parseInt(O[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: c,
						hasSortParam: j,
						instanceId: P
					});
					j && (_.sort = k), t(p.r(g)), await Promise.all([w ? t(u.d(c)) : Promise.resolve(), t(J(n, g, C, _))]);
					const L = ((e, t) => {
						const s = Object(F.q)(e, {
							collectionId: t.id
						});
						if (!s) return "";
						const n = Object(V.K)(e, {
								identifier: t
							}),
							r = Object(i.b)(s.title, n.name).toString();
						return Object(a.a)(r, f.c, o.gb)
					})(s(), E) || Object(i.c)();
					t(m.l({
						title: L
					}));
					const R = s().posts.models[g];
					if (R) {
						const o = Object(V.K)(s(), {
							identifier: R.belongsTo
						});
						if (!R.isSponsored)
							if (R.belongsTo.type === v.a.SUBREDDIT) {
								!!Object(V.R)(y, {
									subredditId: R.belongsTo.id
								}) || await t(b.o(o.name))
							} else await t(u.d(o.name));
						const n = s().posts.instances[g] ? e.queryParams.instanceId : R.postId;
						t(Object(h.b)(n))
					}
					w ? Object(I.d)(s(), t, e) : Object(I.e)(s(), t, e), Object(T.v)(s(), !0)
				}, Y = Object(n.a)(U.c), Q = (e, t, s, o) => async (n, i, a) => {
					const d = Object(r.a)(e, t, s, o),
						c = i();
					t = t || Object(F.p)(c, {
						collectionId: e
					});
					const l = await j(a.apiContext(), e, t, s, o);
					if (n(Object(m.m)(l.status)), l.ok) {
						if (!(t = t || l.body.collections[e].primaryPostId)) return;
						const s = Object(_.a)(l.body, t, c);
						n(G({
							key: d,
							collectionId: e,
							meta: c.meta,
							postId: t,
							shouldCollapse: s,
							...l.body
						}));
						const o = c.user.prefs.commentMode;
						n(Y({
							commentMode: o,
							key: d,
							postId: t
						}))
					} else n(q({
						error: l.error,
						key: d,
						...l.body
					}))
				}, J = (e, t, s, o, n) => async (i, a, u) => {
					const h = Object(r.a)(e, t, s, o),
						b = a();
					t = t || Object(F.p)(b, {
						collectionId: e
					});
					const {
						subredditName: x
					} = o, f = b.pages.comments.keyToHeadCommentId.hasOwnProperty(h), v = b.pages.comments.api.fullyLoaded[h], y = b.pages.comments.api.error[h];
					if (b.pages.comments.api.pending[h] || f && !y) {
						if (f && !b.sidebarPromotedPosts.firstFetch) {
							const e = Object(A.h)(b) ? R.a.COMMENTS_OVERLAY : R.a.COMMENTS;
							window.addEventListener("load", () => {
								i(Object(d.b)(e))
							})
						}
						return void(v || n || i(Q(e, t, s, o)))
					}
					const P = b.user.prefs.commentMode;
					i(K({
						key: h,
						collectionId: e,
						commentMode: P,
						postId: t
					}));
					const E = {
						...o
					}; {
						const e = t && Object(B.G)(a(), {
							postId: t
						});
						e && e.numComments && e.numComments > D.MIN_NUM_COMMENTS_TO_TRUNCATE && (E.truncate = D.NUM_COMMENTS_TRUNCATE)
					}
					let w, I = await Object(L.a)("comments", () => j(u.apiContext(), e, t, s, E));
					if (i(Object(m.m)(I.status)), I.ok && (t = t || I.body.collections[e].primaryPostId)) {
						const e = Object.keys(I.body.posts).filter(e => !!I.body.posts[e].isMeta),
							s = Object(B.G)(a(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(O.a)(u.apiContext(), s.belongsTo.id, e);
							t.ok && (w = t.body)
						}
					}
					if (!n) {
						const n = t ? Object(B.G)(a(), {
							postId: t
						}) : null;
						n && I.body.comments && Object.keys(I.body.comments).length < n.numComments ? i(Q(e, t, s, o)) : I.ok && i(Y({
							commentMode: P,
							key: h,
							postId: t
						}));
						const r = Object(A.h)(b) ? R.a.COMMENTS_OVERLAY : R.a.COMMENTS;
						i(Object(d.b)(r))
					}
					if (I.ok) {
						if (!t) return;
						const e = Object(_.a)(I.body, t, b);
						i(Object(D.commentsPageLoaded)({
							commentMode: P,
							key: h,
							postId: t,
							meta: b.meta,
							governance: w,
							shouldCollapse: e,
							...I.body
						})), i(g.g(h));
						const s = Object(B.G)(b, {
							postId: t
						});
						s && i(p.z(s, C.a.CommentsView)), !n && s && "subreddit" === s.belongsTo.type && I.body.comments && await i(Object(c.a)({
							commentIds: Object.keys(I.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else x && (i(Object(l.subredditPending)({
						key: h
					})), I = await Object(L.a)("subreddit", () => Object(k.a)(u.apiContext(), x, {})), i(Object(m.m)(I.status))), i(Object(l.handleSubredditPageApiError)(I, x)), i(q({
						error: I.error,
						key: h,
						...I.body
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return ye
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return Pe
			})), s.d(t, "commentsPagePending", (function() {
				return Ee
			})), s.d(t, "commentsPageLoaded", (function() {
				return we
			})), s.d(t, "commentsPageFailed", (function() {
				return je
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return ke
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return Ie
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return _e
			})), s.d(t, "commentsPageRequested", (function() {
				return Se
			})), s.d(t, "commentsPageDataRequested", (function() {
				return Le
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return Te
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return Ne
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/reddit/actions/category/index.ts"),
				r = s("./src/reddit/actions/discoveryUnit.ts"),
				i = s("./src/reddit/actions/pages/subreddit.ts"),
				a = s("./src/reddit/actions/shortcuts/active.ts"),
				d = s("./src/reddit/actions/subredditSettings.ts"),
				c = s("./src/reddit/endpoints/governance/posts.ts"),
				l = s("./src/reddit/endpoints/page/commentsPage.ts"),
				m = s("./src/reddit/endpoints/page/subredditPage.ts"),
				p = s("./src/reddit/endpoints/profile/info.ts"),
				u = s("./src/reddit/models/Post/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/pageTitle.ts"),
				g = s("./src/reddit/actions/economics/helpers/async.ts"),
				C = s("./src/reddit/actions/economics/powerups/achievements.ts"),
				x = s("./src/reddit/actions/externalAccount.ts"),
				f = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				v = s("./src/reddit/actions/platform.ts"),
				O = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/actions/presence.ts"),
				P = s("./src/reddit/actions/profile/index.ts"),
				E = s("./src/reddit/actions/subreddit.ts"),
				w = s("./src/reddit/actions/toaster.ts"),
				j = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/constants/graphql.ts"),
				I = s("./src/reddit/constants/parameters.ts"),
				_ = s("./src/reddit/constants/posts.ts"),
				S = s("./src/reddit/helpers/commentList/index.ts"),
				L = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				T = s("./src/reddit/models/Comment/index.ts"),
				N = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/models/Subreddit/index.ts"),
				R = s("./src/reddit/models/User/index.ts"),
				A = s("./src/reddit/selectors/category.ts"),
				F = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				B = s("./src/reddit/selectors/experiments/postSeo.ts"),
				V = s("./node_modules/reselect/es/index.js"),
				D = s("./src/reddit/constants/experiments.ts"),
				U = s("./src/reddit/helpers/chooseVariant/index.ts"),
				W = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				H = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				K = s("./src/reddit/selectors/platform.ts"),
				G = s("./node_modules/fbt/lib/FbtPublic.js"),
				q = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				z = s("./src/reddit/selectors/user.ts");
			const Y = new Set([u.g.AntiEvilOps, u.g.AutomodFiltered, u.g.CommunityOps, u.g.ContentTakedown, u.g.CopyrightTakedown, u.g.Moderator, u.g.Reddit]),
				Q = new Set([u.g.Author, u.g.AuthorDeleted]),
				J = Object(V.a)(W.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return Y.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = G.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let o = Object(q.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== N.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				Z = Object(V.a)(W.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return Q.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = G.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let o = Object(q.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== N.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				X = Object(V.a)(z.j, W.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				$ = Object(V.a)(K.f, W.a, J, Z, H.a, X, H.b, (e, t, s, o, n, r, i) => {
					if (!e || !t || n) return !1;
					if (o) return !0;
					const a = r || i,
						d = t.score >= 2 || t.numComments >= 2;
					return !(!s || a || d)
				});
			var ee = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				te = s("./src/reddit/selectors/posts.ts"),
				se = s("./src/reddit/selectors/subreddit.ts"),
				oe = s("./src/lib/makeActionCreator/index.ts"),
				ne = s("./src/lib/makeCommentsPageKey/index.ts"),
				re = s("./src/reddit/actions/ads/index.ts"),
				ie = s("./src/reddit/helpers/canonicalUrls.ts"),
				ae = s("./src/reddit/helpers/correlationIdTracker.ts"),
				de = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				ce = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				le = s("./src/lib/performanceTimings/index.tsx"),
				me = s("./src/reddit/actions/gold/powerups.ts"),
				pe = s("./src/reddit/actions/subreddit/subredditPosts.ts");
			const ue = e => {
				var t, s;
				const o = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
					n = o && Object(u.s)(o),
					{
						sortToUse: r
					} = Object(L.a)(e, n);
				return (!r || r === h.s.CONFIDENCE) && Object(U.c)(e, {
					experimentEligibilitySelector: () => Object(z.I)(e),
					experimentName: D.w
				}) === D.y.Enabled
			};
			var he = s("./src/reddit/selectors/chatPost.ts"),
				be = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				ge = s("./src/reddit/selectors/seo/index.ts"),
				Ce = s("./src/reddit/actions/pages/constants.ts"),
				xe = s("./src/lib/initializeClient/installReducer.ts"),
				fe = s("./src/reddit/reducers/pages/comments/index.ts"),
				ve = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				Oe = s("./src/reddit/selectors/i18n/index.ts");
			Object(xe.a)({
				pages: {
					comments: fe.a
				}
			});
			const ye = 25,
				Pe = 100,
				Ee = Object(oe.a)(Ce.h),
				we = Object(oe.a)(Ce.f),
				je = Object(oe.a)(Ce.e),
				ke = (e, t, s) => {
					const o = !e,
						n = Object(te.G)(t, {
							postId: s
						}).belongsTo,
						r = Object(se.K)(t, {
							identifier: n
						}),
						i = Object(ge.c)(t, {
							identifier: n
						}),
						a = !!Object(be.c)(t),
						d = Object(Oe.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (c.listingBelow = i || o, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (i || o) && (!Object(M.h)(r) && !Object(he.d)(t, {
						postId: s
					}) && !!r || !Object(K.h)(t) && Object(B.e)(t)), e && (c.postQASchema = Object(B.d)(t)), c
				},
				Ie = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				_e = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				Se = e => async (t, s) => {
					var r, i;
					const {
						partialPostId: d,
						partialCommentId: c
					} = e.params, {
						subredditName: l
					} = e.params || "", m = d ? Object(u.s)(d) : "", p = c && Object(T.h)(c), {
						path: g,
						queryParams: C
					} = e, y = Object(f.d)(g), {
						instanceId: w
					} = C, {
						hasSortParam: j,
						sortToUse: S
					} = Object(L.a)(s(), m), M = null === (i = null === (r = Object(K.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === i ? void 0 : i.route.chunk, R = ["context", "depth", "limit", I.f].reduce((e, t) => {
						const s = parseInt(C[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: l,
						hasSortParam: j,
						instanceId: w,
						include_categories: !0
					});
					j && (R.sort = S), R.onOtherDiscussions = y, t(O.r(m)), await t(Le(m, p, R, S));
					const F = s().posts.models[m],
						B = Object(z.J)(s());
					if (F && "subreddit" === F.belongsTo.type) {
						const e = F.belongsTo.id,
							s = Object(le.i)(() => t(Object(me.k)(e, {
								fullData: !0,
								includeIdentity: B
							})), {
								name: "subredditPowerupsRequested",
								page: M,
								isLoggedIn: B
							});
						await s
					}
					if (F) {
						const r = ((e, t) => {
								const s = Object(te.T)(e, {
										postId: t
									}),
									o = Object(te.G)(e, {
										postId: t
									});
								return s && o ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), m),
							i = Object(se.K)(s(), {
								identifier: F.belongsTo
							});
						if (i && (e => D.yd.Redirect === Object(U.b)(e, {
								experimentEligibilitySelector: $,
								experimentName: D.qd
							}))(s())) return void t(Object(o.c)(i.url));
						if ((F.media && F.media.type) === N.o.LIVEVIDEO) {
							const e = `/rpan${F.belongsTo.type===_.a.SUBREDDIT?i.url:"/"}${Object(u.t)(F.id)}`;
							return void t(Object(o.c)(e))
						}
						if (F.belongsTo.type !== _.a.SUBREDDIT || F.isSponsored) {
							if (F.belongsTo.type === _.a.PROFILE) {
								const e = Object(le.i)(() => t(P.d(i.name)), {
									name: "getProfileInfo",
									page: M,
									isLoggedIn: B
								});
								await e
							}
						} else {
							if (!!!Object(se.R)(s(), {
									subredditId: F.belongsTo.id
								})) {
								const e = Object(le.i)(() => t(E.o(i.name)), {
									name: "getSubredditRules",
									page: M,
									isLoggedIn: B
								});
								await e
							}
						}
						const d = ke(!1, s(), m),
							c = y;
						if (Ie(c, d)) {
							Object(ae.d)(ae.a.LinkedPosts);
							const e = Object(ae.c)(ae.a.LinkedPosts);
							Object(ae.d)(ae.a.NsfwLinkedPosts);
							const o = Object(ae.c)(ae.a.NsfwLinkedPosts),
								n = {
									adContext: {
										layout: k.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: m
									},
									range: h.bc.WEEK.toUpperCase(),
									sort: h.N.TOP,
									subredditName: i.name
								},
								r = {
									postId: m
								},
								a = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(be.c)(s())
								},
								l = {
									nsfwListingBelowCorrelationId: o,
									nsfwListingBelowExperimentVariant: Object(ve.a)(s())
								},
								p = _e(d);
							Object(le.i)(() => t(Object(pe.a)({
								...r,
								...n,
								...a,
								...l,
								...p,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: B,
								page: M
							});
							0
						}
						t(Object(x.p)()), t(v.l({
							title: r
						}));
						const l = s().posts.instances[m] ? e.queryParams.instanceId : F.postId;
						t(Object(a.b)(l)); {
							const e = Object(A.d)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(n.c(e))))
						}
					} else t(v.l({
						title: b.c()
					}));
					const {
						routePrefix: V
					} = e.params;
					_.b[V] === _.a.PROFILE ? Object(ie.d)(s(), t, e) : Object(ie.b)(s(), t, e)
				}, Le = (e, t, s, o) => async (n, a, d) => {
					var u, b;
					const x = a(),
						f = Object(ne.a)(e, t, s),
						{
							subredditName: P
						} = s,
						E = x.pages.comments.keyToHeadCommentId.hasOwnProperty(f),
						k = x.pages.comments.api.fullyLoaded[f],
						I = x.pages.comments.api.error[f],
						_ = x.pages.comments.api.pending[f],
						L = !Object(z.I)(x),
						T = Object(z.j)(x),
						N = o === h.s.CHAT,
						M = !!x.platform.lastPage;
					if ((_ || E && !I) && !(N && M)) {
						if (E && !x.sidebarPromotedPosts.firstFetch) {
							const e = Object(K.h)(x) ? ce.a.COMMENTS_OVERLAY : ce.a.COMMENTS;
							window.addEventListener("load", () => {
								n(Object(re.b)(e))
							})
						}
						return void(k || n(Ne(e, t, s)))
					}
					n(r.g());
					const A = x.user.prefs.commentMode;
					n(Ee({
						key: f,
						postId: e,
						commentMode: A
					}));
					const B = {
						...s,
						...N ? {
							sort: h.s.LIVE
						} : L ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(te.G)(a(), {
							postId: e
						});
						t && t.numComments && t.numComments > Pe && (B.truncate = ye)
					}
					const V = null === (b = null === (u = Object(K.b)(x)) || void 0 === u ? void 0 : u.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
						D = Object(le.i)(() => Object(l.a)(d.apiContext(), e, t, B, Object(F.a)(a()), ue(a())), {
							name: "fetchCommentsPage",
							isLoggedIn: !L,
							page: V
						}),
						U = !L && T && Object(le.i)(() => Object(p.d)(d.gqlContext(), Object(R.e)(T)), {
							name: "fetchProfileKarma",
							isLoggedIn: !L,
							page: V
						}) || null,
						[W, H] = await Promise.all([D, U]);
					let G;
					if (n(Object(v.m)(W.status)), W.ok) {
						const t = Object.keys(W.body.posts).filter(e => !!W.body.posts[e].isMeta),
							s = W.body.posts[e];
						if (t.length) {
							const e = Object(le.i)(() => Object(c.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: V,
									isLoggedIn: !L
								}),
								o = await e;
							o.ok && (G = o.body)
						}
						if (H && H.ok) {
							const {
								data: e
							} = H.body, t = {
								karma: {
									...p.a
								}
							};
							if (Object(p.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							W.body && W.body.account && Object.assign(W.body.account, t)
						}
						const o = Object(S.a)(W.body, e, x);
						n(we({
							key: f,
							postId: e,
							meta: x.meta,
							governance: G,
							shouldCollapse: o,
							...W.body
						}));
						const r = s && "subreddit" === s.belongsTo.type ? s.belongsTo.id : null,
							i = W.body.comments,
							a = W.body.posts;
						await n(Object(y.b)(a, i, r)), await n(Object(C.b)(r, i))
					} {
						const o = Object(te.G)(a(), {
							postId: e
						});
						o && W.body.comments && Object.keys(W.body.comments).length < o.numComments ? n(Ne(e, t, s)) : W.ok && n(Te({
							key: f
						}));
						const r = Object(K.h)(x) ? ce.a.COMMENTS_OVERLAY : ce.a.COMMENTS;
						n(Object(re.b)(r))
					}
					if (W.ok) {
						n(w.g(f));
						const t = Object(te.G)(a(), {
							postId: e
						});
						if (n(O.z(t, j.a.CommentsView)), t && "subreddit" === t.belongsTo.type && W.body.comments) {
							const e = Object(le.i)(() => n(Object(g.a)({
								commentIds: Object.keys(W.body.comments),
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: V,
								isLoggedIn: !L
							});
							await e
						}
					} else {
						let e;
						P && (n(Object(i.subredditPending)({
							key: f
						})), e = await Object(de.a)("subreddit", () => Object(m.a)(d.apiContext(), P, {})), n(Object(v.m)(e.status)), n(Object(i.handleSubredditPageApiError)(e, P))), n(je({
							error: W.error,
							key: f,
							...e ? e.body : W.body
						}))
					}
				}, Te = Object(oe.a)(Ce.g), Ne = (e, t, s) => async (o, n, r) => {
					const i = Object(ne.a)(e, t, s),
						a = n(),
						c = Object(z.J)(a),
						m = Object(z.j)(a),
						u = Object(l.a)(r.apiContext(), e, t, s, Object(F.a)(a), ue(a)),
						h = c && m && Object(p.d)(r.gqlContext(), Object(R.e)(m)) || null,
						[b, C] = await Promise.all([u, h]);
					if (o(Object(v.m)(b.status)), b.ok) {
						if (C && C.ok) {
							const {
								data: e
							} = C.body, t = {
								karma: {
									...p.a
								}
							};
							if (Object(p.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							b.body && b.body.account && Object.assign(b.body.account, t)
						}
						const t = Object(S.a)(b.body, e, a);
						o(we({
							key: i,
							postId: e,
							meta: a.meta,
							shouldCollapse: t,
							...b.body
						})), o(Te({
							key: i
						}));
						const s = n().posts.models[e],
							r = s && Object(te.T)(n(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object(ee.a)(a, {
							subredditId: r.id
						}) && o(Object(d.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && b.body.comments && await o(Object(g.a)({
							commentIds: Object.keys(b.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else o(je({
						error: b.error,
						key: i,
						...b.body
					}))
				}
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(o.a)(n.a),
				i = Object(o.a)(n.b)
		},
		"./src/reddit/components/CommentCreation/Loader.m.less": function(e, t, s) {
			e.exports = {
				spacer: "_25blA2uobENRg70NGewwpP",
				isTopLevelComment: "_1chAIcRfDnelKBQkWMIXfl",
				isCommentBoxDesign: "_2mGbbSC1nHodWNoj5NJEYY",
				editor: "_3NuRqPrgRBPdjWunXX3Q8E",
				byline: "_1KZHWcRRAqnSYcyX8FzWOK",
				avatar: "_2gYdPXSssI0f1R9BPp9qsd"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/selectors/experiments/commentBox.ts"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				u = s.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = "bottom",
				g = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				C = Object(i.b)(g),
				x = ({
					isCommentBoxDesignEnabled: e,
					isTopLevelComment: t,
					children: s
				}) => r.a.createElement("div", {
					className: Object(m.a)(u.a.spacer, {
						[u.a.isCommentBoxDesign]: e,
						[u.a.isTopLevelComment]: t
					})
				}, s),
				f = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				v = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				O = e => r.a.createElement(x, e, e.isCommentBoxDesignEnabled ? r.a.createElement(v, null) : r.a.createElement(f, null), r.a.createElement(d.a, {
					className: u.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: b
				})),
				y = C(O),
				P = Object(o.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CommentCreation/index.tsx"
					}
				}, {
					ssr: !1
				}),
				E = e => r.a.createElement(P, h({}, e, {
					fallback: r.a.createElement(y, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = E
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				LiveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				liveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				Copy: "_3xhJYY30L68x0pxk-8uTYD",
				copy: "_3xhJYY30L68x0pxk-8uTYD",
				LiveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				liveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				CTAButtons: "_3xkBSA_W2UZqPF31GQZ9K",
				ctaButtons: "_3xkBSA_W2UZqPF31GQZ9K",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/isSimpleClick/index.ts"),
				a = s("./src/lib/loginHref/index.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/trackers/authControls.ts"),
				m = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				p = s.n(m);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(d.c)(({
				className: e,
				isLiveStreaming: t,
				location: s,
				openLoginModal: o,
				openRegisterModal: d,
				origin: m,
				sendEvent: h
			}) => n.a.createElement("div", {
				className: Object(r.a)(e, p.a.Wrapper, {
					[p.a.LiveStreamingWrapper]: t
				})
			}, n.a.createElement("span", {
				className: Object(r.a)(p.a.Copy, {
					[p.a.LiveStreamingCopy]: t
				})
			}, u._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), n.a.createElement("div", {
				className: p.a.CTAButtons
			}, n.a.createElement(c.q, {
				className: p.a.LoginLink,
				kind: c.a.ExternalLink,
				priority: c.b.Secondary,
				href: Object(a.a)(s, m, "/login"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), o(), h(Object(l.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, u._("Log In", null, {
				hk: "ZR3pC"
			})), n.a.createElement(c.q, {
				className: Object(r.a)(p.a.SignupLink, {
					[p.a.LiveStreamingSignupLink]: t
				}),
				kind: c.a.ExternalLink,
				priority: c.b.Primary,
				href: Object(a.a)(s, m, "/register"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), h(Object(l.c)("user_convert")))
				},
				"data-redditstyle": !0
			}, u._("Sign Up", null, {
				hk: "48wH4o"
			})))))
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				containerRow: "_1avwNy0RnwlEwVEW-fwKCI",
				DropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				dropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				SortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				sortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				SetSort: "_1Pn7_008tGFVitpaAxNI9b",
				setSort: "_1Pn7_008tGFVitpaAxNI9b",
				SingleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				singleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				SortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				sortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				Title: "_1MfL8RlT7Bsr76qYvR-nqM",
				title: "_1MfL8RlT7Bsr76qYvR-nqM",
				Tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				ViewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				viewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				ViewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				C = s("./src/reddit/constants/headers.ts"),
				x = s("./src/reddit/models/Toast/index.ts");
			const f = (e, t) => async (s, n, {
				apiContext: r
			}) => {
				const i = await (async (e, t, s) => Object(b.a)(Object(g.a)(e, [C.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.hb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(r(), e, t),
					a = `error-block-${t}`,
					d = `success-block-${t}`;
				if (i.ok) {
					s(Object(u.R)({
						[e]: {
							suggestedSort: t
						}
					}));
					const n = t ? o.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : o.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					s(h.f({
						id: d,
						kind: x.b.SuccessCommunityGreen,
						text: n
					}))
				} else s(h.f({
					id: a,
					kind: x.b.Error,
					text: o.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: o.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: f(e, t)
				}))
			};
			var v = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				P = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/Row.tsx"),
				k = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				I = s("./src/reddit/helpers/path/index.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const S = (e, t, s, o, n) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(_.listing)(r, void 0, {
						oldSort: s,
						sort: o,
						source: n
					}),
					userSubreddit: Object(_.userSubreddit)(r)
				}),
				L = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				T = e => ({
					subreddit: Object(_.subreddit)(e),
					userSubreddit: Object(_.userSubreddit)(e)
				}),
				N = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...T
				});
			var M = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				R = s("./src/reddit/icons/svgs/Info/index.tsx"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/comments.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/tooltip.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = s.n(W),
				K = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const G = Object(P.a)(w.a),
				q = e => e === K.a.First ? o.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === K.a.Last ? o.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : o.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class z extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== K.a.None) {
							e(t === K.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", K.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", K.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", K.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentDidUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: s,
						selectedSort: n
					} = this.props;
					return r.a.createElement("div", {
						className: H.a.HighlightWrapper
					}, r.a.createElement(j.b, {
						className: Object(d.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${q(n)}`,
						id: t,
						noHover: !0,
						onClick: s
					}), r.a.createElement(M.b, {
						className: H.a.DropdownTriangle,
						onClick: s
					}), r.a.createElement(G, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(j.b, {
						displayText: q(K.a.First),
						isSelected: n === K.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(j.b, {
						displayText: q(K.a.Last),
						isSelected: n === K.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(j.b, {
						displayText: q(K.a.None),
						isSelected: n === K.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Y = z;
			const Q = "CommentSort--SortPicker",
				J = "CommentSort--HighlightPicker",
				Z = "CommentSort--Tooltip",
				X = Object(P.a)(w.a),
				$ = Object(a.c)({
					commentPermalink: (e, {
						commentId: t
					}) => t && Object(F.m)(e, {
						commentId: t
					}),
					contestModeModalIsOpen: Object(A.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(D.b)(Q),
					highlightIsOpen: Object(D.b)(J),
					hasModeratorPostPermissions: (e, {
						postId: t
					}) => {
						const s = Object(B.k)(e, {
							postId: t
						});
						return !!s && s.posts
					},
					post: V.G,
					postPermalink: V.F,
					showCommentHighlighter: (e, {
						postId: t
					}) => {
						const s = Object(U.r)(e),
							o = !!Object(B.k)(e, {
								postId: t
							}),
							n = Object(V.G)(e, {
								postId: t
							});
						return (o || s) && !!n && !!n.previousVisits && n.previousVisits.length > 0
					},
					selectedHighlightSort: F.p
				}),
				ee = Object(i.b)($, (e, {
					postId: t
				}) => ({
					changeHighlightSort: t => e(Object(m.b)({
						sort: t
					})),
					onOpenDropdown: () => e(Object(l.h)({
						tooltipId: Q
					})),
					onOpenHighlightDropdown: t => {
						e(Object(l.h)({
							tooltipId: J
						})), t()
					},
					onSetSuggestedSort: s => e(f(t, s)),
					hideTooltip: () => e(Object(l.i)()),
					setContestMode: s => e(Object(u.V)(s, t)),
					showTooltip: () => e(Object(l.h)({
						tooltipId: Z
					})),
					toggleContestModeModal: () => e(Object(p.i)("CommentSort--ContestMode--Modal"))
				}));
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, o) => this.props.sendEvent(S(e, this.props.isOverlay, t, s, o)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(L("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(N(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return o.fbt._("{sort name} (suggested)", [o.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: s,
						contestModeModalIsOpen: n,
						dropdownIsOpen: i,
						elementRef: a,
						hideTooltip: l,
						highlightIsOpen: m,
						hasModeratorPostPermissions: p,
						isOverlay: u,
						location: h,
						post: b,
						postPermalink: g,
						selectedHighlightSort: C,
						showCommentHighlighter: x,
						sort: f,
						suggestedSort: P,
						showTooltip: E,
						toggleContestModeModal: w
					} = this.props, _ = b.contestMode, S = !h.search.includes(c.s.CONFIDENCE), T = f === c.s.CONFIDENCE && S, N = p && !T, A = c.u[f], F = A ? A() : "", B = P && f === P && !T ? this.addSuggestedLabel(F) : F, V = _ ? o.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : o.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), D = _ ? o.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : o.fbt._("Start", null, {
						hk: "Mjvpj"
					}), U = _ ? o.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : o.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), W = _ && !p;
					return r.a.createElement("div", {
						className: Object(d.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !x && W
						}),
						ref: a
					}, r.a.createElement("div", {
						className: H.a.containerRow
					}, !W && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: H.a.DropdownContainer
					}, r.a.createElement(j.b, {
						className: Object(d.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Sort by",null,{hk:"E6T9r"})}: ${B}`,
						id: Q,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(M.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(X, {
						isOpen: i,
						tooltipId: Q
					}, [c.s.CONFIDENCE, c.s.TOP, c.s.NEW, c.s.CONTROVERSIAL, c.s.OLD, c.s.QA].map(e => {
						const t = s || g,
							o = Object(I.b)(t),
							n = c.u[e],
							i = n ? n() : "";
						return r.a.createElement(y.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: u,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${o}?sort=${e}`
						}, r.a.createElement(j.b, {
							displayText: i,
							isSelected: f === e,
							skipRoleAttr: !0
						}))
					}))), N && !W && (P ? r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: f !== P ? this.setSortOnClick : this.clearSortOnClick
					}, f !== P ? o.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : o.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: H.a.SetSort
					}, r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: this.setSortOnClick
					}, o.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: Z,
						onMouseEnter: E,
						onMouseLeave: l
					}, r.a.createElement(O.c, {
						className: H.a.Tooltip,
						text: o.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: Z
					}), r.a.createElement(R.a, {
						className: H.a.Info
					})))), p && r.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, o.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(k.a, {
						className: H.a.ToggleSwitch,
						on: _
					}))), x && r.a.createElement("div", {
						className: H.a.containerRow
					}, r.a.createElement(Y, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: J,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: C,
						trackHighlight: L
					})), n && r.a.createElement(v.a, {
						actionText: D,
						headerText: V,
						modalText: U,
						onConfirm: this.setContestMode,
						toggleModal: w,
						withOverlay: !0
					}))
				}
			}
			t.a = ee(Object(E.c)(te))
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, s) {
			e.exports = {
				expandButton: "_2Gzh48SaLz7dQBCULfOC6V",
				expandIcon: "_1tnrhhM9S7dYjApTfvd14l"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				depth6: "SwOx7KbRrXYrqQCWMYPf0",
				isModModeEnabled: "_2hXOR2fIcfnUg0p-Env7KQ",
				LoggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				loggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				HideIfVWSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				hideIfVwSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				HideIfVWLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				hideIfVwLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				isFollowCommentEnabled: "_3rHRwVOKmBBlBOQ4kIW_vq",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				modActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				ViewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				viewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				IgnoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				ignoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				Report: "tfULaYlP83dV84XOxX3YE",
				report: "tfULaYlP83dV84XOxX3YE",
				OverflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				overflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				DropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				dropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				Flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				CommentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				commentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				Button: "_374Hkkigy4E4srsI2WktEd",
				button: "_374Hkkigy4E4srsI2WktEd",
				ModToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				modToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				dropdownRowText: "_3my60CXALAaQkY4P4xVmad",
				overflowMenu: "_1VR6DV38j4rMT5OMeU4gJZ"
			}
		},
		"./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				glowHighlightContainer: "_3VH2iGVh92XtlKq0-eVoEN"
			}
		},
		"./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				gradientHighlightContainer: "TmlaIdEplCzZ0F1aRGYQh"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less": function(e, t, s) {
			e.exports = {
				effectContainer: "_15G4fCS1bzGgGK9kBOtN2t",
				bubbleEffectContainer: "_3rhkMikNPUTfnVDvk-6EFo",
				lottieEffectContainer: "_28x1bnTjOY6zWZfooCxkKQ"
			}
		},
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				userIconContainerStyles: "_3W217SmtnKG5RvNrTd7YW0",
				CommentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				commentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				redesign: "HZ-cv9q391bm8s7qT54B3",
				voteButton: "_2m5vzALl8kQdr9kwIFUo5t",
				upDownVote: "_22nWXKAY6OzAfK5GcUqWV2",
				score: "_3ChHiOyYyUkpZ_Nm3ZyM2M",
				ActionBar: "_3KgrO85L1p9wQbgwG27q4y",
				actionBar: "_3KgrO85L1p9wQbgwG27q4y",
				HorizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				horizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				FlatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				flatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				ExpandButton: "_1nGapmdexvR0BuOkfAi6wa",
				expandButton: "_1nGapmdexvR0BuOkfAi6wa",
				hidden: "_1zN1-lYh2LfbYOMAho_O8g",
				visible: "O_Ica0k2O4KFcZyNfsJDU",
				ErrorText: "_3XArRVBsKuWegVHX9CQjH-",
				errorText: "_3XArRVBsKuWegVHX9CQjH-",
				CommentBody: "_3cjCphgls6DH-irkVaA0GM",
				commentBody: "_3cjCphgls6DH-irkVaA0GM",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				AuthorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				authorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				UserIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				userIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				UserIcon: "_13ScjOmi6dGdJw0JAonQEr",
				userIcon: "_13ScjOmi6dGdJw0JAonQEr",
				UserIconNft: "_20ZyBb8T475h1qmXRBEL6-",
				userIconNft: "_20ZyBb8T475h1qmXRBEL6-",
				topSupporterIcon: "PjnQ0fgBT0oSZ9nR8HeaJ",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				noFlair: "_3LqBzV8aCO9tge99jHiUGy",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentPerfMarkVisibility: "_2CkgPEY8ljDZH3np9UY1ws"
			}
		},
		"./src/reddit/components/Comments/CommentListNode/index.m.less": function(e, t, s) {
			e.exports = {
				CommentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				commentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				isHidden: "_2csJ1c6CZ_3VQ75SVdUAwt",
				glowBorderTopPadding: "_2PHrzfGnoV59y2Imtb1Y5I",
				glowBorderBottomPadding: "_3kYyDFXW4SA2vk-vehWhXw"
			}
		},
		"./src/reddit/components/Comments/ContinueThreadLink/index.m.less": function(e, t, s) {
			e.exports = {
				ArrowRight: "egHA5MD_goQfvgLP3zgST",
				arrowRight: "egHA5MD_goQfvgLP3zgST",
				HoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				hoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				Wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				isActive: "btJMgy_2EOVvOVP-DikGZ",
				LinkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn",
				linkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn"
			}
		},
		"./src/reddit/components/Comments/MoreCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				MoreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				moreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				MoreComments: "_2HYsucNpMdUpYlGBMviq8M",
				moreComments: "_2HYsucNpMdUpYlGBMviq8M",
				MoreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				moreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				isActive: "l7--vTMsoEqrU8pjG52TF"
			}
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Comments-PredictionComment").then(s.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Comments/PredictionComment/index.tsx"
				}
			})
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				Avatar: "_3ES-TCR45dPoj_NuOATuNi",
				avatar: "_3ES-TCR45dPoj_NuOATuNi",
				VoteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				voteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				TextColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				textColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				StateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				stateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				CommentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				commentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				SnooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				snooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				EmptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				emptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				ErrorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				errorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				EmptyText: "_2x3Avx0lbWMcic-5bE_guO",
				emptyText: "_2x3Avx0lbWMcic-5bE_guO",
				ErrorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				errorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return I
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "f", (function() {
				return N
			})), s.d(t, "a", (function() {
				return H
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/pages/comments.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				C = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				x = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				f = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				v = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				O = s("./src/reddit/components/Comments/States/index.m.less"),
				y = s.n(O);
			const P = l.a.wrapped(f.a, "CommentsIcon", y.a),
				E = l.a.wrapped(v.a, "SnooFacepalm", y.a),
				w = l.a.p("EmptyTitle", y.a),
				j = l.a.p("ErrorTitle", y.a),
				k = l.a.p("EmptyText", y.a),
				I = ({
					className: e,
					isChat: t
				}) => a.a.createElement("div", {
					className: Object(c.a)(y.a.StateContainer, e)
				}, a.a.createElement(P, null), a.a.createElement(w, null, t ? o.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : o.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), a.a.createElement(k, null, o.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				_ = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(P, null), a.a.createElement(w, null, o.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(k, null, o.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = ({
					link: e
				}) => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(P, null), a.a.createElement(w, null, o.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), a.a.createElement(u.k, {
					to: Object(b.b)(e)
				}, o.fbt._("View all comments", null, {
					hk: "2CgaIx"
				}))),
				L = Object(d.b)(null, (e, {
					postId: t,
					commentId: s,
					sort: o
				}) => ({
					onClick: () => e(Object(m.commentsPageDataRequested)(t, s, {
						sort: o
					}, o))
				}))(({
					apiError: e,
					onClick: t
				}) => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(E, null), a.a.createElement(j, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : o.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), a.a.createElement(u.i, {
					onClick: t
				}, o.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				T = ({
					postId: e,
					commentId: t,
					sort: s,
					apiError: o
				}) => a.a.createElement("div", {
					className: Object(c.a)(y.a.StateContainer, y.a.ErrorFullPage)
				}, a.a.createElement(L, {
					postId: e,
					commentId: t,
					sort: s,
					apiError: o
				})),
				N = l.a.wrapped(({
					className: e
				}) => a.a.createElement("div", {
					className: e
				}, a.a.createElement(p.a, null)), "LoadingFullPage", y.a),
				M = l.a.div("CommentsPlaceholderContainer", y.a),
				R = l.a.div("CommentPlaceholder", y.a),
				A = l.a.div("Avatar", y.a),
				F = l.a.div("VoteColumn", y.a),
				B = l.a.div("TextColumn", y.a),
				V = l.a.wrapped(x.a, "Upvote", y.a),
				D = l.a.wrapped(C.a, "Downvote", y.a),
				U = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				W = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				H = e => a.a.createElement(M, null, r()(10, t => a.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(A, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(F, null, a.a.createElement(V, null), a.a.createElement(D, null)), a.a.createElement(B, null, a.a.createElement(U, null), a.a.createElement(W, null)))))
		},
		"./src/reddit/components/Comments/ThreadLines/index.m.less": function(e, t, s) {
			e.exports = {
				Line: "_36AIN2ppxy_z-XSDxTvYj5",
				line: "_36AIN2ppxy_z-XSDxTvYj5",
				LineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				lineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				ShortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				shortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				hasGlowBorder: "_9UoUJEplv3y2cpdVestPb"
			}
		},
		"./src/reddit/components/Comments/helpers/hiddenComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			}));
			let o = {};

			function n(e) {
				return e in o
			}

			function r(e) {
				o[e] = !0
			}

			function i() {
				o = {}
			}
		},
		"./src/reddit/components/Comments/index.m.less": function(e, t, s) {
			e.exports = {
				Scroller: "_1YCqQVO-9r-Up6QPB9H6_4",
				scroller: "_1YCqQVO-9r-Up6QPB9H6_4"
			}
		},
		"./src/reddit/components/Comments/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o, n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/comment/index.ts"),
				h = s("./src/reddit/constants/comments.ts"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/constants/elementClassNames.ts"),
				C = s("./src/reddit/constants/gold.ts"),
				x = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				f = s("./src/reddit/components/LottieAnimation/index.tsx"),
				v = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				O = s.n(v);
			! function(e) {
				e.Lottie = "lottie"
			}(o || (o = {}));
			const y = {
				threshold: [.75, .001]
			};
			var P = a.a.memo(e => {
				const t = Object(i.useRef)(null),
					[s, n] = Object(i.useState)(!1),
					r = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && n(!1), t <= .001 && n(!0)
						})
					}, []);
				Object(x.a)(t, r, y);
				const d = e.type;
				return a.a.createElement("div", {
					className: Object(l.a)(O.a.effectContainer, O.a[d + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, d === o.Lottie && a.a.createElement(f.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			});
			const E = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: w,
							effectHighlight: {
								type: o.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				w = "ff0000";

			function j(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						o = Math.floor(Math.random() * s.length);
					return s[o] || null
				}(e ? function(e) {
					return e.map(I).filter(e => e !== k)
				}(e) : [])
			}
			const k = {
				glowHexColor: null,
				effectHighlight: null
			};

			function I(e) {
				for (const t of E) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return k
			}
			var _ = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				S = s("./src/reddit/selectors/comments.ts"),
				L = s("./src/reddit/selectors/commentSelector.ts"),
				T = s("./src/reddit/selectors/communityAwards.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				M = s("./src/reddit/selectors/posts.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				A = s("./node_modules/fbt/lib/FbtPublic.js"),
				F = s("./src/reddit/hooks/useTracking.ts"),
				B = s("./src/reddit/models/PostDraft/index.ts"),
				V = s("./src/lib/makeDraftKey/index.ts"),
				D = s("./src/lib/objectSelector/index.ts"),
				U = s("./src/reddit/helpers/trackers/powerups.ts"),
				W = s("./src/reddit/actions/comment/authoring.ts"),
				H = s("./src/reddit/actions/comment/moderation.ts"),
				K = s("./src/reddit/actions/gold/powerups.ts"),
				G = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				q = s("./src/reddit/icons/fonts/helpers.tsx");
			var z = e => a.a.createElement("i", {
					className: Object(l.a)(Object(q.b)("expand", e.isFilled), e.className)
				}),
				Y = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				Q = s.n(Y);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var Z, X, $ = s("./node_modules/lodash/defer.js"),
				ee = s.n($),
				te = s("./src/reddit/actions/tooltip.ts"),
				se = s("./src/reddit/selectors/tooltip.ts"),
				oe = s("./src/lib/makeCommentPermalink/index.ts"),
				ne = s("./src/reddit/actions/gold/modals.ts"),
				re = s("./src/reddit/actions/modal.ts"),
				ie = s("./src/reddit/actions/reportFlow/index.ts"),
				ae = s("./src/reddit/helpers/correlationIdTracker.ts"),
				de = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ce = s("./src/reddit/helpers/trackers/lightbox.ts"),
				le = s("./src/reddit/models/Comment/index.ts"),
				me = s("./src/reddit/selectors/activeModalId.ts"),
				pe = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				ue = s("./src/reddit/selectors/subreddit.ts"),
				he = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				be = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				ge = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				Ce = s.n(ge);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(Z || (Z = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(X || (X = {}));
			const xe = (e, t) => {
					const s = Ce.a[t],
						o = Ce.a[e];
					return Object(l.a)(s, o)
				},
				fe = e => Object(l.a)(Ce.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[Ce.a.isInOverlay]: e.isInOverlay,
					[Ce.a.isModModeEnabled]: e.isModModeEnabled,
					[Ce.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var ve = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				Oe = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				ye = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Pe = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				Ee = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				we = s("./src/reddit/components/ModModeReports/helpers.ts"),
				je = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ke = s("./src/reddit/components/ReportFlow/index.tsx"),
				Ie = s("./src/reddit/components/ReportFlow/new.tsx"),
				_e = s("./src/reddit/components/ShareMenu/index.tsx"),
				Se = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Le = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				Te = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Ne = s("./src/reddit/helpers/trackers/modTools.ts"),
				Me = s("./src/reddit/layout/row/Inline/index.tsx"),
				Re = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				Ae = s.n(Re),
				Fe = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				Be = s("./src/reddit/selectors/gold/awardIcon.ts");
			var Ve = e => {
					const t = Object(d.e)(pe.b),
						s = Object(d.e)(e => t && Object(Be.a)(e, {
							award: t,
							minSize: 32
						}));
					return s ? a.a.createElement("img", {
						className: Object(l.a)(Ae.a.img, e.className),
						id: e.id,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						src: s
					}) : a.a.createElement(Fe.a, e)
				},
				De = s("./src/reddit/icons/fonts/index.tsx"),
				Ue = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				We = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				He = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Ke = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Ge = s("./src/reddit/icons/fonts/Report/index.tsx"),
				qe = s("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				ze = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Ye = s.n(ze);
			const Qe = p.a.wrapped(Ue.a, "CommentIcon", Ye.a),
				Je = p.a.wrapped(Ge.a, "Report", Ye.a),
				Ze = p.a.wrapped(He.a, "IgnoreReport", Ye.a),
				Xe = p.a.wrapped(Ee.a, "ModActionsMenu", Ye.a),
				$e = p.a.div("OverflowMenuSpacer", Ye.a),
				et = p.a.wrapped(je.a, "DropdownRow", Ye.a),
				tt = p.a.wrapped(Me.a, "Flatlist", Ye.a),
				st = p.a.button("Button", Ye.a),
				ot = p.a.wrapped(ve.a, "ModToolsFlatlist", Ye.a),
				nt = p.a.wrapped(Le.a, "ViewReportsDropdown", Ye.a),
				rt = e => `Comment-${e}--Modal--DeleteComment`,
				it = e => `Distinguish--Dropdown--${e}`,
				at = e => `${e}-overflow-menu`,
				dt = e => `View--Reports--${e}`,
				ct = Object(c.c)({
					claimedFreeAward: pe.b,
					currentUser: R.j,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(me.a)(e) === rt(t.id),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(se.b)(it(t.id))(e),
					isCommentFollowEnabled: qe.a,
					isFollowed: (e, {
						comment: t
					}) => Object(S.z)(e, {
						commentId: t.id
					}),
					isFollowedCommentExpired: (e, {
						comment: t
					}) => Object(S.B)(e, {
						commentId: t.id
					}),
					isPendingDeletion: (e, {
						comment: t
					}) => Object(S.C)(e, {
						commentId: t.id
					}),
					isReportsDropdownOpen: (e, {
						comment: t
					}) => Object(se.b)(dt(t.id))(e),
					isLoggedIn: R.J,
					postIsArchived: (e, {
						comment: t
					}) => Object(M.A)(e, {
						postId: t.postId
					}),
					postIsLocked: (e, {
						comment: t
					}) => Object(M.B)(e, {
						postId: t.postId
					}),
					postPermalink: (e, {
						comment: t
					}) => Object(M.F)(e, {
						postId: t.postId
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, o;
						return (null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === t.id
					},
					sendRepliesToggled: (e, {
						comment: t
					}) => Object(S.I)(e, {
						commentId: t.id
					}),
					subredditAboutInfo: (e, {
						subreddit: t
					}) => t ? Object(ue.v)(e, {
						subredditName: t.name
					}) : void 0,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(M.T)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: he.a
				});
			class lt extends a.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(ce.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Ne.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Ne.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Ne.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(ae.d)(ae.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(o(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Ne.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Ne.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Ne.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: o
						} = this.props;
						e(o ? le.a.UNFOLLOWED : le.a.FOLLOWED), t(o ? Object(Ne.f)("follow", s.id) : Object(Ne.a)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Ne.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? a.a.createElement(Ie.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ke.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : a.a.createElement(ke.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ke.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				componentDidMount() {
					this.props.isFollowedCommentExpired && this.props.onFollowedCommentExpire()
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						deleteComment: o,
						depth: n,
						handleReply: r,
						isAvatarsInCommentsEnabled: d,
						isCommentFollowEnabled: c,
						isFollowed: m,
						isLoggedIn: p,
						isPendingDeletion: u,
						onDistinguishComment: h,
						onIgnoreReports: b,
						onToggleReportsDropdown: g,
						moderatorPermissions: C,
						modModeEnabled: x,
						postIsArchived: f,
						postIsLocked: v,
						postPermalink: O,
						renderedInOverlay: y,
						sendEvent: P,
						subreddit: E,
						subredditAboutInfo: w,
						toggleDeleteCommentModal: j,
						toggleSendReplies: k,
						trackCommentClick: I
					} = this.props, _ = Object(de.a)(C), S = !!s && s.displayText === e.author, L = !!s && s.isEmployee, T = !(w && w.userIsBanned) && (v || f || _ && p || e.isLocked ? _ && p : p || d), N = Object(we.a)(e), M = _ && S && !e.bannedBy, R = S && L && !e.bannedBy, F = M || R, B = s && e.isGildable, V = c && !f, D = [];
					T && D.push(a.a.createElement(st, {
						disabled: u,
						key: "reply",
						onClick: () => {
							r(), ee()(() => I("reply", e.id)())
						}
					}, a.a.createElement(Qe, null), A.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), B && D.push({
						breakpointGroup: X.LoggedInUser,
						icon: a.a.createElement(Ve, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => A.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), D.push(a.a.createElement(_e.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: Object(oe.a)(O, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == E ? void 0 : E.type
					}, a.a.createElement(st, {
						onClick: () => this.sendCommentEventWithName("share")
					}, A.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), S || D.push({
						breakpointGroup: X.LoggedInUser,
						icon: a.a.createElement(Ge.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => A.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), D.push({
						breakpointGroup: X.LoggedInUser,
						icon: a.a.createElement(De.a, {
							name: e.isSaved ? "saved" : "save"
						}),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => A.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => A.fbt._("Save", null, {
							hk: "4yMsMq"
						})
					}), S && D.push({
						breakpointGroup: X.LoggedInUser,
						icon: a.a.createElement(De.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => A.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), V && D.push({
						breakpointGroup: X.LoggedInUser,
						icon: a.a.createElement(De.a, {
							name: "notification",
							isFilled: m
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: m ? () => A.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => A.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const U = D.map(e => a.a.isValidElement(e) ? e : a.a.createElement(st, {
							className: xe(e.breakpointGroup, Z.HideIfVWSmaller),
							disabled: u,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						W = D.map(e => a.a.isValidElement(e) ? null : a.a.createElement(et, {
							className: xe(e.breakpointGroup, Z.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: Ye.a.dropdownRowText
						}, e.icon));
					return a.a.createElement(i.Fragment, null, a.a.createElement(tt, {
						className: Object(l.a)(fe({
							depth: n,
							isInOverlay: y,
							isModModeEnabled: _ && x,
							isFollowCommentEnabled: V
						}), t)
					}, U, a.a.createElement($e, {
						className: S ? void 0 : xe(X.LoggedInUser, Z.HideIfVWLarger)
					}, a.a.createElement(je.b, {
						className: Ye.a.overflowMenu,
						disabled: u,
						dropdownId: at(e.id),
						onClick: () => P(Object(Ne.a)("comment_overflow_menu", e.id))
					}, W, S && a.a.createElement(a.a.Fragment, null, a.a.createElement(et, {
						displayText: A.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: Ye.a.dropdownRowText
					}, a.a.createElement(De.a, {
						name: "delete"
					})), a.a.createElement(Te.a, {
						text: A.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: k,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && a.a.createElement(ye.a, {
						actionText: A.fbt._("Delete", null, {
							hk: "1bl9Tc"
						}),
						cancelActionText: A.fbt._("Keep", null, {
							hk: "3hCBEF"
						}),
						headerText: A.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: A.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: o,
						toggleModal: j,
						trackClick: () => {},
						withOverlay: !0
					}), _ && a.a.createElement(a.a.Fragment, null, x && a.a.createElement(ot, {
						className: xe(X.Moderator, Z.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: S
					}), a.a.createElement(Xe, {
						className: x ? xe(X.Moderator, Z.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => P(Object(Ne.a)("comment_mod_action_menu", e.id))
					}, a.a.createElement(Ke.a, null), a.a.createElement(be.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(we.c)(e) && !x && a.a.createElement(Oe.a, {
						text: `${N}`,
						onClick: () => {
							g(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: dt(e.id)
					}, a.a.createElement(nt, {
						model: e,
						onIgnoreReports: () => {
							b(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: dt(e.id)
					}), e.ignoreReports ? a.a.createElement(Ze, null) : a.a.createElement(Je, null)), F && a.a.createElement(Oe.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, a.a.createElement(We.a, null), a.a.createElement(Pe.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: L,
						isUserMod: _,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: it(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var mt = Object(d.b)(ct, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					deleteComment: () => s && e(Object(W.h)(t.id, t.postId)),
					handleDelete: () => {
						e(Object(re.i)(rt(t.id))), e(Object(te.h)({
							tooltipId: at(t.id)
						}))
					},
					handleEdit: () => {
						const o = t.media && t.media.rteMode;
						s && e(Object(W.d)({
							commentId: t.id,
							draftKey: Object(V.a)(B.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: o,
							commentsPageKey: s
						}))
					},
					handleReply: () => s && e(Object(W.p)({
						parentCommentId: t.id,
						commentsPageKey: s
					})),
					onCommentFollow: s => e(Object(W.r)(t.id, s)),
					onDistinguishComment: (s, o) => e(Object(H.b)(t.id, s, o)),
					onFollowedCommentExpire: () => e(Object(u.n)({
						id: t.id,
						expiresAt: 0
					})),
					onGildClick: (s, o) => e(Object(ne.d)({
						awardId: o,
						correlationId: s,
						thingId: t.id
					})),
					onIgnoreReports: () => e(Object(H.g)(t.id)),
					onReportClick: () => e(Object(ie.c)(t.id)),
					onToggleSave: () => e(Object(u.m)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(te.h)({
						tooltipId: it(t.id)
					})),
					onToggleReportsDropdown: () => e(Object(te.h)({
						tooltipId: dt(t.id)
					})),
					toggleDeleteCommentModal: () => e(Object(re.i)(rt(t.id))),
					toggleSendReplies: () => e(Object(W.k)(t.id))
				}))(Object(Se.c)(lt)),
				pt = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				ut = s.n(pt);
			var ht = a.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return a.a.createElement("div", {
						className: ut.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				bt = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				gt = s.n(bt);
			var Ct = a.a.memo(e => a.a.createElement("div", {
					className: gt.a.gradientHighlightContainer,
					role: "presentation"
				})),
				xt = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				ft = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				vt = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Ot = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				yt = s("./src/reddit/components/ModModeReports/index.tsx"),
				Pt = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Et = s("./src/reddit/components/RichTextJson/index.tsx"),
				wt = s("./src/reddit/components/UserIcon/index.tsx"),
				jt = s("./src/reddit/components/UserIcon/constants.ts"),
				kt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				It = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				_t = s("./src/reddit/constants/componentTestIds.ts"),
				St = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Lt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Tt = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				Nt = s("./node_modules/raf/index.js"),
				Mt = s.n(Nt);

			function Rt() {
				return (Rt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const At = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				Ft = a.a.createContext(!1);
			class Bt extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || Mt()(this.setVisible)
					}, this.handleIntersectionChange = e => {
						const t = e.isIntersecting;
						!this.fastIsVisible && t && (this.scheduleVisibilityChange(), this.fastIsVisible = !0)
					}
				}
				render() {
					const {
						children: e,
						...t
					} = this.props, {
						isVisible: s
					} = this.state, o = {
						...At,
						...t
					};
					return a.a.createElement(Tt.a, Rt({}, o, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(Ft.Provider, {
						value: s
					}, e)))
				}
			}
			var Vt = s("./src/reddit/controls/ErrorText/index.tsx"),
				Dt = s("./src/reddit/controls/InternalLink/index.tsx"),
				Ut = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Wt = s("./src/reddit/helpers/flair.ts"),
				Ht = s("./src/reddit/models/Subreddit/index.ts"),
				Kt = s("./src/reddit/models/User/index.ts"),
				Gt = s("./src/reddit/models/Vote/index.ts"),
				qt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				zt = s("./src/reddit/selectors/experiments/econ/index.ts"),
				Yt = s("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				Qt = s("./src/reddit/selectors/gold/powerups/index.ts"),
				Jt = s("./src/reddit/selectors/poll/index.ts"),
				Zt = s("./src/reddit/selectors/userPrefs.ts"),
				Xt = s("./src/reddit/selectors/moderatingComments.ts"),
				$t = s("./src/reddit/components/Comments/Comment/index.m.less"),
				es = s.n($t),
				ts = s("./src/config.ts"),
				ss = s("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				os = s("./src/reddit/helpers/userSnoovatar/index.ts");

			function ns() {
				return (ns = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const rs = p.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return a.a.createElement("button", J({}, s, {
						className: Object(l.a)(t, Q.a.expandButton)
					}), a.a.createElement(z, {
						className: Q.a.expandIcon
					}))
				}), "ExpandButton", es.a),
				is = p.a.wrapped(mt, "FlatList", es.a),
				as = p.a.wrapped(Vt.b, "ErrorText", es.a),
				ds = p.a.wrapped(vt.a, "HorizontalVotes", es.a),
				cs = p.a.div("ActionBar", es.a),
				ls = p.a.wrapped(xt.a, "TopMeta", es.a),
				ms = p.a.div("CommentContentWrapper", es.a),
				ps = p.a.div("CommentWrapper", es.a),
				us = p.a.div("CommentBody", es.a),
				hs = p.a.wrapped(Ot.b, "AuthorHovercard", es.a),
				bs = Object(St.t)(),
				gs = Object(d.b)(() => Object(c.c)({
					comment: (e, t) => Object(L.a)(e, t),
					currentProfileModPermissions: St.g,
					depth: (e, t) => Object(S.j)(e, t),
					collapsed: Xt.b,
					collapsedBecauseCrowdControl: Xt.a,
					currentUser: R.j,
					flair: S.e,
					focused: S.t,
					highlightAnimationDisabled: Zt.c,
					isAuthorPresent: S.y,
					isEditing: S.A,
					isLoggedIn: R.J,
					isPendingDeletion: S.C,
					isPresenceConsumptionExpEnabled: Yt.a,
					isPresenceTogglePref: R.hb,
					moderatorPermissions: (e, t) => {
						const s = Object(L.a)(e, t);
						return s ? Object(N.l)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: Jt.f,
					shouldShowTopSupporterIcon: (e, t) => {
						const s = Object(L.a)(e, t);
						if (!s) return !1;
						const o = Object(St.q)(e, t);
						return !!o && Object(Qt.a)(e, {
							subredditId: o.id,
							userId: s.authorId
						}) && !Object(zt.g)(e)
					},
					modModeEnabled: St.R,
					errorMsgs: S.G,
					replyFormOpen: S.J,
					subreddit: St.q,
					subredditType: S.L,
					allowNFTs: ss.a
				}), (e, {
					commentId: t,
					commentsPageKey: s,
					scrollToAndRemeasure: o,
					trackCommentClick: n
				}) => ({
					onCollapseClick: () => e(Object(u.o)({
						commentId: t,
						commentsPageKey: s,
						scrollToAndRemeasure: o
					})),
					onIgnoreReports: () => e(Object(H.g)(t)),
					onOpenPowerupsModal: () => e(Object(K.f)("comment_top_supporter_badge")),
					onVoteClick: s => {
						const [o, r] = s === Gt.a.upvoted ? [Object(u.q)(t), "upvote_comment"] : [Object(u.j)(t), "downvote_comment"];
						n(r, t)(), e(o)
					}
				})),
				Cs = Object(D.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				xs = e => a.a.createElement("div", e, e.children),
				fs = e => a.a.createElement(a.a.Fragment, null, e.children),
				vs = bs(gs(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						comment: o,
						commentsPageKey: n,
						collapsed: r,
						collapsedBecauseCrowdControl: d,
						currentProfileModPermissions: c,
						currentUser: m,
						depth: p,
						errorMsgs: u,
						flair: h,
						focused: b,
						hasAwardGradient: g,
						highlightAnimationDisabled: C,
						highlightTreatment: x,
						isActive: f,
						isAuthorPresent: v,
						isAvatarsInCommentsEnabled: O,
						isEditing: y,
						isFirstInList: E,
						isHighlighted: w,
						isLoggedIn: j,
						isPendingDeletion: k,
						isPresenceConsumptionExpEnabled: I,
						isPresenceTogglePref: _,
						shouldShowTopSupporterIcon: S,
						moderatorPermissions: L,
						modModeEnabled: T,
						onCollapseClick: N,
						onIgnoreReports: M,
						onLineMouseOver: R,
						onVoteClick: D,
						onOpenPowerupsModal: H,
						prediction: K,
						replyFormOpen: q,
						subreddit: z,
						trackCommentClick: Y,
						renderedInOverlay: Q,
						subredditType: J,
						onPresenceIndicatorInViewport: Z,
						allowNFTs: X
					} = e, $ = Object(F.a)(), ee = o.isDeleted, te = !y && !ee && !!u && u.length > 0, se = Object(V.a)(B.c.edit, o.id), oe = Object(V.a)(B.c.replyToComment, o.id), ne = Object(de.a)(L), re = o.authorIsContractor && J === Ht.f.EmployeesOnly, ie = o.isLocked, ae = ne && T, ce = !y && !ee && (j || O), me = !!m && Object(Kt.e)(m) === o.author, [pe, ue] = Object(i.useState)(null), [he, be] = Object(i.useState)(null), ge = Object(le.f)(o) || Object(le.g)(o) ? xs : Dt.a, Ce = Object(le.f)(o) ? fs : hs;
					Object(i.useEffect)(() => {
						if (!y && !ee && (g && ue(a.a.createElement(Ct, null)), null !== x)) {
							if (x.glowHexColor) {
								const e = x.glowHexColor;
								ue(a.a.createElement(ht, {
									hexColor: e
								}))
							}
							if (x.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = x.effectHighlight;
								be(a.a.createElement(P, {
									prefersReducedAnimation: C,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [y, ee, g, C, x]);
					const xe = Object(i.useContext)(Ft),
						fe = I && !ee && !Object(le.f)(o) && (me && _ || !me && v),
						ve = Object(i.useCallback)(() => {
							fe && !me && Z && Z(o.id)
						}, [o.id, Z, fe, me]),
						Oe = Object(kt.a)(o),
						ye = !!X && Object(os.b)(o.profileImage);
					return a.a.createElement(ps, {
						className: Object(l.a)(`Comment ${o.id}`, es.a.CommentWrapper, {
							[es.a.highlightComment]: w,
							[es.a.deleted]: ee,
							[es.a.focused]: b,
							[es.a.redesign]: O,
							[es.a.topLevel]: !p
						})
					}, pe, he, !y && !ee && E && a.a.createElement("div", {
						className: es.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt="" src="${ts.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstCommentVisible || function(){})();" />\n              `
						}
					}), a.a.createElement(rs, {
						className: Object(l.a)(o.id, {
							[es.a.hidden]: !r,
							[es.a.visible]: r
						}),
						onClick: () => {
							s(), N(), Y("collapse", o.id)()
						},
						onMouseOver: () => R(o.id),
						onMouseOut: s
					}), a.a.createElement(Ce, {
						alwaysShowChildren: !0,
						hoverDivClassName: es.a.AuthorHoverDiv,
						postOrComment: o,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: Q ? Pt.c.Lightbox : void 0,
						collapsed: r,
						isCommentAuthorBlocked: Object(le.g)(o)
					}, a.a.createElement(ge, {
						className: es.a.UserIconContainer,
						to: `/user/${o.author}/`
					}, xe ? a.a.createElement(wt.a, {
						isNft: ye,
						className: Object(l.a)(es.a.UserIcon, ye ? es.a.UserIconNft : void 0),
						iconUrl: o.profileImage,
						isNSFW: o.profileOver18 || !1,
						nsfwIconUrl: jt.a,
						userName: o.author,
						isHighlighted: w,
						shouldShowPresenceIndicator: fe,
						onPresenceIndicatorInViewport: ve,
						isCommentAuthorBlocked: Object(le.g)(o),
						collapsed: r
					}) : a.a.createElement("div", {
						className: es.a.UserIcon
					}), S && a.a.createElement(It.a, {
						onClick: e => {
							$(Object(U.s)("comment")), H(), e.stopPropagation(), e.preventDefault()
						},
						className: es.a.topSupporterIcon,
						title: A.fbt._("Powerups Top Supporter", null, {
							hk: "1GLWsz"
						})
					}))), a.a.createElement(ms, {
						className: Object(l.a)({
							[es.a.isActive]: f,
							[es.a.isCollapsed]: r,
							[es.a.isLocked]: ie && ae,
							[es.a.isPendingDeletion]: k,
							[es.a.isRemoved]: !!o.bannedBy && ae
						})
					}, a.a.createElement(Ut.a, null, A.fbt._("level {depth}", [A.fbt._param("depth", p + 1)], {
						hk: "2XnyAV"
					})), a.a.createElement(ls, {
						userHasNft: ye,
						childrenInfo: t,
						className: Object(l.a)({
							[es.a.collapsed]: r,
							[es.a.noFlair]: Object(Wt.o)(h || null)
						}),
						collapsed: r,
						collapsedBecauseCrowdControl: d,
						comment: o,
						commentsPageKey: n,
						flair: h,
						isPostComment: !0,
						renderedInOverlay: Q,
						renderContractorBadge: re
					}), !r && a.a.createElement(i.Fragment, null, y && a.a.createElement(G.a, {
						className: Object(l.a)(es.a.EditCommentForm, es.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: n,
						depth: p,
						draftType: B.c.edit,
						draftKey: se,
						rtJson: Object(kt.a)(o),
						mediaMetadata: o.media && o.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: o.id,
						submitAction: e => Object(W.i)({
							id: o.id,
							commentsPageKey: n,
							depth: p,
							draftKey: se,
							formData: e
						}),
						submitButtonText: A.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !y && !ee && a.a.createElement(us, {
						"data-test-id": _t.d
					}, K ? a.a.createElement(ft.a, {
						comment: o,
						prediction: K
					}) : a.a.createElement(Et.a, {
						content: Oe,
						mediaMetadata: o.media && o.media.mediaMetadata,
						rtJsonElementProps: Cs(e)
					}), a.a.createElement(qt.b, {
						content: Oe
					})), T && ne && Object(we.c)(o) && a.a.createElement(yt.a, {
						onIgnoreReports: M,
						reportable: o
					}), ce && a.a.createElement(cs, null, O && a.a.createElement(ds, {
						downvoteButtonClassName: es.a.voteButton,
						downvoteClassName: es.a.upDownVote,
						model: o,
						onVoteClick: D,
						scoreClassName: es.a.score,
						upvoteButtonClassName: es.a.voteButton,
						upvoteClassName: es.a.upDownVote
					}), a.a.createElement(is, {
						comment: o,
						commentsPageKey: n,
						depth: p,
						isAvatarsInCommentsEnabled: O,
						collapsedBecauseCrowdControl: d,
						modModeEnabled: T,
						moderatorPermissions: c || L,
						renderedInOverlay: Q,
						isCommentFocused: b,
						subreddit: z,
						trackCommentClick: Y
					})), te && u.map(e => a.a.createElement(as, {
						key: e
					}, e)), q && a.a.createElement(G.a, {
						className: Object(l.a)(es.a.EditCommentForm, es.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: n,
						depth: p,
						draftType: B.c.replyToComment,
						draftKey: oe,
						isTopLevelComment: !1,
						parentCommentId: o.id,
						submitAction: ({
							validate: e,
							...t
						}, s) => e ? Object(W.s)({
							commentsPageKey: n,
							draftKey: oe,
							parentCommentDepth: p,
							parentCommentId: o.id,
							formData: t,
							editorMode: s
						}) : Object(W.l)({
							commentsPageKey: n,
							draftKey: oe,
							parentCommentDepth: p,
							parentCommentId: o.id,
							formData: t,
							editorMode: s
						}),
						submitButtonText: A.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			var Os = e => a.a.createElement(Lt.a.Consumer, null, t => a.a.createElement(vs, ns({}, e, {
					trackCommentClick: t
				}))),
				ys = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				Ps = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Es = s("./src/reddit/helpers/path/index.ts"),
				ws = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				js = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				ks = s.n(js);
			const {
				fbt: Is
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _s = p.a.div("Wrapper", ks.a), Ss = p.a.wrapped(ws.a, "ArrowRight", ks.a), Ls = p.a.wrapped(ys.a, "LinkOrOverlayLink", ks.a), Ts = p.a.span("HoverSpan", ks.a), Ns = Object(c.c)({
				permalink: (e, t) => Object(S.m)(e, {
					commentId: Object(S.r)(e, t).parentId
				})
			});
			var Ms = Object(d.b)(Ns)(Object(Ps.b)(({
					isActive: e,
					isOverlay: t,
					permalink: s
				}) => a.a.createElement(_s, {
					className: Object(l.a)({
						[ks.a.isActive]: e
					})
				}, a.a.createElement(Ls, {
					isOverlay: !!t,
					to: Object(Es.b)(s)
				}, a.a.createElement(Ts, null, Is._("Continue this thread", null, {
					hk: "3eplK8"
				})), " ", a.a.createElement(Ss, null))))),
				Rs = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				As = s.n(Rs);
			const {
				fbt: Fs
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Bs = p.a.div("MoreCommentsItemWrapper", As.a), Vs = p.a.p("MoreComments", As.a), Ds = p.a.wrapped(Vs, "MoreCommentsInteractive", As.a), Us = Object(c.c)({
				moreCommentsItem: S.D,
				moreCommentsPending: S.E
			});
			var Ws = Object(d.b)(Us, (e, t) => ({
					moreCommentsClicked: () => e(Object(u.l)(t.commentsPageKey, t.moreCommentsId))
				}))(({
					isActive: e,
					moreCommentsClicked: t,
					moreCommentsItem: s,
					moreCommentsPending: o
				}) => a.a.createElement(Bs, null, o ? a.a.createElement(Vs, null, Fs._("loading...", null, {
					hk: "47z89"
				})) : a.a.createElement(Lt.a.Consumer, null, o => a.a.createElement(Ds, {
					className: Object(l.a)({
						[As.a.isActive]: e
					}),
					onClick: () => {
						t(), o("load_more_comment")()
					}
				}, Fs._({
					"*": "{number of more replies hidden} more replies",
					_1: "1 more reply"
				}, [Fs._plural(s.numComments, "number of more replies hidden")], {
					hk: "J0jQW"
				}))))),
				Hs = s("./node_modules/lodash/times.js"),
				Ks = s.n(Hs),
				Gs = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				qs = s.n(Gs);
			const zs = p.a.wrapped(e => a.a.createElement("div", e, a.a.createElement("i", {
					className: g.m
				})), "Line", qs.a),
				Ys = p.a.div("LineContainer", qs.a),
				Qs = p.a.div("ShortLineContainer", qs.a);
			var Js = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: o,
						onLineClick: n,
						onLineMouseOver: r,
						onLineMouseOut: i,
						onShortLineClick: d,
						parentNodeIds: c,
						type: m
					} = e;
					return a.a.createElement(Ys, null, Ks()(s + 1, e => e === s ? m !== h.a.Comment || t ? null : a.a.createElement(Qs, {
						key: c[e]
					}, a.a.createElement(zs, {
						className: Object(l.a)(c[e], {
							[qs.a.hasGlowBorder]: !!o,
							[qs.a.topLevel]: 0 === s
						}),
						onClick: d,
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})) : a.a.createElement(zs, {
						className: c[e],
						key: c[e],
						onClick: n(e),
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})))
				},
				Zs = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Xs = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				$s = s.n(Xs);
			const eo = p.a.div("CommentListNodeWrapper", $s.a),
				to = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(g.f)
				},
				so = () => {
					const e = document.querySelectorAll(`.${g.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(g.f)
				};
			var oo = Object(d.b)(() => Object(c.c)({
				collapsed: (e, {
					commentLink: t,
					commentsPageKey: s
				}) => Object(Xt.b)(e, {
					commentId: t.id,
					commentsPageKey: s
				}),
				commentListNode: (e, t) => Object(S.l)(e, t),
				depth: (e, t) => Object(S.j)(e, t),
				highlightTreatment: (e, {
					commentLink: t
				}) => {
					let s = null;
					const o = Object(S.l)(e, {
						commentLink: t
					});
					if (o && t.type === h.a.Comment) {
						s = j(o.treatmentTags)
					}
					return s
				},
				isActive: (e, {
					commentLink: t
				}) => !!e.shortcuts.activeCommentId && t.id === e.shortcuts.activeCommentId,
				isAvatarsInCommentsEnabled: Zs.a,
				isAwarded: (e, {
					commentLink: t
				}) => {
					const s = Object(S.l)(e, {
						commentLink: t
					});
					return !(t.type !== h.a.Comment || !s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(T.a)(e, t);
						return s && s.coinPrice >= C.g
					})
				},
				isHighlighted: (e, {
					commentLink: t
				}) => {
					const s = Object(S.p)(e);
					if (s === _.a.None) return !1;
					if (t.type !== h.a.Comment) return !1;
					const o = t.id,
						n = Object(L.a)(e, {
							commentId: o
						});
					if (!n) return !1;
					const r = Object(R.r)(e),
						i = !!Object(N.k)(e, {
							postId: n.postId
						}),
						a = Object(M.G)(e, {
							postId: n.postId
						});
					if (!a || !a.previousVisits || a.previousVisits.length < 1) return !1;
					const d = s === _.a.Last ? a.previousVisits[a.previousVisits.length - 1] : a.previousVisits[0];
					return (i || r) && n.created > d
				}
			}), (e, {
				commentLink: t,
				commentsPageKey: s,
				scrollToAndRemeasure: o
			}) => ({
				onLineClick: n => () => {
					e(Object(u.d)({
						commentLink: t,
						commentsPageKey: s,
						lineDepth: n,
						scrollToAndRemeasure: o
					}))
				},
				onShortLineClick: () => e(Object(u.o)({
					commentId: t.id,
					commentsPageKey: s,
					scrollToAndRemeasure: o
				}))
			}))(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: o,
					commentLink: n,
					commentsPageKey: r,
					depth: i,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isAwarded: p,
					isFirstInList: u,
					isHidden: g,
					isHighlighted: C,
					onLineClick: x,
					onPresenceIndicatorInViewport: f,
					onShortLineClick: v,
					parentNodeIds: O,
					renderedInOverlay: y,
					scrollToAndRemeasure: P
				} = e, E = !!p, w = !(!d || !d.glowHexColor), j = w && i > 0, k = w, I = a.a.createElement(eo, {
					className: Object(l.a)(s, {
						[$s.a.isHidden]: g,
						[$s.a.glowBorderTopPadding]: j,
						[$s.a.glowBorderBottomPadding]: k
					}),
					id: n.id,
					style: {
						paddingLeft: i * (b.w + b.v) + (n.type === h.a.Comment ? b.w : 0)
					},
					tabIndex: -1
				}, a.a.createElement(Js, {
					collapsed: o,
					depth: i,
					hasGlowBorder: j,
					onLineClick: x,
					onLineMouseOver: to,
					onLineMouseOut: so,
					onShortLineClick: v,
					type: n.type,
					parentNodeIds: O
				}), no({
					childrenInfo: t,
					clearHovered: so,
					commentLink: n,
					commentsPageKey: r,
					onLineMouseOver: to,
					hasAwardGradient: E,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isFirstInList: u,
					isHighlighted: C,
					renderedInOverlay: y,
					scrollToAndRemeasure: P,
					onPresenceIndicatorInViewport: f
				}));
				return m && n.type === h.a.Comment ? a.a.createElement(Bt, null, I) : I
			});
			const no = ({
				childrenInfo: e,
				clearHovered: t,
				commentLink: s,
				commentsPageKey: o,
				hasAwardGradient: n,
				highlightTreatment: r,
				isActive: i,
				isAvatarsInCommentsEnabled: d,
				isFirstInList: c,
				isHighlighted: l,
				onLineMouseOver: m,
				renderedInOverlay: p,
				scrollToAndRemeasure: u,
				onPresenceIndicatorInViewport: b
			}) => {
				switch (s.type) {
					case h.a.Comment:
						return a.a.createElement(Os, {
							childrenInfo: e,
							clearHovered: t,
							commentId: s.id,
							commentsPageKey: o,
							hasAwardGradient: n,
							highlightTreatment: r,
							isActive: i,
							isAvatarsInCommentsEnabled: d,
							isFirstInList: c,
							isHighlighted: l,
							onLineMouseOver: m,
							renderedInOverlay: p,
							scrollToAndRemeasure: u,
							onPresenceIndicatorInViewport: b
						});
					case h.a.MoreComments:
						return a.a.createElement(Ws, {
							commentsPageKey: o,
							isActive: i,
							moreCommentsId: s.id
						});
					case h.a.ContinueThread:
						return a.a.createElement(Ms, {
							id: s.id,
							isActive: i
						})
				}
			};
			var ro = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				io = s("./src/reddit/components/Comments/States/index.tsx"),
				ao = s("./src/reddit/components/Scroller/Simple.tsx"),
				co = s("./src/reddit/constants/elementIds.ts"),
				lo = s("./src/reddit/featureFlags/index.ts"),
				mo = s("./src/reddit/helpers/commentList/index.ts"),
				po = s("./src/reddit/helpers/trackers/comment.ts"),
				uo = s("./src/telemetry/index.ts"),
				ho = s("./src/lib/LRUCache/index.ts"),
				bo = s("./src/reddit/components/Comments/index.m.less"),
				go = s.n(bo);
			const Co = b.f + 10,
				xo = 65,
				fo = p.a.wrapped(ao.b, "Scroller", go.a),
				vo = Object(c.c)({
					allCollapsed: S.a,
					commentLinks: S.k,
					commentThreadLinkSet: S.o,
					measureScrollFPS: lo.d.measureScrollFPS,
					moreComments: S.b,
					postPermalink: M.F
				}),
				Oo = Object(d.b)(vo, (e, t) => ({
					onCommentEnteredViewport: t => e(Object(u.e)(t)),
					onCommentLeftViewport: (t, s) => e(Object(u.h)(t, s))
				})),
				yo = new ho.a(500),
				Po = new ho.a(500),
				Eo = (e, t) => {
					const s = `entered-${e}`;
					let o = yo.get(s);
					return void 0 === o && (o = () => {
						t.onCommentEnteredViewport(e)
					}, yo.set(s, o)), o
				},
				wo = (e, t) => {
					const s = `left-${e}`;
					let o = Po.get(s);
					return void 0 === o && (o = s => {
						t.onCommentLeftViewport(e, s)
					}, Po.set(s, o)), o
				};
			class jo extends a.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: s
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const o = s[e.id].depth,
							n = t.findIndex(t => t.id === e.id);
						if (0 === o || 0 === n) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const r = t[n - 1],
							i = this.parentNodeIdsMap[r.id].slice();
						return this.parentNodeIdsMap[e.id] = i.filter(e => !!s[e] && s[e].depth < o), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.onPresenceIndicatorInViewport = e => {
						this.state.isPresenceEventSent || (this.setState({
							isPresenceEventSent: !0
						}), this.props.sendEvent(Object(po.b)(e)))
					}, this.parentNodeIdsMap = {}, ro.c(), this.childrenInfoMap = {}, this.state = {
						isPresenceEventSent: !1
					}
				}
				UNSAFE_componentWillMount() {
					const {
						commentLinks: e,
						allCollapsed: t,
						commentThreadLinkSet: s,
						moreComments: o
					} = this.props;
					this.timerId && uo.c.cancel(this.timerId), e.length && (this.timerId = uo.c.start()), this.findHiddenNodes(e, t, s, o)
				}
				componentDidMount() {
					this.timerId && Object(uo.b)(m.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: uo.c.end(this.timerId)
					})
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: o,
						commentThreadLinkSet: n,
						moreComments: i
					} = e;
					(s !== this.props.commentsPageKey || o.length > this.props.commentLinks.length || !r()(t, this.props.allCollapsed)) && this.findHiddenNodes(o, t, n, i)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: o
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !r()(e.allCollapsed, o) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && uo.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = uo.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(uo.b)(m.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: uo.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && uo.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, o) {
					if (!t || !Object.keys(t).length) return;
					let n = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					ro.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						n && (s[c.id].depth > r ? (ro.a(c.id), i += Object(mo.d)(c, o), c.type === h.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[n] = {
							numChildren: i,
							hasContinueThread: a
						}, n = null, r = 1 / 0, i = 0, a = !1)), !n && t[c.id] && (n = c.id, r = s[c.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: s,
						onCommentEnteredViewport: o,
						onCommentLeftViewport: n,
						renderedInOverlay: r
					} = this.props, i = Eo(e.id, {
						onCommentEnteredViewport: o,
						onCommentLeftViewport: n
					}), d = wo(e.id, {
						onCommentEnteredViewport: o,
						onCommentLeftViewport: n
					});
					return {
						estHeight: ro.b(e.id) ? 0 : xo,
						id: e.id,
						trackOnEnteredViewport: i,
						trackOnExitedViewport: d,
						render: ({
							placeholderRecommended: o,
							height: n,
							width: i,
							scrollToAndRemeasure: d
						}) => o ? a.a.createElement("div", {
							style: {
								height: n,
								backgroundColor: "#fff"
							}
						}) : a.a.createElement(oo, {
							childrenInfo: this.getChildrenInfo(e.id),
							commentLink: e,
							commentsPageKey: s,
							id: e.id,
							isFirstInList: 0 === t,
							isHidden: ro.b(e.id),
							scrollToAndRemeasure: d,
							renderedInOverlay: !!r,
							parentNodeIds: this.getParentNodeIds(e),
							onPresenceIndicatorInViewport: this.onPresenceIndicatorInViewport
						})
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: o,
						renderedInOverlay: n
					} = this.props;
					let r;
					if (o) {
						r = `comments-${n?"lightbox":"page"}`
					}
					const i = t.map((e, t) => this.getScrollChild(e, t));
					return a.a.createElement(fo, {
						className: Object(l.a)(go.a.Scroller, e),
						disableScrollCache: n,
						key: s,
						getContainer: () => n ? document.getElementById(co.d) : null,
						preventScrollOnMount: !0,
						scrollToChildPadding: Co,
						trackingName: r
					}, i)
				}
				renderEmptyState() {
					return this.props.commentId ? a.a.createElement(io.g, {
						link: this.props.postPermalink
					}) : a.a.createElement(io.c, null)
				}
			}
			t.a = Oo(Object(Se.c)(jo))
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(o.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("ChatMessageInput~ChatPost"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsChat/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = n
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.m.less": function(e, t, s) {
			e.exports = {
				LoaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				loaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				Icon: "_1nrdmuhkCLXh8N_46gKAyn",
				icon: "_1nrdmuhkCLXh8N_46gKAyn",
				Byline: "eI85Q_-1x9VERN15oDr3X",
				byline: "eI85Q_-1x9VERN15oDr3X",
				gradientAnimation: "_3kGJh7EpOUlhrvN051jlhD"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = i.a.div("LoaderWrapper", c.a),
				m = i.a.div("Icon", c.a),
				p = i.a.div("Byline", c.a),
				u = Object(r.a)({
					ErrorComponent: () => n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(p, null)),
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(p, null))
				});
			t.a = e => n.a.createElement(u, e)
		},
		"./src/reddit/components/CommentsPageNativeAd/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "CommentsPageNativeAd",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CommentsPageNativeAd").then(s.bind(null, "./src/reddit/components/CommentsPageNativeAd/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsPageNativeAd/index.tsx"
				}
			})
		},
		"./src/reddit/components/CommentsPageSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				card: "_2Zqrm36MciZxq2elpbtQig",
				inFeedAd: "_2vWBnEHUdKqzj9DabP66L1",
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD"
			}
		},
		"./src/reddit/components/CommentsPageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				h = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				b = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				C = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				x = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				f = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				O = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				y = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				P = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				E = s("./src/reddit/featureFlags/component.tsx"),
				w = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				j = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/selectors/experiments/postSeo.ts"),
				I = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				T = s.n(L);
			const N = Object(E.a)("spPoints", h.a),
				M = Object(E.a)("spLeaderboard", b.a),
				R = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ProfileIdCard").then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				A = Object(c.c)({
					isLoggedIn: S.J,
					postSEOV2IdCardVariant: k.h,
					shouldShowReredditPromo: I.a,
					widgets: Object(p.a)(_.q)
				}),
				F = Object(d.b)(A);
			class B extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e, t) {
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets) || this.props.post.id !== e.post.id
				}
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isOverlay: s,
						subredditName: o,
						post: n,
						isFakeOverlay: r,
						postSEOV2IdCardVariant: i
					} = this.props, d = !Object(k.c)(i) && !Object(k.f)(i);
					return a.a.createElement(v.a, {
						adComponentOnFakeOverlay: r,
						adComponent: d ? a.a.createElement(x.a, {
							postId: n.id,
							isOverlay: s,
							listingName: o,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: w.a.BOTTOM,
							refreshKey: n.id,
							sizes: m.n,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isLoggedIn: s,
						isOverlay: o,
						post: n,
						postSEOV2IdCardVariant: r,
						shouldShowReredditPromo: i,
						subredditId: d,
						subredditName: c,
						widgets: p
					} = this.props;
					let h = 0;
					const b = Object(k.c)(r) || Object(k.f)(r),
						v = a.a.createElement(x.a, {
							postId: n.id,
							isOverlay: o,
							listingName: c,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: h++,
							position: w.a.FIRST,
							refreshKey: n.id,
							sizes: m.h,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(T.a.outerWrapper, e)
					}, Object(j.p)(n) ? a.a.createElement(R, {
						profileName: c,
						isOverlay: o || !1
					}) : a.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: o,
						listingName: c,
						postId: n.id,
						rememberPosition: n.numComments > 0,
						isMinimal: b
					}), a.a.createElement(u.a, {
						cardClassName: T.a.card,
						subredditId: d
					}), a.a.createElement(N, {
						className: T.a.card,
						subredditId: d,
						uniqueId: n.id
					}), a.a.createElement(M, {
						className: T.a.card,
						subredditId: d,
						uniqueId: n.id
					}), a.a.createElement(C.a, {
						subredditId: d
					}), v, s && p.map((e, t) => a.a.createElement(f.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(P.a, {
						subredditName: c,
						widget: e
					}))), n.isSponsored && a.a.createElement(f.a, null, a.a.createElement(O.a, null)), i && a.a.createElement(y.a, {
						directoryTimestamp: n.created,
						postId: n.id
					}), this.renderFooter(h++))
				}
			}
			t.a = F(B)
		},
		"./src/reddit/components/CommentsWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				ContentWrapper: "_1ump7uMrSA43cqok14tPrG",
				contentWrapper: "_1ump7uMrSA43cqok14tPrG",
				TruncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				truncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				MoreCommentsButton: "j9NixHqtN2j8SKHcdJ0om",
				moreCommentsButton: "j9NixHqtN2j8SKHcdJ0om"
			}
		},
		"./src/reddit/components/CommentsWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/models/Subreddit/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				h = s("./src/reddit/selectors/experiments/postSeo.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				C = s.n(g);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = "500px", v = 3, O = Object(i.c)({
				hasDismissedTruncation: u.b,
				isGQLLoggedIn: b.I,
				isLoggedIn: b.J,
				isPostSEOEligible: h.e,
				postSEOV2TruncatedVariant: h.i
			}), y = Object(r.b)(O);
			class P extends n.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: o,
						hasDismissedTruncation: r,
						innerRef: i,
						isCommentsListTruncated: d,
						isGQLLoggedIn: u,
						isLoggedIn: h,
						isOverlay: b,
						numberOfComments: g,
						onClick: O,
						subredditOrProfile: y
					} = this.props, P = !(!y || Object(m.h)(y)), E = d && P && (g >= v && !b || !r) && (!u && !h), w = E && !e, j = E ? C.a.TruncatedComments : "";
					return n.a.createElement("div", {
						onClick: O,
						ref: i
					}, n.a.createElement("div", {
						className: Object(a.a)(C.a.ContentWrapper, s, j),
						style: {
							"--commentswrapper-gradient-color": Object(p.a)(this.props).body,
							maxHeight: E ? f : "unset"
						}
					}, t), w && n.a.createElement(l.i, {
						className: C.a.MoreCommentsButton,
						onClick: o,
						"data-redditstyle": !0
					}, x._("View Entire Discussion ({number of comments} Comments)", [x._param("number of comments", Object(c.b)(g))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(d.a)(y(P))
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y7BouacdnDeKNuREDVkim",
				title: "KaBtU0qanIOVW0UniJKIe",
				label: "VmuxKqetMFPty4Vt4EAOj",
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === a.a.Live,
					n = t.status === a.a.Closed;
				return r.a.createElement("div", {
					className: c.a.container
				}, r.a.createElement("h3", {
					className: c.a.title
				}, t.name), r.a.createElement("div", {
					className: c.a.label
				}, l._("Predictions Tournament", null, {
					hk: "sZ4UO"
				}), s && r.a.createElement("span", {
					className: Object(o.a)(c.a.badge, c.a.live)
				}, l._("Live", null, {
					hk: "1G2P1W"
				})), n && r.a.createElement("span", {
					className: Object(o.a)(c.a.badge, c.a.ended)
				}, l._("Ended", null, {
					hk: "4s3hco"
				}))), r.a.createElement(i.a, {
					className: c.a.awards,
					thing: e
				}))
			}
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, s) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				d = s.n(a);
			t.a = i.a.wrapped(e => n.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, s) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/Inline/index.tsx"),
				r = s("./src/reddit/components/Hovercards/helpers.m.less"),
				i = s.n(r);
			const a = o.a.wrapped(n.a, "UserActionItem", i.a),
				d = e => {
					const {
						author: t,
						itemId: s,
						subredditName: o,
						tooltipIdPrefix: n,
						tooltipType: r
					} = e;
					let i = n;
					return s && (i = `${i}--${s}`), r && (i = `${i}--${r}`), t && (i = `${i}--${t}`), o && (i = `${i}--${o}`), i
				}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = s.n(i),
				d = s("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", a.a),
				l = d.a.div("TextWrapper", a.a);

			function m(e) {
				const {
					className: t,
					color: s,
					icon: o,
					subtitle: i,
					title: d
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, n.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), o ? n.a.createElement(c, null, o) : n.a.createElement(c, null), n.a.createElement(l, null, n.a.createElement("div", {
					className: a.a.title
				}, d), i && n.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				bannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				ArchivedIcon: "_3Apkcb3itLCGec85v2ZzFz",
				archivedIcon: "_3Apkcb3itLCGec85v2ZzFz"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(c);
			t.a = () => r.a.createElement(d.a, {
				className: l.a.BannerBase,
				color: i.b.locked,
				icon: r.a.createElement(a.a, {
					className: l.a.ArchivedIcon
				}),
				subtitle: o.fbt._("New comments cannot be posted and votes cannot be cast", null, {
					hk: "3jwi5b"
				}),
				title: o.fbt._("This thread is archived", null, {
					hk: "kEcat"
				})
			})
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				lockIcon: "_26YMkU38Pb6t5wXIJSne-H",
				bannerBase: "jf95ZrrjIs2i--Ud8Kvb7"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/icons/svgs/SquareLock/index.tsx"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				l = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				m = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				p = s.n(m);
			const u = r.a.createElement(d.a, {
					className: p.a.lockIcon
				}),
				h = e => Object(c.h)(e) ? i.d.profile : i.d.subreddit;

			function b({
				subredditOrProfile: e
			}) {
				const t = e ? o.fbt._("This thread has been locked by the moderators of {communityname}", [o.fbt._param("communityname", h(e) + e.name)], {
					hk: "2HSQXz"
				}) : o.fbt._("This thread has been locked", null, {
					hk: "4fn3dn"
				});
				return r.a.createElement(l.a, {
					className: p.a.bannerBase,
					color: a.b.locked,
					icon: u,
					subtitle: o.fbt._("New comments cannot be posted", null, {
						hk: "2A32Yr"
					}),
					title: t
				})
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less": function(e, t, s) {
			e.exports = {
				contestModeEnabled: "_3Jf9vrUhPCp1M6DPL_bjy9",
				TrophyIcon: "_3v30vS-N87epKUIqWSlBm1",
				trophyIcon: "_3v30vS-N87epKUIqWSlBm1"
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/icons/svgs/Trophy/index.tsx"),
				l = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				m = s.n(l);
			const p = a.a.wrapped(c.a, "TrophyIcon", m.a);
			t.a = Object(i.a)(e => {
				const {
					hasModeratorPostPermissions: t,
					theme: s
				} = e, n = t ? o.fbt._("Comments are in random ordering and vote scores are hidden to non-mods", null, {
					hk: "2gpz9d"
				}) : o.fbt._("Comments are in random ordering and vote scores are hidden", null, {
					hk: "3qrgsh"
				});
				return r.a.createElement(d.a, {
					className: m.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: r.a.createElement(p, null),
					subtitle: n,
					title: o.fbt._("This post has contest mode enabled", null, {
						hk: "42oz5Q"
					})
				})
			})
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				h = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				b = s.n(h);
			const g = r.a.createElement(m.a, {
					className: b.a.icon
				}),
				C = Object(a.c)({
					subreddit: p.y,
					subredditAboutInfo: p.v
				}),
				x = Object(i.b)(C);
			t.a = x(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const n = s && s.quarantineMessageHtml,
					i = s && s.quarantineMessage || o.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return r.a.createElement(u.a, {
					className: b.a.container,
					color: c.b.quarantine,
					icon: g,
					subtitle: r.a.createElement("span", null, o.fbt._("This community is {=quarantined}", [o.fbt._param("=quarantined", r.a.createElement("a", {
						className: b.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, o.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", n ? r.a.createElement(d.a, {
						className: b.a.rawHtmlDisplay,
						html: n
					}) : i, " ", r.a.createElement(l.a, {
						className: b.a.link,
						to: "/"
					}, o.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: o.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = s("./src/reddit/helpers/overlay/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const {
					children: t,
					className: s,
					to: o,
					...r
				} = e, c = Object(a.b)(o);
				return n.a.createElement(i.a, d({
					className: s,
					to: c
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...s
				} = e, o = t ? c : r.a;
				return n.a.createElement(o, l({}, s, {
					children: s.children,
					className: s.className,
					onClick: s.onClick,
					to: s.to
				}))
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/PostList/index.tsx"),
				n = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(o.a)
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/NotificationButton/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				c = s("./src/reddit/components/Thumbnail/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				p = s("./src/reddit/hooks/useIsClient.ts"),
				u = s("./src/reddit/models/Subreddit/index.ts"),
				h = s("./src/reddit/components/MediumPost/index.m.less"),
				b = s.n(h);
			t.a = ({
				crosspost: e,
				post: t,
				forceShowNSFW: s,
				redditStyle: o,
				shouldShowSubscribeButton: h,
				subredditOrProfile: g,
				templatePlaceholderImage: C,
				shouldShowFollowButton: x,
				isFollowed: f,
				isCommentsPage: v,
				onFollowPostClick: O
			}) => {
				return Object(p.a)() ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(i.a)(b.a.thumbnailContainer, {
						[b.a.mShowingButtonOrOverflow]: x || h
					})
				}, n.a.createElement("div", {
					className: b.a.thumbnailContainerRow
				}, x && n.a.createElement(a.a, {
					isFilled: !!f,
					onClick: O,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), h && g && n.a.createElement(d.a, {
					className: b.a.subscribeButton,
					getEventFactory: e => Object(m.h)(t.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: g.name,
						type: Object(u.h)(g) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: t.id,
					small: !0
				})), n.a.createElement(c.a, {
					crosspost: e,
					isCommentsPage: v,
					post: t,
					redditStyle: o,
					forceShowNSFW: s,
					templatePlaceholderImage: C
				}))) : null
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
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, s) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: o,
						hasTooltip: c,
						tooltipText: m,
						className: p
					} = e;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, n.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && n.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, m))
			}
		},
		"./src/reddit/components/PostContent/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_3UMN4RCVY5288m_fOZlkcg",
				controlsContainer: "_1hwEKkB_38tIoal6fcdrt9",
				postNumbers: "_1svxG6WJ6vr-T9iN3rf5M6",
				flatlistContainer: "UPYG6UwB7XqTeGj4a4vBr",
				mainBody: "_3MC4c3Q_Y41YKtl1TcvyMt",
				leftPadding: "_1mK-LVHGTTlcFpMsjItjYJ",
				postContainer: "_2rszc84L136gWQrkwH6IaM",
				hasEventMeta: "qpc-hx5EvongRjYhe0TOO",
				PostTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				postTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				ExpandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				expandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				ClassicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				classicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				ClassicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				classicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				FullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				fullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				LargePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				largePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				isCommentsPage: "D3IL3FD0RFy_mkKLPwL4",
				adLinkWrapper: "_3SVc61tFn_bE8SioJlUB-J",
				classicThumbnail: "_1FHUoxLVcplbcdYoOYbzlq",
				classicNotificationButton: "_3PPSzlne0JO99X7TQkgRgN",
				ThumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				thumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				VideoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0",
				videoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/noop.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/ads/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				h = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				C = s("./src/reddit/models/User/index.ts"),
				x = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				f = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				O = s("./src/reddit/helpers/path/index.ts"),
				y = s("./src/reddit/helpers/trackers/lightbox.ts"),
				P = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/actions/tooltip.ts"),
				w = s("./node_modules/lodash/find.js"),
				j = s.n(w),
				k = s("./node_modules/react-motion/lib/react-motion.js");
			const I = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				_ = {},
				S = (e = [], t) => {
					const s = j()(e, {
							key: "expando_content"
						}),
						o = s && s.style ? s.style.opacity : 0;
					return t ? o >= 1 ? [{
						key: "expando_content",
						style: {
							opacity: 1
						}
					}] : o > 0 ? [{
						key: "expando_content",
						style: {
							opacity: Object(k.spring)(1, I)
						}
					}] : [{
						key: "expando_content",
						style: {
							opacity: .1
						}
					}] : o < .1 ? [] : [{
						key: "expando_content",
						style: {
							opacity: Object(k.spring)(0, I)
						}
					}]
				};
			class L extends i.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), _), this.state = {
						expanded: e.shouldExpand,
						renderTransitionMotion: e.shouldExpand
					}
				}
				componentWillReceiveProps(e) {
					e.shouldExpand && !this.state.renderTransitionMotion ? this.setState(() => ({
						renderTransitionMotion: !0
					}), () => {
						setTimeout(() => {
							this.setState({
								expanded: !0
							})
						})
					}) : e.shouldExpand !== this.state.expanded && this.setState({
						expanded: e.shouldExpand
					})
				}
				render() {
					const {
						renderTransitionMotion: e,
						expanded: t
					} = this.state;
					if (!e) return !1;
					const {
						className: s,
						content: o
					} = this.props;
					return i.a.createElement(k.TransitionMotion, {
						styles: e => S(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => i.a.createElement("div", {
						className: s
					}, e.map(e => i.a.createElement("div", {
						key: e.key,
						style: e.style
					}, o))))
				}
			}
			var T = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/models/Post/index.ts"),
				M = s("./src/reddit/models/Vote/index.ts"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				A = s("./src/reddit/selectors/experiments/categories.ts"),
				F = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				B = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				V = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/postCreations.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/showPromotedCTA.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				K = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				G = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				q = s("./src/reddit/components/AwardBadges/index.tsx"),
				z = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Y = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				Q = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				J = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				Z = s("./src/reddit/components/ExpandoButton/index.tsx"),
				X = s("./src/reddit/components/FlairWrapper/index.tsx"),
				$ = s("./src/reddit/components/Flatlist/index.tsx"),
				ee = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				te = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				se = s("./src/reddit/components/ModModeReports/index.tsx"),
				oe = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ne = s("./src/reddit/components/NotificationButton/index.tsx"),
				re = s("./src/reddit/components/PostContainer/index.tsx"),
				ie = s("./src/higherOrderComponents/makeAsync.tsx"),
				ae = s("./src/lib/loadWithRetries/index.ts"),
				de = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const ce = Object(ie.a)({
				ErrorComponent: () => i.a.createElement(de.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(ae.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(de.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var le = e => i.a.createElement(ce, e),
				me = s("./src/reddit/components/PostList/index.tsx"),
				pe = s("./src/reddit/components/PostMedia/index.tsx"),
				ue = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				he = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				be = s("./src/reddit/components/PostTitle/index.tsx"),
				ge = s("./src/reddit/components/PostTopLine/index.tsx"),
				Ce = s("./src/reddit/components/PostTopMeta/index.tsx"),
				xe = s("./src/reddit/components/SourceLink/index.tsx"),
				fe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ve = s("./src/reddit/constants/componentTestIds.ts"),
				Oe = s("./src/reddit/constants/postLayout.ts"),
				ye = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Pe = s("./src/reddit/helpers/postEvent.ts"),
				Ee = s("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				we = s("./src/reddit/selectors/postFlair.ts"),
				je = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				ke = s("./src/reddit/selectors/experiments/econ/index.ts"),
				Ie = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				_e = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Se = s("./src/reddit/constants/colors.ts"),
				Le = s("./src/config.ts"),
				Te = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				Ne = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				Me = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Re = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				Ae = s.n(Re);
			const {
				fbt: Fe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Be = () => Fe._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [Fe._param("=User Agreement", i.a.createElement("a", {
				className: Ae.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, Fe._("User Agreement", null, {
				hk: "3MHgRl"
			}))), Fe._param("=Content Policy", i.a.createElement("a", {
				className: Ae.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, Fe._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), Ve = () => Fe._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [Fe._param("=User Agreement", i.a.createElement("a", {
				className: Ae.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, Fe._("User Agreement", null, {
				hk: "yMHtU"
			}))), Fe._param("=Content Policy", i.a.createElement("a", {
				className: Ae.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, Fe._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var De = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: o,
					subredditName: n
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return Fe._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case N.g.Author:
							return Fe._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case N.g.AuthorDeleted:
							return Fe._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case N.g.AutomodFiltered:
							return Fe._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case N.g.CommunityOps:
							return Fe._("This post was removed by Reddit admin, u/{username}.", [Fe._param("username", t)], {
								hk: "34nHWu"
							});
						case N.g.ContentTakedown:
							return Fe._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case N.g.CopyrightTakedown:
							return Fe._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case N.g.Moderator:
							return Fe._("This post was removed by r/{subredditName} moderator, u/{username}.", [Fe._param("subredditName", s), Fe._param("username", t)], {
								hk: "270bcn"
							});
						case N.g.Reddit:
							return Fe._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return Fe._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(o, s, n) : ((e, t) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return Fe._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case N.g.Author:
							return Fe._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case N.g.AuthorDeleted:
							return Fe._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case N.g.AutomodFiltered:
							return Fe._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case N.g.CommunityOps:
							return Fe._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case N.g.ContentTakedown:
							return Fe._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case N.g.CopyrightTakedown:
							return Fe._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case N.g.Moderator:
							return Fe._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [Fe._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case N.g.Reddit:
							return Fe._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return Fe._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(o, n), a = t ? (e => {
					switch (e) {
						case N.g.AntiEvilOps:
							return i.a.createElement(Be, null);
						case N.g.AuthorDeleted:
						case N.g.Author:
							return Fe._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case N.g.AutomodFiltered:
							return Fe._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case N.g.CommunityOps:
							return Fe._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [Fe._param("=just ask", i.a.createElement("a", {
								className: Ae.a.link,
								href: `${Le.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, Fe._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case N.g.ContentTakedown:
							return i.a.createElement(Ve, null);
						case N.g.CopyrightTakedown:
							return Fe._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case N.g.Moderator:
							return Fe._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case N.g.Reddit:
							return Fe._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return Fe._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(o) : ((e, t) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return i.a.createElement(Be, null);
						case N.g.AuthorDeleted:
						case N.g.Author:
							return Fe._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case N.g.AutomodFiltered:
							return Fe._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [Fe._param("=[subreddit name]", i.a.createElement("a", {
								className: Ae.a.link,
								href: `${Le.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, Fe._("{subreddit name}", [Fe._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case N.g.CommunityOps:
							return Fe._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case N.g.ContentTakedown:
							return i.a.createElement(Ve, null);
						case N.g.CopyrightTakedown:
							return Fe._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case N.g.Moderator:
							return Fe._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case N.g.Reddit:
						default:
							return Fe._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(o, n), d = t ? Se.b.warning : Se.b.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case N.g.AntiEvilOps:
						case N.g.AutomodFiltered:
						case N.g.CommunityOps:
						case N.g.ContentTakedown:
						case N.g.CopyrightTakedown:
						case N.g.Reddit:
							t = Te.a;
							break;
						case N.g.AuthorDeleted:
						case N.g.Author:
							t = Me.b;
							break;
						case N.g.Moderator:
							t = Ne.a;
							break;
						default:
							t = Te.a
					}
					return i.a.createElement(t, {
						className: Ae.a.icon
					})
				})(o);
				return i.a.createElement(_e.a, {
					className: Ae.a.BannerBase,
					color: d,
					icon: c,
					subtitle: a,
					title: r
				})
			};

			function Ue(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: o
				} = e;
				return i.a.createElement(i.a.Fragment, null, o && s.removedByCategory && i.a.createElement(De, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: o.name
				}))
			}
			var We = s("./node_modules/fbt/lib/FbtPublic.js"),
				He = s("./src/lib/prettyPrintNumber/index.ts"),
				Ke = s("./src/reddit/components/PostContent/viewCount.m.less"),
				Ge = s.n(Ke);
			var qe = ({
					post: e,
					showViewCount: t
				}) => {
					const {
						upvotePercentString: s,
						viewCountString: o
					} = (e => {
						const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
							s = Object(He.b)(e.viewCount);
						return {
							upvotePercentString: We.fbt._("{percent upvoted}% Upvoted", [We.fbt._param("percent upvoted", t)], {
								hk: "432tjJ"
							}),
							viewCountString: We.fbt._({
								"*": "{number of views} Views",
								_1: "1 View"
							}, [We.fbt._plural(e.viewCount, "number of views", s)], {
								hk: "rP01m"
							})
						}
					})(e), n = t && !!e.viewCount;
					return i.a.createElement("div", {
						className: Ge.a.viewCounts
					}, n && i.a.createElement("span", null, o), n && !!e.upvoteRatio && i.a.createElement("span", {
						className: Ge.a.dotSpacer
					}), !!e.upvoteRatio && i.a.createElement("span", null, s))
				},
				ze = s("./src/reddit/components/PostContent/index.m.less"),
				Ye = s.n(ze);
			const {
				fbt: Qe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Je = u.a.wrapped(be.c, "PostTitle", Ye.a), Ze = u.a.wrapped(Z.a, "ExpandoButton", Ye.a), Xe = u.a.wrapped(L, "ClassicExpandoMotion", Ye.a), $e = u.a.wrapped($.c, "FullWidthFlatlist", Ye.a), et = i.a.createElement("p", {
				className: Ye.a.VideoProcessingStatus
			}, Qe._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), tt = Object(ye.t)({
				isCommentsPage: ye.w,
				pageLayer: e => e
			}), st = Object(a.b)(() => Object(l.c)({
				activeModalId: R.a,
				flairStyleTemplate: ye.T,
				currentUser: H.j,
				crosspost: U.d,
				hideNSFWPref: H.B,
				imageGalleryCurrentItem: U.i,
				isAdminOrMod: (e, t) => {
					const s = Object(U.T)(e, {
						postId: t.postId
					});
					return !!s && Object(B.c)(e, {
						subredditId: s.id
					})
				},
				isCurrentUserProfilePost: U.l,
				isExpanded: U.m,
				isFollowed: U.t,
				isFollowedExpired: U.o,
				isPostFollowEnabled: Ee.b,
				showPromotedCTA: W.a,
				post: U.G,
				moderatorPermissions: V.k,
				modModeEnabled: ye.R,
				isInCategoriesExperiment: A.a,
				showAwardsPlaque: F.a,
				showEditFlair: we.a,
				subredditOrProfile: U.T,
				isEditing: D.K,
				userIsOp: H.pb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Ie.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Ie.c)(e, {
					postId: t.postId
				})
			}), (e, {
				pageLayer: t,
				postId: s
			}) => ({
				onIgnoreReports: () => e(Object(b.Z)(s)),
				onOpenReportsDropdown: t => e(Object(E.h)({
					tooltipId: t
				})),
				onVoteClick: t => {
					const o = t === M.a.upvoted ? Object(b.db)(s) : Object(b.w)(s);
					e(o)
				},
				fireAdPixelsOfType: (t, s) => e(Object(b.z)(t, s)),
				openPost: t => e(Object(b.K)(t)),
				onFollowPost: t => e(Object(b.cb)(s, t)),
				onFollowPostExpired: () => e(Object(b.W)({
					id: s,
					expiresAt: 0
				}))
			})), ot = e => e.media && e.media.type === T.o.EMBED && e.media.provider === T.v.Imgur && e.media.height > 700, nt = u.a.wrapped(d.a, "ThumbLink", Ye.a), rt = ({
				post: e,
				templatePlaceholderImage: t,
				shouldShowFollowButton: s,
				isFollowed: o,
				onFollowPostClick: n
			}) => {
				const r = e.source ? i.a.createElement(z.a, {
					post: e,
					forceShowNSFW: !0,
					templatePlaceholderImage: t
				}) : i.a.createElement(nt, {
					to: Object(O.b)(e.permalink)
				}, i.a.createElement(z.a, {
					post: e,
					forceShowNSFW: !0
				}));
				return i.a.createElement("div", {
					className: Ye.a.classicThumbnail
				}, s && i.a.createElement(ne.a, {
					className: Ye.a.classicNotificationButton,
					isFilled: !!o,
					onClick: n,
					hasTooltip: !0,
					tooltipText: Qe._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), r)
			}, it = ({
				post: e,
				isExpanded: t,
				scrollerItemRef: s
			}) => i.a.createElement(Xe, {
				content: i.a.createElement(i.a.Fragment, null, i.a.createElement(pe.a, {
					className: Ye.a.ClassicPostMedia,
					isListing: !1,
					isNotCardView: !0,
					post: e,
					shouldLoad: !0,
					showFull: !0,
					showCentered: !0,
					scrollerItemRef: s
				})),
				shouldExpand: !!t
			});
			t.a = tt(st(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: o,
					fireAdPixelsOfType: d,
					flairStyleTemplate: l,
					forceOpenInNewTab: u,
					hideNSFWPref: b,
					imageGalleryCurrentItem: O,
					isAdminOrMod: E,
					isCommentCountAnimation: w,
					isCommentsPage: j,
					isCountAnimShadowTestEnabled: k,
					isCurrentUserProfilePost: I,
					isEditing: _,
					isExpanded: S,
					isFollowed: L,
					isFollowedExpired: M,
					isOverlay: R,
					isPostFollowEnabled: A,
					isVoteCountAnimation: F,
					moderatorPermissions: B,
					modModeEnabled: V,
					onFollowPost: D,
					onFollowPostExpired: U,
					onIgnoreReports: W,
					onOpenReportsDropdown: H,
					openPost: z,
					onVoteClick: Z,
					post: ne,
					scrollerItemRef: ie,
					sendEvent: ae,
					showAwardsPlaque: de,
					showEditFlair: ce,
					showPromotedCTA: ye,
					subredditOrProfile: Ee,
					userIsOp: we
				} = e, Ie = Object(fe.b)(), _e = Object(a.e)(e => Boolean(ne.predictionTournament) && Object(ke.r)(e)), Se = Object(c.a)(ne);
				Object(r.useEffect)(() => {
					A && M && U()
				}, []);
				const Le = ne.isSponsored ? Object(me.b)(ne.id, {
						fireAdPixelsOfType: d,
						openPost: z
					}) : n.a,
					Te = Object(v.a)(B),
					Ne = Object(x.a)(B),
					Me = Object(f.a)(B),
					Re = Te || Ne,
					Ae = ((e, t, s) => {
						const [o, n] = e ? [Object(C.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return o || t || n
					})(o, Re, ne),
					Fe = !!ne.media && (ne.media.type === T.o.RTJSON || ne.media.type === T.o.TEXT),
					Be = we && Fe,
					Ve = Object(oe.c)(ne);
				let De;
				const We = !(V && v.a),
					He = Object(ue.b)({
						hide: We,
						editPost: We,
						save: We,
						report: We
					}),
					Ke = ne.removedByCategory === N.g.AuthorDeleted,
					Ge = o && (o.displayText === ne.author || o.username === ne.author),
					ze = !Ke && !ot(ne) && (Ge || E || !(ne.removedByCategory && ne.media && (Object(T.J)(ne.media) || Object(T.H)(ne.media)))),
					Qe = Object(m.t)(ne, O),
					{
						source: Xe
					} = Qe,
					tt = ne.removedByCategory === N.g.Reddit && Object(h.e)(ne.created) > 24,
					st = ne.removedByCategory && ne.removedByCategory !== N.g.Reddit || tt,
					nt = A && !st && !ne.isArchived,
					at = Object(r.useCallback)(() => {
						D(L ? N.f.UNFOLLOWED : N.f.FOLLOWED), Ie(L ? Object(P.i)(ne.id) : Object(P.c)(ne.id))
					}, [D, Ie, L, ne.id]),
					dt = i.a.createElement(Je, {
						post: ne,
						size: be.b.ExtraLarge,
						showCategoryTag: R,
						isOverlay: R,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					ct = i.a.createElement(qe, {
						post: ne,
						showViewCount: Ae
					}),
					lt = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: o
						} = e, n = Object(a.e)(e => Boolean(o.predictionTournament) && Object(ke.r)(e));
						return s ? Oe.g.Classic : n ? Oe.g.Large : t ? Oe.g.Large : o.media && !ot(o) ? Oe.g.Large : Oe.g.Medium
					})(e);
				if (lt === Oe.g.Classic) {
					const t = Object(g.a)(ne);
					De = i.a.createElement("div", {
						"data-test-id": ve.e
					}, i.a.createElement(he.a, {
						model: ne,
						handleVote: Z,
						isCountAnimShadowTestEnabled: k,
						isOverlay: R,
						isVoteCountAnimation: F,
						postId: ne.id
					}), i.a.createElement("div", {
						className: Ye.a.mainBody
					}, i.a.createElement("div", {
						className: Ye.a.content
					}, i.a.createElement(ge.a, {
						hideAwards: de,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: j,
						isCurrentUserProfilePost: I,
						isOverlay: !!R,
						isTopicPage: !1,
						post: ne,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!R && !ne.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ee,
						shouldShowFollowButton: nt && !t,
						isFollowed: L,
						onFollowPostClick: at
					}), dt, i.a.createElement(X.a, {
						className: j ? Ye.a.leftPadding : void 0,
						post: ne,
						showCategoryTag: e.isInCategoriesExperiment && j,
						sendEvent: ae
					}), V && Te && Ve && i.a.createElement(se.a, {
						onIgnoreReports: W,
						reportable: ne
					}), i.a.createElement(ee.d, null), i.a.createElement("div", {
						className: Ye.a.FlatlistContainer
					}, i.a.createElement(Ze, {
						crosspost: s || void 0,
						isExpanded: !!S,
						post: ne,
						useMediaIcons: !1
					}), it(e), de && i.a.createElement(q.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: ne,
						tooltipType: R ? Ce.c.Lightbox : void 0
					}), i.a.createElement($e, {
						currentUser: o,
						hasModFlairPerms: Ne,
						hasModFullPerms: Me,
						hasModPostPerms: Te,
						isOverlay: R,
						onIgnoreReports: W,
						onOpenReportsDropdown: H,
						modModeEnabled: V,
						post: ne,
						showUpvotePercent: !0,
						showViewCount: Ae,
						useFlatlistBreakpoints: He,
						isCommentCountAnimation: w,
						isCountAnimShadowTestEnabled: k
					}))), t && i.a.createElement(rt, {
						post: ne,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: nt,
						isFollowed: L,
						onFollowPostClick: at
					})))
				} else if (lt === Oe.g.Medium) {
					const t = Object(g.a)(ne);
					De = i.a.createElement("div", {
						"data-test-id": ve.e
					}, i.a.createElement(he.a, {
						model: ne,
						handleVote: Z,
						isCountAnimShadowTestEnabled: k,
						isOverlay: R,
						isVoteCountAnimation: F,
						postId: ne.id
					}), i.a.createElement("div", {
						className: Ye.a.mainBody
					}, i.a.createElement("div", {
						className: Ye.a.content
					}, i.a.createElement(ge.a, {
						hideAwards: de,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: j,
						isCurrentUserProfilePost: I,
						isOverlay: !!R,
						isTopicPage: !1,
						post: ne,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!R && !ne.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ee,
						shouldShowFollowButton: nt && !t,
						isFollowed: L,
						onFollowPostClick: at
					}), dt, ne.source && i.a.createElement(xe.a, {
						post: ne,
						isCommentsPage: j
					}), Object(T.L)(ne) && et, i.a.createElement(X.a, {
						className: j ? Ye.a.leftPadding : void 0,
						post: ne,
						showCategoryTag: e.isInCategoriesExperiment && j,
						sendEvent: ae
					}), Ee && st && i.a.createElement(Ue, {
						isAdminOrMod: E,
						post: ne,
						subredditOrProfile: Ee
					}), V && Te && Ve && i.a.createElement(se.a, {
						onIgnoreReports: W,
						reportable: ne
					})), t && !Se && i.a.createElement(te.a, {
						post: ne,
						forceShowNSFW: !0,
						hasModPostPerms: Re,
						isCommentsPage: j,
						isOverlay: !0,
						modModeEnabled: V,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: Ee,
						shouldShowFollowButton: nt,
						isFollowed: L,
						onFollowPostClick: at
					})), i.a.createElement(ee.d, null), de && i.a.createElement(q.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: ne,
						tooltipType: R ? Ce.c.Lightbox : void 0
					}), i.a.createElement("div", {
						className: Ye.a.controlsContainer
					}, i.a.createElement($.c, {
						currentUser: o,
						hasModFlairPerms: Ne,
						hasModFullPerms: Me,
						hasModPostPerms: Te,
						isOverlay: R,
						modModeEnabled: V,
						onIgnoreReports: W,
						onOpenReportsDropdown: H,
						post: ne,
						showEditPost: Be,
						showEditFlair: ce,
						tooltipType: R ? Ce.c.Lightbox : void 0,
						useFlatlistBreakpoints: He,
						isCommentCountAnimation: w,
						isCountAnimShadowTestEnabled: k
					}), ct))
				} else lt === Oe.g.Large && (De = i.a.createElement("div", {
					"data-test-id": ve.e
				}, i.a.createElement(he.a, {
					model: ne,
					handleVote: Z,
					isCountAnimShadowTestEnabled: k,
					isOverlay: R,
					isVoteCountAnimation: F,
					postId: ne.id
				}), _e && Object(je.b)(ne) && i.a.createElement(i.a.Fragment, null, i.a.createElement(Q.a, {
					post: ne
				}), i.a.createElement(Y.a, {
					post: ne
				})), !_e && i.a.createElement(i.a.Fragment, null, i.a.createElement(ge.a, {
					forceOpenInNewTab: u,
					hideAwards: de,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: j,
					isCurrentUserProfilePost: I,
					isOverlay: !!R,
					isTopicPage: !1,
					post: ne,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!R && !ne.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: Ee,
					shouldShowFollowButton: nt,
					isFollowed: L,
					onFollowPostClick: at
				}), dt, ((e, t, s, o) => e.source && !t && (s || o))(ne, s, R, j) && i.a.createElement(xe.a, {
					post: ne,
					isCommentsPage: j
				})), i.a.createElement(X.a, {
					className: j ? Ye.a.leftPadding : void 0,
					post: ne,
					showCategoryTag: e.isInCategoriesExperiment && j,
					sendEvent: ae
				}), Ee && st && i.a.createElement(Ue, {
					isAdminOrMod: E,
					post: ne,
					subredditOrProfile: Ee
				}), _ ? i.a.createElement(le, {
					post: ne
				}) : ze && i.a.createElement(pe.a, {
					className: Object(p.a)(Ye.a.LargePostMedia, {
						[Ye.a.isCommentsPage]: j
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: R,
					isOverlay: R,
					post: ne,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !R,
					showCentered: !0,
					scrollerItemRef: ie
				}), ye && Xe && Xe.url && i.a.createElement(K.a, {
					className: Ye.a.adLinkWrapper
				}, i.a.createElement(G.a, {
					post: ne,
					adLinkContent: Qe
				})), V && Te && Ve && i.a.createElement(se.a, {
					onIgnoreReports: W,
					reportable: ne
				}), i.a.createElement(ee.d, null), de && i.a.createElement(q.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: ne,
					tooltipType: R ? Ce.c.Lightbox : void 0
				}), i.a.createElement("div", {
					className: Ye.a.controlsContainer
				}, i.a.createElement($.c, {
					currentUser: o,
					forceOpenInNewTab: u,
					hasModFlairPerms: Ne,
					hasModFullPerms: Me,
					hasModPostPerms: Te,
					isOverlay: R,
					modModeEnabled: V,
					onIgnoreReports: W,
					onOpenReportsDropdown: H,
					post: ne,
					showEditPost: Be,
					showEditFlair: ce,
					tooltipType: R ? Ce.c.Lightbox : void 0,
					useFlatlistBreakpoints: He,
					isCommentCountAnimation: w,
					isCountAnimShadowTestEnabled: k
				}), ct)));
				const mt = Object(r.useCallback)((e, t) => Object(P.h)(e, t), []);
				return i.a.createElement(re.a, {
					className: Object(p.a)(t, Ye.a.postContainer, {
						[Ye.a.hasEventMeta]: Object(Pe.a)(ne)
					}),
					isOverlay: R,
					post: ne,
					eventFactory: R ? y.b : mt,
					onClick: Le
				}, i.a.createElement(J.a, {
					post: ne
				}), De)
			}))
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, s) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Z
			})), s.d(t, "a", (function() {
				return $
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				p = s("./node_modules/shallowequal/index.js"),
				u = s.n(p),
				h = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/ads/index.ts"),
				g = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				x = s("./src/lib/fastdom/index.ts"),
				f = s("./src/lib/lessComponent.tsx"),
				v = s("./src/lib/opener/index.ts"),
				O = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				P = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				E = s("./src/reddit/components/Scroller/Simple.tsx"),
				w = s("./src/reddit/constants/adEvents.ts"),
				j = s("./src/reddit/constants/componentSizes.ts"),
				k = s("./src/reddit/constants/postLayout.ts"),
				I = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/controls/OutboundLink/index.tsx"),
				S = s("./src/reddit/helpers/getClickInfo.ts"),
				L = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				T = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/helpers/brandSafety/index.ts"),
				R = s("./src/reddit/helpers/trackers/ads.ts"),
				A = s("./src/lib/LRUCache/index.ts"),
				F = s("./src/telemetry/index.ts"),
				B = s("./src/telemetry/models/Timer.ts"),
				V = s("./src/reddit/components/PostList/index.m.less"),
				D = s.n(V);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = 500, H = new A.a(W), K = new A.a(W), G = new A.a(W), q = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, z = f.a.div("SeeMore", D.a), Y = f.a.wrapped(T.a, "ArrowRight", D.a), Q = (e, t, s, o, n, r, i, a, d) => {
				const c = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}-${r}`;
				let l = H.get(c);
				return void 0 === l && (l = () => {
					s && i.onBottomViewed(o, n), i.trackOnPostEnteredViewport(e, t, a, d)
				}, H.set(c, l)), l
			}, J = (e, t, s, o, n) => {
				const r = `left-${e}-${t}`;
				let i = K.get(r);
				return void 0 === i && (i = r => {
					s.trackOnPostExitedViewport(e, t, r, o, n)
				}, K.set(r, i)), i
			}, Z = (e, t, s = !1) => {
				const o = `click-${e}`;
				let n = G.get(o);
				return void 0 === n && (n = (e, o, n, r, i) => {
					if (o.isSponsored) {
						t.fireAdPixelsOfType(o, w.a.Click);
						const {
							source: e
						} = Object(b.t)(o, r);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							n && (t = Object(_.a)(o.id, n, t).url), Object(R.a)(o, i), Object(v.d)(t, v.c.BLANK)
						}
					} else t.openPost({
						postOrComment: o,
						clickInfo: Object(S.a)(e),
						isFrontpage: s
					})
				}, G.set(o, n)), n
			}, X = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class $ extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new A.a(W), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = c()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = r()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, o = e(), n = [];
						o.forEach(e => n.push(e.id));
						const r = n.map(e => t[e]).filter(Boolean),
							i = r.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(M.a)(r, i))
					}, C.d, {
						leading: !0
					}), this.eventFactoryHandler = (e, t, s) => this.props.postClickEventFactory(e, t, s, this.props)
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && F.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = F.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = F.c.end(this.timerId);
						setTimeout(() => Object(F.b)(C.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					void 0 !== this.timerId && F.c.cancel(this.timerId), e.postIds.length && (this.timerId = F.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (x.a.read(() => this.checkAndSendScreenview()), this.timerId && F.c.has(this.timerId)) {
						const e = F.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(F.b)(C.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const o = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					o && o !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(o)
				}
				componentWillUnmount() {
					this.timerId && F.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return F.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = F.c.end(e);
					setTimeout(() => {
						s(t(o, B.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						postsById: t,
						triggerNewPostPill: s,
						...o
					} = this.props, {
						postsById: n,
						triggerNewPostPill: r,
						...i
					} = e, a = Object.keys(o), d = Object.keys(i);
					if (d.length !== a.length) return !0;
					if (d.some(e => {
							let t = !1;
							return t = "function" == typeof o[e] || "object" == typeof o[e] ? !u()(o[e], i[e]) : o[e] !== i[e]
						})) return !0;
					if (t === n) return !1;
					if (s !== r) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((o, r) => {
							const i = 0 === r;
							return s({
								isFirstPost: i,
								layout: e,
								post: t[o]
							}) !== s({
								isFirstPost: i,
								layout: e,
								post: n[o]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, o) {
					const {
						currentProfileName: n,
						hostPostData: r,
						isCommentPermalink: i,
						isCommentsPage: a,
						isFrontpage: d,
						isProfilePostListing: c,
						isTopicPage: l,
						isCommentCountAnimationEnabled: p,
						isVoteCountAnimationEnabled: u,
						isCountAnimShadowTestEnabled: h,
						listingBelowVariant: b,
						listingKey: g,
						listingName: x,
						pageLayer: f,
						pageReferrer: v,
						redditStyle: y,
						shouldHideFlair: P,
						triggerNewPostPill: E,
						postIds: w
					} = this.props, j = 0 === t, I = `post-${o}-${e}-${t}-${s?"last-index":""}-${x}-${g}-${v}`;
					let _;
					if (void 0 === (_ = this.scrollChildCache.get(I))) {
						const {
							inSubredditOrProfile: S,
							postsById: T
						} = this.props, M = T[e], R = M.crosspostRootId && T[M.crosspostRootId] ? T[M.crosspostRootId] : M;
						M.crosspostRootId && !T[M.crosspostRootId] && O.c.withScope(e => {
							e.setExtra("errorType", C.r.API), e.setExtra("description", `Post ${M.id} is crosspost of ${M.crosspostRootId}, but ` + `${M.crosspostRootId} details are missing in the state`), O.c.captureMessage("Crosspost parent details are missing")
						});
						const A = this.props.postComponentForLayout({
							isCrosspost: !!M.crosspostRootId,
							isFirstPost: j,
							layout: o,
							post: R
						});
						let F = `post-list-item-[layout: ${o}]-[postId: ${e}]`;
						this.props.listingBelowVariant && g && (F += `--${g}`);
						const B = Q(e, o, s, g, x, v, this.props, t, this.props.hostPostData),
							V = J(e, o, this.props, t, f),
							D = Z(e, this.props, d),
							U = R.media && R.media.type === N.o.EMBED ? R.media.provider : null,
							W = p && !M.isSponsored,
							H = u && !M.isSponsored && !M.isScoreHidden;
						_ = {
							estHeight: Object(L.c)(M, o),
							id: e,
							isFocusable: !(!R.media || !(o === k.g.Large || o === k.g.Classic && Object(N.G)(R.media))) && (N.d.has(R.media.type) && (!U || !N.s.has(U)) && !R.isSpoiler && !R.isNSFW),
							trackOnEnteredViewport: B,
							trackOnExitedViewport: V,
							render: ({
								className: o,
								height: p,
								width: u,
								remeasure: C,
								setScrollerChildRef: v,
								shouldLoadInitially: O
							}) => m.a.createElement(A, {
								className: o,
								currentProfileName: n,
								key: F,
								availableWidth: u,
								eventFactory: this.eventFactoryHandler,
								first: j,
								forceLoadMedia: O,
								hostPostData: r,
								inSubredditOrProfile: S,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: d,
								isProfilePostListing: c,
								isTopicPage: l,
								isCommentCountAnimationEnabled: W,
								isVoteCountAnimationEnabled: H,
								isCountAnimShadowTestEnabled: h,
								listingBelowVariant: b,
								listingIndex: t,
								listingKey: g,
								listingName: x,
								pageLayer: f,
								last: s,
								onClickPost: D,
								onSizeChanged: C,
								postId: e,
								postIds: w,
								redditStyle: y,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: v,
								shouldHideFlair: P,
								onceInViewport: E
							})
						}, this.scrollChildCache.set(I, _)
					}
					return _
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return m.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: o,
						onTryAgain: n,
						postListPlaceholderComponent: r
					} = this.props;
					if (s) return;
					const i = r;
					return m.a.createElement("div", {
						className: D.a.placeholder
					}, m.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && m.a.createElement(P.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: o,
						loadMoreClassName: n,
						onLoadMore: r
					} = this.props;
					if (!s) return m.a.createElement("div", {
						className: D.a.placeholder
					}, m.a.createElement(y.a, {
						className: n,
						isLoading: !!t,
						layout: o,
						countOverride: q[o]
					}), !!e && m.a.createElement(P.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: n,
						isTruncated: r,
						layout: i,
						location: a,
						loadMore: d,
						postIds: c,
						onLoadMore: p
					} = this.props;
					let u = c.map((e, t, s) => {
						const o = t === c.length - 1;
						return this.scrollChildForPost(e, t, o, i)
					});
					n && (u = X(u, n));
					const b = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						x = a ? Object(o.e)(a) : null,
						f = x || r;
					return m.a.createElement(l.Fragment, null, m.a.createElement(E.b, {
						innerRef: this.updateScrollerRef,
						className: f ? D.a.truncatedPostList : Object(g.a)(D.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: d && d.token ? d.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: p,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: b,
						viewportTopPadding: j.f
					}, u), x && m.a.createElement(z, {
						className: D.a.seeMoreButton
					}, m.a.createElement(I.a, {
						className: D.a.seeMorePostsText,
						to: Object(h.a)(x, {
							type: C.Vb.Posts
						})
					}, U._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(Y, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			$.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: m.a.Fragment
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				container: "_14-YvdFiW5iVvfe5wdgmET",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/components/PostTopLine/index.m.less"),
				P = s.n(y);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: n,
				hideNSFWPref: y,
				hostPostData: E,
				iconClassName: w,
				inSubredditOrProfile: j,
				isCommentsPage: k,
				isCompactPinnedPost: I,
				isCurrentUserProfilePost: _,
				isOverlay: S,
				isTopicPage: L,
				listingKey: T,
				post: N,
				shouldShowSubscribeButton: M,
				showCornerOutboundLink: R,
				showSubreddit: A,
				showSubredditIcon: F,
				subredditOrProfile: B,
				isFollowed: V,
				shouldShowFollowButton: D,
				onFollowPostClick: U
			}) => {
				const W = n || L;
				return r.a.createElement("div", {
					className: Object(i.a)(P.a.container, e)
				}, A && B && r.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, r.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: B.url
				}, F && r.a.createElement(p.b, {
					className: Object(i.a)(P.a.subredditIcon, w),
					shouldHideNsfwIcon: y,
					subredditOrProfile: B
				}))), r.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, A && r.a.createElement(d.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), r.a.createElement(m.d, {
					className: P.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: S ? m.c.Lightbox : void 0,
					post: N,
					showSub: A,
					subredditOrProfile: B
				}), r.a.createElement(l.a, {
					className: P.a.postBadges,
					displayText: B ? B.displayText : null,
					inSubredditOrProfile: j,
					isCompactPinnedPost: I,
					post: N,
					tooltipType: S ? m.c.Lightbox : void 0
				}), !W && r.a.createElement(a.a, {
					isPostDetail: k,
					thing: N,
					tooltipType: S ? m.c.Lightbox : void 0
				})), B && A && M && !_ && r.a.createElement(h.a, {
					className: P.a.SubscribeButton,
					getEventFactory: e => Object(x.h)(N.id, e ? "unsubscribe" : "subscribe", "post", T, E),
					identifier: {
						name: B.name,
						type: Object(O.h)(B) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: N.id,
					size: g.c.XS
				}), R && r.a.createElement(C.b, {
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(v.D)(N),
					source: N.source
				}, r.a.createElement(f.a, {
					className: P.a.outboundLinkIcon
				})), D && r.a.createElement(c.a, {
					isFilled: !!V,
					onClick: U,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/RecommendedPostList/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				footer: "_1khvWSB4GNuM2XwSjluHzO",
				background: "_3P_3k_jLv_J8ieIol9GqFL",
				layout: "_3CzLjB_82xAxB3iyad5yLM",
				arrow: "_3P6Ag4hY0u5ujhvLSAAVUH"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsHeader: "_1UbFWXvPTlrPngGxKndM-h",
				smallBanner: "_3O03kg0NTHcVFAyOQNoptz",
				footer: "Cvt0D6iVwU5TI0SY2nIGC",
				textBanner: "_1_-Wwc76dn19ch_lxyp8hf",
				container: "_2l7c_Oz0UVsamALvPrlznq",
				redditStyle: "_3f1Tk2rNUQGOPokixOdO6a",
				homeUpsellBanner: "HxVtNYGfeayfU1THFnAzK",
				homeUpsellBannerBorder: "_3afoK8x8kiKzCgwyofmvxu",
				postList: "_13FxmZ1xHIcRd_CuOaiyfo",
				loadMore: "_2gnvYSohivzo1V12YQI8DY"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/noop.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				b = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/constants/elementIds.ts"),
				x = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/constants/page.ts"),
				v = s("./src/reddit/constants/postLayout.ts"),
				O = s("./src/reddit/helpers/postCollection.ts"),
				y = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				P = s("./src/reddit/helpers/trackers/lightbox.ts"),
				E = s("./src/reddit/helpers/trackers/screenview.ts"),
				w = s("./src/reddit/selectors/chatPost.ts"),
				j = s("./src/reddit/selectors/commentsListTruncated.ts"),
				k = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				I = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				_ = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				S = s("./src/reddit/selectors/i18n/index.ts"),
				L = s("./src/reddit/selectors/telemetry.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				N = s("./src/lib/classNames/index.ts"),
				M = s("./src/reddit/constants/listings.ts"),
				R = s("./src/reddit/controls/InternalLink/index.tsx"),
				A = s("./src/reddit/helpers/name/index.ts"),
				F = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				B = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				V = s.n(B);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var U = Object(m.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: o,
						shouldShowNsfwListingBelow: n,
						subredditOrProfile: r
					} = e, {
						primaryColor: i
					} = r;
					let d = null,
						c = r.url;
					return n ? (c = M.c[M.b.Popular], d = D._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : d = o ? D._("See more posts like this in {subredditName}", [D._param("subredditName", Object(A.c)(r.displayText))], {
						hk: "pLxW5"
					}) : D._("Continue browsing in {subredditName}", [D._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(R.a, {
						className: Object(N.a)(V.a.footer, t),
						onMouseDown: s,
						to: c,
						style: {
							backgroundColor: i
						}
					}, a.a.createElement("div", {
						className: V.a.background
					}), a.a.createElement("div", {
						className: V.a.layout
					}, d, a.a.createElement(F.a, {
						className: V.a.arrow
					})))
				}),
				W = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				H = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				K = s.n(H);
			const G = Object(c.a)((e, {
					isOverlay: t
				}) => t, j.a, k.b, (e, t, s) => !((!t || s) && e)),
				q = Object(c.a)((e, {
					post: t
				}) => !!t && Object(O.a)(t), T.I, T.J, w.d, G, (e, t, s, o, n) => !t && !s && !o && !e && n),
				z = Object(c.a)((e, {
					post: t
				}) => t, I.c, L.request, L.subreddit, (e, t, s, o) => {
					const n = !!e && void 0 !== e.isEligibleForLinkedPosts;
					let r, i = "";
					if (t && e && n) {
						const {
							isEligibleForLinkedPosts: n,
							id: a
						} = e;
						i = Object(p.a)(a, Object(I.a)(t) || !n), r = {
							canonicalUrl: s.canonical_url,
							baseUrl: s.base_url,
							hostPostId: a,
							isEligibleForLinkedPosts: n,
							shouldShowLinkedPosts: n && !Object(x.ee)(t) && !Object(I.a)(t),
							subreddit: o
						}
					}
					return {
						hostPostData: r,
						isEligibilityLoaded: n,
						listingBelowVariant: t,
						linkedPostsListingKey: i
					}
				}),
				Y = Object(c.c)({
					listingBelowLinkedPostsData: z,
					nsfwListingBelowVariant: _.a,
					shouldShowListingBelow: q,
					shouldShowNsfwListingBelow: S.b
				}),
				Q = Object(d.b)(Y, e => ({
					loadMorePosts: t => e(Object(h.r)({
						sort: l.U.HOT,
						subredditName: t
					}))
				}));
			class J extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(C.d) : null, this.onViewed = (e, t) => Object(E.f)(this.listingKey(), l.U.TOP, t, e, l.bc.WEEK), this.onFooterClick = e => {
						this.props.sendEvent(Object(P.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						shouldShowNsfwListingBelow: e,
						listingBelowLinkedPostsData: {
							linkedPostsListingKey: t,
							listingBelowVariant: s
						},
						post: o,
						subredditOrProfile: n
					} = this.props;
					return s ? t : e && o && o.id ? Object(W.a)(o.id) : Object(u.a)(n.name, l.U.TOP, {
						t: l.bc.WEEK
					})
				}
				renderSmallBanner() {
					const {
						listingBelowLinkedPostsData: e,
						nsfwListingBelowVariant: t,
						shouldShowNsfwListingBelow: s,
						subredditOrProfile: n,
						theme: r
					} = this.props, {
						isEligibilityLoaded: i,
						hostPostData: d,
						listingBelowVariant: c
					} = e;
					if (c && !Object(x.ee)(c) && !Object(I.a)(c) && !i) return a.a.createElement("div", {
						className: K.a.smallBanner
					});
					const {
						name: l
					} = n, m = Object(y.a)(r.newCommunityTheme.canvas);
					let p = null;
					return p = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? o.fbt._("More posts from the {name} community", [o.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(I.b)(c) ? o.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === x.Tc.SfwRecs ? o.fbt._("Top posts on Reddit this week", null, {
						hk: "w3BDa"
					}) : t === x.Tc.DeRecs ? o.fbt._("Popular Posts Near You", null, {
						hk: "22vlW0"
					}) : o.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: K.a.smallBanner,
						style: {
							color: m
						}
					}, p)
				}
				render() {
					const {
						contentContainerRef: e,
						listingBelowLinkedPostsData: t,
						shouldShowListingBelow: s,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: n
					} = this.props, {
						hostPostData: i,
						listingBelowVariant: d
					} = t;
					if (!s) return null;
					const c = !!(null == i ? void 0 : i.shouldShowLinkedPosts);
					return a.a.createElement("div", {
						className: K.a.container
					}, this.renderSmallBanner(), a.a.createElement(b.a, {
						className: K.a.postList,
						disablePlaceholder: !0,
						forcedLayout: v.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: i,
						isTruncated: !0,
						listingBelowVariant: d,
						listingKey: this.listingKey(),
						listingName: f.c.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: K.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						shouldHideFlair: !0
					}), a.a.createElement(U, {
						className: K.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: c,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: n
					}))
				}
			}
			t.a = Q(Object(m.a)(Object(g.c)(J)))
		},
		"./src/reddit/components/RichTextEditor/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_3Yo9aCwUoJBBuPKwf3r5cP",
				mCollapsed: "_225DoZxfrLcZu0fM8-Svk8",
				prompt: "_3CuuiBuYvA4VXTClabDCUK",
				toolbar: "_31gqZmjkDlF5-81EKQ7w_Y",
				topToolbar: "_6rO7u4xvTeWjMNR68asbw",
				bottomToolbar: "_2Qh8N3s0Z7NWIPCVBDCcxH"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/FocusableContent/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = s.n(d);
			t.a = ({
				className: e,
				isCommentBoxDesignEnabled: t,
				isLoading: s,
				toolbarPosition: o
			}) => n.a.createElement("div", {
				className: e
			}, n.a.createElement(i.a, {
				isFocused: !1
			}, !t && "top" === o && n.a.createElement("div", {
				className: Object(r.a)(c.a.toolbar, c.a.topToolbar, Object(a.a)({
					isLoading: s
				}))
			}), n.a.createElement("div", {
				className: Object(r.a)(c.a.content, {
					[c.a.mCollapsed]: t
				})
			}, n.a.createElement("div", {
				className: Object(r.a)(c.a.prompt, Object(a.a)({
					isLoading: !0
				}))
			})), !t && "bottom" === o && n.a.createElement("div", {
				className: Object(r.a)(c.a.toolbar, c.a.bottomToolbar, Object(a.a)({
					isLoading: s
				}))
			})))
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");
			t.a = Object(r.b)((e, {
				postId: t
			}) => ({
				canShowAd: Object(i.a)(e, {
					postId: t
				}) && !Object(d.A)(e) && !Object(a.a)(e)
			}))(({
				canShowAd: e,
				postId: t,
				commentsPageKey: s,
				...o
			}) => e ? n.a.createElement(c.a, o) : null)
		},
		"./src/reddit/components/SubredditForkingCTA/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/constants/comments.ts"),
				d = s("./src/reddit/models/Subreddit/index.ts"),
				c = s("./src/reddit/selectors/comments.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/makeCommentsPageKey/index.ts");
			const h = Object(o.a)({
					resolved: {},
					chunkName: () => "SubredditForkingCTA",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("SubredditForkingCTA").then(s.bind(null, "./src/reddit/components/SubredditForkingCTA/SubredditForkingCTA.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditForkingCTA/SubredditForkingCTA.tsx"
					}
				}),
				b = [{
					low: 0,
					high: 1e5,
					threshold: 100
				}, {
					low: 1e5,
					high: 3e5,
					threshold: 100
				}, {
					low: 3e5,
					high: 8e5,
					threshold: 100
				}, {
					low: 0,
					high: 1 / 0,
					threshold: 100
				}],
				g = (e, t) => {
					const s = Object(m.j)(e),
						o = Object(u.a)(t.postId),
						n = Object(c.o)(e, {
							...t,
							commentsPageKey: o
						}),
						r = Object(c.k)(e, {
							...t,
							commentsPageKey: o
						}).reduce((t, s) => {
							var o;
							const r = Object(c.l)(e, {
								commentLink: s
							});
							return s.type !== a.a.Comment && 0 !== (null === (o = n[s.id]) || void 0 === o ? void 0 : o.depth) || t.push(r), t
						}, []).sort((e, t) => t.score - e.score).slice(0, 5);
					return (null == s ? void 0 : s.isEmployee) || !!r.find(e => e.authorId === (null == s ? void 0 : s.id))
				},
				C = (e, t) => {
					const s = Object(m.J)(e),
						o = Object(l.G)(e, t),
						n = Object(l.T)(e, {
							...t,
							disallowProfile: !0
						});
					if (!s) return !1;
					if ((null == n ? void 0 : n.type) !== d.f.Public || n.isNSFW || n.isQuarantined || o.source) return !1;
					const r = b.find(({
						low: e,
						high: t
					}) => t <= n.subscribers && n.subscribers > e);
					return !(!r || !o.numComments || r.threshold > o.numComments) && !!g(e, t)
				},
				x = () => Object(p.c)({
					shouldLoadCTA: C
				}),
				f = Object(i.b)(x),
				v = ({
					shouldLoadCTA: e,
					postId: t
				}) => e ? r.a.createElement(h, {
					postId: t
				}) : null,
				O = Object(n.memo)(f(v))
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/components/Widgets/AdRules/index.m.less": function(e, t, s) {
			e.exports = {
				Rule: "_3NwusXLUvLTrYmCFOYpDIA",
				rule: "_3NwusXLUvLTrYmCFOYpDIA",
				RuleIndex: "McQvObPSnfCkWc6C-ti6P",
				ruleIndex: "McQvObPSnfCkWc6C-ti6P",
				RuleTitle: "_2-jOphPs-FiWN_Da514451",
				ruleTitle: "_2-jOphPs-FiWN_Da514451"
			}
		},
		"./src/reddit/components/Widgets/AdRules/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				c = s.n(d);
			const l = i.a.div("Rule", c.a),
				m = i.a.div("RuleIndex", c.a),
				p = i.a.div("RuleTitle", c.a);
			t.a = e => r.a.createElement(a.a, {
				className: e.className,
				title: o.fbt._("Rules for Reddit Ads", null, {
					hk: "3IMHuS"
				}),
				redditStyle: !0
			}, r.a.createElement(l, null, r.a.createElement(m, null, 1, "."), r.a.createElement(p, null, o.fbt._("Keep language civil", null, {
				hk: "2poAMk"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 2, "."), r.a.createElement(p, null, o.fbt._("Comments must be relevant to the Promoted Post and contribute to discussion", null, {
				hk: "zAMr0"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 3, "."), r.a.createElement(p, null, o.fbt._("Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", null, {
				hk: "19a5UD"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 4, "."), r.a.createElement(p, null, o.fbt._("No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post", null, {
				hk: "BvXoq"
			}))))
		},
		"./src/reddit/components/Widgets/ReredditLink/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "ReredditLink",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ReredditLink").then(s.bind(null, "./src/reddit/components/Widgets/ReredditLink/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Widgets/ReredditLink/index.tsx"
				}
			})
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "b", (function() {
				return I
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				C = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/experiments/survey.ts"),
				f = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				v = s("./src/reddit/selectors/listings.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/tracking.ts");

			function E() {
				return Object(u.t)({
					currentProfileName: u.h,
					isCommentPermalink: u.v,
					isCommentsPage: u.w,
					isFrontpage: u.y,
					isPredictionsPage: u.L,
					isProfilePostListing: u.I,
					isTopicPage: u.O,
					pageLayer: e => e
				})
			}
			const w = E(),
				j = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: C.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.P)(e, t),
					loadMore: (e, t) => t.isPredictionsPage ? null : Object(v.g)(e, t),
					postsById: (e, t) => {
						if (t.isPredictionsPage) {
							const s = Object(y.D)(e, t.listingName);
							return Object(f.k)(e, {
								subredditId: s
							})
						}
						return Object(O.R)(e, {
							...t
						})
					},
					postIds: Object(r.a)((e, {
						listingKey: t,
						listingName: s,
						isPredictionsPage: o,
						inSubredditOrProfile: n
					}) => {
						if (o) {
							const t = Object(y.D)(e, s);
							return Object(f.l)(e, {
								subredditId: t
							})
						}
						return Object(O.D)(e, t, s, n)
					}),
					subredditsById: y.Z,
					viewportDataLoaded: P.a,
					pageReferrer: u.S,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: x.d
				},
				k = Object(n.c)(j),
				I = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, o, n) => {
						e(c.N(t, o, n))
					},
					trackOnPostExitedViewport: (t, s, o, n, r) => {
						e(c.O(t, o, n, r))
					},
					surveyTriggerScrollCounted: () => e(Object(m.h)())
				}),
				_ = e => Object(h.b)({
					...e
				}),
				S = (e, t, s, o) => {
					const {
						listingKey: n,
						hostPostData: r,
						listingBelowVariant: i
					} = o;
					return Object(b.h)(e, t, "post", n, r, i, void 0)
				},
				L = Object(o.b)(k, I, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: _,
					postClickEventFactory: S
				}));
			t.a = e => Object(p.c)(w(L(e)))
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = n.a.createContext(() => () => {})
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/reddit/helpers/parseUrl.ts");
			const n = ["old", "new", "en", "www", "np", "m"],
				r = ["reddit.com", "reddit.local"].concat("").concat(n.map((function(e) {
					return e + ".reddit.com"
				}))).concat(n.map((function(e) {
					return e + ".reddit.local"
				}))),
				i = ["mod.reddit.com"],
				a = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: r.concat("redd.it"),
						pathnameComponents: ["postID36"],
						pathname: /^\/([A-Za-z0-9]+)\/?$/
					},
					postDetail: {
						pathnameComponents: ["postID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)(?:\/\w+)?\/?$/
					},
					comment: {
						pathnameComponents: ["postID36", "commentID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)\/\w+\/(\w+)\/?$/
					},
					modmailConversation: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function d(e) {
				return (e.match(new RegExp(o.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(a).some((function(s) {
						return t = function(e, t) {
							const s = a[e];
							if (!a) throw new Error("Could not find reddit URL spec: " + e);
							const n = Object(o.a)(t);
							if (!n) return void console.error("Could not parse url", t);
							if (-1 === (s.hostnames || r).indexOf(n.hostname)) return;
							const i = n.pathname.match(s.pathname);
							if (i) {
								return {
									url: t,
									routeName: e,
									components: s.pathnameComponents.reduce((function(e, t, s) {
										return e[t] = i[s + 1], e
									}), {})
								}
							}
						}(s, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = e => {
				window.resonateAnalytics && window.resonateAnalytics.initialize || function() {
					const e = window.resonateAnalytics = window.resonateAnalytics || [];
					if (!e.initialize) {
						if (e.invoked) return;
						e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "profile"], e.factory = function(t) {
							return function() {
								const s = Array.prototype.slice.call(arguments);
								return s.unshift(t), e.push(s), e
							}
						};
						for (let t = 0; t < e.methods.length; t++) {
							const s = e.methods[t];
							e[s] = e.factory(s)
						}
						e.load = function(e) {
							const t = document.createElement("script");
							t.type = "text/javascript", t.async = !0, t.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.resonate.com/analytics.js/v1/" + e + "/analytics.min.js";
							const s = document.getElementsByTagName("script")[0];
							s.parentNode.insertBefore(t, s)
						}, e.SNIPPET_VERSION = "1.0.0", e.load("101117480")
					}
				}(), window.resonateAnalytics && window.resonateAnalytics.page && window.resonateAnalytics.page(e)
			}
		},
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/reddit/selectors/telemetry.ts");
			const n = (e, t) => ({
					...Object(o.defaults)(e),
					media: Object(o.media)(e, t),
					profile: Object(o.profile)(e),
					subreddit: Object(o.subreddit)(e) || Object(o.subredditByPostOrCommentId)(e, t)
				}),
				r = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(o.post)(t, e),
					...n(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(o.post)(t, e),
					...n(t, e)
				})
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/react/index.js");

			function n() {
				const [e, t] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, n.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = ({
				className: e
			}) => n.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
			}), n.a.createElement("path", {
				d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/SquareLock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const d = e => n.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Trophy/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			})))
		},
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				l = s("./src/reddit/components/AlertBanner/heights.ts"),
				m = s("./src/reddit/components/AppRouter/index.tsx"),
				p = s("./src/reddit/components/LightboxHeader/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				b = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				f = s.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(r.b)(() => Object(i.c)({
					showFPR: C.H,
					showSuspended: C.O
				})),
				y = Object(d.a)(({
					className: e,
					isCollectionLayout: t,
					theme: s,
					...o
				}) => {
					const r = Object(g.a)({
						theme: s,
						...o
					});
					return n.a.createElement("div", v({
						className: Object(a.a)(f.a.fakeOverlay, e),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--fakelightbox-overlay-max-width": t ? `${u.h}px` : `${u.i}px`
						}
					}, o))
				});
			class P extends n.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR
						};
						return n.a.createElement(m.a, {
							className: Object(a.a)(f.a.fakeOverlayLightboxHeaderWrapper, {
								[f.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(f.a, t))
						}, n.a.createElement(p.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(y, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), n.a.createElement(c.a.Consumer, null, this.renderWrapper), n.a.createElement(h.a, e))
				}
			}
			t.a = O(P)
		},
		"./src/reddit/layout/page/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				lightboxContainer: "_1npCwF50X2J7Wt82SZi6J0",
				mIsCollectionLayout: "_2mmpCGz_MbQyZXoaIL_u6I",
				lightboxContent: "u35lf2ynn4jHsVUwPmNU",
				mNotCollectionLayout: "Dx3UxiK86VcfkFQVHNXNi",
				lightboxSidebar: "_2Xq-4oyrEvHjL5U_EeMnK8",
				defaultLightboxSidebar: "_20b4i5iUhjZQqDZ1BM_Q-9",
				fakeOverlay: "_1QwQLdEXq0cZZb7vcte4KK",
				fakeOverlayContainer: "_3OGqXkiUb_0ZMlksb26boO",
				fakeOverlayContent: "_3KaECfUAGLfWQPO5eNjMNl",
				fakeOverlayLightboxHeaderWrapper: "_9BEqyBVXtRCQxyeYwqJMB",
				wide: "_3lVCgGR2stdSvrxCS2yWD7",
				showDeprecated: "_2NxbeazXeXu0bSJRcwSxd8",
				showFPR: "Hpitc80wLQqDqDh9A37wr",
				showFpr: "Hpitc80wLQqDqDh9A37wr",
				showSuspended: "_39xFv40KohPmMxYVnMJmp"
			}
		},
		"./src/reddit/layout/page/Lightbox/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				a = s.n(i);
			const d = e => n.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(r.a)(a.a.lightboxContainer, {
						[a.a.mIsCollectionLayout]: e.isCollectionLayout,
						[a.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				c = e => n.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxContent, {
						[a.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[a.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				l = e => n.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxSidebar, {
						[a.a.defaultLightboxSidebar]: !e.isCollectionLayout,
						[a.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class m extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.container = null, this.setContainerRef = e => {
						this.container = e, this.props.containerRef && this.props.containerRef(e)
					}
				}
				render() {
					const {
						content: e,
						contentBanner: t,
						isCollectionLayout: s,
						isFakeOverlay: o,
						sidebar: r
					} = this.props;
					return n.a.createElement(d, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: o,
						tabIndex: -1
					}, n.a.createElement(c, {
						isCollectionLayout: s,
						isFakeOverlay: o,
						redditStyle: !0
					}, t, e), r && n.a.createElement(l, {
						isCollectionLayout: s,
						isFakeOverlay: o
					}, r))
				}
			}
			t.a = m
		},
		"./src/reddit/pages/CollectionCommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
				r = s("./node_modules/lodash/get.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				p = s("./src/reddit/constants/history.ts"),
				u = s("./src/reddit/contexts/Post/index.tsx"),
				h = s("./src/reddit/helpers/history/index.ts"),
				b = s("./src/reddit/models/Comment/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				C = s("./src/reddit/pages/CommentsPage/index.tsx"),
				x = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				f = s("./src/reddit/selectors/postCollection.ts"),
				v = s("./node_modules/reselect/es/index.js");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const y = Object(c.b)(() => Object(v.c)({
				primaryPostId: f.p
			}))(e => {
				const t = e.postId || e.primaryPostId;
				return t ? d.a.createElement(u.a, {
					postId: t
				}, d.a.createElement(C.CommentsPage, O({}, e, {
					postId: t
				}))) : null
			});
			t.default = Object(x.a)(e => {
				const {
					state: t
				} = e.location, s = i()(t, p.a.IsOverlay, !1), o = i()(t, p.a.CloseLocation, null), r = i()(t, p.a.ScrollOnLoad, !1);
				r && Object(h.c)(p.a.ScrollOnLoad);
				const a = e.match.params,
					{
						partialCommentId: c,
						partialPostId: u,
						subredditName: C,
						collectionId: x
					} = a,
					f = u ? Object(g.s)(u) : void 0,
					v = c && Object(b.h)(c),
					O = n()([...Object(l.a)(e.location.search)]),
					P = {};
				e.hasSortParam && (P.sort = e.sort, P.hasSortParam = !0);
				const E = Object(m.a)(x, f, v, P);
				return d.a.createElement(y, {
					closeLocation: o,
					collectionId: x,
					commentId: v,
					commentsPageKey: E,
					isOverlay: s,
					location: e.location,
					postId: f,
					instanceId: O.instanceId,
					shouldScrollToComments: r,
					sort: e.sort,
					subredditName: C,
					onOtherDiscussions: !!O.onOtherDiscussions
				})
			})
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				commentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				linkOrOverlay: "_1eQ54MneFHfYv8GJO9o-jg",
				OtherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				d = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/helpers/path/index.ts"),
				m = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				p = s("./src/reddit/selectors/comments.ts"),
				u = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				h = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = Object(r.b)(() => Object(i.c)({
				headComment: p.x,
				post: p.H
			}));
			t.a = Object(c.c)(g(({
				commentId: e,
				headComment: t,
				isOverlay: s,
				post: o,
				postId: r,
				sendEvent: i
			}) => {
				var c;
				if (!o) return null;
				const p = null !== (c = o.numDuplicates) && void 0 !== c ? c : 0,
					u = void 0 !== e,
					g = o.permalink,
					C = p > 0,
					x = Object(l.b)(Object(a.e)(g));
				return u || C ? n.a.createElement("div", {
					className: h.a.CommentsNavigationPane
				}, u && n.a.createElement("div", null, n.a.createElement(d.a, {
					className: h.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(g)
				}, b._("View all comments", null, {
					hk: "3I5IX9"
				})), t && null !== t.parentId && n.a.createElement(d.a, {
					className: h.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(t.permalink + "?context=8&depth=9")
				}, b._("Show parent comments", null, {
					hk: "AVRCa"
				}))), C && n.a.createElement(d.a, {
					className: h.a.OtherDiscussionsLink,
					isOverlay: s,
					onClick: () => i(Object(m.a)(r)),
					to: x
				}, b._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [b._plural(p, "other discussion communities count")], {
					hk: "3oofZ8"
				}))) : null
			}))
		},
		"./src/reddit/pages/CommentsPage/index.m.less": function(e, t, s) {
			e.exports = {
				promoBanner: "_25nFZKgLc-Z-1ua1YEzuCL",
				DetailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				detailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				MoreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				moreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				PageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				pageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				LargePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				largePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				Spacer: "q6p33SkkiPu07qUoN_Kd",
				spacer: "q6p33SkkiPu07qUoN_Kd",
				CommentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				commentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				mIsInOverlay: "_3287nL7j7epK9JmDC3N1VR",
				CollectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				collectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				ChatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				chatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				OverviewCommentPost: "lfoKI-nM1Ps5Y1WhxJPc6",
				overviewCommentPost: "lfoKI-nM1Ps5Y1WhxJPc6",
				backgroundMargin: "_34i0o0-SanTnUOM8JXdW6f",
				isFirstInCommentList: "_22yjV_JLQY-BfOOW1wgsgI",
				isLastInCommentList: "_3QJoultgeMO-1x88lIzzSe"
			}
		},
		"./src/reddit/pages/CommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "getCommentsPageKeyById", (function() {
				return ct
			})), s.d(t, "CommentsPage", (function() {
				return gt
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s.n(n),
				i = s("./node_modules/lodash/get.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				p = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/models/PostDraft/index.ts"),
				g = s("./src/telemetry/index.ts"),
				C = s("./src/telemetry/models/Timer.ts"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/domUtils/index.ts"),
				O = s("./src/lib/fastdom/index.ts"),
				y = s("./src/lib/lessComponent.tsx"),
				P = s("./src/lib/makeCommentsPageKey/index.ts"),
				E = s("./src/lib/makeDraftKey/index.ts"),
				w = s("./src/lib/performanceTimings/index.tsx"),
				j = s("./src/reddit/actions/ads/index.ts"),
				k = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/comment/authoring.ts"),
				_ = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				S = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				L = s("./src/reddit/actions/login.ts"),
				T = s("./src/reddit/actions/pages/comments.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				M = s("./src/reddit/actions/upvotePrompt.ts"),
				R = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				A = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				F = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				B = s("./src/reddit/constants/componentSizes.ts"),
				V = s("./src/reddit/constants/elementIds.ts"),
				D = s("./src/reddit/constants/history.ts"),
				U = s("./src/reddit/constants/keycodes.ts"),
				W = s("./src/reddit/constants/posts.ts"),
				H = s("./src/reddit/constants/screenWidths.ts"),
				K = s("./src/reddit/contexts/ApiContext.tsx"),
				G = s("./src/reddit/contexts/PageLayer/index.tsx"),
				q = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				z = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Y = s("./src/reddit/selectors/experiments/upvotePrompt.ts"),
				Q = s("./src/reddit/featureFlags/profileCollections.ts"),
				J = s("./src/reddit/contexts/Post/index.tsx"),
				Z = s("./src/reddit/models/Comment/index.ts"),
				X = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/reddit/models/Subreddit/index.ts"),
				ee = s("./src/reddit/selectors/chatPost.ts"),
				te = s("./src/reddit/selectors/comments.ts"),
				se = s("./src/reddit/selectors/commentSelector.ts"),
				oe = s("./src/reddit/selectors/commentsListTruncated.ts"),
				ne = s("./src/reddit/selectors/discoveryUnit.ts"),
				re = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				ie = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				ae = s("./src/reddit/selectors/experiments/postSeo.ts"),
				de = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				ce = s("./src/reddit/selectors/meta.ts"),
				le = s("./src/reddit/selectors/moderatorPermissions.ts"),
				me = s("./src/reddit/selectors/posts.ts"),
				pe = s("./src/reddit/selectors/subreddit.ts"),
				ue = s("./src/reddit/selectors/tooltip.ts"),
				he = s("./src/reddit/selectors/user.ts"),
				be = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				ge = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Ce = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				xe = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				fe = s("./src/reddit/components/Comments/index.tsx"),
				ve = s("./src/reddit/components/Comments/States/index.tsx"),
				Oe = s("./src/reddit/components/CommentsChat/Loader.ts"),
				ye = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Pe = s("./src/reddit/components/CommentSort/index.tsx"),
				Ee = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				we = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				je = s("./src/reddit/components/HeaderImage/index.tsx"),
				ke = s("./src/reddit/components/Hovercards/helpers.ts"),
				Ie = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				_e = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Se = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Le = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Te = s("./src/reddit/components/JumpToContent/index.tsx"),
				Ne = s("./src/reddit/components/PostContent/index.tsx"),
				Me = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Re = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				Ae = s("./src/reddit/components/SubredditNav/index.tsx"),
				Fe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Be = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Ve = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				De = s("./src/reddit/helpers/history/index.ts"),
				Ue = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				We = s("./src/reddit/helpers/postCollection.ts"),
				He = s("./src/reddit/helpers/resonatePage/index.ts"),
				Ke = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Ge = s("./src/reddit/helpers/trackers/screenview.ts"),
				qe = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				ze = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				Ye = s("./src/reddit/layout/page/Listing/index.tsx"),
				Qe = s("./src/reddit/models/ContentGate.ts"),
				Je = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				Ze = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				Xe = s("./src/reddit/pages/CommentsPage/index.m.less"),
				$e = s.n(Xe);

			function et() {
				return (et = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const tt = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				st = ({
					condition: e,
					wrap: t,
					children: s
				}) => e ? t(s) : s,
				ot = 200,
				nt = 80,
				rt = 32,
				it = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-pages-CommentsPage-OtherDiscussions",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-pages-CommentsPage-OtherDiscussions").then(s.bind(null, "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx"
					}
				}),
				at = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-Collection",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-Collection").then(s.bind(null, "./src/reddit/components/Collection/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Collection/index.tsx"
					}
				}),
				dt = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-ContentGate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ContentGate").then(s.bind(null, "./src/reddit/components/ContentGate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ContentGate/index.tsx"
					}
				}),
				ct = ({
					postId: e,
					commentId: t,
					commentsPageKey: s
				}) => t ? Object(P.a)(e) : s,
				lt = e => {
					const {
						state: t
					} = e.location, s = a()(t, D.a.IsOverlay, !1), o = a()(t, D.a.CloseLocation, null), n = a()(t, D.a.ScrollOnLoad, !1);
					n && Object(De.c)(D.a.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(X.s)(i), l = r && Object(Z.h)(r);
					return m.a.createElement(J.a, {
						postId: c
					}, m.a.createElement(gt, {
						closeLocation: o,
						commentId: l,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: c,
						shouldScrollToComments: n,
						sort: e.sort,
						subredditName: d
					}))
				},
				mt = Object(G.t)(),
				pt = () => Object(h.c)({
					apiError: te.c,
					apiPending: te.d,
					canCommentAsModerator: (e, {
						postId: t
					}) => {
						const s = Object(me.T)(e, {
							postId: t
						});
						return !!(s && s.id && e.moderatingSubreddits[s.id])
					},
					comment: se.a,
					communityBannerDiscoveryUnit: ne.b,
					contentGateInfo: (e, {
						subredditName: t
					}) => Object(he.e)(e, t),
					currentUserShowNSFW: he.cb,
					dismissedSubreddits: re.a,
					fullyLoaded: te.u,
					hasModeratorPostPermissions: le.c,
					headComment: te.x,
					isActionBarAnimationEnabled: z.b,
					isAvatarsInCommentsEnabled: ie.a,
					isCountAnimShadowTestEnabled: z.e,
					isChatPost: ee.d,
					isCommentsListTruncated: oe.a,
					isLoggedIn: he.J,
					isNightmodeOn: he.V,
					isTooltipOpen: (e, t) => !!Object(ue.a)(e),
					origin: ce.j,
					post: me.G,
					postSEOV2IdCardVariant: ae.h,
					profileCollectionsEnabled: Q.a,
					replyComment: (e, {
						postId: t,
						commentId: s,
						commentsPageKey: o
					}) => Object(te.s)(e, {
						commentsPageKey: ct({
							postId: t,
							commentId: s,
							commentsPageKey: o
						})
					}),
					shouldOpenPostInNewTab: he.bb,
					subredditAboutInfo: (e, {
						subredditName: t
					}) => t ? Object(pe.v)(e, {
						subredditName: t
					}) : void 0,
					subredditOrProfile: me.T,
					userHovercardIsOpen: (e, t) => Object(ue.b)(Object(ke.b)({
						itemId: t.postId,
						tooltipIdPrefix: A.a,
						tooltipType: Me.c.StickyPost
					}))(e),
					userPrefs: he.ub,
					inResonatePilot: de.a,
					isUpvotePromptExpEnabled: Y.d
				}),
				ut = (e, t) => ({
					dismissTruncation: t => e(Object(be.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(_.a)()),
					setCommentFocus: t => e(k.f({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(T.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(N.i)()),
					onToggleTooltip: t => e(Object(N.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(L.h)()),
					openRegisterModal: () => e(Object(L.j)()),
					goToSubredditPage: t => e(Object(u.b)(t)),
					truncateCommentsList: () => e(Object(_.b)()),
					fetchCommentsNativeAd: t => e(Object(j.a)(t)),
					getIsTrackingCrossposts: t => e(Object(S.b)(t)),
					getPostCrowdControlLevel: t => e(Object(ge.b)(t)),
					triggerUpvotePrompt: (t, s, o) => {
						e(Object(M.b)(t, s, o))
					}
				}),
				ht = Object(p.b)(pt, ut);
			class bt extends m.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.setAdScrollItemRef = e => {
						this.adScrollItemRef = e, setTimeout(this.handleScroll), this.needsUpdatedMeasurements = !0
					}, this.setCommentAdRef = e => {
						this.commentAdRef = e
					}, this.handleScroll = c()(() => {
						if (!this.scrollContainerEl) return;
						this.needsUpdatedMeasurements && this.updateMeasurements();
						const {
							didPassAdScrollThreshold: e,
							didScrollPastPost: t,
							scrollContainerEl: s,
							scrollAdThreshold: o,
							scrollPostThreshold: n,
							props: {
								userHovercardIsOpen: r,
								onToggleTooltip: i,
								postId: a
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const d = s === window ? s.scrollY : s ? s.scrollTop : 0;
						this.scrollY = d, this.state.commentNativeAdId && (!e && void 0 !== o && d >= o && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== o && d < o && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== n && d >= n && (this.didScrollPastPost = !0), t && void 0 !== n && d < n && (this.didScrollPastPost = !1, r && O.a.write(() => {
							i(Object(ke.b)({
								itemId: a,
								tooltipIdPrefix: A.a,
								tooltipType: Me.c.StickyPost
							}))
						}))
					}, f.I), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(Ke.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
						this.needsUpdatedMeasurements = !0, this.handleScroll()
					}, this.updateCommentSortRef = e => {
						this.commentSortRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCommentFormRef = e => {
						this.commentFormRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCollPostWrapperRef = e => {
						this.collectionPostWrapperRef = e
					}, this.handleViewAllCommentsClick = () => {
						const {
							dismissTruncation: e,
							expandCommentsList: t,
							post: s
						} = this.props;
						t();
						const o = s && Object(X.r)(s) && s && s.belongsTo.id;
						o && e(o), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(Ve.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === U.b.F || e.keyCode === U.a.F,
							s = e.ctrlKey || e.metaKey;
						t && s && this.props.expandCommentsList()
					}, this.setLayoutRef = e => {
						this.setState({
							layoutRef: e
						})
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.didPassAdScrollThreshold = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						layoutRef: null,
						commentNativeAdId: null,
						isUpvotePromptTriggered: !1
					}
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						setCommentFocus: t
					} = this.props;
					e && t(e)
				}
				async componentDidMount() {
					var e;
					this.props.isUpvotePromptExpEnabled && (this.upvotePromptId = setTimeout(() => {
						this.props.triggerUpvotePrompt(this.props.postId, !1, () => this.setState({
							isUpvotePromptTriggered: !0
						}))
					}, Y.b));
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLoggedIn: o,
							isOverlay: n,
							post: r,
							shouldScrollToComments: i
						}
					} = this;
					if (r && !r.isSponsored && !r.isRemoved && r.belongsTo.type !== W.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(r.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (n ? (this.scrollContainerEl = document.getElementById(V.d), i && (t || s) && r && r.numComments ? this.scrollToComments() : O.a.write(() => {
							setTimeout(() => {
								Object(v.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(Ue.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(X.s)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), O.a.read(() => {
							this.props.isOverlay || Object(w.d)(w.c.CommentsPage, o)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						f.Ib.includes(e) && Object(He.a)(e)
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				UNSAFE_componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.postId !== this.props.postId) {
						const e = this.props.post && Object(We.a)(this.props.post);
						this.props.post && this.props.post.numComments ? O.a.read(this.handleScroll) : O.a.write(() => {
							e || Object(v.c)(this.scrollContainerEl, 0), O.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && O.a.write(() => {
							setTimeout(() => {
								Object(v.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = B.b + (this.props.isOverlay ? B.n : 0),
								s = t.getBoundingClientRect().top;
							let o;
							const n = (o = this.props.isOverlay ? document.getElementById(V.d) : document.getElementsByTagName("body")[0]) && o.getBoundingClientRect().top,
								r = Math.abs(n - s),
								i = this.props.isOverlay ? rt : r - e;
							(this.props.isOverlay ? o && o.scrollTop || 0 : window.pageYOffset) >= i && O.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(v.c)(o, i) : Object(v.c)(document, i)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					if (this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0, this.upvotePromptId && clearTimeout(this.upvotePromptId), this.props.isOverlay && this.props.isUpvotePromptExpEnabled && !this.state.isUpvotePromptTriggered) {
						const e = !0;
						this.props.triggerUpvotePrompt(this.props.postId, e)
					}
				}
				truncateCommentList() {
					const {
						dismissedSubreddits: e,
						subredditOrProfile: t,
						truncateCommentsList: s
					} = this.props, o = t && t.id;
					o && !e.includes(o) && s()
				}
				updateMeasurements() {
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = ot, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = ot)
				}
				addListeners() {
					const {
						isOverlay: e
					} = this.props;
					e && window.addEventListener("resize", this.updateWindowHeight), this.props.isCommentsListTruncated && window.addEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.addEventListener("scroll", this.handleScroll)
				}
				removeListeners(e) {
					const {
						isOverlay: t
					} = this.props;
					t && window.removeEventListener("resize", this.updateWindowHeight), e && this.props.isCommentsListTruncated !== e.isCommentsListTruncated && window.removeEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.removeEventListener("scroll", this.handleScroll)
				}
				scrollToComments() {
					O.a.read(() => {
						const e = document.getElementById(V.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - nt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - nt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), O.a.write(() => {
								Object(v.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => O.a.read(this.handleScroll))
							})
						}
					})
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						apiPending: t,
						commentsPageKey: s
					} = this.props;
					return g.c.has(s) && (e || !t || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					O.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: o,
							sort: n
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = g.c.end(t);
						o(Object(Ge.c)(t, s, e, C.TimerType.InApp, r, n))
					})
				}
				isCommentPermalink() {
					return void 0 !== this.props.commentId
				}
				renderPageError() {
					const {
						contentGateInfo: e,
						currentUserShowNSFW: t,
						isOverlay: s,
						post: o,
						subredditName: n
					} = this.props, r = !(!o || !o.isNSFW || t), i = Object(Be.a)(e, r, n);
					if (!i) return null;
					let a = m.a.createElement(dt, i);
					return s && (a = m.a.createElement(qe.a, {
						content: a
					})), a
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						closeLocation: s,
						commentId: o,
						commentsPageKey: n,
						isActionBarAnimationEnabled: r,
						isCountAnimShadowTestEnabled: i,
						isLoggedIn: a,
						isNightmodeOn: d,
						isOverlay: c,
						post: l,
						postId: p,
						postSEOV2IdCardVariant: u,
						profileCollectionsEnabled: h,
						sendEvent: b,
						sort: g,
						subredditOrProfile: C
					} = this.props, v = Object(ae.f)(u);
					if (!l) {
						if (t) return m.a.createElement(ve.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === f.m ? m.a.createElement(dt, {
							contentGateType: Qe.a.PostBlockedForLegalReason
						}) : m.a.createElement(ve.d, {
							postId: p,
							commentId: o,
							apiError: e,
							sort: g
						}) : m.a.createElement(ve.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const O = this.isCommentPermalink(),
						y = l.belongsTo.type === W.a.PROFILE,
						P = Object(We.a)(l) && (!y || h),
						E = !a;
					return tt.input.channel.postID = p, m.a.createElement(xt, {
						closeLocation: s,
						commentsPageKey: n,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: a,
						isOverlay: c,
						isSwapVariant: v,
						post: l,
						subredditOrProfile: C,
						shouldFitPageToContent: E,
						isCollectionLayout: P
					}, C && C.isQuarantined && m.a.createElement(Le.a, {
						subredditName: C.name
					}), m.a.createElement(Te.a, null), m.a.createElement("div", {
						className: Object(x.a)($e.a.PageContentWrapper, {
							[$e.a.LargePageContent]: P,
							[$e.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, P && m.a.createElement(at, {
						isOverlay: c,
						isNightmodeOn: d,
						postId: p
					}), m.a.createElement(st, {
						condition: P,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: $e.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Ne.a, {
						isCommentPermalink: O,
						isOverlay: c,
						postId: p,
						redditStyle: c,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: b,
						isActionBarAnimationEnabled: r,
						isCountAnimShadowTestEnabled: i
					}), this.state.commentNativeAdId && m.a.createElement("div", {
						ref: this.setCommentAdRef
					}, m.a.createElement(R.a, {
						key: `event-post-id-${l.id}`,
						isOverlay: c,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), C && !Object($.h)(C) && m.a.createElement(F.a, {
						contentContainerRef: this.state.layoutRef,
						isOverlay: c,
						post: l,
						subredditOrProfile: C
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: o,
						commentsPageKey: r,
						fullyLoaded: i,
						hasModeratorPostPermissions: a,
						headComment: d,
						isAvatarsInCommentsEnabled: c,
						isChatPost: l,
						isLoggedIn: p,
						isOverlay: u,
						location: h,
						onOtherDiscussions: g,
						openLoginModal: C,
						openRegisterModal: f,
						origin: v,
						post: O,
						postId: y,
						replyComment: P,
						sendEvent: w,
						sort: j,
						subredditAboutInfo: k,
						subredditOrProfile: _
					} = this.props;
					if (!O) return null;
					const S = this.isCommentPermalink(),
						L = [],
						T = O.isLocked && !s,
						N = !(S || O.isArchived || k && k.userIsBanned);
					if (T) L.push(m.a.createElement(_e.a, {
						key: "commentThreadBanner",
						subredditOrProfile: _
					}));
					else if (O.isArchived) L.push(m.a.createElement(Ie.a, {
						key: "commentThreadBanner"
					}));
					else if (N && !l && !g)
						if (p) {
							const e = Object(E.a)(b.c.replyToPost, y);
							L.push(m.a.createElement(Ce.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: b.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								submitAction: ({
									validate: t,
									...s
								}, o) => t ? I.t(y, r, e, s, o) : I.n(y, r, e, s, o),
								submitButtonText: n.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else L.push(m.a.createElement(xe.a, {
							key: "loggedOutCommentForm",
							location: h,
							openLoginModal: C,
							openRegisterModal: f,
							origin: v
						}));
					if (O.contestMode && L.push(m.a.createElement(Se.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), !l && !g && L.push(m.a.createElement(Pe.a, {
							commentId: o,
							elementRef: this.updateCommentSortRef,
							isOverlay: u,
							key: "commentSort",
							location: h,
							postId: y,
							sort: j,
							suggestedSort: O.suggestedSort
						}), m.a.createElement(Je.a, {
							commentId: o,
							commentsPageKey: r,
							isOverlay: u,
							key: "commentNavigation",
							postId: y
						})), L.push(m.a.createElement(Re.a, {
							postId: y
						})), !t || d || l || g)
						if (!e || d || g)
							if (g) L.push(m.a.createElement(it, {
								commentSort: j,
								key: "otherDiscussions",
								postId: y,
								isOverlay: u,
								postPermalink: O.permalink
							}));
							else if (l) {
						if (_ && _.id) {
							const e = P ? Object(E.a)(b.c.replyToComment, P.id) : Object(E.a)(b.c.replyToPost, y),
								s = ct({
									postId: y,
									commentId: o,
									commentsPageKey: r
								});
							L.push(m.a.createElement(Oe.a, {
								commentId: o,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !i && t,
								key: "commentsChat",
								postId: y,
								renderedInOverlay: u,
								subredditId: _.id
							}, ({
								scrollToBottom: t
							}) => p ? m.a.createElement(ye.a, {
								key: "chatCommentsForm",
								postId: y,
								replyComment: P,
								draftKey: e,
								commentsPageKey: s,
								isEditing: !1,
								scrollToBottom: t,
								sendEvent: w
							}) : m.a.createElement(xe.a, {
								key: "loggedOutCommentForm",
								className: $e.a.ChatLoggedOutForm,
								location: h,
								openLoginModal: C,
								openRegisterModal: f,
								origin: v
							})))
						}
					} else L.push(m.a.createElement("div", {
						className: Object(x.a)($e.a.CommentsPaneWrapper, {
							[$e.a.mIsInOverlay]: u
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(we.a, et({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: O.numComments,
						onClick: this.handleContentClick
					}), m.a.createElement(fe.a, {
						commentId: o,
						commentsPageKey: r,
						postId: y,
						renderedInOverlay: u
					})))), e && d ? L.push(m.a.createElement(ve.e, {
						key: "commentsErrorState",
						postId: y,
						commentId: o,
						sort: j,
						apiError: e
					})) : !i && t && L.push(m.a.createElement(ve.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					else L.push(m.a.createElement(ve.e, {
						postId: y,
						commentId: o,
						sort: j,
						apiError: e
					}));
					else this.didRenderLoading = !0, L.push(m.a.createElement(ve.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					return m.a.createElement(q.a.Provider, {
						value: this.sendEventWithName
					}, L)
				}
			}
			const gt = mt(Object(K.b)(ht(Object(Fe.c)(bt)))),
				Ct = y.a.wrapped(Ee.a, "DetailsPageSidebar", $e.a),
				xt = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: o,
						handleFakeLightboxClick: n,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: i,
						isLoggedIn: a,
						isOverlay: d,
						isSwapVariant: c,
						post: l,
						shouldFitPageToContent: p,
						subredditOrProfile: u
					} = e;
					if (!a && !d) return m.a.createElement(ze.a, {
						containerRef: o,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: n,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: u && m.a.createElement(Ee.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					if (d) return m.a.createElement(qe.a, {
						containerRef: o,
						content: t,
						isCollectionLayout: i,
						sidebar: u && m.a.createElement(Ee.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					const h = i ? B.i : H.a;
					return m.a.createElement(Ye.a, {
						containerRef: o,
						maxWidth: B.i,
						fitPageToContent: p,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: i,
						navBar: u && m.a.Children.toArray([m.a.createElement(je.a, {
							key: u.name,
							disableFullscreen: !0,
							headerText: u.name,
							maxWidth: h,
							prefixedHeaderText: u.displayText,
							subredditOrProfile: u,
							url: u.url
						}), !Object($.h)(u) && m.a.createElement(Ae.a, {
							disableFullscreen: !0,
							homeUrl: u.url,
							maxWidth: h,
							subredditId: u.id
						})]),
						sidebar: u && m.a.createElement(Ct, {
							commentsPageKey: s,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					})
				};
			t.default = Object(Ze.a)(lt)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				p = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				u = s("./src/reddit/models/Comment/index.ts"),
				h = s("./src/reddit/models/Post/index.ts");
			const b = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(h.s)(t)
				},
				g = (e, t, s) => {
					const o = b(e),
						r = (e => {
							const {
								partialCommentId: t
							} = e.match.params;
							return t && Object(u.h)(t)
						})(e),
						i = (e => {
							const {
								location: {
									search: t
								}
							} = e;
							return n()([...Object(c.a)(t)])
						})(e),
						a = {
							depth: i.depth && parseInt(i.depth, 10) || void 0,
							context: i.context && parseInt(i.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(l.a)(o, r, a)
				},
				C = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = b(t);
						return Object(p.a)(e, s)
					}
				}),
				x = Object(a.b)(C);

			function f(e) {
				return x(t => {
					const {
						hasSortParam: s,
						sortToUse: o
					} = t.commentsPageSort, n = g(t, s, o), r = Object(m.d)(t.match.path), a = {
						...t,
						commentsPageKey: n,
						hasSortParam: s,
						onOtherDiscussions: r,
						sort: o
					};
					return i.a.createElement(e, a)
				})
			}
		},
		"./src/reddit/selectors/commentsListTruncated.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = e => e.commentsListTruncated
		},
		"./src/reddit/selectors/dismissedTruncationList.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			var o = s("./node_modules/reselect/es/index.js");
			const n = e => e.dismissedTruncationList,
				r = Object(o.a)((e, {
					subredditOrProfile: t
				}) => t, n, (e, t) => {
					const s = e && e.id;
					return !!s && t.includes(s)
				})
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(o.a)(i.J, i.I, (e, t) => e || t),
				d = Object(o.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: n.C
				}), e => e === n.I.Enabled)
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(n.c)(e, {
				experimentEligibilitySelector: n.a,
				experimentName: o.o
			}) === o.r.Enabled
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.Hb
				});
				return !(!t || Object(o.ee)(t))
			}
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/meta.ts");
			const i = e => Object(n.c)(e, {
				experimentEligibilitySelector: e => !Object(r.d)(e) && "US" === Object(r.b)(e),
				experimentName: o.rd
			}) === o.zd.Enabled
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return d
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return O
			}));
			var o = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.S)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				m = [],
				p = Object(o.a)((e, t) => {
					const s = u(e, t);
					if (!s) return m;
					const o = Object(i.W)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : m
				}),
				u = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.S)(e, {
						subredditId: s
					}) : null
				},
				h = (e, t, s, o, n) => {
					const i = n.find(e => e <= t) || -1,
						a = n.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const o = s[t - 1],
							n = s[t],
							i = n && Object(r.G)(e, {
								postId: o
							}) || null,
							a = n && Object(r.G)(e, {
								postId: n
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, o)))
				},
				b = [3],
				g = Object(o.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const o = t.slice().sort();
					let n = -1;
					const i = Object(r.z)(e, {
							listingKey: s.listingKey
						}),
						a = [];
					return b.forEach(t => {
						let s = n + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !h(e, s, t, i, o);) s += 1;
							s < i.length && (a.push(s), n = s)
						}
					}), a
				}),
				C = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				f = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				O = e => {
					const t = Object(a.I)(e),
						s = n.d.geoSubredditRecommendationDULoggedIn(e),
						o = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && o
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(n.ee)(t)
				},
				d = Object(o.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/seo/reredditPromo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = s("./src/reddit/selectors/platform.ts");
			const i = new Date,
				a = i.getUTCFullYear(),
				d = i.getUTCMonth(),
				c = i.getUTCDate(),
				l = Date.UTC(2008, 0, 1),
				m = Date.UTC(a, d - 7, c),
				p = Object(o.a)(e => Object(r.f)(e), e => Object(n.a)(e), (e, t) => e && !!t && !!t.created && t.created > l && t.created < m)
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"12994770759e"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage.41c2251c08a491a4728c.js.map