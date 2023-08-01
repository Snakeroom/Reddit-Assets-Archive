// https://www.redditstatic.com/desktop2x/AchievementsActions.7fbd42e292fb446ff419.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AchievementsActions"], {
		"./src/lib/isDefined.ts": function(e, t, r) {
			"use strict";

			function i(e) {
				return !!e
			}
			r.d(t, "a", (function() {
				return i
			}))
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return I
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return v
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return U
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return F
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return S
			})), r.d(t, "getSubredditUserPowerupsFlairs", (function() {
				return A
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairs", (function() {
				return P
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return x
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return _
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return g
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return C
			})), r.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return L
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/isDefined.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				a = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const u = async (e, t, r, i) => {
				const s = await Object(c.a)(e, {
					...a,
					variables: {
						subredditId: t,
						flairTypes: r,
						isHidden: i
					}
				});
				if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var l = r("./src/reddit/actions/gold/achievementFlairs.ts"),
				b = r("./src/reddit/actions/toaster.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				m = r("./src/reddit/selectors/gold/powerups/index.ts"),
				w = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/actions/economics/powerups/constants.ts"),
				O = r("./src/lib/initializeClient/installReducer.ts"),
				y = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(O.a)({
				features: {
					powerups: y.a
				}
			});
			const I = Object(n.a)(j.d),
				v = Object(n.a)(j.f),
				U = Object(n.a)(j.g),
				F = Object(n.a)(j.e),
				S = Object(n.a)(j.h),
				A = (e, t) => async (r, i, s) => {
					let {
						gqlContext: n
					} = s;
					const a = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (a.length) try {
						const {
							subredditInfoById: t
						} = await (async (e, t, r) => {
							const i = await Object(c.a)(e, {
								...o,
								variables: {
									subredditId: t,
									redditorIds: r
								}
							});
							if (!i.ok) throw new Error("Unable to fetch user achievements");
							return i.body.data
						})(n(), e, a);
						await r(I(t))
					} catch (u) {
						d.c.captureException(u)
					}
				}, P = (e, t) => async (r, i) => {
					if (!e) return;
					const s = i(),
						n = Object(h.m)(s);
					if (!n || !Object(m.e)(s, {
							subredditId: e
						})) return;
					const d = !!Object(w.e)(s, {
						subredditId: e,
						userId: n.id
					});
					!t && d || await r(A(e, [n.id]))
				}, x = e => async (t, r) => !!e && (await t(Object(l.c)(e)), !!Object(w.c)(r(), {
					subredditId: e
				})), _ = e => async (t, r) => {
					var i;
					const s = r(),
						n = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						d = Object(p.e)(s, {
							commentIds: n
						}),
						c = null === (i = d.find(e => e && e.subredditId)) || void 0 === i ? void 0 : i.subredditId;
					if (!(await t(x(c)))) return;
					const o = new Set(d.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(A(c, Array.from(o)))
				}, g = (e, t) => async (r, i) => {
					if (!t) return;
					if (!(await r(x(e)))) return;
					const s = new Set;
					Object.values(t).forEach(e => {
						s.add(e.authorId)
					}), await r(A(e, Array.from(s)))
				}, C = (e, t) => async (r, i) => {
					const s = i(),
						n = Object(h.m)(s);
					if (!n) return;
					const d = n.id;
					r(E({
						subredditId: e,
						userId: d,
						achievementFlairType: t
					}))
				}, E = e => async (t, r, n) => {
					let {
						gqlContext: c
					} = n;
					const o = r(),
						a = Object(h.m)(o);
					if (!a) return;
					const l = a.id;
					t(v(e));
					const {
						subredditId: p,
						achievementFlairType: m
					} = e, j = [m].filter(s.a), O = Object(w.d)(o, {
						subredditId: p,
						userId: l
					});
					try {
						await u(c(), p, j, O), t(U(e))
					} catch (y) {
						t(F(e)), d.c.captureException(y), t(Object(b.f)({
							duration: b.a,
							kind: f.b.Error,
							text: i.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, L = (e, t) => async (r, n, c) => {
					let {
						gqlContext: o
					} = c;
					const a = n(),
						l = Object(h.m)(a);
					if (!l) return;
					const p = l.id,
						m = {
							subredditId: e,
							userId: p
						},
						j = [Object(w.g)(a, m)].filter(s.a);
					r(S({
						...m,
						isHidden: t
					}));
					try {
						await u(o(), e, j, t)
					} catch (O) {
						r(S({
							...m,
							isHidden: !t
						})), d.c.captureException(O), r(Object(b.f)({
							duration: b.a,
							kind: f.b.Error,
							text: i.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"7288c5f50973"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AchievementsActions.7fbd42e292fb446ff419.js.map