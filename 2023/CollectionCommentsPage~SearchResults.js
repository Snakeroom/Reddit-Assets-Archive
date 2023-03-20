// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~SearchResults.16e35bcd76538dce00f6.js
// Retrieved at 3/20/2023, 10:30:04 AM by Reddit Dataminer v1.0.0
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
				x = (e, t, s, n, r) => {
					const o = r.find(e => e <= t) || -1,
						a = r.find(e => e > t) || 1 / 0;
					return t !== a && t !== o && (!(o + s > t) && (!(t + s > a) && !((e, t, s) => {
						const n = s[t - 1],
							r = s[t],
							o = r && Object(b.G)(e, {
								postId: n
							}) || null,
							a = r && Object(b.G)(e, {
								postId: r
							}) || null;
						return o && o.isSponsored || a && a.isSponsored
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
				const a = Object(b.z)(e, {
						listingKey: n.listingKey
					}),
					i = [];
				return j.forEach(t => {
					let s = o + t;
					if (!(s >= a.length)) {
						for (; s < a.length && !x(e, s, t, a, r);) s += 1;
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
				return jt
			})), s.d(t, "commentsPagePending", (function() {
				return yt
			})), s.d(t, "commentsPageLoaded", (function() {
				return Ct
			})), s.d(t, "commentsPageFailed", (function() {
				return vt
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return Et
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return kt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return _t
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return It
			})), s.d(t, "commentsPageRequested", (function() {
				return Nt
			})), s.d(t, "commentsPageDataRequested", (function() {
				return wt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return Tt
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
				w = s("./src/lib/pageTitle/index.ts"),
				T = s("./src/reddit/actions/economics/helpers/async.ts"),
				L = s("./src/reddit/actions/externalAccount.ts"),
				R = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				F = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				M = s("./src/reddit/actions/platform.ts"),
				B = s("./src/reddit/actions/post.ts"),
				A = s("./src/reddit/actions/profile/index.ts"),
				D = s("./src/reddit/actions/subreddit.ts"),
				U = s("./src/reddit/actions/subreddit/notifications.ts"),
				V = s("./src/reddit/actions/subreddit/questions.ts"),
				G = s("./src/reddit/actions/toaster.ts"),
				H = s("./src/reddit/constants/adEvents.ts"),
				W = s("./src/reddit/constants/graphql.ts"),
				K = s("./src/reddit/constants/parameters.ts"),
				q = s("./src/reddit/constants/posts.ts"),
				z = s("./src/reddit/helpers/commentList/index.ts"),
				Y = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				Q = s("./src/reddit/models/Comment/index.ts"),
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
				ae = s("./src/reddit/selectors/removedPosts.ts");
			const ie = Object(te.a)(oe.f, ne.a, ae.a, ae.c, re.a, ae.e, re.b, (e, t, s, n, r, o, a) => {
				if (!e || !t || r) return !1;
				if (n) return !0;
				const i = o || a,
					c = t.score >= 2 || t.numComments >= 2;
				return !(!s || i || c)
			});
			var ce = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				de = s("./src/reddit/selectors/moderatorPermissions.ts"),
				le = s("./src/reddit/selectors/posts.ts"),
				me = s("./src/reddit/selectors/subreddit.ts"),
				ue = s("./src/reddit/selectors/user.ts"),
				pe = s("./src/lib/makeCommentsPageKey/index.ts"),
				be = s("./src/reddit/actions/ads/index.ts"),
				he = s("./src/reddit/helpers/canonicalUrls.ts"),
				ge = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Oe = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				fe = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				xe = s("./src/lib/performanceTimings/index.tsx"),
				je = s("./src/reddit/actions/gold/achievementFlairs.ts"),
				ye = s("./src/reddit/actions/gold/customEmojis.ts"),
				Ce = s("./src/lib/makeListingKey/index.ts"),
				ve = s("./src/reddit/actions/googleQASchema/constants.ts");
			const Ee = Object(d.a)(ve.b),
				Se = Object(d.a)(ve.a);
			var ke = s("./src/reddit/actions/linkedPosts/index.ts"),
				_e = s("./src/reddit/actions/otherDiscussions/index.ts"),
				Ie = s("./src/reddit/actions/subreddit/constants.ts"),
				Ne = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var Pe = e => {
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
				we = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Te = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Le = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Re = e => {
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
							d = Object(we.a)(r),
							l = o.linked.posts && o.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !c.hasOwnProperty(t.id)) {
								const e = Object(Te.a)(t);
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
				Fe = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Me = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Be = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Ae = e => {
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
							c = Object(Me.a)(i),
							d = Be(c),
							m = e.edges.reduce((e, t) => (t.node.id && t.node.id !== o && e.push(t.node.id), e), []),
							{
								range: u,
								sort: p,
								subredditName: b
							} = r,
							h = Object(Ce.a)(b, l.cb[p], {
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
				De = s("./src/reddit/models/Media/index.ts"),
				Ue = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Ve = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
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
							a = {};
						if (!o || !o.nsfwLinked) return;
						const i = t(),
							c = i.posts && i.posts.models,
							d = Object(Ve.a)(r),
							l = o.nsfwLinked.posts && o.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !c.hasOwnProperty(t.id)) {
								const e = Object(Te.a)(t);
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
			const We = Object(d.a)(He.b),
				Ke = Object(d.a)(He.a);
			var qe = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const ze = Object(d.a)(qe.b),
				Ye = Object(d.a)(qe.a),
				Qe = Object(d.a)(Ie.o),
				Je = Object(d.a)(Ie.n),
				Xe = (Object(d.a)(Ie.w), Object(d.a)(Ie.v), e => async (t, s, n) => {
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
					} = e, O = Object(Ce.a)(p, null, {
						isOtherDiscussions: !0
					}), f = s(), x = Object(le.z)(f, {
						listingKey: O
					}), j = c && (!x || 0 === x.length), y = Object(Ce.a)(g, l.cb[h], {
						t: b
					}), C = Object(le.z)(f, {
						listingKey: y
					}), v = d && (i || !C || 0 === C.length), E = i, k = a, _ = Object(le.G)(f, {
						postId: p
					}), I = !!_ && !!_.media && (Object(De.L)(_.media) || Object(De.H)(_.media)) && !_.media.altText;
					if (!(j || v || E || k || I || m)) return;
					j && t(Object(_e.d)({
						key: O
					}));
					const N = await ((e, t) => Object(S.a)(e, {
							...Ne,
							variables: t
						}))(r(), e),
						P = N.body,
						w = Object(Ue.a)(u);
					m && (N.ok ? P.data && P.data.post && t(Ee({
						postId: p,
						isEligibleForQASchema: null !== (o = P.data.post.isEligibleForQASchema) && void 0 !== o && o
					})) : t(Se())), j && Object(Fe.a)({
						getState: s,
						onFailure: e => t(Object(_e.b)(e)),
						onSuccess: e => t(Object(_e.c)(e)),
						postId: p,
						response: N
					}), v && !E && (N.ok ? P.data && Ae({
						getState: s,
						onFailure: e => t(Je(e)),
						onSuccess: e => t(Qe(e)),
						options: e,
						postId: p,
						subreddit: P.data.subreddit
					}) : t(Je(N.error))), E && !w && N.ok && P.data && Re({
						getState: s,
						onFailure: e => t(Object(ke.a)(e)),
						onSuccess: e => t(Object(ke.b)(e)),
						postId: p,
						post: P.data.post
					}), k && N.ok && Ge({
						getState: s,
						onFailure: e => t(Ye(e)),
						onSuccess: e => t(ze(e)),
						postId: p,
						post: P.data.post
					}), I && N.ok && P.data && Pe({
						getState: s,
						onFailure: e => t(Ke(e)),
						onSuccess: e => t(We(e)),
						postId: p,
						post: P.data.post
					})
				}),
				Ze = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						r = n && Object(P.y)(n),
						{
							sortToUse: o
						} = Object(Y.a)(e, r);
					return (!o || o === l.w.CONFIDENCE) && Object(se.c)(e, {
						experimentEligibilitySelector: () => Object(ue.R)(e),
						experimentName: m.p
					}) === m.v.Enabled
				};
			var $e = s("./src/reddit/selectors/chatPost.ts"),
				et = s("./src/reddit/selectors/seo/index.ts"),
				tt = s("./src/reddit/actions/pages/constants.ts"),
				st = s("./src/lib/sentry/index.ts"),
				nt = s("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				rt = s("./src/reddit/helpers/isRobotIndexableMeta.ts"),
				ot = s("./src/reddit/helpers/locales.ts"),
				at = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				it = s("./src/reddit/reducers/pages/comments/index.ts"),
				ct = s("./src/reddit/selectors/experiments/chat.ts"),
				dt = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				lt = s("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				mt = s("./src/reddit/selectors/experiments/countrySites.ts"),
				ut = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				pt = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				bt = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				ht = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				gt = s("./src/reddit/selectors/i18n/index.ts"),
				Ot = s("./src/reddit/selectors/meta.ts"),
				ft = s("./src/reddit/actions/pages/search/index.ts");
			Object(i.a)({
				pages: {
					comments: it.a
				}
			}), Object(i.a)({
				features: {
					modUserNotes: at.a
				}
			});
			const xt = 25,
				jt = 100,
				yt = Object(d.a)(tt.h),
				Ct = Object(d.a)(tt.f),
				vt = Object(d.a)(tt.e),
				Et = Object(d.a)(tt.i);

			function St(e) {
				return e && e.ok
			}
			const kt = (e, t, s) => {
					const n = !e,
						r = Object(le.G)(t, {
							postId: s
						}).belongsTo,
						o = Object(me.Q)(t, {
							identifier: r
						}),
						a = Object(et.c)(t, {
							identifier: r
						}),
						i = !!Object(Ue.c)(t),
						c = Object(gt.a)(t),
						d = Object(ut.b)(t),
						l = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return i ? (l.listingBelow = a || n, l.postFeed = l.listingBelow) : c ? l.nsfwListingBelow = !0 : l.postFeed = (a || n) && (!Object(J.i)(o) && !Object($e.d)(t, {
						postId: s
					}) && !!o || !Object(oe.i)(t) && Object(ee.e)(t)), e && (l.postQASchema = Object(ee.d)(t)), d && (l.listingBelow = !0), l
				},
				_t = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				It = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				Nt = e => async (t, s) => {
					var n, i;
					const {
						partialPostId: c,
						partialCommentId: d
					} = e.params, {
						subredditName: b
					} = e.params || "", g = c ? Object(P.y)(c) : "", O = d && Object(Q.h)(d), {
						path: j,
						queryParams: C
					} = e, v = Object(F.d)(j), {
						instanceId: E
					} = C, {
						hasSortParam: S,
						sortToUse: k
					} = Object(Y.a)(s(), g), _ = null === (i = null === (n = Object(oe.b)(s())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === i ? void 0 : i.route.chunk, I = ["context", "depth", "limit", K.h].reduce((e, t) => {
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
						T = Object(le.G)(N, {
							postId: g
						}),
						R = Object(dt.a)(N).bucketed && Object(y.a)(e) && Object(y.b)(T);
					if (R) {
						const s = Object(a.e)(r()(e.queryParams, K.d)),
							n = Object(a.b)(g, void 0, s);
						await t(Object(ft.d)({
							key: n,
							options: s,
							subredditName: b,
							postId: g
						}))
					} else await t(wt(g, O, I, k));
					const U = Object(ue.S)(s());
					if (T && "subreddit" === T.belongsTo.type) {
						const e = T.belongsTo.id;
						if (await Promise.all([Object(xe.i)(() => t(Object(je.c)(e)), {
								name: "subredditAchievementFlairsRequested",
								page: _,
								isLoggedIn: U
							}), Object(xe.i)(() => t(Object(ye.c)(e)), {
								name: "subredditCustomEmojisRequested",
								page: _,
								isLoggedIn: U
							})]), !Object(oe.i)(N)) {
							Object(bt.a)(N) && t(Object(V.b)(e))
						}
						Object(de.i)(N, e) && await t(Object(x.c)(g))
					}
					if (T) {
						const n = ((e, t) => {
								const s = Object(le.V)(e, {
										postId: t
									}),
									n = Object(le.G)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), g),
							r = Object(me.Q)(s(), {
								identifier: T.belongsTo
							});
						if (r && (e => m.tf.Redirect === Object(se.b)(e, {
								experimentEligibilitySelector: ie,
								experimentName: m.pf
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
							if (!!!Object(me.W)(s(), {
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
						const a = kt(!1, s(), g),
							i = v;
						if (_t(i, a)) {
							Object(ge.d)(ge.a.LinkedPosts);
							const e = Object(ge.c)(ge.a.LinkedPosts);
							Object(ge.d)(ge.a.NsfwLinkedPosts);
							const n = Object(ge.c)(ge.a.NsfwLinkedPosts),
								{
									adsSeenCount: o,
									totalPostsSeenCount: c,
									sessionStartTime: d
								} = Object(Z.a)(s()),
								m = {
									adContext: {
										layout: W.a.Card,
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
									listingBelowExperimentVariant: Object(Ue.c)(s())
								};
							Object(ut.b)(s()) && (p.listingBelowVersion = "LINKED_POSTS_VERSION_SIDE_RAIL");
							const b = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(ht.a)(s())
								},
								h = It(a);
							Object(xe.i)(() => t(Xe({
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
						t(Object(L.p)()), t(M.n({
							title: n
						}));
						const c = s().posts.instances[g] ? e.queryParams.instanceId : T.postId;
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
								})), Object(u.nb)(Object(p.c)(s()))
							})(e))))
						}
					} else t(M.n({
						title: w.f()
					}));
					const {
						routePrefix: G
					} = e.params;
					R || (q.b[G] === q.a.PROFILE ? Object(he.f)(s(), t, e) : Object(he.d)(s(), t, e))
				}, Pt = ["SubredditPost", "ProfilePost", "DeletedSubredditPost"], wt = function(e, t, s, n) {
					let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
					return async (o, a, i) => {
						var c, d, m, u;
						const p = a(),
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
							w = n === l.w.CHAT,
							L = !!p.platform.lastPage,
							F = w && L,
							A = Object(le.G)(p, {
								postId: e
							}),
							D = Object(ct.d)(p),
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
						o(g.g());
						const W = p.user.prefs.commentMode;
						o(yt({
							key: b,
							postId: e,
							commentMode: W
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
							const t = Object(le.G)(a(), {
								postId: e
							});
							t && t.numComments && t.numComments > jt && (K.truncate = xt)
						}
						const q = null === (d = null === (c = Object(oe.b)(p)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
							Y = Object(xe.i)(() => Object(E.a)(i.apiContext(), e, t, K, Object($.a)(a()), Ze(a())), {
								name: "fetchCommentsPage",
								isLoggedIn: !S,
								page: q
							}),
							Q = !S && k && Object(xe.i)(() => Object(N.d)(i.gqlContext(), Object(X.e)(k)), {
								name: "fetchProfileKarma",
								isLoggedIn: !S,
								page: q
							}) || null,
							J = Object(lt.c)(p),
							Z = Object(xe.i)(() => _(i.gqlContext(), {
								postId: e,
								includeSubredditRankings: J
							}), {
								name: "fetchCommentsPageExtra",
								isLoggedIn: !S,
								page: q
							}),
							ee = h && Object(pt.a)(p) ? Object(C.a)(i.gqlContext(), {
								subredditName: h
							}) : null;
						let te, se, ne, re, ae;
						if ([te, se, ne, re] = await Promise.all([Y, Q, Z, ee]), o(Object(M.o)(te.status)), St(ne) && "SubredditPost" === (null === (m = ne.body.data.postInfoById) || void 0 === m ? void 0 : m.__typename)) {
							const e = ne.body.data.postInfoById.subreddit.name;
							Object(he.c)(a(), o, e)
						}
						if (te.ok) {
							try {
								te.body.posts = await Object(nt.a)(i.apiContext(), te.body.posts, p)
							} catch (ie) {
								st.c.captureException(ie)
							}
							const t = Object.keys(te.body.posts).filter(e => !!te.body.posts[e].isMeta),
								s = te.body.posts[e];
							if (Object(he.b)(a(), o, s.belongsTo.type), t.length) {
								const e = Object(xe.i)(() => Object(v.a)(i.apiContext(), s.belongsTo.id, t), {
										name: "getGovernanceData",
										page: q,
										isLoggedIn: !S
									}),
									n = await e;
								n.ok && (ae = n.body)
							}
							if (St(se)) {
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
							if (St(ne)) {
								const {
									data: t
								} = ne.body;
								if (t.postInfoById && Pt.includes(t.postInfoById.__typename) && (te.body.posts[e] = {
										...te.body.posts[e],
										...t.postInfoById,
										mediaStatus: "SubredditPost" === t.postInfoById.__typename || "ProfilePost" === t.postInfoById.__typename ? null === (u = t.postInfoById.mediaStatus) || void 0 === u ? void 0 : u.status : null
									}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
									const e = t.postInfoById.subreddit.detectedLanguage;
									Object(Ot.d)(p) && e && Object(mt.f)(p) && await Object(ot.a)(e, o);
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
							const n = Object(z.a)(te.body, e, p),
								{
									postMeta: r
								} = te.body;
							te.body.posts[e] = {
								...te.body.posts[e],
								isRobotIndexable: Object(rt.a)(r, e)
							}, re && te.body.subreddits[s.belongsTo.id] && (te.body.subreddits[s.belongsTo.id] = {
								...te.body.subreddits[s.belongsTo.id],
								devPlatformMetadata: re
							}), o(Ct({
								key: b,
								postId: e,
								meta: p.meta,
								governance: ae,
								shouldCollapse: n,
								...te.body
							}))
						} {
							const n = Object(le.G)(a(), {
								postId: e
							});
							n && te.body.comments && Object.keys(te.body.comments).length < n.numComments ? o(Lt(e, t, s)) : te.ok && o(Tt({
								key: b
							}));
							const r = Object(oe.i)(p) ? fe.a.COMMENTS_OVERLAY : fe.a.COMMENTS;
							o(Object(be.b)(r))
						}
						if (te.ok) {
							o(G.g(b));
							const t = Object(le.G)(a(), {
									postId: e
								}),
								s = Object.keys(te.body.comments);
							if (o(B.y(t, H.a.CommentsView)), Object(de.h)(a(), {
									subredditId: t.belongsTo.id
								}) && o(Object(R.a)({
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
							})), e = await Object(Oe.a)("subreddit", () => Object(I.a)(i.apiContext(), h, {})), o(Object(M.o)(e.status)), o(Object(O.handleSubredditPageApiError)(e, h))), o(vt({
								error: te.error,
								key: b,
								...e ? e.body : te.body
							}))
						}
					}
				}, Tt = Object(d.a)(tt.g), Lt = (e, t, s) => async (n, r, o) => {
					var a, i;
					const c = Object(pe.a)(e, t, s),
						d = r(),
						l = Object(ue.S)(d),
						m = Object(ue.m)(d),
						u = null === (i = null === (a = Object(oe.b)(r())) || void 0 === a ? void 0 : a.routeMatch) || void 0 === i ? void 0 : i.route.chunk,
						p = Object(le.G)(d, {
							postId: e
						}),
						b = Object(ct.d)(d),
						h = "CHAT" === (null == p ? void 0 : p.discussionType) && b && !t,
						g = Object(E.a)(o.apiContext(), e, t, h ? {
							...s,
							depth: 1
						} : s, Object($.a)(d), Ze(d)),
						O = l && m && Object(N.d)(o.gqlContext(), Object(X.e)(m)) || null,
						f = Object(lt.c)(d),
						x = Object(xe.i)(() => _(o.gqlContext(), {
							postId: e,
							includeSubredditRankings: f
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: l,
							page: u
						}),
						[y, C, v] = await Promise.all([g, O, x]);
					if (y.ok) {
						if (St(C)) {
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
						if (St(v)) {
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
						n(Ct({
							key: c,
							postId: e,
							meta: d.meta,
							shouldCollapse: t,
							...y.body
						})), n(Tt({
							key: c
						}));
						const s = r().posts.models[e],
							o = s && Object(le.V)(r(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && o && Object(ce.a)(d, {
							subredditId: o.id
						}) && n(Object(j.h)(o.name, o.id)), s && "subreddit" === s.belongsTo.type && y.body.comments && await n(Object(T.a)({
							commentIds: Object.keys(y.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(vt({
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
				return L
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
						if (d.ok && d.body && (null === (c = null === (i = d.body) || void 0 === i ? void 0 : i.data.deleteSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(x(s, k({
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
						})), e(x(s, I({
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
						if (c.ok && c.body && (null === (i = null === (a = c.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === i ? void 0 : i.ok)) e(E(t)), e(x(s));
						else {
							e(O(`error-unmuting-${t}`))
						}
					}
				}, L = e => {
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
						const u = await Object(j.a)(a(), t, !0),
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
							y = await m(a(), x);
						if (y.ok && y.body && (null === (c = null === (i = y.body) || void 0 === i ? void 0 : i.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) e(S([h])), e(f(h.name));
						else {
							e(O(`error-muting-${x}`))
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
				w = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				T = s("./src/reddit/helpers/trackers/lightbox.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/comments.ts"),
				M = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				B = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				V = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				G = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				H = s.n(G);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(j || (j = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(y || (y = {}));
			const W = (e, t) => {
					const s = H.a[t],
						n = H.a[e];
					return Object(d.a)(s, n)
				},
				K = e => Object(d.a)(H.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[H.a.isInOverlay]: e.isInOverlay,
					[H.a.isModModeEnabled]: e.isModModeEnabled,
					[H.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var q = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				z = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Y = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Q = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
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
				ae = s("./src/reddit/layout/row/Inline/index.tsx"),
				ie = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				ce = s("./src/reddit/icons/fonts/index.tsx"),
				de = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				le = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				me = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ue = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				be = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				he = s("./src/devPlatform/constants.ts"),
				ge = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				Oe = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				fe = s.n(Oe);
			const xe = E.a.wrapped(de.a, "CommentIcon", fe.a),
				je = E.a.wrapped(pe.a, "Report", fe.a),
				ye = E.a.wrapped(me.a, "IgnoreReport", fe.a),
				Ce = E.a.wrapped(J.a, "ModActionsMenu", fe.a),
				ve = E.a.div("OverflowMenuSpacer", fe.a),
				Ee = E.a.wrapped(Z.a, "DropdownRow", fe.a),
				Se = E.a.wrapped(ae.a, "Flatlist", fe.a),
				ke = E.a.button("Button", fe.a),
				_e = E.a.wrapped(q.a, "ModToolsFlatlist", fe.a),
				Ie = E.a.wrapped(ne.a, "ViewReportsDropdown", fe.a),
				Ne = e => `Comment-${e}--Modal--DeleteComment`,
				Pe = e => `Distinguish--Dropdown--${e}`,
				we = e => `${e}-overflow-menu`,
				Te = e => `View--Reports--${e}`,
				Le = Object(i.c)({
					claimedFreeAward: B.b,
					currentUser: U.m,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(R.a)(e) === Ne(s.id)
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
						return Object(k.b)(Te(s.id))(e)
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
					isDevPlatformEnabled: e => Object(ge.a)(e)
				});
			class Re extends o.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(T.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(oe.c)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(oe.g)(e, this.props.comment.id)), this.handleSave = () => {
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
						e(n ? L.a.UNFOLLOWED : L.a.FOLLOWED), t(n ? Object(oe.h)("follow", s.id) : Object(oe.c)("follow", s.id))
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
						modModeEnabled: x,
						postIsArchived: C,
						postAuthorIsBlocked: E,
						postIsLocked: S,
						renderedInOverlay: k,
						sendEvent: _,
						subreddit: I,
						subredditAboutInfo: N,
						toggleDeleteCommentModal: P,
						toggleSendReplies: T,
						trackCommentClick: R,
						isPostUnrepliable: F,
						isDevPlatformEnabled: M
					} = this.props, B = Object(w.a)(f), A = !!s && s.displayText === e.author, D = !!s && s.isEmployee, U = e.unrepliableReason, G = !E && !Object(L.g)(e) && !F && !U && !F && !(N && N.userIsBanned) && (S || C || B && p || e.isLocked ? B && p : p || m), H = Object(X.a)(e), q = B && A && !e.bannedBy, J = A && D && !e.bannedBy, $ = q || J, ee = !Object(L.g)(e) && s && e.isGildable && !F && !(U && "[deleted]" === e.author), se = !C && !U, ne = [];
					G && ne.push(o.a.createElement(ke, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), v()(() => R("reply", e.id)())
						}
					}, o.a.createElement(xe, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), ee && ne.push({
						breakpointGroup: y.LoggedInUser,
						icon: o.a.createElement(ie.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => n.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), ne.push(o.a.createElement(te.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: a,
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
					const ae = ne.map(e => o.a.isValidElement(e) ? e : o.a.createElement(ke, {
							className: W(e.breakpointGroup, j.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						de = ne.map(e => o.a.isValidElement(e) ? null : o.a.createElement(Ee, {
							className: W(e.breakpointGroup, j.HideIfVWLarger),
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
					}, ae, o.a.createElement(ve, {
						className: A ? void 0 : W(y.LoggedInUser, j.HideIfVWLarger)
					}, o.a.createElement(Z.b, {
						className: fe.a.overflowMenu,
						disabled: b,
						dropdownId: we(e.id),
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
						onClick: T,
						isSelected: this.props.sendRepliesToggled
					})), o.a.createElement(be.a, {
						contextType: he.a.COMMENT,
						contextData: e
					}))), this.props.isConfirmModalOpen && o.a.createElement(Y.a, {
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
						toggleModal: P,
						trackClick: () => {},
						withOverlay: !0
					}), B && o.a.createElement(o.a.Fragment, null, x && o.a.createElement(_e, {
						className: W(y.Moderator, j.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: A
					}), o.a.createElement(Ce, {
						className: x ? W(y.Moderator, j.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => _(Object(oe.c)("comment_mod_action_menu", e.id))
					}, o.a.createElement(ue.a, null), o.a.createElement(V.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(X.c)(e) && !x && o.a.createElement(z.a, {
						text: `${H}`,
						onClick: () => {
							O(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Te(e.id)
					}, o.a.createElement(Ie, {
						model: e,
						onIgnoreReports: () => {
							g(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Te(e.id)
					}), e.ignoreReports ? o.a.createElement(ye, null) : o.a.createElement(je, null)), $ && o.a.createElement(z.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, o.a.createElement(le.a, null), o.a.createElement(Q.a, {
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
			var Fe = Object(a.b)(Le, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(I.i)(Ne(s.id))), e(Object(S.h)({
								tooltipId: we(s.id)
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
							tooltipId: Te(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(I.i)(Ne(s.id))),
						toggleSendReplies: () => e(Object(p.l)(s.id))
					}
				})(Object(se.c)(Re)),
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
				Ge = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				He = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				We = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Ke = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				qe = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				ze = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Ye = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Qe = s("./src/reddit/components/ModModeReports/index.tsx"),
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
				at = s("./src/reddit/controls/ErrorText/index.tsx"),
				it = s("./src/reddit/controls/InternalLink/index.tsx"),
				ct = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				dt = s("./src/reddit/helpers/flair.ts"),
				lt = s("./src/reddit/models/Subreddit/index.ts"),
				mt = s("./src/reddit/models/User/index.ts"),
				ut = s("./src/reddit/models/Vote/index.ts"),
				pt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				bt = s("./src/reddit/selectors/commentSelector.ts"),
				ht = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				gt = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Ot = s("./src/reddit/selectors/moderatorPermissions.ts"),
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
					}), o.a.createElement(g.a, {
						className: f.a.expandIcon
					}))
				}), "ExpandButton", Ct.a),
				Pt = E.a.wrapped(Fe, "FlatList", Ct.a),
				wt = E.a.wrapped(at.b, "ErrorText", Ct.a),
				Tt = E.a.wrapped(Ke.a, "HorizontalVotes", Ct.a),
				Lt = E.a.div("ActionBar", Ct.a),
				Rt = E.a.wrapped(He.a, "TopMeta", Ct.a),
				Ft = E.a.div("CommentContentWrapper", Ct.a),
				Mt = E.a.wrapped(qe.b, "AuthorHovercard", Ct.a),
				Bt = Object(rt.v)(),
				At = Object(a.b)(() => Object(i.c)({
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
					isPresenceConsumptionExpEnabled: gt.c,
					moderatorPermissions: (e, t) => {
						const s = Object(bt.c)(e, t);
						return s ? Object(Ot.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: ft.f,
					modModeEnabled: rt.W,
					errorMsgs: F.I,
					replyFormOpen: F.L,
					subreddit: rt.s,
					subredditType: F.O,
					isOnlineConsumptionLoadTest: gt.a,
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
				Gt = Bt(At(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						collapsed: a,
						collapsedBecauseCrowdControl: i,
						comment: m,
						commentsPageKey: u,
						currentProfileModPermissions: b,
						currentUser: g,
						depth: O,
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
						isEditing: T,
						isFirstInList: R,
						isHighlighted: F,
						isLoggedIn: M,
						isOnlineConsumptionLoadTest: B,
						isOnlineUserPref: A,
						isPendingDeletion: D,
						isPresenceConsumptionExpEnabled: U,
						moderatorPermissions: V,
						modModeEnabled: G,
						noSpacing: H = !1,
						onCommentAuthorClick: W,
						onCommentTimestampClick: K,
						onCollapseClick: q,
						onIgnoreReports: z,
						onLineMouseOver: Y,
						onPresenceIndicatorInViewport: Q,
						onVoteClick: J,
						postId: Z,
						prediction: $,
						renderedInOverlay: ee,
						replyFormOpen: te,
						restrictHeight: ne,
						rtJSONRedditStyle: re,
						showBlockingInterstitial: oe,
						subreddit: ae,
						subredditType: ie,
						trackCommentClick: ce,
						userIconSmall: de,
						userIsBanned: le,
						onClickRevealSpoilerText: me,
						onMediaReload: ue
					} = e, pe = m.isDeleted, be = !T && !pe && !!f && f.length > 0, he = Object(l.a)(c.c.edit, m.id), ge = Object(l.a)(c.c.replyToComment, m.id), Oe = Object(w.a)(V), fe = Object(Ye.a)(m), xe = Object(X.c)(m), je = m.authorIsContractor && ie === lt.g.EmployeesOnly, ye = m.isLocked, Ce = Oe && G, ve = !T && !pe && (M || I), Ee = I && !m.unrepliableReason, Se = !!g && Object(mt.e)(g) === m.author, [ke, _e] = Object(r.useState)(null), [Ie, Ne] = Object(r.useState)(null), Pe = Object(r.useRef)(null), we = Object(L.f)(m) || Object(L.g)(m), Te = we ? Ut : it.default, Le = Object(L.f)(m) ? Vt : Mt, Re = Object(se.b)();
					Object(r.useEffect)(() => {
						if (!T && !pe && (C && _e(o.a.createElement(Ve, null)), null !== E)) {
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
								Ne(o.a.createElement(Ge.b, {
									prefersReducedAnimation: v,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [T, pe, C, v, E]);
					const Fe = Object(r.useCallback)(() => {
							Re(Object(kt.c)(m.id))
						}, [Re, m.id]),
						Me = Object(ot.b)();
					(N || P) && Me && S >= ht.a - 1 && oe();
					const Be = !pe && !Object(L.f)(m) && (!le || le && Se) && !Object(L.g)(m) && M,
						De = Object(r.useCallback)(() => {
							Be && U && !Se && Q && Q(m.id)
						}, [m.id, Q, Be, U, Se]),
						Ue = Object(st.a)(m),
						He = !!g && Object(mt.e)(g) === m.author ? null == g ? void 0 : g.accountIcon : m.profileImage,
						Ke = Object(Et.c)(He),
						qe = Ke || Object(Et.b)(He);
					return o.a.createElement("div", {
						key: `comment-${m.id}`,
						className: Object(d.a)(`Comment ${m.id}`, Ct.a.CommentWrapper, {
							[Ct.a.highlightComment]: F,
							[Ct.a.deleted]: pe,
							[Ct.a.focused]: y,
							[Ct.a.redesign]: I,
							[Ct.a.topLevel]: !O,
							[Ct.a.noSpacing]: H
						})
					}, ke, Ie, !T && !pe && R && o.a.createElement("div", {
						className: Ct.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${vt.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), o.a.createElement(Nt, {
						className: Object(d.a)(m.id, {
							[Ct.a.hidden]: !a,
							[Ct.a.visible]: a
						}),
						onClick: () => {
							s(), q(), ce("collapse", m.id)()
						},
						onMouseOver: () => Y(m.id),
						onMouseOut: s
					}), Object(tt.a)(m.author) ? ae ? o.a.createElement(St.b, {
						className: Object(d.a)(Ct.a.UserIconContainer, de && Ct.a.UserIconContainerSmall),
						subredditOrProfile: ae,
						linkTo: `/user/${m.author}/`
					}) : null : o.a.createElement(Le, {
						alwaysShowChildren: !0,
						collapsed: a,
						hoverDivClassName: Ct.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(L.g)(m),
						postOrComment: m,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: ee ? Je.f.Lightbox : void 0
					}, o.a.createElement(Te, {
						className: Object(d.a)(Ct.a.UserIconContainer, de && Ct.a.UserIconContainerSmall),
						"data-testid": we ? void 0 : "comment_author_icon",
						onClick: we ? void 0 : W,
						to: `/user/${m.author}/`
					}, Me ? o.a.createElement(Ze.a, {
						isNft: qe,
						className: Object(d.a)(Ct.a.UserIcon, {
							[Ct.a.v1NftTreatment]: Ke
						}),
						iconUrl: He,
						isNSFW: m.profileOver18 || !1,
						nsfwIconUrl: $e.a,
						userName: m.author,
						isHighlighted: F,
						shouldShowPresenceIndicator: Be && U,
						onPresenceIndicatorInViewport: De,
						isCommentAuthorBlocked: Object(L.g)(m),
						collapsed: a,
						shouldUseOnlineOverride: Se,
						isOnlineOverrideValue: A,
						isOnlineStatusLoadTest: Be && B,
						authorId: m.authorId
					}) : o.a.createElement("div", {
						className: Ct.a.UserIcon
					}))), o.a.createElement(Ft, {
						className: Object(d.a)({
							[Ct.a.isActive]: k,
							[Ct.a.isCollapsed]: a,
							[Ct.a.isLocked]: ye && Ce,
							[Ct.a.isPendingDeletion]: D,
							[Ct.a.isRemoved]: !!m.bannedBy && Ce || m.isDeleted && _
						})
					}, o.a.createElement(ct.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", O + 1)], {
						hk: "2XnyAV"
					})), o.a.createElement(Rt, {
						userHasNft: qe,
						childrenInfo: t,
						className: Object(d.a)({
							[Ct.a.collapsed]: a,
							[Ct.a.noFlair]: Object(dt.o)(x || null)
						}),
						collapsed: a,
						collapsedBecauseCrowdControl: i,
						comment: m,
						commentsPageKey: u,
						flair: x,
						isAdmin: _,
						isPostComment: !0,
						onCommentAuthorClick: W,
						onCommentTimestampClick: K,
						renderedInOverlay: ee,
						renderContractorBadge: je
					}), !a && o.a.createElement(r.Fragment, null, T && o.a.createElement(h.a, {
						className: Object(d.a)(Ct.a.EditCommentForm, Ct.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: O,
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
					}), !T && (!pe || _) && o.a.createElement("div", {
						"data-testid": nt.d,
						ref: Pe,
						className: Object(d.a)(Ct.a.CommentBody, {
							[Ct.a.restrictHeight]: !(!ne || !Pe.current) && Pe.current.clientHeight > It
						})
					}, $ ? o.a.createElement(We.a, {
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
					})), G && Oe && fe && o.a.createElement(ze.a, {
						thing: m
					}), G && Oe && xe && o.a.createElement(Qe.a, {
						onIgnoreReports: z,
						reportable: m
					}), null != j ? j : ve && o.a.createElement(Lt, null, Ee && o.a.createElement(Tt, {
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
						depth: O,
						isAvatarsInCommentsEnabled: I,
						collapsedBecauseCrowdControl: i,
						modModeEnabled: G,
						moderatorPermissions: b || V,
						renderedInOverlay: ee,
						isCommentFocused: y,
						subreddit: ae,
						trackCommentClick: ce
					})), be && f.map(e => o.a.createElement(wt, {
						key: e
					}, e)), te && o.a.createElement(h.a, {
						className: Object(d.a)(Ct.a.EditCommentForm, Ct.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: O,
						draftType: c.c.replyToComment,
						draftKey: ge,
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
								draftKey: ge,
								parentCommentDepth: O,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							}) : Object(p.o)({
								commentsPageKey: u,
								draftKey: ge,
								parentCommentDepth: O,
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
			t.a = e => o.a.createElement(et.a.Consumer, null, t => o.a.createElement(Gt, _t({}, e, {
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
					return i.a.createElement("div", {
						className: Object(d.a)(v.a.StateContainer, t)
					}, s ? i.a.createElement(j.a, {
						className: v.a.LiveChatIcon
					}) : i.a.createElement(x.a, {
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
				}, i.a.createElement(x.a, {
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
					}, i.a.createElement(x.a, {
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
				L = l.a.div("CommentsPlaceholderContainer", v.a),
				R = l.a.div("CommentPlaceholder", v.a),
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
					return i.a.createElement(L, null, o()(10, e => i.a.createElement(R, {
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
			const x = "create-community-button",
				j = f.a.wrapped(l.c, "StyledTooltip", O.a),
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
						tooltipId: x
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
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				j = s("./src/reddit/models/Toast/index.ts"),
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
				const L = Object(n.useCallback)(async () => {
					const e = await Object(p.b)(t);
					e && (N(e.languages), w(e.preferences), C(!0))
				}, [t]);
				Object(n.useEffect)(() => {
					L()
				}, [L]);
				const R = e => {
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
								kind: j.b.SuccessCommunity,
								text: S._("Changes saved", null, {
									hk: "2isjrZ"
								})
							})): s(Object(c.f)({
								kind: j.b.Error,
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
				}, r.a.createElement(x.a, {
					className: l.a.Close,
					onClick: () => R("skip"),
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
					onClick: () => R("later")
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
		"./src/reddit/components/SearchPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return G
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				m = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				u = s("./src/reddit/components/ModModeReports/index.tsx"),
				p = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				h = s("./src/reddit/components/PostContainer/index.tsx"),
				g = s("./src/reddit/components/PostTitle/index.tsx"),
				O = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
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
				w = () => Object(C.c)(P);
			var T = s("./src/reddit/contexts/Post/index.tsx"),
				L = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				R = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
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
			const V = Object(a.a)(e => {
					const {
						className: t,
						crosspost: s,
						eventFactory: a,
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
						poll: w,
						post: T,
						redditStyle: A,
						searchQuery: V,
						showBulkActionCheckbox: G,
						subredditOrProfile: H,
						title: W
					} = e, K = A ? void 0 : C, q = s || void 0, z = Object(R.a)(S), Y = Object(m.a)(T), Q = Object(p.c)(T), J = Object(j.c)({
						crosspost: s,
						post: T,
						url: void 0,
						usePreview: !1
					}), X = J && Object(M.a)(J), Z = !v, $ = Object(n.useMemo)(() => W ? void 0 : Object(B.a)(V, e => r.a.createElement("span", {
						className: Object(o.a)(D.a.syntaxHighlight)
					}, e), e => e), [W, V]), ee = {
						flairStyleTemplate: K,
						isOverlay: E,
						onClickPostAuthor: I,
						onClickPostCommunity: N,
						post: T,
						shouldShowSubscribeButton: Z,
						subredditOrProfile: H
					}, te = null != W ? W : r.a.createElement("div", {
						className: Object(o.a)(D.a.paddingSide, D.a.postItemTitleContainer)
					}, r.a.createElement("div", null, r.a.createElement(g.c, {
						format: $,
						hideSourceLink: !0,
						poll: w,
						post: T,
						redditStyle: !0,
						size: g.b.Medium,
						isOverlay: E,
						hideNSFWSpoilerFlair: !0
					}), T.source && !q && r.a.createElement(L.a, {
						className: D.a.outboundLink,
						href: T.source.url,
						isSponsored: T.isSponsored,
						postId: T.id,
						source: T.source
					}, Object(i.a)(T))), X && r.a.createElement("div", {
						className: D.a.thumbnailContainer
					}, r.a.createElement(j.b, {
						className: D.a.thumbnail,
						crosspost: q && T,
						isMeta: T.isMeta,
						post: q || T,
						redditStyle: A,
						templatePlaceholderImage: K && K.postPlaceholderImage
					})));
					return r.a.createElement(h.b, {
						className: Object(o.a)(D.a.postContainer, Object(F.a)(e), y ? D.a.mFirst : void 0, t),
						eventFactory: a,
						isOverlay: E,
						onClick: _,
						post: T,
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
						post: T
					}), r.a.createElement("div", {
						className: Object(o.a)(D.a.postContent, {
							[D.a.showBulkActionCheckbox]: G
						}),
						"data-click-id": "body"
					}, r.a.createElement(f.c, U({
						className: Object(o.a)(D.a.paddingSide, D.a.postItemMetaContainer),
						key: "PostMeta"
					}, ee)), r.a.createElement(x.a, {
						className: Object(o.a)(D.a.paddingSide, D.a.postItemWarningContainer),
						isSpoiler: T.isSpoiler,
						isNSFW: T.isNSFW,
						isQuarantined: null == H ? void 0 : H.isQuarantined
					}), te, k && z && Y && r.a.createElement(l.a, {
						thing: T
					}), k && z && Q && r.a.createElement(u.a, {
						onIgnoreReports: P,
						reportable: T
					}), r.a.createElement(O.c, {
						className: Object(o.a)(D.a.paddingSide, D.a.postItemFlatlistContainer),
						post: T
					}), r.a.createElement(d.d, null))))
				}),
				G = Object(T.b)((e => t => {
					const s = Object(E.ib)(),
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
						a = Object(y.e)(w),
						i = {
							...t,
							...a,
							...n,
							searchQuery: o
						};
					return r.a.createElement(e, i)
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
					post: x,
					subredditOrProfile: j,
					tooltipType: y
				} = e, C = Object(u.a)(), {
					isSubEnlarged: v
				} = Object(a.e)(p.a);
				return o.a.createElement("div", {
					className: Object(n.a)(t, g.a.metaContainer)
				}, !x.isSponsored && j && o.a.createElement(i.a, {
					className: Object(n.a)(g.a.hovercardContainer, g.a.hovercardContainer),
					postId: x.id,
					subredditName: j.name
				}, o.a.createElement(b.b, {
					className: Object(n.a)(g.a.subredditIcon, v && g.a.enlargedSubredditIcon),
					linkTo: j.url,
					linkProps: h ? {
						"data-testid": O,
						onClick: h
					} : void 0,
					subredditOrProfile: j
				}), o.a.createElement(l.a, {
					className: Object(n.a)(g.a.subredditName, v && g.a.enlargedSubredditName),
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
					className: g.a.postTopMeta,
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
				return x
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

			function x(e) {
				let {
					query: t,
					type: s,
					searchBarId: n = c.a,
					searchOptions: b,
					tab: f
				} = e;
				const x = Object(m.a)();
				Object(o.useEffect)(() => {
					x(Object(l.n)(s, b))
				}, [s]);
				const j = b.restrict_sr || u.pageConfig[f].sidebar,
					y = n === i.a;
				return a.a.createElement("div", {
					className: Object(r.a)(y && h.a.padding)
				}, a.a.createElement("div", {
					className: Object(r.a)(h.a.noResults, j && h.a.withSidebar),
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
				return Pt
			})), s.d(t, "c", (function() {
				return Ft
			})), s.d(t, "b", (function() {
				return Bt
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
				w = s("./src/reddit/components/Flair/index.tsx"),
				T = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				L = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = s("./src/reddit/controls/InternalLink/index.tsx"),
				M = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				B = s("./src/reddit/controls/ScrollerTooltipPortal/index.tsx"),
				A = s("./src/reddit/hooks/useClickSourceData.ts"),
				D = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				U = s("./src/reddit/hooks/useTheme.ts"),
				V = s("./src/reddit/icons/fonts/index.tsx"),
				G = s("./src/reddit/selectors/experiments/search/searchSubDiscovery.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				K = s("./src/reddit/components/AuthorLink/index.tsx"),
				q = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				z = s("./src/reddit/components/HumanDate/HumanDateTime.tsx"),
				Y = s("./src/reddit/components/HumanDate/TimeAgo.tsx"),
				Q = s("./src/reddit/components/PostTopMeta/index.tsx"),
				J = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				X = s.n(J);

			function Z(e) {
				var t;
				const {
					className: s,
					clickSourceData: n,
					onClick: r,
					subredditOrProfile: o
				} = e, c = Object(i.e)(H.fb), d = null === (t = o.icon) || void 0 === t ? void 0 : t.url, l = null == o ? void 0 : o.color;
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
					"data-testid": W.a,
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
				} = e, n = Object(D.a)(Q.e), r = t.crosspostRootId ? P.fbt._("Crossposted by", null, {
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
						"data-testid": Q.b
					},
					onClick: s
				}, `u/${t.author}`)), t.authorFlair && a.a.createElement("div", {
					className: X.a.flairContainer
				}, a.a.createElement(w.c, {
					flair: t.authorFlair,
					forceSmallEmojis: !0
				})), !t.isSponsored && a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: X.a.timestamp,
					"data-testid": Q.c,
					"data-click-id": C.a.TIMESTAMP,
					onMouseEnter: n.show,
					onMouseLeave: n.hide,
					ref: n.target.ref
				}, a.a.createElement(Y.a, {
					seconds: t.createdAt / d.Yb
				})), a.a.createElement(B.a, null, a.a.createElement(L.a, {
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
					"data-testid": W.b,
					"data-click-id": C.a.SUBREDDIT,
					onClick: r,
					to: {
						pathname: c.url,
						state: d
					}
				}, c.displayText)), !o.isSponsored && !s && a.a.createElement(a.a.Fragment, null, a.a.createElement(M.b, null), a.a.createElement(R.h, {
					type: o.belongsTo.type,
					id: o.belongsTo.id
				})), a.a.createElement(M.b, null), a.a.createElement($, {
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
				ae = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				ie = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = s("./src/reddit/controls/OutboundLink/index.tsx"),
				de = s("./src/reddit/helpers/clickSourceData/index.ts"),
				le = s("./src/reddit/helpers/overlay/index.ts"),
				me = s("./src/reddit/helpers/path/index.ts"),
				ue = s("./src/reddit/helpers/trackers/searchResults.ts"),
				pe = s("./src/reddit/hooks/usePageLayer.ts"),
				be = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				he = s("./src/reddit/selectors/searchResults.ts"),
				ge = s("./src/telemetry/models/Outbound.ts"),
				Oe = s("./src/reddit/components/SearchPost/index.m.less"),
				fe = s.n(Oe);

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
				} = e, i = s ? ne.a.PostComments : ne.a.PostItem, c = Object(A.a)(), d = Object(S.a)(n.permalink, void 0, c), l = Object(U.a)(), m = Object(o.useMemo)(() => Object(ae.a)(r, e => a.a.createElement("span", {
					className: Object(v.a)(fe.a.syntaxHighlight)
				}, e), e => e), [r])(n);
				return a.a.createElement("div", {
					className: Object(v.a)(n.id, fe.a.postTitleColors),
					"data-adclicklocation": C.a.TITLE
				}, a.a.createElement("style", {
					dangerouslySetInnerHTML: {
						__html: `\n        .${n.id}.${fe.a.postTitleColors} {\n          --postTitle-VisitedLinkColor: ${Object(f.c)(.45,Object(be.a)({theme:l}).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(f.c)(.45,Object(be.a)({theme:l}).titleText,Object(be.a)({theme:l}).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(f.c)(.45,Object(be.a)({theme:l}).bodyText,Object(be.a)({theme:l}).body)};\n        }\n      `
					}
				}), a.a.createElement("div", {
					className: fe.a.postTitleVisibility,
					dangerouslySetInnerHTML: {
						__html: `\n            <img alt="" src="${h.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n          `
					}
				}), a.a.createElement("div", {
					className: fe.a.titleContainer
				}, a.a.createElement(x.a, {
					to: d
				}, a.a.createElement("div", {
					className: Object(v.a)(fe.a.inline, fe.a.titleTextColor, fe.a.titleMedium, fe.a.paddingRight),
					"data-testid": je,
					style: {
						"--posttitletextcolor": Object(be.a)({
							theme: l
						}).titleText
					}
				}, a.a.createElement(se.b, {
					type: i
				}, m))), n.flair && a.a.createElement(k.a, {
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
					i = a.a.createElement(re.a, {
						alt: e.post.title,
						className: Object(v.a)(fe.a.thumbnail, n && fe.a.blurred),
						src: e.post.thumbnail.url,
						theme: e.theme,
						isOutbound: r && !e.post.isSponsored || !1
					});
				return a.a.createElement("div", {
					className: fe.a.container,
					onClick: e.makeSendClickEventFn
				}, Object(E.a)(o) && !e.post.media ? a.a.createElement(ce.b, {
					href: r || o,
					isSponsored: e.post.isSponsored,
					postId: e.post.id,
					source: e.post.source,
					sourceElement: ge.SourceElement.PostImage
				}, i) : i)
			}
			var ve = s("./src/reddit/components/SearchPost/Placeholder.tsx"),
				Ee = s("./src/reddit/constants/elementIds.ts"),
				Se = s("./src/reddit/helpers/trackers/screenview.ts"),
				ke = s("./src/reddit/selectors/platform.ts"),
				_e = s("./src/reddit/selectors/tracking.ts"),
				Ie = s("./src/telemetry/index.ts"),
				Ne = s("./src/telemetry/models/Timer.ts"),
				Pe = s("./node_modules/react-router-redux/es/index.js"),
				we = s("./src/reddit/components/Comments/Comment/index.tsx"),
				Te = s("./src/reddit/components/PostList/index.tsx"),
				Le = s("./src/reddit/components/PostTitle/index.tsx"),
				Re = s("./src/reddit/components/SearchPost/index.tsx"),
				Fe = s("./src/reddit/connectors/PostList/index.ts"),
				Me = s("./src/reddit/contexts/Visibility.tsx"),
				Be = s("./src/reddit/controls/Button/index.tsx"),
				Ae = s("./src/reddit/controls/Button/index.m.less"),
				De = s.n(Ae),
				Ue = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				Ve = s("./src/reddit/hooks/useTracking.ts"),
				Ge = s("./src/reddit/selectors/comments.ts"),
				He = s("./src/reddit/selectors/commentSelector.ts"),
				We = s("./src/reddit/selectors/posts.ts");

			function Ke(e) {
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
			var qe = s("./src/reddit/components/SearchResultsContent/Comment/index.m.less"),
				ze = s.n(qe);
			var Ye;
			! function(e) {
				e.COMMENT = "comment", e.COMMENT_AUTHOR = "comment_author", e.COMMENT_TIMESTAMP = "comment_timestamp", e.GO_TO_COMMENT_LINK = "go_to_comment_link", e.POST = "post", e.POST_AUTHOR = "post_author", e.POST_COMMUNITY = "post_community"
			}(Ye || (Ye = {}));
			var Qe = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				Je = s("./src/lib/truncateText/index.ts"),
				Xe = s("./src/reddit/actions/post.ts"),
				Ze = s("./src/lib/prettyPrintNumber/index.ts"),
				$e = s("./src/reddit/components/SubscribeButton/index.tsx"),
				et = s("./src/reddit/helpers/karma.ts");
			var tt = s("./src/reddit/constants/tracking.ts"),
				st = s("./src/reddit/helpers/correlationIdTracker.ts"),
				nt = s("./src/reddit/selectors/telemetry.ts");
			var rt = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ot = s("./src/reddit/constants/posts.ts"),
				at = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				it = s("./src/reddit/selectors/subreddit.ts"),
				ct = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				dt = s.n(ct);
			const lt = Object(c.c)({
					isBlockingInterstitialEnabled: at.b,
					isBlockingInterstitialV2Enabled: at.c,
					hideNSFWPref: H.H,
					subredditOrProfile: it.Q,
					subredditOrProfileAboutInfo: it.M,
					userIsSubscriber: it.jb
				}),
				mt = e => {
					const {
						className: t,
						first: s,
						identifier: n,
						listingKey: r,
						searchOptions: c,
						sidebar: d
					} = e, l = Object(ie.ib)(), m = Object(Ve.a)(), u = Object(A.a)(), {
						isBlockingInterstitialEnabled: p,
						isBlockingInterstitialV2Enabled: b,
						hideNSFWPref: h,
						subredditOrProfile: g,
						subredditOrProfileAboutInfo: O
					} = Object(i.e)(t => lt(t, e)), {
						withCommunityDescription: f
					} = Object(i.e)(G.a), x = d && f, j = Object(i.d)(), y = Object(o.useCallback)(e => {
						g && n.type === ot.a.PROFILE && (p || b) && (e.preventDefault(), j(Object(Xe.bb)(g.url))), m(Object(ue.q)(c, l, n, r))
					}, [m, c, l, r, n, p, b, j, g]);
					if (!g) return null;
					const C = g.displayText,
						E = O.publicDescription,
						S = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									s = Object(et.a)(e),
									n = Object(Ze.b)(s);
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
							}, [P.fbt._plural(s.subscribers, "number of subscribers", Object(Ze.b)(s.subscribers))], {
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
							if ("subreddit" !== t) return s.acceptFollowers ? a.a.createElement($e.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "profile"
								},
								onClick: r,
								priority: i,
								small: !0
							}) : null;
							return "number" == typeof n.subscribers ? a.a.createElement($e.a, {
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
									const r = nt.H(n, void 0);
									return {
										source: ue.c.SEARCH,
										action: tt.c.CLICK,
										noun: `${s}_${ue.d[e.type]}`,
										actionInfo: Object(ue.k)(n, void 0, r, void 0),
										correlationId: Object(st.c)(st.a.SearchResults),
										profile: "profile" === e.type ? nt.X(n, e.id) : void 0,
										search: nt.db(n, t, Ue.a.SERP),
										subreddit: "subreddit" === e.type ? nt.pb(n, e.id) : void 0
									}
								})(n, c, e ? "unsubscribe" : "subscribe")
							},
							priority: Be.c.Tertiary
						});
					return a.a.createElement(F.default, {
						"data-testid": `${n.type}-link`,
						className: Object(v.a)(dt.a.link, d && dt.a.sidebar, s ? dt.a.mFirst : void 0, t),
						onClick: y,
						to: {
							pathname: g.url,
							state: u
						}
					}, a.a.createElement("div", {
						className: dt.a.container
					}, a.a.createElement(rt.b, {
						className: Object(v.a)(dt.a.subredditIcon, x && dt.a.sidebar),
						shouldHideNsfwIcon: h,
						subredditOrProfile: g
					}), a.a.createElement("div", {
						className: dt.a.contentContainer
					}, a.a.createElement("div", {
						className: Object(v.a)(dt.a.subredditInfo, d && dt.a.sidebar)
					}, a.a.createElement("h6", {
						className: Object(v.a)(dt.a.title, d && dt.a.sidebar)
					}, C), a.a.createElement(te.a, {
						className: Object(v.a)(dt.a.warnings, d && dt.a.sidebar),
						isQuarantined: null == g ? void 0 : g.isQuarantined,
						isNSFW: null == g ? void 0 : g.isNSFW
					}), S && a.a.createElement(a.a.Fragment, null, a.a.createElement("p", {
						className: dt.a.subtitle
					}, !d && a.a.createElement(M.b, null), S))), !d && a.a.createElement("p", {
						className: dt.a.description
					}, Object(Je.a)(E, 150, "..."))), a.a.createElement("div", {
						className: dt.a.buttonContainer
					}, k)), x && n.type !== ot.a.PROFILE && a.a.createElement("p", {
						className: Object(v.a)(dt.a.description, d && dt.a.sidebar)
					}, Object(Je.a)(E, 75, "...")))
				};
			var ut = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				pt = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				bt = s("./src/lib/objectSelector/index.ts"),
				ht = s("./src/reddit/components/Comments/Comment/TopMeta/Author.tsx"),
				gt = s("./src/reddit/components/Comments/Comment/TopMeta/Created.tsx"),
				Ot = s("./src/reddit/components/Comments/Comment/TopMeta/Edited.tsx"),
				ft = s("./src/reddit/components/Comments/Comment/TopMeta/Role.tsx"),
				xt = s("./src/reddit/components/RichTextJson/index.tsx"),
				jt = s("./src/reddit/components/UserIcon/constants.ts"),
				yt = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				Ct = s("./src/reddit/constants/componentTestIds.ts"),
				vt = s("./src/reddit/controls/MetaData/index.tsx"),
				Et = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				St = s("./src/reddit/models/User/index.ts"),
				kt = s("./src/reddit/components/SearchResultsContent/PdpComment/index.m.less"),
				_t = s.n(kt);
			var It = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less"),
				Nt = s.n(It);
			const Pt = 5,
				wt = Object(c.c)({
					apiError: he.b,
					apiPending: he.c,
					loadMore: he.t,
					viewportDataLoaded: _e.a
				}),
				Tt = Object(c.c)({
					apiError: he.e,
					apiPending: he.f,
					loadMore: he.u,
					viewportDataLoaded: _e.a
				}),
				Lt = Object(c.c)({
					apiError: he.h,
					apiPending: he.i,
					loadMore: he.v,
					viewportDataLoaded: _e.a
				}),
				Rt = Object(c.c)({
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
						const r = Object(ie.ib)(),
							o = Object(Ve.a)(),
							c = Object(i.d)(),
							d = Object(i.e)(e => Object(He.c)(e, {
								commentId: t
							})),
							l = Object(i.e)(e => Object(Ge.m)(e, {
								commentId: t
							})),
							m = Object(i.e)(e => (null == d ? void 0 : d.postId) ? Object(We.G)(e, {
								postId: null == d ? void 0 : d.postId
							}) : void 0),
							u = Object(i.e)(e => (null == d ? void 0 : d.postId) && Object(We.F)(e, {
								postId: null == d ? void 0 : d.postId
							})),
							p = Object(i.e)(e => e.search.searchQuery),
							b = Object(A.a)();
						if (!(null == d ? void 0 : d.postId) || !u) return null;
						const h = Object(Fe.b)(c),
							g = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.a;
								return function() {
									o(Object(ue.p)({
										comment: d,
										key: s,
										originElement: e,
										pageLayer: r,
										searchOptions: n,
										telemetrySource: Ue.a.SERP
									})), t(...arguments)
								}
							},
							f = Object(Te.b)(d.postId, h),
							x = e => g(e);
						return a.a.createElement(Re.a, {
							crosspost: void 0,
							isActive: !1,
							isLoggedIn: !1,
							modModeEnabled: !1,
							moderatorPermissions: void 0,
							onClickPost: g(Ye.POST, null != f ? f : O.a),
							onClickPostAuthor: x(Ye.POST_AUTHOR),
							onClickPostCommunity: x(Ye.POST_COMMUNITY),
							onIgnoreReports: O.a,
							postId: d.postId,
							searchQuery: p,
							showEditFlair: !1,
							title: a.a.createElement(Me.a, null, a.a.createElement("div", {
								className: ze.a.commentContainer,
								"data-testid": "search_comment_container"
							}, a.a.createElement("div", {
								className: ze.a.postTitleContainer,
								"data-testid": "search_comment_post_title_container",
								onClick: x(Ye.POST)
							}, m && a.a.createElement(Le.c, {
								className: ze.a.postTitle,
								hideSourceLink: !0,
								post: m,
								redditStyle: !0,
								disableFlair: !0,
								size: Le.b.Metadata
							})), a.a.createElement("div", {
								className: ze.a.commentContent,
								"data-testid": "search_comment",
								onClick: g(Ye.COMMENT, e => {
									e.stopPropagation(), c(Object(Pe.b)(Object(S.a)(l, !0, b)))
								})
							}, a.a.createElement(we.a, {
								clearHovered: O.a,
								commentId: t,
								commentsPageKey: "",
								flatlist: a.a.createElement(Ke, {
									className: ze.a.commentFlatlist,
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
								onCommentAuthorClick: e => (e.stopPropagation(), x(Ye.COMMENT_AUTHOR)(e)),
								onCommentTimestampClick: e => (e.stopPropagation(), x(Ye.COMMENT_TIMESTAMP)(e)),
								postId: d.postId,
								renderedInOverlay: !1,
								restrictHeight: !0,
								rtJSONRedditStyle: !0,
								scrollToAndRemeasure: O.a,
								showBlockingInterstitial: O.a,
								userIconSmall: !0,
								onClickRevealSpoilerText: () => {
									o(Object(ue.s)(n, d, s, r))
								}
							})), a.a.createElement(Be.t, {
								kind: Be.b.InternalLink,
								priority: Be.c.PlainLink,
								className: Object(v.a)(ze.a.goToThreadLinkButton, De.a.PlainLinkButton),
								"data-testid": "go_to_thread_link",
								onClick: g(Ye.GO_TO_COMMENT_LINK, e => {
									e.stopPropagation()
								}),
								to: Object(S.a)(u, !0, b)
							}, P.fbt._("Go to thread", null, {
								hk: "npBX6"
							}))))
						})
					},
					moreResultsTypes: [d.jc.Comments],
					Placeholder: Qe.a,
					selector: Tt,
					telemetryComponentName: "commentSearchResults",
					telemetryViewEvent: pt.c
				},
				[Ft.Subreddits]: {
					cacheName: "community",
					Component: mt,
					moreResultsTypes: [d.jc.Subreddits],
					Placeholder: ut.a,
					selector: Lt,
					telemetryComponentName: "communitySearchResults",
					telemetryViewEvent: pt.d
				},
				[Ft.Users]: {
					cacheName: "author",
					Component: mt,
					moreResultsTypes: [d.jc.Users],
					Placeholder: ut.a,
					selector: wt,
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
						} = e, c = Object(i.e)(t => Object(he.A)(t, e)), d = Object(i.e)(e => {
							if (c.crosspostRootId) return Object(he.A)(e, {
								identifier: c.crosspostRootId
							})
						}), l = Object(i.e)(e => Object(H.lb)(e)), m = Object(pe.a)(), u = Object(i.d)(), p = Object(oe.b)(), b = function(e) {
							var t;
							const s = (null === (t = e.source) || void 0 === t ? void 0 : t.url) || "",
								n = y.a.parse(s),
								r = n.path || "",
								o = r.length > 7 ? r.substring(0, 7) + "..." : r;
							return (n.hostname ? n.hostname.replace("www.", "") : "") + o
						}(c), h = Object(ie.cb)(m), g = d ? d.thumbnail.url : c.thumbnail.url, f = g && Object(E.a)(g), x = Object(U.a)(), j = function(e) {
							let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.a;
							return function() {
								p(Object(ue.r)(c.id, o, m, e || null, r)), t(...arguments)
							}
						}, S = e => j(e), k = {
							isOptimizedSerp: !0,
							post: c,
							subredditOrProfile: c.subreddit || c.profile,
							onClickPostAuthor: e => (e.stopPropagation(), S(ue.e.POST_AUTHOR)(e)),
							onClickPostCommunity: e => (e.stopPropagation(), S(ue.e.POST_COMMUNITY)(e))
						};
						return a.a.createElement("div", {
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
						}, a.a.createElement(_.a, {
							"data-click-id": C.a.BACKGROUND,
							redditStyle: !0
						}, a.a.createElement("div", {
							className: fe.a.postContent,
							"data-click-id": C.a.BODY
						}, a.a.createElement(ee, xe({
							className: Object(v.a)(fe.a.paddingSide, fe.a.postItemMetaContainer),
							key: "PostMeta"
						}, k)), a.a.createElement(te.a, {
							className: Object(v.a)(fe.a.paddingSide, fe.a.postItemWarningContainer),
							isQuarantined: (null === (t = c.subreddit) || void 0 === t ? void 0 : t.isQuarantined) || (null === (s = c.profile) || void 0 === s ? void 0 : s.isQuarantined),
							isNSFW: c.isNSFW,
							isSpoiler: c.isSpoiler
						}), a.a.createElement("div", {
							className: Object(v.a)(fe.a.paddingSide, fe.a.postItemTitleContainer)
						}, a.a.createElement("div", {
							className: fe.a.postContent
						}, a.a.createElement(ye, {
							searchQuery: h,
							post: c
						}), c.source && !c.crosspostRootId && a.a.createElement(ce.b, {
							className: fe.a.outboundLink,
							href: c.source.url,
							isSponsored: c.isSponsored,
							postId: c.id,
							source: c.source
						}, b)), f && a.a.createElement("div", {
							className: fe.a.thumbnailContainer
						}, a.a.createElement(Ce, {
							makeSendClickEventFn: e => (e.stopPropagation(), S(ue.e.POST)(e)),
							post: c,
							theme: x
						}))), a.a.createElement(N.c, {
							className: Object(v.a)(fe.a.paddingSide, fe.a.postItemFlatlistContainer),
							post: c
						}))))
					},
					moreResultsTypes: [d.jc.Posts],
					Placeholder: ve.a,
					selector: Rt,
					telemetryComponentName: "postList",
					telemetryViewEvent: pt.f
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
						const c = Object(ie.ib)(),
							d = Object(Ve.a)(),
							l = Object(i.d)(),
							m = Object(i.e)(e => Object(He.c)(e, {
								commentId: t
							})),
							u = Object(i.e)(e => Object(Ge.m)(e, {
								commentId: t
							})),
							p = Object(i.e)(e => Object(H.m)(e)),
							b = Object(i.e)(H.H),
							h = Object(i.e)(e => Object(ke.i)(e)),
							g = Object(i.e)(e => (null == m ? void 0 : m.postId) && Object(We.F)(e, {
								postId: null == m ? void 0 : m.postId
							})),
							f = Object(i.e)(e => Object(ie.s)(e, {
								pageLayer: c
							})),
							x = Object(A.a)();
						if (!(null == m ? void 0 : m.postId) || !g) return null;
						const j = !!p && Object(St.e)(p) === m.author,
							y = j ? null == p ? void 0 : p.accountIcon : m.profileImage,
							C = !j && m.profileOver18 && b ? jt.a || yt.a : y,
							E = Object(Et.a)(m),
							k = Object(bt.b)(e => {
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
									d(Object(ue.p)({
										comment: m,
										key: n,
										originElement: e,
										pageLayer: c,
										searchOptions: r,
										telemetrySource: Ue.a.PdpCommentSearch
									})), t(...arguments)
								}
							},
							I = e => _(e);
						return a.a.createElement(Me.a, null, a.a.createElement("div", {
							className: Object(v.a)(_t.a.commentContainer, _t.a.marginContainer, _t.a.metadataFont, s && _t.a.first),
							"data-testid": "search_pdp_comment_container"
						}, a.a.createElement("div", {
							"data-testid": "search_pdp_comment",
							onClick: _(Ye.COMMENT, e => {
								e.stopPropagation(), l(Object(Pe.b)(Object(S.a)(u, !0, x)))
							})
						}, a.a.createElement("div", {
							className: _t.a.flex
						}, a.a.createElement("img", {
							alt: P.fbt._("User avatar", null, {
								hk: "X43nA"
							}),
							className: Object(v.a)(_t.a.pdpUserIcon, _t.a.iconSpacer),
							src: C
						}), a.a.createElement(ht.a, {
							authorClassName: _t.a.actionFont,
							collapsed: !1,
							comment: m,
							onClick: e => (e.stopPropagation(), I(Ye.COMMENT_AUTHOR)(e)),
							renderedInOverlay: h
						}), a.a.createElement(ft.a, {
							className: _t.a.leftSpacer,
							comment: m,
							subredditDisplayText: (null == f ? void 0 : f.displayText) || "",
							renderContractorBadge: !0,
							renderedInOverlay: h
						}), a.a.createElement(vt.c, {
							className: Object(v.a)(_t.a.separator, _t.a.metadataColor)
						}), a.a.createElement(gt.a, {
							className: _t.a.metadataColor,
							key: "Created",
							comment: m,
							compact: !0,
							onClick: e => (e.stopPropagation(), I(Ye.COMMENT_TIMESTAMP)(e)),
							permalink: u,
							renderedInOverlay: h
						}), m.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(vt.c, {
							className: Object(v.a)(_t.a.separator, _t.a.metadataColor)
						}), a.a.createElement(Ot.a, {
							className: _t.a.metadataColor,
							compact: !0,
							editedAt: m.editedAt
						}))), a.a.createElement("div", {
							className: Object(v.a)(_t.a.commentContent, _t.a.marginTop),
							"data-testid": Ct.d
						}, a.a.createElement(xt.b, {
							className: _t.a.background,
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
						}), a.a.createElement(Ke, {
							className: Object(v.a)(_t.a.metadataFont, _t.a.marginTop),
							comment: m
						})), a.a.createElement(R.b, {
							commentId: m.id
						}), a.a.createElement(R.a, {
							commentId: m.id,
							commentsPageKey: o
						}))))
					},
					moreResultsTypes: [d.jc.Comments],
					Placeholder: p.a,
					selector: Tt,
					telemetryComponentName: "pdpCommentSearchResults",
					telemetryViewEvent: pt.e
				}
			};
			const Bt = e => {
				const t = new m.a(250),
					s = Object(o.useRef)(),
					n = Object(o.useRef)(null),
					c = Object(ie.ib)(),
					p = Object(oe.b)(),
					h = Object(i.d)(),
					{
						identifiers: g,
						listingKey: O,
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
						apiError: w,
						apiPending: T,
						loadMore: L
					} = Object(i.e)(t => I(t, e)),
					R = !!Object(i.e)(e => Object(ke.i)(e)),
					F = j ? Pt : g.length,
					M = j ? Pt : 10,
					B = Object(l.a)(R),
					A = Object(l.a)(g.length),
					D = () => Boolean(w) || !1 === T,
					U = () => g.length > 0,
					V = !(U() || D()),
					G = () => {
						if (!v) return;
						const e = Ie.c.has(O) ? Ie.c.end(O) : 0;
						p(Object(Se.t)(O, f, Ne.TimerType.InApp, e, c))
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
					V || G()
				}, [V]), Object(o.useEffect)(() => {
					n.current && Ie.c.cancel(n.current), g.length && (n.current = Ie.c.start())
				}, [n, O, g.length, A]), Object(o.useEffect)(() => {
					B && !R && G()
				}, [R, B]);
				const H = e => {
						s.current = e instanceof Element ? e : void 0
					},
					W = () => {
						const e = g.slice(0, F).map((e, s) => ((e, s) => {
							let n;
							n = function(e) {
								return void 0 !== e.type
							}(e) ? e.id : e;
							const r = `${E}-search-${s}-${O}`,
								o = Object(pt.b)(n, O, () => P(p, f, e, O, c, y));
							let i;
							if (void 0 === (i = t.get(r))) {
								const t = `${E}-search-item-[id:${n}]`;
								i = {
									estHeight: 32,
									trackOnEnteredViewport: o,
									id: n,
									render: () => a.a.createElement(S, {
										className: Nt.a.separatedCommunity,
										first: 0 === s,
										identifier: e,
										key: t,
										listingKey: O,
										searchOptions: f,
										sidebar: j,
										pageKey: C
									})
								}
							}
							return t.set(r, i), i
						})(e, s));
						return a.a.createElement(b.b, {
							getContainer: () => R ? document.getElementById(Ee.e) : null,
							key: O,
							innerRef: H,
							loadMoreToken: L && L.token ? L.token : void 0,
							onLoadMore: () => {
								h(Object(u.n)(k))
							}
						}, e)
					};
				return U() ? W() : D() ? W() : (() => {
					const e = !w;
					return a.a.createElement("div", {
						"data-testid": `${x}-list-placeholder`
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
		"./src/reddit/components/SearchWarnings/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
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
				}, r.a.createElement(i.a, {
					className: Object(o.a)(d.a.warningIcon, d.a.quarantineIcon)
				}), l._("quarantined", null, {
					hk: "1j7soK"
				})) : null, n ? r.a.createElement("span", {
					className: Object(o.a)(d.a.warningText, d.a.nsfwWarning)
				}, r.a.createElement(a.a, {
					name: "nsfw_fill",
					className: Object(o.a)(d.a.warningIcon)
				}), l._("nsfw", null, {
					hk: "2IetSA"
				})) : null, c ? r.a.createElement("span", {
					className: Object(o.a)(d.a.warningText, d.a.spoilerWarning)
				}, r.a.createElement(a.a, {
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
				x = s("./src/reddit/selectors/meta.ts"),
				j = s("./src/redditGQL/types.ts"),
				y = s("./src/reddit/components/SidebarFooter/index.m.less"),
				C = s.n(y);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = c.a.a("Link", C.a), S = Object(a.c)({
				countryCode: x.b,
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
				})), t === j.l.De && r.a.createElement(E, {
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
				})), t === j.l.De && r.a.createElement(E, {
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
				}, v._("Reddit Inc © {year}. All rights reserved", [v._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = _(k(Object(l.c)(e => {
				const t = Object(o.f)().getState(),
					s = Object(g.a)(t, Object(i.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.hd.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.hd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.hd.LargeImagePreview ? e.reredditButtons : [];
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
				})), e.countryCode === j.l.De && r.a.createElement(E, {
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
				})), e.countryCode === j.l.De && r.a.createElement(E, {
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
				}, v._("Reddit Inc © {year}. All rights reserved", [v._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
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
				x = f + 152 + 16,
				j = x + O + 8,
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
						className: Object(c.a)(v.a.StyledFlair, t === j.g.Cloud && v.a.cloudDisplay, {
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
						Object(O.d)(O.a.SearchResults), this.props.sendEvent(Object(x.b)(t))
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
					measureScrollFPS: O.d.measureScrollFPS,
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
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r);
			const a = new n.a(250),
				i = (e, t, s) => {
					const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const r = `${e.id}-${n}`;
						let i = a.get(r);
						if (void 0 === i) {
							const c = new RegExp(`(\\b${n}\\b)`, "gi"),
								d = e.title.split(c);
							i = s(o.a.createElement(o.a.Fragment, null, o.a.Children.toArray(d.map((e, s) => s % 2 != 0 ? t(e) : e)))), a.set(r, i)
						}
						return i
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
				return pr
			})), s.d(t, "default", (function() {
				return br
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
				O = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/lodash/isEmpty.js")),
				f = s.n(O),
				x = s("./src/lib/search/index.ts"),
				j = s("./src/reddit/actions/search.ts"),
				y = s("./src/config.ts"),
				C = s("./src/lib/intersectionObserver/index.ts"),
				v = s("./src/lib/isUrl/index.ts"),
				E = s("./src/lib/opener/index.ts"),
				S = s("./src/reddit/actions/post.ts"),
				k = s("./src/reddit/components/BlankPost/index.tsx"),
				_ = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				I = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				N = s("./src/reddit/components/Media/index.tsx"),
				P = s("./src/reddit/components/PostContainer/index.tsx"),
				w = s("./src/reddit/components/Thumbnail/index.tsx"),
				T = s("./src/reddit/components/TrackingHelper/index.tsx"),
				L = s("./src/reddit/constants/adEvents.ts"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/contexts/Post/index.tsx"),
				M = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				B = s("./src/reddit/helpers/clickSourceData/index.ts"),
				A = s("./src/reddit/helpers/overlay/index.ts"),
				D = s("./src/reddit/helpers/path/index.ts"),
				U = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				V = s("./src/reddit/helpers/trackers/searchResults.ts"),
				G = s("./src/reddit/models/Media/index.ts"),
				H = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				K = s("./src/reddit/selectors/searchResults.ts"),
				q = s("./src/reddit/selectors/showPromotedCTA.ts"),
				z = s("./src/reddit/selectors/user.ts"),
				Y = s("./node_modules/reselect/es/index.js"),
				Q = s("./src/lib/getShortenedLink.ts"),
				J = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				X = s("./src/reddit/components/PostTitle/index.tsx"),
				Z = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				$ = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				ee = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				te = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				se = s("./src/reddit/components/CallToActionButton/index.tsx"),
				ne = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				re = s("./src/reddit/hooks/useTheme.ts"),
				oe = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ae = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				ie = s.n(ae);
			const {
				fbt: ce
			} = s("./node_modules/fbt/lib/FbtPublic.js"), de = `${y.a.assetPath}/img/link-placeholder.png`, le = Object(Y.c)({
				autoplayPref: z.d,
				showPromotedCTA: q.a,
				flairStyleTemplate: R.Y,
				showCTAExperiment: H.a
			});

			function me(e) {
				var t;
				const {
					postId: s,
					listingKey: n,
					searchOptions: r,
					discoveryUnit: c
				} = e, d = Object(o.useRef)(), l = Object(o.useRef)(), {
					autoplayPref: m,
					flairStyleTemplate: u,
					showPromotedCTA: p,
					showCTAExperiment: b
				} = Object(i.e)(t => le(t, e)), h = Object(i.e)(e => Object(K.A)(e, {
					identifier: s
				})), O = Object(i.e)(e => Object(W.d)(e, {
					postId: s
				})), f = Object(i.e)(oe.b), x = Object(i.e)(oe.c), j = Object(R.ib)(), H = Object(T.b)(), q = Object(i.d)(), z = Object(re.a)(), {
					post: Y,
					subredditOrProfile: ae
				} = Object(F.d)(s), me = Object(o.useCallback)((e, t) => {
					q(Object(S.O)(e, t))
				}, [q]), ue = !!Y.source && !O;
				if (Object(o.useEffect)(() => (d.current && Object(C.a)(d.current, (e, t) => {
						l.current && (t ? l.current.focusContent() : l.current.pauseContent())
					}), Object(V.w)(n, Y.id, r, j, c), () => {
						d.current && Object(C.b)(d.current), l.current && l.current.stopContent(), d.current = null, l.current = null
					}), []), !Y) return null;
				const {
					media: pe
				} = O || Y || {}, be = (null == pe ? void 0 : pe.type) === G.o.EMBED && (null == pe ? void 0 : pe.provider) === G.v.Twitter, he = (null == pe ? void 0 : pe.type) === G.o.VIDEO || (null == pe ? void 0 : pe.type) === G.o.GIFVIDEO;

				function ge(e) {
					e.stopPropagation(), e.preventDefault(), Y.isSponsored ? (q(Object(S.y)(Y, L.a.Click)), Y.source ? Y.source.outboundUrl ? Object(E.e)(Y.source.outboundUrl, E.d.BLANK) : Object(E.e)(Y.source.url, E.d.BLANK) : Object(E.e)(Y.permalink, E.d.BLANK)) : q(f || x ? Object(S.Z)(Object(D.b)(Y.permalink), Y.id) : Object(A.a)({
						pathname: Object(D.b)(Y.permalink),
						state: Object(B.b)(j)
					}))
				}

				function Oe(e) {
					Y.isSponsored && he || ge(e), Y.isSponsored && function(e) {
						he || (e.stopPropagation(), e.preventDefault()), H(Object(V.y)(Y.id, r, c, n, j))
					}(e)
				}
				return Y.isBlank ? a.a.createElement(k.BlankPost, {
					onPostViewable: me,
					post: Y,
					postId: Y.id
				}) : a.a.createElement(F.a, {
					postId: s
				}, a.a.createElement(P.b, {
					className: ie.a.postContainer,
					eventFactory: function(e, t) {
						var s;
						let o = null,
							a = U.r;
						return Y.isSponsored || (a = U.t, o = null !== (s = V.E[t]) && void 0 !== s ? s : V.e.POST), a(r, j, o, n, c)(e)
					},
					onClick: ge,
					post: Y,
					"data-click-id": "hero_unit",
					style: {
						...Object(ne.d)({
							theme: z,
							flairStyleTemplate: u,
							redditStyle: !1
						}),
						...Object(ne.b)(u)
					}
				}, a.a.createElement(J.a, {
					"data-click-id": "background"
				}, a.a.createElement(_.a, {
					className: ie.a.eventMeta,
					post: Y
				}), a.a.createElement("div", {
					className: Object(g.a)(ie.a.postContent, {}),
					"data-click-id": "body"
				}, a.a.createElement($.c, {
					className: ie.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: Y,
					subredditOrProfile: ae
				}), a.a.createElement("div", {
					className: ie.a.postItemTitleContainer
				}, a.a.createElement(X.c, {
					hideSourceLink: !0,
					post: Y,
					size: X.b.Medium,
					isOverlay: !1
				}), !p && ue && a.a.createElement(ee.a, {
					className: ie.a.outboundLink,
					href: (null === (t = null == Y ? void 0 : Y.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: Y.isSponsored,
					postId: Y.id,
					source: Y.source
				}, Object(Q.a)(Y))), function() {
					let e = a.a.createElement(a.a.Fragment, null);
					const t = !!Y.source && Object(v.a)(Y.source.url) || !!Y.thumbnail && Object(v.a)(Y.thumbnail.url),
						s = !(null == pe ? void 0 : pe.type) && t,
						n = Object(g.a)(ie.a.mediaWrapper, {
							[ie.a.marginCancel]: p && !!Y.source,
							[ie.a.promotedTrend]: Y.isSponsored
						});
					if (s) e = a.a.createElement("div", {
						className: n
					}, a.a.createElement(w.b, {
						className: ie.a.thumbnail,
						post: Y,
						templatePlaceholderImage: de,
						usePreview: !0
					}));
					else if (pe)
						if (pe.type !== G.o.RTJSON && pe.type !== G.o.TEXT) e = a.a.createElement("div", {
							className: Object(g.a)(n, be && ie.a.twitterEmbed),
							onClickCapture: Oe,
							ref: e => d.current = e
						}, a.a.createElement(N.a, {
							className: ie.a.mediaContent,
							autoplayPref: m,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: Y.isSponsored,
							post: O || Y,
							primaryContent: !0,
							scrollerItemRef: e => l.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = a.a.createElement("div", {
								className: ie.a.mediaPlaceholder
							}), (pe.type === G.o.RTJSON && pe.richtextContent || pe.type === G.o.TEXT && pe.content) && Object(M.a)(Y, null == z ? void 0 : z.subredditContext) && (e = a.a.createElement("div", {
								className: n,
								onClickCapture: ge,
								ref: e => d.current = e
							}, a.a.createElement(N.a, {
								autoplayPref: m,
								className: ie.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: O || Y,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), a.a.createElement("div", {
								className: ie.a.seeMore
							}, ce._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), p && Y.source && a.a.createElement(te.a, {
					className: ie.a.adLinkWrapper,
					ctaExperimentDesign: b && "card"
				}, a.a.createElement(ee.a, {
					className: Object(g.a)(ie.a.outboundLink, {
						[ie.a.ctaExperiment]: b
					}),
					href: Y.source.url.replace(y.a.redditUrl, ""),
					isSponsored: Y.isSponsored,
					postId: Y.id,
					source: Y.source
				}, Y.source.displayText), Y.callToAction && a.a.createElement(se.a, {
					className: ie.a.adCallToAction,
					href: Y.source.url.replace(y.a.redditUrl, ""),
					isSponsored: Y.isSponsored,
					postId: Y.id,
					source: Y.source,
					showCTAExperiment: b
				}, Y.callToAction)), !Y.isSponsored && a.a.createElement(Z.c, {
					className: Object(g.a)(ie.a.postItemFlatlistContainer),
					post: h || Y
				}), a.a.createElement(I.d, null)))))
			}
			var ue = s("./src/lib/LRUCache/index.ts"),
				pe = s("./src/reddit/components/Scroller/Simple.tsx"),
				be = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				he = s("./src/reddit/hooks/usePageLayer.ts"),
				ge = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Oe = 376,
				fe = new ue.a(1);

			function xe(e) {
				let {
					discoveryUnit: t,
					listingKey: s,
					searchOptions: n,
					postId: r,
					children: o
				} = e;
				const c = Object(i.d)(),
					d = Object(he.a)();
				if (!t || !r) return null;
				const l = () => {
					const e = `entered-hero-unit-${r}`;
					let o = be.a.get(e);
					if (void 0 === o) {
						const a = t.layout.viewTypeWeb === ge.b.PromotedTrendHero;
						o = () => {
							c((e, o) => Object(U.u)(o(), t, r, n, d, s, a))
						}, be.a.set(e, o)
					}
					return o
				};
				return a.a.createElement(pe.b, null, (() => {
					const e = `hero-unit-search-${s}`;
					let n;
					return void 0 === (n = fe.get(e)) && (n = {
						estHeight: Oe,
						trackOnEnteredViewport: l(),
						id: t.id,
						render: () => o
					}), fe.set(e, n), [n]
				})())
			}
			var je = s("./src/reddit/constants/page.ts"),
				ye = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ce = s("./src/reddit/hooks/useTracking.ts"),
				ve = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				Ee = s("./src/reddit/selectors/listings.ts"),
				Se = s("./src/reddit/selectors/platform.ts");
			const ke = e => {
				const t = e.listings.activeKey,
					s = e.searchDiscoveryUnits.models[t];
				return s || {}
			};
			var _e = s("./src/reddit/selectors/searchFix.ts"),
				Ie = s("./src/telemetry/index.ts"),
				Ne = s("./src/telemetry/models/Timer.ts");
			const {
				Hero: Pe,
				PromotedTrendHero: we
			} = ge.b;

			function Te(e) {
				const t = Object.values(e).find(e => e.layout.viewTypeWeb === Pe || e.layout.viewTypeWeb === we);
				if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
			}
			var Le = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx"),
				Re = s("./src/reddit/components/PostList/index.tsx"),
				Fe = s("./src/reddit/components/SearchPost/index.tsx"),
				Me = s("./src/reddit/constants/postLayout.ts"),
				Be = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Ae = s("./src/reddit/helpers/trackers/post.ts"),
				De = s("./src/reddit/selectors/tracking.ts"),
				Ue = s("./src/reddit/connectors/PostList/index.ts");
			const Ve = Object(Ue.c)(),
				Ge = Object(Y.c)({
					...Ue.d,
					layout: () => Me.g.Search,
					viewportDataLoaded: De.a,
					postIds: (e, t) => {
						let {
							heroPostId: s,
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: o,
							searchDiscoveryUnit: a
						} = t;
						const i = a && a.postOrder,
							c = Te(ke(e));
						if (i && i.length > 0) {
							if (s) {
								const t = i.indexOf(s);
								if (t > -1) return i.splice(t, 1), Object(W.X)(e, i)
							}
							return Object(W.X)(e, i)
						}
						const {
							models: d
						} = e.posts;
						return Object(W.D)(e, n, r, !!o).filter(e => d && d[e] && !d[e].isSponsored && c !== e)
					}
				}),
				He = (e, t, s, n) => {
					if (s) return Object(Ae.n)(e, t);
					const {
						listingKey: r,
						searchOptions: o,
						pageLayer: a,
						searchDiscoveryUnit: i,
						sendEvent: c
					} = n;
					return c(Object(V.r)(e, o, a, V.E[t], r, i)), Object(Ae.n)(e, t)
				},
				We = Object(i.b)(Ge, (e, t) => ({
					...Object(Ue.b)(e),
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(V.w)(t.listingKey, e, t.searchOptions, t.pageLayer, t.searchDiscoveryUnit))
					}
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					openPost: e => t.openPost(e),
					postClickEventFactory: He,
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? Be.a : Fe.a
					}
				}));
			const Ke = (e => Object(T.c)(Ve(We(e))))(Re.a),
				qe = () => null,
				ze = Object(Y.c)({
					viewTreatment: K.D,
					searchDiscoveryUnitsModels: ke,
					hasPostResults: K.o,
					apiPending: Ee.d,
					postIds: W.z,
					posts: W.y,
					loadMore: Ee.g,
					isOverlayOpen: Se.i
				});

			function Ye(e) {
				const {
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: r
				} = e, l = Object(he.a)(), m = Object(Ce.a)(), u = Object(i.d)(), {
					viewTreatment: p,
					searchDiscoveryUnitsModels: b,
					hasPostResults: h,
					postIds: g,
					isOverlayOpen: O,
					apiPending: y
				} = Object(i.e)(t => ze(t, e)), C = Object(d.a)(O), v = Object(o.useRef)(!1), E = void 0 === y || y, S = (e, s) => m(Object(ye.t)(t, r, s, e, l, Object(_e.b)({
					pageLayer: l
				})));
				let k;
				Object(o.useEffect)(() => {
					h && !f()(g) && P()
				}, [h, g]), Object(o.useEffect)(() => {
					C && !O && P()
				}, [O, C]), p === ge.c.Trending && (k = Te(b));
				const _ = Object(x.a)(r.q || ""),
					I = Object(o.useMemo)(() => Object.values(b).find(e => e.name === ve.l || e.name === ve.f), [b]),
					N = k && I;

				function P() {
					if (Ie.c.has(t) || !v.current) {
						v.current = !0;
						const e = Ie.c.has(t) ? Ie.c.end(t) : 0;
						S(e, Ne.TimerType.InApp)
					}
				}
				return h || N || E ? a.a.createElement(a.a.Fragment, null, N && a.a.createElement(xe, {
					key: k,
					postId: k,
					discoveryUnit: I,
					searchOptions: r,
					listingKey: t
				}, a.a.createElement(me, {
					key: k,
					discoveryUnit: I,
					postId: k,
					listingKey: t,
					searchOptions: r
				})), (h || E) && a.a.createElement(Ke, {
					key: "posts",
					listingKey: t,
					listingName: s,
					location: n,
					inSubredditOrProfile: !1,
					noPostsComponent: qe,
					onLoadMore: function() {
						u(Object(j.n)([c.jc.Posts]))
					},
					searchOptions: r
				})) : a.a.createElement(Le.a, {
					query: _,
					type: Le.b.Posts,
					searchOptions: r,
					tab: je.h.Posts
				})
			}
			var Qe = s("./src/reddit/selectors/experiments/optimizedSerpPosts.ts"),
				Je = s("./node_modules/lodash/constant.js"),
				Xe = s.n(Je),
				Ze = s("./node_modules/lodash/times.js"),
				$e = s.n(Ze),
				et = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				tt = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				st = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				nt = s.n(st);
			const rt = e => {
				const {
					listingKey: t,
					searchOptions: s,
					originElement: n
				} = e, r = Object(i.e)(e => Object(K.d)(e, {
					listingKey: t
				})), o = Object(i.e)(e => Object(K.u)(e, {
					listingKey: t
				})), c = Boolean(o && o.token) && r.length > 0;
				return a.a.createElement("div", {
					className: nt.a.container,
					"data-testid": "comments-list"
				}, a.a.createElement(et.b, {
					identifiers: r,
					listingKey: t,
					searchOptions: s,
					componentType: et.c.Comments,
					originElement: n,
					fireScreenview: !0
				}), c && a.a.Children.toArray($e()(3, Xe()(a.a.createElement(tt.a, {
					className: nt.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var ot = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx");
			const at = (e, t) => Boolean(t && t.token) && e.length > 0,
				it = e => {
					const {
						listingKey: t,
						searchOptions: s
					} = e, n = Object(i.e)(e => Object(K.g)(e, {
						listingKey: t
					})), r = Object(i.e)(e => Object(K.v)(e, {
						listingKey: t
					}));
					return a.a.createElement("div", {
						className: nt.a.container,
						"data-testid": "communities-list"
					}, !s.is_multi && a.a.createElement(et.b, {
						identifiers: n,
						listingKey: t,
						searchOptions: s,
						componentType: et.c.Subreddits,
						fireScreenview: !0
					}), at(n, r) && a.a.Children.toArray($e()(3, Xe()(a.a.createElement(ot.a, {
						className: nt.a.loadMoreItem,
						isLoading: !0
					})))))
				};
			var ct = s("./src/reddit/components/SearchResultsContent/index.m.less"),
				dt = s.n(ct);
			const lt = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(i.e)(e => Object(K.a)(e, {
					listingKey: t
				})), r = Object(i.e)(e => Object(K.t)(e, {
					listingKey: t
				}));
				return a.a.createElement("div", {
					className: nt.a.container,
					"data-testid": "people-list"
				}, !s.is_multi && a.a.createElement(et.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: et.c.Users,
					fireScreenview: !0
				}), at(n, r) && a.a.Children.toArray($e()(3, Xe()(a.a.createElement(ot.a, {
					className: nt.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var mt = s("./src/reddit/components/SearchPost/Placeholder.tsx");
			const ut = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e;
				let n = Object(i.e)(e => Object(K.x)(e, {
					listingKey: t
				}));
				const r = Object(i.e)(e => Object(K.w)(e, {
						listingKey: t
					})),
					c = Object(i.e)(e => Object(K.D)(e)),
					d = Object(i.e)(e => ke(e));
				let l;
				c === ge.c.Trending && (l = Te(d));
				const m = Object(o.useMemo)(() => Object.values(d).find(e => e.name === ve.l || e.name === ve.f), [d]);
				if (l && m) {
					const e = (n = [...n]).indexOf(l);
					n.splice(e, 1)
				}
				return a.a.createElement(a.a.Fragment, null, l && m && a.a.createElement(xe, {
					key: l,
					postId: l,
					discoveryUnit: m,
					searchOptions: s,
					listingKey: t
				}, a.a.createElement(me, {
					key: l,
					discoveryUnit: m,
					postId: l,
					listingKey: t,
					searchOptions: s
				})), a.a.createElement("div", {
					className: nt.a.container,
					"data-testid": "posts-list"
				}, a.a.createElement(et.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: et.c.Posts,
					fireScreenview: !0
				}), function(e, t) {
					return Boolean(t && t.token) && e.length > 0
				}(n, r) && a.a.Children.toArray($e()(3, Xe()(a.a.createElement(mt.a, {
					className: nt.a.loadMoreItem,
					isLoading: !0
				}))))))
			};
			var pt = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/SearchResultsScreen.tsx");

			function bt(e) {
				const {
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: r,
					tab: o
				} = e, c = Object(i.e)(e => Object(K.n)(e, {
					listingKey: t
				})), d = Object(i.e)(e => Object(K.l)(e, {
					listingKey: t
				})), l = Object(i.e)(e => Object(K.m)(e, {
					listingKey: t
				})), m = Object(i.e)(e => Object(K.p)(e, {
					listingKey: t
				})), u = Object(i.e)(e => Object(Qe.a)(e));
				return a.a.createElement("div", {
					className: Object(g.a)(dt.a.resultsContainer)
				}, o === je.h.Listings ? a.a.createElement(pt.a, {
					hasResults: c,
					searchOptions: r,
					noResultsType: Le.b.Communities,
					searchResultsTab: je.h.Listings,
					listingKey: t,
					pendingSelector: K.i
				}, a.a.createElement(it, {
					listingKey: t,
					searchOptions: r,
					key: je.h.Listings
				})) : o === je.h.People ? a.a.createElement(pt.a, {
					hasResults: d,
					searchOptions: r,
					noResultsType: Le.b.People,
					searchResultsTab: je.h.People,
					listingKey: t,
					pendingSelector: K.c
				}, a.a.createElement(lt, {
					listingKey: t,
					searchOptions: r,
					key: je.h.People
				})) : o === je.h.Comments ? a.a.createElement(pt.a, {
					hasResults: l,
					searchOptions: r,
					noResultsType: Le.b.Comments,
					searchResultsTab: je.h.Comments,
					listingKey: t,
					pendingSelector: K.f
				}, a.a.createElement(rt, {
					listingKey: t,
					searchOptions: r,
					key: je.h.Comments
				})) : u ? a.a.createElement(pt.a, {
					hasResults: m,
					searchOptions: r,
					noResultsType: Le.b.Posts,
					searchResultsTab: je.h.Posts,
					listingKey: t,
					pendingSelector: K.z
				}, a.a.createElement(ut, {
					listingKey: t,
					searchOptions: r,
					key: je.h.Comments
				})) : a.a.createElement(Ye, {
					key: t,
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: r
				}))
			}
			var ht = s("./src/reddit/selectors/subreddit.ts");
			const gt = (e, t) => {
				const s = Object(_e.a)(e, t);
				return s ? Object(ht.C)(e, {
					subredditName: s
				}) : null
			};
			var Ot = s("./node_modules/fbt/lib/FbtPublic.js"),
				ft = s("./node_modules/lodash/noop.js"),
				xt = s.n(ft),
				jt = s("./src/lib/constants/colors.ts"),
				yt = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Ct = s("./src/reddit/helpers/localStorage/index.ts");
			const vt = () => {
				const [e, t] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					var e;
					const s = null !== (e = Object(Ct.E)("should-show-comment-tab-tooltip")) && void 0 !== e ? e : 2;
					t(Boolean(s)), 2 === s ? Object(Ct.Hb)("should-show-comment-tab-tooltip", 1) : 1 === s && Object(Ct.Hb)("should-show-comment-tab-tooltip", !1)
				}, []), {
					get shouldShowCommentTabTooltip() {
						return e
					},
					resetShowCommentTabTooltip() {
						e && t(!1)
					}
				}
			};
			var Et = s("./src/reddit/controls/InternalLink/index.tsx"),
				St = s("./src/lib/addQueryParams/index.ts"),
				kt = s("./src/reddit/constants/history.ts"),
				_t = s("./src/reddit/helpers/history/index.ts");
			const It = "/search/",
				Nt = e => {
					let {
						searchType: t,
						pageLayer: s
					} = e;
					var n;
					const {
						type: r,
						...o
					} = (null == s ? void 0 : s.queryParams) || {}, a = {
						...o,
						type: t,
						sort: void 0,
						t: void 0
					};
					return {
						pathname: (null === (n = null == s ? void 0 : s.routeMatch) || void 0 === n ? void 0 : n.match.url) || It,
						search: Object(St.a)("", {
							...a
						}),
						state: {
							[kt.b.SearchOriginPage]: Object(_t.b)(kt.b.SearchOriginPage)
						}
					}
				};
			var Pt = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				wt = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				Tt = s("./node_modules/history/esm/history.js"),
				Lt = s("./node_modules/react-router-redux/es/index.js"),
				Rt = s("./src/lib/colors/constants.ts"),
				Ft = s("./src/reddit/constants/parameters.ts"),
				Mt = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Bt = s("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				At = s("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less"),
				Dt = s.n(At);
			const Ut = "safe-search-toggle";

			function Vt(e) {
				let {
					searchOptions: t
				} = e;
				const s = Object(Ce.a)(),
					[n, r] = a.a.useState(!0);
				Object(o.useEffect)(() => {
					var e;
					r(null), l(!!(null === (e = null == p ? void 0 : p.queryParams) || void 0 === e ? void 0 : e.include_over_18))
				}, []);
				const c = Object(Pt.a)({}),
					{
						nsfwSessionSetting: d,
						setNsfwSessionSetting: l
					} = Object(Bt.b)(),
					{
						shouldShowTooltip: m,
						resetShowTooltip: u
					} = Object(Bt.c)(!d);
				Object(o.useEffect)(() => {
					if (m) return window.addEventListener("click", u), () => {
						window.removeEventListener("click", u)
					}
				}, [m]);
				const p = Object(he.a)(),
					b = Object(i.d)();
				c.arrowProps.style = {
					...c.arrowProps.style,
					borderBottom: `3px solid ${jt.a.alien600}`
				}, c.popperProps.style = {
					...c.popperProps.style,
					backgroundColor: jt.a.alien600,
					top: "4px",
					maxWidth: "360px",
					textAlign: "center"
				};
				const h = null != n ? n : !d;
				return a.a.createElement("div", {
					className: Object(g.a)(Dt.a.searchNSFWToggle),
					"data-testid": Ut,
					onMouseEnter: c.show,
					onMouseLeave: c.hide
				}, a.a.createElement("label", {
					htmlFor: Ut,
					className: Object(g.a)(Dt.a.searchNSFWToggleLabel)
				}, Ot.fbt._("Safe Search", null, {
					hk: "x1C2Y"
				})), a.a.createElement(Mt.a, {
					activeColorOverride: Rt.a,
					id: Ut,
					onToggle: function() {
						var e;
						s(Object(V.h)(!h, t, p));
						const n = !d;
						l(n);
						const {
							include_over_18: r,
							...o
						} = (null == p ? void 0 : p.queryParams) || {}, a = (null === (e = null == p ? void 0 : p.routeMatch) || void 0 === e ? void 0 : e.match.url) || It, i = {
							...o,
							...n && {
								[Ft.m]: "1"
							}
						}, c = {
							pathname: a,
							search: Object(St.a)("", {
								...i
							})
						};
						b(Object(Lt.b)(Object(Tt.c)(c)))
					},
					on: h,
					redditStyle: !0,
					ref: c.target.ref
				}), a.a.createElement(yt.a, {
					visible: m || c.visible,
					arrowProps: c.arrowProps,
					popperProps: c.popperProps
				}, h ? Ot.fbt._("You won’t see adult or Not Safe for Work (NSFW) search results unless you turn Safe Search off", null, {
					hk: "tefl0"
				}) : Ot.fbt._("You’ll see adult and Not Safe for Work (NSFW) search results unless you turn Safe Search on", null, {
					hk: "1SDOFf"
				})))
			}
			var Gt = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				Ht = s.n(Gt);

			function Wt(e) {
				let {
					activeTab: t,
					searchOptions: s,
					searchSwitcher: n
				} = e;
				const r = Object(Ce.a)(),
					d = Object(i.e)(z.mb),
					m = Object(i.e)(K.D),
					u = Object(R.ib)(),
					p = m === ge.c.Trending,
					b = Object(Pt.a)({}),
					{
						shouldShowCommentTabTooltip: h,
						resetShowCommentTabTooltip: g
					} = vt();
				b.arrowProps.style = {
					...b.arrowProps.style,
					borderLeft: "4px solid transparent",
					borderRight: "4px solid transparent",
					top: "-3px",
					left: "50%",
					transform: "translateX(-50%)",
					borderBottom: `3px solid ${jt.a.alien600}`
				}, b.popperProps.style = {
					...b.popperProps.style,
					backgroundColor: jt.a.alien600,
					top: "100%",
					left: "50%",
					transform: "translateX(-50%)",
					whiteSpace: "nowrap"
				}, Object(o.useEffect)(() => {
					if (h) return window.addEventListener("click", g), () => {
						window.removeEventListener("click", g)
					}
				}, [h]);
				const O = {
						condition: !0,
						active: t === je.h.Posts,
						target: V.b.Posts,
						contentType: c.jc.Posts,
						text: Ot.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					},
					f = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === je.h.Listings,
						target: V.b.Communities,
						contentType: c.jc.Subreddits,
						text: Ot.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					},
					x = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === je.h.People,
						target: V.b.People,
						contentType: c.jc.Users,
						text: Ot.fbt._("People", null, {
							hk: "Ttxbf"
						})
					},
					j = [O, {
						condition: !(s.source === l.a.Trending || s.source === l.a.PromotedTrend),
						active: t === je.h.Comments,
						target: V.b.Comments,
						contentType: c.jc.Comments,
						text: Ot.fbt._("Comments", null, {
							hk: "z0DGA"
						}),
						showTooltip: !0
					}, f, x],
					y = d && !p && "1" !== s.sr_nsfw;
				return a.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: Ht.a.searchResultsNav
				}, a.a.createElement("div", {
					className: Ht.a.pillRow,
					role: "tablist"
				}, j.filter(e => e.condition).map(e => {
					const {
						active: t,
						target: n,
						text: o,
						contentType: i
					} = e;
					return a.a.createElement(Et.default, {
						key: n,
						"data-testid": n,
						to: Nt({
							searchType: i,
							pageLayer: u
						}),
						"aria-selected": t,
						role: "tab",
						className: Ht.a.pillElement,
						onClick: () => (e => {
							e.active || r(Object(V.m)(e.target, s))
						})(e)
					}, a.a.createElement(yt.a, {
						visible: Boolean(e.showTooltip) && h,
						arrowProps: b.arrowProps,
						popperProps: b.popperProps
					}, Ot.fbt._("Now you can search comments!", null, {
						hk: "LePo6"
					})), a.a.createElement(wt.a, {
						active: t,
						onClick: xt.a,
						variant: wt.b.TAB_GROUP
					}, o))
				})), n && a.a.createElement("div", {
					className: Ht.a.searchSwitcherContainer
				}, n), y && a.a.createElement("div", {
					className: Ht.a.nsfwToggleContainer
				}, a.a.createElement(Vt, {
					searchOptions: s
				})))
			}
			var Kt = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				qt = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				zt = s.n(qt),
				Yt = s("./src/lib/lessComponent.tsx");
			const {
				fbt: Qt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Jt = Yt.a.div("ButtonContainer", zt.a), Xt = Yt.a.div("Container", zt.a), Zt = Yt.a.img("BannerImg", zt.a), $t = Yt.a.img("SnooImg", zt.a), es = Yt.a.div("CommunityText", zt.a);
			var ts = () => a.a.createElement(Xt, null, a.a.createElement(Zt, {
					src: `${y.a.assetPath}/img/search-results-community-banner.png`
				}), a.a.createElement($t, {
					src: `${y.a.assetPath}/img/snoo-thinking.png`
				}), a.a.createElement(es, null, Qt._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), a.a.createElement(Jt, null, a.a.createElement(Kt.a, {
					className: zt.a.Button,
					eventSource: "sidebar"
				}))),
				ss = s("./src/reddit/components/IdCard/async.tsx"),
				ns = s("./src/reddit/components/SidebarContainer/index.tsx"),
				rs = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				os = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				as = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				is = s("./src/reddit/selectors/widgets.ts"),
				cs = s("./src/reddit/components/SearchResultsSidebar/index.m.less"),
				ds = s.n(cs);
			const ls = Object(Y.c)({
					authorIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(K.a)(e, {
							listingKey: s
						})
					},
					authorLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(K.t)(e, {
							listingKey: s
						})
					},
					communityIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(K.g)(e, {
							listingKey: s
						})
					},
					communitiesLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(K.v)(e, {
							listingKey: s
						})
					},
					currentSubreddit: Se.e,
					isLoggedIn: z.S,
					hasCommunityResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(K.n)(e, {
							listingKey: s
						})
					},
					hasAuthorResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(K.l)(e, {
							listingKey: s
						})
					},
					subredditId: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(ht.I)(e, s)
					},
					postFlairWidgets: (e, t) => {
						let {
							listingName: s
						} = t;
						const n = Object(ht.I)(e, s);
						return Object(is.g)(e, {
							subredditId: n
						})
					},
					idCardWidget: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(is.d)(e, {
							subredditName: s
						})
					}
				}),
				ms = e => {
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
						x = r.length > et.a || !!o,
						j = t.length > et.a || !!s;
					let y;
					const C = Object(he.a)();
					return O ? y = a.a.createElement(a.a.Fragment, null, u && a.a.createElement(ss.a, {
						listingName: m
					}), b && b.map((e, t) => a.a.createElement(rs.a, {
						key: `widgetSpacer-${t}`
					}, a.a.createElement(as.a, {
						subredditName: m,
						widget: e
					})))) : f || (y = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: ds.a.container,
						"data-testid": "communities-list"
					}, a.a.createElement("h4", {
						className: ds.a.header
					}, Ot.fbt._("Communities", null, {
						hk: "3cMR66"
					})), d ? a.a.createElement(a.a.Fragment, null, !h.is_multi && a.a.createElement(et.b, {
						componentType: et.c.Subreddits,
						identifiers: r,
						listingKey: l,
						searchOptions: h,
						sidebar: !0
					}), x && a.a.createElement(Et.default, {
						to: Nt({
							searchType: c.jc.Subreddits,
							pageLayer: C
						})
					}, a.a.createElement("p", {
						className: ds.a.link
					}, Ot.fbt._("See more communities", null, {
						hk: "2VoaHj"
					})))) : a.a.createElement("p", {
						className: ds.a.noResults
					}, Ot.fbt._("No results", null, {
						hk: "3feoKq"
					}))), a.a.createElement("div", {
						className: ds.a.container,
						"data-testid": "authors-list"
					}, a.a.createElement("h4", {
						className: ds.a.header
					}, Ot.fbt._("People", null, {
						hk: "2M8TqB"
					})), i ? a.a.createElement(a.a.Fragment, null, !h.is_multi && a.a.createElement(et.b, {
						componentType: et.c.Users,
						identifiers: t,
						listingKey: l,
						searchOptions: h,
						sidebar: !0
					}), j && a.a.createElement(Et.default, {
						to: Nt({
							searchType: c.jc.Users,
							pageLayer: C
						})
					}, a.a.createElement("p", {
						className: ds.a.link
					}, Ot.fbt._("See more people", null, {
						hk: "yjtZU"
					})))) : a.a.createElement("p", {
						className: ds.a.noResults
					}, Ot.fbt._("No results", null, {
						hk: "3qx6oy"
					}))), p && a.a.createElement("div", {
						className: ds.a.container
					}, a.a.createElement(ts, null)))), a.a.createElement(ns.a, {
						"data-testid": "search-results-sidebar",
						className: n
					}, y, a.a.createElement(os.a, null))
				},
				us = e => {
					const t = Object(i.e)(t => ls(t, e)),
						s = {
							...e,
							...t
						};
					return a.a.createElement(ms, s)
				};
			var ps = s("./src/reddit/layout/row/Inline/index.tsx");
			const bs = (e, t, s, n, r, o) => {
				const a = e && e[s],
					i = {};
				let c = Object(St.a)(t, {
					[s]: r
				});
				const d = [];
				for (const l of n) {
					const e = Object(St.a)(t, {
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
			var hs = s("./src/higherOrderComponents/asTooltip.tsx"),
				gs = s("./src/reddit/controls/Dropdown/index.tsx"),
				Os = s("./src/reddit/icons/fonts/index.tsx"),
				fs = s("./src/reddit/actions/tooltip.ts"),
				xs = s("./src/reddit/selectors/tooltip.ts");
			const js = Object(Y.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(xs.b)(s)(e)
				}
			});
			var ys = s("./src/reddit/components/SearchResultsSubNav/Select/index.m.less"),
				Cs = s.n(ys),
				vs = s("./node_modules/query-string/index.js"),
				Es = s.n(vs),
				Ss = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ks = s("./src/reddit/controls/Dropdown/Row.tsx"),
				_s = s("./node_modules/lodash/fromPairs.js"),
				Is = s.n(_s),
				Ns = s("./src/lib/extractQueryParams/index.ts"),
				Ps = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ws = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				Ts = s("./src/reddit/selectors/telemetry.ts");
			const Ls = (e, t) => {
					const s = Is()([...Object(Ns.a)(e)]);
					return Object(c.Ac)(s.sort) && (t.sort = s.sort), Object(c.Bc)(s.t) && (t.t = s.t), t
				},
				Rs = (e, t, s, n) => () => e(e => {
					const r = Ts.H(e, null);
					return {
						...Object(V.f)(e),
						source: "search",
						action: "click",
						noun: t,
						correlationId: Object(Ps.c)(Ps.a.SearchResults),
						actionInfo: Object(V.k)(e, null, r),
						search: Ts.db(e, Ls(s, n), ws.a.SERP)
					}
				}),
				Fs = e => {
					let {
						isSelected: t,
						option: s,
						searchOptions: n,
						type: r,
						styles: o,
						displayText: i
					} = e;
					const c = Object(T.b)();
					return a.a.createElement(Ss.a, {
						key: s,
						to: {
							pathname: Es.a.parseUrl(s).url,
							state: {
								[kt.b.SearchOriginPage]: Object(_t.b)(kt.b.SearchOriginPage)
							},
							search: s.replace(Es.a.parseUrl(s).url + "?", "")
						},
						onClick: Rs(c, r, s, n)
					}, a.a.createElement(ks.b, {
						className: Object(g.a)(o.SelectOption, t && o.mIsSelected),
						displayText: i,
						isSelected: t
					}))
				};
			var Ms = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less"),
				Bs = s.n(Ms);

			function As() {
				return (As = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ds = Object(hs.a)(e => a.a.createElement(gs.a, As({
					className: Cs.a.Component
				}, e))),
				Us = e => {
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
						} = Object(i.e)(t => js(t, {
							tooltipId: e
						})), s = Object(i.d)();
						return {
							isOpen: t,
							onClick: t ? () => s(Object(fs.i)()) : () => s(Object(fs.f)({
								tooltipId: e
							}))
						}
					})(c);
					return a.a.createElement("div", {
						className: Cs.a.Wrapper
					}, a.a.createElement(wt.a, As({}, m, {
						active: u,
						className: Object(g.a)(Cs.a.filterButton, t && Cs.a.hasValue),
						onClick: p,
						variant: wt.b.TAB_GROUP
					}), s, a.a.createElement(Os.a, {
						name: "caret_down",
						className: Object(g.a)(Cs.a.caret, u && Cs.a.caretOpen)
					})), a.a.createElement("div", {
						id: c
					}, a.a.createElement(Ds, {
						className: Cs.a.Dropdown,
						isOpen: u,
						tooltipId: c
					}, n.map((e, t) => a.a.createElement(Fs, {
						displayText: r[e],
						key: t,
						isSelected: e === l,
						option: e,
						searchOptions: o,
						styles: {
							mIsSelected: Bs.a.mIsSelected,
							SelectOption: Bs.a.SelectOption
						},
						type: d
					})))))
				},
				Vs = {
					[je.h.Posts]: [c.gc.Relevance, c.gc.Hot, c.gc.Top, c.gc.New, c.gc.Comments],
					[je.h.Comments]: [c.gc.Relevance, c.gc.Top, c.gc.New]
				},
				Gs = {
					[c.gc.Hot]: () => Ot.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[c.gc.Relevance]: () => Ot.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[c.gc.Top]: () => Ot.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[c.gc.New]: () => Ot.fbt._("New", null, {
						hk: "23egpt"
					}),
					[c.gc.Comments]: () => Ot.fbt._("Most Comments", null, {
						hk: "4k1FoM"
					})
				};

			function Hs() {
				return (Hs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ws = [c.pc.HOUR, c.pc.DAY, c.pc.WEEK, c.pc.MONTH, c.pc.YEAR, c.pc.ALL],
				Ks = {
					[c.pc.HOUR]: () => Ot.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[c.pc.DAY]: () => Ot.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[c.pc.WEEK]: () => Ot.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[c.pc.MONTH]: () => Ot.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[c.pc.YEAR]: () => Ot.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[c.pc.ALL]: () => Ot.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				};

			function qs() {
				return (qs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const zs = {
					[je.h.Posts]: [c.fc.Sort, c.fc.Time],
					[je.h.Comments]: [c.fc.Sort]
				},
				Ys = {
					[c.fc.Sort]: e => {
						let t = Object(i.e)(K.C);
						t = t !== c.Wb ? t : void 0;
						const {
							options: s,
							optionLabels: n,
							value: r
						} = bs(e.queryParams, e.url, Ft.E, Vs[e.tab], t || c.Wb, Gs), o = {
							"data-testid": "search-results-filter-sort",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: r
						}, d = Boolean(e.queryParams[Ft.E] || t);
						return a.a.createElement(Us, Hs({}, o, {
							active: d,
							label: d ? n[r] : Ot.fbt._("Sort", null, {
								hk: "2COMme"
							}),
							type: c.fc.Sort
						}))
					},
					[c.fc.Time]: e => {
						const t = Object(i.e)(K.C),
							{
								options: s,
								optionLabels: n,
								value: r
							} = bs(e.queryParams, e.url, Ft.J, Ws.slice().reverse(), c.Xb, Ks);
						if (!e.searchOptions || e.searchOptions.sort === c.cb.NEW || e.searchOptions.sort === c.cb.HOT || t === c.cb.NEW || t === c.cb.HOT) return null;
						const o = {
							"data-testid": "search-results-filter-time",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: r
						};
						return a.a.createElement(Us, qs({}, o, {
							active: Boolean(e.queryParams[Ft.J]),
							label: e.queryParams[Ft.J] ? n[r] : Ot.fbt._("Time", null, {
								hk: "3hL0P3"
							}),
							type: c.fc.Filter
						}))
					}
				};
			var Qs = s("./src/reddit/controls/Button/index.tsx");

			function Js(e, t) {
				let s = "/search/",
					n = "",
					r = e && e[Ft.x] || "";
				return t ? (r = r.replace("flair:", "flair_name:"), s = `/r/${t}/search`, n = "1", Object(St.a)(s, {
					[Ft.x]: r,
					[Ft.y]: n
				})) : (r = r.replace("flair_name:", "flair:"), Object(St.a)(s, {
					[Ft.x]: r
				}))
			}
			var Xs = s("./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less"),
				Zs = s.n(Xs);
			const {
				fbt: $s
			} = s("./node_modules/fbt/lib/FbtPublic.js"), en = Yt.a.wrapped(Qs.r, "TertiaryButton", Zs.a), tn = Yt.a.wrapped(en, "AllRedditResultsButton", Zs.a), sn = e => {
				const t = Object(T.b)();
				return a.a.createElement(Ss.a, {
					to: Js(e.queryParams)
				}, a.a.createElement(tn, {
					onClick: () => {
						t(t => ({
							...Object(V.f)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, $s._("All reddit results", null, {
					hk: "2IBCsX"
				}), a.a.createElement(Os.a, {
					name: "forward"
				})))
			};
			var nn = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				rn = s.n(nn);
			const on = Object(Y.c)({
					subreddit: ht.C
				}),
				an = e => {
					var t;
					const {
						subreddit: s
					} = Object(i.e)(t => on(t, e)), n = Object(R.ib)(), r = Object(R.Z)(n), o = Object(R.hb)(n), c = s && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
					return a.a.createElement(ps.a, {
						className: Object(g.a)(rn.a.ComponentRedesign),
						"data-testid": "search-results-subnav"
					}, null === (t = zs[e.tab]) || void 0 === t ? void 0 : t.map((t, s) => {
						const n = Ys[t];
						return a.a.createElement(n, {
							key: s,
							queryParams: r,
							searchOptions: e.searchOptions,
							tab: e.tab,
							url: o
						})
					}), c && a.a.createElement(sn, {
						queryParams: r,
						searchOptions: e.searchOptions
					}))
				};
			var cn = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				dn = s.n(cn),
				ln = s("./src/reddit/components/SubredditIcon/index.tsx"),
				mn = s("./src/reddit/components/ThemeProvider/index.tsx"),
				un = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				pn = s.n(un);
			const {
				fbt: bn
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class hn extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(V.C)(!!s, e))
					}
				}
				render() {
					const {
						redesign: e,
						subreddit: t,
						url: s
					} = this.props, n = {
						[pn.a.mSr]: !!t
					}, {
						pathname: r,
						search: o
					} = dn.a.parse(s), i = t ? c.hc.ToSubreddit : c.hc.ToGlobal, d = t ? a.a.createElement(a.a.Fragment, null, a.a.createElement("span", null, bn._("Show results from", null, {
						hk: "3aVDvz"
					})), a.a.createElement(ln.b, {
						className: pn.a.subredditIcon,
						subredditOrProfile: t
					}), a.a.createElement("p", {
						className: Object(g.a)(pn.a.searchSwitcherText, n)
					}, t.displayText)) : a.a.createElement(a.a.Fragment, null, bn._("{=Show results from}{=all of Reddit}", [bn._param("=Show results from", a.a.createElement("span", null, bn._("Show results from", null, {
						hk: "4l8fSw"
					}))), bn._param("=all of Reddit", a.a.createElement("p", {
						className: Object(g.a)(pn.a.searchSwitcherText, n)
					}, bn._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return a.a.createElement(Et.default, {
						className: Object(g.a)(pn.a.searchSwitcher, e && pn.a.redesign, n),
						"data-testid": "search-switcher-link",
						onClick: this.onClick,
						to: {
							pathname: r,
							search: o,
							state: {
								searchSwitcherType: i,
								[kt.b.SearchOriginPage]: Object(_t.b)(kt.b.SearchOriginPage)
							}
						}
					}, d, a.a.createElement(Os.a, {
						name: "forward",
						className: Object(g.a)(pn.a.arrowIcon, n)
					}))
				}
			}
			var gn = Object(T.c)(e => e.subreddit ? a.a.createElement(mn.b, {
					subredditName: e.subreddit.name
				}, a.a.createElement(hn, e)) : a.a.createElement(hn, e)),
				On = s("./src/reddit/helpers/search/searchConversationId.ts"),
				fn = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				xn = s("./src/reddit/helpers/search/searchQueryId.ts");
			const jn = (e, t) => e.includes(c.jc.Comments) ? je.h.Comments : t || e.includes(c.jc.Posts) ? je.h.Posts : e.includes(c.jc.Users) && !e.includes(c.jc.Subreddits) ? je.h.People : je.h.Listings;
			var yn = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Cn = s("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				vn = s("./src/reddit/constants/elementClassNames.ts"),
				En = s("./src/reddit/contexts/NavbarExp.ts"),
				Sn = s("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				kn = s("./src/reddit/layout/page/Listing/index.m.less"),
				_n = s.n(kn),
				In = s("./src/reddit/layout/page/SearchResults/index.m.less"),
				Nn = s.n(In);
			var Pn = e => {
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
					const m = Object(o.useContext)(En.a),
						u = Boolean(d);
					return a.a.createElement(Cn.a, {
						subredditId: l
					}, a.a.createElement("div", {
						className: Object(g.a)(_n.a.outerContainer, vn.i, s, {
							[_n.a.outerContainerExp]: m
						}),
						ref: n
					}, a.a.createElement(Sn.a, {
						className: vn.h,
						redditStyle: c,
						backgroundColor: t
					}), a.a.createElement("div", {
						className: _n.a.innerContainer
					}, a.a.createElement("div", {
						className: Nn.a.bodyContainer
					}, a.a.createElement("div", {
						className: Nn.a.contentContainer
					}, a.a.createElement("div", {
						className: Nn.a.navContent
					}, i), a.a.createElement("div", {
						className: Object(g.a)(Nn.a.content, u && Nn.a.withSidebar)
					}, a.a.createElement("div", {
						className: Object(g.a)(Nn.a.mainContent, u && Nn.a.withSidebar)
					}, r), u && a.a.createElement("div", {
						className: Nn.a.sidebarContent
					}, d)))))))
				},
				wn = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Tn = s("./src/reddit/constants/experiments.ts"),
				Ln = s("./src/reddit/helpers/chooseVariant/index.ts");
			const Rn = e => {
				return Object(Ln.c)(e, {
					experimentEligibilitySelector: Ln.a,
					experimentName: Tn.F
				}) === Tn.Od
			};
			var Fn = s("./src/reddit/selectors/searchQueryId.ts"),
				Mn = s("./src/reddit/actions/modal.ts"),
				Bn = s("./src/reddit/icons/svgs/Close/index.tsx"),
				An = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				Dn = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Un = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Vn = s("./src/reddit/icons/svgs/Sticky/index.tsx"),
				Gn = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				Hn = s("./src/reddit/models/Live/index.ts"),
				Wn = s("./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.m.less"),
				Kn = s.n(Wn);

			function qn(e) {
				const {
					announcement: t,
					className: s,
					onBtnClick: n,
					onClose: r
				} = e, o = {
					[Hn.b.Announcement]: a.a.createElement(Vn.a, {
						className: Kn.a.iconStyles
					}),
					[Hn.b.Document]: a.a.createElement(Gn.a, {
						className: Kn.a.iconStyles
					}),
					[Hn.b.Snoo]: a.a.createElement(Un.a, {
						className: Kn.a.iconStyles
					}),
					[Hn.b.Ama]: a.a.createElement(An.a, {
						className: Kn.a.iconStyles
					}),
					[Hn.b.Moderation]: a.a.createElement(Dn.a, {
						className: Kn.a.iconStyles
					})
				};
				return a.a.createElement("div", {
					"data-testid": "legacy-announcement",
					className: Object(g.a)(s, Kn.a.AnnouncementContainer)
				}, a.a.createElement(ps.a, null, o[t.icon], a.a.createElement("div", {
					className: Object(g.a)(Kn.a.Title, Kn.a.isAnnouncement)
				}, "function" == typeof t.title ? t.title() : t.title), a.a.createElement(Bn.a, {
					className: Kn.a.CloseButton,
					onClick: r
				})), a.a.createElement("div", {
					className: Object(g.a)(Kn.a.Description, Kn.a.isAnnouncement)
				}, "function" == typeof t.description ? t.description() : t.description), a.a.createElement(Qs.m, {
					className: Kn.a.Button,
					target: "_blank",
					href: t.url,
					onClick: n
				}, "function" == typeof t.callToAction ? t.callToAction() : t.callToAction))
			}
			var zn = s("./src/reddit/constants/covid.ts"),
				Yn = s("./src/reddit/constants/mFeedBanner.ts"),
				Qn = s("./src/reddit/constants/modals.ts"),
				Jn = s("./src/reddit/constants/nsfwBanner.ts"),
				Xn = s("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				Zn = s("./src/reddit/selectors/experiments/search/searchSingleVariant.ts");
			const $n = e => Object(Zn.a)(e, Tn.Kc),
				er = Object(Y.a)(e => Object(Ln.c)(e, {
					experimentEligibilitySelector: Ln.a,
					experimentName: Tn.Kc,
					expEventOverride: !1
				}), e => !!e),
				tr = e => Object(Zn.a)(e, Tn.Ee),
				sr = Object(Y.a)(e => Object(Ln.c)(e, {
					experimentEligibilitySelector: Ln.a,
					experimentName: Tn.Ee,
					expEventOverride: !1
				}), e => !!e);
			var nr, rr = s("./src/reddit/selectors/userPrefs.ts"),
				or = s("./src/reddit/components/SearchBanner/index.m.less"),
				ar = s.n(or);
			! function(e) {
				e.Covid = "covid", e.NSFW = "nsfw", e.MFeed = "mfeed"
			}(nr || (nr = {}));
			const ir = {
				[nr.Covid]: {
					visible: !1,
					dismissed: !1,
					seen: !1,
					announcement: zn.a
				},
				[nr.NSFW]: {
					visible: !1,
					dismissed: !1,
					seen: !1,
					announcement: Jn.b
				},
				[nr.MFeed]: {
					visible: !1,
					dismissed: !1,
					seen: !1,
					announcement: Yn.b
				}
			};

			function cr() {
				const e = Object(Ce.a)(),
					t = Object(R.ib)(),
					s = Object(i.f)(),
					{
						nsfwSessionSetting: n
					} = Object(Bt.b)(),
					c = Object(i.d)(),
					[d, m] = Object(o.useState)(null),
					u = Object(o.useRef)(ir),
					p = Object(R.Z)(t),
					b = Object(i.e)(sr),
					h = Object(i.e)(er),
					g = Object(i.e)(rr.a);
				if (Object(o.useEffect)(() => {
						Object(R.db)(t) ? m(nr.Covid) : b && Object(R.eb)(t) && n && g && tr(s.getState()) ? m(nr.MFeed) : h && Object(R.fb)(t) && !g && $n(s.getState()) ? m(nr.NSFW) : m(null)
					}, [t, p, g, n, b, h]), !d || u.current[d].dismissed) return null;

				function O(t) {
					d && e(Object(V.x)(t, d, Object(l.e)(r()(p || {}, Ft.z))))
				}
				const f = u.current[d];
				return f.seen || (O("view"), f.seen = !0), a.a.createElement(qn, {
					announcement: f.announcement,
					className: ar.a.announcement,
					onBtnClick: function() {
						d === nr.NSFW && c(Object(Mn.h)(Qn.a.NSFW_SEARCH_MODAL)), O("click"), Object(Xn.e)(B.a.SEARCH_RESULTS, s.getState(), Object(l.e)(p))
					},
					onClose: function() {
						O("dismiss"), f.dismissed = !0, m(null)
					}
				})
			}
			var dr = s("./src/reddit/pages/SearchResults/index.m.less"),
				lr = s.n(dr);

			function mr() {
				return (mr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ur = 3e3,
				pr = {
					[je.h.Listings]: {
						tab: je.h.Listings,
						sidebar: !1,
						filterNav: !1
					},
					[je.h.People]: {
						tab: je.h.People,
						sidebar: !1,
						filterNav: !1
					},
					[je.h.Posts]: {
						tab: je.h.Posts,
						sidebar: !0,
						filterNav: !0
					},
					[je.h.Comments]: {
						tab: je.h.Comments,
						sidebar: !1,
						filterNav: !1
					}
				};

			function br(e) {
				let {
					location: t,
					match: s
				} = e;
				const n = Object(i.d)(),
					m = Object(R.ib)(),
					g = Object(re.a)(),
					O = Object(o.useRef)(!1),
					x = Object(i.e)(e => Object(ht.C)(e, {
						subredditName: s.params.subredditName
					})),
					j = Object(i.e)(e => gt(e, {
						pageLayer: m
					})),
					y = Object(i.e)(e => Object(_e.c)(e, {
						pageLayer: m
					})),
					{
						searchQueryId: C
					} = Object(i.e)(e => Object(Fn.a)(e)),
					v = Object(i.e)(Rn),
					E = (Object(i.e)(e => Object(Zn.a)(e, Tn.Jc)), Object(R.Z)(m)),
					S = Object(d.a)(E) || null,
					k = s.params.multiredditName,
					_ = s.params.subredditName || k || "",
					I = s.params.username,
					N = Object(l.e)(r()(E || {}, Ft.z)),
					P = Object(l.b)(_, I, N),
					w = x && N.restrict_sr,
					T = jn(N.type, w),
					L = {
						...N,
						type: [c.jc.Posts, c.jc.Subreddits, c.jc.Users]
					},
					F = Object(l.b)(_, I, L),
					M = {
						redesign: !0,
						searchOptions: N
					},
					B = pr[T].tab,
					A = Boolean(w) || pr[T].sidebar && !k,
					D = pr[T].filterNav || T === je.h.Comments && v,
					U = Object(wn.a)({
						redditStyle: !0,
						theme: g
					});
				let V;
				return C && (xn.a.set(ws.a.SERP, P, C), n(Object(p.c)())), Object(R.S)(m) || Object(R.D)(m) ? V = a.a.createElement(gn, mr({}, M, {
					url: Js(E)
				})) : j && y && (V = a.a.createElement(gn, mr({}, M, {
					subreddit: j,
					url: Js(E, j.name)
				}))), Object(yn.c)(), Object(o.useEffect)((function() {
					return () => {
						fn.a.clear(ws.a.SERP)
					}
				}), []), Object(o.useEffect)(() => (On.a.set(N.q || ""), () => {
					On.a.reset()
				}), []), Object(o.useEffect)(() => {
					let e = 0;
					return e = window.setTimeout(() => n(Object(b.k)()), ur), () => {
						Object(Ps.b)(Ps.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(o.useEffect)(() => {
					E && S && E[Ft.x] !== S[Ft.x] && (Object(Ps.b)(Ps.a.SearchResults), Object(Ps.d)(Ps.a.SearchResults))
				}, [E, S]), Object(o.useEffect)(() => {
					const e = {
							...E,
							type: void 0
						},
						t = {
							...S,
							type: void 0
						};
					!u()(e, t) && !f()(S) && fn.a.update(ws.a.SERP)
				}, [E, S]), Object(o.useEffect)(() => {
					if (B === je.h.Comments && !O.current) {
						let e = 0;
						return e = window.setTimeout(() => {
							O.current = !0, n(Object(b.j)())
						}, ur), () => {
							window.clearTimeout(e)
						}
					}
				}, [B]), a.a.createElement(Pn, {
					backgroundColor: U.canvas,
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(h.a, null), a.a.createElement(cr, null), a.a.createElement(bt, {
						listingKey: P,
						listingName: _,
						location: t,
						searchOptions: N,
						tab: B
					})),
					navBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(Wt, {
						activeTab: B,
						searchOptions: N,
						searchSwitcher: V
					}), D && a.a.createElement(an, {
						key: "subNav",
						searchOptions: N,
						shouldHideGlobalSearchLink: !0,
						subredditName: _,
						tab: B
					}), V && a.a.createElement("div", {
						className: lr.a.searchSwitcherContainer
					}, V)),
					sidebar: A && a.a.createElement(us, {
						className: lr.a.sidebar,
						listingKey: F,
						listingName: _ || je.c,
						searchOptions: L,
						tab: B
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
					experimentName: n.I
				}) === n.Od
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
					experimentName: r.E
				}), e => e === r.O.Enabled)
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
					experimentName: n.pc
				}), a.a),
				l = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(i.h)(e) && Object(o.f)(e),
					experimentName: n.oc
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
				experimentName: n.wf
			}), e => ({
				isSubEnlarged: e === n.Mf.Variant1 || e === n.Mf.Variant3,
				withCommunityDescription: e === n.Mf.Variant2 || e === n.Mf.Variant3
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
					return Boolean(t) && !Object(r.pg)(t)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~SearchResults.16e35bcd76538dce00f6.js.map