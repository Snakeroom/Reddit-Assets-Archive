// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.80fc224477300cee07f6.js
// Retrieved at 4/20/2022, 1:40:06 PM by Reddit Dataminer v1.0.0
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
				return x
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
					const e = Object(m.a)(d.qc.Bottom_cell),
						t = Object(m.a)(d.qc.Bottom_cell_dismissible),
						s = Object(m.a)(d.qc.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(d.qc.Bottom_cell_signup_upsell_copy),
						o = Object(m.a)(d.qc.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.qc.Bottom_sheet);
					return e || n || o ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : r ? l.b.SignupUpsellBottomSheet : null
				},
				u = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function x(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
						const {
							showPromo: t
						} = Object(c.a)(), s = p(), r = Object(u.a)(s), l = Object(m.a)(d.qc.Bottom_cell_dismissible_immediate_trigger);
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
					return n.createElement(e, g({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/lib/scroll/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/domUtils/index.ts"),
				o = s("./src/lib/fastdom/index.ts"),
				r = s("./src/reddit/components/CommentSort/index.tsx"),
				i = s("./src/reddit/constants/elementIds.ts");
			const a = () => {
					o.a.write(() => {
						const e = document.getElementById(i.e);
						e ? Object(n.c)(e, 0) : Object(n.c)(document, 0)
					})
				},
				d = e => {
					o.a.read(() => {
						const t = e ? document.getElementById(i.e) : window,
							s = document.getElementById(r.a);
						if (t && s) {
							const n = e ? s.offsetTop : s.offsetTop - 50;
							o.a.write(() => t.scrollTo({
								top: n,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/category/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "b", (function() {
				return O
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
				g = Object(r.a)(b.b),
				x = Object(r.a)(b.a),
				C = () => async (e, t, s) => {
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
						method: a.kb.GET
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
									displayText: Object(m.Kf)(e.category_name)
								};
								s.push(o.id), t[o.id] = o
							}), {
								categories: t,
								categoryIds: s
							}
						})(b.body);
						e(g({
							categories: t,
							categoryIds: s
						}))
					} else e(x(b.error))
				}, f = (Object(r.a)(b.g), Object(r.a)(b.f), Object(r.a)(b.e), Object(r.a)(b.d)), O = e => async (t, s) => {
					const n = Object(u.j)(s(), {
						id: e
					});
					t(f({
						categoryId: e,
						rank: n + 1
					})), Object(p.lb)(Object(u.d)(s()))
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
				return f
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return I
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
				g = Object(o.a)(i.e),
				x = Object(o.a)(i.h),
				C = Object(o.a)(i.c),
				f = Object(o.a)(i.f),
				O = Object(o.a)(i.j),
				v = Object(o.a)(i.i),
				y = () => async (e, t, s) => {
					let {
						gqlContext: o
					} = s;
					const r = t(),
						i = Object(p.e)(r),
						c = Object(p.d)(r),
						u = Object(b.Q)(r);
					if (i || !c) return;
					e(x());
					let f = !1;
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
							if (E(t)) {
								if (j(t)) {
									e(C({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), f = !0
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
									e(h(p)), f = !0
								}
							} else f = !1
						}
					} catch (O) {
						f = !1
					}
					f || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, E = e => {
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
				}, I = () => async (e, t, s) => {
					var n, o;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (o = null === (n = Object(u.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === o ? void 0 : o.route.chunk,
							a = Object(b.R)(i);
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
						g = !!u.listings.postOrder.api.error[b];
					if (h && !g) return;
					s(m({
						key: b
					}));
					const x = await ((e, t) => Object(i.a)(e, {
						...a,
						variables: t
					}))(p(), t);
					Object(d.a)({
						getState: n,
						onFailure: e => s(c(e)),
						onSuccess: e => s(l(e)),
						postId: e,
						response: x
					})
				}
		},
		"./src/reddit/actions/pages/collectionCommentsPage.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "collectionCommentsPagePending", (function() {
				return q
			})), s.d(t, "collectionCommentsPageLoaded", (function() {
				return G
			})), s.d(t, "collectionCommentsPageFailed", (function() {
				return K
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
				g = s("./src/reddit/actions/toaster.ts"),
				x = s("./src/reddit/constants/adEvents.ts"),
				C = s("./src/reddit/constants/parameters.ts"),
				f = s("./src/reddit/constants/postCollection.ts"),
				O = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/endpoints/governance/posts.ts"),
				y = s("./src/config.ts"),
				E = s("./src/lib/makeApiRequest/index.ts"),
				j = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function k(e, t, s) {
				const n = `${y.a.gatewayUrl}/desktopapi/v1/collection_postcomments`;
				return s ? Object(j.a)(`${n}/${e}/${t}/${s}`) : t ? Object(j.a)(`${n}/${e}/${t}`) : Object(j.a)(`${n}/${e}`)
			}
			var I = (e, t, s, o, r) => Object(E.a)(e, {
					data: r,
					endpoint: k(t, s, o),
					method: n.kb.GET
				}),
				P = s("./src/reddit/endpoints/page/subredditPage.ts"),
				w = s("./src/reddit/helpers/canonicalUrls.ts"),
				_ = s("./src/reddit/helpers/commentList/index.ts"),
				S = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				N = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				L = s("./src/reddit/helpers/trackers/screenview.ts"),
				T = s("./src/reddit/models/Comment/index.ts"),
				M = s("./src/reddit/models/Post/index.ts"),
				R = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				F = s("./src/reddit/selectors/platform.ts"),
				A = s("./src/reddit/selectors/postCollection.ts"),
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
			const q = Object(o.a)(V.d),
				G = Object(o.a)(V.b),
				K = Object(o.a)(V.a),
				Y = e => async (t, s) => {
					const {
						collectionId: o,
						partialPostId: r,
						partialCommentId: d,
						subredditName: c = "",
						routePrefix: l
					} = e.params, g = r ? Object(M.t)(r) : "", x = d && Object(T.h)(d), {
						queryParams: v
					} = e, y = s(), {
						instanceId: E
					} = v, j = {
						id: o,
						type: O.b[l]
					}, k = O.b[l] === O.a.PROFILE, {
						hasSortParam: I,
						sortToUse: P
					} = Object(S.a)(y, g), _ = ["context", "depth", "limit", C.g].reduce((e, t) => {
						const s = parseInt(v[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: c,
						hasSortParam: I,
						instanceId: E
					});
					I && (_.sort = P), t(p.r(g)), await Promise.all([k ? t(u.d(c)) : Promise.resolve(), t(J(o, g, x, _))]);
					const N = ((e, t) => {
						const s = Object(A.q)(e, {
							collectionId: t.id
						});
						if (!s) return "";
						const o = Object(D.L)(e, {
								identifier: t
							}),
							r = Object(i.c)(s.title, o.name).toString();
						return Object(a.a)(r, f.c, n.jb)
					})(s(), j) || Object(i.e)();
					t(m.m({
						title: N
					}));
					const R = s().posts.models[g];
					if (R) {
						const n = Object(D.L)(s(), {
							identifier: R.belongsTo
						});
						if (!R.isSponsored)
							if (R.belongsTo.type === O.a.SUBREDDIT) {
								!!Object(D.S)(y, {
									subredditId: R.belongsTo.id
								}) || await t(h.o(n.name))
							} else await t(u.d(n.name));
						const o = s().posts.instances[g] ? e.queryParams.instanceId : R.postId;
						t(Object(b.b)(o))
					}
					k ? Object(w.d)(s(), t, e) : Object(w.e)(s(), t, e), Object(L.w)(s(), !0)
				}, Q = Object(o.a)(V.c), z = (e, t, s, n) => async (o, i, a) => {
					const d = Object(r.a)(e, t, s, n),
						c = i();
					t = t || Object(A.p)(c, {
						collectionId: e
					});
					const l = await I(a.apiContext(), e, t, s, n);
					if (o(Object(m.n)(l.status)), l.ok) {
						if (!(t = t || l.body.collections[e].primaryPostId)) return;
						const s = Object(_.a)(l.body, t, c);
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
					} else o(K({
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
						subredditName: C
					} = n, f = h.pages.comments.keyToHeadCommentId.hasOwnProperty(b), O = h.pages.comments.api.fullyLoaded[b], y = h.pages.comments.api.error[b];
					if (h.pages.comments.api.pending[b] || f && !y) {
						if (f && !h.sidebarPromotedPosts.firstFetch) {
							const e = Object(F.i)(h) ? R.a.COMMENTS_OVERLAY : R.a.COMMENTS;
							window.addEventListener("load", () => {
								i(Object(d.b)(e))
							})
						}
						return void(O || o || i(z(e, t, s, n)))
					}
					const E = h.user.prefs.commentMode;
					i(q({
						key: b,
						collectionId: e,
						commentMode: E,
						postId: t
					}));
					const j = {
						...n
					}; {
						const e = t && Object(B.G)(a(), {
							postId: t
						});
						e && e.numComments && e.numComments > U.MIN_NUM_COMMENTS_TO_TRUNCATE && (j.truncate = U.NUM_COMMENTS_TRUNCATE)
					}
					let k, w = await Object(N.a)("comments", () => I(u.apiContext(), e, t, s, j));
					if (i(Object(m.n)(w.status)), w.ok && (t = t || w.body.collections[e].primaryPostId)) {
						const e = Object.keys(w.body.posts).filter(e => !!w.body.posts[e].isMeta),
							s = Object(B.G)(a(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(v.a)(u.apiContext(), s.belongsTo.id, e);
							t.ok && (k = t.body)
						}
					}
					if (!o) {
						const o = t ? Object(B.G)(a(), {
							postId: t
						}) : null;
						o && w.body.comments && Object.keys(w.body.comments).length < o.numComments ? i(z(e, t, s, n)) : w.ok && i(Q({
							commentMode: E,
							key: b,
							postId: t
						}));
						const r = Object(F.i)(h) ? R.a.COMMENTS_OVERLAY : R.a.COMMENTS;
						i(Object(d.b)(r))
					}
					if (w.ok) {
						if (!t) return;
						const e = Object(_.a)(w.body, t, h);
						i(Object(U.commentsPageLoaded)({
							commentMode: E,
							key: b,
							postId: t,
							meta: h.meta,
							governance: k,
							shouldCollapse: e,
							...w.body
						})), i(g.g(b));
						const s = Object(B.G)(h, {
							postId: t
						});
						s && i(p.z(s, x.a.CommentsView)), !o && s && "subreddit" === s.belongsTo.type && w.body.comments && await i(Object(c.a)({
							commentIds: Object.keys(w.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else C && (i(Object(l.subredditPending)({
						key: b
					})), w = await Object(N.a)("subreddit", () => Object(P.a)(u.apiContext(), C, {})), i(Object(m.n)(w.status))), i(Object(l.handleSubredditPageApiError)(w, C)), i(K({
						error: w.error,
						key: b,
						...w.body
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return mt
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return pt
			})), s.d(t, "commentsPagePending", (function() {
				return ut
			})), s.d(t, "commentsPageLoaded", (function() {
				return bt
			})), s.d(t, "commentsPageFailed", (function() {
				return ht
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return gt
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return xt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return Ct
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return ft
			})), s.d(t, "commentsPageRequested", (function() {
				return Ot
			})), s.d(t, "commentsPageDataRequested", (function() {
				return vt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return yt
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return Et
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
			var g = s("./src/reddit/endpoints/page/subredditPage.ts"),
				x = s("./src/reddit/endpoints/profile/info.ts"),
				C = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				O = s("./src/lib/pageTitle/index.ts"),
				v = s("./src/reddit/actions/economics/helpers/async.ts"),
				y = s("./src/reddit/actions/externalAccount.ts"),
				E = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				j = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				k = s("./src/reddit/actions/platform.ts"),
				I = s("./src/reddit/actions/post.ts"),
				P = s("./src/reddit/actions/profile/index.ts"),
				w = s("./src/reddit/actions/subreddit.ts"),
				_ = s("./src/reddit/actions/subreddit/notifications.ts"),
				S = s("./src/reddit/actions/subreddit/questions.ts"),
				N = s("./src/reddit/actions/toaster.ts"),
				L = s("./src/reddit/constants/adEvents.ts"),
				T = s("./src/reddit/constants/graphql.ts"),
				M = s("./src/reddit/constants/parameters.ts"),
				R = s("./src/reddit/constants/posts.ts"),
				F = s("./src/reddit/helpers/commentList/index.ts"),
				A = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				B = s("./src/reddit/models/Comment/index.ts"),
				D = s("./src/reddit/models/Media/index.ts"),
				U = s("./src/reddit/models/Subreddit/index.ts"),
				V = s("./src/reddit/models/User/index.ts"),
				W = s("./src/reddit/selectors/category.ts"),
				H = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				q = s("./src/reddit/selectors/experiments/postSeo.ts"),
				G = s("./node_modules/reselect/es/index.js"),
				K = s("./src/reddit/constants/experiments.ts"),
				Y = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Q = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				z = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				J = s("./src/reddit/selectors/platform.ts"),
				X = s("./node_modules/fbt/lib/FbtPublic.js"),
				Z = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				$ = s("./src/reddit/selectors/user.ts");
			const ee = new Set([C.g.AntiEvilOps, C.g.AutomodFiltered, C.g.CommunityOps, C.g.ContentTakedown, C.g.CopyrightTakedown, C.g.Moderator, C.g.Reddit]),
				te = new Set([C.g.Author, C.g.AuthorDeleted]),
				se = Object(G.a)(Q.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return ee.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = X.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let n = Object(Z.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== D.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				ne = Object(G.a)(Q.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return te.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = X.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let n = Object(Z.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== D.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				oe = Object(G.a)($.l, Q.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				re = Object(G.a)(J.f, Q.a, se, ne, z.a, oe, z.b, (e, t, s, n, o, r, i) => {
					if (!e || !t || o) return !1;
					if (n) return !0;
					const a = r || i,
						d = t.score >= 2 || t.numComments >= 2;
					return !(!s || a || d)
				});
			var ie = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ae = s("./src/reddit/selectors/moderatorPermissions.ts"),
				de = s("./src/reddit/selectors/posts.ts"),
				ce = s("./src/reddit/selectors/subreddit.ts"),
				le = s("./src/lib/makeActionCreator/index.ts"),
				me = s("./src/lib/makeCommentsPageKey/index.ts"),
				pe = s("./src/reddit/actions/ads/index.ts"),
				ue = s("./src/reddit/helpers/canonicalUrls.ts"),
				be = s("./src/reddit/helpers/correlationIdTracker.ts"),
				he = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				ge = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				xe = s("./src/lib/performanceTimings/index.tsx"),
				Ce = s("./src/reddit/actions/gold/powerups.ts"),
				fe = s("./src/lib/makeListingKey/index.ts"),
				Oe = s("./src/reddit/actions/googleQASchema/constants.ts");
			const ve = Object(le.a)(Oe.b),
				ye = Object(le.a)(Oe.a);
			var Ee = s("./src/reddit/actions/linkedPosts/constants.ts");
			const je = Object(le.a)(Ee.a),
				ke = Object(le.a)(Ee.c),
				Ie = Object(le.a)(Ee.b);
			var Pe = s("./src/reddit/actions/otherDiscussions/index.ts"),
				we = s("./src/reddit/actions/subreddit/constants.ts"),
				_e = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var Se = e => {
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
				Ne = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Le = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Te = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
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
						if (!r || !r.linked) return;
						const a = t(),
							d = a.posts && a.posts.models,
							c = Object(Ne.a)(o),
							l = r.linked.posts && r.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(Le.a)(t);
								n[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(C.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Te.a)(e)
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
				Re = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Fe = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Ae = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Be = e => {
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
							c = Object(Fe.a)(d),
							l = Ae(c),
							m = e.edges.reduce((e, t) => (t.node.id && t.node.id !== i && e.push(t.node.id), e), []),
							{
								range: p,
								sort: u,
								subredditName: b
							} = r,
							h = t && i ? Object(Ne.a)(i, !0) : Object(fe.a)(b, f.X[u], {
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
				De = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Ue = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Ve = e => {
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
							c = Object(Ue.a)(o),
							l = r.nsfwLinked.posts && r.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(Le.a)(t);
								n[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(C.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Te.a)(e)
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
				We = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const He = Object(le.a)(We.b),
				qe = Object(le.a)(We.a);
			var Ge = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Ke = Object(le.a)(Ge.b),
				Ye = Object(le.a)(Ge.a),
				Qe = Object(le.a)(we.j),
				ze = Object(le.a)(we.i),
				Je = (Object(le.a)(we.r), Object(le.a)(we.q), e => async (t, s, n) => {
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
						postId: g,
						range: x,
						sort: C,
						subredditName: O
					} = e, v = Object(fe.a)(g, null, {
						isOtherDiscussions: !0
					}), y = s(), E = Object(de.z)(y, {
						listingKey: v
					}), j = m && (!E || 0 === E.length), k = Object(fe.a)(O, f.X[C], {
						t: x
					}), I = Object(de.z)(y, {
						listingKey: k
					}), P = p && (l || !I || 0 === I.length), w = l, _ = c, S = Object(de.G)(y, {
						postId: g
					}), N = !!S && !!S.media && (Object(D.K)(S.media) || Object(D.F)(S.media)) && !S.media.altText;
					if (!(j || P || w || _ || N || b)) return;
					j && t(Object(Pe.d)({
						key: v
					}));
					const L = await ((e, t) => Object(u.a)(e, {
							..._e,
							variables: t
						}))(o(), e),
						T = L.body,
						M = Object(De.a)(h),
						R = w && !!(null === (a = null === (i = null === (r = T.data) || void 0 === r ? void 0 : r.post) || void 0 === i ? void 0 : i.linked) || void 0 === a ? void 0 : a.isEligible),
						F = w && (M || !R);
					b && (L.ok ? T.data && T.data.post && t(ve({
						postId: g,
						isEligibleForQASchema: null !== (d = T.data.post.isEligibleForQASchema) && void 0 !== d && d
					})) : t(ye())), j && Object(Re.a)({
						getState: s,
						onFailure: e => t(Object(Pe.b)(e)),
						onSuccess: e => t(Object(Pe.c)(e)),
						postId: g,
						response: L
					}), (P && !w || F) && (L.ok ? T.data && Be({
						getState: s,
						isLinkedPostsFallback: F,
						onFailure: e => t(ze(e)),
						onSuccess: e => t(Qe(e)),
						options: e,
						postId: g,
						subreddit: T.data.subreddit
					}) : t(ze(L.error))), w && R && !M && L.ok && T.data && Me({
						getState: s,
						onFailure: e => t(Ie(e)),
						onSuccess: e => t(ke(e)),
						postId: g,
						post: T.data.post
					}), _ && L.ok && Ve({
						getState: s,
						onFailure: e => t(Ye(e)),
						onSuccess: e => t(Ke(e)),
						postId: g,
						post: T.data.post
					}), N && L.ok && T.data && Se({
						getState: s,
						onFailure: e => t(qe(e)),
						onSuccess: e => t(He(e)),
						postId: g,
						post: T.data.post
					}), w && t(je({
						postId: g,
						isEligibleForLinkedPosts: R
					}))
				}),
				Xe = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						o = n && Object(C.t)(n),
						{
							sortToUse: r
						} = Object(A.a)(e, o);
					return (!r || r === f.u.CONFIDENCE) && Object(Y.c)(e, {
						experimentEligibilitySelector: () => Object($.Q)(e),
						experimentName: K.D
					}) === K.F.Enabled
				};
			var Ze = s("./src/reddit/selectors/chatPost.ts"),
				$e = s("./src/reddit/selectors/seo/index.ts"),
				et = s("./src/reddit/actions/pages/constants.ts"),
				tt = s("./src/lib/initializeClient/installReducer.ts"),
				st = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				nt = s("./src/reddit/reducers/pages/comments/index.ts"),
				ot = s("./src/reddit/selectors/experiments/autosubscribeLinks.ts"),
				rt = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				it = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				at = s("./src/reddit/selectors/i18n/index.ts"),
				dt = s("./src/reddit/helpers/locales.ts"),
				ct = s("./src/reddit/selectors/experiments/countrySites.ts"),
				lt = s("./src/reddit/selectors/meta.ts");
			Object(tt.a)({
				pages: {
					comments: nt.a
				}
			}), Object(tt.a)({
				features: {
					modUserNotes: st.a
				}
			});
			const mt = 25,
				pt = 100,
				ut = Object(le.a)(et.h),
				bt = Object(le.a)(et.f),
				ht = Object(le.a)(et.e),
				gt = Object(le.a)(et.i),
				xt = (e, t, s) => {
					const n = !e,
						o = Object(de.G)(t, {
							postId: s
						}).belongsTo,
						r = Object(ce.L)(t, {
							identifier: o
						}),
						i = Object($e.c)(t, {
							identifier: o
						}),
						a = !!Object(De.c)(t),
						d = Object(at.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (c.listingBelow = i || n, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (i || n) && (!Object(U.h)(r) && !Object(Ze.d)(t, {
						postId: s
					}) && !!r || !Object(J.i)(t) && Object(q.e)(t)), e && (c.postQASchema = Object(q.d)(t)), c
				},
				Ct = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				ft = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				Ot = e => async (t, s) => {
					var i, a;
					const {
						partialPostId: l,
						partialCommentId: m
					} = e.params, {
						subredditName: p
					} = e.params || "", u = l ? Object(C.t)(l) : "", b = m && Object(B.h)(m), {
						path: h,
						queryParams: g
					} = e, x = Object(j.d)(h), {
						instanceId: v
					} = g, {
						hasSortParam: E,
						sortToUse: _
					} = Object(A.a)(s(), u), N = null === (a = null === (i = Object(J.b)(s())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk, L = ["context", "depth", "limit", M.g].reduce((e, t) => {
						const s = parseInt(g[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: p,
						hasSortParam: E,
						instanceId: v,
						include_categories: !0
					});
					E && (L.sort = _), L.onOtherDiscussions = x, t(I.r(u)), Object(ot.a)(s()) && t(Object(o.a)(e.queryParams, p)), await t(vt(u, b, L, _));
					const F = s().posts.models[u],
						U = Object($.R)(s());
					if (F && "subreddit" === F.belongsTo.type) {
						const e = F.belongsTo.id,
							n = Object(xe.i)(() => t(Object(Ce.m)(e, {
								fullData: !0,
								includeIdentity: U
							})), {
								name: "subredditPowerupsRequested",
								page: N,
								isLoggedIn: U
							});
						await n;
						const o = s();
						if (!Object(J.i)(o)) {
							Object(rt.a)(o) && t(Object(S.b)(e))
						}
						Object(ae.i)(o, e) && await t(Object(c.c)(u))
					}
					if (F) {
						const o = ((e, t) => {
								const s = Object(de.U)(e, {
										postId: t
									}),
									n = Object(de.G)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), u),
							i = Object(ce.L)(s(), {
								identifier: F.belongsTo
							});
						if (i && (e => K.Xe.Redirect === Object(Y.b)(e, {
								experimentEligibilitySelector: re,
								experimentName: K.Qe
							}))(s())) return void t(Object(n.c)(i.url));
						if ((F.media && F.media.type) === D.o.LIVEVIDEO) {
							const e = `/rpan${F.belongsTo.type===R.a.SUBREDDIT?i.url:"/"}${Object(C.u)(F.id)}`;
							return void t(Object(n.c)(e))
						}
						if (F.belongsTo.type !== R.a.SUBREDDIT || F.isSponsored) {
							if (F.belongsTo.type === R.a.PROFILE) {
								const e = Object(xe.i)(() => t(P.d(i.name)), {
									name: "getProfileInfo",
									page: N,
									isLoggedIn: U
								});
								await e
							}
						} else {
							if (!!!Object(ce.S)(s(), {
									subredditId: F.belongsTo.id
								})) {
								const e = Object(xe.i)(() => t(w.o(i.name)), {
									name: "getSubredditRules",
									page: N,
									isLoggedIn: U
								});
								await e
							}
						}
						const a = xt(!1, s(), u),
							c = x;
						if (Ct(c, a)) {
							Object(be.e)(be.a.LinkedPosts);
							const e = Object(be.c)(be.a.LinkedPosts);
							Object(be.e)(be.a.NsfwLinkedPosts);
							const n = Object(be.c)(be.a.NsfwLinkedPosts),
								o = {
									adContext: {
										layout: T.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: u
									},
									range: f.jc.WEEK.toUpperCase(),
									sort: f.Q.TOP,
									subredditName: i.name
								},
								r = {
									postId: u
								},
								d = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(De.c)(s())
								},
								l = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(it.a)(s())
								},
								m = ft(a);
							Object(xe.i)(() => t(Je({
								...r,
								...o,
								...d,
								...l,
								...m,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: U,
								page: N
							});
							0
						}
						t(Object(y.p)()), t(k.m({
							title: o
						}));
						const l = s().posts.instances[u] ? e.queryParams.instanceId : F.postId;
						t(Object(d.b)(l)); {
							const e = Object(W.c)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(r.b(e))))
						}
					} else t(k.m({
						title: O.e()
					}));
					const {
						routePrefix: V
					} = e.params;
					R.b[V] === R.a.PROFILE ? Object(ue.d)(s(), t, e) : Object(ue.b)(s(), t, e)
				}, vt = (e, t, s, n) => async (o, r, d) => {
					var c, l;
					const u = r(),
						b = Object(me.a)(e, t, s),
						{
							subredditName: C
						} = s,
						O = u.pages.comments.keyToHeadCommentId.hasOwnProperty(b),
						y = u.pages.comments.api.fullyLoaded[b],
						j = u.pages.comments.api.error[b],
						P = u.pages.comments.api.pending[b],
						w = !Object($.Q)(u),
						S = Object($.l)(u),
						T = n === f.u.CHAT,
						M = !!u.platform.lastPage;
					if ((P || O && !j) && !(T && M)) {
						if (O && !u.sidebarPromotedPosts.firstFetch) {
							const e = Object(J.i)(u) ? ge.a.COMMENTS_OVERLAY : ge.a.COMMENTS;
							window.addEventListener("load", () => {
								o(Object(pe.b)(e))
							})
						}
						return void(y || o(Et(e, t, s)))
					}
					o(i.g());
					const R = u.user.prefs.commentMode;
					o(ut({
						key: b,
						postId: e,
						commentMode: R
					}));
					const A = {
						...s,
						...T ? {
							sort: f.u.LIVE
						} : w ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(de.G)(r(), {
							postId: e
						});
						t && t.numComments && t.numComments > pt && (A.truncate = mt)
					}
					const B = null === (l = null === (c = Object(J.b)(u)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === l ? void 0 : l.route.chunk,
						D = Object(xe.i)(() => Object(p.a)(d.apiContext(), e, t, A, Object(H.a)(r()), Xe(r())), {
							name: "fetchCommentsPage",
							isLoggedIn: !w,
							page: B
						}),
						U = !w && S && Object(xe.i)(() => Object(x.d)(d.gqlContext(), Object(V.e)(S)), {
							name: "fetchProfileKarma",
							isLoggedIn: !w,
							page: B
						}) || null,
						W = Object(xe.i)(() => h(d.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: !w,
							page: B
						});
					let q, G, K, Y;
					if ([q, G, K] = await Promise.all([D, U, W]), o(Object(k.n)(q.status)), q.ok) {
						const t = Object.keys(q.body.posts).filter(e => !!q.body.posts[e].isMeta),
							s = q.body.posts[e];
						if (t.length) {
							const e = Object(xe.i)(() => Object(m.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: B,
									isLoggedIn: !w
								}),
								n = await e;
							n.ok && (Y = n.body)
						}
						if (G && G.ok) {
							const {
								data: e
							} = G.body, t = {
								karma: {
									...x.a
								}
							};
							if (Object(x.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							q.body && q.body.account && Object.assign(q.body.account, t)
						}
						if (K && K.ok) {
							const {
								data: t
							} = K.body;
							if (!t.postInfoById || "SubredditPost" !== t.postInfoById.__typename && "ProfilePost" !== t.postInfoById.__typename || (q.body.posts[e] = {
									...q.body.posts[e],
									...t.postInfoById
								}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const e = t.postInfoById.subreddit.detectedLanguage;
								Object(lt.d)(u) && e && Object(ct.f)(u) && await Object(dt.a)(e, o);
								const {
									id: s,
									isEligibleForContentBlocking: n
								} = t.postInfoById.subreddit;
								o(Object(_.a)({
									subredditAboutInfo: {
										[s]: {
											isEligibleForContentBlocking: n
										}
									}
								}))
							}
						}
						const n = Object(F.a)(q.body, e, u);
						o(bt({
							key: b,
							postId: e,
							meta: u.meta,
							governance: Y,
							shouldCollapse: n,
							...q.body
						}))
					} {
						const n = Object(de.G)(r(), {
							postId: e
						});
						n && q.body.comments && Object.keys(q.body.comments).length < n.numComments ? o(Et(e, t, s)) : q.ok && o(yt({
							key: b
						}));
						const i = Object(J.i)(u) ? ge.a.COMMENTS_OVERLAY : ge.a.COMMENTS;
						o(Object(pe.b)(i))
					}
					if (q.ok) {
						o(N.g(b));
						const t = Object(de.G)(r(), {
								postId: e
							}),
							s = Object.keys(q.body.comments);
						if (o(I.z(t, L.a.CommentsView)), Object(ae.h)(r(), {
								subredditId: t.belongsTo.id
							}) && o(Object(E.a)({
								commentIds: s,
								postIds: [e]
							})), t && "subreddit" === t.belongsTo.type && q.body.comments) {
							const e = Object(xe.i)(() => o(Object(v.a)({
								commentIds: s,
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: B,
								isLoggedIn: !w
							});
							await e
						}
					} else {
						let e;
						C && (o(Object(a.subredditPending)({
							key: b
						})), e = await Object(he.a)("subreddit", () => Object(g.a)(d.apiContext(), C, {})), o(Object(k.n)(e.status)), o(Object(a.handleSubredditPageApiError)(e, C))), o(ht({
							error: q.error,
							key: b,
							...e ? e.body : q.body
						}))
					}
				}, yt = Object(le.a)(et.g), Et = (e, t, s) => async (n, o, r) => {
					var i, a;
					const d = Object(me.a)(e, t, s),
						c = o(),
						m = Object($.R)(c),
						u = Object($.l)(c),
						b = null === (a = null === (i = Object(J.b)(o())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						g = Object(p.a)(r.apiContext(), e, t, s, Object(H.a)(c), Xe(c)),
						C = m && u && Object(x.d)(r.gqlContext(), Object(V.e)(u)) || null,
						f = Object(xe.i)(() => h(r.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: m,
							page: b
						}),
						[O, y, E] = await Promise.all([g, C, f]);
					if (O.ok) {
						if (y && y.ok) {
							const {
								data: e
							} = y.body, t = {
								karma: {
									...x.a
								}
							};
							if (Object(x.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							O.body && O.body.account && Object.assign(O.body.account, t)
						}
						if (E && E.ok) {
							const {
								data: t
							} = E.body;
							O.body.posts[e] = {
								...O.body.posts[e],
								...t.postInfoById
							}
						}
						const t = Object(F.a)(O.body, e, c);
						n(bt({
							key: d,
							postId: e,
							meta: c.meta,
							shouldCollapse: t,
							...O.body
						})), n(yt({
							key: d
						}));
						const s = o().posts.models[e],
							r = s && Object(de.U)(o(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object(ie.a)(c, {
							subredditId: r.id
						}) && n(Object(l.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && O.body.comments && await n(Object(v.a)({
							commentIds: Object.keys(O.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(ht({
						error: O.error,
						key: d,
						...O.body
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
				g = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				x = Object(i.b)(g),
				C = e => {
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
				v = e => r.a.createElement(C, e, e.isCommentBoxDesignEnabled ? r.a.createElement(O, null) : r.a.createElement(f, null), r.a.createElement(d.a, {
					className: u.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				y = x(v),
				E = Object(n.a)({
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
				j = e => r.a.createElement(E, b({}, e, {
					fallback: r.a.createElement(y, {
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
				g = s("./src/reddit/icons/svgs/Show/index.tsx"),
				x = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				C = s.n(x);
			const f = b.a.wrapped(g.a, "Show", C.a);
			var O = e => o.a.createElement(h.g, null, !e.comment.isApproved && o.a.createElement(h.e, {
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
			}, o.a.createElement(f, null)));
			const v = b.a.wrapped(l.a, "StyledDropdown", C.a),
				y = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				E = Object(r.b)(y, (e, t) => {
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
				j = Object(d.a)(v),
				k = E(Object(c.c)(e => {
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
					}, o.a.createElement(O, {
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
			s.d(t, "a", (function() {
				return z
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				h = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				x = s("./src/reddit/constants/headers.ts"),
				C = s("./src/reddit/models/Toast/index.ts");
			const f = (e, t) => async (s, o, r) => {
				let {
					apiContext: i
				} = r;
				const a = await (async (e, t, s) => Object(h.a)(Object(g.a)(e, [x.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.kb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(i(), e, t),
					d = `error-block-${t}`,
					l = `success-block-${t}`;
				if (a.ok) {
					s(Object(u.S)({
						[e]: {
							suggestedSort: t
						}
					}));
					const o = t ? n.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : n.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					s(b.f({
						id: l,
						kind: C.b.SuccessCommunityGreen,
						text: o
					}))
				} else s(b.f({
					id: d,
					kind: C.b.Error,
					text: n.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: f(e, t)
				}))
			};
			var O = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				v = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				E = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				k = s("./src/reddit/controls/Dropdown/index.tsx"),
				I = s("./src/reddit/controls/Dropdown/Row.tsx"),
				P = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				w = s("./src/reddit/helpers/path/index.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const S = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(_.y)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(_.qb)(r)
				}),
				N = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				L = e => ({
					subreddit: Object(_.gb)(e),
					userSubreddit: Object(_.qb)(e)
				}),
				T = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...L
				});
			var M = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				R = s("./src/reddit/icons/svgs/Info/index.tsx"),
				F = s("./src/reddit/selectors/activeModalId.ts"),
				A = s("./src/reddit/selectors/comments.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/tooltip.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = s.n(W),
				q = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const G = Object(E.a)(k.a),
				K = e => e === q.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === q.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Y extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== q.a.None) {
							e(t === q.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", q.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", q.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", q.a.None)
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
						selectedSort: o
					} = this.props;
					return r.a.createElement("div", {
						className: H.a.HighlightWrapper
					}, r.a.createElement(I.b, {
						className: Object(d.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${K(o)}`,
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
					}, r.a.createElement(I.b, {
						displayText: K(q.a.First),
						isSelected: o === q.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(I.b, {
						displayText: K(q.a.Last),
						isSelected: o === q.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(I.b, {
						displayText: K(q.a.None),
						isSelected: o === q.a.None,
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
					commentPermalink: (e, t) => {
						let {
							commentId: s
						} = t;
						return s && Object(A.m)(e, {
							commentId: s
						})
					},
					contestModeModalIsOpen: Object(F.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(U.b)(z),
					highlightIsOpen: Object(U.b)(J),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(B.m)(e, {
							postId: s
						});
						return !!n && n.posts
					},
					post: D.G,
					postPermalink: D.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(V.w)(e),
							o = !!Object(B.m)(e, {
								postId: s
							}),
							r = Object(D.G)(e, {
								postId: s
							});
						return (o || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: A.p
				}),
				ee = Object(i.b)($, (e, t) => {
					let {
						postId: s
					} = t;
					return {
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
						onSetSuggestedSort: t => e(f(s, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(u.X)(t, s)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: X
						})),
						toggleContestModeModal: () => e(Object(p.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(S(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(N("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(T(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return n.fbt._("{sort name} (suggested)", [n.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: s,
						contestModeModalIsOpen: o,
						dropdownIsOpen: i,
						elementRef: a,
						hideTooltip: l,
						highlightIsOpen: m,
						hasModeratorPostPermissions: p,
						isOverlay: u,
						location: b,
						post: h,
						postPermalink: g,
						selectedHighlightSort: x,
						showCommentHighlighter: C,
						sort: f,
						suggestedSort: E,
						showTooltip: j,
						toggleContestModeModal: k
					} = this.props, _ = h.contestMode, S = !b.search.includes(c.u.CONFIDENCE), L = f === c.u.CONFIDENCE && S, T = p && !L, F = c.w[f], A = F ? F() : "", B = E && f === E && !L ? this.addSuggestedLabel(A) : A, D = _ ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), U = _ ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), V = _ ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), W = _ && !p;
					return r.a.createElement("div", {
						className: Object(d.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !C && W
						}),
						ref: a
					}, r.a.createElement("div", {
						className: H.a.containerRow
					}, !W && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: H.a.DropdownContainer
					}, r.a.createElement(I.b, {
						className: Object(d.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${B}`,
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
					}, [c.u.CONFIDENCE, c.u.TOP, c.u.NEW, c.u.CONTROVERSIAL, c.u.OLD, c.u.QA].map(e => {
						const t = s || g,
							n = Object(w.b)(t),
							o = c.w[e],
							i = o ? o() : "";
						return r.a.createElement(y.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: u,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, r.a.createElement(I.b, {
							displayText: i,
							isSelected: f === e,
							skipRoleAttr: !0
						}))
					}))), T && !W && (E ? r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: f !== E ? this.setSortOnClick : this.clearSortOnClick
					}, f !== E ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: H.a.SetSort
					}, r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: X,
						onMouseEnter: j,
						onMouseLeave: l
					}, r.a.createElement(v.c, {
						className: H.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: X
					}), r.a.createElement(R.a, {
						className: H.a.Info
					})))), p && r.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(P.a, {
						className: H.a.ToggleSwitch,
						on: _
					}))), C && r.a.createElement("div", {
						className: H.a.containerRow
					}, r.a.createElement(Q, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: J,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: x,
						trackHighlight: N
					})), o && r.a.createElement(O.a, {
						actionText: U,
						headerText: D,
						modalText: V,
						onConfirm: this.setContestMode,
						toggleModal: k,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(j.c)(te))
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
				g = s("./src/reddit/icons/fonts/helpers.tsx");
			var x = e => r.a.createElement("i", {
					className: Object(c.a)(Object(g.b)("expand", e.isFilled), e.className)
				}),
				C = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				f = s.n(C);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v, y, E = s("./node_modules/lodash/defer.js"),
				j = s.n(E),
				k = s("./src/lib/lessComponent.tsx"),
				I = s("./src/reddit/actions/tooltip.ts"),
				P = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/actions/gold/modals.ts"),
				_ = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/helpers/correlationIdTracker.ts"),
				L = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				T = s("./src/reddit/helpers/trackers/lightbox.ts"),
				M = s("./src/reddit/models/Comment/index.ts"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/comments.ts"),
				A = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				B = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				D = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				q = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				G = s.n(q);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(v || (v = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(y || (y = {}));
			const K = (e, t) => {
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
				ce = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				le = s.n(ce),
				me = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				pe = s("./src/reddit/selectors/gold/awardIcon.ts");
			var ue = e => {
					const t = Object(i.e)(D.b),
						s = Object(i.e)(e => t && Object(pe.a)(e, {
							award: t,
							minSize: 32
						}));
					return s ? r.a.createElement("img", {
						className: Object(c.a)(le.a.img, e.className),
						id: e.id,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						src: s
					}) : r.a.createElement(me.a, e)
				},
				be = s("./src/reddit/icons/fonts/index.tsx"),
				he = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				ge = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				xe = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Ce = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				fe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Oe = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				ve = s.n(Oe);
			const ye = k.a.wrapped(he.a, "CommentIcon", ve.a),
				Ee = k.a.wrapped(fe.a, "Report", ve.a),
				je = k.a.wrapped(xe.a, "IgnoreReport", ve.a),
				ke = k.a.wrapped(Z.a, "ModActionsMenu", ve.a),
				Ie = k.a.div("OverflowMenuSpacer", ve.a),
				Pe = k.a.wrapped(ee.a, "DropdownRow", ve.a),
				we = k.a.wrapped(de.a, "Flatlist", ve.a),
				_e = k.a.button("Button", ve.a),
				Se = k.a.wrapped(Q.a, "ModToolsFlatlist", ve.a),
				Ne = k.a.wrapped(re.a, "ViewReportsDropdown", ve.a),
				Le = e => `Comment-${e}--Modal--DeleteComment`,
				Te = e => `Distinguish--Dropdown--${e}`,
				Me = e => `${e}-overflow-menu`,
				Re = e => `View--Reports--${e}`,
				Fe = Object(a.c)({
					claimedFreeAward: D.b,
					currentUser: W.l,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(R.a)(e) === Le(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(P.b)(Te(s.id))(e)
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
						return Object(F.C)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(P.b)(Re(s.id))(e)
					},
					isLoggedIn: W.R,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(U.A)(e, {
							postId: s.postId
						})
					},
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(U.w)(e, {
							postId: s.postId
						}) && Object(A.a)(e)
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(U.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(U.B)(e, {
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
						return Object(F.I)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(V.v)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(U.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: B.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(U.G)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isTrueblockPCBlockeeEnabled: A.d,
					isParentCommentsAuthorBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.B)(e, {
							commentId: s.id
						})
					}
				});
			class Ae extends r.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(T.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ae.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ae.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(ae.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(N.e)(N.a.GildingFlow, !0);
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
						e(n ? M.a.UNFOLLOWED : M.a.FOLLOWED), t(n ? Object(ae.f)("follow", s.id) : Object(ae.a)("follow", s.id))
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
						onIgnoreReports: g,
						onToggleReportsDropdown: x,
						moderatorPermissions: C,
						modModeEnabled: f,
						postIsArchived: O,
						postAuthorIsBlocked: E,
						isBlockedUserBannerEnabled: k,
						postIsLocked: I,
						renderedInOverlay: P,
						sendEvent: w,
						subreddit: _,
						subredditAboutInfo: S,
						toggleDeleteCommentModal: N,
						toggleSendReplies: T,
						trackCommentClick: R,
						isPostUnrepliable: F,
						isTrueblockPCBlockeeEnabled: A,
						isParentCommentsAuthorBlocked: B
					} = this.props, D = Object(L.a)(C), U = !!s && s.displayText === e.author, V = !!s && s.isEmployee, W = A && e.unrepliableReason, q = A && F, G = !(B && A) && !(E && A) && !(Object(M.g)(e) && A) && !(F && A) && !W && !q && !(S && S.userIsBanned) && (I || O || E && k || D && u || e.isLocked ? D && u : u || m), Q = Object($.a)(e), Z = D && U && !e.bannedBy, te = U && V && !e.bannedBy, se = Z || te, oe = !(Object(M.g)(e) && A) && s && e.isGildable && !q && !(W && "[deleted]" === e.author), re = !O && !W, de = [];
					G && de.push(r.a.createElement(_e, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), j()(() => R("reply", e.id)())
						}
					}, r.a.createElement(ye, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), oe && de.push({
						breakpointGroup: y.LoggedInUser,
						icon: r.a.createElement(ue, null),
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
						subredditType: null == _ ? void 0 : _.type
					}, r.a.createElement(_e, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), U || de.push({
						breakpointGroup: y.LoggedInUser,
						icon: r.a.createElement(fe.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), de.push({
						breakpointGroup: y.LoggedInUser,
						icon: r.a.createElement(be.a, {
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
					}), U && de.push({
						breakpointGroup: y.LoggedInUser,
						icon: r.a.createElement(be.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), re && de.push({
						breakpointGroup: y.LoggedInUser,
						icon: r.a.createElement(be.a, {
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
					const ce = de.map(e => r.a.isValidElement(e) ? e : r.a.createElement(_e, {
							className: K(e.breakpointGroup, v.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						le = de.map(e => r.a.isValidElement(e) ? null : r.a.createElement(Pe, {
							className: K(e.breakpointGroup, v.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: ve.a.dropdownRowText
						}, e.icon));
					return r.a.createElement(o.Fragment, null, r.a.createElement(we, {
						className: Object(c.a)(Y({
							depth: d,
							isInOverlay: P,
							isModModeEnabled: D && f,
							isFollowCommentEnabled: re
						}), t)
					}, ce, r.a.createElement(Ie, {
						className: U ? void 0 : K(y.LoggedInUser, v.HideIfVWLarger)
					}, r.a.createElement(ee.b, {
						className: ve.a.overflowMenu,
						disabled: b,
						dropdownId: Me(e.id),
						onClick: () => w(Object(ae.a)("comment_overflow_menu", e.id))
					}, le, U && r.a.createElement(r.a.Fragment, null, r.a.createElement(Pe, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: ve.a.dropdownRowText
					}, r.a.createElement(be.a, {
						name: "delete"
					})), r.a.createElement(ie.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: T,
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
					}), D && r.a.createElement(r.a.Fragment, null, f && r.a.createElement(Se, {
						className: K(y.Moderator, v.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: U
					}), r.a.createElement(ke, {
						className: f ? K(y.Moderator, v.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => w(Object(ae.a)("comment_mod_action_menu", e.id))
					}, r.a.createElement(Ce.a, null), r.a.createElement(H.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object($.c)(e) && !f && r.a.createElement(z.a, {
						text: `${Q}`,
						onClick: () => {
							x(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Re(e.id)
					}, r.a.createElement(Ne, {
						model: e,
						onIgnoreReports: () => {
							g(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Re(e.id)
					}), e.ignoreReports ? r.a.createElement(je, null) : r.a.createElement(Ee, null)), se && r.a.createElement(z.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, r.a.createElement(ge.a, null), r.a.createElement(X.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: V,
						isUserMod: D,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Te(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Be = Object(i.b)(Fe, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(u.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(_.i)(Le(s.id))), e(Object(I.h)({
								tooltipId: Me(s.id)
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
						handleReply: () => n && e(Object(u.q)({
							parentCommentId: s.id,
							commentsPageKey: n
						})),
						onCommentFollow: t => e(Object(u.s)(s.id, t)),
						onDistinguishComment: (t, n) => e(Object(b.b)(s.id, t, n)),
						onFollowedCommentExpire: () => e(Object(p.n)({
							id: s.id,
							expiresAt: 0
						})),
						onGildClick: (t, n) => e(Object(w.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(b.g)(s.id)),
						onReportClick: () => e(Object(S.c)(s.id)),
						onToggleSave: () => e(Object(p.m)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(I.h)({
							tooltipId: Te(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(I.h)({
							tooltipId: Re(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(_.i)(Le(s.id))),
						toggleSendReplies: () => e(Object(u.l)(s.id))
					}
				})(Object(oe.c)(Ae)),
				De = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Ue = s.n(De);
			var Ve = r.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return r.a.createElement("div", {
						className: Ue.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				We = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				He = s.n(We);
			var qe = r.a.memo(e => r.a.createElement("div", {
					className: He.a.gradientHighlightContainer,
					role: "presentation"
				})),
				Ge = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				Ke = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ye = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Qe = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				ze = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Je = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Xe = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Ze = s("./src/reddit/components/ModModeReports/index.tsx"),
				$e = s("./src/reddit/components/PostTopMeta/index.tsx"),
				et = s("./src/reddit/components/RichTextJson/index.tsx"),
				tt = s("./src/reddit/components/UserIcon/index.tsx"),
				st = s("./src/reddit/components/UserIcon/constants.ts"),
				nt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				ot = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				rt = s("./src/reddit/constants/componentTestIds.ts"),
				it = s("./src/reddit/contexts/PageLayer/index.tsx"),
				at = s("./src/reddit/contexts/Visibility.tsx"),
				dt = s("./src/reddit/controls/ErrorText/index.tsx"),
				ct = s("./src/reddit/controls/InternalLink/index.tsx"),
				lt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				mt = s("./src/reddit/helpers/flair.ts"),
				pt = s("./src/reddit/models/Subreddit/index.ts"),
				ut = s("./src/reddit/models/User/index.ts"),
				bt = s("./src/reddit/models/Vote/index.ts"),
				ht = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				gt = s("./src/reddit/selectors/commentSelector.ts"),
				xt = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ct = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				ft = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				Ot = s("./src/reddit/selectors/moderatorPermissions.ts"),
				vt = s("./src/reddit/selectors/poll/index.ts"),
				yt = s("./src/reddit/selectors/userPrefs.ts"),
				Et = s("./src/reddit/selectors/moderatingComments.ts"),
				jt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				kt = s.n(jt),
				It = s("./src/config.ts"),
				Pt = s("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				wt = s("./src/reddit/helpers/userSnoovatar/index.ts");

			function _t() {
				return (_t = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const St = 300,
				Nt = k.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return r.a.createElement("button", O({}, s, {
						className: Object(c.a)(t, f.a.expandButton)
					}), r.a.createElement(x, {
						className: f.a.expandIcon
					}))
				}), "ExpandButton", kt.a),
				Lt = k.a.wrapped(Be, "FlatList", kt.a),
				Tt = k.a.wrapped(dt.b, "ErrorText", kt.a),
				Mt = k.a.wrapped(Qe.a, "HorizontalVotes", kt.a),
				Rt = k.a.div("ActionBar", kt.a),
				Ft = k.a.wrapped(Ke.a, "TopMeta", kt.a),
				At = k.a.div("CommentContentWrapper", kt.a),
				Bt = k.a.wrapped(ze.b, "AuthorHovercard", kt.a),
				Dt = Object(it.u)(),
				Ut = Object(i.b)(() => Object(a.c)({
					comment: (e, t) => Object(gt.b)(e, t),
					currentProfileModPermissions: it.h,
					depth: (e, t) => Object(F.j)(e, t),
					collapsed: Et.b,
					collapsedBecauseCrowdControl: Et.a,
					currentUser: W.l,
					flair: F.e,
					focused: (e, t) => !t.noFocus && Object(F.t)(e, t),
					highlightAnimationDisabled: yt.c,
					isEditing: F.z,
					isLoggedIn: W.R,
					isPendingDeletion: F.C,
					isPresenceConsumptionExpEnabled: Ct.c,
					moderatorPermissions: (e, t) => {
						const s = Object(gt.b)(e, t);
						return s ? Object(Ot.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: vt.f,
					modModeEnabled: it.T,
					errorMsgs: F.G,
					replyFormOpen: F.J,
					subreddit: it.r,
					subredditType: F.L,
					showNftSpecialtyTreatment: Pt.b,
					hasSupporterRing: ft.a,
					isOnlineConsumptionLoadTest: Ct.a,
					isOnlineUserPref: W.W,
					userIsBanned: (e, t) => {
						const s = Object(gt.b)(e, t);
						return !!s && Object(V.eb)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: xt.b,
					isBlockingInterstitialV2Enabled: xt.c
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
							const [n, o] = t === bt.a.upvoted ? [Object(p.q)(s), "upvote_comment"] : [Object(p.j)(s), "downvote_comment"];
							r(o, s)(), e(n)
						}
					}
				}),
				Vt = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Wt = e => r.a.createElement("div", e, e.children),
				Ht = e => r.a.createElement(r.a.Fragment, null, e.children),
				qt = Dt(Ut(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: p,
						currentProfileModPermissions: b,
						currentUser: g,
						depth: x,
						errorMsgs: C,
						flair: f,
						flatlist: O,
						focused: v,
						hasAwardGradient: y,
						hasSupporterRing: E,
						highlightAnimationDisabled: j,
						highlightTreatment: k,
						index: I,
						isActive: P,
						isAvatarsInCommentsEnabled: w,
						isBlockingInterstitialEnabled: _,
						isBlockingInterstitialV2Enabled: S,
						isEditing: N,
						isFirstInList: T,
						isHighlighted: R,
						isLoggedIn: F,
						isOnlineConsumptionLoadTest: A,
						isOnlineUserPref: B,
						isPendingDeletion: D,
						isPresenceConsumptionExpEnabled: U,
						moderatorPermissions: V,
						modModeEnabled: W,
						noSpacing: H = !1,
						onCommentAuthorClick: q,
						onCommentTimestampClick: G,
						onCollapseClick: K,
						onIgnoreReports: Y,
						onLineMouseOver: Q,
						onPresenceIndicatorInViewport: z,
						onVoteClick: J,
						postId: X,
						prediction: Z,
						renderedInOverlay: ee,
						replyFormOpen: te,
						restrictHeight: se,
						showBlockingInterstitial: ne,
						showNftSpecialtyTreatment: oe,
						subreddit: re,
						subredditType: ie,
						trackCommentClick: ae,
						userIconSmall: de,
						userIsBanned: ce
					} = e, le = m.isDeleted, me = !N && !le && !!C && C.length > 0, pe = Object(l.a)(d.c.edit, m.id), ue = Object(l.a)(d.c.replyToComment, m.id), be = Object(L.a)(V), he = Object(Xe.d)(m), ge = Object($.c)(m), xe = m.authorIsContractor && ie === pt.f.EmployeesOnly, Ce = m.isLocked, fe = be && W, Oe = !N && !le && (F || w), ve = !!g && Object(ut.e)(g) === m.author, [ye, Ee] = Object(o.useState)(null), [je, ke] = Object(o.useState)(null), Ie = Object(o.useRef)(null), Pe = Object(M.f)(m) || Object(M.g)(m), we = Pe ? Wt : ct.a, _e = Object(M.f)(m) ? Ht : Bt;
					Object(o.useEffect)(() => {
						if (!N && !le && (y && Ee(r.a.createElement(qe, null)), null !== k)) {
							if (k.glowHexColor) {
								const e = k.glowHexColor;
								Ee(r.a.createElement(Ve, {
									hexColor: e
								}))
							}
							if (k.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = k.effectHighlight;
								ke(r.a.createElement(Ge.b, {
									prefersReducedAnimation: j,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [N, le, y, j, k]);
					const Se = Object(at.b)();
					(_ || S) && Se && I >= xt.a - 1 && ne();
					const Ne = !le && !Object(M.f)(m) && (!ce || ce && ve) && !Object(M.g)(m) && F,
						Le = Object(o.useCallback)(() => {
							Ne && U && !ve && z && z(m.id)
						}, [m.id, z, Ne, U, ve]),
						Te = Object(ot.a)(m),
						Me = !!g && Object(ut.e)(g) === m.author ? null == g ? void 0 : g.accountIcon : m.profileImage,
						Re = !(!Object(wt.d)(Me) && !oe) && Object(wt.c)(Me);
					return r.a.createElement("div", {
						key: `comment-${m.id}`,
						className: Object(c.a)(`Comment ${m.id}`, kt.a.CommentWrapper, {
							[kt.a.highlightComment]: R,
							[kt.a.deleted]: le,
							[kt.a.focused]: v,
							[kt.a.redesign]: w,
							[kt.a.topLevel]: !x,
							[kt.a.noSpacing]: H
						})
					}, ye, je, !N && !le && T && r.a.createElement("div", {
						className: kt.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${It.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), r.a.createElement(Nt, {
						className: Object(c.a)(m.id, {
							[kt.a.hidden]: !i,
							[kt.a.visible]: i
						}),
						onClick: () => {
							s(), K(), ae("collapse", m.id)()
						},
						onMouseOver: () => Q(m.id),
						onMouseOut: s
					}), r.a.createElement(_e, {
						alwaysShowChildren: !0,
						collapsed: i,
						hoverDivClassName: kt.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(M.g)(m),
						postOrComment: m,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: ee ? $e.c.Lightbox : void 0
					}, r.a.createElement(we, {
						className: Object(c.a)(kt.a.UserIconContainer, de && kt.a.UserIconContainerSmall),
						"data-testid": Pe ? void 0 : "comment_author_icon",
						onClick: Pe ? void 0 : q,
						to: `/user/${m.author}/`
					}, Se ? r.a.createElement(r.a.Fragment, null, E && !Re && r.a.createElement("div", {
						className: kt.a.supporterRing
					}), r.a.createElement(tt.a, {
						isNft: Re,
						className: Object(c.a)(kt.a.UserIcon, {
							[kt.a.UserIconNft]: Re && !Object(wt.f)(Me)
						}),
						iconUrl: Me,
						isNSFW: m.profileOver18 || !1,
						nsfwIconUrl: st.a,
						userName: m.author,
						isHighlighted: R,
						shouldShowPresenceIndicator: Ne && U,
						onPresenceIndicatorInViewport: Le,
						isCommentAuthorBlocked: Object(M.g)(m),
						collapsed: i,
						shouldUseOnlineOverride: ve,
						isOnlineOverrideValue: B,
						isOnlineStatusLoadTest: Ne && A,
						authorId: m.authorId
					})) : r.a.createElement("div", {
						className: kt.a.UserIcon
					}))), r.a.createElement(At, {
						className: Object(c.a)({
							[kt.a.isActive]: P,
							[kt.a.isCollapsed]: i,
							[kt.a.isLocked]: Ce && fe,
							[kt.a.isPendingDeletion]: D,
							[kt.a.isRemoved]: !!m.bannedBy && fe
						})
					}, r.a.createElement(lt.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", x + 1)], {
						hk: "2XnyAV"
					})), r.a.createElement(Ft, {
						userHasNft: Re,
						childrenInfo: t,
						className: Object(c.a)({
							[kt.a.collapsed]: i,
							[kt.a.noFlair]: Object(mt.o)(f || null)
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: p,
						flair: f,
						isPostComment: !0,
						onCommentAuthorClick: q,
						onCommentTimestampClick: G,
						renderedInOverlay: ee,
						renderContractorBadge: xe
					}), !i && r.a.createElement(o.Fragment, null, N && r.a.createElement(h.a, {
						className: Object(c.a)(kt.a.EditCommentForm, kt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: p,
						depth: x,
						draftType: d.c.edit,
						draftKey: pe,
						postId: X,
						rtJson: Object(ot.a)(m),
						mediaMetadata: m.media && m.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						submitAction: e => Object(u.j)({
							id: m.id,
							commentsPageKey: p,
							depth: x,
							draftKey: pe,
							formData: e
						}),
						submitButtonText: n.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !N && !le && r.a.createElement("div", {
						"data-testid": rt.d,
						ref: Ie,
						className: Object(c.a)(kt.a.CommentBody, {
							[kt.a.restrictHeight]: !(!se || !Ie.current) && Ie.current.clientHeight > St
						})
					}, Z ? r.a.createElement(Ye.a, {
						comment: m,
						prediction: Z
					}) : r.a.createElement(et.a, {
						content: Te,
						mediaMetadata: m.media && m.media.mediaMetadata,
						rtJsonElementProps: Vt(e)
					}), r.a.createElement(ht.b, {
						content: Te
					})), W && be && he && r.a.createElement(Je.a, {
						thing: m
					}), W && be && ge && r.a.createElement(Ze.a, {
						onIgnoreReports: Y,
						reportable: m
					}), null != O ? O : Oe && r.a.createElement(Rt, null, w && r.a.createElement(Mt, {
						downvoteButtonClassName: kt.a.voteButton,
						downvoteClassName: kt.a.upDownVote,
						model: m,
						onVoteClick: J,
						scoreClassName: kt.a.score,
						upvoteButtonClassName: kt.a.voteButton,
						upvoteClassName: kt.a.upDownVote
					}), r.a.createElement(Lt, {
						comment: m,
						commentsPageKey: p,
						depth: x,
						isAvatarsInCommentsEnabled: w,
						collapsedBecauseCrowdControl: a,
						modModeEnabled: W,
						moderatorPermissions: b || V,
						renderedInOverlay: ee,
						isCommentFocused: v,
						subreddit: re,
						trackCommentClick: ae
					})), me && C.map(e => r.a.createElement(Tt, {
						key: e
					}, e)), te && r.a.createElement(h.a, {
						className: Object(c.a)(kt.a.EditCommentForm, kt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: p,
						depth: x,
						draftType: d.c.replyToComment,
						draftKey: ue,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						postId: X,
						submitAction: (e, t) => {
							let {
								validate: s,
								...n
							} = e;
							return s ? Object(u.t)({
								commentsPageKey: p,
								draftKey: ue,
								parentCommentDepth: x,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							}) : Object(u.m)({
								commentsPageKey: p,
								draftKey: ue,
								parentCommentDepth: x,
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
			t.a = e => r.a.createElement(nt.a.Consumer, null, t => r.a.createElement(qt, _t({}, e, {
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
				return w
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "f", (function() {
				return T
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
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				x = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				C = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				f = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				O = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				v = s("./src/reddit/components/Comments/States/index.m.less"),
				y = s.n(v);
			const E = l.a.wrapped(f.a, "CommentsIcon", y.a),
				j = l.a.wrapped(O.a, "SnooFacepalm", y.a),
				k = l.a.p("EmptyTitle", y.a),
				I = l.a.p("ErrorTitle", y.a),
				P = l.a.p("EmptyText", y.a),
				w = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(y.a.StateContainer, t)
					}, a.a.createElement(E, null), a.a.createElement(k, null, s ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), a.a.createElement(P, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				_ = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(E, null), a.a.createElement(k, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(P, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: y.a.StateContainer
					}, a.a.createElement(E, null), a.a.createElement(k, null, n.fbt._("That comment is missing", null, {
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
						className: y.a.StateContainer
					}, a.a.createElement(j, null), a.a.createElement(I, null, t ? Object(b.a)({
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
				L = e => {
					let {
						postId: t,
						commentId: s,
						sort: n,
						apiError: o
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(y.a.StateContainer, y.a.ErrorFullPage)
					}, a.a.createElement(N, {
						postId: t,
						commentId: s,
						sort: n,
						apiError: o
					}))
				},
				T = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(p.a, null))
				}, "LoadingFullPage", y.a),
				M = l.a.div("CommentsPlaceholderContainer", y.a),
				R = l.a.div("CommentPlaceholder", y.a),
				F = l.a.div("Avatar", y.a),
				A = l.a.div("VoteColumn", y.a),
				B = l.a.div("TextColumn", y.a),
				D = l.a.wrapped(C.a, "Upvote", y.a),
				U = l.a.wrapped(x.a, "Downvote", y.a),
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
				H = e => a.a.createElement(M, null, r()(10, t => a.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(F, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(A, null, a.a.createElement(D, null), a.a.createElement(U, null)), a.a.createElement(B, null, a.a.createElement(V, null), a.a.createElement(W, null)))))
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
				g = s("./src/reddit/actions/comment/index.ts"),
				x = s("./src/reddit/constants/comments.ts"),
				C = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/constants/elementClassNames.ts"),
				O = s("./src/reddit/constants/gold.ts"),
				v = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx");
			const y = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: E,
							effectHighlight: {
								type: v.a.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				E = "ff0000";

			function j(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						n = Math.floor(Math.random() * s.length);
					return s[n] || null
				}(e ? function(e) {
					return e.map(I).filter(e => e !== k)
				}(e) : [])
			}
			const k = {
				glowHexColor: null,
				effectHighlight: null
			};

			function I(e) {
				for (const t of y) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return k
			}
			var P = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				w = s("./src/reddit/selectors/comments.ts"),
				_ = s("./src/reddit/selectors/commentSelector.ts"),
				S = s("./src/reddit/selectors/communityAwards.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				L = s("./src/reddit/selectors/posts.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/Comments/Comment/index.tsx"),
				R = s("./src/lib/scroll/index.ts"),
				F = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				A = s("./src/reddit/contexts/InsideOverlay.tsx"),
				B = s("./src/reddit/helpers/path/index.ts"),
				D = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				U = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				V = s.n(U);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), H = u.a.wrapped(D.a, "ArrowRight", V.a), q = u.a.wrapped(F.a, "LinkOrOverlayLink", V.a), G = u.a.span("HoverSpan", V.a), K = Object(l.c)({
				permalink: (e, t) => Object(w.m)(e, {
					commentId: Object(w.r)(e, t).parentId
				})
			});
			var Y = Object(c.b)(K)(Object(A.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return d.a.createElement("div", {
						className: Object(m.a)(V.a.Wrapper, {
							[V.a.isActive]: t
						})
					}, d.a.createElement(q, {
						isOverlay: !!s,
						to: Object(B.b)(n),
						onClick: R.b
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
				moreCommentsItem: w.D,
				moreCommentsPending: w.E
			});
			var se = Object(c.b)(te, (e, t) => ({
					moreCommentsClicked: () => e(Object(g.l)(t.commentsPageKey, t.moreCommentsId))
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
					className: f.m
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
					return d.a.createElement(de, null, oe()(s + 1, e => e === s ? l !== x.a.Comment || t ? null : d.a.createElement(ce, {
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
			const ge = u.a.div("CommentListNodeWrapper", he.a),
				xe = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(f.f)
				},
				Ce = () => {
					const e = document.querySelectorAll(`.${f.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(f.f)
				};
			var fe = Object(c.b)(() => Object(l.c)({
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
				commentListNode: (e, t) => Object(w.l)(e, t),
				depth: (e, t) => Object(w.j)(e, t),
				highlightTreatment: (e, t) => {
					let {
						commentLink: s
					} = t, n = null;
					const o = Object(w.l)(e, {
						commentLink: s
					});
					if (o && s.type === x.a.Comment) {
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
					const n = Object(w.l)(e, {
						commentLink: s
					});
					return !(s.type !== x.a.Comment || !n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const s = Object(S.a)(e, t);
						return s && s.coinPrice >= O.g
					})
				},
				isHighlighted: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(w.p)(e);
					if (n === P.a.None) return !1;
					if (s.type !== x.a.Comment) return !1;
					const o = s.id,
						r = Object(_.b)(e, {
							commentId: o
						});
					if (!r) return !1;
					const i = Object(T.w)(e),
						a = !!Object(N.m)(e, {
							postId: r.postId
						}),
						d = Object(L.G)(e, {
							postId: r.postId
						});
					if (!d || !d.previousVisits || d.previousVisits.length < 1) return !1;
					const c = n === P.a.Last ? d.previousVisits[d.previousVisits.length - 1] : d.previousVisits[0];
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
						e(Object(g.d)({
							commentLink: s,
							commentsPageKey: n,
							lineDepth: t,
							scrollToAndRemeasure: o
						}))
					},
					onShortLineClick: () => e(Object(g.o)({
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
					isHighlighted: g,
					onLineClick: f,
					onPresenceIndicatorInViewport: O,
					onShortLineClick: v,
					parentNodeIds: y,
					postId: E,
					renderedInOverlay: j,
					scrollToAndRemeasure: k,
					showBlockingInterstitial: I
				} = e, P = !!u, w = !(!a || !a.glowHexColor), _ = w && i > 0, S = w, N = d.a.createElement(ge, {
					className: Object(m.a)(s, {
						[he.a.isHidden]: h,
						[he.a.glowBorderTopPadding]: _,
						[he.a.glowBorderBottomPadding]: S
					}),
					id: o.id,
					style: {
						paddingLeft: i * (C.w + C.v) + (o.type === x.a.Comment ? C.w : 0)
					},
					tabIndex: -1
				}, d.a.createElement(le, {
					collapsed: n,
					depth: i,
					hasGlowBorder: _,
					onLineClick: f,
					onLineMouseOver: xe,
					onLineMouseOut: Ce,
					onShortLineClick: v,
					type: o.type,
					parentNodeIds: y
				}), Oe({
					childrenInfo: t,
					clearHovered: Ce,
					commentLink: o,
					commentsPageKey: r,
					onLineMouseOver: xe,
					hasAwardGradient: P,
					highlightTreatment: a,
					index: c,
					isActive: l,
					isAvatarsInCommentsEnabled: p,
					isFirstInList: b,
					isHighlighted: g,
					postId: E,
					renderedInOverlay: j,
					scrollToAndRemeasure: k,
					onPresenceIndicatorInViewport: O,
					showBlockingInterstitial: I
				}));
				return p && o.type === x.a.Comment ? d.a.createElement(me.a, null, N) : N
			});
			const Oe = e => {
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
					scrollToAndRemeasure: g,
					onPresenceIndicatorInViewport: C,
					showBlockingInterstitial: f
				} = e;
				switch (n.type) {
					case x.a.Comment:
						return d.a.createElement(M.a, {
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
							scrollToAndRemeasure: g,
							onPresenceIndicatorInViewport: C,
							showBlockingInterstitial: f
						});
					case x.a.MoreComments:
						return d.a.createElement(se, {
							commentsPageKey: o,
							isActive: c,
							moreCommentsId: n.id
						});
					case x.a.ContinueThread:
						return d.a.createElement(Y, {
							id: n.id,
							isActive: c
						})
				}
			};
			var ve = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				ye = s("./src/reddit/components/Comments/States/index.tsx"),
				Ee = s("./src/reddit/components/Scroller/Simple.tsx"),
				je = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ke = s("./src/reddit/constants/elementIds.ts"),
				Ie = s("./src/reddit/featureFlags/index.ts"),
				Pe = s("./src/reddit/helpers/commentList/index.ts"),
				we = s("./src/reddit/helpers/trackers/comment.ts"),
				_e = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Se = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ne = s("./src/telemetry/index.ts"),
				Le = s("./src/lib/LRUCache/index.ts"),
				Te = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				Me = s("./src/reddit/selectors/telemetry.ts");
			const Re = e => t => ({
				...Object(Me.n)(t),
				source: "post_detail",
				action: "view",
				noun: "few_comments",
				actionInfo: Object(Me.d)(t, {
					reason: String(e)
				})
			});
			var Fe = s("./src/reddit/components/Comments/index.m.less"),
				Ae = s.n(Fe);
			const Be = C.f + 10,
				De = 65,
				Ue = u.a.wrapped(Ee.b, "Scroller", Ae.a),
				Ve = Object(l.c)({
					allCollapsed: w.a,
					commentLinks: w.k,
					commentThreadLinkSet: w.o,
					measureScrollFPS: Ie.d.measureScrollFPS,
					moreComments: w.b,
					postPermalink: L.F
				}),
				We = Object(c.b)(Ve, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(b.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(g.e)(t)),
					onCommentLeftViewport: (t, s) => e(Object(g.h)(t, s)),
					showModalOnCommentsScroll: t => e(Object(h.ab)(Object(B.b)(t)))
				})),
				He = new Le.a(500),
				qe = new Le.a(500),
				Ge = (e, t) => {
					const s = `entered-${e}`;
					let n = He.get(s);
					return void 0 === n && (n = () => {
						t(e)
					}, He.set(s, n)), n
				},
				Ke = (e, t) => {
					const s = `left-${e}`;
					let n = qe.get(s);
					return void 0 === n && (n = s => {
						t(e, s)
					}, qe.set(s, n)), n
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
						}), this.props.sendEvent(Object(we.b)(e)))
					}, this.showBlockingInterstitial = o()(() => {
						this.state.isBlockingModalShowed || (this.setState({
							isBlockingModalShowed: !0
						}), this.props.showModalOnCommentsScroll(this.props.postPermalink))
					}, p.L, {
						leading: !0,
						maxWait: 1e3
					}), this.parentNodeIdsMap = {}, ve.c(), this.childrenInfoMap = {}, this.state = {
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
					this.timerId && Object(Ne.b)(p.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Ne.c.end(this.timerId)
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks), this.props.commentLinks.length < Se.a && this.props.sendEvent(Re(this.props.commentLinks.length))
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
					this.timerId && Object(Ne.b)(p.n.Redesign, {
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
					ve.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						o && (s[c.id].depth > r ? (ve.a(c.id), i += Object(Pe.d)(c, n), c.type === x.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[o] = {
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
					} = this.props, a = Ge(e.id, n), c = Ke(e.id, o);
					return {
						estHeight: ve.b(e.id) ? 0 : De,
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
							}) : d.a.createElement(fe, {
								key: `comment-list-node-${e.id}`,
								childrenInfo: this.getChildrenInfo(e.id),
								commentLink: e,
								commentsPageKey: s,
								id: e.id,
								index: t,
								isFirstInList: 0 === t,
								isHidden: ve.b(e.id),
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
					return d.a.createElement(Ue, {
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
					return this.props.commentId ? d.a.createElement(ye.g, {
						link: this.props.postPermalink
					}) : d.a.createElement(ye.c, null)
				}
			}
			t.a = We(Object(je.c)(Object(Te.a)(Object(_e.d)(Ye))))
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
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD"
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
				g = s("./src/reddit/components/IdCard/async.tsx"),
				x = s("./src/reddit/components/ModProgressModule/index.tsx"),
				C = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				f = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				O = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				y = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				E = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				j = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				k = s("./src/reddit/constants/experiments.ts"),
				I = s("./src/reddit/featureFlags/component.tsx"),
				P = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				w = s("./src/reddit/models/Post/index.ts"),
				_ = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				S = s("./src/reddit/selectors/experiments/postSeo.ts"),
				N = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				L = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				R = s.n(M);
			const F = Object(I.a)("spPoints", b.a),
				A = Object(I.a)("spLeaderboard", h.a),
				B = Object(n.a)({
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
				D = Object(c.c)({
					isInNewModuleNCPV3Experiment: (e, t) => {
						let {
							post: s,
							isOverlay: n
						} = t;
						return !Object(w.q)(s) && !n && Object(_.a)(e) === k.re.NewModule
					},
					isLoggedIn: T.R,
					postSEOV2IdCardVariant: S.h,
					shouldShowReredditPromo: N.a,
					widgets: Object(p.a)(L.t)
				}),
				U = Object(d.b)(D);
			class V extends a.a.Component {
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
						subredditName: n,
						post: o,
						isFakeOverlay: r,
						postSEOV2IdCardVariant: i
					} = this.props, d = !Object(S.c)(i) && !Object(S.f)(i);
					return a.a.createElement(v.a, {
						adComponentOnFakeOverlay: r,
						adComponent: d ? a.a.createElement(f.a, {
							postId: o.id,
							isOverlay: s,
							listingName: n,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: P.a.BOTTOM,
							refreshKey: o.id,
							sizes: m.p,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isInNewModuleNCPV3Experiment: s,
						isLoggedIn: n,
						isOverlay: o,
						post: r,
						postSEOV2IdCardVariant: i,
						shouldShowReredditPromo: d,
						subredditId: c,
						subredditName: p,
						widgets: b
					} = this.props;
					let h = 0;
					const v = Object(S.c)(i) || Object(S.f)(i),
						k = a.a.createElement(f.a, {
							postId: r.id,
							isOverlay: o,
							listingName: p,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: h++,
							position: P.a.FIRST,
							refreshKey: r.id,
							sizes: m.i,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(R.a.outerWrapper, e)
					}, s && a.a.createElement(x.default, {
						subredditId: c,
						subredditName: p
					}), Object(w.q)(r) ? a.a.createElement(B, {
						profileName: p,
						isOverlay: o || !1
					}) : a.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: o,
						listingName: p,
						postId: r.id,
						rememberPosition: r.numComments > 0,
						isMinimal: v
					}), a.a.createElement(u.a, {
						cardClassName: R.a.card,
						subredditId: c
					}), a.a.createElement(F, {
						className: R.a.card,
						subredditId: c,
						uniqueId: r.id
					}), a.a.createElement(A, {
						className: R.a.card,
						subredditId: c,
						uniqueId: r.id
					}), a.a.createElement(C.a, {
						subredditId: c
					}), k, n && b.map((e, t) => a.a.createElement(O.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(j.a, {
						subredditName: p,
						widget: e
					}))), r.isSponsored && a.a.createElement(O.a, null, a.a.createElement(y.a, null)), d && a.a.createElement(E.a, {
						directoryTimestamp: r.created,
						postId: r.id
					}), this.renderFooter(h++))
				}
			}
			t.a = U(V)
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
					} = this.props, g = l && !e, x = l ? m.a.TruncatedComments : "";
					return o.a.createElement("div", {
						onClick: h,
						ref: i
					}, o.a.createElement("div", {
						className: Object(r.a)(m.a.ContentWrapper, s, x),
						style: {
							"--commentswrapper-gradient-color": Object(c.a)(this.props).body,
							maxHeight: l ? u : "unset"
						}
					}, t), g && o.a.createElement(d.l, {
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
				g = a.a.wrapped(c.a, "RadioOff", u.a),
				x = a.a.wrapped(l.a, "RadioOn", u.a),
				C = e => o.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(x, null) : o.a.createElement(g, null), e.text),
				f = a.a.wrapped(e => {
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
					}, o.a.createElement(C, {
						onClick: () => p(r.H.NONE, null),
						selected: !c && !n,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && o.a.createElement(C, {
						onClick: () => p(r.H.MODERATOR, null),
						selected: c && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && o.a.createElement(C, {
						onClick: () => p(r.H.MODERATOR, !0),
						selected: c && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && o.a.createElement(C, {
						onClick: () => p(r.H.ADMIN, null),
						selected: n && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && m && o.a.createElement(C, {
						onClick: () => p(r.H.ADMIN, !0),
						selected: n && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var O = Object(d.a)(f);
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
				}, o.a.createElement(O, {
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: p,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.H.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.H.ADMIN ? m("admin_distinguish") : a && e !== r.H.MODERATOR ? m("undistinguish") : s && e !== r.H.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
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
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
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
				return g
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = e => {
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
				g = s("./src/lib/lessComponent.tsx");
			const x = g.a.span("PostEventFutureText", h.a),
				C = g.a.span("PostEventPastText", h.a),
				f = g.a.span("PostEventNowText", h.a),
				O = g.a.span("Container", h.a),
				v = g.a.wrapped(m, "CalendarIcon", h.a),
				y = g.a.wrapped(p, "LiveIcon", h.a),
				E = g.a.div("LoadingState", h.a);
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
						l = o.a.createElement(E, {
							className: e
						})
					}
					if (a) m = o.a.createElement(f, null, o.a.createElement(y, null), l);
					else if (c === r.a.Future) m = o.a.createElement(x, null, o.a.createElement(v, null), l);
					else {
						if (c !== r.a.Past) return null;
						m = o.a.createElement(C, null, o.a.createElement(v, null), l)
					}
					return o.a.createElement(O, {
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
				g = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				x = s("./src/telemetry/models/Outbound.ts"),
				C = s("./src/reddit/components/ExpandoButton/index.m.less"),
				f = s.n(C);
			const O = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(p.b)(t.permalink), t.id))
				})),
				v = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(d.a)(f.a.icon, f.a.hideOnHover);
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
				} = e, y = s || h, E = Object(i.e)(g.b), j = Object(i.e)(g.c), k = t => {
					(E || j) && (t.preventDefault(), e.showModalOnPostLinkClick(y))
				}, I = o && !!s;
				return y.media && !(("rtjson" === y.media.type || "text" === y.media.type || "liveaudio" === y.media.type) && !Object(u.a)(y)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, f.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					onClick: C
				}, p ? r.a.createElement(b.a, {
					name: "collapse",
					className: f.a.icon
				}) : O ? r.a.createElement(r.a.Fragment, null, v(y.media && y.media.type, I, h), r.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(f.a.icon, f.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: f.a.icon
				})) : y.source && y.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, f.a.outer),
					"data-click-id": "expando_open",
					href: y.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? x.SourceElement.PostImage : x.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(f.a.icon, f.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, f.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(y.permalink),
					rel: "nofollow",
					onClick: k
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: f.a.icon
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
				b = e => Object(c.h)(e) ? i.d.profile : i.d.subreddit;

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
			const g = r.a.createElement(m.a, {
					className: h.a.icon
				}),
				x = Object(a.c)({
					subreddit: p.y,
					subredditAboutInfo: p.v
				}),
				C = Object(i.b)(x);
			t.a = C(e => {
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
					icon: g,
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
					}) : i, " ", r.a.createElement(l.a, {
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
				g = s("./src/lib/timeAgo/index.ts"),
				x = s("./src/reddit/controls/ContentType/index.tsx"),
				C = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				f = s("./src/reddit/components/Flair/index.tsx"),
				O = s("./src/reddit/selectors/telemetry.ts");
			var v = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/telemetry/index.ts"),
				E = s("./src/reddit/components/ItemCarousel/index.m.less"),
				j = s.n(E);
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
					thumbnail: E,
					isNsfw: k,
					subreddit: I
				} = t, P = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					s && I && Object(y.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "post_post",
						post: e,
						subreddit: t,
						...O.n(s)
					}))(s, I)(P))
				}, []);
				return d.a.createElement(C.a, {
					to: (null == r ? void 0 : r.replace(/^.*\/\/[^\/]+/, "")) || "",
					className: Object(n.a)(j.a.redditLinkCard, o),
					onClick: () => {
						Object(y.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "post_post",
							post: e,
							subreddit: t,
							...O.n(s)
						}))(s, I)(P))
					}
				}, d.a.createElement("div", {
					className: Object(n.a)(j.a.imageContainer)
				}, (null == E ? void 0 : E.url) ? d.a.createElement("img", {
					src: E.url,
					className: Object(n.a)(k && j.a.blur)
				}) : d.a.createElement(x.a, {
					type: "text",
					className: j.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: j.a.postDescription
				}, d.a.createElement("div", null, d.a.createElement("div", {
					className: j.a.title
				}, p), k && d.a.createElement(f.b, {
					isFlairFilter: !0,
					flair: {
						type: v.f.Nsfw,
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
				}, "•"), l && d.a.createElement("span", null, Object(g.a)(new Date(l).getTime() / b.Tb, !0)))))
			};
			var I = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				S = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				N = s("./src/reddit/icons/svgs/Crosspost/index.tsx");
			const L = e => {
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
					s && b && Object(y.a)(Object(S.c)(s, b)(h))
				}, [s, b, h]);
				return d.a.createElement(C.a, {
					to: r,
					className: Object(n.a)(j.a.redditLinkCard, j.a.crosspostLinkCard, o),
					onClick: () => {
						Object(y.a)(Object(S.a)(s, b)(h))
					}
				}, d.a.createElement("div", {
					className: Object(n.a)(j.a.imageContainer)
				}, (null == m ? void 0 : m.url) ? d.a.createElement("img", {
					src: m.url,
					className: Object(n.a)(p && j.a.blur)
				}) : d.a.createElement(x.a, {
					type: "text",
					className: j.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: j.a.postDescription
				}, d.a.createElement("div", {
					className: j.a.postStats
				}, d.a.createElement(N.a, {
					className: j.a.crosspostIcon
				}), d.a.createElement(_.a, {
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
				}, p && d.a.createElement(f.b, {
					isFlairFilter: !0,
					flair: {
						type: v.f.Nsfw,
						text: "nsfw"
					},
					className: j.a.flair
				}), l)))
			};
			var T = d.a.memo(e => {
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
				M = s("./src/reddit/actions/subreddit.ts"),
				R = s("./src/reddit/components/SubscribeButton/index.tsx"),
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
					path: g,
					size: x,
					isDiscovery: C,
					post: E,
					className: k,
					isNsfw: I
				} = e;
				const P = Object(c.d)();
				Object(a.useEffect)(() => {
					P(Object(M.u)(o))
				}, [P, o]);
				const w = Object(c.e)(e => Object(p.T)(e, {
						subredditId: t
					})),
					S = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					E && w && C && Object(y.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "community_post",
						post: e,
						subreddit: t,
						...O.n(s)
					}))(E, w)(S))
				}, []);
				const N = Object(a.useCallback)(e => {
					if (C) return (e => {
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
							subreddit: Object(p.T)(e, {
								subredditId: s
							})
						})
					})({
						action: "click",
						post: E,
						noun: e ? "unsubscribe" : "subscribe",
						subredditId: t,
						index: s,
						source: "post_discovery"
					})
				}, [t, s, u]);
				return d.a.createElement("div", {
					className: Object(n.a)(j.a.subredditItem, null === j.a || void 0 === j.a ? void 0 : j.a[x], k)
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
				}, d.a.createElement(_.a, {
					to: g,
					className: j.a.lockup,
					onClick: () => {
						C && Object(y.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "community_post",
							post: e,
							subreddit: t,
							...O.n(s)
						}))(E, w)(S))
					}
				}, d.a.createElement("div", {
					style: "small" === x ? {
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
				}, "r/", o), " ", I && d.a.createElement(f.b, {
					isFlairFilter: !0,
					flair: {
						type: v.f.Nsfw,
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
				}, i)), d.a.createElement(R.a, {
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

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = e => {
				var t, s;
				const n = null === (s = null === (t = e.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
				return n ? Math.floor(e.clientWidth / n) : 0
			}, H = Object(w.c)(e => {
				let {
					title: t,
					className: s,
					itemIds: r,
					size: u = "large",
					hasSubredditNames: b = !1,
					hasPostIds: h = !1,
					isDiscovery: g,
					post: x
				} = e;
				const C = Object(c.d)(),
					[f, O] = Object(a.useState)(null),
					[v, y] = Object(a.useState)(null),
					[E, w] = Object(a.useState)({
						left: !1,
						right: !0
					}),
					[_, S] = Object(a.useState)(0),
					[N] = Object(a.useState)(void 0),
					{
						subredditIds: M,
						crosspostIds: R,
						postIds: F,
						postUrls: A
					} = Object(a.useMemo)(() => r.reduce((e, t) => {
						let {
							type: s,
							id: n,
							url: o
						} = t;
						switch (s) {
							case P.a.SUBREDDIT:
								e.subredditIds.push(n.toLowerCase());
								break;
							case P.a.POST:
								o && (e.postUrls[n] = o), e.postIds.push(n);
								break;
							case P.a.CROSSPOST:
								e.crosspostIds.push(n)
						}
						return e
					}, {
						subredditIds: [],
						postIds: [],
						crosspostIds: [],
						postUrls: {}
					}), [r]),
					B = Object(c.e)(e => Object(p.z)(e, M)),
					V = Object(c.e)(e => Object(I.L)(e, F)),
					H = Object(c.e)(e => Object(I.L)(e, R)),
					q = B.reduce((e, t) => (e[b ? t.name.toLocaleLowerCase() : t.id] = t, e), {}),
					G = V.reduce((e, t) => (e[t.id] = t, e), {}),
					K = H.reduce((e, t) => (e[t.id] = t, e), {});
				Object(a.useEffect)(() => {
					((null == M ? void 0 : M.length) || F.length || R.length) && C(Object(l.e)(M, b, M, h, [...R, ...F]))
				}, [M, R, F, C, h, b]);
				const Y = r.filter((e, t, s) => t === s.findIndex(t => t.id === e.id)).reduce((e, t) => {
						let {
							type: s,
							id: n
						} = t;
						switch (s) {
							case P.a.SUBREDDIT:
								const t = null == q ? void 0 : q[n.toLowerCase()];
								if (!t || !g && t.isNsfw || !g && t.isSubscribed) break;
								e.push({
									type: s,
									props: t
								});
								break;
							case P.a.POST:
								const o = null == G ? void 0 : G[n];
								if (!o) break;
								e.push({
									type: s,
									props: o
								});
								break;
							case P.a.CROSSPOST:
								const r = null == K ? void 0 : K[n];
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
						if (!v) return;
						const n = null === (s = null === (t = null == v ? void 0 : v.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
						if (!n) return;
						const o = (Math.sign(e) ? v.scrollLeft % n : n % v.scrollLeft) || 0,
							r = n * e - o;
						v.scrollBy({
							left: r,
							behavior: "smooth"
						})
					},
					z = Object(a.useCallback)(() => {
						if (!v) return;
						const {
							width: e
						} = null == v ? void 0 : v.getBoundingClientRect(), t = (null == v ? void 0 : v.scrollLeft) > 0, s = (null == v ? void 0 : v.scrollLeft) < v.scrollWidth - e;
						0 === (null == v ? void 0 : v.scrollLeft) && v.scrollWidth - e == 0 || w({
							left: t,
							right: s
						})
					}, [v]);
				Object(a.useEffect)(() => {
					if (!f || !v) return;
					const e = i()(() => {
						const e = W(v);
						S(e)
					}, 30);
					window.addEventListener("resize", e);
					const t = W(v);
					return S(t), z(), () => {
						window.removeEventListener("resize", e)
					}
				}, [f, v, z, _, Y.length]);
				const J = () => 1 === Y.length ? j.a.flexWidth : 2 === Y.length ? j.a.flexWidthTwoItems : j.a.constantWidth;
				return d.a.createElement("div", {
					ref: O,
					className: Object(n.a)(j.a.carouselContainer, s, null === j.a || void 0 === j.a ? void 0 : j.a[u])
				}, d.a.createElement("div", {
					className: j.a.carouselHeader,
					style: {
						width: N
					}
				}, d.a.createElement("h3", {
					className: j.a.carouselTitle
				}, t)), d.a.createElement("div", {
					ref: y,
					onScroll: z,
					className: Object(n.a)(j.a.itemsContainer, null === j.a || void 0 === j.a ? void 0 : j.a[u]),
					style: {
						width: N
					}
				}, !Y.length && Array(3).fill(!0).map((e, t) => d.a.createElement(T, {
					key: t,
					className: J()
				})), null == Y ? void 0 : Y.map((e, t) => {
					let {
						type: s,
						props: n
					} = e;
					var o, r, i;
					switch (s) {
						case P.a.SUBREDDIT:
							const e = n;
							return d.a.createElement(D, U({
								className: J(),
								index: t + 1,
								size: u,
								banner: null === j.a || void 0 === j.a ? void 0 : j.a.bannerBackgroundImage,
								icon: (null === (o = null == e ? void 0 : e.styles) || void 0 === o ? void 0 : o.icon) || (null === (i = null === (r = e.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === i ? void 0 : i.url),
								key: `${null==e?void 0:e.name}:${t}`,
								isDiscovery: !0,
								post: x
							}, e));
						case P.a.POST:
							const s = n;
							return d.a.createElement(k, {
								postCard: {
									...s,
									url: A[s.id]
								},
								className: J(),
								post: x
							});
						case P.a.CROSSPOST:
							const a = n;
							return d.a.createElement(L, {
								crosspostCard: {
									...a
								},
								className: J(),
								post: x
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
						[j.a.hidden]: !E.left
					})
				}, d.a.createElement("button", {
					className: j.a.scrollButton,
					onClick: Q(-_)
				}, d.a.createElement(m.a, {
					name: o.a.left_fill,
					className: j.a.scrollIcon
				}))), d.a.createElement("div", {
					className: Object(n.a)(j.a.buttonWrapper, j.a.right, {
						[j.a.hidden]: !E.right
					})
				}, d.a.createElement("button", {
					className: j.a.scrollButton,
					onClick: Q(_)
				}, d.a.createElement(m.a, {
					name: o.a.right_fill,
					className: j.a.scrollIcon
				})))))
			});
			t.a = H
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = s("./src/reddit/helpers/overlay/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const {
					children: t,
					className: s,
					to: n,
					...r
				} = e, c = Object(a.b)(n);
				return o.a.createElement(i.a, d({
					className: s,
					to: c
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...s
				} = e, n = t ? c : r.a;
				return o.a.createElement(n, l({}, s, {
					children: s.children,
					className: s.className,
					onClick: s.onClick,
					to: s.to
				}))
			}
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
					shouldShowSubscribeButton: g,
					subredditOrProfile: x,
					templatePlaceholderImage: C,
					shouldShowFollowButton: f,
					isFollowed: O,
					isCommentsPage: v,
					onFollowPostClick: y
				} = e;
				return Object(p.a)() ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(i.a)(h.a.thumbnailContainer, {
						[h.a.mShowingButtonOrOverflow]: f || g
					})
				}, o.a.createElement("div", {
					className: h.a.thumbnailContainerRow
				}, f && o.a.createElement(a.a, {
					isFilled: !!O,
					onClick: y,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), g && x && o.a.createElement(d.a, {
					className: h.a.subscribeButton,
					getEventFactory: e => Object(m.h)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: x.name,
						type: Object(u.h)(x) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: s.id,
					small: !0
				})), o.a.createElement(c.a, {
					crosspost: t,
					isCommentsPage: v,
					post: s,
					redditStyle: b,
					forceShowNSFW: n,
					templatePlaceholderImage: C
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
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				C = s("./src/reddit/constants/modals.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/controls/ImageInput/index.tsx"),
				v = s("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				y = s("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				E = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				k = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				I = s("./src/reddit/models/ApiRequestState/index.ts"),
				P = s("./src/reddit/models/NewCommunityProgress/index.ts"),
				w = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/components/ModProgressModule/index.m.less"),
				N = s.n(S);
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = (e, t, s) => {
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
				}, t ? o.a.createElement(E.a, {
					name: "checkmark",
					className: N.a.CheckIcon
				}) : o.a.createElement(E.a, {
					name: a,
					className: N.a.Icon
				})), o.a.createElement("span", {
					className: N.a.CardTitle
				}, r)))
			}, M = Object(a.c)({
				isTooltipOpen: e => Object(_.a)(e) === u.MOD_WELCOME_TOOLTIP_ID,
				progressModuleRecords: w.c
			});
			class R extends o.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.onChangeIconFileInput = e => {
						const t = Object(I.b)();
						this.setState({
							apiRequestId: t
						}), this.props.uploadCommunityIcon(e, t)
					}, this.renderImageUploader = () => o.a.createElement(O.a, {
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
					this.props.progressModuleRecords && this.props.progressModuleRecords[this.props.subredditId] && this.props.sendEvent(Object(y.g)(this.props.progressModuleRecords[this.props.subredditId]))
				}
				onClickCard(e, t) {
					"add_descr" === t ? this.props.onOpenDescriptionModal() : "first_post_v3" === t ? this.props.onNavigateToSubmit() : this.onOpenIconUploadScreen(), this.props.sendEvent(Object(y.b)(e, t))
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
					if (!h) return o.a.createElement(x.a, {
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
						}), L._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: N.a.titleClassName,
						onClick: c
					});
					const g = (null === (e = null == h ? void 0 : h.progress) || void 0 === e ? void 0 : e.done) === (null === (t = null == h ? void 0 : h.progress) || void 0 === t ? void 0 : t.total),
						C = 0 === (null === (s = h.progress) || void 0 === s ? void 0 : s.done);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(x.a, {
						className: Object(d.a)(N.a.ThemedWidget, {
							[N.a.completed]: g,
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
						}), L._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: N.a.titleClassName
					}, o.a.createElement("div", {
						className: N.a.ProgressContainer
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: N.a.Title
					}, g ? L._("Well done, you're set up!", null, {
						hk: "3sJd9H"
					}) : L._("Set up r/{subredditName}", [L._param("subredditName", p)], {
						hk: "3SHelG"
					})), o.a.createElement("div", {
						className: N.a.ProgressDescription
					}, o.a.createElement("span", {
						className: N.a.progressCount
					}, L._("{cardsComplete} of {totalCards}", [L._param("cardsComplete", null === (n = h.progress) || void 0 === n ? void 0 : n.done), L._param("totalCards", null === (r = h.progress) || void 0 === r ? void 0 : r.total)], {
						hk: "1gMzOE"
					})), " ", o.a.createElement("span", {
						className: Object(d.a)(N.a.progressText, {
							[N.a.darkFont]: C
						})
					}, L._("tasks completed", null, {
						hk: "DxeNq"
					}))), C && o.a.createElement("div", {
						className: N.a.Description
					}, L._("Get your community off the ground with these tasks", null, {
						hk: "3n0h53"
					})))), !g && o.a.createElement("div", {
						className: N.a.CardContainer
					}, h.cards.map(e => {
						const t = e.status === P.a.COMPLETED;
						return T(e, t, () => this.onClickCard(h, e.id))
					})), g && o.a.createElement(f.t, {
						className: N.a.CloseButton,
						onClick: a,
						priority: f.c.Tertiary
					}, L._("Close", null, {
						hk: "3UZAZk"
					})), o.a.createElement(b.a, {
						isOpen: i
					})), this.renderImageUploader())
				}
			}
			const F = Object(r.b)(M, (e, t) => ({
				onCompleteModule: () => e(Object(v.c)(t.subredditId, P.d)),
				onNavigateToSubmit: () => e(Object(i.b)(`/r/${t.subredditName}/submit`)),
				onOpenDescriptionModal: () => e(Object(c.i)(C.a.EDIT_DESCRIPTION_MODAL)),
				onOpenTooltip: () => e(Object(p.h)({
					tooltipId: u.MOD_WELCOME_TOOLTIP_ID
				})),
				onTopBarClicked: () => e(Object(i.b)(`/r/${t.subredditName}/about`)),
				uploadCommunityIcon: (s, n) => {
					e(Object(l.a)(t.subredditId, s, n)), e(Object(m.b)(t.subredditId))
				}
			}));
			t.default = F(Object(g.c)(R))
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
				g = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/objectSelector/index.ts"),
				f = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.m.less"),
				v = s.n(O);
			const y = Object(u.a)(() => Object(r.c)({
				basePixelMetadata: Object(C.a)((e, t) => {
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
				pageType: e => Object(g.d)(e).pageType
			}));
			class E extends o.a.Component {
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
						style: g,
						ref: C,
						shouldAddGalleryViewability: f = !0
					} = this.props, O = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: g,
						ref: C,
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
						className: Object(x.a)(v.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: c ? c(l.id) : l.id,
						tabIndex: -1
					}, s), y = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || y ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, O) : l.media && Object(b.E)(l.media) && f ? o.a.createElement(m, {
						postId: l.id
					}, O) : O
				}
			}
			t.a = y(Object(f.a)(Object(p.c)(E)))
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
				return Lt
			})), s.d(t, "b", (function() {
				return Tt
			})), s.d(t, "a", (function() {
				return Mt
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
				g = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				C = s("./src/reddit/models/User/index.ts"),
				f = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				O = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				y = s("./src/reddit/helpers/path/index.ts"),
				E = s("./src/reddit/helpers/trackers/lightbox.ts"),
				j = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/components/ItemCarousel/index.tsx"),
				I = s("./src/reddit/actions/tooltip.ts"),
				P = s("./node_modules/lodash/find.js"),
				w = s.n(P),
				_ = s("./node_modules/react-motion/lib/react-motion.js");
			const S = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				N = "expando_content",
				L = {},
				T = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					const s = w()(e, {
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
							opacity: Object(_.spring)(1, S)
						}
					}] : [{
						key: N,
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: N,
						style: {
							opacity: Object(_.spring)(0, S)
						}
					}]
				};
			class M extends i.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), L), this.state = {
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
					return i.a.createElement(_.TransitionMotion, {
						styles: e => T(e, t),
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
			var R = s("./src/reddit/models/Media/index.ts"),
				F = s("./src/reddit/models/Post/index.ts"),
				A = s("./src/reddit/models/Vote/index.ts"),
				B = s("./src/reddit/selectors/activeModalId.ts"),
				D = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				U = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				V = s("./src/reddit/selectors/moderatorPermissions.ts"),
				W = s("./src/reddit/selectors/postCreations.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				q = s("./src/reddit/selectors/showPromotedCTA.ts"),
				G = s("./src/reddit/selectors/user.ts"),
				K = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Y = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				Q = s("./src/reddit/components/AwardBadges/index.tsx"),
				z = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				J = s("./src/reddit/components/Econ/Audio/async.ts"),
				X = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				Z = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				$ = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				ee = s("./src/reddit/components/ExpandoButton/index.tsx"),
				te = s("./src/reddit/components/FlairWrapper/index.tsx"),
				se = s("./src/reddit/components/Flatlist/index.tsx"),
				ne = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				oe = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				re = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				ie = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				ae = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				de = s("./src/reddit/components/ModModeReports/index.tsx"),
				ce = s("./src/reddit/components/ModModeReports/helpers.ts"),
				le = s("./src/reddit/components/NotificationButton/index.tsx"),
				me = s("./src/reddit/components/PostContainer/index.tsx"),
				pe = s("./src/higherOrderComponents/makeAsync.tsx"),
				ue = s("./src/lib/loadWithRetries/index.ts"),
				be = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const he = Object(pe.a)({
				ErrorComponent: () => i.a.createElement(be.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(ue.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(be.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var ge = e => i.a.createElement(he, e),
				xe = s("./src/reddit/components/PostList/index.tsx"),
				Ce = s("./src/reddit/components/PostMedia/index.tsx"),
				fe = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Oe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ve = s("./src/reddit/components/PostTitle/index.tsx"),
				ye = s("./src/reddit/components/PostTopLine/index.tsx"),
				Ee = s("./src/reddit/components/PostTopMeta/index.tsx"),
				je = s("./src/reddit/components/SourceLink/index.tsx"),
				ke = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ie = s("./src/reddit/components/UsersCountIndicator/async.tsx"),
				Pe = s("./src/reddit/constants/componentSizes.ts"),
				we = s("./src/reddit/constants/componentTestIds.ts"),
				_e = s("./src/reddit/constants/postLayout.ts"),
				Se = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Ne = s("./src/reddit/helpers/postEvent.ts"),
				Le = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Te = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Me = s("./src/reddit/selectors/postFlair.ts"),
				Re = s("./src/reddit/models/Audio/index.ts"),
				Fe = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				Ae = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Be = s("./src/reddit/constants/experiments.ts"),
				De = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Ue = s("./src/reddit/selectors/experiments/presence.ts");
			const Ve = e => {
					return Object(De.c)(e, {
						experimentEligibilitySelector: De.a,
						experimentName: Be.Df
					}) === Be.rd
				},
				We = e => {
					if (Object(Ue.a)(e)) return !1;
					return Object(De.c)(e, {
						experimentEligibilitySelector: De.a,
						experimentName: Be.Cf
					}) === Be.rd
				},
				He = (e, t) => {
					let {
						postId: s
					} = t;
					const n = Object(H.G)(e, {
						postId: s
					});
					return !(Object(Ue.a)(e) || !n || n.isSponsored) && Object(De.c)(e, {
						experimentEligibilitySelector: De.a,
						experimentName: Be.Bf
					}) === Be.rd
				};
			var qe = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				Ge = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ke = s("./src/reddit/constants/colors.ts"),
				Ye = s("./src/reddit/icons/fonts/index.tsx"),
				Qe = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				ze = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Je = s.n(ze);
			const Xe = i.a.createElement(Ye.a, {
				className: Je.a.BlockIcon,
				name: "block"
			});
			var Ze = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return i.a.createElement(Qe.a, {
						className: Je.a.bannerBase,
						color: Ke.a.dayModeActionIcon,
						icon: Xe,
						title: Ge.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && i.a.createElement("button", {
							className: Je.a.expandButton,
							onClick: t
						}, Ge.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: Je.a.blockedAuthorTextWrapper
					})
				},
				$e = s("./src/config.ts"),
				et = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				tt = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				st = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				nt = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				ot = s.n(nt);
			const {
				fbt: rt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), it = () => rt._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [rt._param("=User Agreement", i.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, rt._("User Agreement", null, {
				hk: "3MHgRl"
			}))), rt._param("=Content Policy", i.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, rt._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), at = () => rt._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [rt._param("=User Agreement", i.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, rt._("User Agreement", null, {
				hk: "yMHtU"
			}))), rt._param("=Content Policy", i.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, rt._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var dt = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: n,
					subredditName: o
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return rt._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case F.g.Author:
							return rt._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case F.g.AuthorDeleted:
							return rt._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case F.g.AutomodFiltered:
							return rt._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case F.g.CommunityOps:
							return rt._("This post was removed by Reddit admin, u/{username}.", [rt._param("username", t)], {
								hk: "34nHWu"
							});
						case F.g.ContentTakedown:
							return rt._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case F.g.CopyrightTakedown:
							return rt._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case F.g.Moderator:
							return rt._("This post was removed by r/{subredditName} moderator, u/{username}.", [rt._param("subredditName", s), rt._param("username", t)], {
								hk: "270bcn"
							});
						case F.g.Reddit:
							return rt._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return rt._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(n, s, o) : ((e, t) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return rt._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case F.g.Author:
							return rt._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case F.g.AuthorDeleted:
							return rt._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case F.g.AutomodFiltered:
							return rt._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case F.g.CommunityOps:
							return rt._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case F.g.ContentTakedown:
							return rt._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case F.g.CopyrightTakedown:
							return rt._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case F.g.Moderator:
							return rt._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [rt._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case F.g.Reddit:
							return rt._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return rt._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(n, o), a = t ? (e => {
					switch (e) {
						case F.g.AntiEvilOps:
							return i.a.createElement(it, null);
						case F.g.AuthorDeleted:
						case F.g.Author:
							return rt._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case F.g.AutomodFiltered:
							return rt._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case F.g.CommunityOps:
							return rt._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [rt._param("=just ask", i.a.createElement("a", {
								className: ot.a.link,
								href: `${$e.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, rt._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case F.g.ContentTakedown:
							return i.a.createElement(at, null);
						case F.g.CopyrightTakedown:
							return rt._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case F.g.Moderator:
							return rt._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case F.g.Reddit:
							return rt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return rt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(n) : ((e, t) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return i.a.createElement(it, null);
						case F.g.AuthorDeleted:
						case F.g.Author:
							return rt._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case F.g.AutomodFiltered:
							return rt._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [rt._param("=[subreddit name]", i.a.createElement("a", {
								className: ot.a.link,
								href: `${$e.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, rt._("{subreddit name}", [rt._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case F.g.CommunityOps:
							return rt._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case F.g.ContentTakedown:
							return i.a.createElement(at, null);
						case F.g.CopyrightTakedown:
							return rt._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case F.g.Moderator:
							return rt._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case F.g.Reddit:
						default:
							return rt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(n, o), d = t ? Ke.a.warning : Ke.a.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case F.g.AntiEvilOps:
						case F.g.AutomodFiltered:
						case F.g.CommunityOps:
						case F.g.ContentTakedown:
						case F.g.CopyrightTakedown:
						case F.g.Reddit:
							t = et.a;
							break;
						case F.g.AuthorDeleted:
						case F.g.Author:
							t = st.b;
							break;
						case F.g.Moderator:
							t = tt.a;
							break;
						default:
							t = et.a
					}
					return i.a.createElement(t, {
						className: ot.a.icon
					})
				})(n);
				return i.a.createElement(Qe.a, {
					className: ot.a.BannerBase,
					color: d,
					icon: c,
					subtitle: a,
					title: r
				})
			};

			function ct(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: n
				} = e;
				return i.a.createElement(i.a.Fragment, null, n && s.removedByCategory && i.a.createElement(dt, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: n.name
				}))
			}
			var lt = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				mt = s("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				pt = s("./src/reddit/actions/modal.ts"),
				ut = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				bt = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				ht = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				gt = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				xt = s("./src/reddit/components/PostUnavailableBanner/index.m.less"),
				Ct = s.n(xt);
			const ft = i.a.createElement(Ye.a, {
				className: Ct.a.RemoveIcon,
				name: "delete_fill"
			});
			var Ot = () => i.a.createElement(Qe.a, {
					className: Ct.a.bannerBase,
					color: Ke.a.dayModeActionIcon,
					icon: ft,
					title: Ge.fbt._("Sorry, this post is no longer available.", null, {
						hk: "sb8eO"
					})
				}),
				vt = s("./src/reddit/components/PostContent/index.m.less"),
				yt = s.n(vt);
			const {
				fbt: Et
			} = s("./node_modules/fbt/lib/FbtPublic.js"), jt = u.a.wrapped(ve.c, "PostTitle", yt.a), kt = u.a.wrapped(ee.a, "ExpandoButton", yt.a), It = u.a.wrapped(M, "ClassicExpandoMotion", yt.a), Pt = u.a.wrapped(se.c, "FullWidthFlatlist", yt.a), wt = i.a.createElement("p", {
				className: yt.a.VideoProcessingStatus
			}, Et._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), _t = Object(Se.u)({
				isCommentsPage: Se.x,
				pageLayer: e => e
			}), St = Object(a.b)(() => Object(l.c)({
				activeModalId: B.a,
				flairStyleTemplate: Se.V,
				currentUser: G.l,
				crosspost: H.d,
				hideNSFWPref: G.G,
				imageGalleryCurrentItem: H.i,
				isAdminOrMod: (e, t) => {
					const s = Object(H.U)(e, {
						postId: t.postId
					});
					return !!s && Object(U.c)(e, {
						subredditId: s.id
					})
				},
				isBlurredPreview: ht.b,
				isCurrentUserProfilePost: H.l,
				isExpanded: H.m,
				isFollowed: H.t,
				isFollowedExpired: H.o,
				showPromotedCTA: q.a,
				post: H.G,
				moderatorPermissions: V.m,
				modModeEnabled: Se.T,
				shouldTryToShowCrosspostModal: bt.e,
				showAwardsPlaque: D.a,
				showEditFlair: Me.a,
				subredditOrProfile: H.U,
				isEditing: W.M,
				userIsOp: G.Eb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Ae.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Ae.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: He,
				isReadingIndicatorsReadTestEnabled: We,
				isReadingIndicatorsWriteTestEnabled: Ve,
				isTrueblockPCBlockeeEnabled: Te.d,
				isTypingIndicatorsExperimentEnabled: qe.b,
				isTypingIndicatorsReadTestEnabled: qe.c
			}), (e, t) => {
				let {
					pageLayer: s,
					postId: n
				} = t;
				return {
					onIgnoreReports: () => e(Object(g.gb)(n)),
					onOpenReportsDropdown: t => e(Object(I.h)({
						tooltipId: t
					})),
					onVoteClick: t => {
						const s = t === A.a.upvoted ? Object(g.kb)(n) : Object(g.w)(n);
						e(s)
					},
					fireAdPixelsOfType: (t, s) => e(Object(g.z)(t, s)),
					openPost: t => e(Object(g.L)(t)),
					onFollowPost: t => e(Object(g.jb)(n, t)),
					onFollowPostExpired: () => e(Object(g.Y)({
						id: n,
						expiresAt: 0
					}))
				}
			}), Nt = e => e.media && e.media.type === R.o.EMBED && e.media.provider === R.v.Imgur && e.media.height > 700, Lt = new b.a, Tt = "VISIBLE", Mt = "NOT_VISIBLE", Rt = e => Lt.publish(e ? Tt : Mt), Ft = {
				threshold: [.85, .001],
				rootMargin: `${1-Pe.f}px 0px 0px 0px`
			}, At = e => {
				for (const t of e) {
					const {
						intersectionRatio: e
					} = t;
					e >= .85 && Rt(!1), e <= .001 && Rt(!0)
				}
			}, Bt = u.a.wrapped(d.a, "ThumbLink", yt.a), Dt = e => {
				let {
					post: t,
					templatePlaceholderImage: s,
					shouldShowFollowButton: n,
					isFollowed: o,
					onFollowPostClick: r
				} = e;
				const a = t.source ? i.a.createElement(z.a, {
					post: t,
					forceShowNSFW: !0,
					templatePlaceholderImage: s
				}) : i.a.createElement(Bt, {
					to: Object(y.b)(t.permalink)
				}, i.a.createElement(z.a, {
					post: t,
					forceShowNSFW: !0
				}));
				return i.a.createElement("div", {
					className: yt.a.classicThumbnail
				}, n && i.a.createElement(le.a, {
					className: yt.a.classicNotificationButton,
					isFilled: !!o,
					onClick: r,
					hasTooltip: !0,
					tooltipText: Et._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), a)
			}, Ut = e => {
				let {
					post: t,
					isExpanded: s,
					scrollerItemRef: n
				} = e;
				return i.a.createElement(It, {
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(Ce.a, {
						className: yt.a.ClassicPostMedia,
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
			t.c = _t(St(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					fireAdPixelsOfType: d,
					flairStyleTemplate: l,
					forceOpenInNewTab: u,
					hideNSFWPref: b,
					imageGalleryCurrentItem: g,
					isAdminOrMod: y,
					isBlurredPreview: I,
					isCommentCountAnimation: P,
					isCommentsPage: w,
					isCountAnimShadowTestEnabled: _,
					isCrosspostRecommendationsExperimentEnabled: S,
					isCurrentUserProfilePost: N,
					isEditing: L,
					isExpanded: T,
					isFollowed: M,
					isFollowedExpired: A,
					isModWithUserNotesPermissions: B,
					isOverlay: D,
					isReadingIndicatorsExperimentEnabled: U,
					isReadingIndicatorsReadTestEnabled: V,
					isReadingIndicatorsWriteTestEnabled: W,
					isTypingIndicatorsExperimentEnabled: H,
					isTypingIndicatorsReadTestEnabled: q,
					isVoteCountAnimation: G,
					moderatorPermissions: z,
					modModeEnabled: ee,
					onFollowPost: le,
					onFollowPostExpired: pe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: be,
					openPost: he,
					onVoteClick: Pe,
					post: Se,
					scrollerItemRef: Me,
					sendEvent: Ae,
					shouldTryToShowCrosspostModal: Be,
					showAwardsPlaque: De,
					showEditFlair: Ue,
					showPromotedCTA: Ve,
					subredditOrProfile: We,
					userIsOp: He,
					isTrueblockPCBlockeeEnabled: qe,
					pageLayer: Ge
				} = e, Ke = Object(ke.b)(), Ye = Object(r.useRef)(null), [Qe, ze] = Object(r.useState)(Se.authorIsBlocked), Je = Object(R.J)(Se), Xe = Object(a.e)(e => Object(Te.a)(e)), $e = Object(c.a)(Se), et = U || H, tt = et || V || W || q;
				Object(r.useEffect)(() => {
					A && pe()
				}, []);
				const st = Object(a.d)(),
					nt = Object(r.useRef)(null);
				Object(r.useEffect)(() => {
					if (S && Be) return st(Object(mt.a)(Se)), nt.current = setTimeout(() => {
						st(Object(pt.h)(ut.a)), st(Object(mt.b)())
					}, ut.b), () => {
						st(Object(mt.b)()), st(Object(pt.g)(ut.a)), nt.current && clearTimeout(nt.current)
					}
				}, [st, S, Se, Be]), Object(Le.a)(Ye, At, Ft);
				const ot = Se.isSponsored ? Object(xe.b)(Se.id, {
						fireAdPixelsOfType: d,
						openPost: he
					}) : o.a,
					rt = Object(v.a)(z),
					it = Object(f.a)(z),
					at = Object(O.a)(z),
					dt = rt || it,
					bt = ((e, t, s) => {
						const [n, o] = e ? [Object(C.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return n || t || o
					})(n, dt, Se),
					ht = !!Se.media && (Se.media.type === R.o.RTJSON || Se.media.type === R.o.TEXT),
					xt = He && ht,
					Ct = Object(ae.d)(Se),
					ft = Object(ce.c)(Se);
				let vt;
				const Et = !(ee && rt),
					It = Object(fe.b)({
						hide: !et && Et,
						editPost: !et && Et,
						save: Et,
						report: !et && Et
					}),
					_t = Se.removedByCategory === F.g.AuthorDeleted,
					St = n && (n.displayText === Se.author || n.username === Se.author),
					Lt = !!Se.unrepliableReason,
					Tt = !(Lt && qe) && !_t && !Nt(Se) && (St || y || !(Se.removedByCategory && Se.media && (Object(R.M)(Se.media) || Object(R.K)(Se.media) || Object(R.E)(Se.media)))),
					Mt = Object(m.t)(Se, g),
					{
						source: Rt
					} = Mt,
					Bt = Se.removedByCategory === F.g.Reddit && Object(h.e)(Se.created) > 24,
					Vt = Se.removedByCategory && Se.removedByCategory !== F.g.Reddit || Bt,
					Wt = !Vt && !Se.isArchived,
					Ht = Object(r.useCallback)(() => {
						le(M ? F.f.UNFOLLOWED : F.f.FOLLOWED), Ke(M ? Object(j.n)(Se.id) : Object(j.c)(Se.id))
					}, [le, Ke, M, Se.id]),
					qt = i.a.createElement(jt, {
						post: Se,
						innerRef: Ye,
						size: ve.b.ExtraLarge,
						isOverlay: D,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					Gt = i.a.createElement(lt.a, {
						post: Se,
						showViewCount: bt
					}),
					Kt = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? _e.g.Classic : Object(Fe.c)(n) ? _e.g.Large : Object(Re.b)(n) ? _e.g.Large : t ? _e.g.Large : n.media && !Nt(n) ? _e.g.Large : _e.g.Medium
					})(e),
					Yt = Object(a.e)(gt.b),
					Qt = Object(ne.b)(Se),
					zt = () => {
						const t = !(Lt && Xe && Qe),
							n = Object(R.I)(Se);
						return Lt && n ? i.a.createElement(Ot, null) : Xe && Qe ? i.a.createElement(Ze, {
							onBannerClick: () => ze(!1),
							isExpandable: Je
						}) : Se.source && Kt === _e.g.Medium && !I ? i.a.createElement(je.a, {
							post: Se,
							isCommentsPage: w,
							pageLayer: Ge
						}) : Tt && !L && Kt === _e.g.Large ? i.a.createElement(Ce.a, {
							className: Object(p.a)(yt.a.LargePostMedia, {
								[yt.a.isCommentsPage]: w
							}),
							isCommentsPage: !0,
							isListing: !1,
							isNotCardView: D,
							isOverlay: D,
							post: Se,
							shouldLoad: !0,
							showFull: !0,
							shouldPause: !D,
							showCentered: !0,
							showPromotedCTA: Ve,
							scrollerItemRef: Me
						}) : t && Kt === _e.g.Classic ? i.a.createElement(i.a.Fragment, null, i.a.createElement(kt, {
							crosspost: s || void 0,
							isExpanded: !!T,
							post: Se,
							useMediaIcons: !1
						}), Ut(e)) : null
					};
				if (Kt === _e.g.Classic) {
					const e = Object(x.a)(Se);
					vt = i.a.createElement("div", {
						"data-test-id": we.e
					}, i.a.createElement(Oe.a, {
						model: Se,
						handleVote: Pe,
						isCountAnimShadowTestEnabled: _,
						isOverlay: D,
						isVoteCountAnimation: G,
						postId: Se.id
					}), i.a.createElement("div", {
						className: yt.a.mainBody
					}, i.a.createElement("div", {
						className: yt.a.content
					}, i.a.createElement(ye.a, {
						hideAwards: De,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: w,
						isCurrentUserProfilePost: N,
						isModWithUserNotesPermissions: !!B,
						isOverlay: !!D,
						isTopicPage: !1,
						post: Se,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!D && !Se.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: We,
						shouldShowFollowButton: Wt && !e,
						isFollowed: M,
						onFollowPostClick: Ht
					}), qt, i.a.createElement(te.a, {
						className: w ? yt.a.leftPadding : void 0,
						post: Se,
						sendEvent: Ae
					}), ee && rt && ft && i.a.createElement(de.a, {
						onIgnoreReports: ue,
						reportable: Se
					}), i.a.createElement(oe.d, null), i.a.createElement("div", {
						className: yt.a.FlatlistContainer
					}, zt(), De && i.a.createElement(Q.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: Se,
						tooltipType: D ? Ee.c.Lightbox : void 0
					}), i.a.createElement(Pt, {
						currentUser: n,
						hasModFlairPerms: it,
						hasModFullPerms: at,
						hasModPostPerms: rt,
						isOverlay: D,
						onIgnoreReports: ue,
						onOpenReportsDropdown: be,
						modModeEnabled: ee,
						post: Se,
						showUpvotePercent: !0,
						showViewCount: bt,
						useFlatlistBreakpoints: It,
						isCommentCountAnimation: P,
						isCountAnimShadowTestEnabled: _
					}))), e && i.a.createElement(Dt, {
						post: Se,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Wt,
						isFollowed: M,
						onFollowPostClick: Ht
					})))
				} else if (Kt === _e.g.Medium) {
					const e = Object(x.a)(Se);
					vt = i.a.createElement("div", {
						"data-test-id": we.e
					}, i.a.createElement(Oe.a, {
						model: Se,
						handleVote: Pe,
						isCountAnimShadowTestEnabled: _,
						isOverlay: D,
						shouldShowUpvoteRatioOnHover: et,
						isVoteCountAnimation: G,
						postId: Se.id
					}), i.a.createElement("div", {
						className: yt.a.mainBody
					}, i.a.createElement("div", {
						className: yt.a.content
					}, i.a.createElement(ye.a, {
						hideAwards: De,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: w,
						isCurrentUserProfilePost: N,
						isModWithUserNotesPermissions: !!B,
						isOverlay: !!D,
						isTopicPage: !1,
						post: Se,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!D && !Se.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: We,
						shouldShowFollowButton: Wt && !e,
						isFollowed: M,
						onFollowPostClick: Ht
					}), qt, zt(), Object(R.O)(Se) && wt, i.a.createElement(te.a, {
						className: w ? yt.a.leftPadding : void 0,
						post: Se,
						sendEvent: Ae
					}), We && Vt && i.a.createElement(ct, {
						isAdminOrMod: y,
						post: Se,
						subredditOrProfile: We
					}), ee && rt && ft && i.a.createElement(de.a, {
						onIgnoreReports: ue,
						reportable: Se
					})), e && !$e && i.a.createElement(re.a, {
						post: Se,
						forceShowNSFW: !0,
						hasModPostPerms: dt,
						isCommentsPage: w,
						isOverlay: !0,
						modModeEnabled: ee,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: We,
						shouldShowFollowButton: Wt,
						isFollowed: M,
						onFollowPostClick: Ht
					})), i.a.createElement(oe.d, null), De && i.a.createElement(Q.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: Se,
						tooltipType: D ? Ee.c.Lightbox : void 0
					}), !!Yt && i.a.createElement(k.a, {
						itemIds: Qt,
						hasSubredditNames: !0,
						hasPostIds: !0,
						isDiscovery: !0,
						post: Se,
						size: "small"
					}), i.a.createElement("div", {
						className: yt.a.controlsContainer
					}, i.a.createElement(se.c, {
						currentUser: n,
						hasModFlairPerms: it,
						hasModFullPerms: at,
						hasModPostPerms: rt,
						isOverlay: D,
						modModeEnabled: ee,
						onIgnoreReports: ue,
						onOpenReportsDropdown: be,
						post: Se,
						showEditPost: xt,
						showEditFlair: Ue,
						tooltipType: D ? Ee.c.Lightbox : void 0,
						useFlatlistBreakpoints: It,
						isCommentCountAnimation: P,
						isCountAnimShadowTestEnabled: _,
						shouldHideItems: et
					}), tt && i.a.createElement(Ie.a, {
						isReadingIndicatorsExperiment: U,
						isReadingIndicatorsReadLoadTest: V,
						isReadingIndicatorsWriteLoadTest: W,
						isTypingIndicatorsExperiment: H,
						isTypingIndicatorsReadLoadTest: q,
						postId: Se.id
					}), !et && Gt))
				} else Kt === _e.g.Large && (vt = i.a.createElement("div", {
					"data-test-id": we.e
				}, i.a.createElement(Oe.a, {
					model: Se,
					handleVote: Pe,
					isCountAnimShadowTestEnabled: _,
					isOverlay: D,
					shouldShowUpvoteRatioOnHover: et,
					isVoteCountAnimation: G,
					postId: Se.id
				}), Object(Fe.c)(Se) && i.a.createElement(i.a.Fragment, null, i.a.createElement(Z.a, {
					post: Se
				}), i.a.createElement(X.a, {
					post: Se
				})), !Object(Fe.c)(Se) && i.a.createElement(i.a.Fragment, null, i.a.createElement(ye.a, {
					forceOpenInNewTab: u,
					hideAwards: De,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: w,
					isCurrentUserProfilePost: N,
					isModWithUserNotesPermissions: !!B,
					isOverlay: !!D,
					isTopicPage: !1,
					post: Se,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!D && !Se.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: We,
					shouldShowFollowButton: Wt,
					isFollowed: M,
					onFollowPostClick: Ht
				}), qt, ((e, t, s, n) => e.source && !t && (s || n))(Se, s, D, w) && !I && i.a.createElement(je.a, {
					post: Se,
					isCommentsPage: w,
					pageLayer: Ge
				})), i.a.createElement(te.a, {
					className: w ? yt.a.leftPadding : void 0,
					post: Se,
					sendEvent: Ae
				}), We && Vt && i.a.createElement(ct, {
					isAdminOrMod: y,
					post: Se,
					subredditOrProfile: We
				}), L && i.a.createElement(ge, {
					post: Se
				}), zt(), Ve && Rt && Rt.url && !Se.isSurveyAd && i.a.createElement(K.a, {
					className: yt.a.adLinkWrapper
				}, i.a.createElement(Y.a, {
					post: Se,
					adLinkContent: Mt
				})), ee && rt && Ct && i.a.createElement("div", {
					className: yt.a.modModeBannerWrapper
				}, i.a.createElement(ie.a, {
					thing: Se
				})), ee && rt && ft && i.a.createElement("div", {
					className: yt.a.modModeBannerWrapper
				}, i.a.createElement(de.a, {
					onIgnoreReports: ue,
					reportable: Se
				})), Object(Re.b)(Se) && i.a.createElement(J.a, {
					post: Se
				}), i.a.createElement(oe.d, null), De && i.a.createElement(Q.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: Se,
					tooltipType: D ? Ee.c.Lightbox : void 0
				}), !!Yt && i.a.createElement(k.a, {
					itemIds: Qt,
					hasSubredditNames: !0,
					hasPostIds: !0,
					isDiscovery: !0,
					post: Se,
					size: "small"
				}), i.a.createElement("div", {
					className: yt.a.controlsContainer
				}, i.a.createElement(se.c, {
					currentUser: n,
					forceOpenInNewTab: u,
					hasModFlairPerms: it,
					hasModFullPerms: at,
					hasModPostPerms: rt,
					isOverlay: D,
					modModeEnabled: ee,
					onIgnoreReports: ue,
					onOpenReportsDropdown: be,
					post: Se,
					showEditPost: xt,
					showEditFlair: Ue,
					tooltipType: D ? Ee.c.Lightbox : void 0,
					useFlatlistBreakpoints: It,
					isCommentCountAnimation: P,
					isCountAnimShadowTestEnabled: _,
					shouldHideItems: et
				}), tt && i.a.createElement(Ie.a, {
					isReadingIndicatorsExperiment: U,
					isReadingIndicatorsReadLoadTest: V,
					isReadingIndicatorsWriteLoadTest: W,
					isTypingIndicatorsExperiment: H,
					isTypingIndicatorsReadLoadTest: q,
					postId: Se.id
				}), !et && Gt)));
				const Jt = Object(r.useCallback)((e, t) => Object(j.h)(e, t), []);
				return i.a.createElement(me.a, {
					className: Object(p.a)(t, yt.a.postContainer, {
						[yt.a.hasEventMeta]: Object(Ne.a)(Se)
					}),
					isOverlay: D,
					post: Se,
					eventFactory: D ? E.b : Jt,
					onClick: ot
				}, i.a.createElement($.a, {
					post: Se
				}), vt)
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
				return x
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "k", (function() {
				return y
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "c", (function() {
				return k
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "g", (function() {
				return P
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
				g = s.n(h);
			const x = r.a.wrapped(d.a, "Icon", g.a),
				C = r.a.wrapped(c.a, "Icon", g.a),
				f = r.a.wrapped(l.a, "Icon", g.a),
				O = r.a.wrapped(m.a, "Icon", g.a),
				v = r.a.wrapped(p.a, "Icon", g.a),
				y = r.a.wrapped(u.a, "Icon", g.a),
				E = () => o.a.createElement(a.a, {
					name: "mod_mute",
					className: g.a.Icon
				}),
				j = () => o.a.createElement(a.a, {
					name: "calendar",
					className: g.a.Icon
				}),
				k = () => o.a.createElement(b.a, {
					className: g.a.svgIcon
				}),
				I = r.a.wrapped(i.b, "DropdownRow", g.a),
				P = r.a.div("ListContainer", g.a)
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
					redditStyle: g,
					isOverlay: x,
					isVoteCountAnimation: C,
					postId: f,
					shouldShowUpvoteRatioOnHover: O
				} = e, v = `upvote-button-${t.id}${x?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: g
				}, n && o.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(a.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: g,
					upvoteTooltipId: v,
					isVoteCountAnimation: C,
					isCountAnimShadowTestEnabled: u,
					postId: f,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: O
					}),
					shouldShowUpvoteRatioOnHover: O
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
				g = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				k = s.n(j);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: o,
					hideAwards: j,
					hideNSFWPref: I,
					hostPostData: P,
					iconClassName: w,
					inSubredditOrProfile: _,
					isCommentsPage: S,
					isCompactPinnedPost: N,
					isCurrentUserProfilePost: L,
					isModWithUserNotesPermissions: T,
					isOverlay: M,
					isTopicPage: R,
					listingKey: F,
					post: A,
					shouldShowSubscribeButton: B,
					showCornerOutboundLink: D,
					showSubreddit: U,
					showSubredditIcon: V,
					subredditOrProfile: W,
					isFollowed: H,
					shouldShowFollowButton: q,
					onFollowPostClick: G
				} = e;
				const K = j || R,
					Y = W && Object(y.h)(W),
					Q = Object(i.e)(e => {
						if (!Y) return !0;
						const t = Object(E.Hb)(e, A.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(k.a.container, t)
				}, U && W && r.a.createElement("div", {
					className: k.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: W.url
				}, V && r.a.createElement(u.b, {
					className: Object(a.a)(k.a.subredditIcon, w),
					shouldHideNsfwIcon: I,
					subredditOrProfile: W
				}))), r.a.createElement("div", {
					className: k.a.everythingElseWrapper
				}, U && r.a.createElement(c.h, {
					type: A.belongsTo.type,
					id: A.belongsTo.id
				}), r.a.createElement(p.d, {
					className: k.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: T,
					tooltipType: M ? p.c.Lightbox : void 0,
					post: A,
					showSub: U,
					subredditOrProfile: W
				}), r.a.createElement(m.a, {
					className: k.a.postBadges,
					displayText: W ? W.displayText : null,
					inSubredditOrProfile: _,
					isCompactPinnedPost: N,
					post: A,
					tooltipType: M ? p.c.Lightbox : void 0
				}), !K && r.a.createElement(d.a, {
					isPostDetail: S,
					thing: A,
					tooltipType: M ? p.c.Lightbox : void 0
				})), W && Q && U && B && !L && r.a.createElement(h.a, {
					className: k.a.SubscribeButton,
					getEventFactory: e => Object(f.h)(A.id, e ? "unsubscribe" : "subscribe", "post", F, P),
					identifier: {
						name: W.name,
						type: Y ? g.a.PROFILE : g.a.SUBREDDIT
					},
					postId: A.id,
					size: x.d.XS
				}), D && r.a.createElement(C.b, {
					isSponsored: A.isSponsored,
					postId: A.id,
					href: Object(v.D)(A),
					source: A.source
				}, r.a.createElement(O.a, {
					className: k.a.outboundLinkIcon
				})), q && Q && r.a.createElement(l.a, {
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
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/elementIds.ts"),
				C = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/constants/page.ts"),
				O = s("./src/reddit/constants/postLayout.ts"),
				v = s("./src/reddit/helpers/postCollection.ts"),
				y = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				E = s("./src/reddit/helpers/trackers/lightbox.ts"),
				j = s("./src/reddit/helpers/trackers/screenview.ts"),
				k = s("./src/reddit/selectors/chatPost.ts"),
				I = s("./src/reddit/selectors/commentsListTruncated.ts"),
				P = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				w = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				_ = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				S = s("./src/reddit/selectors/i18n/index.ts"),
				N = s("./src/reddit/selectors/telemetry.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				T = s("./src/lib/classNames/index.ts"),
				M = s("./src/reddit/constants/listings.ts"),
				R = s("./src/reddit/controls/InternalLink/index.tsx"),
				F = s("./src/reddit/helpers/name/index.ts"),
				A = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				B = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				D = s.n(B);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var V = Object(m.a)(e => {
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
					})) : d = n ? U._("See more posts like this in {subredditName}", [U._param("subredditName", Object(F.c)(r.displayText))], {
						hk: "pLxW5"
					}) : U._("Continue browsing in {subredditName}", [U._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(R.a, {
						className: Object(T.a)(D.a.footer, t),
						onMouseDown: s,
						to: c,
						style: {
							backgroundColor: i
						}
					}, a.a.createElement("div", {
						className: D.a.background
					}), a.a.createElement("div", {
						className: D.a.layout
					}, d, a.a.createElement(A.a, {
						className: D.a.arrow
					})))
				}),
				W = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				H = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				q = s.n(H);
			const G = Object(c.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, I.a, P.b, (e, t, s) => !((!t || s) && e)),
				K = Object(c.a)((e, t) => {
					let {
						post: s
					} = t;
					return !!s && Object(v.a)(s)
				}, (e, t) => {
					let {
						awaitAllCommentsRendered: s
					} = t;
					return s
				}, L.Q, L.R, k.d, G, (e, t, s, n, o, r) => !t && !s && !n && !o && !e && r),
				Y = Object(c.a)((e, t) => {
					let {
						post: s
					} = t;
					return s
				}, w.c, N.W, N.gb, (e, t, s, n) => {
					const o = !!e && void 0 !== e.isEligibleForLinkedPosts;
					let r, i = "";
					if (e && (r = {
							hostPostId: e.id,
							isEligibleForLinkedPosts: !1,
							shouldShowLinkedPosts: !1,
							subreddit: n
						}), t && e && o) {
						const {
							isEligibleForLinkedPosts: o,
							id: a
						} = e;
						i = Object(p.a)(a, Object(w.a)(t) || !o), r = {
							canonicalUrl: s.canonical_url,
							baseUrl: s.base_url,
							hostPostId: a,
							isEligibleForLinkedPosts: o,
							shouldShowLinkedPosts: o && !Object(C.Lf)(t) && !Object(w.a)(t),
							subreddit: n
						}
					}
					return {
						hostPostData: r,
						isEligibilityLoaded: o,
						listingBelowVariant: t,
						linkedPostsListingKey: i
					}
				}),
				Q = Object(c.c)({
					listingBelowLinkedPostsData: Y,
					nsfwListingBelowVariant: _.a,
					shouldShowListingBelow: K,
					shouldShowNsfwListingBelow: S.b
				}),
				z = Object(d.b)(Q, e => ({
					loadMorePosts: t => e(Object(b.r)({
						sort: l.X.HOT,
						subredditName: t
					}))
				}));
			class J extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(x.e) : null, this.onViewed = (e, t) => Object(j.f)({
						key: this.listingKey(),
						sort: l.X.TOP,
						timerType: t,
						timerMillis: e,
						timeSort: l.jc.WEEK
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
						post: n,
						subredditOrProfile: o
					} = this.props;
					return s ? t : e && n && n.id ? Object(W.a)(n.id) : Object(u.a)(o.name, l.X.TOP, {
						t: l.jc.WEEK
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
					if (c && !Object(C.Lf)(c) && !Object(w.a)(c) && !i) return a.a.createElement("div", {
						className: q.a.smallBanner
					});
					const {
						name: l
					} = o, m = Object(y.a)(r.newCommunityTheme.canvas);
					let p = null;
					return p = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? n.fbt._("More posts from the {name} community", [n.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(w.b)(c) ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === C.me.DeRecs ? n.fbt._("Popular Posts Near You", null, {
						hk: "22vlW0"
					}) : n.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: q.a.smallBanner,
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
						shouldShowNsfwListingBelow: n,
						subredditOrProfile: o
					} = this.props, {
						hostPostData: i,
						listingBelowVariant: d
					} = t;
					if (!s) return null;
					const c = !!(null == i ? void 0 : i.shouldShowLinkedPosts);
					return a.a.createElement("div", {
						className: q.a.container
					}, this.renderSmallBanner(), a.a.createElement(h.a, {
						className: q.a.postList,
						disablePlaceholder: !0,
						forcedLayout: O.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: i,
						isTruncated: !0,
						listingBelowVariant: d,
						listingKey: this.listingKey(),
						listingName: f.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: q.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						shouldHideFlair: !0
					}), a.a.createElement(V, {
						className: q.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: c,
						shouldShowNsfwListingBelow: n,
						subredditOrProfile: o
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
					}) && !Object(d.F)(e) && !Object(a.a)(e)
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
				return N
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
				g = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/sample/index.ts"),
				O = s("./src/telemetry/helpers/sendCounter.ts");
			var v;
			! function(e) {
				e.FullPage = "FullPage", e.Modal = "Modal"
			}(v || (v = {}));
			var y = s("./src/reddit/selectors/telemetry.ts");
			const E = "nsfw_dialog";
			var j = e => i.a.createElement("svg", {
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
				k = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				I = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				P = s.n(I);
			const w = {
					d2x_nsfw_signup_blocking_de_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${n.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				_ = e => {
					const t = Object(a.d)(),
						s = Object(h.b)(),
						n = Object(a.e)(k.d),
						m = Object(r.useCallback)(() => {
							n === k.a.Blurred && t(Object(u.k)({
								actionSource: u.a.NsfwBlockingModal
							}))
						}, [t, n]),
						b = (e => e ? i.a.createElement("div", {
							className: P.a.cta
						}, o.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), i.a.createElement("br", null), o.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : i.a.createElement("div", {
							className: P.a.cta
						}, o.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(n === k.a.Blurred);
					return Object(r.useEffect)(() => {
						(e => {
							Object(f.a)(10) && Object(O.b)(C.n.Redesign, {
								type: O.a.NsfwBlocking,
								data: {
									variant: e
								}
							})
						})(n)
					}, [n]), i.a.createElement("div", {
						className: Object(l.a)(P.a.mainCta)
					}, i.a.createElement(j, null), b, i.a.createElement("div", {
						className: P.a.contentTitle
					}, e.contentTitle), i.a.createElement("div", {
						className: P.a.warning
					}, (() => o.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), i.a.createElement("div", {
						className: P.a.buttonContainer
					}, i.a.createElement(x.j, {
						className: Object(l.a)(P.a.logIn),
						onClick: () => {
							s((() => e => ({
								...Object(y.n)(e),
								source: "xpromo",
								action: "click",
								noun: E
							}))()), m(), t(Object(p.i)())
						}
					}, (() => o.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), i.a.createElement(x.j, {
						className: P.a.cancel,
						onClick: () => {
							Object(c.b)(), s((() => e => ({
								...Object(y.n)(e),
								source: "xpromo",
								action: "dismiss",
								noun: E
							}))()), t(Object(d.b)("/"))
						}
					}, (() => o.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				S = Object(m.a)(e => {
					const t = `${n.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return i.a.createElement("div", {
						className: P.a.qrCodeOuter
					}, i.a.createElement("div", {
						className: P.a.qrCodeInner
					}, i.a.createElement("img", {
						className: P.a.qrCode,
						alt: o.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), i.a.createElement("div", {
						className: P.a.copyLine1
					}, (() => o.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), i.a.createElement("div", {
						className: P.a.copyLine2
					}, (() => o.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), i.a.createElement("img", {
						className: P.a.sneakySnoo,
						src: t
					})))
				}),
				N = e => {
					const t = Object(h.b)();
					i.a.useEffect(() => {
						t((() => e => ({
							...Object(y.n)(e),
							source: "xpromo",
							action: "view",
							noun: E
						}))())
					}, [t]);
					const {
						contentTitle: s
					} = e, n = Object(a.e)(k.e), o = Object(a.e)(k.f), r = Object(a.e)(k.b), d = Object(a.e)(k.d), c = d === k.a.Blurred ? b.a.White : d === k.a.NoPreview ? b.a.Grey : void 0;
					return i.a.createElement("div", {
						className: P.a.container
					}, i.a.createElement(_, {
						contentTitle: s
					}), i.a.createElement("div", {
						className: Object(l.a)(P.a.footerWrapper, {
							[P.a.mIsModal]: r
						})
					}, i.a.createElement(b.b, {
						textColor: c
					})), i.a.createElement(S, {
						isBlurredPreview: r,
						qrCodeAsset: (() => n === g.tc.Enabled || o === g.jb.BlurredPreview || o === g.jb.NoPreview ? w.d2x_nsfw_signup_blocking_de_v1 : w.d2x_nsfw_signup_blocking_non_us_v1)()
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
				return k
			})), s.d(t, "b", (function() {
				return P
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
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				C = s("./src/reddit/selectors/experiments/survey.ts"),
				f = s("./src/reddit/selectors/listings.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts");

			function E() {
				return Object(u.u)({
					currentProfileName: u.i,
					isCommentPermalink: u.w,
					isCommentsPage: u.x,
					isFrontpage: u.A,
					isProfilePostListing: u.L,
					isTopicPage: u.Q,
					pageLayer: e => e
				})
			}
			const j = E(),
				k = {
					apiError: f.c,
					apiPending: f.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.R)(e, t),
					loadMore: f.g,
					postsById: O.S,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(O.D)(e, s, n, o)
					}),
					subredditsById: v.ab,
					viewportDataLoaded: y.a,
					pageReferrer: u.U,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: C.e
				},
				I = Object(o.c)(k),
				P = e => ({
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
				w = e => Object(b.b)({
					...e
				}),
				_ = (e, t, s, n) => {
					const {
						listingKey: o,
						hostPostData: r,
						listingBelowVariant: i
					} = n;
					return Object(h.h)(e, t, "post", o, r, i, void 0)
				},
				S = Object(n.b)(I, P, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: w,
					postClickEventFactory: _
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
							subreddits: g
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
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, s) {
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
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
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
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				f = s.n(C);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(r.b)(() => Object(i.c)({
					showFPR: x.P,
					showSuspended: x.Y,
					showOffline: e => e.connection.showBanner
				})),
				y = Object(d.a)(e => {
					let {
						className: t,
						isCollectionLayout: s,
						theme: n,
						...r
					} = e;
					const i = Object(g.a)({
						theme: n,
						...r
					});
					return o.a.createElement("div", O({
						className: Object(a.a)(f.a.fakeOverlay, t),
						style: {
							"--fakelightbox-overlay-background": Object(h.g)(i.canvas, i.canvasImgUrl, i.canvasImgPosition),
							"--fakelightbox-overlay-max-width": s ? `${u.h}px` : `${u.i}px`
						}
					}, r))
				});
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR,
							showOffline: this.props.showOffline
						};
						return o.a.createElement(m.a, {
							className: Object(a.a)(f.a.fakeOverlayLightboxHeaderWrapper, {
								[f.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(f.a, t))
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
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(y, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), o.a.createElement(c.a.Consumer, null, this.renderWrapper), o.a.createElement(b.a, e))
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
				g = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/pages/CommentsPage/index.tsx"),
				C = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				f = s("./src/reddit/selectors/postCollection.ts"),
				O = s("./node_modules/reselect/es/index.js");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
				}, d.a.createElement(x.CommentsPage, v({}, e, {
					postId: t
				}))) : null
			});
			t.default = Object(C.a)(e => {
				const {
					state: t
				} = e.location, s = i()(t, p.b.IsOverlay, !1), n = i()(t, p.b.CloseLocation, null), r = i()(t, p.b.ScrollOnLoad, !1);
				r && Object(b.c)(p.b.ScrollOnLoad);
				const a = e.match.params,
					{
						partialCommentId: c,
						partialPostId: u,
						subredditName: x,
						collectionId: C
					} = a,
					f = u ? Object(g.t)(u) : void 0,
					O = c && Object(h.h)(c),
					v = o()([...Object(l.a)(e.location.search)]),
					E = {};
				e.hasSortParam && (E.sort = e.sort, E.hasSortParam = !0);
				const j = Object(m.a)(C, f, O, E);
				return d.a.createElement(y, {
					closeLocation: n,
					collectionId: C,
					commentId: O,
					commentsPageKey: j,
					isOverlay: s,
					location: e.location,
					postId: f,
					instanceId: v.instanceId,
					shouldScrollToComments: r,
					sort: e.sort,
					subredditName: x,
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
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				discoveryExperimentLink: "_1aOgrREECvp9S07UGKx-jG"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
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
				g = s("./src/reddit/hooks/usePageLayer.ts"),
				x = s("./src/reddit/selectors/comments.ts"),
				C = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				f = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				O = s.n(f);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = Object(i.c)({
				isSubredditDiscoveryCrosspostEnabled: C.a,
				headComment: x.x,
				post: x.H
			}), E = e => {
				var t;
				const s = Object(g.a)(),
					{
						isSubredditDiscoveryCrosspostEnabled: n,
						headComment: i,
						post: x
					} = Object(r.e)(t => y(t, e)),
					C = Object(m.b)(),
					{
						commentId: f,
						isOverlay: E,
						postId: j
					} = e;
				if (!x) return null;
				const k = null !== (t = x.numDuplicates) && void 0 !== t ? t : 0,
					I = void 0 !== f,
					P = x.permalink,
					w = k > 0,
					_ = Object(p.b)(Object(d.e)(P));
				return I || w ? o.a.createElement("div", {
					className: O.a.CommentsNavigationPane
				}, I && o.a.createElement("div", null, o.a.createElement(l.a, {
					className: O.a.linkOrOverlay,
					"data-testid": "view_all_comments_link",
					isOverlay: E,
					to: Object(p.b)(P),
					onClick: () => C(Object(h.i)(j, i, s))
				}, v._("View all comments", null, {
					hk: "3I5IX9"
				})), i && null !== i.parentId && o.a.createElement(l.a, {
					className: O.a.linkOrOverlay,
					isOverlay: E,
					to: Object(p.b)(i.permalink + "?context=8&depth=9")
				}, v._("Show parent comments", null, {
					hk: "AVRCa"
				}))), w && o.a.createElement(o.a.Fragment, null, n && o.a.createElement(c.a, {
					postId: j
				}), o.a.createElement(l.a, {
					className: Object(a.a)(O.a.OtherDiscussionsLink, {
						[O.a.discoveryExperimentLink]: n
					}),
					isOverlay: E,
					onClick: () => C(n ? Object(u.b)() : Object(b.a)(j)),
					to: _
				}, n ? o.a.createElement(o.a.Fragment, null, v._("View all", null, {
					hk: "30twDK"
				}), ` (${k})`) : v._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [v._plural(k, "other discussion communities count")], {
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
				return _t
			})), s.d(t, "CommentsPage", (function() {
				return Ft
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
				g = s("./src/telemetry/index.ts"),
				x = s("./src/telemetry/models/Timer.ts"),
				C = s("./src/higherOrderComponents/asModal/helpers.ts"),
				f = s("./src/lib/classNames/index.ts"),
				O = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/domUtils/index.ts"),
				y = s("./src/lib/fastdom/index.ts"),
				E = s("./src/lib/lessComponent.tsx"),
				j = s("./src/lib/makeCommentsPageKey/index.ts"),
				k = s("./src/lib/makeDraftKey/index.ts"),
				I = s("./src/lib/performanceTimings/index.tsx"),
				P = s("./src/reddit/actions/ads/index.ts"),
				w = s("./src/reddit/actions/comment/index.ts"),
				_ = s("./src/reddit/actions/comment/authoring.ts"),
				S = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				N = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				L = s("./src/reddit/actions/login.ts"),
				T = s("./src/reddit/actions/modal.ts"),
				M = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				R = s("./src/reddit/actions/pages/comments.ts"),
				F = s("./src/reddit/actions/reportFlow/index.ts"),
				A = s("./src/reddit/actions/tooltip.ts"),
				B = s("./src/reddit/actions/upvotePrompt.ts"),
				D = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				U = s("./src/reddit/components/CrosspostRecommendationsModal/async.tsx"),
				V = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				W = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				H = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				q = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				G = s("./src/reddit/constants/componentSizes.ts"),
				K = s("./src/reddit/constants/elementIds.ts"),
				Y = s("./src/reddit/constants/history.ts"),
				Q = s("./src/reddit/constants/keycodes.ts"),
				z = s("./src/reddit/constants/posts.ts"),
				J = s("./src/reddit/constants/screenWidths.ts"),
				X = s("./src/reddit/contexts/ApiContext.tsx"),
				Z = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				ee = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				te = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				se = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				ne = s("./src/reddit/selectors/subreddit.ts"),
				oe = s("./src/reddit/selectors/upvotePrompt.ts"),
				re = s("./src/reddit/featureFlags/profileCollections.ts"),
				ie = s("./src/reddit/contexts/Post/index.tsx"),
				ae = s("./src/reddit/models/Comment/index.ts"),
				de = s("./src/reddit/models/Post/index.ts"),
				ce = s("./src/reddit/models/Subreddit/index.ts"),
				le = s("./src/reddit/selectors/chatPost.ts"),
				me = s("./src/reddit/selectors/comments.ts"),
				pe = s("./src/reddit/selectors/commentSelector.ts"),
				ue = s("./src/reddit/selectors/commentsListTruncated.ts"),
				be = s("./src/reddit/selectors/creatorStats.ts"),
				he = s("./src/reddit/selectors/discoveryUnit.ts"),
				ge = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				xe = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Ce = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				fe = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				Oe = s("./src/reddit/selectors/experiments/d2xSeoLightboxExperiment.ts"),
				ve = s("./src/reddit/selectors/experiments/postSeo.ts"),
				ye = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				Ee = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				je = s("./src/reddit/selectors/isEligibleForCommentTruncation.ts"),
				ke = s("./src/reddit/selectors/meta.ts"),
				Ie = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Pe = s("./src/reddit/selectors/posts.ts"),
				we = s("./src/reddit/selectors/tooltip.ts"),
				_e = s("./src/reddit/selectors/user.ts"),
				Se = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				Ne = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Le = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Te = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Me = s("./src/reddit/components/Comments/index.tsx"),
				Re = s("./src/reddit/components/Comments/States/index.tsx"),
				Fe = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Ae = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Be = s("./src/reddit/components/CommentSort/index.tsx"),
				De = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Ue = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Ve = s("./src/reddit/components/CreatorStats/loader.tsx"),
				We = s("./src/reddit/components/HeaderImage/index.tsx"),
				He = s("./src/reddit/components/Hovercards/helpers.ts"),
				qe = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Ge = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Ke = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Ye = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Qe = s("./src/reddit/components/JumpToContent/index.tsx"),
				ze = s("./src/reddit/components/NewCommentPill/async.tsx"),
				Je = s("./src/reddit/components/PostContent/index.tsx"),
				Xe = s("./src/reddit/components/PostDetailStickyHeader/async.tsx"),
				Ze = s("./src/reddit/components/PostTopMeta/index.tsx"),
				$e = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				et = s("./src/reddit/components/SubredditNav/index.tsx"),
				tt = s("./src/reddit/components/TrackingHelper/index.tsx"),
				st = s("./src/reddit/helpers/datadome.ts"),
				nt = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				ot = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				rt = s("./src/reddit/helpers/history/index.ts"),
				it = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				at = s("./src/reddit/helpers/name/index.ts"),
				dt = s("./src/reddit/helpers/postCollection.ts"),
				ct = s("./src/reddit/helpers/resonatePage/index.ts"),
				lt = s("./src/reddit/helpers/trackers/lightbox.ts"),
				mt = s("./src/reddit/helpers/trackers/screenview.ts"),
				pt = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				ut = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				bt = s("./src/reddit/layout/page/Listing/index.tsx"),
				ht = s("./src/reddit/models/ContentGate.ts"),
				gt = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				xt = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				Ct = s("./src/reddit/pages/CommentsPage/index.m.less"),
				ft = s.n(Ct);

			function Ot() {
				return (Ot = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const vt = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				yt = e => {
					let {
						condition: t,
						wrap: s,
						children: n
					} = e;
					return t ? s(n) : n
				},
				Et = 200,
				jt = 80,
				kt = 32,
				It = Object(n.a)({
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
				Pt = Object(n.a)({
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
				wt = Object(n.a)({
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
				_t = e => {
					let {
						postId: t,
						commentId: s,
						commentsPageKey: n
					} = e;
					return s ? Object(j.a)(t) : n
				},
				St = e => {
					const {
						state: t
					} = e.location, s = a()(t, Y.b.IsOverlay, !1), n = a()(t, Y.b.CloseLocation, null), o = a()(t, Y.b.ScrollOnLoad, !1);
					o && Object(rt.c)(Y.b.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(de.t)(i), l = r && Object(ae.h)(r);
					return m.a.createElement(ie.a, {
						postId: c
					}, m.a.createElement(Ft, {
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
				Nt = Object(Z.u)(),
				Lt = () => Object(b.c)({
					apiError: me.c,
					apiPending: me.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(Pe.U)(e, {
							postId: s
						});
						return !!(n && n.id && e.moderatingSubreddits[n.id])
					},
					canShowCrosspostRecommendationsModal: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(ee.a)(e, s)
					},
					canViewCreatorStats: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(be.a)(e, s)
					},
					comment: pe.b,
					communityBannerDiscoveryUnit: he.a,
					isSubredditDiscoveryCrosspostEnabled: Ee.a,
					contentGateInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return Object(_e.f)(e, s)
					},
					currentUserShowNSFW: _e.lb,
					dismissedSubreddits: ge.a,
					fullyLoaded: me.u,
					hasModeratorPostPermissions: Ie.c,
					headComment: me.x,
					isActionBarAnimationEnabled: se.b,
					isAvatarsInCommentsEnabled: Ce.a,
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							postId: s
						} = t;
						return !!Object(Pe.w)(e, {
							postId: s
						}) && Object(xe.a)(e)
					},
					isCountAnimShadowTestEnabled: se.e,
					isCrawler: (e, t) => !!Object(ke.c)(e),
					isCreatorStatsEnabled: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(fe.a)(e, s)
					},
					isCrosspostRecommendationsExperimentEnabled: ee.b,
					isD2xSeoDisableLightboxEnabled: Oe.a,
					isEligibleForCommentTruncation: je.a,
					isChatPost: le.d,
					isCommentsListTruncated: ue.a,
					isLoggedIn: _e.R,
					isNightmodeOn: _e.eb,
					isTooltipOpen: (e, t) => !!Object(we.a)(e),
					origin: ke.j,
					post: Pe.G,
					postSEOV2IdCardVariant: ve.h,
					profileCollectionsEnabled: re.a,
					replyComment: (e, t) => {
						let {
							postId: s,
							commentId: n,
							commentsPageKey: o
						} = t;
						return Object(me.s)(e, {
							commentsPageKey: _t({
								postId: s,
								commentId: n,
								commentsPageKey: o
							})
						})
					},
					shouldOpenPostInNewTab: _e.kb,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(ne.v)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: Pe.U,
					userHovercardIsOpen: (e, t) => Object(we.b)(Object(He.b)({
						itemId: t.postId,
						tooltipIdPrefix: W.a,
						tooltipType: Ze.c.StickyPost
					}))(e),
					userPrefs: _e.Ib,
					inResonatePilot: ye.a,
					isQualifiedForUpvotePrompt: oe.c,
					isTrueblockPCBlockeeEnabled: xe.d,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditName: s
						} = t;
						const n = Object(ne.E)(e, s);
						return !!n && Object(Ie.i)(e, n)
					},
					isBlurredPreview: (e, t) => {
						const {
							postId: s
						} = t, n = Object(Pe.U)(e, {
							postId: s
						});
						return !(!n || !n.isNSFW) && Object(te.b)(e)
					},
					shouldShowNsfwSignupUpsell: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(Pe.U)(e, {
							postId: s
						});
						return !(!n || !n.isNSFW) && Object(te.h)(e)
					},
					nsfwExperiment: te.d
				}),
				Tt = (e, t) => ({
					closeCrosspostRecommendationsModal: () => e(Object(T.g)(V.a)),
					dismissTruncation: t => e(Object(Se.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(S.a)()),
					setCommentFocus: t => e(w.f({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(R.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(A.i)()),
					onToggleTooltip: t => e(Object(A.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(L.i)()),
					openNsfwModal: () => e(Object(M.a)()),
					openRegisterModal: () => e(Object(L.j)()),
					openReportFlow: (t, s) => e(Object(F.c)(t, s)),
					goToSubredditPage: t => e(Object(u.b)(t)),
					truncateCommentsList: () => e(Object(S.b)()),
					fetchCommentsNativeAd: t => e(Object(P.a)(t)),
					getIsTrackingCrossposts: t => e(Object(N.b)(t)),
					getPostCrowdControlLevel: t => e(Object(Ne.b)(t)),
					triggerUpvotePrompt: (t, s, n) => {
						e(Object(B.b)(t, s, n))
					}
				}),
				Mt = Object(p.b)(Lt, Tt);
			class Rt extends m.a.Component {
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
						this.scrollY = d, this.state.commentNativeAdId && (!e && void 0 !== n && d >= n && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== n && d < n && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== o && d >= o && (this.didScrollPastPost = !0), t && void 0 !== o && d < o && (this.didScrollPastPost = !1, r && y.a.write(() => {
							i(Object(He.b)({
								itemId: a,
								tooltipIdPrefix: W.a,
								tooltipType: Ze.c.StickyPost
							}))
						}))
					}, O.L), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(lt.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const n = s && Object(de.s)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(ot.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === Q.b.F || e.keyCode === Q.a.F,
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
					}, oe.b));
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isBlurredPreview: n,
							isLoggedIn: o,
							isOverlay: r,
							openNsfwModal: i,
							post: a,
							shouldScrollToComments: d,
							subredditName: c
						}
					} = this, l = new URLSearchParams(this.props.location.search).get("report") || "";
					if (["true", "1"].includes(l) && this.props.openReportFlow(this.props.postId, r), a && !a.isSponsored && !a.isRemoved && a.belongsTo.type !== z.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(a.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (r ? (this.scrollContainerEl = document.getElementById(K.e), d && (t || s || this.hasCommentAdRef()) && a && a.numComments ? this.scrollToComments() : y.a.write(() => {
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
							const s = null === (e = Object(it.b)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(de.t)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), y.a.read(() => {
							const e = [Object(st.a)()];
							this.props.isOverlay || Object(I.d)(I.c.CommentsPage, o, e)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						O.Nb.includes(e) && Object(ct.a)(e)
					}(null == a ? void 0 : a.isNSFW) && c && n && i()
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
						const e = this.props.post && Object(dt.a)(this.props.post);
						this.props.post && this.props.post.numComments ? y.a.read(this.handleScroll) : y.a.write(() => {
							e || Object(v.c)(this.scrollContainerEl, 0), y.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && y.a.write(() => {
							setTimeout(() => {
								Object(v.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = G.b + (this.props.isOverlay ? G.n : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const o = (n = this.props.isOverlay ? document.getElementById(K.e) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								r = Math.abs(o - s),
								i = this.props.isOverlay ? kt : r - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && y.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(v.c)(n, i) : Object(v.c)(document, i)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					var e;
					if (this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0, this.upvotePromptId && clearTimeout(this.upvotePromptId), this.props.isOverlay && this.props.isQualifiedForUpvotePrompt && !this.state.isUpvotePromptTriggered) {
						const e = !0;
						this.props.triggerUpvotePrompt(this.props.postId, e)
					}
					this.props.isCrosspostRecommendationsExperimentEnabled && this.props.closeCrosspostRecommendationsModal(), (null === (e = this.props.post) || void 0 === e ? void 0 : e.isNSFW) && this.props.subredditName && this.props.isBlurredPreview && Object(C.b)()
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
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = Et, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = Et)
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
					y.a.read(() => {
						const e = document.getElementById(K.e);
						if (e) {
							let t, s;
							this.hasCommentAdRef() ? t = this.commentAdRef.offsetTop : this.commentFormRef ? (t = this.commentFormRef.offsetTop - jt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - jt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), y.a.write(() => {
								Object(v.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => y.a.read(this.handleScroll))
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
					y.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: o
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = g.c.end(t);
						n(Object(mt.c)(t, s, e, x.TimerType.InApp, r, o))
					})
				}
				isCommentPermalink() {
					return void 0 !== this.props.commentId
				}
				renderPageError() {
					const {
						contentGateInfo: e,
						currentUserShowNSFW: t,
						isLoggedIn: s,
						isOverlay: n,
						nsfwExperiment: o,
						post: r,
						subredditName: i
					} = this.props, a = !(!r || !r.isNSFW || t), d = o !== te.a.Blurred && a;
					if (!Object(te.g)(o, s, d)) return null;
					const c = Object(nt.a)(e, a, i);
					if (!c) return null;
					let l = m.a.createElement(wt, c);
					return n && (l = m.a.createElement(pt.a, {
						content: l
					})), l
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
						isBlurredPreview: d,
						isCountAnimShadowTestEnabled: c,
						isCrawler: l,
						isCrosspostRecommendationsExperimentEnabled: p,
						isD2xSeoDisableLightboxEnabled: u,
						isEligibleForCommentTruncation: b,
						isModWithUserNotesPermissions: h,
						isLoggedIn: g,
						isNightmodeOn: x,
						isOverlay: C,
						post: v,
						postId: y,
						postSEOV2IdCardVariant: E,
						profileCollectionsEnabled: j,
						sendEvent: k,
						shouldShowNsfwSignupUpsell: I,
						sort: P,
						subredditName: w,
						subredditOrProfile: _
					} = this.props;
					if ((null == v ? void 0 : v.isNSFW) && w && I) return m.a.createElement(q.a, {
						contentTitle: Object(at.c)(w)
					});
					const S = Object(ve.f)(E);
					if (!v) {
						if (t) return m.a.createElement(Re.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === O.o ? m.a.createElement(wt, {
							contentGateType: ht.a.PostBlockedForLegalReason
						}) : m.a.createElement(Re.d, {
							postId: y,
							commentId: r,
							apiError: e,
							sort: P
						}) : m.a.createElement(Re.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const N = this.isCommentPermalink(),
						L = v.belongsTo.type === z.a.PROFILE,
						T = Object(dt.a)(v) && (!L || j),
						M = !g,
						R = _ && _.isQuarantined,
						F = !b && !this.state.allCommentsRendered && !l,
						A = p && s;
					return vt.input.channel.postID = y, m.a.createElement(Bt, {
						closeLocation: o,
						commentsPageKey: i,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isD2xSeoDisableLightboxEnabled: u,
						isLoggedIn: g,
						isOverlay: C,
						isSwapVariant: S,
						post: v,
						shouldBlurHeaderImage: d && !g && v.isNSFW,
						subredditOrProfile: _,
						shouldFitPageToContent: M,
						isCollectionLayout: T
					}, m.a.createElement(ze.a, {
						postId: y,
						isNightMode: x,
						isOverlay: C,
						commentId: r
					}), !C && m.a.createElement(Xe.a, {
						post: v
					}), R && m.a.createElement(Ye.a, {
						subredditName: _.name
					}), m.a.createElement(Qe.a, null), m.a.createElement("div", {
						className: Object(f.a)(ft.a.PageContentWrapper, {
							[ft.a.LargePageContent]: T,
							[ft.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, T && m.a.createElement(Pt, {
						isOverlay: C,
						isNightmodeOn: x,
						postId: y
					}), m.a.createElement(yt, {
						condition: T,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: ft.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Je.c, {
						isCommentPermalink: N,
						isOverlay: C,
						isModWithUserNotesPermissions: h,
						postId: y,
						redditStyle: C,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: k,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: c,
						isCrosspostRecommendationsExperimentEnabled: p
					}), this.props.canViewCreatorStats && !R && this.props.isCreatorStatsEnabled && m.a.createElement(Ve.a, {
						post: v,
						subreddit: _
					}), this.state.commentNativeAdId && m.a.createElement("div", {
						ref: this.setCommentAdRef
					}, m.a.createElement(D.a, {
						key: `event-post-id-${v.id}`,
						isOverlay: C,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), _ && !Object(ce.h)(_) && m.a.createElement(H.a, {
						awaitAllCommentsRendered: F,
						contentContainerRef: this.state.layoutRef,
						isOverlay: C,
						post: v,
						subredditOrProfile: _
					}), A && m.a.createElement(U.a, {
						ignoreDefaultFocus: !0,
						onCloseModal: n,
						post: v,
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
						isCommentsListTruncated: u,
						isEligibleForCommentTruncation: b,
						isLoggedIn: g,
						isOverlay: x,
						location: C,
						onOtherDiscussions: O,
						openLoginModal: v,
						openRegisterModal: y,
						origin: E,
						post: j,
						postId: I,
						replyComment: P,
						sendEvent: w,
						sort: S,
						subredditAboutInfo: N,
						subredditOrProfile: L,
						isTrueblockPCBlockeeEnabled: T
					} = this.props;
					if (!j) return null;
					const M = this.isCommentPermalink(),
						R = [],
						F = j.isLocked && !s,
						A = !(M || j.isArchived || N && N.userIsBanned || j.authorIsBlocked && l || j.unrepliableReason && T);
					if (F) R.push(m.a.createElement(Ge.a, {
						key: "commentThreadBanner",
						subredditOrProfile: L
					}));
					else if (j.isArchived) R.push(m.a.createElement(qe.a, {
						key: "commentThreadBanner"
					}));
					else if (A && !p && !O)
						if (g) {
							const e = Object(k.a)(h.c.replyToPost, I);
							R.push(m.a.createElement(Le.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: h.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: I,
								submitAction: (t, s) => {
									let {
										validate: n,
										...o
									} = t;
									return n ? _.u(I, r, e, o, s) : _.o(I, r, e, o, s)
								},
								submitButtonText: o.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else R.push(m.a.createElement(Te.a, {
							key: "loggedOutCommentForm",
							location: C,
							openLoginModal: v,
							openRegisterModal: y,
							origin: E
						}));
					if (j.contestMode && R.push(m.a.createElement(Ke.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), p || O || (this.props.isSubredditDiscoveryCrosspostEnabled ? R.push(m.a.createElement(gt.a, {
							commentId: n,
							commentsPageKey: r,
							isOverlay: x,
							key: "commentNavigation",
							postId: I
						}), m.a.createElement(Be.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: x,
							key: "commentSort",
							location: C,
							postId: I,
							sort: S,
							suggestedSort: j.suggestedSort
						})) : R.push(m.a.createElement(Be.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: x,
							key: "commentSort",
							location: C,
							postId: I,
							sort: S,
							suggestedSort: j.suggestedSort
						}), m.a.createElement(gt.a, {
							commentId: n,
							commentsPageKey: r,
							isOverlay: x,
							key: "commentNavigation",
							postId: I
						}))), R.push(m.a.createElement($e.a, {
							postId: I
						})), !t || d || p || O)
						if (!e || d || O)
							if (O) R.push(m.a.createElement(It, {
								commentSort: S,
								key: "otherDiscussions",
								postId: I,
								isOverlay: x,
								postPermalink: j.permalink
							}));
							else if (p) {
						if (L && L.id) {
							const e = P ? Object(k.a)(h.c.replyToComment, P.id) : Object(k.a)(h.c.replyToPost, I),
								s = _t({
									postId: I,
									commentId: n,
									commentsPageKey: r
								});
							R.push(m.a.createElement(Fe.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !i && t,
								key: "commentsChat",
								postId: I,
								renderedInOverlay: x,
								subredditId: L.id
							}, t => {
								let {
									scrollToBottom: n
								} = t;
								return g ? m.a.createElement(Ae.a, {
									key: "chatCommentsForm",
									postId: I,
									replyComment: P,
									draftKey: e,
									commentsPageKey: s,
									isEditing: !1,
									scrollToBottom: n,
									sendEvent: w
								}) : m.a.createElement(Te.a, {
									key: "loggedOutCommentForm",
									className: ft.a.ChatLoggedOutForm,
									location: C,
									openLoginModal: v,
									openRegisterModal: y,
									origin: E
								})
							}))
						}
					} else R.push(m.a.createElement("div", {
						className: Object(f.a)(ft.a.CommentsPaneWrapper, {
							[ft.a.mIsInOverlay]: x
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(Ue.a, Ot({}, this.props, {
						shouldTruncateComments: b && u,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: j.numComments,
						onClick: this.handleContentClick
					}), m.a.createElement(Me.a, {
						commentId: n,
						commentsPageKey: r,
						postId: I,
						onAllCommentsRendered: this.onAllCommentsRendered,
						renderedInOverlay: x
					})))), e && d ? R.push(m.a.createElement(Re.e, {
						key: "commentsErrorState",
						postId: I,
						commentId: n,
						sort: S,
						apiError: e
					})) : !i && t && R.push(m.a.createElement(Re.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					else R.push(m.a.createElement(Re.e, {
						key: "errorState",
						postId: I,
						commentId: n,
						sort: S,
						apiError: e
					}));
					else this.didRenderLoading = !0, R.push(m.a.createElement(Re.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					return m.a.createElement($.a.Provider, {
						value: this.sendEventWithName
					}, R)
				}
			}
			const Ft = Nt(Object(X.b)(Mt(Object(tt.c)(Rt)))),
				At = E.a.wrapped(De.a, "DetailsPageSidebar", ft.a),
				Bt = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: i,
						isD2xSeoDisableLightboxEnabled: a,
						isLoggedIn: d,
						isOverlay: c,
						isSwapVariant: l,
						post: p,
						shouldBlurHeaderImage: u,
						shouldFitPageToContent: b,
						subredditOrProfile: h
					} = e;
					if (!a && !d && !c) return m.a.createElement(ut.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: p,
						sidebar: h && m.a.createElement(De.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: p,
							subredditName: h.name,
							subredditId: h.id
						})
					});
					if (c) return m.a.createElement(pt.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						sidebar: h && m.a.createElement(De.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: p,
							subredditName: h.name,
							subredditId: h.id
						})
					});
					const g = i ? G.i : J.a;
					return m.a.createElement(bt.a, {
						containerRef: n,
						maxWidth: G.i,
						fitPageToContent: b,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: l,
						isCollectionLayout: i,
						navBar: h && m.a.Children.toArray([m.a.createElement(We.a, {
							key: h.name,
							disableFullscreen: !0,
							headerText: h.name,
							maxWidth: g,
							prefixedHeaderText: h.displayText,
							shouldBlurHeaderImage: u,
							subredditOrProfile: h,
							url: h.url
						}), !Object(ce.h)(h) && m.a.createElement(et.a, {
							disableFullscreen: !0,
							homeUrl: h.url,
							maxWidth: g,
							subredditId: h.id
						})]),
						sidebar: h && m.a.createElement(At, {
							commentsPageKey: s,
							post: p,
							subredditName: h.name,
							subredditId: h.id
						})
					})
				};
			t.default = Object(xt.a)(St)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
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
					return t && Object(b.t)(t)
				},
				g = (e, t, s) => {
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
				x = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = h(t);
						return Object(p.a)(e, s)
					}
				}),
				C = Object(a.b)(x);

			function f(e) {
				return C(t => {
					const {
						hasSortParam: s,
						sortToUse: n
					} = t.commentsPageSort, o = g(t, s, n), r = Object(m.d)(t.match.path), a = {
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
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.R, i.Q, (e, t) => e || t),
				d = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: o.J
				}), e => e === o.R.Enabled)
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.v
				}) === n.y.Enabled,
				i = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.Qc
				}) === n.rd
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
					experimentName: n.Mc
				});
				return !(!t || Object(n.Lf)(t))
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
				experimentName: n.Re
			}) === n.Ye.Enabled
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
						[o.qc.Bottom_cell_dismissible]: e,
						[o.qc.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.qc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(o.xb, !0),
				m = c(o.yb, !0),
				p = c(o.zb, !0),
				u = c(o.xb, !1),
				b = c(o.yb, !1),
				h = c(o.zb, !1)
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
						experimentName: n.gf
					}) === n.rd
				},
				a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.ff
					}) === n.rd
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
						experimentName: n.Ff
					}) === n.rd
				},
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.Gf
					}) === n.rd
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.Ef
					});
					return t === n.wf.TypingIndicators || t === n.wf.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: n.Ef
					});
					return (null == t ? void 0 : t.variant) === n.wf.IndicatorsPlusCTA
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
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "d", (function() {
				return v
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/featureFlags/index.ts"),
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
				p = Object(n.a)((e, t) => {
					const s = u(e, t);
					if (!s) return m;
					const n = Object(i.X)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : m
				}),
				u = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.T)(e, {
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
				g = Object(n.a)((e, t) => {
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
				x = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				C = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				f = e => e.focusedVerticals.category,
				O = e => e.focusedVerticals.lastLoadedEnv,
				v = e => {
					const t = Object(a.Q)(e),
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
					return Boolean(t) && !Object(o.Lf)(t)
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
			}, i.U, i.G, a.Q, a.R, r.g, (e, t, s, n, o, r, i) => {
				if (!n) return !1;
				const a = !(!s || Object(d.h)(s)),
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
					experimentName: o.Fe,
					experimentEligibilitySelector: r.a
				}),
				d = (e, t) => t === o.Ne.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
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
			e.exports = JSON.parse('{"id":"e8d1f627ece2"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"0a569f10c6e4"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"ca3ae664c537"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage.80fc224477300cee07f6.js.map