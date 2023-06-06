// https://www.redditstatic.com/desktop2x/MultiredditEditModal.60ddd77b76469f1d5a8e.js
// Retrieved at 6/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MultiredditEditModal"], {
		"./src/reddit/actions/multireddit/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "morePostsFailed", (function() {
				return M
			})), i.d(t, "morePostsLoaded", (function() {
				return D
			})), i.d(t, "morePostsPending", (function() {
				return G
			})), i.d(t, "moreOfMyMultiRequested", (function() {
				return U
			})), i.d(t, "myMultiredditsPending", (function() {
				return W
			})), i.d(t, "myMultiredditsReceived", (function() {
				return H
			})), i.d(t, "myMultiredditsRequested", (function() {
				return A
			})), i.d(t, "createFailure", (function() {
				return z
			})), i.d(t, "createPending", (function() {
				return Q
			})), i.d(t, "createSuccess", (function() {
				return K
			})), i.d(t, "createRequested", (function() {
				return J
			})), i.d(t, "reloadCurrentMultiredditFeedRequested", (function() {
				return B
			})), i.d(t, "duplicateFailure", (function() {
				return $
			})), i.d(t, "duplicatePending", (function() {
				return V
			})), i.d(t, "duplicateSuccess", (function() {
				return X
			})), i.d(t, "duplicateRequested", (function() {
				return Z
			})), i.d(t, "addSubredditPending", (function() {
				return Y
			})), i.d(t, "addSubredditSuccess", (function() {
				return ee
			})), i.d(t, "addSubredditFailure", (function() {
				return te
			})), i.d(t, "addSubredditRequested", (function() {
				return ie
			})), i.d(t, "removeSubredditPending", (function() {
				return re
			})), i.d(t, "removeSubredditSuccess", (function() {
				return se
			})), i.d(t, "removeSubredditFailure", (function() {
				return ne
			})), i.d(t, "removeSubredditRequested", (function() {
				return de
			})), i.d(t, "deleteFailure", (function() {
				return ae
			})), i.d(t, "deletePending", (function() {
				return oe
			})), i.d(t, "deleteSuccess", (function() {
				return le
			})), i.d(t, "deleteRequested", (function() {
				return ce
			})), i.d(t, "editFailure", (function() {
				return ue
			})), i.d(t, "editPending", (function() {
				return me
			})), i.d(t, "editSuccess", (function() {
				return pe
			})), i.d(t, "editRequested", (function() {
				return be
			})), i.d(t, "subredditRecommendationsFailure", (function() {
				return fe
			})), i.d(t, "subredditRecommendationsPending", (function() {
				return he
			})), i.d(t, "subredditRecommendationsSuccess", (function() {
				return xe
			})), i.d(t, "recommendationsRequested", (function() {
				return ye
			}));
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/pick.js"),
				n = i.n(s),
				d = i("./node_modules/react-router-redux/es/index.js"),
				a = i("./src/lib/constants/index.ts"),
				o = i("./src/lib/linkMatchers/customLinks.ts"),
				l = i("./src/lib/makeActionCreator/index.ts"),
				c = i("./src/lib/makeListingKey/index.ts"),
				u = i("./src/reddit/actions/modal.ts"),
				m = i("./src/reddit/actions/pages/multireddit/index.ts"),
				p = i("./src/reddit/actions/toaster.ts"),
				b = i("./src/reddit/constants/parameters.ts"),
				f = i("./src/lib/makeApiRequest/index.ts"),
				h = i("./src/lib/omitHeaders/index.ts"),
				x = i("./src/reddit/constants/headers.ts"),
				y = i("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				O = i("./src/lib/makeGqlRequest/index.ts"),
				g = i("./src/redditGQL/operations/AllUserMultireddits.json"),
				j = (e, t) => Object(O.a)(e, {
					...g,
					variables: t
				}),
				_ = i("./src/reddit/endpoints/page/multiredditListing.ts"),
				v = i("./src/reddit/endpoints/subreddit/recommendations.ts"),
				C = i("./src/reddit/helpers/filterListingResponse/index.ts"),
				T = i("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				S = i("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				w = i("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				F = e => {
					let t = e.over_18 || !1;
					if (!t)
						for (const d of e.subreddits)
							if (d.data.over_18) {
								t = !0;
								break
							} let i = e.quarantine || !1;
					if (!i)
						for (const d of e.subreddits) {
							const e = (d.data.audience_target || "").split(",");
							if (d.data.quarantine || e.indexOf("unsafe") > -1) {
								i = !0;
								break
							}
						}
					const r = e.subreddits.map(e => {
							const t = e.data,
								{
									name: i,
									display_name: r
								} = t;
							return {
								id: i,
								displayName: r.toLowerCase()
							}
						}).sort((e, t) => e.displayName.localeCompare(t.displayName)),
						s = r.filter(e => !e.displayName.startsWith(a.pc)).map(e => e.id),
						n = r.filter(e => e.displayName.startsWith(a.pc)).map(e => e.id);
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
						isQuarantined: i,
						name: e.name,
						ownerId: e.owner_id,
						profileIds: n,
						subredditCount: e.subreddits.length,
						subredditIds: s,
						url: e.path.toLowerCase(),
						visibility: e.visibility
					}
				},
				N = i("./src/reddit/models/Multireddit/index.ts"),
				k = i("./src/reddit/models/Toast/index.ts"),
				E = i("./src/reddit/selectors/multireddit.ts"),
				P = i("./src/reddit/selectors/platform.ts"),
				q = i("./src/reddit/selectors/subreddit.ts"),
				I = i("./src/reddit/selectors/user.ts"),
				L = i("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				R = i("./src/reddit/actions/multireddit/constants.ts");
			const M = Object(l.a)(R.q),
				D = Object(l.a)(R.r),
				G = Object(l.a)(R.s),
				U = e => async (t, i, r) => {
					const {
						gqlContext: s
					} = r, {
						sort: n = a.bb.HOT,
						multiredditName: d,
						username: o
					} = e, l = i(), u = l.platform.currentPage, m = u ? u.queryParams : {}, p = Object(E.d)(l, {
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
					const O = p.url.replace(/\/$/, ""),
						g = m.t ? m.t.toUpperCase() : void 0,
						j = {
							after: f.token,
							includeIdentity: !1,
							includeSources: !1,
							path: O,
							range: g,
							sort: n.toUpperCase()
						},
						v = await Object(_.a)(s(), j),
						{
							data: T
						} = v.body,
						w = Object(S.a)(T);
					v.ok && T && T.multireddit ? t(D({
						fetchedToken: f.token,
						key: b,
						meta: l.meta,
						...w,
						...Object(C.a)(l, b, w),
						multiredditsModelsState: l.multireddits.models
					})) : t(M({
						error: {
							type: a.K.NOT_FOUND_ERROR
						},
						fetchedToken: f.token,
						key: b,
						...v.body,
						...Object(C.a)(l, b, w)
					}))
				}, W = Object(l.a)(R.t), H = Object(l.a)(R.u), A = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (i, r, s) => {
						let {
							apiContext: n,
							gqlContext: d
						} = s;
						const a = r();
						if (!Object(I.m)(a)) return;
						if (!e && Object(E.h)(a) || Object(E.i)(a)) return;
						i(W());
						const o = await j(d(), {
							includeSources: t
						});
						if (o.ok) {
							const e = o.body.data.identity.allMultireddits.edges.map(e => e.node),
								t = Object(T.b)(e);
							i(H({
								...t,
								multiredditsModelsState: a.multireddits.models
							}))
						}
					}
				}, z = Object(l.a)(R.e), Q = Object(l.a)(R.f), K = Object(l.a)(R.g), J = e => {
					let {
						description: t,
						displayName: i,
						shouldNavigate: s
					} = e;
					return async (e, n, o) => {
						let {
							apiContext: l
						} = o;
						const c = n(),
							m = Object(I.m)(c);
						if (!m) return;
						e(Q());
						const b = await ((e, t, i) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/multi`),
							data: {
								model: JSON.stringify({
									description_md: i,
									display_name: t,
									visibility: "private",
									subreddits: []
								})
							},
							method: a.ob.POST
						}))(l(), i, t);
						if (b.ok) {
							const {
								id: t
							} = m;
							if (await e(K({
									multireddit: F(b.body.data),
									multiredditsModelsState: c.multireddits.models,
									userId: t
								})), s) {
								e(Object(u.f)());
								const t = b.body.data.path.toLowerCase();
								await e(Object(d.b)(t))
							}
							e(Object(p.f)({
								text: r.fbt._("Custom feed created!", null, {
									hk: "258cY9"
								})
							}))
						} else e(z(b.error))
					}
				}, B = () => async (e, t, i) => {
					let {
						apiContext: r
					} = i;
					const s = t(),
						d = Object(I.m)(s),
						o = Object(P.i)(s) ? Object(P.m)(s) : Object(P.b)(s),
						l = o && o.routeMatch && o.routeMatch.match;
					if (!l) return;
					const u = l.params,
						p = u.sort || a.bb.HOT,
						{
							multiredditName: f,
							username: h
						} = u;
					if (!f) return;
					const x = Object(N.h)((h || d && d.displayText || "").toLowerCase(), f.toLowerCase()),
						{
							queryParams: y
						} = l,
						O = Object(c.a)(x, p, y),
						g = b.H in y && y[b.H].toUpperCase() || "",
						j = a.nc[g] || !1,
						_ = Object(I.m)(s);
					(h || _ && _.displayText) && await e(Object(m.multiredditFeedRequested)(O, (h || _.displayText).toLowerCase(), f.toLowerCase(), {
						...n()(y, b.p),
						...n()(y, b.o),
						sort: p,
						t: Object(L.a)(p, j)
					}))
				}, $ = Object(l.a)(R.k), V = Object(l.a)(R.l), X = Object(l.a)(R.m), Z = e => {
					let {
						description: t,
						displayName: i,
						fromName: s,
						fromUsername: n
					} = e;
					return async (e, o, l) => {
						let {
							apiContext: c
						} = l;
						const m = o(),
							b = Object(I.m)(m);
						if (!b || !b.displayText) return;
						const O = Object(N.h)((n || b.displayText).toLowerCase(), s.toLowerCase());
						e(V());
						const g = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/multi/copy`),
							data: {
								description_md: t.description,
								display_name: t.displayName,
								expand_srs: !0,
								from: t.from
							},
							method: a.ob.POST
						}))(c(), {
							from: O,
							displayName: i,
							description: t
						});
						if (g.ok) {
							const t = F(g.body.data);
							e(Object(u.f)()), e(X({
								multireddit: t,
								multiredditsModelsState: m.multireddits.models,
								userId: b.id
							})), e(Object(p.f)({
								text: r.fbt._("Custom feed duplicated!", null, {
									hk: "2u48X"
								}),
								buttonText: r.fbt._("Go there", null, {
									hk: "4sXZMm"
								}),
								buttonAction: Object(d.b)(t.url)
							}))
						} else e($(g.error)), e(Object(p.f)({
							text: r.fbt._("Something went wrong duplicating {multiName}", [r.fbt._param("multiName", s)], {
								hk: "4bzN2D"
							})
						}))
					}
				}, Y = Object(l.a)(R.b), ee = Object(l.a)(R.c), te = Object(l.a)(R.a), ie = e => {
					let {
						communityInfo: t,
						identifier: i,
						multiredditNames: s
					} = e;
					return async (e, n, d) => {
						let {
							apiContext: l
						} = d;
						const c = n(),
							m = Object(I.m)(c);
						if (!m || c.multireddits.api.addSubreddit.pending) return;
						e(Y({
							name: i.name
						}));
						const {
							displayText: b
						} = m;
						if (!b) return;
						const O = s.map(e => `/user/${b.toLowerCase()}/m/${e.toLowerCase()}`).join(","),
							g = `${"profile"===i.type?a.pc:""}${i.name}`,
							j = await ((e, t, i) => Object(f.a)(Object(h.a)(e, [x.a]), {
								endpoint: Object(y.a)(`${e.apiUrl}/api/multi/bulk_add/r/${t}`),
								data: {
									paths: i
								},
								method: a.ob.PUT
							}))(l(), g, O);
						if (j.ok) {
							const n = Object(q.P)(c, {
									identifier: i
								}) || t && t.id || "",
								d = s.map(e => Object(N.h)(b, e));
							e(Object(u.f)()), e(Object(p.f)({
								text: r.fbt._({
									"*": "Successfully added {communityName} to {number} custom feeds!",
									_1: "Successfully added {communityName} to 1 custom feed!"
								}, [r.fbt._param("communityName", `${"subreddit"===i.type?o.d.subreddit:o.d.profile}${i.name}`), r.fbt._plural(s.length, "number")], {
									hk: "9EXsM"
								})
							})), await e(ee({
								communityInfo: t,
								id: n,
								multipaths: d,
								type: i.type
							})), 1 === s.length && await e(B())
						} else {
							e(te(j.error));
							let t = r.fbt._("Sorry, something went wrong adding {subredditName}.", [r.fbt._param("subredditName", i.name)], {
								hk: "ERdWO"
							});
							j.body && (j.body.reason === R.d.TooManySubreddits ? t = r.fbt._("Maximum communities reached", null, {
								hk: "2eguyW"
							}) : j.body.reason === R.d.InvalidSrQuarantine && (t = r.fbt._("{communityname} is invalid because it is quarantined", [r.fbt._param("communityname", `${"subreddit"===i.type?o.d.subreddit:o.d.profile}${i.name}`)], {
								hk: "407xmS"
							}))), e(Object(p.f)({
								text: t,
								kind: k.b.Error
							}))
						}
					}
				}, re = Object(l.a)(R.w), se = Object(l.a)(R.x), ne = Object(l.a)(R.v), de = e => {
					let {
						id: t,
						multiredditName: i,
						name: s,
						type: n
					} = e;
					return async (e, d, o) => {
						let {
							apiContext: l
						} = o;
						const c = d(),
							m = Object(I.m)(c);
						if (!m || !m.displayText || c.multireddits.api.removeSubreddit.pending) return;
						e(re({
							id: t
						}));
						const {
							displayText: b
						} = m, O = Object(N.h)(b, i), g = `${"profile"===n?a.pc:""}${s}`, j = await ((e, t, i) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/multi${i}r/${t}`),
							method: a.ob.DELETE
						}))(l(), g, O);
						j.ok ? (e(Object(u.f)()), e(se({
							id: t,
							multipath: O,
							type: n
						})), e(Object(p.f)({
							text: r.fbt._("{subredditname} removed from your custom feed!", [r.fbt._param("subredditname", s)], {
								hk: "uaWNe"
							}),
							buttonText: r.fbt._("undo", null, {
								hk: "3HH7IT"
							}),
							buttonAction: ie({
								identifier: {
									name: s,
									type: n
								},
								multiredditNames: [i]
							})
						})), e(B())) : (e(ne(j.error)), e(Object(p.f)({
							text: r.fbt._("Sorry, something went wrong removing {subredditName}.", [r.fbt._param("subredditName", s)], {
								hk: "1E1rKm"
							})
						})))
					}
				}, ae = Object(l.a)(R.h), oe = Object(l.a)(R.i), le = Object(l.a)(R.j), ce = e => async (t, i, s) => {
					let {
						apiContext: n
					} = s;
					const o = i();
					if (!Object(I.m)(o)) return;
					t(oe());
					const l = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${t}`),
						method: a.ob.DELETE
					}))(n(), e);
					l.ok ? (await t(le(e)), t(Object(u.f)()), await t(Object(d.b)("/")), t(Object(p.f)({
						text: r.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(ae(l.error))
				}, ue = Object(l.a)(R.n), me = Object(l.a)(R.o), pe = Object(l.a)(R.p), be = e => {
					let {
						description: t,
						displayText: i,
						multipath: s,
						visibility: n
					} = e;
					return async (e, d, o) => {
						let {
							apiContext: l
						} = o;
						const c = d();
						if (!Object(I.S)(c)) return;
						e(me());
						const m = await (e => {
							let {
								context: t,
								description: i,
								displayText: r,
								multipath: s,
								visibility: n
							} = e;
							return Object(f.a)(Object(h.a)(t, [x.a]), {
								endpoint: Object(y.a)(`${t.apiUrl}/api/multi${s}`),
								data: {
									model: JSON.stringify({
										description_md: i,
										display_name: r,
										visibility: n
									}),
									expand_srs: !0
								},
								method: a.ob.PUT
							})
						})({
							context: l(),
							description: t,
							displayText: i,
							multipath: s,
							visibility: n
						});
						m.ok ? (await e(pe(F(m.body.data))), e(Object(u.f)()), e(Object(p.f)({
							text: r.fbt._("Custom feed updated!", null, {
								hk: "39R30f"
							})
						}))) : (e(ue(m.error)), e(Object(p.f)({
							kind: k.b.Error,
							text: r.fbt._("Something went wrong", null, {
								hk: "1Y6lli"
							})
						})))
					}
				}, fe = Object(l.a)(R.z), he = Object(l.a)(R.A), xe = Object(l.a)(R.B), ye = e => {
					let {
						multiredditName: t,
						username: i,
						toExcludeNames: r
					} = e;
					return async (e, s, n) => {
						let {
							gqlContext: d
						} = n;
						const a = s(),
							o = Object(I.m)(a);
						if (!(i || o && o.displayText)) return;
						const l = Object(N.h)(i || o.displayText, t),
							c = a.multireddits.models[l];
						if (!c || !c.subredditIds) return;
						e(he());
						const u = r && r.reduce((e, t) => {
								const i = Object(q.I)(a, t) || Object(q.J)(a, t);
								return i ? [...e, i] : e
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
								subreddits: Object(w.b)(t)
							}))
						} else e(fe(m.error))
					}
				}
		},
		"./src/reddit/actions/pages/multireddit/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "multiredditFeedPending", (function() {
				return E
			})), i.d(t, "multiredditFeedLoaded", (function() {
				return P
			})), i.d(t, "multiredditFeedFailed", (function() {
				return q
			})), i.d(t, "multiredditFeedRequested", (function() {
				return I
			})), i.d(t, "multiredditRequested", (function() {
				return L
			}));
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/pick.js"),
				n = i.n(s),
				d = i("./node_modules/react-router-redux/es/index.js"),
				a = i("./src/lib/addQueryParams/index.ts"),
				o = i("./src/reddit/actions/multireddit/index.ts"),
				l = i("./src/reddit/endpoints/page/multiredditListing.ts"),
				c = i("./src/lib/constants/index.ts"),
				u = i("./src/reddit/actions/platform.ts"),
				m = i("./src/reddit/actions/toaster.ts"),
				p = i("./src/reddit/actions/users.ts"),
				b = i("./src/reddit/constants/parameters.ts"),
				f = i("./src/reddit/constants/postLayout.ts"),
				h = i("./src/reddit/contexts/PageLayer/index.tsx"),
				x = i("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				y = i("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				O = i("./src/reddit/models/Multireddit/index.ts"),
				g = i("./src/reddit/models/Toast/index.ts"),
				j = i("./src/reddit/models/User/index.ts"),
				_ = i("./src/reddit/selectors/multireddit.ts"),
				v = i("./src/reddit/selectors/user.ts"),
				C = i("./src/lib/makeActionCreator/index.ts"),
				T = i("./src/lib/makeListingKey/index.ts"),
				S = i("./src/reddit/actions/ads/index.ts"),
				w = i("./src/reddit/helpers/canonicalUrls.ts"),
				F = i("./src/reddit/helpers/timeApiRoute/index.ts"),
				N = i("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				k = i("./src/reddit/actions/pages/multireddit/constants.ts");
			const E = Object(C.a)(k.c),
				P = Object(C.a)(k.b),
				q = Object(C.a)(k.a),
				I = (e, t, i, s, n) => async (d, a, u) => {
					const {
						gqlContext: p
					} = u, b = a();
					if (b.listings.postOrder.api.pending[e]) return;
					d(E({
						key: e
					})), s.layout = f.e[Object(h.U)(b, {})];
					const x = {
							path: Object(O.h)(t, i).replace(/\/$/, ""),
							includeIdentity: !0,
							includeSources: !0,
							sort: s.sort ? s.sort.toUpperCase() : void 0,
							range: s.t ? s.t.toUpperCase() : void 0
						},
						j = await Object(F.a)("multireddit", () => Object(l.a)(p(), x)),
						{
							data: _
						} = j.body,
						C = `error-${e}`;
					if (j.ok && _) {
						const r = Object(y.a)(_);
						if (!_.multireddit) return n && d(m.g(C)), void d(q({
							...r,
							error: {
								type: c.K.NOT_FOUND_ERROR
							},
							key: e
						}));
						d(P({
							key: e,
							meta: b.meta,
							...r,
							account: r.account || Object(v.m)(b),
							multiredditsModelsState: b.multireddits.models
						})), n && d(m.g(C)), d(Object(o.recommendationsRequested)({
							multiredditName: i,
							username: t
						})), window.addEventListener("load", () => {
							d(Object(S.b)(N.a.MULTIREDDIT))
						})
					} else n && d(m.f({
						id: C,
						kind: g.b.Error,
						text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: I(e, t, i, s, n)
					}))
				}, L = (e, t) => async (i, r) => {
					const {
						multiredditName: s
					} = e.params;
					let {
						username: o
					} = e.params;
					if (!o) {
						let t = r();
						if (t.user.session && t.user.session.unsafeLoggedOut) return void i(Object(d.c)("/"));
						!t.user.account && t.user.session && await i(p.s()), t = r();
						const {
							account: n
						} = t.user;
						if (!n) return void i(Object(d.c)("/"));
						let l = `/user/${o=Object(j.e)(n)}/m/${s}`;
						const {
							sort: c
						} = e.params;
						return l += c ? `/${c}` : "", void i(Object(d.c)(Object(a.a)(l, e.queryParams)))
					}
					const {
						sort: l = c.bb.HOT
					} = e.params, m = {
						multiredditName: s,
						username: o
					}, f = r();
					o || (o = f.user.account ? Object(j.e)(f.user.account) : "");
					const h = Object(O.h)(o, s),
						y = Object(T.a)(h, l, e.queryParams),
						g = f.listings.postOrder.ids[y],
						v = f.listings.postOrder.api.error[y],
						C = f.listings.postOrder.api.pending[y],
						F = b.H in e.queryParams && e.queryParams[b.H].toUpperCase() || "",
						k = F in c.nc && c.nc[F];
					if (C || g && !v && !t) return void(g && (i(u.n({
						title: Object(_.f)(r(), m)
					})), f.sidebarPromotedPosts.firstFetch || i(Object(S.b)(N.a.MULTIREDDIT))));
					await i(I(y, o, s, {
						...n()(e.queryParams, b.p),
						...n()(e.queryParams, b.o),
						sort: l,
						t: Object(x.a)(l, k)
					}, !0));
					const E = r();
					Object(_.d)(E, m) && i(u.n({
						title: Object(_.f)(r(), m)
					})), Object(w.e)(E, i, e)
				}
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, i) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				s = i.n(r),
				n = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				a = i("./src/reddit/components/CharacterCountdown/index.m.less"),
				o = i.n(a);
			const {
				fbt: l
			} = i("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(d.b, {
				className: Object(n.a)(e.className, o.a.container, e.text.length >= e.maxChars ? o.a.mOverflow : null)
			}, l._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [l._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/MultiredditEditModal/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/MultiredditEditModal/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				n = i.n(s),
				d = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				o = i("./src/higherOrderComponents/asModal/index.tsx"),
				l = i("./src/higherOrderComponents/asTooltip.tsx"),
				c = i("./src/lib/classNames/index.ts"),
				u = i("./src/reddit/actions/modal.ts"),
				m = i("./src/reddit/actions/multireddit/index.ts"),
				p = i("./src/reddit/actions/tooltip.ts"),
				b = i("./src/reddit/components/CharacterCountdown/index.tsx"),
				f = i("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = i("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				x = i("./src/reddit/contexts/PageLayer/index.tsx"),
				y = i("./src/reddit/controls/Button/index.tsx"),
				O = i("./src/reddit/controls/Dropdown/index.tsx"),
				g = i("./src/reddit/controls/Dropdown/Row.tsx"),
				j = i("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = i("./src/reddit/controls/ToggleSwitch/index.tsx"),
				v = i("./src/reddit/helpers/multireddit/index.ts"),
				C = i("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				T = i("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				S = i("./src/reddit/models/Multireddit/index.ts"),
				w = i("./src/reddit/selectors/multireddit.ts"),
				F = i("./src/reddit/selectors/tooltip.ts"),
				N = i("./src/reddit/components/MultiredditEditModal/index.m.less"),
				k = i.n(N);
			const E = Object(l.a)(O.a),
				P = () => r.fbt._("public", null, {
					hk: "2SLZ4Q"
				}),
				q = () => r.fbt._("private", null, {
					hk: "3E0m6i"
				}),
				I = 12,
				L = "multi-edit-modal-visibility",
				R = Object(a.c)({
					apiFetched: e => e.multireddits.api.edit.fetched,
					apiPending: e => e.multireddits.api.edit.pending,
					isDropdownOpen: Object(F.b)(L),
					multireddit: x.e,
					myMultireddits: w.j
				}),
				M = Object(x.v)(),
				D = Object(d.b)(R, e => ({
					edit: t => e(Object(m.editRequested)(t)),
					onClose: () => e(Object(u.f)()),
					onToggleDropdown: () => e(Object(p.h)({
						tooltipId: L
					}))
				}), (e, t, i) => ({
					...e,
					...t,
					...i,
					onSubmit: i => {
						let {
							visibility: r,
							description: s,
							displayText: n
						} = i;
						e.multireddit && (e.multireddit.description !== s || e.multireddit.displayText !== n || e.multireddit.visibility !== r ? t.edit({
							description: s,
							displayText: n,
							multipath: e.multireddit.url,
							visibility: r
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
						this.setState(e => e.visibility === S.e.Private ? e : {
							...e,
							visibility: e.visibility === S.e.Public ? S.e.Hidden : S.e.Public
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
							displayText: i
						} = this.state, r = Object(v.a)({
							displayText: i,
							myMultireddits: e,
							thisMultireddit: t
						});
						return !r || (this.setState({
							displayTextError: r
						}), !1)
					}, this.onSubmit = () => {
						const {
							description: e,
							displayText: t,
							visibility: i
						} = this.state;
						this.checkDisplayTextValidity() && this.props.onSubmit({
							visibility: i,
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
						visibility: S.e.Private
					}
				}
				renderDisplayText() {
					const {
						displayText: e,
						displayTextError: t
					} = this.state;
					return n.a.createElement(f.h, null, n.a.createElement(h.b, {
						label: r.fbt._("custom feed name", null, {
							hk: "1pq8pZ"
						}),
						onBlur: this.checkDisplayTextValidity,
						onChange: this.onDisplayTextChange,
						value: e,
						maxLength: S.c,
						state: t ? h.d.Invalid : void 0,
						isRequired: !0
					}), t ? n.a.createElement("p", {
						className: k.a.displayTextError
					}, t === S.a.SameName ? r.fbt._("A custom feed with that name already exists", null, {
						hk: "1WJHG3"
					}) : t === S.a.TooShort ? r.fbt._("Name must contain at least two alphanumeric characters", null, {
						hk: "3TWc1H"
					}) : r.fbt._("Something went wrong with this name, maybe try something else?", null, {
						hk: "N6k8D"
					})) : n.a.createElement(b.a, {
						maxChars: S.c,
						text: e
					}))
				}
				renderDescription() {
					const {
						description: e
					} = this.state;
					return n.a.createElement(f.h, null, n.a.createElement(h.c, {
						className: k.a.descriptionTextarea,
						label: r.fbt._("description (optional)", null, {
							hk: "4mWEDA"
						}),
						maxLength: S.b,
						onChange: this.onDescriptionChange,
						value: e
					}), n.a.createElement(b.a, {
						maxChars: S.b,
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
							visibility: i
						}
					} = this;
					return n.a.createElement(f.h, {
						className: k.a.formRow
					}, n.a.createElement("div", {
						className: k.a.label
					}, n.a.createElement("h3", {
						className: k.a.labelTitle
					}, r.fbt._("Custom Feed Privacy", null, {
						hk: "iZuQR"
					})), n.a.createElement("div", {
						className: k.a.labelDescription
					}, r.fbt._("Public Custom Feeds are visible to anyone with the link. Private is only viewable by you, the owner.", null, {
						hk: "1RAkt7"
					}))), n.a.createElement("div", null, n.a.createElement(y.r, {
						className: k.a.dropdownBtn,
						id: L,
						onClick: t
					}, i === S.e.Private ? q() : P(), n.a.createElement(C.b, null)), n.a.createElement(E, {
						isOpen: e,
						isOverlay: !0,
						targetPosition: ["center", "bottom"],
						tooltipId: L,
						tooltipPosition: ["center", "top"]
					}, n.a.createElement(g.b, {
						displayText: q(),
						noIcon: !0,
						onClick: this.onRowClick(S.e.Private),
						isSelected: i === S.e.Private
					}), n.a.createElement(g.b, {
						displayText: P(),
						isSelected: i === S.e.Public || i === S.e.Hidden,
						noIcon: !0,
						onClick: this.onRowClick(S.e.Public)
					}))))
				}
				renderShowOnProfileToggle() {
					const {
						visibility: e
					} = this.state;
					return n.a.createElement(f.h, {
						className: Object(c.a)(k.a.formRow, {
							[k.a.disabled]: e === S.e.Private
						})
					}, n.a.createElement("div", {
						className: k.a.label
					}, n.a.createElement("h3", {
						className: k.a.labelTitle
					}, r.fbt._("Show on profile", null, {
						hk: "3W3DLV"
					})), n.a.createElement("div", {
						className: k.a.labelDescription
					}, r.fbt._("Choose whether this Custom Feed is visible to visitors of your profile", null, {
						hk: "1pxStK"
					}))), n.a.createElement(_.a, {
						className: k.a.toggle,
						disabled: e === S.e.Private,
						on: e === S.e.Public,
						onToggle: this.onShowOnProfileToggle
					}))
				}
				render() {
					const {
						apiPending: e,
						multireddit: t,
						onClose: i
					} = this.props;
					return t ? n.a.createElement(f.e, null, n.a.createElement(f.i, null, n.a.createElement(T.a, null, n.a.createElement(f.q, null, r.fbt._("Edit Custom Feed", null, {
						hk: "3yOOdv"
					})), n.a.createElement("button", {
						onClick: i
					}, n.a.createElement(f.b, null)))), n.a.createElement(f.l, null, this.renderDisplayText(), this.renderDescription(), this.renderVisibilityDropdown(), this.renderShowOnProfileToggle()), n.a.createElement(f.g, {
						className: k.a.footer
					}, n.a.createElement(f.r, {
						onClick: this.onSubmit
					}, e ? n.a.createElement(j.a, {
						className: k.a.loadingIcon,
						sizePx: I
					}) : r.fbt._("done", null, {
						hk: "1uttTA"
					})))) : n.a.createElement("div", {
						className: k.a.error
					}, n.a.createElement("p", {
						className: k.a.errorText
					}, r.fbt._("Sorry, something went wrong", null, {
						hk: "ZPvfZ"
					})))
				}
			}
			t.default = Object(o.a)(M(D(G)))
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return f
			})), i.d(t, "a", (function() {
				return h
			})), i.d(t, "b", (function() {
				return y
			})), i.d(t, "c", (function() {
				return O
			}));
			var r = i("./node_modules/react/index.js"),
				s = i.n(r),
				n = i("./src/lib/classNames/index.ts"),
				d = i("./src/lib/lessComponent.tsx"),
				a = i("./src/reddit/controls/Input/index.tsx"),
				o = i("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = i("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = i.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
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
						className: i,
						inputRef: r,
						isRequired: d,
						label: o,
						onKeyDown: l,
						state: m,
						...p
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: i,
						isRequired: d,
						label: o,
						state: m
					}, s.a.createElement(a.a, u({}, p, {
						className: Object(n.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: r,
						onKeyDown: l
					})))
				},
				O = e => {
					const {
						backgroundColorState: t,
						className: i,
						inputRef: r,
						isRequired: d,
						label: a,
						onKeyDown: o,
						state: l,
						...m
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: i,
						isRequired: d,
						label: a,
						state: l,
						isTextarea: !0
					}, s.a.createElement(p, u({}, m, {
						className: Object(n.a)({
							[c.a.mWhiteField]: e.backgroundColorState === h.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: r,
						onKeyDown: o
					})))
				}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, i) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, i) {
			"use strict";
			i.d(t, "k", (function() {
				return d
			})), i.d(t, "p", (function() {
				return a
			})), i.d(t, "n", (function() {
				return o
			})), i.d(t, "o", (function() {
				return l
			})), i.d(t, "m", (function() {
				return c
			})), i.d(t, "l", (function() {
				return u
			})), i.d(t, "f", (function() {
				return m
			})), i.d(t, "h", (function() {
				return p
			})), i.d(t, "a", (function() {
				return b
			})), i.d(t, "g", (function() {
				return f
			})), i.d(t, "i", (function() {
				return h
			})), i.d(t, "e", (function() {
				return x
			})), i.d(t, "b", (function() {
				return y
			})), i.d(t, "c", (function() {
				return O
			})), i.d(t, "d", (function() {
				return g
			})), i.d(t, "j", (function() {
				return j
			}));
			var r = i("./src/lib/lessComponent.tsx"),
				s = i("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				n = i.n(s);
			const d = r.a.section("FormPage", n.a),
				a = r.a.h1("HomePageTitle", n.a),
				o = r.a.button("HomePageBreadcrumb", n.a),
				l = r.a.div("HomePageGroup", n.a),
				c = r.a.h1("FormPageTitle", n.a),
				u = r.a.div("FormPageSection", n.a),
				m = r.a.div("FormGroup", n.a),
				p = r.a.h2("FormGroupTitle", n.a),
				b = r.a.div("FormElement", n.a),
				f = r.a.div("FormGroupDescription", n.a),
				h = r.a.div("FormItem", n.a),
				x = r.a.h3("FormElementTitle", n.a),
				y = r.a.div("FormElementDescription", n.a),
				O = r.a.div("FormElementError", n.a),
				g = r.a.div("FormElementSubGroup", n.a),
				j = r.a.li("FormListItem", n.a)
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./src/lib/lessComponent.tsx"),
				s = i("./src/reddit/controls/Input/index.m.less"),
				n = i.n(s);
			t.a = r.a.input("input", n.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, i) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				s = i.n(r),
				n = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = i.n(d);
			t.a = e => {
				let {
					center: t,
					className: i,
					sizePx: r = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(n.a)(a.a.loadingIcon, i, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/endpoints/page/multiredditListing.ts": function(e, t, i) {
			"use strict";
			var r = i("./src/lib/makeGqlRequest/index.ts"),
				s = i("./src/redditGQL/operations/MultiredditListing.json");
			t.a = (e, t) => Object(r.a)(e, {
				...s,
				variables: t
			})
		},
		"./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts": function(e, t, i) {
			"use strict";
			var r = i("./src/lib/env/index.ts"),
				s = i("./src/lib/sentry/index.ts"),
				n = i("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				d = i("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				a = i("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				o = i("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				l = i("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				c = i("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				u = i("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				m = i("./src/reddit/models/Post/index.ts");
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
					identity: i,
					multireddit: p
				} = e;
				if (i && (t.account = Object(u.a)(i) || null, t.preferences = Object(l.a)(i.preferences, i.interactions) || null), !p) return t;
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
							Object(r.b)() || console.warn(t), s.c.captureMessage(t);
							continue
						}
						const i = e;
						t.postIds.push(i.id);
						const {
							post: d,
							crosspost: l
						} = i && Object(o.a)(i);
						t.posts[d.id] = d, l && (t.posts[l.id] = l), Object(m.j)(i) || Object(m.i)(i) || (i.authorFlair && (t.postFlair[d.belongsTo.id] || (t.postFlair[d.belongsTo.id] = {}), t.postFlair[d.belongsTo.id][d.author] = Object(n.a)(i.authorFlair)[0]), Object(m.n)(i) && (t.subreddits[i.subreddit.id] || (t.subreddits[i.subreddit.id] = Object(c.a)(i.subreddit)), t.postFlair[i.subreddit.id] || (t.postFlair[i.subreddit.id] = Object(a.a)(i.subreddit))))
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
		"./src/reddit/helpers/multireddit/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			var r = i("./src/reddit/models/Multireddit/index.ts");
			const s = e => {
				let {
					displayText: t,
					myMultireddits: i,
					thisMultireddit: s
				} = e;
				return t.replace(/[^0-9A-Za-z]+/gi, "").length < r.d ? r.a.TooShort : i.filter(e => {
					let {
						url: t
					} = e;
					return !s || t !== s.url
				}).map(e => {
					let {
						displayText: t
					} = e;
					return t.toLowerCase()
				}).indexOf(t.trim().toLowerCase()) > -1 ? r.a.SameName : void 0
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MultiredditEditModal.60ddd77b76469f1d5a8e.js.map