// https://www.redditstatic.com/desktop2x/MultiredditEditModal.ebf76d38b573d1f3d940.js
// Retrieved at 4/19/2022, 1:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MultiredditEditModal"], {
		"./src/reddit/actions/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "morePostsFailed", (function() {
				return q
			})), r.d(t, "morePostsLoaded", (function() {
				return D
			})), r.d(t, "morePostsPending", (function() {
				return G
			})), r.d(t, "moreOfMyMultiRequested", (function() {
				return W
			})), r.d(t, "myMultiredditsPending", (function() {
				return U
			})), r.d(t, "myMultiredditsReceived", (function() {
				return A
			})), r.d(t, "myMultiredditsRequested", (function() {
				return K
			})), r.d(t, "createFailure", (function() {
				return H
			})), r.d(t, "createPending", (function() {
				return z
			})), r.d(t, "createSuccess", (function() {
				return Q
			})), r.d(t, "createRequested", (function() {
				return J
			})), r.d(t, "reloadCurrentMultiredditFeedRequested", (function() {
				return B
			})), r.d(t, "duplicateFailure", (function() {
				return X
			})), r.d(t, "duplicatePending", (function() {
				return $
			})), r.d(t, "duplicateSuccess", (function() {
				return V
			})), r.d(t, "duplicateRequested", (function() {
				return Z
			})), r.d(t, "addSubredditPending", (function() {
				return Y
			})), r.d(t, "addSubredditSuccess", (function() {
				return ee
			})), r.d(t, "addSubredditFailure", (function() {
				return te
			})), r.d(t, "addSubredditRequested", (function() {
				return re
			})), r.d(t, "removeSubredditPending", (function() {
				return ie
			})), r.d(t, "removeSubredditSuccess", (function() {
				return se
			})), r.d(t, "removeSubredditFailure", (function() {
				return ne
			})), r.d(t, "removeSubredditRequested", (function() {
				return de
			})), r.d(t, "deleteFailure", (function() {
				return ae
			})), r.d(t, "deletePending", (function() {
				return oe
			})), r.d(t, "deleteSuccess", (function() {
				return le
			})), r.d(t, "deleteRequested", (function() {
				return ce
			})), r.d(t, "editFailure", (function() {
				return ue
			})), r.d(t, "editPending", (function() {
				return me
			})), r.d(t, "editSuccess", (function() {
				return pe
			})), r.d(t, "editRequested", (function() {
				return be
			})), r.d(t, "subredditRecommendationsFailure", (function() {
				return fe
			})), r.d(t, "subredditRecommendationsPending", (function() {
				return he
			})), r.d(t, "subredditRecommendationsSuccess", (function() {
				return xe
			})), r.d(t, "recommendationsRequested", (function() {
				return ye
			}));
			var i = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				n = r.n(s),
				d = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				l = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makeListingKey/index.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/actions/pages/multireddit/index.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/constants/parameters.ts"),
				f = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/lib/omitHeaders/index.ts"),
				x = r("./src/reddit/constants/headers.ts"),
				y = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				g = r("./src/lib/makeGqlRequest/index.ts"),
				O = r("./src/redditGQL/operations/AllUserMultireddits.json"),
				j = (e, t) => Object(g.a)(e, {
					...O,
					variables: t
				}),
				_ = r("./src/reddit/endpoints/page/multiredditListing.ts"),
				v = r("./src/reddit/endpoints/subreddit/recommendations.ts"),
				w = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				k = r("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				C = r("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				N = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				T = e => {
					let t = e.over_18 || !1;
					if (!t)
						for (const d of e.subreddits)
							if (d.data.over_18) {
								t = !0;
								break
							} let r = e.quarantine || !1;
					if (!r)
						for (const d of e.subreddits) {
							const e = (d.data.audience_target || "").split(",");
							if (d.data.quarantine || e.indexOf("unsafe") > -1) {
								r = !0;
								break
							}
						}
					const i = e.subreddits.map(e => {
							const t = e.data,
								{
									name: r,
									display_name: i
								} = t;
							return {
								id: r,
								displayName: i.toLowerCase()
							}
						}).sort((e, t) => e.displayName.localeCompare(t.displayName)),
						s = i.filter(e => !e.displayName.startsWith(a.lc)).map(e => e.id),
						n = i.filter(e => e.displayName.startsWith(a.lc)).map(e => e.id);
					return {
						created: e.created_utc,
						description: e.description_md,
						descriptionHtml: e.description_html,
						descriptionRtJson: null,
						displayText: e.display_name,
						followerCount: e.num_subscribers,
						icon: e.icon_url,
						isFavorited: !!e.is_favorited,
						isFollowed: !1,
						isNSFW: t,
						isQuarantined: r,
						name: e.name,
						ownerId: e.owner_id,
						profileIds: n,
						subredditCount: e.subreddits.length,
						subredditIds: s,
						url: e.path.toLowerCase(),
						visibility: e.visibility
					}
				},
				S = r("./src/reddit/models/Multireddit/index.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				F = r("./src/reddit/selectors/multireddit.ts"),
				P = r("./src/reddit/selectors/platform.ts"),
				I = r("./src/reddit/selectors/subreddit.ts"),
				L = r("./src/reddit/selectors/user.ts"),
				M = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				R = r("./src/reddit/actions/multireddit/constants.ts");
			const q = Object(l.a)(R.q),
				D = Object(l.a)(R.r),
				G = Object(l.a)(R.s),
				W = e => async (t, r, i) => {
					const {
						gqlContext: s
					} = i, {
						sort: n = a.X.HOT,
						multiredditName: d,
						username: o
					} = e, l = r(), u = l.platform.currentPage, m = u ? u.queryParams : {}, p = Object(F.d)(l, {
						multiredditName: d,
						username: o
					}), b = Object(c.a)(p.url, n, m), f = l.listings.postOrder.loadMore[b];
					if (!f) return;
					const h = l.listings.postOrder.api.pending[b],
						x = l.listings.postOrder.fetchedTokens,
						y = x[b] && x[b][f.token] || !1;
					if (h || y) return;
					t(G({
						key: b,
						fetchedToken: f.token
					}));
					const g = p.url.replace(/\/$/, ""),
						O = m.t ? m.t.toUpperCase() : void 0,
						j = {
							after: f.token,
							includeIdentity: !1,
							includeSources: !1,
							path: g,
							range: O,
							sort: n.toUpperCase()
						},
						v = await Object(_.a)(s(), j),
						{
							data: k
						} = v.body,
						N = Object(C.a)(k);
					v.ok && k && k.multireddit ? t(D({
						fetchedToken: f.token,
						key: b,
						meta: l.meta,
						...N,
						...Object(w.a)(l, b, N),
						multiredditsModelsState: l.multireddits.models
					})) : t(q({
						error: {
							type: a.J.NOT_FOUND_ERROR
						},
						fetchedToken: f.token,
						key: b,
						...v.body,
						...Object(w.a)(l, b, N)
					}))
				}, U = Object(l.a)(R.t), A = Object(l.a)(R.u), K = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (r, i, s) => {
						let {
							apiContext: n,
							gqlContext: d
						} = s;
						const a = i();
						if (!Object(L.k)(a)) return;
						if (!e && Object(F.h)(a) || Object(F.i)(a)) return;
						r(U());
						const o = await j(d(), {
							includeSources: t
						});
						if (o.ok) {
							const e = o.body.data.identity.allMultireddits.edges.map(e => e.node),
								t = Object(k.b)(e);
							r(A({
								...t,
								multiredditsModelsState: a.multireddits.models
							}))
						}
					}
				}, H = Object(l.a)(R.e), z = Object(l.a)(R.f), Q = Object(l.a)(R.g), J = e => {
					let {
						description: t,
						displayName: r,
						shouldNavigate: s
					} = e;
					return async (e, n, o) => {
						let {
							apiContext: l
						} = o;
						const c = n(),
							m = Object(L.k)(c);
						if (!m) return;
						e(z());
						const b = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/multi`),
							data: {
								model: JSON.stringify({
									description_md: r,
									display_name: t,
									visibility: "private",
									subreddits: []
								})
							},
							method: a.kb.POST
						}))(l(), r, t);
						if (b.ok) {
							const {
								id: t
							} = m;
							if (await e(Q({
									multireddit: T(b.body.data),
									multiredditsModelsState: c.multireddits.models,
									userId: t
								})), s) {
								e(Object(u.f)());
								const t = b.body.data.path.toLowerCase();
								await e(Object(d.b)(t))
							}
							e(Object(p.f)({
								text: i.fbt._("Custom feed created!", null, {
									hk: "258cY9"
								})
							}))
						} else e(H(b.error))
					}
				}, B = () => async (e, t, r) => {
					let {
						apiContext: i
					} = r;
					const s = t(),
						d = Object(L.k)(s),
						o = Object(P.i)(s) ? Object(P.m)(s) : Object(P.b)(s),
						l = o && o.routeMatch && o.routeMatch.match;
					if (!l) return;
					const u = l.params,
						p = u.sort || a.X.HOT,
						{
							multiredditName: f,
							username: h
						} = u;
					if (!f) return;
					const x = Object(S.h)((h || d && d.displayText || "").toLowerCase(), f.toLowerCase()),
						{
							queryParams: y
						} = l,
						g = Object(c.a)(x, p, y),
						O = b.E in y && y[b.E].toUpperCase() || "",
						j = a.jc[O] || !1,
						_ = Object(L.k)(s);
					(h || _ && _.displayText) && await e(Object(m.multiredditFeedRequested)(g, (h || _.displayText).toLowerCase(), f.toLowerCase(), {
						...n()(y, b.n),
						...n()(y, b.m),
						sort: p,
						t: Object(M.a)(p, j)
					}))
				}, X = Object(l.a)(R.k), $ = Object(l.a)(R.l), V = Object(l.a)(R.m), Z = e => {
					let {
						description: t,
						displayName: r,
						fromName: s,
						fromUsername: n
					} = e;
					return async (e, o, l) => {
						let {
							apiContext: c
						} = l;
						const m = o(),
							b = Object(L.k)(m);
						if (!b || !b.displayText) return;
						const g = Object(S.h)((n || b.displayText).toLowerCase(), s.toLowerCase());
						e($());
						const O = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/multi/copy`),
							data: {
								description_md: t.description,
								display_name: t.displayName,
								expand_srs: !0,
								from: t.from
							},
							method: a.kb.POST
						}))(c(), {
							from: g,
							displayName: r,
							description: t
						});
						if (O.ok) {
							const t = T(O.body.data);
							e(Object(u.f)()), e(V({
								multireddit: t,
								multiredditsModelsState: m.multireddits.models,
								userId: b.id
							})), e(Object(p.f)({
								text: i.fbt._("Custom feed duplicated!", null, {
									hk: "2u48X"
								}),
								buttonText: i.fbt._("Go there", null, {
									hk: "4sXZMm"
								}),
								buttonAction: Object(d.b)(t.url)
							}))
						} else e(X(O.error)), e(Object(p.f)({
							text: i.fbt._("Something went wrong duplicating {multiName}", [i.fbt._param("multiName", s)], {
								hk: "4bzN2D"
							})
						}))
					}
				}, Y = Object(l.a)(R.b), ee = Object(l.a)(R.c), te = Object(l.a)(R.a), re = e => {
					let {
						communityInfo: t,
						identifier: r,
						multiredditNames: s
					} = e;
					return async (e, n, d) => {
						let {
							apiContext: l
						} = d;
						const c = n(),
							m = Object(L.k)(c);
						if (!m || c.multireddits.api.addSubreddit.pending) return;
						e(Y({
							name: r.name
						}));
						const {
							displayText: b
						} = m;
						if (!b) return;
						const g = s.map(e => `/user/${b.toLowerCase()}/m/${e.toLowerCase()}`).join(","),
							O = `${"profile"===r.type?a.lc:""}${r.name}`,
							j = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
								endpoint: Object(y.a)(`${e.apiUrl}/api/multi/bulk_add/r/${t}`),
								data: {
									paths: r
								},
								method: a.kb.PUT
							}))(l(), O, g);
						if (j.ok) {
							const n = Object(I.K)(c, {
									identifier: r
								}) || t && t.id || "",
								d = s.map(e => Object(S.h)(b, e));
							e(Object(u.f)()), e(Object(p.f)({
								text: i.fbt._({
									"*": "Successfully added {communityName} to {number} custom feeds!",
									_1: "Successfully added {communityName} to 1 custom feed!"
								}, [i.fbt._param("communityName", `${"subreddit"===r.type?o.d.subreddit:o.d.profile}${r.name}`), i.fbt._plural(s.length, "number")], {
									hk: "9EXsM"
								})
							})), await e(ee({
								communityInfo: t,
								id: n,
								multipaths: d,
								type: r.type
							})), 1 === s.length && await e(B())
						} else {
							e(te(j.error));
							let t = i.fbt._("Sorry, something went wrong adding {subredditName}.", [i.fbt._param("subredditName", r.name)], {
								hk: "ERdWO"
							});
							j.body && (j.body.reason === R.d.TooManySubreddits ? t = i.fbt._("Maximum communities reached", null, {
								hk: "2eguyW"
							}) : j.body.reason === R.d.InvalidSrQuarantine && (t = i.fbt._("{communityname} is invalid because it is quarantined", [i.fbt._param("communityname", `${"subreddit"===r.type?o.d.subreddit:o.d.profile}${r.name}`)], {
								hk: "407xmS"
							}))), e(Object(p.f)({
								text: t,
								kind: E.b.Error
							}))
						}
					}
				}, ie = Object(l.a)(R.w), se = Object(l.a)(R.x), ne = Object(l.a)(R.v), de = e => {
					let {
						id: t,
						multiredditName: r,
						name: s,
						type: n
					} = e;
					return async (e, d, o) => {
						let {
							apiContext: l
						} = o;
						const c = d(),
							m = Object(L.k)(c);
						if (!m || !m.displayText || c.multireddits.api.removeSubreddit.pending) return;
						e(ie({
							id: t
						}));
						const {
							displayText: b
						} = m, g = Object(S.h)(b, r), O = `${"profile"===n?a.lc:""}${s}`, j = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/multi${r}r/${t}`),
							method: a.kb.DELETE
						}))(l(), O, g);
						j.ok ? (e(Object(u.f)()), e(se({
							id: t,
							multipath: g,
							type: n
						})), e(Object(p.f)({
							text: i.fbt._("{subredditname} removed from your custom feed!", [i.fbt._param("subredditname", s)], {
								hk: "uaWNe"
							}),
							buttonText: i.fbt._("undo", null, {
								hk: "3HH7IT"
							}),
							buttonAction: re({
								identifier: {
									name: s,
									type: n
								},
								multiredditNames: [r]
							})
						})), e(B())) : (e(ne(j.error)), e(Object(p.f)({
							text: i.fbt._("Sorry, something went wrong removing {subredditName}.", [i.fbt._param("subredditName", s)], {
								hk: "1E1rKm"
							})
						})))
					}
				}, ae = Object(l.a)(R.h), oe = Object(l.a)(R.i), le = Object(l.a)(R.j), ce = e => async (t, r, s) => {
					let {
						apiContext: n
					} = s;
					const o = r();
					if (!Object(L.k)(o)) return;
					t(oe());
					const l = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${t}`),
						method: a.kb.DELETE
					}))(n(), e);
					l.ok ? (await t(le(e)), t(Object(u.f)()), await t(Object(d.b)("/")), t(Object(p.f)({
						text: i.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(ae(l.error))
				}, ue = Object(l.a)(R.n), me = Object(l.a)(R.o), pe = Object(l.a)(R.p), be = e => {
					let {
						description: t,
						displayText: r,
						multipath: s,
						visibility: n
					} = e;
					return async (e, d, o) => {
						let {
							apiContext: l
						} = o;
						const c = d();
						if (!Object(L.Q)(c)) return;
						e(me());
						const m = await (e => {
							let {
								context: t,
								description: r,
								displayText: i,
								multipath: s,
								visibility: n
							} = e;
							return Object(f.a)(Object(h.a)(t, [x.a]), {
								endpoint: Object(y.a)(`${t.apiUrl}/api/multi${s}`),
								data: {
									model: JSON.stringify({
										description_md: r,
										display_name: i,
										visibility: n
									}),
									expand_srs: !0
								},
								method: a.kb.PUT
							})
						})({
							context: l(),
							description: t,
							displayText: r,
							multipath: s,
							visibility: n
						});
						m.ok ? (await e(pe(T(m.body.data))), e(Object(u.f)()), e(Object(p.f)({
							text: i.fbt._("Custom feed updated!", null, {
								hk: "39R30f"
							})
						}))) : (e(ue(m.error)), e(Object(p.f)({
							kind: E.b.Error,
							text: i.fbt._("Something went wrong", null, {
								hk: "1Y6lli"
							})
						})))
					}
				}, fe = Object(l.a)(R.z), he = Object(l.a)(R.A), xe = Object(l.a)(R.B), ye = e => {
					let {
						multiredditName: t,
						username: r,
						toExcludeNames: i
					} = e;
					return async (e, s, n) => {
						let {
							gqlContext: d
						} = n;
						const a = s(),
							o = Object(L.k)(a);
						if (!(r || o && o.displayText)) return;
						const l = Object(S.h)(r || o.displayText, t),
							c = a.multireddits.models[l];
						if (!c || !c.subredditIds) return;
						e(he());
						const u = i && i.reduce((e, t) => {
								const r = Object(I.E)(a, t) || Object(I.F)(a, t);
								return r ? [...e, r] : e
							}, []),
							m = await Object(v.a)(d(), {
								count: R.y,
								subredditIds: c.subredditIds,
								toExclude: u
							});
						if (m.ok) {
							const {
								data: t
							} = m.body;
							e(xe({
								multipath: l,
								subreddits: Object(N.b)(t)
							}))
						} else e(fe(m.error))
					}
				}
		},
		"./src/reddit/actions/pages/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "multiredditFeedPending", (function() {
				return F
			})), r.d(t, "multiredditFeedLoaded", (function() {
				return P
			})), r.d(t, "multiredditFeedFailed", (function() {
				return I
			})), r.d(t, "multiredditFeedRequested", (function() {
				return L
			})), r.d(t, "multiredditRequested", (function() {
				return M
			}));
			var i = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				n = r.n(s),
				d = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/lib/addQueryParams/index.ts"),
				o = r("./src/reddit/actions/multireddit/index.ts"),
				l = r("./src/reddit/endpoints/page/multiredditListing.ts"),
				c = r("./src/lib/constants/index.ts"),
				u = r("./src/reddit/actions/platform.ts"),
				m = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/actions/users.ts"),
				b = r("./src/reddit/constants/parameters.ts"),
				f = r("./src/reddit/constants/postLayout.ts"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				x = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				y = r("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				g = r("./src/reddit/models/Multireddit/index.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/models/User/index.ts"),
				_ = r("./src/reddit/selectors/multireddit.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				w = r("./src/lib/makeActionCreator/index.ts"),
				k = r("./src/lib/makeListingKey/index.ts"),
				C = r("./src/reddit/actions/ads/index.ts"),
				N = r("./src/reddit/helpers/canonicalUrls.ts"),
				T = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				E = r("./src/reddit/actions/pages/multireddit/constants.ts");
			const F = Object(w.a)(E.c),
				P = Object(w.a)(E.b),
				I = Object(w.a)(E.a),
				L = (e, t, r, s, n) => async (d, a, u) => {
					const {
						gqlContext: p
					} = u, b = a();
					if (b.listings.postOrder.api.pending[e]) return;
					d(F({
						key: e
					})), s.layout = f.e[Object(h.R)(b, {})];
					const x = {
							path: Object(g.h)(t, r).replace(/\/$/, ""),
							includeIdentity: !0,
							includeSources: !0,
							sort: s.sort ? s.sort.toUpperCase() : void 0,
							range: s.t ? s.t.toUpperCase() : void 0
						},
						j = await Object(T.a)("multireddit", () => Object(l.a)(p(), x)),
						{
							data: _
						} = j.body,
						w = `error-${e}`;
					if (j.ok && _) {
						const i = Object(y.a)(_);
						if (!_.multireddit) return n && d(m.g(w)), void d(I({
							...i,
							error: {
								type: c.J.NOT_FOUND_ERROR
							},
							key: e
						}));
						d(P({
							key: e,
							meta: b.meta,
							...i,
							account: i.account || Object(v.k)(b),
							multiredditsModelsState: b.multireddits.models
						})), n && d(m.g(w)), d(Object(o.recommendationsRequested)({
							multiredditName: r,
							username: t
						})), window.addEventListener("load", () => {
							d(Object(C.b)(S.a.MULTIREDDIT))
						})
					} else n && d(m.f({
						id: w,
						kind: O.b.Error,
						text: i.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: i.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: L(e, t, r, s, n)
					}))
				}, M = (e, t) => async (r, i) => {
					const {
						multiredditName: s
					} = e.params;
					let {
						username: o
					} = e.params;
					if (!o) {
						let t = i();
						if (t.user.session && t.user.session.unsafeLoggedOut) return void r(Object(d.c)("/"));
						!t.user.account && t.user.session && await r(p.t()), t = i();
						const {
							account: n
						} = t.user;
						if (!n) return void r(Object(d.c)("/"));
						let l = `/user/${o=Object(j.e)(n)}/m/${s}`;
						const {
							sort: c
						} = e.params;
						return l += c ? `/${c}` : "", void r(Object(d.c)(Object(a.a)(l, e.queryParams)))
					}
					const {
						sort: l = c.X.HOT
					} = e.params, m = {
						multiredditName: s,
						username: o
					}, f = i();
					o || (o = f.user.account ? Object(j.e)(f.user.account) : "");
					const h = Object(g.h)(o, s),
						y = Object(k.a)(h, l, e.queryParams),
						O = f.listings.postOrder.ids[y],
						v = f.listings.postOrder.api.error[y],
						w = f.listings.postOrder.api.pending[y],
						T = b.E in e.queryParams && e.queryParams[b.E].toUpperCase() || "",
						E = T in c.jc && c.jc[T];
					if (w || O && !v && !t) return void(O && (r(u.m({
						title: Object(_.f)(i(), m)
					})), f.sidebarPromotedPosts.firstFetch || r(Object(C.b)(S.a.MULTIREDDIT))));
					await r(L(y, o, s, {
						...n()(e.queryParams, b.n),
						...n()(e.queryParams, b.m),
						sort: l,
						t: Object(x.a)(l, E)
					}, !0));
					const F = i();
					Object(_.d)(F, m) && r(u.m({
						title: Object(_.f)(i(), m)
					})), Object(N.c)(F, r, e)
				}
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, r) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, r) {
			"use strict";
			var i = r("./node_modules/react/index.js"),
				s = r.n(i),
				n = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				a = r("./src/reddit/components/CharacterCountdown/index.m.less"),
				o = r.n(a);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(d.b, {
				className: Object(n.a)(e.className, o.a.container, e.text.length >= e.maxChars ? o.a.mOverflow : null)
			}, l._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [l._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/MultiredditEditModal/index.m.less": function(e, t, r) {
			e.exports = {
				formRow: "_2gkalig1PLljG4GN4W8WM3",
				label: "_1AaOOejGpRapu6YBN0QCG",
				labelTitle: "tWJINFQfSJzC0cPWNQqxD",
				labelDescription: "_3HtLE1J0ajaRbZMmNcmdg",
				dropdownBtn: "_3wGQg3fudI_VWWiwF0dSNb",
				disabled: "S4dxaNRivrxeHqQXiMbyI",
				descriptionTextarea: "_3y_4TOl8q_L68lwJ8fK1jh",
				displayTextError: "_1nFUeamNqzwbdDKEVMBqRJ",
				footer: "_1NdPly0N7QGtDeWtD018pL",
				error: "_3KJ-oOx30gIAisW5g4KFE4",
				errorText: "_3UGftld41e4Bn7x4r-TXbV",
				loadingIcon: "_117rTJRmu6rzru_d4uQSTE"
			}
		},
		"./src/reddit/components/MultiredditEditModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var i = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				n = r.n(s),
				d = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/higherOrderComponents/asModal/index.tsx"),
				l = r("./src/higherOrderComponents/asTooltip.tsx"),
				c = r("./src/lib/classNames/index.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/actions/multireddit/index.ts"),
				p = r("./src/reddit/actions/tooltip.ts"),
				b = r("./src/reddit/components/CharacterCountdown/index.tsx"),
				f = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = r("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				x = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/controls/Dropdown/index.tsx"),
				O = r("./src/reddit/controls/Dropdown/Row.tsx"),
				j = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = r("./src/reddit/controls/ToggleSwitch/index.tsx"),
				v = r("./src/reddit/helpers/multireddit/index.ts"),
				w = r("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				k = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				C = r("./src/reddit/models/Multireddit/index.ts"),
				N = r("./src/reddit/selectors/multireddit.ts"),
				T = r("./src/reddit/selectors/tooltip.ts"),
				S = r("./src/reddit/components/MultiredditEditModal/index.m.less"),
				E = r.n(S);
			const F = Object(l.a)(g.a),
				P = () => i.fbt._("public", null, {
					hk: "2SLZ4Q"
				}),
				I = () => i.fbt._("private", null, {
					hk: "3E0m6i"
				}),
				L = 12,
				M = "multi-edit-modal-visibility",
				R = Object(a.c)({
					apiFetched: e => e.multireddits.api.edit.fetched,
					apiPending: e => e.multireddits.api.edit.pending,
					isDropdownOpen: Object(T.b)(M),
					multireddit: x.e,
					myMultireddits: N.j
				}),
				q = Object(x.u)(),
				D = Object(d.b)(R, e => ({
					edit: t => e(Object(m.editRequested)(t)),
					onClose: () => e(Object(u.f)()),
					onToggleDropdown: () => e(Object(p.h)({
						tooltipId: M
					}))
				}), (e, t, r) => ({
					...e,
					...t,
					...r,
					onSubmit: r => {
						let {
							visibility: i,
							description: s,
							displayText: n
						} = r;
						e.multireddit && (e.multireddit.description !== s || e.multireddit.displayText !== n || e.multireddit.visibility !== i ? t.edit({
							description: s,
							displayText: n,
							multipath: e.multireddit.url,
							visibility: i
						}) : t.onClose())
					}
				}));
			class G extends n.a.Component {
				constructor(e) {
					super(e), this.onDescriptionChange = e => {
						this.setState({
							description: e.target.value
						})
					}, this.onDisplayTextChange = e => {
						this.setState({
							displayText: e.target.value,
							displayTextError: void 0
						})
					}, this.onShowOnProfileToggle = () => {
						this.setState(e => e.visibility === C.e.Private ? e : {
							...e,
							visibility: e.visibility === C.e.Public ? C.e.Hidden : C.e.Public
						})
					}, this.onRowClick = e => () => {
						this.setState({
							visibility: e
						})
					}, this.checkDisplayTextValidity = () => {
						const {
							myMultireddits: e,
							multireddit: t
						} = this.props, {
							displayText: r
						} = this.state, i = Object(v.a)({
							displayText: r,
							myMultireddits: e,
							thisMultireddit: t
						});
						return !i || (this.setState({
							displayTextError: i
						}), !1)
					}, this.onSubmit = () => {
						const {
							description: e,
							displayText: t,
							visibility: r
						} = this.state;
						this.checkDisplayTextValidity() && this.props.onSubmit({
							visibility: r,
							description: e,
							displayText: t
						})
					};
					const {
						multireddit: t
					} = e;
					this.state = t ? {
						description: t.description || "",
						displayText: t.displayText,
						visibility: t.visibility
					} : {
						description: "",
						displayText: "",
						visibility: C.e.Private
					}
				}
				renderDisplayText() {
					const {
						displayText: e,
						displayTextError: t
					} = this.state;
					return n.a.createElement(f.h, null, n.a.createElement(h.b, {
						label: i.fbt._("custom feed name", null, {
							hk: "1pq8pZ"
						}),
						onBlur: this.checkDisplayTextValidity,
						onChange: this.onDisplayTextChange,
						value: e,
						maxLength: C.c,
						state: t ? h.d.Invalid : void 0,
						isRequired: !0
					}), t ? n.a.createElement("p", {
						className: E.a.displayTextError
					}, t === C.a.SameName ? i.fbt._("A custom feed with that name already exists", null, {
						hk: "1WJHG3"
					}) : t === C.a.TooShort ? i.fbt._("Name must contain at least two alphanumeric characters", null, {
						hk: "3TWc1H"
					}) : i.fbt._("Something went wrong with this name, maybe try something else?", null, {
						hk: "N6k8D"
					})) : n.a.createElement(b.a, {
						maxChars: C.c,
						text: e
					}))
				}
				renderDescription() {
					const {
						description: e
					} = this.state;
					return n.a.createElement(f.h, null, n.a.createElement(h.c, {
						className: E.a.descriptionTextarea,
						label: i.fbt._("description (optional)", null, {
							hk: "4mWEDA"
						}),
						maxLength: C.b,
						onChange: this.onDescriptionChange,
						value: e
					}), n.a.createElement(b.a, {
						maxChars: C.b,
						text: e
					}))
				}
				renderVisibilityDropdown() {
					const {
						props: {
							isDropdownOpen: e,
							onToggleDropdown: t
						},
						state: {
							visibility: r
						}
					} = this;
					return n.a.createElement(f.h, {
						className: E.a.formRow
					}, n.a.createElement("div", {
						className: E.a.label
					}, n.a.createElement("h3", {
						className: E.a.labelTitle
					}, i.fbt._("Custom Feed Privacy", null, {
						hk: "iZuQR"
					})), n.a.createElement("div", {
						className: E.a.labelDescription
					}, i.fbt._("Public Custom Feeds are visible to anyone with the link. Private is only viewable by you, the owner.", null, {
						hk: "1RAkt7"
					}))), n.a.createElement("div", null, n.a.createElement(y.r, {
						className: E.a.dropdownBtn,
						id: M,
						onClick: t
					}, r === C.e.Private ? I() : P(), n.a.createElement(w.b, null)), n.a.createElement(F, {
						isOpen: e,
						isOverlay: !0,
						targetPosition: ["center", "bottom"],
						tooltipId: M,
						tooltipPosition: ["center", "top"]
					}, n.a.createElement(O.b, {
						displayText: I(),
						noIcon: !0,
						onClick: this.onRowClick(C.e.Private),
						isSelected: r === C.e.Private
					}), n.a.createElement(O.b, {
						displayText: P(),
						isSelected: r === C.e.Public || r === C.e.Hidden,
						noIcon: !0,
						onClick: this.onRowClick(C.e.Public)
					}))))
				}
				renderShowOnProfileToggle() {
					const {
						visibility: e
					} = this.state;
					return n.a.createElement(f.h, {
						className: Object(c.a)(E.a.formRow, {
							[E.a.disabled]: e === C.e.Private
						})
					}, n.a.createElement("div", {
						className: E.a.label
					}, n.a.createElement("h3", {
						className: E.a.labelTitle
					}, i.fbt._("Show on profile", null, {
						hk: "3W3DLV"
					})), n.a.createElement("div", {
						className: E.a.labelDescription
					}, i.fbt._("Choose whether this Custom Feed is visible to visitors of your profile", null, {
						hk: "1pxStK"
					}))), n.a.createElement(_.a, {
						className: E.a.toggle,
						disabled: e === C.e.Private,
						on: e === C.e.Public,
						onToggle: this.onShowOnProfileToggle
					}))
				}
				render() {
					const {
						apiPending: e,
						multireddit: t,
						onClose: r
					} = this.props;
					return t ? n.a.createElement(f.e, null, n.a.createElement(f.i, null, n.a.createElement(k.a, null, n.a.createElement(f.q, null, i.fbt._("Edit Custom Feed", null, {
						hk: "3yOOdv"
					})), n.a.createElement("button", {
						onClick: r
					}, n.a.createElement(f.b, null)))), n.a.createElement(f.l, null, this.renderDisplayText(), this.renderDescription(), this.renderVisibilityDropdown(), this.renderShowOnProfileToggle()), n.a.createElement(f.g, {
						className: E.a.footer
					}, n.a.createElement(f.r, {
						onClick: this.onSubmit
					}, e ? n.a.createElement(j.a, {
						className: E.a.loadingIcon,
						sizePx: L
					}) : i.fbt._("done", null, {
						hk: "1uttTA"
					})))) : n.a.createElement("div", {
						className: E.a.error
					}, n.a.createElement("p", {
						className: E.a.errorText
					}, i.fbt._("Sorry, something went wrong", null, {
						hk: "ZPvfZ"
					})))
				}
			}
			t.default = Object(o.a)(q(D(G)))
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_21N5nyVpBzbYCGTZ5WIri4",
				field: "_3K-rjepIoTAwKn_2B6UjSe",
				textareaField: "_3MvsRRj8v7ENJxFd2FRVzJ",
				textareaContainer: "_2q-RFz4xm8SXUM0zMrr8fq",
				mValid: "_2SuoSID5jS_A8otvMZNbUx",
				mInvalid: "_10eyptxJ3JPt74-_F9S7Y2",
				mWhiteField: "ywq-YkM3-987lbv_INHu_",
				control: "f_d5CYdNQxWwaGxH1SK7O",
				hasState: "_2N0IHX_0DbIGyJAPD5co-v",
				textarea: "_3zFItbRAgic4B5QFRuG51C",
				label: "_25QcYBzdEJtMuM4oKa6C_E",
				required: "_237-Cb_7kzH90efX4m0ikl",
				icon: "_3DmUjRewdA0uXlriQWqBi6",
				Invalid: "_1G5fQQh3gLl4hc3DIMA5j3",
				invalid: "_1G5fQQh3gLl4hc3DIMA5j3"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return f
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return g
			}));
			var i = r("./node_modules/react/index.js"),
				s = r.n(i),
				n = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/controls/Input/index.tsx"),
				o = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = r("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = r.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				}).apply(this, arguments)
			}
			const m = d.a.div("icon", c.a),
				p = d.a.textarea("textarea", c.a),
				b = d.a.span("Invalid", c.a);
			var f, h;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(f || (f = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(h || (h = {}));
			const x = e => s.a.createElement("div", {
					className: Object(n.a)(e.isRequired && c.a.required, e.className, {
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[c.a.mValid]: e.state === f.Valid,
							[c.a.mInvalid]: e.state === f.Invalid,
							[c.a.mWhiteField]: e.backgroundColorState === h.WhiteFields
						}
					})
				}, s.a.createElement("label", {
					className: Object(n.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && s.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && s.a.createElement(m, {
					className: Object(n.a)({
						[c.a.mValid]: e.state === f.Valid,
						[c.a.mInvalid]: e.state === f.Invalid
					})
				}, e.state === f.Valid && s.a.createElement(o.a, null), e.state === f.Invalid && s.a.createElement(b, null, "!")))),
				y = e => {
					const {
						backgroundColorState: t,
						className: r,
						inputRef: i,
						isRequired: d,
						label: o,
						onKeyDown: l,
						state: m,
						...p
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: r,
						isRequired: d,
						label: o,
						state: m
					}, s.a.createElement(a.a, u({}, p, {
						className: Object(n.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: i,
						onKeyDown: l
					})))
				},
				g = e => {
					const {
						backgroundColorState: t,
						className: r,
						inputRef: i,
						isRequired: d,
						label: a,
						onKeyDown: o,
						state: l,
						...m
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: r,
						isRequired: d,
						label: a,
						state: l,
						isTextarea: !0
					}, s.a.createElement(p, u({}, m, {
						className: Object(n.a)({
							[c.a.mWhiteField]: e.backgroundColorState === h.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: i,
						onKeyDown: o
					})))
				}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, r) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return d
			})), r.d(t, "p", (function() {
				return a
			})), r.d(t, "n", (function() {
				return o
			})), r.d(t, "o", (function() {
				return l
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "j", (function() {
				return j
			}));
			var i = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				n = r.n(s);
			const d = i.a.section("FormPage", n.a),
				a = i.a.h1("HomePageTitle", n.a),
				o = i.a.button("HomePageBreadcrumb", n.a),
				l = i.a.div("HomePageGroup", n.a),
				c = i.a.h1("FormPageTitle", n.a),
				u = i.a.div("FormPageSection", n.a),
				m = i.a.div("FormGroup", n.a),
				p = i.a.h2("FormGroupTitle", n.a),
				b = i.a.div("FormElement", n.a),
				f = i.a.div("FormGroupDescription", n.a),
				h = i.a.div("FormItem", n.a),
				x = i.a.h3("FormElementTitle", n.a),
				y = i.a.div("FormElementDescription", n.a),
				g = i.a.div("FormElementError", n.a),
				O = i.a.div("FormElementSubGroup", n.a),
				j = i.a.li("FormListItem", n.a)
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			}));
			var i = r("./node_modules/lodash/throttle.js"),
				s = r.n(i),
				n = r("./node_modules/react/index.js"),
				d = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = r("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = r("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = r("./src/reddit/controls/Dropdown/index.m.less"),
				p = r.n(m),
				b = r("./src/reddit/controls/Dropdown/row.m.less"),
				f = r.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends d.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = s()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, r = Object(a.a)(f.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? d.a.createElement(o.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && d.a.createElement("span", {
						className: r
					}, e.children), d.a.createElement("span", {
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText)) : d.a.createElement(u.a, h({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? d.a.createElement("div", null, e.children) : d.a.createElement("span", {
						className: r
					}, e.children)), e.displayText && d.a.createElement("span", {
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && d.a.createElement(c.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && d.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				let {
					className: t,
					...r
				} = e;
				const i = Object(a.a)(f.a.row, t, {
					[f.a.mIsInteractive]: !r.noHover,
					[f.a.mIsSelected]: r.isSelected,
					[f.a.topics]: r.isTopicsStyle
				});
				return d.a.createElement(x, h({
					className: i
				}, r))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, r) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, r) {
			"use strict";
			var i = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/controls/Input/index.m.less"),
				n = r.n(s);
			t.a = i.a.input("input", n.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var i = r("./node_modules/react/index.js"),
				s = r.n(i),
				n = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = r.n(d);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: i = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(n.a)(a.a.loadingIcon, r, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${i}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, r) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, r) {
			"use strict";
			var i = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/controls/InternalLink/index.tsx"),
				n = r("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				d = r.n(n);
			t.a = i.a.wrapped(s.a, "unstyledInternalLink", d.a)
		},
		"./src/reddit/endpoints/page/multiredditListing.ts": function(e, t, r) {
			"use strict";
			var i = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/MultiredditListing.json");
			t.a = (e, t) => Object(i.a)(e, {
				...s,
				variables: t
			})
		},
		"./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts": function(e, t, r) {
			"use strict";
			var i = r("./src/lib/env/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				n = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				d = r("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				a = r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				o = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				l = r("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				c = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				m = r("./src/reddit/models/Post/index.ts");
			t.a = e => {
				const t = {
					account: null,
					dist: 0,
					features: null,
					multireddits: {},
					multiredditsByUser: {},
					pageInfo: null,
					postFlair: {},
					postIds: [],
					postInstances: {},
					posts: {},
					preferences: null,
					profiles: {},
					subreddits: {},
					token: void 0
				};
				if (!e) return t;
				const {
					identity: r,
					multireddit: p
				} = e;
				if (r && (t.account = Object(u.a)(r) || null, t.preferences = Object(l.a)(r.preferences, r.interactions) || null), !p) return t;
				const {
					elements: b
				} = p;
				if (b) {
					t.pageInfo = b.pageInfo;
					for (const {
							node: e
						} of b.edges) {
						if (!Object(m.k)(e)) {
							const t = `Received unhandled element type when processing multireddit data: "${e.__typename}"`;
							Object(i.b)() || console.warn(t), s.c.captureMessage(t);
							continue
						}
						const r = e;
						t.postIds.push(r.id);
						const {
							post: d,
							crosspost: l
						} = r && Object(o.a)(r);
						t.posts[d.id] = d, l && (t.posts[l.id] = l), Object(m.j)(r) || Object(m.i)(r) || (r.authorFlair && (t.postFlair[d.belongsTo.id] || (t.postFlair[d.belongsTo.id] = {}), t.postFlair[d.belongsTo.id][d.author] = Object(n.a)(r.authorFlair)[0]), Object(m.n)(r) && (t.subreddits[r.subreddit.id] || (t.subreddits[r.subreddit.id] = Object(c.a)(r.subreddit)), t.postFlair[r.subreddit.id] || (t.postFlair[r.subreddit.id] = Object(a.a)(r.subreddit))))
					}
				} else t.pageInfo = {
					endCursor: null,
					hasNextPage: !1,
					hasPreviousPage: !1,
					startCursor: null
				};
				t.postIds.length && (t.dist = t.postIds.length), t.pageInfo.hasNextPage && (t.token = t.pageInfo.endCursor || "");
				const {
					multireddits: f,
					multiredditsByUser: h,
					profiles: x,
					subreddits: y
				} = Object(d.a)(p);
				return {
					...t,
					multireddits: f,
					multiredditsByUser: h,
					profiles: {
						...t.profiles,
						...x
					},
					subreddits: {
						...t.subreddits,
						...y
					}
				}
			}
		},
		"./src/reddit/helpers/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var i = r("./src/reddit/models/Multireddit/index.ts");
			const s = e => {
				let {
					displayText: t,
					myMultireddits: r,
					thisMultireddit: s
				} = e;
				return t.replace(/[^0-9A-Za-z]+/gi, "").length < i.d ? i.a.TooShort : r.filter(e => {
					let {
						url: t
					} = e;
					return !s || t !== s.url
				}).map(e => {
					let {
						displayText: t
					} = e;
					return t.toLowerCase()
				}).indexOf(t.trim().toLowerCase()) > -1 ? i.a.SameName : void 0
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, r) {
			"use strict";
			var i = r("./node_modules/react/index.js"),
				s = r.n(i),
				n = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(n.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var i = r("./node_modules/react/index.js"),
				s = r.n(i);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, r) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var i = r("./node_modules/react/index.js"),
				s = r.n(i),
				n = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = r.n(d);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => {
				let {
					className: t,
					isSubreddit: r,
					...i
				} = e;
				return s.a.createElement("svg", o({
					className: Object(n.a)(a.a.dropdown, {
						[a.a.mRedditStyle]: !r
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, i), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = l
		},
		"./src/redditGQL/operations/AllUserMultireddits.json": function(e) {
			e.exports = JSON.parse('{"id":"d5a173c1e5e2"}')
		},
		"./src/redditGQL/operations/MultiredditListing.json": function(e) {
			e.exports = JSON.parse('{"id":"c73526b6558f"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MultiredditEditModal.ebf76d38b573d1f3d940.js.map