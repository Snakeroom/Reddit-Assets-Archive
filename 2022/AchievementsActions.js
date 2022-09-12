// https://www.redditstatic.com/desktop2x/AchievementsActions.6ee161151a86b43c119b.js
// Retrieved at 9/12/2022, 2:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AchievementsActions"], {
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return S
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return F
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return v
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return U
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return A
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return x
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return P
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return _
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return g
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return k
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return C
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return E
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return L
			})), r.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return D
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
			var u = r("./src/reddit/actions/gold/achievementFlairs.ts"),
				l = r("./src/reddit/actions/gold/powerups.ts"),
				b = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/selectors/commentSelector.ts"),
				m = r("./src/reddit/selectors/experiments/econ/index.ts"),
				w = r("./src/reddit/selectors/gold/powerups/index.ts"),
				j = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/actions/economics/powerups/constants.ts"),
				h = r("./src/lib/initializeClient/installReducer.ts"),
				y = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(h.a)({
				features: {
					powerups: y.a
				}
			});
			const S = Object(s.a)(O.d),
				F = Object(s.a)(O.i),
				v = Object(s.a)(O.f),
				U = Object(s.a)(O.g),
				A = Object(s.a)(O.e),
				x = Object(s.a)(O.h),
				P = (e, t) => async (r, i, s) => {
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
						await r(S(i)), s && await r(F(s))
					} catch (u) {
						d.c.captureException(u)
					}
				}, _ = (e, t) => async (r, i) => {
					if (!e) return;
					const s = i(),
						d = Object(I.k)(s);
					if (!d || !Object(w.m)(s, {
							subredditId: e
						})) return;
					const n = !!Object(j.f)(s, {
						subredditId: e,
						userId: d.id
					});
					!t && n || await r(P(e, [d.id]))
				}, g = e => async (t, r) => !!e && (Object(m.f)(r()) ? (await t(Object(u.c)(e)), !!Object(j.d)(r(), {
					subredditId: e
				})) : (await t(Object(l.j)(e, {
					fullData: !0
				})), Object(w.f)(r(), {
					subredditId: e
				}))), k = e => async (t, r) => {
					var i;
					const s = r(),
						d = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						n = Object(f.d)(s, {
							commentIds: d
						}),
						o = null === (i = n.find(e => e && e.subredditId)) || void 0 === i ? void 0 : i.subredditId;
					if (!(await t(g(o)))) return;
					const c = new Set(n.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(P(o, Array.from(c)))
				}, C = (e, t) => async (r, i) => {
					if (!t) return;
					if (!(await r(g(e)))) return;
					const s = new Set;
					Object.values(t).forEach(e => {
						s.add(e.authorId)
					}), await r(P(e, Array.from(s)))
				}, E = (e, t) => async (r, i) => {
					const s = i(),
						d = Object(I.k)(s);
					if (!d) return;
					const n = d.id,
						o = Object(j.i)(s, {
							subredditId: e,
							userId: n
						});
					r(T({
						subredditId: e,
						userId: n,
						achievementFlairType: t,
						supporterFlairType: o
					}))
				}, L = (e, t) => async (r, i) => {
					const s = i(),
						d = Object(I.k)(s);
					if (!d) return;
					const n = d.id,
						o = Object(j.h)(s, {
							subredditId: e,
							userId: n
						});
					r(T({
						subredditId: e,
						userId: n,
						achievementFlairType: o,
						supporterFlairType: t
					}))
				}, T = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const o = r(),
						c = Object(I.k)(o);
					if (!c) return;
					const u = c.id;
					t(v(e));
					const {
						subredditId: l,
						achievementFlairType: f,
						supporterFlairType: m
					} = e, w = [f, m].filter(Boolean), O = Object(j.e)(o, {
						subredditId: l,
						userId: u
					});
					try {
						await a(n(), l, w, O), t(U(e))
					} catch (h) {
						t(A(e)), d.c.captureException(h), t(Object(b.f)({
							duration: b.a,
							kind: p.b.Error,
							text: i.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, D = (e, t) => async (r, s, n) => {
					let {
						gqlContext: o
					} = n;
					const c = s(),
						u = Object(I.k)(c);
					if (!u) return;
					const l = u.id,
						f = {
							subredditId: e,
							userId: l
						},
						m = [Object(j.h)(c, f), Object(j.i)(c, f)].filter(Boolean);
					r(x({
						...f,
						isHidden: t
					}));
					try {
						await a(o(), e, m, t)
					} catch (w) {
						r(x({
							...f,
							isHidden: !t
						})), d.c.captureException(w), r(Object(b.f)({
							duration: b.a,
							kind: p.b.Error,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AchievementsActions.6ee161151a86b43c119b.js.map