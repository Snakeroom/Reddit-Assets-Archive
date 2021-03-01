// https://www.redditstatic.com/desktop2x/Multireddit~reddit-components-AdHocMultiredditSidebar.b9982f2641e2a80c49f9.js
// Retrieved at 3/1/2021, 12:20:19 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit~reddit-components-AdHocMultiredditSidebar"], {
		"./node_modules/lodash/take.js": function(e, t, s) {
			var i = s("./node_modules/lodash/_baseSlice.js"),
				r = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : r(t), i(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/graphql/operations/AllUserMultireddits.json": function(e) {
			e.exports = JSON.parse('{"id":"8f2551b0bce3"}')
		},
		"./src/graphql/operations/MultiredditListing.json": function(e) {
			e.exports = JSON.parse('{"id":"c208a6c82209"}')
		},
		"./src/graphql/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"3c4d88474140"}')
		},
		"./src/graphql/operations/SubredditTypeaheadSearch.json": function(e) {
			e.exports = JSON.parse('{"id":"20edc5ee12df"}')
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const i = e => e;

			function r(e, t, s) {
				const [r, n] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: d = i
				} = t || {};
				let {
					start: o = 0,
					end: a = r
				} = t || {};
				if ((o = o < 0 ? 0 : o) >= (a = a > r ? r : a)) return;
				let c = n(o),
					l = d(c, o),
					u = o;
				for (let i = o + 1; i < a; i++) {
					const e = n(i),
						t = d(e, i);
					if (t !== l) {
						if (!1 === s(c, l, u, i)) return;
						l = t, u = i, c = e
					}
				}
				s(c, l, u, a)
			}
		},
		"./src/reddit/actions/multireddit/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "morePostsFailed", (function() {
				return R
			})), s.d(t, "morePostsLoaded", (function() {
				return q
			})), s.d(t, "morePostsPending", (function() {
				return L
			})), s.d(t, "moreOfMyMultiRequested", (function() {
				return U
			})), s.d(t, "myMultiredditsPending", (function() {
				return B
			})), s.d(t, "myMultiredditsReceived", (function() {
				return A
			})), s.d(t, "myMultiredditsRequested", (function() {
				return W
			})), s.d(t, "createFailure", (function() {
				return z
			})), s.d(t, "createPending", (function() {
				return G
			})), s.d(t, "createSuccess", (function() {
				return H
			})), s.d(t, "createRequested", (function() {
				return K
			})), s.d(t, "reloadCurrentMultiredditFeedRequested", (function() {
				return Q
			})), s.d(t, "duplicateFailure", (function() {
				return V
			})), s.d(t, "duplicatePending", (function() {
				return Z
			})), s.d(t, "duplicateSuccess", (function() {
				return Y
			})), s.d(t, "duplicateRequested", (function() {
				return X
			})), s.d(t, "addSubredditPending", (function() {
				return $
			})), s.d(t, "addSubredditSuccess", (function() {
				return J
			})), s.d(t, "addSubredditFailure", (function() {
				return ee
			})), s.d(t, "addSubredditRequested", (function() {
				return te
			})), s.d(t, "removeSubredditPending", (function() {
				return se
			})), s.d(t, "removeSubredditSuccess", (function() {
				return ie
			})), s.d(t, "removeSubredditFailure", (function() {
				return re
			})), s.d(t, "removeSubredditRequested", (function() {
				return ne
			})), s.d(t, "deleteFailure", (function() {
				return de
			})), s.d(t, "deletePending", (function() {
				return oe
			})), s.d(t, "deleteSuccess", (function() {
				return ae
			})), s.d(t, "deleteRequested", (function() {
				return ce
			})), s.d(t, "editFailure", (function() {
				return le
			})), s.d(t, "editPending", (function() {
				return ue
			})), s.d(t, "editSuccess", (function() {
				return me
			})), s.d(t, "editRequested", (function() {
				return pe
			})), s.d(t, "subredditRecommendationsFailure", (function() {
				return be
			})), s.d(t, "subredditRecommendationsPending", (function() {
				return he
			})), s.d(t, "subredditRecommendationsSuccess", (function() {
				return fe
			})), s.d(t, "recommendationsRequested", (function() {
				return xe
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/pick.js"),
				n = s.n(r),
				d = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/linkMatchers/customLinks.ts"),
				c = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/lib/makeListingKey/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/pages/multireddit/index.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/lib/makeApiRequest/index.ts"),
				f = s("./src/lib/omitHeaders/index.ts"),
				x = s("./src/reddit/constants/headers.ts"),
				y = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				O = s("./src/graphql/operations/AllUserMultireddits.json"),
				g = s("./src/lib/makeGqlRequest/index.ts"),
				S = s("./src/reddit/endpoints/page/multiredditListing.ts"),
				j = s("./src/graphql/operations/SubredditRecommendations.json"),
				E = s("./src/reddit/helpers/filterListingResponse/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				w = s("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				v = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = e => {
					let t = e.over_18 || !1;
					if (!t)
						for (const d of e.subreddits)
							if (d.data.over_18) {
								t = !0;
								break
							} let s = e.quarantine || !1;
					if (!s)
						for (const d of e.subreddits) {
							const e = (d.data.audience_target || "").split(",");
							if (d.data.quarantine || e.indexOf("unsafe") > -1) {
								s = !0;
								break
							}
						}
					const i = e.subreddits.map(e => {
							const t = e.data,
								{
									name: s,
									display_name: i
								} = t;
							return {
								id: s,
								displayName: i.toLowerCase()
							}
						}).sort((e, t) => e.displayName.localeCompare(t.displayName)),
						r = i.filter(e => !e.displayName.startsWith(o.Wb)).map(e => e.id),
						n = i.filter(e => e.displayName.startsWith(o.Wb)).map(e => e.id);
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
						isQuarantined: s,
						name: e.name,
						ownerId: e.owner_id,
						profileIds: n,
						subredditCount: e.subreddits.length,
						subredditIds: r,
						url: e.path.toLowerCase(),
						visibility: e.visibility
					}
				},
				k = s("./src/reddit/models/Multireddit/index.ts"),
				I = s("./src/reddit/models/Toast/index.ts"),
				M = s("./src/reddit/selectors/multireddit.ts"),
				P = s("./src/reddit/selectors/platform.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				F = s("./src/reddit/actions/multireddit/constants.ts");
			const R = Object(c.a)(F.q),
				q = Object(c.a)(F.r),
				L = Object(c.a)(F.s),
				U = e => async (t, s, i) => {
					const {
						gqlContext: r
					} = i, {
						sort: n = o.P.HOT,
						multiredditName: d,
						username: a
					} = e, c = s(), u = c.platform.currentPage, m = u ? u.queryParams : {}, p = Object(M.d)(c, {
						multiredditName: d,
						username: a
					}), b = Object(l.a)(p.url, n, m), h = c.listings.postOrder.loadMore[b];
					if (!h) return;
					const f = c.listings.postOrder.api.pending[b],
						x = c.listings.postOrder.fetchedTokens,
						y = x[b] && x[b][h.token] || !1;
					if (f || y) return;
					t(L({
						key: b,
						fetchedToken: h.token
					}));
					const O = p.url.replace(/\/$/, ""),
						g = m.t ? m.t.toUpperCase() : void 0,
						j = {
							after: h.token,
							includeIdentity: !1,
							includeSources: !1,
							path: O,
							range: g,
							sort: n.toUpperCase()
						},
						C = await Object(S.a)(r(), j),
						{
							data: v
						} = C.body,
						_ = Object(w.a)(v);
					C.ok && v && v.multireddit ? t(q({
						fetchedToken: h.token,
						key: b,
						meta: c.meta,
						..._,
						...Object(E.a)(c, b, _),
						multiredditsModelsState: c.multireddits.models
					})) : t(R({
						error: {
							type: o.E.NOT_FOUND_ERROR
						},
						fetchedToken: h.token,
						key: b,
						...C.body,
						...Object(E.a)(c, b, _)
					}))
				}, B = Object(c.a)(F.t), A = Object(c.a)(F.u), W = (e, t = !1) => async (s, i, {
					apiContext: r,
					gqlContext: n
				}) => {
					const d = i();
					if (!Object(D.i)(d)) return;
					if (!e && Object(M.h)(d) || Object(M.i)(d)) return;
					s(B());
					const o = await ((e, t) => Object(g.a)(e, {
						...O,
						variables: t
					}))(n(), {
						includeSources: t
					});
					if (o.ok) {
						const e = o.body.data.identity.allMultireddits.edges.map(e => e.node),
							t = Object(C.b)(e);
						s(A({
							...t,
							multiredditsModelsState: d.multireddits.models
						}))
					}
				}, z = Object(c.a)(F.e), G = Object(c.a)(F.f), H = Object(c.a)(F.g), K = ({
					description: e,
					displayName: t,
					shouldNavigate: s
				}) => async (r, n, {
					apiContext: a
				}) => {
					const c = n(),
						l = Object(D.i)(c);
					if (!l) return;
					r(G());
					const m = await ((e, t, s) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi`),
						data: {
							model: JSON.stringify({
								description_md: s,
								display_name: t,
								visibility: "private",
								subreddits: []
							})
						},
						method: o.cb.POST
					}))(a(), t, e);
					if (m.ok) {
						const {
							id: e
						} = l;
						if (await r(H({
								multireddit: _(m.body.data),
								multiredditsModelsState: c.multireddits.models,
								userId: e
							})), s) {
							r(Object(u.f)());
							const e = m.body.data.path.toLowerCase();
							await r(Object(d.b)(e))
						}
						r(Object(p.e)({
							text: i.fbt._("Custom feed created!", null, {
								hk: "258cY9"
							})
						}))
					} else r(z(m.error))
				}, Q = () => async (e, t, {
					apiContext: s
				}) => {
					const i = t(),
						r = Object(D.i)(i),
						d = Object(P.h)(i) ? Object(P.k)(i) : Object(P.b)(i),
						a = d && d.routeMatch && d.routeMatch.match;
					if (!a) return;
					const c = a.params,
						u = c.sort || o.P.HOT,
						{
							multiredditName: p,
							username: h
						} = c;
					if (!p) return;
					const f = Object(k.h)((h || r && r.displayText || "").toLowerCase(), p.toLowerCase()),
						{
							queryParams: x
						} = a,
						y = Object(l.a)(f, u, x),
						O = b.x in x && x[b.x].toUpperCase() || "",
						g = o.Ub[O] || !1,
						S = Object(D.i)(i);
					(h || S && S.displayText) && await e(Object(m.multiredditFeedRequested)(y, (h || S.displayText).toLowerCase(), p.toLowerCase(), {
						...n()(x, b.l),
						...n()(x, b.k),
						sort: u,
						t: Object(T.a)(u, g)
					}))
				}, V = Object(c.a)(F.k), Z = Object(c.a)(F.l), Y = Object(c.a)(F.m), X = ({
					description: e,
					displayName: t,
					fromName: s,
					fromUsername: r
				}) => async (n, a, {
					apiContext: c
				}) => {
					const l = a(),
						m = Object(D.i)(l);
					if (!m || !m.displayText) return;
					const b = Object(k.h)((r || m.displayText).toLowerCase(), s.toLowerCase());
					n(Z());
					const O = await ((e, t) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi/copy`),
						data: {
							description_md: t.description,
							display_name: t.displayName,
							expand_srs: !0,
							from: t.from
						},
						method: o.cb.POST
					}))(c(), {
						from: b,
						displayName: t,
						description: e
					});
					if (O.ok) {
						const e = _(O.body.data);
						n(Object(u.f)()), n(Y({
							multireddit: e,
							multiredditsModelsState: l.multireddits.models,
							userId: m.id
						})), n(Object(p.e)({
							text: i.fbt._("Custom feed duplicated!", null, {
								hk: "2u48X"
							}),
							buttonText: i.fbt._("Go there", null, {
								hk: "4sXZMm"
							}),
							buttonAction: Object(d.b)(e.url)
						}))
					} else n(V(O.error)), n(Object(p.e)({
						text: i.fbt._("Something went wrong duplicating {multiName}", [i.fbt._param("multiName", s)], {
							hk: "4bzN2D"
						})
					}))
				}, $ = Object(c.a)(F.b), J = Object(c.a)(F.c), ee = Object(c.a)(F.a), te = ({
					communityInfo: e,
					identifier: t,
					multiredditNames: s
				}) => async (r, n, {
					apiContext: d
				}) => {
					const c = n(),
						l = Object(D.i)(c);
					if (!l || c.multireddits.api.addSubreddit.pending) return;
					r($({
						name: t.name
					}));
					const {
						displayText: m
					} = l;
					if (!m) return;
					const b = s.map(e => `/user/${m.toLowerCase()}/m/${e.toLowerCase()}`).join(","),
						O = `${"profile"===t.type?o.Wb:""}${t.name}`,
						g = await ((e, t, s) => Object(h.a)(Object(f.a)(e, [x.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/multi/bulk_add/r/${t}`),
							data: {
								paths: s
							},
							method: o.cb.PUT
						}))(d(), O, b);
					if (g.ok) {
						const n = Object(N.K)(c, {
								identifier: t
							}) || e && e.id || "",
							d = s.map(e => Object(k.h)(m, e));
						r(Object(u.f)()), r(Object(p.e)({
							text: i.fbt._({
								"*": "Successfully added {communityName} to {number} custom feeds!",
								_1: "Successfully added {communityName} to 1 custom feed!"
							}, [i.fbt._param("communityName", `${"subreddit"===t.type?a.d.subreddit:a.d.profile}${t.name}`), i.fbt._plural(s.length, "number")], {
								hk: "9EXsM"
							})
						})), await r(J({
							communityInfo: e,
							id: n,
							multipaths: d,
							type: t.type
						})), 1 === s.length && await r(Q())
					} else {
						r(ee(g.error));
						let e = i.fbt._("Sorry, something went wrong adding {subredditName}.", [i.fbt._param("subredditName", t.name)], {
							hk: "ERdWO"
						});
						g.body && (g.body.reason === F.d.TooManySubreddits ? e = i.fbt._("Maximum communities reached", null, {
							hk: "2eguyW"
						}) : g.body.reason === F.d.InvalidSrQuarantine && (e = i.fbt._("{communityname} is invalid because it is quarantined", [i.fbt._param("communityname", `${"subreddit"===t.type?a.d.subreddit:a.d.profile}${t.name}`)], {
							hk: "407xmS"
						}))), r(Object(p.e)({
							text: e,
							kind: I.b.Error
						}))
					}
				}, se = Object(c.a)(F.w), ie = Object(c.a)(F.x), re = Object(c.a)(F.v), ne = ({
					id: e,
					multiredditName: t,
					name: s,
					type: r
				}) => async (n, d, {
					apiContext: a
				}) => {
					const c = d(),
						l = Object(D.i)(c);
					if (!l || !l.displayText || c.multireddits.api.removeSubreddit.pending) return;
					n(se({
						id: e
					}));
					const {
						displayText: m
					} = l, b = Object(k.h)(m, t), O = `${"profile"===r?o.Wb:""}${s}`, g = await ((e, t, s) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${s}r/${t}`),
						method: o.cb.DELETE
					}))(a(), O, b);
					g.ok ? (n(Object(u.f)()), n(ie({
						id: e,
						multipath: b,
						type: r
					})), n(Object(p.e)({
						text: i.fbt._("{subredditname} removed from your custom feed!", [i.fbt._param("subredditname", s)], {
							hk: "uaWNe"
						}),
						buttonText: i.fbt._("undo", null, {
							hk: "3HH7IT"
						}),
						buttonAction: te({
							identifier: {
								name: s,
								type: r
							},
							multiredditNames: [t]
						})
					})), n(Q())) : (n(re(g.error)), n(Object(p.e)({
						text: i.fbt._("Sorry, something went wrong removing {subredditName}.", [i.fbt._param("subredditName", s)], {
							hk: "1E1rKm"
						})
					})))
				}, de = Object(c.a)(F.h), oe = Object(c.a)(F.i), ae = Object(c.a)(F.j), ce = e => async (t, s, {
					apiContext: r
				}) => {
					const n = s();
					if (!Object(D.i)(n)) return;
					t(oe());
					const a = await ((e, t) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${t}`),
						method: o.cb.DELETE
					}))(r(), e);
					a.ok ? (await t(ae(e)), t(Object(u.f)()), await t(Object(d.b)("/")), t(Object(p.e)({
						text: i.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(de(a.error))
				}, le = Object(c.a)(F.n), ue = Object(c.a)(F.o), me = Object(c.a)(F.p), pe = ({
					description: e,
					displayText: t,
					multipath: s,
					visibility: r
				}) => async (n, d, {
					apiContext: a
				}) => {
					const c = d();
					if (!Object(D.J)(c)) return;
					n(ue());
					const l = await (({
						context: e,
						description: t,
						displayText: s,
						multipath: i,
						visibility: r
					}) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${i}`),
						data: {
							model: JSON.stringify({
								description_md: t,
								display_name: s,
								visibility: r
							}),
							expand_srs: !0
						},
						method: o.cb.PUT
					}))({
						context: a(),
						description: e,
						displayText: t,
						multipath: s,
						visibility: r
					});
					l.ok ? (await n(me(_(l.body.data))), n(Object(u.f)()), n(Object(p.e)({
						text: i.fbt._("Custom feed updated!", null, {
							hk: "39R30f"
						})
					}))) : (n(le(l.error)), n(Object(p.e)({
						kind: I.b.Error,
						text: i.fbt._("Something went wrong", null, {
							hk: "1Y6lli"
						})
					})))
				}, be = Object(c.a)(F.z), he = Object(c.a)(F.A), fe = Object(c.a)(F.B), xe = ({
					multiredditName: e,
					username: t,
					toExcludeNames: s
				}) => async (i, r, {
					gqlContext: n
				}) => {
					const d = r(),
						o = Object(D.i)(d);
					if (!(t || o && o.displayText)) return;
					const a = Object(k.h)(t || o.displayText, e),
						c = d.multireddits.models[a];
					if (!c || !c.subredditIds) return;
					i(he());
					const l = s && s.reduce((e, t) => {
							const s = Object(N.F)(d, t) || Object(N.G)(d, t);
							return s ? [...e, s] : e
						}, []),
						u = await ((e, t) => Object(g.a)(e, {
							...j,
							variables: t
						}))(n(), {
							count: F.y,
							subredditIds: c.subredditIds,
							toExclude: l
						});
					if (u.ok) {
						const {
							data: e
						} = u.body;
						i(fe({
							multipath: a,
							subreddits: Object(v.b)(e)
						}))
					} else i(be(u.error))
				}
		},
		"./src/reddit/actions/pages/multireddit/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "multiredditFeedPending", (function() {
				return P
			})), s.d(t, "multiredditFeedLoaded", (function() {
				return N
			})), s.d(t, "multiredditFeedFailed", (function() {
				return D
			})), s.d(t, "multiredditFeedRequested", (function() {
				return T
			})), s.d(t, "multiredditRequested", (function() {
				return F
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/pick.js"),
				n = s.n(r),
				d = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/lib/addQueryParams/index.ts"),
				a = s("./src/reddit/actions/multireddit/index.ts"),
				c = s("./src/reddit/endpoints/page/multiredditListing.ts"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/reddit/actions/users.ts"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				y = s("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				O = s("./src/reddit/models/Multireddit/index.ts"),
				g = s("./src/reddit/models/Toast/index.ts"),
				S = s("./src/reddit/models/User/index.ts"),
				j = s("./src/reddit/selectors/multireddit.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				C = s("./src/lib/makeActionCreator/index.ts"),
				w = s("./src/lib/makeListingKey/index.ts"),
				v = s("./src/reddit/actions/ads/index.ts"),
				_ = s("./src/reddit/helpers/canonicalUrls.ts"),
				k = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				I = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				M = s("./src/reddit/actions/pages/multireddit/constants.ts");
			const P = Object(C.a)(M.c),
				N = Object(C.a)(M.b),
				D = Object(C.a)(M.a),
				T = (e, t, s, r, n) => async (d, o, u) => {
					const {
						gqlContext: p
					} = u, b = o();
					if (b.listings.postOrder.api.pending[e]) return;
					d(P({
						key: e
					})), r.layout = h.e[Object(f.N)(b, {})];
					const x = {
							path: Object(O.h)(t, s).replace(/\/$/, ""),
							includeIdentity: !0,
							includeSources: !0,
							sort: r.sort ? r.sort.toUpperCase() : void 0,
							range: r.t ? r.t.toUpperCase() : void 0
						},
						S = await Object(k.a)("multireddit", () => Object(c.a)(p(), x)),
						{
							data: j
						} = S.body,
						C = `error-${e}`;
					if (S.ok && j) {
						const i = Object(y.a)(j);
						if (!j.multireddit) return n && d(m.f(C)), void d(D({
							...i,
							error: {
								type: l.E.NOT_FOUND_ERROR
							},
							key: e
						}));
						d(N({
							key: e,
							meta: b.meta,
							...i,
							account: i.account || Object(E.i)(b),
							multiredditsModelsState: b.multireddits.models
						})), n && d(m.f(C)), d(Object(a.recommendationsRequested)({
							multiredditName: s,
							username: t
						})), window.addEventListener("load", () => {
							d(Object(v.b)(I.a.MULTIREDDIT))
						})
					} else n && d(m.e({
						id: C,
						kind: g.b.Error,
						text: i.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: i.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: T(e, t, s, r, n)
					}))
				}, F = (e, t) => async (s, i) => {
					const {
						multiredditName: r
					} = e.params;
					let {
						username: a
					} = e.params;
					if (!a) {
						let t = i();
						if (t.user.session && t.user.session.unsafeLoggedOut) return void s(Object(d.c)("/"));
						!t.user.account && t.user.session && await s(p.r()), t = i();
						const {
							account: n
						} = t.user;
						if (!n) return void s(Object(d.c)("/"));
						let c = `/user/${a=Object(S.e)(n)}/m/${r}`;
						const {
							sort: l
						} = e.params;
						return c += l ? `/${l}` : "", void s(Object(d.c)(Object(o.a)(c, e.queryParams)))
					}
					const {
						sort: c = l.P.HOT
					} = e.params, m = {
						multiredditName: r,
						username: a
					}, h = i();
					a || (a = h.user.account ? Object(S.e)(h.user.account) : "");
					const f = Object(O.h)(a, r),
						y = Object(w.a)(f, c, e.queryParams),
						g = h.listings.postOrder.ids[y],
						E = h.listings.postOrder.api.error[y],
						C = h.listings.postOrder.api.pending[y],
						k = b.x in e.queryParams && e.queryParams[b.x].toUpperCase() || "",
						M = k in l.Ub && l.Ub[k];
					if (C || g && !E && !t) return void(g && (s(u.l({
						title: Object(j.f)(i(), m)
					})), h.sidebarPromotedPosts.firstFetch || s(Object(v.b)(I.a.MULTIREDDIT))));
					await s(T(y, a, r, {
						...n()(e.queryParams, b.l),
						...n()(e.queryParams, b.k),
						sort: c,
						t: Object(x.a)(c, M)
					}, !0));
					const P = i();
					Object(j.d)(P, m) && s(u.l({
						title: Object(j.f)(i(), m)
					})), Object(_.c)(P, s, e)
				}
		},
		"./src/reddit/actions/subredditAutocomplete/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/graphql/operations/SubredditTypeaheadSearch.json"),
				n = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/reddit/helpers/graphql/normalizeAllowedPostTypesFromGql/index.ts"),
				o = s("./src/reddit/helpers/name/index.ts"),
				a = s("./src/reddit/selectors/subredditAutocomplete.ts"),
				c = s("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const l = Object(i.a)(c.c),
				u = Object(i.a)(c.b),
				m = Object(i.a)(c.a),
				p = (e, t = !1) => async (s, i, {
					gqlContext: c
				}) => {
					const p = Object(o.g)(e);
					if (!p) return;
					const b = i(),
						h = b.subredditAutocomplete;
					if (h.api.pending[p] || h.models[p]) return;
					if (Object(a.b)(b, {
							substring: p
						})) return;
					s(l({
						key: p
					}));
					const f = await ((e, t) => Object(n.a)(e, {
						...r,
						variables: t
					}))(c(), {
						query: p,
						includeNsfw: t
					});
					if (f.ok) {
						const e = f.body.data.subredditTypeahead.subreddits.edges.map(e => (({
							allowedPostTypes: e,
							id: t,
							isCrosspostDestination: s,
							isNsfw: i,
							name: r,
							styles: n,
							subscribersCount: o
						}) => ({
							allowedPostTypes: Object(d.a)(e),
							communityIcon: n && n.icon || "",
							icon: n && n.legacyIcon && n.legacyIcon.url || "",
							id: t,
							isCrosspostDestination: s,
							isNsfw: i,
							name: r,
							primaryColor: n && n.primaryColor || "",
							subscribers: o
						}))(e.node));
						s(u({
							key: p,
							subreddits: e
						}))
					} else s(m({
						key: p,
						error: f.error
					}))
				}
		},
		"./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				headerButton: "_3aSsYcE4XPX93_RpWvd-4s"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, s) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, s) {
			e.exports = {
				CommunityCount: "_2FGPtEJLumoHbu-QFFxout",
				communityCount: "_2FGPtEJLumoHbu-QFFxout",
				SubredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				subredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				SidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				sidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				ModalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq",
				modalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				p = s.n(m),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.wrapped(l.b, "SubredditIcon", p.a),
				f = b.a.span("Label", p.a),
				x = Object(c.c)({
					subredditOrProfile: u.L
				});
			var y = Object(a.b)(x)(({
				children: e,
				subredditOrProfile: t
			}) => e(t, n.a.createElement(n.a.Fragment, null, n.a.createElement(h, {
				subredditOrProfile: t
			}), n.a.createElement(f, null, t.displayText))));
			var O = ({
					children: e,
					className: t,
					subredditsOrProfilesIds: s
				}) => {
					const i = s.map(t => n.a.createElement(y, {
						children: e,
						key: t.id,
						identifier: t
					}));
					return n.a.createElement("div", {
						className: t
					}, i)
				},
				g = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				S = s.n(g);
			const j = b.a.div("CommunityCount", S.a),
				E = b.a.wrapped(O, "SubredditsOrProfiles", S.a),
				C = b.a.wrapped(d.a, "SidebarSubreddit", S.a),
				w = b.a.wrapped(d.a, "ModalSubreddit", S.a);
			var v;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(v || (v = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: s,
					onSeeMoreDetails: r,
					subredditCategory: d = {
						name: i.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, a = t ? C : w, c = s.length, l = t && s.length > 4;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(j, null, i.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [i.fbt._plural(c, "number"), i.fbt._param("category", d.name)], {
					hk: "33iWe4"
				})), c > 0 && n.a.createElement(E, {
					subredditsOrProfilesIds: t ? s.slice(0, 4) : s
				}, (t, s) => n.a.createElement(a, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, s)), c > 0 && l && n.a.createElement(o.o, {
					onClick: r
				}, i.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less": function(e, t, s) {
			e.exports = {
				SidebarTopSpacer: "AHfNtZK4Z7VFG9guitlj7",
				sidebarTopSpacer: "AHfNtZK4Z7VFG9guitlj7",
				ModalTopSpacer: "_2ispBvPlngXQd3xKtLWBQb",
				modalTopSpacer: "_2ispBvPlngXQd3xKtLWBQb",
				SidebarTitleContainer: "WHFQUhYmskfFnYj9Wop5R",
				sidebarTitleContainer: "WHFQUhYmskfFnYj9Wop5R",
				SidebarTitle: "_2K0i3XQzE9WLp3XNx1byXx",
				sidebarTitle: "_2K0i3XQzE9WLp3XNx1byXx",
				SidebarFlair: "L6WVFQA-UjKC-pAtGgJkG",
				sidebarFlair: "L6WVFQA-UjKC-pAtGgJkG",
				Attributon: "htg8GP8UyboUgLmuSYKen",
				attributon: "htg8GP8UyboUgLmuSYKen",
				FadingDescription: "_2Z-Kuo_aE91sy_TOtfCUkO",
				fadingDescription: "_2Z-Kuo_aE91sy_TOtfCUkO",
				shouldFade: "_2ONS322IFK1Sw2jAj3dZqW",
				Component: "_20vfWUdM54Wu07ZOfKYP8o",
				component: "_20vfWUdM54Wu07ZOfKYP8o"
			}
		},
		"./src/reddit/components/MultiredditInfo/index.m.less": function(e, t, s) {
			e.exports = {
				noSubredditsText: "EOCYiZiqAa39tAXUCAqmZ"
			}
		},
		"./src/reddit/components/MultiredditManageWidget/index.m.less": function(e, t, s) {
			e.exports = {
				bubbleSelector: "_32QbfsW2hwOWwyV4hZJqEG",
				widgetContainer: "Md-M9lk_Fnyiovos-cWPZ",
				error: "s0AzWPiC_eJAnSdDAZPym",
				searchIcon: "_1wfVsnvMUNUkrQpFx5I6O9",
				bubble: "_3NfN8QVLJTyC1hzOZDqDa_",
				selected: "_3Mgq2YpcfG6lx6UTEtbSUX",
				bubbleIcon: "_3kWMG0X0DIgmFR4pMIpuWf",
				text: "_1boSpw2RVthfLh9y4Ln0H2",
				isEmpty: "lsui73aPZobEl_lU01DBf",
				closeIcon: "_1FGYwDvXjw09vL1EUCOelw",
				input: "_2LQWhKcfsIjm5PCEiFbnfv",
				emptyText: "Uqpbu2QyTc_VF5yeJOo0U",
				addButton: "_7aZcaB7RRfblay2Mpw4PJ",
				dropdown: "rUguk2cMQS0qUTWqZTUfE",
				expandButton: "_31vaGAnztsBt2uSP6kVo6D",
				expandButtonContainer: "_2b-PrKZyTcbtQSMmFYdZ3Z"
			}
		},
		"./src/reddit/components/MultiredditSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				detailsContainer: "_2o2cN1Q1R544f7UCxJHRTH",
				modalContainer: "_2qY6j7wtHkEaoEG4g5F53z",
				closeBtn: "_3NmSyduxNX74yaC9kmkYgh",
				modalMain: "_1hG7UoCi1oRW1UnsvoewhT",
				placeholder: "_1wCkMb-wQyvSVuqZWNjIEZ"
			}
		},
		"./src/reddit/components/MultiredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/times.js"),
				n = s.n(r),
				d = s("./node_modules/react/index.js"),
				o = s.n(d),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/actions/subscription/index.ts"),
				b = s("./src/reddit/components/OverflowMenu/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				f = s("./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less"),
				x = s.n(f);
			var y = Object(a.b)(null, e => ({
					subscribe: t => e(Object(p.d)(t, !0))
				}))(e => {
					const {
						communities: t,
						subscribe: s
					} = e, r = t.filter(e => !e.isSubscribed);
					return r.length ? o.a.createElement(b.b, {
						className: x.a.headerButton,
						dropdownId: "MULTIREDDIT_INFO_DROPDOWN_ID",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(h.b, {
						displayText: i.fbt._("Join all communities", null, {
							hk: "1E2I53"
						}),
						onClick: () => s(r)
					})) : null
				}),
				O = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				j = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				E = s("./src/reddit/selectors/multireddit.ts"),
				C = s("./src/reddit/components/MultiredditInfo/index.m.less"),
				w = s.n(C);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = Object(c.c)({
				communities: (e, t) => Object(E.b)(e, t.multireddit)
			}), k = Object(a.b)(_), I = ({
				item: e
			}) => o.a.createElement(S.a, {
				id: e.id,
				iconUrl: e.iconUrl,
				isNSFW: e.isNSFW,
				key: `${e.type}-${e.name}`,
				name: e.name,
				subscribers: e.subscribers,
				isSubscribed: e.isSubscribed,
				widget: void 0,
				sendEvent: e.sendEvent,
				type: e.type
			});
			var M = Object(g.c)(k(e => {
					const {
						communities: t,
						titleText: s
					} = e;
					return t.length ? o.a.createElement(O.a, {
						items: t,
						minimizedLength: 5,
						title: s,
						headerButton: o.a.createElement(y, {
							communities: t
						}),
						renderItem: I
					}) : o.a.createElement(j.a, {
						title: s
					}, o.a.createElement("div", {
						className: w.a.noSubredditsText
					}, v._("This custom feed does not yet contain any communities.", null, {
						hk: "35QJZi"
					})))
				})),
				P = s("./src/higherOrderComponents/sizeMe.tsx"),
				N = s("./src/lib/timeAgo/index.ts"),
				D = s("./src/reddit/components/Flair/index.tsx"),
				T = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				F = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				R = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var L = Object(T.a)(e => o.a.createElement(R.a, q({
					style: {
						color: Object(F.a)(e).post
					}
				}, e))),
				U = s("./src/reddit/constants/posts.ts"),
				B = s("./src/reddit/controls/Button/index.tsx"),
				A = s("./src/reddit/models/Multireddit/index.ts"),
				W = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				z = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less"),
				G = s.n(z),
				H = s("./src/lib/lessComponent.tsx");
			const K = H.a.div("SidebarTopSpacer", G.a),
				Q = H.a.div("ModalTopSpacer", G.a),
				V = H.a.div("SidebarTitleContainer", G.a),
				Z = H.a.div("SidebarTitle", G.a),
				Y = H.a.wrapped(D.a, "SidebarFlair", G.a),
				X = H.a.div("Attributon", G.a),
				$ = ({
					children: e,
					className: t
				}) => o.a.createElement(L, {
					className: t,
					html: e
				}),
				J = Object(P.a)(({
					children: e,
					onSeeMoreDetails: t,
					size: s
				}) => {
					const r = !s || "number" != typeof s.height || s.height > 152;
					return o.a.createElement("div", null, o.a.createElement($, {
						className: Object(u.a)(G.a.FadingDescription, {
							[G.a.shouldFade]: r
						})
					}, e), r && o.a.createElement(B.o, {
						onClick: t
					}, i.fbt._("Read more", null, {
						hk: "i0AXN"
					})))
				});
			var ee;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(ee || (ee = {}));
			var te = e => {
					const {
						mode: t,
						multireddit: s,
						onSeeMoreDetails: r,
						subredditCategory: n
					} = e, d = t === ee.Sidebar, [a, c] = d ? [K, X] : [Q, X], l = Object(A.f)(s) ? () => o.a.createElement(a, null, d && o.a.createElement(V, null, o.a.createElement(Z, null, s.displayText), s.visibility === A.e.Private && o.a.createElement(Y, {
						text: i.fbt._("Private", null, {
							hk: "4Av1zq"
						})
					}), s.visibility === A.e.Hidden && o.a.createElement(Y, {
						text: i.fbt._("Hidden", null, {
							hk: "4tUfi0"
						})
					})), o.a.createElement(c, null, i.fbt._("Curated by u/ {username}", [i.fbt._param("username", Object(A.i)(s.url))], {
						hk: "1AxWQt"
					}), "· ", Object(N.d)(s.created))) : () => null, m = Object(A.f)(s) && s.description ? () => o.a.createElement(a, null, d ? o.a.createElement(J, {
						onSeeMoreDetails: r
					}, s.description) : o.a.createElement(L, {
						html: s.description
					})) : () => null, p = [...s.subredditIds && s.subredditIds.map(e => ({
						id: e,
						type: U.a.SUBREDDIT
					})) || [], ...s.profileIds && s.profileIds.map(e => ({
						id: e,
						type: U.a.PROFILE
					})) || []];
					return o.a.createElement("div", {
						className: Object(u.a)(G.a.Component, e.className)
					}, l(), m(), o.a.createElement(W.b, {
						isSidebar: d,
						onSeeMoreDetails: r,
						subredditCategory: n,
						subredditsOrProfilesIds: p
					}))
				},
				se = s("./node_modules/lodash/debounce.js"),
				ie = s.n(se),
				re = s("./node_modules/lodash/noop.js"),
				ne = s.n(re),
				de = s("./src/lib/constants/index.ts"),
				oe = s("./src/reddit/actions/multireddit/index.ts"),
				ae = s("./src/reddit/actions/subredditAutocomplete/index.ts"),
				ce = s("./src/reddit/actions/toaster.ts"),
				le = s("./src/reddit/constants/keycodes.ts"),
				ue = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				me = s("./src/reddit/helpers/name/index.ts"),
				pe = s("./src/reddit/icons/svgs/Close/index.tsx"),
				be = s("./src/reddit/icons/svgs/Search/index.tsx"),
				he = s("./src/reddit/models/Toast/index.ts"),
				fe = s("./src/reddit/models/Widgets/index.ts"),
				xe = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				ye = s("./src/reddit/selectors/subredditAutocomplete.ts");
			const Oe = Object(c.c)({
				isAutocompletePending: ye.c,
				items: ye.e
			});
			class ge extends o.a.Component {
				constructor() {
					super(...arguments), this.onDropdownContainerMouseDown = e => {
						e.preventDefault()
					}, this.onEntrySelect = e => {
						this.props.onEntrySelect(this.props.items[e])
					}, this.onEntryFocus = e => {
						this.props.onEntryFocus(this.props.items[e], e)
					}
				}
				render() {
					const {
						className: e,
						focusedIndex: t,
						items: s,
						isAutocompletePending: i
					} = this.props;
					return o.a.createElement(xe.a, {
						className: e,
						focusedIndex: t,
						items: s,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						showNoMatchesCaption: !i && 0 === s.length,
						isValid: !0
					})
				}
			}
			var Se = Object(a.b)(Oe)(ge),
				je = s("./src/reddit/components/MultiredditManageWidget/index.m.less"),
				Ee = s.n(je);

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const we = 12,
				ve = 5,
				_e = 500,
				ke = Object(c.c)({
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					communityInformations: (e, {
						multireddit: t
					}) => Object(E.b)(e, t),
					removePending: e => e.multireddits.api.removeSubreddit.pending
				}),
				Ie = Object(a.b)(ke, (e, {
					multireddit: t
				}) => ({
					addSubredditRequested: (s, i) => {
						const r = i ? Object(fe.g)(i) : void 0;
						e(Object(oe.addSubredditRequested)({
							communityInfo: r,
							identifier: s,
							multiredditNames: [t.name]
						}))
					},
					errorToast: t => e(Object(ce.e)({
						text: t,
						kind: he.b.Error
					})),
					removeSubredditRequested: ({
						id: s,
						name: i,
						type: r
					}) => s && e(Object(oe.removeSubredditRequested)({
						id: s,
						multiredditName: t.name,
						name: i,
						type: r
					})),
					subredditAutocompleteRequested: s => e(Object(ae.a)(s, t.isNSFW))
				})),
				Me = {
					choice: null,
					focusedIndex: -1,
					focusedItem: null,
					isAddError: null,
					isChoiceSelected: !1,
					isDropdownOpen: !1,
					isListExpanded: !1,
					memoizedShortList: [],
					query: ""
				};
			class Pe extends o.a.Component {
				constructor(e) {
					super(e), this.onRemoveClickedFnCache = {}, this.closeDropdown = () => {
						this.setState({
							isDropdownOpen: !1,
							focusedIndex: -1
						})
					}, this.onChange = e => {
						this.state.choice || (this.setState({
							isAddError: null,
							isDropdownOpen: e.target.value.trim().length > 0,
							query: e.target.value.trim()
						}), this.onQueryUpdated())
					}, this.onBlur = () => {
						this.closeDropdown()
					}, this.onFocus = () => {
						this.setState(e => e.query && !e.isDropdownOpen ? {
							isDropdownOpen: !0
						} : null)
					}, this.onKeydown = e => {
						this.state.choice ? this.state.choice && (e.which === le.a.ArrowLeft ? this.onChoiceSelected() : this.state.isChoiceSelected ? e.which === le.a.Backspace ? this.setState({
							choice: null
						}) : e.which === le.a.ArrowRight && this.onChoiceDeselected() : e.which !== le.a.Backspace || this.state.query.length || this.onChoiceSelected(), e.which === le.a.Enter && this.onSubmit()) : this.state.isDropdownOpen ? e.which === le.a.ArrowDown ? (this.setState({
							focusedIndex: this.state.focusedIndex + 1
						}), e.stopPropagation()) : e.which === le.a.ArrowUp ? (this.setState({
							focusedIndex: this.state.focusedIndex - 1
						}), e.stopPropagation()) : e.which === le.a.Escape ? (this.closeDropdown(), e.stopPropagation()) : e.which === le.a.Enter && (this.state.focusedItem ? this.onDropdownItemSelect(this.state.focusedItem) : -1 === this.state.focusedIndex && this.onSubmit()) : e.which === le.a.Enter && this.onSubmit()
					}, this.onQueryUpdated = () => {
						this.props.subredditAutocompleteRequested(this.state.query)
					}, this.onDropdownItemSelect = e => {
						this.setState({
							...Me,
							choice: e,
							isListExpanded: this.state.isListExpanded,
							memoizedShortList: this.state.memoizedShortList
						})
					}, this.onDropdownItemFocus = (e, t) => {
						this.setState({
							focusedItem: e,
							focusedIndex: t
						})
					}, this.onChoiceSelected = () => this.setState({
						isChoiceSelected: !0
					}), this.onChoiceDeselected = () => this.setState({
						isChoiceSelected: !1
					}), this.onChoiceRemoved = () => this.setState({
						choice: null
					}), this.onSubmit = () => {
						if (!this.props.addSubredditPending)
							if (this.state.choice) this.props.addSubredditRequested({
								name: this.state.choice.name,
								type: "subreddit"
							}, this.state.choice), this.setState({
								isDropdownOpen: !1
							});
							else {
								const {
									query: e
								} = this.state;
								if (e.length) {
									const t = Object(me.h)(e),
										s = t.startsWith(de.Wb) ? "profile" : "subreddit",
										i = "profile" === s ? t.substring(2) : t;
									this.props.addSubredditRequested({
										name: i,
										type: s
									})
								}
							}
					}, this.getOnRemoveClickedFn = e => {
						const t = `${e.id||""}.${e.name}`;
						return this.onRemoveClickedFnCache[t] ? this.onRemoveClickedFnCache[t] : (this.onRemoveClickedFnCache[t] = () => {
							this.props.removeSubredditRequested(e)
						}, this.onRemoveClickedFnCache[t])
					}, this.onToggleExpand = () => this.setState({
						isListExpanded: !this.state.isListExpanded
					}), this.state = {
						...Me,
						memoizedShortList: e.communityInformations.slice(0, ve)
					}, this.onQueryUpdated = ie()(this.onQueryUpdated, _e)
				}
				componentDidUpdate(e) {
					!this.props.addSubredditPending && e.addSubredditPending && (this.props.addSubredditError ? this.setState({
						isAddError: this.props.addSubredditError
					}) : this.setState(Me)), this.props.communityInformations.length !== e.communityInformations.length && this.setState({
						memoizedShortList: this.props.communityInformations.slice(0, ve)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							communityInformations: t,
							multireddit: s,
							removePending: r
						},
						state: {
							choice: n,
							focusedIndex: d,
							isAddError: a,
							isChoiceSelected: c,
							isDropdownOpen: l,
							isListExpanded: m,
							memoizedShortList: p,
							query: b
						}
					} = this;
					return o.a.createElement(j.a, {
						className: Ee.a.widgetContainer,
						headerButton: o.a.createElement(y, {
							communities: t
						}),
						title: i.fbt._("manage communities", null, {
							hk: "3X8r0d"
						})
					}, o.a.createElement("div", {
						className: Object(u.a)(Ee.a.bubbleSelector, {
							[Ee.a.error]: !!a
						}),
						onBlur: this.onBlur,
						onKeyDown: this.onKeydown
					}, n ? o.a.createElement("div", {
						className: Object(u.a)(Ee.a.bubble, {
							[Ee.a.selected]: c
						}),
						tabIndex: 0,
						onClick: this.onChoiceSelected
					}, o.a.createElement("img", {
						src: n.iconUrl,
						className: Ee.a.bubbleIcon
					}), o.a.createElement("span", {
						className: Ee.a.text
					}, `r/${n.name}`), o.a.createElement(pe.a, {
						className: Ee.a.closeIcon,
						onClick: this.onChoiceRemoved
					})) : o.a.createElement(be.a, {
						className: Ee.a.searchIcon
					}), o.a.createElement("input", {
						className: Object(u.a)(Ee.a.input, {
							[Ee.a.isEmpty]: !!n
						}),
						onChange: this.onChange,
						onFocus: this.onFocus,
						value: b
					}), !a && (n || b.length > 0) && (e ? o.a.createElement(ue.a, {
						sizePx: we
					}) : o.a.createElement(B.o, {
						className: Ee.a.addButton,
						onClick: this.onSubmit
					}, i.fbt._("Add", null, {
						hk: "2wi3d4"
					}))), l && o.a.createElement(Se, {
						className: Ee.a.dropdown,
						focusedIndex: d,
						multireddit: s,
						onEntryFocus: this.onDropdownItemFocus,
						onEntrySelect: this.onDropdownItemSelect,
						substring: b
					})), 0 === t.length ? o.a.createElement("p", {
						className: Ee.a.emptyText
					}, i.fbt._("Try adding some communities to your custom feed!", null, {
						hk: "3Qe2e3"
					})) : (m ? t : p).map(e => o.a.createElement(S.a, Ce({}, e, {
						buttonDisabled: !!r,
						key: e.id,
						isLoading: r === e.id,
						onTertiaryButtonClick: this.getOnRemoveClickedFn(e),
						sendEvent: ne.a,
						showTertiaryButtonOnHover: !0,
						tertiaryButtonText: i.fbt._("Remove", null, {
							hk: "s2BRg"
						}),
						useTertiaryButton: !0
					}))), t.length > ve && o.a.createElement("div", {
						className: Ee.a.expandButtonContainer
					}, o.a.createElement(B.o, {
						className: Ee.a.expandButton,
						onClick: this.onToggleExpand
					}, m ? i.fbt._("show less", null, {
						hk: "Q5bpx"
					}) : i.fbt._("show more", null, {
						hk: "2B9cqo"
					}))))
				}
			}
			var Ne = Ie(Pe),
				De = s("./src/reddit/components/MultiredditSuggestionsWidget/index.m.less"),
				Te = s.n(De);
			const Fe = 5,
				Re = Object(c.c)({
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditFetched: e => e.multireddits.api.addSubreddit.fetched,
					recommendations: E.k,
					recommendationsError: e => e.multireddits.api.recommendations.error,
					recommendationsPending: e => e.multireddits.api.recommendations.pending
				});
			class qe extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						memoizedRecommendations: this.props.recommendations,
						recommendationsToExclude: []
					}, this.onRecommendationsRefreshClicked = () => {
						this.setState(e => ({
							recommendationsToExclude: [...e.recommendationsToExclude, ...e.memoizedRecommendations.slice(0, Fe).map(e => e.name)]
						}), () => this.props.recommendationsRefreshed(this.state.recommendationsToExclude))
					}
				}
				componentDidUpdate(e) {
					this.props.recommendations !== e.recommendations && this.setState({
						memoizedRecommendations: this.props.recommendations
					}), !this.props.addSubredditPending && e.addSubredditPending && this.setState(t => ({
						recommendationsToExclude: [...t.recommendationsToExclude, ...e.addSubredditPending ? [e.addSubredditPending] : []],
						memoizedRecommendations: t.memoizedRecommendations.filter(t => t.name !== e.addSubredditPending)
					}), () => {
						this.state.memoizedRecommendations.length < Fe && this.props.recommendationsRefreshed(this.state.recommendationsToExclude)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							addSubredditRequested: t,
							recommendations: s,
							recommendationsError: r,
							recommendationsPending: n
						},
						state: {
							memoizedRecommendations: d
						}
					} = this;
					return o.a.createElement(S.b, {
						bottomButtonText: i.fbt._("refresh", null, {
							hk: "2qUiWm"
						}),
						className: Te.a.container,
						communities: d.slice(0, Fe),
						errorMsg: i.fbt._("Couldn't find any recommendations. Try adding more communities first!", null, {
							hk: "3E76C7"
						}),
						isError: !s.length || !!r,
						isLoading: n,
						loadingItemName: e || void 0,
						onBottomButtonClick: this.onRecommendationsRefreshClicked,
						onTertiaryButtonClick: t,
						sendEvent: ne.a,
						showTertiaryButtonOnHover: !0,
						itemButtonDisabled: !!e,
						tertiaryButtonText: i.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						title: i.fbt._("People also added", null, {
							hk: "22fDdF"
						}),
						useTertiaryButton: !0
					})
				}
			}
			var Le = Object(a.b)(Re, (e, t) => ({
					addSubredditRequested: s => {
						Object(A.f)(t.multireddit) && e(Object(oe.addSubredditRequested)({
							identifier: {
								name: s.name,
								type: s.type
							},
							multiredditNames: [t.multireddit.name],
							communityInfo: s
						}))
					},
					recommendationsRefreshed: s => {
						Object(A.f)(t.multireddit) && e(Object(oe.recommendationsRequested)({
							multiredditName: t.multireddit.name,
							username: t.multiUsername,
							toExcludeNames: s
						}))
					}
				}))(qe),
				Ue = s("./src/reddit/components/SidebarContainer/index.tsx"),
				Be = s("./src/reddit/components/SidebarSectionHeader/index.m.less"),
				Ae = s.n(Be),
				We = H.a.div("Component", Ae.a),
				ze = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Ge = s("./src/reddit/constants/zIndex.ts"),
				He = s("./src/reddit/controls/TextButton/index.tsx"),
				Ke = s("./src/reddit/helpers/trackers/idCard.ts"),
				Qe = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				Ve = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				Ze = s("./src/reddit/components/MultiredditSidebar/index.m.less"),
				Ye = s.n(Ze);

			function Xe() {
				return (Xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const $e = Object(l.a)(e => o.a.createElement(m.d, {
					className: Ye.a.modalContainer
				}, !e.shouldHideHeader && o.a.createElement(m.h, null, o.a.createElement(Qe.a, null, o.a.createElement(m.p, null, e.multireddit.displayText), o.a.createElement(He.a, {
					onClick: e.onCloseModal
				}, o.a.createElement(m.b, null)))), o.a.createElement(m.k, null, o.a.createElement(te, {
					mode: ee.Modal,
					multireddit: e.multireddit,
					subredditCategory: e.subredditCategory
				})), e.shouldHideHeader && o.a.createElement(He.a, {
					className: Ye.a.closeBtn,
					onClick: e.onCloseModal
				}, o.a.createElement(m.b, null)))),
				Je = e => o.a.createElement($e, Xe({}, e, {
					overlayCustomStyles: {
						zIndex: Ge.b
					},
					withOverlay: !0
				})),
				et = () => o.a.createElement(j.a, null, n()(5, e => o.a.createElement("div", {
					className: Object(u.a)(Ye.a.placeholder, Object(Ve.a)({
						isLoading: !0
					})),
					key: e
				}))),
				tt = e => Object(A.f)(e.multireddit) ? Object(A.g)(e.multireddit) ? e.isCurrentUserMultiredditOwner ? o.a.createElement(Ne, {
					multireddit: e.multireddit
				}) : o.a.createElement(M, {
					multireddit: e.multireddit,
					titleText: i.fbt._("Communities in this custom feed", null, {
						hk: "23oj0B"
					})
				}) : o.a.createElement(et, null) : o.a.createElement("div", {
					className: Ye.a.detailsContainer
				}, o.a.createElement(We, null, e.subredditCategory ? e.subredditCategory.name : i.fbt._("Custom feed details", null, {
					hk: "4Ct8xk"
				})), o.a.createElement(te, {
					mode: ee.Sidebar,
					multireddit: e.multireddit,
					onSeeMoreDetails: e.onSeeMoreDetails,
					onSubredditClick: e.onSubredditClick,
					subredditCategory: e.subredditCategory
				})),
				st = Object(c.c)({
					isCurrentUserMultiredditOwner: (e, {
						multireddit: t
					}) => Object(A.f)(t) && Object(E.c)(e, t.url)
				}),
				it = Object(a.b)(st, (e, {
					subredditCategory: t
				}) => ({
					trackSeeMoreClicked: () => e((e, t) => Ke.a(t())),
					trackSubredditClicked: s => {
						if (!t) return;
						const i = Object(fe.i)(s);
						e((e, s) => Ke.b(s(), i, t.name))
					}
				}));
			class rt extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showModal: !1
					}, this.closeModal = () => this.setState({
						showModal: !1
					}), this.openModal = () => this.setState({
						showModal: !0
					}, this.props.subredditCategory ? this.props.trackSeeMoreClicked : void 0)
				}
				render() {
					const {
						className: e,
						isCurrentUserMultiredditOwner: t,
						multireddit: s,
						multiUsername: i,
						subredditCategory: r
					} = this.props, n = t && s.subredditIds && s.subredditIds.length > 0;
					return o.a.createElement(Ue.a, {
						className: e
					}, o.a.createElement(tt, {
						isCurrentUserMultiredditOwner: t,
						multireddit: s,
						subredditCategory: r,
						onSeeMoreDetails: this.openModal,
						onSubredditClick: this.props.trackSubredditClicked
					}), this.state.showModal ? o.a.createElement(Je, {
						multireddit: s,
						subredditCategory: r,
						onCloseModal: this.closeModal,
						shouldHideHeader: !!r
					}) : null, n && o.a.createElement(Le, {
						multireddit: s,
						multiUsername: i
					}), o.a.createElement(ze.a, null))
				}
			}
			t.a = it(rt)
		},
		"./src/reddit/components/MultiredditSuggestionsWidget/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3jG8aJCgqOrmMUbRMiakpX"
			}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				x = s("./src/reddit/selectors/tooltip.ts"),
				y = s("./src/reddit/components/OverflowMenu/index.m.less"),
				O = s.n(y);
			const g = c.a.wrapped(m.a, "_Dropdown", O.a),
				S = Object(u.a)(g),
				j = c.a.button("MenuButton", O.a),
				E = c.a.wrapped(f.a, "MenuIcon", O.a),
				C = c.a.wrapped(p.b, "DropdownRow", O.a),
				w = Object(o.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(x.b)(t)(e)
				}),
				v = Object(d.b)(w, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				_ = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = v(e => {
				const t = Object(b.b)();
				return n.a.createElement(j, {
					"aria-expanded": e.dropdownIsOpen,
					"aria-haspopup": !0,
					"aria-label": i.fbt._("more options", null, {
						hk: "2EnY1x"
					}),
					className: Object(a.a)(e.className, {
						[O.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
					}),
					disabled: e.disabled,
					onClick: _(e),
					onMouseDown: e.handleMouseDown,
					id: e.dropdownId
				}, e.icon ? e.icon : t ? n.a.createElement(h.a, {
					name: "overflow_horizontal"
				}) : n.a.createElement(E, null), n.a.createElement(S, {
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId,
					isFixed: e.isFixed,
					targetPosition: e.targetPosition,
					tooltipPosition: e.tooltipPosition,
					style: e.style
				}, e.children))
			})
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/take.js"),
				n = s.n(r),
				d = s("./node_modules/react/index.js"),
				o = s.n(d),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				b = s("./src/reddit/components/SidebarExpandableList/index.m.less"),
				h = s.n(b),
				f = s("./src/lib/lessComponent.tsx");
			const x = 10,
				y = f.a.wrapped(l.o, "TertiaryButton", h.a);
			class O extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && s && s()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s,
							pending: r
						} = this.props, n = !e || t && s ? i.fbt._("View More", null, {
							hk: "1RK8uA"
						}) : i.fbt._("View Less", null, {
							hk: "1M72mK"
						});
						return o.a.createElement(y, {
							onClick: this.onButtonClick
						}, r ? o.a.createElement(u.a, {
							sizePx: x
						}) : n)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: s,
						items: i,
						minimizedLength: r,
						renderItem: d,
						title: a
					} = this.props, {
						expanded: l
					} = this.state, u = i.length > r || t, b = (!u || l ? i : n()(i, r)).map(e => d({
						item: e
					}));
					return o.a.createElement(c.a, {
						className: e,
						headerButton: s,
						title: a
					}, b, o.a.createElement(m.a, null, o.a.createElement(p.a, null, u && this.renderToggleButton())))
				}
			}
			O.defaultProps = {
				minimizedLength: a.Ib
			}, t.a = O
		},
		"./src/reddit/components/SidebarSectionHeader/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_1X2juHHajDXGs8oboBFTY1",
				component: "_1X2juHHajDXGs8oboBFTY1",
				headerStyles: "ySyP3_8M4Wb9GDZa0U3rV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less": function(e, t, s) {
			e.exports = {
				entry: "_2_6Q3rlmltjQM8nEBoNJr-",
				disabled: "_1eGUunOsIyMkgTF3IiieVl"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less": function(e, t, s) {
			e.exports = {
				title: "-T-WBPEANCCRwTdAGSdj_",
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "_2jjSvas2tvdAFgIvSzSBax",
				mDisabled: "_2PoEIlhFzgV0sUWfM40K-N",
				rowStyle: "_3DfMNtnkrzHeGN0WyUTTuX"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less": function(e, t, s) {
			e.exports = {
				subredditIcon: "vxu9qtznQ1Kvakd5mtfxV",
				main: "_11CAFoZ5ryUXHrO5iX6Ktk",
				title: "_1bEDlh2fhWPx9-h3IqUvFa",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, s) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_20inB3H1vZ94tVilqSJmU2"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				noMatches: "kaGogHhtbK_vPZj9943oa",
				container: "_3DQXGvoE1SM3Kmz20of7Iz",
				mIsValid: "_28z84WGIIVp4uDMcA3-Kgw",
				mIsVisible: "_3009h778F7QI2qu6YmsxVV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return V
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/debounce.js"),
				n = s.n(r),
				d = s("./node_modules/react/index.js"),
				o = s.n(d),
				a = s("./src/lib/classNames/index.ts");
			const c = {
				leading: !0,
				trailing: !1
			};
			var l = (e, t, s, i = c) => {
					const r = {
							...c,
							...i
						},
						n = t > e ? 1 : -1;
					let d = e;
					if (e !== t) {
						for (r.leading || (d += n); d !== t;) s(d), d += n;
						r.trailing && s(d)
					} else(r.leading || r.trailing) && s(e)
				},
				u = s("./src/lib/forEachGroup/index.ts"),
				m = s("./src/reddit/models/SubredditAutocomplete/index.ts"),
				p = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				b = s.n(p);
			class h extends d.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.element = null, this.setRef = e => this.element = e, this.onMouseUp = () => {
						this.mouseDown && (this.props.disabled || this.props.onSelect(this.props.entryIndex), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onOver(this.props.entryIndex)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1, this.element && this.props.onUpdate(this.props.entryIndex, this.element)
				}
				render() {
					return o.a.createElement("div", {
						className: Object(a.a)(b.a.entry, this.props.disabled && b.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			var f = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				x = s.n(f);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var O = ({
					className: e,
					children: t,
					title: s,
					...i
				}) => o.a.createElement("div", y({
					className: Object(a.a)(x.a.dropdownSection, e)
				}, i), s && o.a.createElement("div", {
					className: x.a.title
				}, s), t),
				g = s("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				S = s("./src/reddit/helpers/name/index.ts"),
				j = s("./src/lib/lessComponent.tsx"),
				E = s("./src/reddit/components/SubredditIcon/index.tsx"),
				C = s("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				w = s("./src/reddit/icons/svgs/Link/index.tsx"),
				v = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Video/index.tsx"),
				k = s("./src/reddit/layout/row/Inline/index.tsx"),
				I = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				M = s.n(I);
			const P = [{
				type: "text",
				Icon: v.a
			}, {
				type: "images",
				Icon: C.a
			}, {
				type: "videos",
				Icon: _.a
			}, {
				type: "links",
				Icon: w.a
			}];

			function N(e) {
				const {
					allowedPostTypes: t,
					className: s
				} = e;
				return o.a.createElement(k.a, {
					className: Object(a.a)(M.a.rowStyle, s)
				}, P.map(({
					type: e,
					Icon: s
				}) => o.a.createElement("div", {
					className: Object(a.a)(M.a.iconWrapper, {
						[M.a.mDisabled]: !t[e]
					})
				}, o.a.createElement(s, null))))
			}
			var D = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				T = s.n(D);
			const F = j.a.wrapped(E.b, "subredditIcon", T.a);

			function R(e) {
				const {
					highlight: t,
					icon: s,
					title: i,
					secondaryText: r,
					item: n
				} = e, {
					allowedPostTypes: d
				} = n;
				return o.a.createElement("div", {
					className: Object(a.a)(T.a.container, {
						[T.a.mHighlight]: t
					})
				}, s, o.a.createElement("div", {
					className: T.a.main
				}, o.a.createElement("span", {
					className: T.a.title
				}, i), r && o.a.createElement("span", {
					className: T.a.secondary
				}, r)), t && d && o.a.createElement(N, {
					allowedPostTypes: d
				}))
			}
			var q = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				L = s.n(q);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}

			function B(e) {
				const {
					item: {
						name: t,
						subscribers: s
					}
				} = e, r = Object(S.d)(t), n = void 0 !== s ? i.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [i.fbt._plural(s, "number")], {
					hk: "2SvJUX"
				}) : void 0, d = o.a.createElement(g.a, {
					className: Object(a.a)(L.a.profileIcon, T.a.subredditIcon)
				});
				return o.a.createElement(R, U({
					icon: d,
					title: r,
					secondaryText: n
				}, e))
			}
			var A = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less"),
				W = s.n(A);

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}

			function G(e) {
				const {
					item: {
						primaryColor: t,
						iconUrl: s,
						name: r,
						subscribers: n
					}
				} = e, d = Object(S.c)(r), a = void 0 !== n ? i.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [i.fbt._plural(n, "number")], {
					hk: "2SvJUX"
				}) : void 0, c = o.a.createElement(F, {
					className: W.a.icon,
					iconUrl: s,
					primaryColor: t,
					redditStyle: !0
				});
				return o.a.createElement(R, z({
					icon: c,
					title: d,
					secondaryText: a
				}, e))
			}
			var H = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				K = s.n(H);
			const Q = {
				[m.a.OWN_PROFILE]: () => i.fbt._("Your profile", null, {
					hk: "1Qoy4P"
				}),
				[m.a.SUBSCRIBED_TO_SUBREDDIT]: () => i.fbt._("My communities", null, {
					hk: "2NVUpl"
				}),
				[m.a.OTHER_SUBREDDIT]: () => i.fbt._("Others", null, {
					hk: "3WQHlu"
				}),
				[m.a.MODERATED_SUBREDDIT]: () => i.fbt._("Moderated subreddits", null, {
					hk: "uZtld"
				})
			};
			class V extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.selectedEntryElement = null, this.containerElement = null, this.ignoreEntryOverEvents = !1, this.activateEntryOverEvents = n()(() => this.ignoreEntryOverEvents = !1, 100), this.setContainerRef = e => this.containerElement = e, this.onEntryUpdate = (e, t) => {
						e === this.props.focusedIndex && (this.selectedEntryElement = t)
					}, this.onScroll = () => {
						this.ignoreEntryOverEvents && this.activateEntryOverEvents()
					}, this.onEntryOver = e => {
						this.ignoreEntryOverEvents || this.props.items[e].disabled || this.props.onEntryFocus(e), this.ignoreEntryOverEvents = !1
					}
				}
				componentDidUpdate() {
					if (this.props.focusedIndex >= 0 && this.selectedEntryElement && this.containerElement) {
						const e = this.selectedEntryElement.getBoundingClientRect(),
							t = this.containerElement.getBoundingClientRect();
						(e.top < t.top || e.bottom > t.bottom) && (this.ignoreEntryOverEvents = !0, 0 === this.props.focusedIndex ? this.containerElement.scrollTop = 0 : this.selectedEntryElement.scrollIntoView(e.top < t.top)), this.props.onEntryFocus(this.props.focusedIndex)
					}
				}
				getEntryContentComponent(e, t) {
					switch (e) {
						case m.a.OWN_PROFILE:
							return B;
						default:
							return G
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t
					} = this.props, s = [];
					return this.props.showNoMatchesCaption && s.push(o.a.createElement(O, {
						key: "no-matches"
					}, o.a.createElement("div", {
						className: K.a.noMatches
					}, i.fbt._("No communities found", null, {
						hk: "4wDUHv"
					})))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (i, r, n, d) => {
						const a = [];
						l(n, d, s => {
							const i = t[s],
								r = s === e,
								n = this.getEntryContentComponent(i.type, i.name);
							n && a.push(o.a.createElement(h, {
								entryIndex: s,
								disabled: i.disabled,
								key: i.id || i.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, o.a.createElement(n, {
								highlight: r,
								item: i
							})))
						});
						const c = Q[r];
						s.push(o.a.createElement(O, {
							key: r,
							title: c && c()
						}, a))
					}), o.a.createElement("div", {
						className: Object(a.a)(K.a.container, this.props.className, {
							[K.a.mIsValid]: this.props.isValid,
							[K.a.mIsVisible]: s.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, s)
				}
			}
		},
		"./src/reddit/endpoints/page/multiredditListing.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/graphql/operations/MultiredditListing.json"),
				r = s("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(r.a)(e, {
				...i,
				variables: t
			})
		},
		"./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/env/index.ts"),
				r = s("./src/lib/sentry/index.ts"),
				n = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				d = s("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				o = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				c = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				l = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				m = s("./src/reddit/models/Post/index.ts");
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
					identity: s,
					multireddit: p
				} = e;
				if (s && (t.account = Object(u.a)(s) || null, t.preferences = Object(c.a)(s.preferences, s.interactions) || null), !p) return t;
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
							Object(i.b)() || console.warn(t), r.c.captureMessage(t);
							continue
						}
						const s = e;
						t.postIds.push(s.id);
						const {
							post: d,
							crosspost: c
						} = s && Object(a.a)(s);
						t.posts[d.id] = d, c && (t.posts[c.id] = c), Object(m.i)(s) || Object(m.h)(s) || (s.authorFlair && (t.postFlair[d.belongsTo.id] || (t.postFlair[d.belongsTo.id] = {}), t.postFlair[d.belongsTo.id][d.author] = Object(n.a)(s.authorFlair)[0]), Object(m.l)(s) && (t.subreddits[s.subreddit.id] || (t.subreddits[s.subreddit.id] = Object(l.a)(s.subreddit)), t.postFlair[s.subreddit.id] || (t.postFlair[s.subreddit.id] = Object(o.a)(s.subreddit))))
					}
				} else t.pageInfo = {
					endCursor: null,
					hasNextPage: !1,
					hasPreviousPage: !1,
					startCursor: null
				};
				t.postIds.length && (t.dist = t.postIds.length), t.pageInfo.hasNextPage && (t.token = t.pageInfo.endCursor || "");
				const {
					multireddits: h,
					multiredditsByUser: f,
					profiles: x,
					subreddits: y
				} = Object(d.a)(p);
				return {
					...t,
					multireddits: h,
					multiredditsByUser: f,
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
		"./src/reddit/helpers/trackers/idCard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			}));
			var i = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts"),
				n = s("./src/reddit/selectors/widgets.ts"),
				d = s("./src/telemetry/index.ts");
			const o = e => {
					Object(d.a)({
						...r.defaults(e),
						action: i.c.CLICK,
						noun: "multi_detail",
						source: "id_card"
					})
				},
				a = (e, t, s) => {
					const {
						subreddit: o,
						profile: a
					} = Object(n.b)(e, t);
					Object(d.a)({
						...r.defaults(e),
						action: i.c.CLICK,
						noun: "multi_detail_subreddit",
						profile: a,
						source: "id_card",
						subreddit: {
							...o,
							categoryName: s
						}
					})
				},
				c = e => t => ({
					action: i.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: r.subreddit(t)
				})
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				o = s.n(d);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/TextPost/index.m.less"),
				o = s.n(d);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				transform: "translate(3, 4)"
			}, r.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				n = s.n(r);
			t.a = i.a.div("rightAligned", n.a)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Multireddit~reddit-components-AdHocMultiredditSidebar.b9982f2641e2a80c49f9.js.map