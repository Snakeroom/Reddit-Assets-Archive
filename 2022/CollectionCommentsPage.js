// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.e5c0bc76b058f98f8fd6.js
// Retrieved at 6/6/2022, 7:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage", "CommentsPage"], {
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
				o = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = o
		},
		"./src/lib/makeCollectionCommentsPageKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t, s) {
				let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
					o = `collectionCommentsPage--[collection:'${e}']`;
				return t && (o += `--[post:'${t}']`), s && (o += `--[rootComment:'${s}']`), n && (n.sort && n.hasSortParam && (o += `--[sort:'${n.sort}']`), n.context && (o += `--[context:${n.context}]`), n.depth && (o += `--[depth:${n.depth}]`)), o
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
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js");

			function o() {
				return window
			}
			var r = s("./node_modules/lodash/debounce.js"),
				i = s.n(r),
				a = s("./src/reddit/constants/elementIds.ts"),
				d = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				m = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var p = function() {
					const e = Object(m.a)(d.uc.Bottom_cell),
						t = Object(m.a)(d.uc.Bottom_cell_dismissible),
						s = Object(m.a)(d.uc.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(d.uc.Bottom_cell_signup_upsell_copy),
						o = Object(m.a)(d.uc.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.uc.Bottom_sheet);
					return e || n || o ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : r ? l.b.SignupUpsellBottomSheet : null
				},
				u = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function g(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
						const {
							showPromo: t
						} = Object(c.a)(), s = p(), r = Object(u.a)(s), l = Object(m.a)(d.uc.Bottom_cell_dismissible_immediate_trigger);
						return n.useMemo(() => i()(() => {
							if (!r && s) {
								const e = document.getElementById(a.e),
									n = e ? e.scrollTop : o().scrollY,
									r = o().innerHeight,
									i = r / 3,
									d = 2 * r;
								n >= (l ? i : d) && t(s)
							}
						}, e, {
							maxWait: h
						}), [l, r, s, t, e])
					}();
					return n.createElement(e, x({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/category/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/categories/index.ts"),
				r = (s("./node_modules/lodash/isEmpty.js"), s("./node_modules/react-router-redux/es/index.js"), s("./src/lib/makeActionCreator/index.ts")),
				i = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/constants/experiments.ts");
			s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var p = s("./src/reddit/helpers/localStorage/index.ts"),
				u = s("./src/reddit/selectors/category.ts"),
				b = s("./src/reddit/actions/category/constants.ts");
			Object(n.a)({
				features: {
					categories: o.a
				}
			});
			const h = Object(r.a)(b.c),
				x = Object(r.a)(b.b),
				g = Object(r.a)(b.a),
				f = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const o = t(),
						r = Object(u.h)(o),
						p = Object(u.g)(o);
					if (r || p) return;
					e(h());
					const b = await (e => Object(d.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/available_subreddit_categories.json?use_extended_categories=true`,
						method: a.jb.GET
					}))(n());
					if (b.ok) {
						const {
							categories: t,
							categoryIds: s
						} = (e => {
							const t = {},
								s = [];
							return e.forEach((e, n) => {
								const o = {
									attr: e.category_attr,
									color: e.category_color || i.a[n % i.a.length],
									icon: e.category_icon,
									id: e.category_id,
									name: e.category_name,
									displayText: Object(m.Uf)(e.category_name)
								};
								s.push(o.id), t[o.id] = o
							}), {
								categories: t,
								categoryIds: s
							}
						})(b.body);
						e(x({
							categories: t,
							categoryIds: s
						}))
					} else e(g(b.error))
				}, C = (Object(r.a)(b.g), Object(r.a)(b.f), Object(r.a)(b.e), Object(r.a)(b.d)), v = e => async (t, s) => {
					const n = Object(u.j)(s(), {
						id: e
					});
					t(C({
						categoryId: e,
						rank: n + 1
					})), Object(p.kb)(Object(u.d)(s()))
				}
		},
		"./src/reddit/actions/commentsListTruncated/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const r = Object(n.a)(o.a),
				i = Object(n.a)(o.b)
		},
		"./src/reddit/actions/dismissedTruncationList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const r = Object(n.a)(o.a)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return P
			}));
			var n, o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				u = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(o.a)(i.g),
				x = Object(o.a)(i.e),
				g = Object(o.a)(i.h),
				f = Object(o.a)(i.c),
				C = Object(o.a)(i.f),
				v = Object(o.a)(i.j),
				O = Object(o.a)(i.i),
				E = () => async (e, t, s) => {
					let {
						gqlContext: o
					} = s;
					const r = t(),
						i = Object(p.e)(r),
						c = Object(p.d)(r),
						u = Object(b.P)(r);
					if (i || !c) return;
					e(g());
					let C = !1;
					try {
						const t = u ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(o(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (y(t)) {
								if (j(t)) {
									e(f({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), C = !0
								} else if (k(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: o,
											category: r
										} = s.focusRecommendations[0],
										i = [n, o],
										a = Object(m.d)(i),
										d = Object(l.b)(i),
										c = Object(m.c)(n),
										p = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [o.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: r,
											lastLoadedEnv: "client"
										};
									e(h(p)), C = !0
								}
							} else C = !1
						}
					} catch (v) {
						C = !1
					}
					C || e(x({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, y = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !j(e) && n === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, P = () => async (e, t, s) => {
					var n, o;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (o = null === (n = Object(u.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === o ? void 0 : o.route.chunk,
							a = Object(b.Q)(i);
						return Object(r.i)(() => e(E()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(C({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/otherDiscussions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				r = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/OtherDiscussions.json"),
				d = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts");
			const c = Object(n.a)(r.a),
				l = Object(n.a)(r.b),
				m = Object(n.a)(r.c),
				p = (e, t) => async (s, n, r) => {
					let {
						gqlContext: p
					} = r;
					const u = n(),
						b = Object(o.a)(e, null, {
							isOtherDiscussions: !0
						}),
						h = u.listings.postOrder.ids[b],
						x = !!u.listings.postOrder.api.error[b];
					if (h && !x) return;
					s(m({
						key: b
					}));
					const g = await ((e, t) => Object(i.a)(e, {
						...a,
						variables: t
					}))(p(), t);
					Object(d.a)({
						getState: n,
						onFailure: e => s(c(e)),
						onSuccess: e => s(l(e)),
						postId: e,
						response: g
					})
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
				return Y
			})), s.d(t, "collectionCommentsPageLoadedFull", (function() {
				return Q
			})), s.d(t, "fullCollectionCommentsPageDataRequested", (function() {
				return z
			})), s.d(t, "collectionCommentsPageDataRequested", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				i = s("./src/lib/pageTitle/index.ts"),
				a = s("./src/lib/truncateText/index.ts"),
				d = s("./src/reddit/actions/ads/index.ts"),
				c = s("./src/reddit/actions/economics/helpers/async.ts"),
				l = s("./src/reddit/actions/pages/subreddit.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/profile/index.ts"),
				b = s("./src/reddit/actions/shortcuts/active.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				x = s("./src/reddit/actions/toaster.ts"),
				g = s("./src/reddit/constants/adEvents.ts"),
				f = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/constants/postCollection.ts"),
				v = s("./src/reddit/constants/posts.ts"),
				O = s("./src/reddit/endpoints/governance/posts.ts"),
				E = s("./src/config.ts"),
				y = s("./src/lib/makeApiRequest/index.ts"),
				j = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function k(e, t, s) {
				const n = `${E.a.gatewayUrl}/desktopapi/v1/collection_postcomments`;
				return s ? Object(j.a)(`${n}/${e}/${t}/${s}`) : t ? Object(j.a)(`${n}/${e}/${t}`) : Object(j.a)(`${n}/${e}`)
			}
			var P = (e, t, s, o, r) => Object(y.a)(e, {
					data: r,
					endpoint: k(t, s, o),
					method: n.jb.GET
				}),
				I = s("./src/reddit/endpoints/page/subredditPage.ts"),
				_ = s("./src/reddit/helpers/canonicalUrls.ts"),
				w = s("./src/reddit/helpers/commentList/index.ts"),
				S = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				N = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/helpers/trackers/screenview.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				R = s("./src/reddit/models/Post/index.ts"),
				M = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				F = s("./src/reddit/selectors/platform.ts"),
				A = s("./src/reddit/selectors/postCollection.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				V = s("./src/reddit/actions/pages/comments.ts"),
				U = s("./src/reddit/actions/pages/constants.ts"),
				W = s("./src/lib/initializeClient/installReducer.ts"),
				H = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(W.a)({
				pages: {
					comments: H.a
				}
			});
			const K = Object(o.a)(U.d),
				G = Object(o.a)(U.b),
				q = Object(o.a)(U.a),
				Y = e => async (t, s) => {
					const {
						collectionId: o,
						partialPostId: r,
						partialCommentId: d,
						subredditName: c = "",
						routePrefix: l
					} = e.params, x = r ? Object(R.u)(r) : "", g = d && Object(L.h)(d), {
						queryParams: O
					} = e, E = s(), {
						instanceId: y
					} = O, j = {
						id: o,
						type: v.b[l]
					}, k = v.b[l] === v.a.PROFILE, {
						hasSortParam: P,
						sortToUse: I
					} = Object(S.a)(E, x), w = ["context", "depth", "limit", f.e].reduce((e, t) => {
						const s = parseInt(O[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: c,
						hasSortParam: P,
						instanceId: y
					});
					P && (w.sort = I), t(p.r(x)), await Promise.all([k ? t(u.d(c)) : Promise.resolve(), t(J(o, x, g, w))]);
					const N = ((e, t) => {
						const s = Object(A.q)(e, {
							collectionId: t.id
						});
						if (!s) return "";
						const o = Object(D.M)(e, {
								identifier: t
							}),
							r = Object(i.c)(s.title, o.name).toString();
						return Object(a.a)(r, C.c, n.ib)
					})(s(), j) || Object(i.e)();
					t(m.m({
						title: N
					}));
					const M = s().posts.models[x];
					if (M) {
						const n = Object(D.M)(s(), {
							identifier: M.belongsTo
						});
						if (!M.isSponsored)
							if (M.belongsTo.type === v.a.SUBREDDIT) {
								!!Object(D.T)(E, {
									subredditId: M.belongsTo.id
								}) || await t(h.o(n.name))
							} else await t(u.d(n.name));
						const o = s().posts.instances[x] ? e.queryParams.instanceId : M.postId;
						t(Object(b.b)(o))
					}
					k ? Object(_.d)(s(), t, e) : Object(_.e)(s(), t, e), Object(T.w)(s(), !0)
				}, Q = Object(o.a)(U.c), z = (e, t, s, n) => async (o, i, a) => {
					const d = Object(r.a)(e, t, s, n),
						c = i();
					t = t || Object(A.p)(c, {
						collectionId: e
					});
					const l = await P(a.apiContext(), e, t, s, n);
					if (o(Object(m.n)(l.status)), l.ok) {
						if (!(t = t || l.body.collections[e].primaryPostId)) return;
						const s = Object(w.a)(l.body, t, c);
						o(G({
							key: d,
							collectionId: e,
							meta: c.meta,
							postId: t,
							shouldCollapse: s,
							...l.body
						}));
						const n = c.user.prefs.commentMode;
						o(Q({
							commentMode: n,
							key: d,
							postId: t
						}))
					} else o(q({
						error: l.error,
						key: d,
						...l.body
					}))
				}, J = (e, t, s, n, o) => async (i, a, u) => {
					const b = Object(r.a)(e, t, s, n),
						h = a();
					t = t || Object(A.p)(h, {
						collectionId: e
					});
					const {
						subredditName: f
					} = n, C = h.pages.comments.keyToHeadCommentId.hasOwnProperty(b), v = h.pages.comments.api.fullyLoaded[b], E = h.pages.comments.api.error[b];
					if (h.pages.comments.api.pending[b] || C && !E) {
						if (C && !h.sidebarPromotedPosts.firstFetch) {
							const e = Object(F.i)(h) ? M.a.COMMENTS_OVERLAY : M.a.COMMENTS;
							window.addEventListener("load", () => {
								i(Object(d.b)(e))
							})
						}
						return void(v || o || i(z(e, t, s, n)))
					}
					const y = h.user.prefs.commentMode;
					i(K({
						key: b,
						collectionId: e,
						commentMode: y,
						postId: t
					}));
					const j = {
						...n
					}; {
						const e = t && Object(B.G)(a(), {
							postId: t
						});
						e && e.numComments && e.numComments > V.MIN_NUM_COMMENTS_TO_TRUNCATE && (j.truncate = V.NUM_COMMENTS_TRUNCATE)
					}
					let k, _ = await Object(N.a)("comments", () => P(u.apiContext(), e, t, s, j));
					if (i(Object(m.n)(_.status)), _.ok && (t = t || _.body.collections[e].primaryPostId)) {
						const e = Object.keys(_.body.posts).filter(e => !!_.body.posts[e].isMeta),
							s = Object(B.G)(a(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(O.a)(u.apiContext(), s.belongsTo.id, e);
							t.ok && (k = t.body)
						}
					}
					if (!o) {
						const o = t ? Object(B.G)(a(), {
							postId: t
						}) : null;
						o && _.body.comments && Object.keys(_.body.comments).length < o.numComments ? i(z(e, t, s, n)) : _.ok && i(Q({
							commentMode: y,
							key: b,
							postId: t
						}));
						const r = Object(F.i)(h) ? M.a.COMMENTS_OVERLAY : M.a.COMMENTS;
						i(Object(d.b)(r))
					}
					if (_.ok) {
						if (!t) return;
						const e = Object(w.a)(_.body, t, h);
						i(Object(V.commentsPageLoaded)({
							commentMode: y,
							key: b,
							postId: t,
							meta: h.meta,
							governance: k,
							shouldCollapse: e,
							..._.body
						})), i(x.g(b));
						const s = Object(B.G)(h, {
							postId: t
						});
						s && i(p.z(s, g.a.CommentsView)), !o && s && "subreddit" === s.belongsTo.type && _.body.comments && await i(Object(c.a)({
							commentIds: Object.keys(_.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else f && (i(Object(l.subredditPending)({
						key: b
					})), _ = await Object(N.a)("subreddit", () => Object(I.a)(u.apiContext(), f, {})), i(Object(m.n)(_.status))), i(Object(l.handleSubredditPageApiError)(_, f)), i(q({
						error: _.error,
						key: b,
						..._.body
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return at
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return dt
			})), s.d(t, "commentsPagePending", (function() {
				return ct
			})), s.d(t, "commentsPageLoaded", (function() {
				return lt
			})), s.d(t, "commentsPageFailed", (function() {
				return mt
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return pt
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return ut
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return bt
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return ht
			})), s.d(t, "commentsPageRequested", (function() {
				return xt
			})), s.d(t, "commentsPageDataRequested", (function() {
				return ft
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return Ct
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return vt
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/lib/autosubscribeLinks/index.tsx"),
				r = s("./src/reddit/actions/category/index.ts"),
				i = s("./src/reddit/actions/discoveryUnit.ts"),
				a = s("./src/reddit/actions/pages/subreddit.ts"),
				d = s("./src/reddit/actions/shortcuts/active.ts"),
				c = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				l = s("./src/reddit/actions/subredditSettings.ts"),
				m = s("./src/reddit/endpoints/governance/posts.ts"),
				p = s("./src/reddit/endpoints/page/commentsPage.ts"),
				u = s("./src/lib/makeGqlRequest/index.ts"),
				b = s("./src/redditGQL/operations/CommentsPageExtra.json");
			async function h(e, t) {
				return Object(u.a)(e, {
					...b,
					variables: t
				})
			}
			var x = s("./src/reddit/endpoints/page/subredditPage.ts"),
				g = s("./src/reddit/endpoints/profile/info.ts"),
				f = s("./src/reddit/models/Post/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/pageTitle/index.ts"),
				O = s("./src/reddit/actions/economics/helpers/async.ts"),
				E = s("./src/reddit/actions/externalAccount.ts"),
				y = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				j = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				k = s("./src/reddit/actions/platform.ts"),
				P = s("./src/reddit/actions/post.ts"),
				I = s("./src/reddit/actions/profile/index.ts"),
				_ = s("./src/reddit/actions/subreddit.ts"),
				w = s("./src/reddit/actions/subreddit/notifications.ts"),
				S = s("./src/reddit/actions/subreddit/questions.ts"),
				N = s("./src/reddit/actions/toaster.ts"),
				T = s("./src/reddit/constants/adEvents.ts"),
				L = s("./src/reddit/constants/graphql.ts"),
				R = s("./src/reddit/constants/parameters.ts"),
				M = s("./src/reddit/constants/posts.ts"),
				F = s("./src/reddit/helpers/commentList/index.ts"),
				A = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				B = s("./src/reddit/models/Comment/index.ts"),
				D = s("./src/reddit/models/Media/index.ts"),
				V = s("./src/reddit/models/Subreddit/index.ts"),
				U = s("./src/reddit/models/User/index.ts"),
				W = s("./src/reddit/selectors/category.ts"),
				H = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				K = s("./src/reddit/selectors/experiments/postSeo.ts"),
				G = s("./node_modules/reselect/es/index.js"),
				q = s("./src/reddit/constants/experiments.ts"),
				Y = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Q = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				z = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				J = s("./src/reddit/selectors/platform.ts"),
				X = s("./src/reddit/selectors/removedPosts.ts");
			const Z = Object(G.a)(J.f, Q.a, X.a, X.c, z.a, X.e, z.b, (e, t, s, n, o, r, i) => {
				if (!e || !t || o) return !1;
				if (n) return !0;
				const a = r || i,
					d = t.score >= 2 || t.numComments >= 2;
				return !(!s || a || d)
			});
			var $ = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ee = s("./src/reddit/selectors/moderatorPermissions.ts"),
				te = s("./src/reddit/selectors/posts.ts"),
				se = s("./src/reddit/selectors/subreddit.ts"),
				ne = s("./src/reddit/selectors/user.ts"),
				oe = s("./src/lib/makeActionCreator/index.ts"),
				re = s("./src/lib/makeCommentsPageKey/index.ts"),
				ie = s("./src/reddit/actions/ads/index.ts"),
				ae = s("./src/reddit/helpers/canonicalUrls.ts"),
				de = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ce = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				le = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				me = s("./src/lib/performanceTimings/index.tsx"),
				pe = s("./src/reddit/actions/gold/powerups.ts"),
				ue = s("./src/lib/makeListingKey/index.ts"),
				be = s("./src/reddit/actions/googleQASchema/constants.ts");
			const he = Object(oe.a)(be.b),
				xe = Object(oe.a)(be.a);
			var ge = s("./src/reddit/actions/linkedPosts/constants.ts");
			const fe = Object(oe.a)(ge.a),
				Ce = Object(oe.a)(ge.c),
				ve = Object(oe.a)(ge.b);
			var Oe = s("./src/reddit/actions/otherDiscussions/index.ts"),
				Ee = s("./src/reddit/actions/subreddit/constants.ts"),
				ye = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var je = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: o,
						post: r
					} = e;
					try {
						s({
							altText: r && r.media && (r.media.still && r.media.still.altText || r.media.obfuscated && r.media.obfuscated.altText) || null,
							postId: o
						})
					} catch (i) {
						n(i)
					}
				},
				ke = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Pe = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Ie = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var _e = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: o,
						post: r
					} = e;
					try {
						const e = [],
							n = {},
							i = {};
						if (!r || !r.linked) return;
						const a = t(),
							d = a.posts && a.posts.models,
							c = Object(ke.a)(o),
							l = r.linked.posts && r.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(Pe.a)(t);
								n[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(f.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Ie.a)(e)
							}
						}
						s({
							dist: r.linked.posts && r.linked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: n,
							postIds: e,
							subreddits: i
						})
					} catch (i) {
						n(i)
					}
				},
				we = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Se = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Ne = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Te = e => {
					let {
						isLinkedPostsFallback: t,
						getState: s,
						onSuccess: n,
						onFailure: o,
						options: r,
						postId: i,
						subreddit: a
					} = e;
					try {
						if (!a) return;
						const e = a.elements || a.posts,
							o = s(),
							d = ((e, t) => {
								const {
									edges: s
								} = e, n = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: n
								}
							})(e, o.posts && o.posts.models),
							c = Object(Se.a)(d),
							l = Ne(c),
							m = e.edges.reduce((e, t) => (t.node.id && t.node.id !== i && e.push(t.node.id), e), []),
							{
								range: p,
								sort: u,
								subredditName: b
							} = r,
							h = t && i ? Object(ke.a)(i, !0) : Object(ue.a)(b, C.W[u], {
								t: p
							});
						n({
							dist: e.dist,
							key: h,
							meta: o.meta,
							postIds: m,
							posts: l
						})
					} catch (d) {
						o(d)
					}
				},
				Le = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Re = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Me = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: o,
						post: r
					} = e;
					try {
						const e = [],
							n = {},
							i = {};
						if (!r || !r.nsfwLinked) return;
						const a = t(),
							d = a.posts && a.posts.models,
							c = Object(Re.a)(o),
							l = r.nsfwLinked.posts && r.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(Pe.a)(t);
								n[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(f.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Ie.a)(e)
							}
						}
						s({
							dist: r.nsfwLinked.posts && r.nsfwLinked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: n,
							postIds: e,
							subreddits: i
						})
					} catch (i) {
						n(i)
					}
				},
				Fe = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Ae = Object(oe.a)(Fe.b),
				Be = Object(oe.a)(Fe.a);
			var De = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Ve = Object(oe.a)(De.b),
				Ue = Object(oe.a)(De.a),
				We = Object(oe.a)(Ee.j),
				He = Object(oe.a)(Ee.i),
				Ke = (Object(oe.a)(Ee.r), Object(oe.a)(Ee.q), e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					var r, i, a, d;
					const {
						includeNSFWListingBelowExperiment: c,
						includeListingBelowExperiment: l,
						includeOtherDiscussions: m,
						includePostFeed: p,
						includePostQASchemaEligibilityFlag: b,
						listingBelowExperimentVariant: h,
						postId: x,
						range: g,
						sort: f,
						subredditName: v
					} = e, O = Object(ue.a)(x, null, {
						isOtherDiscussions: !0
					}), E = s(), y = Object(te.z)(E, {
						listingKey: O
					}), j = m && (!y || 0 === y.length), k = Object(ue.a)(v, C.W[f], {
						t: g
					}), P = Object(te.z)(E, {
						listingKey: k
					}), I = p && (l || !P || 0 === P.length), _ = l, w = c, S = Object(te.G)(E, {
						postId: x
					}), N = !!S && !!S.media && (Object(D.K)(S.media) || Object(D.F)(S.media)) && !S.media.altText;
					if (!(j || I || _ || w || N || b)) return;
					j && t(Object(Oe.d)({
						key: O
					}));
					const T = await ((e, t) => Object(u.a)(e, {
							...ye,
							variables: t
						}))(o(), e),
						L = T.body,
						R = Object(Le.a)(h),
						M = _ && !!(null === (a = null === (i = null === (r = L.data) || void 0 === r ? void 0 : r.post) || void 0 === i ? void 0 : i.linked) || void 0 === a ? void 0 : a.isEligible),
						F = _ && (R || !M);
					b && (T.ok ? L.data && L.data.post && t(he({
						postId: x,
						isEligibleForQASchema: null !== (d = L.data.post.isEligibleForQASchema) && void 0 !== d && d
					})) : t(xe())), j && Object(we.a)({
						getState: s,
						onFailure: e => t(Object(Oe.b)(e)),
						onSuccess: e => t(Object(Oe.c)(e)),
						postId: x,
						response: T
					}), (I && !_ || F) && (T.ok ? L.data && Te({
						getState: s,
						isLinkedPostsFallback: F,
						onFailure: e => t(He(e)),
						onSuccess: e => t(We(e)),
						options: e,
						postId: x,
						subreddit: L.data.subreddit
					}) : t(He(T.error))), _ && M && !R && T.ok && L.data && _e({
						getState: s,
						onFailure: e => t(ve(e)),
						onSuccess: e => t(Ce(e)),
						postId: x,
						post: L.data.post
					}), w && T.ok && Me({
						getState: s,
						onFailure: e => t(Ue(e)),
						onSuccess: e => t(Ve(e)),
						postId: x,
						post: L.data.post
					}), N && T.ok && L.data && je({
						getState: s,
						onFailure: e => t(Be(e)),
						onSuccess: e => t(Ae(e)),
						postId: x,
						post: L.data.post
					}), _ && t(fe({
						postId: x,
						isEligibleForLinkedPosts: M
					}))
				}),
				Ge = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						o = n && Object(f.u)(n),
						{
							sortToUse: r
						} = Object(A.a)(e, o);
					return (!r || r === C.t.CONFIDENCE) && Object(Y.c)(e, {
						experimentEligibilitySelector: () => Object(ne.P)(e),
						experimentName: q.D
					}) === q.F.Enabled
				};
			var qe = s("./src/reddit/selectors/chatPost.ts"),
				Ye = s("./src/reddit/selectors/seo/index.ts"),
				Qe = s("./src/reddit/actions/pages/constants.ts"),
				ze = s("./src/lib/initializeClient/installReducer.ts"),
				Je = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				Xe = s("./src/reddit/reducers/pages/comments/index.ts"),
				Ze = s("./src/reddit/selectors/experiments/autosubscribeLinks.ts"),
				$e = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				et = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				tt = s("./src/reddit/selectors/i18n/index.ts"),
				st = s("./src/reddit/helpers/isRobotIndexableMeta.ts"),
				nt = s("./src/reddit/helpers/locales.ts"),
				ot = s("./src/reddit/selectors/experiments/countrySites.ts"),
				rt = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				it = s("./src/reddit/selectors/meta.ts");
			Object(ze.a)({
				pages: {
					comments: Xe.a
				}
			}), Object(ze.a)({
				features: {
					modUserNotes: Je.a
				}
			});
			const at = 25,
				dt = 100,
				ct = Object(oe.a)(Qe.h),
				lt = Object(oe.a)(Qe.f),
				mt = Object(oe.a)(Qe.e),
				pt = Object(oe.a)(Qe.i),
				ut = (e, t, s) => {
					const n = !e,
						o = Object(te.G)(t, {
							postId: s
						}).belongsTo,
						r = Object(se.M)(t, {
							identifier: o
						}),
						i = Object(Ye.c)(t, {
							identifier: o
						}),
						a = !!Object(Le.c)(t),
						d = Object(tt.a)(t),
						c = Object(rt.b)(t),
						l = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (l.listingBelow = i || n, l.postFeed = l.listingBelow) : d ? l.nsfwListingBelow = !0 : l.postFeed = (i || n) && (!Object(V.i)(r) && !Object(qe.d)(t, {
						postId: s
					}) && !!r || !Object(J.i)(t) && Object(K.e)(t)), e && (l.postQASchema = Object(K.d)(t)), c && (l.listingBelow = !0), l
				},
				bt = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				ht = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				xt = e => async (t, s) => {
					var i, a;
					const {
						partialPostId: l,
						partialCommentId: m
					} = e.params, {
						subredditName: p
					} = e.params || "", u = l ? Object(f.u)(l) : "", b = m && Object(B.h)(m), {
						path: h,
						queryParams: x
					} = e, g = Object(j.d)(h), {
						instanceId: O,
						textOverride: y
					} = x, {
						hasSortParam: w,
						sortToUse: N
					} = Object(A.a)(s(), u), T = null === (a = null === (i = Object(J.b)(s())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk, F = ["context", "depth", "limit", R.e].reduce((e, t) => {
						const s = parseInt(x[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: p,
						hasSortParam: w,
						instanceId: O,
						include_categories: !0
					});
					w && (F.sort = N), F.onOtherDiscussions = g, t(P.r(u)), Object(Ze.a)(s()) && t(Object(o.a)(e.queryParams, p)), await t(ft(u, b, F, N, y));
					const V = s().posts.models[u],
						U = Object(ne.Q)(s());
					if (V && "subreddit" === V.belongsTo.type) {
						const e = V.belongsTo.id,
							n = Object(me.i)(() => t(Object(pe.m)(e, {
								fullData: !0,
								includeIdentity: U
							})), {
								name: "subredditPowerupsRequested",
								page: T,
								isLoggedIn: U
							});
						await n;
						const o = s();
						if (!Object(J.i)(o)) {
							Object($e.a)(o) && t(Object(S.b)(e))
						}
						Object(ee.i)(o, e) && await t(Object(c.c)(u))
					}
					if (V) {
						const o = ((e, t) => {
								const s = Object(te.U)(e, {
										postId: t
									}),
									n = Object(te.G)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), u),
							i = Object(se.M)(s(), {
								identifier: V.belongsTo
							});
						if (i && (e => q.ef.Redirect === Object(Y.b)(e, {
								experimentEligibilitySelector: Z,
								experimentName: q.Xe
							}))(s())) return void t(Object(n.c)(i.url));
						if ((V.media && V.media.type) === D.o.LIVEVIDEO) {
							const e = `/rpan${V.belongsTo.type===M.a.SUBREDDIT?i.url:"/"}${Object(f.v)(V.id)}`;
							return void t(Object(n.c)(e))
						}
						if (V.belongsTo.type !== M.a.SUBREDDIT || V.isSponsored) {
							if (V.belongsTo.type === M.a.PROFILE) {
								const e = Object(me.i)(() => t(I.d(i.name)), {
									name: "getProfileInfo",
									page: T,
									isLoggedIn: U
								});
								await e
							}
						} else {
							if (!!!Object(se.T)(s(), {
									subredditId: V.belongsTo.id
								})) {
								const e = Object(me.i)(() => t(_.o(i.name)), {
									name: "getSubredditRules",
									page: T,
									isLoggedIn: U
								});
								await e
							}
						}
						const a = ut(!1, s(), u),
							c = g;
						if (bt(c, a)) {
							Object(de.d)(de.a.LinkedPosts);
							const e = Object(de.c)(de.a.LinkedPosts);
							Object(de.d)(de.a.NsfwLinkedPosts);
							const n = Object(de.c)(de.a.NsfwLinkedPosts),
								o = {
									adContext: {
										layout: L.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: u
									},
									range: C.ic.WEEK.toUpperCase(),
									sort: C.P.TOP,
									subredditName: i.name
								},
								r = {
									postId: u
								},
								d = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Le.c)(s())
								};
							Object(rt.b)(s()) && (d.listingBelowVersion = "LINKED_POSTS_VERSION_A");
							const l = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(et.a)(s())
								},
								m = ht(a);
							Object(me.i)(() => t(Ke({
								...r,
								...o,
								...d,
								...l,
								...m,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: U,
								page: T
							});
							0
						}
						t(Object(E.p)()), t(k.m({
							title: o
						}));
						const l = s().posts.instances[u] ? e.queryParams.instanceId : V.postId;
						t(Object(d.b)(l)); {
							const e = Object(W.c)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(r.b(e))))
						}
					} else t(k.m({
						title: v.e()
					}));
					const {
						routePrefix: H
					} = e.params;
					M.b[H] === M.a.PROFILE ? Object(ae.d)(s(), t, e) : Object(ae.b)(s(), t, e)
				}, gt = ["SubredditPost", "ProfilePost", "DeletedSubredditPost"], ft = (e, t, s, n, o) => async (r, d, c) => {
					var l, u;
					const b = d(),
						f = Object(re.a)(e, t, s),
						{
							subredditName: v
						} = s,
						E = b.pages.comments.keyToHeadCommentId.hasOwnProperty(f),
						j = b.pages.comments.api.fullyLoaded[f],
						I = b.pages.comments.api.error[f],
						_ = b.pages.comments.api.pending[f],
						S = !Object(ne.P)(b),
						L = Object(ne.k)(b),
						R = n === C.t.CHAT,
						M = !!b.platform.lastPage;
					if ((_ || E && !I) && !(R && M)) {
						if (E && !b.sidebarPromotedPosts.firstFetch) {
							const e = Object(J.i)(b) ? le.a.COMMENTS_OVERLAY : le.a.COMMENTS;
							window.addEventListener("load", () => {
								r(Object(ie.b)(e))
							})
						}
						return void(j || r(vt(e, t, s)))
					}
					r(i.g());
					const A = b.user.prefs.commentMode;
					r(ct({
						key: f,
						postId: e,
						commentMode: A
					}));
					const B = {
						...s,
						...R ? {
							sort: C.t.LIVE
						} : S ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(te.G)(d(), {
							postId: e
						});
						t && t.numComments && t.numComments > dt && (B.truncate = at)
					}
					const D = null === (u = null === (l = Object(J.b)(b)) || void 0 === l ? void 0 : l.routeMatch) || void 0 === u ? void 0 : u.route.chunk,
						V = Object(me.i)(() => Object(p.a)(c.apiContext(), e, t, B, Object(H.a)(d()), Ge(d())), {
							name: "fetchCommentsPage",
							isLoggedIn: !S,
							page: D
						}),
						W = !S && L && Object(me.i)(() => Object(g.d)(c.gqlContext(), Object(U.e)(L)), {
							name: "fetchProfileKarma",
							isLoggedIn: !S,
							page: D
						}) || null,
						K = Object(me.i)(() => h(c.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: !S,
							page: D
						});
					let G, q, Y, Q;
					if ([G, q, Y] = await Promise.all([V, W, K]), r(Object(k.n)(G.status)), G.ok) {
						const t = Object.keys(G.body.posts).filter(e => !!G.body.posts[e].isMeta),
							s = G.body.posts[e];
						if (t.length) {
							const e = Object(me.i)(() => Object(m.a)(c.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: D,
									isLoggedIn: !S
								}),
								n = await e;
							n.ok && (Q = n.body)
						}
						if (q && q.ok) {
							const {
								data: e
							} = q.body, t = {
								karma: {
									...g.a
								}
							};
							if (Object(g.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							G.body && G.body.account && Object.assign(G.body.account, t)
						}
						if (Y && Y.ok) {
							const {
								data: t
							} = Y.body;
							if (t.postInfoById && gt.includes(t.postInfoById.__typename) && (G.body.posts[e] = {
									...G.body.posts[e],
									...t.postInfoById
								}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const e = t.postInfoById.subreddit.detectedLanguage;
								Object(it.d)(b) && e && Object(ot.f)(b) && await Object(nt.a)(e, r);
								const {
									id: s,
									isEligibleForContentBlocking: n
								} = t.postInfoById.subreddit;
								r(Object(w.a)({
									subredditAboutInfo: {
										[s]: {
											isEligibleForContentBlocking: n
										}
									}
								}))
							}
						}
						const n = Object(F.a)(G.body, e, b);
						G.body.posts && G.body.posts[e] && o && (G.body.posts[e].media ? G.body.posts[e].media.markdownContent = o : G.body.posts[e].media = {
							markdownContent: o
						});
						const {
							postMeta: i
						} = G.body;
						G.body.posts[e] = {
							...G.body.posts[e],
							isRobotIndexable: Object(st.a)(i, e)
						}, r(lt({
							key: f,
							postId: e,
							meta: b.meta,
							governance: Q,
							shouldCollapse: n,
							...G.body
						}))
					} {
						const n = Object(te.G)(d(), {
							postId: e
						});
						n && G.body.comments && Object.keys(G.body.comments).length < n.numComments ? r(vt(e, t, s)) : G.ok && r(Ct({
							key: f
						}));
						const o = Object(J.i)(b) ? le.a.COMMENTS_OVERLAY : le.a.COMMENTS;
						r(Object(ie.b)(o))
					}
					if (G.ok) {
						r(N.g(f));
						const t = Object(te.G)(d(), {
								postId: e
							}),
							s = Object.keys(G.body.comments);
						if (r(P.z(t, T.a.CommentsView)), Object(ee.h)(d(), {
								subredditId: t.belongsTo.id
							}) && r(Object(y.a)({
								commentIds: s,
								postIds: [e]
							})), t && "subreddit" === t.belongsTo.type && G.body.comments) {
							const e = Object(me.i)(() => r(Object(O.a)({
								commentIds: s,
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: D,
								isLoggedIn: !S
							});
							await e
						}
					} else {
						let e;
						v && (r(Object(a.subredditPending)({
							key: f
						})), e = await Object(ce.a)("subreddit", () => Object(x.a)(c.apiContext(), v, {})), r(Object(k.n)(e.status)), r(Object(a.handleSubredditPageApiError)(e, v))), r(mt({
							error: G.error,
							key: f,
							...e ? e.body : G.body
						}))
					}
				}, Ct = Object(oe.a)(Qe.g), vt = (e, t, s) => async (n, o, r) => {
					var i, a;
					const d = Object(re.a)(e, t, s),
						c = o(),
						m = Object(ne.Q)(c),
						u = Object(ne.k)(c),
						b = null === (a = null === (i = Object(J.b)(o())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						x = Object(p.a)(r.apiContext(), e, t, s, Object(H.a)(c), Ge(c)),
						f = m && u && Object(g.d)(r.gqlContext(), Object(U.e)(u)) || null,
						C = Object(me.i)(() => h(r.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: m,
							page: b
						}),
						[v, E, y] = await Promise.all([x, f, C]);
					if (v.ok) {
						if (E && E.ok) {
							const {
								data: e
							} = E.body, t = {
								karma: {
									...g.a
								}
							};
							if (Object(g.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							v.body && v.body.account && Object.assign(v.body.account, t)
						}
						if (y && y.ok) {
							const {
								data: t
							} = y.body;
							v.body.posts[e] = {
								...v.body.posts[e],
								...t.postInfoById
							}
						}
						const t = Object(F.a)(v.body, e, c);
						n(lt({
							key: d,
							postId: e,
							meta: c.meta,
							shouldCollapse: t,
							...v.body
						})), n(Ct({
							key: d
						}));
						const s = o().posts.models[e],
							r = s && Object(te.U)(o(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object($.a)(c, {
							subredditId: r.id
						}) && n(Object(l.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && v.body.comments && await n(Object(O.a)({
							commentIds: Object.keys(v.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(mt({
						error: v.error,
						key: d,
						...v.body
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
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(n.a)(o.a),
				i = Object(n.a)(o.b)
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = s.n(n);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
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
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: o
				} = e, {
					source: d,
					callToAction: l,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let p = d.displayText;
				return d.displayText.length >= 40 && (p = d.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: c.a.leftSideContent
				}, m && !o && r.a.createElement("span", {
					className: c.a.caption,
					title: m
				}, m), r.a.createElement(a.a, {
					href: d.url.replace(n.a.redditUrl, ""),
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...s
				} = e;
				return o.a.createElement(i.b, c({
					className: Object(r.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: s.isNotCardView
					})
				}, s))
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/selectors/experiments/commentBox.ts"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				u = s.n(p);

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
				x = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				g = Object(i.b)(x),
				f = e => {
					let {
						isCommentBoxDesignEnabled: t,
						isTopLevelComment: s,
						children: n
					} = e;
					return r.a.createElement("div", {
						className: Object(m.a)(u.a.spacer, {
							[u.a.isCommentBoxDesign]: t,
							[u.a.isTopLevelComment]: s
						})
					}, n)
				},
				C = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				v = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				O = e => r.a.createElement(f, e, e.isCommentBoxDesignEnabled ? r.a.createElement(v, null) : r.a.createElement(C, null), r.a.createElement(d.a, {
					className: u.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				E = g(O),
				y = Object(n.a)({
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
				j = e => r.a.createElement(y, b({}, e, {
					fallback: r.a.createElement(E, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = j
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
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
			t.a = Object(d.c)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: n,
					openLoginModal: d,
					openRegisterModal: m,
					origin: b,
					sendEvent: h
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, p.a.Wrapper, {
						[p.a.LiveStreamingWrapper]: s
					})
				}, o.a.createElement("span", {
					className: Object(r.a)(p.a.Copy, {
						[p.a.LiveStreamingCopy]: s
					})
				}, u._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), o.a.createElement("div", {
					className: p.a.CTAButtons
				}, o.a.createElement(c.t, {
					className: p.a.LoginLink,
					kind: c.b.ExternalLink,
					priority: c.c.Secondary,
					href: Object(a.a)(n, b, "/login"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), h(Object(l.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, u._("Log In", null, {
					hk: "ZR3pC"
				})), o.a.createElement(c.t, {
					className: Object(r.a)(p.a.SignupLink, {
						[p.a.LiveStreamingSignupLink]: s
					}),
					kind: c.b.ExternalLink,
					priority: c.c.Primary,
					href: Object(a.a)(n, b, "/register"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), m(), h(Object(l.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, u._("Sign Up", null, {
					hk: "48wH4o"
				}))))
			})
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/comment/moderation.ts"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = s("./src/reddit/icons/svgs/Show/index.tsx"),
				g = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				f = s.n(g);
			const C = b.a.wrapped(x.a, "Show", f.a);
			var v = e => o.a.createElement(h.g, null, !e.comment.isApproved && o.a.createElement(h.e, {
				displayText: e.comment.approvedBy ? u.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : u.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, o.a.createElement(h.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.e, {
				displayText: e.comment.isRemoved ? u.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : u.fbt._("Remove", null, {
					hk: "3tYl0U"
				}),
				onClick: e.onRemoveComment
			}, o.a.createElement(h.i, null)), o.a.createElement(h.e, {
				displayText: e.comment.isSpam ? u.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : u.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, o.a.createElement(h.j, null)), o.a.createElement(h.e, {
				displayText: e.comment.isLocked ? u.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : u.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, o.a.createElement(h.h, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(h.e, {
				displayText: u.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, o.a.createElement(C, null)));
			const O = b.a.wrapped(l.a, "StyledDropdown", f.a),
				E = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				y = Object(r.b)(E, (e, t) => {
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
				j = Object(d.a)(O),
				k = y(Object(c.c)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						onApproveComment: n,
						onLockComment: r,
						onRemoveComment: i,
						onSpamComment: a,
						onShowComment: d,
						sendEvent: c,
						tooltipId: l
					} = e;
					return o.a.createElement(j, {
						isOpen: s,
						tooltipId: l
					}, o.a.createElement(v, {
						onApproveComment: () => {
							n(), c(Object(m.c)("approve", t.id))
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
			t.a = k
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
			var n, o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/components/LottieAnimation/index.tsx"),
				c = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				l = s.n(c);
			! function(e) {
				e.Lottie = "lottie"
			}(n || (n = {}));
			const m = {
				threshold: [.75, .001]
			};
			t.b = i.a.memo(e => {
				const t = Object(r.useRef)(null),
					[s, c] = Object(r.useState)(!1),
					p = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && c(!1), t <= .001 && c(!0)
						})
					}, []);
				Object(a.a)(t, p, m);
				const u = e.type;
				return i.a.createElement("div", {
					className: Object(o.a)(l.a.effectContainer, l.a[u + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, u === n.Lottie && i.a.createElement(d.a, {
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
				SupporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				supporterRing: "_2I86011VPvZ-uDOUp1zvd-",
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/models/PostDraft/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/makeDraftKey/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/actions/comment/index.ts"),
				u = s("./src/reddit/actions/comment/authoring.ts"),
				b = s("./src/reddit/actions/comment/moderation.ts"),
				h = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				x = s("./src/reddit/icons/fonts/helpers.tsx");
			var g = e => r.a.createElement("i", {
					className: Object(c.a)(Object(x.b)("expand", e.isFilled), e.className)
				}),
				f = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				C = s.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O, E, y = s("./node_modules/lodash/defer.js"),
				j = s.n(y),
				k = s("./src/lib/lessComponent.tsx"),
				P = s("./src/reddit/actions/tooltip.ts"),
				I = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./src/reddit/actions/gold/modals.ts"),
				w = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/helpers/correlationIdTracker.ts"),
				T = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				L = s("./src/reddit/helpers/trackers/lightbox.ts"),
				R = s("./src/reddit/models/Comment/index.ts"),
				M = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/comments.ts"),
				A = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				B = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				D = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				K = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				G = s.n(K);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(O || (O = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(E || (E = {}));
			const q = (e, t) => {
					const s = G.a[t],
						n = G.a[e];
					return Object(c.a)(s, n)
				},
				Y = e => Object(c.a)(G.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[G.a.isInOverlay]: e.isInOverlay,
					[G.a.isModModeEnabled]: e.isModModeEnabled,
					[G.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var Q = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				z = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				J = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				X = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				Z = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				$ = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ee = s("./src/reddit/components/OverflowMenu/index.tsx"),
				te = s("./src/reddit/components/ReportFlow/index.tsx"),
				se = s("./src/reddit/components/ReportFlow/new.tsx"),
				ne = s("./src/reddit/components/ShareMenu/index.tsx"),
				oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				re = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ie = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				ae = s("./src/reddit/helpers/trackers/modTools.ts"),
				de = s("./src/reddit/layout/row/Inline/index.tsx"),
				ce = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				le = s("./src/reddit/icons/fonts/index.tsx"),
				me = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				pe = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				ue = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				be = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				he = s("./src/reddit/icons/fonts/Report/index.tsx"),
				xe = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				ge = s.n(xe);
			const fe = k.a.wrapped(me.a, "CommentIcon", ge.a),
				Ce = k.a.wrapped(he.a, "Report", ge.a),
				ve = k.a.wrapped(ue.a, "IgnoreReport", ge.a),
				Oe = k.a.wrapped(Z.a, "ModActionsMenu", ge.a),
				Ee = k.a.div("OverflowMenuSpacer", ge.a),
				ye = k.a.wrapped(ee.a, "DropdownRow", ge.a),
				je = k.a.wrapped(de.a, "Flatlist", ge.a),
				ke = k.a.button("Button", ge.a),
				Pe = k.a.wrapped(Q.a, "ModToolsFlatlist", ge.a),
				Ie = k.a.wrapped(re.a, "ViewReportsDropdown", ge.a),
				_e = e => `Comment-${e}--Modal--DeleteComment`,
				we = e => `Distinguish--Dropdown--${e}`,
				Se = e => `${e}-overflow-menu`,
				Ne = e => `View--Reports--${e}`,
				Te = Object(a.c)({
					claimedFreeAward: D.b,
					currentUser: W.k,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(M.a)(e) === _e(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(I.b)(we(s.id))(e)
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
						return Object(F.D)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(I.b)(Ne(s.id))(e)
					},
					isLoggedIn: W.Q,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(V.A)(e, {
							postId: s.postId
						})
					},
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(V.w)(e, {
							postId: s.postId
						}) && Object(A.a)(e)
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(V.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(V.B)(e, {
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
						var n, o;
						return (null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === s.id
					},
					sendRepliesToggled: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.J)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(U.w)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(V.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: B.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(V.G)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isTrueblockPCBlockeeEnabled: A.d,
					isParentCommentsAuthorBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.C)(e, {
							commentId: s.id
						})
					}
				});
			class Le extends r.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(L.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ae.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ae.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(ae.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(N.d)(N.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(ae.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(ae.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ae.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? R.a.UNFOLLOWED : R.a.FOLLOWED), t(n ? Object(ae.f)("follow", s.id) : Object(ae.a)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ae.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? r.a.createElement(se.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: te.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : r.a.createElement(te.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: te.b,
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
						depth: d,
						handleReply: l,
						isAvatarsInCommentsEnabled: m,
						isFollowed: p,
						isLoggedIn: u,
						isPendingDeletion: b,
						onDistinguishComment: h,
						onIgnoreReports: x,
						onToggleReportsDropdown: g,
						moderatorPermissions: f,
						modModeEnabled: C,
						postIsArchived: v,
						postAuthorIsBlocked: y,
						isBlockedUserBannerEnabled: k,
						postIsLocked: P,
						renderedInOverlay: I,
						sendEvent: _,
						subreddit: w,
						subredditAboutInfo: S,
						toggleDeleteCommentModal: N,
						toggleSendReplies: L,
						trackCommentClick: M,
						isPostUnrepliable: F,
						isTrueblockPCBlockeeEnabled: A,
						isParentCommentsAuthorBlocked: B
					} = this.props, D = Object(T.a)(f), V = !!s && s.displayText === e.author, U = !!s && s.isEmployee, W = A && e.unrepliableReason, K = A && F, G = !(B && A) && !(y && A) && !(Object(R.g)(e) && A) && !(F && A) && !W && !K && !(S && S.userIsBanned) && (P || v || y && k || D && u || e.isLocked ? D && u : u || m), Q = Object($.a)(e), Z = D && V && !e.bannedBy, te = V && U && !e.bannedBy, se = Z || te, oe = !(Object(R.g)(e) && A) && s && e.isGildable && !K && !(W && "[deleted]" === e.author), re = !v && !W, de = [];
					G && de.push(r.a.createElement(ke, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), j()(() => M("reply", e.id)())
						}
					}, r.a.createElement(fe, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), oe && de.push({
						breakpointGroup: E.LoggedInUser,
						icon: r.a.createElement(ce.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => n.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), de.push(r.a.createElement(ne.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: i,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == w ? void 0 : w.type
					}, r.a.createElement(ke, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), V || de.push({
						breakpointGroup: E.LoggedInUser,
						icon: r.a.createElement(he.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), de.push({
						breakpointGroup: E.LoggedInUser,
						icon: r.a.createElement(le.a, {
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
					}), V && de.push({
						breakpointGroup: E.LoggedInUser,
						icon: r.a.createElement(le.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), re && de.push({
						breakpointGroup: E.LoggedInUser,
						icon: r.a.createElement(le.a, {
							name: "notification",
							isFilled: p
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: p ? () => n.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => n.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const me = de.map(e => r.a.isValidElement(e) ? e : r.a.createElement(ke, {
							className: q(e.breakpointGroup, O.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						ue = de.map(e => r.a.isValidElement(e) ? null : r.a.createElement(ye, {
							className: q(e.breakpointGroup, O.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: ge.a.dropdownRowText
						}, e.icon));
					return r.a.createElement(o.Fragment, null, r.a.createElement(je, {
						className: Object(c.a)(Y({
							depth: d,
							isInOverlay: I,
							isModModeEnabled: D && C,
							isFollowCommentEnabled: re
						}), t)
					}, me, r.a.createElement(Ee, {
						className: V ? void 0 : q(E.LoggedInUser, O.HideIfVWLarger)
					}, r.a.createElement(ee.b, {
						className: ge.a.overflowMenu,
						disabled: b,
						dropdownId: Se(e.id),
						onClick: () => _(Object(ae.a)("comment_overflow_menu", e.id))
					}, ue, V && r.a.createElement(r.a.Fragment, null, r.a.createElement(ye, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: ge.a.dropdownRowText
					}, r.a.createElement(le.a, {
						name: "delete"
					})), r.a.createElement(ie.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: L,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && r.a.createElement(J.a, {
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
						toggleModal: N,
						trackClick: () => {},
						withOverlay: !0
					}), D && r.a.createElement(r.a.Fragment, null, C && r.a.createElement(Pe, {
						className: q(E.Moderator, O.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: V
					}), r.a.createElement(Oe, {
						className: C ? q(E.Moderator, O.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => _(Object(ae.a)("comment_mod_action_menu", e.id))
					}, r.a.createElement(be.a, null), r.a.createElement(H.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object($.c)(e) && !C && r.a.createElement(z.a, {
						text: `${Q}`,
						onClick: () => {
							g(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Ne(e.id)
					}, r.a.createElement(Ie, {
						model: e,
						onIgnoreReports: () => {
							x(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ne(e.id)
					}), e.ignoreReports ? r.a.createElement(ve, null) : r.a.createElement(Ce, null)), se && r.a.createElement(z.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, r.a.createElement(pe.a, null), r.a.createElement(X.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: U,
						isUserMod: D,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: we(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Re = Object(i.b)(Te, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(u.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(w.i)(_e(s.id))), e(Object(P.h)({
								tooltipId: Se(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(u.d)({
								commentId: s.id,
								draftKey: Object(l.a)(d.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: n
							}))
						},
						handleReply: () => n && e(Object(u.r)({
							parentCommentId: s.id,
							commentsPageKey: n
						})),
						onCommentFollow: t => e(Object(u.t)(s.id, t)),
						onDistinguishComment: (t, n) => e(Object(b.b)(s.id, t, n)),
						onFollowedCommentExpire: () => e(Object(p.n)({
							id: s.id,
							expiresAt: 0
						})),
						onGildClick: (t, n) => e(Object(_.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(b.g)(s.id)),
						onReportClick: () => e(Object(S.c)(s.id)),
						onToggleSave: () => e(Object(p.m)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(P.h)({
							tooltipId: we(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(P.h)({
							tooltipId: Ne(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(w.i)(_e(s.id))),
						toggleSendReplies: () => e(Object(u.l)(s.id))
					}
				})(Object(oe.c)(Le)),
				Me = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Fe = s.n(Me);
			var Ae = r.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return r.a.createElement("div", {
						className: Fe.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				Be = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				De = s.n(Be);
			var Ve = r.a.memo(e => r.a.createElement("div", {
					className: De.a.gradientHighlightContainer,
					role: "presentation"
				})),
				Ue = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				We = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				He = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Ke = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Ge = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				qe = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Ye = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Qe = s("./src/reddit/components/ModModeReports/index.tsx"),
				ze = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Je = s("./src/reddit/components/RichTextJson/index.tsx"),
				Xe = s("./src/reddit/components/UserIcon/index.tsx"),
				Ze = s("./src/reddit/components/UserIcon/constants.ts"),
				$e = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				et = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				tt = s("./src/reddit/constants/componentTestIds.ts"),
				st = s("./src/reddit/contexts/PageLayer/index.tsx"),
				nt = s("./src/reddit/contexts/Visibility.tsx"),
				ot = s("./src/reddit/controls/ErrorText/index.tsx"),
				rt = s("./src/reddit/controls/InternalLink/index.tsx"),
				it = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				at = s("./src/reddit/helpers/flair.ts"),
				dt = s("./src/reddit/models/Subreddit/index.ts"),
				ct = s("./src/reddit/models/User/index.ts"),
				lt = s("./src/reddit/models/Vote/index.ts"),
				mt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				pt = s("./src/reddit/selectors/commentSelector.ts"),
				ut = s("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				bt = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ht = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				xt = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				gt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ft = s("./src/reddit/selectors/poll/index.ts"),
				Ct = s("./src/reddit/selectors/userPrefs.ts"),
				vt = s("./src/reddit/selectors/moderatingComments.ts"),
				Ot = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Et = s.n(Ot),
				yt = s("./src/config.ts"),
				jt = s("./src/reddit/helpers/userSnoovatar/index.ts");

			function kt() {
				return (kt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Pt = 300,
				It = k.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return r.a.createElement("button", v({}, s, {
						className: Object(c.a)(t, C.a.expandButton)
					}), r.a.createElement(g, {
						className: C.a.expandIcon
					}))
				}), "ExpandButton", Et.a),
				_t = k.a.wrapped(Re, "FlatList", Et.a),
				wt = k.a.wrapped(ot.b, "ErrorText", Et.a),
				St = k.a.wrapped(Ke.a, "HorizontalVotes", Et.a),
				Nt = k.a.div("ActionBar", Et.a),
				Tt = k.a.wrapped(We.a, "TopMeta", Et.a),
				Lt = k.a.div("CommentContentWrapper", Et.a),
				Rt = k.a.wrapped(Ge.b, "AuthorHovercard", Et.a),
				Mt = Object(st.u)(),
				Ft = Object(i.b)(() => Object(a.c)({
					comment: (e, t) => Object(pt.b)(e, t),
					currentProfileModPermissions: st.h,
					depth: (e, t) => Object(F.j)(e, t),
					collapsed: vt.b,
					collapsedBecauseCrowdControl: vt.a,
					currentUser: W.k,
					flair: F.e,
					focused: (e, t) => !t.noFocus && Object(F.t)(e, t),
					highlightAnimationDisabled: Ct.c,
					isAdmin: W.K,
					isEditing: F.z,
					isLoggedIn: W.Q,
					isPendingDeletion: F.D,
					isPresenceConsumptionExpEnabled: ht.c,
					moderatorPermissions: (e, t) => {
						const s = Object(pt.b)(e, t);
						return s ? Object(gt.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: ft.f,
					modModeEnabled: st.U,
					errorMsgs: F.H,
					replyFormOpen: F.K,
					subreddit: st.r,
					subredditType: F.M,
					showNftSpecialtyTreatment: ut.b,
					hasSupporterRing: xt.a,
					isOnlineConsumptionLoadTest: ht.a,
					isOnlineUserPref: W.V,
					userIsBanned: (e, t) => {
						const s = Object(pt.b)(e, t);
						return !!s && Object(U.fb)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: bt.b,
					isBlockingInterstitialV2Enabled: bt.c
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: o,
						trackCommentClick: r
					} = t;
					return {
						onCollapseClick: () => e(Object(p.o)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: o
						})),
						onIgnoreReports: () => e(Object(b.g)(s)),
						onVoteClick: t => {
							const [n, o] = t === lt.a.upvoted ? [Object(p.q)(s), "upvote_comment"] : [Object(p.j)(s), "downvote_comment"];
							r(o, s)(), e(n)
						}
					}
				}),
				At = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Bt = e => r.a.createElement("div", e, e.children),
				Dt = e => r.a.createElement(r.a.Fragment, null, e.children),
				Vt = Mt(Ft(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: p,
						currentProfileModPermissions: b,
						currentUser: x,
						depth: g,
						errorMsgs: f,
						flair: C,
						flatlist: v,
						focused: O,
						hasAwardGradient: E,
						hasSupporterRing: y,
						highlightAnimationDisabled: j,
						highlightTreatment: k,
						index: P,
						isActive: I,
						isAdmin: _,
						isAvatarsInCommentsEnabled: w,
						isBlockingInterstitialEnabled: S,
						isBlockingInterstitialV2Enabled: N,
						isEditing: L,
						isFirstInList: M,
						isHighlighted: F,
						isLoggedIn: A,
						isOnlineConsumptionLoadTest: B,
						isOnlineUserPref: D,
						isPendingDeletion: V,
						isPresenceConsumptionExpEnabled: U,
						moderatorPermissions: W,
						modModeEnabled: H,
						noSpacing: K = !1,
						onCommentAuthorClick: G,
						onCommentTimestampClick: q,
						onCollapseClick: Y,
						onIgnoreReports: Q,
						onLineMouseOver: z,
						onPresenceIndicatorInViewport: J,
						onVoteClick: X,
						postId: Z,
						prediction: ee,
						renderedInOverlay: te,
						replyFormOpen: se,
						restrictHeight: ne,
						rtJSONRedditStyle: oe,
						showBlockingInterstitial: re,
						showNftSpecialtyTreatment: ie,
						subreddit: ae,
						subredditType: de,
						trackCommentClick: ce,
						userIconSmall: le,
						userIsBanned: me
					} = e, pe = m.isDeleted, ue = !L && !pe && !!f && f.length > 0, be = Object(l.a)(d.c.edit, m.id), he = Object(l.a)(d.c.replyToComment, m.id), xe = Object(T.a)(W), ge = Object(Ye.a)(m), fe = Object($.c)(m), Ce = m.authorIsContractor && de === dt.g.EmployeesOnly, ve = m.isLocked, Oe = xe && H, Ee = !L && !pe && (A || w), ye = w && !m.unrepliableReason, je = !!x && Object(ct.e)(x) === m.author, [ke, Pe] = Object(o.useState)(null), [Ie, _e] = Object(o.useState)(null), we = Object(o.useRef)(null), Se = Object(R.f)(m) || Object(R.g)(m), Ne = Se ? Bt : rt.default, Te = Object(R.f)(m) ? Dt : Rt;
					Object(o.useEffect)(() => {
						if (!L && !pe && (E && Pe(r.a.createElement(Ve, null)), null !== k)) {
							if (k.glowHexColor) {
								const e = k.glowHexColor;
								Pe(r.a.createElement(Ae, {
									hexColor: e
								}))
							}
							if (k.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = k.effectHighlight;
								_e(r.a.createElement(Ue.b, {
									prefersReducedAnimation: j,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [L, pe, E, j, k]);
					const Le = Object(nt.b)();
					(S || N) && Le && P >= bt.a - 1 && re();
					const Re = !pe && !Object(R.f)(m) && (!me || me && je) && !Object(R.g)(m) && A,
						Me = Object(o.useCallback)(() => {
							Re && U && !je && J && J(m.id)
						}, [m.id, J, Re, U, je]),
						Fe = Object(et.a)(m),
						Be = !!x && Object(ct.e)(x) === m.author ? null == x ? void 0 : x.accountIcon : m.profileImage,
						De = Object(jt.c)(Be),
						We = !(!De && !ie) && Object(jt.b)(Be);
					return r.a.createElement("div", {
						key: `comment-${m.id}`,
						className: Object(c.a)(`Comment ${m.id}`, Et.a.CommentWrapper, {
							[Et.a.highlightComment]: F,
							[Et.a.deleted]: pe,
							[Et.a.focused]: O,
							[Et.a.redesign]: w,
							[Et.a.topLevel]: !g,
							[Et.a.noSpacing]: K
						})
					}, ke, Ie, !L && !pe && M && r.a.createElement("div", {
						className: Et.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${yt.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), r.a.createElement(It, {
						className: Object(c.a)(m.id, {
							[Et.a.hidden]: !i,
							[Et.a.visible]: i
						}),
						onClick: () => {
							s(), Y(), ce("collapse", m.id)()
						},
						onMouseOver: () => z(m.id),
						onMouseOut: s
					}), r.a.createElement(Te, {
						alwaysShowChildren: !0,
						collapsed: i,
						hoverDivClassName: Et.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(R.g)(m),
						postOrComment: m,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: te ? ze.c.Lightbox : void 0
					}, r.a.createElement(Ne, {
						className: Object(c.a)(Et.a.UserIconContainer, le && Et.a.UserIconContainerSmall),
						"data-testid": Se ? void 0 : "comment_author_icon",
						onClick: Se ? void 0 : G,
						to: `/user/${m.author}/`
					}, Le ? r.a.createElement(r.a.Fragment, null, y && !We && r.a.createElement("div", {
						className: Et.a.supporterRing
					}), r.a.createElement(Xe.a, {
						isNft: We,
						className: Object(c.a)(Et.a.UserIcon, {
							[Et.a.v1NftTreatment]: De
						}),
						iconUrl: Be,
						isNSFW: m.profileOver18 || !1,
						nsfwIconUrl: Ze.a,
						userName: m.author,
						isHighlighted: F,
						shouldShowPresenceIndicator: Re && U,
						onPresenceIndicatorInViewport: Me,
						isCommentAuthorBlocked: Object(R.g)(m),
						collapsed: i,
						shouldUseOnlineOverride: je,
						isOnlineOverrideValue: D,
						isOnlineStatusLoadTest: Re && B,
						authorId: m.authorId
					})) : r.a.createElement("div", {
						className: Et.a.UserIcon
					}))), r.a.createElement(Lt, {
						className: Object(c.a)({
							[Et.a.isActive]: I,
							[Et.a.isCollapsed]: i,
							[Et.a.isLocked]: ve && Oe,
							[Et.a.isPendingDeletion]: V,
							[Et.a.isRemoved]: !!m.bannedBy && Oe || m.isDeleted && _
						})
					}, r.a.createElement(it.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", g + 1)], {
						hk: "2XnyAV"
					})), r.a.createElement(Tt, {
						userHasNft: We,
						childrenInfo: t,
						className: Object(c.a)({
							[Et.a.collapsed]: i,
							[Et.a.noFlair]: Object(at.o)(C || null)
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: p,
						flair: C,
						isAdmin: _,
						isPostComment: !0,
						onCommentAuthorClick: G,
						onCommentTimestampClick: q,
						renderedInOverlay: te,
						renderContractorBadge: Ce
					}), !i && r.a.createElement(o.Fragment, null, L && r.a.createElement(h.a, {
						className: Object(c.a)(Et.a.EditCommentForm, Et.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: p,
						depth: g,
						draftType: d.c.edit,
						draftKey: be,
						postId: Z,
						rtJson: Object(et.a)(m),
						mediaMetadata: m.media && m.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						submitAction: e => Object(u.j)({
							id: m.id,
							commentsPageKey: p,
							draftKey: be,
							formData: e
						}),
						submitButtonText: n.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !L && (!pe || _) && r.a.createElement("div", {
						"data-testid": tt.d,
						ref: we,
						className: Object(c.a)(Et.a.CommentBody, {
							[Et.a.restrictHeight]: !(!ne || !we.current) && we.current.clientHeight > Pt
						})
					}, ee ? r.a.createElement(He.a, {
						comment: m,
						prediction: ee
					}) : r.a.createElement(Je.a, {
						content: Fe,
						mediaMetadata: m.media && m.media.mediaMetadata,
						redditStyle: oe,
						rtJsonElementProps: At(e)
					}), r.a.createElement(mt.b, {
						content: Fe
					})), H && xe && ge && r.a.createElement(qe.a, {
						thing: m
					}), H && xe && fe && r.a.createElement(Qe.a, {
						onIgnoreReports: Q,
						reportable: m
					}), null != v ? v : Ee && r.a.createElement(Nt, null, ye && r.a.createElement(St, {
						downvoteButtonClassName: Et.a.voteButton,
						downvoteClassName: Et.a.upDownVote,
						model: m,
						onVoteClick: X,
						scoreClassName: Et.a.score,
						upvoteButtonClassName: Et.a.voteButton,
						upvoteClassName: Et.a.upDownVote
					}), r.a.createElement(_t, {
						comment: m,
						commentsPageKey: p,
						depth: g,
						isAvatarsInCommentsEnabled: w,
						collapsedBecauseCrowdControl: a,
						modModeEnabled: H,
						moderatorPermissions: b || W,
						renderedInOverlay: te,
						isCommentFocused: O,
						subreddit: ae,
						trackCommentClick: ce
					})), ue && f.map(e => r.a.createElement(wt, {
						key: e
					}, e)), se && r.a.createElement(h.a, {
						className: Object(c.a)(Et.a.EditCommentForm, Et.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: p,
						depth: g,
						draftType: d.c.replyToComment,
						draftKey: he,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						postId: Z,
						submitAction: (e, t) => {
							let {
								validate: s,
								...n
							} = e;
							return s ? Object(u.u)({
								commentsPageKey: p,
								draftKey: he,
								parentCommentDepth: g,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							}) : Object(u.n)({
								commentsPageKey: p,
								draftKey: he,
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
			t.a = e => r.a.createElement($e.a.Consumer, null, t => r.a.createElement(Vt, kt({}, e, {
				trackCommentClick: t
			})))
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
				return w
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "f", (function() {
				return L
			})), s.d(t, "a", (function() {
				return H
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/times.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/pages/comments.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/describeApiError/index.ts"),
				h = s("./src/reddit/helpers/path/index.ts"),
				x = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				g = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				C = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				v = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				O = s("./src/reddit/components/Comments/States/index.m.less"),
				E = s.n(O);
			const y = l.a.wrapped(C.a, "CommentsIcon", E.a),
				j = l.a.wrapped(v.a, "SnooFacepalm", E.a),
				k = l.a.p("EmptyTitle", E.a),
				P = l.a.p("ErrorTitle", E.a),
				I = l.a.p("EmptyText", E.a),
				_ = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(E.a.StateContainer, t)
					}, a.a.createElement(y, null), a.a.createElement(k, null, s ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), a.a.createElement(I, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				w = () => a.a.createElement("div", {
					className: E.a.StateContainer
				}, a.a.createElement(y, null), a.a.createElement(k, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(I, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: E.a.StateContainer
					}, a.a.createElement(y, null), a.a.createElement(k, null, n.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), a.a.createElement(u.n, {
						to: Object(h.b)(t)
					}, n.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				N = Object(d.b)(null, (e, t) => {
					let {
						postId: s,
						commentId: n,
						sort: o
					} = t;
					return {
						onClick: () => e(Object(m.commentsPageDataRequested)(s, n, {
							sort: o
						}, o))
					}
				})(e => {
					let {
						apiError: t,
						onClick: s
					} = e;
					return a.a.createElement("div", {
						className: E.a.StateContainer
					}, a.a.createElement(j, null), a.a.createElement(P, null, t ? Object(b.a)({
						apiError: t,
						isLoggedOut: !1
					}) : n.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), a.a.createElement(u.l, {
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
						apiError: o
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(E.a.StateContainer, E.a.ErrorFullPage)
					}, a.a.createElement(N, {
						postId: t,
						commentId: s,
						sort: n,
						apiError: o
					}))
				},
				L = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(p.a, null))
				}, "LoadingFullPage", E.a),
				R = l.a.div("CommentsPlaceholderContainer", E.a),
				M = l.a.div("CommentPlaceholder", E.a),
				F = l.a.div("Avatar", E.a),
				A = l.a.div("VoteColumn", E.a),
				B = l.a.div("TextColumn", E.a),
				D = l.a.wrapped(f.b, "Upvote", E.a),
				V = l.a.wrapped(g.a, "Downvote", E.a),
				U = () => a.a.createElement("div", {
					className: Object(c.a)(E.a.TopMetaPlaceholder, Object(x.a)({
						isLoading: !0
					}))
				}),
				W = () => a.a.createElement("div", {
					className: Object(c.a)(E.a.CommentBodyPlaceholder, Object(x.a)({
						isLoading: !0
					}))
				}),
				H = e => a.a.createElement(R, null, r()(10, t => a.a.createElement(M, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(F, {
					className: Object(x.a)({
						isLoading: !0
					})
				}) : a.a.createElement(A, null, a.a.createElement(D, null), a.a.createElement(V, null)), a.a.createElement(B, null, a.a.createElement(U, null), a.a.createElement(W, null)))))
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
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			}));
			let n = {};

			function o(e) {
				return e in n
			}

			function r(e) {
				n[e] = !0
			}

			function i() {
				n = {}
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
			var n = s("./node_modules/lodash/debounce.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/isEqual.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				h = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/actions/comment/index.ts"),
				g = s("./src/reddit/constants/comments.ts"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/constants/elementClassNames.ts"),
				v = s("./src/reddit/constants/gold.ts"),
				O = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx");
			const E = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: y,
							effectHighlight: {
								type: O.a.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				y = "ff0000";

			function j(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						n = Math.floor(Math.random() * s.length);
					return s[n] || null
				}(e ? function(e) {
					return e.map(P).filter(e => e !== k)
				}(e) : [])
			}
			const k = {
				glowHexColor: null,
				effectHighlight: null
			};

			function P(e) {
				for (const t of E) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return k
			}
			var I = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				_ = s("./src/reddit/selectors/comments.ts"),
				w = s("./src/reddit/selectors/commentSelector.ts"),
				S = s("./src/reddit/selectors/communityAwards.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				R = s("./src/reddit/components/Comments/Comment/index.tsx"),
				M = s("./src/lib/scroll/index.ts"),
				F = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				A = s("./src/reddit/contexts/InsideOverlay.tsx"),
				B = s("./src/reddit/helpers/path/index.ts"),
				D = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				V = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				U = s.n(V);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), H = u.a.wrapped(D.a, "ArrowRight", U.a), K = u.a.wrapped(F.a, "LinkOrOverlayLink", U.a), G = u.a.span("HoverSpan", U.a), q = Object(l.c)({
				permalink: (e, t) => Object(_.m)(e, {
					commentId: Object(_.r)(e, t).parentId
				})
			});
			var Y = Object(c.b)(q)(Object(A.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return d.a.createElement("div", {
						className: Object(m.a)(U.a.Wrapper, {
							[U.a.isActive]: t
						})
					}, d.a.createElement(K, {
						isOverlay: !!s,
						to: Object(B.b)(n),
						onClick: M.b
					}, d.a.createElement(G, null, W._("Continue this thread", null, {
						hk: "3eplK8"
					})), " ", d.a.createElement(H, null)))
				})),
				Q = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				z = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				J = s.n(z);
			const {
				fbt: X
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Z = u.a.div("MoreCommentsItemWrapper", J.a), $ = u.a.p("MoreComments", J.a), ee = u.a.wrapped($, "MoreCommentsInteractive", J.a), te = Object(l.c)({
				moreCommentsItem: _.E,
				moreCommentsPending: _.F
			});
			var se = Object(c.b)(te, (e, t) => ({
					moreCommentsClicked: () => e(Object(x.l)(t.commentsPageKey, t.moreCommentsId))
				}))(e => {
					const {
						isActive: t,
						moreCommentsClicked: s,
						moreCommentsItem: n,
						moreCommentsPending: o
					} = e;
					return d.a.createElement(Z, null, o ? d.a.createElement($, null, X._("loading...", null, {
						hk: "47z89"
					})) : d.a.createElement(Q.a.Consumer, null, e => d.a.createElement(ee, {
						className: Object(m.a)({
							[J.a.isActive]: t
						}),
						onClick: () => {
							s(), e("load_more_comment")()
						}
					}, X._({
						"*": "{number of more replies hidden} more replies",
						_1: "1 more reply"
					}, [X._plural(null == n ? void 0 : n.numComments, "number of more replies hidden")], {
						hk: "J0jQW"
					}))))
				}),
				ne = s("./node_modules/lodash/times.js"),
				oe = s.n(ne),
				re = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				ie = s.n(re);
			const ae = u.a.wrapped(e => d.a.createElement("div", e, d.a.createElement("i", {
					className: C.m
				})), "Line", ie.a),
				de = u.a.div("LineContainer", ie.a),
				ce = u.a.div("ShortLineContainer", ie.a);
			var le = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: n,
						onLineClick: o,
						onLineMouseOver: r,
						onLineMouseOut: i,
						onShortLineClick: a,
						parentNodeIds: c,
						type: l
					} = e;
					return d.a.createElement(de, null, oe()(s + 1, e => e === s ? l !== g.a.Comment || t ? null : d.a.createElement(ce, {
						key: c[e]
					}, d.a.createElement(ae, {
						className: Object(m.a)(c[e], {
							[ie.a.hasGlowBorder]: !!n,
							[ie.a.topLevel]: 0 === s
						}),
						onClick: a,
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})) : d.a.createElement(ae, {
						className: c[e],
						key: c[e],
						onClick: o(e),
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})))
				},
				me = s("./src/reddit/contexts/Visibility.tsx"),
				pe = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				ue = s("./src/reddit/selectors/moderatingComments.ts"),
				be = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				he = s.n(be);
			const xe = u.a.div("CommentListNodeWrapper", he.a),
				ge = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(C.f)
				},
				fe = () => {
					const e = document.querySelectorAll(`.${C.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(C.f)
				};
			var Ce = Object(c.b)(() => Object(l.c)({
				collapsed: (e, t) => {
					let {
						commentLink: s,
						commentsPageKey: n
					} = t;
					return Object(ue.b)(e, {
						commentId: s.id,
						commentsPageKey: n
					})
				},
				commentListNode: (e, t) => Object(_.l)(e, t),
				depth: (e, t) => Object(_.j)(e, t),
				highlightTreatment: (e, t) => {
					let {
						commentLink: s
					} = t, n = null;
					const o = Object(_.l)(e, {
						commentLink: s
					});
					if (o && s.type === g.a.Comment) {
						n = j(o.treatmentTags)
					}
					return n
				},
				isActive: (e, t) => {
					let {
						commentLink: s
					} = t;
					return !!e.shortcuts.activeCommentId && s.id === e.shortcuts.activeCommentId
				},
				isAvatarsInCommentsEnabled: pe.a,
				isAwarded: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(_.l)(e, {
						commentLink: s
					});
					return !(s.type !== g.a.Comment || !n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const s = Object(S.a)(e, t);
						return s && s.coinPrice >= v.g
					})
				},
				isHighlighted: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(_.p)(e);
					if (n === I.a.None) return !1;
					if (s.type !== g.a.Comment) return !1;
					const o = s.id,
						r = Object(w.b)(e, {
							commentId: o
						});
					if (!r) return !1;
					const i = Object(L.v)(e),
						a = !!Object(N.m)(e, {
							postId: r.postId
						}),
						d = Object(T.G)(e, {
							postId: r.postId
						});
					if (!d || !d.previousVisits || d.previousVisits.length < 1) return !1;
					const c = n === I.a.Last ? d.previousVisits[d.previousVisits.length - 1] : d.previousVisits[0];
					return (a || i) && r.created > c
				}
			}), (e, t) => {
				let {
					commentLink: s,
					commentsPageKey: n,
					scrollToAndRemeasure: o
				} = t;
				return {
					onLineClick: t => () => {
						e(Object(x.d)({
							commentLink: s,
							commentsPageKey: n,
							lineDepth: t,
							scrollToAndRemeasure: o
						}))
					},
					onShortLineClick: () => e(Object(x.o)({
						commentId: s.id,
						commentsPageKey: n,
						scrollToAndRemeasure: o
					}))
				}
			})(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: n,
					commentLink: o,
					commentsPageKey: r,
					depth: i,
					highlightTreatment: a,
					index: c,
					isActive: l,
					isAvatarsInCommentsEnabled: p,
					isAwarded: u,
					isFirstInList: b,
					isHidden: h,
					isHighlighted: x,
					onLineClick: C,
					onPresenceIndicatorInViewport: v,
					onShortLineClick: O,
					parentNodeIds: E,
					postId: y,
					renderedInOverlay: j,
					scrollToAndRemeasure: k,
					showBlockingInterstitial: P
				} = e, I = !!u, _ = !(!a || !a.glowHexColor), w = _ && i > 0, S = _, N = d.a.createElement(xe, {
					className: Object(m.a)(s, {
						[he.a.isHidden]: h,
						[he.a.glowBorderTopPadding]: w,
						[he.a.glowBorderBottomPadding]: S
					}),
					id: o.id,
					style: {
						paddingLeft: i * (f.w + f.v) + (o.type === g.a.Comment ? f.w : 0)
					},
					tabIndex: -1
				}, d.a.createElement(le, {
					collapsed: n,
					depth: i,
					hasGlowBorder: w,
					onLineClick: C,
					onLineMouseOver: ge,
					onLineMouseOut: fe,
					onShortLineClick: O,
					type: o.type,
					parentNodeIds: E
				}), ve({
					childrenInfo: t,
					clearHovered: fe,
					commentLink: o,
					commentsPageKey: r,
					onLineMouseOver: ge,
					hasAwardGradient: I,
					highlightTreatment: a,
					index: c,
					isActive: l,
					isAvatarsInCommentsEnabled: p,
					isFirstInList: b,
					isHighlighted: x,
					postId: y,
					renderedInOverlay: j,
					scrollToAndRemeasure: k,
					onPresenceIndicatorInViewport: v,
					showBlockingInterstitial: P
				}));
				return p && o.type === g.a.Comment ? d.a.createElement(me.a, null, N) : N
			});
			const ve = e => {
				let {
					childrenInfo: t,
					clearHovered: s,
					commentLink: n,
					commentsPageKey: o,
					hasAwardGradient: r,
					highlightTreatment: i,
					index: a,
					isActive: c,
					isAvatarsInCommentsEnabled: l,
					isFirstInList: m,
					isHighlighted: p,
					onLineMouseOver: u,
					postId: b,
					renderedInOverlay: h,
					scrollToAndRemeasure: x,
					onPresenceIndicatorInViewport: f,
					showBlockingInterstitial: C
				} = e;
				switch (n.type) {
					case g.a.Comment:
						return d.a.createElement(R.a, {
							childrenInfo: t,
							clearHovered: s,
							commentId: n.id,
							commentsPageKey: o,
							hasAwardGradient: r,
							highlightTreatment: i,
							index: a,
							isActive: c,
							isAvatarsInCommentsEnabled: l,
							isFirstInList: m,
							isHighlighted: p,
							onLineMouseOver: u,
							postId: b,
							renderedInOverlay: h,
							scrollToAndRemeasure: x,
							onPresenceIndicatorInViewport: f,
							showBlockingInterstitial: C
						});
					case g.a.MoreComments:
						return d.a.createElement(se, {
							commentsPageKey: o,
							isActive: c,
							moreCommentsId: n.id
						});
					case g.a.ContinueThread:
						return d.a.createElement(Y, {
							id: n.id,
							isActive: c
						})
				}
			};
			var Oe = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Ee = s("./src/reddit/components/Comments/States/index.tsx"),
				ye = s("./src/reddit/components/Scroller/Simple.tsx"),
				je = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ke = s("./src/reddit/constants/elementIds.ts"),
				Pe = s("./src/reddit/featureFlags/index.ts"),
				Ie = s("./src/reddit/helpers/commentList/index.ts"),
				_e = s("./src/reddit/helpers/trackers/comment.ts"),
				we = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Se = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ne = s("./src/telemetry/index.ts"),
				Te = s("./src/lib/LRUCache/index.ts"),
				Le = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				Re = s("./src/reddit/selectors/telemetry.ts");
			const Me = e => t => ({
				...Object(Re.n)(t),
				source: "post_detail",
				action: "view",
				noun: "few_comments",
				actionInfo: Object(Re.d)(t, {
					reason: String(e)
				})
			});
			var Fe = s("./src/reddit/components/Comments/index.m.less"),
				Ae = s.n(Fe);
			const Be = f.f + 10,
				De = 65,
				Ve = u.a.wrapped(ye.b, "Scroller", Ae.a),
				Ue = Object(l.c)({
					allCollapsed: _.a,
					commentLinks: _.k,
					commentThreadLinkSet: _.o,
					measureScrollFPS: Pe.d.measureScrollFPS,
					moreComments: _.b,
					postPermalink: T.F
				}),
				We = Object(c.b)(Ue, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(b.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(x.e)(t)),
					onCommentLeftViewport: (t, s) => e(Object(x.h)(t, s)),
					showModalOnCommentsScroll: t => e(Object(h.ab)(Object(B.b)(t)))
				})),
				He = new Te.a(500),
				Ke = new Te.a(500),
				Ge = (e, t) => {
					const s = `entered-${e}`;
					let n = He.get(s);
					return void 0 === n && (n = () => {
						t(e)
					}, He.set(s, n)), n
				},
				qe = (e, t) => {
					const s = `left-${e}`;
					let n = Ke.get(s);
					return void 0 === n && (n = s => {
						t(e, s)
					}, Ke.set(s, n)), n
				};
			class Ye extends d.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: s
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const n = s[e.id].depth,
							o = t.findIndex(t => t.id === e.id);
						if (0 === n || 0 === o) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const r = t[o - 1],
							i = this.parentNodeIdsMap[r.id].slice();
						return this.parentNodeIdsMap[e.id] = i.filter(e => !!s[e] && s[e].depth < n), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.onPresenceIndicatorInViewport = e => {
						this.state.isPresenceEventSent || (this.setState({
							isPresenceEventSent: !0
						}), this.props.sendEvent(Object(_e.b)(e)))
					}, this.showBlockingInterstitial = o()(() => {
						this.state.isBlockingModalShowed || (this.setState({
							isBlockingModalShowed: !0
						}), this.props.showModalOnCommentsScroll(this.props.postPermalink))
					}, p.K, {
						leading: !0,
						maxWait: 1e3
					}), this.parentNodeIdsMap = {}, Oe.c(), this.childrenInfoMap = {}, this.state = {
						isPresenceEventSent: !1,
						isBlockingModalShowed: !1
					}
				}
				UNSAFE_componentWillMount() {
					const {
						commentLinks: e,
						allCollapsed: t,
						commentThreadLinkSet: s,
						moreComments: n
					} = this.props;
					this.timerId && Ne.c.cancel(this.timerId), e.length && (this.timerId = Ne.c.start()), this.findHiddenNodes(e, t, s, n)
				}
				componentDidMount() {
					this.timerId && Object(Ne.b)(p.m.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Ne.c.end(this.timerId)
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks), this.props.commentLinks.length < Se.a && this.props.sendEvent(Me(this.props.commentLinks.length))
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: n,
						commentThreadLinkSet: o,
						moreComments: r
					} = e;
					(s !== this.props.commentsPageKey || n.length > this.props.commentLinks.length || !i()(t, this.props.allCollapsed)) && this.findHiddenNodes(n, t, o, r)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: n
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !i()(e.allCollapsed, n) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && Ne.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = Ne.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(Ne.b)(p.m.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Ne.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && Ne.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let o = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					Oe.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						o && (s[c.id].depth > r ? (Oe.a(c.id), i += Object(Ie.d)(c, n), c.type === g.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[o] = {
							numChildren: i,
							hasContinueThread: a
						}, o = null, r = 1 / 0, i = 0, a = !1)), !o && t[c.id] && (o = c.id, r = s[c.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: s,
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o,
						postId: r,
						renderedInOverlay: i
					} = this.props, a = Ge(e.id, n), c = qe(e.id, o);
					return {
						estHeight: Oe.b(e.id) ? 0 : De,
						id: e.id,
						trackOnEnteredViewport: a,
						trackOnExitedViewport: c,
						render: n => {
							let {
								placeholderRecommended: o,
								height: a,
								width: c,
								scrollToAndRemeasure: l
							} = n;
							return o ? d.a.createElement("div", {
								style: {
									height: a,
									backgroundColor: "#fff"
								}
							}) : d.a.createElement(Ce, {
								key: `comment-list-node-${e.id}`,
								childrenInfo: this.getChildrenInfo(e.id),
								commentLink: e,
								commentsPageKey: s,
								id: e.id,
								index: t,
								isFirstInList: 0 === t,
								isHidden: Oe.b(e.id),
								postId: r,
								scrollToAndRemeasure: l,
								renderedInOverlay: !!i,
								parentNodeIds: this.getParentNodeIds(e),
								onPresenceIndicatorInViewport: this.onPresenceIndicatorInViewport,
								showBlockingInterstitial: this.showBlockingInterstitial
							})
						}
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: n,
						onAllCommentsRendered: o,
						renderedInOverlay: r,
						showSignupUpsell: i
					} = this.props;
					let a;
					if (n) {
						a = `comments-${r?"lightbox":"page"}`
					}
					const c = t.map((e, t) => this.getScrollChild(e, t));
					return d.a.createElement(Ve, {
						className: Object(m.a)(Ae.a.Scroller, e),
						disableScrollCache: r,
						key: s,
						getContainer: () => r ? document.getElementById(ke.e) : null,
						onScroll: i,
						onAllChildrenRendered: o,
						preventScrollOnMount: !0,
						scrollToChildPadding: Be,
						trackingName: a
					}, c)
				}
				renderEmptyState() {
					return this.props.commentId ? d.a.createElement(Ee.g, {
						link: this.props.postPermalink
					}) : d.a.createElement(Ee.c, null)
				}
			}
			t.a = We(Object(je.c)(Object(Le.a)(Object(we.d)(Ye))))
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
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
			t.a = o
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = i.a.div("LoaderWrapper", c.a),
				m = i.a.div("Icon", c.a),
				p = i.a.div("Byline", c.a),
				u = Object(r.a)({
					ErrorComponent: () => o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null)),
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null))
					}
				});
			t.a = e => o.a.createElement(u, e)
		},
		"./src/reddit/components/CommentsPageNativeAd/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD",
				greyRereddit: "_2pOTt_VPprwl-h6pV0o5Mu"
			}
		},
		"./src/reddit/components/CommentsPageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/lodash/isEqual.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				x = s("./src/reddit/components/IdCard/async.tsx"),
				g = s("./src/reddit/components/ModProgressModule/index.tsx"),
				f = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				C = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				v = s("./src/reddit/components/SidebarFooter/index.tsx"),
				O = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				E = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				y = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				j = s("./src/reddit/components/Widgets/Recommendations/index.tsx"),
				k = s("./src/reddit/components/Widgets/Recommendations/Sidebar/index.tsx"),
				P = s("./src/reddit/components/Widgets/ReredditLink/index.tsx"),
				I = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				_ = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				w = s("./src/reddit/constants/experiments.ts"),
				S = s("./src/reddit/featureFlags/component.tsx"),
				N = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				T = s("./src/reddit/models/Post/index.ts"),
				L = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				R = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				M = s("./src/reddit/selectors/experiments/postSeo.ts"),
				F = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				A = s("./src/reddit/selectors/subreddit.ts"),
				B = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				V = s.n(D);
			const U = Object(S.a)("spPoints", b.a),
				W = Object(S.a)("spLeaderboard", h.a),
				H = Object(n.a)({
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
				K = Object(c.c)({
					d2xPdpSideRailRecsVariant: L.a,
					isD2xPdpSideRailRecsEnabled: L.b,
					isInNewModuleNCPV3Experiment: (e, t) => {
						let {
							post: s,
							isOverlay: n
						} = t;
						return !Object(T.r)(s) && !n && Object(R.a)(e) === w.ye.NewModule
					},
					isLoggedIn: B.Q,
					postSEOV2IdCardVariant: M.h,
					shouldShowReredditPromo: F.a,
					widgets: Object(p.a)(A.u)
				}),
				G = Object(d.b)(K);
			class q extends a.a.Component {
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
				renderRecommendationsSidebar() {
					const {
						className: e,
						commentsPageKey: t,
						d2xPdpSideRailRecsVariant: s,
						isOverlay: n,
						post: o,
						postSEOV2IdCardVariant: r,
						shouldShowReredditPromo: i,
						subredditName: d,
						subredditOrProfile: c
					} = this.props, m = Object(M.c)(r) || Object(M.f)(r), p = s === w.Ac.GreyRereddit, u = i && s === w.Ac.GreyRereddit ? a.a.createElement(P.ReredditButtons, {
						directoryTimestamp: o.created,
						postId: o.id,
						renderAsPlainLink: !0
					}) : void 0;
					return a.a.createElement("div", {
						className: Object(l.a)(e, V.a.outerWrapper)
					}, a.a.createElement(x.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: n,
						listingName: d,
						postId: o.id,
						rememberPosition: o.numComments > 0,
						isMinimal: m
					}), a.a.createElement(O.a, null, a.a.createElement(k.a, null, a.a.createElement(j.a, {
						post: o,
						subredditOrProfile: c
					}), i && !p && a.a.createElement(I.a, {
						directoryTimestamp: o.created,
						postId: o.id
					}), a.a.createElement(v.a, {
						reredditButtons: u
					}))))
				}
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isFakeOverlay: s,
						isOverlay: n,
						post: o,
						postSEOV2IdCardVariant: r,
						subredditName: i
					} = this.props, d = !Object(M.c)(r) && !Object(M.f)(r);
					return a.a.createElement(E.a, {
						adComponentOnFakeOverlay: s,
						adComponent: d ? a.a.createElement(C.a, {
							postId: o.id,
							isOverlay: n,
							listingName: i,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: N.a.BOTTOM,
							refreshKey: o.id,
							sizes: m.o,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isD2xPdpSideRailRecsEnabled: s,
						isInNewModuleNCPV3Experiment: n,
						isLoggedIn: o,
						isOverlay: r,
						post: i,
						postSEOV2IdCardVariant: d,
						shouldShowReredditPromo: c,
						subredditId: p,
						subredditName: b,
						widgets: h
					} = this.props;
					let v = 0;
					const E = Object(M.c)(d) || Object(M.f)(d),
						j = a.a.createElement(C.a, {
							postId: i.id,
							isOverlay: r,
							listingName: b,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: v++,
							position: N.a.FIRST,
							refreshKey: i.id,
							sizes: m.h,
							commentsPageKey: t
						});
					return s ? this.renderRecommendationsSidebar() : a.a.createElement("div", {
						className: Object(l.a)(V.a.outerWrapper, e)
					}, n && a.a.createElement(g.default, {
						subredditId: p,
						subredditName: b
					}), Object(T.r)(i) ? a.a.createElement(H, {
						profileName: b,
						isOverlay: r || !1
					}) : a.a.createElement(x.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: r,
						listingName: b,
						postId: i.id,
						rememberPosition: i.numComments > 0,
						isMinimal: E
					}), a.a.createElement(u.a, {
						cardClassName: V.a.card,
						subredditId: p
					}), a.a.createElement(U, {
						className: V.a.card,
						subredditId: p,
						uniqueId: i.id
					}), a.a.createElement(W, {
						className: V.a.card,
						subredditId: p,
						uniqueId: i.id
					}), a.a.createElement(f.a, {
						subredditId: p
					}), j, o && h.map((e, t) => a.a.createElement(O.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(_.a, {
						subredditName: b,
						widget: e
					}))), i.isSponsored && a.a.createElement(O.a, null, a.a.createElement(y.a, null)), c && a.a.createElement(I.a, {
						directoryTimestamp: i.created,
						postId: i.id
					}), this.renderFooter(v++))
				}
			}
			t.a = G(q)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
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
			class b extends o.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: n,
						innerRef: i,
						shouldTruncateComments: l,
						numberOfComments: b,
						onClick: h
					} = this.props, x = l && !e, g = l ? m.a.TruncatedComments : "";
					return o.a.createElement("div", {
						onClick: h,
						ref: i
					}, o.a.createElement("div", {
						className: Object(r.a)(m.a.ContentWrapper, s, g),
						style: {
							"--commentswrapper-gradient-color": Object(c.a)(this.props).body,
							maxHeight: l ? u : "unset"
						}
					}, t), x && o.a.createElement(d.l, {
						className: m.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, p._("View Entire Discussion ({number of comments} Comments)", [p._param("number of comments", Object(a.b)(b))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(i.a)(b)
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
		"./src/reddit/components/CrosspostRecommendationsModal/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CrosspostRecommendationsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CrosspostRecommendationsModal").then(s.bind(null, "./src/reddit/components/CrosspostRecommendationsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CrosspostRecommendationsModal/index.tsx"
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/constants/index.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(p);
			const b = a.a.div("DistinguishWrapper", u.a),
				h = a.a.wrapped(m.a, "Inline", u.a),
				x = a.a.wrapped(c.a, "RadioOff", u.a),
				g = a.a.wrapped(l.a, "RadioOn", u.a),
				f = e => o.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(g, null) : o.a.createElement(x, null), e.text),
				C = a.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: n,
						isUserEmployee: a,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: p
					} = e;
					return o.a.createElement(b, {
						className: t,
						style: s
					}, o.a.createElement(f, {
						onClick: () => p(r.G.NONE, null),
						selected: !c && !n,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && o.a.createElement(f, {
						onClick: () => p(r.G.MODERATOR, null),
						selected: c && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && o.a.createElement(f, {
						onClick: () => p(r.G.MODERATOR, !0),
						selected: c && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && o.a.createElement(f, {
						onClick: () => p(r.G.ADMIN, null),
						selected: n && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && m && o.a.createElement(f, {
						onClick: () => p(r.G.ADMIN, !0),
						selected: n && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var v = Object(d.a)(C);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: p
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: p
				}, o.a.createElement(v, {
					isAdminDistinguished: s,
					isUserEmployee: n,
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
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Audio/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Audio/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
				participants: "_331K_coiMcnNskYgCaneWt",
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let {
					participantsCount: t
				} = e;
				return m._({
					"*": "· {total participated users} players",
					_1: "· {total participated users} player"
				}, [m._param("total participated users", Object(l.b)(t)), m._plural(t)], {
					hk: "1yrPLH"
				})
			};
			var u = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(u);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = e => {
				let {
					post: t
				} = e;
				const s = t.predictionTournament,
					o = s.status === d.a.Live,
					l = s.status === d.a.Closed,
					m = Object(i.e)(e => Object(c.U)(e, {
						postId: t.id
					}));
				return r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, null == m ? void 0 : m.displayText), o && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), l && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== s.totalParticipantsCount && r.a.createElement(p, {
					participantsCount: s.totalParticipantsCount
				}), r.a.createElement(a.a, {
					className: b.a.awards,
					thing: t
				})), r.a.createElement("h3", {
					className: b.a.title
				}, s.name))
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const b = a.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(m.a)(n)) return null;
				const a = n && n.eventInfo,
					p = Object(l.a)(n),
					h = a && Object(i.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, o.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, o.a.createElement(d.a, {
					post: n
				}), !p && h && o.a.createElement(c.a, {
					className: u.a.eventFollowButton,
					post: n,
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(c);
			var m = e => o.a.createElement("i", {
				className: Object(a.a)(Object(d.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var p = e => o.a.createElement("i", {
					className: Object(a.a)(Object(d.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				u = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				h = s.n(b),
				x = s("./src/lib/lessComponent.tsx");
			const g = x.a.span("PostEventFutureText", h.a),
				f = x.a.span("PostEventPastText", h.a),
				C = x.a.span("PostEventNowText", h.a),
				v = x.a.span("Container", h.a),
				O = x.a.wrapped(m, "CalendarIcon", h.a),
				E = x.a.wrapped(p, "LiveIcon", h.a),
				y = x.a.div("LoadingState", h.a);
			class j extends n.Component {
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
						eventEnd: n,
						eventIsLive: a,
						eventStart: d
					} = s, c = Object(r.e)(d, n);
					let l, m;
					if (this.state.mounted || c === r.a.Live) l = o.a.createElement(u.c, {
						startTime: d,
						endTime: n,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = o.a.createElement(y, {
							className: e
						})
					}
					if (a) m = o.a.createElement(C, null, o.a.createElement(E, null), l);
					else if (c === r.a.Future) m = o.a.createElement(g, null, o.a.createElement(O, null), l);
					else {
						if (c !== r.a.Past) return null;
						m = o.a.createElement(f, null, o.a.createElement(O, null), l)
					}
					return o.a.createElement(v, {
						className: e
					}, m)
				}
			}
			t.a = j
		},
		"./src/reddit/components/ExpandedCrossposts/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/experiments/subredditDiscovery.ts");
			const d = Object(n.a)({
					resolved: {},
					chunkName: () => "ExpandedCrosspost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ExpandedCrosspost").then(s.bind(null, "./src/reddit/components/ExpandedCrossposts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ExpandedCrossposts/index.tsx"
					}
				}),
				c = e => {
					return Object(i.e)(a.a) ? r.a.createElement(d, e) : null
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/path/index.ts"),
				u = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				f = s("./src/telemetry/models/Outbound.ts"),
				C = s("./src/reddit/components/ExpandoButton/index.m.less"),
				v = s.n(C);
			const O = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(p.b)(t.permalink), t.id))
				})),
				E = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(d.a)(v.a.icon, v.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: n
							});
						case h.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: n
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: n
							});
						case h.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: n
							});
						case h.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: n
							});
						case h.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = O(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: p,
					post: h,
					toggle: C,
					useMediaIcons: O
				} = e, y = s || h, j = Object(i.e)(g.b), k = Object(i.e)(g.c), P = t => {
					(j || k) && (t.preventDefault(), e.showModalOnPostLinkClick(y))
				}, I = y.media, _ = Object(x.p)(h), w = o && !!s;
				return I && !_ && !(("rtjson" === I.type || "text" === I.type || "liveaudio" === I.type) && !Object(u.a)(y)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, v.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					onClick: C
				}, p ? r.a.createElement(b.a, {
					name: "collapse",
					className: v.a.icon
				}) : O ? r.a.createElement(r.a.Fragment, null, E(y.media && y.media.type, w, h), r.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(v.a.icon, v.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: v.a.icon
				})) : y.source && y.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, v.a.outer),
					"data-click-id": "expando_open",
					href: y.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? f.SourceElement.PostImage : f.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(v.a.icon, v.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, v.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(y.permalink),
					rel: "nofollow",
					onClick: P
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: v.a.icon
				}))
			})
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				d = s.n(a);
			t.a = i.a.wrapped(e => o.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
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
					icon: n,
					subtitle: i,
					title: d,
					textWrapperClassName: m
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, o.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? o.a.createElement(c, null, n) : o.a.createElement(c, null), o.a.createElement(l, {
					className: m
				}, o.a.createElement("div", {
					className: a.a.title
				}, d), i && o.a.createElement("div", {
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(c);
			t.a = () => r.a.createElement(d.a, {
				className: l.a.BannerBase,
				color: i.a.locked,
				icon: r.a.createElement(a.a, {
					className: l.a.ArchivedIcon
				}),
				subtitle: n.fbt._("New comments cannot be posted and votes cannot be cast", null, {
					hk: "3jwi5b"
				}),
				title: n.fbt._("This thread is archived", null, {
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
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
				b = e => Object(c.i)(e) ? i.d.profile : i.d.subreddit;

			function h(e) {
				let {
					subredditOrProfile: t
				} = e;
				const s = t ? n.fbt._("This thread has been locked by the moderators of {communityname}", [n.fbt._param("communityname", b(t) + t.name)], {
					hk: "2HSQXz"
				}) : n.fbt._("This thread has been locked", null, {
					hk: "4fn3dn"
				});
				return r.a.createElement(l.a, {
					className: p.a.bannerBase,
					color: a.a.locked,
					icon: u,
					subtitle: n.fbt._("New comments cannot be posted", null, {
						hk: "2A32Yr"
					}),
					title: s
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
				} = e, o = t ? n.fbt._("Comments are in random ordering and vote scores are hidden to non-mods", null, {
					hk: "2gpz9d"
				}) : n.fbt._("Comments are in random ordering and vote scores are hidden", null, {
					hk: "3qrgsh"
				});
				return r.a.createElement(d.a, {
					className: m.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: r.a.createElement(p, null),
					subtitle: o,
					title: n.fbt._("This post has contest mode enabled", null, {
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				h = s.n(b);
			const x = r.a.createElement(m.a, {
					className: h.a.icon
				}),
				g = Object(a.c)({
					subreddit: p.z,
					subredditAboutInfo: p.w
				}),
				f = Object(i.b)(g);
			t.a = f(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const o = s && s.quarantineMessageHtml,
					i = s && s.quarantineMessage || n.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return r.a.createElement(u.a, {
					className: h.a.container,
					color: c.a.quarantine,
					icon: x,
					subtitle: r.a.createElement("span", null, n.fbt._("This community is {=quarantined}", [n.fbt._param("=quarantined", r.a.createElement("a", {
						className: h.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", o ? r.a.createElement(d.a, {
						className: h.a.rawHtmlDisplay,
						html: o
					}) : i, " ", r.a.createElement(l.default, {
						className: h.a.link,
						to: "/"
					}, n.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: n.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/ItemCarousel/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			var n, o = s("./src/reddit/helpers/richTextJson/index.ts"),
				r = s("./src/reddit/models/Media/index.ts");
			! function(e) {
				e.POST = "post", e.SUBREDDIT = "subreddit", e.CROSSPOST = "crosspost"
			}(n || (n = {}));
			const i = /(?:reddit\.com\/r\/)(?<subreddit>[\w]+)(?:\/comments\/)?(?<postId>[\w]+)?/,
				a = e => {
					var t, s, a;
					if ((null == e ? void 0 : e.media) && Object(r.K)(e.media) && (null === (s = null === (t = e.media.richtextContent) || void 0 === t ? void 0 : t.document) || void 0 === s ? void 0 : s.length) > 0) {
						const t = Object(o.e)(e.media.richtextContent.document, !0);
						return 0 === t.length ? [] : null === (a = t.reduce) || void 0 === a ? void 0 : a.call(t, (e, t) => {
							var s;
							const {
								subreddit: o,
								postId: r
							} = (null === (s = t.match(i)) || void 0 === s ? void 0 : s.groups) || {};
							return r && o ? [...e, {
								id: `t3_${r}`,
								url: t,
								type: n.POST
							}] : o ? [...e, {
								id: o,
								url: t,
								type: n.SUBREDDIT
							}] : e
						}, [])
					}
					return []
				}
		},
		"./src/reddit/components/ItemCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				redditLinkCard: "_3cx1eazwYdVDDYc1dPyiR5",
				title: "_39Ml3ujYhKuR2k_LFpXVKI",
				shimmer: "_1ow4mWwRckO61gSLo-7v0b",
				crosspostTitle: "_22-ViNeyjOeL6ua8KDyKye",
				crosspostLinkCard: "_2iAbfa2D0rYH0bhwTONlI_",
				subredditLink: "_218c5HLOpg15zujvZOJ-jL",
				crosspostIcon: "_8rGN4GQ7vHLKekUlLRoHr",
				imageContainer: "_18r8N8O6-u5F1b97604EtU",
				thumbnailPlaceholder: "_1s2zQgETSy4lq4_Lx3sOZr",
				postDescription: "_12PklAY2VQxTTv7zYRGtFp",
				postStats: "_32BkJbsXEUbnRV8IdWALfx",
				separator: "_1sTUU46KrE7KfTGqDC-a29",
				carouselContainer: "_1rK-TdqBly0Ah1V-s2iNL4",
				constantWidth: "_13jkDfTREXT08dxlYnS8eF",
				flexWidth: "_3u_85Dp7oQMFiSQ4sLv1st",
				flexWidthTwoItems: "_3lv5cSLrhQNAMfRDhbY5yF",
				carouselTitle: "_2rN6AyQVzdFs8i43El1QF4",
				scrollIcon: "thm33nRT_QsxwagdC3y0O",
				carouselHeader: "_4keJkmF2kMGrQiCFuVyZP",
				carouselControls: "_2nzp90JhlrKYHbygwSg66",
				hasTitle: "_2g5PF1KCS_D1_wrxAataDQ",
				buttonWrapper: "_1FeNy7DyUXo50Xg6y7vYGE",
				scrollButton: "r6d8ZhiJGupMHDZ_VT92q",
				left: "_39XyIEf8_iPNJBEO56MJf-",
				right: "_2fa9qw7f4611Kfap-xuQAs",
				hidden: "_3y0dWvmqYpVeqdC-tWTBUc",
				itemsContainer: "WrOtvEVbiINAEhr1-6kip",
				large: "B_GPQ8fojjJzonrunPyKW",
				small: "q4_nxOUe2RNORWKR6Fyqc",
				subredditItem: "_3eJ3Vuzskg5QPjF0vWpWmv",
				subredditIcon: "_1atFEw7H5vpTJAn0fGBc_P",
				carouselContent: "_2rvSe7lZ7Qt5qCgXf_J0qB",
				bannerWrapper: "_1JhjjQQiHUTuMYhG1tGhPm",
				banner: "_3KgCrfIwPj-Tdwy64OBwWr",
				description: "_3V3hHaMDC4uZNCfwyBbz4g",
				lockup: "_24tuGHItai5L2nwJXdscK1",
				lockupText: "_1yYrDsHa8VjZpORJ4q0yYS",
				subredditName: "_1SXVDK7RjZdh5oUY2F-oQy",
				subscribersCount: "_1h7eV26RDHcql9mvKfi45C",
				contentWrapper: "rgoe5x8WumPeeNjIHn671",
				backgroundImage: "_23MqHKNvwrRo1D5A8ce1zw",
				subscribeButton: "_2sGQoRqSFOXnUrrQsZO3jK",
				blur: "_3kz2nO3JA6igVlQhzIq08X",
				flair: "BkSa7JPwUk1I4IglSRWbb",
				gradientAnimation: "_2KJPHlL6kS7WEhZRcgx8PN"
			}
		},
		"./src/reddit/components/ItemCarousel/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/constants/icons.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/subreddit/subredditCarousel.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/prettyPrintNumber/index.ts"),
				x = s("./src/lib/timeAgo/index.ts"),
				g = s("./src/reddit/controls/ContentType/index.tsx"),
				f = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = s("./src/reddit/components/Flair/index.tsx"),
				v = s("./src/reddit/selectors/telemetry.ts");
			var O = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/telemetry/index.ts"),
				y = s("./src/reddit/components/ItemCarousel/index.m.less"),
				j = s.n(y);
			const k = e => {
				let {
					postCard: t,
					post: s,
					className: o
				} = e;
				const {
					url: r,
					commentCount: i,
					createdAt: l,
					score: m,
					title: p,
					thumbnail: y,
					isNsfw: k,
					subreddit: P
				} = t, I = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					s && P && Object(E.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "post_post",
						post: e,
						subreddit: t,
						...v.n(s)
					}))(s, P)(I))
				}, []);
				return d.a.createElement(f.a, {
					to: (null == r ? void 0 : r.replace(/^.*\/\/[^\/]+/, "")) || "",
					className: Object(n.a)(j.a.redditLinkCard, o),
					onClick: () => {
						Object(E.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "post_post",
							post: e,
							subreddit: t,
							...v.n(s)
						}))(s, P)(I))
					}
				}, d.a.createElement("div", {
					className: Object(n.a)(j.a.imageContainer)
				}, (null == y ? void 0 : y.url) ? d.a.createElement("img", {
					src: y.url,
					className: Object(n.a)(k && j.a.blur)
				}) : d.a.createElement(g.a, {
					type: "text",
					className: j.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: j.a.postDescription
				}, d.a.createElement("div", null, d.a.createElement("div", {
					className: j.a.title
				}, p), k && d.a.createElement(C.b, {
					isFlairFilter: !0,
					flair: {
						type: O.f.Nsfw,
						text: "nsfw"
					},
					className: j.a.flair
				})), d.a.createElement("div", {
					className: j.a.postStats
				}, m && d.a.createElement(d.a.Fragment, null, d.a.createElement("span", null, Object(h.b)(m), " ", u.fbt._("points", null, {
					hk: "3jOMNh"
				})), d.a.createElement("span", {
					className: j.a.separator
				}, "•")), i && d.a.createElement("span", null, Object(h.b)(i), " ", u.fbt._("comments", null, {
					hk: "2x1D6M"
				})), d.a.createElement("span", {
					className: j.a.separator
				}, "•"), l && d.a.createElement("span", null, Object(x.a)(new Date(l).getTime() / b.Sb, !0)))))
			};
			var P = s("./src/reddit/selectors/posts.ts"),
				I = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				_ = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				S = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				N = s("./src/reddit/icons/svgs/Crosspost/index.tsx");
			const T = e => {
				let {
					crosspostCard: t,
					post: s,
					className: o
				} = e;
				const {
					permalink: r,
					commentCount: i,
					title: l,
					thumbnail: m,
					isNsfw: p,
					subreddit: b
				} = t, h = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					s && b && Object(E.a)(Object(S.c)(s, b)(h))
				}, [s, b, h]);
				return d.a.createElement(f.a, {
					to: r,
					className: Object(n.a)(j.a.redditLinkCard, j.a.crosspostLinkCard, o),
					onClick: () => {
						Object(E.a)(Object(S.a)(s, b)(h))
					}
				}, d.a.createElement("div", {
					className: Object(n.a)(j.a.imageContainer)
				}, (null == m ? void 0 : m.url) ? d.a.createElement("img", {
					src: m.url,
					className: Object(n.a)(p && j.a.blur)
				}) : d.a.createElement(g.a, {
					type: "text",
					className: j.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: j.a.postDescription
				}, d.a.createElement("div", {
					className: j.a.postStats
				}, d.a.createElement(N.a, {
					className: j.a.crosspostIcon
				}), d.a.createElement(w.a, {
					to: null == b ? void 0 : b.path,
					onClick: e => {
						e.stopPropagation()
					},
					className: j.a.subredditLink
				}, `r/${null==b?void 0:b.name}`), d.a.createElement("span", {
					className: j.a.separator
				}, "•"), d.a.createElement("span", null, u.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [u.fbt._plural(i || 0, "number")], {
					hk: "3QAYMS"
				}))), d.a.createElement("div", {
					className: Object(n.a)(j.a.title, j.a.crosspostTitle)
				}, p && d.a.createElement(C.b, {
					isFlairFilter: !0,
					flair: {
						type: O.f.Nsfw,
						text: "nsfw"
					},
					className: j.a.flair
				}), l)))
			};
			var L = d.a.memo(e => {
					let {
						className: t
					} = e;
					return d.a.createElement("div", {
						className: Object(n.a)(j.a.redditLinkCard, t)
					}, d.a.createElement("div", {
						className: Object(n.a)(j.a.shimmer, j.a.imageContainer)
					}), d.a.createElement("div", {
						className: j.a.postDescription
					}, d.a.createElement("div", {
						className: Object(n.a)(j.a.shimmer, j.a.title)
					}), d.a.createElement("div", {
						className: Object(n.a)(j.a.shimmer, j.a.postStats)
					})))
				}),
				R = s("./src/reddit/actions/subreddit.ts"),
				M = s("./src/reddit/components/SubscribeButton/index.tsx"),
				F = s("./src/reddit/controls/Button/index.tsx"),
				A = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = e => {
				let {
					id: t,
					index: s,
					name: o,
					subscribersCount: r,
					description: i,
					primaryColor: l,
					icon: m,
					isSubscribed: u,
					banner: b,
					path: x,
					size: g,
					isDiscovery: f,
					post: y,
					className: k,
					isNsfw: P
				} = e;
				const I = Object(c.d)();
				Object(a.useEffect)(() => {
					I(Object(R.u)(o))
				}, [I, o]);
				const _ = Object(c.e)(e => Object(p.U)(e, {
						subredditId: t
					})),
					S = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					y && _ && f && Object(E.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "community_post",
						post: e,
						subreddit: t,
						...v.n(s)
					}))(y, _)(S))
				}, []);
				const N = Object(a.useCallback)(e => {
					if (f) return (e => {
						let {
							noun: t,
							subredditId: s,
							index: n,
							source: o,
							...r
						} = e;
						return e => ({
							...r,
							source: o,
							noun: t,
							actionInfo: {
								reason: `${n}`
							},
							subreddit: Object(p.U)(e, {
								subredditId: s
							})
						})
					})({
						action: "click",
						post: y,
						noun: e ? "unsubscribe" : "subscribe",
						subredditId: t,
						index: s,
						source: "post_discovery"
					})
				}, [t, s, u]);
				return d.a.createElement("div", {
					className: Object(n.a)(j.a.subredditItem, null === j.a || void 0 === j.a ? void 0 : j.a[g], k)
				}, d.a.createElement("div", {
					className: j.a.contentWrapper
				}, d.a.createElement("div", {
					className: j.a.bannerWrapper,
					style: {
						backgroundColor: l || void 0
					}
				}, d.a.createElement("img", {
					className: j.a.banner,
					src: b || void 0
				})), d.a.createElement("div", {
					className: j.a.carouselContent
				}, d.a.createElement(w.a, {
					to: x,
					className: j.a.lockup,
					onClick: () => {
						f && Object(E.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "community_post",
							post: e,
							subreddit: t,
							...v.n(s)
						}))(y, _)(S))
					}
				}, d.a.createElement("div", {
					style: "small" === g ? {
						backgroundColor: "grey",
						backgroundImage: `url(${b||""})`
					} : {},
					className: j.a.backgroundImage
				}, m ? d.a.createElement("img", {
					src: m,
					className: j.a.subredditIcon
				}) : d.a.createElement(A.a, {
					className: j.a.subredditIcon
				})), d.a.createElement("div", {
					className: j.a.lockupText
				}, d.a.createElement("span", {
					className: j.a.subredditName
				}, "r/", o), " ", P && d.a.createElement(C.b, {
					isFlairFilter: !0,
					flair: {
						type: O.f.Nsfw,
						text: "nsfw"
					},
					className: j.a.flair
				}), d.a.createElement("span", {
					className: j.a.subscribersCount
				}, B._({
					"*": "{number} members",
					_1: "1 member"
				}, [B._plural(r, "number", Object(h.b)(r))], {
					hk: "4yqFU9"
				})))), d.a.createElement("p", {
					className: j.a.description
				}, i)), d.a.createElement(M.a, {
					className: j.a.subscribeButton,
					identifier: {
						name: o,
						type: "subreddit"
					},
					getEventFactory: N,
					priority: F.c.Tertiary,
					small: !0
				})))
			};

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = e => {
				var t, s;
				const n = null === (s = null === (t = e.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
				return n ? Math.floor(e.clientWidth / n) : 0
			}, H = Object(_.c)(e => {
				let {
					title: t,
					className: s,
					itemIds: r,
					size: u = "large",
					hasSubredditNames: b = !1,
					hasPostIds: h = !1,
					isDiscovery: x,
					post: g
				} = e;
				const f = Object(c.d)(),
					[C, v] = Object(a.useState)(null),
					[O, E] = Object(a.useState)(null),
					[y, _] = Object(a.useState)({
						left: !1,
						right: !0
					}),
					[w, S] = Object(a.useState)(0),
					[N] = Object(a.useState)(void 0),
					{
						subredditIds: R,
						crosspostIds: M,
						postIds: F,
						postUrls: A
					} = Object(a.useMemo)(() => r.reduce((e, t) => {
						let {
							type: s,
							id: n,
							url: o
						} = t;
						switch (s) {
							case I.a.SUBREDDIT:
								e.subredditIds.push(n.toLowerCase());
								break;
							case I.a.POST:
								o && (e.postUrls[n] = o), e.postIds.push(n);
								break;
							case I.a.CROSSPOST:
								e.crosspostIds.push(n)
						}
						return e
					}, {
						subredditIds: [],
						postIds: [],
						crosspostIds: [],
						postUrls: {}
					}), [r]),
					B = Object(c.e)(e => Object(p.A)(e, R)),
					U = Object(c.e)(e => Object(P.L)(e, F)),
					H = Object(c.e)(e => Object(P.L)(e, M)),
					K = B.reduce((e, t) => (e[b ? t.name.toLocaleLowerCase() : t.id] = t, e), {}),
					G = U.reduce((e, t) => (e[t.id] = t, e), {}),
					q = H.reduce((e, t) => (e[t.id] = t, e), {});
				Object(a.useEffect)(() => {
					((null == R ? void 0 : R.length) || F.length || M.length) && f(Object(l.e)(R, b, R, h, [...M, ...F]))
				}, [R, M, F, f, h, b]);
				const Y = r.filter((e, t, s) => t === s.findIndex(t => t.id === e.id)).reduce((e, t) => {
						let {
							type: s,
							id: n
						} = t;
						switch (s) {
							case I.a.SUBREDDIT:
								const t = null == K ? void 0 : K[n.toLowerCase()];
								if (!t || !x && t.isNsfw || !x && t.isSubscribed) break;
								e.push({
									type: s,
									props: t
								});
								break;
							case I.a.POST:
								const o = null == G ? void 0 : G[n];
								if (!o) break;
								e.push({
									type: s,
									props: o
								});
								break;
							case I.a.CROSSPOST:
								const r = null == q ? void 0 : q[n];
								if (!r) break;
								e.push({
									type: s,
									props: r
								})
						}
						return e
					}, []),
					Q = e => () => {
						var t, s;
						if (!O) return;
						const n = null === (s = null === (t = null == O ? void 0 : O.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
						if (!n) return;
						const o = (Math.sign(e) ? O.scrollLeft % n : n % O.scrollLeft) || 0,
							r = n * e - o;
						O.scrollBy({
							left: r,
							behavior: "smooth"
						})
					},
					z = Object(a.useCallback)(() => {
						if (!O) return;
						const {
							width: e
						} = null == O ? void 0 : O.getBoundingClientRect(), t = (null == O ? void 0 : O.scrollLeft) > 0, s = (null == O ? void 0 : O.scrollLeft) < O.scrollWidth - e;
						0 === (null == O ? void 0 : O.scrollLeft) && O.scrollWidth - e == 0 || _({
							left: t,
							right: s
						})
					}, [O]);
				Object(a.useEffect)(() => {
					if (!C || !O) return;
					const e = i()(() => {
						const e = W(O);
						S(e)
					}, 30);
					window.addEventListener("resize", e);
					const t = W(O);
					return S(t), z(), () => {
						window.removeEventListener("resize", e)
					}
				}, [C, O, z, w, Y.length]);
				const J = () => 1 === Y.length ? j.a.flexWidth : 2 === Y.length ? j.a.flexWidthTwoItems : j.a.constantWidth;
				return d.a.createElement("div", {
					ref: v,
					className: Object(n.a)(j.a.carouselContainer, s, null === j.a || void 0 === j.a ? void 0 : j.a[u])
				}, d.a.createElement("div", {
					className: j.a.carouselHeader,
					style: {
						width: N
					}
				}, d.a.createElement("h3", {
					className: j.a.carouselTitle
				}, t)), d.a.createElement("div", {
					ref: E,
					onScroll: z,
					className: Object(n.a)(j.a.itemsContainer, null === j.a || void 0 === j.a ? void 0 : j.a[u]),
					style: {
						width: N
					}
				}, !Y.length && Array(3).fill(!0).map((e, t) => d.a.createElement(L, {
					key: t,
					className: J()
				})), null == Y ? void 0 : Y.map((e, t) => {
					let {
						type: s,
						props: n
					} = e;
					var o, r, i;
					switch (s) {
						case I.a.SUBREDDIT:
							const e = n;
							return d.a.createElement(D, V({
								className: J(),
								index: t + 1,
								size: u,
								banner: null === j.a || void 0 === j.a ? void 0 : j.a.bannerBackgroundImage,
								icon: (null === (o = null == e ? void 0 : e.styles) || void 0 === o ? void 0 : o.icon) || (null === (i = null === (r = e.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === i ? void 0 : i.url),
								key: `${null==e?void 0:e.name}:${t}`,
								isDiscovery: !0,
								post: g
							}, e));
						case I.a.POST:
							const s = n;
							return d.a.createElement(k, {
								postCard: {
									...s,
									url: A[s.id]
								},
								className: J(),
								post: g
							});
						case I.a.CROSSPOST:
							const a = n;
							return d.a.createElement(T, {
								crosspostCard: {
									...a
								},
								className: J(),
								post: g
							});
						default:
							return null
					}
				})), Y.length > 2 && d.a.createElement("div", {
					className: Object(n.a)(j.a.carouselControls, {
						[j.a.hasTitle]: !!t
					})
				}, d.a.createElement("div", {
					className: Object(n.a)(j.a.buttonWrapper, j.a.left, {
						[j.a.hidden]: !y.left
					})
				}, d.a.createElement("button", {
					className: j.a.scrollButton,
					onClick: Q(-w)
				}, d.a.createElement(m.a, {
					name: o.a.left_fill,
					className: j.a.scrollIcon
				}))), d.a.createElement("div", {
					className: Object(n.a)(j.a.buttonWrapper, j.a.right, {
						[j.a.hidden]: !y.right
					})
				}, d.a.createElement("button", {
					className: j.a.scrollButton,
					onClick: Q(w)
				}, d.a.createElement(m.a, {
					name: o.a.right_fill,
					className: j.a.scrollIcon
				})))))
			});
			t.a = H
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				o = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(o.a)(n.a)
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/NotificationButton/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				c = s("./src/reddit/components/Thumbnail/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				p = s("./src/reddit/hooks/useIsClient.ts"),
				u = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/reddit/components/MediumPost/index.m.less"),
				h = s.n(b);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: n,
					redditStyle: b,
					shouldShowSubscribeButton: x,
					subredditOrProfile: g,
					templatePlaceholderImage: f,
					shouldShowFollowButton: C,
					isFollowed: v,
					isCommentsPage: O,
					onFollowPostClick: E
				} = e;
				return Object(p.a)() ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(i.a)(h.a.thumbnailContainer, {
						[h.a.mShowingButtonOrOverflow]: C || x
					})
				}, o.a.createElement("div", {
					className: h.a.thumbnailContainerRow
				}, C && o.a.createElement(a.a, {
					isFilled: !!v,
					onClick: E,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), x && g && o.a.createElement(d.a, {
					className: h.a.subscribeButton,
					getEventFactory: e => Object(m.k)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: g.name,
						type: Object(u.i)(g) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: s.id,
					small: !0
				})), o.a.createElement(c.a, {
					crosspost: t,
					isCommentsPage: O,
					post: s,
					redditStyle: b,
					forceShowNSFW: n,
					templatePlaceholderImage: f
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
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
				postSource: "_2BgmOVmNwratQ_mDI9DaHR",
				modModeBannerWrapper: "_1wpVciZItCVMc_3pYSceM5"
			}
		},
		"./src/reddit/components/ModProgressModule/index.m.less": function(e, t, s) {
			e.exports = {
				ThemedWidget: "tz3-IX6gYrZlbiZWRw5jD",
				themedWidget: "tz3-IX6gYrZlbiZWRw5jD",
				completed: "_2B0VV6SdB2XjjxadViz15Q",
				tooltipIsActive: "_28uNH-IBuxe83YxCxYlnOb",
				ModuleTitle: "_2aJs6bbECHiAGoO2WTwYa7",
				moduleTitle: "_2aJs6bbECHiAGoO2WTwYa7",
				ModSettingsIcon: "zi2IcHQ6-qpSGsOzDk6Su",
				modSettingsIcon: "zi2IcHQ6-qpSGsOzDk6Su",
				headerButtonsContainer: "_2_EnVDjbXLqtMoZxrXfqFD",
				ChevronIcon: "wUVzkQ_WMwTxwYbvR50Yb",
				chevronIcon: "wUVzkQ_WMwTxwYbvR50Yb",
				ProgressContainer: "_1oJUEnPSqSbY1munC3h7_E",
				progressContainer: "_1oJUEnPSqSbY1munC3h7_E",
				ProgressDescription: "_1TqN8-iakaWhtZvgpUaWAj",
				progressDescription: "_1TqN8-iakaWhtZvgpUaWAj",
				progressCount: "_3zufL-ajBszVrFsqSo1RVV",
				progressText: "_2qiL_cOXT9k5zDizfDNl9",
				darkFont: "_3pebDR2YBVgOVPtes2otJ",
				Description: "_1--LMLAxYX0l9LaibrBWVc",
				description: "_1--LMLAxYX0l9LaibrBWVc",
				CloseButton: "_1ODkNuC8Nwwbdi1XywFOpi",
				closeButton: "_1ODkNuC8Nwwbdi1XywFOpi",
				CardContainer: "_2YShnlNvvx9BkckLObKkwD",
				cardContainer: "_2YShnlNvvx9BkckLObKkwD",
				Card: "_-lU3INdzFYlY4zni0Pss",
				card: "_-lU3INdzFYlY4zni0Pss",
				unclickable: "_2LyLq46VyzgH6SYt5kWKmL",
				ContentContainer: "_2k3Vset5R9ftXzEIKyA8ll",
				contentContainer: "_2k3Vset5R9ftXzEIKyA8ll",
				IconContainer: "_3TqMO0quYw9KoVrQmpcHYp",
				iconContainer: "_3TqMO0quYw9KoVrQmpcHYp",
				CheckIcon: "_3aOKPfcH1CkkyC4FOUcPkx",
				checkIcon: "_3aOKPfcH1CkkyC4FOUcPkx",
				Icon: "QNbSE3fPPc1M8MakLm1Bi",
				icon: "QNbSE3fPPc1M8MakLm1Bi",
				CardTitle: "_1Q0pYNzV9Pmz1VXWG1DO3p",
				cardTitle: "_1Q0pYNzV9Pmz1VXWG1DO3p",
				Title: "_2GyfJdanPW5aCT405tuR0i",
				title: "_2GyfJdanPW5aCT405tuR0i",
				overflowButton: "GFzLxcAwA3BPE4dxI-d4W",
				imageUploader: "_2EJWiSLsB96D6FOsAajSH-"
			}
		},
		"./src/reddit/components/ModProgressModule/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				m = s("./src/reddit/actions/subreddit/questions.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/ModWelcomeTooltip/index.tsx"),
				b = s("./src/reddit/components/ModWelcomeTooltip/async.tsx"),
				h = s("./src/reddit/components/NewCommunityProgress/icons/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/constants/modals.ts"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/ImageInput/index.tsx"),
				O = s("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				E = s("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				k = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				P = s("./src/reddit/models/ApiRequestState/index.ts"),
				I = s("./src/reddit/models/NewCommunityProgress/index.ts"),
				_ = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/components/ModProgressModule/index.m.less"),
				N = s.n(S);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), L = (e, t, s) => {
				let {
					id: n,
					title: r,
					iconIdentifier: i
				} = e;
				const a = h.b[i];
				return o.a.createElement("div", {
					className: Object(d.a)(N.a.Card, {
						[N.a.unclickable]: t
					}),
					key: n,
					onClick: e => {
						e.stopPropagation(), !t && s()
					}
				}, o.a.createElement("span", {
					className: N.a.ContentContainer
				}, o.a.createElement("span", {
					className: Object(d.a)(N.a.IconContainer, {
						[N.a.completed]: t
					})
				}, t ? o.a.createElement(y.a, {
					name: "checkmark",
					className: N.a.CheckIcon
				}) : o.a.createElement(y.a, {
					name: a,
					className: N.a.Icon
				})), o.a.createElement("span", {
					className: N.a.CardTitle
				}, r)))
			}, R = Object(a.c)({
				isTooltipOpen: e => Object(w.a)(e) === u.MOD_WELCOME_TOOLTIP_ID,
				progressModuleRecords: _.c
			});
			class M extends o.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.onChangeIconFileInput = e => {
						const t = Object(P.b)();
						this.setState({
							apiRequestId: t
						}), this.props.uploadCommunityIcon(e, t)
					}, this.renderImageUploader = () => o.a.createElement(v.a, {
						className: N.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: this.onChangeIconFileInput
					}), this.onOpenIconUploadScreen = () => this.inputRef && this.inputRef.click(), this.state = {
						apiRequestId: null
					}
				}
				componentDidMount() {
					this.props.progressModuleRecords && this.props.progressModuleRecords[this.props.subredditId] && this.props.sendEvent(Object(E.g)(this.props.progressModuleRecords[this.props.subredditId]))
				}
				onClickCard(e, t) {
					"add_descr" === t ? this.props.onOpenDescriptionModal() : "first_post_v3" === t ? this.props.onNavigateToSubmit() : this.onOpenIconUploadScreen(), this.props.sendEvent(Object(E.b)(e, t))
				}
				render() {
					var e, t, s, n, r;
					const {
						isTooltipOpen: i,
						onCompleteModule: a,
						onTopBarClicked: c,
						progressModuleRecords: l,
						subredditId: m,
						subredditName: p
					} = this.props, h = l && l[m];
					if (!h) return o.a.createElement(g.a, {
						className: N.a.ThemedWidget,
						contentOnly: !0,
						headerButton: o.a.createElement("div", {
							className: N.a.headerButtonsContainer
						}, o.a.createElement(k.a, {
							className: N.a.ChevronIcon
						})),
						title: o.a.createElement("div", {
							className: N.a.ModuleTitle
						}, o.a.createElement(j.a, {
							className: N.a.ModSettingsIcon
						}), T._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: N.a.titleClassName,
						onClick: c
					});
					const x = (null === (e = null == h ? void 0 : h.progress) || void 0 === e ? void 0 : e.done) === (null === (t = null == h ? void 0 : h.progress) || void 0 === t ? void 0 : t.total),
						f = 0 === (null === (s = h.progress) || void 0 === s ? void 0 : s.done);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(g.a, {
						className: Object(d.a)(N.a.ThemedWidget, {
							[N.a.completed]: x,
							[N.a.tooltipIsActive]: i
						}),
						contentOnly: !0,
						headerButton: o.a.createElement("div", {
							className: N.a.headerButtonsContainer
						}, o.a.createElement(k.a, {
							className: N.a.ChevronIcon
						})),
						id: u.MOD_WELCOME_TOOLTIP_ID,
						onHeaderClick: c,
						title: o.a.createElement("div", {
							className: N.a.ModuleTitle
						}, o.a.createElement(j.a, {
							className: N.a.ModSettingsIcon
						}), T._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: N.a.titleClassName
					}, o.a.createElement("div", {
						className: N.a.ProgressContainer
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: N.a.Title
					}, x ? T._("Well done, you're set up!", null, {
						hk: "3sJd9H"
					}) : T._("Set up r/{subredditName}", [T._param("subredditName", p)], {
						hk: "3SHelG"
					})), o.a.createElement("div", {
						className: N.a.ProgressDescription
					}, o.a.createElement("span", {
						className: N.a.progressCount
					}, T._("{cardsComplete} of {totalCards}", [T._param("cardsComplete", null === (n = h.progress) || void 0 === n ? void 0 : n.done), T._param("totalCards", null === (r = h.progress) || void 0 === r ? void 0 : r.total)], {
						hk: "1gMzOE"
					})), " ", o.a.createElement("span", {
						className: Object(d.a)(N.a.progressText, {
							[N.a.darkFont]: f
						})
					}, T._("tasks completed", null, {
						hk: "DxeNq"
					}))), f && o.a.createElement("div", {
						className: N.a.Description
					}, T._("Get your community off the ground with these tasks", null, {
						hk: "3n0h53"
					})))), !x && o.a.createElement("div", {
						className: N.a.CardContainer
					}, h.cards.map(e => {
						const t = e.status === I.a.COMPLETED;
						return L(e, t, () => this.onClickCard(h, e.id))
					})), x && o.a.createElement(C.t, {
						className: N.a.CloseButton,
						onClick: a,
						priority: C.c.Tertiary
					}, T._("Close", null, {
						hk: "3UZAZk"
					})), o.a.createElement(b.a, {
						isOpen: i
					})), this.renderImageUploader())
				}
			}
			const F = Object(r.b)(R, (e, t) => ({
				onCompleteModule: () => e(Object(O.c)(t.subredditId, I.d)),
				onNavigateToSubmit: () => e(Object(i.b)(`/r/${t.subredditName}/submit`)),
				onOpenDescriptionModal: () => e(Object(c.i)(f.a.EDIT_DESCRIPTION_MODAL)),
				onOpenTooltip: () => e(Object(p.h)({
					tooltipId: u.MOD_WELCOME_TOOLTIP_ID
				})),
				onTopBarClicked: () => e(Object(i.b)(`/r/${t.subredditName}/about`)),
				uploadCommunityIcon: (s, n) => {
					e(Object(l.a)(t.subredditId, s, n)), e(Object(m.b)(t.subredditId))
				}
			}));
			t.default = F(Object(x.c)(M))
		},
		"./src/reddit/components/ModWelcomeTooltip/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ModWelcomeTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.resolve().then(s.bind(null, "./src/reddit/components/ModWelcomeTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModWelcomeTooltip/index.tsx"
				}
			})
		},
		"./src/reddit/components/NewCommentPill/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o);
			const i = Object(n.a)({
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
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
						onClick: n,
						hasTooltip: c,
						tooltipText: m,
						className: p
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, o.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && o.a.createElement(i.a, {
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
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				d = s("./src/reddit/helpers/trackers/gallery.ts"),
				c = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = o.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						r = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(d.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/objectSelector/index.ts"),
				C = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.m.less"),
				O = s.n(v);
			const E = Object(u.a)(() => Object(r.c)({
					basePixelMetadata: Object(f.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(h.b)(e, s.id)
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
						return Object(h.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(x.d)(e).pageType
				})),
				y = "post-container";
			class j extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: r,
						makePostContainerId: c,
						post: l,
						onClick: p,
						pageType: u,
						sendEvent: h,
						style: x,
						ref: f,
						shouldAddGalleryViewability: C = !0
					} = this.props, v = o.a.createElement("div", {
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
								e && e.outboundUrl && h(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(g.a)(O.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": y,
						id: c ? c(l.id) : l.id,
						tabIndex: -1
					}, s), E = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.E)(l.media) && C ? o.a.createElement(m, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || E ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(v))
				}
			}
			t.a = E(Object(C.a)(Object(p.c)(j)))
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
				videoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0",
				modModeBannerWrapper: "_2TM2Nmy6QisWK1nerxy26v"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return Mt
			})), s.d(t, "b", (function() {
				return Ft
			})), s.d(t, "a", (function() {
				return At
			}));
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/ads/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				b = s("./src/lib/pubsub/index.ts"),
				h = s("./src/lib/timeAgo/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				f = s("./src/reddit/models/User/index.ts"),
				C = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				O = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				E = s("./src/reddit/helpers/path/index.ts"),
				y = s("./src/reddit/helpers/trackers/lightbox.ts"),
				j = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/components/ItemCarousel/index.tsx"),
				P = s("./src/reddit/actions/tooltip.ts"),
				I = s("./node_modules/lodash/find.js"),
				_ = s.n(I),
				w = s("./node_modules/react-motion/lib/react-motion.js");
			const S = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				N = "expando_content",
				T = {},
				L = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					const s = _()(e, {
							key: N
						}),
						n = s && s.style ? s.style.opacity : 0;
					return t ? n >= 1 ? [{
						key: N,
						style: {
							opacity: 1
						}
					}] : n > 0 ? [{
						key: N,
						style: {
							opacity: Object(w.spring)(1, S)
						}
					}] : [{
						key: N,
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: N,
						style: {
							opacity: Object(w.spring)(0, S)
						}
					}]
				};
			class R extends i.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), T), this.state = {
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
						content: n
					} = this.props;
					return i.a.createElement(w.TransitionMotion, {
						styles: e => L(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => i.a.createElement("div", {
						className: s
					}, e.map(e => i.a.createElement("div", {
						key: e.key,
						style: e.style
					}, n))))
				}
			}
			var M = s("./src/reddit/models/Media/index.ts"),
				F = s("./src/reddit/models/Post/index.ts"),
				A = s("./src/reddit/models/Vote/index.ts"),
				B = s("./src/reddit/selectors/activeModalId.ts"),
				D = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				V = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				U = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				W = s("./src/reddit/selectors/moderatorPermissions.ts"),
				H = s("./src/reddit/selectors/postCreations.ts"),
				K = s("./src/reddit/selectors/posts.ts"),
				G = s("./src/reddit/selectors/showPromotedCTA.ts"),
				q = s("./src/reddit/selectors/user.ts"),
				Y = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Q = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				z = s("./src/reddit/components/AwardBadges/index.tsx"),
				J = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				X = s("./src/reddit/components/Econ/Audio/async.ts"),
				Z = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				$ = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				ee = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				te = s("./src/reddit/components/ExpandoButton/index.tsx"),
				se = s("./src/reddit/components/FlairWrapper/index.tsx"),
				ne = s("./src/reddit/components/Flatlist/index.tsx"),
				oe = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				re = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				ie = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				ae = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				de = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				ce = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				le = s("./src/reddit/components/ModModeReports/index.tsx"),
				me = s("./src/reddit/components/ModModeReports/helpers.ts"),
				pe = s("./src/reddit/components/NotificationButton/index.tsx"),
				ue = s("./src/reddit/components/PostContainer/index.tsx"),
				be = s("./src/higherOrderComponents/makeAsync.tsx"),
				he = s("./src/lib/loadWithRetries/index.ts"),
				xe = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const ge = Object(be.a)({
				ErrorComponent: () => i.a.createElement(xe.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(he.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(xe.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var fe = e => i.a.createElement(ge, e),
				Ce = s("./src/reddit/components/PostList/index.tsx"),
				ve = s("./src/reddit/components/PostMedia/index.tsx"),
				Oe = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Ee = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ye = s("./src/reddit/components/PostTitle/index.tsx"),
				je = s("./src/reddit/components/PostTopLine/index.tsx"),
				ke = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Pe = s("./src/reddit/components/SourceLink/index.tsx"),
				Ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_e = s("./src/reddit/components/UsersCountIndicator/async.tsx"),
				we = s("./src/reddit/constants/componentSizes.ts"),
				Se = s("./src/reddit/constants/componentTestIds.ts"),
				Ne = s("./src/reddit/constants/postLayout.ts"),
				Te = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Le = s("./src/reddit/helpers/postEvent.ts"),
				Re = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Me = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Fe = s("./src/reddit/selectors/postFlair.ts"),
				Ae = s("./src/reddit/models/Audio/index.ts"),
				Be = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				De = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Ve = s("./src/reddit/constants/experiments.ts"),
				Ue = s("./src/reddit/helpers/chooseVariant/index.ts"),
				We = s("./src/reddit/selectors/experiments/presence.ts");
			const He = e => {
					return Object(Ue.c)(e, {
						experimentEligibilitySelector: Ue.a,
						experimentName: Ve.Pf
					}) === Ve.sd
				},
				Ke = e => {
					if (Object(We.a)(e)) return !1;
					return Object(Ue.c)(e, {
						experimentEligibilitySelector: Ue.a,
						experimentName: Ve.Of
					}) === Ve.sd
				},
				Ge = (e, t) => {
					let {
						postId: s
					} = t;
					const n = Object(K.G)(e, {
						postId: s
					});
					return !(Object(We.a)(e) || !n || n.isSponsored) && Object(Ue.c)(e, {
						experimentEligibilitySelector: Ue.a,
						experimentName: Ve.Nf
					}) === Ve.sd
				};
			var qe = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				Ye = s("./node_modules/fbt/lib/FbtPublic.js"),
				Qe = s("./src/reddit/constants/colors.ts"),
				ze = s("./src/reddit/icons/fonts/index.tsx"),
				Je = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Xe = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Ze = s.n(Xe);
			const $e = i.a.createElement(ze.a, {
				className: Ze.a.BlockIcon,
				name: "block"
			});
			var et = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return i.a.createElement(Je.a, {
						className: Ze.a.bannerBase,
						color: Qe.a.dayModeActionIcon,
						icon: $e,
						title: Ye.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && i.a.createElement("button", {
							className: Ze.a.expandButton,
							onClick: t
						}, Ye.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: Ze.a.blockedAuthorTextWrapper
					})
				},
				tt = s("./src/config.ts"),
				st = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				nt = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				ot = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				rt = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				it = s.n(rt);
			const {
				fbt: at
			} = s("./node_modules/fbt/lib/FbtPublic.js"), dt = () => at._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [at._param("=User Agreement", i.a.createElement("a", {
				className: it.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, at._("User Agreement", null, {
				hk: "3MHgRl"
			}))), at._param("=Content Policy", i.a.createElement("a", {
				className: it.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, at._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), ct = () => at._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [at._param("=User Agreement", i.a.createElement("a", {
				className: it.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, at._("User Agreement", null, {
				hk: "yMHtU"
			}))), at._param("=Content Policy", i.a.createElement("a", {
				className: it.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, at._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var lt = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: n,
					subredditName: o
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return at._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case F.g.Author:
							return at._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case F.g.AuthorDeleted:
							return at._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case F.g.AutomodFiltered:
							return at._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case F.g.CommunityOps:
							return at._("This post was removed by Reddit admin, u/{username}.", [at._param("username", t)], {
								hk: "34nHWu"
							});
						case F.g.ContentTakedown:
							return at._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case F.g.CopyrightTakedown:
							return at._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case F.g.Moderator:
							return at._("This post was removed by r/{subredditName} moderator, u/{username}.", [at._param("subredditName", s), at._param("username", t)], {
								hk: "270bcn"
							});
						case F.g.Reddit:
							return at._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return at._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(n, s, o) : ((e, t) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return at._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case F.g.Author:
							return at._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case F.g.AuthorDeleted:
							return at._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case F.g.AutomodFiltered:
							return at._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case F.g.CommunityOps:
							return at._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case F.g.ContentTakedown:
							return at._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case F.g.CopyrightTakedown:
							return at._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case F.g.Moderator:
							return at._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [at._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case F.g.Reddit:
							return at._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return at._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(n, o), a = t ? (e => {
					switch (e) {
						case F.g.AntiEvilOps:
							return i.a.createElement(dt, null);
						case F.g.AuthorDeleted:
						case F.g.Author:
							return at._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case F.g.AutomodFiltered:
							return at._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case F.g.CommunityOps:
							return at._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [at._param("=just ask", i.a.createElement("a", {
								className: it.a.link,
								href: `${tt.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, at._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case F.g.ContentTakedown:
							return i.a.createElement(ct, null);
						case F.g.CopyrightTakedown:
							return at._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case F.g.Moderator:
							return at._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case F.g.Reddit:
							return at._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return at._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(n) : ((e, t) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return i.a.createElement(dt, null);
						case F.g.AuthorDeleted:
						case F.g.Author:
							return at._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case F.g.AutomodFiltered:
							return at._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [at._param("=[subreddit name]", i.a.createElement("a", {
								className: it.a.link,
								href: `${tt.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, at._("{subreddit name}", [at._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case F.g.CommunityOps:
							return at._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case F.g.ContentTakedown:
							return i.a.createElement(ct, null);
						case F.g.CopyrightTakedown:
							return at._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case F.g.Moderator:
							return at._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case F.g.Reddit:
						default:
							return at._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(n, o), d = t ? Qe.a.warning : Qe.a.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case F.g.AntiEvilOps:
						case F.g.AutomodFiltered:
						case F.g.CommunityOps:
						case F.g.ContentTakedown:
						case F.g.CopyrightTakedown:
						case F.g.Reddit:
							t = st.a;
							break;
						case F.g.AuthorDeleted:
						case F.g.Author:
							t = ot.b;
							break;
						case F.g.Moderator:
							t = nt.a;
							break;
						default:
							t = st.a
					}
					return i.a.createElement(t, {
						className: it.a.icon
					})
				})(n);
				return i.a.createElement(Je.a, {
					className: it.a.BannerBase,
					color: d,
					icon: c,
					subtitle: a,
					title: r
				})
			};

			function mt(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: n
				} = e;
				return i.a.createElement(i.a.Fragment, null, n && s.removedByCategory && i.a.createElement(lt, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: n.name
				}))
			}
			var pt = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				ut = s("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				bt = s("./src/reddit/actions/modal.ts"),
				ht = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				xt = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				gt = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ft = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				Ct = s("./src/reddit/components/PostUnavailableBanner/index.m.less"),
				vt = s.n(Ct);
			const Ot = i.a.createElement(ze.a, {
				className: vt.a.RemoveIcon,
				name: "delete_fill"
			});
			var Et = () => i.a.createElement(Je.a, {
					className: vt.a.bannerBase,
					color: Qe.a.dayModeActionIcon,
					icon: Ot,
					title: Ye.fbt._("Sorry, this post is no longer available.", null, {
						hk: "sb8eO"
					})
				}),
				yt = s("./src/reddit/components/PostContent/index.m.less"),
				jt = s.n(yt),
				kt = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const {
				fbt: Pt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), It = u.a.wrapped(ye.c, "PostTitle", jt.a), _t = u.a.wrapped(te.a, "ExpandoButton", jt.a), wt = u.a.wrapped(R, "ClassicExpandoMotion", jt.a), St = u.a.wrapped(ne.c, "FullWidthFlatlist", jt.a), Nt = i.a.createElement("p", {
				className: jt.a.VideoProcessingStatus
			}, Pt._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), Tt = Object(Te.u)({
				isCommentsPage: Te.x,
				pageLayer: e => e
			}), Lt = Object(a.b)(() => Object(l.c)({
				activeModalId: B.a,
				flairStyleTemplate: Te.W,
				currentUser: q.k,
				crosspost: K.d,
				hideNSFWPref: q.F,
				imageGalleryCurrentItem: K.i,
				isAdminOrMod: (e, t) => {
					const s = Object(K.U)(e, {
						postId: t.postId
					});
					return !!s && Object(U.c)(e, {
						subredditId: s.id
					})
				},
				isBlurredPreview: gt.b,
				isCurrentUserProfilePost: K.l,
				isExpanded: K.m,
				isFollowed: K.t,
				isFollowedExpired: K.o,
				showPromotedCTA: G.a,
				post: K.G,
				moderatorPermissions: W.m,
				modModeEnabled: Te.U,
				shouldTryToShowCrosspostModal: xt.e,
				showAwardsPlaque: D.a,
				showEditFlair: Fe.a,
				subredditOrProfile: K.U,
				isEditing: H.M,
				userIsOp: q.Db,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(De.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(De.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: Ge,
				isReadingIndicatorsReadTestEnabled: Ke,
				isReadingIndicatorsWriteTestEnabled: He,
				isTrueblockPCBlockeeEnabled: Me.d,
				isTypingIndicatorsExperimentEnabled: qe.b,
				isTypingIndicatorsReadTestEnabled: qe.c
			}), (e, t) => {
				let {
					pageLayer: s,
					postId: n
				} = t;
				return {
					onIgnoreReports: () => e(Object(x.gb)(n)),
					onOpenReportsDropdown: t => e(Object(P.h)({
						tooltipId: t
					})),
					onVoteClick: t => {
						const s = t === A.a.upvoted ? Object(x.kb)(n) : Object(x.w)(n);
						e(s)
					},
					fireAdPixelsOfType: (t, s) => e(Object(x.z)(t, s)),
					openPost: t => e(Object(x.L)(t)),
					onFollowPost: t => e(Object(x.jb)(n, t)),
					onFollowPostExpired: () => e(Object(x.Y)({
						id: n,
						expiresAt: 0
					}))
				}
			}), Rt = e => e.media && e.media.type === M.o.EMBED && e.media.provider === M.v.Imgur && e.media.height > 700, Mt = new b.a, Ft = "VISIBLE", At = "NOT_VISIBLE", Bt = e => Mt.publish(e ? Ft : At), Dt = {
				threshold: [.85, .001],
				rootMargin: `${1-we.f}px 0px 0px 0px`
			}, Vt = e => {
				for (const t of e) {
					const {
						intersectionRatio: e
					} = t;
					e >= .85 && Bt(!1), e <= .001 && Bt(!0)
				}
			}, Ut = u.a.wrapped(d.a, "ThumbLink", jt.a), Wt = e => {
				let {
					post: t,
					templatePlaceholderImage: s,
					shouldShowFollowButton: n,
					isFollowed: o,
					onFollowPostClick: r
				} = e;
				const a = t.source ? i.a.createElement(J.a, {
					post: t,
					forceShowNSFW: !0,
					templatePlaceholderImage: s
				}) : i.a.createElement(Ut, {
					to: Object(E.b)(t.permalink)
				}, i.a.createElement(J.a, {
					post: t,
					forceShowNSFW: !0
				}));
				return i.a.createElement("div", {
					className: jt.a.classicThumbnail
				}, n && i.a.createElement(pe.a, {
					className: jt.a.classicNotificationButton,
					isFilled: !!o,
					onClick: r,
					hasTooltip: !0,
					tooltipText: Pt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), a)
			}, Ht = e => {
				let {
					post: t,
					isExpanded: s,
					scrollerItemRef: n
				} = e;
				return i.a.createElement(wt, {
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(ve.a, {
						className: jt.a.ClassicPostMedia,
						isListing: !1,
						isNotCardView: !0,
						post: t,
						shouldLoad: !0,
						showFull: !0,
						showCentered: !0,
						scrollerItemRef: n
					})),
					shouldExpand: !!s
				})
			};
			t.c = Tt(Lt(e => {
				var t;
				const {
					className: s,
					crosspost: n,
					currentUser: d,
					fireAdPixelsOfType: l,
					flairStyleTemplate: u,
					forceOpenInNewTab: b,
					hideNSFWPref: x,
					imageGalleryCurrentItem: E,
					isAdminOrMod: P,
					isBlurredPreview: I,
					isCommentCountAnimation: _,
					isCommentsPage: w,
					isCountAnimShadowTestEnabled: S,
					isCrosspostRecommendationsExperimentEnabled: N,
					isCurrentUserProfilePost: T,
					isEditing: L,
					isExpanded: R,
					isFollowed: A,
					isFollowedExpired: B,
					isModWithUserNotesPermissions: D,
					isOverlay: U,
					isReadingIndicatorsExperimentEnabled: W,
					isReadingIndicatorsReadTestEnabled: H,
					isReadingIndicatorsWriteTestEnabled: K,
					isTrueblockPCBlockeeEnabled: G,
					isTypingIndicatorsExperimentEnabled: q,
					isTypingIndicatorsReadTestEnabled: J,
					isVoteCountAnimation: te,
					moderatorPermissions: pe,
					modModeEnabled: be,
					onFollowPost: he,
					onFollowPostExpired: xe,
					onIgnoreReports: ge,
					onOpenReportsDropdown: we,
					openPost: Te,
					onVoteClick: Fe,
					post: De,
					scrollerItemRef: Ve,
					sendEvent: Ue,
					shouldTryToShowCrosspostModal: We,
					showAwardsPlaque: He,
					showEditFlair: Ke,
					showPromotedCTA: Ge,
					subredditOrProfile: qe,
					userIsOp: Ye,
					pageLayer: Qe
				} = e, ze = Object(Ie.b)(), Je = Object(r.useRef)(null), [Xe, Ze] = Object(r.useState)(De.authorIsBlocked), $e = Object(M.J)(De), tt = Object(a.e)(e => Object(Me.a)(e)), st = Object(a.e)(e => Object(V.a)(e, {
					post: De
				})), nt = Object(c.a)(De), ot = W || q, rt = ot || H || K || J, it = !!(I && (null == qe ? void 0 : qe.isNSFW));
				Object(r.useEffect)(() => {
					B && xe()
				}, []);
				const at = Object(a.d)(),
					dt = Object(r.useRef)(null);
				Object(r.useEffect)(() => {
					if (N && We) return at(Object(ut.a)(De)), dt.current = setTimeout(() => {
						at(Object(bt.h)(ht.a)), at(Object(ut.b)())
					}, ht.b), () => {
						at(Object(ut.b)()), at(Object(bt.g)(ht.a)), dt.current && clearTimeout(dt.current)
					}
				}, [at, N, De, We]), Object(Re.a)(Je, Vt, Dt);
				const ct = De.isSponsored ? Object(Ce.b)(De.id, {
						fireAdPixelsOfType: l,
						openPost: Te
					}) : o.a,
					lt = Object(O.a)(pe),
					xt = Object(C.a)(pe),
					gt = Object(v.a)(pe),
					Ct = lt || xt,
					vt = ((e, t, s) => {
						const [n, o] = e ? [Object(f.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return n || t || o
					})(d, Ct, De),
					Ot = !!De.media && (De.media.type === M.o.RTJSON || De.media.type === M.o.TEXT),
					yt = Ye && Ot,
					Pt = Object(ce.a)(De),
					wt = Object(me.c)(De);
				let Tt;
				const Lt = Object(kt.a)(),
					Mt = !(be && lt),
					Ft = Object(Oe.b)({
						hide: !ot && Mt,
						editPost: !ot && Mt,
						save: Mt,
						report: !ot && Mt
					}),
					At = De.removedByCategory === F.g.AuthorDeleted,
					Bt = d && (d.displayText === De.author || d.username === De.author),
					Ut = !!De.unrepliableReason,
					Kt = !Xe && G && !At && !Rt(De) && (Bt || P || !(De.removedByCategory && De.media && (Object(M.M)(De.media) || Object(M.K)(De.media) || Object(M.E)(De.media)))),
					Gt = st && !De.isSpoiler && !De.isNSFW && !it && De.source,
					qt = null === (t = De.media) || void 0 === t ? void 0 : t.markdownContent,
					Yt = Object(m.t)(De, E),
					{
						source: Qt
					} = Yt,
					zt = De.removedByCategory === F.g.Reddit && Object(h.e)(De.created) > 24,
					Jt = De.removedByCategory && De.removedByCategory !== F.g.Reddit || zt,
					Xt = !Jt && !De.isArchived,
					Zt = Object(r.useCallback)(() => {
						he(A ? F.f.UNFOLLOWED : F.f.FOLLOWED), ze(A ? Object(j.q)(De.id) : Object(j.c)(De.id))
					}, [he, ze, A, De.id]),
					$t = i.a.createElement(It, {
						post: De,
						innerRef: Je,
						size: ye.b.ExtraLarge,
						isOverlay: U,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					es = i.a.createElement(pt.a, {
						post: De,
						showViewCount: vt
					}),
					ts = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? Ne.g.Classic : Object(Be.c)(n) ? Ne.g.Large : Object(Ae.b)(n) ? Ne.g.Large : t ? Ne.g.Large : !n.media || Object(F.p)(n) || Rt(n) ? Ne.g.Medium : Ne.g.Large
					})(e),
					ss = Object(a.e)(ft.b),
					ns = Object(re.b)(De),
					os = () => {
						const t = !(Ut && tt && Xe),
							s = Object(M.I)(De);
						return Ut && s ? i.a.createElement(Et, null) : tt && Xe ? i.a.createElement(et, {
							onBannerClick: () => Ze(!1),
							isExpandable: $e
						}) : Lt || !De.source || ts !== Ne.g.Medium || it ? Kt && !L && ts === Ne.g.Large ? i.a.createElement(ve.a, {
							className: Object(p.a)(jt.a.LargePostMedia, {
								[jt.a.isCommentsPage]: w
							}),
							isCommentsPage: !0,
							isListing: !1,
							isNotCardView: U,
							isOverlay: U,
							post: De,
							shouldLoad: !0,
							showFull: !0,
							shouldPause: !U,
							showCentered: !0,
							showPromotedCTA: Ge,
							scrollerItemRef: Ve
						}) : t && ts === Ne.g.Classic ? i.a.createElement(i.a.Fragment, null, i.a.createElement(_t, {
							crosspost: n || void 0,
							isExpanded: !!R,
							post: De,
							useMediaIcons: !1
						}), Ht(e)) : null : i.a.createElement(Pe.a, {
							post: De,
							isCommentsPage: w,
							pageLayer: Qe
						})
					};
				if (ts === Ne.g.Classic) {
					const e = !Lt && Object(g.a)(De, Xe);
					Tt = i.a.createElement("div", {
						"data-test-id": Se.e
					}, i.a.createElement(Ee.a, {
						model: De,
						handleVote: Fe,
						isCountAnimShadowTestEnabled: S,
						isOverlay: U,
						isVoteCountAnimation: te,
						postId: De.id
					}), i.a.createElement("div", {
						className: jt.a.mainBody
					}, i.a.createElement("div", {
						className: jt.a.content
					}, i.a.createElement(je.a, {
						hideAwards: He,
						hideNSFWPref: x,
						inSubredditOrProfile: !0,
						isCommentsPage: w,
						isCurrentUserProfilePost: T,
						isModWithUserNotesPermissions: !!D,
						isOverlay: !!U,
						isTopicPage: !1,
						post: De,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!U && !De.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: qe,
						shouldShowFollowButton: Xt && !e,
						isFollowed: A,
						onFollowPostClick: Zt
					}), $t, i.a.createElement(se.a, {
						className: w ? jt.a.leftPadding : void 0,
						post: De,
						sendEvent: Ue
					}), Gt && qt && i.a.createElement(oe.a, {
						text: qt
					}), be && lt && wt && i.a.createElement(le.a, {
						onIgnoreReports: ge,
						reportable: De
					}), i.a.createElement(ie.d, null), i.a.createElement("div", {
						className: jt.a.FlatlistContainer
					}, os(), He && i.a.createElement(z.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: De,
						tooltipType: U ? ke.c.Lightbox : void 0
					}), i.a.createElement(St, {
						currentUser: d,
						hasModFlairPerms: xt,
						hasModFullPerms: gt,
						hasModPostPerms: lt,
						isOverlay: U,
						onIgnoreReports: ge,
						onOpenReportsDropdown: we,
						modModeEnabled: be,
						post: De,
						showUpvotePercent: !0,
						showViewCount: vt,
						useFlatlistBreakpoints: Ft,
						isCommentCountAnimation: _,
						isCountAnimShadowTestEnabled: S
					}))), e && i.a.createElement(Wt, {
						post: De,
						templatePlaceholderImage: u && u.postPlaceholderImage,
						shouldShowFollowButton: Xt,
						isFollowed: A,
						onFollowPostClick: Zt
					})))
				} else if (ts === Ne.g.Medium) {
					const e = !Lt && Object(g.a)(De, Xe);
					Tt = i.a.createElement("div", {
						"data-test-id": Se.e
					}, i.a.createElement(Ee.a, {
						model: De,
						handleVote: Fe,
						isCountAnimShadowTestEnabled: S,
						isOverlay: U,
						shouldShowUpvoteRatioOnHover: ot,
						isVoteCountAnimation: te,
						postId: De.id
					}), i.a.createElement("div", {
						className: jt.a.mainBody
					}, i.a.createElement("div", {
						className: jt.a.content
					}, i.a.createElement(je.a, {
						hideAwards: He,
						hideNSFWPref: x,
						inSubredditOrProfile: !0,
						isCommentsPage: w,
						isCurrentUserProfilePost: T,
						isModWithUserNotesPermissions: !!D,
						isOverlay: !!U,
						isTopicPage: !1,
						post: De,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!U && !De.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: qe,
						shouldShowFollowButton: Xt && !e,
						isFollowed: A,
						onFollowPostClick: Zt
					}), $t, os(), Object(M.O)(De) && Nt, i.a.createElement(se.a, {
						className: w ? jt.a.leftPadding : void 0,
						post: De,
						sendEvent: Ue
					}), qe && Jt && i.a.createElement(mt, {
						isAdminOrMod: P,
						post: De,
						subredditOrProfile: qe
					}), be && lt && wt && i.a.createElement(le.a, {
						onIgnoreReports: ge,
						reportable: De
					})), e && !nt && i.a.createElement(ae.a, {
						post: De,
						forceShowNSFW: !0,
						hasModPostPerms: Ct,
						isCommentsPage: w,
						isOverlay: !0,
						modModeEnabled: be,
						templatePlaceholderImage: u && u.postPlaceholderImage,
						subredditOrProfile: qe,
						shouldShowFollowButton: Xt,
						isFollowed: A,
						onFollowPostClick: Zt
					})), Gt && qt && !Jt && i.a.createElement(oe.a, {
						text: qt
					}), i.a.createElement(ie.d, null), He && i.a.createElement(z.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: De,
						tooltipType: U ? ke.c.Lightbox : void 0
					}), !!ss && i.a.createElement(k.a, {
						itemIds: ns,
						hasSubredditNames: !0,
						hasPostIds: !0,
						isDiscovery: !0,
						post: De,
						size: "small"
					}), i.a.createElement("div", {
						className: jt.a.controlsContainer
					}, i.a.createElement(ne.c, {
						currentUser: d,
						hasModFlairPerms: xt,
						hasModFullPerms: gt,
						hasModPostPerms: lt,
						isOverlay: U,
						modModeEnabled: be,
						onIgnoreReports: ge,
						onOpenReportsDropdown: we,
						post: De,
						showEditPost: yt,
						showEditFlair: Ke,
						tooltipType: U ? ke.c.Lightbox : void 0,
						useFlatlistBreakpoints: Ft,
						isCommentCountAnimation: _,
						isCountAnimShadowTestEnabled: S,
						shouldHideItems: ot
					}), rt && i.a.createElement(_e.a, {
						isReadingIndicatorsExperiment: W,
						isReadingIndicatorsReadLoadTest: H,
						isReadingIndicatorsWriteLoadTest: K,
						isTypingIndicatorsExperiment: q,
						isTypingIndicatorsReadLoadTest: J,
						postId: De.id
					}), !ot && es))
				} else ts === Ne.g.Large && (Tt = i.a.createElement("div", {
					"data-test-id": Se.e
				}, i.a.createElement(Ee.a, {
					model: De,
					handleVote: Fe,
					isCountAnimShadowTestEnabled: S,
					isOverlay: U,
					shouldShowUpvoteRatioOnHover: ot,
					isVoteCountAnimation: te,
					postId: De.id
				}), Object(Be.c)(De) && i.a.createElement(i.a.Fragment, null, i.a.createElement($.a, {
					post: De
				}), i.a.createElement(Z.a, {
					post: De
				})), !Object(Be.c)(De) && i.a.createElement(i.a.Fragment, null, i.a.createElement(je.a, {
					forceOpenInNewTab: b,
					hideAwards: He,
					hideNSFWPref: x,
					inSubredditOrProfile: !0,
					isCommentsPage: w,
					isCurrentUserProfilePost: T,
					isModWithUserNotesPermissions: !!D,
					isOverlay: !!U,
					isTopicPage: !1,
					post: De,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!U && !De.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: qe,
					shouldShowFollowButton: Xt,
					isFollowed: A,
					onFollowPostClick: Zt
				}), $t, ((e, t, s, n) => !Lt && e.source && !t && (s || n))(De, n, U, w) && !it && i.a.createElement(Pe.a, {
					post: De,
					isCommentsPage: w,
					pageLayer: Qe
				})), i.a.createElement(se.a, {
					className: w ? jt.a.leftPadding : void 0,
					post: De,
					sendEvent: Ue
				}), qe && Jt && i.a.createElement(mt, {
					isAdminOrMod: P,
					post: De,
					subredditOrProfile: qe
				}), L && i.a.createElement(fe, {
					post: De
				}), os(), Ge && Qt && Qt.url && !De.isSurveyAd && i.a.createElement(Y.a, {
					className: jt.a.adLinkWrapper
				}, i.a.createElement(Q.a, {
					post: De,
					adLinkContent: Yt
				})), be && lt && Pt && i.a.createElement("div", {
					className: jt.a.modModeBannerWrapper
				}, i.a.createElement(de.a, {
					thing: De
				})), be && lt && wt && i.a.createElement("div", {
					className: jt.a.modModeBannerWrapper
				}, i.a.createElement(le.a, {
					onIgnoreReports: ge,
					reportable: De
				})), Object(Ae.b)(De) && i.a.createElement(X.a, {
					post: De
				}), i.a.createElement(ie.d, null), He && i.a.createElement(z.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: De,
					tooltipType: U ? ke.c.Lightbox : void 0
				}), !!ss && i.a.createElement(k.a, {
					itemIds: ns,
					hasSubredditNames: !0,
					hasPostIds: !0,
					isDiscovery: !0,
					post: De,
					size: "small"
				}), i.a.createElement("div", {
					className: jt.a.controlsContainer
				}, i.a.createElement(ne.c, {
					currentUser: d,
					forceOpenInNewTab: b,
					hasModFlairPerms: xt,
					hasModFullPerms: gt,
					hasModPostPerms: lt,
					isOverlay: U,
					modModeEnabled: be,
					onIgnoreReports: ge,
					onOpenReportsDropdown: we,
					post: De,
					showEditPost: yt,
					showEditFlair: Ke,
					tooltipType: U ? ke.c.Lightbox : void 0,
					useFlatlistBreakpoints: Ft,
					isCommentCountAnimation: _,
					isCountAnimShadowTestEnabled: S,
					shouldHideItems: ot
				}), rt && i.a.createElement(_e.a, {
					isReadingIndicatorsExperiment: W,
					isReadingIndicatorsReadLoadTest: H,
					isReadingIndicatorsWriteLoadTest: K,
					isTypingIndicatorsExperiment: q,
					isTypingIndicatorsReadLoadTest: J,
					postId: De.id
				}), !ot && es)));
				const rs = Object(r.useCallback)((e, t) => Object(j.k)(e, t), []);
				return i.a.createElement(ue.a, {
					className: Object(p.a)(s, jt.a.postContainer, {
						[jt.a.hasEventMeta]: Object(Le.a)(De)
					}),
					isOverlay: U,
					post: De,
					eventFactory: U ? y.b : rs,
					onClick: ct
				}, i.a.createElement(ee.a, {
					post: De
				}), Tt)
			}))
		},
		"./src/reddit/components/PostDetailStickyHeader/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const d = Object(n.a)({
					resolved: {},
					chunkName: () => "PostDetailStickyHeader",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("PostDetailStickyHeader").then(s.bind(null, "./src/reddit/components/PostDetailStickyHeader/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PostDetailStickyHeader/index.tsx"
					}
				}),
				c = e => {
					const t = Object(i.e)(a.c),
						s = Object(i.e)(a.a);
					return t || s ? r.a.createElement(d, e) : null
				}
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
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(m.o)({
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
					} = this.props, o = this.state.isHovered, i = s.isFollowed;
					let a = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = n.fbt._("Unfollow", null, {
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
			const h = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.A)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : o.a.createElement(i.a, {
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
				return g
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "c", (function() {
				return k
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "g", (function() {
				return I
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				c = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				l = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				m = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				u = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				b = s("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				h = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				x = s.n(h);
			const g = r.a.wrapped(d.a, "Icon", x.a),
				f = r.a.wrapped(c.a, "Icon", x.a),
				C = r.a.wrapped(l.a, "Icon", x.a),
				v = r.a.wrapped(m.a, "Icon", x.a),
				O = r.a.wrapped(p.a, "Icon", x.a),
				E = r.a.wrapped(u.a, "Icon", x.a),
				y = () => o.a.createElement(a.a, {
					name: "mod_mute",
					className: x.a.Icon
				}),
				j = () => o.a.createElement(a.a, {
					name: "calendar",
					className: x.a.Icon
				}),
				k = () => o.a.createElement(b.a, {
					className: x.a.svgIcon
				}),
				P = r.a.wrapped(i.b, "DropdownRow", x.a),
				I = r.a.div("ListContainer", x.a)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
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
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: u,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					isOverlay: g,
					isVoteCountAnimation: f,
					postId: C,
					shouldShowUpvoteRatioOnHover: v
				} = e, O = `upvote-button-${t.id}${g?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: x
				}, n && o.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(a.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: O,
					isVoteCountAnimation: f,
					isCountAnimShadowTestEnabled: u,
					postId: C,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: v
					}),
					shouldShowUpvoteRatioOnHover: v
				}))
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				k = s.n(j);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: o,
					hideAwards: j,
					hideNSFWPref: P,
					hostPostData: I,
					iconClassName: _,
					inSubredditOrProfile: w,
					isCommentsPage: S,
					isCompactPinnedPost: N,
					isCurrentUserProfilePost: T,
					isModWithUserNotesPermissions: L,
					isOverlay: R,
					isTopicPage: M,
					listingKey: F,
					post: A,
					shouldShowSubscribeButton: B,
					showCornerOutboundLink: D,
					showSubreddit: V,
					showSubredditIcon: U,
					subredditOrProfile: W,
					isFollowed: H,
					shouldShowFollowButton: K,
					onFollowPostClick: G
				} = e;
				const q = j || M,
					Y = W && Object(E.i)(W),
					Q = Object(i.e)(e => {
						if (!Y) return !0;
						const t = Object(y.Gb)(e, A.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(k.a.container, t)
				}, V && W && r.a.createElement("div", {
					className: k.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: W.url
				}, U && r.a.createElement(u.b, {
					className: Object(a.a)(k.a.subredditIcon, _),
					shouldHideNsfwIcon: P,
					subredditOrProfile: W
				}))), r.a.createElement("div", {
					className: k.a.everythingElseWrapper
				}, V && r.a.createElement(c.h, {
					type: A.belongsTo.type,
					id: A.belongsTo.id
				}), r.a.createElement(p.d, {
					className: k.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: L,
					tooltipType: R ? p.c.Lightbox : void 0,
					post: A,
					showSub: V,
					subredditOrProfile: W
				}), r.a.createElement(m.a, {
					className: k.a.postBadges,
					displayText: W ? W.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: N,
					post: A,
					tooltipType: R ? p.c.Lightbox : void 0
				}), !q && r.a.createElement(d.a, {
					isPostDetail: S,
					thing: A,
					tooltipType: R ? p.c.Lightbox : void 0
				})), W && Q && V && B && !T && r.a.createElement(h.a, {
					className: k.a.SubscribeButton,
					getEventFactory: e => Object(C.k)(A.id, e ? "unsubscribe" : "subscribe", "post", F, I),
					identifier: {
						name: W.name,
						type: Y ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: A.id,
					size: g.d.XS
				}), D && r.a.createElement(f.b, {
					isSponsored: A.isSponsored,
					postId: A.id,
					href: Object(O.D)(A),
					source: A.source
				}, r.a.createElement(v.a, {
					className: k.a.outboundLinkIcon
				})), K && Q && r.a.createElement(l.a, {
					isFilled: !!H,
					onClick: G,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/PostUnavailableBanner/index.m.less": function(e, t, s) {
			e.exports = {
				bannerBase: "_3pCwayT6l9aM5Uh9YuCXeP",
				RemoveIcon: "YKKq2c1RnR-x1pamdskkg",
				removeIcon: "YKKq2c1RnR-x1pamdskkg"
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/noop.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				b = s("./src/reddit/actions/subreddit.ts"),
				h = s("./src/reddit/components/ListingPostList/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/elementIds.ts"),
				f = s("./src/reddit/constants/experiments.ts"),
				C = s("./src/reddit/constants/page.ts"),
				v = s("./src/reddit/constants/postLayout.ts"),
				O = s("./src/reddit/helpers/postCollection.ts"),
				E = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				y = s("./src/reddit/helpers/trackers/lightbox.ts"),
				j = s("./src/reddit/helpers/trackers/screenview.ts"),
				k = s("./src/reddit/selectors/chatPost.ts"),
				P = s("./src/reddit/selectors/commentsListTruncated.ts"),
				I = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				_ = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				w = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				S = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				N = s("./src/reddit/selectors/i18n/index.ts"),
				T = s("./src/reddit/selectors/telemetry.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				R = s("./src/lib/classNames/index.ts"),
				M = s("./src/reddit/constants/listings.ts"),
				F = s("./src/reddit/controls/InternalLink/index.tsx"),
				A = s("./src/reddit/helpers/name/index.ts"),
				B = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				D = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				V = s.n(D);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var W = Object(m.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: n,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: r
					} = e, {
						primaryColor: i
					} = r;
					let d = null,
						c = r.url;
					return o ? (c = M.c[M.b.Popular], d = U._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : d = n ? U._("See more posts like this in {subredditName}", [U._param("subredditName", Object(A.c)(r.displayText))], {
						hk: "pLxW5"
					}) : U._("Continue browsing in {subredditName}", [U._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(F.default, {
						className: Object(R.a)(V.a.footer, t),
						onMouseDown: s,
						to: c,
						style: {
							backgroundColor: i
						}
					}, a.a.createElement("div", {
						className: V.a.background
					}), a.a.createElement("div", {
						className: V.a.layout
					}, d, a.a.createElement(B.a, {
						className: V.a.arrow
					})))
				}),
				H = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				K = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				G = s.n(K);
			const q = Object(c.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, P.a, I.b, (e, t, s) => !((!t || s) && e)),
				Y = Object(c.a)((e, t) => {
					let {
						post: s
					} = t;
					return !!s && Object(O.a)(s)
				}, (e, t) => {
					let {
						awaitAllCommentsRendered: s
					} = t;
					return s
				}, L.P, L.Q, k.d, q, (e, t, s, n, o, r) => !t && !s && !n && !o && !e && r),
				Q = Object(c.a)((e, t) => {
					let {
						post: s
					} = t;
					return s
				}, _.b, w.c, T.W, T.gb, (e, t, s, n, o) => {
					const r = !!e && void 0 !== e.isEligibleForLinkedPosts;
					let i, a = "";
					if (e && (i = {
							hostPostId: e.id,
							isEligibleForLinkedPosts: !1,
							shouldShowLinkedPosts: !1,
							subreddit: o
						}), (s || t) && e && r) {
						const {
							isEligibleForLinkedPosts: t,
							id: r
						} = e;
						a = Object(p.a)(r, Object(w.a)(s) || !t), i = {
							canonicalUrl: n.canonical_url,
							baseUrl: n.base_url,
							hostPostId: r,
							isEligibleForLinkedPosts: t,
							shouldShowLinkedPosts: t && !Object(f.Vf)(s) && !Object(w.a)(s),
							subreddit: o
						}
					}
					return {
						hostPostData: i,
						isEligibilityLoaded: r,
						listingBelowVariant: s,
						linkedPostsListingKey: a
					}
				}),
				z = Object(c.c)({
					isD2xPdpSideRailRecsEnabled: _.b,
					listingBelowLinkedPostsData: Q,
					nsfwListingBelowVariant: S.a,
					shouldShowListingBelow: Y,
					shouldShowNsfwListingBelow: N.b
				}),
				J = Object(d.b)(z, e => ({
					loadMorePosts: t => e(Object(b.r)({
						sort: l.W.HOT,
						subredditName: t
					}))
				}));
			class X extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(g.e) : null, this.onViewed = (e, t) => Object(j.f)({
						key: this.listingKey(),
						sort: l.W.TOP,
						timerType: t,
						timerMillis: e,
						timeSort: l.ic.WEEK
					}), this.onFooterClick = e => {
						this.props.sendEvent(Object(y.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						isD2xPdpSideRailRecsEnabled: e,
						listingBelowLinkedPostsData: {
							linkedPostsListingKey: t,
							listingBelowVariant: s
						},
						post: n,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: r
					} = this.props;
					return s || e ? t : o && n && n.id ? Object(H.a)(n.id) : Object(u.a)(r.name, l.W.TOP, {
						t: l.ic.WEEK
					})
				}
				renderSmallBanner() {
					const {
						listingBelowLinkedPostsData: e,
						nsfwListingBelowVariant: t,
						shouldShowNsfwListingBelow: s,
						subredditOrProfile: o,
						theme: r
					} = this.props, {
						isEligibilityLoaded: i,
						hostPostData: d,
						listingBelowVariant: c
					} = e;
					if (c && !Object(f.Vf)(c) && !Object(w.a)(c) && !i) return a.a.createElement("div", {
						className: G.a.smallBanner
					});
					const {
						name: l
					} = o, m = Object(E.a)(r.newCommunityTheme.canvas);
					let p = null;
					return p = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? n.fbt._("More posts from the {name} community", [n.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(w.b)(c) ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === f.ue.DeRecs ? n.fbt._("Popular Posts Near You", null, {
						hk: "22vlW0"
					}) : n.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: G.a.smallBanner,
						style: {
							color: m
						}
					}, p)
				}
				render() {
					const {
						contentContainerRef: e,
						isD2xPdpSideRailRecsEnabled: t,
						listingBelowLinkedPostsData: s,
						shouldShowListingBelow: n,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: i
					} = this.props, {
						hostPostData: d,
						listingBelowVariant: c
					} = s;
					if (!n) return null;
					const l = !!(null == d ? void 0 : d.shouldShowLinkedPosts);
					return a.a.createElement("div", {
						className: G.a.container
					}, this.renderSmallBanner(), a.a.createElement(h.a, {
						className: G.a.postList,
						disablePlaceholder: !0,
						forcedLayout: v.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: d,
						isTruncated: !0,
						listingBelowVariant: c,
						listingKey: this.listingKey(),
						listingName: C.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: G.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						skipSubredditPosts: t ? 15 : 0,
						shouldHideFlair: !0
					}), a.a.createElement(W, {
						className: G.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: l,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: i
					}))
				}
			}
			t.a = J(Object(m.a)(Object(x.c)(X)))
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/FocusableContent/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = s.n(d);
			t.a = e => {
				let {
					className: t,
					isCommentBoxDesignEnabled: s,
					isLoading: n,
					toolbarPosition: d
				} = e;
				return o.a.createElement("div", {
					className: t
				}, o.a.createElement(i.a, {
					isFocused: !1
				}, !s && "top" === d && o.a.createElement("div", {
					className: Object(r.a)(c.a.toolbar, c.a.topToolbar, Object(a.a)({
						isLoading: n
					}))
				}), o.a.createElement("div", {
					className: Object(r.a)(c.a.content, {
						[c.a.mCollapsed]: s
					})
				}, o.a.createElement("div", {
					className: Object(r.a)(c.a.prompt, Object(a.a)({
						isLoading: !0
					}))
				})), !s && "bottom" === d && o.a.createElement("div", {
					className: Object(r.a)(c.a.toolbar, c.a.bottomToolbar, Object(a.a)({
						isLoading: n
					}))
				})))
			}
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");
			t.a = Object(r.b)((e, t) => {
				let {
					postId: s
				} = t;
				return {
					canShowAd: Object(i.a)(e, {
						postId: s
					}) && !Object(d.E)(e) && !Object(a.a)(e)
				}
			})(e => {
				let {
					canShowAd: t,
					postId: s,
					commentsPageKey: n,
					...r
				} = e;
				return t ? o.a.createElement(c.a, r) : null
			})
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_2Gv5G082cUjYdQRyoGXyAo",
				modal: "_1_2jhTQc4DA7TtWS6g9BMN",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-redux/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/helpers.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/reddit/actions/login.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/components/Footer/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/counters/nsfwblocking.ts"),
				C = s("./src/reddit/selectors/telemetry.ts");
			const v = "nsfw_dialog";
			var O = e => i.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, i.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: "#FF585B"
				}), i.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: "#FF585B"
				}), i.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: "#FF585B"
				})),
				E = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				y = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				j = s.n(y);
			const k = {
					d2x_nsfw_signup_blocking_de_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				P = e => {
					const t = Object(a.d)(),
						s = Object(h.b)(),
						n = Object(a.e)(E.f),
						m = Object(r.useCallback)(() => {
							n === E.a.Blurred && t(Object(u.k)({
								actionSource: u.a.NsfwBlockingModal
							}))
						}, [t, n]),
						b = (e => e ? i.a.createElement("div", {
							className: j.a.cta
						}, o.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), i.a.createElement("br", null), o.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : i.a.createElement("div", {
							className: j.a.cta
						}, o.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(n === E.a.Blurred);
					return Object(r.useEffect)(() => {
						Object(f.c)(n)
					}, [n]), i.a.createElement("div", {
						className: Object(l.a)(j.a.mainCta)
					}, i.a.createElement(O, null), b, i.a.createElement("div", {
						className: j.a.contentTitle
					}, e.contentTitle), i.a.createElement("div", {
						className: j.a.warning
					}, (() => o.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), i.a.createElement("div", {
						className: j.a.buttonContainer
					}, i.a.createElement(g.j, {
						className: Object(l.a)(j.a.logIn),
						onClick: () => {
							s((() => e => ({
								...Object(C.n)(e),
								source: "xpromo",
								action: "click",
								noun: v
							}))()), m(), Object(f.b)(f.a.Login), t(Object(p.i)())
						}
					}, (() => o.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), i.a.createElement(g.j, {
						className: j.a.cancel,
						onClick: () => {
							Object(c.b)(), s((() => e => ({
								...Object(C.n)(e),
								source: "xpromo",
								action: "dismiss",
								noun: v
							}))()), Object(f.b)(f.a.Dismiss), t(Object(d.b)("/"))
						}
					}, (() => o.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				I = Object(m.a)(e => {
					const t = `${n.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return i.a.createElement("div", {
						className: j.a.qrCodeOuter
					}, i.a.createElement("div", {
						className: j.a.qrCodeInner
					}, i.a.createElement("img", {
						className: j.a.qrCode,
						alt: o.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), i.a.createElement("div", {
						className: j.a.copyLine1
					}, (() => o.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), i.a.createElement("div", {
						className: j.a.copyLine2
					}, (() => o.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), i.a.createElement("img", {
						className: j.a.sneakySnoo,
						src: t
					})))
				}),
				_ = e => {
					const t = Object(h.b)();
					i.a.useEffect(() => {
						t((() => e => ({
							...Object(C.n)(e),
							source: "xpromo",
							action: "view",
							noun: v
						}))())
					}, [t]);
					const {
						contentTitle: s
					} = e, n = Object(a.e)(E.g), o = Object(a.e)(E.h), r = Object(a.e)(E.f), d = r === E.a.Blurred ? b.a.White : r === E.a.NoPreview ? b.a.Grey : void 0;
					return i.a.createElement("div", {
						className: j.a.container
					}, i.a.createElement(P, {
						contentTitle: s
					}), i.a.createElement("div", {
						className: Object(l.a)(j.a.footerWrapper, {
							[j.a.mIsModal]: r === E.a.Blurred
						})
					}, i.a.createElement(b.b, {
						textColor: d
					})), i.a.createElement(I, {
						qrCodeAsset: (() => n === x.xc.Enabled || o === x.mb.BlurredPreview || o === x.mb.NoPreview ? k.d2x_nsfw_signup_blocking_de_v1 : k.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				}
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/components/UsersCountIndicator/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "UsersCountIndicator",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("UsersCountIndicator").then(s.bind(null, "./src/reddit/components/UsersCountIndicator/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/UsersCountIndicator/index.tsx"
				}
			})
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				c = s.n(d);
			const l = i.a.div("Rule", c.a),
				m = i.a.div("RuleIndex", c.a),
				p = i.a.div("RuleTitle", c.a);
			t.a = e => r.a.createElement(a.a, {
				className: e.className,
				title: n.fbt._("Rules for Reddit Ads", null, {
					hk: "3IMHuS"
				}),
				redditStyle: !0
			}, r.a.createElement(l, null, r.a.createElement(m, null, 1, "."), r.a.createElement(p, null, n.fbt._("Keep language civil", null, {
				hk: "2poAMk"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 2, "."), r.a.createElement(p, null, n.fbt._("Comments must be relevant to the Promoted Post and contribute to discussion", null, {
				hk: "zAMr0"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 3, "."), r.a.createElement(p, null, n.fbt._("Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", null, {
				hk: "19a5UD"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 4, "."), r.a.createElement(p, null, n.fbt._("No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post", null, {
				hk: "BvXoq"
			}))))
		},
		"./src/reddit/components/Widgets/Recommendations/Sidebar/index.m.less": function(e, t, s) {
			e.exports = {
				RecommendationSidebar: "_3Ndcxbm5f0pPvNSI2kk7Ua",
				recommendationSidebar: "_3Ndcxbm5f0pPvNSI2kk7Ua",
				isSticky: "_11FHz1-jlbYJ0ogJJ8HlvS"
			}
		},
		"./src/reddit/components/Widgets/Recommendations/Sidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/classnames/index.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/Widgets/Recommendations/Sidebar/index.m.less"),
				d = s.n(a);
			class c extends i.a.Component {
				constructor(e) {
					super(e), this.offset = 0, this.threshold = 0, this.ref = i.a.createRef(), this.measure = () => {
						if (!this.state.isSticky && this.ref && this.ref.current) {
							const e = this.ref.current.getBoundingClientRect(),
								t = document.documentElement.scrollTop,
								s = e.top + t,
								n = this.ref.current.clientHeight;
							this.offset = window.innerHeight - n, this.threshold = n + s - window.innerHeight
						}
					}, this.handleScroll = () => {
						this.measure(), this.setState({
							isSticky: window.scrollY >= this.threshold
						})
					}, this.ref = i.a.createRef(), this.state = {
						isSticky: !1
					}
				}
				componentDidMount() {
					this.measure(), window.addEventListener("scroll", this.handleScroll)
				}
				componentWillUnmount() {
					window.removeEventListener("scroll", this.handleScroll)
				}
				render() {
					return i.a.createElement("div", {
						style: this.state.isSticky ? {
							top: this.offset
						} : {},
						className: o()(this.props.className, d.a.recommendationSidebar, {
							[d.a.isSticky]: this.state.isSticky
						})
					}, i.a.createElement("div", {
						ref: this.ref
					}, this.props.children))
				}
			}
		},
		"./src/reddit/components/Widgets/Recommendations/index.m.less": function(e, t, s) {
			e.exports = {
				recommendationWidget: "_1WHlo0amI-5XpQrgGac9jY",
				postPreview: "_3G-DpckPZwPYm-VEwXS5uA",
				thumbnail: "_2DBbsvO3jP7bcFqAftcbiQ",
				subredditTitle: "WfSCvRO60bnRAHFf76dCJ",
				subredditName: "_1AF1qgUDsTX_XHGNtb9eTD",
				subredditIcon: "bl4ZZFlSdSp0651LqnPbO",
				metaSection: "BBzDU1DzKBAtxEtIy16cO",
				icon: "_3JBKdIEBBJDr8ks2UAEKb6",
				postTitle: "_16PE03zyTycZgJEtewpplw",
				communityBannerPlaceholder: "_2D7zl_d54nzW6JddGmlL0v",
				glimmer: "_3TZhL8u0Es1uNC4NiTMq6T",
				placeholderWrapper: "_7E_JlVtw5vjKoE_zXOqOu",
				subredditIconLoading: "_1vB3FG5cxYqw1tOuiA4XY9",
				subredditNameLoading: "_1yeeGZiqTUF5R2CX3OeN-6",
				postTitleLoading: "_1XDqtC7PCill1D0glb6XnR",
				postMetaSectionLoading: "_2K21kGnTaAQg66D6rlbV2-"
			}
		},
		"./src/reddit/components/Widgets/Recommendations/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = s("./src/reddit/selectors/telemetry.ts");
			const p = e => ({
					...m.n(e),
					source: "global",
					noun: "discovery_unit",
					action: "view"
				}),
				u = e => ({
					...m.n(e),
					source: "post",
					noun: "upvote",
					action: "click"
				}),
				b = e => ({
					...m.n(e),
					source: "post",
					noun: "comments",
					action: "click"
				});
			var h = s("./src/reddit/selectors/posts.ts"),
				x = s("./node_modules/lodash/once.js"),
				g = s.n(x),
				f = s("./src/lib/isUrl/index.ts"),
				C = s("./src/lib/prettyPrintNumber/index.ts"),
				v = s("./src/lib/timeAgo/index.ts"),
				O = s("./src/lib/truncateText/index.ts"),
				E = s("./src/reddit/components/SubredditIcon/index.tsx"),
				y = s("./src/reddit/helpers/trackers/post.ts"),
				j = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				k = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				P = s("./src/reddit/components/Widgets/Recommendations/index.m.less"),
				I = s.n(P);
			const _ = 2e3;
			class w {
				constructor(e, t) {
					this.intersectingRatio = -1, this.consumed = !1, this.maybeConsume = () => {
						this.clearConsumeTimeout(), this.isConsuming() && (this.onConsume(), this.consumed = !0, this.disconnect())
					}, this.handleIntersectionEvent = e => {
						this.intersectingRatio = e[0].intersectionRatio, this.isViewing() && this.onView(), !this.isConsuming() || this.consumed || this.consumeTimeoutId || (this.consumeTimeoutId = setTimeout(this.maybeConsume, _))
					}, this.onConsume = g()(t), this.onView = g()(e), this.observer = new IntersectionObserver(this.handleIntersectionEvent, {
						threshold: [0, 1]
					})
				}
				isConsuming() {
					return this.intersectingRatio >= 1
				}
				isViewing() {
					return this.intersectingRatio > 0
				}
				clearConsumeTimeout() {
					this.consumeTimeoutId && (clearTimeout(this.consumeTimeoutId), this.consumeTimeoutId = void 0)
				}
				connect(e) {
					this.observer.observe(e)
				}
				disconnect() {
					this.clearConsumeTimeout(), this.observer.disconnect()
				}
			}
			var S = Object(i.b)((e, t) => {
					const {
						post: s
					} = t;
					return {
						subreddit: e.subreddits.models[s.belongsTo.id],
						post: s
					}
				})(Object(c.c)(e => {
					const t = Object(o.useRef)(null),
						s = Object(o.useRef)(null),
						{
							post: n,
							sendEvent: i,
							subreddit: a
						} = e;
					Object(o.useEffect)(() => {
						var e;
						null === (e = s.current) || void 0 === e || e.disconnect(), s.current = new w(() => {
							i(Object(y.g)(n.id))
						}, () => {
							i(Object(y.d)(n.id, _))
						}), s.current.connect(t.current)
					}, [n, i]);
					const d = Object(o.useCallback)(() => {
							i(Object(y.e)(n.id, "post"))
						}, [n, i]),
						c = Object(o.useCallback)(() => {
							i(u)
						}, [i]),
						l = Object(o.useCallback)(() => {
							i(b)
						}, [i]),
						{
							created: m,
							numComments: p,
							thumbnail: h,
							upvoteRatio: x
						} = n,
						g = x ? `${Math.round(100*x)}%` : "";
					return r.a.createElement("li", {
						className: I.a.postPreview,
						ref: t,
						onClick: d
					}, r.a.createElement("a", {
						href: n.permalink
					}, h && Object(f.a)(h.url) && r.a.createElement("img", {
						className: I.a.thumbnail,
						src: n.thumbnail.url
					}), r.a.createElement("div", {
						className: I.a.subredditTitle
					}, r.a.createElement(E.b, {
						className: I.a.subredditIcon,
						subredditOrProfile: a
					}), r.a.createElement("span", {
						className: I.a.subredditName
					}, a && `r/${a.name}`)), r.a.createElement("div", {
						className: I.a.postTitle
					}, Object(O.a)(n.title, 80, "...")), r.a.createElement("div", {
						className: I.a.postMeta
					}, r.a.createElement("div", {
						className: I.a.metaSection,
						onClick: c
					}, r.a.createElement(k.a, {
						className: I.a.icon
					}), r.a.createElement("span", null, g)), r.a.createElement("div", {
						className: I.a.metaSection,
						onClick: l
					}, r.a.createElement(j.a, {
						className: I.a.icon
					}), r.a.createElement("span", {
						className: I.a.meta
					}, Object(C.b)(p))), r.a.createElement("div", {
						className: I.a.metaSection
					}, r.a.createElement("span", null, Object(v.a)(m / 1e3, !0))))))
				})),
				N = s("./src/lib/classNames/index.ts");
			var T = e => r.a.createElement("div", {
				className: Object(N.a)(I.a.placeholderWrapper)
			}, r.a.createElement("div", {
				className: I.a.header
			}, r.a.createElement("span", {
				className: I.a.subredditIconLoading
			}), r.a.createElement("span", {
				className: I.a.subredditNameLoading
			})), r.a.createElement("div", {
				className: I.a.postTitleLoading
			}), r.a.createElement("div", {
				className: I.a.postMetaSectionLoading
			}));
			const L = () => n.fbt._("Similar to this post", null, {
					hk: "XKYGj"
				}),
				R = [];
			for (let B = 0; B < 15; B++) R.push(r.a.createElement(T, {
				key: B
			}));
			const M = (e, t) => {
					const {
						post: s
					} = t;
					return Object(d.a)(s.id, !s.isEligibleForLinkedPosts)
				},
				F = Object(a.a)(M, (e, t) => {
					const s = M(0, t);
					return Object(h.z)(e, {
						listingKey: s
					})
				}, e => e.posts.models, (e, t, s) => {
					const n = [];
					let o = 0,
						r = 0;
					for (; o < 15 && r < t.length;) {
						const e = s[t[r++]];
						e && e.belongsTo && "subreddit" === e.belongsTo.type && (n.push(e), o++)
					}
					return {
						listingKey: e,
						posts: n
					}
				});
			class A extends r.a.Component {
				componentDidMount() {
					this.props.sendEvent(p)
				}
				render() {
					const {
						posts: e
					} = this.props, t = this.props.posts && this.props.posts.length ? e.map((e, t) => r.a.createElement(S, {
						post: e,
						key: t
					})) : R;
					return r.a.createElement(l.a, {
						title: L()
					}, r.a.createElement("ul", null, t))
				}
			}
			t.a = Object(i.b)(F)(Object(c.c)(A))
		},
		"./src/reddit/components/Widgets/ReredditLink/ImageBlock/index.m.less": function(e, t, s) {
			e.exports = {
				ImageContainer: "_2ppRhKEnnVueVHY_G-Ursy",
				imageContainer: "_2ppRhKEnnVueVHY_G-Ursy",
				Center: "_2KLA5wMaJBHg0K2z1q0ci_",
				center: "_2KLA5wMaJBHg0K2z1q0ci_",
				Upvotes: "_1zdLtEEpuWI_Pnujn1lMF2",
				upvotes: "_1zdLtEEpuWI_Pnujn1lMF2",
				LineContainer: "_3s18OZ_KPHs2Ei416c7Q1l",
				lineContainer: "_3s18OZ_KPHs2Ei416c7Q1l",
				HorizontalLine: "LJjFa8EhquYX8xsTnb9n-",
				horizontalLine: "LJjFa8EhquYX8xsTnb9n-",
				CircleContainer: "_2Zjw1QfT_iMHH7rfaGsfBs",
				circleContainer: "_2Zjw1QfT_iMHH7rfaGsfBs",
				Circle: "_2gaJVJ6_j7vwKV945EABN9",
				circle: "_2gaJVJ6_j7vwKV945EABN9"
			}
		},
		"./src/reddit/components/Widgets/ReredditLink/ReredditButton/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "_3gbb_EMFXxTYrxDZ2kusIp",
				button: "_3gbb_EMFXxTYrxDZ2kusIp"
			}
		},
		"./src/reddit/components/Widgets/ReredditLink/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ReredditLink",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.resolve().then(s.bind(null, "./src/reddit/components/Widgets/ReredditLink/index.tsx")),
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
		"./src/reddit/components/Widgets/ReredditLink/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2YJDRz5rCYQfu8YdgB_neb",
				widget: "_2YJDRz5rCYQfu8YdgB_neb",
				ButtonContainer: "_37WD6iicVS6vGN0RomNTwh",
				buttonContainer: "_37WD6iicVS6vGN0RomNTwh"
			}
		},
		"./src/reddit/components/Widgets/ReredditLink/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "ReredditButtons", (function() {
				return _
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				a = s("./src/config.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/helpers/trackers/widgets.ts"),
				l = s("./src/reddit/components/Widgets/ReredditLink/ImageBlock/index.m.less"),
				m = s.n(l);
			const p = `${a.a.assetPath}/img/widgets/rereddit-promo/`;
			var u = e => {
					let {
						url: t,
						postId: s
					} = e;
					const r = Object(d.b)(),
						i = Object(n.useCallback)(() => {
							r(Object(c.a)(s))
						}, [s, r]),
						l = `${a.a.redditUrl}/posts/${t}`;
					return o.a.createElement("a", {
						href: l,
						onClick: i,
						target: "_blank",
						rel: "noopener noreferrer"
					}, o.a.createElement("div", {
						className: m.a.ImageContainer
					}, o.a.createElement("img", {
						src: `${p}left.png`
					}), o.a.createElement("img", {
						className: m.a.Center,
						src: `${p}center.png`
					}), o.a.createElement("img", {
						src: `${p}right.png`
					}), o.a.createElement("img", {
						className: m.a.Upvotes,
						src: `${p}upvotes.png`
					})), o.a.createElement("div", {
						className: m.a.LineContainer
					}, o.a.createElement("img", {
						className: m.a.HorizontalLine,
						src: `${p}line.png`
					}), o.a.createElement("div", {
						className: m.a.CircleContainer
					}, o.a.createElement("div", {
						className: m.a.Circle
					}))))
				},
				b = s("./src/reddit/components/SidebarFooter/index.m.less"),
				h = s.n(b),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/components/Widgets/ReredditLink/ReredditButton/index.m.less"),
				f = s.n(g);
			const C = r.a.a("Link", h.a);
			var v = e => {
					let {
						buttonText: t,
						children: s,
						postId: r,
						renderAsPlainLink: i,
						url: l
					} = e;
					const m = Object(d.b)(),
						p = Object(n.useCallback)(() => {
							m(Object(c.a)(r, t))
						}, [r, t, m]);
					return i ? o.a.createElement(C, {
						href: `${a.a.redditUrl}/posts/${l}`,
						onClick: p,
						target: "_blank"
					}, s) : o.a.createElement(x.t, {
						className: f.a.Button,
						href: `${a.a.redditUrl}/posts/${l}`,
						kind: x.b.ExternalLink,
						onClick: p,
						target: "_blank"
					}, s)
				},
				O = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				E = s("./src/reddit/helpers/ordinal/index.ts"),
				y = s("./src/reddit/components/Widgets/ReredditLink/index.m.less"),
				j = s.n(y);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), P = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"], I = r.a.div("ButtonContainer", j.a), _ = e => {
				let {
					directoryTimestamp: t,
					postId: s,
					renderAsPlainLink: n
				} = e;
				const r = new Date(t),
					i = P[r.getMonth()],
					a = r.getFullYear(),
					d = r.getDate(),
					c = Object(E.a)(d),
					l = `${a}/${i}-${d}-1/`,
					m = `${a}/${i}/`,
					p = `${a}/`;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(v, {
					key: "ymd",
					buttonText: `top_posts_${i}_${c}_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: l
				}, k._("Top posts {date}", [k._param("date", `${i} ${c} ${a}`)], {
					hk: "4xgYoo"
				})), o.a.createElement(v, {
					key: "ym",
					buttonText: `top_posts_of_${i}_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: m
				}, k._("Top posts of {date}", [k._param("date", `${i}, ${a}`)], {
					hk: "HQnvs"
				})), o.a.createElement(v, {
					key: "y",
					buttonText: `top_posts_${a}`,
					postId: s,
					renderAsPlainLink: n,
					url: p
				}, k._("Top posts {date}", [k._param("date", `${a}`)], {
					hk: "4xgYoo"
				})))
			};
			t.default = e => {
				let {
					directoryTimestamp: t,
					postId: s
				} = e;
				const n = new Date(t),
					r = P[n.getMonth()],
					a = `${n.getFullYear()}/${r}-${n.getDate()}-1/`;
				return o.a.createElement(i.a, null, o.a.createElement(O.a, {
					className: j.a.Widget,
					contentOnly: !0
				}, o.a.createElement(u, {
					postId: s,
					url: a
				}), o.a.createElement(I, null, o.a.createElement(_, {
					directoryTimestamp: t,
					postId: s
				}))))
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "b", (function() {
				return I
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/components/PostList/Placeholder.tsx"),
				g = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				C = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/tracking.ts");

			function y() {
				return Object(u.u)({
					currentProfileName: u.i,
					isCommentPermalink: u.w,
					isCommentsPage: u.x,
					isFrontpage: u.A,
					isProfilePostListing: u.L,
					isTopicPage: u.R,
					pageLayer: e => e
				})
			}
			const j = y(),
				k = {
					apiError: C.c,
					apiPending: C.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.S)(e, t),
					loadMore: C.g,
					postsById: v.S,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(v.D)(e, s, n, o)
					}),
					subredditsById: O.bb,
					viewportDataLoaded: E.a,
					pageReferrer: u.V,
					postListPlaceholderComponent: () => x.a,
					isNpsScrollSurveyEnabled: f.e
				},
				P = Object(o.c)(k),
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
						})), e(c.L(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, o) => {
						e(c.O(t, n, o))
					},
					trackOnPostExitedViewport: (t, s, n, o, r) => {
						e(c.P(t, n, o, r))
					},
					showModalOnScroll: () => e(c.cb()),
					surveyTriggerScrollCounted: () => e(Object(m.l)())
				}),
				_ = e => Object(b.b)({
					...e
				}),
				w = (e, t, s, n) => {
					const {
						listingKey: o,
						hostPostData: r,
						listingBelowVariant: i
					} = n;
					return Object(h.k)(e, t, "post", o, r, i, void 0)
				},
				S = Object(n.b)(P, I, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: _,
					postClickEventFactory: w
				}));
			t.a = e => Object(p.c)(j(S(e)))
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
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
			const n = "ModerationPage--Modal--AddAward",
				o = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				i = 4,
				a = 1e4,
				d = .2,
				c = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext(() => () => {})
		},
		"./src/reddit/contexts/Visibility.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			}));
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = s("./node_modules/raf/index.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = {
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
						this.state.isVisible || r()(this.setVisible)
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
						...c,
						...t
					};
					return a.a.createElement(n.a, d({}, o, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(l.Provider, {
						value: s
					}, e)))
				}
			}

			function p() {
				return Object(i.useContext)(l)
			}
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(i.a, {
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
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: o
					} of t) s.push(Object(n.f)(o));
				return s
			}
		},
		"./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				r = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				i = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				d = s("./src/reddit/models/Post/index.ts");
			t.a = e => {
				let {
					getState: t,
					onFailure: s,
					onSuccess: c,
					postId: l,
					response: m
				} = e;
				if (!m.ok) return void s(m.error);
				const p = m.body,
					{
						post: u
					} = p && p.data,
					b = t(),
					h = Object(n.a)(l, null, {
						isOtherDiscussions: !0
					});
				if (u) {
					if (u.otherDiscussions && u.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = u, {
							postFlair: s,
							postIds: n,
							posts: m,
							profiles: p,
							subreddits: x
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								s = e => {
									const s = Object(r.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: n
									} = e;
									if (n && n.type === d.a.Post && n.postInfo) {
										const e = Object(r.f)(n.postInfo);
										t.posts[e.id] = e
									}
									return Object(d.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(i.a)(e.profile)) : Object(d.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(a.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(o.a)(e.subreddit))), s.id
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
						c({
							count: t,
							key: h,
							meta: b.meta,
							postFlair: s,
							postId: l,
							postIds: n,
							posts: m,
							profiles: p,
							subreddits: x
						})
					}
				} else c({
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
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => {
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
		"./src/reddit/helpers/trackers/features/expandedCrossposts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => s => ({
					source: "post_discovery",
					action: "view",
					noun: "crosspost",
					post: e,
					subreddit: t,
					...n.n(s)
				}),
				r = (e, t) => s => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost",
					post: e,
					subreddit: t,
					...n.n(s)
				}),
				i = () => e => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost_see_all",
					...n.n(e)
				})
		},
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(n.n)(e),
					media: Object(n.A)(e, t),
					profile: Object(n.Q)(e),
					subreddit: Object(n.gb)(e) || Object(n.jb)(e, t)
				}),
				r = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(n.H)(t, e),
					...o(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(n.H)(t, e),
					...o(t, e)
				})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/promo.ts"),
				o = s("./src/reddit/hooks/usePromoContext.ts");

			function r(e) {
				const {
					promos: t
				} = Object(o.a)();
				return !!e && t.get(e) === n.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function r(e) {
				const t = Object(n.e)(o.a) === e,
					s = Object(n.e)(o.c) === e,
					r = Object(n.e)(o.e) === e;
				return t || s || r
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(n.useContext)(o.a)
			}
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(d.a.ModSettings, Object(i.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			const r = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M18.04 7.67457C18.5905 9.55741 18.4654 11.5734 17.6865 13.3738C16.9076 15.1742 15.5238 16.6457 13.7746 17.5336C12.0254 18.4215 10.0209 18.67 8.1078 18.2362C6.19473 17.8023 4.49351 16.7133 3.29851 15.1576C2.10351 13.602 1.48992 11.6775 1.5639 9.71728C1.63788 7.75702 2.39478 5.88429 3.70364 4.42313C5.01249 2.96197 6.79095 2.00431 8.73128 1.71586C10.6716 1.42742 12.6517 1.82633 14.329 2.84357L15.189 1.90557C13.2556 0.658893 10.9412 0.141738 8.661 0.446834C6.38077 0.75193 4.2838 1.85932 2.74608 3.57044C1.20837 5.28156 0.330485 7.4845 0.269845 9.78425C0.209205 12.084 0.969774 14.3301 2.41518 16.1199C3.86058 17.9097 5.89628 19.1261 8.15726 19.5509C10.4182 19.9757 12.7566 19.5813 14.7531 18.4382C16.7496 17.2952 18.2736 15.4783 19.0519 13.3134C19.8301 11.1485 19.8118 8.77715 19 6.62457L18.04 7.67457Z",
				fill: "inherit"
			}), o.a.createElement("path", {
				d: "M9.99503 12.6426C9.91293 12.6427 9.83162 12.6266 9.75577 12.5952C9.67991 12.5638 9.61101 12.5177 9.55303 12.4596L5.54703 8.45257L6.43203 7.56957L9.97603 11.1146L19.013 1.24657L19.935 2.08957L10.456 12.4396C10.3989 12.5013 10.3298 12.5509 10.253 12.5852C10.1762 12.6196 10.0932 12.6381 10.009 12.6396L9.99503 12.6426Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/ClearFilled/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), o.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/SquareLock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const d = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Trophy/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			})))
		},
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				l = s("./src/reddit/components/AlertBanner/heights.ts"),
				m = s("./src/reddit/components/AppRouter/index.tsx"),
				p = s("./src/reddit/components/LightboxHeader/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				b = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				h = s("./src/reddit/models/Theme/index.ts"),
				x = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				C = s.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(r.b)(() => Object(i.c)({
					showFPR: g.O,
					showSuspended: g.X,
					showOffline: e => e.connection.showBanner
				})),
				E = Object(d.a)(e => {
					let {
						className: t,
						isCollectionLayout: s,
						theme: n,
						...r
					} = e;
					const i = Object(x.a)({
						theme: n,
						...r
					});
					return o.a.createElement("div", v({
						className: Object(a.a)(C.a.fakeOverlay, t),
						style: {
							"--fakelightbox-overlay-background": Object(h.g)(i.canvas, i.canvasImgUrl, i.canvasImgPosition),
							"--fakelightbox-overlay-max-width": s ? `${u.h}px` : `${u.i}px`
						}
					}, r))
				});
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR,
							showOffline: this.props.showOffline
						};
						return o.a.createElement(m.a, {
							className: Object(a.a)(C.a.fakeOverlayLightboxHeaderWrapper, {
								[C.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(C.a, t))
						}, o.a.createElement(p.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(E, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), o.a.createElement(c.a.Consumer, null, this.renderWrapper), o.a.createElement(b.a, e))
				}
			}
			t.a = O(y)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				a = s.n(i);
			const d = e => o.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(r.a)(a.a.lightboxContainer, {
						[a.a.mIsCollectionLayout]: e.isCollectionLayout,
						[a.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				c = e => o.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxContent, {
						[a.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[a.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				l = e => o.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxSidebar, {
						[a.a.defaultLightboxSidebar]: !e.isCollectionLayout,
						[a.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class m extends o.a.PureComponent {
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
						isFakeOverlay: n,
						sidebar: r
					} = this.props;
					return o.a.createElement(d, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: n,
						tabIndex: -1
					}, o.a.createElement(c, {
						isCollectionLayout: s,
						isFakeOverlay: n,
						redditStyle: !0
					}, t, e), r && o.a.createElement(l, {
						isCollectionLayout: s,
						isFakeOverlay: n
					}, r))
				}
			}
			t.a = m
		},
		"./src/reddit/pages/CollectionCommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/get.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				p = s("./src/reddit/constants/history.ts"),
				u = s("./src/reddit/contexts/Post/index.tsx"),
				b = s("./src/reddit/helpers/history/index.ts"),
				h = s("./src/reddit/models/Comment/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/pages/CommentsPage/index.tsx"),
				f = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				v = s("./node_modules/reselect/es/index.js");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = Object(c.b)(() => Object(v.c)({
				primaryPostId: C.p
			}))(e => {
				const t = e.postId || e.primaryPostId;
				return t ? d.a.createElement(u.a, {
					postId: t
				}, d.a.createElement(g.CommentsPage, O({}, e, {
					postId: t
				}))) : null
			});
			t.default = Object(f.a)(e => {
				const {
					state: t
				} = e.location, s = i()(t, p.b.IsOverlay, !1), n = i()(t, p.b.CloseLocation, null), r = i()(t, p.b.ScrollOnLoad, !1);
				r && Object(b.c)(p.b.ScrollOnLoad);
				const a = e.match.params,
					{
						partialCommentId: c,
						partialPostId: u,
						subredditName: g,
						collectionId: f
					} = a,
					C = u ? Object(x.u)(u) : void 0,
					v = c && Object(h.h)(c),
					O = o()([...Object(l.a)(e.location.search)]),
					y = {};
				e.hasSortParam && (y.sort = e.sort, y.hasSortParam = !0);
				const j = Object(m.a)(f, C, v, y);
				return d.a.createElement(E, {
					closeLocation: n,
					collectionId: f,
					commentId: v,
					commentsPageKey: j,
					isOverlay: s,
					location: e.location,
					postId: C,
					instanceId: O.instanceId,
					shouldScrollToComments: r,
					sort: e.sort,
					subredditName: g,
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
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				discoveryExperimentLink: "_1aOgrREECvp9S07UGKx-jG"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				c = s("./src/reddit/components/ExpandedCrossposts/async.tsx"),
				l = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/helpers/path/index.ts"),
				u = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				b = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/hooks/usePageLayer.ts"),
				g = s("./src/reddit/selectors/comments.ts"),
				f = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				C = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				v = s.n(C);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = Object(i.c)({
				isSubredditDiscoveryCrosspostEnabled: f.a,
				headComment: g.x,
				post: g.I
			}), y = e => {
				var t;
				const s = Object(x.a)(),
					{
						isSubredditDiscoveryCrosspostEnabled: n,
						headComment: i,
						post: g
					} = Object(r.e)(t => E(t, e)),
					f = Object(m.b)(),
					{
						commentId: C,
						isOverlay: y,
						postId: j
					} = e;
				if (!g) return null;
				const k = null !== (t = g.numDuplicates) && void 0 !== t ? t : 0,
					P = void 0 !== C,
					I = g.permalink,
					_ = k > 0,
					w = Object(p.b)(Object(d.e)(I));
				return P || _ ? o.a.createElement("div", {
					className: v.a.CommentsNavigationPane
				}, P && o.a.createElement("div", null, o.a.createElement(l.a, {
					className: v.a.linkOrOverlay,
					"data-testid": "view_all_comments_link",
					isOverlay: y,
					to: Object(p.b)(I),
					onClick: () => f(Object(h.l)(j, i, s))
				}, O._("View all comments", null, {
					hk: "3I5IX9"
				})), i && null !== i.parentId && o.a.createElement(l.a, {
					className: v.a.linkOrOverlay,
					isOverlay: y,
					to: Object(p.b)(i.permalink + "?context=8&depth=9")
				}, O._("Show parent comments", null, {
					hk: "AVRCa"
				}))), _ && o.a.createElement(o.a.Fragment, null, n && o.a.createElement(c.a, {
					postId: j
				}), o.a.createElement(l.a, {
					className: Object(a.a)(v.a.OtherDiscussionsLink, {
						[v.a.discoveryExperimentLink]: n
					}),
					isOverlay: y,
					onClick: () => f(n ? Object(u.b)() : Object(b.a)(j)),
					to: w
				}, n ? o.a.createElement(o.a.Fragment, null, O._("View all", null, {
					hk: "30twDK"
				}), ` (${k})`) : O._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [O._plural(k, "other discussion communities count")], {
					hk: "3oofZ8"
				})))) : null
			}
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
				return Tt
			})), s.d(t, "CommentsPage", (function() {
				return Dt
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s.n(o),
				i = s("./node_modules/lodash/get.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				p = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-redux/es/index.js"),
				b = s("./node_modules/reselect/es/index.js"),
				h = s("./src/reddit/models/PostDraft/index.ts"),
				x = s("./src/telemetry/index.ts"),
				g = s("./src/telemetry/models/Timer.ts"),
				f = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/domUtils/index.ts"),
				O = s("./src/lib/fastdom/index.ts"),
				E = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/makeCommentsPageKey/index.ts"),
				j = s("./src/lib/makeDraftKey/index.ts"),
				k = s("./src/lib/performanceTimings/index.tsx"),
				P = s("./src/reddit/actions/ads/index.ts"),
				I = s("./src/reddit/actions/comment/index.ts"),
				_ = s("./src/reddit/actions/comment/authoring.ts"),
				w = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				S = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				N = s("./src/reddit/actions/login.ts"),
				T = s("./src/reddit/actions/modal.ts"),
				L = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				R = s("./src/reddit/actions/pages/comments.ts"),
				M = s("./src/reddit/actions/reportFlow/index.ts"),
				F = s("./src/reddit/actions/tooltip.ts"),
				A = s("./src/reddit/actions/upvotePrompt.ts"),
				B = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				D = s("./src/reddit/components/CrosspostRecommendationsModal/async.tsx"),
				V = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				U = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				W = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				H = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				K = s("./src/reddit/constants/componentSizes.ts"),
				G = s("./src/reddit/constants/elementIds.ts"),
				q = s("./src/reddit/constants/history.ts"),
				Y = s("./src/reddit/constants/keycodes.ts"),
				Q = s("./src/reddit/constants/posts.ts"),
				z = s("./src/reddit/constants/screenWidths.ts"),
				J = s("./src/reddit/contexts/ApiContext.tsx"),
				X = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Z = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				$ = s("./src/reddit/helpers/sessionStorage/index.ts"),
				ee = s("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				te = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				se = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				ne = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				oe = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				re = s("./src/reddit/selectors/subreddit.ts"),
				ie = s("./src/reddit/selectors/upvotePrompt.ts"),
				ae = s("./src/reddit/featureFlags/profileCollections.ts"),
				de = s("./src/reddit/contexts/Post/index.tsx"),
				ce = s("./src/reddit/models/Comment/index.ts"),
				le = s("./src/reddit/models/Post/index.ts"),
				me = s("./src/reddit/models/Subreddit/index.ts"),
				pe = s("./src/reddit/selectors/chatPost.ts"),
				ue = s("./src/reddit/selectors/comments.ts"),
				be = s("./src/reddit/selectors/commentSelector.ts"),
				he = s("./src/reddit/selectors/commentsListTruncated.ts"),
				xe = s("./src/reddit/selectors/creatorStats.ts"),
				ge = s("./src/reddit/selectors/discoveryUnit.ts"),
				fe = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				Ce = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ve = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Oe = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				Ee = s("./src/reddit/selectors/experiments/d2xSeoLightboxExperiment.ts"),
				ye = s("./src/reddit/selectors/experiments/postSeo.ts"),
				je = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				ke = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				Pe = s("./src/reddit/selectors/isEligibleForCommentTruncation.ts"),
				Ie = s("./src/reddit/selectors/meta.ts"),
				_e = s("./src/reddit/selectors/moderatorPermissions.ts"),
				we = s("./src/reddit/selectors/posts.ts"),
				Se = s("./src/reddit/selectors/tooltip.ts"),
				Ne = s("./src/reddit/selectors/user.ts"),
				Te = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				Le = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Re = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Me = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Fe = s("./src/reddit/components/Comments/index.tsx"),
				Ae = s("./src/reddit/components/Comments/States/index.tsx"),
				Be = s("./src/reddit/components/CommentsChat/Loader.ts"),
				De = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ve = s("./src/reddit/components/CommentSort/index.tsx"),
				Ue = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				We = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				He = s("./src/reddit/components/CreatorStats/loader.tsx"),
				Ke = s("./src/reddit/components/HeaderImage/index.tsx"),
				Ge = s("./src/reddit/components/Hovercards/helpers.ts"),
				qe = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Ye = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Qe = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				ze = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Je = s("./src/reddit/components/JumpToContent/index.tsx"),
				Xe = s("./src/reddit/components/NewCommentPill/async.tsx"),
				Ze = s("./src/reddit/components/PostContent/index.tsx"),
				$e = s("./src/reddit/components/PostDetailStickyHeader/async.tsx"),
				et = s("./src/reddit/components/PostTopMeta/index.tsx"),
				tt = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				st = s("./src/reddit/components/SubredditNav/index.tsx"),
				nt = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ot = s("./src/reddit/helpers/datadome.ts"),
				rt = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				it = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				at = s("./src/reddit/helpers/history/index.ts"),
				dt = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				ct = s("./src/reddit/helpers/name/index.ts"),
				lt = s("./src/reddit/helpers/postCollection.ts"),
				mt = s("./src/reddit/helpers/resonatePage/index.ts"),
				pt = s("./src/reddit/helpers/trackers/lightbox.ts"),
				ut = s("./src/reddit/helpers/trackers/screenview.ts"),
				bt = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				ht = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				xt = s("./src/reddit/layout/page/Listing/index.tsx"),
				gt = s("./src/reddit/models/ContentGate.ts"),
				ft = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				Ct = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				vt = s("./src/reddit/selectors/experiments/chat.ts"),
				Ot = s("./src/reddit/pages/CommentsPage/index.m.less"),
				Et = s.n(Ot);

			function yt() {
				return (yt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const jt = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				kt = e => {
					let {
						condition: t,
						wrap: s,
						children: n
					} = e;
					return t ? s(n) : n
				},
				Pt = 200,
				It = 80,
				_t = 32,
				wt = Object(n.a)({
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
				St = Object(n.a)({
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
				Nt = Object(n.a)({
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
				Tt = e => {
					let {
						postId: t,
						commentId: s,
						commentsPageKey: n
					} = e;
					return s ? Object(y.a)(t) : n
				},
				Lt = e => {
					const {
						state: t
					} = e.location, s = a()(t, q.b.IsOverlay, !1), n = a()(t, q.b.CloseLocation, null), o = a()(t, q.b.ScrollOnLoad, !1);
					o && Object(at.c)(q.b.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(le.u)(i), l = r && Object(ce.h)(r);
					return m.a.createElement(de.a, {
						postId: c
					}, m.a.createElement(Dt, {
						closeLocation: n,
						commentId: l,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: c,
						shouldScrollToComments: o,
						sort: e.sort,
						subredditName: d
					}))
				},
				Rt = Object(X.u)(),
				Mt = () => Object(b.c)({
					apiError: ue.c,
					apiPending: ue.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(we.U)(e, {
							postId: s
						});
						return !!(n && n.id && e.moderatingSubreddits[n.id])
					},
					canShowCrosspostRecommendationsModal: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(te.a)(e, s)
					},
					canViewCreatorStats: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(xe.a)(e, s)
					},
					comment: be.b,
					communityBannerDiscoveryUnit: ge.a,
					isSubredditDiscoveryCrosspostEnabled: ke.a,
					contentGateInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return Object(Ne.f)(e, s)
					},
					currentUserShowNSFW: Ne.kb,
					dismissedSubreddits: fe.a,
					fullyLoaded: ue.u,
					hasModeratorPostPermissions: _e.c,
					headComment: ue.x,
					isActionBarAnimationEnabled: oe.b,
					isAvatarsInCommentsEnabled: ve.a,
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							postId: s
						} = t;
						return !!Object(we.w)(e, {
							postId: s
						}) && Object(Ce.a)(e)
					},
					isCommentBeforeSignUpEnabled: ee.a,
					isCountAnimShadowTestEnabled: oe.e,
					isCrawler: (e, t) => !!Object(Ie.c)(e),
					isCreatorStatsEnabled: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(Oe.a)(e, s)
					},
					isCrosspostRecommendationsExperimentEnabled: te.b,
					isD2xPdpSideRailRecsEnabled: se.b,
					isD2xSeoDisableLightboxEnabled: Ee.a,
					isEligibleForCommentTruncation: Pe.a,
					isChatPost: pe.d,
					isChatPostV2Enabled: vt.b,
					isCommentsListTruncated: he.a,
					isLoggedIn: Ne.Q,
					isNightmodeOn: Ne.db,
					isTooltipOpen: (e, t) => !!Object(Se.a)(e),
					origin: Ie.j,
					post: we.G,
					postSEOV2IdCardVariant: ye.h,
					profileCollectionsEnabled: ae.a,
					replyComment: (e, t) => {
						let {
							postId: s,
							commentId: n,
							commentsPageKey: o
						} = t;
						return Object(ue.s)(e, {
							commentsPageKey: Tt({
								postId: s,
								commentId: n,
								commentsPageKey: o
							})
						})
					},
					shouldOpenPostInNewTab: Ne.jb,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(re.w)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: we.U,
					userHovercardIsOpen: (e, t) => Object(Se.b)(Object(Ge.b)({
						itemId: t.postId,
						tooltipIdPrefix: U.a,
						tooltipType: et.c.StickyPost
					}))(e),
					userPrefs: Ne.Hb,
					inResonatePilot: je.a,
					isQualifiedForUpvotePrompt: ie.c,
					isTrueblockPCBlockeeEnabled: Ce.d,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditName: s
						} = t;
						const n = Object(re.F)(e, s);
						return !!n && Object(_e.i)(e, n)
					},
					isNsfwBlurSubreddit: ne.e,
					isNsfwFullPageInterstitial: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(we.U)(e, {
								postId: s
							}),
							o = !(!n || !n.isNSFW),
							r = Object(ne.f)(e) === ne.a.NoPreview;
						return o && r
					}
				}),
				Ft = (e, t) => ({
					closeCrosspostRecommendationsModal: () => e(Object(T.g)(V.a)),
					dismissTruncation: t => e(Object(Te.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(w.a)()),
					setCommentFocus: t => e(I.f({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(R.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(F.i)()),
					onToggleTooltip: t => e(Object(F.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(N.i)()),
					openNsfwModal: () => e(Object(L.a)()),
					openRegisterModal: () => e(Object(N.j)()),
					openReportFlow: (t, s) => e(Object(M.c)(t, s)),
					submitCommentAfterSignUp: () => e(_.m()),
					goToSubredditPage: t => e(Object(u.b)(t)),
					truncateCommentsList: () => e(Object(w.b)()),
					fetchCommentsNativeAd: t => e(Object(P.a)(t)),
					getIsTrackingCrossposts: t => e(Object(S.b)(t)),
					getPostCrowdControlLevel: t => e(Object(Le.b)(t)),
					triggerUpvotePrompt: (t, s, n) => {
						e(Object(A.b)(t, s, n))
					}
				}),
				At = Object(p.b)(Mt, Ft);
			class Bt extends m.a.Component {
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
							scrollAdThreshold: n,
							scrollPostThreshold: o,
							props: {
								userHovercardIsOpen: r,
								onToggleTooltip: i,
								postId: a
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const d = s === window ? s.scrollY : s ? s.scrollTop : 0;
						this.scrollY = d, this.state.commentNativeAdId && (!e && void 0 !== n && d >= n && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== n && d < n && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== o && d >= o && (this.didScrollPastPost = !0), t && void 0 !== o && d < o && (this.didScrollPastPost = !1, r && O.a.write(() => {
							i(Object(Ge.b)({
								itemId: a,
								tooltipIdPrefix: U.a,
								tooltipType: et.c.StickyPost
							}))
						}))
					}, C.K), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(pt.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const n = s && Object(le.t)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(it.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === Y.b.F || e.keyCode === Y.a.F,
							s = e.ctrlKey || e.metaKey;
						t && s && this.props.expandCommentsList()
					}, this.setLayoutRef = e => {
						this.setState({
							layoutRef: e
						})
					}, this.onAllCommentsRendered = () => {
						this.props.isEligibleForCommentTruncation || this.state.allCommentsRendered || this.setState({
							allCommentsRendered: !0
						})
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.didPassAdScrollThreshold = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						allCommentsRendered: !1,
						layoutRef: null,
						commentNativeAdId: null,
						isUpvotePromptTriggered: !1
					}
				}
				hasCommentAdRef() {
					return this.commentAdRef && this.commentAdRef.clientHeight > 0
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
					this.props.isQualifiedForUpvotePrompt && (this.upvotePromptId = setTimeout(() => {
						this.props.triggerUpvotePrompt(this.props.postId, !1, () => this.setState({
							isUpvotePromptTriggered: !0
						}))
					}, ie.b));
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLoggedIn: n,
							isNsfwBlurSubreddit: o,
							isOverlay: r,
							openNsfwModal: i,
							post: a,
							shouldScrollToComments: d,
							subredditName: c
						}
					} = this, l = new URLSearchParams(this.props.location.search).get("report") || "";
					if (["true", "1"].includes(l) && this.props.openReportFlow(this.props.postId, r), a && !a.isSponsored && !a.isRemoved && a.belongsTo.type !== Q.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(a.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (r ? (this.scrollContainerEl = document.getElementById(G.e), d && (t || s || this.hasCommentAdRef()) && a && a.numComments ? this.scrollToComments() : O.a.write(() => {
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
							const s = null === (e = Object(dt.b)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(le.u)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), O.a.read(() => {
							const e = [Object(ot.a)()];
							this.props.isOverlay || Object(k.d)(k.c.CommentsPage, n, e)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						C.Mb.includes(e) && Object(mt.a)(e)
					}
					this.props.isLoggedIn && Object($.c)() && this.props.submitCommentAfterSignUp(), (null == a ? void 0 : a.isNSFW) && c && o && i()
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				UNSAFE_componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.location.pathname !== this.props.location.pathname) {
						const e = new URLSearchParams(this.props.location.search).get("report") || "";
						["true", "1"].includes(e) && this.props.openReportFlow(this.props.postId, this.props.isOverlay)
					}
					if (e.postId !== this.props.postId) {
						const e = this.props.post && Object(lt.a)(this.props.post);
						this.props.post && this.props.post.numComments ? O.a.read(this.handleScroll) : O.a.write(() => {
							e || Object(v.c)(this.scrollContainerEl, 0), O.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && O.a.write(() => {
							setTimeout(() => {
								Object(v.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = K.b + (this.props.isOverlay ? K.n : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const o = (n = this.props.isOverlay ? document.getElementById(G.e) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								r = Math.abs(o - s),
								i = this.props.isOverlay ? _t : r - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && O.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(v.c)(n, i) : Object(v.c)(document, i)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					if (this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0, this.upvotePromptId && clearTimeout(this.upvotePromptId), this.props.isOverlay && this.props.isQualifiedForUpvotePrompt && !this.state.isUpvotePromptTriggered) {
						const e = !0;
						this.props.triggerUpvotePrompt(this.props.postId, e)
					}
					this.props.isCrosspostRecommendationsExperimentEnabled && this.props.closeCrosspostRecommendationsModal()
				}
				truncateCommentList() {
					const {
						dismissedSubreddits: e,
						subredditOrProfile: t,
						truncateCommentsList: s
					} = this.props, n = t && t.id;
					n && !e.includes(n) && s()
				}
				updateMeasurements() {
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = Pt, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = Pt)
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
						const e = document.getElementById(G.e);
						if (e) {
							let t, s;
							this.hasCommentAdRef() ? t = this.commentAdRef.offsetTop : this.commentFormRef ? (t = this.commentFormRef.offsetTop - It, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - It, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), O.a.write(() => {
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
					return x.c.has(s) && (e || !t || this.listLongEnoughForScreenView())
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
							sendEvent: n,
							sort: o
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = x.c.end(t);
						n(Object(ut.c)(t, s, e, g.TimerType.InApp, r, o))
					})
				}
				isCommentPermalink() {
					return void 0 !== this.props.commentId
				}
				renderPageError() {
					const {
						contentGateInfo: e,
						currentUserShowNSFW: t,
						isNsfwBlurSubreddit: s,
						isOverlay: n,
						post: o,
						subredditName: r
					} = this.props, i = !(!o || !o.isNSFW || t);
					if (!i || s) return null;
					const a = Object(rt.a)(e, i, r);
					if (!a) return null;
					let d = m.a.createElement(Nt, a);
					return n && (d = m.a.createElement(bt.a, {
						content: d
					})), d
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						canShowCrosspostRecommendationsModal: s,
						closeCrosspostRecommendationsModal: n,
						closeLocation: o,
						commentId: r,
						commentsPageKey: i,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: d,
						isCrawler: c,
						isCrosspostRecommendationsExperimentEnabled: l,
						isD2xPdpSideRailRecsEnabled: p,
						isD2xSeoDisableLightboxEnabled: u,
						isEligibleForCommentTruncation: b,
						isLoggedIn: h,
						isModWithUserNotesPermissions: x,
						isNightmodeOn: g,
						isNsfwBlurSubreddit: v,
						isNsfwFullPageInterstitial: O,
						isOverlay: E,
						post: y,
						postId: j,
						postSEOV2IdCardVariant: k,
						profileCollectionsEnabled: P,
						sendEvent: I,
						sort: _,
						subredditName: w,
						subredditOrProfile: S
					} = this.props;
					if ((null == y ? void 0 : y.isNSFW) && w && O) return m.a.createElement(H.a, {
						contentTitle: Object(ct.c)(w)
					});
					const N = Object(ye.f)(k);
					if (!y) {
						if (t) return m.a.createElement(Ae.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === C.n ? m.a.createElement(Nt, {
							contentGateType: gt.a.PostBlockedForLegalReason
						}) : m.a.createElement(Ae.d, {
							postId: j,
							commentId: r,
							apiError: e,
							sort: _
						}) : m.a.createElement(Ae.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const T = this.isCommentPermalink(),
						L = y.belongsTo.type === Q.a.PROFILE,
						R = Object(lt.a)(y) && (!L || P),
						M = !h,
						F = S && S.isQuarantined,
						A = !b && !this.state.allCommentsRendered && !c,
						V = l && s,
						U = y.isNSFW && v;
					return jt.input.channel.postID = j, m.a.createElement(Ut, {
						closeLocation: o,
						commentsPageKey: i,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isD2xPdpSideRailRecsEnabled: p,
						isD2xSeoDisableLightboxEnabled: u,
						isLoggedIn: h,
						isOverlay: E,
						isSwapVariant: N,
						post: y,
						shouldBlurHeaderImage: U,
						subredditOrProfile: S,
						shouldFitPageToContent: M,
						isCollectionLayout: R
					}, m.a.createElement(Xe.a, {
						postId: j,
						isNightMode: g,
						isOverlay: E,
						commentId: r
					}), !E && m.a.createElement($e.a, {
						post: y
					}), F && m.a.createElement(ze.a, {
						subredditName: S.name
					}), m.a.createElement(Je.a, null), m.a.createElement("div", {
						className: Object(f.a)(Et.a.PageContentWrapper, {
							[Et.a.LargePageContent]: R,
							[Et.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, R && m.a.createElement(St, {
						isOverlay: E,
						isNightmodeOn: g,
						postId: j
					}), m.a.createElement(kt, {
						condition: R,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: Et.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Ze.c, {
						isCommentPermalink: T,
						isOverlay: E,
						isModWithUserNotesPermissions: x,
						postId: j,
						redditStyle: E,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: I,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: d,
						isCrosspostRecommendationsExperimentEnabled: l
					}), this.props.canViewCreatorStats && !F && this.props.isCreatorStatsEnabled && m.a.createElement(He.a, {
						post: y,
						subreddit: S
					}), this.state.commentNativeAdId && m.a.createElement("div", {
						ref: this.setCommentAdRef
					}, m.a.createElement(B.a, {
						key: `event-post-id-${y.id}`,
						isOverlay: E,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), S && !Object(me.i)(S) && m.a.createElement(W.a, {
						awaitAllCommentsRendered: A,
						contentContainerRef: this.state.layoutRef,
						isOverlay: E,
						post: y,
						subredditOrProfile: S
					}), V && m.a.createElement(D.a, {
						ignoreDefaultFocus: !0,
						onCloseModal: n,
						post: y,
						withOverlay: !0
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: n,
						commentsPageKey: r,
						fullyLoaded: i,
						hasModeratorPostPermissions: a,
						headComment: d,
						isAvatarsInCommentsEnabled: c,
						isBlockedUserBannerEnabled: l,
						isChatPost: p,
						isChatPostV2Enabled: u,
						isCommentsListTruncated: b,
						isCommentBeforeSignUpEnabled: x,
						isEligibleForCommentTruncation: g,
						isLoggedIn: C,
						isOverlay: v,
						location: O,
						onOtherDiscussions: E,
						openLoginModal: y,
						openRegisterModal: k,
						origin: P,
						post: I,
						postId: w,
						replyComment: S,
						sendEvent: N,
						sort: T,
						subredditAboutInfo: L,
						subredditOrProfile: R,
						isTrueblockPCBlockeeEnabled: M
					} = this.props;
					if (!I) return null;
					const F = this.isCommentPermalink(),
						A = [],
						B = I.isLocked && !s,
						D = !(F || I.isArchived || L && L.userIsBanned || I.authorIsBlocked && l || I.unrepliableReason && M);
					if (B) A.push(m.a.createElement(Ye.a, {
						key: "commentThreadBanner",
						subredditOrProfile: R
					}));
					else if (I.isArchived) A.push(m.a.createElement(qe.a, {
						key: "commentThreadBanner"
					}));
					else if (D && !p && !E)
						if (C || !C && x) {
							const e = Object(j.a)(h.c.replyToPost, w);
							A.push(m.a.createElement(Re.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: h.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: w,
								submitAction: (t, s) => {
									let {
										validate: n,
										...o
									} = t;
									return n ? _.v({
										postId: w,
										commentsPageKey: r,
										draftKey: e,
										formData: o,
										editorMode: s
									}) : _.p({
										postId: w,
										commentsPageKey: r,
										draftKey: e,
										formData: o,
										editorMode: s
									})
								},
								submitButtonText: o.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else A.push(m.a.createElement(Me.a, {
							key: "loggedOutCommentForm",
							location: O,
							openLoginModal: y,
							openRegisterModal: k,
							origin: P
						}));
					if (I.contestMode && A.push(m.a.createElement(Qe.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), p || E || (this.props.isSubredditDiscoveryCrosspostEnabled ? A.push(m.a.createElement(ft.a, {
							commentId: n,
							commentsPageKey: r,
							isOverlay: v,
							key: "commentNavigation",
							postId: w
						}), m.a.createElement(Ve.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: v,
							key: "commentSort",
							location: O,
							postId: w,
							sort: T,
							suggestedSort: I.suggestedSort
						})) : A.push(m.a.createElement(Ve.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: v,
							key: "commentSort",
							location: O,
							postId: w,
							sort: T,
							suggestedSort: I.suggestedSort
						}), m.a.createElement(ft.a, {
							commentId: n,
							commentsPageKey: r,
							isOverlay: v,
							key: "commentNavigation",
							postId: w
						}))), A.push(m.a.createElement(tt.a, {
							key: "subredditForkingCTA",
							postId: w
						})), !t || d || p || E)
						if (!e || d || E)
							if (E) A.push(m.a.createElement(wt, {
								commentSort: T,
								key: "otherDiscussions",
								postId: w,
								isOverlay: v,
								postPermalink: I.permalink
							}));
							else if (p) {
						if (R && R.id) {
							const e = S ? Object(j.a)(h.c.replyToComment, S.id) : Object(j.a)(h.c.replyToPost, w),
								s = Tt({
									postId: w,
									commentId: n,
									commentsPageKey: r
								});
							A.push(m.a.createElement(Be.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !i && t,
								key: "commentsChat",
								postId: w,
								renderedInOverlay: v,
								subredditId: R.id
							}, t => {
								let {
									scrollToBottom: n
								} = t;
								return C ? m.a.createElement(De.a, {
									isV2: u,
									key: "chatCommentsForm",
									postId: w,
									replyComment: S,
									draftKey: e,
									commentsPageKey: s,
									isEditing: !1,
									scrollToBottom: n,
									sendEvent: N
								}) : m.a.createElement(Me.a, {
									key: "loggedOutCommentForm",
									className: Et.a.ChatLoggedOutForm,
									location: O,
									openLoginModal: y,
									openRegisterModal: k,
									origin: P
								})
							}))
						}
					} else A.push(m.a.createElement("div", {
						className: Object(f.a)(Et.a.CommentsPaneWrapper, {
							[Et.a.mIsInOverlay]: v
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(We.a, yt({}, this.props, {
						shouldTruncateComments: g && b,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: I.numComments,
						onClick: this.handleContentClick
					}), m.a.createElement(Fe.a, {
						commentId: n,
						commentsPageKey: r,
						postId: w,
						onAllCommentsRendered: this.onAllCommentsRendered,
						renderedInOverlay: v
					})))), e && d ? A.push(m.a.createElement(Ae.e, {
						key: "commentsErrorState",
						postId: w,
						commentId: n,
						sort: T,
						apiError: e
					})) : !i && t && A.push(m.a.createElement(Ae.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					else A.push(m.a.createElement(Ae.e, {
						key: "errorState",
						postId: w,
						commentId: n,
						sort: T,
						apiError: e
					}));
					else this.didRenderLoading = !0, A.push(m.a.createElement(Ae.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					return m.a.createElement(Z.a.Provider, {
						value: this.sendEventWithName
					}, A)
				}
			}
			const Dt = Rt(Object(J.b)(At(Object(nt.c)(Bt)))),
				Vt = E.a.wrapped(Ue.a, "DetailsPageSidebar", Et.a),
				Ut = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: i,
						isD2xPdpSideRailRecsEnabled: a,
						isD2xSeoDisableLightboxEnabled: d,
						isLoggedIn: c,
						isOverlay: l,
						isSwapVariant: p,
						post: u,
						shouldBlurHeaderImage: b,
						shouldFitPageToContent: h,
						subredditOrProfile: x
					} = e;
					if (!d && !c && !l) return m.a.createElement(ht.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: u,
						sidebar: x && m.a.createElement(Ue.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: u,
							subredditOrProfile: x,
							subredditName: x.name,
							subredditId: x.id
						})
					});
					if (l) return m.a.createElement(bt.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						sidebar: x && m.a.createElement(Ue.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: u,
							subredditOrProfile: x,
							subredditName: x.name,
							subredditId: x.id
						})
					});
					const g = i ? K.i : z.a,
						f = a && x && !Object(me.i)(x) ? `r/${x.name}` : void 0;
					return m.a.createElement(xt.a, {
						backToSubredditName: f,
						containerRef: n,
						maxWidth: K.i,
						fitPageToContent: h,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: p,
						isCollectionLayout: i,
						navBar: x && m.a.Children.toArray([m.a.createElement(Ke.a, {
							key: x.name,
							disableFullscreen: !0,
							headerText: x.name,
							maxWidth: g,
							prefixedHeaderText: x.displayText,
							shouldBlurHeaderImage: b,
							subredditOrProfile: x,
							url: x.url
						}), !Object(me.i)(x) && m.a.createElement(st.a, {
							disableFullscreen: !0,
							homeUrl: x.url,
							maxWidth: g,
							subredditId: x.id
						})]),
						sidebar: x && m.a.createElement(Vt, {
							commentsPageKey: s,
							post: u,
							subredditOrProfile: x,
							subredditName: x.name,
							subredditId: x.id
						})
					})
				};
			t.default = Object(Ct.a)(Lt)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				p = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				u = s("./src/reddit/models/Comment/index.ts"),
				b = s("./src/reddit/models/Post/index.ts");
			const h = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(b.u)(t)
				},
				x = (e, t, s) => {
					const n = h(e),
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
							return o()([...Object(c.a)(t)])
						})(e),
						a = {
							depth: i.depth && parseInt(i.depth, 10) || void 0,
							context: i.context && parseInt(i.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(l.a)(n, r, a)
				},
				g = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = h(t);
						return Object(p.a)(e, s)
					}
				}),
				f = Object(a.b)(g);

			function C(e) {
				return f(t => {
					const {
						hasSortParam: s,
						sortToUse: n
					} = t.commentsPageSort, o = x(t, s, n), r = Object(m.d)(t.match.path), a = {
						...t,
						commentsPageKey: o,
						hasSortParam: s,
						onOtherDiscussions: r,
						sort: n
					};
					return i.a.createElement(e, a)
				})
			}
		},
		"./src/reddit/selectors/commentsListTruncated.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.commentsListTruncated
		},
		"./src/reddit/selectors/dismissedTruncationList.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./node_modules/reselect/es/index.js");
			const o = e => e.dismissedTruncationList,
				r = Object(n.a)((e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s
				}, o, (e, t) => {
					const s = e && e.id;
					return !!s && t.includes(s)
				})
		},
		"./src/reddit/selectors/experiments/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(o.a)(n.I),
				i = Object(o.a)(n.H)
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.Q, i.P, (e, t) => e || t),
				d = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: o.L
				}), e => e === o.U.Enabled)
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return !(Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.ae
					}) === n.sd)
				},
				i = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.be
				}) === n.sd
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.Rc
				});
				return !(!t || Object(n.Vf)(t))
			}
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/meta.ts");
			const i = e => Object(o.c)(e, {
				experimentEligibilitySelector: e => !Object(r.d)(e) && "US" === Object(r.b)(e),
				experimentName: n.Ye
			}) === n.ff.Enabled
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const d = Object(n.a)(i.g, i.d, a.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					throttledVariants: {
						[o.uc.Bottom_cell_dismissible]: e,
						[o.uc.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.uc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(o.Ab, !0),
				m = c(o.Bb, !0),
				p = c(o.Cb, !0),
				u = c(o.Ab, !1),
				b = c(o.Bb, !1),
				h = c(o.Cb, !1)
		},
		"./src/reddit/selectors/experiments/subredditDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts");
			const i = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.qf
					}) === n.sd
				},
				a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.pf
					}) === n.sd
				}
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					if (Object(i.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.Rf
					}) === n.sd
				},
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.Sf
					}) === n.sd
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.Qf
					});
					return t === n.Hf.TypingIndicators || t === n.Hf.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: n.Qf
					});
					return (null == t ? void 0 : t.variant) === n.Hf.IndicatorsPlusCTA
				}
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
				return x
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return O
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.U)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				m = [],
				p = Object(n.a)((e, t) => {
					const s = u(e, t);
					if (!s) return m;
					const n = Object(i.Y)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : m
				}),
				u = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.U)(e, {
						subredditId: s
					}) : null
				},
				b = (e, t, s, n, o) => {
					const i = o.find(e => e <= t) || -1,
						a = o.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const n = s[t - 1],
							o = s[t],
							i = o && Object(r.G)(e, {
								postId: n
							}) || null,
							a = o && Object(r.G)(e, {
								postId: o
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, n)))
				},
				h = [3],
				x = Object(n.a)((e, t) => {
					let {
						existingDUPositions: s,
						listingProps: n
					} = t;
					const o = s.slice().sort();
					let i = -1;
					const a = Object(r.z)(e, {
							listingKey: n.listingKey
						}),
						d = [];
					return h.forEach(t => {
						let s = i + t;
						if (!(s >= a.length)) {
							for (; s < a.length && !b(e, s, t, a, o);) s += 1;
							s < a.length && (d.push(s), i = s)
						}
					}), d
				}),
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				f = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				C = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				O = e => {
					const t = Object(a.P)(e),
						s = o.d.geoSubredditRecommendationDULoggedIn(e),
						n = o.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.Vf)(t)
				},
				d = Object(n.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/isEligibleForCommentTruncation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				r = s("./src/reddit/selectors/meta.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/models/Subreddit/index.ts");
			const c = Object(n.a)((e, t) => t.isOverlay, (e, t) => {
				const s = Object(i.U)(e, {
					postId: t.postId
				});
				return Object(o.b)(e, {
					...t,
					subredditOrProfile: s
				})
			}, i.U, i.G, a.P, a.Q, r.g, (e, t, s, n, o, r, i) => {
				if (!n) return !1;
				const a = !(!s || Object(d.i)(s)),
					c = n.numComments >= 3 && !e || !t;
				return i && a && c && (!o && !r)
			})
		},
		"./src/reddit/selectors/seo/reredditPromo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = s("./src/reddit/selectors/platform.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const a = new Date,
				d = a.getUTCFullYear(),
				c = a.getUTCMonth(),
				l = a.getUTCDate(),
				m = Date.UTC(2008, 0, 1),
				p = Date.UTC(d, c - 7, l),
				u = Object(n.a)(e => Object(r.f)(e), e => Object(o.a)(e), (e, t) => {
					let {
						post: s
					} = t;
					return s && Object(i.U)(e, {
						postId: s.id,
						disallowProfile: !0
					})
				}, (e, t, s) => e && !!t && !t.isNSFW && !!s && !s.isNSFW && !!t.created && t.created > m && t.created < p)
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const a = e => Object(r.c)(e, {
					experimentName: o.Me,
					experimentEligibilitySelector: r.a
				}),
				d = (e, t) => t === o.Ue.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				c = Object(n.a)(i.G, a, (e, t) => d(e, t));
			Object(n.a)((e, t) => t, a, (e, t) => d(e, t))
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
			e.exports = JSON.parse('{"id":"56a80c083eca"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"0a569f10c6e4"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"b7a04b87619f"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c10a566d5f55"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"10c7c14211a7"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"ecec7ad28cab"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage.e5c0bc76b058f98f8fd6.js.map