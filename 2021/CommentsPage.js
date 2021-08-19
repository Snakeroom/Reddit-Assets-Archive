// https://www.redditstatic.com/desktop2x/CommentsPage.42bca889fc30dd6feabc.js
// Retrieved at 8/18/2021, 8:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage"], {
		"./src/reddit/actions/celebratoryMoments/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/celebratoryMoments/constants.ts");
			const r = Object(o.a)(n.a),
				i = Object(o.a)(n.b)
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
				return k
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
							if (E(t)) {
								if (P(t)) {
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
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, P = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						o = t && t.type;
					return !!(s && !P(e) && o === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, k = () => async (e, t, s) => {
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
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return Oe
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return ye
			})), s.d(t, "commentsPagePending", (function() {
				return Ee
			})), s.d(t, "commentsPageLoaded", (function() {
				return Pe
			})), s.d(t, "commentsPageFailed", (function() {
				return we
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return ke
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return Ie
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return je
			})), s.d(t, "commentsPageRequested", (function() {
				return _e
			})), s.d(t, "commentsPageDataRequested", (function() {
				return Se
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return Le
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return Te
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
				C = s("./src/reddit/actions/externalAccount.ts"),
				x = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				f = s("./src/reddit/actions/platform.ts"),
				v = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/actions/presence.ts"),
				y = s("./src/reddit/actions/profile/index.ts"),
				E = s("./src/reddit/actions/subreddit.ts"),
				P = s("./src/reddit/actions/toaster.ts"),
				w = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/constants/graphql.ts"),
				I = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/constants/posts.ts"),
				_ = s("./src/reddit/helpers/commentList/index.ts"),
				S = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				T = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/models/Subreddit/index.ts"),
				M = s("./src/reddit/models/User/index.ts"),
				A = s("./src/reddit/selectors/category.ts"),
				R = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				F = s("./src/reddit/selectors/experiments/postSeo.ts"),
				B = s("./node_modules/reselect/es/index.js"),
				V = s("./src/reddit/constants/experiments.ts"),
				D = s("./src/reddit/helpers/chooseVariant/index.ts"),
				U = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				W = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				H = s("./src/reddit/selectors/platform.ts"),
				K = s("./node_modules/fbt/lib/FbtPublic.js"),
				G = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				q = s("./src/reddit/selectors/user.ts");
			const z = new Set([u.g.AntiEvilOps, u.g.AutomodFiltered, u.g.CommunityOps, u.g.ContentTakedown, u.g.CopyrightTakedown, u.g.Moderator, u.g.Reddit]),
				Y = new Set([u.g.Author, u.g.AuthorDeleted]),
				Q = Object(B.a)(U.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return z.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = K.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let o = Object(G.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== T.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				J = Object(B.a)(U.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return Y.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = K.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let o = Object(G.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== T.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				X = Object(B.a)(q.j, U.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				Z = Object(B.a)(H.f, U.a, Q, J, W.a, X, W.b, (e, t, s, o, n, r, i) => {
					if (!e || !t || n) return !1;
					if (o) return !0;
					const a = r || i,
						d = t.score >= 2 || t.numComments >= 2;
					return !(!s || a || d)
				});
			var $ = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ee = s("./src/reddit/selectors/posts.ts"),
				te = s("./src/reddit/selectors/subreddit.ts"),
				se = s("./src/lib/makeActionCreator/index.ts"),
				oe = s("./src/lib/makeCommentsPageKey/index.ts"),
				ne = s("./src/reddit/actions/ads/index.ts"),
				re = s("./src/reddit/helpers/canonicalUrls.ts"),
				ie = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ae = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				de = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				ce = s("./src/lib/performanceTimings/index.tsx"),
				le = s("./src/reddit/actions/gold/powerups.ts"),
				me = s("./src/reddit/actions/subreddit/subredditPosts.ts");
			const pe = e => {
				var t, s;
				const o = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
					n = o && Object(u.s)(o),
					{
						sortToUse: r
					} = Object(S.a)(e, n);
				return (!r || r === h.s.CONFIDENCE) && Object(D.c)(e, {
					experimentEligibilitySelector: () => Object(q.I)(e),
					experimentName: V.y
				}) === V.A.Enabled
			};
			var ue = s("./src/reddit/selectors/chatPost.ts"),
				he = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				be = s("./src/reddit/selectors/seo/index.ts"),
				ge = s("./src/reddit/actions/pages/constants.ts"),
				Ce = s("./src/lib/initializeClient/installReducer.ts"),
				xe = s("./src/reddit/reducers/pages/comments/index.ts"),
				fe = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				ve = s("./src/reddit/selectors/i18n/index.ts");
			Object(Ce.a)({
				pages: {
					comments: xe.a
				}
			});
			const Oe = 25,
				ye = 100,
				Ee = Object(se.a)(ge.h),
				Pe = Object(se.a)(ge.f),
				we = Object(se.a)(ge.e),
				ke = (e, t, s) => {
					const o = !e,
						n = Object(ee.I)(t, {
							postId: s
						}).belongsTo,
						r = Object(te.L)(t, {
							identifier: n
						}),
						i = Object(be.c)(t, {
							identifier: n
						}),
						a = !!Object(he.c)(t),
						d = Object(ve.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (c.listingBelow = i || o, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (i || o) && (!Object(N.h)(r) && !Object(ue.d)(t, {
						postId: s
					}) && !!r || !Object(H.h)(t) && Object(F.e)(t)), e && (c.postQASchema = Object(F.d)(t)), c
				},
				Ie = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				je = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				_e = e => async (t, s) => {
					var r, i;
					const {
						partialPostId: d,
						partialCommentId: c
					} = e.params, {
						subredditName: l
					} = e.params || "", m = d ? Object(u.s)(d) : "", p = c && Object(L.h)(c), {
						path: g,
						queryParams: O
					} = e, P = Object(x.d)(g), {
						instanceId: w
					} = O, {
						hasSortParam: _,
						sortToUse: N
					} = Object(S.a)(s(), m), M = null === (i = null === (r = Object(H.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === i ? void 0 : i.route.chunk, R = ["context", "depth", "limit", I.f].reduce((e, t) => {
						const s = parseInt(O[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: l,
						hasSortParam: _,
						instanceId: w,
						include_categories: !0
					});
					_ && (R.sort = N), R.onOtherDiscussions = P, t(v.r(m)), await t(Se(m, p, R, N));
					const F = s().posts.models[m],
						B = Object(q.J)(s());
					if (F && "subreddit" === F.belongsTo.type) {
						const e = F.belongsTo.id,
							s = Object(ce.i)(() => t(Object(le.l)(e, {
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
								const s = Object(ee.V)(e, {
										postId: t
									}),
									o = Object(ee.I)(e, {
										postId: t
									});
								return s && o ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), m),
							i = Object(te.L)(s(), {
								identifier: F.belongsTo
							});
						if (i && (e => V.Ed.Redirect === Object(D.b)(e, {
								experimentEligibilitySelector: Z,
								experimentName: V.wd
							}))(s())) return void t(Object(o.c)(i.url));
						if ((F.media && F.media.type) === T.o.LIVEVIDEO) {
							const e = `/rpan${F.belongsTo.type===j.a.SUBREDDIT?i.url:"/"}${Object(u.t)(F.id)}`;
							return void t(Object(o.c)(e))
						}
						if (F.belongsTo.type !== j.a.SUBREDDIT || F.isSponsored) {
							if (F.belongsTo.type === j.a.PROFILE) {
								const e = Object(ce.i)(() => t(y.d(i.name)), {
									name: "getProfileInfo",
									page: M,
									isLoggedIn: B
								});
								await e
							}
						} else {
							if (!!!Object(te.S)(s(), {
									subredditId: F.belongsTo.id
								})) {
								const e = Object(ce.i)(() => t(E.o(i.name)), {
									name: "getSubredditRules",
									page: M,
									isLoggedIn: B
								});
								await e
							}
						}
						const d = ke(!1, s(), m),
							c = P;
						if (Ie(c, d)) {
							Object(ie.d)(ie.a.LinkedPosts);
							const e = Object(ie.c)(ie.a.LinkedPosts);
							Object(ie.d)(ie.a.NsfwLinkedPosts);
							const o = Object(ie.c)(ie.a.NsfwLinkedPosts),
								n = {
									adContext: {
										layout: k.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: m
									},
									range: h.cc.WEEK.toUpperCase(),
									sort: h.N.TOP,
									subredditName: i.name
								},
								r = {
									postId: m
								},
								a = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(he.c)(s())
								},
								l = {
									nsfwListingBelowCorrelationId: o,
									nsfwListingBelowExperimentVariant: Object(fe.a)(s())
								},
								p = je(d);
							Object(ce.i)(() => t(Object(me.a)({
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
						t(Object(C.p)()), t(f.l({
							title: r
						}));
						const l = s().posts.instances[m] ? e.queryParams.instanceId : F.postId;
						t(Object(a.b)(l)); {
							const e = Object(A.d)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(n.c(e))))
						}
					} else t(f.l({
						title: b.d()
					}));
					const {
						routePrefix: U
					} = e.params;
					j.b[U] === j.a.PROFILE ? Object(re.d)(s(), t, e) : Object(re.b)(s(), t, e)
				}, Se = (e, t, s, o) => async (n, a, d) => {
					var u, b;
					const C = a(),
						x = Object(oe.a)(e, t, s),
						{
							subredditName: y
						} = s,
						E = C.pages.comments.keyToHeadCommentId.hasOwnProperty(x),
						k = C.pages.comments.api.fullyLoaded[x],
						I = C.pages.comments.api.error[x],
						j = C.pages.comments.api.pending[x],
						S = !Object(q.I)(C),
						L = Object(q.j)(C),
						T = o === h.s.CHAT,
						N = !!C.platform.lastPage;
					if ((j || E && !I) && !(T && N)) {
						if (E && !C.sidebarPromotedPosts.firstFetch) {
							const e = Object(H.h)(C) ? de.a.COMMENTS_OVERLAY : de.a.COMMENTS;
							window.addEventListener("load", () => {
								n(Object(ne.b)(e))
							})
						}
						return void(k || n(Te(e, t, s)))
					}
					n(r.g());
					const A = C.user.prefs.commentMode;
					n(Ee({
						key: x,
						postId: e,
						commentMode: A
					}));
					const F = {
						...s,
						...T ? {
							sort: h.s.LIVE
						} : S ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(ee.I)(a(), {
							postId: e
						});
						t && t.numComments && t.numComments > ye && (F.truncate = Oe)
					}
					const B = null === (b = null === (u = Object(H.b)(C)) || void 0 === u ? void 0 : u.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
						V = Object(ce.i)(() => Object(l.a)(d.apiContext(), e, t, F, Object(R.a)(a()), pe(a())), {
							name: "fetchCommentsPage",
							isLoggedIn: !S,
							page: B
						}),
						D = !S && L && Object(ce.i)(() => Object(p.d)(d.gqlContext(), Object(M.e)(L)), {
							name: "fetchProfileKarma",
							isLoggedIn: !S,
							page: B
						}) || null,
						[U, W] = await Promise.all([V, D]);
					let K;
					if (n(Object(f.m)(U.status)), U.ok) {
						const t = Object.keys(U.body.posts).filter(e => !!U.body.posts[e].isMeta),
							s = U.body.posts[e];
						if (t.length) {
							const e = Object(ce.i)(() => Object(c.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: B,
									isLoggedIn: !S
								}),
								o = await e;
							o.ok && (K = o.body)
						}
						if (W && W.ok) {
							const {
								data: e
							} = W.body, t = {
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
							U.body && U.body.account && Object.assign(U.body.account, t)
						}
						const o = Object(_.a)(U.body, e, C);
						n(Pe({
							key: x,
							postId: e,
							meta: C.meta,
							governance: K,
							shouldCollapse: o,
							...U.body
						}));
						const r = s && "subreddit" === s.belongsTo.type ? s.belongsTo.id : null,
							i = U.body.comments,
							a = U.body.posts;
						await n(Object(O.b)(a, i, r))
					} {
						const o = Object(ee.I)(a(), {
							postId: e
						});
						o && U.body.comments && Object.keys(U.body.comments).length < o.numComments ? n(Te(e, t, s)) : U.ok && n(Le({
							key: x
						}));
						const r = Object(H.h)(C) ? de.a.COMMENTS_OVERLAY : de.a.COMMENTS;
						n(Object(ne.b)(r))
					}
					if (U.ok) {
						n(P.g(x));
						const t = Object(ee.I)(a(), {
							postId: e
						});
						if (n(v.z(t, w.a.CommentsView)), t && "subreddit" === t.belongsTo.type && U.body.comments) {
							const e = Object(ce.i)(() => n(Object(g.a)({
								commentIds: Object.keys(U.body.comments),
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: B,
								isLoggedIn: !S
							});
							await e
						}
					} else {
						let e;
						y && (n(Object(i.subredditPending)({
							key: x
						})), e = await Object(ae.a)("subreddit", () => Object(m.a)(d.apiContext(), y, {})), n(Object(f.m)(e.status)), n(Object(i.handleSubredditPageApiError)(e, y))), n(we({
							error: U.error,
							key: x,
							...e ? e.body : U.body
						}))
					}
				}, Le = Object(se.a)(ge.g), Te = (e, t, s) => async (o, n, r) => {
					const i = Object(oe.a)(e, t, s),
						a = n(),
						c = Object(q.J)(a),
						m = Object(q.j)(a),
						u = Object(l.a)(r.apiContext(), e, t, s, Object(R.a)(a), pe(a)),
						h = c && m && Object(p.d)(r.gqlContext(), Object(M.e)(m)) || null,
						[b, C] = await Promise.all([u, h]);
					if (o(Object(f.m)(b.status)), b.ok) {
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
						const t = Object(_.a)(b.body, e, a);
						o(Pe({
							key: i,
							postId: e,
							meta: a.meta,
							shouldCollapse: t,
							...b.body
						})), o(Le({
							key: i
						}));
						const s = n().posts.models[e],
							r = s && Object(ee.V)(n(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object($.a)(a, {
							subredditId: r.id
						}) && o(Object(d.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && b.body.comments && await o(Object(g.a)({
							commentIds: Object.keys(b.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else o(we({
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
		"./src/reddit/components/CelebratoryMoments/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const o = 700,
				n = 1400,
				r = 1500
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
				E = Object(o.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
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
				P = e => r.a.createElement(E, h({}, e, {
					fallback: r.a.createElement(y, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = P
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
				E = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/index.tsx"),
				k = s("./src/reddit/controls/Dropdown/Row.tsx"),
				I = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				j = s("./src/reddit/helpers/path/index.ts"),
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
				A = s("./src/reddit/icons/svgs/Info/index.tsx"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/comments.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/tooltip.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = s.n(W),
				K = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const G = Object(E.a)(w.a),
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
					}, r.a.createElement(k.b, {
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
					}, r.a.createElement(k.b, {
						displayText: q(K.a.First),
						isSelected: n === K.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(k.b, {
						displayText: q(K.a.Last),
						isSelected: n === K.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(k.b, {
						displayText: q(K.a.None),
						isSelected: n === K.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Y = z;
			const Q = "CommentSort--SortPicker",
				J = "CommentSort--HighlightPicker",
				X = "CommentSort--Tooltip",
				Z = Object(E.a)(w.a),
				$ = Object(a.c)({
					commentPermalink: (e, {
						commentId: t
					}) => t && Object(F.m)(e, {
						commentId: t
					}),
					contestModeModalIsOpen: Object(R.b)("CommentSort--ContestMode--Modal"),
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
					post: V.I,
					postPermalink: V.H,
					showCommentHighlighter: (e, {
						postId: t
					}) => {
						const s = Object(U.r)(e),
							o = !!Object(B.k)(e, {
								postId: t
							}),
							n = Object(V.I)(e, {
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
						tooltipId: X
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
						suggestedSort: E,
						showTooltip: P,
						toggleContestModeModal: w
					} = this.props, _ = b.contestMode, S = !h.search.includes(c.s.CONFIDENCE), T = f === c.s.CONFIDENCE && S, N = p && !T, R = c.u[f], F = R ? R() : "", B = E && f === E && !T ? this.addSuggestedLabel(F) : F, V = _ ? o.fbt._("End contest mode?", null, {
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
					}, r.a.createElement(k.b, {
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
					})), r.a.createElement(Z, {
						isOpen: i,
						tooltipId: Q
					}, [c.s.CONFIDENCE, c.s.TOP, c.s.NEW, c.s.CONTROVERSIAL, c.s.OLD, c.s.QA].map(e => {
						const t = s || g,
							o = Object(j.b)(t),
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
						}, r.a.createElement(k.b, {
							displayText: i,
							isSelected: f === e,
							skipRoleAttr: !0
						}))
					}))), N && !W && (E ? r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: f !== E ? this.setSortOnClick : this.clearSortOnClick
					}, f !== E ? o.fbt._("Set new suggested sort", null, {
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
						id: X,
						onMouseEnter: P,
						onMouseLeave: l
					}, r.a.createElement(O.c, {
						className: H.a.Tooltip,
						text: o.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: X
					}), r.a.createElement(A.a, {
						className: H.a.Info
					})))), p && r.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, o.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(I.a, {
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
			t.a = ee(Object(P.c)(te))
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
				SupporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				supporterRing: "_2I86011VPvZ-uDOUp1zvd-",
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
				CommentCreationWithUpvote: "_309bpvXJ7EHKGz8bf2ywJT",
				commentCreationWithUpvote: "_309bpvXJ7EHKGz8bf2ywJT",
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
				return j
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
			const E = l.a.wrapped(f.a, "CommentsIcon", y.a),
				P = l.a.wrapped(v.a, "SnooFacepalm", y.a),
				w = l.a.p("EmptyTitle", y.a),
				k = l.a.p("ErrorTitle", y.a),
				I = l.a.p("EmptyText", y.a),
				j = ({
					className: e,
					isChat: t
				}) => a.a.createElement("div", {
					className: Object(c.a)(y.a.StateContainer, e)
				}, a.a.createElement(E, null), a.a.createElement(w, null, t ? o.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : o.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), a.a.createElement(I, null, o.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				_ = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(E, null), a.a.createElement(w, null, o.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(I, null, o.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = ({
					link: e
				}) => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(E, null), a.a.createElement(w, null, o.fbt._("That comment is missing", null, {
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
				}, a.a.createElement(P, null), a.a.createElement(k, null, e ? Object(h.a)({
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
				A = l.a.div("CommentPlaceholder", y.a),
				R = l.a.div("Avatar", y.a),
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
				H = e => a.a.createElement(M, null, r()(10, t => a.a.createElement(A, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(R, {
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
				u = s("./src/reddit/actions/economics/powerups/achievements.ts"),
				h = s("./src/reddit/actions/comment/index.ts"),
				b = s("./src/reddit/constants/comments.ts"),
				g = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/constants/elementClassNames.ts"),
				x = s("./src/reddit/constants/gold.ts"),
				f = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/components/LottieAnimation/index.tsx"),
				O = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				y = s.n(O);
			! function(e) {
				e.Lottie = "lottie"
			}(o || (o = {}));
			const E = {
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
				Object(f.a)(t, r, E);
				const d = e.type;
				return a.a.createElement("div", {
					className: Object(l.a)(y.a.effectContainer, y.a[d + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, d === o.Lottie && a.a.createElement(v.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			});
			const w = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: k,
							effectHighlight: {
								type: o.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				k = "ff0000";

			function I(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						o = Math.floor(Math.random() * s.length);
					return s[o] || null
				}(e ? function(e) {
					return e.map(_).filter(e => e !== j)
				}(e) : [])
			}
			const j = {
				glowHexColor: null,
				effectHighlight: null
			};

			function _(e) {
				for (const t of w) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return j
			}
			var S = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				L = s("./src/reddit/selectors/comments.ts"),
				T = s("./src/reddit/selectors/commentSelector.ts"),
				N = s("./src/reddit/selectors/communityAwards.ts"),
				M = s("./src/reddit/selectors/moderatorPermissions.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				F = s("./node_modules/fbt/lib/FbtPublic.js"),
				B = s("./src/reddit/hooks/useTracking.ts"),
				V = s("./src/reddit/models/PostDraft/index.ts"),
				D = s("./src/lib/makeDraftKey/index.ts"),
				U = s("./src/lib/objectSelector/index.ts"),
				W = s("./src/reddit/helpers/trackers/powerups.ts"),
				H = s("./src/reddit/actions/comment/authoring.ts"),
				K = s("./src/reddit/actions/comment/moderation.ts"),
				G = s("./src/reddit/actions/gold/powerups.ts"),
				q = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				z = s("./src/reddit/icons/fonts/helpers.tsx");
			var Y = e => a.a.createElement("i", {
					className: Object(l.a)(Object(z.b)("expand", e.isFilled), e.className)
				}),
				Q = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				J = s.n(Q);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var Z, $, ee = s("./node_modules/lodash/defer.js"),
				te = s.n(ee),
				se = s("./src/reddit/actions/tooltip.ts"),
				oe = s("./src/reddit/selectors/tooltip.ts"),
				ne = s("./src/lib/makeCommentPermalink/index.ts"),
				re = s("./src/reddit/actions/gold/modals.ts"),
				ie = s("./src/reddit/actions/modal.ts"),
				ae = s("./src/reddit/actions/reportFlow/index.ts"),
				de = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ce = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				le = s("./src/reddit/helpers/trackers/lightbox.ts"),
				me = s("./src/reddit/models/Comment/index.ts"),
				pe = s("./src/reddit/selectors/activeModalId.ts"),
				ue = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				he = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				be = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				ge = s("./src/reddit/selectors/subreddit.ts"),
				Ce = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				xe = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				fe = s.n(xe);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(Z || (Z = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}($ || ($ = {}));
			const ve = (e, t) => {
					const s = fe.a[t],
						o = fe.a[e];
					return Object(l.a)(s, o)
				},
				Oe = e => Object(l.a)(fe.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[fe.a.isInOverlay]: e.isInOverlay,
					[fe.a.isModModeEnabled]: e.isModModeEnabled,
					[fe.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var ye = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				Ee = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Pe = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				we = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				ke = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Ie = s("./src/reddit/components/ModModeReports/helpers.ts"),
				je = s("./src/reddit/components/OverflowMenu/index.tsx"),
				_e = s("./src/reddit/components/ReportFlow/index.tsx"),
				Se = s("./src/reddit/components/ReportFlow/new.tsx"),
				Le = s("./src/reddit/components/ShareMenu/index.tsx"),
				Te = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ne = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				Me = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Ae = s("./src/reddit/helpers/trackers/modTools.ts"),
				Re = s("./src/reddit/layout/row/Inline/index.tsx"),
				Fe = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				Be = s.n(Fe),
				Ve = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				De = s("./src/reddit/selectors/gold/awardIcon.ts");
			var Ue = e => {
					const t = Object(d.e)(be.b),
						s = Object(d.e)(e => t && Object(De.a)(e, {
							award: t,
							minSize: 32
						}));
					return s ? a.a.createElement("img", {
						className: Object(l.a)(Be.a.img, e.className),
						id: e.id,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						src: s
					}) : a.a.createElement(Ve.a, e)
				},
				We = s("./src/reddit/icons/fonts/index.tsx"),
				He = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				Ke = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				Ge = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				qe = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ze = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ye = s("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				Qe = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Je = s.n(Qe);
			const Xe = p.a.wrapped(He.a, "CommentIcon", Je.a),
				Ze = p.a.wrapped(ze.a, "Report", Je.a),
				$e = p.a.wrapped(Ge.a, "IgnoreReport", Je.a),
				et = p.a.wrapped(ke.a, "ModActionsMenu", Je.a),
				tt = p.a.div("OverflowMenuSpacer", Je.a),
				st = p.a.wrapped(je.a, "DropdownRow", Je.a),
				ot = p.a.wrapped(Re.a, "Flatlist", Je.a),
				nt = p.a.button("Button", Je.a),
				rt = p.a.wrapped(ye.a, "ModToolsFlatlist", Je.a),
				it = p.a.wrapped(Ne.a, "ViewReportsDropdown", Je.a),
				at = e => `Comment-${e}--Modal--DeleteComment`,
				dt = e => `Distinguish--Dropdown--${e}`,
				ct = e => `${e}-overflow-menu`,
				lt = e => `View--Reports--${e}`,
				mt = Object(c.c)({
					claimedFreeAward: be.b,
					currentUser: R.j,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(pe.a)(e) === at(t.id),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(oe.b)(dt(t.id))(e),
					isCommentFollowEnabled: Ye.a,
					isFollowed: (e, {
						comment: t
					}) => Object(L.z)(e, {
						commentId: t.id
					}),
					isFollowedCommentExpired: (e, {
						comment: t
					}) => Object(L.B)(e, {
						commentId: t.id
					}),
					isPendingDeletion: (e, {
						comment: t
					}) => Object(L.C)(e, {
						commentId: t.id
					}),
					isReportsDropdownOpen: (e, {
						comment: t
					}) => Object(oe.b)(lt(t.id))(e),
					isLoggedIn: R.J,
					postIsArchived: (e, {
						comment: t
					}) => Object(A.C)(e, {
						postId: t.postId
					}),
					isBlockedUserBannerEnabled: (e, {
						comment: t
					}) => !!Object(A.x)(e, {
						postId: t.postId
					}) && Object(ue.a)(e),
					postAuthorIsBlocked: (e, {
						comment: t
					}) => Object(A.x)(e, {
						postId: t.postId
					}),
					postIsLocked: (e, {
						comment: t
					}) => Object(A.D)(e, {
						postId: t.postId
					}),
					postPermalink: (e, {
						comment: t
					}) => Object(A.H)(e, {
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
					}) => Object(L.I)(e, {
						commentId: t.id
					}),
					subredditAboutInfo: (e, {
						subreddit: t
					}) => t ? Object(ge.w)(e, {
						subredditName: t.name
					}) : void 0,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(A.V)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: he.a
				});
			class pt extends a.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(le.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Ae.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Ae.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Ae.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(de.d)(de.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(o(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Ae.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Ae.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Ae.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: o
						} = this.props;
						e(o ? me.a.UNFOLLOWED : me.a.FOLLOWED), t(o ? Object(Ae.f)("follow", s.id) : Object(Ae.a)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Ae.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? a.a.createElement(Se.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: _e.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : a.a.createElement(_e.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: _e.b,
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
						postAuthorIsBlocked: v,
						isBlockedUserBannerEnabled: O,
						postIsLocked: y,
						postPermalink: E,
						renderedInOverlay: P,
						sendEvent: w,
						subreddit: k,
						subredditAboutInfo: I,
						toggleDeleteCommentModal: j,
						toggleSendReplies: _,
						trackCommentClick: S
					} = this.props, L = Object(ce.a)(C), T = !!s && s.displayText === e.author, N = !!s && s.isEmployee, M = !(I && I.userIsBanned) && (y || f || v && O || L && p || e.isLocked ? L && p : p || d), A = Object(Ie.a)(e), R = L && T && !e.bannedBy, B = T && N && !e.bannedBy, V = R || B, D = s && e.isGildable, U = c && !f, W = [];
					M && W.push(a.a.createElement(nt, {
						disabled: u,
						key: "reply",
						onClick: () => {
							r(), te()(() => S("reply", e.id)())
						}
					}, a.a.createElement(Xe, null), F.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), D && W.push({
						breakpointGroup: $.LoggedInUser,
						icon: a.a.createElement(Ue, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => F.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), W.push(a.a.createElement(Le.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: Object(ne.a)(E, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == k ? void 0 : k.type
					}, a.a.createElement(nt, {
						onClick: () => this.sendCommentEventWithName("share")
					}, F.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), T || W.push({
						breakpointGroup: $.LoggedInUser,
						icon: a.a.createElement(ze.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => F.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), W.push({
						breakpointGroup: $.LoggedInUser,
						icon: a.a.createElement(We.a, {
							name: e.isSaved ? "saved" : "save"
						}),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => F.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => F.fbt._("Save", null, {
							hk: "4yMsMq"
						})
					}), T && W.push({
						breakpointGroup: $.LoggedInUser,
						icon: a.a.createElement(We.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => F.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), U && W.push({
						breakpointGroup: $.LoggedInUser,
						icon: a.a.createElement(We.a, {
							name: "notification",
							isFilled: m
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: m ? () => F.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => F.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const H = W.map(e => a.a.isValidElement(e) ? e : a.a.createElement(nt, {
							className: ve(e.breakpointGroup, Z.HideIfVWSmaller),
							disabled: u,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						K = W.map(e => a.a.isValidElement(e) ? null : a.a.createElement(st, {
							className: ve(e.breakpointGroup, Z.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: Je.a.dropdownRowText
						}, e.icon));
					return a.a.createElement(i.Fragment, null, a.a.createElement(ot, {
						className: Object(l.a)(Oe({
							depth: n,
							isInOverlay: P,
							isModModeEnabled: L && x,
							isFollowCommentEnabled: U
						}), t)
					}, H, a.a.createElement(tt, {
						className: T ? void 0 : ve($.LoggedInUser, Z.HideIfVWLarger)
					}, a.a.createElement(je.b, {
						className: Je.a.overflowMenu,
						disabled: u,
						dropdownId: ct(e.id),
						onClick: () => w(Object(Ae.a)("comment_overflow_menu", e.id))
					}, K, T && a.a.createElement(a.a.Fragment, null, a.a.createElement(st, {
						displayText: F.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: Je.a.dropdownRowText
					}, a.a.createElement(We.a, {
						name: "delete"
					})), a.a.createElement(Me.a, {
						text: F.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: _,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && a.a.createElement(Pe.a, {
						actionText: F.fbt._("Delete", null, {
							hk: "1bl9Tc"
						}),
						cancelActionText: F.fbt._("Keep", null, {
							hk: "3hCBEF"
						}),
						headerText: F.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: F.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: o,
						toggleModal: j,
						trackClick: () => {},
						withOverlay: !0
					}), L && a.a.createElement(a.a.Fragment, null, x && a.a.createElement(rt, {
						className: ve($.Moderator, Z.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: T
					}), a.a.createElement(et, {
						className: x ? ve($.Moderator, Z.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => w(Object(Ae.a)("comment_mod_action_menu", e.id))
					}, a.a.createElement(qe.a, null), a.a.createElement(Ce.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(Ie.c)(e) && !x && a.a.createElement(Ee.a, {
						text: `${A}`,
						onClick: () => {
							g(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: lt(e.id)
					}, a.a.createElement(it, {
						model: e,
						onIgnoreReports: () => {
							b(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: lt(e.id)
					}), e.ignoreReports ? a.a.createElement($e, null) : a.a.createElement(Ze, null)), V && a.a.createElement(Ee.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, a.a.createElement(Ke.a, null), a.a.createElement(we.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: N,
						isUserMod: L,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: dt(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var ut = Object(d.b)(mt, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					deleteComment: () => s && e(Object(H.h)(t.id, t.postId)),
					handleDelete: () => {
						e(Object(ie.i)(at(t.id))), e(Object(se.h)({
							tooltipId: ct(t.id)
						}))
					},
					handleEdit: () => {
						const o = t.media && t.media.rteMode;
						s && e(Object(H.d)({
							commentId: t.id,
							draftKey: Object(D.a)(V.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: o,
							commentsPageKey: s
						}))
					},
					handleReply: () => s && e(Object(H.p)({
						parentCommentId: t.id,
						commentsPageKey: s
					})),
					onCommentFollow: s => e(Object(H.r)(t.id, s)),
					onDistinguishComment: (s, o) => e(Object(K.b)(t.id, s, o)),
					onFollowedCommentExpire: () => e(Object(h.n)({
						id: t.id,
						expiresAt: 0
					})),
					onGildClick: (s, o) => e(Object(re.d)({
						awardId: o,
						correlationId: s,
						thingId: t.id
					})),
					onIgnoreReports: () => e(Object(K.g)(t.id)),
					onReportClick: () => e(Object(ae.c)(t.id)),
					onToggleSave: () => e(Object(h.m)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(se.h)({
						tooltipId: dt(t.id)
					})),
					onToggleReportsDropdown: () => e(Object(se.h)({
						tooltipId: lt(t.id)
					})),
					toggleDeleteCommentModal: () => e(Object(ie.i)(at(t.id))),
					toggleSendReplies: () => e(Object(H.k)(t.id))
				}))(Object(Te.c)(pt)),
				ht = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				bt = s.n(ht);
			var gt = a.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return a.a.createElement("div", {
						className: bt.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				Ct = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				xt = s.n(Ct);
			var ft = a.a.memo(e => a.a.createElement("div", {
					className: xt.a.gradientHighlightContainer,
					role: "presentation"
				})),
				vt = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ot = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				yt = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Et = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Pt = s("./src/reddit/components/ModModeReports/index.tsx"),
				wt = s("./src/reddit/components/PostTopMeta/index.tsx"),
				kt = s("./src/reddit/components/RichTextJson/index.tsx"),
				It = s("./src/reddit/components/UserIcon/index.tsx"),
				jt = s("./src/reddit/components/UserIcon/constants.ts"),
				_t = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				St = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				Lt = s("./src/reddit/constants/componentTestIds.ts"),
				Tt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Nt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Mt = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				At = s("./node_modules/raf/index.js"),
				Rt = s.n(At);

			function Ft() {
				return (Ft = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Bt = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				Vt = a.a.createContext(!1);
			class Dt extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || Rt()(this.setVisible)
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
						...Bt,
						...t
					};
					return a.a.createElement(Mt.a, Ft({}, o, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(Vt.Provider, {
						value: s
					}, e)))
				}
			}
			var Ut = s("./src/reddit/controls/ErrorText/index.tsx"),
				Wt = s("./src/reddit/controls/InternalLink/index.tsx"),
				Ht = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Kt = s("./src/reddit/helpers/flair.ts"),
				Gt = s("./src/reddit/models/Subreddit/index.ts"),
				qt = s("./src/reddit/models/User/index.ts"),
				zt = s("./src/reddit/models/Vote/index.ts"),
				Yt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				Qt = s("./src/reddit/selectors/experiments/econ/index.ts"),
				Jt = s("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				Xt = s("./src/reddit/selectors/gold/powerups/index.ts"),
				Zt = s("./src/reddit/selectors/gold/powerups/achievements.ts"),
				$t = s("./src/reddit/selectors/poll/index.ts"),
				es = s("./src/reddit/selectors/userPrefs.ts"),
				ts = s("./src/reddit/selectors/moderatingComments.ts"),
				ss = s("./src/reddit/components/Comments/Comment/index.m.less"),
				os = s.n(ss),
				ns = s("./src/config.ts"),
				rs = s("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				is = s("./src/reddit/selectors/experiments/replyWithUpvote.ts"),
				as = s("./src/reddit/helpers/userSnoovatar/index.ts");

			function ds() {
				return (ds = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const cs = p.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return a.a.createElement("button", X({}, s, {
						className: Object(l.a)(t, J.a.expandButton)
					}), a.a.createElement(Y, {
						className: J.a.expandIcon
					}))
				}), "ExpandButton", os.a),
				ls = p.a.wrapped(ut, "FlatList", os.a),
				ms = p.a.wrapped(Ut.b, "ErrorText", os.a),
				ps = p.a.wrapped(yt.a, "HorizontalVotes", os.a),
				us = p.a.div("ActionBar", os.a),
				hs = p.a.wrapped(vt.a, "TopMeta", os.a),
				bs = p.a.div("CommentContentWrapper", os.a),
				gs = p.a.div("CommentWrapper", os.a),
				Cs = p.a.div("CommentBody", os.a),
				xs = p.a.wrapped(Et.b, "AuthorHovercard", os.a),
				fs = Object(Tt.u)(),
				vs = Object(d.b)(() => Object(c.c)({
					comment: (e, t) => Object(T.a)(e, t),
					currentProfileModPermissions: Tt.h,
					depth: (e, t) => Object(L.j)(e, t),
					collapsed: ts.b,
					collapsedBecauseCrowdControl: ts.a,
					currentUser: R.j,
					flair: L.e,
					focused: L.t,
					highlightAnimationDisabled: es.c,
					isAuthorPresent: L.y,
					isEditing: L.A,
					isLoggedIn: R.J,
					isPendingDeletion: L.C,
					isPresenceConsumptionExpEnabled: Jt.a,
					isPresenceTogglePref: R.ib,
					isReplyWithUpvoteExperiment: is.a,
					moderatorPermissions: (e, t) => {
						const s = Object(T.a)(e, t);
						return s ? Object(M.l)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: $t.f,
					shouldShowTopSupporterIcon: (e, t) => {
						const s = Object(T.a)(e, t);
						if (!s) return !1;
						const o = Object(Tt.r)(e, t);
						return !!o && Object(Xt.a)(e, {
							subredditId: o.id,
							userId: s.authorId
						}) && !Object(Qt.g)(e)
					},
					modModeEnabled: Tt.S,
					errorMsgs: L.G,
					replyFormOpen: L.J,
					subreddit: Tt.r,
					subredditType: L.L,
					allowNFTs: rs.a,
					hasSupporterRing: Zt.a
				}), (e, {
					commentId: t,
					commentsPageKey: s,
					scrollToAndRemeasure: o,
					trackCommentClick: n
				}) => ({
					onCollapseClick: () => e(Object(h.o)({
						commentId: t,
						commentsPageKey: s,
						scrollToAndRemeasure: o
					})),
					onIgnoreReports: () => e(Object(K.g)(t)),
					onOpenPowerupsModal: () => e(Object(G.f)("comment_top_supporter_badge")),
					onVoteClick: s => {
						const [o, r] = s === zt.a.upvoted ? [Object(h.q)(t), "upvote_comment"] : [Object(h.j)(t), "downvote_comment"];
						n(r, t)(), e(o)
					}
				})),
				Os = Object(U.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				ys = e => a.a.createElement("div", e, e.children),
				Es = e => a.a.createElement(a.a.Fragment, null, e.children),
				Ps = fs(vs(e => {
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
						isLoggedIn: k,
						isPendingDeletion: I,
						isPresenceConsumptionExpEnabled: j,
						isPresenceTogglePref: _,
						isReplyWithUpvoteExperiment: S,
						shouldShowTopSupporterIcon: L,
						moderatorPermissions: T,
						modModeEnabled: N,
						onCollapseClick: M,
						onIgnoreReports: A,
						onLineMouseOver: R,
						onVoteClick: U,
						onOpenPowerupsModal: K,
						prediction: G,
						postId: z,
						replyFormOpen: Y,
						subreddit: Q,
						trackCommentClick: J,
						triggerCelebratoryMoment: X,
						renderedInOverlay: Z,
						subredditType: $,
						onPresenceIndicatorInViewport: ee,
						allowNFTs: te,
						hasSupporterRing: se
					} = e, oe = Object(B.a)(), ne = o.isDeleted, re = !y && !ne && !!u && u.length > 0, ie = Object(D.a)(V.c.edit, o.id), ae = Object(D.a)(V.c.replyToComment, o.id), de = Object(ce.a)(T), le = o.authorIsContractor && $ === Gt.f.EmployeesOnly, pe = o.isLocked, ue = de && N, he = !y && !ne && (k || O), be = !!m && Object(qt.e)(m) === o.author, [ge, Ce] = Object(i.useState)(null), [xe, fe] = Object(i.useState)(null), ve = Object(me.f)(o) || Object(me.g)(o) ? ys : Wt.a, Oe = Object(me.f)(o) ? Es : xs;
					Object(i.useEffect)(() => {
						if (!y && !ne && (g && Ce(a.a.createElement(ft, null)), null !== x)) {
							if (x.glowHexColor) {
								const e = x.glowHexColor;
								Ce(a.a.createElement(gt, {
									hexColor: e
								}))
							}
							if (x.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = x.effectHighlight;
								fe(a.a.createElement(P, {
									prefersReducedAnimation: C,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [y, ne, g, C, x]);
					const ye = Object(i.useContext)(Vt),
						Ee = j && !ne && !Object(me.f)(o) && (be && _ || !be && v),
						Pe = Object(i.useCallback)(() => {
							Ee && !be && ee && ee(o.id)
						}, [o.id, ee, Ee, be]),
						we = Object(_t.a)(o),
						ke = !!te && Object(as.b)(o.profileImage);
					return a.a.createElement(gs, {
						className: Object(l.a)(`Comment ${o.id}`, os.a.CommentWrapper, {
							[os.a.highlightComment]: w,
							[os.a.deleted]: ne,
							[os.a.focused]: b,
							[os.a.redesign]: O,
							[os.a.topLevel]: !p
						})
					}, ge, xe, !y && !ne && E && a.a.createElement("div", {
						className: os.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt="" src="${ns.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstCommentVisible || function(){})();" />\n              `
						}
					}), a.a.createElement(cs, {
						className: Object(l.a)(o.id, {
							[os.a.hidden]: !r,
							[os.a.visible]: r
						}),
						onClick: () => {
							s(), M(), J("collapse", o.id)()
						},
						onMouseOver: () => R(o.id),
						onMouseOut: s
					}), a.a.createElement(Oe, {
						alwaysShowChildren: !0,
						hoverDivClassName: os.a.AuthorHoverDiv,
						postOrComment: o,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: Z ? wt.c.Lightbox : void 0,
						collapsed: r,
						isCommentAuthorBlocked: Object(me.g)(o)
					}, a.a.createElement(ve, {
						className: os.a.UserIconContainer,
						to: `/user/${o.author}/`
					}, ye ? a.a.createElement(a.a.Fragment, null, se && a.a.createElement("div", {
						className: os.a.supporterRing
					}), a.a.createElement(It.a, {
						isNft: ke,
						className: Object(l.a)(os.a.UserIcon, {
							[os.a.UserIconNft]: ke
						}),
						iconUrl: o.profileImage,
						isNSFW: o.profileOver18 || !1,
						nsfwIconUrl: jt.a,
						userName: o.author,
						isHighlighted: w,
						shouldShowPresenceIndicator: Ee,
						onPresenceIndicatorInViewport: Pe,
						isCommentAuthorBlocked: Object(me.g)(o),
						collapsed: r
					})) : a.a.createElement("div", {
						className: os.a.UserIcon
					}), L && a.a.createElement(St.a, {
						onClick: e => {
							oe(Object(W.z)("comment")), K(), e.stopPropagation(), e.preventDefault()
						},
						className: os.a.topSupporterIcon,
						title: F.fbt._("Powerups Top Supporter", null, {
							hk: "1GLWsz"
						})
					}))), a.a.createElement(bs, {
						className: Object(l.a)({
							[os.a.isActive]: f,
							[os.a.isCollapsed]: r,
							[os.a.isLocked]: pe && ue,
							[os.a.isPendingDeletion]: I,
							[os.a.isRemoved]: !!o.bannedBy && ue
						})
					}, a.a.createElement(Ht.a, null, F.fbt._("level {depth}", [F.fbt._param("depth", p + 1)], {
						hk: "2XnyAV"
					})), a.a.createElement(hs, {
						userHasNft: ke,
						childrenInfo: t,
						className: Object(l.a)({
							[os.a.collapsed]: r,
							[os.a.noFlair]: Object(Kt.o)(h || null)
						}),
						collapsed: r,
						collapsedBecauseCrowdControl: d,
						comment: o,
						commentsPageKey: n,
						flair: h,
						isPostComment: !0,
						renderedInOverlay: Z,
						renderContractorBadge: le
					}), !r && a.a.createElement(i.Fragment, null, y && a.a.createElement(q.a, {
						className: Object(l.a)(os.a.EditCommentForm, os.a.CommentCreation, {
							[os.a.CommentCreationWithUpvote]: S
						}),
						autofocus: !0,
						commentsPageKey: n,
						depth: p,
						draftType: V.c.edit,
						draftKey: ie,
						postId: z,
						rtJson: Object(_t.a)(o),
						mediaMetadata: o.media && o.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: o.id,
						submitAction: e => Object(H.i)({
							id: o.id,
							commentsPageKey: n,
							depth: p,
							draftKey: ie,
							formData: e
						}),
						submitButtonText: F.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !y && !ne && a.a.createElement(Cs, {
						"data-test-id": Lt.d
					}, G ? a.a.createElement(Ot.a, {
						comment: o,
						prediction: G
					}) : a.a.createElement(kt.a, {
						content: we,
						mediaMetadata: o.media && o.media.mediaMetadata,
						rtJsonElementProps: Os(e)
					}), a.a.createElement(Yt.b, {
						content: we
					})), N && de && Object(Ie.c)(o) && a.a.createElement(Pt.a, {
						onIgnoreReports: A,
						reportable: o
					}), he && a.a.createElement(us, null, O && a.a.createElement(ps, {
						downvoteButtonClassName: os.a.voteButton,
						downvoteClassName: os.a.upDownVote,
						model: o,
						onVoteClick: U,
						scoreClassName: os.a.score,
						upvoteButtonClassName: os.a.voteButton,
						upvoteClassName: os.a.upDownVote,
						triggerCelebratoryMoment: X
					}), a.a.createElement(ls, {
						comment: o,
						commentsPageKey: n,
						depth: p,
						isAvatarsInCommentsEnabled: O,
						collapsedBecauseCrowdControl: d,
						modModeEnabled: N,
						moderatorPermissions: c || T,
						renderedInOverlay: Z,
						isCommentFocused: b,
						subreddit: Q,
						trackCommentClick: J
					})), re && u.map(e => a.a.createElement(ms, {
						key: e
					}, e)), Y && a.a.createElement(q.a, {
						className: Object(l.a)(os.a.EditCommentForm, os.a.CommentCreation, {
							[os.a.CommentCreationWithUpvote]: S
						}),
						autofocus: !0,
						commentsPageKey: n,
						depth: p,
						draftType: V.c.replyToComment,
						draftKey: ae,
						isTopLevelComment: !1,
						parentCommentId: o.id,
						postId: z,
						submitAction: ({
							validate: e,
							...t
						}, s) => e ? Object(H.s)({
							commentsPageKey: n,
							draftKey: ae,
							parentCommentDepth: p,
							parentCommentId: o.id,
							formData: t,
							editorMode: s
						}) : Object(H.l)({
							commentsPageKey: n,
							draftKey: ae,
							parentCommentDepth: p,
							parentCommentId: o.id,
							formData: t,
							editorMode: s
						}),
						submitButtonText: F.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			var ws = e => a.a.createElement(Nt.a.Consumer, null, t => a.a.createElement(Ps, ds({}, e, {
					trackCommentClick: t
				}))),
				ks = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				Is = s("./src/reddit/contexts/InsideOverlay.tsx"),
				js = s("./src/reddit/helpers/path/index.ts"),
				_s = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Ss = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				Ls = s.n(Ss);
			const {
				fbt: Ts
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ns = p.a.div("Wrapper", Ls.a), Ms = p.a.wrapped(_s.a, "ArrowRight", Ls.a), As = p.a.wrapped(ks.a, "LinkOrOverlayLink", Ls.a), Rs = p.a.span("HoverSpan", Ls.a), Fs = Object(c.c)({
				permalink: (e, t) => Object(L.m)(e, {
					commentId: Object(L.r)(e, t).parentId
				})
			});
			var Bs = Object(d.b)(Fs)(Object(Is.b)(({
					isActive: e,
					isOverlay: t,
					permalink: s
				}) => a.a.createElement(Ns, {
					className: Object(l.a)({
						[Ls.a.isActive]: e
					})
				}, a.a.createElement(As, {
					isOverlay: !!t,
					to: Object(js.b)(s)
				}, a.a.createElement(Rs, null, Ts._("Continue this thread", null, {
					hk: "3eplK8"
				})), " ", a.a.createElement(Ms, null))))),
				Vs = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				Ds = s.n(Vs);
			const {
				fbt: Us
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ws = p.a.div("MoreCommentsItemWrapper", Ds.a), Hs = p.a.p("MoreComments", Ds.a), Ks = p.a.wrapped(Hs, "MoreCommentsInteractive", Ds.a), Gs = Object(c.c)({
				moreCommentsItem: L.D,
				moreCommentsPending: L.E
			});
			var qs = Object(d.b)(Gs, (e, t) => ({
					moreCommentsClicked: () => e(Object(h.l)(t.commentsPageKey, t.moreCommentsId))
				}))(({
					isActive: e,
					moreCommentsClicked: t,
					moreCommentsItem: s,
					moreCommentsPending: o
				}) => a.a.createElement(Ws, null, o ? a.a.createElement(Hs, null, Us._("loading...", null, {
					hk: "47z89"
				})) : a.a.createElement(Nt.a.Consumer, null, o => a.a.createElement(Ks, {
					className: Object(l.a)({
						[Ds.a.isActive]: e
					}),
					onClick: () => {
						t(), o("load_more_comment")()
					}
				}, Us._({
					"*": "{number of more replies hidden} more replies",
					_1: "1 more reply"
				}, [Us._plural(s.numComments, "number of more replies hidden")], {
					hk: "J0jQW"
				}))))),
				zs = s("./node_modules/lodash/times.js"),
				Ys = s.n(zs),
				Qs = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				Js = s.n(Qs);
			const Xs = p.a.wrapped(e => a.a.createElement("div", e, a.a.createElement("i", {
					className: C.m
				})), "Line", Js.a),
				Zs = p.a.div("LineContainer", Js.a),
				$s = p.a.div("ShortLineContainer", Js.a);
			var eo = e => {
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
					return a.a.createElement(Zs, null, Ys()(s + 1, e => e === s ? m !== b.a.Comment || t ? null : a.a.createElement($s, {
						key: c[e]
					}, a.a.createElement(Xs, {
						className: Object(l.a)(c[e], {
							[Js.a.hasGlowBorder]: !!o,
							[Js.a.topLevel]: 0 === s
						}),
						onClick: d,
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})) : a.a.createElement(Xs, {
						className: c[e],
						key: c[e],
						onClick: n(e),
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})))
				},
				to = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				so = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				oo = s.n(so);
			const no = p.a.div("CommentListNodeWrapper", oo.a),
				ro = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(C.f)
				},
				io = () => {
					const e = document.querySelectorAll(`.${C.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(C.f)
				};
			var ao = Object(d.b)(() => Object(c.c)({
				collapsed: (e, {
					commentLink: t,
					commentsPageKey: s
				}) => Object(ts.b)(e, {
					commentId: t.id,
					commentsPageKey: s
				}),
				commentListNode: (e, t) => Object(L.l)(e, t),
				depth: (e, t) => Object(L.j)(e, t),
				highlightTreatment: (e, {
					commentLink: t
				}) => {
					let s = null;
					const o = Object(L.l)(e, {
						commentLink: t
					});
					if (o && t.type === b.a.Comment) {
						s = I(o.treatmentTags)
					}
					return s
				},
				isActive: (e, {
					commentLink: t
				}) => !!e.shortcuts.activeCommentId && t.id === e.shortcuts.activeCommentId,
				isAvatarsInCommentsEnabled: to.a,
				isAwarded: (e, {
					commentLink: t
				}) => {
					const s = Object(L.l)(e, {
						commentLink: t
					});
					return !(t.type !== b.a.Comment || !s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(N.a)(e, t);
						return s && s.coinPrice >= x.g
					})
				},
				isHighlighted: (e, {
					commentLink: t
				}) => {
					const s = Object(L.p)(e);
					if (s === S.a.None) return !1;
					if (t.type !== b.a.Comment) return !1;
					const o = t.id,
						n = Object(T.a)(e, {
							commentId: o
						});
					if (!n) return !1;
					const r = Object(R.r)(e),
						i = !!Object(M.k)(e, {
							postId: n.postId
						}),
						a = Object(A.I)(e, {
							postId: n.postId
						});
					if (!a || !a.previousVisits || a.previousVisits.length < 1) return !1;
					const d = s === S.a.Last ? a.previousVisits[a.previousVisits.length - 1] : a.previousVisits[0];
					return (i || r) && n.created > d
				}
			}), (e, {
				commentLink: t,
				commentsPageKey: s,
				scrollToAndRemeasure: o
			}) => ({
				onLineClick: n => () => {
					e(Object(h.d)({
						commentLink: t,
						commentsPageKey: s,
						lineDepth: n,
						scrollToAndRemeasure: o
					}))
				},
				onShortLineClick: () => e(Object(h.o)({
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
					isHidden: h,
					isHighlighted: C,
					onLineClick: x,
					onPresenceIndicatorInViewport: f,
					onShortLineClick: v,
					parentNodeIds: O,
					postId: y,
					renderedInOverlay: E,
					scrollToAndRemeasure: P,
					triggerCelebratoryMoment: w
				} = e, k = !!p, I = !(!d || !d.glowHexColor), j = I && i > 0, _ = I, S = a.a.createElement(no, {
					className: Object(l.a)(s, {
						[oo.a.isHidden]: h,
						[oo.a.glowBorderTopPadding]: j,
						[oo.a.glowBorderBottomPadding]: _
					}),
					id: n.id,
					style: {
						paddingLeft: i * (g.w + g.v) + (n.type === b.a.Comment ? g.w : 0)
					},
					tabIndex: -1
				}, a.a.createElement(eo, {
					collapsed: o,
					depth: i,
					hasGlowBorder: j,
					onLineClick: x,
					onLineMouseOver: ro,
					onLineMouseOut: io,
					onShortLineClick: v,
					type: n.type,
					parentNodeIds: O
				}), co({
					childrenInfo: t,
					clearHovered: io,
					commentLink: n,
					commentsPageKey: r,
					onLineMouseOver: ro,
					hasAwardGradient: k,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isFirstInList: u,
					isHighlighted: C,
					postId: y,
					renderedInOverlay: E,
					scrollToAndRemeasure: P,
					onPresenceIndicatorInViewport: f,
					triggerCelebratoryMoment: w
				}));
				return m && n.type === b.a.Comment ? a.a.createElement(Dt, null, S) : S
			});
			const co = ({
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
				postId: p,
				renderedInOverlay: u,
				scrollToAndRemeasure: h,
				onPresenceIndicatorInViewport: g,
				triggerCelebratoryMoment: C
			}) => {
				switch (s.type) {
					case b.a.Comment:
						return a.a.createElement(ws, {
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
							postId: p,
							renderedInOverlay: u,
							scrollToAndRemeasure: h,
							onPresenceIndicatorInViewport: g,
							triggerCelebratoryMoment: C
						});
					case b.a.MoreComments:
						return a.a.createElement(qs, {
							commentsPageKey: o,
							isActive: i,
							moreCommentsId: s.id
						});
					case b.a.ContinueThread:
						return a.a.createElement(Bs, {
							id: s.id,
							isActive: i
						})
				}
			};
			var lo = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				mo = s("./src/reddit/components/Comments/States/index.tsx"),
				po = s("./src/reddit/components/Scroller/Simple.tsx"),
				uo = s("./src/reddit/constants/elementIds.ts"),
				ho = s("./src/reddit/featureFlags/index.ts"),
				bo = s("./src/reddit/helpers/commentList/index.ts"),
				go = s("./src/reddit/helpers/trackers/comment.ts"),
				Co = s("./src/telemetry/index.ts"),
				xo = s("./src/lib/LRUCache/index.ts"),
				fo = s("./src/reddit/components/Comments/index.m.less"),
				vo = s.n(fo);
			const Oo = g.f + 10,
				yo = 65,
				Eo = p.a.wrapped(po.b, "Scroller", vo.a),
				Po = Object(c.c)({
					allCollapsed: L.a,
					commentLinks: L.k,
					commentThreadLinkSet: L.o,
					measureScrollFPS: ho.d.measureScrollFPS,
					moreComments: L.b,
					postPermalink: A.H
				}),
				wo = Object(d.b)(Po, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(u.c)(t)),
					onCommentEnteredViewport: t => e(Object(h.e)(t)),
					onCommentLeftViewport: (t, s) => e(Object(h.h)(t, s))
				})),
				ko = new xo.a(500),
				Io = new xo.a(500),
				jo = (e, t) => {
					const s = `entered-${e}`;
					let o = ko.get(s);
					return void 0 === o && (o = () => {
						t(e)
					}, ko.set(s, o)), o
				},
				_o = (e, t) => {
					const s = `left-${e}`;
					let o = Io.get(s);
					return void 0 === o && (o = s => {
						t(e, s)
					}, Io.set(s, o)), o
				};
			class So extends a.a.Component {
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
						}), this.props.sendEvent(Object(go.b)(e)))
					}, this.parentNodeIdsMap = {}, lo.c(), this.childrenInfoMap = {}, this.state = {
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
					this.timerId && Co.c.cancel(this.timerId), e.length && (this.timerId = Co.c.start()), this.findHiddenNodes(e, t, s, o)
				}
				componentDidMount() {
					this.timerId && Object(Co.b)(m.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Co.c.end(this.timerId)
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks)
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
					this.timerId && Co.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = Co.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(Co.b)(m.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Co.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && Co.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, o) {
					if (!t || !Object.keys(t).length) return;
					let n = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					lo.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						n && (s[c.id].depth > r ? (lo.a(c.id), i += Object(bo.d)(c, o), c.type === b.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[n] = {
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
						postId: r,
						renderedInOverlay: i,
						triggerCelebratoryMoment: d
					} = this.props, c = jo(e.id, o), l = _o(e.id, n);
					return {
						estHeight: lo.b(e.id) ? 0 : yo,
						id: e.id,
						trackOnEnteredViewport: c,
						trackOnExitedViewport: l,
						render: ({
							placeholderRecommended: o,
							height: n,
							width: c,
							scrollToAndRemeasure: l
						}) => o ? a.a.createElement("div", {
							style: {
								height: n,
								backgroundColor: "#fff"
							}
						}) : a.a.createElement(ao, {
							childrenInfo: this.getChildrenInfo(e.id),
							commentLink: e,
							commentsPageKey: s,
							id: e.id,
							isFirstInList: 0 === t,
							isHidden: lo.b(e.id),
							postId: r,
							scrollToAndRemeasure: l,
							renderedInOverlay: !!i,
							parentNodeIds: this.getParentNodeIds(e),
							onPresenceIndicatorInViewport: this.onPresenceIndicatorInViewport,
							triggerCelebratoryMoment: d
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
					return a.a.createElement(Eo, {
						className: Object(l.a)(vo.a.Scroller, e),
						disableScrollCache: n,
						key: s,
						getContainer: () => n ? document.getElementById(uo.d) : null,
						preventScrollOnMount: !0,
						scrollToChildPadding: Oo,
						trackingName: r
					}, i)
				}
				renderEmptyState() {
					return this.props.commentId ? a.a.createElement(mo.g, {
						link: this.props.postPermalink
					}) : a.a.createElement(mo.c, null)
				}
			}
			t.a = wo(Object(Te.c)(So))
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
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
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
				E = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				P = s("./src/reddit/featureFlags/component.tsx"),
				w = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				k = s("./src/reddit/models/Post/index.ts"),
				I = s("./src/reddit/selectors/experiments/postSeo.ts"),
				j = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				T = s.n(L);
			const N = Object(P.a)("spPoints", h.a),
				M = Object(P.a)("spLeaderboard", b.a),
				A = Object(o.a)({
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
				R = Object(c.c)({
					isLoggedIn: S.J,
					postSEOV2IdCardVariant: I.h,
					shouldShowReredditPromo: j.a,
					widgets: Object(p.a)(_.r)
				}),
				F = Object(d.b)(R);
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
					} = this.props, d = !Object(I.c)(i) && !Object(I.f)(i);
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
					const b = Object(I.c)(r) || Object(I.f)(r),
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
					}, Object(k.p)(n) ? a.a.createElement(A, {
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
					}, a.a.createElement(E.a, {
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
				b = s("./src/reddit/selectors/meta.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				x = s.n(C);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = "500px", O = 3, y = Object(i.c)({
				hasDismissedTruncation: u.b,
				isGQLLoggedIn: g.I,
				isLoggedIn: g.J,
				isPostSEOEligible: h.e,
				isSEOSession: b.g,
				postSEOV2TruncatedVariant: h.i
			}), E = Object(r.b)(y);
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
						isSEOSession: g,
						numberOfComments: C,
						onClick: y,
						subredditOrProfile: E
					} = this.props, P = !(!E || Object(m.h)(E)), w = g && d && P && (C >= O && !b || !r) && (!u && !h), k = w && !e, I = w ? x.a.TruncatedComments : "";
					return n.a.createElement("div", {
						onClick: y,
						ref: i
					}, n.a.createElement("div", {
						className: Object(a.a)(x.a.ContentWrapper, s, I),
						style: {
							"--commentswrapper-gradient-color": Object(p.a)(this.props).body,
							maxHeight: w ? v : "unset"
						}
					}, t), k && n.a.createElement(l.i, {
						className: x.a.MoreCommentsButton,
						onClick: o,
						"data-redditstyle": !0
					}, f._("View Entire Discussion ({number of comments} Comments)", [f._param("number of comments", Object(c.b)(C))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(d.a)(E(P))
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
					title: d,
					textWrapperClassName: m
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
				}), o ? n.a.createElement(c, null, o) : n.a.createElement(c, null), n.a.createElement(l, {
					className: m
				}, n.a.createElement("div", {
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
					subreddit: p.z,
					subredditAboutInfo: p.w
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
		"./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				bannerBase: "_1H6_lZclv3OiOYYLJ3oAEN",
				BlockIcon: "_3XxN6-i7j-QnWYRDuXOG5a",
				blockIcon: "_3XxN6-i7j-QnWYRDuXOG5a",
				blockedAuthorTextWrapper: "m2v6rWFRpijpyTUSArDdl",
				expandButton: "_1elWTUH22waxJo7g8N3y3J"
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
				E = s("./src/reddit/helpers/trackers/post.ts"),
				P = s("./src/reddit/actions/tooltip.ts"),
				w = s("./node_modules/lodash/find.js"),
				k = s.n(w),
				I = s("./node_modules/react-motion/lib/react-motion.js");
			const j = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				_ = {},
				S = (e = [], t) => {
					const s = k()(e, {
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
							opacity: Object(I.spring)(1, j)
						}
					}] : [{
						key: "expando_content",
						style: {
							opacity: .1
						}
					}] : o < .1 ? [] : [{
						key: "expando_content",
						style: {
							opacity: Object(I.spring)(0, j)
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
					return i.a.createElement(I.TransitionMotion, {
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
				A = s("./src/reddit/selectors/activeModalId.ts"),
				R = s("./src/reddit/selectors/experiments/categories.ts"),
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
				X = s("./src/reddit/components/ExpandoButton/index.tsx"),
				Z = s("./src/reddit/components/FlairWrapper/index.tsx"),
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
				getComponent: () => Object(ae.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
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
				Ee = s("./src/reddit/helpers/postEvent.ts"),
				Pe = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				we = s("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				ke = s("./src/reddit/selectors/postFlair.ts"),
				Ie = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				je = s("./src/reddit/selectors/experiments/econ/index.ts"),
				_e = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Se = s("./node_modules/fbt/lib/FbtPublic.js"),
				Le = s("./src/reddit/constants/colors.ts"),
				Te = s("./src/reddit/icons/fonts/index.tsx"),
				Ne = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Me = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Ae = s.n(Me);
			const Re = i.a.createElement(Te.a, {
				className: Ae.a.BlockIcon,
				name: "block"
			});
			var Fe = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return i.a.createElement(Ne.a, {
						className: Ae.a.bannerBase,
						color: Le.b.dayModeActionIcon,
						icon: Re,
						title: Se.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && i.a.createElement("button", {
							className: Ae.a.expandButton,
							onClick: t
						}, Se.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: Ae.a.blockedAuthorTextWrapper
					})
				},
				Be = s("./src/config.ts"),
				Ve = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				De = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				Ue = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				We = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				He = s.n(We);
			const {
				fbt: Ke
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ge = () => Ke._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [Ke._param("=User Agreement", i.a.createElement("a", {
				className: He.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, Ke._("User Agreement", null, {
				hk: "3MHgRl"
			}))), Ke._param("=Content Policy", i.a.createElement("a", {
				className: He.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, Ke._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), qe = () => Ke._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [Ke._param("=User Agreement", i.a.createElement("a", {
				className: He.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, Ke._("User Agreement", null, {
				hk: "yMHtU"
			}))), Ke._param("=Content Policy", i.a.createElement("a", {
				className: He.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, Ke._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var ze = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: o,
					subredditName: n
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return Ke._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case N.g.Author:
							return Ke._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case N.g.AuthorDeleted:
							return Ke._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case N.g.AutomodFiltered:
							return Ke._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case N.g.CommunityOps:
							return Ke._("This post was removed by Reddit admin, u/{username}.", [Ke._param("username", t)], {
								hk: "34nHWu"
							});
						case N.g.ContentTakedown:
							return Ke._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case N.g.CopyrightTakedown:
							return Ke._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case N.g.Moderator:
							return Ke._("This post was removed by r/{subredditName} moderator, u/{username}.", [Ke._param("subredditName", s), Ke._param("username", t)], {
								hk: "270bcn"
							});
						case N.g.Reddit:
							return Ke._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return Ke._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(o, s, n) : ((e, t) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return Ke._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case N.g.Author:
							return Ke._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case N.g.AuthorDeleted:
							return Ke._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case N.g.AutomodFiltered:
							return Ke._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case N.g.CommunityOps:
							return Ke._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case N.g.ContentTakedown:
							return Ke._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case N.g.CopyrightTakedown:
							return Ke._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case N.g.Moderator:
							return Ke._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [Ke._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case N.g.Reddit:
							return Ke._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return Ke._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(o, n), a = t ? (e => {
					switch (e) {
						case N.g.AntiEvilOps:
							return i.a.createElement(Ge, null);
						case N.g.AuthorDeleted:
						case N.g.Author:
							return Ke._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case N.g.AutomodFiltered:
							return Ke._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case N.g.CommunityOps:
							return Ke._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [Ke._param("=just ask", i.a.createElement("a", {
								className: He.a.link,
								href: `${Be.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, Ke._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case N.g.ContentTakedown:
							return i.a.createElement(qe, null);
						case N.g.CopyrightTakedown:
							return Ke._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case N.g.Moderator:
							return Ke._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case N.g.Reddit:
							return Ke._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return Ke._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(o) : ((e, t) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return i.a.createElement(Ge, null);
						case N.g.AuthorDeleted:
						case N.g.Author:
							return Ke._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case N.g.AutomodFiltered:
							return Ke._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [Ke._param("=[subreddit name]", i.a.createElement("a", {
								className: He.a.link,
								href: `${Be.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, Ke._("{subreddit name}", [Ke._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case N.g.CommunityOps:
							return Ke._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case N.g.ContentTakedown:
							return i.a.createElement(qe, null);
						case N.g.CopyrightTakedown:
							return Ke._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case N.g.Moderator:
							return Ke._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case N.g.Reddit:
						default:
							return Ke._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(o, n), d = t ? Le.b.warning : Le.b.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case N.g.AntiEvilOps:
						case N.g.AutomodFiltered:
						case N.g.CommunityOps:
						case N.g.ContentTakedown:
						case N.g.CopyrightTakedown:
						case N.g.Reddit:
							t = Ve.a;
							break;
						case N.g.AuthorDeleted:
						case N.g.Author:
							t = Ue.b;
							break;
						case N.g.Moderator:
							t = De.a;
							break;
						default:
							t = Ve.a
					}
					return i.a.createElement(t, {
						className: He.a.icon
					})
				})(o);
				return i.a.createElement(Ne.a, {
					className: He.a.BannerBase,
					color: d,
					icon: c,
					subtitle: a,
					title: r
				})
			};

			function Ye(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: o
				} = e;
				return i.a.createElement(i.a.Fragment, null, o && s.removedByCategory && i.a.createElement(ze, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: o.name
				}))
			}
			var Qe = s("./src/lib/prettyPrintNumber/index.ts"),
				Je = s("./src/reddit/components/PostContent/viewCount.m.less"),
				Xe = s.n(Je);
			var Ze = ({
					post: e,
					showViewCount: t
				}) => {
					const {
						upvotePercentString: s,
						viewCountString: o
					} = (e => {
						const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
							s = Object(Qe.b)(e.viewCount);
						return {
							upvotePercentString: Se.fbt._("{percent upvoted}% Upvoted", [Se.fbt._param("percent upvoted", t)], {
								hk: "432tjJ"
							}),
							viewCountString: Se.fbt._({
								"*": "{number of views} Views",
								_1: "1 View"
							}, [Se.fbt._plural(e.viewCount, "number of views", s)], {
								hk: "rP01m"
							})
						}
					})(e), n = t && !!e.viewCount;
					return i.a.createElement("div", {
						className: Xe.a.viewCounts
					}, n && i.a.createElement("span", null, o), n && !!e.upvoteRatio && i.a.createElement("span", {
						className: Xe.a.dotSpacer
					}), !!e.upvoteRatio && i.a.createElement("span", null, s))
				},
				$e = s("./src/reddit/components/PostContent/index.m.less"),
				et = s.n($e);
			const {
				fbt: tt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), st = u.a.wrapped(be.c, "PostTitle", et.a), ot = u.a.wrapped(X.a, "ExpandoButton", et.a), nt = u.a.wrapped(L, "ClassicExpandoMotion", et.a), rt = u.a.wrapped($.c, "FullWidthFlatlist", et.a), it = i.a.createElement("p", {
				className: et.a.VideoProcessingStatus
			}, tt._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), at = Object(ye.u)({
				isCommentsPage: ye.x,
				pageLayer: e => e
			}), dt = Object(a.b)(() => Object(l.c)({
				activeModalId: A.a,
				flairStyleTemplate: ye.U,
				currentUser: H.j,
				crosspost: U.d,
				hideNSFWPref: H.B,
				imageGalleryCurrentItem: U.i,
				isAdminOrMod: (e, t) => {
					const s = Object(U.V)(e, {
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
				isPostFollowEnabled: we.b,
				showPromotedCTA: W.a,
				post: U.I,
				moderatorPermissions: V.k,
				modModeEnabled: ye.S,
				isInCategoriesExperiment: R.a,
				showAwardsPlaque: F.a,
				showEditFlair: ke.a,
				subredditOrProfile: U.V,
				isEditing: D.K,
				userIsOp: H.qb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(_e.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(_e.c)(e, {
					postId: t.postId
				})
			}), (e, {
				pageLayer: t,
				postId: s
			}) => ({
				onIgnoreReports: () => e(Object(b.Z)(s)),
				onOpenReportsDropdown: t => e(Object(P.h)({
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
			})), ct = e => e.media && e.media.type === T.o.EMBED && e.media.provider === T.v.Imgur && e.media.height > 700, lt = u.a.wrapped(d.a, "ThumbLink", et.a), mt = ({
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
				}) : i.a.createElement(lt, {
					to: Object(O.b)(e.permalink)
				}, i.a.createElement(z.a, {
					post: e,
					forceShowNSFW: !0
				}));
				return i.a.createElement("div", {
					className: et.a.classicThumbnail
				}, s && i.a.createElement(ne.a, {
					className: et.a.classicNotificationButton,
					isFilled: !!o,
					onClick: n,
					hasTooltip: !0,
					tooltipText: tt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), r)
			}, pt = ({
				post: e,
				isExpanded: t,
				scrollerItemRef: s
			}) => i.a.createElement(nt, {
				content: i.a.createElement(i.a.Fragment, null, i.a.createElement(pe.a, {
					className: et.a.ClassicPostMedia,
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
			t.a = at(dt(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: o,
					fireAdPixelsOfType: d,
					flairStyleTemplate: l,
					forceOpenInNewTab: u,
					hideNSFWPref: b,
					imageGalleryCurrentItem: O,
					isAdminOrMod: P,
					triggerCelebratoryMoment: w,
					isCommentCountAnimation: k,
					isCommentsPage: I,
					isCountAnimShadowTestEnabled: j,
					isCurrentUserProfilePost: _,
					isEditing: S,
					isExpanded: L,
					isFollowed: M,
					isFollowedExpired: A,
					isOverlay: R,
					isPostFollowEnabled: F,
					isVoteCountAnimation: B,
					moderatorPermissions: V,
					modModeEnabled: D,
					onFollowPost: U,
					onFollowPostExpired: W,
					onIgnoreReports: H,
					onOpenReportsDropdown: z,
					openPost: X,
					onVoteClick: ne,
					post: ie,
					scrollerItemRef: ae,
					sendEvent: de,
					showAwardsPlaque: ce,
					showEditFlair: ye,
					showPromotedCTA: we,
					subredditOrProfile: ke,
					userIsOp: _e
				} = e, Se = Object(fe.b)(), [Le, Te] = Object(r.useState)(ie.authorIsBlocked), Ne = Object(T.H)(ie), Me = Object(a.e)(e => Boolean(ie.predictionTournament) && Object(je.t)(e)), Ae = Object(a.e)(e => Object(Pe.a)(e)), Re = Object(c.a)(ie);
				Object(r.useEffect)(() => {
					F && A && W()
				}, []);
				const Be = ie.isSponsored ? Object(me.b)(ie.id, {
						fireAdPixelsOfType: d,
						openPost: X
					}) : n.a,
					Ve = Object(v.a)(V),
					De = Object(x.a)(V),
					Ue = Object(f.a)(V),
					We = Ve || De,
					He = ((e, t, s) => {
						const [o, n] = e ? [Object(C.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return o || t || n
					})(o, We, ie),
					Ke = !!ie.media && (ie.media.type === T.o.RTJSON || ie.media.type === T.o.TEXT),
					Ge = _e && Ke,
					qe = Object(oe.c)(ie);
				let ze;
				const Qe = !(D && v.a),
					Je = Object(ue.b)({
						hide: Qe,
						editPost: Qe,
						save: Qe,
						report: Qe
					}),
					Xe = ie.removedByCategory === N.g.AuthorDeleted,
					$e = o && (o.displayText === ie.author || o.username === ie.author),
					tt = !Xe && !ct(ie) && ($e || P || !(ie.removedByCategory && ie.media && (Object(T.K)(ie.media) || Object(T.I)(ie.media) || Object(T.E)(ie.media)))),
					nt = Object(m.t)(ie, O),
					{
						source: at
					} = nt,
					dt = ie.removedByCategory === N.g.Reddit && Object(h.e)(ie.created) > 24,
					lt = ie.removedByCategory && ie.removedByCategory !== N.g.Reddit || dt,
					ut = F && !lt && !ie.isArchived,
					ht = Object(r.useCallback)(() => {
						U(M ? N.f.UNFOLLOWED : N.f.FOLLOWED), Se(M ? Object(E.i)(ie.id) : Object(E.c)(ie.id))
					}, [U, Se, M, ie.id]),
					bt = i.a.createElement(st, {
						post: ie,
						size: be.b.ExtraLarge,
						showCategoryTag: R,
						isOverlay: R,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					gt = i.a.createElement(Ze, {
						post: ie,
						showViewCount: He
					}),
					Ct = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: o
						} = e, n = Object(a.e)(e => Boolean(o.predictionTournament) && Object(je.t)(e));
						return s ? Oe.g.Classic : n ? Oe.g.Large : t ? Oe.g.Large : o.media && !ct(o) ? Oe.g.Large : Oe.g.Medium
					})(e);
				if (Ct === Oe.g.Classic) {
					const t = Object(g.a)(ie);
					ze = i.a.createElement("div", {
						"data-test-id": ve.e
					}, i.a.createElement(he.a, {
						model: ie,
						handleVote: ne,
						isCountAnimShadowTestEnabled: j,
						isOverlay: R,
						isVoteCountAnimation: B,
						postId: ie.id
					}), i.a.createElement("div", {
						className: et.a.mainBody
					}, i.a.createElement("div", {
						className: et.a.content
					}, i.a.createElement(ge.a, {
						hideAwards: ce,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: I,
						isCurrentUserProfilePost: _,
						isOverlay: !!R,
						isTopicPage: !1,
						post: ie,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!R && !ie.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: ke,
						shouldShowFollowButton: ut && !t,
						isFollowed: M,
						onFollowPostClick: ht
					}), bt, i.a.createElement(Z.a, {
						className: I ? et.a.leftPadding : void 0,
						post: ie,
						showCategoryTag: e.isInCategoriesExperiment && I,
						sendEvent: de
					}), D && Ve && qe && i.a.createElement(se.a, {
						onIgnoreReports: H,
						reportable: ie
					}), i.a.createElement(ee.d, null), i.a.createElement("div", {
						className: et.a.FlatlistContainer
					}, Ae && Le ? i.a.createElement(Fe, {
						onBannerClick: () => Te(!1),
						isExpandable: Ne
					}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(ot, {
						crosspost: s || void 0,
						isExpanded: !!L,
						post: ie,
						useMediaIcons: !1
					}), pt(e)), ce && i.a.createElement(q.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: ie,
						tooltipType: R ? Ce.c.Lightbox : void 0
					}), i.a.createElement(rt, {
						currentUser: o,
						hasModFlairPerms: De,
						hasModFullPerms: Ue,
						hasModPostPerms: Ve,
						isOverlay: R,
						onIgnoreReports: H,
						onOpenReportsDropdown: z,
						modModeEnabled: D,
						post: ie,
						showUpvotePercent: !0,
						showViewCount: He,
						useFlatlistBreakpoints: Je,
						isCommentCountAnimation: k,
						isCountAnimShadowTestEnabled: j
					}))), t && i.a.createElement(mt, {
						post: ie,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: ut,
						isFollowed: M,
						onFollowPostClick: ht
					})))
				} else if (Ct === Oe.g.Medium) {
					const t = Object(g.a)(ie);
					ze = i.a.createElement("div", {
						"data-test-id": ve.e
					}, i.a.createElement(he.a, {
						model: ie,
						handleVote: ne,
						isCountAnimShadowTestEnabled: j,
						isOverlay: R,
						isVoteCountAnimation: B,
						postId: ie.id
					}), i.a.createElement("div", {
						className: et.a.mainBody
					}, i.a.createElement("div", {
						className: et.a.content
					}, i.a.createElement(ge.a, {
						hideAwards: ce,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: I,
						isCurrentUserProfilePost: _,
						isOverlay: !!R,
						isTopicPage: !1,
						post: ie,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!R && !ie.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: ke,
						shouldShowFollowButton: ut && !t,
						isFollowed: M,
						onFollowPostClick: ht
					}), bt, Ae && Le ? i.a.createElement(Fe, {
						onBannerClick: () => Te(!1),
						isExpandable: Ne
					}) : ie.source && i.a.createElement(xe.a, {
						post: ie,
						isCommentsPage: I
					}), Object(T.M)(ie) && it, i.a.createElement(Z.a, {
						className: I ? et.a.leftPadding : void 0,
						post: ie,
						showCategoryTag: e.isInCategoriesExperiment && I,
						sendEvent: de
					}), ke && lt && i.a.createElement(Ye, {
						isAdminOrMod: P,
						post: ie,
						subredditOrProfile: ke
					}), D && Ve && qe && i.a.createElement(se.a, {
						onIgnoreReports: H,
						reportable: ie
					})), t && !Re && i.a.createElement(te.a, {
						post: ie,
						forceShowNSFW: !0,
						hasModPostPerms: We,
						isCommentsPage: I,
						isOverlay: !0,
						modModeEnabled: D,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: ke,
						shouldShowFollowButton: ut,
						isFollowed: M,
						onFollowPostClick: ht
					})), i.a.createElement(ee.d, null), ce && i.a.createElement(q.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: ie,
						tooltipType: R ? Ce.c.Lightbox : void 0
					}), i.a.createElement("div", {
						className: et.a.controlsContainer
					}, i.a.createElement($.c, {
						currentUser: o,
						hasModFlairPerms: De,
						hasModFullPerms: Ue,
						hasModPostPerms: Ve,
						isOverlay: R,
						modModeEnabled: D,
						onIgnoreReports: H,
						onOpenReportsDropdown: z,
						post: ie,
						showEditPost: Ge,
						showEditFlair: ye,
						tooltipType: R ? Ce.c.Lightbox : void 0,
						useFlatlistBreakpoints: Je,
						isCommentCountAnimation: k,
						isCountAnimShadowTestEnabled: j
					}), gt))
				} else Ct === Oe.g.Large && (ze = i.a.createElement("div", {
					"data-test-id": ve.e
				}, i.a.createElement(he.a, {
					model: ie,
					handleVote: ne,
					isCountAnimShadowTestEnabled: j,
					isOverlay: R,
					isVoteCountAnimation: B,
					triggerCelebratoryMoment: w,
					postId: ie.id
				}), Me && Object(Ie.c)(ie) && i.a.createElement(i.a.Fragment, null, i.a.createElement(Q.a, {
					post: ie
				}), i.a.createElement(Y.a, {
					post: ie
				})), !Me && i.a.createElement(i.a.Fragment, null, i.a.createElement(ge.a, {
					forceOpenInNewTab: u,
					hideAwards: ce,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: I,
					isCurrentUserProfilePost: _,
					isOverlay: !!R,
					isTopicPage: !1,
					post: ie,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!R && !ie.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: ke,
					shouldShowFollowButton: ut,
					isFollowed: M,
					onFollowPostClick: ht
				}), bt, ((e, t, s, o) => e.source && !t && (s || o))(ie, s, R, I) && i.a.createElement(xe.a, {
					post: ie,
					isCommentsPage: I
				})), i.a.createElement(Z.a, {
					className: I ? et.a.leftPadding : void 0,
					post: ie,
					showCategoryTag: e.isInCategoriesExperiment && I,
					sendEvent: de
				}), ke && lt && i.a.createElement(Ye, {
					isAdminOrMod: P,
					post: ie,
					subredditOrProfile: ke
				}), S && i.a.createElement(le, {
					post: ie
				}), Ae && Le ? i.a.createElement(Fe, {
					onBannerClick: () => Te(!1),
					isExpandable: Ne
				}) : tt && !S && i.a.createElement(pe.a, {
					className: Object(p.a)(et.a.LargePostMedia, {
						[et.a.isCommentsPage]: I
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: R,
					isOverlay: R,
					post: ie,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !R,
					showCentered: !0,
					showPromotedCTA: we,
					scrollerItemRef: ae
				}), we && at && at.url && i.a.createElement(K.a, {
					className: et.a.adLinkWrapper
				}, i.a.createElement(G.a, {
					post: ie,
					adLinkContent: nt
				})), D && Ve && qe && i.a.createElement(se.a, {
					onIgnoreReports: H,
					reportable: ie
				}), i.a.createElement(ee.d, null), ce && i.a.createElement(q.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: ie,
					tooltipType: R ? Ce.c.Lightbox : void 0
				}), i.a.createElement("div", {
					className: et.a.controlsContainer
				}, i.a.createElement($.c, {
					currentUser: o,
					forceOpenInNewTab: u,
					hasModFlairPerms: De,
					hasModFullPerms: Ue,
					hasModPostPerms: Ve,
					isOverlay: R,
					modModeEnabled: D,
					onIgnoreReports: H,
					onOpenReportsDropdown: z,
					post: ie,
					showEditPost: Ge,
					showEditFlair: ye,
					tooltipType: R ? Ce.c.Lightbox : void 0,
					useFlatlistBreakpoints: Je,
					isCommentCountAnimation: k,
					isCountAnimShadowTestEnabled: j
				}), gt)));
				const xt = Object(r.useCallback)((e, t) => Object(E.h)(e, t), []);
				return i.a.createElement(re.a, {
					className: Object(p.a)(t, et.a.postContainer, {
						[et.a.hasEventMeta]: Object(Ee.a)(ie)
					}),
					isOverlay: R,
					post: ie,
					eventFactory: R ? y.b : xt,
					onClick: Be
				}, i.a.createElement(J.a, {
					post: ie
				}), ze)
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
				return X
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
				E = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				P = s("./src/reddit/components/Scroller/Simple.tsx"),
				w = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/constants/componentSizes.ts"),
				I = s("./src/reddit/constants/postLayout.ts"),
				j = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/controls/OutboundLink/index.tsx"),
				S = s("./src/reddit/helpers/getClickInfo.ts"),
				L = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				T = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/helpers/brandSafety/index.ts"),
				A = s("./src/reddit/helpers/trackers/ads.ts"),
				R = s("./src/lib/LRUCache/index.ts"),
				F = s("./src/telemetry/index.ts"),
				B = s("./src/telemetry/models/Timer.ts"),
				V = s("./src/reddit/components/PostList/index.m.less"),
				D = s.n(V);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = 500, H = new R.a(W), K = new R.a(W), G = new R.a(W), q = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5,
				SEARCH: 3
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
			}, X = (e, t, s = !1) => {
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
							n && (t = Object(_.a)(o.id, n, t).url), Object(A.a)(o, i), Object(v.d)(t, v.c.BLANK)
						}
					} else t.openPost({
						postOrComment: o,
						clickInfo: Object(S.a)(e),
						isFrontpage: s
					})
				}, G.set(o, n)), n
			}, Z = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class $ extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new R.a(W), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.updateScrollerRef = e => {
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
						shouldHideFlair: E,
						triggerCelebratoryMoment: P,
						triggerNewPostPill: w,
						postIds: k
					} = this.props, j = 0 === t, _ = `post-${o}-${e}-${t}-${s?"last-index":""}-${x}-${g}-${v}`;
					let S;
					if (void 0 === (S = this.scrollChildCache.get(_))) {
						const {
							inSubredditOrProfile: T,
							postsById: M
						} = this.props, A = M[e], R = A.crosspostRootId && M[A.crosspostRootId] ? M[A.crosspostRootId] : A;
						A.crosspostRootId && !M[A.crosspostRootId] && O.c.withScope(e => {
							e.setExtra("errorType", C.r.API), e.setExtra("description", `Post ${A.id} is crosspost of ${A.crosspostRootId}, but ` + `${A.crosspostRootId} details are missing in the state`), O.c.captureMessage("Crosspost parent details are missing")
						});
						const F = this.props.postComponentForLayout({
							isCrosspost: !!A.crosspostRootId,
							isFirstPost: j,
							layout: o,
							post: R
						});
						let B = `post-list-item-[layout: ${o}]-[postId: ${e}]`;
						this.props.listingBelowVariant && g && (B += `--${g}`);
						const V = Q(e, o, s, g, x, v, this.props, t, this.props.hostPostData),
							D = J(e, o, this.props, t, f),
							U = X(e, this.props, d),
							W = R.media && R.media.type === N.o.EMBED ? R.media.provider : null,
							H = p && !A.isSponsored,
							K = u && !A.isSponsored && !A.isScoreHidden,
							G = !A.isSponsored && !A.isArchived;
						S = {
							estHeight: Object(L.c)(A, o),
							id: e,
							isFocusable: !(!R.media || !(o === I.g.Large || o === I.g.Classic && Object(N.G)(R.media))) && (N.d.has(R.media.type) && (!W || !N.s.has(W)) && !R.isSpoiler && !R.isNSFW),
							trackOnEnteredViewport: V,
							trackOnExitedViewport: D,
							render: ({
								className: o,
								height: p,
								width: u,
								remeasure: C,
								setScrollerChildRef: v,
								shouldLoadInitially: O
							}) => m.a.createElement(F, {
								className: o,
								currentProfileName: n,
								key: B,
								availableWidth: u,
								eventFactory: this.eventFactoryHandler,
								first: j,
								forceLoadMedia: O,
								hostPostData: r,
								inSubredditOrProfile: T,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: d,
								isProfilePostListing: c,
								isTopicPage: l,
								isCommentCountAnimationEnabled: H,
								isVoteCountAnimationEnabled: K,
								isCountAnimShadowTestEnabled: h,
								listingBelowVariant: b,
								listingIndex: t,
								listingKey: g,
								listingName: x,
								pageLayer: f,
								last: s,
								onClickPost: U,
								onSizeChanged: C,
								postId: e,
								postIds: k,
								redditStyle: y,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: v,
								shouldHideFlair: E,
								triggerCelebratoryMoment: G ? P : void 0,
								onceInViewport: w
							})
						}, this.scrollChildCache.set(_, S)
					}
					return S
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
					}), !!e && m.a.createElement(E.a, {
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
					}), !!e && m.a.createElement(E.a, {
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
						isSerpExperimentOverride: r,
						isTruncated: i,
						layout: a,
						location: d,
						loadMore: c,
						postIds: p,
						onLoadMore: u
					} = this.props;
					let b = p.map((e, t, s) => {
						const o = t === p.length - 1;
						return this.scrollChildForPost(e, t, o, a)
					});
					n && (b = Z(b, n));
					const x = this.props.measureScrollFPS ? `post-listings-${a}` : void 0,
						f = d ? Object(o.e)(d) : null,
						v = f || i;
					return m.a.createElement(l.Fragment, null, m.a.createElement(P.b, {
						innerRef: this.updateScrollerRef,
						className: v ? D.a.truncatedPostList : Object(g.a)(D.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: c && c.token ? c.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: u,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: k.f
					}, b), !r && f && m.a.createElement(z, {
						className: D.a.seeMoreButton
					}, m.a.createElement(j.a, {
						className: D.a.seeMorePostsText,
						to: Object(h.a)(f, {
							type: C.Wb.Posts
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				g = s("./src/reddit/constants/posts.ts"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/PostTopLine/index.m.less"),
				w = s.n(P);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: n,
				hideNSFWPref: P,
				hostPostData: k,
				iconClassName: I,
				inSubredditOrProfile: j,
				isCommentsPage: _,
				isCompactPinnedPost: S,
				isCurrentUserProfilePost: L,
				isOverlay: T,
				isTopicPage: N,
				listingKey: M,
				post: A,
				shouldShowSubscribeButton: R,
				showCornerOutboundLink: F,
				showSubreddit: B,
				showSubredditIcon: V,
				subredditOrProfile: D,
				isFollowed: U,
				shouldShowFollowButton: W,
				onFollowPostClick: H
			}) => {
				const K = n || N,
					G = D && Object(y.h)(D),
					q = Object(i.e)(e => {
						if (!G) return !0;
						const t = Object(E.tb)(e, A.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(w.a.container, e)
				}, B && D && r.a.createElement("div", {
					className: w.a.subredditIconWrapper
				}, r.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: D.url
				}, V && r.a.createElement(u.b, {
					className: Object(a.a)(w.a.subredditIcon, I),
					shouldHideNsfwIcon: P,
					subredditOrProfile: D
				}))), r.a.createElement("div", {
					className: w.a.everythingElseWrapper
				}, B && r.a.createElement(c.h, {
					type: A.belongsTo.type,
					id: A.belongsTo.id
				}), r.a.createElement(p.d, {
					className: w.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: T ? p.c.Lightbox : void 0,
					post: A,
					showSub: B,
					subredditOrProfile: D
				}), r.a.createElement(m.a, {
					className: w.a.postBadges,
					displayText: D ? D.displayText : null,
					inSubredditOrProfile: j,
					isCompactPinnedPost: S,
					post: A,
					tooltipType: T ? p.c.Lightbox : void 0
				}), !K && r.a.createElement(d.a, {
					isPostDetail: _,
					thing: A,
					tooltipType: T ? p.c.Lightbox : void 0
				})), D && q && B && R && !L && r.a.createElement(b.a, {
					className: w.a.SubscribeButton,
					getEventFactory: e => Object(f.h)(A.id, e ? "unsubscribe" : "subscribe", "post", M, k),
					identifier: {
						name: D.name,
						type: G ? g.a.PROFILE : g.a.SUBREDDIT
					},
					postId: A.id,
					size: C.c.XS
				}), F && r.a.createElement(x.b, {
					isSponsored: A.isSponsored,
					postId: A.id,
					href: Object(O.D)(A),
					source: A.source
				}, r.a.createElement(v.a, {
					className: w.a.outboundLinkIcon
				})), W && q && r.a.createElement(l.a, {
					isFilled: !!U,
					onClick: H,
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
				E = s("./src/reddit/helpers/trackers/lightbox.ts"),
				P = s("./src/reddit/helpers/trackers/screenview.ts"),
				w = s("./src/reddit/selectors/chatPost.ts"),
				k = s("./src/reddit/selectors/commentsListTruncated.ts"),
				I = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				j = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				_ = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				S = s("./src/reddit/selectors/i18n/index.ts"),
				L = s("./src/reddit/selectors/telemetry.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				N = s("./src/lib/classNames/index.ts"),
				M = s("./src/reddit/constants/listings.ts"),
				A = s("./src/reddit/controls/InternalLink/index.tsx"),
				R = s("./src/reddit/helpers/name/index.ts"),
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
					})) : d = o ? D._("See more posts like this in {subredditName}", [D._param("subredditName", Object(R.c)(r.displayText))], {
						hk: "pLxW5"
					}) : D._("Continue browsing in {subredditName}", [D._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(A.a, {
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
				}) => t, k.a, I.b, (e, t, s) => !((!t || s) && e)),
				q = Object(c.a)((e, {
					post: t
				}) => !!t && Object(O.a)(t), T.I, T.J, w.d, G, (e, t, s, o, n) => !t && !s && !o && !e && n),
				z = Object(c.a)((e, {
					post: t
				}) => t, j.c, L.request, L.subreddit, (e, t, s, o) => {
					const n = !!e && void 0 !== e.isEligibleForLinkedPosts;
					let r, i = "";
					if (t && e && n) {
						const {
							isEligibleForLinkedPosts: n,
							id: a
						} = e;
						i = Object(p.a)(a, Object(j.a)(t) || !n), r = {
							canonicalUrl: s.canonical_url,
							baseUrl: s.base_url,
							hostPostId: a,
							isEligibleForLinkedPosts: n,
							shouldShowLinkedPosts: n && !Object(x.je)(t) && !Object(j.a)(t),
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
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(C.d) : null, this.onViewed = (e, t) => Object(P.f)(this.listingKey(), l.U.TOP, t, e, l.cc.WEEK), this.onFooterClick = e => {
						this.props.sendEvent(Object(E.c)("recommended_footer"))
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
						t: l.cc.WEEK
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
					if (c && !Object(x.je)(c) && !Object(j.a)(c) && !i) return a.a.createElement("div", {
						className: K.a.smallBanner
					});
					const {
						name: l
					} = n, m = Object(y.a)(r.newCommunityTheme.canvas);
					let p = null;
					return p = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? o.fbt._("More posts from the {name} community", [o.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(j.b)(c) ? o.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === x.Zc.SfwRecs ? o.fbt._("Top posts on Reddit this week", null, {
						hk: "w3BDa"
					}) : t === x.Zc.DeRecs ? o.fbt._("Popular Posts Near You", null, {
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
				return P
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "b", (function() {
				return j
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
				E = s("./src/reddit/selectors/tracking.ts");

			function P() {
				return Object(u.u)({
					currentProfileName: u.i,
					isCommentPermalink: u.w,
					isCommentsPage: u.x,
					isFrontpage: u.z,
					isPredictionsPage: u.N,
					isProfilePostListing: u.K,
					isTopicPage: u.P,
					pageLayer: e => e
				})
			}
			const w = P(),
				k = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: C.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.Q)(e, t),
					loadMore: (e, t) => t.isPredictionsPage ? null : Object(v.g)(e, t),
					postsById: (e, t) => {
						if (t.isPredictionsPage) {
							const s = Object(y.E)(e, t.listingName);
							return Object(f.k)(e, {
								subredditId: s
							})
						}
						return Object(O.T)(e, {
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
							const t = Object(y.E)(e, s);
							return Object(f.l)(e, {
								subredditId: t
							})
						}
						return Object(O.F)(e, t, s, n)
					}),
					subredditsById: y.ab,
					viewportDataLoaded: E.a,
					pageReferrer: u.T,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: x.d
				},
				I = Object(n.c)(k),
				j = e => ({
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
				L = Object(o.b)(I, j, (e, t, s) => ({
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
					showSuspended: C.P,
					showOffline: e => e.connection.showBanner
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
			class E extends n.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR,
							showOffline: this.props.showOffline
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
			t.a = O(E)
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
				showSuspended: "_39xFv40KohPmMxYVnMJmp",
				offline: "Jvy6k8geBbRljwIwFTLRo",
				navExperiment: "_1BAfE2MtXRmb69Ht2TsVN-"
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
				return bt
			})), s.d(t, "CommentsPage", (function() {
				return yt
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
				E = s("./src/lib/makeCommentsPageKey/index.ts"),
				P = s("./src/lib/makeDraftKey/index.ts"),
				w = s("./src/lib/performanceTimings/index.tsx"),
				k = s("./src/reddit/actions/ads/index.ts"),
				I = s("./src/reddit/actions/comment/index.ts"),
				j = s("./src/reddit/actions/comment/authoring.ts"),
				_ = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				S = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				L = s("./src/reddit/actions/login.ts"),
				T = s("./src/reddit/actions/pages/comments.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				M = s("./src/reddit/actions/upvotePrompt.ts"),
				A = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				R = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
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
				X = s("./src/reddit/models/Comment/index.ts"),
				Z = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/reddit/models/Subreddit/index.ts"),
				ee = s("./src/reddit/selectors/chatPost.ts"),
				te = s("./src/reddit/selectors/comments.ts"),
				se = s("./src/reddit/selectors/commentSelector.ts"),
				oe = s("./src/reddit/selectors/commentsListTruncated.ts"),
				ne = s("./src/reddit/selectors/discoveryUnit.ts"),
				re = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				ie = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ae = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				de = s("./src/reddit/selectors/experiments/celebratoryMoments.ts"),
				ce = s("./src/reddit/selectors/experiments/postSeo.ts"),
				le = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				me = s("./src/reddit/selectors/meta.ts"),
				pe = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ue = s("./src/reddit/selectors/posts.ts"),
				he = s("./src/reddit/selectors/subreddit.ts"),
				be = s("./src/reddit/selectors/tooltip.ts"),
				ge = s("./src/reddit/selectors/user.ts"),
				Ce = s("./src/reddit/actions/celebratoryMoments/index.ts"),
				xe = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				fe = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				ve = s("./src/reddit/components/CelebratoryMoments/constants.ts"),
				Oe = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				ye = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Ee = s("./src/reddit/components/Comments/index.tsx"),
				Pe = s("./src/reddit/components/Comments/States/index.tsx"),
				we = s("./src/reddit/components/CommentsChat/Loader.ts"),
				ke = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ie = s("./src/reddit/components/CommentSort/index.tsx"),
				je = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				_e = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Se = s("./src/reddit/components/HeaderImage/index.tsx"),
				Le = s("./src/reddit/components/Hovercards/helpers.ts"),
				Te = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Ne = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Me = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Ae = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Re = s("./src/reddit/components/JumpToContent/index.tsx"),
				Fe = s("./src/reddit/components/PostContent/index.tsx"),
				Be = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Ve = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				De = s("./src/reddit/components/SubredditNav/index.tsx"),
				Ue = s("./src/reddit/components/TrackingHelper/index.tsx"),
				We = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				He = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				Ke = s("./src/reddit/helpers/history/index.ts"),
				Ge = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				qe = s("./src/reddit/helpers/postCollection.ts"),
				ze = s("./src/reddit/helpers/resonatePage/index.ts"),
				Ye = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Qe = s("./src/reddit/helpers/trackers/screenview.ts"),
				Je = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				Xe = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				Ze = s("./src/reddit/layout/page/Listing/index.tsx"),
				$e = s("./src/reddit/models/ContentGate.ts"),
				et = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				tt = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				st = s("./src/config.ts"),
				ot = s("./src/reddit/pages/CommentsPage/index.m.less"),
				nt = s.n(ot);

			function rt() {
				return (rt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const it = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-CelebratoryMoments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-CelebratoryMoments").then(s.bind(null, "./src/reddit/components/CelebratoryMoments/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CelebratoryMoments/index.tsx"
					}
				}),
				at = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				dt = ({
					condition: e,
					wrap: t,
					children: s
				}) => e ? t(s) : s,
				ct = 200,
				lt = 80,
				mt = 32,
				pt = Object(o.a)({
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
				ut = Object(o.a)({
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
				ht = Object(o.a)({
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
				bt = ({
					postId: e,
					commentId: t,
					commentsPageKey: s
				}) => t ? Object(E.a)(e) : s,
				gt = e => {
					const {
						state: t
					} = e.location, s = a()(t, D.a.IsOverlay, !1), o = a()(t, D.a.CloseLocation, null), n = a()(t, D.a.ScrollOnLoad, !1);
					n && Object(Ke.c)(D.a.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(Z.s)(i), l = r && Object(X.h)(r);
					return m.a.createElement(J.a, {
						postId: c
					}, m.a.createElement(yt, {
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
				Ct = Object(G.u)(),
				xt = () => Object(h.c)({
					apiError: te.c,
					apiPending: te.d,
					canCommentAsModerator: (e, {
						postId: t
					}) => {
						const s = Object(ue.V)(e, {
							postId: t
						});
						return !!(s && s.id && e.moderatingSubreddits[s.id])
					},
					comment: se.a,
					communityBannerDiscoveryUnit: ne.b,
					contentGateInfo: (e, {
						subredditName: t
					}) => Object(ge.e)(e, t),
					currentUserShowNSFW: ge.db,
					dismissedSubreddits: re.a,
					fullyLoaded: te.u,
					hasModeratorPostPermissions: pe.c,
					headComment: te.x,
					isActionBarAnimationEnabled: z.b,
					isAvatarsInCommentsEnabled: ae.a,
					isBlockedUserBannerEnabled: (e, {
						postId: t
					}) => !!Object(ue.x)(e, {
						postId: t
					}) && Object(ie.a)(e),
					isCountAnimShadowTestEnabled: z.e,
					isCelebratoryMomentsEnabled: de.c,
					isRenderCelebratoryMoment: de.d,
					isUpvoteCelebratoryMoment: de.e,
					celebratoryMomentsNumCooldownDays: de.b,
					isChatPost: ee.d,
					isCommentsListTruncated: oe.a,
					isLoggedIn: ge.J,
					isNightmodeOn: ge.W,
					isTooltipOpen: (e, t) => !!Object(be.a)(e),
					origin: me.j,
					post: ue.I,
					postSEOV2IdCardVariant: ce.h,
					profileCollectionsEnabled: Q.a,
					replyComment: (e, {
						postId: t,
						commentId: s,
						commentsPageKey: o
					}) => Object(te.s)(e, {
						commentsPageKey: bt({
							postId: t,
							commentId: s,
							commentsPageKey: o
						})
					}),
					shouldOpenPostInNewTab: ge.cb,
					subredditAboutInfo: (e, {
						subredditName: t
					}) => t ? Object(he.w)(e, {
						subredditName: t
					}) : void 0,
					subredditOrProfile: ue.V,
					userHovercardIsOpen: (e, t) => Object(be.b)(Object(Le.b)({
						itemId: t.postId,
						tooltipIdPrefix: R.a,
						tooltipType: Be.c.StickyPost
					}))(e),
					userPrefs: ge.ub,
					inResonatePilot: le.a,
					isUpvotePromptExpEnabled: Y.d
				}),
				ft = (e, t) => ({
					dismissTruncation: t => e(Object(xe.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(_.a)()),
					setCommentFocus: t => e(I.f({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(T.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(N.i)()),
					onToggleTooltip: t => e(Object(N.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(L.i)()),
					openRegisterModal: () => e(Object(L.k)()),
					goToSubredditPage: t => e(Object(u.b)(t)),
					truncateCommentsList: () => e(Object(_.b)()),
					fetchCommentsNativeAd: t => e(Object(k.a)(t)),
					getIsTrackingCrossposts: t => e(Object(S.b)(t)),
					getPostCrowdControlLevel: t => e(Object(fe.b)(t)),
					renderCelebratoryMoment: (t, s) => e(Object(Ce.a)({
						isUpvote: t,
						postId: s
					})),
					triggerUpvotePrompt: (t, s, o) => {
						e(Object(M.b)(t, s, o))
					}
				}),
				vt = Object(p.b)(xt, ft);
			class Ot extends m.a.Component {
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
							i(Object(Le.b)({
								itemId: a,
								tooltipIdPrefix: R.a,
								tooltipType: Be.c.StickyPost
							}))
						}))
					}, f.I), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(Ye.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const o = s && Object(Z.r)(s) && s && s.belongsTo.id;
						o && e(o), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(He.a)(this.props.subredditOrProfile);
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
					}, this.shouldTriggerCelebratoryMoment = () => {
						const {
							isCelebratoryMomentsEnabled: e,
							isOverlay: t,
							post: s
						} = this.props;
						return e && !(null == s ? void 0 : s.isSponsored) && !(null == s ? void 0 : s.isArchived) && !t
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.didPassAdScrollThreshold = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						layoutRef: null,
						commentNativeAdId: null,
						isUpvotePromptTriggered: !1,
						shouldShowCelebratoryMoment: !1
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
							const s = null === (e = Object(Ge.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(Z.s)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), O.a.read(() => {
							this.props.isOverlay || Object(w.d)(w.c.CommentsPage, o)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						f.Ib.includes(e) && Object(ze.a)(e)
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
						const e = this.props.post && Object(qe.a)(this.props.post);
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
								i = this.props.isOverlay ? mt : r - e;
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
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = ct, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = ct)
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
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - lt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - lt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), O.a.write(() => {
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
						o(Object(Qe.c)(t, s, e, C.TimerType.InApp, r, n))
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
					} = this.props, r = !(!o || !o.isNSFW || t), i = Object(We.a)(e, r, n);
					if (!i) return null;
					let a = m.a.createElement(ht, i);
					return s && (a = m.a.createElement(Je.a, {
						content: a
					})), a
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						isRenderCelebratoryMoment: s,
						isUpvoteCelebratoryMoment: o,
						closeLocation: r,
						commentId: i,
						commentsPageKey: a,
						isActionBarAnimationEnabled: d,
						isCountAnimShadowTestEnabled: c,
						isLoggedIn: l,
						isNightmodeOn: p,
						isOverlay: u,
						post: h,
						postId: b,
						postSEOV2IdCardVariant: g,
						profileCollectionsEnabled: C,
						renderCelebratoryMoment: v,
						sendEvent: O,
						sort: y,
						subredditOrProfile: E
					} = this.props, P = Object(ce.f)(g);
					if (!h) {
						if (t) return m.a.createElement(Pe.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === f.m ? m.a.createElement(ht, {
							contentGateType: $e.a.PostBlockedForLegalReason
						}) : m.a.createElement(Pe.d, {
							postId: b,
							commentId: i,
							apiError: e,
							sort: y
						}) : m.a.createElement(Pe.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const w = this.isCommentPermalink(),
						k = h.belongsTo.type === W.a.PROFILE,
						I = Object(qe.a)(h) && (!k || C),
						j = !l,
						_ = n.fbt._("Thanks for the comment", null, {
							hk: "13Osok"
						}),
						S = `${st.a.assetPath}/img/celebratory-moments/thumbs-up-snoo.png`;
					return at.input.channel.postID = b, m.a.createElement(Pt, {
						closeLocation: r,
						commentsPageKey: a,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: l,
						isOverlay: u,
						isSwapVariant: P,
						post: h,
						subredditOrProfile: E,
						shouldFitPageToContent: j,
						isCollectionLayout: I
					}, E && E.isQuarantined && m.a.createElement(Ae.a, {
						subredditName: E.name
					}), m.a.createElement(Re.a, null), s && m.a.createElement(it, {
						iconUrl: o ? void 0 : S,
						minWindowWidthInPx: ve.b,
						text: o ? void 0 : _
					}), m.a.createElement("div", {
						className: Object(x.a)(nt.a.PageContentWrapper, {
							[nt.a.LargePageContent]: I,
							[nt.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, I && m.a.createElement(ut, {
						isOverlay: u,
						isNightmodeOn: p,
						postId: b
					}), m.a.createElement(dt, {
						condition: I,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: nt.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Fe.a, {
						isCommentPermalink: w,
						isOverlay: u,
						postId: b,
						redditStyle: u,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: O,
						isActionBarAnimationEnabled: d,
						isCountAnimShadowTestEnabled: c,
						triggerCelebratoryMoment: this.shouldTriggerCelebratoryMoment() ? v : void 0
					}), this.state.commentNativeAdId && m.a.createElement("div", {
						ref: this.setCommentAdRef
					}, m.a.createElement(A.a, {
						key: `event-post-id-${h.id}`,
						isOverlay: u,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), E && !Object($.h)(E) && m.a.createElement(F.a, {
						contentContainerRef: this.state.layoutRef,
						isOverlay: u,
						post: h,
						subredditOrProfile: E
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
						isBlockedUserBannerEnabled: l,
						isChatPost: p,
						isLoggedIn: u,
						isOverlay: h,
						location: g,
						onOtherDiscussions: C,
						openLoginModal: f,
						openRegisterModal: v,
						origin: O,
						post: y,
						postId: E,
						renderCelebratoryMoment: w,
						replyComment: k,
						sendEvent: I,
						sort: _,
						subredditAboutInfo: S,
						subredditOrProfile: L
					} = this.props;
					if (!y) return null;
					const T = this.isCommentPermalink(),
						N = [],
						M = y.isLocked && !s,
						A = !(T || y.isArchived || S && S.userIsBanned || y.authorIsBlocked && l);
					if (M) N.push(m.a.createElement(Ne.a, {
						key: "commentThreadBanner",
						subredditOrProfile: L
					}));
					else if (y.isArchived) N.push(m.a.createElement(Te.a, {
						key: "commentThreadBanner"
					}));
					else if (A && !p && !C)
						if (u) {
							const e = Object(P.a)(b.c.replyToPost, E);
							N.push(m.a.createElement(Oe.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: b.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: E,
								submitAction: ({
									validate: t,
									...s
								}, o) => t ? j.t(E, r, e, s, o) : j.n(E, r, e, s, o),
								submitButtonText: n.fbt._("Comment", null, {
									hk: "m3FAA"
								}),
								triggerCelebratoryMoment: this.shouldTriggerCelebratoryMoment() ? w : void 0
							}))
						} else N.push(m.a.createElement(ye.a, {
							key: "loggedOutCommentForm",
							location: g,
							openLoginModal: f,
							openRegisterModal: v,
							origin: O
						}));
					if (y.contestMode && N.push(m.a.createElement(Me.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), !p && !C && N.push(m.a.createElement(Ie.a, {
							commentId: o,
							elementRef: this.updateCommentSortRef,
							isOverlay: h,
							key: "commentSort",
							location: g,
							postId: E,
							sort: _,
							suggestedSort: y.suggestedSort
						}), m.a.createElement(et.a, {
							commentId: o,
							commentsPageKey: r,
							isOverlay: h,
							key: "commentNavigation",
							postId: E
						})), N.push(m.a.createElement(Ve.a, {
							postId: E
						})), !t || d || p || C)
						if (!e || d || C)
							if (C) N.push(m.a.createElement(pt, {
								commentSort: _,
								key: "otherDiscussions",
								postId: E,
								isOverlay: h,
								postPermalink: y.permalink
							}));
							else if (p) {
						if (L && L.id) {
							const e = k ? Object(P.a)(b.c.replyToComment, k.id) : Object(P.a)(b.c.replyToPost, E),
								s = bt({
									postId: E,
									commentId: o,
									commentsPageKey: r
								});
							N.push(m.a.createElement(we.a, {
								commentId: o,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !i && t,
								key: "commentsChat",
								postId: E,
								renderedInOverlay: h,
								subredditId: L.id
							}, ({
								scrollToBottom: t
							}) => u ? m.a.createElement(ke.a, {
								key: "chatCommentsForm",
								postId: E,
								replyComment: k,
								draftKey: e,
								commentsPageKey: s,
								isEditing: !1,
								scrollToBottom: t,
								sendEvent: I
							}) : m.a.createElement(ye.a, {
								key: "loggedOutCommentForm",
								className: nt.a.ChatLoggedOutForm,
								location: g,
								openLoginModal: f,
								openRegisterModal: v,
								origin: O
							})))
						}
					} else N.push(m.a.createElement("div", {
						className: Object(x.a)(nt.a.CommentsPaneWrapper, {
							[nt.a.mIsInOverlay]: h
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(_e.a, rt({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: y.numComments,
						onClick: this.handleContentClick
					}), m.a.createElement(Ee.a, {
						commentId: o,
						commentsPageKey: r,
						postId: E,
						renderedInOverlay: h,
						triggerCelebratoryMoment: this.shouldTriggerCelebratoryMoment() ? w : void 0
					})))), e && d ? N.push(m.a.createElement(Pe.e, {
						key: "commentsErrorState",
						postId: E,
						commentId: o,
						sort: _,
						apiError: e
					})) : !i && t && N.push(m.a.createElement(Pe.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					else N.push(m.a.createElement(Pe.e, {
						postId: E,
						commentId: o,
						sort: _,
						apiError: e
					}));
					else this.didRenderLoading = !0, N.push(m.a.createElement(Pe.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					return m.a.createElement(q.a.Provider, {
						value: this.sendEventWithName
					}, N)
				}
			}
			const yt = Ct(Object(K.b)(vt(Object(Ue.c)(Ot)))),
				Et = y.a.wrapped(je.a, "DetailsPageSidebar", nt.a),
				Pt = e => {
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
					if (!a && !d) return m.a.createElement(Xe.a, {
						containerRef: o,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: n,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: u && m.a.createElement(je.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					if (d) return m.a.createElement(Je.a, {
						containerRef: o,
						content: t,
						isCollectionLayout: i,
						sidebar: u && m.a.createElement(je.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					const h = i ? B.i : H.a;
					return m.a.createElement(Ze.a, {
						containerRef: o,
						maxWidth: B.i,
						fitPageToContent: p,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: i,
						navBar: u && m.a.Children.toArray([m.a.createElement(Se.a, {
							key: u.name,
							disableFullscreen: !0,
							headerText: u.name,
							maxWidth: h,
							prefixedHeaderText: u.displayText,
							subredditOrProfile: u,
							url: u.url
						}), !Object($.h)(u) && m.a.createElement(De.a, {
							disableFullscreen: !0,
							homeUrl: u.url,
							maxWidth: h,
							subredditId: u.id
						})]),
						sidebar: u && m.a.createElement(Et, {
							commentsPageKey: s,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					})
				};
			t.default = Object(tt.a)(gt)
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
		"./src/reddit/selectors/experiments/celebratoryMoments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts");
			const i = e => {
					const t = Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.ge
					});
					return t === o.I.TwoDayCooldown || t === o.I.FiveDayCooldown
				},
				a = e => {
					const t = Object(r.d)(e, {
							experimentName: o.ge
						}),
						s = null == t ? void 0 : t.variant;
					return s === o.I.TwoDayCooldown ? 2 : s === o.I.FiveDayCooldown ? 5 : 0
				},
				d = e => e.celebratoryMoments.isRenderCelebratoryMoment,
				c = e => !1 !== e.celebratoryMoments.isUpvote,
				l = e => e.celebratoryMoments.postId
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
					experimentName: n.E
				}), e => e === n.K.Enabled)
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
				experimentName: o.q
			}) === o.t.Enabled
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
				return !(!t || Object(o.je)(t))
			}
		},
		"./src/reddit/selectors/experiments/replyWithUpvote.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");

			function i(e) {
				const t = Object(r.j)(e);
				return !(!t || (null == t ? void 0 : t.karma) && t.karma.fromPosts < 5 && t.karma.fromComments < 10) && Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.hb
				}) === o.ic
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
				experimentName: o.xd
			}) === o.Fd.Enabled
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
						const t = Object(i.T)(e, {
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
					const o = Object(i.X)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : m
				}),
				u = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.T)(e, {
						subredditId: s
					}) : null
				},
				h = (e, t, s, o, n) => {
					const i = n.find(e => e <= t) || -1,
						a = n.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const o = s[t - 1],
							n = s[t],
							i = n && Object(r.I)(e, {
								postId: o
							}) || null,
							a = n && Object(r.I)(e, {
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
					const i = Object(r.B)(e, {
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
					return Boolean(t) && !Object(n.je)(t)
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
			e.exports = JSON.parse('{"id":"b1787cdf2fd4"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage.42bca889fc30dd6feabc.js.map