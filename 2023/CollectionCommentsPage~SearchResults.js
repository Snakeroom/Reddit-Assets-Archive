// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~SearchResults.458a1258465496718eee.js
// Retrieved at 1/12/2023, 2:10:04 PM by Reddit Dataminer v1.0.0
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
				return T
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
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
				O = s("./src/reddit/selectors/user.ts");
			const g = [],
				f = (Object(u.a)((e, t) => {
					const s = f(e, t);
					if (!s) return g;
					const n = Object(h.bb)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : g
				}), (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(h.X)(e, {
						subredditId: s
					}) : null
				}),
				x = (e, t, s, n, r) => {
					const o = r.find(e => e <= t) || -1,
						i = r.find(e => e > t) || 1 / 0;
					return t !== i && t !== o && (!(o + s > t) && (!(t + s > i) && !((e, t, s) => {
						const n = s[t - 1],
							r = s[t],
							o = r && Object(b.G)(e, {
								postId: n
							}) || null,
							i = r && Object(b.G)(e, {
								postId: r
							}) || null;
						return o && o.isSponsored || i && i.isSponsored
					})(e, t, n)))
				},
				j = [3];
			Object(u.a)((e, t) => {
				let {
					existingDUPositions: s,
					listingProps: n
				} = t;
				const r = s.slice().sort();
				let o = -1;
				const i = Object(b.z)(e, {
						listingKey: n.listingKey
					}),
					a = [];
				return j.forEach(t => {
					let s = o + t;
					if (!(s >= i.length)) {
						for (; s < i.length && !x(e, s, t, i, r);) s += 1;
						s < i.length && (a.push(s), o = s)
					}
				}), a
			});
			var y = s("./src/reddit/selectors/platform.ts");
			const C = Object(r.a)(i.f),
				v = Object(r.a)(i.d),
				E = Object(r.a)(i.g),
				S = Object(r.a)(i.c),
				k = Object(r.a)(i.e),
				_ = (Object(r.a)(i.i), Object(r.a)(i.h), () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const o = t(),
						i = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(o),
						d = (e => {
							const t = Object(O.R)(e),
								s = p.d.geoSubredditRecommendationDULoggedIn(e),
								n = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && s || !t && n
						})(o),
						u = Object(O.R)(o);
					if (i || !d) return;
					e(E());
					let b = !1;
					try {
						const t = u ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(a.a)(e, {
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
										i = [n, r],
										a = Object(m.d)(i),
										c = Object(l.b)(i),
										d = Object(m.c)(n),
										u = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
											subreddits: a,
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
				T = () => async (e, t, s) => {
					var n, r;
					const i = t(),
						a = (e => e.focusedVerticals.lastLoadedEnv)(i);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(i) || null === a || "client" === a) {
						const s = null === (r = null === (n = Object(y.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(O.S)(i);
						return Object(o.i)(() => e(_()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(k({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/linkedPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/linkedPosts/constants.ts");
			const o = Object(n.a)(r.c),
				i = Object(n.a)(r.b),
				a = Object(n.a)(r.a)
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
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/OtherDiscussions.json"),
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
						O = !!p.listings.postOrder.api.error[b];
					if (h && !O) return;
					s(m({
						key: b
					}));
					const g = await ((e, t) => Object(i.a)(e, {
						...a,
						variables: t
					}))(u(), t);
					Object(c.a)({
						getState: n,
						onFailure: e => s(d(e)),
						onSuccess: e => s(l(e)),
						postId: e,
						response: g
					})
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return jt
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
				return wt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return Rt
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return Lt
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./src/lib/makeSearchKey/index.ts"),
				a = s("./src/lib/initializeClient/installReducer.ts"),
				c = s("./src/reddit/reducers/features/categories/index.ts"),
				d = (s("./node_modules/lodash/isEmpty.js"), s("./src/lib/makeActionCreator/index.ts")),
				l = (s("./src/reddit/constants/categories.tsx"), s("./src/lib/constants/index.ts")),
				m = (s("./src/lib/makeApiRequest/index.ts"), s("./src/lib/omitHeaders/index.ts"), s("./src/reddit/constants/headers.ts"), s("./src/reddit/constants/experiments.ts"));
			s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var u = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/selectors/category.ts"),
				b = s("./src/reddit/actions/category/constants.ts");
			Object(a.a)({
				features: {
					categories: c.a
				}
			});
			Object(d.a)(b.c), Object(d.a)(b.b), Object(d.a)(b.a), Object(d.a)(b.g), Object(d.a)(b.f), Object(d.a)(b.e);
			const h = Object(d.a)(b.d);
			var O = s("./src/reddit/actions/discoveryUnit.ts"),
				g = s("./src/reddit/actions/pages/subreddit.ts"),
				f = s("./src/reddit/actions/shortcuts/active.ts"),
				x = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				j = s("./src/reddit/actions/subredditSettings.ts"),
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
				T = s("./src/lib/pageTitle/index.ts"),
				w = s("./src/reddit/actions/economics/helpers/async.ts"),
				R = s("./src/reddit/actions/externalAccount.ts"),
				L = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				F = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				M = s("./src/reddit/actions/platform.ts"),
				B = s("./src/reddit/actions/post.ts"),
				A = s("./src/reddit/actions/profile/index.ts"),
				D = s("./src/reddit/actions/subreddit.ts"),
				U = s("./src/reddit/actions/subreddit/notifications.ts"),
				V = s("./src/reddit/actions/subreddit/questions.ts"),
				W = s("./src/reddit/actions/toaster.ts"),
				G = s("./src/reddit/constants/adEvents.ts"),
				H = s("./src/reddit/constants/graphql.ts"),
				K = s("./src/reddit/constants/parameters.ts"),
				q = s("./src/reddit/constants/posts.ts"),
				z = s("./src/reddit/helpers/commentList/index.ts"),
				Q = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				Y = s("./src/reddit/models/Comment/index.ts"),
				J = s("./src/reddit/models/Subreddit/index.ts"),
				X = s("./src/reddit/models/User/index.ts"),
				Z = s("./src/reddit/selectors/adsSignals.ts"),
				$ = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				ee = s("./src/reddit/selectors/experiments/postSeo.ts"),
				te = s("./node_modules/reselect/es/index.js"),
				se = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ne = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				re = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				oe = s("./src/reddit/selectors/platform.ts"),
				ie = s("./src/reddit/selectors/removedPosts.ts");
			const ae = Object(te.a)(oe.f, ne.a, ie.a, ie.c, re.a, ie.e, re.b, (e, t, s, n, r, o, i) => {
				if (!e || !t || r) return !1;
				if (n) return !0;
				const a = o || i,
					c = t.score >= 2 || t.numComments >= 2;
				return !(!s || a || c)
			});
			var ce = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				de = s("./src/reddit/selectors/moderatorPermissions.ts"),
				le = s("./src/reddit/selectors/posts.ts"),
				me = s("./src/reddit/selectors/subreddit.ts"),
				ue = s("./src/reddit/selectors/user.ts"),
				pe = s("./src/lib/makeCommentsPageKey/index.ts"),
				be = s("./src/reddit/actions/ads/index.ts"),
				he = s("./src/reddit/helpers/canonicalUrls.ts"),
				Oe = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ge = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				fe = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				xe = s("./src/lib/performanceTimings/index.tsx"),
				je = s("./src/reddit/actions/gold/achievementFlairs.ts"),
				ye = s("./src/reddit/actions/gold/customEmojis.ts"),
				Ce = s("./src/reddit/actions/gold/powerups.ts"),
				ve = s("./src/lib/makeListingKey/index.ts"),
				Ee = s("./src/reddit/actions/googleQASchema/constants.ts");
			const Se = Object(d.a)(Ee.b),
				ke = Object(d.a)(Ee.a);
			var _e = s("./src/reddit/actions/linkedPosts/index.ts"),
				Ie = s("./src/reddit/actions/otherDiscussions/index.ts"),
				Ne = s("./src/reddit/actions/subreddit/constants.ts"),
				Pe = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var Te = e => {
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
					} catch (i) {
						n(i)
					}
				},
				we = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
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
							i = {};
						if (!o || !o.linked) return;
						const a = t(),
							c = a.posts && a.posts.models,
							d = Object(we.a)(r),
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
								i[e.id] = Object(Le.a)(e)
							}
						}
						s({
							dist: o.linked.posts && o.linked.posts.dist || null,
							key: d,
							meta: a.meta,
							posts: n,
							postIds: e,
							subreddits: i
						})
					} catch (i) {
						n(i)
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
						subreddit: i
					} = e;
					try {
						if (!i) return;
						const e = i.elements || i.posts,
							n = t(),
							a = ((e, t) => {
								const {
									edges: s
								} = e, n = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: n
								}
							})(e, n.posts && n.posts.models),
							c = Object(Be.a)(a),
							d = Ae(c),
							m = e.edges.reduce((e, t) => (t.node.id && t.node.id !== o && e.push(t.node.id), e), []),
							{
								range: u,
								sort: p,
								subredditName: b
							} = r,
							h = Object(ve.a)(b, l.bb[p], {
								t: u
							});
						s({
							dist: e.dist,
							key: h,
							meta: n.meta,
							postIds: m,
							posts: d
						})
					} catch (a) {
						n(a)
					}
				},
				Ue = s("./src/reddit/models/Media/index.ts"),
				Ve = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				We = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Ge = e => {
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
							i = {};
						if (!o || !o.nsfwLinked) return;
						const a = t(),
							c = a.posts && a.posts.models,
							d = Object(We.a)(r),
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
								i[e.id] = Object(Le.a)(e)
							}
						}
						s({
							dist: o.nsfwLinked.posts && o.nsfwLinked.posts.dist || null,
							key: d,
							meta: a.meta,
							posts: n,
							postIds: e,
							subreddits: i
						})
					} catch (i) {
						n(i)
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
						includeNSFWListingBelowExperiment: i,
						includeListingBelowExperiment: a,
						includeOtherDiscussions: c,
						includePostFeed: d,
						includePostQASchemaEligibilityFlag: m,
						listingBelowExperimentVariant: u,
						postId: p,
						range: b,
						sort: h,
						subredditName: O
					} = e, g = Object(ve.a)(p, null, {
						isOtherDiscussions: !0
					}), f = s(), x = Object(le.z)(f, {
						listingKey: g
					}), j = c && (!x || 0 === x.length), y = Object(ve.a)(O, l.bb[h], {
						t: b
					}), C = Object(le.z)(f, {
						listingKey: y
					}), v = d && (a || !C || 0 === C.length), E = a, k = i, _ = Object(le.G)(f, {
						postId: p
					}), I = !!_ && !!_.media && (Object(Ue.L)(_.media) || Object(Ue.H)(_.media)) && !_.media.altText;
					if (!(j || v || E || k || I || m)) return;
					j && t(Object(Ie.d)({
						key: g
					}));
					const N = await ((e, t) => Object(S.a)(e, {
							...Pe,
							variables: t
						}))(r(), e),
						P = N.body,
						T = Object(Ve.a)(u);
					m && (N.ok ? P.data && P.data.post && t(Se({
						postId: p,
						isEligibleForQASchema: null !== (o = P.data.post.isEligibleForQASchema) && void 0 !== o && o
					})) : t(ke())), j && Object(Me.a)({
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
					}) : t(Xe(N.error))), E && !T && N.ok && P.data && Fe({
						getState: s,
						onFailure: e => t(Object(_e.a)(e)),
						onSuccess: e => t(Object(_e.b)(e)),
						postId: p,
						post: P.data.post
					}), k && N.ok && Ge({
						getState: s,
						onFailure: e => t(Ye(e)),
						onSuccess: e => t(Qe(e)),
						postId: p,
						post: P.data.post
					}), I && N.ok && P.data && Te({
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
						} = Object(Q.a)(e, r);
					return (!o || o === l.w.CONFIDENCE) && Object(se.c)(e, {
						experimentEligibilitySelector: () => Object(ue.R)(e),
						experimentName: m.p
					}) === m.r.Enabled
				};
			var et = s("./src/reddit/selectors/chatPost.ts"),
				tt = s("./src/reddit/selectors/seo/index.ts"),
				st = s("./src/reddit/actions/pages/constants.ts"),
				nt = s("./src/lib/sentry/index.ts"),
				rt = s("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				ot = s("./src/reddit/helpers/isRobotIndexableMeta.ts"),
				it = s("./src/reddit/helpers/locales.ts"),
				at = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				ct = s("./src/reddit/reducers/pages/comments/index.ts"),
				dt = s("./src/reddit/selectors/experiments/chat.ts"),
				lt = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				mt = s("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				ut = s("./src/reddit/selectors/experiments/countrySites.ts"),
				pt = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				bt = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				ht = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Ot = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				gt = s("./src/reddit/selectors/i18n/index.ts"),
				ft = s("./src/reddit/selectors/meta.ts"),
				xt = s("./src/reddit/actions/pages/search/index.ts");
			Object(a.a)({
				pages: {
					comments: ct.a
				}
			}), Object(a.a)({
				features: {
					modUserNotes: at.a
				}
			});
			const jt = 25,
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
						r = Object(le.G)(t, {
							postId: s
						}).belongsTo,
						o = Object(me.Q)(t, {
							identifier: r
						}),
						i = Object(tt.c)(t, {
							identifier: r
						}),
						a = !!Object(Ve.c)(t),
						c = Object(gt.a)(t),
						d = Object(pt.b)(t),
						l = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (l.listingBelow = i || n, l.postFeed = l.listingBelow) : c ? l.nsfwListingBelow = !0 : l.postFeed = (i || n) && (!Object(J.i)(o) && !Object(et.d)(t, {
						postId: s
					}) && !!o || !Object(oe.i)(t) && Object(ee.e)(t)), e && (l.postQASchema = Object(ee.d)(t)), d && (l.listingBelow = !0), l
				},
				It = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				Nt = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				Pt = e => async (t, s) => {
					var n, a;
					const {
						partialPostId: c,
						partialCommentId: d
					} = e.params, {
						subredditName: b
					} = e.params || "", O = c ? Object(P.y)(c) : "", g = d && Object(Y.h)(d), {
						path: j,
						queryParams: C
					} = e, v = Object(F.d)(j), {
						instanceId: E
					} = C, {
						hasSortParam: S,
						sortToUse: k
					} = Object(Q.a)(s(), O), _ = null === (a = null === (n = Object(oe.b)(s())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === a ? void 0 : a.route.chunk, I = ["context", "depth", "limit", K.g].reduce((e, t) => {
						const s = parseInt(C[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: b,
						hasSortParam: S,
						instanceId: E,
						include_categories: !0
					});
					S && (I.sort = k), I.onOtherDiscussions = v, I.comment_awardings_by_current_user = !0, t(B.q(O)), await t(wt(O, g, I, k));
					const N = s(),
						w = Object(le.G)(N, {
							postId: O
						}),
						L = Object(lt.a)(N).bucketed && Object(y.b)(e) && Object(y.c)(w);
					if (L) {
						const s = Object(i.e)(r()(e.queryParams, K.y)),
							n = Object(i.b)(O, void 0, s);
						await t(Object(xt.d)({
							key: n,
							options: s,
							subredditName: b,
							postId: O
						}))
					}
					const U = Object(ue.S)(s());
					if (w && "subreddit" === w.belongsTo.type) {
						const e = w.belongsTo.id;
						if (await Promise.all([Object(xe.i)(() => t(Object(Ce.e)(e, {
								fullData: !0,
								includeIdentity: U
							})), {
								name: "subredditPowerupsRequested",
								page: _,
								isLoggedIn: U
							}), Object(xe.i)(() => t(Object(je.c)(e)), {
								name: "subredditAchievementFlairsRequested",
								page: _,
								isLoggedIn: U
							}), Object(xe.i)(() => t(Object(ye.c)(e)), {
								name: "subredditCustomEmojisRequested",
								page: _,
								isLoggedIn: U
							})]), !Object(oe.i)(N)) {
							Object(ht.a)(N) && t(Object(V.b)(e))
						}
						Object(de.i)(N, e) && await t(Object(x.c)(O))
					}
					if (w) {
						const n = ((e, t) => {
								const s = Object(le.V)(e, {
										postId: t
									}),
									n = Object(le.G)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), O),
							r = Object(me.Q)(s(), {
								identifier: w.belongsTo
							});
						if (r && (e => m.hf.Redirect === Object(se.b)(e, {
								experimentEligibilitySelector: ae,
								experimentName: m.ef
							}))(s())) return void t(Object(o.c)(r.url));
						if (w.belongsTo.type !== q.a.SUBREDDIT || w.isSponsored) {
							if (w.belongsTo.type === q.a.PROFILE) {
								const e = Object(xe.i)(() => t(A.d(r.name)), {
									name: "getProfileInfo",
									page: _,
									isLoggedIn: U
								});
								await e
							}
						} else {
							if (!!!Object(me.W)(s(), {
									subredditId: w.belongsTo.id
								})) {
								const e = Object(xe.i)(() => t(D.o(r.name)), {
									name: "getSubredditRules",
									page: _,
									isLoggedIn: U
								});
								await e
							}
						}
						const i = _t(!1, s(), O),
							a = v;
						if (It(a, i)) {
							Object(Oe.d)(Oe.a.LinkedPosts);
							const e = Object(Oe.c)(Oe.a.LinkedPosts);
							Object(Oe.d)(Oe.a.NsfwLinkedPosts);
							const n = Object(Oe.c)(Oe.a.NsfwLinkedPosts),
								{
									adsSeenCount: o,
									totalPostsSeenCount: c,
									sessionStartTime: d
								} = Object(Z.a)(s()),
								m = {
									adContext: {
										layout: H.a.Card,
										sourcePostId: O,
										clientSignalSessionData: {
											adsSeenCount: o,
											totalPostsSeenCount: c,
											sessionStartTime: d
										}
									},
									range: l.oc.WEEK.toUpperCase(),
									sort: l.S.TOP,
									subredditName: r.name
								},
								u = {
									postId: O
								},
								p = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Ve.c)(s())
								};
							Object(pt.b)(s()) && (p.listingBelowVersion = "LINKED_POSTS_VERSION_SIDE_RAIL");
							const b = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(Ot.a)(s())
								},
								h = Nt(i);
							Object(xe.i)(() => t(Ze({
								...u,
								...m,
								...p,
								...b,
								...h,
								includeOtherDiscussions: a
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
						const c = s().posts.instances[O] ? e.queryParams.instanceId : w.postId;
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
								})), Object(u.hb)(Object(p.c)(s()))
							})(e))))
						}
					} else t(M.n({
						title: T.f()
					}));
					const {
						routePrefix: W
					} = e.params;
					L || (q.b[W] === q.a.PROFILE ? Object(he.f)(s(), t, e) : Object(he.d)(s(), t, e))
				}, Tt = ["SubredditPost", "ProfilePost", "DeletedSubredditPost"], wt = function(e, t, s, n) {
					let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
					return async (o, i, a) => {
						var c, d, m, u;
						const p = i(),
							b = Object(pe.a)(e, r ? void 0 : t, s),
							{
								subredditName: h
							} = s,
							f = !r && p.pages.comments.keyToHeadCommentId.hasOwnProperty(b),
							x = p.pages.comments.api.fullyLoaded[b],
							j = p.pages.comments.api.error[b],
							y = p.pages.comments.api.pending[b],
							S = !Object(ue.R)(p),
							k = Object(ue.m)(p),
							T = n === l.w.CHAT,
							R = !!p.platform.lastPage,
							F = T && R,
							A = Object(le.G)(p, {
								postId: e
							}),
							D = Object(dt.d)(p),
							V = r || D && (null == A ? void 0 : A.discussionType) === P.b.Chat;
						if ((y || f && !j) && !F) {
							if (f && !p.sidebarPromotedPosts.firstFetch) {
								const e = Object(oe.i)(p) ? fe.a.COMMENTS_OVERLAY : fe.a.COMMENTS;
								window.addEventListener("load", () => {
									o(Object(be.b)(e))
								})
							}
							if (!x) {
								const n = !V || t ? s : {
									...s,
									depth: 1
								};
								o(Lt(e, t, n))
							}
							return
						}
						o(O.g());
						const H = p.user.prefs.commentMode;
						o(Ct({
							key: b,
							postId: e,
							commentMode: H
						}));
						const K = {
							...s,
							...T ? {
								sort: l.w.LIVE
							} : S ? {
								sort: s.sort,
								depth: 2
							} : {
								sort: s.sort
							}
						}; {
							const t = Object(le.G)(i(), {
								postId: e
							});
							t && t.numComments && t.numComments > yt && (K.truncate = jt)
						}
						const q = null === (d = null === (c = Object(oe.b)(p)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
							Q = Object(xe.i)(() => Object(E.a)(a.apiContext(), e, t, K, Object($.a)(i()), $e(i())), {
								name: "fetchCommentsPage",
								isLoggedIn: !S,
								page: q
							}),
							Y = !S && k && Object(xe.i)(() => Object(N.d)(a.gqlContext(), Object(X.e)(k)), {
								name: "fetchProfileKarma",
								isLoggedIn: !S,
								page: q
							}) || null,
							J = Object(mt.c)(p),
							Z = Object(xe.i)(() => _(a.gqlContext(), {
								postId: e,
								includeSubredditRankings: J
							}), {
								name: "fetchCommentsPageExtra",
								isLoggedIn: !S,
								page: q
							}),
							ee = h && Object(bt.a)(p) ? Object(C.a)(a.gqlContext(), {
								subredditName: h
							}) : null;
						let te, se, ne, re, ie;
						if ([te, se, ne, re] = await Promise.all([Q, Y, Z, ee]), o(Object(M.o)(te.status)), kt(ne) && "SubredditPost" === (null === (m = ne.body.data.postInfoById) || void 0 === m ? void 0 : m.__typename)) {
							const e = ne.body.data.postInfoById.subreddit.name;
							Object(he.c)(i(), o, e)
						}
						if (te.ok) {
							try {
								te.body.posts = await Object(rt.a)(a.apiContext(), te.body.posts, p)
							} catch (ae) {
								nt.c.captureException(ae)
							}
							const t = Object.keys(te.body.posts).filter(e => !!te.body.posts[e].isMeta),
								s = te.body.posts[e];
							if (Object(he.b)(i(), o, s.belongsTo.type), t.length) {
								const e = Object(xe.i)(() => Object(v.a)(a.apiContext(), s.belongsTo.id, t), {
										name: "getGovernanceData",
										page: q,
										isLoggedIn: !S
									}),
									n = await e;
								n.ok && (ie = n.body)
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
								if (t.postInfoById && Tt.includes(t.postInfoById.__typename) && (te.body.posts[e] = {
										...te.body.posts[e],
										...t.postInfoById,
										mediaStatus: "SubredditPost" === t.postInfoById.__typename || "ProfilePost" === t.postInfoById.__typename ? null === (u = t.postInfoById.mediaStatus) || void 0 === u ? void 0 : u.status : null
									}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
									const e = t.postInfoById.subreddit.detectedLanguage;
									Object(ft.d)(p) && e && Object(ut.f)(p) && await Object(it.a)(e, o);
									const {
										id: s,
										isEligibleForContentBlocking: n,
										allowedMediaInComments: r,
										directoryRankings: i
									} = t.postInfoById.subreddit;
									o(Object(U.c)({
										subredditAboutInfo: {
											[s]: {
												isEligibleForContentBlocking: n,
												allowedMediaInComments: r,
												directoryRankings: i
											}
										}
									}))
								}
							}
							const n = Object(z.a)(te.body, e, p),
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
								governance: ie,
								shouldCollapse: n,
								...te.body
							}))
						} {
							const n = Object(le.G)(i(), {
								postId: e
							});
							n && te.body.comments && Object.keys(te.body.comments).length < n.numComments ? o(Lt(e, t, s)) : te.ok && o(Rt({
								key: b
							}));
							const r = Object(oe.i)(p) ? fe.a.COMMENTS_OVERLAY : fe.a.COMMENTS;
							o(Object(be.b)(r))
						}
						if (te.ok) {
							o(W.g(b));
							const t = Object(le.G)(i(), {
									postId: e
								}),
								s = Object.keys(te.body.comments);
							if (o(B.y(t, G.a.CommentsView)), Object(de.h)(i(), {
									subredditId: t.belongsTo.id
								}) && o(Object(L.a)({
									commentIds: s,
									postIds: [e]
								})), t && "subreddit" === t.belongsTo.type && te.body.comments) {
								const e = Object(xe.i)(() => o(Object(w.a)({
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
							h && (o(Object(g.subredditPending)({
								key: b
							})), e = await Object(ge.a)("subreddit", () => Object(I.a)(a.apiContext(), h, {})), o(Object(M.o)(e.status)), o(Object(g.handleSubredditPageApiError)(e, h))), o(Et({
								error: te.error,
								key: b,
								...e ? e.body : te.body
							}))
						}
					}
				}, Rt = Object(d.a)(st.g), Lt = (e, t, s) => async (n, r, o) => {
					var i, a;
					const c = Object(pe.a)(e, t, s),
						d = r(),
						l = Object(ue.S)(d),
						m = Object(ue.m)(d),
						u = null === (a = null === (i = Object(oe.b)(r())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						p = Object(le.G)(d, {
							postId: e
						}),
						b = Object(dt.d)(d),
						h = "CHAT" === (null == p ? void 0 : p.discussionType) && b && !t,
						O = Object(E.a)(o.apiContext(), e, t, h ? {
							...s,
							depth: 1
						} : s, Object($.a)(d), $e(d)),
						g = l && m && Object(N.d)(o.gqlContext(), Object(X.e)(m)) || null,
						f = Object(mt.c)(d),
						x = Object(xe.i)(() => _(o.gqlContext(), {
							postId: e,
							includeSubredditRankings: f
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: l,
							page: u
						}),
						[y, C, v] = await Promise.all([O, g, x]);
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
						const t = Object(z.a)(y.body, e, d);
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
							o = s && Object(le.V)(r(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && o && Object(ce.a)(d, {
							subredditId: o.id
						}) && n(Object(j.h)(o.name, o.id)), s && "subreddit" === s.belongsTo.type && y.body.comments && await n(Object(w.a)({
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
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/shortcuts/constants.ts");
			const o = Object(n.a)(r.a),
				i = Object(n.a)(r.b)
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
				return T
			})), s.d(t, "f", (function() {
				return w
			})), s.d(t, "b", (function() {
				return R
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				c = s("./src/redditGQL/operations/MutedSubreddits.json"),
				d = s("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				l = s("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const m = (e, t) => Object(i.a)(e, {
					...l,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				u = (e, t) => Object(i.a)(e, {
					...a,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var p = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/actions/subreddit/constants.ts"),
				h = s("./src/reddit/actions/subreddit/notifications.ts"),
				O = s("./src/reddit/selectors/subreddit.ts");
			const g = e => Object(o.f)({
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
				x = (e, t) => Object(o.f)({
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
			var j = s("./src/reddit/endpoints/subreddit/about.ts");
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
							gqlContext: i
						} = o;
						var a, c;
						const d = await m(i(), t);
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(f(s, _({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(g(`error-muting-${t}`))
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
							gqlContext: i
						} = o;
						var a, c;
						const d = await u(i(), t);
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(x(s, k({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(g(`error-muting-${t}`))
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
							gqlContext: i
						} = o;
						var a, c;
						const d = await m(i(), t);
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(Object(h.c)({
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
							e(g(`error-muting-${t}`))
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
							gqlContext: i
						} = o;
						var a, c;
						const d = await u(i(), t);
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(x(s, I({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(g(`error-muting-${t}`))
						}
					}
				},
				P = e => {
					let {
						subredditId: t,
						notificationLevel: s
					} = e;
					return async (e, r, a) => {
						let {
							gqlContext: c
						} = a;
						var l, m;
						const u = Object(h.a)(s),
							b = await ((e, t, s) => Object(i.a)(e, {
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
				T = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const a = await (e => Object(i.a)(e, c))(r());
					if (a.ok && a.body && a.body.data) {
						const {
							data: t
						} = a.body, s = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
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
				}, w = e => {
					let {
						subredditId: t,
						subredditName: s
					} = e;
					return async (e, n, r) => {
						let {
							gqlContext: o
						} = r;
						var i, a;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (a = null === (i = c.body) || void 0 === i ? void 0 : i.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) e(E(t)), e(x(s));
						else {
							e(g(`error-unmuting-${t}`))
						}
					}
				}, R = e => {
					let {
						subredditName: t
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: i
						} = r;
						var a, c;
						const d = s(),
							l = Object(O.t)(d).find(e => e.name.toLowerCase() === t.toLowerCase());
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
						const u = await Object(j.a)(i(), t, !0),
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
						const x = h.id,
							y = await m(i(), x);
						if (y.ok && y.body && (null === (c = null === (a = y.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) e(S([h])), e(f(h.name));
						else {
							e(g(`error-muting-${x}`))
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
				return O
			})), s.d(t, "d", (function() {
				return g
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				i = s("./src/reddit/actions/notificationsInbox/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts");
			const u = Object(r.a)(a.z),
				p = Object(r.a)(a.y),
				b = Object(r.a)(a.x),
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
				O = e => {
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
			const g = e => {
				let {
					subredditId: t,
					notificationLevel: s,
					successCallback: r,
					undoCallback: a
				} = e;
				return async (e, l, g) => {
					let {
						gqlContext: f
					} = g;
					var x, j, y;
					e(p());
					const C = h(s),
						v = await Object(d.b)(f(), t, C);
					if ((null === (j = null === (x = v.error) || void 0 === x ? void 0 : x.fields) || void 0 === j ? void 0 : j.length) || function(e) {
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
					})), r && r(), e(a ? Object(c.f)(Object(c.e)(O(s), m.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(i.i)(t, a))) : Object(c.f)(Object(c.e)(O(s), m.b.SuccessCommunityGreen))))
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
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/components/BackToTop/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
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
				return r.a.createElement("div", {
					className: Object(o.a)(t, d.a.container),
					style: n
				}, r.a.createElement(a.a, {
					className: d.a.button,
					onClick: () => m(s)
				}, l._("Back to Top", null, {
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
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
				O = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				g = Object(i.b)(O),
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
				x = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.byline, Object(d.a)({
						isLoading: !0
					}))
				}),
				j = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.avatar, Object(d.a)({
						isLoading: !0
					}))
				}),
				y = e => o.a.createElement(f, e, e.isCommentBoxDesignEnabled ? o.a.createElement(j, null) : o.a.createElement(x, null), o.a.createElement(c.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				C = g(y),
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
				i = s.n(o),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = s("./src/reddit/components/LottieAnimation/index.tsx"),
				d = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				l = s.n(d);
			! function(e) {
				e.Lottie = "lottie"
			}(n || (n = {}));
			const m = {
				threshold: [.75, .001]
			};
			t.b = i.a.memo(e => {
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
				Object(a.a)(t, u, m);
				const p = e.type;
				return i.a.createElement("div", {
					className: Object(r.a)(l.a.effectContainer, l.a[p + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, p === n.Lottie && i.a.createElement(c.a, {
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/models/PostDraft/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/makeDraftKey/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/comment/authoring.ts"),
				b = s("./src/reddit/actions/comment/moderation.ts"),
				h = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				O = s("./src/reddit/icons/fonts/Expand/index.tsx"),
				g = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				f = s.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var j, y, C = s("./node_modules/lodash/defer.js"),
				v = s.n(C),
				E = s("./src/lib/lessComponent.tsx"),
				S = s("./src/reddit/actions/tooltip.ts"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				N = s("./src/reddit/actions/reportFlow/index.ts"),
				P = s("./src/reddit/helpers/correlationIdTracker.ts"),
				T = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				w = s("./src/reddit/helpers/trackers/lightbox.ts"),
				R = s("./src/reddit/models/Comment/index.ts"),
				L = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/comments.ts"),
				M = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				B = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				V = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				W = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				G = s.n(W);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(j || (j = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(y || (y = {}));
			const H = (e, t) => {
					const s = G.a[t],
						n = G.a[e];
					return Object(d.a)(s, n)
				},
				K = e => Object(d.a)(G.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[G.a.isInOverlay]: e.isInOverlay,
					[G.a.isModModeEnabled]: e.isModModeEnabled,
					[G.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var q = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				z = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Q = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Y = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				J = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				X = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Z = s("./src/reddit/components/OverflowMenu/index.tsx"),
				$ = s("./src/reddit/components/ReportFlow/index.tsx"),
				ee = s("./src/reddit/components/ReportFlow/new.tsx"),
				te = s("./src/reddit/components/ShareMenu/index.tsx"),
				se = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ne = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				re = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				oe = s("./src/reddit/helpers/trackers/modTools.ts"),
				ie = s("./src/reddit/layout/row/Inline/index.tsx"),
				ae = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				ce = s("./src/reddit/icons/fonts/index.tsx"),
				de = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				le = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				me = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ue = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				be = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				he = s("./src/devPlatform/constants.ts"),
				Oe = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				ge = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				fe = s.n(ge);
			const xe = E.a.wrapped(de.a, "CommentIcon", fe.a),
				je = E.a.wrapped(pe.a, "Report", fe.a),
				ye = E.a.wrapped(me.a, "IgnoreReport", fe.a),
				Ce = E.a.wrapped(J.a, "ModActionsMenu", fe.a),
				ve = E.a.div("OverflowMenuSpacer", fe.a),
				Ee = E.a.wrapped(Z.a, "DropdownRow", fe.a),
				Se = E.a.wrapped(ie.a, "Flatlist", fe.a),
				ke = E.a.button("Button", fe.a),
				_e = E.a.wrapped(q.a, "ModToolsFlatlist", fe.a),
				Ie = E.a.wrapped(ne.a, "ViewReportsDropdown", fe.a),
				Ne = e => `Comment-${e}--Modal--DeleteComment`,
				Pe = e => `Distinguish--Dropdown--${e}`,
				Te = e => `${e}-overflow-menu`,
				we = e => `View--Reports--${e}`,
				Re = Object(a.c)({
					claimedFreeAward: B.b,
					currentUser: U.m,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(L.a)(e) === Ne(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(k.b)(Pe(s.id))(e)
					},
					isFollowed: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.y)(e, {
							commentId: s.id
						})
					},
					isFollowedCommentExpired: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.A)(e, {
							commentId: s.id
						})
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.E)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(k.b)(we(s.id))(e)
					},
					isLoggedIn: U.S,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(A.A)(e, {
							postId: s.postId
						})
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(A.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(A.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.m)(e, {
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
						return Object(F.K)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(D.z)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(A.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: M.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(A.G)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isDevPlatformEnabled: e => Object(Oe.a)(e)
				});
			class Le extends o.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(w.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(oe.c)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(oe.g)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(oe.f)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(P.d)(P.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(oe.f)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(oe.c)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(oe.c)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? R.a.UNFOLLOWED : R.a.FOLLOWED), t(n ? Object(oe.h)("follow", s.id) : Object(oe.c)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(oe.d)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(ee.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: $.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement($.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: $.b,
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
						commentPermalink: i,
						deleteComment: a,
						depth: c,
						handleReply: l,
						isAvatarsInCommentsEnabled: m,
						isFollowed: u,
						isLoggedIn: p,
						isPendingDeletion: b,
						onDistinguishComment: h,
						onIgnoreReports: O,
						onToggleReportsDropdown: g,
						moderatorPermissions: f,
						modModeEnabled: x,
						postIsArchived: C,
						postAuthorIsBlocked: E,
						postIsLocked: S,
						renderedInOverlay: k,
						sendEvent: _,
						subreddit: I,
						subredditAboutInfo: N,
						toggleDeleteCommentModal: P,
						toggleSendReplies: w,
						trackCommentClick: L,
						isPostUnrepliable: F,
						isDevPlatformEnabled: M
					} = this.props, B = Object(T.a)(f), A = !!s && s.displayText === e.author, D = !!s && s.isEmployee, U = e.unrepliableReason, W = !E && !Object(R.g)(e) && !F && !U && !F && !(N && N.userIsBanned) && (S || C || B && p || e.isLocked ? B && p : p || m), G = Object(X.a)(e), q = B && A && !e.bannedBy, J = A && D && !e.bannedBy, $ = q || J, ee = !Object(R.g)(e) && s && e.isGildable && !F && !(U && "[deleted]" === e.author), se = !C && !U, ne = [];
					W && ne.push(o.a.createElement(ke, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), v()(() => L("reply", e.id)())
						}
					}, o.a.createElement(xe, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), ee && ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(ae.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => n.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), ne.push(o.a.createElement(te.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: i,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == I ? void 0 : I.type
					}, o.a.createElement(ke, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), A || ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(pe.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(ce.a, {
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
					}), A && ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(ce.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), se && ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(ce.a, {
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
					const ie = ne.map(e => o.a.isValidElement(e) ? e : o.a.createElement(ke, {
							className: H(e.breakpointGroup, j.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						de = ne.map(e => o.a.isValidElement(e) ? null : o.a.createElement(Ee, {
							className: H(e.breakpointGroup, j.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: fe.a.dropdownRowText
						}, e.icon));
					return o.a.createElement(r.Fragment, null, o.a.createElement(Se, {
						className: Object(d.a)(K({
							depth: c,
							isInOverlay: k,
							isModModeEnabled: B && x || M,
							isFollowCommentEnabled: se
						}), t)
					}, ie, o.a.createElement(ve, {
						className: A ? void 0 : H(y.LoggedInUser, j.HideIfVWLarger)
					}, o.a.createElement(Z.b, {
						className: fe.a.overflowMenu,
						disabled: b,
						dropdownId: Te(e.id),
						onClick: () => _(Object(oe.c)("comment_overflow_menu", e.id))
					}, de, A && o.a.createElement(o.a.Fragment, null, o.a.createElement(Ee, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: fe.a.dropdownRowText
					}, o.a.createElement(ce.a, {
						name: "delete"
					})), o.a.createElement(re.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: w,
						isSelected: this.props.sendRepliesToggled
					})), o.a.createElement(be.a, {
						contextType: he.a.COMMENT,
						contextData: e
					}))), this.props.isConfirmModalOpen && o.a.createElement(Q.a, {
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
						onConfirm: a,
						toggleModal: P,
						trackClick: () => {},
						withOverlay: !0
					}), B && o.a.createElement(o.a.Fragment, null, x && o.a.createElement(_e, {
						className: H(y.Moderator, j.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: A
					}), o.a.createElement(Ce, {
						className: x ? H(y.Moderator, j.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => _(Object(oe.c)("comment_mod_action_menu", e.id))
					}, o.a.createElement(ue.a, null), o.a.createElement(V.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(X.c)(e) && !x && o.a.createElement(z.a, {
						text: `${G}`,
						onClick: () => {
							g(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: we(e.id)
					}, o.a.createElement(Ie, {
						model: e,
						onIgnoreReports: () => {
							O(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: we(e.id)
					}), e.ignoreReports ? o.a.createElement(ye, null) : o.a.createElement(je, null)), $ && o.a.createElement(z.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, o.a.createElement(le.a, null), o.a.createElement(Y.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: D,
						isUserMod: B,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Pe(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Fe = Object(i.b)(Re, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(I.i)(Ne(s.id))), e(Object(S.h)({
								tooltipId: Te(s.id)
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
						onGildClick: (t, n) => e(Object(_.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(b.g)(s.id)),
						onReportClick: () => e(Object(N.c)(s.id)),
						onToggleSave: () => e(Object(u.o)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(S.h)({
							tooltipId: Pe(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(S.h)({
							tooltipId: we(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(I.i)(Ne(s.id))),
						toggleSendReplies: () => e(Object(p.l)(s.id))
					}
				})(Object(se.c)(Le)),
				Me = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Be = s.n(Me);
			var Ae = o.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return o.a.createElement("div", {
						className: Be.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				De = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				Ue = s.n(De);
			var Ve = o.a.memo(e => o.a.createElement("div", {
					className: Ue.a.gradientHighlightContainer,
					role: "presentation"
				})),
				We = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				Ge = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				He = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Ke = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				qe = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				ze = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Qe = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Ye = s("./src/reddit/components/ModModeReports/index.tsx"),
				Je = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Xe = s("./src/reddit/components/RichTextJson/index.tsx"),
				Ze = s("./src/reddit/components/UserIcon/index.tsx"),
				$e = s("./src/reddit/components/UserIcon/constants.ts"),
				et = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				tt = s("./src/reddit/helpers/author.ts"),
				st = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				nt = s("./src/reddit/constants/componentTestIds.ts"),
				rt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ot = s("./src/reddit/contexts/Visibility.tsx"),
				it = s("./src/reddit/controls/ErrorText/index.tsx"),
				at = s("./src/reddit/controls/InternalLink/index.tsx"),
				ct = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				dt = s("./src/reddit/helpers/flair.ts"),
				lt = s("./src/reddit/models/Subreddit/index.ts"),
				mt = s("./src/reddit/models/User/index.ts"),
				ut = s("./src/reddit/models/Vote/index.ts"),
				pt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				bt = s("./src/reddit/selectors/commentSelector.ts"),
				ht = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ot = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				gt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ft = s("./src/reddit/selectors/poll/index.ts"),
				xt = s("./src/reddit/selectors/userPrefs.ts"),
				jt = s("./src/reddit/selectors/moderatingComments.ts"),
				yt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Ct = s.n(yt),
				vt = s("./src/config.ts"),
				Et = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				St = s("./src/reddit/components/SubredditIcon/index.tsx"),
				kt = s("./src/reddit/helpers/trackers/comment.ts");

			function _t() {
				return (_t = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const It = 300,
				Nt = E.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return o.a.createElement("button", x({}, s, {
						className: Object(d.a)(t, f.a.expandButton)
					}), o.a.createElement(O.a, {
						className: f.a.expandIcon
					}))
				}), "ExpandButton", Ct.a),
				Pt = E.a.wrapped(Fe, "FlatList", Ct.a),
				Tt = E.a.wrapped(it.b, "ErrorText", Ct.a),
				wt = E.a.wrapped(Ke.a, "HorizontalVotes", Ct.a),
				Rt = E.a.div("ActionBar", Ct.a),
				Lt = E.a.wrapped(Ge.a, "TopMeta", Ct.a),
				Ft = E.a.div("CommentContentWrapper", Ct.a),
				Mt = E.a.wrapped(qe.b, "AuthorHovercard", Ct.a),
				Bt = Object(rt.v)(),
				At = Object(i.b)(() => Object(a.c)({
					comment: (e, t) => Object(bt.c)(e, t),
					currentProfileModPermissions: rt.i,
					depth: (e, t) => Object(F.j)(e, t),
					collapsed: jt.b,
					collapsedBecauseCrowdControl: jt.a,
					currentUser: U.m,
					flair: F.e,
					focused: (e, t) => !t.noFocus && Object(F.t)(e, t),
					highlightAnimationDisabled: xt.d,
					isAdmin: U.M,
					isEditing: F.z,
					isLoggedIn: U.S,
					isPendingDeletion: F.E,
					isPresenceConsumptionExpEnabled: Ot.c,
					moderatorPermissions: (e, t) => {
						const s = Object(bt.c)(e, t);
						return s ? Object(gt.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: ft.f,
					modModeEnabled: rt.W,
					errorMsgs: F.I,
					replyFormOpen: F.L,
					subreddit: rt.s,
					subredditType: F.O,
					isOnlineConsumptionLoadTest: Ot.a,
					isOnlineUserPref: U.X,
					userIsBanned: (e, t) => {
						const s = Object(bt.c)(e, t);
						return !!s && Object(D.ib)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: ht.b,
					isBlockingInterstitialV2Enabled: ht.c
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
							const [n, r] = t === ut.a.upvoted ? [Object(u.s)(s), "upvote_comment"] : [Object(u.k)(s), "downvote_comment"];
							o(r, s)(), e(n)
						},
						onMediaReload: () => {
							e(Object(u.l)(s))
						}
					}
				}),
				Dt = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Ut = e => o.a.createElement("div", e, e.children),
				Vt = e => o.a.createElement(o.a.Fragment, null, e.children),
				Wt = Bt(At(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						currentProfileModPermissions: b,
						currentUser: O,
						depth: g,
						errorMsgs: f,
						flair: x,
						flatlist: j,
						focused: y,
						hasAwardGradient: C,
						highlightAnimationDisabled: v,
						highlightTreatment: E,
						index: S,
						isActive: k,
						isAdmin: _,
						isAvatarsInCommentsEnabled: I,
						isBlockingInterstitialEnabled: N,
						isBlockingInterstitialV2Enabled: P,
						isEditing: w,
						isFirstInList: L,
						isHighlighted: F,
						isLoggedIn: M,
						isOnlineConsumptionLoadTest: B,
						isOnlineUserPref: A,
						isPendingDeletion: D,
						isPresenceConsumptionExpEnabled: U,
						moderatorPermissions: V,
						modModeEnabled: W,
						noSpacing: G = !1,
						onCommentAuthorClick: H,
						onCommentTimestampClick: K,
						onCollapseClick: q,
						onIgnoreReports: z,
						onLineMouseOver: Q,
						onPresenceIndicatorInViewport: Y,
						onVoteClick: J,
						postId: Z,
						prediction: $,
						renderedInOverlay: ee,
						replyFormOpen: te,
						restrictHeight: ne,
						rtJSONRedditStyle: re,
						showBlockingInterstitial: oe,
						subreddit: ie,
						subredditType: ae,
						trackCommentClick: ce,
						userIconSmall: de,
						userIsBanned: le,
						onClickRevealSpoilerText: me,
						onMediaReload: ue
					} = e, pe = m.isDeleted, be = !w && !pe && !!f && f.length > 0, he = Object(l.a)(c.c.edit, m.id), Oe = Object(l.a)(c.c.replyToComment, m.id), ge = Object(T.a)(V), fe = Object(Qe.a)(m), xe = Object(X.c)(m), je = m.authorIsContractor && ae === lt.g.EmployeesOnly, ye = m.isLocked, Ce = ge && W, ve = !w && !pe && (M || I), Ee = I && !m.unrepliableReason, Se = !!O && Object(mt.e)(O) === m.author, [ke, _e] = Object(r.useState)(null), [Ie, Ne] = Object(r.useState)(null), Pe = Object(r.useRef)(null), Te = Object(R.f)(m) || Object(R.g)(m), we = Te ? Ut : at.default, Re = Object(R.f)(m) ? Vt : Mt, Le = Object(se.b)();
					Object(r.useEffect)(() => {
						if (!w && !pe && (C && _e(o.a.createElement(Ve, null)), null !== E)) {
							if (E.glowHexColor) {
								const e = E.glowHexColor;
								_e(o.a.createElement(Ae, {
									hexColor: e
								}))
							}
							if (E.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = E.effectHighlight;
								Ne(o.a.createElement(We.b, {
									prefersReducedAnimation: v,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [w, pe, C, v, E]);
					const Fe = Object(r.useCallback)(() => {
							Le(Object(kt.c)(m.id))
						}, [Le, m.id]),
						Me = Object(ot.b)();
					(N || P) && Me && S >= ht.a - 1 && oe();
					const Be = !pe && !Object(R.f)(m) && (!le || le && Se) && !Object(R.g)(m) && M,
						De = Object(r.useCallback)(() => {
							Be && U && !Se && Y && Y(m.id)
						}, [m.id, Y, Be, U, Se]),
						Ue = Object(st.a)(m),
						Ge = !!O && Object(mt.e)(O) === m.author ? null == O ? void 0 : O.accountIcon : m.profileImage,
						Ke = Object(Et.c)(Ge),
						qe = Ke || Object(Et.b)(Ge);
					return o.a.createElement("div", {
						key: `comment-${m.id}`,
						className: Object(d.a)(`Comment ${m.id}`, Ct.a.CommentWrapper, {
							[Ct.a.highlightComment]: F,
							[Ct.a.deleted]: pe,
							[Ct.a.focused]: y,
							[Ct.a.redesign]: I,
							[Ct.a.topLevel]: !g,
							[Ct.a.noSpacing]: G
						})
					}, ke, Ie, !w && !pe && L && o.a.createElement("div", {
						className: Ct.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${vt.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), o.a.createElement(Nt, {
						className: Object(d.a)(m.id, {
							[Ct.a.hidden]: !i,
							[Ct.a.visible]: i
						}),
						onClick: () => {
							s(), q(), ce("collapse", m.id)()
						},
						onMouseOver: () => Q(m.id),
						onMouseOut: s
					}), Object(tt.a)(m.author) ? ie ? o.a.createElement(St.b, {
						className: Object(d.a)(Ct.a.UserIconContainer, de && Ct.a.UserIconContainerSmall),
						subredditOrProfile: ie,
						linkTo: `/user/${m.author}/`
					}) : null : o.a.createElement(Re, {
						alwaysShowChildren: !0,
						collapsed: i,
						hoverDivClassName: Ct.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(R.g)(m),
						postOrComment: m,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: ee ? Je.f.Lightbox : void 0
					}, o.a.createElement(we, {
						className: Object(d.a)(Ct.a.UserIconContainer, de && Ct.a.UserIconContainerSmall),
						"data-testid": Te ? void 0 : "comment_author_icon",
						onClick: Te ? void 0 : H,
						to: `/user/${m.author}/`
					}, Me ? o.a.createElement(Ze.a, {
						isNft: qe,
						className: Object(d.a)(Ct.a.UserIcon, {
							[Ct.a.v1NftTreatment]: Ke
						}),
						iconUrl: Ge,
						isNSFW: m.profileOver18 || !1,
						nsfwIconUrl: $e.a,
						userName: m.author,
						isHighlighted: F,
						shouldShowPresenceIndicator: Be && U,
						onPresenceIndicatorInViewport: De,
						isCommentAuthorBlocked: Object(R.g)(m),
						collapsed: i,
						shouldUseOnlineOverride: Se,
						isOnlineOverrideValue: A,
						isOnlineStatusLoadTest: Be && B,
						authorId: m.authorId
					}) : o.a.createElement("div", {
						className: Ct.a.UserIcon
					}))), o.a.createElement(Ft, {
						className: Object(d.a)({
							[Ct.a.isActive]: k,
							[Ct.a.isCollapsed]: i,
							[Ct.a.isLocked]: ye && Ce,
							[Ct.a.isPendingDeletion]: D,
							[Ct.a.isRemoved]: !!m.bannedBy && Ce || m.isDeleted && _
						})
					}, o.a.createElement(ct.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", g + 1)], {
						hk: "2XnyAV"
					})), o.a.createElement(Lt, {
						userHasNft: qe,
						childrenInfo: t,
						className: Object(d.a)({
							[Ct.a.collapsed]: i,
							[Ct.a.noFlair]: Object(dt.o)(x || null)
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						flair: x,
						isAdmin: _,
						isPostComment: !0,
						onCommentAuthorClick: H,
						onCommentTimestampClick: K,
						renderedInOverlay: ee,
						renderContractorBadge: je
					}), !i && o.a.createElement(r.Fragment, null, w && o.a.createElement(h.a, {
						className: Object(d.a)(Ct.a.EditCommentForm, Ct.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: g,
						draftType: c.c.edit,
						draftKey: he,
						postId: Z,
						rtJson: Object(st.a)(m),
						mediaMetadata: m.media && m.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						submitAction: e => Object(p.j)({
							id: m.id,
							commentsPageKey: u,
							draftKey: he,
							formData: e
						}),
						submitButtonText: n.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !w && (!pe || _) && o.a.createElement("div", {
						"data-testid": nt.d,
						ref: Pe,
						className: Object(d.a)(Ct.a.CommentBody, {
							[Ct.a.restrictHeight]: !(!ne || !Pe.current) && Pe.current.clientHeight > It
						})
					}, $ ? o.a.createElement(He.a, {
						comment: m,
						prediction: $
					}) : o.a.createElement(Xe.b, {
						content: Ue,
						mediaMetadata: m.media && m.media.mediaMetadata,
						redditStyle: re,
						rtJsonElementProps: Dt(e),
						onClickRevealSpoilerText: me,
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0,
							onReload: ue,
							onClick: Fe
						}
					}), o.a.createElement(pt.b, {
						content: Ue
					})), W && ge && fe && o.a.createElement(ze.a, {
						thing: m
					}), W && ge && xe && o.a.createElement(Ye.a, {
						onIgnoreReports: z,
						reportable: m
					}), null != j ? j : ve && o.a.createElement(Rt, null, Ee && o.a.createElement(wt, {
						downvoteButtonClassName: Ct.a.voteButton,
						downvoteClassName: Ct.a.upDownVote,
						model: m,
						onVoteClick: J,
						scoreClassName: Ct.a.score,
						upvoteButtonClassName: Ct.a.voteButton,
						upvoteClassName: Ct.a.upDownVote
					}), o.a.createElement(Pt, {
						comment: m,
						commentsPageKey: u,
						depth: g,
						isAvatarsInCommentsEnabled: I,
						collapsedBecauseCrowdControl: a,
						modModeEnabled: W,
						moderatorPermissions: b || V,
						renderedInOverlay: ee,
						isCommentFocused: y,
						subreddit: ie,
						trackCommentClick: ce
					})), be && f.map(e => o.a.createElement(Tt, {
						key: e
					}, e)), te && o.a.createElement(h.a, {
						className: Object(d.a)(Ct.a.EditCommentForm, Ct.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: g,
						draftType: c.c.replyToComment,
						draftKey: Oe,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						postId: Z,
						submitAction: (e, t) => {
							let {
								validate: s,
								...n
							} = e;
							return s ? Object(p.v)({
								commentsPageKey: u,
								draftKey: Oe,
								parentCommentDepth: g,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							}) : Object(p.o)({
								commentsPageKey: u,
								draftKey: Oe,
								parentCommentDepth: g,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							})
						},
						submitButtonText: n.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			t.a = e => o.a.createElement(et.a.Consumer, null, t => o.a.createElement(Wt, _t({}, e, {
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
				return T
			})), s.d(t, "f", (function() {
				return w
			})), s.d(t, "a", (function() {
				return U
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/times.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/pages/comments.ts"),
				u = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/describeApiError/index.ts"),
				h = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				g = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				x = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				j = s("./src/reddit/icons/svgs/LiveChat/index.tsx"),
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
					return a.a.createElement("div", {
						className: Object(d.a)(v.a.StateContainer, t)
					}, s ? a.a.createElement(j.a, {
						className: v.a.LiveChatIcon
					}) : a.a.createElement(x.a, {
						className: v.a.CommentsIcon
					}), a.a.createElement(E, null, s ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), a.a.createElement(k, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				I = () => a.a.createElement("div", {
					className: v.a.StateContainer
				}, a.a.createElement(x.a, {
					className: v.a.CommentsIcon
				}), a.a.createElement(E, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(k, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				N = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: v.a.StateContainer
					}, a.a.createElement(x.a, {
						className: v.a.CommentsIcon
					}), a.a.createElement(E, null, n.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), a.a.createElement(p.n, {
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
					return a.a.createElement("div", {
						className: v.a.StateContainer
					}, a.a.createElement(y.a, {
						className: v.a.SnooFacepalm
					}), a.a.createElement(S, null, t ? Object(b.a)({
						apiError: t,
						isLoggedOut: !1
					}) : n.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), a.a.createElement(p.l, {
						onClick: s
					}, n.fbt._("Retry", null, {
						hk: "NOuNi"
					})))
				}),
				T = e => {
					let {
						postId: t,
						commentId: s,
						sort: n,
						apiError: r
					} = e;
					return a.a.createElement("div", {
						className: Object(d.a)(v.a.StateContainer, v.a.ErrorFullPage)
					}, a.a.createElement(P, {
						postId: t,
						commentId: s,
						sort: n,
						apiError: r
					}))
				},
				w = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(u.a, null))
				}, "LoadingFullPage", v.a),
				R = l.a.div("CommentsPlaceholderContainer", v.a),
				L = l.a.div("CommentPlaceholder", v.a),
				F = l.a.div("Avatar", v.a),
				M = l.a.div("VoteColumn", v.a),
				B = l.a.div("TextColumn", v.a),
				A = () => a.a.createElement("div", {
					className: Object(d.a)(v.a.TopMetaPlaceholder, Object(O.a)({
						isLoading: !0
					}))
				}),
				D = () => a.a.createElement("div", {
					className: Object(d.a)(v.a.CommentBodyPlaceholder, Object(O.a)({
						isLoading: !0
					}))
				}),
				U = e => {
					let {
						isAvatarsInCommentsEnabled: t,
						sidebar: s = !0
					} = e;
					return a.a.createElement(R, null, o()(10, e => a.a.createElement(L, {
						key: e
					}, s && a.a.createElement(a.a.Fragment, null, t ? a.a.createElement(F, {
						className: Object(O.a)({
							isLoading: !0
						})
					}) : a.a.createElement(M, null, a.a.createElement(f.b, {
						className: v.a.Upvote
					}), a.a.createElement(g.a, {
						className: v.a.Downvote
					}))), a.a.createElement(B, null, a.a.createElement(A, null), a.a.createElement(D, null)))))
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = s.n(O),
				f = s("./src/lib/lessComponent.tsx");
			const x = "create-community-button",
				j = f.a.wrapped(l.c, "StyledTooltip", g.a),
				y = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.rb)(e),
					userIsSuspended: h.Z
				});
			t.a = Object(i.b)(y, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(s)), e(Object(c.h)(u.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: x
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(m.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: r,
					onHideTooltip: i,
					openCommunityCreation: a,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: m
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						m && m(e), a(c)
					},
					onMouseEnter: r,
					onMouseLeave: i,
					priority: p.c.Secondary,
					id: x,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(j, {
					caretOnTop: !0,
					tooltipId: x,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(j, {
					caretOnTop: !0,
					tooltipId: x,
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
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(a);
			t.a = i.a.wrapped(e => r.a.createElement("div", {
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
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Pill/PillButton/index.m.less"),
				c = s.n(a);

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
						variant: a,
						...u
					} = e;
					return o.a.createElement("button", d({}, u, {
						className: Object(i.a)(c.a.primaryButton, l[a], m(t, a), n),
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
				i = s("./src/reddit/components/FocusableContent/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
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
				}, r.a.createElement(i.a, {
					isFocused: !1
				}, !s && "top" === c && r.a.createElement("div", {
					className: Object(o.a)(d.a.toolbar, d.a.topToolbar, Object(a.a)({
						isLoading: n
					}))
				}), r.a.createElement("div", {
					className: Object(o.a)(d.a.content, {
						[d.a.mCollapsed]: s
					})
				}, r.a.createElement("div", {
					className: Object(o.a)(d.a.prompt, Object(a.a)({
						isLoading: !0
					}))
				})), !s && "bottom" === c && r.a.createElement("div", {
					className: Object(o.a)(d.a.toolbar, d.a.bottomToolbar, Object(a.a)({
						isLoading: n
					}))
				})))
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
		"./src/reddit/components/SearchPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return W
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				m = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				u = s("./src/reddit/components/ModModeReports/index.tsx"),
				p = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				h = s("./src/reddit/components/PostContainer/index.tsx"),
				O = s("./src/reddit/components/PostTitle/index.tsx"),
				g = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				f = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				x = s("./src/reddit/components/SearchWarnings/index.tsx"),
				j = s("./src/reddit/components/Thumbnail/index.tsx"),
				y = s("./node_modules/react-redux/es/index.js"),
				C = s("./node_modules/reselect/es/index.js"),
				v = s("./src/reddit/actions/post.ts"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/poll/index.ts"),
				_ = s("./src/reddit/selectors/postFlair.ts"),
				I = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/selectors/user.ts");
			const P = {
					crosspost: I.d,
					isActive: I.j,
					isLoggedIn: N.S,
					moderatorPermissions: S.m,
					modModeEnabled: E.W,
					poll: k.e,
					showEditFlair: _.a,
					flairStyleTemplate: E.Y
				},
				T = () => Object(C.c)(P);
			var w = s("./src/reddit/contexts/Post/index.tsx"),
				R = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				L = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				F = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				M = s("./src/lib/isUrl/index.ts"),
				B = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				A = s("./src/reddit/components/SearchPost/index.m.less"),
				D = s.n(A);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const V = Object(i.a)(e => {
					const {
						className: t,
						crosspost: s,
						eventFactory: i,
						first: y,
						flairStyleTemplate: C,
						isLoggedIn: v,
						isOverlay: E,
						moderatorPermissions: S,
						modModeEnabled: k,
						onClickPost: _,
						onClickPostAuthor: I,
						onClickPostCommunity: N,
						onIgnoreReports: P,
						poll: T,
						post: w,
						redditStyle: A,
						searchQuery: V,
						showBulkActionCheckbox: W,
						subredditOrProfile: G,
						title: H
					} = e, K = A ? void 0 : C, q = s || void 0, z = Object(L.a)(S), Q = Object(m.a)(w), Y = Object(p.c)(w), J = Object(j.c)({
						crosspost: s,
						post: w,
						url: void 0,
						usePreview: !1
					}), X = J && Object(M.a)(J), Z = !v, $ = Object(n.useMemo)(() => H ? void 0 : Object(B.a)(V, e => r.a.createElement("span", {
						className: Object(o.a)(D.a.syntaxHighlight)
					}, e), e => e), [H, V]), ee = {
						flairStyleTemplate: K,
						isOverlay: E,
						onClickPostAuthor: I,
						onClickPostCommunity: N,
						post: w,
						shouldShowSubscribeButton: Z,
						subredditOrProfile: G
					}, te = null != H ? H : r.a.createElement("div", {
						className: Object(o.a)(D.a.paddingSide, D.a.postItemTitleContainer)
					}, r.a.createElement("div", null, r.a.createElement(O.c, {
						format: $,
						hideSourceLink: !0,
						poll: T,
						post: w,
						redditStyle: !0,
						size: O.b.Medium,
						isOverlay: E,
						hideNSFWSpoilerFlair: !0
					}), w.source && !q && r.a.createElement(R.a, {
						className: D.a.outboundLink,
						href: w.source.url,
						isSponsored: w.isSponsored,
						postId: w.id,
						source: w.source
					}, Object(a.a)(w))), X && r.a.createElement("div", {
						className: D.a.thumbnailContainer
					}, r.a.createElement(j.b, {
						className: D.a.thumbnail,
						crosspost: q && w,
						isMeta: w.isMeta,
						post: q || w,
						redditStyle: A,
						templatePlaceholderImage: K && K.postPlaceholderImage
					})));
					return r.a.createElement(h.b, {
						className: Object(o.a)(D.a.postContainer, Object(F.a)(e), y ? D.a.mFirst : void 0, t),
						eventFactory: i,
						isOverlay: E,
						onClick: _,
						post: w,
						style: {
							...Object(F.d)(e),
							...Object(F.b)(K)
						}
					}, r.a.createElement(b.a, {
						"data-click-id": "background",
						flairStyleTemplate: K,
						redditStyle: !0
					}, r.a.createElement(c.a, {
						className: D.a.eventMeta,
						post: w
					}), r.a.createElement("div", {
						className: Object(o.a)(D.a.postContent, {
							[D.a.showBulkActionCheckbox]: W
						}),
						"data-click-id": "body"
					}, r.a.createElement(f.c, U({
						className: Object(o.a)(D.a.paddingSide, D.a.postItemMetaContainer),
						key: "PostMeta"
					}, ee)), r.a.createElement(x.a, {
						className: Object(o.a)(D.a.paddingSide, D.a.postItemWarningContainer),
						isSpoiler: w.isSpoiler,
						isNSFW: w.isNSFW,
						isQuarantined: null == G ? void 0 : G.isQuarantined
					}), te, k && z && Q && r.a.createElement(l.a, {
						thing: w
					}), k && z && Y && r.a.createElement(u.a, {
						onIgnoreReports: P,
						reportable: w
					}), r.a.createElement(g.c, {
						className: Object(o.a)(D.a.paddingSide, D.a.postItemFlatlistContainer),
						post: w
					}), r.a.createElement(d.d, null))))
				}),
				W = Object(w.b)((e => t => {
					const s = Object(E.gb)(),
						n = ((e, t) => {
							let {
								postId: s
							} = t;
							return {
								onIgnoreReports: () => e(Object(v.eb)(s))
							}
						})(Object(y.d)(), {
							...t
						}),
						o = Object(E.cb)(s),
						i = Object(y.e)(T),
						a = {
							...t,
							...i,
							...n,
							searchQuery: o
						};
					return r.a.createElement(e, a)
				})(V))
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
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/components/SearchPostFlatlist/index.m.less"),
				d = s.n(c);
			const l = e => {
					let {
						children: t,
						className: s
					} = e;
					return o.a.createElement("div", {
						className: Object(i.a)(d.a.flatlistContainer, s)
					}, t)
				},
				m = e => {
					let {
						score: t
					} = e;
					return o.a.createElement("span", {
						className: Object(i.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{upvotesCount} upvotes",
						_1: "{upvotesCount} upvote"
					}, [n.fbt._param("upvotesCount", Object(a.b)(t)), n.fbt._plural(t)], {
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
						className: Object(i.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{awardsCount} awards",
						_1: "{awardsCount} award"
					}, [n.fbt._param("awardsCount", Object(a.b)(r)), n.fbt._plural(r)], {
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
					className: Object(i.a)(d.a.flatlistItem)
				}, n.fbt._({
					"*": "{commentsCount} comments",
					_1: "{commentsCount} comment"
				}, [n.fbt._param("commentsCount", Object(a.b)(t.numComments)), n.fbt._plural(t.numComments)], {
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
				return g
			})), s.d(t, "b", (function() {
				return f
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				u = s("./src/reddit/hooks/useClickSourceData.ts"),
				p = s("./src/reddit/selectors/experiments/searchSubDiscovery.ts"),
				b = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				O = s.n(h);
			const g = "subreddit_icon_link",
				f = "subreddit-name";
			t.c = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					onClickPostCommunity: h,
					post: x,
					subredditOrProfile: j,
					tooltipType: y
				} = e, C = Object(u.a)(), {
					isSubEnlarged: v
				} = Object(i.e)(p.a);
				return o.a.createElement("div", {
					className: Object(n.a)(t, O.a.metaContainer)
				}, !x.isSponsored && j && o.a.createElement(a.a, {
					className: Object(n.a)(O.a.hovercardContainer, O.a.hovercardContainer),
					postId: x.id,
					subredditName: j.name
				}, o.a.createElement(b.b, {
					className: Object(n.a)(O.a.subredditIcon, v && O.a.enlargedSubredditIcon),
					linkTo: j.url,
					linkProps: h ? {
						"data-testid": g,
						onClick: h
					} : void 0,
					subredditOrProfile: j
				}), o.a.createElement(l.a, {
					className: Object(n.a)(O.a.subredditName, v && O.a.enlargedSubredditName),
					"data-testid": f,
					"data-click-id": "subreddit",
					onClick: h,
					to: {
						pathname: j.url,
						state: C
					}
				}, j.displayText)), !x.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(m.b, null), o.a.createElement(c.h, {
					type: x.belongsTo.type,
					id: x.belongsTo.id
				})), o.a.createElement(d.g, {
					className: O.a.postTopMeta,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					post: x,
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
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/SearchPost/placeholder.m.less"),
				c = s.n(a),
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
				className: Object(o.a)(c.a.subredditName, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.author, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(c.a.title, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: l.a.commentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.comment, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: l.a.linkContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.link, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: c.a.flatlist
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(i.b)(e))
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
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				c = s.n(a);
			const d = e => r.a.createElement("div", {
				className: Object(o.a)(c.a.communityContainer, e.sidebar && c.a.sidebar),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subreddtiIcon, Object(i.a)(e))
			}), r.a.createElement("div", {
				className: c.a.contentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subredditInfo, e.sidebar && c.a.sidebar)
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.title, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.author, Object(i.b)(e))
			})), !e.sidebar && r.a.createElement("div", {
				className: Object(o.a)(c.a.description, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(c.a.buttonContainer, Object(i.a)(e))
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
				return g
			})), s.d(t, "a", (function() {
				return f
			}));
			var n = s("./src/config.ts"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/controls/Search/CommentSearch/index.tsx"),
				c = s("./src/reddit/controls/Search/SearchBar/index.tsx"),
				d = s("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				l = s("./src/reddit/helpers/trackers/searchResults.ts"),
				m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/pages/SearchResults/index.tsx"),
				p = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = `${n.a.assetPath}/img/telescope-snoo.png`;
			var g;

			function f(e) {
				let {
					query: t,
					type: s,
					searchBarId: n = c.a,
					searchOptions: p,
					tab: g
				} = e;
				const f = Object(m.a)();
				Object(o.useEffect)(() => {
					f(Object(l.o)(s, p))
				}, [s]);
				const x = p.restrict_sr || u.pageConfig[g].sidebar,
					j = n === a.a;
				return i.a.createElement("div", {
					className: Object(r.a)(j && b.a.padding)
				}, i.a.createElement("div", {
					className: Object(r.a)(b.a.noResults, x && b.a.withSidebar),
					"data-testid": "no-results"
				}, i.a.createElement("img", {
					alt: h._("No results image", null, {
						hk: "1BoGUJ"
					}),
					src: O,
					className: b.a.image
				}), i.a.createElement("h2", {
					className: b.a.header
				}, h._("Hm... we couldn’t find any results for “", null, {
					hk: "4fFM7J"
				}), h._("{search query}", [h._param("search query", t)], {
					hk: "4vP3YT"
				}), "”"), i.a.createElement("p", {
					className: b.a.text
				}, h._("Double-check your spelling or try different keywords to {=adjust your search}", [h._param("=adjust your search", i.a.createElement("button", {
					className: b.a.button,
					onClick: () => {
						var e;
						const t = document.querySelector(`input[type="search"][id=${n}]`);
						t || null === (e = document.getElementById(a.b)) || void 0 === e || e.click(), d.b.set(d.a.ADJUST_SEARCH_BUTTON), null == t || t.focus(), null == t || t.select()
					}
				}, h._("adjust your search", null, {
					hk: "1pUIox"
				})))], {
					hk: "33XStx"
				}))))
			}! function(e) {
				e.Comments = "comments", e.Communities = "communities", e.People = "people", e.Posts = "posts"
			}(g || (g = {}))
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
				return Pt
			})), s.d(t, "c", (function() {
				return Ft
			})), s.d(t, "b", (function() {
				return Bt
			}));
			var n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/LRUCache/index.ts"),
				u = s("./src/reddit/actions/search.ts"),
				p = s("./src/reddit/components/Comments/States/index.tsx"),
				b = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/config.ts"),
				O = s("./node_modules/lodash/noop.js"),
				g = s.n(O),
				f = s("./node_modules/polished/dist/polished.es.js"),
				x = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				j = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				y = s.n(j),
				C = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				v = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/isUrl/index.ts"),
				S = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				k = s("./src/reddit/components/FlairList/index.tsx"),
				_ = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				I = s("./src/reddit/components/PostContainer/index.tsx"),
				N = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				P = s("./node_modules/fbt/lib/FbtPublic.js"),
				T = s("./src/reddit/components/Flair/index.tsx"),
				w = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				R = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				L = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = s("./src/reddit/controls/InternalLink/index.tsx"),
				M = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				B = s("./src/reddit/controls/ScrollerTooltipPortal/index.tsx"),
				A = s("./src/reddit/hooks/useClickSourceData.ts"),
				D = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				U = s("./src/reddit/hooks/useTheme.ts"),
				V = s("./src/reddit/icons/fonts/index.tsx"),
				W = s("./src/reddit/selectors/experiments/searchSubDiscovery.ts"),
				G = s("./src/reddit/selectors/user.ts"),
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
				} = e, c = Object(a.e)(G.fb), d = null === (t = o.icon) || void 0 === t ? void 0 : t.url, l = null == o ? void 0 : o.color;
				let m;
				return m = d ? i.a.createElement("img", {
					alt: P.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: s,
					style: {
						backgroundColor: l
					},
					role: "presentation",
					src: d
				}) : i.a.createElement(V.a, {
					name: "community",
					isFilled: !c,
					className: Object(v.a)(X.a.defaultCommunityIcon, s, c && X.a.mNightmode)
				}), i.a.createElement(F.default, {
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
				return i.a.createElement("div", {
					className: X.a.metaContainer
				}, t.crosspostRootId && i.a.createElement(V.a, {
					name: "crosspost",
					className: Object(v.a)(X.a.crosspostIcon, X.a.metaSpacer)
				}), i.a.createElement("span", {
					className: X.a.metaSpacer
				}, r), i.a.createElement(q.b, {
					postOrComment: t
				}, i.a.createElement(K.a, {
					author: t.author,
					className: X.a.metaSpacer,
					isAuthorDeleted: t.author === d.H,
					isUnstyled: !0,
					linkProps: {
						"data-click-id": C.a.USER,
						"data-testid": Y.b
					},
					onClick: s
				}, `u/${t.author}`)), t.authorFlair && i.a.createElement("div", {
					className: X.a.flairContainer
				}, i.a.createElement(T.c, {
					flair: t.authorFlair,
					forceSmallEmojis: !0
				})), !t.isSponsored && i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: X.a.timestamp,
					"data-testid": Y.c,
					"data-click-id": C.a.TIMESTAMP,
					onMouseEnter: n.show,
					onMouseLeave: n.hide,
					ref: n.target.ref
				}, i.a.createElement(Q.a, {
					seconds: t.createdAt / d.Xb
				})), i.a.createElement(B.a, null, i.a.createElement(R.a, {
					arrowProps: n.arrowProps,
					popperProps: n.popperProps,
					visible: n.visible
				}, i.a.createElement(z.a, {
					seconds: t.createdAt / d.Xb
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
				} = Object(a.e)(W.a), m = Object(U.a)();
				return i.a.createElement("div", {
					className: Object(v.a)(t, X.a.metaContainer, X.a.metadataFont)
				}, !o.isSponsored && c && i.a.createElement(w.a, {
					className: Object(v.a)(X.a.hovercardContainer, X.a.hovercardContainer),
					postId: o.id,
					subredditName: c.name
				}, i.a.createElement(Z, {
					className: Object(v.a)(X.a.subredditIcon, l && X.a.enlargedSubredditIcon),
					"data-click-id": C.a.SUBREDDIT,
					clickSourceData: d,
					onClick: r,
					subredditOrProfile: c
				}), i.a.createElement(F.default, {
					className: Object(v.a)(X.a.subredditName, l && X.a.enlargedSubredditName),
					"data-testid": H.b,
					"data-click-id": C.a.SUBREDDIT,
					onClick: r,
					to: {
						pathname: c.url,
						state: d
					}
				}, c.displayText)), !o.isSponsored && !s && i.a.createElement(i.a.Fragment, null, i.a.createElement(M.b, null), i.a.createElement(L.h, {
					type: o.belongsTo.type,
					id: o.belongsTo.id
				})), i.a.createElement(M.b, null), i.a.createElement($, {
					className: X.a.postTopMeta,
					onClickPostAuthor: n,
					post: o,
					theme: m
				}))
			}
			var te = s("./src/reddit/components/SearchWarnings/index.tsx"),
				se = s("./src/reddit/components/SEOTitle/index.tsx"),
				ne = s("./src/reddit/components/SEOTitle/constants.ts"),
				re = s("./src/reddit/components/Thumbnail/index.tsx"),
				oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ie = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				ae = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = s("./src/reddit/controls/OutboundLink/index.tsx"),
				de = s("./src/reddit/helpers/clickSourceData/index.ts"),
				le = s("./src/reddit/helpers/overlay/index.ts"),
				me = s("./src/reddit/helpers/path/index.ts"),
				ue = s("./src/reddit/helpers/trackers/searchResults.ts"),
				pe = s("./src/reddit/hooks/usePageLayer.ts"),
				be = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				he = s("./src/reddit/selectors/searchResults.ts"),
				Oe = s("./src/telemetry/models/Outbound.ts"),
				ge = s("./src/reddit/components/SearchPost/index.m.less"),
				fe = s.n(ge);

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const je = "post-title";

			function ye(e) {
				var t;
				const {
					isCommentsPage: s,
					post: n,
					searchQuery: r
				} = e, a = s ? ne.a.PostComments : ne.a.PostItem, c = Object(A.a)(), d = Object(S.a)(n.permalink, void 0, c), l = Object(U.a)(), m = Object(o.useMemo)(() => Object(ie.a)(r, e => i.a.createElement("span", {
					className: Object(v.a)(fe.a.syntaxHighlight)
				}, e), e => e), [r])(n);
				return i.a.createElement("div", {
					className: Object(v.a)(n.id, fe.a.postTitleColors),
					"data-adclicklocation": C.a.TITLE
				}, i.a.createElement("style", {
					dangerouslySetInnerHTML: {
						__html: `\n        .${n.id}.${fe.a.postTitleColors} {\n          --postTitle-VisitedLinkColor: ${Object(f.c)(.45,Object(be.a)({theme:l}).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(f.c)(.45,Object(be.a)({theme:l}).titleText,Object(be.a)({theme:l}).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(f.c)(.45,Object(be.a)({theme:l}).bodyText,Object(be.a)({theme:l}).body)};\n        }\n      `
					}
				}), i.a.createElement("div", {
					className: fe.a.postTitleVisibility,
					dangerouslySetInnerHTML: {
						__html: `\n            <img alt="" src="${h.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n          `
					}
				}), i.a.createElement("div", {
					className: fe.a.titleContainer
				}, i.a.createElement(x.a, {
					to: d
				}, i.a.createElement("div", {
					className: Object(v.a)(fe.a.inline, fe.a.titleTextColor, fe.a.titleMedium, fe.a.paddingRight),
					"data-testid": je,
					style: {
						"--posttitletextcolor": Object(be.a)({
							theme: l
						}).titleText
					}
				}, i.a.createElement(se.b, {
					type: a
				}, m))), n.flair && i.a.createElement(k.a, {
					className: fe.a.inline,
					subredditName: null === (t = n.subreddit) || void 0 === t ? void 0 : t.name,
					isFlairFilter: !0,
					flair: n.flair
				})))
			}

			function Ce(e) {
				var t, s;
				const n = !e.theme.subredditContext.shouldShowNSFWContent && e.post.isNSFW,
					r = (null === (t = e.post.source) || void 0 === t ? void 0 : t.url) || "",
					o = (null === (s = e.post) || void 0 === s ? void 0 : s.mediaContentUrl) || "",
					a = i.a.createElement(re.a, {
						alt: e.post.title,
						className: Object(v.a)(fe.a.thumbnail, n && fe.a.blurred),
						src: e.post.thumbnail.url,
						theme: e.theme,
						isOutbound: r && !e.post.isSponsored || !1
					});
				return i.a.createElement("div", {
					className: fe.a.container,
					onClick: e.makeSendClickEventFn
				}, Object(E.a)(o) && !e.post.media ? i.a.createElement(ce.b, {
					href: r || o,
					isSponsored: e.post.isSponsored,
					postId: e.post.id,
					source: e.post.source,
					sourceElement: Oe.SourceElement.PostImage
				}, a) : a)
			}
			var ve = s("./src/reddit/components/SearchPost/Placeholder.tsx"),
				Ee = s("./src/reddit/constants/elementIds.ts"),
				Se = s("./src/reddit/helpers/trackers/screenview.ts"),
				ke = s("./src/reddit/selectors/platform.ts"),
				_e = s("./src/reddit/selectors/tracking.ts"),
				Ie = s("./src/telemetry/index.ts"),
				Ne = s("./src/telemetry/models/Timer.ts"),
				Pe = s("./node_modules/react-router-redux/es/index.js"),
				Te = s("./src/reddit/components/Comments/Comment/index.tsx"),
				we = s("./src/reddit/components/PostList/index.tsx"),
				Re = s("./src/reddit/components/PostTitle/index.tsx"),
				Le = s("./src/reddit/components/SearchPost/index.tsx"),
				Fe = s("./src/reddit/connectors/PostList/index.ts"),
				Me = s("./src/reddit/contexts/Visibility.tsx"),
				Be = s("./src/reddit/controls/Button/index.tsx"),
				Ae = s("./src/reddit/controls/Button/index.m.less"),
				De = s.n(Ae),
				Ue = s("./src/reddit/hooks/useTracking.ts"),
				Ve = s("./src/reddit/selectors/comments.ts"),
				We = s("./src/reddit/selectors/commentSelector.ts"),
				Ge = s("./src/reddit/selectors/posts.ts");

			function He(e) {
				let {
					className: t,
					comment: s
				} = e;
				return i.a.createElement(N.b, {
					className: t
				}, i.a.createElement(N.d, {
					score: s.score
				}), i.a.createElement(N.a, {
					awardCountsById: s.awardCountsById
				}))
			}
			var Ke = s("./src/reddit/components/SearchResultsContent/Comment/index.m.less"),
				qe = s.n(Ke);
			var ze;
			! function(e) {
				e.COMMENT = "comment", e.COMMENT_AUTHOR = "comment_author", e.COMMENT_TIMESTAMP = "comment_timestamp", e.GO_TO_COMMENT_LINK = "go_to_comment_link", e.POST = "post", e.POST_AUTHOR = "post_author", e.POST_COMMUNITY = "post_community"
			}(ze || (ze = {}));
			var Qe = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				Ye = s("./src/lib/truncateText/index.ts"),
				Je = s("./src/reddit/actions/post.ts"),
				Xe = s("./src/lib/prettyPrintNumber/index.ts"),
				Ze = s("./src/reddit/components/SubscribeButton/index.tsx"),
				$e = s("./src/reddit/helpers/karma.ts");
			var et = s("./src/reddit/constants/tracking.ts"),
				tt = s("./src/reddit/helpers/correlationIdTracker.ts"),
				st = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				nt = s("./src/reddit/selectors/telemetry.ts");
			var rt = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ot = s("./src/reddit/constants/posts.ts"),
				it = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				at = s("./src/reddit/selectors/subreddit.ts"),
				ct = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				dt = s.n(ct);
			const lt = Object(c.c)({
					isBlockingInterstitialEnabled: it.b,
					isBlockingInterstitialV2Enabled: it.c,
					hideNSFWPref: G.H,
					subredditOrProfile: at.Q,
					subredditOrProfileAboutInfo: at.M,
					userIsSubscriber: at.jb
				}),
				mt = e => {
					const {
						className: t,
						first: s,
						identifier: n,
						listingKey: r,
						searchOptions: c,
						sidebar: d
					} = e, l = Object(ae.gb)(), m = Object(Ue.a)(), u = Object(A.a)(), {
						isBlockingInterstitialEnabled: p,
						isBlockingInterstitialV2Enabled: b,
						hideNSFWPref: h,
						subredditOrProfile: O,
						subredditOrProfileAboutInfo: g
					} = Object(a.e)(t => lt(t, e)), {
						withCommunityDescription: f
					} = Object(a.e)(W.a), x = d && f, j = Object(a.d)(), y = Object(o.useCallback)(e => {
						O && n.type === ot.a.PROFILE && (p || b) && (e.preventDefault(), j(Object(Je.bb)(O.url))), m(Object(ue.r)(c, l, n, r))
					}, [m, c, l, r, n, p, b, j, O]);
					if (!O) return null;
					const C = O.displayText,
						E = g.publicDescription,
						S = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									s = Object($e.a)(e),
									n = Object(Xe.b)(s);
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
							}, [P.fbt._plural(s.subscribers, "number of subscribers", Object(Xe.b)(s.subscribers))], {
								hk: "vb11y"
							}) : null
						})(n.type, g),
						k = (e => {
							let {
								identifierType: t,
								subredditOrProfile: s,
								subredditOrProfileAboutInfo: n,
								onSubscribeButtonClick: r,
								subscribeEventFactory: o,
								priority: a
							} = e;
							if ("subreddit" !== t) return s.acceptFollowers ? i.a.createElement(Ze.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "profile"
								},
								onClick: r,
								priority: a,
								small: !0
							}) : null;
							return "number" == typeof n.subscribers ? i.a.createElement(Ze.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "subreddit"
								},
								onClick: r,
								priority: a,
								small: !0
							}) : null
						})({
							identifierType: n.type,
							subredditOrProfile: O,
							subredditOrProfileAboutInfo: g,
							onSubscribeButtonClick: e => {
								e.preventDefault(), e.stopPropagation()
							},
							subscribeEventFactory: e => {
								return ((e, t, s) => n => {
									const r = nt.H(n, void 0);
									return {
										source: ue.c.SEARCH,
										action: et.c.CLICK,
										noun: `${s}_${ue.d[e.type]}`,
										actionInfo: Object(ue.l)(n, void 0, r, void 0),
										correlationId: Object(tt.c)(tt.a.SearchResults),
										profile: "profile" === e.type ? nt.X(n, e.id) : void 0,
										search: nt.db(n, t, st.a.SERP),
										subreddit: "subreddit" === e.type ? nt.pb(n, e.id) : void 0
									}
								})(n, c, e ? "unsubscribe" : "subscribe")
							},
							priority: Be.c.Tertiary
						});
					return i.a.createElement(F.default, {
						"data-testid": `${n.type}-link`,
						className: Object(v.a)(dt.a.link, d && dt.a.sidebar, s ? dt.a.mFirst : void 0, t),
						onClick: y,
						to: {
							pathname: O.url,
							state: u
						}
					}, i.a.createElement("div", {
						className: dt.a.container
					}, i.a.createElement(rt.b, {
						className: Object(v.a)(dt.a.subredditIcon, x && dt.a.sidebar),
						shouldHideNsfwIcon: h,
						subredditOrProfile: O
					}), i.a.createElement("div", {
						className: dt.a.contentContainer
					}, i.a.createElement("div", {
						className: Object(v.a)(dt.a.subredditInfo, d && dt.a.sidebar)
					}, i.a.createElement("h6", {
						className: Object(v.a)(dt.a.title, d && dt.a.sidebar)
					}, C), i.a.createElement(te.a, {
						className: Object(v.a)(dt.a.warnings, d && dt.a.sidebar),
						isQuarantined: null == O ? void 0 : O.isQuarantined,
						isNSFW: null == O ? void 0 : O.isNSFW
					}), S && i.a.createElement(i.a.Fragment, null, i.a.createElement("p", {
						className: dt.a.subtitle
					}, !d && i.a.createElement(M.b, null), S))), !d && i.a.createElement("p", {
						className: dt.a.description
					}, Object(Ye.a)(E, 150, "..."))), i.a.createElement("div", {
						className: dt.a.buttonContainer
					}, k)), x && n.type !== ot.a.PROFILE && i.a.createElement("p", {
						className: Object(v.a)(dt.a.description, d && dt.a.sidebar)
					}, Object(Ye.a)(E, 75, "...")))
				};
			var ut = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				pt = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				bt = s("./src/lib/objectSelector/index.ts"),
				ht = s("./src/reddit/components/Comments/Comment/TopMeta/Author.tsx"),
				Ot = s("./src/reddit/components/Comments/Comment/TopMeta/Created.tsx"),
				gt = s("./src/reddit/components/Comments/Comment/TopMeta/Edited.tsx"),
				ft = s("./src/reddit/components/Comments/Comment/TopMeta/Role.tsx"),
				xt = s("./src/reddit/components/RichTextJson/index.tsx"),
				jt = s("./src/reddit/components/UserIcon/index.tsx"),
				yt = s("./src/reddit/components/UserIcon/constants.ts"),
				Ct = s("./src/reddit/constants/componentTestIds.ts"),
				vt = s("./src/reddit/controls/MetaData/index.tsx"),
				Et = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				St = s("./src/reddit/models/User/index.ts"),
				kt = s("./src/reddit/components/SearchResultsContent/PdpComment/index.m.less"),
				_t = s.n(kt);
			var It = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less"),
				Nt = s.n(It);
			const Pt = 5,
				Tt = Object(c.c)({
					apiError: he.b,
					apiPending: he.c,
					loadMore: he.t,
					viewportDataLoaded: _e.a
				}),
				wt = Object(c.c)({
					apiError: he.e,
					apiPending: he.f,
					loadMore: he.u,
					viewportDataLoaded: _e.a
				}),
				Rt = Object(c.c)({
					apiError: he.h,
					apiPending: he.i,
					loadMore: he.v,
					viewportDataLoaded: _e.a
				}),
				Lt = Object(c.c)({
					apiError: he.y,
					apiPending: he.z,
					loadMore: he.w,
					viewportDataLoaded: _e.a
				});
			var Ft;
			! function(e) {
				e.Posts = "posts", e.Subreddits = "communities", e.Users = "authors", e.Comments = "comments", e.PdpComments = "pdp_comments"
			}(Ft || (Ft = {}));
			const Mt = {
				[Ft.Comments]: {
					cacheName: "comment",
					Component: e => {
						let {
							identifier: t,
							listingKey: s,
							searchOptions: n
						} = e;
						const r = Object(ae.gb)(),
							o = Object(Ue.a)(),
							c = Object(a.d)(),
							d = Object(a.e)(e => Object(We.c)(e, {
								commentId: t
							})),
							l = Object(a.e)(e => Object(Ve.m)(e, {
								commentId: t
							})),
							m = Object(a.e)(e => (null == d ? void 0 : d.postId) ? Object(Ge.G)(e, {
								postId: null == d ? void 0 : d.postId
							}) : void 0),
							u = Object(a.e)(e => (null == d ? void 0 : d.postId) && Object(Ge.F)(e, {
								postId: null == d ? void 0 : d.postId
							})),
							p = Object(a.e)(e => e.search.searchQuery),
							b = Object(A.a)();
						if (!(null == d ? void 0 : d.postId) || !u) return null;
						const h = Object(Fe.b)(c),
							O = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.a;
								return function() {
									o(Object(ue.q)({
										comment: d,
										key: s,
										originElement: e,
										pageLayer: r,
										searchOptions: n
									})), t(...arguments)
								}
							},
							f = Object(we.b)(d.postId, h),
							x = e => O(e);
						return i.a.createElement(Le.a, {
							crosspost: void 0,
							isActive: !1,
							isLoggedIn: !1,
							modModeEnabled: !1,
							moderatorPermissions: void 0,
							onClickPost: O(ze.POST, null != f ? f : g.a),
							onClickPostAuthor: x(ze.POST_AUTHOR),
							onClickPostCommunity: x(ze.POST_COMMUNITY),
							onIgnoreReports: g.a,
							postId: d.postId,
							searchQuery: p,
							showEditFlair: !1,
							title: i.a.createElement(Me.a, null, i.a.createElement("div", {
								className: qe.a.commentContainer,
								"data-testid": "search_comment_container"
							}, i.a.createElement("div", {
								className: qe.a.postTitleContainer,
								"data-testid": "search_comment_post_title_container",
								onClick: x(ze.POST)
							}, m && i.a.createElement(Re.c, {
								className: qe.a.postTitle,
								hideSourceLink: !0,
								post: m,
								redditStyle: !0,
								disableFlair: !0,
								size: Re.b.Metadata
							})), i.a.createElement("div", {
								className: qe.a.commentContent,
								"data-testid": "search_comment",
								onClick: O(ze.COMMENT, e => {
									e.stopPropagation(), c(Object(Pe.b)(Object(S.a)(l, !0, b)))
								})
							}, i.a.createElement(Te.a, {
								clearHovered: g.a,
								commentId: t,
								commentsPageKey: "",
								flatlist: i.a.createElement(He, {
									className: qe.a.commentFlatlist,
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
								onLineMouseOver: g.a,
								onCommentAuthorClick: e => (e.stopPropagation(), x(ze.COMMENT_AUTHOR)(e)),
								onCommentTimestampClick: e => (e.stopPropagation(), x(ze.COMMENT_TIMESTAMP)(e)),
								postId: d.postId,
								renderedInOverlay: !1,
								restrictHeight: !0,
								rtJSONRedditStyle: !0,
								scrollToAndRemeasure: g.a,
								showBlockingInterstitial: g.a,
								userIconSmall: !0,
								onClickRevealSpoilerText: () => {
									o(Object(ue.t)(n, d, s, r))
								}
							})), i.a.createElement(Be.t, {
								kind: Be.b.InternalLink,
								priority: Be.c.PlainLink,
								className: Object(v.a)(qe.a.goToThreadLinkButton, De.a.PlainLinkButton),
								"data-testid": "go_to_thread_link",
								onClick: O(ze.GO_TO_COMMENT_LINK, e => {
									e.stopPropagation()
								}),
								to: Object(S.a)(u, !0, b)
							}, P.fbt._("Go to thread", null, {
								hk: "npBX6"
							}))))
						})
					},
					moreResultsTypes: [d.ic.Comments],
					Placeholder: Qe.a,
					selector: wt,
					telemetryComponentName: "commentSearchResults",
					telemetryViewEvent: pt.c
				},
				[Ft.Subreddits]: {
					cacheName: "community",
					Component: mt,
					moreResultsTypes: [d.ic.Subreddits],
					Placeholder: ut.a,
					selector: Rt,
					telemetryComponentName: "communitySearchResults",
					telemetryViewEvent: pt.d
				},
				[Ft.Users]: {
					cacheName: "author",
					Component: mt,
					moreResultsTypes: [d.ic.Users],
					Placeholder: ut.a,
					selector: Tt,
					telemetryComponentName: "authorSearchResults",
					telemetryViewEvent: pt.d
				},
				[Ft.Posts]: {
					cacheName: "post",
					Component: e => {
						var t, s;
						const {
							first: n,
							listingKey: r,
							searchOptions: o
						} = e, c = Object(a.e)(t => Object(he.A)(t, e)), d = Object(a.e)(e => {
							if (c.crosspostRootId) return Object(he.A)(e, {
								identifier: c.crosspostRootId
							})
						}), l = Object(a.e)(e => Object(G.lb)(e)), m = Object(pe.a)(), u = Object(a.d)(), p = Object(oe.b)(), b = function(e) {
							var t;
							const s = (null === (t = e.source) || void 0 === t ? void 0 : t.url) || "",
								n = y.a.parse(s),
								r = n.path || "",
								o = r.length > 7 ? r.substring(0, 7) + "..." : r;
							return (n.hostname ? n.hostname.replace("www.", "") : "") + o
						}(c), h = Object(ae.cb)(m), O = d ? d.thumbnail.url : c.thumbnail.url, f = O && Object(E.a)(O), x = Object(U.a)(), j = function(e) {
							let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.a;
							return function() {
								p(Object(ue.s)(c.id, o, m, e || null, r)), t(...arguments)
							}
						}, S = e => j(e), k = {
							isOptimizedSerp: !0,
							post: c,
							subredditOrProfile: c.subreddit || c.profile,
							onClickPostAuthor: e => (e.stopPropagation(), S(ue.e.POST_AUTHOR)(e)),
							onClickPostCommunity: e => (e.stopPropagation(), S(ue.e.POST_COMMUNITY)(e))
						};
						return i.a.createElement("div", {
							className: Object(v.a)(fe.a.postContainer, n && fe.a.mFirst),
							"data-adclicklocation": C.a.BACKGROUND,
							"data-click-id": C.a.BACKGROUND,
							"data-testid": I.a,
							id: c.id,
							onClick: j(ue.e.POST, e => {
								e.stopPropagation(), l ? window.open(c.permalink) : u(Object(le.a)({
									pathname: Object(me.b)(c.permalink),
									state: Object(de.b)(m)
								}))
							}),
							tabIndex: -1
						}, i.a.createElement(_.a, {
							"data-click-id": C.a.BACKGROUND,
							redditStyle: !0
						}, i.a.createElement("div", {
							className: fe.a.postContent,
							"data-click-id": C.a.BODY
						}, i.a.createElement(ee, xe({
							className: Object(v.a)(fe.a.paddingSide, fe.a.postItemMetaContainer),
							key: "PostMeta"
						}, k)), i.a.createElement(te.a, {
							className: Object(v.a)(fe.a.paddingSide, fe.a.postItemWarningContainer),
							isQuarantined: (null === (t = c.subreddit) || void 0 === t ? void 0 : t.isQuarantined) || (null === (s = c.profile) || void 0 === s ? void 0 : s.isQuarantined),
							isNSFW: c.isNSFW,
							isSpoiler: c.isSpoiler
						}), i.a.createElement("div", {
							className: Object(v.a)(fe.a.paddingSide, fe.a.postItemTitleContainer)
						}, i.a.createElement("div", {
							className: fe.a.postContent
						}, i.a.createElement(ye, {
							searchQuery: h,
							post: c
						}), c.source && !c.crosspostRootId && i.a.createElement(ce.b, {
							className: fe.a.outboundLink,
							href: c.source.url,
							isSponsored: c.isSponsored,
							postId: c.id,
							source: c.source
						}, b)), f && i.a.createElement("div", {
							className: fe.a.thumbnailContainer
						}, i.a.createElement(Ce, {
							makeSendClickEventFn: e => (e.stopPropagation(), S(ue.e.POST)(e)),
							post: c,
							theme: x
						}))), i.a.createElement(N.c, {
							className: Object(v.a)(fe.a.paddingSide, fe.a.postItemFlatlistContainer),
							post: c
						}))))
					},
					moreResultsTypes: [d.ic.Posts],
					Placeholder: ve.a,
					selector: Lt,
					telemetryComponentName: "postList",
					telemetryViewEvent: pt.e
				},
				[Ft.PdpComments]: {
					cacheName: "pdp-comment",
					Component: e => {
						let {
							identifier: t,
							first: s,
							listingKey: n,
							searchOptions: r,
							pageKey: o
						} = e;
						const c = Object(ae.gb)(),
							d = Object(Ue.a)(),
							l = Object(a.d)(),
							m = Object(a.e)(e => Object(We.c)(e, {
								commentId: t
							})),
							u = Object(a.e)(e => Object(Ve.m)(e, {
								commentId: t
							})),
							p = Object(a.e)(e => Object(G.m)(e)),
							b = Object(a.e)(e => Object(ke.i)(e)),
							h = Object(a.e)(e => (null == m ? void 0 : m.postId) && Object(Ge.F)(e, {
								postId: null == m ? void 0 : m.postId
							})),
							O = Object(a.e)(e => Object(ae.s)(e, {
								pageLayer: c
							})),
							f = Object(A.a)();
						if (!(null == m ? void 0 : m.postId) || !h) return null;
						const x = !!p && Object(St.e)(p) === m.author ? null == p ? void 0 : p.accountIcon : m.profileImage,
							j = Object(Et.a)(m),
							y = Object(bt.b)(e => {
								let {
									comment: t,
									pageLayer: s
								} = e;
								return {
									renderingObjectInfo: t,
									pageLayer: s
								}
							}),
							C = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.a;
								return function() {
									d(Object(ue.q)({
										comment: m,
										key: n,
										originElement: e,
										pageLayer: c,
										searchOptions: r
									})), t(...arguments)
								}
							},
							E = e => C(e);
						return i.a.createElement(Me.a, null, i.a.createElement("div", {
							className: Object(v.a)(_t.a.commentContainer, _t.a.marginContainer, _t.a.metadataFont, s && _t.a.first),
							"data-testid": "search_pdp_comment_container"
						}, i.a.createElement("div", {
							"data-testid": "search_pdp_comment",
							onClick: C(ze.COMMENT, e => {
								e.stopPropagation(), l(Object(Pe.b)(Object(S.a)(u, !0, f)))
							})
						}, i.a.createElement("div", {
							className: _t.a.flex
						}, i.a.createElement(jt.a, {
							className: Object(v.a)(_t.a.pdpUserIcon, _t.a.iconSpacer),
							wrapperClassName: Object(v.a)(_t.a.pdpUserIcon, _t.a.iconSpacer),
							iconUrl: x,
							isNSFW: m.profileOver18 || !1,
							nsfwIconUrl: yt.a,
							userName: m.author,
							authorId: m.authorId
						}), i.a.createElement(ht.a, {
							authorClassName: _t.a.actionFont,
							collapsed: !1,
							comment: m,
							onClick: e => (e.stopPropagation(), E(ze.COMMENT_AUTHOR)(e)),
							renderedInOverlay: b
						}), i.a.createElement(ft.a, {
							className: _t.a.leftSpacer,
							comment: m,
							subredditDisplayText: (null == O ? void 0 : O.displayText) || "",
							renderContractorBadge: !0,
							renderedInOverlay: b
						}), i.a.createElement(vt.c, {
							className: Object(v.a)(_t.a.separator, _t.a.metadataColor)
						}), i.a.createElement(Ot.a, {
							className: _t.a.metadataColor,
							key: "Created",
							comment: m,
							compact: !0,
							onClick: e => (e.stopPropagation(), E(ze.COMMENT_TIMESTAMP)(e)),
							permalink: u,
							renderedInOverlay: b
						}), m.editedAt && i.a.createElement(i.a.Fragment, null, i.a.createElement(vt.c, {
							className: Object(v.a)(_t.a.separator, _t.a.metadataColor)
						}), i.a.createElement(gt.a, {
							className: _t.a.metadataColor,
							compact: !0,
							editedAt: m.editedAt
						}))), i.a.createElement("div", {
							className: Object(v.a)(_t.a.commentContent, _t.a.marginTop),
							"data-testid": Ct.d
						}, i.a.createElement(xt.b, {
							className: _t.a.background,
							content: j,
							mediaMetadata: m.media && m.media.mediaMetadata,
							rtJsonElementProps: y({
								comment: m,
								pageLayer: c
							}),
							mediaProps: {
								alignLeft: !0,
								renderSmallMedia: !0
							}
						}), i.a.createElement(He, {
							className: Object(v.a)(_t.a.metadataFont, _t.a.marginTop),
							comment: m
						})), i.a.createElement(L.b, {
							commentId: m.id
						}), i.a.createElement(L.a, {
							commentId: m.id,
							commentsPageKey: o
						}))))
					},
					moreResultsTypes: [d.ic.Comments],
					Placeholder: p.a,
					selector: wt,
					telemetryComponentName: "pdpCommentSearchResults",
					telemetryViewEvent: pt.c
				}
			};
			const Bt = e => {
				const t = new m.a(250),
					s = Object(o.useRef)(),
					n = Object(o.useRef)(null),
					c = Object(ae.gb)(),
					p = Object(oe.b)(),
					h = Object(a.d)(),
					{
						identifiers: O,
						listingKey: g,
						searchOptions: f,
						componentType: x,
						sidebar: j,
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
					} = Mt[x],
					{
						apiError: T,
						apiPending: w,
						loadMore: R
					} = Object(a.e)(t => I(t, e)),
					L = !!Object(a.e)(e => Object(ke.i)(e)),
					F = j ? Pt : O.length,
					M = j ? Pt : 10,
					B = Object(l.a)(L),
					A = Object(l.a)(O.length),
					D = () => Boolean(T) || !1 === w,
					U = () => O.length > 0,
					V = !(U() || D()),
					W = () => {
						if (!v) return;
						const e = Ie.c.has(g) ? Ie.c.end(g) : 0;
						p(Object(Se.t)(g, f, Ne.TimerType.InApp, e, c))
					};
				Object(o.useEffect)(() => {
					if (n.current && Ie.c.has(n.current)) {
						const e = Ie.c.end(n.current);
						if (e < 10) return;
						Object(Ie.b)(d.o.Redesign, {
							duration: e,
							type: "mount",
							component: N
						})
					}
				}), Object(o.useEffect)(() => {
					V || W()
				}, [V]), Object(o.useEffect)(() => {
					n.current && Ie.c.cancel(n.current), O.length && (n.current = Ie.c.start())
				}, [n, g, O.length, A]), Object(o.useEffect)(() => {
					B && !L && W()
				}, [L, B]);
				const G = e => {
						s.current = e instanceof Element ? e : void 0
					},
					H = () => {
						const e = O.slice(0, F).map((e, s) => ((e, s) => {
							let n;
							n = function(e) {
								return void 0 !== e.type
							}(e) ? e.id : e;
							const r = `${E}-search-${s}-${g}`,
								o = Object(pt.b)(n, g, () => P(p, f, e, g, c, y));
							let a;
							if (void 0 === (a = t.get(r))) {
								const t = `${E}-search-item-[id:${n}]`;
								a = {
									estHeight: 32,
									trackOnEnteredViewport: o,
									id: n,
									render: () => i.a.createElement(S, {
										className: Nt.a.separatedCommunity,
										first: 0 === s,
										identifier: e,
										key: t,
										listingKey: g,
										searchOptions: f,
										sidebar: j,
										pageKey: C
									})
								}
							}
							return t.set(r, a), a
						})(e, s));
						return i.a.createElement(b.b, {
							getContainer: () => L ? document.getElementById(Ee.e) : null,
							key: g,
							innerRef: G,
							loadMoreToken: R && R.token ? R.token : void 0,
							onLoadMore: () => {
								h(Object(u.n)(k))
							}
						}, e)
					};
				return U() ? H() : D() ? H() : (() => {
					const e = !T;
					return i.a.createElement("div", {
						"data-testid": `${x}-list-placeholder`
					}, r()(M, t => i.a.createElement(_, {
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
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/trackers/searchResults.ts"),
				i = s("./src/reddit/selectors/commentSelector.ts");
			const a = new n.a(250),
				c = (new n.a(250), (e, t, s) => {
					const n = `entered-${e}-${`last-${t}`}`;
					let r = a.get(n);
					return void 0 === r && (r = s, a.set(n, r)), r
				}),
				d = (e, t, s, n, i) => e(e => Object(o.k)({
					action: r.c.VIEW,
					state: e,
					searchOptions: t,
					pageLayer: i,
					subredditOrProfileIdentifier: s,
					key: n
				})),
				l = (e, t, s, n, a, c) => e(e => {
					const d = Object(i.c)(e, {
						commentId: s
					});
					return Object(o.j)({
						action: r.c.VIEW,
						state: e,
						searchOptions: t,
						pageLayer: a,
						comment: d,
						key: n,
						originElement: c
					})
				}),
				m = (e, t, s, n, i) => e(e => ({
					...Object(o.m)({
						state: e,
						searchOptions: t,
						pageLayer: i,
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
		"./src/reddit/components/SearchResultsContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return it
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/lodash/isEmpty.js")),
				c = s.n(a),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/search/index.ts"),
				u = s("./src/reddit/actions/search.ts"),
				p = s("./src/config.ts"),
				b = s("./src/lib/intersectionObserver/index.ts"),
				h = s("./src/lib/isUrl/index.ts"),
				O = s("./src/lib/opener/index.ts"),
				g = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/components/BlankPost/index.tsx"),
				x = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = s("./src/reddit/components/Media/index.tsx"),
				C = s("./src/reddit/components/PostContainer/index.tsx"),
				v = s("./src/reddit/components/Thumbnail/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/contexts/Post/index.tsx"),
				I = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				N = s("./src/reddit/helpers/clickSourceData/index.ts"),
				P = s("./src/reddit/helpers/overlay/index.ts"),
				T = s("./src/reddit/helpers/path/index.ts"),
				w = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				R = s("./src/reddit/helpers/trackers/searchResults.ts"),
				L = s("./src/reddit/models/Media/index.ts"),
				F = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				M = s("./src/reddit/selectors/posts.ts"),
				B = s("./src/reddit/selectors/searchResults.ts"),
				A = s("./src/reddit/selectors/showPromotedCTA.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				U = s("./node_modules/reselect/es/index.js"),
				V = s("./src/lib/getShortenedLink.ts"),
				W = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				G = s("./src/reddit/components/PostTitle/index.tsx"),
				H = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				K = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				q = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				z = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Q = s("./src/reddit/components/CallToActionButton/index.tsx"),
				Y = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				J = s("./src/reddit/hooks/useTheme.ts"),
				X = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Z = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				$ = s.n(Z);
			const {
				fbt: ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), te = `${p.a.assetPath}/img/link-placeholder.png`, se = Object(U.c)({
				autoplayPref: D.d,
				showPromotedCTA: A.a,
				flairStyleTemplate: k.Y,
				showCTAExperiment: F.a
			});

			function ne(e) {
				var t;
				const {
					postId: s,
					listingKey: a,
					searchOptions: c,
					discoveryUnit: d
				} = e, l = Object(r.useRef)(), m = Object(r.useRef)(), {
					autoplayPref: u,
					flairStyleTemplate: F,
					showPromotedCTA: A,
					showCTAExperiment: D
				} = Object(i.e)(t => se(t, e)), U = Object(i.e)(e => Object(B.A)(e, {
					identifier: s
				})), Z = Object(i.e)(e => Object(M.d)(e, {
					postId: s
				})), ne = Object(i.e)(X.b), re = Object(i.e)(X.c), oe = Object(k.gb)(), ie = Object(E.b)(), ae = Object(i.d)(), ce = Object(J.a)(), {
					post: de,
					subredditOrProfile: le
				} = Object(_.d)(s), me = Object(r.useCallback)((e, t) => {
					ae(Object(g.O)(e, t))
				}, [ae]), ue = !!de.source && !Z;
				if (Object(r.useEffect)(() => (l.current && Object(b.a)(l.current, (e, t) => {
						m.current && (t ? m.current.focusContent() : m.current.pauseContent())
					}), Object(R.x)(a, de.id, c, oe, d), () => {
						l.current && Object(b.b)(l.current), m.current && m.current.stopContent(), l.current = null, m.current = null
					}), []), !de) return null;
				const {
					media: pe
				} = Z || de || {}, be = (null == pe ? void 0 : pe.type) === L.o.EMBED && (null == pe ? void 0 : pe.provider) === L.v.Twitter, he = (null == pe ? void 0 : pe.type) === L.o.VIDEO || (null == pe ? void 0 : pe.type) === L.o.GIFVIDEO;

				function Oe(e) {
					e.stopPropagation(), e.preventDefault(), de.isSponsored ? (ae(Object(g.y)(de, S.a.Click)), de.source ? de.source.outboundUrl ? Object(O.e)(de.source.outboundUrl, O.d.BLANK) : Object(O.e)(de.source.url, O.d.BLANK) : Object(O.e)(de.permalink, O.d.BLANK)) : ae(ne || re ? Object(g.Z)(Object(T.b)(de.permalink), de.id) : Object(P.a)({
						pathname: Object(T.b)(de.permalink),
						state: Object(N.b)(oe)
					}))
				}

				function ge(e) {
					de.isSponsored && he || Oe(e), de.isSponsored && function(e) {
						he || (e.stopPropagation(), e.preventDefault()), ie(Object(R.y)(de.id, c, d, a, oe))
					}(e)
				}
				return de.isBlank ? o.a.createElement(f.BlankPost, {
					onPostViewable: me,
					post: de,
					postId: de.id
				}) : o.a.createElement(_.a, {
					postId: s
				}, o.a.createElement(C.b, {
					className: $.a.postContainer,
					eventFactory: function(e, t) {
						var s;
						let n = null,
							r = w.r;
						return de.isSponsored || (r = w.t, n = null !== (s = R.E[t]) && void 0 !== s ? s : R.e.POST), r(c, oe, n, a, d)(e)
					},
					onClick: Oe,
					post: de,
					"data-click-id": "hero_unit",
					style: {
						...Object(Y.d)({
							theme: ce,
							flairStyleTemplate: F,
							redditStyle: !1
						}),
						...Object(Y.b)(F)
					}
				}, o.a.createElement(W.a, {
					"data-click-id": "background"
				}, o.a.createElement(x.a, {
					className: $.a.eventMeta,
					post: de
				}), o.a.createElement("div", {
					className: Object(n.a)($.a.postContent, {}),
					"data-click-id": "body"
				}, o.a.createElement(K.c, {
					className: $.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: de,
					subredditOrProfile: le
				}), o.a.createElement("div", {
					className: $.a.postItemTitleContainer
				}, o.a.createElement(G.c, {
					hideSourceLink: !0,
					post: de,
					size: G.b.Medium,
					isOverlay: !1
				}), !A && ue && o.a.createElement(q.a, {
					className: $.a.outboundLink,
					href: (null === (t = null == de ? void 0 : de.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: de.isSponsored,
					postId: de.id,
					source: de.source
				}, Object(V.a)(de))), function() {
					let e = o.a.createElement(o.a.Fragment, null);
					const t = !!de.source && Object(h.a)(de.source.url) || !!de.thumbnail && Object(h.a)(de.thumbnail.url),
						s = !(null == pe ? void 0 : pe.type) && t,
						r = Object(n.a)($.a.mediaWrapper, {
							[$.a.marginCancel]: A && !!de.source,
							[$.a.promotedTrend]: de.isSponsored
						});
					if (s) e = o.a.createElement("div", {
						className: r
					}, o.a.createElement(v.b, {
						className: $.a.thumbnail,
						post: de,
						templatePlaceholderImage: te,
						usePreview: !0
					}));
					else if (pe)
						if (pe.type !== L.o.RTJSON && pe.type !== L.o.TEXT) e = o.a.createElement("div", {
							className: Object(n.a)(r, be && $.a.twitterEmbed),
							onClickCapture: ge,
							ref: e => l.current = e
						}, o.a.createElement(y.a, {
							className: $.a.mediaContent,
							autoplayPref: u,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: de.isSponsored,
							post: Z || de,
							primaryContent: !0,
							scrollerItemRef: e => m.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = o.a.createElement("div", {
								className: $.a.mediaPlaceholder
							}), (pe.type === L.o.RTJSON && pe.richtextContent || pe.type === L.o.TEXT && pe.content) && Object(I.a)(de, null == ce ? void 0 : ce.subredditContext) && (e = o.a.createElement("div", {
								className: r,
								onClickCapture: Oe,
								ref: e => l.current = e
							}, o.a.createElement(y.a, {
								autoplayPref: u,
								className: $.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: Z || de,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), o.a.createElement("div", {
								className: $.a.seeMore
							}, ee._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), A && de.source && o.a.createElement(z.a, {
					className: $.a.adLinkWrapper,
					ctaExperimentDesign: D && "card"
				}, o.a.createElement(q.a, {
					className: Object(n.a)($.a.outboundLink, {
						[$.a.ctaExperiment]: D
					}),
					href: de.source.url.replace(p.a.redditUrl, ""),
					isSponsored: de.isSponsored,
					postId: de.id,
					source: de.source
				}, de.source.displayText), de.callToAction && o.a.createElement(Q.a, {
					className: $.a.adCallToAction,
					href: de.source.url.replace(p.a.redditUrl, ""),
					isSponsored: de.isSponsored,
					postId: de.id,
					source: de.source,
					showCTAExperiment: D
				}, de.callToAction)), !de.isSponsored && o.a.createElement(H.c, {
					className: Object(n.a)($.a.postItemFlatlistContainer),
					post: U || de
				}), o.a.createElement(j.d, null)))))
			}
			var re = s("./src/lib/LRUCache/index.ts"),
				oe = s("./src/reddit/components/Scroller/Simple.tsx"),
				ie = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				ae = s("./src/reddit/hooks/usePageLayer.ts"),
				ce = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const de = 376,
				le = new re.a(1);

			function me(e) {
				let {
					discoveryUnit: t,
					listingKey: s,
					searchOptions: n,
					postId: r,
					children: a
				} = e;
				const c = Object(i.d)(),
					d = Object(ae.a)();
				if (!t || !r) return null;
				const l = () => {
					const e = `entered-hero-unit-${r}`;
					let o = ie.a.get(e);
					if (void 0 === o) {
						const i = t.layout.viewTypeWeb === ce.b.PromotedTrendHero;
						o = () => {
							c((e, o) => Object(w.u)(o(), t, r, n, d, s, i))
						}, ie.a.set(e, o)
					}
					return o
				};
				return o.a.createElement(oe.b, null, (() => {
					const e = `hero-unit-search-${s}`;
					let n;
					return void 0 === (n = le.get(e)) && (n = {
						estHeight: de,
						trackOnEnteredViewport: l(),
						id: t.id,
						render: () => a
					}), le.set(e, n), [n]
				})())
			}
			var ue = s("./src/reddit/constants/page.ts"),
				pe = s("./src/reddit/helpers/trackers/screenview.ts"),
				be = s("./src/reddit/hooks/useTracking.ts"),
				he = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				Oe = s("./src/reddit/selectors/listings.ts"),
				ge = s("./src/reddit/selectors/platform.ts");
			const fe = e => {
				const t = e.listings.activeKey,
					s = e.searchDiscoveryUnits.models[t];
				return s || {}
			};
			var xe = s("./src/reddit/selectors/searchFix.ts"),
				je = s("./src/telemetry/index.ts"),
				ye = s("./src/telemetry/models/Timer.ts");
			const {
				Hero: Ce,
				PromotedTrendHero: ve
			} = ce.b;

			function Ee(e) {
				const t = Object.values(e).find(e => e.layout.viewTypeWeb === Ce || e.layout.viewTypeWeb === ve);
				if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
			}
			var Se = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx"),
				ke = s("./src/reddit/components/PostList/index.tsx"),
				_e = s("./src/reddit/components/SearchPost/index.tsx"),
				Ie = s("./src/reddit/constants/postLayout.ts"),
				Ne = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Pe = s("./src/reddit/helpers/trackers/post.ts"),
				Te = s("./src/reddit/selectors/tracking.ts"),
				we = s("./src/reddit/connectors/PostList/index.ts");
			const Re = Object(we.c)(),
				Le = Object(U.c)({
					...we.d,
					layout: () => Ie.g.Search,
					viewportDataLoaded: Te.a,
					postIds: (e, t) => {
						let {
							heroPostId: s,
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: o,
							searchDiscoveryUnit: i
						} = t;
						const a = i && i.postOrder,
							c = Ee(fe(e));
						if (a && a.length > 0) {
							if (s) {
								const t = a.indexOf(s);
								if (t > -1) return a.splice(t, 1), Object(M.X)(e, a)
							}
							return Object(M.X)(e, a)
						}
						const {
							models: d
						} = e.posts;
						return Object(M.D)(e, n, r, !!o).filter(e => d && d[e] && !d[e].isSponsored && c !== e)
					}
				}),
				Fe = (e, t, s, n) => {
					if (s) return Object(Pe.k)(e, t);
					const {
						listingKey: r,
						searchOptions: o,
						pageLayer: i,
						searchDiscoveryUnit: a,
						sendEvent: c
					} = n;
					return c(Object(R.s)(e, o, i, R.E[t], r, a)), Object(Pe.k)(e, t)
				},
				Me = Object(i.b)(Le, (e, t) => ({
					...Object(we.b)(e),
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(R.x)(t.listingKey, e, t.searchOptions, t.pageLayer, t.searchDiscoveryUnit))
					}
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					openPost: e => t.openPost(e),
					postClickEventFactory: Fe,
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? Ne.a : _e.a
					}
				}));
			const Be = (e => Object(E.c)(Re(Me(e))))(ke.a),
				Ae = () => null,
				De = Object(U.c)({
					viewTreatment: B.D,
					searchDiscoveryUnitsModels: fe,
					hasPostResults: B.o,
					apiPending: Oe.d,
					postIds: M.z,
					posts: M.y,
					loadMore: Oe.g,
					isOverlayOpen: ge.i
				});

			function Ue(e) {
				const {
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: a
				} = e, p = Object(ae.a)(), b = Object(be.a)(), h = Object(i.d)(), {
					viewTreatment: O,
					searchDiscoveryUnitsModels: g,
					hasPostResults: f,
					postIds: x,
					isOverlayOpen: j,
					apiPending: y
				} = Object(i.e)(t => De(t, e)), C = Object(l.a)(j), v = Object(r.useRef)(!1), E = void 0 === y || y, S = (e, s) => b(Object(pe.t)(t, a, s, e, p, Object(xe.b)({
					pageLayer: p
				})));
				let k;
				Object(r.useEffect)(() => {
					f && !c()(x) && P()
				}, [f, x]), Object(r.useEffect)(() => {
					C && !j && P()
				}, [j, C]), O === ce.c.Trending && (k = Ee(g));
				const _ = Object(m.a)(a.q || ""),
					I = Object(r.useMemo)(() => Object.values(g).find(e => e.name === he.l || e.name === he.f), [g]),
					N = k && I;

				function P() {
					if (je.c.has(t) || !v.current) {
						v.current = !0;
						const e = je.c.has(t) ? je.c.end(t) : 0;
						S(e, ye.TimerType.InApp)
					}
				}
				return f || N || E ? o.a.createElement(o.a.Fragment, null, N && o.a.createElement(me, {
					key: k,
					postId: k,
					discoveryUnit: I,
					searchOptions: a,
					listingKey: t
				}, o.a.createElement(ne, {
					key: k,
					discoveryUnit: I,
					postId: k,
					listingKey: t,
					searchOptions: a
				})), (f || E) && o.a.createElement(Be, {
					key: "posts",
					listingKey: t,
					listingName: s,
					location: n,
					inSubredditOrProfile: !1,
					noPostsComponent: Ae,
					onLoadMore: function() {
						h(Object(u.n)([d.ic.Posts]))
					},
					searchOptions: a
				})) : o.a.createElement(Se.a, {
					query: _,
					type: Se.b.Posts,
					searchOptions: a,
					tab: ue.h.Posts
				})
			}
			var Ve = s("./src/reddit/selectors/experiments/optimizedSerpPosts.ts"),
				We = s("./node_modules/lodash/constant.js"),
				Ge = s.n(We),
				He = s("./node_modules/lodash/times.js"),
				Ke = s.n(He),
				qe = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				ze = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				Qe = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				Ye = s.n(Qe);
			const Je = e => {
				const {
					listingKey: t,
					searchOptions: s,
					originElement: n
				} = e, r = Object(i.e)(e => Object(B.d)(e, {
					listingKey: t
				})), a = Object(i.e)(e => Object(B.u)(e, {
					listingKey: t
				})), c = Boolean(a && a.token) && r.length > 0;
				return o.a.createElement("div", {
					className: Ye.a.container,
					"data-testid": "comments-list"
				}, o.a.createElement(qe.b, {
					identifiers: r,
					listingKey: t,
					searchOptions: s,
					componentType: qe.c.Comments,
					originElement: n,
					fireScreenview: !0
				}), c && o.a.Children.toArray(Ke()(3, Ge()(o.a.createElement(ze.a, {
					className: Ye.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var Xe = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx");
			const Ze = (e, t) => Boolean(t && t.token) && e.length > 0,
				$e = e => {
					const {
						listingKey: t,
						searchOptions: s
					} = e, n = Object(i.e)(e => Object(B.g)(e, {
						listingKey: t
					})), r = Object(i.e)(e => Object(B.v)(e, {
						listingKey: t
					}));
					return o.a.createElement("div", {
						className: Ye.a.container,
						"data-testid": "communities-list"
					}, !s.is_multi && o.a.createElement(qe.b, {
						identifiers: n,
						listingKey: t,
						searchOptions: s,
						componentType: qe.c.Subreddits,
						fireScreenview: !0
					}), Ze(n, r) && o.a.Children.toArray(Ke()(3, Ge()(o.a.createElement(Xe.a, {
						className: Ye.a.loadMoreItem,
						isLoading: !0
					})))))
				};
			var et = s("./src/reddit/components/SearchResultsContent/index.m.less"),
				tt = s.n(et);
			const st = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(i.e)(e => Object(B.a)(e, {
					listingKey: t
				})), r = Object(i.e)(e => Object(B.t)(e, {
					listingKey: t
				}));
				return o.a.createElement("div", {
					className: Ye.a.container,
					"data-testid": "people-list"
				}, !s.is_multi && o.a.createElement(qe.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: qe.c.Users,
					fireScreenview: !0
				}), Ze(n, r) && o.a.Children.toArray(Ke()(3, Ge()(o.a.createElement(Xe.a, {
					className: Ye.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var nt = s("./src/reddit/components/SearchPost/Placeholder.tsx");
			const rt = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e;
				let n = Object(i.e)(e => Object(B.x)(e, {
					listingKey: t
				}));
				const a = Object(i.e)(e => Object(B.w)(e, {
						listingKey: t
					})),
					c = Object(i.e)(e => Object(B.D)(e)),
					d = Object(i.e)(e => fe(e));
				let l;
				c === ce.c.Trending && (l = Ee(d));
				const m = Object(r.useMemo)(() => Object.values(d).find(e => e.name === he.l || e.name === he.f), [d]);
				if (l && m) {
					const e = (n = [...n]).indexOf(l);
					n.splice(e, 1)
				}
				return o.a.createElement(o.a.Fragment, null, l && m && o.a.createElement(me, {
					key: l,
					postId: l,
					discoveryUnit: m,
					searchOptions: s,
					listingKey: t
				}, o.a.createElement(ne, {
					key: l,
					discoveryUnit: m,
					postId: l,
					listingKey: t,
					searchOptions: s
				})), o.a.createElement("div", {
					className: Ye.a.container,
					"data-testid": "posts-list"
				}, o.a.createElement(qe.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: qe.c.Posts,
					fireScreenview: !0
				}), function(e, t) {
					return Boolean(t && t.token) && e.length > 0
				}(n, a) && o.a.Children.toArray(Ke()(3, Ge()(o.a.createElement(nt.a, {
					className: Ye.a.loadMoreItem,
					isLoading: !0
				}))))))
			};
			var ot = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/SearchResultsScreen.tsx");

			function it(e) {
				const {
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: a,
					tab: c
				} = e, d = Object(i.e)(e => Object(B.n)(e, {
					listingKey: t
				})), l = Object(i.e)(e => Object(B.l)(e, {
					listingKey: t
				})), m = Object(i.e)(e => Object(B.m)(e, {
					listingKey: t
				})), u = Object(i.e)(e => Object(B.p)(e, {
					listingKey: t
				})), p = Object(i.e)(e => Object(Ve.a)(e));
				return o.a.createElement("div", {
					className: Object(n.a)(tt.a.resultsContainer)
				}, c === ue.h.Listings ? o.a.createElement(ot.a, {
					hasResults: d,
					searchOptions: a,
					noResultsType: Se.b.Communities,
					searchResultsTab: ue.h.Listings,
					listingKey: t,
					pendingSelector: B.i
				}, o.a.createElement($e, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.Listings
				})) : c === ue.h.People ? o.a.createElement(ot.a, {
					hasResults: l,
					searchOptions: a,
					noResultsType: Se.b.People,
					searchResultsTab: ue.h.People,
					listingKey: t,
					pendingSelector: B.c
				}, o.a.createElement(st, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.People
				})) : c === ue.h.Comments ? o.a.createElement(ot.a, {
					hasResults: m,
					searchOptions: a,
					noResultsType: Se.b.Comments,
					searchResultsTab: ue.h.Comments,
					listingKey: t,
					pendingSelector: B.f
				}, o.a.createElement(Je, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.Comments
				})) : p ? o.a.createElement(ot.a, {
					hasResults: u,
					searchOptions: a,
					noResultsType: Se.b.Posts,
					searchResultsTab: ue.h.Posts,
					listingKey: t,
					pendingSelector: B.z
				}, o.a.createElement(rt, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.Comments
				})) : o.a.createElement(Ue, {
					key: t,
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: a
				}))
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx");

			function c(e) {
				const {
					hasResults: t,
					searchBarId: s,
					searchOptions: n,
					noResultsType: c,
					searchResultsTab: d,
					pendingSelector: l
				} = e, m = Object(o.a)(n.q || ""), u = Object(i.e)(t => l(t, e)), p = void 0 === u || u;
				return r.a.createElement(r.a.Fragment, null, t || p ? e.children : r.a.createElement(a.a, {
					searchBarId: s,
					searchOptions: n,
					query: m,
					type: c,
					tab: d
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/selectors/searchFix.ts"),
				r = s("./src/reddit/selectors/subreddit.ts");
			const o = (e, t) => {
				const s = Object(n.a)(e, t);
				return s ? Object(r.C)(e, {
					subredditName: s
				}) : null
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
		"./src/reddit/components/SearchResultsNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return V
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/noop.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/constants/colors.ts"),
				m = s("./src/lib/makeSearchKey/index.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts");
			const b = () => {
				const [e, t] = Object(i.useState)(!1);
				return Object(i.useEffect)(() => {
					var e;
					const s = null !== (e = Object(p.A)("should-show-comment-tab-tooltip")) && void 0 !== e ? e : 2;
					t(Boolean(s)), 2 === s ? Object(p.zb)("should-show-comment-tab-tooltip", 1) : 1 === s && Object(p.zb)("should-show-comment-tab-tooltip", !1)
				}, []), {
					get shouldShowCommentTabTooltip() {
						return e
					},
					resetShowCommentTabTooltip() {
						e && t(!1)
					}
				}
			};
			var h = s("./src/reddit/constants/page.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				x = s("./src/reddit/helpers/trackers/searchResults.ts"),
				j = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				y = s("./src/reddit/hooks/useTracking.ts"),
				C = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				v = s("./src/reddit/selectors/searchResults.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				k = s("./node_modules/history/esm/history.js"),
				_ = s("./node_modules/react-router-redux/es/index.js"),
				I = s("./src/lib/addQueryParams/index.ts"),
				N = s("./src/lib/classNames/index.ts"),
				P = s("./src/lib/colors/constants.ts"),
				T = s("./src/reddit/constants/parameters.ts"),
				w = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				R = s("./src/reddit/hooks/usePageLayer.ts"),
				L = s("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				F = s("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less"),
				M = s.n(F);
			const B = "safe-search-toggle";

			function A(e) {
				let {
					searchOptions: t
				} = e;
				const s = Object(y.a)(),
					[r, o] = a.a.useState(!0);
				Object(i.useEffect)(() => {
					var e;
					o(null), p(!!(null === (e = null == O ? void 0 : O.queryParams) || void 0 === e ? void 0 : e.include_over_18))
				}, []);
				const d = Object(j.a)({}),
					{
						nsfwSessionSetting: m,
						setNsfwSessionSetting: p
					} = Object(L.b)(),
					{
						shouldShowTooltip: b,
						resetShowTooltip: h
					} = Object(L.c)(!m);
				Object(i.useEffect)(() => {
					if (b) return window.addEventListener("click", h), () => {
						window.removeEventListener("click", h)
					}
				}, [b]);
				const O = Object(R.a)(),
					g = Object(c.d)();
				d.arrowProps.style = {
					...d.arrowProps.style,
					borderBottom: `3px solid ${l.a.alien600}`
				}, d.popperProps.style = {
					...d.popperProps.style,
					backgroundColor: l.a.alien600,
					top: "4px",
					maxWidth: "360px",
					textAlign: "center"
				};
				const C = null != r ? r : !m;
				return a.a.createElement("div", {
					className: Object(N.a)(M.a.searchNSFWToggle),
					"data-testid": B,
					onMouseEnter: d.show,
					onMouseLeave: d.hide
				}, a.a.createElement("label", {
					htmlFor: B,
					className: Object(N.a)(M.a.searchNSFWToggleLabel)
				}, n.fbt._("Safe Search", null, {
					hk: "x1C2Y"
				})), a.a.createElement(w.a, {
					activeColorOverride: P.a,
					id: B,
					onToggle: function() {
						var e;
						s(Object(x.i)(!C, t, O));
						const n = !m;
						p(n);
						const {
							include_over_18: r,
							...o
						} = (null == O ? void 0 : O.queryParams) || {}, i = (null === (e = null == O ? void 0 : O.routeMatch) || void 0 === e ? void 0 : e.match.url) || f.a, a = {
							...o,
							...n && {
								[T.l]: "1"
							}
						}, c = {
							pathname: i,
							search: Object(I.a)("", {
								...a
							})
						};
						g(Object(_.b)(Object(k.c)(c)))
					},
					on: C,
					redditStyle: !0,
					ref: d.target.ref
				}), a.a.createElement(u.a, {
					visible: b || d.visible,
					arrowProps: d.arrowProps,
					popperProps: d.popperProps
				}, C ? n.fbt._("You won’t see adult or Not Safe for Work (NSFW) search results unless you turn Safe Search off", null, {
					hk: "tefl0"
				}) : n.fbt._("You’ll see adult and Not Safe for Work (NSFW) search results unless you turn Safe Search on", null, {
					hk: "1SDOFf"
				})))
			}
			var D = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				U = s.n(D);

			function V(e) {
				let {
					activeTab: t,
					searchOptions: s,
					searchSwitcher: r
				} = e;
				const p = Object(y.a)(),
					k = Object(c.e)(E.mb),
					_ = Object(c.e)(v.D),
					I = Object(O.gb)(),
					N = _ === C.c.Trending,
					P = Object(j.a)({}),
					{
						shouldShowCommentTabTooltip: T,
						resetShowCommentTabTooltip: w
					} = b();
				P.arrowProps.style = {
					...P.arrowProps.style,
					borderLeft: "4px solid transparent",
					borderRight: "4px solid transparent",
					top: "-3px",
					left: "50%",
					transform: "translateX(-50%)",
					borderBottom: `3px solid ${l.a.alien600}`
				}, P.popperProps.style = {
					...P.popperProps.style,
					backgroundColor: l.a.alien600,
					top: "100%",
					left: "50%",
					transform: "translateX(-50%)",
					whiteSpace: "nowrap"
				}, Object(i.useEffect)(() => {
					if (T) return window.addEventListener("click", w), () => {
						window.removeEventListener("click", w)
					}
				}, [T]);
				const R = {
						condition: !0,
						active: t === h.h.Posts,
						target: x.b.Posts,
						contentType: d.ic.Posts,
						text: n.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					},
					L = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === h.h.Listings,
						target: x.b.Communities,
						contentType: d.ic.Subreddits,
						text: n.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					},
					F = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === h.h.People,
						target: x.b.People,
						contentType: d.ic.Users,
						text: n.fbt._("People", null, {
							hk: "Ttxbf"
						})
					},
					M = [R, {
						condition: !(s.source === m.a.Trending || s.source === m.a.PromotedTrend),
						active: t === h.h.Comments,
						target: x.b.Comments,
						contentType: d.ic.Comments,
						text: n.fbt._("Comments", null, {
							hk: "z0DGA"
						}),
						showTooltip: !0
					}, L, F],
					B = k && !N && "1" !== s.sr_nsfw;
				return a.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: U.a.searchResultsNav
				}, a.a.createElement("div", {
					className: U.a.pillRow,
					role: "tablist"
				}, M.filter(e => e.condition).map(e => {
					const {
						active: t,
						target: r,
						text: i,
						contentType: c
					} = e;
					return a.a.createElement(g.default, {
						key: r,
						"data-testid": r,
						to: Object(f.b)({
							searchType: c,
							pageLayer: I
						}),
						"aria-selected": t,
						role: "tab",
						className: U.a.pillElement,
						onClick: () => (e => {
							e.active || p(Object(x.n)(e.target, s))
						})(e)
					}, a.a.createElement(u.a, {
						visible: Boolean(e.showTooltip) && T,
						arrowProps: P.arrowProps,
						popperProps: P.popperProps
					}, n.fbt._("Now you can search comments!", null, {
						hk: "LePo6"
					})), a.a.createElement(S.a, {
						active: t,
						onClick: o.a,
						variant: S.b.TAB_GROUP
					}, i))
				})), r && a.a.createElement("div", {
					className: U.a.searchSwitcherContainer
				}, r), B && a.a.createElement("div", {
					className: U.a.nsfwToggleContainer
				}, a.a.createElement(A, {
					searchOptions: s
				})))
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
		"./src/reddit/components/SearchResultsSidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return D
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/config.ts"),
				l = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				m = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				u = s.n(m),
				p = s("./src/lib/lessComponent.tsx");
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = p.a.div("ButtonContainer", u.a), O = p.a.div("Container", u.a), g = p.a.img("BannerImg", u.a), f = p.a.img("SnooImg", u.a), x = p.a.div("CommunityText", u.a);
			var j = () => o.a.createElement(O, null, o.a.createElement(g, {
					src: `${d.a.assetPath}/img/search-results-community-banner.png`
				}), o.a.createElement(f, {
					src: `${d.a.assetPath}/img/snoo-thinking.png`
				}), o.a.createElement(x, null, b._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), o.a.createElement(h, null, o.a.createElement(l.a, {
					className: u.a.Button,
					eventSource: "sidebar"
				}))),
				y = s("./src/reddit/components/IdCard/async.tsx"),
				C = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				v = s("./src/reddit/components/SidebarContainer/index.tsx"),
				E = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				S = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				k = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				I = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				N = s("./src/reddit/hooks/usePageLayer.ts"),
				P = s("./src/reddit/selectors/platform.ts"),
				T = s("./src/reddit/selectors/searchResults.ts"),
				w = s("./src/reddit/selectors/subreddit.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/selectors/widgets.ts"),
				F = s("./src/reddit/components/SearchResultsSidebar/index.m.less"),
				M = s.n(F);
			const B = Object(a.c)({
					authorIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.a)(e, {
							listingKey: s
						})
					},
					authorLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.t)(e, {
							listingKey: s
						})
					},
					communityIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.g)(e, {
							listingKey: s
						})
					},
					communitiesLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.v)(e, {
							listingKey: s
						})
					},
					currentSubreddit: P.e,
					isLoggedIn: R.S,
					hasCommunityResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.n)(e, {
							listingKey: s
						})
					},
					hasAuthorResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.l)(e, {
							listingKey: s
						})
					},
					subredditId: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(w.I)(e, s)
					},
					postFlairWidgets: (e, t) => {
						let {
							listingName: s
						} = t;
						const n = Object(w.I)(e, s);
						return Object(L.g)(e, {
							subredditId: n
						})
					},
					idCardWidget: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(L.d)(e, {
							subredditName: s
						})
					}
				}),
				A = e => {
					let {
						authorIdentifiers: t,
						authorLoadMore: s,
						className: r,
						communityIdentifiers: i,
						communitiesLoadMore: a,
						hasAuthorResults: d,
						hasCommunityResults: l,
						listingKey: m,
						listingName: u,
						idCardWidget: p,
						isLoggedIn: b,
						postFlairWidgets: h,
						searchOptions: O,
						currentSubreddit: g
					} = e;
					const f = Boolean(g && u === g.name && O.restrict_sr),
						x = !!O.is_multi,
						P = i.length > C.a || !!a,
						T = t.length > C.a || !!s;
					let w;
					const R = Object(N.a)();
					return f ? w = o.a.createElement(o.a.Fragment, null, p && o.a.createElement(y.a, {
						listingName: u
					}), h && h.map((e, t) => o.a.createElement(E.a, {
						key: `widgetSpacer-${t}`
					}, o.a.createElement(k.a, {
						subredditName: u,
						widget: e
					})))) : x || (w = o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: M.a.container,
						"data-testid": "communities-list"
					}, o.a.createElement("h4", {
						className: M.a.header
					}, n.fbt._("Communities", null, {
						hk: "3cMR66"
					})), l ? o.a.createElement(o.a.Fragment, null, !O.is_multi && o.a.createElement(C.b, {
						componentType: C.c.Subreddits,
						identifiers: i,
						listingKey: m,
						searchOptions: O,
						sidebar: !0
					}), P && o.a.createElement(_.default, {
						to: Object(I.b)({
							searchType: c.ic.Subreddits,
							pageLayer: R
						})
					}, o.a.createElement("p", {
						className: M.a.link
					}, n.fbt._("See more communities", null, {
						hk: "2VoaHj"
					})))) : o.a.createElement("p", {
						className: M.a.noResults
					}, n.fbt._("No results", null, {
						hk: "3feoKq"
					}))), o.a.createElement("div", {
						className: M.a.container,
						"data-testid": "authors-list"
					}, o.a.createElement("h4", {
						className: M.a.header
					}, n.fbt._("People", null, {
						hk: "2M8TqB"
					})), d ? o.a.createElement(o.a.Fragment, null, !O.is_multi && o.a.createElement(C.b, {
						componentType: C.c.Users,
						identifiers: t,
						listingKey: m,
						searchOptions: O,
						sidebar: !0
					}), T && o.a.createElement(_.default, {
						to: Object(I.b)({
							searchType: c.ic.Users,
							pageLayer: R
						})
					}, o.a.createElement("p", {
						className: M.a.link
					}, n.fbt._("See more people", null, {
						hk: "yjtZU"
					})))) : o.a.createElement("p", {
						className: M.a.noResults
					}, n.fbt._("No results", null, {
						hk: "3qx6oy"
					}))), b && o.a.createElement("div", {
						className: M.a.container
					}, o.a.createElement(j, null)))), o.a.createElement(v.a, {
						"data-testid": "search-results-sidebar",
						className: r
					}, w, o.a.createElement(S.a, null))
				},
				D = e => {
					const t = Object(i.e)(t => B(t, e)),
						s = {
							...e,
							...t
						};
					return o.a.createElement(A, s)
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
		"./src/reddit/components/SearchResultsSubNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return he
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/constants/page.ts"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/selectors/searchResults.ts"),
				O = s("./src/lib/addQueryParams/index.ts");
			const g = (e, t, s, n, r, o) => {
				const i = e && e[s],
					a = {};
				let c = Object(O.a)(t, {
					[s]: r
				});
				const d = [];
				for (const l of n) {
					const e = Object(O.a)(t, {
						[s]: l
					});
					a[e] = o[l](), d.push(e), i === l && (c = e)
				}
				return {
					optionLabels: a,
					options: d,
					value: c
				}
			};
			var f = s("./src/higherOrderComponents/asTooltip.tsx"),
				x = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/index.tsx"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/actions/tooltip.ts"),
				v = s("./src/reddit/selectors/tooltip.ts");
			const E = Object(i.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(v.b)(s)(e)
				}
			});
			var S = s("./src/reddit/components/SearchResultsSubNav/Select/index.m.less"),
				k = s.n(S),
				_ = s("./node_modules/query-string/index.js"),
				I = s.n(_),
				N = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/constants/history.ts"),
				w = s("./src/reddit/controls/Dropdown/Row.tsx"),
				R = s("./src/reddit/helpers/history/index.ts"),
				L = s("./node_modules/lodash/fromPairs.js"),
				F = s.n(L),
				M = s("./src/lib/extractQueryParams/index.ts"),
				B = s("./src/reddit/helpers/correlationIdTracker.ts"),
				A = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				D = s("./src/reddit/helpers/trackers/searchResults.ts"),
				U = s("./src/reddit/selectors/telemetry.ts");
			const V = (e, t) => {
					const s = F()([...Object(M.a)(e)]);
					return Object(m.zc)(s.sort) && (t.sort = s.sort), Object(m.Ac)(s.t) && (t.t = s.t), t
				},
				W = (e, t, s, n) => () => e(e => {
					const r = U.H(e, null);
					return {
						...Object(D.g)(e),
						source: "search",
						action: "click",
						noun: t,
						correlationId: Object(B.c)(B.a.SearchResults),
						actionInfo: Object(D.l)(e, null, r),
						search: U.db(e, V(s, n), A.a.SERP)
					}
				}),
				G = e => {
					let {
						isSelected: t,
						option: s,
						searchOptions: n,
						type: o,
						styles: i,
						displayText: c
					} = e;
					const d = Object(P.b)();
					return r.a.createElement(N.a, {
						key: s,
						to: {
							pathname: I.a.parseUrl(s).url,
							state: {
								[T.b.SearchOriginPage]: Object(R.b)(T.b.SearchOriginPage)
							},
							search: s.replace(I.a.parseUrl(s).url + "?", "")
						},
						onClick: W(d, o, s, n)
					}, r.a.createElement(w.b, {
						className: Object(a.a)(i.SelectOption, t && i.mIsSelected),
						displayText: c,
						isSelected: t
					}))
				};
			var H = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less"),
				K = s.n(H);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const z = Object(f.a)(e => r.a.createElement(j.a, q({
					className: k.a.Component
				}, e))),
				Q = e => {
					let {
						active: t,
						label: s,
						options: n,
						optionLabels: i,
						searchOptions: c,
						tooltipId: d,
						type: l,
						value: m,
						...u
					} = e;
					const {
						isOpen: p,
						onClick: b
					} = (e => {
						const {
							isOpen: t
						} = Object(o.e)(t => E(t, {
							tooltipId: e
						})), s = Object(o.d)();
						return {
							isOpen: t,
							onClick: t ? () => s(Object(C.i)()) : () => s(Object(C.f)({
								tooltipId: e
							}))
						}
					})(d);
					return r.a.createElement("div", {
						className: k.a.Wrapper
					}, r.a.createElement(x.a, q({}, u, {
						active: p,
						className: Object(a.a)(k.a.filterButton, t && k.a.hasValue),
						onClick: b,
						variant: x.b.TAB_GROUP
					}), s, r.a.createElement(y.a, {
						name: "caret_down",
						className: Object(a.a)(k.a.caret, p && k.a.caretOpen)
					})), r.a.createElement("div", {
						id: d
					}, r.a.createElement(z, {
						className: k.a.Dropdown,
						isOpen: p,
						tooltipId: d
					}, n.map((e, t) => r.a.createElement(G, {
						displayText: i[e],
						key: t,
						isSelected: e === m,
						option: e,
						searchOptions: c,
						styles: {
							mIsSelected: K.a.mIsSelected,
							SelectOption: K.a.SelectOption
						},
						type: l
					})))))
				},
				Y = {
					[u.h.Posts]: [m.fc.Relevance, m.fc.Hot, m.fc.Top, m.fc.New, m.fc.Comments],
					[u.h.Comments]: [m.fc.Relevance, m.fc.Top, m.fc.New]
				},
				J = {
					[m.fc.Hot]: () => p.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[m.fc.Relevance]: () => p.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[m.fc.Top]: () => p.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[m.fc.New]: () => p.fbt._("New", null, {
						hk: "23egpt"
					}),
					[m.fc.Comments]: () => p.fbt._("Most Comments", null, {
						hk: "4k1FoM"
					})
				};

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = [m.oc.HOUR, m.oc.DAY, m.oc.WEEK, m.oc.MONTH, m.oc.YEAR, m.oc.ALL],
				$ = {
					[m.oc.HOUR]: () => p.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[m.oc.DAY]: () => p.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[m.oc.WEEK]: () => p.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[m.oc.MONTH]: () => p.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[m.oc.YEAR]: () => p.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[m.oc.ALL]: () => p.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				};

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const te = {
					[u.h.Posts]: [m.ec.Sort, m.ec.Time],
					[u.h.Comments]: [m.ec.Sort]
				},
				se = {
					[m.ec.Sort]: e => {
						let t = Object(o.e)(h.C);
						t = t !== m.Vb ? t : void 0;
						const {
							options: s,
							optionLabels: n,
							value: i
						} = g(e.queryParams, e.url, b.D, Y[e.tab], t || m.Vb, J), a = {
							"data-testid": "search-results-filter-sort",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: i
						}, c = Boolean(e.queryParams[b.D] || t);
						return r.a.createElement(Q, X({}, a, {
							active: c,
							label: c ? n[i] : p.fbt._("Sort", null, {
								hk: "2COMme"
							}),
							type: m.ec.Sort
						}))
					},
					[m.ec.Time]: e => {
						const t = Object(o.e)(h.C),
							{
								options: s,
								optionLabels: n,
								value: i
							} = g(e.queryParams, e.url, b.I, Z.slice().reverse(), m.Wb, $);
						if (!e.searchOptions || e.searchOptions.sort === m.bb.NEW || e.searchOptions.sort === m.bb.HOT || t === m.bb.NEW || t === m.bb.HOT) return null;
						const a = {
							"data-testid": "search-results-filter-time",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: i
						};
						return r.a.createElement(Q, ee({}, a, {
							active: Boolean(e.queryParams[b.I]),
							label: e.queryParams[b.I] ? n[i] : p.fbt._("Time", null, {
								hk: "3hL0P3"
							}),
							type: m.ec.Filter
						}))
					}
				};
			var ne = s("./src/lib/lessComponent.tsx"),
				re = s("./src/reddit/controls/Button/index.tsx"),
				oe = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				ie = s("./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less"),
				ae = s.n(ie);
			const {
				fbt: ce
			} = s("./node_modules/fbt/lib/FbtPublic.js"), de = ne.a.wrapped(re.r, "TertiaryButton", ae.a), le = ne.a.wrapped(de, "AllRedditResultsButton", ae.a), me = e => {
				const t = Object(P.b)();
				return r.a.createElement(N.a, {
					to: Object(oe.a)(e.queryParams)
				}, r.a.createElement(le, {
					onClick: () => {
						t(t => ({
							...Object(D.g)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, ce._("All reddit results", null, {
					hk: "2IBCsX"
				}), r.a.createElement(y.a, {
					name: "forward"
				})))
			};
			var ue = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				pe = s.n(ue);
			const be = Object(i.c)({
					subreddit: l.C
				}),
				he = e => {
					var t;
					const {
						subreddit: s
					} = Object(o.e)(t => be(t, e)), n = Object(c.gb)(), i = Object(c.Z)(n), l = Object(c.fb)(n), m = s && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
					return r.a.createElement(d.a, {
						className: Object(a.a)(pe.a.ComponentRedesign),
						"data-testid": "search-results-subnav"
					}, null === (t = te[e.tab]) || void 0 === t ? void 0 : t.map((t, s) => {
						const n = se[t];
						return r.a.createElement(n, {
							key: s,
							queryParams: i,
							searchOptions: e.searchOptions,
							tab: e.tab,
							url: l
						})
					}), m && r.a.createElement(me, {
						queryParams: i,
						searchOptions: e.searchOptions
					}))
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
		"./src/reddit/components/SearchSwitcher/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				i = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/ThemeProvider/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/history.ts"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/helpers/history/index.ts"),
				h = s("./src/reddit/helpers/trackers/searchResults.ts"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				f = s.n(g);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(h.C)(!!s, e))
					}
				}
				render() {
					const {
						redesign: e,
						subreddit: t,
						url: s
					} = this.props, n = {
						[f.a.mSr]: !!t
					}, {
						pathname: o,
						search: l
					} = i.a.parse(s), m = t ? c.gc.ToSubreddit : c.gc.ToGlobal, h = t ? r.a.createElement(r.a.Fragment, null, r.a.createElement("span", null, x._("Show results from", null, {
						hk: "3aVDvz"
					})), r.a.createElement(d.b, {
						className: f.a.subredditIcon,
						subredditOrProfile: t
					}), r.a.createElement("p", {
						className: Object(a.a)(f.a.searchSwitcherText, n)
					}, t.displayText)) : r.a.createElement(r.a.Fragment, null, x._("{=Show results from}{=all of Reddit}", [x._param("=Show results from", r.a.createElement("span", null, x._("Show results from", null, {
						hk: "4l8fSw"
					}))), x._param("=all of Reddit", r.a.createElement("p", {
						className: Object(a.a)(f.a.searchSwitcherText, n)
					}, x._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return r.a.createElement(p.default, {
						className: Object(a.a)(f.a.searchSwitcher, e && f.a.redesign, n),
						"data-testid": "search-switcher-link",
						onClick: this.onClick,
						to: {
							pathname: o,
							search: l,
							state: {
								searchSwitcherType: m,
								[u.b.SearchOriginPage]: Object(b.b)(u.b.SearchOriginPage)
							}
						}
					}, h, r.a.createElement(O.a, {
						name: "forward",
						className: Object(a.a)(f.a.arrowIcon, n)
					}))
				}
			}
			t.a = Object(m.c)(e => e.subreddit ? r.a.createElement(l.b, {
				subredditName: e.subreddit.name
			}, r.a.createElement(j, e)) : r.a.createElement(j, e))
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
		"./src/reddit/components/SearchWarnings/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				c = s("./src/reddit/components/SearchWarnings/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function m(e) {
				let {
					className: t,
					isQuarantined: s,
					isNSFW: n,
					isSpoiler: c
				} = e;
				return s || n || c ? r.a.createElement("div", {
					className: t
				}, s ? r.a.createElement("span", {
					className: Object(o.a)(d.a.warningText, d.a.quarantineWarning)
				}, r.a.createElement(a.a, {
					className: Object(o.a)(d.a.warningIcon, d.a.quarantineIcon)
				}), l._("quarantined", null, {
					hk: "1j7soK"
				})) : null, n ? r.a.createElement("span", {
					className: Object(o.a)(d.a.warningText, d.a.nsfwWarning)
				}, r.a.createElement(i.a, {
					name: "nsfw_fill",
					className: Object(o.a)(d.a.warningIcon)
				}), l._("nsfw", null, {
					hk: "2IetSA"
				})) : null, c ? r.a.createElement("span", {
					className: Object(o.a)(d.a.warningText, d.a.spoilerWarning)
				}, r.a.createElement(i.a, {
					name: "spoiler_fill",
					className: Object(o.a)(d.a.warningIcon)
				}), l._("spoiler", null, {
					hk: "3SHbs3"
				})) : null) : null
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/constants/location.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/selectors/experiments/countrySites.ts"),
				O = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				g = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				f = s("./src/reddit/selectors/meta.ts"),
				x = s("./src/redditGQL/types.ts"),
				j = s("./src/reddit/components/SidebarFooter/index.m.less"),
				y = s.n(j);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = c.a.a("Link", y.a), E = Object(i.c)({
				countryCode: f.b,
				d2xPdpSideRailRecsVariant: O.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: O.b,
				isNavbarLikeMwebEnabled: g.a
			}), S = Object(o.b)(E), k = Object(p.v)({
				isFrontpage: p.B,
				isCountrySitePage: p.z
			}), _ = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return r.a.createElement("div", {
					className: y.a.GreyRereddit
				}, s, !!u.c[t] && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/impressum"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), t === x.k.De && r.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(v, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), t === x.k.De && r.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: y.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = k(S(Object(d.c)(e => {
				const t = Object(o.f)().getState(),
					s = Object(h.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.Xc.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.Xc.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.Xc.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(_, {
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
					return s.includes(t) || "en" === t ? r.a.createElement(v, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, n[t]) : null
				};
				return r.a.createElement(l.a, {
					className: y.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!u.c[e.countryCode] && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/impressum"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === x.k.De && r.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(v, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === x.k.De && r.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, n("en"), n("fr"), n("it")), r.a.createElement("div", {
					className: y.a.Column
				}, n("de"), n("es"), n("pt"))), r.a.createElement("div", {
					className: y.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
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
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/BackToTop/index.tsx"),
				l = s("./src/reddit/components/SidebarFooter/index.tsx"),
				m = s("./src/reddit/constants/componentSizes.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = s.n(p),
				h = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = c.g[1] + 24,
				f = m.f + 8,
				x = f + 152 + 16,
				j = x + g + 8,
				y = h.a.div("Container", b.a),
				C = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return a.a.createElement(d.a, O({
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
						shouldStickToBottom: i
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(s, {
							[b.a.BottomStickyStyles]: i,
							[b.a.StickyStyles]: !i && o && !r,
							[b.a.StickyStylesFakeOverlay]: !i && !!r
						})
					}, t)
				};
			class E extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > j,
						shouldFooterSticky: this.windowHeight > x
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
							pageLayer: i,
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, m = this.state.isAdSticky && !(!t && !n), u = this.state.isBottomSticky;
					return a.a.createElement(y, {
						className: r,
						innerRef: this.setWrapperRef
					}, a.a.createElement(v, {
						isFakeOverlay: s,
						isSticky: m,
						shouldStickToBottom: u
					}, t, n, c, !o && a.a.createElement(l.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && a.a.createElement(C, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/helpers/correlationIdTracker.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				x = s("./src/reddit/helpers/trackers/postFlair.ts"),
				j = s("./src/reddit/models/Widgets/index.ts"),
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
					filterName: e => Object(h.Z)(e)[b.i],
					url: e => Object(h.fb)(e)
				}),
				_ = Object(a.c)({
					subredditId: (e, t) => Object(y.I)(e, t.subredditName)
				}),
				I = Object(i.b)(_),
				N = l.a.div("WidgetContent", v.a),
				P = e => {
					let {
						display: t,
						isFlairFilter: s,
						onMouseDown: n,
						onClick: r,
						...i
					} = e;
					return o.a.createElement("li", {
						className: Object(c.a)(v.a.StyledFlair, t === j.g.Cloud && v.a.cloudDisplay, {
							[v.a.flairFilter]: s,
							[v.a["m-selected"]]: i.isSelected
						}),
						onClick: () => null == r ? void 0 : r(Object(f.g)(i.flair)),
						onMouseDown: n
					}, o.a.createElement(m.c, E({}, i, {
						className: v.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class T extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(x.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(x.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(x.d)())
					}, this.onClickFlair = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(g.d)(g.a.SearchResults), this.props.sendEvent(Object(x.b)(t))
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
					return o.a.createElement(O.r, {
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
					} = this.state, n = t.order, r = this.getFlairsFromIds(n), i = e && this.getSelectedFlair(r) || void 0, a = t.order.length > n.length || s && !i;
					return o.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, o.a.createElement(N, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(r), a && this.renderButton()))
				}
			}
			t.a = k(I(Object(u.c)(T)))
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				O = s("./src/reddit/selectors/structuredStyles.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				x = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const j = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				C = e => {
					const t = j(e);
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = Object(m.v)(), I = Object(o.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.o)(e, t) || void 0,
						n = t.redditStyle || Object(O.l)(e, {
							subredditId: s
						}),
						r = Object(g.fb)(e);
					return n || r
				},
				nigtmode: g.fb,
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
					return e.backgroundColor = j(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = C(this.props), e
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
						id: i,
						onClick: c,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? S.a.widgetContentOnly : S.a.widgetContent, O = !n && this.props.styles, g = O ? this.getWidgetBackgroundStyles() : {}, f = O ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, S.a.widgetBackground, {
							[S.a.redditStyle]: n,
							[S.a.clickable]: !!c,
							[S.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: c,
						style: g
					}, m && r.a.createElement("div", {
						className: Object(a.a)(S.a.widgetHeader, {
							[S.a.clickable]: !!l
						}),
						id: i,
						style: {
							...f,
							...this.props.headerStyles
						},
						onClick: l
					}, r.a.createElement("div", {
						className: Object(a.a)(S.a.widgetTitle, p)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, m)), o), r.a.createElement("div", {
						className: Object(a.a)(h, {
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
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/components/PostList/Placeholder.tsx"),
				g = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				x = s("./src/reddit/selectors/listings.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
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
					apiError: x.c,
					apiPending: x.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: x.g,
					postsById: j.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(j.D)(e, s, n, r)
					}),
					subredditsById: y.eb,
					viewportDataLoaded: C.a,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => O.a,
					isNpsScrollSurveyEnabled: f.e,
					isLoggedIn: v.S
				},
				_ = Object(r.c)(k),
				I = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
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
						listingBelowVariant: i
					} = n;
					return Object(h.k)(e, t, "post", r, o, i, void 0)
				},
				T = Object(n.b)(_, I, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: N,
					postClickEventFactory: P
				}));
			t.a = e => Object(u.c)(S(T(e)))
		},
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r);
			const i = new n.a(250),
				a = (e, t, s) => {
					const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const r = `${e.id}-${n}`;
						let a = i.get(r);
						if (void 0 === a) {
							const c = new RegExp(`(\\b${n}\\b)`, "gi"),
								d = e.title.split(c);
							a = s(o.a.createElement(o.a.Fragment, null, o.a.Children.toArray(d.map((e, s) => s % 2 != 0 ? t(e) : e)))), i.set(r, a)
						}
						return a
					}
				}
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
				i = s("./node_modules/react/index.js"),
				a = s.n(i);

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
				l = a.a.createContext(!1);
			class m extends a.a.Component {
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
					return a.a.createElement(n.a, c({}, r, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(l.Provider, {
						value: s
					}, e)))
				}
			}

			function u() {
				return Object(i.useContext)(l)
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
				i = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
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
							subreddits: O
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
									return Object(c.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(i.a)(e.profile)) : Object(c.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(a.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(r.a)(e.subreddit))), s.id
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
							subreddits: O
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
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/reddit/constants/history.ts"),
				o = s("./src/reddit/helpers/history/index.ts");
			const i = "/search/",
				a = e => {
					let {
						searchType: t,
						pageLayer: s
					} = e;
					var a;
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
						pathname: (null === (a = null == s ? void 0 : s.routeMatch) || void 0 === a ? void 0 : a.match.url) || i,
						search: Object(n.a)("", {
							...l
						}),
						state: {
							[r.b.SearchOriginPage]: Object(o.b)(r.b.SearchOriginPage)
						}
					}
				}
		},
		"./src/reddit/helpers/search/searchTabType.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/constants/page.ts");
			const o = (e, t) => e.includes(n.ic.Comments) ? r.h.Comments : t || e.includes(n.ic.Posts) ? r.h.Posts : e.includes(n.ic.Users) && !e.includes(n.ic.Subreddits) ? r.h.People : r.h.Listings
		},
		"./src/reddit/helpers/search/switchSearchScope.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/reddit/constants/parameters.ts");

			function o(e, t) {
				let s = "/search/",
					o = "",
					i = e && e[r.w] || "";
				return t ? (i = i.replace("flair:", "flair_name:"), s = `/r/${t}/search`, o = "1", Object(n.a)(s, {
					[r.w]: i,
					[r.x]: o
				})) : (i = i.replace("flair_name:", "flair:"), Object(n.a)(s, {
					[r.w]: i
				}))
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
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = s.n(r);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				a = e => Object(n.a)(o.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
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
				i = e => {
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
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const a = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(i.yb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				c = (e, t) => s => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.K(s, e),
					subreddit: i.lb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.o(s)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: n.TOPIC,
					...i.o(t),
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
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("expand", e.isFilled), e.className)
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
		"./src/reddit/layout/page/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				c = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				l = s("./src/reddit/layout/page/Listing/index.m.less"),
				m = s.n(l),
				u = s("./src/reddit/layout/page/SearchResults/index.m.less"),
				p = s.n(u);
			t.a = e => {
				let {
					backgroundColor: t,
					className: s,
					containerRef: l,
					content: u,
					navBar: b,
					redditStyle: h,
					sidebar: O,
					subredditId: g
				} = e;
				const f = Object(n.useContext)(c.a),
					x = Boolean(O);
				return r.a.createElement(i.a, {
					subredditId: g
				}, r.a.createElement("div", {
					className: Object(o.a)(m.a.outerContainer, a.i, s, {
						[m.a.outerContainerExp]: f
					}),
					ref: l
				}, r.a.createElement(d.a, {
					className: a.h,
					redditStyle: h,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: m.a.innerContainer
				}, r.a.createElement("div", {
					className: p.a.bodyContainer
				}, r.a.createElement("div", {
					className: p.a.contentContainer
				}, r.a.createElement("div", {
					className: p.a.navContent
				}, b), r.a.createElement("div", {
					className: Object(o.a)(p.a.content, x && p.a.withSidebar)
				}, r.a.createElement("div", {
					className: Object(o.a)(p.a.mainContent, x && p.a.withSidebar)
				}, u), x && r.a.createElement("div", {
					className: p.a.sidebarContent
				}, O)))))))
			}
		},
		"./src/reddit/pages/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA",
				announcement: "_38miRaQjZDUy2B55AHWYlg",
				searchSwitcherContainer: "_79QamRjUfUQIFHxCnTvSZ"
			}
		},
		"./src/reddit/pages/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "pageConfig", (function() {
				return $
			})), s.d(t, "default", (function() {
				return ee
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/lodash/pick.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/makeSearchKey/index.ts"),
				u = s("./node_modules/lodash/isEqual.js"),
				p = s.n(u),
				b = s("./src/reddit/actions/searchQueryId/index.tsx"),
				h = s("./src/reddit/actions/survey/index.ts"),
				O = s("./src/reddit/components/JumpToContent/index.tsx"),
				g = s("./src/reddit/components/SearchResultsContent/index.tsx"),
				f = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts"),
				x = s("./src/reddit/components/SearchResultsNav/index.tsx"),
				j = s("./src/reddit/components/SearchResultsSidebar/index.tsx"),
				y = s("./src/reddit/components/SearchResultsSubNav/index.tsx"),
				C = s("./src/reddit/components/SearchSwitcher/index.tsx"),
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/constants/covid.ts"),
				S = s("./src/reddit/constants/page.ts"),
				k = s("./src/reddit/constants/parameters.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/helpers/correlationIdTracker.ts"),
				N = s("./src/reddit/helpers/search/searchConversationId.ts"),
				P = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				T = s("./src/reddit/helpers/search/searchQueryId.ts"),
				w = s("./src/reddit/helpers/search/searchTabType.ts"),
				R = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				L = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				F = s("./src/reddit/helpers/trackers/searchResults.ts"),
				M = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				B = s("./src/reddit/hooks/useTheme.ts"),
				A = s("./src/reddit/layout/page/SearchResults/index.tsx"),
				D = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				U = s("./src/reddit/selectors/experiments/commentSearchSorts.ts"),
				V = s("./src/reddit/selectors/searchFix.ts"),
				W = s("./src/reddit/selectors/searchQueryId.ts"),
				G = s("./src/reddit/selectors/subreddit.ts"),
				H = s("./node_modules/lodash/isEmpty.js"),
				K = s.n(H),
				q = s("./src/reddit/constants/experiments.ts"),
				z = s("./src/reddit/selectors/experiments/searchSingleVariant.ts"),
				Q = s("./src/reddit/pages/SearchResults/index.m.less"),
				Y = s.n(Q);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const X = 3e3,
				Z = Object(n.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointLegacyAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointLegacyAnnouncement").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx"
					}
				}),
				$ = {
					[S.h.Listings]: {
						tab: S.h.Listings,
						sidebar: !1,
						filterNav: !1
					},
					[S.h.People]: {
						tab: S.h.People,
						sidebar: !1,
						filterNav: !1
					},
					[S.h.Posts]: {
						tab: S.h.Posts,
						sidebar: !0,
						filterNav: !0
					},
					[S.h.Comments]: {
						tab: S.h.Comments,
						sidebar: !1,
						filterNav: !1
					}
				};

			function ee(e) {
				let {
					location: t,
					match: s
				} = e;
				const n = Object(c.d)(),
					r = Object(_.gb)(),
					u = Object(v.b)(),
					H = Object(B.a)(),
					Q = Object(i.useRef)(!1),
					ee = Object(i.useRef)(!1),
					te = Object(c.e)(e => Object(G.C)(e, {
						subredditName: s.params.subredditName
					})),
					se = Object(c.e)(e => Object(f.a)(e, {
						pageLayer: r
					})),
					ne = Object(c.e)(e => Object(V.c)(e, {
						pageLayer: r
					})),
					{
						searchQueryId: re
					} = Object(c.e)(e => Object(W.a)(e)),
					oe = Object(c.e)(U.a),
					ie = (Object(c.e)(e => Object(z.a)(e, q.Bc)), Object(_.Z)(r)),
					ae = Object(_.db)(r),
					[ce, de] = Object(i.useState)(!1),
					le = Object(l.a)(ie) || null,
					me = s.params.multiredditName,
					ue = s.params.subredditName || me || "",
					pe = s.params.username,
					be = Object(m.e)(o()(ie || {}, k.y)),
					he = Object(m.b)(ue, pe, be),
					Oe = te && be.restrict_sr,
					ge = Object(w.a)(be.type, Oe),
					fe = {
						...be,
						type: [d.ic.Posts, d.ic.Subreddits, d.ic.Users]
					},
					xe = Object(m.b)(ue, pe, fe),
					je = {
						redesign: !0,
						searchOptions: be
					},
					ye = $[ge].tab,
					Ce = Boolean(Oe) || $[ge].sidebar && !me,
					ve = $[ge].filterNav || ge === S.h.Comments && oe,
					Ee = Object(D.a)({
						redditStyle: !0,
						theme: H
					});
				let Se;
				re && (T.a.set(R.a.SERP, he, re), n(Object(b.c)())), Object(_.S)(r) || Object(_.D)(r) ? Se = a.a.createElement(C.a, J({}, je, {
					url: Object(L.a)(ie)
				})) : se && ne && (Se = a.a.createElement(C.a, J({}, je, {
					subreddit: se,
					url: Object(L.a)(ie, se.name)
				}))), Object(M.c)(), Object(i.useEffect)((function() {
					return () => {
						P.a.clear(R.a.SERP)
					}
				}), []), Object(i.useEffect)(() => (N.a.set(be.q || ""), () => {
					N.a.reset()
				}), []), Object(i.useEffect)(() => {
					let e = 0;
					return e = window.setTimeout(() => n(Object(h.k)()), X), () => {
						Object(I.b)(I.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(i.useEffect)(() => {
					ie !== le && (Q.current = !1, de(!1)), ie && le && ie[k.w] !== le[k.w] && (Object(I.b)(I.a.SearchResults), Object(I.d)(I.a.SearchResults))
				}, [ie, le]), Object(i.useEffect)(() => {
					const e = {
							...ie,
							type: void 0
						},
						t = {
							...le,
							type: void 0
						};
					!p()(e, t) && !K()(le) && P.a.update(R.a.SERP)
				}, [ie, le]), Object(i.useEffect)(() => {
					if (ye === S.h.Comments && !ee.current) {
						let e = 0;
						return e = window.setTimeout(() => {
							ee.current = !0, n(Object(h.j)())
						}, X), () => {
							window.clearTimeout(e)
						}
					}
				}, [ye]);
				return a.a.createElement(A.a, {
					backgroundColor: Ee.canvas,
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(O.a, null), ae && !ce && (() => {
						const e = e => u(Object(F.f)(e, Object(m.e)(o()(ie || {}, k.y))));
						return Q.current || (e("view"), Q.current = !0), a.a.createElement(Z, {
							announcement: E.a,
							className: Y.a.announcement,
							onBtnClick: () => e("click"),
							onClose: () => {
								e("dismiss"), de(!0)
							}
						})
					})(), a.a.createElement(g.a, {
						listingKey: he,
						listingName: ue,
						location: t,
						searchOptions: be,
						tab: ye
					})),
					navBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(x.a, {
						activeTab: ye,
						searchOptions: be,
						searchSwitcher: Se
					}), ve && a.a.createElement(y.a, {
						key: "subNav",
						searchOptions: be,
						shouldHideGlobalSearchLink: !0,
						subredditName: ue,
						tab: ye
					}), Se && a.a.createElement("div", {
						className: Y.a.searchSwitcherContainer
					}, Se)),
					sidebar: Ce && a.a.createElement(j.a, {
						className: Y.a.sidebar,
						listingKey: xe,
						listingName: ue || S.c,
						searchOptions: fe,
						tab: ye
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
					experimentName: n.D
				}) === n.Fd
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
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.S, i.R, (e, t) => e || t),
				c = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: r.z
				}), e => e === r.K.Enabled)
		},
		"./src/reddit/selectors/experiments/commentSearchSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.A
				}) === n.Fd
			}
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
				i = s("./src/reddit/selectors/experiments/utils.ts"),
				a = s("./src/reddit/selectors/meta.ts"),
				c = s("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(o.f)(e),
					experimentName: n.hc
				}), i.a),
				l = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(o.f)(e),
					experimentName: n.gc
				}), i.a),
				m = Object(c.a)(d, l, (e, t) => e || t),
				u = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/searchSubDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./node_modules/reselect/es/index.js");
			const i = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: n.kf
			}), e => ({
				isSubEnlarged: e === n.Af.Variant1 || e === n.Af.Variant3,
				withCommunityDescription: e === n.Af.Variant2 || e === n.Af.Variant3
			}))
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(r.cg)(t)
				},
				c = Object(n.a)(a, o.d, (e, t) => e && !t)
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
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c09ff0d041c1"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"dbd242f21318"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"74d5eb012899"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c1fc98c26cf2"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"23b6a4746a76"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"cdb1ee531f65"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~SearchResults.458a1258465496718eee.js.map