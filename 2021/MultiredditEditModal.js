// https://www.redditstatic.com/desktop2x/MultiredditEditModal.9cd80890d06c623b06da.js
// Retrieved at 3/11/2021, 5:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MultiredditEditModal"], {
		"./src/graphql/operations/AllUserMultireddits.json": function(e) {
			e.exports = JSON.parse('{"id":"8f2551b0bce3"}')
		},
		"./src/graphql/operations/MultiredditListing.json": function(e) {
			e.exports = JSON.parse('{"id":"2f97e2a1f36f"}')
		},
		"./src/graphql/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"3c4d88474140"}')
		},
		"./src/reddit/actions/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "morePostsFailed", (function() {
				return L
			})), r.d(t, "morePostsLoaded", (function() {
				return R
			})), r.d(t, "morePostsPending", (function() {
				return D
			})), r.d(t, "moreOfMyMultiRequested", (function() {
				return G
			})), r.d(t, "myMultiredditsPending", (function() {
				return W
			})), r.d(t, "myMultiredditsReceived", (function() {
				return U
			})), r.d(t, "myMultiredditsRequested", (function() {
				return z
			})), r.d(t, "createFailure", (function() {
				return K
			})), r.d(t, "createPending", (function() {
				return A
			})), r.d(t, "createSuccess", (function() {
				return H
			})), r.d(t, "createRequested", (function() {
				return J
			})), r.d(t, "reloadCurrentMultiredditFeedRequested", (function() {
				return Q
			})), r.d(t, "duplicateFailure", (function() {
				return B
			})), r.d(t, "duplicatePending", (function() {
				return $
			})), r.d(t, "duplicateSuccess", (function() {
				return V
			})), r.d(t, "duplicateRequested", (function() {
				return X
			})), r.d(t, "addSubredditPending", (function() {
				return Z
			})), r.d(t, "addSubredditSuccess", (function() {
				return Y
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
				return ne
			})), r.d(t, "deleteFailure", (function() {
				return ae
			})), r.d(t, "deletePending", (function() {
				return de
			})), r.d(t, "deleteSuccess", (function() {
				return oe
			})), r.d(t, "deleteRequested", (function() {
				return le
			})), r.d(t, "editFailure", (function() {
				return ce
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
				n = r.n(s),
				a = r("./node_modules/react-router-redux/es/index.js"),
				d = r("./src/lib/constants/index.ts"),
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
				g = r("./src/graphql/operations/AllUserMultireddits.json"),
				O = r("./src/lib/makeGqlRequest/index.ts"),
				j = r("./src/reddit/endpoints/page/multiredditListing.ts"),
				_ = r("./src/graphql/operations/SubredditRecommendations.json"),
				v = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				w = r("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				C = r("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				k = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				S = e => {
					let t = e.over_18 || !1;
					if (!t)
						for (const a of e.subreddits)
							if (a.data.over_18) {
								t = !0;
								break
							} let r = e.quarantine || !1;
					if (!r)
						for (const a of e.subreddits) {
							const e = (a.data.audience_target || "").split(",");
							if (a.data.quarantine || e.indexOf("unsafe") > -1) {
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
						s = i.filter(e => !e.displayName.startsWith(d.Wb)).map(e => e.id),
						n = i.filter(e => e.displayName.startsWith(d.Wb)).map(e => e.id);
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
				T = r("./src/reddit/models/Multireddit/index.ts"),
				N = r("./src/reddit/models/Toast/index.ts"),
				E = r("./src/reddit/selectors/multireddit.ts"),
				F = r("./src/reddit/selectors/platform.ts"),
				P = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				M = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				q = r("./src/reddit/actions/multireddit/constants.ts");
			const L = Object(l.a)(q.q),
				R = Object(l.a)(q.r),
				D = Object(l.a)(q.s),
				G = e => async (t, r, i) => {
					const {
						gqlContext: s
					} = i, {
						sort: n = d.P.HOT,
						multiredditName: a,
						username: o
					} = e, l = r(), u = l.platform.currentPage, m = u ? u.queryParams : {}, p = Object(E.d)(l, {
						multiredditName: a,
						username: o
					}), b = Object(c.a)(p.url, n, m), f = l.listings.postOrder.loadMore[b];
					if (!f) return;
					const h = l.listings.postOrder.api.pending[b],
						x = l.listings.postOrder.fetchedTokens,
						y = x[b] && x[b][f.token] || !1;
					if (h || y) return;
					t(D({
						key: b,
						fetchedToken: f.token
					}));
					const g = p.url.replace(/\/$/, ""),
						O = m.t ? m.t.toUpperCase() : void 0,
						_ = {
							after: f.token,
							includeIdentity: !1,
							includeSources: !1,
							path: g,
							range: O,
							sort: n.toUpperCase()
						},
						w = await Object(j.a)(s(), _),
						{
							data: k
						} = w.body,
						S = Object(C.a)(k);
					w.ok && k && k.multireddit ? t(R({
						fetchedToken: f.token,
						key: b,
						meta: l.meta,
						...S,
						...Object(v.a)(l, b, S),
						multiredditsModelsState: l.multireddits.models
					})) : t(L({
						error: {
							type: d.E.NOT_FOUND_ERROR
						},
						fetchedToken: f.token,
						key: b,
						...w.body,
						...Object(v.a)(l, b, S)
					}))
				}, W = Object(l.a)(q.t), U = Object(l.a)(q.u), z = (e, t = !1) => async (r, i, {
					apiContext: s,
					gqlContext: n
				}) => {
					const a = i();
					if (!Object(I.j)(a)) return;
					if (!e && Object(E.h)(a) || Object(E.i)(a)) return;
					r(W());
					const d = await ((e, t) => Object(O.a)(e, {
						...g,
						variables: t
					}))(n(), {
						includeSources: t
					});
					if (d.ok) {
						const e = d.body.data.identity.allMultireddits.edges.map(e => e.node),
							t = Object(w.b)(e);
						r(U({
							...t,
							multiredditsModelsState: a.multireddits.models
						}))
					}
				}, K = Object(l.a)(q.e), A = Object(l.a)(q.f), H = Object(l.a)(q.g), J = ({
					description: e,
					displayName: t,
					shouldNavigate: r
				}) => async (s, n, {
					apiContext: o
				}) => {
					const l = n(),
						c = Object(I.j)(l);
					if (!c) return;
					s(A());
					const m = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi`),
						data: {
							model: JSON.stringify({
								description_md: r,
								display_name: t,
								visibility: "private",
								subreddits: []
							})
						},
						method: d.cb.POST
					}))(o(), t, e);
					if (m.ok) {
						const {
							id: e
						} = c;
						if (await s(H({
								multireddit: S(m.body.data),
								multiredditsModelsState: l.multireddits.models,
								userId: e
							})), r) {
							s(Object(u.f)());
							const e = m.body.data.path.toLowerCase();
							await s(Object(a.b)(e))
						}
						s(Object(p.e)({
							text: i.fbt._("Custom feed created!", null, {
								hk: "258cY9"
							})
						}))
					} else s(K(m.error))
				}, Q = () => async (e, t, {
					apiContext: r
				}) => {
					const i = t(),
						s = Object(I.j)(i),
						a = Object(F.h)(i) ? Object(F.k)(i) : Object(F.b)(i),
						o = a && a.routeMatch && a.routeMatch.match;
					if (!o) return;
					const l = o.params,
						u = l.sort || d.P.HOT,
						{
							multiredditName: p,
							username: f
						} = l;
					if (!p) return;
					const h = Object(T.h)((f || s && s.displayText || "").toLowerCase(), p.toLowerCase()),
						{
							queryParams: x
						} = o,
						y = Object(c.a)(h, u, x),
						g = b.x in x && x[b.x].toUpperCase() || "",
						O = d.Ub[g] || !1,
						j = Object(I.j)(i);
					(f || j && j.displayText) && await e(Object(m.multiredditFeedRequested)(y, (f || j.displayText).toLowerCase(), p.toLowerCase(), {
						...n()(x, b.l),
						...n()(x, b.k),
						sort: u,
						t: Object(M.a)(u, O)
					}))
				}, B = Object(l.a)(q.k), $ = Object(l.a)(q.l), V = Object(l.a)(q.m), X = ({
					description: e,
					displayName: t,
					fromName: r,
					fromUsername: s
				}) => async (n, o, {
					apiContext: l
				}) => {
					const c = o(),
						m = Object(I.j)(c);
					if (!m || !m.displayText) return;
					const b = Object(T.h)((s || m.displayText).toLowerCase(), r.toLowerCase());
					n($());
					const g = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi/copy`),
						data: {
							description_md: t.description,
							display_name: t.displayName,
							expand_srs: !0,
							from: t.from
						},
						method: d.cb.POST
					}))(l(), {
						from: b,
						displayName: t,
						description: e
					});
					if (g.ok) {
						const e = S(g.body.data);
						n(Object(u.f)()), n(V({
							multireddit: e,
							multiredditsModelsState: c.multireddits.models,
							userId: m.id
						})), n(Object(p.e)({
							text: i.fbt._("Custom feed duplicated!", null, {
								hk: "2u48X"
							}),
							buttonText: i.fbt._("Go there", null, {
								hk: "4sXZMm"
							}),
							buttonAction: Object(a.b)(e.url)
						}))
					} else n(B(g.error)), n(Object(p.e)({
						text: i.fbt._("Something went wrong duplicating {multiName}", [i.fbt._param("multiName", r)], {
							hk: "4bzN2D"
						})
					}))
				}, Z = Object(l.a)(q.b), Y = Object(l.a)(q.c), ee = Object(l.a)(q.a), te = ({
					communityInfo: e,
					identifier: t,
					multiredditNames: r
				}) => async (s, n, {
					apiContext: a
				}) => {
					const l = n(),
						c = Object(I.j)(l);
					if (!c || l.multireddits.api.addSubreddit.pending) return;
					s(Z({
						name: t.name
					}));
					const {
						displayText: m
					} = c;
					if (!m) return;
					const b = r.map(e => `/user/${m.toLowerCase()}/m/${e.toLowerCase()}`).join(","),
						g = `${"profile"===t.type?d.Wb:""}${t.name}`,
						O = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/multi/bulk_add/r/${t}`),
							data: {
								paths: r
							},
							method: d.cb.PUT
						}))(a(), g, b);
					if (O.ok) {
						const n = Object(P.K)(l, {
								identifier: t
							}) || e && e.id || "",
							a = r.map(e => Object(T.h)(m, e));
						s(Object(u.f)()), s(Object(p.e)({
							text: i.fbt._({
								"*": "Successfully added {communityName} to {number} custom feeds!",
								_1: "Successfully added {communityName} to 1 custom feed!"
							}, [i.fbt._param("communityName", `${"subreddit"===t.type?o.d.subreddit:o.d.profile}${t.name}`), i.fbt._plural(r.length, "number")], {
								hk: "9EXsM"
							})
						})), await s(Y({
							communityInfo: e,
							id: n,
							multipaths: a,
							type: t.type
						})), 1 === r.length && await s(Q())
					} else {
						s(ee(O.error));
						let e = i.fbt._("Sorry, something went wrong adding {subredditName}.", [i.fbt._param("subredditName", t.name)], {
							hk: "ERdWO"
						});
						O.body && (O.body.reason === q.d.TooManySubreddits ? e = i.fbt._("Maximum communities reached", null, {
							hk: "2eguyW"
						}) : O.body.reason === q.d.InvalidSrQuarantine && (e = i.fbt._("{communityname} is invalid because it is quarantined", [i.fbt._param("communityname", `${"subreddit"===t.type?o.d.subreddit:o.d.profile}${t.name}`)], {
							hk: "407xmS"
						}))), s(Object(p.e)({
							text: e,
							kind: N.b.Error
						}))
					}
				}, re = Object(l.a)(q.w), ie = Object(l.a)(q.x), se = Object(l.a)(q.v), ne = ({
					id: e,
					multiredditName: t,
					name: r,
					type: s
				}) => async (n, a, {
					apiContext: o
				}) => {
					const l = a(),
						c = Object(I.j)(l);
					if (!c || !c.displayText || l.multireddits.api.removeSubreddit.pending) return;
					n(re({
						id: e
					}));
					const {
						displayText: m
					} = c, b = Object(T.h)(m, t), g = `${"profile"===s?d.Wb:""}${r}`, O = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${r}r/${t}`),
						method: d.cb.DELETE
					}))(o(), g, b);
					O.ok ? (n(Object(u.f)()), n(ie({
						id: e,
						multipath: b,
						type: s
					})), n(Object(p.e)({
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
					})), n(Q())) : (n(se(O.error)), n(Object(p.e)({
						text: i.fbt._("Sorry, something went wrong removing {subredditName}.", [i.fbt._param("subredditName", r)], {
							hk: "1E1rKm"
						})
					})))
				}, ae = Object(l.a)(q.h), de = Object(l.a)(q.i), oe = Object(l.a)(q.j), le = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r();
					if (!Object(I.j)(n)) return;
					t(de());
					const o = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${t}`),
						method: d.cb.DELETE
					}))(s(), e);
					o.ok ? (await t(oe(e)), t(Object(u.f)()), await t(Object(a.b)("/")), t(Object(p.e)({
						text: i.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(ae(o.error))
				}, ce = Object(l.a)(q.n), ue = Object(l.a)(q.o), me = Object(l.a)(q.p), pe = ({
					description: e,
					displayText: t,
					multipath: r,
					visibility: s
				}) => async (n, a, {
					apiContext: o
				}) => {
					const l = a();
					if (!Object(I.K)(l)) return;
					n(ue());
					const c = await (({
						context: e,
						description: t,
						displayText: r,
						multipath: i,
						visibility: s
					}) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${i}`),
						data: {
							model: JSON.stringify({
								description_md: t,
								display_name: r,
								visibility: s
							}),
							expand_srs: !0
						},
						method: d.cb.PUT
					}))({
						context: o(),
						description: e,
						displayText: t,
						multipath: r,
						visibility: s
					});
					c.ok ? (await n(me(S(c.body.data))), n(Object(u.f)()), n(Object(p.e)({
						text: i.fbt._("Custom feed updated!", null, {
							hk: "39R30f"
						})
					}))) : (n(ce(c.error)), n(Object(p.e)({
						kind: N.b.Error,
						text: i.fbt._("Something went wrong", null, {
							hk: "1Y6lli"
						})
					})))
				}, be = Object(l.a)(q.z), fe = Object(l.a)(q.A), he = Object(l.a)(q.B), xe = ({
					multiredditName: e,
					username: t,
					toExcludeNames: r
				}) => async (i, s, {
					gqlContext: n
				}) => {
					const a = s(),
						d = Object(I.j)(a);
					if (!(t || d && d.displayText)) return;
					const o = Object(T.h)(t || d.displayText, e),
						l = a.multireddits.models[o];
					if (!l || !l.subredditIds) return;
					i(fe());
					const c = r && r.reduce((e, t) => {
							const r = Object(P.F)(a, t) || Object(P.G)(a, t);
							return r ? [...e, r] : e
						}, []),
						u = await ((e, t) => Object(O.a)(e, {
							..._,
							variables: t
						}))(n(), {
							count: q.y,
							subredditIds: l.subredditIds,
							toExclude: c
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
				return N
			})), r.d(t, "multiredditFeedLoaded", (function() {
				return E
			})), r.d(t, "multiredditFeedFailed", (function() {
				return F
			})), r.d(t, "multiredditFeedRequested", (function() {
				return P
			})), r.d(t, "multiredditRequested", (function() {
				return I
			}));
			var i = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				n = r.n(s),
				a = r("./node_modules/react-router-redux/es/index.js"),
				d = r("./src/lib/addQueryParams/index.ts"),
				o = r("./src/reddit/actions/multireddit/index.ts"),
				l = r("./src/reddit/endpoints/page/multiredditListing.ts"),
				c = r("./src/lib/constants/index.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/actions/users.ts"),
				p = r("./src/reddit/constants/parameters.ts"),
				b = r("./src/reddit/constants/postLayout.ts"),
				f = r("./src/reddit/contexts/PageLayer/index.tsx"),
				h = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				x = r("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				y = r("./src/reddit/models/Multireddit/index.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/models/User/index.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/lib/makeActionCreator/index.ts"),
				v = r("./src/lib/makeListingKey/index.ts"),
				w = r("./src/reddit/actions/ads/index.ts"),
				C = r("./src/reddit/helpers/canonicalUrls.ts"),
				k = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				T = r("./src/reddit/actions/pages/multireddit/constants.ts");
			const N = Object(_.a)(T.c),
				E = Object(_.a)(T.b),
				F = Object(_.a)(T.a),
				P = (e, t, r, s, n) => async (a, d, m) => {
					const {
						gqlContext: p
					} = m, h = d();
					if (h.listings.postOrder.api.pending[e]) return;
					a(N({
						key: e
					})), s.layout = b.e[Object(f.O)(h, {})];
					const O = {
							path: Object(y.h)(t, r).replace(/\/$/, ""),
							includeIdentity: !0,
							includeSources: !0,
							sort: s.sort ? s.sort.toUpperCase() : void 0,
							range: s.t ? s.t.toUpperCase() : void 0
						},
						_ = await Object(k.a)("multireddit", () => Object(l.a)(p(), O)),
						{
							data: v
						} = _.body,
						C = `error-${e}`;
					if (_.ok && v) {
						const i = Object(x.a)(v);
						if (!v.multireddit) return n && a(u.f(C)), void a(F({
							...i,
							error: {
								type: c.E.NOT_FOUND_ERROR
							},
							key: e
						}));
						a(E({
							key: e,
							meta: h.meta,
							...i,
							account: i.account || Object(j.j)(h),
							multiredditsModelsState: h.multireddits.models
						})), n && a(u.f(C)), a(Object(o.recommendationsRequested)({
							multiredditName: r,
							username: t
						})), window.addEventListener("load", () => {
							a(Object(w.b)(S.a.MULTIREDDIT))
						})
					} else n && a(u.e({
						id: C,
						kind: g.b.Error,
						text: i.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: i.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: P(e, t, r, s, n)
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
						if (t.user.session && t.user.session.unsafeLoggedOut) return void r(Object(a.c)("/"));
						!t.user.account && t.user.session && await r(m.r()), t = i();
						const {
							account: n
						} = t.user;
						if (!n) return void r(Object(a.c)("/"));
						let l = `/user/${o=Object(O.e)(n)}/m/${s}`;
						const {
							sort: c
						} = e.params;
						return l += c ? `/${c}` : "", void r(Object(a.c)(Object(d.a)(l, e.queryParams)))
					}
					const {
						sort: l = c.P.HOT
					} = e.params, u = i();
					o || (o = u.user.account ? Object(O.e)(u.user.account) : "");
					const b = Object(y.h)(o, s),
						f = Object(v.a)(b, l, e.queryParams),
						x = u.listings.postOrder.ids[f],
						g = u.listings.postOrder.api.error[f],
						j = u.listings.postOrder.api.pending[f],
						_ = p.x in e.queryParams && e.queryParams[p.x].toUpperCase() || "",
						k = _ in c.Ub && c.Ub[_];
					if (j || x && !g && !t) return void(x && (u.sidebarPromotedPosts.firstFetch || r(Object(w.b)(S.a.MULTIREDDIT))));
					await r(P(f, o, s, {
						...n()(e.queryParams, p.l),
						...n()(e.queryParams, p.k),
						sort: l,
						t: Object(h.a)(l, k)
					}, !0));
					const T = i();
					Object(C.c)(T, r, e)
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
				a = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				d = r("./src/reddit/components/CharacterCountdown/index.m.less"),
				o = r.n(d);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(a.b, {
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
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
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
				C = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				k = r("./src/reddit/models/Multireddit/index.ts"),
				S = r("./src/reddit/selectors/multireddit.ts"),
				T = r("./src/reddit/selectors/tooltip.ts"),
				N = r("./src/reddit/components/MultiredditEditModal/index.m.less"),
				E = r.n(N);
			const F = Object(l.a)(g.a),
				P = () => i.fbt._("public", null, {
					hk: "2SLZ4Q"
				}),
				I = () => i.fbt._("private", null, {
					hk: "3E0m6i"
				}),
				M = 12,
				q = "multi-edit-modal-visibility",
				L = Object(d.c)({
					apiFetched: e => e.multireddits.api.edit.fetched,
					apiPending: e => e.multireddits.api.edit.pending,
					isDropdownOpen: Object(T.b)(q),
					multireddit: x.d,
					myMultireddits: S.j
				}),
				R = Object(x.t)(),
				D = Object(a.b)(L, e => ({
					edit: t => e(Object(m.editRequested)(t)),
					onClose: () => e(Object(u.f)()),
					onToggleDropdown: () => e(Object(p.h)({
						tooltipId: q
					}))
				}), (e, t, r) => ({
					...e,
					...t,
					...r,
					onSubmit: ({
						visibility: r,
						description: i,
						displayText: s
					}) => {
						e.multireddit && (e.multireddit.description !== i || e.multireddit.displayText !== s || e.multireddit.visibility !== r ? t.edit({
							description: i,
							displayText: s,
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
						this.setState(e => e.visibility === k.e.Private ? e : {
							...e,
							visibility: e.visibility === k.e.Public ? k.e.Hidden : k.e.Public
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
						visibility: k.e.Private
					}
				}
				renderDisplayText() {
					const {
						displayText: e,
						displayTextError: t
					} = this.state;
					return n.a.createElement(f.g, null, n.a.createElement(h.b, {
						label: i.fbt._("custom feed name", null, {
							hk: "1pq8pZ"
						}),
						onBlur: this.checkDisplayTextValidity,
						onChange: this.onDisplayTextChange,
						value: e,
						maxLength: k.c,
						state: t ? h.d.Invalid : void 0,
						isRequired: !0
					}), t ? n.a.createElement("p", {
						className: E.a.displayTextError
					}, t === k.a.SameName ? i.fbt._("A custom feed with that name already exists", null, {
						hk: "1WJHG3"
					}) : t === k.a.TooShort ? i.fbt._("Name must contain at least two alphanumeric characters", null, {
						hk: "3TWc1H"
					}) : i.fbt._("Something went wrong with this name, maybe try something else?", null, {
						hk: "N6k8D"
					})) : n.a.createElement(b.a, {
						maxChars: k.c,
						text: e
					}))
				}
				renderDescription() {
					const {
						description: e
					} = this.state;
					return n.a.createElement(f.g, null, n.a.createElement(h.c, {
						className: E.a.descriptionTextarea,
						label: i.fbt._("description (optional)", null, {
							hk: "4mWEDA"
						}),
						maxLength: k.b,
						onChange: this.onDescriptionChange,
						value: e
					}), n.a.createElement(b.a, {
						maxChars: k.b,
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
					return n.a.createElement(f.g, {
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
					}))), n.a.createElement("div", null, n.a.createElement(y.o, {
						className: E.a.dropdownBtn,
						id: q,
						onClick: t
					}, r === k.e.Private ? I() : P(), n.a.createElement(w.b, null)), n.a.createElement(F, {
						isOpen: e,
						isOverlay: !0,
						targetPosition: ["center", "bottom"],
						tooltipId: q,
						tooltipPosition: ["center", "top"]
					}, n.a.createElement(O.b, {
						displayText: I(),
						noIcon: !0,
						onClick: this.onRowClick(k.e.Private),
						isSelected: r === k.e.Private
					}), n.a.createElement(O.b, {
						displayText: P(),
						isSelected: r === k.e.Public || r === k.e.Hidden,
						noIcon: !0,
						onClick: this.onRowClick(k.e.Public)
					}))))
				}
				renderShowOnProfileToggle() {
					const {
						visibility: e
					} = this.state;
					return n.a.createElement(f.g, {
						className: Object(c.a)(E.a.formRow, {
							[E.a.disabled]: e === k.e.Private
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
						disabled: e === k.e.Private,
						on: e === k.e.Public,
						onToggle: this.onShowOnProfileToggle
					}))
				}
				render() {
					const {
						apiPending: e,
						multireddit: t,
						onClose: r
					} = this.props;
					return t ? n.a.createElement(f.d, null, n.a.createElement(f.h, null, n.a.createElement(C.a, null, n.a.createElement(f.p, null, i.fbt._("Edit Custom Feed", null, {
						hk: "3yOOdv"
					})), n.a.createElement("button", {
						onClick: r
					}, n.a.createElement(f.b, null)))), n.a.createElement(f.k, null, this.renderDisplayText(), this.renderDescription(), this.renderVisibilityDropdown(), this.renderShowOnProfileToggle()), n.a.createElement(f.f, {
						className: E.a.footer
					}, n.a.createElement(f.q, {
						onClick: this.onSubmit
					}, e ? n.a.createElement(j.a, {
						className: E.a.loadingIcon,
						sizePx: M
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
			t.default = Object(o.a)(R(D(G)))
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
				a = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/controls/Input/index.tsx"),
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
			const m = a.a.div("icon", c.a),
				p = a.a.textarea("textarea", c.a),
				b = a.a.span("Invalid", c.a);
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
						isRequired: a,
						label: o,
						onKeyDown: l,
						state: m,
						...p
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: r,
						isRequired: a,
						label: o,
						state: m
					}, s.a.createElement(d.a, u({}, p, {
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
						isRequired: a,
						label: d,
						onKeyDown: o,
						state: l,
						...m
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: r,
						isRequired: a,
						label: d,
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
				return a
			})), r.d(t, "p", (function() {
				return d
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
			const a = i.a.section("FormPage", n.a),
				d = i.a.h1("HomePageTitle", n.a),
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
				a = r.n(n),
				d = r("./src/lib/classNames/index.ts"),
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
			class x extends a.a.Component {
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
					}, r = Object(d.a)(f.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(o.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && a.a.createElement("span", {
						className: r
					}, e.children), a.a.createElement("span", {
						className: Object(d.a)(f.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: r
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(d.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(c.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const r = Object(d.a)(f.a.row, e, {
					[f.a.mIsInteractive]: !t.noHover,
					[f.a.mIsSelected]: t.isSelected,
					[f.a.topics]: t.isTopicsStyle
				});
				return a.a.createElement(x, h({
					className: r
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, r) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
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
				a = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				d = r.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(n.a)(d.a.loadingIcon, t, {
					[d.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
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
				a = r.n(n);
			t.a = i.a.wrapped(s.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/endpoints/page/multiredditListing.ts": function(e, t, r) {
			"use strict";
			var i = r("./src/graphql/operations/MultiredditListing.json"),
				s = r("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(s.a)(e, {
				...i,
				variables: t
			})
		},
		"./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts": function(e, t, r) {
			"use strict";
			var i = r("./src/lib/env/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				n = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				a = r("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				d = r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
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
						if (!Object(m.j)(e)) {
							const t = `Received unhandled element type when processing multireddit data: "${e.__typename}"`;
							Object(i.b)() || console.warn(t), s.c.captureMessage(t);
							continue
						}
						const r = e;
						t.postIds.push(r.id);
						const {
							post: a,
							crosspost: l
						} = r && Object(o.a)(r);
						t.posts[a.id] = a, l && (t.posts[l.id] = l), Object(m.i)(r) || Object(m.h)(r) || (r.authorFlair && (t.postFlair[a.belongsTo.id] || (t.postFlair[a.belongsTo.id] = {}), t.postFlair[a.belongsTo.id][a.author] = Object(n.a)(r.authorFlair)[0]), Object(m.l)(r) && (t.subreddits[r.subreddit.id] || (t.subreddits[r.subreddit.id] = Object(c.a)(r.subreddit)), t.postFlair[r.subreddit.id] || (t.postFlair[r.subreddit.id] = Object(d.a)(r.subreddit))))
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
				} = Object(a.a)(p);
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
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, r) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, r) {
			"use strict";
			var i = r("./node_modules/react/index.js"),
				s = r.n(i),
				n = r("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				d = r("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				o = r.n(d);
			const l = r("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(n.a)();
				return s.a.createElement("i", {
					className: `${Object(a.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", o.a);
			t.a = l
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MultiredditEditModal.9cd80890d06c623b06da.js.map