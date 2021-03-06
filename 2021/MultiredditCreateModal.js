// https://www.redditstatic.com/desktop2x/MultiredditCreateModal.6ecf4bac564d67e8283b.js
// Retrieved at 7/15/2021, 10:30:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MultiredditCreateModal"], {
		"./src/reddit/actions/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "morePostsFailed", (function() {
				return M
			})), r.d(t, "morePostsLoaded", (function() {
				return R
			})), r.d(t, "morePostsPending", (function() {
				return G
			})), r.d(t, "moreOfMyMultiRequested", (function() {
				return D
			})), r.d(t, "myMultiredditsPending", (function() {
				return U
			})), r.d(t, "myMultiredditsReceived", (function() {
				return z
			})), r.d(t, "myMultiredditsRequested", (function() {
				return A
			})), r.d(t, "createFailure", (function() {
				return H
			})), r.d(t, "createPending", (function() {
				return W
			})), r.d(t, "createSuccess", (function() {
				return Q
			})), r.d(t, "createRequested", (function() {
				return J
			})), r.d(t, "reloadCurrentMultiredditFeedRequested", (function() {
				return K
			})), r.d(t, "duplicateFailure", (function() {
				return $
			})), r.d(t, "duplicatePending", (function() {
				return B
			})), r.d(t, "duplicateSuccess", (function() {
				return V
			})), r.d(t, "duplicateRequested", (function() {
				return X
			})), r.d(t, "addSubredditPending", (function() {
				return Y
			})), r.d(t, "addSubredditSuccess", (function() {
				return Z
			})), r.d(t, "addSubredditFailure", (function() {
				return ee
			})), r.d(t, "addSubredditRequested", (function() {
				return te
			})), r.d(t, "removeSubredditPending", (function() {
				return re
			})), r.d(t, "removeSubredditSuccess", (function() {
				return ie
			})), r.d(t, "removeSubredditFailure", (function() {
				return se
			})), r.d(t, "removeSubredditRequested", (function() {
				return de
			})), r.d(t, "deleteFailure", (function() {
				return ne
			})), r.d(t, "deletePending", (function() {
				return ae
			})), r.d(t, "deleteSuccess", (function() {
				return oe
			})), r.d(t, "deleteRequested", (function() {
				return ce
			})), r.d(t, "editFailure", (function() {
				return le
			})), r.d(t, "editPending", (function() {
				return ue
			})), r.d(t, "editSuccess", (function() {
				return me
			})), r.d(t, "editRequested", (function() {
				return pe
			})), r.d(t, "subredditRecommendationsFailure", (function() {
				return be
			})), r.d(t, "subredditRecommendationsPending", (function() {
				return fe
			})), r.d(t, "subredditRecommendationsSuccess", (function() {
				return he
			})), r.d(t, "recommendationsRequested", (function() {
				return xe
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
				y = r("./src/reddit/endpoints/page/multiredditListing.ts"),
				_ = r("./src/redditGQL/operations/SubredditRecommendations.json"),
				C = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				F = r("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				v = r("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				k = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				S = e => {
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
						s = i.filter(e => !e.displayName.startsWith(a.dc)).map(e => e.id),
						d = i.filter(e => e.displayName.startsWith(a.dc)).map(e => e.id);
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
				N = r("./src/reddit/models/Multireddit/index.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				T = r("./src/reddit/selectors/multireddit.ts"),
				w = r("./src/reddit/selectors/platform.ts"),
				P = r("./src/reddit/selectors/subreddit.ts"),
				L = r("./src/reddit/selectors/user.ts"),
				q = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				I = r("./src/reddit/actions/multireddit/constants.ts");
			const M = Object(c.a)(I.q),
				R = Object(c.a)(I.r),
				G = Object(c.a)(I.s),
				D = e => async (t, r, i) => {
					const {
						gqlContext: s
					} = i, {
						sort: d = a.U.HOT,
						multiredditName: n,
						username: o
					} = e, c = r(), u = c.platform.currentPage, m = u ? u.queryParams : {}, p = Object(T.d)(c, {
						multiredditName: n,
						username: o
					}), b = Object(l.a)(p.url, d, m), f = c.listings.postOrder.loadMore[b];
					if (!f) return;
					const h = c.listings.postOrder.api.pending[b],
						x = c.listings.postOrder.fetchedTokens,
						O = x[b] && x[b][f.token] || !1;
					if (h || O) return;
					t(G({
						key: b,
						fetchedToken: f.token
					}));
					const j = p.url.replace(/\/$/, ""),
						g = m.t ? m.t.toUpperCase() : void 0,
						_ = {
							after: f.token,
							includeIdentity: !1,
							includeSources: !1,
							path: j,
							range: g,
							sort: d.toUpperCase()
						},
						F = await Object(y.a)(s(), _),
						{
							data: k
						} = F.body,
						S = Object(v.a)(k);
					F.ok && k && k.multireddit ? t(R({
						fetchedToken: f.token,
						key: b,
						meta: c.meta,
						...S,
						...Object(C.a)(c, b, S),
						multiredditsModelsState: c.multireddits.models
					})) : t(M({
						error: {
							type: a.G.NOT_FOUND_ERROR
						},
						fetchedToken: f.token,
						key: b,
						...F.body,
						...Object(C.a)(c, b, S)
					}))
				}, U = Object(c.a)(I.t), z = Object(c.a)(I.u), A = (e, t = !1) => async (r, i, {
					apiContext: s,
					gqlContext: d
				}) => {
					const n = i();
					if (!Object(L.j)(n)) return;
					if (!e && Object(T.h)(n) || Object(T.i)(n)) return;
					r(U());
					const a = await ((e, t) => Object(j.a)(e, {
						...g,
						variables: t
					}))(d(), {
						includeSources: t
					});
					if (a.ok) {
						const e = a.body.data.identity.allMultireddits.edges.map(e => e.node),
							t = Object(F.b)(e);
						r(z({
							...t,
							multiredditsModelsState: n.multireddits.models
						}))
					}
				}, H = Object(c.a)(I.e), W = Object(c.a)(I.f), Q = Object(c.a)(I.g), J = ({
					description: e,
					displayName: t,
					shouldNavigate: r
				}) => async (s, d, {
					apiContext: o
				}) => {
					const c = d(),
						l = Object(L.j)(c);
					if (!l) return;
					s(W());
					const m = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/multi`),
						data: {
							model: JSON.stringify({
								description_md: r,
								display_name: t,
								visibility: "private",
								subreddits: []
							})
						},
						method: a.hb.POST
					}))(o(), t, e);
					if (m.ok) {
						const {
							id: e
						} = l;
						if (await s(Q({
								multireddit: S(m.body.data),
								multiredditsModelsState: c.multireddits.models,
								userId: e
							})), r) {
							s(Object(u.f)());
							const e = m.body.data.path.toLowerCase();
							await s(Object(n.b)(e))
						}
						s(Object(p.f)({
							text: i.fbt._("Custom feed created!", null, {
								hk: "258cY9"
							})
						}))
					} else s(H(m.error))
				}, K = () => async (e, t, {
					apiContext: r
				}) => {
					const i = t(),
						s = Object(L.j)(i),
						n = Object(w.h)(i) ? Object(w.k)(i) : Object(w.b)(i),
						o = n && n.routeMatch && n.routeMatch.match;
					if (!o) return;
					const c = o.params,
						u = c.sort || a.U.HOT,
						{
							multiredditName: p,
							username: f
						} = c;
					if (!p) return;
					const h = Object(N.h)((f || s && s.displayText || "").toLowerCase(), p.toLowerCase()),
						{
							queryParams: x
						} = o,
						O = Object(l.a)(h, u, x),
						j = b.x in x && x[b.x].toUpperCase() || "",
						g = a.bc[j] || !1,
						y = Object(L.j)(i);
					(f || y && y.displayText) && await e(Object(m.multiredditFeedRequested)(O, (f || y.displayText).toLowerCase(), p.toLowerCase(), {
						...d()(x, b.l),
						...d()(x, b.k),
						sort: u,
						t: Object(q.a)(u, g)
					}))
				}, $ = Object(c.a)(I.k), B = Object(c.a)(I.l), V = Object(c.a)(I.m), X = ({
					description: e,
					displayName: t,
					fromName: r,
					fromUsername: s
				}) => async (d, o, {
					apiContext: c
				}) => {
					const l = o(),
						m = Object(L.j)(l);
					if (!m || !m.displayText) return;
					const b = Object(N.h)((s || m.displayText).toLowerCase(), r.toLowerCase());
					d(B());
					const j = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/multi/copy`),
						data: {
							description_md: t.description,
							display_name: t.displayName,
							expand_srs: !0,
							from: t.from
						},
						method: a.hb.POST
					}))(c(), {
						from: b,
						displayName: t,
						description: e
					});
					if (j.ok) {
						const e = S(j.body.data);
						d(Object(u.f)()), d(V({
							multireddit: e,
							multiredditsModelsState: l.multireddits.models,
							userId: m.id
						})), d(Object(p.f)({
							text: i.fbt._("Custom feed duplicated!", null, {
								hk: "2u48X"
							}),
							buttonText: i.fbt._("Go there", null, {
								hk: "4sXZMm"
							}),
							buttonAction: Object(n.b)(e.url)
						}))
					} else d($(j.error)), d(Object(p.f)({
						text: i.fbt._("Something went wrong duplicating {multiName}", [i.fbt._param("multiName", r)], {
							hk: "4bzN2D"
						})
					}))
				}, Y = Object(c.a)(I.b), Z = Object(c.a)(I.c), ee = Object(c.a)(I.a), te = ({
					communityInfo: e,
					identifier: t,
					multiredditNames: r
				}) => async (s, d, {
					apiContext: n
				}) => {
					const c = d(),
						l = Object(L.j)(c);
					if (!l || c.multireddits.api.addSubreddit.pending) return;
					s(Y({
						name: t.name
					}));
					const {
						displayText: m
					} = l;
					if (!m) return;
					const b = r.map(e => `/user/${m.toLowerCase()}/m/${e.toLowerCase()}`).join(","),
						j = `${"profile"===t.type?a.dc:""}${t.name}`,
						g = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(O.a)(`${e.apiUrl}/api/multi/bulk_add/r/${t}`),
							data: {
								paths: r
							},
							method: a.hb.PUT
						}))(n(), j, b);
					if (g.ok) {
						const d = Object(P.J)(c, {
								identifier: t
							}) || e && e.id || "",
							n = r.map(e => Object(N.h)(m, e));
						s(Object(u.f)()), s(Object(p.f)({
							text: i.fbt._({
								"*": "Successfully added {communityName} to {number} custom feeds!",
								_1: "Successfully added {communityName} to 1 custom feed!"
							}, [i.fbt._param("communityName", `${"subreddit"===t.type?o.d.subreddit:o.d.profile}${t.name}`), i.fbt._plural(r.length, "number")], {
								hk: "9EXsM"
							})
						})), await s(Z({
							communityInfo: e,
							id: d,
							multipaths: n,
							type: t.type
						})), 1 === r.length && await s(K())
					} else {
						s(ee(g.error));
						let e = i.fbt._("Sorry, something went wrong adding {subredditName}.", [i.fbt._param("subredditName", t.name)], {
							hk: "ERdWO"
						});
						g.body && (g.body.reason === I.d.TooManySubreddits ? e = i.fbt._("Maximum communities reached", null, {
							hk: "2eguyW"
						}) : g.body.reason === I.d.InvalidSrQuarantine && (e = i.fbt._("{communityname} is invalid because it is quarantined", [i.fbt._param("communityname", `${"subreddit"===t.type?o.d.subreddit:o.d.profile}${t.name}`)], {
							hk: "407xmS"
						}))), s(Object(p.f)({
							text: e,
							kind: E.b.Error
						}))
					}
				}, re = Object(c.a)(I.w), ie = Object(c.a)(I.x), se = Object(c.a)(I.v), de = ({
					id: e,
					multiredditName: t,
					name: r,
					type: s
				}) => async (d, n, {
					apiContext: o
				}) => {
					const c = n(),
						l = Object(L.j)(c);
					if (!l || !l.displayText || c.multireddits.api.removeSubreddit.pending) return;
					d(re({
						id: e
					}));
					const {
						displayText: m
					} = l, b = Object(N.h)(m, t), j = `${"profile"===s?a.dc:""}${r}`, g = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/multi${r}r/${t}`),
						method: a.hb.DELETE
					}))(o(), j, b);
					g.ok ? (d(Object(u.f)()), d(ie({
						id: e,
						multipath: b,
						type: s
					})), d(Object(p.f)({
						text: i.fbt._("{subredditname} removed from your custom feed!", [i.fbt._param("subredditname", r)], {
							hk: "uaWNe"
						}),
						buttonText: i.fbt._("undo", null, {
							hk: "3HH7IT"
						}),
						buttonAction: te({
							identifier: {
								name: r,
								type: s
							},
							multiredditNames: [t]
						})
					})), d(K())) : (d(se(g.error)), d(Object(p.f)({
						text: i.fbt._("Sorry, something went wrong removing {subredditName}.", [i.fbt._param("subredditName", r)], {
							hk: "1E1rKm"
						})
					})))
				}, ne = Object(c.a)(I.h), ae = Object(c.a)(I.i), oe = Object(c.a)(I.j), ce = e => async (t, r, {
					apiContext: s
				}) => {
					const d = r();
					if (!Object(L.j)(d)) return;
					t(ae());
					const o = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/multi${t}`),
						method: a.hb.DELETE
					}))(s(), e);
					o.ok ? (await t(oe(e)), t(Object(u.f)()), await t(Object(n.b)("/")), t(Object(p.f)({
						text: i.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(ne(o.error))
				}, le = Object(c.a)(I.n), ue = Object(c.a)(I.o), me = Object(c.a)(I.p), pe = ({
					description: e,
					displayText: t,
					multipath: r,
					visibility: s
				}) => async (d, n, {
					apiContext: o
				}) => {
					const c = n();
					if (!Object(L.J)(c)) return;
					d(ue());
					const l = await (({
						context: e,
						description: t,
						displayText: r,
						multipath: i,
						visibility: s
					}) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/multi${i}`),
						data: {
							model: JSON.stringify({
								description_md: t,
								display_name: r,
								visibility: s
							}),
							expand_srs: !0
						},
						method: a.hb.PUT
					}))({
						context: o(),
						description: e,
						displayText: t,
						multipath: r,
						visibility: s
					});
					l.ok ? (await d(me(S(l.body.data))), d(Object(u.f)()), d(Object(p.f)({
						text: i.fbt._("Custom feed updated!", null, {
							hk: "39R30f"
						})
					}))) : (d(le(l.error)), d(Object(p.f)({
						kind: E.b.Error,
						text: i.fbt._("Something went wrong", null, {
							hk: "1Y6lli"
						})
					})))
				}, be = Object(c.a)(I.z), fe = Object(c.a)(I.A), he = Object(c.a)(I.B), xe = ({
					multiredditName: e,
					username: t,
					toExcludeNames: r
				}) => async (i, s, {
					gqlContext: d
				}) => {
					const n = s(),
						a = Object(L.j)(n);
					if (!(t || a && a.displayText)) return;
					const o = Object(N.h)(t || a.displayText, e),
						c = n.multireddits.models[o];
					if (!c || !c.subredditIds) return;
					i(fe());
					const l = r && r.reduce((e, t) => {
							const r = Object(P.D)(n, t) || Object(P.E)(n, t);
							return r ? [...e, r] : e
						}, []),
						u = await ((e, t) => Object(j.a)(e, {
							..._,
							variables: t
						}))(d(), {
							count: I.y,
							subredditIds: c.subredditIds,
							toExclude: l
						});
					if (u.ok) {
						const {
							data: e
						} = u.body;
						i(he({
							multipath: o,
							subreddits: Object(k.b)(e)
						}))
					} else i(be(u.error))
				}
		},
		"./src/reddit/actions/pages/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "multiredditFeedPending", (function() {
				return w
			})), r.d(t, "multiredditFeedLoaded", (function() {
				return P
			})), r.d(t, "multiredditFeedFailed", (function() {
				return L
			})), r.d(t, "multiredditFeedRequested", (function() {
				return q
			})), r.d(t, "multiredditRequested", (function() {
				return I
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
				k = r("./src/reddit/actions/ads/index.ts"),
				S = r("./src/reddit/helpers/canonicalUrls.ts"),
				N = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				E = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				T = r("./src/reddit/actions/pages/multireddit/constants.ts");
			const w = Object(F.a)(T.c),
				P = Object(F.a)(T.b),
				L = Object(F.a)(T.a),
				q = (e, t, r, s, d) => async (n, a, u) => {
					const {
						gqlContext: p
					} = u, b = a();
					if (b.listings.postOrder.api.pending[e]) return;
					n(w({
						key: e
					})), s.layout = f.e[Object(h.O)(b, {})];
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
						if (!_.multireddit) return d && n(m.g(F)), void n(L({
							...i,
							error: {
								type: l.G.NOT_FOUND_ERROR
							},
							key: e
						}));
						n(P({
							key: e,
							meta: b.meta,
							...i,
							account: i.account || Object(C.j)(b),
							multiredditsModelsState: b.multireddits.models
						})), d && n(m.g(F)), n(Object(o.recommendationsRequested)({
							multiredditName: r,
							username: t
						})), window.addEventListener("load", () => {
							n(Object(k.b)(E.a.MULTIREDDIT))
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
						buttonAction: q(e, t, r, s, d)
					}))
				}, I = (e, t) => async (r, i) => {
					const {
						multiredditName: s
					} = e.params;
					let {
						username: o
					} = e.params;
					if (!o) {
						let t = i();
						if (t.user.session && t.user.session.unsafeLoggedOut) return void r(Object(n.c)("/"));
						!t.user.account && t.user.session && await r(p.r()), t = i();
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
						sort: c = l.U.HOT
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
						N = b.x in e.queryParams && e.queryParams[b.x].toUpperCase() || "",
						T = N in l.bc && l.bc[N];
					if (F || g && !C && !t) return void(g && (r(u.l({
						title: Object(_.f)(i(), m)
					})), f.sidebarPromotedPosts.firstFetch || r(Object(k.b)(E.a.MULTIREDDIT))));
					await r(q(O, o, s, {
						...d()(e.queryParams, b.l),
						...d()(e.queryParams, b.k),
						sort: c,
						t: Object(x.a)(c, T)
					}, !0));
					const w = i();
					Object(_.d)(w, m) && r(u.l({
						title: Object(_.f)(i(), m)
					})), Object(S.c)(w, r, e)
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
				k = Object(h.t)({
					multiredditParams: h.c
				}),
				S = Object(a.c)({
					createError: e => e.multireddits.api.create.error,
					createFetched: e => e.multireddits.api.create.fetched,
					createPending: e => e.multireddits.api.create.pending,
					duplicateError: e => e.multireddits.api.duplicate.error,
					duplicateFetched: e => e.multireddits.api.duplicate.fetched,
					duplicatePending: e => e.multireddits.api.duplicate.pending,
					myMultireddits: _.j
				}),
				N = Object(n.b)(S, (e, {
					multiredditParams: t
				}) => ({
					create: (t, r) => e(Object(l.createRequested)({
						displayName: t,
						description: r,
						shouldNavigate: !0
					})),
					duplicate: (r, i) => {
						t && e(Object(l.duplicateRequested)({
							fromName: t.multiredditName,
							fromUsername: t.username,
							displayName: r,
							description: i
						}))
					},
					onClose: () => e(Object(c.f)())
				}));
			class E extends d.a.Component {
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
					}, d.a.createElement(m.d, null, d.a.createElement(m.h, null, d.a.createElement(g.a, null, d.a.createElement(m.p, null, n ? i.fbt._("Duplicate This Custom Feed", null, {
						hk: "owR2J"
					}) : i.fbt._("Create a Custom Feed", null, {
						hk: "IDT2Q"
					})), d.a.createElement("button", {
						onClick: a
					}, d.a.createElement(m.b, null)))), d.a.createElement(m.k, null, d.a.createElement(m.g, null, d.a.createElement(p.b, {
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
					})), d.a.createElement(m.g, null, d.a.createElement(p.c, {
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
					}))), d.a.createElement(m.f, null, d.a.createElement(m.q, {
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
			t.default = Object(o.a)(k(N(Object(f.c)(E))))
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
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(d.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
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
						t.posts[n.id] = n, c && (t.posts[c.id] = c), Object(m.j)(r) || Object(m.i)(r) || (r.authorFlair && (t.postFlair[n.belongsTo.id] || (t.postFlair[n.belongsTo.id] = {}), t.postFlair[n.belongsTo.id][n.author] = Object(d.a)(r.authorFlair)[0]), Object(m.m)(r) && (t.subreddits[r.subreddit.id] || (t.subreddits[r.subreddit.id] = Object(l.a)(r.subreddit)), t.postFlair[r.subreddit.id] || (t.postFlair[r.subreddit.id] = Object(a.a)(r.subreddit))))
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
			const s = ({
				displayText: e,
				myMultireddits: t,
				thisMultireddit: r
			}) => e.replace(/[^0-9A-Za-z]+/gi, "").length < i.d ? i.a.TooShort : t.filter(({
				url: e
			}) => !r || e !== r.url).map(({
				displayText: e
			}) => e.toLowerCase()).indexOf(e.trim().toLowerCase()) > -1 ? i.a.SameName : void 0
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
		"./src/redditGQL/operations/AllUserMultireddits.json": function(e) {
			e.exports = JSON.parse('{"id":"8f2551b0bce3"}')
		},
		"./src/redditGQL/operations/MultiredditListing.json": function(e) {
			e.exports = JSON.parse('{"id":"e9c6b0028c59"}')
		},
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"3c4d88474140"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MultiredditCreateModal.6ecf4bac564d67e8283b.js.map