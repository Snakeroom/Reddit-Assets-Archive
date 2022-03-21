// https://www.redditstatic.com/desktop2x/getFlairData.b702beb9335b837772bc.js
// Retrieved at 3/21/2022, 5:00:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["getFlairData"], {
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
				return u
			})), t.d(r, "f", (function() {
				return o
			})), t.d(r, "g", (function() {
				return p
			})), t.d(r, "e", (function() {
				return c
			})), t.d(r, "h", (function() {
				return l
			}));
			const d = 120,
				i = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				n = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				s = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIRS_LOADED",
				u = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				o = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_REQUESTED",
				p = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATED",
				c = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_FAILED",
				l = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_VISIBILITY_UPDATE"
		},
		"./src/reddit/helpers/trackers/features/getFlairData.ts": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "getFlairData", (function() {
				return o
			}));
			var d = t("./src/reddit/helpers/flair.ts"),
				i = t("./src/reddit/selectors/gold/powerups/flairs.ts"),
				n = t("./src/reddit/selectors/telemetry.ts"),
				s = t("./src/reddit/selectors/user.ts"),
				u = t("./src/reddit/selectors/userFlair.ts");

			function o(e) {
				const r = n.ib(e),
					t = null == r ? void 0 : r.id;
				if (!t) return;
				const o = Object(u.d)(e, {
						subredditId: t
					}),
					p = Object(s.i)(e),
					c = p ? Object(i.g)(e, {
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
			var u = t("./node_modules/icepick/icepick.js"),
				o = t("./src/reddit/actions/economics/powerups/constants.ts");
			const p = {},
				c = e => {
					var r, t;
					return (null === (r = e.find(({
						isPreferred: e
					}) => e)) || void 0 === r ? void 0 : r.type) || (null === (t = e[0]) || void 0 === t ? void 0 : t.type)
				},
				l = {};
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
								u = d.filter(n.a).map(e => e.type),
								o = d.filter(n.b).map(e => e.type);
							return {
								...e, [t]: {
									flairsByType: s,
									achievementTypes: u,
									supporterTypes: o
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = p, r) => {
					switch (r.type) {
						case o.d: {
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
									u = s.filter(n.b),
									o = u.map(({
										type: e
									}) => e),
									p = c(t),
									l = c(u);
								i = {
									...i,
									[e]: {
										achievementTypes: d,
										supporterTypes: o,
										preferredAchievementType: p,
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
						case o.f: {
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
						case o.g: {
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
						case o.e: {
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
						case o.h: {
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
						case o.i: {
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
				return p
			})), t.d(r, "h", (function() {
				return c
			})), t.d(r, "g", (function() {
				return l
			})), t.d(r, "i", (function() {
				return a
			})), t.d(r, "j", (function() {
				return v
			})), t.d(r, "b", (function() {
				return f
			})), t.d(r, "c", (function() {
				return y
			})), t.d(r, "e", (function() {
				return E
			})), t.d(r, "d", (function() {
				return _
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
			const u = (e, {
					subredditId: r
				}) => {
					var t;
					return r ? null === (t = e.features.powerups.subredditPowerupsFlairs) || void 0 === t ? void 0 : t[r] : null
				},
				o = (e, {
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
				y = Object(d.a)([u, p], (e, r) => {
					if (!e || !r) return null;
					const {
						supporterTypes: t,
						achievementTypes: d,
						flairsByType: i
					} = e, {
						supporterTypes: n,
						achievementTypes: s,
						preferredSupporterType: u,
						preferredAchievementType: o,
						pendingSupporterType: p,
						pendingAchievementType: c
					} = r;
					return {
						supporterFlairs: T(t, n, i, p || u),
						achievementFlairs: T(d, s, i, c || o)
					}
				}),
				E = Object(d.a)([p], e => !!e && e.isHidden),
				_ = Object(d.a)([u, p, v], (e, r, t) => {
					if (!e || !r) return [];
					const d = r.achievementTypes.map(r => e.flairsByType[r]);
					return t ? [t, ...d] : d
				}),
				T = (e, r, t, d) => e.map(e => ({
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/getFlairData.b702beb9335b837772bc.js.map