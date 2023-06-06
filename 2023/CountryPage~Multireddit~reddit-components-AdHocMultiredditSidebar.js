// https://www.redditstatic.com/desktop2x/CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar.82f1d36c2ab942e61ffe.js
// Retrieved at 6/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"], {
		"./node_modules/lodash/take.js": function(e, t, i) {
			var r = i("./node_modules/lodash/_baseSlice.js"),
				s = i("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, i) {
				return e && e.length ? (t = i || void 0 === t ? 1 : s(t), r(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			const r = e => e;

			function s(e, t, i) {
				const [s, n] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: d = r
				} = t || {};
				let {
					start: o = 0,
					end: a = s
				} = t || {};
				if ((o = o < 0 ? 0 : o) >= (a = a > s ? s : a)) return;
				let c = n(o),
					l = d(c, o),
					u = o;
				for (let r = o + 1; r < a; r++) {
					const e = n(r),
						t = d(e, r);
					if (t !== l) {
						if (!1 === i(c, l, u, r)) return;
						l = t, u = r, c = e
					}
				}
				i(c, l, u, a)
			}
		},
		"./src/reddit/actions/multireddit/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "morePostsFailed", (function() {
				return L
			})), i.d(t, "morePostsLoaded", (function() {
				return q
			})), i.d(t, "morePostsPending", (function() {
				return U
			})), i.d(t, "moreOfMyMultiRequested", (function() {
				return B
			})), i.d(t, "myMultiredditsPending", (function() {
				return A
			})), i.d(t, "myMultiredditsReceived", (function() {
				return z
			})), i.d(t, "myMultiredditsRequested", (function() {
				return H
			})), i.d(t, "createFailure", (function() {
				return W
			})), i.d(t, "createPending", (function() {
				return G
			})), i.d(t, "createSuccess", (function() {
				return Q
			})), i.d(t, "createRequested", (function() {
				return K
			})), i.d(t, "reloadCurrentMultiredditFeedRequested", (function() {
				return V
			})), i.d(t, "duplicateFailure", (function() {
				return X
			})), i.d(t, "duplicatePending", (function() {
				return Z
			})), i.d(t, "duplicateSuccess", (function() {
				return Y
			})), i.d(t, "duplicateRequested", (function() {
				return J
			})), i.d(t, "addSubredditPending", (function() {
				return $
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
				return oe
			})), i.d(t, "deletePending", (function() {
				return ae
			})), i.d(t, "deleteSuccess", (function() {
				return ce
			})), i.d(t, "deleteRequested", (function() {
				return le
			})), i.d(t, "editFailure", (function() {
				return ue
			})), i.d(t, "editPending", (function() {
				return me
			})), i.d(t, "editSuccess", (function() {
				return be
			})), i.d(t, "editRequested", (function() {
				return pe
			})), i.d(t, "subredditRecommendationsFailure", (function() {
				return he
			})), i.d(t, "subredditRecommendationsPending", (function() {
				return fe
			})), i.d(t, "subredditRecommendationsSuccess", (function() {
				return xe
			})), i.d(t, "recommendationsRequested", (function() {
				return ye
			}));
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/pick.js"),
				n = i.n(s),
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
				S = (e, t) => Object(O.a)(e, {
					...g,
					variables: t
				}),
				E = i("./src/reddit/endpoints/page/multiredditListing.ts"),
				j = i("./src/reddit/endpoints/subreddit/recommendations.ts"),
				C = i("./src/reddit/helpers/filterListingResponse/index.ts"),
				w = i("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				v = i("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				_ = i("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				k = e => {
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
						s = r.filter(e => !e.displayName.startsWith(o.pc)).map(e => e.id),
						n = r.filter(e => e.displayName.startsWith(o.pc)).map(e => e.id);
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
				I = i("./src/reddit/models/Multireddit/index.ts"),
				P = i("./src/reddit/models/Toast/index.ts"),
				M = i("./src/reddit/selectors/multireddit.ts"),
				N = i("./src/reddit/selectors/platform.ts"),
				D = i("./src/reddit/selectors/subreddit.ts"),
				T = i("./src/reddit/selectors/user.ts"),
				F = i("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				R = i("./src/reddit/actions/multireddit/constants.ts");
			const L = Object(c.a)(R.q),
				q = Object(c.a)(R.r),
				U = Object(c.a)(R.s),
				B = e => async (t, i, r) => {
					const {
						gqlContext: s
					} = r, {
						sort: n = o.bb.HOT,
						multiredditName: d,
						username: a
					} = e, c = i(), u = c.platform.currentPage, m = u ? u.queryParams : {}, b = Object(M.d)(c, {
						multiredditName: d,
						username: a
					}), p = Object(l.a)(b.url, n, m), h = c.listings.postOrder.loadMore[p];
					if (!h) return;
					const f = c.listings.postOrder.api.pending[p],
						x = c.listings.postOrder.fetchedTokens,
						y = x[p] && x[p][h.token] || !1;
					if (f || y) return;
					t(U({
						key: p,
						fetchedToken: h.token
					}));
					const O = b.url.replace(/\/$/, ""),
						g = m.t ? m.t.toUpperCase() : void 0,
						S = {
							after: h.token,
							includeIdentity: !1,
							includeSources: !1,
							path: O,
							range: g,
							sort: n.toUpperCase()
						},
						j = await Object(E.a)(s(), S),
						{
							data: w
						} = j.body,
						_ = Object(v.a)(w);
					j.ok && w && w.multireddit ? t(q({
						fetchedToken: h.token,
						key: p,
						meta: c.meta,
						..._,
						...Object(C.a)(c, p, _),
						multiredditsModelsState: c.multireddits.models
					})) : t(L({
						error: {
							type: o.K.NOT_FOUND_ERROR
						},
						fetchedToken: h.token,
						key: p,
						...j.body,
						...Object(C.a)(c, p, _)
					}))
				}, A = Object(c.a)(R.t), z = Object(c.a)(R.u), H = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (i, r, s) => {
						let {
							apiContext: n,
							gqlContext: d
						} = s;
						const o = r();
						if (!Object(T.m)(o)) return;
						if (!e && Object(M.h)(o) || Object(M.i)(o)) return;
						i(A());
						const a = await S(d(), {
							includeSources: t
						});
						if (a.ok) {
							const e = a.body.data.identity.allMultireddits.edges.map(e => e.node),
								t = Object(w.b)(e);
							i(z({
								...t,
								multiredditsModelsState: o.multireddits.models
							}))
						}
					}
				}, W = Object(c.a)(R.e), G = Object(c.a)(R.f), Q = Object(c.a)(R.g), K = e => {
					let {
						description: t,
						displayName: i,
						shouldNavigate: s
					} = e;
					return async (e, n, a) => {
						let {
							apiContext: c
						} = a;
						const l = n(),
							m = Object(T.m)(l);
						if (!m) return;
						e(G());
						const p = await ((e, t, i) => Object(h.a)(Object(f.a)(e, [x.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/multi`),
							data: {
								model: JSON.stringify({
									description_md: i,
									display_name: t,
									visibility: "private",
									subreddits: []
								})
							},
							method: o.ob.POST
						}))(c(), i, t);
						if (p.ok) {
							const {
								id: t
							} = m;
							if (await e(Q({
									multireddit: k(p.body.data),
									multiredditsModelsState: l.multireddits.models,
									userId: t
								})), s) {
								e(Object(u.f)());
								const t = p.body.data.path.toLowerCase();
								await e(Object(d.b)(t))
							}
							e(Object(b.f)({
								text: r.fbt._("Custom feed created!", null, {
									hk: "258cY9"
								})
							}))
						} else e(W(p.error))
					}
				}, V = () => async (e, t, i) => {
					let {
						apiContext: r
					} = i;
					const s = t(),
						d = Object(T.m)(s),
						a = Object(N.i)(s) ? Object(N.m)(s) : Object(N.b)(s),
						c = a && a.routeMatch && a.routeMatch.match;
					if (!c) return;
					const u = c.params,
						b = u.sort || o.bb.HOT,
						{
							multiredditName: h,
							username: f
						} = u;
					if (!h) return;
					const x = Object(I.h)((f || d && d.displayText || "").toLowerCase(), h.toLowerCase()),
						{
							queryParams: y
						} = c,
						O = Object(l.a)(x, b, y),
						g = p.H in y && y[p.H].toUpperCase() || "",
						S = o.nc[g] || !1,
						E = Object(T.m)(s);
					(f || E && E.displayText) && await e(Object(m.multiredditFeedRequested)(O, (f || E.displayText).toLowerCase(), h.toLowerCase(), {
						...n()(y, p.p),
						...n()(y, p.o),
						sort: b,
						t: Object(F.a)(b, S)
					}))
				}, X = Object(c.a)(R.k), Z = Object(c.a)(R.l), Y = Object(c.a)(R.m), J = e => {
					let {
						description: t,
						displayName: i,
						fromName: s,
						fromUsername: n
					} = e;
					return async (e, a, c) => {
						let {
							apiContext: l
						} = c;
						const m = a(),
							p = Object(T.m)(m);
						if (!p || !p.displayText) return;
						const O = Object(I.h)((n || p.displayText).toLowerCase(), s.toLowerCase());
						e(Z());
						const g = await ((e, t) => Object(h.a)(Object(f.a)(e, [x.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/multi/copy`),
							data: {
								description_md: t.description,
								display_name: t.displayName,
								expand_srs: !0,
								from: t.from
							},
							method: o.ob.POST
						}))(l(), {
							from: O,
							displayName: i,
							description: t
						});
						if (g.ok) {
							const t = k(g.body.data);
							e(Object(u.f)()), e(Y({
								multireddit: t,
								multiredditsModelsState: m.multireddits.models,
								userId: p.id
							})), e(Object(b.f)({
								text: r.fbt._("Custom feed duplicated!", null, {
									hk: "2u48X"
								}),
								buttonText: r.fbt._("Go there", null, {
									hk: "4sXZMm"
								}),
								buttonAction: Object(d.b)(t.url)
							}))
						} else e(X(g.error)), e(Object(b.f)({
							text: r.fbt._("Something went wrong duplicating {multiName}", [r.fbt._param("multiName", s)], {
								hk: "4bzN2D"
							})
						}))
					}
				}, $ = Object(c.a)(R.b), ee = Object(c.a)(R.c), te = Object(c.a)(R.a), ie = e => {
					let {
						communityInfo: t,
						identifier: i,
						multiredditNames: s
					} = e;
					return async (e, n, d) => {
						let {
							apiContext: c
						} = d;
						const l = n(),
							m = Object(T.m)(l);
						if (!m || l.multireddits.api.addSubreddit.pending) return;
						e($({
							name: i.name
						}));
						const {
							displayText: p
						} = m;
						if (!p) return;
						const O = s.map(e => `/user/${p.toLowerCase()}/m/${e.toLowerCase()}`).join(","),
							g = `${"profile"===i.type?o.pc:""}${i.name}`,
							S = await ((e, t, i) => Object(h.a)(Object(f.a)(e, [x.a]), {
								endpoint: Object(y.a)(`${e.apiUrl}/api/multi/bulk_add/r/${t}`),
								data: {
									paths: i
								},
								method: o.ob.PUT
							}))(c(), g, O);
						if (S.ok) {
							const n = Object(D.P)(l, {
									identifier: i
								}) || t && t.id || "",
								d = s.map(e => Object(I.h)(p, e));
							e(Object(u.f)()), e(Object(b.f)({
								text: r.fbt._({
									"*": "Successfully added {communityName} to {number} custom feeds!",
									_1: "Successfully added {communityName} to 1 custom feed!"
								}, [r.fbt._param("communityName", `${"subreddit"===i.type?a.d.subreddit:a.d.profile}${i.name}`), r.fbt._plural(s.length, "number")], {
									hk: "9EXsM"
								})
							})), await e(ee({
								communityInfo: t,
								id: n,
								multipaths: d,
								type: i.type
							})), 1 === s.length && await e(V())
						} else {
							e(te(S.error));
							let t = r.fbt._("Sorry, something went wrong adding {subredditName}.", [r.fbt._param("subredditName", i.name)], {
								hk: "ERdWO"
							});
							S.body && (S.body.reason === R.d.TooManySubreddits ? t = r.fbt._("Maximum communities reached", null, {
								hk: "2eguyW"
							}) : S.body.reason === R.d.InvalidSrQuarantine && (t = r.fbt._("{communityname} is invalid because it is quarantined", [r.fbt._param("communityname", `${"subreddit"===i.type?a.d.subreddit:a.d.profile}${i.name}`)], {
								hk: "407xmS"
							}))), e(Object(b.f)({
								text: t,
								kind: P.b.Error
							}))
						}
					}
				}, re = Object(c.a)(R.w), se = Object(c.a)(R.x), ne = Object(c.a)(R.v), de = e => {
					let {
						id: t,
						multiredditName: i,
						name: s,
						type: n
					} = e;
					return async (e, d, a) => {
						let {
							apiContext: c
						} = a;
						const l = d(),
							m = Object(T.m)(l);
						if (!m || !m.displayText || l.multireddits.api.removeSubreddit.pending) return;
						e(re({
							id: t
						}));
						const {
							displayText: p
						} = m, O = Object(I.h)(p, i), g = `${"profile"===n?o.pc:""}${s}`, S = await ((e, t, i) => Object(h.a)(Object(f.a)(e, [x.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/multi${i}r/${t}`),
							method: o.ob.DELETE
						}))(c(), g, O);
						S.ok ? (e(Object(u.f)()), e(se({
							id: t,
							multipath: O,
							type: n
						})), e(Object(b.f)({
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
						})), e(V())) : (e(ne(S.error)), e(Object(b.f)({
							text: r.fbt._("Sorry, something went wrong removing {subredditName}.", [r.fbt._param("subredditName", s)], {
								hk: "1E1rKm"
							})
						})))
					}
				}, oe = Object(c.a)(R.h), ae = Object(c.a)(R.i), ce = Object(c.a)(R.j), le = e => async (t, i, s) => {
					let {
						apiContext: n
					} = s;
					const a = i();
					if (!Object(T.m)(a)) return;
					t(ae());
					const c = await ((e, t) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/multi${t}`),
						method: o.ob.DELETE
					}))(n(), e);
					c.ok ? (await t(ce(e)), t(Object(u.f)()), await t(Object(d.b)("/")), t(Object(b.f)({
						text: r.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(oe(c.error))
				}, ue = Object(c.a)(R.n), me = Object(c.a)(R.o), be = Object(c.a)(R.p), pe = e => {
					let {
						description: t,
						displayText: i,
						multipath: s,
						visibility: n
					} = e;
					return async (e, d, a) => {
						let {
							apiContext: c
						} = a;
						const l = d();
						if (!Object(T.S)(l)) return;
						e(me());
						const m = await (e => {
							let {
								context: t,
								description: i,
								displayText: r,
								multipath: s,
								visibility: n
							} = e;
							return Object(h.a)(Object(f.a)(t, [x.a]), {
								endpoint: Object(y.a)(`${t.apiUrl}/api/multi${s}`),
								data: {
									model: JSON.stringify({
										description_md: i,
										display_name: r,
										visibility: n
									}),
									expand_srs: !0
								},
								method: o.ob.PUT
							})
						})({
							context: c(),
							description: t,
							displayText: i,
							multipath: s,
							visibility: n
						});
						m.ok ? (await e(be(k(m.body.data))), e(Object(u.f)()), e(Object(b.f)({
							text: r.fbt._("Custom feed updated!", null, {
								hk: "39R30f"
							})
						}))) : (e(ue(m.error)), e(Object(b.f)({
							kind: P.b.Error,
							text: r.fbt._("Something went wrong", null, {
								hk: "1Y6lli"
							})
						})))
					}
				}, he = Object(c.a)(R.z), fe = Object(c.a)(R.A), xe = Object(c.a)(R.B), ye = e => {
					let {
						multiredditName: t,
						username: i,
						toExcludeNames: r
					} = e;
					return async (e, s, n) => {
						let {
							gqlContext: d
						} = n;
						const o = s(),
							a = Object(T.m)(o);
						if (!(i || a && a.displayText)) return;
						const c = Object(I.h)(i || a.displayText, t),
							l = o.multireddits.models[c];
						if (!l || !l.subredditIds) return;
						e(fe());
						const u = r && r.reduce((e, t) => {
								const i = Object(D.I)(o, t) || Object(D.J)(o, t);
								return i ? [...e, i] : e
							}, []),
							m = await Object(j.a)(d(), {
								count: R.y,
								subredditIds: l.subredditIds,
								toExclude: u
							});
						if (m.ok) {
							const {
								data: t
							} = m.body;
							e(xe({
								multipath: c,
								subreddits: Object(_.b)(t)
							}))
						} else e(he(m.error))
					}
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
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/pick.js"),
				n = i.n(s),
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
				E = i("./src/reddit/selectors/multireddit.ts"),
				j = i("./src/reddit/selectors/user.ts"),
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
				T = (e, t, i, s, n) => async (d, o, u) => {
					const {
						gqlContext: b
					} = u, p = o();
					if (p.listings.postOrder.api.pending[e]) return;
					d(M({
						key: e
					})), s.layout = h.e[Object(f.U)(p, {})];
					const x = {
							path: Object(O.h)(t, i).replace(/\/$/, ""),
							includeIdentity: !0,
							includeSources: !0,
							sort: s.sort ? s.sort.toUpperCase() : void 0,
							range: s.t ? s.t.toUpperCase() : void 0
						},
						S = await Object(k.a)("multireddit", () => Object(c.a)(b(), x)),
						{
							data: E
						} = S.body,
						C = `error-${e}`;
					if (S.ok && E) {
						const r = Object(y.a)(E);
						if (!E.multireddit) return n && d(m.g(C)), void d(D({
							...r,
							error: {
								type: l.K.NOT_FOUND_ERROR
							},
							key: e
						}));
						d(N({
							key: e,
							meta: p.meta,
							...r,
							account: r.account || Object(j.m)(p),
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
						text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: T(e, t, i, s, n)
					}))
				}, F = (e, t) => async (i, r) => {
					const {
						multiredditName: s
					} = e.params;
					let {
						username: a
					} = e.params;
					if (!a) {
						let t = r();
						if (t.user.session && t.user.session.unsafeLoggedOut) return void i(Object(d.c)("/"));
						!t.user.account && t.user.session && await i(b.s()), t = r();
						const {
							account: n
						} = t.user;
						if (!n) return void i(Object(d.c)("/"));
						let c = `/user/${a=Object(S.e)(n)}/m/${s}`;
						const {
							sort: l
						} = e.params;
						return c += l ? `/${l}` : "", void i(Object(d.c)(Object(o.a)(c, e.queryParams)))
					}
					const {
						sort: c = l.bb.HOT
					} = e.params, m = {
						multiredditName: s,
						username: a
					}, h = r();
					a || (a = h.user.account ? Object(S.e)(h.user.account) : "");
					const f = Object(O.h)(a, s),
						y = Object(w.a)(f, c, e.queryParams),
						g = h.listings.postOrder.ids[y],
						j = h.listings.postOrder.api.error[y],
						C = h.listings.postOrder.api.pending[y],
						k = p.H in e.queryParams && e.queryParams[p.H].toUpperCase() || "",
						P = k in l.nc && l.nc[k];
					if (C || g && !j && !t) return void(g && (i(u.n({
						title: Object(E.f)(r(), m)
					})), h.sidebarPromotedPosts.firstFetch || i(Object(v.b)(I.a.MULTIREDDIT))));
					await i(T(y, a, s, {
						...n()(e.queryParams, p.p),
						...n()(e.queryParams, p.o),
						sort: c,
						t: Object(x.a)(c, P)
					}, !0));
					const M = r();
					Object(E.d)(M, m) && i(u.n({
						title: Object(E.f)(r(), m)
					})), Object(_.e)(M, i, e)
				}
		},
		"./src/reddit/actions/subredditAutocomplete/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return h
			}));
			var r = i("./src/lib/makeActionCreator/index.ts"),
				s = i("./src/lib/makeGqlRequest/index.ts"),
				n = i("./src/redditGQL/operations/SubredditTypeaheadSearch.json"),
				d = (e, t) => Object(s.a)(e, {
					...n,
					variables: t
				}),
				o = i("./src/reddit/helpers/graphql/normalizeAllowedPostTypesFromGql/index.ts"),
				a = e => {
					let {
						allowedPostTypes: t,
						id: i,
						isCrosspostDestination: r,
						isNsfw: s,
						name: n,
						styles: d,
						subscribersCount: a
					} = e;
					return {
						allowedPostTypes: Object(o.a)(t),
						communityIcon: d && d.icon || "",
						icon: d && d.legacyIcon && d.legacyIcon.url || "",
						id: i,
						isCrosspostDestination: r,
						isNsfw: s,
						name: n,
						primaryColor: d && d.primaryColor || "",
						subscribers: a
					}
				},
				c = i("./src/reddit/helpers/name/index.ts"),
				l = i("./src/reddit/selectors/subredditAutocomplete.ts"),
				u = i("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const m = Object(r.a)(u.c),
				b = Object(r.a)(u.b),
				p = Object(r.a)(u.a),
				h = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (i, r, s) => {
						let {
							gqlContext: n
						} = s;
						const o = Object(c.i)(e);
						if (!o) return;
						const u = r(),
							h = u.subredditAutocomplete;
						if (h.api.pending[o] || h.models[o]) return;
						if (Object(l.b)(u, {
								substring: o
							})) return;
						i(m({
							key: o
						}));
						const f = await d(n(), {
							query: o,
							includeNsfw: t
						});
						if (f.ok) {
							const e = f.body.data.subredditTypeahead.subreddits.edges.map(e => a(e.node));
							i(b({
								key: o,
								subreddits: e
							}))
						} else i(p({
							key: o,
							error: f.error
						}))
					}
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
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				n = i.n(s),
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
					subredditOrProfile: u.Q
				});
			var y = Object(a.b)(x)(e => {
				let {
					children: t,
					subredditOrProfile: i
				} = e;
				return t(i, n.a.createElement(n.a.Fragment, null, n.a.createElement(h, {
					subredditOrProfile: i
				}), n.a.createElement(f, null, i.displayText)))
			});
			var O = e => {
					let {
						children: t,
						className: i,
						subredditsOrProfilesIds: r
					} = e;
					const s = r.map(e => n.a.createElement(y, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return n.a.createElement("div", {
						className: i
					}, s)
				},
				g = i("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				S = i.n(g);
			const E = p.a.div("CommunityCount", S.a),
				j = p.a.wrapped(O, "SubredditsOrProfiles", S.a),
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
					onSeeMoreDetails: s,
					subredditCategory: d = {
						name: r.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, a = t ? C : w, c = i.length, l = t && i.length > 4;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(E, null, r.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [r.fbt._plural(c, "number"), r.fbt._param("category", d.name)], {
					hk: "33iWe4"
				})), c > 0 && n.a.createElement(j, {
					subredditsOrProfilesIds: t ? i.slice(0, 4) : i
				}, (t, i) => n.a.createElement(a, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, i)), c > 0 && l && n.a.createElement(o.r, {
					onClick: s
				}, r.fbt._("See more", null, {
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
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/times.js"),
				n = i.n(s),
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
					} = e, s = t.filter(e => !e.isSubscribed);
					return s.length ? o.a.createElement(p.b, {
						className: x.a.headerButton,
						dropdownId: "MULTIREDDIT_INFO_DROPDOWN_ID",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(h.b, {
						displayText: r.fbt._("Join all communities", null, {
							hk: "1E2I53"
						}),
						onClick: () => i(s)
					})) : null
				}),
				O = i("./src/reddit/components/SidebarExpandableList/index.tsx"),
				g = i("./src/reddit/components/TrackingHelper/index.tsx"),
				S = i("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				E = i("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				j = i("./src/reddit/selectors/multireddit.ts"),
				C = i("./src/reddit/components/MultiredditInfo/index.m.less"),
				w = i.n(C);
			const {
				fbt: v
			} = i("./node_modules/fbt/lib/FbtPublic.js"), _ = Object(c.c)({
				communities: (e, t) => Object(j.b)(e, t.multireddit)
			}), k = Object(a.b)(_), I = e => {
				let {
					item: t
				} = e;
				return o.a.createElement(S.a, {
					id: t.id,
					iconUrl: t.iconUrl,
					isNSFW: t.isNSFW,
					key: `${t.type}-${t.name}`,
					name: t.name,
					subscribers: t.subscribers,
					isSubscribed: t.isSubscribed,
					widget: void 0,
					sendEvent: t.sendEvent,
					type: t.type
				})
			};
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
					}) : o.a.createElement(E.a, {
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

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			var q = Object(T.a)(e => o.a.createElement(R.a, L({
					style: {
						color: Object(F.a)(e).post
					}
				}, e))),
				U = i("./src/reddit/constants/posts.ts"),
				B = i("./src/reddit/controls/Button/index.tsx"),
				A = i("./src/reddit/models/Multireddit/index.ts"),
				z = i("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				H = i("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less"),
				W = i.n(H),
				G = i("./src/lib/lessComponent.tsx");
			const Q = G.a.div("SidebarTopSpacer", W.a),
				K = G.a.div("ModalTopSpacer", W.a),
				V = G.a.div("SidebarTitleContainer", W.a),
				X = G.a.div("SidebarTitle", W.a),
				Z = G.a.wrapped(N.b, "SidebarFlair", W.a),
				Y = G.a.div("Attributon", W.a),
				J = e => {
					let {
						children: t,
						className: i
					} = e;
					return o.a.createElement(q, {
						className: i,
						html: t
					})
				},
				$ = Object(M.a)(e => {
					let {
						children: t,
						onSeeMoreDetails: i,
						size: s
					} = e;
					const n = !s || "number" != typeof s.height || s.height > 152;
					return o.a.createElement("div", null, o.a.createElement(J, {
						className: Object(u.a)(W.a.FadingDescription, {
							[W.a.shouldFade]: n
						})
					}, t), n && o.a.createElement(B.r, {
						onClick: i
					}, r.fbt._("Read more", null, {
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
						onSeeMoreDetails: s,
						subredditCategory: n
					} = e, d = t === ee.Sidebar, [a, c] = d ? [Q, Y] : [K, Y], l = Object(A.f)(i) ? () => o.a.createElement(a, null, d && o.a.createElement(V, null, o.a.createElement(X, null, i.displayText), i.visibility === A.e.Private && o.a.createElement(Z, {
						text: r.fbt._("Private", null, {
							hk: "4Av1zq"
						})
					}), i.visibility === A.e.Hidden && o.a.createElement(Z, {
						text: r.fbt._("Hidden", null, {
							hk: "4tUfi0"
						})
					})), o.a.createElement(c, null, r.fbt._("Curated by u/{username}.", [r.fbt._param("username", Object(A.i)(i.url))], {
						hk: "1amskX"
					}), " ", o.a.createElement(D.d, {
						seconds: i.created
					}))) : () => null, m = Object(A.f)(i) && i.description ? () => o.a.createElement(a, null, d ? o.a.createElement($, {
						onSeeMoreDetails: s
					}, i.description) : o.a.createElement(q, {
						html: i.description
					})) : () => null, b = [...i.subredditIds && i.subredditIds.map(e => ({
						id: e,
						type: U.a.SUBREDDIT
					})) || [], ...i.profileIds && i.profileIds.map(e => ({
						id: e,
						type: U.a.PROFILE
					})) || []];
					return o.a.createElement("div", {
						className: Object(u.a)(W.a.Component, e.className)
					}, l(), m(), o.a.createElement(z.b, {
						isSidebar: d,
						onSeeMoreDetails: s,
						subredditCategory: n,
						subredditsOrProfilesIds: b
					}))
				},
				ie = i("./node_modules/lodash/debounce.js"),
				re = i.n(ie),
				se = i("./node_modules/lodash/noop.js"),
				ne = i.n(se),
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
						isAutocompletePending: r
					} = this.props;
					return o.a.createElement(xe.a, {
						className: e,
						focusedIndex: t,
						items: i,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						showNoMatchesCaption: !r && 0 === i.length,
						isValid: !0
					})
				}
			}
			var Se = Object(a.b)(Oe)(ge),
				Ee = i("./src/reddit/components/MultiredditManageWidget/index.m.less"),
				je = i.n(Ee);

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
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
					communityInformations: (e, t) => {
						let {
							multireddit: i
						} = t;
						return Object(j.b)(e, i)
					},
					removePending: e => e.multireddits.api.removeSubreddit.pending
				}),
				Ie = Object(a.b)(ke, (e, t) => {
					let {
						multireddit: i
					} = t;
					return {
						addSubredditRequested: (t, r) => {
							const s = r ? Object(be.a)(r) : void 0;
							e(Object(oe.addSubredditRequested)({
								communityInfo: s,
								identifier: t,
								multiredditNames: [i.name]
							}))
						},
						errorToast: t => e(Object(ce.f)({
							text: t,
							kind: fe.b.Error
						})),
						removeSubredditRequested: t => {
							let {
								id: r,
								name: s,
								type: n
							} = t;
							return r && e(Object(oe.removeSubredditRequested)({
								id: r,
								multiredditName: i.name,
								name: s,
								type: n
							}))
						},
						subredditAutocompleteRequested: t => e(Object(ae.a)(t, i.isNSFW))
					}
				}),
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
									const t = Object(me.j)(e),
										i = t.startsWith(de.pc) ? "profile" : "subreddit",
										r = "profile" === i ? t.substring(2) : t;
									this.props.addSubredditRequested({
										name: r,
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
					}, this.onQueryUpdated = re()(this.onQueryUpdated, _e)
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
							removePending: s
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
					return o.a.createElement(E.a, {
						className: je.a.widgetContainer,
						headerButton: o.a.createElement(y, {
							communities: t
						}),
						title: r.fbt._("manage communities", null, {
							hk: "3X8r0d"
						})
					}, o.a.createElement("div", {
						className: Object(u.a)(je.a.bubbleSelector, {
							[je.a.error]: !!a
						}),
						onBlur: this.onBlur,
						onKeyDown: this.onKeydown
					}, n ? o.a.createElement("div", {
						className: Object(u.a)(je.a.bubble, {
							[je.a.selected]: c
						}),
						tabIndex: 0,
						onClick: this.onChoiceSelected
					}, o.a.createElement("img", {
						src: n.iconUrl,
						className: je.a.bubbleIcon
					}), o.a.createElement("span", {
						className: je.a.text
					}, `r/${n.name}`), o.a.createElement(pe.a, {
						className: je.a.closeIcon,
						onClick: this.onChoiceRemoved
					})) : o.a.createElement(he.a, {
						className: je.a.searchIcon
					}), o.a.createElement("input", {
						className: Object(u.a)(je.a.input, {
							[je.a.isEmpty]: !!n
						}),
						onChange: this.onChange,
						onFocus: this.onFocus,
						value: p
					}), !a && (n || p.length > 0) && (e ? o.a.createElement(ue.a, {
						sizePx: we
					}) : o.a.createElement(B.r, {
						className: je.a.addButton,
						onClick: this.onSubmit
					}, r.fbt._("Add", null, {
						hk: "2wi3d4"
					}))), l && o.a.createElement(Se, {
						className: je.a.dropdown,
						focusedIndex: d,
						multireddit: i,
						onEntryFocus: this.onDropdownItemFocus,
						onEntrySelect: this.onDropdownItemSelect,
						substring: p
					})), 0 === t.length ? o.a.createElement("p", {
						className: je.a.emptyText
					}, r.fbt._("Try adding some communities to your custom feed!", null, {
						hk: "3Qe2e3"
					})) : (m ? t : b).map(e => o.a.createElement(S.a, Ce({}, e, {
						buttonDisabled: !!s,
						key: e.id,
						isLoading: s === e.id,
						onTertiaryButtonClick: this.getOnRemoveClickedFn(e),
						sendEvent: ne.a,
						showTertiaryButtonOnHover: !0,
						tertiaryButtonText: r.fbt._("Remove", null, {
							hk: "s2BRg"
						}),
						useTertiaryButton: !0
					}))), t.length > ve && o.a.createElement("div", {
						className: je.a.expandButtonContainer
					}, o.a.createElement(B.r, {
						className: je.a.expandButton,
						onClick: this.onToggleExpand
					}, m ? r.fbt._("show less", null, {
						hk: "Q5bpx"
					}) : r.fbt._("show more", null, {
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
					recommendations: j.k,
					recommendationsError: e => e.multireddits.api.recommendations.error,
					recommendationsPending: e => e.multireddits.api.recommendations.pending
				});
			class Le extends o.a.Component {
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
							recommendationsError: s,
							recommendationsPending: n
						},
						state: {
							memoizedRecommendations: d
						}
					} = this;
					return o.a.createElement(S.b, {
						bottomButtonText: r.fbt._("refresh", null, {
							hk: "2qUiWm"
						}),
						className: Te.a.container,
						communities: d.slice(0, Fe),
						errorMsg: r.fbt._("Couldn't find any recommendations. Try adding more communities first!", null, {
							hk: "3E76C7"
						}),
						isError: !i.length || !!s,
						isLoading: n,
						loadingItemName: e || void 0,
						onBottomButtonClick: this.onRecommendationsRefreshClicked,
						onTertiaryButtonClick: t,
						sendEvent: ne.a,
						showTertiaryButtonOnHover: !0,
						itemButtonDisabled: !!e,
						tertiaryButtonText: r.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						title: r.fbt._("People also added", null, {
							hk: "22fDdF"
						}),
						useTertiaryButton: !0
					})
				}
			}
			var qe = Object(a.b)(Re, (e, t) => ({
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
				}))(Le),
				Ue = i("./src/reddit/components/SidebarContainer/index.tsx"),
				Be = i("./src/reddit/components/SidebarSectionHeader/index.m.less"),
				Ae = i.n(Be),
				ze = G.a.div("Component", Ae.a),
				He = i("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				We = i("./src/reddit/constants/zIndex.ts"),
				Ge = i("./src/reddit/controls/TextButton/index.tsx"),
				Qe = i("./src/reddit/helpers/trackers/idCard.ts"),
				Ke = i("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				Ve = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				Xe = i("./src/reddit/components/MultiredditSidebar/index.m.less"),
				Ze = i.n(Xe);

			function Ye() {
				return (Ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Je = Object(l.a)(e => o.a.createElement(m.e, {
					className: Ze.a.modalContainer
				}, !e.shouldHideHeader && o.a.createElement(m.i, null, o.a.createElement(Ke.a, null, o.a.createElement(m.q, null, e.multireddit.displayText), o.a.createElement(Ge.a, {
					onClick: e.onCloseModal
				}, o.a.createElement(m.b, null)))), o.a.createElement(m.l, null, o.a.createElement(te, {
					mode: ee.Modal,
					multireddit: e.multireddit,
					subredditCategory: e.subredditCategory
				})), e.shouldHideHeader && o.a.createElement(Ge.a, {
					className: Ze.a.closeBtn,
					onClick: e.onCloseModal
				}, o.a.createElement(m.b, null)))),
				$e = e => o.a.createElement(Je, Ye({}, e, {
					overlayCustomStyles: {
						zIndex: We.b
					},
					withOverlay: !0
				})),
				et = () => o.a.createElement(E.a, null, n()(5, e => o.a.createElement("div", {
					className: Object(u.a)(Ze.a.placeholder, Object(Ve.a)({
						isLoading: !0
					})),
					key: e
				}))),
				tt = e => Object(A.f)(e.multireddit) ? Object(A.g)(e.multireddit) ? e.isCurrentUserMultiredditOwner ? o.a.createElement(Ne, {
					multireddit: e.multireddit
				}) : o.a.createElement(P, {
					multireddit: e.multireddit,
					titleText: r.fbt._("Communities in this custom feed", null, {
						hk: "23oj0B"
					})
				}) : o.a.createElement(et, null) : o.a.createElement("div", {
					className: Ze.a.detailsContainer
				}, o.a.createElement(ze, null, e.subredditCategory ? e.subredditCategory.name : r.fbt._("Custom feed details", null, {
					hk: "4Ct8xk"
				})), o.a.createElement(te, {
					mode: ee.Sidebar,
					multireddit: e.multireddit,
					onSeeMoreDetails: e.onSeeMoreDetails,
					onSubredditClick: e.onSubredditClick,
					subredditCategory: e.subredditCategory
				})),
				it = Object(c.c)({
					isCurrentUserMultiredditOwner: (e, t) => {
						let {
							multireddit: i
						} = t;
						return Object(A.f)(i) && Object(j.c)(e, i.url)
					}
				}),
				rt = Object(a.b)(it, (e, t) => {
					let {
						subredditCategory: i
					} = t;
					return {
						trackSeeMoreClicked: () => e((e, t) => Qe.a(t())),
						trackSubredditClicked: t => {
							if (!i) return;
							const r = Object(be.c)(t);
							e((e, t) => Qe.b(t(), r, i.name))
						}
					}
				});
			class st extends o.a.Component {
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
						multiUsername: r,
						subredditCategory: s
					} = this.props, n = t && i.subredditIds && i.subredditIds.length > 0;
					return o.a.createElement(Ue.a, {
						className: e
					}, o.a.createElement(tt, {
						isCurrentUserMultiredditOwner: t,
						multireddit: i,
						subredditCategory: s,
						onSeeMoreDetails: this.openModal,
						onSubredditClick: this.props.trackSubredditClicked
					}), this.state.showModal ? o.a.createElement($e, {
						multireddit: i,
						subredditCategory: s,
						onCloseModal: this.closeModal,
						shouldHideHeader: !!s
					}) : null, n && o.a.createElement(qe, {
						multireddit: i,
						multiUsername: r
					}), o.a.createElement(He.a, null))
				}
			}
			t.a = rt(st)
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
				return E
			}));
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				n = i.n(s),
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
				f = i("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				x = i("./src/reddit/components/OverflowMenu/index.m.less"),
				y = i.n(x);
			const O = c.a.wrapped(m.a, "_Dropdown", y.a),
				g = Object(u.a)(O),
				S = c.a.button("MenuButton", y.a),
				E = c.a.wrapped(b.b, "DropdownRow", y.a),
				j = Object(o.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: i
						} = t;
						return Object(h.b)(i)(e)
					}
				}),
				C = Object(d.b)(j, (e, t) => {
					let {
						dropdownId: i
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: i
						}))
					}
				}),
				w = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = C(e => n.a.createElement(S, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": r.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(a.a)(e.className, {
					[y.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: w(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": f.b.OVERFLOW_MENU
			}, e.icon ? e.icon : n.a.createElement(p.a, {
				name: "overflow_horizontal",
				className: y.a.MenuIcon
			}), n.a.createElement(g, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/take.js"),
				n = i.n(s),
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
					headerButton: s,
					items: a,
					minimizedLength: p,
					onLoadMore: h,
					pending: f,
					renderItem: x,
					title: y
				} = e, [O, g] = Object(d.useState)(!1), S = a.length > p || i, E = (!S || O ? a : n()(a, p)).map(e => x({
					item: e
				})), j = () => {
					O || g(!0), O && !i && g(!1), i && h && h()
				};
				return o.a.createElement(c.a, {
					className: t,
					headerButton: s,
					title: y
				}, E, o.a.createElement(m.a, null, o.a.createElement(b.a, null, S && (() => {
					const e = !O || i && h ? r.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : r.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return o.a.createElement(l.r, {
						onClick: j
					}, f ? o.a.createElement(u.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			p.defaultProps = {
				minimizedLength: a.Xb
			}, t.a = p
		},
		"./src/reddit/components/SidebarSectionHeader/index.m.less": function(e, t, i) {
			e.exports = {
				Component: "_1X2juHHajDXGs8oboBFTY1",
				component: "_1X2juHHajDXGs8oboBFTY1",
				headerStyles: "ySyP3_8M4Wb9GDZa0U3rV"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.m.less": function(e, t, i) {
			e.exports = {
				unstyledMetaSeparator: "_3LS4zudUBagjFS7HjWJYxo",
				metaSeparator: "_37gsGHa8DMRAxBmQS-Ppg8"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			}));
			var r = i("./node_modules/react/index.js"),
				s = i.n(r),
				n = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/controls/MetaSeparator/index.m.less"),
				o = i.n(d);
			const a = e => s.a.createElement("span", {
				className: Object(n.a)(o.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = e => {
				let {
					className: t,
					isSmall: i
				} = e;
				return s.a.createElement(a, {
					className: Object(n.a)(o.a.metaSeparator, t),
					isSmall: i
				})
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
				return S
			})), i.d(t, "b", (function() {
				return E
			}));
			var r = i("./node_modules/react/index.js"),
				s = i.n(r),
				n = i("./src/lib/classNames/index.ts"),
				d = i("./src/lib/lessComponent.tsx"),
				o = i("./src/reddit/components/SubredditIcon/index.tsx"),
				a = i("./src/reddit/controls/MetaSeparator/index.tsx"),
				c = i("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				l = i("./src/reddit/icons/svgs/Link/index.tsx"),
				u = i("./src/reddit/icons/svgs/TextPost/index.tsx"),
				m = i("./src/reddit/icons/svgs/Video/index.tsx"),
				b = i("./src/reddit/layout/row/Inline/index.tsx"),
				p = i("./src/reddit/icons/fonts/index.tsx"),
				h = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				f = i.n(h);
			const x = [{
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
			}, {
				type: "talks",
				Icon: () => s.a.createElement(p.a, {
					name: "audio"
				})
			}];

			function y(e) {
				const {
					allowedPostTypes: t,
					className: i
				} = e;
				return s.a.createElement(b.a, {
					className: Object(n.a)(f.a.rowStyle, i)
				}, x.map((e, i) => {
					let {
						type: r,
						Icon: d
					} = e;
					return s.a.createElement("div", {
						className: Object(n.a)(f.a.iconWrapper, {
							[f.a.mDisabled]: !t[r]
						}),
						key: i
					}, s.a.createElement(d, null))
				}))
			}
			var O = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				g = i.n(O);
			const S = d.a.wrapped(o.b, "subredditIcon", g.a);

			function E(e) {
				const {
					className: t,
					explanationText: i,
					highlight: r,
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
				return s.a.createElement("div", {
					className: Object(n.a)(g.a.container, {
						[g.a.mHighlight]: r
					}, t),
					onClick: l
				}, d, s.a.createElement("div", {
					className: g.a.main
				}, s.a.createElement("span", {
					className: Object(n.a)(g.a.title, {
						[g.a.lockTitleWithEllipsis]: c
					})
				}, b), u && s.a.createElement("span", {
					className: g.a.secondary
				}, u, m && s.a.createElement(s.a.Fragment, null, s.a.createElement(a.a, null), s.a.createElement("span", {
					className: g.a.secondary
				}, m))), i && s.a.createElement("span", {
					className: g.a.secondary
				}, i)), r && p && s.a.createElement(y, {
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
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				n = i.n(s),
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
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}

			function h(e) {
				const {
					item: {
						primaryColor: t,
						iconUrl: i,
						name: s,
						subscribers: m,
						active: h
					},
					shouldPrettyPrint: f,
					explanationText: x,
					shouldShowSubredditOnlineUsers: y = !1
				} = e, O = Object(d.e)(e => Object(l.z)(e, {
					subredditName: s
				})), g = Object(c.d)(s), S = void 0 !== m ? r.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [r.fbt._plural(m, "number", f ? Object(a.b)(m) : void 0)], {
					hk: "2SvJUX"
				}) : void 0, E = O ? r.fbt._("{number users online in subreddit} online", [r.fbt._param("number users online in subreddit", Object(a.b)(O.accountsActive))], {
					hk: "49HfzS"
				}) : void 0, j = y ? `${S} • ${E}` : S, C = void 0 !== h ? r.fbt._({
					"*": "{number} online",
					_1: "1 online"
				}, [r.fbt._plural(h, "number", f ? Object(a.b)(h) : void 0)], {
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
					secondaryText: j,
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
			var r = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/lodash/debounce.js"),
				n = i.n(s),
				d = i("./node_modules/react/index.js"),
				o = i.n(d),
				a = i("./src/lib/classNames/index.ts");
			const c = {
				leading: !0,
				trailing: !1
			};
			var l = function(e, t, i) {
					let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c;
					const s = {
							...c,
							...r
						},
						n = t > e ? 1 : -1;
					let d = e;
					if (e !== t) {
						for (s.leading || (d += n); d !== t;) i(d), d += n;
						s.trailing && i(d)
					} else(s.leading || s.trailing) && i(e)
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
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			var g = e => {
					let {
						className: t,
						children: i,
						title: s,
						onOpenCommunityCreation: n,
						shouldShowCreateCommunityButton: d,
						...c
					} = e;
					return o.a.createElement("div", O({
						className: Object(a.a)(y.a.dropdownSection, t)
					}, c), s && d ? o.a.createElement("div", {
						className: y.a.titleContainer
					}, o.a.createElement("span", {
						className: y.a.titleText
					}, s), o.a.createElement(f.t, {
						className: y.a.srCreationButton,
						onClick: n,
						priority: f.c.Plain,
						size: f.d.XS
					}, r.fbt._("Create New", null, {
						hk: "3WP7G4"
					}))) : s && o.a.createElement("div", {
						className: y.a.title
					}, s), i)
				},
				S = i("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				E = i("./src/reddit/helpers/name/index.ts"),
				j = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx"),
				C = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				w = i.n(C),
				v = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				_ = i.n(v);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
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
				} = e, s = Object(E.e)(t), n = void 0 !== i ? r.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [r.fbt._plural(i, "number")], {
					hk: "2SvJUX"
				}) : void 0, d = o.a.createElement(S.a, {
					className: Object(a.a)(_.a.profileIcon, w.a.subredditIcon)
				});
				return o.a.createElement(j.b, k({
					icon: d,
					title: s,
					secondaryText: n
				}, e))
			}
			var P = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx"),
				M = i("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				N = i.n(M);
			const D = {
				[m.a.OWN_PROFILE]: () => r.fbt._("Your profile", null, {
					hk: "1Qoy4P"
				}),
				[m.a.SUBSCRIBED_TO_SUBREDDIT]: () => r.fbt._("Your communities", null, {
					hk: "2XzKJR"
				}),
				[m.a.OTHER_SUBREDDIT]: () => r.fbt._("Others", null, {
					hk: "3WQHlu"
				}),
				[m.a.MODERATED_SUBREDDIT]: () => r.fbt._("Moderated subreddits", null, {
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
						shouldShowCreateCommunityButton: s
					} = this.props, n = [];
					return this.props.showNoMatchesCaption && n.push(o.a.createElement(g, {
						key: "no-matches"
					}, o.a.createElement("div", {
						className: N.a.noMatches
					}, r.fbt._("No communities found", null, {
						hk: "4wDUHv"
					})))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (r, d, a, c) => {
						const u = [];
						l(a, c, i => {
							const r = t[i],
								s = i === e,
								n = this.getEntryContentComponent(r.type, r.name);
							n && u.push(o.a.createElement(h, {
								entryIndex: i,
								disabled: r.disabled,
								key: r.id || r.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, o.a.createElement(n, {
								highlight: s,
								item: r
							})))
						});
						const b = D[d];
						n.push(o.a.createElement(g, {
							key: d,
							title: b && b(),
							onOpenCommunityCreation: i,
							shouldShowCreateCommunityButton: s && d === m.a.SUBSCRIBED_TO_SUBREDDIT
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
							Object(r.b)() || console.warn(t), s.c.captureMessage(t);
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
			var r = i("./src/reddit/constants/tracking.ts"),
				s = i("./src/reddit/selectors/telemetry.ts"),
				n = i("./src/reddit/selectors/widgets.ts"),
				d = i("./src/telemetry/index.ts");
			const o = e => {
					Object(d.a)({
						...s.o(e),
						action: r.c.CLICK,
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
						...s.o(e),
						action: r.c.CLICK,
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
					action: r.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: s.lb(t)
				})
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, i) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				s = i.n(r),
				n = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				o = i.n(d);
			t.a = e => s.a.createElement("svg", {
				className: Object(n.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				s = i.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
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
			var r = i("./node_modules/react/index.js"),
				s = i.n(r),
				n = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/icons/svgs/TextPost/index.m.less"),
				o = i.n(d);
			t.a = e => s.a.createElement("svg", {
				className: Object(n.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				s = i.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", {
				transform: "translate(3, 4)"
			}, s.a.createElement("path", {
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
			var r = i("./src/lib/lessComponent.tsx"),
				s = i("./src/reddit/layout/row/RightAlign/index.m.less"),
				n = i.n(s);
			t.a = r.a.div("rightAligned", n.a)
		},
		"./src/redditGQL/operations/AllUserMultireddits.json": function(e) {
			e.exports = JSON.parse('{"id":"b65f99b680f5"}')
		},
		"./src/redditGQL/operations/MultiredditListing.json": function(e) {
			e.exports = JSON.parse('{"id":"008f85bde0ad"}')
		},
		"./src/redditGQL/operations/SubredditTypeaheadSearch.json": function(e) {
			e.exports = JSON.parse('{"id":"20edc5ee12df"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar.82f1d36c2ab942e61ffe.js.map