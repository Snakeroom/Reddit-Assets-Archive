// https://www.redditstatic.com/desktop2x/AuthorHovercard.ef16b492848fcd0c7bf5.js
// Retrieved at 8/9/2022, 9:50:08 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/lib/constants/colors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = {
				alien500: "#3690ea",
				alien600: "#006dc6",
				berry300: "#e4abff",
				berry500: "#b44ac0",
				berry600: "#9c3cac",
				mango500: "#ffd635",
				mango600: "#ff6600",
				mint600: "#009eaa",
				narwhal100: "#f1f23f5",
				narwhal200: "#e9ebed",
				narwhal300: "#d4d7d9",
				narwhal600: "#989ca0",
				narwhal700: "#898d90",
				orangeRed600: "#fb133a",
				orangeRed700: "#be0039",
				orca50: "#5a5c5e",
				orca200: "#464748",
				orca300: "#3a3a3a",
				orca600: "#242424",
				orca700: "#1E1E1E",
				periwinkle300: "#94b3ff",
				periwinkle500: "#6a5cff",
				periwinkle600: "#5349da",
				sakura500: "#ff3881",
				error: "#ea0027",
				white: "#ffffff",
				black: "#000000",
				nightTone1: "#282829",
				nightTone2: "#343536",
				nightTone3: "#3A3A3C",
				nightTone4: "#D8DADC",
				nightTone5: "#1A232C",
				nightTone6: "#29292A"
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/intlSupport.ts");

			function s(e) {
				let {
					showDay: t,
					useUtc: n,
					shortMonths: s,
					locale: i = r.DEFAULT_LOCALE
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const d = new Date(e * a.Sb);
				return o.a ? new Intl.DateTimeFormat(i, {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(d) : d.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.DEFAULT_LOCALE;
				const n = e.toString().length > 10,
					a = new Date(e * (n ? 1 : 1e3));
				return a.toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return b
			}));
			const r = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__FAILED",
				a = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				o = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				s = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
				i = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__LOADED",
				d = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__PENDING",
				c = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED",
				l = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_FAILED",
				u = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_LOADED",
				m = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_PENDING",
				b = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_UPDATED"
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "b", (function() {
				return k
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var l = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(a.a)(o.c),
				b = Object(a.a)(o.b),
				p = Object(a.a)(o.a),
				f = Object(a.a)(o.f),
				h = Object(a.a)(o.e),
				v = Object(a.a)(o.d),
				x = e => async (t, n, r) => {
					let {
						gqlContext: a
					} = r;
					e === l.a.Push ? t(f()) : t(m()), await async function(e, t, n) {
						const r = await Object(i.a)(e(), {
							channel: t
						});
						if (r.ok && r.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									r = n && n.sections;
								if (r) return function(e) {
									const t = {},
										n = [];
									let r = {},
										a = [];
									const o = e => {
										const {
											rowIds: o,
											rowsCollection: s
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let r = 0; r < e.rows.length; r++) {
													const a = e.rows[r],
														o = a.messageType;
													t.push(o), n[o] = a
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										r = {
											...r,
											...s
										}, a = [...a, ...o];
										const i = e.id;
										n.push(i), t[i] = {
											...e,
											rows: o
										}
									};
									for (let s = 0; s < e.length; s++) o(e[s]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: r,
											allIds: a
										}
									}
								}(r)
							}(r.body);
							t === l.a.Push ? n(h(e)) : n(b(e))
						} else t === l.a.Push ? n(v({
							error: r.error
						})) : n(p({
							error: r.error
						}))
					}(a, e, t)
				};
			const I = Object(a.a)(o.g),
				_ = e => async (t, n, a) => {
					let {
						gqlContext: o
					} = a;
					(await Object(i.b)(o(), e)).ok ? (O(t, e), function(e) {
						e(Object(s.f)({
							kind: u.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(s.f)({
							kind: u.b.Error,
							text: r.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function O(e, t) {
				e(I({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const g = Object(a.a)(o.j),
				C = Object(a.a)(o.i),
				N = Object(a.a)(o.k),
				j = Object(a.a)(o.h),
				k = e => async (t, n, r) => {
					let {
						gqlContext: a
					} = r;
					var o, i;
					t(g());
					const l = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(a(), e);
					if (null === (i = null === (o = l.error) || void 0 === o ? void 0 : o.fields) || void 0 === i ? void 0 : i.length) return t(j({
						error: l.error
					})), void t(Object(s.d)());
					if (l.ok && l.body) {
						const e = l.body,
							n = e && e.data,
							r = n && n.identity && n.identity.subscribedSubreddits,
							a = r && r.pageInfo,
							o = (r && r.edges).map(e => e.node);
						t(C({
							nodes: o,
							pageInfo: a
						}))
					}
				}
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/lib/notifications/index.ts"),
				a = n("./src/lib/notifications/constants.ts"),
				o = n("./src/lib/notifications/featureFlags.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts");
			const d = e => s.d.pushNotificationsBrowserSupported(e) ? Object(o.a)() : a.c.BrowserUnsupported,
				c = e => {
					switch (e) {
						case a.a.Denied:
							i.nb(!1), Object(r.c)();
							break;
						case a.a.Default:
						case a.a.Granted:
							i.nb(!0), Object(r.c)();
							break;
						case a.a.Closed:
							i.nb(!0)
					}
				}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return re
			})), n.d(t, "b", (function() {
				return se
			})), n.d(t, "e", (function() {
				return ie
			})), n.d(t, "a", (function() {
				return de
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/get.js"),
				o = n.n(a),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/apiRequestState.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/subreddit.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				h = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const x = (e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
				endpoint: Object(h.a)(Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.jb.GET,
				data: n
			});
			var I = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				_ = n("./src/reddit/models/SubredditModeration/index.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/bannedUser.ts"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/actions/subredditModeration/constants.ts"),
				E = n("./src/lib/initializeClient/installReducer.ts"),
				y = n("./node_modules/redux/es/redux.js");
			var w = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.s:
					case k.r:
						return null;
					case k.q:
						return t.payload;
					default:
						return e
				}
			};
			const S = {};
			var P = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.s: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(_.e)(n, r);
							return {
								...e,
								[a]: !0
							}
						}
						case k.r:
						case k.q: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, a = Object(_.e)(n, r);
							return {
								...e,
								[a]: !1
							}
						}
						default:
							return e
					}
				},
				U = Object(y.c)({
					error: w,
					pending: P
				});
			const A = {};
			var M = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.r: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, a = Object(_.e)(r, n);
							return {
								...e,
								[a]: !0
							}
						}
						default:
							return e
					}
				},
				T = n("./src/reddit/actions/inContextModeration.ts");
			var B = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.a:
						return t.payload;
					default:
						return e
				}
			};
			const L = {};
			var D = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.r: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				F = n("./node_modules/icepick/icepick.js");
			const H = {};
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.p:
					case k.r: {
						const {
							subredditId: n,
							bannedUsers: r
						} = t.payload;
						return Object(F.merge)(e, {
							[n]: r
						})
					}
					case k.w: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(F.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var W = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.v:
					case k.u:
						return null;
					case k.t:
						return t.payload;
					default:
						return e
				}
			};
			var G = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.v:
							return !0;
						case k.u:
						case k.t:
							return !1;
						default:
							return e
					}
				},
				K = Object(y.c)({
					error: W,
					pending: G
				});
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.v:
						case k.t:
							return null;
						case k.u: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				V = Object(y.c)({
					api: K,
					result: Z
				});
			const q = {};
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.r: {
							const {
								subredditId: n,
								bannedUserIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case k.w: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case k.p: {
							const {
								subredditId: n,
								bannedUserIds: r
							} = t.payload, a = r[0];
							return a && e[n] && -1 === e[n].indexOf(a) ? {
								[n]: [a, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				z = Object(y.c)({
					api: U,
					fetchedTokens: M,
					inContext: B,
					loadMore: D,
					models: R,
					search: V,
					userOrder: J
				});
			Object(E.a)({
				features: {
					banned: z
				}
			});
			const Q = Object(s.a)(k.s),
				X = Object(s.a)(k.r),
				Y = Object(s.a)(k.q),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, r, a) => {
						let {
							apiContext: o
						} = a;
						const s = r(),
							i = t.after || "",
							d = Object(_.e)(e, i),
							c = s.features.banned.fetchedTokens[d];
						if (s.features.banned.api.pending[d] || c) return;
						n(Q({
							subredditId: e,
							fetchedToken: i
						}));
						const l = s.subreddits.models[e].name,
							u = await x(o(), l, t);
						u.ok ? n(X({
							...u.body,
							fetchedToken: i
						})) : n(Y({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				ee = Object(s.a)(k.v),
				te = Object(s.a)(k.u),
				ne = Object(s.a)(k.t),
				re = (e, t) => async (n, r, a) => {
					let {
						apiContext: o
					} = a;
					const s = r().subreddits.models[e].name,
						i = {
							username: Object(I.a)(t)
						};
					n(ee());
					const d = await x(o(), s, i);
					d.ok ? n(te(d.body)) : n(ne(d.error))
				}, ae = Object(s.a)(k.p), oe = Object(s.a)(k.w), se = (e, t, n) => async (a, s, d) => {
					let {
						apiContext: c
					} = d;
					const u = s(),
						h = u.subreddits.models[e].url,
						v = u.subreddits.models[e].name;
					t.username = Object(I.a)(t.username), a(Object(i.h)(n));
					const _ = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.jb.POST,
						data: {
							api_type: "json",
							ban_reason: n.reason,
							ban_message: n.banMessage,
							duration: n.duration,
							name: n.username,
							note: n.modNote,
							ban_context: n.contextId,
							type: "banned"
						}
					}))(c(), h, t);
					if (_.ok) {
						a(Object(i.e)(n));
						const e = {
							username: t.username
						};
						a(Object(l.f)({
							kind: O.b.SuccessMod,
							text: r.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const o = await x(c(), v, e);
						o.ok && a(ae(o.body))
					} else {
						a(Object(i.f)(n, _.error));
						const e = o()(_, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(l.f)({
							kind: O.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, a, s) => {
					let {
						apiContext: i
					} = s;
					const d = a().subreddits.models[e].url,
						c = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(i(), d, t);
					if (c.ok) n(oe({
						subredditId: e,
						userId: t
					})), n(Object(l.f)({
						kind: O.b.SuccessMod,
						text: r.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = o()(c, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: O.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (n, r) => {
					const a = r();
					await Promise.all([(async () => {
						if (!Object(g.b)(u.a.BAN_USER)(a) && !Object(N.S)(a, {
								subredditId: e
							})) {
							const t = Object(N.V)(a, {
								subredditId: e
							});
							await n(Object(c.o)(t.name))
						}
					})(), (async () => {
						const r = Object(j.Ab)(a, {
							userName: t
						});
						if (!r) return;
						const o = Object(C.h)(a, {
							subredditId: e
						});
						o && o[r.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(d.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/actions/subredditModeration/mute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "a", (function() {
				return w
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./node_modules/lodash/get.js"),
				s = n.n(o),
				i = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const m = (e, t, n) => Object(d.a)(Object(c.a)(e, [l.a]), {
				endpoint: Object(u.a)(`${e.apiUrl}/api/v1/${t}/muted`),
				method: i.jb.GET,
				data: n
			});
			var b = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				p = n("./src/reddit/models/SubredditModeration/index.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				v = n("./src/reddit/actions/subredditModeration/constants.ts");
			const x = Object(a.a)(v.Y),
				I = Object(a.a)(v.W),
				_ = Object(a.a)(v.V),
				O = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, r, a) => {
						let {
							apiContext: o
						} = a;
						const s = r(),
							i = t.after || "",
							d = Object(p.e)(e, i),
							c = s.pages.modHub.muted.fetchedTokens[d];
						if (s.pages.modHub.muted.api.pending[d] || c) return;
						n(x({
							subredditId: e,
							fetchedToken: i
						}));
						const l = s.subreddits.models[e].name,
							u = await m(o(), l, t);
						u.ok ? n(I({
							...u.body,
							fetchedToken: i
						})) : n(_({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				g = Object(a.a)(v.bb),
				C = Object(a.a)(v.ab),
				N = Object(a.a)(v.Z),
				j = (e, t) => async (n, r, a) => {
					let {
						apiContext: o
					} = a;
					const s = r().subreddits.models[e].name,
						i = {
							username: Object(b.a)(t)
						};
					n(g());
					const d = await m(o(), s, i);
					d.ok ? n(C(d.body)) : n(N(d.error))
				}, k = Object(a.a)(v.X), E = Object(a.a)(v.cb), y = (e, t) => async (n, a, o) => {
					let {
						apiContext: u
					} = o;
					const m = a().subreddits.models[e].url,
						b = await ((e, t, n) => Object(d.a)(Object(c.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: i.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "muted"
							}
						}))(u(), m, t);
					if (b.ok) n(E({
						subredditId: e,
						userId: t
					}));
					else {
						const e = s()(b, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(h.f)({
							kind: f.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, w = (e, t, n) => async (a, o, u) => {
					let {
						apiContext: p
					} = u;
					const v = o(),
						x = v.subreddits.models[e].url,
						I = v.subreddits.models[e].name;
					t = Object(b.a)(t);
					const _ = await ((e, t, n, r) => Object(d.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: i.jb.POST,
						data: {
							api_type: "json",
							name: n,
							note: r,
							type: "muted"
						}
					}))(p(), x, t, n);
					if (_.ok) {
						const e = {
							username: t
						};
						a(Object(h.f)({
							kind: f.b.SuccessMod,
							text: r.fbt._("Successfully muted a user", null, {
								hk: "2ypyuL"
							})
						}));
						const n = await m(p(), I, e);
						n.ok && a(k(n.body))
					} else {
						const e = s()(_, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(h.f)({
							kind: f.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}
		},
		"./src/reddit/components/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_2xNNl6uDn-la14kNSY-HlG",
				adminIcon: "_39nUIeq_tsYlKJUODkYXBu"
			}
		},
		"./src/reddit/components/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/Admin/index.m.less"),
				d = n.n(i),
				c = n("./src/lib/constants/icons.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts");
			const b = e => Object(m.c)(e, {
				experimentEligibilitySelector: m.a,
				experimentName: u.a
			});
			t.a = () => {
				return Object(s.e)(b) ? o.a.createElement("span", {
					className: d.a.admin
				}, r.fbt._("Admin", null, {
					hk: "3MyAnD"
				})) : o.a.createElement(l.a, {
					name: c.a.admin,
					isFilled: !0,
					className: d.a.adminIcon,
					title: r.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				})
			}
		},
		"./src/reddit/components/AnonymousSnoovatar/index.m.less": function(e, t, n) {
			e.exports = {
				anonymousSnoovatar: "_20-K6l0lfYbSa7us2I9PHH"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/Icon/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "bB2dVpEvw7ZW_71r6UOG8"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metadata: "Q0CnEiiTYWW90JwBPi-3X",
				deleteButton: "_3xGgEou3qoyvyHtklgaVwR",
				operator: "_3mkZJiG1HSCl4dWJD3SJX7",
				createdDate: "_3DKC-l35UqIQdbPaQm6M_T"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/Note/index.m.less": function(e, t, n) {
			e.exports = {
				modNote: "mmlDYQNFwnacB-N5KZvv_",
				header: "_4ra95MsgSxPMAVM7PYu-s",
				labelIcon: "_1saX7rKk2uqdc-BaHVjS1I",
				label: "-tYwDwCFmjp1G1ManCHOz",
				note: "MRqZyzVQKqS7T9bLbg4NY",
				link: "gSyoge47CLjhrl32kLMGn",
				linkIcon: "_1MN__3DySGLJpLjQoS8Fuk"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/Preview/index.m.less": function(e, t, n) {
			e.exports = {
				preview: "_2RVfC6XoxmZ5L6yGdjU91R",
				content: "_3ocjiEI9r7MkUsvZO52el7",
				title: "_1j_ZTH4J8r-tNYrNGn_bed",
				meta: "a0R63ORQiAFMcpzP9Im4F",
				thumbnail: "_2_LP9oUG6aMx3RyIsOfCFZ",
				thumbnailImage: "nIP-thAc2i064e0xdkn2u"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/Title/index.m.less": function(e, t, n) {
			e.exports = {
				subTitle: "_2LOJP8maz9pW8zXyMtz5sa",
				title: "_2ghDKWDpLbqs07Hculyc4f"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "CaQnYM63MUs5K_AUdPb4I",
				metaDataDelete: "_3vGkMGJX0nPPypdPZGvDMy",
				iconWrapper: "_24S3uB-ZwBcv31bRddztjA",
				icon: "-QuBNgk76BLP5G6G4JQB0",
				content: "_3AdrMbwRSdnVCKNxuFQ2Ae",
				title: "_2LpAnZOGjbvru1cU_RpprE",
				note: "_1gJlmWV6LFLzxY2nTlIjZF",
				preview: "MR_BMgork7-7u12v1SLQl"
			}
		},
		"./src/reddit/components/CCM/ModUserNotesCreationForm/index.m.less": function(e, t, n) {
			e.exports = {
				meta: "_3LK6PIrYUOTakj8Oa9zfeG",
				labelIcon: "_1mGSMIJiFUj6-wF_hy95Pw",
				labelContainer: "_1DqxMhjEHO-PDFRloAL02h",
				labelText: "_2ABDDZ2KYLN6XI0r7v2BZ",
				dropdownButton: "_3YOQ8MrcsaFOPnrJ9vJ38N",
				modnotesOptionFont: "wuQr-NOAF8Ifnfl2i6p9I",
				menuItems: "KQvgghskz0EWs7oUOt5cY",
				menuOption: "_1rGSFi2ie8yFVlUyKQh_Gg",
				checkboxContainer: "_3RSENeTp3TB1S5Ebv4F7Wp",
				checkbox: "_2nMCU8IlwLCEwZXDL58OgL",
				textareaContainer: "_2xiccSlpB0M1gMRclXYbtH",
				textarea: "_3IL33qLZEq_kMic2xNXqVx",
				isNightMode: "_AaroTNaPfLTTd3XBnzfR",
				sendButton: "_1L8QdOb7z1QnQ3Pt0c6CWE",
				iconSend: "_3u5AC03L-pMeyBy-khCaia",
				infoTooltip: "_2rwCe3cHmxw26sTZWV6kzJ",
				tooltipDescription: "_2l9R2_P526f55NMhnBLSp3",
				isDisabled: "UpDN41nqog9YftJ4D8XKL"
			}
		},
		"./src/reddit/components/CCM/ModUserNotesFilter/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_3Qj4lxAJmSAmvzZb0eGrz8",
				backWrapper: "_16JGWUWt6p7BC5jcVlM0Mi",
				typesWrapper: "_2Qaq7jENWKWxoPtO726HMq",
				backButton: "_3U6m3nQRN1ZbweXmCL7SXa",
				subredditsWrapper: "vJ02X8S36wHe7HQpeXwFZ",
				subreddits: "_188PdsfZXzf4aAwvswpajb",
				menuItems: "_2wW26j56zDhw9q7Kf-kNLg",
				subredditIcon: "_1EOsnEFJscM_E3klUy44OG",
				subredditIconInDropdown: "_3bUA6CuqXJm7QpEsxwShR9",
				types: "_1tn7-H1f65OAs2iaDdRtHJ",
				dropdownButton: "_1qouEKkYk1WW0Cv-m9SRWc",
				menuOption: "_2b0kgVBRKg4jZMW9zXrnf",
				typeCountIconInDropdown: "_2Lj2TZbibxKaigLPgsSHsg",
				typeCountIconInDropdownInner: "Tp3zQBPZ2SeMhW2ViijAT"
			}
		},
		"./src/reddit/components/CCM/ModUserNotesList/EmptyList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2PXMmZbuLWhc02IiNu8l3u",
				icon: "J_nQuCRg09QbZrmCOf7W0",
				mainLine: "_3tdpXeaGsCYUEOW1Tko1e7",
				miscLine: "_1t8aDepR0l-g-5GgS83NKD"
			}
		},
		"./src/reddit/components/CCM/ModUserNotesList/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_3Hl9Z-fVhvX5HdGlKr91wB",
				icon: "_1xa6wIO9s2wvZOofQEctTK",
				content: "L3M_zrCEd_GzIgSt6pVEh",
				title: "_1JE6dH6dlP16-rDD0FHloc",
				body: "_2Wqt24_s4z08PwNZWuqZA5",
				meta: "_3S_7rAW6EUGArYDHXP0EC4"
			}
		},
		"./src/reddit/components/CCM/ModUserNotesList/PlaceholderList/index.m.less": function(e, t, n) {
			e.exports = {
				placeholder: "_381kKRTi7ZSebjoGPOqX_a"
			}
		},
		"./src/reddit/components/CCM/ModUserNotesList/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_39LeXGlb0gpoKt6FA4VwZ4",
				list: "_1I3aQLT0UPB1rtvXOUjiRH",
				placeholder: "_3-sGeUnsIgXQm_508XtRHY",
				noItems: "_1osKgUHuMPNNsYRF1Bd0_I",
				scrollGradient: "_72ObW2wBjbXoTSi59wOzl",
				isNightMode: "_2MqCtsP8hs56kDig68mUp4",
				visible: "_24AkSaJPPcm6Slwa5ld221"
			}
		},
		"./src/reddit/components/CCM/ModUserNotesWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_1DIByzTLNmffaPKGXlT51R",
				isNightMode: "MtFyFbAukLeze_nZ6RRTL",
				filters: "_1KZRkPAlAAyjDIEx5bCilQ",
				list: "_2Fk0BPi3Ad9gGP7iswG5nH",
				form: "_3cO6Ka7Pxa76xv_sjseMJQ"
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/chat/toggle.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(r || (r = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: n,
					className: a,
					sendEvent: s,
					contextId: i,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					eventSource: p,
					onClick: f,
					onAddUserToQuickReplyList: h,
					children: v,
					style: x
				} = e;
				return o.a.createElement(c.t, {
					onClick: e => {
						if (f && f(e), t(), p === r.awardNotification) return h();
						s(Object(l.b)(i))
					},
					className: a,
					text: n,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					style: x
				}, v)
			};
			u.displayName = "ChatButton";
			const m = Object(s.b)(null, (e, t) => {
				let {
					contextId: n,
					userId: r
				} = t;
				return {
					onStartChat: () => {
						e(Object(i.b)(r, n))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(i.a)(r))
					}
				}
			});
			t.b = m(Object(d.c)(u))
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				hideCaret: "dExJJiXRwxVrKsDJRWSQl",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/fastdom/index.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/selectors/tooltip.ts"),
				p = n("./src/reddit/components/ContentTooltip/index.m.less"),
				f = n.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const v = {
					height: 200,
					width: 200
				},
				x = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				I = Object(c.a)(e => {
					const {
						children: t,
						className: n,
						style: r,
						caretPosition: a,
						caretColor: s,
						onClick: i,
						hideCaret: c
					} = e;
					return o.a.createElement("div", {
						onClick: i,
						className: Object(d.a)(n, f.a.StyledTooltipContainer, {
							[f.a.caretOnTop]: "top" === a,
							[f.a.caretOnLeft]: "left" === a,
							[f.a.caretOnRight]: "right" === a,
							[f.a.caretOnBottom]: "bottom" === a,
							[f.a.hideCaret]: c
						}),
						style: {
							...r,
							"--contentTooltip-caretColor": s && s[a] ? s[a] : Object(m.a)(e).body
						}
					}, t)
				}),
				_ = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(b.b)(n)(e)
					}
				}),
				O = Object(u.a)(I, [r.a.Click, r.a.Keydown]),
				g = Object(s.b)(_);
			class C extends o.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = v
						} = this.props;
						l.a.read(() => {
							const n = document.getElementById(e);
							if (!n) return;
							const r = n.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let a = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									a = window.innerHeight - r.bottom > t.height;
									break;
								case "left":
									a = r.left > t.width;
									break;
								case "right":
									a = r.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									a = r.top > t.height
							}
							this.setState({
								position: a ? this.props.defaultTooltipPosition : x(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: n,
						caretPosition: r
					} = this.getPositions(e);
					return o.a.createElement(O, h({}, this.props, {
						caretPosition: r,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = g(C)
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(r.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(1), n.e("NftProfileUnit")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = a
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				profileCard: "eHsnwmpOgtfnBAgrWXQKq",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/ImageInput/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/models/ApiRequestState/index.ts"),
				u = n("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = n("./src/reddit/components/EditableImage/index.m.less"),
				b = n.n(m);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: n,
					className: r,
					isProfileCard: m,
					isLoading: p,
					imageUrl: f,
					onFileSelected: h
				} = e;
				const v = Object(o.e)(u.a);
				return a.a.createElement("div", {
					className: Object(s.a)(b.a.Container, r)
				}, a.a.createElement("label", {
					className: b.a.HitBox
				}, a.a.createElement("span", {
					className: b.a.ImageContainer,
					role: "presentation"
				}, f ? a.a.createElement("img", {
					alt: t,
					className: b.a.Image,
					src: f
				}) : n), a.a.createElement(i.a, {
					className: b.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						h(e, t)
					},
					isPending: v ? p : void 0
				}), !p && a.a.createElement("div", {
					className: Object(s.a)(b.a.EditButton, {
						[b.a.profileCard]: m
					})
				}, a.a.createElement(c.a, {
					name: "add_media",
					className: b.a.EditIcon
				}))), p && a.a.createElement(d.a, {
					className: b.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/snoovatarModal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/helpers/author.ts"),
				l = n("./src/reddit/helpers/isPost.ts"),
				u = n("./src/reddit/selectors/commentSelector.ts"),
				m = n("./src/reddit/selectors/gold/awardIcon.ts"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				p = n("./src/reddit/selectors/modUserNotes.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/profile.ts"),
				v = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/tooltip.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/selectors/userFlair.ts"),
				g = n("./src/reddit/selectors/userPrefs.ts"),
				C = n("./src/reddit/selectors/platform.ts"),
				N = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				j = n("./node_modules/fbt/lib/FbtPublic.js"),
				k = n("./src/config.ts"),
				E = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				y = n("./src/lib/lessComponent.tsx"),
				w = n("./src/lib/prettyPrintNumber/index.ts"),
				S = n("./src/reddit/components/Admin/index.tsx"),
				P = n("./src/reddit/components/ChatButton/index.tsx"),
				U = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				A = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				M = n("./src/reddit/components/SubscribeButton/index.tsx"),
				T = n("./src/reddit/components/UserIcon/index.tsx"),
				B = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/endpoints/profile/info.ts"),
				D = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				F = n("./src/reddit/icons/fonts/Info/index.tsx"),
				H = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				R = n("./src/reddit/models/Gold/Award.ts"),
				W = n("./src/reddit/models/User/index.ts"),
				G = n("./src/reddit/components/HumanDate/index.tsx"),
				K = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				Z = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				V = n("./src/reddit/actions/inContextModeration.ts"),
				q = n("./src/reddit/actions/modal.ts"),
				J = n("./src/reddit/actions/subredditModeration/ban.ts"),
				z = n("./src/reddit/constants/modals.ts"),
				Q = n("./src/reddit/components/Hovercards/helpers.ts"),
				X = n("./src/reddit/icons/fonts/index.tsx"),
				Y = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				$ = n("./src/reddit/selectors/bannedUser.ts"),
				ee = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), re = Object(s.c)({
				hasModMailPermissions: Object(b.b)(Y.c.mail),
				isUserBanned: (e, t) => !!Object($.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(_.Ab)(e, {
					userName: t.username
				})
			});
			class ae extends a.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: r,
						onUnbanUser: o,
						sendEvent: s,
						toggleBanModal: i,
						toggleMuteModal: d
					} = this.props;
					return a.a.createElement("div", {
						className: e
					}, r ? a.a.createElement(Q.a, {
						role: "button",
						onClick: () => {
							o(this.props.user.id), s(D.e(t))
						}
					}, a.a.createElement(X.a, {
						name: "ban",
						isFilled: !0,
						className: te.a.icon
					}), ne._("Unban User", null, {
						hk: "1aASyW"
					})) : a.a.createElement(Q.a, {
						role: "button",
						onClick: () => {
							i(), s(D.a(t))
						}
					}, a.a.createElement(X.a, {
						name: "ban",
						className: te.a.icon
					}), ne._("Ban User", null, {
						hk: "3OhuLx"
					})), n && a.a.createElement(Q.a, {
						role: "button",
						onClick: () => {
							d(), s(D.d(t))
						}
					}, a.a.createElement(X.a, {
						name: "mod_mute",
						className: te.a.icon
					}), ne._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var oe = Object(o.b)(re, (e, t) => {
					let {
						username: n,
						subredditId: r,
						contextId: a
					} = t;
					return {
						onUnbanUser: t => e(Object(J.e)(r, t)),
						requestUserBanInfo: () => e(Object(J.c)(r, {
							username: n
						})),
						toggleBanModal: () => {
							e(Object(V.c)({
								username: n,
								subredditId: r,
								contextId: a
							})), e(Object(J.a)(r, n))
						},
						toggleMuteModal: () => {
							e(Object(V.d)({
								username: n,
								subredditId: r,
								contextId: a
							})), e(Object(q.i)(z.a.MUTE_USER))
						}
					}
				})(ae),
				se = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var de = Object(o.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(se.g)(t.subredditId, t.username))
				}))(e => a.a.createElement(Q.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(D.c(e.contextId))
					}
				}, a.a.createElement(X.a, {
					name: "tag",
					className: te.a.icon
				}), ie._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ce = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				le = n.n(ce);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const me = y.a.wrapped(T.a, "UserIcon", le.a),
				be = y.a.wrapped(M.a, "SubscribeButton", le.a),
				pe = y.a.wrapped(P.b, "ChatButton", le.a),
				fe = y.a.wrapped(H.a, "PremiumIcon", le.a),
				he = y.a.wrapped(E.a, "UserNameLink", le.a),
				ve = y.a.div("UserNameMetaData", le.a),
				xe = y.a.div("MetaDataItem", le.a),
				Ie = y.a.div("Bullet", le.a),
				_e = y.a.div("UserNameContainer", le.a),
				Oe = y.a.div("KarmaGrid", le.a),
				ge = y.a.div("GenericKarma", le.a),
				Ce = y.a.a("InfoLink", le.a),
				Ne = y.a.div("KarmaCount", le.a),
				je = y.a.div("GenericKarmaLabel", le.a),
				ke = y.a.div("BannerImage", le.a),
				Ee = y.a.div("UserContainer", le.a),
				ye = y.a.div("BottomSpacer", le.a),
				we = y.a.div("Container", le.a),
				Se = e => a.a.createElement("div", null, a.a.createElement("div", null, a.a.createElement(he, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isGold && a.a.createElement(E.a, {
					to: "/premium"
				}, a.a.createElement(fe, null)), e.user.isEmployee && a.a.createElement(S.a, null)), a.a.createElement(ve, null, a.a.createElement(xe, null, `u/${e.userName}`, a.a.createElement(Ie, null, "•")), a.a.createElement(xe, null, (e.user.createdUtc || e.user.created) && a.a.createElement(G.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Pe = e => {
					const {
						user: {
							karma: t
						}
					} = e, n = {
						...L.a,
						...t
					};
					return a.a.createElement(Oe, null, a.a.createElement(ge, null, a.a.createElement(Ne, null, Object(w.b)(n.fromPosts)), a.a.createElement(je, null, j.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [j.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), a.a.createElement(ge, null, a.a.createElement(Ne, null, Object(w.b)(n.fromComments)), a.a.createElement(je, null, j.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [j.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))), a.a.createElement(ge, null, a.a.createElement(Ne, null, Object(w.b)(n.fromAwardsReceived)), a.a.createElement(je, null, j.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [j.fbt._plural(n.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), a.a.createElement(Ce, {
						href: R.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement(F.a, {
						className: le.a.infoIcon
					})))), a.a.createElement(ge, null, a.a.createElement(Ne, null, Object(w.b)(n.fromAwardsGiven)), a.a.createElement(je, null, j.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [j.fbt._plural(n.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), a.a.createElement(Ce, {
						href: R.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement(F.a, {
						className: le.a.infoIcon
					})))))
				},
				Ue = e => {
					var t, n;
					const {
						className: r,
						contextId: o,
						currentUser: s,
						hideNSFWPref: i,
						hoverId: d,
						isLoggedIn: c,
						onClickSnoovatar: l,
						moderatorPermissions: u,
						prefersReducedAnimations: m,
						profile: b,
						sendEvent: p,
						style: f,
						subredditId: h,
						topAwardIcon: v,
						userName: x,
						user: I,
						userFlair: _,
						isCurrentUserBanned: O,
						userProfileStyles: g,
						acceptChats: C,
						isCommentAuthorBlocked: N
					} = e;
					if (!I) return a.a.createElement(we, {
						style: f
					});
					const E = !!s && Object(W.e)(s) === x,
						y = !!(null == s ? void 0 : s.snoovatarFullBodyAsset),
						w = I.accountIcon || `${k.a.assetPath}/img/snoo_user_placeholder.png`,
						S = null == u ? void 0 : u.flair,
						P = null == u ? void 0 : u.access,
						A = (null == _ ? void 0 : _.templateIds) && (null === (t = null == _ ? void 0 : _.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						M = null === (n = null == _ ? void 0 : _.displaySettings) || void 0 === n ? void 0 : n.isEnabled,
						{
							awardedLastMonth: T
						} = I,
						L = !!I.snoovatarFullBodyAsset,
						F = I.isNSFW && i;
					let H;
					return H = L ? !F && g && g.bannerBackgroundImage || void 0 : F ? `${k.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, a.a.createElement(we, {
						className: r,
						id: d,
						style: f
					}, !L && H && a.a.createElement(ke, {
						style: {
							backgroundImage: `url('${H}')`
						}
					}), a.a.createElement(Ee, null, L ? a.a.createElement(Z.a, {
						isHovercard: !0,
						bannerBackgroundImage: H,
						compact: !0,
						currentUserHasSnoovatar: y,
						isEmployee: I.isEmployee,
						isGold: I.isGold,
						isNSFW: I.isNSFW,
						isOwnProfile: E,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: I.snoovatarFullBodyAsset,
						title: null == b ? void 0 : b.title,
						userCreated: I.created,
						username: x,
						url: `/user/${e.userName}/`
					}) : a.a.createElement(_e, null, a.a.createElement(me, {
						iconUrl: w,
						isNSFW: I.isNSFW,
						userName: x
					}), a.a.createElement(Se, {
						title: null == b ? void 0 : b.title,
						user: I,
						userName: x
					})), a.a.createElement(Pe, {
						user: I
					}), T && a.a.createElement(K.a, {
						recentAwardings: T,
						topAwardIcon: v,
						username: x
					}), c && !E && !O && C && !N && a.a.createElement(pe, {
						contextId: o,
						priority: B.c.Secondary,
						userId: I.id,
						text: j.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), I.hasUserProfile && !O && !N && !E && I.enableFollowers && a.a.createElement(be, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(D.h)(e ? "unfollow" : "follow", o),
						isFullWidth: !0,
						small: !0
					})), P && o && !E && h && a.a.createElement(oe, {
						contextId: o,
						subredditId: h,
						sendEvent: p,
						username: x
					}), S && o && A && M && h && a.a.createElement(de, {
						contextId: o,
						subredditId: h,
						sendEvent: p,
						username: x
					}), a.a.createElement(U.i, {
						contextId: o,
						subredditId: h,
						user: I
					}), !(P || c) && a.a.createElement(ye, null))
				},
				Ae = Object(A.a)(Ue),
				Me = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return a.a.createElement(Ae, ue({
						isOpen: t
					}, e))
				};
			Me.WrappedComponent = Ue;
			var Te = Me;
			const Be = Object(s.c)({
					activeTooltipId: I.a,
					currentUser: _.k,
					isLoggedIn: _.Q,
					hideNSFWPref: _.F,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(b.n)(e, {
							subredditId: n
						}) : void 0
					},
					prefersReducedAnimations: g.c,
					profile: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(h.k)(e, {
							profileName: n
						})
					},
					topAwardIcon: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(m.e)(e, {
							userName: n,
							minSize: 32
						})
					},
					user: _.Ab,
					userFlair: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(O.d)(e, {
							subredditId: n
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(x.o)(t) && Object(x.gb)(e, t),
					userProfileStyles: (e, t) => Object(v.m)(e, Object(h.n)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(h.i)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					},
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: n
						} = t;
						const r = Object(C.e)(e),
							a = n || r && Object(x.G)(e, r.name);
						return !!a && Object(b.i)(e, a)
					},
					trophyCase: (e, t) => Object(h.s)(e, Object(h.n)(e, t.userName)),
					isNightMode: _.db,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const n = Object(l.a)(t.contextId) ? Object(f.G)(e, {
							postId: t.contextId
						}) : Object(u.b)(e, {
							commentId: t.contextId
						});
						return Object(p.b)(e, null == n ? void 0 : n.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(x.hb)(e, {
							identifier: {
								name: n,
								type: "profile"
							}
						})
					}
				}),
				Le = Object(o.b)(Be, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Le(e => e.isModWithUserNotesPermissions ? a.a.createElement(N.b, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId,
				user: e.user,
				isCurrentUserBanned: e.isCurrentUserBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed,
				trophyCase: e.trophyCase,
				isNightMode: e.isNightMode,
				lastAuthorModNote: e.lastAuthorModNote,
				userIsSubscriber: e.userIsSubscriber
			}) : Object(c.a)(e.userName) ? null : a.a.createElement(Te, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				sendEvent: e.sendEvent,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				isCurrentUserBanned: e.isCurrentUserBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed
			}))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, n) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActionsList/index.m.less": function(e, t, n) {
			e.exports = {
				item: "_38xW2NIhe5x7Ip4DsESiDu",
				icon: "_2ZHHn_3SE1hdLbw0G-XfIX",
				userActionItemInner: "_3xTsY9LoZw_EzkMMdKnazw",
				notesCount: "_1KOj-NtM3O6M8hDbwiqXtq"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.m.less": function(e, t, n) {
			e.exports = {
				ModUserNotesTooltipContainer: "_1xMLExpk6fjc6IeleL33__",
				modUserNotesTooltipContainer: "_1xMLExpk6fjc6IeleL33__",
				ModUserNotesWrapper: "_1lCrSQLjP_rjV7gFHNw2Ww",
				modUserNotesWrapper: "_1lCrSQLjP_rjV7gFHNw2Ww",
				ChatButton: "_1KGlxZr4v5X8KO13lbfZkH",
				chatButton: "_1KGlxZr4v5X8KO13lbfZkH",
				UserIcon: "tbDtmAzcWjdFI11DABSSE",
				userIcon: "tbDtmAzcWjdFI11DABSSE",
				SubscribeButton: "W_LVLAHMsyjUPbF5V1gne",
				subscribeButton: "W_LVLAHMsyjUPbF5V1gne",
				nsfwIcon: "_2ZgdtnNoCxPx1lQXhD6RCl",
				PremiumIcon: "_7TFRzyp4qxsQbq7wGXtal",
				premiumIcon: "_7TFRzyp4qxsQbq7wGXtal",
				Token: "_2AUnbdNeTs57gr51hD5HZs",
				token: "_2AUnbdNeTs57gr51hD5HZs",
				UserNameLink: "_2-lNSakHMUsw7JJvZEaUoC",
				userNameLink: "_2-lNSakHMUsw7JJvZEaUoC",
				UserNameMetaData: "_2JJXxZgWKcnUbov2J1C1G3",
				userNameMetaData: "_2JJXxZgWKcnUbov2J1C1G3",
				GildedLastMonthDisplay: "_2ZBEIFpn6l5Qlf51owMxnH",
				gildedLastMonthDisplay: "_2ZBEIFpn6l5Qlf51owMxnH",
				Bullet: "_1CtoPJ9zL_DPCHjPhY1Hsv",
				bullet: "_1CtoPJ9zL_DPCHjPhY1Hsv",
				MetaDataItem: "_1wuEdqaYgDUYdo7_iYospO",
				metaDataItem: "_1wuEdqaYgDUYdo7_iYospO",
				userInfoGrid: "_3a21y2eUAmkxDk558i6QgH",
				col: "_3KN0zcev-Tcx2ZKUOTwqAW",
				count: "_18UK58kvBxqUzL1TlF2qu_",
				label: "_3QwHvGUhCVXeT24GSUKIlx",
				recentAwardOrIconContainer: "_3LqvFQ1BS5zB89Vd8qlasl",
				recentAwardOrTropyIcon: "_1Z4qF31srXcMg3H1REZvd8",
				BannerImage: "_3ZVh9OT49Up2cKlH5oG86P",
				bannerImage: "_3ZVh9OT49Up2cKlH5oG86P",
				BottomSpacer: "GZx_ZWPCv3FF3EYsvlegn",
				bottomSpacer: "GZx_ZWPCv3FF3EYsvlegn",
				Container: "_13TK74mTO68JHd1rIx54V4",
				container: "_13TK74mTO68JHd1rIx54V4",
				profileLink: "zD_YW4RUg8ZJlTGaTVlP1",
				profileButtonGroup: "_2ItHX7a-KsG3uDHp58gZXx",
				centerSingleButton: "_1kc6pvVVauBg2lk0QF7cKQ",
				profileButtonLeft: "VqFzwo5tna6ZZCAXrmTyk",
				profileButtonRight: "_2CZKdAmdaG7IaMmeQEX8Xn",
				onlyButton: "_2SiwcVk9z35uhm2h71elH0",
				lastModNote: "_1vxe7WcOQITcKCr697jFQO",
				userDetails: "_2UWOWC-UT--m_9xjQIiKIh",
				snoovatarContainer: "bwcDA8NnSXG_MemuHe_BD",
				snoovatar: "_25zVI0tC-SP9CyY5ElAA1g",
				anonymousSnoovatar: "_2wTPjx2BoBSkrl3M-RkvPr"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "TooltipContainer", (function() {
				return Dt
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/actions/profile/index.ts"),
				i = n("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/helpers/isComment.ts"),
				u = n("./src/reddit/helpers/isPost.ts"),
				m = n("./src/reddit/helpers/trackers/modNote.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/actions/subreddit.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./src/higherOrderComponents/asTooltip.tsx"),
				v = n("./src/lib/localStorageAvailable/index.ts"),
				x = n("./src/reddit/helpers/localStorage/index.ts"),
				I = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = n("./src/reddit/constants/keycodes.ts"),
				O = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/Checkbox/index.tsx"),
				C = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				N = n("./src/reddit/icons/fonts/index.tsx"),
				j = n("./src/reddit/models/ModUserNotes/index.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/CCM/ModUserNotesCreationForm/index.m.less"),
				y = n.n(E),
				w = n("./src/redditGQL/types.ts");
			const S = Object(h.a)(I.b),
				P = ["NONE", w.u.AbuseWarning, w.u.SpamWarning, w.u.SpamWatch, w.u.SolidContributor, w.u.HelpfulUser],
				U = {
					...j.f,
					NONE: () => f.fbt._("None", null, {
						hk: "2r9MPM"
					})
				};
			var A = e => {
					const {
						className: t,
						filter: n,
						subredditId: s,
						userId: d,
						thingId: l
					} = e, [m, b] = Object(r.useState)(), [p, h] = Object(r.useState)(!0), [I, E] = Object(r.useState)(""), [w, A] = Object(r.useState)(!1), M = Object(o.e)(k.db);
					Object(r.useEffect)(() => {
						const e = e => {
							e.style.height = "inherit";
							const t = e.scrollHeight - 34;
							e.style.height = `${t}px`
						};
						return document.addEventListener("input", t => {
							const n = null == t ? void 0 : t.target;
							"textarea" === (null == n ? void 0 : n.tagName.toLowerCase()) && e(t.target)
						}, !1), () => {
							document.removeEventListener("input", t => {
								const n = null == t ? void 0 : t.target;
								"textarea" === (null == n ? void 0 : n.tagName.toLowerCase()) && e(t.target)
							}, !1)
						}
					}, []), Object(r.useEffect)(() => {
						if (Object(v.a)()) {
							const e = Object(x.A)("modnote-draft");
							E(e && e[d] ? e[d] : "")
						}
					}, [d]);
					const T = Object(o.d)(),
						B = Object(r.useCallback)(e => {
							E(e), Object(x.Eb)("modnote-draft", {
								[d]: e
							})
						}, [E, d]),
						L = Object(r.useCallback)(e => {
							e.stopPropagation(), T(Object(i.a)(s, d, I, n, m, p ? l : void 0)), b(void 0), B("")
						}, [T, s, B, I, d, m, p, l, n]),
						D = Object(r.useCallback)(e => {
							e.stopPropagation(), e.keyCode !== _.a.Enter || e.shiftKey || (e.preventDefault(), L(e))
						}, [L]),
						F = m ? U[m]() : U.NONE(),
						H = m ? m && Object(N.b)(j.e[m], {
							isFilled: !0
						}) : void 0,
						R = m && j.d[m];
					return a.a.createElement("div", {
						className: Object(c.a)(t)
					}, a.a.createElement("div", {
						className: y.a.meta
					}, a.a.createElement("span", {
						className: y.a.labelContainer,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, a.a.createElement("label", {
						className: y.a.labelText,
						htmlFor: "label"
					}, f.fbt._("Label", null, {
						hk: "39tjG1"
					})), a.a.createElement(C.b, {
						id: "labelSelector",
						className: y.a.dropdown,
						displayText: F,
						buttonIcon: H ? a.a.createElement(H, {
							className: y.a.labelIcon,
							style: {
								...R && {
									color: R
								},
								fontSize: "15px",
								lineHeight: "15px"
							}
						}) : void 0,
						options: P.map(e => {
							const t = U[e](),
								n = "NONE" === e ? void 0 : Object(N.b)(j.e[e], {
									isFilled: !0
								}),
								r = j.d[e];
							return {
								displayText: t,
								value: e,
								isSelected: "NONE" === e ? !m : m === e,
								...n && {
									icon: a.a.createElement(n, {
										className: y.a.labelIcon,
										style: {
											color: r,
											fontSize: "15px",
											lineHeight: "15px"
										}
									})
								}
							}
						}),
						onSelect: e => "NONE" === e.value ? b(void 0) : b(e.value),
						buttonClassName: y.a.dropdownButton,
						menuItemsClassName: y.a.menuItems,
						menuOptionClassName: y.a.menuOption
					})), a.a.createElement("span", {
						className: y.a.checkboxContainer
					}, a.a.createElement(g.a, {
						className: y.a.checkbox,
						isCheckboxSelected: p,
						toggleCheckbox: () => h(!p)
					}), l && Object(u.a)(l) ? f.fbt._("Link to post", null, {
						hk: "4lmeXp"
					}) : f.fbt._("Link to comment", null, {
						hk: "4bFPHh"
					}))), a.a.createElement("span", {
						className: y.a.textareaContainer
					}, a.a.createElement("textarea", {
						id: "MOD_NOTE_TEXT_AREA",
						className: Object(c.a)(y.a.textarea, {
							[y.a.isNightMode]: M
						}),
						onChange: e => B(e.target.value),
						onKeyDown: D,
						onClick: e => e.stopPropagation(),
						placeholder: f.fbt._("Add a note", null, {
							hk: "3wCgqo"
						}),
						value: I,
						maxLength: 250
					}), a.a.createElement(S, {
						isOpen: w
					}, a.a.createElement("div", {
						className: y.a.infoTooltip
					}, f.fbt._("Create Note", null, {
						hk: "32wjFp"
					})), a.a.createElement("div", {
						className: y.a.tooltipDescription
					}, f.fbt._("Press Enter", null, {
						hk: "20FVA3"
					}))), a.a.createElement(O.t, {
						className: Object(c.a)(y.a.sendButton, {
							[y.a.isNightMode]: M,
							[y.a.isDisabled]: 0 === I.length
						}),
						disabled: 0 === I.length,
						Icon: () => a.a.createElement(N.a, {
							className: Object(c.a)(y.a.iconSend, {
								[y.a.isDisabled]: 0 === I.length
							}),
							name: "send",
							isFilled: !0
						}),
						size: O.d.XS,
						iconPosition: O.h.C,
						onClick: L,
						onMouseEnter: () => A(!0),
						onMouseLeave: () => A(!1),
						style: 0 === I.length ? {
							backgroundColor: "transparent"
						} : void 0
					})))
				},
				M = n("./src/reddit/selectors/modUserNotes.ts"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				B = n("./src/reddit/components/SubredditIcon/index.tsx"),
				L = n("./src/reddit/components/CCM/ModUserNotesFilter/index.m.less"),
				D = n.n(L);
			const F = [w.m.All, w.m.Note, w.m.Invite, w.m.Ban, w.m.Mute, w.m.ContentChange, w.m.Removal, w.m.Approval, w.m.Spam, w.m.ModAction],
				H = {
					[w.m.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[w.m.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[w.m.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[w.m.Ban]: () => f.fbt._("Bans/unbans", null, {
						hk: "1mU3jK"
					}),
					[w.m.Mute]: () => f.fbt._("Mutes/unmutes", null, {
						hk: "2BTD9E"
					}),
					[w.m.ContentChange]: () => f.fbt._("Content edits", null, {
						hk: "Hqlly"
					}),
					[w.m.Removal]: () => f.fbt._("Content removals", null, {
						hk: "2V0fLd"
					}),
					[w.m.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[w.m.ModAction]: () => f.fbt._("Mod actions", null, {
						hk: "4eIb6E"
					}),
					[w.m.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				},
				R = {
					[w.m.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[w.m.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[w.m.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[w.m.Ban]: () => f.fbt._("Bans", null, {
						hk: "2mhBLK"
					}),
					[w.m.Mute]: () => f.fbt._("Mutes", null, {
						hk: "4FW14P"
					}),
					[w.m.ContentChange]: () => f.fbt._("Edits", null, {
						hk: "3Gd5ht"
					}),
					[w.m.Removal]: () => f.fbt._("Removals", null, {
						hk: "312qk9"
					}),
					[w.m.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[w.m.ModAction]: () => f.fbt._("Actions", null, {
						hk: "3hqNUg"
					}),
					[w.m.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				};
			var W = e => {
					const {
						className: t,
						subredditId: n,
						userId: s,
						onChangeSubredditId: i,
						filter: d,
						onChangeFilter: l,
						onChangeView: u
					} = e, p = Object(b.a)(), h = Object(o.e)(e => Object(T.r)(e, void 0)), v = Object(o.e)(e => Object(M.a)(e, s, n)), x = h.find(e => e.id === n), I = R[d](), _ = Object(N.b)("back_fill"), O = Object(r.useCallback)(() => p(Object(m.m)({
						userId: s,
						subredditId: n
					})), [s, n, p]), g = Object(r.useCallback)(e => {
						i(e.value), p(Object(m.t)({
							userId: s,
							subredditId: n,
							filteredSubredditId: e.value
						}))
					}, [s, n, p, i]), j = Object(r.useCallback)(() => p(Object(m.n)({
						userId: s,
						subredditId: n
					})), [s, n, p]), k = Object(r.useCallback)(e => {
						l(e.value), p(Object(m.u)({
							userId: s,
							subredditId: n,
							filteredType: e.value
						}))
					}, [s, n, p, l]);
					return v ? a.a.createElement("div", {
						className: Object(c.a)(t, D.a.wrapper),
						role: "navigation"
					}, a.a.createElement("div", {
						className: D.a.backWrapper
					}, a.a.createElement("button", {
						"aria-label": f.fbt._("Back", null, {
							hk: "3ojpRo"
						}),
						className: D.a.backButton,
						onClick: u
					}, a.a.createElement(_, null))), x && h.length && a.a.createElement("div", {
						className: D.a.subredditsWrapper,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, a.a.createElement(C.b, {
						id: "subredditFilter",
						className: D.a.subreddits,
						buttonClassName: D.a.dropdownButton,
						buttonIcon: a.a.createElement(B.b, {
							className: D.a.subredditIcon,
							subredditOrProfile: x
						}),
						disabled: 1 === h.length,
						menuItemsClassName: D.a.menuItems,
						menuOptionClassName: D.a.menuOption,
						displayText: `r/${x.name}`,
						options: h.map(e => ({
							displayText: `r/${e.name}`,
							value: e.id,
							isSelected: e.id === n,
							icon: a.a.createElement(B.b, {
								className: D.a.subredditIconInDropdown,
								subredditOrProfile: e
							})
						})),
						onOpen: O,
						onSelect: g,
						showSelectedCheckmark: !0
					})), a.a.createElement("div", {
						className: D.a.typesWrapper,
						onKeyDown: e => {
							e.stopPropagation()
						}
					}, a.a.createElement(C.b, {
						id: "typeFilter",
						className: D.a.types,
						buttonClassName: D.a.dropdownButton,
						menuItemsClassName: D.a.menuItems,
						menuOptionClassName: D.a.menuOption,
						displayText: I,
						options: F.map(e => ({
							displayText: H[e](),
							icon: v[w.m.All] ? a.a.createElement("span", {
								className: D.a.typeCountIconInDropdown
							}, a.a.createElement("span", {
								className: D.a.typeCountIconInDropdownInner
							}, v[e])) : void 0,
							value: e,
							isSelected: e === d
						})),
						onOpen: j,
						onSelect: k,
						showSelectedCheckmark: !0
					}))) : null
				},
				G = n("./src/lib/fastdom/index.ts"),
				K = n("./src/lib/constants/colors.ts"),
				Z = n("./src/reddit/components/CCM/ModUserNoteWithIcon/index.m.less"),
				V = n.n(Z),
				q = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Icon/index.m.less"),
				J = n.n(q);
			const z = {
					[w.l.AddRemovalReason]: "remove",
					[w.l.AcceptModeratorInvite]: "mod",
					[w.l.AddContributor]: "user",
					[w.l.ApproveLink]: "approve",
					[w.l.ApproveComment]: "approve",
					[w.l.AddContributor]: "user",
					[w.l.AddModerator]: "mod",
					[w.l.BanUser]: "ban",
					[w.l.InviteModerator]: "mod",
					[w.l.MuteUser]: "mod_mute",
					[w.l.RemoveComment]: "remove",
					[w.l.RemoveContributor]: "block",
					[w.l.RemoveLink]: "remove",
					[w.l.RemoveModerator]: "unmod",
					[w.l.RemoveWikiContributor]: "wiki_ban",
					[w.l.SpamComment]: "spam",
					[w.l.SpamLink]: "spam",
					[w.l.Spoiler]: "spoiler",
					[w.l.Sticky]: "pin",
					[w.l.UnbanUser]: "unban",
					[w.l.UninviteModerator]: "unmod",
					[w.l.UnmuteUser]: "mod_unmute",
					[w.l.Unspoiler]: "spoiler",
					[w.l.Unsticky]: "unpin",
					[w.l.WikiBanned]: "wiki_ban",
					[w.l.WikiContributor]: "wiki",
					[w.l.WikiUnbanned]: "wiki_unban"
				},
				Q = {
					[w.u.BotBan]: "bot",
					[w.u.PermaBan]: "block"
				};
			var X = e => {
					const {
						className: t,
						actionType: n,
						label: r
					} = e, o = n ? z[n] || "mod" : r && Q[r] || "user_note";
					if (!o) return null;
					const s = Object(N.b)(o);
					return a.a.createElement(s, {
						className: Object(c.a)(t, J.a.icon)
					})
				},
				Y = n("./src/reddit/selectors/activeModalId.ts"),
				$ = n("./src/reddit/actions/modal.ts"),
				ee = n("./src/reddit/hooks/useLocale.ts"),
				te = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ne = n("./src/reddit/controls/InternalLink/index.tsx"),
				re = n("./src/reddit/components/CCM/ModUserNoteWithIcon/MetaData/index.m.less"),
				ae = n.n(re);
			var oe = e => {
					const {
						className: t,
						deleteClassName: n,
						modNote: s,
						onClickUsername: d,
						subredditId: l
					} = e, u = Object(o.d)(), {
						user: p,
						id: h,
						itemType: v
					} = s, x = `ModUserNote--Modal--DeleteConfirmation--${h}`, I = Object(b.a)(), _ = Object(r.useCallback)(() => u(Object($.i)(x)), [u, x]), O = Object(r.useCallback)(() => {
						v && u(Object(i.b)(l, p.id, h, v)), I(Object(m.b)({
							subredditId: l,
							modNote: s
						}))
					}, [u, p.id, h, v, l, I, s]), g = Object(r.useCallback)(() => {
						v && u(Object(i.b)(l, p.id, h, v)), I(Object(m.c)({
							subredditId: l,
							modNote: s
						}))
					}, [u, p.id, h, v, l, I, s]), C = Object(r.useCallback)(() => {
						_(), I(Object(m.j)({
							subredditId: l,
							modNote: s
						}))
					}, [l, I, s, _]), N = Object(o.e)(e => Object(Y.a)(e) === x), j = Object(ee.a)(), k = new Intl.DateTimeFormat(j, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(s.createdAt)), E = s.itemType === w.n.Note;
					return a.a.createElement("div", {
						className: Object(c.a)(t, ae.a.metadata)
					}, s.operator && a.a.createElement(ne.default, {
						className: ae.a.operator,
						to: `/user/${s.operator.displayName}/`,
						onClick: d
					}, "u/", s.operator.displayName), a.a.createElement("span", {
						className: ae.a.createdDate
					}, f.fbt._("on {createdDate}", [f.fbt._param("createdDate", k)], {
						hk: "2VoP7K"
					})), E && a.a.createElement(a.a.Fragment, null, a.a.createElement("button", {
						className: Object(c.a)(n, ae.a.deleteButton),
						onClick: C
					}, f.fbt._("Delete", null, {
						hk: "4lt26q"
					})), N && a.a.createElement(te.a, {
						actionText: f.fbt._("Yes, Delete", null, {
							hk: "3kB0Hd"
						}),
						headerText: f.fbt._("Delete this note?", null, {
							hk: "bGAxq"
						}),
						modalText: f.fbt._("This mod note will be permanently deleted.", null, {
							hk: "DFQi2"
						}),
						onConfirm: g,
						onCancel: O,
						toggleModal: _,
						withOverlay: !0
					})))
				},
				se = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Note/index.m.less"),
				ie = n.n(se);
			var de = e => {
					let {
						className: t,
						modNote: n,
						onClickLinked: r
					} = e;
					var s, i;
					const d = Object(o.e)(k.db),
						l = "label" in n && n.label || j.c,
						u = "note" in n ? n.note : void 0,
						m = Object(N.b)(j.e[l || "bot"], {
							isFilled: !0
						}),
						b = ![j.c, w.u.BotBan, w.u.PermaBan].includes(l),
						p = n.postInfo ? null === (s = n.postInfo) || void 0 === s ? void 0 : s.permalink : n.commentInfo ? null === (i = n.commentInfo) || void 0 === i ? void 0 : i.permalink : void 0,
						f = Object(N.b)("external_link_fill");
					return u ? a.a.createElement("div", {
						className: Object(c.a)(t, ie.a.modNote),
						onClick: e => e.stopPropagation(),
						style: l ? {
							backgroundColor: d ? j.b[l] : j.a[l]
						} : {}
					}, b && a.a.createElement("div", {
						className: ie.a.header
					}, a.a.createElement(m, {
						className: ie.a.labelIcon,
						style: {
							color: j.d[l]
						}
					}), a.a.createElement("span", {
						className: ie.a.label
					}, j.f[l]())), u && a.a.createElement("div", {
						className: ie.a.note
					}, u), p && a.a.createElement("a", {
						className: ie.a.link,
						href: p || "",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: r
					}, a.a.createElement(f, {
						className: ie.a.linkIcon
					}))) : null
				},
				ce = n("./src/lib/constants/index.ts"),
				le = n("./src/lib/prettyPrintNumber/index.ts"),
				ue = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Preview/index.m.less"),
				me = n.n(ue);
			var be = e => {
					let {
						className: t,
						postInfo: n,
						commentInfo: r,
						onClick: o
					} = e;
					var s, i, d, l;
					if (!n && !r) return null;
					if (r && "Comment" !== r.__typename) return a.a.createElement("div", {
						className: Object(c.a)(t, me.a.preview)
					}, a.a.createElement("div", {
						className: me.a.content
					}, a.a.createElement("h6", {
						className: me.a.title
					}, ce.Lb)));
					const u = n ? n.permalink : r ? r.permalink : void 0,
						m = (null == n ? void 0 : n.title) || (null === (i = null === (s = r) || void 0 === s ? void 0 : s.content) || void 0 === i ? void 0 : i.markdown),
						b = n ? n.score || 0 : r && r.score || 0,
						p = (null == n ? void 0 : n.commentCount) || 0;
					return a.a.createElement("a", {
						className: Object(c.a)(t, me.a.preview),
						href: u || "",
						onClick: o,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement("div", {
						className: me.a.content
					}, m && a.a.createElement("h6", {
						className: me.a.title
					}, m), a.a.createElement("div", {
						className: me.a.meta
					}, a.a.createElement("span", null, f.fbt._({
						"*": "{pointsCount} Points",
						_1: "{pointsCount} Point"
					}, [f.fbt._param("pointsCount", Object(le.b)(b)), f.fbt._plural(b)], {
						hk: "47CFCp"
					})), !!p && a.a.createElement(a.a.Fragment, null, " · ", a.a.createElement("span", null, f.fbt._({
						"*": "{Comment} Comments",
						_1: "1 Comment"
					}, [f.fbt._plural(p, "Comment")], {
						hk: "11Jphu"
					}))))), !!(null === (d = null == n ? void 0 : n.thumbnail) || void 0 === d ? void 0 : d.url) && a.a.createElement("div", {
						className: me.a.thumbnail
					}, a.a.createElement("img", {
						className: me.a.thumbnailImage,
						src: null === (l = n.thumbnail) || void 0 === l ? void 0 : l.url
					})))
				},
				pe = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Title/index.m.less"),
				fe = n.n(pe);
			const he = {
					[w.l.AddRemovalReason]: e => {
						const {
							commentInfo: t
						} = e, {
							postInfo: n
						} = e;
						return t ? f.fbt._("Removal reason applied to comment", null, {
							hk: "2LWZ5d"
						}) : n ? f.fbt._("Removal reason applied to post", null, {
							hk: "e3hBx"
						}) : void 0
					},
					[w.l.BanUser]: e => {
						const {
							banDays: t,
							isPermanentBan: n
						} = e;
						return n ? f.fbt._("Permanently banned", null, {
							hk: "1JdZQ8"
						}) : t ? f.fbt._({
							"*": "Banned for {number} days",
							_1: "Banned for 1 day"
						}, [f.fbt._plural(t, "number")], {
							hk: "lfWrr"
						}) : f.fbt._("Banned", null, {
							hk: "4gqwg7"
						})
					}
				},
				ve = {
					[w.l.AcceptModeratorInvite]: () => f.fbt._("Mod invite accepted", null, {
						hk: "qf41j"
					}),
					[w.l.AddContributor]: () => f.fbt._("Added as contributor", null, {
						hk: "3dqHxz"
					}),
					[w.l.AddModerator]: () => f.fbt._("Added as moderator", null, {
						hk: "1dhUFs"
					}),
					[w.l.ApproveComment]: () => f.fbt._("Comment was approved", null, {
						hk: "3yCRAS"
					}),
					[w.l.ApproveLink]: () => f.fbt._("Post was approved", null, {
						hk: "6tcjn"
					}),
					[w.l.BanUser]: e => {
						const {
							banReason: t
						} = e;
						return t
					},
					[w.l.AddRemovalReason]: e => {
						const {
							description: t
						} = e;
						return t
					},
					[w.l.InviteModerator]: () => f.fbt._("Mod invite sent", null, {
						hk: "19xTmf"
					}),
					[w.l.MuteUser]: () => f.fbt._("Modmail muted", null, {
						hk: "4mxUPa"
					}),
					[w.l.RemoveComment]: () => f.fbt._("Comment removed", null, {
						hk: "41CO0h"
					}),
					[w.l.RemoveContributor]: () => f.fbt._("Removed as contributor", null, {
						hk: "33vYlk"
					}),
					[w.l.RemoveLink]: () => f.fbt._("Post removed", null, {
						hk: "1012sS"
					}),
					[w.l.RemoveModerator]: () => f.fbt._("Removed as moderator", null, {
						hk: "1PZWXB"
					}),
					[w.l.RemoveWikiContributor]: () => f.fbt._("Removed as a wiki contributor", null, {
						hk: "9iumD"
					}),
					[w.l.SpamComment]: () => f.fbt._("Comment marked as spam", null, {
						hk: "3Ya0oQ"
					}),
					[w.l.SpamLink]: () => f.fbt._("Post marked as spam", null, {
						hk: "1yjDb8"
					}),
					[w.l.Spoiler]: () => f.fbt._("Post marked as spoiler", null, {
						hk: "JECai"
					}),
					[w.l.Sticky]: () => f.fbt._("Post was stickied", null, {
						hk: "4vkdGE"
					}),
					[w.l.UnbanUser]: () => f.fbt._("Unbanned", null, {
						hk: "1P5luv"
					}),
					[w.l.UninviteModerator]: () => f.fbt._("Mod invite revoked", null, {
						hk: "zyjCA"
					}),
					[w.l.UnmuteUser]: () => f.fbt._("Modmail unmuted", null, {
						hk: "496Olb"
					}),
					[w.l.Unspoiler]: () => f.fbt._("Post marked as non-spoiler", null, {
						hk: "1nWZbp"
					}),
					[w.l.Unsticky]: () => f.fbt._("Post was un-stickied", null, {
						hk: "3b2nJe"
					}),
					[w.l.WikiBanned]: () => f.fbt._("Banned from the wiki", null, {
						hk: "29ttfV"
					}),
					[w.l.WikiContributor]: () => f.fbt._("Added as a wiki contributor", null, {
						hk: "2IuQMk"
					}),
					[w.l.WikiUnbanned]: () => f.fbt._("Unbanned from the wiki", null, {
						hk: "24xAIp"
					})
				},
				xe = {
					[w.u.BotBan]: () => f.fbt._("Banned by bot", null, {
						hk: "gc7lV"
					}),
					[w.u.PermaBan]: () => f.fbt._("Permanently banned", null, {
						hk: "4oNAOs"
					})
				};
			var Ie = e => {
				const {
					className: t,
					modNote: n
				} = e, {
					actionType: r
				} = n, {
					label: o
				} = n, s = r ? ve[r] ? ve[r](n) : null : o && xe[o] ? xe[o]() : null, i = r && he[r] ? he[r](n) : null;
				return a.a.createElement(a.a.Fragment, null, i ? a.a.createElement("h4", {
					className: Object(c.a)(t, fe.a.subTitle)
				}, i) : null, s ? a.a.createElement("h3", {
					className: Object(c.a)(t, fe.a.title)
				}, s) : null)
			};
			var _e = e => {
					const {
						modNote: t,
						subredditId: n
					} = e, r = Object(o.e)(k.db), s = Object(b.a)(), i = !!t.__typename && ["ModActionNote", "ModActionNotePost", "ModActionNoteComment"].includes(t.__typename);
					return a.a.createElement("div", {
						className: Object(c.a)(V.a.wrapper, e.className)
					}, a.a.createElement("div", {
						key: "aa",
						className: V.a.iconWrapper,
						style: {
							background: r ? K.a.orca700 : K.a.narwhal100
						}
					}, a.a.createElement(X, {
						className: V.a.icon,
						actionType: t.actionType,
						label: t.label
					})), a.a.createElement("div", {
						className: V.a.content,
						key: "ba"
					}, a.a.createElement(Ie, {
						modNote: t,
						className: V.a.title
					}), a.a.createElement(de, {
						className: V.a.note,
						modNote: t,
						onClickLinked: () => s(Object(m.d)({
							subredditId: n,
							modNote: t
						}))
					}), a.a.createElement(oe, {
						className: V.a.metaData,
						deleteClassName: V.a.metaDataDelete,
						subredditId: n,
						modNote: t,
						onClickUsername: () => s(Object(m.q)({
							subredditId: n,
							modNote: t
						}))
					}), i && a.a.createElement(be, {
						className: V.a.preview,
						commentInfo: t.commentInfo,
						postInfo: t.postInfo,
						onClick: () => s(Object(m.h)({
							subredditId: n,
							modNote: t
						}))
					})))
				},
				Oe = n("./src/reddit/hooks/useScrollGradient.ts"),
				ge = n("./src/reddit/components/CCM/ModUserNotesList/EmptyList/index.m.less"),
				Ce = n.n(ge);
			var Ne = e => {
					const t = {
							[w.m.Note]: f.fbt._("mod notes", null, {
								hk: "CN6SZ"
							}),
							[w.m.Approval]: f.fbt._("approvals", null, {
								hk: "AqrdS"
							}),
							[w.m.Removal]: f.fbt._("content removals", null, {
								hk: "kjICL"
							}),
							[w.m.Ban]: f.fbt._("bans or unbans", null, {
								hk: "4jKjdR"
							}),
							[w.m.Mute]: f.fbt._("mutes and unmutes", null, {
								hk: "1u2TZT"
							}),
							[w.m.Invite]: f.fbt._("invites", null, {
								hk: "r9dPh"
							}),
							[w.m.Spam]: f.fbt._("spam removals", null, {
								hk: "44iRtH"
							}),
							[w.m.ContentChange]: f.fbt._("content edits", null, {
								hk: "1zafY8"
							}),
							[w.m.ModAction]: f.fbt._("mod actions", null, {
								hk: "3yLNgz"
							}),
							[w.m.All]: f.fbt._("mod actions", null, {
								hk: "2sOss3"
							})
						},
						n = {
							[w.m.Note]: "user_note",
							[w.m.Approval]: "approve",
							[w.m.Removal]: "remove",
							[w.m.Ban]: "ban",
							[w.m.Mute]: "mod_mute",
							[w.m.Invite]: "user",
							[w.m.Spam]: "spam",
							[w.m.ContentChange]: "pin",
							[w.m.ModAction]: "mod",
							[w.m.All]: "mod"
						},
						{
							className: r,
							subredditId: s,
							userId: i,
							filter: d
						} = e,
						l = Object(o.e)(e => Object(k.zb)(e, {
							userId: i
						})),
						u = Object(o.e)(e => Object(T.V)(e, {
							subredditId: s
						})),
						m = t[d],
						b = f.fbt._("There are no {mod note type}", [f.fbt._param("mod note type", m)], {
							hk: "1NhVUh"
						}),
						p = u && l ? f.fbt._("for u/{user name} in r/{subreddit name}", [f.fbt._param("user name", l.username), f.fbt._param("subreddit name", u.name)], {
							hk: "4CA5zk"
						}) : "",
						h = Object(N.b)(n[d]);
					return a.a.createElement("div", {
						className: Object(c.a)(r, Ce.a.container)
					}, a.a.createElement(h, {
						className: Ce.a.icon
					}), a.a.createElement("p", {
						className: Ce.a.mainLine
					}, `${b} ${p}`), d === w.m.Note && a.a.createElement("p", {
						className: Ce.a.miscLine
					}, f.fbt._("Use the field below to create a note.", null, {
						hk: "1lrCZG"
					})))
				},
				je = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				ke = n("./src/reddit/components/CCM/ModUserNotesList/Placeholder/index.m.less"),
				Ee = n.n(ke),
				ye = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var we = e => a.a.createElement("div", {
					className: Object(c.a)(Ee.a.wrapper, e.className)
				}, a.a.createElement("div", {
					key: "d",
					className: Object(c.a)(Ee.a.icon, Object(ye.a)(e))
				}), a.a.createElement("div", {
					key: "e",
					className: Ee.a.content
				}, a.a.createElement("div", {
					key: "ea",
					className: Object(c.a)(Ee.a.title, Object(ye.b)(e))
				}), a.a.createElement("div", {
					key: "eb",
					className: Object(c.a)(Ee.a.body, Object(ye.b)(e))
				}), a.a.createElement("div", {
					key: "ec",
					className: Object(c.a)(Ee.a.meta, Object(ye.b)(e))
				}))),
				Se = n("./src/reddit/components/CCM/ModUserNotesList/PlaceholderList/index.m.less"),
				Pe = n.n(Se);
			var Ue = e => {
					const {
						className: t,
						isLoading: n,
						apiError: r,
						onTryAgain: o
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(t, Pe.a.placeholder)
					}, a.a.createElement(we, {
						className: Pe.a.placeholderLine,
						isLoading: n
					}), a.a.createElement(we, {
						className: Pe.a.placeholderLine,
						isLoading: n
					}), a.a.createElement(we, {
						className: Pe.a.placeholderLine,
						isLoading: n
					}), !!r && a.a.createElement(je.a, {
						apiError: r,
						onTryAgain: o
					}))
				},
				Ae = n("./src/reddit/components/CCM/ModUserNotesList/index.m.less"),
				Me = n.n(Ae);
			var Te = e => {
					const {
						className: t,
						subredditId: n,
						userId: s,
						filter: d
					} = e, l = Object(o.d)(), u = Object(o.e)(k.db), [m, b] = Object(r.useState)(!0);
					Object(r.useEffect)(() => {
						setTimeout(() => b(!1), 0)
					}, []);
					const {
						container: p,
						isScrollGradientVisible: f,
						calculateGradientVisibility: h
					} = Object(Oe.b)(!1, Oe.a.Top), v = Object(o.e)(e => Object(M.f)(e, {
						subredditId: n,
						userId: s,
						filter: d
					})), x = Object(o.e)(e => Object(M.d)(e, {
						subredditId: n,
						userId: s,
						filter: d
					})), I = Object(o.e)(e => Object(M.e)(e, {
						subredditId: n,
						userId: s,
						filter: d
					})), _ = Object(o.e)(M.c), O = !!v.length, g = !!x && !I && !_, C = Object(r.useCallback)(e => l(Object(i.f)({
						subredditId: n,
						userId: s,
						filter: d,
						before: e
					})), [l, n, s, d]), N = Object(r.useCallback)(() => {
						G.a.read(() => {
							if (null == p ? void 0 : p.current) {
								h();
								const e = p.current,
									{
										scrollTop: t,
										offsetHeight: n,
										scrollHeight: r
									} = e;
								1.25 * n - r >= t && g && !I && C(x)
							}
						})
					}, [g, I, x, C, h, p]);
					return a.a.createElement(a.a.Fragment, null, O && a.a.createElement("div", {
						className: Object(c.a)(t, Me.a.wrapper)
					}, a.a.createElement("div", {
						className: Object(c.a)(Me.a.scrollGradient, {
							[Me.a.visible]: g || I || f,
							[Me.a.isNightMode]: u
						})
					}), a.a.createElement("div", {
						className: Me.a.list,
						ref: p,
						onScroll: N
					}, v.map(e => a.a.createElement(_e, {
						key: e.id,
						modNote: e,
						subredditId: n
					})), (I || _) && a.a.createElement(Ue, {
						isLoading: I,
						apiError: _,
						onTryAgain: () => {
							x && C(x)
						}
					}))), !O && !I && !m && a.a.createElement(Ne, {
						className: Object(c.a)(t, Me.a.wrapper, Me.a.noItems),
						subredditId: n,
						userId: s,
						filter: d
					}), !O && (I || m) && a.a.createElement("div", {
						className: Object(c.a)(t, Me.a.wrapper)
					}))
				},
				Be = n("./src/reddit/components/CCM/ModUserNotesWrapper/index.m.less"),
				Le = n.n(Be);
			const {
				fbt: De
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Fe = e => {
					const t = Object(o.d)(),
						{
							className: n,
							subredditId: s,
							userId: d,
							onChangeView: f,
							defaultTypeFilter: h,
							thingId: v
						} = e,
						[x, I] = Object(r.useState)(h || w.m.All),
						[_, O] = Object(r.useState)(s),
						g = Object(o.e)(k.db),
						C = Object(b.a)(),
						N = e => {
							t(Object(i.f)({
								subredditId: _,
								userId: d,
								filter: x,
								...e
							}))
						},
						j = x === w.m.All || x === w.m.Note;
					Object(r.useEffect)(() => {
						N(), t(Object(p.q)())
					}, []);
					const E = {
						subredditId: s,
						userId: d,
						...v && Object(l.a)(v) ? {
							commentId: v
						} : null,
						...v && Object(u.a)(v) ? {
							postId: v
						} : null
					};
					return Object(r.useEffect)(() => (C(Object(m.y)(E)), () => C(Object(m.s)(E))), []), a.a.createElement("div", {
						className: Object(c.a)(n, Le.a.wrapper, {
							[Le.a.isNightMode]: g
						}),
						onClick: e => e.stopPropagation()
					}, a.a.createElement(W, {
						className: Le.a.filters,
						subredditId: _,
						userId: d,
						onChangeSubredditId: e => {
							O(e), N({
								subredditId: e
							})
						},
						filter: x,
						onChangeFilter: e => {
							I(e), N({
								filter: e
							})
						},
						onChangeView: f
					}), a.a.createElement(Te, {
						className: Le.a.list,
						subredditId: _,
						userId: d,
						filter: x
					}), j && a.a.createElement(A, {
						className: Le.a.form,
						filter: x,
						subredditId: s,
						userId: d,
						thingId: v
					}))
				},
				He = n("./src/reddit/components/ContentTooltip/index.tsx"),
				Re = n("./src/config.ts"),
				We = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Ge = n("./src/lib/opener/index.ts"),
				Ke = n("./src/reddit/helpers/author.ts"),
				Ze = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				Ve = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				qe = n("./src/reddit/components/Admin/index.tsx"),
				Je = n("./src/reddit/components/AnonymousSnoovatar/index.m.less"),
				ze = n.n(Je);
			var Qe = e => a.a.createElement("img", {
					className: Object(c.a)(e.className, ze.a.anonymousSnoovatar),
					src: `${Re.a.assetPath}/img/anonymous_snoo.png`
				}),
				Xe = n("./src/reddit/components/ChatButton/index.tsx"),
				Ye = n("./src/reddit/components/HumanDate/index.tsx"),
				$e = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				et = n("./src/reddit/components/ModNoteItem/index.tsx"),
				tt = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				nt = n("./src/reddit/components/SubscribeButton/index.tsx"),
				rt = n("./src/reddit/components/UserIcon/index.tsx"),
				at = n("./src/reddit/endpoints/profile/info.ts"),
				ot = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				st = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				it = n("./src/reddit/models/User/index.ts"),
				dt = n("./src/reddit/selectors/gold/awardIcon.ts"),
				ct = n("./src/reddit/constants/modals.ts"),
				lt = n("./src/reddit/actions/inContextModeration.ts"),
				ut = n("./src/reddit/actions/subredditModeration/index.ts"),
				mt = n("./src/reddit/actions/subredditModeration/ban.ts"),
				bt = n("./src/reddit/actions/subredditModeration/mute.ts"),
				pt = n("./src/reddit/actions/userFlair/index.ts"),
				ft = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				ht = n("./src/reddit/selectors/bannedUser.ts"),
				vt = n("./src/reddit/selectors/moderatorPermissions.ts"),
				xt = n("./src/reddit/selectors/muted.ts"),
				It = n("./src/reddit/selectors/subredditModeration.ts"),
				_t = n("./src/reddit/selectors/userFlair.ts"),
				Ot = n("./src/reddit/components/Hovercards/helpers.ts"),
				gt = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActionsList/index.m.less"),
				Ct = n.n(gt);
			const {
				fbt: Nt
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var jt;
			! function(e) {
				e.ModLog = "ModLog", e.Ban = "Ban", e.Unban = "Unban", e.AddNote = "AddNote", e.Mute = "Mute", e.Unmute = "Unmute", e.Flair = "Flair", e.Modmail = "Modmail"
			}(jt || (jt = {}));
			var kt = e => {
					var t, n;
					const s = Object(b.a)(),
						i = Object(o.d)(),
						{
							className: d,
							contextId: c,
							subredditId: l,
							username: u,
							onChangeView: p
						} = e,
						f = Object(o.e)(e => l ? Object(_t.d)(e, {
							subredditId: l
						}) : void 0),
						h = !!(null == f ? void 0 : f.templateIds) && (null === (t = null == f ? void 0 : f.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						v = !!(null === (n = null == f ? void 0 : f.displaySettings) || void 0 === n ? void 0 : n.isEnabled),
						x = Object(o.e)(t => Object(vt.b)(ft.c.access)(t, e)),
						I = Object(o.e)(t => Object(vt.b)(ft.c.mail)(t, e)),
						_ = Object(o.e)(t => Object(vt.b)(ft.c.flair)(t, e)),
						O = Object(o.e)(e => Object(k.Ab)(e, {
							userName: u
						})),
						g = Object(o.e)(e => !!Object(ht.b)(e, {
							subredditId: l,
							username: u
						})),
						C = Object(o.e)(e => Object(xt.a)(e, l, O.id)),
						j = Object(o.e)(e => Object(It.g)(e, l, O.id)),
						E = Object(o.e)(k.k),
						y = !!E && Object(it.e)(E) === u,
						S = Object(o.e)(e => l ? e.subreddits.models[l] : null),
						P = Object(o.e)(e => {
							if (c) return Object(M.g)(e, O.id, l, w.m.All)
						}),
						U = Object(r.useCallback)(() => {
							i(Object(ut.g)(l))
						}, [i, l]),
						A = Object(r.useCallback)(() => {
							i(Object(mt.c)(l, {
								username: u
							}))
						}, [i, l, u]),
						T = Object(r.useCallback)(() => {
							i(Object(mt.e)(l, O.id)), s(Ze.e(c))
						}, [O.id, l, i, c, s]),
						B = Object(r.useCallback)(() => {
							i(Object(lt.c)({
								username: u,
								subredditId: l,
								contextId: c
							})), i(Object(mt.a)(l, u)), s(Ze.a(c))
						}, [s, i, u, l, c]),
						L = Object(r.useCallback)(() => {
							i(Object(bt.b)(l))
						}, [i, l]),
						D = Object(r.useCallback)(() => {
							i(Object(lt.d)({
								username: u,
								subredditId: l,
								contextId: c
							})), i(Object($.i)(ct.a.MUTE_USER)), s(Ze.d(c))
						}, [s, i, u, l, c]),
						F = Object(r.useCallback)(() => {
							i(Object(bt.d)(l, O.id)), s(Ze.f(c))
						}, [s, i, O.id, l, c]),
						H = Object(r.useCallback)(() => {
							i(Object(pt.g)(l, u)), s(Ze.c(c))
						}, [s, i, u, l, c]),
						R = Object(r.useCallback)(() => l && s(Object(m.l)({
							subredditId: l,
							userId: O.id
						})), [l, O, s]),
						W = Object(r.useCallback)(e => {
							e.stopPropagation(), p && p(), l && s(Object(m.k)({
								subredditId: l,
								userId: O.id
							}))
						}, [l, O, s, p]),
						G = Object(r.useCallback)(e => {
							e.stopPropagation(), p && p(w.m.Note), l && s(Object(m.a)({
								subredditId: l,
								userId: O.id
							}))
						}, [l, O, s, p]);
					if (Object(r.useEffect)(() => {
							O && (U(), L(), !O.isSuspended && A())
						}, [O]), !O) return null;
					const K = S && u ? `?toSubredditName=${S.name}&toUserName=${u}` : "",
						Z = {
							[jt.ModLog]: x,
							[jt.Ban]: !O.isSuspended && x && !y && g,
							[jt.Unban]: !O.isSuspended && x && !y && !g,
							[jt.AddNote]: x,
							[jt.Mute]: !O.isSuspended && !C && !j && !y && x && I,
							[jt.Unmute]: !O.isSuspended && C && !j && !y && x && I,
							[jt.Flair]: _ && h && v,
							[jt.Modmail]: I
						};
					return a.a.createElement("div", {
						className: d
					}, Z[jt.ModLog] && a.a.createElement(Ot.a, {
						role: "button",
						onClick: W,
						className: Ct.a.item
					}, a.a.createElement(N.a, {
						name: "mod",
						className: Ct.a.icon
					}), Nt._("User Mod Log", null, {
						hk: "2PiT0s"
					}), !!P && a.a.createElement("span", {
						className: Ct.a.notesCount
					}, P)), Z[jt.AddNote] && a.a.createElement(Ot.a, {
						role: "button",
						onClick: G,
						className: Ct.a.item
					}, a.a.createElement(N.a, {
						name: "user_note",
						className: Ct.a.icon
					}), Nt._("Add Note", null, {
						hk: "34JqdA"
					})), Z[jt.Ban] && a.a.createElement(Ot.a, {
						role: "button",
						onClick: T,
						className: Ct.a.item
					}, a.a.createElement(N.a, {
						name: "unban",
						className: Ct.a.icon
					}), Nt._("Unban User", null, {
						hk: "1aASyW"
					})), Z[jt.Unban] && a.a.createElement(Ot.a, {
						role: "button",
						onClick: B,
						className: Ct.a.item
					}, a.a.createElement(N.a, {
						name: "ban",
						className: Ct.a.icon
					}), Nt._("Ban User", null, {
						hk: "3OhuLx"
					})), Z[jt.Mute] && a.a.createElement(Ot.a, {
						role: "button",
						onClick: D,
						className: Ct.a.item
					}, a.a.createElement(N.a, {
						name: "mod_mute",
						className: Ct.a.icon
					}), Nt._("Mute User", null, {
						hk: "3MCujH"
					})), Z[jt.Unmute] && a.a.createElement(Ot.a, {
						role: "button",
						onClick: F,
						className: Ct.a.item
					}, a.a.createElement(N.a, {
						name: "mod_unmute",
						className: Ct.a.icon
					}), Nt._("Unmute User", null, {
						hk: "sBvvx"
					})), Z[jt.Flair] && a.a.createElement(Ot.a, {
						role: "button",
						onClick: H,
						className: Ct.a.item
					}, a.a.createElement(N.a, {
						name: "tag",
						className: Ct.a.icon
					}), Nt._("Edit user flair", null, {
						hk: "4mTxM"
					})), Z[jt.Modmail] && a.a.createElement(Ot.a, {
						role: "button",
						className: Ct.a.item
					}, a.a.createElement("a", {
						href: `https://mod.reddit.com/mail/create${K}`,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: R,
						className: Ct.a.userActionItemInner
					}, a.a.createElement(N.a, {
						name: "mod_mail",
						className: Ct.a.icon
					}), Nt._("Send modmail", null, {
						hk: "ZUN0n"
					}))))
				},
				Et = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.m.less"),
				yt = n.n(Et);
			const wt = e => {
					var t, n;
					return a.a.createElement("div", {
						className: yt.a.userDetails
					}, a.a.createElement("div", null, a.a.createElement(We.a, {
						className: yt.a.UserNameLink,
						to: `/user/${e.userName}/`
					}, e.userName, (null === (t = e.user) || void 0 === t ? void 0 : t.isSuspended) && a.a.createElement(a.a.Fragment, null, " ", f.fbt._("(suspended)", null, {
						hk: "Us59o"
					}))), e.user.isGold && a.a.createElement(We.a, {
						to: "/premium"
					}, a.a.createElement(st.a, {
						className: yt.a.PremiumIcon
					})), e.user.isEmployee && a.a.createElement(qe.a, null), e.user.isNSFW && a.a.createElement(ot.a, {
						className: yt.a.nsfwIcon,
						title: f.fbt._("NSFW - Adult Content", null, {
							hk: "2Iw7mN"
						})
					})), a.a.createElement("div", {
						className: yt.a.UserNameMetaData
					}, a.a.createElement("div", {
						className: yt.a.MetaDataItem
					}, `u/${e.user.username}`, a.a.createElement("div", {
						className: yt.a.Bullet
					}, "•")), a.a.createElement("div", {
						className: yt.a.MetaDataItem
					}, (e.user.createdUtc || e.user.created) && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ye.d, {
						seconds: e.user.createdUtc || e.user.created
					}), a.a.createElement("div", {
						className: yt.a.Bullet
					}, "•"))), a.a.createElement("div", {
						className: yt.a.MetaDataItem
					}, f.fbt._("{totalKarma} total karma", [f.fbt._param("totalKarma", Object(le.b)((null === (n = e.user.karma) || void 0 === n ? void 0 : n.total) || 0))], {
						hk: "TY8Ig"
					}))))
				},
				St = e => {
					const {
						user: {
							awardedLastMonth: t,
							karma: n
						},
						trophyCase: r,
						prefersReducedAnimations: o
					} = e, s = {
						...at.a,
						...n
					}, i = null == t ? void 0 : t.topAward;
					return a.a.createElement("div", {
						className: yt.a.userInfoGrid
					}, a.a.createElement("div", {
						className: yt.a.col
					}, a.a.createElement("span", {
						className: yt.a.count
					}, Object(le.b)(s.fromPosts)), a.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Post Karma", null, {
						hk: "32naEp"
					}))), a.a.createElement("div", {
						className: yt.a.col
					}, a.a.createElement("span", {
						className: yt.a.count
					}, Object(le.b)(s.fromComments)), a.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Comment Karma", null, {
						hk: "3kyHOE"
					}))), a.a.createElement("div", {
						className: yt.a.col
					}, a.a.createElement("span", {
						className: yt.a.count
					}, Object(le.b)(s.fromAwardsReceived)), a.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Awardee Karma", null, {
						hk: "4CR6i3"
					}))), a.a.createElement("div", {
						className: yt.a.col
					}, a.a.createElement("span", {
						className: yt.a.count
					}, Object(le.b)(s.fromAwardsGiven)), a.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Awarder Karma", null, {
						hk: "kuRXR"
					}))), r.length > 0 && (e => a.a.createElement("div", {
						className: yt.a.col
					}, a.a.createElement("div", {
						className: yt.a.recentAwardOrIconContainer
					}, e.map((e, t) => {
						if (t >= 3) return;
						const n = a.a.createElement("img", {
							className: yt.a.recentAwardOrTropyIcon,
							src: e.icon,
							title: e.name,
							key: `${e.id}-icon`
						});
						return e.url ? a.a.createElement("a", {
							target: Ge.d.BLANK,
							rel: Ge.c,
							href: e.url,
							key: e.id
						}, n) : n
					})), a.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Trophies", null, {
						hk: "302uHC"
					}))))(r), i && ((e, t) => a.a.createElement("div", {
						className: yt.a.col
					}, a.a.createElement("div", {
						className: yt.a.recentAwardOrIconContainer
					}, e && [e].map((e, n) => {
						var r, o;
						if (!(n >= 3)) return a.a.createElement("img", {
							alt: null !== (r = null == e ? void 0 : e.description) && void 0 !== r ? r : null == e ? void 0 : e.name,
							key: null !== (o = null == e ? void 0 : e.description) && void 0 !== o ? o : null == e ? void 0 : e.name,
							className: yt.a.recentAwardOrTropyIcon,
							src: Object(dt.c)({
								award: e,
								prefersReducedMotion: t
							})
						})
					})), a.a.createElement("span", {
						className: yt.a.label
					}, f.fbt._("Recent Awards", null, {
						hk: "3DtwBC"
					}))))(i, o))
				};
			var Pt = e => {
					var t;
					const {
						contextId: n,
						currentUser: o,
						hideNSFWPref: s,
						hoverId: i,
						isLoggedIn: d,
						isNightMode: l,
						moderatorPermissions: u,
						style: p,
						userName: h,
						user: v,
						isCurrentUserBanned: x,
						userProfileStyles: I,
						acceptChats: _,
						isCommentAuthorBlocked: O,
						trophyCase: g,
						lastAuthorModNote: C,
						userIsSubscriber: N,
						subredditId: j,
						prefersReducedAnimations: k,
						onChangeView: E
					} = e, y = Object(b.a)();
					if (Object(r.useEffect)(() => {
							v && j && y(Object(m.x)({
								subredditId: j,
								userId: v.id
							}))
						}, [v, j]), !v) return a.a.createElement("div", {
						style: p
					});
					const w = !!o && Object(it.e)(o) === h,
						S = d && !w && !x && _ && !O,
						P = v.hasUserProfile && !x && !O && !w && v.enableFollowers,
						U = null == u ? void 0 : u.access,
						A = v.isNSFW && s ? `${Re.a.assetPath}/img/user-info-banner.png` : (null == I ? void 0 : I.bannerBackgroundImage) ? I.bannerBackgroundImage : v.bannerImage,
						M = l ? "##D7DADC" : "#0079D3",
						T = l ? "#121212" : "#FFF";
					return a.a.createElement("div", {
						className: yt.a.Container,
						id: i,
						style: {
							backgroundColor: T,
							...p
						}
					}, a.a.createElement("div", {
						className: yt.a.UserContainer
					}, a.a.createElement("div", {
						className: yt.a.BannerImage,
						style: A ? {
							backgroundImage: `url('${A}')`
						} : {}
					}), a.a.createElement("div", {
						className: yt.a.snoovatarContainer
					}, v.snoovatarFullBodyAsset ? a.a.createElement(tt.a, {
						className: yt.a.snoovatar,
						isGold: v.isGold,
						snoovatarUrl: v.snoovatarFullBodyAsset,
						prefersReducedAnimations: !!k,
						origin: Ve.a.Hovercard
					}) : (null === (t = v.accountIcon) || void 0 === t ? void 0 : t.includes("avatars/defaults/v2")) ? a.a.createElement("div", {
						className: yt.a.anonymousSnoovatar
					}, a.a.createElement(Qe, null)) : a.a.createElement(rt.a, {
						className: yt.a.UserIcon,
						iconUrl: v.accountIcon,
						isNSFW: v.isNSFW,
						userName: h
					}))), a.a.createElement(wt, {
						user: v,
						userName: h
					}), a.a.createElement(ne.default, {
						className: yt.a.profileLink,
						to: `/user/${h}/`
					}, f.fbt._("View full profile", null, {
						hk: "2s4Gmf"
					})), a.a.createElement("div", {
						className: yt.a.profileButtonGroup
					}, S && a.a.createElement(Xe.b, {
						className: Object(c.a)(yt.a.ChatButton, yt.a.profileButtonLeft, {
							[yt.a.onlyButton]: !P
						}),
						contextId: n,
						userId: v.id,
						text: f.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0,
						style: {
							color: T,
							backgroundColor: M
						}
					}), P && a.a.createElement(nt.a, {
						className: Object(c.a)(yt.a.SubscribeButton, yt.a.profileButtonRight, {
							[yt.a.onlyButton]: !S
						}),
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(Ze.h)(e ? "unfollow" : "follow", n),
						isFullWidth: !0,
						small: !0,
						style: {
							color: N ? "#D7DADC" : T,
							backgroundColor: M,
							width: 144
						}
					})), a.a.createElement(St, {
						user: v,
						trophyCase: g || [],
						prefersReducedAnimations: !!k
					}), U && C && a.a.createElement(et.b, {
						className: yt.a.lastModNote,
						modNote: C,
						subredditId: j || "",
						onClick: e => {
							e.stopPropagation(), E()
						},
						context: et.a.ModIdCard
					}), n && j && h && !Object(Ke.a)(h) && a.a.createElement(kt, {
						contextId: n,
						subredditId: j,
						username: h,
						onChangeView: E
					}), a.a.createElement($e.i, {
						contextId: n,
						subredditId: j,
						user: v
					}), a.a.createElement("div", {
						className: yt.a.BottomSpacer
					}))
				},
				Ut = n("./src/reddit/hooks/useGqlContext.ts"),
				At = n("./src/lib/makeGqlRequest/index.ts"),
				Mt = n("./src/redditGQL/operations/ProxyAuthor.json");

			function Tt() {
				return (Tt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var Bt = e => {
				const t = Object(o.d)(),
					n = Object(Ut.a)(),
					i = Object(Ke.a)(e.userName),
					[d, c] = Object(r.useState)(i ? void 0 : e.userName);
				Object(r.useEffect)(() => {
					i && (async () => {
						if (!e.contextId) return;
						const r = await ((e, t) => Object(At.a)(e, {
							...Mt,
							variables: {
								thingId: t,
								isPost: Object(u.a)(t)
							}
						}))(n(), e.contextId);
						if (r.ok) {
							const e = r.body,
								n = e.data.commentById || e.data.postInfoById,
								a = n && "DeletedComment" !== n.__typename ? n.moderationInfo.proxyAuthor : void 0;
							a && a.displayName && (c(a.displayName), t(Object(s.d)(a.displayName)))
						}
					})()
				}, [d]);
				const l = Object(o.e)(e => d && Object(k.Ab)(e, {
					userName: d
				}));
				return i ? d && l ? a.a.createElement(Dt, Tt({}, e, {
					userName: d,
					user: l
				})) : a.a.createElement("div", null) : a.a.createElement(Dt, e)
			};

			function Lt() {
				return (Lt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Dt = e => {
					var t, n, c;
					const l = Object(o.e)(d.c),
						u = !!(null == l ? void 0 : l.isModNotesView),
						[m, b] = Object(r.useState)(!u),
						[p, f] = Object(r.useState)(w.m.All),
						h = Object(o.d)();
					Object(r.useEffect)(() => {
						h(Object(s.d)(e.userName))
					}, [h, e.userName]);
					const v = !(null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.id) || (null === (n = null == e ? void 0 : e.user) || void 0 === n ? void 0 : n.isSuspended) ? null === (c = e.lastAuthorModNote) || void 0 === c ? void 0 : c.user.id : e.user.id;
					Object(r.useEffect)(() => {
						e.subredditId && v && h(Object(i.d)(e.subredditId, v))
					}, [h, e.subredditId, v]);
					const x = Object(r.useCallback)(e => {
						b(!m), f(e || w.m.All)
					}, [m, b]);
					return !m && e.subredditId && v ? a.a.createElement(Fe, {
						className: yt.a.ModUserNotesWrapper,
						subredditId: e.subredditId,
						userId: v,
						onChangeView: x,
						defaultTypeFilter: p,
						thingId: e.contextId
					}) : a.a.createElement(Pt, Lt({}, e, {
						onChangeView: x
					}))
				},
				Ft = {
					height: 710,
					width: 340
				},
				Ht = e => a.a.createElement(He.a, {
					className: yt.a.ModUserNotesTooltipContainer,
					tooltipId: e.tooltipId,
					defaultTooltipPosition: "bottom",
					tooltipSizeEstimate: Ft,
					hideCaret: !0
				}, a.a.createElement(Bt, e));
			Ht.WrappedComponent = Dt;
			t.default = Ht
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/Hovercards/helpers.ts"),
				s = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const m = e => Object(i.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class b extends a.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(u.g)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, t = Object(o.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || c.a,
						tooltipType: e.tooltipType
					}), n = `${t}-hover-id`, r = e.author || e.postOrComment.author;
					return a.a.createElement(s.a, {
						authorOrSubredditName: r,
						className: e.hoverDivClassName,
						hoverId: n,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, a.a.createElement("div", {
						id: t
					}, e.children), a.a.createElement(d.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: n,
						sendEvent: e.sendEvent,
						subredditId: m(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: r,
						isCommentAuthorBlocked: e.isCommentAuthorBlocked,
						collapsed: e.collapsed
					}))
				}
			}
			t.default = Object(l.c)(b)
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				d = e => e.alwaysShowChildren ? a.a.createElement(a.a.Fragment, null, e.children) : null;
			t.b = Object(o.a)({
				ErrorComponent: d,
				getComponent: () => Object(s.a)(() => Promise.all([n.e("AuthorHovercard~Reddit"), n.e("AuthorHovercard")]).then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: d
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, n) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				PremiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				premiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				Token: "_2U0P3n4v75sHsDvQmSKNz3",
				token: "_2U0P3n4v75sHsDvQmSKNz3",
				UserNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				userNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				UserNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				userNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				GildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				gildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				Bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				MetaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				metaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				UserNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				userNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				GenericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				genericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				InfoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				infoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				BannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				bannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				UserContainer: "_m7PpFuKATP9fZF4xKf9R",
				userContainer: "_m7PpFuKATP9fZF4xKf9R",
				BottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				bottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				UserActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				userActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				Container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				container: "_1sbZnfdaxhCOFVUCJ3Z75m"
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return v
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/timeAgo/index.ts"),
				s = n("./src/reddit/hooks/useLocale.ts");
			var i = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var r;
					const i = Object(s.a)(),
						d = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : i
						};
					return a.a.createElement(a.a.Fragment, null, Object(o.d)(t, d))
				},
				d = n("./src/lib/humanizeDate/index.ts");
			var c = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var r;
					const o = Object(s.a)(),
						i = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : o
						};
					return a.a.createElement(a.a.Fragment, null, Object(d.a)(t, i))
				},
				l = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				u = n("./src/lib/constants/index.ts");
			var m = function(e) {
					let {
						seconds: t,
						locale: n
					} = e;
					const r = Object(s.a)(),
						o = null != n ? n : r;
					return a.a.createElement(a.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
						const n = e * u.Sb;
						return new Date(n).toLocaleString(t, {
							weekday: "short",
							month: "short",
							year: "numeric",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							timeZoneName: "long"
						})
					}(t, o))
				},
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/eventTools/index.ts");

			function f(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function h(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.DEFAULT_LOCALE;
				const a = Object(p.e)(e, t),
					o = new Date(e * u.Sb);
				let s;
				if (a === p.a.Live || n) return b.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return a === p.a.Future ? s = Object(p.d)(e) ? b.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? f(o, r) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, r) : a === p.a.Past && (s = Object(p.d)(e) ? b.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : f(o, r)), `${s} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,r)}`
			}
			var v = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: r,
					locale: o
				} = e;
				const i = Object(s.a)(),
					d = null != o ? o : i;
				return a.a.createElement(a.a.Fragment, null, h(t, n, r, d))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return v
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
				h = e => a.a.createElement(p, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				v = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return a.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				x = Object(s.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(c.b)(n)(e)
					}
				}),
				I = Object(d.a)(v, [i.a.Click, i.a.Keydown]),
				_ = Object(d.a)(h, [i.a.Click, i.a.Keydown]),
				O = Object(o.b)(x);
			t.c = O(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? a.a.createElement(I, b({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : a.a.createElement(_, b({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/ModNoteItem/index.m.less": function(e, t, n) {
			e.exports = {
				modNote: "pGw5f7WKM2dO9R0Aotv_x",
				header: "_3fOY2z5qmhIMTA5pHRw3HR",
				label: "_1s8o7TA7uhyKDAg_gBrROJ",
				labelIcon: "Z6i_tRKSyOfgORihc8AE2",
				note: "_16zfBhiOYAW7fHRK1jNOh",
				noLabel: "_1AvILjWpUTsm2yDYqIToxg",
				metadata: "OtVR2-taBTlpgc-PYOW3y",
				operatorBlock: "_15WP0iKlbJ_q8GgQVkCs0c",
				userIcon: "_399VmO76IeqVl7VMLjAdBG",
				createdDate: "_1wtfZke59yzfGrkBaSwBaO",
				link: "_2Dl07XZ7LNM7tsrbGG4Ym1"
			}
		},
		"./src/reddit/components/ModNoteItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/helpers/trackers/modNote.ts"),
				l = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/components/UserIcon/index.tsx"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				b = n("./src/reddit/hooks/useLocale.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/ModUserNotes/index.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/ModNoteItem/index.m.less"),
				x = n.n(v);
			! function(e) {
				e.LastAuthorUserNoteTooltip = "LastAuthorUserNoteTooltip", e.ModIdCard = "ModIdCard"
			}(r || (r = {}));
			t.b = e => {
				var t, n, r;
				const o = Object(i.e)(h.db),
					{
						className: v,
						modNote: I,
						onClick: _,
						subredditId: O,
						context: g
					} = e,
					C = "label" in I && I.label || f.c,
					N = "note" in I ? I.note : void 0,
					j = Object(p.b)(f.e[C || "bot"], {
						isFilled: !0
					}),
					k = Object(b.a)(),
					E = new Intl.DateTimeFormat(k, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(I.createdAt)),
					y = I.commentInfo,
					{
						postInfo: w
					} = I,
					S = w ? w.permalink : y ? y.permalink : void 0,
					P = Object(p.b)("external_link"),
					U = Object(l.a)();
				return s.a.createElement("div", {
					className: Object(d.a)(v, x.a.modNote),
					onClick: e => {
						e.stopPropagation(), _ && _(e), (() => {
							const e = "LastAuthorUserNoteTooltip" === g && c.e || "ModIdCard" === g && c.i;
							e && U(e({
								modNote: I,
								subredditId: O
							}))
						})()
					},
					style: C ? {
						backgroundColor: o ? f.b[C] : f.a[C]
					} : {}
				}, C !== f.c && s.a.createElement("div", {
					className: x.a.header
				}, s.a.createElement("div", {
					className: x.a.label
				}, s.a.createElement(j, {
					className: x.a.labelIcon,
					style: {
						color: f.d[C],
						fontSize: "15px",
						lineHeight: "15px"
					}
				}), f.f[C]())), N && s.a.createElement("div", {
					className: Object(d.a)(x.a.note, {
						[x.a.noLabel]: C === f.c
					})
				}, N), s.a.createElement("div", {
					className: x.a.metadata
				}, s.a.createElement(m.default, {
					className: x.a.operatorBlock,
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === g && c.o || "ModIdCard" === g && c.p;
							e && U(e({
								modNote: I,
								subredditId: O
							}))
						})()
					},
					to: `/user/${null===(t=I.operator)||void 0===t?void 0:t.displayName}/`
				}, s.a.createElement(u.a, {
					className: x.a.userIcon,
					userName: (null === (n = I.operator) || void 0 === n ? void 0 : n.displayName) || "",
					isNSFW: !1
				}), "u/", null === (r = I.operator) || void 0 === r ? void 0 : r.displayName), s.a.createElement("span", {
					className: x.a.createdDate
				}, a.fbt._("on {createdDate}", [a.fbt._param("createdDate", E)], {
					hk: "2VoP7K"
				})), S && s.a.createElement("a", {
					className: x.a.link,
					href: S || "",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === g && c.f || "ModIdCard" === g && c.g;
							e && U(e({
								modNote: I,
								subredditId: O
							}))
						})()
					}
				}, s.a.createElement(P, {
					className: x.a.linkIcon,
					style: {
						color: o ? "white" : "black",
						fontSize: "14px",
						opacity: .3
					}
				}))))
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				s = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e, t) {
				const n = Object(o.a)(e, t);
				class r extends a.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(s.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return a.a.createElement(n, d({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(r)
			}
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/helpers/describeApiError/index.ts"),
				d = n("./src/reddit/components/PostList/index.m.less"),
				c = n.n(d);
			t.a = e => {
				const {
					onTryAgain: t,
					apiError: n
				} = e;
				let a = r.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return n && (a = Object(i.a)({
					apiError: n,
					isLoggedOut: !1
				})), o.a.createElement("div", {
					className: c.a.somethingWrong
				}, o.a.createElement("div", {
					className: c.a.somethingWrongText
				}, a), t && o.a.createElement(s.l, {
					onClick: t
				}, r.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			}
		},
		"./src/reddit/components/PostList/index.m.less": function(e, t, n) {
			e.exports = {
				placeholder: "FohHGMokxXLkon1aacMoi",
				seeMoreButton: "_1Uj2L1UhJuirkaXINcf9S8",
				seeMorePostsText: "_2DB_2VI3a-y6nk57R2aWVo",
				somethingWrong: "zfoxmi0VvZvMZu1rHVbMX",
				somethingWrongText: "Ii7DEkcMDxQHElTHeeaci",
				postList: "rpBJOHq2PR60pnwJlUyP0",
				truncatedPostList: "QBfRw7Rj8UkxybFpX-USO",
				SeeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				seeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				ArrowRight: "wakXAw7uCIqmSRV84RKMW",
				arrowRight: "wakXAw7uCIqmSRV84RKMW"
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/config.ts"),
				s = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class l extends a.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: r,
						totalCount: i
					} = t, l = r.description ? r.description : r.name;
					return a.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${o.a.oldRedditUrl}/user/${n}/gilded`
					}, a.a.createElement("div", {
						className: d.a.iconColumn
					}, a.a.createElement("img", {
						alt: l,
						className: d.a.icon,
						src: e
					}), i > 1 && a.a.createElement("span", {
						className: d.a.count
					}, `+${Object(s.b)(i-1)}`)), a.a.createElement("div", {
						className: d.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", r.name), c._plural(i)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				d = n("./src/reddit/models/User/index.ts"),
				c = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = n.n(l);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(s.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(n, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: n,
						hideNSFWPref: a,
						isNSFW: s,
						userName: c
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? o.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(d.e)(n) === c ? o.a.createElement(i.a, {
						altText: r.fbt._("{userName} banner image", [r.fbt._param("userName", c)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : s && a ? null : m
				}
			}
			t.a = Object(c.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/preferences.ts"),
				s = n("./src/reddit/selectors/user.ts");
			const i = Object(a.c)({
					currentUser: s.k,
					hideNSFWPref: s.F
				}),
				d = Object(r.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(o.C)(t, n))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/snoovatarModal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				b = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				p = n("./src/reddit/models/Vote/index.ts"),
				f = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				h = n.n(f);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(e => {
				let {
					isHovercard: t,
					username: n,
					isAvatarPost: i,
					post: f,
					share: x
				} = e;
				const I = Object(l.b)(),
					_ = Object(s.d)(),
					O = f && f.id,
					g = f && f.voteState;
				let C = null;
				O || (C = t ? "user_hovercard" : "profile_overview");
				const N = Object(a.useCallback)(() => I(Object(m.h)(t ? "user_hovercard" : "profile_overview", n)), [t, I, n]);
				return o.a.createElement(u.t, {
					onClick: () => {
						i ? (I(m.i), O && g === p.a.notVoted && _(Object(d.kb)(O))) : N();
						const e = i ? "postify" : "copy";
						_(Object(c.b)({
							clickSource: C,
							share: x,
							source: e
						}))
					},
					className: Object(r.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: i
					}),
					isFullWidth: !0
				}, o.a.createElement(b.a, {
					className: Object(r.a)({
						[h.a.shirtIcon]: !i,
						[h.a.avatarPostButtonShirtIcon]: i
					})
				}), v._("Try this Look", null, {
					hk: "dOuPb"
				}), o.a.createElement("div", {
					className: h.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = n.n(c);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: n,
					className: r,
					isOwnProfile: c,
					onClick: m
				} = e;
				return a.a.createElement(s.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(o.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !n && c,
						[l.a.compactButtonLayout]: t
					}, r)
				}, n ? a.a.createElement(d.a, {
					className: l.a.shirtIcon
				}) : a.a.createElement("div", {
					className: l.a.shirtIcon
				}), n ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : c ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), n ? a.a.createElement("div", {
					className: l.a.chevronIcon
				}) : a.a.createElement(i.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, n) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				s = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = n.n(d),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = n.n(l);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: n,
					username: r,
					editMode: d,
					isDeletingBanner: l,
					onDeleteBanner: m
				} = e;
				return a.a.createElement("div", {
					className: c.a.bannerWrapper
				}, a.a.createElement(i.a, {
					bannerUrl: t,
					isNSFW: n,
					userName: r
				}), d && t && (l ? a.a.createElement(o.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : a.a.createElement(s.a, {
					className: u.a.closeIcon,
					onClick: m
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				s = n("./src/reddit/components/HumanDate/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: n,
					url: r,
					userCreated: d,
					username: c,
					...l
				} = e;
				const u = n ? a.a.createElement(a.a.Fragment, null, "u/", c, " · ", a.a.createElement(s.d, {
					seconds: d,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return r ? a.a.createElement(o.default, i({}, l, {
					className: t,
					to: r
				}), u) : a.a.createElement("span", i({}, l, {
					className: t
				}), u)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				c = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				l = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				u = n("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				m = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				b = n.n(m);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const p = 25;

			function f(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function h(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const v = f("particleDelay", b.a),
				x = f("particleX", b.a),
				I = f("particleFloat", b.a),
				_ = () => {
					const e = h(x),
						t = h(I),
						n = h(v);
					return Object(a.a)(b.a.particle, e, t, n)
				};
			class O extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < p; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: b.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${_()}`
					})
				}
			}
			var g = O;
			const C = e => {
				let {
					className: t,
					isGold: n,
					snoovatarUrl: o,
					prefersReducedAnimations: m,
					origin: p
				} = e;
				const f = Object(i.e)(u.b),
					h = o && Object(l.d)(o) && f,
					v = p === c.a.Profile,
					x = p === c.a.Hovercard;
				return h ? s.a.createElement("div", {
					className: Object(a.a)({
						[b.a.profileTreatment]: v,
						[b.a.hovercardTreatment]: x
					})
				}, s.a.createElement("div", {
					className: b.a.nftProfileUnitContainer
				}, s.a.createElement(d.a, {
					className: b.a.nftProfileUnit,
					imageUrl: o,
					origin: p
				}))) : s.a.createElement("div", {
					className: Object(a.a)(b.a.snoovatarContainer, t)
				}, n && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: b.a.topGlow
				}), s.a.createElement("div", {
					className: b.a.bottomGlow
				}), !m && s.a.createElement(g, null)), s.a.createElement("img", {
					className: Object(a.a)(b.a.snoovatar, {
						[b.a.premiumGlow]: n
					}),
					src: o,
					alt: r.fbt._("User Avatar", null, {
						hk: "3aQoRV"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/reddit/components/Admin/index.tsx"),
				d = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				c = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = n.n(l);
			t.a = e => {
				let {
					title: t,
					username: n,
					isEmployee: o,
					isGold: l,
					isNSFW: m
				} = e;
				return s.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || n, l && s.a.createElement("a", {
					title: a.fbt._("{username} has Reddit Premium", [a.fbt._param("username", n)], {
						hk: "3Fylv"
					}),
					href: `${r.a.redditUrl}/premium`
				}, s.a.createElement(c.a, {
					className: u.a.snoovatarPremiumIcon
				})), o && s.a.createElement(i.a, null), m && s.a.createElement(d.a, {
					className: u.a.snoovatarNsfwIcon,
					title: a.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				profileTreatment: "_2xpFvOlDs0HF8bwR0pDmqt",
				hovercardTreatment: "_34eH8NsQ_ay5kowUWt9-6E",
				nftProfileUnitContainer: "OfvB_Czxn5wwXiBN6RVlG",
				nftProfileUnit: "n5OW4wkmX5R3yYizuJXw1",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				i = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/selectors/experiments/econ/index.ts"),
				l = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				b = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				p = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				f = n.n(p),
				h = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				v = n.n(h),
				x = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				I = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: n,
					currentUserHasSnoovatar: r,
					editMode: p,
					isDeletingBanner: h,
					isEmployee: _,
					isGold: O,
					isNSFW: g,
					isOwnProfile: C,
					onClickSnoovatar: N,
					onDeleteBanner: j,
					prefersReducedAnimations: k,
					snoovatarUrl: E,
					title: y,
					userCreated: w,
					username: S,
					url: P,
					isHovercard: U
				} = e;
				const A = Object(o.e)(e => !C && !!E && Object(c.f)(e));
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!p,
					isNSFW: g,
					username: S,
					isDeletingBanner: !!h,
					onDeleteBanner: j
				}), !p && C && a.a.createElement(s.default, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, a.a.createElement(d.a, {
					name: "settings",
					className: v.a.settingsIcon
				})), a.a.createElement(x.a, {
					isGold: O,
					snoovatarUrl: E,
					prefersReducedAnimations: k,
					origin: U ? i.a.Hovercard : i.a.Profile
				}), a.a.createElement(I.a, {
					isEmployee: _,
					isGold: O,
					isNSFW: g,
					title: y,
					username: S
				}), a.a.createElement(b.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: S,
					userCreated: w,
					url: P
				}), (C || !r && !!E) && a.a.createElement(l.a, {
					compact: n,
					currentUserHasSnoovatar: r,
					isOwnProfile: C,
					onClick: N
				}), A && a.a.createElement(u.a, {
					username: S,
					isHovercard: !!U,
					share: {
						username: S
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, n) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				c = n.n(d),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : s.c.Plain,
				b = e => {
					let {
						border: t,
						priority: n,
						small: r,
						...a
					} = e;
					return o.a.createElement(s.t, u({}, a, {
						priority: m(s.c.Primary, t, n),
						className: Object(l.a)(a.className, c.a.BaseButton),
						size: r ? s.d.S : s.d.M
					}))
				},
				p = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: c.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: c.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = e => {
					let {
						buttonType: t,
						border: n,
						priority: r,
						small: a,
						...i
					} = e;
					return o.a.createElement(s.t, u({}, i, {
						priority: m(s.c.Secondary, n, r),
						className: Object(l.a)(i.className, c.a.BaseButton),
						size: a ? s.d.S : s.d.M,
						text: p(t)
					}))
				};
			class h extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: r,
						small: a = !1,
						isFullWidth: s = !1,
						style: d
					} = this.props, c = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: a,
						isFullWidth: s,
						style: d
					};
					return this.props.userIsSubscriber ? o.a.createElement(f, u({}, c, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(b, u({}, c, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(a.a)(Object(r.c)(o.a))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(i);
			t.a = e => a.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, a.a.createElement(s.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(o.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/DropdownSelector/index.m.less": function(e, t, n) {
			e.exports = {
				dropdownMenu: "_1PLoXiZH4WKzHTfmYIt34X",
				selector: "apk_M-7ks6NcaiMN8cotM",
				selectorContent: "Ot99igbaJ5id3P1tw6wow",
				disabled: "FVIZ8GUq5tMGZlJ7y28ll",
				compact: "_1qaMsHCBrTmejbIUPjsRVI",
				caretDown: "_2i4dyr-iTBOmkZ4fL_M70P",
				topics: "qWs3cMcSjquK-OXl-9jH5",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				isClosed: "_3sZzbLftdYnJNnJ7m7ImmO",
				menuOption: "_1Qm1phX3yfiJHnjgi_O_9V",
				buttonIcon: "_1J0h3Uv7HEaVZiJLcCUlQw"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/Dropdown/Row.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx");
			const u = e => {
				e.preventDefault()
			};
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = a.a.createRef(), this.menuItems = a.a.createRef(), this.containerRef = a.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						this.containerRef && this.containerRef.current && (this.containerRef.current.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, n) => {
						const {
							onSelect: r
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), r(t), n && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
							isOpen: !1
						})
					}, this.onOptionClick = (e, t) => {
						this.onSelectOption(e, t)
					}, this.handleDropdownClick = e => {
						e.preventDefault(), e.stopPropagation(), this.props.onOpen && this.props.onOpen(), this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.handleDropdownBlur = e => {
						let t = !1;
						if (e.relatedTarget === this.dropdownButton.current) t = !0;
						else {
							if (!this.menuItems.current) return;
							const n = this.menuItems.current.getElementsByClassName(s.a.menuOption);
							for (let r = 0; r < n.length; r++) e.relatedTarget === n[r] && (t = !0)
						}
						this.setState({
							isOpen: t
						})
					}, this.handleDropdownKeyDown = e => {
						if (!this.state.isOpen && [40, 32, 13].includes(e.keyCode)) return e.preventDefault(), void this.setState({
							isOpen: !0
						}, this.focusOnFirstOption);
						40 === e.keyCode && (e.preventDefault(), this.focusOnFirstOption()), 27 === e.keyCode && this.state.isOpen && (e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), this.setState({
							isOpen: !1
						}))
					}, this.handleOptionKeyDown = (e, t) => {
						if (32 === e.keyCode || 13 === e.keyCode) this.onSelectOption(e, t, !0);
						else if (38 === e.keyCode || 40 === e.keyCode) {
							if (e.preventDefault(), !this.menuItems.current) return;
							const t = this.menuItems.current.getElementsByClassName(s.a.menuOption);
							for (let n = 0; n < t.length; n++) t[n] === e.target && (38 === e.keyCode && n > 0 && t[n - 1].focus(), 40 === e.keyCode && n < t.length - 1 && t[n + 1].focus())
						}
					}
				}
				componentDidMount() {
					document.body.addEventListener("click", this.handleDocumentClick, !1)
				}
				componentWillUnmount() {
					document.body.removeEventListener("click", this.handleDocumentClick, !1)
				}
				focusOnFirstOption() {
					if (!this.menuItems.current) return;
					const e = this.menuItems.current.getElementsByClassName(s.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: n,
						menuOptionClassName: r
					} = this.props;
					return e.map((e, o) => a.a.createElement(d.b, {
						key: o + e.displayText,
						className: Object(i.a)(s.a.menuOption, r, {
							[s.a.topics]: n
						}),
						noIcon: Boolean(e.icon),
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isTopicsStyle: n
					}, e.icon && e.icon, e.displayText))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: n,
						isCompactStyle: r,
						isTopicsStyle: o,
						menuItemsClassName: d,
						name: m,
						isSaving: b,
						buttonIcon: p,
						disabled: f
					} = this.props, {
						isOpen: h
					} = this.state;
					return a.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(i.a)(s.a.dropdownMenu, t, {
							[s.a.topics]: o
						})
					}, a.a.createElement("button", {
						onClick: f ? void 0 : this.handleDropdownClick,
						className: Object(i.a)(e, s.a.selector, {
							[s.a.compact]: r
						}, {
							[s.a.topics]: o
						}, {
							[s.a.disabled]: f
						}),
						name: m,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: f ? void 0 : this.handleDropdownBlur,
						onKeyDown: f ? void 0 : this.handleDropdownKeyDown
					}, a.a.createElement("span", {
						className: s.a.selectorContent,
						tabIndex: -1
					}, p && a.a.createElement("span", {
						className: s.a.buttonIcon
					}, p), n), f ? null : b ? a.a.createElement(c.a, {
						sizePx: 8,
						className: s.a.loadingIcon
					}) : a.a.createElement(l.a, {
						name: "caret_down"
					})), a.a.createElement("div", {
						className: Object(i.a)(s.a.menuItems, d, {
							[s.a.topics]: o,
							[s.a.isClosed]: !h
						}),
						onMouseDown: u,
						ref: this.menuItems
					}, !f && h && this.getDropdownMenuItems()))
				}
			}
			t.b = m
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			class o extends a.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, o = n || r;
					return a.a.createElement("div", {
						className: e.className
					}, n && a.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!o || e.multiple || void 0 !== e.isPending && !e.isPending) && a.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(s);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(i.a.loadingIcon, n, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				o = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const s = (e, t) => Object(r.a)(e, {
					...a,
					variables: t
				}),
				i = (e, t) => Object(r.a)(e, {
					...o,
					variables: {
						input: {
							preferences: [t]
						}
					}
				})
		},
		"./src/reddit/helpers/author.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = e => !!e && e.endsWith("-ModTeam")
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts");

			function o(e) {
				let {
					apiError: t,
					isLoggedOut: n
				} = e;
				switch (t.type) {
					case a.I.AUTHORIZATION_ERROR:
						return n ? r.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : r.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case a.I.VALIDATION_ERROR:
						return r.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case a.I.NOT_FOUND_ERROR:
						return r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case a.I.SERVER_ERROR:
						return r.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case a.I.LIKELY_UBLOCK_ERROR:
						return r.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return r.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "FsWrq"
						})
				}
			}
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/env/index.ts"),
				a = n("./src/reddit/helpers/parseUrl.ts");
			const o = ["old", "new", "en", "www", "np", "m"],
				s = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(r.a)() ? [window.location.host] : []].concat("").concat(o.map((function(e) {
					return e + ".reddit.com"
				}))).concat(o.map((function(e) {
					return e + ".reddit.local"
				}))),
				i = ["mod.reddit.com"],
				d = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: s.concat("redd.it"),
						pathnameComponents: ["postID36"],
						pathname: /^\/([A-Za-z0-9]+)\/?$/
					},
					postDetail: {
						pathnameComponents: ["postID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)(?:\/\w+)?\/?$/
					},
					comment: {
						pathnameComponents: ["postID36", "commentID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)\/\w+\/(\w+)\/?$/
					},
					modmailConversation: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function c(e, t) {
				const n = d[e];
				if (!d) throw new Error("Could not find reddit URL spec: " + e);
				const r = Object(a.a)(t);
				if (!r) return void console.error("Could not parse url", t);
				if (-1 === (n.hostnames || s).indexOf(r.hostname)) return;
				const o = r.pathname.match(n.pathname);
				if (o) {
					return {
						url: t,
						routeName: e,
						components: n.pathnameComponents.reduce((function(e, t, n) {
							return e[t] = o[n + 1], e
						}), {})
					}
				}
			}

			function l(e) {
				return (e.match(new RegExp(a.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(d).some((function(n) {
						return t = c(n, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(a);
			const s = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				i = e => Object(r.a)(o.a.loadingBar, s(e))
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "w", (function() {
				return m
			})), n.d(t, "t", (function() {
				return b
			})), n.d(t, "r", (function() {
				return p
			})), n.d(t, "s", (function() {
				return f
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "u", (function() {
				return I
			})), n.d(t, "v", (function() {
				return _
			})), n.d(t, "y", (function() {
				return O
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "x", (function() {
				return C
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "z", (function() {
				return k
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "g", (function() {
				return U
			}));
			var r, a, o, s, i, d, c = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(r || (r = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(a || (a = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(o || (o = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(s || (s = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(i || (i = {})),
			function(e) {
				e.Confirm = "confirm"
			}(d || (d = {}));
			const m = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: a
					} = e;
					return e => ({
						...l.n(e),
						action: c.c.VIEW,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: a
						}
					})
				},
				b = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: a
					} = e;
					return e => ({
						...l.n(e),
						action: c.c.VIEW,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: a
						}
					})
				},
				p = () => e => ({
					...l.n(e),
					action: c.c.RECEIVE,
					noun: "notification",
					source: "in_app_notification"
				}),
				f = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: a,
						awardId: o
					} = e;
					return e => {
						Object(u.a)({
							...l.n(e),
							action: "receive",
							noun: "inbox_notification",
							source: s.Inbox,
							inbox: {
								id: t,
								isClicked: n,
								isViewed: r
							},
							notification: {
								type: a
							},
							goldPurchase: {
								awardId: o
							}
						})
					}
				},
				h = e => {
					let {
						dnPromptAction: t
					} = e;
					return e => ({
						...l.n(e),
						action: c.c.CLICK,
						noun: "inbox_banner",
						source: "inbox",
						banner: {
							id: "inbox_dn_banner"
						},
						actionInfo: {
							pageType: "dn_prompt",
							type: t
						}
					})
				},
				v = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: a,
						awardId: o,
						position: s,
						postId: i,
						subredditId: d
					} = e;
					return e => ({
						...l.n(e),
						action: c.c.CLICK,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: a
						},
						goldPurchase: {
							awardId: o
						},
						actionInfo: {
							position: s
						},
						subreddit: d ? {
							id: d
						} : null,
						post: i ? {
							id: i
						} : null
					})
				},
				x = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: a,
						awardId: o,
						position: s,
						postId: i,
						subredditId: d
					} = e;
					return e => ({
						...l.n(e),
						action: c.c.CLICK,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: a
						},
						goldPurchase: {
							awardId: o
						},
						actionInfo: {
							position: s
						},
						subreddit: d ? {
							id: d
						} : null,
						post: i ? {
							id: i
						} : null
					})
				},
				I = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...l.n(e),
						action: c.c.VIEW,
						noun: "inbox",
						source: s.Inbox,
						inbox: {
							badgeCount: t,
							tab: n
						}
					})
				},
				_ = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...l.n(e),
						action: c.c.VIEW,
						noun: "mini_inbox",
						source: s.Inbox,
						inbox: {
							badgeCount: t,
							tab: r.Activity
						}
					})
				},
				O = e => {
					let {
						badgeCount: t
					} = e;
					return e => ({
						...l.n(e),
						action: c.c.CLICK,
						noun: "inbox",
						source: s.Nav,
						inbox: {
							badgeCount: t
						}
					})
				},
				g = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: a,
						awardId: o
					} = e;
					return e => ({
						...l.n(e),
						action: c.c.CLICK,
						noun: "inbox_notification_overflow",
						source: s.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: a
						},
						goldPurchase: {
							awardId: o
						}
					})
				},
				C = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: a
					} = e;
					return e => ({
						...l.n(e),
						action: c.c.VIEW,
						noun: "inbox_notification_overflow",
						source: s.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: a
						}
					})
				};
			var N;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(N || (N = {}));
			const j = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: r,
						isViewed: a,
						type: o
					} = e;
					return e => ({
						...l.n(e),
						action: c.c.CLICK,
						noun: "overflow_option",
						source: s.Inbox,
						inbox: {
							id: n,
							isClicked: r,
							isViewed: a
						},
						notification: {
							type: o
						},
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				k = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: r,
						isViewed: a,
						type: o
					} = e;
					return e => ({
						...l.n(e),
						action: c.c.UNDO,
						noun: "overflow_option",
						source: s.Inbox,
						inbox: {
							id: n,
							isClicked: r,
							isViewed: a
						},
						notification: {
							type: o
						},
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				E = e => {
					let {
						actionInfoType: t
					} = e;
					return e => ({
						...l.n(e),
						action: c.c.CLICK,
						noun: "empty_state_cta",
						source: s.Inbox,
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				y = e => t => ({
					...l.n(t),
					action: c.c.CLICK,
					noun: "notification_app_settings",
					source: s.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: e
					}
				}),
				w = () => e => ({
					...l.n(e),
					action: c.c.CLICK,
					noun: "see_all",
					source: s.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: o.MiniInbox
					}
				}),
				S = () => e => ({
					...l.n(e),
					action: c.c.CLICK,
					noun: "messages",
					source: s.Inbox
				}),
				P = e => {
					let {
						isMiniInbox: t
					} = e;
					return e => ({
						...l.n(e),
						action: c.c.CLICK,
						noun: "mark_all_as_read",
						source: s.Inbox,
						actionInfo: t ? {
							...l.d(e),
							pageType: o.MiniInbox
						} : {}
					})
				},
				U = (e, t) => n => ({
					...l.n(n),
					action: c.c.CLICK,
					noun: "policy_banner",
					source: s.Inbox,
					actionInfo: {
						...l.d(n),
						pageType: e,
						type: t
					}
				})
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					...Object(r.n)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				o = () => e => ({
					...Object(r.n)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				s = () => e => ({
					...Object(r.n)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var i;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(i || (i = {}));
			const d = e => t => {
				const n = Object(r.n)(t);
				return {
					...n,
					source: "marketplace",
					action: "view",
					noun: "product_detail_page",
					actionInfo: {
						...n.actionInfo,
						reason: e,
						pageType: "product_detail_page"
					}
				}
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				a = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/meta.ts");
			const i = "undefined" == typeof document ? function() {
				const e = Object(o.e)(s.j) || a.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? a.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || a.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? a.DEFAULT_LOCALE : e
			};
			t.a = i;
			const d = () => {
				const e = i(),
					t = Object(o.e)(s.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var r, a = n("./node_modules/react/index.js");

			function o(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Bottom;
				const [n, o] = Object(a.useState)(e), s = Object(a.useRef)(null);
				return {
					container: s,
					isScrollGradientVisible: n,
					calculateGradientVisibility: () => {
						const e = s.current;
						if (!e) return;
						const n = e.getBoundingClientRect().height,
							{
								scrollHeight: a,
								scrollTop: i
							} = e,
							d = Math.ceil(i + n) >= a,
							c = Math.ceil(n - i) >= a,
							l = t === r.Bottom ? d : c;
						o(!l)
					}
				}
			}! function(e) {
				e.Top = "top", e.Bottom = "bottom"
			}(r || (r = {}))
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(o.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), a.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, a.a.createElement("stop", {
				stopColor: "#EC0623"
			}), a.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return a.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("g", {
					fill: "inherit"
				}, a.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/models/ModUserNotes/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return b
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/reddit/helpers/isPost.ts"),
				o = n("./src/redditGQL/types.ts");
			const s = "DEFAULT_MOD_NOTE",
				i = (e, t) => `LAST_AUTHOR_MOD_NOTE-${e}${t?"-overlay":""}`,
				d = {
					[o.u.BotBan]: "#1717604F",
					[o.u.PermaBan]: "#3E0A514F",
					[o.u.Ban]: "#5B00414F",
					[o.u.AbuseWarning]: "#6D001A4F",
					[o.u.SpamWarning]: "#5423134F",
					[o.u.SpamWatch]: "#3A26194F",
					[o.u.SolidContributor]: "#0044414F",
					[o.u.HelpfulUser]: "#02315C4F",
					[s]: "#242424"
				},
				c = {
					[o.u.BotBan]: "#CCD7FF",
					[o.u.PermaBan]: "#F3CCFF",
					[o.u.Ban]: "#FFC9D2",
					[o.u.AbuseWarning]: "#FFD5AE",
					[o.u.SpamWarning]: "#FFF494",
					[o.u.SpamWatch]: "#EAD5A2",
					[o.u.SolidContributor]: "#CBFD9A",
					[o.u.HelpfulUser]: "#A6EDFF",
					[s]: "#E6E6E6"
				},
				l = {
					[o.u.BotBan]: "bot_fill",
					[o.u.PermaBan]: "bot_fill",
					[o.u.Ban]: "ban_fill",
					[o.u.AbuseWarning]: "spoiler_fill",
					[o.u.SpamWarning]: "spoiler_fill",
					[o.u.SpamWatch]: "nsfw_language_fill",
					[o.u.SolidContributor]: "new_fill",
					[o.u.HelpfulUser]: "peace_fill",
					[s]: "user_note_fill"
				},
				u = {
					[o.u.BotBan]: "#5349DA",
					[o.u.PermaBan]: "#9C3CAC",
					[o.u.Ban]: "#DE107F",
					[o.u.AbuseWarning]: "#FB133A",
					[o.u.SpamWarning]: "#E79800",
					[o.u.SpamWatch]: "#9C6926",
					[o.u.SolidContributor]: "#00A368",
					[o.u.HelpfulUser]: "#006DC6",
					[s]: "#818384"
				},
				m = {
					[o.u.BotBan]: () => r.fbt._("Bot Ban", null, {
						hk: "2kKP5R"
					}),
					[o.u.PermaBan]: () => r.fbt._("Perma Ban", null, {
						hk: "2NKibN"
					}),
					[o.u.Ban]: () => r.fbt._("Ban", null, {
						hk: "4tkpUP"
					}),
					[o.u.AbuseWarning]: () => r.fbt._("Abuse Warning", null, {
						hk: "3yQJ5"
					}),
					[o.u.SpamWarning]: () => r.fbt._("Spam Warning", null, {
						hk: "4sYfYD"
					}),
					[o.u.SpamWatch]: () => r.fbt._("Spam Watch", null, {
						hk: "3CoM4o"
					}),
					[o.u.SolidContributor]: () => r.fbt._("Good Contributor", null, {
						hk: "31uTvb"
					}),
					[o.u.HelpfulUser]: () => r.fbt._("Helpful", null, {
						hk: "1iapJ2"
					})
				},
				b = e => Object(a.a)(e.id) ? e.belongsTo.id : e.subredditId
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH", e.CommunityAlerts = "COMMUNITY_ALERTS", e.ModCommunityAlerts = "MOD_COMMUNITY_ALERTS"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return !(Object(a.c)(e, {
						experimentEligibilitySelector: a.a,
						experimentName: r.ne
					}) === r.Gd)
				},
				s = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: r.oe
				}) === r.Gd
		},
		"./src/reddit/selectors/experiments/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const l = () => !0,
				u = Object(r.a)(c.X, c.O, (e, t) => !(e || t)),
				m = e => {
					if (!u(e)) return;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: l,
						experimentName: o.ae,
						expEventOverride: !1
					});
					return null == t ? void 0 : t.toLocaleLowerCase()
				},
				b = e => {
					var t;
					const n = m(e);
					if (!n) return !1;
					let r = Object(d.r)(e),
						o = Object(d.d)(e);
					if ("undefined" != typeof window && !o) {
						const e = Object(i.a)("subreddit", window.location.href);
						(o = null === (t = null == e ? void 0 : e.components) || void 0 === t ? void 0 : t.subredditName) && (r = a.Nb.SUBREDDIT)
					}
					if (o && n) {
						const e = (null == o ? void 0 : o.toLocaleLowerCase()) === n;
						return r === a.Nb.SUBREDDIT && e
					}
					return !1
				},
				p = e => !!m(e) && Object(s.c)(e, {
					experimentEligibilitySelector: u,
					experimentName: o.be,
					expEventOverride: !1
				}) !== o.ce.Readonly
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			}));
			const r = e => e.user.notificationPrefs.api.getPreferences.loaded,
				a = e => e.user.notificationPrefs.api.getPreferences.pending,
				o = e => e.user.notificationPrefs.api.setPreferences.pending,
				s = e => e.user.notificationPrefs.preferences,
				i = e => e.user.notificationPrefs.isNotificationPromptVisible,
				d = (e, t) => {
					var n, r;
					const a = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						o = null === (n = null == a ? void 0 : a.rows) || void 0 === n ? void 0 : n.byId;
					return o && (null === (r = o[t]) || void 0 === r ? void 0 : r.isEnabled)
				},
				c = (e, t) => !t.some(t => d(e, t))
		},
		"./src/reddit/selectors/subredditModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return s
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "o", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "f", (function() {
				return _
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/models/SubredditModeration/index.ts");
			const o = [],
				s = Object(r.a)((e, t) => {
					let {
						subredditId: n,
						before: r,
						after: o
					} = t;
					const s = Object(a.e)(n, o, r),
						i = e.pages.modHub.moderators.userOrder.data[n] && e.pages.modHub.moderators.userOrder.data[n][s];
					return i ? i.map(t => e.pages.modHub.moderators.models[n][t]) : []
				}),
				i = (e, t, n) => !!e.pages.modHub.moderators.models[t] && !!e.pages.modHub.moderators.models[t][n],
				d = (e, t) => {
					let {
						subredditId: n,
						beforeEditable: r,
						afterEditable: o
					} = t;
					const s = Object(a.e)(n, o, r),
						i = e.pages.modHub.moderators.editableUserOrder.data[n] && e.pages.modHub.moderators.editableUserOrder.data[n][s];
					return i ? i.map(t => e.pages.modHub.moderators.editableModerators[n][t]) : []
				},
				c = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.editableModerators[n] || null
				},
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.models[n] || null
				},
				u = e => !!e.pages.modHub.moderators.search.api.pending,
				m = e => e.pages.modHub.moderators.search.result,
				b = (e, t) => {
					let {
						subredditId: n
					} = t;
					return !!e.pages.modHub.moderators.invitePending[n]
				},
				p = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.loadMoreModerators[n] && e.pages.modHub.moderators.loadMoreModerators[n].after
				},
				f = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.loadMoreModerators[n] && e.pages.modHub.moderators.loadMoreModerators[n].before
				},
				h = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.loadMoreEditableModerators[n] && e.pages.modHub.moderators.loadMoreEditableModerators[n].after
				},
				v = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.pages.modHub.moderators.loadMoreEditableModerators[n] && e.pages.modHub.moderators.loadMoreEditableModerators[n].before
				},
				x = (e, t) => {
					const n = Object(a.e)(t.subredditId, t.after, t.before);
					return !!e.pages.modHub.moderators.userOrder.api.pending[n]
				},
				I = (e, t) => {
					const n = Object(a.e)(t.subredditId, t.afterEditable, t.beforeEditable);
					return !!e.pages.modHub.moderators.editableUserOrder.api.pending[n]
				},
				_ = Object(r.a)((e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.pages.modHub.moderators.invitedModerators.userOrder[n];
					return r ? r.map(t => e.pages.modHub.moderators.invitedModerators.models[n][t]) : o
				})
		},
		"./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/redditGQL/operations/ProxyAuthor.json": function(e) {
			e.exports = JSON.parse('{"id":"695a72c78215"}')
		},
		"./src/redditGQL/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/redditGQL/operations/UserSubredditsNotificationsLevel.json": function(e) {
			e.exports = JSON.parse('{"id":"8404d1f9e84d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.ef16b492848fcd0c7bf5.js.map