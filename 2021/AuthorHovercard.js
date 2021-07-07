// https://www.redditstatic.com/desktop2x/AuthorHovercard.2e67fea1a6f492f347d3.js
// Retrieved at 7/7/2021, 2:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/reddit/actions/pages/avatar.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/actions/users.ts"),
				s = n("./src/reddit/selectors/user.ts"),
				a = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				await e(Object(r.r)()), Object(s.K)(t()) || e(Object(a.h)())
			}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./src/telemetry/index.ts"),
				s = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = () => async (e, t) => {
				const n = t();
				Object(r.a)(Object(c.c)(n)), e(Object(o.r)({
					forceFetch: !0
				})), await e(Object(a.g)(i.a.SNOOVATAR_MODAL))
			}, u = e => async (t, n) => {
				const o = n();
				Object(r.a)(Object(c.a)(e)(o)), Object(d.K)(o) ? await t(Object(a.h)(i.a.SNOOVATAR_MODAL)) : await t(Object(s.h)())
			}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return re
			})), n.d(t, "b", (function() {
				return oe
			})), n.d(t, "e", (function() {
				return ie
			})), n.d(t, "a", (function() {
				return ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/get.js"),
				a = n.n(s),
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
				h = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const x = (e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
				endpoint: Object(h.a)(Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.hb.GET,
				data: n
			});
			var _ = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				I = n("./src/reddit/models/SubredditModeration/index.ts"),
				g = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				O = n("./src/reddit/selectors/bannedUser.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/actions/subredditModeration/constants.ts"),
				y = n("./src/lib/initializeClient/installReducer.ts"),
				N = n("./node_modules/redux/es/redux.js");
			var k = (e = null, t) => {
				switch (t.type) {
					case w.o:
					case w.n:
						return null;
					case w.m:
						return t.payload;
					default:
						return e
				}
			};
			const S = {};
			var P = (e = S, t) => {
					switch (t.type) {
						case w.o: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(I.d)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						case w.n:
						case w.m: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(I.d)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				U = Object(N.c)({
					error: k,
					pending: P
				});
			const B = {};
			var A = (e = B, t) => {
					switch (t.type) {
						case w.n: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, s = Object(I.d)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				T = n("./src/reddit/actions/inContextModeration.ts");
			var F = (e = null, t) => {
				switch (t.type) {
					case T.a:
						return t.payload;
					default:
						return e
				}
			};
			const L = {};
			var H = (e = L, t) => {
					switch (t.type) {
						case w.n: {
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
				M = n("./node_modules/icepick/icepick.js");
			const R = {};
			var D = (e = R, t) => {
				switch (t.type) {
					case w.l:
					case w.n: {
						const {
							subredditId: n,
							bannedUsers: r
						} = t.payload;
						return Object(M.merge)(e, {
							[n]: r
						})
					}
					case w.s: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(M.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var K = (e = null, t) => {
				switch (t.type) {
					case w.r:
					case w.q:
						return null;
					case w.p:
						return t.payload;
					default:
						return e
				}
			};
			var z = (e = !1, t) => {
					switch (t.type) {
						case w.r:
							return !0;
						case w.q:
						case w.p:
							return !1;
						default:
							return e
					}
				},
				W = Object(N.c)({
					error: K,
					pending: z
				});
			var q = (e = null, t) => {
					switch (t.type) {
						case w.r:
						case w.p:
							return null;
						case w.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				Z = Object(N.c)({
					api: W,
					result: q
				});
			const G = {};
			var J = (e = G, t) => {
					switch (t.type) {
						case w.n: {
							const {
								subredditId: n,
								bannedUserIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case w.s: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case w.l: {
							const {
								subredditId: n,
								bannedUserIds: r
							} = t.payload, s = r[0];
							return s && e[n] && -1 === e[n].indexOf(s) ? {
								[n]: [s, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				V = Object(N.c)({
					api: U,
					fetchedTokens: A,
					inContext: F,
					loadMore: H,
					models: D,
					search: Z,
					userOrder: J
				});
			Object(y.a)({
				features: {
					banned: V
				}
			});
			const X = Object(o.a)(w.o),
				Y = Object(o.a)(w.n),
				Q = Object(o.a)(w.m),
				$ = (e, t = {}) => async (n, r, {
					apiContext: s
				}) => {
					const a = r(),
						o = t.after || "",
						i = Object(I.d)(e, o),
						c = a.features.banned.fetchedTokens[i];
					if (a.features.banned.api.pending[i] || c) return;
					n(X({
						subredditId: e,
						fetchedToken: o
					}));
					const d = a.subreddits.models[e].name,
						l = await x(s(), d, t);
					l.ok ? n(Y({
						...l.body,
						fetchedToken: o
					})) : n(Q({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(w.r), te = Object(o.a)(w.q), ne = Object(o.a)(w.p), re = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const a = r().subreddits.models[e].name,
						o = {
							username: Object(_.a)(t)
						};
					n(ee());
					const i = await x(s(), a, o);
					i.ok ? n(te(i.body)) : n(ne(i.error))
				}, se = Object(o.a)(w.l), ae = Object(o.a)(w.s), oe = (e, t, n) => async (s, o, {
					apiContext: c
				}) => {
					const d = o(),
						u = d.subreddits.models[e].url,
						h = d.subreddits.models[e].name;
					t.username = Object(_.a)(t.username), s(Object(i.h)(n));
					const v = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.hb.POST,
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
					if (v.ok) {
						s(Object(i.e)(n));
						const e = {
							username: t.username
						};
						s(Object(l.f)({
							kind: g.b.SuccessMod,
							text: r.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const a = await x(c(), h, e);
						a.ok && s(se(a.body))
					} else {
						s(Object(i.f)(n, v.error));
						const e = a()(v, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(l.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const i = s().subreddits.models[e].url,
						c = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.hb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(o(), i, t);
					if (c.ok) n(ae({
						subredditId: e,
						userId: t
					})), n(Object(l.f)({
						kind: g.b.SuccessMod,
						text: r.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(c, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (n, r) => {
					const s = r();
					await Promise.all([(async () => {
						if (!Object(C.b)(u.a.BAN_USER)(s) && !Object(E.P)(s, {
								subredditId: e
							})) {
							const t = Object(E.S)(s, {
								subredditId: e
							});
							await n(Object(d.o)(t.name))
						}
					})(), (async () => {
						const r = Object(j.nb)(s, {
							userName: t
						});
						if (!r) return;
						const a = Object(O.h)(s, {
							subredditId: e
						});
						a && a[r.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(c.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
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
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
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
				return A
			})), n.d(t, "d", (function() {
				return F
			})), n.d(t, "c", (function() {
				return H
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return K
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
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
			var h = n("./src/redditGQL/operations/SubscribedSubreddits.json"),
				v = n("./src/lib/makeGqlRequest/index.ts"),
				x = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var _ = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				I = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = n("./src/reddit/models/GqlTopLevelField.ts"),
				C = n("./src/reddit/models/User/index.ts");

			function O(e) {
				const t = [],
					n = [],
					r = {},
					s = {},
					{
						followedRedditorsInfo: a
					} = e.identity;
				for (const i of a.edges) {
					if (i.node.__typename !== C.c.AvailableRedditor || !i.node.profile) continue;
					const e = Object(_.a)(i.node.profile);
					r[e.id] = e;
					const {
						isFavorite: n
					} = i.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: o
				} = e.identity;
				for (const i of o.edges) {
					if (i.node.__typename !== g.a.Subreddit) continue;
					const e = Object(I.a)(i.node);
					s[e.id] = e;
					const {
						isFavorite: t
					} = i.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: r,
					subreddits: s
				}
			}
			var E = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/selectors/profile.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/selectors/subscriptions.ts"),
				N = n("./src/reddit/selectors/user.ts");
			const k = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				S = Object(a.a)(l.c),
				P = Object(a.a)(l.b),
				U = Object(a.a)(l.a),
				B = Object(a.a)(l.h),
				A = (Object(a.a)(l.i), Object(a.a)(l.g), () => async (e, t, {
					gqlContext: n
				}) => {
					const r = t();
					if (!r.user.account || r.subscriptions.api.fetched) return;
					e(P());
					const s = await (e => Object(v.a)(e, h))(n());
					if (s.ok) {
						const t = O(s.body.data);
						e(S(t))
					} else e(U({
						error: s.error
					}))
				}),
				T = (e, t) => t.type === m.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				F = (e, t, n) => async (a, l, {
					apiContext: h
				}) => {
					let v = e.map(e => e.type === m.a.SUBREDDIT ? {
						id: Object(w.D)(l(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(j.m)(l(), e.name),
						name: `${s.dc}${e.name}`,
						type: e.type
					});
					if (!Object(N.K)(l())) return a(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void a(Object(c.j)());
					const _ = Object(N.j)(l());
					if (_) {
						const t = v.length,
							n = e.length;
						if (v = v.filter(e => !T(_, e)), (e = e.filter(e => !T(_, e))).length !== n || v.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							a(Object(u.f)(Object(u.e)(e, E.b.Error)))
						}
						if (!e.length && !v.length) return
					}
					if (a(B({
							identifiers: v,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(y.b)(l()),
							userIsSubscriber: t,
							widgetId: n
						})), (await ((e, {
							subredditIds: t,
							subredditNames: n,
							subscribe: r
						}) => Object(p.a)(Object(b.a)(e, [f.a]), {
							method: s.hb.POST,
							endpoint: Object(x.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: r ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: n && n.join(",") || void 0,
								api_type: "json"
							}
						}))(h(), {
							subredditNames: v.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						v.filter(e => e.type === m.a.SUBREDDIT).forEach(({
							id: e
						}) => a(Object(i.k)(e, {
							forceLoad: !0,
							fullData: !1
						})));
						const n = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : r.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [r.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							s = r.fbt._("Sucсessfully followed {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1S5AXJ"
							}),
							c = r.fbt._("Sucсessfully unfollowed {communityname}", [r.fbt._param("communityname", n)], {
								hk: "2XWHyB"
							}),
							d = r.fbt._("Sucсessfully joined {communityname}", [r.fbt._param("communityname", n)], {
								hk: "3Al8aF"
							}),
							l = r.fbt._("Sucсessfully left {communityname}", [r.fbt._param("communityname", n)], {
								hk: "2w5JFZ"
							});
						a(Object(u.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : c : t ? d : l
						}))
					} else {
						a(B({
							identifiers: v,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(y.b)(l()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const s = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						a(Object(u.f)(Object(u.e)(s, E.b.Error)))
					}
				}, L = Object(a.a)(l.f), H = e => async (t, n, {
					apiContext: r
				}) => {
					const a = n(),
						o = Object(w.K)(a, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const i = e.type === m.a.SUBREDDIT ? o.name : `u_${o.name}`,
						c = a.subscriptions.favoriteSubredditOrder || [],
						d = a.subscriptions.favoriteProfileOrder || [],
						l = c.indexOf(e.id),
						h = d.indexOf(e.id),
						v = -1 === l && -1 === h,
						x = a.subreddits.models,
						_ = a.profiles.models;
					t(L({
						makeFavorite: v,
						identifier: e,
						subredditModels: x,
						profileModels: _
					}));
					const I = {
							type: e.type,
							name: o.name
						},
						g = () => Object(w.eb)(n(), {
							identifier: I
						});
					(g() || (await t(F([I], !0)), g())) && ((await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
						method: s.hb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(r(), i, v)).ok || (t(L({
						makeFavorite: !v,
						identifier: e,
						subredditModels: x,
						profileModels: _
					})), t(Object(u.f)({
						text: k(),
						kind: E.b.Error
					}))))
				}, M = Object(a.a)(l.d), R = e => async (t, n, {
					apiContext: r
				}) => {
					const a = n().multireddits.models,
						o = () => {
							t(Object(u.f)({
								text: k(),
								kind: E.b.Error
							}))
						},
						i = a[e];
					if (!i) return void o();
					const c = !i.isFavorited;
					t(M({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
						method: s.hb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(r(), e, c)).ok || (t(M({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: a
					})), o())
				}, D = Object(a.a)(l.e), K = e => async (t, n, {
					apiContext: a
				}) => {
					const o = n(),
						i = o.multireddits.models;
					if (!Object(N.K)(o)) return;
					const c = (e = !0) => {
							t(Object(u.f)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "2I4uia"
								}) : r.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: E.b.Error
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
						method: s.hb.POST,
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
				return s
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
			var r = n("./src/lib/loadableAction/index.ts");
			const s = Object(r.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				a = Object(r.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				o = Object(r.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				i = Object(r.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(r.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				d = Object(r.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				l = Object(r.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: n,
				unreadCount: r
			}) => t ? s.a.createElement("span", {
				className: Object(a.a)(e, c.a.badgeCounter, {
					[c.a.mEmpty]: n || r < 1
				})
			}, n || r < 1 ? "" : Object(o.b)(r)) : null
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/chat/toggle.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(r || (r = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: n,
				sendEvent: s,
				contextId: o,
				priority: i,
				Icon: c,
				redditStyle: u,
				isFullWidth: m,
				eventSource: p,
				onClick: b,
				onAddUserToQuickReplyList: f,
				children: h
			}) => {
				return a.a.createElement(d.q, {
					onClick: t => {
						if (b && b(t), e(), p === r.awardNotification) return f();
						s(Object(l.b)(o))
					},
					className: n,
					text: t,
					priority: i,
					Icon: c,
					redditStyle: u,
					isFullWidth: m
				}, h)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/ImageInput/index.tsx"),
				i = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/models/ApiRequestState/index.ts"),
				l = n("./src/reddit/components/EditableImage/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = 80;
			class b extends s.a.PureComponent {
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
						editButtonClassName: r,
						isLoading: d,
						imageUrl: l
					} = this.props;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.Container, n)
					}, s.a.createElement("label", {
						className: u.a.HitBox
					}, s.a.createElement("span", {
						className: u.a.ImageContainer,
						role: "presentation"
					}, l ? s.a.createElement("img", {
						alt: e,
						className: u.a.Image,
						src: l
					}) : t), s.a.createElement(o.a, {
						className: u.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !d && s.a.createElement("div", {
						className: Object(a.a)(u.a.EditButton, r)
					}, s.a.createElement(c.a, {
						name: "add_media",
						className: u.a.EditIcon
					}))), d && s.a.createElement(i.a, {
						className: u.a.LoadingIcon,
						sizePx: p
					}))
				}
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				h = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/selectors/userFlair.ts"),
				x = n("./src/reddit/selectors/userPrefs.ts"),
				_ = n("./node_modules/fbt/lib/FbtPublic.js"),
				I = n("./src/config.ts"),
				g = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = n("./src/lib/lessComponent.tsx"),
				O = n("./src/lib/prettyPrintNumber/index.ts"),
				E = n("./src/lib/timeAgo/index.ts"),
				j = n("./src/reddit/components/ChatButton/index.tsx"),
				w = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				N = n("./src/reddit/components/SubscribeButton/index.tsx"),
				k = n("./src/reddit/components/UserIcon/index.tsx"),
				S = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				P = n("./src/reddit/icons/fonts/Info/index.tsx"),
				U = n("./src/reddit/icons/svgs/Admin/index.tsx");
			var B = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				A = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				T = n("./src/reddit/models/Gold/Award.ts"),
				F = n("./src/reddit/models/User/index.ts"),
				L = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				H = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				M = n("./src/reddit/actions/inContextModeration.ts"),
				R = n("./src/reddit/actions/modal.ts"),
				D = n("./src/reddit/actions/subredditModeration/ban.ts"),
				K = n("./src/reddit/constants/modals.ts"),
				z = n("./src/reddit/components/Hovercards/helpers.ts"),
				W = n("./src/reddit/icons/fonts/index.tsx"),
				q = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Z = n("./src/reddit/selectors/bannedUser.ts"),
				G = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				J = n.n(G);
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js"), X = Object(o.c)({
				hasModMailPermissions: Object(u.b)(q.c.mail),
				isUserBanned: (e, t) => !!Object(Z.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(h.nb)(e, {
					userName: t.username
				})
			});
			class Y extends s.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: r,
						onUnbanUser: a,
						sendEvent: o,
						toggleBanModal: i,
						toggleMuteModal: c
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, r ? s.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), o(S.e(t))
						}
					}, s.a.createElement(W.a, {
						name: "ban",
						isFilled: !0,
						className: J.a.icon
					}), V._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							i(), o(S.a(t))
						}
					}, s.a.createElement(W.a, {
						name: "ban",
						className: J.a.icon
					}), V._("Ban User", null, {
						hk: "3OhuLx"
					})), n && s.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							c(), o(S.d(t))
						}
					}, s.a.createElement(W.a, {
						name: "mod_mute",
						className: J.a.icon
					}), V._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var Q = Object(a.b)(X, (e, {
					username: t,
					subredditId: n,
					contextId: r
				}) => ({
					onUnbanUser: t => e(Object(D.e)(n, t)),
					requestUserBanInfo: () => e(Object(D.c)(n, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(M.c)({
							username: t,
							subredditId: n,
							contextId: r
						})), e(Object(D.a)(n, t))
					},
					toggleMuteModal: () => {
						e(Object(M.d)({
							username: t,
							subredditId: n,
							contextId: r
						})), e(Object(R.i)(K.a.MUTE_USER))
					}
				}))(Y),
				$ = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var te = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object($.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(S.c(e.contextId))
					}
				}, s.a.createElement(W.a, {
					name: "tag",
					className: J.a.icon
				}), ee._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ne = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				re = n.n(ne);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = C.a.wrapped(k.a, "UserIcon", re.a),
				oe = C.a.wrapped(N.a, "SubscribeButton", re.a),
				ie = C.a.wrapped(j.b, "ChatButton", re.a),
				ce = C.a.wrapped(B, "KarmaIcon", re.a),
				de = C.a.wrapped(A.a, "PremiumIcon", re.a),
				le = C.a.wrapped(g.a, "UserNameLink", re.a),
				ue = C.a.div("UserNameMetaData", re.a),
				me = C.a.div("MetaDataItem", re.a),
				pe = C.a.div("Bullet", re.a),
				be = C.a.div("UserNameContainer", re.a),
				fe = C.a.div("UserInfoContainer", re.a),
				he = C.a.div("PostKarma", re.a),
				ve = C.a.div("CommentKarma", re.a),
				xe = C.a.div("KarmaGrid", re.a),
				_e = C.a.div("GenericKarma", re.a),
				Ie = C.a.a("InfoLink", re.a),
				ge = C.a.div("KarmaCount", re.a),
				Ce = C.a.div("KarmaLabel", re.a),
				Oe = C.a.div("GenericKarmaLabel", re.a),
				Ee = C.a.div("BannerImage", re.a),
				je = C.a.div("UserContainer", re.a),
				we = C.a.div("BottomSpacer", re.a),
				ye = C.a.div("Container", re.a),
				Ne = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(le, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && s.a.createElement(U.a, {
					className: re.a.adminIcon,
					title: _.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(g.a, {
					to: "/premium"
				}, s.a.createElement(de, null))), s.a.createElement(ue, null, e.user.username && s.a.createElement(me, null, e.user.username, s.a.createElement(pe, null, "•")), s.a.createElement(me, null, Object(E.d)(e.user.createdUtc || e.user.created)))),
				ke = e => {
					const {
						showAwardKarma: t,
						user: n
					} = e;
					return t ? s.a.createElement(xe, null, s.a.createElement(_e, null, s.a.createElement(ge, null, Object(O.b)(n.postKarma)), s.a.createElement(Oe, null, _.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [_.fbt._plural(n.postKarma)], {
						hk: "3K4oaH"
					}))), s.a.createElement(_e, null, s.a.createElement(ge, null, Object(O.b)(n.commentKarma)), s.a.createElement(Oe, null, _.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [_.fbt._plural(n.commentKarma)], {
						hk: "3gKRx9"
					}))), s.a.createElement(_e, null, s.a.createElement(ge, null, Object(O.b)(n.awardeeKarma)), s.a.createElement(Oe, null, _.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [_.fbt._plural(n.awardeeKarma)], {
						hk: "3nzm9q"
					}), s.a.createElement(Ie, {
						href: T.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(P.a, {
						className: re.a.infoIcon
					})))), s.a.createElement(_e, null, s.a.createElement(ge, null, Object(O.b)(n.awarderKarma)), s.a.createElement(Oe, null, _.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [_.fbt._plural(n.awarderKarma)], {
						hk: "4zXN3B"
					}), s.a.createElement(Ie, {
						href: T.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(P.a, {
						className: re.a.infoIcon
					}))))) : s.a.createElement(fe, null, s.a.createElement(ce, null), s.a.createElement(he, null, s.a.createElement(ge, null, Object(O.b)(n.postKarma)), s.a.createElement(Ce, null, _.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [_.fbt._plural(n.postKarma)], {
						hk: "3K4oaH"
					}))), s.a.createElement(ve, null, s.a.createElement(ge, null, Object(O.b)(n.commentKarma)), s.a.createElement(Ce, null, _.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [_.fbt._plural(n.commentKarma)], {
						hk: "3gKRx9"
					}))))
				},
				Se = e => {
					const {
						className: t,
						contextId: n,
						currentUser: r,
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
						topAwardIcon: h,
						userName: v,
						user: x,
						userFlair: g,
						userIsBanned: C,
						userProfileStyles: O,
						acceptChats: E
					} = e;
					if (!x) return s.a.createElement(ye, {
						style: b
					});
					const j = !!r && Object(F.e)(r) === v,
						y = !!(null == r ? void 0 : r.snoovatarFullBodyAsset),
						N = x.accountIcon || `${I.a.assetPath}/img/snoo_user_placeholder.png`,
						k = l && l.flair,
						P = l && l.access,
						U = g && g.templateIds && g.templateIds.length > 0,
						B = g && g.displaySettings && g.displaySettings.isEnabled,
						{
							awardedLastMonth: A
						} = x,
						T = !!x.snoovatarFullBodyAsset,
						M = x.isNSFW && a;
					let R;
					return R = T ? !M && O && O.bannerBackgroundImage || void 0 : M ? `${I.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(ye, {
						className: t,
						id: o,
						style: b
					}, !T && R && s.a.createElement(Ee, {
						style: {
							backgroundImage: `url('${R}')`
						}
					}), s.a.createElement(je, null, T ? s.a.createElement(H.a, {
						isHovercard: !0,
						bannerBackgroundImage: R,
						compact: !0,
						currentUserHasSnoovatar: y,
						isEmployee: x.isEmployee,
						isGold: x.isGold,
						isNSFW: x.isNSFW,
						isOwnProfile: j,
						onClickSnoovatar: c,
						prefersReducedAnimations: !!u,
						snoovatarUrl: x.snoovatarFullBodyAsset,
						title: null,
						userCreated: x.created,
						username: v,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(be, null, s.a.createElement(ae, {
						iconUrl: N,
						isNSFW: x.isNSFW,
						userName: v
					}), s.a.createElement(Ne, {
						origin: d,
						user: x,
						userName: v
					})), s.a.createElement(ke, {
						showAwardKarma: p,
						user: x
					}), A && s.a.createElement(L.a, {
						recentAwardings: A,
						topAwardIcon: h,
						username: v
					}), i && !j && !C && E && s.a.createElement(ie, {
						contextId: n,
						userId: x.id,
						text: _.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), x.hasUserProfile && !C && !j && s.a.createElement(oe, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(S.g)(e ? "unfollow" : "follow", n),
						small: !0
					})), P && n && !j && f && s.a.createElement(Q, {
						contextId: n,
						subredditId: f,
						sendEvent: m,
						username: v
					}), k && n && U && B && f && s.a.createElement(te, {
						contextId: n,
						subredditId: f,
						sendEvent: m,
						username: v
					}), s.a.createElement(w.i, {
						contextId: n,
						subredditId: f,
						user: x
					}), !(P || i) && s.a.createElement(we, null))
				},
				Pe = Object(y.a)(Se),
				Ue = e => {
					const t = e.activeTooltipId === e.tooltipId;
					return s.a.createElement(Pe, se({
						isOpen: t
					}, e))
				};
			Ue.WrappedComponent = Se;
			var Be = Ue;
			const Ae = Object(o.c)({
					activeTooltipId: f.a,
					currentUser: h.j,
					isLoggedIn: h.K,
					hideNSFWPref: h.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(u.l)(e, {
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
					user: h.nb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(v.c)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(b.l)(t) && Object(b.db)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(m.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(m.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					}
				}),
				Te = Object(a.b)(Ae, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)("user_hovercard")),
					onHideTooltip: () => e(Object(c.i)())
				}));
			t.a = Te(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, s.a.createElement(Be, {
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
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/Hovercards/helpers.ts"),
				o = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				d = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const m = e => Object(i.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class p extends s.a.Component {
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
					}), n = `${t}-hover-id`, r = e.author || e.postOrComment.author;
					return s.a.createElement(o.a, {
						authorOrSubredditName: r,
						className: e.hoverDivClassName,
						hoverId: n,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, e.children, s.a.createElement(c.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: n,
						sendEvent: e.sendEvent,
						subredditId: m(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: r
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
				return I
			})), n.d(t, "b", (function() {
				return g
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				h = n("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				v = n.n(h);
			class x extends s.a.Component {
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
					return s.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const _ = a.a.wrapped(x, "HoverDiv", v.a),
				I = m(_),
				g = f(_)
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
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.tsx"),
				a = n("./src/reddit/components/Hovercards/helpers.m.less"),
				o = n.n(a);
			const i = r.a.wrapped(s.a, "UserActionItem", o.a),
				c = e => {
					const {
						author: t,
						itemId: n,
						subredditName: r,
						tooltipIdPrefix: s,
						tooltipType: a
					} = e;
					let o = s;
					return n && (o = `${o}--${n}`), a && (o = `${o}--${a}`), t && (o = `${o}--${t}`), r && (o = `${o}--${r}`), o
				}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return z
			})), n.d(t, "b", (function() {
				return G
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/BadgeCounter/index.tsx"),
				d = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				l = n("./node_modules/lodash/noop.js"),
				u = n.n(l),
				m = n("./node_modules/lodash/omit.js"),
				p = n.n(m),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/components/InboxTooltip/index.m.less"),
				v = n.n(h);
			const x = e => a.a.createElement("div", {
				className: v.a.dnPromptBanner
			}, a.a.createElement("div", {
				className: v.a.bannerTitleContainer
			}, a.a.createElement("h4", {
				className: v.a.bannerTitle
			}, r.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
				hk: "10oNqB"
			})), a.a.createElement(b.q, {
				onClick: e.onClose,
				Icon: Object(f.b)("close_fill"),
				className: Object(o.a)(v.a.closeIcon, v.a.closeButton),
				size: b.c.XXS,
				priority: b.b.Plain
			})), a.a.createElement("div", {
				className: v.a.buttonsContainer
			}, a.a.createElement(b.q, {
				text: r.fbt._("Turn On", null, {
					hk: "3hywR9"
				}),
				priority: b.b.Tertiary,
				className: Object(o.a)(v.a.button, v.a.turnOnButton),
				size: b.c.XS
			}), a.a.createElement(b.q, {
				text: r.fbt._("No Thanks", null, {
					hk: "4kbwb8"
				}),
				onClick: e.onClose,
				priority: b.b.Plain,
				size: b.c.XS,
				className: Object(o.a)(v.a.button, v.a.closeButton)
			})));
			var _ = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				I = n("./src/reddit/components/ResizeSensor/index.tsx");
			const g = 3;
			class C extends a.a.Component {
				constructor() {
					super(...arguments), this.ref = a.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= g) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						disableNotificationUpdates: t,
						hideNotification: n,
						hideSubredditNotifications: r,
						blockAwarder: s,
						index: o,
						isInboxPostEmbedEnabled: i,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l,
						onItemClick: u
					} = this.props, m = o + 1 <= g;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						ref: this.ref,
						className: v.a.notificationResizeWrapper
					}, a.a.createElement(_.a, {
						activeOverflowMenuId: e,
						disableNotificationUpdates: t,
						hideNotification: n,
						hideSubredditNotifications: r,
						isInboxPostEmbedEnabled: i,
						isInTooltip: !0,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l,
						onItemClick: u,
						blockAwarder: s
					}), !!m && a.a.createElement(I.a, {
						onResize: this.handleResize
					})))
				}
			}
			var O = n("./src/reddit/icons/svgs/Close/index.tsx");
			const E = i.a.wrapped(O.a, "CloseIcon", v.a),
				j = ({
					onClose: e
				}) => {
					return a.a.createElement("div", {
						className: v.a.welcomeBanner
					}, a.a.createElement("div", {
						className: v.a.bannerTitleContainer
					}, a.a.createElement("h4", {
						className: v.a.bannerTitle
					}, r.fbt._("Welcome to your new inbox!", null, {
						hk: "37URYp"
					})), a.a.createElement("button", {
						className: v.a.closeButton,
						onClick: t => {
							t.stopPropagation(), t.preventDefault(), e()
						}
					}, a.a.createElement(E, null))), a.a.createElement("p", {
						className: v.a.bannerDescription
					}, r.fbt._("Now it’s easier to stay up-to-date on your activity and know what’s happening in your communities.", null, {
						hk: "3kKTJ3"
					})))
				};
			var w = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				y = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = {},
				S = "",
				P = 0,
				U = "200px",
				B = "250px",
				A = 100,
				T = .5,
				F = 5;
			class L extends a.a.Component {
				constructor() {
					super(...arguments), this.container = a.a.createRef(), this.state = {
						notificationHeights: k,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > P && this.props.setActiveOverflowMenuId(S)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state;
						let t = 0;
						for (const n in e) t += e[n];
						return this.props.isInboxExposureBannerEnabled && (t += A), 0 === t ? this.props.isInboxExposureBannerEnabled ? B : U : t
					}, this.setNotificationHeight = (e, t) => {
						this.setState(n => ({
							notificationHeights: {
								...n.notificationHeights,
								[t]: e
							}
						}))
					}, this.updateCurrentCursorIndex = () => {
						const {
							notifications: e
						} = this.props, {
							currentNotificationCursorIndex: t
						} = this.state, n = t + F, r = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: r
						})
					}, this.renderNotifications = () => {
						const e = p()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: r,
								notifications: s
							} = this.props,
							o = s.length > n + F;
						return (r && s.length > 0 && o ? s.slice(0, n + 1) : s).map((n, r) => a.a.createElement(C, N({}, e, {
							index: r,
							key: r,
							notification: n,
							notificationHeight: t[r],
							setNotificationHeight: this.setNotificationHeight
						})))
					}, this.loadNotifications = e => {
						const {
							cursor: t,
							fetchNotifications: n,
							isInboxInfiniteScrollEnabled: r,
							notifications: s
						} = this.props;
						if (e.isIntersecting) {
							const e = s.length > this.state.currentNotificationCursorIndex + F;
							this.props.notifications.length > 0 && r && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: F
							})
						}
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
						hasNextPage: e,
						isDNInboxPromptBannerEnabled: t,
						isInboxExposureBannerEnabled: n,
						setInboxExposureBannerSeen: r,
						isInboxInfiniteScrollEnabled: s,
						isPending: o,
						notifications: i
					} = this.props, c = !(!i || !i.length), l = this.getContainerHeight(), m = i.length > this.state.currentNotificationCursorIndex + F;
					return a.a.createElement("div", {
						className: v.a.notificationList,
						ref: this.container,
						style: {
							height: l,
							maxHeight: l
						}
					}, !c && o && a.a.createElement(w.a, null), !c && !o && a.a.createElement(a.a.Fragment, null, n && a.a.createElement(j, {
						onClose: r
					}), t && a.a.createElement(x, {
						onClose: u.a
					}), a.a.createElement(y.a, {
						isInboxExposureBannerEnabled: n
					})), c && a.a.createElement(a.a.Fragment, null, n && a.a.createElement(j, {
						onClose: r
					}), t && a.a.createElement(x, {
						onClose: u.a
					}), this.renderNotifications()), s && c && !o && (e || m) && a.a.createElement(d.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: T
					}, a.a.createElement("div", null)))
				}
			}
			var H = n("./src/reddit/controls/InternalLink/index.tsx"),
				M = n("./src/reddit/helpers/trackers/inbox.ts"),
				R = n("./src/reddit/hooks/useInboxExposureSeen.ts"),
				D = n("./src/reddit/hooks/useTracking.ts");

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const z = [],
				W = i.a.div("StyledDropdown", v.a),
				q = ({
					onMessagesClick: e,
					onBarClick: t,
					markAllAsRead: n,
					messagesBadgeCount: i,
					sendInboxClickSettings: d
				}) => {
					const l = !!i,
						u = Object(s.useCallback)(() => {
							e(), t()
						}, [e, t]),
						m = Object(s.useCallback)(() => {
							d(), t()
						}, [d, t]);
					return a.a.createElement("nav", {
						className: v.a.topNav
					}, a.a.createElement("span", {
						className: v.a.topNavTitle
					}, r.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), a.a.createElement("span", {
						className: v.a.topNavLinks
					}, a.a.createElement("span", {
						className: v.a.messagesLinkContainer
					}, a.a.createElement(H.a, {
						className: Object(o.a)(v.a.messagesLink, {
							[v.a.mActive]: l
						}),
						onClick: u,
						to: l ? "/message/unread" : "/message/messages"
					}, r.fbt._("Messages", null, {
						hk: "hulKY"
					}), a.a.createElement(c.a, {
						className: v.a.badgeCount,
						isActive: l,
						unreadCount: i
					}))), a.a.createElement("button", {
						className: v.a.navLink,
						onClick: n
					}, a.a.createElement(f.a, {
						name: "mark_read",
						className: v.a.icon
					})), a.a.createElement(H.a, {
						className: v.a.navLink,
						onClick: m,
						to: "/settings/notifications"
					}, a.a.createElement(f.a, {
						name: "settings",
						className: v.a.icon
					}))))
				},
				Z = e => a.a.createElement("div", {
					className: v.a.bottomBar
				}, a.a.createElement(H.a, {
					className: v.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, r.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				G = e => {
					const t = Object(D.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: r,
							isPending: s,
							messagesBadgeCount: o,
							notifications: i,
							hideTooltip: c,
							isInboxExposureBannerEnabled: d,
							isDNInboxPromptBannerFirstTimeEnabled: l,
							isDNInboxPromptBannerPersistEnabled: u,
							userId: m
						} = e,
						[p, b] = Object(R.a)(m),
						f = !(!i || !i.length);
					return a.a.createElement(W, null, a.a.createElement("div", {
						className: v.a.tooltipContainer
					}, a.a.createElement(q, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(M.e)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: o,
						onMessagesClick: () => {
							t(Object(M.m)({
								badgeCount: r,
								tab: M.d.Messages
							})), t(Object(M.f)()), n()
						},
						sendInboxClickSettings: () => t(Object(M.k)(M.a.MiniInbox)),
						onBarClick: c
					}), a.a.createElement(L, K({}, e, {
						isPending: s,
						onItemClick: c,
						setInboxExposureBannerSeen: b,
						isInboxExposureBannerEnabled: d && !p,
						isDNInboxPromptBannerEnabled: l || u
					})), (f || s) && a.a.createElement(Z, {
						sendInboxClickSeeAll: () => t(Object(M.j)()),
						onBarClick: c
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
				icon: "_3pDOQfbIbQuT4PBwPGp85E",
				BellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				bellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				banner: "_2JORWXFw8yoU9OgPbYEHB9",
				bannerTitleContainer: "_2yVpJj9uDdzi680LtyMvne",
				bannerTitle: "_2gWQMeb0LgYfTkmk36hjP0",
				welcomeBanner: "_1Pfbfd7i5z6WslDcVpY3bJ",
				welcomeBannerTitleContainer: "_3vD29VbDsE0T3fgb9zOch1",
				welcomeBannerTitle: "_1_u7T0GoBiKCZ1aRRE96Na",
				CloseIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				closeIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				bannerDescription: "_3NYgm_gmO2sv_MA775B2RV",
				welcomeTooltipContainer: "_1OZgaZvEs6sdhMUCqaUCW_",
				closeButton: "_3fWRL_DhsIqXjpW4eXDwmR",
				tooltipTitle: "_3EmopbfaUR0bemuuUcEcko",
				tooltipDescription: "_3MtkPXIDbG9Hf6YeNOxAxv",
				dnPromptBanner: "_1rUnXnjFb2eSO8XAhH3ZtZ",
				dnPromptBannerTitleContainer: "_3MYE2TpbwAZPqoOOAjkhos",
				dnPromptBannerTitle: "_1oJJYWNag_xidmHETVm3Ok",
				buttonsContainer: "_3Wwrg6EeSMfskSuP12mlzz",
				button: "_3S02PqgZTMdN5zOmHbonYC",
				turnOnButton: "_1QC-B1O49UiZDlxGwYqhcR"
			}
		},
		"./src/reddit/components/NotificationUnit/Loader.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
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
			t.a = s
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/NotificationUnit/index.m.less"),
				o = n.n(a);
			const i = () => s.a.createElement("li", {
					className: o.a.placeholderWrapper
				}, s.a.createElement("span", {
					className: o.a.placeholderAvatar
				}), s.a.createElement("span", {
					className: o.a.placeholderContent
				})),
				c = () => s.a.createElement("ol", null, s.a.createElement(i, null), s.a.createElement(i, null), s.a.createElement(i, null))
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
				notificationButton: "_3doOacPPJ-LU-aBSoLl9TV",
				isUnread: "_2svu3lh5YfWQmYfACdB2J5",
				replyIcon: "_3LbCSOW9yuZK_CHzTuR9M5",
				postIcon: "_102yZEdZMcXLlu2Ri0KD9O",
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(a.a)(e, t);
				class r extends s.a.PureComponent {
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
						return s.a.createElement(n, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(r)
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/config.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class l extends s.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: r,
						totalCount: i
					} = t, l = r.description ? r.description : r.name;
					return s.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${n}/gilded`
					}, s.a.createElement("div", {
						className: c.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), i > 1 && s.a.createElement("span", {
						className: c.a.count
					}, `+${Object(o.b)(i-1)}`)), s.a.createElement("div", {
						className: c.a.textColumn
					}, d._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [d._param("award-name", r.name), d._plural(i)], {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
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
						hideNSFWPref: s,
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
						altText: r.fbt._("{userName} banner image", [r.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : o && s ? null : m
				}
			}
			t.a = Object(d.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = Object(s.c)({
					currentUser: o.j,
					hideNSFWPref: o.C
				}),
				c = Object(r.b)(i, e => ({
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: n,
				isOwnProfile: r,
				onClick: d
			}) {
				return s.a.createElement(o.q, {
					onClick: d,
					isFullWidth: !0,
					className: Object(a.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && r,
						[l.a.compactButtonLayout]: e
					}, n)
				}, t ? s.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : r ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? s.a.createElement("div", {
					className: l.a.chevronIcon
				}) : s.a.createElement(i.a, {
					name: "caret_right",
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				editMode: r,
				isDeletingBanner: c,
				onDeleteBanner: l
			}) {
				return s.a.createElement("div", {
					className: d.a.bannerWrapper
				}, s.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: n
				}), r && e && (c ? s.a.createElement(a.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(o.a, {
					className: u.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/timeAgo/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: n,
				userCreated: r,
				username: d,
				...l
			}) {
				const u = t ? a.fbt._("{username} · {time since account creation}", [a.fbt._param("username", `u/${d}`), a.fbt._param("time since account creation", Object(o.d)(r, {
					noPostfix: !0,
					shortenedUnit: !0
				}))], {
					hk: "2k741A"
				}) : `u/${d}`;
				return n ? s.a.createElement(i.a, c({}, l, {
					className: e,
					to: n
				}), u) : s.a.createElement("span", c({}, l, {
					className: e
				}), u)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				c = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				d = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = n.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: n,
				isGold: a,
				isNSFW: l
			}) => o.a.createElement("h1", {
				className: u.a.snoovatarUserTitle
			}, e || t, n && o.a.createElement(i.a, {
				className: u.a.snoovatarAdminIcon,
				title: s.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), a && o.a.createElement("a", {
				title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${r.a.redditUrl}/premium`
			}, o.a.createElement(d.a, {
				className: u.a.snoovatarPremiumIcon
			})), l && o.a.createElement(c.a, {
				className: u.a.snoovatarNsfwIcon,
				title: s.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/selectors/experiments/econ/index.ts"),
				l = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				m = n("./node_modules/react-router/esm/react-router.js"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				h = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				v = n("./src/reddit/routes/avatar/index.ts"),
				x = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				_ = n.n(x);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var g = Object(m.i)(({
					isHovercard: e,
					username: t
				}) => {
					const n = Object(p.b)(),
						a = Object(r.useCallback)(() => n(Object(f.b)(e ? "user_hovercard" : "profile_overview", t)), [e, n, t]);
					return s.a.createElement(u.a, {
						to: `${v.a}/${t}`
					}, s.a.createElement(b.q, {
						onClick: a,
						className: Object(o.a)(_.a.snoovatarButton, _.a.snoovatarExtraPadding, _.a.compactButtonLayout)
					}, s.a.createElement(h.a, {
						className: _.a.shirtIcon
					}), I._("Try this Look", null, {
						hk: "dOuPb"
					}), s.a.createElement("div", {
						className: _.a.chevronIcon
					})))
				}),
				C = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				O = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				E = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				j = n.n(E);
			const w = 25;

			function y(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function N(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const k = y("particleDelay", j.a),
				S = y("particleX", j.a),
				P = y("particleFloat", j.a),
				U = () => {
					const e = N(S),
						t = N(P),
						n = N(k);
					return Object(o.a)(j.a.particle, e, t, n)
				};
			class B extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < w; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: j.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${U()}`
					})
				}
			}
			var A = B,
				T = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				F = n.n(T),
				L = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: n,
				editMode: r,
				isDeletingBanner: u,
				isEmployee: m,
				isGold: p,
				isNSFW: b,
				isOwnProfile: f,
				onClickSnoovatar: h,
				onDeleteBanner: v,
				prefersReducedAnimations: x,
				snoovatarUrl: _,
				title: I,
				userCreated: E,
				username: w,
				url: y,
				isHovercard: N
			}) => {
				const k = Object(a.e)(e => !f && !!_ && Object(d.e)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(C.a, {
					bannerBackgroundImage: e,
					editMode: !!r,
					isNSFW: b,
					username: w,
					isDeletingBanner: !!u,
					onDeleteBanner: v
				}), s.a.createElement("div", {
					className: j.a.snoovatarContainer
				}, p && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: j.a.topGlow
				}), s.a.createElement("div", {
					className: j.a.bottomGlow
				}), !x && s.a.createElement(A, null)), s.a.createElement("img", {
					className: Object(o.a)(j.a.snoovatar, {
						[j.a.premiumGlow]: p
					}),
					src: _ || void 0
				})), !r && f && s.a.createElement(i.a, {
					to: "/settings/profile",
					className: j.a.snoovatarSettingsLink
				}, s.a.createElement(c.a, {
					name: "settings",
					className: F.a.settingsIcon
				})), s.a.createElement(L.a, {
					isEmployee: m,
					isGold: p,
					isNSFW: b,
					title: I,
					username: w
				}), s.a.createElement(O.a, {
					className: j.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: w,
					userCreated: E,
					url: y
				}), (f || !n && !!_) && s.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: n,
					isOwnProfile: f,
					onClick: h
				}), k && s.a.createElement(g, {
					username: w,
					isHovercard: !!N
				}))
			}
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
			var r = n("./node_modules/raf/index.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a);
			class i extends o.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && s.a.cancel(this.frame), this.frame = s()(this.props.onResize)
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				b = ({
					buttonType: e,
					border: t,
					small: n,
					...r
				}) => a.a.createElement(o.q, u({}, r, {
					priority: t ? o.b.Secondary : o.b.Plain,
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: n ? o.c.S : o.c.M,
					text: p(e)
				}));
			class f extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : (this.props.onSubscribe(), this.props.enableNotificationTooltipAfterSubscription && this.props.enableNotificationTooltipAfterSubscription()), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
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
						small: r = !1,
						isFullWidth: s = !1
					} = this.props, o = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: r,
						isFullWidth: s
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				a = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = ({
					type: e,
					key: t
				}) => a[s({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(r.c)(a.a))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/subscription/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: o.eb
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			class a extends s.a.Component {
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
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, a = n || r;
					return s.a.createElement("div", {
						className: e.className
					}, n && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!a || e.multiple) && s.a.createElement("input", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
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
				return r
			})), n.d(t, "c", (function() {
				return s
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
				return h
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "e", (function() {
				return E
			}));
			var r, s, a, o, i, c = n("./src/reddit/constants/tracking.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(r || (r = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder"
			}(s || (s = {})),
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
					type: r
				}) => s => ({
					...d.defaults(s),
					action: c.c.VIEW,
					noun: "inbox_notification",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: r
					}
				}),
				m = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: r,
					awardId: s
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
							type: r
						},
						goldPurchase: {
							awardId: s
						}
					})
				},
				p = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: r,
					awardId: s,
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
						type: r
					},
					goldPurchase: {
						awardId: s
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
						tab: r.Activity
					}
				}),
				h = ({
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
				v = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: r,
					awardId: s
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
						type: r
					},
					goldPurchase: {
						awardId: s
					}
				}),
				x = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: r
				}) => s => ({
					...d.defaults(s),
					action: c.c.VIEW,
					noun: "inbox_notification_overflow",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: r
					}
				}),
				_ = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: r,
					type: s
				}) => a => ({
					...d.defaults(a),
					action: c.c.CLICK,
					noun: "overflow_option",
					source: o.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: r
					},
					notification: {
						type: s
					},
					actionInfo: {
						...d.actionInfo(a),
						type: e
					}
				}),
				I = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: r,
					type: s
				}) => a => ({
					...d.defaults(a),
					action: c.c.UNDO,
					noun: "overflow_option",
					source: o.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: r
					},
					notification: {
						type: s
					},
					actionInfo: {
						...d.actionInfo(a),
						type: e
					}
				}),
				g = e => t => ({
					...d.defaults(t),
					action: c.c.CLICK,
					noun: "notification_app_settings",
					source: o.Inbox,
					actionInfo: {
						...d.actionInfo(t),
						pageType: e
					}
				}),
				C = () => e => ({
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
				E = ({
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
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			var r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/selectors/avatarMarketing.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = {
					goldPurchase: {
						offerContext: r.a.AvatarNewGear
					}
				},
				c = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...a.defaults(t)
					};
					return Object(s.a)(t) && Object.assign(n, i), n
				},
				d = (e, t) => n => {
					const {
						id: r
					} = Object(o.nb)(n, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...a.defaults(n),
						snoovatar: {
							userGenerated: r
						}
					}
				},
				l = e => ({
					...a.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: a.snoovatarActiveForBuilderEvent(e)
				}),
				u = e => ({
					...a.defaults(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: a.snoovatarActiveForBuilderEvent(e)
				}),
				m = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...a.defaults(e),
					...i
				})
		},
		"./src/reddit/hooks/useInboxExposureSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/reddit/helpers/localStorage/index.ts");

			function a(e) {
				const [t, n] = Object(r.useState)(Object(s.t)(e));
				return [t, Object(r.useCallback)(() => {
					n(!0), Object(s.sb)(e)
				}, [])]
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(a.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), s.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#EC0623"
			}), s.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = function({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				a = n.n(s);
			t.a = r.a.div("inlineRow", a.a)
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx");
			var c = e => a.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 21"
				}, a.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
				})),
				d = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				l = n.n(d);
			const u = i.a.wrapped(c, "BellOutline", l.a),
				m = ({
					isInboxExposureBannerEnabled: e
				}) => a.a.createElement("div", {
					className: Object(o.a)(l.a.emptyState, {
						[l.a.emptyStateWithBanner]: Boolean(e)
					})
				}, a.a.createElement(u, null), a.a.createElement("h1", {
					className: l.a.emptyTitle
				}, r.fbt._("Be the first to know", null, {
					hk: "2mNJO0"
				})), a.a.createElement("p", {
					className: l.a.emptyDescription
				}, r.fbt._("This is where you get updates on your activity and recommendations", null, {
					hk: "27V2PG"
				})))
		},
		"./src/reddit/pages/NotificationsInbox/Content/index.m.less": function(e, t, n) {
			e.exports = {
				notificationsContainer: "_1B9l9ftY8mkrILj7ISvc9_",
				NotificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				notificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				emptyState: "_1q1-Ijtc4SLFaVvDcMzus8",
				emptyStateWithBanner: "_3cq_2lLFVJmAq-zXfEMOMD",
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
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/constants/modals.ts");
			const i = {
				active: !1,
				assetUrls: null
			};
			var c = (e = null, t) => {
				var n;
				switch (t.type) {
					case s.o:
						const {
							avatarMarketingEvent: r
						} = t.payload;
						return r ? function(e) {
							const {
								startsAt: t,
								endsAt: n,
								webAssetUrls: r
							} = e, s = t && new Date(t) <= new Date, a = !!n && new Date(n) < new Date, o = r || null;
							return {
								active: !!s && !a && !!o,
								assetUrls: o
							}
						}(r) : i;
					case a.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === o.a.SNOOVATAR_MODAL ? i : e;
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				marketing: c
			})
		},
		"./src/reddit/routes/avatar/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/pages/avatar.ts");
			const o = "/avatar",
				i = [o, `${o}/:username`, `${o}/:username/:avatarId`],
				c = {
					action: a.a,
					chunk: s.q.AVATAR,
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Avatar",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Avatar").then(n.bind(null, "./src/reddit/pages/Avatar/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Avatar/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: s.Jb.AVATAR
					},
					path: i
				};
			t.b = c
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/avatar/index.ts"),
				o = n("./src/reddit/selectors/experiments/econ/index.ts");
			Object(s.a)({
				features: {
					avatar: a.a
				}
			});
			const i = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				c = Object(r.a)(o.c, e => {
					var t, n;
					const r = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing;
					return (null == r ? void 0 : r.active) ? r.assetUrls && r.assetUrls[0] : null
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
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				a = n("./src/reddit/models/SubredditModeration/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = (e, {
					subredditId: t
				}) => e.features.banned.models[t],
				c = (e, {
					subredditId: t,
					username: n
				}) => {
					const r = Object(o.nb)(e, {
						userName: n
					});
					if (!r) return;
					const s = i(e, {
						subredditId: t
					});
					return s ? s[r.id] : void 0
				},
				d = Object(r.a)((e, {
					subredditId: t
				}) => {
					const n = e.features.banned.userOrder[t];
					return n ? n.map(n => e.features.banned.models[t][n]) : s.a
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
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.2e67fea1a6f492f347d3.js.map