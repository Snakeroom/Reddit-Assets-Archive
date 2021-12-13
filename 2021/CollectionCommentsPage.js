// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.4d25f8224ef1b61fcf0a.js
// Retrieved at 12/13/2021, 1:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage"], {
		"./src/lib/makeCollectionCommentsPageKey/index.ts": function(t, e, s) {
			"use strict";
			e.a = (t, e, s, o = {}) => {
				let n = `collectionCommentsPage--[collection:'${t}']`;
				return e && (n += `--[post:'${e}']`), s && (n += `--[rootComment:'${s}']`), o && (o.sort && o.hasSortParam && (n += `--[sort:'${o.sort}']`), o.context && (n += `--[context:${o.context}]`), o.depth && (n += `--[depth:${o.depth}]`)), n
			}
		},
		"./src/reddit/actions/pages/collectionCommentsPage.ts": function(t, e, s) {
			"use strict";
			s.r(e), s.d(e, "collectionCommentsPagePending", (function() {
				return J
			})), s.d(e, "collectionCommentsPageLoaded", (function() {
				return B
			})), s.d(e, "collectionCommentsPageFailed", (function() {
				return V
			})), s.d(e, "collectionCommentsPageRequested", (function() {
				return z
			})), s.d(e, "collectionCommentsPageLoadedFull", (function() {
				return Q
			})), s.d(e, "fullCollectionCommentsPageDataRequested", (function() {
				return Y
			})), s.d(e, "collectionCommentsPageDataRequested", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				r = s("./src/lib/pageTitle.ts"),
				d = s("./src/lib/truncateText/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/economics/helpers/async.ts"),
				l = s("./src/reddit/actions/pages/subreddit.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				b = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/profile/index.ts"),
				u = s("./src/reddit/actions/shortcuts/active.ts"),
				O = s("./src/reddit/actions/subreddit.ts"),
				j = s("./src/reddit/actions/toaster.ts"),
				g = s("./src/reddit/constants/adEvents.ts"),
				C = s("./src/reddit/constants/parameters.ts"),
				y = s("./src/reddit/constants/postCollection.ts"),
				P = s("./src/reddit/constants/posts.ts"),
				I = s("./src/reddit/endpoints/governance/posts.ts"),
				f = s("./src/config.ts"),
				x = s("./src/lib/makeApiRequest/index.ts"),
				h = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function _(t, e, s) {
				const o = `${f.a.gatewayUrl}/desktopapi/v1/collection_postcomments`;
				return s ? Object(h.a)(`${o}/${t}/${e}/${s}`) : e ? Object(h.a)(`${o}/${t}/${e}`) : Object(h.a)(`${o}/${t}`)
			}
			var T = (t, e, s, n, c) => Object(x.a)(t, {
					data: c,
					endpoint: _(e, s, n),
					method: o.jb.GET
				}),
				k = s("./src/reddit/endpoints/page/subredditPage.ts"),
				E = s("./src/reddit/helpers/canonicalUrls.ts"),
				M = s("./src/reddit/helpers/commentList/index.ts"),
				S = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				w = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				N = s("./src/reddit/helpers/trackers/screenview.ts"),
				v = s("./src/reddit/models/Comment/index.ts"),
				L = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				A = s("./src/reddit/selectors/platform.ts"),
				R = s("./src/reddit/selectors/postCollection.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/subreddit.ts"),
				q = s("./src/reddit/actions/pages/comments.ts"),
				H = s("./src/reddit/actions/pages/constants.ts"),
				K = s("./src/lib/initializeClient/installReducer.ts"),
				F = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(K.a)({
				pages: {
					comments: F.a
				}
			});
			const J = Object(n.a)(H.d),
				B = Object(n.a)(H.b),
				V = Object(n.a)(H.a),
				z = t => async (e, s) => {
					const {
						collectionId: n,
						partialPostId: c,
						partialCommentId: i,
						subredditName: a = "",
						routePrefix: l
					} = t.params, j = c ? Object(L.t)(c) : "", g = i && Object(v.h)(i), {
						queryParams: I
					} = t, f = s(), {
						instanceId: x
					} = I, h = {
						id: n,
						type: P.b[l]
					}, _ = P.b[l] === P.a.PROFILE, {
						hasSortParam: T,
						sortToUse: k
					} = Object(S.a)(f, j), M = ["context", "depth", "limit", C.f].reduce((t, e) => {
						const s = parseInt(I[e]);
						return isNaN(s) || (t[e] = s), t
					}, {
						subredditName: a,
						hasSortParam: T,
						instanceId: x
					});
					T && (M.sort = k), e(b.r(j)), await Promise.all([_ ? e(p.d(a)) : Promise.resolve(), e(G(n, j, g, M))]);
					const w = ((t, e) => {
						const s = Object(R.q)(t, {
							collectionId: e.id
						});
						if (!s) return "";
						const n = Object(U.J)(t, {
								identifier: e
							}),
							c = Object(r.c)(s.title, n.name).toString();
						return Object(d.a)(c, y.c, o.ib)
					})(s(), h) || Object(r.e)();
					e(m.m({
						title: w
					}));
					const $ = s().posts.models[j];
					if ($) {
						const o = Object(U.J)(s(), {
							identifier: $.belongsTo
						});
						if (!$.isSponsored)
							if ($.belongsTo.type === P.a.SUBREDDIT) {
								!!Object(U.Q)(f, {
									subredditId: $.belongsTo.id
								}) || await e(O.o(o.name))
							} else await e(p.d(o.name));
						const n = s().posts.instances[j] ? t.queryParams.instanceId : $.postId;
						e(Object(u.b)(n))
					}
					_ ? Object(E.d)(s(), e, t) : Object(E.e)(s(), e, t), Object(N.v)(s(), !0)
				}, Q = Object(n.a)(H.c), Y = (t, e, s, o) => async (n, r, d) => {
					const i = Object(c.a)(t, e, s, o),
						a = r();
					e = e || Object(R.p)(a, {
						collectionId: t
					});
					const l = await T(d.apiContext(), t, e, s, o);
					if (n(Object(m.n)(l.status)), l.ok) {
						if (!(e = e || l.body.collections[t].primaryPostId)) return;
						const s = Object(M.a)(l.body, e, a);
						n(B({
							key: i,
							collectionId: t,
							meta: a.meta,
							postId: e,
							shouldCollapse: s,
							...l.body
						}));
						const o = a.user.prefs.commentMode;
						n(Q({
							commentMode: o,
							key: i,
							postId: e
						}))
					} else n(V({
						error: l.error,
						key: i,
						...l.body
					}))
				}, G = (t, e, s, o, n) => async (r, d, p) => {
					const u = Object(c.a)(t, e, s, o),
						O = d();
					e = e || Object(R.p)(O, {
						collectionId: t
					});
					const {
						subredditName: C
					} = o, y = O.pages.comments.keyToHeadCommentId.hasOwnProperty(u), P = O.pages.comments.api.fullyLoaded[u], f = O.pages.comments.api.error[u];
					if (O.pages.comments.api.pending[u] || y && !f) {
						if (y && !O.sidebarPromotedPosts.firstFetch) {
							const t = Object(A.i)(O) ? $.a.COMMENTS_OVERLAY : $.a.COMMENTS;
							window.addEventListener("load", () => {
								r(Object(i.b)(t))
							})
						}
						return void(P || n || r(Y(t, e, s, o)))
					}
					const x = O.user.prefs.commentMode;
					r(J({
						key: u,
						collectionId: t,
						commentMode: x,
						postId: e
					}));
					const h = {
						...o
					}; {
						const t = e && Object(D.H)(d(), {
							postId: e
						});
						t && t.numComments && t.numComments > q.MIN_NUM_COMMENTS_TO_TRUNCATE && (h.truncate = q.NUM_COMMENTS_TRUNCATE)
					}
					let _, E = await Object(w.a)("comments", () => T(p.apiContext(), t, e, s, h));
					if (r(Object(m.n)(E.status)), E.ok && (e = e || E.body.collections[t].primaryPostId)) {
						const t = Object.keys(E.body.posts).filter(t => !!E.body.posts[t].isMeta),
							s = Object(D.H)(d(), {
								postId: e
							});
						if (t.length) {
							const e = await Object(I.a)(p.apiContext(), s.belongsTo.id, t);
							e.ok && (_ = e.body)
						}
					}
					if (!n) {
						const n = e ? Object(D.H)(d(), {
							postId: e
						}) : null;
						n && E.body.comments && Object.keys(E.body.comments).length < n.numComments ? r(Y(t, e, s, o)) : E.ok && r(Q({
							commentMode: x,
							key: u,
							postId: e
						}));
						const c = Object(A.i)(O) ? $.a.COMMENTS_OVERLAY : $.a.COMMENTS;
						r(Object(i.b)(c))
					}
					if (E.ok) {
						if (!e) return;
						const t = Object(M.a)(E.body, e, O);
						r(Object(q.commentsPageLoaded)({
							commentMode: x,
							key: u,
							postId: e,
							meta: O.meta,
							governance: _,
							shouldCollapse: t,
							...E.body
						})), r(j.g(u));
						const s = Object(D.H)(O, {
							postId: e
						});
						s && r(b.z(s, g.a.CommentsView)), !n && s && "subreddit" === s.belongsTo.type && E.body.comments && await r(Object(a.a)({
							commentIds: Object.keys(E.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else C && (r(Object(l.subredditPending)({
						key: u
					})), E = await Object(w.a)("subreddit", () => Object(k.a)(p.apiContext(), C, {})), r(Object(m.n)(E.status))), r(Object(l.handleSubredditPageApiError)(E, C)), r(V({
						error: E.error,
						key: u,
						...E.body
					}))
				}
		},
		"./src/reddit/pages/CollectionCommentsPage/index.tsx": function(t, e, s) {
			"use strict";
			s.r(e);
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
				c = s("./node_modules/lodash/get.js"),
				r = s.n(c),
				d = s("./node_modules/react/index.js"),
				i = s.n(d),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				b = s("./src/reddit/constants/history.ts"),
				p = s("./src/reddit/contexts/Post/index.tsx"),
				u = s("./src/reddit/helpers/history/index.ts"),
				O = s("./src/reddit/models/Comment/index.ts"),
				j = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/pages/CommentsPage/index.tsx"),
				C = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				y = s("./src/reddit/selectors/postCollection.ts"),
				P = s("./node_modules/reselect/es/index.js");

			function I() {
				return (I = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var s = arguments[e];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (t[o] = s[o])
					}
					return t
				}).apply(this, arguments)
			}
			const f = Object(a.b)(() => Object(P.c)({
				primaryPostId: y.p
			}))(t => {
				const e = t.postId || t.primaryPostId;
				return e ? i.a.createElement(p.a, {
					postId: e
				}, i.a.createElement(g.CommentsPage, I({}, t, {
					postId: e
				}))) : null
			});
			e.default = Object(C.a)(t => {
				const {
					state: e
				} = t.location, s = r()(e, b.b.IsOverlay, !1), o = r()(e, b.b.CloseLocation, null), c = r()(e, b.b.ScrollOnLoad, !1);
				c && Object(u.c)(b.b.ScrollOnLoad);
				const d = t.match.params,
					{
						partialCommentId: a,
						partialPostId: p,
						subredditName: g,
						collectionId: C
					} = d,
					y = p ? Object(j.t)(p) : void 0,
					P = a && Object(O.h)(a),
					I = n()([...Object(l.a)(t.location.search)]),
					x = {};
				t.hasSortParam && (x.sort = t.sort, x.hasSortParam = !0);
				const h = Object(m.a)(C, y, P, x);
				return i.a.createElement(f, {
					closeLocation: o,
					collectionId: C,
					commentId: P,
					commentsPageKey: h,
					isOverlay: s,
					location: t.location,
					postId: y,
					instanceId: I.instanceId,
					shouldScrollToComments: c,
					sort: t.sort,
					subredditName: g,
					onOtherDiscussions: !!I.onOtherDiscussions
				})
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage.4d25f8224ef1b61fcf0a.js.map