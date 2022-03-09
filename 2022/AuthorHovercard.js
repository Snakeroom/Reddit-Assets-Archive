// https://www.redditstatic.com/desktop2x/AuthorHovercard.bf081f1220eb7228632f.js
// Retrieved at 3/9/2022, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/lib/constants/colors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = {
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
			var a = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/constants/intlSupport.ts");

			function s(e, {
				showDay: t,
				useUtc: n,
				shortMonths: s,
				locale: o = a.D
			} = {}) {
				const i = new Date(e * a.Sb);
				return r.a ? new Intl.DateTimeFormat(o, {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(i) : i.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/constants/index.ts");
			t.a = (e, t = a.D) => {
				return new Date(1e3 * e).toLocaleString(t, {
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
		"./src/lib/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var a = n("./src/lib/delay/index.ts"),
				r = n("./src/lib/getParsedUserAgent/index.ts"),
				s = n("./src/lib/localStorageAvailable/index.ts"),
				o = n("./src/lib/notifications/constants.ts"),
				i = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const c = () => {
					if (Object(i.a)() !== o.c.NotificationsSupported) return o.a.Unsupported;
					const e = Object(s.a)() && localStorage.getItem(o.f) === o.g;
					return "granted" === Notification.permission ? o.a.Granted : "denied" === Notification.permission ? o.a.Denied : e ? o.a.Closed : o.a.Default
				},
				d = () => !!Object(s.a)() && (localStorage.removeItem(o.f), !0),
				l = async (e, t, n, i, d, l) => {
					const u = c();
					if (u === o.a.Unsupported) return void l();
					if (Object(s.a)()) {
						const t = localStorage.getItem(o.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + o.i > n) return void l();
						localStorage.setItem(o.h, n.toString())
					}
					if (!t && u === o.a.Denied) return i(!1, !0), void l();
					if (!t && u === o.a.Granted) return d(!1), void l();
					if (!t && u === o.a.Closed) return void l();
					let m = o.a.Default;
					const b = navigator.userAgent;
					switch (Object(r.b)(b) || Object(r.f)(b) ? Object(a.a)(1800).then(() => {
						m === o.a.Default && n()
					}) : n(), m = await Notification.requestPermission()) {
						case "granted":
							d(!0);
							break;
						case "denied":
							i(!0, !0);
							break;
						case "default":
							l();
							break;
						default:
							i(!0, !1), localStorage.setItem(o.f, o.g)
					}
				}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			const r = "INCONTEXT__BANNED",
				s = "INCONTEXT__MUTED",
				o = Object(a.a)(r),
				i = Object(a.a)(s)
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return b
			}));
			const a = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__FAILED",
				r = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				s = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				o = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
				i = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__LOADED",
				c = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__PENDING",
				d = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED",
				l = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_FAILED",
				u = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_LOADED",
				m = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_PENDING",
				b = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_UPDATED"
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "b", (function() {
				return j
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var l = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(r.a)(s.c),
				b = Object(r.a)(s.b),
				p = Object(r.a)(s.a),
				f = Object(r.a)(s.f),
				h = Object(r.a)(s.e),
				v = Object(r.a)(s.d),
				I = e => async (t, n, {
					gqlContext: a
				}) => {
					e === l.a.Push ? t(f()) : t(m()), await async function(e, t, n) {
						const a = await Object(i.a)(e(), {
							channel: t
						});
						if (a.ok && a.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									a = n && n.sections;
								if (a) return function(e) {
									const t = {},
										n = [];
									let a = {},
										r = [];
									const s = e => {
										const {
											rowIds: s,
											rowsCollection: o
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let a = 0; a < e.rows.length; a++) {
													const r = e.rows[a],
														s = r.messageType;
													t.push(s), n[s] = r
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										a = {
											...a,
											...o
										}, r = [...r, ...s];
										const i = e.id;
										n.push(i), t[i] = {
											...e,
											rows: s
										}
									};
									for (let o = 0; o < e.length; o++) s(e[o]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: a,
											allIds: r
										}
									}
								}(a)
							}(a.body);
							t === l.a.Push ? n(h(e)) : n(b(e))
						} else t === l.a.Push ? n(v({
							error: a.error
						})) : n(p({
							error: a.error
						}))
					}(a, e, t)
				};
			const x = Object(r.a)(s.g),
				_ = e => async (t, n, {
					gqlContext: r
				}) => {
					(await Object(i.b)(r(), e)).ok ? (N(t, e), function(e) {
						e(Object(o.f)({
							kind: u.b.SuccessCommunity,
							text: a.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(o.f)({
							kind: u.b.Error,
							text: a.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function N(e, t) {
				e(x({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const C = Object(r.a)(s.j),
				O = Object(r.a)(s.i),
				g = Object(r.a)(s.k),
				k = Object(r.a)(s.h),
				j = e => async (t, n, {
					gqlContext: a
				}) => {
					var r, s;
					t(C());
					const i = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(a(), e);
					if (null === (s = null === (r = i.error) || void 0 === r ? void 0 : r.fields) || void 0 === s ? void 0 : s.length) return t(k({
						error: i.error
					})), void t(Object(o.d)());
					if (i.ok && i.body) {
						const e = i.body,
							n = e && e.data,
							a = n && n.identity && n.identity.subscribedSubreddits,
							r = a && a.pageInfo,
							s = (a && a.edges).map(e => e.node);
						t(O({
							nodes: s,
							pageInfo: r
						}))
					}
				}
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var a = n("./src/lib/notifications/index.ts"),
				r = n("./src/lib/notifications/constants.ts"),
				s = n("./src/lib/notifications/featureFlags.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => o.d.pushNotificationsBrowserSupported(e) ? Object(s.a)() : r.c.BrowserUnsupported,
				d = e => {
					switch (e) {
						case r.a.Denied:
							i.ob(!1), Object(a.c)();
							break;
						case r.a.Default:
						case r.a.Granted:
							i.ob(!0), Object(a.c)();
							break;
						case r.a.Closed:
							i.ob(!0)
					}
				}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return ae
			})), n.d(t, "b", (function() {
				return oe
			})), n.d(t, "e", (function() {
				return ie
			})), n.d(t, "a", (function() {
				return ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/get.js"),
				s = n.n(r),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/apiRequestState.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subreddit.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				h = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
				endpoint: Object(h.a)(Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.jb.GET,
				data: n
			});
			var x = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				_ = n("./src/reddit/models/SubredditModeration/index.ts"),
				N = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				O = n("./src/reddit/selectors/bannedUser.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/subredditModeration/constants.ts"),
				E = n("./src/lib/initializeClient/installReducer.ts"),
				y = n("./node_modules/redux/es/redux.js");
			var w = (e = null, t) => {
				switch (t.type) {
					case j.o:
					case j.n:
						return null;
					case j.m:
						return t.payload;
					default:
						return e
				}
			};
			const S = {};
			var P = (e = S, t) => {
					switch (t.type) {
						case j.o: {
							const {
								subredditId: n,
								fetchedToken: a
							} = t.payload, r = Object(_.e)(n, a);
							return {
								...e,
								[r]: !0
							}
						}
						case j.n:
						case j.m: {
							const {
								subredditId: n,
								fetchedToken: a
							} = t.payload, r = Object(_.e)(n, a);
							return {
								...e,
								[r]: !1
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
			var M = (e = A, t) => {
					switch (t.type) {
						case j.n: {
							const {
								fetchedToken: n,
								subredditId: a
							} = t.payload, r = Object(_.e)(a, n);
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				T = n("./src/reddit/actions/inContextModeration.ts");
			var B = (e = null, t) => {
				switch (t.type) {
					case T.a:
						return t.payload;
					default:
						return e
				}
			};
			const L = {};
			var D = (e = L, t) => {
					switch (t.type) {
						case j.n: {
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
			var R = (e = H, t) => {
				switch (t.type) {
					case j.l:
					case j.n: {
						const {
							subredditId: n,
							bannedUsers: a
						} = t.payload;
						return Object(F.merge)(e, {
							[n]: a
						})
					}
					case j.s: {
						const {
							subredditId: n,
							userId: a
						} = t.payload;
						return Object(F.unsetIn)(e, [n, a])
					}
					default:
						return e
				}
			};
			var W = (e = null, t) => {
				switch (t.type) {
					case j.r:
					case j.q:
						return null;
					case j.p:
						return t.payload;
					default:
						return e
				}
			};
			var K = (e = !1, t) => {
					switch (t.type) {
						case j.r:
							return !0;
						case j.q:
						case j.p:
							return !1;
						default:
							return e
					}
				},
				Z = Object(y.c)({
					error: W,
					pending: K
				});
			var G = (e = null, t) => {
					switch (t.type) {
						case j.r:
						case j.p:
							return null;
						case j.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				q = Object(y.c)({
					api: Z,
					result: G
				});
			const J = {};
			var Q = (e = J, t) => {
					switch (t.type) {
						case j.n: {
							const {
								subredditId: n,
								bannedUserIds: a
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...a]
							} : {
								...e,
								[n]: a
							}
						}
						case j.s: {
							const {
								subredditId: n,
								userId: a
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== a)
							}
						}
						case j.l: {
							const {
								subredditId: n,
								bannedUserIds: a
							} = t.payload, r = a[0];
							return r && e[n] && -1 === e[n].indexOf(r) ? {
								[n]: [r, ...e[n]]
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
					search: q,
					userOrder: Q
				});
			Object(E.a)({
				features: {
					banned: z
				}
			});
			const V = Object(o.a)(j.o),
				X = Object(o.a)(j.n),
				Y = Object(o.a)(j.m),
				$ = (e, t = {}) => async (n, a, {
					apiContext: r
				}) => {
					const s = a(),
						o = t.after || "",
						i = Object(_.e)(e, o),
						c = s.features.banned.fetchedTokens[i];
					if (s.features.banned.api.pending[i] || c) return;
					n(V({
						subredditId: e,
						fetchedToken: o
					}));
					const d = s.subreddits.models[e].name,
						l = await I(r(), d, t);
					l.ok ? n(X({
						...l.body,
						fetchedToken: o
					})) : n(Y({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(j.r), te = Object(o.a)(j.q), ne = Object(o.a)(j.p), ae = (e, t) => async (n, a, {
					apiContext: r
				}) => {
					const s = a().subreddits.models[e].name,
						o = {
							username: Object(x.a)(t)
						};
					n(ee());
					const i = await I(r(), s, o);
					i.ok ? n(te(i.body)) : n(ne(i.error))
				}, re = Object(o.a)(j.l), se = Object(o.a)(j.s), oe = (e, t, n) => async (r, o, {
					apiContext: c
				}) => {
					const d = o(),
						u = d.subreddits.models[e].url,
						h = d.subreddits.models[e].name;
					t.username = Object(x.a)(t.username), r(Object(i.h)(n));
					const v = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
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
					}))(c(), u, t);
					if (v.ok) {
						r(Object(i.e)(n));
						const e = {
							username: t.username
						};
						r(Object(l.f)({
							kind: N.b.SuccessMod,
							text: a.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const s = await I(c(), h, e);
						s.ok && r(re(s.body))
					} else {
						r(Object(i.f)(n, v.error));
						const e = s()(v, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: N.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const i = r().subreddits.models[e].url,
						c = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(o(), i, t);
					if (c.ok) n(se({
						subredditId: e,
						userId: t
					})), n(Object(l.f)({
						kind: N.b.SuccessMod,
						text: a.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = s()(c, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: N.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (n, a) => {
					const r = a();
					await Promise.all([(async () => {
						if (!Object(C.b)(u.a.BAN_USER)(r) && !Object(g.P)(r, {
								subredditId: e
							})) {
							const t = Object(g.S)(r, {
								subredditId: e
							});
							await n(Object(d.o)(t.name))
						}
					})(), (async () => {
						const a = Object(k.wb)(r, {
							userName: t
						});
						if (!a) return;
						const s = Object(O.h)(r, {
							subredditId: e
						});
						s && s[a.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(c.i)(u.a.BAN_USER))
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
				operator: "_3mkZJiG1HSCl4dWJD3SJX7",
				createdDate: "_3DKC-l35UqIQdbPaQm6M_T",
				deleteButton: "_3xGgEou3qoyvyHtklgaVwR"
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
				title: "_2ghDKWDpLbqs07Hculyc4f"
			}
		},
		"./src/reddit/components/CCM/ModUserNoteWithIcon/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "CaQnYM63MUs5K_AUdPb4I",
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
				menuItems: "KQvgghskz0EWs7oUOt5cY",
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
				menuOption: "_2b0kgVBRKg4jZMW9zXrnf"
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
				return a
			}));
			var a, r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/chat/toggle.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(a || (a = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: n,
				sendEvent: r,
				contextId: o,
				priority: i,
				Icon: c,
				redditStyle: u,
				isFullWidth: m,
				eventSource: b,
				onClick: p,
				onAddUserToQuickReplyList: f,
				children: h,
				style: v
			}) => {
				return s.a.createElement(d.t, {
					onClick: t => {
						if (p && p(t), e(), b === a.awardNotification) return f();
						r(Object(l.b)(o))
					},
					className: n,
					text: t,
					priority: i,
					Icon: c,
					redditStyle: u,
					isFullWidth: m,
					style: v
				}, h)
			};
			u.displayName = "ChatButton";
			const m = Object(o.b)(null, (e, {
				contextId: t,
				userId: n
			}) => ({
				onStartChat: () => {
					e(Object(i.b)(n, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(i.a)(n))
				}
			}));
			t.b = m(Object(c.c)(u))
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
			var a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const v = {
					height: 200,
					width: 200
				},
				I = e => {
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
				x = Object(d.a)(e => {
					const {
						children: t,
						className: n,
						style: a,
						caretPosition: r,
						caretColor: o,
						onClick: i,
						hideCaret: d,
						...l
					} = e;
					return s.a.createElement("div", h({
						onClick: i,
						className: Object(c.a)(n, f.a.StyledTooltipContainer, {
							[f.a.caretOnTop]: "top" === r,
							[f.a.caretOnLeft]: "left" === r,
							[f.a.caretOnRight]: "right" === r,
							[f.a.caretOnBottom]: "bottom" === r,
							[f.a.hideCaret]: d
						}),
						style: {
							...a,
							"--contentTooltip-caretColor": o && o[r] ? o[r] : Object(m.a)(e).body
						}
					}, l), t)
				}),
				_ = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(b.b)(t)(e)
				}),
				N = Object(u.a)(x, [a.a.Click, a.a.Keydown]),
				C = Object(o.b)(_);
			class O extends s.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = v
						} = this.props;
						l.a.read(() => {
							const n = document.getElementById(e);
							if (!n) return;
							const a = n.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let r = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									r = window.innerHeight - a.bottom > t.height;
									break;
								case "left":
									r = a.left > t.width;
									break;
								case "right":
									r = a.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									r = a.top > t.height
							}
							this.setState({
								position: r ? this.props.defaultTooltipPosition : I(this.props.defaultTooltipPosition)
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
						caretPosition: a
					} = this.getPositions(e);
					return s.a.createElement(N, h({}, this.props, {
						caretPosition: a,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = C(O)
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(a.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~NftProfileUnit"), n.e("NftProfileUnit")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
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
			t.a = r
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/ImageInput/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/models/ApiRequestState/index.ts"),
				u = n("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = n("./src/reddit/components/EditableImage/index.m.less"),
				b = n.n(m);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				altText: e,
				children: t,
				className: n,
				isProfileCard: a,
				isLoading: m,
				imageUrl: p,
				onFileSelected: f
			}) => {
				const h = Object(s.e)(u.a);
				return r.a.createElement("div", {
					className: Object(o.a)(b.a.Container, n)
				}, r.a.createElement("label", {
					className: b.a.HitBox
				}, r.a.createElement("span", {
					className: b.a.ImageContainer,
					role: "presentation"
				}, p ? r.a.createElement("img", {
					alt: e,
					className: b.a.Image,
					src: p
				}) : t), r.a.createElement(i.a, {
					className: b.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						f(e, t)
					},
					isPending: h ? m : void 0
				}), !m && r.a.createElement("div", {
					className: Object(o.a)(b.a.EditButton, {
						[b.a.profileCard]: a
					})
				}, r.a.createElement(d.a, {
					name: "add_media",
					className: b.a.EditIcon
				}))), m && r.a.createElement(c.a, {
					className: b.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/inContextModeration.ts"),
				c = n("./src/reddit/actions/snoovatarModal.ts"),
				d = n("./src/reddit/actions/subredditModeration/ban.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/helpers/isPost.ts"),
				m = n("./src/reddit/selectors/bannedUser.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				f = n("./src/reddit/selectors/gold/awardIcon.ts"),
				h = n("./src/reddit/selectors/moderatorPermissions.ts"),
				v = n("./src/reddit/selectors/modUserNotes.ts"),
				I = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/profile.ts"),
				_ = n("./src/reddit/selectors/structuredStyles.ts"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/tooltip.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/selectors/userFlair.ts"),
				k = n("./src/reddit/selectors/userPrefs.ts"),
				j = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				E = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/config.ts"),
				w = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				S = n("./src/lib/lessComponent.tsx"),
				P = n("./src/lib/prettyPrintNumber/index.ts"),
				U = n("./src/reddit/components/ChatButton/index.tsx"),
				A = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				T = n("./src/reddit/components/SubscribeButton/index.tsx"),
				B = n("./src/reddit/components/UserIcon/index.tsx"),
				L = n("./src/reddit/endpoints/profile/info.ts"),
				D = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				F = n("./src/reddit/icons/fonts/Info/index.tsx"),
				H = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				R = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				W = n("./src/reddit/models/Gold/Award.ts"),
				K = n("./src/reddit/models/User/index.ts"),
				Z = n("./src/reddit/components/HumanDate/index.tsx"),
				G = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				q = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				J = n("./src/reddit/actions/modal.ts"),
				Q = n("./src/reddit/constants/modals.ts"),
				z = n("./src/reddit/components/Hovercards/helpers.ts"),
				V = n("./src/reddit/icons/fonts/index.tsx"),
				X = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Y = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				$ = n.n(Y);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = Object(o.c)({
				hasModMailPermissions: Object(h.b)(X.c.mail),
				isUserBanned: (e, t) => !!Object(m.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(O.wb)(e, {
					userName: t.username
				})
			});
			class ne extends r.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: a,
						onUnbanUser: s,
						sendEvent: o,
						toggleBanModal: i,
						toggleMuteModal: c
					} = this.props;
					return r.a.createElement("div", {
						className: e
					}, a ? r.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							s(this.props.user.id), o(D.e(t))
						}
					}, r.a.createElement(V.a, {
						name: "ban",
						isFilled: !0,
						className: $.a.icon
					}), ee._("Unban User", null, {
						hk: "1aASyW"
					})) : r.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							i(), o(D.a(t))
						}
					}, r.a.createElement(V.a, {
						name: "ban",
						className: $.a.icon
					}), ee._("Ban User", null, {
						hk: "3OhuLx"
					})), n && r.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							c(), o(D.d(t))
						}
					}, r.a.createElement(V.a, {
						name: "mod_mute",
						className: $.a.icon
					}), ee._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var ae = Object(s.b)(te, (e, {
					username: t,
					subredditId: n,
					contextId: a
				}) => ({
					onUnbanUser: t => e(Object(d.e)(n, t)),
					requestUserBanInfo: () => e(Object(d.c)(n, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(i.c)({
							username: t,
							subredditId: n,
							contextId: a
						})), e(Object(d.a)(n, t))
					},
					toggleMuteModal: () => {
						e(Object(i.d)({
							username: t,
							subredditId: n,
							contextId: a
						})), e(Object(J.i)(Q.a.MUTE_USER))
					}
				}))(ne),
				re = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: se
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var oe = Object(s.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(re.g)(t.subredditId, t.username))
				}))(e => r.a.createElement(z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(D.c(e.contextId))
					}
				}, r.a.createElement(V.a, {
					name: "tag",
					className: $.a.icon
				}), se._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ie = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ce = n.n(ie);

			function de() {
				return (de = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const le = S.a.wrapped(B.a, "UserIcon", ce.a),
				ue = S.a.wrapped(T.a, "SubscribeButton", ce.a),
				me = S.a.wrapped(U.b, "ChatButton", ce.a),
				be = S.a.wrapped(R.a, "PremiumIcon", ce.a),
				pe = S.a.wrapped(w.a, "UserNameLink", ce.a),
				fe = S.a.div("UserNameMetaData", ce.a),
				he = S.a.div("MetaDataItem", ce.a),
				ve = S.a.div("Bullet", ce.a),
				Ie = S.a.div("UserNameContainer", ce.a),
				xe = S.a.div("KarmaGrid", ce.a),
				_e = S.a.div("GenericKarma", ce.a),
				Ne = S.a.a("InfoLink", ce.a),
				Ce = S.a.div("KarmaCount", ce.a),
				Oe = S.a.div("GenericKarmaLabel", ce.a),
				ge = S.a.div("BannerImage", ce.a),
				ke = S.a.div("UserContainer", ce.a),
				je = S.a.div("BottomSpacer", ce.a),
				Ee = S.a.div("Container", ce.a),
				ye = e => r.a.createElement("div", null, r.a.createElement("div", null, r.a.createElement(pe, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && r.a.createElement(H.a, {
					className: ce.a.adminIcon,
					title: E.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && r.a.createElement(w.a, {
					to: "/premium"
				}, r.a.createElement(be, null))), r.a.createElement(fe, null, r.a.createElement(he, null, `u/${e.userName}`, r.a.createElement(ve, null, "•")), r.a.createElement(he, null, (e.user.createdUtc || e.user.created) && r.a.createElement(Z.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				we = e => {
					const {
						user: {
							karma: t
						}
					} = e, n = {
						...L.a,
						...t
					};
					return r.a.createElement(xe, null, r.a.createElement(_e, null, r.a.createElement(Ce, null, Object(P.b)(n.fromPosts)), r.a.createElement(Oe, null, E.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [E.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), r.a.createElement(_e, null, r.a.createElement(Ce, null, Object(P.b)(n.fromComments)), r.a.createElement(Oe, null, E.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [E.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))), r.a.createElement(_e, null, r.a.createElement(Ce, null, Object(P.b)(n.fromAwardsReceived)), r.a.createElement(Oe, null, E.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [E.fbt._plural(n.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), r.a.createElement(Ne, {
						href: W.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(F.a, {
						className: ce.a.infoIcon
					})))), r.a.createElement(_e, null, r.a.createElement(Ce, null, Object(P.b)(n.fromAwardsGiven)), r.a.createElement(Oe, null, E.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [E.fbt._plural(n.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), r.a.createElement(Ne, {
						href: W.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(F.a, {
						className: ce.a.infoIcon
					})))))
				},
				Se = e => {
					var t, n;
					const {
						className: a,
						contextId: s,
						currentUser: o,
						hideNSFWPref: i,
						hoverId: c,
						isLoggedIn: d,
						onClickSnoovatar: l,
						moderatorPermissions: u,
						prefersReducedAnimations: m,
						profile: b,
						sendEvent: p,
						style: f,
						subredditId: h,
						topAwardIcon: v,
						userName: I,
						user: x,
						userFlair: _,
						isCurrentUserBanned: N,
						userProfileStyles: C,
						acceptChats: O,
						isCommentAuthorBlocked: g
					} = e;
					if (!x) return r.a.createElement(Ee, {
						style: f
					});
					const k = !!o && Object(K.e)(o) === I,
						j = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						w = x.accountIcon || `${y.a.assetPath}/img/snoo_user_placeholder.png`,
						S = null == u ? void 0 : u.flair,
						P = null == u ? void 0 : u.access,
						U = (null == _ ? void 0 : _.templateIds) && (null === (t = null == _ ? void 0 : _.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						M = null === (n = null == _ ? void 0 : _.displaySettings) || void 0 === n ? void 0 : n.isEnabled,
						{
							awardedLastMonth: T
						} = x,
						B = !!x.snoovatarFullBodyAsset,
						L = x.isNSFW && i;
					let F;
					return F = B ? !L && C && C.bannerBackgroundImage || void 0 : L ? `${y.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, r.a.createElement(Ee, {
						className: a,
						id: c,
						style: f
					}, !B && F && r.a.createElement(ge, {
						style: {
							backgroundImage: `url('${F}')`
						}
					}), r.a.createElement(ke, null, B ? r.a.createElement(q.a, {
						isHovercard: !0,
						bannerBackgroundImage: F,
						compact: !0,
						currentUserHasSnoovatar: j,
						isEmployee: x.isEmployee,
						isGold: x.isGold,
						isNSFW: x.isNSFW,
						isOwnProfile: k,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: x.snoovatarFullBodyAsset,
						title: null == b ? void 0 : b.title,
						userCreated: x.created,
						username: I,
						url: `/user/${e.userName}/`
					}) : r.a.createElement(Ie, null, r.a.createElement(le, {
						iconUrl: w,
						isNSFW: x.isNSFW,
						userName: I
					}), r.a.createElement(ye, {
						title: null == b ? void 0 : b.title,
						user: x,
						userName: I
					})), r.a.createElement(we, {
						user: x
					}), T && r.a.createElement(G.a, {
						recentAwardings: T,
						topAwardIcon: v,
						username: I
					}), d && !k && !N && O && !g && r.a.createElement(me, {
						contextId: s,
						userId: x.id,
						text: E.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), x.hasUserProfile && !N && !g && !k && x.enableFollowers && r.a.createElement(ue, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(D.g)(e ? "unfollow" : "follow", s),
						isFullWidth: !0,
						small: !0
					})), P && s && !k && h && r.a.createElement(ae, {
						contextId: s,
						subredditId: h,
						sendEvent: p,
						username: I
					}), S && s && U && M && h && r.a.createElement(oe, {
						contextId: s,
						subredditId: h,
						sendEvent: p,
						username: I
					}), r.a.createElement(A.i, {
						contextId: s,
						subredditId: h,
						user: x
					}), !(P || d) && r.a.createElement(je, null))
				},
				Pe = Object(M.a)(Se),
				Ue = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return r.a.createElement(Pe, de({
						isOpen: t
					}, e))
				};
			Ue.WrappedComponent = Se;
			var Ae = Ue;
			const Me = Object(o.c)({
					activeTooltipId: C.a,
					currentUser: O.k,
					isLoggedIn: O.O,
					hideNSFWPref: O.E,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(h.m)(e, {
						subredditId: t
					}) : void 0,
					prefersReducedAnimations: k.c,
					profile: (e, {
						userName: t
					}) => Object(x.j)(e, {
						profileName: t
					}),
					topAwardIcon: (e, {
						userName: t
					}) => Object(f.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: O.wb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(g.d)(e, {
						subredditId: t
					}) : void 0,
					isCurrentUserBanned: (e, t) => !!Object(N.l)(t) && Object(N.db)(e, t),
					userProfileStyles: (e, t) => Object(_.m)(e, Object(x.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(x.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					},
					isInModNotesExperiment: (e, {
						subredditId: t
					}) => Object(p.a)(e, t),
					trophyCase: (e, t) => Object(x.r)(e, Object(x.m)(e, t.userName)),
					isNightMode: O.bb,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const n = Object(u.a)(t.contextId) ? Object(I.G)(e, {
							postId: t.contextId
						}) : Object(b.b)(e, {
							commentId: t.contextId
						});
						return Object(v.a)(e, null == n ? void 0 : n.authorId, t.subredditId)
					},
					userIsSubscriber: (e, {
						userName: t
					}) => Object(N.eb)(e, {
						identifier: {
							name: t,
							type: "profile"
						}
					}),
					isUserBanned: (e, {
						subredditId: t,
						userName: n
					}) => !!t && !!Object(m.b)(e, {
						subredditId: t,
						username: n
					}),
					totalModNoteCount: (e, t) => {
						if (!t.contextId) return;
						const n = Object(u.a)(t.contextId) ? Object(I.G)(e, {
							postId: t.contextId
						}) : Object(b.b)(e, {
							commentId: t.contextId
						});
						return Object(v.f)(e, null == n ? void 0 : n.authorId, t.subredditId)
					}
				}),
				Te = Object(s.b)(Me, (e, t) => ({
					onClickSnoovatar: () => e(Object(c.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onUnbanUser: n => t.subredditId && e(Object(d.e)(t.subredditId, n)),
					toggleBanModal: () => {
						t.subredditId && t.contextId && (e(Object(i.c)({
							username: t.userName,
							subredditId: t.subredditId,
							contextId: t.contextId
						})), e(Object(d.a)(t.subredditId, t.userName)))
					}
				}));
			t.a = Te(e => r.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: () => !e.isInModNotesExperiment && e.onHideTooltip && e.onHideTooltip()
			}, e.isInModNotesExperiment ? r.a.createElement(j.b, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				sendEvent: e.sendEvent,
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
				userIsSubscriber: e.userIsSubscriber,
				isUserBanned: e.isUserBanned,
				toggleBanModal: e.toggleBanModal,
				onUnbanUser: e.onUnbanUser,
				totalModNoteCount: e.totalModNoteCount,
				onHideTooltip: e.onHideTooltip
			}) : r.a.createElement(Ae, {
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
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, n) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
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
				UserActionLink: "_21AFzfeZA9uU-k2elqKe9",
				userActionLink: "_21AFzfeZA9uU-k2elqKe9",
				Container: "_13TK74mTO68JHd1rIx54V4",
				container: "_13TK74mTO68JHd1rIx54V4",
				adminIcon: "_6aKOTkErJXqNqi2z_zzvW",
				profileLink: "zD_YW4RUg8ZJlTGaTVlP1",
				profileButtonGroup: "_2ItHX7a-KsG3uDHp58gZXx",
				centerSingleButton: "_1kc6pvVVauBg2lk0QF7cKQ",
				profileButtonLeft: "VqFzwo5tna6ZZCAXrmTyk",
				profileButtonRight: "_2CZKdAmdaG7IaMmeQEX8Xn",
				onlyButton: "_2SiwcVk9z35uhm2h71elH0",
				buttonRow: "_3hCbA9jgrYlWHfetLa3HIP",
				modButtonLeft: "_2GZqHEOZWgLBaSsKh6hCEz",
				modButtonRight: "Odb_82okMRmFWPVShPJSI",
				notesNumber: "_3EObjQJdtQg_sBFofqbtUh",
				modNoteSection: "_2KuBq6dy50QHyaL59rfhE1",
				modNoteLabel: "Db-RfxrfaQQZZ_PVHa6C9",
				modNoteLabelText: "_1rJ0zo2KALlsPFThQjAm8o",
				modNoteButton: "_2gL8vxmS2VwBFVDZwWOEWV",
				lastModNote: "_1vxe7WcOQITcKCr697jFQO",
				userDetails: "_2UWOWC-UT--m_9xjQIiKIh",
				snoovatarContainer: "bwcDA8NnSXG_MemuHe_BD",
				snoovatar: "_25zVI0tC-SP9CyY5ElAA1g",
				anonymousSnoovatar: "_2wTPjx2BoBSkrl3M-RkvPr"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/profile/index.ts"),
				i = n("./src/reddit/selectors/tooltip.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/helpers/isComment.ts"),
				l = n("./src/reddit/helpers/isPost.ts"),
				u = n("./src/reddit/helpers/trackers/modNote.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/actions/subreddit.ts"),
				p = n("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./src/higherOrderComponents/asTooltip.tsx"),
				v = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				I = n("./src/reddit/constants/keycodes.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/Checkbox/index.tsx"),
				N = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/models/ModUserNotes/index.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/CCM/ModUserNotesCreationForm/index.m.less"),
				j = n.n(k),
				E = n("./src/redditGQL/types.ts");
			const y = Object(h.a)(v.b),
				w = ["NONE", E.q.AbuseWarning, E.q.SpamWarning, E.q.SpamWatch, E.q.SolidContributor, E.q.HelpfulUser],
				S = {
					...O.f,
					NONE: () => f.fbt._("None", null, {
						hk: "2r9MPM"
					})
				};
			var P = e => {
					const {
						className: t,
						filter: n,
						subredditId: o,
						userId: i,
						thingId: d
					} = e, [u, m] = Object(a.useState)(), [b, h] = Object(a.useState)(!0), [v, k] = Object(a.useState)(""), [E, P] = Object(a.useState)(!1), U = Object(s.e)(g.bb);
					Object(a.useEffect)(() => {
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
					}, []);
					const A = Object(s.d)(),
						M = Object(a.useCallback)(e => {
							e.stopPropagation(), A(Object(p.a)(o, i, v, n, u, b ? d : void 0)), m(void 0), k("")
						}, [A, o, v, i, u, b, d, n]),
						T = Object(a.useCallback)(e => {
							e.stopPropagation(), e.keyCode !== I.a.Enter || e.shiftKey || (e.preventDefault(), M(e))
						}, [M]),
						B = u ? S[u]() : S.NONE(),
						L = u ? u && Object(C.b)(O.e[u], {
							isFilled: !0
						}) : void 0,
						D = u && O.d[u];
					return r.a.createElement("div", {
						className: Object(c.a)(t)
					}, r.a.createElement("div", {
						className: j.a.meta
					}, r.a.createElement("span", {
						className: j.a.labelContainer
					}, r.a.createElement("label", {
						className: j.a.labelText,
						htmlFor: "label"
					}, f.fbt._("Label", null, {
						hk: "39tjG1"
					})), r.a.createElement(N.b, {
						id: "labelSelector",
						className: j.a.dropdown,
						displayText: B,
						buttonIcon: L ? r.a.createElement(L, {
							className: j.a.labelIcon,
							style: {
								...D && {
									color: D
								},
								fontSize: "15px",
								lineHeight: "15px"
							}
						}) : void 0,
						options: w.map(e => {
							const t = S[e](),
								n = "NONE" === e ? void 0 : Object(C.b)(O.e[e], {
									isFilled: !0
								}),
								a = O.d[e];
							return {
								displayText: t,
								value: e,
								isSelected: "NONE" === e ? !u : u === e,
								...n && {
									icon: r.a.createElement(n, {
										className: j.a.labelIcon,
										style: {
											color: a,
											fontSize: "15px",
											lineHeight: "15px"
										}
									})
								}
							}
						}),
						onSelect: e => "NONE" === e.value ? m(void 0) : m(e.value),
						buttonClassName: j.a.dropdownButton,
						menuItemsClassName: j.a.menuItems,
						isModNotesStyle: !0
					})), r.a.createElement("span", {
						className: j.a.checkboxContainer
					}, r.a.createElement(_.a, {
						className: j.a.checkbox,
						isCheckboxSelected: b,
						toggleCheckbox: () => h(!b)
					}), d && Object(l.a)(d) ? f.fbt._("Link to post", null, {
						hk: "4lmeXp"
					}) : f.fbt._("Link to comment", null, {
						hk: "4bFPHh"
					}))), r.a.createElement("span", {
						className: j.a.textareaContainer
					}, r.a.createElement("textarea", {
						id: "MOD_NOTE_TEXT_AREA",
						className: Object(c.a)(j.a.textarea, {
							[j.a.isNightMode]: U
						}),
						onChange: e => k(e.target.value),
						onKeyDown: T,
						onClick: e => e.stopPropagation(),
						placeholder: f.fbt._("Add a note", null, {
							hk: "3wCgqo"
						}),
						value: v,
						maxLength: 250
					}), r.a.createElement(y, {
						isOpen: E
					}, r.a.createElement("div", {
						className: j.a.infoTooltip
					}, f.fbt._("Create Note", null, {
						hk: "32wjFp"
					})), r.a.createElement("div", {
						className: j.a.tooltipDescription
					}, f.fbt._("Press Enter", null, {
						hk: "20FVA3"
					}))), r.a.createElement(x.t, {
						className: Object(c.a)(j.a.sendButton, {
							[j.a.isNightMode]: U,
							[j.a.isDisabled]: 0 === v.length
						}),
						disabled: 0 === v.length,
						Icon: () => r.a.createElement(C.a, {
							className: Object(c.a)(j.a.iconSend, {
								[j.a.isDisabled]: 0 === v.length
							}),
							name: "send",
							isFilled: !0
						}),
						size: x.d.XS,
						iconPosition: x.h.C,
						onClick: M,
						onMouseEnter: () => P(!0),
						onMouseLeave: () => P(!1),
						style: 0 === v.length ? {
							backgroundColor: "transparent"
						} : void 0
					})))
				},
				U = n("./src/reddit/selectors/subreddit.ts"),
				A = n("./src/reddit/components/SubredditIcon/index.tsx"),
				M = n("./src/reddit/components/CCM/ModUserNotesFilter/index.m.less"),
				T = n.n(M);
			const B = [E.k.All, E.k.Note, E.k.Invite, E.k.Ban, E.k.Mute, E.k.ContentChange, E.k.Removal, E.k.Approval, E.k.Spam, E.k.ModAction],
				L = {
					[E.k.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[E.k.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[E.k.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[E.k.Ban]: () => f.fbt._("Bans/unbans", null, {
						hk: "1mU3jK"
					}),
					[E.k.Mute]: () => f.fbt._("Mutes/unmutes", null, {
						hk: "2BTD9E"
					}),
					[E.k.ContentChange]: () => f.fbt._("Content edits", null, {
						hk: "Hqlly"
					}),
					[E.k.Removal]: () => f.fbt._("Content removals", null, {
						hk: "2V0fLd"
					}),
					[E.k.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[E.k.ModAction]: () => f.fbt._("Mod actions", null, {
						hk: "4eIb6E"
					}),
					[E.k.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				},
				D = {
					[E.k.All]: () => f.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[E.k.Note]: () => f.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[E.k.Invite]: () => f.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[E.k.Ban]: () => f.fbt._("Bans", null, {
						hk: "2mhBLK"
					}),
					[E.k.Mute]: () => f.fbt._("Mutes", null, {
						hk: "4FW14P"
					}),
					[E.k.ContentChange]: () => f.fbt._("Edits", null, {
						hk: "3Gd5ht"
					}),
					[E.k.Removal]: () => f.fbt._("Removals", null, {
						hk: "312qk9"
					}),
					[E.k.Spam]: () => f.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[E.k.ModAction]: () => f.fbt._("Actions", null, {
						hk: "3hqNUg"
					}),
					[E.k.Approval]: () => f.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				};
			var F = e => {
					const {
						className: t,
						subredditId: n,
						userId: o,
						onChangeSubredditId: i,
						filter: d,
						onChangeFilter: l,
						onChangeView: b
					} = e, p = Object(m.a)(), h = Object(s.e)(e => Object(U.o)(e, void 0)), v = h.find(e => e.id === n), I = D[d](), x = Object(C.b)("back_fill"), _ = Object(a.useCallback)(() => p(Object(u.k)({
						userId: o,
						subredditId: n
					})), [o, n, p]), O = Object(a.useCallback)(e => {
						i(e.value), p(Object(u.s)({
							userId: o,
							subredditId: n,
							filteredSubredditId: e.value
						}))
					}, [o, n, p, i]), g = Object(a.useCallback)(() => p(Object(u.l)({
						userId: o,
						subredditId: n
					})), [o, n, p]), k = Object(a.useCallback)(e => {
						l(e.value), p(Object(u.t)({
							userId: o,
							subredditId: n,
							filteredType: e.value
						}))
					}, [o, n, p, l]);
					return r.a.createElement("div", {
						className: Object(c.a)(t, T.a.wrapper),
						role: "navigation"
					}, r.a.createElement("div", {
						className: T.a.backWrapper
					}, r.a.createElement("button", {
						"aria-label": f.fbt._("Back", null, {
							hk: "3ojpRo"
						}),
						className: T.a.backButton,
						onClick: b
					}, r.a.createElement(x, null))), v && h.length && r.a.createElement("div", {
						className: T.a.subredditsWrapper
					}, r.a.createElement(N.b, {
						id: "subredditFilter",
						className: T.a.subreddits,
						buttonClassName: T.a.dropdownButton,
						buttonIcon: r.a.createElement(A.b, {
							className: T.a.subredditIcon,
							subredditOrProfile: v
						}),
						disabled: 1 === h.length,
						menuItemsClassName: T.a.menuItems,
						menuOptionClassName: T.a.menuOption,
						displayText: `r/${v.name}`,
						options: h.map(e => ({
							displayText: `r/${e.name}`,
							value: e.id,
							isSelected: e.id === n,
							icon: r.a.createElement(A.b, {
								className: T.a.subredditIconInDropdown,
								subredditOrProfile: e
							})
						})),
						onOpen: _,
						onSelect: O,
						showSelectedCheckmark: !0
					})), r.a.createElement("div", {
						className: T.a.typesWrapper
					}, r.a.createElement(N.b, {
						id: "typeFilter",
						className: T.a.types,
						buttonClassName: T.a.dropdownButton,
						menuItemsClassName: T.a.menuItems,
						menuOptionClassName: T.a.menuOption,
						displayText: I,
						options: B.map(e => ({
							displayText: L[e](),
							value: e,
							isSelected: e === d
						})),
						onOpen: g,
						onSelect: k,
						showSelectedCheckmark: !0
					})))
				},
				H = n("./src/lib/fastdom/index.ts"),
				R = n("./src/lib/constants/colors.ts"),
				W = n("./src/reddit/components/CCM/ModUserNoteWithIcon/index.m.less"),
				K = n.n(W),
				Z = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Icon/index.m.less"),
				G = n.n(Z);
			const q = {
					[E.j.AcceptModeratorInvite]: "mod",
					[E.j.AddContributor]: "user",
					[E.j.AddModerator]: "mod",
					[E.j.BanUser]: "ban",
					[E.j.InviteModerator]: "mod",
					[E.j.MuteUser]: "mod_mute",
					[E.j.RemoveComment]: "remove",
					[E.j.RemoveContributor]: "block",
					[E.j.RemoveLink]: "remove",
					[E.j.RemoveModerator]: "unmod",
					[E.j.RemoveWikiContributor]: "wiki_ban",
					[E.j.SpamComment]: "spam",
					[E.j.SpamLink]: "spam",
					[E.j.Spoiler]: "spoiler",
					[E.j.Sticky]: "pin",
					[E.j.UnbanUser]: "unban",
					[E.j.UninviteModerator]: "unmod",
					[E.j.UnmuteUser]: "mod_unmute",
					[E.j.Unspoiler]: "spoiler",
					[E.j.Unsticky]: "unpin",
					[E.j.WikiBanned]: "wiki_ban",
					[E.j.WikiContributor]: "wiki",
					[E.j.WikiUnbanned]: "wiki_unban"
				},
				J = {
					[E.q.Ban]: "ban",
					[E.q.BotBan]: "bot",
					[E.q.PermaBan]: "block"
				};
			var Q = e => {
					const {
						className: t,
						actionType: n,
						label: a
					} = e, s = n ? q[n] || "mod" : a && J[a] || "user_note";
					if (!s) return null;
					const o = Object(C.b)(s);
					return r.a.createElement(o, {
						className: Object(c.a)(t, G.a.icon)
					})
				},
				z = n("./src/reddit/controls/InternalLink/index.tsx"),
				V = n("./src/reddit/hooks/useLocale.ts"),
				X = n("./src/reddit/components/CCM/ModUserNoteWithIcon/MetaData/index.m.less"),
				Y = n.n(X);
			var $ = e => {
					const {
						className: t,
						modNote: n,
						onClickUsername: a
					} = e, s = Object(V.a)(), o = new Intl.DateTimeFormat(s, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(n.createdAt));
					return r.a.createElement("div", {
						className: Object(c.a)(t, Y.a.metadata)
					}, n.operator && r.a.createElement(z.a, {
						className: Y.a.operator,
						to: `/user/${n.operator.displayName}/`,
						onClick: a
					}, "u/", n.operator.displayName), r.a.createElement("span", {
						className: Y.a.createdDate
					}, f.fbt._("on {createdDate}", [f.fbt._param("createdDate", o)], {
						hk: "2VoP7K"
					})))
				},
				ee = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Note/index.m.less"),
				te = n.n(ee);
			var ne = ({
					className: e,
					modNote: t,
					onClickLinked: n
				}) => {
					var a, o;
					const i = Object(s.e)(g.bb),
						d = "label" in t && t.label || O.c,
						l = "note" in t ? t.note : void 0,
						u = Object(C.b)(O.e[d || "bot"], {
							isFilled: !0
						}),
						m = ![O.c, E.q.BotBan, E.q.PermaBan, E.q.Ban].includes(d),
						b = t.postInfo ? null === (a = t.postInfo) || void 0 === a ? void 0 : a.permalink : t.commentInfo ? null === (o = t.commentInfo) || void 0 === o ? void 0 : o.permalink : void 0,
						p = Object(C.b)("external_link_fill");
					return l ? r.a.createElement("div", {
						className: Object(c.a)(e, te.a.modNote),
						onClick: e => e.stopPropagation(),
						style: d ? {
							backgroundColor: i ? O.b[d] : O.a[d]
						} : {}
					}, m && r.a.createElement("div", {
						className: te.a.header
					}, r.a.createElement(u, {
						className: te.a.labelIcon,
						style: {
							color: O.d[d]
						}
					}), r.a.createElement("span", {
						className: te.a.label
					}, O.f[d]())), l && r.a.createElement("div", {
						className: te.a.note
					}, l), b && r.a.createElement("a", {
						className: te.a.link,
						href: b || "",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: n
					}, r.a.createElement(p, {
						className: te.a.linkIcon
					}))) : null
				},
				ae = n("./src/lib/constants/index.ts"),
				re = n("./src/lib/prettyPrintNumber/index.ts"),
				se = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Preview/index.m.less"),
				oe = n.n(se);
			var ie = ({
					className: e,
					postInfo: t,
					commentInfo: n,
					onClick: a
				}) => {
					var s, o, i, d;
					if (!t && !n) return null;
					if (n && "Comment" !== n.__typename) return r.a.createElement("div", {
						className: Object(c.a)(e, oe.a.preview)
					}, r.a.createElement("div", {
						className: oe.a.content
					}, r.a.createElement("h6", {
						className: oe.a.title
					}, ae.Lb)));
					const l = t ? t.permalink : n ? n.permalink : void 0,
						u = (null == t ? void 0 : t.title) || (null === (o = null === (s = n) || void 0 === s ? void 0 : s.content) || void 0 === o ? void 0 : o.html),
						m = t ? t.score || 0 : n && n.score || 0,
						b = (null == t ? void 0 : t.commentCount) || 0;
					return r.a.createElement("a", {
						className: Object(c.a)(e, oe.a.preview),
						href: l || "",
						onClick: a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement("div", {
						className: oe.a.content
					}, r.a.createElement("h6", {
						className: oe.a.title,
						dangerouslySetInnerHTML: u ? {
							__html: u
						} : void 0
					}), r.a.createElement("div", {
						className: oe.a.meta
					}, r.a.createElement("span", null, f.fbt._({
						"*": "{pointsCount} Points",
						_1: "{pointsCount} Point"
					}, [f.fbt._param("pointsCount", Object(re.b)(m)), f.fbt._plural(m)], {
						hk: "47CFCp"
					})), !!b && r.a.createElement(r.a.Fragment, null, " · ", r.a.createElement("span", null, f.fbt._({
						"*": "{Comment} Comments",
						_1: "1 Comment"
					}, [f.fbt._plural(b, "Comment")], {
						hk: "11Jphu"
					}))))), !!(null === (i = null == t ? void 0 : t.thumbnail) || void 0 === i ? void 0 : i.url) && r.a.createElement("div", {
						className: oe.a.thumbnail
					}, r.a.createElement("img", {
						className: oe.a.thumbnailImage,
						src: null === (d = t.thumbnail) || void 0 === d ? void 0 : d.url
					})))
				},
				ce = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Title/index.m.less"),
				de = n.n(ce);
			const le = {
					[E.j.AcceptModeratorInvite]: () => f.fbt._("Mod invite accepted", null, {
						hk: "qf41j"
					}),
					[E.j.AddContributor]: () => f.fbt._("Added as contributor", null, {
						hk: "3dqHxz"
					}),
					[E.j.AddModerator]: () => f.fbt._("Added as moderator", null, {
						hk: "1dhUFs"
					}),
					[E.j.BanUser]: () => f.fbt._("Banned", null, {
						hk: "31QtLJ"
					}),
					[E.j.InviteModerator]: () => f.fbt._("Mod invite sent", null, {
						hk: "19xTmf"
					}),
					[E.j.MuteUser]: () => f.fbt._("Modmail muted", null, {
						hk: "4mxUPa"
					}),
					[E.j.RemoveComment]: () => f.fbt._("Comment removed", null, {
						hk: "41CO0h"
					}),
					[E.j.RemoveContributor]: () => f.fbt._("Removed as contributor", null, {
						hk: "33vYlk"
					}),
					[E.j.RemoveLink]: () => f.fbt._("Post removed", null, {
						hk: "1012sS"
					}),
					[E.j.RemoveModerator]: () => f.fbt._("Removed as moderator", null, {
						hk: "1PZWXB"
					}),
					[E.j.RemoveWikiContributor]: () => f.fbt._("Removed as a wiki contributor", null, {
						hk: "9iumD"
					}),
					[E.j.SpamComment]: () => f.fbt._("Comment marked as spam", null, {
						hk: "3Ya0oQ"
					}),
					[E.j.SpamLink]: () => f.fbt._("Post marked as spam", null, {
						hk: "1yjDb8"
					}),
					[E.j.Spoiler]: () => f.fbt._("Post marked as spoiler", null, {
						hk: "JECai"
					}),
					[E.j.Sticky]: () => f.fbt._("Post was stickied", null, {
						hk: "4vkdGE"
					}),
					[E.j.UnbanUser]: () => f.fbt._("Unbanned", null, {
						hk: "1P5luv"
					}),
					[E.j.UninviteModerator]: () => f.fbt._("Mod invite revoked", null, {
						hk: "zyjCA"
					}),
					[E.j.UnmuteUser]: () => f.fbt._("Modmail unmuted", null, {
						hk: "496Olb"
					}),
					[E.j.Unspoiler]: () => f.fbt._("Post marked as non-spoiler", null, {
						hk: "1nWZbp"
					}),
					[E.j.Unsticky]: () => f.fbt._("Post was un-stickied", null, {
						hk: "3b2nJe"
					}),
					[E.j.WikiBanned]: () => f.fbt._("Banned from the wiki", null, {
						hk: "29ttfV"
					}),
					[E.j.WikiContributor]: () => f.fbt._("Added as a wiki contributor", null, {
						hk: "2IuQMk"
					}),
					[E.j.WikiUnbanned]: () => f.fbt._("Unbanned from the wiki", null, {
						hk: "24xAIp"
					})
				},
				ue = {
					[E.q.Ban]: () => f.fbt._("Banned", null, {
						hk: "31QtLJ"
					}),
					[E.q.BotBan]: () => f.fbt._("Banned by bot", null, {
						hk: "gc7lV"
					}),
					[E.q.PermaBan]: () => f.fbt._("Permanently banned", null, {
						hk: "4oNAOs"
					})
				};
			var me = e => {
				const {
					className: t,
					actionType: n,
					label: a
				} = e, s = n ? le[n] ? le[n]() : null : a && ue[a] ? ue[a]() : null;
				return s ? r.a.createElement("h3", {
					className: Object(c.a)(t, de.a.title)
				}, s) : null
			};
			var be = e => {
					const {
						modNote: t,
						subredditId: n
					} = e, a = Object(s.e)(g.bb), o = Object(m.a)(), i = !!t.__typename && ["ModActionNote", "ModActionNotePost", "ModActionNoteComment"].includes(t.__typename);
					return r.a.createElement("div", {
						className: Object(c.a)(K.a.wrapper, e.className)
					}, r.a.createElement("div", {
						key: "aa",
						className: K.a.iconWrapper,
						style: {
							background: a ? R.a.orca700 : R.a.narwhal100
						}
					}, r.a.createElement(Q, {
						className: K.a.icon,
						actionType: t.actionType,
						label: t.label
					})), r.a.createElement("div", {
						className: K.a.content,
						key: "ba"
					}, r.a.createElement(me, {
						actionType: t.actionType,
						label: t.label,
						className: K.a.title
					}), r.a.createElement(ne, {
						className: K.a.note,
						modNote: t,
						onClickLinked: () => o(Object(u.c)({
							subredditId: n,
							modNote: t
						}))
					}), r.a.createElement($, {
						className: K.a.metaData,
						subredditId: n,
						modNote: t,
						onClickUsername: () => o(Object(u.o)({
							subredditId: n,
							modNote: t
						}))
					}), i && r.a.createElement(ie, {
						className: K.a.preview,
						commentInfo: t.commentInfo,
						postInfo: t.postInfo,
						onClick: () => o(Object(u.g)({
							subredditId: n,
							modNote: t
						}))
					})))
				},
				pe = n("./src/reddit/hooks/useScrollGradient.ts"),
				fe = n("./src/reddit/selectors/modUserNotes.ts"),
				he = n("./src/reddit/components/CCM/ModUserNotesList/EmptyList/index.m.less"),
				ve = n.n(he);
			var Ie = e => {
					const t = {
							[E.k.Note]: f.fbt._("mod notes", null, {
								hk: "CN6SZ"
							}),
							[E.k.Approval]: f.fbt._("approvals", null, {
								hk: "AqrdS"
							}),
							[E.k.Removal]: f.fbt._("content removals", null, {
								hk: "kjICL"
							}),
							[E.k.Ban]: f.fbt._("bans or unbans", null, {
								hk: "4jKjdR"
							}),
							[E.k.Mute]: f.fbt._("mutes and unmutes", null, {
								hk: "1u2TZT"
							}),
							[E.k.Invite]: f.fbt._("invites", null, {
								hk: "r9dPh"
							}),
							[E.k.Spam]: f.fbt._("spam removals", null, {
								hk: "44iRtH"
							}),
							[E.k.ContentChange]: f.fbt._("content edits", null, {
								hk: "1zafY8"
							}),
							[E.k.ModAction]: f.fbt._("mod actions", null, {
								hk: "3yLNgz"
							}),
							[E.k.All]: f.fbt._("mod actions", null, {
								hk: "2sOss3"
							})
						},
						n = {
							[E.k.Note]: "user_note",
							[E.k.Approval]: "approve",
							[E.k.Removal]: "remove",
							[E.k.Ban]: "ban",
							[E.k.Mute]: "mod_mute",
							[E.k.Invite]: "user",
							[E.k.Spam]: "spam",
							[E.k.ContentChange]: "pin",
							[E.k.ModAction]: "mod",
							[E.k.All]: "mod"
						},
						{
							className: a,
							subredditId: o,
							userId: i,
							filter: d
						} = e,
						l = Object(s.e)(e => Object(g.vb)(e, {
							userId: i
						})),
						u = Object(s.e)(e => Object(U.S)(e, {
							subredditId: o
						})),
						m = t[d],
						b = f.fbt._("There are no {mod note type}", [f.fbt._param("mod note type", m)], {
							hk: "1NhVUh"
						}),
						p = u && l ? f.fbt._("for u/{user name} in r/{subreddit name}", [f.fbt._param("user name", l.username), f.fbt._param("subreddit name", u.name)], {
							hk: "4CA5zk"
						}) : "",
						h = Object(C.b)(n[d]);
					return r.a.createElement("div", {
						className: Object(c.a)(a, ve.a.container)
					}, r.a.createElement(h, {
						className: ve.a.icon
					}), r.a.createElement("p", {
						className: ve.a.mainLine
					}, `${b} ${p}`), d === E.k.Note && r.a.createElement("p", {
						className: ve.a.miscLine
					}, f.fbt._("Use the field below to create a note.", null, {
						hk: "1lrCZG"
					})))
				},
				xe = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				_e = n("./src/reddit/components/CCM/ModUserNotesList/Placeholder/index.m.less"),
				Ne = n.n(_e),
				Ce = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var Oe = e => r.a.createElement("div", {
					className: Object(c.a)(Ne.a.wrapper, e.className)
				}, r.a.createElement("div", {
					key: "d",
					className: Object(c.a)(Ne.a.icon, Object(Ce.a)(e))
				}), r.a.createElement("div", {
					key: "e",
					className: Ne.a.content
				}, r.a.createElement("div", {
					key: "ea",
					className: Object(c.a)(Ne.a.title, Object(Ce.b)(e))
				}), r.a.createElement("div", {
					key: "eb",
					className: Object(c.a)(Ne.a.body, Object(Ce.b)(e))
				}), r.a.createElement("div", {
					key: "ec",
					className: Object(c.a)(Ne.a.meta, Object(Ce.b)(e))
				}))),
				ge = n("./src/reddit/components/CCM/ModUserNotesList/PlaceholderList/index.m.less"),
				ke = n.n(ge);
			var je = e => {
					const {
						className: t,
						isLoading: n,
						apiError: a,
						onTryAgain: s
					} = e;
					return r.a.createElement("div", {
						className: Object(c.a)(t, ke.a.placeholder)
					}, r.a.createElement(Oe, {
						className: ke.a.placeholderLine,
						isLoading: n
					}), r.a.createElement(Oe, {
						className: ke.a.placeholderLine,
						isLoading: n
					}), r.a.createElement(Oe, {
						className: ke.a.placeholderLine,
						isLoading: n
					}), !!a && r.a.createElement(xe.a, {
						apiError: a,
						onTryAgain: s
					}))
				},
				Ee = n("./src/reddit/components/CCM/ModUserNotesList/index.m.less"),
				ye = n.n(Ee);
			var we = e => {
					const {
						className: t,
						subredditId: n,
						userId: o,
						filter: i
					} = e, d = Object(s.d)(), l = Object(s.e)(g.bb), [u, m] = Object(a.useState)(!0);
					Object(a.useEffect)(() => {
						setTimeout(() => m(!1), 0)
					}, []);
					const {
						container: b,
						isScrollGradientVisible: f,
						calculateGradientVisibility: h
					} = Object(pe.b)(!1, pe.a.Top), v = Object(s.e)(e => Object(fe.e)(e, {
						subredditId: n,
						userId: o,
						filter: i
					})), I = Object(s.e)(e => Object(fe.c)(e, {
						subredditId: n,
						userId: o,
						filter: i
					})), x = Object(s.e)(e => Object(fe.d)(e, {
						subredditId: n,
						userId: o,
						filter: i
					})), _ = Object(s.e)(fe.b), N = !!v.length, C = !!I && !x && !_, O = e => d(Object(p.e)({
						subredditId: n,
						userId: o,
						filter: i,
						before: e
					}));
					return r.a.createElement(r.a.Fragment, null, N && r.a.createElement("div", {
						className: Object(c.a)(t, ye.a.wrapper)
					}, r.a.createElement("div", {
						className: Object(c.a)(ye.a.scrollGradient, {
							[ye.a.visible]: C || x || f,
							[ye.a.isNightMode]: l
						})
					}), r.a.createElement("div", {
						className: ye.a.list,
						ref: b,
						onScroll: () => {
							H.a.read(() => {
								if (null == b ? void 0 : b.current) {
									h();
									const e = b.current,
										{
											scrollTop: t,
											offsetHeight: n,
											scrollHeight: a
										} = e;
									n - a >= t && C && !x && O(I)
								}
							})
						}
					}, v.map(e => r.a.createElement(be, {
						key: e.id,
						modNote: e,
						subredditId: n
					})), (x || _) && r.a.createElement(je, {
						isLoading: x,
						apiError: _,
						onTryAgain: () => {
							I && O(I)
						}
					}))), !N && !x && !u && r.a.createElement(Ie, {
						className: Object(c.a)(t, ye.a.wrapper, ye.a.noItems),
						subredditId: n,
						userId: o,
						filter: i
					}), !N && (x || u) && r.a.createElement("div", {
						className: Object(c.a)(t, ye.a.wrapper)
					}))
				},
				Se = n("./src/reddit/components/CCM/ModUserNotesWrapper/index.m.less"),
				Pe = n.n(Se);
			const {
				fbt: Ue
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ae = e => {
					const t = Object(s.d)(),
						{
							className: n,
							subredditId: o,
							userId: i,
							onChangeView: f,
							defaultTypeFilter: h,
							thingId: v
						} = e,
						[I, x] = Object(a.useState)(h || E.k.All),
						[_, N] = Object(a.useState)(o),
						C = Object(s.e)(g.bb),
						O = Object(m.a)(),
						k = e => {
							t(Object(p.e)({
								subredditId: _,
								userId: i,
								filter: I,
								...e
							}))
						},
						j = I === E.k.All || I === E.k.Note;
					Object(a.useEffect)(() => {
						k(), t(Object(b.q)())
					}, []);
					const y = {
						subredditId: o,
						userId: i,
						...v && Object(d.a)(v) ? {
							commentId: v
						} : null,
						...v && Object(l.a)(v) ? {
							postId: v
						} : null
					};
					return Object(a.useEffect)(() => (O(Object(u.x)(y)), () => O(Object(u.r)(y))), []), r.a.createElement("div", {
						className: Object(c.a)(n, Pe.a.wrapper, {
							[Pe.a.isNightMode]: C
						}),
						onClick: e => e.stopPropagation()
					}, r.a.createElement(F, {
						className: Pe.a.filters,
						subredditId: _,
						userId: i,
						onChangeSubredditId: e => {
							N(e), k({
								subredditId: e
							})
						},
						filter: I,
						onChangeFilter: e => {
							x(e), k({
								filter: e
							})
						},
						onChangeView: f
					}), r.a.createElement(we, {
						className: Pe.a.list,
						subredditId: _,
						userId: i,
						filter: I
					}), j && r.a.createElement(P, {
						className: Pe.a.form,
						filter: I,
						subredditId: o,
						userId: i,
						thingId: v
					}))
				},
				Me = n("./src/reddit/components/ContentTooltip/index.tsx"),
				Te = n("./src/config.ts"),
				Be = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Le = n("./src/lib/opener/index.ts"),
				De = n("./src/reddit/components/AnonymousSnoovatar/index.m.less"),
				Fe = n.n(De);
			var He = e => r.a.createElement("img", {
					className: Object(c.a)(e.className, Fe.a.anonymousSnoovatar),
					src: `${Te.a.assetPath}/img/anonymous_snoo.png`
				}),
				Re = n("./src/reddit/components/ChatButton/index.tsx"),
				We = n("./src/reddit/components/HumanDate/index.tsx"),
				Ke = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Ze = n("./src/reddit/components/ModNoteItem/index.tsx"),
				Ge = n("./src/reddit/components/SubscribeButton/index.tsx"),
				qe = n("./src/reddit/components/UserIcon/index.tsx"),
				Je = n("./src/reddit/endpoints/profile/info.ts"),
				Qe = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				ze = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				Ve = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				Xe = n("./src/reddit/models/User/index.ts"),
				Ye = n("./src/reddit/selectors/gold/awardIcon.ts"),
				$e = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.m.less"),
				et = n.n($e);
			const tt = e => {
					var t, n;
					return r.a.createElement("div", {
						className: et.a.userDetails
					}, r.a.createElement("div", null, r.a.createElement(Be.a, {
						className: et.a.UserNameLink,
						to: `/user/${e.userName}/`
					}, e.userName, (null === (t = e.user) || void 0 === t ? void 0 : t.isSuspended) && r.a.createElement(r.a.Fragment, null, " ", f.fbt._("(suspended)", null, {
						hk: "Us59o"
					}))), e.user.isEmployee && r.a.createElement(ze.a, {
						className: et.a.adminIcon,
						title: f.fbt._("Reddit admin", null, {
							hk: "15wBTE"
						})
					}), e.user.isGold && r.a.createElement(Be.a, {
						to: "/premium"
					}, r.a.createElement(Ve.a, {
						className: et.a.PremiumIcon
					}))), r.a.createElement("div", {
						className: et.a.UserNameMetaData
					}, r.a.createElement("div", {
						className: et.a.MetaDataItem
					}, `u/${e.user.username}`, r.a.createElement("div", {
						className: et.a.Bullet
					}, "•")), r.a.createElement("div", {
						className: et.a.MetaDataItem
					}, (e.user.createdUtc || e.user.created) && r.a.createElement(r.a.Fragment, null, r.a.createElement(We.d, {
						seconds: e.user.createdUtc || e.user.created
					}), r.a.createElement("div", {
						className: et.a.Bullet
					}, "•"))), r.a.createElement("div", {
						className: et.a.MetaDataItem
					}, f.fbt._("{totalKarma} total karma", [f.fbt._param("totalKarma", Object(re.b)((null === (n = e.user.karma) || void 0 === n ? void 0 : n.total) || 0))], {
						hk: "TY8Ig"
					}))))
				},
				nt = e => {
					const {
						user: {
							awardedLastMonth: t,
							karma: n
						},
						trophyCase: a,
						prefersReducedAnimations: s
					} = e, o = {
						...Je.a,
						...n
					}, i = null == t ? void 0 : t.topAward;
					return r.a.createElement("div", {
						className: et.a.userInfoGrid
					}, r.a.createElement("div", {
						className: et.a.col
					}, r.a.createElement("span", {
						className: et.a.count
					}, Object(re.b)(o.fromPosts)), r.a.createElement("span", {
						className: et.a.label
					}, f.fbt._("Post Karma", null, {
						hk: "32naEp"
					}))), r.a.createElement("div", {
						className: et.a.col
					}, r.a.createElement("span", {
						className: et.a.count
					}, Object(re.b)(o.fromComments)), r.a.createElement("span", {
						className: et.a.label
					}, f.fbt._("Comment Karma", null, {
						hk: "3kyHOE"
					}))), r.a.createElement("div", {
						className: et.a.col
					}, r.a.createElement("span", {
						className: et.a.count
					}, Object(re.b)(o.fromAwardsReceived)), r.a.createElement("span", {
						className: et.a.label
					}, f.fbt._("Awardee Karma", null, {
						hk: "4CR6i3"
					}))), r.a.createElement("div", {
						className: et.a.col
					}, r.a.createElement("span", {
						className: et.a.count
					}, Object(re.b)(o.fromAwardsGiven)), r.a.createElement("span", {
						className: et.a.label
					}, f.fbt._("Awarder Karma", null, {
						hk: "kuRXR"
					}))), a.length > 0 && (e => r.a.createElement("div", {
						className: et.a.col
					}, r.a.createElement("div", {
						className: et.a.recentAwardOrIconContainer
					}, e.map((e, t) => {
						if (t >= 3) return;
						const n = r.a.createElement("img", {
							className: et.a.recentAwardOrTropyIcon,
							src: e.icon,
							title: e.name
						});
						return r.a.createElement(r.a.Fragment, null, e.url ? r.a.createElement("a", {
							target: Le.d.BLANK,
							rel: Le.c,
							href: e.url
						}, n) : n)
					})), r.a.createElement("span", {
						className: et.a.label
					}, f.fbt._("Trophies", null, {
						hk: "302uHC"
					}))))(a), i && ((e, t) => r.a.createElement("div", {
						className: et.a.col
					}, r.a.createElement("div", {
						className: et.a.recentAwardOrIconContainer
					}, e && [e].map((e, n) => {
						var a, s;
						if (!(n >= 3)) return r.a.createElement("img", {
							alt: null !== (a = null == e ? void 0 : e.description) && void 0 !== a ? a : null == e ? void 0 : e.name,
							key: null !== (s = null == e ? void 0 : e.description) && void 0 !== s ? s : null == e ? void 0 : e.name,
							className: et.a.recentAwardOrTropyIcon,
							src: Object(Ye.c)({
								award: e,
								prefersReducedMotion: t
							})
						})
					})), r.a.createElement("span", {
						className: et.a.label
					}, f.fbt._("Recent Awards", null, {
						hk: "3DtwBC"
					}))))(i, s))
				};
			var at = e => {
				var t;
				const {
					contextId: n,
					currentUser: o,
					hideNSFWPref: i,
					hoverId: d,
					isLoggedIn: l,
					isNightMode: b,
					moderatorPermissions: p,
					style: h,
					userName: v,
					user: I,
					isCurrentUserBanned: _,
					userProfileStyles: N,
					acceptChats: C,
					isCommentAuthorBlocked: O,
					trophyCase: g,
					lastAuthorModNote: k,
					userIsSubscriber: j,
					onUnbanUser: y,
					subredditId: w,
					toggleBanModal: S,
					isUserBanned: P,
					prefersReducedAnimations: U,
					totalModNoteCount: A,
					onChangeView: M,
					onHideTooltip: T
				} = e, B = Object(m.a)(), L = Object(s.e)(e => w ? e.subreddits.models[w] : null);
				Object(a.useEffect)(() => {
					I && w && B(Object(u.w)({
						subredditId: w,
						userId: I.id
					}))
				}, [I, w]);
				const D = Object(a.useCallback)(() => w && B(Object(u.j)({
						subredditId: w,
						userId: I.id
					})), [w, I, B]),
					F = Object(a.useCallback)(() => {
						P ? y && y(I.id) : (T && T(), S && S()), w && B(Object(u.b)({
							subredditId: w,
							userId: I.id
						}))
					}, [w, I, P, B, T, y, S]),
					H = Object(a.useCallback)(e => {
						M(e), w && B(Object(u.i)({
							subredditId: w,
							userId: I.id
						}))
					}, [w, I, B, M]),
					R = Object(a.useCallback)(e => {
						M(e, E.k.Note), w && B(Object(u.a)({
							subredditId: w,
							userId: I.id
						}))
					}, [w, I, B, M]),
					W = Object(a.useCallback)(e => {
						M(e), w && B(Object(u.p)({
							subredditId: w,
							userId: I.id
						}))
					}, [w, I, B, M]);
				if (!I) return r.a.createElement("div", {
					style: h
				});
				const K = !!o && Object(Xe.e)(o) === v,
					Z = l && !K && !_ && C && !O,
					G = I.hasUserProfile && !_ && !O && !K && I.enableFollowers,
					q = null == p ? void 0 : p.access,
					J = null == p ? void 0 : p.mail,
					Q = q && n && !K && w,
					V = I.isNSFW && i ? `${Te.a.assetPath}/img/user-info-banner.png` : (null == N ? void 0 : N.bannerBackgroundImage) ? N.bannerBackgroundImage : I.bannerImage,
					X = b ? "##D7DADC" : "#0079D3",
					Y = b ? "#121212" : "#FFF",
					$ = b ? "#1E1E1E" : "#EDEFF1",
					ee = b ? "#D7DADC" : "#1A1A1B",
					te = L && v ? `?toSubredditName=${L.name}&toUserName=${v}` : "";
				return r.a.createElement("div", {
					className: et.a.Container,
					id: d,
					onClick: e => e.stopPropagation(),
					style: {
						backgroundColor: Y,
						...h
					}
				}, r.a.createElement("div", {
					className: et.a.UserContainer
				}, r.a.createElement("div", {
					className: et.a.BannerImage,
					style: V ? {
						backgroundImage: `url('${V}')`
					} : {}
				}), r.a.createElement("div", {
					className: et.a.snoovatarContainer
				}, I.snoovatarFullBodyAsset ? r.a.createElement("img", {
					className: et.a.snoovatar,
					src: I.snoovatarFullBodyAsset
				}) : (null === (t = I.accountIcon) || void 0 === t ? void 0 : t.includes("avatars/defaults/v2")) ? r.a.createElement("div", {
					className: et.a.anonymousSnoovatar
				}, r.a.createElement(He, null)) : r.a.createElement(qe.a, {
					className: et.a.UserIcon,
					iconUrl: I.accountIcon,
					isNSFW: I.isNSFW,
					userName: v
				}))), r.a.createElement(tt, {
					user: I,
					userName: v
				}), r.a.createElement(z.a, {
					className: et.a.profileLink,
					to: `/user/${v}/`
				}, f.fbt._("View full profile", null, {
					hk: "2s4Gmf"
				})), r.a.createElement("div", {
					className: et.a.profileButtonGroup
				}, Z && r.a.createElement(Re.b, {
					className: Object(c.a)(et.a.ChatButton, et.a.profileButtonLeft, {
						[et.a.onlyButton]: !G
					}),
					contextId: n,
					userId: I.id,
					text: f.fbt._("Start Chat", null, {
						hk: "2mfqRE"
					}),
					isFullWidth: !0,
					style: {
						color: Y,
						backgroundColor: X
					}
				}), G && r.a.createElement(Ge.a, {
					className: Object(c.a)(et.a.SubscribeButton, et.a.profileButtonRight, {
						[et.a.onlyButton]: !Z
					}),
					identifier: {
						name: e.user.username,
						type: "profile"
					},
					getEventFactory: e => Object(Qe.g)(e ? "unfollow" : "follow", n),
					isFullWidth: !0,
					small: !0,
					style: {
						color: j ? "#D7DADC" : Y,
						backgroundColor: X,
						width: 144
					}
				})), r.a.createElement(nt, {
					user: I,
					trophyCase: g || [],
					prefersReducedAnimations: !!U
				}), (J || Q) && r.a.createElement("div", {
					className: et.a.buttonRow
				}, J && r.a.createElement(x.t, {
					className: Object(c.a)(et.a.modButtonLeft, {
						[et.a.onlyButton]: !Q
					}),
					href: `https://mod.reddit.com/mail/create${te}`,
					target: "_blank",
					rel: "noopener noreferrer",
					kind: x.b.ExternalLink,
					priority: x.c.Plain,
					style: {
						backgroundColor: $,
						color: ee
					},
					onClick: D
				}, f.fbt._("Send Modmail", null, {
					hk: "2KDZJi"
				})), Q && r.a.createElement(x.t, {
					className: Object(c.a)(et.a.modButtonRight, {
						[et.a.onlyButton]: !J
					}),
					onClick: F,
					priority: x.c.Plain,
					style: {
						backgroundColor: $,
						color: ee
					}
				}, P ? f.fbt._("Unban", null, {
					hk: "2bKwSa"
				}) : f.fbt._("Ban", null, {
					hk: "1lIetx"
				}))), q && r.a.createElement("div", {
					className: et.a.buttonRow
				}, r.a.createElement(x.t, {
					className: et.a.modButtonLeft,
					onClick: H,
					priority: x.c.Plain,
					style: {
						backgroundColor: $,
						color: ee
					}
				}, r.a.createElement("span", {
					className: et.a.notesText
				}, f.fbt._("User Mod Log", null, {
					hk: "2PiT0s"
				})), !!A && r.a.createElement("span", {
					className: et.a.notesNumber
				}, A, " ")), r.a.createElement(x.t, {
					className: et.a.modButtonRight,
					onClick: R,
					priority: x.c.Plain,
					style: {
						backgroundColor: $,
						color: ee
					}
				}, f.fbt._("Add Note", null, {
					hk: "34JqdA"
				}))), q && k && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: et.a.modNoteSection
				}, r.a.createElement("hr", null), r.a.createElement("div", {
					className: et.a.modNoteLabel
				}, r.a.createElement("span", {
					className: et.a.modNoteLabelText,
					style: {
						backgroundColor: Y
					}
				}, f.fbt._("Latest mod note", null, {
					hk: "3D5qr4"
				})), r.a.createElement(x.t, {
					className: et.a.modNoteButton,
					onClick: W,
					priority: x.c.PlainLink,
					style: {
						backgroundColor: Y
					}
				}, f.fbt._("View all", null, {
					hk: "2WT026"
				})))), r.a.createElement(Ze.b, {
					className: et.a.lastModNote,
					modNote: k,
					subredditId: w || "",
					onClick: e => M(e),
					context: Ze.a.ModIdCard
				})), r.a.createElement(Ke.i, {
					contextId: n,
					subredditId: w,
					user: I
				}), r.a.createElement("div", {
					className: et.a.BottomSpacer
				}))
			};

			function rt() {
				return (rt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const st = e => {
					var t, n, c;
					const d = Object(s.e)(i.c),
						l = !!(null == d ? void 0 : d.isModNotesView),
						[u, m] = Object(a.useState)(!l),
						[b, p] = Object(a.useState)(E.k.All),
						f = Object(s.d)();
					Object(a.useEffect)(() => {
						f(Object(o.d)(e.userName))
					}, [f, e.userName]);
					const h = Object(a.useCallback)((e, t) => {
							e.stopPropagation(), m(!u), p(t || E.k.All)
						}, [u, m]),
						v = !(null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.id) || (null === (n = null == e ? void 0 : e.user) || void 0 === n ? void 0 : n.isSuspended) ? null === (c = e.lastAuthorModNote) || void 0 === c ? void 0 : c.user.id : e.user.id;
					return !u && e.subredditId && v ? r.a.createElement(Ae, {
						className: et.a.ModUserNotesWrapper,
						subredditId: e.subredditId,
						userId: v,
						onChangeView: h,
						defaultTypeFilter: b,
						thingId: e.contextId
					}) : r.a.createElement(at, rt({}, e, {
						onChangeView: h
					}))
				},
				ot = e => r.a.createElement(Me.a, {
					className: et.a.ModUserNotesTooltipContainer,
					tooltipId: e.tooltipId,
					defaultTooltipPosition: "bottom",
					hideCaret: !0
				}, r.a.createElement(st, e));
			ot.WrappedComponent = st;
			t.default = ot
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/Hovercards/helpers.ts"),
				u = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/shortcuts.ts"),
				p = n("./src/reddit/helpers/getClickInfo.ts"),
				f = n("./src/reddit/helpers/isPost.ts"),
				h = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				v = n("./src/reddit/hooks/useIsOverlay.ts"),
				I = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				x = n("./src/reddit/selectors/tooltip.ts"),
				_ = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				N = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx");
			t.default = ({
				author: e,
				children: t,
				className: n,
				collapsed: C,
				hoverDivClassName: O,
				isCommentAuthorBlocked: g,
				postOrComment: k,
				tooltipIdPrefix: j,
				tooltipType: E
			}) => {
				const y = Object(m.b)(),
					w = Object(r.useCallback)(() => y(Object(h.f)(k.id)), [k, y]),
					S = Object(v.a)(),
					P = e || k.author,
					U = Object(l.b)({
						author: P,
						itemId: k.id,
						tooltipIdPrefix: j || N.a,
						tooltipType: E
					}),
					A = (e => Object(f.a)(e.id) ? e.belongsTo.id : e.subredditId)(k),
					M = Object(o.d)(),
					T = Object(o.e)(e => Object(I.a)(e, A)),
					B = Object(o.e)(x.a),
					L = Object(r.useCallback)(() => T && M(Object(c.c)(A, k.authorId)), [M, k, A, T]),
					D = Object(r.useCallback)(async () => {
						T && (await M(Object(i.d)(P)), L(), M(U === B ? Object(d.i)() : Object(d.f)({
							tooltipId: U
						})))
					}, [M, L, B, U, T, P]);
				Object(r.useEffect)(() => {
					if (T && U === B && !S) {
						const e = document.getElementById(b.b);
						e && (e.style.pointerEvents = "none")
					}
				}, [T, U, B, S]);
				const F = Object(r.useCallback)(e => {
					B === U && M(Object(d.i)());
					const t = document.getElementById(b.b);
					t && (t.style.pointerEvents = "inherit")
				}, [M, B, U]);
				Object(r.useEffect)(() => {
					if (T) return window.addEventListener("click", F), () => {
						window.removeEventListener("click", F)
					}
				}, [T, F]);
				const H = Object(r.useCallback)(e => {
						e.stopPropagation(), Object(p.a)(e).hasNewTabModifier ? window.open(`${a.a.redditUrl}/u/${P}`, "_blank") : D()
					}, [P, D]),
					R = `${U}-hover-id`;
				return s.a.createElement(u.a, {
					authorOrSubredditName: P,
					className: O,
					hoverId: R,
					sendHoverEvent: w,
					tooltipId: U,
					onClick: T ? e => H(e) : void 0,
					onHover: L,
					onlyLeaveOnClick: !0
				}, t, s.a.createElement(_.a, {
					className: n,
					contextId: k.id,
					hoverId: R,
					sendEvent: y,
					subredditId: A,
					tooltipId: U,
					tooltipType: E,
					userName: P,
					isCommentAuthorBlocked: g,
					collapsed: C
				}))
			}
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
				container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				adminIcon: "_2aJuBKF3mo4YJS4YFkeU9a"
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return h
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/timeAgo/index.ts"),
				o = n("./src/reddit/hooks/useLocale.ts");
			var i = function({
					seconds: e,
					...t
				}) {
					var n;
					const a = Object(o.a)(),
						i = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : a
						};
					return r.a.createElement(r.a.Fragment, null, Object(s.d)(e, i))
				},
				c = n("./src/lib/humanizeDate/index.ts");
			var d = function({
					seconds: e,
					...t
				}) {
					var n;
					const a = Object(o.a)(),
						s = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : a
						};
					return r.a.createElement(r.a.Fragment, null, Object(c.a)(e, s))
				},
				l = n("./src/lib/constants/index.ts");
			var u = function({
					seconds: e,
					locale: t
				}) {
					const n = Object(o.a)(),
						a = null != t ? t : n;
					return r.a.createElement(r.a.Fragment, null, function(e, t = l.D) {
						const n = e * l.Sb;
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
					}(e, a))
				},
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/lib/eventTools/index.ts");

			function p(e, t = l.D) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t, n = !1, a = l.D) {
				const r = Object(b.e)(e, t),
					s = new Date(e * l.Sb);
				let o;
				if (r === b.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return r === b.a.Future ? o = Object(b.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(b.b)(e) >= 5 ? p(s, a) : function(e, t = l.D) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(s, a) : r === b.a.Past && (o = Object(b.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : p(s, a)), `${o} @ ${function(e,t=l.D){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s,a)}`
			}
			var h = function({
				startTime: e,
				endTime: t,
				isLive: n,
				locale: a
			}) {
				const s = Object(o.a)(),
					i = null != a ? a : s;
				return r.a.createElement(r.a.Fragment, null, f(e, t, n, i))
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const p = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
				h = e => r.a.createElement(p, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				v = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return r.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				I = Object(o.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				x = Object(c.a)(v, [i.a.Click, i.a.Keydown]),
				_ = Object(c.a)(h, [i.a.Click, i.a.Keydown]),
				N = Object(s.b)(I);
			t.c = N(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? r.a.createElement(x, b({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : r.a.createElement(_, b({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(s.a)(e, t);
				class a extends r.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return r.a.createElement(n, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(a)
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/config.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class l extends r.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: a,
						totalCount: i
					} = t, l = a.description ? a.description : a.name;
					return r.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${s.a.oldRedditUrl}/user/${n}/gilded`
					}, r.a.createElement("div", {
						className: c.a.iconColumn
					}, r.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), i > 1 && r.a.createElement("span", {
						className: c.a.count
					}, `+${Object(o.b)(i-1)}`)), r.a.createElement("div", {
						className: c.a.textColumn
					}, d._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [d._param("award-name", a.name), d._plural(i)], {
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = n.n(l);
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(o.e)(e);
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
						hideNSFWPref: r,
						isNSFW: o,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? s.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(c.e)(n) === d ? s.a.createElement(i.a, {
						altText: a.fbt._("{userName} banner image", [a.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : o && r ? null : m
				}
			}
			t.a = Object(d.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = Object(r.c)({
					currentUser: o.k,
					hideNSFWPref: o.E
				}),
				c = Object(a.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(s.C)(t, n))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/snoovatarModal.ts"),
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
			t.a = Object(i.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: n,
				post: i,
				share: f
			}) => {
				const I = Object(l.b)(),
					x = Object(o.d)(),
					_ = i && i.id,
					N = i && i.voteState;
				let C = null;
				_ || (C = e ? "user_hovercard" : "profile_overview");
				const O = Object(r.useCallback)(() => I(Object(m.g)(e ? "user_hovercard" : "profile_overview", t)), [e, I, t]);
				return s.a.createElement(u.t, {
					onClick: () => {
						n ? (I(m.h), _ && N === p.a.notVoted && x(Object(c.jb)(_))) : O();
						const e = n ? "postify" : "copy";
						x(Object(d.b)({
							clickSource: C,
							share: f,
							source: e
						}))
					},
					className: Object(a.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: n
					}),
					isFullWidth: !0
				}, s.a.createElement(b.a, {
					className: Object(a.a)({
						[h.a.shirtIcon]: !n,
						[h.a.avatarPostButtonShirtIcon]: n
					})
				}), v._("Try this Look", null, {
					hk: "dOuPb"
				}), s.a.createElement("div", {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: n,
				isOwnProfile: a,
				onClick: d
			}) {
				return r.a.createElement(o.t, {
					onClick: d,
					isFullWidth: !0,
					className: Object(s.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && a,
						[l.a.compactButtonLayout]: e
					}, n)
				}, t ? r.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : r.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : a ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? r.a.createElement("div", {
					className: l.a.chevronIcon
				}) : r.a.createElement(i.a, {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = n.n(c),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = n.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: n,
				editMode: a,
				isDeletingBanner: c,
				onDeleteBanner: l
			}) {
				return r.a.createElement("div", {
					className: d.a.bannerWrapper
				}, r.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: n
				}), a && e && (c ? r.a.createElement(s.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : r.a.createElement(o.a, {
					className: u.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/components/HumanDate/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: n,
				userCreated: a,
				username: c,
				...d
			}) {
				const l = t ? r.a.createElement(r.a.Fragment, null, "u/", c, " · ", r.a.createElement(o.d, {
					seconds: a,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return n ? r.a.createElement(s.a, i({}, d, {
					className: e,
					to: n
				}), l) : r.a.createElement("span", i({}, d, {
					className: e
				}), l)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				c = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				d = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = n.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: n,
				isGold: s,
				isNSFW: l
			}) => o.a.createElement("h1", {
				className: u.a.snoovatarUserTitle
			}, e || t, n && o.a.createElement(i.a, {
				className: u.a.snoovatarAdminIcon,
				title: r.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), s && o.a.createElement("a", {
				title: r.fbt._("{username} has Reddit Premium", [r.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${a.a.redditUrl}/premium`
			}, o.a.createElement(d.a, {
				className: u.a.snoovatarPremiumIcon
			})), l && o.a.createElement(c.a, {
				className: u.a.snoovatarNsfwIcon,
				title: r.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				c = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/selectors/experiments/econ/index.ts"),
				m = n("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				b = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				p = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				f = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				h = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				v = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				I = n.n(v);
			const x = 25;

			function _(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function N(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const C = _("particleDelay", I.a),
				O = _("particleX", I.a),
				g = _("particleFloat", I.a),
				k = () => {
					const e = N(O),
						t = N(g),
						n = N(C);
					return Object(o.a)(I.a.particle, e, t, n)
				};
			class j extends r.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < x; t++) e.push(this.createParticle(t));
					return r.a.createElement("div", {
						role: "presentation",
						className: I.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return r.a.createElement("div", {
						key: e,
						className: `${k()}`
					})
				}
			}
			var E = j,
				y = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				w = n.n(y),
				S = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: n,
				editMode: a,
				isDeletingBanner: v,
				isEmployee: x,
				isGold: _,
				isNSFW: N,
				isOwnProfile: C,
				onClickSnoovatar: O,
				onDeleteBanner: g,
				prefersReducedAnimations: k,
				snoovatarUrl: j,
				title: y,
				userCreated: P,
				username: U,
				url: A,
				isHovercard: M
			}) => {
				const T = Object(s.e)(e => !C && !!j && Object(u.f)(e)),
					B = Object(s.e)(m.b),
					L = j && Object(d.e)(j) && B;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
					bannerBackgroundImage: e,
					editMode: !!a,
					isNSFW: N,
					username: U,
					isDeletingBanner: !!v,
					onDeleteBanner: g
				}), L ? r.a.createElement("div", {
					className: I.a.nftProfileUnitContainer
				}, r.a.createElement(i.a, {
					className: I.a.nftProfileUnit,
					imageUrl: j
				})) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: I.a.snoovatarContainer
				}, _ && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: I.a.topGlow
				}), r.a.createElement("div", {
					className: I.a.bottomGlow
				}), !k && r.a.createElement(E, null)), r.a.createElement("img", {
					className: Object(o.a)(I.a.snoovatar, {
						[I.a.premiumGlow]: _
					}),
					src: j || void 0
				})), !a && C && r.a.createElement(c.a, {
					to: "/settings/profile",
					className: I.a.snoovatarSettingsLink
				}, r.a.createElement(l.a, {
					name: "settings",
					className: w.a.settingsIcon
				}))), r.a.createElement(S.a, {
					isEmployee: x,
					isGold: _,
					isNSFW: N,
					title: y,
					username: U
				}), r.a.createElement(h.a, {
					className: I.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: U,
					userCreated: P,
					url: A
				}), (C || !n && !!j) && r.a.createElement(b.a, {
					compact: t,
					currentUserHasSnoovatar: n,
					isOwnProfile: C,
					onClick: O
				}), T && r.a.createElement(p.a, {
					username: U,
					isHovercard: !!M,
					share: {
						username: U
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : o.c.Plain,
				b = ({
					border: e,
					priority: t,
					small: n,
					...a
				}) => s.a.createElement(o.t, u({}, a, {
					priority: m(o.c.Primary, e, t),
					className: Object(l.a)(a.className, d.a.BaseButton),
					size: n ? o.d.S : o.d.M
				})),
				p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? a.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : a.fbt._("Following", null, {
					hk: "1wQlVR"
				})), s.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? a.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : a.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = ({
					buttonType: e,
					border: t,
					priority: n,
					small: a,
					...r
				}) => s.a.createElement(o.t, u({}, r, {
					priority: m(o.c.Secondary, t, n),
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: a ? o.d.S : o.d.M,
					text: p(e)
				}));
			class h extends s.a.Component {
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
						priority: a,
						small: r = !1,
						isFullWidth: o = !1,
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: a,
						small: r,
						isFullWidth: o,
						style: c
					};
					return this.props.userIsSubscriber ? s.a.createElement(f, u({}, d, {
						buttonType: this.props.identifier.type
					})) : s.a.createElement(b, u({}, d, {
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
			var a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				s = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(a.c)(s.a))
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(s.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
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
				modNotes: "_19418fPEhBETWYOoZDCwE0",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				isClosed: "_3sZzbLftdYnJNnJ7m7ImmO",
				isModNotesStyle: "_3X4Y2xTs4XH5VgeZ7w-cv5",
				menuOption: "_1Qm1phX3yfiJHnjgi_O_9V",
				buttonIcon: "_1J0h3Uv7HEaVZiJLcCUlQw"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx");
			const u = e => {
				e.preventDefault()
			};
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = r.a.createRef(), this.menuItems = r.a.createRef(), this.containerRef = r.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						this.containerRef && this.containerRef.current && (this.containerRef.current.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, n) => {
						const {
							onSelect: a
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), a(t), n && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
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
							const n = this.menuItems.current.getElementsByClassName(o.a.menuOption);
							for (let a = 0; a < n.length; a++) e.relatedTarget === n[a] && (t = !0)
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
							const t = this.menuItems.current.getElementsByClassName(o.a.menuOption);
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
					const e = this.menuItems.current.getElementsByClassName(o.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: n,
						menuOptionClassName: a,
						isModNotesStyle: s
					} = this.props;
					return e.map((e, d) => r.a.createElement(c.b, {
						key: d + e.displayText,
						className: Object(i.a)(o.a.menuOption, a, {
							[o.a.topics]: n,
							[o.a.modNotes]: s
						}),
						noIcon: Boolean(e.icon),
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isModNotesStyle: s,
						isTopicsStyle: n
					}, s ? r.a.createElement("span", {
						className: o.a.modNotes
					}, e.icon && e.icon, e.displayText) : r.a.createElement(r.a.Fragment, null, e.icon && e.icon, e.displayText)))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: n,
						isCompactStyle: a,
						isModNotesStyle: s,
						isTopicsStyle: c,
						menuItemsClassName: m,
						name: b,
						isSaving: p,
						buttonIcon: f,
						disabled: h
					} = this.props, {
						isOpen: v
					} = this.state;
					return r.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(i.a)(o.a.dropdownMenu, t, {
							[o.a.topics]: c
						})
					}, r.a.createElement("button", {
						onClick: h ? void 0 : this.handleDropdownClick,
						className: Object(i.a)(e, o.a.selector, {
							[o.a.compact]: a
						}, {
							[o.a.topics]: c
						}, {
							[o.a.modNotes]: s
						}, {
							[o.a.disabled]: h
						}),
						name: b,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: h ? void 0 : this.handleDropdownBlur,
						onKeyDown: h ? void 0 : this.handleDropdownKeyDown
					}, r.a.createElement("span", {
						className: o.a.selectorContent,
						tabIndex: -1
					}, f && r.a.createElement("span", {
						className: Object(i.a)(o.a.buttonIcon, {
							[o.a.isModNotesStyle]: s
						})
					}, f), n), h ? null : p ? r.a.createElement(d.a, {
						sizePx: 8,
						className: o.a.loadingIcon
					}) : r.a.createElement(l.a, {
						name: "caret_down"
					})), r.a.createElement("div", {
						className: Object(i.a)(o.a.menuItems, m, {
							[o.a.topics]: c,
							[o.a.isClosed]: !v && s,
							[o.a.isModNotesStyle]: s
						}),
						onMouseDown: u,
						ref: this.menuItems
					}, !h && v && this.getDropdownMenuItems()))
				}
			}
			t.b = m
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			class s extends r.a.Component {
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
					} = this, n = "string" == typeof t.value ? t.value : "", a = "object" == typeof t.value ? t.value : null, s = n || a;
					return r.a.createElement("div", {
						className: e.className
					}, n && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!s || e.multiple || void 0 !== e.isPending && !e.isPending) && r.a.createElement("input", {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(s.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var a = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				s = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const o = (e, t) => Object(a.a)(e, {
					...r,
					variables: t
				}),
				i = (e, t) => Object(a.a)(e, {
					...s,
					variables: {
						input: {
							preferences: [t]
						}
					}
				})
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "u", (function() {
				return m
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "w", (function() {
				return I
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "v", (function() {
				return _
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "r", (function() {
				return S
			}));
			var a, r, s, o, i, c, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(a || (a = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(r || (r = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(s || (s = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(o || (o = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(i || (i = {})),
			function(e) {
				e.Confirm = "confirm"
			}(c || (c = {}));
			const m = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: a
				}) => r => ({
					...l.o(r),
					action: d.c.VIEW,
					noun: "inbox_notification",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: a
					}
				}),
				b = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: a,
					awardId: r
				}) => s => {
					Object(u.a)({
						...l.o(s),
						action: "receive",
						noun: "inbox_notification",
						source: o.Inbox,
						inbox: {
							id: e,
							isClicked: t,
							isViewed: n
						},
						notification: {
							type: a
						},
						goldPurchase: {
							awardId: r
						}
					})
				},
				p = ({
					dnPromptAction: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "inbox_banner",
					source: "inbox",
					banner: {
						id: "inbox_dn_banner"
					},
					actionInfo: {
						pageType: "dn_prompt",
						type: e
					}
				}),
				f = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: a,
					awardId: r,
					position: s,
					postId: i,
					subredditId: c
				}) => u => ({
					...l.o(u),
					action: d.c.CLICK,
					noun: "inbox_notification",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: a
					},
					goldPurchase: {
						awardId: r
					},
					actionInfo: {
						position: s
					},
					subreddit: c ? {
						id: c
					} : null,
					post: i ? {
						id: i
					} : null
				}),
				h = ({
					badgeCount: e,
					tab: t
				}) => n => ({
					...l.o(n),
					action: d.c.VIEW,
					noun: "inbox",
					source: o.Inbox,
					inbox: {
						badgeCount: e,
						tab: t
					}
				}),
				v = ({
					badgeCount: e,
					tab: t
				}) => t => ({
					...l.o(t),
					action: d.c.VIEW,
					noun: "mini_inbox",
					source: o.Inbox,
					inbox: {
						badgeCount: e,
						tab: a.Activity
					}
				}),
				I = ({
					badgeCount: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "inbox",
					source: o.Nav,
					inbox: {
						badgeCount: e
					}
				}),
				x = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: a,
					awardId: r
				}) => s => ({
					...l.o(s),
					action: d.c.CLICK,
					noun: "inbox_notification_overflow",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: a
					},
					goldPurchase: {
						awardId: r
					}
				}),
				_ = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: a
				}) => r => ({
					...l.o(r),
					action: d.c.VIEW,
					noun: "inbox_notification_overflow",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: a
					}
				});
			var N;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(N || (N = {}));
			const C = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: a,
					type: r
				}) => s => ({
					...l.o(s),
					action: d.c.CLICK,
					noun: "overflow_option",
					source: o.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: a
					},
					notification: {
						type: r
					},
					actionInfo: {
						...l.d(s),
						type: e
					}
				}),
				O = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: a,
					type: r
				}) => s => ({
					...l.o(s),
					action: d.c.UNDO,
					noun: "overflow_option",
					source: o.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: a
					},
					notification: {
						type: r
					},
					actionInfo: {
						...l.d(s),
						type: e
					}
				}),
				g = ({
					actionInfoType: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "empty_state_cta",
					source: o.Inbox,
					actionInfo: {
						...l.d(t),
						type: e
					}
				}),
				k = e => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: o.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: e
					}
				}),
				j = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: o.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: s.MiniInbox
					}
				}),
				E = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "messages",
					source: o.Inbox
				}),
				y = ({
					isMiniInbox: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "mark_all_as_read",
					source: o.Inbox,
					actionInfo: e ? {
						...l.d(t),
						pageType: s.MiniInbox
					} : {}
				}),
				w = (e, t) => n => ({
					...l.o(n),
					action: d.c.CLICK,
					noun: "policy_banner",
					source: o.Inbox,
					actionInfo: {
						...l.d(n),
						pageType: e,
						type: t
					}
				}),
				S = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "inbox_banner",
					source: o.Inbox,
					actionInfo: {
						...l.d(e),
						type: "2021Recap"
					}
				})
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var a = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/meta.ts");
			const i = "undefined" == typeof document ? function() {
				const e = Object(s.e)(o.i) || r.DEFAULT_LOCALE;
				return Object(a.isPseudoLocale)(e) ? r.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || r.DEFAULT_LOCALE;
				return Object(a.isPseudoLocale)(e) ? r.DEFAULT_LOCALE : e
			};
			t.a = i;
			const c = () => {
				const e = i(),
					t = Object(s.e)(o.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			}));
			var a, r = n("./node_modules/react/index.js");

			function s(e, t = a.Bottom) {
				const [n, s] = Object(r.useState)(e), o = Object(r.useRef)(null);
				return {
					container: o,
					isScrollGradientVisible: n,
					calculateGradientVisibility: () => {
						const e = o.current;
						if (!e) return;
						const n = e.getBoundingClientRect().height,
							{
								scrollHeight: r,
								scrollTop: i
							} = e,
							c = Math.ceil(i + n) >= r,
							d = Math.ceil(n - i) >= r,
							l = t === a.Bottom ? c : d;
						s(!l)
					}
				}
			}! function(e) {
				e.Top = "top", e.Bottom = "bottom"
			}(a || (a = {}))
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(s.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), r.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, r.a.createElement("stop", {
				stopColor: "#EC0623"
			}), r.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = function({
				className: e
			}) {
				return r.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					fill: "inherit"
				}, r.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var a;
			n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH", e.CommunityAlerts = "COMMUNITY_ALERTS", e.ModCommunityAlerts = "MOD_COMMUNITY_ALERTS"
				}(a || (a = {}))
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "g", (function() {
				return s
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			const a = e => e.user.notificationPrefs.api.getPreferences.loaded,
				r = e => e.user.notificationPrefs.api.getPreferences.pending,
				s = e => e.user.notificationPrefs.api.setPreferences.pending,
				o = e => e.user.notificationPrefs.preferences,
				i = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, a;
					const r = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						s = null === (n = null == r ? void 0 : r.rows) || void 0 === n ? void 0 : n.byId;
					return s && (null === (a = s[t]) || void 0 === a ? void 0 : a.isEnabled)
				},
				d = (e, t) => !t.some(t => c(e, t))
		},
		"./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/redditGQL/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/redditGQL/operations/UserSubredditsNotificationsLevel.json": function(e) {
			e.exports = JSON.parse('{"id":"8404d1f9e84d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.bf081f1220eb7228632f.js.map