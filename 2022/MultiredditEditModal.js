// https://www.redditstatic.com/desktop2x/MultiredditEditModal.8eed3695a7d1039ff58d.js
// Retrieved at 1/26/2022, 5:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MultiredditEditModal"], {
		"./src/reddit/actions/multireddit/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "morePostsFailed", (function() {
				return L
			})), i.d(t, "morePostsLoaded", (function() {
				return M
			})), i.d(t, "morePostsPending", (function() {
				return D
			})), i.d(t, "moreOfMyMultiRequested", (function() {
				return G
			})), i.d(t, "myMultiredditsPending", (function() {
				return W
			})), i.d(t, "myMultiredditsReceived", (function() {
				return U
			})), i.d(t, "myMultiredditsRequested", (function() {
				return A
			})), i.d(t, "createFailure", (function() {
				return H
			})), i.d(t, "createPending", (function() {
				return z
			})), i.d(t, "createSuccess", (function() {
				return Q
			})), i.d(t, "createRequested", (function() {
				return K
			})), i.d(t, "reloadCurrentMultiredditFeedRequested", (function() {
				return J
			})), i.d(t, "duplicateFailure", (function() {
				return B
			})), i.d(t, "duplicatePending", (function() {
				return $
			})), i.d(t, "duplicateSuccess", (function() {
				return V
			})), i.d(t, "duplicateRequested", (function() {
				return X
			})), i.d(t, "addSubredditPending", (function() {
				return Z
			})), i.d(t, "addSubredditSuccess", (function() {
				return Y
			})), i.d(t, "addSubredditFailure", (function() {
				return ee
			})), i.d(t, "addSubredditRequested", (function() {
				return te
			})), i.d(t, "removeSubredditPending", (function() {
				return ie
			})), i.d(t, "removeSubredditSuccess", (function() {
				return re
			})), i.d(t, "removeSubredditFailure", (function() {
				return se
			})), i.d(t, "removeSubredditRequested", (function() {
				return de
			})), i.d(t, "deleteFailure", (function() {
				return ne
			})), i.d(t, "deletePending", (function() {
				return ae
			})), i.d(t, "deleteSuccess", (function() {
				return oe
			})), i.d(t, "deleteRequested", (function() {
				return le
			})), i.d(t, "editFailure", (function() {
				return ce
			})), i.d(t, "editPending", (function() {
				return ue
			})), i.d(t, "editSuccess", (function() {
				return me
			})), i.d(t, "editRequested", (function() {
				return pe
			})), i.d(t, "subredditRecommendationsFailure", (function() {
				return be
			})), i.d(t, "subredditRecommendationsPending", (function() {
				return fe
			})), i.d(t, "subredditRecommendationsSuccess", (function() {
				return he
			})), i.d(t, "recommendationsRequested", (function() {
				return xe
			}));
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/pick.js"),
				d = i.n(s),
				n = i("./node_modules/react-router-redux/es/index.js"),
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
				g = i("./src/lib/makeGqlRequest/index.ts"),
				O = i("./src/redditGQL/operations/AllUserMultireddits.json"),
				j = i("./src/reddit/endpoints/page/multiredditListing.ts"),
				_ = i("./src/reddit/endpoints/subreddit/recommendations.ts"),
				v = i("./src/reddit/helpers/filterListingResponse/index.ts"),
				C = i("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				T = i("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				w = i("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				S = e => {
					let t = e.over_18 || !1;
					if (!t)
						for (const n of e.subreddits)
							if (n.data.over_18) {
								t = !0;
								break
							} let i = e.quarantine || !1;
					if (!i)
						for (const n of e.subreddits) {
							const e = (n.data.audience_target || "").split(",");
							if (n.data.quarantine || e.indexOf("unsafe") > -1) {
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
						s = r.filter(e => !e.displayName.startsWith(a.ic)).map(e => e.id),
						d = r.filter(e => e.displayName.startsWith(a.ic)).map(e => e.id);
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
						profileIds: d,
						subredditCount: e.subreddits.length,
						subredditIds: s,
						url: e.path.toLowerCase(),
						visibility: e.visibility
					}
				},
				k = i("./src/reddit/models/Multireddit/index.ts"),
				N = i("./src/reddit/models/Toast/index.ts"),
				F = i("./src/reddit/selectors/multireddit.ts"),
				E = i("./src/reddit/selectors/platform.ts"),
				P = i("./src/reddit/selectors/subreddit.ts"),
				q = i("./src/reddit/selectors/user.ts"),
				I = i("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				R = i("./src/reddit/actions/multireddit/constants.ts");
			const L = Object(l.a)(R.q),
				M = Object(l.a)(R.r),
				D = Object(l.a)(R.s),
				G = e => async (t, i, r) => {
					const {
						gqlContext: s
					} = r, {
						sort: d = a.W.HOT,
						multiredditName: n,
						username: o
					} = e, l = i(), u = l.platform.currentPage, m = u ? u.queryParams : {}, p = Object(F.d)(l, {
						multiredditName: n,
						username: o
					}), b = Object(c.a)(p.url, d, m), f = l.listings.postOrder.loadMore[b];
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
							sort: d.toUpperCase()
						},
						C = await Object(j.a)(s(), _),
						{
							data: w
						} = C.body,
						S = Object(T.a)(w);
					C.ok && w && w.multireddit ? t(M({
						fetchedToken: f.token,
						key: b,
						meta: l.meta,
						...S,
						...Object(v.a)(l, b, S),
						multiredditsModelsState: l.multireddits.models
					})) : t(L({
						error: {
							type: a.I.NOT_FOUND_ERROR
						},
						fetchedToken: f.token,
						key: b,
						...C.body,
						...Object(v.a)(l, b, S)
					}))
				}, W = Object(l.a)(R.t), U = Object(l.a)(R.u), A = (e, t = !1) => async (i, r, {
					apiContext: s,
					gqlContext: d
				}) => {
					const n = r();
					if (!Object(q.k)(n)) return;
					if (!e && Object(F.h)(n) || Object(F.i)(n)) return;
					i(W());
					const a = await ((e, t) => Object(g.a)(e, {
						...O,
						variables: t
					}))(d(), {
						includeSources: t
					});
					if (a.ok) {
						const e = a.body.data.identity.allMultireddits.edges.map(e => e.node),
							t = Object(C.b)(e);
						i(U({
							...t,
							multiredditsModelsState: n.multireddits.models
						}))
					}
				}, H = Object(l.a)(R.e), z = Object(l.a)(R.f), Q = Object(l.a)(R.g), K = ({
					description: e,
					displayName: t,
					shouldNavigate: i
				}) => async (s, d, {
					apiContext: o
				}) => {
					const l = d(),
						c = Object(q.k)(l);
					if (!c) return;
					s(z());
					const m = await ((e, t, i) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi`),
						data: {
							model: JSON.stringify({
								description_md: i,
								display_name: t,
								visibility: "private",
								subreddits: []
							})
						},
						method: a.jb.POST
					}))(o(), t, e);
					if (m.ok) {
						const {
							id: e
						} = c;
						if (await s(Q({
								multireddit: S(m.body.data),
								multiredditsModelsState: l.multireddits.models,
								userId: e
							})), i) {
							s(Object(u.f)());
							const e = m.body.data.path.toLowerCase();
							await s(Object(n.b)(e))
						}
						s(Object(p.f)({
							text: r.fbt._("Custom feed created!", null, {
								hk: "258cY9"
							})
						}))
					} else s(H(m.error))
				}, J = () => async (e, t, {
					apiContext: i
				}) => {
					const r = t(),
						s = Object(q.k)(r),
						n = Object(E.i)(r) ? Object(E.m)(r) : Object(E.b)(r),
						o = n && n.routeMatch && n.routeMatch.match;
					if (!o) return;
					const l = o.params,
						u = l.sort || a.W.HOT,
						{
							multiredditName: p,
							username: f
						} = l;
					if (!p) return;
					const h = Object(k.h)((f || s && s.displayText || "").toLowerCase(), p.toLowerCase()),
						{
							queryParams: x
						} = o,
						y = Object(c.a)(h, u, x),
						g = b.B in x && x[b.B].toUpperCase() || "",
						O = a.gc[g] || !1,
						j = Object(q.k)(r);
					(f || j && j.displayText) && await e(Object(m.multiredditFeedRequested)(y, (f || j.displayText).toLowerCase(), p.toLowerCase(), {
						...d()(x, b.m),
						...d()(x, b.l),
						sort: u,
						t: Object(I.a)(u, O)
					}))
				}, B = Object(l.a)(R.k), $ = Object(l.a)(R.l), V = Object(l.a)(R.m), X = ({
					description: e,
					displayName: t,
					fromName: i,
					fromUsername: s
				}) => async (d, o, {
					apiContext: l
				}) => {
					const c = o(),
						m = Object(q.k)(c);
					if (!m || !m.displayText) return;
					const b = Object(k.h)((s || m.displayText).toLowerCase(), i.toLowerCase());
					d($());
					const g = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi/copy`),
						data: {
							description_md: t.description,
							display_name: t.displayName,
							expand_srs: !0,
							from: t.from
						},
						method: a.jb.POST
					}))(l(), {
						from: b,
						displayName: t,
						description: e
					});
					if (g.ok) {
						const e = S(g.body.data);
						d(Object(u.f)()), d(V({
							multireddit: e,
							multiredditsModelsState: c.multireddits.models,
							userId: m.id
						})), d(Object(p.f)({
							text: r.fbt._("Custom feed duplicated!", null, {
								hk: "2u48X"
							}),
							buttonText: r.fbt._("Go there", null, {
								hk: "4sXZMm"
							}),
							buttonAction: Object(n.b)(e.url)
						}))
					} else d(B(g.error)), d(Object(p.f)({
						text: r.fbt._("Something went wrong duplicating {multiName}", [r.fbt._param("multiName", i)], {
							hk: "4bzN2D"
						})
					}))
				}, Z = Object(l.a)(R.b), Y = Object(l.a)(R.c), ee = Object(l.a)(R.a), te = ({
					communityInfo: e,
					identifier: t,
					multiredditNames: i
				}) => async (s, d, {
					apiContext: n
				}) => {
					const l = d(),
						c = Object(q.k)(l);
					if (!c || l.multireddits.api.addSubreddit.pending) return;
					s(Z({
						name: t.name
					}));
					const {
						displayText: m
					} = c;
					if (!m) return;
					const b = i.map(e => `/user/${m.toLowerCase()}/m/${e.toLowerCase()}`).join(","),
						g = `${"profile"===t.type?a.ic:""}${t.name}`,
						O = await ((e, t, i) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/multi/bulk_add/r/${t}`),
							data: {
								paths: i
							},
							method: a.jb.PUT
						}))(n(), g, b);
					if (O.ok) {
						const d = Object(P.I)(l, {
								identifier: t
							}) || e && e.id || "",
							n = i.map(e => Object(k.h)(m, e));
						s(Object(u.f)()), s(Object(p.f)({
							text: r.fbt._({
								"*": "Successfully added {communityName} to {number} custom feeds!",
								_1: "Successfully added {communityName} to 1 custom feed!"
							}, [r.fbt._param("communityName", `${"subreddit"===t.type?o.d.subreddit:o.d.profile}${t.name}`), r.fbt._plural(i.length, "number")], {
								hk: "9EXsM"
							})
						})), await s(Y({
							communityInfo: e,
							id: d,
							multipaths: n,
							type: t.type
						})), 1 === i.length && await s(J())
					} else {
						s(ee(O.error));
						let e = r.fbt._("Sorry, something went wrong adding {subredditName}.", [r.fbt._param("subredditName", t.name)], {
							hk: "ERdWO"
						});
						O.body && (O.body.reason === R.d.TooManySubreddits ? e = r.fbt._("Maximum communities reached", null, {
							hk: "2eguyW"
						}) : O.body.reason === R.d.InvalidSrQuarantine && (e = r.fbt._("{communityname} is invalid because it is quarantined", [r.fbt._param("communityname", `${"subreddit"===t.type?o.d.subreddit:o.d.profile}${t.name}`)], {
							hk: "407xmS"
						}))), s(Object(p.f)({
							text: e,
							kind: N.b.Error
						}))
					}
				}, ie = Object(l.a)(R.w), re = Object(l.a)(R.x), se = Object(l.a)(R.v), de = ({
					id: e,
					multiredditName: t,
					name: i,
					type: s
				}) => async (d, n, {
					apiContext: o
				}) => {
					const l = n(),
						c = Object(q.k)(l);
					if (!c || !c.displayText || l.multireddits.api.removeSubreddit.pending) return;
					d(ie({
						id: e
					}));
					const {
						displayText: m
					} = c, b = Object(k.h)(m, t), g = `${"profile"===s?a.ic:""}${i}`, O = await ((e, t, i) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${i}r/${t}`),
						method: a.jb.DELETE
					}))(o(), g, b);
					O.ok ? (d(Object(u.f)()), d(re({
						id: e,
						multipath: b,
						type: s
					})), d(Object(p.f)({
						text: r.fbt._("{subredditname} removed from your custom feed!", [r.fbt._param("subredditname", i)], {
							hk: "uaWNe"
						}),
						buttonText: r.fbt._("undo", null, {
							hk: "3HH7IT"
						}),
						buttonAction: te({
							identifier: {
								name: i,
								type: s
							},
							multiredditNames: [t]
						})
					})), d(J())) : (d(se(O.error)), d(Object(p.f)({
						text: r.fbt._("Sorry, something went wrong removing {subredditName}.", [r.fbt._param("subredditName", i)], {
							hk: "1E1rKm"
						})
					})))
				}, ne = Object(l.a)(R.h), ae = Object(l.a)(R.i), oe = Object(l.a)(R.j), le = e => async (t, i, {
					apiContext: s
				}) => {
					const d = i();
					if (!Object(q.k)(d)) return;
					t(ae());
					const o = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${t}`),
						method: a.jb.DELETE
					}))(s(), e);
					o.ok ? (await t(oe(e)), t(Object(u.f)()), await t(Object(n.b)("/")), t(Object(p.f)({
						text: r.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(ne(o.error))
				}, ce = Object(l.a)(R.n), ue = Object(l.a)(R.o), me = Object(l.a)(R.p), pe = ({
					description: e,
					displayText: t,
					multipath: i,
					visibility: s
				}) => async (d, n, {
					apiContext: o
				}) => {
					const l = n();
					if (!Object(q.J)(l)) return;
					d(ue());
					const c = await (({
						context: e,
						description: t,
						displayText: i,
						multipath: r,
						visibility: s
					}) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${r}`),
						data: {
							model: JSON.stringify({
								description_md: t,
								display_name: i,
								visibility: s
							}),
							expand_srs: !0
						},
						method: a.jb.PUT
					}))({
						context: o(),
						description: e,
						displayText: t,
						multipath: i,
						visibility: s
					});
					c.ok ? (await d(me(S(c.body.data))), d(Object(u.f)()), d(Object(p.f)({
						text: r.fbt._("Custom feed updated!", null, {
							hk: "39R30f"
						})
					}))) : (d(ce(c.error)), d(Object(p.f)({
						kind: N.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "1Y6lli"
						})
					})))
				}, be = Object(l.a)(R.z), fe = Object(l.a)(R.A), he = Object(l.a)(R.B), xe = ({
					multiredditName: e,
					username: t,
					toExcludeNames: i
				}) => async (r, s, {
					gqlContext: d
				}) => {
					const n = s(),
						a = Object(q.k)(n);
					if (!(t || a && a.displayText)) return;
					const o = Object(k.h)(t || a.displayText, e),
						l = n.multireddits.models[o];
					if (!l || !l.subredditIds) return;
					r(fe());
					const c = i && i.reduce((e, t) => {
							const i = Object(P.C)(n, t) || Object(P.D)(n, t);
							return i ? [...e, i] : e
						}, []),
						u = await Object(_.a)(d(), {
							count: R.y,
							subredditIds: l.subredditIds,
							toExclude: c
						});
					if (u.ok) {
						const {
							data: e
						} = u.body;
						r(he({
							multipath: o,
							subreddits: Object(w.b)(e)
						}))
					} else r(be(u.error))
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
				return R
			}));
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/pick.js"),
				d = i.n(s),
				n = i("./node_modules/react-router-redux/es/index.js"),
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
				g = i("./src/reddit/models/Multireddit/index.ts"),
				O = i("./src/reddit/models/Toast/index.ts"),
				j = i("./src/reddit/models/User/index.ts"),
				_ = i("./src/reddit/selectors/multireddit.ts"),
				v = i("./src/reddit/selectors/user.ts"),
				C = i("./src/lib/makeActionCreator/index.ts"),
				T = i("./src/lib/makeListingKey/index.ts"),
				w = i("./src/reddit/actions/ads/index.ts"),
				S = i("./src/reddit/helpers/canonicalUrls.ts"),
				k = i("./src/reddit/helpers/timeApiRoute/index.ts"),
				N = i("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				F = i("./src/reddit/actions/pages/multireddit/constants.ts");
			const E = Object(C.a)(F.c),
				P = Object(C.a)(F.b),
				q = Object(C.a)(F.a),
				I = (e, t, i, s, d) => async (n, a, u) => {
					const {
						gqlContext: p
					} = u, b = a();
					if (b.listings.postOrder.api.pending[e]) return;
					n(E({
						key: e
					})), s.layout = f.e[Object(h.R)(b, {})];
					const x = {
							path: Object(g.h)(t, i).replace(/\/$/, ""),
							includeIdentity: !0,
							includeSources: !0,
							sort: s.sort ? s.sort.toUpperCase() : void 0,
							range: s.t ? s.t.toUpperCase() : void 0
						},
						j = await Object(k.a)("multireddit", () => Object(l.a)(p(), x)),
						{
							data: _
						} = j.body,
						C = `error-${e}`;
					if (j.ok && _) {
						const r = Object(y.a)(_);
						if (!_.multireddit) return d && n(m.g(C)), void n(q({
							...r,
							error: {
								type: c.I.NOT_FOUND_ERROR
							},
							key: e
						}));
						n(P({
							key: e,
							meta: b.meta,
							...r,
							account: r.account || Object(v.k)(b),
							multiredditsModelsState: b.multireddits.models
						})), d && n(m.g(C)), n(Object(o.recommendationsRequested)({
							multiredditName: i,
							username: t
						})), window.addEventListener("load", () => {
							n(Object(w.b)(N.a.MULTIREDDIT))
						})
					} else d && n(m.f({
						id: C,
						kind: O.b.Error,
						text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: I(e, t, i, s, d)
					}))
				}, R = (e, t) => async (i, r) => {
					const {
						multiredditName: s
					} = e.params;
					let {
						username: o
					} = e.params;
					if (!o) {
						let t = r();
						if (t.user.session && t.user.session.unsafeLoggedOut) return void i(Object(n.c)("/"));
						!t.user.account && t.user.session && await i(p.t()), t = r();
						const {
							account: d
						} = t.user;
						if (!d) return void i(Object(n.c)("/"));
						let l = `/user/${o=Object(j.e)(d)}/m/${s}`;
						const {
							sort: c
						} = e.params;
						return l += c ? `/${c}` : "", void i(Object(n.c)(Object(a.a)(l, e.queryParams)))
					}
					const {
						sort: l = c.W.HOT
					} = e.params, m = {
						multiredditName: s,
						username: o
					}, f = r();
					o || (o = f.user.account ? Object(j.e)(f.user.account) : "");
					const h = Object(g.h)(o, s),
						y = Object(T.a)(h, l, e.queryParams),
						O = f.listings.postOrder.ids[y],
						v = f.listings.postOrder.api.error[y],
						C = f.listings.postOrder.api.pending[y],
						k = b.B in e.queryParams && e.queryParams[b.B].toUpperCase() || "",
						F = k in c.gc && c.gc[k];
					if (C || O && !v && !t) return void(O && (i(u.m({
						title: Object(_.f)(r(), m)
					})), f.sidebarPromotedPosts.firstFetch || i(Object(w.b)(N.a.MULTIREDDIT))));
					await i(I(y, o, s, {
						...d()(e.queryParams, b.m),
						...d()(e.queryParams, b.l),
						sort: l,
						t: Object(x.a)(l, F)
					}, !0));
					const E = r();
					Object(_.d)(E, m) && i(u.m({
						title: Object(_.f)(r(), m)
					})), Object(S.c)(E, i, e)
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
				d = i("./src/lib/classNames/index.ts"),
				n = i("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				a = i("./src/reddit/components/CharacterCountdown/index.m.less"),
				o = i.n(a);
			const {
				fbt: l
			} = i("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(n.b, {
				className: Object(d.a)(e.className, o.a.container, e.text.length >= e.maxChars ? o.a.mOverflow : null)
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
				d = i.n(s),
				n = i("./node_modules/react-redux/es/index.js"),
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
				g = i("./src/reddit/controls/Dropdown/index.tsx"),
				O = i("./src/reddit/controls/Dropdown/Row.tsx"),
				j = i("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = i("./src/reddit/controls/ToggleSwitch/index.tsx"),
				v = i("./src/reddit/helpers/multireddit/index.ts"),
				C = i("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				T = i("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				w = i("./src/reddit/models/Multireddit/index.ts"),
				S = i("./src/reddit/selectors/multireddit.ts"),
				k = i("./src/reddit/selectors/tooltip.ts"),
				N = i("./src/reddit/components/MultiredditEditModal/index.m.less"),
				F = i.n(N);
			const E = Object(l.a)(g.a),
				P = () => r.fbt._("public", null, {
					hk: "2SLZ4Q"
				}),
				q = () => r.fbt._("private", null, {
					hk: "3E0m6i"
				}),
				I = 12,
				R = "multi-edit-modal-visibility",
				L = Object(a.c)({
					apiFetched: e => e.multireddits.api.edit.fetched,
					apiPending: e => e.multireddits.api.edit.pending,
					isDropdownOpen: Object(k.b)(R),
					multireddit: x.e,
					myMultireddits: S.j
				}),
				M = Object(x.u)(),
				D = Object(n.b)(L, e => ({
					edit: t => e(Object(m.editRequested)(t)),
					onClose: () => e(Object(u.f)()),
					onToggleDropdown: () => e(Object(p.h)({
						tooltipId: R
					}))
				}), (e, t, i) => ({
					...e,
					...t,
					...i,
					onSubmit: ({
						visibility: i,
						description: r,
						displayText: s
					}) => {
						e.multireddit && (e.multireddit.description !== r || e.multireddit.displayText !== s || e.multireddit.visibility !== i ? t.edit({
							description: r,
							displayText: s,
							multipath: e.multireddit.url,
							visibility: i
						}) : t.onClose())
					}
				}));
			class G extends d.a.Component {
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
						this.setState(e => e.visibility === w.e.Private ? e : {
							...e,
							visibility: e.visibility === w.e.Public ? w.e.Hidden : w.e.Public
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
						visibility: w.e.Private
					}
				}
				renderDisplayText() {
					const {
						displayText: e,
						displayTextError: t
					} = this.state;
					return d.a.createElement(f.h, null, d.a.createElement(h.b, {
						label: r.fbt._("custom feed name", null, {
							hk: "1pq8pZ"
						}),
						onBlur: this.checkDisplayTextValidity,
						onChange: this.onDisplayTextChange,
						value: e,
						maxLength: w.c,
						state: t ? h.d.Invalid : void 0,
						isRequired: !0
					}), t ? d.a.createElement("p", {
						className: F.a.displayTextError
					}, t === w.a.SameName ? r.fbt._("A custom feed with that name already exists", null, {
						hk: "1WJHG3"
					}) : t === w.a.TooShort ? r.fbt._("Name must contain at least two alphanumeric characters", null, {
						hk: "3TWc1H"
					}) : r.fbt._("Something went wrong with this name, maybe try something else?", null, {
						hk: "N6k8D"
					})) : d.a.createElement(b.a, {
						maxChars: w.c,
						text: e
					}))
				}
				renderDescription() {
					const {
						description: e
					} = this.state;
					return d.a.createElement(f.h, null, d.a.createElement(h.c, {
						className: F.a.descriptionTextarea,
						label: r.fbt._("description (optional)", null, {
							hk: "4mWEDA"
						}),
						maxLength: w.b,
						onChange: this.onDescriptionChange,
						value: e
					}), d.a.createElement(b.a, {
						maxChars: w.b,
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
					return d.a.createElement(f.h, {
						className: F.a.formRow
					}, d.a.createElement("div", {
						className: F.a.label
					}, d.a.createElement("h3", {
						className: F.a.labelTitle
					}, r.fbt._("Custom Feed Privacy", null, {
						hk: "iZuQR"
					})), d.a.createElement("div", {
						className: F.a.labelDescription
					}, r.fbt._("Public Custom Feeds are visible to anyone with the link. Private is only viewable by you, the owner.", null, {
						hk: "1RAkt7"
					}))), d.a.createElement("div", null, d.a.createElement(y.r, {
						className: F.a.dropdownBtn,
						id: R,
						onClick: t
					}, i === w.e.Private ? q() : P(), d.a.createElement(C.b, null)), d.a.createElement(E, {
						isOpen: e,
						isOverlay: !0,
						targetPosition: ["center", "bottom"],
						tooltipId: R,
						tooltipPosition: ["center", "top"]
					}, d.a.createElement(O.b, {
						displayText: q(),
						noIcon: !0,
						onClick: this.onRowClick(w.e.Private),
						isSelected: i === w.e.Private
					}), d.a.createElement(O.b, {
						displayText: P(),
						isSelected: i === w.e.Public || i === w.e.Hidden,
						noIcon: !0,
						onClick: this.onRowClick(w.e.Public)
					}))))
				}
				renderShowOnProfileToggle() {
					const {
						visibility: e
					} = this.state;
					return d.a.createElement(f.h, {
						className: Object(c.a)(F.a.formRow, {
							[F.a.disabled]: e === w.e.Private
						})
					}, d.a.createElement("div", {
						className: F.a.label
					}, d.a.createElement("h3", {
						className: F.a.labelTitle
					}, r.fbt._("Show on profile", null, {
						hk: "3W3DLV"
					})), d.a.createElement("div", {
						className: F.a.labelDescription
					}, r.fbt._("Choose whether this Custom Feed is visible to visitors of your profile", null, {
						hk: "1pxStK"
					}))), d.a.createElement(_.a, {
						className: F.a.toggle,
						disabled: e === w.e.Private,
						on: e === w.e.Public,
						onToggle: this.onShowOnProfileToggle
					}))
				}
				render() {
					const {
						apiPending: e,
						multireddit: t,
						onClose: i
					} = this.props;
					return t ? d.a.createElement(f.e, null, d.a.createElement(f.i, null, d.a.createElement(T.a, null, d.a.createElement(f.q, null, r.fbt._("Edit Custom Feed", null, {
						hk: "3yOOdv"
					})), d.a.createElement("button", {
						onClick: i
					}, d.a.createElement(f.b, null)))), d.a.createElement(f.l, null, this.renderDisplayText(), this.renderDescription(), this.renderVisibilityDropdown(), this.renderShowOnProfileToggle()), d.a.createElement(f.g, {
						className: F.a.footer
					}, d.a.createElement(f.r, {
						onClick: this.onSubmit
					}, e ? d.a.createElement(j.a, {
						className: F.a.loadingIcon,
						sizePx: I
					}) : r.fbt._("done", null, {
						hk: "1uttTA"
					})))) : d.a.createElement("div", {
						className: F.a.error
					}, d.a.createElement("p", {
						className: F.a.errorText
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
				return g
			}));
			var r = i("./node_modules/react/index.js"),
				s = i.n(r),
				d = i("./src/lib/classNames/index.ts"),
				n = i("./src/lib/lessComponent.tsx"),
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
			const m = n.a.div("icon", c.a),
				p = n.a.textarea("textarea", c.a),
				b = n.a.span("Invalid", c.a);
			var f, h;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(f || (f = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(h || (h = {}));
			const x = e => s.a.createElement("div", {
					className: Object(d.a)(e.isRequired && c.a.required, e.className, {
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[c.a.mValid]: e.state === f.Valid,
							[c.a.mInvalid]: e.state === f.Invalid,
							[c.a.mWhiteField]: e.backgroundColorState === h.WhiteFields
						}
					})
				}, s.a.createElement("label", {
					className: Object(d.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && s.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && s.a.createElement(m, {
					className: Object(d.a)({
						[c.a.mValid]: e.state === f.Valid,
						[c.a.mInvalid]: e.state === f.Invalid
					})
				}, e.state === f.Valid && s.a.createElement(o.a, null), e.state === f.Invalid && s.a.createElement(b, null, "!")))),
				y = e => {
					const {
						backgroundColorState: t,
						className: i,
						inputRef: r,
						isRequired: n,
						label: o,
						onKeyDown: l,
						state: m,
						...p
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: i,
						isRequired: n,
						label: o,
						state: m
					}, s.a.createElement(a.a, u({}, p, {
						className: Object(d.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: r,
						onKeyDown: l
					})))
				},
				g = e => {
					const {
						backgroundColorState: t,
						className: i,
						inputRef: r,
						isRequired: n,
						label: a,
						onKeyDown: o,
						state: l,
						...m
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: i,
						isRequired: n,
						label: a,
						state: l,
						isTextarea: !0
					}, s.a.createElement(p, u({}, m, {
						className: Object(d.a)({
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
				return n
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
				return g
			})), i.d(t, "d", (function() {
				return O
			})), i.d(t, "j", (function() {
				return j
			}));
			var r = i("./src/lib/lessComponent.tsx"),
				s = i("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				d = i.n(s);
			const n = r.a.section("FormPage", d.a),
				a = r.a.h1("HomePageTitle", d.a),
				o = r.a.button("HomePageBreadcrumb", d.a),
				l = r.a.div("HomePageGroup", d.a),
				c = r.a.h1("FormPageTitle", d.a),
				u = r.a.div("FormPageSection", d.a),
				m = r.a.div("FormGroup", d.a),
				p = r.a.h2("FormGroupTitle", d.a),
				b = r.a.div("FormElement", d.a),
				f = r.a.div("FormGroupDescription", d.a),
				h = r.a.div("FormItem", d.a),
				x = r.a.h3("FormElementTitle", d.a),
				y = r.a.div("FormElementDescription", d.a),
				g = r.a.div("FormElementError", d.a),
				O = r.a.div("FormElementSubGroup", d.a),
				j = r.a.li("FormListItem", d.a)
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./src/lib/lessComponent.tsx"),
				s = i("./src/reddit/controls/Input/index.m.less"),
				d = i.n(s);
			t.a = r.a.input("input", d.a)
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
				d = i("./src/lib/classNames/index.ts"),
				n = i("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = i.n(n);
			t.a = ({
				center: e,
				className: t,
				sizePx: i = 10
			}) => s.a.createElement("div", {
				className: Object(d.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${i}px`
				},
				"data-testid": "LoadingIcon"
			})
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
				d = i("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				n = i("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
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
							post: n,
							crosspost: l
						} = i && Object(o.a)(i);
						t.posts[n.id] = n, l && (t.posts[l.id] = l), Object(m.j)(i) || Object(m.i)(i) || (i.authorFlair && (t.postFlair[n.belongsTo.id] || (t.postFlair[n.belongsTo.id] = {}), t.postFlair[n.belongsTo.id][n.author] = Object(d.a)(i.authorFlair)[0]), Object(m.n)(i) && (t.subreddits[i.subreddit.id] || (t.subreddits[i.subreddit.id] = Object(c.a)(i.subreddit)), t.postFlair[i.subreddit.id] || (t.postFlair[i.subreddit.id] = Object(a.a)(i.subreddit))))
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
			const s = ({
				displayText: e,
				myMultireddits: t,
				thisMultireddit: i
			}) => e.replace(/[^0-9A-Za-z]+/gi, "").length < r.d ? r.a.TooShort : t.filter(({
				url: e
			}) => !i || e !== i.url).map(({
				displayText: e
			}) => e.toLowerCase()).indexOf(e.trim().toLowerCase()) > -1 ? r.a.SameName : void 0
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, i) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return l
			}));
			var r = i("./node_modules/react/index.js"),
				s = i.n(r),
				d = i("./src/lib/classNames/index.ts"),
				n = i("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = i.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
				className: e,
				isSubreddit: t,
				...i
			}) => s.a.createElement("svg", o({
				className: Object(d.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = l
		},
		"./src/redditGQL/operations/AllUserMultireddits.json": function(e) {
			e.exports = JSON.parse('{"id":"d5a173c1e5e2"}')
		},
		"./src/redditGQL/operations/MultiredditListing.json": function(e) {
			e.exports = JSON.parse('{"id":"adaefcf04472"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MultiredditEditModal.8eed3695a7d1039ff58d.js.map