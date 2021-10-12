// https://www.redditstatic.com/desktop2x/AchievementsActions.bb9cd7ff8aea315d234a.js
// Retrieved at 10/12/2021, 10:40:04 AM by Reddit Dataminer v1.0.0
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
				return O
			})), t.d(r, "onUsersSupportedSubredditsLoaded", (function() {
				return h
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return _
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return T
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return w
			})), t.d(r, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return P
			})), t.d(r, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return U
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
				m = t("./src/reddit/selectors/gold/powerups/flairs.ts"),
				v = t("./src/reddit/selectors/user.ts"),
				I = t("./src/reddit/actions/economics/powerups/constants.ts"),
				S = t("./src/lib/initializeClient/installReducer.ts"),
				E = t("./src/reddit/reducers/features/powerups/index.ts");
			Object(S.a)({
				features: {
					powerups: E.a
				}
			});
			const O = Object(i.a)(I.d),
				h = Object(i.a)(I.i),
				_ = Object(i.a)(I.f),
				T = Object(i.a)(I.g),
				w = Object(i.a)(I.e),
				P = Object(i.a)(I.h),
				U = (e, r) => async (t, d, {
					gqlContext: i
				}) => {
					const u = r.filter(e => !!(null == e ? void 0 : e.trim()));
					if (u.length) try {
						const r = d(),
							n = Object(a.j)(r),
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
						await t(O(p)), n && l && await t(h(l))
					} catch (c) {
						n.c.captureException(c)
					}
				}, j = (e, r) => async (t, d) => {
					if (!e) return;
					const i = d(),
						n = Object(v.k)(i);
					if (!n || !Object(y.h)(i, {
							subredditId: e
						})) return;
					const s = !!Object(m.f)(i, {
						subredditId: e,
						userId: n.id
					});
					!r && s || await t(U(e, [n.id]))
				}, F = e => async (r, t) => {
					if (!e) return !1;
					await r(Object(p.l)(e, {
						fullData: !0
					}));
					const d = t();
					return Object(y.h)(d, {
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
					await r(U(o, Array.from(u)))
				}, R = (e, r) => async (t, d) => {
					if (!r) return;
					if (!(await t(F(e)))) return;
					const i = new Set;
					Object.values(r).forEach(e => {
						i.add(e.authorId)
					}), await t(U(e, Array.from(i)))
				}, g = (e, r) => async (t, d) => {
					const i = d(),
						n = Object(v.k)(i);
					if (!n) return;
					const s = n.id,
						o = Object(m.i)(i, {
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
						n = Object(v.k)(i);
					if (!n) return;
					const s = n.id,
						o = Object(m.h)(i, {
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
						o = Object(v.k)(s);
					if (!o) return;
					const u = o.id;
					r(_(e));
					const {
						subredditId: a,
						achievementFlairType: p,
						supporterFlairType: b
					} = e, y = [p, b].filter(Boolean), I = Object(m.e)(s, {
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
						u = Object(v.k)(o);
					if (!u) return;
					const a = u.id,
						p = {
							subredditId: e,
							userId: a
						},
						b = [Object(m.h)(o, p), Object(m.i)(o, p)].filter(Boolean);
					t(P({
						...p,
						isHidden: r
					}));
					try {
						await c(s(), e, b, r)
					} catch (y) {
						t(P({
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
				return m
			})), t.d(r, "e", (function() {
				return v
			})), t.d(r, "d", (function() {
				return I
			})), t.d(r, "a", (function() {
				return E
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
				m = Object(d.a)([u, a], (e, r) => {
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
				v = Object(d.a)([a], e => !!e && e.isHidden),
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
				E = (e, {
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
					}) || !Object(n.j)(e))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AchievementsActions.bb9cd7ff8aea315d234a.js.map