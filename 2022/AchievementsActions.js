// https://www.redditstatic.com/desktop2x/AchievementsActions.311d35735c9238103469.js
// Retrieved at 3/21/2022, 5:00:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AchievementsActions"], {
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return d
			})), t.d(r, "b", (function() {
				return i
			})), t.d(r, "c", (function() {
				return n
			})), t.d(r, "d", (function() {
				return s
			})), t.d(r, "i", (function() {
				return o
			})), t.d(r, "f", (function() {
				return u
			})), t.d(r, "g", (function() {
				return c
			})), t.d(r, "e", (function() {
				return a
			})), t.d(r, "h", (function() {
				return p
			}));
			const d = 120,
				i = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				n = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				s = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIRS_LOADED",
				o = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				u = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_REQUESTED",
				c = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATED",
				a = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_FAILED",
				p = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_VISIBILITY_UPDATE"
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return E
			})), t.d(r, "onUsersSupportedSubredditsLoaded", (function() {
				return O
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return h
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return _
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return T
			})), t.d(r, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return w
			})), t.d(r, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return P
			})), t.d(r, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return U
			})), t.d(r, "shouldFetchCommentsPowerupsInfo", (function() {
				return j
			})), t.d(r, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return F
			})), t.d(r, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return A
			})), t.d(r, "setSubredditUserAchievementFlair", (function() {
				return R
			})), t.d(r, "setSubredditUserSupporterFlair", (function() {
				return g
			})), t.d(r, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return L
			}));
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var d = t("./node_modules/fbt/lib/FbtPublic.js"),
				i = t("./src/lib/makeActionCreator/index.ts"),
				n = t("./src/lib/sentry/index.ts"),
				s = t("./src/lib/makeGqlRequest/index.ts"),
				o = t("./src/redditGQL/operations/SubredditUserAchievements.json"),
				u = t("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const c = async (e, r, t, d) => {
				const i = await Object(s.a)(e, {
					...u,
					variables: {
						subredditId: r,
						flairTypes: t,
						isHidden: d
					}
				});
				if (!i.ok || !i.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var a = t("./src/reddit/actions/gold/powerups.ts"),
				p = t("./src/reddit/actions/toaster.ts"),
				l = t("./src/reddit/models/Toast/index.ts"),
				f = t("./src/reddit/selectors/commentSelector.ts"),
				b = t("./src/reddit/selectors/gold/powerups/index.ts"),
				y = t("./src/reddit/selectors/gold/powerups/flairs.ts"),
				v = t("./src/reddit/selectors/user.ts"),
				m = t("./src/reddit/actions/economics/powerups/constants.ts"),
				I = t("./src/lib/initializeClient/installReducer.ts"),
				S = t("./src/reddit/reducers/features/powerups/index.ts");
			Object(I.a)({
				features: {
					powerups: S.a
				}
			});
			const E = Object(i.a)(m.d),
				O = Object(i.a)(m.i),
				h = Object(i.a)(m.f),
				_ = Object(i.a)(m.g),
				T = Object(i.a)(m.e),
				w = Object(i.a)(m.h),
				P = (e, r) => async (t, d, {
					gqlContext: i
				}) => {
					const u = r.filter(e => !!(null == e ? void 0 : e.trim()));
					if (u.length) try {
						const r = await (async (e, r, t) => {
								const d = await Object(s.a)(e, {
									...o,
									variables: {
										subredditId: r,
										redditorIds: t,
										includeSupporterInfo: !0
									}
								});
								if (!d.ok) throw new Error("Unable to fetch user achievements");
								return d.body.data
							})(i(), e, u),
							{
								subredditInfoById: d,
								redditorsInfoByIds: n
							} = r;
						await t(E(d)), n && await t(O(n))
					} catch (c) {
						n.c.captureException(c)
					}
				}, U = (e, r) => async (t, d) => {
					if (!e) return;
					const i = d(),
						n = Object(v.k)(i);
					if (!n || !Object(b.h)(i, {
							subredditId: e
						})) return;
					const s = !!Object(y.f)(i, {
						subredditId: e,
						userId: n.id
					});
					!r && s || await t(P(e, [n.id]))
				}, j = e => async (r, t) => {
					if (!e) return !1;
					await r(Object(a.m)(e, {
						fullData: !0
					}));
					const d = t();
					return Object(b.h)(d, {
						subredditId: e
					})
				}, F = e => async (r, t) => {
					var d;
					const i = t(),
						n = e.map(({
							id: e
						}) => e),
						s = Object(f.c)(i, {
							commentIds: n
						}),
						o = null === (d = s.find(e => e && e.subredditId)) || void 0 === d ? void 0 : d.subredditId;
					if (!(await r(j(o)))) return;
					const u = new Set(s.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await r(P(o, Array.from(u)))
				}, A = (e, r) => async (t, d) => {
					if (!r) return;
					if (!(await t(j(e)))) return;
					const i = new Set;
					Object.values(r).forEach(e => {
						i.add(e.authorId)
					}), await t(P(e, Array.from(i)))
				}, R = (e, r) => async (t, d) => {
					const i = d(),
						n = Object(v.k)(i);
					if (!n) return;
					const s = n.id,
						o = Object(y.i)(i, {
							subredditId: e,
							userId: s
						});
					t(D({
						subredditId: e,
						userId: s,
						achievementFlairType: r,
						supporterFlairType: o
					}))
				}, g = (e, r) => async (t, d) => {
					const i = d(),
						n = Object(v.k)(i);
					if (!n) return;
					const s = n.id,
						o = Object(y.h)(i, {
							subredditId: e,
							userId: s
						});
					t(D({
						subredditId: e,
						userId: s,
						achievementFlairType: o,
						supporterFlairType: r
					}))
				}, D = e => async (r, t, {
					gqlContext: i
				}) => {
					const s = t(),
						o = Object(v.k)(s);
					if (!o) return;
					const u = o.id;
					r(h(e));
					const {
						subredditId: a,
						achievementFlairType: f,
						supporterFlairType: b
					} = e, m = [f, b].filter(Boolean), I = Object(y.e)(s, {
						subredditId: a,
						userId: u
					});
					try {
						await c(i(), a, m, I), r(_(e))
					} catch (S) {
						r(T(e)), n.c.captureException(S), r(Object(p.f)({
							duration: p.a,
							kind: l.b.Error,
							text: d.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, L = (e, r) => async (t, i, {
					gqlContext: s
				}) => {
					const o = i(),
						u = Object(v.k)(o);
					if (!u) return;
					const a = u.id,
						f = {
							subredditId: e,
							userId: a
						},
						b = [Object(y.h)(o, f), Object(y.i)(o, f)].filter(Boolean);
					t(w({
						...f,
						isHidden: r
					}));
					try {
						await c(s(), e, b, r)
					} catch (m) {
						t(w({
							...f,
							isHidden: !r
						})), n.c.captureException(m), t(Object(p.f)({
							duration: p.a,
							kind: l.b.Error,
							text: d.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, r, t) {
			"use strict";
			var d;
			t.d(r, "b", (function() {
					return i
				})), t.d(r, "a", (function() {
					return n
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(d || (d = {}));
			const i = e => e.category === d.Supporter,
				n = e => e.category === d.Achievement
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, r, t) {
			"use strict";
			var d = t("./node_modules/redux/es/redux.js"),
				i = t("./src/reddit/actions/gold/constants.ts"),
				n = t("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const s = {};
			var o = t("./node_modules/icepick/icepick.js"),
				u = t("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				a = e => {
					var r, t;
					return (null === (r = e.find(({
						isPreferred: e
					}) => e)) || void 0 === r ? void 0 : r.type) || (null === (t = e[0]) || void 0 === t ? void 0 : t.type)
				},
				p = {};
			r.a = Object(d.c)({
				subredditPowerupsFlairs: (e = s, r) => {
					switch (r.type) {
						case i.pb:
							const {
								subredditId: t, subredditAchievementFlairs: d
							} = r.payload;
							if (!(null == d ? void 0 : d.length)) return e;
							const s = d.reduce((e, r) => ({
									...e,
									[r.type]: r
								}), {}),
								o = d.filter(n.a).map(e => e.type),
								u = d.filter(n.b).map(e => e.type);
							return {
								...e, [t]: {
									flairsByType: s,
									achievementTypes: o,
									supporterTypes: u
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = c, r) => {
					switch (r.type) {
						case u.d: {
							const {
								id: t,
								userAchievementFlairsByRedditorIds: d
							} = r.payload;
							let i = e[t] || {};
							for (const {
									redditorId: e,
									isHidden: r,
									userAchievementFlairs: s
								} of d) {
								const t = s.filter(n.a),
									d = t.map(({
										type: e
									}) => e),
									o = s.filter(n.b),
									u = o.map(({
										type: e
									}) => e),
									c = a(t),
									p = a(o);
								i = {
									...i,
									[e]: {
										achievementTypes: d,
										supporterTypes: u,
										preferredAchievementType: c,
										preferredSupporterType: p,
										isHidden: r
									}
								}
							}
							return {
								...e,
								[t]: i
							}
						}
						case u.f: {
							const {
								subredditId: t,
								userId: d,
								achievementFlairType: i,
								supporterFlairType: n
							} = r.payload;
							return Object(o.updateIn)(e, [t, d], e => ({
								...e,
								pendingAchievementType: i,
								pendingSupporterType: n
							}))
						}
						case u.g: {
							const {
								subredditId: t,
								userId: d,
								achievementFlairType: i,
								supporterFlairType: n
							} = r.payload;
							return Object(o.updateIn)(e, [t, d], e => ({
								...e,
								preferredAchievementType: i,
								preferredSupporterType: n,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case u.e: {
							const {
								subredditId: t,
								userId: d
							} = r.payload;
							return Object(o.updateIn)(e, [t, d], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case u.h: {
							const {
								subredditId: t,
								userId: d,
								isHidden: i
							} = r.payload;
							return Object(o.updateIn)(e, [t, d], e => ({
								...e,
								isHidden: i
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = p, r) => {
					switch (r.type) {
						case u.i: {
							let t = {};
							return r.payload.forEach(e => {
								const r = e.id,
									d = e.powerups;
								if (!r || !d) return;
								const i = d.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								t = {
									...t,
									[r]: i.reduce((e, r) => (e[r] = !0, e), {})
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
			t.d(r, "f", (function() {
				return c
			})), t.d(r, "h", (function() {
				return a
			})), t.d(r, "g", (function() {
				return p
			})), t.d(r, "i", (function() {
				return l
			})), t.d(r, "j", (function() {
				return f
			})), t.d(r, "b", (function() {
				return b
			})), t.d(r, "c", (function() {
				return y
			})), t.d(r, "e", (function() {
				return v
			})), t.d(r, "d", (function() {
				return m
			})), t.d(r, "a", (function() {
				return S
			}));
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var d = t("./node_modules/reselect/es/index.js"),
				i = t("./src/reddit/selectors/commentSelector.ts"),
				n = t("./src/lib/initializeClient/installReducer.ts"),
				s = t("./src/reddit/reducers/features/powerups/index.ts");
			Object(n.a)({
				features: {
					powerups: s.a
				}
			});
			const o = (e, {
					subredditId: r
				}) => {
					var t;
					return r ? null === (t = e.features.powerups.subredditPowerupsFlairs) || void 0 === t ? void 0 : t[r] : null
				},
				u = (e, {
					subredditId: r
				}) => {
					var t, d;
					return r ? null === (d = null === (t = e.features.powerups.subredditPowerupsFlairs) || void 0 === t ? void 0 : t[r]) || void 0 === d ? void 0 : d.flairsByType : null
				},
				c = (e, {
					subredditId: r,
					userId: t
				}) => {
					var d, i;
					return r && t ? null === (i = null === (d = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === d ? void 0 : d[r]) || void 0 === i ? void 0 : i[t] : null
				},
				a = Object(d.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				p = Object(d.a)([u, a], (e, r) => e && r ? e[r] : null),
				l = Object(d.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				f = Object(d.a)([u, l], (e, r) => e && r ? e[r] : null),
				b = Object(d.a)([u, c], (e, r) => {
					if (!e) return [];
					const t = r ? [...r.supporterTypes, ...r.achievementTypes] : [],
						d = (null == r ? void 0 : r.pendingAchievementType) || (null == r ? void 0 : r.preferredAchievementType),
						i = (null == r ? void 0 : r.pendingSupporterType) || (null == r ? void 0 : r.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !t.includes(e.type),
						isPreferred: e.type === d || e.type === i
					})).sort((e, r) => e.isLocked === r.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				y = Object(d.a)([o, c], (e, r) => {
					if (!e || !r) return null;
					const {
						supporterTypes: t,
						achievementTypes: d,
						flairsByType: i
					} = e, {
						supporterTypes: n,
						achievementTypes: s,
						preferredSupporterType: o,
						preferredAchievementType: u,
						pendingSupporterType: c,
						pendingAchievementType: a
					} = r;
					return {
						supporterFlairs: I(t, n, i, c || o),
						achievementFlairs: I(d, s, i, a || u)
					}
				}),
				v = Object(d.a)([c], e => !!e && e.isHidden),
				m = Object(d.a)([o, c, f], (e, r, t) => {
					if (!e || !r) return [];
					const d = r.achievementTypes.map(r => e.flairsByType[r]);
					return t ? [t, ...d] : d
				}),
				I = (e, r, t, d) => e.map(e => ({
					...t[e],
					isLocked: !r.includes(e),
					isPreferred: e === d
				})).sort((e, r) => e.isLocked === r.isLocked ? 0 : e.isLocked ? 1 : -1),
				S = (e, {
					commentId: r
				}) => {
					const t = Object(i.b)(e, {
							commentId: r
						}),
						d = null == t ? void 0 : t.subredditId,
						n = null == t ? void 0 : t.authorId;
					return !(!d || !n) && !!((e, {
						subredditId: r,
						userId: t
					}) => {
						var d, i, n;
						return r && t ? null === (n = null === (i = null === (d = e.features.powerups) || void 0 === d ? void 0 : d.usersSupportedSubreddits) || void 0 === i ? void 0 : i[t]) || void 0 === n ? void 0 : n[r] : null
					})(e, {
						subredditId: d,
						userId: n
					})
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AchievementsActions.311d35735c9238103469.js.map