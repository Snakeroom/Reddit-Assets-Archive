// https://www.redditstatic.com/desktop2x/AchievementsActions.8a4edbdb7a2d03b524c6.js
// Retrieved at 9/22/2021, 9:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AchievementsActions"], {
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return d
			})), t.d(r, "b", (function() {
				return s
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
				return p
			}));
			const d = 120,
				s = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				n = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				i = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIRS_LOADED",
				o = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				u = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_REQUESTED",
				c = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATED",
				p = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_FAILED"
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return E
			})), t.d(r, "onUsersSupportedSubredditsLoaded", (function() {
				return h
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return _
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return O
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return T
			})), t.d(r, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return w
			})), t.d(r, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return P
			})), t.d(r, "shouldFetchCommentsPowerupsInfo", (function() {
				return U
			})), t.d(r, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return j
			})), t.d(r, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return A
			})), t.d(r, "setSubredditUserAchievementFlair", (function() {
				return F
			})), t.d(r, "setSubredditUserSupporterFlair", (function() {
				return R
			}));
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var d = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./src/lib/makeActionCreator/index.ts"),
				n = t("./src/lib/sentry/index.ts"),
				i = t("./src/lib/makeGqlRequest/index.ts"),
				o = t("./src/redditGQL/operations/SubredditUserAchievements.json"),
				u = t("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var c = t("./src/reddit/selectors/experiments/econ/index.ts"),
				p = t("./src/lib/initializeClient/installReducer.ts"),
				a = t("./src/reddit/reducers/features/powerups/index.ts"),
				l = t("./src/reddit/actions/gold/powerups.ts"),
				f = t("./src/reddit/actions/toaster.ts"),
				b = t("./src/reddit/models/Toast/index.ts"),
				v = t("./src/reddit/selectors/commentSelector.ts"),
				m = t("./src/reddit/selectors/gold/powerups/index.ts"),
				y = t("./src/reddit/selectors/gold/powerups/flairs.ts"),
				S = t("./src/reddit/selectors/user.ts"),
				I = t("./src/reddit/actions/economics/powerups/constants.ts");
			Object(p.a)({
				features: {
					powerups: a.a
				}
			});
			const E = Object(s.a)(I.d),
				h = Object(s.a)(I.h),
				_ = Object(s.a)(I.f),
				O = Object(s.a)(I.g),
				T = Object(s.a)(I.e),
				w = (e, r) => async (t, d, {
					gqlContext: s
				}) => {
					const u = r.filter(e => !!(null == e ? void 0 : e.trim()));
					if (u.length) try {
						const r = d(),
							n = Object(c.i)(r),
							p = await (async (e, r, t, d) => {
								const s = await Object(i.a)(e, {
									...o,
									variables: {
										subredditId: r,
										redditorIds: t,
										includeSupporterInfo: d
									}
								});
								if (!s.ok) throw new Error("Unable to fetch user achievements");
								return s.body.data
							})(s(), e, u, n),
							{
								subredditInfoById: a,
								redditorsInfoByIds: l
							} = p;
						await t(E(a)), n && l && await t(h(l))
					} catch (p) {
						n.c.captureException(p)
					}
				}, P = (e, r) => async (t, d) => {
					if (!e) return;
					const s = d(),
						n = Object(S.k)(s);
					if (!n || !Object(m.g)(s, {
							subredditId: e
						})) return;
					const i = !!Object(y.d)(s, {
						subredditId: e,
						userId: n.id
					});
					!r && i || await t(w(e, [n.id]))
				}, U = e => async (r, t) => {
					if (!e) return !1;
					await r(Object(l.l)(e, {
						fullData: !0
					}));
					const d = t();
					return Object(m.g)(d, {
						subredditId: e
					})
				}, j = e => async (r, t) => {
					var d;
					const s = t(),
						n = e.map(({
							id: e
						}) => e),
						i = Object(v.c)(s, {
							commentIds: n
						}),
						o = null === (d = i.find(e => e && e.subredditId)) || void 0 === d ? void 0 : d.subredditId;
					if (!(await r(U(o)))) return;
					const u = new Set(i.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await r(w(o, Array.from(u)))
				}, A = (e, r) => async (t, d) => {
					if (!r) return;
					if (!(await t(U(e)))) return;
					const s = new Set;
					Object.values(r).forEach(e => {
						s.add(e.authorId)
					}), await t(w(e, Array.from(s)))
				}, F = (e, r) => async (t, d) => {
					const s = d(),
						n = Object(S.k)(s);
					if (!n) return;
					const i = n.id,
						o = Object(y.h)(s, {
							subredditId: e,
							userId: i
						});
					t(g({
						subredditId: e,
						userId: i,
						achievementFlairType: r,
						supporterFlairType: o
					}))
				}, R = (e, r) => async (t, d) => {
					const s = d(),
						n = Object(S.k)(s);
					if (!n) return;
					const i = n.id,
						o = Object(y.f)(s, {
							subredditId: e,
							userId: i
						});
					t(g({
						subredditId: e,
						userId: i,
						achievementFlairType: o,
						supporterFlairType: r
					}))
				}, g = e => async (r, t, {
					gqlContext: s
				}) => {
					r(_(e));
					const {
						subredditId: o,
						achievementFlairType: c,
						supporterFlairType: p
					} = e, a = [c, p].filter(Boolean);
					try {
						await (async (e, r, t) => {
							const d = await Object(i.a)(e, {
								...u,
								variables: {
									subredditId: r,
									flairTypes: t
								}
							});
							if (!d.ok || !d.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update the preferred achievement flair")
						})(s(), o, a), r(O(e))
					} catch (l) {
						r(T(e)), n.c.captureException(l), r(Object(f.f)({
							duration: f.a,
							kind: b.b.Error,
							text: d.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, r, t) {
			"use strict";
			var d = t("./node_modules/redux/es/redux.js"),
				s = t("./src/reddit/actions/gold/constants.ts");
			const n = e => (e => e.startsWith("POWERUPS_SUPPORTER"))(e.type),
				i = e => !n(e),
				o = {};
			var u = t("./node_modules/icepick/icepick.js"),
				c = t("./src/reddit/actions/economics/powerups/constants.ts");
			const p = {},
				a = e => {
					var r, t;
					return (null === (r = e.find(({
						isPreferred: e
					}) => e)) || void 0 === r ? void 0 : r.type) || (null === (t = e[0]) || void 0 === t ? void 0 : t.type)
				},
				l = {};
			r.a = Object(d.c)({
				subredditPowerupsFlairs: (e = o, r) => {
					switch (r.type) {
						case s.pb:
							const {
								subredditId: t, subredditAchievementFlairs: d
							} = r.payload;
							if (!(null == d ? void 0 : d.length)) return e;
							const o = d.reduce((e, r) => ({
									...e,
									[r.type]: r
								}), {}),
								u = d.filter(i).map(e => e.type),
								c = d.filter(n).map(e => e.type);
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
				subredditUserPowerupsFlairs: (e = p, r) => {
					switch (r.type) {
						case c.d: {
							const {
								id: t,
								userAchievementFlairsByRedditorIds: d
							} = r.payload;
							let s = e[t] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: r
								} of d) {
								const t = r.filter(i),
									d = t.map(({
										type: e
									}) => e),
									o = r.filter(n),
									u = o.map(({
										type: e
									}) => e),
									c = a(t),
									p = a(o);
								s = {
									...s,
									[e]: {
										achievementTypes: d,
										supporterTypes: u,
										preferredAchievementType: c,
										preferredSupporterType: p
									}
								}
							}
							return {
								...e,
								[t]: s
							}
						}
						case c.f: {
							const {
								subredditId: t,
								userId: d,
								achievementFlairType: s,
								supporterFlairType: n
							} = r.payload;
							return Object(u.updateIn)(e, [t, d], e => ({
								...e,
								pendingAchievementType: s,
								pendingSupporterType: n
							}))
						}
						case c.g: {
							const {
								subredditId: t,
								userId: d,
								achievementFlairType: s,
								supporterFlairType: n
							} = r.payload;
							return Object(u.updateIn)(e, [t, d], e => ({
								...e,
								preferredAchievementType: s,
								preferredSupporterType: n,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: t,
								userId: d
							} = r.payload;
							return Object(u.updateIn)(e, [t, d], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = l, r) => {
					switch (r.type) {
						case c.h: {
							let t = {};
							return r.payload.forEach(e => {
								const r = e.id,
									d = e.powerups;
								if (!r || !d) return;
								const s = d.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								t = {
									...t,
									[r]: s.reduce((e, r) => (e[r] = !0, e), {})
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
			t.d(r, "d", (function() {
				return c
			})), t.d(r, "f", (function() {
				return p
			})), t.d(r, "e", (function() {
				return a
			})), t.d(r, "h", (function() {
				return l
			})), t.d(r, "g", (function() {
				return f
			})), t.d(r, "b", (function() {
				return b
			})), t.d(r, "c", (function() {
				return v
			})), t.d(r, "a", (function() {
				return y
			}));
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var d = t("./node_modules/reselect/es/index.js"),
				s = t("./src/reddit/selectors/commentSelector.ts"),
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
					var t, d;
					return r ? null === (d = null === (t = e.features.powerups.subredditPowerupsFlairs) || void 0 === t ? void 0 : t[r]) || void 0 === d ? void 0 : d.flairsByType : null
				},
				c = (e, {
					subredditId: r,
					userId: t
				}) => {
					var d, s;
					return r && t ? null === (s = null === (d = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === d ? void 0 : d[r]) || void 0 === s ? void 0 : s[t] : null
				},
				p = Object(d.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				a = Object(d.a)([u, p], (e, r) => e && r ? e[r] : null),
				l = Object(d.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				f = Object(d.a)([u, l], (e, r) => e && r ? e[r] : null),
				b = Object(d.a)([u, c], (e, r) => {
					if (!e) return [];
					const t = r ? [...r.supporterTypes, ...r.achievementTypes] : [],
						d = (null == r ? void 0 : r.pendingAchievementType) || (null == r ? void 0 : r.preferredAchievementType),
						s = (null == r ? void 0 : r.pendingSupporterType) || (null == r ? void 0 : r.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !t.includes(e.type),
						isPreferred: e.type === d || e.type === s
					})).sort((e, r) => e.isLocked === r.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				v = Object(d.a)([(e, {
					subredditId: r
				}) => {
					var t;
					return r ? null === (t = e.features.powerups.subredditPowerupsFlairs) || void 0 === t ? void 0 : t[r] : null
				}, c], (e, r) => {
					if (!e || !r) return null;
					const {
						supporterTypes: t,
						achievementTypes: d,
						flairsByType: s
					} = e, {
						supporterTypes: n,
						achievementTypes: i,
						preferredSupporterType: o,
						preferredAchievementType: u,
						pendingSupporterType: c,
						pendingAchievementType: p
					} = r;
					return {
						supporterFlairs: m(t, n, s, c || o),
						achievementFlairs: m(d, i, s, p || u)
					}
				}),
				m = (e, r, t, d) => e.map(e => ({
					...t[e],
					isLocked: !r.includes(e),
					isPreferred: e === d
				})).sort((e, r) => e.isLocked === r.isLocked ? 0 : e.isLocked ? 1 : -1),
				y = (e, {
					commentId: r
				}) => {
					const t = Object(s.b)(e, {
							commentId: r
						}),
						d = null == t ? void 0 : t.subredditId,
						i = null == t ? void 0 : t.authorId;
					return !(!d || !i) && !(!((e, {
						subredditId: r,
						userId: t
					}) => {
						var d, s, n;
						return r && t ? null === (n = null === (s = null === (d = e.features.powerups) || void 0 === d ? void 0 : d.usersSupportedSubreddits) || void 0 === s ? void 0 : s[t]) || void 0 === n ? void 0 : n[r] : null
					})(e, {
						subredditId: d,
						userId: i
					}) || !Object(n.i)(e))
				}
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"df1c1b9b6408"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"8c45e89afc9b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AchievementsActions.8a4edbdb7a2d03b524c6.js.map