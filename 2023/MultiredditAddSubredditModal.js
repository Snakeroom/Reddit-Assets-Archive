// https://www.redditstatic.com/desktop2x/MultiredditAddSubredditModal.68694008e8f3830663ed.js
// Retrieved at 6/7/2023, 1:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MultiredditAddSubredditModal"], {
		"./node_modules/lodash/without.js": function(e, t, r) {
			var i = r("./node_modules/lodash/_baseDifference.js"),
				s = r("./node_modules/lodash/_baseRest.js"),
				n = r("./node_modules/lodash/isArrayLikeObject.js"),
				d = s((function(e, t) {
					return n(e) ? i(e, t) : []
				}));
			e.exports = d
		},
		"./src/reddit/actions/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "morePostsFailed", (function() {
				return L
			})), r.d(t, "morePostsLoaded", (function() {
				return A
			})), r.d(t, "morePostsPending", (function() {
				return G
			})), r.d(t, "moreOfMyMultiRequested", (function() {
				return U
			})), r.d(t, "myMultiredditsPending", (function() {
				return D
			})), r.d(t, "myMultiredditsReceived", (function() {
				return z
			})), r.d(t, "myMultiredditsRequested", (function() {
				return K
			})), r.d(t, "createFailure", (function() {
				return W
			})), r.d(t, "createPending", (function() {
				return H
			})), r.d(t, "createSuccess", (function() {
				return J
			})), r.d(t, "createRequested", (function() {
				return Q
			})), r.d(t, "reloadCurrentMultiredditFeedRequested", (function() {
				return B
			})), r.d(t, "duplicateFailure", (function() {
				return $
			})), r.d(t, "duplicatePending", (function() {
				return V
			})), r.d(t, "duplicateSuccess", (function() {
				return X
			})), r.d(t, "duplicateRequested", (function() {
				return Y
			})), r.d(t, "addSubredditPending", (function() {
				return Z
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
				return ce
			})), r.d(t, "deleteRequested", (function() {
				return le
			})), r.d(t, "editFailure", (function() {
				return ue
			})), r.d(t, "editPending", (function() {
				return me
			})), r.d(t, "editSuccess", (function() {
				return be
			})), r.d(t, "editRequested", (function() {
				return pe
			})), r.d(t, "subredditRecommendationsFailure", (function() {
				return fe
			})), r.d(t, "subredditRecommendationsPending", (function() {
				return he
			})), r.d(t, "subredditRecommendationsSuccess", (function() {
				return xe
			})), r.d(t, "recommendationsRequested", (function() {
				return ge
			}));
			var i = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				n = r.n(s),
				d = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				l = r("./src/lib/makeListingKey/index.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/actions/pages/multireddit/index.ts"),
				b = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/constants/parameters.ts"),
				f = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/lib/omitHeaders/index.ts"),
				x = r("./src/reddit/constants/headers.ts"),
				g = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				O = r("./src/lib/makeGqlRequest/index.ts"),
				y = r("./src/redditGQL/operations/AllUserMultireddits.json"),
				j = (e, t) => Object(O.a)(e, {
					...y,
					variables: t
				}),
				C = r("./src/reddit/endpoints/page/multiredditListing.ts"),
				_ = r("./src/reddit/endpoints/subreddit/recommendations.ts"),
				S = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				k = r("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				v = r("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				N = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				F = e => {
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
						s = i.filter(e => !e.displayName.startsWith(a.pc)).map(e => e.id),
						n = i.filter(e => e.displayName.startsWith(a.pc)).map(e => e.id);
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
				E = r("./src/reddit/models/Multireddit/index.ts"),
				w = r("./src/reddit/models/Toast/index.ts"),
				T = r("./src/reddit/selectors/multireddit.ts"),
				P = r("./src/reddit/selectors/platform.ts"),
				R = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				M = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				q = r("./src/reddit/actions/multireddit/constants.ts");
			const L = Object(c.a)(q.q),
				A = Object(c.a)(q.r),
				G = Object(c.a)(q.s),
				U = e => async (t, r, i) => {
					const {
						gqlContext: s
					} = i, {
						sort: n = a.bb.HOT,
						multiredditName: d,
						username: o
					} = e, c = r(), u = c.platform.currentPage, m = u ? u.queryParams : {}, b = Object(T.d)(c, {
						multiredditName: d,
						username: o
					}), p = Object(l.a)(b.url, n, m), f = c.listings.postOrder.loadMore[p];
					if (!f) return;
					const h = c.listings.postOrder.api.pending[p],
						x = c.listings.postOrder.fetchedTokens,
						g = x[p] && x[p][f.token] || !1;
					if (h || g) return;
					t(G({
						key: p,
						fetchedToken: f.token
					}));
					const O = b.url.replace(/\/$/, ""),
						y = m.t ? m.t.toUpperCase() : void 0,
						j = {
							after: f.token,
							includeIdentity: !1,
							includeSources: !1,
							path: O,
							range: y,
							sort: n.toUpperCase()
						},
						_ = await Object(C.a)(s(), j),
						{
							data: k
						} = _.body,
						N = Object(v.a)(k);
					_.ok && k && k.multireddit ? t(A({
						fetchedToken: f.token,
						key: p,
						meta: c.meta,
						...N,
						...Object(S.a)(c, p, N),
						multiredditsModelsState: c.multireddits.models
					})) : t(L({
						error: {
							type: a.K.NOT_FOUND_ERROR
						},
						fetchedToken: f.token,
						key: p,
						..._.body,
						...Object(S.a)(c, p, N)
					}))
				}, D = Object(c.a)(q.t), z = Object(c.a)(q.u), K = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (r, i, s) => {
						let {
							apiContext: n,
							gqlContext: d
						} = s;
						const a = i();
						if (!Object(I.m)(a)) return;
						if (!e && Object(T.h)(a) || Object(T.i)(a)) return;
						r(D());
						const o = await j(d(), {
							includeSources: t
						});
						if (o.ok) {
							const e = o.body.data.identity.allMultireddits.edges.map(e => e.node),
								t = Object(k.b)(e);
							r(z({
								...t,
								multiredditsModelsState: a.multireddits.models
							}))
						}
					}
				}, W = Object(c.a)(q.e), H = Object(c.a)(q.f), J = Object(c.a)(q.g), Q = e => {
					let {
						description: t,
						displayName: r,
						shouldNavigate: s
					} = e;
					return async (e, n, o) => {
						let {
							apiContext: c
						} = o;
						const l = n(),
							m = Object(I.m)(l);
						if (!m) return;
						e(H());
						const p = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(g.a)(`${e.apiUrl}/api/multi`),
							data: {
								model: JSON.stringify({
									description_md: r,
									display_name: t,
									visibility: "private",
									subreddits: []
								})
							},
							method: a.ob.POST
						}))(c(), r, t);
						if (p.ok) {
							const {
								id: t
							} = m;
							if (await e(J({
									multireddit: F(p.body.data),
									multiredditsModelsState: l.multireddits.models,
									userId: t
								})), s) {
								e(Object(u.f)());
								const t = p.body.data.path.toLowerCase();
								await e(Object(d.b)(t))
							}
							e(Object(b.f)({
								text: i.fbt._("Custom feed created!", null, {
									hk: "258cY9"
								})
							}))
						} else e(W(p.error))
					}
				}, B = () => async (e, t, r) => {
					let {
						apiContext: i
					} = r;
					const s = t(),
						d = Object(I.m)(s),
						o = Object(P.i)(s) ? Object(P.m)(s) : Object(P.b)(s),
						c = o && o.routeMatch && o.routeMatch.match;
					if (!c) return;
					const u = c.params,
						b = u.sort || a.bb.HOT,
						{
							multiredditName: f,
							username: h
						} = u;
					if (!f) return;
					const x = Object(E.h)((h || d && d.displayText || "").toLowerCase(), f.toLowerCase()),
						{
							queryParams: g
						} = c,
						O = Object(l.a)(x, b, g),
						y = p.H in g && g[p.H].toUpperCase() || "",
						j = a.nc[y] || !1,
						C = Object(I.m)(s);
					(h || C && C.displayText) && await e(Object(m.multiredditFeedRequested)(O, (h || C.displayText).toLowerCase(), f.toLowerCase(), {
						...n()(g, p.p),
						...n()(g, p.o),
						sort: b,
						t: Object(M.a)(b, j)
					}))
				}, $ = Object(c.a)(q.k), V = Object(c.a)(q.l), X = Object(c.a)(q.m), Y = e => {
					let {
						description: t,
						displayName: r,
						fromName: s,
						fromUsername: n
					} = e;
					return async (e, o, c) => {
						let {
							apiContext: l
						} = c;
						const m = o(),
							p = Object(I.m)(m);
						if (!p || !p.displayText) return;
						const O = Object(E.h)((n || p.displayText).toLowerCase(), s.toLowerCase());
						e(V());
						const y = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(g.a)(`${e.apiUrl}/api/multi/copy`),
							data: {
								description_md: t.description,
								display_name: t.displayName,
								expand_srs: !0,
								from: t.from
							},
							method: a.ob.POST
						}))(l(), {
							from: O,
							displayName: r,
							description: t
						});
						if (y.ok) {
							const t = F(y.body.data);
							e(Object(u.f)()), e(X({
								multireddit: t,
								multiredditsModelsState: m.multireddits.models,
								userId: p.id
							})), e(Object(b.f)({
								text: i.fbt._("Custom feed duplicated!", null, {
									hk: "2u48X"
								}),
								buttonText: i.fbt._("Go there", null, {
									hk: "4sXZMm"
								}),
								buttonAction: Object(d.b)(t.url)
							}))
						} else e($(y.error)), e(Object(b.f)({
							text: i.fbt._("Something went wrong duplicating {multiName}", [i.fbt._param("multiName", s)], {
								hk: "4bzN2D"
							})
						}))
					}
				}, Z = Object(c.a)(q.b), ee = Object(c.a)(q.c), te = Object(c.a)(q.a), re = e => {
					let {
						communityInfo: t,
						identifier: r,
						multiredditNames: s
					} = e;
					return async (e, n, d) => {
						let {
							apiContext: c
						} = d;
						const l = n(),
							m = Object(I.m)(l);
						if (!m || l.multireddits.api.addSubreddit.pending) return;
						e(Z({
							name: r.name
						}));
						const {
							displayText: p
						} = m;
						if (!p) return;
						const O = s.map(e => `/user/${p.toLowerCase()}/m/${e.toLowerCase()}`).join(","),
							y = `${"profile"===r.type?a.pc:""}${r.name}`,
							j = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
								endpoint: Object(g.a)(`${e.apiUrl}/api/multi/bulk_add/r/${t}`),
								data: {
									paths: r
								},
								method: a.ob.PUT
							}))(c(), y, O);
						if (j.ok) {
							const n = Object(R.P)(l, {
									identifier: r
								}) || t && t.id || "",
								d = s.map(e => Object(E.h)(p, e));
							e(Object(u.f)()), e(Object(b.f)({
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
							j.body && (j.body.reason === q.d.TooManySubreddits ? t = i.fbt._("Maximum communities reached", null, {
								hk: "2eguyW"
							}) : j.body.reason === q.d.InvalidSrQuarantine && (t = i.fbt._("{communityname} is invalid because it is quarantined", [i.fbt._param("communityname", `${"subreddit"===r.type?o.d.subreddit:o.d.profile}${r.name}`)], {
								hk: "407xmS"
							}))), e(Object(b.f)({
								text: t,
								kind: w.b.Error
							}))
						}
					}
				}, ie = Object(c.a)(q.w), se = Object(c.a)(q.x), ne = Object(c.a)(q.v), de = e => {
					let {
						id: t,
						multiredditName: r,
						name: s,
						type: n
					} = e;
					return async (e, d, o) => {
						let {
							apiContext: c
						} = o;
						const l = d(),
							m = Object(I.m)(l);
						if (!m || !m.displayText || l.multireddits.api.removeSubreddit.pending) return;
						e(ie({
							id: t
						}));
						const {
							displayText: p
						} = m, O = Object(E.h)(p, r), y = `${"profile"===n?a.pc:""}${s}`, j = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(g.a)(`${e.apiUrl}/api/multi${r}r/${t}`),
							method: a.ob.DELETE
						}))(c(), y, O);
						j.ok ? (e(Object(u.f)()), e(se({
							id: t,
							multipath: O,
							type: n
						})), e(Object(b.f)({
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
						})), e(B())) : (e(ne(j.error)), e(Object(b.f)({
							text: i.fbt._("Sorry, something went wrong removing {subredditName}.", [i.fbt._param("subredditName", s)], {
								hk: "1E1rKm"
							})
						})))
					}
				}, ae = Object(c.a)(q.h), oe = Object(c.a)(q.i), ce = Object(c.a)(q.j), le = e => async (t, r, s) => {
					let {
						apiContext: n
					} = s;
					const o = r();
					if (!Object(I.m)(o)) return;
					t(oe());
					const c = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/multi${t}`),
						method: a.ob.DELETE
					}))(n(), e);
					c.ok ? (await t(ce(e)), t(Object(u.f)()), await t(Object(d.b)("/")), t(Object(b.f)({
						text: i.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(ae(c.error))
				}, ue = Object(c.a)(q.n), me = Object(c.a)(q.o), be = Object(c.a)(q.p), pe = e => {
					let {
						description: t,
						displayText: r,
						multipath: s,
						visibility: n
					} = e;
					return async (e, d, o) => {
						let {
							apiContext: c
						} = o;
						const l = d();
						if (!Object(I.S)(l)) return;
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
								endpoint: Object(g.a)(`${t.apiUrl}/api/multi${s}`),
								data: {
									model: JSON.stringify({
										description_md: r,
										display_name: i,
										visibility: n
									}),
									expand_srs: !0
								},
								method: a.ob.PUT
							})
						})({
							context: c(),
							description: t,
							displayText: r,
							multipath: s,
							visibility: n
						});
						m.ok ? (await e(be(F(m.body.data))), e(Object(u.f)()), e(Object(b.f)({
							text: i.fbt._("Custom feed updated!", null, {
								hk: "39R30f"
							})
						}))) : (e(ue(m.error)), e(Object(b.f)({
							kind: w.b.Error,
							text: i.fbt._("Something went wrong", null, {
								hk: "1Y6lli"
							})
						})))
					}
				}, fe = Object(c.a)(q.z), he = Object(c.a)(q.A), xe = Object(c.a)(q.B), ge = e => {
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
							o = Object(I.m)(a);
						if (!(r || o && o.displayText)) return;
						const c = Object(E.h)(r || o.displayText, t),
							l = a.multireddits.models[c];
						if (!l || !l.subredditIds) return;
						e(he());
						const u = i && i.reduce((e, t) => {
								const r = Object(R.I)(a, t) || Object(R.J)(a, t);
								return r ? [...e, r] : e
							}, []),
							m = await Object(_.a)(d(), {
								count: q.y,
								subredditIds: l.subredditIds,
								toExclude: u
							});
						if (m.ok) {
							const {
								data: t
							} = m.body;
							e(xe({
								multipath: c,
								subreddits: Object(N.b)(t)
							}))
						} else e(fe(m.error))
					}
				}
		},
		"./src/reddit/actions/pages/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "multiredditFeedPending", (function() {
				return T
			})), r.d(t, "multiredditFeedLoaded", (function() {
				return P
			})), r.d(t, "multiredditFeedFailed", (function() {
				return R
			})), r.d(t, "multiredditFeedRequested", (function() {
				return I
			})), r.d(t, "multiredditRequested", (function() {
				return M
			}));
			var i = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				n = r.n(s),
				d = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/lib/addQueryParams/index.ts"),
				o = r("./src/reddit/actions/multireddit/index.ts"),
				c = r("./src/reddit/endpoints/page/multiredditListing.ts"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/reddit/actions/platform.ts"),
				m = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/actions/users.ts"),
				p = r("./src/reddit/constants/parameters.ts"),
				f = r("./src/reddit/constants/postLayout.ts"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				x = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				O = r("./src/reddit/models/Multireddit/index.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/models/User/index.ts"),
				C = r("./src/reddit/selectors/multireddit.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				S = r("./src/lib/makeActionCreator/index.ts"),
				k = r("./src/lib/makeListingKey/index.ts"),
				v = r("./src/reddit/actions/ads/index.ts"),
				N = r("./src/reddit/helpers/canonicalUrls.ts"),
				F = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				E = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				w = r("./src/reddit/actions/pages/multireddit/constants.ts");
			const T = Object(S.a)(w.c),
				P = Object(S.a)(w.b),
				R = Object(S.a)(w.a),
				I = (e, t, r, s, n) => async (d, a, u) => {
					const {
						gqlContext: b
					} = u, p = a();
					if (p.listings.postOrder.api.pending[e]) return;
					d(T({
						key: e
					})), s.layout = f.e[Object(h.U)(p, {})];
					const x = {
							path: Object(O.h)(t, r).replace(/\/$/, ""),
							includeIdentity: !0,
							includeSources: !0,
							sort: s.sort ? s.sort.toUpperCase() : void 0,
							range: s.t ? s.t.toUpperCase() : void 0
						},
						j = await Object(F.a)("multireddit", () => Object(c.a)(b(), x)),
						{
							data: C
						} = j.body,
						S = `error-${e}`;
					if (j.ok && C) {
						const i = Object(g.a)(C);
						if (!C.multireddit) return n && d(m.g(S)), void d(R({
							...i,
							error: {
								type: l.K.NOT_FOUND_ERROR
							},
							key: e
						}));
						d(P({
							key: e,
							meta: p.meta,
							...i,
							account: i.account || Object(_.m)(p),
							multiredditsModelsState: p.multireddits.models
						})), n && d(m.g(S)), d(Object(o.recommendationsRequested)({
							multiredditName: r,
							username: t
						})), window.addEventListener("load", () => {
							d(Object(v.b)(E.a.MULTIREDDIT))
						})
					} else n && d(m.f({
						id: S,
						kind: y.b.Error,
						text: i.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: i.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: I(e, t, r, s, n)
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
						!t.user.account && t.user.session && await r(b.s()), t = i();
						const {
							account: n
						} = t.user;
						if (!n) return void r(Object(d.c)("/"));
						let c = `/user/${o=Object(j.e)(n)}/m/${s}`;
						const {
							sort: l
						} = e.params;
						return c += l ? `/${l}` : "", void r(Object(d.c)(Object(a.a)(c, e.queryParams)))
					}
					const {
						sort: c = l.bb.HOT
					} = e.params, m = {
						multiredditName: s,
						username: o
					}, f = i();
					o || (o = f.user.account ? Object(j.e)(f.user.account) : "");
					const h = Object(O.h)(o, s),
						g = Object(k.a)(h, c, e.queryParams),
						y = f.listings.postOrder.ids[g],
						_ = f.listings.postOrder.api.error[g],
						S = f.listings.postOrder.api.pending[g],
						F = p.H in e.queryParams && e.queryParams[p.H].toUpperCase() || "",
						w = F in l.nc && l.nc[F];
					if (S || y && !_ && !t) return void(y && (r(u.n({
						title: Object(C.f)(i(), m)
					})), f.sidebarPromotedPosts.firstFetch || r(Object(v.b)(E.a.MULTIREDDIT))));
					await r(I(g, o, s, {
						...n()(e.queryParams, p.p),
						...n()(e.queryParams, p.o),
						sort: c,
						t: Object(x.a)(c, w)
					}, !0));
					const T = i();
					Object(C.d)(T, m) && r(u.n({
						title: Object(C.f)(i(), m)
					})), Object(N.e)(T, r, e)
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
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(d.b, {
				className: Object(n.a)(e.className, o.a.container, e.text.length >= e.maxChars ? o.a.mOverflow : null)
			}, c._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [c._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/MultiredditAddSubredditModal/index.m.less": function(e, t, r) {
			e.exports = {
				main: "_1tSDRZp-SeaEh1gP_bTeUq",
				listContainer: "gk5vLoU5P40dKa7_jYbXX",
				listItem: "_3GisC5qJ-ELW9BhucOWh1M",
				inputListItem: "W52oKXrM7wIOgPEsM1hdF",
				checkbox: "_3TF6yTEONMGw9uZJrC6qNB",
				createSubmitBtn: "_2vhmbp3zhgsvktJ-Md6ZM1",
				loading: "_3m9ht2YeKd1XMwtMyuepve",
				createErrorMsg: "_2D-eDfWFyfQWYPYseO9ZRx",
				icon: "_26ofGPdBtTe3AN2qS1MQVA",
				label: "_1S4dp8VZwrWTJ66AYDKJ8H",
				name: "_3xwBa4odGa5IF1t_G8QYQg",
				details: "_2zDCF9LmF0oiO_eJZJpSNO",
				loadingContainer: "_3wBitqcqznqbZxPeecLk5t",
				loadingIcon: "SpROgnWoGupX43VtXP5T7",
				forUser: "_3GcEKbLM31to1VwqmbzDdL"
			}
		},
		"./src/reddit/components/MultiredditAddSubredditModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var i = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/noop.js"),
				n = r.n(s),
				d = r("./node_modules/lodash/without.js"),
				a = r.n(d),
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
				l = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/reselect/es/index.js"),
				m = r("./src/higherOrderComponents/asModal/index.tsx"),
				b = r("./src/lib/classNames/index.ts"),
				p = r("./src/reddit/actions/modal.ts"),
				f = r("./src/reddit/actions/multireddit/index.ts"),
				h = r("./src/reddit/components/CharacterCountdown/index.tsx"),
				x = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				g = r("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				O = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				y = r("./src/reddit/components/ThemeProvider/index.tsx"),
				j = r("./src/reddit/constants/keycodes.ts"),
				C = r("./src/reddit/constants/posts.ts"),
				_ = r("./src/reddit/contexts/PageLayer/index.tsx"),
				S = r("./src/reddit/controls/Button/index.tsx"),
				k = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = r("./src/reddit/helpers/multireddit/index.ts"),
				N = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				F = r("./src/reddit/models/Multireddit/index.ts"),
				E = r("./src/reddit/models/Subreddit/index.ts"),
				w = r("./src/reddit/selectors/multireddit.ts"),
				T = r("./src/reddit/controls/CheckboxInput/index.tsx"),
				P = r("./src/reddit/components/MultiredditAddSubredditModal/index.m.less"),
				R = r.n(P);
			const {
				fbt: I
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var M = e => {
				let {
					containsSubreddit: t,
					isSelected: r,
					multireddit: i,
					onCheck: s,
					recentRef: d
				} = e;
				const a = t;
				return c.a.createElement("div", {
					className: R.a.listItem,
					onClick: a ? n.a : s,
					ref: d
				}, c.a.createElement(T.a, {
					name: "addSubreddit",
					className: R.a.checkbox,
					disabled: a,
					value: r || t,
					onChange: a ? n.a : s
				}), c.a.createElement("img", {
					src: i.icon,
					className: R.a.icon
				}), c.a.createElement("div", {
					className: R.a.label
				}, c.a.createElement("div", {
					className: R.a.name
				}, i.displayText), c.a.createElement("div", {
					className: R.a.details
				}, t ? I._("Community already added to this feed", null, {
					hk: "3dMmTS"
				}) : i.subredditCount && I._({
					"*": "{communities} communities",
					_1: "1 community"
				}, [I._plural(i.subredditCount, "communities")], {
					hk: "2tlE2Y"
				}))))
			};
			const q = 40,
				L = 12,
				A = Object(_.v)(),
				G = Object(u.c)({
					createApiError: e => e.multireddits.api.create.error,
					createApiFetched: e => e.multireddits.api.create.fetched,
					createApiPending: e => e.multireddits.api.create.pending,
					currentSubredditOrProfile: _.q,
					mineApiFetched: w.h,
					mineApiPending: w.i,
					myMultireddits: w.j,
					submitApiFetched: e => e.multireddits.api.addSubreddit.fetched,
					submitApiPending: e => e.multireddits.api.addSubreddit.pending
				}),
				U = Object(l.b)(G, e => ({
					onAddToMulireddits: (t, r) => e(Object(f.addSubredditRequested)({
						identifier: t,
						multiredditNames: r
					})),
					onClose: () => e(Object(p.f)()),
					onCreateSubmit: t => {
						e(Object(f.createRequested)({
							displayName: t,
							shouldNavigate: !1
						}))
					}
				}), (e, t, r) => ({
					...r,
					...e,
					...t,
					onSubmit: r => {
						e.currentSubredditOrProfile && t.onAddToMulireddits({
							name: e.currentSubredditOrProfile.name,
							type: e.currentSubredditOrProfile.type === E.g.User ? C.a.PROFILE : C.a.SUBREDDIT
						}, r)
					}
				}));
			class D extends c.a.Component {
				constructor(e) {
					super(e), this.state = {
						creatingName: "",
						isCreating: !1,
						lastCreatedName: void 0,
						selected: [],
						showCreateError: !1,
						showCreateSuccess: !1
					}, this.onCheck = e => () => {
						const {
							selected: t
						} = this.state;
						this.setState({
							selected: t.includes(e) ? a()(this.state.selected, e) : [...t, e]
						})
					}, this.onSubmit = () => {
						this.props.onSubmit(this.state.selected)
					}, this.onCreatingChange = e => {
						this.setState({
							creatingName: e.target.value,
							displayTextError: void 0,
							showCreateError: !1,
							showCreateSuccess: !1
						})
					}, this.onCreateSubmit = () => {
						const e = Object(v.a)({
							displayText: this.state.creatingName,
							myMultireddits: this.props.myMultireddits,
							thisMultireddit: null
						});
						e ? this.setState({
							displayTextError: e,
							showCreateError: !0
						}) : this.props.onCreateSubmit(this.state.creatingName)
					}, this.onCreateKeyDown = e => {
						e.which === j.a.Enter && this.onCreateSubmit()
					}, this.onCreateClick = () => {
						this.setState({
							isCreating: !0
						}), window.setTimeout(() => this.inputRef && this.inputRef.focus())
					}, this.setScrollRef = e => this.scrollRef = e, this.setInputRef = e => this.inputRef = e, this.setRecentRef = e => this.recentRef = e, this.getCreateState = () => {
						if (!this.props.createApiPending) return this.state.showCreateError || this.state.displayTextError ? g.d.Invalid : this.state.showCreateSuccess ? g.d.Valid : void 0
					}, this.componentDidUpdate = (e, t) => {
						if (e.createApiPending && !this.props.createApiPending && this.props.createApiFetched && !this.props.createApiError) {
							let e;
							const {
								myMultireddits: r
							} = this.props;
							for (let i = r.length - 1; i >= 0; i--)
								if (r[i].displayText === t.creatingName) {
									e = r[i].name;
									break
								} this.setState({
								lastCreatedName: e,
								creatingName: "",
								showCreateSuccess: !0,
								selected: [...this.state.selected, e]
							}), window.setTimeout(() => {
								this.scrollRef && this.recentRef && this.scrollRef.scrollTo({
									top: this.recentRef.offsetTop - this.scrollRef.offsetTop,
									behavior: "smooth"
								}), this.inputRef && this.inputRef.focus()
							})
						}!e.createApiError && this.props.createApiError && t.creatingName === this.state.creatingName && this.setState({
							showCreateError: !0
						})
					}, this.getOnCheckFn = e => (this.onCheckFnCache[e] || (this.onCheckFnCache[e] = this.onCheck(e)), this.onCheckFnCache[e]), this.containsCurrentSubredditOrProfile = e => {
						const {
							currentSubredditOrProfile: t
						} = this.props;
						return t && (t.type === E.g.User && e.profileIds && e.profileIds.indexOf(t.id) > -1 || t.type !== E.g.User && e.subredditIds && e.subredditIds.indexOf(t.id) > -1) || !1
					}, this.inputRef = null, this.recentRef = null, this.scrollRef = null, this.onCheckFnCache = {}
				}
				render() {
					const {
						props: {
							createApiPending: e,
							mineApiPending: t,
							myMultireddits: r,
							onClose: s,
							submitApiPending: d
						},
						state: {
							creatingName: a,
							displayTextError: o,
							isCreating: l,
							lastCreatedName: u,
							selected: m,
							showCreateError: p,
							showCreateSuccess: f
						}
					} = this;
					return c.a.createElement(y.a, {
						forceRedditTheme: !0
					}, c.a.createElement(x.e, null, c.a.createElement(x.i, null, c.a.createElement(N.a, null, c.a.createElement(x.q, null, i.fbt._("Add community to Custom Feed", null, {
						hk: "1twPIx"
					})), c.a.createElement("button", {
						onClick: s
					}, c.a.createElement(x.b, null)))), c.a.createElement(x.l, {
						className: R.a.main
					}, c.a.createElement("div", {
						className: R.a.listContainer,
						ref: this.setScrollRef
					}, t ? c.a.createElement("div", {
						className: R.a.loadingContainer
					}, c.a.createElement(k.a, {
						className: Object(b.a)(R.a.loadingIcon, R.a.forUser),
						sizePx: q
					})) : r.map(e => c.a.createElement(M, {
						containsSubreddit: this.containsCurrentSubredditOrProfile(e),
						isSelected: m.indexOf(e.name) > -1 || !1,
						key: e.name,
						multireddit: e,
						onCheck: this.getOnCheckFn(e.name),
						recentRef: e.name === u ? this.setRecentRef : n.a
					}))), c.a.createElement("div", null, l ? c.a.createElement("div", {
						className: Object(b.a)(R.a.listItem, R.a.inputListItem)
					}, c.a.createElement(g.b, {
						inputRef: this.setInputRef,
						label: i.fbt._("new custom feed", null, {
							hk: "2C1GUB"
						}),
						maxLength: F.c,
						onChange: this.onCreatingChange,
						onKeyDown: this.onCreateKeyDown,
						state: this.getCreateState(),
						value: a
					}), p ? c.a.createElement(O.c, {
						className: R.a.createErrorMsg
					}, o === F.a.SameName ? i.fbt._("A custom feed with that name already exists", null, {
						hk: "1WJHG3"
					}) : o === F.a.TooShort ? i.fbt._("Name must contain at least two alphanumeric characters", null, {
						hk: "3TWc1H"
					}) : i.fbt._("Something went wrong with this name, maybe try something else?", null, {
						hk: "N6k8D"
					})) : c.a.createElement(h.a, {
						text: a,
						maxChars: F.c
					}), !f && !p && (e ? c.a.createElement(k.a, {
						className: Object(b.a)(R.a.createSubmitBtn, R.a.loading),
						sizePx: L
					}) : c.a.createElement(S.r, {
						className: R.a.createSubmitBtn,
						onClick: this.onCreateSubmit
					}, i.fbt._("create", null, {
						hk: "1RZAAQ"
					})))) : c.a.createElement(S.r, {
						className: R.a.listItem,
						onClick: this.onCreateClick
					}, i.fbt._("+ Create a custom feed", null, {
						hk: "6VkVz"
					})))), c.a.createElement(x.g, null, c.a.createElement(x.r, {
						disabled: !!d || !m.length || e,
						onClick: this.onSubmit
					}, d ? c.a.createElement(k.a, {
						className: R.a.loadingIcon,
						sizePx: L
					}) : i.fbt._("Update", null, {
						hk: "3LoAmq"
					})))))
				}
			}
			t.default = Object(m.a)(A(U(D)))
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
				return g
			})), r.d(t, "c", (function() {
				return O
			}));
			var i = r("./node_modules/react/index.js"),
				s = r.n(i),
				n = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/controls/Input/index.tsx"),
				o = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = r("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				l = r.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				}).apply(this, arguments)
			}
			const m = d.a.div("icon", l.a),
				b = d.a.textarea("textarea", l.a),
				p = d.a.span("Invalid", l.a);
			var f, h;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(f || (f = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(h || (h = {}));
			const x = e => s.a.createElement("div", {
					className: Object(n.a)(e.isRequired && l.a.required, e.className, {
						[l.a.container]: !e.isTextarea,
						[l.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[l.a.mValid]: e.state === f.Valid,
							[l.a.mInvalid]: e.state === f.Invalid,
							[l.a.mWhiteField]: e.backgroundColorState === h.WhiteFields
						}
					})
				}, s.a.createElement("label", {
					className: Object(n.a)({
						[l.a.field]: !e.isTextarea,
						[l.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && s.a.createElement("span", {
					className: l.a.label
				}, e.label), !!e.state && s.a.createElement(m, {
					className: Object(n.a)({
						[l.a.mValid]: e.state === f.Valid,
						[l.a.mInvalid]: e.state === f.Invalid
					})
				}, e.state === f.Valid && s.a.createElement(o.a, null), e.state === f.Invalid && s.a.createElement(p, null, "!")))),
				g = e => {
					const {
						backgroundColorState: t,
						className: r,
						inputRef: i,
						isRequired: d,
						label: o,
						onKeyDown: c,
						state: m,
						...b
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: r,
						isRequired: d,
						label: o,
						state: m
					}, s.a.createElement(a.a, u({}, b, {
						className: Object(n.a)(l.a.input, l.a.control, {
							[l.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: i,
						onKeyDown: c
					})))
				},
				O = e => {
					const {
						backgroundColorState: t,
						className: r,
						inputRef: i,
						isRequired: d,
						label: a,
						onKeyDown: o,
						state: c,
						...m
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: r,
						isRequired: d,
						label: a,
						state: c,
						isTextarea: !0
					}, s.a.createElement(b, u({}, m, {
						className: Object(n.a)({
							[l.a.mWhiteField]: e.backgroundColorState === h.WhiteFields
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
				return c
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "j", (function() {
				return j
			}));
			var i = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				n = r.n(s);
			const d = i.a.section("FormPage", n.a),
				a = i.a.h1("HomePageTitle", n.a),
				o = i.a.button("HomePageBreadcrumb", n.a),
				c = i.a.div("HomePageGroup", n.a),
				l = i.a.h1("FormPageTitle", n.a),
				u = i.a.div("FormPageSection", n.a),
				m = i.a.div("FormGroup", n.a),
				b = i.a.h2("FormGroupTitle", n.a),
				p = i.a.div("FormElement", n.a),
				f = i.a.div("FormGroupDescription", n.a),
				h = i.a.div("FormItem", n.a),
				x = i.a.h3("FormElementTitle", n.a),
				g = i.a.div("FormElementDescription", n.a),
				O = i.a.div("FormElementError", n.a),
				y = i.a.div("FormElementSubGroup", n.a),
				j = i.a.li("FormListItem", n.a)
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, r) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, r) {
			"use strict";
			var i = r("./node_modules/react/index.js"),
				s = r.n(i),
				n = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/constants/keycodes.ts"),
				a = r("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = r("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = r("./src/reddit/layout/row/Inline/index.tsx"),
				l = r("./src/reddit/controls/CheckboxInput/index.m.less"),
				u = r.n(l);
			t.a = e => {
				const t = e.onChange && !e.disabled ? t => {
						t.key !== d.b.Enter && t.key !== d.b.Space || e.onChange(!e.value)
					} : void 0,
					r = e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0;
				return s.a.createElement(c.a, {
					"aria-checked": !!e.value,
					"aria-disabled": e.disabled,
					"aria-labelledby": e.name,
					className: Object(n.a)(e.className, u.a.checkboxInput, e.disabled ? u.a.disabled : null),
					onClick: r,
					onKeyPress: t,
					role: "checkbox",
					tabIndex: 0
				}, s.a.createElement("input", {
					value: e.value ? e.value.toString() : "",
					type: "hidden"
				}), e.value ? s.a.createElement(o.a, {
					className: u.a.checkboxSelected
				}) : s.a.createElement(a.a, null), e.children)
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
				c = r("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
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
					multireddit: b
				} = e;
				if (r && (t.account = Object(u.a)(r) || null, t.preferences = Object(c.a)(r.preferences, r.interactions) || null), !b) return t;
				const {
					elements: p
				} = b;
				if (p) {
					t.pageInfo = p.pageInfo;
					for (const {
							node: e
						} of p.edges) {
						if (!Object(m.k)(e)) {
							const t = `Received unhandled element type when processing multireddit data: "${e.__typename}"`;
							Object(i.b)() || console.warn(t), s.c.captureMessage(t);
							continue
						}
						const r = e;
						t.postIds.push(r.id);
						const {
							post: d,
							crosspost: c
						} = r && Object(o.a)(r);
						t.posts[d.id] = d, c && (t.posts[c.id] = c), Object(m.j)(r) || Object(m.i)(r) || (r.authorFlair && (t.postFlair[d.belongsTo.id] || (t.postFlair[d.belongsTo.id] = {}), t.postFlair[d.belongsTo.id][d.author] = Object(n.a)(r.authorFlair)[0]), Object(m.n)(r) && (t.subreddits[r.subreddit.id] || (t.subreddits[r.subreddit.id] = Object(l.a)(r.subreddit)), t.postFlair[r.subreddit.id] || (t.postFlair[r.subreddit.id] = Object(a.a)(r.subreddit))))
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
					subreddits: g
				} = Object(d.a)(b);
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
						...g
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
		"./src/redditGQL/operations/AllUserMultireddits.json": function(e) {
			e.exports = JSON.parse('{"id":"b65f99b680f5"}')
		},
		"./src/redditGQL/operations/MultiredditListing.json": function(e) {
			e.exports = JSON.parse('{"id":"008f85bde0ad"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MultiredditAddSubredditModal.68694008e8f3830663ed.js.map