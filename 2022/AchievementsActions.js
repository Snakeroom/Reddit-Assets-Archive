// https://www.redditstatic.com/desktop2x/AchievementsActions.3bab4d5b2f4793036c20.js
// Retrieved at 5/5/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AchievementsActions"], {
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return d
			})), t.d(r, "b", (function() {
				return n
			})), t.d(r, "c", (function() {
				return i
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
				n = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				i = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
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
				return h
			})), t.d(r, "onUsersSupportedSubredditsLoaded", (function() {
				return E
			})), t.d(r, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return O
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
				n = t("./src/lib/makeActionCreator/index.ts"),
				i = t("./src/lib/sentry/index.ts"),
				s = t("./src/lib/makeGqlRequest/index.ts"),
				o = t("./src/redditGQL/operations/SubredditUserAchievements.json"),
				u = t("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const c = async (e, r, t, d) => {
				const n = await Object(s.a)(e, {
					...u,
					variables: {
						subredditId: r,
						flairTypes: t,
						isHidden: d
					}
				});
				if (!n.ok || !n.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var a = t("./src/reddit/actions/gold/powerups.ts"),
				p = t("./src/reddit/actions/toaster.ts"),
				l = t("./src/reddit/models/Toast/index.ts"),
				f = t("./src/reddit/selectors/commentSelector.ts"),
				b = t("./src/reddit/selectors/gold/powerups/index.ts"),
				v = t("./src/reddit/selectors/gold/powerups/flairs.ts"),
				y = t("./src/reddit/selectors/user.ts"),
				m = t("./src/reddit/actions/economics/powerups/constants.ts"),
				I = t("./src/lib/initializeClient/installReducer.ts"),
				S = t("./src/reddit/reducers/features/powerups/index.ts");
			Object(I.a)({
				features: {
					powerups: S.a
				}
			});
			const h = Object(n.a)(m.d),
				E = Object(n.a)(m.i),
				O = Object(n.a)(m.f),
				_ = Object(n.a)(m.g),
				T = Object(n.a)(m.e),
				w = Object(n.a)(m.h),
				P = (e, r) => async (t, d, n) => {
					let {
						gqlContext: u
					} = n;
					const c = r.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
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
							})(u(), e, c),
							{
								subredditInfoById: d,
								redditorsInfoByIds: n
							} = r;
						await t(h(d)), n && await t(E(n))
					} catch (a) {
						i.c.captureException(a)
					}
				}, U = (e, r) => async (t, d) => {
					if (!e) return;
					const n = d(),
						i = Object(y.k)(n);
					if (!i || !Object(b.h)(n, {
							subredditId: e
						})) return;
					const s = !!Object(v.f)(n, {
						subredditId: e,
						userId: i.id
					});
					!r && s || await t(P(e, [i.id]))
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
					const n = t(),
						i = e.map(e => {
							let {
								id: r
							} = e;
							return r
						}),
						s = Object(f.c)(n, {
							commentIds: i
						}),
						o = null === (d = s.find(e => e && e.subredditId)) || void 0 === d ? void 0 : d.subredditId;
					if (!(await r(j(o)))) return;
					const u = new Set(s.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: r
						} = e;
						return r
					}));
					await r(P(o, Array.from(u)))
				}, A = (e, r) => async (t, d) => {
					if (!r) return;
					if (!(await t(j(e)))) return;
					const n = new Set;
					Object.values(r).forEach(e => {
						n.add(e.authorId)
					}), await t(P(e, Array.from(n)))
				}, R = (e, r) => async (t, d) => {
					const n = d(),
						i = Object(y.k)(n);
					if (!i) return;
					const s = i.id,
						o = Object(v.i)(n, {
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
					const n = d(),
						i = Object(y.k)(n);
					if (!i) return;
					const s = i.id,
						o = Object(v.h)(n, {
							subredditId: e,
							userId: s
						});
					t(D({
						subredditId: e,
						userId: s,
						achievementFlairType: o,
						supporterFlairType: r
					}))
				}, D = e => async (r, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = t(),
						u = Object(y.k)(o);
					if (!u) return;
					const a = u.id;
					r(O(e));
					const {
						subredditId: f,
						achievementFlairType: b,
						supporterFlairType: m
					} = e, I = [b, m].filter(Boolean), S = Object(v.e)(o, {
						subredditId: f,
						userId: a
					});
					try {
						await c(s(), f, I, S), r(_(e))
					} catch (h) {
						r(T(e)), i.c.captureException(h), r(Object(p.f)({
							duration: p.a,
							kind: l.b.Error,
							text: d.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, L = (e, r) => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const u = n(),
						a = Object(y.k)(u);
					if (!a) return;
					const f = a.id,
						b = {
							subredditId: e,
							userId: f
						},
						m = [Object(v.h)(u, b), Object(v.i)(u, b)].filter(Boolean);
					t(w({
						...b,
						isHidden: r
					}));
					try {
						await c(o(), e, m, r)
					} catch (I) {
						t(w({
							...b,
							isHidden: !r
						})), i.c.captureException(I), t(Object(p.f)({
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
					return n
				})), t.d(r, "a", (function() {
					return i
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(d || (d = {}));
			const n = e => e.category === d.Supporter,
				i = e => e.category === d.Achievement
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, r, t) {
			"use strict";
			var d = t("./node_modules/redux/es/redux.js"),
				n = t("./src/reddit/actions/gold/constants.ts"),
				i = t("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const s = {};
			var o = t("./node_modules/icepick/icepick.js"),
				u = t("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				a = e => {
					var r, t;
					return (null === (r = e.find(e => {
						let {
							isPreferred: r
						} = e;
						return r
					})) || void 0 === r ? void 0 : r.type) || (null === (t = e[0]) || void 0 === t ? void 0 : t.type)
				},
				p = {};
			r.a = Object(d.c)({
				subredditPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
						r = arguments.length > 1 ? arguments[1] : void 0;
					switch (r.type) {
						case n.pb:
							const {
								subredditId: t, subredditAchievementFlairs: d
							} = r.payload;
							if (!(null == d ? void 0 : d.length)) return e;
							const s = d.reduce((e, r) => ({
									...e,
									[r.type]: r
								}), {}),
								o = d.filter(i.a).map(e => e.type),
								u = d.filter(i.b).map(e => e.type);
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
				subredditUserPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
						r = arguments.length > 1 ? arguments[1] : void 0;
					switch (r.type) {
						case u.d: {
							const {
								id: t,
								userAchievementFlairsByRedditorIds: d
							} = r.payload;
							let n = e[t] || {};
							for (const {
									redditorId: e,
									isHidden: r,
									userAchievementFlairs: s
								} of d) {
								const t = s.filter(i.a),
									d = t.map(e => {
										let {
											type: r
										} = e;
										return r
									}),
									o = s.filter(i.b),
									u = o.map(e => {
										let {
											type: r
										} = e;
										return r
									}),
									c = a(t),
									p = a(o);
								n = {
									...n,
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
								[t]: n
							}
						}
						case u.f: {
							const {
								subredditId: t,
								userId: d,
								achievementFlairType: n,
								supporterFlairType: i
							} = r.payload;
							return Object(o.updateIn)(e, [t, d], e => ({
								...e,
								pendingAchievementType: n,
								pendingSupporterType: i
							}))
						}
						case u.g: {
							const {
								subredditId: t,
								userId: d,
								achievementFlairType: n,
								supporterFlairType: i
							} = r.payload;
							return Object(o.updateIn)(e, [t, d], e => ({
								...e,
								preferredAchievementType: n,
								preferredSupporterType: i,
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
								isHidden: n
							} = r.payload;
							return Object(o.updateIn)(e, [t, d], e => ({
								...e,
								isHidden: n
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
						r = arguments.length > 1 ? arguments[1] : void 0;
					switch (r.type) {
						case u.i: {
							let t = {};
							return r.payload.forEach(e => {
								const r = e.id,
									d = e.powerups;
								if (!r || !d) return;
								const n = d.supportedSubreddits.filter(e => {
									let {
										subredditInfo: r
									} = e;
									return null == r ? void 0 : r.id
								}).map(e => {
									let {
										subredditInfo: r
									} = e;
									return r.id
								});
								t = {
									...t,
									[r]: n.reduce((e, r) => (e[r] = !0, e), {})
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
				return v
			})), t.d(r, "e", (function() {
				return y
			})), t.d(r, "d", (function() {
				return m
			})), t.d(r, "a", (function() {
				return S
			}));
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var d = t("./node_modules/reselect/es/index.js"),
				n = t("./src/reddit/selectors/commentSelector.ts"),
				i = t("./src/lib/initializeClient/installReducer.ts"),
				s = t("./src/reddit/reducers/features/powerups/index.ts");
			Object(i.a)({
				features: {
					powerups: s.a
				}
			});
			const o = (e, r) => {
					let {
						subredditId: t
					} = r;
					var d;
					return t ? null === (d = e.features.powerups.subredditPowerupsFlairs) || void 0 === d ? void 0 : d[t] : null
				},
				u = (e, r) => {
					let {
						subredditId: t
					} = r;
					var d, n;
					return t ? null === (n = null === (d = e.features.powerups.subredditPowerupsFlairs) || void 0 === d ? void 0 : d[t]) || void 0 === n ? void 0 : n.flairsByType : null
				},
				c = (e, r) => {
					let {
						subredditId: t,
						userId: d
					} = r;
					var n, i;
					return t && d ? null === (i = null === (n = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === n ? void 0 : n[t]) || void 0 === i ? void 0 : i[d] : null
				},
				a = Object(d.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				p = Object(d.a)([u, a], (e, r) => e && r ? e[r] : null),
				l = Object(d.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				f = Object(d.a)([u, l], (e, r) => e && r ? e[r] : null),
				b = Object(d.a)([u, c], (e, r) => {
					if (!e) return [];
					const t = r ? [...r.supporterTypes, ...r.achievementTypes] : [],
						d = (null == r ? void 0 : r.pendingAchievementType) || (null == r ? void 0 : r.preferredAchievementType),
						n = (null == r ? void 0 : r.pendingSupporterType) || (null == r ? void 0 : r.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !t.includes(e.type),
						isPreferred: e.type === d || e.type === n
					})).sort((e, r) => e.isLocked === r.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				v = Object(d.a)([o, c], (e, r) => {
					if (!e || !r) return null;
					const {
						supporterTypes: t,
						achievementTypes: d,
						flairsByType: n
					} = e, {
						supporterTypes: i,
						achievementTypes: s,
						preferredSupporterType: o,
						preferredAchievementType: u,
						pendingSupporterType: c,
						pendingAchievementType: a
					} = r;
					return {
						supporterFlairs: I(t, i, n, c || o),
						achievementFlairs: I(d, s, n, a || u)
					}
				}),
				y = Object(d.a)([c], e => !!e && e.isHidden),
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
				S = (e, r) => {
					let {
						commentId: t
					} = r;
					const d = Object(n.b)(e, {
							commentId: t
						}),
						i = null == d ? void 0 : d.subredditId,
						s = null == d ? void 0 : d.authorId;
					return !(!i || !s) && !!((e, r) => {
						let {
							subredditId: t,
							userId: d
						} = r;
						var n, i, s;
						return t && d ? null === (s = null === (i = null === (n = e.features.powerups) || void 0 === n ? void 0 : n.usersSupportedSubreddits) || void 0 === i ? void 0 : i[d]) || void 0 === s ? void 0 : s[t] : null
					})(e, {
						subredditId: i,
						userId: s
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AchievementsActions.3bab4d5b2f4793036c20.js.map