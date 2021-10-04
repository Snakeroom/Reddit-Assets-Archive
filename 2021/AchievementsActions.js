// https://www.redditstatic.com/desktop2x/AchievementsActions.88d690b87b6c4cbbc8f1.js
// Retrieved at 10/4/2021, 10:20:05 AM by Reddit Dataminer v1.0.0
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
				return _
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return h
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return T
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return w
			})), t.d(r, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return U
			})), t.d(r, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return P
			})), t.d(r, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return j
			})), t.d(r, "shouldFetchCommentsPowerupsInfo", (function() {
				return F
			})), t.d(r, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return A
			})), t.d(r, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return R
			})), t.d(r, "setSubredditUserAchievementFlair", (function() {
				return g
			})), t.d(r, "setSubredditUserSupporterFlair", (function() {
				return D
			})), t.d(r, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return x
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
			var a = t("./src/reddit/selectors/experiments/econ/index.ts"),
				p = t("./src/reddit/actions/gold/powerups.ts"),
				l = t("./src/reddit/actions/toaster.ts"),
				f = t("./src/reddit/models/Toast/index.ts"),
				b = t("./src/reddit/selectors/commentSelector.ts"),
				y = t("./src/reddit/selectors/gold/powerups/index.ts"),
				v = t("./src/reddit/selectors/gold/powerups/flairs.ts"),
				m = t("./src/reddit/selectors/user.ts"),
				I = t("./src/reddit/actions/economics/powerups/constants.ts"),
				S = t("./src/lib/initializeClient/installReducer.ts"),
				O = t("./src/reddit/reducers/features/powerups/index.ts");
			Object(S.a)({
				features: {
					powerups: O.a
				}
			});
			const E = Object(i.a)(I.d),
				_ = Object(i.a)(I.i),
				h = Object(i.a)(I.f),
				T = Object(i.a)(I.g),
				w = Object(i.a)(I.e),
				U = Object(i.a)(I.h),
				P = (e, r) => async (t, d, {
					gqlContext: i
				}) => {
					const u = r.filter(e => !!(null == e ? void 0 : e.trim()));
					if (u.length) try {
						const r = d(),
							n = Object(a.i)(r),
							c = await (async (e, r, t, d) => {
								const i = await Object(s.a)(e, {
									...o,
									variables: {
										subredditId: r,
										redditorIds: t,
										includeSupporterInfo: d
									}
								});
								if (!i.ok) throw new Error("Unable to fetch user achievements");
								return i.body.data
							})(i(), e, u, n),
							{
								subredditInfoById: p,
								redditorsInfoByIds: l
							} = c;
						await t(E(p)), n && l && await t(_(l))
					} catch (c) {
						n.c.captureException(c)
					}
				}, j = (e, r) => async (t, d) => {
					if (!e) return;
					const i = d(),
						n = Object(m.k)(i);
					if (!n || !Object(y.g)(i, {
							subredditId: e
						})) return;
					const s = !!Object(v.f)(i, {
						subredditId: e,
						userId: n.id
					});
					!r && s || await t(P(e, [n.id]))
				}, F = e => async (r, t) => {
					if (!e) return !1;
					await r(Object(p.l)(e, {
						fullData: !0
					}));
					const d = t();
					return Object(y.g)(d, {
						subredditId: e
					})
				}, A = e => async (r, t) => {
					var d;
					const i = t(),
						n = e.map(({
							id: e
						}) => e),
						s = Object(b.c)(i, {
							commentIds: n
						}),
						o = null === (d = s.find(e => e && e.subredditId)) || void 0 === d ? void 0 : d.subredditId;
					if (!(await r(F(o)))) return;
					const u = new Set(s.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await r(P(o, Array.from(u)))
				}, R = (e, r) => async (t, d) => {
					if (!r) return;
					if (!(await t(F(e)))) return;
					const i = new Set;
					Object.values(r).forEach(e => {
						i.add(e.authorId)
					}), await t(P(e, Array.from(i)))
				}, g = (e, r) => async (t, d) => {
					const i = d(),
						n = Object(m.k)(i);
					if (!n) return;
					const s = n.id,
						o = Object(v.i)(i, {
							subredditId: e,
							userId: s
						});
					t(L({
						subredditId: e,
						userId: s,
						achievementFlairType: r,
						supporterFlairType: o
					}))
				}, D = (e, r) => async (t, d) => {
					const i = d(),
						n = Object(m.k)(i);
					if (!n) return;
					const s = n.id,
						o = Object(v.h)(i, {
							subredditId: e,
							userId: s
						});
					t(L({
						subredditId: e,
						userId: s,
						achievementFlairType: o,
						supporterFlairType: r
					}))
				}, L = e => async (r, t, {
					gqlContext: i
				}) => {
					const s = t(),
						o = Object(m.k)(s);
					if (!o) return;
					const u = o.id;
					r(h(e));
					const {
						subredditId: a,
						achievementFlairType: p,
						supporterFlairType: b
					} = e, y = [p, b].filter(Boolean), I = Object(v.e)(s, {
						subredditId: a,
						userId: u
					});
					try {
						await c(i(), a, y, I), r(T(e))
					} catch (S) {
						r(w(e)), n.c.captureException(S), r(Object(l.f)({
							duration: l.a,
							kind: f.b.Error,
							text: d.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, x = (e, r) => async (t, i, {
					gqlContext: s
				}) => {
					const o = i(),
						u = Object(m.k)(o);
					if (!u) return;
					const a = u.id,
						p = {
							subredditId: e,
							userId: a
						},
						b = [Object(v.h)(o, p), Object(v.i)(o, p)].filter(Boolean);
					t(U({
						...p,
						isHidden: r
					}));
					try {
						await c(s(), e, b, r)
					} catch (y) {
						t(U({
							...p,
							isHidden: !r
						})), n.c.captureException(y), t(Object(l.f)({
							duration: l.a,
							kind: f.b.Error,
							text: d.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, r, t) {
			"use strict";
			var d = t("./node_modules/redux/es/redux.js"),
				i = t("./src/reddit/actions/gold/constants.ts");
			const n = e => (e => e.startsWith("POWERUPS_SUPPORTER"))(e.type),
				s = e => !n(e),
				o = {};
			var u = t("./node_modules/icepick/icepick.js"),
				c = t("./src/reddit/actions/economics/powerups/constants.ts");
			const a = {},
				p = e => {
					var r, t;
					return (null === (r = e.find(({
						isPreferred: e
					}) => e)) || void 0 === r ? void 0 : r.type) || (null === (t = e[0]) || void 0 === t ? void 0 : t.type)
				},
				l = {};
			r.a = Object(d.c)({
				subredditPowerupsFlairs: (e = o, r) => {
					switch (r.type) {
						case i.pb:
							const {
								subredditId: t, subredditAchievementFlairs: d
							} = r.payload;
							if (!(null == d ? void 0 : d.length)) return e;
							const o = d.reduce((e, r) => ({
									...e,
									[r.type]: r
								}), {}),
								u = d.filter(s).map(e => e.type),
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
				subredditUserPowerupsFlairs: (e = a, r) => {
					switch (r.type) {
						case c.d: {
							const {
								id: t,
								userAchievementFlairsByRedditorIds: d
							} = r.payload;
							let i = e[t] || {};
							for (const {
									redditorId: e,
									isHidden: r,
									userAchievementFlairs: o
								} of d) {
								const t = o.filter(s),
									d = t.map(({
										type: e
									}) => e),
									u = o.filter(n),
									c = u.map(({
										type: e
									}) => e),
									a = p(t),
									l = p(u);
								i = {
									...i,
									[e]: {
										achievementTypes: d,
										supporterTypes: c,
										preferredAchievementType: a,
										preferredSupporterType: l,
										isHidden: r
									}
								}
							}
							return {
								...e,
								[t]: i
							}
						}
						case c.f: {
							const {
								subredditId: t,
								userId: d,
								achievementFlairType: i,
								supporterFlairType: n
							} = r.payload;
							return Object(u.updateIn)(e, [t, d], e => ({
								...e,
								pendingAchievementType: i,
								pendingSupporterType: n
							}))
						}
						case c.g: {
							const {
								subredditId: t,
								userId: d,
								achievementFlairType: i,
								supporterFlairType: n
							} = r.payload;
							return Object(u.updateIn)(e, [t, d], e => ({
								...e,
								preferredAchievementType: i,
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
						case c.h: {
							const {
								subredditId: t,
								userId: d,
								isHidden: i
							} = r.payload;
							return Object(u.updateIn)(e, [t, d], e => ({
								...e,
								isHidden: i
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = l, r) => {
					switch (r.type) {
						case c.i: {
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
				return a
			})), t.d(r, "h", (function() {
				return p
			})), t.d(r, "g", (function() {
				return l
			})), t.d(r, "i", (function() {
				return f
			})), t.d(r, "j", (function() {
				return b
			})), t.d(r, "b", (function() {
				return y
			})), t.d(r, "c", (function() {
				return v
			})), t.d(r, "e", (function() {
				return m
			})), t.d(r, "d", (function() {
				return I
			})), t.d(r, "a", (function() {
				return O
			}));
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var d = t("./node_modules/reselect/es/index.js"),
				i = t("./src/reddit/selectors/commentSelector.ts"),
				n = t("./src/reddit/selectors/experiments/econ/index.ts"),
				s = t("./src/lib/initializeClient/installReducer.ts"),
				o = t("./src/reddit/reducers/features/powerups/index.ts");
			Object(s.a)({
				features: {
					powerups: o.a
				}
			});
			const u = (e, {
					subredditId: r
				}) => {
					var t;
					return r ? null === (t = e.features.powerups.subredditPowerupsFlairs) || void 0 === t ? void 0 : t[r] : null
				},
				c = (e, {
					subredditId: r
				}) => {
					var t, d;
					return r ? null === (d = null === (t = e.features.powerups.subredditPowerupsFlairs) || void 0 === t ? void 0 : t[r]) || void 0 === d ? void 0 : d.flairsByType : null
				},
				a = (e, {
					subredditId: r,
					userId: t
				}) => {
					var d, i;
					return r && t ? null === (i = null === (d = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === d ? void 0 : d[r]) || void 0 === i ? void 0 : i[t] : null
				},
				p = Object(d.a)(a, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				l = Object(d.a)([c, p], (e, r) => e && r ? e[r] : null),
				f = Object(d.a)(a, e => null == e ? void 0 : e.preferredSupporterType),
				b = Object(d.a)([c, f], (e, r) => e && r ? e[r] : null),
				y = Object(d.a)([c, a], (e, r) => {
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
				v = Object(d.a)([u, a], (e, r) => {
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
						supporterFlairs: S(t, n, i, c || o),
						achievementFlairs: S(d, s, i, a || u)
					}
				}),
				m = Object(d.a)([a], e => !!e && e.isHidden),
				I = Object(d.a)([u, a, b], (e, r, t) => {
					if (!e || !r) return [];
					const d = r.achievementTypes.map(r => e.flairsByType[r]);
					return t ? [t, ...d] : d
				}),
				S = (e, r, t, d) => e.map(e => ({
					...t[e],
					isLocked: !r.includes(e),
					isPreferred: e === d
				})).sort((e, r) => e.isLocked === r.isLocked ? 0 : e.isLocked ? 1 : -1),
				O = (e, {
					commentId: r
				}) => {
					const t = Object(i.b)(e, {
							commentId: r
						}),
						d = null == t ? void 0 : t.subredditId,
						s = null == t ? void 0 : t.authorId;
					return !(!d || !s) && !(!((e, {
						subredditId: r,
						userId: t
					}) => {
						var d, i, n;
						return r && t ? null === (n = null === (i = null === (d = e.features.powerups) || void 0 === d ? void 0 : d.usersSupportedSubreddits) || void 0 === i ? void 0 : i[t]) || void 0 === n ? void 0 : n[r] : null
					})(e, {
						subredditId: d,
						userId: s
					}) || !Object(n.i)(e))
				}
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"de382962c5ac"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AchievementsActions.88d690b87b6c4cbbc8f1.js.map