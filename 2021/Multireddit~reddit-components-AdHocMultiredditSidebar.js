// https://www.redditstatic.com/desktop2x/Multireddit~reddit-components-AdHocMultiredditSidebar.5d0b59194d903ea5c5ff.js
// Retrieved at 8/12/2021, 4:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit~reddit-components-AdHocMultiredditSidebar"], {
		"./node_modules/lodash/take.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseSlice.js"),
				i = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : i(t), r(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			const r = e => e;

			function i(e, t, s) {
				const [i, n] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: d = r
				} = t || {};
				let {
					start: o = 0,
					end: a = i
				} = t || {};
				if ((o = o < 0 ? 0 : o) >= (a = a > i ? i : a)) return;
				let c = n(o),
					l = d(c, o),
					u = o;
				for (let r = o + 1; r < a; r++) {
					const e = n(r),
						t = d(e, r);
					if (t !== l) {
						if (!1 === s(c, l, u, r)) return;
						l = t, u = r, c = e
					}
				}
				s(c, l, u, a)
			}
		},
		"./src/reddit/actions/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "q", (function() {
				return r
			})), s.d(t, "r", (function() {
				return i
			})), s.d(t, "s", (function() {
				return n
			})), s.d(t, "t", (function() {
				return d
			})), s.d(t, "u", (function() {
				return o
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "l", (function() {
				return b
			})), s.d(t, "m", (function() {
				return h
			})), s.d(t, "k", (function() {
				return f
			})), s.d(t, "n", (function() {
				return x
			})), s.d(t, "o", (function() {
				return E
			})), s.d(t, "p", (function() {
				return O
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "A", (function() {
				return _
			})), s.d(t, "B", (function() {
				return j
			})), s.d(t, "z", (function() {
				return I
			})), s.d(t, "y", (function() {
				return C
			})), s.d(t, "v", (function() {
				return w
			})), s.d(t, "w", (function() {
				return v
			})), s.d(t, "x", (function() {
				return D
			})), s.d(t, "d", (function() {
				return T
			}));
			const r = "MULTIREDDIT__MORE_POSTS_FAILED",
				i = "MULTIREDDIT__MORE_POSTS_LOADED",
				n = "MULTIREDDIT__MORE_POSTS_PENDING",
				d = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				o = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				a = "MULTIREDDIT__CREATE_FAILURE",
				c = "MULTIREDDIT__CREATE_PENDING",
				l = "MULTIREDDIT__CREATE_SUCCESS",
				u = "MULTIREDDIT__DELETE_PENDING",
				m = "MULTIREDDIT__DELETE_SUCCESS",
				p = "MULTIREDDIT__DELETE_FAILURE",
				b = "MULTIREDDIT__DUPLICATE_PENDING",
				h = "MULTIREDDIT__DUPLICATE_SUCCESS",
				f = "MULTIREDDIT__DUPLICATE_FAILURE",
				x = "MULTIREDDIT__EDIT_FAILURE",
				E = "MULTIREDDIT__EDIT_PENDING",
				O = "MULTIREDDIT__EDIT_SUCCESS",
				y = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				S = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				g = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				_ = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				j = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				I = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				C = 10,
				w = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				v = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				D = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var T;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(T || (T = {}))
		},
		"./src/reddit/actions/multireddit/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "morePostsFailed", (function() {
				return U
			})), s.d(t, "morePostsLoaded", (function() {
				return L
			})), s.d(t, "morePostsPending", (function() {
				return F
			})), s.d(t, "moreOfMyMultiRequested", (function() {
				return q
			})), s.d(t, "myMultiredditsPending", (function() {
				return A
			})), s.d(t, "myMultiredditsReceived", (function() {
				return B
			})), s.d(t, "myMultiredditsRequested", (function() {
				return G
			})), s.d(t, "createFailure", (function() {
				return W
			})), s.d(t, "createPending", (function() {
				return z
			})), s.d(t, "createSuccess", (function() {
				return H
			})), s.d(t, "createRequested", (function() {
				return Q
			})), s.d(t, "reloadCurrentMultiredditFeedRequested", (function() {
				return V
			})), s.d(t, "duplicateFailure", (function() {
				return K
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
				return re
			})), s.d(t, "removeSubredditFailure", (function() {
				return ie
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/pick.js"),
				n = s.n(i),
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
				E = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				O = s("./src/lib/makeGqlRequest/index.ts"),
				y = s("./src/redditGQL/operations/AllUserMultireddits.json"),
				S = s("./src/reddit/endpoints/page/multiredditListing.ts"),
				g = s("./src/redditGQL/operations/SubredditRecommendations.json"),
				_ = s("./src/reddit/helpers/filterListingResponse/index.ts"),
				j = s("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				I = s("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				w = e => {
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
					const r = e.subreddits.map(e => {
							const t = e.data,
								{
									name: s,
									display_name: r
								} = t;
							return {
								id: s,
								displayName: r.toLowerCase()
							}
						}).sort((e, t) => e.displayName.localeCompare(t.displayName)),
						i = r.filter(e => !e.displayName.startsWith(o.ec)).map(e => e.id),
						n = r.filter(e => e.displayName.startsWith(o.ec)).map(e => e.id);
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
						subredditIds: i,
						url: e.path.toLowerCase(),
						visibility: e.visibility
					}
				},
				v = s("./src/reddit/models/Multireddit/index.ts"),
				D = s("./src/reddit/models/Toast/index.ts"),
				T = s("./src/reddit/selectors/multireddit.ts"),
				M = s("./src/reddit/selectors/platform.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				R = s("./src/reddit/actions/multireddit/constants.ts");
			const U = Object(c.a)(R.q),
				L = Object(c.a)(R.r),
				F = Object(c.a)(R.s),
				q = e => async (t, s, r) => {
					const {
						gqlContext: i
					} = r, {
						sort: n = o.U.HOT,
						multiredditName: d,
						username: a
					} = e, c = s(), u = c.platform.currentPage, m = u ? u.queryParams : {}, p = Object(T.d)(c, {
						multiredditName: d,
						username: a
					}), b = Object(l.a)(p.url, n, m), h = c.listings.postOrder.loadMore[b];
					if (!h) return;
					const f = c.listings.postOrder.api.pending[b],
						x = c.listings.postOrder.fetchedTokens,
						E = x[b] && x[b][h.token] || !1;
					if (f || E) return;
					t(F({
						key: b,
						fetchedToken: h.token
					}));
					const O = p.url.replace(/\/$/, ""),
						y = m.t ? m.t.toUpperCase() : void 0,
						g = {
							after: h.token,
							includeIdentity: !1,
							includeSources: !1,
							path: O,
							range: y,
							sort: n.toUpperCase()
						},
						j = await Object(S.a)(i(), g),
						{
							data: C
						} = j.body,
						w = Object(I.a)(C);
					j.ok && C && C.multireddit ? t(L({
						fetchedToken: h.token,
						key: b,
						meta: c.meta,
						...w,
						...Object(_.a)(c, b, w),
						multiredditsModelsState: c.multireddits.models
					})) : t(U({
						error: {
							type: o.G.NOT_FOUND_ERROR
						},
						fetchedToken: h.token,
						key: b,
						...j.body,
						...Object(_.a)(c, b, w)
					}))
				}, A = Object(c.a)(R.t), B = Object(c.a)(R.u), G = (e, t = !1) => async (s, r, {
					apiContext: i,
					gqlContext: n
				}) => {
					const d = r();
					if (!Object(P.j)(d)) return;
					if (!e && Object(T.h)(d) || Object(T.i)(d)) return;
					s(A());
					const o = await ((e, t) => Object(O.a)(e, {
						...y,
						variables: t
					}))(n(), {
						includeSources: t
					});
					if (o.ok) {
						const e = o.body.data.identity.allMultireddits.edges.map(e => e.node),
							t = Object(j.b)(e);
						s(B({
							...t,
							multiredditsModelsState: d.multireddits.models
						}))
					}
				}, W = Object(c.a)(R.e), z = Object(c.a)(R.f), H = Object(c.a)(R.g), Q = ({
					description: e,
					displayName: t,
					shouldNavigate: s
				}) => async (i, n, {
					apiContext: a
				}) => {
					const c = n(),
						l = Object(P.j)(c);
					if (!l) return;
					i(z());
					const m = await ((e, t, s) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/multi`),
						data: {
							model: JSON.stringify({
								description_md: s,
								display_name: t,
								visibility: "private",
								subreddits: []
							})
						},
						method: o.hb.POST
					}))(a(), t, e);
					if (m.ok) {
						const {
							id: e
						} = l;
						if (await i(H({
								multireddit: w(m.body.data),
								multiredditsModelsState: c.multireddits.models,
								userId: e
							})), s) {
							i(Object(u.f)());
							const e = m.body.data.path.toLowerCase();
							await i(Object(d.b)(e))
						}
						i(Object(p.f)({
							text: r.fbt._("Custom feed created!", null, {
								hk: "258cY9"
							})
						}))
					} else i(W(m.error))
				}, V = () => async (e, t, {
					apiContext: s
				}) => {
					const r = t(),
						i = Object(P.j)(r),
						d = Object(M.h)(r) ? Object(M.k)(r) : Object(M.b)(r),
						a = d && d.routeMatch && d.routeMatch.match;
					if (!a) return;
					const c = a.params,
						u = c.sort || o.U.HOT,
						{
							multiredditName: p,
							username: h
						} = c;
					if (!p) return;
					const f = Object(v.h)((h || i && i.displayText || "").toLowerCase(), p.toLowerCase()),
						{
							queryParams: x
						} = a,
						E = Object(l.a)(f, u, x),
						O = b.x in x && x[b.x].toUpperCase() || "",
						y = o.cc[O] || !1,
						S = Object(P.j)(r);
					(h || S && S.displayText) && await e(Object(m.multiredditFeedRequested)(E, (h || S.displayText).toLowerCase(), p.toLowerCase(), {
						...n()(x, b.l),
						...n()(x, b.k),
						sort: u,
						t: Object(N.a)(u, y)
					}))
				}, K = Object(c.a)(R.k), Z = Object(c.a)(R.l), Y = Object(c.a)(R.m), X = ({
					description: e,
					displayName: t,
					fromName: s,
					fromUsername: i
				}) => async (n, a, {
					apiContext: c
				}) => {
					const l = a(),
						m = Object(P.j)(l);
					if (!m || !m.displayText) return;
					const b = Object(v.h)((i || m.displayText).toLowerCase(), s.toLowerCase());
					n(Z());
					const O = await ((e, t) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/multi/copy`),
						data: {
							description_md: t.description,
							display_name: t.displayName,
							expand_srs: !0,
							from: t.from
						},
						method: o.hb.POST
					}))(c(), {
						from: b,
						displayName: t,
						description: e
					});
					if (O.ok) {
						const e = w(O.body.data);
						n(Object(u.f)()), n(Y({
							multireddit: e,
							multiredditsModelsState: l.multireddits.models,
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
					} else n(K(O.error)), n(Object(p.f)({
						text: r.fbt._("Something went wrong duplicating {multiName}", [r.fbt._param("multiName", s)], {
							hk: "4bzN2D"
						})
					}))
				}, $ = Object(c.a)(R.b), J = Object(c.a)(R.c), ee = Object(c.a)(R.a), te = ({
					communityInfo: e,
					identifier: t,
					multiredditNames: s
				}) => async (i, n, {
					apiContext: d
				}) => {
					const c = n(),
						l = Object(P.j)(c);
					if (!l || c.multireddits.api.addSubreddit.pending) return;
					i($({
						name: t.name
					}));
					const {
						displayText: m
					} = l;
					if (!m) return;
					const b = s.map(e => `/user/${m.toLowerCase()}/m/${e.toLowerCase()}`).join(","),
						O = `${"profile"===t.type?o.ec:""}${t.name}`,
						y = await ((e, t, s) => Object(h.a)(Object(f.a)(e, [x.a]), {
							endpoint: Object(E.a)(`${e.apiUrl}/api/multi/bulk_add/r/${t}`),
							data: {
								paths: s
							},
							method: o.hb.PUT
						}))(d(), O, b);
					if (y.ok) {
						const n = Object(k.K)(c, {
								identifier: t
							}) || e && e.id || "",
							d = s.map(e => Object(v.h)(m, e));
						i(Object(u.f)()), i(Object(p.f)({
							text: r.fbt._({
								"*": "Successfully added {communityName} to {number} custom feeds!",
								_1: "Successfully added {communityName} to 1 custom feed!"
							}, [r.fbt._param("communityName", `${"subreddit"===t.type?a.d.subreddit:a.d.profile}${t.name}`), r.fbt._plural(s.length, "number")], {
								hk: "9EXsM"
							})
						})), await i(J({
							communityInfo: e,
							id: n,
							multipaths: d,
							type: t.type
						})), 1 === s.length && await i(V())
					} else {
						i(ee(y.error));
						let e = r.fbt._("Sorry, something went wrong adding {subredditName}.", [r.fbt._param("subredditName", t.name)], {
							hk: "ERdWO"
						});
						y.body && (y.body.reason === R.d.TooManySubreddits ? e = r.fbt._("Maximum communities reached", null, {
							hk: "2eguyW"
						}) : y.body.reason === R.d.InvalidSrQuarantine && (e = r.fbt._("{communityname} is invalid because it is quarantined", [r.fbt._param("communityname", `${"subreddit"===t.type?a.d.subreddit:a.d.profile}${t.name}`)], {
							hk: "407xmS"
						}))), i(Object(p.f)({
							text: e,
							kind: D.b.Error
						}))
					}
				}, se = Object(c.a)(R.w), re = Object(c.a)(R.x), ie = Object(c.a)(R.v), ne = ({
					id: e,
					multiredditName: t,
					name: s,
					type: i
				}) => async (n, d, {
					apiContext: a
				}) => {
					const c = d(),
						l = Object(P.j)(c);
					if (!l || !l.displayText || c.multireddits.api.removeSubreddit.pending) return;
					n(se({
						id: e
					}));
					const {
						displayText: m
					} = l, b = Object(v.h)(m, t), O = `${"profile"===i?o.ec:""}${s}`, y = await ((e, t, s) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/multi${s}r/${t}`),
						method: o.hb.DELETE
					}))(a(), O, b);
					y.ok ? (n(Object(u.f)()), n(re({
						id: e,
						multipath: b,
						type: i
					})), n(Object(p.f)({
						text: r.fbt._("{subredditname} removed from your custom feed!", [r.fbt._param("subredditname", s)], {
							hk: "uaWNe"
						}),
						buttonText: r.fbt._("undo", null, {
							hk: "3HH7IT"
						}),
						buttonAction: te({
							identifier: {
								name: s,
								type: i
							},
							multiredditNames: [t]
						})
					})), n(V())) : (n(ie(y.error)), n(Object(p.f)({
						text: r.fbt._("Sorry, something went wrong removing {subredditName}.", [r.fbt._param("subredditName", s)], {
							hk: "1E1rKm"
						})
					})))
				}, de = Object(c.a)(R.h), oe = Object(c.a)(R.i), ae = Object(c.a)(R.j), ce = e => async (t, s, {
					apiContext: i
				}) => {
					const n = s();
					if (!Object(P.j)(n)) return;
					t(oe());
					const a = await ((e, t) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/multi${t}`),
						method: o.hb.DELETE
					}))(i(), e);
					a.ok ? (await t(ae(e)), t(Object(u.f)()), await t(Object(d.b)("/")), t(Object(p.f)({
						text: r.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(de(a.error))
				}, le = Object(c.a)(R.n), ue = Object(c.a)(R.o), me = Object(c.a)(R.p), pe = ({
					description: e,
					displayText: t,
					multipath: s,
					visibility: i
				}) => async (n, d, {
					apiContext: a
				}) => {
					const c = d();
					if (!Object(P.J)(c)) return;
					n(ue());
					const l = await (({
						context: e,
						description: t,
						displayText: s,
						multipath: r,
						visibility: i
					}) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/multi${r}`),
						data: {
							model: JSON.stringify({
								description_md: t,
								display_name: s,
								visibility: i
							}),
							expand_srs: !0
						},
						method: o.hb.PUT
					}))({
						context: a(),
						description: e,
						displayText: t,
						multipath: s,
						visibility: i
					});
					l.ok ? (await n(me(w(l.body.data))), n(Object(u.f)()), n(Object(p.f)({
						text: r.fbt._("Custom feed updated!", null, {
							hk: "39R30f"
						})
					}))) : (n(le(l.error)), n(Object(p.f)({
						kind: D.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "1Y6lli"
						})
					})))
				}, be = Object(c.a)(R.z), he = Object(c.a)(R.A), fe = Object(c.a)(R.B), xe = ({
					multiredditName: e,
					username: t,
					toExcludeNames: s
				}) => async (r, i, {
					gqlContext: n
				}) => {
					const d = i(),
						o = Object(P.j)(d);
					if (!(t || o && o.displayText)) return;
					const a = Object(v.h)(t || o.displayText, e),
						c = d.multireddits.models[a];
					if (!c || !c.subredditIds) return;
					r(he());
					const l = s && s.reduce((e, t) => {
							const s = Object(k.E)(d, t) || Object(k.F)(d, t);
							return s ? [...e, s] : e
						}, []),
						u = await ((e, t) => Object(O.a)(e, {
							...g,
							variables: t
						}))(n(), {
							count: R.y,
							subredditIds: c.subredditIds,
							toExclude: l
						});
					if (u.ok) {
						const {
							data: e
						} = u.body;
						r(fe({
							multipath: a,
							subreddits: Object(C.b)(e)
						}))
					} else r(be(u.error))
				}
		},
		"./src/reddit/actions/pages/multireddit/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "multiredditFeedPending", (function() {
				return M
			})), s.d(t, "multiredditFeedLoaded", (function() {
				return k
			})), s.d(t, "multiredditFeedFailed", (function() {
				return P
			})), s.d(t, "multiredditFeedRequested", (function() {
				return N
			})), s.d(t, "multiredditRequested", (function() {
				return R
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/pick.js"),
				n = s.n(i),
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
				E = s("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				O = s("./src/reddit/models/Multireddit/index.ts"),
				y = s("./src/reddit/models/Toast/index.ts"),
				S = s("./src/reddit/models/User/index.ts"),
				g = s("./src/reddit/selectors/multireddit.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				j = s("./src/lib/makeActionCreator/index.ts"),
				I = s("./src/lib/makeListingKey/index.ts"),
				C = s("./src/reddit/actions/ads/index.ts"),
				w = s("./src/reddit/helpers/canonicalUrls.ts"),
				v = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				D = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				T = s("./src/reddit/actions/pages/multireddit/constants.ts");
			const M = Object(j.a)(T.c),
				k = Object(j.a)(T.b),
				P = Object(j.a)(T.a),
				N = (e, t, s, i, n) => async (d, o, u) => {
					const {
						gqlContext: p
					} = u, b = o();
					if (b.listings.postOrder.api.pending[e]) return;
					d(M({
						key: e
					})), i.layout = h.e[Object(f.O)(b, {})];
					const x = {
							path: Object(O.h)(t, s).replace(/\/$/, ""),
							includeIdentity: !0,
							includeSources: !0,
							sort: i.sort ? i.sort.toUpperCase() : void 0,
							range: i.t ? i.t.toUpperCase() : void 0
						},
						S = await Object(v.a)("multireddit", () => Object(c.a)(p(), x)),
						{
							data: g
						} = S.body,
						j = `error-${e}`;
					if (S.ok && g) {
						const r = Object(E.a)(g);
						if (!g.multireddit) return n && d(m.g(j)), void d(P({
							...r,
							error: {
								type: l.G.NOT_FOUND_ERROR
							},
							key: e
						}));
						d(k({
							key: e,
							meta: b.meta,
							...r,
							account: r.account || Object(_.j)(b),
							multiredditsModelsState: b.multireddits.models
						})), n && d(m.g(j)), d(Object(a.recommendationsRequested)({
							multiredditName: s,
							username: t
						})), window.addEventListener("load", () => {
							d(Object(C.b)(D.a.MULTIREDDIT))
						})
					} else n && d(m.f({
						id: j,
						kind: y.b.Error,
						text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: N(e, t, s, i, n)
					}))
				}, R = (e, t) => async (s, r) => {
					const {
						multiredditName: i
					} = e.params;
					let {
						username: a
					} = e.params;
					if (!a) {
						let t = r();
						if (t.user.session && t.user.session.unsafeLoggedOut) return void s(Object(d.c)("/"));
						!t.user.account && t.user.session && await s(p.r()), t = r();
						const {
							account: n
						} = t.user;
						if (!n) return void s(Object(d.c)("/"));
						let c = `/user/${a=Object(S.e)(n)}/m/${i}`;
						const {
							sort: l
						} = e.params;
						return c += l ? `/${l}` : "", void s(Object(d.c)(Object(o.a)(c, e.queryParams)))
					}
					const {
						sort: c = l.U.HOT
					} = e.params, m = {
						multiredditName: i,
						username: a
					}, h = r();
					a || (a = h.user.account ? Object(S.e)(h.user.account) : "");
					const f = Object(O.h)(a, i),
						E = Object(I.a)(f, c, e.queryParams),
						y = h.listings.postOrder.ids[E],
						_ = h.listings.postOrder.api.error[E],
						j = h.listings.postOrder.api.pending[E],
						v = b.x in e.queryParams && e.queryParams[b.x].toUpperCase() || "",
						T = v in l.cc && l.cc[v];
					if (j || y && !_ && !t) return void(y && (s(u.l({
						title: Object(g.f)(r(), m)
					})), h.sidebarPromotedPosts.firstFetch || s(Object(C.b)(D.a.MULTIREDDIT))));
					await s(N(E, a, i, {
						...n()(e.queryParams, b.l),
						...n()(e.queryParams, b.k),
						sort: c,
						t: Object(x.a)(c, T)
					}, !0));
					const M = r();
					Object(g.d)(M, m) && s(u.l({
						title: Object(g.f)(r(), m)
					})), Object(w.c)(M, s, e)
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return n
			}));
			const r = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				i = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				n = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/subredditAutocomplete/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				n = s("./src/redditGQL/operations/SubredditTypeaheadSearch.json"),
				d = s("./src/reddit/helpers/graphql/normalizeAllowedPostTypesFromGql/index.ts"),
				o = s("./src/reddit/helpers/name/index.ts"),
				a = s("./src/reddit/selectors/subredditAutocomplete.ts"),
				c = s("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const l = Object(r.a)(c.c),
				u = Object(r.a)(c.b),
				m = Object(r.a)(c.a),
				p = (e, t = !1) => async (s, r, {
					gqlContext: c
				}) => {
					const p = Object(o.g)(e);
					if (!p) return;
					const b = r(),
						h = b.subredditAutocomplete;
					if (h.api.pending[p] || h.models[p]) return;
					if (Object(a.b)(b, {
							substring: p
						})) return;
					s(l({
						key: p
					}));
					const f = await ((e, t) => Object(i.a)(e, {
						...n,
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
							isNsfw: r,
							name: i,
							styles: n,
							subscribersCount: o
						}) => ({
							allowedPostTypes: Object(d.a)(e),
							communityIcon: n && n.icon || "",
							icon: n && n.legacyIcon && n.legacyIcon.url || "",
							id: t,
							isCrosspostDestination: s,
							isNsfw: r,
							name: i,
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
				return j
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
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
			var E = Object(a.b)(x)(({
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
					const r = s.map(t => n.a.createElement(E, {
						children: e,
						key: t.id,
						identifier: t
					}));
					return n.a.createElement("div", {
						className: t
					}, r)
				},
				y = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				S = s.n(y);
			const g = b.a.div("CommunityCount", S.a),
				_ = b.a.wrapped(O, "SubredditsOrProfiles", S.a),
				j = b.a.wrapped(d.a, "SidebarSubreddit", S.a),
				I = b.a.wrapped(d.a, "ModalSubreddit", S.a);
			var C;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(C || (C = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: s,
					onSeeMoreDetails: i,
					subredditCategory: d = {
						name: r.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, a = t ? j : I, c = s.length, l = t && s.length > 4;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(g, null, r.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [r.fbt._plural(c, "number"), r.fbt._param("category", d.name)], {
					hk: "33iWe4"
				})), c > 0 && n.a.createElement(_, {
					subredditsOrProfilesIds: t ? s.slice(0, 4) : s
				}, (t, s) => n.a.createElement(a, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, s)), c > 0 && l && n.a.createElement(o.o, {
					onClick: i
				}, r.fbt._("See more", null, {
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/times.js"),
				n = s.n(i),
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
			var E = Object(a.b)(null, e => ({
					subscribe: t => e(Object(p.d)(t, !0))
				}))(e => {
					const {
						communities: t,
						subscribe: s
					} = e, i = t.filter(e => !e.isSubscribed);
					return i.length ? o.a.createElement(b.b, {
						className: x.a.headerButton,
						dropdownId: "MULTIREDDIT_INFO_DROPDOWN_ID",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(h.b, {
						displayText: r.fbt._("Join all communities", null, {
							hk: "1E2I53"
						}),
						onClick: () => s(i)
					})) : null
				}),
				O = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				g = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				_ = s("./src/reddit/selectors/multireddit.ts"),
				j = s("./src/reddit/components/MultiredditInfo/index.m.less"),
				I = s.n(j);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = Object(c.c)({
				communities: (e, t) => Object(_.b)(e, t.multireddit)
			}), v = Object(a.b)(w), D = ({
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
			var T = Object(y.c)(v(e => {
					const {
						communities: t,
						titleText: s
					} = e;
					return t.length ? o.a.createElement(O.a, {
						items: t,
						minimizedLength: 5,
						title: s,
						headerButton: o.a.createElement(E, {
							communities: t
						}),
						renderItem: D
					}) : o.a.createElement(g.a, {
						title: s
					}, o.a.createElement("div", {
						className: I.a.noSubredditsText
					}, C._("This custom feed does not yet contain any communities.", null, {
						hk: "35QJZi"
					})))
				})),
				M = s("./src/higherOrderComponents/sizeMe.tsx"),
				k = s("./src/reddit/components/Flair/index.tsx"),
				P = s("./src/reddit/components/HumanDate/index.tsx"),
				N = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				R = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				U = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var F = Object(N.a)(e => o.a.createElement(U.a, L({
					style: {
						color: Object(R.a)(e).post
					}
				}, e))),
				q = s("./src/reddit/constants/posts.ts"),
				A = s("./src/reddit/controls/Button/index.tsx"),
				B = s("./src/reddit/models/Multireddit/index.ts"),
				G = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				W = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/index.m.less"),
				z = s.n(W),
				H = s("./src/lib/lessComponent.tsx");
			const Q = H.a.div("SidebarTopSpacer", z.a),
				V = H.a.div("ModalTopSpacer", z.a),
				K = H.a.div("SidebarTitleContainer", z.a),
				Z = H.a.div("SidebarTitle", z.a),
				Y = H.a.wrapped(k.a, "SidebarFlair", z.a),
				X = H.a.div("Attributon", z.a),
				$ = ({
					children: e,
					className: t
				}) => o.a.createElement(F, {
					className: t,
					html: e
				}),
				J = Object(M.a)(({
					children: e,
					onSeeMoreDetails: t,
					size: s
				}) => {
					const i = !s || "number" != typeof s.height || s.height > 152;
					return o.a.createElement("div", null, o.a.createElement($, {
						className: Object(u.a)(z.a.FadingDescription, {
							[z.a.shouldFade]: i
						})
					}, e), i && o.a.createElement(A.o, {
						onClick: t
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
						multireddit: s,
						onSeeMoreDetails: i,
						subredditCategory: n
					} = e, d = t === ee.Sidebar, [a, c] = d ? [Q, X] : [V, X], l = Object(B.f)(s) ? () => o.a.createElement(a, null, d && o.a.createElement(K, null, o.a.createElement(Z, null, s.displayText), s.visibility === B.e.Private && o.a.createElement(Y, {
						text: r.fbt._("Private", null, {
							hk: "4Av1zq"
						})
					}), s.visibility === B.e.Hidden && o.a.createElement(Y, {
						text: r.fbt._("Hidden", null, {
							hk: "4tUfi0"
						})
					})), o.a.createElement(c, null, r.fbt._("Curated by u/ {username}", [r.fbt._param("username", Object(B.i)(s.url))], {
						hk: "1AxWQt"
					}), "· ", o.a.createElement(P.d, {
						seconds: s.created
					}))) : () => null, m = Object(B.f)(s) && s.description ? () => o.a.createElement(a, null, d ? o.a.createElement(J, {
						onSeeMoreDetails: i
					}, s.description) : o.a.createElement(F, {
						html: s.description
					})) : () => null, p = [...s.subredditIds && s.subredditIds.map(e => ({
						id: e,
						type: q.a.SUBREDDIT
					})) || [], ...s.profileIds && s.profileIds.map(e => ({
						id: e,
						type: q.a.PROFILE
					})) || []];
					return o.a.createElement("div", {
						className: Object(u.a)(z.a.Component, e.className)
					}, l(), m(), o.a.createElement(G.b, {
						isSidebar: d,
						onSeeMoreDetails: i,
						subredditCategory: n,
						subredditsOrProfilesIds: p
					}))
				},
				se = s("./node_modules/lodash/debounce.js"),
				re = s.n(se),
				ie = s("./node_modules/lodash/noop.js"),
				ne = s.n(ie),
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
				Ee = s("./src/reddit/selectors/subredditAutocomplete.ts");
			const Oe = Object(c.c)({
				isAutocompletePending: Ee.c,
				items: Ee.e
			});
			class ye extends o.a.Component {
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
						isAutocompletePending: r
					} = this.props;
					return o.a.createElement(xe.a, {
						className: e,
						focusedIndex: t,
						items: s,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						showNoMatchesCaption: !r && 0 === s.length,
						isValid: !0
					})
				}
			}
			var Se = Object(a.b)(Oe)(ye),
				ge = s("./src/reddit/components/MultiredditManageWidget/index.m.less"),
				_e = s.n(ge);

			function je() {
				return (je = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Ie = 12,
				Ce = 5,
				we = 500,
				ve = Object(c.c)({
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					communityInformations: (e, {
						multireddit: t
					}) => Object(_.b)(e, t),
					removePending: e => e.multireddits.api.removeSubreddit.pending
				}),
				De = Object(a.b)(ve, (e, {
					multireddit: t
				}) => ({
					addSubredditRequested: (s, r) => {
						const i = r ? Object(fe.g)(r) : void 0;
						e(Object(oe.addSubredditRequested)({
							communityInfo: i,
							identifier: s,
							multiredditNames: [t.name]
						}))
					},
					errorToast: t => e(Object(ce.f)({
						text: t,
						kind: he.b.Error
					})),
					removeSubredditRequested: ({
						id: s,
						name: r,
						type: i
					}) => s && e(Object(oe.removeSubredditRequested)({
						id: s,
						multiredditName: t.name,
						name: r,
						type: i
					})),
					subredditAutocompleteRequested: s => e(Object(ae.a)(s, t.isNSFW))
				})),
				Te = {
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
							...Te,
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
										s = t.startsWith(de.ec) ? "profile" : "subreddit",
										r = "profile" === s ? t.substring(2) : t;
									this.props.addSubredditRequested({
										name: r,
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
						...Te,
						memoizedShortList: e.communityInformations.slice(0, Ce)
					}, this.onQueryUpdated = re()(this.onQueryUpdated, we)
				}
				componentDidUpdate(e) {
					!this.props.addSubredditPending && e.addSubredditPending && (this.props.addSubredditError ? this.setState({
						isAddError: this.props.addSubredditError
					}) : this.setState(Te)), this.props.communityInformations.length !== e.communityInformations.length && this.setState({
						memoizedShortList: this.props.communityInformations.slice(0, Ce)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							communityInformations: t,
							multireddit: s,
							removePending: i
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
					return o.a.createElement(g.a, {
						className: _e.a.widgetContainer,
						headerButton: o.a.createElement(E, {
							communities: t
						}),
						title: r.fbt._("manage communities", null, {
							hk: "3X8r0d"
						})
					}, o.a.createElement("div", {
						className: Object(u.a)(_e.a.bubbleSelector, {
							[_e.a.error]: !!a
						}),
						onBlur: this.onBlur,
						onKeyDown: this.onKeydown
					}, n ? o.a.createElement("div", {
						className: Object(u.a)(_e.a.bubble, {
							[_e.a.selected]: c
						}),
						tabIndex: 0,
						onClick: this.onChoiceSelected
					}, o.a.createElement("img", {
						src: n.iconUrl,
						className: _e.a.bubbleIcon
					}), o.a.createElement("span", {
						className: _e.a.text
					}, `r/${n.name}`), o.a.createElement(pe.a, {
						className: _e.a.closeIcon,
						onClick: this.onChoiceRemoved
					})) : o.a.createElement(be.a, {
						className: _e.a.searchIcon
					}), o.a.createElement("input", {
						className: Object(u.a)(_e.a.input, {
							[_e.a.isEmpty]: !!n
						}),
						onChange: this.onChange,
						onFocus: this.onFocus,
						value: b
					}), !a && (n || b.length > 0) && (e ? o.a.createElement(ue.a, {
						sizePx: Ie
					}) : o.a.createElement(A.o, {
						className: _e.a.addButton,
						onClick: this.onSubmit
					}, r.fbt._("Add", null, {
						hk: "2wi3d4"
					}))), l && o.a.createElement(Se, {
						className: _e.a.dropdown,
						focusedIndex: d,
						multireddit: s,
						onEntryFocus: this.onDropdownItemFocus,
						onEntrySelect: this.onDropdownItemSelect,
						substring: b
					})), 0 === t.length ? o.a.createElement("p", {
						className: _e.a.emptyText
					}, r.fbt._("Try adding some communities to your custom feed!", null, {
						hk: "3Qe2e3"
					})) : (m ? t : p).map(e => o.a.createElement(S.a, je({}, e, {
						buttonDisabled: !!i,
						key: e.id,
						isLoading: i === e.id,
						onTertiaryButtonClick: this.getOnRemoveClickedFn(e),
						sendEvent: ne.a,
						showTertiaryButtonOnHover: !0,
						tertiaryButtonText: r.fbt._("Remove", null, {
							hk: "s2BRg"
						}),
						useTertiaryButton: !0
					}))), t.length > Ce && o.a.createElement("div", {
						className: _e.a.expandButtonContainer
					}, o.a.createElement(A.o, {
						className: _e.a.expandButton,
						onClick: this.onToggleExpand
					}, m ? r.fbt._("show less", null, {
						hk: "Q5bpx"
					}) : r.fbt._("show more", null, {
						hk: "2B9cqo"
					}))))
				}
			}
			var ke = De(Me),
				Pe = s("./src/reddit/components/MultiredditSuggestionsWidget/index.m.less"),
				Ne = s.n(Pe);
			const Re = 5,
				Ue = Object(c.c)({
					addSubredditPending: e => e.multireddits.api.addSubreddit.pending,
					addSubredditError: e => e.multireddits.api.addSubreddit.error,
					addSubredditFetched: e => e.multireddits.api.addSubreddit.fetched,
					recommendations: _.k,
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
							recommendationsToExclude: [...e.recommendationsToExclude, ...e.memoizedRecommendations.slice(0, Re).map(e => e.name)]
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
						this.state.memoizedRecommendations.length < Re && this.props.recommendationsRefreshed(this.state.recommendationsToExclude)
					})
				}
				render() {
					const {
						props: {
							addSubredditPending: e,
							addSubredditRequested: t,
							recommendations: s,
							recommendationsError: i,
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
						className: Ne.a.container,
						communities: d.slice(0, Re),
						errorMsg: r.fbt._("Couldn't find any recommendations. Try adding more communities first!", null, {
							hk: "3E76C7"
						}),
						isError: !s.length || !!i,
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
			var Fe = Object(a.b)(Ue, (e, t) => ({
					addSubredditRequested: s => {
						Object(B.f)(t.multireddit) && e(Object(oe.addSubredditRequested)({
							identifier: {
								name: s.name,
								type: s.type
							},
							multiredditNames: [t.multireddit.name],
							communityInfo: s
						}))
					},
					recommendationsRefreshed: s => {
						Object(B.f)(t.multireddit) && e(Object(oe.recommendationsRequested)({
							multiredditName: t.multireddit.name,
							username: t.multiUsername,
							toExcludeNames: s
						}))
					}
				}))(Le),
				qe = s("./src/reddit/components/SidebarContainer/index.tsx"),
				Ae = s("./src/reddit/components/SidebarSectionHeader/index.m.less"),
				Be = s.n(Ae),
				Ge = H.a.div("Component", Be.a),
				We = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				ze = s("./src/reddit/constants/zIndex.ts"),
				He = s("./src/reddit/controls/TextButton/index.tsx"),
				Qe = s("./src/reddit/helpers/trackers/idCard.ts"),
				Ve = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				Ke = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				Ze = s("./src/reddit/components/MultiredditSidebar/index.m.less"),
				Ye = s.n(Ze);

			function Xe() {
				return (Xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const $e = Object(l.a)(e => o.a.createElement(m.e, {
					className: Ye.a.modalContainer
				}, !e.shouldHideHeader && o.a.createElement(m.i, null, o.a.createElement(Ve.a, null, o.a.createElement(m.q, null, e.multireddit.displayText), o.a.createElement(He.a, {
					onClick: e.onCloseModal
				}, o.a.createElement(m.b, null)))), o.a.createElement(m.l, null, o.a.createElement(te, {
					mode: ee.Modal,
					multireddit: e.multireddit,
					subredditCategory: e.subredditCategory
				})), e.shouldHideHeader && o.a.createElement(He.a, {
					className: Ye.a.closeBtn,
					onClick: e.onCloseModal
				}, o.a.createElement(m.b, null)))),
				Je = e => o.a.createElement($e, Xe({}, e, {
					overlayCustomStyles: {
						zIndex: ze.b
					},
					withOverlay: !0
				})),
				et = () => o.a.createElement(g.a, null, n()(5, e => o.a.createElement("div", {
					className: Object(u.a)(Ye.a.placeholder, Object(Ke.a)({
						isLoading: !0
					})),
					key: e
				}))),
				tt = e => Object(B.f)(e.multireddit) ? Object(B.g)(e.multireddit) ? e.isCurrentUserMultiredditOwner ? o.a.createElement(ke, {
					multireddit: e.multireddit
				}) : o.a.createElement(T, {
					multireddit: e.multireddit,
					titleText: r.fbt._("Communities in this custom feed", null, {
						hk: "23oj0B"
					})
				}) : o.a.createElement(et, null) : o.a.createElement("div", {
					className: Ye.a.detailsContainer
				}, o.a.createElement(Ge, null, e.subredditCategory ? e.subredditCategory.name : r.fbt._("Custom feed details", null, {
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
					}) => Object(B.f)(t) && Object(_.c)(e, t.url)
				}),
				rt = Object(a.b)(st, (e, {
					subredditCategory: t
				}) => ({
					trackSeeMoreClicked: () => e((e, t) => Qe.a(t())),
					trackSubredditClicked: s => {
						if (!t) return;
						const r = Object(fe.i)(s);
						e((e, s) => Qe.b(s(), r, t.name))
					}
				}));
			class it extends o.a.Component {
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
						multiUsername: r,
						subredditCategory: i
					} = this.props, n = t && s.subredditIds && s.subredditIds.length > 0;
					return o.a.createElement(qe.a, {
						className: e
					}, o.a.createElement(tt, {
						isCurrentUserMultiredditOwner: t,
						multireddit: s,
						subredditCategory: i,
						onSeeMoreDetails: this.openModal,
						onSubredditClick: this.props.trackSubredditClicked
					}), this.state.showModal ? o.a.createElement(Je, {
						multireddit: s,
						subredditCategory: i,
						onCloseModal: this.closeModal,
						shouldHideHeader: !!i
					}) : null, n && o.a.createElement(Fe, {
						multireddit: s,
						multiUsername: r
					}), o.a.createElement(We.a, null))
				}
			}
			t.a = rt(it)
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
				return S
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				f = s("./src/reddit/components/OverflowMenu/index.m.less"),
				x = s.n(f);
			const E = c.a.wrapped(m.a, "_Dropdown", x.a),
				O = Object(u.a)(E),
				y = c.a.button("MenuButton", x.a),
				S = c.a.wrapped(p.b, "DropdownRow", x.a),
				g = Object(o.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				_ = Object(d.b)(g, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				j = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = _(e => n.a.createElement(y, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": r.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(a.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: j(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : n.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
			}), n.a.createElement(O, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/take.js"),
				n = s.n(i),
				d = s("./node_modules/react/index.js"),
				o = s.n(d),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/layout/row/RightAlign/index.tsx");
			const b = e => {
				const {
					className: t,
					hasMoreItems: s,
					headerButton: i,
					items: a,
					minimizedLength: b,
					onLoadMore: h,
					pending: f,
					renderItem: x,
					title: E
				} = e, [O, y] = Object(d.useState)(!1), S = a.length > b || s, g = (!S || O ? a : n()(a, b)).map(e => x({
					item: e
				})), _ = () => {
					O || y(!0), O && !s && y(!1), s && h && h()
				};
				return o.a.createElement(c.a, {
					className: t,
					headerButton: i,
					title: E
				}, g, o.a.createElement(m.a, null, o.a.createElement(p.a, null, S && (() => {
					const e = !O || s && h ? r.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : r.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return o.a.createElement(l.o, {
						onClick: _
					}, f ? o.a.createElement(u.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			b.defaultProps = {
				minimizedLength: a.Pb
			}, t.a = b
		},
		"./src/reddit/components/SidebarSectionHeader/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_1X2juHHajDXGs8oboBFTY1",
				component: "_1X2juHHajDXGs8oboBFTY1",
				headerStyles: "ySyP3_8M4Wb9GDZa0U3rV"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/classNames/index.ts"),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = s("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = s.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(o.c)({
					currentUser: c.j,
					isNightMode: c.W,
					isPresenceUserPrefEnabled: c.ib,
					shouldHideNSFW: c.B
				}),
				x = Object(d.b)(f);
			t.a = x(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: s,
					isPresenceUserPrefEnabled: i,
					wrapperClassName: d,
					...o
				} = e, c = Object(a.a)(null == t ? void 0 : t.accountIcon);
				return n.a.createElement("div", {
					className: Object(r.a)(b.a.currentUserIconWrapper, d)
				}, c ? n.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : n.a.createElement(m.b, h({}, o, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), s && n.a.createElement(l.a, {
					showPresence: !0
				}))
			})
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
				return K
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/debounce.js"),
				n = s.n(i),
				d = s("./node_modules/react/index.js"),
				o = s.n(d),
				a = s("./src/lib/classNames/index.ts");
			const c = {
				leading: !0,
				trailing: !1
			};
			var l = (e, t, s, r = c) => {
					const i = {
							...c,
							...r
						},
						n = t > e ? 1 : -1;
					let d = e;
					if (e !== t) {
						for (i.leading || (d += n); d !== t;) s(d), d += n;
						i.trailing && s(d)
					} else(i.leading || i.trailing) && s(e)
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

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var O = ({
					className: e,
					children: t,
					title: s,
					...r
				}) => o.a.createElement("div", E({
					className: Object(a.a)(x.a.dropdownSection, e)
				}, r), s && o.a.createElement("div", {
					className: x.a.title
				}, s), t),
				y = s("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				S = s("./src/reddit/helpers/name/index.ts"),
				g = s("./src/lib/lessComponent.tsx"),
				_ = s("./src/reddit/components/SubredditIcon/index.tsx"),
				j = s("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				I = s("./src/reddit/icons/svgs/Link/index.tsx"),
				C = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				w = s("./src/reddit/icons/svgs/Video/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				D = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				T = s.n(D);
			const M = [{
				type: "text",
				Icon: C.a
			}, {
				type: "images",
				Icon: j.a
			}, {
				type: "videos",
				Icon: w.a
			}, {
				type: "links",
				Icon: I.a
			}];

			function k(e) {
				const {
					allowedPostTypes: t,
					className: s
				} = e;
				return o.a.createElement(v.a, {
					className: Object(a.a)(T.a.rowStyle, s)
				}, M.map(({
					type: e,
					Icon: s
				}) => o.a.createElement("div", {
					className: Object(a.a)(T.a.iconWrapper, {
						[T.a.mDisabled]: !t[e]
					})
				}, o.a.createElement(s, null))))
			}
			var P = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				N = s.n(P);
			const R = g.a.wrapped(_.b, "subredditIcon", N.a);

			function U(e) {
				const {
					highlight: t,
					icon: s,
					title: r,
					secondaryText: i,
					item: n
				} = e, {
					allowedPostTypes: d
				} = n;
				return o.a.createElement("div", {
					className: Object(a.a)(N.a.container, {
						[N.a.mHighlight]: t
					})
				}, s, o.a.createElement("div", {
					className: N.a.main
				}, o.a.createElement("span", {
					className: N.a.title
				}, r), i && o.a.createElement("span", {
					className: N.a.secondary
				}, i)), t && d && o.a.createElement(k, {
					allowedPostTypes: d
				}))
			}
			var L = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				F = s.n(L);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}

			function A(e) {
				const {
					item: {
						name: t,
						subscribers: s
					}
				} = e, i = Object(S.d)(t), n = void 0 !== s ? r.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [r.fbt._plural(s, "number")], {
					hk: "2SvJUX"
				}) : void 0, d = o.a.createElement(y.a, {
					className: Object(a.a)(F.a.profileIcon, N.a.subredditIcon)
				});
				return o.a.createElement(U, q({
					icon: d,
					title: i,
					secondaryText: n
				}, e))
			}
			var B = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less"),
				G = s.n(B);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}

			function z(e) {
				const {
					item: {
						primaryColor: t,
						iconUrl: s,
						name: i,
						subscribers: n
					}
				} = e, d = Object(S.c)(i), a = void 0 !== n ? r.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [r.fbt._plural(n, "number")], {
					hk: "2SvJUX"
				}) : void 0, c = o.a.createElement(R, {
					className: G.a.icon,
					iconUrl: s,
					primaryColor: t,
					redditStyle: !0
				});
				return o.a.createElement(U, W({
					icon: c,
					title: d,
					secondaryText: a
				}, e))
			}
			var H = s("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				Q = s.n(H);
			const V = {
				[m.a.OWN_PROFILE]: () => r.fbt._("Your profile", null, {
					hk: "1Qoy4P"
				}),
				[m.a.SUBSCRIBED_TO_SUBREDDIT]: () => r.fbt._("My communities", null, {
					hk: "2NVUpl"
				}),
				[m.a.OTHER_SUBREDDIT]: () => r.fbt._("Others", null, {
					hk: "3WQHlu"
				}),
				[m.a.MODERATED_SUBREDDIT]: () => r.fbt._("Moderated subreddits", null, {
					hk: "uZtld"
				})
			};
			class K extends o.a.PureComponent {
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
							return A;
						default:
							return z
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
						className: Q.a.noMatches
					}, r.fbt._("No communities found", null, {
						hk: "4wDUHv"
					})))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (r, i, n, d) => {
						const a = [];
						l(n, d, s => {
							const r = t[s],
								i = s === e,
								n = this.getEntryContentComponent(r.type, r.name);
							n && a.push(o.a.createElement(h, {
								entryIndex: s,
								disabled: r.disabled,
								key: r.id || r.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, o.a.createElement(n, {
								highlight: i,
								item: r
							})))
						});
						const c = V[i];
						s.push(o.a.createElement(O, {
							key: i,
							title: c && c()
						}, a))
					}), o.a.createElement("div", {
						className: Object(a.a)(Q.a.container, this.props.className, {
							[Q.a.mIsValid]: this.props.isValid,
							[Q.a.mIsVisible]: s.length > 0
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
			var r = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/redditGQL/operations/MultiredditListing.json");
			t.a = (e, t) => Object(r.a)(e, {
				...i,
				variables: t
			})
		},
		"./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/env/index.ts"),
				i = s("./src/lib/sentry/index.ts"),
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
						if (!Object(m.k)(e)) {
							const t = `Received unhandled element type when processing multireddit data: "${e.__typename}"`;
							Object(r.b)() || console.warn(t), i.c.captureMessage(t);
							continue
						}
						const s = e;
						t.postIds.push(s.id);
						const {
							post: d,
							crosspost: c
						} = s && Object(a.a)(s);
						t.posts[d.id] = d, c && (t.posts[c.id] = c), Object(m.j)(s) || Object(m.i)(s) || (s.authorFlair && (t.postFlair[d.belongsTo.id] || (t.postFlair[d.belongsTo.id] = {}), t.postFlair[d.belongsTo.id][d.author] = Object(n.a)(s.authorFlair)[0]), Object(m.m)(s) && (t.subreddits[s.subreddit.id] || (t.subreddits[s.subreddit.id] = Object(l.a)(s.subreddit)), t.postFlair[s.subreddit.id] || (t.postFlair[s.subreddit.id] = Object(o.a)(s.subreddit))))
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
					subreddits: E
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
						...E
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
			var r = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts"),
				n = s("./src/reddit/selectors/widgets.ts"),
				d = s("./src/telemetry/index.ts");
			const o = e => {
					Object(d.a)({
						...i.defaults(e),
						action: r.c.CLICK,
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
						...i.defaults(e),
						action: r.c.CLICK,
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
					action: r.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: i.subreddit(t)
				})
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				o = s.n(d);
			t.a = e => i.a.createElement("svg", {
				className: Object(n.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/TextPost/index.m.less"),
				o = s.n(d);
			t.a = e => i.a.createElement("svg", {
				className: Object(n.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("g", {
				transform: "translate(3, 4)"
			}, i.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, s) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/layout/row/Inline/index.m.less"),
				n = s.n(i);
			t.a = r.a.div("inlineRow", n.a)
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				n = s.n(i);
			t.a = r.a.div("rightAligned", n.a)
		},
		"./src/redditGQL/operations/AllUserMultireddits.json": function(e) {
			e.exports = JSON.parse('{"id":"8f2551b0bce3"}')
		},
		"./src/redditGQL/operations/MultiredditListing.json": function(e) {
			e.exports = JSON.parse('{"id":"e98865f7df76"}')
		},
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"3c4d88474140"}')
		},
		"./src/redditGQL/operations/SubredditTypeaheadSearch.json": function(e) {
			e.exports = JSON.parse('{"id":"20edc5ee12df"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Multireddit~reddit-components-AdHocMultiredditSidebar.5d0b59194d903ea5c5ff.js.map