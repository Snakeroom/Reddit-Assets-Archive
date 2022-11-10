// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.92028e7229546a7631b0.js
// Retrieved at 11/10/2022, 1:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"], {
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(r.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/brcast/dist/brcast.es.js");
			const i = () => "undefined" != typeof document,
				n = () => i() && "visible" === document.visibilityState,
				o = () => ({
					documentInFocus: n()
				}),
				{
					subscribe: d,
					unsubscribe: a,
					setState: c
				} = Object(r.a)(o()),
				u = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				l = () => c(o());
			(() => {
				const e = (() => {
					if (!i()) return;
					const e = Object.keys(u).find(e => e in document);
					return e ? u[e] : void 0
				})();
				e && document.addEventListener(e, l)
			})(), t.a = {
				isDocumentHidden: () => !n(),
				isDocumentVisible: n,
				subscribe: d,
				unsubscribe: a
			}
		},
		"./src/reddit/actions/contentControls/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return o
			}));
			const r = "CONTENT_CONTROLS_FAILED",
				i = "CONTENT_CONTROLS_LOADED",
				n = "CONTENT_CONTROLS_PENDING",
				o = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return D
			})), s.d(t, "b", (function() {
				return v
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/camelCase.js"),
				n = s.n(i),
				o = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/sentry/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/reddit/models/HatefulContentFilters/index.ts"),
				b = s("./src/redditGQL/operations/FetchContentControls.json");
			const p = e => {
				switch (e) {
					case "LENIENT":
						return l.a.Lenient;
					case "MODERATE":
						return l.a.Moderate;
					case "STRICT":
						return l.a.Strict;
					default:
						return l.a.Off
				}
			};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var m = s("./node_modules/lodash/isEmpty.js"),
				f = s.n(m),
				O = s("./src/redditGQL/operations/UpdateHatefulContentFilters.json"),
				_ = s("./src/redditGQL/operations/UpdatePostRequirements.json"),
				h = s("./src/reddit/endpoints/subreddit/about.ts"),
				T = s("./src/reddit/featureFlags/index.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				P = s("./src/reddit/selectors/contentControls.ts"),
				g = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/actions/contentControls/constants.ts");
			const j = Object(d.a)(I.b),
				y = Object(d.a)(I.c),
				S = Object(d.a)(I.a),
				D = e => async (t, s, r) => {
					let {
						gqlContext: i
					} = r;
					const n = {
							subredditName: e.toLowerCase()
						},
						d = T.d.hatefulContentFiltersEnabled(s());
					if (Object(P.a)(s(), n)) return;
					t(y(n));
					let c = Object(C.I)(s(), e);
					if (!c) {
						const s = await Object(h.a)(i(), e, !1);
						if (s.ok) {
							c = s.body.data.subreddit.id
						}
						if (!c) {
							const e = s.error || {
								type: o.L.NOT_FOUND_ERROR
							};
							return void t(S({
								...n,
								error: e
							}))
						}
					}
					const l = Object(g.c)(s(), {
						subredditId: c
					});
					let m = null;
					const f = await ((e, t) => Object(u.a)(e, {
						...b,
						variables: t
					}).then(e => {
						var t, s;
						if (e.ok) {
							const r = null === (s = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === s ? void 0 : s.subreddit;
							return {
								...e,
								body: {
									data: {
										subreddit: {
											hatefulContentFilters: {
												hatefulContentThresholdAbuse: p(null == r ? void 0 : r.hatefulContentThresholdAbuse),
												hatefulContentThresholdIdentity: p(null == r ? void 0 : r.hatefulContentThresholdIdentity),
												permittedTerms: (null == r ? void 0 : r.hatefulContentPermittedTerms) || []
											},
											postRequirements: null == r ? void 0 : r.postRequirements
										}
									}
								}
							}
						}
						return e
					}))(i(), {
						subredditId: c,
						includeHatefulFilters: l && d
					});
					if (f.ok) {
						const e = f.body;
						m = e.data.subreddit && e.data.subreddit
					}
					if (m) t(j({
						...n,
						...m
					}));
					else {
						const s = f.error || {
							type: o.L.UNKNOWN_ERROR
						};
						t(S({
							...n,
							error: s
						})), a.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: f.body,
								responseOk: f.ok
							}), a.c.captureMessage("Missing post requirements data!")
						})
					}
				}, A = Object(d.a)(I.d), v = (e, t) => async (s, i, n) => {
					let {
						gqlContext: o
					} = n;
					const d = e.toLowerCase(),
						a = Object(C.I)(i(), e);
					if (!a) return {
						success: !1
					};
					const l = await ((e, t, s) => {
						const r = [Promise.resolve(null), Promise.resolve(null)];
						if (s.postRequirements && !f()(s.postRequirements)) {
							const i = {
								subredditId: t,
								...s.postRequirements
							};
							r[0] = Object(u.a)(e, {
								..._,
								variables: {
									input: i
								}
							})
						}
						if (s.hatefulContentFilters && !f()(s.hatefulContentFilters)) {
							const i = {
									subredditId: t,
									hatefulContentThresholdAbuse: s.hatefulContentFilters.hatefulContentThresholdAbuse,
									hatefulContentThresholdIdentity: s.hatefulContentFilters.hatefulContentThresholdIdentity
								},
								n = !(!i.hatefulContentThresholdAbuse && !i.hatefulContentThresholdIdentity),
								o = {
									subredditId: t,
									permittedTerms: s.hatefulContentFilters.permittedTerms
								},
								d = !!o.permittedTerms;
							r[1] = Object(u.a)(e, {
								...O,
								variables: {
									includeThresholds: n,
									includePermittedTerms: d,
									thresholdInput: i,
									permittedTermsInput: o
								}
							})
						}
						return Promise.all(r).then(e => {
							let [t, s] = e, r = !0, i = [];
							if (t) {
								const e = t.body,
									s = e.data.updatePostRequirements.fieldErrors;
								r = r && e.data.updatePostRequirements.ok, s && (i = i.concat(s))
							}
							if (s) {
								const {
									data: {
										updateHatefulContentSettings: e,
										updateSubredditSettings: t
									}
								} = s.body;
								t && (r = r && t.ok), e && (r = r && e.ok);
								const n = null == t ? void 0 : t.fieldErrors,
									o = null == e ? void 0 : e.fieldErrors;
								n && (i = i.concat(n)), o && (i = i.concat(o))
							}
							return {
								ok: r,
								fieldErrors: i.length ? i : null
							}
						})
					})(o(), a, t);
					if (l.ok) return s(A({
						subredditName: d,
						partialUpdates: t
					})), s(Object(c.f)({
						kind: E.b.SuccessCommunity,
						text: r.fbt._("Subreddit content controls updated successfully", null, {
							hk: "1n6QIQ"
						})
					})), {
						success: !0
					}; {
						const i = R(l.fieldErrors);
						return s(Object(c.f)({
							kind: E.b.Error,
							text: r.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: r.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: v(e, t)
						})), {
							success: !1,
							errors: i || void 0
						}
					}
				}, R = e => e && e.map(e => ({
					...e,
					field: n()(e.field)
				}))
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				n = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				o = s("./src/reddit/selectors/user.ts");
			const d = "MOD_PERMS__REQUEST_LOADED",
				a = (Object(r.a)("MOD_PERMS__REQUEST_PENDING"), Object(r.a)(d), Object(r.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(o.l)(t());
					if (s) {
						const t = Object(n.e)(s);
						await e(Object(i.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return n
			}));
			const r = "PAGE__MULTIREDDIT_FEED_PENDING",
				i = "PAGE__MULTIREDDIT_FEED_LOADED",
				n = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PAGE_PENDING", (function() {
				return w
			})), s.d(t, "PAGE_LOADED", (function() {
				return k
			})), s.d(t, "PAGE_FAILED", (function() {
				return L
			})), s.d(t, "pagePending", (function() {
				return F
			})), s.d(t, "pageLoaded", (function() {
				return M
			})), s.d(t, "pageFailed", (function() {
				return G
			})), s.d(t, "postCreationPageDataRequested", (function() {
				return U
			})), s.d(t, "postCreationPageRequested", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./src/lib/filterQueryParams/index.ts"),
				n = s("./src/lib/isFakeSubreddit/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makePostCreationPageKey/index.ts"),
				a = s("./src/lib/pageTitle/index.ts"),
				c = s("./src/reddit/actions/contentControls/index.ts"),
				u = s("./src/reddit/actions/economics/helpers/async.ts"),
				l = s("./src/reddit/actions/externalAccount.ts"),
				b = s("./src/reddit/actions/gold/powerups.ts"),
				p = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/actions/postCreation/general.ts"),
				O = s("./src/reddit/actions/profile/index.ts"),
				_ = s("./src/reddit/actions/subreddit.ts"),
				h = s("./src/reddit/actions/subredditDuplicates.ts"),
				T = s("./src/config.ts"),
				E = s("./src/lib/constants/index.ts"),
				P = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				C = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				I = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				j = s("./src/reddit/models/User/index.ts"),
				y = s("./src/reddit/selectors/contentControls.ts"),
				S = s("./src/reddit/selectors/postCollection.ts"),
				D = s("./src/reddit/selectors/postCreations.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/profile.ts"),
				R = s("./src/reddit/selectors/subreddit.ts"),
				N = s("./src/reddit/selectors/user.ts");
			const x = e => {
					const t = e.platform.currentPage;
					let s = "Reddit";
					if (t && t.urlParams.subredditName) {
						const {
							subredditName: r
						} = t.urlParams, i = Object(R.C)(e, {
							subredditName: r
						});
						i && (s = i.name)
					}
					return Object(a.q)(s)
				},
				w = "POST_CREATION__PAGE_PENDING",
				k = "POST_CREATION__PAGE_LOADED",
				L = "POST_CREATION__PAGE_FAILED",
				F = Object(o.a)(w),
				M = Object(o.a)(k),
				G = Object(o.a)(L),
				V = () => async (e, t) => {
					const s = t(),
						r = Object(D.a)(s);
					r !== Object(D.pb)(s) && e(Object(f.g)({
						submissionType: r
					}))
				}, U = e => async (t, s, r) => {
					const {
						collectionId: i,
						profileName: o,
						subredditName: a
					} = e, u = Object(d.a)(e), p = s(), m = p.creations.api.page.pending[u], f = p.creations.api.page.fetched[u], h = p.creations.api.page.error[u];
					if (m) return;
					if (f && !h) return void t(V());
					const C = [];
					t(F({
						key: u
					}));
					let S = a;
					!a && o && (S = `u_${o}`), C.push(((e, t) => Object(P.a)(e, {
						method: E.ob.GET,
						endpoint: Object(g.a)(`${T.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(r.apiContext(), {
						subredditName: S,
						collectionId: i
					})), o && (C.push(t(O.d(o))), C.push(t(O.b(o))));
					const [D] = await Object(I.a)("postCreation", () => Promise.all(C));
					if (D.ok) {
						const e = D.body,
							{
								posts: r = {},
								subredditAboutInfo: i
							} = e;
						if (t(M({
								key: u,
								meta: p.meta,
								...e,
								posts: r
							})), !Object(N.R)(s())) return;
						if (i) {
							const e = Object.keys(i)[0];
							await t(Object(b.e)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(V());
						const o = [];
						o.push(t(l.o()));
						const d = Object(N.l)(s());
						if (d && d.hasUserProfile && o.push(t(O.d(Object(j.e)(d)))), a && !Object(n.a)(a)) {
							o.push(t(_.o(a))), !!Object(y.b)(s(), {
								subredditName: a
							}) || o.push(t(Object(c.a)(a)))
						}
						await Promise.all(o)
					} else t(G({
						error: D.error,
						key: u
					}))
				}, q = e => async (t, s) => {
					const {
						subredditName: n,
						profileName: o
					} = e.params, d = e.queryParams, a = d.collection;
					if (await t(U({
							collectionId: a,
							profileName: o,
							subredditName: n
						})), !Object(N.R)(s())) return void Object(C.a)(t, s());
					let c;
					if (n ? (c = Object(R.C)(s(), {
							subredditName: n
						}), await t(Object(u.a)({
							subredditName: n
						}))) : o && (c = Object(v.k)(s(), {
							profileName: o
						})), d.source_id) await t(((e, t) => async (s, r) => {
						const {
							subredditName: i,
							profileName: n
						} = e, o = [];
						let d;
						i ? d = Object(R.I)(r(), i) : n && (d = Object(N.nb)(r(), {
							userName: n
						})), d && o.push(s(Object(h.b)(d, t))), o.push(s(Object(m.Q)(t))), await Promise.all(o);
						const a = Object(A.f)(r(), {
							postId: t
						});
						s(Object(f.m)({
							postId: t,
							postTitle: a ? a.title : ""
						}))
					})(e.params, d.source_id));
					else if (a) {
						const n = Object(S.q)(s(), {
							collectionId: a
						});
						c && n && n.subredditId === c.id || t(Object(r.c)(Object(i.a)(e.url, ["collection"])))
					}
					t(p.m({
						title: x(s())
					}))
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PAGE_PENDING", (function() {
				return p
			})), s.d(t, "PAGE_LOADED", (function() {
				return m
			})), s.d(t, "PAGE_FAILED", (function() {
				return f
			})), s.d(t, "pagePending", (function() {
				return O
			})), s.d(t, "pageLoaded", (function() {
				return _
			})), s.d(t, "pageFailed", (function() {
				return h
			})), s.d(t, "postDraftPageDataRequested", (function() {
				return T
			})), s.d(t, "postDraftRequested", (function() {
				return E
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makePostDraftPageKey/index.ts"),
				n = s("./src/reddit/actions/profile/index.ts"),
				o = s("./src/config.ts"),
				d = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				b = s("./src/reddit/helpers/timeApiRoute/index.ts");
			const p = "POST_DRAFT__PAGE_PENDING",
				m = "POST_DRAFT__PAGE_LOADED",
				f = "POST_DRAFT__PAGE_FAILED",
				O = Object(r.a)(p),
				_ = Object(r.a)(m),
				h = Object(r.a)(f),
				T = e => async (t, s, r) => {
					const {
						draftId: p,
						profileName: m
					} = e, f = Object(i.a)(e), O = s(), T = O.creations.api.page.pending[f], E = O.creations.api.page.fetched[f], P = O.creations.api.page.error[f];
					if (T || E && !P || !p) return;
					t(n.d(m));
					const g = await Object(b.a)("postDraft", () => ((e, t, s) => Object(a.a)(e, {
						endpoint: Object(c.a)(Object(u.a)(`${o.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${s}/${t}`)),
						method: d.ob.GET
					}))(r.apiContext(), p, m));
					if (g.ok) {
						const e = g.body;
						e.drafts[p].kind = Object(l.b)(e.drafts[p].kind), t(_({
							...e,
							key: f
						}))
					} else t(h({
						error: g.error,
						key: f
					}))
				}, E = e => async (t, s, r) => {
					await t(T(e.params))
				}
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PROFILE_POSTS_PENDING", (function() {
				return se
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return re
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return ie
			})), s.d(t, "profilePostsPending", (function() {
				return ne
			})), s.d(t, "profilePostsLoaded", (function() {
				return oe
			})), s.d(t, "profilePostsFailed", (function() {
				return de
			})), s.d(t, "profilePostsRequested", (function() {
				return ae
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return ce
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return ue
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return le
			})), s.d(t, "morePostsPending", (function() {
				return be
			})), s.d(t, "morePostsLoaded", (function() {
				return pe
			})), s.d(t, "morePostsFailed", (function() {
				return me
			})), s.d(t, "morePostsRequested", (function() {
				return fe
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/pick.js"),
				i = s.n(r),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/lib/safeGet/index.ts"),
				a = s("./src/reddit/actions/contentGate.ts"),
				c = s("./src/reddit/actions/externalAccount.ts"),
				u = s("./src/reddit/actions/moderatingSubreddits.ts"),
				l = s("./src/reddit/actions/pages/profileShared.ts"),
				b = s("./src/reddit/actions/pinnedPost.ts"),
				p = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/actions/profile/index.ts"),
				f = s("./src/reddit/actions/subreddit.ts"),
				O = s("./src/reddit/constants/errors.ts"),
				_ = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				T = s("./src/lib/makeGqlRequest/index.ts"),
				E = s("./src/redditGQL/operations/ProfileFeed.json");
			const P = async (e, t) => await Object(T.a)(e, {
				...E,
				variables: t
			}), g = e => {
				let {
					username: t,
					profileSort: s,
					filter: r,
					loadMoreData: i,
					shouldUseGqlCursor: n
				} = e;
				const o = {
					username: t,
					sort: s.toUpperCase(),
					filter: r
				};
				if (i) {
					const {
						token: e
					} = i;
					o.after = n ? e : btoa(e)
				}
				return o
			};
			var C = s("./src/config.ts"),
				I = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				j = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/makeApiRequest/index.ts"),
				S = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				D = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const A = (e, t, s) => Object(y.a)(e, {
				data: s,
				endpoint: Object(S.a)(Object(I.a)(Object(D.a)(`${C.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: j.ob.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var v = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				R = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				N = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				x = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				w = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				k = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				L = s("./src/reddit/models/Post/index.ts");
			const F = (e, t) => {
				if (!Object(L.l)(t) && !Object(L.n)(t)) return null;
				if (e.posts[t.id]) return t.id;
				const s = Object(x.f)(t),
					{
						id: r
					} = s;
				e.posts[r] = s;
				const {
					crosspostRoot: i
				} = t;
				i && i.type === L.a.Post && i.postInfo && F(e, i.postInfo);
				const {
					authorFlair: n
				} = t;
				if (n) {
					const t = s.belongsTo.id;
					e.authorFlair[t] || (e.authorFlair[t] = {}), e.authorFlair[t][s.author] = Object(R.a)(n)[0]
				}
				if (Object(L.l)(t)) {
					const {
						profile: s
					} = t;
					e.profiles[s.id] || (e.profiles[s.id] = Object(w.a)(s))
				} else if (Object(L.n)(t)) {
					const {
						subreddit: s
					} = t;
					e.subreddits[s.id] || (e.subreddits[s.id] = Object(k.a)(s)), e.postFlair[s.id] || (e.postFlair[s.id] = Object(N.a)(s))
				}
				return r
			};
			var M = s("./src/reddit/models/Comment/index.ts"),
				G = (e, t) => {
					var s, r, i;
					const n = {
							authorFlair: {},
							pinned: [],
							postIds: [],
							posts: {},
							postFlair: {},
							profiles: {},
							subreddits: {},
							token: ""
						},
						o = null === (s = null == e ? void 0 : e.redditorInfoByName) || void 0 === s ? void 0 : s.elements;
					if (!o) return n;
					const {
						edges: d
					} = o;
					for (const {
							node: c
						} of d) {
						if (!c || c.__typename === M.d.Comment) continue;
						const e = F(n, c);
						e && n.postIds.push(e)
					}
					const a = null === (i = null === (r = null == e ? void 0 : e.redditorInfoByName) || void 0 === r ? void 0 : r.profile) || void 0 === i ? void 0 : i.stickyPosts;
					if (a && (n.pinned = a.map(e => e.id)), t) n.token = o.pageInfo.endCursor || "";
					else {
						const {
							postIds: e
						} = n, t = e[e.length - 1];
						t && (n.token = t)
					}
					return n
				},
				V = s("./node_modules/@sentry/minimal/esm/index.js"),
				U = s("./node_modules/deep-diff/index.js"),
				q = s("./src/lib/env/index.ts");
			const B = new Set(["authorFlair.cssClass", "posts.adSupplementaryText", "posts.allAwardings", "posts.approvedAtUTC", "posts.approvedBy", "posts.attributionInfo", "posts.audioRoom", "posts.bannedAtUTC", "posts.bannedBy", "posts.collapsedBecauseCrowdControl", "posts.ignoreReports", "posts.isApproved", "posts.isAuthorPremium", "posts.isEligibleForLinkedPosts", "posts.isEligibleForQASchema", "posts.isFollowed", "posts.isPinned", "posts.isReactAllowed", "posts.isRemoved", "posts.isSpam", "posts.lastAuthorModNote", "posts.modQueueTriggers", "posts.modReportsDismissed", "posts.pollData", "posts.predictionTournament", "posts.previewComments", "posts.modReports", "posts.numReports", "posts.reactedFrom", "posts.removedBy", "posts.removedByCategory", "posts.topAwardedType", "posts.userReports", "posts.userReportsDismissed", "posts.modReasonBy", "subreddits.answerableQuestions", "subreddits.freeFormReports", "subreddits.isSubscribed", "authorFlair.richtext", "authorFlair.text", "posts.collectionIds", "posts.liveCommentsWebsocket", "posts.thumbnail.url", "posts.discussionType", "posts.eventsOnRender", "posts.flair", "posts.gildings", "posts.media", "posts.goldCount", "posts.sendReplies", "posts.score", "posts.sendReplies", "posts.source.url", "posts.source.outboundUrl", "posts.source.outboundUrlCreated", "posts.source.outboundUrlExpiration", "profiles.acceptFollowers", "profiles.communityIcon", "profiles.icon.url", "posts.upvoteRatio", "subreddits.acceptFollowers", "subreddits.allowChatPostCreation", "subreddits.communityIcon", "subreddits.icon.url", "subreddits.isChatPostFeatureEnabled", "subreddits.primaryColor", "subreddits.subscribers"]),
				H = (e, t) => {
					const s = {},
						r = {};
					Object.keys(e).forEach(i => {
						const n = e[i] || {},
							o = t[i] || {};
						s[i] = {}, r[i] = 0, Object.keys(n).forEach(e => {
							const t = n[e],
								d = o[e],
								a = Object(U.diff)(t, d, {
									prefilter: (e, t) => B.has(`${i}.${e.length?`${e.join(".")}.`:""}${t}`) || B.has(`${i}.${t}`),
									normalize: (e, t, s, r) => s || r ? [s, r] : [s, s]
								});
							r[i] = a ? r[i] + a.length : (null == r ? void 0 : r[i]) || 0, a && (s[i][e] = {
								gatewayThing: t,
								gqlThing: d,
								diffResult: a
							})
						})
					});
					const i = Object.keys(r).reduce((e, t) => e += r[t], 0);
					return {
						allDiffs: s,
						issueCounts: r,
						totalIssues: i
					}
				};

			function Q(e) {
				let {
					gatewayResponse: t,
					normalizedGqlResponse: s,
					rawGqlResponse: r
				} = e;
				if (Object(q.a)()) {
					console.group("GQL Profiles Shadowtest"), console.groupCollapsed("raw gql response"), console.log(r), console.groupEnd(), console.groupCollapsed("normalized gql response"), console.log(s), console.groupEnd(), console.groupCollapsed("gateway response"), console.log(t), console.groupEnd();
					const {
						allDiffs: e,
						issueCounts: i,
						totalIssues: n
					} = H(t, s);
					console.groupCollapsed(`diff: ${n} issues`), console.log("lhs = gateway\nrhs = gql");
					for (const t in e) {
						if (console.groupCollapsed(`${t}: ${i[t]} issues`), i[t] > 0)
							for (const s in e[t]) {
								const r = e[t][s].diffResult;
								console.groupCollapsed(`${s}: ${r.length||0} issues`), console.log(r), console.log({
									gql: e[t][s].gqlThing,
									gateway: e[t][s].gatewayThing
								}), console.groupEnd()
							}
						console.groupEnd()
					}
					console.groupEnd()
				}
				if (Object(q.b)()) {
					const {
						allDiffs: e,
						issueCounts: r,
						totalIssues: i
					} = H(t, s);
					if (i <= 0) return;
					V.l(t => {
						t.setExtra("info", {
							allDiffs: e,
							issueCounts: r,
							totalIssues: i
						}), t.setExtra("bypassSampling", !0), V.d("GQL Profiles Shadowtest Diff")
					})
				}
			}
			var $ = s("./src/reddit/helpers/post/index.ts"),
				z = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				W = s("./src/reddit/models/User/index.ts"),
				K = s("./src/reddit/constants/experiments.ts"),
				J = s("./src/reddit/helpers/chooseVariant/index.ts");
			const Y = e => {
					return Object(J.c)(e, {
						experimentEligibilitySelector: J.a,
						experimentName: K.uc
					}) === K.Kd
				},
				X = e => {
					return Object(J.c)(e, {
						experimentEligibilitySelector: J.a,
						experimentName: K.vc
					}) === K.Kd
				};
			var Z = s("./src/reddit/selectors/listings.ts"),
				ee = s("./src/reddit/selectors/profile.ts"),
				te = s("./src/redditGQL/types.ts");
			const se = "PAGE__PROFILE_POSTS_PENDING",
				re = "PAGE__PROFILE_POSTS_LOADED",
				ie = "PAGE__PROFILE_POSTS_FAILED",
				ne = Object(n.a)(se),
				oe = Object(n.a)(re),
				de = Object(n.a)(ie),
				ae = e => async (t, s, r) => {
					var n, T, E;
					const {
						queryParams: C,
						params: I
					} = e, {
						sort: j,
						t: y
					} = Object(l.b)(C), {
						profileName: S
					} = I, D = Object(o.a)(`u_${S}`, j, C), R = s(), N = Object(d.a)(R.listings.postOrder.ids, D), x = Object(Z.c)(R, {
						listingKey: D
					}), w = Object(Z.d)(R, {
						listingKey: D
					});
					if (await t(m.d(S)), w || N && !x) {
						if (N) {
							const e = Object(ee.s)(s(), {
								profileName: S
							});
							t(p.m({
								title: e
							}))
						}
						return
					}
					t(ne({
						key: D
					}));
					const k = X(R);
					let L, F, M;
					if (k) {
						const e = g({
							username: S,
							profileSort: j,
							filter: te.M.Posts,
							shouldUseGqlCursor: !0
						});
						F = null === (E = null === (T = null === (n = null == (L = await Object(z.a)("profilePosts", () => P(r.gqlContext(), e))) ? void 0 : L.body) || void 0 === n ? void 0 : n.data) || void 0 === T ? void 0 : T.redditorInfoByName) || void 0 === E ? void 0 : E.__typename
					} else {
						const t = {
							...i()(e.queryParams, [..._.q, ..._.p, _.l]),
							layout: Object(h.U)(R, {}).toLowerCase(),
							sort: j,
							t: Object(v.a)(j, y)
						};
						L = await Object(z.a)("profilePosts", () => A(r.apiContext(), S, t))
					}
					if (!L.ok || k && F !== W.c.AvailableRedditor) return t(de({
						account: !k && L.body.data ? L.body.data.account : null,
						error: L.body.reason ? {
							type: L.body.reason
						} : L.error,
						key: D
					})), L.body.reason === O.a.DeletedProfile || F === W.c.DeletedRedditor ? t(Object(a.u)({
						profileName: S
					})) : F === W.c.UnavailableRedditor ? t(Object(a.A)({
						profileName: S
					})) : k && !F && t(Object(a.o)({
						profileName: S
					})), void t(p.n(L.status));
					if (k) {
						const {
							data: e
						} = L.body;
						M = G(e, !0)
					} else M = L.body, await Object($.a)(r.gqlContext, M.posts).then(e => M.posts = e);
					if (!k && Y(R)) {
						const e = g({
								username: S,
								profileSort: j,
								filter: te.M.Posts
							}),
							t = await P(r.gqlContext(), e);
						if (t.ok && t.body) {
							const {
								data: e
							} = t.body, s = G(e);
							Q({
								gatewayResponse: {
									authorFlair: M.authorFlair,
									pinned: M.pinned,
									postIds: M.postIds,
									posts: M.posts,
									postFlair: M.postFlair,
									profiles: M.profiles,
									subreddits: M.subreddits,
									token: M.token
								},
								normalizedGqlResponse: s,
								rawGqlResponse: e
							})
						}
					}
					t(oe({
						key: D,
						meta: s().meta,
						...M
					}));
					const V = Object(ee.o)(s(), S),
						{
							pinned: U
						} = M;
					t(Object(b.h)({
						profileId: V,
						pinned: U
					})), await Promise.all([t(Object(l.c)(S)), t(Object(f.q)()), t(Object(u.b)()), t(c.o(S))])
				}, ce = "PROFILE_POSTS__MORE_POSTS_PENDING", ue = "PROFILE_POSTS__MORE_POSTS_LOADED", le = "PROFILE_POSTS__MORE_POSTS_FAILED", be = Object(n.a)(ce), pe = Object(n.a)(ue), me = Object(n.a)(le), fe = () => async (e, t, s) => {
					let {
						apiContext: r,
						gqlContext: n
					} = s;
					const d = t(),
						{
							currentPage: a
						} = d.platform;
					if (!a || !a.routeMatch) return;
					const {
						queryParams: c,
						params: u
					} = a.routeMatch.match, {
						sort: b,
						t: p
					} = Object(l.b)(c), {
						profileName: m
					} = u, f = Object(o.a)(`u_${m}`, b, c), O = Object(Z.g)(d, {
						listingKey: f
					});
					if (!O) return;
					const T = Object(Z.d)(d, {
							listingKey: f
						}),
						E = Object(Z.e)(d, {
							listingKey: f,
							token: O.token
						});
					if (T || E) return;
					e(be({
						key: f,
						fetchedToken: O.token
					}));
					const C = X(d);
					let I, j;
					if (C) {
						const e = g({
							username: m,
							profileSort: b,
							filter: te.M.Posts,
							loadMoreData: O,
							shouldUseGqlCursor: !0
						});
						I = await P(n(), e)
					} else {
						const e = {
							after: O.token,
							dist: O.dist,
							sort: b,
							t: p,
							...i()(c, _.q),
							layout: Object(h.U)(d, {}).toLowerCase()
						};
						I = await A(r(), m, e)
					}
					if (!I.ok) return void e(me({
						account: !C && I.body.data ? I.body.data.account : null,
						error: I.error,
						fetchedToken: O.token,
						key: f
					}));
					if (C) {
						const {
							data: e
						} = I.body;
						j = G(e, !0)
					} else j = I.body, await Object($.a)(n, j.posts).then(e => j.posts = e);
					const y = d.listings.postOrder.ids[f],
						S = j.postIds || [],
						D = {
							...j,
							postIds: S.filter(e => !y || !y.includes(e))
						};
					if (Y(d)) {
						const e = g({
								username: m,
								profileSort: b,
								filter: te.M.Posts,
								loadMoreData: O
							}),
							t = await P(n(), e);
						if (t.ok && t.body) {
							const {
								data: e
							} = t.body, s = G(e);
							Q({
								gatewayResponse: {
									authorFlair: D.authorFlair,
									pinned: D.pinned,
									postIds: D.postIds,
									posts: D.posts,
									postFlair: D.postFlair,
									profiles: D.profiles,
									subreddits: D.subreddits,
									token: D.token
								},
								normalizedGqlResponse: s,
								rawGqlResponse: e
							})
						}
					}
					e(pe({
						fetchedToken: O.token,
						key: f,
						meta: d.meta,
						...D
					})), await e(Object(l.c)(m))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "i", (function() {
				return x
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/endpoints/post/index.tsx"),
				u = s("./src/reddit/models/Toast/index.ts"),
				l = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/reddit/selectors/profile.ts");
			const m = "PINNEDPOST__PINNED_POSTS_LOADED",
				f = Object(n.a)(m),
				O = "PINNEDPOST__PIN_POST_SUCCESS",
				_ = "PINNEDPOST__UNPIN_POST_SUCCESS",
				h = Object(n.a)(O),
				T = Object(n.a)(_),
				E = "PINNEDPOST__PIN_POST_PENDING",
				P = "PINNEDPOST__UNPIN_POST_PENDING",
				g = Object(n.a)(E),
				C = Object(n.a)(P),
				I = "PINNEDPOST__PIN_POST_FAILURE",
				j = "PINNEDPOST__UNPIN_POST_FAILURE",
				y = Object(n.a)(I),
				S = Object(n.a)(j),
				D = e => Object(d.f)({
					buttonAction: x(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: r.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				A = (e, t) => Object(d.f)({
					buttonAction: x(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: u.b.SuccessMod,
					text: t ? r.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : r.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				v = () => Object(d.f)({
					kind: u.b.Error,
					text: r.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				R = () => Object(d.f)({
					kind: u.b.Error,
					text: r.fbt._("You can't pin a removed post", null, {
						hk: "3bdn2y"
					})
				}),
				N = () => Object(d.f)({
					kind: u.b.Error,
					text: r.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				x = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, r, n) => {
						let {
							apiContext: d,
							gqlContext: u
						} = n;
						const m = r(),
							f = m.posts.models[e];
						if (!f) return;
						const O = !Object(b.s)(m, {
							postId: e
						});
						if (O && f.isRemoved) return s(R());
						const _ = f.author,
							E = Object(p.o)(m, _),
							[P, I, j, x, w] = O ? [g, h, y, D, v] : [C, T, S, A, N];
						if (O) {
							if (Object(b.P)(m, {
									profileName: _
								}).length >= i.hb) return void s(Object(o.i)(a.a.PINNED_POSTS_LIMIT_REACHED))
						}
						const k = Object(b.p)(m, e, _),
							L = !O && k;
						s(P({
							postId: e,
							profileId: E
						})), (Object(l.b)(m) ? await Object(c.i)(u(), e, O, !0) : await Object(c.t)(d(), e, O, !0)).ok ? (s(I({
							postId: e,
							profileId: E
						})), t || s(x(e, L))) : (s(j({
							postId: e,
							profileId: E
						})), s(w()))
					}
				}
		},
		"./src/reddit/actions/postCreation/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "K", (function() {
				return r
			})), s.d(t, "L", (function() {
				return i
			})), s.d(t, "l", (function() {
				return n
			})), s.d(t, "m", (function() {
				return o
			})), s.d(t, "x", (function() {
				return d
			})), s.d(t, "H", (function() {
				return a
			})), s.d(t, "I", (function() {
				return c
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "G", (function() {
				return l
			})), s.d(t, "p", (function() {
				return b
			})), s.d(t, "Q", (function() {
				return p
			})), s.d(t, "n", (function() {
				return m
			})), s.d(t, "D", (function() {
				return f
			})), s.d(t, "s", (function() {
				return O
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return I
			})), s.d(t, "j", (function() {
				return j
			})), s.d(t, "q", (function() {
				return y
			})), s.d(t, "S", (function() {
				return S
			})), s.d(t, "R", (function() {
				return D
			})), s.d(t, "T", (function() {
				return A
			})), s.d(t, "U", (function() {
				return v
			})), s.d(t, "V", (function() {
				return R
			})), s.d(t, "W", (function() {
				return N
			})), s.d(t, "X", (function() {
				return x
			})), s.d(t, "Y", (function() {
				return w
			})), s.d(t, "Z", (function() {
				return k
			})), s.d(t, "r", (function() {
				return L
			})), s.d(t, "E", (function() {
				return F
			})), s.d(t, "u", (function() {
				return M
			})), s.d(t, "v", (function() {
				return G
			})), s.d(t, "t", (function() {
				return V
			})), s.d(t, "w", (function() {
				return U
			})), s.d(t, "P", (function() {
				return q
			})), s.d(t, "o", (function() {
				return B
			})), s.d(t, "y", (function() {
				return H
			})), s.d(t, "db", (function() {
				return Q
			})), s.d(t, "J", (function() {
				return $
			})), s.d(t, "a", (function() {
				return z
			})), s.d(t, "F", (function() {
				return W
			})), s.d(t, "N", (function() {
				return K
			})), s.d(t, "O", (function() {
				return J
			})), s.d(t, "M", (function() {
				return Y
			})), s.d(t, "ab", (function() {
				return X
			})), s.d(t, "C", (function() {
				return Z
			})), s.d(t, "B", (function() {
				return ee
			})), s.d(t, "z", (function() {
				return te
			})), s.d(t, "A", (function() {
				return se
			})), s.d(t, "cb", (function() {
				return re
			})), s.d(t, "bb", (function() {
				return ie
			}));
			const r = "SUBMIT_VALIDATION_FIELD_HAS_ERROR",
				i = "SUBMIT_VALIDATION_FIELD_IS_VALID",
				n = "POST_CREATION_EDIT_COMPLETE",
				o = "POST_CREATION_EDIT_FAILED",
				d = "POST_CREATION_PENDING_EDIT",
				a = "POST_CREATION_START_EDITING_POST",
				c = "POST_CREATION_STOP_EDITING_POST",
				u = "EDITOR_CONTENT_KEY__NEW_DRAFT",
				l = "STARTED_CONVERTING_EDITOR_CONTENT",
				b = "FINISHED_CONVERTING_EDITOR_CONTENT",
				p = "POST_CREATION__TOGGLE_EDITOR_MODE",
				m = "POST_CREATION__ERRORS_NO_LONGER_VALID",
				f = "POST_TITLE_FETCHED",
				O = "INITIALIZE_EDITOR_MODE",
				_ = "POST_CREATION__CHANGE_FLAIR",
				h = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				T = "POST_CREATION__CHANGE_LINK_BODY",
				E = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				P = "POST_CREATION__CHANGE_MEDIA_BODY",
				g = "POST_CREATION__CHANGE_RECAPTCHA",
				C = "POST_CREATION__CHANGE_RTE_STATE",
				I = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				j = "POST_CREATION__CHANGE_TITLE",
				y = "POST_CREATION__GOV_TYPE_CHANGED",
				S = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				D = "POST_CREATION__TOGGLE_IS_CHANGED",
				A = "POST_CREATION__TOGGLE_IS_GOV",
				v = "POST_CREATION__TOGGLE_IS_NSFW",
				R = "POST_CREATION__TOGGLE_IS_OC",
				N = "POST_CREATION__TOGGLE_IS_POLL",
				x = "POST_CREATION__TOGGLE_IS_SPOILER",
				w = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				k = "POST_CREATION__TOGGLE_SEND_REPLIES",
				L = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				F = "POST_CREATION__RESET_FORM",
				M = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				G = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				V = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				U = "POST_CREATION__PENDING",
				q = "POST_CREATION__SUCCEEDED",
				B = "POST_CREATION__FAILED",
				H = "POST_CREATION__POLL_FAILED",
				Q = "POST_CREATION__VALIDATION_FAILED",
				$ = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				z = "POST_CREATION__CAPTCHA_REQUIRED",
				W = "POST_CREATION__SET_SUBMIT_MODE",
				K = "POST_CREATION__SUBREDDIT_CHANGE_PENDING",
				J = "POST_CREATION__SUBREDDIT_WILL_CHANGE",
				Y = "POST_CREATION__SUBREDDIT_CHANGE_CANCELED",
				X = "POST_CREATION__UPDATE_SCHEDULED_POST_ADVANCED_SETTINGS",
				Z = "POST_CREATION__SUBREDDIT_RECOMMENDATION_PENDING",
				ee = "POST_CREATION__SUBREDDIT_RECOMMENDATION_LOADED",
				te = "POST_CREATION__SUBREDDIT_RECOMMENDATION_FAILED",
				se = "POST_CREATION__SUB_REC_IS_INPUT_CHANGED",
				re = "POST_CREATION__UPDATE_TOURNAMENT",
				ie = "POST_CREATION__UPDATE_TALK"
		},
		"./src/reddit/actions/postCreation/general.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return S
			})), s.d(t, "o", (function() {
				return A
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "b", (function() {
				return R
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "f", (function() {
				return k
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "g", (function() {
				return F
			})), s.d(t, "h", (function() {
				return M
			})), s.d(t, "l", (function() {
				return G
			})), s.d(t, "u", (function() {
				return V
			})), s.d(t, "t", (function() {
				return U
			})), s.d(t, "v", (function() {
				return q
			})), s.d(t, "w", (function() {
				return B
			})), s.d(t, "x", (function() {
				return H
			})), s.d(t, "y", (function() {
				return Q
			})), s.d(t, "A", (function() {
				return $
			})), s.d(t, "B", (function() {
				return z
			})), s.d(t, "E", (function() {
				return W
			})), s.d(t, "D", (function() {
				return K
			})), s.d(t, "C", (function() {
				return J
			})), s.d(t, "m", (function() {
				return Y
			})), s.d(t, "r", (function() {
				return Z
			})), s.d(t, "s", (function() {
				return ee
			})), s.d(t, "q", (function() {
				return te
			})), s.d(t, "z", (function() {
				return se
			})), s.d(t, "p", (function() {
				return re
			})), s.d(t, "n", (function() {
				return ie
			})), s.d(t, "k", (function() {
				return ue
			})), s.d(t, "j", (function() {
				return pe
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/debounce.js"),
				i = s.n(r),
				n = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/lib/isUrl/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/endpoints/post/index.tsx"),
				l = s("./src/redditGQL/operations/WhereToPostSubRec.json"),
				b = s("./src/lib/makeGqlRequest/index.ts"),
				p = s("./src/redditGQL/operations/OpenAISubRecWithDetail.json");
			var m = s("./src/reddit/helpers/correlationIdTracker.ts"),
				f = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = s("./src/reddit/helpers/trackers/postComposer.ts"),
				h = s("./src/reddit/models/PostCreationForm/index.ts"),
				T = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/routes/postCreation/constants.ts"),
				P = s("./src/reddit/selectors/activeModalId.ts"),
				g = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				I = s("./src/reddit/selectors/postCreations.ts"),
				j = s("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				y = s("./src/reddit/actions/postCreation/constants.ts");
			const S = Object(d.a)(y.n),
				D = Object(d.a)(y.D),
				A = (Object(d.a)(y.s), e => {
					switch (e) {
						case "markdown":
							return "self";
						case "richtext":
						case "richText":
							return "self";
						case "media":
							return "media";
						default:
							return "link"
					}
				}),
				v = Object(d.a)(y.b),
				R = Object(d.a)(y.c),
				N = Object(d.a)(y.d),
				x = Object(d.a)(y.e),
				w = Object(d.a)(y.f),
				k = Object(d.a)(y.g),
				L = Object(d.a)(y.h),
				F = Object(d.a)(y.i),
				M = Object(d.a)(y.j),
				G = Object(d.a)(y.q),
				V = Object(d.a)(y.S),
				U = Object(d.a)(y.R),
				q = (Object(d.a)(y.T), Object(d.a)(y.U)),
				B = Object(d.a)(y.V),
				H = Object(d.a)(y.W),
				Q = Object(d.a)(y.X),
				$ = Object(d.a)(y.Y),
				z = Object(d.a)(y.Z),
				W = Object(d.a)(y.cb),
				K = Object(d.a)(y.bb),
				J = Object(d.a)(y.ab),
				Y = Object(d.a)(y.r),
				X = i()((e, t) => {
					Object(o.a)(t) && e((e => async (t, s, r) => {
						let {
							apiContext: i
						} = r;
						const n = await Object(u.e)(i(), e);
						n.ok && n.body && n.body.json && n.body.json.data && t(D(n.body.json.data))
					})(t))
				}, 500),
				Z = e => async t => {
					t(N(e)), X(t, e)
				}, ee = Object(d.a)(y.E), te = (e, t) => async (s, r) => {
					s(ee()), s(e ? Object(n.b)(E.b) : Object(n.b)(Object(I.db)(r(), {
						pageLayer: t
					})))
				}, se = e => async t => {
					t(a.i(e))
				}, re = e => async (t, s) => {
					const r = s(),
						i = Object(c.I)(e),
						n = Object(I.H)(r);
					if (i && n) {
						Object(P.a)(r) !== h.d && t(se(h.d))
					} else t(te(!1, e))
				}, ie = e => async (t, s) => {
					const r = s();
					Object(C.m)(r, {
						subredditId: e
					}) ? t(a.i(h.a)) : t(a.i(h.c))
				}, ne = Object(d.a)(y.B), oe = Object(d.a)(y.C), de = Object(d.a)(y.z), ae = Object(d.a)(y.A), ce = e => async (t, s) => {
					Object(j.e)(s()) !== e && t(ae({
						isChanged: e
					}))
				}, ue = () => async (e, t) => {
					const s = t();
					if (Object(j.g)(s))
						if (Object(j.h)(s)) {
							const t = s.creations.formData.title,
								r = Object(j.l)(s),
								i = Object(j.k)(s),
								n = Object(j.b)(s);
							e(pe(t, r, i, void 0, n))
						} else Object(j.j)(s) && !Object(j.d)(s) && e(me())
				}, le = ["torrents", "IsolatedVocals"], be = ["askreddit", "teenagers"], pe = (e, t, s, r, i) => async (n, o, d) => {
					let {
						apiContext: a,
						gqlContext: c
					} = d;
					const u = o();
					if (Object(j.i)(u)) return;
					n(oe());
					const l = Object(m.c)(m.a.PostComposer),
						h = await ((e, t, s, r, i, n) => Object(b.a)(e, {
							...p,
							variables: {
								title: t,
								body: s,
								link: r,
								correlationId: i,
								confidenceWeight: n
							}
						}))(c(), e, t, s, l, i),
						E = {};
					let P = {};
					const C = {},
						I = {},
						y = [];
					if (!h.body || !h.ok) return n(ce(!1)), void n(de()); {
						const {
							data: e
						} = h.body, {
							subredditSuggestions: t
						} = e.openaiSubredditSuggestionsDetailed;
						let s = t.map(e => {
							const {
								subredditInfo: t,
								cVal: s,
								sVal: r
							} = e, i = t.name;
							return i && (I[i] = {
								confidence: s,
								succRate: r
							}), t
						}).filter(e => !le.includes(e.name));
						const i = (s = r ? s.filter(e => !r(e)) : s).slice(0, j.a),
							d = i.map(e => {
								const t = e.name;
								return y.push(t), t
							});
						if (Object(g.b)(u) && (e => {
								const t = e.map(e => e.toLowerCase());
								let s = !1;
								return be.forEach(e => {
									t.includes(e) && (s = !0)
								}), s
							})(d)) return n(ce(!1)), n(ne({
							subreddits: {},
							subredditsAboutInfo: {},
							unavailableSubreddits: {},
							recSubsDict: {},
							recSubsOrder: []
						})), Object(_.G)(o()), void n(de());
						i.forEach(e => {
							if (Object(T.k)(e)) {
								const t = Object(O.f)(e);
								C[t.id] = t
							} else if (e && Object.keys(e).length > 0) {
								const t = Object(O.a)(e),
									s = Object(f.a)(e);
								E[t.id] = t, P = {
									...P,
									...s
								}
							}
						})
					}
					n(ce(!1)), n(ne({
						subreddits: E,
						subredditsAboutInfo: P,
						unavailableSubreddits: C,
						recSubsDict: I,
						recSubsOrder: y
					})), 0 === Object(j.c)(o()).length && n(de())
				}, me = () => async (e, t, s) => {
					let {
						apiContext: r,
						gqlContext: i
					} = s;
					const n = t();
					if (Object(j.i)(n)) return;
					e(oe());
					const o = {};
					let d = {};
					const a = {},
						c = {},
						u = [],
						p = await (e => Object(b.a)(e, {
							...l,
							variables: {
								recentSubreddits: []
							}
						}))(i());
					if (!p.ok || !p.body) return e(de()), void e(ce(!1)); {
						const {
							data: e
						} = p.body;
						(e.whereToPostSuggestions.edges || []).forEach((e, t) => {
							if (t >= j.a) return;
							const s = e.node.subredditInfo;
							if (Object(T.k)(s)) {
								const e = Object(O.f)(s);
								a[e.id] = e
							} else if (s && Object.keys(s).length > 0) {
								const e = Object(O.a)(s),
									t = Object(f.a)(s);
								c[s.name] = {}, u.push(s.name), o[e.id] = e, d = {
									...d,
									...t
								}
							}
						})
					}
					e(ce(!1)), e(ne({
						subreddits: o,
						subredditsAboutInfo: d,
						unavailableSubreddits: a,
						recSubsDict: c,
						recSubsOrder: u
					})), 0 === Object(j.c)(t()).length && e(de())
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return g
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "a", (function() {
				return I
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "c", (function() {
				return y
			}));
			var r = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/filterQueryParams/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/pages/postCreation.ts"),
				u = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/reddit/helpers/name/index.ts"),
				b = s("./src/reddit/models/PostCreationForm/index.ts"),
				p = s("./src/reddit/routes/postCreation/index.ts"),
				m = s("./src/reddit/routes/postCreation/constants.ts"),
				f = s("./src/reddit/selectors/postCreations.ts"),
				O = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/actions/postCreation/constants.ts"),
				T = s("./src/reddit/actions/postCreation/general.ts");
			const E = Object(d.a)(h.N),
				P = Object(d.a)(h.O),
				g = Object(d.a)(h.M),
				C = (e, t) => async (s, r, i) => {
					let {
						apiContext: o
					} = i, d = r();
					const {
						name: p,
						isProfile: m
					} = e, h = Object(O.e)(d), T = h && !m && Object(l.a)(h.name, p), P = d.creations.api.subreddit.change.pending;
					if (T || P) return;
					const g = Object(u.x)(t);
					if (!p) return void s(I(e, g));
					s(E(e));
					const C = m ? {
						profileName: p
					} : {
						subredditName: p
					};
					if (await s(Object(c.postCreationPageDataRequested)(C)), m || !Object(f.C)(d)) return s(I(e, g));
					const j = e.allowedPostTypes || Object(_.B)(r(), {
						subredditName: p
					});
					if (!j) return void s(I(e, g));
					let y;
					d = r();
					const S = Object(f.pb)(d),
						D = Object(f.C)(d);
					if (S === n.bc.MEDIA && D) {
						const e = Object(f.X)(d),
							t = Object(b.x)(e),
							s = Object(f.O)(d) && e.items.length > 1,
							r = !t && !s;
						if (s && !j.galleries) y = b.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (r && !j.images) y = b.q.ImageWillBeRemoved;
						else if (t && !j.videos) {
							const t = d.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							j.images ? s > n.lb && (y = b.q.VideoWillBeRemovedTooLongForGif) : y = b.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(y ? Object(a.i)(y) : I({
						...e,
						allowedPostTypes: j
					}, g))
				}, I = function(e, t) {
					let s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (n, o) => {
						const {
							name: d,
							isProfile: a
						} = e, c = o().platform.currentPage, u = c.queryParams, l = a ? p.b : p.c;
						let b = "";
						b = d ? l(d) : m.b, b = Object(i.a)(b, {
							...u,
							draft: t || u.draft
						}), (t || c.url.toLowerCase() !== b.toLowerCase()) && (n(P(e)), s && n(Object(T.t)(!0)), n(Object(T.i)()), n(Object(r.c)(b)))
					}
				}, j = e => async (t, s) => {
					const n = s().platform.currentPage,
						o = n.queryParams,
						d = Object(i.a)(n.url, {
							...o,
							collection: e
						});
					t(Object(r.c)(d))
				}, y = () => async (e, t) => {
					const s = t().platform.currentPage,
						i = Object(o.a)(s.url, ["collection"]);
					e(Object(r.c)(i))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return v
			})), s.d(t, "e", (function() {
				return R
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "p", (function() {
				return L
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "l", (function() {
				return M
			})), s.d(t, "i", (function() {
				return G
			})), s.d(t, "m", (function() {
				return V
			})), s.d(t, "k", (function() {
				return U
			})), s.d(t, "h", (function() {
				return q
			})), s.d(t, "n", (function() {
				return B
			})), s.d(t, "s", (function() {
				return J
			})), s.d(t, "r", (function() {
				return Y
			})), s.d(t, "g", (function() {
				return X
			})), s.d(t, "q", (function() {
				return ee
			})), s.d(t, "c", (function() {
				return te
			})), s.d(t, "a", (function() {
				return se
			})), s.d(t, "b", (function() {
				return re
			})), s.d(t, "o", (function() {
				return de
			}));
			var r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/formatApiError/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/postCreation/general.ts"),
				d = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/lib/makeApiRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/models/StructuredStyles/index.ts");
			var p = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/models/PostDraft/index.ts"),
				O = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				_ = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				h = s("./src/reddit/models/Subreddit/index.ts");
			const T = e => {
				let t = e.drafts.reduce((e, t) => {
					const s = (e => {
						let t;
						return t = "link" === e.kind ? {
							kind: f.b.Link,
							body: e.body || void 0
						} : "markdown" === e.kind ? {
							kind: f.b.Markdown,
							body: e.body || void 0
						} : {
							kind: f.b.RichText,
							body: e.body || void 0
						}, {
							subredditId: e.subreddit || void 0,
							contentCategory: e.content_category || void 0,
							created: e.created,
							flair: e.flair,
							id: e.id,
							isChatPost: !!e.discussion_type,
							isNSFW: !!e.nsfw,
							isOriginalContent: !!e.original_content,
							isSpoiler: !!e.spoiler,
							modified: e.modified || void 0,
							sendReplies: !!e.send_replies,
							isPublicLink: !!e.is_public_link,
							title: e.title || "",
							...t
						}
					})(t);
					return e.postDraftIds.push(s.id), e.postDrafts[s.id] = s, e
				}, {
					postDraftIds: [],
					postDrafts: {},
					profiles: {},
					subreddits: {}
				});
				return t = e.subreddits.reduce((e, t) => {
					if (t.subreddit_type === h.g.User) {
						const s = Object(O.a)(t, Object(m.i)(t.display_name_prefixed));
						e.profiles[s.id] = s
					} else {
						const s = Object(_.a)(t);
						e.subreddits[s.id] = s
					}
					return e
				}, t)
			};
			var E = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				P = s("./src/reddit/models/PostCreationForm/index.ts"),
				g = s("./src/reddit/helpers/trackers/postComposer.ts"),
				C = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/models/User/index.ts"),
				j = s("./src/reddit/selectors/postCreations.ts"),
				y = s("./src/reddit/selectors/postDraft.ts"),
				S = s("./src/reddit/selectors/profile.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				A = s("./src/reddit/selectors/user.ts");
			const v = "POST_DRAFT__LIST_PENDING",
				R = "POST_DRAFT__LIST_LOADED",
				N = "POST_DRAFT__LIST_FAILED",
				x = Object(n.a)(v),
				w = Object(n.a)(R),
				k = Object(n.a)(N),
				L = () => async (e, t, s) => {
					let {
						apiContext: i
					} = s;
					const n = t();
					if (!Object(A.l)(n) || Object(y.b)(n)) return;
					e(x());
					const o = await (e => Object(u.a)(Object(l.a)(e, [p.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: r.ob.GET
					}))(i());
					o.ok ? e(w(T(o.body))) : e(k(o.error))
				}, F = "POST_DRAFT__SAVE_DRAFT_PENDING", M = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", G = "POST_DRAFT__SAVE_DRAFT_FAILED", V = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", U = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", B = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(n.a)(F), Q = Object(n.a)(M), $ = Object(n.a)(G), z = Object(n.a)(V), W = Object(n.a)(U), K = Object(n.a)(q), J = Object(n.a)(B), Y = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					const c = s(),
						b = Object(y.g)(c),
						m = Object(j.cb)(c);
					if (b || m) return;
					const f = Object(y.h)(c, e);
					if (!f) return;
					t(H(f)), g.g(c, f);
					const O = await ((e, t, s) => Object(u.a)(Object(l.a)(e, [p.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? r.ob.PUT : r.ob.POST,
						data: Object(E.a)(t)
					}).then(e => e.body.fields && Object(P.w)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: r.L.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(o(), f, e);
					if (O.ok) {
						const {
							id: s,
							draftsCount: r
						} = Object(E.c)(O.body);
						t(Q({
							draftId: s,
							draftsCount: r
						})), e || t(Object(d.a)(f.destSubreddit, s, !1))
					} else {
						const e = O.error;
						e.type === r.L.BAD_CAPTCHA_ERROR ? t(K()) : e.type === r.L.VALIDATION_ERROR ? t(z(e)) : e.type === r.L.SUBMIT_VALIDATION_ERROR ? t(W(e)) : t($(e)), t(Object(a.f)({
							duration: a.a,
							kind: C.b.Error,
							text: Object(i.a)(e)
						}))
					}
				}, X = "POST_DRAFT__LOAD_DRAFT", Z = Object(n.a)(X), ee = e => async (t, s, r) => {
					let {
						apiContext: i
					} = r;
					t(Z(e));
					let n = P.f;
					const o = s();
					if (e.subredditId) {
						const t = Object(D.Y)(o, {
								subredditId: e.subredditId
							}),
							s = Object(S.r)(o, {
								profileId: e.subredditId
							}),
							r = Object(A.l)(o);
						t ? n = {
							isProfile: !1,
							name: t.name
						} : s && r && (n = {
							isProfile: !0,
							name: Object(I.e)(r)
						})
					}
					await t(Object(d.a)(n, e.id, !1));
					const a = Object(y.h)(s(), e.id);
					a && g.j(s(), a)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", re = "POST_DELETE_DRAFT_PENDING", ie = Object(n.a)(te), ne = Object(n.a)(se), oe = Object(n.a)(re), de = (e, t) => async (s, n, d) => {
					let {
						apiContext: p
					} = d;
					const m = n();
					if (Object(y.a)(m, e)) return;
					const f = Object(y.d)(m, {
						draftId: e
					});
					f && g.h(m, f), s(oe({
						draftId: e
					}));
					const O = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: r.ob.DELETE
					}))(p(), e);
					if (O.ok) {
						const {
							draftsCount: r
						} = Object(E.c)(O.body);
						s(ie({
							draftId: e,
							draftsCount: r
						}));
						const i = Object(c.x)(t);
						e === i && s(Object(o.q)(!0, t))
					} else {
						const t = O.error;
						s(ne({
							draftId: e,
							apiError: t
						})), s(Object(a.f)({
							duration: a.a,
							kind: C.b.Error,
							text: Object(i.a)(t)
						}))
					}
				}
		},
		"./src/reddit/actions/redditEmbed.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			}));
			var r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/reddit/endpoints/me/index.ts"),
				d = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				a = s("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				u = "REDDIT_EMBED_FAILED",
				l = Object(i.a)("REDDIT_EMBED_PENDING"),
				b = Object(i.a)(c),
				p = Object(i.a)(u),
				m = (e, t) => async (e, s, r) => {
					let {
						apiContext: i
					} = r;
					const a = s();
					e(l());
					const c = await Object(o.a)(i());
					c.ok && c.body ? !t || c.body.account ? (e(b(c.body)), e(Object(n.d)()), f(a)) : Object(d.a)(e, a) : e(p(c.error))
				}, f = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === r.Sb.INBOX_PAGES && Object(a.g)(e)
				}
		},
		"./src/reddit/actions/subredditDuplicates.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return m
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				n = s("./src/config.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/reddit/models/Post/index.ts");
			var a = s("./src/reddit/models/Duplicates/index.ts"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const b = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				p = (Object(r.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(r.a)(b)),
				m = (e, t) => async (s, r, b) => {
					let {
						apiContext: m
					} = b;
					const f = Object(l.Y)(r(), {
						subredditId: e
					}) || Object(u.r)(r(), {
						profileId: e
					});
					if (!f) return;
					const O = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(c.i)(f) ? i.qc + f.name : f.name
						},
						_ = await ((e, t, s) => Object(o.a)(e, {
							data: s,
							endpoint: `${n.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(d.D)(t)}`,
							method: i.ob.GET
						}))(m(), t, O);
					if (_.ok) {
						const r = _.body;
						s(p({
							distinguishKey: Object(a.a)(t, O),
							postIds: r.postIds,
							posts: r.posts,
							profiles: r.profiles,
							subreddits: r.subreddits,
							subredditId: e
						}))
					}
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/isEqual.js"),
				i = s.n(r),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/ads/store.ts"),
				l = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				b = s("./src/reddit/connectors/PostViewable/index.ts"),
				p = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/selectors/media.ts"),
				O = s("./src/reddit/selectors/video.ts");
			const _ = [{
					event: p.a.ViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.m
				}, {
					event: p.a.Impression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: p.a.GalleryItemImpression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: p.a.VendorFullyInView,
					threshold: c.b,
					viewabilityMinimum: c.f
				}, {
					event: p.a.GroupMViewable,
					threshold: c.b,
					viewabilityMinimum: c.m
				}, {
					event: p.a.VendorFullyInViewSeconds5,
					threshold: c.l,
					viewabilityMinimum: c.h,
					remainingTime: c.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: p.a.VendorFullyInViewSeconds15,
					threshold: c.l,
					viewabilityMinimum: c.g,
					remainingTime: c.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				h = [{
					event: p.a.VideoViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.k,
					remainingTime: c.k,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoFullyViewableImpression,
					threshold: c.a,
					viewabilityMinimum: c.i,
					remainingTime: c.i,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: c.k,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: p.a.VideoVendorFullyViewable50,
					threshold: c.a,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				T = e => e.map(e => {
					let {
						event: t,
						cumulative: s = !1,
						cumulativeElapsedTime: r,
						remainingTime: i,
						threshold: n = null,
						viewabilityMinimum: o,
						checkAudible: d = !1,
						timeViewingInterrupted: a
					} = e;
					return {
						event: t,
						cumulative: s,
						checkAudible: d,
						timer: null,
						fired: !1,
						threshold: n,
						remainingTime: i,
						cumulativeElapsedTime: 0,
						viewabilityMinimum: o,
						timeViewingInitialized: 0,
						timeViewingInterrupted: a
					}
				}),
				E = () => T(_),
				P = () => T(h),
				g = [c.c, c.e, c.l, c.j, c.a, c.b],
				C = [c.c, c.l, c.j, c.a],
				I = [c.c, c.e, c.l, c.b],
				j = e => "boolean" == typeof e.cumulative && e.cumulative,
				y = Object(d.c)({
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(O.b)(e, {
							postId: s.id
						})
					},
					videoDuration: (e, t) => {
						let {
							post: s
						} = t;
						const r = Object(O.h)(e, {
							postId: s.id
						});
						if (r) return r.length
					},
					isAudible: e => Object(f.a)(e),
					isPlaying: (e, t) => {
						let {
							post: s
						} = t;
						return Object(O.d)(e, {
							postId: s.id
						})
					},
					isFullScreen: (e, t) => {
						let {
							post: s
						} = t;
						return Object(O.e)(e, {
							postId: s.id
						})
					}
				}),
				S = Object(b.a)(y);
			class D extends n.Component {
				constructor(e) {
					super(e), this.viewabilityStats = E(), this.videoStats = P(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, c.r), this.props.trackVideo && this.handleThresholds(e, c.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						if (i()(this.state.event, e) || this.setState({
								event: e
							}), this.props.trackDisplay) {
							const t = this.props.post.media && Object(m.F)(this.props.post.media);
							this.viewabilityStats.forEach(s => {
								(s.event !== p.a.GalleryItemImpression || t) && this.checkViewability(e, s)
							})
						}
						this.props.isPlaying && this.props.trackVideo && this.videoStats.forEach(t => {
							t.checkAudible && !this.props.isAudible || this.checkViewability(e, t)
						})
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: e.continuousViewingStartedAt
					}
				}
				componentDidMount() {
					this.visibilityChangeSubscriptionId = l.a.subscribe(e => {
						this.pageInFocus = e.documentInFocus, this.state.event && this.handleViewabilityChange(this.state.event)
					})
				}
				componentWillUnmount() {
					const {
						post: e,
						trackDisplay: t,
						trackVideo: s
					} = this.props;
					this.visibilityChangeSubscriptionId && l.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (u.d(e.id, c.r, !1), this.viewabilityStats.forEach(e => {
						j(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (u.d(e.id, c.p, !0), this.videoStats.forEach(e => {
						j(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), this.outOfViewStats = [], this.inViewStats = []
				}
				componentDidUpdate() {
					this.props.trackVideo && (this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? (this.handleThresholds(this.state.event, c.p, !0), this.videoStats.forEach(e => {
						!this.props.isPlaying || e.checkAudible && !this.props.isAudible ? e.cumulative ? this.pauseCumulativeStats(e) : this.pauseViewableStats(e) : this.checkViewability(this.state.event, e)
					})) : this.resetTimers())
				}
				resetTimers() {
					this.videoStats.forEach(e => {
						e.cumulative || this.resetTimer(e)
					}), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e), e.timeViewingInitialized = 0, void 0 !== e.viewabilityMinimum && (e.remainingTime = e.viewabilityMinimum)
				}
				pauseViewableStats(e) {
					let t;
					if (!e.timer || e.fired) return;
					e.timeViewingInterrupted = Date.now();
					const s = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = (e.viewabilityMinimum || 0) - s, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = (e.viewabilityMinimum || 0) - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e))
				}
				meetsViewabilityRequirements(e, t) {
					let s, r = !1,
						i = !1;
					return "object" == typeof t ? (s = t.threshold, r = !!t.playing, i = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!r || this.props.isPlaying) && (!i || this.props.isAudible)
				}
				handleThresholds(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						post: r
					} = this.props, n = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!i()(n, this.inViewStats) && n.length > 0 && u.b(r.id, n, s);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!i()(o, this.outOfViewStats) && o.length > 0 && u.d(r.id, o, s), this.outOfViewStats = o, this.inViewStats = n
				}
				isAdequatelyInView(e, t) {
					return !!this.props.isFullScreen || !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, c.g) : e.viewabilityMinimum = c.g, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: s,
						width: r
					} = e.boundingClientRect;
					return !t.threshold && t.event === p.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = r * s < 3e5 ? c.a : c.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === p.a.GroupMViewable && r * s > 242500 && (t.threshold = c.l), t
				}
				checkViewability(e, t) {
					if (j(t) && t.event === p.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						j(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
					}
				}
				clearTimer(e) {
					e.timer && (clearTimeout(e.timer), e.timer = null)
				}
				getLengthForTimer(e) {
					return void 0 !== e.remainingTime ? e.remainingTime : e.viewabilityMinimum || 0
				}
				fireStat(e) {
					setTimeout(() => this.props.onPostViewable(this.props.post, e.event), 0), e.fired = !0
				}
				initTimer(e, t) {
					this.clearTimer(e), e.timer = window.setTimeout(() => {
						this.fireStat(e)
					}, t)
				}
				render() {
					const {
						trackDisplay: e,
						trackVideo: t
					} = this.props;
					let s = g;
					return e && !t ? s = I : !e && t && (s = C), o.a.createElement(a.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = S(D)
		},
		"./src/reddit/components/CrosspostRecommendationsModal/constants.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			const r = "crosspost_recommendations_modal_id",
				i = 3e3
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return {
					...e,
					onPostViewable: i.P
				}
			}(t))
		},
		"./src/reddit/constants/errors.ts": function(e, t, s) {
			"use strict";
			var r, i;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(r || (r = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(i || (i = {}))
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "b", (function() {
				return _
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/constants/posts.ts"),
				d = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				a = s("./src/reddit/hooks/useUserContext.ts"),
				c = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = i.a.createContext(null);

			function m(e) {
				const t = Object(n.e)(t => Object(u.G)(t, {
						postId: e
					})),
					{
						currentUser: s
					} = Object(a.a)();
				let r = Object(n.e)(e => t ? Object(l.Q)(e, {
					identifier: t.belongsTo
				}) : null);
				r || (null == t ? void 0 : t.belongsTo.type) !== o.a.PROFILE || (r = t.profile);
				const i = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? r : null,
					b = !(!s || (null == t ? void 0 : t.author) !== Object(c.e)(s)),
					p = Object(n.e)(n => ({
						currentUser: s,
						imageGalleryCurrentItem: Object(u.i)(n, {
							postId: e
						}),
						isModerator: !(!i || !n.moderatingSubreddits[i.name]),
						post: t,
						postId: e,
						subreddit: i,
						subredditOrProfile: r,
						userIsOp: b
					}));
				return Object(d.a)(p)
			}

			function f(e) {
				const {
					postId: t,
					children: s
				} = e, r = m(t);
				return i.a.createElement(p.Provider, {
					value: r
				}, s)
			}

			function O(e) {
				const t = e.displayName || e.name;

				function s(s) {
					return i.a.createElement(p.Consumer, null, r => {
						if (!r) throw new Error(`No Post context for <${t}/>!`);
						return i.a.createElement(e, b({}, s, r))
					})
				}
				return s.displayName = `PostContext(${t})`, s
			}

			function _(e) {
				const t = e.displayName || e.name;

				function s(t) {
					const s = m(t.postId);
					return i.a.createElement(p.Provider, {
						value: s
					}, i.a.createElement(e, b({}, t, s)))
				}
				return s.displayName = `PostProvider(${t})`, s
			}
			t.c = p
		},
		"./src/reddit/contexts/User/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return p
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				d = s("./src/reddit/reducers/user/prefs/index.ts"),
				a = s("./src/reddit/selectors/user.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = i.a.createContext({
				currentUser: null,
				modModeEnabled: !1,
				nightmodeEnabled: !1,
				prefs: d.a,
				isLoggedIn: !1
			});

			function l() {
				const e = Object(n.e)(e => ({
					currentUser: Object(a.l)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(a.eb)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(a.R)(e)
				}));
				return Object(o.a)(e)
			}

			function b(e) {
				return i.a.createElement(u.Provider, {
					value: l()
				}, e.children)
			}

			function p(e) {
				const t = e.displayName || e.name;

				function s(t) {
					return i.a.createElement(u.Consumer, null, s => i.a.createElement(e, c({}, t, s)))
				}
				return s.displayName = `UserContext(${t})`, s
			}
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./src/config.ts"),
				i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = e => Object(n.a)(e, {
				endpoint: Object(o.a)(`${r.a.gatewayUrl}/desktopapi/v1/me`),
				method: i.ob.GET
			})
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return b
			}));
			var r = s("./src/reddit/helpers/flair.ts"),
				i = s("./src/reddit/models/PostDraft/index.ts");
			const n = e => ({
					id: e.json.data.id,
					draftsCount: e.json.data.drafts_count
				}),
				o = e => e.destSubreddit.id ? {
					subreddit: e.destSubreddit.id,
					target: e.destSubreddit.isProfile ? "profile" : "subreddit"
				} : {},
				d = e => {
					switch (e.kind) {
						case i.b.Link:
							return "link";
						case i.b.Markdown:
							return "markdown";
						case i.b.RichText:
							return "richtext";
						default:
							return "self"
					}
				},
				a = e => {
					switch (e) {
						case "link":
							return i.b.Link;
						case "markdown":
							return i.b.Markdown;
						case "richtext":
							return i.b.RichText;
						default:
							return "self"
					}
				},
				c = e => e.title.substring(0, 300),
				u = e => {
					switch (e.kind) {
						case i.b.Link:
						case i.b.Markdown:
							return e.body;
						case i.b.RichText:
							return JSON.stringify({
								document: e.body
							})
					}
				},
				l = e => e ? {
					flair_id: e.templateId || null,
					flair_text: Object(r.g)(e) || null,
					flair_text_color: e.textColor || null,
					flair_background_color: e.backgroundColor || null
				} : {
					flair_id: null,
					flair_text: null,
					flair_text_color: null,
					flair_background_color: null
				},
				b = e => ({
					id: e.draftId || void 0,
					...o(e),
					kind: d(e),
					title: c(e),
					body: u(e),
					spoiler: e.isSpoiler,
					nsfw: e.isNSFW,
					original_content: e.isOC,
					...l(e.flair),
					send_replies: e.sendReplies,
					is_public_link: e.isPublicLink
				})
		},
		"./src/reddit/helpers/isCrosspost.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return !!e && !!e.crosspostRootId
			}
		},
		"./src/reddit/hooks/useMemoShallowEqual.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react/index.js"),
				i = s("./node_modules/react-redux/es/index.js");

			function n(e) {
				const t = Object(r.useRef)(e);
				return t.current === e || Object(i.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react/index.js"),
				i = s("./src/reddit/contexts/User/index.tsx");

			function n() {
				return Object(r.useContext)(i.a)
			}
		},
		"./src/reddit/models/Duplicates/index.ts": function(e, t, s) {
			"use strict";

			function r(e, t) {
				return `${e}-sort[${t.sort}]-crossposts_only[${t.crossposts_only}]`
			}
			s.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/models/HatefulContentFilters/index.ts": function(e, t, s) {
			"use strict";
			var r;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Off = "OFF", e.Lenient = "LENIENT", e.Moderate = "MODERATE", e.Strict = "STRICT"
				}(r || (r = {}))
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, i = s("./node_modules/lodash/isEqual.js"),
				n = s.n(i),
				o = s("./node_modules/lodash/merge.js"),
				d = s.n(o),
				a = s("./node_modules/lodash/pick.js"),
				c = s.n(a),
				u = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/comment/constants.ts"),
				b = s("./src/reddit/actions/contentGate.ts"),
				p = s("./src/reddit/actions/frontpage/constants.ts"),
				m = s("./src/reddit/actions/header.ts"),
				f = s("./src/reddit/actions/modQueue/constants.ts"),
				O = s("./src/reddit/actions/pages/constants.ts"),
				_ = s("./src/reddit/actions/pages/modListing/constants.ts"),
				h = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				T = s("./src/reddit/actions/pages/postCreation.ts"),
				E = s("./src/reddit/actions/pages/postDraft.ts"),
				P = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				g = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				C = s("./src/reddit/actions/pages/profilePosts.ts"),
				I = s("./src/reddit/actions/pages/search/index.ts"),
				j = s("./src/reddit/actions/pages/subreddit.ts"),
				y = s("./src/reddit/actions/pages/topic.ts"),
				S = s("./src/reddit/actions/postCreation/constants.ts"),
				D = s("./src/reddit/actions/postDraft.ts"),
				A = s("./src/reddit/actions/preferences.ts"),
				v = s("./src/reddit/actions/redditEmbed.ts"),
				R = s("./src/reddit/actions/search.ts"),
				N = s("./src/reddit/actions/structuredStyles/constants.ts"),
				x = s("./src/reddit/actions/subreddit.ts"),
				w = s("./src/reddit/actions/users.ts"),
				k = s("./src/reddit/constants/postLayout.ts"),
				L = s("./src/reddit/constants/preferences.ts"),
				F = s("./src/reddit/constants/theme.ts"),
				M = s("./src/reddit/models/PostCreationForm/index.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				V = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(r || (r = {}));
			const U = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "enableFollowers", "feedRecommendationsEnabled", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "liveBarRecommendationsEnabled", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...L.a, "loginOtpEnabled"],
				q = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: V.a,
					commentMode: M.i.RICH_TEXT,
					countryCode: "",
					badCommentAutocollapse: u.n.OFF,
					layout: k.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: u.w.CONFIDENCE,
					editorMode: M.i.RICH_TEXT,
					enableFollowers: !0,
					geopopular: void 0,
					globalTheme: F.a,
					hamburgerTray: void 0,
					hasSeenCustomizeFlyout: !0,
					hideNSFW: !0,
					ignoreSuggestedSort: !1,
					labelNSFW: !0,
					liveBarRecommendationsEnabled: !0,
					loginOtpEnabled: !1,
					markMessagesRead: !0,
					nightmode: !1,
					openPostInNewTab: !1,
					over18: !1,
					profileLayout: void 0,
					reduceAnimationsFromAwards: !1,
					rpanDuDismissalTime: void 0,
					showActiveCommunities: !0,
					showPresence: !1,
					showRpanDu: !0,
					showTwitter: !1,
					sort: u.db.Hot,
					stylesEnabled: !0,
					subreddit: {},
					subscriptionsPinned: void 0,
					surveyLastSeenTime: void 0,
					thirdPartyDataPersonalizedAds: !0,
					thirdPartyPersonalizedAds: !0,
					thirdPartySiteDataPersonalizedAds: !0,
					thirdPartySiteDataPersonalizedContent: !0,
					showLocationBasedRecommendations: !0,
					topContentDismissalTime: 0,
					topContentTimesDismissed: 0,
					rememberCommunitySort: !1,
					useMarkdown: !1,
					gatedSubredditOptIn: !1,
					quarantineOptIn: !1
				},
				B = {
					rpanDuDismissalTime: void 0,
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				H = (e, t) => {
					if (!t) return e;
					const s = c()({
							...t.account,
							...t
						}, U),
						r = t.subreddit,
						i = {
							...e.subreddit
						};
					Object.keys(r || {}).forEach(e => {
						i[e] = {
							...B,
							...r && r[e]
						}
					});
					const o = {
						...e,
						...s,
						subreddit: i
					};
					if (o.useMarkdown !== e.useMarkdown) {
						const e = o.useMarkdown ? M.i.MARKDOWN : M.i.RICH_TEXT;
						o.editorMode = e, o.commentMode = e
					}
					return n()(o, e) ? e : o
				},
				Q = (e, t, s) => H(e, {
					subreddit: {
						[t]: {
							...B,
							...e.subreddit[t],
							...s
						}
					}
				});
			t.c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.o:
					case l.v: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							commentMode: s
						}
					}
					case S.s:
					case S.Q: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							editorMode: s
						}
					}
					case m.d:
						return {
							...e, subscriptionsPinned: !0
						};
					case m.e:
						return {
							...e, subscriptionsPinned: !1
						};
					case D.g: {
						const {
							kind: s
						} = t.payload;
						return {
							...e,
							editorMode: s === G.b.Markdown ? M.i.MARKDOWN : M.i.RICH_TEXT
						}
					}
					case A.h: {
						const {
							layout: s
						} = t.payload;
						return e.layout === s ? e : {
							...e,
							layout: s
						}
					}
					case A.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case A.p: {
						const {
							layout: s,
							subredditId: r
						} = t.payload;
						return Q(e, r, {
							layout: s
						})
					}
					case A.f:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case A.m:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case b.j:
						return {
							...e, over18: !0
						};
					case A.c:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case A.i:
						return void 0 !== t.payload ? {
							...e,
							nightmode: t.payload.nightmode
						} : e;
					case b.i:
						return {
							...e, gatedSubredditOptIn: t.payload
						};
					case b.k:
						return {
							...e, quarantineOptIn: t.payload
						};
					case A.r:
						if (void 0 !== t.payload) {
							const {
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							} = t.payload;
							return {
								...e,
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							}
						}
						return e;
					case N.d:
						return t.payload.isNightmodeOn ? {
							...e,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : e;
					case N.e:
						return t.payload.nightmodeTempUpdated ? {
							...e,
							nightmode: !0,
							nightmodeTempUpdated: !1
						} : e;
					case A.g:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case A.d:
						return void 0 !== t.payload ? {
							...e,
							collapsedTraySections: d()({}, e.collapsedTraySections, t.payload)
						} : e;
					case b.b:
					case b.c:
					case b.l:
					case b.m:
					case b.h:
					case b.a:
					case b.n:
					case _.e:
					case _.h:
					case O.a:
					case O.e:
					case O.b:
					case O.f:
					case O.d:
					case O.h:
					case p.c:
					case j.SUBREDDIT_LOADED:
					case h.b:
					case h.a:
					case P.e:
					case g.e:
					case g.b:
					case C.PROFILE_POSTS_LOADED:
					case p.g:
					case x.i:
					case R.e:
					case v.b:
					case T.PAGE_LOADED:
					case E.PAGE_LOADED:
					case A.j:
					case A.b:
					case I.c:
					case A.a:
					case w.c:
					case y.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? H(e, t.payload.preferences) : e;
					case A.q: {
						const {
							subredditId: s,
							prefs: r
						} = t.payload;
						return Q(e, s, r)
					}
					case P.d:
					case g.d:
					case g.a:
					case C.PROFILE_POSTS_FAILED: {
						let s = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: r,
								showPresence: i
							} = t.payload.account;
							e.nightmode !== r && (s = {
								...s,
								nightmode: r
							}), e.showPresence !== i && (s = {
								...s,
								showPresence: i
							})
						}
						return s
					}
					case f.h:
					case f.j:
					case f.i:
					case f.g:
					case f.f:
					case f.s:
					case f.r:
					case f.u:
					case f.v:
					case f.B:
					case f.A:
						return t.payload && t.payload.response && t.payload.response.preferences ? H(e, t.payload.preferences) : e;
					case A.n: {
						const s = t.payload,
							{
								enableFollowers: r,
								showActiveCommunities: i
							} = s.additional;
						let n = e;
						return e.enableFollowers !== r && (n = {
							...n,
							enableFollowers: r
						}), e.showActiveCommunities !== i && (n = {
							...n,
							showActiveCommunities: i
						}), n
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/routes/postCreation/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return l
			}));
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/loadableAction/index.ts"),
				o = s("./src/reddit/routes/postCreation/constants.ts");
			const d = [o.b, o.c, o.a],
				a = Object(r.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/PostCreation/index.tsx"
					}
				}),
				c = e => `/${e}/submit`,
				u = (e, t) => {
					return o.c.replace(/:subredditName/, e) + (t ? `?collection=${t}` : "")
				},
				l = e => o.a.replace(/:profileName/, e),
				b = {
					action: Object(n.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: a,
					chunk: i.u.POST_CREATION,
					exact: !0,
					meta: {
						name: i.Sb.POST_CREATION
					},
					path: d,
					prefetches: [i.u.COMMENTS_PAGE]
				};
			t.a = b
		},
		"./src/reddit/selectors/experiments/crosspostRecommendations.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "e", (function() {
				return O
			}));
			var r = s("./src/lib/isUrl/index.ts"),
				i = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				d = s("./src/reddit/helpers/isCrosspost.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/selectors/activeModal.ts"),
				u = s("./src/reddit/selectors/experiments/index.ts"),
				l = s("./src/reddit/selectors/posts.ts");
			const b = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: u.e,
						experimentName: n.Qe
					}) === n.Kd
				},
				p = e => !e.media || e.media.type !== a.o.RTJSON && e.media.type !== a.o.TEXT ? "" : e.media.markdownContent,
				m = e => !e.media && e.source && Object(r.a)(e.source.url) ? e.source.displayText : "",
				f = (e, t) => {
					const s = Object(l.G)(e, {
						postId: t
					});
					return s && !s.isSponsored && s.isCrosspostable && !Object(d.a)(s) && Object(c.c)(i.a)(e)
				},
				O = e => {
					var t;
					return !!(null === (t = e.features) || void 0 === t ? void 0 : t.shouldTryToShowCrosspostModal)
				}
		},
		"./src/redditGQL/operations/FetchContentControls.json": function(e) {
			e.exports = JSON.parse('{"id":"58b71dbd3384"}')
		},
		"./src/redditGQL/operations/OpenAISubRecWithDetail.json": function(e) {
			e.exports = JSON.parse('{"id":"75d86d72b7b4"}')
		},
		"./src/redditGQL/operations/ProfileFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"50cb3ed75c5e"}')
		},
		"./src/redditGQL/operations/UpdateHatefulContentFilters.json": function(e) {
			e.exports = JSON.parse('{"id":"026bf4f1acc7"}')
		},
		"./src/redditGQL/operations/UpdatePostRequirements.json": function(e) {
			e.exports = JSON.parse('{"id":"8732ab4560ce"}')
		},
		"./src/redditGQL/operations/WhereToPostSubRec.json": function(e) {
			e.exports = JSON.parse('{"id":"ccdee2f3b85a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.92028e7229546a7631b0.js.map