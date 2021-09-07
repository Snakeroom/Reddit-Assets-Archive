// https://www.redditstatic.com/desktop2x/getFlairData.23e273fd6c1ecdf6e403.js
// Retrieved at 9/7/2021, 10:40:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["getFlairData"], {
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return d
			})), t.d(r, "b", (function() {
				return s
			})), t.d(r, "c", (function() {
				return i
			})), t.d(r, "d", (function() {
				return n
			})), t.d(r, "h", (function() {
				return u
			})), t.d(r, "f", (function() {
				return o
			})), t.d(r, "g", (function() {
				return c
			})), t.d(r, "e", (function() {
				return l
			}));
			const d = 120,
				s = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				i = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				n = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENTS_LOADED",
				u = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				o = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_REQUESTED",
				c = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATED",
				l = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_FAILED"
		},
		"./src/reddit/helpers/trackers/features/getFlairData.ts": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "getFlairData", (function() {
				return o
			}));
			var d = t("./src/reddit/helpers/flair.ts"),
				s = t("./src/reddit/selectors/gold/powerups/achievements.ts"),
				i = t("./src/reddit/selectors/telemetry.ts"),
				n = t("./src/reddit/selectors/user.ts"),
				u = t("./src/reddit/selectors/userFlair.ts");

			function o(e) {
				const r = i.subreddit(e),
					t = null == r ? void 0 : r.id;
				if (!t) return;
				const o = Object(u.d)(e, {
						subredditId: t
					}),
					c = Object(n.i)(e),
					l = c ? Object(s.d)(e, {
						subredditId: t,
						userId: c
					}) : void 0,
					a = {
						achievementFlairId: null == l ? void 0 : l.type,
						achievementFlairTitle: null == l ? void 0 : l.name
					};
				if (!(null == o ? void 0 : o.displaySettings.isUserEnabled) || !(null == o ? void 0 : o.applied)) return {
					isActive: !1,
					...a
				};
				const p = o.applied.templateId,
					E = Object(d.g)(o.applied);
				return E ? {
					id: p,
					title: E,
					isActive: !0,
					...a
				} : {
					isActive: !1,
					...a
				}
			}
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, r, t) {
			"use strict";
			var d = t("./node_modules/redux/es/redux.js"),
				s = t("./src/reddit/actions/gold/constants.ts");
			const i = {};
			var n = t("./node_modules/icepick/icepick.js"),
				u = t("./src/reddit/actions/economics/powerups/constants.ts");
			const o = {},
				c = {};
			r.a = Object(d.c)({
				subredditAchievements: (e = i, r) => {
					switch (r.type) {
						case s.pb:
							const {
								subredditId: t, subredditAchievementFlairs: d
							} = r.payload, i = d.reduce((e, r) => ({
								...e,
								[r.type]: r
							}), e[t] || {});
							return {
								...e, [t]: i
							};
						default:
							return e
					}
				},
				subredditUserAchievements: (e = o, r) => {
					var t, d, s;
					switch (r.type) {
						case u.d: {
							const {
								id: i,
								userAchievementFlairsByRedditorIds: n
							} = r.payload;
							let u = e[i] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: r
								} of n) {
								const i = r.map(({
										type: e
									}) => e),
									n = (null === (t = r.find(({
										isPreferred: e
									}) => e)) || void 0 === t ? void 0 : t.type) || (null === (d = r[0]) || void 0 === d ? void 0 : d.type),
									o = null === (s = r.find(({
										type: e
									}) => e.startsWith("POWERUPS_SUPPORTER"))) || void 0 === s ? void 0 : s.type;
								u = {
									...u,
									[e]: {
										achievementTypes: i,
										preferredType: n,
										supporterType: o
									}
								}
							}
							return {
								...e,
								[i]: u
							}
						}
						case u.f: {
							const {
								subredditId: t,
								userId: d,
								achievementType: s
							} = r.payload;
							return Object(n.setIn)(e, [t, d, "pendingPreferredType"], s)
						}
						case u.g: {
							const {
								subredditId: t,
								userId: d,
								achievementType: s
							} = r.payload;
							return Object(n.updateIn)(e, [t, d], e => ({
								...e,
								preferredType: s,
								pendingPreferredType: void 0
							}))
						}
						case u.e: {
							const {
								subredditId: t,
								userId: d
							} = r.payload;
							return Object(n.setIn)(e, [t, d, "pendingPreferredType"], void 0)
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = c, r) => {
					switch (r.type) {
						case u.h: {
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
		"./src/reddit/selectors/gold/powerups/achievements.ts": function(e, r, t) {
			"use strict";
			t.d(r, "c", (function() {
				return c
			})), t.d(r, "d", (function() {
				return a
			})), t.d(r, "e", (function() {
				return E
			})), t.d(r, "b", (function() {
				return v
			})), t.d(r, "a", (function() {
				return f
			}));
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var d = t("./node_modules/reselect/es/index.js"),
				s = t("./src/reddit/selectors/commentSelector.ts"),
				i = t("./src/reddit/selectors/experiments/econ/index.ts"),
				n = t("./src/lib/initializeClient/installReducer.ts"),
				u = t("./src/reddit/reducers/features/powerups/index.ts");
			Object(n.a)({
				features: {
					powerups: u.a
				}
			});
			const o = (e, {
					subredditId: r
				}) => {
					var t;
					return r ? null === (t = e.features.powerups.subredditAchievements) || void 0 === t ? void 0 : t[r] : null
				},
				c = (e, {
					subredditId: r,
					userId: t
				}) => {
					var d, s;
					return r && t ? null === (s = null === (d = e.features.powerups.subredditUserAchievements) || void 0 === d ? void 0 : d[r]) || void 0 === s ? void 0 : s[t] : null
				},
				l = Object(d.a)(c, e => (null == e ? void 0 : e.pendingPreferredType) || (null == e ? void 0 : e.preferredType)),
				a = Object(d.a)([o, l], (e, r) => e && r ? e[r] : null),
				p = Object(d.a)(c, e => null == e ? void 0 : e.supporterType),
				E = Object(d.a)([o, p], (e, r) => e && r ? e[r] : null),
				v = Object(d.a)([o, c], (e, r) => {
					if (!e) return [];
					const t = r ? r.achievementTypes : [],
						d = (null == r ? void 0 : r.pendingPreferredType) || (null == r ? void 0 : r.preferredType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !t.includes(e.type),
						isPreferred: e.type === d
					})).sort((e, r) => e.isLocked === r.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				f = (e, {
					commentId: r
				}) => {
					const t = Object(s.a)(e, {
							commentId: r
						}),
						d = null == t ? void 0 : t.subredditId,
						n = null == t ? void 0 : t.authorId;
					return !(!d || !n) && !(!((e, {
						subredditId: r,
						userId: t
					}) => {
						var d, s, i;
						return r && t ? null === (i = null === (s = null === (d = e.features.powerups) || void 0 === d ? void 0 : d.usersSupportedSubreddits) || void 0 === s ? void 0 : s[t]) || void 0 === i ? void 0 : i[r] : null
					})(e, {
						subredditId: d,
						userId: n
					}) || !Object(i.h)(e))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/getFlairData.23e273fd6c1ecdf6e403.js.map