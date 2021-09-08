// https://www.redditstatic.com/desktop2x/AchievementsActions.7931eb39b05c1ab789fd.js
// Retrieved at 9/8/2021, 3:50:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AchievementsActions"], {
		"./src/reddit/actions/economics/powerups/achievements/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserAchievementsLoaded", (function() {
				return _
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return h
			})), r.d(t, "onSubredditUserAchievementPreferenceUpdateRequested", (function() {
				return y
			})), r.d(t, "onSubredditUserAchievementPreferenceUpdateSuccess", (function() {
				return O
			})), r.d(t, "onSubredditUserAchievementPreferenceUpdateFailed", (function() {
				return U
			})), r.d(t, "getSubredditUserAchievementsAndSupporterInfo", (function() {
				return w
			})), r.d(t, "getSubredditCurrentUserAchievementsAndSupporterInfo", (function() {
				return A
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return j
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return P
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return T
			})), r.d(t, "setSubredditUserAchievement", (function() {
				return R
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var d = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				c = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var u = r("./src/reddit/selectors/experiments/econ/index.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				l = r("./src/reddit/reducers/features/powerups/index.ts"),
				p = r("./src/reddit/actions/gold/powerups.ts"),
				f = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/selectors/commentSelector.ts"),
				v = r("./src/reddit/selectors/gold/powerups/index.ts"),
				E = r("./src/reddit/selectors/gold/powerups/achievements.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				S = r("./src/reddit/actions/economics/powerups/constants.ts");
			Object(a.a)({
				features: {
					powerups: l.a
				}
			});
			const _ = Object(n.a)(S.d),
				h = Object(n.a)(S.h),
				y = Object(n.a)(S.f),
				O = Object(n.a)(S.g),
				U = Object(n.a)(S.e),
				w = (e, t) => async (r, d, {
					gqlContext: n
				}) => {
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
						const t = d(),
							s = Object(u.i)(t),
							a = await (async (e, t, r, d) => {
								const n = await Object(i.a)(e, {
									...o,
									variables: {
										subredditId: t,
										redditorIds: r,
										includeSupporterInfo: d
									}
								});
								if (!n.ok) throw new Error("Unable to fetch user achievements");
								return n.body.data
							})(n(), e, c, s),
							{
								subredditInfoById: l,
								redditorsInfoByIds: p
							} = a;
						await r(_(l)), s && p && await r(h(p))
					} catch (a) {
						s.c.captureException(a)
					}
				}, A = (e, t) => async (r, d) => {
					if (!e) return;
					const n = d(),
						s = Object(I.k)(n);
					if (!s || !Object(v.g)(n, {
							subredditId: e
						})) return;
					const i = !!Object(E.c)(n, {
						subredditId: e,
						userId: s.id
					});
					!t && i || await r(w(e, [s.id]))
				}, j = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(p.l)(e, {
						fullData: !0
					}));
					const d = r();
					return Object(v.g)(d, {
						subredditId: e
					})
				}, P = e => async (t, r) => {
					var d;
					const n = r(),
						s = e.map(({
							id: e
						}) => e),
						i = Object(m.b)(n, {
							commentIds: s
						}),
						o = null === (d = i.find(e => e && e.subredditId)) || void 0 === d ? void 0 : d.subredditId;
					if (!(await t(j(o)))) return;
					const c = new Set(i.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await t(w(o, Array.from(c)))
				}, T = (e, t) => async (r, d) => {
					if (!t) return;
					if (!(await r(j(e)))) return;
					const n = new Set;
					Object.values(t).forEach(e => {
						n.add(e.authorId)
					}), await r(w(e, Array.from(n)))
				}, R = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					const u = n(),
						a = Object(I.k)(u);
					if (!a) return;
					const l = {
						subredditId: e,
						userId: a.id,
						achievementType: t
					};
					r(y(l));
					try {
						await (async (e, t, r) => {
							const d = await Object(i.a)(e, {
								...c,
								variables: {
									subredditId: t,
									achievementType: r
								}
							});
							if (!d.ok || !d.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update the preferred achievement flair")
						})(o(), l.subredditId, l.achievementType), r(O(l))
					} catch (p) {
						r(U(l)), s.c.captureException(p), r(Object(f.f)({
							duration: f.a,
							kind: b.b.Error,
							text: d.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "e", (function() {
				return a
			}));
			const d = 120,
				n = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				s = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				i = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENTS_LOADED",
				o = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				c = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_REQUESTED",
				u = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATED",
				a = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_FAILED"
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, r) {
			"use strict";
			var d = r("./node_modules/redux/es/redux.js"),
				n = r("./src/reddit/actions/gold/constants.ts");
			const s = {};
			var i = r("./node_modules/icepick/icepick.js"),
				o = r("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				u = {};
			t.a = Object(d.c)({
				subredditAchievements: (e = s, t) => {
					switch (t.type) {
						case n.pb:
							const {
								subredditId: r, subredditAchievementFlairs: d
							} = t.payload, s = d.reduce((e, t) => ({
								...e,
								[t.type]: t
							}), e[r] || {});
							return {
								...e, [r]: s
							};
						default:
							return e
					}
				},
				subredditUserAchievements: (e = c, t) => {
					var r, d, n;
					switch (t.type) {
						case o.d: {
							const {
								id: s,
								userAchievementFlairsByRedditorIds: i
							} = t.payload;
							let o = e[s] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: t
								} of i) {
								const s = t.map(({
										type: e
									}) => e),
									i = (null === (r = t.find(({
										isPreferred: e
									}) => e)) || void 0 === r ? void 0 : r.type) || (null === (d = t[0]) || void 0 === d ? void 0 : d.type),
									c = null === (n = t.find(({
										type: e
									}) => e.startsWith("POWERUPS_SUPPORTER"))) || void 0 === n ? void 0 : n.type;
								o = {
									...o,
									[e]: {
										achievementTypes: s,
										preferredType: i,
										supporterType: c
									}
								}
							}
							return {
								...e,
								[s]: o
							}
						}
						case o.f: {
							const {
								subredditId: r,
								userId: d,
								achievementType: n
							} = t.payload;
							return Object(i.setIn)(e, [r, d, "pendingPreferredType"], n)
						}
						case o.g: {
							const {
								subredditId: r,
								userId: d,
								achievementType: n
							} = t.payload;
							return Object(i.updateIn)(e, [r, d], e => ({
								...e,
								preferredType: n,
								pendingPreferredType: void 0
							}))
						}
						case o.e: {
							const {
								subredditId: r,
								userId: d
							} = t.payload;
							return Object(i.setIn)(e, [r, d, "pendingPreferredType"], void 0)
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = u, t) => {
					switch (t.type) {
						case o.h: {
							let r = {};
							return t.payload.forEach(e => {
								const t = e.id,
									d = e.powerups;
								if (!t || !d) return;
								const n = d.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								r = {
									...r,
									[t]: n.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/gold/powerups/achievements.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "a", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var d = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/selectors/commentSelector.ts"),
				s = r("./src/reddit/selectors/experiments/econ/index.ts"),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(i.a)({
				features: {
					powerups: o.a
				}
			});
			const c = (e, {
					subredditId: t
				}) => {
					var r;
					return t ? null === (r = e.features.powerups.subredditAchievements) || void 0 === r ? void 0 : r[t] : null
				},
				u = (e, {
					subredditId: t,
					userId: r
				}) => {
					var d, n;
					return t && r ? null === (n = null === (d = e.features.powerups.subredditUserAchievements) || void 0 === d ? void 0 : d[t]) || void 0 === n ? void 0 : n[r] : null
				},
				a = Object(d.a)(u, e => (null == e ? void 0 : e.pendingPreferredType) || (null == e ? void 0 : e.preferredType)),
				l = Object(d.a)([c, a], (e, t) => e && t ? e[t] : null),
				p = Object(d.a)(u, e => null == e ? void 0 : e.supporterType),
				f = Object(d.a)([c, p], (e, t) => e && t ? e[t] : null),
				b = Object(d.a)([c, u], (e, t) => {
					if (!e) return [];
					const r = t ? t.achievementTypes : [],
						d = (null == t ? void 0 : t.pendingPreferredType) || (null == t ? void 0 : t.preferredType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !r.includes(e.type),
						isPreferred: e.type === d
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				m = (e, {
					commentId: t
				}) => {
					const r = Object(n.a)(e, {
							commentId: t
						}),
						d = null == r ? void 0 : r.subredditId,
						i = null == r ? void 0 : r.authorId;
					return !(!d || !i) && !(!((e, {
						subredditId: t,
						userId: r
					}) => {
						var d, n, s;
						return t && r ? null === (s = null === (n = null === (d = e.features.powerups) || void 0 === d ? void 0 : d.usersSupportedSubreddits) || void 0 === n ? void 0 : n[r]) || void 0 === s ? void 0 : s[t] : null
					})(e, {
						subredditId: d,
						userId: i
					}) || !Object(s.i)(e))
				}
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"df1c1b9b6408"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"eab9458f507c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AchievementsActions.7931eb39b05c1ab789fd.js.map