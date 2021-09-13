// https://www.redditstatic.com/desktop2x/getFlairData.f99747ed0d1870244d71.js
// Retrieved at 9/13/2021, 3:50:09 PM by Reddit Dataminer v1.0.0
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
				n = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIRS_LOADED",
				u = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				o = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_REQUESTED",
				c = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATED",
				l = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_FAILED"
		},
		"./src/reddit/helpers/trackers/features/getFlairData.ts": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "getFlairData", (function() {
				return o
			}));
			var d = t("./src/reddit/helpers/flair.ts"),
				s = t("./src/reddit/selectors/gold/powerups/flairs.ts"),
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
					v = Object(d.g)(o.applied);
				return v ? {
					id: p,
					title: v,
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
			const i = e => e.type.startsWith("POWERUPS_SUPPORTER"),
				n = e => !i(e),
				u = {};
			var o = t("./node_modules/icepick/icepick.js"),
				c = t("./src/reddit/actions/economics/powerups/constants.ts");
			const l = {},
				a = e => {
					var r, t;
					return (null === (r = e.find(({
						isPreferred: e
					}) => e)) || void 0 === r ? void 0 : r.type) || (null === (t = e[0]) || void 0 === t ? void 0 : t.type)
				},
				p = {};
			r.a = Object(d.c)({
				subredditPowerupsFlairs: (e = u, r) => {
					switch (r.type) {
						case s.pb:
							const {
								subredditId: t, subredditAchievementFlairs: d
							} = r.payload;
							if (!(null == d ? void 0 : d.length)) return e;
							const u = d.reduce((e, r) => ({
									...e,
									[r.type]: r
								}), {}),
								o = d.filter(n).map(e => e.type),
								c = d.filter(i).map(e => e.type);
							return {
								...e, [t]: {
									flairsByType: u,
									achievementTypes: o,
									supporterTypes: c
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = l, r) => {
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
								const t = r.filter(n),
									d = t.map(({
										type: e
									}) => e),
									u = r.filter(i),
									o = u.map(({
										type: e
									}) => e),
									c = a(t),
									l = a(u);
								s = {
									...s,
									[e]: {
										achievementTypes: d,
										supporterTypes: o,
										achievementDisplayType: c,
										supporterDisplayType: l
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
								achievementType: s
							} = r.payload;
							return Object(o.setIn)(e, [t, d, "pendingPreferredType"], s)
						}
						case c.g: {
							const {
								subredditId: t,
								userId: d,
								achievementType: s
							} = r.payload;
							return Object(o.updateIn)(e, [t, d], e => ({
								...e,
								achievementDisplayType: s,
								pendingPreferredType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: t,
								userId: d
							} = r.payload;
							return Object(o.setIn)(e, [t, d, "pendingPreferredType"], void 0)
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
			t.d(r, "c", (function() {
				return c
			})), t.d(r, "d", (function() {
				return a
			})), t.d(r, "e", (function() {
				return v
			})), t.d(r, "b", (function() {
				return f
			})), t.d(r, "a", (function() {
				return _
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
				l = Object(d.a)(c, e => (null == e ? void 0 : e.pendingPreferredType) || (null == e ? void 0 : e.achievementDisplayType)),
				a = Object(d.a)([o, l], (e, r) => e && r ? e[r] : null),
				p = Object(d.a)(c, e => null == e ? void 0 : e.supporterDisplayType),
				v = Object(d.a)([o, p], (e, r) => e && r ? e[r] : null),
				f = Object(d.a)([o, c], (e, r) => {
					if (!e) return [];
					const t = r ? [...r.supporterTypes, ...r.achievementTypes] : [],
						d = (null == r ? void 0 : r.pendingPreferredType) || (null == r ? void 0 : r.achievementDisplayType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !t.includes(e.type),
						isPreferred: e.type === d
					})).sort((e, r) => e.isLocked === r.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				_ = (e, {
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
					}) || !Object(i.i)(e))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/getFlairData.f99747ed0d1870244d71.js.map