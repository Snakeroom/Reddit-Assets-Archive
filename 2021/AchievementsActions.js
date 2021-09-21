// https://www.redditstatic.com/desktop2x/AchievementsActions.adfb3cc87ebdd6f8da75.js
// Retrieved at 9/21/2021, 9:30:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AchievementsActions"], {
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return s
			})), t.d(r, "b", (function() {
				return d
			})), t.d(r, "c", (function() {
				return n
			})), t.d(r, "d", (function() {
				return i
			})), t.d(r, "h", (function() {
				return o
			})), t.d(r, "f", (function() {
				return u
			})), t.d(r, "g", (function() {
				return c
			})), t.d(r, "e", (function() {
				return a
			}));
			const s = 120,
				d = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				n = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				i = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIRS_LOADED",
				o = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				u = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_REQUESTED",
				c = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATED",
				a = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_FAILED"
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return S
			})), t.d(r, "onUsersSupportedSubredditsLoaded", (function() {
				return _
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return w
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return O
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return P
			})), t.d(r, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return U
			})), t.d(r, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return h
			})), t.d(r, "shouldFetchCommentsPowerupsInfo", (function() {
				return j
			})), t.d(r, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return R
			})), t.d(r, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return T
			})), t.d(r, "setSubredditUserAchievement", (function() {
				return D
			}));
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = t("./node_modules/fbt/lib/FbtPublic.js"),
				d = t("./src/lib/makeActionCreator/index.ts"),
				n = t("./src/lib/sentry/index.ts"),
				i = t("./src/lib/makeGqlRequest/index.ts"),
				o = t("./src/redditGQL/operations/SubredditUserAchievements.json"),
				u = t("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var c = t("./src/reddit/selectors/experiments/econ/index.ts"),
				a = t("./src/lib/initializeClient/installReducer.ts"),
				l = t("./src/reddit/reducers/features/powerups/index.ts"),
				p = t("./src/reddit/actions/gold/powerups.ts"),
				f = t("./src/reddit/actions/toaster.ts"),
				b = t("./src/reddit/models/Toast/index.ts"),
				m = t("./src/reddit/selectors/commentSelector.ts"),
				v = t("./src/reddit/selectors/gold/powerups/index.ts"),
				y = t("./src/reddit/selectors/gold/powerups/flairs.ts"),
				E = t("./src/reddit/selectors/user.ts"),
				I = t("./src/reddit/actions/economics/powerups/constants.ts");
			Object(a.a)({
				features: {
					powerups: l.a
				}
			});
			const S = Object(d.a)(I.d),
				_ = Object(d.a)(I.h),
				w = Object(d.a)(I.f),
				O = Object(d.a)(I.g),
				P = Object(d.a)(I.e),
				U = (e, r) => async (t, s, {
					gqlContext: d
				}) => {
					const u = r.filter(e => !!(null == e ? void 0 : e.trim()));
					if (u.length) try {
						const r = s(),
							n = Object(c.i)(r),
							a = await (async (e, r, t, s) => {
								const d = await Object(i.a)(e, {
									...o,
									variables: {
										subredditId: r,
										redditorIds: t,
										includeSupporterInfo: s
									}
								});
								if (!d.ok) throw new Error("Unable to fetch user achievements");
								return d.body.data
							})(d(), e, u, n),
							{
								subredditInfoById: l,
								redditorsInfoByIds: p
							} = a;
						await t(S(l)), n && p && await t(_(p))
					} catch (a) {
						n.c.captureException(a)
					}
				}, h = (e, r) => async (t, s) => {
					if (!e) return;
					const d = s(),
						n = Object(E.k)(d);
					if (!n || !Object(v.g)(d, {
							subredditId: e
						})) return;
					const i = !!Object(y.c)(d, {
						subredditId: e,
						userId: n.id
					});
					!r && i || await t(U(e, [n.id]))
				}, j = e => async (r, t) => {
					if (!e) return !1;
					await r(Object(p.l)(e, {
						fullData: !0
					}));
					const s = t();
					return Object(v.g)(s, {
						subredditId: e
					})
				}, R = e => async (r, t) => {
					var s;
					const d = t(),
						n = e.map(({
							id: e
						}) => e),
						i = Object(m.c)(d, {
							commentIds: n
						}),
						o = null === (s = i.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await r(j(o)))) return;
					const u = new Set(i.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await r(U(o, Array.from(u)))
				}, T = (e, r) => async (t, s) => {
					if (!r) return;
					if (!(await t(j(e)))) return;
					const d = new Set;
					Object.values(r).forEach(e => {
						d.add(e.authorId)
					}), await t(U(e, Array.from(d)))
				}, D = (e, r) => async (t, d, {
					gqlContext: o
				}) => {
					const c = d(),
						a = Object(E.k)(c);
					if (!a) return;
					const l = {
						subredditId: e,
						userId: a.id,
						achievementType: r
					};
					t(w(l));
					try {
						await (async (e, r, t) => {
							const s = await Object(i.a)(e, {
								...u,
								variables: {
									subredditId: r,
									achievementType: t
								}
							});
							if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update the preferred achievement flair")
						})(o(), l.subredditId, l.achievementType), t(O(l))
					} catch (p) {
						t(P(l)), n.c.captureException(p), t(Object(f.f)({
							duration: f.a,
							kind: b.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, r, t) {
			"use strict";
			var s = t("./node_modules/redux/es/redux.js"),
				d = t("./src/reddit/actions/gold/constants.ts");
			const n = e => e.type.startsWith("POWERUPS_SUPPORTER"),
				i = e => !n(e),
				o = {};
			var u = t("./node_modules/icepick/icepick.js"),
				c = t("./src/reddit/actions/economics/powerups/constants.ts");
			const a = {},
				l = e => {
					var r, t;
					return (null === (r = e.find(({
						isPreferred: e
					}) => e)) || void 0 === r ? void 0 : r.type) || (null === (t = e[0]) || void 0 === t ? void 0 : t.type)
				},
				p = {};
			r.a = Object(s.c)({
				subredditPowerupsFlairs: (e = o, r) => {
					switch (r.type) {
						case d.pb:
							const {
								subredditId: t, subredditAchievementFlairs: s
							} = r.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const o = s.reduce((e, r) => ({
									...e,
									[r.type]: r
								}), {}),
								u = s.filter(i).map(e => e.type),
								c = s.filter(n).map(e => e.type);
							return {
								...e, [t]: {
									flairsByType: o,
									achievementTypes: u,
									supporterTypes: c
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = a, r) => {
					switch (r.type) {
						case c.d: {
							const {
								id: t,
								userAchievementFlairsByRedditorIds: s
							} = r.payload;
							let d = e[t] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: r
								} of s) {
								const t = r.filter(i),
									s = t.map(({
										type: e
									}) => e),
									o = r.filter(n),
									u = o.map(({
										type: e
									}) => e),
									c = l(t),
									a = l(o);
								d = {
									...d,
									[e]: {
										achievementTypes: s,
										supporterTypes: u,
										achievementDisplayType: c,
										supporterDisplayType: a
									}
								}
							}
							return {
								...e,
								[t]: d
							}
						}
						case c.f: {
							const {
								subredditId: t,
								userId: s,
								achievementType: d
							} = r.payload;
							return Object(u.setIn)(e, [t, s, "pendingPreferredType"], d)
						}
						case c.g: {
							const {
								subredditId: t,
								userId: s,
								achievementType: d
							} = r.payload;
							return Object(u.updateIn)(e, [t, s], e => ({
								...e,
								achievementDisplayType: d,
								pendingPreferredType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: t,
								userId: s
							} = r.payload;
							return Object(u.setIn)(e, [t, s, "pendingPreferredType"], void 0)
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = p, r) => {
					switch (r.type) {
						case c.h: {
							let t = {};
							return r.payload.forEach(e => {
								const r = e.id,
									s = e.powerups;
								if (!r || !s) return;
								const d = s.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								t = {
									...t,
									[r]: d.reduce((e, r) => (e[r] = !0, e), {})
								}
							}), {
								...e,
								...t
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, r, t) {
			"use strict";
			t.d(r, "c", (function() {
				return c
			})), t.d(r, "d", (function() {
				return l
			})), t.d(r, "e", (function() {
				return f
			})), t.d(r, "b", (function() {
				return b
			})), t.d(r, "a", (function() {
				return m
			}));
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = t("./node_modules/reselect/es/index.js"),
				d = t("./src/reddit/selectors/commentSelector.ts"),
				n = t("./src/reddit/selectors/experiments/econ/index.ts"),
				i = t("./src/lib/initializeClient/installReducer.ts"),
				o = t("./src/reddit/reducers/features/powerups/index.ts");
			Object(i.a)({
				features: {
					powerups: o.a
				}
			});
			const u = (e, {
					subredditId: r
				}) => {
					var t, s;
					return r ? null === (s = null === (t = e.features.powerups.subredditPowerupsFlairs) || void 0 === t ? void 0 : t[r]) || void 0 === s ? void 0 : s.flairsByType : null
				},
				c = (e, {
					subredditId: r,
					userId: t
				}) => {
					var s, d;
					return r && t ? null === (d = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[r]) || void 0 === d ? void 0 : d[t] : null
				},
				a = Object(s.a)(c, e => (null == e ? void 0 : e.pendingPreferredType) || (null == e ? void 0 : e.achievementDisplayType)),
				l = Object(s.a)([u, a], (e, r) => e && r ? e[r] : null),
				p = Object(s.a)(c, e => null == e ? void 0 : e.supporterDisplayType),
				f = Object(s.a)([u, p], (e, r) => e && r ? e[r] : null),
				b = Object(s.a)([u, c], (e, r) => {
					if (!e) return [];
					const t = r ? [...r.supporterTypes, ...r.achievementTypes] : [],
						s = (null == r ? void 0 : r.pendingPreferredType) || (null == r ? void 0 : r.achievementDisplayType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !t.includes(e.type),
						isPreferred: e.type === s
					})).sort((e, r) => e.isLocked === r.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				m = (e, {
					commentId: r
				}) => {
					const t = Object(d.b)(e, {
							commentId: r
						}),
						s = null == t ? void 0 : t.subredditId,
						i = null == t ? void 0 : t.authorId;
					return !(!s || !i) && !(!((e, {
						subredditId: r,
						userId: t
					}) => {
						var s, d, n;
						return r && t ? null === (n = null === (d = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === d ? void 0 : d[t]) || void 0 === n ? void 0 : n[r] : null
					})(e, {
						subredditId: s,
						userId: i
					}) || !Object(n.i)(e))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AchievementsActions.adfb3cc87ebdd6f8da75.js.map