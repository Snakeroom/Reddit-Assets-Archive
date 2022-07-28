// https://www.redditstatic.com/desktop2x/AchievementsActions.b8206fe55398426b9d9b.js
// Retrieved at 7/28/2022, 9:50:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AchievementsActions"], {
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return O
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return y
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return S
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return F
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return U
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return v
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return A
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return P
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return x
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return _
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return k
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return g
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return C
			})), r.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return L
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				n = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				c = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const a = async (e, t, r, i) => {
				const s = await Object(n.a)(e, {
					...c,
					variables: {
						subredditId: t,
						flairTypes: r,
						isHidden: i
					}
				});
				if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var u = r("./src/reddit/actions/gold/powerups.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				f = r("./src/reddit/selectors/gold/powerups/index.ts"),
				m = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				w = r("./src/reddit/selectors/user.ts"),
				I = r("./src/reddit/actions/economics/powerups/constants.ts"),
				j = r("./src/lib/initializeClient/installReducer.ts"),
				h = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(j.a)({
				features: {
					powerups: h.a
				}
			});
			const O = Object(s.a)(I.d),
				y = Object(s.a)(I.i),
				S = Object(s.a)(I.f),
				F = Object(s.a)(I.g),
				U = Object(s.a)(I.e),
				v = Object(s.a)(I.h),
				A = (e, t) => async (r, i, s) => {
					let {
						gqlContext: c
					} = s;
					const a = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (a.length) try {
						const t = await (async (e, t, r) => {
								const i = await Object(n.a)(e, {
									...o,
									variables: {
										subredditId: t,
										redditorIds: r,
										includeSupporterInfo: !0
									}
								});
								if (!i.ok) throw new Error("Unable to fetch user achievements");
								return i.body.data
							})(c(), e, a),
							{
								subredditInfoById: i,
								redditorsInfoByIds: s
							} = t;
						await r(O(i)), s && await r(y(s))
					} catch (u) {
						d.c.captureException(u)
					}
				}, P = (e, t) => async (r, i) => {
					if (!e) return;
					const s = i(),
						d = Object(w.k)(s);
					if (!d || !Object(f.m)(s, {
							subredditId: e
						})) return;
					const n = !!Object(m.f)(s, {
						subredditId: e,
						userId: d.id
					});
					!t && n || await r(A(e, [d.id]))
				}, x = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(u.j)(e, {
						fullData: !0
					}));
					const i = r();
					return Object(f.m)(i, {
						subredditId: e
					})
				}, _ = e => async (t, r) => {
					var i;
					const s = r(),
						d = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						n = Object(p.d)(s, {
							commentIds: d
						}),
						o = null === (i = n.find(e => e && e.subredditId)) || void 0 === i ? void 0 : i.subredditId;
					if (!(await t(x(o)))) return;
					const c = new Set(n.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(A(o, Array.from(c)))
				}, k = (e, t) => async (r, i) => {
					if (!t) return;
					if (!(await r(x(e)))) return;
					const s = new Set;
					Object.values(t).forEach(e => {
						s.add(e.authorId)
					}), await r(A(e, Array.from(s)))
				}, g = (e, t) => async (r, i) => {
					const s = i(),
						d = Object(w.k)(s);
					if (!d) return;
					const n = d.id,
						o = Object(m.i)(s, {
							subredditId: e,
							userId: n
						});
					r(E({
						subredditId: e,
						userId: n,
						achievementFlairType: t,
						supporterFlairType: o
					}))
				}, C = (e, t) => async (r, i) => {
					const s = i(),
						d = Object(w.k)(s);
					if (!d) return;
					const n = d.id,
						o = Object(m.h)(s, {
							subredditId: e,
							userId: n
						});
					r(E({
						subredditId: e,
						userId: n,
						achievementFlairType: o,
						supporterFlairType: t
					}))
				}, E = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const o = r(),
						c = Object(w.k)(o);
					if (!c) return;
					const u = c.id;
					t(S(e));
					const {
						subredditId: p,
						achievementFlairType: f,
						supporterFlairType: I
					} = e, j = [f, I].filter(Boolean), h = Object(m.e)(o, {
						subredditId: p,
						userId: u
					});
					try {
						await a(n(), p, j, h), t(F(e))
					} catch (O) {
						t(U(e)), d.c.captureException(O), t(Object(l.f)({
							duration: l.a,
							kind: b.b.Error,
							text: i.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, L = (e, t) => async (r, s, n) => {
					let {
						gqlContext: o
					} = n;
					const c = s(),
						u = Object(w.k)(c);
					if (!u) return;
					const p = u.id,
						f = {
							subredditId: e,
							userId: p
						},
						I = [Object(m.h)(c, f), Object(m.i)(c, f)].filter(Boolean);
					r(v({
						...f,
						isHidden: t
					}));
					try {
						await a(o(), e, I, t)
					} catch (j) {
						r(v({
							...f,
							isHidden: !t
						})), d.c.captureException(j), r(Object(l.f)({
							duration: l.a,
							kind: b.b.Error,
							text: i.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"92790c69eba6"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AchievementsActions.b8206fe55398426b9d9b.js.map