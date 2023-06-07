// https://www.redditstatic.com/desktop2x/MultiredditCreateModal.3a397d76787c8049b568.js
// Retrieved at 6/6/2023, 10:20:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MultiredditCreateModal"], {
		"./src/reddit/actions/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "morePostsFailed", (function() {
				return R
			})), r.d(t, "morePostsLoaded", (function() {
				return G
			})), r.d(t, "morePostsPending", (function() {
				return D
			})), r.d(t, "moreOfMyMultiRequested", (function() {
				return U
			})), r.d(t, "myMultiredditsPending", (function() {
				return H
			})), r.d(t, "myMultiredditsReceived", (function() {
				return z
			})), r.d(t, "myMultiredditsRequested", (function() {
				return A
			})), r.d(t, "createFailure", (function() {
				return W
			})), r.d(t, "createPending", (function() {
				return K
			})), r.d(t, "createSuccess", (function() {
				return Q
			})), r.d(t, "createRequested", (function() {
				return J
			})), r.d(t, "reloadCurrentMultiredditFeedRequested", (function() {
				return $
			})), r.d(t, "duplicateFailure", (function() {
				return B
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
				return de
			})), r.d(t, "removeSubredditRequested", (function() {
				return ne
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
				return Oe
			}));
			var i = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				d = r.n(s),
				n = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				l = r("./src/lib/makeListingKey/index.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/actions/pages/multireddit/index.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/constants/parameters.ts"),
				f = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/lib/omitHeaders/index.ts"),
				x = r("./src/reddit/constants/headers.ts"),
				O = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				j = r("./src/lib/makeGqlRequest/index.ts"),
				g = r("./src/redditGQL/operations/AllUserMultireddits.json"),
				y = (e, t) => Object(j.a)(e, {
					...g,
					variables: t
				}),
				_ = r("./src/reddit/endpoints/page/multiredditListing.ts"),
				C = r("./src/reddit/endpoints/subreddit/recommendations.ts"),
				F = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				v = r("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				S = r("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				k = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				N = e => {
					let t = e.over_18 || !1;
					if (!t)
						for (const n of e.subreddits)
							if (n.data.over_18) {
								t = !0;
								break
							} let r = e.quarantine || !1;
					if (!r)
						for (const n of e.subreddits) {
							const e = (n.data.audience_target || "").split(",");
							if (n.data.quarantine || e.indexOf("unsafe") > -1) {
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
						d = i.filter(e => e.displayName.startsWith(a.pc)).map(e => e.id);
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
						profileIds: d,
						subredditCount: e.subreddits.length,
						subredditIds: s,
						url: e.path.toLowerCase(),
						visibility: e.visibility
					}
				},
				T = r("./src/reddit/models/Multireddit/index.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				w = r("./src/reddit/selectors/multireddit.ts"),
				P = r("./src/reddit/selectors/platform.ts"),
				q = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				L = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				M = r("./src/reddit/actions/multireddit/constants.ts");
			const R = Object(c.a)(M.q),
				G = Object(c.a)(M.r),
				D = Object(c.a)(M.s),
				U = e => async (t, r, i) => {
					const {
						gqlContext: s
					} = i, {
						sort: d = a.bb.HOT,
						multiredditName: n,
						username: o
					} = e, c = r(), u = c.platform.currentPage, m = u ? u.queryParams : {}, p = Object(w.d)(c, {
						multiredditName: n,
						username: o
					}), b = Object(l.a)(p.url, d, m), f = c.listings.postOrder.loadMore[b];
					if (!f) return;
					const h = c.listings.postOrder.api.pending[b],
						x = c.listings.postOrder.fetchedTokens,
						O = x[b] && x[b][f.token] || !1;
					if (h || O) return;
					t(D({
						key: b,
						fetchedToken: f.token
					}));
					const j = p.url.replace(/\/$/, ""),
						g = m.t ? m.t.toUpperCase() : void 0,
						y = {
							after: f.token,
							includeIdentity: !1,
							includeSources: !1,
							path: j,
							range: g,
							sort: d.toUpperCase()
						},
						C = await Object(_.a)(s(), y),
						{
							data: v
						} = C.body,
						k = Object(S.a)(v);
					C.ok && v && v.multireddit ? t(G({
						fetchedToken: f.token,
						key: b,
						meta: c.meta,
						...k,
						...Object(F.a)(c, b, k),
						multiredditsModelsState: c.multireddits.models
					})) : t(R({
						error: {
							type: a.K.NOT_FOUND_ERROR
						},
						fetchedToken: f.token,
						key: b,
						...C.body,
						...Object(F.a)(c, b, k)
					}))
				}, H = Object(c.a)(M.t), z = Object(c.a)(M.u), A = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (r, i, s) => {
						let {
							apiContext: d,
							gqlContext: n
						} = s;
						const a = i();
						if (!Object(I.m)(a)) return;
						if (!e && Object(w.h)(a) || Object(w.i)(a)) return;
						r(H());
						const o = await y(n(), {
							includeSources: t
						});
						if (o.ok) {
							const e = o.body.data.identity.allMultireddits.edges.map(e => e.node),
								t = Object(v.b)(e);
							r(z({
								...t,
								multiredditsModelsState: a.multireddits.models
							}))
						}
					}
				}, W = Object(c.a)(M.e), K = Object(c.a)(M.f), Q = Object(c.a)(M.g), J = e => {
					let {
						description: t,
						displayName: r,
						shouldNavigate: s
					} = e;
					return async (e, d, o) => {
						let {
							apiContext: c
						} = o;
						const l = d(),
							m = Object(I.m)(l);
						if (!m) return;
						e(K());
						const b = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(O.a)(`${e.apiUrl}/api/multi`),
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
						if (b.ok) {
							const {
								id: t
							} = m;
							if (await e(Q({
									multireddit: N(b.body.data),
									multiredditsModelsState: l.multireddits.models,
									userId: t
								})), s) {
								e(Object(u.f)());
								const t = b.body.data.path.toLowerCase();
								await e(Object(n.b)(t))
							}
							e(Object(p.f)({
								text: i.fbt._("Custom feed created!", null, {
									hk: "258cY9"
								})
							}))
						} else e(W(b.error))
					}
				}, $ = () => async (e, t, r) => {
					let {
						apiContext: i
					} = r;
					const s = t(),
						n = Object(I.m)(s),
						o = Object(P.i)(s) ? Object(P.m)(s) : Object(P.b)(s),
						c = o && o.routeMatch && o.routeMatch.match;
					if (!c) return;
					const u = c.params,
						p = u.sort || a.bb.HOT,
						{
							multiredditName: f,
							username: h
						} = u;
					if (!f) return;
					const x = Object(T.h)((h || n && n.displayText || "").toLowerCase(), f.toLowerCase()),
						{
							queryParams: O
						} = c,
						j = Object(l.a)(x, p, O),
						g = b.H in O && O[b.H].toUpperCase() || "",
						y = a.nc[g] || !1,
						_ = Object(I.m)(s);
					(h || _ && _.displayText) && await e(Object(m.multiredditFeedRequested)(j, (h || _.displayText).toLowerCase(), f.toLowerCase(), {
						...d()(O, b.p),
						...d()(O, b.o),
						sort: p,
						t: Object(L.a)(p, y)
					}))
				}, B = Object(c.a)(M.k), V = Object(c.a)(M.l), X = Object(c.a)(M.m), Y = e => {
					let {
						description: t,
						displayName: r,
						fromName: s,
						fromUsername: d
					} = e;
					return async (e, o, c) => {
						let {
							apiContext: l
						} = c;
						const m = o(),
							b = Object(I.m)(m);
						if (!b || !b.displayText) return;
						const j = Object(T.h)((d || b.displayText).toLowerCase(), s.toLowerCase());
						e(V());
						const g = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(O.a)(`${e.apiUrl}/api/multi/copy`),
							data: {
								description_md: t.description,
								display_name: t.displayName,
								expand_srs: !0,
								from: t.from
							},
							method: a.ob.POST
						}))(l(), {
							from: j,
							displayName: r,
							description: t
						});
						if (g.ok) {
							const t = N(g.body.data);
							e(Object(u.f)()), e(X({
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
								buttonAction: Object(n.b)(t.url)
							}))
						} else e(B(g.error)), e(Object(p.f)({
							text: i.fbt._("Something went wrong duplicating {multiName}", [i.fbt._param("multiName", s)], {
								hk: "4bzN2D"
							})
						}))
					}
				}, Z = Object(c.a)(M.b), ee = Object(c.a)(M.c), te = Object(c.a)(M.a), re = e => {
					let {
						communityInfo: t,
						identifier: r,
						multiredditNames: s
					} = e;
					return async (e, d, n) => {
						let {
							apiContext: c
						} = n;
						const l = d(),
							m = Object(I.m)(l);
						if (!m || l.multireddits.api.addSubreddit.pending) return;
						e(Z({
							name: r.name
						}));
						const {
							displayText: b
						} = m;
						if (!b) return;
						const j = s.map(e => `/user/${b.toLowerCase()}/m/${e.toLowerCase()}`).join(","),
							g = `${"profile"===r.type?a.pc:""}${r.name}`,
							y = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
								endpoint: Object(O.a)(`${e.apiUrl}/api/multi/bulk_add/r/${t}`),
								data: {
									paths: r
								},
								method: a.ob.PUT
							}))(c(), g, j);
						if (y.ok) {
							const d = Object(q.P)(l, {
									identifier: r
								}) || t && t.id || "",
								n = s.map(e => Object(T.h)(b, e));
							e(Object(u.f)()), e(Object(p.f)({
								text: i.fbt._({
									"*": "Successfully added {communityName} to {number} custom feeds!",
									_1: "Successfully added {communityName} to 1 custom feed!"
								}, [i.fbt._param("communityName", `${"subreddit"===r.type?o.d.subreddit:o.d.profile}${r.name}`), i.fbt._plural(s.length, "number")], {
									hk: "9EXsM"
								})
							})), await e(ee({
								communityInfo: t,
								id: d,
								multipaths: n,
								type: r.type
							})), 1 === s.length && await e($())
						} else {
							e(te(y.error));
							let t = i.fbt._("Sorry, something went wrong adding {subredditName}.", [i.fbt._param("subredditName", r.name)], {
								hk: "ERdWO"
							});
							y.body && (y.body.reason === M.d.TooManySubreddits ? t = i.fbt._("Maximum communities reached", null, {
								hk: "2eguyW"
							}) : y.body.reason === M.d.InvalidSrQuarantine && (t = i.fbt._("{communityname} is invalid because it is quarantined", [i.fbt._param("communityname", `${"subreddit"===r.type?o.d.subreddit:o.d.profile}${r.name}`)], {
								hk: "407xmS"
							}))), e(Object(p.f)({
								text: t,
								kind: E.b.Error
							}))
						}
					}
				}, ie = Object(c.a)(M.w), se = Object(c.a)(M.x), de = Object(c.a)(M.v), ne = e => {
					let {
						id: t,
						multiredditName: r,
						name: s,
						type: d
					} = e;
					return async (e, n, o) => {
						let {
							apiContext: c
						} = o;
						const l = n(),
							m = Object(I.m)(l);
						if (!m || !m.displayText || l.multireddits.api.removeSubreddit.pending) return;
						e(ie({
							id: t
						}));
						const {
							displayText: b
						} = m, j = Object(T.h)(b, r), g = `${"profile"===d?a.pc:""}${s}`, y = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(O.a)(`${e.apiUrl}/api/multi${r}r/${t}`),
							method: a.ob.DELETE
						}))(c(), g, j);
						y.ok ? (e(Object(u.f)()), e(se({
							id: t,
							multipath: j,
							type: d
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
									type: d
								},
								multiredditNames: [r]
							})
						})), e($())) : (e(de(y.error)), e(Object(p.f)({
							text: i.fbt._("Sorry, something went wrong removing {subredditName}.", [i.fbt._param("subredditName", s)], {
								hk: "1E1rKm"
							})
						})))
					}
				}, ae = Object(c.a)(M.h), oe = Object(c.a)(M.i), ce = Object(c.a)(M.j), le = e => async (t, r, s) => {
					let {
						apiContext: d
					} = s;
					const o = r();
					if (!Object(I.m)(o)) return;
					t(oe());
					const c = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/multi${t}`),
						method: a.ob.DELETE
					}))(d(), e);
					c.ok ? (await t(ce(e)), t(Object(u.f)()), await t(Object(n.b)("/")), t(Object(p.f)({
						text: i.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(ae(c.error))
				}, ue = Object(c.a)(M.n), me = Object(c.a)(M.o), pe = Object(c.a)(M.p), be = e => {
					let {
						description: t,
						displayText: r,
						multipath: s,
						visibility: d
					} = e;
					return async (e, n, o) => {
						let {
							apiContext: c
						} = o;
						const l = n();
						if (!Object(I.S)(l)) return;
						e(me());
						const m = await (e => {
							let {
								context: t,
								description: r,
								displayText: i,
								multipath: s,
								visibility: d
							} = e;
							return Object(f.a)(Object(h.a)(t, [x.a]), {
								endpoint: Object(O.a)(`${t.apiUrl}/api/multi${s}`),
								data: {
									model: JSON.stringify({
										description_md: r,
										display_name: i,
										visibility: d
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
							visibility: d
						});
						m.ok ? (await e(pe(N(m.body.data))), e(Object(u.f)()), e(Object(p.f)({
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
				}, fe = Object(c.a)(M.z), he = Object(c.a)(M.A), xe = Object(c.a)(M.B), Oe = e => {
					let {
						multiredditName: t,
						username: r,
						toExcludeNames: i
					} = e;
					return async (e, s, d) => {
						let {
							gqlContext: n
						} = d;
						const a = s(),
							o = Object(I.m)(a);
						if (!(r || o && o.displayText)) return;
						const c = Object(T.h)(r || o.displayText, t),
							l = a.multireddits.models[c];
						if (!l || !l.subredditIds) return;
						e(he());
						const u = i && i.reduce((e, t) => {
								const r = Object(q.I)(a, t) || Object(q.J)(a, t);
								return r ? [...e, r] : e
							}, []),
							m = await Object(C.a)(n(), {
								count: M.y,
								subredditIds: l.subredditIds,
								toExclude: u
							});
						if (m.ok) {
							const {
								data: t
							} = m.body;
							e(xe({
								multipath: c,
								subreddits: Object(k.b)(t)
							}))
						} else e(fe(m.error))
					}
				}
		},
		"./src/reddit/actions/pages/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "multiredditFeedPending", (function() {
				return w
			})), r.d(t, "multiredditFeedLoaded", (function() {
				return P
			})), r.d(t, "multiredditFeedFailed", (function() {
				return q
			})), r.d(t, "multiredditFeedRequested", (function() {
				return I
			})), r.d(t, "multiredditRequested", (function() {
				return L
			}));
			var i = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				d = r.n(s),
				n = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/lib/addQueryParams/index.ts"),
				o = r("./src/reddit/actions/multireddit/index.ts"),
				c = r("./src/reddit/endpoints/page/multiredditListing.ts"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/reddit/actions/platform.ts"),
				m = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/actions/users.ts"),
				b = r("./src/reddit/constants/parameters.ts"),
				f = r("./src/reddit/constants/postLayout.ts"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				x = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				j = r("./src/reddit/models/Multireddit/index.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/models/User/index.ts"),
				_ = r("./src/reddit/selectors/multireddit.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				F = r("./src/lib/makeActionCreator/index.ts"),
				v = r("./src/lib/makeListingKey/index.ts"),
				S = r("./src/reddit/actions/ads/index.ts"),
				k = r("./src/reddit/helpers/canonicalUrls.ts"),
				N = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				E = r("./src/reddit/actions/pages/multireddit/constants.ts");
			const w = Object(F.a)(E.c),
				P = Object(F.a)(E.b),
				q = Object(F.a)(E.a),
				I = (e, t, r, s, d) => async (n, a, u) => {
					const {
						gqlContext: p
					} = u, b = a();
					if (b.listings.postOrder.api.pending[e]) return;
					n(w({
						key: e
					})), s.layout = f.e[Object(h.U)(b, {})];
					const x = {
							path: Object(j.h)(t, r).replace(/\/$/, ""),
							includeIdentity: !0,
							includeSources: !0,
							sort: s.sort ? s.sort.toUpperCase() : void 0,
							range: s.t ? s.t.toUpperCase() : void 0
						},
						y = await Object(N.a)("multireddit", () => Object(c.a)(p(), x)),
						{
							data: _
						} = y.body,
						F = `error-${e}`;
					if (y.ok && _) {
						const i = Object(O.a)(_);
						if (!_.multireddit) return d && n(m.g(F)), void n(q({
							...i,
							error: {
								type: l.K.NOT_FOUND_ERROR
							},
							key: e
						}));
						n(P({
							key: e,
							meta: b.meta,
							...i,
							account: i.account || Object(C.m)(b),
							multiredditsModelsState: b.multireddits.models
						})), d && n(m.g(F)), n(Object(o.recommendationsRequested)({
							multiredditName: r,
							username: t
						})), window.addEventListener("load", () => {
							n(Object(S.b)(T.a.MULTIREDDIT))
						})
					} else d && n(m.f({
						id: F,
						kind: g.b.Error,
						text: i.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: i.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: I(e, t, r, s, d)
					}))
				}, L = (e, t) => async (r, i) => {
					const {
						multiredditName: s
					} = e.params;
					let {
						username: o
					} = e.params;
					if (!o) {
						let t = i();
						if (t.user.session && t.user.session.unsafeLoggedOut) return void r(Object(n.c)("/"));
						!t.user.account && t.user.session && await r(p.s()), t = i();
						const {
							account: d
						} = t.user;
						if (!d) return void r(Object(n.c)("/"));
						let c = `/user/${o=Object(y.e)(d)}/m/${s}`;
						const {
							sort: l
						} = e.params;
						return c += l ? `/${l}` : "", void r(Object(n.c)(Object(a.a)(c, e.queryParams)))
					}
					const {
						sort: c = l.bb.HOT
					} = e.params, m = {
						multiredditName: s,
						username: o
					}, f = i();
					o || (o = f.user.account ? Object(y.e)(f.user.account) : "");
					const h = Object(j.h)(o, s),
						O = Object(v.a)(h, c, e.queryParams),
						g = f.listings.postOrder.ids[O],
						C = f.listings.postOrder.api.error[O],
						F = f.listings.postOrder.api.pending[O],
						N = b.H in e.queryParams && e.queryParams[b.H].toUpperCase() || "",
						E = N in l.nc && l.nc[N];
					if (F || g && !C && !t) return void(g && (r(u.n({
						title: Object(_.f)(i(), m)
					})), f.sidebarPromotedPosts.firstFetch || r(Object(S.b)(T.a.MULTIREDDIT))));
					await r(I(O, o, s, {
						...d()(e.queryParams, b.p),
						...d()(e.queryParams, b.o),
						sort: c,
						t: Object(x.a)(c, E)
					}, !0));
					const w = i();
					Object(_.d)(w, m) && r(u.n({
						title: Object(_.f)(i(), m)
					})), Object(k.e)(w, r, e)
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
				d = r("./src/lib/classNames/index.ts"),
				n = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				a = r("./src/reddit/components/CharacterCountdown/index.m.less"),
				o = r.n(a);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(n.b, {
				className: Object(d.a)(e.className, o.a.container, e.text.length >= e.maxChars ? o.a.mOverflow : null)
			}, c._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [c._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/MultiredditCreateModal/index.m.less": function(e, t, r) {
			e.exports = {
				descriptionTextarea: "BvM2wKFgTlLO_vHWz41sP",
				loadingIcon: "_3fhbBxjym01vboyu5QPAHu",
				nameError: "_3-VIa6wT3Iz3NII7VXiFI0"
			}
		},
		"./src/reddit/components/MultiredditCreateModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var i = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				d = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/higherOrderComponents/asModal/index.tsx"),
				c = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/multireddit/index.ts"),
				u = r("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = r("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				b = r("./src/reddit/components/ThemeProvider/index.tsx"),
				f = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				x = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				O = r("./src/reddit/helpers/multireddit/index.ts"),
				j = r("./src/reddit/helpers/trackers/customFeeds.ts"),
				g = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				y = r("./src/reddit/models/Multireddit/index.ts"),
				_ = r("./src/reddit/selectors/multireddit.ts"),
				C = r("./src/reddit/components/MultiredditCreateModal/index.m.less"),
				F = r.n(C);
			const v = 12,
				S = Object(h.v)({
					multiredditParams: h.d
				}),
				k = Object(a.c)({
					createError: e => e.multireddits.api.create.error,
					createFetched: e => e.multireddits.api.create.fetched,
					createPending: e => e.multireddits.api.create.pending,
					duplicateError: e => e.multireddits.api.duplicate.error,
					duplicateFetched: e => e.multireddits.api.duplicate.fetched,
					duplicatePending: e => e.multireddits.api.duplicate.pending,
					myMultireddits: _.j
				}),
				N = Object(n.b)(k, (e, t) => {
					let {
						multiredditParams: r
					} = t;
					return {
						create: (t, r) => e(Object(l.createRequested)({
							displayName: t,
							description: r,
							shouldNavigate: !0
						})),
						duplicate: (t, i) => {
							r && e(Object(l.duplicateRequested)({
								fromName: r.multiredditName,
								fromUsername: r.username,
								displayName: t,
								description: i
							}))
						},
						onClose: () => e(Object(c.f)())
					}
				});
			class T extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						description: "",
						name: ""
					}, this.onNameChange = e => {
						this.setState({
							displayTextError: void 0,
							name: e.target.value
						})
					}, this.onDescriptionChange = e => {
						this.setState({
							description: e.target.value
						})
					}, this.checkDisplayTextValidity = () => {
						const e = Object(O.a)({
							displayText: this.state.name,
							myMultireddits: this.props.myMultireddits,
							thisMultireddit: null
						});
						return !e || (this.setState({
							displayTextError: e
						}), !1)
					}, this.onSubmit = () => {
						if (!this.checkDisplayTextValidity()) return;
						const {
							multiredditParams: e
						} = this.props;
						this.props.isDuplicateModal && e ? (this.props.duplicate(this.state.name.trim(), this.state.description.trim()), e.username && this.props.sendEvent(Object(j.b)(Object(y.h)(e.username, e.multiredditName)))) : this.props.create(this.state.name.trim(), this.state.description.trim())
					}
				}
				render() {
					const {
						createError: e,
						createPending: t,
						duplicateError: r,
						duplicatePending: s,
						isDuplicateModal: n,
						onClose: a
					} = this.props, {
						description: o,
						displayTextError: c,
						name: l
					} = this.state, f = e || r || c;
					return d.a.createElement(b.a, {
						forceRedditTheme: !0
					}, d.a.createElement(m.e, null, d.a.createElement(m.i, null, d.a.createElement(g.a, null, d.a.createElement(m.q, null, n ? i.fbt._("Duplicate This Custom Feed", null, {
						hk: "owR2J"
					}) : i.fbt._("Create a Custom Feed", null, {
						hk: "IDT2Q"
					})), d.a.createElement("button", {
						onClick: a
					}, d.a.createElement(m.b, null)))), d.a.createElement(m.l, null, d.a.createElement(m.h, null, d.a.createElement(p.b, {
						isRequired: !0,
						label: i.fbt._("custom feed name", null, {
							hk: "4rkm37"
						}),
						maxLength: y.c,
						onBlur: this.checkDisplayTextValidity,
						onChange: this.onNameChange,
						state: f ? p.d.Invalid : void 0,
						value: l
					}), f ? d.a.createElement("p", {
						className: F.a.nameError
					}, c === y.a.SameName ? i.fbt._("A custom feed with that name already exists.", null, {
						hk: "1kacgW"
					}) : c === y.a.TooShort ? i.fbt._("Name must contain at least two alphanumeric characters.", null, {
						hk: "2pu0fh"
					}) : i.fbt._("Something went wrong.", null, {
						hk: "4lGCzV"
					})) : d.a.createElement(u.a, {
						text: l,
						maxChars: y.c
					})), d.a.createElement(m.h, null, d.a.createElement(p.c, {
						className: F.a.descriptionTextarea,
						label: i.fbt._("description (optional)", null, {
							hk: "4mWEDA"
						}),
						maxLength: y.b,
						onChange: this.onDescriptionChange,
						value: o
					}), d.a.createElement(u.a, {
						text: o,
						maxChars: y.b
					}))), d.a.createElement(m.g, null, d.a.createElement(m.r, {
						onClick: this.onSubmit
					}, t || s ? d.a.createElement(x.a, {
						className: F.a.loadingIcon,
						sizePx: v
					}) : n ? i.fbt._("Duplicate Custom Feed", null, {
						hk: "4t4IAs"
					}) : i.fbt._("Create Custom Feed", null, {
						hk: "45F3LZ"
					})))))
				}
			}
			t.default = Object(o.a)(S(N(Object(f.c)(T))))
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
				return O
			})), r.d(t, "c", (function() {
				return j
			}));
			var i = r("./node_modules/react/index.js"),
				s = r.n(i),
				d = r("./src/lib/classNames/index.ts"),
				n = r("./src/lib/lessComponent.tsx"),
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
			const m = n.a.div("icon", l.a),
				p = n.a.textarea("textarea", l.a),
				b = n.a.span("Invalid", l.a);
			var f, h;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(f || (f = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(h || (h = {}));
			const x = e => s.a.createElement("div", {
					className: Object(d.a)(e.isRequired && l.a.required, e.className, {
						[l.a.container]: !e.isTextarea,
						[l.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[l.a.mValid]: e.state === f.Valid,
							[l.a.mInvalid]: e.state === f.Invalid,
							[l.a.mWhiteField]: e.backgroundColorState === h.WhiteFields
						}
					})
				}, s.a.createElement("label", {
					className: Object(d.a)({
						[l.a.field]: !e.isTextarea,
						[l.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && s.a.createElement("span", {
					className: l.a.label
				}, e.label), !!e.state && s.a.createElement(m, {
					className: Object(d.a)({
						[l.a.mValid]: e.state === f.Valid,
						[l.a.mInvalid]: e.state === f.Invalid
					})
				}, e.state === f.Valid && s.a.createElement(o.a, null), e.state === f.Invalid && s.a.createElement(b, null, "!")))),
				O = e => {
					const {
						backgroundColorState: t,
						className: r,
						inputRef: i,
						isRequired: n,
						label: o,
						onKeyDown: c,
						state: m,
						...p
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: r,
						isRequired: n,
						label: o,
						state: m
					}, s.a.createElement(a.a, u({}, p, {
						className: Object(d.a)(l.a.input, l.a.control, {
							[l.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: i,
						onKeyDown: c
					})))
				},
				j = e => {
					const {
						backgroundColorState: t,
						className: r,
						inputRef: i,
						isRequired: n,
						label: a,
						onKeyDown: o,
						state: c,
						...m
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: r,
						isRequired: n,
						label: a,
						state: c,
						isTextarea: !0
					}, s.a.createElement(p, u({}, m, {
						className: Object(d.a)({
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
				return n
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
				return O
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "j", (function() {
				return y
			}));
			var i = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				d = r.n(s);
			const n = i.a.section("FormPage", d.a),
				a = i.a.h1("HomePageTitle", d.a),
				o = i.a.button("HomePageBreadcrumb", d.a),
				c = i.a.div("HomePageGroup", d.a),
				l = i.a.h1("FormPageTitle", d.a),
				u = i.a.div("FormPageSection", d.a),
				m = i.a.div("FormGroup", d.a),
				p = i.a.h2("FormGroupTitle", d.a),
				b = i.a.div("FormElement", d.a),
				f = i.a.div("FormGroupDescription", d.a),
				h = i.a.div("FormItem", d.a),
				x = i.a.h3("FormElementTitle", d.a),
				O = i.a.div("FormElementDescription", d.a),
				j = i.a.div("FormElementError", d.a),
				g = i.a.div("FormElementSubGroup", d.a),
				y = i.a.li("FormListItem", d.a)
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, r) {
			"use strict";
			var i = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/controls/Input/index.m.less"),
				d = r.n(s);
			t.a = i.a.input("input", d.a)
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
				d = r("./src/lib/classNames/index.ts"),
				n = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = r.n(n);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: i = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(d.a)(a.a.loadingIcon, r, {
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
				d = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				n = r("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
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
					multireddit: p
				} = e;
				if (r && (t.account = Object(u.a)(r) || null, t.preferences = Object(c.a)(r.preferences, r.interactions) || null), !p) return t;
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
							post: n,
							crosspost: c
						} = r && Object(o.a)(r);
						t.posts[n.id] = n, c && (t.posts[c.id] = c), Object(m.j)(r) || Object(m.i)(r) || (r.authorFlair && (t.postFlair[n.belongsTo.id] || (t.postFlair[n.belongsTo.id] = {}), t.postFlair[n.belongsTo.id][n.author] = Object(d.a)(r.authorFlair)[0]), Object(m.n)(r) && (t.subreddits[r.subreddit.id] || (t.subreddits[r.subreddit.id] = Object(l.a)(r.subreddit)), t.postFlair[r.subreddit.id] || (t.postFlair[r.subreddit.id] = Object(a.a)(r.subreddit))))
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
					subreddits: O
				} = Object(n.a)(p);
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
						...O
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MultiredditCreateModal.3a397d76787c8049b568.js.map