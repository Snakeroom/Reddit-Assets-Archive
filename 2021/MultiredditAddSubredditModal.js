// https://www.redditstatic.com/desktop2x/MultiredditAddSubredditModal.8586d533c0d92330c010.js
// Retrieved at 5/27/2021, 12:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MultiredditAddSubredditModal"], {
		"./node_modules/lodash/without.js": function(e, t, r) {
			var i = r("./node_modules/lodash/_baseDifference.js"),
				s = r("./node_modules/lodash/_baseRest.js"),
				d = r("./node_modules/lodash/isArrayLikeObject.js"),
				n = s((function(e, t) {
					return d(e) ? i(e, t) : []
				}));
			e.exports = n
		},
		"./src/graphql/operations/AllUserMultireddits.json": function(e) {
			e.exports = JSON.parse('{"id":"8f2551b0bce3"}')
		},
		"./src/graphql/operations/MultiredditListing.json": function(e) {
			e.exports = JSON.parse('{"id":"f7680d110e06"}')
		},
		"./src/graphql/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"3c4d88474140"}')
		},
		"./src/reddit/actions/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "morePostsFailed", (function() {
				return M
			})), r.d(t, "morePostsLoaded", (function() {
				return L
			})), r.d(t, "morePostsPending", (function() {
				return A
			})), r.d(t, "moreOfMyMultiRequested", (function() {
				return G
			})), r.d(t, "myMultiredditsPending", (function() {
				return U
			})), r.d(t, "myMultiredditsReceived", (function() {
				return D
			})), r.d(t, "myMultiredditsRequested", (function() {
				return z
			})), r.d(t, "createFailure", (function() {
				return W
			})), r.d(t, "createPending", (function() {
				return J
			})), r.d(t, "createSuccess", (function() {
				return H
			})), r.d(t, "createRequested", (function() {
				return K
			})), r.d(t, "reloadCurrentMultiredditFeedRequested", (function() {
				return B
			})), r.d(t, "duplicateFailure", (function() {
				return Q
			})), r.d(t, "duplicatePending", (function() {
				return X
			})), r.d(t, "duplicateSuccess", (function() {
				return $
			})), r.d(t, "duplicateRequested", (function() {
				return Y
			})), r.d(t, "addSubredditPending", (function() {
				return V
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
				return be
			})), r.d(t, "subredditRecommendationsFailure", (function() {
				return pe
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
				b = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/constants/parameters.ts"),
				f = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/lib/omitHeaders/index.ts"),
				x = r("./src/reddit/constants/headers.ts"),
				g = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				O = r("./src/graphql/operations/AllUserMultireddits.json"),
				j = r("./src/lib/makeGqlRequest/index.ts"),
				y = r("./src/reddit/endpoints/page/multiredditListing.ts"),
				C = r("./src/graphql/operations/SubredditRecommendations.json"),
				_ = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				S = r("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				k = r("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				N = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				v = e => {
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
						s = i.filter(e => !e.displayName.startsWith(a.ac)).map(e => e.id),
						d = i.filter(e => e.displayName.startsWith(a.ac)).map(e => e.id);
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
				F = r("./src/reddit/models/Multireddit/index.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				w = r("./src/reddit/selectors/multireddit.ts"),
				R = r("./src/reddit/selectors/platform.ts"),
				P = r("./src/reddit/selectors/subreddit.ts"),
				T = r("./src/reddit/selectors/user.ts"),
				q = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				I = r("./src/reddit/actions/multireddit/constants.ts");
			const M = Object(c.a)(I.q),
				L = Object(c.a)(I.r),
				A = Object(c.a)(I.s),
				G = e => async (t, r, i) => {
					const {
						gqlContext: s
					} = i, {
						sort: d = a.R.HOT,
						multiredditName: n,
						username: o
					} = e, c = r(), u = c.platform.currentPage, m = u ? u.queryParams : {}, b = Object(w.d)(c, {
						multiredditName: n,
						username: o
					}), p = Object(l.a)(b.url, d, m), f = c.listings.postOrder.loadMore[p];
					if (!f) return;
					const h = c.listings.postOrder.api.pending[p],
						x = c.listings.postOrder.fetchedTokens,
						g = x[p] && x[p][f.token] || !1;
					if (h || g) return;
					t(A({
						key: p,
						fetchedToken: f.token
					}));
					const O = b.url.replace(/\/$/, ""),
						j = m.t ? m.t.toUpperCase() : void 0,
						C = {
							after: f.token,
							includeIdentity: !1,
							includeSources: !1,
							path: O,
							range: j,
							sort: d.toUpperCase()
						},
						S = await Object(y.a)(s(), C),
						{
							data: N
						} = S.body,
						v = Object(k.a)(N);
					S.ok && N && N.multireddit ? t(L({
						fetchedToken: f.token,
						key: p,
						meta: c.meta,
						...v,
						...Object(_.a)(c, p, v),
						multiredditsModelsState: c.multireddits.models
					})) : t(M({
						error: {
							type: a.E.NOT_FOUND_ERROR
						},
						fetchedToken: f.token,
						key: p,
						...S.body,
						...Object(_.a)(c, p, v)
					}))
				}, U = Object(c.a)(I.t), D = Object(c.a)(I.u), z = (e, t = !1) => async (r, i, {
					apiContext: s,
					gqlContext: d
				}) => {
					const n = i();
					if (!Object(T.j)(n)) return;
					if (!e && Object(w.h)(n) || Object(w.i)(n)) return;
					r(U());
					const a = await ((e, t) => Object(j.a)(e, {
						...O,
						variables: t
					}))(d(), {
						includeSources: t
					});
					if (a.ok) {
						const e = a.body.data.identity.allMultireddits.edges.map(e => e.node),
							t = Object(S.b)(e);
						r(D({
							...t,
							multiredditsModelsState: n.multireddits.models
						}))
					}
				}, W = Object(c.a)(I.e), J = Object(c.a)(I.f), H = Object(c.a)(I.g), K = ({
					description: e,
					displayName: t,
					shouldNavigate: r
				}) => async (s, d, {
					apiContext: o
				}) => {
					const c = d(),
						l = Object(T.j)(c);
					if (!l) return;
					s(J());
					const m = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/multi`),
						data: {
							model: JSON.stringify({
								description_md: r,
								display_name: t,
								visibility: "private",
								subreddits: []
							})
						},
						method: a.eb.POST
					}))(o(), t, e);
					if (m.ok) {
						const {
							id: e
						} = l;
						if (await s(H({
								multireddit: v(m.body.data),
								multiredditsModelsState: c.multireddits.models,
								userId: e
							})), r) {
							s(Object(u.f)());
							const e = m.body.data.path.toLowerCase();
							await s(Object(n.b)(e))
						}
						s(Object(b.f)({
							text: i.fbt._("Custom feed created!", null, {
								hk: "258cY9"
							})
						}))
					} else s(W(m.error))
				}, B = () => async (e, t, {
					apiContext: r
				}) => {
					const i = t(),
						s = Object(T.j)(i),
						n = Object(R.h)(i) ? Object(R.k)(i) : Object(R.b)(i),
						o = n && n.routeMatch && n.routeMatch.match;
					if (!o) return;
					const c = o.params,
						u = c.sort || a.R.HOT,
						{
							multiredditName: b,
							username: f
						} = c;
					if (!b) return;
					const h = Object(F.h)((f || s && s.displayText || "").toLowerCase(), b.toLowerCase()),
						{
							queryParams: x
						} = o,
						g = Object(l.a)(h, u, x),
						O = p.x in x && x[p.x].toUpperCase() || "",
						j = a.Yb[O] || !1,
						y = Object(T.j)(i);
					(f || y && y.displayText) && await e(Object(m.multiredditFeedRequested)(g, (f || y.displayText).toLowerCase(), b.toLowerCase(), {
						...d()(x, p.l),
						...d()(x, p.k),
						sort: u,
						t: Object(q.a)(u, j)
					}))
				}, Q = Object(c.a)(I.k), X = Object(c.a)(I.l), $ = Object(c.a)(I.m), Y = ({
					description: e,
					displayName: t,
					fromName: r,
					fromUsername: s
				}) => async (d, o, {
					apiContext: c
				}) => {
					const l = o(),
						m = Object(T.j)(l);
					if (!m || !m.displayText) return;
					const p = Object(F.h)((s || m.displayText).toLowerCase(), r.toLowerCase());
					d(X());
					const O = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/multi/copy`),
						data: {
							description_md: t.description,
							display_name: t.displayName,
							expand_srs: !0,
							from: t.from
						},
						method: a.eb.POST
					}))(c(), {
						from: p,
						displayName: t,
						description: e
					});
					if (O.ok) {
						const e = v(O.body.data);
						d(Object(u.f)()), d($({
							multireddit: e,
							multiredditsModelsState: l.multireddits.models,
							userId: m.id
						})), d(Object(b.f)({
							text: i.fbt._("Custom feed duplicated!", null, {
								hk: "2u48X"
							}),
							buttonText: i.fbt._("Go there", null, {
								hk: "4sXZMm"
							}),
							buttonAction: Object(n.b)(e.url)
						}))
					} else d(Q(O.error)), d(Object(b.f)({
						text: i.fbt._("Something went wrong duplicating {multiName}", [i.fbt._param("multiName", r)], {
							hk: "4bzN2D"
						})
					}))
				}, V = Object(c.a)(I.b), Z = Object(c.a)(I.c), ee = Object(c.a)(I.a), te = ({
					communityInfo: e,
					identifier: t,
					multiredditNames: r
				}) => async (s, d, {
					apiContext: n
				}) => {
					const c = d(),
						l = Object(T.j)(c);
					if (!l || c.multireddits.api.addSubreddit.pending) return;
					s(V({
						name: t.name
					}));
					const {
						displayText: m
					} = l;
					if (!m) return;
					const p = r.map(e => `/user/${m.toLowerCase()}/m/${e.toLowerCase()}`).join(","),
						O = `${"profile"===t.type?a.ac:""}${t.name}`,
						j = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(g.a)(`${e.apiUrl}/api/multi/bulk_add/r/${t}`),
							data: {
								paths: r
							},
							method: a.eb.PUT
						}))(n(), O, p);
					if (j.ok) {
						const d = Object(P.L)(c, {
								identifier: t
							}) || e && e.id || "",
							n = r.map(e => Object(F.h)(m, e));
						s(Object(u.f)()), s(Object(b.f)({
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
						})), 1 === r.length && await s(B())
					} else {
						s(ee(j.error));
						let e = i.fbt._("Sorry, something went wrong adding {subredditName}.", [i.fbt._param("subredditName", t.name)], {
							hk: "ERdWO"
						});
						j.body && (j.body.reason === I.d.TooManySubreddits ? e = i.fbt._("Maximum communities reached", null, {
							hk: "2eguyW"
						}) : j.body.reason === I.d.InvalidSrQuarantine && (e = i.fbt._("{communityname} is invalid because it is quarantined", [i.fbt._param("communityname", `${"subreddit"===t.type?o.d.subreddit:o.d.profile}${t.name}`)], {
							hk: "407xmS"
						}))), s(Object(b.f)({
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
						l = Object(T.j)(c);
					if (!l || !l.displayText || c.multireddits.api.removeSubreddit.pending) return;
					d(re({
						id: e
					}));
					const {
						displayText: m
					} = l, p = Object(F.h)(m, t), O = `${"profile"===s?a.ac:""}${r}`, j = await ((e, t, r) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/multi${r}r/${t}`),
						method: a.eb.DELETE
					}))(o(), O, p);
					j.ok ? (d(Object(u.f)()), d(ie({
						id: e,
						multipath: p,
						type: s
					})), d(Object(b.f)({
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
					})), d(B())) : (d(se(j.error)), d(Object(b.f)({
						text: i.fbt._("Sorry, something went wrong removing {subredditName}.", [i.fbt._param("subredditName", r)], {
							hk: "1E1rKm"
						})
					})))
				}, ne = Object(c.a)(I.h), ae = Object(c.a)(I.i), oe = Object(c.a)(I.j), ce = e => async (t, r, {
					apiContext: s
				}) => {
					const d = r();
					if (!Object(T.j)(d)) return;
					t(ae());
					const o = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/multi${t}`),
						method: a.eb.DELETE
					}))(s(), e);
					o.ok ? (await t(oe(e)), t(Object(u.f)()), await t(Object(n.b)("/")), t(Object(b.f)({
						text: i.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(ne(o.error))
				}, le = Object(c.a)(I.n), ue = Object(c.a)(I.o), me = Object(c.a)(I.p), be = ({
					description: e,
					displayText: t,
					multipath: r,
					visibility: s
				}) => async (d, n, {
					apiContext: o
				}) => {
					const c = n();
					if (!Object(T.K)(c)) return;
					d(ue());
					const l = await (({
						context: e,
						description: t,
						displayText: r,
						multipath: i,
						visibility: s
					}) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/multi${i}`),
						data: {
							model: JSON.stringify({
								description_md: t,
								display_name: r,
								visibility: s
							}),
							expand_srs: !0
						},
						method: a.eb.PUT
					}))({
						context: o(),
						description: e,
						displayText: t,
						multipath: r,
						visibility: s
					});
					l.ok ? (await d(me(v(l.body.data))), d(Object(u.f)()), d(Object(b.f)({
						text: i.fbt._("Custom feed updated!", null, {
							hk: "39R30f"
						})
					}))) : (d(le(l.error)), d(Object(b.f)({
						kind: E.b.Error,
						text: i.fbt._("Something went wrong", null, {
							hk: "1Y6lli"
						})
					})))
				}, pe = Object(c.a)(I.z), fe = Object(c.a)(I.A), he = Object(c.a)(I.B), xe = ({
					multiredditName: e,
					username: t,
					toExcludeNames: r
				}) => async (i, s, {
					gqlContext: d
				}) => {
					const n = s(),
						a = Object(T.j)(n);
					if (!(t || a && a.displayText)) return;
					const o = Object(F.h)(t || a.displayText, e),
						c = n.multireddits.models[o];
					if (!c || !c.subredditIds) return;
					i(fe());
					const l = r && r.reduce((e, t) => {
							const r = Object(P.F)(n, t) || Object(P.G)(n, t);
							return r ? [...e, r] : e
						}, []),
						u = await ((e, t) => Object(j.a)(e, {
							...C,
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
							subreddits: Object(N.b)(e)
						}))
					} else i(pe(u.error))
				}
		},
		"./src/reddit/actions/pages/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "multiredditFeedPending", (function() {
				return R
			})), r.d(t, "multiredditFeedLoaded", (function() {
				return P
			})), r.d(t, "multiredditFeedFailed", (function() {
				return T
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
				b = r("./src/reddit/actions/users.ts"),
				p = r("./src/reddit/constants/parameters.ts"),
				f = r("./src/reddit/constants/postLayout.ts"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				x = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				O = r("./src/reddit/models/Multireddit/index.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/models/User/index.ts"),
				C = r("./src/reddit/selectors/multireddit.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				S = r("./src/lib/makeActionCreator/index.ts"),
				k = r("./src/lib/makeListingKey/index.ts"),
				N = r("./src/reddit/actions/ads/index.ts"),
				v = r("./src/reddit/helpers/canonicalUrls.ts"),
				F = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				E = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				w = r("./src/reddit/actions/pages/multireddit/constants.ts");
			const R = Object(S.a)(w.c),
				P = Object(S.a)(w.b),
				T = Object(S.a)(w.a),
				q = (e, t, r, s, d) => async (n, a, u) => {
					const {
						gqlContext: b
					} = u, p = a();
					if (p.listings.postOrder.api.pending[e]) return;
					n(R({
						key: e
					})), s.layout = f.e[Object(h.O)(p, {})];
					const x = {
							path: Object(O.h)(t, r).replace(/\/$/, ""),
							includeIdentity: !0,
							includeSources: !0,
							sort: s.sort ? s.sort.toUpperCase() : void 0,
							range: s.t ? s.t.toUpperCase() : void 0
						},
						y = await Object(F.a)("multireddit", () => Object(c.a)(b(), x)),
						{
							data: C
						} = y.body,
						S = `error-${e}`;
					if (y.ok && C) {
						const i = Object(g.a)(C);
						if (!C.multireddit) return d && n(m.g(S)), void n(T({
							...i,
							error: {
								type: l.E.NOT_FOUND_ERROR
							},
							key: e
						}));
						n(P({
							key: e,
							meta: p.meta,
							...i,
							account: i.account || Object(_.j)(p),
							multiredditsModelsState: p.multireddits.models
						})), d && n(m.g(S)), n(Object(o.recommendationsRequested)({
							multiredditName: r,
							username: t
						})), window.addEventListener("load", () => {
							n(Object(N.b)(E.a.MULTIREDDIT))
						})
					} else d && n(m.f({
						id: S,
						kind: j.b.Error,
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
						!t.user.account && t.user.session && await r(b.r()), t = i();
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
						sort: c = l.R.HOT
					} = e.params, m = {
						multiredditName: s,
						username: o
					}, f = i();
					o || (o = f.user.account ? Object(y.e)(f.user.account) : "");
					const h = Object(O.h)(o, s),
						g = Object(k.a)(h, c, e.queryParams),
						j = f.listings.postOrder.ids[g],
						_ = f.listings.postOrder.api.error[g],
						S = f.listings.postOrder.api.pending[g],
						F = p.x in e.queryParams && e.queryParams[p.x].toUpperCase() || "",
						w = F in l.Yb && l.Yb[F];
					if (S || j && !_ && !t) return void(j && (r(u.l({
						title: Object(C.f)(i(), m)
					})), f.sidebarPromotedPosts.firstFetch || r(Object(N.b)(E.a.MULTIREDDIT))));
					await r(q(g, o, s, {
						...d()(e.queryParams, p.l),
						...d()(e.queryParams, p.k),
						sort: c,
						t: Object(x.a)(c, w)
					}, !0));
					const R = i();
					Object(C.d)(R, m) && r(u.l({
						title: Object(C.f)(i(), m)
					})), Object(v.c)(R, r, e)
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
				d = r.n(s),
				n = r("./node_modules/lodash/without.js"),
				a = r.n(n),
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
				j = r("./src/reddit/components/ThemeProvider/index.tsx"),
				y = r("./src/reddit/constants/keycodes.ts"),
				C = r("./src/reddit/constants/posts.ts"),
				_ = r("./src/reddit/contexts/PageLayer/index.tsx"),
				S = r("./src/reddit/controls/Button/index.tsx"),
				k = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = r("./src/reddit/helpers/multireddit/index.ts"),
				v = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				F = r("./src/reddit/models/Multireddit/index.ts"),
				E = r("./src/reddit/models/Subreddit/index.ts"),
				w = r("./src/reddit/selectors/multireddit.ts"),
				R = r("./src/reddit/controls/Checkbox/index.tsx"),
				P = r("./src/reddit/components/MultiredditAddSubredditModal/index.m.less"),
				T = r.n(P);
			const {
				fbt: q
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var I = ({
				containsSubreddit: e,
				isSelected: t,
				multireddit: r,
				onCheck: i,
				recentRef: s
			}) => c.a.createElement("div", {
				className: T.a.listItem,
				onClick: i,
				ref: s
			}, c.a.createElement(R.a, {
				className: T.a.checkbox,
				disabled: e,
				isCheckboxSelected: t || e,
				toggleCheckbox: i
			}), c.a.createElement("img", {
				src: r.icon,
				className: T.a.icon
			}), c.a.createElement("div", {
				className: T.a.label
			}, c.a.createElement("div", {
				className: T.a.name
			}, r.displayText), c.a.createElement("div", {
				className: T.a.details
			}, e ? q._("Community already added to this feed", null, {
				hk: "3dMmTS"
			}) : q._({
				"*": "{communities} communities",
				_1: "1 community"
			}, [q._plural(r.subredditCount, "communities")], {
				hk: "2tlE2Y"
			}))));
			const M = 40,
				L = 12,
				A = Object(_.t)(),
				G = Object(u.c)({
					createApiError: e => e.multireddits.api.create.error,
					createApiFetched: e => e.multireddits.api.create.fetched,
					createApiPending: e => e.multireddits.api.create.pending,
					currentSubredditOrProfile: _.o,
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
							type: e.currentSubredditOrProfile.type === E.f.User ? C.a.PROFILE : C.a.SUBREDDIT
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
						const e = Object(N.a)({
							displayText: this.state.creatingName,
							myMultireddits: this.props.myMultireddits,
							thisMultireddit: null
						});
						e ? this.setState({
							displayTextError: e,
							showCreateError: !0
						}) : this.props.onCreateSubmit(this.state.creatingName)
					}, this.onCreateKeyDown = e => {
						e.which === y.a.Enter && this.onCreateSubmit()
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
						return t && (t.type === E.f.User && e.profileIds && e.profileIds.indexOf(t.id) > -1 || t.type !== E.f.User && e.subredditIds && e.subredditIds.indexOf(t.id) > -1) || !1
					}, this.inputRef = null, this.recentRef = null, this.scrollRef = null, this.onCheckFnCache = {}
				}
				render() {
					const {
						props: {
							createApiPending: e,
							mineApiPending: t,
							myMultireddits: r,
							onClose: s,
							submitApiPending: n
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
					return c.a.createElement(j.a, {
						forceRedditTheme: !0
					}, c.a.createElement(x.d, null, c.a.createElement(x.h, null, c.a.createElement(v.a, null, c.a.createElement(x.p, null, i.fbt._("Add community to Custom Feed", null, {
						hk: "1twPIx"
					})), c.a.createElement("button", {
						onClick: s
					}, c.a.createElement(x.b, null)))), c.a.createElement(x.k, {
						className: T.a.main
					}, c.a.createElement("div", {
						className: T.a.listContainer,
						ref: this.setScrollRef
					}, t ? c.a.createElement("div", {
						className: T.a.loadingContainer
					}, c.a.createElement(k.a, {
						className: Object(b.a)(T.a.loadingIcon, T.a.forUser),
						sizePx: M
					})) : r.map(e => c.a.createElement(I, {
						containsSubreddit: this.containsCurrentSubredditOrProfile(e),
						isSelected: m.indexOf(e.name) > -1 || !1,
						key: e.name,
						multireddit: e,
						onCheck: this.getOnCheckFn(e.name),
						recentRef: e.name === u ? this.setRecentRef : d.a
					}))), c.a.createElement("div", null, l ? c.a.createElement("div", {
						className: Object(b.a)(T.a.listItem, T.a.inputListItem)
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
						className: T.a.createErrorMsg
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
						className: Object(b.a)(T.a.createSubmitBtn, T.a.loading),
						sizePx: L
					}) : c.a.createElement(S.o, {
						className: T.a.createSubmitBtn,
						onClick: this.onCreateSubmit
					}, i.fbt._("create", null, {
						hk: "1RZAAQ"
					})))) : c.a.createElement(S.o, {
						className: T.a.listItem,
						onClick: this.onCreateClick
					}, i.fbt._("+ Create a custom feed", null, {
						hk: "6VkVz"
					})))), c.a.createElement(x.f, null, c.a.createElement(x.q, {
						disabled: !!n || !m.length || e,
						onClick: this.onSubmit
					}, n ? c.a.createElement(k.a, {
						className: T.a.loadingIcon,
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
				b = n.a.textarea("textarea", l.a),
				p = n.a.span("Invalid", l.a);
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
				}, e.state === f.Valid && s.a.createElement(o.a, null), e.state === f.Invalid && s.a.createElement(p, null, "!")))),
				g = e => {
					const {
						backgroundColorState: t,
						className: r,
						inputRef: i,
						isRequired: n,
						label: o,
						onKeyDown: c,
						state: m,
						...b
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: r,
						isRequired: n,
						label: o,
						state: m
					}, s.a.createElement(a.a, u({}, b, {
						className: Object(d.a)(l.a.input, l.a.control, {
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
					}, s.a.createElement(b, u({}, m, {
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
				return j
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
				b = i.a.h2("FormGroupTitle", d.a),
				p = i.a.div("FormElement", d.a),
				f = i.a.div("FormGroupDescription", d.a),
				h = i.a.div("FormItem", d.a),
				x = i.a.h3("FormElementTitle", d.a),
				g = i.a.div("FormElementDescription", d.a),
				O = i.a.div("FormElementError", d.a),
				j = i.a.div("FormElementSubGroup", d.a),
				y = i.a.li("FormListItem", d.a)
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, r) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, r) {
			"use strict";
			var i = r("./node_modules/react/index.js"),
				s = r.n(i),
				d = r("./src/lib/classNames/index.ts"),
				n = r("./src/reddit/icons/fonts/index.tsx"),
				a = r("./src/reddit/controls/Checkbox/index.m.less"),
				o = r.n(a);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(n.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(d.a)({
					[o.a.redditStyle]: e.redditStyle,
					[o.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
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
					subreddits: g
				} = Object(n.a)(b);
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MultiredditAddSubredditModal.8586d533c0d92330c010.js.map