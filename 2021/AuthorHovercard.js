// https://www.redditstatic.com/desktop2x/AuthorHovercard.09fbfd3cac934f722196.js
// Retrieved at 5/12/2021, 12:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = () => async (e, t) => {
				const n = t();
				Object(s.a)(Object(c.b)(n)), e(Object(o.r)({
					forceFetch: !0
				})), await e(Object(a.g)(i.a.SNOOVATAR_MODAL))
			}, u = e => async (t, n) => {
				const o = n();
				Object(s.a)(Object(c.a)(e)(o)), Object(d.J)(o) ? await t(Object(a.h)(i.a.SNOOVATAR_MODAL)) : await t(Object(r.h)())
			}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return X
			})), n.d(t, "d", (function() {
				return ne
			})), n.d(t, "b", (function() {
				return ae
			})), n.d(t, "e", (function() {
				return oe
			})), n.d(t, "a", (function() {
				return ie
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/get.js"),
				a = n.n(r),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/apiRequestState.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subreddit.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				v = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const h = (e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
				endpoint: Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`),
				method: m.eb.GET,
				data: n
			});
			var x = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				I = n("./src/reddit/models/SubredditModeration/index.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				g = n("./src/reddit/selectors/bannedUser.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/actions/subredditModeration/constants.ts"),
				j = n("./src/lib/initializeClient/installReducer.ts"),
				y = n("./node_modules/redux/es/redux.js");
			var N = (e = null, t) => {
				switch (t.type) {
					case E.o:
					case E.n:
						return null;
					case E.m:
						return t.payload;
					default:
						return e
				}
			};
			const L = {};
			var k = (e = L, t) => {
					switch (t.type) {
						case E.o: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, r = Object(I.d)(n, s);
							return {
								...e,
								[r]: !0
							}
						}
						case E.n:
						case E.m: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, r = Object(I.d)(n, s);
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				S = Object(y.c)({
					error: N,
					pending: k
				});
			const U = {};
			var A = (e = U, t) => {
					switch (t.type) {
						case E.n: {
							const {
								fetchedToken: n,
								subredditId: s
							} = t.payload, r = Object(I.d)(s, n);
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				P = n("./src/reddit/actions/inContextModeration.ts");
			var B = (e = null, t) => {
				switch (t.type) {
					case P.a:
						return t.payload;
					default:
						return e
				}
			};
			const M = {};
			var T = (e = M, t) => {
					switch (t.type) {
						case E.n: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				F = n("./node_modules/icepick/icepick.js");
			const H = {};
			var R = (e = H, t) => {
				switch (t.type) {
					case E.l:
					case E.n: {
						const {
							subredditId: n,
							bannedUsers: s
						} = t.payload;
						return Object(F.merge)(e, {
							[n]: s
						})
					}
					case E.s: {
						const {
							subredditId: n,
							userId: s
						} = t.payload;
						return Object(F.unsetIn)(e, [n, s])
					}
					default:
						return e
				}
			};
			var D = (e = null, t) => {
				switch (t.type) {
					case E.r:
					case E.q:
						return null;
					case E.p:
						return t.payload;
					default:
						return e
				}
			};
			var K = (e = !1, t) => {
					switch (t.type) {
						case E.r:
							return !0;
						case E.q:
						case E.p:
							return !1;
						default:
							return e
					}
				},
				z = Object(y.c)({
					error: D,
					pending: K
				});
			var Z = (e = null, t) => {
					switch (t.type) {
						case E.r:
						case E.p:
							return null;
						case E.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				q = Object(y.c)({
					api: z,
					result: Z
				});
			const W = {};
			var G = (e = W, t) => {
					switch (t.type) {
						case E.n: {
							const {
								subredditId: n,
								bannedUserIds: s
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...s]
							} : {
								...e,
								[n]: s
							}
						}
						case E.s: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== s)
							}
						}
						case E.l: {
							const {
								subredditId: n,
								bannedUserIds: s
							} = t.payload, r = s[0];
							return r && e[n] && -1 === e[n].indexOf(r) ? {
								[n]: [r, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				V = Object(y.c)({
					api: S,
					fetchedTokens: A,
					inContext: B,
					loadMore: T,
					models: R,
					search: q,
					userOrder: G
				});
			Object(j.a)({
				features: {
					banned: V
				}
			});
			const J = Object(o.a)(E.o),
				Y = Object(o.a)(E.n),
				Q = Object(o.a)(E.m),
				X = (e, t = {}) => async (n, s, {
					apiContext: r
				}) => {
					const a = s(),
						o = t.after || "",
						i = Object(I.d)(e, o),
						c = a.features.banned.fetchedTokens[i];
					if (a.features.banned.api.pending[i] || c) return;
					n(J({
						subredditId: e,
						fetchedToken: o
					}));
					const d = a.subreddits.models[e].name,
						l = await h(r(), d, t);
					l.ok ? n(Y({
						...l.body,
						fetchedToken: o
					})) : n(Q({
						subredditId: e,
						fetchedToken: o
					}))
				}, $ = Object(o.a)(E.r), ee = Object(o.a)(E.q), te = Object(o.a)(E.p), ne = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s().subreddits.models[e].name,
						o = {
							username: Object(x.a)(t)
						};
					n($());
					const i = await h(r(), a, o);
					i.ok ? n(ee(i.body)) : n(te(i.error))
				}, se = Object(o.a)(E.l), re = Object(o.a)(E.s), ae = (e, t, n) => async (r, o, {
					apiContext: c
				}) => {
					const d = o(),
						u = d.subreddits.models[e].url,
						v = d.subreddits.models[e].name;
					t.username = Object(x.a)(t.username), r(Object(i.h)(n));
					const I = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.eb.POST,
						data: {
							api_type: "json",
							ban_reason: n.reason,
							ban_message: n.banMessage,
							duration: n.duration,
							name: n.username,
							note: n.modNote,
							ban_context: n.contextId,
							type: "banned"
						}
					}))(c(), u, t);
					if (I.ok) {
						r(Object(i.e)(n));
						const e = {
							username: t.username
						};
						r(Object(l.f)({
							kind: _.b.SuccessMod,
							text: s.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const a = await h(c(), v, e);
						a.ok && r(se(a.body))
					} else {
						r(Object(i.f)(n, I.error));
						const e = a()(I, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, oe = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const i = r().subreddits.models[e].url,
						c = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.eb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(o(), i, t);
					if (c.ok) n(re({
						subredditId: e,
						userId: t
					})), n(Object(l.f)({
						kind: _.b.SuccessMod,
						text: s.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(c, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, s) => {
					const r = s();
					await Promise.all([(async () => {
						if (!Object(C.b)(u.a.BAN_USER)(r) && !Object(O.Q)(r, {
								subredditId: e
							})) {
							const t = Object(O.T)(r, {
								subredditId: e
							});
							await n(Object(d.o)(t.name))
						}
					})(), (async () => {
						const s = Object(w.mb)(r, {
							userName: t
						});
						if (!s) return;
						const a = Object(g.h)(r, {
							subredditId: e
						});
						a && a[s.id] || await n(X(e, {
							username: t
						}))
					})()]), n(Object(c.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "h", (function() {
				return o
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			const s = "SUBSCRIPTION__FETCH_DATA_PENDING",
				r = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				a = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				o = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				i = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return M
			})), n.d(t, "c", (function() {
				return F
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return K
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/reddit/actions/gold/powerups.ts"),
				c = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/subscription/constants.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/constants/posts.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts");
			var v = n("./src/graphql/operations/SubscribedSubreddits.json"),
				h = n("./src/lib/makeGqlRequest/index.ts"),
				x = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var I = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				C = n("./src/reddit/models/GqlTopLevelField.ts"),
				g = n("./src/reddit/models/User/index.ts");

			function O(e) {
				const t = [],
					n = [],
					s = {},
					r = {},
					{
						followedRedditorsInfo: a
					} = e.identity;
				for (const i of a.edges) {
					if (i.node.__typename !== g.c.AvailableRedditor) continue;
					const e = Object(I.a)(i.node.profile);
					s[e.id] = e;
					const {
						isFavorite: n
					} = i.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: o
				} = e.identity;
				for (const i of o.edges) {
					if (i.node.__typename !== C.a.Subreddit) continue;
					const e = Object(_.a)(i.node);
					r[e.id] = e;
					const {
						isFavorite: t
					} = i.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: s,
					subreddits: r
				}
			}
			var w = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/profile.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/selectors/subscriptions.ts"),
				N = n("./src/reddit/selectors/user.ts");
			const L = () => s.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				k = Object(a.a)(l.c),
				S = Object(a.a)(l.b),
				U = Object(a.a)(l.a),
				A = Object(a.a)(l.h),
				P = (Object(a.a)(l.i), Object(a.a)(l.g), () => async (e, t, {
					gqlContext: n
				}) => {
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(S());
					const r = await (e => Object(h.a)(e, v))(n());
					if (r.ok) {
						const t = O(r.body.data);
						e(k(t))
					} else e(U({
						error: r.error
					}))
				}),
				B = (e, t) => t.type === m.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				M = (e, t, n) => async (a, l, {
					apiContext: v
				}) => {
					let h = e.map(e => e.type === m.a.SUBREDDIT ? {
						id: Object(j.F)(l(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(E.m)(l(), e.name),
						name: `${r.ac}${e.name}`,
						type: e.type
					});
					if (!Object(N.J)(l())) return a(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void a(Object(c.j)());
					const I = Object(N.i)(l());
					if (I) {
						const t = h.length,
							n = e.length;
						if (h = h.filter(e => !B(I, e)), (e = e.filter(e => !B(I, e))).length !== n || h.length !== t) {
							const e = s.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							a(Object(u.f)(Object(u.e)(e, w.b.Error)))
						}
						if (!e.length && !h.length) return
					}
					if (a(A({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(y.b)(l()),
							userIsSubscriber: t,
							widgetId: n
						})), (await ((e, {
							subredditIds: t,
							subredditNames: n,
							subscribe: s
						}) => Object(p.a)(Object(b.a)(e, [f.a]), {
							method: r.eb.POST,
							endpoint: Object(x.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: s ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: n && n.join(",") || void 0,
								api_type: "json"
							}
						}))(v(), {
							subredditNames: h.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						h.filter(e => e.type === m.a.SUBREDDIT).forEach(({
							id: e
						}) => a(Object(i.h)(e, {
							forceLoad: !0,
							fullData: !1
						})));
						const n = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : `${s.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						a(Object(u.f)({
							text: 1 === e.length && "profile" === e[0].type ? s.fbt._("Sucсessfully {verb} {communityname}", [s.fbt._param("verb", t ? "followed" : "unfollowed"), s.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							}) : s.fbt._("Sucсessfully {verb} {communityname}", [s.fbt._param("verb", t ? "joined" : "left"), s.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						a(A({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(y.b)(l()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const r = s.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						a(Object(u.f)(Object(u.e)(r, w.b.Error)))
					}
				}, T = Object(a.a)(l.f), F = e => async (t, n, {
					apiContext: s
				}) => {
					const a = n(),
						o = Object(j.L)(a, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const i = e.type === m.a.SUBREDDIT ? o.name : `u_${o.name}`,
						c = a.subscriptions.favoriteSubredditOrder || [],
						d = a.subscriptions.favoriteProfileOrder || [],
						l = c.indexOf(e.id),
						v = d.indexOf(e.id),
						h = -1 === l && -1 === v,
						x = a.subreddits.models,
						I = a.profiles.models;
					t(T({
						makeFavorite: h,
						identifier: e,
						subredditModels: x,
						profileModels: I
					}));
					const _ = {
							type: e.type,
							name: o.name
						},
						C = () => Object(j.gb)(n(), {
							identifier: _
						});
					(C() || (await t(M([_], !0)), C())) && ((await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
						method: r.eb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(s(), i, h)).ok || (t(T({
						makeFavorite: !h,
						identifier: e,
						subredditModels: x,
						profileModels: I
					})), t(Object(u.f)({
						text: L(),
						kind: w.b.Error
					}))))
				}, H = Object(a.a)(l.d), R = e => async (t, n, {
					apiContext: s
				}) => {
					const a = n().multireddits.models,
						o = () => {
							t(Object(u.f)({
								text: L(),
								kind: w.b.Error
							}))
						},
						i = a[e];
					if (!i) return void o();
					const c = !i.isFavorited;
					t(H({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
						method: r.eb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(s(), e, c)).ok || (t(H({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: a
					})), o())
				}, D = Object(a.a)(l.e), K = e => async (t, n, {
					apiContext: a
				}) => {
					const o = n(),
						i = o.multireddits.models;
					if (!Object(N.J)(o)) return;
					const c = (e = !0) => {
							t(Object(u.f)({
								text: s.fbt._("Sorry, failed to {followAction}", [s.fbt._param("followAction", e ? s.fbt._("follow", null, {
									hk: "2I4uia"
								}) : s.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: w.b.Error
							}))
						},
						d = i[e];
					if (!d) return void c();
					const l = !d.isFollowed;
					t(D({
						follow: l,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
						method: r.eb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(a(), e, l)).ok || (t(D({
						follow: !l,
						multiredditPath: e,
						multiredditsModelsState: i
					})), c(l))
				}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const r = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				a = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				o = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				i = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				d = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				l = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				isHighlighted: "_2fUisaQtUa1Fxx6-R5fDhH"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = ({
				className: e,
				isActive: t,
				unreadCount: n
			}) => t ? r.a.createElement("span", {
				className: Object(a.a)(e, c.a.badgeCounter, {
					[c.a.isHighlighted]: t && n <= 0
				})
			}, n > 0 && Object(o.b)(n)) : null
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/chat/toggle.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(s || (s = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: n,
				sendEvent: r,
				contextId: o,
				priority: i,
				Icon: c,
				redditStyle: u,
				isFullWidth: m,
				eventSource: p,
				onClick: b,
				onAddUserToQuickReplyList: f
			}) => {
				return a.a.createElement(d.q, {
					onClick: t => {
						if (b && b(t), e(), p === s.awardNotification) return f();
						r(Object(l.b)(o))
					},
					className: n,
					text: t,
					priority: i,
					Icon: c,
					redditStyle: u,
					isFullWidth: m
				})
			};
			u.displayName = "ChatButton";
			const m = Object(o.b)(null, (e, {
				contextId: t,
				userId: n
			}) => ({
				onStartChat: () => {
					e(Object(i.b)(n, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(i.a)(n))
				}
			}));
			t.b = m(Object(c.c)(u))
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/ImageInput/index.tsx"),
				i = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/svgs/NewPost/index.tsx"),
				d = n("./src/reddit/models/ApiRequestState/index.ts"),
				l = n("./src/reddit/components/EditableImage/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = 80;
			class b extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						apiRequestId: null
					}, this.selectFile = e => {
						const t = Object(d.b)();
						this.setState({
							apiRequestId: t
						}), this.props.onFileSelected(e, t)
					}
				}
				render() {
					const {
						altText: e,
						children: t,
						className: n,
						editButtonClassName: s,
						isLoading: d,
						imageUrl: l
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.Container, n)
					}, r.a.createElement("label", {
						className: u.a.HitBox
					}, r.a.createElement("span", {
						className: u.a.ImageContainer,
						role: "presentation"
					}, l ? r.a.createElement("img", {
						alt: e,
						className: u.a.Image,
						src: l
					}) : t), r.a.createElement(o.a, {
						className: u.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !d && r.a.createElement("div", {
						className: Object(a.a)(u.a.EditButton, s)
					}, r.a.createElement(c.a, {
						className: u.a.EditIcon
					}))), d && r.a.createElement(i.a, {
						className: u.a.LoadingIcon,
						sizePx: p
					}))
				}
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/snoovatar.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/selectors/gold/awardIcon.ts"),
				l = n("./src/reddit/selectors/meta.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/selectors/tooltip.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/selectors/userFlair.ts"),
				x = n("./src/reddit/selectors/userPrefs.ts"),
				I = n("./node_modules/fbt/lib/FbtPublic.js"),
				_ = n("./src/config.ts"),
				C = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = n("./src/lib/lessComponent.tsx"),
				O = n("./src/lib/prettyPrintNumber/index.ts"),
				w = n("./src/lib/timeAgo/index.ts"),
				E = n("./src/reddit/components/ChatButton/index.tsx"),
				j = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				N = n("./src/reddit/components/SubscribeButton/index.tsx"),
				L = n("./src/reddit/components/UserIcon/index.tsx"),
				k = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				S = n("./src/reddit/icons/fonts/Info/index.tsx"),
				U = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				A = n("./src/reddit/icons/svgs/Karma/index.tsx"),
				P = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				B = n("./src/reddit/models/Gold/Award.ts"),
				M = n("./src/reddit/models/User/index.ts"),
				T = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				F = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				H = n("./src/reddit/actions/inContextModeration.ts"),
				R = n("./src/reddit/actions/modal.ts"),
				D = n("./src/reddit/actions/subredditModeration/ban.ts"),
				K = n("./src/reddit/constants/modals.ts"),
				z = n("./src/reddit/components/Hovercards/helpers.ts"),
				Z = n("./src/reddit/icons/svgs/Ban/index.tsx"),
				q = n("./src/reddit/icons/svgs/Mute/index.tsx"),
				W = n("./src/reddit/icons/svgs/Unban/index.tsx"),
				G = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				V = n("./src/reddit/selectors/bannedUser.ts"),
				J = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				Y = n.n(J);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), X = g.a.wrapped(Z.a, "BanIcon", Y.a), $ = g.a.wrapped(q.a, "MuteIcon", Y.a), ee = g.a.wrapped(W.a, "UnbanIcon", Y.a), te = Object(o.c)({
				hasModMailPermissions: Object(u.a)(G.c.mail),
				isUserBanned: (e, t) => !!Object(V.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(v.mb)(e, {
					userName: t.username
				})
			});
			class ne extends r.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: s,
						onUnbanUser: a,
						sendEvent: o,
						toggleBanModal: i,
						toggleMuteModal: c
					} = this.props;
					return r.a.createElement("div", {
						className: e
					}, s ? r.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), o(k.e(t))
						}
					}, r.a.createElement(ee, null), Q._("Unban User", null, {
						hk: "1aASyW"
					})) : r.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							i(), o(k.a(t))
						}
					}, r.a.createElement(X, null), Q._("Ban User", null, {
						hk: "3OhuLx"
					})), n && r.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							c(), o(k.d(t))
						}
					}, r.a.createElement($, null), Q._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var se = Object(a.b)(te, (e, {
					username: t,
					subredditId: n,
					contextId: s
				}) => ({
					onUnbanUser: t => e(Object(D.e)(n, t)),
					requestUserBanInfo: () => e(Object(D.c)(n, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(H.c)({
							username: t,
							subredditId: n,
							contextId: s
						})), e(Object(D.a)(n, t))
					},
					toggleMuteModal: () => {
						e(Object(H.d)({
							username: t,
							subredditId: n,
							contextId: s
						})), e(Object(R.i)(K.a.MUTE_USER))
					}
				}))(ne),
				re = n("./src/reddit/actions/userFlair/index.ts"),
				ae = n("./src/reddit/icons/svgs/Tag/index.tsx"),
				oe = n("./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less"),
				ie = n.n(oe);
			const {
				fbt: ce
			} = n("./node_modules/fbt/lib/FbtPublic.js"), de = g.a.wrapped(ae.a, "FlairIcon", ie.a);
			var le = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(re.g)(t.subredditId, t.username))
				}))(e => r.a.createElement(z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(k.c(e.contextId))
					}
				}, r.a.createElement(de, null), ce._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ue = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				me = n.n(ue);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const be = g.a.wrapped(L.a, "UserIcon", me.a),
				fe = g.a.wrapped(N.a, "SubscribeButton", me.a),
				ve = g.a.wrapped(E.b, "ChatButton", me.a),
				he = g.a.wrapped(A.a, "KarmaIcon", me.a),
				xe = g.a.wrapped(P.a, "PremiumIcon", me.a),
				Ie = g.a.wrapped(C.a, "UserNameLink", me.a),
				_e = g.a.div("UserNameMetaData", me.a),
				Ce = g.a.div("MetaDataItem", me.a),
				ge = g.a.div("Bullet", me.a),
				Oe = g.a.div("UserNameContainer", me.a),
				we = g.a.div("UserInfoContainer", me.a),
				Ee = g.a.div("PostKarma", me.a),
				je = g.a.div("CommentKarma", me.a),
				ye = g.a.div("KarmaGrid", me.a),
				Ne = g.a.div("GenericKarma", me.a),
				Le = g.a.a("InfoLink", me.a),
				ke = g.a.div("KarmaCount", me.a),
				Se = g.a.div("KarmaLabel", me.a),
				Ue = g.a.div("GenericKarmaLabel", me.a),
				Ae = g.a.div("BannerImage", me.a),
				Pe = g.a.div("UserContainer", me.a),
				Be = g.a.div("BottomSpacer", me.a),
				Me = g.a.div("Container", me.a),
				Te = e => r.a.createElement("div", null, r.a.createElement("div", null, r.a.createElement(Ie, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && r.a.createElement(U.a, {
					className: me.a.adminIcon,
					title: I.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && r.a.createElement(C.a, {
					to: "/premium"
				}, r.a.createElement(xe, null))), r.a.createElement(_e, null, e.user.username && r.a.createElement(Ce, null, e.user.username, r.a.createElement(ge, null, "•")), r.a.createElement(Ce, null, Object(w.d)(e.user.createdUtc || e.user.created)))),
				Fe = e => {
					const {
						showAwardKarma: t,
						user: n
					} = e;
					return t ? r.a.createElement(ye, null, r.a.createElement(Ne, null, r.a.createElement(ke, null, Object(O.b)(n.postKarma)), r.a.createElement(Ue, null, I.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [I.fbt._plural(n.postKarma)], {
						hk: "3K4oaH"
					}))), r.a.createElement(Ne, null, r.a.createElement(ke, null, Object(O.b)(n.commentKarma)), r.a.createElement(Ue, null, I.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [I.fbt._plural(n.commentKarma)], {
						hk: "3gKRx9"
					}))), r.a.createElement(Ne, null, r.a.createElement(ke, null, Object(O.b)(n.awardeeKarma)), r.a.createElement(Ue, null, I.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [I.fbt._plural(n.awardeeKarma)], {
						hk: "3nzm9q"
					}), r.a.createElement(Le, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(S.a, {
						className: me.a.infoIcon
					})))), r.a.createElement(Ne, null, r.a.createElement(ke, null, Object(O.b)(n.awarderKarma)), r.a.createElement(Ue, null, I.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [I.fbt._plural(n.awarderKarma)], {
						hk: "4zXN3B"
					}), r.a.createElement(Le, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(S.a, {
						className: me.a.infoIcon
					}))))) : r.a.createElement(we, null, r.a.createElement(he, null), r.a.createElement(Ee, null, r.a.createElement(ke, null, Object(O.b)(n.postKarma)), r.a.createElement(Se, null, I.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [I.fbt._plural(n.postKarma)], {
						hk: "3K4oaH"
					}))), r.a.createElement(je, null, r.a.createElement(ke, null, Object(O.b)(n.commentKarma)), r.a.createElement(Se, null, I.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [I.fbt._plural(n.commentKarma)], {
						hk: "3gKRx9"
					}))))
				},
				He = e => {
					const {
						className: t,
						contextId: n,
						currentUser: s,
						hideNSFWPref: a,
						hoverId: o,
						isLoggedIn: i,
						onClickSnoovatar: c,
						origin: d,
						moderatorPermissions: l,
						prefersReducedAnimations: u,
						sendEvent: m,
						showAwardKarma: p,
						style: b,
						subredditId: f,
						topAwardIcon: v,
						userName: h,
						user: x,
						userFlair: C,
						userIsBanned: g,
						userProfileStyles: O,
						acceptChats: w
					} = e;
					if (!x) return r.a.createElement(Me, {
						style: b
					});
					const E = !!s && Object(M.e)(s) === h,
						y = !!(null == s ? void 0 : s.snoovatarFullBodyAsset),
						N = x.accountIcon || `${_.a.assetPath}/img/snoo_user_placeholder.png`,
						L = l && l.flair,
						S = l && l.access,
						U = C && C.templateIds && C.templateIds.length > 0,
						A = C && C.displaySettings && C.displaySettings.isEnabled,
						{
							awardedLastMonth: P
						} = x,
						B = !!x.snoovatarFullBodyAsset,
						H = x.isNSFW && a;
					let R;
					return R = B ? !H && O && O.bannerBackgroundImage || void 0 : H ? `${_.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, r.a.createElement(Me, {
						className: t,
						id: o,
						style: b
					}, !B && R && r.a.createElement(Ae, {
						style: {
							backgroundImage: `url('${R}')`
						}
					}), r.a.createElement(Pe, null, B ? r.a.createElement(F.a, {
						bannerBackgroundImage: R,
						compact: !0,
						currentUserHasSnoovatar: y,
						isEmployee: x.isEmployee,
						isGold: x.isGold,
						isNSFW: x.isNSFW,
						isOwnProfile: E,
						onClickSnoovatar: c,
						prefersReducedAnimations: !!u,
						snoovatarUrl: x.snoovatarFullBodyAsset,
						title: null,
						userCreated: x.created,
						username: h,
						url: `/user/${e.userName}/`
					}) : r.a.createElement(Oe, null, r.a.createElement(be, {
						iconUrl: N,
						isNSFW: x.isNSFW,
						userName: h
					}), r.a.createElement(Te, {
						origin: d,
						user: x,
						userName: h
					})), r.a.createElement(Fe, {
						showAwardKarma: p,
						user: x
					}), P && r.a.createElement(T.a, {
						recentAwardings: P,
						topAwardIcon: v,
						username: h
					}), i && !E && !g && w && r.a.createElement(ve, {
						contextId: n,
						userId: x.id,
						text: I.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						})
					}), x.hasUserProfile && !g && !E && r.a.createElement(fe, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(k.g)(e ? "unfollow" : "follow", n),
						small: !0
					})), S && n && !E && f && r.a.createElement(se, {
						contextId: n,
						subredditId: f,
						sendEvent: m,
						username: h
					}), L && n && U && A && f && r.a.createElement(le, {
						contextId: n,
						subredditId: f,
						sendEvent: m,
						username: h
					}), r.a.createElement(j.i, {
						contextId: n,
						subredditId: f,
						user: x
					}), !(S || i) && r.a.createElement(Be, null))
				},
				Re = Object(y.a)(He),
				De = e => {
					const t = e.activeTooltipId === e.tooltipId;
					return r.a.createElement(Re, pe({
						isOpen: t
					}, e))
				};
			De.WrappedComponent = He;
			var Ke = De;
			const ze = Object(o.c)({
					activeTooltipId: f.a,
					currentUser: v.i,
					isLoggedIn: v.J,
					hideNSFWPref: v.B,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(u.k)(e, {
						subredditId: t
					}) : void 0,
					origin: l.j,
					prefersReducedAnimations: x.c,
					showAwardKarma: (e, t) => {
						return Object(f.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(d.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: v.mb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(h.c)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(b.m)(t) && Object(b.fb)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(m.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(m.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					}
				}),
				Ze = Object(a.b)(ze, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)("user_hovercard")),
					onHideTooltip: () => e(Object(c.i)())
				}));
			t.a = Ze(e => r.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, r.a.createElement(Ke, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				onHideTooltip: e.onHideTooltip,
				origin: e.origin,
				prefersReducedAnimations: e.prefersReducedAnimations,
				sendEvent: e.sendEvent,
				showAwardKarma: e.showAwardKarma,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				userIsBanned: e.userIsBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, n) {
			e.exports = {
				BanIcon: "_2g595huO3XJ8C5PGbnTIcH",
				banIcon: "_2g595huO3XJ8C5PGbnTIcH",
				MuteIcon: "_1qnIs5F_qVlqqqY9ZvtGHT",
				muteIcon: "_1qnIs5F_qVlqqqY9ZvtGHT",
				UnbanIcon: "_3gnOs3YMjVI2NyE6rZjyL3",
				unbanIcon: "_3gnOs3YMjVI2NyE6rZjyL3"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less": function(e, t, n) {
			e.exports = {
				FlairIcon: "_2xaYvwRfHZMRW_6lyBpV4v",
				flairIcon: "_2xaYvwRfHZMRW_6lyBpV4v"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/Hovercards/helpers.ts"),
				o = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				d = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const m = e => Object(i.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class p extends r.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(u.f)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, t = Object(a.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || d.a,
						tooltipType: e.tooltipType
					}), n = `${t}-hover-id`, s = e.author || e.postOrComment.author;
					return r.a.createElement(o.a, {
						authorOrSubredditName: s,
						className: e.hoverDivClassName,
						hoverId: n,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, e.children, r.a.createElement(c.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: n,
						sendEvent: e.sendEvent,
						subredditId: m(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: s
					}))
				}
			}
			t.default = Object(l.c)(p)
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, n) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				KarmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				karmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				PremiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				premiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				Token: "_2U0P3n4v75sHsDvQmSKNz3",
				token: "_2U0P3n4v75sHsDvQmSKNz3",
				UserNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				userNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				UserNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				userNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				GildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				gildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				Bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				MetaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				metaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				UserNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				userNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				UserInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				userInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				PostKarma: "_2T3kavHwxOaL76xfa9id7",
				postKarma: "_2T3kavHwxOaL76xfa9id7",
				CommentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				commentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				KarmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				karmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				GenericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				genericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				InfoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				infoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				BannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				bannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				UserContainer: "_m7PpFuKATP9fZF4xKf9R",
				userContainer: "_m7PpFuKATP9fZF4xKf9R",
				BottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				bottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				UserActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				userActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				Container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				adminIcon: "_2aJuBKF3mo4YJS4YFkeU9a"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, n) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return C
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/profile/index.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/selectors/tooltip.ts");
			const u = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(o.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(d.i)()),
					onOpenUserDropdown: async () => {
						e(Object(d.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(c.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				p = n("./src/reddit/actions/subreddit.ts");
			const b = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var f = Object(o.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(d.i)()),
					onOpenUserDropdown: async () => {
						e(Object(d.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName))
					}
				})),
				v = n("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				h = n.n(v);
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
						}, 500)
					}, this.onMouseLeave = () => {
						this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return r.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const I = a.a.wrapped(x, "HoverDiv", h.a),
				_ = m(I),
				C = f(I)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, n) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.tsx"),
				a = n("./src/reddit/components/Hovercards/helpers.m.less"),
				o = n.n(a);
			const i = s.a.wrapped(r.a, "UserActionItem", o.a),
				c = e => {
					const {
						author: t,
						itemId: n,
						subredditName: s,
						tooltipIdPrefix: r,
						tooltipType: a
					} = e;
					let o = r;
					return n && (o = `${o}--${n}`), a && (o = `${o}--${a}`), t && (o = `${o}--${t}`), s && (o = `${o}--${s}`), o
				}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return T
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/BadgeCounter/index.tsx"),
				d = n("./node_modules/lodash/omit.js"),
				l = n.n(d),
				u = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				m = n("./src/reddit/components/ResizeSensor/index.tsx"),
				p = n("./src/reddit/components/InboxTooltip/index.m.less"),
				b = n.n(p);
			const f = 3;
			class v extends a.a.Component {
				constructor() {
					super(...arguments), this.ref = a.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= f) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						disableNotificationUpdates: t,
						hideNotification: n,
						hideSubredditNotifications: s,
						blockAwarder: r,
						index: o,
						isInboxPostEmbedEnabled: i,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l,
						onItemClick: p
					} = this.props, v = o + 1 <= f;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						ref: this.ref,
						className: b.a.notificationResizeWrapper
					}, a.a.createElement(u.a, {
						activeOverflowMenuId: e,
						disableNotificationUpdates: t,
						hideNotification: n,
						hideSubredditNotifications: s,
						isInboxPostEmbedEnabled: i,
						isInTooltip: !0,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l,
						onItemClick: p,
						blockAwarder: r
					}), !!v && a.a.createElement(m.a, {
						onResize: this.handleResize
					})))
				}
			}
			var h = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				x = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = {},
				C = "",
				g = 0,
				O = "200px";
			class w extends a.a.Component {
				constructor() {
					super(...arguments), this.container = a.a.createRef(), this.state = {
						notificationHeights: _
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > g && this.props.setActiveOverflowMenuId(C)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state;
						let t = 0;
						for (const n in e) t += e[n];
						return 0 === t ? O : t
					}, this.setNotificationHeight = (e, t) => {
						this.setState(n => ({
							notificationHeights: {
								...n.notificationHeights,
								[t]: e
							}
						}))
					}, this.renderNotifications = () => {
						const e = l()(this.props, ["notifications"]),
							{
								notificationHeights: t
							} = this.state;
						return this.props.notifications.map((n, s) => a.a.createElement(v, I({}, e, {
							index: s,
							key: s,
							notification: n,
							notificationHeight: t[s],
							setNotificationHeight: this.setNotificationHeight
						})))
					}
				}
				componentDidMount() {
					const e = this.container && this.container.current;
					e && e.addEventListener("scroll", this.resetOverflowMenu)
				}
				componentWillUnmount() {
					const e = this.container && this.container.current;
					e && e.removeEventListener("scroll", this.resetOverflowMenu), this.resetOverflowMenu()
				}
				render() {
					const {
						isPending: e,
						notifications: t
					} = this.props, n = !(!t || !t.length), s = this.getContainerHeight();
					return a.a.createElement("div", {
						className: b.a.notificationList,
						ref: this.container,
						style: {
							height: s,
							maxHeight: s
						}
					}, n ? this.renderNotifications() : e ? a.a.createElement(h.a, null) : a.a.createElement(x.a, null))
				}
			}
			var E = n("./src/reddit/controls/InternalLink/index.tsx"),
				j = n("./src/reddit/helpers/trackers/inbox.ts"),
				y = n("./src/reddit/hooks/useTracking.ts"),
				N = n("./src/reddit/icons/svgs/MarkAsRead/index.tsx"),
				L = n("./src/reddit/icons/svgs/Settings/index.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = [],
				U = i.a.div("StyledDropdown", b.a),
				A = i.a.wrapped(L.a, "Gear", b.a),
				P = i.a.wrapped(N.a, "MarkAsRead", b.a),
				B = ({
					onMessagesClick: e,
					onBarClick: t,
					markAllAsRead: n,
					messagesBadgeCount: i,
					isInboxMarkAllAsReadEnabled: d,
					sendInboxClickSettings: l
				}) => {
					const u = !!i,
						m = Object(r.useCallback)(() => {
							e(), t()
						}, [e, t]),
						p = Object(r.useCallback)(() => {
							l(), t()
						}, [l, t]);
					return a.a.createElement("nav", {
						className: b.a.topNav
					}, a.a.createElement("span", {
						className: b.a.topNavTitle
					}, s.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), a.a.createElement("span", {
						className: b.a.topNavLinks
					}, a.a.createElement("span", {
						className: b.a.messagesLinkContainer
					}, a.a.createElement(E.a, {
						className: Object(o.a)(b.a.messagesLink, {
							[b.a.mActive]: u
						}),
						onClick: m,
						to: u ? "/message/unread" : "/message/messages"
					}, s.fbt._("Messages", null, {
						hk: "hulKY"
					})), a.a.createElement(c.a, {
						className: b.a.badgeCount,
						isActive: u,
						unreadCount: i
					})), d && a.a.createElement("button", {
						className: b.a.navLink,
						onClick: n
					}, a.a.createElement(P, null)), a.a.createElement(E.a, {
						className: b.a.navLink,
						onClick: p,
						to: "/settings/notifications"
					}, a.a.createElement(A, null))))
				},
				M = e => a.a.createElement("div", {
					className: b.a.bottomBar
				}, a.a.createElement(E.a, {
					className: b.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, s.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				T = e => {
					const t = Object(y.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: s,
							isInboxMarkAllAsReadEnabled: r,
							isPending: o,
							messagesBadgeCount: i,
							notifications: c,
							hideTooltip: d
						} = e,
						l = !(!c || !c.length);
					return a.a.createElement(U, null, a.a.createElement("div", {
						className: b.a.tooltipContainer
					}, a.a.createElement(B, {
						isInboxMarkAllAsReadEnabled: r,
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(j.e)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: i,
						onMessagesClick: () => {
							t(Object(j.m)({
								badgeCount: s,
								tab: j.d.Messages
							})), t(Object(j.f)()), n()
						},
						sendInboxClickSettings: () => t(Object(j.k)(j.a.MiniInbox)),
						onBarClick: d
					}), a.a.createElement(w, k({}, e, {
						isPending: o,
						onItemClick: d
					})), (l || o) && a.a.createElement(M, {
						sendInboxClickSeeAll: () => t(Object(j.j)()),
						onBarClick: d
					})))
				}
		},
		"./src/reddit/components/InboxTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				carot: "_389RY3FytRs4F82-BLVEiq",
				StyledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				styledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				tooltipContainer: "_3oNU8Gzy2V3jDPhFfeEFbD",
				topNav: "F0hrtz76LlopbY9X0wtDo",
				topNavTitle: "wdFbe8PT7DInxaiHo2Me1",
				messagesLinkContainer: "_1581SeO-Xb1j1kfhIRrIyB",
				topNavLinks: "_1R0ZV71kh7uwDXo7fn1eDk",
				messagesLink: "_27rjoZBkLhiqLLjBu-xU_p",
				"m-active": "_29xCmtH_l8UtRn8IP08VLB",
				mActive: "_29xCmtH_l8UtRn8IP08VLB",
				badgeCount: "_1mrhJHegVozrNeTH7r5svN",
				navLink: "_2l1d6HSQ764u0JcvRSEJXD",
				notificationList: "_2MId4QR3fPm4RPlrSTZg_E",
				notificationResizeWrapper: "_3PWmWL3sMw23-xBHydcnPf",
				emptyState: "_17HPdVVhdV3LWBjzHwGlhA",
				emptyTitle: "_2CY3n2AMoj0af7gQhj9dfI",
				emptyDescription: "HxBuWRTAFa8y8bMiQKdSJ",
				bottomBar: "_8INvnNiEMHRndJ0M-LiY",
				bottomLink: "X1WC7m4hrFQNzINreBRsv",
				Gear: "_3KogLgBmag36_tCz2x_A4v",
				gear: "_3KogLgBmag36_tCz2x_A4v",
				MarkAsRead: "y24rxfGSKrlV1jVQxeu3I",
				markAsRead: "y24rxfGSKrlV1jVQxeu3I",
				BellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				bellOutline: "SBkEJxL8i3eNB9EZn7AAz"
			}
		},
		"./src/reddit/components/NotificationUnit/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "NotificationUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("NotificationUnit").then(n.bind(null, "./src/reddit/components/NotificationUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NotificationUnit/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/NotificationUnit/index.m.less"),
				o = n.n(a);
			const i = () => r.a.createElement("li", {
					className: o.a.placeholderWrapper
				}, r.a.createElement("span", {
					className: o.a.placeholderAvatar
				}), r.a.createElement("span", {
					className: o.a.placeholderContent
				})),
				c = () => r.a.createElement("ol", null, r.a.createElement(i, null), r.a.createElement(i, null), r.a.createElement(i, null))
		},
		"./src/reddit/components/NotificationUnit/index.m.less": function(e, t, n) {
			e.exports = {
				notificationItem: "_3mUSJN4kdLCGjq-K-JLJw",
				unread: "_2n4UrzwZ3VBdRmFUYAHF_9",
				isNightMode: "_3ds5pVvIyBrh1GgQ2O7AFd",
				contextContainer: "_3T3J7R8JnlSfiFdB5bxe5h",
				link: "_1tpiOc0IxpDU113wUs4zi1",
				avatarContainer: "_2WN4-UdVoyjpLQ8mpNTQA",
				avatar: "_12V0IULSx8mSJHxdpHwOGE",
				nsfwAvatar: "_1Bzw8F6BC4Vk8OzAgnU0z3",
				notificationIconContainer: "_3smo-GSstogGTGh6ArpwI0",
				NotifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				notifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				RedditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				redditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				Separator: "_1caKsZ5CCRPSfIgoh608Ej",
				separator: "_1caKsZ5CCRPSfIgoh608Ej",
				topBar: "_3mGSd8RyCZhF_eqyrV_Bvk",
				title: "_180jOSBDwwE60X5UR8zt3-",
				timeAgo: "_2fQXbzOYQuzqlwMzxgtBKH",
				"m-tooltip": "_2a8MIP8QlMF7KPqTup62Vt",
				mTooltip: "_2a8MIP8QlMF7KPqTup62Vt",
				menuButton: "_8Q653FSGz7lD9Ux0AQsXY",
				isOpen: "WHFiF_asC8mzlevTdJv26",
				MenuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				menuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				contentContainer: "_3Q_e75oXJ8meqWwAQS36l2",
				body: "_2VDnxV3G5ZvEDq10Z-_fM9",
				ButtonIcon: "_25ecrisK-bGTesa4kIqyHR",
				buttonIcon: "_25ecrisK-bGTesa4kIqyHR",
				ReplyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				replyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				NotificationButton: "_3Ai1gn9teWMTX_g8CIyRdY",
				notificationButton: "_3Ai1gn9teWMTX_g8CIyRdY",
				postEmbedContainer: "_1cndvAxAFPMUr8IaWuw_we",
				postEmbedContent: "_2fsQOzhZpW9XNu1RXtgzqW",
				deleted: "LypGzp3NJwjpkpsRn9Ocn",
				postEmbedTitleContainer: "_2XT3C7unUlQXgaiyeYfIYv",
				postEmbedTitle: "_1SZwyv3jy4dBipT0yC1CcI",
				postEmbedMeta: "_1LcCO3y9JhylZFlKsgvzHs",
				postEmbedBlurredThumbnailContainer: "_2EmrjrpYxkgB5_ljritGbO",
				postEmbedBlurredThumbnail: "_2a0rc3KL05PEnGmVWcQI8W",
				postEmbedThumbnail: "msJLWFmahK0W8JhaqYny9",
				postEmbedThumbnailBase: "_3CGVcVQDu97m9Oj_xs0n01",
				postEmbedNSFWThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				postEmbedNsfwThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				WarningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				warningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				StyledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				styledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				overflowMenuContainer: "_2UKt6pQu-os9uxZnfhPydP",
				overflowMenuOption: "_1g8x_Z2KsTf65RBk7dRBZm",
				placeholderWrapper: "_2iacm7sPgvO9z8gO1W7FoY",
				placeholderAvatar: "_2_cDiTNVpitX7CtTmIambB",
				placeholderContent: "_2KpinIkIJ7VxNGQgUgzJCA",
				glimmer: "_27pfB7o_o_4F4TdujFhrNO",
				PostUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				postUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				StateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				stateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				Text: "_2bba9zuFqUwxMhGdswkU86",
				text: "_2bba9zuFqUwxMhGdswkU86"
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(a.a)(e, t);
				class s extends r.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return r.a.createElement(n, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(s)
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/config.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class l extends r.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: s,
						totalCount: i
					} = t, l = s.description ? s.description : s.name;
					return r.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${n}/gilded`
					}, r.a.createElement("div", {
						className: c.a.iconColumn
					}, r.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), i > 1 && r.a.createElement("span", {
						className: c.a.count
					}, `+${Object(o.b)(i-1)}`)), r.a.createElement("div", {
						className: c.a.textColumn
					}, d._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [d._param("award-name", s.name), d._plural(i)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = n.n(l);
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(n, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: n,
						hideNSFWPref: r,
						isNSFW: o,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? a.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(c.e)(n) === d ? a.a.createElement(i.a, {
						altText: s.fbt._("{userName} banner image", [s.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : o && r ? null : m
				}
			}
			t.a = Object(d.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = Object(r.c)({
					currentUser: o.i,
					hideNSFWPref: o.B
				}),
				c = Object(s.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(a.z)(t, n))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				c = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				isOwnProfile: n,
				onClick: s
			}) {
				return r.a.createElement(o.q, {
					onClick: s,
					className: Object(a.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && n,
						[l.a.compactButtonLayout]: e
					})
				}, t ? r.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : r.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : n ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? r.a.createElement("div", {
					className: l.a.chevronIcon
				}) : r.a.createElement(i.a, {
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, n) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = n.n(c),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = n.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: n,
				editMode: s,
				isDeletingBanner: c,
				onDeleteBanner: l
			}) {
				return r.a.createElement("div", {
					className: d.a.bannerWrapper
				}, r.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: n
				}), s && e && (c ? r.a.createElement(a.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : r.a.createElement(o.a, {
					className: u.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/timeAgo/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: n,
				userCreated: s,
				username: d,
				...l
			}) {
				const u = t ? a.fbt._("{username} · {time since account creation}", [a.fbt._param("username", `u/${d}`), a.fbt._param("time since account creation", Object(o.d)(s, {
					noPostfix: !0,
					shortenedUnit: !0
				}))], {
					hk: "2k741A"
				}) : `u/${d}`;
				return n ? r.a.createElement(i.a, c({}, l, {
					className: e,
					to: n
				}), u) : r.a.createElement("span", c({}, l, {
					className: e
				}), u)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				l = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				u = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				m = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				p = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				b = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				f = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				v = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				h = n.n(v);
			const x = 25;

			function I(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function _(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const C = I("particleDelay", h.a),
				g = I("particleX", h.a),
				O = I("particleFloat", h.a),
				w = () => {
					const e = _(g),
						t = _(O),
						n = _(C);
					return Object(i.a)(h.a.particle, e, t, n)
				};
			class E extends a.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < x; t++) e.push(this.createParticle(t));
					return a.a.createElement("div", {
						role: "presentation",
						className: h.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return a.a.createElement("div", {
						key: e,
						className: `${w()}`
					})
				}
			}
			var j = E,
				y = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				N = n.n(y);
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: n,
				editMode: r,
				isDeletingBanner: v,
				isEmployee: x,
				isGold: I,
				isNSFW: _,
				isOwnProfile: C,
				onClickSnoovatar: g,
				onDeleteBanner: O,
				prefersReducedAnimations: w,
				snoovatarUrl: E,
				title: y,
				userCreated: L,
				username: k,
				url: S
			}) => a.a.createElement(a.a.Fragment, null, a.a.createElement(b.a, {
				bannerBackgroundImage: e,
				editMode: !!r,
				isNSFW: _,
				username: k,
				isDeletingBanner: !!v,
				onDeleteBanner: O
			}), a.a.createElement("div", {
				className: h.a.snoovatarContainer
			}, I && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
				className: h.a.topGlow
			}), a.a.createElement("div", {
				className: h.a.bottomGlow
			}), !w && a.a.createElement(j, null)), a.a.createElement("img", {
				className: Object(i.a)(h.a.snoovatar, {
					[h.a.premiumGlow]: I
				}),
				src: E || void 0
			})), !r && C && a.a.createElement(c.a, {
				to: "/settings/profile",
				className: h.a.snoovatarSettingsLink
			}, a.a.createElement(m.a, {
				className: N.a.settingsIcon
			})), a.a.createElement("h1", {
				className: h.a.snoovatarUserTitle
			}, y || k, x && a.a.createElement(d.a, {
				className: h.a.snoovatarAdminIcon,
				title: s.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), I && a.a.createElement("a", {
				title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", k)], {
					hk: "3Fylv"
				}),
				href: `${o.a.redditUrl}/premium`
			}, a.a.createElement(u.a, {
				className: h.a.snoovatarPremiumIcon
			})), _ && a.a.createElement(l.a, {
				className: h.a.snoovatarNsfwIcon,
				title: s.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			})), a.a.createElement(f.a, {
				className: h.a.snoovatarUserName,
				shouldDisplaySnoovatar: !0,
				username: k,
				userCreated: L,
				url: S
			}), (C || !n && !!E) && a.a.createElement(p.a, {
				compact: t,
				currentUserHasSnoovatar: n,
				isOwnProfile: C,
				onClick: g
			}))
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, n) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/raf/index.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a);
			class i extends o.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && r.a.cancel(this.frame), this.frame = r()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return o.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = ({
					border: e,
					small: t,
					...n
				}) => a.a.createElement(o.q, u({}, n, {
					priority: e ? o.b.Primary : o.b.Plain,
					className: Object(l.a)(n.className, d.a.BaseButton),
					size: t ? o.c.S : o.c.M
				})),
				p = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				b = ({
					buttonType: e,
					border: t,
					small: n,
					...s
				}) => a.a.createElement(o.q, u({}, s, {
					priority: t ? o.b.Secondary : o.b.Plain,
					className: Object(l.a)(s.className, d.a.BaseButton),
					size: n ? o.c.S : o.c.M,
					text: p(e)
				}));
			class f extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						small: s = !1,
						isFullWidth: r = !1
					} = this.props, o = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: s,
						isFullWidth: r
					};
					return this.props.userIsSubscriber ? a.a.createElement(b, u({}, o, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(m, u({}, o, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				a = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = ({
					type: e,
					key: t
				}) => a[r({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(a.a))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/subscription/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: o.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(a.d([t], !0)),
				onSubscriptionsRequested: () => e(a.e()),
				onUnsubscribe: () => e(a.d([t], !1))
			}))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			class a extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, a = n || s;
					return r.a.createElement("div", {
						className: e.className
					}, n && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), !a && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "i", (function() {
				return I
			})), n.d(t, "r", (function() {
				return _
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "e", (function() {
				return w
			}));
			var s, r, a, o, i, c = n("./src/reddit/constants/tracking.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(s || (s = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder"
			}(r || (r = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(a || (a = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(o || (o = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(i || (i = {}));
			const u = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => r => ({
					...d.defaults(r),
					action: c.c.VIEW,
					noun: "inbox_notification",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					}
				}),
				m = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: r
				}) => a => {
					Object(l.a)({
						...d.defaults(a),
						action: "receive",
						noun: "inbox_notification",
						source: o.Inbox,
						inbox: {
							id: e,
							isClicked: t,
							isViewed: n
						},
						notification: {
							type: s
						},
						goldPurchase: {
							awardId: r
						}
					})
				},
				p = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: r,
					position: a
				}) => i => ({
					...d.defaults(i),
					action: c.c.CLICK,
					noun: "inbox_notification",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					},
					goldPurchase: {
						awardId: r
					},
					actionInfo: {
						position: a
					}
				}),
				b = ({
					badgeCount: e,
					tab: t
				}) => n => ({
					...d.defaults(n),
					action: c.c.VIEW,
					noun: "inbox",
					source: o.Inbox,
					inbox: {
						badgeCount: e,
						tab: t
					}
				}),
				f = ({
					badgeCount: e,
					tab: t
				}) => t => ({
					...d.defaults(t),
					action: c.c.VIEW,
					noun: "mini_inbox",
					source: o.Inbox,
					inbox: {
						badgeCount: e,
						tab: s.Activity
					}
				}),
				v = ({
					badgeCount: e
				}) => t => ({
					...d.defaults(t),
					action: c.c.CLICK,
					noun: "inbox",
					source: o.Nav,
					inbox: {
						badgeCount: e
					}
				}),
				h = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: r
				}) => a => ({
					...d.defaults(a),
					action: c.c.CLICK,
					noun: "inbox_notification_overflow",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					},
					goldPurchase: {
						awardId: r
					}
				}),
				x = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => r => ({
					...d.defaults(r),
					action: c.c.VIEW,
					noun: "inbox_notification_overflow",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					}
				}),
				I = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: s,
					type: r
				}) => a => ({
					...d.defaults(a),
					action: c.c.CLICK,
					noun: "overflow_option",
					source: o.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: s
					},
					notification: {
						type: r
					},
					actionInfo: {
						...d.actionInfo(a),
						type: e
					}
				}),
				_ = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: s,
					type: r
				}) => a => ({
					...d.defaults(a),
					action: c.c.UNDO,
					noun: "overflow_option",
					source: o.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: s
					},
					notification: {
						type: r
					},
					actionInfo: {
						...d.actionInfo(a),
						type: e
					}
				}),
				C = e => t => ({
					...d.defaults(t),
					action: c.c.CLICK,
					noun: "notification_app_settings",
					source: o.Inbox,
					actionInfo: {
						...d.actionInfo(t),
						pageType: e
					}
				}),
				g = () => e => ({
					...d.defaults(e),
					action: c.c.CLICK,
					noun: "see_all",
					source: o.Inbox,
					actionInfo: {
						...d.actionInfo(e),
						pageType: a.MiniInbox
					}
				}),
				O = () => e => ({
					...d.defaults(e),
					action: c.c.CLICK,
					noun: "messages",
					source: o.Inbox
				}),
				w = ({
					isMiniInbox: e
				}) => t => ({
					...d.defaults(t),
					action: c.c.CLICK,
					noun: "mark_all_as_read",
					source: o.Inbox,
					actionInfo: e ? {
						...d.actionInfo(t),
						pageType: a.MiniInbox
					} : {}
				})
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				r = n("./src/reddit/selectors/avatarMarketing.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const o = {
					goldPurchase: {
						offerContext: s.a.AvatarNewGear
					}
				},
				i = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...a.defaults(t)
					};
					return Object(r.a)(t) && Object.assign(n, o), n
				},
				c = e => ({
					...a.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: a.snoovatarActiveForBuilderEvent(e)
				}),
				d = e => ({
					...a.defaults(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: a.snoovatarActiveForBuilderEvent(e)
				}),
				l = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...a.defaults(e),
					...o
				})
		},
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, t, n) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/Info/index.m.less"),
				i = n.n(o);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(a.b)("info",e.isFilled)} ${e.className}`
			}), "InfoIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Ban/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"
			})))
		},
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/MarkAsRead/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				clipRule: "evenodd",
				d: "M14.03 9.53l-5 5a.748.748 0 01-1.06 0l-2-2a.75.75 0 111.06-1.061l1.47 1.47 4.47-4.47a.75.75 0 111.06 1.061m4.5-3.378l-8-5a.999.999 0 00-1.06 0l-8 5A.999.999 0 001 7v9c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7a1 1 0 00-.47-.848",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Mute/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M9.97968,8.20936 C10.13568,8.36536 10.13568,8.61896 9.97968,8.77496 C9.90128,8.85336 9.79888,8.89256 9.69648,8.89256 C9.59488,8.89256 9.49248,8.85336 9.41408,8.77496 L7.99968,7.36056 L6.58608,8.77496 C6.50768,8.85336 6.40528,8.89256 6.30288,8.89256 C6.20048,8.89256 6.09808,8.85336 6.02048,8.77496 C5.86368,8.61896 5.86368,8.36536 6.02048,8.20936 L7.43408,6.79496 L6.02048,5.38136 C5.86368,5.22536 5.86368,4.97176 6.02048,4.81576 C6.17648,4.65976 6.43008,4.65976 6.58608,4.81576 L7.99968,6.22936 L9.41408,4.81576 C9.57008,4.65976 9.82368,4.65976 9.97968,4.81576 C10.13568,4.97176 10.13568,5.22536 9.97968,5.38136 L8.56528,6.79496 L9.97968,8.20936 Z M12.79968,1.59976 L3.19968,1.59976 C2.31808,1.59976 1.59968,2.31816 1.59968,3.19976 L1.59968,10.59496 C1.59968,11.47736 2.31808,12.19496 3.19968,12.19496 L6.10528,12.19496 L7.33408,14.03896 C7.48288,14.26136 7.73248,14.39496 7.99968,14.39496 C8.26688,14.39496 8.51728,14.26136 8.66528,14.03896 L9.89488,12.19496 L12.79968,12.19496 C13.68208,12.19496 14.39968,11.47736 14.39968,10.59496 L14.39968,3.19976 C14.39968,2.31816 13.68208,1.59976 12.79968,1.59976 L12.79968,1.59976 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/NewPost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 19 19"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.55 2.58716L16.413 4.45018C16.9354 4.97264 16.9354 5.82198 16.413 6.34445L14.7732 7.98419C14.6857 8.07171 14.5714 8.11547 14.458 8.11547C14.3436 8.11547 14.2293 8.07171 14.1418 7.98419L11.0159 4.85832C10.8418 4.68417 10.8418 4.40105 11.0159 4.2269L12.6557 2.58716C13.1781 2.0647 14.0275 2.0647 14.55 2.58716ZM9.7531 5.48975C9.92725 5.31559 10.2104 5.31559 10.3845 5.48975L13.5104 8.61561C13.6845 8.78977 13.6845 9.07288 13.5104 9.24703L5.8806 16.8768C5.79665 16.9608 5.68322 17.0072 5.56533 17.0072H2.43947C2.19208 17.0072 1.99292 16.808 1.99292 16.5607V13.4348C1.99292 13.3169 2.03936 13.2035 2.12331 13.1195L9.7531 5.48975Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), r.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, r.a.createElement("stop", {
				stopColor: "#EC0623"
			}), r.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = function({
				className: e
			}) {
				return r.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					fill: "inherit"
				}, r.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/icons/svgs/Unban/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8,6.77247619 L8,6.27380952 L7.5072,6.27380952 L8,6.77247619 Z M7,5.76057143 L7,0.80952381 L11,0.80952381 L11,6.27380952 L10,6.27380952 L10,8.79628571 L15.9072,14.7738095 L15.2,15.4894286 L1,1.12038095 L1.7072,0.404761905 L3,1.71295238 L3,1.00178571 C3,0.44847619 3.4432,0 3.99,0 L4.01,0 C4.5568,0 5,0.44847619 5,1.00178571 L5,3.7367619 L5.8,4.54628571 L5.8,0.80952381 C5.8,0.585690476 5.9792,0.404761905 6.2,0.404761905 C6.4208,0.404761905 6.6,0.585690476 6.6,0.80952381 L6.6,5.35580952 L7,5.76057143 Z M8.2,8.9047619 L10.2,10.9285714 L10.2,14.2706905 C10.2,14.824 9.7568,15.2724762 9.21,15.2724762 L9.19,15.2724762 C8.6432,15.2724762 8.2,14.824 8.2,14.2706905 L8.2,8.9047619 Z M5.8,6.47619048 L6.284,6.96595238 C6.2568,6.97161905 6.2288,6.97485714 6.2,6.97485714 C5.9792,6.97485714 5.8,6.79392857 5.8,6.57009524 L5.8,6.47619048 Z M12.2,0.404761905 C12.4208,0.404761905 12.6,0.586095238 12.6,0.80952381 L12.6,6.67857143 C12.6,6.902 12.4208,7.08333333 12.2,7.08333333 C11.9792,7.08333333 11.8,6.902 11.8,6.67857143 L11.8,0.80952381 C11.8,0.586095238 11.9792,0.404761905 12.2,0.404761905 Z M14.01,0 C14.5568,0 15,0.44847619 15,1.00178571 L15,6.08154762 C15,6.63485714 14.5568,7.08333333 14.01,7.08333333 L13.99,7.08333333 C13.4432,7.08333333 13,6.63485714 13,6.08154762 L13,1.00178571 C13,0.44847619 13.4432,0 13.99,0 L14.01,0 Z M3,4.04761905 L5,6.07142857 L5,6.37783333 C5,6.93114286 4.5568,7.37961905 4.01,7.37961905 L3.99,7.37961905 C3.4432,7.37961905 3,6.93114286 3,6.37783333 L3,4.04761905 Z"
			})))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.m.less"),
				a = n.n(r);
			t.a = s.a.div("inlineRow", a.a)
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/lessComponent.tsx");
			var i = e => a.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 21"
				}, a.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
				})),
				c = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				d = n.n(c);
			const l = o.a.wrapped(i, "BellOutline", d.a),
				u = () => a.a.createElement("div", {
					className: d.a.emptyState
				}, a.a.createElement(l, null), a.a.createElement("h1", {
					className: d.a.emptyTitle
				}, s.fbt._("Be the first to know", null, {
					hk: "2mNJO0"
				})), a.a.createElement("p", {
					className: d.a.emptyDescription
				}, s.fbt._("This is where you get updates on your activity and recommendations", null, {
					hk: "27V2PG"
				})))
		},
		"./src/reddit/pages/NotificationsInbox/Content/index.m.less": function(e, t, n) {
			e.exports = {
				notificationsContainer: "_1B9l9ftY8mkrILj7ISvc9_",
				NotificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				notificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				emptyState: "_1q1-Ijtc4SLFaVvDcMzus8",
				emptyTitle: "qVJaimYNUSSDa5PIOSZoi",
				emptyDescription: "ytrwXC5fcR-1vocS1eSbT",
				BellOutline: "_3xFZexoKoKqw8cjNoivDDZ",
				bellOutline: "_3xFZexoKoKqw8cjNoivDDZ",
				Divider: "_2ACXQJ7zvrPMS_i8J15E_s",
				divider: "_2ACXQJ7zvrPMS_i8J15E_s"
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/constants/modals.ts");
			const i = {
				active: !1,
				assetUrls: null
			};
			var c = (e = null, t) => {
				var n;
				switch (t.type) {
					case r.o:
						const {
							avatarMarketingEvent: s
						} = t.payload;
						return s ? function(e) {
							const {
								startsAt: t,
								endsAt: n,
								webAssetUrls: s
							} = e, r = t && new Date(t) <= new Date, a = !!n && new Date(n) < new Date, o = s || null;
							return {
								active: !!r && !a && !!o,
								assetUrls: o
							}
						}(s) : i;
					case a.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === o.a.SNOOVATAR_MODAL ? i : e;
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				marketing: c
			})
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/avatar/index.ts"),
				o = n("./src/reddit/selectors/experiments/econ/avatarMarketing.ts");
			Object(r.a)({
				features: {
					avatar: a.a
				}
			});
			const i = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				c = Object(s.a)(o.a, e => {
					var t, n;
					const s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing;
					return (null == s ? void 0 : s.active) ? s.assetUrls && s.assetUrls[0] : null
				}, (e, t) => e ? t : null)
		},
		"./src/reddit/selectors/bannedUser.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				a = n("./src/reddit/models/SubredditModeration/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = (e, {
					subredditId: t
				}) => e.features.banned.models[t],
				c = (e, {
					subredditId: t,
					username: n
				}) => {
					const s = Object(o.mb)(e, {
						userName: n
					});
					if (!s) return;
					const r = i(e, {
						subredditId: t
					});
					return r ? r[s.id] : void 0
				},
				d = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = e.features.banned.userOrder[t];
					return n ? n.map(n => e.features.banned.models[t][n]) : r.a
				}),
				l = (e, {
					subredditId: t
				}) => {
					const n = Object(a.d)(t);
					return e.features.banned.api.pending[n]
				},
				u = (e, {
					subredditId: t
				}) => e.features.banned.loadMore[t],
				m = e => e.features.banned.search.api.pending,
				p = e => e.features.banned.search.result,
				b = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/experiments/econ/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(r.a)(s.qb)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.09fbfd3cac934f722196.js.map