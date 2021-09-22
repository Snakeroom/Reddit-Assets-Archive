// https://www.redditstatic.com/desktop2x/getFlairData.e48eb234586d50d91856.js
// Retrieved at 9/22/2021, 9:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["getFlairData"], {
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return d
			})), t.d(r, "b", (function() {
				return i
			})), t.d(r, "c", (function() {
				return s
			})), t.d(r, "d", (function() {
				return n
			})), t.d(r, "h", (function() {
				return u
			})), t.d(r, "f", (function() {
				return o
			})), t.d(r, "g", (function() {
				return p
			})), t.d(r, "e", (function() {
				return c
			}));
			const d = 120,
				i = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				s = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				n = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIRS_LOADED",
				u = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				o = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_REQUESTED",
				p = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATED",
				c = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_FAILED"
		},
		"./src/reddit/helpers/trackers/features/getFlairData.ts": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "getFlairData", (function() {
				return o
			}));
			var d = t("./src/reddit/helpers/flair.ts"),
				i = t("./src/reddit/selectors/gold/powerups/flairs.ts"),
				s = t("./src/reddit/selectors/telemetry.ts"),
				n = t("./src/reddit/selectors/user.ts"),
				u = t("./src/reddit/selectors/userFlair.ts");

			function o(e) {
				const r = s.subreddit(e),
					t = null == r ? void 0 : r.id;
				if (!t) return;
				const o = Object(u.d)(e, {
						subredditId: t
					}),
					p = Object(n.i)(e),
					c = p ? Object(i.e)(e, {
						subredditId: t,
						userId: p
					}) : void 0,
					l = {
						achievementFlairId: null == c ? void 0 : c.type,
						achievementFlairTitle: null == c ? void 0 : c.name
					};
				if (!(null == o ? void 0 : o.displaySettings.isUserEnabled) || !(null == o ? void 0 : o.applied)) return {
					isActive: !1,
					...l
				};
				const a = o.applied.templateId,
					v = Object(d.g)(o.applied);
				return v ? {
					id: a,
					title: v,
					isActive: !0,
					...l
				} : {
					isActive: !1,
					...l
				}
			}
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, r, t) {
			"use strict";
			var d = t("./node_modules/redux/es/redux.js"),
				i = t("./src/reddit/actions/gold/constants.ts");
			const s = e => (e => e.startsWith("POWERUPS_SUPPORTER"))(e.type),
				n = e => !s(e),
				u = {};
			var o = t("./node_modules/icepick/icepick.js"),
				p = t("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				l = e => {
					var r, t;
					return (null === (r = e.find(({
						isPreferred: e
					}) => e)) || void 0 === r ? void 0 : r.type) || (null === (t = e[0]) || void 0 === t ? void 0 : t.type)
				},
				a = {};
			r.a = Object(d.c)({
				subredditPowerupsFlairs: (e = u, r) => {
					switch (r.type) {
						case i.pb:
							const {
								subredditId: t, subredditAchievementFlairs: d
							} = r.payload;
							if (!(null == d ? void 0 : d.length)) return e;
							const u = d.reduce((e, r) => ({
									...e,
									[r.type]: r
								}), {}),
								o = d.filter(n).map(e => e.type),
								p = d.filter(s).map(e => e.type);
							return {
								...e, [t]: {
									flairsByType: u,
									achievementTypes: o,
									supporterTypes: p
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = c, r) => {
					switch (r.type) {
						case p.d: {
							const {
								id: t,
								userAchievementFlairsByRedditorIds: d
							} = r.payload;
							let i = e[t] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: r
								} of d) {
								const t = r.filter(n),
									d = t.map(({
										type: e
									}) => e),
									u = r.filter(s),
									o = u.map(({
										type: e
									}) => e),
									p = l(t),
									c = l(u);
								i = {
									...i,
									[e]: {
										achievementTypes: d,
										supporterTypes: o,
										preferredAchievementType: p,
										preferredSupporterType: c
									}
								}
							}
							return {
								...e,
								[t]: i
							}
						}
						case p.f: {
							const {
								subredditId: t,
								userId: d,
								achievementFlairType: i,
								supporterFlairType: s
							} = r.payload;
							return Object(o.updateIn)(e, [t, d], e => ({
								...e,
								pendingAchievementType: i,
								pendingSupporterType: s
							}))
						}
						case p.g: {
							const {
								subredditId: t,
								userId: d,
								achievementFlairType: i,
								supporterFlairType: s
							} = r.payload;
							return Object(o.updateIn)(e, [t, d], e => ({
								...e,
								preferredAchievementType: i,
								preferredSupporterType: s,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case p.e: {
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
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = a, r) => {
					switch (r.type) {
						case p.h: {
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
			t.d(r, "d", (function() {
				return p
			})), t.d(r, "f", (function() {
				return c
			})), t.d(r, "e", (function() {
				return l
			})), t.d(r, "h", (function() {
				return a
			})), t.d(r, "g", (function() {
				return v
			})), t.d(r, "b", (function() {
				return f
			})), t.d(r, "c", (function() {
				return y
			})), t.d(r, "a", (function() {
				return E
			}));
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var d = t("./node_modules/reselect/es/index.js"),
				i = t("./src/reddit/selectors/commentSelector.ts"),
				s = t("./src/reddit/selectors/experiments/econ/index.ts"),
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
					var t, d;
					return r ? null === (d = null === (t = e.features.powerups.subredditPowerupsFlairs) || void 0 === t ? void 0 : t[r]) || void 0 === d ? void 0 : d.flairsByType : null
				},
				p = (e, {
					subredditId: r,
					userId: t
				}) => {
					var d, i;
					return r && t ? null === (i = null === (d = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === d ? void 0 : d[r]) || void 0 === i ? void 0 : i[t] : null
				},
				c = Object(d.a)(p, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				l = Object(d.a)([o, c], (e, r) => e && r ? e[r] : null),
				a = Object(d.a)(p, e => null == e ? void 0 : e.preferredSupporterType),
				v = Object(d.a)([o, a], (e, r) => e && r ? e[r] : null),
				f = Object(d.a)([o, p], (e, r) => {
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
				y = Object(d.a)([(e, {
					subredditId: r
				}) => {
					var t;
					return r ? null === (t = e.features.powerups.subredditPowerupsFlairs) || void 0 === t ? void 0 : t[r] : null
				}, p], (e, r) => {
					if (!e || !r) return null;
					const {
						supporterTypes: t,
						achievementTypes: d,
						flairsByType: i
					} = e, {
						supporterTypes: s,
						achievementTypes: n,
						preferredSupporterType: u,
						preferredAchievementType: o,
						pendingSupporterType: p,
						pendingAchievementType: c
					} = r;
					return {
						supporterFlairs: _(t, s, i, p || u),
						achievementFlairs: _(d, n, i, c || o)
					}
				}),
				_ = (e, r, t, d) => e.map(e => ({
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
						n = null == t ? void 0 : t.authorId;
					return !(!d || !n) && !(!((e, {
						subredditId: r,
						userId: t
					}) => {
						var d, i, s;
						return r && t ? null === (s = null === (i = null === (d = e.features.powerups) || void 0 === d ? void 0 : d.usersSupportedSubreddits) || void 0 === i ? void 0 : i[t]) || void 0 === s ? void 0 : s[r] : null
					})(e, {
						subredditId: d,
						userId: n
					}) || !Object(s.i)(e))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/getFlairData.e48eb234586d50d91856.js.map