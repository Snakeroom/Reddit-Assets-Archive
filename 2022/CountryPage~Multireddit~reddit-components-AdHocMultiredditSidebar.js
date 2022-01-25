// https://www.redditstatic.com/desktop2x/CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar.aa18c88cdda6e2daff00.js
// Retrieved at 1/25/2022, 1:40:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"], {
		"./node_modules/lodash/take.js": function(e, t, i) {
			var s = i("./node_modules/lodash/_baseSlice.js"),
				r = i("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, i) {
				return e && e.length ? (t = i || void 0 === t ? 1 : r(t), s(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			const s = e => e;

			function r(e, t, i) {
				const [r, n] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: d = s
				} = t || {};
				let {
					start: o = 0,
					end: a = r
				} = t || {};
				if ((o = o < 0 ? 0 : o) >= (a = a > r ? r : a)) return;
				let c = n(o),
					l = d(c, o),
					u = o;
				for (let s = o + 1; s < a; s++) {
					const e = n(s),
						t = d(e, s);
					if (t !== l) {
						if (!1 === i(c, l, u, s)) return;
						l = t, u = s, c = e
					}
				}
				i(c, l, u, a)
			}
		},
		"./src/reddit/actions/multireddit/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "morePostsFailed", (function() {
				return R
			})), i.d(t, "morePostsLoaded", (function() {
				return q
			})), i.d(t, "morePostsPending", (function() {
				return L
			})), i.d(t, "moreOfMyMultiRequested", (function() {
				return U
			})), i.d(t, "myMultiredditsPending", (function() {
				return B
			})), i.d(t, "myMultiredditsReceived", (function() {
				return A
			})), i.d(t, "myMultiredditsRequested", (function() {
				return z
			})), i.d(t, "createFailure", (function() {
				return W
			})), i.d(t, "createPending", (function() {
				return G
			})), i.d(t, "createSuccess", (function() {
				return H
			})), i.d(t, "createRequested", (function() {
				return Q
			})), i.d(t, "reloadCurrentMultiredditFeedRequested", (function() {
				return V
			})), i.d(t, "duplicateFailure", (function() {
				return K
			})), i.d(t, "duplicatePending", (function() {
				return Z
			})), i.d(t, "duplicateSuccess", (function() {
				return X
			})), i.d(t, "duplicateRequested", (function() {
				return Y
			})), i.d(t, "addSubredditPending", (function() {
				return $
			})), i.d(t, "addSubredditSuccess", (function() {
				return J
			})), i.d(t, "addSubredditFailure", (function() {
				return ee
			})), i.d(t, "addSubredditRequested", (function() {
				return te
			})), i.d(t, "removeSubredditPending", (function() {
				return ie
			})), i.d(t, "removeSubredditSuccess", (function() {
				return se
			})), i.d(t, "removeSubredditFailure", (function() {
				return re
			})), i.d(t, "removeSubredditRequested", (function() {
				return ne
			})), i.d(t, "deleteFailure", (function() {
				return de
			})), i.d(t, "deletePending", (function() {
				return oe
			})), i.d(t, "deleteSuccess", (function() {
				return ae
			})), i.d(t, "deleteRequested", (function() {
				return ce
			})), i.d(t, "editFailure", (function() {
				return le
			})), i.d(t, "editPending", (function() {
				return ue
			})), i.d(t, "editSuccess", (function() {
				return me
			})), i.d(t, "editRequested", (function() {
				return be
			})), i.d(t, "subredditRecommendationsFailure", (function() {
				return pe
			})), i.d(t, "subredditRecommendationsPending", (function() {
				return he
			})), i.d(t, "subredditRecommendationsSuccess", (function() {
				return fe
			})), i.d(t, "recommendationsRequested", (function() {
				return xe
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/lodash/pick.js"),
				n = i.n(r),
				d = i("./node_modules/react-router-redux/es/index.js"),
				o = i("./src/lib/constants/index.ts"),
				a = i("./src/lib/linkMatchers/customLinks.ts"),
				c = i("./src/lib/makeActionCreator/index.ts"),
				l = i("./src/lib/makeListingKey/index.ts"),
				u = i("./src/reddit/actions/modal.ts"),
				m = i("./src/reddit/actions/pages/multireddit/index.ts"),
				b = i("./src/reddit/actions/toaster.ts"),
				p = i("./src/reddit/constants/parameters.ts"),
				h = i("./src/lib/makeApiRequest/index.ts"),
				f = i("./src/lib/omitHeaders/index.ts"),
				x = i("./src/reddit/constants/headers.ts"),
				y = i("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				O = i("./src/lib/makeGqlRequest/index.ts"),
				g = i("./src/redditGQL/operations/AllUserMultireddits.json"),
				S = i("./src/reddit/endpoints/page/multiredditListing.ts"),
				j = i("./src/reddit/endpoints/subreddit/recommendations.ts"),
				E = i("./src/reddit/helpers/filterListingResponse/index.ts"),
				C = i("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				w = i("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				v = i("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = e => {
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
					const s = e.subreddits.map(e => {
							const t = e.data,
								{
									name: i,
									display_name: s
								} = t;
							return {
								id: i,
								displayName: s.toLowerCase()
							}
						}).sort((e, t) => e.displayName.localeCompare(t.displayName)),
						r = s.filter(e => !e.displayName.startsWith(o.ic)).map(e => e.id),
						n = s.filter(e => e.displayName.startsWith(o.ic)).map(e => e.id);
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
						subredditIds: r,
						url: e.path.toLowerCase(),
						visibility: e.visibility
					}
				},
				k = i("./src/reddit/models/Multireddit/index.ts"),
				I = i("./src/reddit/models/Toast/index.ts"),
				P = i("./src/reddit/selectors/multireddit.ts"),
				M = i("./src/reddit/selectors/platform.ts"),
				N = i("./src/reddit/selectors/subreddit.ts"),
				D = i("./src/reddit/selectors/user.ts"),
				T = i("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				F = i("./src/reddit/actions/multireddit/constants.ts");
			const R = Object(c.a)(F.q),
				q = Object(c.a)(F.r),
				L = Object(c.a)(F.s),
				U = e => async (t, i, s) => {
					const {
						gqlContext: r
					} = s, {
						sort: n = o.W.HOT,
						multiredditName: d,
						username: a
					} = e, c = i(), u = c.platform.currentPage, m = u ? u.queryParams : {}, b = Object(P.d)(c, {
						multiredditName: d,
						username: a
					}), p = Object(l.a)(b.url, n, m), h = c.listings.postOrder.loadMore[p];
					if (!h) return;
					const f = c.listings.postOrder.api.pending[p],
						x = c.listings.postOrder.fetchedTokens,
						y = x[p] && x[p][h.token] || !1;
					if (f || y) return;
					t(L({
						key: p,
						fetchedToken: h.token
					}));
					const O = b.url.replace(/\/$/, ""),
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
						key: p,
						meta: c.meta,
						..._,
						...Object(E.a)(c, p, _),
						multiredditsModelsState: c.multireddits.models
					})) : t(R({
						error: {
							type: o.I.NOT_FOUND_ERROR
						},
						fetchedToken: h.token,
						key: p,
						...C.body,
						...Object(E.a)(c, p, _)
					}))
				}, B = Object(c.a)(F.t), A = Object(c.a)(F.u), z = (e, t = !1) => async (i, s, {
					apiContext: r,
					gqlContext: n
				}) => {
					const d = s();
					if (!Object(D.k)(d)) return;
					if (!e && Object(P.h)(d) || Object(P.i)(d)) return;
					i(B());
					const o = await ((e, t) => Object(O.a)(e, {
						...g,
						variables: t
					}))(n(), {
						includeSources: t
					});
					if (o.ok) {
						const e = o.body.data.identity.allMultireddits.edges.map(e => e.node),
							t = Object(C.b)(e);
						i(A({
							...t,
							multiredditsModelsState: d.multireddits.models
						}))
					}
				}, W = Object(c.a)(F.e), G = Object(c.a)(F.f), H = Object(c.a)(F.g), Q = ({
					description: e,
					displayName: t,
					shouldNavigate: i
				}) => async (r, n, {
					apiContext: a
				}) => {
					const c = n(),
						l = Object(D.k)(c);
					if (!l) return;
					r(G());
					const m = await ((e, t, i) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi`),
						data: {
							model: JSON.stringify({
								description_md: i,
								display_name: t,
								visibility: "private",
								subreddits: []
							})
						},
						method: o.jb.POST
					}))(a(), t, e);
					if (m.ok) {
						const {
							id: e
						} = l;
						if (await r(H({
								multireddit: _(m.body.data),
								multiredditsModelsState: c.multireddits.models,
								userId: e
							})), i) {
							r(Object(u.f)());
							const e = m.body.data.path.toLowerCase();
							await r(Object(d.b)(e))
						}
						r(Object(b.f)({
							text: s.fbt._("Custom feed created!", null, {
								hk: "258cY9"
							})
						}))
					} else r(W(m.error))
				}, V = () => async (e, t, {
					apiContext: i
				}) => {
					const s = t(),
						r = Object(D.k)(s),
						d = Object(M.i)(s) ? Object(M.m)(s) : Object(M.b)(s),
						a = d && d.routeMatch && d.routeMatch.match;
					if (!a) return;
					const c = a.params,
						u = c.sort || o.W.HOT,
						{
							multiredditName: b,
							username: h
						} = c;
					if (!b) return;
					const f = Object(k.h)((h || r && r.displayText || "").toLowerCase(), b.toLowerCase()),
						{
							queryParams: x
						} = a,
						y = Object(l.a)(f, u, x),
						O = p.B in x && x[p.B].toUpperCase() || "",
						g = o.gc[O] || !1,
						S = Object(D.k)(s);
					(h || S && S.displayText) && await e(Object(m.multiredditFeedRequested)(y, (h || S.displayText).toLowerCase(), b.toLowerCase(), {
						...n()(x, p.m),
						...n()(x, p.l),
						sort: u,
						t: Object(T.a)(u, g)
					}))
				}, K = Object(c.a)(F.k), Z = Object(c.a)(F.l), X = Object(c.a)(F.m), Y = ({
					description: e,
					displayName: t,
					fromName: i,
					fromUsername: r
				}) => async (n, a, {
					apiContext: c
				}) => {
					const l = a(),
						m = Object(D.k)(l);
					if (!m || !m.displayText) return;
					const p = Object(k.h)((r || m.displayText).toLowerCase(), i.toLowerCase());
					n(Z());
					const O = await ((e, t) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi/copy`),
						data: {
							description_md: t.description,
							display_name: t.displayName,
							expand_srs: !0,
							from: t.from
						},
						method: o.jb.POST
					}))(c(), {
						from: p,
						displayName: t,
						description: e
					});
					if (O.ok) {
						const e = _(O.body.data);
						n(Object(u.f)()), n(X({
							multireddit: e,
							multiredditsModelsState: l.multireddits.models,
							userId: m.id
						})), n(Object(b.f)({
							text: s.fbt._("Custom feed duplicated!", null, {
								hk: "2u48X"
							}),
							buttonText: s.fbt._("Go there", null, {
								hk: "4sXZMm"
							}),
							buttonAction: Object(d.b)(e.url)
						}))
					} else n(K(O.error)), n(Object(b.f)({
						text: s.fbt._("Something went wrong duplicating {multiName}", [s.fbt._param("multiName", i)], {
							hk: "4bzN2D"
						})
					}))
				}, $ = Object(c.a)(F.b), J = Object(c.a)(F.c), ee = Object(c.a)(F.a), te = ({
					communityInfo: e,
					identifier: t,
					multiredditNames: i
				}) => async (r, n, {
					apiContext: d
				}) => {
					const c = n(),
						l = Object(D.k)(c);
					if (!l || c.multireddits.api.addSubreddit.pending) return;
					r($({
						name: t.name
					}));
					const {
						displayText: m
					} = l;
					if (!m) return;
					const p = i.map(e => `/user/${m.toLowerCase()}/m/${e.toLowerCase()}`).join(","),
						O = `${"profile"===t.type?o.ic:""}${t.name}`,
						g = await ((e, t, i) => Object(h.a)(Object(f.a)(e, [x.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/multi/bulk_add/r/${t}`),
							data: {
								paths: i
							},
							method: o.jb.PUT
						}))(d(), O, p);
					if (g.ok) {
						const n = Object(N.I)(c, {
								identifier: t
							}) || e && e.id || "",
							d = i.map(e => Object(k.h)(m, e));
						r(Object(u.f)()), r(Object(b.f)({
							text: s.fbt._({
								"*": "Successfully added {communityName} to {number} custom feeds!",
								_1: "Successfully added {communityName} to 1 custom feed!"
							}, [s.fbt._param("communityName", `${"subreddit"===t.type?a.d.subreddit:a.d.profile}${t.name}`), s.fbt._plural(i.length, "number")], {
								hk: "9EXsM"
							})
						})), await r(J({
							communityInfo: e,
							id: n,
							multipaths: d,
							type: t.type
						})), 1 === i.length && await r(V())
					} else {
						r(ee(g.error));
						let e = s.fbt._("Sorry, something went wrong adding {subredditName}.", [s.fbt._param("subredditName", t.name)], {
							hk: "ERdWO"
						});
						g.body && (g.body.reason === F.d.TooManySubreddits ? e = s.fbt._("Maximum communities reached", null, {
							hk: "2eguyW"
						}) : g.body.reason === F.d.InvalidSrQuarantine && (e = s.fbt._("{communityname} is invalid because it is quarantined", [s.fbt._param("communityname", `${"subreddit"===t.type?a.d.subreddit:a.d.profile}${t.name}`)], {
							hk: "407xmS"
						}))), r(Object(b.f)({
							text: e,
							kind: I.b.Error
						}))
					}
				}, ie = Object(c.a)(F.w), se = Object(c.a)(F.x), re = Object(c.a)(F.v), ne = ({
					id: e,
					multiredditName: t,
					name: i,
					type: r
				}) => async (n, d, {
					apiContext: a
				}) => {
					const c = d(),
						l = Object(D.k)(c);
					if (!l || !l.displayText || c.multireddits.api.removeSubreddit.pending) return;
					n(ie({
						id: e
					}));
					const {
						displayText: m
					} = l, p = Object(k.h)(m, t), O = `${"profile"===r?o.ic:""}${i}`, g = await ((e, t, i) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${i}r/${t}`),
						method: o.jb.DELETE
					}))(a(), O, p);
					g.ok ? (n(Object(u.f)()), n(se({
						id: e,
						multipath: p,
						type: r
					})), n(Object(b.f)({
						text: s.fbt._("{subredditname} removed from your custom feed!", [s.fbt._param("subredditname", i)], {
							hk: "uaWNe"
						}),
						buttonText: s.fbt._("undo", null, {
							hk: "3HH7IT"
						}),
						buttonAction: te({
							identifier: {
								name: i,
								type: r
							},
							multiredditNames: [t]
						})
					})), n(V())) : (n(re(g.error)), n(Object(b.f)({
						text: s.fbt._("Sorry, something went wrong removing {subredditName}.", [s.fbt._param("subredditName", i)], {
							hk: "1E1rKm"
						})
					})))
				}, de = Object(c.a)(F.h), oe = Object(c.a)(F.i), ae = Object(c.a)(F.j), ce = e => async (t, i, {
					apiContext: r
				}) => {
					const n = i();
					if (!Object(D.k)(n)) return;
					t(oe());
					const a = await ((e, t) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${t}`),
						method: o.jb.DELETE
					}))(r(), e);
					a.ok ? (await t(ae(e)), t(Object(u.f)()), await t(Object(d.b)("/")), t(Object(b.f)({
						text: s.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(de(a.error))
				}, le = Object(c.a)(F.n), ue = Object(c.a)(F.o), me = Object(c.a)(F.p), be = ({
					description: e,
					displayText: t,
					multipath: i,
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
						displayText: i,
						multipath: s,
						visibility: r
					}) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${s}`),
						data: {
							model: JSON.stringify({
								description_md: t,
								display_name: i,
								visibility: r
							}),
							expand_srs: !0
						},
						method: o.jb.PUT
					}))({
						context: a(),
						description: e,
						displayText: t,
						multipath: i,
						visibility: r
					});
					l.ok ? (await n(me(_(l.body.data))), n(Object(u.f)()), n(Object(b.f)({
						text: s.fbt._("Custom feed updated!", null, {
							hk: "39R30f"
						})
					}))) : (n(le(l.error)), n(Object(b.f)({
						kind: I.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "1Y6lli"
						})
					})))
				}, pe = Object(c.a)(F.z), he = Object(c.a)(F.A), fe = Object(c.a)(F.B), xe = ({
					multiredditName: e,
					username: t,
					toExcludeNames: i
				}) => async (s, r, {
					gqlContext: n
				}) => {
					const d = r(),
						o = Object(D.k)(d);
					if (!(t || o && o.displayText)) return;
					const a = Object(k.h)(t || o.displayText, e),
						c = d.multireddits.models[a];
					if (!c || !c.subredditIds) return;
					s(he());
					const l = i && i.reduce((e, t) => {
							const i = Object(N.C)(d, t) || Object(N.D)(d, t);
							return i ? [...e, i] : e
						}, []),
						u = await Object(j.a)(n(), {
							count: F.y,
							subredditIds: c.subredditIds,
							toExclude: l
						});
					if (u.ok) {
						const {
							data: e
						} = u.body;
						s(fe({
							multipath: a,
							subreddits: Object(v.b)(e)
						}))
					} else s(pe(u.error))
				}
		},
		"./src/reddit/actions/pages/multireddit/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "multiredditFeedPending", (function() {
				return M
			})), i.d(t, "multiredditFeedLoaded", (function() {
				return N
			})), i.d(t, "multiredditFeedFailed", (function() {
				return D
			})), i.d(t, "multiredditFeedRequested", (function() {
				return T
			})), i.d(t, "multiredditRequested", (function() {
				return F
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/lodash/pick.js"),
				n = i.n(r),
				d = i("./node_modules/react-router-redux/es/index.js"),
				o = i("./src/lib/addQueryParams/index.ts"),
				a = i("./src/reddit/actions/multireddit/index.ts"),
				c = i("./src/reddit/endpoints/page/multiredditListing.ts"),
				l = i("./src/lib/constants/index.ts"),
				u = i("./src/reddit/actions/platform.ts"),
				m = i("./src/reddit/actions/toaster.ts"),
				b = i("./src/reddit/actions/users.ts"),
				p = i("./src/reddit/constants/parameters.ts"),
				h = i("./src/reddit/constants/postLayout.ts"),
				f = i("./src/reddit/contexts/PageLayer/index.tsx"),
				x = i("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				y = i("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				O = i("./src/reddit/models/Multireddit/index.ts"),
				g = i("./src/reddit/models/Toast/index.ts"),
				S = i("./src/reddit/models/User/index.ts"),
				j = i("./src/reddit/selectors/multireddit.ts"),
				E = i("./src/reddit/selectors/user.ts"),
				C = i("./src/lib/makeActionCreator/index.ts"),
				w = i("./src/lib/makeListingKey/index.ts"),
				v = i("./src/reddit/actions/ads/index.ts"),
				_ = i("./src/reddit/helpers/canonicalUrls.ts"),
				k = i("./src/reddit/helpers/timeApiRoute/index.ts"),
				I = i("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				P = i("./src/reddit/actions/pages/multireddit/constants.ts");
			const M = Object(C.a)(P.c),
				N = Object(C.a)(P.b),
				D = Object(C.a)(P.a),
				T = (e, t, i, r, n) => async (d, o, u) => {
					const {
						gqlContext: b
					} = u, p = o();
					if (p.listings.postOrder.api.pending[e]) return;
					d(M({
						key: e
					})), r.layout = h.e[Object(f.R)(p, {})];
					const x = {
							path: Object(O.h)(t, i).replace(/\/$/, ""),
							includeIdentity: !0,
							includeSources: !0,
							sort: r.sort ? r.sort.toUpperCase() : void 0,
							range: r.t ? r.t.toUpperCase() : void 0
						},
						S = await Object(k.a)("multireddit", () => Object(c.a)(b(), x)),
						{
							data: j
						} = S.body,
						C = `error-${e}`;
					if (S.ok && j) {
						const s = Object(y.a)(j);
						if (!j.multireddit) return n && d(m.g(C)), void d(D({
							...s,
							error: {
								type: l.I.NOT_FOUND_ERROR
							},
							key: e
						}));
						d(N({
							key: e,
							meta: p.meta,
							...s,
							account: s.account || Object(E.k)(p),
							multiredditsModelsState: p.multireddits.models
						})), n && d(m.g(C)), d(Object(a.recommendationsRequested)({
							multiredditName: i,
							username: t
						})), window.addEventListener("load", () => {
							d(Object(v.b)(I.a.MULTIREDDIT))
						})
					} else n && d(m.f({
						id: C,
						kind: g.b.Error,
						text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: T(e, t, i, r, n)
					}))
				}, F = (e, t) => async (i, s) => {
					const {
						multiredditName: r
					} = e.params;
					let {
						username: a
					} = e.params;
					if (!a) {
						let t = s();
						if (t.user.session && t.user.session.unsafeLoggedOut) return void i(Object(d.c)("/"));
						!t.user.account && t.user.session && await i(b.t()), t = s();
						const {
							account: n
						} = t.user;
						if (!n) return void i(Object(d.c)("/"));
						let c = `/user/${a=Object(S.e)(n)}/m/${r}`;
						const {
							sort: l
						} = e.params;
						return c += l ? `/${l}` : "", void i(Object(d.c)(Object(o.a)(c, e.queryParams)))
					}
					const {
						sort: c = l.W.HOT
					} = e.params, m = {
						multiredditName: r,
						username: a
					}, h = s();
					a || (a = h.user.account ? Object(S.e)(h.user.account) : "");
					const f = Object(O.h)(a, r),
						y = Object(w.a)(f, c, e.queryParams),
						g = h.listings.postOrder.ids[y],
						E = h.listings.postOrder.api.error[y],
						C = h.listings.postOrder.api.pending[y],
						k = p.B in e.queryParams && e.queryParams[p.B].toUpperCase() || "",
						P = k in l.gc && l.gc[k];
					if (C || g && !E && !t) return void(g && (i(u.m({
						title: Object(j.f)(s(), m)
					})), h.sidebarPromotedPosts.firstFetch || i(Object(v.b)(I.a.MULTIREDDIT))));
					await i(T(y, a, r, {
						...n()(e.queryParams, p.m),
						...n()(e.queryParams, p.l),
						sort: c,
						t: Object(x.a)(c, P)
					}, !0));
					const M = s();
					Object(j.d)(M, m) && i(u.m({
						title: Object(j.f)(s(), m)
					})), Object(_.c)(M, i, e)
				}
		},
		"./src/reddit/actions/subredditAutocomplete/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return b
			}));
			var s = i("./src/lib/makeActionCreator/index.ts"),
				r = i("./src/lib/makeGqlRequest/index.ts"),
				n = i("./src/redditGQL/operations/SubredditTypeaheadSearch.json"),
				d = i("./src/reddit/helpers/graphql/normalizeAllowedPostTypesFromGql/index.ts"),
				o = i("./src/reddit/helpers/name/index.ts"),
				a = i("./src/reddit/selectors/subredditAutocomplete.ts"),
				c = i("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const l = Object(s.a)(c.c),
				u = Object(s.a)(c.b),
				m = Object(s.a)(c.a),
				b = (e, t = !1) => async (i, s, {
					gqlContext: c
				}) => {
					const b = Object(o.g)(e);
					if (!b) return;
					const p = s(),
						h = p.subredditAutocomplete;
					if (h.api.pending[b] || h.models[b]) return;
					if (Object(a.b)(p, {
							substring: b
						})) return;
					i(l({
						key: b
					}));
					const f = await ((e, t) => Object(r.a)(e, {
						...n,
						variables: t
					}))(c(), {
						query: b,
						includeNsfw: t
					});
					if (f.ok) {
						const e = f.body.data.subredditTypeahead.subreddits.edges.map(e => (({
							allowedPostTypes: e,
							id: t,
							isCrosspostDestination: i,
							isNsfw: s,
							name: r,
							styles: n,
							subscribersCount: o
						}) => ({
							allowedPostTypes: Object(d.a)(e),
							communityIcon: n && n.icon || "",
							icon: n && n.legacyIcon && n.legacyIcon.url || "",
							id: t,
							isCrosspostDestination: i,
							isNsfw: s,
							name: r,
							primaryColor: n && n.primaryColor || "",
							subscribers: o
						}))(e.node));
						i(u({
							key: b,
							subreddits: e
						}))
					} else i(m({
						key: b,
						error: f.error
					}))
				}
		},
		"./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less": function(e, t, i) {
			e.exports = {
				headerButton: "_3aSsYcE4XPX93_RpWvd-4s"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, i) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, i) {
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
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return C
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/react/index.js"),
				n = i.n(r),
				d = i("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = i("./src/reddit/controls/Button/index.tsx"),
				a = i("./node_modules/react-redux/es/index.js"),
				c = i("./node_modules/reselect/es/index.js"),
				l = i("./src/reddit/components/SubredditIcon/index.tsx"),
				u = i("./src/reddit/selectors/subreddit.ts"),
				m = i("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				b = i.n(m),
				p = i("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(l.b, "SubredditIcon", b.a),
				f = p.a.span("Label", b.a),
				x = Object(c.c)({
					subredditOrProfile: u.J
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
					subredditsOrProfilesIds: i
				}) => {
					const s = i.map(t => n.a.createElement(y, {
						children: e,
						key: t.id,
						identifier: t
					}));
					return n.a.createElement("div", {
						className: t
					}, s)
				},
				g = i("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				S = i.n(g);
			const j = p.a.div("CommunityCount", S.a),
				E = p.a.wrapped(O, "SubredditsOrProfiles", S.a),
				C = p.a.wrapped(d.a, "SidebarSubreddit", S.a),
				w = p.a.wrapped(d.a, "ModalSubreddit", S.a);
			var v;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(v || (v = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: i,
					onSeeMoreDetails: r,
					subredditCategory: d = {
						name: s.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, a = t ? C : w, c = i.length, l = t && i.length > 4;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(j, null, s.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [s.fbt._plural(c, "number"), s.fbt._param("category", d.name)], {
					hk: "33iWe4"
				})), c > 0 && n.a.createElement(E, {
					subredditsOrProfilesIds: t ? i.slice(0, 4) : i
				}, (t, i) => n.a.createElement(a, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, i)), c > 0 && l && n.a.createElement(o.r, {
					onClick: r
				}, s.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/MultiredditInfo/index.m.less": function(e, t, i) {
			e.exports = {
				noSubredditsText: "EOCYiZiqAa39tAXUCAqmZ"
			}
		},
		"./src/reddit/components/MultiredditManageWidget/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/MultiredditSidebar/index.m.less": function(e, t, i) {
			e.exports = {
				detailsContainer: "_2o2cN1Q1R544f7UCxJHRTH",
				modalContainer: "_2qY6j7wtHkEaoEG4g5F53z",
				closeBtn: "_3NmSyduxNX74yaC9kmkYgh",
				modalMain: "_1hG7UoCi1oRW1UnsvoewhT",
				placeholder: "_1wCkMb-wQyvSVuqZWNjIEZ"
			}
		},
		"./src/reddit/components/MultiredditSidebar/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/lodash/times.js"),
				n = i.n(r),
				d = i("./node_modules/react/index.js"),
				o = i.n(d),
				a = i("./node_modules/react-redux/es/index.js"),
				c = i("./node_modules/reselect/es/index.js"),
				l = i("./src/higherOrderComponents/asModal/index.tsx"),
				u = i("./src/lib/classNames/index.ts"),
				m = i("./src/reddit/components/ModalStyledComponents/index.tsx"),
				b = i("./src/reddit/actions/subscription/index.ts"),
				p = i("./src/reddit/components/OverflowMenu/index.tsx"),
				h = i("./src/reddit/controls/Dropdown/Row.tsx"),
				f = i("./src/reddit/components/MultiredditInfo/MultiredditOverflowMenu/index.m.less"),
				x = i.n(f);
			var y = Object(a.b)(null, e => ({
					subscribe: t => e(Object(b.d)(t, !0))
				}))(e => {
					const {
						communities: t,
						subscribe: i
					} = e, r = t.filter(e => !e.isSubscribed);
					return r.length ? o.a.createElement(p.b, {
						className: x.a.headerButton,
						dropdownId: "MULTIREDDIT_INFO_DROPDOWN_ID",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(h.b, {
						displayText: s.fbt._("Join all communities", null, {
							hk: "1E2I53"
						}),
						onClick: () => i(r)
					})) : null
				}),
				O = i("./src/reddit/components/SidebarExpandableList/index.tsx"),
				g = i("./src/reddit/components/TrackingHelper/index.tsx"),
				S = i("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				j = i("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				E = i("./src/reddit/selectors/multireddit.ts"),
				C = i("./src/reddit/components/MultiredditInfo/index.m.less"),
				w = i.n(C);
			const {
				fbt: v
			} = i("./node_modules/fbt/lib/FbtPublic.js"), _ = Object(c.c)({
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
			var P = Object(g.c)(k(e => {
					const {
						communities: t,
						titleText: i
					} = e;
					return t.length ? o.a.createElement(O.a, {
						items: t,
						minimizedLength: 5,
						title: i,
						headerButton: o.a.createElement(y, {
							communities: t
						}),
						renderItem: I
					}) : o.a.createElement(j.a, {
						title: i
					}, o.a.createElement("div", {
						className: w.a.noSubredditsText
					}, v._("This custom feed does not yet contain any communities.", null, {
						hk: "35QJZi"
					})))
				})),
				M = i("./src/higherOrderComponents/sizeMe.tsx"),
				N = i("./src/reddit/components/Flair/index.tsx"),
				D = i("./src/reddit/components/HumanDate/index.tsx"),
				T = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				F = i("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				R = i("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			var L = Object(T.a)(e => o.a.createElement(R.a, q({
					style: {
						color: Object(F.a)(e).post
					}
				}, e))),
				U = i("./src/reddit/constants/posts.ts"),
				B = i("./src/reddit/controls/Button/index.tsx"),
				A = i("./src/reddit/models/Multireddit/index.ts"),
				z = i("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				W = i("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less"),
				G = i.n(W),
				H = i("./src/lib/lessComponent.tsx");
			const Q = H.a.div("SidebarTopSpacer", G.a),
				V = H.a.div("ModalTopSpacer", G.a),
				K = H.a.div("SidebarTitleContainer", G.a),
				Z = H.a.div("SidebarTitle", G.a),
				X = H.a.wrapped(N.a, "SidebarFlair", G.a),
				Y = H.a.div("Attributon", G.a),
				$ = ({
					children: e,
					className: t
				}) => o.a.createElement(L, {
					className: t,
					html: e
				}),
				J = Object(M.a)(({
					children: e,
					onSeeMoreDetails: t,
					size: i
				}) => {
					const r = !i || "number" != typeof i.height || i.height > 152;
					return o.a.createElement("div", null, o.a.createElement($, {
						className: Object(u.a)(G.a.FadingDescription, {
							[G.a.shouldFade]: r
						})
					}, e), r && o.a.createElement(B.r, {
						onClick: t
					}, s.fbt._("Read more", null, {
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
						multireddit: i,
						onSeeMoreDetails: r,
						subredditCategory: n
					} = e, d = t === ee.Sidebar, [a, c] = d ? [Q, Y] : [V, Y], l = Object(A.f)(i) ? () => o.a.createElement(a, null, d && o.a.createElement(K, null, o.a.createElement(Z, null, i.displayText), i.visibility === A.e.Private && o.a.createElement(X, {
						text: s.fbt._("Private", null, {
							hk: "4Av1zq"
						})
					}), i.visibility === A.e.Hidden && o.a.createElement(X, {
						text: s.fbt._("Hidden", null, {
							hk: "4tUfi0"
						})
					})), o.a.createElement(c, null, s.fbt._("Curated by u/ {username}", [s.fbt._param("username", Object(A.i)(i.url))], {
						hk: "1AxWQt"
					}), "· ", o.a.createElement(D.d, {
						seconds: i.created
					}))) : () => null, m = Object(A.f)(i) && i.description ? () => o.a.createElement(a, null, d ? o.a.createElement(J, {
						onSeeMoreDetails: r
					}, i.description) : o.a.createElement(L, {
						html: i.description
					})) : () => null, b = [...i.subredditIds && i.subredditIds.map(e => ({
						id: e,
						type: U.a.SUBREDDIT
					})) || [], ...i.profileIds && i.profileIds.map(e => ({
						id: e,
						type: U.a.PROFILE
					})) || []];
					return o.a.createElement("div", {
						className: Object(u.a)(G.a.Component, e.className)
					}, l(), m(), o.a.createElement(z.b, {
						isSidebar: d,
						onSeeMoreDetails: r,
						subredditCategory: n,
						subredditsOrProfilesIds: b
					}))
				},
				ie = i("./node_modules/lodash/debounce.js"),
				se = i.n(ie),
				re = i("./node_modules/lodash/noop.js"),
				ne = i.n(re),
				de = i("./src/lib/constants/index.ts"),
				oe = i("./src/reddit/actions/multireddit/index.ts"),
				ae = i("./src/reddit/actions/subredditAutocomplete/index.ts"),
				ce = i("./src/reddit/actions/toaster.ts"),
				le = i("./src/reddit/constants/keycodes.ts"),
				ue = i("./src/reddit/controls/LoadingIcon/index.tsx"),
				me = i("./src/reddit/helpers/name/index.ts"),
				be = i("./src/reddit/helpers/widgets/index.tsx"),
				pe = i("./src/reddit/icons/svgs/Close/index.tsx"),
				he = i("./src/reddit/icons/svgs/Search/index.tsx"),
				fe = i("./src/reddit/models/Toast/index.ts"),
				xe = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				ye = i("./src/reddit/selectors/subredditAutocomplete.ts");
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
						items: i,
						isAutocompletePending: s
					} = this.props;
					return o.a.createElement(xe.a, {
						className: e,
						focusedIndex: t,
						items: i,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						showNoMatchesCaption: !s && 0 === i.length,
						isValid: !0
					})
				}
			}
			var Se = Object(a.b)(Oe)(ge),
				je = i("./src/reddit/components/MultiredditManageWidget/index.m.less"),
				Ee = i.n(je);

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
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
					addSubredditRequested: (i, s) => {
						const r = s ? Object(be.a)(s) : void 0;
						e(Object(oe.addSubredditRequested)({
							communityInfo: r,
							identifier: i,
							multiredditNames: [t.name]
						}))
					},
					errorToast: t => e(Object(ce.f)({
						text: t,
						kind: fe.b.Error
					})),
					removeSubredditRequested: ({
						id: i,
						name: s,
						type: r
					}) => i && e(Object(oe.removeSubredditRequested)({
						id: i,
						multiredditName: t.name,
						name: s,
						type: r
					})),
					subredditAutocompleteRequested: i => e(Object(ae.a)(i, t.isNSFW))
				})),
				Pe = {
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
			class Me extends o.a.Component {
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
							...Pe,
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
										i = t.startsWith(de.ic) ? "profile" : "subreddit",
										s = "profile" === i ? t.substring(2) : t;
									this.props.addSubredditRequested({
										name: s,
										type: i
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
						...Pe,
						memoizedShortList: e.communityInformations.slice(0, ve)
					}, this.onQueryUpdated = se()(this.onQueryUpdated, _e)
				}
				componentDidUpdate(e) {
					!this.props.addSubredditPending && e.addSubredditPending && (this.props.addSubredditError ? this.setState({
						isAddError: this.props.addSubredditError
					}) : this.setState(Pe)), this.props.communityInformations.length !== e.communityInformations.length && this.setState({
						memoizedShortList: this.props.communityInformations.slice(0, ve)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							communityInformations: t,
							multireddit: i,
							removePending: r
						},
						state: {
							choice: n,
							focusedIndex: d,
							isAddError: a,
							isChoiceSelected: c,
							isDropdownOpen: l,
							isListExpanded: m,
							memoizedShortList: b,
							query: p
						}
					} = this;
					return o.a.createElement(j.a, {
						className: Ee.a.widgetContainer,
						headerButton: o.a.createElement(y, {
							communities: t
						}),
						title: s.fbt._("manage communities", null, {
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
					})) : o.a.createElement(he.a, {
						className: Ee.a.searchIcon
					}), o.a.createElement("input", {
						className: Object(u.a)(Ee.a.input, {
							[Ee.a.isEmpty]: !!n
						}),
						onChange: this.onChange,
						onFocus: this.onFocus,
						value: p
					}), !a && (n || p.length > 0) && (e ? o.a.createElement(ue.a, {
						sizePx: we
					}) : o.a.createElement(B.r, {
						className: Ee.a.addButton,
						onClick: this.onSubmit
					}, s.fbt._("Add", null, {
						hk: "2wi3d4"
					}))), l && o.a.createElement(Se, {
						className: Ee.a.dropdown,
						focusedIndex: d,
						multireddit: i,
						onEntryFocus: this.onDropdownItemFocus,
						onEntrySelect: this.onDropdownItemSelect,
						substring: p
					})), 0 === t.length ? o.a.createElement("p", {
						className: Ee.a.emptyText
					}, s.fbt._("Try adding some communities to your custom feed!", null, {
						hk: "3Qe2e3"
					})) : (m ? t : b).map(e => o.a.createElement(S.a, Ce({}, e, {
						buttonDisabled: !!r,
						key: e.id,
						isLoading: r === e.id,
						onTertiaryButtonClick: this.getOnRemoveClickedFn(e),
						sendEvent: ne.a,
						showTertiaryButtonOnHover: !0,
						tertiaryButtonText: s.fbt._("Remove", null, {
							hk: "s2BRg"
						}),
						useTertiaryButton: !0
					}))), t.length > ve && o.a.createElement("div", {
						className: Ee.a.expandButtonContainer
					}, o.a.createElement(B.r, {
						className: Ee.a.expandButton,
						onClick: this.onToggleExpand
					}, m ? s.fbt._("show less", null, {
						hk: "Q5bpx"
					}) : s.fbt._("show more", null, {
						hk: "2B9cqo"
					}))))
				}
			}
			var Ne = Ie(Me),
				De = i("./src/reddit/components/MultiredditSuggestionsWidget/index.m.less"),
				Te = i.n(De);
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
							recommendations: i,
							recommendationsError: r,
							recommendationsPending: n
						},
						state: {
							memoizedRecommendations: d
						}
					} = this;
					return o.a.createElement(S.b, {
						bottomButtonText: s.fbt._("refresh", null, {
							hk: "2qUiWm"
						}),
						className: Te.a.container,
						communities: d.slice(0, Fe),
						errorMsg: s.fbt._("Couldn't find any recommendations. Try adding more communities first!", null, {
							hk: "3E76C7"
						}),
						isError: !i.length || !!r,
						isLoading: n,
						loadingItemName: e || void 0,
						onBottomButtonClick: this.onRecommendationsRefreshClicked,
						onTertiaryButtonClick: t,
						sendEvent: ne.a,
						showTertiaryButtonOnHover: !0,
						itemButtonDisabled: !!e,
						tertiaryButtonText: s.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						title: s.fbt._("People also added", null, {
							hk: "22fDdF"
						}),
						useTertiaryButton: !0
					})
				}
			}
			var Le = Object(a.b)(Re, (e, t) => ({
					addSubredditRequested: i => {
						Object(A.f)(t.multireddit) && e(Object(oe.addSubredditRequested)({
							identifier: {
								name: i.name,
								type: i.type
							},
							multiredditNames: [t.multireddit.name],
							communityInfo: i
						}))
					},
					recommendationsRefreshed: i => {
						Object(A.f)(t.multireddit) && e(Object(oe.recommendationsRequested)({
							multiredditName: t.multireddit.name,
							username: t.multiUsername,
							toExcludeNames: i
						}))
					}
				}))(qe),
				Ue = i("./src/reddit/components/SidebarContainer/index.tsx"),
				Be = i("./src/reddit/components/SidebarSectionHeader/index.m.less"),
				Ae = i.n(Be),
				ze = H.a.div("Component", Ae.a),
				We = i("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Ge = i("./src/reddit/constants/zIndex.ts"),
				He = i("./src/reddit/controls/TextButton/index.tsx"),
				Qe = i("./src/reddit/helpers/trackers/idCard.ts"),
				Ve = i("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				Ke = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				Ze = i("./src/reddit/components/MultiredditSidebar/index.m.less"),
				Xe = i.n(Ze);

			function Ye() {
				return (Ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const $e = Object(l.a)(e => o.a.createElement(m.e, {
					className: Xe.a.modalContainer
				}, !e.shouldHideHeader && o.a.createElement(m.i, null, o.a.createElement(Ve.a, null, o.a.createElement(m.q, null, e.multireddit.displayText), o.a.createElement(He.a, {
					onClick: e.onCloseModal
				}, o.a.createElement(m.b, null)))), o.a.createElement(m.l, null, o.a.createElement(te, {
					mode: ee.Modal,
					multireddit: e.multireddit,
					subredditCategory: e.subredditCategory
				})), e.shouldHideHeader && o.a.createElement(He.a, {
					className: Xe.a.closeBtn,
					onClick: e.onCloseModal
				}, o.a.createElement(m.b, null)))),
				Je = e => o.a.createElement($e, Ye({}, e, {
					overlayCustomStyles: {
						zIndex: Ge.b
					},
					withOverlay: !0
				})),
				et = () => o.a.createElement(j.a, null, n()(5, e => o.a.createElement("div", {
					className: Object(u.a)(Xe.a.placeholder, Object(Ke.a)({
						isLoading: !0
					})),
					key: e
				}))),
				tt = e => Object(A.f)(e.multireddit) ? Object(A.g)(e.multireddit) ? e.isCurrentUserMultiredditOwner ? o.a.createElement(Ne, {
					multireddit: e.multireddit
				}) : o.a.createElement(P, {
					multireddit: e.multireddit,
					titleText: s.fbt._("Communities in this custom feed", null, {
						hk: "23oj0B"
					})
				}) : o.a.createElement(et, null) : o.a.createElement("div", {
					className: Xe.a.detailsContainer
				}, o.a.createElement(ze, null, e.subredditCategory ? e.subredditCategory.name : s.fbt._("Custom feed details", null, {
					hk: "4Ct8xk"
				})), o.a.createElement(te, {
					mode: ee.Sidebar,
					multireddit: e.multireddit,
					onSeeMoreDetails: e.onSeeMoreDetails,
					onSubredditClick: e.onSubredditClick,
					subredditCategory: e.subredditCategory
				})),
				it = Object(c.c)({
					isCurrentUserMultiredditOwner: (e, {
						multireddit: t
					}) => Object(A.f)(t) && Object(E.c)(e, t.url)
				}),
				st = Object(a.b)(it, (e, {
					subredditCategory: t
				}) => ({
					trackSeeMoreClicked: () => e((e, t) => Qe.a(t())),
					trackSubredditClicked: i => {
						if (!t) return;
						const s = Object(be.c)(i);
						e((e, i) => Qe.b(i(), s, t.name))
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
						multireddit: i,
						multiUsername: s,
						subredditCategory: r
					} = this.props, n = t && i.subredditIds && i.subredditIds.length > 0;
					return o.a.createElement(Ue.a, {
						className: e
					}, o.a.createElement(tt, {
						isCurrentUserMultiredditOwner: t,
						multireddit: i,
						subredditCategory: r,
						onSeeMoreDetails: this.openModal,
						onSubredditClick: this.props.trackSubredditClicked
					}), this.state.showModal ? o.a.createElement(Je, {
						multireddit: i,
						subredditCategory: r,
						onCloseModal: this.closeModal,
						shouldHideHeader: !!r
					}) : null, n && o.a.createElement(Le, {
						multireddit: i,
						multiUsername: s
					}), o.a.createElement(We.a, null))
				}
			}
			t.a = st(rt)
		},
		"./src/reddit/components/MultiredditSuggestionsWidget/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_3jG8aJCgqOrmMUbRMiakpX"
			}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return S
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/react/index.js"),
				n = i.n(r),
				d = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				a = i("./src/lib/classNames/index.ts"),
				c = i("./src/lib/lessComponent.tsx"),
				l = i("./src/reddit/actions/tooltip.ts"),
				u = i("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = i("./src/reddit/controls/Dropdown/index.tsx"),
				b = i("./src/reddit/controls/Dropdown/Row.tsx"),
				p = i("./src/reddit/icons/fonts/index.tsx"),
				h = i("./src/reddit/selectors/tooltip.ts"),
				f = i("./src/reddit/components/OverflowMenu/index.m.less"),
				x = i.n(f);
			const y = c.a.wrapped(m.a, "_Dropdown", x.a),
				O = Object(u.a)(y),
				g = c.a.button("MenuButton", x.a),
				S = c.a.wrapped(b.b, "DropdownRow", x.a),
				j = Object(o.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				E = Object(d.b)(j, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				C = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = E(e => n.a.createElement(g, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(a.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: C(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : n.a.createElement(p.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
			}), n.a.createElement(O, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				preventFocusScroll: e.preventFocusScroll,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/lodash/take.js"),
				n = i.n(r),
				d = i("./node_modules/react/index.js"),
				o = i.n(d),
				a = i("./src/lib/constants/index.ts"),
				c = i("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = i("./src/reddit/controls/Button/index.tsx"),
				u = i("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = i("./src/reddit/layout/row/Inline/index.tsx"),
				b = i("./src/reddit/layout/row/RightAlign/index.tsx");
			const p = e => {
				const {
					className: t,
					hasMoreItems: i,
					headerButton: r,
					items: a,
					minimizedLength: p,
					onLoadMore: h,
					pending: f,
					renderItem: x,
					title: y
				} = e, [O, g] = Object(d.useState)(!1), S = a.length > p || i, j = (!S || O ? a : n()(a, p)).map(e => x({
					item: e
				})), E = () => {
					O || g(!0), O && !i && g(!1), i && h && h()
				};
				return o.a.createElement(c.a, {
					className: t,
					headerButton: r,
					title: y
				}, j, o.a.createElement(m.a, null, o.a.createElement(b.a, null, S && (() => {
					const e = !O || i && h ? s.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : s.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return o.a.createElement(l.r, {
						onClick: E
					}, f ? o.a.createElement(u.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			p.defaultProps = {
				minimizedLength: a.Sb
			}, t.a = p
		},
		"./src/reddit/components/SidebarSectionHeader/index.m.less": function(e, t, i) {
			e.exports = {
				Component: "_1X2juHHajDXGs8oboBFTY1",
				component: "_1X2juHHajDXGs8oboBFTY1",
				headerStyles: "ySyP3_8M4Wb9GDZa0U3rV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less": function(e, t, i) {
			e.exports = {
				entry: "_2_6Q3rlmltjQM8nEBoNJr-",
				disabled: "_1eGUunOsIyMkgTF3IiieVl"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less": function(e, t, i) {
			e.exports = {
				title: "-T-WBPEANCCRwTdAGSdj_",
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F",
				titleContainer: "_112QSSyLmEVry3hGjIPV--",
				titleText: "_3fpkz04m3VEANbACfYOR0H",
				srCreationButton: "_3ujvK82qZ7yzbpEffTiXH-"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less": function(e, t, i) {
			e.exports = {
				iconWrapper: "_2jjSvas2tvdAFgIvSzSBax",
				mDisabled: "_2PoEIlhFzgV0sUWfM40K-N",
				rowStyle: "_3DfMNtnkrzHeGN0WyUTTuX"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less": function(e, t, i) {
			e.exports = {
				subredditIcon: "vxu9qtznQ1Kvakd5mtfxV",
				main: "_11CAFoZ5ryUXHrO5iX6Ktk",
				title: "_1bEDlh2fhWPx9-h3IqUvFa",
				lockTitleWithEllipsis: "mFsxWzlvJHnXmu7_xaIzI",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return g
			})), i.d(t, "b", (function() {
				return S
			}));
			var s = i("./node_modules/react/index.js"),
				r = i.n(s),
				n = i("./src/lib/classNames/index.ts"),
				d = i("./src/lib/lessComponent.tsx"),
				o = i("./src/reddit/components/SubredditIcon/index.tsx"),
				a = i("./src/reddit/controls/MetaSeparator/index.tsx"),
				c = i("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				l = i("./src/reddit/icons/svgs/Link/index.tsx"),
				u = i("./src/reddit/icons/svgs/TextPost/index.tsx"),
				m = i("./src/reddit/icons/svgs/Video/index.tsx"),
				b = i("./src/reddit/layout/row/Inline/index.tsx"),
				p = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				h = i.n(p);
			const f = [{
				type: "text",
				Icon: u.a
			}, {
				type: "images",
				Icon: c.a
			}, {
				type: "videos",
				Icon: m.a
			}, {
				type: "links",
				Icon: l.a
			}];

			function x(e) {
				const {
					allowedPostTypes: t,
					className: i
				} = e;
				return r.a.createElement(b.a, {
					className: Object(n.a)(h.a.rowStyle, i)
				}, f.map(({
					type: e,
					Icon: i
				}) => r.a.createElement("div", {
					className: Object(n.a)(h.a.iconWrapper, {
						[h.a.mDisabled]: !t[e]
					})
				}, r.a.createElement(i, null))))
			}
			var y = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				O = i.n(y);
			const g = d.a.wrapped(o.b, "subredditIcon", O.a);

			function S(e) {
				const {
					className: t,
					explanationText: i,
					highlight: s,
					icon: d,
					item: o,
					lockTitleWithEllipsis: c,
					onClick: l,
					secondaryText: u,
					subText: m,
					title: b
				} = e, {
					allowedPostTypes: p
				} = o;
				return r.a.createElement("div", {
					className: Object(n.a)(O.a.container, {
						[O.a.mHighlight]: s
					}, t),
					onClick: l
				}, d, r.a.createElement("div", {
					className: O.a.main
				}, r.a.createElement("span", {
					className: Object(n.a)(O.a.title, {
						[O.a.lockTitleWithEllipsis]: c
					})
				}, b), u && r.a.createElement("span", {
					className: O.a.secondary
				}, u, m && r.a.createElement(r.a.Fragment, null, r.a.createElement(a.a, null), r.a.createElement("span", {
					className: O.a.secondary
				}, m))), i && r.a.createElement("span", {
					className: O.a.secondary
				}, i)), s && p && r.a.createElement(x, {
					allowedPostTypes: p
				}))
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, i) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less": function(e, t, i) {
			e.exports = {
				icon: "_20inB3H1vZ94tVilqSJmU2",
				hasExplanationText: "_1xZtDFYDxzgIqaJfg9XzJh"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return h
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/react/index.js"),
				n = i.n(r),
				d = i("./node_modules/react-redux/es/index.js"),
				o = i("./src/lib/classNames/index.ts"),
				a = i("./src/lib/prettyPrintNumber/index.ts"),
				c = i("./src/reddit/helpers/name/index.ts"),
				l = i("./src/reddit/selectors/subreddit.ts"),
				u = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx"),
				m = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less"),
				b = i.n(m);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}

			function h(e) {
				const {
					item: {
						primaryColor: t,
						iconUrl: i,
						name: r,
						subscribers: m,
						active: h
					},
					shouldPrettyPrint: f,
					explanationText: x,
					shouldShowSubredditOnlineUsers: y = !1
				} = e, O = Object(d.e)(e => Object(l.t)(e, {
					subredditName: r
				})), g = Object(c.c)(r), S = void 0 !== m ? s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(m, "number", f ? Object(a.b)(m) : void 0)], {
					hk: "2SvJUX"
				}) : void 0, j = O ? s.fbt._("{number users online in subreddit} online", [s.fbt._param("number users online in subreddit", Object(a.b)(O.accountsActive))], {
					hk: "49HfzS"
				}) : void 0, E = y ? `${S} • ${j}` : S, C = void 0 !== h ? s.fbt._({
					"*": "{number} online",
					_1: "1 online"
				}, [s.fbt._plural(h, "number", f ? Object(a.b)(h) : void 0)], {
					hk: "NgOAJ"
				}) : void 0, w = n.a.createElement(u.a, {
					className: Object(o.a)(b.a.icon, {
						[b.a.hasExplanationText]: !!x
					}),
					iconUrl: i,
					primaryColor: t,
					redditStyle: !0
				});
				return n.a.createElement(u.b, p({
					icon: w,
					title: g,
					secondaryText: E,
					subText: C
				}, e))
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less": function(e, t, i) {
			e.exports = {
				noMatches: "kaGogHhtbK_vPZj9943oa",
				container: "_3DQXGvoE1SM3Kmz20of7Iz",
				mIsValid: "_28z84WGIIVp4uDMcA3-Kgw",
				mIsVisible: "_3009h778F7QI2qu6YmsxVV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return T
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/lodash/debounce.js"),
				n = i.n(r),
				d = i("./node_modules/react/index.js"),
				o = i.n(d),
				a = i("./src/lib/classNames/index.ts");
			const c = {
				leading: !0,
				trailing: !1
			};
			var l = (e, t, i, s = c) => {
					const r = {
							...c,
							...s
						},
						n = t > e ? 1 : -1;
					let d = e;
					if (e !== t) {
						for (r.leading || (d += n); d !== t;) i(d), d += n;
						r.trailing && i(d)
					} else(r.leading || r.trailing) && i(e)
				},
				u = i("./src/lib/forEachGroup/index.ts"),
				m = i("./src/reddit/models/SubredditAutocomplete/index.ts"),
				b = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				p = i.n(b);
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
						className: Object(a.a)(p.a.entry, this.props.disabled && p.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			var f = i("./src/reddit/controls/Button/index.tsx"),
				x = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				y = i.n(x);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			var g = ({
					className: e,
					children: t,
					title: i,
					onOpenCommunityCreation: r,
					shouldShowCreateCommunityButton: n,
					...d
				}) => o.a.createElement("div", O({
					className: Object(a.a)(y.a.dropdownSection, e)
				}, d), i && n ? o.a.createElement("div", {
					className: y.a.titleContainer
				}, o.a.createElement("span", {
					className: y.a.titleText
				}, i), o.a.createElement(f.t, {
					className: y.a.srCreationButton,
					onClick: r,
					priority: f.c.Plain,
					size: f.d.XS
				}, s.fbt._("Create New", null, {
					hk: "3WP7G4"
				}))) : i && o.a.createElement("div", {
					className: y.a.title
				}, i), t),
				S = i("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				j = i("./src/reddit/helpers/name/index.ts"),
				E = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx"),
				C = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				w = i.n(C),
				v = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				_ = i.n(v);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}

			function I(e) {
				const {
					item: {
						name: t,
						subscribers: i
					}
				} = e, r = Object(j.d)(t), n = void 0 !== i ? s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(i, "number")], {
					hk: "2SvJUX"
				}) : void 0, d = o.a.createElement(S.a, {
					className: Object(a.a)(_.a.profileIcon, w.a.subredditIcon)
				});
				return o.a.createElement(E.b, k({
					icon: d,
					title: r,
					secondaryText: n
				}, e))
			}
			var P = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx"),
				M = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				N = i.n(M);
			const D = {
				[m.a.OWN_PROFILE]: () => s.fbt._("Your profile", null, {
					hk: "1Qoy4P"
				}),
				[m.a.SUBSCRIBED_TO_SUBREDDIT]: () => s.fbt._("My communities", null, {
					hk: "2NVUpl"
				}),
				[m.a.OTHER_SUBREDDIT]: () => s.fbt._("Others", null, {
					hk: "3WQHlu"
				}),
				[m.a.MODERATED_SUBREDDIT]: () => s.fbt._("Moderated subreddits", null, {
					hk: "uZtld"
				})
			};
			class T extends o.a.PureComponent {
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
							return I;
						default:
							return P.a
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t,
						onOpenCommunityCreation: i,
						shouldShowCreateCommunityButton: r
					} = this.props, n = [];
					return this.props.showNoMatchesCaption && n.push(o.a.createElement(g, {
						key: "no-matches"
					}, o.a.createElement("div", {
						className: N.a.noMatches
					}, s.fbt._("No communities found", null, {
						hk: "4wDUHv"
					})))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (s, d, a, c) => {
						const u = [];
						l(a, c, i => {
							const s = t[i],
								r = i === e,
								n = this.getEntryContentComponent(s.type, s.name);
							n && u.push(o.a.createElement(h, {
								entryIndex: i,
								disabled: s.disabled,
								key: s.id || s.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, o.a.createElement(n, {
								highlight: r,
								item: s
							})))
						});
						const b = D[d];
						n.push(o.a.createElement(g, {
							key: d,
							title: b && b(),
							onOpenCommunityCreation: i,
							shouldShowCreateCommunityButton: r && d === m.a.SUBSCRIBED_TO_SUBREDDIT
						}, u))
					}), o.a.createElement("div", {
						className: Object(a.a)(N.a.container, this.props.className, {
							[N.a.mIsValid]: this.props.isValid,
							[N.a.mIsVisible]: n.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, n)
				}
			}
		},
		"./src/reddit/endpoints/page/multiredditListing.ts": function(e, t, i) {
			"use strict";
			var s = i("./src/lib/makeGqlRequest/index.ts"),
				r = i("./src/redditGQL/operations/MultiredditListing.json");
			t.a = (e, t) => Object(s.a)(e, {
				...r,
				variables: t
			})
		},
		"./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts": function(e, t, i) {
			"use strict";
			var s = i("./src/lib/env/index.ts"),
				r = i("./src/lib/sentry/index.ts"),
				n = i("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				d = i("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				o = i("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				a = i("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				c = i("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				l = i("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
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
					multireddit: b
				} = e;
				if (i && (t.account = Object(u.a)(i) || null, t.preferences = Object(c.a)(i.preferences, i.interactions) || null), !b) return t;
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
							Object(s.b)() || console.warn(t), r.c.captureMessage(t);
							continue
						}
						const i = e;
						t.postIds.push(i.id);
						const {
							post: d,
							crosspost: c
						} = i && Object(a.a)(i);
						t.posts[d.id] = d, c && (t.posts[c.id] = c), Object(m.j)(i) || Object(m.i)(i) || (i.authorFlair && (t.postFlair[d.belongsTo.id] || (t.postFlair[d.belongsTo.id] = {}), t.postFlair[d.belongsTo.id][d.author] = Object(n.a)(i.authorFlair)[0]), Object(m.n)(i) && (t.subreddits[i.subreddit.id] || (t.subreddits[i.subreddit.id] = Object(l.a)(i.subreddit)), t.postFlair[i.subreddit.id] || (t.postFlair[i.subreddit.id] = Object(o.a)(i.subreddit))))
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
				} = Object(d.a)(b);
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
		"./src/reddit/helpers/trackers/idCard.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			})), i.d(t, "b", (function() {
				return a
			})), i.d(t, "c", (function() {
				return c
			}));
			var s = i("./src/reddit/constants/tracking.ts"),
				r = i("./src/reddit/selectors/telemetry.ts"),
				n = i("./src/reddit/selectors/widgets.ts"),
				d = i("./src/telemetry/index.ts");
			const o = e => {
					Object(d.a)({
						...r.m(e),
						action: s.c.CLICK,
						noun: "multi_detail",
						source: "id_card"
					})
				},
				a = (e, t, i) => {
					const {
						subreddit: o,
						profile: a
					} = Object(n.b)(e, t);
					Object(d.a)({
						...r.m(e),
						action: s.c.CLICK,
						noun: "multi_detail_subreddit",
						profile: a,
						source: "id_card",
						subreddit: {
							...o,
							categoryName: i
						}
					})
				},
				c = e => t => ({
					action: s.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: r.hb(t)
				})
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, i) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				r = i.n(s),
				n = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				o = i.n(d);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				r = i.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, i) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				r = i.n(s),
				n = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/icons/svgs/TextPost/index.m.less"),
				o = i.n(d);
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
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				r = i.n(s);
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
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, i) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./src/lib/lessComponent.tsx"),
				r = i("./src/reddit/layout/row/RightAlign/index.m.less"),
				n = i.n(r);
			t.a = s.a.div("rightAligned", n.a)
		},
		"./src/redditGQL/operations/AllUserMultireddits.json": function(e) {
			e.exports = JSON.parse('{"id":"d5a173c1e5e2"}')
		},
		"./src/redditGQL/operations/MultiredditListing.json": function(e) {
			e.exports = JSON.parse('{"id":"3ee92129a44f"}')
		},
		"./src/redditGQL/operations/SubredditTypeaheadSearch.json": function(e) {
			e.exports = JSON.parse('{"id":"20edc5ee12df"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar.aa18c88cdda6e2daff00.js.map