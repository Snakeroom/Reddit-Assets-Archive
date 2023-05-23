// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~SearchResults.94c5ea44dc37f6bbfeb8.js
// Retrieved at 5/23/2023, 12:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~SearchResults"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, n)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseDelay.js"),
				r = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = r
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return `linkedPosts--[post:'${e}']`
			}
		},
		"./src/lib/makeNsfwLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return `nsfwLinkedPosts--[post:'${e}']`
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "b", (function() {
				return w
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				a = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var u = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const O = [],
				f = (Object(u.a)((e, t) => {
					const s = f(e, t);
					if (!s) return O;
					const n = Object(h.bb)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : O
				}), (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(h.X)(e, {
						subredditId: s
					}) : null
				}),
				j = (e, t, s, n, r) => {
					const o = r.find(e => e <= t) || -1,
						a = r.find(e => e > t) || 1 / 0;
					return t !== a && t !== o && (!(o + s > t) && (!(t + s > a) && !((e, t, s) => {
						const n = s[t - 1],
							r = s[t],
							o = r && Object(b.F)(e, {
								postId: n
							}) || null,
							a = r && Object(b.F)(e, {
								postId: r
							}) || null;
						return o && o.isSponsored || a && a.isSponsored
					})(e, t, n)))
				},
				x = [3];
			Object(u.a)((e, t) => {
				let {
					existingDUPositions: s,
					listingProps: n
				} = t;
				const r = s.slice().sort();
				let o = -1;
				const a = Object(b.y)(e, {
						listingKey: n.listingKey
					}),
					i = [];
				return x.forEach(t => {
					let s = o + t;
					if (!(s >= a.length)) {
						for (; s < a.length && !j(e, s, t, a, r);) s += 1;
						s < a.length && (i.push(s), o = s)
					}
				}), i
			});
			var y = s("./src/reddit/selectors/platform.ts");
			const C = Object(r.a)(a.f),
				v = Object(r.a)(a.d),
				E = Object(r.a)(a.g),
				S = Object(r.a)(a.c),
				k = Object(r.a)(a.e),
				_ = (Object(r.a)(a.i), Object(r.a)(a.h), () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const o = t(),
						a = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(o),
						d = (e => {
							const t = Object(g.R)(e),
								s = p.d.geoSubredditRecommendationDULoggedIn(e),
								n = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && s || !t && n
						})(o),
						u = Object(g.R)(o);
					if (a || !d) return;
					e(E());
					let b = !1;
					try {
						const t = u ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (I(t)) {
								if (N(t)) {
									e(S({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (P(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: r,
											category: o
										} = s.focusRecommendations[0],
										a = [n, r],
										i = Object(m.d)(a),
										c = Object(l.b)(a),
										d = Object(m.c)(n),
										u = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(C(u)), b = !0
								}
							} else b = !1
						}
					} catch (h) {
						b = !1
					}
					b || e(v({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				I = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				N = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				},
				P = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !N(e) && n === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				},
				w = () => async (e, t, s) => {
					var n, r;
					const a = t(),
						i = (e => e.focusedVerticals.lastLoadedEnv)(a);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(a) || null === i || "client" === i) {
						const s = null === (r = null === (n = Object(y.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							i = Object(g.S)(a);
						return Object(o.i)(() => e(_()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(k({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/linkedPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/linkedPosts/constants.ts");
			const o = Object(n.a)(r.c),
				a = Object(n.a)(r.b),
				i = Object(n.a)(r.a)
		},
		"./src/reddit/actions/otherDiscussions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/redditGQL/operations/OtherDiscussions.json"),
				c = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts");
			const d = Object(n.a)(o.a),
				l = Object(n.a)(o.b),
				m = Object(n.a)(o.c),
				u = (e, t) => async (s, n, o) => {
					let {
						gqlContext: u
					} = o;
					const p = n(),
						b = Object(r.a)(e, null, {
							isOtherDiscussions: !0
						}),
						h = p.listings.postOrder.ids[b],
						g = !!p.listings.postOrder.api.error[b];
					if (h && !g) return;
					s(m({
						key: b
					}));
					const O = await ((e, t) => Object(a.a)(e, {
						...i,
						variables: t
					}))(u(), t);
					Object(c.a)({
						getState: n,
						onFailure: e => s(d(e)),
						onSuccess: e => s(l(e)),
						postId: e,
						response: O
					})
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return xt
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return yt
			})), s.d(t, "commentsPagePending", (function() {
				return Ct
			})), s.d(t, "commentsPageLoaded", (function() {
				return vt
			})), s.d(t, "commentsPageFailed", (function() {
				return Et
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return St
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return _t
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return It
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return Nt
			})), s.d(t, "commentsPageRequested", (function() {
				return Pt
			})), s.d(t, "commentsPageDataRequested", (function() {
				return Tt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return Rt
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return Lt
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/lib/makeSearchKey/index.ts"),
				i = s("./src/lib/initializeClient/installReducer.ts"),
				c = s("./src/reddit/reducers/features/categories/index.ts"),
				d = (s("./node_modules/lodash/isEmpty.js"), s("./src/lib/makeActionCreator/index.ts")),
				l = (s("./src/reddit/constants/categories.tsx"), s("./src/lib/constants/index.ts")),
				m = (s("./src/lib/makeApiRequest/index.ts"), s("./src/lib/omitHeaders/index.ts"), s("./src/reddit/constants/headers.ts"), s("./src/reddit/constants/experiments.ts"));
			s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var u = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/selectors/category.ts"),
				b = s("./src/reddit/actions/category/constants.ts");
			Object(i.a)({
				features: {
					categories: c.a
				}
			});
			Object(d.a)(b.c), Object(d.a)(b.b), Object(d.a)(b.a), Object(d.a)(b.g), Object(d.a)(b.f), Object(d.a)(b.e);
			const h = Object(d.a)(b.d);
			var g = s("./src/reddit/actions/discoveryUnit.ts"),
				O = s("./src/reddit/actions/pages/subreddit.ts"),
				f = s("./src/reddit/actions/shortcuts/active.ts"),
				j = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				x = s("./src/reddit/actions/subredditSettings.ts"),
				y = s("./src/reddit/components/SearchResultsContent/helpers/isCommentSearchRoute.ts"),
				C = s("./src/reddit/endpoints/devPlatform/index.ts"),
				v = s("./src/reddit/endpoints/governance/posts.ts"),
				E = s("./src/reddit/endpoints/page/commentsPage.ts"),
				S = s("./src/lib/makeGqlRequest/index.ts"),
				k = s("./src/redditGQL/operations/CommentsPageExtra.json");
			async function _(e, t) {
				return Object(S.a)(e, {
					...k,
					variables: t
				})
			}
			var I = s("./src/reddit/endpoints/page/subredditPage.ts"),
				N = s("./src/reddit/endpoints/profile/info.ts"),
				P = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/lib/pageTitle/index.ts"),
				T = s("./src/reddit/actions/economics/helpers/async.ts"),
				R = s("./src/reddit/actions/externalAccount.ts"),
				L = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				F = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				M = s("./src/reddit/actions/platform.ts"),
				B = s("./src/reddit/actions/post.ts"),
				A = s("./src/reddit/actions/profile/index.ts"),
				D = s("./src/reddit/actions/subreddit.ts"),
				U = s("./src/reddit/actions/subreddit/notifications.ts"),
				V = s("./src/reddit/actions/subreddit/questions.ts"),
				G = s("./src/reddit/actions/toaster.ts"),
				W = s("./src/reddit/constants/adEvents.ts"),
				H = s("./src/reddit/constants/graphql.ts"),
				K = s("./src/reddit/constants/parameters.ts"),
				q = s("./src/reddit/constants/posts.ts"),
				z = s("./src/reddit/helpers/ads/index.ts"),
				Q = s("./src/reddit/helpers/commentList/index.ts"),
				Y = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				J = s("./src/reddit/models/Comment/index.ts"),
				X = s("./src/reddit/models/Subreddit/index.ts"),
				Z = s("./src/reddit/models/User/index.ts"),
				$ = s("./src/reddit/selectors/adsSignals.ts"),
				ee = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				te = s("./src/reddit/selectors/experiments/postSeo.ts"),
				se = s("./node_modules/reselect/es/index.js"),
				ne = s("./src/reddit/helpers/chooseVariant/index.ts"),
				re = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				oe = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				ae = s("./src/reddit/selectors/platform.ts"),
				ie = s("./src/reddit/selectors/removedPosts.ts");
			const ce = Object(se.a)(ae.f, re.a, ie.a, ie.c, oe.a, ie.e, oe.b, (e, t, s, n, r, o, a) => {
				if (!e || !t || r) return !1;
				if (n) return !0;
				const i = o || a,
					c = t.score >= 2 || t.numComments >= 2;
				return !(!s || i || c)
			});
			var de = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				le = s("./src/reddit/selectors/moderatorPermissions.ts"),
				me = s("./src/reddit/selectors/posts.ts"),
				ue = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/reddit/selectors/user.ts"),
				be = s("./src/lib/makeCommentsPageKey/index.ts"),
				he = s("./src/reddit/actions/ads/index.ts"),
				ge = s("./src/reddit/helpers/canonicalUrls.ts"),
				Oe = s("./src/reddit/helpers/correlationIdTracker.ts"),
				fe = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				je = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				xe = s("./src/lib/performanceTimings/index.tsx"),
				ye = s("./src/reddit/actions/gold/achievementFlairs.ts"),
				Ce = s("./src/reddit/actions/gold/customEmojis.ts"),
				ve = s("./src/lib/makeListingKey/index.ts"),
				Ee = s("./src/reddit/actions/googleQASchema/constants.ts");
			const Se = Object(d.a)(Ee.b),
				ke = Object(d.a)(Ee.a);
			var _e = s("./src/reddit/actions/linkedPosts/index.ts"),
				Ie = s("./src/reddit/actions/otherDiscussions/index.ts"),
				Ne = s("./src/reddit/actions/subreddit/constants.ts"),
				Pe = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var we = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: r,
						post: o
					} = e;
					try {
						s({
							altText: o && o.media && (o.media.still && o.media.still.altText || o.media.obfuscated && o.media.obfuscated.altText) || null,
							postId: r
						})
					} catch (a) {
						n(a)
					}
				},
				Te = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Re = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Le = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Fe = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: r,
						post: o
					} = e;
					try {
						const e = [],
							n = {},
							a = {};
						if (!o || !o.linked) return;
						const i = t(),
							c = i.posts && i.posts.models,
							d = Object(Te.a)(r),
							l = o.linked.posts && o.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !c.hasOwnProperty(t.id)) {
								const e = Object(Re.a)(t);
								n[t.id] = e.post, e.crosspost && !c.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(P.n)(t)) {
								const {
									subreddit: e
								} = t;
								a[e.id] = Object(Le.a)(e)
							}
						}
						s({
							dist: o.linked.posts && o.linked.posts.dist || null,
							key: d,
							meta: i.meta,
							posts: n,
							postIds: e,
							subreddits: a
						})
					} catch (a) {
						n(a)
					}
				},
				Me = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Be = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Ae = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var De = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						options: r,
						postId: o,
						subreddit: a
					} = e;
					try {
						if (!a) return;
						const e = a.elements || a.posts,
							n = t(),
							i = ((e, t) => {
								const {
									edges: s
								} = e, n = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: n
								}
							})(e, n.posts && n.posts.models),
							c = Object(Be.a)(i),
							d = Ae(c),
							m = e.edges.reduce((e, t) => (t.node.id && t.node.id !== o && e.push(t.node.id), e), []),
							{
								range: u,
								sort: p,
								subredditName: b
							} = r,
							h = Object(ve.a)(b, l.cb[p], {
								t: u
							});
						s({
							dist: e.dist,
							key: h,
							meta: n.meta,
							postIds: m,
							posts: d
						})
					} catch (i) {
						n(i)
					}
				},
				Ue = s("./src/reddit/models/Media/index.ts"),
				Ve = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Ge = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var We = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: r,
						post: o
					} = e;
					try {
						const e = [],
							n = {},
							a = {};
						if (!o || !o.nsfwLinked) return;
						const i = t(),
							c = i.posts && i.posts.models,
							d = Object(Ge.a)(r),
							l = o.nsfwLinked.posts && o.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !c.hasOwnProperty(t.id)) {
								const e = Object(Re.a)(t);
								n[t.id] = e.post, e.crosspost && !c.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(P.n)(t)) {
								const {
									subreddit: e
								} = t;
								a[e.id] = Object(Le.a)(e)
							}
						}
						s({
							dist: o.nsfwLinked.posts && o.nsfwLinked.posts.dist || null,
							key: d,
							meta: i.meta,
							posts: n,
							postIds: e,
							subreddits: a
						})
					} catch (a) {
						n(a)
					}
				},
				He = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Ke = Object(d.a)(He.b),
				qe = Object(d.a)(He.a);
			var ze = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Qe = Object(d.a)(ze.b),
				Ye = Object(d.a)(ze.a),
				Je = Object(d.a)(Ne.o),
				Xe = Object(d.a)(Ne.n),
				Ze = (Object(d.a)(Ne.w), Object(d.a)(Ne.v), e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					var o;
					const {
						includeNSFWListingBelowExperiment: a,
						includeListingBelowExperiment: i,
						includeOtherDiscussions: c,
						includePostFeed: d,
						includePostQASchemaEligibilityFlag: m,
						listingBelowExperimentVariant: u,
						postId: p,
						range: b,
						sort: h,
						subredditName: g
					} = e, O = Object(ve.a)(p, null, {
						isOtherDiscussions: !0
					}), f = s(), j = Object(me.y)(f, {
						listingKey: O
					}), x = c && (!j || 0 === j.length), y = Object(ve.a)(g, l.cb[h], {
						t: b
					}), C = Object(me.y)(f, {
						listingKey: y
					}), v = d && (i || !C || 0 === C.length), E = i, k = a, _ = Object(me.F)(f, {
						postId: p
					}), I = !!_ && !!_.media && (Object(Ue.L)(_.media) || Object(Ue.H)(_.media)) && !_.media.altText;
					if (!(x || v || E || k || I || m)) return;
					x && t(Object(Ie.d)({
						key: O
					}));
					const N = await ((e, t) => Object(S.a)(e, {
							...Pe,
							variables: t
						}))(r(), e),
						P = N.body,
						w = Object(Ve.a)(u);
					m && (N.ok ? P.data && P.data.post && t(Se({
						postId: p,
						isEligibleForQASchema: null !== (o = P.data.post.isEligibleForQASchema) && void 0 !== o && o
					})) : t(ke())), x && Object(Me.a)({
						getState: s,
						onFailure: e => t(Object(Ie.b)(e)),
						onSuccess: e => t(Object(Ie.c)(e)),
						postId: p,
						response: N
					}), v && !E && (N.ok ? P.data && De({
						getState: s,
						onFailure: e => t(Xe(e)),
						onSuccess: e => t(Je(e)),
						options: e,
						postId: p,
						subreddit: P.data.subreddit
					}) : t(Xe(N.error))), E && !w && N.ok && P.data && Fe({
						getState: s,
						onFailure: e => t(Object(_e.a)(e)),
						onSuccess: e => t(Object(_e.b)(e)),
						postId: p,
						post: P.data.post
					}), k && N.ok && We({
						getState: s,
						onFailure: e => t(Ye(e)),
						onSuccess: e => t(Qe(e)),
						postId: p,
						post: P.data.post
					}), I && N.ok && P.data && we({
						getState: s,
						onFailure: e => t(qe(e)),
						onSuccess: e => t(Ke(e)),
						postId: p,
						post: P.data.post
					})
				}),
				$e = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						r = n && Object(P.y)(n),
						{
							sortToUse: o
						} = Object(Y.a)(e, r);
					return (!o || o === l.w.CONFIDENCE) && Object(ne.c)(e, {
						experimentEligibilitySelector: () => Object(pe.R)(e),
						experimentName: m.p
					}) === m.v.Enabled
				};
			var et = s("./src/reddit/selectors/chatPost.ts"),
				tt = s("./src/reddit/selectors/seo/index.ts"),
				st = s("./src/reddit/actions/pages/constants.ts"),
				nt = s("./src/lib/sentry/index.ts"),
				rt = s("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				ot = s("./src/reddit/helpers/isRobotIndexableMeta.ts"),
				at = s("./src/reddit/helpers/locales.ts"),
				it = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				ct = s("./src/reddit/reducers/pages/comments/index.ts"),
				dt = s("./src/reddit/selectors/experiments/chat.ts"),
				lt = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				mt = s("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				ut = s("./src/reddit/selectors/experiments/countrySites.ts"),
				pt = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				bt = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				ht = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				gt = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				Ot = s("./src/reddit/selectors/i18n/index.ts"),
				ft = s("./src/reddit/selectors/meta.ts"),
				jt = s("./src/reddit/actions/pages/search/index.ts");
			Object(i.a)({
				pages: {
					comments: ct.a
				}
			}), Object(i.a)({
				features: {
					modUserNotes: it.a
				}
			});
			const xt = 25,
				yt = 100,
				Ct = Object(d.a)(st.h),
				vt = Object(d.a)(st.f),
				Et = Object(d.a)(st.e),
				St = Object(d.a)(st.i);

			function kt(e) {
				return e && e.ok
			}
			const _t = (e, t, s) => {
					const n = !e,
						r = Object(me.F)(t, {
							postId: s
						}).belongsTo,
						o = Object(ue.Q)(t, {
							identifier: r
						}),
						a = Object(tt.c)(t, {
							identifier: r
						}),
						i = !!Object(Ve.c)(t),
						c = Object(Ot.a)(t),
						d = Object(pt.b)(t),
						l = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return i ? (l.listingBelow = a || n, l.postFeed = l.listingBelow) : c ? l.nsfwListingBelow = !0 : l.postFeed = (a || n) && (!Object(X.i)(o) && !Object(et.d)(t, {
						postId: s
					}) && !!o || !Object(ae.i)(t) && Object(te.e)(t)), e && (l.postQASchema = Object(te.d)(t)), d && (l.listingBelow = !0), l
				},
				It = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				Nt = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				Pt = e => async (t, s) => {
					var n, i;
					const {
						partialPostId: c,
						partialCommentId: d
					} = e.params, {
						subredditName: b
					} = e.params || "", g = c ? Object(P.y)(c) : "", O = d && Object(J.h)(d), {
						path: x,
						queryParams: C
					} = e, v = Object(F.d)(x), E = Object(z.a)(C, s()), {
						hasSortParam: S,
						sortToUse: k
					} = Object(Y.a)(s(), g), _ = null === (i = null === (n = Object(ae.b)(s())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === i ? void 0 : i.route.chunk, I = ["context", "depth", "limit", K.h].reduce((e, t) => {
						const s = parseInt(C[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: b,
						hasSortParam: S,
						instanceId: E,
						include_categories: !0
					});
					S && (I.sort = k), I.onOtherDiscussions = v, I.comment_awardings_by_current_user = !0, t(B.q(g));
					const N = s(),
						T = Object(me.F)(N, {
							postId: g
						}),
						L = Object(lt.a)(N).bucketed && Object(y.a)(e) && Object(y.b)(T);
					if (L) {
						const s = Object(a.e)(r()(e.queryParams, K.d)),
							n = Object(a.b)(g, void 0, s);
						await t(Object(jt.d)({
							key: n,
							options: s,
							subredditName: b,
							postId: g
						}))
					} else await t(Tt(g, O, I, k));
					const U = Object(pe.S)(s());
					if (T && "subreddit" === T.belongsTo.type) {
						const e = T.belongsTo.id;
						if (await Promise.all([Object(xe.i)(() => t(Object(ye.c)(e)), {
								name: "subredditAchievementFlairsRequested",
								page: _,
								isLoggedIn: U
							}), Object(xe.i)(() => t(Object(Ce.c)(e)), {
								name: "subredditCustomEmojisRequested",
								page: _,
								isLoggedIn: U
							})]), !Object(ae.i)(N)) {
							Object(ht.a)(N) && t(Object(V.b)(e))
						}
						Object(le.i)(N, e) && await t(Object(j.c)(g))
					}
					if (T) {
						const n = ((e, t) => {
								const s = Object(me.U)(e, {
										postId: t
									}),
									n = Object(me.F)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), g),
							r = Object(ue.Q)(s(), {
								identifier: T.belongsTo
							});
						if (r && (e => m.zf.Redirect === Object(ne.b)(e, {
								experimentEligibilitySelector: ce,
								experimentName: m.tf
							}))(s())) return void t(Object(o.c)(r.url));
						if (T.belongsTo.type !== q.a.SUBREDDIT || T.isSponsored) {
							if (T.belongsTo.type === q.a.PROFILE) {
								const e = Object(xe.i)(() => t(A.d(r.name)), {
									name: "getProfileInfo",
									page: _,
									isLoggedIn: U
								});
								await e
							}
						} else {
							if (!!!Object(ue.W)(s(), {
									subredditId: T.belongsTo.id
								})) {
								const e = Object(xe.i)(() => t(D.o(r.name)), {
									name: "getSubredditRules",
									page: _,
									isLoggedIn: U
								});
								await e
							}
						}
						const a = _t(!1, s(), g),
							i = v;
						if (It(i, a)) {
							Object(Oe.d)(Oe.a.LinkedPosts);
							const e = Object(Oe.c)(Oe.a.LinkedPosts);
							Object(Oe.d)(Oe.a.NsfwLinkedPosts);
							const n = Object(Oe.c)(Oe.a.NsfwLinkedPosts),
								{
									adsSeenCount: o,
									totalPostsSeenCount: c,
									sessionStartTime: d
								} = Object($.a)(s()),
								m = {
									adContext: {
										layout: H.a.Card,
										sourcePostId: g,
										clientSignalSessionData: {
											adsSeenCount: o,
											totalPostsSeenCount: c,
											sessionStartTime: d
										}
									},
									range: l.pc.WEEK.toUpperCase(),
									sort: l.T.TOP,
									subredditName: r.name
								},
								u = {
									postId: g
								},
								p = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Ve.c)(s())
								};
							Object(pt.b)(s()) && (p.listingBelowVersion = "LINKED_POSTS_VERSION_SIDE_RAIL");
							const b = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(gt.a)(s())
								},
								h = Nt(a);
							Object(xe.i)(() => t(Ze({
								...u,
								...m,
								...p,
								...b,
								...h,
								includeOtherDiscussions: i
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: U,
								page: _
							});
							0
						}
						t(Object(R.p)()), t(M.n({
							title: n
						}));
						const c = s().posts.instances[g] ? Object(z.a)(e.queryParams, s()) : T.postId;
						t(Object(f.b)(c)); {
							const e = Object(p.b)(s(), {
								subredditName: r.name
							});
							await Promise.all(e.map(e => t((e => async (t, s) => {
								const n = Object(p.h)(s(), {
									id: e
								});
								t(h({
									categoryId: e,
									rank: n + 1
								})), Object(u.ob)(Object(p.c)(s()))
							})(e))))
						}
					} else t(M.n({
						title: w.e()
					}));
					const {
						routePrefix: G
					} = e.params;
					L || (q.b[G] === q.a.PROFILE ? Object(ge.f)(s(), t, e) : Object(ge.d)(s(), t, e))
				}, wt = ["SubredditPost", "ProfilePost", "DeletedSubredditPost"], Tt = function(e, t, s, n) {
					let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
					return async (o, a, i) => {
						var c, d, m, u;
						const p = a(),
							b = Object(be.a)(e, r ? void 0 : t, s),
							{
								subredditName: h
							} = s,
							f = !r && p.pages.comments.keyToHeadCommentId.hasOwnProperty(b),
							j = p.pages.comments.api.fullyLoaded[b],
							x = p.pages.comments.api.error[b],
							y = p.pages.comments.api.pending[b],
							S = !Object(pe.R)(p),
							k = Object(pe.m)(p),
							w = n === l.w.CHAT,
							R = !!p.platform.lastPage,
							F = w && R,
							A = Object(me.F)(p, {
								postId: e
							}),
							D = Object(dt.d)(p),
							V = r || D && (null == A ? void 0 : A.discussionType) === P.b.Chat;
						if ((y || f && !x) && !F) {
							if (f && !p.sidebarPromotedPosts.firstFetch) {
								const e = Object(ae.i)(p) ? je.a.COMMENTS_OVERLAY : je.a.COMMENTS;
								window.addEventListener("load", () => {
									o(Object(he.b)(e))
								})
							}
							if (!j) {
								const n = !V || t ? s : {
									...s,
									depth: 1
								};
								o(Lt(e, t, n))
							}
							return
						}
						o(g.g());
						const H = p.user.prefs.commentMode;
						o(Ct({
							key: b,
							postId: e,
							commentMode: H
						}));
						const K = {
							...s,
							...w ? {
								sort: l.w.LIVE
							} : S ? {
								sort: s.sort,
								depth: 2
							} : {
								sort: s.sort
							}
						}; {
							const t = Object(me.F)(a(), {
								postId: e
							});
							t && t.numComments && t.numComments > yt && (K.truncate = xt)
						}
						const q = null === (d = null === (c = Object(ae.b)(p)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
							z = Object(xe.i)(() => Object(E.a)(i.apiContext(), e, t, K, Object(ee.a)(a()), $e(a())), {
								name: "fetchCommentsPage",
								isLoggedIn: !S,
								page: q
							}),
							Y = !S && k && Object(xe.i)(() => Object(N.d)(i.gqlContext(), Object(Z.e)(k)), {
								name: "fetchProfileKarma",
								isLoggedIn: !S,
								page: q
							}) || null,
							J = Object(mt.c)(p),
							X = Object(xe.i)(() => _(i.gqlContext(), {
								postId: e,
								includeSubredditRankings: J
							}), {
								name: "fetchCommentsPageExtra",
								isLoggedIn: !S,
								page: q
							}),
							$ = h && Object(bt.a)(p) ? Object(C.a)(i.gqlContext(), {
								subredditName: h
							}) : null;
						let te, se, ne, re, oe;
						if ([te, se, ne, re] = await Promise.all([z, Y, X, $]), o(Object(M.o)(te.status)), kt(ne) && "SubredditPost" === (null === (m = ne.body.data.postInfoById) || void 0 === m ? void 0 : m.__typename)) {
							const e = ne.body.data.postInfoById.subreddit.name;
							Object(ge.c)(a(), o, e)
						}
						if (te.ok) {
							try {
								te.body.posts = await Object(rt.a)(i.apiContext(), te.body.posts, p)
							} catch (ie) {
								nt.c.captureException(ie)
							}
							const t = Object.keys(te.body.posts).filter(e => !!te.body.posts[e].isMeta),
								s = te.body.posts[e];
							if (Object(ge.b)(a(), o, s.belongsTo.type), t.length) {
								const e = Object(xe.i)(() => Object(v.a)(i.apiContext(), s.belongsTo.id, t), {
										name: "getGovernanceData",
										page: q,
										isLoggedIn: !S
									}),
									n = await e;
								n.ok && (oe = n.body)
							}
							if (kt(se)) {
								const {
									data: e
								} = se.body, t = {
									karma: {
										...N.a
									}
								};
								if (Object(N.e)(e.redditorInfoByName)) {
									const s = e.redditorInfoByName.karma;
									t.karma = {
										...t.karma,
										...s
									}
								}
								te.body && te.body.account && Object.assign(te.body.account, t)
							}
							if (kt(ne)) {
								const {
									data: t
								} = ne.body;
								if (t.postInfoById && wt.includes(t.postInfoById.__typename) && (te.body.posts[e] = {
										...te.body.posts[e],
										...t.postInfoById,
										mediaStatus: "SubredditPost" === t.postInfoById.__typename || "ProfilePost" === t.postInfoById.__typename ? null === (u = t.postInfoById.mediaStatus) || void 0 === u ? void 0 : u.status : null
									}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
									const e = t.postInfoById.subreddit.detectedLanguage;
									Object(ft.d)(p) && e && Object(ut.f)(p) && await Object(at.a)(e, o);
									const {
										id: s,
										isEligibleForContentBlocking: n,
										allowedMediaInComments: r,
										directoryRankings: a
									} = t.postInfoById.subreddit;
									o(Object(U.c)({
										subredditAboutInfo: {
											[s]: {
												isEligibleForContentBlocking: n,
												allowedMediaInComments: r,
												directoryRankings: a
											}
										}
									}))
								}
							}
							const n = Object(Q.a)(te.body, e, p),
								{
									postMeta: r
								} = te.body;
							te.body.posts[e] = {
								...te.body.posts[e],
								isRobotIndexable: Object(ot.a)(r, e)
							}, re && te.body.subreddits[s.belongsTo.id] && (te.body.subreddits[s.belongsTo.id] = {
								...te.body.subreddits[s.belongsTo.id],
								devPlatformMetadata: re
							}), o(vt({
								key: b,
								postId: e,
								meta: p.meta,
								governance: oe,
								shouldCollapse: n,
								...te.body
							}))
						} {
							const n = Object(me.F)(a(), {
								postId: e
							});
							n && te.body.comments && Object.keys(te.body.comments).length < n.numComments ? o(Lt(e, t, s)) : te.ok && o(Rt({
								key: b
							}));
							const r = Object(ae.i)(p) ? je.a.COMMENTS_OVERLAY : je.a.COMMENTS;
							o(Object(he.b)(r))
						}
						if (te.ok) {
							o(G.g(b));
							const t = Object(me.F)(a(), {
									postId: e
								}),
								s = Object.keys(te.body.comments);
							if (o(B.y(t, W.a.CommentsView)), Object(le.h)(a(), {
									subredditId: t.belongsTo.id
								}) && await o(Object(L.a)({
									commentIds: s,
									postIds: [e]
								})), t && "subreddit" === t.belongsTo.type && te.body.comments) {
								const e = Object(xe.i)(() => o(Object(T.a)({
									commentIds: s,
									postIds: [t.id],
									subredditId: t.belongsTo.id
								})), {
									name: "fetchAllEconomicsData",
									page: q,
									isLoggedIn: !S
								});
								await e
							}
						} else {
							let e;
							h && (o(Object(O.subredditPending)({
								key: b
							})), e = await Object(fe.a)("subreddit", () => Object(I.a)(i.apiContext(), h, {})), o(Object(M.o)(e.status)), o(Object(O.handleSubredditPageApiError)(e, h))), o(Et({
								error: te.error,
								key: b,
								...e ? e.body : te.body
							}))
						}
					}
				}, Rt = Object(d.a)(st.g), Lt = (e, t, s) => async (n, r, o) => {
					var a, i;
					const c = Object(be.a)(e, t, s),
						d = r(),
						l = Object(pe.S)(d),
						m = Object(pe.m)(d),
						u = null === (i = null === (a = Object(ae.b)(r())) || void 0 === a ? void 0 : a.routeMatch) || void 0 === i ? void 0 : i.route.chunk,
						p = Object(me.F)(d, {
							postId: e
						}),
						b = Object(dt.d)(d),
						h = "CHAT" === (null == p ? void 0 : p.discussionType) && b && !t,
						g = Object(E.a)(o.apiContext(), e, t, h ? {
							...s,
							depth: 1
						} : s, Object(ee.a)(d), $e(d)),
						O = l && m && Object(N.d)(o.gqlContext(), Object(Z.e)(m)) || null,
						f = Object(mt.c)(d),
						j = Object(xe.i)(() => _(o.gqlContext(), {
							postId: e,
							includeSubredditRankings: f
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: l,
							page: u
						}),
						[y, C, v] = await Promise.all([g, O, j]);
					if (y.ok) {
						if (kt(C)) {
							const {
								data: e
							} = C.body, t = {
								karma: {
									...N.a
								}
							};
							if (Object(N.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							y.body && y.body.account && Object.assign(y.body.account, t)
						}
						if (kt(v)) {
							const {
								data: t
							} = v.body;
							if (y.body.posts[e] = {
									...y.body.posts[e],
									...t.postInfoById
								}, t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const {
									id: e,
									directoryRankings: s
								} = t.postInfoById.subreddit;
								n(Object(U.c)({
									subredditAboutInfo: {
										[e]: {
											directoryRankings: s
										}
									}
								}))
							}
						}
						const t = Object(Q.a)(y.body, e, d);
						n(vt({
							key: c,
							postId: e,
							meta: d.meta,
							shouldCollapse: t,
							...y.body
						})), n(Rt({
							key: c
						}));
						const s = r().posts.models[e],
							o = s && Object(me.U)(r(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && o && Object(de.a)(d, {
							subredditId: o.id
						}) && n(Object(x.h)(o.name, o.id)), s && "subreddit" === s.belongsTo.type && y.body.comments && await n(Object(T.a)({
							commentIds: Object.keys(y.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(Et({
						error: y.error,
						key: c,
						...y.body
					}))
				}
		},
		"./src/reddit/actions/search/safeSearch.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/history/esm/history.js"),
				r = s("./src/lib/addQueryParams/index.ts"),
				o = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/reddit/constants/parameters.ts"),
				i = s("./src/reddit/helpers/search/searchResultsTabTo.ts");
			const c = (e, t) => async s => {
				var c;
				const {
					include_over_18: d,
					...l
				} = (null == t ? void 0 : t.queryParams) || {}, m = (null === (c = null == t ? void 0 : t.routeMatch) || void 0 === c ? void 0 : c.match.url) || i.a, u = {
					...l,
					...e && {
						[a.m]: "1"
					}
				}, p = {
					pathname: m,
					search: Object(r.a)("", {
						...u
					})
				};
				s(Object(o.b)(Object(n.c)(p)))
			}
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/shortcuts/constants.ts");
			const o = Object(n.a)(r.a),
				a = Object(n.a)(r.b)
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return k
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "g", (function() {
				return P
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "b", (function() {
				return R
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				c = s("./src/redditGQL/operations/MutedSubreddits.json"),
				d = s("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				l = s("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const m = (e, t) => Object(a.a)(e, {
					...l,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				u = (e, t) => Object(a.a)(e, {
					...i,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var p = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/actions/subreddit/constants.ts"),
				h = s("./src/reddit/actions/subreddit/notifications.ts"),
				g = s("./src/reddit/selectors/subreddit.ts");
			const O = e => Object(o.f)({
					id: e,
					kind: p.b.Error,
					duration: o.a,
					text: n.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				f = (e, t) => Object(o.f)({
					kind: p.b.SuccessCommunityGreen,
					text: n.fbt._("Muted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: n.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				j = (e, t) => Object(o.f)({
					kind: p.b.SuccessCommunityGreen,
					text: n.fbt._("Unmuted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: n.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var x = s("./src/reddit/endpoints/subreddit/about.ts");
			const y = Object(r.a)(b.i),
				C = Object(r.a)(b.h),
				v = Object(r.a)(b.G),
				E = (Object(r.a)(b.j), Object(r.a)(b.F), Object(r.a)(b.g)),
				S = Object(r.a)(b.f),
				k = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: a
						} = o;
						var i, c;
						const d = await m(a(), t);
						if (d.ok && d.body && (null === (c = null === (i = d.body) || void 0 === i ? void 0 : i.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(f(s, _({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(O(`error-muting-${t}`))
						}
					}
				},
				_ = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: a
						} = o;
						var i, c;
						const d = await u(a(), t);
						if (d.ok && d.body && (null === (c = null === (i = d.body) || void 0 === i ? void 0 : i.data.deleteSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(j(s, k({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(O(`error-muting-${t}`))
						}
					}
				},
				I = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: a
						} = o;
						var i, c;
						const d = await m(a(), t);
						if (d.ok && d.body && (null === (c = null === (i = d.body) || void 0 === i ? void 0 : i.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(f(s, N({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(O(`error-muting-${t}`))
						}
					}
				},
				N = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: a
						} = o;
						var i, c;
						const d = await u(a(), t);
						if (d.ok && d.body && (null === (c = null === (i = d.body) || void 0 === i ? void 0 : i.data.deleteSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(j(s, I({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(O(`error-muting-${t}`))
						}
					}
				},
				P = e => {
					let {
						subredditId: t,
						notificationLevel: s
					} = e;
					return async (e, r, i) => {
						let {
							gqlContext: c
						} = i;
						var l, m;
						const u = Object(h.a)(s),
							b = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									input: {
										...s,
										subredditId: t
									}
								}
							}))(c(), t, u);
						b.ok && b.body && (null === (m = null === (l = b.body) || void 0 === l ? void 0 : l.data.updateSubredditMuteAndNotificationLevelSettings) || void 0 === m ? void 0 : m.ok) ? (e(v({
							subredditId: t,
							notificationLevel: s
						})), e(Object(o.f)({
							kind: p.b.SuccessCommunityGreen,
							text: Object(h.b)(s)
						}))) : e(Object(o.f)({
							kind: p.b.Error,
							text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				w = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const i = await (e => Object(a.a)(e, c))(r());
					if (i.ok && i.body && i.body.data) {
						const {
							data: t
						} = i.body, s = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(y({
							nodes: s
						}))
					} else e(C()), e(Object(o.f)({
						duration: o.a,
						kind: p.b.Error,
						text: n.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, T = e => {
					let {
						subredditId: t,
						subredditName: s
					} = e;
					return async (e, n, r) => {
						let {
							gqlContext: o
						} = r;
						var a, i;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (i = null === (a = c.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === i ? void 0 : i.ok)) e(E(t)), e(j(s));
						else {
							e(O(`error-unmuting-${t}`))
						}
					}
				}, R = e => {
					let {
						subredditName: t
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: a
						} = r;
						var i, c;
						const d = s(),
							l = Object(g.t)(d).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (l) {
							const t = l.name,
								s = `error-muting-duplicate-${t}`;
							return e(Object(o.f)({
								id: s,
								kind: p.b.Error,
								duration: o.a,
								text: n.fbt._("Sorry, r/{subreddit name} is already muted.", [n.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const u = await Object(x.a)(a(), t, !0),
							{
								data: b
							} = u.body,
							h = b && b.subreddit;
						if (!u.ok || null === h) {
							return e(((e, t) => Object(o.f)({
								id: e,
								kind: p.b.Error,
								duration: o.a,
								text: n.fbt._("Sorry, r/{subreddit name} isn't a community.", [n.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const j = h.id,
							y = await m(a(), j);
						if (y.ok && y.body && (null === (c = null === (i = y.body) || void 0 === i ? void 0 : i.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) e(S([h])), e(f(h.name));
						else {
							e(O(`error-muting-${j}`))
						}
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = s("./src/reddit/actions/notificationsInbox/index.ts"),
				i = s("./src/reddit/actions/subreddit/constants.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts");
			const u = Object(r.a)(i.z),
				p = Object(r.a)(i.y),
				b = Object(r.a)(i.x),
				h = e => {
					switch (e) {
						case l.c.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.c.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.c.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				g = e => {
					switch (e) {
						case l.c.OFF:
							return n.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return n.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return n.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const O = e => {
				let {
					subredditId: t,
					notificationLevel: s,
					successCallback: r,
					undoCallback: i
				} = e;
				return async (e, l, O) => {
					let {
						gqlContext: f
					} = O;
					var j, x, y;
					e(p());
					const C = h(s),
						v = await Object(d.b)(f(), t, C);
					if ((null === (x = null === (j = v.error) || void 0 === j ? void 0 : j.fields) || void 0 === x ? void 0 : x.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(v.body) && (null === (y = v.body.data.updateSubredditNotificationSettings.errors) || void 0 === y ? void 0 : y.length)) return e(b()), e(Object(c.f)({
						kind: m.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					v.ok && (e(Object(o.c)({
						subredditId: t,
						notificationLevel: s
					})), e(u({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: s
							}
						}
					})), r && r(), e(i ? Object(c.f)(Object(c.e)(g(s), m.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(a.i)(t, i))) : Object(c.f)(Object(c.e)(g(s), m.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/constants/elementIds.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				l = s("./src/reddit/components/BackToTop/index.m.less"),
				m = s.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(i.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: n
				} = e;
				const i = Object(o.e)(d.a);
				return r.a.createElement("div", {
					className: Object(a.a)(t, m.a.container),
					style: n
				}, r.a.createElement(c.a, u({
					className: m.a.button,
					onClick: () => b(s)
				}, i && {
					priority: c.c.Secondary,
					rplStyle: !0
				}), p._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
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
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/selectors/experiments/commentBox.ts"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				p = s.n(u);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = "bottom",
				g = Object(i.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				O = Object(a.b)(g),
				f = e => {
					let {
						isCommentBoxDesignEnabled: t,
						isTopLevelComment: s,
						children: n
					} = e;
					return o.a.createElement("div", {
						className: Object(m.a)(p.a.spacer, {
							[p.a.isCommentBoxDesign]: t,
							[p.a.isTopLevelComment]: s
						})
					}, n)
				},
				j = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.byline, Object(d.a)({
						isLoading: !0
					}))
				}),
				x = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.avatar, Object(d.a)({
						isLoading: !0
					}))
				}),
				y = e => o.a.createElement(f, e, e.isCommentBoxDesignEnabled ? o.a.createElement(x, null) : o.a.createElement(j, null), o.a.createElement(c.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				C = O(y),
				v = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
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
				E = e => o.a.createElement(v, b({}, e, {
					fallback: o.a.createElement(C, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = E
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
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = s("./src/reddit/components/LottieAnimation/index.tsx"),
				d = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				l = s.n(d);
			! function(e) {
				e.Lottie = "lottie"
			}(n || (n = {}));
			const m = {
				threshold: [.75, .001]
			};
			t.b = a.a.memo(e => {
				const t = Object(o.useRef)(null),
					[s, d] = Object(o.useState)(!1),
					u = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && d(!1), t <= .001 && d(!0)
						})
					}, []);
				Object(i.a)(t, u, m);
				const p = e.type;
				return a.a.createElement("div", {
					className: Object(r.a)(l.a.effectContainer, l.a[p + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, p === n.Lottie && a.a.createElement(c.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			})
		},
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, s) {
			e.exports = {
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
				restrictHeight: "_2SI6K-u7PZ8koDfUmq7jlz",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				AuthorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				authorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				UserIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				userIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				UserIconContainerSmall: "zAxFYkzSByRTsKWHEMfFF",
				userIconContainerSmall: "zAxFYkzSByRTsKWHEMfFF",
				UserIcon: "_13ScjOmi6dGdJw0JAonQEr",
				userIcon: "_13ScjOmi6dGdJw0JAonQEr",
				V1NftTreatment: "_3yYNickUtSp9utejxh7dFL",
				v1NftTreatment: "_3yYNickUtSp9utejxh7dFL",
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
				noSpacing: "_3nqqnHjXPJkfr8j5t_I85P",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				noFlair: "_3LqBzV8aCO9tge99jHiUGy",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentPerfMarkVisibility: "_2CkgPEY8ljDZH3np9UY1ws"
			}
		},
		"./src/reddit/components/Comments/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/models/PostDraft/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/makeDraftKey/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/comment/authoring.ts"),
				b = s("./src/reddit/actions/comment/moderation.ts"),
				h = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				g = s("./src/reddit/icons/fonts/Expand/index.tsx"),
				O = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				f = s.n(O);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x, y, C = s("./node_modules/lodash/defer.js"),
				v = s.n(C),
				E = s("./src/lib/collectible-expressions/index.ts"),
				S = s("./src/lib/lessComponent.tsx"),
				k = s("./src/reddit/actions/toaster.ts"),
				_ = s("./src/reddit/actions/tooltip.ts"),
				I = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				N = s("./src/reddit/helpers/trackers/modTools.ts"),
				P = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/actions/gold/modals.ts"),
				T = s("./src/reddit/actions/modal.ts"),
				R = s("./src/reddit/actions/reportFlow/index.ts"),
				L = s("./src/reddit/helpers/correlationIdTracker.ts"),
				F = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				M = s("./src/reddit/helpers/trackers/lightbox.ts"),
				B = s("./src/reddit/models/Comment/index.ts"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				D = s("./src/reddit/selectors/comments.ts"),
				U = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				V = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				G = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/subreddit.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				K = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				q = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				z = s.n(q);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(x || (x = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(y || (y = {}));
			const Q = (e, t) => {
					const s = z.a[t],
						n = z.a[e];
					return Object(d.a)(s, n)
				},
				Y = e => Object(d.a)(z.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[z.a.isInOverlay]: e.isInOverlay,
					[z.a.isModModeEnabled]: e.isModModeEnabled,
					[z.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var J = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				X = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Z = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				$ = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				ee = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				te = s("./src/reddit/components/ModModeReports/helpers.ts"),
				se = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/index.tsx"),
				re = s("./src/reddit/components/ReportFlow/new.tsx"),
				oe = s("./src/reddit/components/ShareMenu/index.tsx"),
				ae = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ie = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ce = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				de = s("./src/reddit/layout/row/Inline/index.tsx"),
				le = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				me = s("./src/reddit/icons/fonts/index.tsx"),
				ue = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				pe = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				be = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				he = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ge = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Oe = s("./src/reddit/models/Toast/index.ts"),
				fe = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				je = s("./src/devPlatform/constants.ts"),
				xe = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				ye = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Ce = s.n(ye);
			const ve = S.a.wrapped(ue.a, "CommentIcon", Ce.a),
				Ee = S.a.wrapped(ge.a, "Report", Ce.a),
				Se = S.a.wrapped(be.a, "IgnoreReport", Ce.a),
				ke = S.a.wrapped(ee.a, "ModActionsMenu", Ce.a),
				_e = S.a.div("OverflowMenuSpacer", Ce.a),
				Ie = S.a.wrapped(se.a, "DropdownRow", Ce.a),
				Ne = S.a.wrapped(de.a, "Flatlist", Ce.a),
				Pe = S.a.button("Button", Ce.a),
				we = S.a.wrapped(J.a, "ModToolsFlatlist", Ce.a),
				Te = S.a.wrapped(ie.a, "ViewReportsDropdown", Ce.a),
				Re = e => `Comment-${e}--Modal--DeleteComment`,
				Le = e => `Distinguish--Dropdown--${e}`,
				Fe = e => `${e}-overflow-menu`,
				Me = e => `View--Reports--${e}`,
				Be = Object(i.c)({
					claimedFreeAward: V.b,
					currentUser: H.m,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(A.a)(e) === Re(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(P.b)(Le(s.id))(e)
					},
					isFollowed: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.y)(e, {
							commentId: s.id
						})
					},
					isFollowedCommentExpired: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.A)(e, {
							commentId: s.id
						})
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.E)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(P.b)(Me(s.id))(e)
					},
					isLoggedIn: H.S,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(G.z)(e, {
							postId: s.postId
						})
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(G.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(G.A)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var n, r;
						return (null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === r ? void 0 : r.postOrCommentId) === s.id
					},
					sendRepliesToggled: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.K)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(W.z)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(G.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: U.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(G.F)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isDevPlatformEnabled: e => Object(xe.a)(e)
				});
			class Ae extends o.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(M.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(N.c)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(N.g)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						const e = Object(I.a)(this.props.comment);
						Object(E.a)(e) ? this.props.showToast({
							text: n.fbt._("Sorry, currently you cannot edit Collectible Expression comments on Web.", null, {
								hk: "4dlNfM"
							}),
							duration: 8e3,
							kind: Oe.b.SuccessLockComment
						}) : (this.props.sendEvent(Object(N.f)("edit", this.props.comment.id)), this.props.handleEdit())
					}, this.handleGild = async () => {
						var e;
						const t = Object(L.d)(L.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(N.f)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(N.c)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(N.c)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? B.a.UNFOLLOWED : B.a.FOLLOWED), t(n ? Object(N.h)("follow", s.id) : Object(N.c)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(N.d)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(re.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ne.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ne.b,
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
						commentPermalink: a,
						deleteComment: i,
						depth: c,
						handleReply: l,
						isAvatarsInCommentsEnabled: m,
						isFollowed: u,
						isLoggedIn: p,
						isPendingDeletion: b,
						onDistinguishComment: h,
						onIgnoreReports: g,
						onToggleReportsDropdown: O,
						moderatorPermissions: f,
						modModeEnabled: j,
						postIsArchived: C,
						postAuthorIsBlocked: E,
						postIsLocked: S,
						renderedInOverlay: k,
						sendEvent: _,
						subreddit: I,
						subredditAboutInfo: P,
						toggleDeleteCommentModal: w,
						toggleSendReplies: T,
						trackCommentClick: R,
						isPostUnrepliable: L,
						isDevPlatformEnabled: M
					} = this.props, A = Object(F.a)(f), D = !!s && s.displayText === e.author, U = !!s && s.isEmployee, V = e.unrepliableReason, G = !E && !Object(B.g)(e) && !L && !V && !L && !(P && P.userIsBanned) && (S || C || A && p || e.isLocked ? A && p : p || m), W = Object(te.a)(e), H = A && D && !e.bannedBy, q = D && U && !e.bannedBy, z = H || q, J = !Object(B.g)(e) && s && e.isGildable && !L && !(V && "[deleted]" === e.author), ee = !C && !V, ne = [];
					G && ne.push(o.a.createElement(Pe, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), v()(() => R("reply", e.id)())
						}
					}, o.a.createElement(ve, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), J && ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(le.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => n.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), ne.push(o.a.createElement(oe.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: a,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == I ? void 0 : I.type
					}, o.a.createElement(Pe, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), D || ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(ge.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(me.a, {
							name: e.isSaved ? "saved" : "save"
						}),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => n.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => n.fbt._("Save", null, {
							hk: "4yMsMq"
						})
					}), D && ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(me.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), ee && ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(me.a, {
							name: "notification",
							isFilled: u
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: u ? () => n.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => n.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const re = ne.map(e => o.a.isValidElement(e) ? e : o.a.createElement(Pe, {
							className: Q(e.breakpointGroup, x.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						ae = ne.map(e => o.a.isValidElement(e) ? null : o.a.createElement(Ie, {
							className: Q(e.breakpointGroup, x.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: Ce.a.dropdownRowText
						}, e.icon));
					return o.a.createElement(r.Fragment, null, o.a.createElement(Ne, {
						className: Object(d.a)(Y({
							depth: c,
							isInOverlay: k,
							isModModeEnabled: A && j || M,
							isFollowCommentEnabled: ee
						}), t)
					}, re, o.a.createElement(_e, {
						className: D ? void 0 : Q(y.LoggedInUser, x.HideIfVWLarger)
					}, o.a.createElement(se.b, {
						className: Ce.a.overflowMenu,
						disabled: b,
						dropdownId: Fe(e.id),
						onClick: () => _(Object(N.c)("comment_overflow_menu", e.id))
					}, ae, D && o.a.createElement(o.a.Fragment, null, o.a.createElement(Ie, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: Ce.a.dropdownRowText
					}, o.a.createElement(me.a, {
						name: "delete"
					})), o.a.createElement(ce.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: T,
						isSelected: this.props.sendRepliesToggled
					})), o.a.createElement(fe.a, {
						contextType: je.a.COMMENT,
						contextData: e
					}))), this.props.isConfirmModalOpen && o.a.createElement(Z.a, {
						actionText: n.fbt._("Delete", null, {
							hk: "1bl9Tc"
						}),
						cancelActionText: n.fbt._("Keep", null, {
							hk: "3hCBEF"
						}),
						headerText: n.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: n.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: i,
						toggleModal: w,
						trackClick: () => {},
						withOverlay: !0
					}), A && o.a.createElement(o.a.Fragment, null, j && o.a.createElement(we, {
						className: Q(y.Moderator, x.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: D
					}), o.a.createElement(ke, {
						className: j ? Q(y.Moderator, x.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => _(Object(N.c)("comment_mod_action_menu", e.id))
					}, o.a.createElement(he.a, null), o.a.createElement(K.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(te.c)(e) && !j && o.a.createElement(X.a, {
						text: `${W}`,
						onClick: () => {
							O(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Me(e.id)
					}, o.a.createElement(Te, {
						model: e,
						onIgnoreReports: () => {
							g(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Me(e.id)
					}), e.ignoreReports ? o.a.createElement(Se, null) : o.a.createElement(Ee, null)), z && o.a.createElement(X.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, o.a.createElement(pe.a, null), o.a.createElement($.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: U,
						isUserMod: A,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Le(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var De = Object(a.b)(Be, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(T.i)(Re(s.id))), e(Object(_.h)({
								tooltipId: Fe(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(p.e)({
								commentId: s.id,
								draftKey: Object(l.a)(c.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: n
							}))
						},
						handleReply: () => n && e(Object(p.s)({
							parentCommentId: s.id,
							commentsPageKey: n
						})),
						onCommentFollow: t => e(Object(p.u)(s.id, t)),
						onDistinguishComment: (t, n) => e(Object(b.b)(s.id, t, n)),
						onFollowedCommentExpire: () => e(Object(u.p)({
							id: s.id,
							expiresAt: 0
						})),
						onGildClick: (t, n) => e(Object(w.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(b.g)(s.id)),
						onReportClick: () => e(Object(R.c)(s.id)),
						onToggleSave: () => e(Object(u.o)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(_.h)({
							tooltipId: Le(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(_.h)({
							tooltipId: Me(s.id)
						})),
						showToast: t => e(Object(k.f)(t)),
						toggleDeleteCommentModal: () => e(Object(T.i)(Re(s.id))),
						toggleSendReplies: () => e(Object(p.l)(s.id))
					}
				})(Object(ae.c)(Ae)),
				Ue = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Ve = s.n(Ue);
			var Ge = o.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return o.a.createElement("div", {
						className: Ve.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				We = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				He = s.n(We);
			var Ke = o.a.memo(e => o.a.createElement("div", {
					className: He.a.gradientHighlightContainer,
					role: "presentation"
				})),
				qe = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				ze = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Qe = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Ye = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Je = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Xe = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Ze = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				$e = s("./src/reddit/components/ModModeReports/index.tsx"),
				et = s("./src/reddit/components/PostTopMeta/index.tsx"),
				tt = s("./src/reddit/components/RichTextJson/index.tsx"),
				st = s("./src/reddit/components/UserIcon/index.tsx"),
				nt = s("./src/reddit/components/UserIcon/constants.ts"),
				rt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				ot = s("./src/reddit/helpers/author.ts"),
				at = s("./src/reddit/constants/componentTestIds.ts"),
				it = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ct = s("./src/reddit/contexts/Visibility.tsx"),
				dt = s("./src/reddit/controls/ErrorText/index.tsx"),
				lt = s("./src/reddit/controls/InternalLink/index.tsx"),
				mt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				ut = s("./src/reddit/helpers/flair.ts"),
				pt = s("./src/reddit/models/Subreddit/index.ts"),
				bt = s("./src/reddit/models/User/index.ts"),
				ht = s("./src/reddit/models/Vote/index.ts"),
				gt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				Ot = s("./src/reddit/selectors/commentSelector.ts"),
				ft = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				jt = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				xt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				yt = s("./src/reddit/selectors/poll/index.ts"),
				Ct = s("./src/reddit/selectors/userPrefs.ts"),
				vt = s("./src/reddit/selectors/moderatingComments.ts"),
				Et = s("./src/reddit/components/Comments/Comment/index.m.less"),
				St = s.n(Et),
				kt = s("./src/config.ts"),
				_t = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				It = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Nt = s("./src/reddit/helpers/trackers/comment.ts");

			function Pt() {
				return (Pt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const wt = 300,
				Tt = S.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return o.a.createElement("button", j({}, s, {
						className: Object(d.a)(t, f.a.expandButton)
					}), o.a.createElement(g.a, {
						className: f.a.expandIcon
					}))
				}), "ExpandButton", St.a),
				Rt = S.a.wrapped(De, "FlatList", St.a),
				Lt = S.a.wrapped(dt.b, "ErrorText", St.a),
				Ft = S.a.wrapped(Ye.a, "HorizontalVotes", St.a),
				Mt = S.a.div("ActionBar", St.a),
				Bt = S.a.wrapped(ze.a, "TopMeta", St.a),
				At = S.a.div("CommentContentWrapper", St.a),
				Dt = S.a.wrapped(Je.b, "AuthorHovercard", St.a),
				Ut = Object(it.v)(),
				Vt = Object(a.b)(() => Object(i.c)({
					comment: (e, t) => Object(Ot.c)(e, t),
					currentProfileModPermissions: it.i,
					depth: (e, t) => Object(D.j)(e, t),
					collapsed: vt.b,
					collapsedBecauseCrowdControl: vt.a,
					currentUser: H.m,
					flair: D.e,
					focused: (e, t) => !t.noFocus && Object(D.t)(e, t),
					highlightAnimationDisabled: Ct.d,
					isAdmin: H.M,
					isEditing: D.z,
					isLoggedIn: H.S,
					isPendingDeletion: D.E,
					isPresenceConsumptionExpEnabled: jt.c,
					moderatorPermissions: (e, t) => {
						const s = Object(Ot.c)(e, t);
						return s ? Object(xt.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: yt.f,
					modModeEnabled: it.W,
					errorMsgs: D.I,
					replyFormOpen: D.L,
					subreddit: it.s,
					subredditType: D.O,
					isOnlineConsumptionLoadTest: jt.a,
					isOnlineUserPref: H.X,
					userIsBanned: (e, t) => {
						const s = Object(Ot.c)(e, t);
						return !!s && Object(W.ib)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: ft.b,
					isBlockingInterstitialV2Enabled: ft.c
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: r,
						trackCommentClick: o
					} = t;
					return {
						onCollapseClick: () => e(Object(u.q)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: r
						})),
						onIgnoreReports: () => e(Object(b.g)(s)),
						onVoteClick: t => {
							const [n, r] = t === ht.a.upvoted ? [Object(u.s)(s), "upvote_comment"] : [Object(u.k)(s), "downvote_comment"];
							o(r, s)(), e(n)
						},
						onMediaReload: () => {
							e(Object(u.l)(s))
						}
					}
				}),
				Gt = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Wt = e => o.a.createElement("div", e, e.children),
				Ht = e => o.a.createElement(o.a.Fragment, null, e.children),
				Kt = Ut(Vt(e => {
					var t;
					const {
						childrenInfo: s,
						clearHovered: a,
						collapsed: i,
						collapsedBecauseCrowdControl: m,
						comment: u,
						commentsPageKey: b,
						currentProfileModPermissions: g,
						currentUser: O,
						depth: f,
						errorMsgs: j,
						flair: x,
						flatlist: y,
						focused: C,
						hasAwardGradient: v,
						highlightAnimationDisabled: E,
						highlightTreatment: S,
						index: k,
						isActive: _,
						isAdmin: N,
						isAvatarsInCommentsEnabled: P,
						isBlockingInterstitialEnabled: w,
						isBlockingInterstitialV2Enabled: T,
						isEditing: R,
						isFirstInList: L,
						isHighlighted: M,
						isLoggedIn: A,
						isOnlineConsumptionLoadTest: D,
						isOnlineUserPref: U,
						isPendingDeletion: V,
						isPresenceConsumptionExpEnabled: G,
						moderatorPermissions: W,
						modModeEnabled: H,
						noSpacing: K = !1,
						onCommentAuthorClick: q,
						onCommentTimestampClick: z,
						onCollapseClick: Q,
						onIgnoreReports: Y,
						onLineMouseOver: J,
						onPresenceIndicatorInViewport: X,
						onVoteClick: Z,
						postId: $,
						prediction: ee,
						renderedInOverlay: se,
						replyFormOpen: ne,
						restrictHeight: re,
						rtJSONRedditStyle: oe,
						showBlockingInterstitial: ie,
						subreddit: ce,
						subredditType: de,
						trackCommentClick: le,
						userIconSmall: me,
						userIsBanned: ue,
						onClickRevealSpoilerText: pe,
						onMediaReload: be
					} = e, he = u.isDeleted, ge = !R && !he && !!j && j.length > 0, Oe = Object(l.a)(c.c.edit, u.id), fe = Object(l.a)(c.c.replyToComment, u.id), je = Object(F.a)(W), xe = Object(Ze.a)(u), ye = Object(te.c)(u), Ce = u.authorIsContractor && de === pt.g.EmployeesOnly, ve = u.isLocked, Ee = je && H, Se = !R && !he && (A || P), ke = P && !u.unrepliableReason, _e = !!O && Object(bt.e)(O) === u.author, [Ie, Ne] = Object(r.useState)(null), [Pe, we] = Object(r.useState)(null), Te = Object(r.useRef)(null), Re = Object(B.f)(u) || Object(B.g)(u), Le = Re ? Wt : lt.default, Fe = Object(B.f)(u) ? Ht : Dt, Me = Object(ae.b)();
					Object(r.useEffect)(() => {
						if (!R && !he && (v && Ne(o.a.createElement(Ke, null)), null !== S)) {
							if (S.glowHexColor) {
								const e = S.glowHexColor;
								Ne(o.a.createElement(Ge, {
									hexColor: e
								}))
							}
							if (S.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = S.effectHighlight;
								we(o.a.createElement(qe.b, {
									prefersReducedAnimation: E,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [R, he, v, E, S]);
					const Be = Object(r.useCallback)(() => {
							Me(Object(Nt.c)(u.id))
						}, [Me, u.id]),
						Ae = Object(ct.b)();
					(w || T) && Ae && k >= ft.a - 1 && ie();
					const De = !he && !Object(B.f)(u) && (!ue || ue && _e) && !Object(B.g)(u) && A,
						Ue = Object(r.useCallback)(() => {
							De && G && !_e && X && X(u.id)
						}, [u.id, X, De, G, _e]),
						Ve = Object(I.a)(u),
						We = !!O && Object(bt.e)(O) === u.author ? null == O ? void 0 : O.accountIcon : u.profileImage,
						He = Object(_t.c)(We),
						ze = He || Object(_t.b)(We);
					return o.a.createElement("div", {
						key: `comment-${u.id}`,
						className: Object(d.a)(`Comment ${u.id}`, St.a.CommentWrapper, {
							[St.a.highlightComment]: M,
							[St.a.deleted]: he,
							[St.a.focused]: C,
							[St.a.redesign]: P,
							[St.a.topLevel]: !f,
							[St.a.noSpacing]: K
						})
					}, Ie, Pe, !R && !he && L && o.a.createElement("div", {
						className: St.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${kt.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), o.a.createElement(Tt, {
						className: Object(d.a)(u.id, {
							[St.a.hidden]: !i,
							[St.a.visible]: i
						}),
						onClick: () => {
							a(), Q(), le("collapse", u.id)()
						},
						onMouseOver: () => J(u.id),
						onMouseOut: a
					}), Object(ot.a)(u.author) ? ce ? o.a.createElement(It.b, {
						className: Object(d.a)(St.a.UserIconContainer, me && St.a.UserIconContainerSmall),
						subredditOrProfile: ce,
						linkTo: `/user/${u.author}/`
					}) : null : o.a.createElement(Fe, {
						alwaysShowChildren: !0,
						collapsed: i,
						hoverDivClassName: St.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(B.g)(u),
						postOrComment: u,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: se ? et.f.Lightbox : void 0
					}, o.a.createElement(Le, {
						className: Object(d.a)(St.a.UserIconContainer, me && St.a.UserIconContainerSmall),
						"data-testid": Re ? void 0 : "comment_author_icon",
						onClick: Re ? void 0 : q,
						to: `/user/${u.author}/`
					}, Ae ? o.a.createElement(st.a, {
						isNft: ze,
						className: Object(d.a)(St.a.UserIcon, {
							[St.a.v1NftTreatment]: He
						}),
						iconUrl: We,
						isNSFW: u.profileOver18 || !1,
						nsfwIconUrl: nt.a,
						userName: u.author,
						isHighlighted: M,
						shouldShowPresenceIndicator: De && G,
						onPresenceIndicatorInViewport: Ue,
						isCommentAuthorBlocked: Object(B.g)(u),
						collapsed: i,
						shouldUseOnlineOverride: _e,
						isOnlineOverrideValue: U,
						isOnlineStatusLoadTest: De && D,
						authorId: u.authorId
					}) : o.a.createElement("div", {
						className: St.a.UserIcon
					}))), o.a.createElement(At, {
						className: Object(d.a)({
							[St.a.isActive]: _,
							[St.a.isCollapsed]: i,
							[St.a.isLocked]: ve && Ee,
							[St.a.isPendingDeletion]: V,
							[St.a.isRemoved]: !!u.bannedBy && Ee || u.isDeleted && N
						})
					}, o.a.createElement(mt.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", f + 1)], {
						hk: "2XnyAV"
					})), o.a.createElement(Bt, {
						userHasNft: ze,
						childrenInfo: s,
						className: Object(d.a)({
							[St.a.collapsed]: i,
							[St.a.noFlair]: Object(ut.o)(x || null)
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: m,
						comment: u,
						commentsPageKey: b,
						flair: x,
						isAdmin: N,
						isPostComment: !0,
						onCommentAuthorClick: q,
						onCommentTimestampClick: z,
						renderedInOverlay: se,
						renderContractorBadge: Ce
					}), !i && o.a.createElement(r.Fragment, null, R && o.a.createElement(h.a, {
						className: Object(d.a)(St.a.EditCommentForm, St.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: b,
						depth: f,
						draftType: c.c.edit,
						draftKey: Oe,
						postId: $,
						rtJson: Object(I.a)(u),
						mediaMetadata: u.media && u.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: u.id,
						submitAction: e => Object(p.j)({
							id: u.id,
							commentsPageKey: b,
							draftKey: Oe,
							formData: e
						}),
						submitButtonText: n.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !R && (!he || N) && o.a.createElement("div", {
						"data-testid": at.d,
						ref: Te,
						className: Object(d.a)(St.a.CommentBody, {
							[St.a.restrictHeight]: !(!re || !Te.current) && Te.current.clientHeight > wt
						})
					}, ee ? o.a.createElement(Qe.a, {
						comment: u,
						prediction: ee
					}) : o.a.createElement(tt.b, {
						content: Ve,
						mediaMetadata: u.media && u.media.mediaMetadata,
						expressionAssetData: null === (t = u.media) || void 0 === t ? void 0 : t.expressionAssetData,
						redditStyle: oe,
						rtJsonElementProps: Gt(e),
						onClickRevealSpoilerText: pe,
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0,
							onReload: be,
							onClick: Be
						}
					}), o.a.createElement(gt.b, {
						content: Ve
					})), H && je && xe && o.a.createElement(Xe.a, {
						thing: u
					}), H && je && ye && o.a.createElement($e.a, {
						onIgnoreReports: Y,
						reportable: u
					}), null != y ? y : Se && o.a.createElement(Mt, null, ke && o.a.createElement(Ft, {
						downvoteButtonClassName: St.a.voteButton,
						downvoteClassName: St.a.upDownVote,
						model: u,
						onVoteClick: Z,
						scoreClassName: St.a.score,
						upvoteButtonClassName: St.a.voteButton,
						upvoteClassName: St.a.upDownVote
					}), o.a.createElement(Rt, {
						comment: u,
						commentsPageKey: b,
						depth: f,
						isAvatarsInCommentsEnabled: P,
						collapsedBecauseCrowdControl: m,
						modModeEnabled: H,
						moderatorPermissions: g || W,
						renderedInOverlay: se,
						isCommentFocused: C,
						subreddit: ce,
						trackCommentClick: le
					})), ge && j.map(e => o.a.createElement(Lt, {
						key: e
					}, e)), ne && o.a.createElement(h.a, {
						className: Object(d.a)(St.a.EditCommentForm, St.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: b,
						depth: f,
						draftType: c.c.replyToComment,
						draftKey: fe,
						isTopLevelComment: !1,
						parentCommentId: u.id,
						postId: $,
						submitAction: (e, t) => {
							let {
								validate: s,
								...n
							} = e;
							return s ? Object(p.v)({
								commentsPageKey: b,
								draftKey: fe,
								parentCommentDepth: f,
								parentCommentId: u.id,
								formData: n,
								editorMode: t
							}) : Object(p.o)({
								commentsPageKey: b,
								draftKey: fe,
								parentCommentDepth: f,
								parentCommentId: u.id,
								formData: n,
								editorMode: t
							})
						},
						submitButtonText: n.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			t.a = e => o.a.createElement(rt.a.Consumer, null, t => o.a.createElement(Kt, Pt({}, e, {
				trackCommentClick: t
			})))
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
				LiveChatIcon: "_1K0_Ej6gm6u-pTA1-FRY3S",
				liveChatIcon: "_1K0_Ej6gm6u-pTA1-FRY3S",
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
				return _
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "a", (function() {
				return U
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/times.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/pages/comments.ts"),
				u = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/describeApiError/index.ts"),
				h = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				O = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				j = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				x = s("./src/reddit/icons/svgs/LiveChat/index.tsx"),
				y = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				C = s("./src/reddit/components/Comments/States/index.m.less"),
				v = s.n(C);
			const E = l.a.p("EmptyTitle", v.a),
				S = l.a.p("ErrorTitle", v.a),
				k = l.a.p("EmptyText", v.a),
				_ = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return i.a.createElement("div", {
						className: Object(d.a)(v.a.StateContainer, t)
					}, s ? i.a.createElement(x.a, {
						className: v.a.LiveChatIcon
					}) : i.a.createElement(j.a, {
						className: v.a.CommentsIcon
					}), i.a.createElement(E, null, s ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), i.a.createElement(k, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				I = () => i.a.createElement("div", {
					className: v.a.StateContainer
				}, i.a.createElement(j.a, {
					className: v.a.CommentsIcon
				}), i.a.createElement(E, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(k, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				N = e => {
					let {
						link: t
					} = e;
					return i.a.createElement("div", {
						className: v.a.StateContainer
					}, i.a.createElement(j.a, {
						className: v.a.CommentsIcon
					}), i.a.createElement(E, null, n.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), i.a.createElement(p.n, {
						to: Object(h.b)(t)
					}, n.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				P = Object(c.b)(null, (e, t) => {
					let {
						postId: s,
						commentId: n,
						sort: r
					} = t;
					return {
						onClick: () => e(Object(m.commentsPageDataRequested)(s, n, {
							sort: r
						}, r))
					}
				})(e => {
					let {
						apiError: t,
						onClick: s
					} = e;
					return i.a.createElement("div", {
						className: v.a.StateContainer
					}, i.a.createElement(y.a, {
						className: v.a.SnooFacepalm
					}), i.a.createElement(S, null, t ? Object(b.a)({
						apiError: t,
						isLoggedOut: !1
					}) : n.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), i.a.createElement(p.l, {
						onClick: s
					}, n.fbt._("Retry", null, {
						hk: "NOuNi"
					})))
				}),
				w = e => {
					let {
						postId: t,
						commentId: s,
						sort: n,
						apiError: r
					} = e;
					return i.a.createElement("div", {
						className: Object(d.a)(v.a.StateContainer, v.a.ErrorFullPage)
					}, i.a.createElement(P, {
						postId: t,
						commentId: s,
						sort: n,
						apiError: r
					}))
				},
				T = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement(u.a, null))
				}, "LoadingFullPage", v.a),
				R = l.a.div("CommentsPlaceholderContainer", v.a),
				L = l.a.div("CommentPlaceholder", v.a),
				F = l.a.div("Avatar", v.a),
				M = l.a.div("VoteColumn", v.a),
				B = l.a.div("TextColumn", v.a),
				A = () => i.a.createElement("div", {
					className: Object(d.a)(v.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				D = () => i.a.createElement("div", {
					className: Object(d.a)(v.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				U = e => {
					let {
						isAvatarsInCommentsEnabled: t,
						sidebar: s = !0
					} = e;
					return i.a.createElement(R, null, o()(10, e => i.a.createElement(L, {
						key: e
					}, s && i.a.createElement(i.a.Fragment, null, t ? i.a.createElement(F, {
						className: Object(g.a)({
							isLoading: !0
						})
					}) : i.a.createElement(M, null, i.a.createElement(f.b, {
						className: v.a.Upvote
					}), i.a.createElement(O.a, {
						className: v.a.Downvote
					}))), i.a.createElement(B, null, i.a.createElement(A, null), i.a.createElement(D, null)))))
				}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				O = s.n(g),
				f = s("./src/lib/lessComponent.tsx");
			const j = "create-community-button",
				x = f.a.wrapped(l.c, "StyledTooltip", O.a),
				y = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.rb)(e),
					userIsSuspended: h.Z
				});
			t.a = Object(a.b)(y, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(s)), e(Object(c.h)(u.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: j
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(m.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: r,
					onHideTooltip: a,
					openCommunityCreation: i,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: m
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						m && m(e), i(c)
					},
					onMouseEnter: r,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: j,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: j,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: j,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreateCommunitySidebar/index.m.less": function(e, t, s) {
			e.exports = {
				BannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				bannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				ButtonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				buttonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				Button: "_1vv6LrKIsjHuIJCCgIntnC",
				button: "_1vv6LrKIsjHuIJCCgIntnC",
				CommunityText: "_9jODC2-h7cM9Y6Duqs_W4",
				communityText: "_9jODC2-h7cM9Y6Duqs_W4",
				Container: "_3lfTEmyI7x9ib1wz4e8RWP",
				container: "_3lfTEmyI7x9ib1wz4e8RWP",
				SnooImg: "_20axzOalQqYkHj-7Idfqun",
				snooImg: "_20axzOalQqYkHj-7Idfqun"
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.m.less": function(e, t, s) {
			e.exports = {
				AnnouncementContainer: "_2n96dzZYei5koZIof4hNGb",
				announcementContainer: "_2n96dzZYei5koZIof4hNGb",
				Title: "_2_60e51mes8qIV48MFyxwe",
				title: "_2_60e51mes8qIV48MFyxwe",
				Description: "_1ADicmI89099yV3e3zrjUD",
				description: "_1ADicmI89099yV3e3zrjUD",
				Button: "_1vGOSBVzbAH3jn-PrQ2qY5",
				button: "_1vGOSBVzbAH3jn-PrQ2qY5",
				CloseButton: "_1KlaD5sga3um3ZmSli7uwr",
				closeButton: "_1KlaD5sga3um3ZmSli7uwr",
				iconStyles: "_1vyFrq5zn33vVTIC_LlCmR"
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(i);
			t.a = a.a.wrapped(e => r.a.createElement("div", {
				className: Object(o.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less": function(e, t, s) {
			e.exports = {
				LanguageRow: "_1uqw13duLAypklZz9JuxH5",
				languageRow: "_1uqw13duLAypklZz9JuxH5",
				Selected: "C0ynfBku9Az2wYA9j1_PA",
				selected: "C0ynfBku9Az2wYA9j1_PA",
				NightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				nightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				ButtonSection: "_2go248Acx87AyaspT-IqC3",
				buttonSection: "_2go248Acx87AyaspT-IqC3",
				SelectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				selectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				FrontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				frontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				TextSection: "_5Rt2rPaHLuyB5smTxh9cS",
				textSection: "_5Rt2rPaHLuyB5smTxh9cS",
				Placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				Icon: "_1ym0rG9P61fqq5EGeggDEg",
				icon: "_1ym0rG9P61fqq5EGeggDEg",
				isLeft: "_1wilU6X1e2oYYu84p5M0Bn",
				isRight: "_1N6ONFJor0MYB1AANfCh8M",
				LanguageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				languageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				HeaderBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				headerBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				MoreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				moreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				PromptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				promptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				PromptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				promptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				Close: "Z2DAjXDKT-rjUoOgPeR9b",
				close: "Z2DAjXDKT-rjUoOgPeR9b",
				PromptTitle: "_6pr2vYjViLknuzg7J_4II",
				promptTitle: "_6pr2vYjViLknuzg7J_4II",
				PromptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				promptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				PromptRow: "piSYz03CLXLD5jdQwPjUy",
				promptRow: "piSYz03CLXLD5jdQwPjUy",
				Dismiss: "Fssd937Pdx1KOrc1lhBS5",
				dismiss: "Fssd937Pdx1KOrc1lhBS5"
			}
		},
		"./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less"),
				l = s.n(d),
				m = s("./src/reddit/constants/componentTestIds.ts"),
				u = s("./src/reddit/contexts/ApiContext.tsx"),
				p = s("./src/reddit/endpoints/onboarding/languageSelections.ts"),
				b = s("./src/reddit/constants/tracking.ts"),
				h = s("./src/reddit/selectors/telemetry.ts");
			const g = "bottom_sheet";
			var O;
			! function(e) {
				e.ADD = "add", e.LATER = "maybe_later", e.SKIP = "skip"
			}(O || (O = {}));
			var f = s("./src/reddit/hooks/useTracking.ts"),
				j = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/models/Toast/index.ts"),
				y = s("./src/reddit/selectors/eligibleUXExperiences.ts"),
				C = s("./src/reddit/selectors/experiments/uxtsIntegration.ts"),
				v = s("./src/reddit/selectors/meta.ts"),
				E = s("./src/redditGQL/types.ts");
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = e => {
				const {
					gqlContext: t
				} = e, s = Object(o.d)(), d = Object(f.a)(), u = Object(o.e)(v.b), [y, C] = Object(n.useState)(!1), [k, _] = Object(n.useState)({}), [I, N] = Object(n.useState)({}), [P, w] = Object(n.useState)([]);
				let T = ["es"];
				const R = Object(n.useCallback)(async () => {
					const e = await Object(p.b)(t);
					e && (N(e.languages), w(e.preferences), C(!0))
				}, [t]);
				Object(n.useEffect)(() => {
					R()
				}, [R]);
				const L = e => {
						d("skip" === e ? (e => t => ({
							...Object(h.o)(t),
							source: g,
							action: b.c.CLICK,
							noun: O.SKIP,
							actionInfo: {
								...Object(h.d)(t),
								type: e
							}
						}))(u) : (e => t => ({
							...Object(h.o)(t),
							source: g,
							action: b.c.CLICK,
							noun: O.LATER,
							actionInfo: {
								...Object(h.d)(t),
								type: e
							}
						}))(u)), C(!1), s(Object(i.c)({
							experience: E.cb.LanguagePreferenceBottomSheet,
							value: !1
						}))
					},
					F = () => {
						const e = Object.keys(k).join();
						d(((e, t) => s => ({
							...Object(h.o)(s),
							source: g,
							action: b.c.CLICK,
							noun: O.ADD,
							actionInfo: {
								...Object(h.d)(s),
								reason: t,
								type: e
							}
						}))(u, e)), (async () => {
							var e;
							const n = k;
							P.map(e => n[e] = !0);
							const r = await Object(p.d)(t, n);
							(null === (e = null == r ? void 0 : r.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) ? s(Object(c.f)({
								kind: x.b.SuccessCommunity,
								text: S._("Changes saved", null, {
									hk: "2isjrZ"
								})
							})): s(Object(c.f)({
								kind: x.b.Error,
								text: S._("Changes failed to save. Try adding content languages in user settings", null, {
									hk: "2YYdoj"
								})
							}))
						})(), C(!1), s(Object(i.c)({
							experience: E.cb.LanguagePreferenceBottomSheet,
							value: !1
						}))
					};
				return T = T.filter(e => !P.includes(e)), y && 0 !== T.length ? (d((e => t => ({
					...Object(h.o)(t),
					source: g,
					action: b.c.VIEW,
					noun: b.b.SCREEN,
					actionInfo: {
						...Object(h.d)(t),
						type: e
					}
				}))(u)), s(Object(i.d)(E.cb.LanguagePreferenceBottomSheet)), r.a.createElement("div", {
					className: l.a.PromptContainer
				}, r.a.createElement("div", {
					className: l.a.PromptClose
				}, r.a.createElement(j.a, {
					className: l.a.Close,
					onClick: () => L("skip"),
					"data-testid": m.e
				})), r.a.createElement("div", {
					className: l.a.PromptTitle
				}, S._("See content in more languages", null, {
					hk: "4uyzS1"
				})), r.a.createElement("div", {
					className: l.a.PromptSubtitle
				}, S._("Update your settings to make it easier to discover content in multiple languages", null, {
					hk: "3VhB1c"
				})), 1 === T.length ? r.a.createElement("div", {
					className: l.a.PromptRow,
					onClick: () => (e => {
						const t = k;
						t[e] = !0, _(t), F()
					})(T[0]),
					"data-testid": T[0]
				}, S._("Add {language}", [S._param("language", I[T[0]])], {
					hk: "2emiHZ"
				})) : null, r.a.createElement("div", {
					className: Object(a.a)(l.a.PromptRow, {
						[l.a.Dismiss]: !0
					}),
					onClick: () => L("later")
				}, S._("Maybe later", null, {
					hk: "2LjBDw"
				})))) : null
			};
			t.a = Object(u.b)(e => {
				var t;
				const {
					gqlContext: s
				} = e, n = Object(o.f)().getState();
				return (null === (t = Object(o.e)(e => Object(y.a)(e, {
					experience: E.cb.LanguagePreferenceBottomSheet
				}))) || void 0 === t ? void 0 : t.value) && Object(C.b)(n) ? r.a.createElement(k, {
					gqlContext: s
				}) : null
			})
		},
		"./src/reddit/components/Pill/PillButton/index.m.less": function(e, t, s) {
			e.exports = {
				primaryButton: "cmR5BF4NpBUm3DBMZCmJS",
				active: "_2dj14FxV-bfkwopj1jV_fF",
				redditStyle: "C64b9palJF2n26mG_1q3D",
				DangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				dangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				GoldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				goldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				PremiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				premiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				Icon: "_1V9TNuAloX-Z3moRIXc8tO",
				icon: "_1V9TNuAloX-Z3moRIXc8tO",
				isLeft: "HjpiNF5rj_I6fiMfmW-X7",
				isRight: "_1A_npZJAxjfyiijZ14jtzh",
				tabGroup: "_2jNQT-6WbFOjX2hdDWV56w",
				inactive: "_1g3g98ViMb36cM-peU17Jk"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return u
			}));
			var n, r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Pill/PillButton/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.BUTTON = "BUTTON", e.TAB_GROUP = "TAB_GROUP"
			}(n || (n = {}));
			const l = {
					[n.BUTTON]: void 0,
					[n.TAB_GROUP]: c.a.tabGroup
				},
				m = (e, t) => {
					if (t !== n.BUTTON) return e ? c.a.active : c.a.inactive
				},
				u = e => {
					let {
						active: t = !0,
						children: s,
						className: n,
						disabled: r = !1,
						variant: i,
						...u
					} = e;
					return o.a.createElement("button", d({}, u, {
						className: Object(a.a)(c.a.primaryButton, l[i], m(t, i), n),
						disabled: r
					}), s)
				}
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/FocusableContent/index.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				d = s.n(c);
			t.a = e => {
				let {
					className: t,
					isCommentBoxDesignEnabled: s,
					isLoading: n,
					toolbarPosition: c
				} = e;
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(a.a, {
					isFocused: !1
				}, !s && "top" === c && r.a.createElement("div", {
					className: Object(o.a)(d.a.toolbar, d.a.topToolbar, Object(i.a)({
						isLoading: n
					}))
				}), r.a.createElement("div", {
					className: Object(o.a)(d.a.content, {
						[d.a.mCollapsed]: s
					})
				}, r.a.createElement("div", {
					className: Object(o.a)(d.a.prompt, Object(i.a)({
						isLoading: !0
					}))
				})), !s && "bottom" === c && r.a.createElement("div", {
					className: Object(o.a)(d.a.toolbar, d.a.bottomToolbar, Object(i.a)({
						isLoading: n
					}))
				})))
			}
		},
		"./src/reddit/components/SearchBanner/index.m.less": function(e, t, s) {
			e.exports = {
				announcement: "_1hUjYWB4NLdPs1k_qx-f0u"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_3W4fKI_ey_jDfiIO7ElMuP",
				eventMeta: "_2IeaiLn4GyfAXKD1TLrIS1",
				postContent: "_3zoWB97jg8GAUJCl4XA57a",
				postItemMetaContainer: "_3xctgCPJ_3knmtE3O9TQzE",
				postItemTitleContainer: "_3CAq9fn45Es59QdDzgtbhZ",
				postItemFlatlistContainer: "oNxebZMPvUlTJIOtprxhP",
				mediaWrapper: "_1eIKxpeFNBTQ699qAcQRbd",
				marginCancel: "_3IElQYxAJq_0qRyeyMDc_K",
				twitterEmbed: "Tzfi4PWE-V9cQ78MJ3GkX",
				promotedTrend: "_1yoxdnJLJUmMiTSTn_QkNJ",
				mediaContent: "_1zcwL6v8t8G0OHvf5D4WW-",
				textMediaWrapper: "_2ZlSdmjvWREfUPvdtzIAN_",
				textMedia: "_2dnz6aKPWeFF1opQ_XsTYW",
				seeMore: "_2oliTAoFFxS1mse-sOZinV",
				adLinkWrapper: "p35vRG-PK5zfK-G5gjGAr",
				outboundLink: "_16eWoJfxv365opQYh3dOAJ",
				ctaExperiment: "_1fSEjc0jhvt02_0z07145y",
				adCallToAction: "BMx4T197BjzZgmRjegR7y",
				active: "_28VWbryTIGJPb62Ey50lm8",
				redditStyle: "n1f3mSINfKiMWmz1fdi1o"
			}
		},
		"./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less": function(e, t, s) {
			e.exports = {
				searchNSFWToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNsfwToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNSFWToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9",
				searchNsfwToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9"
			}
		},
		"./src/reddit/components/SearchPost/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2dkUkgRYbhbpU_2O2Wc5am",
				mFirst: "_28efb5XEIggTEMzT5v9i61",
				eventMeta: "_1rd6n9Xvtg4-5Vw7E3NhEh",
				postContent: "_2i5O0KNpb9tDq0bsNOZB_Q",
				postItemMetaContainer: "_37TF67KpZQl9SHbiAhz3mf",
				postItemWarningContainer: "_1nfcZWg35_OmccxqivQ1EN",
				postItemTitleContainer: "_19FzInkloQSdrf0rh3Omen",
				postItemFlatlistContainer: "HNL__wz5plDpzJe5Lnn",
				outboundLink: "a6Bzb7gqvN3mqBOAEyFIv",
				titleMedium: "_1FT0e6kh1BBb_oALAMW_l7",
				titleTextColor: "_1-SZ3VwLjbFwTzaZvU8FBX",
				thumbnail: "_2r9BZFotuBbLYnijAaskeZ",
				blurred: "rIj9lvusQvb0-Mf16X6ZL",
				container: "PrfaR-luawcEBK2dhGuDp",
				thumbnailContainer: "Gk-MlLujgqsaX1n-sGa_O",
				syntaxHighlight: "_1Nh8xLEUG3orjY1k1aijj",
				paddingSide: "_2n04GrCyhhQf-Kshn7akmH",
				paddingRight: "_1yBpz1MEPxxYTxjlEilGtB",
				postTitleVisibility: "_1SAKlLic4t9BBtiiE-Z6ob",
				postTitleColors: "nbO8VWsMIB-Mv-tIa37NF",
				backgroundWrapper: "UcytmAhLeRTIrWR81xl4P",
				inline: "_1AKeAGcglmBjK1SUUXNFti"
			}
		},
		"./src/reddit/components/SearchPostFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_2IpBiHtzKzIxk2fKI4UOv1",
				flatlistItem: "_vaFo96phV6L5Hltvwcox"
			}
		},
		"./src/reddit/components/SearchPostFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/components/SearchPostFlatlist/index.m.less"),
				d = s.n(c);
			const l = e => {
					let {
						children: t,
						className: s
					} = e;
					return o.a.createElement("div", {
						className: Object(a.a)(d.a.flatlistContainer, s)
					}, t)
				},
				m = e => {
					let {
						score: t
					} = e;
					return o.a.createElement("span", {
						className: Object(a.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{upvotesCount} upvotes",
						_1: "{upvotesCount} upvote"
					}, [n.fbt._param("upvotesCount", Object(i.b)(t)), n.fbt._plural(t)], {
						hk: "4rxl9Z"
					}))
				},
				u = e => {
					let {
						awardCountsById: t,
						awardingsTotal: s
					} = e;
					const r = s && s > 0 ? s : Object.values(t || {}).reduce((e, t) => e += t, 0);
					return o.a.createElement("span", {
						className: Object(a.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{awardsCount} awards",
						_1: "{awardsCount} award"
					}, [n.fbt._param("awardsCount", Object(i.b)(r)), n.fbt._plural(r)], {
						hk: "1jrEck"
					}))
				};

			function p(e) {
				let {
					post: t,
					className: s
				} = e;
				return o.a.createElement(l, {
					className: s
				}, o.a.createElement(m, {
					score: t.score
				}), o.a.createElement("span", {
					className: Object(a.a)(d.a.flatlistItem)
				}, n.fbt._({
					"*": "{commentsCount} comments",
					_1: "{commentsCount} comment"
				}, [n.fbt._param("commentsCount", Object(i.b)(t.numComments)), n.fbt._plural(t.numComments)], {
					hk: "4uhYwJ"
				})), o.a.createElement(u, {
					awardCountsById: t.awardCountsById,
					awardingsTotal: t.awardingsTotal
				}))
			}
		},
		"./src/reddit/components/SearchPostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				crosspostIcon: "_1-Dnj_BC9slzHImx9Qex6x",
				hovercardContainer: "_3Wz607wX-KXslTUjYvTZWi",
				metaContainer: "_3xeOZ4NlqvpwzbB5E8QC6r",
				postTopMeta: "_1wxi9M8fCejzbsH0YGSer2",
				subredditName: "_305seOZmrgus3clHOXCmfs",
				enlargedSubredditName: "_2QZLJe3l7lBGN9JNI51gn9",
				subredditIcon: "id5ExZR7GqiUypGICnSYs",
				enlargedSubredditIcon: "_3dUPuwEf-ssCOozUxvm-HX",
				SubscribeButton: "_2vYQV4h1KDa5M62EoOG3t-",
				subscribeButton: "_2vYQV4h1KDa5M62EoOG3t-",
				metadataFont: "_3zxBrqnz24HT1z7OOcRXCS",
				metaSpacer: "_3-fo1J0EWS8TawiUkoZ9DH",
				defaultCommunityIcon: "_3hvmfTpZq_W24eaylznBmS",
				mNightmode: "_15ad3usdVw8bRqdw2I-vhN",
				blur: "_35xBFzll_c4A2_N9fEuuuY",
				contents: "_3d8GzWNAiVF7ncwmjHXlNf"
			}
		},
		"./src/reddit/components/SearchPostMeta/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return f
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				u = s("./src/reddit/hooks/useClickSourceData.ts"),
				p = s("./src/reddit/selectors/experiments/search/searchSubDiscovery.ts"),
				b = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				g = s.n(h);
			const O = "subreddit_icon_link",
				f = "subreddit-name";
			t.c = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					onClickPostCommunity: h,
					post: j,
					subredditOrProfile: x,
					tooltipType: y
				} = e, C = Object(u.a)(), {
					isSubEnlarged: v
				} = Object(a.e)(p.a);
				return o.a.createElement("div", {
					className: Object(n.a)(t, g.a.metaContainer)
				}, !j.isSponsored && x && o.a.createElement(i.a, {
					className: Object(n.a)(g.a.hovercardContainer, g.a.hovercardContainer),
					postId: j.id,
					subredditName: x.name
				}, o.a.createElement(b.b, {
					className: Object(n.a)(g.a.subredditIcon, v && g.a.enlargedSubredditIcon),
					linkTo: x.url,
					linkProps: h ? {
						"data-testid": O,
						onClick: h
					} : void 0,
					subredditOrProfile: x
				}), o.a.createElement(l.a, {
					className: Object(n.a)(g.a.subredditName, v && g.a.enlargedSubredditName),
					"data-testid": f,
					"data-click-id": "subreddit",
					onClick: h,
					to: {
						pathname: x.url,
						state: C
					}
				}, x.displayText)), !j.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(m.b, null), o.a.createElement(c.h, {
					type: j.belongsTo.type,
					id: j.belongsTo.id
				})), o.a.createElement(d.g, {
					className: g.a.postTopMeta,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					post: j,
					tooltipType: y
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				commentContainer: "_2lwxooVpRNqH_bjx-Nm4m4",
				postTitleContainer: "_1nhxJR41hD8jXWqUVy3wTT",
				postTitle: "_1HsM08P8HBGOIPATQsthMA",
				commentContent: "_1i_lg5WToFS_KM8bSao5FB",
				commentAuthor: "q6Rzyt18sGpgOFFoG9gUg",
				commentFlatlist: "_3bkDvRYnc0SodO59dk5n3p",
				goToThreadLinkButton: "_3Yys9Taiw4B3XiXhmbLrra",
				mediaIcon: "_14gjyiBw0XSVan9XLN7ER-"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2u_haOaI877DTCSOfFouuF",
				commentContainer: "_2Uv1IcU4LjDH6OqbNZ0BwO",
				comment: "yNjWq2s_3V0N5m9u-Bx-D",
				link: "-fCtQc5X_zwd1tnX_0s4W",
				linkContainer: "tSwYm_NW9-rD1G91vZi4d"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = s("./src/reddit/components/SearchPost/placeholder.m.less"),
				c = s.n(i),
				d = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.m.less"),
				l = s.n(d);
			const m = e => r.a.createElement("div", {
				className: Object(o.a)(e.className, l.a.postContainer),
				"data-testid": "comment-placeholder"
			}, r.a.createElement("div", {
				className: c.a.postContent
			}, r.a.createElement("div", {
				className: c.a.postItemMetaContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subredditName, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.author, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(c.a.title, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: l.a.commentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.comment, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: l.a.linkContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.link, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: c.a.flatlist
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(a.b)(e))
			}))))
		},
		"./src/reddit/components/SearchResultsContent/Communities/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2mO8vClBdPxiJ30y_C6od2",
				title: "_1hYBlRBooHG-eY5iAHen-R",
				separator: "_1LvQXvsxpSVi-JRudk3e4e",
				previewCommunityStyles: "_3MfNPE_vLKliHPkiYMAtZm",
				loadMoreItem: "_1mLDB-TFHMY0SRGTRD-ipK",
				viewMore: "DMHO9Pay4I5LSwZTtE4TY"
			}
		},
		"./src/reddit/components/SearchResultsContent/Community/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_3BWq3z8_9gA3oThgYXnngR",
				sidebar: "iwmtpuJa21jtA4y_LuOVI",
				mFirst: "YLZe4_XS9hOtObp1VjEF-",
				container: "ei8_Bq_te0jjwNIqmk8Tw",
				subredditIcon: "_2YBzxh6YUsSdcmbcJ-kE5L",
				contentContainer: "_1Nla8vW02K39sy0E826Iug",
				subredditInfo: "_1nTSkRaTteYjCY91DwVEF3",
				title: "_2torGbn_fNOMbGw3UAasPl",
				subtitle: "_3CUjJH8t2eFynKUAv1ER7C",
				flair: "_3sOM1thDS-RiUzmUb8yzxN",
				description: "_3JYXhJlwZCvjZTBplEncbq",
				buttonContainer: "_3llSmEBMCJTcO537oPxHIH",
				warnings: "_1QstT010Ns0i6YkU4n5O25"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				communityContainer: "_2-tXnoxd32Utasnz79k34",
				sidebar: "_2PlcVxaNCQS2-GyaX_mhOA",
				subreddtiIcon: "_3yGdKsP-cHl-Cb_SH-PyXp",
				contentContainer: "Lsafh1CsbqQ8tiuBPTucl",
				subredditInfo: "_1TKuN8SZONE4tjAoEul8sp",
				title: "_11V3zVIqp59I7JvzWnky0w",
				author: "_2GNPL8YTca77gPEWlF9nDb",
				description: "_3C8z4MmIB_gou30f3ojB0V",
				buttonContainer: "_14X6ixd8jgBYsNSxRPXTbL"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				c = s.n(i);
			const d = e => r.a.createElement("div", {
				className: Object(o.a)(c.a.communityContainer, e.sidebar && c.a.sidebar),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subreddtiIcon, Object(a.a)(e))
			}), r.a.createElement("div", {
				className: c.a.contentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subredditInfo, e.sidebar && c.a.sidebar)
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.title, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.author, Object(a.b)(e))
			})), !e.sidebar && r.a.createElement("div", {
				className: Object(o.a)(c.a.description, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(c.a.buttonContainer, Object(a.a)(e))
			}))
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.m.less": function(e, t, s) {
			e.exports = {
				noResults: "_1VDJFxZ-XJSB8yo1UyJzsi",
				withSidebar: "_3C2YoevK_DDUuAyafjSuUs",
				header: "kKE_PXkpQNWEX-RiwWuTA",
				text: "_1tEoY-vmgG3yWH6hCdgy3p",
				image: "e6PSfRI3_H3v8fgbIqj-x",
				button: "_3FKXXAcRW_DvCNr6yMbF73",
				padding: "_2LEtmNuEePPvFdDfwPmBcx"
			}
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return j
			}));
			var n = s("./src/config.ts"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/reddit/controls/Search/CommentSearch/index.tsx"),
				c = s("./src/reddit/controls/Search/SearchBar/index.tsx"),
				d = s("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				l = s("./src/reddit/helpers/trackers/searchResults.ts"),
				m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/pages/SearchResults/index.tsx"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				h = s.n(b);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = `${n.a.assetPath}/img/telescope-snoo.png`;
			var f;

			function j(e) {
				let {
					query: t,
					type: s,
					searchBarId: n = c.a,
					searchOptions: b,
					tab: f
				} = e;
				const j = Object(m.a)();
				Object(o.useEffect)(() => {
					j(Object(l.n)(s, b))
				}, [s]);
				const x = b.restrict_sr || u.pageConfig[f].sidebar,
					y = n === i.a;
				return a.a.createElement("div", {
					className: Object(r.a)(y && h.a.padding)
				}, a.a.createElement("div", {
					className: Object(r.a)(h.a.noResults, x && h.a.withSidebar),
					"data-testid": "no-results"
				}, a.a.createElement("img", {
					alt: g._("No results image", null, {
						hk: "1BoGUJ"
					}),
					src: O,
					className: h.a.image
				}), a.a.createElement("h2", {
					className: h.a.header
				}, g._("Hm... we couldn’t find any results for “", null, {
					hk: "4fFM7J"
				}), g._("{search query}", [g._param("search query", t)], {
					hk: "4vP3YT"
				}), "”"), a.a.createElement("p", {
					className: h.a.text
				}, g._("Double-check your spelling or try different keywords to {=adjust your search}", [g._param("=adjust your search", a.a.createElement("button", {
					className: h.a.button,
					onClick: () => {
						var e;
						const t = document.querySelector(`input[type="search"][id=${n}]`);
						t || null === (e = document.getElementById(i.b)) || void 0 === e || e.click(), d.a.set(p.a.AdjustSearchButton), null == t || t.focus(), null == t || t.select()
					}
				}, g._("adjust your search", null, {
					hk: "1pUIox"
				})))], {
					hk: "33XStx"
				}))))
			}! function(e) {
				e.Comments = "comments", e.Communities = "communities", e.People = "people", e.Posts = "posts"
			}(f || (f = {}))
		},
		"./src/reddit/components/SearchResultsContent/PdpComment/index.m.less": function(e, t, s) {
			e.exports = {
				actionFont: "GdWkLdr7ToYAI7A1BuDdw",
				commentContent: "_2UJq3kiv6y_oSPPmQyFMxy",
				commentContainer: "_2nHutt97wCf1b9Txz8_Y67",
				first: "B1l5QN6o0c-5KGYHlANBw",
				iconSpacer: "vz6ezPSNwnMTVPF3HcJiw",
				leftSpacer: "_6PV9rgxHCsT7DD2OrVvJ0",
				marginTop: "_3jLdjJWF8IlmuZ7sysSq0g",
				marginContainer: "_3KLHXM3DEshAA3TDpGD_4a",
				metadataColor: "tuXecQytAjq5ReXeDFhPI",
				metadataFont: "_3bUukUiGtOzLXmGTBi1yXx",
				flex: "_3SUyRHeYoSqKJ0It_8jTAQ",
				separator: "_1UhP-2TSDqqzDUVoNfS4Nm",
				pdpUserIcon: "_3DCfB-ynh0K_m_xbYTL_Ne"
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less": function(e, t, s) {
			e.exports = {
				separatedCommunity: "_2kqt-kRLvKQ1Kqi8OjMEa7"
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return $t
			})), s.d(t, "c", (function() {
				return rs
			})), s.d(t, "b", (function() {
				return as
			}));
			var n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/LRUCache/index.ts"),
				u = s("./src/reddit/actions/search.ts"),
				p = s("./src/reddit/components/Comments/States/index.tsx"),
				b = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/config.ts"),
				g = s("./node_modules/lodash/noop.js"),
				O = s.n(g),
				f = s("./node_modules/polished/dist/polished.es.js"),
				j = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				x = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				y = s.n(x),
				C = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				v = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/isUrl/index.ts"),
				S = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				k = s("./src/reddit/components/FlairList/index.tsx"),
				_ = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				I = s("./src/reddit/components/PostContainer/index.tsx"),
				N = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				P = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/reddit/components/Flair/index.tsx"),
				T = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				R = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				L = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = s("./src/reddit/controls/InternalLink/index.tsx"),
				M = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				B = s("./src/reddit/controls/ScrollerTooltipPortal/index.tsx"),
				A = s("./src/reddit/hooks/useClickSourceData.ts"),
				D = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				U = s("./src/reddit/hooks/useTheme.ts"),
				V = s("./src/reddit/icons/fonts/index.tsx"),
				G = s("./src/reddit/selectors/experiments/search/searchSubDiscovery.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				K = s("./src/reddit/components/AuthorLink/index.tsx"),
				q = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				z = s("./src/reddit/components/HumanDate/HumanDateTime.tsx"),
				Q = s("./src/reddit/components/HumanDate/TimeAgo.tsx"),
				Y = s("./src/reddit/components/PostTopMeta/index.tsx"),
				J = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				X = s.n(J);

			function Z(e) {
				var t;
				const {
					className: s,
					clickSourceData: n,
					onClick: r,
					subredditOrProfile: o
				} = e, c = Object(i.e)(W.fb), d = null === (t = o.icon) || void 0 === t ? void 0 : t.url, l = null == o ? void 0 : o.color;
				let m;
				return m = d ? a.a.createElement("img", {
					alt: P.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: s,
					style: {
						backgroundColor: l
					},
					role: "presentation",
					src: d
				}) : a.a.createElement(V.a, {
					name: "community",
					isFilled: !c,
					className: Object(v.a)(X.a.defaultCommunityIcon, s, c && X.a.mNightmode)
				}), a.a.createElement(F.default, {
					className: X.a.contents,
					"data-testid": H.a,
					onClick: r,
					to: {
						pathname: o.url,
						state: n
					}
				}, m)
			}

			function $(e) {
				const {
					post: t,
					onClickPostAuthor: s
				} = e, n = Object(D.a)(Y.e), r = t.crosspostRootId ? P.fbt._("Crossposted by", null, {
					hk: "1r1JSX"
				}) : P.fbt._("Posted by", null, {
					hk: "3mow5F"
				});
				return a.a.createElement("div", {
					className: X.a.metaContainer
				}, t.crosspostRootId && a.a.createElement(V.a, {
					name: "crosspost",
					className: Object(v.a)(X.a.crosspostIcon, X.a.metaSpacer)
				}), a.a.createElement("span", {
					className: X.a.metaSpacer
				}, r), a.a.createElement(q.b, {
					postOrComment: t
				}, a.a.createElement(K.a, {
					author: t.author,
					className: X.a.metaSpacer,
					isAuthorDeleted: t.author === d.H,
					isUnstyled: !0,
					linkProps: {
						"data-click-id": C.a.USER,
						"data-testid": Y.b
					},
					onClick: s
				}, `u/${t.author}`)), t.authorFlair && a.a.createElement("div", {
					className: X.a.flairContainer
				}, a.a.createElement(w.c, {
					flair: t.authorFlair,
					forceSmallEmojis: !0
				})), !t.isSponsored && a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: X.a.timestamp,
					"data-testid": Y.c,
					"data-click-id": C.a.TIMESTAMP,
					onMouseEnter: n.show,
					onMouseLeave: n.hide,
					ref: n.target.ref
				}, a.a.createElement(Q.a, {
					seconds: t.createdAt / d.Yb
				})), a.a.createElement(B.a, null, a.a.createElement(R.a, {
					arrowProps: n.arrowProps,
					popperProps: n.popperProps,
					visible: n.visible
				}, a.a.createElement(z.a, {
					seconds: t.createdAt / d.Yb
				})))))
			}

			function ee(e) {
				const {
					className: t,
					isOptimizedSerp: s,
					onClickPostAuthor: n,
					onClickPostCommunity: r,
					post: o,
					subredditOrProfile: c
				} = e, d = Object(A.a)(), {
					isSubEnlarged: l
				} = Object(i.e)(G.a), m = Object(U.a)();
				return a.a.createElement("div", {
					className: Object(v.a)(t, X.a.metaContainer, X.a.metadataFont)
				}, !o.isSponsored && c && a.a.createElement(T.a, {
					className: Object(v.a)(X.a.hovercardContainer, X.a.hovercardContainer),
					postId: o.id,
					subredditName: c.name
				}, a.a.createElement(Z, {
					className: Object(v.a)(X.a.subredditIcon, l && X.a.enlargedSubredditIcon),
					"data-click-id": C.a.SUBREDDIT,
					clickSourceData: d,
					onClick: r,
					subredditOrProfile: c
				}), a.a.createElement(F.default, {
					className: Object(v.a)(X.a.subredditName, l && X.a.enlargedSubredditName),
					"data-testid": H.b,
					"data-click-id": C.a.SUBREDDIT,
					onClick: r,
					to: {
						pathname: c.url,
						state: d
					}
				}, c.displayText)), !o.isSponsored && !s && a.a.createElement(a.a.Fragment, null, a.a.createElement(M.b, null), a.a.createElement(L.h, {
					type: o.belongsTo.type,
					id: o.belongsTo.id
				})), a.a.createElement(M.b, null), a.a.createElement($, {
					className: X.a.postTopMeta,
					onClickPostAuthor: n,
					post: o,
					theme: m
				}))
			}
			var te = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				se = s("./src/reddit/components/SearchWarnings/index.m.less"),
				ne = s.n(se);
			const {
				fbt: re
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function oe(e) {
				let {
					className: t,
					isQuarantined: s,
					isNSFW: n,
					isSpoiler: r
				} = e;
				return s || n || r ? a.a.createElement("div", {
					className: t
				}, s ? a.a.createElement("span", {
					className: Object(v.a)(ne.a.warningText, ne.a.quarantineWarning)
				}, a.a.createElement(te.a, {
					className: Object(v.a)(ne.a.warningIcon, ne.a.quarantineIcon)
				}), re._("quarantined", null, {
					hk: "1j7soK"
				})) : null, n ? a.a.createElement("span", {
					className: Object(v.a)(ne.a.warningText, ne.a.nsfwWarning)
				}, a.a.createElement(V.a, {
					name: "nsfw_fill",
					className: Object(v.a)(ne.a.warningIcon)
				}), re._("nsfw", null, {
					hk: "2IetSA"
				})) : null, r ? a.a.createElement("span", {
					className: Object(v.a)(ne.a.warningText, ne.a.spoilerWarning)
				}, a.a.createElement(V.a, {
					name: "spoiler_fill",
					className: Object(v.a)(ne.a.warningIcon)
				}), re._("spoiler", null, {
					hk: "3SHbs3"
				})) : null) : null
			}
			var ae = s("./src/reddit/components/SEOTitle/index.tsx"),
				ie = s("./src/reddit/components/SEOTitle/constants.ts"),
				ce = s("./src/reddit/components/Thumbnail/index.tsx"),
				de = s("./src/reddit/components/TrackingHelper/index.tsx");
			const le = new m.a(250),
				me = (e, t, s) => {
					const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const r = `${e.id}-${n}`;
						let o = le.get(r);
						if (void 0 === o) {
							const i = new RegExp(`(\\b${n}\\b)`, "gi"),
								c = e.title.split(i);
							o = s(a.a.createElement(a.a.Fragment, null, a.a.Children.toArray(c.map((e, s) => s % 2 != 0 ? t(e) : e)))), le.set(r, o)
						}
						return o
					}
				};
			var ue = s("./src/reddit/contexts/PageLayer/index.tsx"),
				pe = s("./src/reddit/controls/OutboundLink/index.tsx"),
				be = s("./src/reddit/helpers/clickSourceData/index.ts"),
				he = s("./src/reddit/helpers/overlay/index.ts"),
				ge = s("./src/reddit/helpers/path/index.ts"),
				Oe = s("./src/reddit/helpers/trackers/searchResults.ts"),
				fe = s("./src/reddit/hooks/usePageLayer.ts"),
				je = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				xe = s("./src/reddit/selectors/searchResults.ts"),
				ye = s("./src/telemetry/models/Outbound.ts"),
				Ce = s("./src/reddit/components/SearchPost/index.m.less"),
				ve = s.n(Ce);

			function Ee() {
				return (Ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Se = "post-title";

			function ke(e) {
				var t;
				const {
					isCommentsPage: s,
					post: n,
					searchQuery: r
				} = e, i = s ? ie.a.PostComments : ie.a.PostItem, c = Object(A.a)(), d = Object(S.a)(n.permalink, void 0, c), l = Object(U.a)(), m = Object(o.useMemo)(() => me(r, e => a.a.createElement("span", {
					className: Object(v.a)(ve.a.syntaxHighlight)
				}, e), e => e), [r])(n);
				return a.a.createElement("div", {
					className: Object(v.a)(n.id, ve.a.postTitleColors),
					"data-adclicklocation": C.a.TITLE
				}, a.a.createElement("style", {
					dangerouslySetInnerHTML: {
						__html: `\n        .${n.id}.${ve.a.postTitleColors} {\n          --postTitle-VisitedLinkColor: ${Object(f.c)(.45,Object(je.a)({theme:l}).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(f.c)(.45,Object(je.a)({theme:l}).titleText,Object(je.a)({theme:l}).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(f.c)(.45,Object(je.a)({theme:l}).bodyText,Object(je.a)({theme:l}).body)};\n        }\n      `
					}
				}), a.a.createElement("div", {
					className: ve.a.postTitleVisibility,
					dangerouslySetInnerHTML: {
						__html: `\n            <img alt="" src="${h.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n          `
					}
				}), a.a.createElement("div", {
					className: ve.a.titleContainer
				}, a.a.createElement(j.a, {
					to: d
				}, a.a.createElement("div", {
					className: Object(v.a)(ve.a.inline, ve.a.titleTextColor, ve.a.titleMedium, ve.a.paddingRight),
					"data-testid": Se,
					style: {
						"--posttitletextcolor": Object(je.a)({
							theme: l
						}).titleText
					}
				}, a.a.createElement(ae.b, {
					type: i
				}, m))), n.flair && a.a.createElement(k.a, {
					className: ve.a.inline,
					subredditName: null === (t = n.subreddit) || void 0 === t ? void 0 : t.name,
					isFlairFilter: !0,
					flair: n.flair
				})))
			}

			function _e(e) {
				var t, s;
				const n = !e.theme.subredditContext.shouldShowNSFWContent && e.post.isNSFW,
					r = (null === (t = e.post.source) || void 0 === t ? void 0 : t.url) || "",
					o = (null === (s = e.post) || void 0 === s ? void 0 : s.mediaContentUrl) || "",
					i = a.a.createElement(ce.a, {
						alt: e.post.title,
						className: Object(v.a)(ve.a.thumbnail, n && ve.a.blurred),
						src: e.post.thumbnail.url,
						theme: e.theme,
						isOutbound: r && !e.post.isSponsored || !1
					});
				return a.a.createElement("div", {
					className: ve.a.container,
					onClick: e.makeSendClickEventFn
				}, Object(E.a)(o) && !e.post.media ? a.a.createElement(pe.b, {
					href: r || o,
					isSponsored: e.post.isSponsored,
					postId: e.post.id,
					source: e.post.source,
					sourceElement: ye.SourceElement.PostImage
				}, i) : i)
			}
			var Ie = s("./src/reddit/components/SearchPost/Placeholder.tsx"),
				Ne = s("./src/reddit/constants/elementIds.ts"),
				Pe = s("./src/reddit/helpers/trackers/screenview.ts"),
				we = s("./src/reddit/selectors/platform.ts"),
				Te = s("./src/reddit/selectors/tracking.ts"),
				Re = s("./src/telemetry/index.ts"),
				Le = s("./src/telemetry/models/Timer.ts"),
				Fe = s("./node_modules/react-router-redux/es/index.js"),
				Me = s("./src/reddit/components/Comments/Comment/index.tsx"),
				Be = s("./src/reddit/components/PostList/index.tsx"),
				Ae = s("./src/reddit/components/PostTitle/index.tsx"),
				De = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ue = s("./src/lib/getShortenedLink.ts"),
				Ve = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				Ge = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				We = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				He = s("./src/reddit/components/ModModeReports/index.tsx"),
				Ke = s("./src/reddit/components/ModModeReports/helpers.ts"),
				qe = s("./src/reddit/actions/post.ts"),
				ze = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Qe = s("./src/reddit/selectors/poll/index.ts"),
				Ye = s("./src/reddit/selectors/postFlair.ts"),
				Je = s("./src/reddit/selectors/posts.ts");
			const Xe = {
					crosspost: Je.d,
					isActive: Je.j,
					isLoggedIn: W.S,
					moderatorPermissions: ze.m,
					modModeEnabled: ue.W,
					poll: Qe.e,
					showEditFlair: Ye.a,
					flairStyleTemplate: ue.Y
				},
				Ze = () => Object(c.c)(Xe);
			var $e = s("./src/reddit/contexts/Post/index.tsx"),
				et = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				tt = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				st = s("./src/reddit/helpers/styles/mixins/index.tsx");

			function nt() {
				return (nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const rt = Object(De.a)(e => {
					const {
						className: t,
						crosspost: s,
						eventFactory: n,
						first: r,
						flairStyleTemplate: i,
						isLoggedIn: c,
						isOverlay: d,
						moderatorPermissions: l,
						modModeEnabled: m,
						onClickPost: u,
						onClickPostAuthor: p,
						onClickPostCommunity: b,
						onIgnoreReports: h,
						poll: g,
						post: O,
						redditStyle: f,
						searchQuery: j,
						showBulkActionCheckbox: x,
						subredditOrProfile: y,
						title: C
					} = e, S = f ? void 0 : i, k = s || void 0, P = Object(tt.a)(l), w = Object(We.a)(O), T = Object(Ke.c)(O), R = Object(ce.c)({
						crosspost: s,
						post: O,
						url: void 0,
						usePreview: !1
					}), F = R && Object(E.a)(R), M = !c, B = Object(o.useMemo)(() => C ? void 0 : me(j, e => a.a.createElement("span", {
						className: Object(v.a)(ve.a.syntaxHighlight)
					}, e), e => e), [C, j]), A = {
						flairStyleTemplate: S,
						isOverlay: d,
						onClickPostAuthor: p,
						onClickPostCommunity: b,
						post: O,
						shouldShowSubscribeButton: M,
						subredditOrProfile: y
					}, D = null != C ? C : a.a.createElement("div", {
						className: Object(v.a)(ve.a.paddingSide, ve.a.postItemTitleContainer)
					}, a.a.createElement("div", null, a.a.createElement(Ae.c, {
						format: B,
						hideSourceLink: !0,
						poll: g,
						post: O,
						redditStyle: !0,
						size: Ae.b.Medium,
						isOverlay: d,
						hideNSFWSpoilerFlair: !0
					}), O.source && !k && a.a.createElement(et.a, {
						className: ve.a.outboundLink,
						href: O.source.url,
						isSponsored: O.isSponsored,
						postId: O.id,
						source: O.source
					}, Object(Ue.a)(O))), F && a.a.createElement("div", {
						className: ve.a.thumbnailContainer
					}, a.a.createElement(ce.b, {
						className: ve.a.thumbnail,
						crosspost: k && O,
						isMeta: O.isMeta,
						post: k || O,
						redditStyle: f,
						templatePlaceholderImage: S && S.postPlaceholderImage
					})));
					return a.a.createElement(I.b, {
						className: Object(v.a)(ve.a.postContainer, Object(st.a)(e), r ? ve.a.mFirst : void 0, t),
						eventFactory: n,
						isOverlay: d,
						onClick: u,
						post: O,
						style: {
							...Object(st.d)(e),
							...Object(st.b)(S)
						}
					}, a.a.createElement(_.a, {
						"data-click-id": "background",
						flairStyleTemplate: S,
						redditStyle: !0
					}, a.a.createElement(Ve.a, {
						className: ve.a.eventMeta,
						post: O
					}), a.a.createElement("div", {
						className: Object(v.a)(ve.a.postContent, {
							[ve.a.showBulkActionCheckbox]: x
						}),
						"data-click-id": "body"
					}, a.a.createElement(H.c, nt({
						className: Object(v.a)(ve.a.paddingSide, ve.a.postItemMetaContainer),
						key: "PostMeta"
					}, A)), a.a.createElement(oe, {
						className: Object(v.a)(ve.a.paddingSide, ve.a.postItemWarningContainer),
						isSpoiler: O.isSpoiler,
						isNSFW: O.isNSFW,
						isQuarantined: null == y ? void 0 : y.isQuarantined
					}), D, m && P && w && a.a.createElement(Ge.a, {
						thing: O
					}), m && P && T && a.a.createElement(He.a, {
						onIgnoreReports: h,
						reportable: O
					}), a.a.createElement(N.c, {
						className: Object(v.a)(ve.a.paddingSide, ve.a.postItemFlatlistContainer),
						post: O
					}), a.a.createElement(L.d, null))))
				}),
				ot = Object($e.b)((e => t => {
					const s = Object(ue.ib)(),
						n = ((e, t) => {
							let {
								postId: s
							} = t;
							return {
								onIgnoreReports: () => e(Object(qe.eb)(s))
							}
						})(Object(i.d)(), {
							...t
						}),
						r = Object(ue.cb)(s),
						o = Object(i.e)(Ze),
						c = {
							...t,
							...o,
							...n,
							searchQuery: r
						};
					return a.a.createElement(e, c)
				})(rt));
			var at = s("./src/reddit/connectors/PostList/index.ts"),
				it = s("./src/reddit/contexts/Visibility.tsx"),
				ct = s("./src/reddit/controls/Button/index.tsx"),
				dt = s("./src/reddit/controls/Button/index.m.less"),
				lt = s.n(dt),
				mt = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				ut = s("./src/reddit/hooks/useTracking.ts"),
				pt = s("./src/reddit/selectors/comments.ts"),
				bt = s("./src/reddit/selectors/commentSelector.ts");

			function ht(e) {
				let {
					className: t,
					comment: s
				} = e;
				return a.a.createElement(N.b, {
					className: t
				}, a.a.createElement(N.d, {
					score: s.score
				}), a.a.createElement(N.a, {
					awardCountsById: s.awardCountsById
				}))
			}
			var gt = s("./src/reddit/components/SearchResultsContent/Comment/index.m.less"),
				Ot = s.n(gt);
			var ft;
			! function(e) {
				e.COMMENT = "comment", e.COMMENT_AUTHOR = "comment_author", e.COMMENT_TIMESTAMP = "comment_timestamp", e.GO_TO_COMMENT_LINK = "go_to_comment_link", e.POST = "post", e.POST_AUTHOR = "post_author", e.POST_COMMUNITY = "post_community"
			}(ft || (ft = {}));
			var jt = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				xt = s("./src/lib/truncateText/index.ts"),
				yt = s("./src/lib/prettyPrintNumber/index.ts"),
				Ct = s("./src/reddit/components/SubscribeButton/index.tsx"),
				vt = s("./src/reddit/helpers/karma.ts");
			var Et = s("./src/reddit/constants/tracking.ts"),
				St = s("./src/reddit/helpers/correlationIdTracker.ts"),
				kt = s("./src/reddit/selectors/telemetry.ts");
			var _t = s("./src/reddit/components/SubredditIcon/index.tsx"),
				It = s("./src/reddit/constants/posts.ts"),
				Nt = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Pt = s("./src/reddit/selectors/subreddit.ts"),
				wt = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				Tt = s.n(wt);
			const Rt = Object(c.c)({
					isBlockingInterstitialEnabled: Nt.b,
					isBlockingInterstitialV2Enabled: Nt.c,
					hideNSFWPref: W.H,
					subredditOrProfile: Pt.Q,
					subredditOrProfileAboutInfo: Pt.M,
					userIsSubscriber: Pt.jb
				}),
				Lt = e => {
					const {
						className: t,
						first: s,
						identifier: n,
						listingKey: r,
						searchOptions: c,
						sidebar: d
					} = e, l = Object(ue.ib)(), m = Object(ut.a)(), u = Object(A.a)(), {
						isBlockingInterstitialEnabled: p,
						isBlockingInterstitialV2Enabled: b,
						hideNSFWPref: h,
						subredditOrProfile: g,
						subredditOrProfileAboutInfo: O
					} = Object(i.e)(t => Rt(t, e)), {
						withCommunityDescription: f
					} = Object(i.e)(G.a), j = d && f, x = Object(i.d)(), y = Object(o.useCallback)(e => {
						g && n.type === It.a.PROFILE && (p || b) && (e.preventDefault(), x(Object(qe.bb)(g.url))), m(Object(Oe.q)(c, l, n, r))
					}, [m, c, l, r, n, p, b, x, g]);
					if (!g) return null;
					const C = g.displayText,
						E = O.publicDescription,
						S = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									s = Object(vt.a)(e),
									n = Object(yt.b)(s);
								return P.fbt._({
									"*": "{karma count} Karma",
									_1: "1 Karma"
								}, [P.fbt._plural(s, "karma count", n)], {
									hk: "4r0tyT"
								})
							}
							const s = t;
							return "number" == typeof s.subscribers ? P.fbt._({
								"*": "{number of subscribers} Members",
								_1: "1 Member"
							}, [P.fbt._plural(s.subscribers, "number of subscribers", Object(yt.b)(s.subscribers))], {
								hk: "vb11y"
							}) : null
						})(n.type, O),
						k = (e => {
							let {
								identifierType: t,
								subredditOrProfile: s,
								subredditOrProfileAboutInfo: n,
								onSubscribeButtonClick: r,
								subscribeEventFactory: o,
								priority: i
							} = e;
							if ("subreddit" !== t) return s.acceptFollowers ? a.a.createElement(Ct.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "profile"
								},
								onClick: r,
								priority: i,
								small: !0
							}) : null;
							return "number" == typeof n.subscribers ? a.a.createElement(Ct.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "subreddit"
								},
								onClick: r,
								priority: i,
								small: !0
							}) : null
						})({
							identifierType: n.type,
							subredditOrProfile: g,
							subredditOrProfileAboutInfo: O,
							onSubscribeButtonClick: e => {
								e.preventDefault(), e.stopPropagation()
							},
							subscribeEventFactory: e => {
								return ((e, t, s) => n => {
									const r = kt.H(n, void 0);
									return {
										source: Oe.c.SEARCH,
										action: Et.c.CLICK,
										noun: `${s}_${Oe.d[e.type]}`,
										actionInfo: Object(Oe.k)(n, void 0, r, void 0),
										correlationId: Object(St.c)(St.a.SearchResults),
										profile: "profile" === e.type ? kt.X(n, e.id) : void 0,
										search: kt.db(n, t, mt.a.SERP),
										subreddit: "subreddit" === e.type ? kt.pb(n, e.id) : void 0
									}
								})(n, c, e ? "unsubscribe" : "subscribe")
							},
							priority: ct.c.Tertiary
						});
					return a.a.createElement(F.default, {
						"data-testid": `${n.type}-link`,
						className: Object(v.a)(Tt.a.link, d && Tt.a.sidebar, s ? Tt.a.mFirst : void 0, t),
						onClick: y,
						to: {
							pathname: g.url,
							state: u
						}
					}, a.a.createElement("div", {
						className: Tt.a.container
					}, a.a.createElement(_t.b, {
						className: Object(v.a)(Tt.a.subredditIcon, j && Tt.a.sidebar),
						shouldHideNsfwIcon: h,
						subredditOrProfile: g
					}), a.a.createElement("div", {
						className: Tt.a.contentContainer
					}, a.a.createElement("div", {
						className: Object(v.a)(Tt.a.subredditInfo, d && Tt.a.sidebar)
					}, a.a.createElement("h6", {
						className: Object(v.a)(Tt.a.title, d && Tt.a.sidebar)
					}, C), a.a.createElement(oe, {
						className: Object(v.a)(Tt.a.warnings, d && Tt.a.sidebar),
						isQuarantined: null == g ? void 0 : g.isQuarantined,
						isNSFW: null == g ? void 0 : g.isNSFW
					}), S && a.a.createElement(a.a.Fragment, null, a.a.createElement("p", {
						className: Tt.a.subtitle
					}, !d && a.a.createElement(M.b, null), S))), !d && a.a.createElement("p", {
						className: Tt.a.description
					}, Object(xt.a)(E, 150, "..."))), a.a.createElement("div", {
						className: Tt.a.buttonContainer
					}, k)), j && n.type !== It.a.PROFILE && a.a.createElement("p", {
						className: Object(v.a)(Tt.a.description, d && Tt.a.sidebar)
					}, Object(xt.a)(E, 75, "...")))
				};
			var Ft = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				Mt = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				Bt = s("./src/lib/objectSelector/index.ts"),
				At = s("./src/reddit/components/Comments/Comment/TopMeta/Author.tsx"),
				Dt = s("./src/reddit/components/Comments/Comment/TopMeta/Created.tsx"),
				Ut = s("./src/reddit/components/Comments/Comment/TopMeta/Edited.tsx"),
				Vt = s("./src/reddit/components/Comments/Comment/TopMeta/Role.tsx"),
				Gt = s("./src/reddit/components/RichTextJson/index.tsx"),
				Wt = s("./src/reddit/components/UserIcon/constants.ts"),
				Ht = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				Kt = s("./src/reddit/constants/componentTestIds.ts"),
				qt = s("./src/reddit/controls/MetaData/index.tsx"),
				zt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Qt = s("./src/reddit/models/User/index.ts"),
				Yt = s("./src/reddit/components/SearchResultsContent/PdpComment/index.m.less"),
				Jt = s.n(Yt);
			var Xt = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less"),
				Zt = s.n(Xt);
			const $t = 5,
				es = Object(c.c)({
					apiError: xe.b,
					apiPending: xe.c,
					loadMore: xe.s,
					viewportDataLoaded: Te.a
				}),
				ts = Object(c.c)({
					apiError: xe.e,
					apiPending: xe.f,
					loadMore: xe.t,
					viewportDataLoaded: Te.a
				}),
				ss = Object(c.c)({
					apiError: xe.h,
					apiPending: xe.i,
					loadMore: xe.u,
					viewportDataLoaded: Te.a
				}),
				ns = Object(c.c)({
					apiError: xe.x,
					apiPending: xe.y,
					loadMore: xe.v,
					viewportDataLoaded: Te.a
				});
			var rs;
			! function(e) {
				e.Posts = "posts", e.Subreddits = "communities", e.Users = "authors", e.Comments = "comments", e.PdpComments = "pdp_comments"
			}(rs || (rs = {}));
			const os = {
				[rs.Comments]: {
					cacheName: "comment",
					Component: e => {
						let {
							identifier: t,
							listingKey: s,
							searchOptions: n
						} = e;
						const r = Object(ue.ib)(),
							o = Object(ut.a)(),
							c = Object(i.d)(),
							d = Object(i.e)(e => Object(bt.c)(e, {
								commentId: t
							})),
							l = Object(i.e)(e => Object(pt.m)(e, {
								commentId: t
							})),
							m = Object(i.e)(e => (null == d ? void 0 : d.postId) ? Object(Je.F)(e, {
								postId: null == d ? void 0 : d.postId
							}) : void 0),
							u = Object(i.e)(e => (null == d ? void 0 : d.postId) && Object(Je.E)(e, {
								postId: null == d ? void 0 : d.postId
							})),
							p = Object(i.e)(e => e.search.searchQuery),
							b = Object(A.a)();
						if (!(null == d ? void 0 : d.postId) || !u) return null;
						const h = Object(at.b)(c),
							g = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.a;
								return function() {
									o(Object(Oe.p)({
										comment: d,
										key: s,
										originElement: e,
										pageLayer: r,
										searchOptions: n,
										telemetrySource: mt.a.SERP
									})), t(...arguments)
								}
							},
							f = Object(Be.b)(d.postId, h),
							j = e => g(e);
						return a.a.createElement(ot, {
							crosspost: void 0,
							isActive: !1,
							isLoggedIn: !1,
							modModeEnabled: !1,
							moderatorPermissions: void 0,
							onClickPost: g(ft.POST, null != f ? f : O.a),
							onClickPostAuthor: j(ft.POST_AUTHOR),
							onClickPostCommunity: j(ft.POST_COMMUNITY),
							onIgnoreReports: O.a,
							postId: d.postId,
							searchQuery: p,
							showEditFlair: !1,
							title: a.a.createElement(it.a, null, a.a.createElement("div", {
								className: Ot.a.commentContainer,
								"data-testid": "search_comment_container"
							}, a.a.createElement("div", {
								className: Ot.a.postTitleContainer,
								"data-testid": "search_comment_post_title_container",
								onClick: j(ft.POST)
							}, m && a.a.createElement(Ae.c, {
								className: Ot.a.postTitle,
								hideSourceLink: !0,
								post: m,
								redditStyle: !0,
								disableFlair: !0,
								size: Ae.b.Metadata
							})), a.a.createElement("div", {
								className: Ot.a.commentContent,
								"data-testid": "search_comment",
								onClick: g(ft.COMMENT, e => {
									e.stopPropagation(), c(Object(Fe.b)(Object(S.a)(l, !0, b)))
								})
							}, a.a.createElement(Me.a, {
								clearHovered: O.a,
								commentId: t,
								commentsPageKey: "",
								flatlist: a.a.createElement(ht, {
									className: Ot.a.commentFlatlist,
									comment: d
								}),
								hasAwardGradient: !1,
								highlightTreatment: null,
								index: 0,
								isHighlighted: !1,
								isFirstInList: !0,
								isActive: !1,
								noFocus: !0,
								noSpacing: !0,
								onLineMouseOver: O.a,
								onCommentAuthorClick: e => (e.stopPropagation(), j(ft.COMMENT_AUTHOR)(e)),
								onCommentTimestampClick: e => (e.stopPropagation(), j(ft.COMMENT_TIMESTAMP)(e)),
								postId: d.postId,
								renderedInOverlay: !1,
								restrictHeight: !0,
								rtJSONRedditStyle: !0,
								scrollToAndRemeasure: O.a,
								showBlockingInterstitial: O.a,
								userIconSmall: !0,
								onClickRevealSpoilerText: () => {
									o(Object(Oe.s)(n, d, s, r))
								}
							})), a.a.createElement(ct.t, {
								kind: ct.b.InternalLink,
								priority: ct.c.PlainLink,
								className: Object(v.a)(Ot.a.goToThreadLinkButton, lt.a.PlainLinkButton),
								"data-testid": "go_to_thread_link",
								onClick: g(ft.GO_TO_COMMENT_LINK, e => {
									e.stopPropagation()
								}),
								to: Object(S.a)(u, !0, b)
							}, P.fbt._("Go to thread", null, {
								hk: "npBX6"
							}))))
						})
					},
					moreResultsTypes: [d.jc.Comments],
					Placeholder: jt.a,
					selector: ts,
					telemetryComponentName: "commentSearchResults",
					telemetryViewEvent: Mt.c
				},
				[rs.Subreddits]: {
					cacheName: "community",
					Component: Lt,
					moreResultsTypes: [d.jc.Subreddits],
					Placeholder: Ft.a,
					selector: ss,
					telemetryComponentName: "communitySearchResults",
					telemetryViewEvent: Mt.d
				},
				[rs.Users]: {
					cacheName: "author",
					Component: Lt,
					moreResultsTypes: [d.jc.Users],
					Placeholder: Ft.a,
					selector: es,
					telemetryComponentName: "authorSearchResults",
					telemetryViewEvent: Mt.d
				},
				[rs.Posts]: {
					cacheName: "post",
					Component: e => {
						var t, s;
						const {
							first: n,
							listingKey: r,
							searchOptions: o
						} = e, c = Object(i.e)(t => Object(xe.z)(t, e)), d = Object(i.e)(e => {
							if (c.crosspostRootId) return Object(xe.z)(e, {
								identifier: c.crosspostRootId
							})
						}), l = Object(i.e)(e => Object(W.lb)(e)), m = Object(fe.a)(), u = Object(i.d)(), p = Object(de.b)(), b = function(e) {
							var t;
							const s = (null === (t = e.source) || void 0 === t ? void 0 : t.url) || "",
								n = y.a.parse(s),
								r = n.path || "",
								o = r.length > 7 ? r.substring(0, 7) + "..." : r;
							return (n.hostname ? n.hostname.replace("www.", "") : "") + o
						}(c), h = Object(ue.cb)(m), g = d ? d.thumbnail.url : c.thumbnail.url, f = g && Object(E.a)(g), j = Object(U.a)(), x = function(e) {
							let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.a;
							return function() {
								p(Object(Oe.r)(c.id, o, m, e || null, r)), t(...arguments)
							}
						}, S = e => x(e), k = {
							isOptimizedSerp: !0,
							post: c,
							subredditOrProfile: c.subreddit || c.profile,
							onClickPostAuthor: e => (e.stopPropagation(), S(Oe.e.POST_AUTHOR)(e)),
							onClickPostCommunity: e => (e.stopPropagation(), S(Oe.e.POST_COMMUNITY)(e))
						};
						return a.a.createElement("div", {
							className: Object(v.a)(ve.a.postContainer, n && ve.a.mFirst),
							"data-adclicklocation": C.a.BACKGROUND,
							"data-click-id": C.a.BACKGROUND,
							"data-testid": I.a,
							id: c.id,
							onClick: x(Oe.e.POST, e => {
								e.stopPropagation(), l ? window.open(c.permalink) : u(Object(he.a)({
									pathname: Object(ge.b)(c.permalink),
									state: Object(be.b)(m)
								}))
							}),
							tabIndex: -1
						}, a.a.createElement(_.a, {
							"data-click-id": C.a.BACKGROUND,
							redditStyle: !0
						}, a.a.createElement("div", {
							className: ve.a.postContent,
							"data-click-id": C.a.BODY
						}, a.a.createElement(ee, Ee({
							className: Object(v.a)(ve.a.paddingSide, ve.a.postItemMetaContainer),
							key: "PostMeta"
						}, k)), a.a.createElement(oe, {
							className: Object(v.a)(ve.a.paddingSide, ve.a.postItemWarningContainer),
							isQuarantined: (null === (t = c.subreddit) || void 0 === t ? void 0 : t.isQuarantined) || (null === (s = c.profile) || void 0 === s ? void 0 : s.isQuarantined),
							isNSFW: c.isNSFW,
							isSpoiler: c.isSpoiler
						}), a.a.createElement("div", {
							className: Object(v.a)(ve.a.paddingSide, ve.a.postItemTitleContainer)
						}, a.a.createElement("div", {
							className: ve.a.postContent
						}, a.a.createElement(ke, {
							searchQuery: h,
							post: c
						}), c.source && !c.crosspostRootId && a.a.createElement(pe.b, {
							className: ve.a.outboundLink,
							href: c.source.url,
							isSponsored: c.isSponsored,
							postId: c.id,
							source: c.source
						}, b)), f && a.a.createElement("div", {
							className: ve.a.thumbnailContainer
						}, a.a.createElement(_e, {
							makeSendClickEventFn: e => (e.stopPropagation(), S(Oe.e.POST)(e)),
							post: c,
							theme: j
						}))), a.a.createElement(N.c, {
							className: Object(v.a)(ve.a.paddingSide, ve.a.postItemFlatlistContainer),
							post: c
						}))))
					},
					moreResultsTypes: [d.jc.Posts],
					Placeholder: Ie.a,
					selector: ns,
					telemetryComponentName: "postList",
					telemetryViewEvent: Mt.f
				},
				[rs.PdpComments]: {
					cacheName: "pdp-comment",
					Component: e => {
						let {
							identifier: t,
							first: s,
							listingKey: n,
							searchOptions: r,
							pageKey: o
						} = e;
						const c = Object(ue.ib)(),
							d = Object(ut.a)(),
							l = Object(i.d)(),
							m = Object(i.e)(e => Object(bt.c)(e, {
								commentId: t
							})),
							u = Object(i.e)(e => Object(pt.m)(e, {
								commentId: t
							})),
							p = Object(i.e)(e => Object(W.m)(e)),
							b = Object(i.e)(W.H),
							h = Object(i.e)(e => Object(we.i)(e)),
							g = Object(i.e)(e => (null == m ? void 0 : m.postId) && Object(Je.E)(e, {
								postId: null == m ? void 0 : m.postId
							})),
							f = Object(i.e)(e => Object(ue.s)(e, {
								pageLayer: c
							})),
							j = Object(A.a)();
						if (!(null == m ? void 0 : m.postId) || !g) return null;
						const x = !!p && Object(Qt.e)(p) === m.author,
							y = x ? null == p ? void 0 : p.accountIcon : m.profileImage,
							C = !x && m.profileOver18 && b ? Wt.a || Ht.a : y,
							E = Object(zt.a)(m),
							k = Object(Bt.b)(e => {
								let {
									comment: t,
									pageLayer: s
								} = e;
								return {
									renderingObjectInfo: t,
									pageLayer: s
								}
							}),
							_ = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.a;
								return function() {
									d(Object(Oe.p)({
										comment: m,
										key: n,
										originElement: e,
										pageLayer: c,
										searchOptions: r,
										telemetrySource: mt.a.PdpCommentSearch
									})), t(...arguments)
								}
							},
							I = e => _(e);
						return a.a.createElement(it.a, null, a.a.createElement("div", {
							className: Object(v.a)(Jt.a.commentContainer, Jt.a.marginContainer, Jt.a.metadataFont, s && Jt.a.first),
							"data-testid": "search_pdp_comment_container"
						}, a.a.createElement("div", {
							"data-testid": "search_pdp_comment",
							onClick: _(ft.COMMENT, e => {
								e.stopPropagation(), l(Object(Fe.b)(Object(S.a)(u, !0, j)))
							})
						}, a.a.createElement("div", {
							className: Jt.a.flex
						}, a.a.createElement("img", {
							alt: P.fbt._("User avatar", null, {
								hk: "X43nA"
							}),
							className: Object(v.a)(Jt.a.pdpUserIcon, Jt.a.iconSpacer),
							src: C
						}), a.a.createElement(At.a, {
							authorClassName: Jt.a.actionFont,
							collapsed: !1,
							comment: m,
							onClick: e => (e.stopPropagation(), I(ft.COMMENT_AUTHOR)(e)),
							renderedInOverlay: h
						}), a.a.createElement(Vt.a, {
							className: Jt.a.leftSpacer,
							comment: m,
							subredditDisplayText: (null == f ? void 0 : f.displayText) || "",
							renderContractorBadge: !0,
							renderedInOverlay: h
						}), a.a.createElement(qt.c, {
							className: Object(v.a)(Jt.a.separator, Jt.a.metadataColor)
						}), a.a.createElement(Dt.a, {
							className: Jt.a.metadataColor,
							key: "Created",
							comment: m,
							compact: !0,
							onClick: e => (e.stopPropagation(), I(ft.COMMENT_TIMESTAMP)(e)),
							permalink: u,
							renderedInOverlay: h
						}), m.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(qt.c, {
							className: Object(v.a)(Jt.a.separator, Jt.a.metadataColor)
						}), a.a.createElement(Ut.a, {
							className: Jt.a.metadataColor,
							compact: !0,
							editedAt: m.editedAt
						}))), a.a.createElement("div", {
							className: Object(v.a)(Jt.a.commentContent, Jt.a.marginTop),
							"data-testid": Kt.d
						}, a.a.createElement(Gt.b, {
							className: Jt.a.background,
							content: E,
							mediaMetadata: m.media && m.media.mediaMetadata,
							rtJsonElementProps: k({
								comment: m,
								pageLayer: c
							}),
							mediaProps: {
								alignLeft: !0,
								renderSmallMedia: !0
							}
						}), a.a.createElement(ht, {
							className: Object(v.a)(Jt.a.metadataFont, Jt.a.marginTop),
							comment: m
						})), a.a.createElement(L.b, {
							commentId: m.id
						}), a.a.createElement(L.a, {
							commentId: m.id,
							commentsPageKey: o
						}))))
					},
					moreResultsTypes: [d.jc.Comments],
					Placeholder: p.a,
					selector: ts,
					telemetryComponentName: "pdpCommentSearchResults",
					telemetryViewEvent: Mt.e
				}
			};
			const as = e => {
				const t = new m.a(250),
					s = Object(o.useRef)(),
					n = Object(o.useRef)(null),
					c = Object(ue.ib)(),
					p = Object(de.b)(),
					h = Object(i.d)(),
					{
						identifiers: g,
						listingKey: O,
						searchOptions: f,
						componentType: j,
						sidebar: x,
						originElement: y,
						pageKey: C,
						fireScreenview: v
					} = e,
					{
						cacheName: E,
						Component: S,
						moreResultsTypes: k,
						Placeholder: _,
						selector: I,
						telemetryComponentName: N,
						telemetryViewEvent: P
					} = os[j],
					{
						apiError: w,
						apiPending: T,
						loadMore: R
					} = Object(i.e)(t => I(t, e)),
					L = !!Object(i.e)(e => Object(we.i)(e)),
					F = x ? $t : g.length,
					M = x ? $t : 10,
					B = Object(l.a)(L),
					A = Object(l.a)(g.length),
					D = () => Boolean(w) || !1 === T,
					U = () => g.length > 0,
					V = !(U() || D()),
					G = () => {
						if (!v) return;
						const e = Re.c.has(O) ? Re.c.end(O) : 0;
						p(Object(Pe.t)(O, f, Le.TimerType.InApp, e, c))
					};
				Object(o.useEffect)(() => {
					if (n.current && Re.c.has(n.current)) {
						const e = Re.c.end(n.current);
						if (e < 10) return;
						Object(Re.b)(d.o.Redesign, {
							duration: e,
							type: "mount",
							component: N
						})
					}
				}), Object(o.useEffect)(() => {
					V || G()
				}, [V]), Object(o.useEffect)(() => {
					n.current && Re.c.cancel(n.current), g.length && (n.current = Re.c.start())
				}, [n, O, g.length, A]), Object(o.useEffect)(() => {
					B && !L && G()
				}, [L, B]);
				const W = e => {
						s.current = e instanceof Element ? e : void 0
					},
					H = () => {
						const e = g.slice(0, F).map((e, s) => ((e, s) => {
							let n;
							n = function(e) {
								return void 0 !== e.type
							}(e) ? e.id : e;
							const r = `${E}-search-${s}-${O}`,
								o = Object(Mt.b)(n, O, () => P(p, f, e, O, c, y));
							let i;
							if (void 0 === (i = t.get(r))) {
								const t = `${E}-search-item-[id:${n}]`;
								i = {
									estHeight: 32,
									trackOnEnteredViewport: o,
									id: n,
									render: () => a.a.createElement(S, {
										className: Zt.a.separatedCommunity,
										first: 0 === s,
										identifier: e,
										key: t,
										listingKey: O,
										searchOptions: f,
										sidebar: x,
										pageKey: C
									})
								}
							}
							return t.set(r, i), i
						})(e, s));
						return a.a.createElement(b.b, {
							getContainer: () => L ? document.getElementById(Ne.e) : null,
							key: O,
							innerRef: W,
							loadMoreToken: R && R.token ? R.token : void 0,
							onLoadMore: () => {
								h(Object(u.n)(k))
							}
						}, e)
					};
				return U() ? H() : D() ? H() : (() => {
					const e = !w;
					return a.a.createElement("div", {
						"data-testid": `${j}-list-placeholder`
					}, r()(M, t => a.a.createElement(_, {
						key: t,
						isLoading: e,
						sidebar: !1
					})))
				})()
			}
		},
		"./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "f", (function() {
				return p
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				a = s("./src/reddit/helpers/trackers/searchResults.ts"),
				i = s("./src/reddit/selectors/commentSelector.ts");
			const c = new n.a(250),
				d = (new n.a(250), (e, t, s) => {
					const n = `entered-${e}-${`last-${t}`}`;
					let r = c.get(n);
					return void 0 === r && (r = s, c.set(n, r)), r
				}),
				l = (e, t, s, n, o) => e(e => Object(a.j)({
					action: r.c.VIEW,
					state: e,
					searchOptions: t,
					pageLayer: o,
					subredditOrProfileIdentifier: s,
					key: n
				})),
				m = (e, t, s, n, c, d) => e(e => {
					const l = Object(i.c)(e, {
						commentId: s
					});
					return Object(a.i)({
						action: r.c.VIEW,
						state: e,
						searchOptions: t,
						pageLayer: c,
						comment: l,
						key: n,
						originElement: d,
						telemetrySource: o.a.SERP
					})
				}),
				u = (e, t, s, n, c, d) => e(e => {
					const l = Object(i.c)(e, {
						commentId: s
					});
					return Object(a.i)({
						action: r.c.VIEW,
						state: e,
						searchOptions: t,
						pageLayer: c,
						comment: l,
						key: n,
						originElement: d,
						telemetrySource: o.a.PdpCommentSearch
					})
				}),
				p = (e, t, s, n, o) => e(e => ({
					...Object(a.l)({
						state: e,
						searchOptions: t,
						pageLayer: o,
						postId: s,
						key: n,
						useSearchPost: !0
					}),
					action: r.c.VIEW
				}))
		},
		"./src/reddit/components/SearchResultsContent/index.m.less": function(e, t, s) {
			e.exports = {
				resultsContainer: "_1MTbwSHIISfMYM16YhZ8kN"
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/SearchResultsScreen.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/search/index.ts"),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx");

			function c(e) {
				const {
					hasResults: t,
					searchBarId: s,
					searchOptions: n,
					noResultsType: c,
					searchResultsTab: d,
					pendingSelector: l
				} = e, m = Object(o.a)(n.q || ""), u = Object(a.e)(t => l(t, e)), p = void 0 === u || u;
				return r.a.createElement(r.a.Fragment, null, t || p ? e.children : r.a.createElement(i.a, {
					searchBarId: s,
					searchOptions: n,
					query: m,
					type: c,
					tab: d
				}))
			}
		},
		"./src/reddit/components/SearchResultsNav/index.m.less": function(e, t, s) {
			e.exports = {
				searchResultsNav: "_21H_PIzpqfpibB_EcUDwpj",
				pillRow: "_3XkfKrHLCXvnVsLyBJXzzv",
				pillElement: "_1gui9gwvmz0Ta6TaySS6jf",
				nsfwToggleContainer: "_1nT46ChOZ3tgGqgs2CyMeJ",
				searchSwitcherContainer: "_10JrVcY3xBcUNO7dNh0Js2"
			}
		},
		"./src/reddit/components/SearchResultsSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "DpriHZnFiOfa0afZpg8vf",
				header: "_3n4VKjpr-iVnAmYcon-YbI",
				link: "_2tLIUcp3fYt74ZlVikNlz5",
				noResults: "YoadDFUejEmzEbJmjTvHn"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				tertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				AllRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j",
				allRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less": function(e, t, s) {
			e.exports = {
				SelectOption: "_iuAkxGWujgYETf2Xyv89",
				selectOption: "_iuAkxGWujgYETf2Xyv89",
				mIsSelected: "hxyadGitKiIMfl81IVThw"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/index.m.less": function(e, t, s) {
			e.exports = {
				caret: "OGoNN0lGfOACQsVwIa1wo",
				Wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				caretOpen: "_1ILOkGbdwmhXOmzBDCYXFT",
				filterButton: "BZDMD8yWu5imupa73nqYE",
				hasValue: "_1HyZhQLyitFqci_zC5jGCy",
				Dropdown: "_3RwR0q62tl_HktsM6eNnOn",
				dropdown: "_3RwR0q62tl_HktsM6eNnOn"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.m.less": function(e, t, s) {
			e.exports = {
				RightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				rightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				ArrowRight: "FGX7ywlMTix8BeUr5G7TE",
				arrowRight: "FGX7ywlMTix8BeUr5G7TE",
				Component: "_1fPZw9wLFaCEzhzp2Hkx18",
				component: "_1fPZw9wLFaCEzhzp2Hkx18",
				ComponentRedesign: "_26jxFFm8Z3TxPyZxoddAGy",
				componentRedesign: "_26jxFFm8Z3TxPyZxoddAGy"
			}
		},
		"./src/reddit/components/SearchSwitcher/index.m.less": function(e, t, s) {
			e.exports = {
				searchSwitcher: "_1i7CStyaaHQU2aiG0GdpSA",
				mSr: "_3-pePLWUAV_CAVhht1dfup",
				redesign: "_3Tphf4AA5J39saIlrB1SYD",
				subredditIcon: "_3swS56fqtrGcixPfTzK_Cl",
				searchSwitcherText: "-V0kqUlRHvLoNRUAUmCy9",
				arrowIcon: "N0zmIZbfRSCGk2rUOGHSS"
			}
		},
		"./src/reddit/components/SearchWarnings/index.m.less": function(e, t, s) {
			e.exports = {
				warningText: "_3qUPSbrS00ULxlso5V3tIN",
				warningIcon: "_1fMbGLM3cAHfas4PNZTps4",
				quarantineIcon: "Ap9gKlmTQdcI17NgCE4yQ",
				quarantineWarning: "_2cvv3TnzlFQHZE4upgevMn",
				nsfwWarning: "_1-dYjh5S-IQybef811XyCF",
				spoilerWarning: "_1P0ASR__enq34IxkSim2Rk"
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("container", o.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/constants/experiments.ts"),
				p = s("./src/reddit/constants/location.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/trackers/navigation.ts"),
				g = s("./src/reddit/selectors/experiments/countrySites.ts"),
				O = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				f = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				j = s("./src/reddit/selectors/meta.ts"),
				x = s("./src/redditGQL/types.ts"),
				y = s("./src/reddit/components/SidebarFooter/index.m.less"),
				C = s.n(y);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = c.a.a("Link", C.a), S = Object(a.c)({
				countryCode: j.b,
				d2xPdpSideRailRecsVariant: O.a,
				isCountrySitesEnabled: g.b,
				isD2xPdpSideRailRecsEnabled: O.b,
				isNavbarLikeMwebEnabled: f.a
			}), k = Object(o.b)(S), _ = Object(b.v)({
				isFrontpage: b.B,
				isCountrySitePage: b.z
			}), I = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return r.a.createElement("div", {
					className: C.a.GreyRereddit
				}, s, !!p.c[t] && r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/impressum"
				}, v._("Impressum", null, {
					hk: "4cKXSI"
				})), t === x.j.De && r.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, v._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, v._("help", null, {
					hk: "4lyYaD"
				})), t === x.j.De && r.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, v._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, v._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, v._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, v._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, v._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: C.a.Copyright
				}, v._("Reddit, Inc. © {year}. All rights reserved.", [v._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})))
			};
			t.a = _(k(Object(l.c)(e => {
				const t = Object(o.f)().getState(),
					s = Object(g.a)(t, Object(i.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.md.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.md.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.md.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(I, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return s.includes(t) || "en" === t ? r.a.createElement(E, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, n[t]) : null
				};
				return r.a.createElement(m.a, {
					className: C.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!p.c[e.countryCode] && r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/impressum"
				}, v._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === x.j.De && r.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, v._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, v._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === x.j.De && r.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, v._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, v._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, v._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, v._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, v._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, n("en"), n("fr"), n("it")), r.a.createElement("div", {
					className: C.a.Column
				}, n("de"), n("es"), n("pt"))), r.a.createElement("div", {
					className: C.a.Copyright
				}, v._("Reddit, Inc. © {year}. All rights reserved.", [v._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})), r.a.createElement(d.a, null))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/BackToTop/index.tsx"),
				l = s("./src/reddit/components/SidebarFooter/index.tsx"),
				m = s("./src/reddit/constants/componentSizes.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = s.n(p),
				h = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = c.g[1] + 24,
				f = m.f + 8,
				j = f + 152 + 16,
				x = j + O + 8,
				y = h.a.div("Container", b.a),
				C = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return i.a.createElement(d.a, g({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?f:8}px)`
						}
					}, n))
				}, "BackToTop", b.a),
				v = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: r,
						isSticky: o,
						shouldStickToBottom: a
					} = e;
					return i.a.createElement("div", {
						className: Object(n.a)(s, {
							[b.a.BottomStickyStyles]: a,
							[b.a.StickyStyles]: !a && o && !r,
							[b.a.StickyStylesFakeOverlay]: !a && !!r
						})
					}, t)
				};
			class E extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > x,
						shouldFooterSticky: this.windowHeight > j
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = o()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.N), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: s,
							children: n,
							className: r,
							hideFooter: o,
							pageLayer: a,
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, m = this.state.isAdSticky && !(!t && !n), u = this.state.isBottomSticky;
					return i.a.createElement(y, {
						className: r,
						innerRef: this.setWrapperRef
					}, i.a.createElement(v, {
						isFakeOverlay: s,
						isSticky: m,
						shouldStickToBottom: u
					}, t, n, c, !o && i.a.createElement(l.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && i.a.createElement(C, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const S = Object(u.v)();
			t.a = S(E)
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/helpers/correlationIdTracker.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				j = s("./src/reddit/helpers/trackers/postFlair.ts"),
				x = s("./src/reddit/models/Widgets/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				v = s.n(C);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = 129,
				k = Object(h.v)({
					filterName: e => Object(h.Z)(e)[b.j],
					url: e => Object(h.hb)(e)
				}),
				_ = Object(i.c)({
					subredditId: (e, t) => Object(y.I)(e, t.subredditName)
				}),
				I = Object(a.b)(_),
				N = l.a.div("WidgetContent", v.a),
				P = e => {
					let {
						display: t,
						isFlairFilter: s,
						onMouseDown: n,
						onClick: r,
						...a
					} = e;
					return o.a.createElement("li", {
						className: Object(c.a)(v.a.StyledFlair, t === x.g.Cloud && v.a.cloudDisplay, {
							[v.a.flairFilter]: s,
							[v.a["m-selected"]]: a.isSelected
						}),
						onClick: () => null == r ? void 0 : r(Object(f.g)(a.flair)),
						onMouseDown: n
					}, o.a.createElement(m.c, E({}, a, {
						className: v.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class w extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(j.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(j.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(j.d)())
					}, this.onClickFlair = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(O.d)(O.a.SearchResults), this.props.sendEvent(Object(j.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(f.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(f.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > S && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return o.a.createElement(g.r, {
						className: v.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? n.fbt._("See more", null, {
						hk: "2fWFes"
					}) : n.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return o.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => o.a.createElement(P, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onClick: this.onClickFlair,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? S : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: v.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return o.a.createElement("ul", null, o.a.createElement(P, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, r = this.getFlairsFromIds(n), a = e && this.getSelectedFlair(r) || void 0, i = t.order.length > n.length || s && !a;
					return o.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, o.a.createElement(N, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(r), i && this.renderButton()))
				}
			}
			t.a = k(I(Object(u.c)(w)))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				j = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const x = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(j.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(j.a)(e).widgetColors.sidebarWidgetHeaderColor,
				C = e => {
					const t = x(e);
					return Object(f.f)(t)
				},
				v = e => {
					const t = y(e);
					return Object(f.f)(t)
				};
			var E = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				S = s.n(E);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = Object(m.v)(), I = Object(o.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.o)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						r = Object(O.fb)(e);
					return n || r
				},
				nigtmode: O.fb,
				subredditId: m.o,
				topPostVariant: h.d
			}));
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = x(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = C(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = v(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: o,
						id: a,
						onClick: c,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? S.a.widgetContentOnly : S.a.widgetContent, g = !n && this.props.styles, O = g ? this.getWidgetBackgroundStyles() : {}, f = g ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, S.a.widgetBackground, {
							[S.a.redditStyle]: n,
							[S.a.clickable]: !!c,
							[S.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: c,
						style: O
					}, m && r.a.createElement("div", {
						className: Object(i.a)(S.a.widgetHeader, {
							[S.a.clickable]: !!l
						}),
						id: a,
						style: {
							...f,
							...this.props.headerStyles
						},
						onClick: l
					}, r.a.createElement("div", {
						className: Object(i.a)(S.a.widgetTitle, p)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, m)), o), r.a.createElement("div", {
						className: Object(i.a)(h, {
							[S.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(u.r, {
						className: S.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, k._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = _(I(Object(c.a)(Object(l.c)(N))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "b", (function() {
				return I
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				O = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				j = s("./src/reddit/selectors/listings.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/tracking.ts"),
				v = s("./src/reddit/selectors/user.ts");

			function E() {
				return Object(p.v)({
					currentProfileName: p.j,
					isCommentPermalink: p.x,
					isCommentsPage: p.y,
					isFrontpage: p.B,
					isProfilePostListing: p.N,
					isTopicPage: p.T,
					pageLayer: e => e
				})
			}
			const S = E(),
				k = {
					apiError: j.c,
					apiPending: j.d,
					measureScrollFPS: O.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: j.g,
					postsById: x.S,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(x.C)(e, s, n, r)
					}),
					subredditsById: y.eb,
					viewportDataLoaded: C.a,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: f.e,
					isLoggedIn: v.S
				},
				_ = Object(r.c)(k),
				I = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(d.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.y(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, r) => {
						e(d.M(t, n, r))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(d.N(t, n, r))
					},
					showModalOnScroll: () => e(d.ab()),
					surveyTriggerScrollCounted: () => e(Object(m.m)())
				}),
				N = e => Object(b.b)({
					...e
				}),
				P = (e, t, s, n) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: a
					} = n;
					return Object(h.n)(e, t, "post", r, o, a, void 0)
				},
				w = Object(n.b)(_, I, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: N,
					postClickEventFactory: P
				}));
			t.a = e => Object(u.c)(S(w(e)))
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext(() => () => {})
		},
		"./src/reddit/contexts/Visibility.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/raf/index.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				l = i.a.createContext(!1);
			class m extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || o()(this.setVisible)
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
					} = this.state, r = {
						...d,
						...t
					};
					return i.a.createElement(n.a, c({}, r, {
						onChange: this.handleIntersectionChange
					}), i.a.createElement("div", null, i.a.createElement(l.Provider, {
						value: s
					}, e)))
				}
			}

			function u() {
				return Object(a.useContext)(l)
			}
		},
		"./src/reddit/endpoints/onboarding/languageSelections.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/makeGqlRequest/index.ts");
			var r, o = s("./src/redditGQL/operations/LanguageSelections.json"),
				a = s("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			! function(e) {
				e.ALL_KEY = "all_languages_simple", e.SUGGESTED_KEY = "suggested_languages", e.TOP_KEYS = "top_languages"
			}(r || (r = {}));
			const i = (e, t) => {
					const s = {
						allKey: e,
						suggestedKey: r.SUGGESTED_KEY
					};
					return Object(n.a)(t, {
						...o,
						variables: s
					})
				},
				c = async e => {
					const t = await i(r.ALL_KEY, e());
					if (!t.ok) return null;
					const s = t.body,
						n = null == s ? void 0 : s.data;
					return n ? (e => {
						const t = {},
							s = e.identity.preferences.spokenLanguages || [];
						return e.all.map(e => {
							t[e.isoCode] = e.translatedDisplayName
						}), {
							languages: t,
							preferences: s
						}
					})(n) : null
				}, d = async (e, t, s) => {
					const n = await i(e, t());
					if (!n.ok) return null;
					const o = n.body,
						a = null == o ? void 0 : o.data;
					if (a) {
						return ((e, t, s) => {
							let n = null,
								r = [];
							const o = [],
								a = [],
								i = {},
								c = {};
							if (!e) {
								t.identity.preferences.spokenLanguages.map(e => {
									c[e] = !0
								})
							}
							for (let d = 0; d < t.suggested.length; d++) {
								const r = t.suggested[d];
								if (i[r.isoCode] = !0, s === r.isoCode) n = r;
								else {
									if (!e && c[r.isoCode]) continue; {
										const t = !!(e || !e && c[r.isoCode]);
										o.push({
											selected: t,
											...r
										})
									}
								}
							}
							for (let d = 0; d < t.all.length; d++) {
								const o = t.all[d];
								o.isoCode === s ? (n = o, a.push({
									selected: !0,
									...o
								})) : !e && c[o.isoCode] ? a.push({
									selected: !0,
									...o
								}) : i[o.isoCode] || r.push({
									selected: !(e || !c[o.isoCode]),
									...o
								})
							}
							if (r = o.concat(r), null === n) {
								const e = s.split("-").shift();
								for (let t = 0; t < r.length; t++)
									if (r[t].isoCode === e) {
										n = r[t], r.splice(t, 1);
										break
									}
							}
							return n && ((e || !e && c[n.isoCode]) && (n.selected = !0), r.unshift(n)), e || (r = a.concat(r)), {
								sortedLanguages: r
							}
						})(e === r.TOP_KEYS, a, s)
					}
					return null
				}, l = async (e, t) => {
					const s = await ((e, t) => {
						const s = {
							input: {
								spokenLanguages: t
							}
						};
						return Object(n.a)(e, {
							...a,
							variables: s
						})
					})(e(), Object.keys(t));
					if (!s.ok) return null;
					const r = s.body;
					return null == r ? void 0 : r.data
				}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/makeListingKey/index.ts"),
				r = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				i = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				c = s("./src/reddit/models/Post/index.ts");
			t.a = e => {
				let {
					getState: t,
					onFailure: s,
					onSuccess: d,
					postId: l,
					response: m
				} = e;
				if (!m.ok) return void s(m.error);
				const u = m.body,
					{
						post: p
					} = u && u.data,
					b = t(),
					h = Object(n.a)(l, null, {
						isOtherDiscussions: !0
					});
				if (p) {
					if (p.otherDiscussions && p.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = p, {
							postFlair: s,
							postIds: n,
							posts: m,
							profiles: u,
							subreddits: g
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								s = e => {
									const s = Object(o.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: n
									} = e;
									if (n && n.type === c.a.Post && n.postInfo) {
										const e = Object(o.f)(n.postInfo);
										t.posts[e.id] = e
									}
									return Object(c.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(a.a)(e.profile)) : Object(c.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(i.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(r.a)(e.subreddit))), s.id
								};
							if (e && e.edges)
								for (const {
										node: n
									} of e.edges) {
									const e = s(n);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						d({
							count: t,
							key: h,
							meta: b.meta,
							postFlair: s,
							postId: l,
							postIds: n,
							posts: m,
							profiles: u,
							subreddits: g
						})
					}
				} else d({
					count: 0,
					key: h,
					meta: b.meta,
					postFlair: {},
					postId: l,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			}
		},
		"./src/reddit/helpers/search/searchResultsTabTo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/reddit/constants/history.ts"),
				o = s("./src/reddit/helpers/history/index.ts");
			const a = "/search/",
				i = e => {
					let {
						searchType: t,
						pageLayer: s
					} = e;
					var i;
					const {
						type: c,
						...d
					} = (null == s ? void 0 : s.queryParams) || {}, l = {
						...d,
						type: t,
						sort: void 0,
						t: void 0
					};
					return {
						pathname: (null === (i = null == s ? void 0 : s.routeMatch) || void 0 === i ? void 0 : i.match.url) || a,
						search: Object(n.a)("", {
							...l
						}),
						state: {
							[r.b.SearchOriginPage]: Object(o.b)(r.b.SearchOriginPage)
						}
					}
				}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = s.n(r);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				i = e => Object(n.a)(o.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/selectors/telemetry.ts"),
				r = s("./src/telemetry/models/Event.ts");
			const o = e => {
					let {
						subredditId: t,
						postId: s
					} = e;
					return e => ({
						source: r.f.SubredditMuting,
						action: r.d.Mute,
						noun: r.e.Subreddit,
						subreddit: {
							id: t
						},
						...n.o(e),
						...s && {
							post: {
								id: s
							}
						}
					})
				},
				a = e => {
					let {
						subredditId: t,
						postId: s
					} = e;
					return e => ({
						source: r.f.SubredditMuting,
						action: r.d.Unmute,
						noun: r.e.Subreddit,
						subreddit: {
							id: t
						},
						...n.o(e),
						...s && {
							post: {
								id: s
							}
						}
					})
				}
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const i = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(a.yb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				c = (e, t) => s => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: a.K(s, e),
					subreddit: a.lb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...a.o(s)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...a.o(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: n.TOPIC,
					...a.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("expand", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), r.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/LiveChat/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				stroke: "white"
			}, e), r.a.createElement("path", {
				d: "M1.17567 6.90708L1.17579 6.9071L1.17765 6.89503C1.61505 4.05191 3.95864 1.69386 6.90278 1.17649C11.5294 0.445398 15.5469 4.48817 14.7445 9.01081L14.7433 9.01787L14.7422 9.02495C14.3037 11.8753 11.9552 14.2237 9.10488 14.6623L9.10486 14.6621L9.09283 14.6642C7.41037 14.9568 5.80338 14.5919 4.48582 13.7867L4.249 13.642L3.98282 13.7206L1.45885 14.4663L2.19817 12.0209L2.27918 11.7529L2.13322 11.5141C1.31702 10.1785 0.886321 8.57086 1.17567 6.90708Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10",
				strokeLinecap: "square"
			}), r.a.createElement("path", {
				d: "M8.00018 12.3201C10.386 12.3201 12.3202 10.3859 12.3202 8.00005C12.3202 5.61418 10.386 3.68005 8.00018 3.68005C5.61431 3.68005 3.68018 5.61418 3.68018 8.00005C3.68018 10.3859 5.61431 12.3201 8.00018 12.3201Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10"
			}), r.a.createElement("path", {
				d: "M8.00008 9.92008C9.06047 9.92008 9.92008 9.06047 9.92008 8.00008C9.92008 6.93969 9.06047 6.08008 8.00008 6.08008C6.93969 6.08008 6.08008 6.93969 6.08008 8.00008C6.08008 9.06047 6.93969 9.92008 8.00008 9.92008Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10"
			}))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/constants/colors.ts");
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), r.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), r.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? o.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("g", null, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("polygon", {
				points: "0,40 14.3,29.2 10.8,25.7"
			}), r.a.createElement("path", {
				d: "M23,27.6l10.8-10.8c2,1.1,4.5,0.8,6.2-0.9L24.1,0c-1.7,1.7-2,4.2-0.9,6.2L12.4,17c-2-1.1-4.5-0.8-6.2,0.9l15.9,15.9C23.8,32.1,24.1,29.6,23,27.6z"
			}))))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/TextPost/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/layout/page/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				bodyContainer: "eZLYleuk3b8ykGiskfpo3",
				contentContainer: "_3Up38k81YNBWQoW1ovMU88",
				content: "_2lzCpzHH0OvyFsvuESLurr",
				mainContent: "_1BJGsKulUQfhJyO19XsBph",
				withSidebar: "_3SktesklDBwXt2pEl0sHY8",
				sidebarContent: "_2iRJ8DI-3RTbsXRSDXE5ZG"
			}
		},
		"./src/reddit/pages/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA",
				searchSwitcherContainer: "_79QamRjUfUQIFHxCnTvSZ"
			}
		},
		"./src/reddit/pages/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "pageConfig", (function() {
				return Vn
			})), s.d(t, "default", (function() {
				return Gn
			}));
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/lib/makeSearchKey/index.ts"),
				m = s("./node_modules/lodash/isEqual.js"),
				u = s.n(m),
				p = s("./src/reddit/actions/searchQueryId/index.tsx"),
				b = s("./src/reddit/actions/survey/index.ts"),
				h = s("./src/reddit/components/JumpToContent/index.tsx"),
				g = s("./src/lib/classNames/index.ts"),
				O = s("./src/reddit/constants/page.ts"),
				f = s("./src/reddit/selectors/searchResults.ts"),
				j = s("./node_modules/lodash/constant.js"),
				x = s.n(j),
				y = s("./node_modules/lodash/times.js"),
				C = s.n(y),
				v = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				E = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				S = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				k = s.n(S);
			const _ = e => {
				const {
					listingKey: t,
					searchOptions: s,
					originElement: n
				} = e, r = Object(i.e)(e => Object(f.d)(e, {
					listingKey: t
				})), o = Object(i.e)(e => Object(f.t)(e, {
					listingKey: t
				})), c = Boolean(o && o.token) && r.length > 0;
				return a.a.createElement("div", {
					className: k.a.container,
					"data-testid": "comments-list"
				}, a.a.createElement(v.b, {
					identifiers: r,
					listingKey: t,
					searchOptions: s,
					componentType: v.c.Comments,
					originElement: n,
					fireScreenview: !0
				}), c && a.a.Children.toArray(C()(3, x()(a.a.createElement(E.a, {
					className: k.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var I = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx");
			const N = (e, t) => Boolean(t && t.token) && e.length > 0,
				P = e => {
					const {
						listingKey: t,
						searchOptions: s
					} = e, n = Object(i.e)(e => Object(f.g)(e, {
						listingKey: t
					})), r = Object(i.e)(e => Object(f.u)(e, {
						listingKey: t
					}));
					return a.a.createElement("div", {
						className: k.a.container,
						"data-testid": "communities-list"
					}, !s.is_multi && a.a.createElement(v.b, {
						identifiers: n,
						listingKey: t,
						searchOptions: s,
						componentType: v.c.Subreddits,
						fireScreenview: !0
					}), N(n, r) && a.a.Children.toArray(C()(3, x()(a.a.createElement(I.a, {
						className: k.a.loadMoreItem,
						isLoading: !0
					})))))
				};
			var w = s("./src/reddit/components/SearchResultsContent/index.m.less"),
				T = s.n(w),
				R = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx");
			const L = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(i.e)(e => Object(f.a)(e, {
					listingKey: t
				})), r = Object(i.e)(e => Object(f.s)(e, {
					listingKey: t
				}));
				return a.a.createElement("div", {
					className: k.a.container,
					"data-testid": "people-list"
				}, !s.is_multi && a.a.createElement(v.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: v.c.Users,
					fireScreenview: !0
				}), N(n, r) && a.a.Children.toArray(C()(3, x()(a.a.createElement(I.a, {
					className: k.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var F = s("./src/config.ts"),
				M = s("./src/lib/ads/index.ts"),
				B = s("./src/lib/intersectionObserver/index.ts"),
				A = s("./src/lib/isUrl/index.ts"),
				D = s("./src/lib/opener/index.ts"),
				U = s("./src/reddit/actions/post.ts"),
				V = s("./src/reddit/components/BlankPost/index.tsx"),
				G = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				W = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				H = s("./src/reddit/components/Media/index.tsx"),
				K = s("./src/reddit/components/PostContainer/index.tsx"),
				q = s("./src/reddit/components/Thumbnail/index.tsx"),
				z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = s("./src/reddit/constants/adEvents.ts"),
				Y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				J = s("./src/reddit/contexts/Post/index.tsx"),
				X = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				Z = s("./src/reddit/helpers/clickSourceData/index.ts"),
				$ = s("./src/reddit/helpers/overlay/index.ts"),
				ee = s("./src/reddit/helpers/path/index.ts"),
				te = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				se = s("./src/reddit/helpers/trackers/searchResults.ts"),
				ne = s("./src/reddit/models/Media/index.ts"),
				re = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				oe = s("./src/reddit/selectors/posts.ts"),
				ae = s("./src/reddit/selectors/user.ts"),
				ie = s("./node_modules/reselect/es/index.js"),
				ce = s("./src/lib/getShortenedLink.ts"),
				de = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				le = s("./src/reddit/components/PostTitle/index.tsx"),
				me = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				ue = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				pe = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				be = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				he = s("./src/reddit/components/CallToActionButton/index.tsx"),
				ge = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Oe = s("./src/reddit/hooks/useTheme.ts"),
				fe = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				je = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				xe = s.n(je);
			const {
				fbt: ye
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ce = `${F.a.assetPath}/img/link-placeholder.png`, ve = Object(ie.c)({
				autoplayPref: ae.d,
				flairStyleTemplate: Y.Y,
				showCTAExperiment: re.a
			});

			function Ee(e) {
				var t;
				const {
					postId: s,
					listingKey: n,
					searchOptions: r,
					discoveryUnit: c
				} = e, d = Object(o.useRef)(), l = Object(o.useRef)(), {
					autoplayPref: m,
					flairStyleTemplate: u,
					showCTAExperiment: p
				} = Object(i.e)(t => ve(t, e)), b = Object(i.e)(e => Object(f.z)(e, {
					identifier: s
				})), h = Object(i.e)(e => Object(oe.d)(e, {
					postId: s
				})), O = Object(i.e)(fe.b), j = Object(i.e)(fe.c), x = Object(Y.ib)(), y = Object(z.b)(), C = Object(i.d)(), v = Object(Oe.a)(), {
					post: E,
					subredditOrProfile: S
				} = Object(J.d)(s), k = Object(M.w)(E), _ = Object(o.useCallback)((e, t) => {
					C(Object(U.O)(e, t))
				}, [C]), I = !!E.source && !h;
				if (Object(o.useEffect)(() => (d.current && Object(B.a)(d.current, (e, t) => {
						l.current && (t ? l.current.focusContent() : l.current.pauseContent())
					}), Object(se.w)(n, E.id, r, x, c), () => {
						d.current && Object(B.b)(d.current), l.current && l.current.stopContent(), d.current = null, l.current = null
					}), []), !E) return null;
				const {
					media: N
				} = h || E || {}, P = (null == N ? void 0 : N.type) === ne.o.EMBED && (null == N ? void 0 : N.provider) === ne.v.Twitter, w = (null == N ? void 0 : N.type) === ne.o.VIDEO || (null == N ? void 0 : N.type) === ne.o.GIFVIDEO;

				function T(e) {
					e.stopPropagation(), e.preventDefault(), E.isSponsored ? (C(Object(U.y)(E, Q.a.Click)), E.source ? E.source.outboundUrl ? Object(D.e)(E.source.outboundUrl, D.d.BLANK) : Object(D.e)(E.source.url, D.d.BLANK) : Object(D.e)(E.permalink, D.d.BLANK)) : C(O || j ? Object(U.Z)(Object(ee.b)(E.permalink), E.id) : Object($.a)({
						pathname: Object(ee.b)(E.permalink),
						state: Object(Z.b)(x)
					}))
				}

				function R(e) {
					E.isSponsored && w || T(e), E.isSponsored && function(e) {
						w || (e.stopPropagation(), e.preventDefault()), y(Object(se.y)(E.id, r, c, n, x))
					}(e)
				}
				return E.isBlank ? a.a.createElement(V.BlankPost, {
					onPostViewable: _,
					post: E,
					postId: E.id
				}) : a.a.createElement(J.a, {
					postId: s
				}, a.a.createElement(K.b, {
					className: xe.a.postContainer,
					eventFactory: function(e, t) {
						var s;
						let o = null,
							a = te.r;
						return E.isSponsored || (a = te.t, o = null !== (s = se.E[t]) && void 0 !== s ? s : se.e.POST), a(r, x, o, n, c)(e)
					},
					onClick: T,
					post: E,
					"data-click-id": "hero_unit",
					style: {
						...Object(ge.d)({
							theme: v,
							flairStyleTemplate: u,
							redditStyle: !1
						}),
						...Object(ge.b)(u)
					}
				}, a.a.createElement(de.a, {
					"data-click-id": "background"
				}, a.a.createElement(G.a, {
					className: xe.a.eventMeta,
					post: E
				}), a.a.createElement("div", {
					className: Object(g.a)(xe.a.postContent, {}),
					"data-click-id": "body"
				}, a.a.createElement(ue.c, {
					className: xe.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: E,
					subredditOrProfile: S
				}), a.a.createElement("div", {
					className: xe.a.postItemTitleContainer
				}, a.a.createElement(le.c, {
					hideSourceLink: !0,
					post: E,
					size: le.b.Medium,
					isOverlay: !1
				}), !k && I && a.a.createElement(pe.a, {
					className: xe.a.outboundLink,
					href: (null === (t = null == E ? void 0 : E.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: E.isSponsored,
					postId: E.id,
					source: E.source
				}, Object(ce.a)(E))), function() {
					let e = a.a.createElement(a.a.Fragment, null);
					const t = !!E.source && Object(A.a)(E.source.url) || !!E.thumbnail && Object(A.a)(E.thumbnail.url),
						s = !(null == N ? void 0 : N.type) && t,
						n = Object(g.a)(xe.a.mediaWrapper, {
							[xe.a.marginCancel]: k && !!E.source,
							[xe.a.promotedTrend]: E.isSponsored
						});
					if (s) e = a.a.createElement("div", {
						className: n
					}, a.a.createElement(q.b, {
						className: xe.a.thumbnail,
						post: E,
						templatePlaceholderImage: Ce,
						usePreview: !0
					}));
					else if (N)
						if (N.type !== ne.o.RTJSON && N.type !== ne.o.TEXT) e = a.a.createElement("div", {
							className: Object(g.a)(n, P && xe.a.twitterEmbed),
							onClickCapture: R,
							ref: e => d.current = e
						}, a.a.createElement(H.a, {
							className: xe.a.mediaContent,
							autoplayPref: m,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: E.isSponsored,
							post: h || E,
							primaryContent: !0,
							scrollerItemRef: e => l.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = a.a.createElement("div", {
								className: xe.a.mediaPlaceholder
							}), (N.type === ne.o.RTJSON && N.richtextContent || N.type === ne.o.TEXT && N.content) && Object(X.a)(E, null == v ? void 0 : v.subredditContext) && (e = a.a.createElement("div", {
								className: n,
								onClickCapture: T,
								ref: e => d.current = e
							}, a.a.createElement(H.a, {
								autoplayPref: m,
								className: xe.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: h || E,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), a.a.createElement("div", {
								className: xe.a.seeMore
							}, ye._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), k && E.source && a.a.createElement(be.a, {
					className: xe.a.adLinkWrapper,
					ctaExperimentDesign: p && "card"
				}, a.a.createElement(pe.a, {
					className: Object(g.a)(xe.a.outboundLink, {
						[xe.a.ctaExperiment]: p
					}),
					href: E.source.url.replace(F.a.redditUrl, ""),
					isSponsored: E.isSponsored,
					postId: E.id,
					source: E.source
				}, E.source.displayText), E.callToAction && a.a.createElement(he.a, {
					className: xe.a.adCallToAction,
					href: E.source.url.replace(F.a.redditUrl, ""),
					isSponsored: E.isSponsored,
					postId: E.id,
					source: E.source,
					showCTAExperiment: p
				}, E.callToAction)), !E.isSponsored && a.a.createElement(me.c, {
					className: Object(g.a)(xe.a.postItemFlatlistContainer),
					post: b || E
				}), a.a.createElement(W.d, null)))))
			}
			var Se = s("./src/lib/LRUCache/index.ts"),
				ke = s("./src/reddit/components/Scroller/Simple.tsx"),
				_e = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				Ie = s("./src/reddit/hooks/usePageLayer.ts"),
				Ne = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Pe = 376,
				we = new Se.a(1);

			function Te(e) {
				let {
					discoveryUnit: t,
					listingKey: s,
					searchOptions: n,
					postId: r,
					children: o
				} = e;
				const c = Object(i.d)(),
					d = Object(Ie.a)();
				if (!t || !r) return null;
				const l = () => {
					const e = `entered-hero-unit-${r}`;
					let o = _e.a.get(e);
					if (void 0 === o) {
						const a = t.layout.viewTypeWeb === Ne.b.PromotedTrendHero;
						o = () => {
							c((e, o) => Object(te.u)(o(), t, r, n, d, s, a))
						}, _e.a.set(e, o)
					}
					return o
				};
				return a.a.createElement(ke.b, null, (() => {
					const e = `hero-unit-search-${s}`;
					let n;
					return void 0 === (n = we.get(e)) && (n = {
						estHeight: Pe,
						trackOnEnteredViewport: l(),
						id: t.id,
						render: () => o
					}), we.set(e, n), [n]
				})())
			}
			var Re = s("./src/reddit/components/SearchPost/Placeholder.tsx"),
				Le = s("./src/reddit/models/DiscoveryUnit/index.ts");
			const {
				Hero: Fe,
				PromotedTrendHero: Me
			} = Ne.b;
			const Be = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e;
				let n = Object(i.e)(e => Object(f.w)(e, {
					listingKey: t
				}));
				const r = Object(i.e)(e => Object(f.v)(e, {
						listingKey: t
					})),
					c = Object(i.e)(e => Object(f.C)(e)),
					d = Object(i.e)(e => (e => {
						const t = e.listings.activeKey,
							s = e.searchDiscoveryUnits.models[t];
						return s || {}
					})(e));
				let l;
				c === Ne.c.Trending && (l = function(e) {
					const t = Object.values(e).find(e => e.layout.viewTypeWeb === Fe || e.layout.viewTypeWeb === Me);
					if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
				}(d));
				const m = Object(o.useMemo)(() => Object.values(d).find(e => e.name === Le.l || e.name === Le.f), [d]);
				if (l && m) {
					const e = (n = [...n]).indexOf(l);
					n.splice(e, 1)
				}
				return a.a.createElement(a.a.Fragment, null, l && m && a.a.createElement(Te, {
					key: l,
					postId: l,
					discoveryUnit: m,
					searchOptions: s,
					listingKey: t
				}, a.a.createElement(Ee, {
					key: l,
					discoveryUnit: m,
					postId: l,
					listingKey: t,
					searchOptions: s
				})), a.a.createElement("div", {
					className: k.a.container,
					"data-testid": "posts-list"
				}, a.a.createElement(v.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: v.c.Posts,
					fireScreenview: !0
				}), function(e, t) {
					return Boolean(t && t.token) && e.length > 0
				}(n, r) && a.a.Children.toArray(C()(3, x()(a.a.createElement(Re.a, {
					className: k.a.loadMoreItem,
					isLoading: !0
				}))))))
			};
			var Ae = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/SearchResultsScreen.tsx");

			function De(e) {
				const {
					listingKey: t,
					searchOptions: s,
					tab: n
				} = e, r = Object(i.e)(e => Object(f.n)(e, {
					listingKey: t
				})), o = Object(i.e)(e => Object(f.l)(e, {
					listingKey: t
				})), c = Object(i.e)(e => Object(f.m)(e, {
					listingKey: t
				})), d = Object(i.e)(e => Object(f.o)(e, {
					listingKey: t
				}));
				return a.a.createElement("div", {
					className: Object(g.a)(T.a.resultsContainer)
				}, n === O.h.Listings ? a.a.createElement(Ae.a, {
					hasResults: r,
					searchOptions: s,
					noResultsType: R.b.Communities,
					searchResultsTab: O.h.Listings,
					listingKey: t,
					pendingSelector: f.i
				}, a.a.createElement(P, {
					listingKey: t,
					searchOptions: s,
					key: O.h.Listings
				})) : n === O.h.People ? a.a.createElement(Ae.a, {
					hasResults: o,
					searchOptions: s,
					noResultsType: R.b.People,
					searchResultsTab: O.h.People,
					listingKey: t,
					pendingSelector: f.c
				}, a.a.createElement(L, {
					listingKey: t,
					searchOptions: s,
					key: O.h.People
				})) : n === O.h.Comments ? a.a.createElement(Ae.a, {
					hasResults: c,
					searchOptions: s,
					noResultsType: R.b.Comments,
					searchResultsTab: O.h.Comments,
					listingKey: t,
					pendingSelector: f.f
				}, a.a.createElement(_, {
					listingKey: t,
					searchOptions: s,
					key: O.h.Comments
				})) : a.a.createElement(Ae.a, {
					hasResults: d,
					searchOptions: s,
					noResultsType: R.b.Posts,
					searchResultsTab: O.h.Posts,
					listingKey: t,
					pendingSelector: f.y
				}, a.a.createElement(Be, {
					listingKey: t,
					searchOptions: s,
					key: O.h.Comments
				})))
			}
			var Ue = s("./src/reddit/selectors/searchFix.ts"),
				Ve = s("./src/reddit/selectors/subreddit.ts");
			const Ge = (e, t) => {
				const s = Object(Ue.a)(e, t);
				return s ? Object(Ve.C)(e, {
					subredditName: s
				}) : null
			};
			var We = s("./node_modules/fbt/lib/FbtPublic.js"),
				He = s("./node_modules/lodash/noop.js"),
				Ke = s.n(He),
				qe = s("./src/lib/constants/colors.ts"),
				ze = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Qe = s("./src/reddit/helpers/localStorage/index.ts");
			const Ye = () => {
				const [e, t] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					var e;
					const s = null !== (e = Object(Qe.F)("should-show-comment-tab-tooltip")) && void 0 !== e ? e : 2;
					t(Boolean(s)), 2 === s ? Object(Qe.Jb)("should-show-comment-tab-tooltip", 1) : 1 === s && Object(Qe.Jb)("should-show-comment-tab-tooltip", !1)
				}, []), {
					get shouldShowCommentTabTooltip() {
						return e
					},
					resetShowCommentTabTooltip() {
						e && t(!1)
					}
				}
			};
			var Je = s("./src/reddit/controls/InternalLink/index.tsx"),
				Xe = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				Ze = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				$e = s("./src/reddit/hooks/useTracking.ts"),
				et = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				tt = s("./src/lib/colors/constants.ts"),
				st = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				nt = s("./src/reddit/actions/search/safeSearch.ts"),
				rt = s("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				ot = s("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less"),
				at = s.n(ot);
			const it = "safe-search-toggle";

			function ct(e) {
				let {
					searchOptions: t
				} = e;
				const s = Object($e.a)(),
					[n, r] = a.a.useState(!0);
				Object(o.useEffect)(() => {
					var e;
					r(null), l(!!(null === (e = null == p ? void 0 : p.queryParams) || void 0 === e ? void 0 : e.include_over_18))
				}, []);
				const c = Object(Ze.a)({}),
					{
						nsfwSessionSetting: d,
						setNsfwSessionSetting: l
					} = Object(rt.b)(),
					{
						shouldShowTooltip: m,
						resetShowTooltip: u
					} = Object(rt.c)(!d);
				Object(o.useEffect)(() => {
					if (m) return window.addEventListener("click", u), () => {
						window.removeEventListener("click", u)
					}
				}, [m]);
				const p = Object(Ie.a)(),
					b = Object(i.d)();
				c.arrowProps.style = {
					...c.arrowProps.style,
					borderBottom: `3px solid ${qe.a.alien600}`
				}, c.popperProps.style = {
					...c.popperProps.style,
					backgroundColor: qe.a.alien600,
					top: "4px",
					maxWidth: "360px",
					textAlign: "center"
				};
				const h = null != n ? n : !d;
				return a.a.createElement("div", {
					className: Object(g.a)(at.a.searchNSFWToggle),
					"data-testid": it,
					onMouseEnter: c.show,
					onMouseLeave: c.hide
				}, a.a.createElement("label", {
					htmlFor: it,
					className: Object(g.a)(at.a.searchNSFWToggleLabel)
				}, We.fbt._("Safe Search", null, {
					hk: "x1C2Y"
				})), a.a.createElement(st.a, {
					activeColorOverride: tt.a,
					id: it,
					onToggle: function() {
						s(Object(se.h)(!h, t, p));
						const e = !d;
						l(e), b(Object(nt.a)(e, p))
					},
					on: h,
					redditStyle: !0,
					ref: c.target.ref
				}), a.a.createElement(ze.a, {
					visible: m || c.visible,
					arrowProps: c.arrowProps,
					popperProps: c.popperProps
				}, h ? We.fbt._("You won’t see adult or Not Safe for Work (NSFW) search results unless you turn Safe Search off", null, {
					hk: "tefl0"
				}) : We.fbt._("You’ll see adult and Not Safe for Work (NSFW) search results unless you turn Safe Search on", null, {
					hk: "1SDOFf"
				})))
			}
			var dt = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				lt = s.n(dt);

			function mt(e) {
				let {
					activeTab: t,
					searchOptions: s,
					searchSwitcher: n
				} = e;
				const r = Object($e.a)(),
					d = Object(i.e)(ae.mb),
					m = Object(i.e)(f.C),
					u = Object(Y.ib)(),
					p = m === Ne.c.Trending,
					b = Object(Ze.a)({}),
					{
						shouldShowCommentTabTooltip: h,
						resetShowCommentTabTooltip: g
					} = Ye();
				b.arrowProps.style = {
					...b.arrowProps.style,
					borderLeft: "4px solid transparent",
					borderRight: "4px solid transparent",
					top: "-3px",
					left: "50%",
					transform: "translateX(-50%)",
					borderBottom: `3px solid ${qe.a.alien600}`
				}, b.popperProps.style = {
					...b.popperProps.style,
					backgroundColor: qe.a.alien600,
					top: "100%",
					left: "50%",
					transform: "translateX(-50%)",
					whiteSpace: "nowrap"
				}, Object(o.useEffect)(() => {
					if (h) return window.addEventListener("click", g), () => {
						window.removeEventListener("click", g)
					}
				}, [h]);
				const j = {
						condition: !0,
						active: t === O.h.Posts,
						target: se.b.Posts,
						contentType: c.jc.Posts,
						text: We.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					},
					x = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === O.h.Listings,
						target: se.b.Communities,
						contentType: c.jc.Subreddits,
						text: We.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					},
					y = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === O.h.People,
						target: se.b.People,
						contentType: c.jc.Users,
						text: We.fbt._("People", null, {
							hk: "Ttxbf"
						})
					},
					C = [j, {
						condition: !(s.source === l.a.Trending || s.source === l.a.PromotedTrend),
						active: t === O.h.Comments,
						target: se.b.Comments,
						contentType: c.jc.Comments,
						text: We.fbt._("Comments", null, {
							hk: "z0DGA"
						}),
						showTooltip: !0
					}, x, y],
					v = d && !p && "1" !== s.sr_nsfw;
				return a.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: lt.a.searchResultsNav
				}, a.a.createElement("div", {
					className: lt.a.pillRow,
					role: "tablist"
				}, C.filter(e => e.condition).map(e => {
					const {
						active: t,
						target: n,
						text: o,
						contentType: i
					} = e;
					return a.a.createElement(Je.default, {
						key: n,
						"data-testid": n,
						to: Object(Xe.b)({
							searchType: i,
							pageLayer: u
						}),
						"aria-selected": t,
						role: "tab",
						className: lt.a.pillElement,
						onClick: () => (e => {
							e.active || r(Object(se.m)(e.target, s))
						})(e)
					}, a.a.createElement(ze.a, {
						visible: Boolean(e.showTooltip) && h,
						arrowProps: b.arrowProps,
						popperProps: b.popperProps
					}, We.fbt._("Now you can search comments!", null, {
						hk: "LePo6"
					})), a.a.createElement(et.a, {
						active: t,
						onClick: Ke.a,
						variant: et.b.TAB_GROUP
					}, o))
				})), n && a.a.createElement("div", {
					className: lt.a.searchSwitcherContainer
				}, n), v && a.a.createElement("div", {
					className: lt.a.nsfwToggleContainer
				}, a.a.createElement(ct, {
					searchOptions: s
				})))
			}
			var ut = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				pt = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				bt = s.n(pt),
				ht = s("./src/lib/lessComponent.tsx");
			const {
				fbt: gt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ot = ht.a.div("ButtonContainer", bt.a), ft = ht.a.div("Container", bt.a), jt = ht.a.img("BannerImg", bt.a), xt = ht.a.img("SnooImg", bt.a), yt = ht.a.div("CommunityText", bt.a);
			var Ct = () => a.a.createElement(ft, null, a.a.createElement(jt, {
					src: `${F.a.assetPath}/img/search-results-community-banner.png`
				}), a.a.createElement(xt, {
					src: `${F.a.assetPath}/img/snoo-thinking.png`
				}), a.a.createElement(yt, null, gt._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), a.a.createElement(Ot, null, a.a.createElement(ut.a, {
					className: bt.a.Button,
					eventSource: "sidebar"
				}))),
				vt = s("./src/reddit/components/IdCard/async.tsx"),
				Et = s("./src/reddit/components/SidebarContainer/index.tsx"),
				St = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				kt = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				_t = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				It = s("./src/reddit/selectors/platform.ts"),
				Nt = s("./src/reddit/selectors/widgets.ts"),
				Pt = s("./src/reddit/components/SearchResultsSidebar/index.m.less"),
				wt = s.n(Pt);
			const Tt = Object(ie.c)({
					authorIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(f.a)(e, {
							listingKey: s
						})
					},
					authorLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(f.s)(e, {
							listingKey: s
						})
					},
					communityIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(f.g)(e, {
							listingKey: s
						})
					},
					communitiesLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(f.u)(e, {
							listingKey: s
						})
					},
					currentSubreddit: It.e,
					isLoggedIn: ae.S,
					hasCommunityResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(f.n)(e, {
							listingKey: s
						})
					},
					hasAuthorResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(f.l)(e, {
							listingKey: s
						})
					},
					subredditId: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(Ve.I)(e, s)
					},
					postFlairWidgets: (e, t) => {
						let {
							listingName: s
						} = t;
						const n = Object(Ve.I)(e, s);
						return Object(Nt.g)(e, {
							subredditId: n
						})
					},
					idCardWidget: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(Nt.d)(e, {
							subredditName: s
						})
					}
				}),
				Rt = e => {
					let {
						authorIdentifiers: t,
						authorLoadMore: s,
						className: n,
						communityIdentifiers: r,
						communitiesLoadMore: o,
						hasAuthorResults: i,
						hasCommunityResults: d,
						listingKey: l,
						listingName: m,
						idCardWidget: u,
						isLoggedIn: p,
						postFlairWidgets: b,
						searchOptions: h,
						currentSubreddit: g
					} = e;
					const O = Boolean(g && m === g.name && h.restrict_sr),
						f = !!h.is_multi,
						j = r.length > v.a || !!o,
						x = t.length > v.a || !!s;
					let y;
					const C = Object(Ie.a)();
					return O ? y = a.a.createElement(a.a.Fragment, null, u && a.a.createElement(vt.a, {
						listingName: m
					}), b && b.map((e, t) => a.a.createElement(St.a, {
						key: `widgetSpacer-${t}`
					}, a.a.createElement(_t.a, {
						subredditName: m,
						widget: e
					})))) : f || (y = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: wt.a.container,
						"data-testid": "communities-list"
					}, a.a.createElement("h4", {
						className: wt.a.header
					}, We.fbt._("Communities", null, {
						hk: "3cMR66"
					})), d ? a.a.createElement(a.a.Fragment, null, !h.is_multi && a.a.createElement(v.b, {
						componentType: v.c.Subreddits,
						identifiers: r,
						listingKey: l,
						searchOptions: h,
						sidebar: !0
					}), j && a.a.createElement(Je.default, {
						to: Object(Xe.b)({
							searchType: c.jc.Subreddits,
							pageLayer: C
						})
					}, a.a.createElement("p", {
						className: wt.a.link
					}, We.fbt._("See more communities", null, {
						hk: "2VoaHj"
					})))) : a.a.createElement("p", {
						className: wt.a.noResults
					}, We.fbt._("No results", null, {
						hk: "3feoKq"
					}))), a.a.createElement("div", {
						className: wt.a.container,
						"data-testid": "authors-list"
					}, a.a.createElement("h4", {
						className: wt.a.header
					}, We.fbt._("People", null, {
						hk: "2M8TqB"
					})), i ? a.a.createElement(a.a.Fragment, null, !h.is_multi && a.a.createElement(v.b, {
						componentType: v.c.Users,
						identifiers: t,
						listingKey: l,
						searchOptions: h,
						sidebar: !0
					}), x && a.a.createElement(Je.default, {
						to: Object(Xe.b)({
							searchType: c.jc.Users,
							pageLayer: C
						})
					}, a.a.createElement("p", {
						className: wt.a.link
					}, We.fbt._("See more people", null, {
						hk: "yjtZU"
					})))) : a.a.createElement("p", {
						className: wt.a.noResults
					}, We.fbt._("No results", null, {
						hk: "3qx6oy"
					}))), p && a.a.createElement("div", {
						className: wt.a.container
					}, a.a.createElement(Ct, null)))), a.a.createElement(Et.a, {
						"data-testid": "search-results-sidebar",
						className: n
					}, y, a.a.createElement(kt.a, null))
				},
				Lt = e => {
					const t = Object(i.e)(t => Tt(t, e)),
						s = {
							...e,
							...t
						};
					return a.a.createElement(Rt, s)
				};
			var Ft = s("./src/reddit/layout/row/Inline/index.tsx"),
				Mt = s("./src/reddit/constants/parameters.ts"),
				Bt = s("./src/lib/addQueryParams/index.ts");
			const At = (e, t, s, n, r, o) => {
				const a = e && e[s],
					i = {};
				let c = Object(Bt.a)(t, {
					[s]: r
				});
				const d = [];
				for (const l of n) {
					const e = Object(Bt.a)(t, {
						[s]: l
					});
					i[e] = o[l](), d.push(e), a === l && (c = e)
				}
				return {
					optionLabels: i,
					options: d,
					value: c
				}
			};
			var Dt = s("./src/higherOrderComponents/asTooltip.tsx"),
				Ut = s("./src/reddit/controls/Dropdown/index.tsx"),
				Vt = s("./src/reddit/icons/fonts/index.tsx"),
				Gt = s("./src/reddit/actions/tooltip.ts"),
				Wt = s("./src/reddit/selectors/tooltip.ts");
			const Ht = Object(ie.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(Wt.b)(s)(e)
				}
			});
			var Kt = s("./src/reddit/components/SearchResultsSubNav/Select/index.m.less"),
				qt = s.n(Kt),
				zt = s("./node_modules/query-string/index.js"),
				Qt = s.n(zt),
				Yt = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Jt = s("./src/reddit/constants/history.ts"),
				Xt = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Zt = s("./src/reddit/helpers/history/index.ts"),
				$t = s("./node_modules/lodash/fromPairs.js"),
				es = s.n($t),
				ts = s("./src/lib/extractQueryParams/index.ts"),
				ss = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ns = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				rs = s("./src/reddit/selectors/telemetry.ts");
			const os = (e, t) => {
					const s = es()([...Object(ts.a)(e)]);
					return Object(c.Ac)(s.sort) && (t.sort = s.sort), Object(c.Bc)(s.t) && (t.t = s.t), t
				},
				as = (e, t, s, n) => () => e(e => {
					const r = rs.H(e, null);
					return {
						...Object(se.f)(e),
						source: "search",
						action: "click",
						noun: t,
						correlationId: Object(ss.c)(ss.a.SearchResults),
						actionInfo: Object(se.k)(e, null, r),
						search: rs.db(e, os(s, n), ns.a.SERP)
					}
				}),
				is = e => {
					let {
						isSelected: t,
						option: s,
						searchOptions: n,
						type: r,
						styles: o,
						displayText: i
					} = e;
					const c = Object(z.b)();
					return a.a.createElement(Yt.a, {
						key: s,
						to: {
							pathname: Qt.a.parseUrl(s).url,
							state: {
								[Jt.b.SearchOriginPage]: Object(Zt.b)(Jt.b.SearchOriginPage)
							},
							search: s.replace(Qt.a.parseUrl(s).url + "?", "")
						},
						onClick: as(c, r, s, n)
					}, a.a.createElement(Xt.b, {
						className: Object(g.a)(o.SelectOption, t && o.mIsSelected),
						displayText: i,
						isSelected: t
					}))
				};
			var cs = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less"),
				ds = s.n(cs);

			function ls() {
				return (ls = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ms = Object(Dt.a)(e => a.a.createElement(Ut.a, ls({
					className: qt.a.Component
				}, e))),
				us = e => {
					let {
						active: t,
						label: s,
						options: n,
						optionLabels: r,
						searchOptions: o,
						tooltipId: c,
						type: d,
						value: l,
						...m
					} = e;
					const {
						isOpen: u,
						onClick: p
					} = (e => {
						const {
							isOpen: t
						} = Object(i.e)(t => Ht(t, {
							tooltipId: e
						})), s = Object(i.d)();
						return {
							isOpen: t,
							onClick: t ? () => s(Object(Gt.i)()) : () => s(Object(Gt.f)({
								tooltipId: e
							}))
						}
					})(c);
					return a.a.createElement("div", {
						className: qt.a.Wrapper
					}, a.a.createElement(et.a, ls({}, m, {
						active: u,
						className: Object(g.a)(qt.a.filterButton, t && qt.a.hasValue),
						onClick: p,
						variant: et.b.TAB_GROUP
					}), s, a.a.createElement(Vt.a, {
						name: "caret_down",
						className: Object(g.a)(qt.a.caret, u && qt.a.caretOpen)
					})), a.a.createElement("div", {
						id: c
					}, a.a.createElement(ms, {
						className: qt.a.Dropdown,
						isOpen: u,
						tooltipId: c
					}, n.map((e, t) => a.a.createElement(is, {
						displayText: r[e],
						key: t,
						isSelected: e === l,
						option: e,
						searchOptions: o,
						styles: {
							mIsSelected: ds.a.mIsSelected,
							SelectOption: ds.a.SelectOption
						},
						type: d
					})))))
				},
				ps = {
					[O.h.Posts]: [c.gc.Relevance, c.gc.Hot, c.gc.Top, c.gc.New, c.gc.Comments],
					[O.h.Comments]: [c.gc.Relevance, c.gc.Top, c.gc.New]
				},
				bs = {
					[c.gc.Hot]: () => We.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[c.gc.Relevance]: () => We.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[c.gc.Top]: () => We.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[c.gc.New]: () => We.fbt._("New", null, {
						hk: "23egpt"
					}),
					[c.gc.Comments]: () => We.fbt._("Most Comments", null, {
						hk: "4k1FoM"
					})
				};

			function hs() {
				return (hs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const gs = [c.pc.HOUR, c.pc.DAY, c.pc.WEEK, c.pc.MONTH, c.pc.YEAR, c.pc.ALL],
				Os = {
					[c.pc.HOUR]: () => We.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[c.pc.DAY]: () => We.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[c.pc.WEEK]: () => We.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[c.pc.MONTH]: () => We.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[c.pc.YEAR]: () => We.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[c.pc.ALL]: () => We.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				};

			function fs() {
				return (fs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const js = {
					[O.h.Posts]: [c.fc.Sort, c.fc.Time],
					[O.h.Comments]: [c.fc.Sort]
				},
				xs = {
					[c.fc.Sort]: e => {
						let t = Object(i.e)(f.B);
						t = t !== c.Wb ? t : void 0;
						const {
							options: s,
							optionLabels: n,
							value: r
						} = At(e.queryParams, e.url, Mt.E, ps[e.tab], t || c.Wb, bs), o = {
							"data-testid": "search-results-filter-sort",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: r
						}, d = Boolean(e.queryParams[Mt.E] || t);
						return a.a.createElement(us, hs({}, o, {
							active: d,
							label: d ? n[r] : We.fbt._("Sort", null, {
								hk: "2COMme"
							}),
							type: c.fc.Sort
						}))
					},
					[c.fc.Time]: e => {
						const t = Object(i.e)(f.B),
							{
								options: s,
								optionLabels: n,
								value: r
							} = At(e.queryParams, e.url, Mt.J, gs.slice().reverse(), c.Xb, Os);
						if (!e.searchOptions || e.searchOptions.sort === c.cb.NEW || e.searchOptions.sort === c.cb.HOT || t === c.cb.NEW || t === c.cb.HOT) return null;
						const o = {
							"data-testid": "search-results-filter-time",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: r
						};
						return a.a.createElement(us, fs({}, o, {
							active: Boolean(e.queryParams[Mt.J]),
							label: e.queryParams[Mt.J] ? n[r] : We.fbt._("Time", null, {
								hk: "3hL0P3"
							}),
							type: c.fc.Filter
						}))
					}
				};
			var ys = s("./src/reddit/controls/Button/index.tsx");

			function Cs(e, t) {
				let s = "/search/",
					n = "",
					r = e && e[Mt.x] || "";
				return t ? (r = r.replace("flair:", "flair_name:"), s = `/r/${t}/search`, n = "1", Object(Bt.a)(s, {
					[Mt.x]: r,
					[Mt.y]: n
				})) : (r = r.replace("flair_name:", "flair:"), Object(Bt.a)(s, {
					[Mt.x]: r
				}))
			}
			var vs = s("./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less"),
				Es = s.n(vs);
			const {
				fbt: Ss
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ks = ht.a.wrapped(ys.r, "TertiaryButton", Es.a), _s = ht.a.wrapped(ks, "AllRedditResultsButton", Es.a), Is = e => {
				const t = Object(z.b)();
				return a.a.createElement(Yt.a, {
					to: Cs(e.queryParams)
				}, a.a.createElement(_s, {
					onClick: () => {
						t(t => ({
							...Object(se.f)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, Ss._("All reddit results", null, {
					hk: "2IBCsX"
				}), a.a.createElement(Vt.a, {
					name: "forward"
				})))
			};
			var Ns = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				Ps = s.n(Ns);
			const ws = Object(ie.c)({
					subreddit: Ve.C
				}),
				Ts = e => {
					var t;
					const {
						subreddit: s
					} = Object(i.e)(t => ws(t, e)), n = Object(Y.ib)(), r = Object(Y.Z)(n), o = Object(Y.hb)(n), c = s && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
					return a.a.createElement(Ft.a, {
						className: Object(g.a)(Ps.a.ComponentRedesign),
						"data-testid": "search-results-subnav"
					}, null === (t = js[e.tab]) || void 0 === t ? void 0 : t.map((t, s) => {
						const n = xs[t];
						return a.a.createElement(n, {
							key: s,
							queryParams: r,
							searchOptions: e.searchOptions,
							tab: e.tab,
							url: o
						})
					}), c && a.a.createElement(Is, {
						queryParams: r,
						searchOptions: e.searchOptions
					}))
				};
			var Rs = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				Ls = s.n(Rs),
				Fs = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Ms = s("./src/reddit/components/ThemeProvider/index.tsx"),
				Bs = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				As = s.n(Bs);
			const {
				fbt: Ds
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Us extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(se.C)(!!s, e))
					}
				}
				render() {
					const {
						redesign: e,
						subreddit: t,
						url: s
					} = this.props, n = {
						[As.a.mSr]: !!t
					}, {
						pathname: r,
						search: o
					} = Ls.a.parse(s), i = t ? c.hc.ToSubreddit : c.hc.ToGlobal, d = t ? a.a.createElement(a.a.Fragment, null, a.a.createElement("span", null, Ds._("Show results from", null, {
						hk: "3aVDvz"
					})), a.a.createElement(Fs.b, {
						className: As.a.subredditIcon,
						subredditOrProfile: t
					}), a.a.createElement("p", {
						className: Object(g.a)(As.a.searchSwitcherText, n)
					}, t.displayText)) : a.a.createElement(a.a.Fragment, null, Ds._("{=Show results from}{=all of Reddit}", [Ds._param("=Show results from", a.a.createElement("span", null, Ds._("Show results from", null, {
						hk: "4l8fSw"
					}))), Ds._param("=all of Reddit", a.a.createElement("p", {
						className: Object(g.a)(As.a.searchSwitcherText, n)
					}, Ds._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return a.a.createElement(Je.default, {
						className: Object(g.a)(As.a.searchSwitcher, e && As.a.redesign, n),
						"data-testid": "search-switcher-link",
						onClick: this.onClick,
						to: {
							pathname: r,
							search: o,
							state: {
								searchSwitcherType: i,
								[Jt.b.SearchOriginPage]: Object(Zt.b)(Jt.b.SearchOriginPage)
							}
						}
					}, d, a.a.createElement(Vt.a, {
						name: "forward",
						className: Object(g.a)(As.a.arrowIcon, n)
					}))
				}
			}
			var Vs = Object(z.c)(e => e.subreddit ? a.a.createElement(Ms.b, {
					subredditName: e.subreddit.name
				}, a.a.createElement(Us, e)) : a.a.createElement(Us, e)),
				Gs = s("./src/reddit/helpers/search/searchConversationId.ts"),
				Ws = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				Hs = s("./src/reddit/helpers/search/searchQueryId.ts");
			const Ks = (e, t) => e.includes(c.jc.Comments) ? O.h.Comments : t || e.includes(c.jc.Posts) ? O.h.Posts : e.includes(c.jc.Users) && !e.includes(c.jc.Subreddits) ? O.h.People : O.h.Listings;
			var qs = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				zs = s("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				Qs = s("./src/reddit/constants/elementClassNames.ts"),
				Ys = s("./src/reddit/contexts/NavbarExp.ts"),
				Js = s("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				Xs = s("./src/reddit/layout/page/Listing/index.m.less"),
				Zs = s.n(Xs),
				$s = s("./src/reddit/layout/page/SearchResults/index.m.less"),
				en = s.n($s);
			var tn = e => {
					let {
						backgroundColor: t,
						className: s,
						containerRef: n,
						content: r,
						navBar: i,
						redditStyle: c,
						sidebar: d,
						subredditId: l
					} = e;
					const m = Object(o.useContext)(Ys.a),
						u = Boolean(d);
					return a.a.createElement(zs.a, {
						subredditId: l
					}, a.a.createElement("div", {
						className: Object(g.a)(Zs.a.outerContainer, Qs.i, s, {
							[Zs.a.outerContainerExp]: m
						}),
						ref: n
					}, a.a.createElement(Js.a, {
						className: Qs.h,
						redditStyle: c,
						backgroundColor: t
					}), a.a.createElement("div", {
						className: Zs.a.innerContainer
					}, a.a.createElement("div", {
						className: en.a.bodyContainer
					}, a.a.createElement("div", {
						className: en.a.contentContainer
					}, a.a.createElement("div", {
						className: en.a.navContent
					}, i), a.a.createElement("div", {
						className: Object(g.a)(en.a.content, u && en.a.withSidebar)
					}, a.a.createElement("div", {
						className: Object(g.a)(en.a.mainContent, u && en.a.withSidebar)
					}, r), u && a.a.createElement("div", {
						className: en.a.sidebarContent
					}, d)))))))
				},
				sn = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				nn = s("./src/reddit/constants/experiments.ts"),
				rn = s("./src/reddit/helpers/chooseVariant/index.ts");
			const on = e => {
				return Object(rn.c)(e, {
					experimentEligibilitySelector: rn.a,
					experimentName: nn.J
				}) === nn.Td
			};
			var an = s("./src/reddit/selectors/searchQueryId.ts"),
				cn = s("./node_modules/lodash/isEmpty.js"),
				dn = s.n(cn),
				ln = s("./src/reddit/actions/modal.ts"),
				mn = s("./src/reddit/icons/svgs/Close/index.tsx"),
				un = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				pn = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				bn = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				hn = s("./src/reddit/icons/svgs/Sticky/index.tsx"),
				gn = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				On = s("./src/reddit/models/Live/index.ts"),
				fn = s("./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.m.less"),
				jn = s.n(fn);

			function xn(e) {
				const {
					announcement: t,
					className: s,
					onBtnClick: n,
					onClose: r
				} = e, o = {
					[On.b.Announcement]: a.a.createElement(hn.a, {
						className: jn.a.iconStyles
					}),
					[On.b.Document]: a.a.createElement(gn.a, {
						className: jn.a.iconStyles
					}),
					[On.b.Snoo]: a.a.createElement(bn.a, {
						className: jn.a.iconStyles
					}),
					[On.b.Ama]: a.a.createElement(un.a, {
						className: jn.a.iconStyles
					}),
					[On.b.Moderation]: a.a.createElement(pn.a, {
						className: jn.a.iconStyles
					})
				};
				return a.a.createElement("div", {
					"data-testid": "legacy-announcement",
					className: Object(g.a)(s, jn.a.AnnouncementContainer)
				}, a.a.createElement(Ft.a, null, o[t.icon], a.a.createElement("div", {
					className: Object(g.a)(jn.a.Title, jn.a.isAnnouncement)
				}, "function" == typeof t.title ? t.title() : t.title), a.a.createElement(mn.a, {
					className: jn.a.CloseButton,
					onClick: r
				})), a.a.createElement("div", {
					className: Object(g.a)(jn.a.Description, jn.a.isAnnouncement)
				}, "function" == typeof t.description ? t.description() : t.description), a.a.createElement(ys.m, {
					className: jn.a.Button,
					target: "_blank",
					href: t.url,
					onClick: n
				}, "function" == typeof t.callToAction ? t.callToAction() : t.callToAction))
			}
			var yn = s("./src/reddit/constants/covid.ts"),
				Cn = s("./src/reddit/constants/mFeedBanner.ts"),
				vn = s("./src/reddit/constants/modals.ts"),
				En = s("./src/reddit/constants/nsfwBanner.ts"),
				Sn = s("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				kn = s("./src/reddit/selectors/experiments/search/searchSingleVariant.ts");
			const _n = e => Object(kn.a)(e, nn.Pc),
				In = Object(ie.a)(e => Object(rn.c)(e, {
					experimentEligibilitySelector: rn.a,
					experimentName: nn.Pc,
					expEventOverride: !1
				}), e => !!e),
				Nn = e => Object(kn.a)(e, nn.Le),
				Pn = Object(ie.a)(e => Object(rn.c)(e, {
					experimentEligibilitySelector: rn.a,
					experimentName: nn.Le,
					expEventOverride: !1
				}), e => !!e);
			var wn, Tn = s("./src/reddit/selectors/userPrefs.ts"),
				Rn = s("./src/reddit/components/SearchBanner/index.m.less"),
				Ln = s.n(Rn);
			! function(e) {
				e.Covid = "covid", e.NSFW = "nsfw", e.MFeed = "mfeed"
			}(wn || (wn = {}));
			const Fn = {
				[wn.Covid]: {
					visible: !1,
					dismissed: !1,
					seen: !1,
					announcement: yn.a
				},
				[wn.NSFW]: {
					visible: !1,
					dismissed: !1,
					seen: !1,
					announcement: En.b
				},
				[wn.MFeed]: {
					visible: !1,
					dismissed: !1,
					seen: !1,
					announcement: Cn.b
				}
			};

			function Mn() {
				const e = Object($e.a)(),
					t = Object(Y.ib)(),
					s = Object(i.f)(),
					{
						nsfwSessionSetting: n
					} = Object(rt.b)(),
					c = Object(i.d)(),
					[d, m] = Object(o.useState)(null),
					u = Object(o.useRef)(Fn),
					p = Object(Y.Z)(t),
					b = Object(i.e)(Pn),
					h = Object(i.e)(In),
					g = Object(i.e)(Tn.a);
				if (Object(o.useEffect)(() => {
						Object(Y.db)(t) ? m(wn.Covid) : b && Object(Y.eb)(t) && n && g && Nn(s.getState()) ? m(wn.MFeed) : h && Object(Y.fb)(t) && !g && _n(s.getState()) ? m(wn.NSFW) : m(null)
					}, [t, p, g, n, b, h]), !d || u.current[d].dismissed) return null;

				function O(t) {
					d && e(Object(se.x)(t, d, Object(l.e)(r()(p || {}, Mt.z))))
				}
				const f = u.current[d];
				return f.seen || (O("view"), f.seen = !0), a.a.createElement(xn, {
					announcement: f.announcement,
					className: Ln.a.announcement,
					onBtnClick: function() {
						d === wn.NSFW && c(Object(ln.h)(vn.a.NSFW_SEARCH_MODAL)), O("click"), Object(Sn.e)(Z.a.SEARCH_RESULTS, s.getState(), Object(l.e)(p))
					},
					onClose: function() {
						O("dismiss"), f.dismissed = !0, m(null)
					}
				})
			}
			var Bn = s("./src/reddit/pages/SearchResults/index.m.less"),
				An = s.n(Bn);

			function Dn() {
				return (Dn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Un = 3e3,
				Vn = {
					[O.h.Listings]: {
						tab: O.h.Listings,
						sidebar: !1,
						filterNav: !1
					},
					[O.h.People]: {
						tab: O.h.People,
						sidebar: !1,
						filterNav: !1
					},
					[O.h.Posts]: {
						tab: O.h.Posts,
						sidebar: !0,
						filterNav: !0
					},
					[O.h.Comments]: {
						tab: O.h.Comments,
						sidebar: !1,
						filterNav: !1
					}
				};

			function Gn(e) {
				let {
					location: t,
					match: s
				} = e;
				const n = Object(i.d)(),
					m = Object(Y.ib)(),
					g = Object(Oe.a)(),
					f = Object(o.useRef)(!1),
					j = Object(i.e)(e => Object(Ve.C)(e, {
						subredditName: s.params.subredditName
					})),
					x = Object(i.e)(e => Ge(e, {
						pageLayer: m
					})),
					y = Object(i.e)(e => Object(Ue.c)(e, {
						pageLayer: m
					})),
					{
						searchQueryId: C
					} = Object(i.e)(e => Object(an.a)(e)),
					v = Object(i.e)(on),
					E = (Object(i.e)(e => Object(kn.a)(e, nn.Oc)), Object(Y.Z)(m)),
					S = Object(d.a)(E) || null,
					k = s.params.multiredditName,
					_ = s.params.subredditName || k || "",
					I = s.params.username,
					N = Object(l.e)(r()(E || {}, Mt.z)),
					P = Object(l.b)(_, I, N),
					w = j && N.restrict_sr,
					T = Ks(N.type, w),
					R = {
						...N,
						type: [c.jc.Posts, c.jc.Subreddits, c.jc.Users]
					},
					L = Object(l.b)(_, I, R),
					F = {
						redesign: !0,
						searchOptions: N
					},
					M = Vn[T].tab,
					B = Boolean(w) || Vn[T].sidebar && !k,
					A = Vn[T].filterNav || T === O.h.Comments && v,
					D = Object(sn.a)({
						redditStyle: !0,
						theme: g
					});
				let U;
				return C && (Hs.a.set(ns.a.SERP, P, C), n(Object(p.c)())), Object(Y.S)(m) || Object(Y.D)(m) ? U = a.a.createElement(Vs, Dn({}, F, {
					url: Cs(E)
				})) : x && y && (U = a.a.createElement(Vs, Dn({}, F, {
					subreddit: x,
					url: Cs(E, x.name)
				}))), Object(qs.c)(), Object(o.useEffect)((function() {
					return () => {
						Ws.a.clear(ns.a.SERP)
					}
				}), []), Object(o.useEffect)(() => (Gs.a.set(N.q || ""), () => {
					Gs.a.reset()
				}), []), Object(o.useEffect)(() => {
					let e = 0;
					return e = window.setTimeout(() => n(Object(b.k)()), Un), () => {
						Object(ss.b)(ss.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(o.useEffect)(() => {
					E && S && E[Mt.x] !== S[Mt.x] && (Object(ss.b)(ss.a.SearchResults), Object(ss.d)(ss.a.SearchResults))
				}, [E, S]), Object(o.useEffect)(() => {
					const e = {
							...E,
							type: void 0
						},
						t = {
							...S,
							type: void 0
						};
					!u()(e, t) && !dn()(S) && Ws.a.update(ns.a.SERP)
				}, [E, S]), Object(o.useEffect)(() => {
					if (M === O.h.Comments && !f.current) {
						let e = 0;
						return e = window.setTimeout(() => {
							f.current = !0, n(Object(b.j)())
						}, Un), () => {
							window.clearTimeout(e)
						}
					}
				}, [M]), a.a.createElement(tn, {
					backgroundColor: D.canvas,
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(h.a, null), a.a.createElement(Mn, null), a.a.createElement(De, {
						listingKey: P,
						listingName: _,
						location: t,
						searchOptions: N,
						tab: M
					})),
					navBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(mt, {
						activeTab: M,
						searchOptions: N,
						searchSwitcher: U
					}), A && a.a.createElement(Ts, {
						key: "subNav",
						searchOptions: N,
						shouldHideGlobalSearchLink: !0,
						subredditName: _,
						tab: M
					}), U && a.a.createElement("div", {
						className: An.a.searchSwitcherContainer
					}, U)),
					sidebar: B && a.a.createElement(Lt, {
						className: An.a.sidebar,
						listingKey: L,
						listingName: _ || O.c,
						searchOptions: R,
						tab: M
					})
				})
			}
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.M
				}) === n.Td
			}
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = Object(n.a)(a.S, a.R, (e, t) => e || t),
				c = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: i,
					experimentName: r.I
				}), e => e === r.S.Enabled)
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				a = s("./src/reddit/selectors/experiments/utils.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				c = s("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(i.h)(e) && Object(o.f)(e),
					experimentName: n.rc
				}), a.a),
				l = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(i.h)(e) && Object(o.f)(e),
					experimentName: n.qc
				}), a.a),
				m = Object(c.a)(d, l, (e, t) => e || t),
				u = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/search/searchSubDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./node_modules/reselect/es/index.js");
			const a = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: n.Cf
			}), e => ({
				isSubEnlarged: e === n.Uf.Variant1 || e === n.Uf.Variant3,
				withCommunityDescription: e === n.Uf.Variant2 || e === n.Uf.Variant3
			}))
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/selectors/chatPost.ts"),
				a = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const i = e => {
					const t = Object(a.a)(e);
					return Boolean(t) && !Object(r.xg)(t)
				},
				c = Object(n.a)(i, o.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/searchQueryId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.searchQueryId
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		},
		"./src/redditGQL/operations/CommentsPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"72926b3be83c"}')
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/LanguageSelections.json": function(e) {
			e.exports = JSON.parse('{"id":"40df26b7117b"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c09ff0d041c1"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"5ffbd073a26d"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"e67e99831e10"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"655eef09fadc"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"d83f2c3a36bc"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"935e6c6540f0"}')
		},
		"./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"6d0707c83164"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~SearchResults.94c5ea44dc37f6bbfeb8.js.map