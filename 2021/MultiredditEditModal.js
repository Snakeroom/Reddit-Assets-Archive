// https://www.redditstatic.com/desktop2x/MultiredditEditModal.081d0064b14664c7cd36.js
// Retrieved at 8/12/2021, 6:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MultiredditEditModal"], {
		"./src/reddit/actions/multireddit/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "morePostsFailed", (function() {
				return R
			})), i.d(t, "morePostsLoaded", (function() {
				return q
			})), i.d(t, "morePostsPending", (function() {
				return D
			})), i.d(t, "moreOfMyMultiRequested", (function() {
				return G
			})), i.d(t, "myMultiredditsPending", (function() {
				return U
			})), i.d(t, "myMultiredditsReceived", (function() {
				return W
			})), i.d(t, "myMultiredditsRequested", (function() {
				return A
			})), i.d(t, "createFailure", (function() {
				return K
			})), i.d(t, "createPending", (function() {
				return z
			})), i.d(t, "createSuccess", (function() {
				return H
			})), i.d(t, "createRequested", (function() {
				return Q
			})), i.d(t, "reloadCurrentMultiredditFeedRequested", (function() {
				return J
			})), i.d(t, "duplicateFailure", (function() {
				return B
			})), i.d(t, "duplicatePending", (function() {
				return $
			})), i.d(t, "duplicateSuccess", (function() {
				return X
			})), i.d(t, "duplicateRequested", (function() {
				return V
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
				return ne
			})), i.d(t, "deleteFailure", (function() {
				return de
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
				j = i("./src/reddit/endpoints/page/multiredditListing.ts"),
				_ = i("./src/redditGQL/operations/SubredditRecommendations.json"),
				v = i("./src/reddit/helpers/filterListingResponse/index.ts"),
				w = i("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				C = i("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				k = i("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				N = e => {
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
						s = r.filter(e => !e.displayName.startsWith(a.ec)).map(e => e.id),
						n = r.filter(e => e.displayName.startsWith(a.ec)).map(e => e.id);
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
				S = i("./src/reddit/models/Multireddit/index.ts"),
				T = i("./src/reddit/models/Toast/index.ts"),
				E = i("./src/reddit/selectors/multireddit.ts"),
				F = i("./src/reddit/selectors/platform.ts"),
				P = i("./src/reddit/selectors/subreddit.ts"),
				I = i("./src/reddit/selectors/user.ts"),
				L = i("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				M = i("./src/reddit/actions/multireddit/constants.ts");
			const R = Object(l.a)(M.q),
				q = Object(l.a)(M.r),
				D = Object(l.a)(M.s),
				G = e => async (t, i, r) => {
					const {
						gqlContext: s
					} = r, {
						sort: n = a.U.HOT,
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
					t(D({
						key: b,
						fetchedToken: f.token
					}));
					const O = p.url.replace(/\/$/, ""),
						g = m.t ? m.t.toUpperCase() : void 0,
						_ = {
							after: f.token,
							includeIdentity: !1,
							includeSources: !1,
							path: O,
							range: g,
							sort: n.toUpperCase()
						},
						w = await Object(j.a)(s(), _),
						{
							data: k
						} = w.body,
						N = Object(C.a)(k);
					w.ok && k && k.multireddit ? t(q({
						fetchedToken: f.token,
						key: b,
						meta: l.meta,
						...N,
						...Object(v.a)(l, b, N),
						multiredditsModelsState: l.multireddits.models
					})) : t(R({
						error: {
							type: a.G.NOT_FOUND_ERROR
						},
						fetchedToken: f.token,
						key: b,
						...w.body,
						...Object(v.a)(l, b, N)
					}))
				}, U = Object(l.a)(M.t), W = Object(l.a)(M.u), A = (e, t = !1) => async (i, r, {
					apiContext: s,
					gqlContext: n
				}) => {
					const d = r();
					if (!Object(I.j)(d)) return;
					if (!e && Object(E.h)(d) || Object(E.i)(d)) return;
					i(U());
					const a = await ((e, t) => Object(O.a)(e, {
						...g,
						variables: t
					}))(n(), {
						includeSources: t
					});
					if (a.ok) {
						const e = a.body.data.identity.allMultireddits.edges.map(e => e.node),
							t = Object(w.b)(e);
						i(W({
							...t,
							multiredditsModelsState: d.multireddits.models
						}))
					}
				}, K = Object(l.a)(M.e), z = Object(l.a)(M.f), H = Object(l.a)(M.g), Q = ({
					description: e,
					displayName: t,
					shouldNavigate: i
				}) => async (s, n, {
					apiContext: o
				}) => {
					const l = n(),
						c = Object(I.j)(l);
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
						method: a.hb.POST
					}))(o(), t, e);
					if (m.ok) {
						const {
							id: e
						} = c;
						if (await s(H({
								multireddit: N(m.body.data),
								multiredditsModelsState: l.multireddits.models,
								userId: e
							})), i) {
							s(Object(u.f)());
							const e = m.body.data.path.toLowerCase();
							await s(Object(d.b)(e))
						}
						s(Object(p.f)({
							text: r.fbt._("Custom feed created!", null, {
								hk: "258cY9"
							})
						}))
					} else s(K(m.error))
				}, J = () => async (e, t, {
					apiContext: i
				}) => {
					const r = t(),
						s = Object(I.j)(r),
						d = Object(F.h)(r) ? Object(F.k)(r) : Object(F.b)(r),
						o = d && d.routeMatch && d.routeMatch.match;
					if (!o) return;
					const l = o.params,
						u = l.sort || a.U.HOT,
						{
							multiredditName: p,
							username: f
						} = l;
					if (!p) return;
					const h = Object(S.h)((f || s && s.displayText || "").toLowerCase(), p.toLowerCase()),
						{
							queryParams: x
						} = o,
						y = Object(c.a)(h, u, x),
						O = b.x in x && x[b.x].toUpperCase() || "",
						g = a.cc[O] || !1,
						j = Object(I.j)(r);
					(f || j && j.displayText) && await e(Object(m.multiredditFeedRequested)(y, (f || j.displayText).toLowerCase(), p.toLowerCase(), {
						...n()(x, b.l),
						...n()(x, b.k),
						sort: u,
						t: Object(L.a)(u, g)
					}))
				}, B = Object(l.a)(M.k), $ = Object(l.a)(M.l), X = Object(l.a)(M.m), V = ({
					description: e,
					displayName: t,
					fromName: i,
					fromUsername: s
				}) => async (n, o, {
					apiContext: l
				}) => {
					const c = o(),
						m = Object(I.j)(c);
					if (!m || !m.displayText) return;
					const b = Object(S.h)((s || m.displayText).toLowerCase(), i.toLowerCase());
					n($());
					const O = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi/copy`),
						data: {
							description_md: t.description,
							display_name: t.displayName,
							expand_srs: !0,
							from: t.from
						},
						method: a.hb.POST
					}))(l(), {
						from: b,
						displayName: t,
						description: e
					});
					if (O.ok) {
						const e = N(O.body.data);
						n(Object(u.f)()), n(X({
							multireddit: e,
							multiredditsModelsState: c.multireddits.models,
							userId: m.id
						})), n(Object(p.f)({
							text: r.fbt._("Custom feed duplicated!", null, {
								hk: "2u48X"
							}),
							buttonText: r.fbt._("Go there", null, {
								hk: "4sXZMm"
							}),
							buttonAction: Object(d.b)(e.url)
						}))
					} else n(B(O.error)), n(Object(p.f)({
						text: r.fbt._("Something went wrong duplicating {multiName}", [r.fbt._param("multiName", i)], {
							hk: "4bzN2D"
						})
					}))
				}, Z = Object(l.a)(M.b), Y = Object(l.a)(M.c), ee = Object(l.a)(M.a), te = ({
					communityInfo: e,
					identifier: t,
					multiredditNames: i
				}) => async (s, n, {
					apiContext: d
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
					const b = i.map(e => `/user/${m.toLowerCase()}/m/${e.toLowerCase()}`).join(","),
						O = `${"profile"===t.type?a.ec:""}${t.name}`,
						g = await ((e, t, i) => Object(f.a)(Object(h.a)(e, [x.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/multi/bulk_add/r/${t}`),
							data: {
								paths: i
							},
							method: a.hb.PUT
						}))(d(), O, b);
					if (g.ok) {
						const n = Object(P.K)(l, {
								identifier: t
							}) || e && e.id || "",
							d = i.map(e => Object(S.h)(m, e));
						s(Object(u.f)()), s(Object(p.f)({
							text: r.fbt._({
								"*": "Successfully added {communityName} to {number} custom feeds!",
								_1: "Successfully added {communityName} to 1 custom feed!"
							}, [r.fbt._param("communityName", `${"subreddit"===t.type?o.d.subreddit:o.d.profile}${t.name}`), r.fbt._plural(i.length, "number")], {
								hk: "9EXsM"
							})
						})), await s(Y({
							communityInfo: e,
							id: n,
							multipaths: d,
							type: t.type
						})), 1 === i.length && await s(J())
					} else {
						s(ee(g.error));
						let e = r.fbt._("Sorry, something went wrong adding {subredditName}.", [r.fbt._param("subredditName", t.name)], {
							hk: "ERdWO"
						});
						g.body && (g.body.reason === M.d.TooManySubreddits ? e = r.fbt._("Maximum communities reached", null, {
							hk: "2eguyW"
						}) : g.body.reason === M.d.InvalidSrQuarantine && (e = r.fbt._("{communityname} is invalid because it is quarantined", [r.fbt._param("communityname", `${"subreddit"===t.type?o.d.subreddit:o.d.profile}${t.name}`)], {
							hk: "407xmS"
						}))), s(Object(p.f)({
							text: e,
							kind: T.b.Error
						}))
					}
				}, ie = Object(l.a)(M.w), re = Object(l.a)(M.x), se = Object(l.a)(M.v), ne = ({
					id: e,
					multiredditName: t,
					name: i,
					type: s
				}) => async (n, d, {
					apiContext: o
				}) => {
					const l = d(),
						c = Object(I.j)(l);
					if (!c || !c.displayText || l.multireddits.api.removeSubreddit.pending) return;
					n(ie({
						id: e
					}));
					const {
						displayText: m
					} = c, b = Object(S.h)(m, t), O = `${"profile"===s?a.ec:""}${i}`, g = await ((e, t, i) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${i}r/${t}`),
						method: a.hb.DELETE
					}))(o(), O, b);
					g.ok ? (n(Object(u.f)()), n(re({
						id: e,
						multipath: b,
						type: s
					})), n(Object(p.f)({
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
					})), n(J())) : (n(se(g.error)), n(Object(p.f)({
						text: r.fbt._("Sorry, something went wrong removing {subredditName}.", [r.fbt._param("subredditName", i)], {
							hk: "1E1rKm"
						})
					})))
				}, de = Object(l.a)(M.h), ae = Object(l.a)(M.i), oe = Object(l.a)(M.j), le = e => async (t, i, {
					apiContext: s
				}) => {
					const n = i();
					if (!Object(I.j)(n)) return;
					t(ae());
					const o = await ((e, t) => Object(f.a)(Object(h.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${t}`),
						method: a.hb.DELETE
					}))(s(), e);
					o.ok ? (await t(oe(e)), t(Object(u.f)()), await t(Object(d.b)("/")), t(Object(p.f)({
						text: r.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(de(o.error))
				}, ce = Object(l.a)(M.n), ue = Object(l.a)(M.o), me = Object(l.a)(M.p), pe = ({
					description: e,
					displayText: t,
					multipath: i,
					visibility: s
				}) => async (n, d, {
					apiContext: o
				}) => {
					const l = d();
					if (!Object(I.J)(l)) return;
					n(ue());
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
						method: a.hb.PUT
					}))({
						context: o(),
						description: e,
						displayText: t,
						multipath: i,
						visibility: s
					});
					c.ok ? (await n(me(N(c.body.data))), n(Object(u.f)()), n(Object(p.f)({
						text: r.fbt._("Custom feed updated!", null, {
							hk: "39R30f"
						})
					}))) : (n(ce(c.error)), n(Object(p.f)({
						kind: T.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "1Y6lli"
						})
					})))
				}, be = Object(l.a)(M.z), fe = Object(l.a)(M.A), he = Object(l.a)(M.B), xe = ({
					multiredditName: e,
					username: t,
					toExcludeNames: i
				}) => async (r, s, {
					gqlContext: n
				}) => {
					const d = s(),
						a = Object(I.j)(d);
					if (!(t || a && a.displayText)) return;
					const o = Object(S.h)(t || a.displayText, e),
						l = d.multireddits.models[o];
					if (!l || !l.subredditIds) return;
					r(fe());
					const c = i && i.reduce((e, t) => {
							const i = Object(P.E)(d, t) || Object(P.F)(d, t);
							return i ? [...e, i] : e
						}, []),
						u = await ((e, t) => Object(O.a)(e, {
							..._,
							variables: t
						}))(n(), {
							count: M.y,
							subredditIds: l.subredditIds,
							toExclude: c
						});
					if (u.ok) {
						const {
							data: e
						} = u.body;
						r(he({
							multipath: o,
							subreddits: Object(k.b)(e)
						}))
					} else r(be(u.error))
				}
		},
		"./src/reddit/actions/pages/multireddit/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "multiredditFeedPending", (function() {
				return F
			})), i.d(t, "multiredditFeedLoaded", (function() {
				return P
			})), i.d(t, "multiredditFeedFailed", (function() {
				return I
			})), i.d(t, "multiredditFeedRequested", (function() {
				return L
			})), i.d(t, "multiredditRequested", (function() {
				return M
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
				w = i("./src/lib/makeActionCreator/index.ts"),
				C = i("./src/lib/makeListingKey/index.ts"),
				k = i("./src/reddit/actions/ads/index.ts"),
				N = i("./src/reddit/helpers/canonicalUrls.ts"),
				S = i("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = i("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				E = i("./src/reddit/actions/pages/multireddit/constants.ts");
			const F = Object(w.a)(E.c),
				P = Object(w.a)(E.b),
				I = Object(w.a)(E.a),
				L = (e, t, i, s, n) => async (d, a, u) => {
					const {
						gqlContext: p
					} = u, b = a();
					if (b.listings.postOrder.api.pending[e]) return;
					d(F({
						key: e
					})), s.layout = f.e[Object(h.P)(b, {})];
					const x = {
							path: Object(O.h)(t, i).replace(/\/$/, ""),
							includeIdentity: !0,
							includeSources: !0,
							sort: s.sort ? s.sort.toUpperCase() : void 0,
							range: s.t ? s.t.toUpperCase() : void 0
						},
						j = await Object(S.a)("multireddit", () => Object(l.a)(p(), x)),
						{
							data: _
						} = j.body,
						w = `error-${e}`;
					if (j.ok && _) {
						const r = Object(y.a)(_);
						if (!_.multireddit) return n && d(m.g(w)), void d(I({
							...r,
							error: {
								type: c.G.NOT_FOUND_ERROR
							},
							key: e
						}));
						d(P({
							key: e,
							meta: b.meta,
							...r,
							account: r.account || Object(v.j)(b),
							multiredditsModelsState: b.multireddits.models
						})), n && d(m.g(w)), d(Object(o.recommendationsRequested)({
							multiredditName: i,
							username: t
						})), window.addEventListener("load", () => {
							d(Object(k.b)(T.a.MULTIREDDIT))
						})
					} else n && d(m.f({
						id: w,
						kind: g.b.Error,
						text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: L(e, t, i, s, n)
					}))
				}, M = (e, t) => async (i, r) => {
					const {
						multiredditName: s
					} = e.params;
					let {
						username: o
					} = e.params;
					if (!o) {
						let t = r();
						if (t.user.session && t.user.session.unsafeLoggedOut) return void i(Object(d.c)("/"));
						!t.user.account && t.user.session && await i(p.r()), t = r();
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
						sort: l = c.U.HOT
					} = e.params, m = {
						multiredditName: s,
						username: o
					}, f = r();
					o || (o = f.user.account ? Object(j.e)(f.user.account) : "");
					const h = Object(O.h)(o, s),
						y = Object(C.a)(h, l, e.queryParams),
						g = f.listings.postOrder.ids[y],
						v = f.listings.postOrder.api.error[y],
						w = f.listings.postOrder.api.pending[y],
						S = b.x in e.queryParams && e.queryParams[b.x].toUpperCase() || "",
						E = S in c.cc && c.cc[S];
					if (w || g && !v && !t) return void(g && (i(u.l({
						title: Object(_.f)(r(), m)
					})), f.sidebarPromotedPosts.firstFetch || i(Object(k.b)(T.a.MULTIREDDIT))));
					await i(L(y, o, s, {
						...n()(e.queryParams, b.l),
						...n()(e.queryParams, b.k),
						sort: l,
						t: Object(x.a)(l, E)
					}, !0));
					const F = r();
					Object(_.d)(F, m) && i(u.l({
						title: Object(_.f)(r(), m)
					})), Object(N.c)(F, i, e)
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
				w = i("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				C = i("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				k = i("./src/reddit/models/Multireddit/index.ts"),
				N = i("./src/reddit/selectors/multireddit.ts"),
				S = i("./src/reddit/selectors/tooltip.ts"),
				T = i("./src/reddit/components/MultiredditEditModal/index.m.less"),
				E = i.n(T);
			const F = Object(l.a)(O.a),
				P = () => r.fbt._("public", null, {
					hk: "2SLZ4Q"
				}),
				I = () => r.fbt._("private", null, {
					hk: "3E0m6i"
				}),
				L = 12,
				M = "multi-edit-modal-visibility",
				R = Object(a.c)({
					apiFetched: e => e.multireddits.api.edit.fetched,
					apiPending: e => e.multireddits.api.edit.pending,
					isDropdownOpen: Object(S.b)(M),
					multireddit: x.d,
					myMultireddits: N.j
				}),
				q = Object(x.t)(),
				D = Object(d.b)(R, e => ({
					edit: t => e(Object(m.editRequested)(t)),
					onClose: () => e(Object(u.f)()),
					onToggleDropdown: () => e(Object(p.h)({
						tooltipId: M
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
						visibility: k.e.Private
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
						maxLength: k.c,
						state: t ? h.d.Invalid : void 0,
						isRequired: !0
					}), t ? n.a.createElement("p", {
						className: E.a.displayTextError
					}, t === k.a.SameName ? r.fbt._("A custom feed with that name already exists", null, {
						hk: "1WJHG3"
					}) : t === k.a.TooShort ? r.fbt._("Name must contain at least two alphanumeric characters", null, {
						hk: "3TWc1H"
					}) : r.fbt._("Something went wrong with this name, maybe try something else?", null, {
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
					return n.a.createElement(f.h, null, n.a.createElement(h.c, {
						className: E.a.descriptionTextarea,
						label: r.fbt._("description (optional)", null, {
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
							visibility: i
						}
					} = this;
					return n.a.createElement(f.h, {
						className: E.a.formRow
					}, n.a.createElement("div", {
						className: E.a.label
					}, n.a.createElement("h3", {
						className: E.a.labelTitle
					}, r.fbt._("Custom Feed Privacy", null, {
						hk: "iZuQR"
					})), n.a.createElement("div", {
						className: E.a.labelDescription
					}, r.fbt._("Public Custom Feeds are visible to anyone with the link. Private is only viewable by you, the owner.", null, {
						hk: "1RAkt7"
					}))), n.a.createElement("div", null, n.a.createElement(y.o, {
						className: E.a.dropdownBtn,
						id: M,
						onClick: t
					}, i === k.e.Private ? I() : P(), n.a.createElement(w.b, null)), n.a.createElement(F, {
						isOpen: e,
						isOverlay: !0,
						targetPosition: ["center", "bottom"],
						tooltipId: M,
						tooltipPosition: ["center", "top"]
					}, n.a.createElement(g.b, {
						displayText: I(),
						noIcon: !0,
						onClick: this.onRowClick(k.e.Private),
						isSelected: i === k.e.Private
					}), n.a.createElement(g.b, {
						displayText: P(),
						isSelected: i === k.e.Public || i === k.e.Hidden,
						noIcon: !0,
						onClick: this.onRowClick(k.e.Public)
					}))))
				}
				renderShowOnProfileToggle() {
					const {
						visibility: e
					} = this.state;
					return n.a.createElement(f.h, {
						className: Object(c.a)(E.a.formRow, {
							[E.a.disabled]: e === k.e.Private
						})
					}, n.a.createElement("div", {
						className: E.a.label
					}, n.a.createElement("h3", {
						className: E.a.labelTitle
					}, r.fbt._("Show on profile", null, {
						hk: "3W3DLV"
					})), n.a.createElement("div", {
						className: E.a.labelDescription
					}, r.fbt._("Choose whether this Custom Feed is visible to visitors of your profile", null, {
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
						onClose: i
					} = this.props;
					return t ? n.a.createElement(f.e, null, n.a.createElement(f.i, null, n.a.createElement(C.a, null, n.a.createElement(f.q, null, r.fbt._("Edit Custom Feed", null, {
						hk: "3yOOdv"
					})), n.a.createElement("button", {
						onClick: i
					}, n.a.createElement(f.b, null)))), n.a.createElement(f.l, null, this.renderDisplayText(), this.renderDescription(), this.renderVisibilityDropdown(), this.renderShowOnProfileToggle()), n.a.createElement(f.g, {
						className: E.a.footer
					}, n.a.createElement(f.r, {
						onClick: this.onSubmit
					}, e ? n.a.createElement(j.a, {
						className: E.a.loadingIcon,
						sizePx: L
					}) : r.fbt._("done", null, {
						hk: "1uttTA"
					})))) : n.a.createElement("div", {
						className: E.a.error
					}, n.a.createElement("p", {
						className: E.a.errorText
					}, r.fbt._("Sorry, something went wrong", null, {
						hk: "ZPvfZ"
					})))
				}
			}
			t.default = Object(o.a)(q(D(G)))
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return x
			}));
			var r = i("./node_modules/lodash/throttle.js"),
				s = i.n(r),
				n = i("./node_modules/react/index.js"),
				d = i.n(n),
				a = i("./src/lib/classNames/index.ts"),
				o = i("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = i("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = i("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = i("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = i("./src/reddit/controls/Dropdown/index.m.less"),
				p = i.n(m),
				b = i("./src/reddit/controls/Dropdown/row.m.less"),
				f = i.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
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
					}, i = Object(a.a)(f.a.iconWrapper, e.iconWrapperClassName);
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
						className: i
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
						className: i
					}, e.children)), e.displayText && d.a.createElement("span", {
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && d.a.createElement(c.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && d.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const i = Object(a.a)(f.a.row, e, {
					[f.a.mIsInteractive]: !t.noHover,
					[f.a.mIsSelected]: t.isSelected,
					[f.a.topics]: t.isTopicsStyle
				});
				return d.a.createElement(x, h({
					className: i
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, i) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
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
			t.a = ({
				center: e,
				className: t,
				sizePx: i = 10
			}) => s.a.createElement("div", {
				className: Object(n.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${i}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, i) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./src/lib/lessComponent.tsx"),
				s = i("./src/reddit/controls/InternalLink/index.tsx"),
				n = i("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				d = i.n(n);
			t.a = r.a.wrapped(s.a, "unstyledInternalLink", d.a)
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
						t.posts[d.id] = d, l && (t.posts[l.id] = l), Object(m.j)(i) || Object(m.i)(i) || (i.authorFlair && (t.postFlair[d.belongsTo.id] || (t.postFlair[d.belongsTo.id] = {}), t.postFlair[d.belongsTo.id][d.author] = Object(n.a)(i.authorFlair)[0]), Object(m.m)(i) && (t.subreddits[i.subreddit.id] || (t.subreddits[i.subreddit.id] = Object(c.a)(i.subreddit)), t.postFlair[i.subreddit.id] || (t.postFlair[i.subreddit.id] = Object(a.a)(i.subreddit))))
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
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				s = i.n(r),
				n = i("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(n.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				s = i.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
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
				n = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = i.n(d);

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
				className: Object(n.a)(a.a.dropdown, {
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
			e.exports = JSON.parse('{"id":"8f2551b0bce3"}')
		},
		"./src/redditGQL/operations/MultiredditListing.json": function(e) {
			e.exports = JSON.parse('{"id":"e98865f7df76"}')
		},
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"3c4d88474140"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MultiredditEditModal.081d0064b14664c7cd36.js.map