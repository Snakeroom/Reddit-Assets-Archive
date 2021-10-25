// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.54ce512d7f5a8c57fcc5.js
// Retrieved at 10/25/2021, 2:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage", "CommentsPage"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, o) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, o)
				}), t)
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var s = Math.floor,
				o = Math.random;
			e.exports = function(e, t) {
				return e + s(o() * (t - e + 1))
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseDelay.js"),
				n = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return o(e, 1, t)
				}));
			e.exports = n
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseRandom.js"),
				n = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				a = Math.min,
				d = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && n(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = r(e), void 0 === t ? (t = e, e = 0) : t = r(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (s || e % 1 || t % 1) {
					var l = d();
					return a(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return o(e, t)
			}
		},
		"./src/lib/makeCollectionCommentsPageKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t, s, o = {}) => {
				let n = `collectionCommentsPage--[collection:'${e}']`;
				return t && (n += `--[post:'${t}']`), s && (n += `--[rootComment:'${s}']`), o && (o.sort && o.hasSortParam && (n += `--[sort:'${o.sort}']`), o.context && (n += `--[context:${o.context}]`), o.depth && (n += `--[depth:${o.depth}]`)), n
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				let s = `linkedPosts--[post:'${e}']`;
				return t && (s += "--fallback"), s
			}
		},
		"./src/lib/makeNsfwLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return `nsfwLinkedPosts--[post:'${e}']`
			}
		},
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
		"./src/reddit/actions/pages/collectionCommentsPage.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "collectionCommentsPagePending", (function() {
				return K
			})), s.d(t, "collectionCommentsPageLoaded", (function() {
				return q
			})), s.d(t, "collectionCommentsPageFailed", (function() {
				return G
			})), s.d(t, "collectionCommentsPageRequested", (function() {
				return Y
			})), s.d(t, "collectionCommentsPageLoadedFull", (function() {
				return Q
			})), s.d(t, "fullCollectionCommentsPageDataRequested", (function() {
				return z
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
				O = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/endpoints/governance/posts.ts"),
				y = s("./src/config.ts"),
				E = s("./src/lib/makeApiRequest/index.ts"),
				P = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function k(e, t, s) {
				const o = `${y.a.gatewayUrl}/desktopapi/v1/collection_postcomments`;
				return s ? Object(P.a)(`${o}/${e}/${t}/${s}`) : t ? Object(P.a)(`${o}/${e}/${t}`) : Object(P.a)(`${o}/${e}`)
			}
			var j = (e, t, s, n, r) => Object(E.a)(e, {
					data: r,
					endpoint: k(t, s, n),
					method: o.ib.GET
				}),
				I = s("./src/reddit/endpoints/page/subredditPage.ts"),
				w = s("./src/reddit/helpers/canonicalUrls.ts"),
				_ = s("./src/reddit/helpers/commentList/index.ts"),
				S = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				L = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/helpers/trackers/screenview.ts"),
				N = s("./src/reddit/models/Comment/index.ts"),
				M = s("./src/reddit/models/Post/index.ts"),
				A = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				R = s("./src/reddit/selectors/platform.ts"),
				F = s("./src/reddit/selectors/postCollection.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				U = s("./src/reddit/actions/pages/comments.ts"),
				V = s("./src/reddit/actions/pages/constants.ts"),
				W = s("./src/lib/initializeClient/installReducer.ts"),
				H = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(W.a)({
				pages: {
					comments: H.a
				}
			});
			const K = Object(n.a)(V.d),
				q = Object(n.a)(V.b),
				G = Object(n.a)(V.a),
				Y = e => async (t, s) => {
					const {
						collectionId: n,
						partialPostId: r,
						partialCommentId: d,
						subredditName: c = "",
						routePrefix: l
					} = e.params, g = r ? Object(M.s)(r) : "", C = d && Object(N.h)(d), {
						queryParams: v
					} = e, y = s(), {
						instanceId: E
					} = v, P = {
						id: n,
						type: O.b[l]
					}, k = O.b[l] === O.a.PROFILE, {
						hasSortParam: j,
						sortToUse: I
					} = Object(S.a)(y, g), _ = ["context", "depth", "limit", x.f].reduce((e, t) => {
						const s = parseInt(v[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: c,
						hasSortParam: j,
						instanceId: E
					});
					j && (_.sort = I), t(p.r(g)), await Promise.all([k ? t(u.d(c)) : Promise.resolve(), t(J(n, g, C, _))]);
					const L = ((e, t) => {
						const s = Object(F.q)(e, {
							collectionId: t.id
						});
						if (!s) return "";
						const n = Object(D.I)(e, {
								identifier: t
							}),
							r = Object(i.c)(s.title, n.name).toString();
						return Object(a.a)(r, f.c, o.hb)
					})(s(), P) || Object(i.d)();
					t(m.l({
						title: L
					}));
					const A = s().posts.models[g];
					if (A) {
						const o = Object(D.I)(s(), {
							identifier: A.belongsTo
						});
						if (!A.isSponsored)
							if (A.belongsTo.type === O.a.SUBREDDIT) {
								!!Object(D.P)(y, {
									subredditId: A.belongsTo.id
								}) || await t(b.o(o.name))
							} else await t(u.d(o.name));
						const n = s().posts.instances[g] ? e.queryParams.instanceId : A.postId;
						t(Object(h.b)(n))
					}
					k ? Object(w.d)(s(), t, e) : Object(w.e)(s(), t, e), Object(T.v)(s(), !0)
				}, Q = Object(n.a)(V.c), z = (e, t, s, o) => async (n, i, a) => {
					const d = Object(r.a)(e, t, s, o),
						c = i();
					t = t || Object(F.p)(c, {
						collectionId: e
					});
					const l = await j(a.apiContext(), e, t, s, o);
					if (n(Object(m.m)(l.status)), l.ok) {
						if (!(t = t || l.body.collections[e].primaryPostId)) return;
						const s = Object(_.a)(l.body, t, c);
						n(q({
							key: d,
							collectionId: e,
							meta: c.meta,
							postId: t,
							shouldCollapse: s,
							...l.body
						}));
						const o = c.user.prefs.commentMode;
						n(Q({
							commentMode: o,
							key: d,
							postId: t
						}))
					} else n(G({
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
					} = o, f = b.pages.comments.keyToHeadCommentId.hasOwnProperty(h), O = b.pages.comments.api.fullyLoaded[h], y = b.pages.comments.api.error[h];
					if (b.pages.comments.api.pending[h] || f && !y) {
						if (f && !b.sidebarPromotedPosts.firstFetch) {
							const e = Object(R.i)(b) ? A.a.COMMENTS_OVERLAY : A.a.COMMENTS;
							window.addEventListener("load", () => {
								i(Object(d.b)(e))
							})
						}
						return void(O || n || i(z(e, t, s, o)))
					}
					const E = b.user.prefs.commentMode;
					i(K({
						key: h,
						collectionId: e,
						commentMode: E,
						postId: t
					}));
					const P = {
						...o
					}; {
						const e = t && Object(B.H)(a(), {
							postId: t
						});
						e && e.numComments && e.numComments > U.MIN_NUM_COMMENTS_TO_TRUNCATE && (P.truncate = U.NUM_COMMENTS_TRUNCATE)
					}
					let k, w = await Object(L.a)("comments", () => j(u.apiContext(), e, t, s, P));
					if (i(Object(m.m)(w.status)), w.ok && (t = t || w.body.collections[e].primaryPostId)) {
						const e = Object.keys(w.body.posts).filter(e => !!w.body.posts[e].isMeta),
							s = Object(B.H)(a(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(v.a)(u.apiContext(), s.belongsTo.id, e);
							t.ok && (k = t.body)
						}
					}
					if (!n) {
						const n = t ? Object(B.H)(a(), {
							postId: t
						}) : null;
						n && w.body.comments && Object.keys(w.body.comments).length < n.numComments ? i(z(e, t, s, o)) : w.ok && i(Q({
							commentMode: E,
							key: h,
							postId: t
						}));
						const r = Object(R.i)(b) ? A.a.COMMENTS_OVERLAY : A.a.COMMENTS;
						i(Object(d.b)(r))
					}
					if (w.ok) {
						if (!t) return;
						const e = Object(_.a)(w.body, t, b);
						i(Object(U.commentsPageLoaded)({
							commentMode: E,
							key: h,
							postId: t,
							meta: b.meta,
							governance: k,
							shouldCollapse: e,
							...w.body
						})), i(g.g(h));
						const s = Object(B.H)(b, {
							postId: t
						});
						s && i(p.z(s, C.a.CommentsView)), !n && s && "subreddit" === s.belongsTo.type && w.body.comments && await i(Object(c.a)({
							commentIds: Object.keys(w.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else x && (i(Object(l.subredditPending)({
						key: h
					})), w = await Object(L.a)("subreddit", () => Object(I.a)(u.apiContext(), x, {})), i(Object(m.m)(w.status))), i(Object(l.handleSubredditPageApiError)(w, x)), i(G({
						error: w.error,
						key: h,
						...w.body
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return lt
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return mt
			})), s.d(t, "commentsPagePending", (function() {
				return pt
			})), s.d(t, "commentsPageLoaded", (function() {
				return ut
			})), s.d(t, "commentsPageFailed", (function() {
				return ht
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return bt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return gt
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return Ct
			})), s.d(t, "commentsPageRequested", (function() {
				return xt
			})), s.d(t, "commentsPageDataRequested", (function() {
				return ft
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return Ot
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return vt
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/reddit/actions/category/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/components/CreatorStats/helpers.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/CreatorStats.json");
			var c = s("./src/reddit/selectors/creatorStats.ts"),
				l = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				m = s("./src/reddit/actions/creatorStats/constants.ts"),
				p = s("./src/lib/initializeClient/installReducer.ts"),
				u = s("./src/reddit/reducers/features/creatorStats/index.ts");
			Object(p.a)({
				features: {
					creatorStats: u.a
				}
			});
			const h = Object(r.a)(m.b),
				b = Object(r.a)(m.a),
				g = ({
					postId: e,
					subredditId: t
				}) => async (s, o, {
					gqlContext: n
				}) => {
					var r, m;
					const p = o();
					if (!Object(l.a)(p, e)) return;
					if (!Object(c.a)(p, e)) return;
					const u = p.posts.models[e];
					if (!(u && Object(i.d)(u.created))) return;
					if (null === (m = null === (r = o().features) || void 0 === r ? void 0 : r.creatorStats) || void 0 === m ? void 0 : m.postStats[e]) return;
					s(h());
					const g = await (async (e, t) => {
						return await Object(a.a)(e, {
							...d,
							variables: t
						})
					})(n(), {
						postId: e,
						subredditId: t
					});
					if (g.ok && g.body) {
						const {
							data: e
						} = g.body, t = (e => {
							const t = {},
								s = {},
								{
									postStatsById: o,
									subredditInfoById: n
								} = e;
							if (!o) return;
							const {
								id: r
							} = o;
							return t[r] = o, n && "id" in n && (s[n.id] = n), {
								postStats: t,
								subredditKarma: s
							}
						})(e);
						t && s(b(t))
					}
				};
			var C = s("./src/reddit/actions/discoveryUnit.ts"),
				x = s("./src/reddit/actions/pages/subreddit.ts"),
				f = s("./src/reddit/actions/shortcuts/active.ts"),
				O = s("./src/reddit/actions/subredditSettings.ts"),
				v = s("./src/reddit/endpoints/governance/posts.ts"),
				y = s("./src/reddit/endpoints/page/commentsPage.ts"),
				E = s("./src/reddit/endpoints/page/subredditPage.ts"),
				P = s("./src/reddit/endpoints/profile/info.ts"),
				k = s("./src/reddit/models/Post/index.ts"),
				j = s("./src/lib/constants/index.ts"),
				I = s("./src/lib/pageTitle.ts"),
				w = s("./src/reddit/actions/economics/helpers/async.ts"),
				_ = s("./src/reddit/actions/externalAccount.ts"),
				S = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				L = s("./src/reddit/actions/platform.ts"),
				T = s("./src/reddit/actions/post.ts"),
				N = s("./src/reddit/actions/profile/index.ts"),
				M = s("./src/reddit/actions/subreddit.ts"),
				A = s("./src/reddit/actions/toaster.ts"),
				R = s("./src/reddit/constants/adEvents.ts"),
				F = s("./src/reddit/constants/graphql.ts"),
				B = s("./src/reddit/constants/parameters.ts"),
				D = s("./src/reddit/constants/posts.ts"),
				U = s("./src/reddit/helpers/commentList/index.ts"),
				V = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				W = s("./src/reddit/models/Comment/index.ts"),
				H = s("./src/reddit/models/Media/index.ts"),
				K = s("./src/reddit/models/Subreddit/index.ts"),
				q = s("./src/reddit/models/User/index.ts"),
				G = s("./src/reddit/selectors/category.ts"),
				Y = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Q = s("./src/reddit/selectors/experiments/postSeo.ts"),
				z = s("./node_modules/reselect/es/index.js"),
				J = s("./src/reddit/constants/experiments.ts"),
				X = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Z = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				$ = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				ee = s("./src/reddit/selectors/platform.ts"),
				te = s("./node_modules/fbt/lib/FbtPublic.js"),
				se = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				oe = s("./src/reddit/selectors/user.ts");
			const ne = new Set([k.g.AntiEvilOps, k.g.AutomodFiltered, k.g.CommunityOps, k.g.ContentTakedown, k.g.CopyrightTakedown, k.g.Moderator, k.g.Reddit]),
				re = new Set([k.g.Author, k.g.AuthorDeleted]),
				ie = Object(z.a)(Z.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return ne.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = te.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let o = Object(se.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== H.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				ae = Object(z.a)(Z.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return re.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = te.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let o = Object(se.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== H.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				de = Object(z.a)(oe.k, Z.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				ce = Object(z.a)(ee.f, Z.a, ie, ae, $.a, de, $.b, (e, t, s, o, n, r, i) => {
					if (!e || !t || n) return !1;
					if (o) return !0;
					const a = r || i,
						d = t.score >= 2 || t.numComments >= 2;
					return !(!s || a || d)
				});
			var le = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				me = s("./src/reddit/selectors/posts.ts"),
				pe = s("./src/reddit/selectors/subreddit.ts"),
				ue = s("./src/lib/makeCommentsPageKey/index.ts"),
				he = s("./src/reddit/actions/ads/index.ts"),
				be = s("./src/reddit/helpers/canonicalUrls.ts"),
				ge = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Ce = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				xe = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				fe = s("./src/lib/performanceTimings/index.tsx"),
				Oe = s("./src/reddit/actions/gold/powerups.ts"),
				ve = s("./src/lib/makeListingKey/index.ts"),
				ye = s("./src/reddit/actions/googleQASchema/constants.ts");
			const Ee = Object(r.a)(ye.b),
				Pe = Object(r.a)(ye.a);
			var ke = s("./src/reddit/actions/linkedPosts/constants.ts");
			const je = Object(r.a)(ke.a),
				Ie = Object(r.a)(ke.c),
				we = Object(r.a)(ke.b);
			s("./src/redditGQL/operations/OtherDiscussions.json");
			var _e = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				Se = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Le = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				Te = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Ne = ({
				getState: e,
				onFailure: t,
				onSuccess: s,
				postId: o,
				response: n
			}) => {
				if (!n.ok) return void t(n.error);
				const r = n.body,
					{
						post: i
					} = r && r.data,
					a = e(),
					d = Object(ve.a)(o, null, {
						isOtherDiscussions: !0
					});
				if (i) {
					if (i.otherDiscussions && i.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = i, {
							postFlair: n,
							postIds: r,
							posts: c,
							profiles: l,
							subreddits: m
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								s = e => {
									const s = Object(Se.e)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: o
									} = e;
									if (o && o.type === k.a.Post && o.postInfo) {
										const e = Object(Se.e)(o.postInfo);
										t.posts[e.id] = e
									}
									return Object(k.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(Le.a)(e.profile)) : Object(k.m)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(Te.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(_e.a)(e.subreddit))), s.id
								};
							if (e && e.edges)
								for (const {
										node: o
									} of e.edges) {
									const e = s(o);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						s({
							count: t,
							key: d,
							meta: a.meta,
							postFlair: n,
							postId: o,
							postIds: r,
							posts: c,
							profiles: l,
							subreddits: m
						})
					}
				} else s({
					count: 0,
					key: d,
					meta: a.meta,
					postFlair: {},
					postId: o,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const Me = Object(r.a)(S.a),
				Ae = Object(r.a)(S.b),
				Re = Object(r.a)(S.c);
			var Fe = s("./src/reddit/actions/subreddit/constants.ts"),
				Be = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var De = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: n
				}) => {
					try {
						t({
							altText: n && n.media && (n.media.still && n.media.still.altText || n.media.obfuscated && n.media.obfuscated.altText) || null,
							postId: o
						})
					} catch (r) {
						s(r)
					}
				},
				Ue = s("./src/lib/makeLinkedPostsListingKey/index.ts");
			var Ve = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: n
				}) => {
					try {
						const s = [],
							r = {},
							i = {};
						if (!n || !n.linked) return;
						const a = e(),
							d = a.posts && a.posts.models,
							c = Object(Ue.a)(o),
							l = n.linked.posts && n.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Se.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(k.m)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(Te.a)(t)
							}
						}
						t({
							dist: n.linked.posts && n.linked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: r,
							postIds: s,
							subreddits: i
						})
					} catch (r) {
						s(r)
					}
				},
				We = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var He = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Ke = ({
					isLinkedPostsFallback: e,
					getState: t,
					onSuccess: s,
					onFailure: o,
					options: n,
					postId: r,
					subreddit: i
				}) => {
					try {
						if (!i) return;
						const o = i.elements || i.posts,
							a = t(),
							d = ((e, t) => {
								const {
									edges: s
								} = e, o = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: o
								}
							})(o, a.posts && a.posts.models),
							c = Object(We.a)(d),
							l = He(c),
							m = o.edges.reduce((e, t) => (t.node.id && t.node.id !== r && e.push(t.node.id), e), []),
							{
								range: p,
								sort: u,
								subredditName: h
							} = n,
							b = e && r ? Object(Ue.a)(r, !0) : Object(ve.a)(h, j.V[u], {
								t: p
							});
						s({
							dist: o.dist,
							key: b,
							meta: a.meta,
							postIds: m,
							posts: l
						})
					} catch (a) {
						o(a)
					}
				},
				qe = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Ge = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Ye = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: n
				}) => {
					try {
						const s = [],
							r = {},
							i = {};
						if (!n || !n.nsfwLinked) return;
						const a = e(),
							d = a.posts && a.posts.models,
							c = Object(Ge.a)(o),
							l = n.nsfwLinked.posts && n.nsfwLinked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Se.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(k.m)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(Te.a)(t)
							}
						}
						t({
							dist: n.nsfwLinked.posts && n.nsfwLinked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: r,
							postIds: s,
							subreddits: i
						})
					} catch (r) {
						s(r)
					}
				},
				Qe = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const ze = Object(r.a)(Qe.b),
				Je = Object(r.a)(Qe.a);
			var Xe = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Ze = Object(r.a)(Xe.b),
				$e = Object(r.a)(Xe.a),
				et = Object(r.a)(Fe.j),
				tt = Object(r.a)(Fe.i),
				st = (Object(r.a)(Fe.r), Object(r.a)(Fe.q), e => async (t, s, {
					gqlContext: o
				}) => {
					var n, r, i, d;
					const {
						includeNSFWListingBelowExperiment: c,
						includeListingBelowExperiment: l,
						includeOtherDiscussions: m,
						includePostFeed: p,
						includePostQASchemaEligibilityFlag: u,
						listingBelowExperimentVariant: h,
						postId: b,
						range: g,
						sort: C,
						subredditName: x
					} = e, f = Object(ve.a)(b, null, {
						isOtherDiscussions: !0
					}), O = s(), v = Object(me.A)(O, {
						listingKey: f
					}), y = m && (!v || 0 === v.length), E = Object(ve.a)(x, j.V[C], {
						t: g
					}), P = Object(me.A)(O, {
						listingKey: E
					}), k = p && (l || !P || 0 === P.length), I = l, w = c, _ = Object(me.H)(O, {
						postId: b
					}), S = !!_ && !!_.media && (Object(H.J)(_.media) || Object(H.F)(_.media)) && !_.media.altText;
					if (!(y || k || I || w || S || u)) return;
					y && t(Re({
						key: f
					}));
					const L = await ((e, t) => Object(a.a)(e, {
							...Be,
							variables: t
						}))(o(), e),
						T = L.body,
						N = Object(qe.a)(h),
						M = I && !!(null === (i = null === (r = null === (n = T.data) || void 0 === n ? void 0 : n.post) || void 0 === r ? void 0 : r.linked) || void 0 === i ? void 0 : i.isEligible),
						A = I && (N || !M);
					u && (L.ok ? T.data && T.data.post && t(Ee({
						postId: b,
						isEligibleForQASchema: null !== (d = T.data.post.isEligibleForQASchema) && void 0 !== d && d
					})) : t(Pe())), y && Ne({
						getState: s,
						onFailure: e => t(Me(e)),
						onSuccess: e => t(Ae(e)),
						postId: b,
						response: L
					}), (k && !I || A) && (L.ok ? T.data && Ke({
						getState: s,
						isLinkedPostsFallback: A,
						onFailure: e => t(tt(e)),
						onSuccess: e => t(et(e)),
						options: e,
						postId: b,
						subreddit: T.data.subreddit
					}) : t(tt(L.error))), I && M && !N && L.ok && T.data && Ve({
						getState: s,
						onFailure: e => t(we(e)),
						onSuccess: e => t(Ie(e)),
						postId: b,
						post: T.data.post
					}), w && L.ok && Ye({
						getState: s,
						onFailure: e => t($e(e)),
						onSuccess: e => t(Ze(e)),
						postId: b,
						post: T.data.post
					}), S && L.ok && T.data && De({
						getState: s,
						onFailure: e => t(Je(e)),
						onSuccess: e => t(ze(e)),
						postId: b,
						post: T.data.post
					}), I && t(je({
						postId: b,
						isEligibleForLinkedPosts: M
					}))
				}),
				ot = e => {
					var t, s;
					const o = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						n = o && Object(k.s)(o),
						{
							sortToUse: r
						} = Object(V.a)(e, n);
					return (!r || r === j.t.CONFIDENCE) && Object(X.c)(e, {
						experimentEligibilitySelector: () => Object(oe.J)(e),
						experimentName: J.A
					}) === J.C.Enabled
				};
			var nt = s("./src/reddit/selectors/chatPost.ts"),
				rt = s("./src/reddit/selectors/seo/index.ts"),
				it = s("./src/reddit/actions/pages/constants.ts"),
				at = s("./src/reddit/reducers/pages/comments/index.ts"),
				dt = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				ct = s("./src/reddit/selectors/i18n/index.ts");
			Object(p.a)({
				pages: {
					comments: at.a
				}
			});
			const lt = 25,
				mt = 100,
				pt = Object(r.a)(it.h),
				ut = Object(r.a)(it.f),
				ht = Object(r.a)(it.e),
				bt = (e, t, s) => {
					const o = !e,
						n = Object(me.H)(t, {
							postId: s
						}).belongsTo,
						r = Object(pe.I)(t, {
							identifier: n
						}),
						i = Object(rt.c)(t, {
							identifier: n
						}),
						a = !!Object(qe.c)(t),
						d = Object(ct.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (c.listingBelow = i || o, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (i || o) && (!Object(K.h)(r) && !Object(nt.d)(t, {
						postId: s
					}) && !!r || !Object(ee.i)(t) && Object(Q.e)(t)), e && (c.postQASchema = Object(Q.d)(t)), c
				},
				gt = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				Ct = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				xt = e => async (t, s) => {
					var r, i;
					const {
						partialPostId: a,
						partialCommentId: d
					} = e.params, {
						subredditName: c
					} = e.params || "", l = a ? Object(k.s)(a) : "", m = d && Object(W.h)(d), {
						path: p,
						queryParams: u
					} = e, h = Object(S.d)(p), {
						instanceId: b
					} = u, {
						hasSortParam: g,
						sortToUse: C
					} = Object(V.a)(s(), l), x = null === (i = null === (r = Object(ee.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === i ? void 0 : i.route.chunk, O = ["context", "depth", "limit", B.f].reduce((e, t) => {
						const s = parseInt(u[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: c,
						hasSortParam: g,
						instanceId: b,
						include_categories: !0
					});
					g && (O.sort = C), O.onOtherDiscussions = h, t(T.r(l)), await t(ft(l, m, O, C));
					const v = s().posts.models[l],
						y = Object(oe.K)(s());
					if (v && "subreddit" === v.belongsTo.type) {
						const e = v.belongsTo.id,
							s = Object(fe.i)(() => t(Object(Oe.l)(e, {
								fullData: !0,
								includeIdentity: y
							})), {
								name: "subredditPowerupsRequested",
								page: x,
								isLoggedIn: y
							});
						await s
					}
					if (v) {
						const r = ((e, t) => {
								const s = Object(me.U)(e, {
										postId: t
									}),
									o = Object(me.H)(e, {
										postId: t
									});
								return s && o ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), l),
							i = Object(pe.I)(s(), {
								identifier: v.belongsTo
							});
						if (i && (e => J.ee.Redirect === Object(X.b)(e, {
								experimentEligibilitySelector: ce,
								experimentName: J.Wd
							}))(s())) return void t(Object(o.c)(i.url));
						if ((v.media && v.media.type) === H.o.LIVEVIDEO) {
							const e = `/rpan${v.belongsTo.type===D.a.SUBREDDIT?i.url:"/"}${Object(k.t)(v.id)}`;
							return void t(Object(o.c)(e))
						}
						if (v.belongsTo.type !== D.a.SUBREDDIT || v.isSponsored) {
							if (v.belongsTo.type === D.a.PROFILE) {
								const e = Object(fe.i)(() => t(N.d(i.name)), {
									name: "getProfileInfo",
									page: x,
									isLoggedIn: y
								});
								await e
							}
						} else {
							if (!!!Object(pe.P)(s(), {
									subredditId: v.belongsTo.id
								})) {
								const e = Object(fe.i)(() => t(M.o(i.name)), {
									name: "getSubredditRules",
									page: x,
									isLoggedIn: y
								});
								await e
							}
						}
						const a = bt(!1, s(), l),
							d = h;
						if (gt(d, a)) {
							Object(ge.d)(ge.a.LinkedPosts);
							const e = Object(ge.c)(ge.a.LinkedPosts);
							Object(ge.d)(ge.a.NsfwLinkedPosts);
							const o = Object(ge.c)(ge.a.NsfwLinkedPosts),
								n = {
									adContext: {
										layout: F.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: l
									},
									range: j.ec.WEEK.toUpperCase(),
									sort: j.O.TOP,
									subredditName: i.name
								},
								r = {
									postId: l
								},
								c = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(qe.c)(s())
								},
								m = {
									nsfwListingBelowCorrelationId: o,
									nsfwListingBelowExperimentVariant: Object(dt.a)(s())
								},
								p = Ct(a);
							Object(fe.i)(() => t(st({
								...r,
								...n,
								...c,
								...m,
								...p,
								includeOtherDiscussions: d
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: y,
								page: x
							});
							0
						}
						t(Object(_.p)()), t(L.l({
							title: r
						}));
						const c = s().posts.instances[l] ? e.queryParams.instanceId : v.postId;
						t(Object(f.b)(c)); {
							const e = Object(G.d)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(n.c(e))))
						}
					} else t(L.l({
						title: I.d()
					}));
					const {
						routePrefix: E
					} = e.params;
					D.b[E] === D.a.PROFILE ? Object(be.d)(s(), t, e) : Object(be.b)(s(), t, e)
				}, ft = (e, t, s, o) => async (n, r, i) => {
					var a, d;
					const c = r(),
						l = Object(ue.a)(e, t, s),
						{
							subredditName: m
						} = s,
						p = c.pages.comments.keyToHeadCommentId.hasOwnProperty(l),
						u = c.pages.comments.api.fullyLoaded[l],
						h = c.pages.comments.api.error[l],
						b = c.pages.comments.api.pending[l],
						f = !Object(oe.J)(c),
						O = Object(oe.k)(c),
						k = o === j.t.CHAT,
						I = !!c.platform.lastPage;
					if ((b || p && !h) && !(k && I)) {
						if (p && !c.sidebarPromotedPosts.firstFetch) {
							const e = Object(ee.i)(c) ? xe.a.COMMENTS_OVERLAY : xe.a.COMMENTS;
							window.addEventListener("load", () => {
								n(Object(he.b)(e))
							})
						}
						return void(u || n(vt(e, t, s)))
					}
					n(C.g());
					const _ = c.user.prefs.commentMode;
					n(pt({
						key: l,
						postId: e,
						commentMode: _
					}));
					const S = {
						...s,
						...k ? {
							sort: j.t.LIVE
						} : f ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(me.H)(r(), {
							postId: e
						});
						t && t.numComments && t.numComments > mt && (S.truncate = lt)
					}
					const N = null === (d = null === (a = Object(ee.b)(c)) || void 0 === a ? void 0 : a.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
						M = Object(fe.i)(() => Object(y.a)(i.apiContext(), e, t, S, Object(Y.a)(r()), ot(r())), {
							name: "fetchCommentsPage",
							isLoggedIn: !f,
							page: N
						}),
						F = !f && O && Object(fe.i)(() => Object(P.d)(i.gqlContext(), Object(q.e)(O)), {
							name: "fetchProfileKarma",
							isLoggedIn: !f,
							page: N
						}) || null,
						[B, D] = await Promise.all([M, F]);
					let V;
					if (n(Object(L.m)(B.status)), B.ok) {
						const t = Object.keys(B.body.posts).filter(e => !!B.body.posts[e].isMeta),
							s = B.body.posts[e];
						if (t.length) {
							const e = Object(fe.i)(() => Object(v.a)(i.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: N,
									isLoggedIn: !f
								}),
								o = await e;
							o.ok && (V = o.body)
						}
						if (D && D.ok) {
							const {
								data: e
							} = D.body, t = {
								karma: {
									...P.a
								}
							};
							if (Object(P.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							B.body && B.body.account && Object.assign(B.body.account, t)
						}
						const o = Object(U.a)(B.body, e, c);
						n(ut({
							key: l,
							postId: e,
							meta: c.meta,
							governance: V,
							shouldCollapse: o,
							...B.body
						}));
						const r = s && "subreddit" === s.belongsTo.type ? s.belongsTo.id : null;
						await n(g({
							postId: e,
							subredditId: r
						}))
					} {
						const o = Object(me.H)(r(), {
							postId: e
						});
						o && B.body.comments && Object.keys(B.body.comments).length < o.numComments ? n(vt(e, t, s)) : B.ok && n(Ot({
							key: l
						}));
						const i = Object(ee.i)(c) ? xe.a.COMMENTS_OVERLAY : xe.a.COMMENTS;
						n(Object(he.b)(i))
					}
					if (B.ok) {
						n(A.g(l));
						const t = Object(me.H)(r(), {
							postId: e
						});
						if (n(T.z(t, R.a.CommentsView)), t && "subreddit" === t.belongsTo.type && B.body.comments) {
							const e = Object(fe.i)(() => n(Object(w.a)({
								commentIds: Object.keys(B.body.comments),
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: N,
								isLoggedIn: !f
							});
							await e
						}
					} else {
						let e;
						m && (n(Object(x.subredditPending)({
							key: l
						})), e = await Object(Ce.a)("subreddit", () => Object(E.a)(i.apiContext(), m, {})), n(Object(L.m)(e.status)), n(Object(x.handleSubredditPageApiError)(e, m))), n(ht({
							error: B.error,
							key: l,
							...e ? e.body : B.body
						}))
					}
				}, Ot = Object(r.a)(it.g), vt = (e, t, s) => async (o, n, r) => {
					const i = Object(ue.a)(e, t, s),
						a = n(),
						d = Object(oe.K)(a),
						c = Object(oe.k)(a),
						l = Object(y.a)(r.apiContext(), e, t, s, Object(Y.a)(a), ot(a)),
						m = d && c && Object(P.d)(r.gqlContext(), Object(q.e)(c)) || null,
						[p, u] = await Promise.all([l, m]);
					if (o(Object(L.m)(p.status)), p.ok) {
						if (u && u.ok) {
							const {
								data: e
							} = u.body, t = {
								karma: {
									...P.a
								}
							};
							if (Object(P.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							p.body && p.body.account && Object.assign(p.body.account, t)
						}
						const t = Object(U.a)(p.body, e, a);
						o(ut({
							key: i,
							postId: e,
							meta: a.meta,
							shouldCollapse: t,
							...p.body
						})), o(Ot({
							key: i
						}));
						const s = n().posts.models[e],
							r = s && Object(me.U)(n(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object(le.a)(a, {
							subredditId: r.id
						}) && o(Object(O.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && p.body.comments && await o(Object(w.a)({
							commentIds: Object.keys(p.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else o(ht({
						error: p.error,
						key: i,
						...p.body
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
				O = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				v = e => r.a.createElement(x, e, e.isCommentBoxDesignEnabled ? r.a.createElement(O, null) : r.a.createElement(f, null), r.a.createElement(d.a, {
					className: u.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: b
				})),
				y = C(v),
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
			}, n.a.createElement(c.s, {
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
			})), n.a.createElement(c.s, {
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
						method: c.ib.POST,
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
			var O = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				v = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				E = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				k = s("./src/reddit/controls/Dropdown/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/Row.tsx"),
				I = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				w = s("./src/reddit/helpers/path/index.ts"),
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
				D = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/tooltip.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = s.n(W),
				K = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const q = Object(E.a)(k.a),
				G = e => e === K.a.First ? o.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === K.a.Last ? o.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : o.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Y extends r.a.Component {
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
						displayText: `${o.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${G(n)}`,
						id: t,
						noHover: !0,
						onClick: s
					}), r.a.createElement(M.b, {
						className: H.a.DropdownTriangle,
						onClick: s
					}), r.a.createElement(q, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(j.b, {
						displayText: G(K.a.First),
						isSelected: n === K.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(j.b, {
						displayText: G(K.a.Last),
						isSelected: n === K.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(j.b, {
						displayText: G(K.a.None),
						isSelected: n === K.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Q = Y;
			const z = "CommentSort--SortPicker",
				J = "CommentSort--HighlightPicker",
				X = "CommentSort--Tooltip",
				Z = Object(E.a)(k.a),
				$ = Object(a.c)({
					commentPermalink: (e, {
						commentId: t
					}) => t && Object(F.m)(e, {
						commentId: t
					}),
					contestModeModalIsOpen: Object(R.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(U.b)(z),
					highlightIsOpen: Object(U.b)(J),
					hasModeratorPostPermissions: (e, {
						postId: t
					}) => {
						const s = Object(B.l)(e, {
							postId: t
						});
						return !!s && s.posts
					},
					post: D.H,
					postPermalink: D.G,
					showCommentHighlighter: (e, {
						postId: t
					}) => {
						const s = Object(V.s)(e),
							o = !!Object(B.l)(e, {
								postId: t
							}),
							n = Object(D.H)(e, {
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
						tooltipId: z
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
						toggleContestModeModal: k
					} = this.props, _ = b.contestMode, S = !h.search.includes(c.t.CONFIDENCE), T = f === c.t.CONFIDENCE && S, N = p && !T, R = c.v[f], F = R ? R() : "", B = E && f === E && !T ? this.addSuggestedLabel(F) : F, D = _ ? o.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : o.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), U = _ ? o.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : o.fbt._("Start", null, {
						hk: "Mjvpj"
					}), V = _ ? o.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
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
						id: z,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(M.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Z, {
						isOpen: i,
						tooltipId: z
					}, [c.t.CONFIDENCE, c.t.TOP, c.t.NEW, c.t.CONTROVERSIAL, c.t.OLD, c.t.QA].map(e => {
						const t = s || g,
							o = Object(w.b)(t),
							n = c.v[e],
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
					}, r.a.createElement(v.c, {
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
					}, r.a.createElement(Q, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: J,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: C,
						trackHighlight: L
					})), n && r.a.createElement(O.a, {
						actionText: U,
						headerText: D,
						modalText: V,
						onConfirm: this.setContestMode,
						toggleModal: k,
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
				return w
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
				O = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				v = s("./src/reddit/components/Comments/States/index.m.less"),
				y = s.n(v);
			const E = l.a.wrapped(f.a, "CommentsIcon", y.a),
				P = l.a.wrapped(O.a, "SnooFacepalm", y.a),
				k = l.a.p("EmptyTitle", y.a),
				j = l.a.p("ErrorTitle", y.a),
				I = l.a.p("EmptyText", y.a),
				w = ({
					className: e,
					isChat: t
				}) => a.a.createElement("div", {
					className: Object(c.a)(y.a.StateContainer, e)
				}, a.a.createElement(E, null), a.a.createElement(k, null, t ? o.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : o.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), a.a.createElement(I, null, o.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				_ = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(E, null), a.a.createElement(k, null, o.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(I, null, o.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = ({
					link: e
				}) => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(E, null), a.a.createElement(k, null, o.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), a.a.createElement(u.m, {
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
				}, a.a.createElement(P, null), a.a.createElement(j, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : o.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), a.a.createElement(u.k, {
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
				D = l.a.wrapped(x.a, "Upvote", y.a),
				U = l.a.wrapped(C.a, "Downvote", y.a),
				V = () => a.a.createElement("div", {
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
				}) : a.a.createElement(F, null, a.a.createElement(D, null), a.a.createElement(U, null)), a.a.createElement(B, null, a.a.createElement(V, null), a.a.createElement(W, null)))))
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
				u = s("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				h = s("./src/reddit/actions/comment/index.ts"),
				b = s("./src/reddit/constants/comments.ts"),
				g = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/constants/elementClassNames.ts"),
				x = s("./src/reddit/constants/gold.ts"),
				f = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = s("./src/reddit/components/LottieAnimation/index.tsx"),
				v = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				y = s.n(v);
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
				}, d === o.Lottie && a.a.createElement(O.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			});
			const k = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: j,
							effectHighlight: {
								type: o.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				j = "ff0000";

			function I(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						o = Math.floor(Math.random() * s.length);
					return s[o] || null
				}(e ? function(e) {
					return e.map(_).filter(e => e !== w)
				}(e) : [])
			}
			const w = {
				glowHexColor: null,
				effectHighlight: null
			};

			function _(e) {
				for (const t of k) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return w
			}
			var S = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				L = s("./src/reddit/selectors/comments.ts"),
				T = s("./src/reddit/selectors/commentSelector.ts"),
				N = s("./src/reddit/selectors/communityAwards.ts"),
				M = s("./src/reddit/selectors/moderatorPermissions.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				F = s("./node_modules/fbt/lib/FbtPublic.js"),
				B = s("./src/reddit/models/PostDraft/index.ts"),
				D = s("./src/lib/makeDraftKey/index.ts"),
				U = s("./src/lib/objectSelector/index.ts"),
				V = s("./src/reddit/actions/comment/authoring.ts"),
				W = s("./src/reddit/actions/comment/moderation.ts"),
				H = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				K = s("./src/reddit/icons/fonts/helpers.tsx");
			var q = e => a.a.createElement("i", {
					className: Object(l.a)(Object(K.b)("expand", e.isFilled), e.className)
				}),
				G = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				Y = s.n(G);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var z, J, X = s("./node_modules/lodash/defer.js"),
				Z = s.n(X),
				$ = s("./src/reddit/actions/tooltip.ts"),
				ee = s("./src/reddit/selectors/tooltip.ts"),
				te = s("./src/reddit/actions/gold/modals.ts"),
				se = s("./src/reddit/actions/modal.ts"),
				oe = s("./src/reddit/actions/reportFlow/index.ts"),
				ne = s("./src/reddit/helpers/correlationIdTracker.ts"),
				re = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ie = s("./src/reddit/helpers/trackers/lightbox.ts"),
				ae = s("./src/reddit/models/Comment/index.ts"),
				de = s("./src/reddit/selectors/activeModalId.ts"),
				ce = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				le = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				me = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				pe = s("./src/reddit/selectors/subreddit.ts"),
				ue = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				he = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				be = s.n(he);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(z || (z = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(J || (J = {}));
			const ge = (e, t) => {
					const s = be.a[t],
						o = be.a[e];
					return Object(l.a)(s, o)
				},
				Ce = e => Object(l.a)(be.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[be.a.isInOverlay]: e.isInOverlay,
					[be.a.isModModeEnabled]: e.isModModeEnabled,
					[be.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var xe = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				fe = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Oe = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ve = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				ye = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Ee = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Pe = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ke = s("./src/reddit/components/ReportFlow/index.tsx"),
				je = s("./src/reddit/components/ReportFlow/new.tsx"),
				Ie = s("./src/reddit/components/ShareMenu/index.tsx"),
				we = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_e = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				Se = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Le = s("./src/reddit/helpers/trackers/modTools.ts"),
				Te = s("./src/reddit/layout/row/Inline/index.tsx"),
				Ne = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				Me = s.n(Ne),
				Ae = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				Re = s("./src/reddit/selectors/gold/awardIcon.ts");
			var Fe = e => {
					const t = Object(d.e)(me.b),
						s = Object(d.e)(e => t && Object(Re.a)(e, {
							award: t,
							minSize: 32
						}));
					return s ? a.a.createElement("img", {
						className: Object(l.a)(Me.a.img, e.className),
						id: e.id,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						src: s
					}) : a.a.createElement(Ae.a, e)
				},
				Be = s("./src/reddit/icons/fonts/index.tsx"),
				De = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				Ue = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				We = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				He = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ke = s("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				qe = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Ge = s.n(qe);
			const Ye = p.a.wrapped(De.a, "CommentIcon", Ge.a),
				Qe = p.a.wrapped(He.a, "Report", Ge.a),
				ze = p.a.wrapped(Ve.a, "IgnoreReport", Ge.a),
				Je = p.a.wrapped(ye.a, "ModActionsMenu", Ge.a),
				Xe = p.a.div("OverflowMenuSpacer", Ge.a),
				Ze = p.a.wrapped(Pe.a, "DropdownRow", Ge.a),
				$e = p.a.wrapped(Te.a, "Flatlist", Ge.a),
				et = p.a.button("Button", Ge.a),
				tt = p.a.wrapped(xe.a, "ModToolsFlatlist", Ge.a),
				st = p.a.wrapped(_e.a, "ViewReportsDropdown", Ge.a),
				ot = e => `Comment-${e}--Modal--DeleteComment`,
				nt = e => `Distinguish--Dropdown--${e}`,
				rt = e => `${e}-overflow-menu`,
				it = e => `View--Reports--${e}`,
				at = Object(c.c)({
					claimedFreeAward: me.b,
					currentUser: R.k,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(de.a)(e) === ot(t.id),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(ee.b)(nt(t.id))(e),
					isCommentFollowEnabled: Ke.a,
					isFollowed: (e, {
						comment: t
					}) => Object(L.y)(e, {
						commentId: t.id
					}),
					isFollowedCommentExpired: (e, {
						comment: t
					}) => Object(L.A)(e, {
						commentId: t.id
					}),
					isPendingDeletion: (e, {
						comment: t
					}) => Object(L.B)(e, {
						commentId: t.id
					}),
					isReportsDropdownOpen: (e, {
						comment: t
					}) => Object(ee.b)(it(t.id))(e),
					isLoggedIn: R.K,
					postIsArchived: (e, {
						comment: t
					}) => Object(A.B)(e, {
						postId: t.postId
					}),
					isBlockedUserBannerEnabled: (e, {
						comment: t
					}) => !!Object(A.w)(e, {
						postId: t.postId
					}) && Object(ce.a)(e),
					postAuthorIsBlocked: (e, {
						comment: t
					}) => Object(A.w)(e, {
						postId: t.postId
					}),
					postIsLocked: (e, {
						comment: t
					}) => Object(A.C)(e, {
						postId: t.postId
					}),
					commentPermalink: (e, {
						comment: t
					}) => Object(L.m)(e, {
						commentId: t.id
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, o;
						return (null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === t.id
					},
					sendRepliesToggled: (e, {
						comment: t
					}) => Object(L.H)(e, {
						commentId: t.id
					}),
					subredditAboutInfo: (e, {
						subreddit: t
					}) => t ? Object(pe.t)(e, {
						subredditName: t.name
					}) : void 0,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(A.U)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: le.a
				});
			class dt extends a.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(ie.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Le.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Le.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Le.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(ne.d)(ne.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(o(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Le.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Le.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Le.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: o
						} = this.props;
						e(o ? ae.a.UNFOLLOWED : ae.a.FOLLOWED), t(o ? Object(Le.f)("follow", s.id) : Object(Le.a)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Le.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? a.a.createElement(je.a, {
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
						commentPermalink: o,
						deleteComment: n,
						depth: r,
						handleReply: d,
						isAvatarsInCommentsEnabled: c,
						isCommentFollowEnabled: m,
						isFollowed: p,
						isLoggedIn: u,
						isPendingDeletion: h,
						onDistinguishComment: b,
						onIgnoreReports: g,
						onToggleReportsDropdown: C,
						moderatorPermissions: x,
						modModeEnabled: f,
						postIsArchived: O,
						postAuthorIsBlocked: v,
						isBlockedUserBannerEnabled: y,
						postIsLocked: E,
						renderedInOverlay: P,
						sendEvent: k,
						subreddit: j,
						subredditAboutInfo: I,
						toggleDeleteCommentModal: w,
						toggleSendReplies: _,
						trackCommentClick: S
					} = this.props, L = Object(re.a)(x), T = !!s && s.displayText === e.author, N = !!s && s.isEmployee, M = !(I && I.userIsBanned) && (E || O || v && y || L && u || e.isLocked ? L && u : u || c), A = Object(Ee.a)(e), R = L && T && !e.bannedBy, B = T && N && !e.bannedBy, D = R || B, U = s && e.isGildable, V = m && !O, W = [];
					M && W.push(a.a.createElement(et, {
						disabled: h,
						key: "reply",
						onClick: () => {
							d(), Z()(() => S("reply", e.id)())
						}
					}, a.a.createElement(Ye, null), F.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), U && W.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(Fe, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => F.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), W.push(a.a.createElement(Ie.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: o,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == j ? void 0 : j.type
					}, a.a.createElement(et, {
						onClick: () => this.sendCommentEventWithName("share")
					}, F.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), T || W.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(He.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => F.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), W.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(Be.a, {
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
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(Be.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => F.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), V && W.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(Be.a, {
							name: "notification",
							isFilled: p
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: p ? () => F.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => F.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const H = W.map(e => a.a.isValidElement(e) ? e : a.a.createElement(et, {
							className: ge(e.breakpointGroup, z.HideIfVWSmaller),
							disabled: h,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						K = W.map(e => a.a.isValidElement(e) ? null : a.a.createElement(Ze, {
							className: ge(e.breakpointGroup, z.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: Ge.a.dropdownRowText
						}, e.icon));
					return a.a.createElement(i.Fragment, null, a.a.createElement($e, {
						className: Object(l.a)(Ce({
							depth: r,
							isInOverlay: P,
							isModModeEnabled: L && f,
							isFollowCommentEnabled: V
						}), t)
					}, H, a.a.createElement(Xe, {
						className: T ? void 0 : ge(J.LoggedInUser, z.HideIfVWLarger)
					}, a.a.createElement(Pe.b, {
						className: Ge.a.overflowMenu,
						disabled: h,
						dropdownId: rt(e.id),
						onClick: () => k(Object(Le.a)("comment_overflow_menu", e.id))
					}, K, T && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ze, {
						displayText: F.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: Ge.a.dropdownRowText
					}, a.a.createElement(Be.a, {
						name: "delete"
					})), a.a.createElement(Se.a, {
						text: F.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: _,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && a.a.createElement(Oe.a, {
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
						onConfirm: n,
						toggleModal: w,
						trackClick: () => {},
						withOverlay: !0
					}), L && a.a.createElement(a.a.Fragment, null, f && a.a.createElement(tt, {
						className: ge(J.Moderator, z.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: T
					}), a.a.createElement(Je, {
						className: f ? ge(J.Moderator, z.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => k(Object(Le.a)("comment_mod_action_menu", e.id))
					}, a.a.createElement(We.a, null), a.a.createElement(ue.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(Ee.c)(e) && !f && a.a.createElement(fe.a, {
						text: `${A}`,
						onClick: () => {
							C(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: it(e.id)
					}, a.a.createElement(st, {
						model: e,
						onIgnoreReports: () => {
							g(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: it(e.id)
					}), e.ignoreReports ? a.a.createElement(ze, null) : a.a.createElement(Qe, null)), D && a.a.createElement(fe.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, a.a.createElement(Ue.a, null), a.a.createElement(ve.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: N,
						isUserMod: L,
						onDistinguishComment: b,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: nt(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var ct = Object(d.b)(at, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					deleteComment: () => s && e(Object(V.h)(t.id, t.postId)),
					handleDelete: () => {
						e(Object(se.i)(ot(t.id))), e(Object($.h)({
							tooltipId: rt(t.id)
						}))
					},
					handleEdit: () => {
						const o = t.media && t.media.rteMode;
						s && e(Object(V.d)({
							commentId: t.id,
							draftKey: Object(D.a)(B.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: o,
							commentsPageKey: s
						}))
					},
					handleReply: () => s && e(Object(V.p)({
						parentCommentId: t.id,
						commentsPageKey: s
					})),
					onCommentFollow: s => e(Object(V.r)(t.id, s)),
					onDistinguishComment: (s, o) => e(Object(W.b)(t.id, s, o)),
					onFollowedCommentExpire: () => e(Object(h.n)({
						id: t.id,
						expiresAt: 0
					})),
					onGildClick: (s, o) => e(Object(te.d)({
						awardId: o,
						correlationId: s,
						thingId: t.id
					})),
					onIgnoreReports: () => e(Object(W.g)(t.id)),
					onReportClick: () => e(Object(oe.c)(t.id)),
					onToggleSave: () => e(Object(h.m)(t.id)),
					onToggleDistinguishDropdown: () => e(Object($.h)({
						tooltipId: nt(t.id)
					})),
					onToggleReportsDropdown: () => e(Object($.h)({
						tooltipId: it(t.id)
					})),
					toggleDeleteCommentModal: () => e(Object(se.i)(ot(t.id))),
					toggleSendReplies: () => e(Object(V.k)(t.id))
				}))(Object(we.c)(dt)),
				lt = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				mt = s.n(lt);
			var pt = a.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return a.a.createElement("div", {
						className: mt.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				ut = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				ht = s.n(ut);
			var bt = a.a.memo(e => a.a.createElement("div", {
					className: ht.a.gradientHighlightContainer,
					role: "presentation"
				})),
				gt = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ct = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				xt = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				ft = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Ot = s("./src/reddit/components/ModModeReports/index.tsx"),
				vt = s("./src/reddit/components/PostTopMeta/index.tsx"),
				yt = s("./src/reddit/components/RichTextJson/index.tsx"),
				Et = s("./src/reddit/components/UserIcon/index.tsx"),
				Pt = s("./src/reddit/components/UserIcon/constants.ts"),
				kt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				jt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				It = s("./src/reddit/constants/componentTestIds.ts"),
				wt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_t = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				St = s("./node_modules/raf/index.js"),
				Lt = s.n(St);

			function Tt() {
				return (Tt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Nt = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				Mt = a.a.createContext(!1);
			class At extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || Lt()(this.setVisible)
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
						...Nt,
						...t
					};
					return a.a.createElement(_t.a, Tt({}, o, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(Mt.Provider, {
						value: s
					}, e)))
				}
			}
			var Rt = s("./src/reddit/controls/ErrorText/index.tsx"),
				Ft = s("./src/reddit/controls/InternalLink/index.tsx"),
				Bt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Dt = s("./src/reddit/helpers/flair.ts"),
				Ut = s("./src/reddit/models/Subreddit/index.ts"),
				Vt = s("./src/reddit/models/User/index.ts"),
				Wt = s("./src/reddit/models/Vote/index.ts"),
				Ht = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				Kt = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				qt = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				Gt = s("./src/reddit/selectors/poll/index.ts"),
				Yt = s("./src/reddit/selectors/userPrefs.ts"),
				Qt = s("./src/reddit/selectors/moderatingComments.ts"),
				zt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Jt = s.n(zt),
				Xt = s("./src/config.ts"),
				Zt = s("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				$t = s("./src/reddit/helpers/userSnoovatar/index.ts");

			function es() {
				return (es = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ts = p.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return a.a.createElement("button", Q({}, s, {
						className: Object(l.a)(t, Y.a.expandButton)
					}), a.a.createElement(q, {
						className: Y.a.expandIcon
					}))
				}), "ExpandButton", Jt.a),
				ss = p.a.wrapped(ct, "FlatList", Jt.a),
				os = p.a.wrapped(Rt.b, "ErrorText", Jt.a),
				ns = p.a.wrapped(xt.a, "HorizontalVotes", Jt.a),
				rs = p.a.div("ActionBar", Jt.a),
				is = p.a.wrapped(gt.a, "TopMeta", Jt.a),
				as = p.a.div("CommentContentWrapper", Jt.a),
				ds = p.a.div("CommentWrapper", Jt.a),
				cs = p.a.div("CommentBody", Jt.a),
				ls = p.a.wrapped(ft.b, "AuthorHovercard", Jt.a),
				ms = Object(wt.u)(),
				ps = Object(d.b)(() => Object(c.c)({
					comment: (e, t) => Object(T.b)(e, t),
					currentProfileModPermissions: wt.h,
					depth: (e, t) => Object(L.j)(e, t),
					collapsed: Qt.b,
					collapsedBecauseCrowdControl: Qt.a,
					currentUser: R.k,
					flair: L.e,
					focused: L.t,
					highlightAnimationDisabled: Yt.c,
					isEditing: L.z,
					isLoggedIn: R.K,
					isPendingDeletion: L.B,
					isPresenceConsumptionExpEnabled: Kt.c,
					moderatorPermissions: (e, t) => {
						const s = Object(T.b)(e, t);
						return s ? Object(M.m)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: Gt.f,
					modModeEnabled: wt.S,
					errorMsgs: L.F,
					replyFormOpen: L.I,
					subreddit: wt.r,
					subredditType: L.K,
					allowNFTs: Zt.a,
					hasSupporterRing: qt.a,
					isOnlineConsumptionLoadTest: Kt.a,
					userIsBanned: (e, t) => {
						const s = Object(T.b)(e, t);
						return !!s && Object(pe.bb)(e, {
							subredditId: s.subredditId
						})
					}
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
					onIgnoreReports: () => e(Object(W.g)(t)),
					onVoteClick: s => {
						const [o, r] = s === Wt.a.upvoted ? [Object(h.q)(t), "upvote_comment"] : [Object(h.j)(t), "downvote_comment"];
						n(r, t)(), e(o)
					}
				})),
				us = Object(U.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				hs = e => a.a.createElement("div", e, e.children),
				bs = e => a.a.createElement(a.a.Fragment, null, e.children),
				gs = ms(ps(e => {
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
						isAvatarsInCommentsEnabled: O,
						isEditing: v,
						isFirstInList: y,
						isHighlighted: E,
						isLoggedIn: k,
						isPendingDeletion: j,
						isPresenceConsumptionExpEnabled: I,
						moderatorPermissions: w,
						modModeEnabled: _,
						onCollapseClick: S,
						onIgnoreReports: L,
						onLineMouseOver: T,
						onVoteClick: N,
						prediction: M,
						postId: A,
						replyFormOpen: R,
						subreddit: U,
						trackCommentClick: W,
						triggerCelebratoryMoment: K,
						renderedInOverlay: q,
						subredditType: G,
						onPresenceIndicatorInViewport: Y,
						allowNFTs: Q,
						hasSupporterRing: z,
						isOnlineConsumptionLoadTest: J,
						userIsBanned: X
					} = e, Z = o.isDeleted, $ = !v && !Z && !!u && u.length > 0, ee = Object(D.a)(B.c.edit, o.id), te = Object(D.a)(B.c.replyToComment, o.id), se = Object(re.a)(w), oe = o.authorIsContractor && G === Ut.f.EmployeesOnly, ne = o.isLocked, ie = se && _, de = !v && !Z && (k || O), ce = !!m && Object(Vt.e)(m) === o.author, [le, me] = Object(i.useState)(null), [pe, ue] = Object(i.useState)(null), he = Object(ae.f)(o) || Object(ae.g)(o) ? hs : Ft.a, be = Object(ae.f)(o) ? bs : ls;
					Object(i.useEffect)(() => {
						if (!v && !Z && (g && me(a.a.createElement(bt, null)), null !== x)) {
							if (x.glowHexColor) {
								const e = x.glowHexColor;
								me(a.a.createElement(pt, {
									hexColor: e
								}))
							}
							if (x.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = x.effectHighlight;
								ue(a.a.createElement(P, {
									prefersReducedAnimation: C,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [v, Z, g, C, x]);
					const ge = Object(i.useContext)(Mt),
						Ce = !Z && !Object(ae.f)(o) && (!X || X && ce) && !Object(ae.g)(o) && k,
						xe = Object(i.useCallback)(() => {
							Ce && I && !ce && Y && Y(o.id)
						}, [o.id, Y, Ce, I, ce]),
						fe = Object(jt.a)(o),
						Oe = !!Q && Object($t.b)(o.profileImage);
					return a.a.createElement(ds, {
						className: Object(l.a)(`Comment ${o.id}`, Jt.a.CommentWrapper, {
							[Jt.a.highlightComment]: E,
							[Jt.a.deleted]: Z,
							[Jt.a.focused]: b,
							[Jt.a.redesign]: O,
							[Jt.a.topLevel]: !p
						})
					}, le, pe, !v && !Z && y && a.a.createElement("div", {
						className: Jt.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt="" src="${Xt.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstCommentVisible || function(){})();" />\n              `
						}
					}), a.a.createElement(ts, {
						className: Object(l.a)(o.id, {
							[Jt.a.hidden]: !r,
							[Jt.a.visible]: r
						}),
						onClick: () => {
							s(), S(), W("collapse", o.id)()
						},
						onMouseOver: () => T(o.id),
						onMouseOut: s
					}), a.a.createElement(be, {
						alwaysShowChildren: !0,
						hoverDivClassName: Jt.a.AuthorHoverDiv,
						postOrComment: o,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: q ? vt.c.Lightbox : void 0,
						collapsed: r,
						isCommentAuthorBlocked: Object(ae.g)(o)
					}, a.a.createElement(he, {
						className: Jt.a.UserIconContainer,
						to: `/user/${o.author}/`
					}, ge ? a.a.createElement(a.a.Fragment, null, z && a.a.createElement("div", {
						className: Jt.a.supporterRing
					}), a.a.createElement(Et.a, {
						isNft: Oe,
						className: Object(l.a)(Jt.a.UserIcon, {
							[Jt.a.UserIconNft]: Oe
						}),
						iconUrl: o.profileImage,
						isNSFW: o.profileOver18 || !1,
						nsfwIconUrl: Pt.a,
						userName: o.author,
						isHighlighted: E,
						shouldShowPresenceIndicator: Ce && I,
						onPresenceIndicatorInViewport: xe,
						isCommentAuthorBlocked: Object(ae.g)(o),
						collapsed: r,
						isOnlineStatusLoadTest: Ce && J,
						authorId: o.authorId
					})) : a.a.createElement("div", {
						className: Jt.a.UserIcon
					}))), a.a.createElement(as, {
						className: Object(l.a)({
							[Jt.a.isActive]: f,
							[Jt.a.isCollapsed]: r,
							[Jt.a.isLocked]: ne && ie,
							[Jt.a.isPendingDeletion]: j,
							[Jt.a.isRemoved]: !!o.bannedBy && ie
						})
					}, a.a.createElement(Bt.a, null, F.fbt._("level {depth}", [F.fbt._param("depth", p + 1)], {
						hk: "2XnyAV"
					})), a.a.createElement(is, {
						userHasNft: Oe,
						childrenInfo: t,
						className: Object(l.a)({
							[Jt.a.collapsed]: r,
							[Jt.a.noFlair]: Object(Dt.o)(h || null)
						}),
						collapsed: r,
						collapsedBecauseCrowdControl: d,
						comment: o,
						commentsPageKey: n,
						flair: h,
						isPostComment: !0,
						renderedInOverlay: q,
						renderContractorBadge: oe
					}), !r && a.a.createElement(i.Fragment, null, v && a.a.createElement(H.a, {
						className: Object(l.a)(Jt.a.EditCommentForm, Jt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: n,
						depth: p,
						draftType: B.c.edit,
						draftKey: ee,
						postId: A,
						rtJson: Object(jt.a)(o),
						mediaMetadata: o.media && o.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: o.id,
						submitAction: e => Object(V.i)({
							id: o.id,
							commentsPageKey: n,
							depth: p,
							draftKey: ee,
							formData: e
						}),
						submitButtonText: F.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !v && !Z && a.a.createElement(cs, {
						"data-test-id": It.d
					}, M ? a.a.createElement(Ct.a, {
						comment: o,
						prediction: M
					}) : a.a.createElement(yt.a, {
						content: fe,
						mediaMetadata: o.media && o.media.mediaMetadata,
						rtJsonElementProps: us(e)
					}), a.a.createElement(Ht.b, {
						content: fe
					})), _ && se && Object(Ee.c)(o) && a.a.createElement(Ot.a, {
						onIgnoreReports: L,
						reportable: o
					}), de && a.a.createElement(rs, null, O && a.a.createElement(ns, {
						downvoteButtonClassName: Jt.a.voteButton,
						downvoteClassName: Jt.a.upDownVote,
						model: o,
						onVoteClick: N,
						scoreClassName: Jt.a.score,
						upvoteButtonClassName: Jt.a.voteButton,
						upvoteClassName: Jt.a.upDownVote,
						triggerCelebratoryMoment: K
					}), a.a.createElement(ss, {
						comment: o,
						commentsPageKey: n,
						depth: p,
						isAvatarsInCommentsEnabled: O,
						collapsedBecauseCrowdControl: d,
						modModeEnabled: _,
						moderatorPermissions: c || w,
						renderedInOverlay: q,
						isCommentFocused: b,
						subreddit: U,
						trackCommentClick: W
					})), $ && u.map(e => a.a.createElement(os, {
						key: e
					}, e)), R && a.a.createElement(H.a, {
						className: Object(l.a)(Jt.a.EditCommentForm, Jt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: n,
						depth: p,
						draftType: B.c.replyToComment,
						draftKey: te,
						isTopLevelComment: !1,
						parentCommentId: o.id,
						postId: A,
						submitAction: ({
							validate: e,
							...t
						}, s) => e ? Object(V.s)({
							commentsPageKey: n,
							draftKey: te,
							parentCommentDepth: p,
							parentCommentId: o.id,
							formData: t,
							editorMode: s
						}) : Object(V.l)({
							commentsPageKey: n,
							draftKey: te,
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
			var Cs = e => a.a.createElement(kt.a.Consumer, null, t => a.a.createElement(gs, es({}, e, {
					trackCommentClick: t
				}))),
				xs = s("./src/lib/domUtils/index.ts"),
				fs = s("./src/lib/fastdom/index.ts"),
				Os = s("./src/reddit/constants/elementIds.ts");
			const vs = () => {
				fs.a.write(() => {
					const e = document.getElementById(Os.d);
					e ? Object(xs.c)(e, 0) : Object(xs.c)(document, 0)
				})
			};
			var ys = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				Es = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Ps = s("./src/reddit/helpers/path/index.ts"),
				ks = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				js = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				Is = s.n(js);
			const {
				fbt: ws
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _s = p.a.div("Wrapper", Is.a), Ss = p.a.wrapped(ks.a, "ArrowRight", Is.a), Ls = p.a.wrapped(ys.a, "LinkOrOverlayLink", Is.a), Ts = p.a.span("HoverSpan", Is.a), Ns = Object(c.c)({
				permalink: (e, t) => Object(L.m)(e, {
					commentId: Object(L.r)(e, t).parentId
				})
			});
			var Ms = Object(d.b)(Ns)(Object(Es.b)(({
					isActive: e,
					isOverlay: t,
					permalink: s
				}) => a.a.createElement(_s, {
					className: Object(l.a)({
						[Is.a.isActive]: e
					})
				}, a.a.createElement(Ls, {
					isOverlay: !!t,
					to: Object(Ps.b)(s),
					onClick: vs
				}, a.a.createElement(Ts, null, ws._("Continue this thread", null, {
					hk: "3eplK8"
				})), " ", a.a.createElement(Ss, null))))),
				As = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				Rs = s.n(As);
			const {
				fbt: Fs
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Bs = p.a.div("MoreCommentsItemWrapper", Rs.a), Ds = p.a.p("MoreComments", Rs.a), Us = p.a.wrapped(Ds, "MoreCommentsInteractive", Rs.a), Vs = Object(c.c)({
				moreCommentsItem: L.C,
				moreCommentsPending: L.D
			});
			var Ws = Object(d.b)(Vs, (e, t) => ({
					moreCommentsClicked: () => e(Object(h.l)(t.commentsPageKey, t.moreCommentsId))
				}))(({
					isActive: e,
					moreCommentsClicked: t,
					moreCommentsItem: s,
					moreCommentsPending: o
				}) => a.a.createElement(Bs, null, o ? a.a.createElement(Ds, null, Fs._("loading...", null, {
					hk: "47z89"
				})) : a.a.createElement(kt.a.Consumer, null, o => a.a.createElement(Us, {
					className: Object(l.a)({
						[Rs.a.isActive]: e
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
				qs = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				Gs = s.n(qs);
			const Ys = p.a.wrapped(e => a.a.createElement("div", e, a.a.createElement("i", {
					className: C.m
				})), "Line", Gs.a),
				Qs = p.a.div("LineContainer", Gs.a),
				zs = p.a.div("ShortLineContainer", Gs.a);
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
					return a.a.createElement(Qs, null, Ks()(s + 1, e => e === s ? m !== b.a.Comment || t ? null : a.a.createElement(zs, {
						key: c[e]
					}, a.a.createElement(Ys, {
						className: Object(l.a)(c[e], {
							[Gs.a.hasGlowBorder]: !!o,
							[Gs.a.topLevel]: 0 === s
						}),
						onClick: d,
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})) : a.a.createElement(Ys, {
						className: c[e],
						key: c[e],
						onClick: n(e),
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})))
				},
				Xs = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Zs = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				$s = s.n(Zs);
			const eo = p.a.div("CommentListNodeWrapper", $s.a),
				to = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(C.f)
				},
				so = () => {
					const e = document.querySelectorAll(`.${C.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(C.f)
				};
			var oo = Object(d.b)(() => Object(c.c)({
				collapsed: (e, {
					commentLink: t,
					commentsPageKey: s
				}) => Object(Qt.b)(e, {
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
				isAvatarsInCommentsEnabled: Xs.a,
				isAwarded: (e, {
					commentLink: t
				}) => {
					const s = Object(L.l)(e, {
						commentLink: t
					});
					return !(t.type !== b.a.Comment || !s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(N.a)(e, t);
						return s && s.coinPrice >= x.h
					})
				},
				isHighlighted: (e, {
					commentLink: t
				}) => {
					const s = Object(L.p)(e);
					if (s === S.a.None) return !1;
					if (t.type !== b.a.Comment) return !1;
					const o = t.id,
						n = Object(T.b)(e, {
							commentId: o
						});
					if (!n) return !1;
					const r = Object(R.s)(e),
						i = !!Object(M.l)(e, {
							postId: n.postId
						}),
						a = Object(A.H)(e, {
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
					onShortLineClick: O,
					parentNodeIds: v,
					postId: y,
					renderedInOverlay: E,
					scrollToAndRemeasure: P,
					triggerCelebratoryMoment: k
				} = e, j = !!p, I = !(!d || !d.glowHexColor), w = I && i > 0, _ = I, S = a.a.createElement(eo, {
					className: Object(l.a)(s, {
						[$s.a.isHidden]: h,
						[$s.a.glowBorderTopPadding]: w,
						[$s.a.glowBorderBottomPadding]: _
					}),
					id: n.id,
					style: {
						paddingLeft: i * (g.w + g.v) + (n.type === b.a.Comment ? g.w : 0)
					},
					tabIndex: -1
				}, a.a.createElement(Js, {
					collapsed: o,
					depth: i,
					hasGlowBorder: w,
					onLineClick: x,
					onLineMouseOver: to,
					onLineMouseOut: so,
					onShortLineClick: O,
					type: n.type,
					parentNodeIds: v
				}), no({
					childrenInfo: t,
					clearHovered: so,
					commentLink: n,
					commentsPageKey: r,
					onLineMouseOver: to,
					hasAwardGradient: j,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isFirstInList: u,
					isHighlighted: C,
					postId: y,
					renderedInOverlay: E,
					scrollToAndRemeasure: P,
					onPresenceIndicatorInViewport: f,
					triggerCelebratoryMoment: k
				}));
				return m && n.type === b.a.Comment ? a.a.createElement(At, null, S) : S
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
				postId: p,
				renderedInOverlay: u,
				scrollToAndRemeasure: h,
				onPresenceIndicatorInViewport: g,
				triggerCelebratoryMoment: C
			}) => {
				switch (s.type) {
					case b.a.Comment:
						return a.a.createElement(Cs, {
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
						return a.a.createElement(Ws, {
							commentsPageKey: o,
							isActive: i,
							moreCommentsId: s.id
						});
					case b.a.ContinueThread:
						return a.a.createElement(Ms, {
							id: s.id,
							isActive: i
						})
				}
			};
			var ro = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				io = s("./src/reddit/components/Comments/States/index.tsx"),
				ao = s("./src/reddit/components/Scroller/Simple.tsx"),
				co = s("./src/reddit/featureFlags/index.ts"),
				lo = s("./src/reddit/helpers/commentList/index.ts"),
				mo = s("./src/reddit/helpers/trackers/comment.ts"),
				po = s("./src/telemetry/index.ts"),
				uo = s("./src/lib/LRUCache/index.ts"),
				ho = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				bo = s("./src/reddit/components/Comments/index.m.less"),
				go = s.n(bo);
			const Co = g.f + 10,
				xo = 65,
				fo = p.a.wrapped(ao.b, "Scroller", go.a),
				Oo = Object(c.c)({
					allCollapsed: L.a,
					commentLinks: L.k,
					commentThreadLinkSet: L.o,
					measureScrollFPS: co.d.measureScrollFPS,
					moreComments: L.b,
					postPermalink: A.G
				}),
				vo = Object(d.b)(Oo, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(u.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(h.e)(t)),
					onCommentLeftViewport: (t, s) => e(Object(h.h)(t, s))
				})),
				yo = new uo.a(500),
				Eo = new uo.a(500),
				Po = (e, t) => {
					const s = `entered-${e}`;
					let o = yo.get(s);
					return void 0 === o && (o = () => {
						t(e)
					}, yo.set(s, o)), o
				},
				ko = (e, t) => {
					const s = `left-${e}`;
					let o = Eo.get(s);
					return void 0 === o && (o = s => {
						t(e, s)
					}, Eo.set(s, o)), o
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
						}), this.props.sendEvent(Object(mo.b)(e)))
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
					this.timerId && po.c.cancel(this.timerId), e.length && (this.timerId = po.c.start()), this.findHiddenNodes(e, t, s, o)
				}
				componentDidMount() {
					this.timerId && Object(po.b)(m.m.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: po.c.end(this.timerId)
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
					this.timerId && po.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = po.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(po.b)(m.m.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: po.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && po.c.cancel(this.timerId)
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
						n && (s[c.id].depth > r ? (ro.a(c.id), i += Object(lo.d)(c, o), c.type === b.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[n] = {
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
					} = this.props, c = Po(e.id, o), l = ko(e.id, n);
					return {
						estHeight: ro.b(e.id) ? 0 : xo,
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
						}) : a.a.createElement(oo, {
							childrenInfo: this.getChildrenInfo(e.id),
							commentLink: e,
							commentsPageKey: s,
							id: e.id,
							isFirstInList: 0 === t,
							isHidden: ro.b(e.id),
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
						onAllCommentsRendered: n,
						renderedInOverlay: r,
						showSignupUpsell: i
					} = this.props;
					let d;
					if (o) {
						d = `comments-${r?"lightbox":"page"}`
					}
					const c = t.map((e, t) => this.getScrollChild(e, t));
					return a.a.createElement(fo, {
						className: Object(l.a)(go.a.Scroller, e),
						disableScrollCache: r,
						key: s,
						getContainer: () => r ? document.getElementById(Os.d) : null,
						onScroll: i,
						onAllChildrenRendered: n,
						preventScrollOnMount: !0,
						scrollToChildPadding: Co,
						trackingName: d
					}, c)
				}
				renderEmptyState() {
					return this.props.commentId ? a.a.createElement(io.g, {
						link: this.props.postPermalink
					}) : a.a.createElement(io.c, null)
				}
			}
			t.a = vo(Object(we.c)(Object(ho.a)(jo)))
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
				O = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				v = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				y = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				E = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				P = s("./src/reddit/featureFlags/component.tsx"),
				k = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				j = s("./src/reddit/models/Post/index.ts"),
				I = s("./src/reddit/selectors/experiments/postSeo.ts"),
				w = s("./src/reddit/selectors/seo/reredditPromo.ts"),
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
					isLoggedIn: S.K,
					postSEOV2IdCardVariant: I.h,
					shouldShowReredditPromo: w.a,
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
					return a.a.createElement(O.a, {
						adComponentOnFakeOverlay: r,
						adComponent: d ? a.a.createElement(x.a, {
							postId: n.id,
							isOverlay: s,
							listingName: o,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: k.a.BOTTOM,
							refreshKey: n.id,
							sizes: m.o,
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
						O = a.a.createElement(x.a, {
							postId: n.id,
							isOverlay: o,
							listingName: c,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: h++,
							position: k.a.FIRST,
							refreshKey: n.id,
							sizes: m.h,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(T.a.outerWrapper, e)
					}, Object(j.p)(n) ? a.a.createElement(A, {
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
					}), O, s && p.map((e, t) => a.a.createElement(f.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(E.a, {
						subredditName: c,
						widget: e
					}))), n.isSponsored && a.a.createElement(f.a, null, a.a.createElement(v.a, null)), i && a.a.createElement(y.a, {
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
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				m = s.n(l);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = "500px";
			class h extends n.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: o,
						innerRef: i,
						shouldTruncateComments: l,
						numberOfComments: h,
						onClick: b
					} = this.props, g = l && !e, C = l ? m.a.TruncatedComments : "";
					return n.a.createElement("div", {
						onClick: b,
						ref: i
					}, n.a.createElement("div", {
						className: Object(r.a)(m.a.ContentWrapper, s, C),
						style: {
							"--commentswrapper-gradient-color": Object(c.a)(this.props).body,
							maxHeight: l ? u : "unset"
						}
					}, t), g && n.a.createElement(d.k, {
						className: m.a.MoreCommentsButton,
						onClick: o,
						"data-redditstyle": !0
					}, p._("View Entire Discussion ({number of comments} Comments)", [p._param("number of comments", Object(a.b)(h))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(i.a)(h)
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
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
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
					subreddit: p.w,
					subredditAboutInfo: p.t
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
				isCommentsPage: O,
				onFollowPostClick: v
			}) => {
				return Object(p.a)() ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(i.a)(b.a.thumbnailContainer, {
						[b.a.mShowingButtonOrOverflow]: x || h
					})
				}, n.a.createElement("div", {
					className: b.a.thumbnailContainerRow
				}, x && n.a.createElement(a.a, {
					isFilled: !!f,
					onClick: v,
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
					isCommentsPage: O,
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
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR"
			}
		},
		"./src/reddit/components/NewCommentPill/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const i = Object(o.a)({
					resolved: {},
					chunkName: () => "NewCommentPill",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("NewCommentPill").then(s.bind(null, "./src/reddit/components/NewCommentPill/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/NewCommentPill/index.tsx"
					}
				}),
				a = e => r.a.createElement(i, e)
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
				O = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = s("./src/reddit/helpers/path/index.ts"),
				y = s("./src/reddit/helpers/trackers/lightbox.ts"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				P = s("./src/reddit/actions/tooltip.ts"),
				k = s("./node_modules/lodash/find.js"),
				j = s.n(k),
				I = s("./node_modules/react-motion/lib/react-motion.js");
			const w = {
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
							opacity: Object(I.spring)(1, w)
						}
					}] : [{
						key: "expando_content",
						style: {
							opacity: .1
						}
					}] : o < .1 ? [] : [{
						key: "expando_content",
						style: {
							opacity: Object(I.spring)(0, w)
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
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				U = s("./src/reddit/selectors/postCreations.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/showPromotedCTA.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				K = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				q = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				G = s("./src/reddit/components/AwardBadges/index.tsx"),
				Y = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Q = s("./src/reddit/components/Econ/Audio/async.ts"),
				z = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				J = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				X = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				Z = s("./src/reddit/components/ExpandoButton/index.tsx"),
				$ = s("./src/reddit/components/FlairWrapper/index.tsx"),
				ee = s("./src/reddit/components/Flatlist/index.tsx"),
				te = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				se = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				oe = s("./src/reddit/components/ModModeReports/index.tsx"),
				ne = s("./src/reddit/components/ModModeReports/helpers.ts"),
				re = s("./src/reddit/components/NotificationButton/index.tsx"),
				ie = s("./src/reddit/components/PostContainer/index.tsx"),
				ae = s("./src/higherOrderComponents/makeAsync.tsx"),
				de = s("./src/lib/loadWithRetries/index.ts"),
				ce = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const le = Object(ae.a)({
				ErrorComponent: () => i.a.createElement(ce.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(de.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(ce.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var me = e => i.a.createElement(le, e),
				pe = s("./src/reddit/components/PostList/index.tsx"),
				ue = s("./src/reddit/components/PostMedia/index.tsx"),
				he = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				be = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ge = s("./src/reddit/components/PostTitle/index.tsx"),
				Ce = s("./src/reddit/components/PostTopLine/index.tsx"),
				xe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				fe = s("./src/reddit/components/ReadingIndicator/async.tsx"),
				Oe = s("./src/reddit/components/SourceLink/index.tsx"),
				ve = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ye = s("./src/reddit/constants/componentTestIds.ts"),
				Ee = s("./src/reddit/constants/postLayout.ts"),
				Pe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ke = s("./src/reddit/helpers/postEvent.ts"),
				je = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Ie = s("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				we = s("./src/reddit/selectors/postFlair.ts"),
				_e = s("./src/reddit/models/Audio/index.ts"),
				Se = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				Le = s("./src/reddit/selectors/experiments/econ/index.ts"),
				Te = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Ne = s("./src/reddit/constants/experiments.ts"),
				Me = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Ae = s("./src/reddit/selectors/experiments/presence.ts");
			const Re = e => {
					return Object(Me.c)(e, {
						experimentEligibilitySelector: Me.a,
						experimentName: Ne.Le
					}) === Ne.Cc
				},
				Fe = e => {
					if (Object(Ae.a)(e)) return !1;
					return Object(Me.c)(e, {
						experimentEligibilitySelector: Me.a,
						experimentName: Ne.Ke
					}) === Ne.Cc
				},
				Be = e => {
					if (Object(Ae.a)(e)) return !1;
					return Object(Me.c)(e, {
						experimentEligibilitySelector: Me.a,
						experimentName: Ne.Je
					}) === Ne.Cc
				};
			var De = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ue = s("./src/reddit/constants/colors.ts"),
				Ve = s("./src/reddit/icons/fonts/index.tsx"),
				We = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				He = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Ke = s.n(He);
			const qe = i.a.createElement(Ve.a, {
				className: Ke.a.BlockIcon,
				name: "block"
			});
			var Ge = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return i.a.createElement(We.a, {
						className: Ke.a.bannerBase,
						color: Ue.b.dayModeActionIcon,
						icon: qe,
						title: De.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && i.a.createElement("button", {
							className: Ke.a.expandButton,
							onClick: t
						}, De.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: Ke.a.blockedAuthorTextWrapper
					})
				},
				Ye = s("./src/config.ts"),
				Qe = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				ze = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				Je = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Xe = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				Ze = s.n(Xe);
			const {
				fbt: $e
			} = s("./node_modules/fbt/lib/FbtPublic.js"), et = () => $e._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [$e._param("=User Agreement", i.a.createElement("a", {
				className: Ze.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, $e._("User Agreement", null, {
				hk: "3MHgRl"
			}))), $e._param("=Content Policy", i.a.createElement("a", {
				className: Ze.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, $e._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), tt = () => $e._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [$e._param("=User Agreement", i.a.createElement("a", {
				className: Ze.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, $e._("User Agreement", null, {
				hk: "yMHtU"
			}))), $e._param("=Content Policy", i.a.createElement("a", {
				className: Ze.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, $e._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var st = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: o,
					subredditName: n
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return $e._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case N.g.Author:
							return $e._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case N.g.AuthorDeleted:
							return $e._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case N.g.AutomodFiltered:
							return $e._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case N.g.CommunityOps:
							return $e._("This post was removed by Reddit admin, u/{username}.", [$e._param("username", t)], {
								hk: "34nHWu"
							});
						case N.g.ContentTakedown:
							return $e._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case N.g.CopyrightTakedown:
							return $e._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case N.g.Moderator:
							return $e._("This post was removed by r/{subredditName} moderator, u/{username}.", [$e._param("subredditName", s), $e._param("username", t)], {
								hk: "270bcn"
							});
						case N.g.Reddit:
							return $e._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return $e._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(o, s, n) : ((e, t) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return $e._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case N.g.Author:
							return $e._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case N.g.AuthorDeleted:
							return $e._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case N.g.AutomodFiltered:
							return $e._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case N.g.CommunityOps:
							return $e._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case N.g.ContentTakedown:
							return $e._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case N.g.CopyrightTakedown:
							return $e._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case N.g.Moderator:
							return $e._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [$e._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case N.g.Reddit:
							return $e._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return $e._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(o, n), a = t ? (e => {
					switch (e) {
						case N.g.AntiEvilOps:
							return i.a.createElement(et, null);
						case N.g.AuthorDeleted:
						case N.g.Author:
							return $e._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case N.g.AutomodFiltered:
							return $e._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case N.g.CommunityOps:
							return $e._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [$e._param("=just ask", i.a.createElement("a", {
								className: Ze.a.link,
								href: `${Ye.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, $e._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case N.g.ContentTakedown:
							return i.a.createElement(tt, null);
						case N.g.CopyrightTakedown:
							return $e._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case N.g.Moderator:
							return $e._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case N.g.Reddit:
							return $e._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return $e._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(o) : ((e, t) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return i.a.createElement(et, null);
						case N.g.AuthorDeleted:
						case N.g.Author:
							return $e._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case N.g.AutomodFiltered:
							return $e._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [$e._param("=[subreddit name]", i.a.createElement("a", {
								className: Ze.a.link,
								href: `${Ye.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, $e._("{subreddit name}", [$e._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case N.g.CommunityOps:
							return $e._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case N.g.ContentTakedown:
							return i.a.createElement(tt, null);
						case N.g.CopyrightTakedown:
							return $e._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case N.g.Moderator:
							return $e._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case N.g.Reddit:
						default:
							return $e._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(o, n), d = t ? Ue.b.warning : Ue.b.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case N.g.AntiEvilOps:
						case N.g.AutomodFiltered:
						case N.g.CommunityOps:
						case N.g.ContentTakedown:
						case N.g.CopyrightTakedown:
						case N.g.Reddit:
							t = Qe.a;
							break;
						case N.g.AuthorDeleted:
						case N.g.Author:
							t = Je.b;
							break;
						case N.g.Moderator:
							t = ze.a;
							break;
						default:
							t = Qe.a
					}
					return i.a.createElement(t, {
						className: Ze.a.icon
					})
				})(o);
				return i.a.createElement(We.a, {
					className: Ze.a.BannerBase,
					color: d,
					icon: c,
					subtitle: a,
					title: r
				})
			};

			function ot(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: o
				} = e;
				return i.a.createElement(i.a.Fragment, null, o && s.removedByCategory && i.a.createElement(st, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: o.name
				}))
			}
			var nt = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				rt = s("./src/reddit/components/PostContent/index.m.less"),
				it = s.n(rt);
			const {
				fbt: at
			} = s("./node_modules/fbt/lib/FbtPublic.js"), dt = u.a.wrapped(ge.c, "PostTitle", it.a), ct = u.a.wrapped(Z.a, "ExpandoButton", it.a), lt = u.a.wrapped(L, "ClassicExpandoMotion", it.a), mt = u.a.wrapped(ee.c, "FullWidthFlatlist", it.a), pt = i.a.createElement("p", {
				className: it.a.VideoProcessingStatus
			}, at._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), ut = Object(Pe.u)({
				isCommentsPage: Pe.x,
				pageLayer: e => e
			}), ht = Object(a.b)(() => Object(l.c)({
				activeModalId: A.a,
				flairStyleTemplate: Pe.U,
				currentUser: H.k,
				crosspost: V.d,
				hideNSFWPref: H.C,
				imageGalleryCurrentItem: V.i,
				isAdminOrMod: (e, t) => {
					const s = Object(V.U)(e, {
						postId: t.postId
					});
					return !!s && Object(B.c)(e, {
						subredditId: s.id
					})
				},
				isCurrentUserProfilePost: V.l,
				isExpanded: V.m,
				isFollowed: V.t,
				isFollowedExpired: V.o,
				isPostFollowEnabled: Ie.b,
				showPromotedCTA: W.b,
				post: V.H,
				moderatorPermissions: D.l,
				modModeEnabled: Pe.S,
				isInCategoriesExperiment: R.a,
				showAwardsPlaque: F.a,
				showEditFlair: we.a,
				subredditOrProfile: V.U,
				isEditing: U.K,
				userIsOp: H.qb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Te.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Te.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: Be,
				isReadingIndicatorsReadTestEnabled: Fe,
				isReadingIndicatorsWriteTestEnabled: Re
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
			})), bt = e => e.media && e.media.type === T.o.EMBED && e.media.provider === T.v.Imgur && e.media.height > 700, gt = u.a.wrapped(d.a, "ThumbLink", it.a), Ct = ({
				post: e,
				templatePlaceholderImage: t,
				shouldShowFollowButton: s,
				isFollowed: o,
				onFollowPostClick: n
			}) => {
				const r = e.source ? i.a.createElement(Y.a, {
					post: e,
					forceShowNSFW: !0,
					templatePlaceholderImage: t
				}) : i.a.createElement(gt, {
					to: Object(v.b)(e.permalink)
				}, i.a.createElement(Y.a, {
					post: e,
					forceShowNSFW: !0
				}));
				return i.a.createElement("div", {
					className: it.a.classicThumbnail
				}, s && i.a.createElement(re.a, {
					className: it.a.classicNotificationButton,
					isFilled: !!o,
					onClick: n,
					hasTooltip: !0,
					tooltipText: at._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), r)
			}, xt = ({
				post: e,
				isExpanded: t,
				scrollerItemRef: s
			}) => i.a.createElement(lt, {
				content: i.a.createElement(i.a.Fragment, null, i.a.createElement(ue.a, {
					className: it.a.ClassicPostMedia,
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
			t.a = ut(ht(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: o,
					fireAdPixelsOfType: d,
					flairStyleTemplate: l,
					forceOpenInNewTab: u,
					hideNSFWPref: b,
					imageGalleryCurrentItem: v,
					isAdminOrMod: P,
					triggerCelebratoryMoment: k,
					isCommentCountAnimation: j,
					isCommentsPage: I,
					isCountAnimShadowTestEnabled: w,
					isCurrentUserProfilePost: _,
					isEditing: S,
					isExpanded: L,
					isFollowed: M,
					isFollowedExpired: A,
					isOverlay: R,
					isPostFollowEnabled: F,
					isReadingIndicatorsExperimentEnabled: B,
					isReadingIndicatorsReadTestEnabled: D,
					isReadingIndicatorsWriteTestEnabled: U,
					isVoteCountAnimation: V,
					moderatorPermissions: W,
					modModeEnabled: H,
					onFollowPost: Y,
					onFollowPostExpired: Z,
					onIgnoreReports: re,
					onOpenReportsDropdown: ae,
					openPost: de,
					onVoteClick: ce,
					post: le,
					scrollerItemRef: Pe,
					sendEvent: Ie,
					showAwardsPlaque: we,
					showEditFlair: Te,
					showPromotedCTA: Ne,
					subredditOrProfile: Me,
					userIsOp: Ae
				} = e, Re = Object(ve.b)(), [Fe, Be] = Object(r.useState)(le.authorIsBlocked), De = Object(T.I)(le), Ue = Object(a.e)(e => Boolean(le.predictionTournament) && Object(Le.t)(e)), Ve = Object(a.e)(e => Object(je.a)(e)), We = Object(a.e)(e => Object(Le.c)(e)), He = Object(c.a)(le), Ke = B || D || U;
				Object(r.useEffect)(() => {
					F && A && Z()
				}, []);
				const qe = le.isSponsored ? Object(pe.b)(le.id, {
						fireAdPixelsOfType: d,
						openPost: de
					}) : n.a,
					Ye = Object(O.a)(W),
					Qe = Object(x.a)(W),
					ze = Object(f.a)(W),
					Je = Ye || Qe,
					Xe = ((e, t, s) => {
						const [o, n] = e ? [Object(C.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return o || t || n
					})(o, Je, le),
					Ze = !!le.media && (le.media.type === T.o.RTJSON || le.media.type === T.o.TEXT),
					$e = Ae && Ze,
					et = Object(ne.c)(le);
				let tt;
				const st = !(H && Ye),
					rt = Object(he.b)({
						hide: !B && st,
						editPost: !B && st,
						save: st,
						report: !B && st
					}),
					at = le.removedByCategory === N.g.AuthorDeleted,
					lt = o && (o.displayText === le.author || o.username === le.author),
					ut = !at && !bt(le) && (lt || P || !(le.removedByCategory && le.media && (Object(T.L)(le.media) || Object(T.J)(le.media) || Object(T.E)(le.media)))),
					ht = Object(m.t)(le, v),
					{
						source: gt
					} = ht,
					ft = le.removedByCategory === N.g.Reddit && Object(h.e)(le.created) > 24,
					Ot = le.removedByCategory && le.removedByCategory !== N.g.Reddit || ft,
					vt = F && !Ot && !le.isArchived,
					yt = Object(r.useCallback)(() => {
						Y(M ? N.f.UNFOLLOWED : N.f.FOLLOWED), Re(M ? Object(E.i)(le.id) : Object(E.c)(le.id))
					}, [Y, Re, M, le.id]),
					Et = i.a.createElement(dt, {
						post: le,
						size: ge.b.ExtraLarge,
						showCategoryTag: R,
						isOverlay: R,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					Pt = i.a.createElement(nt.a, {
						post: le,
						showViewCount: Xe
					}),
					kt = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: o
						} = e, n = Object(a.e)(e => Boolean(o.predictionTournament) && Object(Le.t)(e)), r = Object(a.e)(e => Object(_e.a)(o) && Object(Le.c)(e));
						return s ? Ee.g.Classic : n ? Ee.g.Large : r ? Ee.g.Large : t ? Ee.g.Large : o.media && !bt(o) ? Ee.g.Large : Ee.g.Medium
					})(e);
				if (kt === Ee.g.Classic) {
					const t = Object(g.a)(le);
					tt = i.a.createElement("div", {
						"data-test-id": ye.e
					}, i.a.createElement(be.a, {
						model: le,
						handleVote: ce,
						isCountAnimShadowTestEnabled: w,
						isOverlay: R,
						isVoteCountAnimation: V,
						postId: le.id
					}), i.a.createElement("div", {
						className: it.a.mainBody
					}, i.a.createElement("div", {
						className: it.a.content
					}, i.a.createElement(Ce.a, {
						hideAwards: we,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: I,
						isCurrentUserProfilePost: _,
						isOverlay: !!R,
						isTopicPage: !1,
						post: le,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!R && !le.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Me,
						shouldShowFollowButton: vt && !t,
						isFollowed: M,
						onFollowPostClick: yt
					}), Et, i.a.createElement($.a, {
						className: I ? it.a.leftPadding : void 0,
						post: le,
						showCategoryTag: e.isInCategoriesExperiment && I,
						sendEvent: Ie
					}), H && Ye && et && i.a.createElement(oe.a, {
						onIgnoreReports: re,
						reportable: le
					}), i.a.createElement(te.d, null), i.a.createElement("div", {
						className: it.a.FlatlistContainer
					}, Ve && Fe ? i.a.createElement(Ge, {
						onBannerClick: () => Be(!1),
						isExpandable: De
					}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(ct, {
						crosspost: s || void 0,
						isExpanded: !!L,
						post: le,
						useMediaIcons: !1
					}), xt(e)), we && i.a.createElement(G.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: le,
						tooltipType: R ? xe.c.Lightbox : void 0
					}), i.a.createElement(mt, {
						currentUser: o,
						hasModFlairPerms: Qe,
						hasModFullPerms: ze,
						hasModPostPerms: Ye,
						isOverlay: R,
						onIgnoreReports: re,
						onOpenReportsDropdown: ae,
						modModeEnabled: H,
						post: le,
						showUpvotePercent: !0,
						showViewCount: Xe,
						useFlatlistBreakpoints: rt,
						isCommentCountAnimation: j,
						isCountAnimShadowTestEnabled: w
					}))), t && i.a.createElement(Ct, {
						post: le,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: vt,
						isFollowed: M,
						onFollowPostClick: yt
					})))
				} else if (kt === Ee.g.Medium) {
					const t = Object(g.a)(le);
					tt = i.a.createElement("div", {
						"data-test-id": ye.e
					}, i.a.createElement(be.a, {
						model: le,
						handleVote: ce,
						isCountAnimShadowTestEnabled: w,
						isOverlay: R,
						isReadingIndicatorsExperimentEnabled: B,
						isVoteCountAnimation: V,
						postId: le.id
					}), i.a.createElement("div", {
						className: it.a.mainBody
					}, i.a.createElement("div", {
						className: it.a.content
					}, i.a.createElement(Ce.a, {
						hideAwards: we,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: I,
						isCurrentUserProfilePost: _,
						isOverlay: !!R,
						isTopicPage: !1,
						post: le,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!R && !le.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Me,
						shouldShowFollowButton: vt && !t,
						isFollowed: M,
						onFollowPostClick: yt
					}), Et, Ve && Fe ? i.a.createElement(Ge, {
						onBannerClick: () => Be(!1),
						isExpandable: De
					}) : le.source && i.a.createElement(Oe.a, {
						post: le,
						isCommentsPage: I
					}), Object(T.N)(le) && pt, i.a.createElement($.a, {
						className: I ? it.a.leftPadding : void 0,
						post: le,
						showCategoryTag: e.isInCategoriesExperiment && I,
						sendEvent: Ie
					}), Me && Ot && i.a.createElement(ot, {
						isAdminOrMod: P,
						post: le,
						subredditOrProfile: Me
					}), H && Ye && et && i.a.createElement(oe.a, {
						onIgnoreReports: re,
						reportable: le
					})), t && !He && i.a.createElement(se.a, {
						post: le,
						forceShowNSFW: !0,
						hasModPostPerms: Je,
						isCommentsPage: I,
						isOverlay: !0,
						modModeEnabled: H,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: Me,
						shouldShowFollowButton: vt,
						isFollowed: M,
						onFollowPostClick: yt
					})), i.a.createElement(te.d, null), we && i.a.createElement(G.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: le,
						tooltipType: R ? xe.c.Lightbox : void 0
					}), i.a.createElement("div", {
						className: it.a.controlsContainer
					}, i.a.createElement(ee.c, {
						currentUser: o,
						hasModFlairPerms: Qe,
						hasModFullPerms: ze,
						hasModPostPerms: Ye,
						isOverlay: R,
						modModeEnabled: H,
						onIgnoreReports: re,
						onOpenReportsDropdown: ae,
						post: le,
						showEditPost: $e,
						showEditFlair: Te,
						tooltipType: R ? xe.c.Lightbox : void 0,
						useFlatlistBreakpoints: rt,
						isCommentCountAnimation: j,
						isCountAnimShadowTestEnabled: w,
						shouldHideItems: B
					}), Ke && i.a.createElement(fe.a, {
						isReadingIndicatorsExperiment: B,
						isReadLoadTest: D,
						isWriteLoadTest: U,
						postId: le.id
					}), !B && Pt))
				} else kt === Ee.g.Large && (tt = i.a.createElement("div", {
					"data-test-id": ye.e
				}, i.a.createElement(be.a, {
					model: le,
					handleVote: ce,
					isCountAnimShadowTestEnabled: w,
					isOverlay: R,
					isReadingIndicatorsExperimentEnabled: B,
					isVoteCountAnimation: V,
					triggerCelebratoryMoment: k,
					postId: le.id
				}), Ue && Object(Se.c)(le) && i.a.createElement(i.a.Fragment, null, i.a.createElement(J.a, {
					post: le
				}), i.a.createElement(z.a, {
					post: le
				})), !Ue && i.a.createElement(i.a.Fragment, null, i.a.createElement(Ce.a, {
					forceOpenInNewTab: u,
					hideAwards: we,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: I,
					isCurrentUserProfilePost: _,
					isOverlay: !!R,
					isTopicPage: !1,
					post: le,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!R && !le.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: Me,
					shouldShowFollowButton: vt,
					isFollowed: M,
					onFollowPostClick: yt
				}), Et, ((e, t, s, o) => e.source && !t && (s || o))(le, s, R, I) && i.a.createElement(Oe.a, {
					post: le,
					isCommentsPage: I
				})), i.a.createElement($.a, {
					className: I ? it.a.leftPadding : void 0,
					post: le,
					showCategoryTag: e.isInCategoriesExperiment && I,
					sendEvent: Ie
				}), Me && Ot && i.a.createElement(ot, {
					isAdminOrMod: P,
					post: le,
					subredditOrProfile: Me
				}), S && i.a.createElement(me, {
					post: le
				}), Ve && Fe ? i.a.createElement(Ge, {
					onBannerClick: () => Be(!1),
					isExpandable: De
				}) : ut && !S && i.a.createElement(ue.a, {
					className: Object(p.a)(it.a.LargePostMedia, {
						[it.a.isCommentsPage]: I
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: R,
					isOverlay: R,
					post: le,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !R,
					showCentered: !0,
					showPromotedCTA: Ne,
					scrollerItemRef: Pe
				}), Ne && gt && gt.url && i.a.createElement(K.a, {
					className: it.a.adLinkWrapper
				}, i.a.createElement(q.a, {
					post: le,
					adLinkContent: ht
				})), H && Ye && et && i.a.createElement(oe.a, {
					onIgnoreReports: re,
					reportable: le
				}), We && Object(_e.a)(le) && i.a.createElement(Q.a, {
					post: le
				}), i.a.createElement(te.d, null), we && i.a.createElement(G.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: le,
					tooltipType: R ? xe.c.Lightbox : void 0
				}), i.a.createElement("div", {
					className: it.a.controlsContainer
				}, i.a.createElement(ee.c, {
					currentUser: o,
					forceOpenInNewTab: u,
					hasModFlairPerms: Qe,
					hasModFullPerms: ze,
					hasModPostPerms: Ye,
					isOverlay: R,
					modModeEnabled: H,
					onIgnoreReports: re,
					onOpenReportsDropdown: ae,
					post: le,
					showEditPost: $e,
					showEditFlair: Te,
					tooltipType: R ? xe.c.Lightbox : void 0,
					useFlatlistBreakpoints: rt,
					isCommentCountAnimation: j,
					isCountAnimShadowTestEnabled: w,
					shouldHideItems: B
				}), Ke && i.a.createElement(fe.a, {
					isReadingIndicatorsExperiment: B,
					isReadLoadTest: D,
					isWriteLoadTest: U,
					postId: le.id
				}), !B && Pt)));
				const jt = Object(r.useCallback)((e, t) => Object(E.h)(e, t), []);
				return i.a.createElement(ie.a, {
					className: Object(p.a)(t, it.a.postContainer, {
						[it.a.hasEventMeta]: Object(ke.a)(le)
					}),
					isOverlay: R,
					post: le,
					eventFactory: R ? y.b : jt,
					onClick: qe
				}, i.a.createElement(X.a, {
					post: le
				}), tt)
			}))
		},
		"./src/reddit/components/ReadingIndicator/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const i = Object(o.a)({
					resolved: {},
					chunkName: () => "ReadingIndicator",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReadingIndicator").then(s.bind(null, "./src/reddit/components/ReadingIndicator/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReadingIndicator/index.tsx"
					}
				}),
				a = e => r.a.createElement(i, e)
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
				O = s("./src/reddit/constants/postLayout.ts"),
				v = s("./src/reddit/helpers/postCollection.ts"),
				y = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				E = s("./src/reddit/helpers/trackers/lightbox.ts"),
				P = s("./src/reddit/helpers/trackers/screenview.ts"),
				k = s("./src/reddit/selectors/chatPost.ts"),
				j = s("./src/reddit/selectors/commentsListTruncated.ts"),
				I = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				w = s("./src/reddit/selectors/experiments/listingBelow.ts"),
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
				D = s.n(B);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var V = Object(m.a)(e => {
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
					return n ? (c = M.c[M.b.Popular], d = U._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : d = o ? U._("See more posts like this in {subredditName}", [U._param("subredditName", Object(R.c)(r.displayText))], {
						hk: "pLxW5"
					}) : U._("Continue browsing in {subredditName}", [U._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(A.a, {
						className: Object(N.a)(D.a.footer, t),
						onMouseDown: s,
						to: c,
						style: {
							backgroundColor: i
						}
					}, a.a.createElement("div", {
						className: D.a.background
					}), a.a.createElement("div", {
						className: D.a.layout
					}, d, a.a.createElement(F.a, {
						className: D.a.arrow
					})))
				}),
				W = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				H = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				K = s.n(H);
			const q = Object(c.a)((e, {
					isOverlay: t
				}) => t, j.a, I.b, (e, t, s) => !((!t || s) && e)),
				G = Object(c.a)((e, {
					post: t
				}) => !!t && Object(v.a)(t), (e, {
					awaitAllCommentsRendered: t
				}) => t, T.J, T.K, k.d, q, (e, t, s, o, n, r) => !e && !s && !o && !n && !t && r),
				Y = Object(c.a)((e, {
					post: t
				}) => t, w.c, L.request, L.subreddit, (e, t, s, o) => {
					const n = !!e && void 0 !== e.isEligibleForLinkedPosts;
					let r, i = "";
					if (e && (r = {
							hostPostId: e.id,
							isEligibleForLinkedPosts: !1,
							shouldShowLinkedPosts: !1,
							subreddit: o
						}), t && e && n) {
						const {
							isEligibleForLinkedPosts: n,
							id: a
						} = e;
						i = Object(p.a)(a, Object(w.a)(t) || !n), r = {
							canonicalUrl: s.canonical_url,
							baseUrl: s.base_url,
							hostPostId: a,
							isEligibleForLinkedPosts: n,
							shouldShowLinkedPosts: n && !Object(x.Pe)(t) && !Object(w.a)(t),
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
				Q = Object(c.c)({
					listingBelowLinkedPostsData: Y,
					nsfwListingBelowVariant: _.a,
					shouldShowListingBelow: G,
					shouldShowNsfwListingBelow: S.b
				}),
				z = Object(d.b)(Q, e => ({
					loadMorePosts: t => e(Object(h.r)({
						sort: l.V.HOT,
						subredditName: t
					}))
				}));
			class J extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(C.d) : null, this.onViewed = (e, t) => Object(P.f)({
						key: this.listingKey(),
						sort: l.V.TOP,
						timerType: t,
						timerMillis: e,
						timeSort: l.ec.WEEK
					}), this.onFooterClick = e => {
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
					return s ? t : e && o && o.id ? Object(W.a)(o.id) : Object(u.a)(n.name, l.V.TOP, {
						t: l.ec.WEEK
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
					if (c && !Object(x.Pe)(c) && !Object(w.a)(c) && !i) return a.a.createElement("div", {
						className: K.a.smallBanner
					});
					const {
						name: l
					} = n, m = Object(y.a)(r.newCommunityTheme.canvas);
					let p = null;
					return p = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? o.fbt._("More posts from the {name} community", [o.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(w.b)(c) ? o.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === x.vd.DeRecs ? o.fbt._("Popular Posts Near You", null, {
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
						forcedLayout: O.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: i,
						isTruncated: !0,
						listingBelowVariant: d,
						listingKey: this.listingKey(),
						listingName: f.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: K.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						shouldHideFlair: !0
					}), a.a.createElement(V, {
						className: K.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: c,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: n
					}))
				}
			}
			t.a = z(Object(m.a)(Object(g.c)(J)))
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
				}) && !Object(d.B)(e) && !Object(a.a)(e)
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

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(r.b)(() => Object(i.c)({
					showFPR: C.I,
					showSuspended: C.R,
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
					return n.a.createElement("div", O({
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
			t.a = v(E)
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
				O = s("./node_modules/reselect/es/index.js");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const y = Object(c.b)(() => Object(O.c)({
				primaryPostId: f.p
			}))(e => {
				const t = e.postId || e.primaryPostId;
				return t ? d.a.createElement(u.a, {
					postId: t
				}, d.a.createElement(C.CommentsPage, v({}, e, {
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
					O = c && Object(b.h)(c),
					v = n()([...Object(l.a)(e.location.search)]),
					E = {};
				e.hasSortParam && (E.sort = e.sort, E.hasSortParam = !0);
				const P = Object(m.a)(x, f, O, E);
				return d.a.createElement(y, {
					closeLocation: o,
					collectionId: x,
					commentId: O,
					commentsPageKey: P,
					isOverlay: s,
					location: e.location,
					postId: f,
					instanceId: v.instanceId,
					shouldScrollToComments: r,
					sort: e.sort,
					subredditName: C,
					onOtherDiscussions: !!v.onOtherDiscussions
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
				post: p.G
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
				return vt
			})), s.d(t, "CommentsPage", (function() {
				return wt
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
				O = s("./src/lib/domUtils/index.ts"),
				v = s("./src/lib/fastdom/index.ts"),
				y = s("./src/lib/lessComponent.tsx"),
				E = s("./src/lib/makeCommentsPageKey/index.ts"),
				P = s("./src/lib/makeDraftKey/index.ts"),
				k = s("./src/lib/performanceTimings/index.tsx"),
				j = s("./src/reddit/actions/ads/index.ts"),
				I = s("./src/reddit/actions/comment/index.ts"),
				w = s("./src/reddit/actions/comment/authoring.ts"),
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
				D = s("./src/reddit/constants/elementIds.ts"),
				U = s("./src/reddit/constants/history.ts"),
				V = s("./src/reddit/constants/keycodes.ts"),
				W = s("./src/reddit/constants/posts.ts"),
				H = s("./src/reddit/constants/screenWidths.ts"),
				K = s("./src/reddit/contexts/ApiContext.tsx"),
				q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				G = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Y = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Q = s("./src/reddit/selectors/upvotePrompt.ts"),
				z = s("./src/reddit/featureFlags/profileCollections.ts"),
				J = s("./src/reddit/contexts/Post/index.tsx"),
				X = s("./src/reddit/models/Comment/index.ts"),
				Z = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/reddit/models/Subreddit/index.ts"),
				ee = s("./src/reddit/selectors/chatPost.ts"),
				te = s("./src/reddit/selectors/comments.ts"),
				se = s("./src/reddit/selectors/commentSelector.ts"),
				oe = s("./src/reddit/selectors/commentsListTruncated.ts"),
				ne = s("./src/reddit/selectors/creatorStats.ts"),
				re = s("./src/reddit/selectors/discoveryUnit.ts"),
				ie = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				ae = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				de = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				ce = s("./src/reddit/selectors/experiments/celebratoryMoments.ts"),
				le = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				me = s("./src/reddit/selectors/experiments/postSeo.ts"),
				pe = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				ue = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				he = s("./src/reddit/selectors/isEligibleForCommentTruncation.ts"),
				be = s("./src/reddit/selectors/meta.ts"),
				ge = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Ce = s("./src/reddit/selectors/posts.ts"),
				xe = s("./src/reddit/selectors/subreddit.ts"),
				fe = s("./src/reddit/selectors/tooltip.ts"),
				Oe = s("./src/reddit/selectors/user.ts"),
				ve = s("./src/reddit/actions/celebratoryMoments/index.ts"),
				ye = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				Ee = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Pe = s("./src/reddit/components/CelebratoryMoments/constants.ts"),
				ke = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				je = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Ie = s("./src/reddit/components/Comments/index.tsx"),
				we = s("./src/reddit/components/Comments/States/index.tsx"),
				_e = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Se = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Le = s("./src/reddit/components/CommentSort/index.tsx"),
				Te = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Ne = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Me = s("./src/reddit/components/CreatorStats/loader.tsx"),
				Ae = s("./src/reddit/components/HeaderImage/index.tsx"),
				Re = s("./src/reddit/components/Hovercards/helpers.ts"),
				Fe = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Be = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				De = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Ue = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Ve = s("./src/reddit/components/JumpToContent/index.tsx"),
				We = s("./src/reddit/components/NewCommentPill/async.tsx"),
				He = s("./src/reddit/components/PostContent/index.tsx"),
				Ke = s("./src/reddit/components/PostTopMeta/index.tsx"),
				qe = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				Ge = s("./src/reddit/components/SubredditNav/index.tsx"),
				Ye = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Qe = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				ze = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				Je = s("./src/reddit/helpers/history/index.ts"),
				Xe = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				Ze = s("./src/reddit/helpers/postCollection.ts"),
				$e = s("./src/reddit/helpers/resonatePage/index.ts"),
				et = s("./src/reddit/helpers/trackers/lightbox.ts"),
				tt = s("./src/reddit/helpers/trackers/screenview.ts"),
				st = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				ot = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				nt = s("./src/reddit/layout/page/Listing/index.tsx"),
				rt = s("./src/reddit/models/ContentGate.ts"),
				it = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				at = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				dt = s("./src/config.ts"),
				ct = s("./src/reddit/pages/CommentsPage/index.m.less"),
				lt = s.n(ct);

			function mt() {
				return (mt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const pt = Object(o.a)({
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
				ut = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				ht = ({
					condition: e,
					wrap: t,
					children: s
				}) => e ? t(s) : s,
				bt = 200,
				gt = 80,
				Ct = 32,
				xt = Object(o.a)({
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
				ft = Object(o.a)({
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
				Ot = Object(o.a)({
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
				vt = ({
					postId: e,
					commentId: t,
					commentsPageKey: s
				}) => t ? Object(E.a)(e) : s,
				yt = e => {
					const {
						state: t
					} = e.location, s = a()(t, U.a.IsOverlay, !1), o = a()(t, U.a.CloseLocation, null), n = a()(t, U.a.ScrollOnLoad, !1);
					n && Object(Je.c)(U.a.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(Z.s)(i), l = r && Object(X.h)(r);
					return m.a.createElement(J.a, {
						postId: c
					}, m.a.createElement(wt, {
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
				Et = Object(q.u)(),
				Pt = () => Object(h.c)({
					apiError: te.c,
					apiPending: te.d,
					canCommentAsModerator: (e, {
						postId: t
					}) => {
						const s = Object(Ce.U)(e, {
							postId: t
						});
						return !!(s && s.id && e.moderatingSubreddits[s.id])
					},
					canViewCreatorStats: (e, {
						postId: t
					}) => Object(ne.a)(e, t),
					comment: se.b,
					communityBannerDiscoveryUnit: re.b,
					contentGateInfo: (e, {
						subredditName: t
					}) => Object(Oe.f)(e, t),
					currentUserShowNSFW: Oe.eb,
					dismissedSubreddits: ie.a,
					fullyLoaded: te.u,
					hasModeratorPostPermissions: ge.c,
					headComment: te.x,
					isActionBarAnimationEnabled: Y.b,
					isAvatarsInCommentsEnabled: de.a,
					isBlockedUserBannerEnabled: (e, {
						postId: t
					}) => !!Object(Ce.w)(e, {
						postId: t
					}) && Object(ae.a)(e),
					isCountAnimShadowTestEnabled: Y.e,
					isCelebratoryMomentsEnabled: ce.c,
					isCreatorStatsEnabled: (e, {
						postId: t
					}) => Object(le.a)(e, t),
					isEligibleForCommentTruncation: he.a,
					isRenderCelebratoryMoment: ce.d,
					isUpvoteCelebratoryMoment: ce.e,
					celebratoryMomentsNumCooldownDays: ce.b,
					isChatPost: ee.d,
					isCommentsListTruncated: oe.a,
					isLoggedIn: Oe.K,
					isNightmodeOn: Oe.X,
					isTooltipOpen: (e, t) => !!Object(fe.a)(e),
					origin: be.j,
					post: Ce.H,
					postSEOV2IdCardVariant: me.h,
					profileCollectionsEnabled: z.a,
					replyComment: (e, {
						postId: t,
						commentId: s,
						commentsPageKey: o
					}) => Object(te.s)(e, {
						commentsPageKey: vt({
							postId: t,
							commentId: s,
							commentsPageKey: o
						})
					}),
					shouldOpenPostInNewTab: Oe.db,
					subredditAboutInfo: (e, {
						subredditName: t
					}) => t ? Object(xe.t)(e, {
						subredditName: t
					}) : void 0,
					subredditOrProfile: Ce.U,
					userHovercardIsOpen: (e, t) => Object(fe.b)(Object(Re.b)({
						itemId: t.postId,
						tooltipIdPrefix: R.a,
						tooltipType: Ke.c.StickyPost
					}))(e),
					userPrefs: Oe.ub,
					inResonatePilot: pe.a,
					isPostQualifiedForUpvotePrompt: Q.c,
					isTypingIndicatorsExperimentEnabled: ue.c
				}),
				kt = (e, t) => ({
					dismissTruncation: t => e(Object(ye.a)({
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
					fetchCommentsNativeAd: t => e(Object(j.a)(t)),
					getIsTrackingCrossposts: t => e(Object(S.b)(t)),
					getPostCrowdControlLevel: t => e(Object(Ee.b)(t)),
					renderCelebratoryMoment: (t, s) => e(Object(ve.a)({
						isUpvote: t,
						postId: s
					})),
					triggerUpvotePrompt: (t, s, o) => {
						e(Object(M.b)(t, s, o))
					}
				}),
				jt = Object(p.b)(Pt, kt);
			class It extends m.a.Component {
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
						this.scrollY = d, this.state.commentNativeAdId && (!e && void 0 !== o && d >= o && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== o && d < o && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== n && d >= n && (this.didScrollPastPost = !0), t && void 0 !== n && d < n && (this.didScrollPastPost = !1, r && v.a.write(() => {
							i(Object(Re.b)({
								itemId: a,
								tooltipIdPrefix: R.a,
								tooltipType: Ke.c.StickyPost
							}))
						}))
					}, f.J), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(et.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const e = Object(ze.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === V.b.F || e.keyCode === V.a.F,
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
					}, this.onAllCommentsRendered = () => {
						this.props.isEligibleForCommentTruncation || this.state.allCommentsRendered || this.setState({
							allCommentsRendered: !0
						})
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.didPassAdScrollThreshold = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						allCommentsRendered: !1,
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
					this.props.isPostQualifiedForUpvotePrompt && (this.upvotePromptId = setTimeout(() => {
						this.props.triggerUpvotePrompt(this.props.postId, !1, () => this.setState({
							isUpvotePromptTriggered: !0
						}))
					}, Q.b));
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
					if (n ? (this.scrollContainerEl = document.getElementById(D.d), i && (t || s) && r && r.numComments ? this.scrollToComments() : v.a.write(() => {
							setTimeout(() => {
								Object(O.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(Xe.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(Z.s)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), v.a.read(() => {
							this.props.isOverlay || Object(k.d)(k.c.CommentsPage, o)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						f.Kb.includes(e) && Object($e.a)(e)
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
						const e = this.props.post && Object(Ze.a)(this.props.post);
						this.props.post && this.props.post.numComments ? v.a.read(this.handleScroll) : v.a.write(() => {
							e || Object(O.c)(this.scrollContainerEl, 0), v.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && v.a.write(() => {
							setTimeout(() => {
								Object(O.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = B.b + (this.props.isOverlay ? B.n : 0),
								s = t.getBoundingClientRect().top;
							let o;
							const n = (o = this.props.isOverlay ? document.getElementById(D.d) : document.getElementsByTagName("body")[0]) && o.getBoundingClientRect().top,
								r = Math.abs(n - s),
								i = this.props.isOverlay ? Ct : r - e;
							(this.props.isOverlay ? o && o.scrollTop || 0 : window.pageYOffset) >= i && v.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(O.c)(o, i) : Object(O.c)(document, i)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					if (this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0, this.upvotePromptId && clearTimeout(this.upvotePromptId), this.props.isOverlay && this.props.isPostQualifiedForUpvotePrompt && !this.state.isUpvotePromptTriggered) {
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
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = bt, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = bt)
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
					v.a.read(() => {
						const e = document.getElementById(D.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - gt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - gt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), v.a.write(() => {
								Object(O.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => v.a.read(this.handleScroll))
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
					v.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: o,
							sort: n
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = g.c.end(t);
						o(Object(tt.c)(t, s, e, C.TimerType.InApp, r, n))
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
					} = this.props, r = !(!o || !o.isNSFW || t), i = Object(Qe.a)(e, r, n);
					if (!i) return null;
					let a = m.a.createElement(Ot, i);
					return s && (a = m.a.createElement(st.a, {
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
						isEligibleForCommentTruncation: l,
						isLoggedIn: p,
						isNightmodeOn: u,
						isOverlay: h,
						post: b,
						postId: g,
						postSEOV2IdCardVariant: C,
						profileCollectionsEnabled: O,
						renderCelebratoryMoment: v,
						sendEvent: y,
						sort: E,
						subredditOrProfile: P
					} = this.props, k = Object(me.f)(C);
					if (!b) {
						if (t) return m.a.createElement(we.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === f.n ? m.a.createElement(Ot, {
							contentGateType: rt.a.PostBlockedForLegalReason
						}) : m.a.createElement(we.d, {
							postId: g,
							commentId: i,
							apiError: e,
							sort: E
						}) : m.a.createElement(we.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const j = this.isCommentPermalink(),
						I = b.belongsTo.type === W.a.PROFILE,
						w = Object(Ze.a)(b) && (!I || O),
						_ = !p,
						S = P && P.isQuarantined,
						L = !l && !this.state.allCommentsRendered,
						T = n.fbt._("Thanks for the comment", null, {
							hk: "13Osok"
						}),
						N = `${dt.a.assetPath}/img/celebratory-moments/thumbs-up-snoo.png`;
					return ut.input.channel.postID = g, m.a.createElement(St, {
						closeLocation: r,
						commentsPageKey: a,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: p,
						isOverlay: h,
						isSwapVariant: k,
						post: b,
						subredditOrProfile: P,
						shouldFitPageToContent: _,
						isCollectionLayout: w
					}, m.a.createElement(We.a, {
						postId: g,
						isOverlay: h,
						commentId: i,
						intersectionRef: this.commentSortRef
					}), S && m.a.createElement(Ue.a, {
						subredditName: P.name
					}), m.a.createElement(Ve.a, null), s && m.a.createElement(pt, {
						iconUrl: o ? void 0 : N,
						minWindowWidthInPx: Pe.b,
						text: o ? void 0 : T
					}), m.a.createElement("div", {
						className: Object(x.a)(lt.a.PageContentWrapper, {
							[lt.a.LargePageContent]: w,
							[lt.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, w && m.a.createElement(ft, {
						isOverlay: h,
						isNightmodeOn: u,
						postId: g
					}), m.a.createElement(ht, {
						condition: w,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: lt.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(He.a, {
						isCommentPermalink: j,
						isOverlay: h,
						postId: g,
						redditStyle: h,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: y,
						isActionBarAnimationEnabled: d,
						isCountAnimShadowTestEnabled: c,
						triggerCelebratoryMoment: this.shouldTriggerCelebratoryMoment() ? v : void 0
					}), this.props.canViewCreatorStats && !S && this.props.isCreatorStatsEnabled && m.a.createElement(Me.a, {
						post: b,
						subreddit: P
					}), this.state.commentNativeAdId && m.a.createElement("div", {
						ref: this.setCommentAdRef
					}, m.a.createElement(A.a, {
						key: `event-post-id-${b.id}`,
						isOverlay: h,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), P && !Object($.h)(P) && m.a.createElement(F.a, {
						awaitAllCommentsRendered: L,
						contentContainerRef: this.state.layoutRef,
						isOverlay: h,
						post: b,
						subredditOrProfile: P
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
						isCommentsListTruncated: u,
						isEligibleForCommentTruncation: h,
						isLoggedIn: g,
						isOverlay: C,
						isTypingIndicatorsExperimentEnabled: f,
						location: O,
						onOtherDiscussions: v,
						openLoginModal: y,
						openRegisterModal: E,
						origin: k,
						post: j,
						postId: I,
						renderCelebratoryMoment: _,
						replyComment: S,
						sendEvent: L,
						sort: T,
						subredditAboutInfo: N,
						subredditOrProfile: M
					} = this.props;
					if (!j) return null;
					const A = this.isCommentPermalink(),
						R = [],
						F = j.isLocked && !s,
						B = !(A || j.isArchived || N && N.userIsBanned || j.authorIsBlocked && l);
					let D = !1;
					if (F) R.push(m.a.createElement(Be.a, {
						key: "commentThreadBanner",
						subredditOrProfile: M
					}));
					else if (j.isArchived) R.push(m.a.createElement(Fe.a, {
						key: "commentThreadBanner"
					}));
					else if (B && !p && !v)
						if (g) {
							D = f;
							const e = Object(P.a)(b.c.replyToPost, I);
							R.push(m.a.createElement(ke.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: b.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								isOverlay: C,
								isTypingIndicatorsExperimentEnabled: f,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: I,
								submitAction: ({
									validate: t,
									...s
								}, o) => t ? w.t(I, r, e, s, o) : w.n(I, r, e, s, o),
								submitButtonText: n.fbt._("Comment", null, {
									hk: "m3FAA"
								}),
								triggerCelebratoryMoment: this.shouldTriggerCelebratoryMoment() ? _ : void 0
							}))
						} else R.push(m.a.createElement(je.a, {
							key: "loggedOutCommentForm",
							location: O,
							openLoginModal: y,
							openRegisterModal: E,
							origin: k
						}));
					if (j.contestMode && R.push(m.a.createElement(De.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), !p && !v && R.push(m.a.createElement(Le.a, {
							commentId: o,
							elementRef: this.updateCommentSortRef,
							isOverlay: C,
							key: "commentSort",
							location: O,
							postId: I,
							sort: T,
							suggestedSort: j.suggestedSort
						}), m.a.createElement(it.a, {
							commentId: o,
							commentsPageKey: r,
							isOverlay: C,
							key: "commentNavigation",
							postId: I
						})), R.push(m.a.createElement(qe.a, {
							postId: I
						})), !t || d || p || v)
						if (!e || d || v)
							if (v) R.push(m.a.createElement(xt, {
								commentSort: T,
								key: "otherDiscussions",
								postId: I,
								isOverlay: C,
								postPermalink: j.permalink
							}));
							else if (p) {
						if (M && M.id) {
							const e = S ? Object(P.a)(b.c.replyToComment, S.id) : Object(P.a)(b.c.replyToPost, I),
								s = vt({
									postId: I,
									commentId: o,
									commentsPageKey: r
								});
							R.push(m.a.createElement(_e.a, {
								commentId: o,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !i && t,
								key: "commentsChat",
								postId: I,
								renderedInOverlay: C,
								subredditId: M.id
							}, ({
								scrollToBottom: t
							}) => g ? m.a.createElement(Se.a, {
								key: "chatCommentsForm",
								postId: I,
								replyComment: S,
								draftKey: e,
								commentsPageKey: s,
								isEditing: !1,
								scrollToBottom: t,
								sendEvent: L
							}) : m.a.createElement(je.a, {
								key: "loggedOutCommentForm",
								className: lt.a.ChatLoggedOutForm,
								location: O,
								openLoginModal: y,
								openRegisterModal: E,
								origin: k
							})))
						}
					} else R.push(m.a.createElement("div", {
						className: Object(x.a)(lt.a.CommentsPaneWrapper, {
							[lt.a.mIsInOverlay]: C
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(Ne.a, mt({}, this.props, {
						shouldTruncateComments: h && u,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: j.numComments,
						onClick: this.handleContentClick
					}), m.a.createElement(Ie.a, {
						commentId: o,
						commentsPageKey: r,
						postId: I,
						onAllCommentsRendered: this.onAllCommentsRendered,
						renderedInOverlay: C,
						triggerCelebratoryMoment: this.shouldTriggerCelebratoryMoment() ? _ : void 0
					})))), e && d ? R.push(m.a.createElement(we.e, {
						key: "commentsErrorState",
						postId: I,
						commentId: o,
						sort: T,
						apiError: e
					})) : !i && t && R.push(m.a.createElement(we.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					else R.push(m.a.createElement(we.e, {
						postId: I,
						commentId: o,
						sort: T,
						apiError: e
					}));
					else this.didRenderLoading = !0, R.push(m.a.createElement(we.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					if (D) {
						const e = R.shift();
						R.push(e)
					}
					return m.a.createElement(G.a.Provider, {
						value: this.sendEventWithName
					}, R)
				}
			}
			const wt = Et(Object(K.b)(jt(Object(Ye.c)(It)))),
				_t = y.a.wrapped(Te.a, "DetailsPageSidebar", lt.a),
				St = e => {
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
					if (!a && !d) return m.a.createElement(ot.a, {
						containerRef: o,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: n,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: u && m.a.createElement(Te.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					if (d) return m.a.createElement(st.a, {
						containerRef: o,
						content: t,
						isCollectionLayout: i,
						sidebar: u && m.a.createElement(Te.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					const h = i ? B.i : H.a;
					return m.a.createElement(nt.a, {
						containerRef: o,
						maxWidth: B.i,
						fitPageToContent: p,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: i,
						navBar: u && m.a.Children.toArray([m.a.createElement(Ae.a, {
							key: u.name,
							disableFullscreen: !0,
							headerText: u.name,
							maxWidth: h,
							prefixedHeaderText: u.displayText,
							subredditOrProfile: u,
							url: u.url
						}), !Object($.h)(u) && m.a.createElement(Ge.a, {
							disableFullscreen: !0,
							homeUrl: u.url,
							maxWidth: h,
							subredditId: u.id
						})]),
						sidebar: u && m.a.createElement(_t, {
							commentsPageKey: s,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					})
				};
			t.default = Object(at.a)(yt)
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
						experimentName: o.Ie
					});
					return t === o.O.TwoDayCooldown || t === o.O.FiveDayCooldown
				},
				a = e => {
					const t = Object(r.d)(e, {
							experimentName: o.Ie
						}),
						s = null == t ? void 0 : t.variant;
					return s === o.O.TwoDayCooldown ? 2 : s === o.O.FiveDayCooldown ? 5 : 0
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
			const a = Object(o.a)(i.K, i.J, (e, t) => e || t),
				d = Object(o.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: n.G
				}), e => e === n.Q.Enabled)
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
				experimentName: o.s
			}) === o.v.Enabled
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
				experimentName: o.Xd
			}) === o.fe.Enabled
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.Me
					});
					return t === o.Ee.UIChangesOnly || t === o.Ee.TypingIndicators || t === o.Ee.IndicatorsPlusCTA
				},
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
							experimentName: o.Me
						}),
						s = null == t ? void 0 : t.variant;
					return s === o.Ee.TypingIndicators || s === o.Ee.IndicatorsPlusCTA
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: o.Me
					});
					return (null == t ? void 0 : t.variant) === o.Ee.IndicatorsPlusCTA
				}
		},
		"./src/reddit/selectors/isEligibleForCommentTruncation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				r = s("./src/reddit/selectors/meta.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/models/Subreddit/index.ts");
			const c = Object(o.a)((e, t) => t.isOverlay, (e, t) => {
				const s = Object(i.U)(e, {
					postId: t.postId
				});
				return Object(n.b)(e, {
					...t,
					subredditOrProfile: s
				})
			}, i.U, i.H, a.J, a.K, r.g, (e, t, s, o, n, r, i) => {
				if (!o) return !1;
				const a = !(!s || Object(d.h)(s)),
					c = o.numComments >= 3 && !e || !t;
				return i && a && c && (!n && !r)
			})
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
		"./src/redditGQL/operations/CreatorStats.json": function(e) {
			e.exports = JSON.parse('{"id":"b3a25d285bff"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"91be91e3c65d"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"bb2cd288d8dc"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"cc6285f68aa4"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"6a98e7f63308"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage.54ce512d7f5a8c57fcc5.js.map