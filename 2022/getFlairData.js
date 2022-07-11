// https://www.redditstatic.com/desktop2x/getFlairData.18d3dbf4b24bc018cfe6.js
// Retrieved at 7/11/2022, 3:10:11 PM by Reddit Dataminer v1.0.0
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
				return c
			})), t.d(r, "e", (function() {
				return p
			})), t.d(r, "h", (function() {
				return l
			}));
			const d = 120,
				i = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				n = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				s = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIRS_LOADED",
				u = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				o = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_REQUESTED",
				c = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATED",
				p = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_FAILED",
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
				const r = n.hb(e),
					t = null == r ? void 0 : r.id;
				if (!t) return;
				const o = Object(u.d)(e, {
						subredditId: t
					}),
					c = Object(s.i)(e),
					p = c ? Object(i.f)(e, {
						subredditId: t,
						userId: c
					}) : void 0,
					l = {
						achievementFlairId: null == p ? void 0 : p.type,
						achievementFlairTitle: null == p ? void 0 : p.name
					};
				if (!(null == o ? void 0 : o.displaySettings.isUserEnabled) || !(null == o ? void 0 : o.applied)) return {
					isActive: !1,
					...l
				};
				const a = o.applied.templateId,
					f = Object(d.g)(o.applied);
				return f ? {
					id: a,
					title: f,
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
			const c = {},
				p = e => {
					var r, t;
					return (null === (r = e.find(e => {
						let {
							isPreferred: r
						} = e;
						return r
					})) || void 0 === r ? void 0 : r.type) || (null === (t = e[0]) || void 0 === t ? void 0 : t.type)
				},
				l = {};
			r.a = Object(d.c)({
				subredditPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
						r = arguments.length > 1 ? arguments[1] : void 0;
					switch (r.type) {
						case i.nb:
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
				subredditUserPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
						r = arguments.length > 1 ? arguments[1] : void 0;
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
									d = t.map(e => {
										let {
											type: r
										} = e;
										return r
									}),
									u = s.filter(n.b),
									o = u.map(e => {
										let {
											type: r
										} = e;
										return r
									}),
									c = p(t),
									l = p(u);
								i = {
									...i,
									[e]: {
										achievementTypes: d,
										supporterTypes: o,
										preferredAchievementType: c,
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
				usersSupportedSubreddits: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
						r = arguments.length > 1 ? arguments[1] : void 0;
					switch (r.type) {
						case o.i: {
							let t = {};
							return r.payload.forEach(e => {
								const r = e.id,
									d = e.powerups;
								if (!r || !d) return;
								const i = d.supportedSubreddits.filter(e => {
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
			t.d(r, "e", (function() {
				return c
			})), t.d(r, "g", (function() {
				return p
			})), t.d(r, "f", (function() {
				return l
			})), t.d(r, "h", (function() {
				return a
			})), t.d(r, "i", (function() {
				return f
			})), t.d(r, "b", (function() {
				return v
			})), t.d(r, "d", (function() {
				return E
			})), t.d(r, "c", (function() {
				return _
			})), t.d(r, "a", (function() {
				return S
			}));
			var d = t("./node_modules/reselect/es/index.js"),
				i = t("./src/reddit/selectors/commentSelector.ts"),
				n = t("./src/lib/initializeClient/installReducer.ts"),
				s = t("./src/reddit/reducers/features/powerups/index.ts");
			Object(n.a)({
				features: {
					powerups: s.a
				}
			});
			const u = (e, r) => {
					let {
						subredditId: t
					} = r;
					var d;
					return t ? null === (d = e.features.powerups.subredditPowerupsFlairs) || void 0 === d ? void 0 : d[t] : null
				},
				o = (e, r) => {
					let {
						subredditId: t
					} = r;
					var d, i;
					return t ? null === (i = null === (d = e.features.powerups.subredditPowerupsFlairs) || void 0 === d ? void 0 : d[t]) || void 0 === i ? void 0 : i.flairsByType : null
				},
				c = (e, r) => {
					let {
						subredditId: t,
						userId: d
					} = r;
					var i, n;
					return t && d ? null === (n = null === (i = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === i ? void 0 : i[t]) || void 0 === n ? void 0 : n[d] : null
				},
				p = Object(d.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				l = Object(d.a)([o, p], (e, r) => e && r ? e[r] : null),
				a = Object(d.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				f = Object(d.a)([o, a], (e, r) => e && r ? e[r] : null),
				v = Object(d.a)([u, c], (e, r) => {
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
						pendingSupporterType: c,
						pendingAchievementType: p
					} = r;
					return {
						supporterFlairs: y(t, n, i, c || u),
						achievementFlairs: y(d, s, i, p || o)
					}
				}),
				E = Object(d.a)([c], e => !!e && e.isHidden),
				_ = Object(d.a)([u, c, f], (e, r, t) => {
					if (!e || !r) return [];
					const d = r.achievementTypes.map(r => e.flairsByType[r]);
					return t ? [t, ...d] : d
				}),
				y = (e, r, t, d) => e.map(e => ({
					...t[e],
					isLocked: !r.includes(e),
					isPreferred: e === d
				})).sort((e, r) => e.isLocked === r.isLocked ? 0 : e.isLocked ? 1 : -1),
				S = (e, r) => {
					let {
						commentId: t
					} = r;
					const d = Object(i.b)(e, {
							commentId: t
						}),
						n = null == d ? void 0 : d.subredditId,
						s = null == d ? void 0 : d.authorId;
					return !(!n || !s) && !!((e, r) => {
						let {
							subredditId: t,
							userId: d
						} = r;
						var i, n, s;
						return t && d ? null === (s = null === (n = null === (i = e.features.powerups) || void 0 === i ? void 0 : i.usersSupportedSubreddits) || void 0 === n ? void 0 : n[d]) || void 0 === s ? void 0 : s[t] : null
					})(e, {
						subredditId: n,
						userId: s
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/getFlairData.18d3dbf4b24bc018cfe6.js.map